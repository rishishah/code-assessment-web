import React from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'
import Product from './Product'
import CartIcon from './CartIcon'

const Cart = ({ products, total, onCheckoutClicked, onAddToCartClicked, onRemoveFromCartClicked, onDecreaseQuantClicked }) => {
  const hasProducts = products.length > 0
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

  const emptyCartMsg = (
    <div className="empty-cartmsg-container">
      <CartIcon height={76} width={95} fill="#BDBDBD" />
      <div className="empty-cartmsg-text" >Please add some products to your cart.</div>
    </div>
  )

  const subTotal = Number(total)
  const taxRate = 0.0807
  const taxes = subTotal * taxRate
  const finalCost = subTotal + taxes

  return (
    <div className="cart">
      <header className="cart-title" >Your cart</header>
      <div className="cart-divider" />
      { hasProducts
        ? (
          <div className="cart-contents-container">
            <div className="cart-item-container">{cartItems}</div>
            <div className="cart-total-container">
              <div className="cart-total-divider"></div>
              <div>
                <span>Subtotal</span> <span>{`$${subTotal}`}</span>
              </div>
              <div>
                <span>Taxes</span> <span>{`$${taxes.toFixed(2)}`}</span>
              </div>
              <div className="cart-total-divider"></div>
              <div>
                <span>Total</span> <span>{`$${finalCost.toFixed(2)}`}</span>
              </div>
              <button className="primary-btn checkout-btn" onClick={onCheckoutClicked}
                disabled={!hasProducts}>
                Checkout
              </button>
            </div>
          </div>
          )
        : emptyCartMsg
      }
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
