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
console.log(countDigits3());