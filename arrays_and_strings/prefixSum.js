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

console.log(answerQueries([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]], 13))

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

console.log(numberOfWaysToSplitArray([10, 4, -8, 7]));

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

console.log(numberOfWaysToSplitArrayWithInteger([10, 4, -8, 7]));