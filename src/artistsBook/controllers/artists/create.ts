import repositoryCreate from '../../repositories/artists/create'

import {
    askName,
    askMostPopularMusic,
    askNbFans,
    askListenTime
} from '../../views/artists/ask';

import {
    displayMessageCreated,
    displayMessageNotCreated,
    displayMessageAlreadyExists
} from '../../views/artists/display';

const create = async () => {
    const name = await askName();
    const music = await askMostPopularMusic(name);
    const nbFans = await askNbFans(name);
    const listenedTime = await askListenTime(name);

    repositoryCreate(name, music, nbFans, listenedTime, (found, err) => {
        if(err) {
            displayMessageNotCreated(name);
            console.error(err);
        } else if(found)
            displayMessageAlreadyExists(name);
        else
            displayMessageCreated(name);
    });
}

export default create;