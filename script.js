'use strict';

// =============CONSTRUCTOR FUNCTION & NEW OPERATOR======================
// const Person = function (fullName, birthYear) {
//   // Instance properties
//   this.fullName = fullName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const ivan = new Person('Ivan', 2002);
// console.log(ivan);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4 .function automatically return {}

// const jonabel = new Person('Jonabel', 2001);
// const kokey = new Person('Kokey', 1999);
// console.log(jonabel, kokey);

// console.log(ivan instanceof Person);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// ivan.calcAge();
// jonabel.calcAge();

// console.log(ivan.__proto__);
// console.log(ivan.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(ivan));
// console.log(Person.prototype.isPrototypeOf(jonabel));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkObject

// Person.prototype.species = 'Homo Sapiens';
// console.log(ivan, jonabel);

// console.log(ivan.hasOwnProperty('fullName'));
// console.log(ivan.hasOwnProperty('species'));

// // Static method
// Person.hey = function () {
//   console.log('Hey there!');
//   console.log(this);
// };

// Person.hey();

// //===============================================
// console.log(ivan.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(ivan.__proto__.__proto__);
// console.log(ivan.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 3, 4, 7, 6, 1, 1]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (carName, speed) {
//   this.carName = carName;
//   this.carSpeed = speed;
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// const init = function (car) {
//   car.prototype.accelerate = function () {
//     this.carSpeed += 10;
//     console.log(`${this.carName} has a speed of ${this.carSpeed} km/h`);
//   };

//   car.prototype.brake = function () {
//     this.carSpeed -= 5;
//     console.log(`${this.carName} has a speed of ${this.carSpeed} km/h`);
//   };
// };

// init(Car);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// console.log(' ');
// car2.accelerate();
// car2.brake();

//=====================ES6 CLASSES=======================
// // Class expression
// // const Person = class {};

// // CLass declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   // Insttance method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.fullName}`);
// // };

// jessica.greet();

// // 1. CLasses are NOT hoisted
// // 2. Class are first-class citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();

//==================SETTERS & GETTERS========================

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

//====================Object.create========================
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

//=======================================================
// // Inheritance Between "Classes": Constructor Functions

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// const ivan = new Person('ivan', 2002);
// console.log(mike);
// console.log(ivan);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//=================================================
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// =====================ES6 CLASSES============================
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   // Insttance method
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} amd I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// console.log(martha);
// martha.introduce();
// martha.calcAge();

//===================Object.create==================
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.fullName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

//================ANOTHER CLASS EXAMPLE=====================
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

// class Account {
//   locale = navigator.language;
//   bank = 'Bankist';
//   #movement = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;

//     // this.movement = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   // Public interface (API)
//   getMovements() {
//     return this.#movement;
//     // Not chainable
//   }

//   deposit(val) {
//     this.#movement.push(val);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     // this.movement.push(-val);
//     return this;
//   }

//   // Private method
//   #approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static test() {
//     console.log('TEST');
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// // acc1.deposit(300);
// // acc1.withdraw(100);

// // Chaining Methods
// acc1.deposit(300).withdraw(100).withdraw(50).requestLoan(25000).withdraw(4000);

// console.log(acc1);

// Account.test();

//========================================================
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

class EV extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  batterCharge(val) {
    this.#charge = this.#charge + val;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
  }
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
const tesla = new EV('tesla', 110, 23);
const rivian = new EV('Rivian', 120, 23);
console.log(bmw);
console.log(tesla);
tesla.accelerate().batterCharge(10).batterCharge(5);
rivian.accelerate();
