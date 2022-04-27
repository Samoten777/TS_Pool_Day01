import prompts from 'prompts';

const askQuestion = async (question: string) : Promise<string> => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: question,
      });

      return response.value;
}

const askName = async () : Promise<string> => {
    const name = await askQuestion("What's the artist name?");
    return name;
};

const askNewName = async (name: string) : Promise<string> => {
    const newName = await askQuestion("What will be the new name of " + name + " ?");
    return newName;
}

export {
    askName,
    askNewName};
