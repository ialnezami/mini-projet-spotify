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
              <TrackView v-for="track in tracks" :key="track.id" :track="track">
              </TrackView>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrackView from "@/components/Tracks/TrackView.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AlbumDetailView",
  components: {
    TrackView,
  },
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
    this.getAlbumTracksAction(this.$route.params.id);
  },
  methods: {
    ...mapActions({
      getAlbumTracksAction: "getAlbumsTracks",
    }),
  },
};
</script>

<style></style>
