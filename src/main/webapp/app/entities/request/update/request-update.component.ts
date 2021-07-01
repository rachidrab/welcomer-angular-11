import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import { IRequest, Request } from '../request.model';
import { RequestService } from '../service/request.service';
import { IUser } from 'app/entities/user/user.model';
import { UserService } from 'app/entities/user/user.service';

@Component({
  selector: 'jhi-request-update',
  templateUrl: './request-update.component.html',
})
export class RequestUpdateComponent implements OnInit {
  isSaving = false;

  usersSharedCollection: IUser[] = [];

  editForm = this.fb.group({
    id: [],
    isValid: [],
    isDelivered: [],
    deliveryDate: [],
    createdDate: [],
    body: [],
    comment: [null, [Validators.maxLength(2000)]],
    createdBy: [],
    validatedBy: [],
  });

  constructor(
    protected requestService: RequestService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    protected fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ request }) => {
      this.updateForm(request);

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const request = this.createFromForm();
    if (request.id !== undefined) {
      this.subscribeToSaveResponse(this.requestService.update(request));
    } else {
      this.subscribeToSaveResponse(this.requestService.create(request));
    }
  }

  trackUserById(index: number, item: IUser): number {
    return item.id!;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IRequest>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(request: IRequest): void {
    this.editForm.patchValue({
      id: request.id,
      isValid: request.isValid,
      isDelivered: request.isDelivered,
      deliveryDate: request.deliveryDate,
      createdDate: request.createdDate,
      body: request.body,
      comment: request.comment,
      createdBy: request.createdBy,
      validatedBy: request.validatedBy,
    });

    this.usersSharedCollection = this.userService.addUserToCollectionIfMissing(
      this.usersSharedCollection,
      request.createdBy,
      request.validatedBy
    );
  }

  protected loadRelationshipsOptions(): void {
    this.userService
      .query()
      .pipe(map((res: HttpResponse<IUser[]>) => res.body ?? []))
      .pipe(
        map((users: IUser[]) =>
          this.userService.addUserToCollectionIfMissing(
            users,
            this.editForm.get('createdBy')!.value,
            this.editForm.get('validatedBy')!.value
          )
        )
      )
      .subscribe((users: IUser[]) => (this.usersSharedCollection = users));
  }

  protected createFromForm(): IRequest {
    return {
      ...new Request(),
      id: this.editForm.get(['id'])!.value,
      isValid: this.editForm.get(['isValid'])!.value,
      body: this.editForm.get(['body'])!.value,
      isDelivered: this.editForm.get(['isDelivered'])!.value,
      deliveryDate: this.editForm.get(['deliveryDate'])!.value,
      createdDate: this.editForm.get(['createdDate'])!.value,
      comment: this.editForm.get(['comment'])!.value,
      createdBy: this.editForm.get(['createdBy'])!.value,
      validatedBy: this.editForm.get(['validatedBy'])!.value,
    };
  }
}
