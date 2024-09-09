// Ex 1

export async function fetchPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function fetchComments(postId: any) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}

// Ex 2

export async function fetchAlbums() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}

export async function fetchPhotos(albumId: any) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

        if (!response.ok) throw new Error(`Response status: ${response.status}`);

        return await response.json();
    }
    catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}