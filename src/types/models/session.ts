import type { User } from '@/types/models/user';

export interface Session {
  id?: number;
  name?: string;
  image?: string;
  role?: string;
  parentId?: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  alternativeEmail?: string;
  phone?: string;
  phone2?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  country?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  idToken?: string;
  exempt?: boolean;
  // profile?: Profile;
  expires?: string;
  sub?: number;
  iat?: number;
  exp?: number;
  jti?: string;
  user?: User;
}
