import type { Answers } from 'inquirer';
import inquirer from 'inquirer';

async function showQuestions<Type extends Answers = Answers>(
  questions: any,
): Promise<Type> {
  const result = (await inquirer.prompt(questions)) as Type;
  return result;
}

export default showQuestions;
