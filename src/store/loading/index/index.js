

const state = {
  cache: [],
  criticalAssetsLoaded: false
};

const mutations = {
  _setCache (state, assets) {
    state.cache = assets;
  },

  // _clearCache, _removeCache, _pushCache, _popCache, etc

  _setCriticalAssetsLoadedTrue (state) {
    state.criticalAssetsLoaded = true;
  }
};

const actions = {
  fetchCriticalAssets ({ state, commit }, url) {
    promisedAssets
      .all(promisedAssets)
      .then(assets => {
        console.log("The critical assets are", assets);
        commit("_setCache", assets);
        commit("_setCriticalAssetsLoadedTrue");
      });
  }
};

const getters = {
  getCriticalAssetsLoaded (state) {
    return criticalAssetsLoaded;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
