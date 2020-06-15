

export const isPricesOk = (minPrice? : number, maxPrice? : number) : boolean => {
    if (maxPrice === null || minPrice  === null){
        return true;
    } else {
        return maxPrice > minPrice
    }
}

export const isSizesOk = (minSize? : number , maxSize? : number) : boolean => {
    if (maxSize === null || minSize  === null){
        return true;
    } else {
        return maxSize > minSize
    }
}
