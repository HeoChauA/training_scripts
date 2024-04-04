"use strict";
let Ten = prompt("Hay nhap ten", "Nguyen Van A");
let Hello;
if (Ten == null || Ten == "") {
    Hello = "Chua nhap ten";
}
else {
    Hello = "Xin chao" + Ten;
}
console.log(Hello);
