export interface IUser {
  id?: number;
  login?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string;
  password?: string;
  activated?: boolean;
  langKey?: string;
  dateEmbauche?: Date;
  phoneNumber?: string;
  isOnBoarding?: boolean;
  isOffBoarding?: boolean;
  isExpatriation?: boolean;
  dateOffBoarding?: Date;
  ticketOffBoarding?: string;
  dateExpatriation?: Date;
  ticketExpatriation?: string;
  ancienMatricule?: string;
  nouveauMatricule?: string;
  contactItSiteDepart?: string;
  contactItSiteArrivee?: string;
  remarqueRh?: string;
  firstCallBackDay?: Date;
  integrationDate?: Date;
  instalationDate?: Date;
  comment?: string;
  authorities?: string[];
  createdBy?: string;
  createdDate?: Date;
  lastModifiedBy?: string;
  lastModifiedDate?: Date;
}

export class User implements IUser {
  constructor(
    public id?: number,
    public login?: string,
    public firstName?: string | null,
    public lastName?: string | null,
    public email?: string,
    public password?: string,
    public activated?: boolean,
    public langKey?: string,
    public dateEmbauche?: Date,
    public phoneNumber?: string,
    public isOnBoarding?: boolean,
    public isOffBoarding?: boolean,
    public isExpatriation?: boolean,
    public dateOffBoarding?: Date,
    public ticketOffBoarding?: string,
    public dateExpatriation?: Date,
    public ticketExpatriation?: string,
    public ancienMatricule?: string,
    public nouveauMatricule?: string,
    public contactItSiteDepart?: string,
    public contactItSiteArrivee?: string,
    public remarqueRh?: string,
    public firstCallBackDay?: Date,
    public integrationDate?: Date,
    public instalationDate?: Date,
    public comment?: string,
    public authorities?: string[],
    public createdBy?: string,
    public createdDate?: Date,
    public lastModifiedBy?: string,
    public lastModifiedDate?: Date
  ) {}
}
