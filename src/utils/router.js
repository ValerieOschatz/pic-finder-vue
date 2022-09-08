import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";

const routes = [{
    path: "/",
    component: Home,
    props: {
      cards: Array,
      query: String,
      onSubmit: Function,
      onChangeQuery: Function,
      onScroll: Function,
      onCardClick: Function
    }
  },
  {
    path: "/card",
    component: About,
    props: {
      selectedCard: Object,
      onBack: Function
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
