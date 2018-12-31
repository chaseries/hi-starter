<template>
  <div v-if="transIsNotInit && transIsNotNone">
    The current trans name is {{ currentTransType }}.

    <transition
      appear
      :name="transIntroName"
      v-on:after-enter="afterEnter">
      <component
        v-if="introShouldPlay"
        :is="componentIntroName">
      </component>
    </transition>

    <transition
      appear
      :name="transMezzoName">
      <component
        v-if="mezzoShouldPlay"
        :is="componentMezzoName">
      </component>
    </transition>

    <transition
      appear
      :name="transOutroName">
      <component
        v-if="outroShouldPlay"
        :is="componentOutroName">
      </component>
    </transition>
  </div>
</template>

<script>
// Import components...
import NavDefaultIntro from "./NavDefault/Mezzo.vue";
import NavDefaultMezzo from "./NavDefault/Mezzo.vue";
import NavDefaultOutro from "./NavDefault/Outro.vue";


// Some helpers
const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1);
};

const getComponentName = (transType, transAct) => {
  return transType + capitalize(transAct);
};


export default {
  name: "trans",
  components: {
    NavDefaultIntro,
    NavDefaultMezzo,
    NavDefaultOutro
  },
  data () {
    return {
      condition: false
    };
  },
  mounted () {
    window.setTimeout(() => {
      this.condition = true;
    }, 1500);
  },
  methods: {
    afterEnter () {

    }
  },
  computed: {
    transIsNotInit () {
      return !this.$store.getters["loading/getInitAppLoadComplete"];
    },
    transIsNotNone () {
      // Must be changed
      return false;
    },
    currentTransType () {
      return this.$store.getters["loading/getCurrentTransType"];
    },
    introShouldPlay () {
      return true;
    },
    mezzoShouldPlay () {
      return true;
    },
    outroShouldPlay () {
      return true;
    },
    transIntroName () {
      return "trans--" + getComponentName(this.currentTransType, "intro");
    },
    transMezzoName () {
      return "trans--" + getComponentName(this.currentTransType, "mezzo");
    },
    transOutroName () {
      return "trans--" + getComponentName(this.currentTransType, "outro");
    },
    componentIntroName () {
      return getComponentName(this.currentTransType, "intro");
    },
    componentMezzoName () {
      return getComponentName(this.currentTransType, "mezzo");
    },
    componentOutroName () {
      return getComponentName(this.currentTransType, "outro");
    }
  }
};
</script>

<style lang="sass">

.trans--InitOutro-enter-active
  opacity: 1
  transition: opacity 4s ease

.trans--InitOutro-enter
  opacity: 0 

</style>
