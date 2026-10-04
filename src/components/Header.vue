<template>
  <header class="site-header">
    <div class="container header-inner">
      <router-link class="brand" to="/">Vue Product Showcase</router-link>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/productos">Productos</router-link>
        <button class="theme-btn" @click="$emit('toggle-theme')">
          {{ darkMode ? '☀️ Claro' : '🌙 Oscuro' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: { darkMode: Boolean },
  emits: ['toggle-theme']
}
</script>