<template>
  <img
    v-if="shouldLoad"
    :src="src"
    :width="width"
    :height="height"
    :alt="alt"
  />
</template>

<script>

export default {
  name: "component-lazy-img",
  props: {
    shouldLoad: {
      required: true,
      type: Boolean
    },
    src: {
      required: true,
      type: String
    },
    width: {
      required: false,
      type: String,
      default: ""
    },
    height: {
      required: false,
      type: String,
      default: ""
    },
    alt: {
      required: false,
      type: String,
      default: ""
    }
  }
};
</script>
