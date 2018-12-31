import { add, size } from "SRC/util/array-set-functions";
import { zipToObject, repeatCall } from "SRC/util/prelude";


const getAssetsLoadedHelper = function ({ currentPageState }) {
  const fc = currentPageState.finishedCounting;
  const eq = currentPageState.totalAssets == currentPageState.totalLoaded;
  if (fc && eq) { console.log("All the assets are loaded."); return true; }
  return false;
};

// Store definitions

const state = {
  currentTransType: "Init",
  initialAppLoadIsComplete: false,
  currentPageState: {
    transNavigationHasOccured: false,
    finishedCounting: false,
    totalAssets: 0,
    totalLoaded: 0
  }
};

const mutations = {

  setTransNone(state) {
    this.state.currentTransName = "None";
  },

  setCurrentTransType(state, newTransType) {
    state.currentTransType = newTransType;
  },

  clearCurrentTransType(state) {
    state.currentTransType = "none";
  },

  setOutroSequenceShouldPlay (state) {
    state.currentPageState.outroSequenceShouldPlay = true;
  },

  setOutroSequenceIsComplete (state) {
    state.currentPageState.outroSequenceIsComplete = true;
  },

  // Should be reset before every navigation
  resetCurrentPageState ({ currentPageState }) {
    currentPageState.outroSequenceShouldPlay = false;
    currentPageState.outroSequenceIsComplete = false;
    currentPageState.finishedCounting = false;
    currentPageState.totalAssets = 0; // Should be Maybe
    currentPageState.totalLoaded = 0;
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

  getOutroSequenceShouldPlay ({ currentPageState }) {
    return currentPageState.outroSequenceShouldPlay;
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
