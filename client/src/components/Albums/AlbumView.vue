<template>
  <router-link
    :to="{
      path: id + '/album/' + album.id,
      name: 'albumDetail',
      params: { id: album.id, idArtist: id },
    }"
  >
    <div
      class="w-60 h-70 m-3 mb-10 duration-200 bg-black hover:shadow-xl hover:bg-slate-700"
    >
      <div class="">
        <img
          :src="album.images[0].url"
          alt="album"
          style="height: 175px; width: 100%"
          class="rounded-10 drop-shadow-2xl h-1/2"
        />
      </div>
      <div class="">
        <div class="flex flex-col h-36 justify-center">
          <h1 class="font-bold text-xl mb-2 text-white">
            {{ album.name }}
          </h1>
          <p class="text-white text-sm">
            <span class="material-icons">date_range</span
            >{{ album.release_date }}
          </p>
          <p class="text-white text-sm">
            <span class="material-icons">music_note</span
            >{{ album.total_tracks }} Songs
          </p>
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
