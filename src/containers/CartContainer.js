import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, addToCart, removeFromCart, decreaseQuantity } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'
import CartIcon from '../components/CartIcon'
import Modal from '../components/Modal'

class CartContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState({ showingModal: !this.state.showingModal})
  }

  render() {
    const { products, total, checkout, addToCart, removeFromCart, decreaseQuantity } = this.props
    const { showingModal } = this.state;
    const hasProducts = products.length > 0
    const checkoutClick = () => checkout(products)

    return (
      <div className="cart-btn-container">
        <span className="cart-btn" onClick={this.toggleModal}>
          <CartIcon height={14} width={17} />
          <span className="cart-btn-contents">
          {hasProducts ? `(${products.length})` : 'Your cart is empty'}
          </span>
        </span>
        <Modal show={showingModal} onClose={this.toggleModal} >
          <Cart
            products={products}
            total={total}
            onCheckoutClicked={checkoutClick}
            onAddToCartClicked={addToCart}
            onRemoveFromCartClicked={removeFromCart} 
            onDecreaseQuantClicked={decreaseQuantity} />
          { hasProducts
            && ( 
              <button
                className="primary-btn"
                id="checkout-btn-modal"
                onClick={checkoutClick}
                disabled={!hasProducts} >
                  Checkout
              </button> 
            )
          }
        </Modal>
      </div>
    )
  }
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  addToCart:PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { 
    checkout,
    addToCart,
    removeFromCart,
    decreaseQuantity
  }
)(CartContainer)
