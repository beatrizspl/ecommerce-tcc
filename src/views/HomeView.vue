<template>
  <div class="home-view p-3">
    <ProductGrid
      :products="filteredProducts"
      :is-product-disabled="isProductDisabled"
      :get-button-id="getButtonId"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script setup>
import { filteredProducts, addToCart } from '@/composables/store.js';
import ProductGrid from '@/components/products/ProductGrid.vue';

function isProductDisabled(product) {
  return product.id === 7;
}
function getButtonId(product) {
  return product.id % 4 === 0
    ? `comprar-${product.id}-alt`
    : `btn-buy-${product.id}`;
}
</script>

<style scoped>
.home-view {
  padding: 1rem;
}
</style>
