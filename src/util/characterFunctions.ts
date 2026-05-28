export function incrementCharBy1(char:string): string {
    if (!char) {
        throw new Error("Character is Required to Increment it by 1");
        return "";
    }
    return String.fromCharCode(char.charCodeAt(0) + 1); 
}

export function decrementCharBy1(char:string): string {
    if (!char) {
        throw new Error("Character is Required to Decrement it by 1");
        return "";
    }
    return String.fromCharCode(char.charCodeAt(0) - 1); 
}