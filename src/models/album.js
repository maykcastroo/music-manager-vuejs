export default class Album{
    constructor({id, name, cover, artist, tracks}){
        this._id = id;
        this._name = name;
        this._cover = cover;
        this._artist = artist;
        this._tracks = tracks;
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get cover(){
        return this._cover;
    }

    get artist(){
        return this._artist;
    }

    get tracks(){
        return this._tracks;
    }

}