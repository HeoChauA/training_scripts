//Bai A1
let factorial:any = (a:number) => {
    if (a === 0) return 1;

    return a * factorial(a-1);
};

console.log(factorial(4));

//Bai A2
let sum:any = (a:number) => {
    if (a === 1) return 1;

    return a + sum(a - 1);
};

console.log(sum(20));

//Bai A3
let fibonacci:any = (a:number) => {
    if (a === 0 || a === 1) return a;

    return fibonacci(a-1) + fibonacci(a-2);
};

console.log(fibonacci(6));

//Bai A4
let reverseString:any = (a:string) => {
    if (!a.length || typeof a !== `string` ) return a;

    return reverseString(a.substring(1)) + a.charAt(0);
};

console.log(reverseString(`abcde`));

//Bai A5
let sumArray:any = (a:Array<number>) => {
    if (a.length === 0) return 0;

    return a.shift() + sumArray(a);
};

console.log(sumArray([1, 2, 3, 4]));

//Bai A6
let max:any = (a:Array<number>) => {
    if (a.length === 1) return a[0];

    return Math.max(a[0], max(a.slice(1)));
};

console.log(max([195, 782, 223, 44]));

//Bai A7
let palindrome:any = (a:string) => {
    if (a.length < 2) return true;

    if (a[0].toLowerCase() === a[a.length-1].toLowerCase()) return palindrome(a.slice(1, a.length-1));

    return false;
};

console.log(palindrome(`Adda`));

//Bai A8
let gcd:any = (a:number, b:number) => {
    if (b === 0) return a;

    return gcd(b, a%b);        //Su dung thuat toan Euclid
};

console.log(gcd(30,50));

//Bai A9
let power:any = (a:number, b:number) => {
    if (b === 0) return 1;

    return a * power(a, b-1);
};

console.log(power(4, 3));

//Bai A10
let count:any = (a:Array<any>) => {
    if (a.length === 0) return 0;

    return 1 + count(a.slice(1));
};

console.log(count([64, 487, 546, `hasdh`, 468, `iasod`]));

//Bai A11
let min:any = (a:Array<number>) => {
    if (a.length === 1) return a[0];

    return Math.min(a[0], min(a.slice(1)));
};

console.log(min([195, 782, 223, 44]));

//Bai A12
let prime:any = (a:number, b = 2) => {
    if (a === 2) return true;

    if (a < 2 || a % b === 0) return false;

    if (a * a > b) return true;
    
    return prime(a, b + 1);
};

console.log(prime(2));

//Bai A13
let countElement:any = (a:Array<any>, b:any) => {
    if (a.length === 0) return 0;

    if (a[0] === b) return 1 + countElement(a.slice(1), b);

    return countElement(a.slice(1), b);
};

 console.log(countElement([`a`, 2, `f`, 7, `a`, 7, 9, 7], 7));

 //Bai A14
 let palindromeArray:any = (a:Array<any>) => {
    if (a.length < 2) return true;

    if (a[0].toString().toLowerCase() === a[a.length-1].toString().toLowerCase()) return palindromeArray(a.slice(1, a.length-1));

    return false;
 };

 console.log(palindromeArray([5, 4, 9, 9, 6, 5]));

 //Bai B15
 let sumNum = (...a:number[]) => {
    let sum = 0;
    
    for (let num of a) {
        sum += num;
    };

    return sum;
 };

 console.log(sumNum(1, 5, 7, 9, 6));

 //Bai B16
let mergeArray = (...a:Array<any>) => (a.reduce((total, value) => ([...total, ...value])));

console.log(mergeArray([1, 2, 3], [4, 5, 6], [7, 8, 9]));

//Bai B17
let sumMax = (...a:number[]) => {
    return Math.max(...a);
 };

 console.log(sumMax(1, 5, 7, 14, 9, 6, 2));

//Bai B18
let copyAndAdd = (a:Array<any>, b:any) => {
    let copy = [...a, b];

    return copy;
};

let arr = [`a`, `b`, `c`];

console.log(copyAndAdd(arr, `d`));

//Bai B19
let mergeObject = (...a:object[]) => (a.reduce((total, value) => ({ ...total, ...value })));

let obj1 = {x:1, y:2,};
let obj2 = {z:3, a:4};

console.log(mergeObject(obj1, obj2));

//Bai B20
let mergeArrayNoDup = (...a:Array<any>) => ([...new Set(mergeArray(...a))]);

let arr1 = [1, 2, 3];
let arr2 = [2, 4, 6];
let arr3 = [3, 5, 6];

console.log(mergeArrayNoDup(arr1, arr2, arr3));

//Bai B21
let pushArray = (...a:any) => ([...a]);

console.log(pushArray(`a`, 45, `jdas`));
