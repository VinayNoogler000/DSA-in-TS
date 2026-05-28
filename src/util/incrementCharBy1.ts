export default function incrementCharBy1(char:string): string {
    if (!char) {
        throw new Error("Character is Required to Increment it by 1");
        return "";
    }
    return String.fromCharCode(char.charCodeAt(0) + 1); 
}