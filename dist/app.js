"use strict";
//Bai 1 
const book = {
    title: 'Số đỏ',
    author: 'Vũ Trọng Phụng',
    year: 1936,
};
console.log(book);
//Bai 2
console.log(book.title);
console.log(book.author);
console.log(book.year);
book.year = 2023;
console.log(book.year);
//Bai 3
book.getSummary = function () {
    console.log(this.title + ' viết bởi ' + this.author + ' vào năm ' + this.year);
};
book.getSummary();
//Bai 4
let thongTin = function (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    return 1;
};
let book_2 = new thongTin('Don Quijote', 'Miguel de Cervantes', 1605);
console.log(book_2);
//Bai 5
thongTin.prototype.getSummary = function () {
    console.log(this.title + ' viết bởi ' + this.author + ' vào năm ' + this.year);
};
book_2.getSummary();
//Bai 6
let simpleEqual = (a, b) => {
    for (let key in a) {
        if (a[key] !== b[key])
            return false; //neu cac thuoc tinh cua a khong bang b thi ra false
    }
    for (let key in b) {
        if (b[key] !== a[key])
            return false; //neu cac thuoc tinh cua b khong bang a thi ra false
    }
    return true;
};
console.log(simpleEqual(book, book_2));
//Bai 7
const original = {
    a: 1,
    b: {
        c: 2
    },
};
let copy_1 = {};
for (let prop in original) {
    copy_1[prop] = original[prop];
}
;
let copy_2 = {};
Object.assign(copy_2, original);
let copy_3 = Object.assign({}, original);
let deepCopy = JSON.stringify(original);
let copy_4 = JSON.parse(deepCopy);
console.log(copy_1);
console.log(copy_2);
console.log(copy_3);
console.log(copy_4);
//Bai 8
let person = {
    name: 'Dang Duc Hoan Thien',
    age: 23,
    greet: function () {
        return 'Hello, my name is ' + this.name;
    },
};
console.log(person);
console.log(person.greet());
//Bai 9
const calculator = {
    num_1: 4,
    num_2: 17,
    add: function () {
        let add = this.num_1 + this.num_2;
        return 'ket qua phep cong   : ' + add;
    },
    subtract: function () {
        let subtract = this.num_1 - this.num_2;
        return 'ket qua phep tru: ' + subtract;
    },
    multiply: function () {
        let multiply = this.num_1 * this.num_2;
        return 'ket qua phep nhan: ' + multiply;
    },
    divide: function () {
        let divide;
        if (this.num_2 === 0) {
            return 'khong chia duoc';
        }
        else {
            divide = this.num_1 / this.num_2;
        }
        return 'ket qua phep chia: ' + divide;
    },
};
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());
//Bai 10
const rectangle = {
    width: 400,
    height: 150,
    area: function () {
        return 'dien tich cua hinh chu nhat la: ' + (this.width * this.height) + ' cm2';
    },
    perimeter: function () {
        return 'chu vi cua hinh chu nhat la: ' + ((this.width + this.height) * 2) + ' cm';
    },
};
console.log(rectangle.area());
console.log(rectangle.perimeter());
//Bai 11
const person_2 = {
    name: 'Nguyen Van A',
    birthYear: 2000,
    calculateAge: function () {
        let presentYear = new Date(); //tao bien voi gia tri la ham date() de lay thoi gian hien tai
        return 'tuoi hien tai cua ' + this.name + ' la ' + (presentYear.getFullYear() - this.birthYear);
    },
};
console.log(person_2.calculateAge());
//Bai 12
const counter = {
    count: 0,
    increment: function () {
        return this.count += 1;
    },
    decrement: function () {
        return this.count -= 1;
    },
    reset: function () {
        return this.count = 0;
    },
};
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
//Bai 13
let calculator_2 = function (a, b) {
    this.num_1 = a;
    this.num_2 = b;
    this.add = function () {
        let add = this.num_1 + this.num_2;
        return 'ket qua phep cong   : ' + add;
    };
    this.subtract = function () {
        let subtract = this.num_1 - this.num_2;
        return 'ket qua phep tru: ' + subtract;
    };
    this.multiply = function () {
        let multiply = this.num_1 * this.num_2;
        return 'ket qua phep nhan: ' + multiply;
    };
    this.divide = function () {
        let divide;
        if (this.num_2 === 0) {
            return 'khong chia duoc';
        }
        else {
            divide = this.num_1 / this.num_2;
        }
        return 'ket qua phep chia: ' + divide;
    };
};
const phetinh = new calculator_2(11, 57);
console.log(phetinh.add());
console.log(phetinh.subtract());
console.log(phetinh.multiply());
console.log(phetinh.divide());
//Bai 14
let rectangle_2 = function (a, b) {
    this.width = a;
    this.height = b;
    this.area = function () {
        return 'dien tich cua hinh chu nhat la: ' + (this.width * this.height) + ' cm2';
    };
    this.perimeter = function () {
        return 'chu vi cua hinh chu nhat la: ' + ((this.width + this.height) * 2) + ' cm';
    };
};
const hinhChuNhat = new rectangle_2(240, 74);
console.log(hinhChuNhat.area());
console.log(hinhChuNhat.perimeter());
//Bai 15
let person_3 = function (a, b) {
    this.name = a;
    this.birthYear = b;
    this.calculateAge = function () {
        let presentYear = new Date(); //tao bien voi gia tri la ham date() de lay thoi gian hien tai
        return 'tuoi hien tai cua ' + this.name + ' la ' + (presentYear.getFullYear() - this.birthYear);
    };
};
const info = new person_3('Vu The Anh', 1988);
console.log(info.calculateAge());
//Bai 16
let counter_2 = function (a) {
    this.count = a;
    this.increment = function () {
        return this.count += 1;
    };
    this.decrement = function () {
        return this.count -= 1;
    };
    this.reset = function () {
        return this.count = a;
    };
};
const dem = new counter_2(56);
console.log(dem.increment());
console.log(dem.increment());
console.log(dem.decrement());
console.log(dem.reset());
