import displayView from "../../views/artists/display";
import getAll from "../../repositories/artists/get";

function displayAll() {
   const artists = getAll();
   displayView(artists);
}

export default displayAll;