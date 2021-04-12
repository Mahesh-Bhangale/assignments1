console.log("Fourth:");
var names = ['Tom', 'Ivan', 'Jerry'];
var objectArray = names.map(function (str) { return ({ name: str, length: str.length }); });
console.log(objectArray);
