<template>
  <div>
    <hero></hero>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroElse.vue";


export default {
  name: "page-contact-index",
  components: {
    Hero
  },
  mounted () {
    //const i = new Image();
    //i.src = "https://go.nasa.gov/2Csbfgh";
  }
};
</script>
