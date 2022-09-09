import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";

const routes = [{
    path: "/",
    component: Home,
  },
  {
    path: "/card",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
