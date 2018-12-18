import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import { createStore } from "./store/store";
import { sync } from "vuex-router-sync";



export const createApp = function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  router.beforeEach((to, from, next) => {

    if (to.query.trans !== undefined) {
      const { trans, ...newQuery } = to.query;
      const newRoute = Object.assign({}, { ...to }, { query: newQuery });
      next(newRoute);
    } else {
      next();
    }

    // This might just be subsumed by logic in App.vue
    if (!store.getters["trans/getIsInitialLoad"]) {
      const type = to.query.trans 
        ? { type: to.query.trans }
        : { type: "default" };
      store.commit("trans/setTransType", type);
    }
  });

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
