import { shallowMount } from "@vue/test-utils";
import Index from "./Index.vue";


describe("Index", () => {
  test("has the proper name", () => {
    const wrapper = shallowMount(Index, {
      stubs: ["router-link"]
    });
    expect(wrapper.vm.$options.name).toBe("page-contact-index");
  });
});
