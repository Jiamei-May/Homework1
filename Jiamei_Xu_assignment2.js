// Question 1.1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function double(a) {
  var result = {};
  for (i in a) {
    result[i] = a[i] * 2;
  }
  return result;
}

doublearry = [
  double(itemsObject[0]),
  double(itemsObject[1]),
  double(itemsObject[2]),
];

console.log(doublearry);

// Question 1.2
function check(item) {
  return item.quantity > 2 && item.price > 300;
}

const array2 = itemsObject.filter(check);
console.log(array2);

// Question 1.3
let quantitySum = itemsObject.reduce(function (prev, cur) {
  return cur.quantity + prev;
}, 0);
console.log(quantitySum);

let priceSum = itemsObject.reduce(function (prev, cur) {
  return cur.price + prev;
}, 0);
console.log(priceSum);

// Question 2
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return   The Sum Of  All The Elements In  An Array  ";

newString = string
  .replace(/\s{2,}/g, " ")
  .replace(/-/g, " ")
  .trim()
  .toLowerCase();
console.log(newString);

// Question 3
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const list = second.reduce((acc, cur) => {
  const target = acc.find((ee) => ee.uuid === cur.uuid);
  if (target) {
    Object.assign(target, cur);
  } else {
    acc.push(cur);
  }
  return acc;
}, first);

const newArr = list.sort(function (a, b) {
  return a.uuid - b.uuid;
});
console.log(newArr);
