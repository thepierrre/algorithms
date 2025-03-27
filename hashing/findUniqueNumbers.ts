// Given an integer array nums,
// find all the unique numbers x in nums that satisfy the following:
// x + 1 is not in nums, and x - 1 is not in nums.

const nums1 = [1, 1, 2, 4, 4, 6, 8, 10]; // output [4, 6, 8, 10]
const nums2 = [3, 3, 2, 2, 1, 5, 7]; // output [5, 7]


// O(1) thanks to converting the array into a set.
const findUniqueNumbers = (nums: number[]): number[] => {
    let set: Set<number> = new Set(nums);
    let ans: number[] = [];

    for (const num of set) {
        if (!set.has(num - 1) && !set.has(num + 1)) {
            ans.push(num);
        }
    }

    return ans;
}

console.log(findUniqueNumbers([1, 1, 2, 4, 4, 6, 8, 10]))
console.log(findUniqueNumbers([3, 3, 2, 2, 1, 5, 7]))