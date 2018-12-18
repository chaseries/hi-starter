<template>
  <div @click="changeSomething">
    <router-link :to="to"></router-link>
  </div>
</template>

<script>

export default {
  props: {
    to: {
      required: true,
      type: String
    }
  },
  methods: {
    changeSomething () {
      console.log("It works");
    }
  }
};
</script>
