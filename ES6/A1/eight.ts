var BalanceOfAllAccounts: any[] = [];
class Account{
    balance: any;
    constructor(id: string, name: string | undefined, balance: any){
        this.id = id;
        this.name = name;
        this.balance = balance;
        BalanceOfAllAccounts.push(balance);
    }
}
 
class SavingAccount extends Account{
    interest: number;
    constructor(id: number, name: string, balance: number, interest: number){
        super(id, name, balance);
        this.interest = interest;
    }
}
class CurrentAccount extends Account{
    cashCredit: number;
    constructor(id: number, name: string, balance: number, cashCredit: number){
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
}
 
let c1 = new CurrentAccount(1, "a", 1000, 400);
let c2 = new CurrentAccount(2, "b", 2000, 400);
let c3 = new CurrentAccount(3, "c", 5000, 400);
let c4 = new CurrentAccount(4, "d", 4000, 400);
let c5 = new CurrentAccount(5, "e", 6000, 400);
 
let s1 = new SavingAccount(6, "p", 10000, 5);
let s2 = new SavingAccount(6, "q", 6000, 5);
let s3 = new SavingAccount(6, "r", 8000, 5);
let s4 = new SavingAccount(6, "s", 5000, 5);
 
function totalBalanceInBank(){
    console.log(BalanceOfAllAccounts.reduce((a, b) => a + b, 0));
}

totalBalanceInBank();
