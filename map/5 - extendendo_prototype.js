// Extend prototype

function doNothing(a, b, c) {
  return `${a} --- ${b} --- ${c}`;
}

class ArrayClass extends Array {
  mapClass(fun) {
    let res = [];
    if (!fun || typeof fun !== "function")
      throw Error("Passe uma função válida");
    for (let i = 0; i < this.length; i++) {
      let returned = fun(this[i], i, this);
      if (returned) {
        res.push(returned);
      } else {
        throw Error("A função deve retornar algo");
      }
    }
    return res;
  }
}

function ArrayFunc(...args) {
  const array = new Array(...args);
  array.mapFunc = function (fun) {
    if (!fun || typeof fun !== "function")
      throw Error("Passe uma função válida");
    for (let i = 0; i < this.length; i++) {
      let returned = fun(this[i], i, this);
      if (returned) {
        array[i] = returned;
      } else {
        throw Error("A função deve retornar algo");
      }
    }
    return array;
  };
  return array;
}

const array = new Array(1, "2", "string");
const arrayFunc = new ArrayFunc(1, "2", "string");
const arrayClass = new ArrayClass(1, "2", "string");

function doNothingFunc(a, b, c) {
  return a + 58;
}

console.log(array.map(doNothing));
console.log(arrayFunc);
console.log(arrayFunc.mapFunc(doNothingFunc));
console.log(arrayClass.mapClass(doNothing));

try {
  array.mapFunc(doNothing);
} catch (error) {
  console.log("Invalido");
}
