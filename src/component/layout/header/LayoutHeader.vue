<template>
  <header class="layout-header">
    <ul>
      <li><router-link to="/" name="home" id="homeId">Home</router-link></li>
      <li><router-link to="/about?trans=heroHomeToAbout" name="about" id="aboutId">About</router-link></li>
      <li><router-link to="/digest">Digest</router-link></li>
      <li><router-link to="/works">Works</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </header>
</template>

<script>

export default {
  name: "component-layout-header-layout-header"
};
</script>

<style lang="sass">

.layout-header
  position: relative
</style>
