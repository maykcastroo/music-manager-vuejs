export default class Track{
    constructor({name, rank, artist, duration}){
        this._name = name;
        this._rank = rank;
        this._artist = artist;
        this._duration = duration;
    }

    get name(){
        return this._name;
    }

    get rank(){
        return this._rank;
    }

    get artist(){
        return this._artist;
    }

    get duration(){
        return this._duration;
    }
}