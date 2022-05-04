<template>
  <div class="home">
    <HistoryView />
  </div>
</template>

<script>
// @ is an alias to /src
import HistoryView from "@/components/Artists/HistorySearchView.vue";
export default {
  name: "HomeView",
  components: {
    HistoryView,
  },
};
</script>
