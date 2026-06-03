// Problem 1: Given an integer N, write a program to print your name N times.
function printNameNthTimes(name:string, n:number): void { // Both TC & SC == O(n), cuz Nth times recursive func() is called and added to Call Stack as stack-frames.
    if (n === 0) { // Base Condition 
        return;
    }

    console.log("Name:", name); // Operation to Perform
    
    printNameNthTimes(name, --n); // Next Recursive Call
}
printNameNthTimes("Vinay", 5);