const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./sumOfOther');

describe('The sum of other elements', () => {
    it('1', () => {
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
    });

    it('2', () => {
    const solutions = sumOfOther([13, 21, 32, 6, 12, 25]);
    assert.deepEqual(solutions, [96, 88, 77, 103, 97, 84]);
    });
});