<template>
  <router-link
    :to="{
      path: id + '/album/' + album.id,
      name: 'albumDetail',
      params: { id: album.id, idArtist: id },
    }"
  >
    <div class="w-60 h-full mb-3">
      <div class="">
        <img :src="album.images[0].url" alt="album" class="w-full" />
      </div>
      <div class="bg-black h-full">
        <div class="flex flex-col h-1/2">
          <h1 class="font-bold text-xl mb-2 text-white">{{ album.name }}</h1>
          <p class="text-white text-sm">{{ album.release_date }}</p>
          <p class="text-white text-sm">{{ album.total_tracks }} Songs</p>
          <p class="text-white text-sm">{{ album.popularity }} Popularity</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "AlbumView",
  props: {
    album: Object,
    id: String,
  },
};
</script>
