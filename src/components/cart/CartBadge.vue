<template>
  <span class="badge position-absolute top-0 start-100 translate-middle">
    {{ cartQuantity }}
  </span>
</template>

<script setup>
const props = defineProps({
  cartQuantity: Number
});
</script>

<style scoped>
.badge {
  background: #000;
  color: #fff;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
</style>
