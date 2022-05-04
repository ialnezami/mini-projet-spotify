<template>
  <div class="about">
    <h2 class="bg-white text-left m-5 p-5 text-green-600 text-xl">
      <span class="material-icons mr-2">history</span>Recent consulted artists
    </h2>
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
import { mapGetters } from "vuex";
import ArtistView from "@/components/Artists/ArtistView.vue";
export default {
  name: "HistoryView",
  components: {
    ArtistView,
  },
  computed: {
    ...mapGetters({
      getHistory: "getHistory",
    }),
    artists: {
      get() {
        return this.getHistory;
      },
      set(artists) {
        this.getHistory = artists;
      },
    },
  },
};
</script>

<style></style>
