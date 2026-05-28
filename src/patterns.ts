// // NOTE: You can run the entire file at once by using node/bun (or other runtime envs) to print all the patterns and confirm whether the code is working fine or not:

let pattern:string, element:string | number;

/*
Pattern 1:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/
function pattern1(rows:number = 5): void {
    console.log("Pattern 1");
    for (let i:number = 0; i<rows; i++) {
        console.log("* * * * *");
    }
    console.log("\n");
}




/*
Pattern 2:
12345
1234
123
12
1
*/
function pattern2(rows:number = 5): void {
    console.log("Pattern 2:");
    
    for (let i:number = 0; i < rows; i++) {
        pattern = "";
    
        for (let j:number = 1; j <= (rows-i); j++) {
            pattern = pattern.concat(j.toString());
        }
        console.log(pattern);
    }
    console.log("\n");
}




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
function pattern3(rows:number = 5): void{
    console.log("Pattern 3");

    for (let i:number = 1; i<=rows; i++) {
        let spaces:string = '';
        for (let j:number = 1; j <= (rows-i); j++) {
            spaces += ' ';
        }
    
        let stars:string = '';
        for (let k:number = 1; k<= (i*2-1); k++) {
            stars += '*';
        }
    
        console.log(`${spaces}${stars}`);
    }
    console.log("\n");
}




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
function pattern4(rows:number = 5): void {
    console.log("Pattern 4:");

    for (let i:number = rows; i>=1; i--) {
        // print spaces
        pattern = "";
        for (let j:number = 0; j<=(rows-i); j++) {
            pattern += ' ';
        }
    
        // print stars
        for (let k:number = 0; k<(i*2-1); k++) {
            pattern = pattern.concat('*');
        }
    
        console.log(pattern);
    }
    console.log("\n");
}




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
function pattern5(rows:number = 10): void {
    console.log("Pattern 5:");

    let hOfRows:number = (rows/2);
    for(let i:number = 0; i<hOfRows; i++) { // Print Upper Triangle
        pattern = '';
        
        // print spaces
        for (let j:number = 0; j<(hOfRows-i); j++) {
            pattern += ' ';
        }
        
        // print stars
        for (let k:number = 0; k<=(i*2); k++) {
            pattern = pattern.concat('*');
        }
        console.log(pattern);
    }
    for (let i:number = hOfRows; i>0; i--) { // Print Bottom Triangle
        pattern = '';
        
        // print spaces
        for (let j:number = hOfRows-i; j>=0; j--) {
            pattern += ' ';
        }
            
        // print stars
        for (let k:number = 1; k<(i*2); k++) {
            pattern = pattern.concat('*');
        }    
        console.log(pattern);
    }
    console.log("\n");
}




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
function pattern6(rows:number=5):void {
    console.log("Pattern 6:");
    let firstHalfRows = Math.floor(rows/2), nextHalfRows = Math.ceil(rows/2);
    
    // print 1st Half of Pattern
    for (let i:number = 0; i<firstHalfRows; i++) {
        pattern = '';
    
        for (let j:number = 0; j<=i; j++) {
            pattern += '*';
        }
    
        console.log(pattern);
    }
    
    // print 2nd Half of Pattern
    for (let i:number = nextHalfRows; i>0; i--) {
        pattern = '';
    
        for (let j:number = 0; j<i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
    console.log("\n");
}




/*
Pattern 7:
0 
0  1 
1  0  1 
0  1  0  1 
1  0  1  0  1 
*/
function pattern7(rows:number=5):void {
    console.log("Pattern 7:");
    let pattern6:string;
    for (let i:number = 0; i<rows; i++) {
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
}




/*
Pattern 8:
1      1
12    21
123  321
12344321
*/
function pattern8(rows:number=4):void {
    console.log("Pattern 8:");
    for (let i:number = 1, spaces:number = (rows*2-2); i<=rows; i++, spaces -= 2) {
        pattern = '';
        
        // prints 1st Part Number
        for (let j:number = 1; j<=i; j++) {
            pattern += j;
        }
    
        // prints Mid spaces
        for (let k:number = 1; k<=spaces; k++) {
            pattern += ' ';
        }
    
        // print Last Part Number
        for (let l:number = i; l>=1; l--) {
            pattern += l;
        }
    
        console.log(pattern);
    }
    console.log("\n");
}




/*
Pattern 9:
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
*/
function pattern9(rows:number = 5):void {
    console.log("Pattern 9:");

    pattern = "", element = 1;
    for (let i:number = 0; i<rows; i++) {
        for (let j:number = 0; j<=i; j++) {
            pattern += `${element} `;
            element++;
        }
        console.log(pattern);
        pattern = "";
    }

    console.log("\n");
}




/*
Pattern 10:
A 
A B 
A B C 
A B C D 
A B C D E 
*/
function pattern10(rows:number = 8):void {
    console.log("Pattern 10:");
    let pattern = "", element = '';

    for (let i:number = 0; i<rows; i++) {
        element = 'A';
        for (let j:number = 0; j<=i; j++) {
            pattern += `${element} `;
            element = String.fromCharCode(element.charCodeAt(0) + 1); // Increment char(element) by 1
        }
        console.log(pattern);
        pattern = "";
    }

    console.log("\n");
}




/*
Pattern 11:
ABCDE
ABCD
ABC
AB
A
*/
function pattern11(rows:number = 5):void {
    console.log("Pattern 11:");
    pattern = "", element = '';

    for (let i:number = 5; i>=1; i--) {
        element = 'A';
        for (let j:number = 1; j<=i; j++) {
            pattern += element;
            element = String.fromCharCode(element.charCodeAt(0) + 1);
        }
        console.log(pattern);
        pattern = "";
    }
}




/*
Pattern 12:
A
BB
CCC
DDDD
EEEEE
*/
function pattern12(rows:number = 5):void {
    console.log("Pattern 12:");
    let pattern = "", element = 'A';

    for (let i=0; i<rows; i++) {
        for (let j=0; j<=i; j++) {
            pattern += element;
        }
        console.log(pattern);
        pattern = "";
        element = String.fromCharCode(element.charCodeAt(0) + 1);
    }
}




/*
Pattern 13:
   A
  ABA
 ABCBA
ABCDCBA
*/
function pattern13(rows:number = 4):void {
    console.log("Pattern 13:");
    
    for (let i=1; i<=rows; i++) { // O(n*n) [ O(n*(n+n)) => O(n*2n) => O(n*n) ]
        let pattern = "", element = 'A';

        // print spaces
        for (let j=rows; j>i; j--) { // O(n)
            pattern += ' ';
        }

        // print alphabets
        const cols = i * 2 - 1;
        for (let k=1; k<=cols; k++) { // O(n)
            pattern += element;
            
            if (k !== 1 && k >= cols/2) { // 'k' has reached or crossed the mid coloumn of the row, so print backwards by decrementing the characters/element by 1
                element = String.fromCharCode(element.charCodeAt(0) - 1);
            }
            else { // 'k' has NOT reached the mid coloumn of the row, so print normally by incrementing the characters/element by 1
                element = String.fromCharCode(element.charCodeAt(0) + 1);
            }
        }

        console.log(pattern);
    }
}

pattern13();