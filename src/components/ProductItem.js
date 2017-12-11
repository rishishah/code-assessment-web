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
    {/* <div className="product-image-container" > */}
      <img
        className="product-image"
        src={imageURLs[product.title.toLowerCase()]}
        // style={{ backgroundImage: `url(${imageURLs[product.title.toLowerCase()]})` }}
        />
      {/* </div> */}
    <div className="product-details-container">
      <Product
        title={product.title}
        price={product.price}
        inventory={product.inventory} />
      <button
        className="primary-btn product-add-btn"
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
