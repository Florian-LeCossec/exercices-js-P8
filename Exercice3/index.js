// Créez votre fonction ici
const calculateAverage = (numbersArray) => {
    if (!Array.isArray(numbersArray) || numbersArray.length === 0) {
        return 'No numbers to calculate average';
    }
    // Calcul de la somme des nombres du tableau
    const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    // Calcul de la moyenne
    return sum / numbersArray.length;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
