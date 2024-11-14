/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-param-reassign */
import { compare } from 'bcryptjs';
import type { NextAuthOptions, Profile } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from '@/lib/prisma';

declare module 'next-auth/jwt' {
  interface JWT {
    provider: string;
    idToken: string;
    accessToken: string;
    profile: Profile;
  }
}

declare module 'next-auth' {
  interface Session {
    user: User;
  }
  interface User {
    idToken?: string;
    profile?: Profile;
    expires?: string;
    sub?: string;
    iat?: number;
    exp?: number;
    jti?: string;
    status?: string;
  }
  interface Profile {
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
    status?: string;
    state?: string;
    zipcode?: string;
    country?: string;
    phone?: string;
    phone2?: string;
    address?: string;
    address2?: string;
    city?: string;
    createdAt?: string;
    updatedAt?: string;
    idToken?: string;
    profile?: Profile;
    expires?: string;
    sub?: string;
    iat?: number;
    exp?: number;
    jti?: string;
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/login',
    signOut: '/',
    error: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user: any = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(await compare(credentials.password, user.password)))
          throw new Error('Incorrect password.');

        if (user) {
          // if (user.status !== 'Active') {
          //   throw new Error(
          //     'User not confirmed. Check your email to activate account.',
          //   );
          // }

          user.name = `${user.firstName} ${user.lastName}`;
          user.picture = user.image;
          // Any object returned will be saved in `user` property of the JWT

          return user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: session.user.email },
      });

      session.user = existingUser as any;

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};
