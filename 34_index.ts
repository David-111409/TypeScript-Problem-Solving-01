/**Find the Shortest Word(s) in a Sentence
Create a function that accepts a string as an argument. Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).

Examples

findShortestWords("I think the solution is fairly obvious.") ➞ ["i"]

findShortestWords("Chase two rabbits, catch none.") ➞ ["two"]

findShortestWords("We become what we think about.") ➞ ["we", "we"]

findShortestWords("The quick brown fox jumped over the lazy dogs back.") ➞ ["fox", "the", "the"]
Notes

Periods, commas and other special characters don't count as part of a word's length.
Remember to sort the array of words alphabetically before returning your result.
Return words in lowercase only. */

export function findShortestWords(sent:string):string[]{
    if (sent.length === 0) return [];
    
    let words : string[] =  sent.replace(/[^a-z\s0-9]/ig, "").toLowerCase().split(/\s+/).filter(Boolean);

    let short : number = Math.min(...words.map(word => word.length));

    return words.filter(word => word.length === short).sort();
}

console.log(findShortestWords("         ")); // output: []
console.log(findShortestWords("Strive not to be a success, but rather to be of value."), ['a'])
console.log(findShortestWords("You miss 100% of the shots you don’t take."), ['of'])
console.log(findShortestWords("Life is what happens to you while you’re busy making other plans."), ['is', 'to'])
console.log(findShortestWords("We become what we think about."), ['we', 'we'])
console.log(findShortestWords("The most common way people give up their power is by thinking they don’t have any."), ['by', 'is', 'up'])
console.log(findShortestWords("The best time to plant the tree was 20 years ago. The second best time is now."), ['is', 'to'])
console.log(findShortestWords("Your time is limited, so don’t waste it living someone else’s life."), ['is', 'it', 'so'])
console.log(findShortestWords("You can never cross the ocean until you have the courage to lose sight of the shore."), ['of', 'to'])
console.log(findShortestWords("There is only one way to avoid criticism: do nothing, say nothing, and be nothing."), ['be', 'do', 'is', 'to' ])
console.log(findShortestWords("The only person you are destined to become is the person you decide to be."), ['be', 'is', 'to', 'to'])
console.log(findShortestWords("What lies behind us and what lies before us are tiny matters compared to what lies within us."), ['to', 'us', 'us', 'us'])
console.log(findShortestWords("If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present."), ['at', 'if', 'if', 'if', 'in', 'in', 'in'])
console.log(findShortestWords("Happiness depends upon ourselves."), ['upon'])
console.log(findShortestWords("Chase two rabbits, catch none."), ['two'])
console.log(findShortestWords("Only the truth of who you are, if realized, will set you free."), ['if', 'of'])
console.log(findShortestWords("If you end up with a boring miserable life because you listened to your parents, your teacher, your priest, or some guy on television, then you deserve it."), ['a'])
console.log(findShortestWords("To accomplish great things, we must not only act, but also dream; not only plan, but also believe."), ['to', 'we'])
console.log(findShortestWords("A tiger doesn’t lose sleep over the opinion of sheep."), ['a'])
console.log(findShortestWords("Kindness is a language that the deaf can hear and the blind can see."), ['a'])
console.log(findShortestWords("Being realistic is the most common path to mediocrity."), ['is', 'to'])
console.log(findShortestWords("Bravery means finding something more important than fear."), ['fear', 'more', 'than'])
console.log(findShortestWords("Can you imagine what I would do if I could do all I can?"), ['i', 'i', 'i'])
console.log(findShortestWords("Believe you can and you’re halfway there."), ['and', 'can', 'you'])
console.log(findShortestWords("Remember that happiness is a way of travel, not a destination."), ['a', 'a'])
console.log(findShortestWords("May the best day of your past be the worst day of your future."), ['be', 'of', 'of'])
