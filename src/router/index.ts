import { createRouter, createWebHistory } from "vue-router";
import FilesView from "../views/FilesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FilesView,
    },
  ],
});

export default router;
