const BASE_URL = 'https://fakestoreapi.com'

export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`)
  if (!response.ok) {
    throw new Error('Не удалось загрузить товары')
  }
  return response.json()
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`)
  if (!response.ok) {
    throw new Error('Не удалось загрузить товары')
  }
  return response.json()
}

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/products/categories`)
  if (!response.ok) {
    throw new Error('Не удалось загрузить товары')
  }
  return response.json()
}