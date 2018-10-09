<template>
  <div>
    <img src="https://go.nasa.gov/2E57Tle" width="400">
    <hero :items="[]" :timing="{}"></hero>
  </div>
</template>

<script>
import Hero from "VUE_COMPONENT/hero/HeroIndex.vue";

export default {
  name: "page-index",
  components: {
    Hero
  }
};
</script>
