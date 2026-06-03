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
    public static printNumsFromOneTillN(n:number=5, count:number=1): void { // Both TC & SC == O(n)
        if (count > n ) { // Base Condition
            return;
        }
        
        console.log(count);
        BasicRecursion.printNumsFromOneTillN(n, ++count);
    }
}

// BasicRecursion.printNameNthTimes("Vinay", 5);
BasicRecursion.printNumsFromOneTillN();