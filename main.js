"use strict";

/**
 * Get 'pthFactor' for number
 * @param {number} n
 * @param {number} p
 * 
 * @return {number}
 */
function pthFactor(n, p) {
    if (!Number.isInteger(n) || !Number.isInteger(p)) {
        throw new Error(`Function parameters should be number. n = ${typeof n}, p = ${typeof p}`);
    }

    // TODO (maybe restore)
    // if (!checkNumberRange(n, 1, 1015) || !checkNumberRange(p, 1, 109)) {
    //     throw new Error(`Function's parameters are wrong. \n n = ${n} (should be 1 <= n <= 1015), \n p = ${p} (should be 1 <= p <= 109)`);
    // }

    // find factors for 'n'
    var factors = findNumberDivisors(n);

    // reduce 'p' by one, because the indexes in the array start from 0
    p--;

    if (p < factors.length) {
        return factors[p];
    }
    else {
        return 0;
    }
}


/**
 * Find divisors (factors) of natural numbers for a number (by factorization)
 * @param {number} n
 * 
 * @return {array}
 */
function findNumberDivisors(n) {
    var divisors = [];
    var i = 1;
    
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) {
            divisors.push(i);
        }
        i++;
    }

    for (var j = i - 1; j > 0; j--) {
        if ((j != n / j) && (n % j === 0)) {
            divisors.push(n / j);
        }
    }

    return divisors;
}


/**
 * Check if the number is in range
 * @param {number} number
 * @param {number} min
 * @param {number} max
 * 
 * @return {boolean}
 */
function checkNumberRange(number, min, max) {
    if (!Number.isInteger(number) || !Number.isInteger(min) || !Number.isInteger(max)) {
        throw new Error(`Function parameters should be number, but number = ${typeof number}, min = ${typeof min}, max = ${typeof max}`);
    }

    if (max < min) {
        throw new Error(`Parameter "max" should be bigger then "min", but ${max} < ${min}`);
    }
    
    return (number >= min && number <= max);
}
