<template>
  <router-link
    :to="{
      path: 'artist/' + artist.id,
      name: 'artistDetail',
      params: { id: artist.id },
    }"
  >
    <div
      class="w-60 h-60 mb-3 bg-white border-violet-500 overflow-hidden shadow-lg m-2"
    >
      <div class="flex row justify-center p-2">
        <img
          :src="
            artist.images.length > 0
              ? artist.images[0].url
              : 'https://thispersondoesnotexist.com/image'
          "
          alt="Sunset in the mountains"
          style="height: 175px; width: 100%"
          class="rounded-10 drop-shadow-2xl h-1/2"
        />
      </div>
      <div class="px-6 py-4 bg-white">
        <div class="font-bold text-xl mb-2">{{ artist.name }}</div>
        <p
          class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          <span class="material-icons">groups</span
          ><span class="m-2">{{ artist.followers.total }} Followers</span>
        </p>
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
