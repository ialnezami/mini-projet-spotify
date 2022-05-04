<template>
  <div class="home">
    <div class="mb-3 xl:w-96">
      <div
        class="input-group relative flex flex-wrap items-stretch w-full mb-4"
      >
        <input
          v-model="search"
          @keyup="searchArtist"
          type="search"
          class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
      // this.artists = this.getartists;
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
