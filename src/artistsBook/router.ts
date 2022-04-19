import prompts from 'prompts';

import displayAll from './controllers/artists/display';

const actions : string[] = [
  '1 - List my favorite artists',
  '2 - Leave',
];

const nbActions : number = actions.length;

const displayActions = (arr : string[]) => {
  console.log('What do you want to do?');
  arr.forEach((opt) => console.log(opt));
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

const handleStatus = (value : number) => {
  switch (value) {
    case 1:
      displayAll();
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

    run = handleStatus(status);
  }

  console.log('\nSee you !');
};

export default router;
