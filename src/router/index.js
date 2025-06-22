import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ShopView from '@/views/ShopView.vue';
import CartView from '@/views/CartView.vue';

const routes = [
  { path: '/',    name: 'Home',  component: HomeView },
  { path: '/shop',name: 'Shop',  component: ShopView },
  { path: '/cart',name: 'Cart',  component: CartView }
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
