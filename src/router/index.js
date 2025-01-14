// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/homeView.vue";
import AboutView from "@/views/aboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import vuetify from "@/components/plugins/vuetify";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/experiencia",
    name: "experience",
    component: ExperienceView,
  },
  {
    path: "/vuetify",
    name: "vuetify",
    component: vuetify,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
