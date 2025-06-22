<template>
  <div
    class="card h-100 text-center position-relative"
    :class="productCardClass"
  >
    <img
      v-if="product"
      :src="product.image"
      :alt="product.name"
      class="card-img-top img-fluid image"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text text-muted small">{{ product.subtitle }}</p>
      <p class="card-text fw-bold fs-5 price">
        {{ formattedPrice }}
      </p>
    </div>
    <div class="card-footer custom-footer">
      <button
        v-if="shouldShowButton"
        :id="buttonId"
        class="btn btn-dark w-75 mx-auto"
        :disabled="isDisabled"
        @click="handleAdd"
      >
        {{ isDisabled ? 'ESGOTADO' : 'COMPRAR' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const props = defineProps({
  product: Object,
  isDisabled: Boolean,
  buttonId: String
});
const emit = defineEmits(['add-to-cart']);

const productCardClass = computed(() => {
  if (!props.product) return '';
  return props.product.id === 7 ? 'opacity-50' : '';
});

const formattedPrice = computed(() =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency', currency: 'BRL'
  }).format(props.product.price)
);

function handleAdd() {
  if (!props.isDisabled) emit('add-to-cart', props.product);
}

// comportamento instável no botão (apenas exemplo)
const shouldShowButton = ref(true);
onMounted(() => {
  if (props.product?.id === 1) {
    shouldShowButton.value = Math.random() > 0.5;
  }
});
</script>

<style scoped>
.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  border: none;
  transition: all 0.3s ease;
  min-height: 410px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.15);
}
.image { max-height: 180px; object-fit: contain; margin: 1rem auto; }
.card-footer {
  background: #fff;
  border: none;
  box-shadow: none;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
}
.price { margin-bottom: 1rem; }
.opacity-50 {
  position: relative;
  opacity: 0.5 !important;
}
.opacity-50::after {
  content: "ESGOTADO";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--out-of-stock-color);
  color: white;
  padding: 0.15rem 1.5rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  pointer-events: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
  opacity: 0.9;
}
@media (max-width: 576px) {
  .card { min-width: 92vw; }
}
</style>
