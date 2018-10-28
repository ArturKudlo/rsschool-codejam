function make(n) {
  const fn = function (x) {
    let result = 0;
    if (typeof x !== 'function') {
      result = Array.from(arguments).reduce((acc, item) => acc + item);
    }
    return make(result + n);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}
make(15)(34, 21, 666)(41)(sum); // return 777

function sum(a, b) {
  return a + b;
}