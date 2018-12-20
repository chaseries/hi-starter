<template>
  <div style="color: white; z-index: 1000; position: relative; background: red">
  <transition
    name="trans-nav-default-intro-sequence"
    v-on:before-leave="beforeIntroLeave">
  The state is {{ content }}

    <div
      v-if="introShouldPlay"
      class="trans trans-nav-default">
      <div class="trans-nav-default__guts">
        Inside the intro! {{ content }}
      </div>
    </div>

  </transition>

  <transition name="trans-nav-default-middle-sequence">

    <div
      v-if="middleShouldPlay"
      class="trans trans-nav-default-middle">
    </div>

  </transition>

  <transition
    name="trans-nav-default-outro-sequence"
    v-on:enter="afterOutroEnter">

    <div
      class="trans trans-nav-default"
      v-if="outroShouldPlay">
      <div class="trans-nav-default__guts">
        Inside the outro! {{ content }}
      </div>
    </div>

  </transition>
  </div>
</template>

<script>

export default {
  name: "component-trans-trans-nav-default",
  data () {
    return {
      introDone: false,
      outroFlag: true
    };
  },
  computed: {
    assetsLoaded () {
      return this.$store.getters["loading/getAssetsLoaded"];
    },
    introShouldPlay () {
      return !this.assetsLoaded;
    },
    middleShouldPlay () {
      return ((!this.assetsLoaded) && this.introDone);
    },
    outroShouldPlay () {
      return (this.assetsLoaded && this.introDone && this.outroFlag);
    },
    content () {
      return "The state is " + [this.assetsLoaded, this.introDone, this.outroFlag].join(" ") + ".";
    }
  },
  methods: {
    beforeIntroLeave () {
      this.introDone = true;
      console.log("The intro is about to leave!");
    },
    afterOutroEnter () {
      // Kill the animation
      this.outroFlag = false;
      console.log("This should log after outro enter");
    }
  }
};
</script>

<style lang="sass">

.trans-nav-default
  color: white
  background-color: black
  &__guts
    position: relative
    text-align: center
    top: 50%
    transform: translateY(-50%)
    transition: opacity 0.5s

.trans-nav-default-intro-sequence-enter
  transform: translateX(100%)

.trans-nav-default-intro-sequence-enter-active, .trans-nav-default-sequence-leave-active
  transition: transform 0.5s

.trans-nav-default-intro-sequence-leave-to
  //transform: translateX(-100%)

.trans-nav-default-outro-sequence-enter
  transform: translateX(0)

.trans-nav-default-outro-sequence-enter-active
  transition: transform 0.5s
  transform: translateX(-100%)

.trans-nav-default-outro-sequence-leave-to
  transform: translateX(-100%)
  //transform: translateX(-100%)

</style>
