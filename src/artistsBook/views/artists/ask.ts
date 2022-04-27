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

export default askName;
