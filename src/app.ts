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

    if (b < 0) return 1 / power(a, -b);

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

    if (a < b * b) return true;
    
    return prime(a, b + 1);
};

console.log(prime(9));

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

//Bai A15
let power2:any = (x:number, n:number) => {
    if (n === 0) return 1;

    if (n < 0) return 1 / power2(x, -n);

    return x * power2(x, n-1);
};

console.log(power2(4, -3));

//Bai A16
let convert10to2:any = (a:number) => {
    if (a >= 0 && a <= 1 ) return a;

    return `${convert10to2(Math.floor(a/2))}${a%2}`;
};

console.log(convert10to2(7));

//Bai A17
let combination:any = (n:number, k:number) => {
    if (k > n) return 0;

    if (k === 0 || k === n) return 1;

    return combination(n-1, k-1) + combination(n-1, k);

    // Chung minh nCk = (n-1)C(k-1) + (n-1)Ck 
    // https://www.toppr.com/ask/question/prove-that-n-1cr-n-1cr-1-ncr/
};

console.log(combination(8,4));

//Bai A18
let sumPrime:any = (n:number) => {
    if (n < 2) return 0;

    if (prime(n)) return n + sumPrime(n-1);   
    
    return sumPrime(n-1);
};

console.log(sumPrime(7));

//Bao A19
let permut:any = (a:string) => {
    if (a.length < 2) return [a];    //Dieu kien de thoat de quy

    let permutations = [];     //Array de chua cac hoan vi

    for (let i = 0; i < a.length; i++) {         //Lap qua tung ky tu cua string a 
        let char = a[i];         //Chon ky tu hien tai

        if (a.indexOf(char) != i) {
            continue;                   //Neu ky tu da duoc su dung thi bo qua no de khong bi trung lap
        }

        let remainingString = a.slice(0, i) + a.slice(i + 1, a.length);      //Chuoi con lai sau khi loai bo ky tu hien tai (char)

        for (let string of permut(remainingString)) {           //De quy de tim cac hoan vi voi chuoi con lai
            permutations.push(char + string);                   //Push ket hop char voi cac hoan vi cua remainingString vao array
        }
    }
    return permutations;        //Tra ve Array chua cac hoan vi 
};

console.log(permut(`AABC`));

//Bai A20
let sumDimensionArr:any = (a:Array<number>) => {

    let sum = 0;

    for (let i = 0; i < a.length; i++) {        //Lap qua tung phan tu cua mang
        if (Array.isArray(a[i])) {
            sum += sumDimensionArr(a[i]);          //Neu phan tu thu i la mot mang con thi de quy phan tu do de tinh tong roi cong vao sum
        }
        else {
            sum += a[i];                           //Con khong thi cong phan tu do vao sum
        }
    }

    return sum;
};

let dimensionArr = [[1, 2, 3], 4, [5, 6, 7]];

console.log(sumDimensionArr(dimensionArr));

//Bai A21
const data = {
    user: {
        name: 'John',
        address: {
            city: 'New York',
            zip: '10001'
        }
    },
    office: {
        address: {
            city: 'San Francisco',
            zip: '94101'
        }
    },
};

let printData:any = (a:any, b:any) => {
    for (let key in a) {
        if (key === b) {
            return a[key];
        }

        if (a[key] && typeof a[key] === `object`) {
            if (printData(a[key], b) !== undefined) {
                return printData(a[key], b);
            }
        }
    }

    return `Khong tim thay khoa`;
};

console.log(printData(data, 'zip'));

// Bai A22
const nestedObject = {
    a: 1,
    b: { 
        c: 2,
        d: {
            e: 3,
        },
    },
    f: {
        g: 4,
    },
};

let countKey:any = (a:any) => {
    let count = 0;
    for (let key in a) {
        if (a[key]) {
            count += 1;
        }

        if (a[key] && typeof a[key] === `object`) {
            count += countKey(a[key]);
        }
    }
    return count;
};

console.log(countKey(nestedObject));

//Bai A23
let printValue:any = (a:any, b:any) => {
    let info = [];
    for (let key in a) {
        if (key === b) {
            info.push(a[key]);
        }

        if (a[key] && typeof a[key] === `object`) {
            info = info.concat(printValue(a[key], b))
        }
    }

    return info;
};

console.log(printValue(data, 'city'));

//Bai C1
let hello = `Hello, World!`;

setTimeout(() => console.log(hello), 2000);

//Bai C2
let countDown = (a:number) => {
    for (let i = a; i > 0; i--) {
        setTimeout(() => console.log(i), (a-i)*1000);
    }

    setTimeout(() => console.log(`Happy New Year!`), a*1000);
};

countDown(5);

//Bai C3
let prints = () => {
    let timeoutID = setTimeout(() => console.log(`Chi hien thi trong 2 giay`), 5000);
    setTimeout(() => {
        clearTimeout(timeoutID);
        console.log(`Da xoa`);
    }, 2000);
};

prints();

//Bai C4
let blink = () => {
    let blinkDiv = document.getElementById("blink");

    if (!blinkDiv) {
        console.log(`Khong tim thay phan tu div co id blink`);
        return;
    }

    blinkDiv.style.display = (blinkDiv.style.display == `none` ? `block` : `none`);

    setTimeout(blink, 1000);
};

setTimeout(blink, 1000);

