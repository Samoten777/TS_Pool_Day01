import repositoryCreate from '../../repositories/artists/create'

import askName from '../../views/artists/ask';

import {
    displayMessageCreated,
    displayMessageNotCreated,
    displayMessageAlreadyExists
} from '../../views/artists/display';

const create = async () => {
    const artistName = await askName();

    repositoryCreate(artistName, (found, err) => {
        if(err) {
            displayMessageNotCreated(artistName);
            console.error(err);
        } else if(found)
            displayMessageAlreadyExists(artistName);
        else
            displayMessageCreated(artistName);
    });
}

export default create;