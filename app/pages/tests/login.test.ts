import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"
import { nextTick } from "vue"
import LoginPage from "../login.vue"


vi.stubGlobal("definePageMeta", () => {})

const loginMock = vi.fn()
vi.stubGlobal("useAuthStore", () => ({ login: loginMock }))

const navigateMock = vi.fn()
vi.stubGlobal("navigateTo", navigateMock)


describe("Login Page", () => {
  it("renders email and password inputs", () => {
    const wrapper = mount(LoginPage)
    const inputs = wrapper.findAll("input")
    expect(inputs.length).toBe(2)
  })

  it("calls login on form submit", async () => {
    loginMock.mockResolvedValue(true)
    const wrapper = mount(LoginPage)
    const inputs = wrapper.findAll("input")

    await inputs[0]!.setValue("test@email.com")
    await inputs[1]!.setValue("123456")

    await wrapper.find("form").trigger("submit")

    expect(loginMock).toHaveBeenCalledWith("test@email.com", "123456")
  })

  it("redirects after successful login", async () => {
    loginMock.mockResolvedValue(true)
    const wrapper = mount(LoginPage)
    const inputs = wrapper.findAll("input")

    await inputs[0]!.setValue("test@email.com")
    await inputs[1]!.setValue("123456")

    await wrapper.find("form").trigger("submit")

    expect(navigateMock).toHaveBeenCalledWith("/products")
  })

  it("shows error message when login fails", async () => {
    loginMock.mockRejectedValue(new Error("fail"))
    const wrapper = mount(LoginPage)
    const inputs = wrapper.findAll("input")

    await inputs[0]!.setValue("wrong@email.com")
    await inputs[1]!.setValue("wrong")

    await wrapper.find("form").trigger("submit")
    await nextTick()

    expect(wrapper.text()).toContain("Invalid email or password")
  })
})