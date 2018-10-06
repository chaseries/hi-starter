<template>
  <transition name="fade" mode="in-out">
    <div v-if="show">
      This is the preloader
    </div>
  </transition>
</template>

<script>

export default {
  name: "",
  props: {
    show: {
      required: true,
      type: Boolean
    }
  }
};
</script>

<style lang="sass">

.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s

.fade-enter, .fade-leave-to
  opacity: 0

</style>
