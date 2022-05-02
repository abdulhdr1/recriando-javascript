// Função

const array = new Array("1", "string", 3);

function demonstracao(a, b, c) {
  return `${a} --- ${b} --- ${c}`;
}

// Como função

function map(fun, arr) {
  let res = [];
  for (i = 0; arr.length > i; i++) {
    res.push(fun(arr[i], i, arr));
  }
  return res;
}

console.log(map(demonstracao, array));
