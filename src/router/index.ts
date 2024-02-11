import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import TabsPage from "@/views/TabsPage.vue";

import { fetchCatFacts } from "./guards";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/facts/all",
  },
  {
    path: "/facts/",
    component: TabsPage,
    beforeEnter: fetchCatFacts,
    children: [
      {
        path: "",
        redirect: "/facts/all",
      },
      {
        path: "all",
        name: "all",
        component: () => import("@/views/tabs/AllFactsPage.vue"),
      },
      {
        path: "favorites",
        name: "favorites",
        component: () => import("@/views/tabs/FavoriteFactsPage.vue"),
      },
      {
        path: ":id",
        name: "factDetails",
        component: () => import("@/views/tabs/DetailedFactPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
