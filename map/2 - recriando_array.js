function doNothing(a, b, c) {
  return `${a} --- ${b} --- ${c}`;
}

class ArrayNovo extends Object {
  constructor(...args) {
    super();
    for (let i = 0; args.length > i; i++) {
      this[i] = args[i];
    }
    this.length = args.length;
  }
  map = function (fun) {
    let res = [];
    for (let i = 0; this.length > i; i++) {
      res.push(fun(this[i], i, this));
    }
    return res;
  };
}

const array = new ArrayNovo(1, "98", "string");
array.push(123);

console.log(array.map(doNothing));
