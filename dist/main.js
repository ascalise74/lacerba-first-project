"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("@faker-js/faker");
//Funzioni di ordine superiore
function printnumero(n) {
    return "Ciao numero ".concat(n);
}
var numeri = [1, 2, 3, 4, 5, 6];
var fstampanumeri = numeri.map(function (n) {
    console.log(printnumero(n));
});
function superioreFunzione(func) {
    func();
}
superioreFunzione(function () {
    fstampanumeri;
});
//Uso di Faker
var index = 0;
for (index = 1; index < 10; index++) {
    console.log(faker_1.faker.person.firstName('male'));
}
