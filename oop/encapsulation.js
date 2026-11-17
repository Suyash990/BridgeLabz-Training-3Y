class Student{
    #studentId=101;
    #studentNeme="Ram";

    getDisplay()
    {
        this.#studentId=102;
        console.log("StudentId :-"+this.#studentId)
    }
}
class Bank{
    #balance=5000;
    deposit(amount)
    {
        if(amount>0)
        {
            this.#balance+=amount;
            console.log("Balance is :"+this.#balance);
        }
    }
    //withdraw
    withdraw(amount)
    {
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log("Balance is :"+this.#balance);
        }else
    }
    //getbalance
    getBalance(){
        return this.#balance;
    }
}
const bank=new Bank();
bank.deposit(1000);

let choice;
do{
    choice=Number(prompt(
        "1.Bank deposit\n"+
        "2.Bank Withdraw\n"+
        "3.Get Balance\n"+
        "4.Exit"
    ));
    switch(choice){
        case 1:let amount=Number(prompt("Enter Deposite amount :-"));
        bank.deposit(amount);
        break;
        case 2:let amoun=Number(prompt("Enter withdraw amount :-"));
        bank.withdraw(amoun);
    }
}while(choice<4)