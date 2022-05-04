import {getSortedEvenNumbers as sortEven} from "../src/getSortedEvenNumbers";

test("only positive numbers", () => {
   expect(sortEven([0, 1, 2, 3, 4, 5])).toBe("0 - 2 - 4");
});

test("only negative numbers", () => {
   expect(sortEven([-10, -9, -8, -7, -6])).toBe("-10 - -8 - -6");
});

test ("mixed numbers", () => {
   expect(sortEven([-15, -12, 7, 9, 16, 21, 22])).toBe("-12 - 16 - 22");
});