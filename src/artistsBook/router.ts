import prompts from 'prompts';

import displayAll from './controllers/artists/display';

import create from './controllers/artists/create';
import { clear } from 'console';

const actions : string[] = [
  '1 - List my favorite artists',
  '2 - Add an artist to my favorites',
  '3 - Leave',
];

const nbActions : number = actions.length;

const displayActions = (arr : string[]) => {
  console.log('What do you want to do?');
  arr.forEach((action: string) => console.log(action));
};

const getInput = async () : Promise<number> => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: '> ',
    validate: (test : number) => (test < 0 && test > nbActions ? 'Enter a valid option.' : true),
  });

  return response.value;
};

const handleStatus = async (value : number) => {
  switch (value) {
    case 1:
      displayAll();
      break;
    case 2:
      await create();
      break;
    case nbActions:
      return false;
    default:
      return true;
  }
  return true;
};

const router = async () => {
  let run = true;

  while (run) {
    displayActions(actions);

    // eslint-disable-next-line no-await-in-loop
    const status = await getInput();

    clear();

    run = await handleStatus(status);
  }
  clear();
  console.log('\nSee you !');
};

export default router;
