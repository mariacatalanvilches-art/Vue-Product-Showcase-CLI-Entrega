export default {
  namespaced: true,
  state: () => ({ category: 'Todas' }),
  getters: {
    category: state => state.category
  },
  mutations: {
    SET_CATEGORY(state, category) { state.category = category }
  },
  actions: {
    setCategory({ commit }, category) { commit('SET_CATEGORY', category) }
  }
}