import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArtistDetailView from "@/components/Artists/ArtistDetailView.vue";
import AlbumDetailView from "@/components/Albums/AlbumDetailView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchView.vue"),
  },
  {
    path: "/artist/:id",
    name: "artistDetail",
    component: ArtistDetailView,
    props: true,
  },
  {
    path: "/:idArtist/album/:id",
    name: "albumDetail",
    component: AlbumDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
