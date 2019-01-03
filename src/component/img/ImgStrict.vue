<template>
  <img
    @load="setIsLoaded"
    @error="handleError"
    :src="src"
    :alt="alt"
    :width="width"
    :height="height">
</template>

<script>
import ImgMixin from "./img-mixin";

export default {
  name: "component-img-img-strict",
  mixins: [ImgMixin],
  methods: {
    setIsLoaded () {
      this.$store.commit("loading/incrementTotalLoaded");
    },
    handleError () {
      this.$store.commit("loading/incrementTotalLoaded");
    }
  },
  beforeMount () {
    console.log("Why isn't this happening before it's mounted, jesus christ.");
    this.$store.commit("loading/incrementTotalAssets");
  },
  mounted () {
    this.$store.commit("loading/setFinishedCountingTrue");
  }
};
</script>
