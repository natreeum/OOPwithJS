let store = 'NaStore';

let tv1 = {
  name: 'BigTV',
  price: 200,
  size: 50,
  store,
};

let tv2 = {
  name: 'SmallTV',
  price: 100,
  size: 30,
  store,
};

// price 속성을 빼먹고 생성해버린 경우..!😱
let tv3 = {
  name: 'MiddleTV',
  size: 40,
  store,
};

const merchandises = [tv1, tv2, tv3];
console.log(merchandises);
