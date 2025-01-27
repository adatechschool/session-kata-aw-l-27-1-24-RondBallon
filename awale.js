// ETAPE 1 : Classe + Attributs du plateau de jeu. Initialiser cases + lettres + colonnes //
// MAJ 11h : je n'arrive pas à l'affichage face à face mais j'ai 2 territoires (Nord, Sud)


class Case {
  constructor(lettre, colonnes, nombreDeGraines) {
    this.lettre = lettre;
    this.colonnes = colonnes; // plus utile mais je suis pas revenu dessus
    this.nombreDeGraines = nombreDeGraines;
  }

  estVide() {
    return this.nombreDeGraines === 0;
  }
}

class Plateau {
  constructor() {
    this.cases = [];
    this.lettresDisponibles = [ // probablement une mauvaise idée 
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
    ];

    for (let i = 0; i < 2; i++) {
      let ligne = [];
      for (let j = 0; j < 6; j++) {
        ligne.push(new Case(this.lettresDisponibles.shift(), 0, 0)); // j'utilisais pop() mais j'avais les lettres dans le sens inverse, résolu avc shift() qui prend première entrée
      }
      this.cases.push(ligne);
    }
  }

  /* prochaineCase(caseActuelle, sens) {
        let ligne = caseActuelle.ligne;
        let colonne = caseActuelle.colonne;
        if (sens === "droite") {
            colonne ++; // probablement un probleme quand j'arrive sur les colonnes du "bord" du plateau mais pas eu le temps
        } else if (sens === "gauche") {
            colonne --;
        }
        return this.cases[ligne][colonne];
    } */

  // plateau2
  // j'ai un retour NaN (parce que renvoie d'une string dans la logique). Pas le courage de refaire un objet 'A': 0, 'B': 1.. 12h10

  prochaineCase(caseActuelle, sens) {
    let ligne = 0; // on suppose que la case actuelle est dans la première ligne pour le "test"
    let colonne = this.lettresDisponibles.indexOf(caseActuelle); // on trouve l'index de la case actuelle dans la première ligne
    if (sens === "droite") {
      colonne++; // on incrémente l'index pour obtenir la case suivante
    } else if (sens === "gauche") {
      colonne--; // on décrémente l'index pour obtenir la case précédente
    }
    return {
      lettre: this.lettresDisponibles[colonne],
      nombreDeGraines: this.cases[ligne][colonne].nombreDeGraines,
    };
  }

  //plateau3

  display() {
    for (let ligne of this.cases) {
      for (let case_ of ligne) {
        console.log(case_.lettre + " : " + case_.nombreDeGraines); // j'appelais case_.colonnes mais j'avais du coup les graines en double
      }
      console.log();
    }
  }

  estVide() {
    for (let ligne of this.cases) {
      for (let case_ of ligne) {
        if (!case_.estVide()) {
          return false;
        }
      }
    }
    return true;
  }
}

let plateau = new Plateau(); // nouvelle instance du plateau
plateau.display(); // affichage du plateau
console.log(plateau.estVide()); // console.log de .estVide() & donc boolen (true ou false)

/* let plateau2 = new Plateau();
let caseActuelle = plateau2.cases[0][0];
let prochaine = plateau2.prochaineCase(caseActuelle, "droite");
console.log(prochaine.lettre); // devrait afficher la lettre de la case suivante */

// retour NaN, pas le courage de refaire une structure objet type 'A': 0, 'B': 1.. 12h10//

const plateau3 = new Plateau();
const caseActuelle = "A";
const sens = "droite";
const prochaineCase = plateau.prochaineCase(caseActuelle, sens);
console.log(
  `La prochaine case est : ${prochaineCase.lettre} avec ${prochaineCase.nombreDeGraines} graines`
);

// Retour undefined pour la string mais j'ai le nmbr de graines. 12h30

// ETAPE 2 : Classe + Attributs du Joueur. Ajouter une fonction pour incrémenter le score //

class Joueur {
  constructor(nom, score) {
    this.nom = nom;
    this.score = score;
  }

  incrementerScore(nbrGraines) {
    this.score += nbrGraines;
  }
}

let joueur1 = new Joueur("Joueur 1", 0); // test d'une instance de joueur 1 + score
let joueur2 = new Joueur("Joueur 2", 0); // test d'une instance de joueur 2 + score
console.log(joueur1.score, joueur2.score); // console.log de .score
console.log(joueur1.nom, joueur2.nom); // console.log de .nom

// ETAPE 3 : Déterminer sens de jeu + Planter + Recolter // (MAJ dans la classe Plateau)

/* prochaineCase(caseActuelle, sens) {
    let ligne = caseActuelle.ligne;
    let colonne = caseActuelle.colonne;
    if (sens === "droite") {
        colonne ++; // probablement un probleme quand j'arrive sur les colonnes du "bord" du plateau mais pas eu le temps
    } else if (sens === "gauche") {
        colonne --;
    }
    return this.cases[ligne][colonne];
} */
