<template>
  <div class="offcanvas" :class="{ show: visible }">
    <div class="offcanvas-header">
      <h5>Carrinho de compras ({{ totalItems }} item{{ totalItems > 1 ? 's' : '' }})</h5>
      <button class="btn-close" @click="close"></button>
    </div>

    <div class="offcanvas-body">
      <div v-if="!grouped.length">Seu carrinho está vazio.</div>
      <div v-for="item in grouped" :key="item.product.id" class="d-flex align-items-center mb-3">
        <img :src="item.product.image" alt="" class="me-3" style="width:60px; object-fit:contain;" />
        <div class="flex-grow-1">
          <div>{{ item.product.name }}</div>
          <div>R$ {{ format(item.product.price) }}</div>
          <div class="d-flex align-items-center gap-2 mt-1">
            <button class="btn btn-sm" @click="update({ id: item.product.id, delta: -1 })"
                    :disabled="item.quantity <= 1">-</button>
            <span>{{ item.quantity }}</span>
            <button class="btn btn-sm" @click="update({ id: item.product.id, delta: 1 })">+</button>
            <button class="btn btn-link text-danger ms-auto p-0" @click="remove(item.product.id)">
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-between">
        <strong>Subtotal</strong>
        <strong>R$ {{ format(subtotal) }}</strong>
      </div>
      <button class="btn btn-primary w-100 mt-3">Finalizar Pedido</button>
      <button class="btn btn-link w-100 mt-2">Continuar comprando</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  visible: Boolean,
  cart: Array
});
const emit = defineEmits(['update:visible','remove','update-quantity']);

const grouped = computed(() => {
  const map = {};
  props.cart.forEach(p => {
    if (!map[p.id]) map[p.id] = { product: p, quantity: 0 };
    map[p.id].quantity++;
  });
  return Object.values(map);
});

const totalItems = computed(() => props.cart.length);
const subtotal   = computed(() => props.cart.reduce((sum,p)=>sum + p.price, 0));

function close() {
  emit('update:visible', false);
}
function remove(id) {
  emit('remove', id);
}
function update(payload) {
  emit('update-quantity', payload);
}
function format(n) {
  return n.toFixed(2).replace('.', ',');
}
</script>

<style scoped>
.offcanvas {
  position: fixed;
  top: 0; right: 0;
  height: 100%;
  width: 320px;
  background: #fff;
  box-shadow: -4px 0 12px rgba(0,0,0,0.1);
  transform: translateX(100%);
  transition: transform .3s ease-in-out;
  z-index: 2000;
}

.offcanvas.show { transform: translateX(0); }
.offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.offcanvas-body { padding: 1rem; overflow-y: auto; }
@media (max-width: 600px) {
  .offcanvas {
    width: 100vw;
    min-width: 0;
    max-width: 100vw;
  }
}
</style>