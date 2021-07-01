import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IRequest, Request } from '../request.model';
import { RequestService } from '../service/request.service';

@Injectable({ providedIn: 'root' })
export class RequestRoutingResolveService implements Resolve<IRequest> {
  constructor(protected service: RequestService, protected router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IRequest> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        mergeMap((request: HttpResponse<Request>) => {
          if (request.body) {
            return of(request.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Request());
  }
}
