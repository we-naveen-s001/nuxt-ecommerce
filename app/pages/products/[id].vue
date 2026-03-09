<template>
  <div class="flex items-center justify-center p-6">
    <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
      <button
        @click="goBack"
        class="mb-4 text-sm text-blue-600 hover:text-blue-800 font-medium"
      >
        ← Back
      </button>

      <div v-if="pending" class="text-center text-gray-500">
        Loading product...
      </div>

      <div v-else class="text-center space-y-4">
        <h1 class="text-2xl font-bold text-gray-800">
          {{ product.name }}
        </h1>

        <img
          :src="product.image"
          :alt="product.name"
          class="mx-auto rounded-lg shadow w-48 h-48 object-contain"
        />

        <p class="text-lg font-semibold text-green-600">
          Price: ${{ product.price }}
        </p>

        <button
          @click="addToCart(product)"
          class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

const { data: product, pending } = await useFetch(
  `/api/products/${route.params.id}`,
);

useSeoMeta({
  title: product.value?.name,
  description: `Buy ${product.value?.name} at best price`,
  ogTitle: product.value?.name,
  ogDescription: `Best deal for ${product.value?.name}`,
});

function addToCart(item) {
  cartStore.addToCart(item);

  router.push("/cart");
}

function goBack() {
  router.back();
}
</script>
