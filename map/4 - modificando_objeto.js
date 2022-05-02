// Clonando o prototype

function doNothing(a, b, c) {
  return `${a} --- ${b} --- ${c}`;
}

const array = Object.create(Array.prototype, {
  mapObject: {
    value: function (fun) {
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
    },
  },
});
array;
array.push(1, "2", "string");
console.log(array.mapObject(doNothing));
