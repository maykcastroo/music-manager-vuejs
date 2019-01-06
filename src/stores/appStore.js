import Vue from 'vue';
import Vuex from 'vuex';

import LastFmService from '../services/lastfm-service';

Vue.use(Vuex);

const service = new LastFmService();

const state = {
    albums: [],
}

const getters = {
    albums: state => state.albums,
}

const mutations = {
    getAlbumsByTag(state, tag){
        service.getAlbumsByTag(tag)
                .then((response) => {
                    state.albums = service.responseToAlbums(response.data.albums.album);
                }) 
    }

}

const actions = {
    getAlbumsByTag(context, tag){
        context.commit("getAlbumsByTag", tag);
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;