let Kiemtra = (x:number) => {
    let Thongtin:string;
    if (typeof x === 'number') {
        if (x > 0) {
            Thongtin = 'Day la so duong';
        }
        else if (x < 0) {
            Thongtin = 'Day la so am';
        }
        else {
            Thongtin = 'Day la so 0';
        }
    }
    else {
        Thongtin = 'Day khong phai la so';
    }
    return Thongtin;
}

console.log(Kiemtra(0))