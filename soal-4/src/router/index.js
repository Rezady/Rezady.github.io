import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Character from "../views/Character.vue";
import Login from "../views/Login.vue";
import ErrorPage from "../views/Error.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      redirect: { name: "home" },
      beforeEnter: authorization,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      beforeEnter: authorization,
    },
    {
      path: "/character",
      name: "character",
      component: Character,
      beforeEnter: authorization,
    },
    {
      path: '/:pathMatch(.*)',
      name: "error",
      component: ErrorPage,
      beforeEnter: authorization,
    }
  ],
});

function authorization(to, from, next) {
  if (to.name !== "login" && !localStorage["token"]) {
    next({ name: "login" });
  } else {
    next();
  }
}

export default router;
