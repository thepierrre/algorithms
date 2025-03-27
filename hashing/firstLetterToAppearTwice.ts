// Given a string s, return the first character to appear twice.
// It is guaranteed that the input will have a duplicate character.

const firstLetterToAppearTwice = (str: string): string => {
    let set: Set<string> = new Set();

    for (const char of str) {
        if (set.has(char)) {
            return char;
        }

        set.add(char);
    }

    return "";
}

console.log(firstLetterToAppearTwice("abcdeda"));