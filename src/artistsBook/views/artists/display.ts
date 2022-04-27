import Artist from "../../models/artist";

function displayView(all : Artist[]) {
    console.log();
    console.log("Here's your favorite artists:");
    all.forEach((artist, index) => console.log("-- " + (index + 1) + " -- " + artist.name));
    console.log();
}

function displayMessageCreated(name: string) {
    console.log(name + " added to your favorite artists.");
    console.log();
}

function displayMessageAlreadyExists(name: string) {
    console.log(name + " already exists!");
    console.log();
}

function displayMessageNotCreated(name: string) {
    console.log(name + " not created.");
    console.log();
}

export {
    displayView,
    displayMessageCreated,
    displayMessageAlreadyExists,
    displayMessageNotCreated};