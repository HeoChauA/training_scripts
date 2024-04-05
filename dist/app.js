"use strict";
let Kiemtra = (x) => {
    let Du = x % 2;
    let Thongtin;
    if (typeof x === 'number') {
        if (Du == 0) {
            Thongtin = 'Day la so chan';
        }
        else {
            Thongtin = 'Day la so le';
        }
    }
    else {
        Thongtin = 'Day khong phai la so';
    }
    return Thongtin;
};
console.log(Kiemtra(15));
