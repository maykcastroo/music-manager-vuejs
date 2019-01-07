<template>
    <div class="container">
        <div class="albums-list">
            <div v-for="album in albums" class="albums-list-item" :key=album.id>
                <album-view v-bind:album="album"></album-view>          
            </div>
        </div>
    </div>
</template>

<script>

import AlbumView from './AlbumView';

export default {
    name: "Home",
    
    components:{
        albumView: AlbumView,
    },

    created(){
        this.$store.dispatch("getAlbumsByTag", 'pop');
    },

    computed: {
        albums() {
            return this.$store.getters.albums;     
        }
    },
    
}
</script>

<style>
    .container{
        width: 80%;
        margin: 0 auto;
    }

    .albums-list{
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .albums-list-item{
        width: 22%;
        margin-bottom: 2em;
    }
</style>
