<template>
  <div class="about">
    <h1>{{ artist.name }}</h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ArtistDetailView",
  data() {
    return {
      artist: {},
    };
  },
  computed: {
    ...mapGetters({
      getArtists: "getArtists",
    }),
  },
  mounted() {
    this.artist = this.getArtists.find(
      (artist) => artist.id === this.$route.params.id
    );
  },
  methods: {
    ...mapActions({
      getArtistById: "getArtistById",
    }),
  },
};
</script>
