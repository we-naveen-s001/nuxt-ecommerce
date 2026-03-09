import CartPage from "../cart.vue"
import { mount } from "@vue/test-utils"
import { describe, it, expect, vi } from "vitest"

const backMock = vi.fn()
const removeMock = vi.fn()

vi.stubGlobal("useRouter", () => ({
  back: backMock
}))


type Product = {
  id: number
  name: string
  price: number
  image: string
}


const cartMock: {
  items: Product[]
  totalItems: number
  removeFromCart: (id: number) => void
} = {
  items: [],
  totalItems: 0,
  removeFromCart: removeMock
}

vi.stubGlobal("useCartStore", () => cartMock)

describe("Cart Page", () => {

  it("shows empty cart message", () => {
    cartMock.items = []
    cartMock.totalItems = 0

    const wrapper = mount(CartPage)

    expect(wrapper.text()).toContain("Your cart is empty")
  })

  it("renders cart items", () => {
    cartMock.items = [
      {
        id: 1,
        name: "Test Product",
        price: 100,
        image: "/test.png"
      }
    ]
    cartMock.totalItems = 1

    const wrapper = mount(CartPage)

    expect(wrapper.text()).toContain("Test Product")
    expect(wrapper.text()).toContain("$100")
  })

  it("removes item from cart", async () => {
    cartMock.items = [
      {
        id: 1,
        name: "Test Product",
        price: 100,
        image: "/test.png"
      }
    ]
    cartMock.totalItems = 1

    const wrapper = mount(CartPage)

    await wrapper.find("button.bg-red-500").trigger("click")

    expect(removeMock).toHaveBeenCalledWith(1)
  })

  it("shows total items", () => {
    cartMock.items = [{ id: 1, name: "Test Product", price: 100, image: "/test.png" }]
    cartMock.totalItems = 1

    const wrapper = mount(CartPage)

    expect(wrapper.text()).toContain("Total Items: 1")
  })

  it("goes back when back button clicked", async () => {
    const wrapper = mount(CartPage)

    await wrapper.find("button.text-blue-600").trigger("click")

    expect(backMock).toHaveBeenCalled()
  })

})