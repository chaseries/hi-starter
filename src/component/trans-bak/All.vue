<template>
  <transition
    :name="name_"
    mode="in-out">
    <div v-if="name === 'init'" class="trans trans--loading">Transition 2</div>
    <div v-else class="trans trans--default">
      Transition 1
      the transition is: {{ name }}
    </div>

  </transition>
</template>

<script>
import { getTransType } from "SRC/util/transition";

export default {
  name: "component-trans-all",
  props: {
    name: {
      required: true,
      type: String
    }
  },
  computed: {
    name_ () {
      return "default";
    }
  }
};
</script>

<style lang="sass">

.trans
  position: fixed
  width: 100%
  height: 100%
  &--loading
    background: blue
  &--default
    background: lime
</style>
