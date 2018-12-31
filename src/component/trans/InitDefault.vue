<template>
  <div>
  <transition name="trans-initial-default-sequence">
    <div v-if="!assetsLoaded" class="trans trans-initial-default">
      <div class="trans-initial-default__guts">
      Loading (initial)...
      </div>
    </div>
  </transition>
  </div>
</template>

<script>

export default {
  name: "component-trans-initial-default",
  computed: {
    introShouldPlay () {
      return this.$store.getters["loading/getInitIntroShouldPlay"];
    },
    outroShouldPlay () {
      return this.$store.getters["loading/getInitOutroShouldPlay"];
    },
    assetsLoaded () {
      return this.$store.getters["loading/getAssetsLoaded"];
    }
  }
};
</script>

<style lang="sass">

.trans
  position: fixed
  width: 100%
  height: 100%
  z-index: 110

.trans-initial-default
  background-color: white
  &__guts
    position: relative
    text-align: center
    top: 50%
    transform: translateY(-50%)
    //transition: opacity 0.5s

.trans-intial-default-sequence-enter
  //opacity: 1

.trans-initial-default-sequence-leave-active
  //transition: opacity 0.5s 0.5s
  .trans-initial-default__guts
    //opacity: 0

.trans-initial-default-sequence-leave-to
  //opacity: 0

</style>
