import { mount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

const product = {
  id: 1,
  title: 'Producto de prueba',
  price: 19.99,
  category: 'categoría',
  image: 'https://example.com/image.jpg'
}

describe('ProductCard.vue', () => {
  it('renderiza correctamente el producto', () => {
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        stubs: {
          RouterLink: true,
          'el-button': {
            template: '<button @click="$emit(\'click\')"><slot /></button>'
          }
        }
      }
    })

    expect(wrapper.text()).toContain('Producto de prueba')
    expect(wrapper.text()).toContain('19.99')
  })

  it('emite favorite al pulsar el botón', async () => {
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        stubs: {
          RouterLink: true,
          'el-button': {
            template: '<button @click="$emit(\'click\')"><slot /></button>'
          }
        }
      }
    })

    const buttons = wrapper.findAll('button')
    await buttons[1].trigger('click')

    expect(wrapper.emitted('favorite')).toBeTruthy()
    expect(wrapper.emitted('favorite')[0]).toEqual([1])
  })
})
