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

function displayMessageUpdated(name: string, newName: string) {
    console.log(name + " successfully updated to " + newName + ".");
    console.log();
}

function displayMessageDeleted(name: string) {
    console.log(name + " deleted from your favorite artists.");
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

function displayMessageNotUpdated(name: string) {
    console.log(name + " not updated.");
    console.log();
}

function displayMessageNotFound(name: string) {
    console.log(name + " not found.");
    console.log();
}

function displayMessageNotDeleted(name: string) {
    console.log(`${name} not deleted`);
    console.log();
}

export {
    displayView,
    displayMessageCreated,
    displayMessageUpdated,
    displayMessageDeleted,
    displayMessageAlreadyExists,
    displayMessageNotCreated,
    displayMessageNotUpdated,
    displayMessageNotFound,
    displayMessageNotDeleted
};