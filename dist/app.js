"use strict";
let Ten, Tuoi;
Ten = prompt('Hay nhap chieu ten');
Tuoi = prompt('Hay nhap chieu tuoi');
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
