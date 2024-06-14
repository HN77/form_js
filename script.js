// Affiche la calculatrice lorsque l'utilisateur clique sur le lien "show_calc" //
document.getElementById('show_calc').addEventListener('click', function () {
  document.getElementById('calculator').style.display = 'block';
});

// Cache la calculatrice lorsque l'utilisateur clique sur le lien "hide_calc" ///
document.getElementById('hide_calc').addEventListener('click', function () {
  document.getElementById('calculator').style.display = 'none';
});

// Calculer le résultat lorsque l'utilisateur clique sur le bouton de calcul ///
document.getElementById('calcButton').addEventListener('click', function () {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let operation = document.getElementById('operation').value;
  let result;

  // Effectue le calcul selon l'opération choisie //
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Opération invalide';
  }

  // Affiche le résultat du calcul en bas de formulaire
  document.getElementById(
    'result'
  ).textContent = `Result: ${num1} ${operation} ${num2} = ${result}`;
});

// Tableau pour les éléments avec des informations nécessaires
const elementsWithInfo = [
  { element: document.getElementById('num1'), message: 'Saisir un chiffre' },
  { element: document.getElementById('num2'), message: 'Saisir un chiffre' },
  {
    element: document.getElementById('operation'),
    message: 'Sélectionner un opérateur : + - * /',
  },
];

// Ajoute un écouteur d'événement 'mouseover' à chaque élément pour afficher des informations
elementsWithInfo.forEach(function (item) {
  item.element.addEventListener('mouseover', function () {
    showInfo(item.message);
  });
});

/// Ajoute un écouteur d'événement 'mouseout' pour document pour cacher les informations //
document.body.addEventListener('mouseout', function () {
  hideInfo();
});

// Affiche les informations
function showInfo(text) {
  let infoBox = document.getElementById('info_box');
  infoBox.innerText = text;
  infoBox.style.display = 'block';
}

// Cache les informations ////
function hideInfo() {
  let infoBox = document.getElementById('info_box');
  infoBox.style.display = 'none';
}
