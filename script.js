let listeMots = ["Cachalot", "Pétunia", "Serviette"];
let listePhrases = [
  "Pas de panique !",
  "La vie, l'univers et le reste",
  "Merci pour le poisson",
];
let score = 0;
let motUtilisateur = "";

let choix = prompt(
  "Voulez vous une liste de mots ou de phrases? Entrez 'mots' ou 'phrases'."
);

while (choix !== "mots" && choix !== "phrases") {
  choix = prompt(
    "Voulez vous une liste de mots ou de phrases? Entrez 'mots' ou 'phrases'."
  );
}

switch (choix) {
  case "mots":
    for (let index = 0; index < listeMots.length; index++) {
      motUtilisateur = prompt("Tapez le mot: " + listeMots[index]);
      if (motUtilisateur === listeMots[index]) {
        score += 1;
      }
    }
    break;
  case "phrases":
    for (let index = 0; index < listePhrases.length; index++) {
      motUtilisateur = prompt("Tapez le mot: " + listePhrases[index]);
      if (motUtilisateur === listePhrases[index]) {
        score += 1;
      }
    }
    break;
  default:
    break;
}

console.log(score);
