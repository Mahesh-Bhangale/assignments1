//1
console.log("Hello World")

//2
/*var userName = prompt("Please Enter Your Name");
if(userName!=null){
    document.getElementById("welcome").innerHTML=userName;
}*/

//3
/*var userName = prompt("Please Enter Your Name");
if(userName=='Alice'|| userName=='Bob'){
    document.getElementById("welcome").innerHTML="Hello "+userName+" How are You!";
}*/

//4
/*const number = parseInt(prompt("Enter a number"));
let sum=0;
for(let i=0;i<=number;i++){
    sum+=i;
}
console.log("Sum of number: ", sum);*/

//5
console.log("Multiple of 3")
function multiples(number){
    let sum=0;
    for(let i=3;i<=number;i++){
        if(i%3===0 || i%5===0){
            sum+=i;
        }
    }
    return sum;
}
console.log(multiples(17))

//6
/*var n=prompt("Please enter a number");
var choose=prompt("Please a number 1 for product or 2 for sum");
if(!isNaN(n)){
    if(choose==1){
        function factorial(x){
            if(x===0){
                return 1;
            }
            return x*factorial(x-1);
        }
        x=factorial(n);
        alert(x);
    }
    else if(choose==2){
        var x=((parseInt(n)+1)*n)/2;
        alert(x);
    }
    else{
        alert("Please Enter a Valid number");
    }
}*/

//7
/*console.log("Multiplicaton")
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 12; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}*/

//8


/*console.log("All Prime Number");
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}*/

//9
console.log("Greatest Element in list");
const array=[4,7,9];
console.log(Math.max(...array));

//10
function leapYears() {
    var years=0
    var currentYear=2021
    res=""
    while(years < 20) {
        if((currentYear % 4 === 0) && (!((currentYear % 100 === 0) && (currentYear % 400 !== 0)))) {
            res += currentYear + " "
            years++
            currentYear++
        }else {
            currentYear++

        }
    }
    document.getElementById('leap-years').innerHTML = res
}

//11
console.log("List Reverse");
var fruits =["Banana","Orange","Mango","Apple"];
console.log(fruits.reverse());

//12
console.log("List Include");
var fruits =["Banana","Orange","Mango","Apple"];
console.log(fruits.includes("Mango"));

//13
function odd() {
    list = [1, 2, 3, 4, 5, 6],res= ""
    for(i=0;i<list.length;i++){
        if(i % 2 != 0)
            res += list[i] + " "
    }
    document.getElementById('odd').innerHTML = res
}


//14
function running(){
    list = [1,2,3,4,5,6],runlist=[]
    sum = list[0]
    runlist.push(list[0])
    for(i=1;i<list.length;i++){
        sum+=list[i]
        runlist.push(sum)
    }
    document.getElementById('running').innerHTML = runlist
}

//15
/*console.log("String Palindrome")
function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);*/

//16
console.log("Three function Sum")
console.log("Recusrion")
var array_sum = function(my_array) {
    if (my_array.length === 1) {
      return my_array[0];
    }
    else {
      return my_array.pop() + array_sum(my_array);
    }
};
/*function forSum(list) {

    var i, result = 0;

    for(i = 0; i < list.length; i++) {
        result += list[i];
    }

    return result;
}
function whileSum(list) {

    var result = 0;

    while(list.length) {
        result += list.pop();
    }

    return result;
}
console.log(for_sum([1,2,3,4,5,6]));
console.log(while_sum([1,2,3,4,5,6]));*/
console.log(array_sum([1,2,3,4,5,6]));
//17

//18
function perfectSquare(){
    perfect ="",i=j=1
    while(j<=20){
        root=Math.sqrt(i)
        if(root == Math.floor(root)){
            perfect+=i+" "
            j++
        }
        i++
    }
    document.getElementById('perfect').innerHTML = perfect
}

//19
function conCat() {
    var list = ["Shivam", "Devansh"];
    var listt = ["Vishal", "Rajat", "Atul"];
    var team = list.concat(listt); 
    document.getElementById("concat").innerHTML = team;
}

//20 
console.log("Alternative Merge List")
var array1 = [1, 2, 3, 4, 5];
var array2 = ['a', 'b', 'c', 'd', 'e'];
var result = array2.reduce(function(arr, v, i) {
    return arr.concat(v, array1[i]); 
 }, [])
console.log(result)

//21
console.log("Two List Sort")
var array3=[5,6,7,1,2,9]
var array4=[3,4,8]
var team = array3.concat(array4);
console.log(team.sort());

//22
function rotateArray1() {
    k=3,nums=[1,2,3,4,5,6]
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    document.getElementById("rotate").innerHTML= nums
}

//23
console.log("first 100 fibonacci")
var fib = function(n) {
    if (n === 1) {
      return [0, 1];
    } else {
      var arr = fib(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
  };
  
  console.log(fib(100));

//24
console.log("Number to String")
var number = 12354987,
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}

console.log(output);

//25
function printFrame(arr) {
    function fill (str, length, char) {
        return (str.length < length) ? fill(str + char, length, char) : str;
    }

    let size = arr.map((str) => {
            return str.length;
})
.reduce((a, b) => {
        return Math.max(a, b);
});

    let line = fill('', size + 4, '*');

    arr = arr.map((element) => {
            return '* '+ fill(element, size, ' ') + ' *';
})
    arr.unshift(line);
    arr.push(line);

    return arr.join('\n');;
}

console.log(printFrame(["Hello", "World", "in", "a", "frame"]));

//26

function translatePigLatin(str) {
    var newString = str + "way";
    
    if (/[qwrtypsdfghjklzxcvbnm]{1,}/i[Symbol.match](str[0])) {
    var firstConsonants = /[qwrtypsdfghjklzxcvbnm]{1,}/i[Symbol.match](str);
    var length = firstConsonants[0].length;
    var newStr = str.substr(length) + firstConsonants + "ay";
    return newStr; 
      
    }
    
    return newString;
  
}
  
console.log(translatePigLatin("Fox"));
