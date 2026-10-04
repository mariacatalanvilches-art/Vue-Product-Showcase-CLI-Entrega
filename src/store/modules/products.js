import axios from 'axios'

const API_URL = 'https://fakestoreapi.com/products'

const FALLBACK_PRODUCTS = [
  { id: 1, title: 'Notebook Pro', price: 799.99, description: 'Equipo portátil para trabajo y estudio.', category: 'electronics', image: '/products/producto-1.svg', rating: { rate: 4.6, count: 120 } },
  { id: 2, title: 'Set Hogar Smart', price: 129.99, description: 'Soluciones prácticas para un hogar conectado.', category: 'home', image: '/products/producto-2.svg', rating: { rate: 4.4, count: 86 } },
  { id: 3, title: 'Accesorio Premium', price: 59.99, description: 'Accesorio moderno y funcional.', category: 'jewelery', image: '/products/producto-3.svg', rating: { rate: 4.7, count: 95 } },
  { id: 4, title: 'Kit Oficina Digital', price: 89.99, description: 'Complementos para una estación de trabajo eficiente.', category: 'office', image: '/products/producto-4.svg', rating: { rate: 4.5, count: 74 } }
]

export default {
  namespaced: true,

  state: () => ({
    items: [],
    loading: false,
    error: null,
    usingFallback: false
  }),

  getters: {
    products: state => state.items,
    loading: state => state.loading,
    error: state => state.error,
    usingFallback: state => state.usingFallback,
    productById: state => id =>
      state.items.find(p => String(p.id) === String(id))
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.items = products
    },
    SET_LOADING(state, value) {
      state.loading = value
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_FALLBACK(state, value) {
      state.usingFallback = value
    }
  },

  actions: {
    async fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      commit('SET_FALLBACK', false)

      try {
        const { data } = await axios.get(API_URL, { timeout: 8000 })
        commit('SET_PRODUCTS', data)
      } catch (error) {
        commit('SET_PRODUCTS', FALLBACK_PRODUCTS)
        commit('SET_FALLBACK', true)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
}
