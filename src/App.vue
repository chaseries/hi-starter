<template>
  <div id="app">
    <div class="transition-information">
      <h1>
      Transition information
      </h1>
      <ul>
        <li>Transition type: {{ transType }}</li>
        <li>Initial load complete: {{ initialLoadComplete }}</li>
        <li>Current load complete: {{ currentLoadComplete }}</li>
        <li>Trans nav has occured: {{ transNavHasOccured }}</li>
      </ul>
      Current page state: {{ currentPageState }}
      <br><br>
    </div>
    <trans></trans>
    <router-view></router-view>
  </div>
</template>

<script>
import Trans from "VUE_COMPONENT/trans-new/Trans.vue";

export default {
  name: "app",
  components: {
    Trans
  },
  computed: {
    transType () {
      return this.$store.state.loading.currentTransType;
    },
    // --- Transition information stuff
    initialLoadComplete () {
      return this.$store.getters["loading/getInitAppLoadComplete"];
    },
    transNavHasOccured () {
      return this.$store.getters["loading/getTransNavHasOccured"];
    },
    currentLoadComplete () {
      return this.$store.getters["loading/getAssetsLoaded"];
    },
    currentPageState () {
      return this.$store.state.loading.currentPageState;
    }
  }
};

</script>

<style lang="sass">
@import "~SASS/main";

.transition-information
  z-index: 1000
  position: fixed
  bottom: 0
  width: 400
  background: white
  border-top: 2px solid black
  border-right: 2px solid black

</style>
