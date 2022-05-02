// Alterando prototype diretamente
const arrayNormal = new Array("1", "string", 3);

function doNothing(a, b, c) {
  return `${a} --- ${b} --- ${c}`;
}

console.log(typeof arrayNormal);
console.log(Object.isExtensible(Array));

arrayNormal.push(23);
Array.prototype.newMap = function (fun) {
  let res = [];
  if (!fun || typeof fun !== "function") throw Error("Passe uma função válida");
  for (let i = 0; i < this.length; i++) {
    let returned = fun(this[i], i, this);
    if (returned) {
      res.push(returned);
    } else {
      throw Error("A função deve retornar algo");
    }
  }
  return res;
};

// Formas de inicializar um array

console.log(typeof Set.prototype);

const arr = new Array("a", "b", "42"); // array constructor

const arr2 = Object.create(Array.prototype);
arr2.push(...arrayNormal);

const arr3 = []; // literal notation
arr3.push(...arr, 215);

console.log(arr.newMap(doNothing));
console.log(arr2.newMap(doNothing));
console.log(arr3.newMap(doNothing));
