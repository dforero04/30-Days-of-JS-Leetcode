/* 
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 
Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.
*/

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (val2) => {
            if (val2 === val) return true
            // throw new Error("Not Equal")
            return "Not Equal"
        },
        notToBe: (val2) => {
            if (val2 !== val) return true
            // throw new Error("Equal")
            return "Equal"
        }
    }
};


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
console.log(expect(6).notToBe(5)); // true
console.log(expect(6).toBe(7)); // throws "Not Equal"
