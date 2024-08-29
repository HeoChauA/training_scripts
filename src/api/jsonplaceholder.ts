// posts.js
export async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json(); // Chuyển đổi dữ liệu thành JSON
    return posts;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Comments by postId
export async function fetchComments(postId: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Photo by AlbumId
export async function fetchAlbums() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const albums = await response.json();
    return albums;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export async function fetchPhotos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}