const word1 = "level";
const word2 = "rotator";
const word3 = "racecar";
const word4 = "aeroplane";
const word5 = "butterfly";
const word6 = "pistachio";

const checkIfPalindrome = (word: string): boolean => {
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

const checkIfPairsEqualsTarget = (nums: number[], target: number): boolean => {
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
const arr3 = [1, 2, 8];
const arr4 = [3, 4, 6, 10];

// time complexity = O(n)
const combineArrays = (arr1: number[], arr2: number[]): number[] => {
  let i = 0,
    j = 0;
  let output: number[] = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }

  return output;
};

console.log(combineArrays(arr3, arr4));

// Given two strings s and t,
// return true if s is a subsequence of t, or false otherwise.
// (The order of the characters counts, but they can be separated by other characters;
// e.g. "ace" is a substring of "abcde" but "aec" isn't).

const string1 = "ace";
const string2 = "aec";
const string3 = "abcde";

const checkIfSubsequence = (s: string, t: string): boolean => {
  let output = "";
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      output += s[i];
      i++;
    }
    j++;
  }

  return s === output;
};

console.log(checkIfSubsequence(string1, string3));

// Reverse a string

const reverseString = (s: string[]): string[] => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

let nums = [-4, -1, 0, 3, 10];

const returnSquaresNonDecreasing = (arr: number[]): number[] => {
  let output: number = [];
};
