import './Loader.css'

function Loader({ count = 8 }) {
  return (
    <div className="product-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton-card">
          <div className="skeleton-card__image" />
          <div className="skeleton-card__line skeleton-card__line--title" />
          <div className="skeleton-card__line skeleton-card__line--short" />
          <div className="skeleton-card__line skeleton-card__line--price" />
        </div>
      ))}
    </div>
  )
}

export default Loader