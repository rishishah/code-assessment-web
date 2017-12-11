import React from 'react'
import { shallow } from 'enzyme'
import Product from './Product'

const setup = props => {
  const component = shallow(
    <Product {...props} />
  )

  return {
    component: component,
    button: component.find('button'),
    minusBtn: component.find('.minus-btn'),
    plusBtn: component.find('.plus-btn'),
    props: props
  }
}

describe('Product component', () => {
  it('should render title and price', () => {
    const { component } = setup({ title: 'Test Product', price: 9.99 })
    expect(component.text()).toBe('Test Product - $9.99')
  })

  describe('when given inventory', () => {
    it('should render title, price, and inventory', () => {
      const { component } = setup({ title: 'Test Product', price: 9.99, inventory: 6 })
      expect(component.text()).toBe('Test Product - $9.99 x 6')
    })
  })

  describe('when given remove-from-cart function', () => {
    const testProps = { 
      title: 'Diamonds', 
      price: 2999.99, 
      inventory: 3,
      onRemove: jest.fn()
    }

    it('should render Remove button', () => {
      const { button } = setup(testProps)
      expect(button.text()).toMatch('Remove')
    })

    it('should call an action on button click', () => {
      const { button, props } = setup(testProps)
      button.simulate('click')
      expect(props.onRemove).toBeCalled()
    })
  })

  describe('when given update-quantity functions', () => {
    const testProps = { 
      title: 'Diamonds', 
      price: 2999.99, 
      inventory: 3,
      quantity: 1,
      onAdd: jest.fn(),
      onDecrease: jest.fn()
    }

    it('should call an action on button click', () => {
      const { minusBtn, plusBtn, props } = setup(testProps)
      plusBtn.simulate('click')
      minusBtn.simulate('click')
      expect(props.onAdd).toBeCalled()
      expect(props.onDecrease).toBeCalled()
    })
  })
})
