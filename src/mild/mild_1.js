console.log(sumToString(1,5));

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return '' + a + ' + ' + b + ' = ' + (a+b);
}
console.log(getIncreasingArray(3,7));
/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let arr = new Array(endNumber-startNumber+1);
    let idx = 0;
    for(let i=startNumber; i<=endNumber; i++) {
        arr[idx] = i;
        idx++;        
    }
    return arr;
}
console.log(maxAndMin([1,2,3,4,5]));
/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let minn = Math.min(...numbers);
    let maxx = Math.max(...numbers);
    return {
        min:minn,
        max:maxx
    };
}
console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    var dict = {};
    for(let i=0; i<array.length; i++) {
        if(!(array[i] in dict)) {
            dict[array[i]] = 1;
        } else {
            dict[array[i]]++;
        }
    }
    return dict;
}
