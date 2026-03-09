import { defineStore } from "pinia"

interface User {
  name: string
  email: string
}

interface LoginResponse {
  token: string
  user: User
  success: boolean
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: useCookie('token').value
  }),

  actions: {
    async login(email: string, password: string) {

      const data = await $fetch<LoginResponse>('/api/login', {
        method: 'POST',
        body: { email, password }
      })

      this.token = data.token
      this.user = data.user
    },

    logout() {
      this.token = ''
      this.user = null
    }
  },
   persist: true
})