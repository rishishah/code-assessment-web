import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, quantity, title, onAdd, onRemove, onDecrease }) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
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
          <button onClick={onDecrease}>-</button>
          {quantity}
          <button onClick={onAdd}>+</button>
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
