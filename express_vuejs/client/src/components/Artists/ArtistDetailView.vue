<template>
  <div class="about">
    <div class="rounded overflow-hidden shadow-lg w-full">
      <div class="flex row justify-center">
        <img
          :src="
            artist.images.length > 0
              ? artist.images[0].url
              : 'https://thispersondoesnotexist.com/image'
          "
          alt="Sunset in the mountains"
          style="height: 200px"
          class="rounded-full drop-shadow-2xl"
        />
      </div>
      <div class="absolut shadow top-10 w-full">
        <div class="px-6 py-4">
          <h1 class="font-bold text-4xl mb-2 text-white">{{ artist.name }}</h1>
          <span
            class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{ artist.followers.total }} Followers
          </span>
          <span
            class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{ artist.popularity }} Followers
          </span>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span
            v-for="genre in artist.genres"
            :key="genre"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >{{ genre }}
          </span>
        </div>
        <hr />
        <div>
          <div
            class="px-6 pt-4 pb-2 flex flex-row flex-wrap justify-between items-center"
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
