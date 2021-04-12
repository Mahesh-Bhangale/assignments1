var printCapitalNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var i in names) {
        console.log(names[i].toUpperCase());
    }
};
var names = ["pranav", "arun", "mohan", "abc", "xyz"];
printCapitalNames.apply(void 0, names);
