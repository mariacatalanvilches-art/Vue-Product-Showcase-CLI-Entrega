import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/productos', name: 'products', component: ProductsView },
  { path: '/productos/:id', name: 'product-detail', component: ProductDetailView, props: true }
]

export default createRouter({
  history: createWebHistory(),
  routes
})