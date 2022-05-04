<template>
  <router-link
    :to="{
      path: 'artist/' + artist.id,
      name: 'artistDetail',
      params: { id: artist.id },
    }"
  >
    <div class="bg-slate-50 overflow-hidden shadow-lg w-50 h-30 m-2">
      <div class="flex row justify-center p-2">
        <img
          :src="
            artist.images.length > 0
              ? artist.images[0].url
              : 'https://thispersondoesnotexist.com/image'
          "
          alt="Sunset in the mountains"
          style="height: 175px; width: 175px"
          class="rounded-full drop-shadow-2xl"
        />
      </div>
      <div class="px-6 py-4 bg-slate-300">
        <div class="font-bold text-xl mb-2">{{ artist.name }}</div>
        <span
          class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >{{ artist.followers.total }} Followers
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
