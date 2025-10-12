let array: number[] = [1, 2, 3, 4, 5];
let somma: number = 0;
let media: number = 0;

for (let x of array) {
    somma = somma + x;
}

media = somma / array.length;

console.log('Somma =', somma);
console.log('Media = ', media);