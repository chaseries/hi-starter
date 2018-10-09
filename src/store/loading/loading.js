import { fetchCriticalImages } from "./api";


const state = {
  cache: [],
  initialAppLoadIsComplete: false,
  loadedStatus: {
    "/": false,
    "/about": false,
    "/contact": false,
    "/digest": false,
    "/works": false
  }
};

const mutations = {
  _setCriticalAssetsAreLoaded (state, { loadStatus, url }) {
    state.loadedStatus[url] = loadStatus;
  },

  _setInitialAppLoadIsComplete (state) {
    state.initialAppLoadIsComplete = true;
  }
};

const actions = {
  fetchCriticalAssets({ commit, state }, url) {
    console.log("Am I even working");
    Promise.all(fetchCriticalImages(url))
      .then(result => {
        commit("_setCriticalAssetsAreLoaded", { url, loadStatus: true });
        if (!state.initialAppLoadIsComplete) { 
          commit("_setInitialAppLoadIsComplete");
        }
      });
  }
};

const getters = {
  getCriticalAssetsAreLoaded (state) {
    return url => state.loadedStatus[url];
  },
  getInitialAppLoadIsComplete (state) {
    return state.initialAppLoadIsComplete;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
