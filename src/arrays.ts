import { register } from "node:module";
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
    let i:number; // stores the index of first 0 element

    // Loop to find the index of first 0 element
    for (i = 0; i < n; i++) { 
        if (nums[i] === 0) break;
    }
    
    if (i === n) return; // no zeroes exists in the array

    // Loop to find the positive num after ith idx and swap it with 0 to push all zeroes at the end
    for (let j = i+1; j < n; j++) { // j stores the index of first positive number after ith index
        if (nums[j]! !== 0) {
            [ nums[i], nums[j] ] = [ nums[j]!, nums[i]! ];
            i++;
        }
    }
}
// const arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
// moveZerosToEnd(arr);
// console.log(arr);




// Q9 (Linear Search): Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
function linearSearch(nums:number[], num:number, n=nums.length): number { // TC O(N) & SC O(1)
    for (let i=0; i<n; i++) { 
        if (nums[i] === num) {
            return i;
        }
    }
    return -1;
}
// console.log(linearSearch([5, 4, 3, 2, 1], 9));




/* Q10 (Union of Two Sorted Arrays):
Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
The union of two arrays can be defined as the common and distinct elements in the two arrays. NOTE: Elements in the union should be in ascending order. */
function unionOfSortedArrays(arr1:number[], arr2:number[], n=arr1.length, m=arr2.length): number[] {
    // Brute-Force Approach - TC O( (n+m)*log(n+m) ) & SC O(D) or O(1), where D is total elements in union of 1st and 2nd arrays
    // {
    //     const union = new Set<number>([...arr1, ...arr2]);

    //     // for (let num of arr1) {
    //     //     union.add(num);
    //     // }

    //     // for (let num of arr2) {
    //     //     union.add(num);
    //     // }

    //     return [...union].sort((a,b) => a-b);
    // }


    // Optimal Approach - TC O(n+m) & SC O(D) or O(1);
    const union = new Array<number>();
    
    let i = 0, j = 0; // iterators of both the sorted arrays 
    while (i < n && j < m) {
        if (arr1[i]! < arr2[j]!) { // ith element is less than jth element
            if (union.length === 0 || union[union.length-1] !== arr1[i]) { // not a duplicate
                union.push(arr1[i]!);
            }
            i++;
        }
        else if (arr2[j]! < arr1[i]! && union[union.length-1] !== arr2[j]) { // jth element is smaller than ith element
            if (union.length === 0 || union[union.length-1] !== arr2[j]) { // not a duplicate
                union.push(arr2[j]!);
            } 
            j++;
        }
        else { // Both the arrays' ith and jth elements are equal to each other. 
            if (union.length === 0 || union[union.length-1] !== arr1[i]) { // not a duplicate
                union.push(arr1[i]!);
            }
            i++; j++;
        }
    }

    // Add remaining elements of the first array to the union array. 
    while (i < n) {
        if (union.length === 0 || union[union.length-1] !== arr1[i]) { // not a duplicate
            union.push(arr1[i]!);
        }
        i++;
    }

    // Add remaining elements of the second array to the union array. 
    while (j < m) {
        if (union.length === 0 || union[union.length-1] !== arr2[j]) { // not a duplicate
            union.push(arr2[j]!);
        }
        j++;
    }

    return union;
}
// console.log(unionOfSortedArrays([1,2,3,4,5,6,7,8,9,10], [2,3,4,4,5,11,12]));




/* Q11 (Find the Missing Number):
Given an array arr[] of size n-1 with distinct integers in the range of [1, n]. This array represents a permutation of the integers from 1 to n with one element missing. Find the missing element in the array. */
function findMissingNum(arr:number[], n=arr.length): number {
    if (n <= 1) return -1; // edge case
    
    // Brute-Force Approach - TC O(N^2) and SC O(1)
    // {
    //     let num = 1; // missing num we need to find in the arr[]
    //     while (num <= n) {
    //         let isFound = false;

    //         // Linear Search to check if the num is missing from the arr[] or not
    //         for (let el of arr) {
    //             if (num === el) {
    //                 isFound = true;
    //             }
    //         }

    //         if (!isFound) { // num missing (not found)
    //             break;
    //         }
    //         else num++; // num not missing
    //     }

    //     return num;
    // }


    // Better Approach - TC O(N*logN) and SC O(1)
    // {
    //     arr.sort((a, b) => a-b); //sort in ascending order from 1->n
    //     let missingNum:number = -1;
        
    //     for (let i=0; i<n-1; i++) {
    //         let curr = arr[i]!;
    //         let next = arr[i+1]!;
            
    //         if (curr+1 !== next) {
    //             missingNum = curr+1;
    //             break;
    //         }
    //     }

    //     return missingNum;
    // }


    // More Better Approach (using Hashing) - TC O(N) and SC O(N)
    // {
    //     // const set = new Set<number>([...arr]); // avoid it, cuz it's an array problem, not Set!
    //     const hash = new Array(n+1).fill(0);

    //     // Store the frequencies of each element in Hash[]
    //     for (let el of arr) {
    //         hash[el]++;
    //     }

    //     // Find the missing num (whose frequency is 0) between 1-N,
    //     let num:number;
    //     for (num=1; num <= n; num++) {
    //         if (hash[num] === 0) break;
    //     }
    //     return num;
    // }


    // Optimal Approach (using Sum of N-terms Formula) - TC O(N) and SC O(1)
    {
        // Calculate the Sum of all Elements of the Array
        let sum = 0;
        for (let num of arr) {
            sum += num;
        }
        
        // Calculate the Expected Sum using Formula for first N+1 natural numbers, instead of just N
        n += 1;
        let expSum = Math.floor((n * (n + 1)) / 2);

        // Subtract the Sum of Elements from the Expected Sum to get Missing Num
        return expSum - sum;
    }
}
// console.log(findMissingNum([1, 2, 3, 5]));




/* Q12 (Count Maximum Consecutive One's in the array):
Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.*/
function countMaxConsecutiveOneInArr(arr:number[], n=arr.length): number {
    if (n === 0) return -1;

    // Brute-Force Approach - TC O(N^2) and SC O(1)
    // {
    //     let maxCount = 0;

    //     for (let i=0; i<n; i++) {

    //         if (arr[i] === 1) {
    //             let count = 1;
                
    //             for (let j=i+1; j<n; j++) {
    //                 if (arr[j] === 1) {
    //                     count++;
    //                 }
    //                 else { // num is 0
    //                     i = j; // to avoid counting for the same numbers again
    //                     break;
    //                 }
    //             }

    //             maxCount = Math.max(count, maxCount);
    //         }
    //     }
    //     return maxCount;
    // }


    // Optimal Approach - TC O(N) and SC O(1)
    {
        let maxCount = 0; // stores the max count of consecutive 1s in arr[]

        let count = 0; // stores the count of current consecutive 1s

        // Loop to Count the Consecutive 1s in arr[]
        for(let i=0; i<n; i++) {
            if (arr[i] === 1) {
                count++;
                maxCount = Math.max(count, maxCount);
            }
            else { // num is 0
                count = 0;
            }

            // avoid calculating max count in every step, especially when the curr_num is 0, to prevent wastage of resources (computational power)
            // maxCount = Math.max(count, maxCount);
        }

        return maxCount;
    }
}
// console.log(countMaxConsecutiveOneInArr([1, 1, 0, 1, 1, 1]));




/* Q13 (Find the number that appears once, and the other numbers twice):
Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.*/
function findNumWithOneFrequency(arr:number[], n=arr.length): number {
    if (n === 0) return -1;

    // Brute-Force Approach - TC O(N^2) and SC O(1)
    // {
    //     //Outer Loop selects an element the arr[] in index range [0, n-1]
    //     for (let i=0; i<n; i++) {

    //         // Inner Loop checks whether the element occurs more than once or not
    //         let j = 0;
    //         for (; j<n; j++) {
    //             if (j === i) continue;
    //             else if (arr[j] === arr[i]) break; // ith element is not unique in arr[]
    //         }

    //         if (j === n) { // completed traversing the entire array, so ith element is unique 
    //             return arr[i]!;
    //         }
    //     }

    //     return -1;
    // }


    // Better Approach (Using Hash Array) - TC O(N) and SC O(maxElement+1)), 'cause the size of the array is maxElement + 1
    // {
    //     // Find the maximum in array
    //     let max = -Infinity;
    //     for (let num of arr) {
    //         if (num > max) max = num;
    //     }
    //     // Or, max = Math.max(...arr);

    //     // Create a Hash Array to store frequencies of each num
    //     const hash = new Array(max+1).fill(0);
    //     // Note: it'll be much better in SC [O(N)] if we use Hash-Map, but because it's an array problem, we avoid using any other DS 

    //     // Store frequencies of each num in arr
    //     for (let num of arr) {
    //         hash[num]++;
    //     }

    //     // Traverse and Find the num whose frequency is 1
    //     for (let num of arr) {
    //         if (hash[num] === 1) {
    //             return num;
    //         }
    //     }

    //     return -1;
    // }


    // Optimal Approach (Using XOR Bitwise Operation) - TC O(N) and SC O(1)
    {
        // Note - Properties of XOR are:
        // (i) XOR of two same numbers is 0; (ii) XOR of a num with 0 is num itself.
        // This is why we're using XOR operation to find out a unique num in arr[], cuz XOR of 
        // duplicate nums will be 0 but unique num will be the num itself, which will be the 
        // final result. BUT, this only works for the array consisting of only unique num.

        let xor = 0; // stores the XOR (^) of two numbers

        // Calculate the XOR of all num in arr[]
        for (let num of arr) {
            xor ^= num;
        }

        return xor;
    }
}
// console.log(findNumWithOneFrequency([4,1,2,1,2]));




/* Q14 (Longest Subarray with given Sum K(Positives)):
Given an array nums of size n and an integer k, find the length of the longest sub-array that sums to k. If no such sub-array exists, return 0.*/
function longestSubarrWithSumK(arr:number[], k:number, n=arr.length): number {
    // Brute-Force Approach - TC O(N^2) and SC O(1)
    {
        let maxLen = 0; // stores the max length subarray whose sum === k
        
        // Outer loop to traverse and select the start index/element of subarray
        for (let i=0; i<n; i++) {
            
            // Inner loop to traverse, find the sum & length of the current subarray 
            let j=i+1;
            let sum = arr[i]!; // stores the sum of elements of current subarray, ranging [i-j]
            for (; j<n && sum<k; j++) {
                sum += arr[j]!;
            }
            
            if (sum === k) { // subarray found whose sum is === k
                let len = j-i; // length of current subarray whose sum === k
                maxLen = Math.max(len, maxLen);
            }
        }
        
        return maxLen;
    }

    // Optimal Approach (using Two-Pointers) - TC O(N) and SC O(1)
    {
        let maxLen = 0; // stores the maximum length of the subarray

        let startIdx = 0, endIdx = 0; // stores the start and ending indices of subarray

        let sum = 0; // store the sum of elements of the subarray from start-end indices

        // Traverse all Elements
        while (endIdx < n) {
            sum += arr[endIdx]!;

            // If the sum exceeds K, shrink the window from the start
            while (startIdx <= endIdx && sum > k) {
                sum -= arr[startIdx]!;
                startIdx++;
            }
            
            // Update the Maximum Length
            if (sum === k) {
                maxLen = Math.max(maxLen, endIdx-startIdx+1);
            } 

            endIdx++;
        }

        return maxLen;
    }
}
// console.log(longestSubarrWithSumK([-3, 2, 1], 10));




/* Q15 (Length of the longest subarray with zero Sum):
Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.*/
function lengthOfLongestSubarrWith0Sum(arr:number[], n=arr.length): number {
    if (n === 0) return -1; //edge case

    // Brute-Force Approach - TC O(N^3) and SC O(1)
    // {
    //     let longestSubarrLen = 0;
        
    //     for (let i=0; i<n; i++) { // start index of subarr
    //         for (let j=i; j<n; j++) { // end index of subarr
    //             let sum = arr[i]!; // stores the sum of elements in the subarray (range i-j)
                
    //             // calculate sum of the elements in the subarray
    //             let k=i+1;
    //             for (; k<=j; k++) { 
    //                 sum += arr[k]!;
    //             }
                
    //             // Update the longest length subarray whose sum == 0
    //             if (sum === 0) {
    //                 let currSubarrLen = k-i;
    //                 longestSubarrLen = Math.max(currSubarrLen, longestSubarrLen);
    //             }
    //         }
    //     }
        
    //     return longestSubarrLen;
    // }

    // Better Approach - TC O(N^2) and SC O(1)
    // {
    //     let longestSubarrLen = 0;

    //     for (let i=0; i<n; i++) {
    //         let sum = 0;
    //         for (let j=i; j<n; j++) {
    //             sum += arr[j]!;

    //             if (sum === 0) {
    //                 let currSubarrLen = (j-i)+1;
    //                 longestSubarrLen = Math.max(currSubarrLen, longestSubarrLen);
    //             }
    //         }
    //     }

    //     return longestSubarrLen;
    // }

    // Optimal Approach - TC O(N) and SC O(N) (or O(1), if helper Map is not considered)
    {
        let maxSubarrLen = 0, sum = 0; // stores the longest subarray length whose sum == 0, and curr sub array sum of elements, respectively
        let map = new Map<number, number>(); // stores the sum of elements of subarr till ith idx which is the end idx

        for (let i=0; i<n; i++) {
            sum += arr[i]!;

            if (sum === 0) {
                maxSubarrLen = i+1;
            }
            else { // if sum < or > 0
                if (map.has(sum)) { // then calculate the subarr length from prev idx till ith idx, and update "maxSubarrLen"
                    let currSubarrLen =  i - map.get(sum)!;
                    maxSubarrLen = Math.max(maxSubarrLen, currSubarrLen);
                }
                else { // add the record
                    map.set(sum, i);
                }
            }
        }

        return maxSubarrLen;
    }
}
// console.log(lengthOfLongestSubarrWith0Sum([6, -2, 2, -8, 1, 7, 4, -10]));




/* Q16 (Two Sum : Check if a pair with given sum exists in Array):
Given an array of integers arr[] and an integer target.
1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.
2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.*/
function twoSum (arr:number[], target:number, n=arr.length): void{
    if (n <= 1) {
        console.log("1st Variant: NO\n2nd Variant: [-1, -1]");
        return;
    }

    // Brute-Force Approach - TC O(N^2) and SC O(1)
    // {
    //     for (let i=0; i<n; i++) {
    //         for (let j=i+1; j<n; j++) {
    //             if ((arr[i]! + arr[j]!) === target) {
    //                 console.log(`1st Variant: YES\n2nd Variant: [${i},${j}]`);
    //                 return;
    //             }
    //         }
    //     }
    //     console.log(`1st Variant: NO\n2nd Variant: [-1, -1]`);
    // }

    // Better Approach (Greedy [Using Sorting & Two-Pointers]) - TC = O(N * logN) and SC O(N)
    // {
    //     // Create helper array to store num of OG array with their indices as elements
    //     const numsWithIdx = arr.map((val, idx) => [val, idx]); 

    //     // Sort the array in ascending/increasing order
    //     numsWithIdx.sort((a,b) => a[0] - b[0]);

    //     // Define Two Pointers: left & right, pointing to 0th and n-1 indicies
    //     let left = 0, right = n-1, sum:number;

    //     // Loop until left < right
    //     while (left < right) {
    //         sum = numsWithIdx[left][0] + numsWithIdx[right][0]; // Calculate Sum

    //         if (sum === target) { // Pair Found
    //             console.log(`1st Variant: YES\n2nd Variant: [${numsWithIdx[left][1]},${numsWithIdx[right][1]}]`);
    //             return;
    //         }
    //         else if (sum < target) { // Increment left idx by 1, 'cause right idx is already stores maximum num
    //             left++;
    //         }
    //         else { // Decrement right idx by 1, 'cause left idx is already stores minimum num
    //             right--;
    //         }
    //     }

    //     // After looping all the elements, if Pair not Found, then
    //     console.log("1st Variant: NO\n2nd Variant: [-1, -1]");
    // }

    // Optimal Approach (Usin Map) - TC & SC = O(N)
    {
        const map = new Map<number, number>();

        for (let i=0; i<n; i++) { // Iterate over all elements
            const secondEl = target - arr[i]!;
            if ( map.has(secondEl) ) { // Check if 2nd element (x) exists in map
                console.log(`1st Variant: YES\n2nd Variant: [${map.get(secondEl)}, ${i}]`); // Pair found
                return;
            }
            else { // if 2nd element (x) doesn't exists in map
                map.set(arr[i], i); // Store current element and index
            }
        }
        console.log(`1st Variant: NO\n2nd Variant: [-1, -1]`); // No pair found
    }
}
twoSum([2,6,5,8,11], 14);