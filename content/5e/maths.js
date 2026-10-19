export default {
  chapitres: [
    // ───────────────────────── 1. Nombres relatifs et repérage
    {
      id: "nombres-relatifs",
      titre: "Nombres relatifs et repérage",
      theme: "Nombres et calculs",
      cours: `
## Qu'est-ce qu'un nombre relatif ?
Un **nombre relatif** est un nombre muni d'un **signe** : + (positif) ou − (négatif).
Il est formé d'un signe et d'une **distance à zéro**.

- +5 (ou simplement 5) est un nombre positif ; sa distance à zéro est 5.
- −3,2 est un nombre négatif ; sa distance à zéro est 3,2.
- 0 est le seul nombre à la fois positif et négatif.

Deux nombres qui ont la même distance à zéro mais des signes contraires sont **opposés** : 7 et −7 sont opposés.

La distance à zéro d'un nombre s'appelle aussi sa **valeur absolue** : la valeur absolue de −3,2 est 3,2 ; celle de 5 est 5.
Un nombre **strictement positif** est positif et différent de 0 (comme 5) ; un nombre **strictement négatif** est négatif et différent de 0 (comme −3,2).

## Repérage sur une droite graduée
Sur une droite graduée, chaque point est repéré par un nombre relatif appelé son **abscisse**. Les nombres positifs sont à droite de l'origine O (abscisse 0), les négatifs à gauche.

>! **Exemple** : sur une droite graduée de 1 en 1, le point A d'abscisse −3 est à 3 graduations à gauche de O ; le point B d'abscisse 2 est à 2 graduations à droite. La distance AB vaut 2 − (−3) = 5.

## Repérage dans le plan
Un **repère** est formé de deux droites graduées perpendiculaires de même origine O :
- l'axe horizontal est l'axe des **abscisses** ;
- l'axe vertical est l'axe des **ordonnées**.

Un point M est repéré par ses **coordonnées** (x ; y) : on lit **toujours l'abscisse en premier**, puis l'ordonnée.

| Position du point | Signe de x | Signe de y |
|---|---|---|
| en haut à droite | + | + |
| en haut à gauche | − | + |
| en bas à gauche | − | − |
| en bas à droite | + | − |

## Comparer des nombres relatifs
- Un nombre négatif est toujours **plus petit** qu'un nombre positif : −8 < 1.
- Entre deux nombres positifs, le plus petit est celui qui a la plus petite distance à zéro.
- Entre deux nombres **négatifs**, le plus petit est celui qui a la **plus grande** distance à zéro : −7 < −2.

>! **Astuce** : sur la droite graduée, le plus petit nombre est toujours le plus à gauche. Pense au thermomètre : −7 °C est plus froid que −2 °C.

## Additionner des nombres relatifs
- **Même signe** : on garde le signe commun et on **additionne** les distances à zéro. (−4) + (−6) = −10.
- **Signes contraires** : on prend le signe de celui qui a la plus grande distance à zéro et on **soustrait** les distances à zéro. (−9) + (+4) = −5 ; (+9) + (−4) = +5.
- La somme de deux nombres opposés est nulle : (−7) + (+7) = 0.

## Soustraire un nombre relatif
**Soustraire un nombre revient à additionner son opposé.**

>! **Exemples** :
>! (+3) − (+8) = (+3) + (−8) = −5
>! (−6) − (−9) = (−6) + (+9) = +3
>! (−2) − (+5) = (−2) + (−5) = −7

## Calculer une expression avec plusieurs termes
Pour calculer −5 + 8 − 12 + 3, tu peux :
1. calculer de gauche à droite : −5 + 8 = 3 ; 3 − 12 = −9 ; −9 + 3 = −6 ;
2. ou regrouper les positifs (8 + 3 = 11) et les négatifs (−5 − 12 = −17), puis 11 − 17 = −6.

> **À retenir**
> - Un relatif = un signe + une distance à zéro.
> - Coordonnées : (abscisse ; ordonnée), l'abscisse d'abord.
> - Entre deux négatifs, le plus petit est le plus éloigné de zéro.
> - Même signe : on additionne les distances ; signes contraires : on les soustrait et on garde le signe du « plus fort ».
> - Soustraire, c'est ajouter l'opposé.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel est le plus petit de ces nombres ?",
          choix: ["−3", "−7", "2", "−0,5"],
          reponse: 1,
          explication: "Entre nombres négatifs, le plus petit est celui qui a la plus grande distance à zéro : −7 (distance 7) est plus petit que −3 et −0,5. Et 2, positif, est plus grand que tous les négatifs.",
        },
        {
          type: "vf",
          question: "−4 > −2",
          reponse: false,
          explication: "Faux : −4 est plus éloigné de zéro que −2, donc il est plus petit. On a −4 < −2 (−4 est plus à gauche sur la droite graduée).",
        },
        {
          type: "saisie",
          question: "Calcule (−8) + (+5).",
          reponses: ["-3", "−3"],
          explication: "Signes contraires : on soustrait les distances à zéro, 8 − 5 = 3, et on garde le signe de −8 (la plus grande distance). Résultat : −3.",
        },
        {
          type: "saisie",
          question: "Calcule (−6) − (−9).",
          reponses: ["3", "+3"],
          explication: "Soustraire −9, c'est ajouter son opposé +9 : (−6) + (+9) = +3.",
        },
        {
          type: "qcm",
          question: "Dans un repère, le point A(−3 ; 2) se trouve :",
          choix: ["en haut à droite", "en bas à gauche", "en bas à droite", "en haut à gauche"],
          reponse: 3,
          explication: "L'abscisse −3 est négative (à gauche de l'axe des ordonnées) et l'ordonnée 2 est positive (au-dessus de l'axe des abscisses) : A est en haut à gauche.",
        },
        {
          type: "saisie",
          question: "Calcule A = −5 + 8 − 12 + 3 − 1.",
          reponses: ["-7", "−7"],
          explication: "Positifs : 8 + 3 = 11. Négatifs : −5 − 12 − 1 = −18. Donc A = 11 − 18 = −7.",
        },
        {
          type: "qcm",
          question: "Sur une droite graduée, A a pour abscisse −4 et B a pour abscisse 3. Quelle est la distance AB ?",
          choix: ["1", "−7", "7", "12"],
          reponse: 2,
          explication: "La distance entre deux points est la différence « grand − petit » des abscisses : 3 − (−4) = 3 + 4 = 7. Une distance n'est jamais négative.",
        },
        {
          type: "vf",
          question: "(−2) − (+5) = +3",
          reponse: false,
          explication: "Faux : (−2) − (+5) = (−2) + (−5) = −7. Les deux nombres sont négatifs, on additionne les distances à zéro.",
        },
        {
          type: "redaction",
          question: "1) Range dans l'ordre croissant : −3,5 ; 2 ; −1 ; 0 ; −4,2 ; 1,5.\n2) Un matin, il fait −4 °C. À midi, la température a augmenté de 7 °C, puis elle baisse de 9 °C jusqu'au soir. Calcule la température de midi puis celle du soir.\n3) Calcule B = (−7) − (+3) + (−2) − (−10).",
          corrige: `1) Les négatifs sont les plus petits, et parmi eux le plus éloigné de zéro est le plus petit :
**−4,2 < −3,5 < −1 < 0 < 1,5 < 2**.

2) Midi : −4 + 7 = **3 °C**.
Soir : 3 − 9 = 3 + (−9) = **−6 °C**.

3) On transforme les soustractions en additions de l'opposé :
B = (−7) + (−3) + (−2) + (+10)
B = (−12) + (+10)
**B = −2**`,
        },
        {
          type: "qcm",
          question: "Quelle est la valeur absolue (distance à zéro) de −6,5 ?",
          choix: ["6,5", "−6,5", "0", "13"],
          reponse: 0,
          explication: "La valeur absolue d'un nombre est sa distance à zéro, qui n'est jamais négative : celle de −6,5 est 6,5.",
        },
      ],
    },

    // ───────────────────────── 2. Fractions
    {
      id: "fractions",
      titre: "Les fractions",
      theme: "Nombres et calculs",
      cours: `
## Définition
Si a et b sont deux nombres **entiers** (b ≠ 0), la **fraction** a/b est le nombre qui, multiplié par b, donne a. C'est aussi le **quotient** a ÷ b. (Quand a et b sont des nombres quelconques, par exemple 2,5/4, on parle plus généralement de **quotient**.)
- a est le **numérateur**, b le **dénominateur**.
- 3/4 = 3 ÷ 4 = 0,75.

Une fraction peut représenter une **part** d'un tout : 3/4 d'une pizza, c'est la pizza coupée en 4 parts égales dont on prend 3.

## Égalité de fractions
**On ne change pas une fraction en multipliant (ou divisant) son numérateur et son dénominateur par un même nombre non nul.**

2/3 = (2 × 5)/(3 × 5) = 10/15

## Simplifier une fraction
Simplifier, c'est diviser numérateur et dénominateur par un même diviseur commun. Une fraction est **irréductible** quand on ne peut plus la simplifier.

>! **Exemple** : 18/24. 18 et 24 sont divisibles par 6 : 18/24 = (18 ÷ 6)/(24 ÷ 6) = 3/4. On peut aussi simplifier en plusieurs étapes : 18/24 = 9/12 = 3/4.

Utilise les critères de divisibilité (par 2, 3, 5, 9, 10) pour trouver les diviseurs communs.

## Comparer des fractions
- **Même dénominateur** : la plus grande est celle qui a le plus grand numérateur. 5/7 > 3/7.
- **Dénominateurs différents** : on les met au **même dénominateur** puis on compare les numérateurs.
- Une fraction est plus grande que 1 si son numérateur est plus grand que son dénominateur.

>! **Exemple** : comparer 3/4 et 7/10. Un multiple commun de 4 et 10 est 20.
>! 3/4 = 15/20 et 7/10 = 14/20. Comme 15 > 14, **3/4 > 7/10**.

## Additionner et soustraire
- **Même dénominateur** : on additionne (ou soustrait) les numérateurs et on **garde** le dénominateur. 3/7 + 2/7 = 5/7.
- **Dénominateurs multiples l'un de l'autre** : on transforme d'abord une fraction pour avoir le même dénominateur.

>! **Exemple** : 5/6 − 1/3. Comme 6 = 3 × 2 : 1/3 = 2/6.
>! 5/6 − 2/6 = 3/6 = 1/2.

- **Dénominateurs quelconques** : on cherche un **multiple commun** aux deux dénominateurs (le produit des deux dénominateurs convient toujours) et on transforme les **deux** fractions.

>! **Exemple** : 2/5 + 1/4. Un multiple commun de 5 et 4 est 20.
>! 2/5 = 8/20 et 1/4 = 5/20, donc 2/5 + 1/4 = 8/20 + 5/20 = 13/20.

Attention : on n'additionne **jamais** les dénominateurs ! 1/2 + 1/2 = 2/2 = 1, et non 2/4.

## Fraction d'une quantité
Prendre a/b d'une quantité, c'est **multiplier** cette quantité par a/b :
(a/b) × Q = (Q ÷ b) × a.

>! **Exemple** : 2/5 de 35 € = (35 ÷ 5) × 2 = 7 × 2 = 14 €.

> **À retenir**
> - a/b = a ÷ b ; on peut multiplier ou diviser le haut et le bas par le même nombre non nul.
> - Pour comparer, additionner ou soustraire : même dénominateur d'abord !
> - On additionne les numérateurs, jamais les dénominateurs.
> - a/b d'une quantité Q = Q ÷ b × a.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelle est la forme irréductible de 18/24 ?",
          choix: ["9/12", "3/4", "6/8", "2/3"],
          reponse: 1,
          explication: "18 = 6 × 3 et 24 = 6 × 4, donc 18/24 = 3/4. 9/12 et 6/8 sont égales mais pas irréductibles (on peut encore simplifier par 3 ou par 2). 2/3 n'est pas égale à 18/24.",
        },
        {
          type: "vf",
          question: "2/3 = 10/15",
          reponse: true,
          explication: "Vrai : on multiplie le numérateur et le dénominateur par 5 : (2 × 5)/(3 × 5) = 10/15.",
        },
        {
          type: "saisie",
          question: "Calcule 3/7 + 2/7.",
          reponses: ["5/7"],
          explication: "Même dénominateur : on additionne les numérateurs, 3 + 2 = 5, et on garde 7. Résultat : 5/7.",
        },
        {
          type: "saisie",
          question: "Calcule 5/6 − 1/3 et donne le résultat sous forme irréductible.",
          reponses: ["1/2"],
          explication: "1/3 = 2/6, donc 5/6 − 2/6 = 3/6 = 1/2 (on simplifie par 3 ; 3/6 n'est pas irréductible).",
        },
        {
          type: "qcm",
          question: "Compare 3/4 et 7/10.",
          choix: ["3/4 < 7/10", "3/4 = 7/10", "3/4 > 7/10", "On ne peut pas comparer"],
          reponse: 2,
          explication: "Au dénominateur 20 : 3/4 = 15/20 et 7/10 = 14/20. Comme 15 > 14, 3/4 > 7/10. (Vérification : 0,75 > 0,7.)",
        },
        {
          type: "saisie",
          question: "Combien valent les 2/5 de 35 € ? (en euros)",
          reponses: ["14", "14 €", "14€", "14 euros"],
          explication: "35 ÷ 5 = 7, puis 7 × 2 = 14. Les 2/5 de 35 € valent 14 €.",
        },
        {
          type: "saisie",
          question: "Calcule 7/4 + 3/8.",
          reponses: ["17/8", "2,125", "2.125"],
          explication: "8 = 4 × 2, donc 7/4 = 14/8. Ensuite 14/8 + 3/8 = 17/8 (irréductible car 17 est premier).",
        },
        {
          type: "vf",
          question: "1/3 + 1/3 = 2/6",
          reponse: false,
          explication: "Faux : on n'additionne pas les dénominateurs. 1/3 + 1/3 = 2/3. D'ailleurs 2/6 = 1/3, ce qui ne peut pas être le double de 1/3.",
        },
        {
          type: "redaction",
          question: "Léa dépense 1/3 de son argent de poche pour un livre et 1/6 pour une place de cinéma.\n1) Quelle fraction de son argent a-t-elle dépensée ?\n2) Quelle fraction lui reste-t-il ?\n3) Elle avait 48 €. Combien a coûté le livre ? la place ? Combien lui reste-t-il ?",
          corrige: `1) On met au même dénominateur 6 : 1/3 = 2/6.
1/3 + 1/6 = 2/6 + 1/6 = 3/6 = **1/2**. Elle a dépensé la moitié de son argent.

2) La totalité correspond à 1 = 2/2. Il lui reste 2/2 − 1/2 = **1/2**.

3) Livre : 1/3 de 48 € = 48 ÷ 3 = **16 €**.
Cinéma : 1/6 de 48 € = 48 ÷ 6 = **8 €**.
Il lui reste 48 − 16 − 8 = **24 €**, ce qui correspond bien à 1/2 de 48 €.`,
        },
      ],
    },

    // ───────────────────────── 3. Priorités et calcul littéral
    {
      id: "priorites-calcul-litteral",
      titre: "Priorités opératoires et calcul littéral",
      theme: "Nombres et calculs",
      cours: `
## Priorités opératoires
Dans un calcul, on effectue dans l'ordre :
1. les calculs **entre parenthèses** (en commençant par les plus intérieures) ;
2. les **multiplications et divisions**, de gauche à droite ;
3. les **additions et soustractions**, de gauche à droite.

>! **Exemples** :
>! 7 + 3 × 4 = 7 + 12 = 19 (et non 10 × 4 !)
>! 20 − 2 × (3 + 4) = 20 − 2 × 7 = 20 − 14 = 6
>! (18 − 6) ÷ 3 + 2 × 5 = 12 ÷ 3 + 10 = 4 + 10 = 14

Un trait de fraction joue le rôle de parenthèses : (8 + 4)/(5 − 2) = 12/3 = 4.

## Expressions littérales
Une **expression littérale** contient une ou plusieurs lettres qui désignent des nombres.

Exemple : le périmètre d'un rectangle de longueur L et de largeur l est P = 2 × (L + l).

**Conventions d'écriture** : on peut supprimer le signe × devant une lettre ou une parenthèse.
- 3 × x s'écrit 3x ; a × b s'écrit ab ; 4 × (x + 1) s'écrit 4(x + 1).
- x × x s'écrit x² (« x au carré ») ; x × x × x s'écrit x³.
- 1x s'écrit x.

## Calculer la valeur d'une expression
On **remplace** la lettre par sa valeur (en rétablissant les signes ×), puis on calcule en respectant les priorités.

>! **Exemple** : A = 4x − 7 pour x = 3.
>! A = 4 × 3 − 7 = 12 − 7 = 5.
>! B = 2x² + 1 pour x = 5 : B = 2 × 5² + 1 = 2 × 25 + 1 = 51.

## Distributivité simple
Pour tous nombres k, a et b :
- **k × (a + b) = k × a + k × b**
- **k × (a − b) = k × a − k × b**

**Développer**, c'est transformer un produit en somme : 5(x + 3) = 5x + 15.
**Factoriser**, c'est l'inverse : transformer une somme en produit en repérant le **facteur commun** : 6x + 9 = 3 × 2x + 3 × 3 = 3(2x + 3).

La distributivité sert aussi au calcul mental : 7 × 102 = 7 × 100 + 7 × 2 = 714 ; 9 × 98 = 9 × 100 − 9 × 2 = 882.

## Réduire une expression
On regroupe les termes « de même nature » : 3x + 5 + 2x − 1 = 5x + 4. Attention : 3x + 2 ne se réduit pas ! Et 2x + 3x² non plus.

## Tester une égalité
Une égalité avec une lettre (par exemple 2x + 3 = 5x − 6) peut être **vraie pour certaines valeurs et fausse pour d'autres**. Pour la tester, on calcule **séparément** chaque membre.

>! **Exemple** : pour x = 3 : 2 × 3 + 3 = 9 et 5 × 3 − 6 = 9. Les deux membres sont égaux : l'égalité est **vraie** pour x = 3.
>! Pour x = 1 : 2 × 1 + 3 = 5 et 5 × 1 − 6 = −1 : l'égalité est **fausse** pour x = 1.

Pour prouver qu'une égalité est **toujours** vraie, il faut un calcul littéral (développer, réduire). Pour prouver qu'elle est fausse, un seul contre-exemple suffit.

> **À retenir**
> - Ordre : parenthèses, puis × et ÷, puis + et −.
> - 3x = 3 × x ; x² = x × x.
> - k(a + b) = ka + kb : développer ↔ factoriser.
> - Tester une égalité : calculer chaque membre séparément.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule 7 + 3 × 4.",
          reponses: ["19"],
          explication: "La multiplication est prioritaire : 3 × 4 = 12, puis 7 + 12 = 19.",
        },
        {
          type: "saisie",
          question: "Calcule 20 − 2 × (3 + 4).",
          reponses: ["6"],
          explication: "Parenthèses d'abord : 3 + 4 = 7 ; puis la multiplication : 2 × 7 = 14 ; enfin 20 − 14 = 6.",
        },
        {
          type: "qcm",
          question: "Combien vaut (18 − 6) ÷ 3 + 2 × 5 ?",
          choix: ["14", "30", "11", "24"],
          reponse: 0,
          explication: "(18 − 6) = 12 ; 12 ÷ 3 = 4 ; 2 × 5 = 10 ; 4 + 10 = 14.",
        },
        {
          type: "vf",
          question: "L'expression 3x² signifie 3 × x × x.",
          reponse: true,
          explication: "Vrai : 3x² = 3 × x². Le carré ne porte que sur x, pas sur 3. Pour x = 2 : 3 × 4 = 12 (et non 36).",
        },
        {
          type: "saisie",
          question: "Calcule la valeur de 4x − 7 pour x = 3.",
          reponses: ["5"],
          explication: "4 × 3 − 7 = 12 − 7 = 5.",
        },
        {
          type: "qcm",
          question: "Quel est le développement de 5(x + 3) ?",
          choix: ["5x + 3", "5x + 8", "5x + 15", "8x"],
          reponse: 2,
          explication: "On distribue 5 sur chaque terme : 5 × x + 5 × 3 = 5x + 15. L'erreur classique « 5x + 3 » oublie de multiplier le 3.",
        },
        {
          type: "vf",
          question: "L'égalité 2x + 3 = 5x − 6 est vraie pour x = 3.",
          reponse: true,
          explication: "Vrai : 2 × 3 + 3 = 9 et 5 × 3 − 6 = 9. Les deux membres sont égaux.",
        },
        {
          type: "saisie",
          question: "Factorise 6x + 9 (écris le résultat sous la forme k(…)).",
          reponses: ["3(2x+3)", "3(2x + 3)", "3×(2x+3)", "3 × (2x + 3)", "3*(2x+3)", "3(3+2x)"],
          explication: "6x = 3 × 2x et 9 = 3 × 3 : le facteur commun est 3. Donc 6x + 9 = 3(2x + 3). Vérifie en redéveloppant : 3 × 2x + 3 × 3 = 6x + 9.",
        },
        {
          type: "redaction",
          question: "Voici un programme de calcul :\n• Choisir un nombre.\n• Ajouter 4.\n• Multiplier le résultat par 3.\n• Soustraire 12.\n1) Applique ce programme à 5, puis à −2.\n2) Que remarques-tu ?\n3) Démontre ta conjecture en notant x le nombre de départ.",
          corrige: `1) Avec 5 : 5 + 4 = 9 ; 9 × 3 = 27 ; 27 − 12 = **15**.
Avec −2 : −2 + 4 = 2 ; 2 × 3 = 6 ; 6 − 12 = **−6**.

2) On remarque que le résultat est le **triple** du nombre de départ (15 = 3 × 5 et −6 = 3 × (−2)).

3) Avec x : x + 4, puis 3(x + 4), puis 3(x + 4) − 12.
On développe : 3(x + 4) − 12 = 3x + 12 − 12 = **3x**.
Le résultat est donc toujours le triple du nombre choisi, quel que soit ce nombre.

>! Deux exemples ne suffisent pas à prouver : seule l'étape 3 (calcul littéral) démontre la propriété.`,
        },
      ],
    },

    // ───────────────────────── 4. Divisibilité et nombres premiers
    {
      id: "divisibilite-premiers",
      titre: "Divisibilité et nombres premiers",
      theme: "Nombres et calculs",
      cours: `
## Multiples et diviseurs
Si a = b × k avec k entier, on dit que :
- a est un **multiple** de b ;
- b est un **diviseur** de a ;
- a est **divisible** par b (la division euclidienne de a par b tombe juste : le reste est 0).

Exemple : 42 = 6 × 7, donc 42 est un multiple de 6 et de 7 ; 6 et 7 sont des diviseurs de 42.

## Division euclidienne
Diviser a par b (b ≠ 0), c'est trouver q et r entiers tels que **a = b × q + r** avec **r < b**.
Exemple : 47 = 6 × 7 + 5 (quotient 7, reste 5). 47 n'est pas divisible par 6.

## Critères de divisibilité
| Divisible par | si… | Exemple |
|---|---|---|
| 2 | son chiffre des unités est 0, 2, 4, 6 ou 8 | 358 |
| 5 | son chiffre des unités est 0 ou 5 | 745 |
| 10 | son chiffre des unités est 0 | 1 230 |
| 3 | la somme de ses chiffres est divisible par 3 | 315 : 3 + 1 + 5 = 9 |
| 9 | la somme de ses chiffres est divisible par 9 | 7 281 : 7 + 2 + 8 + 1 = 18 |
| 4 (pour aller plus loin) | le nombre formé par ses deux derniers chiffres est divisible par 4 | 1 324 (24) |

## Liste des diviseurs
Pour trouver tous les diviseurs d'un nombre, on teste 1, 2, 3… et on les trouve **par paires**.

>! **Exemple** : diviseurs de 36.
>! 36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6.
>! Diviseurs : 1, 2, 3, 4, 6, 9, 12, 18, 36 (9 diviseurs).

## Nombres premiers (pour aller plus loin)
*Dans le programme de 5e entré en vigueur en 2026, les nombres premiers et la décomposition en facteurs premiers sont un prolongement (non exigible) : ils seront travaillés en 4e et 3e. Les critères de divisibilité, eux, sont à connaître.*

Un nombre entier est **premier** s'il a **exactement deux diviseurs** : 1 et lui-même.
- 1 n'est **pas** premier (un seul diviseur).
- 2 est le seul nombre premier pair.
- Nombres premiers inférieurs à 50 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.

>! **Tester si un nombre est premier** : on essaie de le diviser par 2, 3, 5, 7, 11… tant que le carré du diviseur reste inférieur ou égal au nombre. Exemple : 91 = 7 × 13, donc 91 n'est **pas** premier (piège classique !).

## Décomposition en produit de facteurs premiers
Tout entier supérieur à 1 se décompose (d'une seule façon) en produit de nombres premiers. On divise successivement par les nombres premiers 2, 3, 5, 7…

>! **Exemple** : 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = **2² × 3 × 5**.

## Application : simplifier une fraction
En décomposant numérateur et dénominateur, on voit les facteurs communs.
84/126 : 84 = 2 × 2 × 3 × 7 et 126 = 2 × 3 × 3 × 7. On simplifie par 2 × 3 × 7 = 42 : **84/126 = 2/3**.

> **À retenir**
> - a divisible par b ⟺ le reste de la division de a par b est 0.
> - Critères : 2, 5, 10 (dernier chiffre) ; 3 et 9 (somme des chiffres).
> - Pour simplifier une fraction, on divise le haut et le bas par un diviseur commun (repéré grâce aux critères).
> - Pour aller plus loin : premier = exactement deux diviseurs (1 et lui-même) ; 1 n'est pas premier.
`,
      exercices: [
        {
          type: "qcm",
          question: "Lequel de ces nombres est divisible par 3 ?",
          choix: ["124", "230", "315", "412"],
          reponse: 2,
          explication: "Somme des chiffres : 1 + 2 + 4 = 7 ; 2 + 3 + 0 = 5 ; 3 + 1 + 5 = 9 ; 4 + 1 + 2 = 7. Seul 9 est divisible par 3, donc seul 315 est divisible par 3.",
        },
        {
          type: "vf",
          question: "(Pour aller plus loin) 1 est un nombre premier.",
          reponse: false,
          explication: "Faux : un nombre premier a exactement deux diviseurs distincts. 1 n'en a qu'un (lui-même).",
        },
        {
          type: "saisie",
          question: "(Pour aller plus loin) Combien y a-t-il de nombres premiers inférieurs à 20 ?",
          reponses: ["8", "huit"],
          explication: "Ce sont 2, 3, 5, 7, 11, 13, 17 et 19 : il y en a 8.",
        },
        {
          type: "qcm",
          question: "(Pour aller plus loin) Quelle est la décomposition de 60 en produit de facteurs premiers ?",
          choix: ["4 × 15", "2² × 3 × 5", "2 × 3 × 10", "6 × 10"],
          reponse: 1,
          explication: "60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. Les autres écritures sont justes mais contiennent des facteurs non premiers (4, 15, 10, 6).",
        },
        {
          type: "vf",
          question: "(Pour aller plus loin) 91 est un nombre premier.",
          reponse: false,
          explication: "Faux : 91 = 7 × 13. Il a donc d'autres diviseurs que 1 et 91.",
        },
        {
          type: "saisie",
          question: "Combien le nombre 18 a-t-il de diviseurs ?",
          reponses: ["6", "six"],
          explication: "18 = 1 × 18 = 2 × 9 = 3 × 6. Diviseurs : 1, 2, 3, 6, 9, 18. Il y en a 6.",
        },
        {
          type: "saisie",
          question: "Écris 84/126 sous forme irréductible.",
          reponses: ["2/3"],
          explication: "Avec les critères de divisibilité, on simplifie par étapes : 84 et 126 sont pairs, 84/126 = 42/63 ; 4 + 2 = 6 et 6 + 3 = 9, donc divisibles par 3 : 42/63 = 14/21 ; enfin 14 = 7 × 2 et 21 = 7 × 3 : 14/21 = 2/3. (Pour aller plus loin : 84 = 2² × 3 × 7 et 126 = 2 × 3² × 7, on simplifie directement par 2 × 3 × 7 = 42.)",
        },
        {
          type: "qcm",
          question: "Quel est le reste de la division euclidienne de 47 par 6 ?",
          choix: ["7", "1", "6", "5"],
          reponse: 3,
          explication: "47 = 6 × 7 + 5, et 5 < 6. Le quotient est 7 et le reste 5.",
        },
        {
          type: "redaction",
          question: "Un fleuriste dispose de 84 roses et 126 tulipes. Il veut composer des bouquets tous identiques (même nombre de roses et même nombre de tulipes dans chaque bouquet) en utilisant toutes ses fleurs.\n1) Peut-il faire 7 bouquets ? 12 bouquets ? Justifie.\n2) Quel est le nombre maximal de bouquets ? Quelle est alors la composition de chaque bouquet ?",
          corrige: `1) Le nombre de bouquets doit être un **diviseur commun** de 84 et de 126.
- 84 = 7 × 12 et 126 = 7 × 18 : **oui**, 7 bouquets sont possibles (12 roses et 18 tulipes chacun).
- 126 ÷ 12 = 10,5 n'est pas entier : **non**, 12 bouquets sont impossibles.

2) On cherche le plus grand diviseur commun de 84 et de 126.
Diviseurs de 84 : 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84.
Parmi eux, ceux qui divisent aussi 126 : 1, 2, 3, 6, 7, 14, 21, 42. Le plus grand est **42**.
(Pour aller plus loin : avec 84 = 2² × 3 × 7 et 126 = 2 × 3² × 7, on retrouve 2 × 3 × 7 = 42.)
Il peut faire au maximum **42 bouquets**, chacun composé de 84 ÷ 42 = **2 roses** et 126 ÷ 42 = **3 tulipes**.`,
        },
      ],
    },

    // ───────────────────────── 5. Proportionnalité
    {
      id: "proportionnalite",
      titre: "Proportionnalité, pourcentages et échelles",
      theme: "Proportionnalité, fonctions",
      cours: `
## Reconnaître une situation de proportionnalité
Deux grandeurs sont **proportionnelles** si on passe de l'une à l'autre en **multipliant toujours par le même nombre**, appelé **coefficient de proportionnalité**.

| Masse (kg) | 2 | 4 | 6 |
|---|---|---|---|
| Prix (€) | 5 | 10 | 15 |

5 ÷ 2 = 10 ÷ 4 = 15 ÷ 6 = 2,5 : c'est un tableau de proportionnalité de coefficient 2,5 (prix au kg).

Contre-exemple : la taille d'un enfant n'est pas proportionnelle à son âge. L'aire d'un carré n'est pas proportionnelle à son côté (côté 1 → aire 1 ; côté 2 → aire 4).

## Calculer une quatrième proportionnelle
Plusieurs méthodes, avec l'exemple : « 3 kg de pommes coûtent 7,50 €. Combien coûtent 5 kg ? »
1. **Passage à l'unité** : 1 kg coûte 7,50 ÷ 3 = 2,50 € ; 5 kg coûtent 5 × 2,50 = **12,50 €**.
2. **Coefficient** : prix = masse × 2,5, donc 5 × 2,5 = 12,50 €.
3. **Produit en croix** : (5 × 7,50) ÷ 3 = 37,5 ÷ 3 = 12,50 €.
4. **Propriétés de linéarité** : 5 kg = 3 kg + 2 kg, ou bien on multiplie/divise une colonne.

## Pourcentages
Un pourcentage est une proportion de dénominateur 100 : t % = t/100.
- **Appliquer** un pourcentage : t % de Q = Q × t/100. 20 % de 45 = 45 × 20/100 = 9.
- **Calculer** un pourcentage : partie ÷ total × 100. 9 élèves sur 25 : 9 ÷ 25 × 100 = 36 %.

>! **Augmentation / réduction** : un article à 80 € soldé à −15 %.
>! Réduction : 80 × 15/100 = 12 €. Nouveau prix : 80 − 12 = **68 €**.

Repères utiles : 50 % = la moitié ; 25 % = le quart ; 10 % = un dixième ; 75 % = les trois quarts.

## Échelles
Sur un plan ou une carte, les distances sont **proportionnelles** aux distances réelles. L'**échelle** est le coefficient :
**échelle = distance sur le plan / distance réelle** (dans la même unité).

>! **Exemple** : échelle 1/25 000 : 1 cm sur la carte représente 25 000 cm = 250 m dans la réalité.
>! 4 cm sur la carte → 4 × 25 000 = 100 000 cm = 1 000 m = **1 km**.

## Vitesse moyenne
Distance et durée sont proportionnelles à vitesse constante : **v = d ÷ t**. 150 km en 2 h → 75 km/h.

## Proportionnalité et graphique
Dans un repère, on place les points (quantité ; prix).
- **Si les grandeurs sont proportionnelles, les points sont alignés sur une droite qui passe par l'origine.**
- Réciproquement, si les points sont alignés avec l'origine, il y a proportionnalité.
- Points alignés sur une droite qui **ne passe pas** par l'origine, ou points non alignés : **pas** de proportionnalité.

>! **Exemple** : abonnement de cinéma à 10 € plus 5 € par séance. 1 séance → 15 € ; 2 séances → 20 €. 15 ÷ 1 ≠ 20 ÷ 2 : pas proportionnel. Les points sont alignés, mais la droite passe par (0 ; 10), pas par l'origine.

## Exprimer une grandeur « en fonction de » une autre
Le prix P de n séances à 5 € s'écrit **P(n) = 5 × n** : on lit « P de n ». C'est une situation de proportionnalité (coefficient 5).
L'aire d'un carré de côté c s'écrit **A(c) = c²** : A(3) = 9. Ce n'est pas une situation de proportionnalité.
On peut présenter ces valeurs dans un **tableau de valeurs** puis les représenter dans un repère : le graphique cartésien se lit en partant d'un axe et en rejoignant la courbe ou le nuage de points.

> **À retenir**
> - Proportionnalité ⟺ on multiplie toujours par le même coefficient.
> - 4e proportionnelle : passage à l'unité, coefficient ou produit en croix.
> - t % de Q = Q × t ÷ 100.
> - Échelle = distance plan ÷ distance réelle (même unité !).
> - Proportionnalité ⟺ points alignés avec l'origine du repère.
`,
      exercices: [
        {
          type: "vf",
          question: "Le tableau suivant est un tableau de proportionnalité : 2 → 5 ; 4 → 10 ; 6 → 15.",
          reponse: true,
          explication: "Vrai : 5 ÷ 2 = 10 ÷ 4 = 15 ÷ 6 = 2,5. On multiplie toujours par 2,5.",
        },
        {
          type: "saisie",
          question: "3 kg de pommes coûtent 7,50 €. Combien coûtent 5 kg (en €) ?",
          reponses: ["12,5", "12,50", "12.5", "12.50", "12,5 €", "12,50 €", "12,50€"],
          explication: "Prix d'un kilo : 7,50 ÷ 3 = 2,50 €. Pour 5 kg : 5 × 2,50 = 12,50 €.",
        },
        {
          type: "qcm",
          question: "Combien font 20 % de 45 ?",
          choix: ["20", "4,5", "25", "9"],
          reponse: 3,
          explication: "45 × 20/100 = 900/100 = 9. Astuce : 10 % de 45 = 4,5, donc 20 % = 9.",
        },
        {
          type: "saisie",
          question: "Sur une carte à l'échelle 1/25 000, deux villages sont distants de 4 cm. Quelle est la distance réelle en km ?",
          reponses: ["1", "1 km", "1km"],
          explication: "4 × 25 000 = 100 000 cm = 1 000 m = 1 km.",
        },
        {
          type: "qcm",
          question: "Un article coûte 80 €. Son prix baisse de 15 %. Quel est son nouveau prix ?",
          choix: ["65 €", "68 €", "12 €", "92 €"],
          reponse: 1,
          explication: "15 % de 80 = 80 × 15/100 = 12 €. Nouveau prix : 80 − 12 = 68 €. (65 € correspond à une erreur : on a retiré 15 € au lieu de 15 %.)",
        },
        {
          type: "vf",
          question: "L'aire d'un carré est proportionnelle à la longueur de son côté.",
          reponse: false,
          explication: "Faux : côté 1 → aire 1 ; côté 2 → aire 4. Quand le côté double, l'aire est multipliée par 4. Il n'y a pas de coefficient constant. (Le périmètre, lui, est proportionnel au côté : P = 4 × c.)",
        },
        {
          type: "saisie",
          question: "Dans une classe de 25 élèves, 9 ont un chat. Quel pourcentage des élèves ont un chat ?",
          reponses: ["36", "36 %", "36%"],
          explication: "9 ÷ 25 = 0,36 = 36/100, soit 36 %.",
        },
        {
          type: "qcm",
          question: "Une voiture parcourt 150 km en 2 h à vitesse constante. Quelle distance parcourt-elle en 3 h 30 min ?",
          choix: ["225 km", "262,5 km", "247,5 km", "300 km"],
          reponse: 1,
          explication: "Vitesse : 150 ÷ 2 = 75 km/h. 3 h 30 min = 3,5 h. Distance : 75 × 3,5 = 262,5 km. (Attention : 3 h 30 ≠ 3,3 h.)",
        },
        {
          type: "redaction",
          question: "Pour 4 personnes, une recette de crêpes demande 200 g de farine, 4 œufs et 60 cl de lait.\n1) Calcule les quantités pour 6 personnes.\n2) Calcule les quantités pour 10 personnes.\n3) Avec 750 g de farine, pour combien de personnes peut-on cuisiner (les autres ingrédients ne manquant pas) ?",
          corrige: `Les quantités sont proportionnelles au nombre de personnes.

1) De 4 à 6 personnes, on multiplie par 6 ÷ 4 = **1,5** :
- farine : 200 × 1,5 = **300 g** ;
- œufs : 4 × 1,5 = **6 œufs** ;
- lait : 60 × 1,5 = **90 cl**.

2) Passage à l'unité (1 personne) : 50 g de farine, 1 œuf, 15 cl de lait.
Pour 10 personnes : **500 g** de farine, **10 œufs**, **150 cl** de lait.

3) 50 g de farine par personne : 750 ÷ 50 = **15 personnes**.`,
        },
        {
          type: "qcm",
          question: "Dans un repère, on représente une situation : les points obtenus sont alignés sur une droite qui ne passe pas par l'origine. La situation est-elle de proportionnalité ?",
          choix: ["Oui, car les points sont alignés", "On ne peut pas savoir", "Oui, si la droite monte", "Non"],
          reponse: 3,
          explication: "Une situation de proportionnalité est représentée par des points alignés **avec l'origine**. Si la droite ne passe pas par l'origine (par exemple un abonnement + un prix par séance), ce n'est pas de la proportionnalité.",
        },
        {
          type: "saisie",
          question: "Le prix de n places de concert à 12 € s'écrit P(n) = 12 × n. Calcule P(4) (en €).",
          reponses: ["48", "48 €", "48€"],
          explication: "On remplace n par 4 : P(4) = 12 × 4 = 48 €. C'est une situation de proportionnalité de coefficient 12.",
        },
        {
          type: "redaction",
          question: "Deux formules pour la piscine :\n• Formule A : 4 € l'entrée ;\n• Formule B : une carte de 12 € puis 2 € l'entrée.\n1) Complète un tableau donnant le prix payé pour 1, 2, 4 et 6 entrées avec chaque formule.\n2) Laquelle des deux formules est une situation de proportionnalité ? Justifie, et dis comment on le verrait sur un graphique.\n3) À partir de combien d'entrées la formule B est-elle plus avantageuse ?",
          corrige: `1)
| Nombre d'entrées | 1 | 2 | 4 | 6 |
|---|---|---|---|---|
| Formule A (€) | 4 | 8 | 16 | 24 |
| Formule B (€) | 14 | 16 | 20 | 24 |

2) Formule A : 4 ÷ 1 = 8 ÷ 2 = 16 ÷ 4 = 24 ÷ 6 = 4, on multiplie toujours par 4 : **c'est une situation de proportionnalité**. Sur un graphique, ses points sont alignés sur une droite qui passe par l'origine.
Formule B : 14 ÷ 1 = 14 mais 16 ÷ 2 = 8 : **pas de proportionnalité**. Ses points sont alignés, mais sur une droite qui passe par (0 ; 12), pas par l'origine.

3) Pour 6 entrées, les deux formules coûtent 24 €. Pour 7 entrées : A coûte 28 € et B coûte 12 + 14 = 26 €. La formule B est plus avantageuse **à partir de 7 entrées**.`,
        },
        {
          type: "saisie",
          question: "Tableau de valeurs : 2 cahiers coûtent 3 € ; 5 cahiers coûtent 7,50 € ; 8 cahiers coûtent 12 €. C'est une situation de proportionnalité. Quel est le prix de 6 cahiers (en €) ?",
          reponses: ["9", "9 €", "9€", "9 euros"],
          explication: "Coefficient : 3 ÷ 2 = 7,50 ÷ 5 = 12 ÷ 8 = 1,5 € par cahier. Pour 6 cahiers : 6 × 1,5 = 9 €. (Ou par linéarité : 6 = 3 × 2, donc 3 × 3 € = 9 €.)",
        },
        {
          type: "qcm",
          question: "Sur un graphique, le prix (en €) en fonction de la masse (en kg) est représenté par une droite qui passe par l'origine et par le point (4 ; 10). Quel est le prix de 6 kg ?",
          choix: ["12 €", "15 €", "24 €", "60 €"],
          reponse: 1,
          explication: "La droite passe par l'origine : c'est une situation de proportionnalité. 4 kg coûtent 10 €, donc 1 kg coûte 10 ÷ 4 = 2,50 € et 6 kg coûtent 6 × 2,50 = 15 €.",
        },
        {
          type: "vf",
          question: "On complète le tableau de valeurs de P(n) = 3 × n + 2 : n = 0 → 2 ; n = 1 → 5 ; n = 2 → 8. Ce tableau est un tableau de proportionnalité.",
          reponse: false,
          explication: "Faux : 5 ÷ 1 = 5 mais 8 ÷ 2 = 4, il n'y a pas de coefficient constant. D'ailleurs P(0) = 2 ≠ 0 : sur un graphique, la droite ne passerait pas par l'origine.",
        },
      ],
    },
    // ───────────────────────── 6. Statistiques
    {
      id: "statistiques",
      titre: "Statistiques",
      theme: "Organisation et gestion de données et probabilités",
      cours: `
## Vocabulaire
- La **population** est l'ensemble étudié (les élèves d'une classe…).
- Le **caractère** est ce que l'on observe (la note, la couleur des yeux…).
- L'**effectif** d'une valeur est le nombre de fois où elle apparaît.
- L'**effectif total** est le nombre total de données.

## Fréquence
La **fréquence** d'une valeur est : **effectif de la valeur ÷ effectif total**.
Elle s'écrit en fraction, en nombre décimal (entre 0 et 1) ou en pourcentage. La somme des fréquences vaut 1 (soit 100 %).

>! **Exemple** : nombre de frères et sœurs de 20 élèves.
>! | Nombre | 0 | 1 | 2 | 3 | Total |
>! |---|---|---|---|---|---|
>! | Effectif | 5 | 9 | 4 | 2 | 20 |
>! | Fréquence | 0,25 | 0,45 | 0,2 | 0,1 | 1 |
>! Fréquence de « 1 » : 9 ÷ 20 = 0,45 = 45 %.

## Moyenne
La **moyenne** d'une série est : **somme de toutes les valeurs ÷ effectif total**.

>! **Exemple** : notes 12, 8, 15, 10, 15, 9, 14, 13.
>! Somme : 96 ; effectif : 8 ; moyenne : 96 ÷ 8 = **12**.

**Moyenne pondérée** (pour aller plus loin, quand les données sont dans un tableau d'effectifs) : on multiplie chaque valeur par son effectif, on additionne, puis on divise par l'effectif total.
Avec le tableau ci-dessus : (0 × 5 + 1 × 9 + 2 × 4 + 3 × 2) ÷ 20 = 23 ÷ 20 = **1,15** frère ou sœur en moyenne.

**Comment évolue la moyenne ?** Si on ajoute le même nombre à toutes les valeurs, la moyenne augmente de ce nombre ; si on multiplie toutes les valeurs par un même nombre, la moyenne est multipliée par ce nombre.
Exemple : si chaque note de la série ci-dessus gagne 2 points, la nouvelle moyenne est 12 + 2 = 14.

La moyenne est toujours comprise entre la plus petite et la plus grande valeur. Pour aller plus loin (notion de 4e) : l'**étendue** (plus grande valeur − plus petite) mesure la dispersion : ici 15 − 8 = 7.

## Représentations graphiques
- **Diagramme en bâtons** : la hauteur de chaque bâton est proportionnelle à l'effectif.
- **Histogramme** (pour aller plus loin) : pour des données regroupées en classes (intervalles).
- **Diagramme circulaire ou semi-circulaire** : l'angle de chaque secteur est **proportionnel** à l'effectif.
- **Graphique cartésien** (courbe) : pour suivre une évolution dans le temps.

>! **Calcul d'un angle de diagramme circulaire** : angle = fréquence × 360°.
>! Pour « 1 frère ou sœur » : 0,45 × 360 = **162°**. Pour un semi-circulaire, on multiplie par 180°.

## Lire et interpréter
On choisit la représentation selon ce qu'on veut **mettre en avant** : comparer des effectifs (bâtons), montrer la part de chaque catégorie dans le total (circulaire), suivre une évolution (graphique cartésien).
Avant de calculer, lis bien : le titre, les axes, les unités, l'effectif total. Un tableur permet de calculer rapidement sommes, moyennes et fréquences.

> **À retenir**
> - Fréquence = effectif ÷ effectif total (somme des fréquences = 1).
> - Moyenne = somme des valeurs ÷ effectif total.
> - Pour aller plus loin : moyenne pondérée = somme des (valeur × effectif) ÷ effectif total.
> - Diagramme circulaire : angle = fréquence × 360°.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule la moyenne de la série : 12 ; 8 ; 15 ; 10 ; 15 ; 9 ; 14 ; 13.",
          reponses: ["12"],
          explication: "Somme : 12 + 8 + 15 + 10 + 15 + 9 + 14 + 13 = 96. Il y a 8 valeurs : 96 ÷ 8 = 12.",
        },
        {
          type: "qcm",
          question: "Dans une classe de 20 élèves, 9 ont exactement un frère ou une sœur. Quelle est la fréquence de cette valeur ?",
          choix: ["9", "0,09", "0,45", "0,9"],
          reponse: 2,
          explication: "Fréquence = 9 ÷ 20 = 0,45, soit 45 %. 9 est l'effectif, pas la fréquence.",
        },
        {
          type: "saisie",
          question: "(Pour aller plus loin) Tableau : 0 frère/sœur : 5 élèves ; 1 : 9 élèves ; 2 : 4 élèves ; 3 : 2 élèves. Calcule le nombre moyen de frères et sœurs.",
          reponses: ["1,15", "1.15"],
          explication: "(0 × 5 + 1 × 9 + 2 × 4 + 3 × 2) ÷ 20 = (0 + 9 + 8 + 6) ÷ 20 = 23 ÷ 20 = 1,15.",
        },
        {
          type: "vf",
          question: "Dans un diagramme circulaire, l'angle de chaque secteur est proportionnel à l'effectif.",
          reponse: true,
          explication: "Vrai : le disque entier (360°) représente l'effectif total, et chaque angle vaut fréquence × 360°.",
        },
        {
          type: "saisie",
          question: "Une valeur a une fréquence de 0,45. Quelle est la mesure (en degrés) de l'angle de son secteur dans un diagramme circulaire ?",
          reponses: ["162", "162°"],
          explication: "0,45 × 360 = 162°.",
        },
        {
          type: "qcm",
          question: "(Pour aller plus loin) Quelle est l'étendue de la série 12 ; 8 ; 15 ; 10 ; 15 ; 9 ; 14 ; 13 ?",
          choix: ["7", "12", "15", "8"],
          reponse: 0,
          explication: "Étendue = plus grande valeur − plus petite valeur = 15 − 8 = 7.",
        },
        {
          type: "vf",
          question: "La moyenne d'une série peut être plus grande que la plus grande valeur de la série.",
          reponse: false,
          explication: "Faux : la moyenne est toujours comprise entre la plus petite et la plus grande valeur.",
        },
        {
          type: "redaction",
          question: "Voici les températures maximales (en °C) relevées pendant une semaine : 14 ; 17 ; 15 ; 18 ; 21 ; 19 ; 15.\n1) Calcule la température moyenne de la semaine.\n2) Quelle est la fréquence des jours où la température a atteint au moins 18 °C ? Donne-la en fraction puis en pourcentage arrondi à l'unité.\n3) Quel angle aurait ce groupe de jours dans un diagramme circulaire ? (arrondi au degré)",
          corrige: `1) Somme : 14 + 17 + 15 + 18 + 21 + 19 + 15 = 119.
Moyenne : 119 ÷ 7 = **17 °C**.

2) Les jours à au moins 18 °C : 18, 21 et 19, soit 3 jours sur 7.
Fréquence : **3/7** ≈ 0,4286, soit environ **43 %**.

3) Angle : 3/7 × 360° = 1 080/7 ≈ **154°**.`,
        },
        {
          type: "saisie",
          question: "La moyenne d'une série de notes est 11. Le professeur ajoute 2 points à chaque note. Quelle est la nouvelle moyenne ?",
          reponses: ["13"],
          explication: "Si on ajoute le même nombre à toutes les valeurs, la somme augmente de ce nombre multiplié par l'effectif, donc la moyenne augmente de ce nombre : 11 + 2 = 13.",
        },
        {
          type: "qcm",
          question: "On veut montrer la part de chaque moyen de transport (bus, vélo, voiture, à pied) dans l'ensemble des élèves d'un collège. Quelle représentation est la plus adaptée ?",
          choix: ["Un diagramme circulaire", "Un graphique cartésien", "Un tableau de proportionnalité", "Une droite graduée"],
          reponse: 0,
          explication: "Un diagramme circulaire met en avant la part de chaque catégorie dans le total (le disque entier). Un graphique cartésien sert plutôt à suivre une évolution.",
        },
        {
          type: "saisie",
          question: "Un graphique cartésien montre la température au cours d'une journée. Les points relevés sont : 0 h → 4 °C ; 4 h → 2 °C ; 8 h → 6 °C ; 12 h → 13 °C ; 16 h → 15 °C ; 20 h → 9 °C ; 24 h → 5 °C (reliés par des segments). Quelle est la température maximale relevée (en °C) ?",
          reponses: ["15", "15 °C", "15°C", "15°"],
          explication: "On cherche le point le plus haut du graphique : 15 °C, atteint à 16 h. Attention à ne pas confondre l'heure (axe horizontal) et la température (axe vertical).",
        },
        {
          type: "qcm",
          question: "Même graphique (0 h → 4 °C ; 4 h → 2 °C ; 8 h → 6 °C ; 12 h → 13 °C ; 16 h → 15 °C ; 20 h → 9 °C ; 24 h → 5 °C). Sur quelles périodes la température a-t-elle baissé ?",
          choix: ["De 4 h à 16 h", "De 0 h à 4 h et de 16 h à 24 h", "Seulement de 20 h à 24 h", "De 0 h à 8 h"],
          reponse: 1,
          explication: "La courbe « descend » quand la température diminue : de 0 h à 4 h (4 → 2 °C) et de 16 h à 24 h (15 → 9 → 5 °C). De 4 h à 16 h, elle monte.",
        },
        {
          type: "saisie",
          question: "Un diagramme en bâtons donne les notes d'une classe : note 8 → bâton de hauteur 3 ; note 10 → 5 ; note 12 → 8 ; note 14 → 4. Combien d'élèves ont obtenu au moins 12 ?",
          reponses: ["12", "12 élèves"],
          explication: "« Au moins 12 » signifie 12 ou plus : 8 élèves ont 12 et 4 élèves ont 14, soit 8 + 4 = 12 élèves (sur 3 + 5 + 8 + 4 = 20).",
        },
        {
          type: "redaction",
          question: "Voici les précipitations relevées dans une ville : janvier 60 mm ; février 45 mm ; mars 50 mm ; avril 65 mm ; mai 80 mm.\n1) Quel mois a été le plus sec ? le plus pluvieux ?\n2) Calcule la moyenne mensuelle des précipitations sur ces cinq mois.\n3) Quels mois sont au-dessus de la moyenne ?\n4) De combien de millimètres les précipitations ont-elles augmenté de février à mai ?\n5) Quel type de graphique choisirais-tu pour montrer l'évolution mois après mois ? Décris-le (axes).",
          corrige: `1) Le plus sec : **février** (45 mm). Le plus pluvieux : **mai** (80 mm).

2) Somme : 60 + 45 + 50 + 65 + 80 = 300 mm. Moyenne : 300 ÷ 5 = **60 mm**.

3) Au-dessus de 60 mm : **avril** (65 mm) et **mai** (80 mm). (Janvier est égal à la moyenne.)

4) 80 − 45 = **35 mm** de plus.

5) Pour une évolution dans le temps, un **graphique cartésien** : les mois sur l'axe horizontal, les précipitations (en mm) sur l'axe vertical ; on place un point par mois et on peut les relier. (Un diagramme en bâtons convient aussi pour comparer les mois.)`,
        },
      ],
    },

    // ───────────────────────── 7. Probabilités
    {
      id: "probabilites",
      titre: "Probabilités",
      theme: "Organisation et gestion de données et probabilités",
      cours: `
## Vocabulaire
- Une **expérience aléatoire** est une expérience dont on connaît les résultats possibles, mais dont on ne peut pas prévoir le résultat à l'avance (lancer un dé, tirer une carte…).
- Les résultats possibles sont les **issues**.
- Un **événement** est un ensemble d'issues. Exemple : « obtenir un nombre pair » avec un dé = {2 ; 4 ; 6}.
- Une issue qui fait partie d'un événement **réalise** cet événement.

| Type d'événement | Signification | Probabilité |
|---|---|---|
| impossible | ne se réalise jamais | 0 |
| certain | se réalise toujours | 1 |
| contraire de A (« non A ») | se réalise quand A ne se réalise pas | 1 − P(A) |

## Probabilité
La **probabilité** d'un événement est un nombre **compris entre 0 et 1** qui mesure ses chances de se réaliser. On peut l'écrire en fraction, en décimal ou en pourcentage.

## Situation d'équiprobabilité
Quand toutes les issues ont la même chance de se produire (dé équilibré, pièce bien équilibrée, tirage « au hasard »…) :

**P(A) = nombre d'issues favorables à A ÷ nombre total d'issues**

>! **Exemple 1** : on lance un dé équilibré à 6 faces.
>! P(obtenir 5) = 1/6.
>! P(obtenir un nombre pair) = 3/6 = 1/2.
>! P(obtenir un nombre inférieur à 7) = 6/6 = 1 (événement certain).

>! **Exemple 2** : une urne contient 3 boules rouges, 5 bleues et 2 vertes. On tire une boule au hasard.
>! Il y a 10 boules. P(bleue) = 5/10 = 1/2. P(verte) = 2/10 = 1/5.
>! P(pas verte) = 1 − 1/5 = 4/5.

## Fréquence et probabilité
Si on répète une expérience un grand nombre de fois, la **fréquence** d'apparition d'un événement se rapproche de sa **probabilité**. Sur 6 000 lancers d'un dé, on obtient « 5 » environ 1 000 fois, mais pas exactement.

Attention : le hasard n'a pas de mémoire. Après trois « pile », la probabilité d'obtenir « pile » au lancer suivant est toujours 1/2.

>! **Expérimenter** : lance réellement un dé 50 fois (ou mets en commun les résultats de la classe) et note les résultats dans un tableau d'effectifs. Plus il y a de lancers, plus les fréquences se rapprochent de 1/6.

**Esprit critique** : l'équiprobabilité est une **hypothèse**. Un dé truqué, une punaise qui tombe « pointe en l'air » ou « sur le côté », une roue aux secteurs inégaux ne donnent pas des issues équiprobables. Si, sur un très grand nombre de lancers, une fréquence reste très éloignée de la probabilité attendue, on peut douter que le dé soit équilibré.

> **À retenir**
> - 0 ≤ P(A) ≤ 1 ; impossible → 0 ; certain → 1.
> - Équiprobabilité : P(A) = issues favorables ÷ issues possibles.
> - P(non A) = 1 − P(A).
> - La somme des probabilités de toutes les issues vaut 1.
`,
      exercices: [
        {
          type: "qcm",
          question: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir 5 ?",
          choix: ["1/5", "5/6", "1/6", "1/2"],
          reponse: 2,
          explication: "Il y a 6 issues équiprobables et une seule est favorable : P = 1/6.",
        },
        {
          type: "vf",
          question: "Une probabilité peut valoir 1,2.",
          reponse: false,
          explication: "Faux : une probabilité est toujours comprise entre 0 et 1.",
        },
        {
          type: "saisie",
          question: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
          reponses: ["1/2", "3/6", "0,5", "0.5", "50 %", "50%"],
          explication: "Issues favorables : 2, 4, 6 (3 issues sur 6). P = 3/6 = 1/2.",
        },
        {
          type: "qcm",
          question: "Une urne contient 3 boules rouges, 5 bleues et 2 vertes. On tire une boule au hasard. Quelle est la probabilité qu'elle soit bleue ?",
          choix: ["1/2", "5/3", "1/5", "5/8"],
          reponse: 0,
          explication: "Il y a 3 + 5 + 2 = 10 boules, dont 5 bleues : P = 5/10 = 1/2.",
        },
        {
          type: "saisie",
          question: "Avec la même urne (3 rouges, 5 bleues, 2 vertes), quelle est la probabilité de ne pas tirer une boule verte ?",
          reponses: ["4/5", "8/10", "0,8", "0.8", "80 %", "80%"],
          explication: "P(verte) = 2/10 = 1/5. P(pas verte) = 1 − 1/5 = 4/5. On peut aussi compter : 8 boules non vertes sur 10.",
        },
        {
          type: "vf",
          question: "La probabilité d'un événement impossible est 0.",
          reponse: true,
          explication: "Vrai : un événement impossible ne se réalise jamais, sa probabilité vaut 0.",
        },
        {
          type: "qcm",
          question: "On lance un dé équilibré. Quelle est la probabilité de l'événement contraire de « obtenir un multiple de 3 » ?",
          choix: ["1/3", "1/2", "3/4", "2/3"],
          reponse: 3,
          explication: "Multiples de 3 : 3 et 6, donc P = 2/6 = 1/3. Contraire : 1 − 1/3 = 2/3 (issues 1, 2, 4, 5).",
        },
        {
          type: "vf",
          question: "On a obtenu « pile » 5 fois de suite avec une pièce équilibrée. Au lancer suivant, on a plus de chances d'obtenir « face ».",
          reponse: false,
          explication: "Faux : les lancers sont indépendants, le hasard n'a pas de mémoire. La probabilité d'obtenir « face » reste 1/2.",
        },
        {
          type: "redaction",
          question: "Une roue de loterie est partagée en 8 secteurs identiques numérotés de 1 à 8. On la fait tourner et on note le numéro obtenu.\n1) Pourquoi est-ce une situation d'équiprobabilité ?\n2) Calcule la probabilité des événements A : « obtenir un nombre pair » ; B : « obtenir un multiple de 4 » ; C : « obtenir un nombre strictement supérieur à 6 ».\n3) Calcule la probabilité de « obtenir un nombre pair et multiple de 3 ».",
          corrige: `1) Les 8 secteurs sont identiques : chaque numéro a la même chance de sortir. Chaque issue a pour probabilité 1/8.

2)
- A : nombres pairs entre 1 et 8 : 2, 4, 6, 8. P(A) = 4/8 = **1/2**.
- B : multiples de 4 : 4 et 8. P(B) = 2/8 = **1/4**.
- C : strictement supérieur à 6 : 7 et 8. P(C) = 2/8 = **1/4**.

3) Entre 1 et 8, le seul nombre à la fois pair et multiple de 3 est 6. La probabilité est **1/8**.`,
        },
        {
          type: "vf",
          question: "On lance 1 000 fois une punaise : elle tombe 620 fois « pointe en l'air ». On peut considérer que les deux issues « pointe en l'air » et « sur le côté » sont équiprobables.",
          reponse: false,
          explication: "Faux : sur un grand nombre de lancers, la fréquence de « pointe en l'air » est 620 ÷ 1 000 = 0,62, assez loin de 0,5. Les deux issues ne semblent pas avoir la même chance : l'équiprobabilité n'est qu'une hypothèse, qui ne convient pas ici.",
        },
        {
          type: "saisie",
          question: "Une classe met en commun ses lancers de dé : sur 600 lancers, le 6 est sorti 96 fois. Quelle est la fréquence d'apparition du 6 ? (en écriture décimale)",
          reponses: ["0,16", "0.16", "16 %", "16%", "96/600", "4/25"],
          explication: "Fréquence = 96 ÷ 600 = 0,16. C'est proche de la probabilité 1/6 ≈ 0,167 : rien ne fait douter que le dé soit équilibré.",
        },
      ],
    },

    // ───────────────────────── 8. Angles et parallélisme
    {
      id: "angles-parallelisme",
      titre: "Angles et parallélisme",
      theme: "Espace et géométrie",
      cours: `
## Angles particuliers
- **Angles adjacents** : ils ont le même sommet, un côté commun, et sont situés de part et d'autre de ce côté.
- **Angles complémentaires** : leur somme vaut **90°**. Le complémentaire de 35° est 55°.
- **Angles supplémentaires** : leur somme vaut **180°**. Le supplémentaire de 112° est 68°.
- **Angles opposés par le sommet** : formés par deux droites sécantes, ils ont le même sommet et des côtés dans le prolongement l'un de l'autre. **Ils ont la même mesure.**

## Angles formés par deux droites et une sécante
On considère deux droites (d) et (d′) coupées par une troisième droite (Δ), la **sécante**. Elle forme 8 angles.

- Deux angles **alternes-internes** sont situés **entre** les deux droites (d) et (d′) et **de part et d'autre** de la sécante.
- Deux angles **correspondants** sont situés **du même côté** de la sécante, l'un entre les droites, l'autre à l'extérieur, « à la même place » sur chaque intersection.

>! **Repère visuel** : les alternes-internes dessinent un « Z » ; les correspondants dessinent un « F ».

## Propriétés (droites parallèles → angles égaux)
**Si deux droites parallèles sont coupées par une sécante, alors :**
- les angles **alternes-internes** sont **égaux** ;
- les angles **correspondants** sont **égaux**.

## Propriétés réciproques (angles égaux → droites parallèles)
**Si deux droites coupées par une sécante forment deux angles alternes-internes égaux (ou deux angles correspondants égaux), alors ces deux droites sont parallèles.**

Contraposée utile : si les angles alternes-internes ne sont **pas** égaux, les droites ne sont **pas** parallèles.

>! **Méthode de rédaction**
>! On sait que : (d) // (d′) et les angles x et y sont alternes-internes.
>! Or : si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes sont égaux.
>! Donc : x = y.

## Exemple résolu
(d) // (d′), coupées par (Δ). L'angle formé en A entre (d) et (Δ) mesure 47°.
- L'angle correspondant en B mesure aussi **47°** (droites parallèles).
- L'angle qui lui est adjacent en B, sur la même droite, mesure 180° − 47° = **133°** (angles supplémentaires).

> **À retenir**
> - Complémentaires : somme 90° ; supplémentaires : somme 180°.
> - Opposés par le sommet → égaux.
> - Droites parallèles ⟹ alternes-internes égaux et correspondants égaux.
> - Alternes-internes (ou correspondants) égaux ⟹ droites parallèles.
`,
      exercices: [
        {
          type: "saisie",
          question: "Quelle est la mesure (en degrés) du complémentaire d'un angle de 35° ?",
          reponses: ["55", "55°"],
          explication: "Deux angles complémentaires ont une somme de 90° : 90 − 35 = 55°.",
        },
        {
          type: "saisie",
          question: "Quelle est la mesure (en degrés) du supplémentaire d'un angle de 112° ?",
          reponses: ["68", "68°"],
          explication: "Deux angles supplémentaires ont une somme de 180° : 180 − 112 = 68°.",
        },
        {
          type: "vf",
          question: "Deux angles opposés par le sommet ont toujours la même mesure.",
          reponse: true,
          explication: "Vrai : c'est une propriété qui ne demande aucune condition de parallélisme.",
        },
        {
          type: "qcm",
          question: "Deux droites parallèles sont coupées par une sécante. Que peut-on dire de deux angles alternes-internes ?",
          choix: ["Ils sont complémentaires", "Ils sont égaux", "Ils sont supplémentaires", "On ne peut rien dire"],
          reponse: 1,
          explication: "Si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes ont la même mesure.",
        },
        {
          type: "qcm",
          question: "Deux angles situés entre les deux droites et de part et d'autre de la sécante sont dits :",
          choix: ["correspondants", "opposés par le sommet", "adjacents", "alternes-internes"],
          reponse: 3,
          explication: "« Internes » = entre les deux droites ; « alternes » = de part et d'autre de la sécante.",
        },
        {
          type: "vf",
          question: "Si deux droites coupées par une sécante forment des angles correspondants égaux, alors elles sont parallèles.",
          reponse: true,
          explication: "Vrai : c'est la propriété réciproque. Elle permet de démontrer que deux droites sont parallèles.",
        },
        {
          type: "saisie",
          question: "(d) et (d′) sont parallèles, coupées par une sécante. Un angle mesure 128° ; on cherche son angle alterne-interne x. Combien vaut x (en degrés) ?",
          reponses: ["128", "128°"],
          explication: "Les droites étant parallèles, les angles alternes-internes sont égaux : x = 128°.",
        },
        {
          type: "qcm",
          question: "Deux droites sont coupées par une sécante. Deux angles alternes-internes mesurent 72° et 74°. Les droites sont-elles parallèles ?",
          choix: ["Oui", "Non", "On ne peut pas savoir"],
          reponse: 1,
          explication: "Si les droites étaient parallèles, ces angles alternes-internes seraient égaux. Comme 72° ≠ 74°, les droites ne sont pas parallèles.",
        },
        {
          type: "redaction",
          question: "Deux droites (d) et (d′) sont coupées par une sécante (Δ) respectivement en A et B. L'angle formé en A, entre (d) et (Δ), mesure 73°. En B, l'angle alterne-interne correspondant mesure aussi 73°.\n1) Démontre que (d) et (d′) sont parallèles.\n2) Une droite (d″) est parallèle à (d) et coupe (Δ) en C. Quelle est la mesure de l'angle en C correspondant à l'angle de 73° en A ? Justifie.\n3) En déduis la mesure de l'angle adjacent supplémentaire en C.",
          corrige: `1) **On sait que** les angles en A et en B sont alternes-internes et mesurent tous les deux 73°.
**Or**, si deux droites coupées par une sécante forment deux angles alternes-internes égaux, alors ces droites sont parallèles.
**Donc** (d) // (d′).

2) **On sait que** (d″) // (d) et que l'angle cherché en C est correspondant à l'angle de 73° en A.
**Or**, si deux droites parallèles sont coupées par une sécante, alors les angles correspondants sont égaux.
**Donc** l'angle en C mesure **73°**.

3) Les deux angles adjacents en C forment un angle plat : 180° − 73° = **107°**.`,
        },
      ],
    },

    // ───────────────────────── 9. Triangles
    {
      id: "triangles",
      titre: "Les triangles",
      theme: "Espace et géométrie",
      cours: `
## Somme des angles d'un triangle
**Dans un triangle, la somme des mesures des trois angles est égale à 180°.**

>! **Exemple** : dans ABC, Â = 48° et B̂ = 67°. Alors Ĉ = 180° − (48° + 67°) = 180° − 115° = **65°**.

>! **Démonstration** (à savoir refaire) : dans le triangle ABC, on trace la droite (d) passant par A et parallèle à (BC).
>! - Avec la sécante (AB), l'angle formé en A entre (d) et [AB] et l'angle B̂ sont **alternes-internes** ; comme (d) // (BC), ils sont égaux.
>! - De même, avec la sécante (AC), l'angle formé en A entre (d) et [AC] est égal à Ĉ.
>! - En A, ces deux angles et l'angle Â forment ensemble un **angle plat** : leur somme vaut 180°.
>! - Donc Â + B̂ + Ĉ = 180°.

Conséquences :
- **Triangle équilatéral** : ses trois angles mesurent 60°.
- **Triangle isocèle** : ses deux angles à la base sont égaux. Si l'angle au sommet principal mesure 40°, chaque angle à la base mesure (180° − 40°) ÷ 2 = 70°.
- **Triangle rectangle** : ses deux angles aigus sont complémentaires (somme 90°).
- **Triangle rectangle isocèle** : angles 90°, 45°, 45°.

## Inégalité triangulaire (rappel de 6e)
**Dans un triangle, la longueur de chaque côté est inférieure à la somme des longueurs des deux autres.**

Pour savoir si un triangle est constructible avec trois longueurs, on compare **la plus grande** à la **somme des deux autres** :
- plus grande < somme des deux autres → triangle constructible ;
- plus grande = somme des deux autres → triangle **aplati** (les trois points sont alignés) ;
- plus grande > somme des deux autres → **impossible**.

>! **Exemples** : 4 cm, 5 cm, 7 cm : 7 < 4 + 5 = 9 → constructible.
>! 3, 4, 8 : 8 > 3 + 4 = 7 → impossible. 5, 7, 12 : 12 = 5 + 7 → aplati.

## Construire un triangle
- Avec **trois longueurs** : on trace un côté, puis deux arcs de cercle au compas.
- Avec **deux longueurs et l'angle compris** : on trace un côté, l'angle au rapporteur, puis on reporte la seconde longueur.
- Avec **une longueur et les deux angles adjacents** : on trace le côté, puis les deux angles ; le troisième sommet est à l'intersection.

Fais toujours une **figure à main levée codée** avant de construire.

## Hauteurs
Une **hauteur** d'un triangle est la droite qui passe par un sommet et qui est **perpendiculaire** au côté opposé (ou à son prolongement). Un triangle a trois hauteurs ; elles sont **concourantes** (elles se coupent en un même point, l'orthocentre). La hauteur sert à calculer l'aire.

## Médianes
Une **médiane** d'un triangle est la droite (ou le segment) qui joint un sommet au **milieu du côté opposé**. Un triangle a trois médianes ; elles sont concourantes (au centre de gravité).

**Propriété** : une médiane partage le triangle en **deux triangles de même aire**.
Preuve : dans ABC, soit I le milieu de [BC]. Les triangles ABI et AIC ont des bases BI et IC de même longueur et la **même hauteur** (la hauteur issue de A). Leurs aires, base × hauteur ÷ 2, sont donc égales.

Ne confonds pas : la **médiane** passe par un sommet et le milieu du côté opposé ; la **hauteur** passe par un sommet et est perpendiculaire au côté opposé ; la **médiatrice** est perpendiculaire à un côté en son milieu.

## Médiatrices
La **médiatrice** d'un segment est la droite perpendiculaire à ce segment en son milieu.
**Tout point de la médiatrice d'un segment est à égale distance des extrémités de ce segment** (et réciproquement).

Les trois médiatrices d'un triangle sont concourantes en un point O, **centre du cercle circonscrit** au triangle (le cercle qui passe par les trois sommets), car OA = OB = OC.

> **À retenir**
> - Somme des angles d'un triangle = 180°.
> - Constructible ⟺ le plus grand côté est plus petit que la somme des deux autres.
> - Hauteur : passe par un sommet, perpendiculaire au côté opposé.
> - Médiane : joint un sommet au milieu du côté opposé ; elle partage le triangle en deux triangles de même aire.
> - Médiatrice : perpendiculaire au milieu ; les points sont équidistants des extrémités ; les trois médiatrices se coupent au centre du cercle circonscrit.
`,
      exercices: [
        {
          type: "saisie",
          question: "Dans un triangle ABC, Â = 48° et B̂ = 67°. Combien mesure Ĉ (en degrés) ?",
          reponses: ["65", "65°"],
          explication: "Ĉ = 180° − (48° + 67°) = 180° − 115° = 65°.",
        },
        {
          type: "vf",
          question: "On peut construire un triangle dont les côtés mesurent 3 cm, 4 cm et 8 cm.",
          reponse: false,
          explication: "Faux : le plus grand côté (8) est plus grand que la somme des deux autres (3 + 4 = 7). Les arcs de cercle ne se coupent pas.",
        },
        {
          type: "qcm",
          question: "Un triangle isocèle a un angle au sommet principal de 40°. Combien mesure chaque angle à la base ?",
          choix: ["140°", "70°", "40°", "50°"],
          reponse: 1,
          explication: "Les deux angles à la base sont égaux et leur somme vaut 180° − 40° = 140°. Chacun mesure 140° ÷ 2 = 70°.",
        },
        {
          type: "qcm",
          question: "Qu'est-ce qu'une hauteur d'un triangle ?",
          choix: [
            "La droite qui passe par un sommet et le milieu du côté opposé",
            "La droite perpendiculaire à un côté en son milieu",
            "La droite qui passe par un sommet et qui est perpendiculaire au côté opposé",
            "La bissectrice d'un angle",
          ],
          reponse: 2,
          explication: "La hauteur passe par un sommet et est perpendiculaire au côté opposé. La droite qui passe par un sommet et le milieu du côté opposé est une médiane ; la droite perpendiculaire à un côté en son milieu est une médiatrice.",
        },
        {
          type: "vf",
          question: "Avec des longueurs de 5 cm, 7 cm et 12 cm, on obtient un « vrai » triangle (non aplati).",
          reponse: false,
          explication: "Faux : 12 = 5 + 7. Le triangle est aplati : les trois points sont alignés.",
        },
        {
          type: "saisie",
          question: "Dans un triangle rectangle, un angle aigu mesure 37°. Combien mesure l'autre angle aigu (en degrés) ?",
          reponses: ["53", "53°"],
          explication: "Les deux angles aigus d'un triangle rectangle sont complémentaires : 90° − 37° = 53°. (Ou : 180° − 90° − 37° = 53°.)",
        },
        {
          type: "qcm",
          question: "Le point de concours des trois médiatrices d'un triangle est :",
          choix: ["le centre du cercle circonscrit", "le milieu du plus grand côté", "l'orthocentre", "toujours à l'intérieur du triangle"],
          reponse: 0,
          explication: "Ce point est à égale distance des trois sommets : c'est le centre du cercle qui passe par les trois sommets. (Il peut être à l'extérieur si le triangle a un angle obtus.)",
        },
        {
          type: "redaction",
          question: "On veut construire un triangle ABC tel que AB = 6 cm, BAC = 50° et ABC = 70°.\n1) Calcule la mesure de l'angle ACB.\n2) Rédige un programme de construction.\n3) Que représente le point O, intersection des médiatrices de [AB] et [AC] ? Justifie que OB = OC.",
          corrige: `1) La somme des angles d'un triangle vaut 180° :
ACB = 180° − (50° + 70°) = **60°**.

2) Programme de construction :
1. Tracer le segment [AB] de longueur 6 cm.
2. Avec le rapporteur, tracer en A une demi-droite faisant un angle de 50° avec [AB].
3. Du même côté de (AB), tracer en B une demi-droite faisant un angle de 70° avec [BA].
4. Le point C est l'intersection des deux demi-droites.

3) O est sur la médiatrice de [AB], donc OA = OB. O est sur la médiatrice de [AC], donc OA = OC.
Par conséquent **OB = OC** : O est aussi sur la médiatrice de [BC]. C'est le **centre du cercle circonscrit** au triangle ABC.`,
        },
        {
          type: "qcm",
          question: "Dans le triangle ABC, I est le milieu de [BC]. La droite (AI) est :",
          choix: ["la hauteur issue de A", "la médiatrice de [BC]", "la médiane issue de A", "la bissectrice de l'angle A"],
          reponse: 2,
          explication: "La médiane issue de A joint le sommet A au milieu I du côté opposé [BC]. Ce n'est la hauteur ou la médiatrice que dans un cas particulier (triangle isocèle en A).",
        },
        {
          type: "redaction",
          question: "ABC est un triangle d'aire 36 cm². I est le milieu de [BC].\n1) Quelle est l'aire du triangle ABI ? Justifie.\n2) J est le milieu de [AI]. Quelle est l'aire du triangle ABJ ?",
          corrige: `1) (AI) est la **médiane** issue de A. Les triangles ABI et AIC ont des bases [BI] et [IC] de même longueur (I milieu de [BC]) et la même hauteur, issue de A.
**Or** une médiane partage un triangle en deux triangles de même aire.
**Donc** l'aire de ABI vaut 36 ÷ 2 = **18 cm²**.

2) Dans le triangle ABI, J est le milieu de [AI], donc (BJ) est la médiane issue de B. Elle partage ABI en deux triangles de même aire : ABJ et JBI.
Aire de ABJ = 18 ÷ 2 = **9 cm²**.`,
        },
      ],
    },

    // ───────────────────────── 10. Parallélogrammes
    {
      id: "parallelogrammes",
      titre: "Les parallélogrammes",
      theme: "Espace et géométrie",
      cours: `
## Définition
Un **parallélogramme** est un quadrilatère dont les **côtés opposés sont parallèles deux à deux**.
ABCD est un parallélogramme ⟺ (AB) // (DC) et (AD) // (BC).

## Propriétés
Si ABCD est un parallélogramme, alors :
1. ses **diagonales se coupent en leur milieu** ;
2. ses **côtés opposés ont la même longueur** : AB = DC et AD = BC ;
3. ses **angles opposés sont égaux** : Â = Ĉ et B̂ = D̂ ;
4. deux **angles consécutifs sont supplémentaires** : Â + B̂ = 180° ;
5. il admet un **centre de symétrie** : le point d'intersection de ses diagonales.

>! **Exemple** : ABCD parallélogramme avec Â = 65°. Alors Ĉ = 65° et B̂ = D̂ = 180° − 65° = 115°.

## Démontrer qu'un quadrilatère est un parallélogramme
Un quadrilatère est un parallélogramme si l'une des conditions suivantes est vérifiée :
- ses côtés opposés sont parallèles deux à deux (définition) ;
- ses **diagonales ont le même milieu** ;
- ses côtés opposés ont la même longueur deux à deux (s'il n'est pas croisé) ;
- deux côtés opposés sont **parallèles et de même longueur** (s'il n'est pas croisé).

## Parallélogrammes particuliers
| Figure | Définition / caractérisation | Propriétés en plus |
|---|---|---|
| Rectangle | parallélogramme avec un angle droit | diagonales de même longueur |
| Losange | parallélogramme avec deux côtés consécutifs égaux | diagonales perpendiculaires |
| Carré | à la fois rectangle et losange | diagonales égales et perpendiculaires |

- Un parallélogramme dont les **diagonales ont la même longueur** est un rectangle.
- Un parallélogramme dont les **diagonales sont perpendiculaires** est un losange.

>! **Méthode de rédaction**
>! On sait que : [AC] et [BD] ont le même milieu O.
>! Or : si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme.
>! Donc : ABCD est un parallélogramme.

> **À retenir**
> - Parallélogramme : côtés opposés parallèles.
> - Propriétés : diagonales qui se coupent en leur milieu, côtés opposés égaux, angles opposés égaux, angles consécutifs supplémentaires.
> - Pour le prouver : le plus souvent « les diagonales ont le même milieu ».
> - Rectangle : diagonales égales ; losange : diagonales perpendiculaires ; carré : les deux.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelle propriété possèdent les diagonales de tout parallélogramme ?",
          choix: ["Elles sont perpendiculaires", "Elles sont de même longueur", "Elles se coupent en leur milieu", "Elles sont parallèles"],
          reponse: 2,
          explication: "Dans tout parallélogramme, les diagonales se coupent en leur milieu. Elles ne sont perpendiculaires que pour un losange et de même longueur que pour un rectangle.",
        },
        {
          type: "vf",
          question: "Dans un parallélogramme, les angles opposés sont égaux.",
          reponse: true,
          explication: "Vrai : Â = Ĉ et B̂ = D̂.",
        },
        {
          type: "saisie",
          question: "ABCD est un parallélogramme et Â = 65°. Combien mesure B̂ (en degrés) ?",
          reponses: ["115", "115°"],
          explication: "Deux angles consécutifs d'un parallélogramme sont supplémentaires : B̂ = 180° − 65° = 115°.",
        },
        {
          type: "vf",
          question: "Un quadrilatère dont les diagonales ont le même milieu est un parallélogramme.",
          reponse: true,
          explication: "Vrai : c'est la propriété la plus utilisée pour démontrer qu'un quadrilatère est un parallélogramme.",
        },
        {
          type: "qcm",
          question: "Un parallélogramme dont les diagonales sont perpendiculaires est :",
          choix: ["un rectangle", "un losange", "un trapèze", "forcément un carré"],
          reponse: 1,
          explication: "Diagonales perpendiculaires → losange. Il n'est un carré que si, en plus, ses diagonales ont la même longueur.",
        },
        {
          type: "saisie",
          question: "ABCD est un parallélogramme avec AB = 7 cm et BC = 4 cm. Quel est son périmètre (en cm) ?",
          reponses: ["22", "22 cm", "22cm"],
          explication: "Les côtés opposés sont égaux : CD = 7 cm et DA = 4 cm. Périmètre : 2 × (7 + 4) = 22 cm.",
        },
        {
          type: "vf",
          question: "Un rectangle est un parallélogramme particulier.",
          reponse: true,
          explication: "Vrai : ses côtés opposés sont parallèles. Il a toutes les propriétés du parallélogramme, plus des angles droits et des diagonales de même longueur.",
        },
        {
          type: "redaction",
          question: "ABC est un triangle. On note I le milieu de [BC] et D le symétrique de A par rapport à I.\n1) Démontre que ABDC est un parallélogramme.\n2) On suppose de plus que l'angle BAC est droit. Quelle est alors la nature de ABDC ? Justifie.\n3) Si AB = 5 cm et AC = 3 cm, quelles sont les longueurs CD et BD ?",
          corrige: `1) **On sait que** I est le milieu de [BC] et, comme D est le symétrique de A par rapport à I, I est aussi le milieu de [AD].
**Or**, si les diagonales d'un quadrilatère ont le même milieu, alors c'est un parallélogramme.
**Donc** ABDC est un parallélogramme (diagonales [AD] et [BC]).

2) ABDC est un parallélogramme qui possède un angle droit (en A).
**Or** un parallélogramme qui a un angle droit est un rectangle.
**Donc** ABDC est un **rectangle**.

3) Dans un parallélogramme, les côtés opposés ont la même longueur : [CD] est opposé à [AB] et [BD] est opposé à [AC].
**CD = AB = 5 cm** et **BD = AC = 3 cm**.`,
        },
      ],
    },
    // ───────────────────────── 11. Symétrie centrale
    {
      id: "symetrie-centrale",
      titre: "La symétrie centrale",
      theme: "Espace et géométrie",
      cours: `
## Définition
Soit O un point. Le **symétrique** d'un point A par rapport à O est le point A′ tel que **O est le milieu du segment [AA′]**.
- Le symétrique de O par rapport à O est O lui-même.
- La symétrie centrale de centre O correspond à un **demi-tour** (rotation de 180°) autour de O.

## Construire le symétrique d'un point
1. Tracer la demi-droite [AO).
2. Avec le compas, reporter la longueur OA de l'autre côté de O : on obtient A′ tel que OA′ = OA.

Sur papier quadrillé, on compte les carreaux : si on va de A à O en faisant « 3 à droite, 2 en haut », on refait « 3 à droite, 2 en haut » depuis O pour arriver à A′.

## Dans un repère
Le symétrique du point A(x ; y) par rapport à l'**origine** O est A′(−x ; −y).

>! **Exemple** : A(3 ; −2) a pour symétrique A′(−3 ; 2) par rapport à l'origine.
>! Pour un centre quelconque, on utilise le milieu : si A(2 ; 5) et O(4 ; 1), alors A′ = (2 × 4 − 2 ; 2 × 1 − 5) = (6 ; −3).

## Propriétés de conservation
La symétrie centrale **conserve** :
- les **longueurs** : le symétrique d'un segment est un segment de même longueur ;
- les **angles** : le symétrique d'un angle est un angle de même mesure ;
- les **aires** et les **périmètres** ;
- l'**alignement** : le symétrique d'une droite est une droite.

Et en plus : **le symétrique d'une droite est une droite qui lui est parallèle**. Le symétrique d'un cercle de centre I est un cercle de même rayon, de centre I′ (symétrique de I).

## Centre de symétrie d'une figure
Un point O est **centre de symétrie** d'une figure si le symétrique de la figure par rapport à O est la figure elle-même.
- Parallélogramme (et rectangle, losange, carré) : centre = intersection des diagonales.
- Cercle : son centre.
- Lettres majuscules ayant un centre de symétrie : H, I, N, O, S, X, Z.

## Symétrie axiale ou centrale ?
| | Symétrie axiale (6e) | Symétrie centrale |
|---|---|---|
| Définie par | une droite (axe) | un point (centre) |
| Mouvement | pliage | demi-tour |
| Image d'une droite | une droite (pas forcément parallèle) | une droite **parallèle** |

> **À retenir**
> - A′ symétrique de A par rapport à O ⟺ O milieu de [AA′].
> - La symétrie centrale conserve longueurs, angles, aires, alignement.
> - Une droite et son image sont parallèles.
> - Par rapport à l'origine : (x ; y) → (−x ; −y).
`,
      exercices: [
        {
          type: "qcm",
          question: "A′ est le symétrique de A par rapport à O. Cela signifie que :",
          choix: ["A est le milieu de [OA′]", "O est le milieu de [AA′]", "(OA) est perpendiculaire à (OA′)", "OA′ = 2 × OA"],
          reponse: 1,
          explication: "Par définition, O est le milieu du segment [AA′] : A, O et A′ sont alignés et OA = OA′.",
        },
        {
          type: "vf",
          question: "La symétrie centrale conserve les longueurs.",
          reponse: true,
          explication: "Vrai : le symétrique d'un segment est un segment de même longueur.",
        },
        {
          type: "qcm",
          question: "Dans un repère d'origine O, quel est le symétrique de A(3 ; −2) par rapport à O ?",
          choix: ["(−3 ; −2)", "(3 ; 2)", "(−2 ; 3)", "(−3 ; 2)"],
          reponse: 3,
          explication: "Par rapport à l'origine, on change le signe des deux coordonnées : (−3 ; 2).",
        },
        {
          type: "vf",
          question: "Par une symétrie centrale, l'image d'une droite est une droite qui lui est parallèle.",
          reponse: true,
          explication: "Vrai : c'est une propriété spécifique de la symétrie centrale (ce n'est pas le cas pour la symétrie axiale en général).",
        },
        {
          type: "qcm",
          question: "Laquelle de ces lettres possède un centre de symétrie ?",
          choix: ["A", "N", "E", "T"],
          reponse: 1,
          explication: "Après un demi-tour, N reste N. A, E et T ont seulement un axe de symétrie, pas de centre.",
        },
        {
          type: "saisie",
          question: "Dans un repère, A(2 ; 5) et O(4 ; 1). Quelles sont les coordonnées du symétrique A′ de A par rapport à O ? (écris-les sous la forme (x;y))",
          reponses: ["(6;-3)", "(6 ; -3)", "(6;−3)", "(6 ; −3)", "6;-3", "6;−3", "(6,-3)", "(6, -3)", "A'(6;-3)", "A′(6;−3)", "A'(6 ; -3)", "A′(6 ; −3)"],
          explication: "O est le milieu de [AA′] : 4 = (2 + x)/2 donne x = 6 ; 1 = (5 + y)/2 donne y = −3. Donc A′(6 ; −3). Astuce : de A à O on fait +2 en x et −4 en y ; on refait la même chose depuis O.",
        },
        {
          type: "vf",
          question: "Le symétrique d'un cercle de rayon 3 cm par rapport à un point est un cercle de rayon 6 cm.",
          reponse: false,
          explication: "Faux : la symétrie conserve les longueurs. L'image est un cercle de même rayon, 3 cm.",
        },
        {
          type: "redaction",
          question: "Soit ABC un triangle avec AB = 5 cm, BC = 4 cm et ABC = 110°. On note O le milieu de [AC]. On construit A′, B′ et C′, symétriques respectifs de A, B et C par rapport à O.\n1) Quels points sont confondus ? Justifie.\n2) Donne, sans mesurer, A′B′, B′C′ et l'angle A′B′C′. Justifie.\n3) Que peut-on dire des droites (AB) et (A′B′) ?\n4) Quelle est la nature du quadrilatère ABCB′ ?",
          corrige: `1) O est le milieu de [AC], donc le symétrique de A est C et celui de C est A : **A′ = C** et **C′ = A**.

2) La symétrie centrale conserve les longueurs et les angles :
- **A′B′ = AB = 5 cm** ;
- **B′C′ = BC = 4 cm** ;
- **A′B′C′ = ABC = 110°**.

3) Une droite et son image par une symétrie centrale sont parallèles : **(AB) // (A′B′)**, c'est-à-dire (AB) // (CB′).

4) O est le milieu de [AC] et de [BB′] (car B′ est le symétrique de B). Les diagonales [AC] et [BB′] du quadrilatère ABCB′ ont le même milieu : **ABCB′ est un parallélogramme**.`,
        },
      ],
    },

    // ───────────────────────── 12. Aires et périmètres
    {
      id: "aires-perimetres",
      titre: "Aires et périmètres",
      theme: "Espace et géométrie",
      cours: `
## Périmètre et aire : ne pas confondre
- Le **périmètre** est la longueur du contour d'une figure (en cm, m…).
- L'**aire** est la mesure de la surface intérieure (en cm², m²…).

## Formules à connaître
| Figure | Périmètre | Aire |
|---|---|---|
| Carré de côté c | 4 × c | c × c = c² |
| Rectangle L × l | 2 × (L + l) | L × l |
| Parallélogramme (base b, hauteur h) | somme des 4 côtés | b × h |
| Triangle (base b, hauteur h) | somme des 3 côtés | (b × h) ÷ 2 |
| Disque de rayon r | 2 × π × r (ou π × d) | π × r² |

La **hauteur** est toujours **perpendiculaire** à la base choisie. Pour un triangle, c'est la distance entre le sommet et la droite portant la base.

## Le nombre π
π ≈ 3,14159… est le quotient du périmètre d'un cercle par son diamètre. On garde π dans un résultat **exact** (ex. : 9π cm²) et on prend la touche π de la calculatrice pour une valeur **approchée**.

>! **Exemples** :
>! Triangle de base 8 cm et de hauteur 5 cm : A = 8 × 5 ÷ 2 = **20 cm²**.
>! Parallélogramme de base 9 cm et de hauteur 4 cm : A = 9 × 4 = **36 cm²**.
>! Cercle de rayon 5 cm : P = 2 × π × 5 = 10π ≈ **31,4 cm**.
>! Disque de rayon 4 cm : A = π × 4² = 16π ≈ **50,3 cm²**.

## Attention aux pièges
- Si on a le **diamètre**, on le divise par 2 pour avoir le rayon : diamètre 10 cm → r = 5 cm → A = 25π cm².
- r² = r × r, et non 2 × r.
- Si on **double** les longueurs, le périmètre double mais l'**aire est multipliée par 4**.

## Conversions d'aires
1 m² = 100 dm² = 10 000 cm². Dans le tableau de conversion, il y a **deux colonnes par unité**.

| km² | hm² (ha) | dam² (a) | m² | dm² | cm² | mm² |
|---|---|---|---|---|---|---|
| ×100 → | ×100 → | ×100 → | ×100 → | ×100 → | ×100 → | |

## Figures composées
On découpe la figure en figures simples, on calcule chaque aire, puis on **additionne** (ou on **soustrait** les trous).

> **À retenir**
> - Parallélogramme : b × h ; triangle : b × h ÷ 2 ; disque : π × r².
> - Cercle : périmètre 2πr.
> - Valeur exacte avec π ; valeur approchée avec la calculatrice.
> - Aires : 1 m² = 10 000 cm².
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule l'aire (en cm²) d'un triangle de base 8 cm et de hauteur associée 5 cm.",
          reponses: ["20", "20 cm²", "20cm²", "20 cm2", "20cm2"],
          explication: "A = b × h ÷ 2 = 8 × 5 ÷ 2 = 40 ÷ 2 = 20 cm².",
        },
        {
          type: "saisie",
          question: "Calcule l'aire (en cm²) d'un parallélogramme de base 9 cm et de hauteur associée 4 cm.",
          reponses: ["36", "36 cm²", "36cm²", "36 cm2", "36cm2"],
          explication: "A = b × h = 9 × 4 = 36 cm². (On ne divise pas par 2 pour un parallélogramme.)",
        },
        {
          type: "qcm",
          question: "Quel est le périmètre d'un cercle de rayon 5 cm, arrondi au dixième ?",
          choix: ["15,7 cm", "78,5 cm", "31,4 cm", "25 cm"],
          reponse: 2,
          explication: "P = 2 × π × 5 = 10π ≈ 31,4 cm. 15,7 correspond à π × 5 (on a oublié le 2) et 78,5 à l'aire du disque.",
        },
        {
          type: "saisie",
          question: "Donne la valeur exacte de l'aire (en cm²) d'un disque de rayon 3 cm.",
          reponses: ["9π", "9 π", "9pi", "9 pi", "9×π", "9 × π", "π×9", "9π cm²", "9π cm2", "9pi cm²", "9pi cm2", "9 π cm²"],
          explication: "A = π × r² = π × 3² = 9π cm² (≈ 28,3 cm²).",
        },
        {
          type: "vf",
          question: "Si on double le rayon d'un disque, son aire double aussi.",
          reponse: false,
          explication: "Faux : π × (2r)² = π × 4r² = 4 × πr². L'aire est multipliée par 4.",
        },
        {
          type: "qcm",
          question: "Quelle est l'aire d'un disque de diamètre 10 cm ?",
          choix: ["100π cm²", "25π cm²", "10π cm²", "20π cm²"],
          reponse: 1,
          explication: "Le rayon vaut 10 ÷ 2 = 5 cm, donc A = π × 5² = 25π ≈ 78,5 cm².",
        },
        {
          type: "saisie",
          question: "Calcule l'aire d'un disque de rayon 4 cm, arrondie au dixième de cm².",
          reponses: ["50,3", "50.3", "50,3 cm²", "50,3 cm2"],
          explication: "A = π × 4² = 16π ≈ 50,265… ≈ 50,3 cm².",
        },
        {
          type: "qcm",
          question: "Combien vaut 3 m² en cm² ?",
          choix: ["300 cm²", "3 000 cm²", "30 000 cm²", "300 000 cm²"],
          reponse: 2,
          explication: "1 m² = 10 000 cm², donc 3 m² = 30 000 cm².",
        },
        {
          type: "redaction",
          question: "Une figure est formée d'un rectangle ABCD de longueur AB = 10 cm et de largeur BC = 6 cm, et d'un demi-disque de diamètre [BC] collé à l'extérieur, sur le côté [BC].\n1) Calcule l'aire exacte de la figure puis son arrondi au dixième.\n2) Calcule le périmètre exact de la figure puis son arrondi au dixième.",
          corrige: `1) Aire du rectangle : 10 × 6 = 60 cm².
Le demi-disque a pour rayon 6 ÷ 2 = 3 cm ; son aire est (π × 3²) ÷ 2 = 4,5π cm².
Aire totale : **60 + 4,5π cm² ≈ 74,1 cm²**.

2) Le contour est formé de [AB], [CD], [DA] et du demi-cercle (le côté [BC] est à l'intérieur, il ne compte pas).
- Côtés : 10 + 10 + 6 = 26 cm.
- Demi-cercle : (2 × π × 3) ÷ 2 = 3π cm.
Périmètre : **26 + 3π cm ≈ 35,4 cm**.`,
        },
      ],
    },

    // ───────────────────────── 13. Volumes
    {
      id: "volumes",
      titre: "Prismes droits, cylindres et volumes",
      theme: "Espace et géométrie",
      cours: `
## Le prisme droit
Un **prisme droit** est un solide formé de :
- deux **bases** : polygones superposables et parallèles (triangles, rectangles…) ;
- des **faces latérales** : rectangles perpendiculaires aux bases.
La **hauteur** est la distance entre les deux bases. Le pavé droit (et le cube) est un prisme droit particulier.

## Le cylindre de révolution
Un **cylindre** a deux bases qui sont des **disques** de même rayon, parallèles. On l'obtient en faisant tourner un rectangle autour d'un de ses côtés. Son patron est formé de deux disques et d'un rectangle dont la longueur est le périmètre du disque (2πr).

## Formule du volume
**Volume d'un prisme droit ou d'un cylindre = aire de la base × hauteur**

| Solide | Volume |
|---|---|
| Cube d'arête a | a × a × a = a³ |
| Pavé droit L × l × h | L × l × h |
| Prisme droit | aire de la base × h |
| Cylindre de rayon r, hauteur h | π × r² × h |

>! **Exemple 1** : prisme droit dont la base est un triangle rectangle de côtés de l'angle droit 3 cm et 4 cm, et de hauteur 10 cm.
>! Aire de la base : 3 × 4 ÷ 2 = 6 cm². Volume : 6 × 10 = **60 cm³**.

>! **Exemple 2** : cylindre de rayon 2 cm et de hauteur 5 cm.
>! V = π × 2² × 5 = 20π ≈ **62,8 cm³**.

## Unités de volume et de contenance
1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³. Dans le tableau, **trois colonnes** par unité.

**1 dm³ = 1 L** et **1 cm³ = 1 mL**. Donc 1 m³ = 1 000 L.

| m³ | dm³ | cm³ |
|---|---|---|
| 1 m³ = 1 000 L | 1 dm³ = 1 L | 1 cm³ = 1 mL |

>! **Conversion** : 2,5 m³ = 2 500 dm³ = **2 500 L**. 750 cm³ = 0,75 dm³ = 0,75 L = 75 cL.

## Aire latérale
L'aire latérale d'un prisme droit = **périmètre de la base × hauteur** (les faces latérales déroulées forment un grand rectangle). Pour un cylindre : 2πr × h.

> **À retenir**
> - V = aire de la base × hauteur (prisme droit et cylindre).
> - Cylindre : V = πr²h.
> - 1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1 000 L.
> - Toutes les longueurs dans la même unité avant de calculer !
`,
      exercices: [
        {
          type: "saisie",
          question: "Quel est le volume (en cm³) d'un cube d'arête 3 cm ?",
          reponses: ["27", "27 cm³", "27cm³", "27 cm3", "27cm3"],
          explication: "V = 3 × 3 × 3 = 27 cm³.",
        },
        {
          type: "saisie",
          question: "Un prisme droit a pour base un triangle rectangle dont les côtés de l'angle droit mesurent 3 cm et 4 cm. Sa hauteur est 10 cm. Calcule son volume en cm³.",
          reponses: ["60", "60 cm³", "60cm³", "60 cm3", "60cm3"],
          explication: "Aire de la base : 3 × 4 ÷ 2 = 6 cm². V = 6 × 10 = 60 cm³.",
        },
        {
          type: "qcm",
          question: "Quel est le volume d'un cylindre de rayon 2 cm et de hauteur 5 cm ?",
          choix: ["20π cm³", "10π cm³", "40π cm³", "100π cm³"],
          reponse: 0,
          explication: "V = π × r² × h = π × 4 × 5 = 20π ≈ 62,8 cm³.",
        },
        {
          type: "vf",
          question: "1 dm³ = 1 L.",
          reponse: true,
          explication: "Vrai : un cube de 10 cm de côté contient exactement 1 litre.",
        },
        {
          type: "saisie",
          question: "Convertis 2,5 m³ en litres.",
          reponses: ["2500", "2 500", "2500 L", "2 500 L"],
          explication: "1 m³ = 1 000 dm³ = 1 000 L, donc 2,5 m³ = 2 500 L.",
        },
        {
          type: "qcm",
          question: "Quel est le volume d'un pavé droit de dimensions 5 cm, 4 cm et 3 cm ?",
          choix: ["12 cm³", "47 cm³", "60 cm²", "60 cm³"],
          reponse: 3,
          explication: "V = 5 × 4 × 3 = 60 cm³. Attention à l'unité : un volume s'exprime en unités cubes (cm³), pas en cm².",
        },
        {
          type: "saisie",
          question: "Un verre cylindrique a un rayon de 3 cm et une hauteur de 10 cm. Calcule son volume arrondi au cm³.",
          reponses: ["283", "283 cm³", "283cm³", "283 cm3", "283cm3"],
          explication: "V = π × 3² × 10 = 90π ≈ 282,7 cm³, soit environ 283 cm³ (environ 28 cL).",
        },
        {
          type: "redaction",
          question: "Un aquarium a la forme d'un pavé droit de longueur 60 cm, de largeur 30 cm et de hauteur 40 cm.\n1) Calcule son volume en cm³ puis en litres.\n2) On le remplit aux 3/4. Quel volume d'eau contient-il ?\n3) Un robinet débite 6 L par minute. Combien de temps faut-il pour le remplir aux 3/4 ?",
          corrige: `1) V = 60 × 30 × 40 = **72 000 cm³**.
Comme 1 000 cm³ = 1 dm³ = 1 L : V = **72 L**.

2) 3/4 de 72 L = 72 ÷ 4 × 3 = 18 × 3 = **54 L**.

3) Durée : 54 ÷ 6 = **9 minutes**.`,
        },
      ],
    },

    // ───────────────────────── 14. Grandeurs et conversions
    {
      id: "grandeurs-conversions",
      titre: "Grandeurs, unités et conversions",
      theme: "Nombres et calculs",
      cours: `
## Longueurs, masses, contenances
Pour ces grandeurs, on passe d'une unité à la suivante en multipliant ou divisant par **10**.

| k (kilo) | h (hecto) | da (déca) | unité | d (déci) | c (centi) | m (milli) |
|---|---|---|---|---|---|---|
| km | hm | dam | m | dm | cm | mm |
| kg | hg | dag | g | dg | cg | mg |
| kL | hL | daL | L | dL | cL | mL |

>! **Exemples** : 3,5 km = 3 500 m ; 250 g = 0,25 kg ; 1,2 L = 120 cL ; 45 mm = 4,5 cm.

## Aires et volumes
- Aires : on multiplie par **100** d'une unité à la suivante (1 m² = 100 dm²).
- Volumes : on multiplie par **1 000** (1 m³ = 1 000 dm³).
- 1 hectare (ha) = 10 000 m² ; 1 dm³ = 1 L.

## Durées
Les durées ne sont **pas décimales** : 1 h = 60 min ; 1 min = 60 s ; 1 j = 24 h.
- 2 h 15 min = 2 × 60 + 15 = 135 min.
- 1,25 h = 1 h + 0,25 × 60 min = **1 h 15 min** (et non 1 h 25 !).
- 0,5 h = 30 min ; 0,1 h = 6 min ; 0,75 h = 45 min.

>! **Calculer une durée** : départ 8 h 47, arrivée 11 h 22.
>! De 8 h 47 à 9 h 00 : 13 min ; de 9 h à 11 h : 2 h ; de 11 h à 11 h 22 : 22 min.
>! Total : 2 h + 13 min + 22 min = **2 h 35 min**.

## Grandeurs produits et quotients
- **Vitesse moyenne** : v = d ÷ t (en km/h, m/s…). On en déduit d = v × t et t = d ÷ v.
- Conversion : 90 km/h = 90 000 m en 3 600 s = 25 m/s (on divise par 3,6).
- **Débit** (L/min), **prix au kilo** (€/kg), **masse volumique** (g/cm³) sont aussi des grandeurs quotients.

>! **Exemple** : 217 km en 2 h 35 min. 2 h 35 min = 155 min = 155/60 h.
>! v = 217 ÷ (155/60) = 217 × 60 ÷ 155 = **84 km/h**.

> **À retenir**
> - Longueurs, masses, contenances : ×10 ; aires : ×100 ; volumes : ×1 000.
> - Durées : base 60 ! 0,25 h = 15 min.
> - v = d ÷ t ; km/h ÷ 3,6 = m/s.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 3,5 km en mètres.",
          reponses: ["3500", "3 500", "3500 m", "3 500 m"],
          explication: "1 km = 1 000 m, donc 3,5 km = 3,5 × 1 000 = 3 500 m.",
        },
        {
          type: "saisie",
          question: "Convertis 2 h 15 min en minutes.",
          reponses: ["135", "135 min"],
          explication: "2 h = 120 min, donc 2 h 15 min = 120 + 15 = 135 min.",
        },
        {
          type: "qcm",
          question: "Combien vaut 4,2 m² en cm² ?",
          choix: ["420 cm²", "4 200 cm²", "420 000 cm²", "42 000 cm²"],
          reponse: 3,
          explication: "1 m² = 10 000 cm², donc 4,2 m² = 42 000 cm².",
        },
        {
          type: "saisie",
          question: "Convertis 1,25 h en heures et minutes (format « 1 h … min »).",
          reponses: ["1 h 15 min", "1h15min", "1h15", "1 h 15", "1 h 15 min"],
          explication: "0,25 h = 0,25 × 60 min = 15 min. Donc 1,25 h = 1 h 15 min.",
        },
        {
          type: "vf",
          question: "1 L = 1 000 cm³.",
          reponse: true,
          explication: "Vrai : 1 L = 1 dm³ = 1 000 cm³ (et donc 1 cm³ = 1 mL).",
        },
        {
          type: "qcm",
          question: "Combien vaut 90 km/h en m/s ?",
          choix: ["25 m/s", "324 m/s", "9 m/s", "1,5 m/s"],
          reponse: 0,
          explication: "90 km/h = 90 000 m en 3 600 s. 90 000 ÷ 3 600 = 25 m/s (ou 90 ÷ 3,6 = 25).",
        },
        {
          type: "saisie",
          question: "Convertis 250 g en kg.",
          reponses: ["0,25", "0.25", "0,25 kg", "0.25 kg"],
          explication: "1 kg = 1 000 g, donc 250 g = 250 ÷ 1 000 = 0,25 kg.",
        },
        {
          type: "redaction",
          question: "Un train part à 8 h 47 et arrive à 11 h 22. Il a parcouru 217 km.\n1) Calcule la durée du trajet.\n2) Calcule sa vitesse moyenne en km/h.\n3) À cette vitesse, quelle distance parcourrait-il en 45 minutes ?",
          corrige: `1) De 8 h 47 à 9 h : 13 min. De 9 h à 11 h : 2 h. De 11 h à 11 h 22 : 22 min.
Durée : **2 h 35 min**, soit 155 min.

2) 155 min = 155/60 h.
v = d ÷ t = 217 ÷ (155/60) = 217 × 60 ÷ 155 = 13 020 ÷ 155 = **84 km/h**.

3) 45 min = 0,75 h. d = v × t = 84 × 0,75 = **63 km**.`,
        },
      ],
    },

    // ───────────────────────── 15. Algorithmique et Scratch
    {
      id: "algorithmique-scratch",
      titre: "Algorithmique et programmation (Scratch)",
      theme: "La pensée informatique",
      cours: `
## Algorithme et programme
Un **algorithme** est une suite finie d'instructions permettant de résoudre un problème. Un **programme** est la traduction d'un algorithme dans un langage compris par l'ordinateur. En 5e, tu utilises **Scratch** : on assemble des **blocs**.

## Les grandes familles de blocs
| Famille | Exemples | Rôle |
|---|---|---|
| Événements | « quand drapeau vert cliqué » | démarrer un script |
| Mouvement | « avancer de 50 », « tourner de 90 degrés », « aller à x : 0 y : 0 » | déplacer le lutin |
| Stylo | « stylo en position d'écriture », « relever le stylo » | dessiner |
| Variables | « mettre x à 3 », « ajouter 2 à x » | mémoriser des valeurs |
| Contrôle | « répéter 4 fois », « si … alors … sinon » | boucles et tests |
| Capteurs | « demander … et attendre », « réponse » | interagir |
| Opérateurs | +, −, ×, ÷, « … modulo … », comparaisons | calculer, comparer |

## Entrées et sorties
Un programme reçoit des **entrées** (les données : un nombre demandé avec « demander … et attendre », une valeur de départ…) et produit des **sorties** (le résultat : ce que le lutin « dit », la figure tracée…). Avant d'exécuter un programme, essaie de **prévoir** la sortie.

>! **Exemple** : « demander Choisis un nombre et attendre » ; « dire (réponse × 3) + 4 ». Entrée : le nombre choisi ; sortie : le triple du nombre augmenté de 4. Si on tape 5, le lutin dit 19.

## Variables
*En 5e, tu utilises surtout une variable en lecture (par exemple « réponse », la donnée saisie). Modifier soi-même une variable (« mettre … à », « ajouter … à ») sera approfondi en 4e : les exercices correspondants sont marqués « pour aller plus loin ».*

Une **variable** est une « boîte » qui porte un nom et contient une valeur qui **peut changer** au cours du programme.

>! **Exemple** : « mettre n à 1 », puis « répéter 5 fois : mettre n à n × 2 ».
>! n vaut successivement 1 → 2 → 4 → 8 → 16 → **32**.

## Boucles
- **répéter N fois** : on connaît le nombre de répétitions.
- Pour aller plus loin : **répéter jusqu'à** (condition), on répète tant que la condition n'est pas vraie ; **répéter indéfiniment**.

## Instructions conditionnelles (pour aller plus loin : notion de 4e)
« **si** condition **alors** … **sinon** … » : le programme fait un choix. Ce n'est **pas** une boucle.

>! **Exemple** : « si (réponse modulo 2) = 0 alors dire Pair sinon dire Impair ».

## Tracer des polygones réguliers
Pour un polygone régulier à n côtés, le lutin tourne à chaque sommet d'un angle de **360° ÷ n** (angle extérieur).

| Polygone | Côtés | Angle de rotation |
|---|---|---|
| Triangle équilatéral | 3 | 120° |
| Carré | 4 | 90° |
| Pentagone régulier | 5 | 72° |
| Hexagone régulier | 6 | 60° |

>! **Script du carré** : stylo en position d'écriture ; répéter 4 fois : avancer de 50, tourner de 90 degrés.

Attention : pour un triangle équilatéral, on ne tourne pas de 60° (angle intérieur) mais de **120°**.

## Repérage dans Scratch
La scène est un repère : x va de −240 à 240, y de −180 à 180. Le centre est (0 ; 0). L'orientation 90 correspond à « vers la droite ».

> **À retenir**
> - Variable = boîte nommée dont la valeur change.
> - Boucle « répéter » ≠ test « si … alors … sinon ».
> - Polygone régulier à n côtés : tourner de 360° ÷ n à chaque sommet.
> - Exécute un script « à la main » en notant les valeurs des variables à chaque étape.
`,
      exercices: [
        {
          type: "qcm",
          question: "Que dessine le script : « stylo en position d'écriture ; répéter 4 fois : avancer de 50, tourner de 90 degrés » ?",
          choix: ["Un triangle", "Un rectangle non carré", "Un carré de côté 50", "Une ligne droite"],
          reponse: 2,
          explication: "4 côtés de même longueur (50) et 4 virages de 90° : c'est un carré.",
        },
        {
          type: "vf",
          question: "Dans un programme, la valeur d'une variable peut changer.",
          reponse: true,
          explication: "Vrai : c'est justement le principe d'une variable (bloc « mettre … à » ou « ajouter … à »).",
        },
        {
          type: "saisie",
          question: "(Pour aller plus loin) Script : « mettre x à 3 » puis « répéter 4 fois : ajouter 2 à x ». Quelle est la valeur finale de x ?",
          reponses: ["11"],
          explication: "x vaut 3, puis 5, 7, 9, 11. Valeur finale : 3 + 4 × 2 = 11.",
        },
        {
          type: "qcm",
          question: "Que dessine le script « répéter 6 fois : avancer de 40, tourner de 60 degrés » ?",
          choix: ["Un pentagone régulier", "Un hexagone régulier", "Un triangle", "Un cercle"],
          reponse: 1,
          explication: "6 côtés égaux et 6 × 60° = 360° : c'est un hexagone régulier.",
        },
        {
          type: "saisie",
          question: "De combien de degrés le lutin doit-il tourner à chaque sommet pour tracer un triangle équilatéral ?",
          reponses: ["120", "120°", "120 degrés"],
          explication: "360° ÷ 3 = 120°. Le lutin tourne de l'angle extérieur, pas de l'angle intérieur (60°).",
        },
        {
          type: "vf",
          question: "(Pour aller plus loin) Le bloc « si … alors … sinon » est une boucle.",
          reponse: false,
          explication: "Faux : c'est une instruction conditionnelle (un test). Une boucle répète des instructions (« répéter », « répéter jusqu'à »).",
        },
        {
          type: "saisie",
          question: "(Pour aller plus loin) Script : « mettre n à 1 » puis « répéter 5 fois : mettre n à n × 2 ». Quelle est la valeur finale de n ?",
          reponses: ["32"],
          explication: "n prend les valeurs 1, 2, 4, 8, 16, 32. Après 5 doublements : 2⁵ = 32.",
        },
        {
          type: "qcm",
          question: "(Pour aller plus loin) Un script demande un nombre puis exécute « si (réponse modulo 2) = 0 alors dire Pair sinon dire Impair ». Que dit le lutin si on tape 17 ?",
          choix: ["Pair", "Rien", "Impair", "8"],
          reponse: 2,
          explication: "17 modulo 2 est le reste de la division de 17 par 2 : 17 = 2 × 8 + 1, le reste vaut 1 ≠ 0. Le lutin dit « Impair ».",
        },
        {
          type: "redaction",
          question: "1) Écris un script Scratch qui trace un pentagone régulier de côté 80 pas, en commençant par le drapeau vert. Justifie l'angle choisi.\n2) (Pour aller plus loin) On ajoute une variable « périmètre ». Comment la calculer dans le script ? Quelle valeur contient-elle à la fin ?\n3) Comment modifier le script pour tracer un polygone régulier dont le nombre de côtés est demandé à l'utilisateur ?",
          corrige: `1) Script :
- quand drapeau vert cliqué
- effacer tout ; aller à x : 0 y : 0 ; s'orienter à 90
- stylo en position d'écriture
- répéter 5 fois : avancer de 80 ; tourner de 72 degrés
- relever le stylo

À chaque sommet, le lutin tourne de l'angle extérieur : 360° ÷ 5 = **72°**. Après 5 virages, il a fait un tour complet (5 × 72 = 360).

2) Avant la boucle : « mettre périmètre à 0 ». Dans la boucle, après « avancer de 80 » : « ajouter 80 à périmètre ».
À la fin, périmètre vaut 5 × 80 = **400**.

3) - « demander Combien de côtés ? et attendre » ;
- « répéter (réponse) fois : avancer de 80 ; tourner de (360 / réponse) degrés ».
Le même script trace alors un triangle (3), un carré (4), un hexagone (6)…`,
        },
        {
          type: "saisie",
          question: "Un script contient : « demander Choisis un nombre et attendre » puis « dire (réponse × 3) + 4 ». On tape 5. Que dit le lutin ?",
          reponses: ["19"],
          explication: "L'entrée est 5 ; la sortie est 5 × 3 + 4 = 15 + 4 = 19 (la multiplication est prioritaire).",
        },
      ],
    },

    // ───────────────────────── 16. Carrés et cubes (puissances)
    {
      id: "puissances-carres-cubes",
      titre: "Carrés et cubes : premières puissances",
      theme: "Nombres et calculs",
      cours: `
## Notation
Pour un nombre a :
- **a² = a × a** se lit « a au carré » (ou « a puissance 2 ») ;
- **a³ = a × a × a** se lit « a au cube » (ou « a puissance 3 »).
Le petit nombre en haut s'appelle l'**exposant** : il indique combien de fois on multiplie le nombre par lui-même.

>! **Exemples** : 5² = 5 × 5 = 25 ; 2³ = 2 × 2 × 2 = 8 ; 10³ = 10 × 10 × 10 = 1 000 ; 0,5² = 0,25.
>! Piège : 5² n'est **pas** 5 × 2 = 10 !

## Pourquoi « carré » et « cube » ?
- L'aire d'un carré de côté c est **c × c = c²** : un carré de 4 cm de côté a une aire de 4² = 16 cm².
- Le volume d'un cube d'arête a est **a × a × a = a³** : un cube de 10 cm d'arête a un volume de 10³ = 1 000 cm³ = 1 L.

## Carrés à connaître par cœur
| n | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| n² | 0 | 1 | 4 | 9 | 16 | 25 | 36 | 49 | 64 | 81 | 100 | 121 | 144 |

Et le cube de 10 : **10³ = 1 000**. Ces résultats servent aussi « à l'envers » : 81 = 9², 144 = 12², 1 000 = 10³.

## Priorités opératoires avec des puissances
Les **puissances** se calculent **avant** les multiplications et les divisions, elles-mêmes avant les additions et soustractions (les parenthèses restent prioritaires sur tout).

>! **Exemples**
>! - 3 × 4² = 3 × 16 = 48 (et non 12² = 144).
>! - 2 + 3² = 2 + 9 = 11.
>! - (2 + 3)² = 5² = 25.
>! - 10² − 6² = 100 − 36 = 64.

Attention : (2 + 3)² = 25 mais 2² + 3² = 4 + 9 = 13 : on ne peut pas « distribuer » le carré sur une somme.

> **À retenir**
> - a² = a × a ; a³ = a × a × a.
> - Carrés de 0 à 12 par cœur ; 10³ = 1 000.
> - Priorités : parenthèses, puis puissances, puis × et ÷, puis + et −.
> - Aire d'un carré : c² ; volume d'un cube : a³.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule 7².",
          reponses: ["49"],
          explication: "7² = 7 × 7 = 49 (et non 7 × 2 = 14).",
        },
        {
          type: "qcm",
          question: "Combien vaut 5³ ?",
          choix: ["125", "15", "25", "53"],
          reponse: 0,
          explication: "5³ = 5 × 5 × 5 = 25 × 5 = 125. 15 correspond à l'erreur 5 × 3.",
        },
        {
          type: "vf",
          question: "144 est le carré de 12.",
          reponse: true,
          explication: "Vrai : 12² = 12 × 12 = 144.",
        },
        {
          type: "saisie",
          question: "Calcule 3 × 2³.",
          reponses: ["24"],
          explication: "La puissance est prioritaire : 2³ = 8, puis 3 × 8 = 24. (Calculer 6³ = 216 serait une erreur de priorité.)",
        },
        {
          type: "saisie",
          question: "Calcule 2 + 3².",
          reponses: ["11"],
          explication: "D'abord la puissance : 3² = 9 ; puis 2 + 9 = 11. (Ne pas calculer 5² = 25.)",
        },
        {
          type: "vf",
          question: "(2 + 3)² = 2² + 3².",
          reponse: false,
          explication: "Faux : (2 + 3)² = 5² = 25, alors que 2² + 3² = 4 + 9 = 13.",
        },
        {
          type: "qcm",
          question: "Quel est le volume d'un cube de 10 cm d'arête ?",
          choix: ["30 cm³", "100 cm³", "1 000 cm²", "1 000 cm³"],
          reponse: 3,
          explication: "V = 10³ = 10 × 10 × 10 = 1 000 cm³, soit 1 L. Un volume s'exprime en unités cubes (cm³).",
        },
        {
          type: "saisie",
          question: "Quel nombre entier positif a pour carré 81 ?",
          reponses: ["9"],
          explication: "9 × 9 = 81, donc 81 = 9².",
        },
        {
          type: "redaction",
          question: "1) Calcule A = 4² + 3 × 5 et B = (4 + 3) × 5².\n2) Un carré a une aire de 64 cm². Quelle est la longueur de son côté ? Son périmètre ?\n3) On note A(c) l'aire d'un carré de côté c (en cm). Complète : A(3) = … ; A(6) = … L'aire est-elle proportionnelle au côté ? Justifie.",
          corrige: `1) A = 4² + 3 × 5 = 16 + 15 = **31** (puissance, puis multiplication, puis addition).
B = (4 + 3) × 5² = 7 × 25 = **175** (parenthèses, puis puissance, puis multiplication).

2) L'aire vaut c² = 64 et 8² = 64 : le côté mesure **8 cm**. Périmètre : 4 × 8 = **32 cm**.

3) A(c) = c², donc **A(3) = 9 cm²** et **A(6) = 36 cm²**.
Quand le côté double (3 → 6), l'aire est multipliée par 4 (9 → 36), pas par 2 : **l'aire n'est pas proportionnelle au côté** (9 ÷ 3 = 3 mais 36 ÷ 6 = 6, il n'y a pas de coefficient constant).`,
        },
      ],
    },

    // ───────────────────────── 17. Équations simples
    {
      id: "equations-simples",
      titre: "Premières équations : x + b = c et ax = c",
      theme: "Nombres et calculs",
      cours: `
## Vocabulaire
Une **équation** est une égalité qui contient un nombre inconnu, souvent noté x (l'**inconnue**).
Une **solution** de l'équation est une valeur de x qui rend l'égalité **vraie**. **Résoudre** l'équation, c'est trouver sa (ou ses) solution(s).

>! **Tester une valeur** : 3 est-il solution de 2x + 1 = 7 ? 2 × 3 + 1 = 7 : **oui**. Et 4 ? 2 × 4 + 1 = 9 ≠ 7 : **non**.

## Équations du type x + b = c
« Quel nombre faut-il ajouter à b pour obtenir c ? » On fait l'**opération inverse** : une soustraction.
**x + b = c ⟺ x = c − b**

>! **Exemples**
>! - x + 7 = 12 : x = 12 − 7 = **5**. Vérification : 5 + 7 = 12.
>! - x + 9 = 4 : x = 4 − 9 = **−5**. Vérification : −5 + 9 = 4.
>! - x − 3 = 8 : on cherche le nombre auquel on retire 3 pour obtenir 8 : x = 8 + 3 = **11**.

## Équations du type ax = c (a ≠ 0)
« Par quel nombre faut-il multiplier a pour obtenir c ? » On fait l'opération inverse : une **division**.
**ax = c ⟺ x = c ÷ a = c/a**

>! **Exemples**
>! - 4x = 28 : x = 28 ÷ 4 = **7**. Vérification : 4 × 7 = 28.
>! - 5x = 12 : x = 12/5 = **2,4**.
>! - 3x = 7 : x = **7/3** (on garde la fraction : 7 ÷ 3 ne tombe pas juste).

## Mettre un problème en équation
>! **Méthode**
>! 1. Choisir l'inconnue : « Soit x le prix d'un cahier. »
>! 2. Traduire l'énoncé par une équation.
>! 3. Résoudre.
>! 4. Vérifier et répondre par une phrase.
>! Exemple : 6 cahiers identiques coûtent 15 €. 6x = 15, x = 15 ÷ 6 = 2,5. **Un cahier coûte 2,50 €.**

> **À retenir**
> - Solution = valeur qui rend l'égalité vraie : on la vérifie en remplaçant.
> - x + b = c ⟺ x = c − b.
> - ax = c ⟺ x = c/a (a ≠ 0).
> - Toujours vérifier la solution trouvée.
`,
      exercices: [
        {
          type: "vf",
          question: "Le nombre 3 est solution de l'équation 2x + 1 = 7.",
          reponse: true,
          explication: "Vrai : 2 × 3 + 1 = 6 + 1 = 7. L'égalité est vraie pour x = 3.",
        },
        {
          type: "saisie",
          question: "Résous x + 7 = 12.",
          reponses: ["5", "x=5", "x = 5"],
          explication: "x = 12 − 7 = 5. Vérification : 5 + 7 = 12.",
        },
        {
          type: "saisie",
          question: "Résous 4x = 28.",
          reponses: ["7", "x=7", "x = 7"],
          explication: "x = 28 ÷ 4 = 7. Vérification : 4 × 7 = 28.",
        },
        {
          type: "qcm",
          question: "Quelle est la solution de x + 9 = 4 ?",
          choix: ["13", "5", "−5", "4/9"],
          reponse: 2,
          explication: "x = 4 − 9 = −5. Vérification : −5 + 9 = 4. (13 vient de l'erreur 4 + 9.)",
        },
        {
          type: "saisie",
          question: "Résous 5x = 12 (donne la solution en écriture décimale).",
          reponses: ["2,4", "2.4", "x=2,4", "x = 2,4", "12/5"],
          explication: "x = 12 ÷ 5 = 2,4. Vérification : 5 × 2,4 = 12.",
        },
        {
          type: "qcm",
          question: "Quelle est la solution de 3x = 7 ?",
          choix: ["7/3", "4", "3/7", "21"],
          reponse: 0,
          explication: "x = 7 ÷ 3 = 7/3. Vérification : 3 × 7/3 = 7. (3/7 est l'inverse, 4 vient de 7 − 3.)",
        },
        {
          type: "saisie",
          question: "Résous x − 3 = 8.",
          reponses: ["11", "x=11", "x = 11"],
          explication: "On cherche le nombre auquel on retire 3 pour obtenir 8 : x = 8 + 3 = 11. Vérification : 11 − 3 = 8.",
        },
        {
          type: "redaction",
          question: "1) Six cahiers identiques coûtent 15 €. Écris une équation dont le prix x d'un cahier est solution, puis résous-la.\n2) Léo a des billes. Il en gagne 17 à la récréation et en a maintenant 52. Écris une équation et trouve combien il en avait au départ.\n3) Le périmètre d'un carré est 26 cm. Écris une équation dont la longueur c du côté est solution, puis résous-la.",
          corrige: `1) Soit x le prix d'un cahier (en €). **6x = 15**, donc x = 15 ÷ 6 = **2,5**.
Vérification : 6 × 2,5 = 15. **Un cahier coûte 2,50 €.**

2) Soit x le nombre de billes au départ. **x + 17 = 52**, donc x = 52 − 17 = **35**.
Vérification : 35 + 17 = 52. **Léo avait 35 billes.**

3) Le périmètre d'un carré de côté c vaut 4 × c : **4c = 26**, donc c = 26 ÷ 4 = **6,5**.
Vérification : 4 × 6,5 = 26. **Le côté mesure 6,5 cm.**`,
        },
      ],
    },

    // ───────────────────────── 18. Représenter l'espace
    {
      id: "representer-espace",
      titre: "Représenter l'espace : perspective, patrons et vues",
      theme: "Espace et géométrie",
      cours: `
## Pourquoi représenter l'espace ?
Un solide (pavé, cube, prisme, cylindre) a trois dimensions, mais une feuille n'en a que deux. Pour le représenter, on utilise :
- la **perspective cavalière** : un dessin qui « donne l'impression » du relief ;
- le **patron** : la surface du solide dépliée à plat, que l'on peut découper puis plier ;
- les **vues** (de face, de dessus…) : ce que l'on voit en regardant le solide depuis une direction.

## La perspective cavalière
On regarde le solide bien en face. Règles à respecter :
1. La **face avant** (et la face arrière qui lui est parallèle) est dessinée **en vraie grandeur** : un carré reste un carré, un rectangle reste un rectangle de mêmes dimensions.
2. Les arêtes qui partent « vers le fond » s'appellent les **fuyantes**. Elles sont toutes **parallèles** entre elles, tracées avec le même angle (souvent 30° ou 45° par rapport à l'horizontale) et leurs longueurs sont **réduites** par un même coefficient (souvent 0,5).
3. Des arêtes **parallèles** dans la réalité restent **parallèles** sur le dessin ; des arêtes parallèles de même longueur ont la même longueur sur le dessin.
4. Les arêtes **visibles** sont en traits pleins, les arêtes **cachées** en **pointillés**.

Conséquence : sur le dessin, les faces du dessus et des côtés deviennent des **parallélogrammes**, et les angles droits de ces faces ne sont plus droits sur la figure (même s'ils le sont sur le vrai solide).

>! **Exemple : le cube ABCDEFGH** (face avant ABFE, face du fond DCGH)
>! ~~~
>!       H--------G
>!      /:       /|
>!     / :      / |
>!    E--------F  |
>!    |  D.....|..C
>!    | .      | /
>!    |.       |/
>!    A--------B
>! ~~~
>! La face avant ABFE est un vrai carré. Les fuyantes AD, BC, FG et EH sont parallèles et plus courtes. Les trois arêtes qui partent du sommet D (DA, DC et DH) sont cachées : elles sont en pointillés.

### Méthode pour tracer un pavé droit
Pavé de 6 cm de large, 4 cm de haut et 5 cm de profondeur, fuyantes à 45° réduites de moitié :
1. Trace la face avant : un rectangle de 6 cm sur 4 cm, en vraie grandeur.
2. Depuis trois sommets visibles, trace trois fuyantes parallèles à 45°, de longueur 5 × 0,5 = **2,5 cm**.
3. Relie leurs extrémités pour obtenir la face arrière (un rectangle de 6 cm sur 4 cm, décalé).
4. Le quatrième sommet arrière (en bas, au fond) est caché : les trois arêtes qui y arrivent sont en pointillés.

Le **cube** se trace de la même façon : c'est un pavé dont toutes les arêtes ont la même longueur (sur le dessin, seules les fuyantes sont plus courtes).

### Le prisme droit
Pour un prisme droit à base triangulaire posé « de face » : dessine la base avant (le triangle) **en vraie grandeur**, puis trace depuis chacun de ses trois sommets une fuyante (parallèles, même longueur réduite) ; relie les trois extrémités pour obtenir l'autre base, superposable à la première. Les arêtes latérales sont les fuyantes ; une arête de la base arrière est cachée en général : pointillés.

### Le cylindre
Les deux bases (des disques) se dessinent comme des **ellipses** (des « ovales ») ; on les relie par deux segments verticaux tangents aux ellipses (les bords du cylindre). La moitié arrière de l'ellipse du bas est cachée : on la dessine en pointillés.
>! ~~~
>!     _________
>!    /         \\
>!   (           )
>!   |\\_________/|
>!   |           |
>!   |           |
>!   |           |
>!   (. . . . . .)
>!    \\_________/
>! ~~~
>! En haut, la base du dessus : ellipse entière en trait plein. Sur les côtés, les deux bords verticaux. En bas, la moitié arrière de l'ellipse est cachée (pointillés) et la moitié avant est en trait plein.

## Les patrons
Un **patron** d'un solide est une figure plane, d'un seul morceau, qui permet de fabriquer le solide par pliage, **sans superposition** de faces.

| Solide | Le patron contient |
|---|---|
| Cube | 6 carrés identiques |
| Pavé droit | 6 rectangles, identiques deux à deux |
| Prisme droit à base triangulaire | 2 triangles superposables et 3 rectangles |
| Cylindre | 2 disques de même rayon r et 1 rectangle de longueur 2πr (le périmètre du disque) et de largeur la hauteur |

>! **Un patron du cube « en croix »**
>! ~~~
>!     +---+
>!     | 1 |
>! +---+---+---+---+
>! | 2 | 3 | 4 | 5 |
>! +---+---+---+---+
>!     | 6 |
>!     +---+
>! ~~~
>! Une fois plié : 1 et 6 sont des faces **opposées**, de même que 2 et 4, et 3 et 5.

**Règle utile** : dans une rangée de carrés d'un patron de cube, deux faces séparées par **une** face sont opposées. Deux faces qui ont un côté commun sur le patron sont toujours **voisines** (jamais opposées).

### Correspondance entre le patron et le solide
Quand on plie le patron, certains **côtés** se recollent pour former une même **arête**, et plusieurs **sommets** du patron se rejoignent en un même sommet du solide.
- Deux côtés qui se recollent ont **la même longueur** : c'est ce qui permet de vérifier ou de compléter un patron.
- Sur le patron en croix ci-dessus, le côté gauche du carré 1 se recolle avec le côté du haut du carré 2.
- Le patron en croix a 14 sommets, alors que le cube n'en a que 8 : au pliage, plusieurs sommets du patron se rejoignent en un seul sommet du cube.

Pour un pavé de dimensions 4 cm, 3 cm et 2 cm, le patron contient deux rectangles 4 × 3, deux rectangles 4 × 2 et deux rectangles 3 × 2. Pour un cylindre de rayon 2 cm et de hauteur 5 cm, le rectangle mesure 2π × 2 = 4π ≈ 12,6 cm sur 5 cm.

## Empilements de cubes : vues et dénombrement
On décrit un empilement de petits cubes identiques par un **plan des hauteurs** : on dessine la vue de dessus en quadrillage et on écrit dans chaque case **le nombre de cubes empilés** sur cette case. Sous chaque cube, il y a forcément un autre cube ou le sol (un cube ne flotte pas).

>! **Exemple** (la ligne du bas est l'avant, face à toi)
>! ~~~
>!          gauche    droite
>!  fond    | 1 | 2 | 1 |
>!  milieu  | 3 | 2 | 1 |
>!  avant   | 2 | 1 | 1 |
>! ~~~
>! - **Nombre de cubes** : on additionne toutes les cases : 1 + 2 + 1 + 3 + 2 + 1 + 2 + 1 + 1 = **14 cubes** (y compris ceux que l'on ne voit pas, cachés derrière ou dessous).
>! - **Vue de dessus** : on voit un carré de 3 × 3 cases (toutes les cases portent au moins un cube).
>! - **Vue de face** : pour chaque colonne, on garde la **plus grande** hauteur : colonne de gauche max(1 ; 3 ; 2) = 3, colonne du milieu max(2 ; 2 ; 1) = 2, colonne de droite max(1 ; 1 ; 1) = 1.
>! ~~~
>! +---+
>! |   |
>! +---+---+
>! |   |   |
>! +---+---+---+
>! |   |   |   |
>! +---+---+---+
>! ~~~
>! - Pour compléter cet empilement en un grand cube de 3 × 3 × 3 = 27 petits cubes, il faut ajouter 27 − 14 = **13 cubes**.

**Attention** : la vue de face ne permet pas de compter les cubes, car les cubes situés derrière sont cachés. Deux empilements différents peuvent avoir la même vue de face et la même vue de dessus.

## Erreurs fréquentes
- Dessiner toutes les faces du cube en carrés : seules la face avant et la face arrière sont des carrés en perspective cavalière.
- Oublier de réduire les fuyantes, ou les tracer avec des angles différents.
- Oublier les pointillés pour les arêtes cachées.
- Croire qu'un assemblage de 6 carrés est toujours un patron du cube (une rangée de 6 carrés n'en est pas un, ni une rangée de 5 carrés avec un carré accroché).
- Pour le cylindre, prendre le rayon (ou le diamètre) comme longueur du rectangle au lieu du périmètre 2πr.
- Compter seulement les cubes visibles sur une vue : il faut le plan des hauteurs.

> **À retenir**
> - Perspective cavalière : face avant en vraie grandeur ; fuyantes parallèles, même angle, longueurs réduites ; arêtes cachées en pointillés.
> - Patron : figure d'un seul tenant qui se plie en solide sans recouvrement ; les côtés qui se recollent ont la même longueur.
> - Patron du cylindre : 2 disques et un rectangle de longueur 2πr.
> - Plan des hauteurs : nombre de cubes = somme des nombres inscrits ; vue de face = plus grande hauteur de chaque colonne.
`,
      exercices: [
        {
          type: "qcm",
          question: "En perspective cavalière, comment représente-t-on les arêtes cachées d'un solide ?",
          choix: ["On ne les dessine pas", "En pointillés", "En traits pleins plus épais", "En couleur rouge"],
          reponse: 1,
          explication: "Les arêtes cachées sont dessinées en pointillés : on les voit sur le dessin, mais on comprend qu'elles sont derrière. Si on ne les dessinait pas, on perdrait de l'information sur la forme du solide.",
        },
        {
          type: "vf",
          question: "En perspective cavalière, les six faces d'un cube sont toutes dessinées comme des carrés.",
          reponse: false,
          explication: "Faux : seules la face avant et la face arrière sont dessinées en vraie grandeur (des carrés). Les quatre autres faces deviennent des parallélogrammes, car les fuyantes sont inclinées et réduites.",
        },
        {
          type: "saisie",
          question: "On dessine en perspective cavalière un pavé droit de 5 cm de profondeur. Les fuyantes sont réduites par le coefficient 0,5. Quelle est la longueur (en cm) d'une fuyante sur le dessin ?",
          reponses: ["2,5", "2,5 cm"],
          explication: "Longueur dessinée = longueur réelle × coefficient = 5 × 0,5 = 2,5 cm. Les dimensions de la face avant, elles, ne sont pas réduites.",
        },
        {
          type: "qcm",
          question: "Voici un patron de cube.\n\n~~~\n+---+\n| A |\n+---+---+---+---+\n| B | C | D | E |\n+---+---+---+---+\n            | F |\n            +---+\n~~~\n\nUne fois le cube plié, quelle face est opposée à la face C ?",
          choix: ["B", "D", "E", "F"],
          reponse: 2,
          explication: "Dans la rangée B, C, D, E, deux faces séparées par une seule face sont opposées : C et E (séparées par D), ainsi que B et D. Les faces A et F sont accrochées aux deux bouts : elles sont opposées entre elles. B et D ont un côté commun avec C : ce sont des faces voisines de C, pas opposées.",
        },
        {
          type: "saisie",
          question: "On construit le patron d'un cylindre de rayon 3 cm et de hauteur 10 cm. Quelle est la longueur du rectangle, arrondie au dixième de cm ?",
          reponses: ["18,8", "18,8 cm", "6π", "6 π"],
          explication: "La longueur du rectangle est le périmètre du disque de base : 2 × π × 3 = 6π ≈ 18,85, soit environ 18,8 cm. Sa largeur est la hauteur, 10 cm. (3 × 2 = 6 cm serait le diamètre, pas le périmètre.)",
        },
        {
          type: "saisie",
          question: "Un empilement de cubes est décrit par son plan des hauteurs (nombre de cubes sur chaque case, la ligne du bas est l'avant) :\n\n~~~\nfond    | 2 | 0 | 1 |\navant   | 3 | 1 | 2 |\n~~~\n\nCombien de cubes compte cet empilement ?",
          reponses: ["9", "9 cubes"],
          explication: "On additionne les nombres de toutes les cases : 2 + 0 + 1 + 3 + 1 + 2 = 9 cubes. Les cubes cachés (derrière ou dessous) comptent aussi.",
        },
        {
          type: "qcm",
          question: "On reprend l'empilement :\n\n~~~\nfond    | 2 | 0 | 1 |\navant   | 3 | 1 | 2 |\n~~~\n\nSur la vue de face, quelles hauteurs voit-on, de la colonne de gauche à la colonne de droite ?",
          choix: ["3, 1, 2", "5, 1, 3", "2, 0, 1", "3, 0, 2"],
          reponse: 0,
          explication: "Vue de face : pour chaque colonne, on garde la plus grande hauteur. Gauche : max(2 ; 3) = 3. Milieu : max(0 ; 1) = 1. Droite : max(1 ; 2) = 2. Additionner les hauteurs (5, 1, 3) est une erreur : les cubes de derrière sont cachés par ceux de devant.",
        },
        {
          type: "redaction",
          question: "Un empilement de cubes d'arête 2 cm est décrit par son plan des hauteurs (la ligne du bas est l'avant) :\n\n~~~\nfond    | 1 | 1 | 0 |\nmilieu  | 2 | 1 | 1 |\navant   | 3 | 2 | 1 |\n~~~\n\n1) Combien de cubes compte cet empilement ?\n2) Décris (ou dessine en quadrillage) sa vue de dessus et sa vue de face.\n3) Combien de cubes faut-il ajouter pour obtenir un grand cube de 3 cubes sur 3 cubes sur 3 cubes ?\n4) Calcule le volume de l'empilement en cm³.",
          corrige: `1) On additionne les nombres de toutes les cases :
1 + 1 + 0 + 2 + 1 + 1 + 3 + 2 + 1 = **12 cubes**.

2) **Vue de dessus** : on voit les cases occupées, c'est-à-dire le carré de 3 × 3 cases **sauf la case du fond à droite** (elle porte 0 cube) : 8 carrés.
~~~
fond    | X | X |   |
milieu  | X | X | X |
avant   | X | X | X |
~~~
**Vue de face** : dans chaque colonne, on garde la plus grande hauteur. Gauche : max(1 ; 2 ; 3) = **3** ; milieu : max(1 ; 1 ; 2) = **2** ; droite : max(0 ; 1 ; 1) = **1**. On voit un « escalier » de 3, 2 et 1 carrés :
~~~
+---+
|   |
+---+---+
|   |   |
+---+---+---+
|   |   |   |
+---+---+---+
~~~

3) Le grand cube contient 3 × 3 × 3 = 27 petits cubes. Il faut en ajouter 27 − 12 = **15**.

4) Volume d'un petit cube : 2 × 2 × 2 = 8 cm³. Volume de l'empilement : 12 × 8 = **96 cm³**.`,
        },
      ],
    },
  ],
};
