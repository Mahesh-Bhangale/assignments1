console.log('Fibonacci series');
const next = Symbol();
class Fibonacci{
    previousNo:number 
    currentNo:number
    value:number | undefined

    constructor(){
        this.previousNo=0;
        this.currentNo=1;
    }
    [next](){
        this.value = this.previousNo+this.currentNo  
        this.previousNo = this.currentNo
        this.currentNo = this.value

        return this.value
    }
    
}

let f= new Fibonacci();
console.log(f.previousNo);
console.log(f.currentNo);
console.log(f[next]());
console.log(f[next]());
console.log(f[next]());
console.log(f[next]());
