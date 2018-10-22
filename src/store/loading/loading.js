import { add, size } from "SRC/util/array-set-functions";
import { zipToObject, repeatCall } from "SRC/util/prelude";


// Store definitions

const state = {
  initialAppLoadIsComplete: false,
  currentPageState: {
    finishedCounting: false,
    totalAssets: 0,
    totalLoaded: 0
  }
};

const mutations = {

  // Should be reset before every navigation
  resetCurrentPageState ({ currentPageState }) {
    currentPageState.finishedCounting = false;
    currentPageState.totalAssets = 0;
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

  incrementTotalLoaded ({ initialAppLoadIsComplete, currentPageState }) {
    currentPageState.totalLoaded += 1;
    if (currentPageState.totalLoaded === currentPageState.totalAssets) {
      initialAppLoadIsComplete = true;
    }
  }

};

const getters = {
  
  getAssetsLoaded ({ currentPageState }) {
    const fc = currentPageState.finishedCounting;
    const eq = currentPageState.totalAssets === currentPageState.totalLoaded;

    if (fc && eq) { return true; } 

    return false;
  },

  getInitAppLoadComplete ({ initialAppLoadIsComplete }) {
    return initialAppLoadIsComplete;
  }

};




export default {
  namespaced: true,
  state,
  mutations,
  getters
};
