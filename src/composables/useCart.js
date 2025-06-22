import { ref } from 'vue';

export function useCart() {
  const cart = ref([]);

  function addToCart(product) {
    cart.value.push(product);
  }
  function removeFromCart(productId) {
    cart.value = cart.value.filter(item => item.id !== productId);
  }
  function updateQuantity({ id, delta }) {
    if (delta > 0) {
      const p = cart.value.find(x => x.id === id);
      if (p) cart.value.push(p);
    } else {
      const idx = cart.value.findIndex(x => x.id === id);
      if (idx > -1) cart.value.splice(idx, 1);
    }
  }

  return { cart, addToCart, removeFromCart, updateQuantity };
}
