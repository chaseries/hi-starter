<template>
  <div>
    HI I AM DIGEST
    <hero></hero>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";
import CriticalAssets from "VUE_COMPONENT/mixin/critical-assets";


export default {
  name: "page-digest-index",
  mixins: [CriticalAssets],
  components: {
    Hero
  }
};
</script>
