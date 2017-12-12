import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title }) => (
  <div className="product-details">
    <div className="product-details-title-wrapper">
      <div className="product-title">{title}</div>
      <div className="product-price">{`$${price}`}</div>
    </div>
    <div className="product-inventory">{inventory ? `${inventory} remaining` : null}</div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
}

export default Product
