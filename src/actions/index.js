import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

const cartQuantityReducer = (productId, type, getState) => {
  const { cart } = getState()
  return {
    type,
    quantity: cart.quantityById[productId],
    productId
  }
} 

export const removeFromCart = productId => (dispatch, getState) => {
  const { REMOVE_FROM_CART } = types
  dispatch(cartQuantityReducer(productId, REMOVE_FROM_CART, getState))
}

export const decreaseQuantity = productId => (dispatch, getState) => {
  const { DECREASE_QUANTITY } = types
  dispatch(cartQuantityReducer(productId, DECREASE_QUANTITY, getState))
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
