import createUser from './createUser';

function generate(runnable: string) {
  switch (runnable) {
    case 'user':
      return createUser();
    // case 'role':
    //   return createRole();
    default:
      return 'Invalid option';
  }
}

export default generate;

const args = process.argv.slice(2);
const runnable = args[0];
if (runnable) generate(runnable);
else console.log('No option provided');
