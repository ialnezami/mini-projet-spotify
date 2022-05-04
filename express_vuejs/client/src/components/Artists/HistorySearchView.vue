<template>
  <div class="about">
    <h2 class="bg-white text-left m-5 p-5 text-green-600 text-xl">
      Recent searches
    </h2>
    <div class="">
      <div class="flex flex-row flex-wrap">
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
