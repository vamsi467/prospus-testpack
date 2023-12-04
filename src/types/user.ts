export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IAddress {
  address: string;
  city?: string;
  coordinates: ICoordinates;
  postalCode: string;
  state: string;
}

export interface IHair {
  color: string;
  type: string;
}

export interface IBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface ICompany {
  address: IAddress;
  department: string;
  name: string;
  title: string;
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: IHair;
  domain: string;
  ip: string;
  address: IAddress;
  macAddress: string;
  university: string;
  bank: IBank;
  company: ICompany;
  ein: string;
  ssn: string;
  userAgent: string;
}
export interface IMessage {
  id: number;
  body: string;
  user: Partial<IUser>;
  postId: number;
}
