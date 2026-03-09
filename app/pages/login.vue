<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center mb-6">Login</h1>

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
