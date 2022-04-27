import repositoryUpdate from '../../repositories/artists/update'

import {
    askName,
    askNewName
} from '../../views/artists/ask';

import {
    displayMessageUpdated,
    displayMessageNotUpdated,
    displayMessageNotFound
} from '../../views/artists/display';

const update = async () => {
    const artistName = await askName();
    const newArtistName = await askNewName(artistName);

    repositoryUpdate(artistName, newArtistName, (found, err) => {
        if(err) {
            console.error(err.message);
            displayMessageNotUpdated(artistName);
        } else if(!found)
            displayMessageNotFound(artistName);
        else
            displayMessageUpdated(artistName, newArtistName);
    });
}

export default update;