console.log("Armstronge no")
function getnextArmstrong() {
    var i = 1;
    var nextArmNum = {
        next: function () {
            var numberOfDigits = i.toString().length;
            var sum = 0;
            var temp = i;
            while (temp > 0) {
                var remainder = temp % 10;
                sum += Math.pow(remainder, numberOfDigits);
                temp = Math.floor(temp / 10);
            }
            if (sum == i) {
                i++;
                return { value: sum, done: false };
            }
            else {
                i++;
                return { value: undefined, done: true };
            }
        }
    };
    return nextArmNum;
}
var armNum = getnextArmstrong();
var res = armNum.next();
for (var i = 0; i <= 2000; i++) {
    if (res.done == false)
        console.log(res.value);
    res = armNum.next();
    i++;
}
