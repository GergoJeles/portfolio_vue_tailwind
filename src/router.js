import { createRouter, createWebHistory } from "vue-router";
import About from "@views/AboutPage.vue";
import Projects from "@views/ProjectsPage.vue";
import Photography from "@views/PhotographyPage.vue";
import Services from "@views/ServicesPage.vue";
import Contact from "@views/ContactPage.vue";

const routes = [
  { path: "/", component: About },
  { path: "/projects", component: Projects },
  { path: "/photography", component: Photography },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
