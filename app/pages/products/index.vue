<template>
  <div class="py-10 px-6">
    <div class="max-w-6xl mx-auto mb-8">
      <h1 class="text-3xl font-bold text-gray-800">🛍 Products</h1>
      <p class="text-gray-500">
        Explore our latest products at the best prices
      </p>
    </div>

    <div v-if="pending" class="flex justify-center items-center h-40">
      <p class="text-lg text-gray-500 animate-pulse">Loading products...</p>
    </div>

    <div
      v-else
      class="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Products",
  description: "Buy latest products at best price",
  ogTitle: "Products",
  ogDescription: "Best deal for products",
});

const {
  data: products,
  pending,
  error,
} = await useAsyncData("products", () => $fetch("/api/products"));

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: "Failed to load products",
  });
}
</script>
