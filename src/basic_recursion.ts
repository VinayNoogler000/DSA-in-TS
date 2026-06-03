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
}

// BasicRecursion.printNameNthTimes("Vinay", 5);
// BasicRecursion.printNumsFromOneTillN();
BasicRecursion.printNumsFromOneTillN_BT();
