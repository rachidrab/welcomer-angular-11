import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { User } from '../user-management.model';
import { UserManagementService } from '../service/user-management.service';

@Component({
  selector: 'jhi-user-mgmt-update',
  templateUrl: './user-management-update.component.html',
})
export class UserManagementUpdateComponent implements OnInit {
  user!: User;
  authorities: string[] = [];
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    ],
    firstName: ['', [Validators.maxLength(50)]],
    lastName: ['', [Validators.maxLength(50)]],
    email: ['', [Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    activated: [],
    langKey: [],
    dateEmbauche: [],
    phoneNumber: [''],
    isOnBoarding: [''],
    isOffBoarding: [''],
    isExpatriation: [''],
    dateOffBoarding: [''],
    ticketOffBoarding: [''],
    dateExpatriation: [''],
    ticketExpatriation: [''],
    ancienMatricule: [''],
    nouveauMatricule: [''],
    contactItSiteDepart: [''],
    contactItSiteArrivee: [''],
    remarqueRh: [''],
    firstCallBackDay: [''],
    integrationDate: [''],
    instalationDate: [''],
    comment: [''],
    authorities: [''],
  });

  constructor(private userService: UserManagementService, private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ user }) => {
      if (user) {
        this.user = user;
        if (this.user.id === undefined) {
          this.user.activated = true;
        }
        this.updateForm(user);
      }
    });
    this.userService.authorities().subscribe(authorities => (this.authorities = authorities));
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateUser(this.user);
    if (this.user.id !== undefined) {
      this.userService.update(this.user).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    } else {
      this.user.langKey = 'en';
      this.userService.create(this.user).subscribe(
        () => this.onSaveSuccess(),
        () => this.onSaveError()
      );
    }
  }

  private updateForm(user: User): void {
    this.editForm.patchValue({
      id: user.id,
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      activated: user.activated,
      langKey: user.langKey,
      dateEmbauche: user.dateEmbauche,
      phoneNumber: user.phoneNumber,
      isOnBoarding: user.isOnBoarding,
      isOffBoarding: user.isOffBoarding,
      isExpatriation: user.isExpatriation,
      dateOffBoarding: user.dateOffBoarding,
      ticketOffBoarding: user.ticketOffBoarding,
      dateExpatriation: user.dateExpatriation,
      ticketExpatriation: user.ticketExpatriation,
      ancienMatricule: user.ancienMatricule,
      nouveauMatricule: user.nouveauMatricule,
      contactItSiteDepart: user.contactItSiteDepart,
      contactItSiteArrivee: user.contactItSiteArrivee,
      remarqueRh: user.remarqueRh,
      firstCallBackDay: user.firstCallBackDay,
      integrationDate: user.integrationDate,
      instalationDate: user.instalationDate,
      comment: user.comment,
      authorities: user.authorities,
    });
  }

  private updateUser(user: User): void {
    user.login = this.editForm.get(['login'])!.value;
    user.firstName = this.editForm.get(['firstName'])!.value;
    user.lastName = this.editForm.get(['lastName'])!.value;
    user.email = this.editForm.get(['email'])!.value;
    user.activated = this.editForm.get(['activated'])!.value;
    user.langKey = this.editForm.get(['langKey'])!.value;
    user.dateEmbauche = this.editForm.get(['dateEmbauche'])!.value;
    user.phoneNumber = this.editForm.get(['phoneNumber'])!.value;
    user.isOnBoarding = this.editForm.get(['isOnBoarding'])!.value;
    user.isOffBoarding = this.editForm.get(['isOffBoarding'])!.value;
    user.isExpatriation = this.editForm.get(['isExpatriation'])!.value;
    user.dateOffBoarding = this.editForm.get(['dateOffBoarding'])!.value;
    user.ticketOffBoarding = this.editForm.get(['ticketOffBoarding'])!.value;
    user.dateExpatriation = this.editForm.get(['dateExpatriation'])!.value;
    user.ticketExpatriation = this.editForm.get(['ticketExpatriation'])!.value;
    user.ancienMatricule = this.editForm.get(['ancienMatricule'])!.value;
    user.nouveauMatricule = this.editForm.get(['nouveauMatricule'])!.value;
    user.contactItSiteDepart = this.editForm.get(['contactItSiteDepart'])!.value;
    user.contactItSiteArrivee = this.editForm.get(['contactItSiteArrivee'])!.value;
    user.remarqueRh = this.editForm.get(['remarqueRh'])!.value;
    user.firstCallBackDay = this.editForm.get(['firstCallBackDay'])!.value;
    user.integrationDate = this.editForm.get(['integrationDate'])!.value;
    user.instalationDate = this.editForm.get(['instalationDate'])!.value;
    user.comment = this.editForm.get(['comment'])!.value;
    user.authorities = this.editForm.get(['authorities'])!.value;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
