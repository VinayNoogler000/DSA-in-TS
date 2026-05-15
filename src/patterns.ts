// for (let i:number = 0; i<5; i++) {
//     console.log("* * * * *");
// }
/*

Prints Pattern:
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/



// let rows:number = 5;
// for (let i:number = 0; i < rows; i++) {
//     let p:string = ""; //pattern

//     for (let j:number = 1; j <= (rows-i); j++) {
//         p = p.concat(j.toString());
//     }
//     console.log(p);
// }

/*
Prints Pattern:
12345
1234
123
12
1
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
// let rows:number = 5;
// for (let i:number = 1; i<=rows; i++) {
//     let spaces:string = '';
//     for (let j:number = 1; j <= (rows-i); j++) {
//         spaces += ' ';
//     }

//     let stars:string = '';
//     for (let k:number = 1; k<= (i*2-1); k++) {
//         stars += '*';
//     }

//     console.log(`${spaces}${stars}`);
// }
/*
Prints Pattern:
    *
   ***
  *****
 *******
*********
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
// let rows: number = 5, pattern:string;
// for (let i:number = rows; i>=1; i--) {
//     // print spaces
//     pattern = "";
//     for (let j:number = 0; j<=(rows-i); j++) {
//         pattern += ' ';
//     }

//     // print stars
//     for (let k:number = 0; k<(i*2-1); k++) {
//         pattern = pattern.concat('*');
//     }

//     console.log(pattern);
// }
/*
Prints Pattern:
 *********
  *******
   *****
    ***
     *
*/




// let rows:number = 10, hOfRows:number = (rows/2), pattern:string;
// for(let i:number = 0; i<hOfRows; i++) { // Print Upper Triangle
//     pattern = '';
    
//     // print spaces
//     for (let j:number = 0; j<(hOfRows-i); j++) {
//         pattern += ' ';
//     }
    
//     // print stars
//     for (let k:number = 0; k<=(i*2); k++) {
//         pattern = pattern.concat('*');
//     }
//     console.log(pattern);
// }
// for (let i:number = hOfRows; i>0; i--) { // Print Bottom Triangle
//     pattern = '';
    
//     // print spaces
//     for (let j:number = hOfRows-i; j>=0; j--) {
//         pattern += ' ';
//     }
        
//     // print stars
//     for (let k:number = 1; k<(i*2); k++) {
//         pattern = pattern.concat('*');
//     }    
//     console.log(pattern);
// }
/*
Prints Pattern:
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




// const rows: number = 9;
// let firstHalfRows = Math.floor(rows/2), nextHalfRows = Math.ceil(rows/2), pattern:string;

// print 1st Half of Pattern
// for (let i:number = 0; i<firstHalfRows; i++) {
//     pattern = '';

//     for (let j:number = 0; j<=i; j++) {
//         pattern += '*';
//     }

//     console.log(pattern);
// }

// print 2nd Half of Pattern
// for (let i:number = nextHalfRows; i>0; i--) {
//     pattern = '';

//     for (let j:number = 0; j<i; j++) {
//         pattern += '*';
//     }
//     console.log(pattern);
// }
/*
Prints Pattern:
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




// const rows: number = 5;
// let pattern:string;
// for (let i:number = 0; i<rows; i++) {
//     pattern = ''
    
//     for (let j:number = 0; j<=i; j++) {
//         if ((i === 0 && j === 0) || (i+j) % 2 != 0) { // prints '0' when at 0th position or i+j == odd
//             pattern += " 0 ";
//         }
//         else if ( (i+j) % 2 === 0) { // prints '1' when i+j == even
//             pattern += " 1 ";
//         }
//     }

//     console.log(pattern);
// }
/*
Prints Pattern:
0 
0  1 
1  0  1 
0  1  0  1 
1  0  1  0  1 
*/

// const rows:number = 4;
// let pattern:string;
// for (let i:number = 1, spaces:number = (rows*2-2); i<=rows; i++, spaces -= 2) {
//     pattern = '';
    
//     // prints 1st Part Number
//     for (let j:number = 1; j<=i; j++) {
//         pattern += j;
//     }

//     // prints Mid spaces
//     for (let k:number = 1; k<=spaces; k++) {
//         pattern += ' ';
//     }

//     // print Last Part Number
//     for (let l:number = i; l>=1; l--) {
//         pattern += l;
//     }

//     console.log(pattern);
// }
/*
Prints Pattern:
1      1
12    21
123  321
12344321
*/
