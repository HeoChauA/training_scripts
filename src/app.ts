//Bai 5.1
let sum = (a:number, b:number) => {
    if (typeof a  !== `number` || typeof b  !== `number`) {
        return console.log(`Day khong phai so`);
    }
    return console.log(a+b);
};

sum(6,55);

//Bai 5.2
let isEven = (a:number) => {
    if (typeof a  === `number`) {
        if ((a % 2) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    return 'Day khong phai so';
};

console.log(isEven(572));

//Bai 5.3
let factorial = (a:number) => {
    let factorial = 1;
    if (typeof a === `number`) {
        if (Number.isInteger(a) === true) {
            if (a > 0) {
                for (let i = 1; i <= a; i++) {
                    factorial *= i;
                }
                return factorial;
            }
            else return `Day khong phai so duong`;
        }
        else {
            return `Day khong phai so nguyen`;
        }
    }

    return `Day khong phai so`;
};

console.log(factorial(7));

//Bai 5.4
let isPrime = (a:number) => {
    if (typeof a === `number`) {
        if (a < 2) return false;                           //0 va 1 khong phai so nguyen to
        for (let i = 2; i < a; i++) {                      //lap tu 2 toi a
            if (a % i === 0){
                return false;                              //neu ton tai a chia i ma khong co so du thi a khong phai so nguyen to
            }
        }
        return true;
    }

    return `Day khong phai so`;
};

console.log(isPrime(7));

//Bai 5.5
let fibonacci = (n:number) => {
    let fibonacci = 0;
    let a = 1;
    let b = 0;
    if (typeof n === `number`) {
        if (Number.isInteger(n) === true) {
            if (n <= 1) return n;                       //Vi tri so 0 va 1 cua day fibonanci la 0 va 1
            for (let i = 2; i <= n; i++) {              //Lap tu 2 den n
                fibonacci = a + b;                      //Ket qua = so sau + so truoc
                b = a;                                  //Trong moi lan lap thi so truoc = so sau cua lan lap truoc
                a = fibonacci;                          //Trong moi lan lap thi so sau = ket qua cua lan lap truoc
            }
            return fibonacci;
        }
        else {
            return `Day khong phai so nguyen`;
        }
    }
    return `Day khong phai so`;
};

console.log(fibonacci(8));

//Bai 5.6
let reverseString = (a:string) => {
    //split de tach cac ky tu cua string va tra ve mang chua cac substring
    //reverse de dao nguoc thu tu cac substring trong mang
    //join de tap hop cac substring trong mang thanh 1 string
    return a.split(``).reverse().join(``);
};

console.log(reverseString(`Hello`));

//Bai 5.7
let findMax = (a:Array<number>) => {
    return a.reduce((total, value) => Math.max(total,value));
};

console.log(findMax([45, 89, 165, 94, 73]));

//Bai 5.8
let isPalindrome = (a:string) => {
    if (typeof a === `string`) {
        let lowerCase = a.toLowerCase();                //chuyen string thanh string in thuong
        if (lowerCase === reverseString(lowerCase)) {   //so sanh string giua xuoi va nguoc 
            return true;
        }
        return false;
    }
    return 'Day khong phai chuoi'
};

console.log(isPalindrome(`abccba`));

//Bai 5.9
let sumOddNumbers = (a:Array<number>) => {
    let sum = 0;
    a.forEach((value) => {
        if (value % 2 !== 0) {sum += value}
    })
    return sum;
};

console.log(sumOddNumbers([1, 2, 3, 4, 5]));

//Bai 5.10
let countCharacter = (a:string, b:string) => {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            count++;
        }
    }
    return count
};

console.log(countCharacter(`abbaccabbca`,`b`));

//Bai 5.11
let findMin = (a:Array<number>) => {
    return a.reduce((total, value) => Math.min(total,value));
};

console.log(findMin([45, 89, 165, 94, 73]));

//Bai 5.12
let sortArray = (a:Array<number>) => {
    return a.sort((a, b) => a - b);
};

console.log(sortArray([45, 89, 165, 94, 73]));

//Bai 5.13
let sumDigits = (a:number) => {
    let sum = 0;
    let ones:number;

    if (a === 0) return sum;

    for (;a > 0;) {                 //Voi so duong
        ones = a % 10               //Lay chu so hang don vi cua so
        sum += ones                 //Cong chu so hang don vi vao tong
        a = Math.floor(a/10)        //Loai bo chu so da lay bang cach chia cho 10 roi lam tron xuong
    }

    for (;a < 0;) {                 //Voi so am
        ones = a % 10               //Lay chu so hang don vi cua so
        sum += ones                 //Cong chu so hang don vi vao tong
        a = Math.ceil(a/10)         //Loai bo chu so da lay bang cach chia cho 10 roi lam tron len
    }

    return sum;
};

console.log(sumDigits(1564));
console.log(sumDigits(-445));

//Bai 5.14
let sum2DArray = (a:Array<Array<number>>) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            sum += a[i][j];
        }
    }
    return sum;
};

console.log(sum2DArray([[1, 2, 3], [3, 4, 5], [5, 6, 7]]));