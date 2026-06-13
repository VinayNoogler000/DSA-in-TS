// Selection Sorting - TC O(N*N) for worst, avg and best cases
// It selects the Minimum num and swaps it with the 1st num in the Unsorted Array
export function selectionSort(nums:number[]=[13,46,24,52,20,9], n=nums.length):number[] {
    let min:number, temp:number;
    
    // Iterate Unsorted Part of Nums[], where 'i' is the starting idx
    // getting updated on every iteration of loop
    for (let i=0; i<n; i++) {
        min = i; // stores the minimum element's index

        // Iterate the remaining array and find minimum element
        // by comparing every jth element with ith element.
        for (let j=i+1; j<n; j++) {
            if (nums[j]! < nums[min]!) {
                min = j;
            }
        }

        // Swap
        temp = nums[i]!;
        nums[i] = nums[min]!;
        nums[min] = temp;
    }

    return nums;
}




// Bubble Sorting - TC O(N*N) & SC O(1) for worst, avg & best cases (if ignoring 48th line)
// Takes the Maximum num and pushes it to the last, by performing adjacent swaps
export function bubbleSort(nums:number[]=[13,46,24,52,20,9], n=nums.length):number[] {
    let temp:number, isSwapped:boolean;

    // Loop from End to Beginning of Nums[]
    for (let i=n-1; i>=0; i--) {
        isSwapped = false;

        // Iterate the Unsorted Part of Nums[] from j to i-1
        for (let j=0; j<i; j++) {

            // Do adjacent swaps, if nums[j] is greater than nums[j+1]
            if (nums[j]! > nums[j+1]!) {
                temp = nums[j]!;
                nums[j] = nums[j+1]!;
                nums[j+1] = temp;
                isSwapped = true;
            }
        }
        
        // Break from the loops, if the nums[] is already sorted (represented by "isSwapped = false")
        if (!isSwapped) break; // this line comes in Optimal Approach, making TC O(2N) for worst & 
        // avg cases, and O(N) for the best case (when nums[] is already sorted)
    }
    
    return nums;
}




// Insertion Sorting - TC O(N*N) for worst & avg cases, and O(N) for best cases (sorted array) & SC O(1) 
// Takes an Element and place/insert it in the correct position
export function insertionSort(nums=[13,46,24,52,20,9], n=nums.length):number[] {
    for (let i=1; i<n; i++) { // iterate and select every element in the nums[]
        const key = nums[i]!;
        
        // find out whether the nums from 0 to i-1 is in right order or not. If not (2nd condition in loop), then break loop
        let j = i-1;
        while (j>=0 && nums[j]! > key) { 
            nums[j+1] = nums[j]!; // shift element to right by 1, because wrong order of jth val and key
            j--;
        }
        nums[j+1] = key; // place the key at the correct position

        //Or - Another Approach, but easier and same TC
        // let j = i;
        // while (j>0 && nums[j-1]! > nums[j]!) { 
        //     // Swap
        //     let temp = nums[j-1]!;
        //     nums[j-1] = nums[j]!
        //     nums[j] = temp;
    
        //     j--;
        // }
    }

    return nums;
}




// Merge Sorting - TC O(N*logN) where 'logN' is for no. of times the array is divided into halves and 'N' is for loops to merge the array, && SC O(N) for result[], ignoring recursive calls getting stored in call stack because it's SC is 'logN'
// Approach is Divide array into Two Halves and Merge them in sorted form
export function mergeSort(nums=[13,46,24,52,20,9], startIdx:number=0, endIdx:number=nums.length-1):void {
    if (nums.length <= 1 || startIdx >= endIdx) { // Base Case, where there will be 1 or less element in array
        return;
    }

    // Divide the Array to Easily Sort them - O(logN) 
    const mid = Math.floor( (startIdx + endIdx) / 2 );
    mergeSort(nums, startIdx, mid);
    mergeSort(nums, mid+1, endIdx);

    // Merge the Sorted Array - O(N)
    let i = startIdx, j = mid+1; // iterators of 1st half, & 2nd half, respectively
    const result = new Array<number>();

    while (i <= mid && j <= endIdx) { // iterate both halves, compare elements and merge
        if (nums[i]! <= nums[j]!) {
            result.push(nums[i++]!);
        }
        else {
            result.push(nums[j++]!);
        }
    }

    while (i <= mid) { // if first half iteration isn't completed, then put all it's remaining elements in the result arr, without changing the order
        result.push(nums[i++]!);
    }

    while(j <= endIdx) { // if second half iteration isn't completed, put all it's remaining elements in the result arr, without changing the order
        result.push(nums[j++]!);
    }

    // Update the Original Array from start to end indices
    for (i=startIdx; i<=endIdx; i++) {
        nums[i] = result[i - startIdx]!; // cuz, result[] starts counting from 0, whereas nums[] starts from startIdx, so to offset the value we use expression 'i - startIdx'
    }


    if (result.length === nums.length) process.stdout.write(nums.join(", ") + "\n");
} 

// const arr = [5, 4, 3, 2, 1];
mergeSort();
// console.log(arr);