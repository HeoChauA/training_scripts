"use strict";
//Bai 7.1
const Person = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};
Person.prototype.greet = function () {
    console.log(`Hello, ${this.name} here!`);
};
const person1 = new Person('Thien', 24);
person1.introduce();
person1.greet();
// Bai 7.2
const Car = function (branch) {
    this.branch = branch;
};
Car.prototype.drive = function () {
    console.log(`The ${this.branch} car is driving.`);
};
const car1 = new Car(`BMW`);
car1.drive();
console.log(car1.hasOwnProperty(`drive`));
// Bai 7.3
const Employee = function (name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
};
Employee.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name}, I am a ${this.position}, and I earn ${this.salary} per year`);
};
Employee.prototype.giveRaise = function (raiseSalary) {
    this.salary += raiseSalary;
};
const employee1 = new Employee(`A`, `Driver`, 1000);
const employee2 = new Employee(`B`, `Officer`, 5000);
employee1.introduce();
employee2.introduce();
employee2.giveRaise(6000);
employee2.introduce();
// Bai 7.4
const Animal = function (name) {
    this.name = name;
};
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};
const animal1 = new Animal(`Fog`);
animal1.speak();
const Dog = function (name, breed) {
    Animal.call(this, name); //Phuong thuc func.call() de goi ham constructor Animal, ke thua thuoc tinh cua Animal
    this.breed = breed;
};
Dog.prototype = Object.create(Animal.prototype); //Kế thừa Animal.prototype 
Dog.prototype.constructor = Dog; //Đặt lại thuộc tính constructor của Dog trỏ về Dog.
Dog.prototype.bark = function () {
    console.log(`${this.name} barks`);
};
const dog1 = new Dog(`Alex`, `Golden Retriever`);
dog1.bark();
// Bai 7.5
const Person2 = function (name, age) {
    this.name = name;
    this.age = age;
};
Person2.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};
const Employee2 = function (name, age, position, salary) {
    Person2.call(this, name, age);
    this.position = position;
    this.salary = salary;
};
Employee2.prototype = Object.create(Person2.prototype);
Employee2.prototype.constructor = Employee2;
Employee2.prototype.introduce = function () {
    console.log(`Hi, my name is ${this.name}, I am ${this.age} years old, I work as a ${this.position}, and I earn ${this.salary} per year.`);
};
const person3 = new Person2(`C`, 23);
person3.introduce();
const employee3 = new Employee2(`D`, 34, `Dentist`, 4000);
const employee4 = new Employee2(`E`, 15, `Student`, 0);
employee3.introduce();
employee4.introduce();
// Bai 7.6
const Shape = function (name) {
    this.name = name;
};
Shape.prototype.getArea = function () {
    return 0;
};
const Circle = function (name, radius) {
    Shape.call(this, name);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
    return Math.PI * this.radius * this.radius;
};
const Rectangle = function (name, width, height) {
    Shape.call(this, name);
    this.width = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
const circle1 = new Circle(`Tron`, 12);
const rectangle1 = new Rectangle(`Tam giac`, 12, 4);
console.log(circle1.getArea());
console.log(rectangle1.getArea());
// Bai 7.7
const Account = function (owner, balance) {
    this.owner = owner;
    this.balance = balance;
};
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Da gui ${amount} vao tai khoan cua ${this.owner}. So du hien tai la ${this.balance}`);
};
Account.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        console.log(`So du tai khoan khong du de rut tien`);
    }
    else {
        this.balance -= amount;
        console.log(`Da rut ${amount} khoi tai khoan cua ${this.owner}. So du hien tai la ${this.balance}`);
    }
};
const SavingsAccount = function (owner, balance, interestRate) {
    Account.call(this, owner, balance);
    this.interestRate = interestRate;
};
SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;
SavingsAccount.prototype.addInterest = function () {
    const interest = this.balance * this.interestRate / 100;
    this.balance += interest;
    console.log(`Da them ${interest} tien lai vao tai khoan cua ${this.owner}. So du hien tai la ${this.balance}`);
};
const CheckingAccount = function (owner, balance, overdraftLimit) {
    Account.call(this, owner, balance);
    this.overdraftLimit = overdraftLimit;
};
CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;
CheckingAccount.prototype.withdraw = function (amount) {
    if (amount > this.overdraftLimit + this.balance) {
        console.log(`So tien vuot qua gioi han duoc phep rut`);
    }
    else {
        this.balance -= amount;
        console.log(`Da rut ${amount} khoi tai khoan cua ${this.owner}. So du hien tai la ${this.balance}`);
    }
};
const savingsAccount = new SavingsAccount(`ABC`, 1500, 110);
savingsAccount.deposit(1000);
savingsAccount.withdraw(400);
savingsAccount.addInterest();
const checkingAccount = new CheckingAccount(`DEF`, 2400, 1000);
checkingAccount.withdraw(3200);
