import repositoryUpdate from '../../repositories/artists/update'

import {
    askName,
    askNewName,
    askMostPopularMusic,
    askNbFans,
    askListenTime
} from '../../views/artists/ask';

import {
    displayMessageUpdated,
    displayMessageNotUpdated,
    displayMessageNotFound
} from '../../views/artists/display';

const update = async () => {
    const artistName = await askName();
    const newArtistName = await askNewName(artistName);
    const music = await askMostPopularMusic(newArtistName);
    const nbFans = await askNbFans(newArtistName);
    const listenedTime = await askListenTime(newArtistName);

    repositoryUpdate(artistName, newArtistName, music, nbFans, listenedTime, (found, err) => {
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