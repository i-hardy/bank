class Account {
  constructor () {
    this._transactions = []
    this._balance = 0
  }

  statement () {
    var statementText = 'date || credit || debit || balance\n'
    this._transactions.reverse().forEach(function (statement) {
      statementText += [statement.date.toLocaleDateString(), statement.credit, statement.debit, statement.balance]
        .join(' || ') + '\n'
    })
    return statementText
  }

  deposit (amount) {
    this._balance += amount
    this._transactions
    .push({date: new Date(),
      credit: amount,
      balance: this._balance})
  }

  withdraw (amount) {
    this._balance -= amount
    this._transactions
    .push({date: new Date(),
      debit: amount,
      balance: this._balance})
  }
}
