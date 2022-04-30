import repositoryDelete from '../../repositories/artists/delete'

import { askName } from '../../views/artists/ask'

import {
    displayMessageDeleted,
    displayMessageNotDeleted,
    displayMessageNotFound
} from '../../views/artists/display';

export default async function deleteArtist(){
    const name = await askName();

    repositoryDelete(name, (found, err) => {
        if (err) {
            displayMessageNotDeleted(name);
            console.error(err);
        } else if (!found) {
            displayMessageNotFound(name);
        } else {
            displayMessageDeleted(name);
        }
    });
}