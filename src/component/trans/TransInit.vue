<template>
  <div>
    <div v-if="storeSaysIntroShouldPlay">Loading. The intro should be playing.</div>
    <div v-if="storeSaysOutroShouldPlay">Loaded. The outro should be playing.</div>
    <transition
      appear
      name="trans--Init--intro">
      <div v-if="storeSaysIntroShouldPlay">Some intro that should fade out.</div>
    </transition>

    <transition
      name="trans--Init--outro"
      v-on:after-enter="afterEnter">
      <div v-if="outroShouldPlay">Some outro that should fade out.</div>
    </transition>
  </div>
</template>

<script>

export default {
  name: "component-trans-trans-init",
  data () {
    return {
      introShouldPlay: false,
      outroShouldPlay: false
    };
  },
  methods: {
    afterEnter () {
      console.log("I left.");
      this.outroShouldPlay = false;
    }
  },
  computed: {
    storeSaysIntroShouldPlay () {
      return this.$store.getters["loading/getInitIntroShouldPlay"];
    },
    storeSaysOutroShouldPlay () {
      return this.$store.getters["loading/getInitOutroShouldPlay"];
    }
  },
  mounted () {
    const that = this;
    window.setInterval(() => {
      console.log("Store says intro should play?", that.storeSaysIntroShouldPlay);
      console.log("Store says outro should play?", that.storeSaysOutroShouldPlay);
      console.log("---");
    }, 100);
  }
};
</script>

<style lang="sass">


.trans--Init--intro-leave-active
  opacity: 0
  transition: opacity 1s

.trans--Init--intro-leave
  opacity: 1

</style>
