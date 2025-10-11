console.log("Hello world!")
console.log("Agostino.This is first Node Project")

let MyVar : number = 3;
MyVar += 10;

console.log("Myvar = ", MyVar)


//Lavoriamo con tipi complessi

interface MyInterface {

    mynumber : Number,
    mystring : String
}

let myinterface : MyInterface = {
    mynumber : 33,
    mystring : "Hello Typescript"
}

console.log("MyNumber = ", myinterface.mynumber )
console.log("MyString = ", myinterface.mystring)

