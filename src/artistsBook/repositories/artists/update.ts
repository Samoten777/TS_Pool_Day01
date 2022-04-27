import fs from 'fs';

import getAll from './get';

// eslint-disable-next-line no-unused-vars
function update(name: string, newName: string, callback: (found: boolean, err: NodeJS.ErrnoException) => void) {
    const artists = getAll();

    let found = false;
    let duplicate: NodeJS.ErrnoException = { name: 'duplicate', message: 'The new name already exists in your favorites list.' };

    if (artists.find(artist => artist.name === newName)) {
        callback(true, duplicate);
        return;
    };

    const artistsUpdated = artists.map((artist) => {
        if (artist.name === name) {
            found = true;
            artist.name = newName;
        }
        return artist;
    });

    if (!found) {
        callback(false, undefined);
        return;
    }

    fs.writeFile('./src/artistsBook/data/artists.json', JSON.stringify(artistsUpdated), (err) => {
        if (err) {
            callback(true, err);
        } else {
            callback(true, undefined);
        }
    });
}

export default update;