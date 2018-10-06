import Vue from "vue";
import Vuex from "vuex";
import trans from "./trans";
import loading from "./loading/all.js";


Vue.use(Vuex);

export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      trans,
      loading
    }
  });
};
