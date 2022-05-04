export const getSortedEvenNumbers = (arr : number[]) : string => {
    const evenOnly = arr.filter((a) => a % 2 == 0 );

    evenOnly.sort((a, b) => a - b);
    return evenOnly.join(" - ");
};