
export const sum=(...num)=>{
    const s=num.reduce((s,i)=>(s+i));
    return s;
}

export const add=(...num)=>{
    let s=0;
    for(let i of num){
        s=s+i;
    }
    return s;
}
// export {sum,add};