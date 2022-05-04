import { createStore } from "vuex";
import artisteStore from "@/store/ArtistsStore";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});
export default createStore({
  modules: {
    artisteStore,
  },
  plugins: [vuexLocal.plugin],
});
