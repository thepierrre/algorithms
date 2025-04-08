// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

let arr1 = [3, 0, 1]; // returns 2
let arr2 = [0, 1]; // returns 2
let arr3 = [9, 6, 4, 2, 3, 5, 7, 0, 1]; // returns 8

const findMissingNumber = (nums: number[]): number => {
    const mySet: Set<number> = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!mySet.has(i)) {
            return i;
        }
    }
    return -1;
}

console.log(findMissingNumber(arr1));
console.log(findMissingNumber(arr2));
console.log(findMissingNumber(arr3));