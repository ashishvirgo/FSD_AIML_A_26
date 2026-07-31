const student={
    name: "Ashish",
    age:43,
    branch:"AIML"
}

const newstu={
    ...student,
    sec:"A"
}
console.log("New Student=",newstu);