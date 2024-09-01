// Given an array of positive integers nums and an integer k,
// find the length of the longest subarray whose sum is less than or equal to k.

const nums = [3, 1, 2, 7, 4, 2, 1, 1, 5];
const k = 8;

const findLongestSubarray = (nums, k) => {
    let left = 0;
    let current = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {
        current += nums[right];

        while (current > k) {
            current -= nums[left];
            left++;
        }

        answer = Math.max(answer, right - left + 1);
    }

    return answer;

};

console.log(findLongestSubarray(nums, k));

// Given a binary string s (a string containing only "0" and "1"),
// you may choose up to one "0" and flip it to a "1". 
// What is the length of the longest substring achievable that contains only "1"?

const str = "1101100111";

const longestBinarySubstring = (nums) => {
    let left = 0;
    let countOfZeros = 0;
    let maxLength = 1;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === "0") {
            countOfZeros++;
        }

        while (countOfZeros > 1) {
            if (nums[left] === "0") {
                countOfZeros--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestBinarySubstring(str));

// Given an array of positive integers nums and an integer k,
// return the number of subarrays where the product 
// of all the elements in the subarray is strictly less than k.


const findSubarrays = (nums, k) => {
    if (k <= 1) {
        return 0;
    }


    let left = 0;
    let answer = 0;
    let current = 1;

    for (let right = 0; right < nums.length; right++) {
        current *= nums[right];

        while (current >= k) {
            current /= nums[left];
            left++;
        }

        answer += right - left + 1;
    }

    return answer;
}

console.log(findSubarrays([10, 5, 2, 6], 100));

// Given an integer array nums and an integer k, 
// find the sum of the subarray with the largest sum whose length is k.

const findSubarrayWithFixedLength = (nums, k) => {
    let currentSum = 0;

    for (let right = 0; right < k; right++) {
        currentSum += nums[right];
    }

    let maxSum = currentSum;
    
    for (let right = k; right < nums.length; right++) {
        currentSum += nums[right] - nums[right - k];
        
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(findSubarrayWithFixedLength([3, -1, 4, 12, -8, 5, 6], 4))

// You are given an integer array 'nums' consisting of n elements, and an integer k.
// Find a contiguous subarray whose length is equal to k 
// that has the maximum average value and return this value.

const findSubarrayWithMaxAverage = (nums, k) => {
    let sum = 0;

    for (let right = 0; right < k; right++) {
        sum += nums[right];
    }

    let maxAverage = sum / k;

    for (let right = k; right < nums.length; right++) {
        sum += nums[right] - nums[right - k];
        let currentAverage = sum / k;

        maxAverage = Math.max(maxAverage, currentAverage);
    }

    return maxAverage;
}

console.log(findSubarrayWithMaxAverage([1, 12, -5, -6, 50, 3], 4))

// Given a binary array nums and an integer k, 
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

const findMaxConsecutiveOnes = (nums, k) => {
    let left = 0;
    let counterOfZeros = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            counterOfZeros++;
        }

        while (counterOfZeros > k) {
            if (nums[left] === 0) {
                counterOfZeros--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

}

console.log(findMaxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0], 2)) // 6
console.log(findMaxConsecutiveOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)) // 10