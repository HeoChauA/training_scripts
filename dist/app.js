"use strict";
//Bai 1.1
const numarr = [1, 3, 5, 3, -1, 8, 7, 9, 6, -3, 2, 4, 1, 9, 3];
let max = Math.max(...numarr);
console.log(max);
//Bai 1.2
let sum = numarr.reduce((total, value) => total + value);
console.log(sum);
//Bai 1.3
let reverse = numarr.reverse();
console.log(reverse);
//Bai 1.4
let evenNumber = numarr.filter((value) => value % 2 === 0);
console.log(evenNumber);
//Bai 1.5
let oddNumber = numarr.filter((value) => value % 2 === 1 || value % 2 === -1);
console.log(oddNumber);
//Bai 1.6
let duplicate = numarr.filter((value, index) => numarr.indexOf(value) != index);
//fillter tra ve mang moi voi nhung gia tri thoa man dieu kien
//indexOf tra ve gia tri la vi tri cua value xuat hien dau tien
//dieu kien la vi tri cua value hien tai khac voi vi tri cua value xuat hien dau tien
console.log(duplicate);
//Bai 1.7
let ascending = numarr.sort((a, b) => a - b);
console.log(ascending);
//Bai 1.8
let descending = numarr.sort((a, b) => b - a);
console.log(descending);
//Bai 1.9
let counts = {};
numarr.map((value) => {
    counts[value] = counts[value] + 1 || 1; //Neu da co gia tri thi value se + 1,con khong thi value se la 1
});
let mostFrequent = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b)); //Neu value cua key a > value cua key b thi tra ve key a, khong thi tra ve key b
console.log(counts);
//Bai 1.10
let double = numarr.map((value) => value * 2);
console.log(double);
//Bai 1.11
let sumOdd = oddNumber.reduce((total, value) => total + value);
console.log(sumOdd);
//Bai 1.12
let sumEven = evenNumber.reduce((total, value) => total + value);
console.log(sumEven);
//Bai 1.13
let biggerThan7 = numarr.find((value) => value > 7);
console.log(biggerThan7);
//Bai 1.14
let test = numarr.some((value) => value < 0);
console.log(test);
//Bai 2.1
const person = new Map();
person.set('name', 'John').set('age', 30).set('city', 'New York');
console.log(person);
let info = (key) => {
    return person.get(key);
};
console.log(info(`name`));
console.log(info(`age`));
console.log(info(`city`));
//Bai 2.2
let check = (key) => {
    return person.has(key);
};
console.log(check(`country`));
//Bai 2.3
let checkValue = (value) => {
    for (let [k, v] of person) {
        if (v === value) {
            return true;
        }
    }
    return false;
};
console.log(checkValue(30));
//Bai 2.4
let delKey = (key) => {
    return person.delete(key);
};
delKey(`name`);
console.log(person);
//Bai 2.5
let delValue = (value) => {
    for (let [k, v] of person) {
        if (v === value)
            return person.delete(k);
    }
};
delValue(30);
console.log(person);
//Bai 2.6
let mapSize = () => {
    return person.size;
};
console.log(mapSize());
//Bai 3.1
let printToScreen = numarr.forEach((value) => console.log(value));
printToScreen;
//Bai 3.2
let sumArr = 0;
numarr.forEach((value) => sumArr += value);
console.log(sumArr);
//Bai 3.3
let multiDouble = numarr.forEach((value) => console.log(value * 2));
//Bai 3.4
let strarr = ['Trung', 'Hieu', 'Hai', 'Hau', 'Giang'];
let printToScreen2 = strarr.forEach((value, index) => console.log(`voi chi so la ${index} thi phan tu cua mang la ${value}`));
//Bai 3.5
let lenghtOfValue = strarr.forEach((value, index) => console.log(`phan tu ${value} co do dai la ${strarr[index].length}`));
//Bai 3.6
const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 }
];
let printToScreen3 = people.forEach((value) => console.log(`${value.name} co so tuoi la ${value.age}`));
//Bai 3.7
const user1 = [['name', 'Alice'], ['age', 25], ['city', 'Los Angeles']];
const infomation = new Map();
user1.forEach(([key, value]) => {
    infomation.set(key, value);
});
console.log(infomation);
//Bai 4.1
const complexUser = {
    id: 101,
    info: {
        firstName: 'Alice',
        address: {
            city: 'Wonderland',
            zip: '12345',
            coordinates: {
                lat: 52.52,
                long: 13.405
            }
        },
        contacts: [
            { type: 'email', value: 'alice@example.com' },
            { type: 'phone', value: '123-456-7890' }
        ]
    },
    preferences: {
        theme: 'dark',
        language: 'English'
    }
};
let { id, info: { firstName, address: { city, zip, coordinates: { lat, long } }, contacts: [email, phone] }, preferences: { theme = `light`, language } } = complexUser;
console.log(id, firstName, city, zip, lat, long, email, phone, theme, language);
//Bai 4.2
const complexArray = [1, [2, 3, [4, 5]], 6, [7, [8, 9]]];
let [a, [, b, [, c]], d, [, [e, f]]] = complexArray;
console.log(a, b, c, d, e, f);
//Bai 4.3
let getUserData = function (a, b, c, d) {
    return {
        username: a,
        email: b,
        settings: {
            theme: c,
            notifications: d,
        },
    };
};
const user_2 = getUserData('hahah', 'mail', 'sadas', 'dasdas');
let { username: user, email: mail, settings: { theme: userTheme, notifications: userNotifications } = {} } = user_2;
console.log(user, mail, userTheme, userNotifications);
//Bai 4.4
let arr = [
    { id: 111, name: 'snacks', price: 1000 },
    { id: 222, name: 'cola', price: 2000 },
    { id: 333, name: 'cookies', price: 1500 },
];
let displayProducts = () => {
    arr.forEach(({ id, name, price }) => {
        console.log(`Product ${id}: ${name} costs ${price}`);
    });
};
displayProducts();
//Bai 4.5
function fetchData(status = 'success') {
    return {
        data: {
            user: { name: 'Alice', email: 'alice@example.com' },
            posts: [{ id: 1, title: 'Hello World' }, { id: 2, title: 'Learning JavaScript' }]
        },
        status: status,
    };
}
;
const result = fetchData();
let userName, userEmail, firstPostTitle, fecthStatus;
if (result.status === 'success') {
    userName = result.data.user.name;
    userEmail = result.data.user.email;
    firstPostTitle = result.data.posts.length > 1 ? result.data.posts[0].title : 'No Title';
    fecthStatus = result.status;
}
console.log(userName, userEmail, firstPostTitle, fecthStatus);
//Bai 5.1
let convertToJSON = (a) => {
    return JSON.stringify(a);
};
let jsonString = convertToJSON(complexUser);
console.log(jsonString);
let parseFromJSON = (a) => {
    return JSON.parse(a);
};
console.log(parseFromJSON(jsonString));
//Bai 5.2
const productsJSON = `[
    { "id": 1, "name": "Laptop", "price": 1500 },
    { "id": 2, "name": "Mouse", "price": 20 },
    { "id": 3, "name": "Keyboard", "price": 50 },
    { "id": 4, "name": "Monitor", "price": 200 }
]`;
let parse = JSON.parse(productsJSON);
let sort = new Array();
parse.forEach((value) => {
    delete value.id;
    if (value.price > 100)
        return sort.push(value);
});
console.log(sort);
//Bai 5.3
const userJSON = '{"id": 1, "name": "Alice"}';
const addressJSON = '{"city": "Wonderland", "zip": "12345"}';
const preferencesJSON = '{"theme": "dark", "language": "English"}';
const userParse = JSON.parse(userJSON);
const addressParse = JSON.parse(addressJSON);
const preferencesParse = JSON.parse(preferencesJSON);
const merge = Object.assign({}, userParse, addressParse, preferencesParse);
console.log(merge);
//Bai 5.4
const settings = { theme: 'dark', language: 'English' };
let storeData = (a, b) => {
    return localStorage.setItem(b, JSON.stringify(a));
};
storeData(settings, 'setting');
let retrieveData = (a) => {
    return JSON.parse(localStorage.getItem(a) || '{}');
};
console.log(retrieveData('setting'));
//Bai 5.5
function fetchUserData() {
    // Giả lập một API trả về JSON
    return '{"id": 101, "name": "Alice", "email": "alice@example.com", "age": 25}';
}
fetchUserData();
let parseObj = JSON.parse(fetchUserData());
let { id: id2, name: name2, email: email2, } = parseObj;
console.log(`${name2} co so id la ${id2} voi dia chi email ${email2}`);
//Bai 6.1
const numbers = [1, 2, 3, 4, 5];
let sumNum = numbers.reduce((total, value) => total + value);
console.log(sumNum);
//Bai 6.2
let multiNum = numbers.reduce((total, value) => total * value);
console.log(multiNum);
//Bai 6.3
let squaredNumbers = [];
let square = numbers.reduce((total, value) => squaredNumbers.push(value * value), 0);
console.log(squaredNumbers);
//Bai 6.4
const orders = [
    { product: 'Laptop', price: 1000 },
    { product: 'Phone', price: 500 },
    { product: 'Tablet', price: 300 }
];
let sumPrice = orders.reduce((total, value) => total + value.price, 0);
console.log(sumPrice);
//Bai 6.5
let count = numbers.length;
let mean = sumNum / count;
let stats = {};
stats.sum = sumNum;
stats.count = count;
stats.mean = mean;
console.log(stats);
//Bai 6.6
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
let wordCount = words.reduce((total, value) => {
    total[value] = total[value] + 1 || 1;
    return total;
}, {});
console.log(wordCount);
//Bai 6.7
const people_2 = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Jane', age: 25 }
];
let groupedByAge = people_2.reduce((total, value) => {
    return Object.assign(Object.assign({}, total), { [value.age]: [value] });
}, {});
console.log(groupedByAge);
