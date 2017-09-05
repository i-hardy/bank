describe('Account', function () {
  var account

  beforeEach(function () {
    account = new Account()
  })

  describe('#statement', function () {
    it('prints the headers when there are no transactions', function () {
      expect(account.statement()).toEqual('date || credit || debit || balance\n')
    })
  })

  describe('#deposit', function () {
    it('adds the given amount to the balance', function () {
      account.deposit(1000)
      expect(account.statement()).toEqual('date || credit || debit || balance\n' +
        new Date().toLocaleDateString() +
        ' || 1000 ||  || 1000\n')
    })
  })

  describe('#withdraw', function () {
    it('subtracts the given amount from the balance', function () {
      account.deposit(1000)
      account.withdraw(250)
      expect(account.statement()).toEqual('date || credit || debit || balance\n' +
        new Date().toLocaleDateString() +
        ' ||  || 250 || 750\n' +
        new Date().toLocaleDateString() +
        ' || 1000 ||  || 1000\n')
    })
  })
})
