export const account = {
  due: 1000,
  paid: 0,
  status: 'OPEN',
  payAccount: function (amount: number): string {
    if (amount > this.due - this.paid) return `${amount} is greater than the current outstanding balance of ${this.due - this.paid}.`

    this.paid += amount;
    if (this.paid === this.due) this.status = 'CLOSED';

    return this.printStatus();
  },
  printStatus: function (): string {
    return `Account Status: ${this.paid} has been paid, ${this.due - this.paid} is outstanding, and the current status of the account is ${account.status[0]}${account.status.slice(1).toLowerCase()}.`;
  },
};

console.log(account.printStatus());

console.log(account.payAccount(1500));

console.log(account.payAccount(500));

console.log(account.payAccount(500));
