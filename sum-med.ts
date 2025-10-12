let array: number[] = [1, 2, 3, 4, 5];
let somma: number = 0;
let media: number = 0;
let count: number = 0;

for (let x of array) {
    count += 1;
    somma = somma + x;
}

media = somma / count;

console.log('Somma =', somma);
console.log('Media = ', media);