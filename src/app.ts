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
let ascending = numarr.sort((a,b) => a - b);

console.log(ascending);

//Bai 1.8
let descending = numarr.sort((a,b) => b - a);

console.log(descending);

//Bai 1.9
let counts:any = {};
numarr.map((value) => {
    counts[value] = counts[value] + 1 || 1;   //Neu da co gia tri thi value se + 1,con khong thi value se la 1
}); 

let mostFrequent = Object.keys(counts).reduce((a, b) => 
    (counts[a] > counts[b] ? a : b)); //Neu value cua key a > value cua key b thi tra ve key a, khong thi tra ve key b

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

let info = (key:any) => {
    return person.get(key);
};

console.log(info(`name`));
console.log(info(`age`));
console.log(info(`city`));

//Bai 2.2
let check = (key:any) => {
    return person.has(key);
};

console.log(check(`country`));

//Bai 2.3
let checkValue = (value:any) => {
    for (let [k, v] of person) {
        if (v === value) { 
          return true; 
        }
      }  
      return false;
};

console.log(checkValue(30));

//Bai 2.4
let delKey = (key:any) => {
    return person.delete(key);
}
delKey(`name`);
console.log(person);

//Bai 2.5
let delValue = (value:any) => {
    for (let [k, v] of person) {
        if (v === value) return person.delete(k)
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
let sumArr = 0 
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
const user = [['name', 'Alice'], ['age', 25], ['city', 'Los Angeles']];

const infomation = new Map();

user.forEach(([key, value]) => {
    infomation.set(key, value);
})

console.log(infomation);