let nums:number[] = [1, 2, 3, 2];
// Q1: Find out whether there are any duplicates in the array or not?

// Brute-Force Approach - O(n*n)
(() => {
    for (let i = 0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] === nums[j]) { // duplicate found
                console.log("TRUE - Has A Duplicate");
                return;
            }
        }
    }
    console.log("FALSE - Don't Have any Duplicates!");
});

// Optimized Approach (using Set) - O(n)
((nums:number[]): void => {
    const newSet = new Set<number>();

    for (let curr of nums) {
        if (newSet.has(curr)) { // if already exists in Set — duplicate found
            console.log("TRUE - Has A Duplicate");
            return;
        }
        newSet.add(curr);
    }
    console.log("FALSE - Don't Have any Duplicates!");
});



// Q2: Given an array, we have to find the largest element in the array.

// Brute Force Approach ( using Inbuilt Array.sort() ) - TC O(N*logN), and SC O(1)
function largestElementInArr(nums:number[]=[4,3,2,1], n=nums.length):number {
    nums.sort(); // O(N*logN) for worst & avg cases, and O(N) for best case
    return nums[n-1]!;
}

// Optimal Approach ( using Single Loop ) - TC O(N) and SC O(1)
function largestElementInArrOA(nums:number[]=[4,3,2,1], n=nums.length):number {
    let max = nums[0]!;
    
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }
    
    return max;
}

process.stdout.write(largestElementInArrOA() + '');