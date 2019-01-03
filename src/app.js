import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from "./store/store";
import { sync } from "vuex-router-sync";


export const createApp = function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  // router.beforeEach((to, from, next) => {
  // store.commit("loading/resetCurrentPageState");
  // next();
  // });

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
