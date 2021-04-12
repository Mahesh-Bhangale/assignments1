//1
console.log("half");
function half(x){
    return x/2;
}
console.log(half(4))
console.log(half(3))

//2
console.log("Calculation");
function calculation(a,b,c){
    return (a+b)/2;
}
console.log(calculation(1,1,0))
console.log(calculation(-1,-1,0))
console.log(calculation(1,-1,0))

//3
console.log("seven");
function seven(){
    x=7;
    return(x);
}
console.log(seven())

//4
console.log("IsEven")
var isEven = function (n){
    if(n%2===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(1))
console.log(isEven(6))