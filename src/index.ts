import './styles.scss';
import { getRandomColor } from './module';

// TODO: Dom exercise
document.querySelector('.change-color')?.addEventListener('click', () => {
  (document.querySelector('.bg-color') as HTMLElement).style.backgroundColor = getRandomColor();
});

document.querySelector('.change-img')?.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
  const myImage = document.querySelector('.my-image') as HTMLImageElement;
  myImage.src = `https://picsum.photos/id/${randomNumber}/536/354`;
});

document.querySelector('.input-text-field')?.addEventListener('keyup', (event) => {
  document.querySelector('.char-count > span')!.textContent = (event.target as HTMLInputElement).value.length.toString();
});

document.querySelector('.font-size-slider')?.addEventListener('input', (event) => {
  const fontSize = (event.target as HTMLInputElement).value;
  document.querySelector('.font-size-value')!.textContent = fontSize;
  (document.querySelector('.text-to-resize') as HTMLElement).style.fontSize = `${fontSize}px`;
});

let countClick: number = 0;
document.querySelector('.btn-click-count')?.addEventListener('click', () => {
  countClick++;
  document.querySelector('.btn-click-count-val')!.textContent = countClick.toString();
});

// TODO: Data exercise from https://jsonplaceholder.typicode.com/
// Display posts from API
interface Post {
  id: number;
  title: string;
  body: string;
  comments: string[];
}

interface Comment {
  name: string;
  email: string;
  body: string;
}

async function displayPosts() {

  let { fetchPosts, fetchComments } = await import('./api/jsonplaceholder');

  const posts: Post[] = await fetchPosts();
  const postList = document.getElementById('post-list');
  
  // Loop through each post
  posts?.forEach((post: Post) => {
    // Display li wrap the title of post
    const listItem = document.createElement('li');
    const title = document.createElement('h3');
    title.textContent = post.title;
    listItem.appendChild(title);

    // Create elememnt to display the body and comments of post
    const postContent = document.createElement('div');
    postContent.classList.add('post-content');

    // Add body to postContent
    const bodyText = document.createElement('p');
    bodyText.textContent = post.body;
    postContent.appendChild(bodyText);

    // Add comments to postContent
    const commentList = document.createElement('ul');
    postContent.appendChild(commentList);

    // Display the body and comment when click to title
    title.addEventListener('click', async () => {
      postContent.classList.toggle('active'); // Display the body

      if (postContent.classList.contains('active')) {
        // Get comments of post
        if (commentList.children.length === 0) {
          const comments: Comment[] = await fetchComments(post.id);
          comments.forEach((comment: Comment) => {
            const commentItem = document.createElement('li');
            commentItem.innerHTML = `${comment.name} - ${comment.email}<br> ${comment.body}`;
            commentList.appendChild(commentItem);
          });
        }
      }
    });

    // Display posts to page
    listItem.appendChild(postContent);
    postList?.appendChild(listItem);
  });
}

// Display Photos from API
interface Album {
  id: number;
  title: string;
  photos: Photo[];
}

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function fetchPhotosAndAlbums() {
  
  let { fetchAlbums, fetchPhotos } = await import('./api/jsonplaceholder');

  try {
    // Fetch albums and photos
    const [albums, photos]: [Album[], Photo[]] = await Promise.all([fetchAlbums(), fetchPhotos()]);

    // Wrap the photos by albums
    const albumsWithPhotos: Album[] = albums.map(album => {
      return {
        ...album,
        photos: photos.filter(photo => photo.albumId === album.id)
      };
    });

    // Display album list with photos
    displayAlbumsWithPhotos(albumsWithPhotos);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayAlbumsWithPhotos(albumsWithPhotos: Album[]) {
  const albumsContainer = document.getElementById('albums-container');

  albumsWithPhotos.forEach(album => {
    const albumDiv = document.createElement('div');
    albumDiv.classList.add('album');
    
    const albumTitle = document.createElement('h3');
    albumTitle.textContent = `Album: ${album.title}`;
    albumDiv.appendChild(albumTitle);

    // Display first photo of album
    if (album.photos.length > 0) {
      const firstPhoto = album.photos[0];
      const firstPhotoLink = document.createElement('a');
      firstPhotoLink.href = firstPhoto.url;
      firstPhotoLink.dataset.lightbox = `album-${album.id}`;
      firstPhotoLink.dataset.title = album.title;

      const firstPhotoImage = document.createElement('img');
      firstPhotoImage.src = firstPhoto.thumbnailUrl;
      firstPhotoImage.alt = album.title;

      firstPhotoLink.appendChild(firstPhotoImage);
      albumDiv.appendChild(firstPhotoLink);

      // Display all the photos in Lightbox2
      album.photos.forEach(photo => {
        const photoLink = document.createElement('a');
        photoLink.href = photo.url;
        photoLink.dataset.lightbox = `album-${album.id}`;
        photoLink.dataset.title = photo.title;
        albumDiv.appendChild(photoLink);
      });
    }

    albumsContainer?.appendChild(albumDiv);
  });
}

// Call the function to display photos and albums when DOM loaded
document.addEventListener('DOMContentLoaded', displayPosts);
document.addEventListener('DOMContentLoaded', fetchPhotosAndAlbums);

// TODO: Data exercise from https://dummyjson.com/
// Products list
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

let currentSkip = 0;
let limit = 12;

async function loadAndDisplayProducts() {
  let { fetchProducts } = await import('./api/dummyjson');

  const products = await fetchProducts(limit, currentSkip);
  console.log(products, products.skip + products.limit);

  if (products.limit === 0) {
    console.log('No more products');
    return;
  }
  else {
    displayProducts(products.products);
    limit = products.limit;
    currentSkip += limit;
  }
}

async function displayProducts(products: Product[]) {
  const productsContainer = document.getElementById('products-list');
  if (productsContainer) {
    productsContainer.innerHTML = '';
  }

  products?.forEach((product: Product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productThumbnail = document.createElement('img');
    productThumbnail.src = product.thumbnail;
    productThumbnail.alt = product.title;

    const productTitle = document.createElement('h2');
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;

    productDiv.appendChild(productThumbnail);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);

    productsContainer?.appendChild(productDiv);
  });
}

// Call the function to display when DOM loaded
document.querySelector('.products-loadmore')?.addEventListener('click', loadAndDisplayProducts);
document.addEventListener('DOMContentLoaded', loadAndDisplayProducts);

// Seach products
document.getElementById('search-form')?.addEventListener('submit', async function(event) {
  event.preventDefault();
  
  let { searchProducts } = await import('./api/dummyjson');
  const query = (document.getElementById('search-input') as HTMLInputElement).value;
  
  console.log('Search query:', query);
  
  if (query) {
    const products = await searchProducts(query);
    
    if (products.limit === 0) {
      console.log('No more products');
      return;
    }
    else {
      displayProducts(products.products);
      document.querySelector('.products-loadmore')!.classList.add('hidden');
    }
  } else {
    return false;
  }
});

// Categories list
interface Category {
  slug: number;
  name: string;
  url: string;
}

async function displayCategories() {
  let { fetchProductsCategories } = await import('./api/dummyjson');
  const categories: Category[] = await fetchProductsCategories();

  const categoriesContainer = document.getElementById('categories-list');
  categories?.forEach((category: Category) => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('category');

    const categoryTitle = document.createElement('span');
    categoryTitle.setAttribute('data-slug', category.slug.toString());
    categoryTitle.textContent = category.name;

    categoryItem.appendChild(categoryTitle);
    categoriesContainer?.appendChild(categoryItem);
  });

  // Products by category
  document.querySelectorAll('.category span').forEach(category => {
    category.addEventListener('click', async function(event) {
      event.preventDefault();
      let { fetchProductsByCategory } = await import('./api/dummyjson');
      const categorySlug = (event.target as HTMLElement).dataset.slug;
      const products = await fetchProductsByCategory(categorySlug!);

      console.log('Category:', categorySlug, products);

      if (products.limit === 0) {
        console.log('No more products');
        return;
      }
      else {
        displayProducts(products.products);
        document.querySelector('.products-loadmore')!.classList.add('hidden');
      }
      
      // Remove active class from all categories
      document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));

      // Add active class to the clicked category
      (event.target as HTMLElement)?.parentElement?.classList.add('active');
    });
  });
}

// Call the function to display when DOM loaded
document.addEventListener('DOMContentLoaded', displayCategories);