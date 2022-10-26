let cars=['Volvo','Nissan','Audi'];

console.log("1. auto = "+cars[0]);
console.log("2. auto = "+cars[1]);
console.log("3. auto = "+cars[2]);

console.log("Tulostus for-loopilla");
for(let x=0; x<=2; x++){
    console.log(x+1+". auto = "+cars[x]);
}

console.log("Tulostus foreach-loopilla");
cars.forEach(element => {
    console.log("Auto = "+element);
});