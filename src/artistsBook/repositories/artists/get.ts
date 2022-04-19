import data from "../../data/artists.json"
import Artist from "../../models/artist";

const getAll = () : Artist[] => {
    return data;
}

export default getAll;