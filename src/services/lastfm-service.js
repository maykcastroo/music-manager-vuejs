import axios from 'axios';

import Album from '../models/album';

const ROOT = 'http://ws.audioscrobbler.com/2.0/';
const KEY = 'c795b8ddba51a6eabd06bc03e3bbbe1f';

export default class LastFmService {

    responseToAlbums(response){
        return response.map((album) => {
            return new Album({
                id: `${album.name}-${album.artist}`,
                name: album.name,
                artist: album.artist,
                cover: album.image[2]['#text'],
            })
        })
    }

    getAlbumsByTag(tag) {
        return axios.get(`${ROOT}?method=tag.gettopalbums&tag=${tag}&api_key=${KEY}&format=json`);           
    }
}
