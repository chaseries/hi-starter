<template>
  <div>
    HI I AM CONTACT
    <hero></hero>
    <img @load="decrementIt" src="https://i.imgur.com/wFw56xX.png">
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";
import CriticalAssets from "VUE_COMPONENT/mixin/critical-assets";


export default {
  name: "page-contact-index",
  mixins: [CriticalAssets],
  components: {
    Hero
  },
  mounted () {
    //const i = new Image();
    //i.src = "https://go.nasa.gov/2Csbfgh";
  }
};
</script>
