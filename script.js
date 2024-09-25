'use strict';

// 1) public fields
// 2) private fields
// 3) public methods
// 4) private methods
// there is also the static version

class Account {
  // 1) public fields (instances)
  locale = navigator.language;

  // 2) private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an Account, ${owner}`);
  }

  // 3) public methods

  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved.`);
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }

}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1._approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#aprovedLoan(100));

Account.helper();
