<template>
  <div @click="initiateNavigation">
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
  data () {
    return {
      theTo: null
    };
  },
  computed: {
    outroSequenceIsComplete () {
      return this.$store.getters["loading/getOutroSequenceIsComplete"];
    }
  },
  watch: {
    outroSequenceIsComplete (currentValue) {
      console.log("The value of `this` is", this);
      console.log("The outro sequence is complete. The value of to is", this.to);
      if (currentValue === true) {
        this.$router.push(this.theTo);
      }
    }
  },
  methods: {
    initiateNavigation (e) {
      e.preventDefault();
      this.theTo = this.to;
      console.log("Initiating navigation. The value of `to` is", this.to);
      this.$store.commit("loading/setCurrentTransType", this.trans);
      this.$store.commit("loading/setOutroSequenceShouldPlay");
    }
  }
};
</script>
