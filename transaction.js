class Transaction {
  constructor(type, amount, date) {
    this.type = type;
    this.amount = amount;
    this.date = date;
  }

  isDebit() {
    return this.type === "debit";
  }
}

module.exports = Transaction;
