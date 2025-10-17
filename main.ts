//Funzioni di ordine superiore
function printnumero(n: number): string {
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
