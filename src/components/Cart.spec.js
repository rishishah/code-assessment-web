import React from 'react'
import { shallow } from 'enzyme'
import Cart, { taxRate } from './Cart'
import CartItem from './CartItem'

const setup = (total, products = []) => {
  const actions = {
    onCheckoutClicked: jest.fn(),
    onAddToCartClicked: jest.fn(),
    onRemoveFromCartClicked: jest.fn(),
    onDecreaseQuantClicked: jest.fn()
  }

  const component = shallow(
    <Cart products={products} total={total} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    button: component.find('button'),
    products: component.find(CartItem),
    subtotal: component.find('.cart-subtotal-container > .summary-item-price'),
    taxes: component.find('.cart-taxes-container > .summary-item-price'),
    total: component.find('.cart-total-container > .summary-item-price'),
    em: component.find('.empty-cartmsg-text'),
    p: component.find('p')
  }
}

describe('Cart component', () => {

  it('should not display subtotal', () => {
    const { subtotal } = setup('76')
    expect(subtotal.length).toBe(0)
  })

  it('should not display taxes', () => {
    const { taxes } = setup('76')
    expect(taxes.length).toBe(0)
  })

  it('should not display total', () => {
    const { total } = setup('76')
    expect(total.length).toBe(0)
  })

  it('should display add some products message', () => {
    const { em } = setup()
    expect(em.text()).toMatch(/^Please add some products to your cart./)
  })

  it('should not show button', () => {
    const { button } = setup()
    expect(button.length).toBe(0)
  })

  describe('when given product', () => {
    const product = [
      {
        id: 1,
        title: 'Product 1',
        price: 9.99,
        quantity: 1
      }
    ]

    it('should display subtotal', () => {
      const { subtotal } = setup('76', product)
      expect(subtotal.text()).toMatch(`$76`)
    })
  
    it('should display taxes', () => {
      const { taxes } = setup('76', product)
      const expected = (76 * taxRate).toFixed(2)
      expect(taxes.text()).toMatch(`$${expected}`)
    })
  
    it('should display total', () => {
      const { total } = setup('76', product)
      const expectedTotal = (76 * (1 + taxRate)).toFixed(2)
      expect(total.text()).toMatch(`$${expectedTotal}`)
    })

    it('should render products', () => {
      const { products, actions } = setup('9.99', product)
      const { onAdd, onRemove, onDecrease, ...productsObjProps } = products.at(0).props()
      const { id, ...productsProps } = productsObjProps.product
      const props = {
        title: product[0].title,
        price: product[0].price,
        quantity: product[0].quantity
      }

      expect(productsProps).toEqual(props)
      expect(typeof onAdd).toEqual('function')
      expect(typeof onRemove).toEqual('function')
      expect(typeof onDecrease).toEqual('function')
    })

    it('should not disable button', () => {
      const { button } = setup('9.99', product)
      expect(button.prop('disabled')).toEqual(false)
    })

    it('should call action on button click', () => {
      const { button, actions } = setup('9.99', product)
      button.simulate('click')
      expect(actions.onCheckoutClicked).toBeCalled()
    })
  })
})
