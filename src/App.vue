<template>
  <div id="app">
    <trans-all
      :name="name">
    </trans-all>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TransAll from "VUE_COMPONENT/trans/All.vue";
import { Maybe } from "monet";

export default {
  name: "app",
  components: {
    TransAll
  },
  computed: {
    name () {
      return "loading"; 
    },
    currentPageIsLoaded () {
      return this.$store.getters["loading/getAssetsLoaded"];
    },
    initAppLoadComplete () {
      return this.$store.getters["loading/getInitAppLoadComplete"];
    }
  }
};

</script>

<style lang="sass">
@import "~SASS/main";

</style>
