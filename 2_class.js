let store = 'NaStore';

class TV {
  // 파라미터로 name, price, size를 받는다
  constructor(name, price, size) {
    this.name = name; // "추후 생성될 객체의 name 속성의 값"을 "인자로 받은 name"으로 초기화한다
    this.price = price; // "추후 생성될 객체의 price 속성의 값"을 "인자로 받은 price"으로 초기화한다
    this.size = size; // "추후 생성될 객체의 size 속성의 값"을 "인자로 받은 size"으로 초기화한다
  }
  store = store;
}

let tv1 = new TV('BigTV', 200, 50);
let tv2 = new TV('SmallTV', 100, 30);
let tv3 = new TV('MiddleTV', 150, 40);

const merchandises = [tv1, tv2, tv3];
console.log(merchandises);
