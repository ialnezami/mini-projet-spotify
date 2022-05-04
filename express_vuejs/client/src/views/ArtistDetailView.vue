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
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ArtistDetailView",
  computed: {
    ...mapGetters({
      getArtists: "getArtists",
    }),
    artist() {
      return this.getArtists.find(
        (artist) => artist.id === this.$route.params.id
      );
    },
  },
  mounted() {
    this.addArtistConsultedAction();
  },
  methods: {
    ...mapActions({
      addArtistConsulted: "addArtistConsulted",
    }),
    async addArtistConsultedAction() {
      await this.addArtistConsulted(this.$route.params.id);
    },
  },
};
</script>
