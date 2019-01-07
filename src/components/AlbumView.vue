<template>
    <div>
        <img class="album-cover" :src="album.cover">
            <div class="rating-container">
                <star-rating
                    v-bind:increment="0.5"
                    v-bind:max-rating="5"
                    v-bind:star-size="20"
                    v-bind:show-rating="false"
                    v-bind:rating="album.rating"
                    @rating-selected="rateAlbum"
                >
                </star-rating>
            </div>
    </div>    
</template>

<script>

import Album from '../models/album.js';

export default {
    name: "AlbumView",

    props: {
        album: Album,
    },

    methods: {
        rateAlbum: function(rating){
            this.$store.dispatch("addRatedAlbum", {album: this.album, rating});
            this.$store.dispatch("removeAlbumFromList", this.album.id);
        }
    }
    
}
</script>

<style>
    .rating-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .album-cover{
        max-width: 100%;
    }
</style>
