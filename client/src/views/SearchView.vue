<template>
  <div class="about">
    <ArtistesView />
  </div>
</template>
<script>
// @ is an alias to /src
import ArtistesView from "@/components/Artists/ArtistsView.vue";

export default {
  name: "searchView",
  components: {
    ArtistesView,
  },
};
</script>
