import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as dayjs from 'dayjs';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { IRequest, getRequestIdentifier } from '../request.model';

export type EntityResponseType = HttpResponse<IRequest>;
export type EntityArrayResponseType = HttpResponse<IRequest[]>;

@Injectable({ providedIn: 'root' })
export class RequestService {
  public resourceUrl = this.applicationConfigService.getEndpointFor('api/requests');

  constructor(protected http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(request: IRequest): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(request);
    return this.http
      .post<IRequest>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(request: IRequest): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(request);
    return this.http
      .put<IRequest>(`${this.resourceUrl}/${getRequestIdentifier(request) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  partialUpdate(request: IRequest): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(request);
    return this.http
      .patch<IRequest>(`${this.resourceUrl}/${getRequestIdentifier(request) as number}`, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IRequest>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IRequest[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addRequestToCollectionIfMissing(requestCollection: IRequest[], ...requestsToCheck: (IRequest | null | undefined)[]): IRequest[] {
    const requests: IRequest[] = requestsToCheck.filter(isPresent);
    if (requests.length > 0) {
      const requestCollectionIdentifiers = requestCollection.map(requestItem => getRequestIdentifier(requestItem)!);
      const requestsToAdd = requests.filter(requestItem => {
        const requestIdentifier = getRequestIdentifier(requestItem);
        if (requestIdentifier == null || requestCollectionIdentifiers.includes(requestIdentifier)) {
          return false;
        }
        requestCollectionIdentifiers.push(requestIdentifier);
        return true;
      });
      return [...requestsToAdd, ...requestCollection];
    }
    return requestCollection;
  }

  protected convertDateFromClient(request: IRequest): IRequest {
    return Object.assign({}, request, {
      deliveryDate: request.deliveryDate?.isValid() ? request.deliveryDate.format(DATE_FORMAT) : undefined,
      createdDate: request.createdDate?.isValid() ? request.createdDate.format(DATE_FORMAT) : undefined,
    });
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.deliveryDate = res.body.deliveryDate ? dayjs(res.body.deliveryDate) : undefined;
      res.body.createdDate = res.body.createdDate ? dayjs(res.body.createdDate) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((request: IRequest) => {
        request.deliveryDate = request.deliveryDate ? dayjs(request.deliveryDate) : undefined;
        request.createdDate = request.createdDate ? dayjs(request.createdDate) : undefined;
      });
    }
    return res;
  }
}
