export default {
  namespaced: true,
  state: () => ({ items: [] }),
  getters: {
    isFavorite: state => id => state.items.includes(id),
    count: state => state.items.length
  },
  mutations: {
    TOGGLE(state, id) {
      const index = state.items.indexOf(id)
      if (index === -1) state.items.push(id)
      else state.items.splice(index, 1)
    }
  },
  actions: {
    toggle({ commit }, id) { commit('TOGGLE', id) }
  }
}