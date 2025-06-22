<template>
  <div class="container px-4">
    <div class="row g-4 justify-content-center">
      <div 
        v-for="product in products" 
        :key="product.id"
        class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-8"
      >
        <ProductCard
          :product="product"
          :is-disabled="isProductDisabled(product)"
          :button-id="getButtonId(product)"
          @add-to-cart="emitAddToCart"
        />
      </div>
    </div>
    <div v-if="!products.length" class="text-center py-5">
      <p>Nenhum produto corresponde à pesquisa</p>
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';
const props = defineProps({
  products: Array,
  isProductDisabled: Function,
  getButtonId: Function
});
const emit = defineEmits(['add-to-cart']);
function emitAddToCart(product) {
  emit('add-to-cart', product);
}
</script>

<style scoped>
.productgrid-container {
  margin-top: 20px;
}
@media (max-width: 1200px) {
  .col-xxl-3, .col-xl-4 {
    min-width: 300px;
    max-width: 90vw;
  }
}
@media (max-width: 768px) {
  .col-sm-10 {
    width: 98vw;
  }
}
</style>