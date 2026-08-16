import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import CartPage from './pages/CartPage/CartPage.jsx'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="container" style={{ flex: 1, paddingTop: 32, paddingBottom: 48 }}>
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App