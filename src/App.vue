<template>
  <div id="app">
    {{ transType }}
    <transition name="default-loading-splash">
      <trans-load-default
        v-if="!initialAppLoadIsComplete && !currentRouteComponentIsLoaded">
      </trans-load-default>
    </transition>
    <transition :name="transType" mode="out-in" duration="500">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TransNavDefault from "VUE_COMPONENT/trans/TransNavDefault.vue";
import TransLoadDefault from "VUE_COMPONENT/trans/TransLoadDefault.vue";

export default {
  name: "app",
  components: {
    TransNavDefault,
    TransLoadDefault
  },
  computed: {
    ...mapGetters({
      transType: "trans/getTransType"
    }),
    currentRouteComponentIsLoaded () {
      return this.$store.getters["loading/getCriticalAssetsAreLoaded"](this.$route.path);
    },
    initialAppLoadIsComplete () {
      return this.$store.getters["loading/getInitialAppLoadIsComplete"];
    }
  },
  watch: {
    currentRouteComponentIsLoaded (v) {
      console.log("The value of currentroutecomponentisloaded changed. The value is now:");
      console.log(v);
    }
  }
};


</script>

<style lang="sass">
@import "~SASS/main";

.default-loading-splash-leave-active
  transition: opacity 0.5s linear

.default-loading-splash-leave-to
  opacity: 0

</style>
