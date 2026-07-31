const num=[11,22,32,41,5,62,73,81,9];
const even=num.filter((i)=>(i%2==0));
console.log("num=",num);
console.log("even=",even);
const square=even.map((i)=>(i*i))
console.log("Square=",square)
const sum=square.reduce((i,s)=>(i+s));
console.log("Sum=",sum);