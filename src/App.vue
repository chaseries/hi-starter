<template>
  <div id="app">
    <!-- <trans-all -->
      <!-- :name="name"> -->
    <!-- </trans-all> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//import TransAll from "VUE_COMPONENT/trans/All.vue";
//import { Maybe } from "monet";

export default {
  name: "app",
  components: {
    //TransAll
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
  },
  beforeMount () {
    console.log("From App's beforeMount, the initialAppLoadIsComplete state is:");
    console.log(this.$store.state.loading.initialAppLoadIsComplete);
  },
  mounted () {
    console.log("From App's mounted, the initialAppLoadIsComplete state is:");
    console.log(this.$store.state.loading.initialAppLoadIsComplete);
  }
};

</script>

<style lang="sass">
@import "~SASS/main";

</style>
