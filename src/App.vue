<template>
  <div id="app">
    <div class="transition-information">
      <h1>
      Transition information
      </h1>
      <ul>
        <li>Transition type: {{ transType }}</li>
        <li>Initial load complete: {{ initialLoadComplete }}</li>
      </ul>
    </div>
    <trans-init></trans-init>
    <trans></trans>
    <router-view></router-view>
  </div>
</template>

<script>
import TransInit from "VUE_COMPONENT/trans/TransInit.vue";
import Trans from "VUE_COMPONENT/trans/Trans.vue";

export default {
  name: "app",
  components: {
    TransInit,
    Trans
  },
  computed: {
    transType () {
      return this.$store.state.loading.currentTransType;
    },
    // --- Transition information stuff
    initialLoadComplete () {
      return this.$store.getters["loading/getInitAppLoadComplete"];
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
