// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var ObjetoMatriz = Object.keys(objeto).map(
    function(key) {
      return [key,objeto[key]]
    }
  );
  return ObjetoMatriz;
  //Otra forma
// return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var letras = {};
for(let i = 0; i < string.length; i ++){
  if(!letras[string[i]]){
    letras[string[i]] = 0;
  }
  letras[string[i]] += 1;
}
return letras;

}


function capToFront(s) {  
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var sinvertido = "";
  var sinvertido1 = "";
  var sinvertido2 = "";
  for(let i = 0; i < s.length; i ++){
    if(s[i] === s[i].toUpperCase()){
     sinvertido1 = s[i] + sinvertido1;
    }
    else {sinvertido2 = s[i] + sinvertido2;}
  }
  return sinvertido = (sinvertido1.split("").reverse().join("")) + (sinvertido2.split("").reverse().join(""));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var str1 = [];
  strinverso = str.split(' ');
  for(let i = 0; i < strinverso.length; i ++){
    if(strinverso[i] === strinverso[0]){
      str1 = str1 + strinverso[i].split("").reverse().join("")
    }
    else{
    str1 = str1 + " " + strinverso[i].split("").reverse().join("")
  };
  };
  return str1;
  } 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var capicua = numero.toString();
  for(let i = 0, j = capicua.length - 1; i <= j; i ++, j --){
    if(capicua[i] !== capicua[j]){
      return "No es capicua";
    } else {}
  };
  return "Es capicua";
  }


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenamodif = ""
  for(let i = 0; i < cadena.length; i ++){
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c" ){      
    } else {cadenamodif = cadenamodif + cadena[i];}
  };
  return cadenamodif;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var sort = arr.sort(function(a,b){
    if(a.length > b.length){
      return 1;
    }
    if(a.length < b.length){
      return -1;
    }
    return 0;
  })
return sort;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interseccion = arreglo1.filter(value => arreglo2.includes(value));
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

