/**
 * Ramda, functional programing invocates a target function many times.
 */

'use strict';

/**
 * waitFor timer promise.
 *
 * @param {number} [ms=1000]
 * @returns Promise
 */
async function waitFor(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * repeatInvocation factory invokes a target func function with certain times along with delay time.
 *
 * @param {*} { times = 1, func, ms = 1000 }
 * @returns boolean
 */
async function repeatInvocation({ times = 1, func, ms = 1000 }) {
  await new Array(times).fill(0).reduce(async (prev) => {
    await prev;
    await func();
    await waitFor(ms);
  }, Promise.resolve());

  return true;
}

// test
(async () => {
  const options = { times: 3, func: () => console.log('go'), ms: 1000 };
  await repeatInvocation(options);
})();
