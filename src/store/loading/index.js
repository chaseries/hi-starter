

export const state = {
  criticalAssets: [],
  something: "I AM FOO"
};

export const mutations = {
  setCriticalAssets (state, { assets }) {
    state.criticalAssets = assets;
  }
};

export const actions = {
  fetchCriticalAssets ({ commit, state }, assets) {
    Promise.all([
    ]);
  }
};

export const getters = {
  getSomething (state) {
    return state.something;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
