// Given an array of integers nums and an integer target,
// return indices of two numbers such that they add up to target.
// You cannot use the same index twice.

// O(n^2)
const indcesOfTwoNumbersBrute = (nums: number[], target: number): [number, number] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                return [i, j]
            }
        }
    }
    return [-1, -1];
};

const indicesOfTwoNumbers = (nums: number[], target: number): [number, number] => {
    let map: Map<number, number> = new Map();

    for (let i = 0 ; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;
        if (map.has(complement)) {
             return [i, map.get(complement)!]
        }
        map.set(num, i)
    }

    return [-1, -1]
}

// If we wanted to return a boolean to check if such a pair exists, we only need a set:

const checkIfTwoNumbersExist = (nums: number[], target: number): boolean => {
    let set: Set<number> = new Set();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = target - num;

        if (set.has(complement)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

console.log(checkIfTwoNumbersExist([5, 2, 7, 10, 3, 9], 8))