<template>
  <div class="home relative">
    <div class="mb-3 xl:w-96 sticky top-0 bg-white z-10">
      <div
        class="input-group relative flex flex-wrap items-stretch w-full mb-4"
      >
        <input
          v-model="search"
          @keyup="searchArtist"
          type="search"
          class="form-control sticky top-0 flex-auto w-1/2 px-4 py-3 bg-transparent border-none text-xl text-gray-700 placeholder-gray-600 focus:outline-none focus:shadow-outline"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>
    </div>

    <div class="">
      <div
        class="px-6 pt-4 pb-2 flex flex-row flex-wrap justify-center items-center"
      >
        <ArtistView
          v-for="artist in artists"
          :key="artist.id"
          :artist="artist"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ArtistView from "@/components/Artists/ArtistView.vue";
export default {
  name: "artistsView",
  components: {
    ArtistView,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      getArtists: "getArtists",
    }),
    artists: {
      get() {
        return this.getArtists;
      },
      set(artists) {
        this.getArtists = artists;
      },
    },
  },
  mounted() {
    this.artists = this.getArtists;
  },
  methods: {
    ...mapActions({
      getArtists: "getArtists",
      searchArtists: "getArtistsSearch",
    }),
    searchArtist() {
      this.searchArtists(this.search);
      this.artists = this.getartists;
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
