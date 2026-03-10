<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-4">Login</h1>

      <div class="bg-gray-100 border rounded-md p-3 mb-5 text-sm">
        <p class="font-semibold mb-1">Demo Credentials</p>
        <p>Email: <span class="font-medium">naveen@test.com</span></p>
        <p>Password: <span class="font-medium">123456</span></p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div class="flex flex-col">
          <label class="text-sm font-medium mb-1">Email</label>

          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-medium mb-1">Password</label>

          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm">
          {{ errorMessage }}
        </p>

        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
definePageMeta({
  layout: false,
});

const email = ref("");
const password = ref("");
const errorMessage = ref("");

const auth = useAuthStore();

async function handleLogin() {
  errorMessage.value = "";

  try {
    await auth.login(email.value, password.value);
    navigateTo("/products");
  } catch (e) {
    errorMessage.value = "Invalid email or password";
  }
}
</script>
