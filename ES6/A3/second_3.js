var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Account');
var Account1 = /** @class */ (function () {
    function Account1(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        totalBalance.push(balance);
    }
    return Account1;
}());
var SavingsAccount1 = /** @class */ (function (_super) {
    __extends(SavingsAccount1, _super);
    function SavingsAccount1(id, name, balance, interest) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.interest = interest;
        return _this;
    }
    return SavingsAccount1;
}(Account1));
var CurrentAccount1 = /** @class */ (function (_super) {
    __extends(CurrentAccount1, _super);
    function CurrentAccount1(id, name, balance, cashCredit) {
        var _this = _super.call(this, id, name, balance) || this;
        _this.cashCredit = cashCredit;
        return _this;
    }
    return CurrentAccount1;
}(Account1));
var totalBalance = [];
var c1 = new CurrentAccount1(1, "a", 1000, 400);
var c2 = new CurrentAccount1(2, "b", 2000, 400);
var c3 = new CurrentAccount1(3, "c", 5000, 400);
var sa1 = new SavingsAccount1(6, "x", 10000, 5);
var sa2 = new SavingsAccount1(6, "y", 6000, 6);
var sa3 = new SavingsAccount1(6, "z", 8000, 7);
function totalBankBalance() {
    console.log(totalBalance.reduce(function (a, b) { return a + b; }, 0));
}
totalBankBalance();
