console.log('Promises');
const first= new Promise((resolve,reject)=>{
    let x=5;
    if(x==5)
        resolve(x);
    else
        reject(x);

    console.log('First Promise');
})

const second= new Promise((resolve,reject)=>{
    let y=10;
    if(y==10)
        resolve(y);
    else
        reject(y);

    console.log('Second Promise');
})
const allPromise=Promise.all([first,second]);
allPromise.then((values)=>{
    const sum=values.reduce((x,y)=>x+y);
    console.log(sum);
})
