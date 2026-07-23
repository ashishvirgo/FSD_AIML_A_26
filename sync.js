function register(){
    waitforinput(5000);
    console.log("register here");
}
function login(){
    waitforinput(9000);
    console.log("login here");
}
function getData(){
    waitforinput(8000);
    console.log("fetch data");
}
function displayData(){
    console.log("display data");
}
function waitforinput(delay){
  const ct=Date.now();
  const ms=ct+delay;
  while(Date.now()<ms){

  }
}
register();
login();
getData();
displayData();
console.log("call another App");