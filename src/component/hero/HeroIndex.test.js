import { shallowMount } from "@vue/test-utils";
import HeroIndex from "./HeroIndex.vue";


describe("HeroIndex", () => {
  test("It has the proper name", () => {
    const wrapper = shallowMount(HeroIndex, {
      propsData: {
        items: [],
        timing: {}
      }
    });
    expect(wrapper.vm.$options.name).toBe("component-hero-hero-index");
  });
});
