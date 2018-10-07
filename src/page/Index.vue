<template>
  <div>
    <hero :items="[]" :timing="{}"></hero>
    <lazy-img
      :shouldLoad="shouldLoad"
      width="700"
      src="https://i.imgur.com/lYfupUs.jpg">
    </lazy-img>
    <img
      @load="decrementCriticalCount"
      src="http://gfsnt.no/oen/foto/Haegefjell_Jan_2013_Large.jpg"
      width="400">
  </div>
</template>

<script>
import LazyImg from "VUE_COMPONENT/lazy/Img.vue";
import Preloader from "VUE_COMPONENT/preloader/Index.vue";
import { imagePromise } from "SRC/util/loading";
import { mapGetters } from "vuex";


export default {
  name: "page-index",
  data () {
    return {
      criticalAssets: 1
    };
  },
  components: {
    Hero: () => import(
      /* webpackChunkName: "componentHeroHeroIndex" */
      "VUE_COMPONENT/hero/HeroIndex.vue"
    ),
    Preloader,
    LazyImg
  },
  methods: {
    decrementCriticalCount () {
      this.criticalAssets -= 1;
    }
  },
  computed: {
    shouldLoad () {
      return this.$store.getters["loading/getCriticalAssetsLoaded"]("/");
    }
  },
  watch: {
    criticalAssets (numAssetsNotFinishedLoading) {
      if (numAssetsNotFinishedLoading === 0) {
        this.$store.commit("loading/setCriticalAssetsLoaded", "/");
      }
    }
  }
};
</script>
