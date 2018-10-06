<template>
  <div id="app">
    {{ transType }}
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapGetters({
      transType: "trans/getTransType",
      isInitialLoad: "trans/getIsInitialLoad"
    })
  }
};


</script>

<style lang="sass">
@import "~SASS/main";
</style>
