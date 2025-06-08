export function elementSet<T>( st: Set<T>):T | undefined{
    return st.values().next().value;
}


const first = new Set();
first.add(1); 
console.log(elementSet(first),1)

const second = new Set();
second.add("apple");
console.log(elementSet(second),"apple")

const third  = new Set();
third.add(false);
console.log(elementSet(third),false)


/**
 * Return Sole Element in a Set
Given a set containing an element, return the sole element.

Examples

const first = new Set();
first.add(1); 
elementSet(first) ➞ 1

const second = new Set();
second.add("apple"); 
elementSet(second) ➞ "apple"

const third  = new Set();
third.add(false); 
elementSet(third) ➞ false
 */
