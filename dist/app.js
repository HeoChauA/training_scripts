"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
const getInfo = student.name + ' is ' + student.age + ' years old, studying in ' + student.gender + ' gender.';
const calculateAverage = (student.marks.math + student.marks.science + student.marks.english) / Object.keys(student.marks).length;
let kiemtra = (_a) => {
    var student = __rest(_a, []);
    let mess;
    if ('id' in student) {
        mess = 'Co ton tai thong tin nay';
    }
    else {
        mess = 'Khong ton tai thong tin nay';
    }
    return mess;
};
console.log(getInfo);
console.log(calculateAverage);
console.log(kiemtra(Object.assign({}, student)));
