import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ArtistDetailView from "@/views/ArtistDetailView.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
