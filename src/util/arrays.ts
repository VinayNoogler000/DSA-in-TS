type arrayType = number[] | string[];

export function copyArrayElements(fromArr:arrayType, toArr:arrayType): void {
    if (fromArr?.length !== toArr?.length) return;
    else {
        for (let i=0; i<fromArr?.length; i++) {
            toArr[i] = fromArr[i]!; 
        }
    }
}