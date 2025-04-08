// Given an integer array nums and an integer k,
// find the number of subarrays whose sum is equal to k.

const findSubarraySumThatEqualsK = (nums: number[], k: number): number => {
    let counts: Map<number, number> = new Map(); // how many times we've seen each prefix sum
    counts.set(0, 1); // we have to initialize with an empty prefix, and the sum of an empty prefix is 0
    let ans = 0, curr = 0;

    for (const num of nums) {
        curr += num;

    }

}

console.log(findSubarraySumThatEqualsK([1,2,1,2,1], 3))