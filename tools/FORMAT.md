# Format des fichiers de contenu

Un fichier par matière : `content/<niveau>/<id>.js` (`<niveau>` = `6e`, `5e`, `3e` ou `1ere`,
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

## Texte commun à une série d'exercices

Pour une compréhension de texte (ou un document) sur laquelle portent plusieurs exercices,
écrire le texte une seule fois dans le champ `textes` du chapitre, et le citer dans chaque
exercice concerné avec `texte`. L'appli l'affiche au-dessus de la question : déplié au premier
exercice de la série, repliable ensuite (« Relire le texte »), et toujours présent dans
l'onglet « À revoir », même si l'exercice y apparaît seul.

```js
{
  id: "reading-part-3", titre: "…", theme: "…", cours: `…`,
  textes: {
    ines: `**My first job** — by Inès, 15

I started working at my uncle's café last summer…`,
  },
  exercices: [
    { type: "qcm", texte: "ines", question: "Why did Inès…?", choix: […], reponse: 1, explication: "…" },
    { type: "vf", texte: "ines", question: "Inès…", reponse: false, explication: "…" },
  ],
}
```

Le champ `texte` peut être ajouté à un exercice existant (cela ne change pas sa position).

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

- Conforme au programme officiel de l'Éducation nationale en vigueur (cycle 3
  pour la 6e, cycle 4 pour la 5e et la 3e ; programmes du lycée général pour la 1re).
- Couvrir **tout** le programme de l'année : en général 8 à 15 chapitres.
- Chaque cours : définitions, propriétés, méthodes, exemples résolus,
  encadré « À retenir » ; ton clair, adressé à l'élève (« tu »).
- 6 à 10 exercices par chapitre, du plus facile au plus difficile, mélangeant
  les types ; au moins une `redaction` type contrôle / bac par chapitre.
- Corrections exactes et vérifiées (refaire chaque calcul).
- En QCM, varier la position de la bonne réponse.
