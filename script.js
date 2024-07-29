// let score = 0;
// let motUtilisateur = "";
let scoreFinal = 0;
// cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ;
function afficherResultat(score, nombreMots) {
  let message = "Votre score est de " + score + " sur " + nombreMots;
  return message;
}

// cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots.
function choisirPhrasesOuMots() {
  let choix = prompt(
    "Voulez vous une liste de mots ou de phrases? Entrez 'mots' ou 'phrases'."
  );
  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt(
      "Voulez vous une liste de mots ou de phrases? Entrez 'mots' ou 'phrases'."
    );
  }
  return choix;
}

// cette fonction contient la boucle principale de jeu, c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, et retourne le nombre de mots/phrases correctement tapés ;
function lancerBoucleDeJeu(table) {
  let score = 0;
  for (let index = 0; index < table.length; index++) {
    let motUtilisateur = prompt("Tapez: " + table[index]);
    if (motUtilisateur === table[index]) {
      score += 1;
    }
  }
  return score;
}

// cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres. En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire.
function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let n = 0;
  switch (choix) {
    case "mots":
      scoreFinal = lancerBoucleDeJeu(listeMots);
      n = listeMots.length;
      break;
    case "phrases":
      scoreFinal = lancerBoucleDeJeu(listePhrases);
      n = listePhrases.length;
      break;
    default:
      break;
  }

  console.log(afficherResultat(scoreFinal, n));
}

lancerJeu();
