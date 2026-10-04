<template>
  <section class="hero">
    <div>
      <span class="eyebrow">CATÁLOGO DIGITAL</span>
      <h1>Descubre productos de forma simple y dinámica.</h1>
      <p>Una SPA desarrollada con Vue CLI, componentes reutilizables, Axios y Vuex.</p>
      <router-link class="btn primary large" to="/productos">Explorar productos</router-link>
    </div>
    <div class="hero-card">
      <div class="hero-icon">🛍️</div>
      <h2>Vue Product Showcase</h2>
      <p>Catálogo interactivo, responsive y preparado para escalar.</p>
    </div>
  </section>
</template>

<script>
export default { name: 'HomeView' }
</script>