import * as dayjs from 'dayjs';
import { IUser } from 'app/entities/user/user.model';
import { RequestBody } from 'app/entities/enumerations/request-body.model';

export interface IRequest {
  id?: number;
  isValid?: boolean | null;
  isDelivered?: boolean | null;
  deliveryDate?: dayjs.Dayjs | null;
  createdDate?: dayjs.Dayjs | null;
  body?: RequestBody | null;
  comment?: string | null;
  createdBy?: IUser | null;
  validatedBy?: IUser | null;
}

export class Request implements IRequest {
  constructor(
    public id?: number,
    public body?: RequestBody | null,
    public isValid?: boolean | null,
    public isDelivered?: boolean | null,
    public deliveryDate?: dayjs.Dayjs | null,
    public createdDate?: dayjs.Dayjs | null,
    public comment?: string | null,
    public createdBy?: IUser | null,
    public validatedBy?: IUser | null
  ) {
    this.isValid = this.isValid ?? false;
    this.isDelivered = this.isDelivered ?? false;
  }
}

export function getRequestIdentifier(request: IRequest): number | undefined {
  return request.id;
}
