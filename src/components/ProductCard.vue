<template>
  <article class="product-card">
    <div class="product-image-wrap">
      <img :src="product.image" :alt="product.title" class="product-image">
    </div>
    <div class="product-content">
      <span class="category">{{ product.category }}</span>
      <h3>{{ product.title }}</h3>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <div class="card-actions">
        <el-button type="primary" plain tag="span" class="detail-button">
          <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
            Ver detalle
          </router-link>
        </el-button>
        <el-button type="warning" plain @click="$emit('favorite', product.id)">
          {{ isFavorite ? '★ Favorito' : '☆ Favorito' }}
        </el-button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: { type: Object, required: true },
    isFavorite: { type: Boolean, default: false }
  },
  emits: ['favorite']
}
</script>
