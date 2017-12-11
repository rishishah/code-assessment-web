import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, onRemove }) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
    { onRemove 
      ? (
        <button onClick={onRemove} >Remove</button>
      )
      : null
    }
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  onRemove: PropTypes.func,
}

export default Product
