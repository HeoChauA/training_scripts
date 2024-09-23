export async function fetchProducts(limit = 12, skip = 0) {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function searchProducts(query:any) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function fetchProductsCategories() {
    try {
        const response = await fetch(`https://dummyjson.com/products/categories`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function fetchProductsByCategory(category:any) {
    try {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}