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
}

// BasicRecursion.printNameNthTimes("Vinay", 5);
// BasicRecursion.printNumsFromOneTillN();
// BasicRecursion.printNumsFromOneTillN_BT();
// BasicRecursion.printNumsFromNto1(8); 
// console.log();
// BasicRecursion.printNumsFromNto1_BT(8);
console.log(BasicRecursion.sumOfNumsFrom1toN_BT(9));
console.log(BasicRecursion.sumOfNumsFrom1toN_FR(9));
console.log(BasicRecursion.sumOfNumsFrom1toN_Loop(9));
console.log(BasicRecursion.sumOfNumsFrom1toN_Formula(9));