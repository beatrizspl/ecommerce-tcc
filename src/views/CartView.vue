<template>
  <div class="cart-view p-3">
    <h1 class="mb-4">Carrinho</h1>
    <div v-if="!state.cart.length" class="alert alert-info">
      Seu carrinho está vazio
    </div>
    <div v-else>
      <div
        v-for="(item, idx) in state.cart"
        :key="idx"
        class="card mb-3"
      >
        <div class="card-body">
          <h5 class="card-title">{{ item.name }}</h5>
          <p class="card-text">
            R$ {{ item.price.toFixed(2).replace('.', ',') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import state from '@/composables/store.js';
</script>
