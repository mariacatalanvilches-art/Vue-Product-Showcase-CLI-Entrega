<template>
  <section class="detail">
    <div v-if="!product" class="state-box">
      Producto no encontrado.
      <router-link to="/productos">Volver al catálogo</router-link>
    </div>

    <div v-else class="detail-card">
      <div class="detail-image">
        <img :src="product.image" :alt="product.title">
      </div>
      <div class="detail-content">
        <span class="category">{{ product.category }}</span>
        <h1>{{ product.title }}</h1>
        <p class="price">${{ product.price.toFixed(2) }}</p>
        <p>{{ product.description }}</p>
        <p v-if="product.rating">⭐ {{ product.rating.rate }} / 5 · {{ product.rating.count }} valoraciones</p>
        <button class="btn secondary" @click="toggleFavorite(product.id)">
          {{ isFavorite(product.id) ? '★ Quitar de favoritos' : '☆ Agregar a favoritos' }}
        </button>
        <router-link class="back-link" to="/productos">← Volver al catálogo</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductDetailView',
  props: ['id'],
  computed: {
    ...mapGetters('products', ['productById']),
    ...mapGetters('favorites', ['isFavorite']),
    product() {
      return this.productById(this.id)
    }
  },
  methods: {
    toggleFavorite(id) {
      this.$store.dispatch('favorites/toggle', id)
    }
  }
}
</script>