import { createApp } from "vue";
import { createPinia } from "pinia";

let x = "1";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
