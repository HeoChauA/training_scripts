export async function fetchProducts(limit = 12, skip = 0, sort = ``, order = ``) {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail&sortBy=${sort}&order=${order}`);
        
        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function searchProducts(query:any, limit = 12, skip = 0, sort = ``, order = ``) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}&select=title,price,thumbnail&sortBy=${sort}&order=${order}`);

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

export async function fetchProductsByCategory(category:any, limit = 12, skip = 0, sort = ``, order = ``) {
    try {

        let response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,thumbnail&sortBy=${sort}&order=${order}`);

        if (category) {
            response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}&select=title,price,thumbnail&sortBy=${sort}&order=${order}`)
        };

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
