import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { IRequest } from '../request.model';
import { RequestService } from '../service/request.service';

@Component({
  templateUrl: './request-delete-dialog.component.html',
})
export class RequestDeleteDialogComponent {
  request?: IRequest;

  constructor(protected requestService: RequestService, public activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.requestService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
