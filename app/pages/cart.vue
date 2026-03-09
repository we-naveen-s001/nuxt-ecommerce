<template>
  <div class="py-10 px-6">
    <div class="max-w-5xl mx-auto mb-4">
      <button
        @click="goBack"
        class="text-blue-600 font-medium hover:text-blue-800"
      >
        ← Back
      </button>
    </div>

    <div class="max-w-5xl mx-auto mb-8">
      <h1 class="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
    </div>

    <div class="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div
        v-if="cart.items.length === 0"
        class="text-center text-gray-500 py-10"
      >
        <p class="text-lg">Your cart is empty 🛍</p>
      </div>

      <div v-else class="space-y-6">
        <div
          v-for="item in cart.items"
          :key="item.id"
          class="flex items-center justify-between border-b pb-4"
        >
          <div class="flex items-center gap-4">
            <img
              :src="item.image"
              :alt="item.name"
              class="w-20 h-20 object-contain rounded"
            />

            <div>
              <h3 class="font-semibold text-gray-800">
                {{ item.name }}
              </h3>

              <p class="text-green-600 font-medium">${{ item.price }}</p>
            </div>
          </div>

          <button
            @click="remove(item.id)"
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>

        <div class="flex justify-between items-center pt-4">
          <p class="text-lg font-semibold">
            Total Items: {{ cart.totalItems }}
          </p>

          <NuxtLink
            to="/products"
            class="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Continue Shopping
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCartStore();
const router = useRouter();

function remove(id) {
  cart.removeFromCart(id);
}

function goBack() {
  router.back();
}
</script>
