// Given a string s, determine if all characters have the same frequency.
let s2 = "abacbc"; // returns true
let s3 = "aaabb"; // returns false

const checkForSameFrequency = (str: string): boolean => {
    let counts: Map<string, number> = new Map();
    for (const char of str) {
        counts.set(char, (counts.get(char) || 0) + 1)
    }

    let mySet: Set<number> = new Set();
    for (const val of counts.values()) {
        mySet.add(val);
    }

    return mySet.size === 1;
}

console.log(checkForSameFrequency(s2));
console.log(checkForSameFrequency(s3));