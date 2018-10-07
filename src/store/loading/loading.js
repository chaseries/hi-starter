

const state = {
  "/": false,
  "/about": false,
  "/contact": false,
  "/digest": false,
  "/works": false
};

const mutations = {
  setCriticalAssetsLoaded(state, url) {
    state[url] = true;
    console.log("The state is", state);
  }
};

const actions = {

};

const getters = {
  getCriticalAssetsLoaded (state) {
    return url => state[url];
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
