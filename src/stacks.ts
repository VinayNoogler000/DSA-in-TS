/* Valid Parantheses Problems - types of brackets being used are: (), [], {}
In this problem, we need to decide if a string of brackets is "balanced" or "legal" based on two specific rules:
    1. Matching Pairs: Every opening bracket must be closed by the exact same type. An ( cannot be closed by a ].
    2. Correct Order: Brackets must be closed in the reverse order they were opened. Think of it like a stack of boxes 📦. If you put a small box inside a big box, you have to close and remove the small box before you can close the big one.
*/

// Time Complexity of this Approach is -> O(n)
function isValid(s:string):boolean {
    const stack:string[] = [];
    const bracketsPairs: { [key:string]: string } = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    for (let currChar of s) {
        if (currChar === '(' || currChar === '{' || currChar === '[') {
            stack.push(currChar);
        }
        else { // currChar is a closing bracket
            if (stack.length === 0) return false; // cuz, 1st bracket is a closing bracket, instead of opening bracket, means "Wrong Order" checked (2)

            let topOpeningBracket = stack.pop();
            if (!topOpeningBracket || bracketsPairs[topOpeningBracket] !== currChar) return false; // cuz topOpeningBracket == false (not exists), or 'currChar' is not a pair (closing bracket) of topOpeningBracket, means "Mismatched Pair" checked (1)
        }
    }

    if (stack.length > 0) return false; // cuz there are still opening brackets left in the stack, means "Final Length" check
    return true;
}

console.log(isValid("{(})"));