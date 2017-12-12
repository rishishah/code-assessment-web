import React from 'react'
import { shallow } from 'enzyme'
import CartItem from './CartItem'

const setup = product => {
  const actions = {
    onRemove: jest.fn(),
    onAdd: jest.fn(),
    onDecrease: jest.fn()
  }

  const component = shallow(
    <CartItem product={product} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    removeBtn: component.find('.cart-item-remove-btn'),
    minusBtn: component.find('.minus-btn'),
    plusBtn: component.find('.plus-btn')

  }
}

describe('CartItem component', () => {
  const product = {
    id: 1,
    title: 'Product 1',
    price: 9.99,
    quantity: 6
  }

  it('should render Remove message', () => {
    const { removeBtn } = setup(product)
    expect(removeBtn.text()).toMatch(/^Remove/)
  })

  it('should call action on button clicks', () => {
    const { removeBtn, minusBtn, plusBtn, actions } = setup(product)
    removeBtn.simulate('click')
    minusBtn.simulate('click')
    plusBtn.simulate('click')
    expect(actions.onRemove).toBeCalled()
    expect(actions.onAdd).toBeCalled()
    expect(actions.onDecrease).toBeCalled()    
  })
})