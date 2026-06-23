export function reverseNum(arr:number[], start:number, end:number): void {
    while (start < end) { // TC O(n/2) => O(n)
        [ arr[start], arr[end] ] = [ arr[end]!, arr[start]! ];
        start++;
        end--;
    }
}