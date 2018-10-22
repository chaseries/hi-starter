
export default {
  mounted () {
    this.$store.commit("loading/setFinishedCountingTrue");
  },
  beforeLeave (to, from, next) {
    this.$store.commit("loading/resetCurrentPageState");
  }
};
