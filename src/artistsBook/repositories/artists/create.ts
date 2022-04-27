import fs from 'fs'

import Artist from '../../models/artist'

import getAll from './get'

function repositoryCreate(name: string, callback: (found: boolean, err: NodeJS.ErrnoException) => void) {
    const artists: Artist[] = getAll();
    const newArtist: Artist = { name: name };

    if (artists.find(newArtist => newArtist.name === name))
        callback(true, undefined);
    else {
        fs.writeFile('./src/artistsBook/data/artists.json', JSON.stringify(artists.concat(newArtist)), (err) => {
            callback(false, err);
        });
    }
};

export default repositoryCreate;