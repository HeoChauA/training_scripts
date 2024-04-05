let doC = prompt('Hay nhap do C');

let doF;
if (doC === null || doC === "") {
    doF = 'Chua nhap do C';
}
else{
    doF = Number(doC) *9/5 +32;
}

console.log(doF)