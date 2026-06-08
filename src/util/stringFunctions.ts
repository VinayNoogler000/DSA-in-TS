function isStringHasLowerCase(str:string):boolean {
    for (let ch of str) {
        if ( /[a-z]/g.test(ch) ) return true;
    }

    return false;
}

function isStringHasUpperCase(str:string):boolean {
    for (let ch of str) {
        if ( /[A-Z]/g.test(ch) ) return true;
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

    // All 16 possible combinations of 4 character types:
    if (isStrHasLowerChars && isStrHasUpperChars && isStrHasNumChars && isStrHasSymbolicChars) {
        return 256; // 26 + 26 + 10 + 128 (or 256 for extended ASCII)
    }
    else if (isStrHasLowerChars && isStrHasUpperChars && isStrHasNumChars && !isStrHasSymbolicChars) {
        return 62; // 26 + 26 + 10
    }
    else if (isStrHasLowerChars && isStrHasUpperChars && !isStrHasNumChars && isStrHasSymbolicChars) {
        return 78; // 26 + 26 + 128 (approx)
    }
    else if (isStrHasLowerChars && isStrHasUpperChars && !isStrHasNumChars && !isStrHasSymbolicChars) {
        return 52; // 26 + 26
    }
    else if (isStrHasLowerChars && !isStrHasUpperChars && isStrHasNumChars && isStrHasSymbolicChars) {
        return 164; // 26 + 10 + 128 (approx)
    }
    else if (isStrHasLowerChars && !isStrHasUpperChars && isStrHasNumChars && !isStrHasSymbolicChars) {
        return 36; // 26 + 10
    }
    else if (isStrHasLowerChars && !isStrHasUpperChars && !isStrHasNumChars && isStrHasSymbolicChars) {
        return 154; // 26 + 128 (approx)
    }
    else if (isStrHasLowerChars && !isStrHasUpperChars && !isStrHasNumChars && !isStrHasSymbolicChars) {
        return 26; // only lowercase
    }
    else if (!isStrHasLowerChars && isStrHasUpperChars && isStrHasNumChars && isStrHasSymbolicChars) {
        return 164; // 26 + 10 + 128 (approx)
    }
    else if (!isStrHasLowerChars && isStrHasUpperChars && isStrHasNumChars && !isStrHasSymbolicChars) {
        return 36; // 26 + 10
    }
    else if (!isStrHasLowerChars && isStrHasUpperChars && !isStrHasNumChars && isStrHasSymbolicChars) {
        return 154; // 26 + 128 (approx)
    }
    else if (!isStrHasLowerChars && isStrHasUpperChars && !isStrHasNumChars && !isStrHasSymbolicChars) {
        return 26; // only uppercase
    }
    else if (!isStrHasLowerChars && !isStrHasUpperChars && isStrHasNumChars && isStrHasSymbolicChars) {
        return 138; // 10 + 128 (approx)
    }
    else if (!isStrHasLowerChars && !isStrHasUpperChars && isStrHasNumChars && !isStrHasSymbolicChars) {
        return 10; // only numbers
    }
    else if (!isStrHasLowerChars && !isStrHasUpperChars && !isStrHasNumChars && isStrHasSymbolicChars) {
        return 128; // only symbols
    }
    else {
        return 0; // empty string or no valid characters
    }
}

export {
    isStringHasLowerCase,
    isStringHasUpperCase,
    isStringHasNums,
    isStringHasSymbols,
    getMaxLengthOfString,
}