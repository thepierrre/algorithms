// Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, 
// return a boolean array that represents the answer to each query. 
// A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

// For example, given nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, 
// the answer is [true, false, true]. For each query, the subarray sums are [12, 14, 12].

const answerQueries = (nums, queries, limit) => {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    let answer = [];
    for (const [x, y] of queries) {
        let current = prefix[y] - prefix[x] + nums[x];
        answer.push(current < limit)
    }

    return answer;
}

//console.log(answerQueries([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13))

// Given an integer array nums, 
// find the number of ways to split the array into two parts 
// so that the first section has a sum greater than or equal to the sum of the second section. 
// The second section should have at least one number.

const numberOfWaysToSplitArray = (nums) => {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    let answer = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let leftSection = prefix[i];
        let rightSection = prefix[prefix.length - 1] - prefix[i] + nums[i];
        if (leftSection >= rightSection) {
            answer++;
        }
    }

    return answer;
}

//console.log(numberOfWaysToSplitArray([10, 4, -8, 7]));

// Rewrite the function above using an integer instead of an array.

const numberOfWaysToSplitArrayWithInteger = (nums) => {
    let answer = 0;
    let total = 0;
    let leftSection = 0;
    for (const num of nums) {
        total += num;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        leftSection += nums[i];
        if (leftSection >= total - leftSection) {
            answer++;
        }
    }

    return answer;
}

//console.log(numberOfWaysToSplitArrayWithInteger([10, 4, -8, 7]));

// Given an array nums, 
// we define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSumOfArray = (nums) => {
    let prefix = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    return prefix;
}

//console.log(runningSumOfArray([3,1,2,10,1]))

// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

const minStartValue = (nums) => {    
    let minValue = 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
        minValue = Math.min(minValue, total);
    }

    return -minValue + 1;
}

//console.log(minStartValue([-3,2,-3,4,2]))

// K Radius Subarray Averages

const kRadiusSubarrayAverages = (nums, k) => {
    let avgs = Array(nums.length).fill(-1);

    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum.push(nums[i] + prefixSum[prefixSum.length - 1])
    }

    let sumOfCurrElements;
    let currAvg;
    for (let i = k; i < nums.length - k; i++) {
        sumOfCurrElements = prefixSum[i + k] - prefixSum[i - k] + nums[i - k];
        currAvg = Math.trunc(sumOfCurrElements / (2 * k + 1));
        avgs[i] = currAvg;
    }

    return avgs;
}

console.log(kRadiusSubarrayAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));