/**
 * Fabonacci number implementation
 * The basic number is 0, 1, it can also set to 1, 1
 */
// fn1, fn2, ..., fn

// basic implementation of fabonacci number
function fabonacci() {
  let fn1 = 0;
  let fn2 = 1;
  let fn;
  console.log(fn1, fn2);
  return function cur() {
    fn = fn1 + fn2;
    fn1 = fn2;
    fn2 = fn;
    console.log(fn1, fn2);
    return fn;
  };
}

// fabonacci number implementation by array
function fabonacci2() {
  let fabonacciArray = [1, 1];
  let fn;
  return function cur() {
    const len = fabonacciArray.length;
    fn = fabonacciArray.slice(len - 2, len).reduce((pre, cur) => pre + cur);
    fabonacciArray.push(fn);
    console.log(fabonacciArray);
    return fn;
  };
}

// const cur = fabonacci();
const cur = fabonacci2();

for (let i = 0; i < 10; i++) {
  console.log(cur());
}
