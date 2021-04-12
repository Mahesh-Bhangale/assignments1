let names1 = ['Tom', 'Ivan', 'Jerry'];
const objectArray = names1.map((str) => ({ name: str, length: str.length }))
 
console.log(objectArray);