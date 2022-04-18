const prompts = require('prompts')

const askName = [
    {
        type : 'text',
        name : 'value',
        message: 'What is your name ?'
    }
];

export const helloName = async () => {
    const result = await prompts(askName);
    if (result.value === "") {
        console.error("You should enter a valid name")
    } else {
        console.log("Hello " + result.value);
    }
};
