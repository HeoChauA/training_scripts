"use strict";
// Phan C - Bai 1
let kiemtra = (x) => {
    let Du = x % 2;
    let Songuyen = Number.isInteger(x);
    let mess;
    if (typeof x === 'number') {
        if (Songuyen === false) {
            mess = 'Day khong phai so nguyen';
        }
        else {
            if (Du === 0) {
                mess = 'Day la so chan';
            }
            else {
                mess = 'Day la so le';
            }
        }
    }
    else {
        mess = 'Day khong phai so';
    }
    return mess;
};
console.log(kiemtra(14));
// Phan C - Bai 2
let Check = (y) => {
    let DaylaSo = typeof y === 'number';
    let Songuyen_2 = Number.isInteger(y);
    let Chialaydu = y % 2;
    const thongbao = !DaylaSo ? 'Day khong phai so' : !Songuyen_2 ? 'Day khong phai so nguyen' : Chialaydu === 0 ? 'Day la so chan' : 'Day la so le';
    return thongbao;
};
console.log(Check(5.8));
// Phan C - Bai 3
let Danhgia = (z) => {
    let mess_2;
    if (typeof z === 'number' && z <= 10 && z >= 0 && Number.isInteger(z) === true) {
        switch (z) {
            case 5:
            case 6:
                mess_2 = 'Trung binh';
                break;
            case 7:
            case 8:
                mess_2 = 'Kha';
                break;
            case 9:
            case 10:
                mess_2 = 'Gioi';
                break;
            default:
                mess_2 = 'Yeu';
        }
    }
    else {
        mess_2 = 'Khong phai so hoac sai so';
    }
    return mess_2;
};
console.log(Danhgia(9));
// Phan C - Bai 4
let Check_2 = (C4) => {
    let Du = C4 % 4;
    let Songuyen = Number.isInteger(C4);
    let mess;
    if (typeof C4 === 'number' && Songuyen === true) {
        if (Du === 0) {
            mess = 'Day la nam nhuan';
        }
        else {
            mess = 'Day khong phai nam nhuan';
        }
    }
    else {
        mess = 'Chua nhap nam';
    }
    return mess;
};
console.log(Check_2(1000));
// Phan C - Bai 5
let giaban = (gia, magiamgia) => {
    if (typeof gia === 'number') {
        if (magiamgia === 'DISCOUNT25') {
            gia *= 0.75;
        }
        return gia;
    }
    else {
        console.log('Chua nhap gia');
    }
};
console.log(giaban(100.188, 'DISCOUNT25'));
const Thongtin = {
    name: 'Dang Duc Hoan Thien',
    age: 23,
    address: 'Ha Noi',
};
let info = () => {
    const Ten = (Thongtin === null || Thongtin === void 0 ? void 0 : Thongtin.name) || 'Unknown';
    return Ten;
};
console.log(info());
// Phan C - Bai 7
let In = (name, age) => {
    let Ten = (name !== null && name !== void 0 ? name : Thongtin.name);
    let Tuoi = (age !== null && age !== void 0 ? age : Thongtin.age);
    let Inra = Ten + ' ' + Tuoi;
    return Inra;
};
console.log(In('da', 45));
// Phan C - Bai 8
let arr = [54, 'da', 15.54, 487, 'agg'];
let Trave = (n) => {
    var _a;
    const Check = (_a = arr[n]) !== null && _a !== void 0 ? _a : 'Unknown';
    return Check;
};
console.log(Trave(2));
// Phan D - Bai 1
let D1;
for (D1 = 1; D1 <= 10; D1++) {
    console.log(D1);
}
// Phan D - Bai 2
let D2 = (a) => {
    let sum = 0;
    for (let i = 1; i <= a; i++) {
        sum += i;
    }
    return sum;
};
console.log(D2(6));
// Phan D - Bai 3
let D3 = (b) => {
    for (let i = 1; i <= 10; i++) {
        let ketqua = b * i;
        let pheptinh = `${b} * ${i} = ${ketqua}`;
        if (pheptinh) {
            console.log(pheptinh);
        }
        else {
            return 'khong co ket qua';
        }
    }
};
D3(5);
// Phan D - Bai 4
let D4 = (c) => {
    let Giaithua = 1;
    for (let i = 1; i <= c; i++) {
        Giaithua *= i;
    }
    return Giaithua;
};
console.log(D4(5));
// Phan D - Bai 5
let Mang = [1, 2, 3, 4, 5];
Mang.forEach((a) => console.log('So ' + a));
// Phan D - Bai 6
let Tong = 0;
Mang.forEach((a) => Tong += a);
console.log(Tong);
// Phan D - Bai 7
let D7 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
D7.forEach((a) => {
    if (a < 2) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return console.log(a);
});
// Phan D - Bai 8
Mang.forEach((a, b) => Mang[b] = a * 2);
let D8 = [...Mang];
console.log(D8);
// Phan D - Bai 9 
let D9 = [1, -2, 3, -4, 5];
D9.forEach((a) => {
    if (a < 0) {
        return console.log('Co so am');
    }
});
// Phan D - Bai 10
let D10 = 1;
while (D10 <= 10) {
    console.log(D10);
    D10++;
}
// Phan D - Bai 11
let D11 = (n) => {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
};
console.log(D11(6));
// Phan D - Bai 12
let D12 = (n) => {
    let i = 1;
    while (i <= 10) {
        let ketqua = n * i;
        let pheptinh = `${n} * ${i} = ${ketqua}`;
        if (pheptinh) {
            console.log(pheptinh);
        }
        else {
            return 'khong co ket qua';
        }
        i++;
    }
};
D12(6);
// Phan D - Bai 13
let D13 = (n) => {
    let Giaithua = 1;
    let i = 1;
    while (i <= n) {
        Giaithua *= i;
        i++;
    }
    return Giaithua;
};
console.log(D13(7));
// Phan D - Bai 14
let D14 = 1;
do {
    console.log(D14);
    D14++;
} while (D14 <= 10);
// Phan D - Bai 15
let D15 = (n) => {
    let sum = 0;
    let i = 1;
    do {
        sum += i;
        i++;
    } while (i <= n);
    return sum;
};
console.log(D15(7));
// Phan D - Bai 16
let D16 = (n) => {
    let i = 1;
    do {
        let ketqua = n * i;
        let pheptinh = `${n} * ${i} = ${ketqua}`;
        if (pheptinh) {
            console.log(pheptinh);
        }
        else {
            return 'khong co ket qua';
        }
        i++;
    } while (i <= 10);
};
D16(9);
// Phan D - Bai 17
let D17 = (n) => {
    let Giaithua = 1;
    let i = 1;
    do {
        Giaithua *= i;
        i++;
    } while (i <= n);
    return Giaithua;
};
console.log(D17(10));
// Phan D - Bai 18;
let songuyento = (num) => {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
        i += 6;
    }
    return true;
};
let sum = (n) => {
    let sum = 0;
    let so = 1;
    do {
        if (songuyento(so)) {
            sum += so;
        }
        so++;
    } while (so <= n);
    return sum;
};
const n = Number(prompt("Nhập n"));
console.log(sum(n));
