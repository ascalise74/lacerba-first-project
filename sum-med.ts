function SommaF(numeri: number[]): number {
    let somma = 0;
    for (let x of array) {
        somma = somma + x;
    }
    return somma;
}

function MediaF(somma: number, nr_numeri: number): number {
    return somma / nr_numeri;
}

let array: number[] = [1, 2, 3, 4, 5];
let somma: number = 0;
let media: number = 0;



somma = SommaF(array)
media = MediaF(somma,array.length);


console.log(`Somma =${somma}`);

console.log(`Media =${media}`);

