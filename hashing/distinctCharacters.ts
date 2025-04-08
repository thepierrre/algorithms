// You are given a string s and an integer k.
// Find the length of the longest substring that contains at most k distinct characters.

let s1 = "eceba", k1 = 2; // returns 3 (the longest substring with at most 2 distinct chars is "ece")

const findLengthOfLongestSubstring = (str: string, k: number): number => {
    let counts: Map<string, number> = new Map();
    let ans: number = 0;
    let left: number = 0;
    for (let right = 0; right < str.length; right++) {
        counts.set(str[right], (counts.get(str[right]) || 0) + 1);
        while (counts.size > k) {
            counts.set(str[left], counts.get(str[left])! - 1);
            if (counts.get(str[left]) === 0) {
                counts.delete(str[left])
            }
            left ++
        }

        ans = Math.max(ans, right - left + 1)
    }
    return ans;
}

console.log(findLengthOfLongestSubstring(s1, k1));