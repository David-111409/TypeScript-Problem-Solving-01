/**Grocery Store Prices
You are given an array of strings consisting of grocery items, 
with prices in parentheses. Return an array of prices in float format.

Examples

getPrices(["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"]) ➞ [5.99, 0.2, 8.50, 1.99]

getPrices(["salad ($4.99)"]) ➞ [4.99]

Notes
See if you can use RegExp to solve (but it's not necessary). */

export function getPrices(ar: string[]) : number[]{
    return ar.map(ele => {
        const digits = ele.match(/\$([0-9.]+)/);
        return digits ? parseFloat(digits[1]) : 0 ;
    })
}
console.log(getPrices(['ice cream ($5.99)', 'banana ($0.20)', 'sandwich ($8.50)', 'soup ($1.99)']), [5.99, 0.2, 8.50, 1.99]);
console.log(getPrices(['salad ($4.99)']), [4.99])
console.log(getPrices(['artichokes ($1.99)', 'rotiserrie chicken ($5.99)', 'gum ($0.75)']), [1.99, 5.99, 0.75])
console.log(getPrices(['pizza ($2.99)', 'shampoo ($15.75)', 'trash bags ($15.00)']), [2.99, 15.75, 15])
