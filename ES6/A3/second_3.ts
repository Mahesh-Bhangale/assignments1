console.log('Account')
class Account1 {
    id:number
    name:string
    balance:number

    constructor(id, name, balance){
        this.id=id;
        this.name=name;
        this.balance=balance;
        totalBalance.push(balance);
    }
}

class SavingsAccount1 extends Account1{
    interest: any;
    constructor(id, name, balance, interest){
        super(id, name, balance);
        this.interest=interest;
    }
}

class CurrentAccount1 extends Account1{
    cashCredit: any;
    constructor(id, name, balance, cashCredit){
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
}

var totalBalance= [];

let c1 = new CurrentAccount1(1, "a", 1000, 400);
let c2 = new CurrentAccount1(2, "b", 2000, 400);
let c3 = new CurrentAccount1(3, "c", 5000, 400);
 
let sa1 = new SavingsAccount1(6, "x", 10000, 5);
let sa2 = new SavingsAccount1(6, "y", 6000, 6);
let sa3 = new SavingsAccount1(6, "z", 8000, 7);

function totalBankBalance(){
    console.log(totalBalance.reduce((a,b)=> a + b, 0));
}

totalBankBalance();