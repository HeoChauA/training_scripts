import './styles.scss';

// DOM 

// Ex 1
const changeTextBtn = document.querySelector(`button.change-text-btn`);

if (changeTextBtn) {
    changeTextBtn.addEventListener(`click`, () => {
        let text = document.querySelector(`p.change-text`);

        if (text) {
            text.textContent = `The paragraph changed to new paragraph.`;
        }
    });
}

// Ex 2
const addItem = document.querySelector(`button.add-to-list`);
const removeItem = document.querySelector(`button.remove-to-list`);

if (addItem) {
    addItem.addEventListener(`click`, () => {
        let ul = document.querySelector(`ul.my-list`);

        if (ul) {
            let li = document.createElement(`li`)
            li.textContent = `New Item.`;
            ul.appendChild(li);
        }
    });
}

if (removeItem) {
    removeItem.addEventListener(`click`, () => {
        let ul = document.querySelector(`ul.my-list`);

        if (ul?.lastElementChild) {
            ul.removeChild(ul.lastElementChild)
        }
    });
}

// Ex 3
import {getRandomColor} from "./module";

const changeColorBtn = document.querySelector(`button.change-color`);

if (changeColorBtn) {
    changeColorBtn.addEventListener(`click`, () => {
        const newColor = getRandomColor();
        let changeColor = document.querySelector(`div.bg-color`);

        if (changeColor && changeColor instanceof HTMLElement) {
            changeColor.style.backgroundColor = newColor;
        }
    });
}

// Ex 4
const changeImgBtn = document.querySelector(`.change-img`);

if (changeImgBtn) {
    changeImgBtn.addEventListener(`click`, ()=> {
        let randomNumber = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        let changeImg = document.querySelector(`.my-image`);

        if (changeImg && changeImg instanceof HTMLImageElement) {
            changeImg.src = `https://picsum.photos/id/${randomNumber}/536/354`
        }
    });
}

// Ex 5
const countCharBox = document.querySelector(`.input-text-field`);

if (countCharBox) {
    countCharBox.addEventListener(`input`, (event) => {
        let charcount = document.querySelector(`p.char-count span`)

        if (charcount && event.target instanceof HTMLInputElement) {
            let count = event.target.value.length;
            charcount.textContent = `${count}`;
        }
    });
}

// Ex 6
const changeSizeText = document.querySelector(`.font-size-slider`);

if (changeSizeText) {
    changeSizeText.addEventListener(`input`, (event) => {
        let changeSize = document.querySelector(`.text-to-resize`);
        let sizeText = document.querySelector(`.font-size-value`);

        if (changeSize instanceof HTMLElement && sizeText && event.target instanceof HTMLInputElement) {
            let size = event.target.value;
            changeSize.style.fontSize = `${size}px`;
            sizeText.textContent = `${size}`;
        }
    });
}

// Ex 7
const clickCountBtn = document.querySelector(`.btn-click-count`);

if (clickCountBtn) {
    let count = 0;
    clickCountBtn.addEventListener(`click`, () => {
        count++;
        let countClick = document.querySelector(`.btn-click-count-val`);
        
        if (countClick) {
            countClick.textContent = `${count}`;
        }
    });
}

// Ex 8
import { sum, subtract } from "./math";

const sumBtn = document.querySelector(`div.calculator-sum .btn-equal`);

if (sumBtn) {
    sumBtn.addEventListener(`click`, () => {
        let num1 = document.querySelector(`div.calculator-sum .input-number-1`);
        let num2 = document.querySelector(`div.calculator-sum .input-number-2`);
        let result = document.querySelector(`div.calculator-sum .input-result`)
        
        if (num1 instanceof HTMLInputElement && num2 instanceof HTMLInputElement && result instanceof HTMLInputElement) {
            result.value = `${sum(Number(num1.value), Number(num2.value))}`
        }
    });
}

const subtractBtn = document.querySelector(`div.calculator-subtract .btn-equal`);

if (subtractBtn) {
    subtractBtn.addEventListener(`click`, () => {
        let num1 = document.querySelector(`div.calculator-subtract .input-number-1`);
        let num2 = document.querySelector(`div.calculator-subtract .input-number-2`);
        let result = document.querySelector(`div.calculator-subtract .input-result`)
        
        if (num1 instanceof HTMLInputElement && num2 instanceof HTMLInputElement && result instanceof HTMLInputElement) {
            result.value = `${subtract(Number(num1.value), Number(num2.value))}`
        }
    });
}

// Ex 9
import { users, findUserByName, addUser, removeUser } from "./user";

const userList = document.querySelector(`.user-list`);

const displayUsers = (user:Array<any>) => {
    if (userList) {
        userList.innerHTML = ``;                                    //Xóa danh sách đã tồn tại
        user.forEach(user => {
            const userCard = document.createElement(`div`);         //Tạo thẻ div
            userCard.classList.add(`user-card`);                    //Thêm class user-card cho thẻ div vừa tạo
            userCard.innerHTML =
                //Thêm nội dung vào thẻ div class user-card vơi template đã có
                `<span class="remove-user" data-name="${user.name}">X</span>
                <h3>User card</h3>
                <p>Name: <span class="user-name">${user.name}</span></p>
                <p>Age: <span class="user-age">${user.age}</span></p>
                <p>Location: <span class="user-location">${user.location}</span></p>
                <p>Email: <span class="user-email">${user.email}</span></p>`;
    
            userList.appendChild(userCard);                         //Thêm thẻ vào cuối danh sách của div.user-list
        });
    }
}
displayUsers(users);

const findUser = document.querySelector(`.find-user`);

if (findUser) {
    findUser.addEventListener(`input`, (event) => {                 //Đăng ký event input với đối tượng event là những già được nhập vào
        if (event.target instanceof HTMLInputElement) {
            let result = findUserByName(event.target.value);        //Gán biến result = kết quả của hàm findUserByName() với đối tượng là event.target.value
            displayUsers(result);                                   //Hiển thị người dùng trùng với tên tìm kiếm
        }
    });
}

const addUserBtn = document.querySelector(`.add-user`);

if (addUserBtn) {
    addUserBtn.addEventListener(`click`, () => {
        const inputName = document.querySelector('.user-name') as HTMLInputElement;
        const inputAge = document.querySelector('.user-age') as HTMLInputElement;
        const inputLocation = document.querySelector('.user-location') as HTMLInputElement;
        const inputEmail = document.querySelector('.user-email') as HTMLInputElement;

        if (inputName && inputAge && inputLocation && inputEmail) {
            //Tạo đối tượng với những dữ liệu được nhập
            const newUser = {
                name: inputName.value,
                age: parseInt(inputAge.value),
                location: inputLocation.value,
                email: inputEmail.value,
            };

            addUser(newUser);
            displayUsers(users);

            //Xóa những dữ liệu đã nhập tại ô nhập sau khi bấm nút Add User, tránh nhầm lẫn giữ các lần nhập
            inputName.value = '';
            inputAge.value = '';
            inputLocation.value = '';
            inputEmail.value = '';
        }
    });
}

if(userList) {
    userList.addEventListener(`click`, removeUser )
}

// DATA

// Ex 1
import { fetchPosts, fetchComments } from "./api/jsonplaceholder";

async function displayPosts() {
    //Lấy danh sách bài viết
    const posts = await fetchPosts();
    const postList = document.querySelector(`#post-list`);

    posts.forEach((post: { title: any; body: string; id: any; }) => {

        //Tạo list mới cho từng post
        const li = document.createElement(`li`);
        const title = document.createElement('h3');
        title.textContent = post.title;
        li.appendChild(title);

        //Tạo phần nội dung của từng post chứa body và comments
        const postContent = document.createElement(`div`);
        postContent.classList.add('post-content');

        //Tạo phần body của từng post
        const bodyText = document.createElement(`p`);   
        bodyText.textContent = post.body;       //Hiển thị nội dung bài viết
        postContent.appendChild(bodyText);

        //Tạo phần comments của từng post
        const commentsPost = document.createElement(`ul`);
        commentsPost.style.listStyleType = `square`;
        postContent.appendChild(commentsPost);

        
        title.addEventListener(`click`, async () => {
            
            //Hiển thị nội dung khi click vào từng bài viết
            postContent.classList.toggle('active');

            if (postContent.classList.contains('active')) {

                if (commentsPost.children.length === 0) {
                    //Lấy danh sách bình luận của bài viết hiện tại
                    const comments = await fetchComments(post.id);

                    //Hiển thị danh sách bình luận của bài viết hiện tại
                    comments.forEach((comment: { name: any; body: any; }) => {
                        const commentElement = document.createElement('li');
                        commentElement.textContent = `${comment.name}: ${comment.body}`;
                        commentsPost.appendChild(commentElement);
                    });
                }
            }
        });

            //Hiển thị post
        li.appendChild(postContent);
        postList?.appendChild(li);
    });
    
}

displayPosts();

// Ex 2

import { fetchAlbums, fetchPhotos } from "./api/jsonplaceholder";

async function displayAlbums() {
    const albums = await fetchAlbums();
    const albumList = document.querySelector(`#albums-container`);

    albums.forEach(async (album: { title: string | undefined; id: any; }) => {
        const albumElement = document.createElement(`div`);
        albumElement.classList.add(`album`);

        const albumTitle = document.createElement(`h3`);
        albumTitle.textContent = `Album: ${album.title}`;
        albumElement.appendChild(albumTitle);

        const firstPhoto = await fetchPhotos(album.id);
        

        if (firstPhoto.length > 0) {
            const firstPhotoLink = document.createElement('a');
            firstPhotoLink.href = firstPhoto[0].url;
            firstPhotoLink.dataset.lightbox = `album-${album.id}`;
            firstPhotoLink.dataset.title = album.title;
            firstPhotoLink.innerHTML = `<img src="${firstPhoto[0].thumbnailUrl}" alt="${firstPhoto[0].title}" />`;

            albumElement.appendChild(firstPhotoLink);

            firstPhotoLink.addEventListener('click', async (event) => {
                event.preventDefault();

                const albumPhotos = await fetchPhotos(album.id);
                
                albumPhotos.forEach((photo: { url: string; title: string | undefined; }) => {
                    const photoLink = document.createElement('a');
                    photoLink.href = photo.url;
                    photoLink.dataset.lightbox = `album-${album.id}`;
                    photoLink.dataset.title = photo.title;
                    albumElement.appendChild(photoLink);
                })
            })
        }

        albumList?.appendChild(albumElement);
    })
}

displayAlbums();