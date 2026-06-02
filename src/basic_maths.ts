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
console.log(getAllDivisors2(58));