import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ProductCard from '../ProductCard.vue'

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 99,
  image: 'https://example.com/product.png'
}

describe('ProductCard.vue', () => {

  it('renders product name', () => {
    const wrapper = mount(ProductCard, {
      props: {
        product: mockProduct
      },
      global: {
        stubs: {
          NuxtLink: true
        }
      }
    })

    expect(wrapper.text()).toContain('Test Product')
  })

  it('renders product price', () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockProduct },
      global: {
        stubs: { NuxtLink: true }
      }
    })

    expect(wrapper.text()).toContain('$99')
  })

  it('renders product image', () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockProduct },
      global: {
        stubs: { NuxtLink: true }
      }
    })

    const img = wrapper.find('img')

    expect(img.attributes('src')).toBe(mockProduct.image)
    expect(img.attributes('alt')).toBe(mockProduct.name)
  })

  it('has correct product link', () => {
    const wrapper = mount(ProductCard, {
      props: { product: mockProduct },
      global: {
        stubs: {
          NuxtLink: {
            template: '<a :href="to"><slot /></a>',
            props: ['to']
          }
        }
      }
    })

    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/products/1')
  })

})