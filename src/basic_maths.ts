// Q1: Given an integer N, return the number of digits in N.
function countDigits( n:number=12345 ):number { // output = 5
    let count = 0, lastDigit:number;

    while (n > 0) {
        lastDigit = n % 10;
        count++;
        n = Math.floor(n/10); // removing last digit
    }
    
    return count;
}

function countDigits2( n:number=12345 ):number { // Another Approach using String - O()
    return n.toString().length;
}
