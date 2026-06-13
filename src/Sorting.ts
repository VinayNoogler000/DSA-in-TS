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
process.stdout.write(bubbleSort() + '');