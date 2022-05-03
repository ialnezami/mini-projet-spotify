import { createStore } from "vuex";
import artisteStore from "@/store/ArtistsStore";

export default createStore({
  modules: {
    artisteStore,
  },
});
