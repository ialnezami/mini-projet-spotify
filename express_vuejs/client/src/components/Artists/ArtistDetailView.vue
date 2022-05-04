<template>
  <div class="about">
    <div class="rounded shadow-lg w-full relative">
      <div
        class="flex flex-row flex-wrap justify-center bg-white sticky top-0 shadow-lg shadow-black m-10 p-5 z-10"
      >
        <img
          :src="
            artist.images.length > 0
              ? artist.images[0].url
              : 'https://thispersondoesnotexist.com/image'
          "
          alt="Sunset in the mountains"
          style="height: 200px; width: 200px"
          class="rounded-full drop-shadow-2xl"
        />
        <div class="px-6 py-4 flex flex-col">
          <div>
            <h1 class="font-bold text-4xl mb-2 text-black">
              {{ artist.name }}
            </h1>
            <p
              class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <span class="material-icons">groups</span
              >{{ artist.followers.total }} Followers
            </p>
            <p
              class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <span class="material-icons">stars</span
              >{{ artist.popularity }} popularity
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <h5 class="font-bold text-xl mb-2 text-black">Genre</h5>
            <hr class="pb-5" />
            <span
              v-for="genre in artist.genres"
              :key="genre"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >{{ genre }}
            </span>
          </div>
        </div>
      </div>
      <div class="absolut shadow top-10 w-full">
        <div>
          <div
            class="px-6 pt-4 pb-2 flex flex-row flex-wrap justify-center items-center"
          >
            <AlbumView
              v-for="album in albums"
              :key="album.id"
              :album="album"
              :id="artist.id"
            >
            </AlbumView>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AlbumView from "@/components/Albums/AlbumView.vue";

export default {
  name: "ArtistDetailView",
  components: {
    AlbumView,
  },
  computed: {
    ...mapGetters({
      getArtists: "getArtists",
      getArtistAlbums: "getArtistAlbums",
    }),
    artist() {
      return this.getArtists.find(
        (artist) => artist.id === this.$route.params.id
      );
    },
    albums() {
      return this.getArtistAlbums;
    },
  },
  mounted() {
    this.addArtistConsultedAction();
    this.getArtistAlbumsAction();
  },
  methods: {
    ...mapActions({
      addArtistConsulted: "addArtistConsulted",
      getArtistAlbumsStore: "getArtistAlbums",
    }),
    async addArtistConsultedAction() {
      await this.addArtistConsulted(this.$route.params.id);
    },
    async getArtistAlbumsAction() {
      await this.getArtistAlbumsStore(this.$route.params.id);
    },
  },
};
</script>
