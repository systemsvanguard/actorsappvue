// src/router/index.ts

import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import List from "../views/List.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Resources from "../views/Resources.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/list", component: List },
  { path: "/about", component: About },
  { path: "/resources", component: Resources },
  { path: "/contact", component: Contact },
  { path: "/:pathMatch(.*)*", component: NotFound }, // Catch-all route | place last
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
