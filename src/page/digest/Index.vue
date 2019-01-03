<template>
  <div>
    HI I AM DIGEST
    <hero></hero>
    <img-strict
      src="https://bit.ly/2EtxXF3"
      width="200"
      alt="fossil">
    </img-strict>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";
import CriticalAssets from "VUE_COMPONENT/mixin/critical-assets";
import ImgStrict from "VUE_COMPONENT/img/ImgStrict.vue";


export default {
  name: "page-digest-index",
  mixins: [CriticalAssets],
  components: {
    Hero,
    ImgStrict
  }
};
</script>
