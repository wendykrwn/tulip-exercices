/*
Pour chaque nombre n de la liste, on veut effectuer les opérations suivantes :

si le nombre est divisible par 3 : on affiche Garçon
si le nombre est divisible par 5 : on affiche Fille
si le nombre est divisible par 3 et par 5 : on affiche GarçonFille
sinon : on affiche le nombre n
 */
const exercice1 = (liste) => {
    liste.forEach(n => {

        let resultat = n % 3 ? "" : "Garçon";
        resultat += n % 5 ? "" : "Fille";

        resultat ? console.log(resultat) : console.log(n);
        
    });
}

module.exports = exercice1;