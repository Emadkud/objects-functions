'use strict'


// ## 01 - Object

// - Créez une const `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
// - Affichez `cat` dans la console
// - Affichez la valeur de `age` dans la console
// - À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`


//  const cat = {
//      name: "Garfiled" ,
//     age : 3 ,
//     isCute : true ,

//  }

// // console.log(cat)
// // console.log(cat.age)

// if (cat.isCute === true) {
//     console.log("So cute")
// }else{
//     console.log("Cute")
// }



// ## 02 - Combine

// - Créez une const `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
// - Créez une variable `cats` qui est un tableau contenant les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` (il y a deux façons de le faire) dans la console
// - Affichez la valeur de `isCute` de `cat2` (il y a deux façons de le faire) dans la console


// const cat2 = {
//          name: "Mimo" ,
//          age : 5 ,
//          isCute : false ,
        
//      }

//      let cats = [cat,cat2]

//      console.log(cats)
//      console.log(cats[0].age)
//      console.log(cats[1].age)

//      console.log(cats[1].isCute)
    
     


// ## 03 - Even

// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats

 
//   const checkIfEven = (num) => {
    
//     if ( num % 2 ===0 ) {
//         console.log("even")

//     }else{ 
//         console.log("odd")

//     }
        
//     }
   
//    checkIfEven(3)
  
 


// ## 04 - Compare

// - Créez une fonction `compare` qui reçoit deux paramètres `x` et `y`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//     - "`x` is bigger" si `x` est plus grand
//     - "`y` is bigger" si `y` est plus grand
//     - "both are the same" si ils sont égaux
// - Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats



// const  compare = (x,y) => {
//     if (x > y) {
//         console.log (" x is bigger")
//     }
//     else if (y > x) {
//         console.log(" y is bigger")
//     }
//     else if ( x === y) {
//         console.log (" ils sont égaux")

//     }
    
// }

// compare(2,2)










// ## 05 - Add Up

// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78








// ## 06 - Time

// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`

// ## 07 - Password generation

// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 ou plus grand que 15, la fonction retourne "error"

// ## 08 - Let’s play

// - Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
// - La fonction va lancer aléatoirement des dés, une quantité de fois égale à la valeur de `numberOfDice` et retourner leur somme
// - Appelez la fonction deux fois avec pour argument 5, une fois pour un `joueur1` et l'autre pour le `joueur2`.
// - Comparez les valeurs des deux joueurs et Affichez le joueur gagnant (celui ayant le plus grand score)