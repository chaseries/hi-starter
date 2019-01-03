<template>
  <header class="layout-header">
    The trans type is {{ transType }}
    <ul>
      <li><trans-link to="/" trans="default">Home</trans-link></li>
      <li><trans-link to="/about" trans="default">About</trans-link></li>
      <li><trans-link to="/digest" trans="notDefault">Digest</trans-link></li>
      <li><trans-link to="/works" trans="notDefault">Works</trans-link></li>
      <li><trans-link to="/contact" trans="notDefault">Contact</trans-link></li>
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
      return this.$store.state.loading.currentTransType;
    }
  }
};
</script>

<style lang="sass">

.layout-header
  position: relative
</style>
