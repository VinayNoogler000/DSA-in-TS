import { get } from "node:http";

// Q1: Given an integer N, return the number of digits in N.
function countDigits( n:number=12345 ):number { // Brute-Force Approach [TC == O(log10(n)), cuz log10(n) is equals to count of digits in n === no. of ops. in this approach && SC == O(1)]
    let count = 0, lastDigit:number;

    while (n > 0) { 
        lastDigit = n % 10;
        count++;
        n = Math.floor(n/10); // removing last digit
    }
    
    return count;
}

function countDigits2( n:number=12345 ):number { // Another Approach using String [TC & SC == O(log10(n)), cuz string is created of that size]
    return n.toString().length;
}

function countDigits3( n:number=7789 ):number { // Optimal Approach by using Math.log10() method [TC & SC == O(1)]
    let count = Math.floor(Math.log10(n) + 1);
    return count;
}



// Q2: Given an integer N return the reverse of the given number.
function reverseNum(n:number=12345):number { // Brute-Force Approach [TC == O(log10(n)) && SC == O(1) ]
    let reverse = 0, lastDigit:number;

    while (n > 0) {
        lastDigit = n % 10;
        reverse = (reverse * 10) + lastDigit;
        n = Math.floor(n/10);
    }

    return reverse;
}




// Q3: Given an integer N, return true if it is a palindrome else return false.
function isPalindrome(n:number=4554):boolean { // Brute-Force Approach [TC == O(log10(n)) && SC == O(1) ]
    let ogNum = n, reverse = 0, lastDigit:number;

    while (n > 0) {
        lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n = Math.floor(n/10);
    }
    
    if (ogNum === reverse) { 
        return true;
    }
    return false;
}




// Q4: Given two integers N1 and N2, find their greatest common divisor.
function GCD(n1:number, n2:number):number { // Brute-Force Approach [TC == O(min(n1,n2)) && SC == O(1) ]
    let currDivisor = 1, gcd = 1, minNum = n1 < n2 ? n1 : n2;  
    
    while (currDivisor <= minNum) {
        if (n1 % currDivisor === 0 && n2 % currDivisor === 0 ) { // common divisor found
            gcd = currDivisor;
        }
        currDivisor++;
    }

    return gcd;
}

function GCD2(n1:number, n2:number):number { // Better Approach [TC == O(min(n1,n2)) && SC == O(1) ]
    let minNum = Math.min(n1,n2), currDivisor = minNum, gcd = 1;  
    
    while (currDivisor >= 1) { // loop iterations are decreased in this approach, than 1st approach
        if (n1 % currDivisor === 0 && n2 % currDivisor === 0 ) { // greatest common divisor found
            gcd = currDivisor;
            break;
        }
        currDivisor--;
    }

    return gcd;
}

function GCD3(n1:number, n2:number):number { // Best Approach (Euclidean Algo.) [TC == O(min(n1,n2)) && SC == O(1) ] 
    
    while (n1 > 0 && n2 > 0) {
        if (n1 > n2) { // n1 greater
            n1 %= n2;
        }
        else { // n2 greater or equal to n1
            n2 %= n1;
        }
    }

    return (n1 === 0 ? n2 : n1);
}




// Q5: Given an integer N, return true it is an Armstrong number otherwise return false.
// An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
function isArmstrong(n:number=153):boolean { // Brute-Force Approach [ TC == O(log10(n)) && SC == O(1) ]
    let dupNum = n, lastDigit:number, sum = 0, digitsCount = Math.floor(Math.log10(n) + 1);

    while (dupNum > 0) {
        lastDigit = dupNum%10;
        sum += Math.pow(lastDigit, digitsCount);
        dupNum = Math.floor(dupNum/10);
    }

    return (sum === n);
}




// Q6: Given an integer N, return all divisors of N.
function getAllDivisors(n:number=36):number[] { // Brute-Force Approach [ TC == O(n) && SC == O(n), due to result[] ]
    let divisor = 1, result:number[] = [];

    while (divisor <= n) {
        if (n % divisor === 0) {
            result.push(divisor);
        }
        divisor++;
    }

    return result;
}

// Better Approach (all divisors of n <= n/2) [ TC == O(n/2) && SC == O(sqrt(n)), cuz that no. of divisors is 
// stored by the result[] ]
function getAllDivisors2(n:number=36):number[] { 
    let divisor = 1, result:number[] = [];

    while (divisor <= n/2) {
        if (n % divisor === 0) {
            result.push(divisor);
        }
        divisor++;
    }
    result.push(n);

    return result;
}

// Optimal Approach (all unique divisors of n <= 2*sqrt(n), and the remaining divisors we can find by calculating)
// [ TC == O(sqrt(n)) && SC == O(sqrt(n)) ]
function getAllDivisors3(n:number=36):number[] {
    let result:number[] = [];

    for(let i=1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) { //divisor found
            result.push(i); // divisor added  

            if (i !== (n/i)) // condition to prevent adding duplicated of those divisors whose square == n 
                result.push(n/i); // matching divisor added
        }
    }

    return result;
}




// Q6: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself, making the total number of divisors only 2.
function isPrime(n:number=10): boolean { // Brute-Force approach - [TC O(n) && SC 0(1)]
    let divisor = 2;

    while (divisor < n) {
        if (n % divisor === 0) return false;
        divisor++;
    }
    
    return true;
}

function isPrime2(n:number=10): boolean { // Optimal approach - [TC O(sqrt(n)) && SC 0(1)], cuz the unique factors/divisors is always in range 1 to sqrt(n), after that the factors are just repeated.
    let divisor = 2;

    while (divisor <= Math.sqrt(n)) {
        if (n % divisor === 0) return false;
        divisor++;
    }

    return true;
}
console.log(isPrime2(1483));