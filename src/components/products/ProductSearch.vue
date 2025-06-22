<template>
  <div class="search-bar input-group">
    <input
      type="search"
      class="form-control rounded-pill"
      :value="modelValue"
      @input="updateValue"
      placeholder="Pesquisar perfume..."
      aria-label="Buscar"
    />
    <button
      type="button"
      class="btn position-absolute end-0 me-3"
      aria-label="Buscar"
    >
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: String
});
const emit = defineEmits(['update:modelValue']);

function updateValue(e) {
  emit('update:modelValue', e.target.value);
}
</script>

<style scoped>
.search-bar {
  position: relative;
  max-width: 300px;
}

.form-control:focus {
  box-shadow: 0 0 0 3px rgba(138, 79, 255, 0.25);
}

@media (max-width: 992px) {
  .search-bar {
    max-width: 100%;
  }
}
</style>