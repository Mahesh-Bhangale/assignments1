//1
console.log("Exercise 1")
console.log('que1')
console.log( Array.from({length: 4}, () => Math.random() * 4) )

//2
console.log('que2')
console.log( Array.from({length: 100}, () => Math.random() * 100) )

//3
console.log('que3')
a = ['1.2', '3.4', '4.2', '5.67']
console.log(a.map(i=>Number(i)))

//4
console.log('que4')
function longestToken(str){
    var res = str.split(/[ab | a]/)
    for(i = 0;i < res.length;i ++){
        if(res[i] == 'ab' || res[i] == 'a')
            res.splice(i, 1)
    }
    var lgth = 0
    var longest
    for(i = 0;i < res.length;i ++){
        if(res[i].length > lgth){
            lgth = res[i].length
            longest = res[i]
        }
    }
    console.log(longest)
}

longestToken("ababcdababefgababhiab")
longestToken("aba")

//5
console.log('que5')
function lengthOfNonWords(){
    var count = 0
    var test1 = ['stop', 'quit', 'exit']
    test1.forEach(function(number) {
        if('q' != number.match(/(q)/g))
            count += number.length
    });
    document.getElementById('que5').innerHTML = count
}