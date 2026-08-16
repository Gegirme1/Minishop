import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import './ProductCard.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={product.image} alt={product.title} className="product-card__image" />
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__rating">
          ⭐ {product.rating.rate} ({product.rating.count})
        </p>
        <p className="product-card__price">${product.price}</p>
        <button
          className="btn btn-primary product-card__btn"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addToCart(product)
          }}
        >
          В корзину
        </button>
      </div>
    </Link>
  )
}

export default ProductCard