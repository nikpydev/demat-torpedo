import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import store from "./store/store";
import VueResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.filter("currency", (value) => "$" + value.toLocaleString());

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");