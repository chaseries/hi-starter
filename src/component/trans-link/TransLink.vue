<template>
  <a :href="to" @click="initiateNavigation"><slot></slot></a>
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
      // Without some sort of memory of which trans-link was clicked, all
      // of the trans-links on a page will look at the changed value of
      // outroSequenceIsComplete and navigate to their own `to` prop.
      wasClicked: false
    };
  },
  computed: {
    outroSequenceIsComplete () {
      return this.$store.getters["loading/getOutroSequenceIsComplete"];
    }
  },
  watch: {
    outroSequenceIsComplete (isComplete) {
      // Check that this is in fact the correct transition link
      if ((isComplete === true) && this.wasClicked) { 
        console.log("The outro sequence is complete. The value of `to` is", this.to);
        this.wasClicked = false;
        this.$store.commit("loading/resetCurrentPageState");
        this.$router.push(this.to);
      }
      this.wasClicked = false;
    }
  },
  methods: {
    initiateNavigation (e) {
      console.log("initiating...");
      e.preventDefault();
      console.log("The route is", this.$route);
      if (this.$route.path === this.to) {
        console.log("They're the same.");
        return;
      }
      this.wasClicked = true;
      this.$store.commit("loading/setCurrentTransType", this.trans);
      this.$store.commit("loading/setTransNavHasOccured");
    }
  }
};
</script>
