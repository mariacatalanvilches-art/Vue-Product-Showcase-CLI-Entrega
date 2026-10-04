<template>
  <div id="app" :class="{ dark: darkMode }">
    <Header @toggle-theme="toggleTheme" :dark-mode="darkMode" />
    <main class="container">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer },
  data() {
    return { darkMode: false }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
    }
  },
  created() {
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>