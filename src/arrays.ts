import { reverseNum } from "./util/numbers";

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




// Q3: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event when either of them doesn’t exist.

// Brute-Force Approach (using Inbuilt Array.sort() ) - TC O(N*logN) and SC O(1)
function find2ndSmallestAndLargestNums(nums:number[]=[4,3,2,1], n=nums.length):number[] {
    if (n <= 1) return [-1, -1];

    nums.sort((a, b) => a-b); 

    // Basic Approach (doesn't cover duplicate-elements test-case)
    // return [nums[1]!, nums[n-2]!]; // [second-Smallest, second-Largest]

    // Loop to Find the Second Smallest Element in the Array
    let i:number, secondSmallest = -1;
    for (i=1; i<n; i++) {
        if (nums[i] !== nums[i-1]) {
            secondSmallest = nums[i]!;
            break;
        }
    }

    // Loop to Find the Second Largest Element in the Array
    let j:number, secondLargest = -1;
    for (j=n-2; j>=0; j--) {
        if (nums[j] !== nums[j+1]) {
            secondLargest = nums[j]!;
            break;
        }
    }

    return [secondSmallest, secondLargest]; // if array consists of same duplicate values, then result will be [-1, -1], means no second smallest and largest elements exists in the array.
}

// Better Approach (using Single Loop after Array.sort() ) - TC O(N*logN) and SC O(1)
function find2ndSmallestAndLargestNumsBA(nums=[4,3,2,1], n=nums.length):number[] {
    if (n <= 1) return [-1, -1];

    nums.sort((a, b) => a-b); 

    let secondSmallest = -1, secondLargest = -1;
    let i = 1, j = n-2;
    
    // Single Loop to Traverse and Find the Second Smallest & Largest Elements
    while (i < n || j >= 0) {
        if(i < n ) {
            if (nums[i] !== nums[i-1]) {
                secondSmallest = nums[i]!;
                i = n; // to prevent waste of computational power by performing redundant ops.
            }
            else i++;
        }

        if (j >= 0) {
            if (nums[j] !== nums[j+1]) {
                secondLargest = nums[j]!;
                j = -1; // to prevent wastage of computational power by performing redundant ops.
            }
            else if (j >= 0) j--; 
        }

        // OR, Easier to Understand, but the no. of computation is higher than previous
        // if (secondSmallest === -1 && nums[i] !== nums[i-1]) {
        //     secondSmallest = nums[i]!;
        // }

        // if (secondLargest === -1 && nums[j] !== nums[j+1]) {
        //     secondLargest = nums[j]!;
        // }

        // i++; j--;
    }

    return [secondSmallest, secondLargest]
}

// Optimal Approach (using 2 Loops, without Any Sorting) - TC O(N) and SC O(1)
function find2ndSmallestAndLargestNumsMBA(nums=[4,3,2,1], n=nums.length):number[] {
    if (n <= 1) return [-1, -1];

    // Find the Smallest and Largest Elements in the Array
    let smallest = Infinity, largest = -Infinity;
    for (let num of nums) { // O(N)
        if (num < smallest) {
            smallest = num;
        }

        if (num > largest) {
            largest = num;
        }
    }

    // Find the Second Smallest and Largest Elements in the Array
    let secondSmallest = Infinity, secondLargest = -Infinity;
    for (let num of nums) { // O(N)
        if (num > smallest && num < secondSmallest ) {
            secondSmallest = num;
        }

        if (num < largest && num > secondLargest) {
            secondLargest = num;
        }
    }

    return [
        secondSmallest === Infinity ? -1 : secondSmallest, 
        secondLargest === -Infinity ? -1 : secondLargest
    ]
} 




// Q4: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.
function isArraySortedInAscedingOrder(nums=[1, 2, 3, 4], n=nums.length): boolean {
    if (n <= 1) return true; // covers the edge case, where total numbers is 0 or 1 in the array

    // Brute-Force & Optimal Approach - TC O(n) and SC O(1)
    for (let i=1; i<n; i++) {
        if (nums[i]! < nums[i-1]!) { // i.e. current element Not >= previous element, means wrong order
            return false;
        }
    }

    return true;
}



// Q5: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.
function removeDuplicatesInArr(nums=[1, 1, 3, 3, 3, 3], n=nums.length): number {
    if (n <= 1) return n;

    // Brute-Force Approach ONE - TC O(n) and SC O(n)
    // const result = nums.filter((el, index) => {
    //     // add the 1st element of the array to the result
    //     // add only unique numbers to the result, by preventing addition of duplicates to result
    //     return (index === 0) || (el !== nums[index-1]);
    // })

    // for (let i=0; i<result.length; i++) {
    //     nums[i] = result[i]!;
    // }

    // return result.length;


    // Brute-Force Approach TWO - TC O(n) and SC O(n)
    // const seen = new Set<number>(); // SC O(n)
    // let idx = 0;

    // for (let num of nums) { // TC O(n)
    //     const curr = num!;

    //     if (!seen.has(curr)) { // if element not a duplicate (or is a unique)
    //         seen.add(curr); // add unique element to Set
    //         nums[idx] = curr; // update nums with unique element
    //         idx++;
    //     }
    // }

    // return idx; // return count of unique elements

    // Optimal Approach (Two-Pointers) - TC O(n) and SC O(1)
    let i = 0; // last unique element pointer
    for (let j = 1; j<n; j++) {
        if (nums[j] !== nums[i]) { // unique element found
            i++; // move the pointer forward
            nums[i] = nums[j]!; // add the unique element to that pointer
        }
    }

    return i+1; // total count of unique numbers in the array
}
// const arr = [1, 1, 3, 3, 3, 3]
// const k = removeDuplicatesInArr(arr);
// console.log(arr);
// console.log(arr.slice(0, k));




// Q6: Given an integer array nums, rotate the array to the left by one.
function rotateArrToLeftBy1(arr:number[], n=arr.length): void {
    if (n <= 1) return;

    // Brute Force Approach (using a duplicate array) - TC & SC O(n)
    // const temp = new Array<number>(n); // Create a temporary array to store the shifted elements

    // // Iterate and Shift the elements to the left by one position
    // for (let i=1; i<n; i++) {
    //     temp[i-1] = arr[i]!; 
    // }

    // temp[n-1] = arr[0]!; // The first element moves to the last position

    // // Update the Original Array
    // for (let i=0; i<n; i++) {
    //     arr[i] = temp[i]!;
    // }


    // Optimal Approach (using a Loop) - TC O(n) and SC O(1)
    const firstEle = arr[0]!; // stores first element, so that we can access it after the modification of 0th idx
    
    for (let i=1; i<n; i++) { // Iterate all the elements
        arr[i-1] = arr[i]!; // shift ith element to left by 1 index
    }

    // Assign the first element to the last (n-1) idx of the array, will complete the rotation
    arr[n-1] = firstEle;
}
// const arr = [1, 2, 3, 4, 5];
// rotateArrToLeftBy1(arr);
// console.log(arr);




// Q7: Given an array of integers, rotating array of elements by k elements either left or right.
function rotateArrByKSteps(arr:number[], k:number, direction:"left" | "right"): void {
    const n = arr.length;
    k %= n; // this protects from such cases when k >= n
    if (n <= 1 || k == 0) return; // edge case

    //Brute-Force Approach - TC O(n) and SC O(k)
    // if (direction === "left") {
    //     const temp = arr.slice(0, k); // stores the first 'k' elements, so that we can access it after the rotation of the elements in the arr[]

    //     // Iterate and shfit all the elements from kth idx to n-1 by 'k' steps
    //     for (let i=k; i<n; i++) { // from k to n-1
    //         arr[i-k] = arr[i]!; // shift ith element to left by k steps
    //     }

    //     // Copy the stored first 'k' elements to the original array to complete the rotation
    //     for (let i=0; i<k; i++) { // from 0 to k-1
    //         arr[n - k + i] = temp[i]!; // this ensures that values are rotated and placed at the right index, especially when k > 1
    //     }
    // }
    // else if (direction === "right") {
    //     const temp = arr.slice(n-k); // stores the last 'k' elements

    //     // Iterate and Shift all elements by k steps to the right
    //     for (let i=n-k-1; i>=0; i--) {
    //         arr[i+k] = arr[i]!;
    //     }

    //     // Copy stored elements to the front
    //     for (let i=0; i<k; i++) {
    //         arr[i] = temp[i]!;
    //     }
    // }



    // Optimal Approach - TC O(N) and SC O(1)
    if (direction === "left") {
        // Reverse the first k elements from 0 to k-1, then
        reverseNum(arr, 0, k-1);

        // Reverse the remaning n-k elements from k to n-1, then
        reverseNum(arr, k, n-1);

        // Reverse the Entire Array
        reverseNum(arr, 0, n-1);
    }
    else if (direction === "right") {
        // Reverse the Entire Array, then
        reverseNum(arr, 0, n-1);

        // Reverse the first k elements from 0 to k-1, then
        reverseNum(arr, 0, k-1);

        // Reverse the remaning n-k elements from k to n-1
        reverseNum(arr, k, n-1);
    }
}
// const arr = [1, 2, 3, 4, 5, 6, 7];
// rotateArrByKSteps(arr, 12, "right");
// console.log(arr);




// Q8: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
function moveZerosToEnd(nums:number[], n=nums.length):void {
    if (n <= 1) return;

    // Brute-Force Approach - TC & SC O(n)
    // {
    // const temp = new Array<number>(); // stores the values in the correct order, where all zeroes are at the end

    // let zeroCount = 0; // stores the count of no. of zeroes in the array

    // // Traverse each and every element, and if it's a positive num then it gets added to temp[] in the same order, but if it's a zero then the zeroCount gets updated
    // for (let num of nums) { 
    //     if (num > 0) {
    //         temp.push(num);
    //     }
    //     else zeroCount++;
    // }

    // // Loop to push all the zeroes to the end of the temp[]
    // for (let i=0; i<zeroCount; i++) {
    //     temp.push(0);
    // }

    // // Update the nums[] by Copy the Final Values of temp[]
    // for (let i=0; i<n; i++) {
    //     nums[i] = temp[i]!;
    // }
    // }

    
    // Optimal Approaach - TC O(n) and SC O(1)
    let i = -1; // stores the index of first 0 element

    // Loop to find the index of first 0 element
    while (i < n) { 
        if (nums[i] === 0) break;
        else i++;
    }

    if (i === -1) return; // no zeroes exists in the array

    // Loop to find the positive num after ith idx and swap it with 0 to push all zeroes at the end
    for (let j = i+1; j < n; j++) { // j stores the index of first positive number after ith index
        if (nums[j]! > 0) {
            [ nums[i], nums[j] ] = [ nums[j]!, nums[i]! ];
            i++;
        }
    }
}
const arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
moveZerosToEnd(arr);
console.log(arr);