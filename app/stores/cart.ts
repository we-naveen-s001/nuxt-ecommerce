import { defineStore } from "pinia"

interface Product {
  id: number
}

interface CartState {
  items: Product[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: []
  }),

  actions: {
    addToCart(product: Product) {
      const isProductAvailable = this.items.find(p => p.id === product.id)
      if (isProductAvailable) {
        return
      }
      this.items.push(product)
    },

    removeFromCart(id: number) {
      this.items = this.items.filter(p => p.id !== id)
    }
  },

  getters: {
    totalItems: (state): number => state.items.length
  },
   persist: true
})