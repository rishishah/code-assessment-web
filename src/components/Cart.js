import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import CartIcon from './CartIcon'

const Cart = ({ products, total, onCheckoutClicked, onAddToCartClicked, onRemoveFromCartClicked, onDecreaseQuantClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
        onRemove={() => onRemoveFromCartClicked(product.id)}
        onAdd={() => onAddToCartClicked(product.id)}
        onDecrease={() => onDecreaseQuantClicked(product.id)}
      />
    )
  ) : (
    <em>Please add some products to your cart.</em>
  )

  const emptyCartMsg = (
    <div className="empty-cartmsg-container">
      <CartIcon height={76} width={95} fill="#BDBDBD" />
      <div className="empty-cartmsg-text" >Please add some products to your cart.</div>
    </div>
  )

  return (
    <div className="cart">
      <header className="cart-title" >Your cart</header>
      <div className="cart-divider" />
      { hasProducts
        ? (
          <div>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
              disabled={hasProducts ? '' : 'disabled'}>
              Checkout
            </button>
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
