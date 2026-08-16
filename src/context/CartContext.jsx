import { createContext, useReducer, useEffect } from 'react'

export const CartContext = createContext(null)

const STORAGE_KEY = 'minishop_cart'

function getInitialCart() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.product.id)
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...state, { ...action.product, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id)
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: Math.max(1, action.quantity) } : item
      )
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], getInitialCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const value = { items, dispatch }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}