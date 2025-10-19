import {faker} from '@faker-js/faker' 
import fs from 'fs';

//Funzioni di ordine superiore
/*function printnumero(n: number): string {
    return `Ciao numero ${n}`;
}

let numeri = [1, 2, 3, 4, 5, 6];

const fstampanumeri = numeri.map((n) => {
    console.log(printnumero(n));
});

function superioreFunzione(func: () => void) {
    func();
}

superioreFunzione(()=>{
    fstampanumeri;
});

//Uso di Faker
let index = 0;

for(index = 1;index < 10;index++){

    console.log(faker.person.firstName('male'));
*/

const readmeFile = fs.readFileSync('./README.md');
const readmes = readmeFile.toString();

console.log(readmes);

fs.copyFileSync('./README.md','./README_copy.MD');
