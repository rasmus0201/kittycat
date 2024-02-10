import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/facts/all",
  },
  {
    path: "/facts/",
    component: TabsPage,
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
