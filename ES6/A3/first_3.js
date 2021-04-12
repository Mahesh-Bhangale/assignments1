console.log('Promises');
var first = new Promise(function (resolve, reject) {
    var x = 5;
    if (x == 5)
        resolve(x);
    else
        reject(x);
    console.log('First Promise');
});
var second = new Promise(function (resolve, reject) {
    var y = 10;
    if (y == 10)
        resolve(y);
    else
        reject(y);
    console.log('Second Promise');
});
var allPromise = Promise.all([first, second]);
allPromise.then(function (values) {
    var sum = values.reduce(function (x, y) { return x + y; });
    console.log(sum);
});
