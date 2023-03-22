let store = 'NaStore';

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  store = store;
}

class TV extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
  store = store;
}

class AC extends Product {
  constructor(name, price, lowestTemp) {
    super(name, price);
    this.lowestTemp = lowestTemp;
  }
  store = store;
}

class Laptop extends Product {
  constructor(name, price, weight) {
    super(name, price);
    this.weight = weight;
  }
  store = store;
}

let tv1 = new TV('BigTV', 200, 50);
let tv2 = new TV('SmallTV', 100, 30);
let tv3 = new TV('MiddleTV', 150, 40);
let ac1 = new AC('NewAC', 100, 18);
let ac2 = new AC('OldAC', 50, 21);
let Laptop1 = new Laptop('GamingLaptop', 300, 2);
let Laptop2 = new Laptop('Office Laptop', 100, 1);

const merchandises = [tv1, tv2, tv3, ac1, ac2, Laptop1, Laptop2];
console.log(merchandises);
