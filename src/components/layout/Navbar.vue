<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top border-0 py-0">
    <div class="container-fluid flex-column">
      <!-- logo + busca + icones -->
      <div class="w-100 d-flex align-items-center py-2 position-relative">
        <div class="position-absolute start-50 translate-middle-x">
          <router-link to="/" class="navbar-brand">
            <span class="fw-bold fs-1 text-primary">FLO</span>
          </router-link>
        </div>
        <div class="d-flex align-items-center ms-auto">
          <ProductSearch
            :modelValue="state.searchQuery"
            @update:modelValue="setSearchQuery"
            class="me-3"
          />
          <button class="btn btn-link text-dark me-3" aria-label="Login">
            <i class="bi bi-person fs-5"></i>
          </button>
          <CartButton :count="state.cart.length" @click="openCart" />
        </div>
      </div>
      <!-- linha 2: menu -->
      <div class="w-100 border-top py-2">
        <ul class="navbar-nav d-flex justify-content-center text-uppercase mb-0">
          <li class="nav-item" v-for="item in menu" :key="item.name">
            <router-link
              :to="item.path"
              class="nav-link fw-medium px-3"
              :class="{ active: $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import state, { setSearchQuery, openCart } from '@/composables/store.js';
import ProductSearch from '@/components/products/ProductSearch.vue';
import CartButton from '@/components/cart/CartButton.vue';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Kits', path: '' },
  { name: 'Marcas', path: '' }
];
</script>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(10px) !important;
  z-index: 1030;
}

.navbar-brand span {
  font-family: 'Poiret One', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 10px;
  text-transform: uppercase;
  background: linear-gradient(45deg, #8a4fff, #5e35b1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.nav-link {
  transition: color .3s;
  padding: 0.5rem 0.75rem !important;
}

.nav-link.active,
.nav-link:hover {
  color: var(--primary-color) !important;
}

.position-absolute.logo-center {
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 992px) {
  .navbar-brand span {
    font-size: 1.6rem;
    letter-spacing: 5px;
  }
  .search-cart-area {
    gap: 0.5rem;
  }
}
@media (max-width: 768px) {
  .navbar-brand span {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
  .menu-wrapper {
    font-size: 0.8rem;
  }
  .navbar-nav {
    flex-direction: row !important;
    flex-wrap: wrap;
  }
  .nav-link {
    padding: 0.25rem 0.5rem !important;
    font-size: 0.85rem;
  }
}
</style>