<template>
  <div>
    <hero :items="[]" :timing="{}"></hero>
  </div>
</template>

<script>
import Preloader from "VUE_COMPONENT/preloader/Index.vue";
import { imagePromise } from "SRC/util/loading";


export default {
  name: "page-index",
  components: {
    Hero: () => import(
      /* webpackChunkName: "componentHeroHeroIndex" */
      "VUE_COMPONENT/hero/HeroIndex.vue"
    ),
    Preloader
  },
  mounted () {

    const nasaSrc = "https://go.nasa.gov/2Csbfgh";
    const p = imagePromise(nasaSrc, "foo");
    p.then((result) => {
      console.log(result, result.src);
      document.body.appendChild(result.img);
    });
    console.log(p);

    //this.$store.commit("loading/index/setCriticalAssets", { assets: criticalAssets });

  }
};
</script>
