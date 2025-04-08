// Given an integer array arr,
// count how many elements x there are, such that x + 1 is also in arr.
// If there are duplicates in arr, count them separately.

let arr4 = [1, 2, 3]; // outputs 2
let arr5 = [1,1,3,3,5,5,7,7]; // outputs 0

const countElements = (nums: number[]): number => {
    const mySet = new Set<number>(nums);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i] + 1)) {
            count++;
        }
    }
    return count;
}

console.log(countElements(arr4));
console.log(countElements(arr5));