import prompts from 'prompts';

const askQuestion = async (question: string) : Promise<string> => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: question,
      });

      return response.value;
}

const askNumber = async (question: string) : Promise<number> => {
    const response = await prompts({
        type: 'number',
        name: 'value',
        message: question,
        validate: (test :number) => (test < 0 ? 'Enter a positive number' : true)
    })

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

const askMostPopularMusic = async (name: string) : Promise<string> => {
    const music = await askQuestion(`What's ${name}'s most popular music?`);
    return music;
}

const askNbFans = async (name: string) : Promise<number> => {
    const nbFans = await askNumber(`How many fans does ${name} have?`);
    return nbFans;
}

const askListenTime = async (name: string) : Promise<number> => {
    const listenTime = await askNumber(`How much time (in seconds) did you spend listening to ${name}?`);
    return listenTime;
}

export {
    askName,
    askNewName,
    askMostPopularMusic,
    askNbFans,
    askListenTime
};
