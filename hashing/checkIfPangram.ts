// Given a string sentence containing only lowercase English letters,
// return true if sentence is a pangram, or false otherwise.
// A pangram is a sentence where every letter of the English alphabet appears at least once.

let input1 = "thequickbrownfoxjumpsoverthelazydog" // true
let input2 = "piotr" // false

const checkIfPangram = (sentence: string): boolean => {
    let mySet: Set<string> = new Set();

    for (const char of sentence) {
        if (!mySet.has(char)) {
            mySet.add(char);
        }
    }

    return mySet.size === 26;
}

console.log(checkIfPangram(input1))
console.log(checkIfPangram(input2))