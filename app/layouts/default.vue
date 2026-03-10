<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
        <NuxtLink to="/products" class="text-xl font-bold"> My Store </NuxtLink>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/cart"
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Cart ({{ cartStore.totalItems }})
          </NuxtLink>

          <button
            @click="logout"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </header>

    <slot />
  </div>
</template>

<script setup>
const cartStore = useCartStore();
const logout = async () => {
  const auth = useAuthStore();
  await auth.logout();
  navigateTo("/login");
};
</script>
