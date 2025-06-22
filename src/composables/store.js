import { reactive, computed } from 'vue';
import { products as productList } from '@/data/products.js';

const state = reactive({
  products: productList,
  searchQuery: '',
  cart: [],
  isCartOpen: false
});

export const filteredProducts = computed(() => {
  const q = state.searchQuery.toLowerCase();
  return state.products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.subtitle.toLowerCase().includes(q)
  );
});

export const subtotal = computed(() =>
  state.cart.reduce((sum, p) => sum + p.price, 0)
);

export function addToCart(product) {
  if (product.id !== 7) state.cart.push(product);
}

export function removeFromCart(id) {
  let idx;
  while ((idx = state.cart.findIndex(p => p.id === id)) > -1) {
    state.cart.splice(idx, 1);
  }
}

export function updateQuantity({ id, delta }) {
  if (delta > 0) {
    const p = state.cart.find(x => x.id === id);
    if (p) state.cart.push(p);
  } else {
    const i = state.cart.findIndex(x => x.id === id);
    if (i > -1) state.cart.splice(i, 1);
  }
}

export function openCart() {
  state.isCartOpen = true;
}

export function closeCart() {
  state.isCartOpen = false;
}

export function setSearchQuery(val) {
  state.searchQuery = val;
}

export default state;