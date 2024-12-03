import { type Prisma, RoleName } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';

import { prisma } from '@/lib/prisma';

export class UserService {
  userRepository: Prisma.UserDelegate<DefaultArgs>;

  userRoleRepository: Prisma.UserRoleDelegate<DefaultArgs>;

  sessionRepository: Prisma.SessionDelegate<DefaultArgs>;

  accountsRepository: Prisma.AccountDelegate<DefaultArgs>;

  roleRepository: Prisma.RoleDelegate<DefaultArgs>;

  constructor() {
    this.userRepository = prisma.user;
    this.userRoleRepository = prisma.userRole;
    this.sessionRepository = prisma.session;
    this.accountsRepository = prisma.account;
    this.roleRepository = prisma.role;
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        avatar: true,
        firstName: true,
        lastName: true,
        password: true,
        speed: true,
        title: true,
        sessions: true,
        roles: {
          select: {
            role: {
              select: { name: true },
            },
          },
        },
      },
    });
  }

  async createUser(
    email: string,
    firstName: string,
    lastName: string,
    password: string,
    avatar?: string,
  ) {
    const role = await this.roleRepository.findUnique({
      where: {
        name: RoleName.STUDENT,
      },
    });
    if (!role) {
      throw new Error('Role not found');
    }

    const user = await this.userRepository.create({
      data: {
        email,
        firstName,
        lastName,
        avatar,
        password,
      },
    });

    await this.userRoleRepository.create({
      data: {
        userId: user.id,
        roleId: role.id,
      },
    });

    return user;
  }

  async deleteUser(userId: string) {
    await this.userRoleRepository.deleteMany({
      where: {
        userId,
      },
    });

    await this.accountsRepository.deleteMany({
      where: {
        userId,
      },
    });

    await this.userRepository.delete({
      where: {
        id: userId,
      },
    });
  }
}
