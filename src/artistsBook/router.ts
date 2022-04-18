let actions = [
  '1 - List my favorite artists',
  '2 - Leave',
];

const displayActions = (arr : string[]) => {
  console.log('What do you want to do?');
  arr.forEach((opt) => console.log(opt));
};

export const router = () => {
  let status = true;
  while (status) {
    displayActions(actions);
  }

  console.log('See you !');
};

export default { router };
