function register(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve();
       console.log("register here");
      },6000)
   })
        
}
function login(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve();
        console.log("Login Here")
       },8000)
    })
    
}
function getData(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve();
        console.log("fetch data Here")
       })
    })
    
}
function displayData(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve()
        console.log("Display data here")
       })
    })
   
}

// register().then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err)=>{
//             console.log("Error",err);
//           })

async function test(){
    try{
        await register();
        await login();
        await getData();
        await displayData();

    }
    catch(err){
      console.log("Error:",err);
    }
}
test();
console.log("call another App");