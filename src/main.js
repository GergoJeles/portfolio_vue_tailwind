import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import "./style.css";
import i18n from "./i18n/index.js"; // Import the i18n configuration

createApp(App).use(router).use(i18n).mount("#app");
