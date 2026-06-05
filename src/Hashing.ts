// Problem 1: Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, we need to find out how many times the number appears in the array. For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. 

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
findCountOfNumsInArr2();