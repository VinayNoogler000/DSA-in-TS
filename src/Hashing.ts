// Problem 1: Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, we need to find out how many times the number appears in the array. For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. 

import { getMaxLengthOfString, isStringHasLowerCase } from "./util/stringFunctions";

// Brute Force Approach --> TC = O(Q*N) & SC = O(Q), where Q is total elements in Queries[]
function findCountOfNumsInArr(nums:number[]=[1, 2, 1, 3, 2], queries:number[]=[1, 3, 4, 2, 10]): number[] {
    const count = new Array<number>(queries.length).fill(0); // stores count of queries
    
    for (let i=0; i<queries.length; i++) {
        for (let n of nums) {
            if (queries[i] === n) {
                count[i]!++;
            }
        }
    }

    return count;
}

// Optimal Approach (Using Hashing) --> TC = O(max(N,Q)) & SC = O(max(q)), where N is length of nums[], Q is length of queries[], and 'q' is elements of queries[]
function findCountOfNumsInArr2(nums:number[]=[1, 2, 1, 3, 2], queries:number[]=[1, 3, 4, 2, 10]): void {
    const count = new Array<number>(Math.max(...queries)+1).fill(0); // stores the frequency of each query num in nums[], but different than the count[] in brute-force approach, 'cause the index here is === element of nums[] storing it's frequency/count in nums[] --> TC & SC = O( max(queries[]) )

    // Store the Frequency of Each Number of Nums[] (Pre-Store)
    for (let n of nums) { // TC = O(n), wher n is length of nums[]
        count[n]!++;
    }

    // Print the Frequency of Each Number in Queries[] (Fetching)
    for (let q of queries) { // TC = O(q), wher q is length of queries[]
        console.log(count[q]);
    }
}




// Problem 2: Given the string: “abcdabefc” we are given some queries: [a, c, z]. For each query, we need to find out how many times the character appears in the string. For example, if the query is ‘a’ our answer would be 2, and if the query is ‘z’ the answer will be 0. 

// Brute Force Approach --> TC = O(Q*N) & SC = O(Q), where Q is total characters in Queries[]
function findCountOfCharsInString(str:string="abcdabefc", queries:string[]=['a', 'c', 'z']): number[] {
    const count = new Array<number>(queries.length).fill(0); // stores count of queries
    
    for (let i=0; i<queries.length; i++) {
        for (let c of str) {
            if (queries[i] === c) {
                count[i]!++;
            }
        }
    }

    return count;
}

// Optimal Approach (Using Hashing) --> TC = O(max(N,Q)) & SC = O(1), where N is length of str, Q is length of 
// queries[], and constant SC because count[] size remains fixed at: 10,26,52,62,64,256, based on chars in string, 
// of all types. 
function findCountOfCharInString2(str:string="abcdabefc", queries:string[]=['a', 'c', 'z']): void {
    let countHashLen = getMaxLengthOfString(str);
    const countHash = new Array<number>(countHashLen).fill(0); // stores the frequency of each query char in queries
                                                               // [], from 'a' to 'z', 'A' to 'Z'

    console.log(countHashLen);

    // define a helper function to calculate ASCII of char (of str) which will be used as 
    // it's index in countHash[] to get it's frequency in constant O(1) time.
    let calcIdx = (ch:string):number => 0; 
    if (countHashLen === 26) { // char only ranges either a-z or A-Z 
        if (isStringHasLowerCase(str)) {
            calcIdx = (ch:string) => ch.charCodeAt(0) - 97;
        }
        else {
            calcIdx = (ch:string) => ch.charCodeAt(0) - 65;
        }
    }
    else if (countHashLen === 10) { // char only ranges 0-9
        calcIdx = (ch:string) => ch.charCodeAt(0) - 48;
    }
    else {
        calcIdx = (ch:string) => ch.charCodeAt(0);
    }

    // Store the Frequency of Each Character of str (Pre-Store)
    for (let ch of str) { // TC = O(n), wher n is length of str
        const idx = calcIdx(ch); // ASCII Code of 'ch'
        countHash[idx]!++;
    }
    
    // Print the Frequency of Each Number in Queries[] (Fetching)
    for (let q of queries) { // TC = O(q), wher q is length of queries[]
        process.stdout.write(countHash[calcIdx(q)] + ' ');
    }
}
// console.log(findCountOfCharsInString());
findCountOfCharInString2("%&*&%*$)^&)abc8911FFGH", ['&', '(', ')', 'a', '1', 'F']);