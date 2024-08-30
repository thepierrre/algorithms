const word1 = "level";
const word2 = "rotator";
const word3 = "racecar";
const word4 = "aeroplane";
const word5 = "butterfly";
const word6 = "pistachio";

const checkIfPalindrome = (word: string) => {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(checkIfPalindrome(word1)); // true
console.log(checkIfPalindrome(word4)); // false

// Given a sorted array of integers and a target integer,
// return true if there exists a pair of numbers that sums to target

const nums1 = [1, 2, 4, 6, 8, 9, 14, 15];
const target1 = 13;

const nums2 = [3, 5, 7, 11, 12, 16, 18, 20];
const target2 = 23;

const nums3 = [2, 4, 6, 8, 10, 12];
const target3 = 19;

const checkIfPairsEqualsTarget = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let curr = nums[left] + nums[right];
    if (curr === target) {
      return true;
    }

    if (curr > target) {
      right--;
    }

    if (curr < target) {
      left++;
    }
  }
  return false;
};

console.log(checkIfPairsEqualsTarget(nums1, target1)); // true
console.log(checkIfPairsEqualsTarget(nums2, target2)); // true
console.log(checkIfPairsEqualsTarget(nums3, target3)); // false

// Given two sorted integer arrays arr1 and arr2,
// return a new array that combines both of them and is also sorted.

const arr1 = [1, 4, 7, 20];
const arr2 = [3, 5, 6];

const combineArraysAndSort = (arr1: number[], arr2: number[]) => {
  let i = 0,
    j = 0;
  let output = [];

  while (i < arr1.length) {}

  while (j < arr2.length) {}
};
