import prompts from "prompts";


const askName = async () : Promise<string> => {
    const result = await prompts({
        type : 'text',
        name : 'value',
        message: 'What is your name ?',
        validate: (test : string) => (test.length <= 0 ? 'Enter a valid name' : true)
    });
        return result.value;
};

export const helloName = async () => {
    let name : string = await askName();
    console.log("Hello " + name);
};
