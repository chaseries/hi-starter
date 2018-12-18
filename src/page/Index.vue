<template>
  <div>
    <hero :items="[]" :timing="{}"></hero>
    {{ initLoadComplete }}
    <img-strict
      src="https://bit.ly/2EvtEcd"
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
  },
  computed: {
    initLoadComplete: function () {
      return this.$store.state.loading.initialAppLoadIsComplete;
    }
  },
  watch: {
    initLoadComplete (valueNow, valueBefore) {
      console.log("The value before was ", valueBefore, "and the value now is", valueNow);
    }
  },
  mounted () {
    console.log("From Index's `mounted` function, the initial app load state is");
    console.log(this.$store.state.loading);
  }
};
</script>
