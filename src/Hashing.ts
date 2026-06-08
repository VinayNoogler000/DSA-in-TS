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

// Optimal Approach (Using ArrayHashing) --> TC = O(max(N,Q)) & SC = O(max(q)), where N is length of nums[], Q is length of queries[], and 'q' is elements of queries[]
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

// Best Approach (Using MAPS) --> TC = O(max(N,Q)) & SC = O(max(D)), where 'D' is the maximum distinct nums in nums[], 'cause Map will store only distinct numbers from nums[], without any extra numbers, unlike Array-Hashing (means, better  SC than Arrays)
function findCountOfNumsInArr3(nums:number[]=[1, 2, 1, 3, 2], queries:number[]=[1, 3, 4, 2, 10]): void {
    const count = new Map<number, number>(); 
    let freq:number;

    // Store the Frequency of Each Number of Nums[] (Pre-Store)
    for (let n of nums) { // TC = O(n), wher n is length of nums[]
        if( count.has(n) ) freq = count.get(n)!;
        else freq = 0;

        count.set(n, ++freq);
    }

    // Print the Frequency of Each Number in Queries[] (Fetching)
    for (let q of queries) { // TC = O(q), wher q is length of queries[]
        freq = count.has(q) ? count.get(q)! : 0;
        process.stdout.write( freq + " " );
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

// Optimal Approach (Using ArrayHashing) --> TC = O(max(N,Q)) & SC = O(1), where N is length of str, Q is length of 
// queries[], and constant SC because count[] size remains fixed at: 10,26,52,62,64,256, based on chars in string, 
// of all types. 
function findCountOfCharInString2(str:string="abcdabefcBCBD900%@**", queries:string[]=['a', 'c', 'z', 'B', 'D', '1', '0', '&', '*']): void {
    let countHashLen = getMaxLengthOfString(str);
    const countHash = new Array<number>(countHashLen).fill(0); // stores the frequency of each query char in queries
                                                               // [], from 'a' to 'z', 'A' to 'Z'

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


// Best Approach (Using MAPS) --> TC = O(max(N,Q)) & SC = O(max(D)), where 'D' is the maximum unique chars in string, 'cause Map will store only unique chars, without any extra characters, unlike Array-Hashing (means, better SC than Arrays)
function findCountOfCharInString3(str:string="abcdabefcBCBD900%@**", queries:string[]=['a', 'c', 'z', 'B', 'D', '1', '0', '&', '*']): void {
    const charCount = new Map<string, number>(); // total size of map for default str is just 14, whereas the size of array in optimal approach for the same input is 256, which is more than 18 times the size of this Map.
    let freq:number;

    // Pre-Storing Stage
    for (let ch of str) {
        if (charCount.has(ch)) freq = charCount.get(ch)!;
        else freq = 0;
        charCount.set(ch, ++freq);
    }


    console.log(); // for moving output to next line
    // Fetching Stage
    for (let q of queries) {
        process.stdout.write( ( charCount.get(q) || 0 ) + " " );
    }
}
findCountOfNumsInArr3();
findCountOfCharInString3();