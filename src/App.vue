<template>
  <div class="app-container">
    <Navbar />
    <router-view />
    <CartDrawer
      :visible="state.isCartOpen"
      :cart="state.cart"
      @update:visible="closeCart"
      @remove="removeFromCart"
      @update-quantity="updateQuantity"
    />
  </div>
</template>

<script setup>
import state, {
  closeCart,
  removeFromCart,
  updateQuantity
} from '@/composables/store.js';
import Navbar from '@/components/layout/Navbar.vue';
import CartDrawer from '@/components/cart/CartDrawer.vue';
</script>

<style scoped>
.app-container {
  padding-top: 140px;
}
</style>
