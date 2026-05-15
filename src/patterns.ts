// NOTE: You can run the entire file at once by using node/bun (or other runtime envs) to print all the patterns and confirm whether the code is working fine or not:


/*
Pattern 1:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/
console.log("Pattern 1");
for (let i:number = 0; i<5; i++) {
    console.log("* * * * *");
}
console.log("\n");




/*
Pattern 2:
12345
1234
123
12
1
*/
console.log("Pattern 2:");
let rows1:number = 5;
for (let i:number = 0; i < rows1; i++) {
    let pattern1:string = ""; //pattern

    for (let j:number = 1; j <= (rows1-i); j++) {
        pattern1 = pattern1.concat(j.toString());
    }
    console.log(pattern1);
}
console.log("\n");




/*
Pattern 3:
    *
   ***
  *****
 *******
*********
*/
/*
LOGIC:
i -> k
1 = 1 (i*2 - 1)
2 = 3
3 = 5
4 = 7
5 = 9
*/
console.log("Pattern 3");
let rows2:number = 5;
for (let i:number = 1; i<=rows2; i++) {
    let spaces:string = '';
    for (let j:number = 1; j <= (rows2-i); j++) {
        spaces += ' ';
    }

    let stars:string = '';
    for (let k:number = 1; k<= (i*2-1); k++) {
        stars += '*';
    }

    console.log(`${spaces}${stars}`);
}
console.log("\n");




/*
Pattern:
 *********
  *******
   *****
    ***
     *
*/
/*
LOGIC:
i -> k
5 = 9
4 = 7
3 = 5
2 = 3
1 = 1
*/
console.log("Pattern 4:");
let rows3: number = 5;
let pattern3:string;
for (let i:number = rows3; i>=1; i--) {
    // print spaces
    pattern3 = "";
    for (let j:number = 0; j<=(rows3-i); j++) {
        pattern3 += ' ';
    }

    // print stars
    for (let k:number = 0; k<(i*2-1); k++) {
        pattern3 = pattern3.concat('*');
    }

    console.log(pattern3);
}
console.log("\n");




/*
Pattern 5:
     *
    ***
   *****
  *******
 *********
 *********
  *******
   *****
    ***
     *
*/
console.log("Pattern 5:");
let rows4:number = 10, hOfRows4:number = (rows4/2), pattern4:string;
for(let i:number = 0; i<hOfRows4; i++) { // Print Upper Triangle
    pattern4 = '';
    
    // print spaces
    for (let j:number = 0; j<(hOfRows4-i); j++) {
        pattern4 += ' ';
    }
    
    // print stars
    for (let k:number = 0; k<=(i*2); k++) {
        pattern4 = pattern4.concat('*');
    }
    console.log(pattern4);
}
for (let i:number = hOfRows4; i>0; i--) { // Print Bottom Triangle
    pattern4 = '';
    
    // print spaces
    for (let j:number = hOfRows4-i; j>=0; j--) {
        pattern4 += ' ';
    }
        
    // print stars
    for (let k:number = 1; k<(i*2); k++) {
        pattern4 = pattern4.concat('*');
    }    
    console.log(pattern4);
}
console.log("\n");



/*
Pattern 6:
*
**
***
****
*****
****
***
**
*
*/
console.log("Pattern 6:");
const rows5: number = 9;
let firstHalfRows5 = Math.floor(rows5/2), nextHalfRows5 = Math.ceil(rows5/2), pattern5:string;

// print 1st Half of Pattern
for (let i:number = 0; i<firstHalfRows5; i++) {
    pattern5 = '';

    for (let j:number = 0; j<=i; j++) {
        pattern5 += '*';
    }

    console.log(pattern5);
}

// print 2nd Half of Pattern
for (let i:number = nextHalfRows5; i>0; i--) {
    pattern5 = '';

    for (let j:number = 0; j<i; j++) {
        pattern5 += '*';
    }
    console.log(pattern5);
}
console.log("\n");




/*
Pattern 7:
0 
0  1 
1  0  1 
0  1  0  1 
1  0  1  0  1 
*/
console.log("Pattern 7:");
const rows6: number = 5;
let pattern6:string;
for (let i:number = 0; i<rows6; i++) {
    pattern6 = ''
    
    for (let j:number = 0; j<=i; j++) {
        if ((i === 0 && j === 0) || (i+j) % 2 != 0) { // prints '0' when at 0th position or i+j == odd
            pattern6 += " 0 ";
        }
        else if ( (i+j) % 2 === 0) { // prints '1' when i+j == even
            pattern6 += " 1 ";
        }
    }

    console.log(pattern6);
}
console.log("\n");




/*
Pattern:
1      1
12    21
123  321
12344321
*/
console.log("Pattern 8:");
const rows7:number = 4;
let pattern7:string;
for (let i:number = 1, spaces:number = (rows7*2-2); i<=rows7; i++, spaces -= 2) {
    pattern7 = '';
    
    // prints 1st Part Number
    for (let j:number = 1; j<=i; j++) {
        pattern7 += j;
    }

    // prints Mid spaces
    for (let k:number = 1; k<=spaces; k++) {
        pattern7 += ' ';
    }

    // print Last Part Number
    for (let l:number = i; l>=1; l--) {
        pattern7 += l;
    }

    console.log(pattern7);
}
console.log("\n");