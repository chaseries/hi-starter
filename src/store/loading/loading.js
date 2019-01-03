import { add, size } from "SRC/util/array-set-functions";


const getAssetsLoadedHelper = function ({ currentPageState }) {
  const fc = currentPageState.finishedCounting;
  const eq = currentPageState.totalAssets == currentPageState.totalLoaded;
  if (fc && eq) { console.log("All the assets are loaded."); return true; }
  return false;
};

// Store definitions

const defaultCurrentPageState = {
  transNavHasOccured: false,
  outroSequenceIsComplete: false,
  totalAssets: 0,
  totalLoaded: 0,
  finishedCounting: false
};

const state = {
  currentTransType: "Init",
  initialAppLoadIsComplete: false,
  currentPageState: { ...defaultCurrentPageState }
};

const mutations = {

  setTransNone(state) {
    state.currentTransName = "None";
  },

  setCurrentTransType(state, newTransType) {
    state.currentTransType = newTransType;
  },

  clearCurrentTransType(state) {
    state.currentTransType = "none";
  },

  setTransNavHasOccured (state) {
    state.currentPageState.transNavHasOccured = true;
  },

  setOutroSequenceIsComplete (state) {
    state.currentPageState.outroSequenceIsComplete = true;
  },

  // Should be reset before every navigation
  resetCurrentPageState (state) {
    console.log("From inside resetCurrentPageState...");
    state.currentPageState = { ...defaultCurrentPageState };
  },
  
  setFinishedCountingTrue ({ currentPageState }) {
    if (currentPageState.finishedCounting !== true) {
      currentPageState.finishedCounting = true;
    }
  },

  incrementTotalAssets ({ currentPageState }) {
    currentPageState.totalAssets += 1;
  },

  setInitialAppLoadIsCompleteTrue(state) {
    if (state.initialAppLoadIsComplete === false) {
      state.initialAppLoadIsComplete = true;
    }
  },

  incrementTotalLoaded (state) {
    state.currentPageState.totalLoaded += 1;
    if (state.currentPageState.totalLoaded === state.currentPageState.totalAssets) {
      if (!state.initialAppLoadIsComplete) {
        state.initialAppLoadIsComplete = true;
      }
    }
  }
};

const getters = {

  getAssetsLoaded: getAssetsLoadedHelper,

  getCurrentTransType({ currentTransType }) {
    return currentTransType;
  },

  getInitAppLoadComplete ({ initialAppLoadIsComplete }) {
    return initialAppLoadIsComplete;
  },

  getTransNavHasOccured ({ currentPageState }) {
    return currentPageState.transNavHasOccured;
  },

  getOutroSequenceIsComplete ({ currentPageState }) {
    return currentPageState.outroSequenceIsComplete;
  },

  getInitIntroShouldPlay (state) {
    console.log("The state is...", state);
    if (state.currentTransType !== "Init") { return false; }
    if (!getAssetsLoadedHelper(state)) { return true; }
    return false;
  },

  getInitOutroShouldPlay (state) {
    if (state.currentTransType !== "Init") { return false; }
    if (getAssetsLoadedHelper(state)) { return true; }
    return false;
  },

  // If assets haven't finished loading, play the transition's middle.
  getMiddleShouldPlay (state, currentTransType) {
    if (state.currentTransType === null) { return false; }
    if (currentTransType !== state.currentTransType) { return false; }
    return !getAssetsLoadedHelper(state);
  },

  // If all assets are loaded, play the transition's outro.
  getOutroShouldPlay (state, currentTransType) {
    if (state.currentTransType === null) { return false; }
    if (currentTransType !== state.currentTransType) { return false; }
    return getAssetsLoadedHelper(state);
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  getters
};
