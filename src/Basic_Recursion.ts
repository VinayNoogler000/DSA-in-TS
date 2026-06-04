export default class BasicRecursion {
    
    // Problem 1: Given an integer N, write a program to print your name N times.
    public static printNameNthTimes(name:string, n:number=5): void { // Both TC & SC == O(n), cuz Nth times recursive func() is called and added to Call Stack as stack-frames.
        if (n === 0) { // Base Condition 
            return;
        }
        
        console.log("Name:", name); // Operation to Perform
        
        BasicRecursion.printNameNthTimes(name, --n); // Next Recursive Call
    }
    
    
    
    
    // Problem 2: Given an integer N, write a program to print numbers from 1 to N.
    // Using Forward Recursion - Both TC & SC == O(n)
    public static printNumsFromOneTillN(n:number=5, count:number=1): void { 
        if (count > n ) { // Base Condition
            return;
        }
        
        console.log(count);
        BasicRecursion.printNumsFromOneTillN(n, ++count);
    }

    // Using Backtracking - Both TC & SC == O(n)
    public static printNumsFromOneTillN_BT(n:number=5): void { 
        if (n < 1 ) { // Base Condition
            return;
        }
        
        BasicRecursion.printNumsFromOneTillN_BT(n-1);
        process.stdout.write(n + ' ');
    }




    // Problem 3: Given an integer N, write a program to print numbers from N to 1.
    // Using Forward Recursion - Both TC & SC == O(n)
    public static printNumsFromNto1(n:number=5): void { 
        if (n < 1 ) return;
        
        process.stdout.write(n + ' ');
        BasicRecursion.printNumsFromNto1(n-1);
    }

    // Using Backtracking - Both TC & SC == O(n)
    public static printNumsFromNto1_BT(n:number=5, count:number=1): void { 
        if (count > n ) return;
        
        BasicRecursion.printNumsFromNto1_BT(n, count+1);
        process.stdout.write(count + ' ');
    }



    
    // Problem 4:  Given a number ‘N’, find out the sum of the first N natural numbers .
    
    // Recursive Approach - Both TC & SC == O(n)
    public static sumOfNumsFrom1toN_BT(n:number): number { // (Backward Recursion or Backtracking) 
        if (n === 1) {
            return 1; // sum
        }

        return n + BasicRecursion.sumOfNumsFrom1toN_BT(n-1);
    }

    public static sumOfNumsFrom1toN_FR(n:number, sum:number=0): number { // (Forward Recursion)
        if (n < 1) return sum;

        sum += n;
        return BasicRecursion.sumOfNumsFrom1toN_FR(n-1, sum);
    }

    // Brute-Force Approach using Loop [ TC = O(n) && SC = O(1) ]
    public static sumOfNumsFrom1toN_Loop(n:number): number {
        let sum = 0;
        for (let i=1; i<=n; i++) {
            sum += i;
        }
        return sum;
    }

    // Optimal Approach using Formula [ Both TC && SC == O(1) ]
    public static sumOfNumsFrom1toN_Formula(n:number): number {
        return n * (n + 1) / 2;
    }




    // Problem 5: Given a number N, print its factorial.

    // Brute-Force Approach (looping) - [ TC = O(n) && SC = O(1) ]
    public static factorial(n:number=5) {
        let factorial = 1;

        for (let i=2; i<=n; i++) {
            factorial *= i;
        }

        process.stdout.write(factorial + '');
    }

    // Recursive Solution (Backtracking) - [ TC & SC = O(n) ]
    public static factorial_BT(n:number=5): number {
        if (n === 0) return 1; // Factorial of 0 is 1

        return n * BasicRecursion.factorial_BT(n-1);
    }




    // Problem 6: You are given an array. The task is to reverse the array and print it.
    
    // Brute-Force Approach (looping) - [ TC = O(n) && SC = O(n) ]
    public static reverseArr_Loop(arr:number[]): number[] {
        let n = arr.length, reverseArr:number[] = [];
        
        for (let i=n-1, j=0; i>=0 && j<n; i--, j++){
            const val = arr[i];

            if (val !== undefined ) {
                reverseArr[j] = val;
            }
        }    

        return reverseArr;
    }

    // Better Approach (Two Pointer) - [ TC = O(n/2 or n, cuz 2 is constant) && SC = O(1) ]
    public static reverseArr_Pointers(arr:number[]): number[] {
        let start = 0, end = arr.length-1, temp:number;

        while (start < end) { // O(n/2)
            temp = arr[start]!;
            arr[start] = arr[end]!;
            arr[end] = temp;

            start++;
            end--;
        }

        return arr;
    }

    // Using Built-In Libraries - [ TC = O(n) && SC = O(1) ]
    public static reverseArr_Builtin(arr:number[]): number[] {
        return arr.reverse();
    }




    // Problem 7: Given a string, check if the string is palindrome or not. A string is said to be palindrome if the reverse of the string is the same as the string.

    // Brute-Force Approach (looping) - [ TC = O(n) && SC = O(n) ]
    public static isPalindrome(str: string="ABCcba"): void{
        let reverse:string = "";
        for (let i=str.length-1; i>=0; i--) {
            reverse += str.charAt(i);
        }

        if (reverse.toLowerCase() === str.toLowerCase()) console.log("String is a Palindrome");
        else console.log("String is NOT a Palindrome");
    }

    // Better Approach (Two Pointers) - [ TC = O(n) && SC = O(1) ]
    public static isPalindrome_TP(str: string="ABCcba"): void {
        let start = 0, end = str.length-1;

        while (start < end) {
            if (str[start]!.toLowerCase() !== str[end]!.toLowerCase() ) {
                console.log("String is NOT a Palindrome");
                break;
            }

            start++; end--;
        }

        if (start >= end) {
            console.log("String is a Palindrome");
        }
    }

    // Another Approach (Recursion) - [ TC = O(n) && SC = (n) ]
    public static isPalindrome_R(str:string="ABCcba", start:number=0, end:number=str.length-1): boolean {
        if (str.length === 1 || (start >= end) ) {
            console.log("String is a Palindrome");
            return true;
        }
        
        if (str[start]?.toLowerCase() !== str[end]?.toLowerCase() ) {
            console.log("String is NOT a Palindrome");
            return false;
        }

        return BasicRecursion.isPalindrome_R(str, start+1, end-1);
    }




    // Problem 7: Given an integer N. Print the Fibonacci series up to the Nth term.
    
    // Brute Force Approach - [ TC = O(n) && SC = O(n) ]
    public static Fibonacci(n:number): number {
        if (n === 0) return 0;
        else if (n === 1) return 1;

        // Instructions for N > 1
        let fib:number[] = new Array<number>(n+1).fill(0); // Fibonacci;
        fib[0] = 0; fib[1] = 1;

        for (let i=2; i<=n; i++) {
            fib[i] = fib[i-1]! + fib[i-2]!;
        }

        return fib[n]!;
    }

    // Better Approach - [ TC = O(n) && SC = O(1) ]
    public static Fibonacci2(n:number): number {
        if (n === 0) return 0;
        else if (n === 1) return 1;

        // Instructions for N > 1
        let last: number = 1, secondLast: number = 0, fibOfI:number = 0;

        for (let i = 2; i <= n; i++) {
            fibOfI = last + secondLast;
            secondLast = last;
            last = fibOfI;
        }

        return fibOfI;
    }

    // Recursive Approach - [ TC = O(2^n) && SC = O(n) ] - NOT RECOMMENDED
    public static Fibonacci3(n:number): number {
        if (n <= 1) return n;

        return BasicRecursion.Fibonacci3(n-1) + BasicRecursion.Fibonacci3(n-2);
    }

    // Optimal Approach (Using Recursion & Map)
    public static Fibonacci4(n:number): number {
        if (n <= 1) return n;

        if (n > 1 && cache.has(n)) return cache.get(n)!;

        const fibonacci = this.Fibonacci4(n-1) + this.Fibonacci4(n-2)

        cache.set(n, fibonacci);

        return fibonacci;
    }
}

// BasicRecursion.printNameNthTimes("Vinay", 5);
// BasicRecursion.printNumsFromOneTillN();
// BasicRecursion.printNumsFromOneTillN_BT();
// BasicRecursion.printNumsFromNto1(8); 
// console.log();
// BasicRecursion.printNumsFromNto1_BT(8);
// console.log(BasicRecursion.sumOfNumsFrom1toN_BT(9));
// console.log(BasicRecursion.sumOfNumsFrom1toN_FR(9));
// console.log(BasicRecursion.sumOfNumsFrom1toN_Loop(9));
// console.log(BasicRecursion.sumOfNumsFrom1toN_Formula(9));
// BasicRecursion.factorial(3);
// console.log("\n" + BasicRecursion.factorial_BT(3));
// console.log(BasicRecursion.reverseArr_Loop([1, 2, 3, 4, 5]));
// console.log(BasicRecursion.reverseArr_Pointers([1, 2, 3, 4, 5]));
// console.log(BasicRecursion.reverseArr_Builtin([1, 2, 3, 4, 5]));
// BasicRecursion.isPalindrome("TAKE U FORWARD");
// BasicRecursion.isPalindrome_TP("TAKE U FORWARD");
// BasicRecursion.isPalindrome_R("TAKE U FORWARD");
const cache = new Map<number, number>();
console.log(BasicRecursion.Fibonacci4(10000));