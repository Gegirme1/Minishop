import './FiltersPanel.css'

function FiltersPanel({ categories, selectedCategory, onCategoryChange, sortBy, onSortChange, onReset }) {
  return (
    <div className="filters-panel">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="filters-panel__select"
      >
        <option value="">Все категории</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="filters-panel__select"
      >
        <option value="">Без сортировки</option>
        <option value="price-asc">Цена: по возрастанию</option>
        <option value="price-desc">Цена: по убыванию</option>
        <option value="rating">По рейтингу</option>
      </select>

      <button className="btn btn-outline" onClick={onReset}>
        Сбросить фильтры
      </button>
    </div>
  )
}

export default FiltersPanel