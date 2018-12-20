<template>
  <div @click="changeSomething">
    <a :href="to"><slot></slot></a>
  </div>
</template>

<script>

export default {
  name: "component-trans-link",
  props: {
    to: {
      required: true,
      type: String
    },
    trans: {
      required: false,
      type: String,
      default: "default"
    }
  },
  methods: {
    changeSomething (e) {
      e.preventDefault();
      this.$store.commit("loading/changeTransType", this.trans);
      this.$router.push(this.to);
    }
  }
};
</script>
