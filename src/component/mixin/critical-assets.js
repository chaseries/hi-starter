
export default {
  mounted () {
    this.$store.commit("loading/setFinishedCountingTrue");
    if (this.$store.state.loading.currentPageState.totalAssets === 0) {
      this.$store.commit("loading/setInitialAppLoadIsCompleteTrue");
    }
  },
  destroyed (to, from, next) {
    //this.$store.commit("loading/resetCurrentPageState");
  }
};
