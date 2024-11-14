import { RoleName, UserTitle } from '@prisma/client';

export const userQuestions = [
  {
    name: 'email',
    message: 'Enter the user email:',
    type: 'input',
    default: 'user@example.com',
  },
  {
    name: 'firstName',
    message: 'Enter the user’s first name:',
    type: 'input',
    default: 'Jhon',
  },
  {
    name: 'lastName',
    message: 'Enter the user’s last name:',
    type: 'input',
    default: 'Doe',
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter the user password:',
    default: 'Str0ngP@ssword',
  },
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
