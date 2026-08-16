import { useState, useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import { useDebounce } from '../../hooks/useDebounce'
import { getCategories } from '../../services/api'
import { sortProducts } from '../../utils/sortProducts'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import Loader from '../../components/Loader/Loader.jsx'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx'
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel.jsx'

function HomePage({ searchQuery }) {
  const { products, loading, error } = useProducts()
  const debouncedQuery = useDebounce(searchQuery, 400)

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    getCategories().then(setCategories).catch(() => {})
  }, [])

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />

  let result = products.filter((product) =>
    product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  )

  if (selectedCategory) {
    result = result.filter((product) => product.category === selectedCategory)
  }

  result = sortProducts(result, sortBy)

  function handleReset() {
    setSelectedCategory('')
    setSortBy('')
  }

  return (
    <div>
      <h1>Каталог товаров</h1>
      <FiltersPanel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onReset={handleReset}
      />
      <ProductGrid products={result} />
    </div>
  )
}

export default HomePage