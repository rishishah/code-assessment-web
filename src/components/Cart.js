import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import CartIcon from './CartIcon'

export const taxRate = 0.0807

const Cart = ({ products, total, onCheckoutClicked, onAddToCartClicked, onRemoveFromCartClicked, onDecreaseQuantClicked }) => {
  const subTotal = Number(total)
  const taxes = subTotal * taxRate
  const finalCost = subTotal + taxes
  const hasProducts = products ? products.length > 0 : false
  const cartItems = (
    products.map(product =>
      <CartItem
        product={product}
        key={product.id}
        onRemove={() => onRemoveFromCartClicked(product.id)}
        onAdd={() => onAddToCartClicked(product.id)}
        onDecrease={() => onDecreaseQuantClicked(product.id)}
      />
    )
  )

  const cartItemsView = (
    <div className="cart-contents-container">
      <div className="cart-item-container">{cartItems}</div>
      <div className="cart-checkout-container">
        <div className="cart-summary-container">
          <div className="cart-subtotal-container">
            <span className="summary-item-title">Subtotal</span>
            <span className="summary-item-price">{`$${subTotal}`}</span>
          </div>
          <div className="cart-taxes-container">
            <span className="summary-item-title">Taxes</span>
            <span className="summary-item-price">{`$${taxes.toFixed(2)}`}</span>
          </div>
          <div className="cart-total-container">
            <span className="summary-item-title">Total</span>
            <span className="summary-item-price">{`$${finalCost.toFixed(2)}`}</span>
          </div>
        </div>
        <button 
          className="primary-btn"
          id="checkout-btn"
          onClick={onCheckoutClicked}
          disabled={!hasProducts}>
          Checkout
        </button>
      </div>
    </div>
  )

  const emptyCartMsg = (
    <div className="empty-cartmsg-container">
      <CartIcon className="empty-cartmsg-icon" height="76" width="95" fill="#BDBDBD" />
      <div className="empty-cartmsg-text" >Please add some products to your cart.</div>
    </div>
  )

  return (
    <div className="cart">
      <header className="cart-title" >Your cart</header>
      <div className="cart-divider" />
      { hasProducts ? cartItemsView : emptyCartMsg }
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onAddToCartClicked: PropTypes.func,
  onRemoveFromCartClicked: PropTypes.func,
  onDecreaseQuantClicked: PropTypes.func
}

export default Cart
