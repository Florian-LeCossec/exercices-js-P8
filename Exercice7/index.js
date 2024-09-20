function convertToBinary() {
    // Récupérer la valeur saisie par l'utilisateur
    const decimalInput = document.getElementById('decimalInput').value;
    
    // Filtrer les caractères non numériques
    const filteredInput = decimalInput.replace(/\D/g, '');
    let decimalNumber = parseInt(filteredInput);

    // Vérifier si la saisie est un nombre valide
    if (isNaN(decimalNumber) || decimalInput !== filteredInput) {
        alert('Veuillez entrer un nombre décimal valide.');
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    // Convertir le nombre décimal en binaire
    let binaryResult = '';
    while (decimalNumber > 0) {
        binaryResult = (decimalNumber % 2) + binaryResult;
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    // Afficher le résultat binaire
    document.getElementById('binaryResult').textContent = binaryResult || '0';
}
