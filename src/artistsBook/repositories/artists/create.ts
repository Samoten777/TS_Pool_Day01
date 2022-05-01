import { nanoid } from 'nanoid';

import fs from 'fs';

import getAll from './get';

import Artist from '../../models/artist';

function create(
  name: string,
  mostPopularMusic: string,
  nbFans: number,
  listenedTime: number,
  callback: (found: boolean, err: NodeJS.ErrnoException) => void) {
  const artists = getAll();
  const newArtist: Artist = { id: nanoid(), name, mostPopularMusic, nbFans, listenedTime };

  if (artists.find((artist) => artist.name === name)) {
    callback(true, undefined);
    return;
  }

  fs.writeFile('./src/artistsBook/data/artists.json', JSON.stringify(artists.concat(newArtist)), (err) => {
    callback(false, err);
  });
}

export default create;