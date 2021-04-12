console.log('Fibonacci series');
var next = Symbol();
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
        this.previousNo = 0;
        this.currentNo = 1;
    }
    Fibonacci.prototype[next] = function () {
        this.value = this.previousNo + this.currentNo;
        this.previousNo = this.currentNo;
        this.currentNo = this.value;
        return this.value;
    };
    return Fibonacci;
}());
var f = new Fibonacci();
console.log(f.previousNo);
console.log(f.currentNo);
console.log(f[next]());
console.log(f[next]());
console.log(f[next]());
console.log(f[next]());
