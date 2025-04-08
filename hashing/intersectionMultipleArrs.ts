// Given a 2D array nums that contains n arrays of distinct integers,
// return a sorted array containing all the numbers that appear in all n arrays.
// For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]],
// return [3, 4]. 3 and 4 are the only numbers that are in all arrays.

const giveIntersection = (nums: number[][]): number[] => {
    let counts: Map<number, number> = new Map();
    let ans: number[] = [];
    let n = nums.length;

    for (const arr of nums) {
        for (const item of arr) {
            counts.set(item, (counts.get(item) || 0) + 1)
        }
    }

    for (const [key, val] of counts) {
        if (val === n) {
            ans.push(key);
        }
    }

    return ans;
}



console.log(giveIntersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))