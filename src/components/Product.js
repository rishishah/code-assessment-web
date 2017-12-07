import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, quantity, title, onAdd, onRemove, onDecrease }) => (
  <div className="product-details">
    <div className="product-details-title-wrapper">
      <div className="product-title">{title}</div>
      <div className="product-price">{`$${price}`}</div>
    </div>
    <div className="product-inventory">{inventory ? `${inventory} remaining` : null}</div>
    { onRemove 
      ? (
        <button onClick={onRemove}>Remove</button>
      )
      : null
    }
    {
      onDecrease
      ? (
        <span>
          <button className="minus-btn quantity-btn" onClick={onDecrease}>-</button>
          {quantity}
          <button className="plus-btn quantity-btn" onClick={onAdd}>+</button>
        </span>
      )
      : null
    }
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onDecrease: PropTypes.func
}

export default Product

// {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
