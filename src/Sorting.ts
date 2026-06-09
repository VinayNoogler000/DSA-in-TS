// Selection Sorting - TC O(n*n)
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
process.stdout.write(selectionSort([5,4,3,2,1]) + " ");