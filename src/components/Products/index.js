// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = () => {
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="product-img"
        />
      </div>
    </>
  )
}

export default Products
