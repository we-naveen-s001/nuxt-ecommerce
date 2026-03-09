import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Error from "../error.vue";


const NuxtLinkStub = {
  template: "<a><slot /></a>",
  props: ["to"],
};

describe("ErrorPage.vue", () => {
  it("renders 404 error correctly", () => {
    const wrapper = mount(Error, {
      global: { stubs: { NuxtLink: NuxtLinkStub } },
      props: { error: { statusCode: 404 } },
    });

    expect(wrapper.text()).toContain("404");
    expect(wrapper.text()).toContain(
      "Oops! The page you are looking for does not exist."
    );
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.find("a").text()).toBe("Go Back Home");
  });

  it("renders 401 error correctly", () => {
    const wrapper = mount(Error, {
      global: { stubs: { NuxtLink: NuxtLinkStub } },
      props: { error: { statusCode: 401 } },
    });

    expect(wrapper.text()).toContain("401");
    expect(wrapper.text()).toContain(
      "You are not authorized to access this page."
    );
  });

  it("renders other errors correctly", () => {
    const wrapper = mount(Error, {
      global: { stubs: { NuxtLink: NuxtLinkStub } },
      props: { error: { statusCode: 500, statusMessage: "Server error" } },
    });

    expect(wrapper.text()).toContain("500");
    expect(wrapper.text()).toContain("Server error");
  });

  it("renders default message if no statusMessage provided", () => {
    const wrapper = mount(Error, {
      global: { stubs: { NuxtLink: NuxtLinkStub } },
      props: { error: { statusCode: 502 } },
    });

    expect(wrapper.text()).toContain("502");
    expect(wrapper.text()).toContain("Something went wrong.");
  });
});