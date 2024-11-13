import { type DefaultUser } from 'next-auth';

declare module 'next-auth' {
  export interface User extends DefaultUser {
    id: string | number | undefined | null;
    role: string;
    email: string;
    alternativeEmail: string;
    name: string;
    firstName: string;
    middleName: string;
    lastName: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
    phone: string;
    phone2: string;
    image: string;
  }
  export interface Session {
    user: User;
  }
  export interface JWT {
    user: {
      id: string | number | undefined | null;
      role: string;
      email: string;
      alternativeEmail: string;
      name: string;
      firstName: string;
      middleName: string;
      lastName: string;
      address: string;
      address2: string;
      city: string;
      state: string;
      country: string;
      zipcode: string;
      phone: string;
      phone2: string;
      image: string;
    };
  }
}
