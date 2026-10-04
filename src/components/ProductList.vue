<template>
  <section>
    <div class="toolbar">
      <label for="category">Filtrar por categoría</label>

      <el-select
        id="category"
        :model-value="category"
        placeholder="Selecciona una categoría"
        aria-label="Filtrar por categoría"
        @change="changeCategory"
      >
        <el-option label="Todas" value="Todas" />
        <el-option
          v-for="item in categories"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>

    <div v-if="loading" class="state-box">
      Cargando productos...
    </div>

    <div v-else>
      <div v-if="usingFallback" class="state-box notice">
        La API pública no está disponible en este momento.
        Se muestran datos locales de respaldo para mantener la demo funcional.
      </div>

      <div v-if="filteredProducts.length === 0" class="state-box">
        No hay productos para esta categoría.
      </div>

      <div v-else class="product-grid">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          :is-favorite="isFavorite(product.id)"
          @favorite="toggleFavorite"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  components: {
    ProductCard
  },

  computed: {
    ...mapGetters('products', [
      'products',
      'loading',
      'error',
      'usingFallback'
    ]),

    ...mapGetters('filters', ['category']),

    ...mapGetters('favorites', ['isFavorite']),

    categories() {
      return [...new Set(this.products.map(product => product.category))]
    },

    filteredProducts() {
      if (this.category === 'Todas') {
        return this.products
      }

      return this.products.filter(
        product => product.category === this.category
      )
    }
  },

  methods: {
    changeCategory(category) {
      this.$store.dispatch('filters/setCategory', category)
    },

    toggleFavorite(id) {
      this.$store.dispatch('favorites/toggle', id)
    }
  }
}
</script>
