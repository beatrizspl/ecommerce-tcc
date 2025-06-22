<template>
  <button
    class="btn btn-outline-primary position-relative d-flex align-items-center gap-2"
    @click="$emit('click')"
  >
    <i class="bi bi-cart3"></i>
    <CartBadge :cart-quantity="count" />
  </button>
</template>

<script setup>
import CartBadge from './CartBadge.vue';
const props = defineProps({
  count: Number
});
</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>

