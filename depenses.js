// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  return depenses.reduce((total, depense) => total + depense, 0);
}
// Type : number ; unité : FCFA.
const depensesTotales = calculerTotal(depensesSemaine);

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  let moy = calculerTotal(depenses);
  let moyenne = moy / depenses.length;
  return moyenne;
}
// Type : number ; unité : FCFA par jour.
const depensesMoyenne = calculerMoyenne(depensesSemaine);

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses){
  let sup = [];
  for (let i = 0; i < depenses.length; i++) {
    if (depenses[i] > 2000) {
      sup.push(depenses[i]);} 
  }
  return sup;
}
// Type : number[] ; unité de chaque élément : FCFA.
const grossesDepenses = filtrerGrossesDepenses(depensesSemaine);

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if (depenses.length === 0) {
    return 0;
  }
  let max = depenses[0];
  for (let i = 1; i < depenses.length; i++) {
    if (depenses[i] > max) {
      max = depenses[i];
    }
  }
  return max;
}
const depenseMaximale = trouverMaximum(depensesSemaine);

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
// Type : number[] ; unité de chaque élément : FCFA.
const depensesTriees = [...depensesSemaine].sort((a, b) => a - b);
console.log(`Rapport des dépenses :
- Dépenses avant le tri : [${depensesSemaine.join(", ")}]
- Total : ${depensesTotales} FCFA
- Moyenne par jour : ${depensesMoyenne} FCFA
- Dépenses au-dessus de 2000 FCFA : ${grossesDepenses.join(", ")} FCFA
- Dépense maximale : ${depenseMaximale} FCFA
- Dépenses après le tri : [${depensesTriees.join(", ")}]`);
