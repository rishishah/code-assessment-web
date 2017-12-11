/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100
const PRODUCT_ENDPOINT = 'http://tech.work.co/shopping-cart/products.json'

const mapToProductModel = products =>
  products.map(product => {
    const { id, productTitle, price, inventory } = product
    return { id, title: productTitle, price: price.value, inventory }
  })

export default {
  getProducts: cb =>
    fetch(PRODUCT_ENDPOINT)
      .then(response => response.json())
      .then(data => cb(mapToProductModel(data))),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
