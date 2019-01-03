<template>
  <div>
  <transition
    name="trans-nav-default-intro-sequence"
    v-on:after-enter="afterIntroEnter"
    appear>

    <div
      v-if="introShouldPlay"
      class="trans trans-nav-default">
      <div class="trans-nav-default__guts">Inside the intro! {{ content }}</div>
    </div>

  </transition>

  <!-- <transition name="trans-nav-default-middle-sequence"> -->

    <!-- <div -->
      <!-- v-if="middleShouldPlay" -->
      <!-- class="trans trans-nav-default-middle"> -->
    <!-- </div> -->

  <!-- </transition> -->

  <!-- <transition -->
    <!-- name="trans-nav-default-outro-sequence" -->
    <!-- v-on:enter="afterOutroEnter"> -->

    <!-- <div -->
      <!-- class="trans trans-nav-default" -->
      <!-- v-if="outroShouldPlay"> -->
      <!-- <div class="trans-nav-default__guts"> -->
        <!-- Inside the outro! {{ content }} -->
      <!-- </div> -->
    <!-- </div> -->

  <!-- </transition> -->
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
      const sIP = this.$store.getters["loading/getOutroSequenceShouldPlay"];
      console.log("Checking if intro should play...", sIP);
      return sIP;
    },
    middleShouldPlay () {
      return ((!this.assetsLoaded) && this.introDone);
    },
    outroShouldPlay () {
      return (this.assetsLoaded && this.introDone && this.outroFlag);
    },
    content () {
      const flags = [
        "(assetsLoaded, ",
        this.assetsLoaded + "), ",
        "(introDone, ",
        this.introDone + "), ",
        "(outroFlag, ",
        this.outroFlag + ")"
      ];
      return "The state is: " + flags.join(" ") + ".";
    }
  },
  methods: {
    afterIntroEnter (el) {
      console.log(el);
      this.introDone = true;
      this.$store.commit("loading/setOutroSequenceIsComplete");
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
  background-color: rgba(black, 0.5)
  &__guts
    position: relative
    text-align: center
    top: 50%
    transform: translateY(-50%)

.trans-nav-default-intro-sequence-enter
  transform: translateX(100%)

.trans-nav-default-intro-sequence-enter-active
  transition: transform 0.5s

.trans-nav-default-intro-sequence-leave-to
  transform: translateX(-100%)

.trans-nav-default-outro-sequence-enter
  transform: translateX(0)

.trans-nav-default-outro-sequence-enter-active
  transition: transform 0.5s
  transform: translateX(-100%)

.trans-nav-default-outro-sequence-leave-to
  transform: translateX(-100%)
  //transform: translateX(-100%)

</style>
