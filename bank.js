class Bank{
    constructor(name,acctype,accno,balance){
        this.name=name;
        this.acctype=acctype;
        this.accno=accno;
        this.balance=balance;
    }
    getBalance(){
        return "your balance is"+this.balance;
    }
    withdraw(withdrawamt){
        if(withdrawamt<=this.balance){
            this.balance=this.balance-withdrawamt;
            return this.getBalance();
        }
        else{
            return "insufficient "+this.getBalance();
        }

    }
    deposit(depositamt){
        this.balance=this.balance+depositamt;
        return "updated balance "+this.balance;
    }
}
const sourabh=new Bank("Sourabh","savings",102121,25000);
//console.log(sourabh);
const lokesh=new Bank("Lokesh","current",102122,10000);
//console.log(lokesh);
const surya=new Bank("Surya","savings",102123,100000);
//console.log(surya);
const asritha=new Bank("Ashritha","current",102124,20000);
//console.log(asritha);
//console.log(surya.getBalance());
//console.log(surya.withdraw(20000));
console.log(surya.deposit(10000));