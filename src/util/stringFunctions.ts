function isStringHasLowerCase(str:string):boolean {
    if ( /[^a-z]/g.test(str) ) { // if chars are not in range a-z
        return false;
    }
    
    for (let ch of str) {
        if (ch === ch.toLowerCase()) return true;
    }

    return false;
}

function isStringHasUpperCase(str:string):boolean {
    if ( /[^A-Z]/g.test(str) ) { // if chars are not in range A-Z
        return false;
    }
    
    
    for (let ch of str) {
        if (ch === ch.toUpperCase()) return true;
    }

    return false;
}

function isStringHasNums(str:string):boolean {
    const numericCharSet = new Set<string>(); // O(1) SC, 'cause it always stores only 9 characters

    // Iterate and Add Numeric Chars to Set
    for (let i=0; i<=9; i++) { // O(1) TC
        numericCharSet.add( i.toString() );
    }

    // Iterate Str and Find out if all the chars are numbers or not
    for (let ch of str) { // O(n), where n is length of string 'str'
        if ( numericCharSet.has(ch) ) return true;
    }

    return false;
}

function isStringHasSymbols(str:string):boolean {
    return /[^a-zA-Z0-9]/.test(str); // means, find at least one char in string which is not in range "a - z", "A - Z", or "0 - 9"
}

// This Function returns the maximum number of unique characters (length) that a structure can store for lookups at constant O(1) time.
function getMaxLengthOfString(str:string): number {
    const isStrHasLowerChars = isStringHasLowerCase(str); // a to z
    const isStrHasUpperChars = isStringHasUpperCase(str); // A to Z
    const isStrHasNumChars = isStringHasNums(str); // 0 - 9
    const isStrHasSymbolicChars = isStringHasSymbols(str); // All Basic Symbols, Control Characters (non-printable), and 128 extra chars for special symbols, math operators, and accented foreign chars

    if ( isStrHasLowerChars && isStrHasUpperChars && isStrHasNumChars && isStrHasSymbolicChars) {
        return 256;
    }
    else if (isStrHasLowerChars && isStrHasUpperChars && isStrHasNumChars) {
        return 62;
    }
    else if (isStrHasLowerChars && isStrHasUpperChars) {
        return 52;
    }
    else if (isStrHasLowerChars || isStrHasUpperChars) {
        return 26;
    }
    else if (isStrHasNumChars) {
        return 10;
    }
    else if (isStrHasSymbolicChars) {
        return 64;
    }

    return 0;
}

export {
    isStringHasLowerCase,
    isStringHasUpperCase,
    isStringHasNums,
    isStringHasSymbols,
    getMaxLengthOfString,
}