<template>
  <header class="layout-header">
    The trans type is {{ transType }}
    <ul>
      <li><router-link to="/" name="home" id="homeId">Home</router-link></li>
      <li><trans-link to="/about">About</trans-link></li>
      <li><trans-link to="/digest" trans="notDefault">Digest</trans-link></li>
      <li><router-link to="/works">Works</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </header>
</template>

<script>
import TransLink from "VUE_COMPONENT/trans-link/TransLink.vue";


export default {
  name: "component-layout-header-layout-header",
  components: {
    TransLink
  },
  computed: {
    // DELETE ME
    transType () {
      return this.$store.state.loading.transType;
    }
  }
};
</script>

<style lang="sass">

.layout-header
  position: relative
</style>
