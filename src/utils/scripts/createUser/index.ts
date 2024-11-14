import { RoleName, UserTitle } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { exec } from 'child_process';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';

import { env } from '@/configs';
import prisma from '@/lib/prisma';

const { salts } = env;

interface UserAnswers {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: RoleName;
  title: UserTitle;
}

const questions = [
  { name: 'email', message: 'Enter the user email:', type: 'input' },
  {
    name: 'firstName',
    message: 'Enter the user’s first name:',
    type: 'input',
  },
  {
    name: 'lastName',
    message: 'Enter the user’s last name:',
    type: 'input',
  },
  { type: 'password', name: 'password', message: 'Enter the user password:' },
  {
    type: 'list',
    name: 'role',
    message: 'Select the user role:',
    choices: [
      { name: 'Admin', value: RoleName.ADMIN },
      { name: 'Pro', value: RoleName.PRO },
      { name: 'Member', value: RoleName.MEMBER },
    ],
  },
  {
    type: 'list',
    name: 'title',
    message: 'Select the user title:',
    choices: [
      { name: 'Admin', value: UserTitle.ADMIN },
      { name: 'Student', value: UserTitle.STUDENT },
      { name: 'Teacher', value: UserTitle.TEACHER },
    ],
  },
];

async function createUser() {
  try {
    const answers = await inquirer.prompt<UserAnswers>(questions as any);

    const {
      email,
      firstName,
      lastName,
      password,
      role: roleName,
      title: userTitle,
    } = answers;

    const role = await prisma.role.findUnique({
      where: { name: roleName },
    });

    if (!role) {
      throw new Error('Role not found in the database.');
    }

    const passwordHash = await bcrypt.hash(password, salts);

    const newUser = {
      user: {
        email,
        firstName,
        lastName,
        title: userTitle,
      },
      passwordHash,
      role,
    };

    const filePath = path.resolve('prisma/seeds/users/index.ts');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const insertPosition = fileContent.lastIndexOf(']');

    if (insertPosition === -1) {
      throw new Error("Array 'users' not found in the file.");
    }

    const newUserString = `
    {
      user: {
        email: '${newUser.user.email}',
        firstName: '${newUser.user.firstName}',
        lastName: '${newUser.user.lastName}',
        title: UserTitle.${newUser.user.title},
      },
      passwordHash: '${newUser.passwordHash}',
      role: ${roleName.toLowerCase()},
    },`;

    const updatedFileContent =
      fileContent.slice(0, insertPosition) +
      newUserString +
      fileContent.slice(insertPosition);

    fs.writeFileSync(filePath, updatedFileContent, 'utf-8');

    console.log('New user successfully added to seedUsers.ts!');

    exec('npm run format', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error formatting code: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log('Code formatted successfully!');
    });
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
