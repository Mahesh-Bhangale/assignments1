console.log("Adding functionality to getnextArtmstrong()");
function isArmstrong3(num) {
    var sum = 0;
    var temp = num;
    var len = String(temp).split("").length;
    while (temp > 0) {
        var remainder = temp % 10;
        sum += Math.pow(remainder, len);
        temp = Math.floor(temp / 10);
    }
    if (sum == num)
        return true;
    else
        return false;
}
var nums = 0;
function reset() {
    nums = 0;
    return nums;
}
function getnextArmstrong1() {
    while (nums < 20001) {
        if (nums < 2000) {
            nums++;
            if (isArmstrong3(nums))
                return nums;
            else {
                reset();
                return "Number is above 2000";
            }
        }
    }
}
console.log(getnextArmstrong1());
