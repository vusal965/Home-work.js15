class Transaction {
    constructor(fromClient, toClient, amount, comission) {
        this.fromClient = fromClient;
        this.toClient = toClient;
        this.amount = amount;
        this.comission = comission;
    }
    calculateComission() {
        this.comission = this.amount * 0.05;
    }
}


let client = new Transaction("Vusal", "Rasim", 500,)
client.calculateComission()
console.log(client);
