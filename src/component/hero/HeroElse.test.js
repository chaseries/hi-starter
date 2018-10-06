import { shallowMount } from "@vue/test-utils";
import HeroElse from "./HeroElse.vue";


describe("HeroElse", () => {
  test("It has the proper name", () => {
    const wrapper = shallowMount(HeroElse);
    expect(wrapper.vm.$options.name).toBe("component-hero-hero-else");
  });
});
