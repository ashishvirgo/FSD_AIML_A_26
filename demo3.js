const student={
    name: "Ashish",
    age: 34,
    branch: "AIML"
}
// const name=student.name;
// const age=student.age;
// const branch=student.branch;
//Object destructuring
const {name:newname,age,branch}=student;
console.log("name=",newname);
console.log("age=",age);
console.log("branch=",branch);
const num=[11,22,33];
// const a=num[0];
// const b=num[1];
// const c=num[2];
//Array destructuring
const [a,b,c]=num;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
