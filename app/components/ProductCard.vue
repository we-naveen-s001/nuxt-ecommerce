<template>
  <div
    class="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition duration-300 flex flex-col"
  >
    <div class="flex justify-center mb-4">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-40 h-40 object-contain"
      />
    </div>

    <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
      {{ product.name }}
    </h3>

    <p class="text-green-600 font-bold text-lg mb-4">${{ product.price }}</p>

    <NuxtLink
      :to="`/products/${product.id}`"
      class="mt-auto bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
    >
      View Product
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
