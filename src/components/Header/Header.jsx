import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import CartIcon from '../CartIcon/CartIcon.jsx'
import './Header.css'

function Header({ searchQuery, onSearchChange }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          Mini<span>Shop</span>
        </Link>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <CartIcon />
      </div>
    </header>
  )
}

export default Header