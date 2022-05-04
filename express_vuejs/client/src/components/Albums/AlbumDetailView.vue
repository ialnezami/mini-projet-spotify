<template>
  <div class="about">
    <div class="about">
      <div class="rounded overflow-hidden shadow-lg w-full">
        <div class="flex row justify-center">
          <img
            :src="
              album.images.length > 0
                ? album.images[0].url
                : 'https://thispersondoesnotexist.com/image'
            "
            alt="Sunset in the mountains"
            style="height: 200px"
            class="rounded-full drop-shadow-2xl"
          />
        </div>
        <div class="absolut shadow top-10 w-full">
          <div class="px-6 py-4">
            <h1 class="font-bold text-4xl mb-2 text-white">
              {{ album.name }}
            </h1>
          </div>
          <div>
            <div class="px-6 pt-4 pb-2 flex flex-row flex-wrap">
              <div
                v-for="track in tracks"
                :key="track.id"
                class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {{ track.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AlbumDetailView",
  computed: {
    ...mapGetters({
      getAlbums: "getArtistAlbums",
      getAlbumsTracks: "getAlbumsTracks",
      getArtist: "getArtist",
    }),
    album() {
      return this.getAlbums.find((album) => album.id === this.$route.params.id);
    },
    tracks() {
      return this.getAlbumsTracks;
    },
  },
  mounted() {
    this.getAlbumsAction();
    this.getAlbumTracksAction(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      getAlbumsStore: "getArtistAlbums",
      getAlbumTracksAction: "getAlbumsTracks",
    }),
    getAlbumsAction() {
      this.getAlbumsStore(this.$route.params.id);
    },
  },
};
</script>

<style></style>
