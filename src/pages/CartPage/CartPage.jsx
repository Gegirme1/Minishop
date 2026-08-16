import { useCart } from '../../hooks/useCart'
import EmptyState from '../../components/EmptyState/EmptyState.jsx'
import './CartPage.css'

function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <EmptyState
        title="Корзина пуста"
        message="Добавьте товары из каталога, чтобы они появились здесь"
      />
    )
  }

  return (
    <div className="cart-page">
      <h1>Корзина</h1>

      <div className="cart-page__list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item__image" />
            <div className="cart-item__info">
              <p className="cart-item__title">{item.title}</p>
              <p className="cart-item__price">${item.price}</p>
            </div>
            <div className="cart-item__quantity">
              <button
                className="cart-item__qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                className="cart-item__qty-btn"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="cart-item__subtotal">${(item.price * item.quantity).toFixed(2)}</p>
            <button className="cart-item__remove" onClick={() => removeFromCart(item.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart-page__summary">
        <button className="btn btn-outline" onClick={clearCart}>
          Очистить корзину
        </button>
        <p className="cart-page__total">Итого: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CartPage