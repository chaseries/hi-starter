<template>
  <transition name="loading-trans" v-on:after-enter="afterOutro">
  <div v-if="shouldTransition" class="loading">
    <div class="loading__guts">Loading</div>
  </div>
  </transition>
</template>

<script>

export default {
  name: "rename-me-later",
  computed: {
    transNavHasOccured () {
      return this.$store.getters["loading/getTransNavHasOccured"];
    },
    assetsNotLoaded () {
      return !this.$store.getters["loading/getAssetsLoaded"];
    },
    shouldTransition () {
      return this.transNavHasOccured || this.assetsNotLoaded;
    }
  },
  methods: {
    afterOutro () {
      console.log("Outro is complete.");
      this.$store.commit("loading/setOutroSequenceIsComplete");
    }
  },
  watch: {
    //transNavHasOccured (v) {
    //if (v === true) {
    //window.setTimeout(() => {
    //this.$store.commit("loading/setOutroSequenceIsComplete");
    //}, 1000);
    //}
    //}
  }
};
</script>

<style lang="sass">

.loading
  position: fixed
  z-index: 500
  background-color: black
  width: 100%
  height: 100%
  &__guts
    position: relative
    text-align: center
    top: 50%

.loading-trans-enter-active
  transition: transform 0.45s cubic-bezier(0.7, 0, 0.3, 1)
  transform: translateX(0)

.loading-trans-enter
  transform: translateX(100%)

.loading-trans-leave-active
  transition: transform 0.45s cubic-bezier(0.7, 0, 0.3, 1)
  transform: translateX(-100%)

.loading-trans-leave
  transform: translateX(0)

</style>
