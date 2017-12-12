import React from 'react'
import PropTypes from 'prop-types'

import chronograph from '../images/chronograph.png'
import quartz from '../images/quartz.png'
import weekender from '../images/weekender.png'

const imageURLs = {
  chronograph,
  quartz,
  weekender,
}

const CartItem = ({ product, onRemove, onAdd, onDecrease }) => (
  <div className="cart-item">
    <div className="cart-item-details-container" >
      <img
        className="cart-item-image"
        src={imageURLs[product.title.toLowerCase()]}
        />
      <div className="cart-item-description">
        <div className="cart-item-title-wrapper">
          <div className="cart-item-title">{product.title}</div>
          <div className="cart-item-price">{`$${product.price}`}</div>
        </div>
        <a className="cart-item-remove-btn" onClick={onRemove}>Remove</a>
      </div>
    </div>
    <div className="cart-item-quantity-container">
        <div className="quantity-display">
          <button className="minus-btn quantity-btn" onClick={onDecrease}>
            <svg width="16px" height="2px" viewBox="0 0 16 2" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="v2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
                    <g transform="translate(-57.000000, -239.000000)" stroke="#8E939C" strokeWidth="2" id="minus-icon">
                        <path d="M58,240 L72,240"></path>
                    </g>
                </g>
            </svg>
          </button>
          <div className="quantity-display-text">{product.quantity}</div>
          <button className="plus-btn quantity-btn" onClick={onAdd}>
            <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
                  <g transform="translate(-247.000000, -233.000000)" stroke="#8E939C" strokeWidth="2" id="plus-icon">
                      <path d="M248.333333,240.5 L261.683323,240.5"></path>
                      <path d="M255,234 L255,247"></path>
                  </g>
              </g>
            </svg>
          </button>
        </div>
    </div>
  </div>
)

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
}

export default CartItem
