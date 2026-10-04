<template>
  <section>
    <div class="page-heading">
      <div>
        <span class="eyebrow">CATÁLOGO</span>
        <h1>Todos los productos</h1>
        <p>Filtra por categoría y consulta el detalle de cada producto.</p>
      </div>
    </div>
    <ProductList />
  </section>
</template>

<script>
import ProductList from '../components/ProductList.vue'
export default { name: 'ProductsView', components: { ProductList } }
</script>