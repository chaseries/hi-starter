<template>
  <div class="hero-index">
    <canvas resize="true" ref="glassCanvas"></canvas>
    <layout-header></layout-header>
    <div class="hero-index__guts"></div>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";


export default {
  name: "component-hero-hero-index",
  props: {
    items: {
      required: true,
      type: Array
    },
    timing: {
      required: true,
      type: Object
    }
  },
  components: {
    LayoutHeader
  },
  mounted () {
    if (process.env.VUE_ENV === "client") {
      const paper = require("paper");
      paper.setup(this.$refs.glassCanvas);

      var myPath = new paper.Path({
        segments: [[40, 115], [80, 180], [200, 20]],
        selected: true
      });

      myPath.fillColor = "#ff0000";

      paper.view.draw();
    }
  }
};
</script>

<style lang="sass">

.hero-index
  height: 100vh

  canvas[resize]
    position: absolute
    display: block
    top: 0
    left: 0
    width: 100%
    height: 100%

</style>
