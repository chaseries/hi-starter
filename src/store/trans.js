

export const state = {
  transType: "loading",
  isInitialLoad: true
};

export const mutations = {
  setTransType (state, { type }) {
    state.transType = type;
  },

  setIsNotInitialLoad (state) {
    state.isInitialLoad = false;
  }
};

export const actions = {

};

export const getters = {
  getTransType (state) {
    return state.transType;
  },

  getIsInitialLoad (state) {
    return state.isInitialLoad;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
