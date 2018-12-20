<template>
  <div>
    <hero></hero>
    <img-strict
      src="https://bit.ly/2yq6794"
      width="200"
      alt="pumpkins">
    </img-strict>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";
import CriticalAssets from "VUE_COMPONENT/mixin/critical-assets";
import ImgStrict from "VUE_COMPONENT/img/ImgStrict.vue";

export default {
  name: "page-about-index",
  mixins: [CriticalAssets],
  components: {
    Hero,
    ImgStrict
  }
};
</script>
