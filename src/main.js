import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { Button, Input, Layout, Menu } from "ant-design-vue";
import App from "./App.vue";
import routes from "./routes/index";
import "./assets/main.css";

const app = createApp(App);

// fontawesome
library.add(fas);
app.component("font-awesome-icon", FontAwesomeIcon);

// ant-desgin
app.config.productionTip = false;
// app.component(Button.name, Button);
app.use(Button);
app.use(Input);
app.use(Layout);
app.use(Menu);

// router
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

app.use(router);

// amount app
app.mount("#app");
