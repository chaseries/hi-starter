<template>
  <div>
    <hero></hero>
    I am contact.
    <img-strict
      src="https://bit.ly/2yq6794"
      alt="foo"
      width="400">
    </img-strict>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";
import ImgStrict from "VUE_COMPONENT/img/ImgStrict.vue";
import ImgLazy from "VUE_COMPONENT/img/ImgLazy.vue";
import CriticalAssets from "VUE_COMPONENT/mixin/critical-assets";


export default {
  name: "page-contact-index",
  mixins: [CriticalAssets],
  components: {
    Hero,
    ImgStrict,
    ImgLazy
  }
};
</script>
