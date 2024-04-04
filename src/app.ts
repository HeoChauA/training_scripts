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

let studentInfo = Object.create(student);

studentInfo.getInfo = () => {
  return;
}

console.log(student);
