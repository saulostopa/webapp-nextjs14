import type { RoleName, UserTitle } from '@prisma/client';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

import { env } from '@/configs';
import { prisma } from '@/lib/prisma';

import showQuestions from '../showQuestions';
import { userQuestions } from './questions';

const { salts } = env;

interface UserAnswers {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: RoleName;
  title: UserTitle;
}

async function createUser() {
  try {
    const answers = await showQuestions<UserAnswers>(userQuestions);

    const { password, role, ...data } = answers;

    const dbRole = await prisma.role.findUnique({
      where: { name: role },
    });

    if (!dbRole) {
      throw new Error('Role not found in the database.');
    }

    const passwordHash = await bcrypt.hash(password, salts);

    const newUser = {
      user: {
        ...data,
        password: passwordHash,
      },
      role,
    };

    const filePath = path.resolve('prisma/seeds/users/index.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const insertPosition = fileContent.lastIndexOf(']');

    if (insertPosition === -1) {
      throw new Error("Array 'users' not found in the file.");
    }

    const newUserString = `  {
      user: {
        email: '${newUser.user.email}',
        firstName: '${newUser.user.firstName}',
        lastName: '${newUser.user.lastName}',
        title: UserTitle.${newUser.user.title},
        password:
          '${newUser.user.password}',
      },
      role: ${role.toLowerCase()},
    },
  `;

    const updatedFileContent =
      fileContent.slice(0, insertPosition) +
      newUserString +
      fileContent.slice(insertPosition);

    fs.writeFileSync(filePath, updatedFileContent, 'utf-8');

    console.log('New user successfully added to seedUsers.ts!');
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

export default createUser;
