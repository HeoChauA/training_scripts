// Products
export async function fetchProducts($limit: number = 10, $skip: number = 0) {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${$limit}&skip=${$skip}&select=title,price,thumbnail`);
    const products = await response.json();
    return products;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function searchProducts($query: string) {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${$query}`);
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
    console.log(categories);
    return categories;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function fetchProductsByCategory($category: string) {
  try {
    let response = await fetch(`https://dummyjson.com/products/`);
    if ($category) {
      response = await fetch(`https://dummyjson.com/products/category/${$category}`);
    }
    const products = await response.json();
    return products;
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
}