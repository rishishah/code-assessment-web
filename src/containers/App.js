import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div className="container">
    <div className="inner-container">
      <div className="title-container">
        <p className="title">Acme Store</p>
        <CartContainer />
      </div>
      <div className="title-divider" />
      <ProductsContainer />
    </div>
  </div>
)

export default App
