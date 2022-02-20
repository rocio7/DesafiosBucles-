// Imprimir impares del 1-20//
for(i=1;i<=20;i++){
    if(i % 2 != 0) {
        console.log(i);
    }
}

//Disminuir mutltiplos de 3//

for(i=100;i>=0;i--){
    if(i % 3 === 0) {
        console.log(i);
    }
}

//Impmir la secuencia//
for (i= 4; i>= -3.5; i-=1.5) {
    console.log(i);
}


//Sigma//
var suma=0;

for (i= 1; i<= 100; i++) {
    console.log(i);
    suma +=i;
}
console.log(suma);

//Factorial//

var product=1;

for (i=1; i<=12; i++) {
    console.log(i);
    product *=i;
}
console.log(product);
