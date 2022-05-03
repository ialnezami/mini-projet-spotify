<template>
  <router-link
    :to="{
      path: 'artist/' + artist.id,
      name: 'artistDetail',
      params: { id: artist.id },
    }"
  >
    <div class="rounded overflow-hidden shadow-lg w-60 h-30 m-2">
      <img
        :src="
          artist.images.length > 0
            ? artist.images[0].url
            : 'https://thispersondoesnotexist.com/image'
        "
        alt="Sunset in the mountains"
        style="height: 200px; width: 100%"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ artist.name }}</div>
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
  </router-link>
</template>
<script>
export default {
  name: "artistView",
  props: {
    artist: Object,
  },
  methods: {},
};
</script>
<style></style>
