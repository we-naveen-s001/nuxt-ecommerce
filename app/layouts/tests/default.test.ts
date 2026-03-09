import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Default from "../default.vue";


vi.stubGlobal("useCartStore", () => ({
  totalItems: 3
}));

describe("DefaultLayout", () => {

  const createWrapper = (options = {}) =>
    mount(Default, {
      global: {
        stubs: {
          NuxtLink: {
            template: "<a><slot /></a>"
          }
        }
      },
      ...options
    });

  it("renders store title", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain("My Store");
  });

  it("shows cart item count", () => {
    const wrapper = createWrapper();
    expect(wrapper.text()).toContain("Cart (3)");
  });

  it("renders slot content", () => {
    const wrapper = createWrapper({
      slots: {
        default: "<div>Page Content</div>"
      }
    });

    expect(wrapper.text()).toContain("Page Content");
  });
});