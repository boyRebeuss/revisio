# Format des fichiers de contenu

Un fichier par matière : `content/<niveau>/<id>.js` (`<niveau>` = `5e` ou `1ere`,
`<id>` = identifiant de `content/catalogue.js`). C'est un module ES qui exporte
un objet par défaut, sans import ni code exécutable :

```js
export default {
  chapitres: [
    {
      id: "fractions",            // minuscules, chiffres, tirets ; unique dans le fichier
      titre: "Les fractions",
      theme: "Nombres et calculs", // regroupement affiché (thème du programme)
      cours: `
## Définition
Une **fraction** a/b ...

> **À retenir** : ...

- point 1
- point 2

| Mot | Sens |
|---|---|
| a | b |
`,
      exercices: [ /* 6 à 10 exercices, voir ci-dessous */ ],
    },
  ],
};
```

Les identifiants (`id` du chapitre) ne doivent plus changer une fois publiés :
la progression des élèves y est rattachée. Les exercices sont repérés par leur
position dans la liste : on peut en ajouter à la fin, mais éviter d'en
insérer au milieu.

## Syntaxe du champ `cours` (Markdown simplifié)

Utiliser des gabarits `` `...` `` ; ne jamais mettre de backtick ni `${` dans le texte.

| Syntaxe | Rendu |
|---|---|
| `## Titre` / `### Sous-titre` | titres |
| ligne vide | nouveau paragraphe |
| `**gras**`, `*italique*` | mise en forme |
| `- élément` | liste à puces |
| `1. élément` | liste numérotée |
| `> texte` (lignes consécutives) | encadré « à retenir » |
| `>! texte` | encadré « méthode / exemple » |
| `\| a \| b \|` + ligne `\|---\|---\|` | tableau (1re ligne = en-tête) |
| ligne `~~~`, code, ligne `~~~` | bloc de code (indentation conservée, aussi dans `>!`) |

Pas de HTML, pas de LaTeX, pas de liens, pas d'images. Écrire les maths en
Unicode : x², x³, √, π, ≤, ≥, ≠, ×, ÷, −, ½, →, ∈, ∞, Δ, uₙ, f′(x).
Les fractions s'écrivent `3/4` ou `(x + 1)/(x − 2)`.

## Types d'exercices

Tous les champs texte acceptent la mise en forme en ligne (`**gras**`, `*italique*`).

```js
// QCM : reponse = index (0, 1, 2...) de la bonne proposition
{ type: "qcm", question: "…", choix: ["…", "…", "…", "…"], reponse: 2,
  explication: "Pourquoi c'est la bonne réponse (et pourquoi les autres non)." }

// Vrai / faux
{ type: "vf", question: "Affirmation…", reponse: true, explication: "…" }

// Réponse courte vérifiée automatiquement. La comparaison ignore
// majuscules, accents, espaces superflus, ponctuation finale ; la virgule
// décimale vaut le point. Lister TOUTES les formes acceptables.
{ type: "saisie", question: "…", reponses: ["3/4", "0,75"], explication: "…" }

// Question ouverte : l'élève rédige puis compare au corrigé détaillé
{ type: "redaction", question: "…", corrige: "Corrigé rédigé complet, avec la méthode." }
```

Le champ `corrige` et `explication` peuvent contenir plusieurs lignes et la
syntaxe complète du cours (listes, encadrés).

## Exigences de qualité

- Conforme au programme officiel de l'Éducation nationale en vigueur (cycle 4
  pour la 5e ; programmes du lycée général pour la 1re).
- Couvrir **tout** le programme de l'année : en général 8 à 15 chapitres.
- Chaque cours : définitions, propriétés, méthodes, exemples résolus,
  encadré « À retenir » ; ton clair, adressé à l'élève (« tu »).
- 6 à 10 exercices par chapitre, du plus facile au plus difficile, mélangeant
  les types ; au moins une `redaction` type contrôle / bac par chapitre.
- Corrections exactes et vérifiées (refaire chaque calcul).
- En QCM, varier la position de la bonne réponse.
