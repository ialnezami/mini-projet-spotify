<template>
  <div
    class="w-60 h-96 border-solid border-2 border-white bg-black overflow-hidden shadow-lg m-2"
  >
    <div class="flex row justify-center p-2">
      <img
        :src="
          typeof track.album.images != 'undefined' &&
          track.album.images.length > 0
            ? track.album.images[0].url
            : 'https://thispersondoesnotexist.com/image'
        "
        alt="Sunset in the mountains"
        style="height: 175px; width: 100%"
        class="rounded-10 drop-shadow-2xl h-1/2"
      />
    </div>
    <div class="px-6 py-4 text-violet-500 bg-slate-300 h-1/2">
      <div class="font-bold text-xl mb-2 h-3/4">{{ track.name }}</div>
      <hr />
      <span
        class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-1/4"
        >{{ track.artists[0].name }} - {{ track.album.name }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TrackView",
  props: {
    track: Object,
  },
  methods: {},
};
</script>
<style></style>
