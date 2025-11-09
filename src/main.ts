import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

// createApp(App).mount("#app");
createApp(App).use(router).mount("#app");
