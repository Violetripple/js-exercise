/**
 * Fibonacci number implementation
 * The basic number is 0, 1, it can also set to 1, 1
 */
// fn1, fn2, ..., fn

// basic implementation of fibonacci number
function fibonacci() {
  let fn1 = 0;
  let fn2 = 1;
  let fn;
  console.log(fn1, fn2);
  return function f() {
    fn = fn1 + fn2;
    fn1 = fn2;
    fn2 = fn;
    console.log(fn1, fn2);
    return fn;
  };
}

// fibonacci number implementation by array
function fibonacci2() {
  let fibonacciArray = [1, 1];
  let fn;
  return function f() {
    const len = fibonacciArray.length;
    fn = fibonacciArray.slice(len - 2, len).reduce((pre, cur) => pre + cur);
    fibonacciArray.push(fn);
    console.log(fibonacciArray);
    return fn;
  };
}

// const f = fibonacci();
const f = fibonacci2();

for (let i = 0; i < 10; i++) {
  console.log(f());
}
