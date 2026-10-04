import { mount } from '@vue/test-utils'
import { createStore } from 'vuex'
import ProductList from '@/components/ProductList.vue'
import ProductCard from '@/components/ProductCard.vue'

const createTestStore = (products = [], category = 'Todas') => {
  return createStore({
    modules: {
      products: {
        namespaced: true,
        state: () => ({
          items: products,
          loading: false,
          error: null,
          usingFallback: false
        }),
        getters: {
          products: state => state.items,
          loading: state => state.loading,
          error: state => state.error,
          usingFallback: state => state.usingFallback
        }
      },
      filters: {
        namespaced: true,
        state: () => ({ category }),
        getters: {
          category: state => state.category
        },
        actions: {
          setCategory: jest.fn()
        }
      },
      favorites: {
        namespaced: true,
        state: () => ({}),
        getters: {
          isFavorite: () => () => false
        },
        actions: {
          toggle: jest.fn()
        }
      }
    }
  })
}

describe('ProductList.vue', () => {
  it('renderiza ProductCard cuando existen productos', () => {
    const product = {
      id: 1,
      title: 'Demo',
      price: 10,
      category: 'test',
      image: 'x'
    }

    const store = createTestStore([product])

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store]
      }
    })

    expect(wrapper.findComponent(ProductCard).exists()).toBe(true)
  })

  it('muestra el mensaje cuando no existen productos para la categoría', () => {
    const store = createTestStore([])

    const wrapper = mount(ProductList, {
      global: {
        plugins: [store]
      }
    })

    expect(wrapper.text()).toContain('No hay productos para esta categoría.')
  })
})
