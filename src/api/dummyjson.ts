// Products
export async function fetchProducts($limit: number = 10, $skip: number = 0, $sortBy: string = '', $order: string = '') {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${$limit}&skip=${$skip}&sortBy=${$sortBy}&order=${$order}&select=title,price,thumbnail`);
    const products = await response.json();
    return products;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function searchProducts($query: string, $limit: number = 10, $skip: number = 0, $sortBy: string = '', $order: string = '') {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${$query}&limit=${$limit}&skip=${$skip}&sortBy=${$sortBy}&order=${$order}&select=title,price,thumbnail`);
    const products = await response.json();
    return products;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function fetchProductsCategories() {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');
    const categories = await response.json();
    // console.log(categories);
    return categories;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function fetchProductsByCategory($category: string, $limit: number = 10, $skip: number = 0, $sortBy: string = '', $order: string = '') {
  try {
    let response = await fetch(`https://dummyjson.com/products`);
    if ($category) {
      response = await fetch(`https://dummyjson.com/products/category/${$category}?limit=${$limit}&skip=${$skip}&sortBy=${$sortBy}&order=${$order}&select=title,price,thumbnail`);
    }
    const products = await response.json();
    return products;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}