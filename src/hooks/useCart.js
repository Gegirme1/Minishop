import { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart должен использоваться внутри CartProvider')
  }

  const { items, dispatch } = context

  function addToCart(product) {
    dispatch({ type: 'ADD_ITEM', product })
  }

  function removeFromCart(id) {
    dispatch({ type: 'REMOVE_ITEM', id })
  }

  function updateQuantity(id, quantity) {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity })
  }

  function clearCart() {
    dispatch({ type: 'CLEAR_CART' })
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return { items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }
}