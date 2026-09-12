// HashMap Implementation

import type { BlobOptions } from "buffer";

type Pair<K, V> = [K, V]

class MyHashMap<K, V> {
    private buckets:Pair<K, V>[][];
    private size:number;

    constructor(size:number=10) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []);
    }

    // Convert any key to a valid array index
    private hash(key:K): number { // TC = O(Key Size) & SC = O(1)
        const keyStr = String(key);
        let sum = 0;
        for (let i=0; i<keyStr.length; i++) {
            sum += keyStr.charCodeAt(i);
        }
        return sum % this.size;
    }

    // 📥 Insert or update a key-value pair
    set(key:K, value:V): void {
        // Get the index of the array/bucket where the key will be stored, or already exists:
        const idx = this.hash(key); 
        const bucket = this.buckets[idx]!;

        // If the key already exists, then update value
        for (const pair of bucket) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // 2. If key doesn't exist, insert new pair
        bucket.push([key, value]);
    }

    // 🔍 Retrieve a value by key
    get(key:K): V | undefined {
        // get bucket index by using hash function
        const idx = this.hash(key);
        const bucket = this.buckets[idx]!;
        
        // If key exists, return value
        for (const pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        // If doesn't exists then return undefined
        return undefined;
    }

    has(key:K): boolean {
        // get bucket index by using hash function
        const idx = this.hash(key);
        const bucket = this.buckets[idx]!;

        // Traverse the pairs in the bucket, and if key exists, return true
        for (const pair of bucket) {
            if (pair[0] === key) return true;
        }

        // If key doesn't exists, return false
        return false;
    }
}

// const students = new MyHashMap<number, string>();

// students.set(101, "Aman");
// students.set(102, "Rohan");

// console.log(students.get(101)); // "Aman"
// console.log(students.has(103)); // false

// students.set(101, "Vinay");

// console.log(students.get(101));

export default MyHashMap;