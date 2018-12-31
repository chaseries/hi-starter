<template>
  <div>
    <hero :items="[]" :timing="{}"></hero>
    <img-strict
      src="https://bit.ly/2yq6794"
      width="200"
      alt="pumpkins">
    </img-strict>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroIndex.vue";
import CriticalAssets from "VUE_COMPONENT/mixin/critical-assets";
import ImgStrict from "VUE_COMPONENT/img/ImgStrict.vue";

export default {
  name: "page-index",
  mixins: [CriticalAssets],
  components: {
    Hero,
    ImgStrict
  }
};
</script>
