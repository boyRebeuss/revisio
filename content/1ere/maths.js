export default {
  chapitres: [
    // ───────────────────────── 1. Second degré
    {
      id: "second-degre",
      titre: "Le second degré",
      theme: "Algèbre",
      cours: `
## Fonction polynôme du second degré
Une fonction **polynôme du second degré** (ou trinôme) s'écrit, pour tout réel x :
**f(x) = ax² + bx + c** avec a, b, c réels et **a ≠ 0** (forme développée).

Sa courbe représentative est une **parabole** :
- tournée vers le haut (« ∪ ») si a > 0 ;
- tournée vers le bas (« ∩ ») si a < 0.

## Forme canonique
Tout trinôme peut s'écrire sous la **forme canonique** :
**f(x) = a(x − α)² + β** avec **α = −b/(2a)** et **β = f(α)**.

Le point S(α ; β) est le **sommet** de la parabole, et la droite d'équation x = α est son **axe de symétrie**.
- Si a > 0 : f est décroissante sur ]−∞ ; α], croissante sur [α ; +∞[ ; **minimum β** atteint en α.
- Si a < 0 : f est croissante puis décroissante ; **maximum β** atteint en α.

>! **Exemple** : f(x) = 2x² − 4x − 6.
>! α = −(−4)/(2 × 2) = 1 ; β = f(1) = 2 − 4 − 6 = −8.
>! Forme canonique : f(x) = 2(x − 1)² − 8. Minimum −8 atteint en x = 1.
>! Autre méthode (complétion du carré) : x² + 4x + 1 = (x + 2)² − 4 + 1 = (x + 2)² − 3.

## Discriminant et racines
On appelle **discriminant** du trinôme le nombre **Δ = b² − 4ac**.

| Signe de Δ | Solutions de ax² + bx + c = 0 | Factorisation |
|---|---|---|
| Δ > 0 | deux racines x₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a) | a(x − x₁)(x − x₂) |
| Δ = 0 | une racine double x₀ = −b/(2a) | a(x − x₀)² |
| Δ < 0 | aucune solution réelle | pas de factorisation |

>! **Exemple** : 2x² − 4x − 6 = 0. Δ = (−4)² − 4 × 2 × (−6) = 16 + 48 = 64 > 0, √Δ = 8.
>! x₁ = (4 − 8)/4 = −1 et x₂ = (4 + 8)/4 = 3.
>! Factorisation : 2x² − 4x − 6 = 2(x + 1)(x − 3).

## Somme et produit des racines
Si Δ > 0 (ou Δ = 0), les racines vérifient : **x₁ + x₂ = −b/a** et **x₁ × x₂ = c/a**.
Utile pour trouver une **racine évidente** puis l'autre : pour x² − 7x + 10, 2 est racine (4 − 14 + 10 = 0), et le produit vaut 10, donc l'autre racine est 5.

## Signe d'un trinôme
**Le trinôme est du signe de a, sauf entre ses racines** (quand elles existent).
- Δ > 0 : signe de a à l'extérieur des racines, signe de −a entre les racines.
- Δ = 0 : signe de a partout, nul en x₀.
- Δ < 0 : signe de a pour tout x.

>! **Méthode pour une inéquation** (ex. −x² + 2x + 8 ≥ 0)
>! 1. Calculer Δ = 4 + 32 = 36 et les racines : x₁ = (−2 + 6)/(−2) = −2, x₂ = (−2 − 6)/(−2) = 4.
>! 2. a = −1 < 0 : le trinôme est négatif à l'extérieur des racines, positif entre.
>! 3. Conclure : S = [−2 ; 4].

> **À retenir**
> - Forme canonique a(x − α)² + β avec α = −b/(2a), β = f(α) : sommet S(α ; β).
> - Δ = b² − 4ac ; racines (−b ± √Δ)/(2a) si Δ > 0.
> - Factorisation a(x − x₁)(x − x₂).
> - Signe de a à l'extérieur des racines, signe contraire entre.
> - x₁ + x₂ = −b/a et x₁x₂ = c/a.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel est le discriminant de x² − 6x + 9 ?",
          choix: ["72", "0", "−36", "45"],
          reponse: 1,
          explication: "Δ = (−6)² − 4 × 1 × 9 = 36 − 36 = 0. Le trinôme a une racine double x₀ = 3 : x² − 6x + 9 = (x − 3)².",
        },
        {
          type: "saisie",
          question: "Donne la forme canonique de x² + 4x + 1.",
          reponses: ["(x+2)²-3", "(x + 2)² - 3", "(x+2)²−3", "(x + 2)² − 3", "(x+2)^2-3", "(x + 2)^2 - 3", "-3+(x+2)²"],
          explication: "x² + 4x est le début de (x + 2)² = x² + 4x + 4. Donc x² + 4x + 1 = (x + 2)² − 4 + 1 = (x + 2)² − 3. (α = −4/2 = −2 et β = f(−2) = 4 − 8 + 1 = −3.)",
        },
        {
          type: "qcm",
          question: "Quelles sont les solutions de x² − 5x + 6 = 0 ?",
          choix: ["−2 et −3", "1 et 6", "2 et 3", "Aucune solution réelle"],
          reponse: 2,
          explication: "Δ = 25 − 24 = 1, √Δ = 1. x₁ = (5 − 1)/2 = 2 et x₂ = (5 + 1)/2 = 3. Vérification : somme 5 = −b/a, produit 6 = c/a.",
        },
        {
          type: "vf",
          question: "Pour tout réel x, x² + x + 1 > 0.",
          reponse: true,
          explication: "Vrai : Δ = 1 − 4 = −3 < 0, donc le trinôme ne s'annule pas et il est du signe de a = 1 > 0 pour tout x.",
        },
        {
          type: "saisie",
          question: "Quelles sont les coordonnées du sommet de la parabole d'équation y = 2x² − 8x + 3 ? (format (x;y))",
          reponses: ["(2;-5)", "(2 ; -5)", "(2;−5)", "(2 ; −5)", "(2,-5)", "(2, -5)", "2;-5"],
          explication: "α = −b/(2a) = 8/4 = 2 et β = f(2) = 2 × 4 − 16 + 3 = −5. Le sommet est S(2 ; −5).",
        },
        {
          type: "qcm",
          question: "Quelle est la forme factorisée de 3x² − 3x − 6 ?",
          choix: ["3(x + 2)(x − 1)", "(x − 2)(x + 1)", "3(x − 2)(x + 1)", "3(x − 1)(x − 2)"],
          reponse: 2,
          explication: "Δ = 9 + 72 = 81, √Δ = 9. Racines : (3 − 9)/6 = −1 et (3 + 9)/6 = 2. Donc 3x² − 3x − 6 = 3(x − 2)(x + 1). Ne pas oublier le coefficient a = 3 !",
        },
        {
          type: "saisie",
          question: "2 est une racine évidente de x² − 7x + 10. Quelle est l'autre racine ?",
          reponses: ["5"],
          explication: "Le produit des racines vaut c/a = 10. Donc 2 × x₂ = 10, x₂ = 5. (Ou la somme : 2 + x₂ = 7.)",
        },
        {
          type: "redaction",
          question: "Résous dans ℝ l'inéquation −x² + 2x + 8 ≥ 0. Rédige comme dans un devoir surveillé (calcul du discriminant, racines, tableau de signes, conclusion).",
          corrige: `On étudie le signe du trinôme f(x) = −x² + 2x + 8 avec a = −1, b = 2, c = 8.

**Discriminant** : Δ = b² − 4ac = 4 − 4 × (−1) × 8 = 4 + 32 = 36 > 0, √Δ = 6.

**Racines** :
x₁ = (−b − √Δ)/(2a) = (−2 − 6)/(−2) = 4
x₂ = (−b + √Δ)/(2a) = (−2 + 6)/(−2) = −2

**Signe** : a = −1 < 0, donc le trinôme est négatif à l'extérieur des racines et positif entre elles.

| x | −∞ … −2 | −2 … 4 | 4 … +∞ |
|---|---|---|---|
| f(x) | − | + | − |

f(x) s'annule en −2 et en 4.

**Conclusion** : **S = [−2 ; 4]**.`,
        },
        {
          type: "redaction",
          question: "Un rectangle a un périmètre de 20 cm et une aire de 21 cm². On note x la longueur d'un de ses côtés.\n1) Exprime l'autre côté en fonction de x.\n2) Montre que x vérifie x² − 10x + 21 = 0.\n3) Détermine les dimensions du rectangle.",
          corrige: `1) Le demi-périmètre vaut 10 cm, donc l'autre côté mesure **10 − x** (avec 0 < x < 10).

2) L'aire vaut x(10 − x) = 21, soit 10x − x² = 21, c'est-à-dire **x² − 10x + 21 = 0**.

3) Δ = 100 − 84 = 16, √Δ = 4.
x₁ = (10 − 4)/2 = 3 et x₂ = (10 + 4)/2 = 7.
Si x = 3, l'autre côté vaut 7 ; si x = 7, l'autre vaut 3.
Le rectangle mesure **3 cm sur 7 cm**. (Vérification : 2 × (3 + 7) = 20 et 3 × 7 = 21.)`,
        },
      ],
    },

    // ───────────────────────── 2. Suites : généralités
    {
      id: "suites-generalites",
      titre: "Suites numériques : généralités",
      theme: "Algèbre",
      cours: `
## Définition
Une **suite numérique** u associe à chaque entier naturel n un réel noté **uₙ** (le terme de rang n). On note la suite (uₙ).

## Deux façons de définir une suite
**1. Par une formule explicite** : uₙ = f(n). On calcule directement n'importe quel terme.
Exemple : uₙ = 3n − 2 ; u₄ = 3 × 4 − 2 = 10.

**2. Par une relation de récurrence** : on donne le premier terme et une relation entre un terme et le suivant, uₙ₊₁ = f(uₙ).
Exemple : u₀ = 2 et uₙ₊₁ = 2uₙ − 1. Alors u₁ = 3, u₂ = 5, u₃ = 9. Pour calculer u₁₀₀, il faut calculer tous les termes précédents (un algorithme le fait très bien).

Attention aux notations : uₙ₊₁ (terme suivant) n'est pas uₙ + 1 (terme plus 1).

## Représentation graphique
On place les points de coordonnées (n ; uₙ) : c'est un **nuage de points** (pas une courbe continue). Pour une suite récurrente, on peut aussi utiliser la droite y = x et la courbe de f pour construire les termes sur l'axe des abscisses.

## Sens de variation
- (uₙ) est **croissante** si, pour tout n, uₙ₊₁ ≥ uₙ.
- (uₙ) est **décroissante** si, pour tout n, uₙ₊₁ ≤ uₙ.
- (uₙ) est **constante** si uₙ₊₁ = uₙ pour tout n.

>! **Méthode 1 : étudier le signe de uₙ₊₁ − uₙ**
>! uₙ = n² + 1 : uₙ₊₁ − uₙ = (n + 1)² + 1 − n² − 1 = 2n + 1 > 0 pour tout n ≥ 0. La suite est croissante.

>! **Méthode 2 : si uₙ = f(n)**, la suite a le même sens de variation que f sur [0 ; +∞[.
>! uₙ = 5 − 2n : f(x) = 5 − 2x est décroissante (coefficient −2 < 0), donc (uₙ) est décroissante.

>! **Méthode 3 : si tous les termes sont strictement positifs**, on compare uₙ₊₁/uₙ à 1.
>! uₙ = 3 × 2ⁿ : uₙ₊₁/uₙ = 2 > 1, la suite est croissante.

## Notion de limite (approche intuitive)
On s'intéresse au comportement de uₙ quand n devient très grand : uₙ peut se rapprocher d'un réel ℓ (on dit que la suite **converge** vers ℓ), ou devenir aussi grand que l'on veut (elle **tend vers +∞**). Exemple : uₙ = 1/(n + 1) se rapproche de 0.

> **À retenir**
> - Explicite : uₙ = f(n) ; récurrente : u₀ et uₙ₊₁ = f(uₙ).
> - Sens de variation : signe de uₙ₊₁ − uₙ (méthode universelle).
> - Si uₙ = f(n), même variation que f sur [0 ; +∞[.
> - uₙ₊₁ ≠ uₙ + 1 !
`,
      exercices: [
        {
          type: "saisie",
          question: "Soit uₙ = 3n − 2. Calcule u₄.",
          reponses: ["10"],
          explication: "u₄ = 3 × 4 − 2 = 12 − 2 = 10.",
        },
        {
          type: "saisie",
          question: "On définit u₀ = 2 et uₙ₊₁ = 2uₙ − 1. Calcule u₃.",
          reponses: ["9"],
          explication: "u₁ = 2 × 2 − 1 = 3 ; u₂ = 2 × 3 − 1 = 5 ; u₃ = 2 × 5 − 1 = 9.",
        },
        {
          type: "qcm",
          question: "Quel est le sens de variation de la suite définie pour n ≥ 0 par uₙ = n² + 1 ?",
          choix: ["Croissante", "Décroissante", "Constante", "Ni croissante ni décroissante"],
          reponse: 0,
          explication: "uₙ₊₁ − uₙ = (n + 1)² − n² = 2n + 1 > 0 pour tout n ≥ 0 : la suite est croissante.",
        },
        {
          type: "vf",
          question: "La suite définie par uₙ = 5 − 2n est décroissante.",
          reponse: true,
          explication: "Vrai : uₙ₊₁ − uₙ = 5 − 2(n + 1) − 5 + 2n = −2 < 0.",
        },
        {
          type: "qcm",
          question: "Soit uₙ = 1/(n + 1). Que vaut u₃ ?",
          choix: ["1/3", "4", "1/4", "3/4"],
          reponse: 2,
          explication: "u₃ = 1/(3 + 1) = 1/4.",
        },
        {
          type: "saisie",
          question: "Soit uₙ = n² − 3n. Exprime uₙ₊₁ − uₙ en fonction de n (forme réduite).",
          reponses: ["2n-2", "2n − 2", "2n - 2", "2(n-1)", "2(n − 1)", "-2+2n"],
          explication: "uₙ₊₁ = (n + 1)² − 3(n + 1) = n² + 2n + 1 − 3n − 3 = n² − n − 2. Donc uₙ₊₁ − uₙ = n² − n − 2 − n² + 3n = 2n − 2. Ce nombre est positif pour n ≥ 1 : la suite est croissante à partir du rang 1.",
        },
        {
          type: "vf",
          question: "Si u₀ = 1 et uₙ₊₁ = uₙ + 3, alors uₙ₊₁ − uₙ = 3, donc (uₙ) est croissante.",
          reponse: true,
          explication: "Vrai : la différence entre deux termes consécutifs vaut 3 > 0. (C'est une suite arithmétique de raison 3.)",
        },
        {
          type: "redaction",
          question: "On considère la suite (uₙ) définie pour tout entier naturel n par uₙ = (2n + 1)/(n + 1).\n1) Calcule u₀, u₁ et u₂.\n2) Étudie le sens de variation de (uₙ).\n3) Montre que pour tout n, uₙ < 2. Que peut-on conjecturer sur la limite ?",
          corrige: `1) u₀ = 1/1 = **1** ; u₁ = 3/2 = **1,5** ; u₂ = 5/3 ≈ **1,67**.

2) On calcule uₙ₊₁ − uₙ :
uₙ₊₁ = (2n + 3)/(n + 2).
uₙ₊₁ − uₙ = (2n + 3)/(n + 2) − (2n + 1)/(n + 1)
= [(2n + 3)(n + 1) − (2n + 1)(n + 2)] / [(n + 1)(n + 2)]
= [(2n² + 5n + 3) − (2n² + 5n + 2)] / [(n + 1)(n + 2)]
= 1 / [(n + 1)(n + 2)].
Pour tout n ≥ 0, (n + 1)(n + 2) > 0, donc uₙ₊₁ − uₙ > 0 : **(uₙ) est strictement croissante**.

3) 2 − uₙ = (2(n + 1) − (2n + 1))/(n + 1) = 1/(n + 1) > 0, donc **uₙ < 2**.
Comme 2 − uₙ = 1/(n + 1) devient aussi proche de 0 que l'on veut, on conjecture que **(uₙ) converge vers 2**.`,
        },
      ],
    },

    // ───────────────────────── 3. Suites arithmétiques et géométriques
    {
      id: "suites-arithmetiques-geometriques",
      titre: "Suites arithmétiques et géométriques",
      theme: "Algèbre",
      cours: `
## Suites arithmétiques
(uₙ) est **arithmétique** de raison r si, pour tout n : **uₙ₊₁ = uₙ + r** (on ajoute toujours le même nombre).
- Formule explicite : **uₙ = u₀ + n × r**, et plus généralement uₙ = uₚ + (n − p) × r.
- Sens de variation : croissante si r > 0, décroissante si r < 0, constante si r = 0.
- Représentation : points **alignés**. Elle modélise une **croissance linéaire** (augmentation d'une quantité fixe).

>! **Exemple** : u₃ = 11 et u₇ = 23. Alors u₇ = u₃ + 4r, donc 4r = 12, r = 3 et u₀ = 11 − 9 = 2.

**Somme des premiers entiers** : 1 + 2 + … + n = **n(n + 1)/2**. Par exemple 1 + 2 + … + 100 = 5 050.
**Somme de termes consécutifs** : S = nombre de termes × (premier terme + dernier terme)/2.

## Suites géométriques
(vₙ) est **géométrique** de raison q si, pour tout n : **vₙ₊₁ = q × vₙ** (on multiplie toujours par le même nombre).
- Formule explicite : **vₙ = v₀ × qⁿ**, et vₙ = vₚ × qⁿ⁻ᵖ.
- Sens de variation (avec v₀ > 0) : croissante si q > 1, décroissante si 0 < q < 1.
- Elle modélise une **évolution à taux constant** : augmenter de t % revient à multiplier par **1 + t/100** ; baisser de t % revient à multiplier par **1 − t/100**.

>! **Exemple** : un salaire de 2 000 € augmente de 2 % par an. sₙ = 2 000 × 1,02ⁿ.
>! Après 3 ans : s₃ = 2 000 × 1,02³ ≈ 2 122,42 €.

**Somme des puissances** (q ≠ 1) : 1 + q + q² + … + qⁿ = **(1 − qⁿ⁺¹)/(1 − q)**.
Par exemple 1 + 2 + 4 + … + 2¹⁰ = (1 − 2¹¹)/(1 − 2) = 2 047.
Somme de termes consécutifs : S = premier terme × (1 − q^(nombre de termes))/(1 − q).

## Montrer qu'une suite est arithmétique ou géométrique
>! **Méthode**
>! - Arithmétique : calculer uₙ₊₁ − uₙ et montrer que c'est une constante r.
>! - Géométrique (termes non nuls) : calculer uₙ₊₁/uₙ et montrer que c'est une constante q, ou écrire uₙ₊₁ = q × uₙ.
>! Pour montrer qu'une suite n'est **pas** arithmétique, un contre-exemple suffit : u₁ − u₀ ≠ u₂ − u₁.

| | Arithmétique | Géométrique |
|---|---|---|
| Relation | uₙ₊₁ = uₙ + r | vₙ₊₁ = q × vₙ |
| Explicite | uₙ = u₀ + nr | vₙ = v₀ × qⁿ |
| Croissance | linéaire | exponentielle |
| Somme | n(n + 1)/2 pour 1 + … + n | (1 − qⁿ⁺¹)/(1 − q) pour 1 + … + qⁿ |

> **À retenir**
> - Arithmétique : + r ; uₙ = u₀ + nr.
> - Géométrique : × q ; vₙ = v₀qⁿ.
> - Hausse de t % : × (1 + t/100).
> - 1 + 2 + … + n = n(n + 1)/2 ; 1 + q + … + qⁿ = (1 − qⁿ⁺¹)/(1 − q).
`,
      exercices: [
        {
          type: "saisie",
          question: "(uₙ) est arithmétique de premier terme u₀ = 5 et de raison 3. Calcule u₁₀.",
          reponses: ["35"],
          explication: "u₁₀ = u₀ + 10r = 5 + 30 = 35.",
        },
        {
          type: "saisie",
          question: "(vₙ) est géométrique de premier terme v₀ = 3 et de raison 2. Calcule v₅.",
          reponses: ["96"],
          explication: "v₅ = v₀ × q⁵ = 3 × 32 = 96.",
        },
        {
          type: "qcm",
          question: "Combien vaut 1 + 2 + 3 + … + 100 ?",
          choix: ["10 000", "5 000", "5 050", "10 100"],
          reponse: 2,
          explication: "1 + 2 + … + n = n(n + 1)/2, donc 100 × 101/2 = 5 050.",
        },
        {
          type: "vf",
          question: "Une suite géométrique de premier terme 10 et de raison 0,8 est décroissante.",
          reponse: true,
          explication: "Vrai : v₀ > 0 et 0 < q < 1, donc vₙ₊₁ = 0,8vₙ < vₙ. Elle modélise une baisse de 20 % à chaque étape.",
        },
        {
          type: "saisie",
          question: "(uₙ) est arithmétique avec u₃ = 11 et u₇ = 23. Quelle est sa raison ?",
          reponses: ["3"],
          explication: "u₇ = u₃ + 4r, donc 23 = 11 + 4r, 4r = 12, r = 3.",
        },
        {
          type: "qcm",
          question: "Combien vaut 1 + 2 + 2² + … + 2¹⁰ ?",
          choix: ["2 047", "2 048", "1 023", "2¹⁰"],
          reponse: 0,
          explication: "1 + q + … + qⁿ = (1 − qⁿ⁺¹)/(1 − q) avec q = 2 et n = 10 : (1 − 2¹¹)/(1 − 2) = 2¹¹ − 1 = 2 048 − 1 = 2 047.",
        },
        {
          type: "saisie",
          question: "Un salaire de 2 000 € augmente de 2 % par an. Quel est le salaire au bout de 3 ans (arrondi au centime, en €) ?",
          reponses: ["2122,42", "2122.42", "2 122,42", "2122,42 €"],
          explication: "Augmenter de 2 %, c'est multiplier par 1,02. s₃ = 2 000 × 1,02³ = 2 000 × 1,061208 = 2 122,416 ≈ 2 122,42 €.",
        },
        {
          type: "vf",
          question: "La suite définie par uₙ = n² est arithmétique.",
          reponse: false,
          explication: "Faux : u₀ = 0, u₁ = 1, u₂ = 4. u₁ − u₀ = 1 mais u₂ − u₁ = 3 : la différence n'est pas constante.",
        },
        {
          type: "redaction",
          question: "On propose à Inès deux contrats pour un emploi de 12 mois.\n• Contrat A : 1 000 € le premier mois, puis une augmentation de 50 € chaque mois.\n• Contrat B : 1 000 € le premier mois, puis une augmentation de 4 % chaque mois.\nOn note aₙ et bₙ les salaires du n-ième mois (a₁ = b₁ = 1 000).\n1) Précise la nature des suites (aₙ) et (bₙ) et exprime aₙ et bₙ en fonction de n.\n2) Calcule le salaire du 12e mois dans chaque cas (arrondi à l'euro).\n3) Quel contrat rapporte le plus sur les 12 mois ? Justifie par des calculs de sommes.",
          corrige: `1) Chaque mois on ajoute 50 € : (aₙ) est **arithmétique** de raison 50, aₙ = 1 000 + 50(n − 1).
Chaque mois on multiplie par 1,04 : (bₙ) est **géométrique** de raison 1,04, bₙ = 1 000 × 1,04ⁿ⁻¹.

2) a₁₂ = 1 000 + 50 × 11 = **1 550 €**.
b₁₂ = 1 000 × 1,04¹¹ ≈ **1 539 €**.

3) Contrat A : somme de 12 termes d'une suite arithmétique :
S_A = 12 × (a₁ + a₁₂)/2 = 12 × (1 000 + 1 550)/2 = 12 × 1 275 = **15 300 €**.
Contrat B : somme de 12 termes d'une suite géométrique :
S_B = 1 000 × (1 − 1,04¹²)/(1 − 1,04) ≈ 1 000 × 15,0258 ≈ **15 026 €**.

Sur 12 mois, le **contrat A** est le plus avantageux (environ 274 € de plus). Sur une durée plus longue, la croissance exponentielle du contrat B finirait par l'emporter.`,
        },
      ],
    },

    // ───────────────────────── 4. Nombre dérivé et tangente
    {
      id: "nombre-derive",
      titre: "Nombre dérivé et tangente",
      theme: "Analyse",
      cours: `
## Taux d'accroissement
Soit f une fonction définie sur un intervalle I, a ∈ I et h ≠ 0 tel que a + h ∈ I. Le **taux d'accroissement** de f entre a et a + h est :
**τ(h) = (f(a + h) − f(a))/h**.
C'est le **coefficient directeur de la sécante** passant par les points A(a ; f(a)) et M(a + h ; f(a + h)).

## Nombre dérivé
On dit que f est **dérivable en a** si τ(h) se rapproche d'un nombre réel ℓ quand h tend vers 0. Ce nombre est le **nombre dérivé** de f en a, noté **f′(a)** :
**f′(a) = lim (h → 0) (f(a + h) − f(a))/h**.

>! **Exemple** : f(x) = x², a = 3.
>! τ(h) = ((3 + h)² − 9)/h = (9 + 6h + h² − 9)/h = (6h + h²)/h = 6 + h.
>! Quand h tend vers 0, 6 + h tend vers 6 : **f′(3) = 6**.

Interprétation : f′(a) mesure la **vitesse de variation** de f en a (en physique : vitesse instantanée quand f est une position).

Exemple de non-dérivabilité : f(x) = |x| en 0. τ(h) = |h|/h vaut 1 si h > 0 et −1 si h < 0 : pas de limite unique, f n'est pas dérivable en 0 (la courbe a un « point anguleux »).

## Tangente à une courbe
Quand h tend vers 0, la sécante (AM) se rapproche d'une droite limite : la **tangente** à la courbe en A.
**La tangente à la courbe de f au point d'abscisse a est la droite passant par A(a ; f(a)) et de coefficient directeur f′(a).**

Son équation est : **y = f′(a)(x − a) + f(a)**.

>! **Méthode : déterminer l'équation d'une tangente**
>! 1. Calculer f(a).
>! 2. Calculer f′(a).
>! 3. Remplacer dans y = f′(a)(x − a) + f(a) et développer.
>! Exemple : f(x) = x² en a = 1 : f(1) = 1, f′(1) = 2, y = 2(x − 1) + 1 = **2x − 1**.

## Lecture graphique
- f′(a) est le **coefficient directeur** de la tangente : on le lit avec « déplacement vertical ÷ déplacement horizontal » entre deux points de la tangente.
- Tangente horizontale ⟺ f′(a) = 0.
- Tangente « qui monte » ⟺ f′(a) > 0 ; « qui descend » ⟺ f′(a) < 0.

> **À retenir**
> - f′(a) = limite du taux (f(a + h) − f(a))/h quand h → 0.
> - f′(a) = coefficient directeur de la tangente en a.
> - Tangente : y = f′(a)(x − a) + f(a).
> - Tangente horizontale ⟺ f′(a) = 0.
`,
      exercices: [
        {
          type: "qcm",
          question: "Graphiquement, le nombre dérivé f′(a) représente :",
          choix: [
            "l'ordonnée du point de la courbe d'abscisse a",
            "le coefficient directeur de la tangente à la courbe au point d'abscisse a",
            "l'ordonnée à l'origine de la tangente",
            "l'aire sous la courbe",
          ],
          reponse: 1,
          explication: "f′(a) est la pente de la tangente au point A(a ; f(a)). L'ordonnée de A est f(a), pas f′(a).",
        },
        {
          type: "saisie",
          question: "Pour f(x) = x², exprime le taux d'accroissement (f(1 + h) − f(1))/h en fonction de h (forme simplifiée).",
          reponses: ["2+h", "h+2", "2 + h", "h + 2"],
          explication: "(1 + h)² − 1 = 1 + 2h + h² − 1 = 2h + h² = h(2 + h). En divisant par h ≠ 0 : 2 + h. Sa limite quand h → 0 est 2 = f′(1).",
        },
        {
          type: "saisie",
          question: "Pour f(x) = x², que vaut f′(3) ?",
          reponses: ["6"],
          explication: "Le taux d'accroissement en 3 vaut 6 + h, qui tend vers 6 quand h → 0. (On retrouve f′(x) = 2x.)",
        },
        {
          type: "qcm",
          question: "Quelle est l'équation de la tangente à la courbe de f(x) = x² au point d'abscisse 1 ?",
          choix: ["y = 2x + 1", "y = x", "y = 2x", "y = 2x − 1"],
          reponse: 3,
          explication: "f(1) = 1, f′(1) = 2. y = 2(x − 1) + 1 = 2x − 1.",
        },
        {
          type: "vf",
          question: "La fonction valeur absolue x ↦ |x| est dérivable en 0.",
          reponse: false,
          explication: "Faux : le taux |h|/h vaut 1 pour h > 0 et −1 pour h < 0 ; il n'a pas de limite en 0. La courbe a un point anguleux en 0.",
        },
        {
          type: "saisie",
          question: "On sait que f(2) = 3 et f′(2) = −1. Donne l'équation réduite de la tangente au point d'abscisse 2 (forme y = mx + p).",
          reponses: ["y=-x+5", "y = -x + 5", "y=−x+5", "y = −x + 5", "y=5-x", "y = 5 - x", "y = 5 − x", "y=-1x+5", "-x+5", "5-x"],
          explication: "y = f′(2)(x − 2) + f(2) = −(x − 2) + 3 = −x + 2 + 3 = −x + 5.",
        },
        {
          type: "qcm",
          question: "Soit f(x) = 1/x. Que vaut f′(2) ?",
          choix: ["1/2", "−1/4", "−1/2", "1/4"],
          reponse: 1,
          explication: "(1/(2 + h) − 1/2)/h = ((2 − (2 + h))/(2(2 + h)))/h = −1/(2(2 + h)), qui tend vers −1/4. (On retrouve f′(x) = −1/x².)",
        },
        {
          type: "vf",
          question: "Si la tangente au point d'abscisse a est horizontale, alors f′(a) = 0.",
          reponse: true,
          explication: "Vrai : une droite horizontale a un coefficient directeur nul.",
        },
        {
          type: "redaction",
          question: "Soit f la fonction définie sur ℝ par f(x) = x² + 3x.\n1) Montre, en utilisant le taux d'accroissement, que f est dérivable en 1 et calcule f′(1).\n2) Détermine l'équation réduite de la tangente T à la courbe de f au point d'abscisse 1.\n3) Le point B(3 ; 14) appartient-il à T ?",
          corrige: `1) f(1) = 1 + 3 = 4. Pour h ≠ 0 :
f(1 + h) = (1 + h)² + 3(1 + h) = 1 + 2h + h² + 3 + 3h = 4 + 5h + h².
τ(h) = (f(1 + h) − f(1))/h = (5h + h²)/h = 5 + h.
Quand h tend vers 0, 5 + h tend vers 5. Donc f est dérivable en 1 et **f′(1) = 5**.

2) T : y = f′(1)(x − 1) + f(1) = 5(x − 1) + 4, soit **y = 5x − 1**.

3) Pour x = 3 : 5 × 3 − 1 = 14. **Oui**, B(3 ; 14) appartient à T.`,
        },
      ],
    },
    // ───────────────────────── 5. Fonctions dérivées
    {
      id: "fonctions-derivees",
      titre: "Fonctions dérivées et opérations",
      theme: "Analyse",
      cours: `
## Fonction dérivée
Si f est dérivable en tout réel x d'un intervalle I, la fonction qui à x associe f′(x) est la **fonction dérivée** de f, notée f′.

## Dérivées des fonctions usuelles
| Fonction f(x) | Dérivée f′(x) | Ensemble de dérivabilité |
|---|---|---|
| k (constante) | 0 | ℝ |
| x | 1 | ℝ |
| mx + p | m | ℝ |
| x² | 2x | ℝ |
| x³ | 3x² | ℝ |
| xⁿ (n entier ≥ 1) | n xⁿ⁻¹ | ℝ |
| 1/x | −1/x² | ]−∞ ; 0[ et ]0 ; +∞[ |
| √x | 1/(2√x) | ]0 ; +∞[ (pas en 0 !) |

>! **Exemple de démonstration** : pour f(x) = 1/x et a ≠ 0,
>! (f(a + h) − f(a))/h = (1/(a + h) − 1/a)/h = −1/(a(a + h)) → −1/a² quand h → 0.

## Opérations sur les dérivées
u et v sont deux fonctions dérivables sur I, k un réel.

| Fonction | Dérivée |
|---|---|
| u + v | u′ + v′ |
| k × u | k × u′ |
| u × v | **u′v + uv′** |
| 1/v (v ≠ 0) | **−v′/v²** |
| u/v (v ≠ 0) | **(u′v − uv′)/v²** |
| x ↦ g(ax + b) | x ↦ **a × g′(ax + b)** |

>! **Exemples**
>! - f(x) = 3x² − 5x + 2 : f′(x) = 6x − 5.
>! - f(x) = (2x + 1)(x − 3) : u = 2x + 1, u′ = 2 ; v = x − 3, v′ = 1. f′(x) = 2(x − 3) + (2x + 1) × 1 = 4x − 5.
>! - f(x) = (3x − 1)/(x + 2) : f′(x) = [3(x + 2) − (3x − 1) × 1]/(x + 2)² = 7/(x + 2)².
>! - f(x) = 1/(x² + 1) : v = x² + 1, v′ = 2x. f′(x) = −2x/(x² + 1)².
>! - f(x) = √(2x + 1) avec g = √, a = 2 : f′(x) = 2 × 1/(2√(2x + 1)) = 1/√(2x + 1).
>! - f(x) = (2x − 1)⁴ : f′(x) = 2 × 4(2x − 1)³ = 8(2x − 1)³.

## Conseils de rédaction
1. Préciser l'intervalle où la fonction est dérivable.
2. Nommer u et v, calculer u′ et v′ **avant** d'appliquer la formule.
3. Pour un quotient, **ne pas développer le dénominateur** (v² reste au carré : il est positif, ce qui aide pour le signe).
4. Factoriser f′(x) au maximum : le but est souvent d'étudier son signe.

> **À retenir**
> - (xⁿ)′ = nxⁿ⁻¹ ; (1/x)′ = −1/x² ; (√x)′ = 1/(2√x).
> - (uv)′ = u′v + uv′ ; (u/v)′ = (u′v − uv′)/v².
> - (g(ax + b))′ = a g′(ax + b).
> - √ n'est pas dérivable en 0.
`,
      exercices: [
        {
          type: "saisie",
          question: "Soit f(x) = 3x² − 5x + 2. Donne f′(x).",
          reponses: ["6x-5", "6x − 5", "6x - 5", "-5+6x"],
          explication: "(3x²)′ = 3 × 2x = 6x ; (−5x)′ = −5 ; (2)′ = 0. Donc f′(x) = 6x − 5.",
        },
        {
          type: "qcm",
          question: "Quelle est la dérivée de x ↦ x³ ?",
          choix: ["3x", "x²", "3x²", "3x³"],
          reponse: 2,
          explication: "(xⁿ)′ = nxⁿ⁻¹ avec n = 3 : 3x².",
        },
        {
          type: "saisie",
          question: "Soit f(x) = (2x + 1)(x − 3). Donne f′(x) sous forme réduite.",
          reponses: ["4x-5", "4x − 5", "4x - 5", "-5+4x"],
          explication: "u = 2x + 1 (u′ = 2), v = x − 3 (v′ = 1). f′ = u′v + uv′ = 2(x − 3) + (2x + 1) = 4x − 5. Vérification : f(x) = 2x² − 5x − 3, f′(x) = 4x − 5.",
        },
        {
          type: "qcm",
          question: "Quelle est la dérivée de f(x) = 1/(x² + 1) ?",
          choix: ["1/(2x)", "−1/(x² + 1)²", "2x/(x² + 1)²", "−2x/(x² + 1)²"],
          reponse: 3,
          explication: "(1/v)′ = −v′/v² avec v = x² + 1 et v′ = 2x : f′(x) = −2x/(x² + 1)².",
        },
        {
          type: "vf",
          question: "La fonction racine carrée est dérivable en 0.",
          reponse: false,
          explication: "Faux : le taux √h/h = 1/√h devient infiniment grand quand h → 0⁺. La courbe a une tangente verticale en 0. √ est dérivable seulement sur ]0 ; +∞[.",
        },
        {
          type: "saisie",
          question: "Soit f(x) = (3x − 1)/(x + 2) sur ]−2 ; +∞[. Donne f′(x).",
          reponses: ["7/(x+2)²", "7/(x + 2)²", "7/(x+2)^2", "7/(x + 2)^2", "7/((x+2)^2)"],
          explication: "u = 3x − 1 (u′ = 3), v = x + 2 (v′ = 1). f′ = (u′v − uv′)/v² = (3(x + 2) − (3x − 1))/(x + 2)² = (3x + 6 − 3x + 1)/(x + 2)² = 7/(x + 2)².",
        },
        {
          type: "qcm",
          question: "Quelle est la dérivée de f(x) = (2x − 1)⁴ ?",
          choix: ["4(2x − 1)³", "8(2x − 1)³", "8x(2x − 1)³", "2(2x − 1)⁴"],
          reponse: 1,
          explication: "f(x) = g(2x − 1) avec g(X) = X⁴, g′(X) = 4X³. f′(x) = 2 × 4(2x − 1)³ = 8(2x − 1)³. Ne pas oublier le facteur a = 2.",
        },
        {
          type: "vf",
          question: "La dérivée d'un produit est le produit des dérivées : (uv)′ = u′v′.",
          reponse: false,
          explication: "Faux : (uv)′ = u′v + uv′. Contre-exemple : x × x = x² a pour dérivée 2x, alors que 1 × 1 = 1.",
        },
        {
          type: "redaction",
          question: "Calcule la dérivée de chacune des fonctions suivantes en précisant l'intervalle de dérivabilité :\n1) f(x) = x³ − 4x² + 7x − 1 sur ℝ ;\n2) g(x) = x√x sur ]0 ; +∞[ ;\n3) h(x) = (x² + 1)/(x − 1) sur ]1 ; +∞[ ;\n4) k(x) = √(4x + 2) sur ]−1/2 ; +∞[.",
          corrige: `1) f est un polynôme, dérivable sur ℝ : **f′(x) = 3x² − 8x + 7**.

2) g = u × v avec u(x) = x (u′ = 1) et v(x) = √x (v′ = 1/(2√x)), dérivables sur ]0 ; +∞[.
g′(x) = 1 × √x + x × 1/(2√x) = √x + √x/2 = **(3/2)√x**
(car x/√x = √x).

3) h = u/v avec u(x) = x² + 1 (u′ = 2x) et v(x) = x − 1 (v′ = 1), v ne s'annule pas sur ]1 ; +∞[.
h′(x) = [2x(x − 1) − (x² + 1) × 1]/(x − 1)² = (2x² − 2x − x² − 1)/(x − 1)² = **(x² − 2x − 1)/(x − 1)²**.

4) k(x) = g(4x + 2) avec g = √, dérivable car 4x + 2 > 0 sur ]−1/2 ; +∞[.
k′(x) = 4 × 1/(2√(4x + 2)) = **2/√(4x + 2)**.`,
        },
      ],
    },

    // ───────────────────────── 6. Variations et extremums
    {
      id: "variations-extremums",
      titre: "Variations et extremums",
      theme: "Analyse",
      cours: `
## Lien entre signe de la dérivée et variations
Soit f dérivable sur un **intervalle** I.
- Si **f′(x) ≥ 0** pour tout x de I, alors f est **croissante** sur I.
- Si **f′(x) ≤ 0** pour tout x de I, alors f est **décroissante** sur I.
- Si f′(x) = 0 pour tout x de I, alors f est constante sur I.
Si f′ est strictement positive (sauf éventuellement en des points isolés où elle s'annule), f est strictement croissante.

## Extremums locaux
Si f′ **s'annule en changeant de signe** en a (a n'étant pas une borne de I), alors f admet un **extremum local** en a :
- f′ passe de + à − : **maximum** local ;
- f′ passe de − à + : **minimum** local.

Attention : f′(a) = 0 ne suffit pas ! Pour f(x) = x³, f′(0) = 0 mais f′ ne change pas de signe (f′(x) = 3x² ≥ 0) : pas d'extremum en 0.

## Méthode d'étude des variations
>! **Méthode**
>! 1. Préciser le domaine et calculer f′(x).
>! 2. Factoriser f′(x) et étudier son signe (tableau de signes, second degré…).
>! 3. Dresser le tableau de variations (flèches) en calculant les valeurs aux bornes et aux extremums.
>! 4. Conclure : extremums, nombre de solutions, inégalités…

## Exemple résolu
f(x) = x³ − 3x sur ℝ.
- f′(x) = 3x² − 3 = 3(x² − 1) = 3(x − 1)(x + 1).
- f′(x) est un trinôme de coefficient 3 > 0 : positif à l'extérieur des racines −1 et 1, négatif entre.

| x | −∞ … −1 | −1 … 1 | 1 … +∞ |
|---|---|---|---|
| f′(x) | + | − | + |
| f | croissante ↗ | décroissante ↘ | croissante ↗ |

f(−1) = −1 + 3 = 2 (maximum local) ; f(1) = 1 − 3 = −2 (minimum local).

## Applications
- **Optimisation** : trouver la valeur qui rend une quantité (aire, volume, bénéfice) maximale ou minimale.
- **Inégalités** : pour montrer f(x) ≥ g(x), on étudie d(x) = f(x) − g(x) et on montre que son minimum est positif.
- **Position relative** courbe/tangente.

> **À retenir**
> - f′ ≥ 0 ⟹ f croissante ; f′ ≤ 0 ⟹ f décroissante (sur un intervalle).
> - Extremum local en a ⟸ f′ s'annule **et change de signe** en a.
> - Toujours factoriser f′ pour étudier son signe.
`,
      exercices: [
        {
          type: "vf",
          question: "Si f′(x) > 0 pour tout x d'un intervalle I, alors f est strictement croissante sur I.",
          reponse: true,
          explication: "Vrai : c'est le théorème qui relie le signe de la dérivée au sens de variation.",
        },
        {
          type: "qcm",
          question: "Soit f(x) = x² − 4x + 1. Quel est le minimum de f sur ℝ ?",
          choix: ["1, atteint en 0", "−3, atteint en 2", "−4, atteint en 2", "−3, atteint en −2"],
          reponse: 1,
          explication: "f′(x) = 2x − 4 s'annule en 2 en passant de − à + : minimum f(2) = 4 − 8 + 1 = −3.",
        },
        {
          type: "saisie",
          question: "Soit f(x) = x³ − 3x. En quelle valeur strictement positive f′ s'annule-t-elle ?",
          reponses: ["1", "x=1", "x = 1"],
          explication: "f′(x) = 3x² − 3 = 3(x − 1)(x + 1), qui s'annule en −1 et en 1. La valeur positive est 1.",
        },
        {
          type: "qcm",
          question: "Quelles sont les variations de f(x) = x³ − 3x sur ℝ ?",
          choix: [
            "Croissante sur ℝ",
            "Décroissante sur ]−∞ ; −1], croissante sur [−1 ; 1], décroissante sur [1 ; +∞[",
            "Décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[",
            "Croissante sur ]−∞ ; −1], décroissante sur [−1 ; 1], croissante sur [1 ; +∞[",
          ],
          reponse: 3,
          explication: "f′(x) = 3(x − 1)(x + 1) est positive à l'extérieur de [−1 ; 1] et négative entre −1 et 1.",
        },
        {
          type: "saisie",
          question: "Quelle est la valeur du maximum local de f(x) = x³ − 3x ?",
          reponses: ["2"],
          explication: "Le maximum local est atteint en −1 : f(−1) = (−1)³ − 3 × (−1) = −1 + 3 = 2.",
        },
        {
          type: "vf",
          question: "Si f′(a) = 0, alors f admet forcément un extremum local en a.",
          reponse: false,
          explication: "Faux : contre-exemple f(x) = x³ en 0. f′(0) = 0 mais f′(x) = 3x² ne change pas de signe ; f est croissante sur ℝ et n'a pas d'extremum.",
        },
        {
          type: "redaction",
          question: "Soit f la fonction définie sur [−2 ; 3] par f(x) = 2x³ − 3x² − 12x + 5.\n1) Calcule f′(x) et factorise-la.\n2) Étudie le signe de f′(x) et dresse le tableau de variations de f.\n3) Donne le maximum et le minimum de f sur [−2 ; 3].",
          corrige: `1) f′(x) = 6x² − 6x − 12 = 6(x² − x − 2).
Le trinôme x² − x − 2 a pour discriminant Δ = 1 + 8 = 9 et pour racines (1 − 3)/2 = −1 et (1 + 3)/2 = 2.
Donc **f′(x) = 6(x + 1)(x − 2)**.

2) f′ est un trinôme de coefficient 6 > 0 : positif à l'extérieur des racines, négatif entre.

| x | −2 … −1 | −1 … 2 | 2 … 3 |
|---|---|---|---|
| f′(x) | + | − | + |
| f | ↗ de 1 à 12 | ↘ de 12 à −15 | ↗ de −15 à −4 |

Valeurs : f(−2) = −16 − 12 + 24 + 5 = 1 ; f(−1) = −2 − 3 + 12 + 5 = 12 ; f(2) = 16 − 12 − 24 + 5 = −15 ; f(3) = 54 − 27 − 36 + 5 = −4.

3) Sur [−2 ; 3], le **maximum est 12** (atteint en x = −1) et le **minimum est −15** (atteint en x = 2).`,
        },
        {
          type: "redaction",
          question: "Dans une feuille carrée de 12 cm de côté, on découpe aux quatre coins un carré de côté x cm, puis on replie pour obtenir une boîte sans couvercle.\n1) Justifie que x ∈ ]0 ; 6[ et que le volume est V(x) = x(12 − 2x)².\n2) Montre que V′(x) = (12 − 2x)(12 − 6x).\n3) Pour quelle valeur de x le volume est-il maximal ? Quel est ce volume ?",
          corrige: `1) Le fond est un carré de côté 12 − 2x, qui doit être strictement positif : x < 6. Et x > 0. La hauteur de la boîte est x.
V(x) = aire du fond × hauteur = **(12 − 2x)² × x**.

2) V = u × v avec u(x) = x (u′ = 1) et v(x) = (12 − 2x)² (v′(x) = −2 × 2(12 − 2x) = −4(12 − 2x)).
V′(x) = (12 − 2x)² − 4x(12 − 2x) = (12 − 2x)[(12 − 2x) − 4x] = **(12 − 2x)(12 − 6x)**.

3) Sur ]0 ; 6[, 12 − 2x > 0, donc V′(x) est du signe de 12 − 6x : positif si x < 2, négatif si x > 2.
V est croissante sur ]0 ; 2] puis décroissante sur [2 ; 6[ : le maximum est atteint pour **x = 2 cm**.
V(2) = 2 × (12 − 4)² = 2 × 64 = **128 cm³**.`,
        },
      ],
    },

    // ───────────────────────── 7. Fonction exponentielle
    {
      id: "exponentielle",
      titre: "La fonction exponentielle",
      theme: "Analyse",
      cours: `
## Définition
Il existe une **unique** fonction f dérivable sur ℝ telle que **f′ = f** et **f(0) = 1**. C'est la fonction **exponentielle**, notée exp. On note **exp(x) = eˣ**, où **e = exp(1) ≈ 2,718**.

## Propriétés algébriques
Pour tous réels a et b et tout entier n :
| Propriété | Exemple |
|---|---|
| eᵃ⁺ᵇ = eᵃ × eᵇ | e² × e³ = e⁵ |
| e⁻ᵃ = 1/eᵃ | e⁻¹ = 1/e |
| eᵃ⁻ᵇ = eᵃ/eᵇ | e⁵/e² = e³ |
| (eᵃ)ⁿ = eⁿᵃ | (e²)³ = e⁶ |
| e⁰ = 1 | |

Ce sont les mêmes règles que pour les puissances !

## Signe et variations
- Pour tout réel x, **eˣ > 0**.
- (eˣ)′ = eˣ > 0 : la fonction exponentielle est **strictement croissante** sur ℝ.
- Sa courbe passe par (0 ; 1) et (1 ; e) ; la tangente en 0 a pour équation y = x + 1.

## Équations et inéquations
La stricte croissance donne, pour tous réels a et b :
- **eᵃ = eᵇ ⟺ a = b**
- **eᵃ < eᵇ ⟺ a < b**

>! **Exemples**
>! - e²ˣ⁻¹ = e³ ⟺ 2x − 1 = 3 ⟺ x = 2.
>! - eˣ ≤ 1 ⟺ eˣ ≤ e⁰ ⟺ x ≤ 0. S = ]−∞ ; 0].
>! - e^(x²) = e^(4x − 3) ⟺ x² − 4x + 3 = 0 ⟺ x = 1 ou x = 3.

## Dérivée de x ↦ e^(ax + b)
**(e^(ax + b))′ = a e^(ax + b)**. Par exemple (e³ˣ)′ = 3e³ˣ et (e⁻ˣ)′ = −e⁻ˣ.

>! **Étudier une fonction du type (ax + b)eˣ**
>! f(x) = (x − 1)eˣ : f′(x) = 1 × eˣ + (x − 1)eˣ = x eˣ.
>! Comme eˣ > 0, f′(x) est du signe de x : f décroissante sur ]−∞ ; 0], croissante sur [0 ; +∞[, minimum f(0) = −1.

## Lien avec les suites géométriques
Pour tout réel a, la suite (e^(na)) est **géométrique** de raison eᵃ, car e^((n + 1)a) = e^(na) × eᵃ. Exemple : uₙ = e^(0,5n) est géométrique de raison e^(0,5) = √e.
Les fonctions x ↦ e^(kx) modélisent des phénomènes à croissance (k > 0) ou décroissance (k < 0) exponentielle : population, radioactivité, refroidissement…

**Construction approchée** : la **méthode d'Euler** (au programme, avec Python) permet de tracer point par point une approximation de la courbe de exp à partir de f′ = f et f(0) = 1 : voir le chapitre « Algorithmes en analyse : méthodes d'Euler et de Newton ».

> **À retenir**
> - exp′ = exp, exp(0) = 1, e ≈ 2,718.
> - eᵃ⁺ᵇ = eᵃeᵇ ; e⁻ᵃ = 1/eᵃ ; (eᵃ)ⁿ = eⁿᵃ.
> - eˣ > 0 et exp strictement croissante.
> - eᵃ = eᵇ ⟺ a = b ; eᵃ < eᵇ ⟺ a < b.
> - (e^(ax + b))′ = a e^(ax + b).
`,
      exercices: [
        {
          type: "qcm",
          question: "Combien vaut e⁰ ?",
          choix: ["0", "e", "1", "Non défini"],
          reponse: 2,
          explication: "Par définition, exp(0) = 1.",
        },
        {
          type: "saisie",
          question: "Simplifie e³ × e⁻⁵ / e⁻¹ sous la forme eⁿ (tu peux écrire e^n).",
          reponses: ["e^-1", "e^(-1)", "e⁻¹", "1/e", "e^(−1)", "e^−1"],
          explication: "e³ × e⁻⁵ = e⁻², puis e⁻²/e⁻¹ = e⁻²⁺¹ = e⁻¹ = 1/e.",
        },
        {
          type: "vf",
          question: "Pour tout réel x, eˣ > 0.",
          reponse: true,
          explication: "Vrai : la fonction exponentielle est strictement positive sur ℝ. Une équation comme eˣ = −2 n'a donc aucune solution.",
        },
        {
          type: "saisie",
          question: "Résous l'équation e^(2x − 1) = e³. Donne la valeur de x.",
          reponses: ["2", "x=2", "x = 2"],
          explication: "eᵃ = eᵇ ⟺ a = b : 2x − 1 = 3, donc x = 2.",
        },
        {
          type: "qcm",
          question: "Quelle est la dérivée de x ↦ e³ˣ ?",
          choix: ["e³ˣ", "3e³ˣ", "3x e³ˣ⁻¹", "e³"],
          reponse: 1,
          explication: "(e^(ax + b))′ = a e^(ax + b) avec a = 3 : 3e³ˣ.",
        },
        {
          type: "qcm",
          question: "Quel est l'ensemble des solutions de eˣ ≤ 1 ?",
          choix: ["[0 ; +∞[", "]−∞ ; 1]", "]−∞ ; 0]", "ℝ"],
          reponse: 2,
          explication: "1 = e⁰, donc eˣ ≤ e⁰ ⟺ x ≤ 0 (exp est strictement croissante). S = ]−∞ ; 0].",
        },
        {
          type: "saisie",
          question: "Soit f(x) = (x − 1)eˣ. Donne f′(x) sous forme factorisée.",
          reponses: ["xe^x", "x e^x", "xeˣ", "x eˣ", "x×e^x", "x × eˣ", "x*e^x", "e^x×x", "x×eˣ"],
          explication: "Produit u × v avec u = x − 1 (u′ = 1) et v = eˣ (v′ = eˣ) : f′(x) = eˣ + (x − 1)eˣ = x eˣ.",
        },
        {
          type: "vf",
          question: "La suite définie par uₙ = e^(0,5n) est géométrique de raison √e.",
          reponse: true,
          explication: "Vrai : uₙ₊₁ = e^(0,5n + 0,5) = e^(0,5n) × e^(0,5) = √e × uₙ, car e^(0,5) = (e)^(1/2) = √e.",
        },
        {
          type: "redaction",
          question: "Soit f la fonction définie sur ℝ par f(x) = (2x − 3)eˣ.\n1) Montre que f′(x) = (2x − 1)eˣ.\n2) Étudie le signe de f′(x) et dresse le tableau de variations de f.\n3) Donne la valeur exacte du minimum de f, puis une valeur approchée au centième.\n4) Résous l'équation f(x) = 0.",
          corrige: `1) f = u × v avec u(x) = 2x − 3 (u′ = 2) et v(x) = eˣ (v′ = eˣ).
f′(x) = 2eˣ + (2x − 3)eˣ = (2 + 2x − 3)eˣ = **(2x − 1)eˣ**.

2) Comme eˣ > 0 pour tout x, f′(x) est du signe de 2x − 1, qui s'annule en 1/2.

| x | −∞ … 1/2 | 1/2 … +∞ |
|---|---|---|
| f′(x) | − | + |
| f | décroissante ↘ | croissante ↗ |

3) Le minimum est atteint en 1/2 : f(1/2) = (1 − 3)e^(1/2) = **−2√e ≈ −3,30**.

4) f(x) = 0 ⟺ (2x − 3)eˣ = 0 ⟺ 2x − 3 = 0 (car eˣ ≠ 0) ⟺ **x = 3/2**.`,
        },
      ],
    },

    // ───────────────────────── 8. Trigonométrie
    {
      id: "trigonometrie",
      titre: "Trigonométrie",
      theme: "Analyse",
      cours: `
## Le radian
Le **radian** est une unité de mesure d'angle : un angle de 1 radian intercepte, sur un cercle de rayon 1, un arc de longueur 1. Un tour complet mesure **2π radians** (360°).

**Conversion** : les mesures en degrés et en radians sont proportionnelles : **180° = π rad**.
x (rad) = x (degrés) × π/180.

| Degrés | 0 | 30 | 45 | 60 | 90 | 120 | 135 | 150 | 180 |
|---|---|---|---|---|---|---|---|---|---|
| Radians | 0 | π/6 | π/4 | π/3 | π/2 | 2π/3 | 3π/4 | 5π/6 | π |

## Le cercle trigonométrique
Dans un repère orthonormé, le **cercle trigonométrique** est le cercle de centre O et de rayon 1, orienté dans le **sens direct** (inverse des aiguilles d'une montre).
À tout réel x, on associe un unique point M du cercle (en « enroulant » la droite des réels). Les réels x, x + 2π, x − 2π… (x + 2kπ, k entier) sont associés au **même point**.

La **mesure principale** d'un angle est l'unique mesure dans ]−π ; π]. Exemple : 17π/3 = 6π − π/3, donc sa mesure principale est −π/3.

## Cosinus et sinus
Si M est le point associé à x : **cos x** est l'abscisse de M et **sin x** est son ordonnée.
- −1 ≤ cos x ≤ 1 et −1 ≤ sin x ≤ 1.
- **cos²x + sin²x = 1**.
- cos(x + 2π) = cos x et sin(x + 2π) = sin x.

## Valeurs remarquables
| x | 0 | π/6 | π/4 | π/3 | π/2 | π |
|---|---|---|---|---|---|---|
| cos x | 1 | √3/2 | √2/2 | 1/2 | 0 | −1 |
| sin x | 0 | 1/2 | √2/2 | √3/2 | 1 | 0 |

## Angles associés (lecture sur le cercle par symétries)
| Formule | Symétrie |
|---|---|
| cos(−x) = cos x ; sin(−x) = −sin x | par rapport à l'axe des abscisses |
| cos(π − x) = −cos x ; sin(π − x) = sin x | par rapport à l'axe des ordonnées |
| cos(π + x) = −cos x ; sin(π + x) = −sin x | par rapport à O |
| cos(π/2 − x) = sin x ; sin(π/2 − x) = cos x | par rapport à la droite y = x |

>! **Exemple** : cos(5π/6) = cos(π − π/6) = −cos(π/6) = −√3/2. sin(7π/6) = sin(π + π/6) = −1/2.

## Équations cos x = a, sin x = a
>! **Méthode** : trouver une solution de référence, puis lire les points symétriques sur le cercle.
>! - cos x = cos α ⟺ x = α + 2kπ ou x = −α + 2kπ.
>! - sin x = sin α ⟺ x = α + 2kπ ou x = π − α + 2kπ.
>! Ex. : cos x = 1/2 dans ]−π ; π] : x = π/3 ou x = −π/3.

## Fonctions cosinus et sinus
- Définies sur ℝ, **périodiques de période 2π** : on les étudie sur un intervalle de longueur 2π.
- **cos est paire** (courbe symétrique par rapport à l'axe des ordonnées) ; **sin est impaire** (courbe symétrique par rapport à O).
- Sur [0 ; π] : cos décroît de 1 à −1 ; sin croît de 0 à 1 sur [0 ; π/2] puis décroît jusqu'à 0.

> **À retenir**
> - π rad = 180°.
> - cos x = abscisse, sin x = ordonnée du point M ; cos²x + sin²x = 1.
> - Valeurs remarquables : 1/2, √2/2, √3/2.
> - cos paire, sin impaire, toutes deux 2π-périodiques.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 60° en radians.",
          reponses: ["π/3", "pi/3", "π / 3", "π/3 rad", "pi/3 rad"],
          explication: "60 × π/180 = π/3.",
        },
        {
          type: "qcm",
          question: "Combien vaut cos(π/4) ?",
          choix: ["√2/2", "1/2", "√3/2", "1"],
          reponse: 0,
          explication: "cos(π/4) = sin(π/4) = √2/2 ≈ 0,707.",
        },
        {
          type: "saisie",
          question: "Convertis 3π/4 radians en degrés.",
          reponses: ["135", "135°"],
          explication: "3π/4 × 180/π = 3 × 45 = 135°.",
        },
        {
          type: "vf",
          question: "Pour tout réel x, cos²x + sin²x = 1.",
          reponse: true,
          explication: "Vrai : M(cos x ; sin x) est sur le cercle de centre O et de rayon 1, donc OM² = cos²x + sin²x = 1 (Pythagore).",
        },
        {
          type: "qcm",
          question: "Combien vaut cos(7π/6) ?",
          choix: ["√3/2", "−1/2", "1/2", "−√3/2"],
          reponse: 3,
          explication: "7π/6 = π + π/6, donc cos(7π/6) = −cos(π/6) = −√3/2.",
        },
        {
          type: "qcm",
          question: "Pour tout réel x, cos(π − x) est égal à :",
          choix: ["−cos x", "cos x", "sin x", "−sin x"],
          reponse: 0,
          explication: "Les points associés à x et π − x sont symétriques par rapport à l'axe des ordonnées : leurs abscisses sont opposées.",
        },
        {
          type: "saisie",
          question: "Donne la mesure principale (dans ]−π ; π]) de l'angle de mesure 17π/3.",
          reponses: ["-π/3", "−π/3", "-pi/3", "−pi/3"],
          explication: "17π/3 = 18π/3 − π/3 = 6π − π/3. On retire 3 tours (6π) : la mesure principale est −π/3.",
        },
        {
          type: "vf",
          question: "La fonction cosinus est paire.",
          reponse: true,
          explication: "Vrai : cos(−x) = cos x pour tout x. Sa courbe est symétrique par rapport à l'axe des ordonnées.",
        },
        {
          type: "redaction",
          question: "1) Résous dans ]−π ; π] l'équation cos x = 1/2.\n2) Résous dans [0 ; 2π[ l'équation sin x = −√2/2.\n3) Sachant que x ∈ [π/2 ; π] et sin x = 3/5, calcule cos x.",
          corrige: `1) On sait que cos(π/3) = 1/2. Sur le cercle trigonométrique, deux points ont pour abscisse 1/2 : ceux associés à π/3 et à −π/3 (symétriques par rapport à l'axe des abscisses).
Dans ]−π ; π] : **S = {−π/3 ; π/3}**.

2) sin(π/4) = √2/2, donc sin(−π/4) = −√2/2. Les points d'ordonnée −√2/2 sont associés à −π/4 et à π − (−π/4) = 5π/4.
Dans [0 ; 2π[ : −π/4 + 2π = 7π/4. **S = {5π/4 ; 7π/4}**.

3) cos²x = 1 − sin²x = 1 − 9/25 = 16/25, donc cos x = 4/5 ou cos x = −4/5.
Comme x ∈ [π/2 ; π], cos x ≤ 0 : **cos x = −4/5**.`,
        },
      ],
    },
    // ───────────────────────── 9. Produit scalaire
    {
      id: "produit-scalaire",
      titre: "Le produit scalaire",
      theme: "Géométrie",
      cours: `
## Définitions
Le **produit scalaire** de deux vecteurs u et v est un **nombre réel** noté u · v. Il existe plusieurs expressions équivalentes.

**1. Avec la norme et l'angle** : u · v = ‖u‖ × ‖v‖ × cos(u, v).
(Si l'un des vecteurs est nul, u · v = 0.)

**2. Avec les normes seulement** (formule de polarisation) :
u · v = ½ (‖u + v‖² − ‖u‖² − ‖v‖²) = ½ (‖u‖² + ‖v‖² − ‖u − v‖²).

**3. Avec le projeté orthogonal** : si H est le projeté orthogonal de C sur (AB), alors AB · AC = AB · AH, c'est-à-dire :
- AB × AH si H est du même côté que B par rapport à A ;
- −AB × AH sinon.

**4. Dans un repère orthonormé** : si u(x ; y) et v(x′ ; y′), alors **u · v = xx′ + yy′**.

>! **Exemples**
>! - ‖u‖ = 3, ‖v‖ = 4, (u, v) = π/3 : u · v = 3 × 4 × ½ = 6.
>! - u(2 ; −3), v(4 ; 1) : u · v = 2 × 4 + (−3) × 1 = 5.
>! - Carré ABCD de côté 4 : le projeté de C sur (AB) est B, donc AB · AC = AB · AB = 16.

## Propriétés
- **Symétrie** : u · v = v · u.
- **Bilinéarité** : u · (v + w) = u · v + u · w ; (ku) · v = k(u · v).
- **Carré scalaire** : u · u = u² = ‖u‖².
- **Identités remarquables** : (u + v)² = ‖u‖² + 2u · v + ‖v‖² ; (u − v)² = ‖u‖² − 2u · v + ‖v‖² ; (u + v) · (u − v) = ‖u‖² − ‖v‖².

## Orthogonalité
**u et v sont orthogonaux ⟺ u · v = 0.**
C'est l'outil n° 1 pour prouver qu'un angle est droit ou que deux droites sont perpendiculaires.

>! u(3 ; m) et v(2 ; −6) sont orthogonaux ⟺ 6 − 6m = 0 ⟺ m = 1.

## Théorème d'Al-Kashi
Dans un triangle ABC, avec a = BC, b = AC, c = AB :
**a² = b² + c² − 2bc × cos Â**.
C'est une généralisation du théorème de Pythagore (si Â = 90°, cos Â = 0).

>! **Exemple** : AB = 5, AC = 7, Â = 60°. BC² = 49 + 25 − 2 × 7 × 5 × ½ = 74 − 35 = 39, donc BC = √39 ≈ 6,24.
>! Avec trois côtés connus, on calcule un angle : cos Â = (b² + c² − a²)/(2bc).

## Autres applications
- **Théorème de la médiane** : si I est le milieu de [AB], MA · MB = MI² − AB²/4.
- **Ensemble des points M tels que MA · MB = 0** : c'est le **cercle de diamètre [AB]**.
- Calculer un angle : cos(u, v) = (u · v)/(‖u‖ × ‖v‖).

> **À retenir**
> - u · v = ‖u‖‖v‖cos(u, v) = xx′ + yy′ (repère orthonormé).
> - u · u = ‖u‖².
> - u ⊥ v ⟺ u · v = 0.
> - Al-Kashi : a² = b² + c² − 2bc cos Â.
`,
      exercices: [
        {
          type: "saisie",
          question: "Dans un repère orthonormé, u(2 ; −3) et v(4 ; 1). Calcule u · v.",
          reponses: ["5"],
          explication: "u · v = xx′ + yy′ = 2 × 4 + (−3) × 1 = 8 − 3 = 5.",
        },
        {
          type: "qcm",
          question: "‖u‖ = 3, ‖v‖ = 4 et l'angle (u, v) mesure π/3. Combien vaut u · v ?",
          choix: ["6", "12", "6√3", "7"],
          reponse: 0,
          explication: "u · v = 3 × 4 × cos(π/3) = 12 × ½ = 6. (6√3 serait obtenu avec sin au lieu de cos.)",
        },
        {
          type: "vf",
          question: "Deux vecteurs non nuls u et v sont orthogonaux si et seulement si u · v = 0.",
          reponse: true,
          explication: "Vrai : u · v = ‖u‖‖v‖cos(u, v) = 0 ⟺ cos(u, v) = 0 ⟺ angle droit.",
        },
        {
          type: "saisie",
          question: "Dans un triangle ABC, AB = 5, AC = 7 et l'angle Â mesure 60°. Donne la valeur exacte de BC.",
          reponses: ["√39", "racine de 39", "sqrt(39)", "racine(39)", "√(39)"],
          explication: "Al-Kashi : BC² = AB² + AC² − 2 × AB × AC × cos Â = 25 + 49 − 2 × 5 × 7 × ½ = 74 − 35 = 39. Donc BC = √39 ≈ 6,24.",
        },
        {
          type: "qcm",
          question: "Pour quelle valeur de m les vecteurs u(3 ; m) et v(2 ; −6) sont-ils orthogonaux ?",
          choix: ["m = −1", "m = 1", "m = 9", "m = 0"],
          reponse: 1,
          explication: "u · v = 3 × 2 + m × (−6) = 6 − 6m = 0 ⟺ m = 1.",
        },
        {
          type: "vf",
          question: "Pour tous vecteurs u et v, ‖u + v‖² = ‖u‖² + ‖v‖².",
          reponse: false,
          explication: "Faux en général : ‖u + v‖² = ‖u‖² + 2u · v + ‖v‖². L'égalité proposée n'est vraie que si u · v = 0 (c'est Pythagore).",
        },
        {
          type: "saisie",
          question: "ABCD est un carré de côté 4. Calcule le produit scalaire AB · AC.",
          reponses: ["16"],
          explication: "Le projeté orthogonal de C sur (AB) est B. Donc AB · AC = AB · AB = AB² = 16. (Vérification : ‖AC‖ = 4√2 et l'angle vaut 45° : 4 × 4√2 × √2/2 = 16.)",
        },
        {
          type: "redaction",
          question: "Dans un repère orthonormé, on donne A(1 ; 2), B(5 ; 4) et C(3 ; 8).\n1) Calcule les coordonnées de BA et BC, puis BA · BC. Que peut-on en déduire ?\n2) Calcule AB et BC. Quelle est la nature du triangle ABC ?\n3) Calcule AB · AC et en déduire la mesure de l'angle BAC.",
          corrige: `1) BA(1 − 5 ; 2 − 4) = **BA(−4 ; −2)** et BC(3 − 5 ; 8 − 4) = **BC(−2 ; 4)**.
BA · BC = (−4) × (−2) + (−2) × 4 = 8 − 8 = **0**.
Les vecteurs sont orthogonaux : **le triangle ABC est rectangle en B**.

2) AB = √(16 + 4) = √20 = 2√5 et BC = √(4 + 16) = √20 = 2√5.
AB = BC : ABC est **rectangle isocèle en B**.

3) AB(4 ; 2) et AC(2 ; 6) : AB · AC = 8 + 12 = 20.
AC = √(4 + 36) = √40 = 2√10.
cos BAC = (AB · AC)/(AB × AC) = 20/(√20 × √40) = 20/√800 = 20/(20√2) = 1/√2 = √2/2.
Donc **BAC = 45°** (ce qui est cohérent avec un triangle rectangle isocèle).`,
        },
        {
          type: "redaction",
          question: "Un triangle a des côtés de longueurs 4 cm, 5 cm et 6 cm. Calcule la mesure, arrondie au dixième de degré, de son plus grand angle.",
          corrige: `Le plus grand angle est opposé au plus grand côté (6 cm). Notons a = 6, b = 4, c = 5 et Â l'angle opposé à a.

Al-Kashi : a² = b² + c² − 2bc cos Â, donc
cos Â = (b² + c² − a²)/(2bc) = (16 + 25 − 36)/(2 × 4 × 5) = 5/40 = **1/8**.

À la calculatrice : Â = arccos(1/8) ≈ **82,8°**.
(Le triangle est donc acutangle : tous ses angles sont aigus.)`,
        },
      ],
    },

    // ───────────────────────── 10. Géométrie repérée
    {
      id: "geometrie-reperee",
      titre: "Géométrie repérée",
      theme: "Géométrie",
      cours: `
On travaille dans un **repère orthonormé** du plan.

## Vecteur normal à une droite
Un vecteur **n non nul** est **normal** à une droite d s'il est orthogonal à un vecteur directeur de d.

**Propriété** : une droite de vecteur normal n(a ; b) a une équation de la forme **ax + by + c = 0**. Réciproquement, la droite d'équation ax + by + c = 0 a pour vecteur normal n(a ; b) et pour vecteur directeur u(−b ; a).

>! **Méthode : équation d'une droite passant par A et de vecteur normal n**
>! M(x ; y) ∈ d ⟺ AM · n = 0.
>! Exemple : A(1 ; 2), n(3 ; −1) : 3(x − 1) − 1(y − 2) = 0 ⟺ **3x − y − 1 = 0**.

- Deux droites sont **perpendiculaires** ⟺ leurs vecteurs normaux sont orthogonaux.
- Deux droites sont **parallèles** ⟺ leurs vecteurs normaux sont colinéaires.

>! **Hauteur d'un triangle** : la hauteur issue de C est perpendiculaire à (AB) : elle a pour vecteur normal AB. **Médiatrice** de [AB] : elle passe par le milieu I de [AB] et a pour vecteur normal AB.

## Équation d'un cercle
Le cercle de centre Ω(a ; b) et de rayon r est l'ensemble des points M(x ; y) tels que ΩM = r, soit :
**(x − a)² + (y − b)² = r²**.

>! **Reconnaître un cercle** : x² + y² − 4x + 6y − 3 = 0.
>! On complète les carrés : (x − 2)² − 4 + (y + 3)² − 9 − 3 = 0 ⟺ (x − 2)² + (y + 3)² = 16.
>! C'est le cercle de centre Ω(2 ; −3) et de rayon 4.
>! (Si on obtient un nombre négatif à droite, l'ensemble est vide.)

**Cercle de diamètre [AB]** : c'est l'ensemble des points M tels que **MA · MB = 0**. Son centre est le milieu de [AB] et son rayon AB/2.

## Paraboles
La courbe d'équation **y = ax² + bx + c** (a ≠ 0) est une parabole :
- de **sommet** S(α ; β) avec α = −b/(2a) et β = f(α) ;
- d'**axe de symétrie** la droite d'équation x = α ;
- tournée vers le haut si a > 0, vers le bas si a < 0.
Les **points d'intersection avec l'axe des abscisses** ont pour abscisses les racines du trinôme (si Δ ≥ 0).

>! **Intersection droite / parabole** : on résout f(x) = mx + p, ce qui donne une équation du second degré. Le nombre de solutions (selon Δ) donne le nombre de points d'intersection.

> **À retenir**
> - ax + by + c = 0 : vecteur normal (a ; b), vecteur directeur (−b ; a).
> - Droite par A de vecteur normal n : AM · n = 0.
> - Cercle : (x − a)² + (y − b)² = r² ; on complète les carrés pour le reconnaître.
> - Parabole y = ax² + bx + c : sommet d'abscisse −b/(2a).
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel est un vecteur normal à la droite d'équation 2x − 3y + 5 = 0 ?",
          choix: ["(3 ; 2)", "(2 ; −3)", "(−3 ; 2)", "(2 ; 3)"],
          reponse: 1,
          explication: "Pour ax + by + c = 0, un vecteur normal est (a ; b) = (2 ; −3). Le vecteur (3 ; 2) est un vecteur directeur.",
        },
        {
          type: "saisie",
          question: "Donne une équation cartésienne de la droite passant par A(1 ; 2) et de vecteur normal n(3 ; −1) (forme ax + by + c = 0).",
          reponses: ["3x-y-1=0", "3x - y - 1 = 0", "3x − y − 1 = 0", "-3x+y+1=0", "−3x + y + 1 = 0", "-3x + y + 1 = 0", "3x-y=1", "y=3x-1", "3x - y = 1"],
          explication: "M(x ; y) ∈ d ⟺ AM · n = 0 ⟺ 3(x − 1) + (−1)(y − 2) = 0 ⟺ 3x − 3 − y + 2 = 0 ⟺ 3x − y − 1 = 0. Vérification avec A : 3 − 2 − 1 = 0.",
        },
        {
          type: "qcm",
          question: "Quelle est l'équation du cercle de centre Ω(2 ; −1) et de rayon 3 ?",
          choix: [
            "(x + 2)² + (y − 1)² = 9",
            "(x − 2)² + (y − 1)² = 3",
            "(x − 2)² + (y + 1)² = 3",
            "(x − 2)² + (y + 1)² = 9",
          ],
          reponse: 3,
          explication: "(x − a)² + (y − b)² = r² avec a = 2, b = −1, r = 3 : (x − 2)² + (y + 1)² = 9. Attention au signe et au carré du rayon.",
        },
        {
          type: "saisie",
          question: "L'ensemble des points M(x ; y) tels que x² + y² − 4x + 6y − 3 = 0 est un cercle. Quel est son rayon ?",
          reponses: ["4"],
          explication: "(x − 2)² − 4 + (y + 3)² − 9 − 3 = 0 ⟺ (x − 2)² + (y + 3)² = 16. Centre (2 ; −3), rayon √16 = 4.",
        },
        {
          type: "vf",
          question: "La parabole d'équation y = x² − 4x + 3 a pour sommet le point S(2 ; −1).",
          reponse: true,
          explication: "Vrai : α = −(−4)/2 = 2 et β = 4 − 8 + 3 = −1.",
        },
        {
          type: "qcm",
          question: "Les droites d : 2x + y − 1 = 0 et d′ : x − 2y + 3 = 0 sont :",
          choix: ["parallèles", "confondues", "perpendiculaires", "sécantes mais non perpendiculaires"],
          reponse: 2,
          explication: "Vecteurs normaux n(2 ; 1) et n′(1 ; −2) : n · n′ = 2 − 2 = 0. Ils sont orthogonaux, donc les droites sont perpendiculaires.",
        },
        {
          type: "saisie",
          question: "La parabole y = x² − 2x − 3 coupe l'axe des abscisses en deux points. Quelle est l'abscisse positive ?",
          reponses: ["3"],
          explication: "x² − 2x − 3 = 0 : Δ = 4 + 12 = 16, racines (2 − 4)/2 = −1 et (2 + 4)/2 = 3. L'abscisse positive est 3.",
        },
        {
          type: "redaction",
          question: "Dans un repère orthonormé, on donne A(−1 ; 0), B(3 ; 2) et C(0 ; 4).\n1) Détermine une équation cartésienne de la hauteur issue de C dans le triangle ABC.\n2) Détermine une équation de la médiatrice de [AB].\n3) Détermine une équation du cercle de diamètre [AB]. Le point C appartient-il à ce cercle ?",
          corrige: `1) La hauteur h issue de C est perpendiculaire à (AB) : AB(4 ; 2) est un vecteur normal à h.
h a une équation 4x + 2y + c = 0. C(0 ; 4) ∈ h : 0 + 8 + c = 0, c = −8.
h : 4x + 2y − 8 = 0, soit **2x + y − 4 = 0**.

2) Le milieu de [AB] est I((−1 + 3)/2 ; (0 + 2)/2) = I(1 ; 1). La médiatrice passe par I et a pour vecteur normal AB(4 ; 2) :
4(x − 1) + 2(y − 1) = 0 ⟺ 4x + 2y − 6 = 0 ⟺ **2x + y − 3 = 0**.

3) Le cercle de diamètre [AB] a pour centre I(1 ; 1) et pour rayon AB/2 = √(16 + 4)/2 = √20/2 = √5.
Équation : **(x − 1)² + (y − 1)² = 5**.
Pour C(0 ; 4) : (0 − 1)² + (4 − 1)² = 1 + 9 = 10 ≠ 5. **C n'appartient pas au cercle** (l'angle ACB n'est donc pas droit).`,
        },
      ],
    },

    // ───────────────────────── 11. Probabilités conditionnelles
    {
      id: "probabilites-conditionnelles",
      titre: "Probabilités conditionnelles et indépendance",
      theme: "Probabilités et statistiques",
      cours: `
## Rappels
- P(Ā) = 1 − P(A), où Ā est l'événement contraire de A.
- P(A ∪ B) = P(A) + P(B) − P(A ∩ B).
- A et B sont **incompatibles** si A ∩ B = ∅.

## Probabilité conditionnelle
Soit A un événement de probabilité non nulle. La **probabilité de B sachant A** est :
**P_A(B) = P(A ∩ B)/P(A)**.
C'est la probabilité que B se réalise quand on sait que A est réalisé (on « restreint l'univers » à A).

On en déduit la **formule des probabilités composées** : **P(A ∩ B) = P(A) × P_A(B)**.

>! **Exemple avec un tableau** : dans un lycée de 1 000 élèves, 400 sont en 1re, et parmi eux 120 font du latin.
>! P_1re(latin) = 120/400 = 0,3. Attention : ce n'est pas P(1re ∩ latin) = 120/1 000 = 0,12.

## Arbres pondérés
| Règle | Énoncé |
|---|---|
| R1 | La somme des probabilités des branches issues d'un même nœud vaut 1. |
| R2 | La probabilité d'un chemin est le **produit** des probabilités des branches. |
| R3 | La probabilité d'un événement est la **somme** des probabilités des chemins qui y mènent. |

Sur les branches du second niveau, on écrit des **probabilités conditionnelles** : P_A(B), P_A(B̄), P_Ā(B), P_Ā(B̄).

## Formule des probabilités totales
Si A₁, A₂, …, Aₙ forment une **partition** de l'univers (événements deux à deux incompatibles, de réunion l'univers, de probabilités non nulles), alors :
**P(B) = P(A₁ ∩ B) + P(A₂ ∩ B) + … + P(Aₙ ∩ B)**.
Cas le plus fréquent : **P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B)**.

>! **Méthode type bac**
>! 1. Nommer les événements et traduire chaque donnée de l'énoncé (« parmi les… » = probabilité conditionnelle !).
>! 2. Construire l'arbre pondéré, compléter avec R1.
>! 3. Calculer P(B) avec la formule des probabilités totales.
>! 4. « Inverser » le conditionnement : P_B(A) = P(A ∩ B)/P(B).

## Indépendance
Deux événements A et B sont **indépendants** si **P(A ∩ B) = P(A) × P(B)**.
Si P(A) ≠ 0, cela équivaut à **P_A(B) = P(B)** : savoir que A est réalisé ne change pas la probabilité de B.
Si A et B sont indépendants, alors Ā et B le sont aussi (ainsi que A et B̄, Ā et B̄).

**Attention** : indépendants ≠ incompatibles ! Deux événements incompatibles de probabilités non nulles ne sont **jamais** indépendants (P(A ∩ B) = 0 ≠ P(A)P(B)).

## Succession de deux épreuves indépendantes
Deux épreuves sont **indépendantes** quand le résultat de la première n'influence pas la seconde (tirages **avec remise**, lancers successifs d'une pièce ou d'un dé…). On représente la situation par un **arbre** (les probabilités du second niveau sont les mêmes sur toutes les branches) ou par un **tableau à double entrée**.
La probabilité d'un couple de résultats est le **produit** des probabilités : P((a ; b)) = P(a) × P(b).

>! **Exemple** : une urne contient 3 boules rouges et 2 vertes. On tire une boule, on la **remet**, puis on en tire une seconde.
>! P(rouge puis verte) = 3/5 × 2/5 = 6/25 ; P(deux boules de même couleur) = 3/5 × 3/5 + 2/5 × 2/5 = 13/25.
>! Sans remise, les épreuves ne sont plus indépendantes : P(rouge puis verte) = 3/5 × 2/4 = 3/10.

Pour la répétition de plusieurs épreuves à deux issues (épreuves de Bernoulli), voir le chapitre « Épreuves de Bernoulli, échantillonnage et simulation ».

> **À retenir**
> - P_A(B) = P(A ∩ B)/P(A) ; P(A ∩ B) = P(A) × P_A(B).
> - Arbre : produit le long d'un chemin, somme des chemins.
> - Probabilités totales : P(B) = P(A)P_A(B) + P(Ā)P_Ā(B).
> - Indépendance : P(A ∩ B) = P(A)P(B).
`,
      exercices: [
        {
          type: "qcm",
          question: "Si P(A) ≠ 0, la probabilité de B sachant A est :",
          choix: ["P(A) × P(B)", "P(A ∩ B)/P(A)", "P(A ∩ B)/P(B)", "P(A) + P(B)"],
          reponse: 1,
          explication: "Par définition, P_A(B) = P(A ∩ B)/P(A). La troisième proposition est P_B(A).",
        },
        {
          type: "saisie",
          question: "P(A) = 0,4 et P_A(B) = 0,3. Calcule P(A ∩ B).",
          reponses: ["0,12", "0.12", "12 %", "12%", "3/25"],
          explication: "P(A ∩ B) = P(A) × P_A(B) = 0,4 × 0,3 = 0,12.",
        },
        {
          type: "vf",
          question: "A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B).",
          reponse: true,
          explication: "Vrai : c'est la définition de l'indépendance.",
        },
        {
          type: "saisie",
          question: "On donne P(A) = 0,6, P_A(B) = 0,5 et P_Ā(B) = 0,2. Calcule P(B).",
          reponses: ["0,38", "0.38", "38 %", "38%"],
          explication: "Probabilités totales : P(B) = P(A)P_A(B) + P(Ā)P_Ā(B) = 0,6 × 0,5 + 0,4 × 0,2 = 0,30 + 0,08 = 0,38.",
        },
        {
          type: "qcm",
          question: "Avec les données précédentes (P(A) = 0,6, P_A(B) = 0,5, P(B) = 0,38), combien vaut P_B(A), arrondie au centième ?",
          choix: ["0,30", "0,50", "0,79", "0,63"],
          reponse: 2,
          explication: "P_B(A) = P(A ∩ B)/P(B) = 0,30/0,38 = 15/19 ≈ 0,79.",
        },
        {
          type: "vf",
          question: "Deux événements incompatibles de probabilités non nulles sont indépendants.",
          reponse: false,
          explication: "Faux : si A ∩ B = ∅, alors P(A ∩ B) = 0, alors que P(A) × P(B) > 0. Ils ne sont donc pas indépendants.",
        },
        {
          type: "saisie",
          question: "A et B sont indépendants avec P(A) = 0,5 et P(B) = 0,4. Calcule P(A ∪ B).",
          reponses: ["0,7", "0.7", "0,70", "70 %", "70%"],
          explication: "P(A ∩ B) = 0,5 × 0,4 = 0,2 (indépendance). P(A ∪ B) = 0,5 + 0,4 − 0,2 = 0,7.",
        },
        {
          type: "redaction",
          question: "Une maladie touche 2 % d'une population. Un test de dépistage donne :\n• un résultat positif pour 95 % des personnes malades ;\n• un résultat positif pour 3 % des personnes non malades.\nOn choisit une personne au hasard. On note M : « la personne est malade » et T : « le test est positif ».\n1) Construis un arbre pondéré.\n2) Calcule P(M ∩ T) puis P(T).\n3) Le test d'une personne est positif. Quelle est la probabilité qu'elle soit malade ? (arrondi au millième) Commente.",
          corrige: `1) Arbre :
- Premier niveau : P(M) = 0,02 et P(M̄) = 0,98.
- Après M : P_M(T) = 0,95 et P_M(T̄) = 0,05.
- Après M̄ : P_M̄(T) = 0,03 et P_M̄(T̄) = 0,97.

2) P(M ∩ T) = P(M) × P_M(T) = 0,02 × 0,95 = **0,019**.
M et M̄ forment une partition de l'univers ; d'après la formule des probabilités totales :
P(T) = P(M ∩ T) + P(M̄ ∩ T) = 0,019 + 0,98 × 0,03 = 0,019 + 0,0294 = **0,0484**.

3) P_T(M) = P(M ∩ T)/P(T) = 0,019/0,0484 ≈ **0,393**.

**Commentaire** : même avec un test positif, la personne n'a qu'environ 39 % de chances d'être malade. Comme la maladie est rare, les faux positifs (parmi les 98 % de non-malades) sont plus nombreux que les vrais positifs. Il faut confirmer par un second examen.`,
        },
        {
          type: "saisie",
          question: "Une urne contient 3 boules rouges et 2 boules vertes. On tire une boule, on la remet, puis on en tire une seconde. Quelle est la probabilité d'obtenir deux boules de la même couleur ? (fraction irréductible ou décimal)",
          reponses: ["13/25", "0,52", "0.52", "52 %", "52%"],
          explication: "Avec remise, les deux tirages sont des épreuves indépendantes : on multiplie le long des chemins. P(RR) = 3/5 × 3/5 = 9/25 et P(VV) = 2/5 × 2/5 = 4/25. P(même couleur) = 9/25 + 4/25 = 13/25 = 0,52.",
        },
        {
          type: "qcm",
          question: "Même urne (3 rouges, 2 vertes), mais on tire successivement deux boules **sans remise**. Quelle est la probabilité de tirer une rouge puis une verte ?",
          choix: ["6/25", "1/2", "3/5", "3/10"],
          reponse: 3,
          explication: "Sans remise, les épreuves ne sont pas indépendantes : après une rouge, il reste 2 rouges et 2 vertes. P(R puis V) = 3/5 × 2/4 = 6/20 = 3/10. (6/25 serait le résultat avec remise.)",
        },
      ],
    },

    // ───────────────────────── 12. Variables aléatoires
    {
      id: "variables-aleatoires",
      titre: "Variables aléatoires réelles",
      theme: "Probabilités et statistiques",
      cours: `
## Définition
Une **variable aléatoire** X associe un **nombre réel** à chaque issue d'une expérience aléatoire (un gain, un nombre de succès, une somme de dés…).
L'événement « X prend la valeur a » se note **{X = a}** ; on écrit aussi {X ≤ a}, etc.

## Loi de probabilité
Donner la **loi de X**, c'est donner les valeurs x₁, …, xₙ prises par X et les probabilités pᵢ = P(X = xᵢ), souvent dans un tableau.
**La somme des probabilités vaut 1** : p₁ + p₂ + … + pₙ = 1.

>! **Exemple** : on paie 2 € pour lancer un dé. On gagne 10 € si on obtient 6, 2 € si on obtient 4 ou 5, rien sinon. Le **gain net** G :
>! | gᵢ | 8 | 0 | −2 |
>! |---|---|---|---|
>! | P(G = gᵢ) | 1/6 | 2/6 | 3/6 |

## Espérance, variance, écart-type
- **Espérance** (valeur moyenne sur un grand nombre de répétitions) :
**E(X) = p₁x₁ + p₂x₂ + … + pₙxₙ**.
- **Variance** (dispersion) : **V(X) = Σ pᵢ(xᵢ − E(X))²**, ou plus pratique, la formule de König-Huygens : **V(X) = E(X²) − (E(X))²**.
- **Écart-type** : **σ(X) = √V(X)**, dans la même unité que X.

>! Pour le jeu ci-dessus :
>! E(G) = 8 × 1/6 + 0 × 2/6 + (−2) × 3/6 = 8/6 − 6/6 = 1/3 ≈ 0,33 €.
>! E(G²) = 64 × 1/6 + 0 + 4 × 3/6 = 76/6 = 38/3.
>! V(G) = 38/3 − 1/9 = 113/9 ≈ 12,56 ; σ(G) ≈ 3,54 €.

**Interprétation** : sur un grand nombre de parties, le joueur gagne en moyenne environ 0,33 € par partie. Le jeu est **favorable** au joueur si E > 0, **équitable** si E = 0, **défavorable** si E < 0.

## Transformation affine
Pour tous réels a et b :
- **E(aX + b) = aE(X) + b** (linéarité) ;
- **V(aX + b) = a²V(X)** ;
- **σ(aX + b) = |a| σ(X)**.
Ajouter une constante ne change pas la dispersion.

## Méthode
>! 1. Déterminer les valeurs possibles de X (ne pas en oublier).
>! 2. Calculer chaque probabilité (arbre, dénombrement, équiprobabilité).
>! 3. Vérifier que la somme vaut 1.
>! 4. Calculer E(X), puis V(X) et σ(X) si demandé ; interpréter dans le contexte.

> **À retenir**
> - Σ pᵢ = 1.
> - E(X) = Σ pᵢxᵢ ; V(X) = E(X²) − E(X)² ; σ = √V.
> - E(aX + b) = aE(X) + b ; V(aX + b) = a²V(X).
> - Jeu équitable ⟺ espérance du gain nulle.
`,
      exercices: [
        {
          type: "qcm",
          question: "Que vaut la somme des probabilités d'une loi de probabilité ?",
          choix: ["L'espérance", "0", "1", "Le nombre de valeurs"],
          reponse: 2,
          explication: "La somme des P(X = xᵢ) vaut toujours 1.",
        },
        {
          type: "saisie",
          question: "X prend les valeurs −2, 1 et 4 avec P(X = −2) = 0,3, P(X = 1) = 0,5 et P(X = 4) = p. Calcule p.",
          reponses: ["0,2", "0.2", "1/5", "20 %", "20%"],
          explication: "0,3 + 0,5 + p = 1, donc p = 0,2.",
        },
        {
          type: "saisie",
          question: "Avec la même loi (−2 : 0,3 ; 1 : 0,5 ; 4 : 0,2), calcule E(X).",
          reponses: ["0,7", "0.7"],
          explication: "E(X) = −2 × 0,3 + 1 × 0,5 + 4 × 0,2 = −0,6 + 0,5 + 0,8 = 0,7.",
        },
        {
          type: "saisie",
          question: "Toujours avec cette loi, calcule l'écart-type σ(X).",
          reponses: ["2,1", "2.1", "2,10"],
          explication: "E(X²) = 4 × 0,3 + 1 × 0,5 + 16 × 0,2 = 1,2 + 0,5 + 3,2 = 4,9. V(X) = 4,9 − 0,7² = 4,9 − 0,49 = 4,41. σ(X) = √4,41 = 2,1.",
        },
        {
          type: "vf",
          question: "Pour tous réels a et b, E(aX + b) = aE(X) + b.",
          reponse: true,
          explication: "Vrai : c'est la linéarité de l'espérance.",
        },
        {
          type: "qcm",
          question: "Si V(X) = 5, que vaut V(2X + 3) ?",
          choix: ["13", "10", "20", "23"],
          reponse: 2,
          explication: "V(aX + b) = a²V(X) = 4 × 5 = 20. La constante 3 ne modifie pas la variance.",
        },
        {
          type: "vf",
          question: "Un jeu est équitable lorsque l'espérance du gain net du joueur est nulle.",
          reponse: true,
          explication: "Vrai : en moyenne, sur un grand nombre de parties, le joueur ne gagne ni ne perd.",
        },
        {
          type: "redaction",
          question: "Un jeu coûte 2 € la partie. On lance un dé équilibré à 6 faces : si on obtient 6, on reçoit 10 € ; si on obtient 4 ou 5, on reçoit 2 € ; sinon on ne reçoit rien. On note G le gain net (gain reçu moins mise).\n1) Donne la loi de G.\n2) Calcule E(G) et interprète.\n3) Calcule V(G) et σ(G) (arrondi au centième).\n4) Quelle mise m faudrait-il demander pour que le jeu soit équitable ?",
          corrige: `1) Valeurs de G : 10 − 2 = 8 ; 2 − 2 = 0 ; 0 − 2 = −2.

| gᵢ | 8 | 0 | −2 |
|---|---|---|---|
| P(G = gᵢ) | 1/6 | 2/6 = 1/3 | 3/6 = 1/2 |

Vérification : 1/6 + 2/6 + 3/6 = 1.

2) E(G) = 8 × 1/6 + 0 × 1/3 + (−2) × 1/2 = 4/3 − 1 = **1/3 ≈ 0,33 €**.
Sur un grand nombre de parties, le joueur gagne en moyenne 0,33 € par partie : le jeu est **favorable au joueur**.

3) E(G²) = 64 × 1/6 + 0 + 4 × 1/2 = 32/3 + 2 = 38/3.
V(G) = E(G²) − E(G)² = 38/3 − 1/9 = 114/9 − 1/9 = **113/9 ≈ 12,56**.
σ(G) = √(113/9) ≈ **3,54 €**.

4) Si la mise est m, le gain reçu R a pour espérance E(R) = 10 × 1/6 + 2 × 2/6 = 14/6 = 7/3.
Le gain net est R − m, d'espérance 7/3 − m. Le jeu est équitable si 7/3 − m = 0, soit **m = 7/3 ≈ 2,33 €**.`,
        },
      ],
    },

    // ───────────────────────── 13. Algorithmique et Python
    {
      id: "algorithmique-python",
      titre: "Algorithmique et programmation en Python",
      theme: "Algorithmique et programmation",
      cours: `
## Variables, affectation, fonctions
En Python, **x = 3** affecte la valeur 3 à la variable x. Les types courants : entiers (int), flottants (float, avec un point : 1.05), booléens (True/False), listes.

Une **fonction** se définit avec **def** et renvoie un résultat avec **return** :

>! ~~~
>! def f(x):
>!     return 3 * x + 2
>! ~~~

En Python, l'**indentation** (4 espaces en début de ligne) est obligatoire : elle marque le bloc d'instructions.

## Boucle bornée : for
**for k in range(n)** répète le bloc pour k = 0, 1, …, n − 1 (n fois). **range(a, b)** va de a à b − 1.

>! **Calculer le terme uₙ d'une suite récurrente** (u₀ = 2, uₙ₊₁ = 0,5uₙ + 3)
>! ~~~
>! def terme(n):
>!     u = 2
>!     for k in range(n):
>!         u = 0.5 * u + 3
>!     return u
>! ~~~

>! **Calculer une somme** S = 1 + 2 + … + n
>! ~~~
>! def somme(n):
>!     s = 0
>!     for k in range(1, n + 1):
>!         s = s + k
>!     return s
>! ~~~

## Boucle non bornée : while (algorithme de seuil)
**while condition:** répète le bloc **tant que** la condition est vraie. On l'utilise quand on ne sait pas à l'avance combien de tours faire.

>! **Algorithme de seuil** : à partir de quel rang n la population u (100 au départ, +10 % par an) dépasse-t-elle 200 ?
>! ~~~
>! def seuil():
>!     u = 100
>!     n = 0
>!     while u < 200:
>!         u = 1.1 * u
>!         n = n + 1
>!     return n
>! ~~~
>! Résultat : 8 (car 100 × 1,1⁷ ≈ 194,9 et 100 × 1,1⁸ ≈ 214,4).

Attention : la condition du while est la condition pour **continuer**, c'est-à-dire le contraire de la condition d'arrêt.

## Instructions conditionnelles
**if** condition **:** … **elif** … **:** … **else:** …
Comparaisons : == (égal), != (différent), <, <=, >, >=.

## Listes
- Créer : L = [3, 8, 1, 6] ; liste vide : L = [].
- Accéder : **L[0]** est le premier élément (les indices commencent à **0**), L[1] le deuxième, L[-1] le dernier.
- Longueur : **len(L)**. Ajouter à la fin : **L.append(x)**.
- Parcourir : for x in L: …
- **Liste en compréhension** : [3 * k + 1 for k in range(5)] donne [1, 4, 7, 10, 13].

>! **Liste des n premiers termes d'une suite**
>! ~~~
>! def liste_termes(n):
>!     L = [2]
>!     for k in range(n - 1):
>!         L.append(0.5 * L[-1] + 3)
>!     return L
>! ~~~

## Simulation
Le module random permet de simuler le hasard : random() renvoie un réel au hasard dans [0 ; 1[, randint(1, 6) un entier entre 1 et 6. Simuler un événement de probabilité p : if random() < p: …

~~~
from random import random, randint
de = randint(1, 6)
if random() < 0.3:
    print("succès")
~~~

> **À retenir**
> - range(n) : 0 à n − 1 ; range(a, b) : a à b − 1.
> - for quand on connaît le nombre de tours, while pour un seuil.
> - L[0] est le premier élément ; len(L) ; L.append(x).
> - Toujours indenter le bloc (4 espaces) et ne pas oublier les deux-points.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelles valeurs prend k dans la boucle « for k in range(5) » ?",
          choix: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5 seulement"],
          reponse: 1,
          explication: "range(5) produit 5 valeurs, de 0 à 4 (la borne 5 est exclue).",
        },
        {
          type: "saisie",
          question: "On exécute : s = 0, puis « for k in range(1, 5): » avec dans la boucle « s = s + k ». Que vaut s à la fin ?",
          reponses: ["10"],
          explication: "k prend les valeurs 1, 2, 3, 4 (5 est exclu). s = 1 + 2 + 3 + 4 = 10.",
        },
        {
          type: "qcm",
          question: "On exécute L = [2, 5, 7] puis L.append(3). Que renvoie len(L) ?",
          choix: ["3", "5", "4", "17"],
          reponse: 2,
          explication: "append ajoute un élément à la fin : L = [2, 5, 7, 3], qui contient 4 éléments.",
        },
        {
          type: "saisie",
          question: "Fonction seuil : u = 100, n = 0, puis « while u < 200: » avec dans la boucle « u = 1.1 * u » et « n = n + 1 ». Quelle valeur de n est renvoyée ?",
          reponses: ["8"],
          explication: "On cherche le premier n tel que 100 × 1,1ⁿ ≥ 200. 100 × 1,1⁷ ≈ 194,87 < 200 et 100 × 1,1⁸ ≈ 214,36 ≥ 200. Donc n = 8.",
        },
        {
          type: "vf",
          question: "La liste [3 * k + 1 for k in range(4)] vaut [1, 4, 7, 10].",
          reponse: true,
          explication: "Vrai : pour k = 0, 1, 2, 3 on obtient 1, 4, 7, 10.",
        },
        {
          type: "saisie",
          question: "L = [3, 8, 1, 6]. Que vaut L[1] ?",
          reponses: ["8"],
          explication: "Les indices commencent à 0 : L[0] = 3, L[1] = 8.",
        },
        {
          type: "qcm",
          question: "On veut le premier rang n tel que uₙ > 1 000. Quelle condition faut-il écrire dans la boucle while ?",
          choix: ["while u > 1000:", "while u <= 1000:", "while u == 1000:", "while n < 1000:"],
          reponse: 1,
          explication: "La boucle doit continuer tant que la condition d'arrêt (u > 1 000) n'est pas atteinte, c'est-à-dire tant que u ≤ 1 000.",
        },
        {
          type: "vf",
          question: "Après « u = 2 », puis « for k in range(3): » avec « u = 0.5 * u + 3 », la variable u contient u₃ de la suite définie par u₀ = 2 et uₙ₊₁ = 0,5uₙ + 3, soit 5,5.",
          reponse: true,
          explication: "Vrai : la boucle fait 3 tours, donc on calcule u₁, u₂ puis u₃. u₁ = 0,5 × 2 + 3 = 4 ; u₂ = 0,5 × 4 + 3 = 5 ; u₃ = 0,5 × 5 + 3 = 5,5.",
        },
        {
          type: "redaction",
          question: "On considère la suite (uₙ) définie par u₀ = 50 et uₙ₊₁ = 0,8uₙ + 3.\n1) Calcule u₁ et u₂.\n2) On admet que (uₙ) est décroissante et que tous ses termes sont supérieurs à 15. Écris une fonction Python seuil() qui renvoie le plus petit entier n tel que uₙ < 16.\n3) On pose vₙ = uₙ − 15. Montre que (vₙ) est géométrique, puis retrouve par le calcul la valeur renvoyée par la fonction.",
          corrige: `1) u₁ = 0,8 × 50 + 3 = **43** ; u₂ = 0,8 × 43 + 3 = 34,4 + 3 = **37,4**.

2)
>! ~~~
>! def seuil():
>!     u = 50
>!     n = 0
>!     while u >= 16:
>!         u = 0.8 * u + 3
>!         n = n + 1
>!     return n
>! ~~~

On continue tant que u ≥ 16 (contraire de la condition d'arrêt u < 16).

3) vₙ₊₁ = uₙ₊₁ − 15 = 0,8uₙ + 3 − 15 = 0,8uₙ − 12 = 0,8(uₙ − 15) = 0,8vₙ.
(vₙ) est **géométrique** de raison 0,8 et de premier terme v₀ = 50 − 15 = 35.
Donc vₙ = 35 × 0,8ⁿ et uₙ = 15 + 35 × 0,8ⁿ.
uₙ < 16 ⟺ 35 × 0,8ⁿ < 1 ⟺ 0,8ⁿ < 1/35 ≈ 0,0286.
À la calculatrice : 0,8¹⁵ ≈ 0,0352 et 0,8¹⁶ ≈ 0,0281.
La fonction renvoie donc **n = 16**.`,
        },
      ],
    },

    // ───────────────────────── 14. Bernoulli, échantillonnage, simulation
    {
      id: "echantillonnage-simulation",
      titre: "Épreuves de Bernoulli, échantillonnage et simulation",
      theme: "Probabilités et statistiques",
      cours: `
## Épreuve de Bernoulli
Une **épreuve de Bernoulli** est une expérience aléatoire qui n'a que **deux issues** : le **succès** (de probabilité p) et l'**échec** (de probabilité 1 − p).
Exemples : obtenir 6 en lançant un dé (p = 1/6) ; répondre juste au hasard à une question de QCM à 4 choix (p = 1/4).

La **variable de Bernoulli** associée vaut 1 en cas de succès et 0 en cas d'échec :
| xᵢ | 1 | 0 |
|---|---|---|
| P(X = xᵢ) | p | 1 − p |

**E(X) = p** et **V(X) = p(1 − p)** (car E(X²) = p, donc V(X) = p − p²), σ(X) = √(p(1 − p)).

## Répétition d'épreuves de Bernoulli indépendantes
On répète **n fois** (en 1re, n ≤ 4) la même épreuve de Bernoulli, de façon **indépendante**. On représente la situation par un **arbre** : à chaque niveau, les branches S (succès, p) et S̄ (échec, 1 − p).
- La probabilité d'un chemin est le **produit** des probabilités de ses branches.
- Pour « exactement k succès », on **compte** les chemins qui en comportent k, puis on additionne leurs probabilités (ils ont tous la même probabilité).
- Pour « au moins un succès », on passe par le contraire : **P(au moins un succès) = 1 − (1 − p)ⁿ**.

>! **Exemple** : 3 épreuves indépendantes avec p = 0,3.
>! P(aucun succès) = 0,7³ = 0,343 ; P(au moins un succès) = 1 − 0,343 = 0,657.
>! Exactement 2 succès : 3 chemins (SSS̄, SS̄S, S̄SS), chacun de probabilité 0,3² × 0,7 = 0,063. P = 3 × 0,063 = 0,189.

(La formule générale de la loi binomiale est vue en terminale.)

## Simuler avec Python
random() renvoie un réel au hasard dans [0 ; 1[ : le test random() < p est vrai avec la probabilité p. On simule ainsi une variable de Bernoulli :

~~~
from random import random

def bernoulli(p):
    if random() < p:
        return 1
    return 0
~~~

**Échantillon de taille n** : n répétitions indépendantes de l'expérience. Sa **moyenne** m (ici la fréquence des succès) se calcule ainsi :

~~~
def moyenne_echantillon(n, p):
    s = 0
    for k in range(n):
        s = s + bernoulli(p)
    return s / n
~~~

## Fluctuation d'échantillonnage
- D'un échantillon à l'autre, la moyenne m **varie** : c'est la **fluctuation d'échantillonnage**.
- Plus la taille n est grande, plus m a tendance à être **proche de l'espérance μ = E(X)** (loi des grands nombres, admise et observée par simulation).
- **Observation par simulation** : pour n assez grand, dans environ **95 %** des échantillons, l'écart entre m et μ est inférieur ou égal à **2σ/√n**, où σ est l'écart-type de X.

~~~
from math import sqrt

def proportion(N, n, p):
    mu = p
    sigma = sqrt(p * (1 - p))
    c = 0
    for i in range(N):
        m = moyenne_echantillon(n, p)
        if abs(m - mu) <= 2 * sigma / sqrt(n):
            c = c + 1
    return c / N
~~~
Avec N = 2 000 échantillons de taille n = 100 et p = 0,5, on obtient une proportion proche de 0,95 (par exemple 0,96).

>! **Utilisation** : un dé est-il équilibré ? Sur 100 lancers, on attend une fréquence de 6 proche de 1/6 ≈ 0,167, avec 2σ/√n ≈ 0,075. Une fréquence de 0,30 s'écarte bien plus que 0,075 de 1/6 : on peut **douter** que le dé soit équilibré (sans en être certain).

> **À retenir**
> - Bernoulli : deux issues ; E(X) = p, V(X) = p(1 − p).
> - Épreuves indépendantes : on multiplie le long d'un chemin, on additionne les chemins.
> - P(au moins un succès) = 1 − (1 − p)ⁿ.
> - random() < p simule un succès de probabilité p.
> - Environ 95 % des échantillons vérifient |m − μ| ≤ 2σ/√n ; plus n est grand, plus m est proche de μ.
`,
      exercices: [
        {
          type: "qcm",
          question: "Laquelle de ces expériences est une épreuve de Bernoulli ?",
          choix: [
            "Noter la somme de deux dés",
            "Lancer un dé et noter si l'on obtient 6 ou non",
            "Noter le nombre de frères et sœurs d'un élève",
            "Tirer une carte et noter sa couleur parmi les 4 couleurs",
          ],
          reponse: 1,
          explication: "Une épreuve de Bernoulli a exactement deux issues (succès / échec). « Obtenir 6 ou non » en a deux, avec p = 1/6. Les autres expériences ont plus de deux issues.",
        },
        {
          type: "saisie",
          question: "X est une variable de Bernoulli de paramètre p = 0,3 (X = 1 en cas de succès, 0 sinon). Calcule V(X).",
          reponses: ["0,21", "0.21"],
          explication: "V(X) = p(1 − p) = 0,3 × 0,7 = 0,21. (Et E(X) = p = 0,3.)",
        },
        {
          type: "saisie",
          question: "On lance trois fois de suite une pièce équilibrée (lancers indépendants). Quelle est la probabilité d'obtenir trois fois « pile » ?",
          reponses: ["1/8", "0,125", "0.125", "12,5 %", "12,5%"],
          explication: "Les lancers sont indépendants : on multiplie le long du chemin P-P-P. (1/2)³ = 1/8 = 0,125.",
        },
        {
          type: "saisie",
          question: "On répète 3 fois, de façon indépendante, une épreuve de Bernoulli de probabilité de succès 0,3. Quelle est la probabilité d'obtenir au moins un succès ?",
          reponses: ["0,657", "0.657", "65,7 %", "65,7%"],
          explication: "Le contraire de « au moins un succès » est « aucun succès », de probabilité 0,7³ = 0,343. Donc P = 1 − 0,343 = 0,657.",
        },
        {
          type: "qcm",
          question: "Dans l'arbre de 3 épreuves de Bernoulli indépendantes, combien de chemins comportent exactement 2 succès ?",
          choix: ["3", "6", "2", "8"],
          reponse: 0,
          explication: "Il faut choisir la position de l'unique échec : SSS̄, SS̄S ou S̄SS. Il y a donc 3 chemins (sur 2³ = 8 chemins au total).",
        },
        {
          type: "qcm",
          question: "En Python, avec from random import random, que simule l'instruction « if random() < 0.3: » ?",
          choix: [
            "Un événement de probabilité 0,7",
            "Un nombre entier entre 0 et 3",
            "Un événement de probabilité 0,3",
            "Un événement certain",
          ],
          reponse: 2,
          explication: "random() renvoie un réel au hasard dans [0 ; 1[ ; il est inférieur à 0,3 avec la probabilité 0,3 (longueur de l'intervalle [0 ; 0,3[).",
        },
        {
          type: "vf",
          question: "Plus la taille n d'un échantillon est grande, plus la moyenne de l'échantillon a tendance à être proche de l'espérance de la variable aléatoire.",
          reponse: true,
          explication: "Vrai : c'est ce qu'on observe par simulation (loi des grands nombres). L'écart « typique » 2σ/√n diminue quand n augmente.",
        },
        {
          type: "saisie",
          question: "X est une variable de Bernoulli de paramètre p = 0,5. On simule des échantillons de taille n = 100. Calcule le seuil 2σ/√n.",
          reponses: ["0,1", "0.1", "0,10", "1/10"],
          explication: "σ = √(p(1 − p)) = √0,25 = 0,5 et √n = 10. 2σ/√n = 2 × 0,5/10 = 0,1. Dans environ 95 % des échantillons, la fréquence des succès est entre 0,4 et 0,6.",
        },
        {
          type: "redaction",
          question: "Un élève répond au hasard aux 4 questions d'un QCM ; chaque question a 4 choix dont un seul est juste. Les réponses sont indépendantes. On note X le nombre de bonnes réponses.\n1) Justifie qu'il s'agit de la répétition de 4 épreuves de Bernoulli indépendantes et donne p.\n2) Calcule P(X = 0), P(X = 4) puis P(X ≥ 1).\n3) Calcule P(X = 1).\n4) Écris une fonction Python simul() qui simule une copie et renvoie le nombre de bonnes réponses.",
          corrige: `1) Chaque question est une épreuve à deux issues : succès (bonne réponse) ou échec. Une seule réponse juste parmi 4 choisis au hasard : **p = 1/4**. On répète 4 fois la même épreuve, de façon indépendante.

2) X = 0 : 4 échecs, un seul chemin : P(X = 0) = (3/4)⁴ = **81/256** ≈ 0,316.
X = 4 : 4 succès : P(X = 4) = (1/4)⁴ = **1/256**.
P(X ≥ 1) = 1 − P(X = 0) = 1 − 81/256 = **175/256** ≈ 0,684.

3) Exactement 1 succès : l'unique bonne réponse peut être à la question 1, 2, 3 ou 4, soit **4 chemins**, chacun de probabilité (1/4) × (3/4)³ = 27/256.
P(X = 1) = 4 × 27/256 = 108/256 = **27/64** ≈ 0,422.

4)
>! ~~~
>! from random import random
>!
>! def simul():
>!     x = 0
>!     for k in range(4):
>!         if random() < 0.25:
>!             x = x + 1
>!     return x
>! ~~~`,
        },
        {
          type: "redaction",
          question: "On veut tester un dé à 6 faces. On note X la variable qui vaut 1 si le dé donne 6 et 0 sinon ; si le dé est équilibré, p = 1/6.\n1) Calcule E(X) et σ(X) (valeurs exactes, puis σ arrondi au centième).\n2) Pour des échantillons de 100 lancers, calcule 2σ/√n (arrondi au millième) et donne l'intervalle [p − 2σ/√n ; p + 2σ/√n] (bornes arrondies au centième).\n3) Sur 100 lancers, Inès obtient 30 fois le 6. Que peut-on penser ? Explique ce que signifie « environ 95 % » dans ce contexte.",
          corrige: `1) X suit une loi de Bernoulli de paramètre p = 1/6.
**E(X) = 1/6** ; V(X) = p(1 − p) = 1/6 × 5/6 = 5/36, donc **σ(X) = √5/6 ≈ 0,37**.

2) n = 100, √n = 10 : 2σ/√n = 2 × (√5/6)/10 = √5/30 ≈ **0,075**.
Intervalle : [1/6 − 0,075 ; 1/6 + 0,075] ≈ **[0,09 ; 0,24]**.

3) La fréquence observée est 30/100 = 0,30, qui est **en dehors** de l'intervalle : l'écart avec 1/6 (environ 0,13) dépasse nettement 2σ/√n.
Si le dé était équilibré, une simulation montre qu'environ 95 % des échantillons de 100 lancers donneraient une fréquence de 6 dans cet intervalle ; un tel écart est donc peu probable. **On peut douter que le dé soit équilibré**, mais ce n'est pas une certitude : environ 5 % des échantillons d'un dé équilibré sortent aussi de l'intervalle.`,
        },
      ],
    },

    // ───────────────────────── 15. Algorithmes en analyse
    {
      id: "euler-newton",
      titre: "Algorithmes en analyse : méthodes d'Euler et de Newton",
      theme: "Analyse",
      cours: `
## Idée de départ : l'approximation affine
Près du point d'abscisse a, la courbe de f est très proche de sa tangente. Pour h petit :
**f(a + h) ≈ f(a) + h × f′(a)**.

>! **Exemple** : f(x) = √x, a = 4, h = 0,1. f(4) = 2, f′(4) = 1/(2√4) = 1/4.
>! √4,1 ≈ 2 + 0,1 × 1/4 = **2,025** (valeur réelle : 2,0248…).

## Méthode d'Euler pour la fonction exponentielle
On ne connaît de exp que **f′ = f** et **f(0) = 1**. On choisit un **pas** h (petit) et on avance de proche en proche :
f(x + h) ≈ f(x) + h × f′(x) = f(x) + h × f(x) = **(1 + h) × f(x)**.

On construit ainsi des points (xₖ ; yₖ) avec x₀ = 0, y₀ = 1, puis **xₖ₊₁ = xₖ + h** et **yₖ₊₁ = (1 + h) × yₖ**.
La suite (yₖ) est **géométrique** de raison 1 + h : yₖ = (1 + h)ᵏ.

>! **Exemple avec h = 0,25 sur [0 ; 1]**
>! | x | 0 | 0,25 | 0,5 | 0,75 | 1 |
>! |---|---|---|---|---|---|
>! | y | 1 | 1,25 | 1,5625 | 1,953125 | 2,44140625 |
>! On obtient e ≈ 2,44 alors que e ≈ 2,718 : l'approximation est grossière.
>! Avec h = 0,1 : e ≈ 1,1¹⁰ ≈ 2,594 ; avec h = 0,01 : e ≈ 1,01¹⁰⁰ ≈ 2,705. **Plus le pas est petit, meilleure est l'approximation.**

~~~
def euler(h, n):
    x = 0
    y = 1
    L = [(x, y)]
    for k in range(n):
        y = y + h * y
        x = x + h
        L.append((x, y))
    return L
~~~
euler(0.1, 10) renvoie la liste des 11 points de 0 à 1 ; on peut les tracer pour voir apparaître la courbe de exp.

## Méthode de Newton (cas favorables)
On cherche une solution de f(x) = 0. On part d'une valeur x₀ proche de la solution, et on remplace la courbe par sa **tangente** : la tangente en xₙ coupe l'axe des abscisses en
**xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)** (si f′(xₙ) ≠ 0).

>! **Exemple : approcher √2**, solution positive de x² − 2 = 0. f(x) = x² − 2, f′(x) = 2x, x₀ = 1.
>! x₁ = 1 − (1 − 2)/2 = 1,5 ; x₂ = 1,5 − 0,25/3 = 17/12 ≈ 1,4167 ; x₃ = 577/408 ≈ 1,414216.
>! √2 ≈ 1,414214 : en trois étapes, on a déjà 5 décimales exactes.

~~~
def newton(x, n):
    for k in range(n):
        x = x - (x * x - 2) / (2 * x)
    return x
~~~

## Liste des coefficients directeurs des sécantes
Pour conjecturer f′(a), on calcule (f(a + h) − f(a))/h pour h = 0,1 ; 0,01 ; 0,001… :

~~~
def secantes(f, a):
    L = []
    h = 1
    for k in range(5):
        h = h / 10
        L.append((f(a + h) - f(a)) / h)
    return L
~~~

> **À retenir**
> - Approximation affine : f(a + h) ≈ f(a) + h f′(a).
> - Euler pour exp : yₖ₊₁ = (1 + h) yₖ, y₀ = 1 ; plus h est petit, meilleure est l'approximation.
> - Newton : xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) (intersection de la tangente avec l'axe des abscisses).
`,
      exercices: [
        {
          type: "qcm",
          question: "Dans la méthode d'Euler appliquée à exp (f′ = f, f(0) = 1) avec un pas h, comment passe-t-on de yₖ à yₖ₊₁ ?",
          choix: ["yₖ₊₁ = (1 + h) × yₖ", "yₖ₊₁ = yₖ + h", "yₖ₊₁ = h × yₖ", "yₖ₊₁ = yₖ + eʰ"],
          reponse: 0,
          explication: "f(x + h) ≈ f(x) + h f′(x) et f′ = f, donc yₖ₊₁ = yₖ + h yₖ = (1 + h) yₖ.",
        },
        {
          type: "saisie",
          question: "Méthode d'Euler pour exp avec un pas h = 0,1 en partant de y₀ = 1. Calcule y₂ (approximation de e^0,2).",
          reponses: ["1,21", "1.21"],
          explication: "y₁ = 1,1 × 1 = 1,1 ; y₂ = 1,1 × 1,1 = 1,21. (Valeur exacte : e^0,2 ≈ 1,2214.)",
        },
        {
          type: "saisie",
          question: "Méthode d'Euler pour exp avec un pas h = 0,5 : quelle approximation de e obtient-on en deux étapes (de 0 à 1) ?",
          reponses: ["2,25", "2.25", "9/4"],
          explication: "y₁ = 1,5 × 1 = 1,5 ; y₂ = 1,5 × 1,5 = 2,25. C'est loin de e ≈ 2,718 : le pas est trop grand.",
        },
        {
          type: "vf",
          question: "Avec un pas h = 0,1, la méthode d'Euler donne exactement e pour l'abscisse 1.",
          reponse: false,
          explication: "Faux : on obtient 1,1¹⁰ ≈ 2,594, une valeur approchée (par défaut) de e ≈ 2,718. C'est une méthode d'approximation.",
        },
        {
          type: "qcm",
          question: "En utilisant l'approximation affine f(a + h) ≈ f(a) + h f′(a) avec f(x) = √x, a = 4 et h = 0,1, quelle valeur approchée de √4,1 obtient-on ?",
          choix: ["2,1", "2,05", "2,0025", "2,025"],
          reponse: 3,
          explication: "f(4) = 2 et f′(4) = 1/(2√4) = 1/4. √4,1 ≈ 2 + 0,1 × 0,25 = 2,025 (valeur réelle ≈ 2,0248).",
        },
        {
          type: "saisie",
          question: "Méthode de Newton pour f(x) = x² − 2 avec x₀ = 1 : xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). Calcule x₁.",
          reponses: ["1,5", "1.5", "3/2"],
          explication: "f(1) = −1 et f′(1) = 2. x₁ = 1 − (−1)/2 = 1 + 0,5 = 1,5.",
        },
        {
          type: "saisie",
          question: "Suite du calcul précédent : avec x₁ = 1,5, calcule x₂ (fraction irréductible).",
          reponses: ["17/12", "x2=17/12", "x₂=17/12", "x₂ = 17/12"],
          explication: "f(1,5) = 2,25 − 2 = 0,25 et f′(1,5) = 3. x₂ = 1,5 − 0,25/3 = 3/2 − 1/12 = 18/12 − 1/12 = 17/12 ≈ 1,4167 (√2 ≈ 1,4142).",
        },
        {
          type: "qcm",
          question: "Géométriquement, dans la méthode de Newton, xₙ₊₁ est :",
          choix: [
            "l'abscisse du sommet de la courbe",
            "l'abscisse du point où la tangente en xₙ coupe l'axe des abscisses",
            "l'ordonnée du point de la courbe d'abscisse xₙ",
            "le milieu de xₙ et de la solution",
          ],
          reponse: 1,
          explication: "La tangente en xₙ a pour équation y = f′(xₙ)(x − xₙ) + f(xₙ). Elle coupe l'axe des abscisses (y = 0) en x = xₙ − f(xₙ)/f′(xₙ).",
        },
        {
          type: "redaction",
          question: "On veut construire une approximation de la courbe de la fonction exponentielle sur [0 ; 1] par la méthode d'Euler avec un pas h = 0,25.\n1) Justifie la relation yₖ₊₁ = 1,25 × yₖ, avec y₀ = 1.\n2) Calcule y₁, y₂, y₃, y₄ (valeurs exactes décimales).\n3) Quelle est la nature de la suite (yₖ) ? Exprime yₖ en fonction de k.\n4) Compare y₄ à e ≈ 2,718 et explique comment améliorer l'approximation.\n5) Complète la fonction Python euler(h, n) qui renvoie la liste des ordonnées y₀, …, yₙ.",
          corrige: `1) On sait que f′ = f. Pour h petit, f(x + h) ≈ f(x) + h f′(x) = f(x) + h f(x) = (1 + h) f(x). Avec h = 0,25 : **yₖ₊₁ = 1,25 yₖ**, et y₀ = f(0) = 1.

2) y₁ = **1,25** ; y₂ = 1,25² = **1,5625** ; y₃ = 1,25³ = **1,953125** ; y₄ = 1,25⁴ = **2,44140625**.

3) On multiplie toujours par 1,25 : (yₖ) est **géométrique** de raison 1,25 et de premier terme 1, donc **yₖ = 1,25ᵏ**.

4) y₄ ≈ 2,44 est une approximation de e^1 = e ≈ 2,718 : l'erreur est d'environ 0,28 (environ 10 %). Pour améliorer l'approximation, on **diminue le pas** (h = 0,1 donne ≈ 2,594 ; h = 0,01 donne ≈ 2,705).

5)
>! ~~~
>! def euler(h, n):
>!     y = 1
>!     L = [y]
>!     for k in range(n):
>!         y = (1 + h) * y
>!         L.append(y)
>!     return L
>! ~~~
euler(0.25, 4) renvoie [1, 1.25, 1.5625, 1.953125, 2.44140625].`,
        },
        {
          type: "redaction",
          question: "On cherche une valeur approchée de √3, solution positive de l'équation x² − 3 = 0, par la méthode de Newton.\n1) On pose f(x) = x² − 3. Montre que la relation de Newton s'écrit xₙ₊₁ = xₙ − (xₙ² − 3)/(2xₙ).\n2) Avec x₀ = 2, calcule x₁ puis x₂ (fractions irréductibles), puis donne une valeur approchée de x₂ à 10⁻⁴ près.\n3) Écris une fonction Python newton(n) qui renvoie xₙ.",
          corrige: `1) f est dérivable sur ℝ et f′(x) = 2x. La relation xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ) donne **xₙ₊₁ = xₙ − (xₙ² − 3)/(2xₙ)** (valable car xₙ ≠ 0).

2) x₁ = 2 − (4 − 3)/4 = 2 − 1/4 = **7/4** = 1,75.
x₂ = 7/4 − (49/16 − 3)/(7/2) = 7/4 − (1/16) × (2/7) = 7/4 − 1/56 = 98/56 − 1/56 = **97/56** ≈ **1,7321**.
(√3 ≈ 1,73205 : la méthode converge très vite.)

3)
>! ~~~
>! def newton(n):
>!     x = 2
>!     for k in range(n):
>!         x = x - (x * x - 3) / (2 * x)
>!     return x
>! ~~~`,
        },
      ],
    },

    // ───────────────────────── 16. Automatismes (épreuve anticipée)
    {
      id: "automatismes-epreuve-anticipee",
      titre: "Automatismes : préparer l'épreuve anticipée (sans calculatrice)",
      theme: "Automatismes",
      cours: `
## L'épreuve anticipée de mathématiques
Depuis juin 2026, les élèves de 1re passent en fin d'année (en juin) une **épreuve anticipée de mathématiques** du baccalauréat. Pour toi qui suis la spécialité, le sujet porte sur le **programme de spécialité de 1re**. Modalités fixées par les textes officiels (à vérifier chaque année avec ton professeur) :
- durée **2 heures**, coefficient 2, **calculatrice interdite** ;
- **partie 1 : automatismes** (6 points) : questions courtes, calculs et QCM ;
- **partie 2** (14 points) : deux ou trois exercices indépendants sur le programme.

Les automatismes sont des réflexes de calcul à travailler **régulièrement**, sans calculatrice. Ce chapitre en rassemble les principaux.

## Proportions et pourcentages
- Prendre t % d'une quantité : multiplier par t/100. 30 % de 40 % = 0,3 × 0,4 = 0,12 = 12 %.
- **Coefficient multiplicateur** : hausse de t % ⟺ × (1 + t/100) ; baisse de t % ⟺ × (1 − t/100).
- **Évolutions successives** : on **multiplie** les coefficients (on n'additionne pas les pourcentages). +20 % puis −20 % : × 1,2 × 0,8 = × 0,96, soit **−4 %**.
- **Évolution réciproque** : pour annuler une baisse de 20 % (× 0,8), il faut × 1/0,8 = × 1,25, soit **+25 %**.
- Retrouver une valeur initiale : V₀ = V₁ ÷ coefficient.

## Calcul numérique
- Fractions : a/b + c/d = (ad + bc)/(bd) ; diviser par une fraction, c'est multiplier par son inverse.
- Puissances : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ/aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ ; a⁻ⁿ = 1/aⁿ ; 10⁻³ = 0,001.
- Racines : √(ab) = √a × √b ; √50 = √25 × √2 = 5√2. Attention : √(a + b) ≠ √a + √b.
- Écriture scientifique : 0,00042 = 4,2 × 10⁻⁴.

## Calcul littéral
- Identités remarquables : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b².
- Factoriser par un facteur commun ou avec une identité : x² − 9 = (x − 3)(x + 3).
- Équations et inéquations du 1er degré : attention, **multiplier ou diviser par un nombre négatif change le sens** de l'inégalité.

## Fonctions et graphiques
- Coefficient directeur de la droite (AB) : m = (y_B − y_A)/(x_B − x_A).
- Lire une image, un antécédent, le signe, les variations sur une courbe ; lire f′(a) comme pente de la tangente.
- Droite d'équation y = mx + p : p est l'ordonnée à l'origine.

## Statistiques et probabilités
- Moyenne, médiane, fréquences ; probabilité d'un événement contraire ; lecture d'un arbre ou d'un tableau croisé.

>! **Conseils pour la partie automatismes**
>! - Lis toutes les propositions d'un QCM et élimine celles qui sont absurdes (ordre de grandeur, signe).
>! - Vérifie par un calcul inverse (développer pour contrôler une factorisation, remplacer x par la solution trouvée).
>! - Ne reste pas bloqué : passe et reviens à la fin.

> **À retenir**
> - Évolutions successives : on multiplie les coefficients.
> - aᵐ × aⁿ = aᵐ⁺ⁿ ; (aᵐ)ⁿ = aᵐⁿ ; √(a²b) = a√b (a ≥ 0).
> - Inéquation : diviser par un négatif change le sens.
> - Coefficient directeur : (y_B − y_A)/(x_B − x_A).
`,
      exercices: [
        {
          type: "qcm",
          question: "Un prix augmente de 20 %, puis baisse de 20 %. Globalement, le prix :",
          choix: ["ne change pas", "baisse de 4 %", "augmente de 4 %", "baisse de 2 %"],
          reponse: 1,
          explication: "On multiplie les coefficients : 1,2 × 0,8 = 0,96 = 1 − 0,04. Le prix baisse de 4 %. Les pourcentages ne s'additionnent pas.",
        },
        {
          type: "saisie",
          question: "Après une hausse de 25 %, un article coûte 150 €. Quel était son prix initial (en €) ?",
          reponses: ["120", "120 €", "120€"],
          explication: "Hausse de 25 % : × 1,25. Prix initial = 150 ÷ 1,25 = 150 × 4/5 = 120 €. (Retirer 25 % de 150 donnerait 112,50 €, ce qui est faux.)",
        },
        {
          type: "saisie",
          question: "Calcule 2/3 + 5/6 (fraction irréductible).",
          reponses: ["3/2", "1,5", "1.5"],
          explication: "2/3 = 4/6, donc 2/3 + 5/6 = 4/6 + 5/6 = 9/6 = 3/2.",
        },
        {
          type: "saisie",
          question: "Calcule (2³)² × 2⁻⁴.",
          reponses: ["4", "2²", "2^2"],
          explication: "(2³)² = 2⁶, puis 2⁶ × 2⁻⁴ = 2⁶⁻⁴ = 2² = 4.",
        },
        {
          type: "qcm",
          question: "√50 est égal à :",
          choix: ["25", "2√5", "10√5", "5√2"],
          reponse: 3,
          explication: "50 = 25 × 2, donc √50 = √25 × √2 = 5√2.",
        },
        {
          type: "qcm",
          question: "La forme développée de (2x − 3)² est :",
          choix: ["4x² − 12x + 9", "4x² − 9", "4x² − 6x + 9", "2x² − 12x + 9"],
          reponse: 0,
          explication: "(a − b)² = a² − 2ab + b² avec a = 2x et b = 3 : 4x² − 12x + 9.",
        },
        {
          type: "qcm",
          question: "L'ensemble des solutions de −2x + 4 > 10 est :",
          choix: ["]3 ; +∞[", "]−∞ ; −3[", "]−3 ; +∞[", "]−∞ ; 3["],
          reponse: 1,
          explication: "−2x > 6 ; on divise par −2 < 0, donc le sens change : x < −3. S = ]−∞ ; −3[.",
        },
        {
          type: "saisie",
          question: "Quel est le coefficient directeur de la droite passant par A(1 ; 3) et B(3 ; −1) ?",
          reponses: ["-2", "−2"],
          explication: "m = (y_B − y_A)/(x_B − x_A) = (−1 − 3)/(3 − 1) = −4/2 = −2.",
        },
        {
          type: "saisie",
          question: "Dans un lycée, 40 % des élèves sont en 1re, et 30 % des élèves de 1re suivent la spécialité maths. Quel pourcentage des élèves du lycée sont en 1re avec la spécialité maths ?",
          reponses: ["12", "12 %", "12%", "0,12"],
          explication: "On prend 30 % de 40 % : 0,3 × 0,4 = 0,12, soit 12 %.",
        },
        {
          type: "vf",
          question: "Deux hausses successives de 10 % correspondent à une hausse globale de 21 %.",
          reponse: true,
          explication: "Vrai : 1,1 × 1,1 = 1,21 = 1 + 0,21. La hausse globale est de 21 % (et non 20 %).",
        },
        {
          type: "saisie",
          question: "Donne l'écriture scientifique de 0,00042 (forme a × 10^n).",
          reponses: ["4,2×10^-4", "4,2 × 10^-4", "4,2×10⁻⁴", "4,2 × 10⁻⁴", "4.2×10^-4", "4,2*10^-4", "4,2 x 10^-4", "4,2x10^-4", "4,2 × 10^(-4)", "4,2×10^(-4)"],
          explication: "On place la virgule après le premier chiffre non nul : 4,2. On l'a déplacée de 4 rangs vers la droite, donc 0,00042 = 4,2 × 10⁻⁴.",
        },
        {
          type: "redaction",
          question: "Sans calculatrice.\n1) Un article baisse de 20 %. De quel pourcentage doit-il augmenter pour revenir à son prix initial ?\n2) Factorise x² − 9, puis résous x² − 9 = 0.\n3) Une fonction affine f vérifie f(0) = 3 et f(2) = −1. Donne son expression.\n4) Écris 3/4 − 1/6 sous forme de fraction irréductible.",
          corrige: `1) Baisse de 20 % : × 0,8. Pour revenir au prix initial, il faut multiplier par 1/0,8 = 10/8 = **1,25**, soit une **hausse de 25 %** (et non de 20 %).

2) x² − 9 = x² − 3² = **(x − 3)(x + 3)** (identité a² − b²).
Un produit est nul si et seulement si l'un des facteurs est nul : x − 3 = 0 ou x + 3 = 0. **S = {−3 ; 3}**.

3) f(x) = mx + p avec p = f(0) = 3. m = (f(2) − f(0))/(2 − 0) = (−1 − 3)/2 = −2. **f(x) = −2x + 3**. Vérification : f(2) = −4 + 3 = −1.

4) Dénominateur commun 12 : 3/4 = 9/12 et 1/6 = 2/12. 3/4 − 1/6 = **7/12**.`,
        },
      ],
    },
  ],
};
