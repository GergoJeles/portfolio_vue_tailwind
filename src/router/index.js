// src/router/index.js

import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/HomePage.vue";
import Projects from "@/views/ProjectsPage.vue";
import Gallery from "@/views/GalleryPage.vue";
import Contact from "@/views/ContactPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/projects", component: Projects },
  { path: "/gallery", component: Gallery },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
