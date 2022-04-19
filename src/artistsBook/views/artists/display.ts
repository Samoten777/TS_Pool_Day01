import Artist from "../../models/artist";

function displayView(all : Artist[]) {
    console.log("\nHere's your favorite artists:");
    all.forEach((element, index) => console.log("-- " + (index + 1) + " -- " + element.name));
    console.log();
}

export default displayView;