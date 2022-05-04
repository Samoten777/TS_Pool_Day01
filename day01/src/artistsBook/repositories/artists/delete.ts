import fs from 'fs';

import getAll from './get';

export default function deleteArtist(name: string, callback: (found: boolean, err: NodeJS.ErrnoException) => void)
{
    const artists = getAll();

    const index = artists.map(artist => artist.name).indexOf(name);

    if (index === -1) {
        callback(false, undefined);
        return;
    }
    artists.splice(index, 1);

    fs.writeFile('./src/artistsBook/data/artists.json', JSON.stringify(artists), (err) => {
        if (err) {
            callback(true, err);
        } else {
            callback(true, undefined);
        }
    });
}

