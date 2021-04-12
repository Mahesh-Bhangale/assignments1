//6
var string = "{firstName: 'Mahesh', lastName: 'Bhangale'}";
eval('var obj = ' + string)
console.log("eval = ", obj)

//7
var str = '{ "fisrtName": "Mahesh", "lastName": "Bhangale" }'
var obj1 = JSON.parse(str)
console.log("JSON.parse() = ", obj1)