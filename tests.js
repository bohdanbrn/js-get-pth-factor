// Tests for main.js
"use strict";

/**
 * Test for function 'pthFactor'
 * @param {number} n
 * @param {number} p
 * @param {number} expect
 *
 * @return {object}
 */
function pthFactorTest(n, p, expect) {
    try {
        let result = pthFactor(n, p);

        if (result === expect) {
            return { success: `Success. Expect ${expect}, result = ${result}` };
        } else {
            return {
                error: `Error. Expect ${expect}, but result is ${result}`
            };
        }
    } catch (error) {
        return { error: error };
    }
}

// prepare data for tests
let testCases = [
    { n: 4, p: 4, expect: 0 },
    { n: 1234, p: 2, expect: 2 },
    { n: 111111, p: 1, expect: 1 },
    { n: 1048576, p: 12, expect: 2048 },
    { n: 67280421310721, p: 2, expect: 67280421310721 },
    { n: 22876792454961, p: 28, expect: 7625597484987 },
    { n: 866421317361600, p: 26881, expect: 0 },
    { n: 866421317361600, p: 26880, expect: 866421317361600 },
    { n: 100000000000000, p: 200, expect: 160000000000 },
    { n: 99980000016, p: 56, expect: 438508772 }
];

// array with error tests
let errors = [];
// array with success tests
let success = [];

// RUN TESTS
let testTimeStart = Date.now();

testCases.forEach(function(item) {
    let test = pthFactorTest(item.n, item.p, item.expect);

    if (test.error) {
        errors.push(test.error);
    } else if (test.success) {
        success.push(test.success);
    }
});

// Check errors
errors.forEach(function(item) {
    console.error(item);
});
// Check success
success.forEach(function(item) {
    console.log(item);
});

let testRunTime = Date.now() - testTimeStart;
console.log(`Tests run time: ${testRunTime}ms`);
