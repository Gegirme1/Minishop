import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import './CartIcon.css'

function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link to="/cart" className="cart-icon">
      🛒
      {totalItems > 0 && <span className="cart-icon__badge">{totalItems}</span>}
    </Link>
  )
}

export default CartIcon