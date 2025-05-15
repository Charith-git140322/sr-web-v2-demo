import { PhoneNumberType } from "./enums";

export type TTag = {
  id?: number;
  title: string;
  featured?: boolean;
  description?: string;
};

export type TCourse = {
  id: number;
  title: string;
  description: string;
  courseImage?: string;
  price: string;
  tags: TTag[];
};

export type TRole = {
  name: string;
};

export type TPhoneNumber = {
  id: number;
  countryCode: string;
  number: string;
  type: PhoneNumberType;
};

export type TTeacher = {
  id: number;
  email: string;
  name: string;
  country: string;
  teachingMedium: string;
  roles: TRole[];
  description?: string;
  phoneNumbers: TPhoneNumber[];
  profileImageS3ObjectKey?: string;
  coverImageS3ObjectKey?: string;
  courses?: TCourse[];
};

export type TAdvertisement = {
  link: string;
  desktopImageS3ObjectKey: string;
  mobileImageS3ObjectKey: string;
};

export type DTOAPIResponseSuccess<T> = {
  data: T;
  status: number;
};

export type DTOAPIResponseError = {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string;
};
