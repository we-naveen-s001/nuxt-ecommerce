<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600"
  >
    <div class="bg-white rounded-xl shadow-xl p-10 text-center max-w-md">
      <h1 class="text-7xl font-bold text-indigo-600 mb-4">
        {{ error.statusCode }}
      </h1>

      <p class="text-gray-600 text-lg mb-6">
        {{ message }}
      </p>

      <NuxtLink
        to="/"
        class="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        Go Back Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  error: Object,
});

const message = computed(() => {
  if (props.error.statusCode === 404) {
    return "Oops! The page you are looking for does not exist.";
  }

  if (props.error.statusCode === 401) {
    return "You are not authorized to access this page.";
  }

  return props.error.statusMessage || "Something went wrong.";
});
</script>
