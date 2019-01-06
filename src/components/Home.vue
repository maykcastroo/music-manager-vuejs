<template>
    <div class="container">
        <div class="albums-list">
            <div v-for="album in albums" class="albums-list-item" :key=album.id>
                <img class="album-cover" :src="album.cover">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    
    created(){
        this.$store.dispatch("getAlbumsByTag", 'country');
    },

    computed: {
        albums() {
            return this.$store.getters.albums;     
        }
    }

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

    .album-cover{
        max-width: 100%;
    }
</style>
