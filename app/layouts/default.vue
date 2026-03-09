<template>
  <div>
    <header class="bg-white shadow">
      <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
        <NuxtLink to="/products" class="text-xl font-bold"> My Store </NuxtLink>

        <NuxtLink
          to="/cart"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cart ({{ cartStore.totalItems }})
        </NuxtLink>
      </div>
    </header>

    <slot />
  </div>
</template>

<script setup>
const cartStore = useCartStore();
</script>
