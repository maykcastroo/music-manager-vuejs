import Vue from 'vue';
import Vuex from 'vuex';

import LastFmService from '../services/lastfm-service';

Vue.use(Vuex);

const service = new LastFmService();

const state = {
    albums: [],
    rated_albums: [],
}

const getters = {
    albums: state => state.albums,
    rated_albums: state => state.rated_albums,
}

const mutations = {
    SET_ALBUMS(state, albums){
        state.albums = albums;
    },

    ADD_RATED_ALBUM(state, album){
        state.rated_albums.push(album);
    }
}

const actions = {
    getAlbumsByTag(context, tag){
        service.getAlbumsByTag(tag)
                .then((albums)=>{
                    context.commit("SET_ALBUMS", albums);
                })
    },

    addRatedAlbum(context, {album, rating}){
        album.rating = rating;
        context.commit("ADD_RATED_ALBUM", album);
    },

    removeAlbumFromList(context, albumId){
        const albums = context.state.albums.filter(album => album.id != albumId);
        context.commit("SET_ALBUMS", albums);
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;