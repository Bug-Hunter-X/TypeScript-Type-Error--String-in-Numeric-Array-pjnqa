function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

function combineSafe(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, "6"];

const combinedSafe = combineSafe(arr1, arr2); // No error

//Or use a type assertion:
const combined: (number | string)[] = combine(arr1, arr2 as (number | string)[]); // No error.  But be cautious, as this bypasses type checking.
console.log(combinedSafe); //Output: [1, 2, 3, 4, 5, "6"]