export default {
  chapitres: [
    // ───────────────────────── 1. Arithmétique
    {
      id: "arithmetique",
      titre: "Arithmétique : nombres premiers et fractions irréductibles",
      theme: "Nombres et calculs",
      cours: `
## Diviseurs et multiples
a et b sont des nombres entiers positifs (b non nul). Si la division de a par b « tombe juste » (reste 0), on dit que :
- **b est un diviseur de a** (ou a est divisible par b) ;
- **a est un multiple de b**.

>! **Exemple** : 84 = 12 × 7, donc 12 et 7 sont des diviseurs de 84, et 84 est un multiple de 12 et de 7.

## Critères de divisibilité
| Un nombre est divisible par… | si… | Exemple |
|---|---|---|
| 2 | son chiffre des unités est 0, 2, 4, 6 ou 8 | 3 718 |
| 3 | la somme de ses chiffres est divisible par 3 | 2 451 (2 + 4 + 5 + 1 = 12) |
| 5 | son chiffre des unités est 0 ou 5 | 1 935 |
| 9 | la somme de ses chiffres est divisible par 9 | 3 456 (somme 18) |
| 10 | son chiffre des unités est 0 | 7 210 |

## Nombres premiers
Un **nombre premier** est un entier qui a **exactement deux diviseurs** : 1 et lui-même.

Les nombres premiers inférieurs à 30 : **2, 3, 5, 7, 11, 13, 17, 19, 23, 29**.

- **1 n'est pas premier** : il n'a qu'un seul diviseur.
- **2 est le seul nombre premier pair**.
- Pour savoir si un nombre est premier, on teste sa divisibilité par 2, 3, 5, 7, 11… tant que le carré du diviseur testé ne dépasse pas le nombre.

>! **Exemple** : 91 est-il premier ? 91 = 7 × 13, donc **non**. Et 53 ? Il n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 (et 11² = 121 > 53) : **53 est premier**.

## Décomposer en produit de facteurs premiers
Tout entier supérieur ou égal à 2 s'écrit comme un produit de nombres premiers, et cette écriture est **unique** (à l'ordre des facteurs près).

>! **Méthode** : on divise par le plus petit nombre premier possible, et on recommence.
>! 360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2 × 2 × 2 × 3 × 15 = 2 × 2 × 2 × 3 × 3 × 5
>! Donc **360 = 2³ × 3² × 5**.

## Rendre une fraction irréductible
Une fraction est **irréductible** quand on ne peut plus la simplifier : son numérateur et son dénominateur n'ont plus d'autre diviseur commun que 1.

>! **Exemple** : simplifier 84/126.
>! 84 = 2² × 3 × 7 et 126 = 2 × 3² × 7.
>! Facteurs communs : 2 × 3 × 7 = 42.
>! 84/126 = (42 × 2)/(42 × 3) = **2/3**.

## Problèmes de partage (type brevet)
On cherche souvent **le plus grand nombre de paquets identiques** qu'on peut former avec toutes les pièces : c'est le **plus grand diviseur commun** des deux quantités.

>! **Exemple** : avec 84 billes rouges et 126 billes bleues, le plus grand diviseur commun est 42 (calculé ci-dessus). On peut faire au maximum **42 sachets**, contenant chacun 84 ÷ 42 = 2 billes rouges et 126 ÷ 42 = 3 billes bleues.

## Erreurs fréquentes
- Croire que 1 est premier, ou qu'un nombre impair est forcément premier (9, 15, 21, 91… ne le sont pas).
- Oublier de vérifier que tous les facteurs de la décomposition sont bien premiers (360 = 2³ × 45 n'est pas fini : 45 = 3² × 5).

> **À retenir**
> - Un nombre premier a exactement deux diviseurs : 1 et lui-même.
> - Décomposition : divise par 2, 3, 5, 7… jusqu'à n'obtenir que des facteurs premiers.
> - Fraction irréductible : on simplifie par **tous** les facteurs premiers communs.
> - « Le plus grand nombre de paquets identiques » = le plus grand diviseur commun.
`,
      exercices: [
        {
          type: "qcm",
          question: "Lequel de ces nombres est premier ?",
          choix: ["53", "57", "51", "91"],
          reponse: 0,
          explication: "51 = 3 × 17, 57 = 3 × 19 et 91 = 7 × 13 ne sont pas premiers. 53 n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 (et 11² = 121 dépasse 53) : il est premier.",
        },
        {
          type: "vf",
          question: "1 est un nombre premier.",
          reponse: false,
          explication: "Faux : un nombre premier a exactement **deux** diviseurs. 1 n'en a qu'un seul (lui-même), il n'est donc pas premier.",
        },
        {
          type: "vf",
          question: "Le nombre 2 485 est divisible par 3.",
          reponse: false,
          explication: "Faux : la somme de ses chiffres vaut 2 + 4 + 8 + 5 = 19, qui n'est pas divisible par 3. (Il est en revanche divisible par 5, car il se termine par 5.)",
        },
        {
          type: "qcm",
          question: "Quel nombre est un multiple de 9 ?",
          choix: ["2 345", "5 432", "1 009", "3 456"],
          reponse: 3,
          explication: "Un nombre est divisible par 9 si la somme de ses chiffres l'est : 3 + 4 + 5 + 6 = 18, divisible par 9. Pour 2 345 et 5 432 la somme vaut 14, pour 1 009 elle vaut 10.",
        },
        {
          type: "saisie",
          question: "Décompose 180 en produit de facteurs premiers (écris par exemple 2^3×5 pour 2³ × 5).",
          reponses: ["2²×3²×5", "2^2×3^2×5", "2^2*3^2*5", "2²*3²*5", "2×2×3×3×5", "2*2*3*3*5", "2^2x3^2x5", "2²x3²x5", "2x2x3x3x5", "5×3²×2²", "3²×2²×5", "2²×5×3²", "5×2²×3²", "3²×5×2²"],
          explication: "180 = 2 × 90 = 2 × 2 × 45 = 2 × 2 × 3 × 15 = 2 × 2 × 3 × 3 × 5, donc **180 = 2² × 3² × 5**.",
        },
        {
          type: "qcm",
          question: "Combien le nombre 36 a-t-il de diviseurs ?",
          choix: ["6", "8", "9", "12"],
          reponse: 2,
          explication: "Les diviseurs de 36 sont 1, 2, 3, 4, 6, 9, 12, 18 et 36 : il y en a 9. (6 × 6 = 36 : le diviseur 6 ne compte qu'une fois.)",
        },
        {
          type: "qcm",
          question: "Quelle est la forme irréductible de la fraction 84/126 ?",
          choix: ["42/63", "2/3", "4/6", "14/21"],
          reponse: 1,
          explication: "84 = 2² × 3 × 7 et 126 = 2 × 3² × 7 ont pour facteurs communs 2 × 3 × 7 = 42. On obtient 84/126 = 2/3. Les autres fractions sont égales mais encore simplifiables.",
        },
        {
          type: "saisie",
          question: "Écris la fraction 72/120 sous forme de fraction irréductible.",
          reponses: ["3/5"],
          explication: "72 = 2³ × 3² et 120 = 2³ × 3 × 5. Facteurs communs : 2³ × 3 = 24. Donc 72/120 = (24 × 3)/(24 × 5) = **3/5**.",
        },
        {
          type: "saisie",
          question: "Quel est le plus grand diviseur commun de 84 et 120 ?",
          reponses: ["12"],
          explication: "84 = 2² × 3 × 7 et 120 = 2³ × 3 × 5. Les facteurs premiers communs sont 2² et 3 : le plus grand diviseur commun est 2² × 3 = **12**.",
        },
        {
          type: "redaction",
          question: "Un fleuriste dispose de 105 roses et de 63 tulipes. Il veut réaliser des bouquets **identiques** (même nombre de roses et même nombre de tulipes dans chaque bouquet) en utilisant **toutes** ses fleurs.\n1) Peut-il réaliser 7 bouquets ? Justifie.\n2) Décompose 105 et 63 en produits de facteurs premiers.\n3) Quel est le nombre maximal de bouquets qu'il peut réaliser ? Quelle est alors la composition de chaque bouquet ?",
          corrige: `1) 105 ÷ 7 = 15 et 63 ÷ 7 = 9 : les deux divisions tombent juste. **Oui**, il peut faire 7 bouquets de 15 roses et 9 tulipes.

2) 105 = 3 × 35 = **3 × 5 × 7**.
63 = 3 × 21 = **3² × 7**.

3) Le nombre de bouquets doit diviser 105 et 63. Le plus grand diviseur commun est formé des facteurs premiers communs : 3 × 7 = **21**.
Il peut donc réaliser au maximum **21 bouquets**, chacun composé de 105 ÷ 21 = **5 roses** et de 63 ÷ 21 = **3 tulipes**.`,
        },
      ],
    },

    // ───────────────────────── 2. Puissances et racines carrées
    {
      id: "puissances-notation-scientifique",
      titre: "Puissances, notation scientifique et racines carrées",
      theme: "Nombres et calculs",
      cours: `
## Puissances d'un nombre
Pour un nombre a et un entier n ≥ 1 : **aⁿ = a × a × … × a** (n facteurs). On lit « a puissance n » ; n est l'**exposant**.

- 2⁵ = 2 × 2 × 2 × 2 × 2 = 32
- (−2)³ = (−2) × (−2) × (−2) = −8
- a¹ = a et, pour a ≠ 0, a⁰ = 1.

Pour a ≠ 0, on définit aussi **a⁻ⁿ = 1/aⁿ** : 2⁻³ = 1/2³ = 1/8.

>! **Attention aux parenthèses** : (−3)² = (−3) × (−3) = 9, mais −3² = −(3 × 3) = −9. Le carré ne s'applique qu'à ce qui est juste devant lui.

## Puissances de 10
| Écriture | Valeur |
|---|---|
| 10³ | 1 000 |
| 10¹ | 10 |
| 10⁰ | 1 |
| 10⁻¹ | 0,1 |
| 10⁻³ | 0,001 |

10ⁿ s'écrit avec un 1 suivi de n zéros ; 10⁻ⁿ s'écrit 0,0…01 avec le 1 au n-ième rang après la virgule.

**Règles de calcul** (m et n entiers relatifs) :
- 10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ ; par exemple 10⁵ × 10⁻² = 10³.
- 10ᵐ / 10ⁿ = 10ᵐ⁻ⁿ ; par exemple 10² / 10⁶ = 10⁻⁴.
- (10ᵐ)ⁿ = 10ᵐˣⁿ ; par exemple (10³)² = 10⁶.

## Notation scientifique
La **notation scientifique** d'un nombre décimal positif est **a × 10ⁿ**, où **1 ≤ a < 10** (un seul chiffre non nul avant la virgule) et n est un entier relatif.

>! **Exemples** :
>! 45 000 000 = 4,5 × 10⁷ (on déplace la virgule de 7 rangs vers la gauche)
>! 0,000 52 = 5,2 × 10⁻⁴ (on déplace la virgule de 4 rangs vers la droite)
>! 45 × 10⁶ n'est **pas** une notation scientifique : 45 n'est pas compris entre 1 et 10.

## Préfixes des unités
| Préfixe | Symbole | Puissance |
|---|---|---|
| téra | T | 10¹² |
| giga | G | 10⁹ |
| méga | M | 10⁶ |
| kilo | k | 10³ |
| milli | m | 10⁻³ |
| micro | µ | 10⁻⁶ |
| nano | n | 10⁻⁹ |

Exemple : un disque dur de 2 To contient 2 × 10¹² octets ; un globule rouge mesure environ 7,5 µm, soit 7,5 × 10⁻⁶ m.

## Racine carrée
Pour un nombre **positif** a, la **racine carrée de a**, notée √a, est le nombre **positif** dont le carré vaut a.
- √49 = 7 car 7² = 49 et 7 ≥ 0.
- (√a)² = a ; par exemple (√5)² = 5.
- √2 n'est pas un nombre décimal : √2 ≈ 1,414.
- La racine carrée d'un nombre négatif n'existe pas.

Carrés à connaître : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.

>! **Erreur fréquente** : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. On ne peut pas « couper » une racine sur une somme.

> **À retenir**
> - aⁿ = a × … × a (n fois) ; a⁻ⁿ = 1/aⁿ.
> - 10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ.
> - Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10.
> - √a est le nombre positif dont le carré vaut a ; √(a + b) ≠ √a + √b.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule 2⁵.",
          reponses: ["32"],
          explication: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32. (Ce n'est pas 2 × 5 = 10 !)",
        },
        {
          type: "qcm",
          question: "À quel nombre est égal 10⁻³ ?",
          choix: ["−1 000", "0,001", "−0,001", "0,0001"],
          reponse: 1,
          explication: "10⁻³ = 1/10³ = 1/1 000 = 0,001. Un exposant négatif ne rend pas le nombre négatif : il donne un nombre entre 0 et 1.",
        },
        {
          type: "saisie",
          question: "Calcule (−2)³.",
          reponses: ["-8"],
          explication: "(−2)³ = (−2) × (−2) × (−2) = 4 × (−2) = −8. Trois facteurs négatifs : le produit est négatif.",
        },
        {
          type: "qcm",
          question: "Que vaut 10⁵ × 10⁻² ?",
          choix: ["10³", "10⁷", "10⁻¹⁰", "100⁻¹⁰"],
          reponse: 0,
          explication: "On additionne les exposants : 10⁵ × 10⁻² = 10⁵⁺⁽⁻²⁾ = 10³ = 1 000.",
        },
        {
          type: "saisie",
          question: "On écrit 45 000 000 en notation scientifique : 4,5 × 10ⁿ. Quelle est la valeur de l'exposant n ?",
          reponses: ["7"],
          explication: "Pour passer de 45 000 000 à 4,5, on déplace la virgule de 7 rangs vers la gauche : 45 000 000 = 4,5 × 10⁷.",
        },
        {
          type: "vf",
          question: "0,000 52 = 5,2 × 10⁻⁴",
          reponse: true,
          explication: "Vrai : 5,2 × 10⁻⁴ = 5,2 × 0,0001 = 0,000 52 (la virgule se déplace de 4 rangs vers la gauche).",
        },
        {
          type: "qcm",
          question: "Un nanomètre vaut :",
          choix: ["10⁻⁶ m", "10⁹ m", "10⁻⁹ m", "10⁻³ m"],
          reponse: 2,
          explication: "Le préfixe nano correspond à 10⁻⁹ : 1 nm = 10⁻⁹ m, soit un milliardième de mètre. 10⁻⁶ correspond à micro et 10⁻³ à milli.",
        },
        {
          type: "saisie",
          question: "Calcule √81 + √16.",
          reponses: ["13"],
          explication: "√81 = 9 car 9² = 81, et √16 = 4 car 4² = 16. Donc √81 + √16 = 9 + 4 = 13.",
        },
        {
          type: "vf",
          question: "√(9 + 16) = √9 + √16",
          reponse: false,
          explication: "Faux : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. La racine carrée d'une somme n'est pas la somme des racines carrées.",
        },
        {
          type: "redaction",
          question: "On donne (valeurs arrondies) : distance Terre-Soleil ≈ 1,5 × 10⁸ km ; vitesse de la lumière ≈ 3 × 10⁵ km/s.\n1) Calcule le temps mis par la lumière du Soleil pour atteindre la Terre, en secondes, puis en minutes et secondes.\n2) Un globule rouge mesure environ 0,000 007 5 m de diamètre. Écris cette longueur en notation scientifique, puis en micromètres.",
          corrige: `1) Temps = distance ÷ vitesse = (1,5 × 10⁸) ÷ (3 × 10⁵)
= (1,5 ÷ 3) × 10⁸⁻⁵
= 0,5 × 10³
= **500 s**.
500 s = 8 × 60 s + 20 s, soit **8 min 20 s**.

2) 0,000 007 5 m = **7,5 × 10⁻⁶ m** (la virgule se déplace de 6 rangs vers la droite pour obtenir 7,5).
Comme 1 µm = 10⁻⁶ m, cela fait **7,5 µm**.`,
        },
        {
          type: "qcm",
          question: "Quelle est la notation scientifique de 0,000 34 ?",
          choix: ["34 × 10⁻⁵", "3,4 × 10⁴", "3,4 × 10⁻⁴", "0,34 × 10⁻³"],
          reponse: 2,
          explication: "On déplace la virgule de 4 rangs vers la droite pour obtenir 3,4 (compris entre 1 et 10) : 0,000 34 = 3,4 × 10⁻⁴. Les écritures 34 × 10⁻⁵ et 0,34 × 10⁻³ ont la bonne valeur, mais 34 et 0,34 ne sont pas compris entre 1 et 10. Enfin, 3,4 × 10⁴ vaut 34 000.",
        },
        {
          type: "saisie",
          question: "Écris 2,6 × 10⁵ en écriture décimale.",
          reponses: ["260000", "260 000"],
          explication: "Multiplier par 10⁵ déplace la virgule de 5 rangs vers la droite : 2,6 × 10⁵ = **260 000**.",
        },
        {
          type: "saisie",
          question: "Écris 3 450 000 en notation scientifique (tu peux écrire 10^6 pour 10⁶).",
          reponses: ["3,45 × 10⁶", "3,45 × 10^6"],
          explication: "On place la virgule après le premier chiffre non nul : 3,45, compris entre 1 et 10. On l'a déplacée de 6 rangs vers la gauche, donc **3 450 000 = 3,45 × 10⁶**. (34,5 × 10⁵ a la bonne valeur, mais ce n'est pas une notation scientifique.)",
        },
        {
          type: "saisie",
          question: "Écris 0,000 72 en notation scientifique (tu peux écrire 10^-4 pour 10⁻⁴).",
          reponses: ["7,2 × 10⁻⁴", "7,2 × 10^-4"],
          explication: "On veut 7,2 (compris entre 1 et 10) : la virgule se déplace de 4 rangs vers la droite, l'exposant est donc négatif. **0,000 72 = 7,2 × 10⁻⁴**. Vérification : 7,2 × 0,0001 = 0,000 72.",
        },
      ],
    },

    // ───────────────────────── 3. Calcul littéral
    {
      id: "calcul-litteral",
      titre: "Calcul littéral : développer, factoriser, démontrer",
      theme: "Nombres et calculs",
      cours: `
## Vocabulaire
- **Développer**, c'est transformer un produit en somme : 3(x + 2) → 3x + 6.
- **Factoriser**, c'est transformer une somme en produit : 3x + 6 → 3(x + 2).
- **Réduire**, c'est regrouper les termes de même nature : 2x² + 5x − x² + 3x = x² + 8x.

## Simple et double distributivité
- **k(a + b) = ka + kb** et k(a − b) = ka − kb.
- **(a + b)(c + d) = ac + ad + bc + bd** : chaque terme du premier facteur multiplie chaque terme du second.

>! **Exemple** : (2x + 3)(x − 4)
>! = 2x × x + 2x × (−4) + 3 × x + 3 × (−4)
>! = 2x² − 8x + 3x − 12
>! = **2x² − 5x − 12**

>! **Attention au signe −** devant une parenthèse : −(x − 5) = −x + 5. Et 7 − 2(x + 1) = 7 − 2x − 2 = 5 − 2x.

## Trois égalités utiles
Elles se démontrent avec la double distributivité :
- **(a + b)² = a² + 2ab + b²**
- **(a − b)² = a² − 2ab + b²**
- **(a + b)(a − b) = a² − b²**

>! **Exemples** : (x + 5)² = x² + 10x + 25 ; (2x − 1)² = 4x² − 4x + 1.
>! **Erreur classique** : (x + 3)² n'est **pas** x² + 9 ; c'est x² + 6x + 9.

## Factoriser
**1. Avec un facteur commun** : ka + kb = k(a + b).

>! 5x² + 15x = 5x × x + 5x × 3 = **5x(x + 3)**.
>! (x + 1)(2x − 3) + (x + 1)(x + 4) = (x + 1)[(2x − 3) + (x + 4)] = **(x + 1)(3x + 1)**.

**2. Avec a² − b² = (a − b)(a + b)** :

>! x² − 49 = x² − 7² = **(x − 7)(x + 7)**.
>! 9x² − 25 = (3x)² − 5² = **(3x − 5)(3x + 5)**.

Pour vérifier une factorisation, redéveloppe : tu dois retrouver l'expression de départ.

## Démontrer avec le calcul littéral
Pour prouver qu'une propriété est vraie **pour tous les nombres**, des exemples ne suffisent pas : on utilise une lettre.

>! **Exemple** : « la différence des carrés de deux entiers consécutifs est toujours impaire ».
>! Avec n et n + 1 : (n + 1)² − n² = n² + 2n + 1 − n² = **2n + 1**, qui est impair.

Pour prouver qu'une égalité est **fausse**, un seul **contre-exemple** suffit : pour x = 1, (x + 3)² = 16 mais x² + 9 = 10.

> **À retenir**
> - (a + b)(c + d) = ac + ad + bc + bd.
> - (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; a² − b² = (a − b)(a + b).
> - Un exemple ne prouve pas une propriété générale ; un contre-exemple suffit à la réfuter.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelle est la forme développée de 3(2x − 5) ?",
          choix: ["6x − 5", "6x − 15", "5x − 15", "6x + 15"],
          reponse: 1,
          explication: "On distribue le 3 aux deux termes : 3 × 2x − 3 × 5 = 6x − 15. Erreur fréquente : oublier de multiplier le deuxième terme (6x − 5).",
        },
        {
          type: "saisie",
          question: "Développe et réduis (x + 2)(x + 5).",
          reponses: ["x²+7x+10", "x^2+7x+10", "10+7x+x²", "x²+10+7x", "7x+x²+10", "7x+10+x²", "10+x²+7x"],
          explication: "(x + 2)(x + 5) = x² + 5x + 2x + 10 = **x² + 7x + 10**.",
        },
        {
          type: "vf",
          question: "Pour tout nombre x, (x + 3)² = x² + 9.",
          reponse: false,
          explication: "Faux : (x + 3)² = x² + 2 × x × 3 + 3² = x² + 6x + 9. Contre-exemple : pour x = 1, (1 + 3)² = 16 alors que 1² + 9 = 10.",
        },
        {
          type: "saisie",
          question: "Développe et réduis (2x − 1)².",
          reponses: ["4x²-4x+1", "4x^2-4x+1", "1-4x+4x²", "4x²+1-4x", "-4x+4x²+1", "1+4x²-4x"],
          explication: "(a − b)² = a² − 2ab + b² avec a = 2x et b = 1 : (2x)² − 2 × 2x × 1 + 1² = **4x² − 4x + 1**.",
        },
        {
          type: "qcm",
          question: "Quelle est la factorisation de x² − 36 ?",
          choix: ["(x − 6)²", "(x − 18)(x + 18)", "(x − 6)(x + 6)", "x(x − 36)"],
          reponse: 2,
          explication: "x² − 36 = x² − 6², de la forme a² − b² = (a − b)(a + b) : on obtient (x − 6)(x + 6). Vérification : (x − 6)(x + 6) = x² + 6x − 6x − 36 = x² − 36.",
        },
        {
          type: "saisie",
          question: "Factorise 5x² + 15x.",
          reponses: ["5x(x+3)", "5x(3+x)", "(x+3)5x", "(x+3)×5x", "5x×(x+3)", "5x*(x+3)", "(3+x)5x", "5x×(3+x)"],
          explication: "5x² = 5x × x et 15x = 5x × 3 : le facteur commun est 5x. Donc 5x² + 15x = **5x(x + 3)**.",
        },
        {
          type: "qcm",
          question: "Quelle est une factorisation de (x + 2)(3x − 1) − (x + 2)(x + 4) ?",
          choix: ["(x + 2)(4x + 3)", "(x + 2)(2x + 3)", "(x + 2)²(2x − 5)", "(x + 2)(2x − 5)"],
          reponse: 3,
          explication: "Facteur commun (x + 2) : (x + 2)[(3x − 1) − (x + 4)] = (x + 2)(3x − 1 − x − 4) = (x + 2)(2x − 5). Le piège : le signe − devant la seconde parenthèse change le signe de +4.",
        },
        {
          type: "qcm",
          question: "Quelle est la valeur de 2x² − 3x + 1 pour x = −2 ?",
          choix: ["3", "−1", "11", "15"],
          reponse: 3,
          explication: "2 × (−2)² − 3 × (−2) + 1 = 2 × 4 + 6 + 1 = 15. Attention : (−2)² = 4 (positif) et −3 × (−2) = +6.",
        },
        {
          type: "vf",
          question: "Pour tout nombre n, (n + 1)² − n² = 2n + 1.",
          reponse: true,
          explication: "Vrai : (n + 1)² − n² = n² + 2n + 1 − n² = 2n + 1. C'est une démonstration valable pour tous les nombres.",
        },
        {
          type: "redaction",
          question: "Voici un programme de calcul :\n- choisir un nombre ;\n- lui ajouter 4 ;\n- multiplier le résultat par le nombre de départ ;\n- ajouter 4 au résultat.\n1) Montre que si on choisit 3, on obtient 25.\n2) Quel résultat obtient-on en choisissant −5 ?\n3) Léo remarque que les résultats obtenus sont des carrés. Démontre que c'est toujours le cas.",
          corrige: `1) 3 + 4 = 7 ; 7 × 3 = 21 ; 21 + 4 = **25**.

2) −5 + 4 = −1 ; (−1) × (−5) = 5 ; 5 + 4 = **9**.

3) On note x le nombre de départ. Le programme donne :
(x + 4) × x + 4 = x² + 4x + 4.
Or (x + 2)² = x² + 2 × x × 2 + 2² = x² + 4x + 4.
Donc le résultat est toujours **(x + 2)²**, le carré du nombre de départ augmenté de 2.
Vérification : pour 3, (3 + 2)² = 25 ; pour −5, (−5 + 2)² = (−3)² = 9.`,
        },
      ],
    },

    // ───────────────────────── 4. Équations et inéquations
    {
      id: "equations-inequations",
      titre: "Équations, inéquations et mise en équation",
      theme: "Nombres et calculs",
      cours: `
## Résoudre une équation du premier degré
**Résoudre** une équation, c'est trouver toutes les valeurs de l'inconnue qui rendent l'égalité vraie : ce sont les **solutions**.

On peut, sans changer les solutions :
- **ajouter ou soustraire** le même nombre aux deux membres ;
- **multiplier ou diviser** les deux membres par le même nombre **non nul**.

>! **Exemple** : 5x − 7 = 2x + 8
>! 5x − 2x = 8 + 7 (on regroupe les x à gauche, les nombres à droite)
>! 3x = 15
>! x = 15 ÷ 3 = **5**
>! **Vérification** : 5 × 5 − 7 = 18 et 2 × 5 + 8 = 18. ✔

## Équation produit nul
**Un produit est nul si et seulement si l'un au moins de ses facteurs est nul.**

>! **Exemple** : (2x − 6)(x + 4) = 0
>! soit 2x − 6 = 0, donc x = 3 ; soit x + 4 = 0, donc x = −4.
>! L'équation a **deux solutions : 3 et −4**.

Astuce : pour résoudre x² − 4x = 0, on **factorise** d'abord : x(x − 4) = 0, donc x = 0 ou x = 4.

## Équations x² = a
- Si a > 0 : **deux solutions**, √a et −√a. Exemple : x² = 49 donne x = 7 ou x = −7.
- Si a = 0 : une seule solution, 0.
- Si a < 0 : **aucune solution** (un carré n'est jamais négatif).

## Inéquations
Une **inéquation** utilise <, >, ≤ ou ≥. Ses solutions forment en général une infinité de nombres.

Les inéquations sont citées par le programme du cycle 4, mais elles ne figurent pas parmi les attendus de fin de 3e : elles tiennent peu de place au brevet, et tu les retravailleras en seconde. Au brevet, une question « à partir de combien… » se traite aussi en comparant des valeurs ou en lisant un graphique.

Mêmes règles que pour les équations, avec une exception capitale :
**quand on multiplie ou divise par un nombre négatif, on change le sens de l'inégalité.**

>! **Exemple 1** : 3x − 5 > 7 → 3x > 12 → **x > 4**.
>! **Exemple 2** : −2x + 1 ≤ 7 → −2x ≤ 6 → on divise par −2 et on retourne le signe : **x ≥ −3**.

Sur une droite graduée, on colorie (ou on hachure) la partie qui contient les solutions :
- x ≥ −3 : demi-droite qui part de −3 vers la droite, avec un crochet **tourné vers les solutions** en −3 (−3 est **compris**) ;
- x > 4 : demi-droite qui part de 4 vers la droite, avec un crochet **tourné vers l'extérieur** en 4 (4 est **exclu**).

~~~
x ≥ −3 :   −3 [■■■■■■■■■■■→
x > 4  :    4 ]■■■■■■■■■■■→
~~~

## Mettre un problème en équation
1. **Choisir l'inconnue** (« Soit x le nombre de… »).
2. **Traduire** l'énoncé par une équation.
3. **Résoudre**.
4. **Vérifier** et **conclure** par une phrase.

>! **Exemple** : le périmètre d'un rectangle vaut 54 cm et sa longueur dépasse le double de sa largeur de 3 cm. Soit x la largeur : la longueur vaut 2x + 3.
>! 2(x + 2x + 3) = 54 → 6x + 6 = 54 → 6x = 48 → x = 8.
>! La largeur vaut **8 cm** et la longueur **19 cm** (vérification : 2 × (8 + 19) = 54).

> **À retenir**
> - Équation : on fait la même opération sur les deux membres, puis on vérifie.
> - A × B = 0 ⟺ A = 0 ou B = 0 (le signe ⟺ se lit « équivaut à »).
> - x² = a (a > 0) : deux solutions √a et −√a.
> - Inéquation : multiplier ou diviser par un négatif retourne le signe.
`,
      exercices: [
        {
          type: "saisie",
          question: "Résous l'équation 4x + 7 = 19.",
          reponses: ["3"],
          explication: "4x = 19 − 7 = 12, donc x = 12 ÷ 4 = **3**. Vérification : 4 × 3 + 7 = 19.",
        },
        {
          type: "saisie",
          question: "Résous l'équation 7x − 4 = 3x + 12.",
          reponses: ["4"],
          explication: "7x − 3x = 12 + 4, donc 4x = 16 et x = **4**. Vérification : 7 × 4 − 4 = 24 et 3 × 4 + 12 = 24.",
        },
        {
          type: "qcm",
          question: "Quelles sont les solutions de l'équation (x − 5)(2x + 8) = 0 ?",
          choix: ["5 et 4", "−5 et 4", "5 et −4", "5 seulement"],
          reponse: 2,
          explication: "Produit nul : x − 5 = 0 donne x = 5 ; 2x + 8 = 0 donne 2x = −8, soit x = −4. Les solutions sont 5 et −4.",
        },
        {
          type: "vf",
          question: "L'équation x² = 25 a une seule solution : 5.",
          reponse: false,
          explication: "Faux : elle a deux solutions, 5 et −5, car 5² = 25 et (−5)² = 25.",
        },
        {
          type: "saisie",
          question: "Résous l'équation 2(x − 3) = 5x + 9.",
          reponses: ["-5"],
          explication: "On développe : 2x − 6 = 5x + 9. Puis 2x − 5x = 9 + 6, soit −3x = 15, donc x = 15 ÷ (−3) = **−5**. Vérification : 2 × (−8) = −16 et 5 × (−5) + 9 = −16.",
        },
        {
          type: "qcm",
          question: "Quelles sont les solutions de l'inéquation 3 − 2x < 9 ?",
          choix: ["x < −3", "x > −3", "x > 3", "x < 6"],
          reponse: 1,
          explication: "3 − 2x < 9 donne −2x < 6. On divise par −2, un nombre négatif : le sens change, x > −3. Vérification avec x = 0 : 3 < 9, vrai.",
        },
        {
          type: "vf",
          question: "−3 est une solution de l'inéquation 2x + 5 ≥ −1.",
          reponse: true,
          explication: "Vrai : pour x = −3, 2 × (−3) + 5 = −1, et −1 ≥ −1 est vrai (le signe ≥ inclut l'égalité).",
        },
        {
          type: "saisie",
          question: "Donne la solution positive de l'équation x² = 64.",
          reponses: ["8"],
          explication: "x² = 64 a deux solutions : 8 et −8. La solution positive est **8** = √64.",
        },
        {
          type: "qcm",
          question: "Le périmètre d'un rectangle est 54 cm. Sa longueur est égale au double de sa largeur augmenté de 3 cm. Quelle est sa largeur ?",
          choix: ["8 cm", "9 cm", "17 cm", "12 cm"],
          reponse: 0,
          explication: "Avec x la largeur : 2(x + 2x + 3) = 54, soit 6x + 6 = 54, donc x = 8. La longueur vaut 19 cm et 2 × (8 + 19) = 54.",
        },
        {
          type: "redaction",
          question: "Une piscine propose deux tarifs :\n- tarif A : 6 € par séance ;\n- tarif B : un abonnement annuel de 30 €, puis 3,50 € par séance.\n1) Calcule le prix payé pour 10 séances avec chaque tarif.\n2) On note x le nombre de séances. Exprime en fonction de x le prix payé avec chaque tarif.\n3) Pour combien de séances les deux tarifs sont-ils égaux ?\n4) À partir de combien de séances le tarif B est-il strictement plus avantageux ?",
          corrige: `1) Tarif A : 10 × 6 = **60 €**. Tarif B : 30 + 10 × 3,50 = 30 + 35 = **65 €**.

2) Tarif A : **6x** ; tarif B : **30 + 3,5x**.

3) On résout 6x = 30 + 3,5x :
6x − 3,5x = 30
2,5x = 30
x = 30 ÷ 2,5 = **12**.
Pour 12 séances, les deux tarifs coûtent 72 € (6 × 12 = 72 et 30 + 3,5 × 12 = 72).

4) On résout 30 + 3,5x < 6x :
30 < 2,5x
x > 12.
Le tarif B est strictement plus avantageux **à partir de 13 séances**.`,
        },
      ],
    },

    // ───────────────────────── 5. Notion de fonction
    {
      id: "notion-fonction",
      titre: "Notion de fonction : image, antécédent, courbe",
      theme: "Organisation et gestion de données, fonctions",
      cours: `
## Qu'est-ce qu'une fonction ?
Une **fonction** f est un procédé qui, à un nombre x, associe **un unique** nombre noté **f(x)**.
On note **f : x ↦ f(x)** (on lit « f qui à x associe f(x) »).

>! **Exemple** : f : x ↦ x² − 3.
>! f(2) = 2² − 3 = 1 ; f(−2) = (−2)² − 3 = 1 ; f(0) = −3.

## Image et antécédent
- f(x) est l'**image** de x par f. Un nombre a **une seule image**.
- Si f(a) = b, on dit que a est **un antécédent** de b. Un nombre peut avoir **zéro, un ou plusieurs antécédents**.

Dans l'exemple : l'image de 2 est 1 ; 1 a deux antécédents, 2 et −2.

>! **Trouver un antécédent par le calcul** : chercher les antécédents de b, c'est **résoudre l'équation f(x) = b**.
>! Antécédents de 6 par f : x² − 3 = 6, donc x² = 9, d'où x = 3 ou x = −3.

## Les trois façons de donner une fonction
**1. Une formule** : f(x) = x² − 3.

**2. Un tableau de valeurs** (souvent construit avec un tableur) :

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| f(x) | 1 | −2 | −3 | −2 | 1 |

Dans un tableur, si x est en A2, on écrit en B2 la formule **=A2^2-3** puis on l'étire vers le bas.

**3. Une courbe** dans un repère : c'est l'ensemble des points de coordonnées **(x ; f(x))**.

## Lire un graphique
- **Image de a** : on part de a sur l'axe des abscisses, on monte (ou descend) jusqu'à la courbe, on lit l'**ordonnée**.
- **Antécédents de b** : on part de b sur l'axe des ordonnées, on trace une horizontale, et on lit les **abscisses** de tous les points d'intersection avec la courbe.

>! **Un point est sur la courbe si et seulement si ses coordonnées vérifient y = f(x).**
>! Le point A(3 ; 6) est-il sur la courbe de f(x) = x² − 3 ? f(3) = 9 − 3 = 6 : **oui**.
>! Le point B(1 ; 0) ? f(1) = −2 ≠ 0 : **non**.

## Erreurs fréquentes
- Confondre image (sur l'axe des **ordonnées**) et antécédent (sur l'axe des **abscisses**).
- Écrire f(−2) = −2² − 3 : il faut des parenthèses, (−2)² = 4.
- Oublier un antécédent : lis **tous** les points d'intersection.

> **À retenir**
> - f(a) = b : b est l'image de a ; a est un antécédent de b.
> - Une image est unique ; les antécédents peuvent être plusieurs (ou aucun).
> - Antécédents de b : on résout f(x) = b.
> - Le point (x ; y) est sur la courbe ⟺ y = f(x).
`,
      exercices: [
        {
          type: "saisie",
          question: "Soit f(x) = 3x² − 5. Calcule l'image de 2 par f.",
          reponses: ["7", "f(2)=7"],
          explication: "f(2) = 3 × 2² − 5 = 3 × 4 − 5 = 12 − 5 = **7**. On calcule d'abord le carré, puis la multiplication.",
        },
        {
          type: "saisie",
          question: "Soit f(x) = 3x² − 5. Calcule f(−1).",
          reponses: ["-2", "f(-1)=-2"],
          explication: "f(−1) = 3 × (−1)² − 5 = 3 × 1 − 5 = **−2**. Attention : (−1)² = 1.",
        },
        {
          type: "qcm",
          question: "Le point de coordonnées (4 ; −1) appartient à la courbe représentative d'une fonction g. Que peut-on en déduire ?",
          choix: ["g(−1) = 4", "4 est l'image de −1 par g", "g(4) = −1", "−1 n'a pas d'antécédent par g"],
          reponse: 2,
          explication: "Sur une courbe, un point a pour coordonnées (x ; g(x)). Le point (4 ; −1) signifie donc g(4) = −1 : l'image de 4 est −1, et 4 est un antécédent de −1.",
        },
        {
          type: "vf",
          question: "Par une fonction, un nombre peut avoir plusieurs antécédents.",
          reponse: true,
          explication: "Vrai : avec f(x) = x², le nombre 9 a deux antécédents, 3 et −3. En revanche, un nombre a toujours une seule image.",
        },
        {
          type: "vf",
          question: "Par une fonction, un nombre peut avoir deux images différentes.",
          reponse: false,
          explication: "Faux : par définition, une fonction associe à chaque nombre **une seule** image.",
        },
        {
          type: "qcm",
          question: "Voici un tableau de valeurs d'une fonction h.\n\n| x | −2 | −1 | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|---|---|\n| h(x) | 5 | 0 | −3 | −4 | −3 | 0 |\n\nD'après ce tableau, quels sont les antécédents de 0 par h ?",
          choix: ["−3", "0 seulement", "−4", "−1 et 3"],
          reponse: 3,
          explication: "On cherche 0 dans la ligne des **images** h(x) : on le trouve sous x = −1 et sous x = 3. Les antécédents de 0 sont −1 et 3. (−3 est l'image de 0, ce n'est pas la question.)",
        },
        {
          type: "saisie",
          question: "Avec le même tableau (x : −2, −1, 0, 1, 2, 3 ; h(x) : 5, 0, −3, −4, −3, 0), quelle est l'image de 1 par h ?",
          reponses: ["-4", "h(1)=-4"],
          explication: "On lit dans la colonne x = 1 : h(1) = **−4**.",
        },
        {
          type: "qcm",
          question: "Dans un tableur, la cellule A2 contient une valeur de x. Quelle formule faut-il écrire en B2 pour calculer 2x² − 1 ?",
          choix: ["=2*A2^2-1", "2*A2^2-1", "=2*A2-1", "=(2*A2)^2-1"],
          reponse: 0,
          explication: "Une formule de tableur commence par le signe égal, le carré s'écrit ^2 et la multiplication avec une étoile. Sans le signe égal, le tableur affiche le texte au lieu de calculer. La formule avec des parenthèses autour de 2 fois A2 calculerait (2x)² = 4x², et celle sans ^2 calculerait 2x − 1.",
        },
        {
          type: "saisie",
          question: "Soit f(x) = (x + 1)(x − 4). Calcule f(−3).",
          reponses: ["14"],
          explication: "f(−3) = (−3 + 1)(−3 − 4) = (−2) × (−7) = **14**.",
        },
        {
          type: "redaction",
          question: "On considère la fonction f définie par f(x) = x² − 4x + 1.\n1) Calcule f(0) et f(5).\n2) Le nombre −3 est-il l'image de 2 par f ? Justifie.\n3) Le point A(−1 ; 6) appartient-il à la courbe représentative de f ?\n4) Montre que f(x) = 1 équivaut à x(x − 4) = 0. Déduis-en les antécédents de 1 par f.",
          corrige: `1) f(0) = 0² − 4 × 0 + 1 = **1**.
f(5) = 5² − 4 × 5 + 1 = 25 − 20 + 1 = **6**.

2) f(2) = 2² − 4 × 2 + 1 = 4 − 8 + 1 = −3. **Oui**, −3 est l'image de 2.

3) f(−1) = (−1)² − 4 × (−1) + 1 = 1 + 4 + 1 = 6. L'ordonnée de A est bien l'image de son abscisse : **A appartient à la courbe**.

4) f(x) = 1 ⟺ x² − 4x + 1 = 1 ⟺ x² − 4x = 0 ⟺ x(x − 4) = 0.
C'est une équation produit nul : x = 0 ou x − 4 = 0.
Les antécédents de 1 sont **0 et 4** (vérification : f(0) = 1 et f(4) = 16 − 16 + 1 = 1).`,
        },
      ],
    },

    // ───────────────────────── 6. Fonctions linéaires et affines
    {
      id: "fonctions-lineaires-affines",
      titre: "Fonctions linéaires et fonctions affines",
      theme: "Organisation et gestion de données, fonctions",
      cours: `
## Fonction linéaire
Une **fonction linéaire** est une fonction de la forme **f(x) = ax**, où a est un nombre fixé, appelé **coefficient**.

- Une fonction linéaire traduit une situation de **proportionnalité** : a est le coefficient de proportionnalité.
- Sa représentation graphique est une **droite qui passe par l'origine** du repère.

>! **Exemple** : un fromage coûte 18 € le kilo. Le prix pour x kg est p(x) = 18x : c'est une fonction linéaire de coefficient 18.

**Pourcentages** : augmenter de 20 %, c'est appliquer x ↦ 1,2x ; baisser de 15 %, c'est appliquer x ↦ 0,85x. Ce sont des fonctions linéaires.

## Fonction affine
Une **fonction affine** est de la forme **f(x) = ax + b**, avec a et b fixés.
- a est le **coefficient directeur** ;
- b est l'**ordonnée à l'origine** : la droite coupe l'axe des ordonnées au point (0 ; b), car f(0) = b.

Cas particuliers : si b = 0, f est **linéaire** ; si a = 0, f est **constante** (droite horizontale).

Sa représentation graphique est une **droite**. Pour la tracer, deux points suffisent.

>! **Exemple** : f(x) = −2x + 3.
>! f(0) = 3 et f(2) = −1 : on trace la droite passant par (0 ; 3) et (2 ; −1).
>! **Image de 4** : f(4) = −8 + 3 = −5.
>! **Antécédent de 7** : −2x + 3 = 7 → −2x = 4 → x = −2.

## Lire et utiliser le coefficient directeur
Quand x augmente de 1, f(x) augmente de a (si a > 0) ou diminue de |a|, c'est-à-dire a sans son signe (si a < 0).
- a > 0 : la droite « monte » (fonction croissante) ;
- a < 0 : la droite « descend » (fonction décroissante).

**Les accroissements sont proportionnels** : a = (f(x₂) − f(x₁)) / (x₂ − x₁).

>! **Trouver f à partir de deux valeurs** : f affine, f(1) = 5 et f(3) = 11.
>! a = (11 − 5)/(3 − 1) = 6/2 = 3.
>! Puis f(1) = 3 × 1 + b = 5, donc b = 2. Conclusion : **f(x) = 3x + 2**.

## Erreurs fréquentes
- Croire que toute droite représente une fonction linéaire : seulement si elle passe par l'origine.
- Inverser a et b dans f(x) = 5 − 0,5x : ici a = −0,5 et b = 5.

> **À retenir**
> - Linéaire f(x) = ax : proportionnalité, droite passant par l'origine.
> - Affine f(x) = ax + b : droite qui coupe l'axe des ordonnées en b.
> - a = (f(x₂) − f(x₁)) / (x₂ − x₁).
> - Antécédent de k : on résout ax + b = k.
`,
      exercices: [
        {
          type: "qcm",
          question: "Laquelle de ces fonctions est linéaire ?",
          choix: ["f(x) = 3x + 1", "g(x) = x²", "h(x) = −4x", "k(x) = 5"],
          reponse: 2,
          explication: "Une fonction linéaire est de la forme ax : h(x) = −4x (a = −4). f est affine non linéaire (b = 1), g n'est ni affine ni linéaire, k est constante.",
        },
        {
          type: "saisie",
          question: "Soit f(x) = −2x + 3. Calcule f(5).",
          reponses: ["-7", "f(5)=-7"],
          explication: "f(5) = −2 × 5 + 3 = −10 + 3 = **−7**.",
        },
        {
          type: "saisie",
          question: "Soit f(x) = −2x + 3. Quel est l'antécédent de 11 par f ?",
          reponses: ["-4"],
          explication: "On résout −2x + 3 = 11 : −2x = 8, donc x = 8 ÷ (−2) = **−4**. Vérification : −2 × (−4) + 3 = 11.",
        },
        {
          type: "vf",
          question: "La représentation graphique d'une fonction affine est une droite.",
          reponse: true,
          explication: "Vrai. Si en plus elle passe par l'origine, la fonction est linéaire.",
        },
        {
          type: "qcm",
          question: "g est une fonction linéaire telle que g(4) = 10. Combien vaut g(6) ?",
          choix: ["12", "15", "16", "24"],
          reponse: 1,
          explication: "g(x) = ax avec 4a = 10, donc a = 2,5. Alors g(6) = 2,5 × 6 = 15. (On peut aussi dire : 6 = 1,5 × 4, donc g(6) = 1,5 × 10 = 15.)",
        },
        {
          type: "qcm",
          question: "Quelle est l'ordonnée à l'origine de la fonction f(x) = 5 − 0,5x ?",
          choix: ["−0,5", "0,5", "−5", "5"],
          reponse: 3,
          explication: "f(x) = −0,5x + 5 : l'ordonnée à l'origine est b = 5 (f(0) = 5). −0,5 est le coefficient directeur.",
        },
        {
          type: "saisie",
          question: "f est une fonction affine telle que f(2) = 7 et f(5) = 16. Quel est son coefficient directeur a ?",
          reponses: ["3"],
          explication: "a = (f(5) − f(2)) / (5 − 2) = (16 − 7)/3 = 9/3 = **3**.",
        },
        {
          type: "saisie",
          question: "Même fonction affine (f(2) = 7 et f(5) = 16). Donne l'expression de f(x).",
          reponses: ["3x+1", "1+3x"],
          explication: "a = 3, puis f(2) = 3 × 2 + b = 7, donc b = 1. Ainsi **f(x) = 3x + 1**. Vérification : f(5) = 15 + 1 = 16.",
        },
        {
          type: "vf",
          question: "La droite qui représente la fonction f(x) = 4x passe par le point (2 ; 6).",
          reponse: false,
          explication: "Faux : f(2) = 4 × 2 = 8 ≠ 6. Le point (2 ; 8) est sur la droite, pas (2 ; 6).",
        },
        {
          type: "redaction",
          question: "Deux compagnies de taxi proposent :\n- compagnie A : 4 € de prise en charge, puis 1,50 € par kilomètre ;\n- compagnie B : 2 € par kilomètre, sans prise en charge.\nOn note x la distance parcourue en km, f(x) le prix avec A et g(x) le prix avec B.\n1) Exprime f(x) et g(x). Quelle fonction est linéaire ? Laquelle est affine ?\n2) Calcule le prix d'une course de 6 km avec chaque compagnie.\n3) Pour quelle distance les deux prix sont-ils égaux ? Quel est alors ce prix ?\n4) Sans tracer, explique où se coupent les deux droites représentant f et g.",
          corrige: `1) **f(x) = 1,5x + 4** : fonction affine (non linéaire, car b = 4 ≠ 0).
**g(x) = 2x** : fonction linéaire (prix proportionnel à la distance).

2) f(6) = 1,5 × 6 + 4 = **13 €** ; g(6) = 2 × 6 = **12 €**. Pour 6 km, B est moins chère.

3) On résout f(x) = g(x) :
1,5x + 4 = 2x
4 = 0,5x
x = **8**.
Pour 8 km, les deux courses coûtent 2 × 8 = **16 €**.

4) Les deux droites se coupent au point de coordonnées **(8 ; 16)**. Avant 8 km, la droite de g est en dessous (B moins chère) ; après 8 km, c'est celle de f (A moins chère).`,
        },
      ],
    },

    // ───────────────────────── 7. Proportionnalité et pourcentages
    {
      id: "proportionnalite-pourcentages",
      titre: "Proportionnalité, pourcentages et évolutions",
      theme: "Organisation et gestion de données, fonctions",
      cours: `
## Reconnaître et utiliser la proportionnalité
Deux grandeurs sont **proportionnelles** si on passe de l'une à l'autre en multipliant toujours par le **même nombre** (coefficient de proportionnalité).

**Quatrième proportionnelle** (produit en croix) : si 3 kg coûtent 7,20 €, alors 5 kg coûtent 7,20 × 5 ÷ 3 = **12 €**.

## Ratios
Partager une quantité **selon le ratio 2 : 3**, c'est faire 2 + 3 = 5 parts égales et en donner 2 à l'un, 3 à l'autre.

>! **Exemple** : partager 150 € selon le ratio 2 : 3. Une part vaut 150 ÷ 5 = 30 €. On donne **60 €** et **90 €**.

## Appliquer un pourcentage
Prendre **t %** d'une quantité, c'est la multiplier par **t/100**.
- 25 % de 84 = 0,25 × 84 = 21.
- Pourcentages faciles de tête : 10 % = diviser par 10 ; 50 % = la moitié ; 25 % = le quart.

## Évolutions et coefficient multiplicateur
- **Augmenter de t %**, c'est multiplier par **1 + t/100**. +15 % → × 1,15.
- **Diminuer de t %**, c'est multiplier par **1 − t/100**. −30 % → × 0,7.

>! **Exemple** : un prix de 80 € augmente de 15 % : 80 × 1,15 = **92 €**.

**Retrouver la valeur de départ** : on **divise** par le coefficient.
>! Après une remise de 20 %, un objet coûte 64 €. Prix initial : 64 ÷ 0,8 = **80 €**.

**Calculer un taux d'évolution** : on calcule le coefficient (valeur d'arrivée) ÷ (valeur de départ), puis on le compare à 1.
>! De 2 500 à 2 800 : 2 800 ÷ 2 500 = 1,12, soit une hausse de **12 %**.

## Évolutions successives
On **multiplie** les coefficients, on **n'additionne pas** les pourcentages.

>! Une baisse de 30 % suivie d'une hausse de 30 % : 0,7 × 1,3 = 0,91, soit une **baisse de 9 %** (et non 0 %).

> **À retenir**
> - t % de A = A × t/100.
> - Hausse de t % : × (1 + t/100) ; baisse de t % : × (1 − t/100).
> - Valeur de départ = valeur d'arrivée ÷ coefficient.
> - Évolutions successives : on multiplie les coefficients.
> - Ratio a : b : on partage en a + b parts égales.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule 25 % de 84.",
          reponses: ["21"],
          explication: "25 %, c'est le quart : 84 ÷ 4 = **21**.",
        },
        {
          type: "qcm",
          question: "Par quel nombre faut-il multiplier un prix pour le diminuer de 12 % ?",
          choix: ["1,12", "0,12", "−0,12", "0,88"],
          reponse: 3,
          explication: "Diminuer de 12 %, c'est multiplier par 1 − 12/100 = 0,88. Multiplier par 0,12 donnerait seulement 12 % du prix.",
        },
        {
          type: "saisie",
          question: "Un pull coûte 45 €. Son prix augmente de 20 %. Quel est son nouveau prix, en euros ?",
          reponses: ["54", "54 €"],
          explication: "45 × 1,2 = **54 €** (ou : 20 % de 45 = 9, puis 45 + 9 = 54).",
        },
        {
          type: "vf",
          question: "Augmenter un prix de 10 % puis le baisser de 10 % revient à ne rien changer.",
          reponse: false,
          explication: "Faux : 1,1 × 0,9 = 0,99. Le prix final est égal à 99 % du prix de départ : il a baissé de 1 %.",
        },
        {
          type: "saisie",
          question: "Après une remise de 25 %, Inès a payé un jean 63 €. Quel était son prix initial, en euros ?",
          reponses: ["84", "84 €"],
          explication: "Une remise de 25 % revient à multiplier par 0,75. Le prix initial est donc 63 ÷ 0,75 = **84 €**. (Erreur fréquente : ajouter 25 % de 63, ce qui donne 78,75 €.)",
        },
        {
          type: "qcm",
          question: "La population d'un village passe de 2 500 à 2 800 habitants. Quelle est l'évolution en pourcentage ?",
          choix: ["+12 %", "+3 %", "+10,7 %", "+30 %"],
          reponse: 0,
          explication: "2 800 ÷ 2 500 = 1,12 = 1 + 12/100 : la population a augmenté de 12 %. (Autre méthode : hausse de 300, et 300 ÷ 2 500 = 0,12.)",
        },
        {
          type: "saisie",
          question: "On partage 140 € entre deux personnes selon le ratio 3 : 4. Quelle est la plus petite part, en euros ?",
          reponses: ["60", "60 €"],
          explication: "3 + 4 = 7 parts ; une part vaut 140 ÷ 7 = 20 €. La plus petite part vaut 3 × 20 = **60 €** (l'autre 80 €).",
        },
        {
          type: "qcm",
          question: "3 kg de pommes coûtent 7,20 €. Combien coûtent 5 kg de ces pommes ?",
          choix: ["12 €", "9,20 €", "10,80 €", "14,40 €"],
          reponse: 0,
          explication: "1 kg coûte 7,20 ÷ 3 = 2,40 €, donc 5 kg coûtent 5 × 2,40 = 12 €. (9,20 € vient d'une erreur : ajouter 2 € pour 2 kg de plus n'est pas proportionnel.)",
        },
        {
          type: "vf",
          question: "Deux hausses successives de 50 % équivalent à une hausse de 125 %.",
          reponse: true,
          explication: "Vrai : 1,5 × 1,5 = 2,25 = 1 + 125/100. Ce n'est pas une hausse de 100 % !",
        },
        {
          type: "redaction",
          question: "Un smartphone coûte 350 €. Le magasin A le solde à −20 %, puis applique une remise supplémentaire de 15 % sur le prix soldé. Le magasin B propose directement −30 % sur le prix de 350 €.\n1) Calcule le prix final dans le magasin A.\n2) Quel est le pourcentage de baisse global dans le magasin A ?\n3) Quel magasin est le plus avantageux ? Justifie.",
          corrige: `1) Coefficient global : 0,8 × 0,85 = 0,68.
Prix final dans A : 350 × 0,68 = **238 €**.
(Étape par étape : 350 × 0,8 = 280 €, puis 280 × 0,85 = 238 €.)

2) Le coefficient 0,68 = 1 − 32/100 : c'est une **baisse de 32 %** (et non de 20 + 15 = 35 %).

3) Dans B : 350 × 0,7 = 245 €.
238 € < 245 € : **le magasin A est le plus avantageux**, car une baisse de 32 % est plus forte qu'une baisse de 30 %.`,
        },
      ],
    },

    // ───────────────────────── 8. Grandeurs composées
    {
      id: "grandeurs-composees",
      titre: "Grandeurs composées : vitesse, débit, énergie",
      theme: "Grandeurs et mesures",
      cours: `
## Grandeurs produits et grandeurs quotients
Une **grandeur composée** s'obtient en multipliant ou en divisant deux grandeurs :
- **grandeur quotient** : vitesse (km/h), débit (L/min), masse volumique (kg/L), prix au kilo (€/kg), densité de population (hab/km²) ;
- **grandeur produit** : énergie (kWh = kW × h), aire (m² = m × m).

## Vitesse moyenne
**v = d / t**, donc **d = v × t** et **t = d / v**.

>! **Exemple** : 150 km parcourus en 1 h 40 min.
>! 1 h 40 min = 1 h + 40/60 h = 5/3 h.
>! v = 150 ÷ 5/3 = 150 × 3/5 = **90 km/h**.

## Durées : heures et minutes
Une durée en heures **décimales** n'est pas une durée en « heures, minutes » :
| Écriture décimale | Heures et minutes |
|---|---|
| 0,25 h | 15 min |
| 0,5 h | 30 min |
| 0,75 h | 45 min |
| 1,2 h | 1 h 12 min |
| 2,75 h | 2 h 45 min |

>! **Piège** : 1 h 20 min ne vaut pas 1,2 h ! 20 min = 20/60 h = 1/3 h ≈ 0,33 h.

## Changer d'unité
**km/h → m/s** : 1 km/h = 1 000 m / 3 600 s, donc on **divise par 3,6**.
>! 90 km/h = 90 ÷ 3,6 = **25 m/s**. Et 20 m/s = 20 × 3,6 = 72 km/h.

**Volumes et contenances** : 1 dm³ = 1 L ; 1 m³ = 1 000 L ; 1 cm³ = 1 mL.

## Autres grandeurs utiles
- **Débit** : un robinet de 12 L/min remplit 450 L en 450 ÷ 12 = 37,5 min, soit 37 min 30 s.
- **Énergie** : E = P × t. Un radiateur de 1 500 W = 1,5 kW qui fonctionne 4 h consomme 1,5 × 4 = **6 kWh**.
- **Masse volumique** : ρ = m / V (ρ est la lettre grecque « rhô »). 2 L d'huile pesant 1,84 kg : ρ = 1,84 ÷ 2 = 0,92 kg/L.

## Vitesse moyenne sur un trajet en plusieurs étapes
La vitesse moyenne totale = **distance totale ÷ durée totale**. Ce n'est **pas** la moyenne des vitesses.

> **À retenir**
> - v = d / t ; d = v × t ; t = d / v.
> - Convertis les minutes en fractions d'heure : 40 min = 40/60 h.
> - km/h ÷ 3,6 = m/s.
> - 1 m³ = 1 000 L ; 1 dm³ = 1 L.
> - Énergie (kWh) = puissance (kW) × durée (h).
`,
      exercices: [
        {
          type: "saisie",
          question: "Combien de minutes y a-t-il dans 2,75 h ?",
          reponses: ["165", "165 min"],
          explication: "2,75 h = 2 h + 0,75 h = 120 min + 45 min = **165 min** (ou 2,75 × 60 = 165).",
        },
        {
          type: "saisie",
          question: "Une voiture parcourt 210 km en 2 h 30 min. Quelle est sa vitesse moyenne, en km/h ?",
          reponses: ["84", "84 km/h"],
          explication: "2 h 30 min = 2,5 h. v = 210 ÷ 2,5 = **84 km/h**.",
        },
        {
          type: "qcm",
          question: "À combien de m/s correspond une vitesse de 72 km/h ?",
          choix: ["20 m/s", "259,2 m/s", "72 000 m/s", "12 m/s"],
          reponse: 0,
          explication: "72 km/h = 72 000 m en 3 600 s, soit 72 000 ÷ 3 600 = 20 m/s (ou 72 ÷ 3,6 = 20). 259,2 vient d'une multiplication par 3,6 au lieu d'une division.",
        },
        {
          type: "vf",
          question: "1 m³ = 100 L",
          reponse: false,
          explication: "Faux : 1 m³ = 1 000 dm³ = **1 000 L**.",
        },
        {
          type: "saisie",
          question: "Un robinet a un débit de 12 L/min. Combien de minutes faut-il pour remplir une cuve de 450 L ?",
          reponses: ["37,5", "37,5 min", "37 min 30 s", "37 min 30", "37 minutes 30 secondes"],
          explication: "t = 450 ÷ 12 = **37,5 min**, soit 37 min 30 s.",
        },
        {
          type: "qcm",
          question: "Un cycliste roule à 15 km/h pendant 40 min. Quelle distance parcourt-il ?",
          choix: ["6 km", "22,5 km", "10 km", "600 km"],
          reponse: 2,
          explication: "40 min = 40/60 h = 2/3 h. d = 15 × 2/3 = 10 km. (600 vient de 15 × 40 sans convertir les minutes ; 6 km de 15 × 0,4, en croyant que 40 min = 0,4 h.)",
        },
        {
          type: "saisie",
          question: "Un radiateur de 1 500 W fonctionne pendant 4 h. Quelle énergie consomme-t-il, en kWh ?",
          reponses: ["6", "6 kWh"],
          explication: "1 500 W = 1,5 kW. E = P × t = 1,5 × 4 = **6 kWh**.",
        },
        {
          type: "vf",
          question: "1 h 20 min = 1,2 h",
          reponse: false,
          explication: "Faux : 20 min = 20/60 h = 1/3 h ≈ 0,33 h. Donc 1 h 20 min ≈ 1,33 h. En revanche, 1,2 h = 1 h 12 min.",
        },
        {
          type: "qcm",
          question: "2 L d'huile ont une masse de 1,84 kg. Quelle est la masse volumique de cette huile ?",
          choix: ["0,92 kg/L", "3,68 kg/L", "1,09 kg/L", "0,46 kg/L"],
          reponse: 0,
          explication: "ρ = m / V = 1,84 ÷ 2 = 0,92 kg/L. 3,68 vient d'une multiplication au lieu d'une division.",
        },
        {
          type: "redaction",
          question: "Sam part en voiture à 8 h 45. Il parcourt d'abord 120 km sur autoroute à la vitesse moyenne de 80 km/h, puis 45 km sur route en 50 min (sans pause).\n1) Combien de temps dure la première étape ? Donne la réponse en heures et minutes.\n2) Quelle est sa vitesse moyenne sur la route (deuxième étape) ?\n3) À quelle heure arrive-t-il ?\n4) Calcule sa vitesse moyenne sur l'ensemble du trajet, arrondie au dixième. Est-ce la moyenne des deux vitesses ?",
          corrige: `1) t = d / v = 120 ÷ 80 = 1,5 h = **1 h 30 min**.

2) 50 min = 50/60 h = 5/6 h. v = 45 ÷ 5/6 = 45 × 6/5 = **54 km/h**.

3) Durée totale : 1 h 30 min + 50 min = 2 h 20 min. 8 h 45 + 2 h 20 = **11 h 05**.

4) Distance totale : 120 + 45 = 165 km. Durée totale : 2 h 20 min = 2 + 1/3 = 7/3 h.
v = 165 ÷ 7/3 = 165 × 3/7 ≈ **70,7 km/h**.
Ce n'est **pas** la moyenne des deux vitesses ((80 + 54) ÷ 2 = 67 km/h), car Sam ne roule pas aussi longtemps à chaque vitesse.`,
        },
      ],
    },

    // ───────────────────────── 9. Statistiques
    {
      id: "statistiques",
      titre: "Statistiques : moyenne, médiane, étendue, histogrammes",
      theme: "Organisation et gestion de données, fonctions",
      cours: `
## Vocabulaire
- La **population** est l'ensemble étudié (les élèves d'une classe) ; le **caractère** est ce qu'on observe (la note, le temps de trajet).
- L'**effectif** d'une valeur est le nombre de fois où elle apparaît ; l'**effectif total** est le nombre de données.
- La **fréquence** d'une valeur = effectif de la valeur ÷ effectif total. Elle s'écrit en fraction, en décimal ou en pourcentage : 6 sur 24 = 6/24 = 0,25 = **25 %**.

## La moyenne
**Moyenne = somme de toutes les valeurs ÷ effectif total.**

**Moyenne pondérée** (avec un tableau d'effectifs) :

| Note | 10 | 12 | 15 |
|---|---|---|---|
| Effectif | 3 | 5 | 2 |

>! Moyenne = (10 × 3 + 12 × 5 + 15 × 2) ÷ (3 + 5 + 2) = (30 + 60 + 30) ÷ 10 = **12**.

## La médiane
La **médiane** partage la série **rangée dans l'ordre croissant** en deux groupes de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié supérieures ou égales.

**Méthode** : range les valeurs dans l'ordre croissant, puis :
- effectif **impair** : la médiane est la valeur **du milieu** ;
- effectif **pair** : la médiane est la **moyenne des deux valeurs du milieu**.

>! **Exemple 1** (9 valeurs) : 8 ; 9 ; 10 ; 11 ; **12** ; 12 ; 14 ; 15 ; 16 → médiane = 12 (5e valeur).
>! **Exemple 2** (6 valeurs) : 2 ; 4 ; **6 ; 7** ; 9 ; 11 → médiane = (6 + 7) ÷ 2 = 6,5.

Avec un tableau d'effectifs, utilise les **effectifs cumulés** pour repérer la valeur du milieu.

## L'étendue
**Étendue = plus grande valeur − plus petite valeur.** Elle mesure la **dispersion** de la série. Dans l'exemple 1, l'étendue vaut 16 − 8 = 8.

## Regrouper en classes : l'histogramme
Quand les valeurs sont nombreuses et variées, on les regroupe en **classes**. La classe [10 ; 20[ contient les valeurs **supérieures ou égales à 10 et strictement inférieures à 20** (10 compris, 20 exclu).

| Temps de lecture (h) | [0 ; 2[ | [2 ; 4[ | [4 ; 6[ | [6 ; 8[ |
|---|---|---|---|---|
| Effectif | 6 | 14 | 12 | 8 |

Pour représenter une série regroupée en classes **de même amplitude** (ici 2 h), on trace un **histogramme** : on place les classes côte à côte sur l'axe horizontal, et on dessine pour chaque classe un rectangle dont la **hauteur est proportionnelle à l'effectif**. Les rectangles se touchent (contrairement aux bâtons d'un diagramme en bâtons).

>! **Lire un histogramme** : 12 + 8 = 20 élèves lisent au moins 4 h ; la fréquence de la classe [2 ; 4[ est 14 ÷ 40 = 0,35 = 35 %.
>! Avec des classes, on ne connaît pas les valeurs exactes : on sait seulement que l'étendue est **au plus** 8 − 0 = 8 h.

## Diagramme circulaire
Dans un diagramme circulaire, l'angle de chaque secteur est **proportionnel à l'effectif** : angle = fréquence × 360°.

>! La classe [4 ; 6[ représente 12 élèves sur 40 : angle = 12/40 × 360° = **108°**.

## Moyenne ou médiane ?
La moyenne est sensible aux **valeurs extrêmes**, la médiane beaucoup moins.

>! Série 10 ; 11 ; 12 ; 13 ; 14 : moyenne 12, médiane 12.
>! Si on remplace 14 par 54 : la moyenne passe à 20, la médiane reste 12.

## Erreurs fréquentes
- Chercher la médiane sans avoir **rangé** les valeurs.
- Oublier de pondérer par les effectifs dans le calcul de la moyenne.
- Croire que la moyenne est forcément l'une des valeurs de la série.

> **À retenir**
> - Moyenne = somme des valeurs ÷ effectif total (pondérée par les effectifs).
> - Médiane : valeurs rangées, valeur du milieu (ou moyenne des deux du milieu).
> - Étendue = max − min.
> - Fréquence = effectif ÷ effectif total.
> - Histogramme (classes de même amplitude) : hauteur des rectangles proportionnelle à l'effectif.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule la moyenne de la série : 12 ; 15 ; 9 ; 14.",
          reponses: ["12,5"],
          explication: "Somme : 12 + 15 + 9 + 14 = 50. Moyenne : 50 ÷ 4 = **12,5**.",
        },
        {
          type: "saisie",
          question: "Quelle est la médiane de la série : 3 ; 8 ; 5 ; 12 ; 7 ?",
          reponses: ["7"],
          explication: "On range : 3 ; 5 ; **7** ; 8 ; 12. Il y a 5 valeurs : la médiane est la 3e, soit **7**. (Sans ranger, on aurait pris 5 par erreur.)",
        },
        {
          type: "qcm",
          question: "Quelle est la médiane de la série : 4 ; 9 ; 2 ; 11 ; 6 ; 7 ?",
          choix: ["6", "7", "6,5", "6,5 et 7"],
          reponse: 2,
          explication: "Rangée : 2 ; 4 ; 6 ; 7 ; 9 ; 11. Effectif pair (6) : la médiane est la moyenne des 3e et 4e valeurs, (6 + 7) ÷ 2 = 6,5. Une médiane est un seul nombre.",
        },
        {
          type: "saisie",
          question: "Quelle est l'étendue de la série : 14 ; 3 ; 9 ; 21 ; 7 ?",
          reponses: ["18"],
          explication: "Étendue = plus grande valeur − plus petite valeur = 21 − 3 = **18**.",
        },
        {
          type: "vf",
          question: "La moyenne d'une série est toujours l'une des valeurs de la série.",
          reponse: false,
          explication: "Faux : la moyenne de 12 ; 15 ; 9 ; 14 vaut 12,5, qui n'est aucune des valeurs.",
        },
        {
          type: "qcm",
          question: "Dans une classe, 3 élèves ont eu 10, 5 élèves ont eu 12 et 2 élèves ont eu 15. Quelle est la moyenne de ces notes ?",
          choix: ["12", "12,3", "37", "13"],
          reponse: 0,
          explication: "Moyenne pondérée : (10 × 3 + 12 × 5 + 15 × 2) ÷ 10 = 120 ÷ 10 = 12. 12,3 est la moyenne de 10, 12 et 15 sans tenir compte des effectifs : c'est faux.",
        },
        {
          type: "vf",
          question: "Dans une série, au moins la moitié des valeurs sont inférieures ou égales à la médiane.",
          reponse: true,
          explication: "Vrai : c'est la définition de la médiane. Au moins la moitié des valeurs sont aussi supérieures ou égales à la médiane.",
        },
        {
          type: "saisie",
          question: "Dans un club de 24 membres, 6 pratiquent la natation. Quelle est la fréquence des nageurs, en pourcentage ?",
          reponses: ["25 %", "25", "0,25"],
          explication: "Fréquence = 6 ÷ 24 = 0,25 = **25 %**.",
        },
        {
          type: "qcm",
          question: "Dans la série 10 ; 11 ; 12 ; 13 ; 14, on remplace 14 par 54. Que se passe-t-il ?",
          choix: ["La médiane change, pas la moyenne.", "La moyenne et la médiane changent.", "Rien ne change.", "La moyenne change, pas la médiane."],
          reponse: 3,
          explication: "La moyenne passe de 60 ÷ 5 = 12 à 100 ÷ 5 = 20. La médiane (valeur du milieu de la série rangée) reste 12. La médiane résiste mieux aux valeurs extrêmes.",
        },
        {
          type: "redaction",
          question: "On a demandé à 20 élèves leur temps de trajet entre la maison et le collège.\n\n| Temps (min) | 5 | 10 | 15 | 20 | 30 |\n|---|---|---|---|---|---|\n| Effectif | 2 | 5 | 6 | 4 | 3 |\n\n1) Calcule le temps de trajet moyen.\n2) Détermine la médiane de cette série. Interprète-la.\n3) Calcule l'étendue.\n4) Quel pourcentage des élèves met 15 minutes ou moins ?",
          corrige: `1) Effectif total : 2 + 5 + 6 + 4 + 3 = 20.
Moyenne = (5 × 2 + 10 × 5 + 15 × 6 + 20 × 4 + 30 × 3) ÷ 20
= (10 + 50 + 90 + 80 + 90) ÷ 20 = 320 ÷ 20 = **16 min**.

2) Effectif pair (20) : la médiane est la moyenne des 10e et 11e valeurs.
Effectifs cumulés : 2 (5 min) ; 7 (10 min) ; 13 (15 min) ; 17 ; 20.
Les 10e et 11e valeurs valent toutes deux 15 : **médiane = 15 min**.
Interprétation : au moins la moitié des élèves mettent 15 min ou moins, et au moins la moitié 15 min ou plus.

3) Étendue = 30 − 5 = **25 min**.

4) 2 + 5 + 6 = 13 élèves mettent 15 min ou moins : 13 ÷ 20 = 0,65 = **65 %**.`,
        },
        {
          type: "vf",
          question: "Un élève a lu exactement 4 h cette semaine. Il est compté dans la classe [2 ; 4[.",
          reponse: false,
          explication: "Faux : la classe [2 ; 4[ contient les valeurs de 2 inclus à 4 **exclu**. Une valeur égale à 4 est comptée dans la classe suivante, [4 ; 6[.",
        },
        {
          type: "saisie",
          question: "On a relevé le temps de lecture hebdomadaire de 40 élèves.\n\n| Temps (h) | [0 ; 2[ | [2 ; 4[ | [4 ; 6[ | [6 ; 8[ |\n|---|---|---|---|---|\n| Effectif | 6 | 14 | 12 | 8 |\n\nQuelle est la fréquence de la classe [6 ; 8[, en pourcentage ?",
          reponses: ["20 %", "20", "0,2"],
          explication: "Fréquence = 8 ÷ 40 = 0,2 = **20 %**.",
        },
        {
          type: "qcm",
          question: "Avec le même tableau (effectifs 6, 14, 12 et 8 pour les classes [0 ; 2[, [2 ; 4[, [4 ; 6[ et [6 ; 8[), on trace l'histogramme. Quelle affirmation est vraie ?",
          choix: ["Le rectangle de la classe [2 ; 4[ est le plus haut.", "Les rectangles ont tous la même hauteur, car les classes ont la même amplitude.", "Le rectangle de la classe [6 ; 8[ est le plus haut, car c'est la dernière classe.", "Les rectangles sont séparés par des espaces, comme des bâtons."],
          reponse: 0,
          explication: "Les classes ont la même amplitude (2 h) : la hauteur de chaque rectangle est proportionnelle à l'effectif. Le plus grand effectif est 14, celui de la classe [2 ; 4[. Dans un histogramme, les rectangles sont accolés.",
        },
        {
          type: "saisie",
          question: "Avec le même tableau, on représente la série par un diagramme circulaire. Quel est l'angle du secteur de la classe [2 ; 4[, en degrés ?",
          reponses: ["126", "126°"],
          explication: "Angle = fréquence × 360° = 14/40 × 360° = 0,35 × 360° = **126°**. (Vérification : les quatre angles 54°, 126°, 108° et 72° font bien 360°.)",
        },
        {
          type: "redaction",
          question: "Un professeur d'EPS a mesuré la taille (en cm) des 25 élèves d'une classe de 3e.\n\n| Taille (cm) | [150 ; 160[ | [160 ; 170[ | [170 ; 180[ | [180 ; 190[ |\n|---|---|---|---|---|\n| Effectif | 4 | 9 | 10 | 2 |\n\n1) Combien d'élèves mesurent moins de 170 cm ?\n2) Calcule la fréquence, en pourcentage, des élèves qui mesurent au moins 170 cm.\n3) Explique comment construire l'histogramme de cette série (axes, largeur et hauteur des rectangles).\n4) Lucas affirme : « L'étendue de la série est exactement 40 cm. » A-t-il raison ?",
          corrige: `1) Les élèves de moins de 170 cm sont dans les classes [150 ; 160[ et [160 ; 170[ : 4 + 9 = **13 élèves**.

2) Au moins 170 cm : 10 + 2 = 12 élèves. Fréquence : 12 ÷ 25 = 0,48 = **48 %**.

3) Sur l'axe horizontal, on gradue les tailles de 150 à 190 cm et on place les quatre classes côte à côte : elles ont toutes la même amplitude (10 cm), donc **les rectangles ont la même largeur**. Sur l'axe vertical, on gradue les effectifs : la **hauteur de chaque rectangle est égale à l'effectif** de la classe (4, 9, 10 et 2). Les rectangles se touchent.

4) **Non** : avec des classes, on ne connaît pas les tailles exactes. Le plus petit élève mesure au moins 150 cm et le plus grand moins de 190 cm, donc l'étendue est **strictement inférieure à 40 cm**. Pour la connaître, il faudrait les données brutes.`,
        },
      ],
    },

    // ───────────────────────── 10. Probabilités
    {
      id: "probabilites",
      titre: "Probabilités : une ou deux épreuves",
      theme: "Organisation et gestion de données, fonctions",
      cours: `
## Vocabulaire
- Une **expérience aléatoire** a plusieurs résultats possibles (les **issues**), qu'on ne peut pas prévoir à l'avance.
- Un **événement** est un ensemble d'issues. Exemple, avec un dé : A = « obtenir un nombre pair » = {2 ; 4 ; 6}.
- L'**événement contraire** de A, noté « non A », est réalisé quand A ne l'est pas.
- Deux événements sont **incompatibles** s'ils ne peuvent pas se produire en même temps.

## Probabilité
La **probabilité** d'un événement est un nombre **entre 0 et 1** (0 : impossible ; 1 : certain).

**Situation d'équiprobabilité** (toutes les issues ont la même chance) :
**P(A) = nombre d'issues favorables ÷ nombre d'issues possibles.**

>! Avec un dé équilibré, P(« multiple de 3 ») = 2/6 = 1/3 (issues 3 et 6).

**Propriétés** :
- P(non A) = 1 − P(A) ;
- la somme des probabilités de toutes les issues vaut 1 ;
- si A et B sont incompatibles, P(A ou B) = P(A) + P(B).

## Expériences à deux épreuves
On représente les issues par un **arbre** ou un **tableau à double entrée**.

>! **Deux dés** : le tableau compte 6 × 6 = 36 cases équiprobables. La somme 7 apparaît 6 fois (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) : P = 6/36 = **1/6**.

>! **Urne** (3 boules rouges R, 2 bleues B) : on tire une boule, on la **remet**, on en tire une deuxième.
>! Sur l'arbre, on **multiplie** les probabilités le long d'un chemin : P(R puis R) = 3/5 × 3/5 = **9/25**.
>! **Sans remise**, la deuxième urne n'a plus que 4 boules dont 2 rouges : P(R puis R) = 3/5 × 2/4 = 6/20 = **3/10**.

**« Au moins un »** : passe souvent par le contraire. P(au moins un 6 en deux lancers) = 1 − P(aucun 6) = 1 − 5/6 × 5/6 = 1 − 25/36 = 11/36.

## Fréquence et probabilité
Quand on répète une expérience un **grand nombre** de fois, la fréquence d'un événement se rapproche de sa probabilité. Mais sur un petit nombre d'essais, tout peut arriver : la pièce n'a **pas de mémoire**.

> **À retenir**
> - 0 ≤ P(A) ≤ 1 ; P(non A) = 1 − P(A).
> - Équiprobabilité : P = favorables ÷ possibles.
> - Arbre : on multiplie le long d'un chemin, on additionne les chemins.
> - Avec ou sans remise : attention au contenu de l'urne au 2e tirage.
`,
      exercices: [
        {
          type: "saisie",
          question: "On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un multiple de 3 ? Donne la réponse sous forme de fraction.",
          reponses: ["1/3", "2/6"],
          explication: "Les multiples de 3 entre 1 et 6 sont 3 et 6 : 2 issues favorables sur 6. P = 2/6 = **1/3**.",
        },
        {
          type: "qcm",
          question: "La probabilité d'un événement A est 0,35. Quelle est la probabilité de l'événement contraire « non A » ?",
          choix: ["0,65", "−0,35", "0,35", "1,35"],
          reponse: 0,
          explication: "P(non A) = 1 − P(A) = 1 − 0,35 = 0,65.",
        },
        {
          type: "vf",
          question: "Une pièce équilibrée est tombée 5 fois de suite sur pile. Au 6e lancer, elle a plus de chances de tomber sur face.",
          reponse: false,
          explication: "Faux : la pièce n'a pas de mémoire. Chaque lancer est indépendant : P(face) reste 1/2.",
        },
        {
          type: "saisie",
          question: "Une urne contient 4 boules rouges et 6 boules vertes, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu'elle soit verte ?",
          reponses: ["3/5", "6/10", "0,6", "60 %"],
          explication: "6 boules vertes sur 10 boules en tout : P = 6/10 = **3/5** = 0,6.",
        },
        {
          type: "qcm",
          question: "On lance deux dés équilibrés à six faces et on additionne les résultats. Quelle est la probabilité d'obtenir 7 ?",
          choix: ["1/12", "7/36", "1/11", "1/6"],
          reponse: 3,
          explication: "Il y a 36 couples équiprobables. La somme 7 s'obtient avec (1;6), (2;5), (3;4), (4;3), (5;2), (6;1) : 6 cas. P = 6/36 = 1/6. (1/11 est faux : les 11 sommes de 2 à 12 ne sont pas équiprobables.)",
        },
        {
          type: "saisie",
          question: "On lance deux pièces équilibrées. Quelle est la probabilité d'obtenir deux fois pile ?",
          reponses: ["1/4", "0,25", "25 %"],
          explication: "Issues équiprobables : PP, PF, FP, FF. Une seule est favorable : P = **1/4** (ou 1/2 × 1/2).",
        },
        {
          type: "qcm",
          question: "Une urne contient 3 boules rouges et 2 bleues. On tire une boule, on note sa couleur, on la **remet**, puis on en tire une seconde. Quelle est la probabilité d'obtenir deux boules rouges ?",
          choix: ["9/25", "3/10", "6/25", "3/5"],
          reponse: 0,
          explication: "Avec remise, l'urne est identique aux deux tirages : P = 3/5 × 3/5 = 9/25.",
        },
        {
          type: "qcm",
          question: "Même urne (3 rouges, 2 bleues), mais cette fois **sans remise**. Quelle est la probabilité d'obtenir deux boules rouges ?",
          choix: ["9/25", "3/10", "1/5", "2/5"],
          reponse: 1,
          explication: "Après avoir tiré une rouge, il reste 4 boules dont 2 rouges : P = 3/5 × 2/4 = 6/20 = 3/10.",
        },
        {
          type: "vf",
          question: "Une probabilité peut être égale à 1,2.",
          reponse: false,
          explication: "Faux : une probabilité est toujours comprise entre 0 et 1.",
        },
        {
          type: "redaction",
          question: "Une roue de loterie est partagée en 8 secteurs identiques : 3 rouges, 4 bleus et 1 jaune. On fait tourner la roue ; chaque secteur a la même chance de s'arrêter devant le repère.\n1) Quelle est la probabilité d'obtenir le jaune ?\n2) Quelle est la probabilité de ne pas obtenir un secteur bleu ?\n3) On fait tourner la roue deux fois de suite. Calcule la probabilité d'obtenir deux fois du rouge.\n4) Calcule la probabilité d'obtenir au moins une fois du jaune en deux tours.",
          corrige: `1) 1 secteur jaune sur 8 : **P(J) = 1/8**.

2) P(B) = 4/8 = 1/2, donc P(non B) = 1 − 1/2 = **1/2** (les 3 rouges et le jaune : 4/8).

3) Les deux tours sont indépendants (arbre à deux niveaux) :
P(R puis R) = 3/8 × 3/8 = **9/64**.

4) L'événement contraire de « au moins un jaune » est « aucun jaune ».
P(pas jaune) = 7/8 à chaque tour, donc P(aucun jaune) = 7/8 × 7/8 = 49/64.
P(au moins un jaune) = 1 − 49/64 = **15/64**.`,
        },
      ],
    },

    // ───────────────────────── 11. Thalès et triangles semblables
    {
      id: "thales-triangles-semblables",
      titre: "Théorème de Thalès et triangles semblables",
      theme: "Espace et géométrie",
      cours: `
## Le théorème de Thalès
**Configuration** : deux droites sécantes en A ; M est sur la droite (AB), N sur la droite (AC).

**Si les droites (MN) et (BC) sont parallèles, alors : AM/AB = AN/AC = MN/BC.**

Deux configurations possibles :
- **triangle emboîté** : M sur le segment [AB] et N sur [AC] ;
- **papillon** : M et N de l'autre côté de A (les deux triangles sont opposés par le sommet A).

>! **Exemple** : M ∈ [AB], N ∈ [AC], (MN) // (BC). AM = 3 cm, AB = 5 cm, AC = 7,5 cm, BC = 6 cm.
>! Thalès : AM/AB = AN/AC = MN/BC, soit 3/5 = AN/7,5 = MN/6.
>! AN = 7,5 × 3 ÷ 5 = **4,5 cm** ; MN = 6 × 3 ÷ 5 = **3,6 cm**.

**Rédaction type** : « Les droites (BM) et (CN) sont sécantes en A, et les droites (MN) et (BC) sont parallèles. D'après le théorème de Thalès, on a : … »

## La réciproque : prouver que deux droites sont parallèles
**Si A, M, B d'une part et A, N, C d'autre part sont alignés dans le même ordre, et si AM/AB = AN/AC, alors (MN) // (BC).**

>! AM = 3, AB = 8, AN = 4,5, AC = 12 (points alignés dans le même ordre).
>! AM/AB = 3/8 = 0,375 et AN/AC = 4,5/12 = 0,375. Les rapports sont égaux : **(MN) // (BC)**.

**Contraposée** : si AM/AB ≠ AN/AC, alors (MN) et (BC) **ne sont pas** parallèles.

>! **Astuce** : pour comparer deux quotients, calcule-les séparément (valeurs exactes), ou compare les produits en croix : 3 × 12 = 36 et 8 × 4,5 = 36.

## Triangles semblables
Deux triangles sont **semblables** s'ils ont **les mêmes angles**. Leurs côtés sont alors **proportionnels** : l'un est un agrandissement ou une réduction de l'autre. Inversement, deux triangles dont les côtés sont proportionnels sont semblables.

>! Le triangle de côtés 3, 4, 5 et le triangle de côtés 9, 12, 15 sont semblables (rapport 3).

Dans une configuration de Thalès, les triangles AMN et ABC sont semblables.

**Application classique (ombres)** : un bâton vertical et un arbre, éclairés par le soleil, forment avec leurs ombres deux triangles semblables.

## Prouver que deux triangles sont semblables avec les angles
La somme des angles d'un triangle vaut 180°. Si deux triangles ont **deux angles respectivement égaux**, leurs troisièmes angles sont donc égaux aussi : **deux angles égaux suffisent pour prouver que deux triangles sont semblables.**

Les sommets qui portent des angles égaux se « correspondent » : on les appelle **sommets homologues**. Les **côtés homologues** sont les côtés opposés à des angles égaux ; ce sont eux qui sont proportionnels.

>! **Exemple** : dans le triangle ABC, l'angle A mesure 50° et l'angle B 70°. Dans le triangle DEF, l'angle D mesure 50° et l'angle F 60°.
>! Angle C = 180° − 50° − 70° = 60° et angle E = 180° − 50° − 60° = 70°.
>! Les deux triangles ont les mêmes angles : ils sont **semblables**, avec A ↔ D (50°), B ↔ E (70°), C ↔ F (60°).
>! Les côtés homologues sont [BC] et [EF] (opposés aux angles de 50°), [AC] et [DF] (opposés à 70°), [AB] et [DE] (opposés à 60°) :
>! **BC/EF = AC/DF = AB/DE**.
>! Si AB = 4 cm et DE = 6 cm, le rapport d'agrandissement est 6 ÷ 4 = 1,5 ; avec BC = 6 cm, on obtient EF = 1,5 × 6 = **9 cm**.

Situations où l'on repère facilement des angles égaux :
- deux triangles **rectangles** qui ont un même angle aigu (ou un angle aigu commun) ;
- des angles **opposés par le sommet** ;
- des angles **alternes-internes** ou **correspondants** formés par des droites parallèles.

>! **Méthode** : 1) Justifie deux paires d'angles égaux. 2) Conclus que les triangles sont semblables et écris la correspondance des sommets. 3) Écris l'égalité des rapports des côtés homologues, puis calcule.

C'est très utile quand il n'y a **pas de droites parallèles** : le théorème de Thalès ne s'applique pas, mais les triangles peuvent quand même être semblables.

## Erreurs fréquentes
- Associer les côtés « dans l'ordre de l'écriture » des triangles au lieu de chercher les côtés opposés à des angles égaux.
- Croire qu'un seul angle égal suffit : il en faut **deux**. Pour deux triangles rectangles, l'angle droit compte déjà comme le premier : il suffit alors d'un angle aigu de même mesure.
- Mélanger les côtés : en haut, toujours les longueurs du **petit** triangle ; en bas, celles du **grand** (ou l'inverse, mais pareil dans les trois rapports).
- Utiliser Thalès sans avoir des droites **parallèles**.
- Appliquer la réciproque sans vérifier que les points sont **dans le même ordre**.

> **À retenir**
> - Thalès : (MN) // (BC) ⟹ AM/AB = AN/AC = MN/BC (le signe ⟹ se lit « donc » ou « implique »).
> - Réciproque : même ordre + AM/AB = AN/AC ⟹ (MN) // (BC).
> - Rapports différents ⟹ droites non parallèles.
> - Triangles semblables : mêmes angles ⟺ côtés proportionnels.
> - Deux angles égaux suffisent ; les côtés homologues sont opposés aux angles égaux.
`,
      exercices: [
        {
          type: "saisie",
          question: "M est sur [AB], N sur [AC] et (MN) // (BC). On sait que AM = 4 cm, AB = 10 cm et BC = 15 cm. Calcule MN, en cm.",
          reponses: ["6", "6 cm"],
          explication: "Thalès : AM/AB = MN/BC, soit 4/10 = MN/15. Donc MN = 15 × 4 ÷ 10 = **6 cm**.",
        },
        {
          type: "saisie",
          question: "Même figure (M ∈ [AB], N ∈ [AC], (MN) // (BC), AM = 4 cm, AB = 10 cm) avec AN = 5 cm. Calcule AC, en cm.",
          reponses: ["12,5", "12,5 cm"],
          explication: "AM/AB = AN/AC, soit 4/10 = 5/AC. Donc AC = 5 × 10 ÷ 4 = **12,5 cm**.",
        },
        {
          type: "qcm",
          question: "Les droites (AC) et (BD) se coupent en O, et (AB) // (CD) (configuration papillon : A et C de part et d'autre de O). OA = 3 cm, OC = 4,5 cm et AB = 4 cm. Combien mesure CD ?",
          choix: ["6 cm", "2,7 cm", "5,5 cm", "8 cm"],
          reponse: 0,
          explication: "Thalès dans le papillon : OA/OC = AB/CD, soit 3/4,5 = 4/CD. Donc CD = 4 × 4,5 ÷ 3 = 6 cm. (2,7 vient d'un rapport inversé.)",
        },
        {
          type: "vf",
          question: "A, M, B sont alignés dans cet ordre, ainsi que A, N, C. AM = 3, AB = 8, AN = 4,5 et AC = 12. Les droites (MN) et (BC) sont parallèles.",
          reponse: true,
          explication: "Vrai : AM/AB = 3/8 = 0,375 et AN/AC = 4,5/12 = 0,375. Les points sont dans le même ordre et les rapports sont égaux : d'après la réciproque du théorème de Thalès, (MN) // (BC).",
        },
        {
          type: "qcm",
          question: "Dans une configuration de Thalès (points alignés dans le même ordre), on calcule AM/AB = 0,4 et AN/AC = 0,45. Que peut-on conclure ?",
          choix: ["(MN) et (BC) sont parallèles.", "(MN) et (BC) ne sont pas parallèles.", "On ne peut rien conclure.", "Le triangle ABC est rectangle."],
          reponse: 1,
          explication: "Les rapports sont différents. Si les droites étaient parallèles, le théorème de Thalès donnerait des rapports égaux : par contraposée, (MN) et (BC) ne sont pas parallèles.",
        },
        {
          type: "vf",
          question: "Deux triangles qui ont les mêmes angles ont forcément des côtés de mêmes longueurs.",
          reponse: false,
          explication: "Faux : ils sont semblables, donc leurs côtés sont **proportionnels**, pas forcément égaux. L'un peut être un agrandissement de l'autre.",
        },
        {
          type: "saisie",
          question: "Le triangle ABC a pour côtés 3 cm, 4 cm et 5 cm. Le triangle DEF lui est semblable et son plus grand côté mesure 15 cm. Combien mesure son plus petit côté, en cm ?",
          reponses: ["9", "9 cm"],
          explication: "Le rapport d'agrandissement vaut 15 ÷ 5 = 3. Le plus petit côté de DEF mesure 3 × 3 = **9 cm** (et le troisième 12 cm).",
        },
        {
          type: "qcm",
          question: "Au même moment, un bâton vertical de 1,5 m a une ombre de 2 m, et un arbre a une ombre de 12 m. Quelle est la hauteur de l'arbre ?",
          choix: ["9 m", "16 m", "8 m", "10,5 m"],
          reponse: 0,
          explication: "Les deux triangles (objet, ombre, rayon de soleil) sont semblables : hauteur/ombre est le même rapport. Hauteur = 12 × 1,5 ÷ 2 = 9 m.",
        },
        {
          type: "redaction",
          question: "Les points B, A, D sont alignés dans cet ordre, ainsi que les points C, A, E (configuration papillon). On donne : AB = 6 cm, AC = 8 cm, BC = 10 cm, AD = 4,5 cm, AE = 6 cm.\n1) Démontre que les droites (BC) et (DE) sont parallèles.\n2) Calcule la longueur DE.\n3) Démontre que le triangle ABC est rectangle.",
          corrige: `1) Les points B, A, D d'une part, et C, A, E d'autre part, sont alignés dans le même ordre.
AD/AB = 4,5/6 = 0,75 et AE/AC = 6/8 = 0,75.
Les rapports sont égaux : d'après la **réciproque du théorème de Thalès**, les droites **(BC) et (DE) sont parallèles**.

2) Les droites (BD) et (CE) sont sécantes en A et (BC) // (DE). D'après le **théorème de Thalès** :
AD/AB = AE/AC = DE/BC, soit 0,75 = DE/10.
**DE = 0,75 × 10 = 7,5 cm**.

3) Le plus grand côté est [BC].
BC² = 10² = 100 ; AB² + AC² = 6² + 8² = 36 + 64 = 100.
BC² = AB² + AC² : d'après la **réciproque du théorème de Pythagore**, le triangle ABC est **rectangle en A**.`,
        },
        {
          type: "vf",
          question: "Deux triangles qui ont chacun un angle de 30° sont forcément semblables.",
          reponse: false,
          explication: "Faux : un seul angle égal ne suffit pas. Un triangle d'angles 30°, 60°, 90° et un triangle d'angles 30°, 75°, 75° n'ont pas la même forme. Il faut **deux** angles égaux.",
        },
        {
          type: "qcm",
          question: "Dans le triangle ABC, l'angle A mesure 40° et l'angle B 75°. Dans le triangle DEF, l'angle D mesure 75° et l'angle E 65°. Quelle affirmation est vraie ?",
          choix: ["Les triangles sont semblables, avec A ↔ D, B ↔ E et C ↔ F.", "Les triangles ne sont pas semblables.", "Les triangles sont semblables, avec A ↔ F, B ↔ D et C ↔ E.", "On ne peut pas savoir sans connaître les longueurs."],
          reponse: 2,
          explication: "Angle C = 180° − 40° − 75° = 65° et angle F = 180° − 75° − 65° = 40°. Les deux triangles ont des angles de 40°, 75° et 65° : ils sont semblables. On associe les sommets qui portent le même angle : A ↔ F (40°), B ↔ D (75°), C ↔ E (65°). L'ordre des lettres dans le nom des triangles ne compte pas.",
        },
        {
          type: "vf",
          question: "Deux triangles rectangles qui ont un angle aigu de même mesure sont semblables.",
          reponse: true,
          explication: "Vrai : ils ont l'angle droit et cet angle aigu en commun, donc deux angles égaux. (Le troisième angle vaut alors 90° moins l'angle aigu dans les deux triangles.)",
        },
        {
          type: "saisie",
          question: "Les triangles ABC et DEF sont semblables, avec A ↔ D, B ↔ E et C ↔ F. On sait que AB = 4 cm, AC = 7 cm et DE = 10 cm. Calcule DF, en cm.",
          reponses: ["17,5", "17,5 cm"],
          explication: "[AB] et [DE] sont homologues, de même que [AC] et [DF]. Le rapport d'agrandissement vaut DE/AB = 10 ÷ 4 = 2,5. Donc DF = 2,5 × 7 = **17,5 cm**.",
        },
        {
          type: "saisie",
          question: "Le triangle ABC est rectangle en A, avec AB = 6 cm et BC = 10 cm. H est le pied de la hauteur issue de A (H est sur [BC] et (AH) est perpendiculaire à (BC)). Les triangles ABC et HBA sont semblables (ils ont l'angle B en commun et un angle droit, en A pour l'un et en H pour l'autre). Calcule BH, en cm.",
          reponses: ["3,6", "3,6 cm"],
          explication: "Correspondance : B ↔ B (angle commun), A ↔ H (angles droits), C ↔ A. Les côtés homologues sont proportionnels : BH/BA = BA/BC, soit BH/6 = 6/10. Donc BH = 6 × 6 ÷ 10 = **3,6 cm**.",
        },
        {
          type: "redaction",
          question: "Les droites (AE) et (BD) sont sécantes en C : les points A, C, E sont alignés dans cet ordre, ainsi que B, C, D. Le triangle ABC est rectangle en B et le triangle DEC est rectangle en E. On donne AB = 3 cm, BC = 4 cm et CE = 10 cm.\n1) Calcule AC.\n2) Démontre que les triangles ABC et DEC sont semblables. Précise la correspondance des sommets.\n3) Calcule DE et CD.\n4) Peut-on utiliser le théorème de Thalès dans cette figure ? Justifie.",
          corrige: `1) ABC est rectangle en B : d'après le théorème de Pythagore, AC² = AB² + BC² = 9 + 16 = 25, donc **AC = 5 cm**.

2) Les angles ACB et DCE sont **opposés par le sommet** C : ils sont égaux.
Les angles ABC et DEC sont droits : ils sont égaux.
Les deux triangles ont deux angles égaux : ils sont **semblables**, avec **B ↔ E**, **C ↔ C** et **A ↔ D**.

3) Côtés homologues (opposés aux angles égaux) : [BC] et [EC] (opposés aux angles A et D), [AB] et [DE] (opposés à l'angle C), [AC] et [DC] (opposés à l'angle droit).
Rapport d'agrandissement : CE/CB = 10 ÷ 4 = 2,5.
**DE = 2,5 × AB = 2,5 × 3 = 7,5 cm** et **CD = 2,5 × AC = 2,5 × 5 = 12,5 cm**.
Vérification avec Pythagore dans DEC : 7,5² + 10² = 56,25 + 100 = 156,25 = 12,5².

4) **Non** : Thalès demande deux droites parallèles. Ici (AB) est perpendiculaire à (BD) et (DE) est perpendiculaire à (AE) ; rien ne dit que (AB) et (DE) sont parallèles (elles ne le sont pas). Ce sont les **angles** qui permettent de conclure.`,
        },
      ],
    },

    // ───────────────────────── 12. Triangle rectangle : Pythagore et trigonométrie
    {
      id: "pythagore-trigonometrie",
      titre: "Triangle rectangle : Pythagore et trigonométrie",
      theme: "Espace et géométrie",
      cours: `
## Rappel : le théorème de Pythagore (vu en 4e)
Dans un triangle **rectangle**, le carré de l'**hypoténuse** (le plus grand côté, opposé à l'angle droit) est égal à la somme des carrés des deux autres côtés.

**Si ABC est rectangle en A, alors BC² = AB² + AC².**

>! AB = 6 cm, AC = 8 cm : BC² = 36 + 64 = 100, donc BC = √100 = **10 cm**.
>! AB = 5 cm, BC = 13 cm : AC² = 169 − 25 = 144, donc AC = **12 cm**.

**Réciproque** : si BC² = AB² + AC² (BC étant le plus grand côté), alors le triangle est rectangle en A.
**Contraposée** : si BC² ≠ AB² + AC², le triangle n'est pas rectangle.

## Cosinus, sinus et tangente
Dans un triangle **rectangle**, pour un angle aigu, on nomme les côtés **par rapport à cet angle** :
- l'**hypoténuse** (face à l'angle droit) ;
- le côté **opposé** (face à l'angle) ;
- le côté **adjacent** (qui touche l'angle, sans être l'hypoténuse).

| Rapport | Formule |
|---|---|
| cosinus | côté adjacent ÷ hypoténuse |
| sinus | côté opposé ÷ hypoténuse |
| tangente | côté opposé ÷ côté adjacent |

Moyen mnémotechnique : **CAH SOH TOA** (Cos = Adj/Hyp, Sin = Opp/Hyp, Tan = Opp/Adj).

Pour un angle aigu, cosinus et sinus sont toujours **entre 0 et 1** (l'hypoténuse est le plus long côté).

Valeurs à connaître : sin 30° = 0,5 ; cos 60° = 0,5 ; tan 45° = 1.

## Calculer une longueur
>! ABC rectangle en A, angle B = 35°, BC = 8 cm. Calcule AB.
>! Par rapport à l'angle B : AB est le côté adjacent, BC l'hypoténuse : on utilise le **cosinus**.
>! cos 35° = AB / BC, donc AB = 8 × cos 35° ≈ **6,55 cm**.

Si la longueur cherchée est au **dénominateur** : par exemple sin 35° = 5 / BC donne BC = 5 ÷ sin 35°.

## Calculer un angle
On utilise les touches **cos⁻¹**, **sin⁻¹** ou **tan⁻¹** (« Arccos », « Arcsin », « Arctan ») de la calculatrice, **en mode degrés**.

>! ABC rectangle en A, AB = 5 cm, AC = 12 cm. Calcule l'angle B.
>! Par rapport à B : AC est opposé, AB est adjacent. tan B = 12/5 = 2,4.
>! B = tan⁻¹(2,4) ≈ **67,4°**.

## Erreurs fréquentes
- Utiliser la trigonométrie ou Pythagore dans un triangle **non rectangle**.
- Se tromper de côté adjacent/opposé : ils dépendent de l'angle choisi.
- Calculatrice en radians au lieu de degrés.
- Arrondir trop tôt : garde les valeurs exactes jusqu'au résultat final.

> **À retenir**
> - Pythagore : BC² = AB² + AC² si ABC est rectangle en A.
> - CAH SOH TOA, uniquement dans un triangle rectangle.
> - Longueur : longueur = hypoténuse × cos (ou sin) ; angle : touche cos⁻¹, sin⁻¹ ou tan⁻¹.
`,
      exercices: [
        {
          type: "saisie",
          question: "Le triangle ABC est rectangle en A, avec AB = 9 cm et AC = 12 cm. Calcule BC, en cm.",
          reponses: ["15", "15 cm"],
          explication: "Pythagore : BC² = AB² + AC² = 81 + 144 = 225, donc BC = √225 = **15 cm**.",
        },
        {
          type: "qcm",
          question: "Lequel de ces triangles (longueurs des côtés en cm) est rectangle ?",
          choix: ["5 ; 6 ; 8", "4 ; 5 ; 6", "9 ; 12 ; 15", "6 ; 8 ; 11"],
          reponse: 2,
          explication: "On compare le carré du plus grand côté à la somme des carrés des deux autres : 9² + 12² = 81 + 144 = 225 = 15². Pour les autres : 25 + 36 = 61 ≠ 64 ; 16 + 25 = 41 ≠ 36 ; 36 + 64 = 100 ≠ 121.",
        },
        {
          type: "qcm",
          question: "Le triangle ABC est rectangle en A. Que vaut le cosinus de l'angle ABC ?",
          choix: ["AC/BC", "AB/BC", "AC/AB", "BC/AB"],
          reponse: 1,
          explication: "Par rapport à l'angle B, le côté adjacent est [AB] et l'hypoténuse [BC] : cos B = AB/BC. AC/BC est le sinus de B, AC/AB sa tangente.",
        },
        {
          type: "vf",
          question: "Le cosinus d'un angle aigu d'un triangle rectangle est toujours compris entre 0 et 1.",
          reponse: true,
          explication: "Vrai : c'est le quotient d'un côté par l'hypoténuse, qui est le plus long côté. Le quotient est donc positif et inférieur à 1.",
        },
        {
          type: "qcm",
          question: "Le triangle ABC est rectangle en A. On connaît la mesure de l'angle ABC et la longueur AC. Que faut-il utiliser pour calculer BC ?",
          choix: ["Le cosinus de l'angle B", "La tangente de l'angle B", "Le théorème de Thalès", "Le sinus de l'angle B"],
          reponse: 3,
          explication: "Par rapport à l'angle B, [AC] est le côté opposé et [BC] l'hypoténuse : la formule qui les relie est sin B = AC/BC.",
        },
        {
          type: "saisie",
          question: "Le triangle ABC est rectangle en A, avec BC = 10 cm et l'angle ABC = 30°. Sachant que sin 30° = 0,5, calcule AC, en cm.",
          reponses: ["5", "5 cm"],
          explication: "[AC] est opposé à l'angle B : sin 30° = AC/BC, donc AC = 10 × 0,5 = **5 cm**.",
        },
        {
          type: "saisie",
          question: "Le triangle ABC est rectangle en C, avec AC = 7 cm et l'angle BAC = 40°. Calcule BC, arrondi au dixième de cm (avec la calculatrice).",
          reponses: ["5,9", "5,9 cm"],
          explication: "Par rapport à l'angle A : [BC] est opposé, [AC] adjacent. tan 40° = BC/AC, donc BC = 7 × tan 40° ≈ 5,87, soit **5,9 cm**.",
        },
        {
          type: "saisie",
          question: "Le triangle ABC est rectangle en A, avec AB = 6 cm et BC = 9 cm. Calcule la mesure de l'angle ABC, arrondie au degré (avec la calculatrice).",
          reponses: ["48", "48°"],
          explication: "Par rapport à B : [AB] est adjacent, [BC] hypoténuse. cos B = 6/9, donc B = cos⁻¹(6/9) ≈ 48,2°, soit **48°**.",
        },
        {
          type: "qcm",
          question: "Une rampe d'accès mesure 5 m de long et monte d'une hauteur de 0,4 m. Quel angle fait-elle avec le sol (arrondi au dixième) ?",
          choix: ["4,6°", "85,4°", "4,57 m", "0,08°"],
          reponse: 0,
          explication: "La rampe est l'hypoténuse, la hauteur le côté opposé à l'angle cherché : sin α = 0,4/5 = 0,08, donc α = sin⁻¹(0,08) ≈ 4,6°. 85,4° est l'autre angle aigu ; un angle ne s'exprime pas en mètres.",
        },
        {
          type: "redaction",
          question: "Lina fait voler un cerf-volant. Le fil, bien tendu, mesure 50 m et fait un angle de 35° avec l'horizontale. Elle tient le fil à 1 m au-dessus du sol.\n1) Calcule la hauteur du cerf-volant par rapport au sol, arrondie au dixième de mètre.\n2) Calcule la distance horizontale entre Lina et le point du sol situé à la verticale du cerf-volant, arrondie au dixième.\n3) Vérifie le résultat de la question 2 avec le théorème de Pythagore.",
          corrige: `On note M la main de Lina, C le cerf-volant et H le point à la verticale de C, à la hauteur de la main. Le triangle MHC est rectangle en H, avec MC = 50 m (hypoténuse) et l'angle HMC = 35°.

1) [HC] est le côté opposé à l'angle M : sin 35° = HC/MC.
HC = 50 × sin 35° ≈ 28,68 m.
Hauteur par rapport au sol : 28,68 + 1 ≈ **29,7 m**.

2) [MH] est le côté adjacent : cos 35° = MH/MC.
MH = 50 × cos 35° ≈ **41,0 m**.

3) Pythagore dans MHC rectangle en H : MH² = MC² − HC² ≈ 2 500 − 28,68² ≈ 2 500 − 822,5 = 1 677,5.
MH ≈ √1 677,5 ≈ 41,0 m. On retrouve bien le même résultat.`,
        },
      ],
    },

    // ───────────────────────── 13. Transformations
    {
      id: "transformations",
      titre: "Transformations : translation, rotation, homothétie",
      theme: "Espace et géométrie",
      cours: `
## Les transformations du plan
Une **transformation** associe à chaque point M du plan un point M′, son **image**. Au collège, tu en connais cinq.

| Transformation | Définie par | Image de M |
|---|---|---|
| Symétrie axiale | un axe (d) | M′ tel que (d) est la médiatrice de [MM′] |
| Symétrie centrale | un centre O | M′ tel que O est le milieu de [MM′] |
| Translation | un point A et son image B | M′ tel que ABM′M est un parallélogramme |
| Rotation | un centre O, un angle, un sens | M′ tel que OM′ = OM et l'angle MOM′ vaut l'angle donné |
| Homothétie | un centre O et un rapport k | M′ sur la droite (OM) tel que OM′ = k × OM (k pris sans son signe) |

## Translation
La translation qui transforme A en B fait **glisser** la figure : même direction que (AB), même sens (de A vers B), même longueur AB.
L'image d'une droite par une translation est une droite **parallèle** (ou confondue).

## Rotation
La rotation de centre O, d'angle α, dans un sens donné (sens des aiguilles d'une montre, ou sens inverse) fait **tourner** la figure autour de O.
- Chaque point reste à la même distance de O.
- Une rotation d'angle 180° est la **symétrie centrale** de centre O.

>! Dans un repère d'origine O, la rotation de centre O, d'angle 90°, dans le sens inverse des aiguilles d'une montre, envoie A(3 ; 0) sur A′(0 ; 3).

## Ce que conservent ces quatre transformations
Symétries, translations et rotations sont des **isométries** : elles conservent les **longueurs**, les **angles**, les **aires**, le parallélisme et l'alignement. La figure image est **superposable** à la figure de départ.

## Homothétie
L'homothétie de centre O et de rapport k (k ≠ 0) :
- si **k > 0**, M′ est sur la demi-droite [OM), **du même côté** que M ;
- si **k < 0**, M′ est **de l'autre côté** de O ;
- dans les deux cas, **OM′ = |k| × OM** (|k| est le nombre k sans son signe).

Effets :
- si |k| > 1, c'est un **agrandissement** ; si |k| < 1, une **réduction** ;
- les **longueurs** sont multipliées par |k| ;
- les **aires** sont multipliées par k² ;
- les **angles** sont conservés (la figure image a la même forme).

>! **Exemple** : homothétie de rapport −2 et de centre O. Si OA = 3 cm, alors A′ est sur la droite (OA), de l'autre côté de O, avec OA′ = 6 cm. Un carré de côté 1,5 cm devient un carré de côté 3 cm ; son aire passe de 2,25 cm² à 9 cm² (× 4 = (−2)²).

Une homothétie de rapport −1 est une symétrie centrale.

## Frises et pavages
Une **frise** s'obtient en répétant un motif par **translation** dans une direction. Un **pavage** recouvre le plan sans trou ni chevauchement, souvent par translations et rotations d'un même motif.

## Rosaces
Une **rosace** s'obtient en faisant tourner un motif autour d'un **même centre O**, toujours du **même angle** et dans le même sens, jusqu'à revenir au point de départ (un tour complet = 360°).
- Pour une rosace de **n motifs** régulièrement répartis, l'angle de la rotation vaut **360° ÷ n**.
- Inversement, si l'angle vaut α, la rosace compte **360 ÷ α** motifs (α doit diviser 360).
- Une rotation est une isométrie : tous les motifs sont **superposables** (mêmes longueurs, mêmes angles, même aire).

>! **Exemple** : pour une rosace de 8 pétales, on fait tourner le pétale de 360 ÷ 8 = **45°** autour de O, sept fois de suite. Pour passer du 1er pétale au 3e, on tourne de 2 × 45° = 90°.

> **À retenir**
> - Translation : glissement ; rotation : on tourne autour d'un centre ; homothétie : agrandissement ou réduction.
> - Symétries, translations, rotations conservent longueurs, angles et aires.
> - Homothétie de rapport k : longueurs × |k|, aires × k², angles conservés.
> - k < 0 : l'image est de l'autre côté du centre.
`,
      exercices: [
        {
          type: "qcm",
          question: "Laquelle de ces transformations ne conserve pas les longueurs ?",
          choix: ["Une translation", "Une rotation", "Une symétrie axiale", "Une homothétie de rapport 3"],
          reponse: 3,
          explication: "Une homothétie de rapport 3 multiplie toutes les longueurs par 3. Les translations, rotations et symétries sont des isométries : elles conservent les longueurs.",
        },
        {
          type: "vf",
          question: "La rotation de centre O et d'angle 180° est la symétrie de centre O.",
          reponse: true,
          explication: "Vrai : en tournant de 180° autour de O, le point M arrive en M′ tel que O est le milieu de [MM′].",
        },
        {
          type: "saisie",
          question: "Par une homothétie de rapport 2,5, un segment de 4 cm a pour image un segment de quelle longueur, en cm ?",
          reponses: ["10", "10 cm"],
          explication: "Les longueurs sont multipliées par 2,5 : 4 × 2,5 = **10 cm**.",
        },
        {
          type: "qcm",
          question: "A′ est l'image de A par l'homothétie de centre O et de rapport −2. Quelle affirmation est vraie ?",
          choix: ["A′ est sur [OA) avec OA′ = 2 × OA", "A′ est sur la droite (OA), de l'autre côté de O, avec OA′ = OA ÷ 2", "A′ est le milieu de [OA]", "A′ est sur la droite (OA), de l'autre côté de O, avec OA′ = 2 × OA"],
          reponse: 3,
          explication: "Le rapport est négatif : A′ est de l'autre côté de O. Sa distance à O est multipliée par |−2| = 2.",
        },
        {
          type: "saisie",
          question: "Une figure d'aire 5 cm² est agrandie par une homothétie de rapport 3. Quelle est l'aire de la figure obtenue, en cm² ?",
          reponses: ["45", "45 cm²"],
          explication: "Les aires sont multipliées par k² = 3² = 9 : 5 × 9 = **45 cm²**. (Multiplier par 3 seulement est l'erreur classique.)",
        },
        {
          type: "vf",
          question: "Par une translation, l'image d'une droite est une droite parallèle à celle-ci (ou confondue avec elle).",
          reponse: true,
          explication: "Vrai : une translation fait glisser la figure sans la tourner, donc les directions sont conservées.",
        },
        {
          type: "qcm",
          question: "Dans un repère d'origine O, quelle est l'image du point A(3 ; 0) par la rotation de centre O, d'angle 90°, dans le sens inverse des aiguilles d'une montre ?",
          choix: ["(0 ; −3)", "(0 ; 3)", "(−3 ; 0)", "(3 ; 3)"],
          reponse: 1,
          explication: "A est sur l'axe des abscisses, à 3 unités à droite de O. En tournant d'un quart de tour dans le sens inverse des aiguilles d'une montre, il arrive sur l'axe des ordonnées, 3 unités au-dessus : (0 ; 3). (0 ; −3) correspondrait au sens des aiguilles d'une montre.",
        },
        {
          type: "qcm",
          question: "Pour construire une frise, on passe d'un motif au suivant toujours de la même façon, en le faisant glisser vers la droite. Quelle transformation utilise-t-on ?",
          choix: ["Une homothétie", "Une rotation", "Une translation", "Une symétrie centrale"],
          reponse: 2,
          explication: "Faire glisser un motif dans une direction, sans le tourner ni changer sa taille, c'est appliquer une translation.",
        },
        {
          type: "vf",
          question: "Une homothétie de rapport 0,5 transforme une figure en une réduction de cette figure.",
          reponse: true,
          explication: "Vrai : |0,5| < 1, donc les longueurs sont divisées par 2 (et les aires par 4).",
        },
        {
          type: "redaction",
          question: "ABC est un triangle rectangle en A tel que AB = 3 cm, AC = 4 cm et BC = 5 cm. On construit son image A′B′C′ par l'homothétie de centre O et de rapport −1,5 (O est un point extérieur au triangle).\n1) Où se trouve le point A′ par rapport à O et A ?\n2) Calcule les longueurs des côtés du triangle A′B′C′.\n3) Le triangle A′B′C′ est-il rectangle ? Justifie.\n4) Calcule l'aire de ABC, puis celle de A′B′C′ de deux façons.",
          corrige: `1) Le rapport est négatif : A′ est sur la droite (OA), **de l'autre côté de O** par rapport à A, avec **OA′ = 1,5 × OA**.

2) Les longueurs sont multipliées par |−1,5| = 1,5 :
A′B′ = 1,5 × 3 = **4,5 cm** ; A′C′ = 1,5 × 4 = **6 cm** ; B′C′ = 1,5 × 5 = **7,5 cm**.

3) Une homothétie conserve les angles : l'angle droit en A a pour image un angle droit en A′. Le triangle A′B′C′ est **rectangle en A′**.
(Vérification : 4,5² + 6² = 20,25 + 36 = 56,25 = 7,5².)

4) Aire de ABC = 3 × 4 ÷ 2 = **6 cm²**.
Aire de A′B′C′ :
- directement : 4,5 × 6 ÷ 2 = **13,5 cm²** ;
- avec le coefficient : les aires sont multipliées par k² = (−1,5)² = 2,25, et 6 × 2,25 = 13,5 cm².`,
        },
        {
          type: "saisie",
          question: "On veut construire une rosace de 8 motifs identiques, régulièrement répartis autour d'un point O, en faisant tourner un motif autour de O. De quel angle, en degrés, faut-il le faire tourner à chaque fois ?",
          reponses: ["45", "45°"],
          explication: "Les 8 motifs se partagent un tour complet : 360 ÷ 8 = **45°**.",
        },
        {
          type: "qcm",
          question: "Une rosace est construite en faisant tourner un motif de 40° autour d'un point O, toujours dans le même sens, jusqu'à revenir au motif de départ. Combien de motifs compte la rosace ?",
          choix: ["8", "40", "9", "4,5"],
          reponse: 2,
          explication: "Les motifs se partagent un tour complet de 360° : 360 ÷ 40 = **9 motifs**, en comptant le motif de départ. 8 est le nombre de rotations à faire **après** le motif de départ (8 rotations + le motif de départ = 9 motifs) ; 4,5 vient de 180 ÷ 40, or un tour complet fait 360°, pas 180° ; 40 est l'angle, pas le nombre de motifs.",
        },
        {
          type: "vf",
          question: "Dans une rosace obtenue par rotations d'un même motif, les motifs n'ont pas tous la même aire : ils grandissent en s'éloignant du motif de départ.",
          reponse: false,
          explication: "Faux : une rotation est une isométrie, elle conserve les longueurs et les aires. Tous les motifs de la rosace sont superposables.",
        },
        {
          type: "redaction",
          question: "OAB est un triangle tel que OA = OB = 5 cm et l'angle AOB mesure 60°. On construit une rosace en faisant tourner ce triangle autour de O, toujours de 60° dans le même sens.\n1) Combien de triangles compte la rosace, en comptant le triangle de départ ?\n2) Par quelle rotation passe-t-on du 1er triangle au 3e ?\n3) Montre que le triangle OAB est équilatéral.\n4) La rosace forme un hexagone régulier. Calcule son périmètre.\n5) La hauteur du triangle OAB issue de O mesure environ 4,33 cm. Calcule l'aire de l'hexagone, arrondie au dixième de cm².",
          corrige: `1) Un tour complet : 360 ÷ 60 = **6 triangles**.

2) On tourne deux fois de 60° : c'est la rotation de centre O et d'angle **120°**, dans le même sens.

3) Le triangle OAB est isocèle en O (OA = OB), donc ses angles en A et en B sont égaux. Leur somme vaut 180° − 60° = 120°, donc chacun mesure 60°. Les trois angles mesurent 60° : **OAB est équilatéral**, et AB = 5 cm.

4) Le bord de l'hexagone est formé des 6 côtés comme [AB], chacun de 5 cm (les rotations conservent les longueurs) : périmètre = 6 × 5 = **30 cm**.

5) L'hexagone est formé des 6 triangles superposables au triangle OAB (les rotations conservent les aires).
Aire d'un triangle : base × hauteur ÷ 2 = 5 × 4,33 ÷ 2 ≈ 10,825 cm².
Aire de l'hexagone : 6 × 10,825 ≈ **65,0 cm²** (64,95).
(Pour aller plus loin : la hauteur se calcule avec le théorème de Pythagore dans le triangle OHA rectangle en H, H milieu de [AB] : OH² = 5² − 2,5² = 18,75, OH = √18,75 ≈ 4,33 cm.)`,
        },
      ],
    },

    // ───────────────────────── 14. Volumes et agrandissement-réduction
    {
      id: "volumes-agrandissement",
      titre: "Volumes : pyramide, cône, boule ; agrandissement et réduction",
      theme: "Grandeurs et mesures",
      cours: `
## Les formules de volume
| Solide | Volume |
|---|---|
| Pavé droit | L × l × h |
| Prisme droit | aire de la base × hauteur |
| Cylindre de rayon r | π × r² × h |
| Pyramide | (aire de la base × hauteur) ÷ 3 |
| Cône de rayon r | (π × r² × h) ÷ 3 |
| Boule de rayon r | (4/3) × π × r³ |

Aire d'une **sphère** de rayon r : **4 × π × r²**.

Une pyramide (ou un cône) a un volume égal au **tiers** de celui du prisme (ou du cylindre) de même base et de même hauteur.

>! **Exemples** :
>! Cône de rayon 3 cm et de hauteur 4 cm : V = π × 3² × 4 ÷ 3 = **12π cm³** ≈ 37,7 cm³.
>! Boule de rayon 6 cm : V = 4/3 × π × 6³ = 4/3 × 216π = **288π cm³** ≈ 904,8 cm³.
>! Pyramide à base carrée de côté 6 cm et de hauteur 10 cm : V = 6² × 10 ÷ 3 = **120 cm³**.

**Valeur exacte ou approchée** : « 12π cm³ » est la valeur exacte ; « 37,7 cm³ » une valeur arrondie au dixième.

## Unités de volume et de contenance
1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³ ; **1 dm³ = 1 L** ; 1 cm³ = 1 mL.

>! Un aquarium de 60 cm × 30 cm × 40 cm a pour volume 72 000 cm³ = 72 dm³ = **72 L**.

## Agrandissement et réduction
Quand on agrandit ou réduit un solide (ou une figure) avec un coefficient k (k > 1 : agrandissement ; 0 < k < 1 : réduction) :
- les **longueurs** sont multipliées par **k** ;
- les **aires** sont multipliées par **k²** ;
- les **volumes** sont multipliés par **k³** ;
- les angles ne changent pas.

>! **Exemple** : on double toutes les dimensions d'un cube (k = 2). Ses arêtes sont × 2, l'aire de ses faces × 4, son volume × 8.
>! Une pyramide de 540 cm³ réduite à l'échelle 1/3 a pour volume 540 × (1/3)³ = 540 ÷ 27 = **20 cm³**.

## Erreurs fréquentes
- Oublier de diviser par 3 pour une pyramide ou un cône.
- Confondre rayon et diamètre.
- Multiplier un volume par k au lieu de k³.

> **À retenir**
> - Pyramide et cône : (base × hauteur) ÷ 3 ; boule : 4/3 π r³.
> - 1 dm³ = 1 L.
> - Coefficient k : longueurs × k, aires × k², volumes × k³.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule le volume, en cm³, d'une pyramide à base carrée de côté 6 cm et de hauteur 10 cm.",
          reponses: ["120", "120 cm³"],
          explication: "Aire de la base : 6² = 36 cm². V = 36 × 10 ÷ 3 = **120 cm³**.",
        },
        {
          type: "qcm",
          question: "Quel est le volume exact d'un cylindre de rayon 2 cm et de hauteur 5 cm ?",
          choix: ["10π cm³", "20π cm³", "40π cm³", "100π cm³"],
          reponse: 1,
          explication: "V = π × r² × h = π × 2² × 5 = 20π cm³ ≈ 62,8 cm³. 10π vient d'une erreur : 2 × 5 au lieu de 2² × 5.",
        },
        {
          type: "vf",
          question: "Si on double toutes les longueurs d'un solide, son volume est multiplié par 8.",
          reponse: true,
          explication: "Vrai : le volume est multiplié par k³ = 2³ = 8.",
        },
        {
          type: "saisie",
          question: "Calcule le volume d'une boule de rayon 3 cm, arrondi au cm³.",
          reponses: ["113", "113 cm³"],
          explication: "V = 4/3 × π × 3³ = 4/3 × 27π = 36π ≈ 113,1, soit **113 cm³**.",
        },
        {
          type: "qcm",
          question: "Une pyramide a un volume de 540 cm³. On la réduit à l'échelle 1/3. Quel est le volume de la pyramide réduite ?",
          choix: ["180 cm³", "60 cm³", "1 620 cm³", "20 cm³"],
          reponse: 3,
          explication: "Le volume est multiplié par (1/3)³ = 1/27 : 540 ÷ 27 = 20 cm³. 180 cm³ correspondrait à une division par 3 seulement, 60 cm³ à une division par 9.",
        },
        {
          type: "saisie",
          question: "Un cône a pour rayon 5 cm et pour hauteur 12 cm. Donne la valeur exacte de son volume en fonction de π (en cm³).",
          reponses: ["100π", "100π cm³", "100 π"],
          explication: "V = π × 5² × 12 ÷ 3 = π × 25 × 4 = **100π cm³** (environ 314 cm³).",
        },
        {
          type: "vf",
          question: "1 L = 1 000 cm³",
          reponse: true,
          explication: "Vrai : 1 L = 1 dm³ = 1 000 cm³.",
        },
        {
          type: "qcm",
          question: "Une figure d'aire 20 cm² est agrandie avec le coefficient 1,5. Quelle est l'aire de la figure agrandie ?",
          choix: ["30 cm²", "45 cm²", "67,5 cm²", "22,5 cm²"],
          reponse: 1,
          explication: "L'aire est multipliée par 1,5² = 2,25 : 20 × 2,25 = 45 cm². 30 cm² correspond à une multiplication par 1,5 seulement.",
        },
        {
          type: "saisie",
          question: "Un aquarium a la forme d'un pavé droit de 60 cm de long, 30 cm de large et 40 cm de haut. Quelle est sa contenance, en litres ?",
          reponses: ["72", "72 L"],
          explication: "V = 60 × 30 × 40 = 72 000 cm³ = 72 dm³ = **72 L**.",
        },
        {
          type: "redaction",
          question: "Un cornet de glace est formé d'un cône de rayon 2,5 cm et de hauteur 10 cm, entièrement rempli de glace, surmonté d'une demi-boule de glace de même rayon.\n1) Calcule le volume du cône, arrondi au centième de cm³.\n2) Calcule le volume de la demi-boule, arrondi au centième.\n3) Déduis-en le volume total de glace, arrondi au dixième.\n4) Un glacier dispose d'un bac de 2 L de glace. Combien de cornets complets peut-il préparer ?",
          corrige: `1) V(cône) = π × 2,5² × 10 ÷ 3 = 62,5π ÷ 3 ≈ **65,45 cm³**.

2) V(demi-boule) = (4/3 × π × 2,5³) ÷ 2 = 2/3 × π × 15,625 ≈ **32,72 cm³**.

3) Volume total ≈ 65,45 + 32,72 ≈ **98,2 cm³** (calcul sans arrondi intermédiaire : 98,17…).

4) 2 L = 2 dm³ = 2 000 cm³.
2 000 ÷ 98,17 ≈ 20,4. Il peut préparer **20 cornets complets**.`,
        },
      ],
    },

    // ───────────────────────── 15. Sections de solides et repérage sur la sphère
    {
      id: "sections-reperage-sphere",
      titre: "Sections de solides et repérage sur la sphère",
      theme: "Espace et géométrie",
      cours: `
## Section d'un solide par un plan
Couper un solide par un plan donne une figure plane : la **section**.

| Solide | Plan de coupe | Section |
|---|---|---|
| Cube, pavé droit | parallèle à une face | rectangle de mêmes dimensions que cette face |
| Cube, pavé droit | parallèle à une arête | rectangle |
| Cylindre | parallèle à la base | disque de même rayon que la base |
| Cylindre | parallèle à l'axe | rectangle |
| Pyramide, cône | parallèle à la base | réduction de la base |
| Sphère, boule | n'importe lequel (qui la coupe) | cercle (sphère) ou disque (boule) |

## Pyramide et cône coupés parallèlement à la base
La section est une **réduction** de la base. Le petit solide au sommet est une réduction du grand, de coefficient

**k = (distance du sommet au plan de coupe) ÷ (hauteur totale)**.

>! **Exemple** : une pyramide de hauteur 12 cm a une base carrée de côté 9 cm. On la coupe parallèlement à la base, à 4 cm du sommet.
>! k = 4/12 = 1/3. La section est un carré de côté 9 × 1/3 = **3 cm**.
>! Le volume de la petite pyramide est celui de la grande multiplié par (1/3)³ = 1/27.

## Section d'une sphère
Si on coupe une sphère de centre O et de rayon R par un plan situé à une distance d du centre (d < R), on obtient un **cercle**. Son centre H est le pied de la perpendiculaire au plan issue de O, et son rayon r vérifie, avec Pythagore :

**r² = R² − d²**.

>! Sphère de rayon 5 cm, plan à 3 cm du centre : r² = 25 − 9 = 16, donc r = **4 cm**.
>! Si le plan passe par le centre (d = 0), la section est un **grand cercle**, de rayon R.

## Se repérer sur la sphère terrestre
On assimile la Terre à une sphère. Un point est repéré par deux angles :
- la **latitude** : de 0° (sur l'**équateur**) à 90° Nord ou 90° Sud (aux pôles). Les points de même latitude forment un **parallèle** ;
- la **longitude** : de 0° (sur le **méridien de Greenwich**) à 180° Est ou 180° Ouest. Les points de même longitude forment un **méridien** (un demi-grand cercle d'un pôle à l'autre).

>! Paris a pour coordonnées environ **49° N ; 2° E** (latitude d'abord, puis longitude).

## Se repérer dans un pavé droit
Dans un pavé droit, on choisit un sommet comme origine et trois arêtes comme axes : chaque point est repéré par trois nombres, **(abscisse ; ordonnée ; altitude)**.

> **À retenir**
> - Pavé coupé parallèlement à une face → rectangle identique à la face.
> - Pyramide ou cône coupé parallèlement à la base → réduction de la base, k = distance au sommet ÷ hauteur.
> - Sphère : section = cercle de rayon r avec r² = R² − d².
> - Latitude (N/S, de l'équateur) puis longitude (E/O, de Greenwich).
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelle est la section d'un cylindre par un plan parallèle à sa base ?",
          choix: ["Un rectangle", "Un disque de même rayon que la base", "Un disque plus petit que la base", "Un triangle"],
          reponse: 1,
          explication: "Toutes les sections parallèles à la base d'un cylindre sont des disques identiques à la base. Un plan parallèle à l'axe donnerait un rectangle.",
        },
        {
          type: "vf",
          question: "La section d'une sphère par un plan qui passe par son centre est un cercle de même rayon que la sphère.",
          reponse: true,
          explication: "Vrai : c'est un grand cercle (comme l'équateur pour la Terre). Avec d = 0, r² = R² − 0, donc r = R.",
        },
        {
          type: "saisie",
          question: "Une sphère de rayon 13 cm est coupée par un plan situé à 5 cm de son centre. Quel est le rayon du cercle obtenu, en cm ?",
          reponses: ["12", "12 cm"],
          explication: "r² = R² − d² = 169 − 25 = 144, donc r = **12 cm**.",
        },
        {
          type: "qcm",
          question: "Un pavé droit est coupé par un plan parallèle à une de ses faces. Quelle est la section ?",
          choix: ["Un triangle", "Un carré dans tous les cas", "Un rectangle de mêmes dimensions que cette face", "Un rectangle plus petit que cette face"],
          reponse: 2,
          explication: "La section parallèle à une face est un rectangle superposable à cette face (un carré seulement si la face est carrée).",
        },
        {
          type: "qcm",
          question: "Quelles sont, environ, les coordonnées géographiques de Paris ?",
          choix: ["2° N ; 49° E", "49° S ; 2° E", "49° N ; 2° O", "49° N ; 2° E"],
          reponse: 3,
          explication: "Paris est dans l'hémisphère Nord, à environ 49° de l'équateur, et un peu à l'est du méridien de Greenwich (environ 2° E).",
        },
        {
          type: "vf",
          question: "Tous les points de l'équateur ont une latitude de 0°.",
          reponse: true,
          explication: "Vrai : la latitude se mesure à partir de l'équateur. C'est la longitude qui vaut 0° sur le méridien de Greenwich.",
        },
        {
          type: "saisie",
          question: "Une pyramide de hauteur 12 cm a une base carrée de côté 9 cm. On la coupe par un plan parallèle à la base, à 4 cm du sommet. Quel est le côté du carré obtenu, en cm ?",
          reponses: ["3", "3 cm"],
          explication: "Coefficient de réduction : k = 4/12 = 1/3. Côté de la section : 9 × 1/3 = **3 cm**.",
        },
        {
          type: "qcm",
          question: "Quelle est la longitude des points du méridien de Greenwich ?",
          choix: ["0°", "90° E", "180°", "90° N"],
          reponse: 0,
          explication: "Le méridien de Greenwich est le méridien de référence : sa longitude vaut 0°. 90° N n'est pas une longitude mais la latitude du pôle Nord.",
        },
        {
          type: "saisie",
          question: "Deux villes sont situées sur le même méridien : l'une à 10° N, l'autre à 30° S. Quel est l'écart entre leurs latitudes, en degrés ?",
          reponses: ["40", "40°"],
          explication: "Elles sont de part et d'autre de l'équateur : 10° + 30° = **40°**.",
        },
        {
          type: "redaction",
          question: "Un cône de révolution a une hauteur de 15 cm et un rayon de base de 6 cm. On le coupe par un plan parallèle à sa base, situé à 5 cm du sommet.\n1) Quelle est la nature de la section ? Calcule son rayon.\n2) Calcule l'aire de la section, valeur exacte puis arrondie au dixième de cm².\n3) Calcule le volume du grand cône, valeur exacte puis arrondie au dixième.\n4) Déduis-en le volume du petit cône situé au-dessus du plan, arrondi au dixième.",
          corrige: `1) La section d'un cône par un plan parallèle à la base est un **disque**, réduction de la base.
Coefficient : k = 5/15 = 1/3. Rayon : 6 × 1/3 = **2 cm**.

2) Aire = π × 2² = **4π cm² ≈ 12,6 cm²**.

3) V = π × 6² × 15 ÷ 3 = π × 36 × 5 = **180π cm³ ≈ 565,5 cm³**.

4) Le petit cône est une réduction de coefficient 1/3 : son volume est multiplié par (1/3)³ = 1/27.
V′ = 180π ÷ 27 = 20π/3 ≈ **20,9 cm³**.`,
        },
      ],
    },

    // ───────────────────────── 16. Algorithmique et programmation
    {
      id: "algorithmique-scratch",
      titre: "Algorithmique et programmation (Scratch)",
      theme: "Algorithmique et programmation",
      cours: `
## Variables
Une **variable** est une case mémoire qui porte un **nom** et contient une **valeur** qui peut changer.
- « mettre x à 5 » : x prend la valeur 5 (l'ancienne valeur est effacée) ;
- « ajouter 2 à x » : x augmente de 2 ;
- « mettre x à x × 3 » : x est multiplié par 3.

>! **Exécuter « à la main »** : on suit les valeurs dans un tableau.
>! « mettre x à 2 » puis « répéter 3 fois : mettre x à x × 3 » : x vaut 2 → 6 → 18 → **54**.

## Boucles
- **répéter N fois** : nombre de tours connu à l'avance.
- **répéter jusqu'à** condition : on recommence **tant que la condition est fausse** ; on s'arrête dès qu'elle devient vraie.
- **répéter indéfiniment** : boucle sans fin (souvent pour un jeu).

## Instructions conditionnelles
« **si** condition **alors** … **sinon** … » : le programme choisit selon que la condition est vraie ou fausse.
On peut combiner des conditions avec **et**, **ou**, **non**.

>! « si (réponse modulo 7) = 0 alors dire Divisible par 7 » : **modulo** donne le **reste** de la division euclidienne (17 modulo 5 = 2).

## Blocs personnalisés (sous-programmes)
Un **bloc personnalisé** (« Créer un bloc ») regroupe des instructions sous un nom, éventuellement avec un **paramètre**. On l'appelle ensuite autant de fois qu'on veut.

~~~
définir carré (côté)
  répéter 4 fois
    avancer de (côté)
    tourner ↻ de 90 degrés
~~~

« carré (30) » trace un carré de côté 30 ; « carré (50) », un carré de côté 50. Dans Scratch, les longueurs se mesurent en **pas** (« avancer de 30 pas ») : la scène mesure 480 pas de large et 360 pas de haut.

## Événements et messages
Plusieurs lutins peuvent agir en même temps. Un lutin peut **envoyer un message** ; les scripts qui commencent par « quand je reçois ce message » se déclenchent alors.

## Tracer avec le lutin
Pour un polygone régulier à n côtés, le lutin tourne de **360° ÷ n** à chaque sommet : 120° pour un triangle équilatéral, 90° pour un carré, 72° pour un pentagone, 60° pour un hexagone.

**Rosace** : pour répéter un motif n fois autour du point de départ, on écrit « répéter n fois : motif, tourner de 360 ÷ n degrés ». Chaque tour de boucle applique au motif une **rotation** de centre le point de départ du lutin. Il faut que le bloc du motif ramène le lutin à son point de départ, dans la même direction.

## Simuler une expérience aléatoire
Le bloc **« nombre aléatoire entre 1 et 6 »** (catégorie Opérateurs) donne un nombre entier choisi au hasard parmi 1, 2, 3, 4, 5 et 6, chacun ayant la même chance de sortir : il **simule le lancer d'un dé** équilibré. De même, « nombre aléatoire entre 1 et 2 » simule une pièce (1 pour pile, 2 pour face).

>! **Exemple** : compter les 6 sur 1 000 lancers de dé.
~~~
quand drapeau vert cliqué
mettre compteur à 0
répéter 1000 fois
  si nombre aléatoire entre 1 et 6 = 6 alors
    ajouter 1 à compteur
dire compteur / 1000
~~~

- compteur est le nombre de 6 obtenus ; **compteur / 1000** est leur **fréquence**.
- La probabilité d'obtenir 6 vaut 1/6 ≈ 0,167 : sur un grand nombre de lancers, la fréquence affichée est **proche** de 0,167 (par exemple 0,159 ou 0,172). Attention : Scratch écrit les nombres décimaux avec un **point** (il affiche 0.159).
- À chaque exécution, le résultat **change** : c'est le hasard. Plus on fait de lancers, plus la fréquence se rapproche, en général, de la probabilité.

**Simuler une urne** : pour une urne de 3 boules rouges et 7 noires, on tire un nombre entre 1 et 10 et on décide que 1, 2 et 3 représentent les boules rouges : « si nombre aléatoire entre 1 et 10 < 4 alors … » se réalise avec une probabilité de 3/10.

## Méthode pour le brevet
1. Repère les **entrées** (valeurs demandées) et la **sortie** (ce que le lutin dit ou dessine).
2. Fais un **tableau de suivi** des variables, tour de boucle par tour de boucle.
3. Pour modifier un script, indique précisément **quel bloc** tu changes et **où**.

> **À retenir**
> - Variable : nom + valeur qui change ; suis-la dans un tableau.
> - « répéter jusqu'à » s'arrête dès que la condition est vraie.
> - Modulo = reste de la division euclidienne ; n est divisible par d si n modulo d = 0.
> - Bloc personnalisé = sous-programme réutilisable, avec paramètre.
> - « nombre aléatoire entre 1 et 6 » simule un dé ; compteur ÷ nombre d'essais = fréquence, proche de la probabilité si les essais sont nombreux.
`,
      exercices: [
        {
          type: "qcm",
          question: "Que vaut x à la fin de ce script ?\n~~~\nmettre x à 2\nrépéter 3 fois\n  mettre x à x × 3\n~~~",
          choix: ["18", "11", "54", "6"],
          reponse: 2,
          explication: "x vaut 2, puis 2 × 3 = 6, puis 6 × 3 = 18, puis 18 × 3 = 54 après le 3e tour.",
        },
        {
          type: "saisie",
          question: "Voici un script :\n~~~\ndemander Choisis un nombre et attendre\nsi réponse > 10 alors\n  dire réponse − 10\nsinon\n  dire réponse × 2\n~~~\nQue dit le lutin si on tape 7 ?",
          reponses: ["14"],
          explication: "7 > 10 est faux : on exécute la partie « sinon ». Le lutin dit 7 × 2 = **14**.",
        },
        {
          type: "vf",
          question: "Une boucle « répéter jusqu'à ce que x > 100 » s'arrête dès que la condition x > 100 devient vraie.",
          reponse: true,
          explication: "Vrai : la boucle tourne tant que la condition est fausse et s'arrête dès qu'elle est vraie.",
        },
        {
          type: "saisie",
          question: "Que vaut s à la fin de ce script ?\n~~~\nmettre s à 0\nmettre n à 1\nrépéter 4 fois\n  ajouter n à s\n  ajouter 2 à n\n~~~",
          reponses: ["16"],
          explication: "Tour 1 : s = 1, n = 3. Tour 2 : s = 4, n = 5. Tour 3 : s = 9, n = 7. Tour 4 : s = 16, n = 9. Donc s = **16** (la somme des 4 premiers nombres impairs).",
        },
        {
          type: "qcm",
          question: "Pour tracer un hexagone régulier, de quel angle le lutin doit-il tourner à chaque sommet ?",
          choix: ["120°", "60°", "6°", "360°"],
          reponse: 1,
          explication: "Pour un polygone régulier à n côtés, le lutin tourne de 360° ÷ n. Ici 360 ÷ 6 = 60°. (120° est l'angle intérieur de l'hexagone.)",
        },
        {
          type: "qcm",
          question: "Quelle condition permet de tester si un nombre n est divisible par 7 ?",
          choix: ["n ÷ 7 = 0", "n modulo 7 = 1", "n × 7 = 0", "n modulo 7 = 0"],
          reponse: 3,
          explication: "n est divisible par 7 lorsque le reste de sa division par 7 est nul, c'est-à-dire n modulo 7 = 0.",
        },
        {
          type: "saisie",
          question: "Voici un script :\n~~~\ndemander Choisis un nombre et attendre\nmettre x à réponse\nmettre y à (x + 3) × (x − 3)\ndire y\n~~~\nQue dit le lutin si on tape 5 ?",
          reponses: ["16"],
          explication: "y = (5 + 3) × (5 − 3) = 8 × 2 = **16**. (C'est aussi x² − 9 = 25 − 9.)",
        },
        {
          type: "qcm",
          question: "Que vaut n à la fin de ce script ?\n~~~\nmettre n à 1\nrépéter jusqu'à n > 50\n  mettre n à n × 2\n~~~",
          choix: ["32", "50", "64", "128"],
          reponse: 2,
          explication: "n prend les valeurs 1, 2, 4, 8, 16, 32, 64. À 32, la condition n > 50 est fausse : on continue. À 64, elle est vraie : la boucle s'arrête.",
        },
        {
          type: "vf",
          question: "Un bloc personnalisé « carré (côté) » permet de tracer des carrés de tailles différentes avec le même bloc.",
          reponse: true,
          explication: "Vrai : le paramètre « côté » prend une valeur différente à chaque appel, par exemple carré (30) puis carré (50).",
        },
        {
          type: "redaction",
          question: "Le bloc « carré (côté) » trace un carré de côté donné et ramène le lutin à son point de départ, dans la même direction. On lance le script :\n~~~\nquand drapeau vert cliqué\naller à x : −200 y : 0\ns'orienter à 90\nstylo en position d'écriture\nmettre c à 20\nrépéter 5 fois\n  carré (c)\n  avancer de c\n  ajouter 10 à c\n~~~\n1) Combien de carrés sont tracés ? Quelle est la longueur du côté du plus grand ?\n2) Calcule la somme des périmètres de tous les carrés.\n3) On veut maintenant tracer des carrés jusqu'à ce que le côté dépasse 100. Quelle boucle faut-il utiliser à la place de « répéter 5 fois » ?",
          corrige: `1) La boucle tourne 5 fois : **5 carrés**. Les côtés valent 20, 30, 40, 50 et **60** (c augmente de 10 après chaque carré).

2) Somme des côtés : 20 + 30 + 40 + 50 + 60 = 200.
Somme des périmètres : 4 × 200 = **800 pas**.

3) On remplace « répéter 5 fois » par **« répéter jusqu'à c > 100 »**. Le dernier carré tracé aura un côté de 100 ; ensuite c vaut 110 et la boucle s'arrête.`,
        },
        {
          type: "qcm",
          question: "Quels nombres le bloc « nombre aléatoire entre 1 et 6 » peut-il donner ?",
          choix: ["Seulement 1 ou 6", "Tous les nombres décimaux entre 1 et 6", "Les entiers 2, 3, 4 et 5 seulement", "Les entiers 1, 2, 3, 4, 5 et 6, avec la même chance"],
          reponse: 3,
          explication: "Avec deux bornes entières, Scratch tire au hasard un **entier** entre 1 et 6, bornes comprises, et chaque entier a la même chance de sortir : c'est un dé équilibré.",
        },
        {
          type: "qcm",
          question: "On exécute ce script :\n~~~\nmettre compteur à 0\nrépéter 1000 fois\n  si nombre aléatoire entre 1 et 6 = 6 alors\n    ajouter 1 à compteur\ndire compteur / 1000\n~~~\nQuel affichage est le plus plausible ?",
          choix: ["6", "0,171", "1,6", "0,6"],
          reponse: 1,
          explication: "compteur / 1000 est la fréquence des 6 sur 1 000 lancers. Elle est proche de la probabilité 1/6 ≈ 0,167 : 0,171 est plausible. Une fréquence est toujours entre 0 et 1, ce qui exclut 6 et 1,6 ; 0,6 voudrait dire 600 six sur 1 000 lancers, beaucoup trop.",
        },
        {
          type: "vf",
          question: "Si on relance ce script de simulation de 1 000 lancers de dé, on obtient forcément le même résultat.",
          reponse: false,
          explication: "Faux : les nombres sont tirés au hasard à chaque exécution. Le résultat change (0,171, puis 0,158, puis 0,166…), mais reste en général proche de 1/6.",
        },
        {
          type: "saisie",
          question: "On modifie la condition du script de simulation : « si (nombre aléatoire entre 1 et 6) modulo 2 = 0 alors ajouter 1 à compteur ». On fait 10 000 lancers et on affiche compteur / 10000. De quelle valeur la fréquence affichée devrait-elle être proche ? Donne un nombre décimal.",
          reponses: ["0,5", "1/2", "50 %"],
          explication: "La condition est vraie quand le nombre tiré est **pair** (2, 4 ou 6) : 3 issues sur 6. La probabilité vaut 3/6 = 1/2, donc la fréquence affichée doit être proche de **0,5**.",
        },
        {
          type: "redaction",
          question: "Une urne contient 3 boules rouges et 7 boules noires. Pour simuler 500 tirages avec remise, Inès écrit :\n~~~\nquand drapeau vert cliqué\nmettre rouges à 0\nrépéter 500 fois\n  si nombre aléatoire entre 1 et 10 < 4 alors\n    ajouter 1 à rouges\ndire rouges\n~~~\n1) Pour quels nombres tirés la variable rouges augmente-t-elle ? Explique pourquoi ce script simule bien l'urne.\n2) Environ quelle valeur le lutin devrait-il dire ?\n3) Inès obtient 162. Son programme est-il faux ? Explique.\n4) Comment modifier le dernier bloc pour afficher la fréquence des boules rouges ?\n5) Quelle condition faut-il écrire pour simuler une urne de 4 boules rouges et 6 noires ?",
          corrige: `1) La condition « nombre < 4 » est vraie pour **1, 2 et 3** : 3 nombres sur 10, tous équiprobables. La probabilité que rouges augmente est donc 3/10, exactement la probabilité de tirer une boule rouge (3 rouges sur 10 boules). Les nombres 4 à 10 jouent le rôle des 7 boules noires.

2) La probabilité est 3/10 = 0,3. Sur 500 tirages, on s'attend à **environ 500 × 0,3 = 150** boules rouges.

3) **Non** : à cause du hasard, le nombre de rouges varie d'une simulation à l'autre. 162 donne une fréquence de 162 ÷ 500 = 0,324, proche de 0,3 : c'est normal. (Avec plus de tirages, la fréquence serait en général encore plus proche de 0,3.)

4) On remplace « dire rouges » par **« dire rouges / 500 »**.

5) Il faut 4 nombres sur 10 : **« si nombre aléatoire entre 1 et 10 < 5 alors »** (les nombres 1, 2, 3 et 4).`,
        },
        {
          type: "qcm",
          question: "Ce script simule 200 lancers d'une pièce équilibrée (1 pour pile, 2 pour face) :\n~~~\nmettre piles à 0\nrépéter 200 fois\n  si nombre aléatoire entre 1 et 2 = 1 alors\n    ajouter 1 à piles\ndire piles\n~~~\nQuel affichage est le plus plausible ?",
          choix: ["200", "0,5", "2", "96"],
          reponse: 3,
          explication: "La probabilité de pile vaut 1/2 : sur 200 lancers, on attend **environ 100** piles, et 96 est plausible à cause du hasard. 200 voudrait dire 200 piles sur 200 lancers ; 0,5 est une fréquence, or le lutin dit le nombre de piles, pas « piles / 200 ».",
        },
        {
          type: "saisie",
          question: "Le bloc « carré (côté) » trace un carré et ramène le lutin à son point de départ, dans la même direction. Pour tracer une rosace de 8 carrés, on écrit :\n~~~\nrépéter 8 fois\n  carré (50)\n  tourner ↻ de ? degrés\n~~~\nPar quel nombre faut-il remplacer « ? » pour que la rosace fasse exactement un tour complet ?",
          reponses: ["45", "45°"],
          explication: "Les 8 carrés doivent se répartir sur un tour complet : 360 ÷ 8 = **45**. Chaque tour de boucle fait tourner le carré de 45° autour du point de départ du lutin.",
        },
        {
          type: "redaction",
          question: "Pour simuler le lancer de **deux** pièces et compter les fois où l'on obtient deux piles, Hugo écrit :\n~~~\nquand drapeau vert cliqué\nmettre deuxpiles à 0\nrépéter 1000 fois\n  mettre p1 à nombre aléatoire entre 1 et 2\n  mettre p2 à nombre aléatoire entre 1 et 2\n  si p1 = 1 et p2 = 1 alors\n    ajouter 1 à deuxpiles\ndire deuxpiles / 1000\n~~~\nSa camarade Zoé propose plus court : « mettre nb à nombre aléatoire entre 0 et 2 », où nb représente directement le nombre de piles obtenues, et elle compte les fois où nb = 2.\n1) Quelle est la probabilité d'obtenir deux piles en lançant deux pièces équilibrées ? Justifie avec les issues.\n2) De quelle valeur la fréquence affichée par le script d'Hugo devrait-elle être proche ?\n3) Avec le script de Zoé, quelle est la probabilité que nb vaille 2 ? Son script simule-t-il bien les deux pièces ? Explique.",
          corrige: `1) Les issues équiprobables sont : (pile ; pile), (pile ; face), (face ; pile), (face ; face). Une seule donne deux piles : **P = 1/4**.

2) La fréquence affichée doit être proche de 1/4 = **0,25** (par exemple 0,243 ou 0,261, et Scratch l'écrit avec un point : 0.243).

3) « nombre aléatoire entre 0 et 2 » donne 0, 1 ou 2 **avec la même chance** : P(nb = 2) = **1/3**.
Or, avec deux vraies pièces, les trois résultats n'ont pas la même probabilité : 0 pile a une probabilité de 1/4, 2 piles aussi, mais 1 pile a une probabilité de **2/4 = 1/2** (deux issues : pile-face et face-pile).
Le script de Zoé **ne simule pas** les deux pièces : il donnerait une fréquence proche de 0,33 au lieu de 0,25. Il faut tirer chaque pièce séparément, comme Hugo.`,
        },
      ],
    },

    // ───────────────────────── 17. Automatismes du brevet
    {
      id: "automatismes-brevet",
      titre: "Automatismes du brevet (sans calculatrice)",
      theme: "Préparation au brevet",
      cours: `
## La première partie de l'épreuve
L'épreuve écrite de mathématiques du brevet dure **2 heures** et est notée sur 20. Depuis la session 2026, elle a deux parties :

| Partie | Durée | Points | Calculatrice |
|---|---|---|---|
| 1. Automatismes et applications directes | 20 min | 6 | interdite |
| 2. Raisonnement et résolution de problèmes | 1 h 40 | 14 | autorisée |

- **Partie 1** : une série de questions courtes et indépendantes (neuf dans les sujets de référence de la session 2027), sur tout le programme du cycle 4. Ce n'est **pas un QCM** : tu écris directement le résultat, **sans justifier**. La copie de cette partie est ramassée au bout des 20 minutes.
- **Partie 2** : plusieurs exercices indépendants, où il faut **justifier** tes réponses. La qualité de la rédaction et du raisonnement compte pour 2 points ; une démarche, même inachevée, peut rapporter des points.

Ces modalités sont celles annoncées pour la session 2027 (note de service du BO du 17 septembre 2026) : ton professeur te confirmera les détails.

Il faut aller **vite et juste** : ces questions se préparent par un entraînement régulier, quelques minutes par jour.

## Calcul mental : les réflexes
- **Fractions** : même dénominateur pour additionner (2/3 + 1/4 = 8/12 + 3/12 = 11/12) ; pour multiplier, on simplifie avant de calculer (3/5 × 10/9 = (3 × 2 × 5)/(5 × 3 × 3) = 2/3).
- **Priorités** : puissances, puis × et ÷, puis + et −.
- **Relatifs** : (−) × (−) = (+) ; (−3) × (−4) = 12.
- **Pourcentages faciles** : 10 % = ÷ 10 ; 5 % = la moitié de 10 % ; 15 % = 10 % + 5 % ; 25 % = ÷ 4 ; 75 % = 3/4.
- **Multiplier par 0,5, 0,25** : diviser par 2, par 4.
- **Carrés parfaits** jusqu'à 15² = 225 ; triplets de Pythagore : (3 ; 4 ; 5), (6 ; 8 ; 10), (5 ; 12 ; 13).
- **Puissances de 10** : 1,2 × 10³ = 1 200 ; 3,5 × 10⁻² = 0,035.

## Conversions express
| Durées | Longueurs | Échelles |
|---|---|---|
| 0,5 h = 30 min | 1 km = 1 000 m | 1/25 000 : 1 cm ↔ 250 m |
| 0,25 h = 15 min | 1 m = 100 cm | 1/100 000 : 1 cm ↔ 1 km |
| 1,5 h = 1 h 30 min | 1 dm³ = 1 L | |

## Méthode
1. Lis la question jusqu'au bout et repère ce qui est demandé (valeur exacte, unité, forme simplifiée…).
2. Calcule au brouillon en écrivant les étapes intermédiaires.
3. Contrôle l'**ordre de grandeur** : un prix soldé est plus petit que le prix de départ, une probabilité est entre 0 et 1.
4. Ne reste pas bloqué : passe à la suivante et reviens-y à la fin.

> **À retenir**
> - Partie 1 (automatismes) : 20 minutes, 6 points, sans calculatrice, réponses courtes sans justification.
> - Partie 2 : 1 h 40, 14 points, avec calculatrice, réponses justifiées et rédigées.
> - Entraîne-toi un peu chaque jour : fractions, pourcentages, équations, développements, conversions.
> - Vérifie toujours l'ordre de grandeur et l'unité.
`,
      exercices: [
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 2/3 + 1/4. Donne le résultat sous forme de fraction.",
          reponses: ["11/12"],
          explication: "Dénominateur commun 12 : 2/3 = 8/12 et 1/4 = 3/12. Donc 8/12 + 3/12 = **11/12**.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 15 % de 60.",
          reponses: ["9"],
          explication: "10 % de 60 = 6 et 5 % = 3. Donc 15 % de 60 = 6 + 3 = **9**.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule (−3) × (−4) + 5 × (−2).",
          reponses: ["2"],
          explication: "Les multiplications d'abord : (−3) × (−4) = 12 et 5 × (−2) = −10. Puis 12 − 10 = **2**.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 3/5 × 10/9 et donne le résultat sous forme de fraction irréductible.",
          reponses: ["2/3"],
          explication: "3/5 × 10/9 = (3 × 10)/(5 × 9) = (3 × 2 × 5)/(5 × 3 × 3) = **2/3** en simplifiant par 3 et par 5.",
        },
        {
          type: "saisie",
          question: "Résous l'équation 3x − 4 = 11.",
          reponses: ["5"],
          explication: "3x = 11 + 4 = 15, donc x = **5**.",
        },
        {
          type: "saisie",
          question: "Développe 4(2x − 3).",
          reponses: ["8x-12", "-12+8x"],
          explication: "4 × 2x − 4 × 3 = **8x − 12**.",
        },
        {
          type: "saisie",
          question: "Écris 1,2 × 10³ sous forme d'un nombre entier.",
          reponses: ["1200", "1 200"],
          explication: "Multiplier par 10³ = 1 000 déplace la virgule de 3 rangs vers la droite : **1 200**.",
        },
        {
          type: "saisie",
          question: "Sur une carte à l'échelle 1/25 000, deux villages sont à 4 cm l'un de l'autre. Quelle est la distance réelle, en km ?",
          reponses: ["1", "1 km"],
          explication: "4 cm sur la carte représentent 4 × 25 000 = 100 000 cm en réalité, soit 1 000 m = **1 km**.",
        },
        {
          type: "saisie",
          question: "Un triangle est rectangle ; les côtés de l'angle droit mesurent 6 cm et 8 cm. Quelle est la longueur de l'hypoténuse, en cm ?",
          reponses: ["10", "10 cm"],
          explication: "6² + 8² = 36 + 64 = 100 = 10². L'hypoténuse mesure **10 cm** (triplet 6 ; 8 ; 10 à connaître).",
        },
        {
          type: "redaction",
          question: "Mini-série d'automatismes (sans calculatrice, 5 minutes) :\na) Calcule 0,25 × 48.\nb) Factorise x² − 25.\nc) Une urne contient 2 boules rouges et 8 noires. Quelle est la probabilité de tirer une boule rouge ?\nd) Convertis 1,25 h en heures et minutes.\ne) Quelle est la médiane de la série 3 ; 7 ; 8 ; 12 ; 15 ?",
          corrige: `a) 0,25 × 48 = 48 ÷ 4 = **12**.

b) x² − 25 = x² − 5² = **(x − 5)(x + 5)**.

c) 2 boules rouges sur 10 : P = 2/10 = **1/5** (= 0,2).

d) 0,25 h = 15 min, donc 1,25 h = **1 h 15 min**.

e) La série est rangée et compte 5 valeurs : la médiane est la 3e, **8**.`,
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 5/6 ÷ 10/9 et donne le résultat sous forme de fraction irréductible.",
          reponses: ["3/4"],
          explication: "Diviser par une fraction, c'est multiplier par son inverse : 5/6 × 9/10 = (5 × 3 × 3)/(2 × 3 × 2 × 5) = **3/4** en simplifiant par 5 et par 3.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 7 + 3 × (2 − 5)².",
          reponses: ["34"],
          explication: "Parenthèses d'abord : 2 − 5 = −3. Puis la puissance : (−3)² = 9. Puis la multiplication : 3 × 9 = 27. Enfin 7 + 27 = **34**. (Erreur fréquente : calculer 7 + 3 = 10 en premier.)",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : un article coûte 40 €. Son prix baisse de 30 %. Quel est son nouveau prix, en euros ?",
          reponses: ["28", "28 €"],
          explication: "30 % de 40 = 3 × 4 = 12, donc 40 − 12 = **28 €** (ou 40 × 0,7 = 28).",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : soit f(x) = x² − 3x. Calcule f(−2).",
          reponses: ["10", "f(-2)=10"],
          explication: "f(−2) = (−2)² − 3 × (−2) = 4 + 6 = **10**. Attention : (−2)² = 4 et −3 × (−2) = +6.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : résous l'équation 5 − 2x = 11.",
          reponses: ["-3"],
          explication: "−2x = 11 − 5 = 6, donc x = 6 ÷ (−2) = **−3**. Vérification : 5 − 2 × (−3) = 5 + 6 = 11.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : convertis 2,5 L en cm³.",
          reponses: ["2500", "2 500"],
          explication: "1 L = 1 dm³ = 1 000 cm³, donc 2,5 L = 2,5 × 1 000 = **2 500 cm³**.",
        },
        {
          type: "redaction",
          question: "Entraînement « partie 1 » du brevet : 9 questions, 20 minutes, sans calculatrice. Écris seulement le résultat.\na) Calcule 3/4 − 1/6.\nb) Écris 2,5 × 10⁻² en écriture décimale.\nc) Développe et réduis (x − 3)².\nd) Soit f(x) = 2x − 5. Quel est l'antécédent de 7 par f ?\ne) Calcule la moyenne de la série 8 ; 12 ; 10 ; 14.\nf) Calcule 20 % de 35.\ng) Une pyramide a une base d'aire 9 cm² et une hauteur de 4 cm. Quel est son volume ?\nh) Un triangle rectangle a une hypoténuse de 13 cm et un côté de l'angle droit de 5 cm. Combien mesure le troisième côté ?\ni) On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un nombre premier ?",
          corrige: `a) 3/4 − 1/6 = 9/12 − 2/12 = **7/12**.

b) 2,5 × 10⁻² = 2,5 ÷ 100 = **0,025**.

c) (x − 3)² = x² − 2 × x × 3 + 3² = **x² − 6x + 9**.

d) 2x − 5 = 7, donc 2x = 12 et **x = 6**.

e) (8 + 12 + 10 + 14) ÷ 4 = 44 ÷ 4 = **11**.

f) 10 % de 35 = 3,5, donc 20 % = **7**.

g) V = 9 × 4 ÷ 3 = **12 cm³** (ne pas oublier de diviser par 3).

h) 13² − 5² = 169 − 25 = 144 = 12² : le troisième côté mesure **12 cm** (triplet 5 ; 12 ; 13).

i) Les nombres premiers entre 1 et 6 sont 2, 3 et 5 (1 n'est pas premier) : P = 3/6 = **1/2**.

Barème indicatif : chaque bonne réponse rapporte des points ; une réponse sans unité ou non simplifiée peut en perdre.`,
        },
      ],
    },

    // ───────────────────────── 18. Fractions, relatifs et priorités
    {
      id: "fractions-relatifs-priorites",
      titre: "Fractions, nombres relatifs et priorités de calcul",
      theme: "Nombres et calculs",
      cours: `
## Les priorités de calcul
Dans un calcul avec plusieurs opérations, on ne calcule pas simplement de gauche à droite : on respecte cet ordre.
1. Les calculs **entre parenthèses** (en commençant par les plus intérieures).
2. Les **puissances**.
3. Les **multiplications et divisions**, de gauche à droite.
4. Les **additions et soustractions**, de gauche à droite.

>! **Exemple** : 20 − 4 × (3 − 5)² ÷ 8
>! = 20 − 4 × (−2)² ÷ 8 (parenthèses)
>! = 20 − 4 × 4 ÷ 8 (puissance)
>! = 20 − 16 ÷ 8 = 20 − 2 (multiplication puis division, de gauche à droite)
>! = **18**

Un **trait de fraction** joue le rôle de parenthèses : (12 + 8)/(2 × 5) = 20/10 = 2. À la calculatrice, il faut alors taper les parenthèses : (12 + 8) ÷ (2 × 5).

## Additionner et soustraire des nombres relatifs
- **Même signe** : on additionne les distances à zéro et on garde le signe. (−5) + (−8) = −13.
- **Signes contraires** : on soustrait la plus petite distance à zéro de la plus grande, et on prend le signe du nombre le plus éloigné de zéro. (−7) + 3 = −4 ; 9 + (−2) = 7.
- **Soustraire un nombre, c'est ajouter son opposé** : 4 − (−6) = 4 + 6 = 10 ; −3 − 9 = −3 + (−9) = −12.

>! **Simplifier l'écriture** : (−8) + 5 − (−6) = −8 + 5 + 6 = **3**. On peut regrouper les positifs (5 + 6 = 11) et les négatifs (−8), puis 11 − 8 = 3.

## Multiplier et diviser des nombres relatifs
**Règle des signes** : le produit (ou le quotient) de deux nombres de **même signe** est **positif** ; de deux nombres de **signes contraires**, il est **négatif**.
- (−3) × (−4) = 12 ; (−36) ÷ 4 = −9 ; 15 ÷ (−3) = −5.
- Avec plusieurs facteurs : le produit est positif si le nombre de facteurs négatifs est **pair**, négatif s'il est **impair**. (−2) × (−3) × (−5) = −30 (trois facteurs négatifs).

## Les fractions
**Égalité** : on ne change pas une fraction en multipliant (ou en divisant) son numérateur et son dénominateur par le même nombre non nul : 3/4 = 15/20 ; 18/24 = 3/4.

**Signe** : −3/4 = (−3)/4 = 3/(−4), et (−12)/(−16) = 12/16 = 3/4.

**Additionner, soustraire** : on met les fractions **au même dénominateur**, puis on additionne les numérateurs.
>! 5/6 − 3/4 = 10/12 − 9/12 = **1/12** ; 2 + 3/4 = 8/4 + 3/4 = **11/4**.

**Multiplier** : on multiplie les numérateurs entre eux et les dénominateurs entre eux, en **simplifiant avant** de calculer.
>! 4/9 × 15/8 = (4 × 15)/(9 × 8) = (4 × 3 × 5)/(3 × 3 × 4 × 2) = **5/6**.

**Prendre une fraction d'une quantité**, c'est multiplier : les 3/5 de 40 € valent 3/5 × 40 = 120/5 = **24 €**.

**Diviser** : l'**inverse** de a/b est b/a (a et b non nuls). Diviser par une fraction, c'est **multiplier par son inverse**.
>! 2/3 ÷ 4/9 = 2/3 × 9/4 = (2 × 3 × 3)/(3 × 2 × 2) = **3/2** (on simplifie par 2 et par 3).

## Un calcul complet
>! A = 1/2 + 3/2 × 5/9
>! La multiplication est prioritaire : 3/2 × 5/9 = 15/18 = 5/6.
>! A = 1/2 + 5/6 = 3/6 + 5/6 = 8/6 = **4/3**.

## Erreurs fréquentes
- 2 + 3 × 4 = 20 : faux, la multiplication passe d'abord, 2 + 12 = **14**.
- 1/2 + 1/3 = 2/5 : faux, on n'additionne jamais les dénominateurs. 1/2 + 1/3 = 3/6 + 2/6 = **5/6**.
- (−5) − (−2) = −7 : faux, (−5) − (−2) = −5 + 2 = **−3**.
- Oublier de simplifier le résultat final : au brevet, on attend souvent une fraction **irréductible**.

> **À retenir**
> - Priorités : parenthèses, puissances, × et ÷, puis + et −.
> - Soustraire un nombre = ajouter son opposé.
> - Même signe : produit positif ; signes contraires : produit négatif.
> - Fractions : même dénominateur pour + et − ; on multiplie « en haut » et « en bas » pour × ; diviser = multiplier par l'inverse.
`,
      exercices: [
        {
          type: "qcm",
          question: "Sans calculatrice : combien vaut 5 + 3 × 4 ?",
          choix: ["32", "17", "60", "12"],
          reponse: 1,
          explication: "La multiplication est prioritaire : 3 × 4 = 12, puis 5 + 12 = 17. Le résultat 32 vient d'un calcul de gauche à droite, (5 + 3) × 4, qui ne respecte pas les priorités.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule (−8) + 5 − (−6).",
          reponses: ["3"],
          explication: "Soustraire −6, c'est ajouter 6 : (−8) + 5 + 6 = −8 + 11 = **3**.",
        },
        {
          type: "vf",
          question: "Le produit (−2) × (−3) × (−5) est un nombre positif.",
          reponse: false,
          explication: "Faux : il y a trois facteurs négatifs, un nombre impair, donc le produit est négatif. (−2) × (−3) = 6, puis 6 × (−5) = −30.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 30 − 2 × (1 − 4)².",
          reponses: ["12"],
          explication: "Parenthèses : 1 − 4 = −3. Puissance : (−3)² = 9. Multiplication : 2 × 9 = 18. Soustraction : 30 − 18 = **12**.",
        },
        {
          type: "saisie",
          question: "À 6 h du matin, un thermomètre indique −7 °C. À 14 h, il indique 5 °C. De combien de degrés la température a-t-elle augmenté ?",
          reponses: ["12", "12 °C", "12 degrés"],
          explication: "L'écart vaut 5 − (−7) = 5 + 7 = **12 °C** : il faut 7 degrés pour remonter de −7 à 0, puis 5 degrés de 0 à 5.",
        },
        {
          type: "qcm",
          question: "Sans calculatrice : combien vaut 1/2 + 1/3 ?",
          choix: ["2/5", "1/6", "2/6", "5/6"],
          reponse: 3,
          explication: "On réduit au même dénominateur 6 : 1/2 = 3/6 et 1/3 = 2/6, donc 1/2 + 1/3 = 5/6. 2/5 vient de l'erreur classique qui additionne les dénominateurs ; 1/6 est le produit 1/2 × 1/3.",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 7/10 − 2/15. Donne le résultat sous forme de fraction irréductible.",
          reponses: ["17/30"],
          explication: "Le plus petit dénominateur commun à 10 et 15 est 30 : 7/10 = 21/30 et 2/15 = 4/30. Donc 7/10 − 2/15 = 21/30 − 4/30 = **17/30** (17 est premier et ne divise pas 30 : la fraction est irréductible).",
        },
        {
          type: "saisie",
          question: "Sans calculatrice : calcule 4/9 × 15/8. Donne le résultat sous forme de fraction irréductible.",
          reponses: ["5/6"],
          explication: "On simplifie avant de multiplier : 4/9 × 15/8 = (4 × 3 × 5)/(3 × 3 × 4 × 2). On simplifie par 4 et par 3 : il reste **5/6**.",
        },
        {
          type: "qcm",
          question: "Sans calculatrice : combien vaut 2/3 ÷ 4/9 ?",
          choix: ["3/2", "8/27", "27/8", "8/12"],
          reponse: 0,
          explication: "Diviser par 4/9, c'est multiplier par son inverse 9/4 : 2/3 × 9/4 = 18/12 = 3/2. 8/27 est le produit 2/3 × 4/9 (on a oublié d'inverser) ; 27/8 est l'inverse de ce produit.",
        },
        {
          type: "redaction",
          question: "1) Calcule A = (3/4 − 1/2) ÷ (1/3 + 1/6). Donne le résultat sous forme de fraction irréductible.\n2) Léa a 60 €. Elle dépense le quart de son argent pour un livre, puis les 2/3 de ce qui lui reste pour un jeu.\na) Combien coûte le livre ? Combien coûte le jeu ?\nb) Quelle fraction de ses 60 € lui reste-t-il à la fin ?\nc) Tom affirme : « Elle a dépensé 1/4 + 2/3 = 11/12 de son argent. » A-t-il raison ? Explique.",
          corrige: `1) Première parenthèse : 3/4 − 1/2 = 3/4 − 2/4 = 1/4.
Seconde parenthèse : 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2.
A = 1/4 ÷ 1/2 = 1/4 × 2/1 = 2/4 = **1/2**.

2) a) Le livre coûte 1/4 × 60 = 60 ÷ 4 = **15 €**.
Il lui reste 60 − 15 = 45 €. Le jeu coûte 2/3 × 45 = 90/3 = **30 €**.

b) Il lui reste 45 − 30 = 15 €, soit 15/60 = **1/4** de son argent.
(Autre méthode : après le livre, il reste 3/4 ; le jeu coûte 2/3 de ces 3/4, soit 2/3 × 3/4 = 1/2 ; il reste 3/4 − 1/2 = 1/4.)

c) **Non** : les 2/3 portent sur le **reste** (45 €), pas sur les 60 €. Léa a dépensé 15 + 30 = 45 €, soit 45/60 = **3/4** de son argent, et non 11/12 (qui ferait 55 €).`,
        },
      ],
    },

    // ───────────────────────── 19. Problèmes type brevet (partie 2)
    {
      id: "problemes-brevet-partie-2",
      titre: "Problèmes type brevet (partie 2, avec calculatrice)",
      theme: "Préparation au brevet",
      cours: `
## La deuxième partie de l'épreuve
Après les 20 minutes d'automatismes, la **partie 2** dure **1 h 40** et est notée sur **14 points**, **avec calculatrice**. Elle est formée de plusieurs exercices **indépendants** : tu peux les traiter dans l'ordre que tu veux. Chaque exercice part souvent d'une situation concrète (un jardin, un trajet, une cuve, un club de sport…) et mélange plusieurs chapitres : Pythagore et pourcentages, volumes et fonctions, statistiques et équations…

Dans cette partie, il faut **justifier** : la qualité de la rédaction et du raisonnement compte (2 points sur les 14), et une démarche, même inachevée, peut rapporter des points.

## Les mots des consignes
| Consigne | Ce qu'on attend |
|---|---|
| Calculer | le calcul posé, puis le résultat avec son unité |
| Justifier, expliquer | une propriété ou un calcul qui prouve la réponse |
| Montrer que, démontrer que | le résultat est donné : il faut prouver comment on y arrive |
| Déterminer | trouver une valeur, par la méthode de ton choix (calcul, graphique, tableau) |
| Donner la valeur exacte | pas d'arrondi : 12π, √2, 1/3 |
| Arrondir au dixième | un seul chiffre après la virgule : 62,83 → 62,8 |

## Méthode
1. **Lis tout le sujet** au début (5 minutes) et commence par l'exercice qui te semble le plus facile.
2. **Surligne les données** et ce qui est demandé (unité, arrondi, valeur exacte).
3. Les questions sont souvent **enchaînées** : si tu ne trouves pas un résultat, utilise celui donné dans l'énoncé (« on admet que… ») ou le tien pour continuer.
4. **Rédige** chaque réponse : la propriété utilisée, le calcul, puis une **phrase de conclusion** avec l'unité.
5. **Contrôle** l'ordre de grandeur : un jardin de 240 m² ne coûte pas 3 € de gazon, une durée de remplissage n'est pas négative.
6. **Répartis ton temps** entre les exercices (1 h 40 en tout, soit une vingtaine de minutes chacun s'il y en a cinq) et ne reste pas bloqué sur une question.

## Exemple de rédaction attendue
>! **Question** : un terrain rectangulaire mesure 24 m sur 10 m. Calcule la longueur de sa diagonale.
>! **Rédaction** : le terrain ABCD est un rectangle, donc le triangle ABC est rectangle en B.
>! D'après le théorème de Pythagore : AC² = AB² + BC² = 24² + 10² = 576 + 100 = 676.
>! Donc AC = √676 = 26.
>! **La diagonale mesure 26 m.**

Dans cette rédaction, on trouve : la justification du triangle rectangle, le nom du théorème, le calcul et une phrase réponse avec l'unité. Écrire seulement « 26 » ne rapporterait qu'une partie des points.

## Erreurs fréquentes
- Donner un résultat sans aucun calcul : le correcteur ne peut pas valoriser ta démarche.
- Arrondir trop tôt (par exemple π ≈ 3) : garde les valeurs exactes ou la mémoire de la calculatrice jusqu'au bout.
- Oublier de convertir (min en h, L en m³, cm en m) avant de calculer.
- Répondre à une autre question que celle posée : relis la question avant d'écrire ta phrase de conclusion.

> **À retenir**
> - Partie 2 : 1 h 40, 14 points, calculatrice autorisée, exercices indépendants.
> - Justifie toujours : propriété, calcul, phrase de conclusion avec unité.
> - Une question ratée ne bloque pas la suite : utilise les résultats donnés.
> - Toute piste de recherche, même non aboutie, peut rapporter des points : écris-la.
`,
      textes: {
        jardin: `**Exercice : l'aménagement d'un jardin** (situation fictive)

M. Durand possède un terrain rectangulaire ABCD de longueur AB = 24 m et de largeur BC = 10 m. Il veut :
- tracer une allée droite qui relie les coins A et C, en posant une **bordure** tout le long de l'allée, d'un seul côté ;
- semer du **gazon** sur tout le terrain (on néglige la surface de l'allée).

**Tarifs du magasin**
| Article | Conditionnement | Prix |
|---|---|---|
| Bordure | élément de 1,20 m de long | 3,50 € l'élément |
| Semences de gazon | sac de 2 kg | 12,90 € le sac |

Sur le sac, on lit : « 1 kg de semences pour 35 m² ».
Le magasin accorde une **remise de 15 %** sur le montant total si celui-ci dépasse 100 €.`,
        basket: `**Exercice : la saison de Maya** (données fictives)

Maya joue dans l'équipe de basket de son collège. Voici le nombre de points qu'elle a marqués lors des 11 premiers matchs de la saison :

| Match | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Points | 12 | 18 | 9 | 22 | 15 | 18 | 19 | 11 | 18 | 14 | 20 |

Il reste un dernier match (le 12e) à jouer.`,
        cuve: `**Exercice : la cuve de récupération d'eau** (situation fictive)

Une cuve a la forme d'un **cylindre** de révolution, posé verticalement, de rayon intérieur 0,5 m et de hauteur 1,2 m. Elle est vide au départ.
On la remplit avec un tuyau dont le **débit** est constant : **15 litres par minute**.

Rappels : volume d'un cylindre = π × r² × h ; 1 m³ = 1 000 L.`,
      },
      exercices: [
        {
          type: "saisie",
          texte: "jardin",
          question: "Calcule la longueur AC de l'allée, en mètres.",
          reponses: ["26", "26 m"],
          explication: "Le triangle ABC est rectangle en B (le terrain est un rectangle). D'après le théorème de Pythagore : AC² = 24² + 10² = 576 + 100 = 676, donc AC = √676 = **26 m**.",
        },
        {
          type: "qcm",
          texte: "jardin",
          question: "L'allée mesure 26 m. Combien d'éléments de bordure M. Durand doit-il acheter au minimum ?",
          choix: ["21", "26", "22", "31"],
          reponse: 2,
          explication: "26 ÷ 1,2 ≈ 21,67. Avec 21 éléments, on ne couvre que 21 × 1,2 = 25,2 m : il en manque. Il faut arrondir **à l'unité supérieure** : **22 éléments** (26,4 m, on coupera le dernier).",
        },
        {
          type: "redaction",
          texte: "jardin",
          question: "1) Calcule l'aire du terrain, puis la masse de semences nécessaire, arrondie au dixième de kg.\n2) Combien de sacs de semences faut-il acheter ?\n3) Calcule le montant total des achats (22 éléments de bordure et les sacs de semences), avant remise.\n4) M. Durand bénéficie-t-il de la remise ? Calcule le prix qu'il paie finalement.",
          corrige: `1) Aire du terrain : 24 × 10 = **240 m²**.
1 kg couvre 35 m², donc il faut 240 ÷ 35 ≈ **6,9 kg** de semences (6,857…).

2) Un sac contient 2 kg : 6,857 ÷ 2 ≈ 3,4. Trois sacs (6 kg) ne suffisent pas : il faut **4 sacs** (8 kg).

3) Bordure : 22 × 3,50 = 77 €.
Semences : 4 × 12,90 = 51,60 €.
Total avant remise : 77 + 51,60 = **128,60 €**.

4) 128,60 € > 100 € : **il bénéficie de la remise** de 15 %.
Diminuer de 15 %, c'est multiplier par 0,85 : 128,60 × 0,85 = 109,31.
**M. Durand paie 109,31 €.**`,
        },
        {
          type: "saisie",
          texte: "basket",
          question: "Calcule le nombre moyen de points marqués par Maya sur ces 11 matchs.",
          reponses: ["16", "16 points"],
          explication: "Somme des points : 12 + 18 + 9 + 22 + 15 + 18 + 19 + 11 + 18 + 14 + 20 = 176. Moyenne : 176 ÷ 11 = **16 points** par match.",
        },
        {
          type: "saisie",
          texte: "basket",
          question: "Détermine la médiane de cette série de 11 valeurs.",
          reponses: ["18", "18 points"],
          explication: "Série rangée : 9 ; 11 ; 12 ; 14 ; 15 ; **18** ; 18 ; 18 ; 19 ; 20 ; 22. Il y a 11 valeurs : la médiane est la 6e, soit **18 points**.",
        },
        {
          type: "vf",
          texte: "basket",
          question: "Lors d'au moins la moitié des 11 matchs, Maya a marqué 18 points ou plus.",
          reponse: true,
          explication: "Vrai : la médiane vaut 18. Concrètement, elle a marqué 18 points ou plus lors de 6 matchs (18, 18, 18, 19, 20 et 22), et 6 est plus que la moitié de 11.",
        },
        {
          type: "redaction",
          texte: "basket",
          question: "1) Calcule l'étendue de la série. Que mesure-t-elle ?\n2) Quel est le pourcentage de matchs où Maya a marqué au moins 15 points ? Arrondis à l'unité.\n3) Maya veut terminer la saison (12 matchs) avec une moyenne de 17 points par match. Combien de points doit-elle marquer au 12e match ?\n4) Son entraîneur affirme : « Si Maya marque 16 points au dernier match, sa moyenne ne changera pas, mais sa médiane changera. » A-t-il raison ?",
          corrige: `1) Étendue : 22 − 9 = **13 points**. Elle mesure l'écart entre son meilleur et son moins bon match : les performances de Maya sont assez dispersées.

2) Matchs avec au moins 15 points : 15, 18, 18, 18, 19, 20, 22, soit 7 matchs sur 11.
7 ÷ 11 ≈ 0,636, soit environ **64 %** des matchs.

3) Pour une moyenne de 17 sur 12 matchs, il faut 17 × 12 = 204 points en tout.
Elle en a déjà 176 : il lui faut 204 − 176 = **28 points** au dernier match.
(Vérification : (176 + 28) ÷ 12 = 204 ÷ 12 = 17.)

4) Moyenne : (176 + 16) ÷ 12 = 192 ÷ 12 = 16 : **la moyenne ne change pas**.
Médiane : la série rangée de 12 valeurs est 9 ; 11 ; 12 ; 14 ; 15 ; **16 ; 18** ; 18 ; 18 ; 19 ; 20 ; 22. La médiane est la moyenne des 6e et 7e valeurs : (16 + 18) ÷ 2 = 17. Elle passe de 18 à 17 : **la médiane change**.
L'entraîneur **a raison**.`,
        },
        {
          type: "saisie",
          texte: "cuve",
          question: "Calcule le volume de la cuve, en litres, arrondi au litre.",
          reponses: ["942", "942 L", "942 litres"],
          explication: "V = π × 0,5² × 1,2 = 0,3π m³ ≈ 0,942 48 m³. Comme 1 m³ = 1 000 L, la cuve contient environ **942 L**.",
        },
        {
          type: "qcm",
          texte: "cuve",
          question: "La cuve contient 0,3π m³, soit environ 942,5 L. Combien de temps faut-il pour la remplir entièrement ?",
          choix: ["Environ 14 137 min", "Environ 1 h 3 min", "Environ 0,06 min", "Environ 125,7 min"],
          reponse: 1,
          explication: "t = volume ÷ débit = 942,5 ÷ 15 ≈ 62,8 min, soit environ 1 h 3 min (62 min 50 s). 14 137 vient d'une multiplication au lieu d'une division ; 0,06 min d'un volume laissé en m³ (0,942 ÷ 15) ; 125,7 min de l'oubli du carré du rayon (π × 0,5 × 1,2 m³ au lieu de π × 0,5² × 1,2).",
        },
        {
          type: "redaction",
          texte: "cuve",
          question: "On note t le temps de remplissage écoulé, en minutes, et h(t) la hauteur d'eau dans la cuve, en cm.\n1) Quel volume d'eau, en litres, contient la cuve au bout de 20 minutes ? Quelle est alors la hauteur d'eau, arrondie au cm ?\n2) Montre que h(t) = 6t/π, puis que h est une fonction linéaire. Donne son coefficient arrondi au centième.\n3) Au bout de combien de temps l'eau atteint-elle 1 m de hauteur ? Arrondis à la minute.\n4) Quelle est la nature de la représentation graphique de h ?",
          corrige: `1) Au bout de 20 min : 15 × 20 = **300 L** = 0,3 m³ = 300 000 cm³.
La base de la cuve est un disque de rayon 50 cm, d'aire π × 50² = 2 500π cm².
Hauteur d'eau : 300 000 ÷ 2 500π = 120/π ≈ **38 cm**.

2) Au bout de t minutes, la cuve contient 15t L = 15 000t cm³.
h(t) = 15 000t ÷ 2 500π = **6t/π**.
On peut l'écrire h(t) = (6/π) × t : c'est de la forme a × t, donc **h est une fonction linéaire**, de coefficient 6/π ≈ **1,91** (l'eau monte d'environ 1,91 cm par minute).

3) On résout 6t/π = 100 : t = 100π/6 ≈ 52,4. L'eau atteint 1 m au bout d'environ **52 minutes**.

4) h est linéaire : sa représentation graphique est une **droite passant par l'origine** (on s'arrête à t ≈ 62,8 min, quand la cuve est pleine, à 120 cm).`,
        },
      ],
    },

    // ───────────────────────── 20. Perspective cavalière et patrons
    {
      id: "perspective-patrons",
      titre: "Représenter l'espace : perspective cavalière et patrons",
      theme: "Espace et géométrie",
      cours: `
## Pourquoi représenter un solide ?
Un solide (cube, pavé, prisme, cylindre, pyramide, cône) est en trois dimensions ; ta feuille n'en a que deux. On utilise deux outils :
- la **perspective cavalière**, pour **dessiner** le solide tel qu'on le voit ;
- le **patron**, pour le **fabriquer** : c'est une figure plane d'un seul morceau qui, une fois découpée et pliée, donne le solide sans trou ni chevauchement.

## La perspective cavalière
On regarde le solide de face, un peu de côté et d'en haut. Les règles :
1. Les faces **frontales** (parallèles à la feuille, « face à toi ») sont dessinées **en vraie grandeur** (ou à l'échelle choisie) : un carré reste un carré, un angle droit reste droit.
2. Les arêtes **fuyantes** (qui « s'enfoncent » derrière la feuille) sont dessinées **parallèles entre elles**, avec un angle fixe par rapport à l'horizontale (souvent 30° ou 45°), et leur longueur est **multipliée par un coefficient de réduction** (souvent 0,5).
3. Des arêtes **parallèles** dans la réalité sont représentées par des segments **parallèles**.
4. Le **milieu** d'une arête est représenté par le milieu du segment dessiné ; des points alignés restent alignés.
5. Les arêtes **cachées** sont tracées en **pointillés**.

>! **Exemple** : dessiner un cube de 4 cm d'arête (angle 45°, coefficient 0,5).
>! - Face avant : un carré de 4 cm de côté, en vraie grandeur.
>! - Quatre fuyantes partent des sommets de ce carré, inclinées à 45°, de longueur 4 × 0,5 = **2 cm**.
>! - On relie leurs extrémités : la face arrière est un carré de 4 cm (frontale, elle aussi en vraie grandeur).
>! - Les trois arêtes qui partent du sommet arrière caché sont en pointillés.

Attention : sur le dessin, les faces du dessus et de côté du cube **ne sont pas des carrés** (ce sont des parallélogrammes), et certains angles droits n'apparaissent **pas** droits. On ne mesure donc jamais un angle ou une longueur fuyante directement sur le dessin.

## Les patrons
| Solide | Le patron contient |
|---|---|
| Cube | 6 carrés identiques |
| Pavé droit | 6 rectangles, identiques deux à deux |
| Prisme droit à base triangulaire | 2 triangles identiques (les bases) et 3 rectangles (les faces latérales) |
| Cylindre de rayon r et de hauteur h | 2 disques de rayon r et 1 rectangle de dimensions h et 2πr |
| Pyramide à base carrée | 1 carré et 4 triangles |
| Cône de rayon r et de génératrice g | 1 disque de rayon r et 1 secteur de disque de rayon g |

- **Cylindre** : la longueur du rectangle s'enroule autour du disque de base, elle est donc égale au **périmètre** de ce disque : **2 × π × r**.
- **Cône** : une **génératrice** est un segment qui va du sommet à un point du cercle de base ; on note g sa longueur. L'arc du secteur s'enroule autour de la base : sa longueur vaut aussi 2πr.
- **Pour aller plus loin (calcul non exigé au brevet)** : l'angle du secteur est proportionnel à la longueur de son arc (un disque entier de rayon g : 360° pour 2πg), donc **angle = 360° × 2πr ÷ 2πg = 360° × r ÷ g**.
- **Aire totale** d'un solide à faces planes (pavé, prisme, pyramide) = somme des aires des faces = **aire de son patron**.

>! **Exemple 1** : patron d'un cylindre de rayon 3 cm et de hauteur 10 cm : deux disques de rayon 3 cm et un rectangle de 10 cm sur 2 × π × 3 = 6π ≈ **18,8 cm**.
>! **Exemple 2** (pour aller plus loin) : patron d'un cône de rayon 4 cm et de génératrice 10 cm : un disque de rayon 4 cm et un secteur de rayon 10 cm d'angle 360 × 4 ÷ 10 = **144°**.
>! **Exemple 3** : aire du patron d'un pavé de 5 cm × 3 cm × 2 cm : 2 × (5 × 3 + 5 × 2 + 3 × 2) = 2 × 31 = **62 cm²**.

**Patrons du cube** : il en existe 11 différents. Pour tester un assemblage de 6 carrés, imagine le pliage autour d'une face qui reste au sol, et vérifie que deux carrés ne viennent jamais se poser au même endroit. Un bloc de 4 carrés formant un grand carré 2 × 2 n'est jamais dans un patron de cube (au sommet d'un cube ne se rejoignent que 3 faces), et 6 carrés tous alignés non plus.

## Erreurs fréquentes
- Dessiner les fuyantes en vraie grandeur ou dans des directions différentes.
- Oublier les pointillés pour les arêtes cachées.
- Croire qu'un angle droit du solide apparaît toujours droit sur le dessin.
- Prendre le diamètre au lieu du rayon pour la longueur 2πr du rectangle du cylindre.
- Oublier une face dans un patron (un prisme triangulaire a **5** faces, une pyramide à base carrée aussi).

> **À retenir**
> - Perspective cavalière : faces frontales en vraie grandeur ; fuyantes parallèles entre elles, inclinées, réduites (souvent × 0,5) ; parallélisme et milieux conservés ; arêtes cachées en pointillés.
> - Patron : une seule pièce qui se replie en solide, sans trou ni chevauchement.
> - Cylindre : rectangle de dimensions h et 2πr. Cône : un disque et un secteur de disque (pour aller plus loin : angle = 360° × r ÷ g).
> - Aire totale d'un solide à faces planes = somme des aires des faces.
`,
      exercices: [
        {
          type: "qcm",
          question: "En perspective cavalière, quelles faces d'un pavé droit sont dessinées en vraie grandeur ?",
          choix: ["Toutes les faces", "Seulement la face du dessus", "Aucune face", "Les faces frontales, parallèles à la feuille"],
          reponse: 3,
          explication: "Seules les faces **frontales** (face avant et face arrière) sont en vraie grandeur. Les autres faces sont déformées en parallélogrammes, car leurs arêtes fuyantes sont inclinées et réduites.",
        },
        {
          type: "vf",
          question: "En perspective cavalière, deux arêtes parallèles du solide sont représentées par deux segments parallèles.",
          reponse: true,
          explication: "Vrai : la perspective cavalière conserve le parallélisme (et les milieux). C'est pour cela que toutes les fuyantes sont tracées dans la même direction.",
        },
        {
          type: "saisie",
          question: "On dessine un cube de 6 cm d'arête en perspective cavalière, avec un coefficient de réduction de 0,5 pour les fuyantes. Quelle longueur faut-il tracer pour chaque arête fuyante, en cm ?",
          reponses: ["3", "3 cm"],
          explication: "Les fuyantes sont multipliées par le coefficient de réduction : 6 × 0,5 = **3 cm**. Les arêtes des faces frontales restent à 6 cm.",
        },
        {
          type: "vf",
          question: "Sur un dessin en perspective cavalière d'un cube, les six faces sont représentées par des carrés.",
          reponse: false,
          explication: "Faux : seules les deux faces frontales sont des carrés. Les faces du dessus, du dessous et des côtés sont dessinées en parallélogrammes (leurs angles droits n'apparaissent pas droits).",
        },
        {
          type: "qcm",
          question: "Le patron d'un cylindre de rayon 3 cm et de hauteur 10 cm comprend deux disques de rayon 3 cm et un rectangle. Quelles sont, environ, les dimensions de ce rectangle ?",
          choix: ["10 cm sur 18,8 cm", "10 cm sur 9,4 cm", "3 cm sur 10 cm", "10 cm sur 28,3 cm"],
          reponse: 0,
          explication: "La longueur du rectangle est le périmètre du disque de base : 2 × π × 3 = 6π ≈ 18,8 cm ; sa largeur est la hauteur, 10 cm. 9,4 cm (3π) oublie le facteur 2 ; 28,3 cm (π × 3²) est l'aire du disque, pas son périmètre.",
        },
        {
          type: "saisie",
          question: "Combien de faces compte le patron d'un prisme droit à base triangulaire ?",
          reponses: ["5", "5 faces"],
          explication: "Deux bases triangulaires et trois faces latérales rectangulaires (une par côté du triangle) : 2 + 3 = **5 faces**.",
        },
        {
          type: "vf",
          question: "Cet assemblage de 6 carrés (X = un carré, point = case vide) est un patron de cube :\n~~~\n. X . .\nX X X X\n. X . .\n~~~",
          reponse: true,
          explication: "Vrai : c'est la « croix ». Les 4 carrés en ligne s'enroulent pour former les faces avant, dessus, arrière et dessous ; les deux carrés accrochés de part et d'autre du 2e viennent fermer les côtés gauche et droit.",
        },
        {
          type: "vf",
          question: "Cet assemblage de 6 carrés (X = un carré, point = case vide) est un patron de cube :\n~~~\nX X . .\nX X X X\n~~~",
          reponse: false,
          explication: "Faux : les 4 carrés en haut à gauche forment un bloc 2 × 2. Or, à un sommet du cube, seulement 3 faces se rejoignent : en pliant, deux carrés viendraient se superposer, et une face resterait ouverte. (Concrètement, les deux carrés du haut ferment le même côté du cube.)",
        },
        {
          type: "saisie",
          question: "Pour aller plus loin (calcul non exigé au brevet). Un cône a pour rayon de base 4 cm et pour génératrice 10 cm. Dans son patron, quel est l'angle du secteur de disque, en degrés ?",
          reponses: ["144", "144°"],
          explication: "L'angle est proportionnel à la longueur de l'arc, qui vaut le périmètre de la base : angle = 360° × r ÷ g = 360 × 4 ÷ 10 = **144°**.",
        },
        {
          type: "redaction",
          question: "Une boîte en carton a la forme d'un pavé droit ABCDEFGH : la face avant ABFE mesure AB = 30 cm de long et AE = 10 cm de haut, et la profondeur est AD = 20 cm.\n1) On dessine la boîte en perspective cavalière à l'échelle 1/5, avec la face ABFE frontale, des fuyantes inclinées à 45° et un coefficient de réduction de 0,5. Quelles longueurs faut-il tracer pour la face avant, puis pour chaque fuyante ?\n2) Sur ce dessin, l'angle entre [AB] et la fuyante [AD] mesure-t-il 90° ? Et dans la réalité ?\n3) Calcule l'aire de carton nécessaire pour fabriquer la boîte fermée (sans les languettes de collage).\n4) Calcule la longueur de la diagonale [AC] du fond de la boîte, puis celle de la grande diagonale [AG], arrondies au dixième de cm.\n5) Peut-on ranger dans cette boîte fermée une baguette rigide de 37 cm, posée à plat sur le fond ? Et en la plaçant en biais selon [AG] ?",
          corrige: `1) À l'échelle 1/5, on divise les longueurs réelles par 5.
- Face avant (frontale, en vraie grandeur à l'échelle) : un rectangle de 30 ÷ 5 = **6 cm** sur 10 ÷ 5 = **2 cm**.
- Fuyantes : 20 ÷ 5 = 4 cm, puis × 0,5 : **2 cm**, inclinées à 45°.

2) Sur le dessin, l'angle entre [AB] et la fuyante [AD] mesure **45°** (ou 135° selon le sens de lecture) : il n'est pas droit. Dans la réalité, la face ABCD est un rectangle, donc l'angle DAB est **droit**. La perspective cavalière ne conserve pas les angles hors des faces frontales.

3) Le patron contient 6 rectangles, identiques deux à deux :
2 × (30 × 20 + 30 × 10 + 20 × 10) = 2 × (600 + 300 + 200) = **2 200 cm²**.

4) Le fond ABCD est un rectangle, donc le triangle ABC est rectangle en B, avec BC = AD = 20 cm. D'après le théorème de Pythagore :
AC² = 30² + 20² = 900 + 400 = 1 300, donc AC = √1 300 ≈ **36,1 cm**.
L'arête [CG] est verticale, perpendiculaire au fond : le triangle ACG est rectangle en C, avec CG = 10 cm. D'après le théorème de Pythagore :
AG² = AC² + CG² = 1 300 + 100 = 1 400, donc AG = √1 400 ≈ **37,4 cm**.

5) À plat sur le fond, la plus grande longueur disponible est la diagonale AC ≈ 36,1 cm < 37 cm : **impossible**.
En biais selon [AG] : 37 cm < 37,4 cm : **c'est possible**.`,
        },
      ],
    },

    // ───────────────────────── 21. Sujet complet type brevet (partie 2)
    {
      id: "sujet-complet-partie-2",
      titre: "Sujet complet type brevet : partie 2 en 1 h 40",
      theme: "Préparation au brevet",
      cours: `
## Comment utiliser ce chapitre
Ce chapitre est un **sujet d'entraînement complet** pour la partie 2 du brevet : **5 exercices indépendants**, à traiter en **1 h 40**, **avec calculatrice**, en rédigeant tes réponses. Les situations et les données sont **fictives**.

1. Prépare une copie double, ta calculatrice, ta règle et un **minuteur réglé sur 1 h 40**.
2. Lis les 5 énoncés (ils s'affichent au-dessus des exercices) et traite-les **sur ta copie**, dans l'ordre que tu veux.
3. Quand le temps est écoulé, arrête-toi. Ensuite seulement, fais les exercices de l'appli : les questions rapides vérifient tes premiers résultats, et les corrigés détaillés te permettent de **noter ta copie** toi-même.

## Gérer son temps
| Moment | Durée conseillée |
|---|---|
| Lecture de tout le sujet | 5 min |
| Chaque exercice | environ 18 min (5 × 18 = 1 h 30) |
| Relecture finale (unités, phrases réponses) | 5 min |

- Commence par l'exercice qui te paraît le plus facile, pour prendre confiance.
- Si tu bloques plus de 3 minutes sur une question, **passe à la suivante** : utilise le résultat donné dans l'énoncé, ou écris ta piste de recherche.
- Garde 5 minutes à la fin : une unité oubliée ou une phrase de conclusion manquante coûte des points facilement évitables.

## Se corriger
Pour chaque question, compare ta copie au corrigé et demande-toi :
- Ai-je trouvé le bon **résultat**, avec la bonne **unité** et le bon **arrondi** ?
- Ai-je **justifié** (propriété, théorème, calcul posé) ?
- Ai-je écrit une **phrase de conclusion** ?
Note les chapitres où tu as perdu des points : ce sont ceux à retravailler en priorité.

> **À retenir**
> - Partie 2 : 1 h 40, 14 points, avec calculatrice ; la rédaction et le raisonnement comptent pour 2 points.
> - Lecture 5 min, environ 18 min par exercice, relecture 5 min.
> - Une question ratée ne bloque pas la suite ; une démarche, même inachevée, peut rapporter des points.
`,
      textes: {
        bonbons: `**Exercice 1 : les sachets de bonbons** (situation fictive)

Un confiseur dispose de **252 caramels** et de **180 chocolats**. Il veut les répartir dans des sachets, en utilisant tous les bonbons, de sorte que :
- tous les sachets aient **la même composition** (même nombre de caramels, même nombre de chocolats) ;
- le nombre de sachets soit **le plus grand possible**.

1) Décompose 252 et 180 en produits de facteurs premiers.
2) Peut-il faire 24 sachets ? Justifie.
3) Combien de sachets peut-il faire au maximum ? Quelle est alors la composition de chaque sachet ?
4) Léo prend un bonbon au hasard dans un de ces sachets. Quelle est la probabilité que ce soit un caramel ?`,
        rampe: `**Exercice 2 : la rampe de skate** (situation fictive)

Une rampe de skate est représentée par le triangle ABC, **rectangle en B** : [AB] est au sol, avec **AB = 4,8 m**, et [BC] est vertical, avec **BC = 1,4 m**. La piste est le segment [AC].
Pour la solidité, on fixe un poteau vertical [DE], avec D sur [AB], E sur [AC] et **AD = 3 m**.

1) Calcule la longueur AC de la piste.
2) Calcule l'angle BAC, arrondi au degré.
3) Le club décide que, pour les débutants, l'angle entre la piste et le sol doit être inférieur à 20°. Cette rampe convient-elle ?
4) Calcule la hauteur DE du poteau, en cm.`,
        tarifs: `**Exercice 3 : la piscine** (tarifs fictifs)

La piscine municipale propose deux tarifs :
- **Tarif A** : 6 € l'entrée ;
- **Tarif B** : une carte annuelle à 30 €, puis 3,50 € l'entrée.

On note x le nombre d'entrées dans l'année, f(x) le prix payé avec le tarif A et g(x) le prix payé avec le tarif B, en euros.

1) Calcule le prix payé pour 10 entrées avec chaque tarif.
2) Exprime f(x) et g(x) en fonction de x. Laquelle de ces deux fonctions est linéaire ?
3) Résous l'équation 6x = 3,5x + 30. Que représente la solution ?
4) Inès prévoit d'aller 15 fois à la piscine. Quel tarif lui conseilles-tu ? Quel pourcentage économise-t-elle par rapport à l'autre tarif (arrondi à l'unité) ?`,
        electricite: `**Exercice 4 : la consommation d'électricité** (données fictives)

Une famille a relevé sa consommation d'électricité, en kWh, pendant six mois. Elle a saisi les données dans un tableur :

| | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| 1 | Mois | janv. | févr. | mars | avril | mai | juin | Total |
| 2 | Consommation (kWh) | 420 | 380 | 350 | 290 | 240 | 210 | |

1) Quelle formule faut-il écrire dans la cellule H2 pour calculer la consommation totale ?
2) Calcule la consommation moyenne par mois, puis la consommation médiane.
3) Calcule le pourcentage d'évolution de la consommation entre janvier et juin.
4) Le kWh coûte 0,25 € (prix fictif). Combien la famille a-t-elle payé pour ces six mois ?`,
        programmes: `**Exercice 5 : deux programmes de calcul**

**Programme A** :
- choisir un nombre ;
- lui ajouter 1 ;
- élever le résultat au carré ;
- soustraire le carré du nombre de départ.

**Programme B** : il est écrit avec Scratch.
~~~
quand drapeau vert cliqué
demander Choisis un nombre et attendre
mettre résultat à 2 × réponse + 1
dire résultat
~~~

1) Vérifie que, si l'on choisit 3, les deux programmes donnent 7.
2) Quel résultat donne le programme A si l'on choisit −5 ?
3) On appelle x le nombre choisi. Montre que les deux programmes donnent toujours le même résultat.
4) Quel nombre faut-il choisir pour obtenir 25 ?
5) Lucas affirme : « Avec un nombre entier au départ, le résultat est toujours un nombre impair. » A-t-il raison ?`,
      },
      exercices: [
        {
          type: "saisie",
          texte: "bonbons",
          question: "Question 3 : combien de sachets le confiseur peut-il faire au maximum ?",
          reponses: ["36", "36 sachets"],
          explication: "Le nombre de sachets doit diviser 252 et 180 : on cherche leur plus grand diviseur commun. 252 = 2² × 3² × 7 et 180 = 2² × 3² × 5, donc ce plus grand diviseur commun est 2² × 3² = **36**.",
        },
        {
          type: "redaction",
          texte: "bonbons",
          question: "Corrige ta copie de l'exercice 1 (les sachets de bonbons) : rédige les réponses aux questions 1 à 4.",
          corrige: `1) 252 = 2 × 126 = 2 × 2 × 63 = 2 × 2 × 3 × 21 = 2 × 2 × 3 × 3 × 7, donc **252 = 2² × 3² × 7**.
180 = 2 × 90 = 2 × 2 × 45 = 2 × 2 × 3 × 15 = 2 × 2 × 3 × 3 × 5, donc **180 = 2² × 3² × 5**.

2) 252 ÷ 24 = 10,5 : ce n'est pas un nombre entier, 24 ne divise pas 252. **Il ne peut pas faire 24 sachets** (on ne peut pas mettre 10,5 caramels par sachet).

3) Le nombre de sachets doit être un diviseur commun de 252 et 180. Le plus grand est 2² × 3² = **36** (les facteurs premiers communs).
Chaque sachet contient 252 ÷ 36 = **7 caramels** et 180 ÷ 36 = **5 chocolats**.

4) Un sachet contient 7 + 5 = 12 bonbons, dont 7 caramels. Chaque bonbon a la même chance d'être pris :
**P(caramel) = 7/12** (≈ 0,58).`,
        },
        {
          type: "saisie",
          texte: "rampe",
          question: "Question 1 : calcule la longueur AC de la piste, en mètres.",
          reponses: ["5", "5 m"],
          explication: "Le triangle ABC est rectangle en B. D'après le théorème de Pythagore : AC² = 4,8² + 1,4² = 23,04 + 1,96 = 25, donc AC = **5 m**.",
        },
        {
          type: "redaction",
          texte: "rampe",
          question: "Corrige ta copie de l'exercice 2 (la rampe de skate) : rédige les réponses aux questions 1 à 4.",
          corrige: `1) Le triangle ABC est rectangle en B. D'après le théorème de Pythagore :
AC² = AB² + BC² = 4,8² + 1,4² = 23,04 + 1,96 = 25, donc AC = √25 = **5 m**.
**La piste mesure 5 m.**

2) Dans le triangle ABC rectangle en B, [BC] est le côté opposé à l'angle BAC et [AB] le côté adjacent :
tan(BAC) = BC ÷ AB = 1,4 ÷ 4,8, donc l'angle BAC ≈ **16°** (16,26…).
(On peut aussi utiliser sin(BAC) = 1,4 ÷ 5 = 0,28, qui donne le même angle.)

3) 16° < 20° : **la rampe convient aux débutants**.

4) Le poteau [DE] et [BC] sont tous deux perpendiculaires au sol (AB) : ils sont donc **parallèles**.
Les points A, D, B sont alignés, ainsi que A, E, C. D'après le théorème de Thalès :
AD/AB = DE/BC, soit 3/4,8 = DE/1,4.
DE = 1,4 × 3 ÷ 4,8 = 0,875 m.
**Le poteau mesure 87,5 cm.**`,
        },
        {
          type: "qcm",
          texte: "tarifs",
          question: "Question 1 : quels prix paie-t-on pour 10 entrées ?",
          choix: ["Tarif A : 60 € ; tarif B : 35 €", "Tarif A : 60 € ; tarif B : 65 €", "Tarif A : 16 € ; tarif B : 65 €", "Tarif A : 60 € ; tarif B : 335 €"],
          reponse: 1,
          explication: "Tarif A : 6 × 10 = 60 €. Tarif B : 30 + 3,5 × 10 = 30 + 35 = 65 €. 16 € additionne 6 et 10 au lieu de multiplier ; 35 € oublie la carte annuelle ; 335 € vient de (30 + 3,5) × 10, qui compte la carte à chaque entrée.",
        },
        {
          type: "redaction",
          texte: "tarifs",
          question: "Corrige ta copie de l'exercice 3 (la piscine) : rédige les réponses aux questions 1 à 4.",
          corrige: `1) Tarif A : 6 × 10 = **60 €**. Tarif B : 30 + 3,50 × 10 = 30 + 35 = **65 €**.

2) **f(x) = 6x** et **g(x) = 3,5x + 30**.
f est de la forme ax : **f est linéaire** (le prix est proportionnel au nombre d'entrées). g est affine mais pas linéaire (à cause des 30 € de la carte).

3) 6x = 3,5x + 30
6x − 3,5x = 30
2,5x = 30
x = 30 ÷ 2,5 = **12**.
Pour **12 entrées**, les deux tarifs coûtent le même prix : 6 × 12 = 72 € (et 30 + 3,5 × 12 = 72 €).

4) Pour 15 entrées : tarif A : 6 × 15 = 90 € ; tarif B : 30 + 3,5 × 15 = 82,50 €.
**Je lui conseille le tarif B.**
Économie : 90 − 82,50 = 7,50 €, soit 7,50 ÷ 90 ≈ 0,083, environ **8 %** du prix avec le tarif A.`,
        },
        {
          type: "saisie",
          texte: "electricite",
          question: "Question 2 : calcule la consommation moyenne par mois, en kWh.",
          reponses: ["315", "315 kWh"],
          explication: "Total : 420 + 380 + 350 + 290 + 240 + 210 = 1 890 kWh. Moyenne : 1 890 ÷ 6 = **315 kWh** par mois.",
        },
        {
          type: "redaction",
          texte: "electricite",
          question: "Corrige ta copie de l'exercice 4 (la consommation d'électricité) : rédige les réponses aux questions 1 à 4.",
          corrige: `1) **=SOMME(B2:G2)** (ou =B2+C2+D2+E2+F2+G2). La cellule affiche 1 890.

2) Moyenne : 1 890 ÷ 6 = **315 kWh** par mois.
Médiane : série rangée 210 ; 240 ; 290 ; 350 ; 380 ; 420. Il y a 6 valeurs (nombre pair) : la médiane est la moyenne des 3e et 4e valeurs, (290 + 350) ÷ 2 = **320 kWh**.

3) Évolution : (210 − 420) ÷ 420 = −210 ÷ 420 = −0,5.
**La consommation a baissé de 50 %** entre janvier et juin (elle a été divisée par 2).

4) 1 890 × 0,25 = 472,5. **La famille a payé 472,50 €.**`,
        },
        {
          type: "saisie",
          texte: "programmes",
          question: "Question 2 : quel résultat donne le programme A si l'on choisit −5 ?",
          reponses: ["-9"],
          explication: "−5 + 1 = −4 ; (−4)² = 16 ; le carré du nombre de départ est (−5)² = 25 ; 16 − 25 = **−9**. (Le programme B donne bien 2 × (−5) + 1 = −9 aussi.)",
        },
        {
          type: "redaction",
          texte: "programmes",
          question: "Corrige ta copie de l'exercice 5 (deux programmes de calcul) : rédige les réponses aux questions 1 à 5.",
          corrige: `1) Programme A : 3 + 1 = 4 ; 4² = 16 ; 16 − 3² = 16 − 9 = **7**.
Programme B : 2 × 3 + 1 = **7**. Les deux programmes donnent bien 7.

2) −5 + 1 = −4 ; (−4)² = 16 ; 16 − (−5)² = 16 − 25 = **−9**.

3) Programme A : (x + 1)² − x² = x² + 2x + 1 − x² = **2x + 1** (identité remarquable (a + b)² = a² + 2ab + b²).
Programme B : **2x + 1**.
Les deux expressions sont égales pour tout nombre x : **les deux programmes donnent toujours le même résultat**.

4) On résout 2x + 1 = 25 : 2x = 24, donc **x = 12**.
(Vérification : 13² − 12² = 169 − 144 = 25.)

5) Si x est un entier, 2x est un nombre pair, et 2x + 1 est le nombre qui suit un nombre pair : il est **impair**. **Lucas a raison.**`,
        },
      ],
    },
  ],
};
