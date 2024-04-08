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

let kiemtra = ({...student}) => {
    let mess:string;
    if ('id' in student) {
        mess = 'Co ton tai thong tin nay';
    }
    else {
        mess = 'Khong ton tai thong tin nay';
    }

    return mess;
}

console.log(getInfo);
console.log(calculateAverage);
console.log(kiemtra({...student}));
