import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

import chronograph from '../images/chronograph.png'
import quartz from '../images/quartz.png'
import weekender from '../images/weekender.png'

const imageURLs = {
  chronograph,
  quartz,
  weekender,
}

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className="product-item">
    <img
      src={imageURLs[product.title.toLowerCase()]}
      />
    <div className="product-details-container">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        style={{ marginBottom: '40px' }}
        className={product.inventory > 0 ? "primary-btn" : 'primary-btn-disabled'}
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
