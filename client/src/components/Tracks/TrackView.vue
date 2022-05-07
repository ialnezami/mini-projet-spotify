<template>
<div
    class="w-60 h-70 mb-3 bg-black border-violet-500 shadow-lg m-2 relative hover:shadow-xl hover:bg-slate-700"
  >
    <div
      class="font-bold rounded-full bg-white text-black text-xl w-8 h-8 text-center absolute -top-2 -left-2 z-20"
      title="Popularity"
    >
      {{ track.popularity }}
    </div>
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
        class="rounded-10 drop-shadow-2xl h-1/3"
      />
    </div>
    <div class="px-6 py-4 text-green-400 h-full">
      <div class="font-bold text-xl">{{ track.name }}</div>
      <span class="inline-block px-3 py-1 text-sm font-semibold text-green-700"
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
