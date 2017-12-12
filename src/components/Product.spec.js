import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component,
    title: component.find('.product-title'),
    price: component.find('.product-price'),
    inventory: component.find('.product-inventory')
  }
}

describe('Product component', () => {
  it('should render title and price', () => {
    const { title, price } = setup({ title: 'Test Product', price: 9.99 })
    expect(title.text()).toBe('Test Product')
    expect(price.text()).toBe('$9.99')
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { title, price, inventory } = setup({ title: 'Test Product', price: 9.99, inventory: 6 })
      expect(title.text()).toBe('Test Product')
      expect(price.text()).toBe('$9.99')
      expect(inventory.text()).toBe('6 remaining')
    })
  })
})
