"use strict";
//Bai 1//
let x = "Day la chuoi";
let y = 10;
let z = true;
console.log(x);
console.log(y);
console.log(z);
//Bai 2//
let YourName = prompt("Hay nhap ten", "Nguyen Van A");
let Hello;
if (YourName == null || YourName == "") {
    Hello = "Chua nhap ten";
}
else {
    Hello = "Xin chao" + YourName;
}
console.log(Hello);
//Bai 3//
let dai, rong;
dai = prompt('Hay nhap chieu dai');
rong = prompt('Hay nhap chieu rong');
let S = Number(dai) * Number(rong);
console.log(S);
//Bai 4//
let doC = prompt('Hay nhap do C');
let doF;
if (doC === null || doC === "") {
    doF = 'Chua nhap do C';
}
else {
    doF = Number(doC) * 9 / 5 + 32;
}
console.log(doF);
//Bai 5//
let Ten, Tuoi;
Ten = prompt('Hay nhap ten');
Tuoi = prompt('Hay nhap tuoi');
let Thongtin;
if (Ten === null || Ten === '') {
    Thongtin = 'Chua nhap ten';
}
else if (Tuoi === null || Tuoi === '') {
    Thongtin = 'Chua nhap tuoi';
}
else {
    Thongtin = 'Xin chao ' + Ten + ", tuoi cua ban la " + Number(Tuoi);
}
console.log(Thongtin);
//Bai 6//
let YourAge = prompt('Hay nhap tuoi cua ban');
let TestAge = 16;
let Info = Number(YourAge) >= TestAge;
console.log('Ban du tuoi lai xe la: ' + Info);
//Bai 7//
let Kiemtra = (So) => {
    let Du = So % 2;
    let Thongbao;
    if (typeof So === 'number') {
        if (Du == 0) {
            Thongbao = 'Day la so chan';
        }
        else {
            Thongbao = 'Day la so le';
        }
    }
    else {
        Thongbao = 'Day khong phai la so';
    }
    return Thongbao;
};
console.log(Kiemtra(15));
//Bai 8//
let Xet = (l) => {
    let Loinhan;
    if (typeof l === 'number') {
        if (l > 0) {
            Loinhan = 'Day la so duong';
        }
        else if (l < 0) {
            Loinhan = 'Day la so am';
        }
        else {
            Loinhan = 'Day la so 0';
        }
    }
    else {
        Loinhan = 'Day khong phai la so';
    }
    return Loinhan;
};
console.log(Xet(0));
//Bai 9//
let day = [81, 39, 7, 100, 14];
day.sort((a, b) => a - b);
console.log(day);
let daynguoc = day.reverse();
console.log(daynguoc);
//Bai 10//
let MangTen = ['Thanh', 'Huong', 'An', 'Long'];
MangTen.sort();
console.log(MangTen);
//Bai 11//
let Dayso = [51, 185, 30, 92];
let sum = Dayso.reduce((total, value) => total + value);
console.log(sum);
//Bai 12//
let daySo = [51, 189, 30, 92];
let max = daySo.reduce((total, value) => Math.max(total, value));
console.log(max);
//Bai 13//
let Mangso = [51, 185, 30, 92];
let reverse = Mangso.reverse();
console.log(reverse);
//Bai 14//
let Trunglap = [51, 185, 92, 51, 30, 185, 30, 92];
let removedup = [...new Set(Trunglap)];
console.log(removedup);
//Bai 15//
let Bai15 = [51, 185, 30, 92];
Bai15.sort((a, b) => b - a);
console.log(Bai15[1]);
//Bai 16//
let Bai16 = [51.54, 185, 30.9, 92.17, 15];
let int = Bai16.filter((value) => Number.isInteger(value));
let TongInt = int.reduce((total, item) => total + item);
console.log(TongInt);
//Bai 17//
let TestArr = ([...Bai17]) => {
    if (Bai17.length < 2) {
        return false;
    }
    const diff = Bai17[1] - Bai17[0];
    for (let i = 1; i < Bai17.length; i++) {
        if (Bai17[i] !== Bai17[i - 1] + diff) {
            return false;
        }
    }
    return true;
};
const Bai17 = [1, 2, 3, 4];
console.log(TestArr([...Bai17]));
//Bai Object//
let student = {
    name: "John",
    age: 20,
    gender: "Male",
    marks: {
        math: 80,
        science: 75,
        english: 90
    },
};
student.getInfo = () => {
    return student.name + ' is ' + student.age + ' years old, studying in ' + student.gender + ' gender.';
};
student.calculateAverage = () => {
    return (student.marks.math + student.marks.science + student.marks.english) / Object.keys(student.marks).length;
};
student.Thuoctinh = () => {
    let mess;
    if ('id' in student) {
        mess = 'Co ton tai thong tin nay';
    }
    else {
        mess = 'Khong ton tai thong tin nay';
    }
    return mess;
};
console.log(student.getInfo());
console.log(student.calculateAverage());
console.log(student.Thuoctinh());
