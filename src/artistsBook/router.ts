import { clear } from 'console';

import prompts from 'prompts';

import displayAll from './controllers/artists/display';

import create from './controllers/artists/create';

import update from './controllers/artists/update';

import deleteArtist from './controllers/artists/delete'

const actions: string[] = [
  '1 - List my favorite artists',
  '2 - Add an artist to my favorites',
  '3 - Update the name of an artist',
  '4 - Delete an artist from my favorites',
  '5 - Leave',
];

const nbActions: number = actions.length;

const displayActions = (arr: string[]) => {
  console.log('What do you want to do?');
  arr.forEach((action: string) => console.log(action));
};

const getInput = async (): Promise<number> => {
  const response = await prompts({
    type: 'number',
    name: 'value',
    message: '> ',
    validate: (test: number) => (test < 0 && test > nbActions ? 'Enter a valid option.' : true),
  });

  return response.value;
};

const handleStatus = async (value: number) => {
  switch (value) {
    case 1:
      displayAll();
      break;
    case 2:
      await create();
      break;
    case 3:
      await update();
      break;
    case 4:
      await deleteArtist();
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
    // eslint-disable-next-line no-await-in-loop
    run = await handleStatus(status);

  }
  console.log();
  console.log('See you !');
};

export default router;
