import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/api'
import Loader from '../../components/Loader/Loader.jsx'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx'
import './ProductPage.css'

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProduct() {
      setLoading(true)
      setError(null)
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProduct()
  }, [id])

  if (loading) return <Loader count={1} />
  if (error) return <ErrorMessage message={error} />
  if (!product) return null

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} className="product-page__image" />
      <div className="product-page__info">
        <span className="product-page__category">{product.category}</span>
        <h1 className="product-page__title">{product.title}</h1>
        <p className="product-page__rating">
          ⭐ {product.rating.rate} ({product.rating.count} отзывов)
        </p>
        <p className="product-page__price">${product.price}</p>
        <p className="product-page__description">{product.description}</p>
        <button className="btn btn-primary product-page__btn">В корзину</button>
      </div>
    </div>
  )
}

export default ProductPage