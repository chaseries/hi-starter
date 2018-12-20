<template>
  <div id="app">
    <trans-initial-default v-if="transType === 'initial'"></trans-initial-default>
    <trans-nav-default v-if="transType === 'default'"></trans-nav-default>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TransInitialDefault from "VUE_COMPONENT/trans/InitialDefault.vue";
import TransNavDefault from "VUE_COMPONENT/trans/NavDefault.vue";
//import { Maybe } from "monet";

export default {
  name: "app",
  components: {
    TransInitialDefault,
    TransNavDefault
  },
  data () {
    return {
      introAnimDone: false
    };
  },
  methods: {
    toggleIntroAnimDone () {
      this.introAnimDone = !this.introAnimDone;
    }
  },
  computed: {
    name () {
      return "loading"; 
    },
    isLoading () {
      return !(this.$store.getters["loading/getAssetsLoaded"]);
    },
    transType () {
      return this.$store.state.loading.transType;
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
