console.log('Exercise')

//1
console.log('que 1')
const num = 6;
if(num % 2 == 0)
    console.log('Even')
else
    console.log('Odd')

//2
console.log('que 2')
function max(a,b,c) 
{
    max_val = 0;
    if (a > b)
        max_val = a;
    else
        max_val = b;
    if (c > max_val) 
        max_val = c;
    
    return max_val;
}
console.log(max(1, 2, 3));
console.log(max(1, 3, 2));
console.log(max(3, 2, 1));

//3
console.log('que 3')
function flipCoin(num){
    H = 0, T = 0
    for(i = 0;i < 10;i ++)
    {
        x = (Math.floor(Math.random() * 2) == 0);
        if(x)
            H ++
        else
            T ++
    }
    return H
}
console.log(flipCoin(10))
console.log(flipCoin(10))
console.log(flipCoin(10))

//4
console.log('que 4')
console.log(flipCoin(10)/10)
console.log(flipCoin(10)/10)
console.log(flipCoin(10)/10)

//5
console.log('que 5')
function padChars(number, s){
    var str = ""
    while(number > 0){
        str += s
        number --
    }
    console.log(str)
}
padChars(5, 'x')
padChars(7, '-')

//6
console.log('que6')
function rollDice(){
    return 1 + Math.floor(Math.random() * 6)
}

function numRollstoGetSix(){
    countSix = 0
    while(true){
        countSix ++
        if(rollDice() == 6)
            break
    }
    return countSix

    
}

console.log(numRollstoGetSix())
console.log(numRollstoGetSix())

//7
console.log('que7')
function Random(){
    x = (Math.floor(Math.random() * 2) == 0)
    if(x)
        document.getElementById('que7').innerHTML = "Have a Good Day!"
    else
        document.getElementById('que7').innerHTML = "Have a Bad Day!"
}