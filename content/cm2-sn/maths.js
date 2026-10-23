export default {
  chapitres: [
    // ───────────────────────── 1. Les grands nombres
    {
      id: "grands-nombres",
      titre: "Les grands nombres",
      theme: "Activités numériques",
      cours: `
## Les classes
Pour lire un grand nombre, on sépare ses chiffres en **tranches de trois**, en partant de la droite. Chaque tranche est une **classe** : la classe des unités, la classe des mille, la classe des millions, la classe des milliards.

| Milliards | Millions | Mille | Unités |
|---|---|---|---|
| c d u | c d u | c d u | c d u |
| | 5 | 438 | 207 |
| 2 | 040 | 300 | 015 |

Dans chaque classe, il y a les **centaines** (c), les **dizaines** (d) et les **unités** (u).

## Lire et écrire un grand nombre
On lit chaque classe comme un petit nombre, puis on dit le nom de la classe.
- **5 438 207** se lit : cinq **millions** quatre cent trente-huit **mille** deux cent sept.
- **2 040 300 015** se lit : deux **milliards** quarante **millions** trois cent **mille** quinze.

Quand une classe est vide, on écrit **000** : deux millions quinze s'écrit **2 000 015**.

>! **Règles d'orthographe**
>! - **mille** ne prend jamais de « s » : trois mille.
>! - **vingt** et **cent** prennent un « s » s'ils sont multipliés et terminent le nombre : quatre-vingts, deux cents ; mais quatre-vingt-trois, deux cent cinq.
>! - **million** et **milliard** sont des noms : deux millions, trois milliards.
>! - On met un trait d'union entre les dizaines et les unités sous cent : trente-huit, quatre-vingt-dix-sept (mais : cent sept, vingt et un).

## Chiffre et nombre
Dans 5 438 207 :
- le **chiffre** des centaines de mille est **4** ;
- le **nombre** de centaines de mille est **54** (on prend tout ce qui est à gauche, chiffre compris).

## Décomposer un nombre
5 438 207 = 5 000 000 + 400 000 + 30 000 + 8 000 + 200 + 7
5 438 207 = (5 × 1 000 000) + (438 × 1 000) + 207

## Comparer et ranger
- Le nombre qui a **le plus de chiffres** est le plus grand : 1 002 003 > 999 999.
- S'ils ont le même nombre de chiffres, on compare **chiffre par chiffre en partant de la gauche** : 4 580 120 > 4 579 999 (car 8 > 7 au rang des dizaines de mille).
- Signes : **<** (plus petit que), **>** (plus grand que), **=**.
- Ranger dans l'**ordre croissant**, c'est du plus petit au plus grand ; dans l'**ordre décroissant**, du plus grand au plus petit.

## Arrondir
Pour arrondir 3 678 452 **au millier près**, on regarde le chiffre juste à droite des milliers (ici 4, le chiffre des centaines) :
- s'il est 0, 1, 2, 3 ou 4, on garde le millier : **3 678 000** ;
- s'il est 5, 6, 7, 8 ou 9, on passe au millier suivant.

Arrondi à la centaine de mille : 3 678 452 → **3 700 000** (le chiffre des dizaines de mille est 7, donc on monte).

> **À retenir**
> - On lit les grands nombres par classes de trois chiffres : unités, mille, millions, milliards.
> - Une classe vide s'écrit 000.
> - « mille » est invariable ; « million » et « milliard » prennent un « s » au pluriel.
> - Le chiffre des centaines de mille de 5 438 207 est 4 ; le nombre de centaines de mille est 54.
> - Pour comparer : d'abord le nombre de chiffres, puis chiffre par chiffre depuis la gauche.
`,
      exercices: [
        {
          type: "qcm",
          question: "Dans le nombre **5 438 207**, quel est le chiffre des **centaines de mille** ?",
          choix: ["3", "4", "8", "5"],
          reponse: 1,
          explication: "On sépare les classes : 5 | 438 | 207. Dans la classe des mille (438), le chiffre des centaines est 4. Donc le chiffre des centaines de mille est 4. Le 5 est le chiffre des millions.",
        },
        {
          type: "saisie",
          question: "Écris en chiffres : **deux millions trois cent mille quinze**.",
          reponses: ["2 300 015"],
          explication: "Millions : 2 ; mille : 300 ; unités : 015 (la classe des unités doit avoir trois chiffres). On écrit donc 2 300 015.",
        },
        {
          type: "vf",
          question: "Un million, c'est mille milliers.",
          reponse: true,
          explication: "Vrai : 1 000 × 1 000 = 1 000 000. Un million vaut mille milliers.",
        },
        {
          type: "qcm",
          question: "Quel est le **plus grand** de ces nombres ?",
          choix: ["987 654", "1 000 999", "1 002 003", "999 999"],
          reponse: 2,
          explication: "987 654 et 999 999 ont 6 chiffres : ils sont plus petits que les nombres à 7 chiffres. Entre 1 002 003 et 1 000 999, on compare depuis la gauche : au rang des milliers, 2 > 0. Le plus grand est 1 002 003.",
        },
        {
          type: "saisie",
          question: "Arrondis **3 678 452** au millier près.",
          reponses: ["3 678 000"],
          explication: "Le chiffre à droite des milliers est 4 (chiffre des centaines). 4 est plus petit que 5 : on garde 3 678 milliers. L'arrondi est 3 678 000.",
        },
        {
          type: "saisie",
          question: "Combien y a-t-il de **dizaines de mille** dans 4 560 000 ? (le nombre de dizaines de mille)",
          reponses: ["456"],
          explication: "Le chiffre des dizaines de mille est 6. On prend tout ce qui est à gauche, ce chiffre compris : 456. Il y a 456 dizaines de mille dans 4 560 000 (456 × 10 000 = 4 560 000).",
        },
        {
          type: "vf",
          question: "On écrit « quatre-vingts » avec un s, mais « quatre-vingt-trois » sans s.",
          reponse: true,
          explication: "Vrai : « vingt » prend un s quand il est multiplié (quatre fois vingt) et qu'il termine le nombre. Dans quatre-vingt-trois, il est suivi de « trois » : pas de s.",
        },
        {
          type: "qcm",
          question: "Quel nombre est égal à **3 000 000 + 40 000 + 500 + 7** ?",
          choix: ["3 400 507", "3 045 007", "340 507", "3 040 507"],
          reponse: 3,
          explication: "3 millions, 40 mille (classe des mille : 040), 507 unités : 3 040 507. Attention à bien écrire les zéros des rangs vides.",
        },
        {
          type: "saisie",
          question: "Quel nombre vient **juste après** 1 999 999 ?",
          reponses: ["2 000 000"],
          explication: "1 999 999 + 1 = 2 000 000 (deux millions). Toutes les retenues se propagent : chaque 9 devient 0.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : Moussa prépare un exposé sur quatre régions du Sénégal. Son grand frère lui donne ces populations (nombres fictifs) :
- Thiès : 2 038 500 habitants ;
- Kaolack : 1 210 450 habitants ;
- Ziguinchor : 726 080 habitants ;
- Saint-Louis : 1 085 900 habitants.

*Consigne* :
1) Range ces régions de la plus peuplée à la moins peuplée.
2) Écris en lettres la population de Thiès.
3) Arrondis chaque population à la centaine de mille près.`,
          corrige: `1) Ziguinchor a 6 chiffres : c'est la moins peuplée. Les trois autres ont 7 chiffres ; on compare les millions : 2 pour Thiès, 1 pour Kaolack et Saint-Louis. Puis 1 210 450 > 1 085 900 (2 > 0 au rang des centaines de mille).
Ordre décroissant : **Thiès (2 038 500) > Kaolack (1 210 450) > Saint-Louis (1 085 900) > Ziguinchor (726 080)**.

2) 2 038 500 : **deux millions trente-huit mille cinq cents**.

3) On regarde le chiffre des dizaines de mille :
- Thiès : 2 038 500 → chiffre 3 < 5 → **2 000 000** ;
- Kaolack : 1 210 450 → chiffre 1 < 5 → **1 200 000** ;
- Saint-Louis : 1 085 900 → chiffre 8 ≥ 5 → **1 100 000** ;
- Ziguinchor : 726 080 → chiffre 2 < 5 → **700 000**.`,
        },
      ],
    },

    // ───────────────────────── 2. Addition, soustraction, multiplication
    {
      id: "addition-soustraction-multiplication",
      titre: "Addition, soustraction et multiplication",
      theme: "Activités numériques",
      cours: `
## Poser une addition
On écrit les nombres **les uns sous les autres**, unités sous unités, dizaines sous dizaines… On calcule **de droite à gauche** et on n'oublie pas les **retenues**.

~~~
     1 1 1 1
    45 678
  +  9 865
  +    732
  ---------
    56 275
~~~

## Poser une soustraction
On met le **plus grand nombre en haut**. Quand le chiffre du haut est trop petit, on ajoute 10 en haut et 1 en bas au rang suivant (c'est la retenue).

~~~
    70 005
  − 23 478
  ---------
    46 527
~~~

>! **La preuve de la soustraction** : on ajoute le résultat au nombre retiré, on doit retrouver le grand nombre. 46 527 + 23 478 = 70 005. C'est juste.

## Le sens de la multiplication
Multiplier, c'est **additionner plusieurs fois le même nombre** : 4 sacs de 50 kg, c'est 50 + 50 + 50 + 50 = 4 × 50 = 200 kg.
On peut changer l'ordre des facteurs : 4 × 50 = 50 × 4.

## Multiplier par 10, 100, 1 000
Pour un nombre entier, on écrit 1, 2 ou 3 zéros à droite : 254 × 100 = 25 400.

## Poser une multiplication à plusieurs chiffres
On multiplie par le chiffre des unités, puis par le chiffre des dizaines (en **décalant d'un rang**), puis par celui des centaines (décalage de deux rangs), et on additionne.

~~~
       3 456
     ×   207
     -------
      24 192     ← 3 456 × 7
   + 691 200     ← 3 456 × 200 (décalage de deux rangs)
     -------
     715 392
~~~

Le 0 des dizaines donne une ligne de zéros : on peut la sauter, à condition de bien décaler.

## L'ordre de grandeur
Avant de calculer, on arrondit pour savoir à peu près le résultat : 498 × 21 ≈ 500 × 20 = 10 000. Si on trouve 1 045 ou 104 580, on sait qu'il y a une erreur.

> **À retenir**
> - Pose les opérations en alignant bien les chiffres, rang par rang, depuis la droite.
> - Dans une multiplication, décale d'un rang pour les dizaines, de deux rangs pour les centaines.
> - Preuve de la soustraction : résultat + nombre retiré = grand nombre.
> - Vérifie avec un ordre de grandeur.
`,
      exercices: [
        {
          type: "saisie",
          question: "Pose et calcule : 4 587 + 12 698.",
          reponses: ["17 285"],
          explication: "Unités : 7 + 8 = 15, j'écris 5, je retiens 1. Dizaines : 8 + 9 + 1 = 18, j'écris 8, je retiens 1. Centaines : 5 + 6 + 1 = 12, j'écris 2, je retiens 1. Milliers : 4 + 2 + 1 = 7. Dizaines de mille : 1. Résultat : 17 285.",
        },
        {
          type: "saisie",
          question: "Pose et calcule : 50 000 − 18 764.",
          reponses: ["31 236"],
          explication: "50 000 − 18 764 = 31 236. Preuve : 31 236 + 18 764 = 50 000.",
        },
        {
          type: "qcm",
          question: "Combien fait **245 × 36** ?",
          choix: ["2 205", "8 820", "8 720", "9 820"],
          reponse: 1,
          explication: "245 × 6 = 1 470 ; 245 × 30 = 7 350 (décalage d'un rang) ; 1 470 + 7 350 = 8 820. On trouve 2 205 si on oublie de décaler la deuxième ligne (1 470 + 735).",
        },
        {
          type: "vf",
          question: "Pour faire la preuve de 8 000 − 2 345 = 5 655, on calcule 5 655 + 2 345 et on doit trouver 8 000.",
          reponse: true,
          explication: "Vrai : 5 655 + 2 345 = 8 000. Le résultat de la soustraction est donc juste.",
        },
        {
          type: "qcm",
          question: "Quel est l'**ordre de grandeur** de 498 × 21 ?",
          choix: ["10 000", "1 000", "100 000", "1 000 000"],
          reponse: 0,
          explication: "498 est proche de 500 et 21 est proche de 20 : 500 × 20 = 10 000. (Le résultat exact est 10 458.)",
        },
        {
          type: "saisie",
          question: "Un camion transporte 12 sacs d'arachide de 50 kg chacun. Quelle masse transporte-t-il (en kg) ?",
          reponses: ["600"],
          explication: "12 fois 50 kg : 12 × 50 = 600 kg.",
        },
        {
          type: "saisie",
          question: "Pose et calcule : 1 208 × 305.",
          reponses: ["368 440"],
          explication: "1 208 × 5 = 6 040 ; 1 208 × 300 = 362 400 (décalage de deux rangs) ; 6 040 + 362 400 = 368 440.",
        },
        {
          type: "vf",
          question: "254 × 100 = 2 540.",
          reponse: false,
          explication: "Faux : multiplier un nombre entier par 100, c'est écrire **deux** zéros à droite : 254 × 100 = 25 400.",
        },
        {
          type: "saisie",
          question: "Fatou achète 3 pagnes à 4 750 F CFA l'un. Elle paie avec un billet de 10 000 F et un billet de 5 000 F. Combien la vendeuse lui rend-elle ?",
          reponses: ["750", "750 F", "750 F CFA", "750 francs"],
          explication: "Prix des pagnes : 3 × 4 750 = 14 250 F. Elle donne 10 000 + 5 000 = 15 000 F. La vendeuse lui rend 15 000 − 14 250 = 750 F.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : la coopérative du village de Mamadou, près de Kaffrine, a récolté de l'arachide dans trois champs : 1 275 kg, 986 kg et 2 049 kg. Elle vend toute la récolte à 275 F CFA le kilogramme. Avec l'argent, elle doit d'abord rembourser une dette de 345 600 F.

*Consigne* : pose les opérations et calcule :
1) la masse totale d'arachide récoltée ;
2) la somme obtenue par la vente ;
3) l'argent qui reste à la coopérative après le remboursement.`,
          corrige: `1) Masse totale :
~~~
    1 275
  +   986
  + 2 049
  -------
    4 310
~~~
La coopérative a récolté **4 310 kg** d'arachide.

2) Vente :
~~~
       4 310
     ×   275
     -------
      21 550     ← 4 310 × 5
     301 700     ← 4 310 × 70
   + 862 000     ← 4 310 × 200
   ---------
   1 185 250
~~~
La vente rapporte **1 185 250 F CFA**.

3) Reste :
~~~
    1 185 250
  −   345 600
  -----------
      839 650
~~~
Il reste **839 650 F CFA** à la coopérative.
Preuve : 839 650 + 345 600 = 1 185 250.`,
        },
      ],
    },

    // ───────────────────────── 3. Divisibilité et division
    {
      id: "divisibilite-division",
      titre: "Caractères de divisibilité et division",
      theme: "Activités numériques",
      cours: `
## Les caractères de divisibilité
Un nombre est **divisible** par un autre si la division tombe juste (le reste est 0).

| Un nombre est divisible par… | si… | Exemples |
|---|---|---|
| 2 | son dernier chiffre est 0, 2, 4, 6 ou 8 (nombre pair) | 3 874 |
| 5 | son dernier chiffre est 0 ou 5 | 1 235 ; 470 |
| 10 | son dernier chiffre est 0 | 3 870 |
| 4 | le nombre formé par ses deux derniers chiffres est divisible par 4 | 1 316 (16 = 4 × 4) |
| 25 | il se termine par 00, 25, 50 ou 75 | 2 175 |
| 3 | la somme de ses chiffres est divisible par 3 | 4 521 (4 + 5 + 2 + 1 = 12) |
| 9 | la somme de ses chiffres est divisible par 9 | 3 870 (3 + 8 + 7 + 0 = 18) |

## Le vocabulaire de la division
Dans 487 ÷ 6 : 487 est le **dividende**, 6 est le **diviseur**, 81 est le **quotient** et 1 est le **reste**.
On a toujours : **dividende = diviseur × quotient + reste**, et le **reste est plus petit que le diviseur**.
487 = 6 × 81 + 1.

## Diviser par un nombre d'un chiffre
~~~
  9 4 3 8 | 6
− 6       |------
  3 4     | 1 573
− 3 0     |
    4 3   |
  − 4 2   |
      1 8 |
    − 1 8 |
        0 |
~~~
9 ÷ 6 = 1, reste 3 ; on abaisse 4 : 34 ÷ 6 = 5, reste 4 ; on abaisse 3 : 43 ÷ 6 = 7, reste 1 ; on abaisse 8 : 18 ÷ 6 = 3, reste 0.

## Diviser par un nombre de deux ou trois chiffres
On prend au début assez de chiffres du dividende pour contenir le diviseur. Pour trouver chaque chiffre du quotient, on peut s'aider d'un essai : « dans 78, combien de fois 25 ? » → 3 fois (3 × 25 = 75).

~~~
  7 8 6 5 | 25
− 7 5     |-----
    3 6   | 314
  − 2 5   |
    1 1 5 |
  − 1 0 0 |
      1 5 |
~~~
7 865 = 25 × 314 + 15.

Avec un diviseur de trois chiffres : 45 678 ÷ 123. On commence par 456 (car 45 est trop petit) : 456 ÷ 123 = 3, reste 87 ; on abaisse 7 : 877 ÷ 123 = 7, reste 16 ; on abaisse 8 : 168 ÷ 123 = 1, reste 45. On trouve le quotient **371** et le reste **45**, car 123 × 371 + 45 = 45 678.

>! **Bien lire la question** : 1 250 mangues rangées par cartons de 24 → 1 250 ÷ 24 = 52, reste 2. Il y a **52 cartons pleins**, mais il faut **53 cartons** pour ranger toutes les mangues.

> **À retenir**
> - Divisible par 2 : pair ; par 5 : finit par 0 ou 5 ; par 10 : finit par 0.
> - Divisible par 3 ou par 9 : la somme des chiffres est divisible par 3 ou par 9.
> - Dividende = diviseur × quotient + reste, avec reste < diviseur.
> - Pose la division et vérifie toujours avec la multiplication.
`,
      exercices: [
        {
          type: "qcm",
          question: "Lequel de ces nombres est **divisible par 3** ?",
          choix: ["2 018", "4 521", "1 000", "7 774"],
          reponse: 1,
          explication: "4 + 5 + 2 + 1 = 12, et 12 est divisible par 3. Pour les autres : 2 + 0 + 1 + 8 = 11 ; 1 + 0 + 0 + 0 = 1 ; 7 + 7 + 7 + 4 = 25 : aucune de ces sommes n'est divisible par 3.",
        },
        {
          type: "vf",
          question: "3 870 est divisible par 2, par 5 et par 10.",
          reponse: true,
          explication: "Vrai : il se termine par 0, donc il est pair (divisible par 2), divisible par 5 et par 10. Il est même divisible par 9, car 3 + 8 + 7 + 0 = 18.",
        },
        {
          type: "saisie",
          question: "Quel est le **reste** de la division de 487 par 6 ?",
          reponses: ["1"],
          explication: "6 × 81 = 486 et 487 − 486 = 1. Le quotient est 81 et le reste est 1 (plus petit que 6).",
        },
        {
          type: "saisie",
          question: "Pose et calcule le quotient : 9 438 ÷ 6.",
          reponses: ["1 573"],
          explication: "9 ÷ 6 = 1 reste 3 ; 34 ÷ 6 = 5 reste 4 ; 43 ÷ 6 = 7 reste 1 ; 18 ÷ 6 = 3 reste 0. Quotient : 1 573. Vérification : 6 × 1 573 = 9 438.",
        },
        {
          type: "qcm",
          question: "Que donne la division de **7 865 par 25** ?",
          choix: ["quotient 31, reste 15", "quotient 315, reste 0", "quotient 314, reste 5", "quotient 314, reste 15"],
          reponse: 3,
          explication: "78 ÷ 25 = 3 reste 3 ; 36 ÷ 25 = 1 reste 11 ; 115 ÷ 25 = 4 reste 15. Quotient 314, reste 15. Vérification : 25 × 314 + 15 = 7 850 + 15 = 7 865.",
        },
        {
          type: "vf",
          question: "Dans une division, le reste peut être plus grand que le diviseur.",
          reponse: false,
          explication: "Faux : si le reste est plus grand que le diviseur, c'est qu'on peut encore mettre le diviseur une fois de plus. Le quotient est alors trop petit. Le reste est toujours plus petit que le diviseur.",
        },
        {
          type: "saisie",
          question: "Pose et calcule le quotient de 45 678 ÷ 123.",
          reponses: ["371"],
          explication: "456 ÷ 123 = 3 reste 87 ; 877 ÷ 123 = 7 reste 16 ; 168 ÷ 123 = 1 reste 45. Quotient 371, reste 45. Vérification : 123 × 371 + 45 = 45 633 + 45 = 45 678.",
        },
        {
          type: "saisie",
          question: "Awa range 1 250 mangues dans des cartons de 24 mangues. Combien de cartons **pleins** obtient-elle ?",
          reponses: ["52"],
          explication: "1 250 ÷ 24 = 52, reste 2 (24 × 52 = 1 248). Elle remplit 52 cartons et il reste 2 mangues.",
        },
        {
          type: "vf",
          question: "Pour ranger **toutes** les 1 250 mangues dans des cartons de 24, il faut 53 cartons.",
          reponse: true,
          explication: "Vrai : 52 cartons sont pleins et il reste 2 mangues ; il faut un 53e carton pour elles.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : l'école de Fatou, à Thiès, organise une sortie à l'île de Gorée. Il y a 287 élèves et 13 maîtres. On loue des cars de 45 places. La location d'un car coûte 90 000 F CFA. Le prix total est partagé de façon égale entre toutes les personnes (élèves et maîtres).

*Consigne* : pose les opérations et réponds :
1) Combien de personnes partent en sortie ?
2) Combien de cars faut-il louer ?
3) Combien paie chaque personne ?`,
          corrige: `1) 287 + 13 = **300 personnes**.

2) 300 ÷ 45 :
~~~
  3 0 0 | 45
− 2 7 0 |----
    3 0 | 6
~~~
6 cars transportent 6 × 45 = 270 personnes ; il en reste 30. Il faut un car de plus : **7 cars**.

3) Prix total : 7 × 90 000 = 630 000 F.
Partage : 630 000 ÷ 300. On divise les deux nombres par 100 : 6 300 ÷ 3.
~~~
  6 3 0 0 | 3
− 6       |------
  0 3     | 2 100
  − 3     |
    0 0   |
~~~
Chaque personne paie **2 100 F CFA**. Vérification : 300 × 2 100 = 630 000.`,
        },
      ],
    },

    // ───────────────────────── 4. Les nombres décimaux
    {
      id: "nombres-decimaux",
      titre: "Les nombres décimaux",
      theme: "Activités numériques",
      cours: `
## Partie entière et partie décimale
Dans **45,372**, la virgule sépare :
- la **partie entière** : 45 ;
- la **partie décimale** : 372.

| Dizaines | Unités | , | Dixièmes | Centièmes | Millièmes |
|---|---|---|---|---|---|
| 4 | 5 | , | 3 | 7 | 2 |

45,372 = 45 + 3/10 + 7/100 + 2/1 000. On lit : « quarante-cinq unités et trois cent soixante-douze millièmes ».

## Fractions décimales et nombres décimaux
- 1/10 = 0,1 (un dixième) ; 1/100 = 0,01 (un centième) ; 1/1 000 = 0,001 (un millième).
- 327/100 = 3,27 ; 8/1 000 = 0,008.
- 1 unité = 10 dixièmes = 100 centièmes. Dans 4,25 il y a **425 centièmes**.

## Les zéros inutiles
4,50 = 4,5 et 07,3 = 7,3 : un zéro à la fin de la partie décimale (ou au début de la partie entière) ne change pas le nombre. Mais 4,05 ≠ 4,5 !

## Comparer deux décimaux
1. On compare d'abord les **parties entières** : 12,1 > 9,87 car 12 > 9.
2. Si elles sont égales, on compare les **dixièmes**, puis les **centièmes**… 2,5 > 2,47 car 5 dixièmes > 4 dixièmes.

>! **Astuce** : on écrit les deux nombres avec le même nombre de chiffres après la virgule. 2,5 = 2,50 et 2,50 > 2,47.
>! **Piège** : 2,47 n'est pas plus grand que 2,5 « parce que 47 > 5 » !

## Intercaler un nombre
Entre 3,4 et 3,5, il y a toujours d'autres décimaux : 3,45 ; 3,41 ; 3,499…

## Arrondir
12,68 arrondi **à l'unité** : 13 (car 6 dixièmes ≥ 5). Arrondi **au dixième** : 12,7 (car 8 centièmes ≥ 5).

> **À retenir**
> - Après la virgule : dixièmes, centièmes, millièmes.
> - 1/10 = 0,1 ; 1/100 = 0,01 ; 1/1 000 = 0,001.
> - Pour comparer : partie entière d'abord, puis dixièmes, centièmes…
> - 4,50 = 4,5 mais 4,05 ≠ 4,5.
`,
      exercices: [
        {
          type: "qcm",
          question: "Dans **45,372**, quel est le chiffre des **centièmes** ?",
          choix: ["3", "2", "7", "4"],
          reponse: 2,
          explication: "Après la virgule : 3 est le chiffre des dixièmes, 7 celui des centièmes, 2 celui des millièmes. Réponse : 7.",
        },
        {
          type: "saisie",
          question: "Écris sous forme d'un nombre décimal : 3 + 4/10 + 5/1 000.",
          reponses: ["3,405"],
          explication: "3 unités, 4 dixièmes, 0 centième, 5 millièmes : 3,405. N'oublie pas le 0 des centièmes.",
        },
        {
          type: "vf",
          question: "2,5 est plus grand que 2,47.",
          reponse: true,
          explication: "Vrai : les parties entières sont égales (2). On compare les dixièmes : 5 > 4. Donc 2,5 > 2,47 (on peut écrire 2,50 > 2,47).",
        },
        {
          type: "qcm",
          question: "Quel est le **plus petit** de ces nombres ?",
          choix: ["0,8", "0,75", "0,79", "0,709"],
          reponse: 3,
          explication: "Avec trois chiffres après la virgule : 0,800 ; 0,750 ; 0,790 ; 0,709. Le plus petit est 0,709 (0 centième après 7 dixièmes).",
        },
        {
          type: "saisie",
          question: "Écris 327/100 sous forme d'un nombre décimal.",
          reponses: ["3,27"],
          explication: "327 centièmes = 300 centièmes + 27 centièmes = 3 unités et 27 centièmes = 3,27.",
        },
        {
          type: "vf",
          question: "4,50 et 4,5 sont deux écritures du même nombre.",
          reponse: true,
          explication: "Vrai : le zéro à la fin de la partie décimale est inutile. 4,50 = 4,5 (5 dixièmes = 50 centièmes).",
        },
        {
          type: "qcm",
          question: "Quel nombre est compris **entre 3,4 et 3,5** ?",
          choix: ["3,45", "3,6", "3,04", "34,5"],
          reponse: 0,
          explication: "3,40 < 3,45 < 3,50. Les autres : 3,6 > 3,5 ; 3,04 < 3,4 ; 34,5 est bien plus grand.",
        },
        {
          type: "saisie",
          question: "Arrondis 12,68 **au dixième**.",
          reponses: ["12,7"],
          explication: "Le chiffre des centièmes est 8, il est supérieur ou égal à 5 : on passe au dixième suivant. 12,68 ≈ 12,7.",
        },
        {
          type: "saisie",
          question: "Combien y a-t-il de **centièmes** dans 4,25 ?",
          reponses: ["425"],
          explication: "4 unités = 400 centièmes ; 0,25 = 25 centièmes. En tout : 425 centièmes (4,25 = 425/100).",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : à la fête de l'école de Ziguinchor, quatre filles participent au saut en longueur. Le maître note : Awa 3,05 m ; Fatou 3,5 m ; Aïssatou 3,45 m ; Mariama 3,4 m.

*Consigne* :
1) Range les sauts du plus long au plus court.
2) Qui gagne la médaille d'or, d'argent et de bronze ?
3) Écris le saut de Fatou et celui d'Awa en centimètres.`,
          corrige: `1) On écrit tous les nombres avec deux chiffres après la virgule : 3,05 ; 3,50 ; 3,45 ; 3,40.
Ordre décroissant : **3,5 m > 3,45 m > 3,4 m > 3,05 m**.

2) Or : **Fatou** (3,5 m) ; argent : **Aïssatou** (3,45 m) ; bronze : **Mariama** (3,4 m). Awa est quatrième.

3) 1 m = 100 cm. Fatou : 3,5 m = **350 cm**. Awa : 3,05 m = **305 cm**.
Attention : 3,5 m (350 cm) et 3,05 m (305 cm) ne sont pas égaux.`,
        },
      ],
    },

    // ───────────────────────── 5. Opérations sur les décimaux
    {
      id: "operations-decimaux",
      titre: "Opérations sur les nombres décimaux",
      theme: "Activités numériques",
      cours: `
## Addition et soustraction
On pose les nombres **virgule sous virgule**. On peut compléter avec des zéros pour avoir autant de chiffres après la virgule.

~~~
    125,40          50,00
  +  38,75        − 12,35
  --------        -------
    164,15          37,65
~~~

## Multiplication
1. On multiplie **sans s'occuper des virgules**.
2. On compte le nombre total de chiffres après la virgule dans les deux facteurs.
3. On place la virgule dans le résultat pour avoir autant de chiffres après la virgule.

~~~
      4,25     (2 chiffres après la virgule)
    ×  3,6     (1 chiffre après la virgule)
    ------
      2550
   + 12750
   -------
     15,300   (2 + 1 = 3 chiffres) → 15,3
~~~

## Diviser un décimal par un entier
On divise normalement ; **quand on abaisse le premier chiffre après la virgule, on met la virgule au quotient**.

~~~
  1 8,6 | 4
− 1 6   |------
    2 6 | 4,65
  − 2 4 |
      2 0
    − 2 0
        0
~~~

## Quotient décimal de deux entiers
Quand la division ne tombe pas juste, on peut continuer : on met une virgule au quotient et on ajoute des zéros au dividende. 7 ÷ 8 = 0,875 ; 3 ÷ 4 = 0,75.

## Diviser par un nombre décimal
On multiplie **le dividende et le diviseur par 10, 100…** pour que le diviseur devienne entier. Le quotient ne change pas.
12,6 ÷ 0,3 = 126 ÷ 3 = **42**.

## Multiplier ou diviser par 10, 100, 1 000
- × 10 : la virgule se déplace d'un rang vers la **droite** : 3,25 × 10 = 32,5.
- ÷ 100 : la virgule se déplace de deux rangs vers la **gauche** : 37,5 ÷ 100 = 0,375.

> **À retenir**
> - Addition, soustraction : virgule sous virgule.
> - Multiplication : on compte les chiffres après la virgule des deux facteurs.
> - Division par un entier : la virgule du quotient se place quand on abaisse les dixièmes.
> - Division par un décimal : on rend le diviseur entier (× 10, × 100) des deux côtés.
`,
      exercices: [
        {
          type: "saisie",
          question: "Pose et calcule : 23,5 + 4,75.",
          reponses: ["28,25"],
          explication: "Virgule sous virgule : 23,50 + 4,75 = 28,25.",
        },
        {
          type: "saisie",
          question: "Pose et calcule : 10 − 3,65.",
          reponses: ["6,35"],
          explication: "On écrit 10 = 10,00. 10,00 − 3,65 = 6,35. Preuve : 6,35 + 3,65 = 10.",
        },
        {
          type: "qcm",
          question: "Combien fait **2,4 × 1,5** ?",
          choix: ["3,6", "36", "0,36", "2,6"],
          reponse: 0,
          explication: "24 × 15 = 360. Il y a 1 + 1 = 2 chiffres après la virgule dans les facteurs : 3,60 = 3,6. Ordre de grandeur : 2 × 2 = 4, donc 36 et 0,36 sont impossibles.",
        },
        {
          type: "vf",
          question: "0,5 × 0,5 = 2,5.",
          reponse: false,
          explication: "Faux : 5 × 5 = 25, et il faut 2 chiffres après la virgule : 0,25. D'ailleurs la moitié de 0,5 est 0,25.",
        },
        {
          type: "saisie",
          question: "Pose et calcule : 45,6 ÷ 4.",
          reponses: ["11,4"],
          explication: "45 ÷ 4 = 11 reste 1 ; on abaisse le 6 des dixièmes et on met la virgule : 16 ÷ 4 = 4. Quotient : 11,4. Vérification : 4 × 11,4 = 45,6.",
        },
        {
          type: "qcm",
          question: "Quel est le quotient décimal de la division **3 ÷ 4** (on continue la division après la virgule) ?",
          choix: ["0,34", "0,75", "7,5", "1,33"],
          reponse: 1,
          explication: "3 ÷ 4 = 0 ; on met la virgule et on abaisse un 0 : 30 ÷ 4 = 7 reste 2 ; 20 ÷ 4 = 5. Quotient : 0,75.",
        },
        {
          type: "saisie",
          question: "Calcule : 8,4 ÷ 0,2.",
          reponses: ["42"],
          explication: "On multiplie les deux nombres par 10 : 8,4 ÷ 0,2 = 84 ÷ 2 = 42. Vérification : 42 × 0,2 = 8,4.",
        },
        {
          type: "qcm",
          question: "Mamadou achète 2,5 kg de viande à 4 200 F CFA le kilogramme. Combien paie-t-il ?",
          choix: ["8 400 F", "105 000 F", "1 050 F", "10 500 F"],
          reponse: 3,
          explication: "2,5 × 4 200 = 10 500 F. Pour vérifier : 2 kg coûtent 8 400 F et un demi-kilogramme 2 100 F ; 8 400 + 2 100 = 10 500 F.",
        },
        {
          type: "vf",
          question: "37,5 ÷ 100 = 0,375.",
          reponse: true,
          explication: "Vrai : diviser par 100, c'est déplacer la virgule de deux rangs vers la gauche : 37,5 → 0,375.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : Fatou va au marché Sandaga avec 10 000 F CFA. Elle achète 1,5 kg de tomates à 800 F le kg, 2,25 kg d'oignons à 600 F le kg et 3 bouteilles d'huile de 1,5 litre à 1 250 F la bouteille.

*Consigne* : pose les opérations et calcule :
1) le prix de chaque achat ;
2) la dépense totale ;
3) la somme qui reste à Fatou ;
4) la quantité d'huile achetée en litres.`,
          corrige: `1) Tomates : 1,5 × 800 = **1 200 F**.
Oignons : 2,25 × 600 = 225 × 6 (car 2,25 × 100 = 225) :
~~~
     225
   ×   6
   -----
   1 350
~~~
Les oignons coûtent **1 350 F**.
Huile : 3 × 1 250 = **3 750 F**.

2) Dépense totale : 1 200 + 1 350 + 3 750 = **6 300 F CFA**.

3) Reste : 10 000 − 6 300 = **3 700 F CFA**.

4) Huile : 3 × 1,5 = **4,5 litres**.`,
        },
      ],
    },

    // ───────────────────────── 6. Les fractions
    {
      id: "fractions",
      titre: "Les fractions : notion, simplification, comparaison",
      theme: "Activités numériques",
      cours: `
## Qu'est-ce qu'une fraction ?
Ousmane coupe un gâteau en **8 parts égales** et en mange **3**. Il a mangé **3/8** du gâteau (trois huitièmes).
- Le nombre du bas, **8**, est le **dénominateur** : il dit en combien de parts égales on a partagé.
- Le nombre du haut, **3**, est le **numérateur** : il dit combien de parts on prend.

On lit : 1/2 un demi ; 1/3 un tiers ; 1/4 un quart ; 3/5 trois cinquièmes ; 7/10 sept dixièmes.

## Fraction et unité
- Quand le numérateur est **égal** au dénominateur, la fraction vaut **1** : 4/4 = 1.
- Numérateur **plus petit** : la fraction est **plus petite que 1** (7/9 < 1).
- Numérateur **plus grand** : la fraction est **plus grande que 1** (9/7 > 1).

## Fractions égales
On ne change pas une fraction si on **multiplie** (ou on **divise**) le numérateur et le dénominateur **par le même nombre**.
3/5 = (3 × 2)/(5 × 2) = 6/10 ; 2/7 = 6/21 (× 3).

## Simplifier une fraction
Simplifier, c'est diviser le numérateur et le dénominateur par un même nombre, en utilisant les caractères de divisibilité.
12/18 = 6/9 (÷ 2) = **2/3** (÷ 3). On ne peut plus simplifier 2/3 : elle est **irréductible**.

## Réduire au même dénominateur
Pour comparer ou additionner 1/2 et 3/4, on cherche un dénominateur commun : 4.
1/2 = 2/4. Donc on compare 2/4 et 3/4.
Pour 2/3, 3/4 et 5/6 : le dénominateur commun est 12. 2/3 = 8/12 ; 3/4 = 9/12 ; 5/6 = 10/12.

## Comparer des fractions
- **Même dénominateur** : la plus grande est celle qui a le plus grand numérateur. 5/8 > 3/8.
- **Même numérateur** : la plus grande est celle qui a le plus **petit** dénominateur. 5/6 > 5/8 (un sixième est une part plus grosse qu'un huitième).
- Sinon, on réduit au même dénominateur.

> **À retenir**
> - Dénominateur : nombre de parts égales ; numérateur : nombre de parts prises.
> - On peut multiplier ou diviser le haut et le bas par le même nombre.
> - Simplifier : diviser le haut et le bas par un même diviseur, jusqu'à ne plus pouvoir.
> - Pour comparer, on met les fractions au même dénominateur.
`,
      exercices: [
        {
          type: "qcm",
          question: "Ousmane coupe une galette en 8 parts égales et en mange 3. Quelle fraction de la galette a-t-il mangée ?",
          choix: ["8/3", "3/5", "3/8", "5/8"],
          reponse: 2,
          explication: "La galette est partagée en 8 parts (dénominateur) et il en prend 3 (numérateur) : 3/8. 5/8 est ce qui reste.",
        },
        {
          type: "vf",
          question: "4/4 = 1.",
          reponse: true,
          explication: "Vrai : quatre quarts font une unité entière. Quand le numérateur est égal au dénominateur, la fraction vaut 1.",
        },
        {
          type: "saisie",
          question: "Simplifie le plus possible : 12/18.",
          reponses: ["2/3"],
          explication: "12/18 = 6/9 (on divise par 2) = 2/3 (on divise par 3). On peut aussi diviser directement par 6. 2/3 ne se simplifie plus.",
        },
        {
          type: "qcm",
          question: "Quelle fraction est **égale** à 3/5 ?",
          choix: ["5/3", "3/10", "6/5", "6/10"],
          reponse: 3,
          explication: "On multiplie le numérateur ET le dénominateur par 2 : 3/5 = 6/10. Dans 3/10 et 6/5, on n'a changé qu'un seul des deux nombres.",
        },
        {
          type: "saisie",
          question: "Complète : 2/7 = …/21.",
          reponses: ["6", "6/21"],
          explication: "7 × 3 = 21 : on multiplie aussi le numérateur par 3. 2 × 3 = 6, donc 2/7 = 6/21.",
        },
        {
          type: "vf",
          question: "5/8 est plus grand que 5/6.",
          reponse: false,
          explication: "Faux : les deux fractions ont le même numérateur. Un huitième est plus petit qu'un sixième, donc 5/8 < 5/6.",
        },
        {
          type: "qcm",
          question: "Quelle fraction est **plus grande que 1** ?",
          choix: ["9/7", "7/9", "3/3", "1/2"],
          reponse: 0,
          explication: "Dans 9/7, le numérateur est plus grand que le dénominateur : 9/7 = 1 + 2/7 > 1. 3/3 est égal à 1, 7/9 et 1/2 sont plus petits que 1.",
        },
        {
          type: "saisie",
          question: "Complète pour écrire 1/2 avec le dénominateur 4 : 1/2 = …/4.",
          reponses: ["2"],
          explication: "4 = 2 × 2 : on multiplie aussi le numérateur par 2. 1/2 = 2/4.",
        },
        {
          type: "qcm",
          question: "Range dans l'**ordre croissant** : 3/4 ; 5/6 ; 2/3.",
          choix: ["5/6 < 3/4 < 2/3", "2/3 < 3/4 < 5/6", "3/4 < 2/3 < 5/6", "2/3 < 5/6 < 3/4"],
          reponse: 1,
          explication: "Au dénominateur 12 : 2/3 = 8/12 ; 3/4 = 9/12 ; 5/6 = 10/12. Donc 2/3 < 3/4 < 5/6.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : le champ de Mamadou, près de Kaolack, est partagé en 12 parcelles égales. Il sème de l'arachide sur 4 parcelles, du mil sur 3 parcelles, du niébé sur 2 parcelles et du manioc sur les autres.

*Consigne* :
1) Combien de parcelles reçoivent du manioc ?
2) Écris, pour chaque culture, la fraction du champ qu'elle occupe, puis simplifie-la.
3) Quelle culture occupe la plus grande partie du champ ? Le mil et le manioc occupent-ils la même part ?`,
          corrige: `1) 4 + 3 + 2 = 9 parcelles sont utilisées ; 12 − 9 = **3 parcelles** pour le manioc.

2) Fractions (sur 12 parcelles) :
- arachide : 4/12 = **1/3** (÷ 4) ;
- mil : 3/12 = **1/4** (÷ 3) ;
- niébé : 2/12 = **1/6** (÷ 2) ;
- manioc : 3/12 = **1/4** (÷ 3).
Vérification : 4/12 + 3/12 + 2/12 + 3/12 = 12/12 = 1 (tout le champ).

3) Le plus grand numérateur sur 12 est 4 : **l'arachide** occupe la plus grande partie (1/3 du champ). Le mil et le manioc occupent chacun 3/12 = 1/4 du champ : **oui, la même part**.`,
        },
      ],
    },

    // ───────────────────────── 7. Calculer avec les fractions
    {
      id: "calculs-fractions",
      titre: "Calculer avec les fractions",
      theme: "Activités numériques",
      cours: `
## Addition et soustraction
- **Même dénominateur** : on additionne (ou on soustrait) les numérateurs et on garde le dénominateur. 2/5 + 1/5 = **3/5** ; 7/9 − 4/9 = **3/9 = 1/3**.
- **Dénominateurs différents** : on réduit d'abord au même dénominateur.
1/2 + 1/3 = 3/6 + 2/6 = **5/6** ; 5/6 − 1/3 = 5/6 − 2/6 = 3/6 = **1/2**.

## Multiplication
- Fraction × entier : on multiplie le numérateur. 2/7 × 3 = **6/7**.
- Fraction × fraction : numérateur × numérateur et dénominateur × dénominateur.
3/4 × 2/5 = 6/20 = **3/10**.

## Division d'une fraction par un entier
On **multiplie le dénominateur** par l'entier. 2/3 ÷ 4 = 2/12 = **1/6**.
(Partager les 2/3 d'un gâteau entre 4 enfants : chacun a 1/6 du gâteau.)

## Fraction d'une grandeur
Pour calculer les **3/4 de 2 000 F** : on divise par le dénominateur, puis on multiplie par le numérateur.
2 000 ÷ 4 = 500 (un quart) ; 500 × 3 = **1 500 F**.

## Retrouver la grandeur dont on connaît une fraction
Les **2/5** d'une somme valent **6 000 F**. Quelle est la somme ?
- 1/5 de la somme : 6 000 ÷ 2 = 3 000 F ;
- les 5/5 (la somme entière) : 3 000 × 5 = **15 000 F**.

>! **Vérifie** : les 2/5 de 15 000 F = 15 000 ÷ 5 × 2 = 6 000 F. C'est juste.

## Ce qui reste
Si on a dépensé 1/3 + 1/4 d'une somme, il reste 1 − 7/12 = 12/12 − 7/12 = **5/12**.

> **À retenir**
> - + et − : même dénominateur d'abord, puis on calcule les numérateurs.
> - × : haut × haut, bas × bas ; ÷ par un entier : on multiplie le bas.
> - Fraction d'une grandeur : ÷ dénominateur, puis × numérateur.
> - Grandeur connaissant une fraction : ÷ numérateur (on trouve une part), puis × dénominateur.
`,
      exercices: [
        {
          type: "saisie",
          question: "Calcule : 3/7 + 2/7.",
          reponses: ["5/7"],
          explication: "Même dénominateur : 3 + 2 = 5 septièmes. 3/7 + 2/7 = 5/7.",
        },
        {
          type: "saisie",
          question: "Calcule et simplifie : 5/6 − 1/3.",
          reponses: ["1/2", "3/6", "0,5"],
          explication: "1/3 = 2/6. 5/6 − 2/6 = 3/6 = 1/2 (on simplifie par 3).",
        },
        {
          type: "qcm",
          question: "Combien fait **2/3 × 3/5** ?",
          choix: ["5/8", "6/8", "2/5", "5/15"],
          reponse: 2,
          explication: "Haut × haut : 2 × 3 = 6 ; bas × bas : 3 × 5 = 15. 6/15 = 2/5 (÷ 3). On n'additionne pas les numérateurs dans une multiplication.",
        },
        {
          type: "saisie",
          question: "Calcule : 3/5 ÷ 2.",
          reponses: ["3/10", "0,3"],
          explication: "On multiplie le dénominateur par 2 : 3/5 ÷ 2 = 3/10.",
        },
        {
          type: "saisie",
          question: "Calcule les 3/4 de 24 000 F CFA.",
          reponses: ["18 000", "18 000 F", "18 000 F CFA", "18 000 francs"],
          explication: "Un quart : 24 000 ÷ 4 = 6 000 F. Trois quarts : 6 000 × 3 = 18 000 F.",
        },
        {
          type: "vf",
          question: "Les 2/3 de 90 kg font 60 kg.",
          reponse: true,
          explication: "Vrai : 90 ÷ 3 = 30 kg (un tiers) ; 30 × 2 = 60 kg.",
        },
        {
          type: "saisie",
          question: "Moussa a dépensé les 2/5 de ses économies, soit 8 000 F CFA. Combien avait-il d'économies ?",
          reponses: ["20 000", "20 000 F", "20 000 F CFA", "20 000 francs"],
          explication: "2/5 → 8 000 F, donc 1/5 → 8 000 ÷ 2 = 4 000 F, et 5/5 → 4 000 × 5 = 20 000 F. Vérification : les 2/5 de 20 000 = 8 000 F.",
        },
        {
          type: "qcm",
          question: "Awa lit 1/4 d'un livre lundi et 1/3 du livre mardi. Quelle fraction du livre a-t-elle lue ?",
          choix: ["2/7", "1/7", "7/12", "5/12"],
          reponse: 2,
          explication: "Au dénominateur 12 : 1/4 = 3/12 et 1/3 = 4/12. 3/12 + 4/12 = 7/12. On n'additionne pas les dénominateurs (2/7 est faux).",
        },
        {
          type: "saisie",
          question: "Quelle fraction du livre reste-t-il à Awa à lire, sachant qu'elle en a lu 7/12 ?",
          reponses: ["5/12"],
          explication: "Le livre entier vaut 12/12. 12/12 − 7/12 = 5/12.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : le papa d'Aïssatou gagne 180 000 F CFA par mois. Il utilise le 1/3 de son salaire pour la nourriture, le 1/4 pour le loyer, le 1/6 pour le transport et il épargne le reste.

*Consigne* :
1) Calcule la somme de chaque dépense.
2) Quelle fraction du salaire est épargnée ?
3) Calcule la somme épargnée chaque mois de deux façons.`,
          corrige: `1) Nourriture : 180 000 ÷ 3 = **60 000 F**.
Loyer : 180 000 ÷ 4 = **45 000 F**.
Transport : 180 000 ÷ 6 = **30 000 F**.

2) Fractions dépensées au dénominateur 12 : 1/3 = 4/12 ; 1/4 = 3/12 ; 1/6 = 2/12.
4/12 + 3/12 + 2/12 = 9/12. Fraction épargnée : 12/12 − 9/12 = 3/12 = **1/4**.

3) Première façon : 60 000 + 45 000 + 30 000 = 135 000 F ; 180 000 − 135 000 = **45 000 F**.
Deuxième façon : le 1/4 de 180 000 F = 180 000 ÷ 4 = **45 000 F**.
Les deux résultats sont égaux : le calcul est vérifié.`,
        },
      ],
    },

    // ───────────────────────── 8. Proportionnalité, pourcentage, échelle
    {
      id: "proportionnalite",
      titre: "Proportionnalité, règle de trois, pourcentage et échelle",
      theme: "Activités numériques",
      cours: `
## Le tableau de proportionnalité
Deux grandeurs sont **proportionnelles** quand on passe de l'une à l'autre en **multipliant toujours par le même nombre** (le **coefficient**).

| Nombre de cahiers | 1 | 3 | 5 | 7 |
|---|---|---|---|---|
| Prix (F CFA) | 250 | 750 | 1 250 | 1 750 |

Ici, on multiplie toujours par 250 : c'est le coefficient de proportionnalité.
Contre-exemple : l'âge et la taille d'un enfant ne sont pas proportionnels.

## La règle de trois
5 kg de sucre coûtent 3 500 F. Combien coûtent 8 kg ?
- On cherche le prix d'**un** kilogramme : 3 500 ÷ 5 = 700 F.
- Puis le prix de 8 kg : 700 × 8 = **5 600 F**.

>! **Disposition** : 5 kg → 3 500 F ; 1 kg → 3 500 ÷ 5 = 700 F ; 8 kg → 700 × 8 = 5 600 F.

## Le pourcentage
**15 %** (quinze pour cent) veut dire **15 sur 100**.
- 15 % de 8 000 F = 8 000 × 15 ÷ 100 = **1 200 F**.
- Sur 40 élèves, 18 sont des filles : 18 ÷ 40 × 100 = **45 %** de filles.

## L'échelle d'un plan ou d'une carte
Une échelle de **1/50 000** veut dire : 1 cm sur la carte représente 50 000 cm en réalité (soit 500 m).
- Distance réelle = distance sur la carte × 50 000 : 4 cm → 200 000 cm = **2 km**.
- Distance sur la carte = distance réelle ÷ 50 000.

>! **Conversion** : 100 000 cm = 1 000 m = 1 km.

> **À retenir**
> - Proportionnalité : on multiplie toujours par le même coefficient.
> - Règle de trois : on passe par l'unité (÷ puis ×).
> - a % d'un nombre : nombre × a ÷ 100.
> - Échelle 1/n : réalité = plan × n (puis on convertit).
`,
      exercices: [
        {
          type: "vf",
          question: "Ce tableau est un tableau de proportionnalité : 2 → 6 ; 5 → 15 ; 7 → 21.",
          reponse: true,
          explication: "Vrai : on multiplie toujours par 3 (2 × 3 = 6 ; 5 × 3 = 15 ; 7 × 3 = 21).",
        },
        {
          type: "saisie",
          question: "3 cahiers coûtent 750 F CFA. Combien coûtent 7 cahiers ?",
          reponses: ["1 750", "1 750 F", "1 750 F CFA", "1 750 francs"],
          explication: "Un cahier : 750 ÷ 3 = 250 F. Sept cahiers : 250 × 7 = 1 750 F.",
        },
        {
          type: "saisie",
          question: "Dans un tableau de proportionnalité, 4 correspond à 10. À quoi correspond 6 ?",
          reponses: ["15"],
          explication: "Coefficient : 10 ÷ 4 = 2,5. Donc 6 × 2,5 = 15. (Autre méthode : 2 correspond à 5, donc 6 = 3 × 2 correspond à 3 × 5 = 15.)",
        },
        {
          type: "saisie",
          question: "Calcule 20 % de 15 000 F CFA.",
          reponses: ["3 000", "3 000 F", "3 000 F CFA", "3 000 francs"],
          explication: "15 000 × 20 ÷ 100 = 3 000 F. Astuce : 10 % de 15 000 = 1 500, donc 20 % = 3 000.",
        },
        {
          type: "qcm",
          question: "Sur un plan à l'échelle **1/100**, un mur mesure 5 cm. Quelle est sa longueur réelle ?",
          choix: ["50 cm", "500 m", "5 m", "50 m"],
          reponse: 2,
          explication: "5 cm × 100 = 500 cm = 5 m.",
        },
        {
          type: "vf",
          question: "L'âge d'un enfant et sa taille sont proportionnels.",
          reponse: false,
          explication: "Faux : à 1 an un enfant mesure environ 75 cm, mais à 10 ans il ne mesure pas 7,5 m ! La taille n'est pas multipliée par le même nombre que l'âge.",
        },
        {
          type: "saisie",
          question: "Sur une carte au 1/1 000 000, la distance entre Dakar et Thiès est de 7 cm. Quelle est la distance réelle en km ?",
          reponses: ["70", "70 kilomètres"],
          explication: "7 cm × 1 000 000 = 7 000 000 cm. 100 000 cm = 1 km, donc 7 000 000 cm = 70 km.",
        },
        {
          type: "saisie",
          question: "Dans une classe de 40 élèves, 18 sont des filles. Combien y aurait-il de filles pour 100 élèves ? (c'est le pourcentage de filles ; réponds par un nombre)",
          reponses: ["45"],
          explication: "18 ÷ 40 = 0,45, soit 45 sur 100 : 45 %. Vérification : 45 % de 40 = 40 × 45 ÷ 100 = 18.",
        },
        {
          type: "qcm",
          question: "Un robinet donne 12 litres en 3 minutes (toujours au même débit). Combien donne-t-il en 10 minutes ?",
          choix: ["30 l", "36 l", "120 l", "40 l"],
          reponse: 3,
          explication: "En 1 minute : 12 ÷ 3 = 4 litres. En 10 minutes : 4 × 10 = 40 litres.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : le directeur d'une école de Saint-Louis montre le plan de la cour, à l'échelle 1/500. Sur le plan, la cour est un rectangle de 12 cm de long et 8 cm de large. On veut faire un jardin scolaire sur 15 % de la surface de la cour.

*Consigne* :
1) Calcule la longueur et la largeur réelles de la cour, en mètres.
2) Calcule l'aire réelle de la cour.
3) Calcule l'aire du jardin scolaire.`,
          corrige: `1) Échelle 1/500 : 1 cm sur le plan = 500 cm = 5 m en réalité.
Longueur : 12 × 500 = 6 000 cm = **60 m**.
Largeur : 8 × 500 = 4 000 cm = **40 m**.

2) Aire de la cour : 60 × 40 = **2 400 m²**.

3) 15 % de 2 400 m² :
~~~
   2 400 × 15 = 36 000
   36 000 ÷ 100 = 360
~~~
Le jardin scolaire mesurera **360 m²**.`,
        },
      ],
    },

    // ───────────────────────── 9. Les figures planes
    {
      id: "figures-planes",
      titre: "Les figures planes",
      theme: "Activités géométriques",
      cours: `
## Les quadrilatères (4 côtés)
| Figure | Côtés | Angles | Diagonales |
|---|---|---|---|
| **Carré** | 4 côtés égaux, opposés parallèles | 4 angles droits | égales, perpendiculaires, se coupent en leur milieu |
| **Rectangle** | côtés opposés égaux et parallèles | 4 angles droits | égales, se coupent en leur milieu |
| **Losange** | 4 côtés égaux, opposés parallèles | angles opposés égaux | perpendiculaires, se coupent en leur milieu |
| **Parallélogramme** | côtés opposés égaux et parallèles | angles opposés égaux | se coupent en leur milieu |
| **Trapèze** | deux côtés parallèles (les bases) | — | — |

>! Un carré est à la fois un rectangle (4 angles droits) et un losange (4 côtés égaux).

## Les triangles (3 côtés)
- **Triangle isocèle** : 2 côtés égaux.
- **Triangle équilatéral** : 3 côtés égaux (et 3 angles égaux).
- **Triangle rectangle** : 1 angle droit.

## Le cercle
- Tous les points du cercle sont à la même distance du **centre** : c'est le **rayon**.
- Le **diamètre** passe par le centre : **diamètre = 2 × rayon**.
- On trace un cercle avec un **compas**, écarté de la longueur du rayon.

## Les autres polygones
Un **polygone** est une figure fermée formée de segments.
- **Hexagone** : 6 côtés. **Octogone** : 8 côtés. (Pentagone : 5 côtés.)
- Un polygone est **régulier** si tous ses côtés et tous ses angles sont égaux (le carré, le triangle équilatéral, l'hexagone d'une alvéole d'abeille…). Sinon, il est **irrégulier**.

## Le tangram
C'est un puzzle chinois de **7 pièces** découpées dans un carré : **5 triangles**, **1 carré** et **1 parallélogramme**. Avec les 7 pièces, on construit des figures (maison, pirogue, animal…).

## Les instruments
- **Règle** : tracer et mesurer ; **équerre** : tracer et vérifier un angle droit ; **compas** : tracer un cercle, reporter une longueur.

> **À retenir**
> - Carré : 4 côtés égaux et 4 angles droits ; rectangle : 4 angles droits ; losange : 4 côtés égaux.
> - Trapèze : deux côtés parallèles.
> - Diamètre = 2 × rayon.
> - Hexagone : 6 côtés ; octogone : 8 côtés ; tangram : 7 pièces.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel quadrilatère a **4 côtés égaux et 4 angles droits** ?",
          choix: ["le carré", "le losange", "le rectangle", "le trapèze"],
          reponse: 0,
          explication: "Le carré. Le losange a 4 côtés égaux mais pas forcément d'angle droit ; le rectangle a 4 angles droits mais ses côtés ne sont pas forcément tous égaux.",
        },
        {
          type: "vf",
          question: "Les diagonales d'un losange sont perpendiculaires.",
          reponse: true,
          explication: "Vrai : les diagonales d'un losange se coupent à angle droit, en leur milieu.",
        },
        {
          type: "saisie",
          question: "Combien de côtés a un **octogone** ?",
          reponses: ["8", "8 côtés"],
          explication: "Un octogone a 8 côtés. Ne le confonds pas avec l'hexagone, qui en a 6.",
        },
        {
          type: "qcm",
          question: "Qu'est-ce qui caractérise un **trapèze** ?",
          choix: ["4 angles droits", "2 côtés parallèles", "4 côtés égaux", "3 côtés"],
          reponse: 1,
          explication: "Un trapèze est un quadrilatère qui a deux côtés parallèles, appelés les bases.",
        },
        {
          type: "vf",
          question: "Un carré est aussi un losange.",
          reponse: true,
          explication: "Vrai : un losange est un quadrilatère à 4 côtés égaux. Le carré a 4 côtés égaux : c'est un losange particulier (avec des angles droits).",
        },
        {
          type: "saisie",
          question: "Un cercle a un diamètre de 10 cm. Quel est son rayon, en cm ?",
          reponses: ["5", "5 centimètres"],
          explication: "Diamètre = 2 × rayon, donc rayon = 10 ÷ 2 = 5 cm.",
        },
        {
          type: "qcm",
          question: "Combien de pièces comporte un **tangram** ?",
          choix: ["5", "6", "8", "7"],
          reponse: 3,
          explication: "Le tangram a 7 pièces : 5 triangles, 1 carré et 1 parallélogramme.",
        },
        {
          type: "vf",
          question: "Dans tout rectangle, les diagonales sont perpendiculaires.",
          reponse: false,
          explication: "Faux : les diagonales d'un rectangle sont égales et se coupent en leur milieu, mais elles ne sont perpendiculaires que si le rectangle est un carré.",
        },
        {
          type: "qcm",
          question: "Un triangle a ses **3 côtés égaux**. Comment s'appelle-t-il ?",
          choix: ["isocèle", "rectangle", "équilatéral", "quelconque"],
          reponse: 2,
          explication: "Un triangle à 3 côtés égaux est équilatéral. Isocèle : seulement 2 côtés égaux ; rectangle : un angle droit.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : pour la fête de l'indépendance (4 avril), Ousmane veut dessiner le drapeau du Sénégal sur son cahier. Le drapeau est un rectangle de 9 cm de long et 6 cm de large, partagé en trois bandes verticales égales : vert, or (jaune), rouge. Une étoile verte est au centre de la bande jaune.

*Consigne* :
1) Quels instruments Ousmane doit-il utiliser ? Écris les étapes de la construction du rectangle et des bandes.
2) Quelle est la forme de chaque bande ? Donne ses dimensions.
3) Comment trouver le centre de la bande jaune pour placer l'étoile ?`,
          corrige: `1) Instruments : la **règle** (tracer et mesurer) et l'**équerre** (angles droits).
Étapes :
- trace un segment AB de 9 cm ;
- en A et en B, trace avec l'équerre deux segments perpendiculaires de 6 cm : AD et BC ;
- relie D et C : le rectangle ABCD est construit (vérifie que DC = 9 cm) ;
- 9 ÷ 3 = 3 cm : marque des points à 3 cm et 6 cm de A sur [AB] et sur [DC], puis relie-les. On obtient 3 bandes.

2) Chaque bande est un **rectangle** de **3 cm de large** et **6 cm de haut**.

3) Le centre de la bande jaune est le point où se coupent ses **diagonales** (elles se coupent en leur milieu). On trace les deux diagonales du rectangle jaune au crayon léger : l'étoile est placée à leur point d'intersection.`,
        },
      ],
    },

    // ───────────────────────── 10. Les solides
    {
      id: "solides",
      titre: "Les solides : cube, pavé droit, cylindre, prisme droit",
      theme: "Activités géométriques",
      cours: `
## Le vocabulaire
Un solide a des **faces** (surfaces planes), des **arêtes** (les bords où deux faces se rencontrent) et des **sommets** (les pointes).

## Le cube et le pavé droit
| Solide | Faces | Arêtes | Sommets | Exemples |
|---|---|---|---|---|
| **Cube** | 6 carrés égaux | 12 (toutes égales) | 8 | un dé, un bouillon cube |
| **Pavé droit** | 6 rectangles (opposés égaux deux à deux) | 12 | 8 | une boîte de sucre, une brique |

Un cube est un pavé droit particulier : toutes ses faces sont des carrés.

## Le cylindre
- Deux **bases** : deux disques égaux et parallèles.
- Une **surface latérale** courbe. Si on la déroule, on obtient un **rectangle**, dont la longueur est le périmètre du disque de base.
- Exemples : une boîte de tomate concentrée, un fût, un tuyau.

## Le prisme droit
- Deux **bases** égales et parallèles qui sont des polygones (souvent des triangles).
- Des **faces latérales** rectangulaires.
- Prisme droit à base triangulaire : **5 faces** (2 triangles + 3 rectangles), **9 arêtes**, **6 sommets**. Exemple : une tente, le toit d'une case en forme de prisme.

## Le patron
Le **patron** d'un solide est la figure plane qu'on découpe et qu'on plie pour fabriquer ce solide.
- Patron du cube : **6 carrés**.
- Patron du pavé : 6 rectangles.
- Patron du cylindre : 2 disques et 1 rectangle.

> **À retenir**
> - Cube et pavé droit : 6 faces, 12 arêtes, 8 sommets.
> - Cylindre : 2 bases en disques et une surface latérale qui se déroule en rectangle.
> - Prisme droit à base triangulaire : 5 faces, 9 arêtes, 6 sommets.
`,
      exercices: [
        {
          type: "saisie",
          question: "Combien d'**arêtes** a un cube ?",
          reponses: ["12"],
          explication: "4 arêtes en haut, 4 en bas et 4 verticales : 12 arêtes.",
        },
        {
          type: "qcm",
          question: "Quelle est la forme des faces d'un **pavé droit** (qui n'est pas un cube) ?",
          choix: ["des triangles", "des disques", "des rectangles", "des losanges"],
          reponse: 2,
          explication: "Un pavé droit a 6 faces rectangulaires, égales deux à deux (opposées).",
        },
        {
          type: "vf",
          question: "Si on déroule la surface latérale d'un cylindre, on obtient un rectangle.",
          reponse: true,
          explication: "Vrai : l'étiquette d'une boîte de conserve, une fois décollée, est un rectangle. Sa longueur est le tour (périmètre) de la base.",
        },
        {
          type: "saisie",
          question: "Combien de **sommets** a un prisme droit à base triangulaire ?",
          reponses: ["6"],
          explication: "3 sommets pour le triangle du haut et 3 pour celui du bas : 6 sommets.",
        },
        {
          type: "qcm",
          question: "Une boîte de lait concentré a la forme d'un…",
          choix: ["cube", "cylindre", "prisme droit", "pavé droit"],
          reponse: 1,
          explication: "Elle a deux bases en forme de disque et une surface latérale courbe : c'est un cylindre.",
        },
        {
          type: "vf",
          question: "Un cube est un pavé droit particulier.",
          reponse: true,
          explication: "Vrai : c'est un pavé droit dont toutes les faces sont des carrés.",
        },
        {
          type: "saisie",
          question: "Combien de **faces** a un prisme droit à base triangulaire ?",
          reponses: ["5"],
          explication: "2 bases triangulaires + 3 faces latérales rectangulaires = 5 faces.",
        },
        {
          type: "qcm",
          question: "Combien de carrés faut-il pour faire le **patron** d'un cube ?",
          choix: ["4", "8", "12", "6"],
          reponse: 3,
          explication: "Un cube a 6 faces : son patron est formé de 6 carrés.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : Moussa fabrique une boîte en carton en forme de pavé droit pour ranger ses billes. Elle mesure 20 cm de long, 10 cm de large et 8 cm de haut. Il veut coller du ruban adhésif sur toutes les arêtes.

*Consigne* :
1) Combien de faces a sa boîte ? Donne les dimensions de chaque face.
2) Combien d'arêtes a la boîte ?
3) Quelle longueur de ruban adhésif lui faut-il ?`,
          corrige: `1) La boîte a **6 faces** rectangulaires, égales deux à deux :
- 2 faces de 20 cm × 10 cm (le dessus et le dessous) ;
- 2 faces de 20 cm × 8 cm (devant et derrière) ;
- 2 faces de 10 cm × 8 cm (les côtés).

2) Un pavé droit a **12 arêtes** : 4 de 20 cm, 4 de 10 cm et 4 de 8 cm.

3) Longueur du ruban :
~~~
   4 × 20 = 80 cm
   4 × 10 = 40 cm
   4 ×  8 = 32 cm
   80 + 40 + 32 = 152 cm
~~~
Il lui faut **152 cm** de ruban (soit 1,52 m).`,
        },
      ],
    },

    // ───────────────────────── 11. Symétrie, translation, agrandissement
    {
      id: "symetrie-translation",
      titre: "Symétrie, translation, agrandissement et réduction",
      theme: "Activités géométriques",
      cours: `
## La symétrie axiale
Deux figures sont **symétriques par rapport à une droite** (l'**axe de symétrie**) si elles se superposent quand on plie la feuille le long de cette droite.
- Le symétrique d'un point est de l'autre côté de l'axe, **à la même distance**, sur une perpendiculaire à l'axe.
- La symétrie **conserve** les longueurs et les angles : le symétrique d'un segment de 4 cm est un segment de 4 cm.

## Axes de symétrie d'une figure
| Figure | Nombre d'axes |
|---|---|
| Carré | 4 |
| Rectangle (non carré) | 2 |
| Losange (non carré) | 2 (ses diagonales) |
| Triangle équilatéral | 3 |
| Triangle isocèle | 1 |
| Cercle | une infinité (tous ses diamètres) |

## La translation
Une **translation** fait **glisser** une figure, sans la tourner ni la retourner, selon :
- une **direction** (horizontale, verticale…),
- un **sens** (vers la droite, vers le haut…),
- une **longueur** (par exemple 5 carreaux).
La figure obtenue est **identique** à la figure de départ. Sur un tissu wax ou une frise, le même motif se répète par translation.

## Agrandissement et réduction
- Pour **agrandir** une figure, on multiplie **toutes** ses longueurs par le même nombre (× 2, × 3…).
- Pour la **réduire**, on les divise par le même nombre (÷ 2…).
- Les **angles ne changent pas** : un angle droit reste un angle droit.
Exemple : un rectangle de 8 cm sur 6 cm réduit de moitié devient un rectangle de 4 cm sur 3 cm.

>! **Sur un quadrillage** : pour agrandir × 2, un segment de 3 carreaux devient un segment de 6 carreaux.

> **À retenir**
> - Symétrie : pliage ; même distance de part et d'autre de l'axe.
> - Translation : glissement (direction, sens, longueur), la figure ne tourne pas.
> - Agrandissement / réduction : toutes les longueurs × ou ÷ par le même nombre ; les angles ne changent pas.
`,
      exercices: [
        {
          type: "saisie",
          question: "Combien d'axes de symétrie a un **carré** ?",
          reponses: ["4"],
          explication: "Un carré a 4 axes de symétrie : les 2 diagonales et les 2 droites qui passent par les milieux des côtés opposés.",
        },
        {
          type: "qcm",
          question: "Combien d'axes de symétrie a un **rectangle** qui n'est pas un carré ?",
          choix: ["2", "0", "4", "1"],
          reponse: 0,
          explication: "2 axes : les droites qui passent par les milieux des côtés opposés. Les diagonales d'un rectangle ne sont pas des axes de symétrie (essaie de plier une feuille !).",
        },
        {
          type: "vf",
          question: "Dans une translation, la figure tourne.",
          reponse: false,
          explication: "Faux : la translation fait seulement glisser la figure, sans la tourner ni la retourner.",
        },
        {
          type: "vf",
          question: "Le symétrique d'un segment de 4 cm est un segment de 4 cm.",
          reponse: true,
          explication: "Vrai : la symétrie conserve les longueurs.",
        },
        {
          type: "saisie",
          question: "On agrandit un triangle trois fois (× 3). Un de ses côtés mesure 4 cm. Combien mesure ce côté sur l'agrandissement, en cm ?",
          reponses: ["12", "12 centimètres"],
          explication: "Toutes les longueurs sont multipliées par 3 : 4 × 3 = 12 cm.",
        },
        {
          type: "qcm",
          question: "On réduit de moitié un rectangle de 8 cm sur 6 cm. Quelles sont les nouvelles dimensions ?",
          choix: ["6 cm sur 4 cm", "4 cm sur 6 cm", "16 cm sur 12 cm", "4 cm sur 3 cm"],
          reponse: 3,
          explication: "On divise toutes les longueurs par 2 : 8 ÷ 2 = 4 cm et 6 ÷ 2 = 3 cm.",
        },
        {
          type: "saisie",
          question: "Combien d'axes de symétrie a un **triangle équilatéral** ?",
          reponses: ["3"],
          explication: "3 axes : chacun passe par un sommet et par le milieu du côté opposé.",
        },
        {
          type: "qcm",
          question: "Laquelle de ces lettres majuscules a un **axe de symétrie vertical** ?",
          choix: ["F", "A", "G", "J"],
          reponse: 1,
          explication: "Si on plie la lettre A le long d'une droite verticale passant par sa pointe, les deux moitiés se superposent. F, G et J n'ont aucun axe de symétrie.",
        },
        {
          type: "vf",
          question: "Quand on agrandit une figure, ses angles deviennent plus grands.",
          reponse: false,
          explication: "Faux : dans un agrandissement, seules les longueurs changent. Les angles restent les mêmes.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : la maman de Fatou, couturière à Dakar, dessine un motif pour un tissu sur du papier quadrillé. Le motif est un triangle rectangle ABC : AB mesure 4 carreaux (horizontal) et AC mesure 3 carreaux (vertical), avec l'angle droit en A. Elle veut répéter le motif tout le long d'une bande, puis faire un grand modèle pour une affiche.

*Consigne* :
1) Quelle transformation doit-elle utiliser pour répéter le motif tous les 6 carreaux vers la droite ? Explique comment faire.
2) Le motif répété est-il plus grand, plus petit ou identique ?
3) Pour l'affiche, elle agrandit le motif × 2. Donne les nouvelles longueurs de AB et AC. L'angle en A est-il toujours droit ?`,
          corrige: `1) Elle utilise une **translation** : direction horizontale, sens vers la droite, longueur 6 carreaux. Elle déplace chaque sommet (A, B, C) de 6 carreaux vers la droite, puis relie les nouveaux points.

2) Le motif obtenu est **identique** (même forme, mêmes longueurs) : une translation fait seulement glisser la figure.

3) Agrandissement × 2 : AB = 4 × 2 = **8 carreaux** ; AC = 3 × 2 = **6 carreaux**.
**Oui**, l'angle en A reste droit : un agrandissement ne change pas les angles.`,
        },
      ],
    },

    // ───────────────────────── 12. Longueurs, périmètres, intervalles
    {
      id: "longueurs-perimetres",
      titre: "Longueurs, périmètres et intervalles",
      theme: "Activités de mesure",
      cours: `
## Le mètre, ses multiples et sous-multiples
| km | hm | dam | **m** | dm | cm | mm |
|---|---|---|---|---|---|---|
| 1 000 m | 100 m | 10 m | **1 m** | 0,1 m | 0,01 m | 0,001 m |

Chaque unité vaut **10 fois** l'unité qui est à sa droite.
- 3,5 km = 3 500 m ; 245 cm = 2,45 m ; 0,8 m = 80 cm.

>! **Méthode** : on place le nombre dans le tableau, le chiffre des unités dans la colonne de l'unité donnée, puis on déplace la virgule dans la colonne de l'unité demandée.

## Le périmètre
Le **périmètre** est la longueur du **tour** d'une figure.
| Figure | Périmètre | Pour trouver une dimension |
|---|---|---|
| Carré de côté c | P = c × 4 | c = P ÷ 4 |
| Rectangle (L et l) | P = (L + l) × 2 | l = P ÷ 2 − L |
| Cercle de diamètre D | P = D × 3,14 | D = P ÷ 3,14 |

Exemples :
- un champ rectangulaire de 45 m sur 28 m : P = (45 + 28) × 2 = **146 m** ;
- un cercle de 8 m de diamètre : P = 8 × 3,14 = **25,12 m** ;
- un rectangle de périmètre 80 m et de longueur 25 m : demi-périmètre 40 m, largeur 40 − 25 = **15 m**.

## Les intervalles
On plante des arbres le long d'une route de 120 m, **un arbre tous les 8 m**.
- Nombre d'**intervalles** : 120 ÷ 8 = 15.
- Sur une ligne **ouverte** avec un arbre **à chaque bout** : arbres = intervalles + 1 = **16 arbres**.
- Sans arbre aux deux bouts : intervalles − 1 = 14 arbres.
- Sur une ligne **fermée** (le tour d'un champ, d'un rond-point) : arbres = intervalles.

~~~
   arbre   arbre   arbre   arbre
     |-------|-------|-------|      3 intervalles → 4 arbres
~~~

## Les échelles
Voir le chapitre « Proportionnalité » : sur un plan au 1/200, 1 cm représente 200 cm = 2 m.

> **À retenir**
> - km, hm, dam, m, dm, cm, mm : chaque unité vaut 10 fois la suivante.
> - Carré : c × 4 ; rectangle : (L + l) × 2 ; cercle : D × 3,14.
> - Ligne ouverte avec les deux bouts : intervalles + 1 ; ligne fermée : autant d'arbres que d'intervalles.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 3,5 km en mètres.",
          reponses: ["3 500", "3 500 mètres"],
          explication: "1 km = 1 000 m, donc 3,5 km = 3,5 × 1 000 = 3 500 m.",
        },
        {
          type: "saisie",
          question: "Convertis 245 cm en mètres.",
          reponses: ["2,45", "2,45 mètres"],
          explication: "100 cm = 1 m, donc 245 cm = 245 ÷ 100 = 2,45 m.",
        },
        {
          type: "saisie",
          question: "Calcule le périmètre, en mètres, d'un carré de 12,5 m de côté.",
          reponses: ["50", "50 mètres"],
          explication: "P = c × 4 = 12,5 × 4 = 50 m.",
        },
        {
          type: "qcm",
          question: "Quel est le périmètre d'un rectangle de 30 m de long et 18 m de large ?",
          choix: ["48 m", "540 m", "66 m", "96 m"],
          reponse: 3,
          explication: "P = (30 + 18) × 2 = 48 × 2 = 96 m. 48 m est seulement le demi-périmètre ; 540 est l'aire en m².",
        },
        {
          type: "saisie",
          question: "Calcule le périmètre, en mètres, d'un cercle de 5 m de diamètre (prends 3,14).",
          reponses: ["15,7", "15,7 mètres"],
          explication: "P = D × 3,14 = 5 × 3,14 = 15,7 m.",
        },
        {
          type: "saisie",
          question: "Un rectangle a un périmètre de 80 m et une longueur de 25 m. Quelle est sa largeur, en mètres ?",
          reponses: ["15", "15 mètres"],
          explication: "Demi-périmètre : 80 ÷ 2 = 40 m (une longueur + une largeur). Largeur : 40 − 25 = 15 m. Vérification : (25 + 15) × 2 = 80 m.",
        },
        {
          type: "vf",
          question: "Un carré qui a 36 m de périmètre a des côtés de 9 m.",
          reponse: true,
          explication: "Vrai : c = P ÷ 4 = 36 ÷ 4 = 9 m.",
        },
        {
          type: "saisie",
          question: "Le long d'une rue droite de 200 m, on place un poteau électrique tous les 25 m, avec un poteau à chaque bout. Combien faut-il de poteaux ?",
          reponses: ["9"],
          explication: "Intervalles : 200 ÷ 25 = 8. Ligne ouverte avec un poteau à chaque bout : 8 + 1 = 9 poteaux.",
        },
        {
          type: "qcm",
          question: "Autour d'un rond-point de 60 m de tour, on plante un arbre tous les 5 m. Combien d'arbres plante-t-on ?",
          choix: ["11", "13", "12", "60"],
          reponse: 2,
          explication: "Intervalles : 60 ÷ 5 = 12. Le tour est une ligne fermée : le dernier arbre serait au même endroit que le premier. Il y a autant d'arbres que d'intervalles : 12.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : à Thiès, le papa de Moussa veut clôturer son jardin rectangulaire de 42 m de long et 26 m de large. Il laisse une entrée de 4 m pour le portail. Le grillage coûte 1 500 F CFA le mètre. Il plante un poteau tous les 2 m le long du grillage, avec un poteau à chaque bout du grillage (de chaque côté du portail).

*Consigne* : pose les opérations et calcule :
1) le périmètre du jardin ;
2) la longueur de grillage nécessaire et son prix ;
3) le nombre de poteaux.`,
          corrige: `1) P = (42 + 26) × 2 = 68 × 2 = **136 m**.

2) Grillage : 136 − 4 = **132 m**.
Prix :
~~~
      1 500
    ×   132
    -------
      3 000
     45 000
  + 150 000
  ---------
    198 000
~~~
Le grillage coûte **198 000 F CFA**.

3) Le grillage va d'un côté du portail à l'autre : c'est une ligne **ouverte**.
Intervalles : 132 ÷ 2 = 66. Poteaux : 66 + 1 = **67 poteaux**.`,
        },
      ],
    },

    // ───────────────────────── 13. Capacités, masses, degrés
    {
      id: "capacites-masses",
      titre: "Capacités, masses (brute, nette, tare) et degrés",
      theme: "Activités de mesure",
      cours: `
## Le litre
| hl | dal | **l** | dl | cl | ml |
|---|---|---|---|---|---|
| 100 l | 10 l | **1 l** | 0,1 l | 0,01 l | 0,001 l |

2,5 l = 250 cl ; 75 cl = 0,75 l ; 1 l = 1 000 ml. Une bouteille d'eau de 1,5 l contient 150 cl.

## Le gramme
| **kg** | hg | dag | **g** | dg | cg | mg |
|---|---|---|---|---|---|---|
| **1 000 g** | 100 g | 10 g | **1 g** | 0,1 g | 0,01 g | 0,001 g |

Pour les grandes masses :

- 1 **tonne** (t) = 1 000 kg ; 1 **quintal** (q) = 100 kg ; 1 kg = 1 000 g.
- 3 t = 3 000 kg ; 750 g = 0,75 kg ; 1,25 kg = 1 250 g.

## Masse brute, masse nette, tare
- **Masse nette** : la masse de la marchandise seule (le riz).
- **Tare** : la masse de l'emballage (le sac).
- **Masse brute** : marchandise + emballage.

**Masse brute = masse nette + tare** ; masse nette = brute − tare ; tare = brute − nette.
Exemple : un sac de riz de 50 kg net, avec un sac vide de 0,6 kg : masse brute = 50 + 0,6 = **50,6 kg**.

## Le degré
- Le mot « degré » sert pour deux mesures. Les **angles** se mesurent en **degrés** (°) avec un **rapporteur** : angle droit = **90°** ; angle plat = 180° ; angle **aigu** : moins de 90° ; angle **obtus** : entre 90° et 180°.
- La **température** se mesure aussi en degrés Celsius (°C) avec un thermomètre : l'eau gèle à 0 °C et bout à 100 °C.

> **À retenir**
> - 1 l = 100 cl = 1 000 ml.
> - 1 t = 1 000 kg ; 1 q = 100 kg ; 1 kg = 1 000 g.
> - Masse brute = masse nette + tare.
> - Angle droit : 90° ; aigu : moins de 90° ; obtus : entre 90° et 180°.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 2,5 l en centilitres.",
          reponses: ["250"],
          explication: "1 l = 100 cl, donc 2,5 l = 2,5 × 100 = 250 cl.",
        },
        {
          type: "saisie",
          question: "Convertis 3 t en kilogrammes.",
          reponses: ["3 000"],
          explication: "1 t = 1 000 kg, donc 3 t = 3 000 kg.",
        },
        {
          type: "qcm",
          question: "Combien vaut **1 quintal** ?",
          choix: ["100 kg", "10 kg", "1 000 kg", "100 g"],
          reponse: 0,
          explication: "1 quintal = 100 kg. Il faut 10 quintaux pour faire 1 tonne.",
        },
        {
          type: "saisie",
          question: "Un sac contient 50 kg de riz (masse nette). Le sac vide pèse 0,6 kg. Quelle est la masse brute, en kg ?",
          reponses: ["50,6"],
          explication: "Masse brute = masse nette + tare = 50 + 0,6 = 50,6 kg.",
        },
        {
          type: "vf",
          question: "Masse nette = masse brute + tare.",
          reponse: false,
          explication: "Faux : c'est la masse **brute** qui est la somme. Masse brute = nette + tare, donc masse nette = brute − tare.",
        },
        {
          type: "saisie",
          question: "Calcule en grammes : 750 g + 1,25 kg.",
          reponses: ["2 000"],
          explication: "1,25 kg = 1 250 g. 750 + 1 250 = 2 000 g (soit 2 kg).",
        },
        {
          type: "qcm",
          question: "Combien mesure un **angle droit** ?",
          choix: ["90°", "45°", "180°", "100°"],
          reponse: 0,
          explication: "Un angle droit mesure 90°. 180° est un angle plat (deux angles droits).",
        },
        {
          type: "saisie",
          question: "Un carton contient 24 boîtes de tomate de 400 g chacune. Le carton vide pèse 600 g. Quelle est la masse brute du carton plein, en kg ?",
          reponses: ["10,2"],
          explication: "Boîtes : 24 × 400 = 9 600 g. Masse brute : 9 600 + 600 = 10 200 g = 10,2 kg.",
        },
        {
          type: "vf",
          question: "Un angle de 60° est un angle aigu.",
          reponse: true,
          explication: "Vrai : un angle aigu mesure moins de 90°.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : un camion part de Kaolack pour Dakar avec 120 sacs d'arachide. Chaque sac contient 60 kg d'arachide ; un sac vide pèse 0,5 kg. Le camion ne doit pas transporter plus de 8 tonnes. À Dakar, le chauffeur achète aussi 30 litres d'huile qu'il verse dans des bouteilles de 75 cl.

*Consigne* :
1) Calcule la masse nette et la masse brute du chargement, en kg puis en tonnes.
2) Le camion respecte-t-il la limite de 8 tonnes ? De combien de kg est-il en dessous ?
3) Combien de bouteilles de 75 cl le chauffeur remplit-il ?`,
          corrige: `1) Masse nette : 120 × 60 = **7 200 kg = 7,2 t**.
Tare : 120 × 0,5 = 60 kg.
Masse brute : 7 200 + 60 = **7 260 kg = 7,26 t**.

2) 8 t = 8 000 kg. 7 260 < 8 000 : **oui**, la limite est respectée.
8 000 − 7 260 = **740 kg** en dessous de la limite.

3) 30 l = 3 000 cl.
~~~
  3 0 0 0 | 75
− 3 0 0   |----
      0 0 | 40
~~~
Il remplit **40 bouteilles**. Vérification : 40 × 75 = 3 000 cl.`,
        },
      ],
    },

    // ───────────────────────── 14. Les aires
    {
      id: "aires",
      titre: "Les aires",
      theme: "Activités de mesure",
      cours: `
## Les unités d'aire
| km² | hm² | dam² | **m²** | dm² | cm² | mm² |
|---|---|---|---|---|---|---|

Chaque unité vaut **100 fois** l'unité qui est à sa droite : 1 m² = 100 dm² ; 1 dm² = 100 cm². (Dans le tableau, on met **deux chiffres par colonne**.)

**Mesures agraires** (pour les champs) : 1 **hectare** (ha) = 1 hm² = 10 000 m² ; 1 **are** (a) = 1 dam² = 100 m² ; 1 **centiare** (ca) = 1 m².

## Les formules
| Figure | Aire |
|---|---|
| Carré de côté c | c × c |
| Rectangle | L × l |
| Triangle | (base × hauteur) ÷ 2 |
| Parallélogramme | base × hauteur |
| Losange | (grande diagonale × petite diagonale) ÷ 2 |
| Trapèze | (grande base + petite base) × hauteur ÷ 2 |
| Disque de rayon r | r × r × 3,14 |

Exemples :
- un champ de 120 m sur 85 m : 120 × 85 = 10 200 m² = **1,02 ha** ;
- un trapèze de bases 12 m et 8 m, de hauteur 5 m : (12 + 8) × 5 ÷ 2 = **50 m²** ;
- un disque de 3 m de rayon : 3 × 3 × 3,14 = **28,26 m²**.

## Trouver une dimension
- Rectangle : l = A ÷ L. Une aire de 360 m² et une longueur de 24 m → largeur 360 ÷ 24 = **15 m**.
- Triangle : hauteur = A × 2 ÷ base.

## Aires augmentées et diminuées
Un carré de 10 m de côté a une aire de 100 m². Si on **augmente** son côté de 2 m, il devient un carré de 12 m : aire 144 m². L'aire est **augmentée** de 144 − 100 = **44 m²** (et non de 4 m² !).

>! **Allée autour d'un jardin** : jardin de 30 m sur 20 m, allée de 1 m de large tout autour à l'extérieur. Grand rectangle : (30 + 2) × (20 + 2) = 32 × 22 = 704 m². Aire de l'allée : 704 − 600 = **104 m²**.

> **À retenir**
> - 1 m² = 100 dm² ; 1 ha = 10 000 m² ; 1 a = 100 m².
> - Rectangle L × l ; triangle (b × h) ÷ 2 ; disque r × r × 3,14 ; trapèze (B + b) × h ÷ 2 ; losange (D × d) ÷ 2.
> - Aire augmentée ou diminuée : nouvelle aire − ancienne aire.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 3 m² en dm².",
          reponses: ["300"],
          explication: "1 m² = 100 dm², donc 3 m² = 300 dm².",
        },
        {
          type: "saisie",
          question: "Calcule l'aire, en m², d'un rectangle de 15 m sur 8 m.",
          reponses: ["120"],
          explication: "A = L × l = 15 × 8 = 120 m².",
        },
        {
          type: "qcm",
          question: "Quelle est l'aire d'un triangle de base 10 cm et de hauteur 6 cm ?",
          choix: ["30 cm²", "60 cm²", "16 cm²", "32 cm²"],
          reponse: 0,
          explication: "A = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm². N'oublie pas de diviser par 2.",
        },
        {
          type: "saisie",
          question: "Calcule l'aire, en m², d'un disque de 10 m de rayon (prends 3,14).",
          reponses: ["314"],
          explication: "A = r × r × 3,14 = 10 × 10 × 3,14 = 314 m².",
        },
        {
          type: "saisie",
          question: "Calcule l'aire, en m², d'un trapèze de grande base 14 m, de petite base 10 m et de hauteur 6 m.",
          reponses: ["72"],
          explication: "A = (14 + 10) × 6 ÷ 2 = 24 × 6 ÷ 2 = 144 ÷ 2 = 72 m².",
        },
        {
          type: "vf",
          question: "1 hectare = 10 000 m².",
          reponse: true,
          explication: "Vrai : 1 ha = 1 hm² = 100 m × 100 m = 10 000 m².",
        },
        {
          type: "saisie",
          question: "Calcule l'aire, en cm², d'un losange dont les diagonales mesurent 8 cm et 5 cm.",
          reponses: ["20"],
          explication: "A = (D × d) ÷ 2 = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm².",
        },
        {
          type: "saisie",
          question: "Un champ rectangulaire a une aire de 360 m² et une longueur de 24 m. Quelle est sa largeur, en m ?",
          reponses: ["15", "15 mètres"],
          explication: "l = A ÷ L = 360 ÷ 24 = 15 m. Vérification : 24 × 15 = 360 m².",
        },
        {
          type: "qcm",
          question: "Un carré a 10 m de côté. On augmente son côté de 2 m. De combien son aire augmente-t-elle ?",
          choix: ["4 m²", "20 m²", "40 m²", "44 m²"],
          reponse: 3,
          explication: "Ancienne aire : 10 × 10 = 100 m². Nouvelle aire : 12 × 12 = 144 m². Augmentation : 144 − 100 = 44 m².",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : l'école d'Aïssatou, à Kaolack, a un jardin rectangulaire de 30 m sur 20 m. Au centre, on creuse un bassin circulaire de 4 m de diamètre pour arroser. Le reste du jardin est planté de légumes. On veut aussi faire une allée de 1 m de large tout autour du jardin, à l'extérieur.

*Consigne* : calcule (prends 3,14) :
1) l'aire du jardin ;
2) l'aire du bassin, puis l'aire plantée de légumes ;
3) l'aire de l'allée.`,
          corrige: `1) Aire du jardin : 30 × 20 = **600 m²**.

2) Rayon du bassin : 4 ÷ 2 = 2 m. Aire : 2 × 2 × 3,14 = **12,56 m²**.
Aire plantée :
~~~
    600,00
  −  12,56
  --------
    587,44
~~~
On plante des légumes sur **587,44 m²**.

3) Avec l'allée, on obtient un grand rectangle de (30 + 2) m sur (20 + 2) m, car l'allée ajoute 1 m de chaque côté.
32 × 22 = 704 m². Aire de l'allée : 704 − 600 = **104 m²**.`,
        },
      ],
    },

    // ───────────────────────── 15. Volumes, capacité, masse volumique
    {
      id: "volumes-masse-volumique",
      titre: "Volumes, capacités et masse volumique",
      theme: "Activités de mesure",
      cours: `
## Les unités de volume
| m³ | dm³ | cm³ | mm³ |
|---|---|---|---|

Chaque unité vaut **1 000 fois** l'unité qui est à sa droite : 1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³. (Dans le tableau, **trois chiffres par colonne**.)

## Volume et capacité
- **1 dm³ = 1 litre** ; 1 m³ = 1 000 litres ; 1 cm³ = 1 ml.
- Une citerne de 3 m³ contient 3 000 litres.

## Les formules
| Solide | Volume |
|---|---|
| Cube d'arête a | a × a × a |
| Pavé droit | L × l × h |
| Cylindre (rayon r, hauteur h) | r × r × 3,14 × h (aire de la base × hauteur) |

Exemples :
- une citerne pavé de 2 m × 1,5 m × 1 m : 2 × 1,5 × 1 = **3 m³** ;
- un fût cylindrique de rayon 0,5 m et de hauteur 2 m : 0,5 × 0,5 × 3,14 × 2 = **1,57 m³**.

## Volume, masse, capacité de l'eau
**1 litre d'eau pèse 1 kg** ; 1 m³ d'eau (1 000 l) pèse 1 000 kg = **1 tonne**.

## La masse volumique
Un litre d'eau et un litre d'huile ne pèsent pas pareil. La **masse volumique** d'une matière, c'est tout simplement **combien pèse 1 dm³ (1 litre)** de cette matière, en kg.
| Matière | Masse de 1 dm³ |
|---|---|
| Eau | 1 kg |
| Huile | 0,92 kg |
| Fer | 7,8 kg |

- **Masse = volume × masse volumique** : 5 l d'huile pèsent 5 × 0,92 = **4,6 kg**.
- **Volume = masse ÷ masse volumique** ; masse volumique = masse ÷ volume.

>! L'huile est plus légère que l'eau : c'est pour cela qu'elle flotte au-dessus de l'eau.

> **À retenir**
> - 1 m³ = 1 000 dm³ ; 1 dm³ = 1 l ; 1 m³ = 1 000 l.
> - Cube a × a × a ; pavé L × l × h ; cylindre r × r × 3,14 × h.
> - 1 l d'eau pèse 1 kg.
> - Masse = volume (dm³) × masse volumique (kg par dm³).
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 2 m³ en dm³.",
          reponses: ["2 000"],
          explication: "1 m³ = 1 000 dm³, donc 2 m³ = 2 000 dm³.",
        },
        {
          type: "saisie",
          question: "Calcule le volume, en cm³, d'un cube de 5 cm d'arête.",
          reponses: ["125"],
          explication: "V = 5 × 5 × 5 = 125 cm³.",
        },
        {
          type: "saisie",
          question: "Calcule le volume, en m³, d'un pavé droit de 4 m sur 3 m sur 2 m.",
          reponses: ["24"],
          explication: "V = L × l × h = 4 × 3 × 2 = 24 m³.",
        },
        {
          type: "qcm",
          question: "À quoi est égal **1 dm³** ?",
          choix: ["1 l", "1 cl", "10 l", "1 000 l"],
          reponse: 0,
          explication: "1 dm³ = 1 litre. C'est 1 m³ qui vaut 1 000 litres.",
        },
        {
          type: "vf",
          question: "1 m³ d'eau pèse 1 tonne.",
          reponse: true,
          explication: "Vrai : 1 m³ = 1 000 l, et 1 l d'eau pèse 1 kg, donc 1 m³ d'eau pèse 1 000 kg = 1 t.",
        },
        {
          type: "saisie",
          question: "Calcule le volume, en m³, d'un cylindre de 1 m de rayon et 3 m de hauteur (prends 3,14).",
          reponses: ["9,42"],
          explication: "V = r × r × 3,14 × h = 1 × 1 × 3,14 × 3 = 9,42 m³.",
        },
        {
          type: "saisie",
          question: "Un bidon contient 10 litres d'huile. Un litre d'huile pèse 0,92 kg. Quelle est la masse de l'huile, en kg ?",
          reponses: ["9,2"],
          explication: "Masse = volume × masse volumique = 10 × 0,92 = 9,2 kg.",
        },
        {
          type: "qcm",
          question: "Un bloc de fer de 2 dm³ pèse 15,6 kg. Quelle est la masse volumique du fer ?",
          choix: ["31,2 kg par dm³", "13,6 kg par dm³", "0,78 kg par dm³", "7,8 kg par dm³"],
          reponse: 3,
          explication: "Masse volumique = masse ÷ volume = 15,6 ÷ 2 = 7,8 kg par dm³.",
        },
        {
          type: "saisie",
          question: "Un bassin a la forme d'un pavé droit de 3 m sur 2 m sur 1,2 m. Combien de **litres** d'eau peut-il contenir ?",
          reponses: ["7 200"],
          explication: "V = 3 × 2 × 1,2 = 7,2 m³. 1 m³ = 1 000 l, donc 7,2 m³ = 7 200 litres.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : le village d'Ousmane, dans la région de Louga, a un réservoir d'eau cylindrique de 2 m de rayon et 5 m de hauteur. Le village consomme 15 700 litres d'eau par jour.

*Consigne* : pose les opérations (prends 3,14) et calcule :
1) le volume du réservoir en m³, puis sa capacité en litres ;
2) la masse de l'eau quand le réservoir est plein, en tonnes ;
3) pendant combien de jours un réservoir plein suffit au village.`,
          corrige: `1) V = r × r × 3,14 × h = 2 × 2 × 3,14 × 5.
~~~
   2 × 2 = 4
   4 × 3,14 = 12,56
   12,56 × 5 = 62,8
~~~
V = **62,8 m³** = 62,8 × 1 000 = **62 800 litres**.

2) 1 l d'eau pèse 1 kg : 62 800 kg = **62,8 tonnes**.

3) 62 800 ÷ 15 700 :
~~~
  6 2 8 0 0 | 15 700
− 6 2 8 0 0 |-------
          0 | 4
~~~
Le réservoir plein suffit pour **4 jours**. Vérification : 4 × 15 700 = 62 800.`,
        },
      ],
    },

    // ───────────────────────── 16. Durées, mouvement uniforme, débit
    {
      id: "durees-vitesse-debit",
      titre: "Durées, mouvement uniforme et débit",
      theme: "Activités de mesure",
      cours: `
## Les unités de durée
1 jour = 24 h ; 1 h = 60 min ; 1 min = 60 s. 1 an = 12 mois = 365 jours (366 les années bissextiles).
2 h 15 min = 2 × 60 + 15 = **135 min**.

## Opérations sur les durées
On calcule à part les heures et les minutes, puis on **convertit** quand on dépasse 60.

Addition :
~~~
      2 h 45 min
   +  1 h 30 min
   -------------
      3 h 75 min  =  4 h 15 min   (75 min = 1 h 15 min)
~~~

Soustraction : 10 min est trop petit pour enlever 35 min ; on transforme 1 h en 60 min (5 h 10 min = 4 h 70 min).
~~~
      4 h 70 min
   −  2 h 35 min
   -------------
      2 h 35 min
~~~

- Multiplication : 3 × (1 h 25 min) = 3 h 75 min = **4 h 15 min**.
- Division : (7 h 30 min) ÷ 3 = 450 min ÷ 3 = 150 min = **2 h 30 min**.
- Heure d'arrivée = heure de départ + durée du trajet.

## Le mouvement uniforme
Un véhicule a un **mouvement uniforme** quand il roule toujours à la même vitesse.
- **Distance = vitesse × durée** : à 80 km/h pendant 3 h, on parcourt 80 × 3 = **240 km**.
- **Vitesse = distance ÷ durée** : 150 km en 2 h → **75 km/h**.
- **Durée = distance ÷ vitesse** : 210 km à 70 km/h → **3 h**.

>! **Exemple** : un car quitte Dakar à 7 h 15 et roule 240 km à 80 km/h. Durée : 240 ÷ 80 = 3 h. Arrivée : 7 h 15 + 3 h = **10 h 15**.

## La représentation graphique
On met la **durée** sur l'axe horizontal et la **distance** sur l'axe vertical. Pour un mouvement uniforme, les points sont **alignés sur une droite qui part de 0** (la distance est proportionnelle à la durée).

| Durée (h) | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Distance (km) | 0 | 80 | 160 | 240 |

## Le débit
Le **débit** est le volume d'eau (ou de liquide) qui s'écoule **en une unité de temps** (par minute, par heure).
- **Volume = débit × durée** : un robinet de 12 l par min coule 8 min → 96 l.
- **Durée = volume ÷ débit** : remplir un fût de 240 l avec ce robinet → 240 ÷ 12 = **20 min**.
- **Débit = volume ÷ durée**.

> **À retenir**
> - 1 h = 60 min : on convertit quand les minutes dépassent 60.
> - Distance = vitesse × durée ; vitesse = distance ÷ durée ; durée = distance ÷ vitesse.
> - Volume = débit × durée.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 2 h 15 min en minutes.",
          reponses: ["135"],
          explication: "2 h = 2 × 60 = 120 min ; 120 + 15 = 135 min.",
        },
        {
          type: "qcm",
          question: "Combien fait **1 h 40 min + 2 h 35 min** ?",
          choix: ["3 h 55 min", "3 h 15 min", "4 h 75 min", "4 h 15 min"],
          reponse: 3,
          explication: "1 h + 2 h = 3 h ; 40 min + 35 min = 75 min = 1 h 15 min. Total : 4 h 15 min. « 4 h 75 min » n'est pas une écriture correcte (75 min dépasse 60 min) : il faut convertir. 3 h 55 min, c'est si on oublie 1 h.",
        },
        {
          type: "saisie",
          question: "Un car part de Thiès à 8 h 45 et roule pendant 2 h 30 min. À quelle heure arrive-t-il ?",
          reponses: ["11 h 15", "11 h 15 min", "11h15", "11h 15", "11 heures 15", "11 heures 15 minutes", "11h15min", "11 h 15 minutes"],
          explication: "8 h 45 + 2 h 30 = 10 h 75 = 11 h 15 (75 min = 1 h 15 min).",
        },
        {
          type: "saisie",
          question: "Une voiture parcourt 150 km en 2 h à vitesse constante. Quelle est sa vitesse, en km/h ?",
          reponses: ["75"],
          explication: "Vitesse = distance ÷ durée = 150 ÷ 2 = 75 km/h.",
        },
        {
          type: "saisie",
          question: "Un camion roule à 45 km/h pendant 3 h. Quelle distance parcourt-il, en km ?",
          reponses: ["135", "135 kilomètres"],
          explication: "Distance = vitesse × durée = 45 × 3 = 135 km.",
        },
        {
          type: "vf",
          question: "À 60 km/h, on parcourt 1 km par minute.",
          reponse: true,
          explication: "Vrai : 60 km en 60 minutes, donc 1 km en 1 minute.",
        },
        {
          type: "saisie",
          question: "Un car roule à 70 km/h. Combien d'heures lui faut-il pour parcourir 210 km ?",
          reponses: ["3"],
          explication: "Durée = distance ÷ vitesse = 210 ÷ 70 = 3 h.",
        },
        {
          type: "saisie",
          question: "Une pompe a un débit de 15 litres par minute. Combien de litres donne-t-elle en 8 minutes ?",
          reponses: ["120"],
          explication: "Volume = débit × durée = 15 × 8 = 120 litres.",
        },
        {
          type: "qcm",
          question: "Sur le graphique d'un mouvement uniforme (durée en bas, distance à gauche), comment sont les points ?",
          choix: ["sur une droite qui part de 0", "dispersés au hasard", "sur une ligne horizontale", "sur un cercle"],
          reponse: 0,
          explication: "La distance est proportionnelle à la durée : les points sont alignés sur une droite qui passe par 0 (à 0 h, on a parcouru 0 km).",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : Ousmane et son père quittent Dakar à 6 h 30 pour aller à Saint-Louis, à 264 km. Le car roule à la vitesse constante de 66 km/h et fait une pause de 20 min en route. Arrivé, le père remplit une citerne de 1 800 litres avec une pompe qui a un débit de 30 litres par minute.

*Consigne* : pose les opérations et calcule :
1) la durée du trajet sans la pause ;
2) l'heure d'arrivée à Saint-Louis ;
3) la durée du remplissage de la citerne.`,
          corrige: `1) Durée = distance ÷ vitesse :
~~~
  2 6 4 | 66
− 2 6 4 |----
      0 | 4
~~~
Le car roule pendant **4 h**.

2) Durée totale : 4 h + 20 min = 4 h 20 min.
~~~
      6 h 30 min
   +  4 h 20 min
   -------------
     10 h 50 min
~~~
Ils arrivent à **10 h 50**.

3) Durée = volume ÷ débit = 1 800 ÷ 30 = **60 min**, soit **1 heure**.`,
        },
      ],
    },

    // ───────────────────────── 17. Budget familial, prix, bénéfice, perte
    {
      id: "budget-prix-benefice",
      titre: "Budget familial, prix d'achat, prix de vente, bénéfice et perte",
      theme: "Activités de mesure",
      cours: `
## Le budget familial
Le **budget** d'une famille compare :
- les **recettes** (l'argent qui entre : salaire, vente de la récolte…) ;
- les **dépenses** (nourriture, loyer, eau, électricité, transport, école…).

Si recettes > dépenses, la famille fait des **économies** (épargne) : économies = recettes − dépenses.
Si dépenses > recettes, le budget est en **déficit** : déficit = dépenses − recettes.

## Les prix du commerçant
- **Prix d'achat (PA)** : ce que le commerçant paie pour la marchandise.
- **Frais** : transport, manutention, taxes, glace…
- **Prix de revient (PR)** = prix d'achat + frais.
- **Prix de vente (PV)** : ce que paie le client.
- **Bénéfice** = prix de vente − prix de revient (quand PV > PR).
- **Perte** = prix de revient − prix de vente (quand PV < PR).

>! **Exemple** : un commerçant achète 50 sacs de riz à 14 500 F le sac : PA = 50 × 14 500 = 725 000 F. Transport : 25 000 F. PR = 725 000 + 25 000 = **750 000 F**. Il vend chaque sac 16 500 F : PV = 50 × 16 500 = 825 000 F. Bénéfice = 825 000 − 750 000 = **75 000 F**.

## Le pourcentage dans le commerce
- **Bénéfice de 20 % du prix d'achat** : sur un article acheté 15 000 F, le bénéfice est 15 000 × 20 ÷ 100 = 3 000 F ; PV = 15 000 + 3 000 = **18 000 F**.
- **Remise** (ou rabais) **de 10 %** sur un article de 12 500 F : remise = 1 250 F ; prix payé = 12 500 − 1 250 = **11 250 F**.
- Bénéfice en pourcentage : (bénéfice ÷ prix de référence) × 100, le prix de référence étant le prix d'achat ou le prix de revient (l'énoncé le dit). Dans l'exemple du riz : 75 000 ÷ 750 000 × 100 = **10 %** du prix de revient.

> **À retenir**
> - Économies = recettes − dépenses.
> - PR = PA + frais ; bénéfice = PV − PR ; perte = PR − PV.
> - a % d'un prix : prix × a ÷ 100 ; une remise se soustrait.
`,
      exercices: [
        {
          type: "qcm",
          question: "Comment calcule-t-on le **prix de revient** ?",
          choix: ["prix de vente + bénéfice", "prix de vente + frais", "prix d'achat − frais", "prix d'achat + frais"],
          reponse: 3,
          explication: "Le prix de revient, c'est ce que la marchandise a coûté en tout au commerçant : prix d'achat + frais (transport, etc.).",
        },
        {
          type: "saisie",
          question: "Un vendeur achète un mouton 85 000 F CFA. Il paie 5 000 F de transport. Quel est le prix de revient du mouton ?",
          reponses: ["90 000", "90 000 F", "90 000 F CFA", "90 000 francs"],
          explication: "PR = PA + frais = 85 000 + 5 000 = 90 000 F.",
        },
        {
          type: "saisie",
          question: "Un article a un prix de revient de 25 000 F et un prix de vente de 30 000 F. Quel est le bénéfice ?",
          reponses: ["5 000", "5 000 F", "5 000 F CFA", "5 000 francs"],
          explication: "Bénéfice = PV − PR = 30 000 − 25 000 = 5 000 F.",
        },
        {
          type: "vf",
          question: "Quand le prix de vente est plus petit que le prix de revient, le commerçant fait une perte.",
          reponse: true,
          explication: "Vrai : il a dépensé plus qu'il ne récupère. Perte = PR − PV.",
        },
        {
          type: "saisie",
          question: "Une marchande a un prix de revient de 8 500 F et vend sa marchandise 7 000 F. Quelle est sa perte ?",
          reponses: ["1 500", "1 500 F", "1 500 F CFA", "1 500 francs"],
          explication: "Perte = PR − PV = 8 500 − 7 000 = 1 500 F.",
        },
        {
          type: "saisie",
          question: "Un commerçant achète une radio 15 000 F. Il veut faire un bénéfice de 20 % du prix d'achat. À quel prix doit-il la vendre ?",
          reponses: ["18 000", "18 000 F", "18 000 F CFA", "18 000 francs"],
          explication: "Bénéfice : 15 000 × 20 ÷ 100 = 3 000 F. Prix de vente : 15 000 + 3 000 = 18 000 F.",
        },
        {
          type: "qcm",
          question: "Une boutique fait une remise de 10 % sur un pagne de 12 500 F. Combien paie-t-on ?",
          choix: ["11 250 F", "1 250 F", "12 490 F", "13 750 F"],
          reponse: 0,
          explication: "Remise : 12 500 × 10 ÷ 100 = 1 250 F. Prix payé : 12 500 − 1 250 = 11 250 F. 13 750 F, c'est si on ajoutait au lieu de retirer.",
        },
        {
          type: "saisie",
          question: "Une famille a 150 000 F de recettes par mois et dépense 128 500 F. Combien économise-t-elle par mois ?",
          reponses: ["21 500", "21 500 F", "21 500 F CFA", "21 500 francs"],
          explication: "Économies = recettes − dépenses = 150 000 − 128 500 = 21 500 F.",
        },
        {
          type: "vf",
          question: "Si les dépenses d'une famille sont plus grandes que ses recettes, son budget est en déficit.",
          reponse: true,
          explication: "Vrai : il manque de l'argent. Déficit = dépenses − recettes.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : Mamadou est mareyeur (il achète du poisson aux pêcheurs pour le revendre au marché). Au quai de pêche de Joal, il achète 40 kg de poisson à 1 200 F CFA le kilogramme. Il paie 6 000 F de transport et 2 000 F de glace. Au marché de Kaolack, il vend 35 kg à 1 800 F le kilogramme et, en fin de journée, les 5 kg restants à 1 000 F le kilogramme.

*Consigne* : pose les opérations et calcule :
1) le prix d'achat et le prix de revient ;
2) le prix de vente total ;
3) le bénéfice ou la perte de Mamadou ;
4) ce bénéfice (ou cette perte) en pourcentage du prix d'achat.`,
          corrige: `1) Prix d'achat : 40 × 1 200 = **48 000 F**.
Frais : 6 000 + 2 000 = 8 000 F.
Prix de revient : 48 000 + 8 000 = **56 000 F**.

2) Ventes :
~~~
   35 × 1 800 = 63 000 F
    5 × 1 000 =  5 000 F
   63 000 + 5 000 = 68 000 F
~~~
Prix de vente total : **68 000 F**.

3) PV > PR : c'est un **bénéfice**. 68 000 − 56 000 = **12 000 F**.

4) 12 000 ÷ 48 000 × 100 = 0,25 × 100 = **25 %** du prix d'achat.
Vérification : 25 % de 48 000 = 48 000 × 25 ÷ 100 = 12 000 F.`,
        },
      ],
    },

    // ───────────────────────── 18. Intérêts
    {
      id: "interets",
      titre: "Intérêt, capital, taux et durée de placement",
      theme: "Activités de mesure",
      cours: `
## Le vocabulaire
Quand on place de l'argent à la banque ou à la caisse d'épargne :
- le **capital** (C) est la somme placée ;
- le **taux** (t) est l'intérêt rapporté par **100 F en un an** : un taux de 5 % veut dire que 100 F rapportent 5 F par an ;
- la **durée** de placement (en années, en mois ou en jours) ;
- l'**intérêt** (I) est l'argent gagné ;
- la **valeur acquise** = ce que tu retrouves à la fin : le capital + l'intérêt.

## Calculer l'intérêt
Idée simple : on calcule d'abord l'intérêt d'**un an**, puis on adapte à la durée (la moitié pour 6 mois…). Les formules ci-dessous font ce calcul d'un seul coup.

| Durée | Formule |
|---|---|
| en **années** (n) | I = C × t × n ÷ 100 |
| en **mois** (m) | I = C × t × m ÷ 1 200 |
| en **jours** (j) | I = C × t × j ÷ 36 000 |

(1 200 = 100 × 12 mois ; 36 000 = 100 × 360 jours : en banque, on compte une année de 360 jours.)

Exemples :
- 200 000 F à 5 % pendant 3 ans : I = 200 000 × 5 × 3 ÷ 100 = **30 000 F** ; valeur acquise : 230 000 F.
- 150 000 F à 6 % pendant 8 mois : I = 150 000 × 6 × 8 ÷ 1 200 = **6 000 F**.
- 90 000 F à 4 % pendant 45 jours : I = 90 000 × 4 × 45 ÷ 36 000 = **450 F**.

## Retrouver le capital, le taux ou la durée
On part de l'intérêt d'**un an** :
- **Capital** : un capital placé à 6 % rapporte 9 000 F en un an. 6 F pour 100 F → 9 000 ÷ 6 × 100 = **150 000 F**. (C = I × 100 ÷ (t × n))
- **Taux** : 80 000 F rapportent 4 000 F en un an. Pour 100 F : 4 000 ÷ 80 000 × 100 = **5 %**. (t = I × 100 ÷ (C × n))
- **Durée** : 300 000 F à 5 % rapportent 15 000 F par an ; pour 45 000 F, il faut 45 000 ÷ 15 000 = **3 ans**.

>! **Durée mixte** : 2 ans 6 mois = 30 mois. On utilise la formule des mois.

> **À retenir**
> - Taux t % : 100 F rapportent t F en un an.
> - I = C × t × n ÷ 100 (années) ; ÷ 1 200 (mois) ; ÷ 36 000 (jours).
> - Valeur acquise = capital + intérêt.
`,
      exercices: [
        {
          type: "qcm",
          question: "Que signifie « un taux de 5 % par an » ?",
          choix: ["100 F rapportent 5 F en un an", "5 F rapportent 100 F", "on paie 5 F par mois", "le capital est multiplié par 5"],
          reponse: 0,
          explication: "Le taux est l'intérêt rapporté par 100 F placés pendant un an : 5 % → 5 F d'intérêt pour 100 F en un an.",
        },
        {
          type: "saisie",
          question: "Calcule l'intérêt rapporté par 100 000 F placés à 6 % pendant 1 an.",
          reponses: ["6 000", "6 000 F", "6 000 F CFA", "6 000 francs"],
          explication: "I = 100 000 × 6 × 1 ÷ 100 = 6 000 F.",
        },
        {
          type: "saisie",
          question: "Calcule l'intérêt rapporté par 250 000 F placés à 4 % pendant 2 ans.",
          reponses: ["20 000", "20 000 F", "20 000 F CFA", "20 000 francs"],
          explication: "I = 250 000 × 4 × 2 ÷ 100 = 2 000 000 ÷ 100 = 20 000 F.",
        },
        {
          type: "saisie",
          question: "250 000 F placés pendant 2 ans ont rapporté 20 000 F d'intérêt. Quelle est la **valeur acquise** ?",
          reponses: ["270 000", "270 000 F", "270 000 F CFA", "270 000 francs"],
          explication: "Valeur acquise = capital + intérêt = 250 000 + 20 000 = 270 000 F.",
        },
        {
          type: "saisie",
          question: "Calcule l'intérêt rapporté par 120 000 F placés à 5 % pendant 6 mois.",
          reponses: ["3 000", "3 000 F", "3 000 F CFA", "3 000 francs"],
          explication: "I = 120 000 × 5 × 6 ÷ 1 200 = 3 600 000 ÷ 1 200 = 3 000 F. (En 1 an : 6 000 F ; en 6 mois, la moitié.)",
        },
        {
          type: "vf",
          question: "72 000 F placés à 5 % pendant 30 jours rapportent 300 F.",
          reponse: true,
          explication: "Vrai : I = 72 000 × 5 × 30 ÷ 36 000 = 10 800 000 ÷ 36 000 = 300 F.",
        },
        {
          type: "saisie",
          question: "Un capital de 80 000 F rapporte 4 000 F en un an. Quel est le taux (en %) ?",
          reponses: ["5", "5 %"],
          explication: "Pour 100 F : 4 000 × 100 ÷ 80 000 = 5 F. Le taux est 5 %.",
        },
        {
          type: "saisie",
          question: "Un capital placé à 6 % rapporte 9 000 F d'intérêt en un an. Quel est ce capital ?",
          reponses: ["150 000", "150 000 F", "150 000 F CFA", "150 000 francs"],
          explication: "6 F d'intérêt pour 100 F placés. 9 000 ÷ 6 = 1 500 ; 1 500 × 100 = 150 000 F. Vérification : 150 000 × 6 ÷ 100 = 9 000 F.",
        },
        {
          type: "qcm",
          question: "300 000 F placés à 5 % ont rapporté 45 000 F. Pendant combien de temps ont-ils été placés ?",
          choix: ["2 ans", "3 ans", "15 ans", "6 mois"],
          reponse: 1,
          explication: "En un an : 300 000 × 5 ÷ 100 = 15 000 F. 45 000 ÷ 15 000 = 3 ans.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : la maman d'Awa est couturière à Ziguinchor. Elle place 360 000 F CFA à la caisse d'épargne, au taux de 5 % par an, pendant 2 ans et 6 mois. Avec la valeur acquise, elle veut acheter une machine à coudre qui coûte 420 000 F.

*Consigne* : pose les opérations et calcule :
1) la durée du placement en mois ;
2) l'intérêt obtenu ;
3) la valeur acquise ;
4) si elle peut acheter la machine. Sinon, combien lui manque-t-il ?`,
          corrige: `1) 2 ans 6 mois = 2 × 12 + 6 = **30 mois**.

2) I = C × t × m ÷ 1 200 = 360 000 × 5 × 30 ÷ 1 200.
~~~
   360 000 × 5 = 1 800 000
   1 800 000 × 30 = 54 000 000
   54 000 000 ÷ 1 200 = 45 000
~~~
L'intérêt est de **45 000 F**.
(Autre méthode : en 1 an, 360 000 × 5 ÷ 100 = 18 000 F ; en 2 ans et demi : 18 000 × 2,5 = 45 000 F.)

3) Valeur acquise : 360 000 + 45 000 = **405 000 F**.

4) 405 000 < 420 000 : **non**, elle ne peut pas encore l'acheter. Il lui manque 420 000 − 405 000 = **15 000 F**.`,
        },
      ],
    },

    // ───────────────────────── 19. Partages et moyenne
    {
      id: "partages-moyenne",
      titre: "Parts égales, parts inégales, partages proportionnels et moyenne",
      theme: "Activités de mesure",
      cours: `
## Parts égales
On divise la somme par le nombre de parts : 4 enfants partagent 18 000 F → 18 000 ÷ 4 = **4 500 F** chacun.

## Parts inégales : la somme et la différence
Moussa et Fatou ont ensemble 50 000 F. Moussa a 8 000 F de plus que Fatou.

~~~
  Fatou  : |----------|
  Moussa : |----------|--8 000--|
           <------ 50 000 F ------>
~~~
- Sans la différence : 50 000 − 8 000 = 42 000 F = 2 parts égales.
- Petite part (Fatou) : 42 000 ÷ 2 = **21 000 F**.
- Grande part (Moussa) : 21 000 + 8 000 = **29 000 F**.
Vérification : 21 000 + 29 000 = 50 000.

## Parts inégales : le double, le triple
Moussa a le double de Fatou ; ensemble ils ont 36 000 F. Fatou a 1 part, Moussa 2 parts : 3 parts en tout.
1 part = 36 000 ÷ 3 = 12 000 F. Fatou : **12 000 F** ; Moussa : **24 000 F**.

## Les partages proportionnels
Partager « proportionnellement », c'est donner plus à celui qui a apporté plus ou travaillé plus : chacun reçoit autant de **parts** que son nombre. Trois associés partagent un bénéfice de 120 000 F **proportionnellement** à leurs apports : 2, 3 et 5 parts.
- Nombre total de parts : 2 + 3 + 5 = 10.
- Valeur d'une part : 120 000 ÷ 10 = 12 000 F.
- Parts : 2 × 12 000 = **24 000 F** ; 3 × 12 000 = **36 000 F** ; 5 × 12 000 = **60 000 F**.
Vérification : 24 000 + 36 000 + 60 000 = 120 000.

## La moyenne
**Moyenne = somme des valeurs ÷ nombre de valeurs.**
Notes d'Awa sur 10 : 6 ; 7,5 ; 8 ; 5,5. Somme : 27. Moyenne : 27 ÷ 4 = **6,75**.

>! **Note manquante** : pour avoir 7,5 de moyenne en 4 devoirs, il faut 7,5 × 4 = 30 points en tout. Si les 3 premières notes font 21, la 4e doit être 30 − 21 = **9**.

> **À retenir**
> - Parts égales : somme ÷ nombre de parts.
> - Somme et différence : petite part = (somme − différence) ÷ 2.
> - Partage proportionnel : on compte toutes les parts, on cherche la valeur d'une part, puis on multiplie.
> - Moyenne = somme ÷ nombre de valeurs.
`,
      exercices: [
        {
          type: "saisie",
          question: "4 enfants se partagent également 18 000 F CFA. Combien reçoit chacun ?",
          reponses: ["4 500", "4 500 F", "4 500 F CFA", "4 500 francs"],
          explication: "18 000 ÷ 4 = 4 500 F.",
        },
        {
          type: "saisie",
          question: "Deux nombres ont pour somme 100 et pour différence 20. Quel est le plus grand ?",
          reponses: ["60"],
          explication: "Petit nombre : (100 − 20) ÷ 2 = 40. Grand nombre : 40 + 20 = 60. Vérification : 40 + 60 = 100 et 60 − 40 = 20.",
        },
        {
          type: "qcm",
          question: "Moussa a le double de l'argent de Fatou. Ensemble, ils ont 36 000 F. Combien a Fatou ?",
          choix: ["18 000 F", "24 000 F", "12 000 F", "9 000 F"],
          reponse: 2,
          explication: "Fatou : 1 part, Moussa : 2 parts, soit 3 parts. 36 000 ÷ 3 = 12 000 F pour Fatou (et 24 000 F pour Moussa). 18 000 F serait un partage égal.",
        },
        {
          type: "saisie",
          question: "On partage 60 000 F proportionnellement aux nombres 2 et 3. Quelle est la plus grande part ?",
          reponses: ["36 000", "36 000 F", "36 000 F CFA", "36 000 francs"],
          explication: "2 + 3 = 5 parts ; 1 part = 60 000 ÷ 5 = 12 000 F. Plus grande part : 3 × 12 000 = 36 000 F (l'autre : 24 000 F).",
        },
        {
          type: "vf",
          question: "La moyenne de 4, 6 et 8 est 6.",
          reponse: true,
          explication: "Vrai : (4 + 6 + 8) ÷ 3 = 18 ÷ 3 = 6.",
        },
        {
          type: "saisie",
          question: "Calcule la moyenne de 12 ; 15 ; 9 et 14.",
          reponses: ["12,5"],
          explication: "Somme : 12 + 15 + 9 + 14 = 50. Moyenne : 50 ÷ 4 = 12,5.",
        },
        {
          type: "saisie",
          question: "Awa a eu 7, 8 et 6 (sur 10) à trois devoirs. Quelle note doit-elle avoir au 4e devoir pour avoir 7,5 de moyenne ?",
          reponses: ["9"],
          explication: "Total nécessaire : 7,5 × 4 = 30. Elle a déjà 7 + 8 + 6 = 21. Il lui faut 30 − 21 = 9.",
        },
        {
          type: "qcm",
          question: "Trois pêcheurs de Kayar partagent 240 kg de poisson proportionnellement à leurs jours de travail : 3, 4 et 5 jours. Combien reçoit celui qui a travaillé 4 jours ?",
          choix: ["60 kg", "80 kg", "100 kg", "96 kg"],
          reponse: 1,
          explication: "3 + 4 + 5 = 12 jours. Pour 1 jour : 240 ÷ 12 = 20 kg. Pour 4 jours : 4 × 20 = 80 kg. (Les autres : 60 kg et 100 kg.)",
        },
        {
          type: "saisie",
          question: "À Kaolack, il est tombé (nombres fictifs) 120 mm de pluie en juillet, 210 mm en août, 180 mm en septembre et 90 mm en octobre. Quelle est la moyenne mensuelle, en mm ?",
          reponses: ["150"],
          explication: "Somme : 120 + 210 + 180 + 90 = 600 mm. Moyenne : 600 ÷ 4 = 150 mm par mois.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : un groupement de femmes de Thiès transforme et vend du jus de bissap. Cette année, le bénéfice est de 450 000 F CFA. On met d'abord 50 000 F dans la caisse du groupement. Le reste est partagé entre Awa, Fatou et Aïssatou, proportionnellement à leurs jours de travail : Awa 20 jours, Fatou 25 jours, Aïssatou 35 jours.

*Consigne* : pose les opérations et calcule :
1) la somme à partager entre les trois femmes ;
2) la part de chacune ;
3) le nombre moyen de jours de travail par femme (arrondi au dixième).`,
          corrige: `1) 450 000 − 50 000 = **400 000 F** à partager.

2) Nombre total de jours : 20 + 25 + 35 = 80 jours.
Pour un jour : 400 000 ÷ 80 = 5 000 F.
~~~
   Awa      : 20 × 5 000 = 100 000 F
   Fatou    : 25 × 5 000 = 125 000 F
   Aïssatou : 35 × 5 000 = 175 000 F
~~~
Vérification : 100 000 + 125 000 + 175 000 = 400 000 F.

3) Moyenne : 80 ÷ 3 = 26,66… ≈ **26,7 jours** par femme.`,
        },
      ],
    },

    // ───────────────────────── 20. Résoudre un problème
    {
      id: "resolution-problemes",
      titre: "Résoudre un problème et rédiger la solution",
      theme: "Résolution de problèmes",
      cours: `
## 1. Lire et comprendre
- Lis l'énoncé **deux fois**. Repère la **question finale**.
- Trie les **données** : **utiles** (on en a besoin), **inutiles** (l'âge de Moussa ne sert pas à calculer un prix), **manquantes** (il manque une information pour répondre).
- Fais un **schéma** ou un **tableau** si cela t'aide.

## 2. Chercher les questions intermédiaires
Souvent, on ne peut pas répondre tout de suite à la question finale. On se pose des **questions intermédiaires**.
Exemple : « Fatou achète 3 cahiers à 250 F et un stylo à 150 F. Elle paie avec 1 000 F. Combien lui rend-on ? »
- Question intermédiaire 1 : combien coûtent les cahiers ? 3 × 250 = 750 F.
- Question intermédiaire 2 : combien coûtent tous les achats ? 750 + 150 = 900 F.
- Question finale : combien lui rend-on ? 1 000 − 900 = **100 F**.

## 3. Deux démarches
- **Démarche progressive** : on part des **données** et on avance, étape par étape, vers la question.
- **Démarche régressive** : on part du **résultat final** et on remonte, en faisant les **opérations inverses** (+ devient −, × devient ÷).
Exemple : « Awa pense à un nombre. Elle ajoute 15, multiplie par 2 et trouve 50. » On remonte : 50 ÷ 2 = 25 ; 25 − 15 = **10**.

## 4. Les factures
Une **facture** donne, pour chaque article : la quantité, le **prix unitaire** et le **montant** (quantité × prix unitaire). Puis le **total**.

| Article | Quantité | Prix unitaire | Montant |
|---|---|---|---|
| Riz (kg) | 5 | 450 F | 2 250 F |
| Sucre (kg) | 2 | 650 F | 1 300 F |
| **Total** | | | **3 550 F** |

## 5. Vérifier et rédiger
- **Vérifie** : le résultat est-il possible (ordre de grandeur) ? Fais la preuve (+ ↔ −, × ↔ ÷).
- **Rédige** : pour chaque étape, une phrase, l'opération posée, puis une **phrase-réponse** avec l'unité (« On lui rend 100 F. »).

## 6. Trouver l'erreur, inventer un énoncé
- Pour trouver l'erreur dans une solution, refais chaque calcul et vérifie que chaque opération répond bien à la question.
- On peut aussi **inventer un énoncé** à partir d'une solution : 3 × 1 500 = 4 500 ; 10 000 − 4 500 = 5 500 → « J'achète 3 poulets à 1 500 F et je paie avec 10 000 F. Combien me rend-on ? »

> **À retenir**
> - Données utiles, inutiles, manquantes.
> - Questions intermédiaires avant la question finale.
> - Progressive : des données vers la question ; régressive : on remonte avec les opérations inverses.
> - Montant = quantité × prix unitaire.
> - Toujours : opérations posées, vérification et phrase-réponse.
`,
      exercices: [
        {
          type: "qcm",
          question: "« Moussa a 11 ans. Il achète 3 cahiers à 250 F l'un. Combien paie-t-il ? » Quelle donnée est **inutile** ?",
          choix: ["3 cahiers", "250 F", "11 ans", "aucune"],
          reponse: 2,
          explication: "L'âge de Moussa ne sert pas à calculer le prix. On calcule seulement 3 × 250 = 750 F.",
        },
        {
          type: "vf",
          question: "« Fatou achète des mangues à 150 F la mangue. Combien paie-t-elle ? » Il manque une donnée pour répondre.",
          reponse: true,
          explication: "Vrai : on ne sait pas combien de mangues elle achète. Le nombre de mangues est une donnée manquante.",
        },
        {
          type: "saisie",
          question: "Sur une facture : 4 kg de sucre à 650 F le kg. Quel est le montant de cette ligne ?",
          reponses: ["2 600", "2 600 F", "2 600 F CFA", "2 600 francs"],
          explication: "Montant = quantité × prix unitaire = 4 × 650 = 2 600 F.",
        },
        {
          type: "qcm",
          question: "Awa pense à un nombre. Elle lui ajoute 15, puis multiplie le résultat par 2. Elle trouve 50. Quel est son nombre ?",
          choix: ["35", "20", "10", "17,5"],
          reponse: 2,
          explication: "Démarche régressive : on remonte avec les opérations inverses. 50 ÷ 2 = 25, puis 25 − 15 = 10. Vérification : (10 + 15) × 2 = 50.",
        },
        {
          type: "saisie",
          question: "Moussa dépense 1 500 F au marché, puis sa tante lui donne 2 000 F. Il a maintenant 4 500 F. Combien avait-il au départ ?",
          reponses: ["4 000", "4 000 F", "4 000 F CFA", "4 000 francs"],
          explication: "On remonte : avant le cadeau, il avait 4 500 − 2 000 = 2 500 F ; avant la dépense, 2 500 + 1 500 = 4 000 F. Vérification : 4 000 − 1 500 + 2 000 = 4 500 F.",
        },
        {
          type: "vf",
          question: "Un élève a résolu : « Fatou achète 3 pots de lait à 1 250 F et paie avec 5 000 F ». Il a écrit : 3 × 1 250 = 3 750 ; 5 000 − 3 750 = 1 350. Sa réponse finale est juste.",
          reponse: false,
          explication: "Faux : la première opération est juste, mais la soustraction est fausse. 5 000 − 3 750 = 1 250 F. Preuve : 1 250 + 3 750 = 5 000.",
        },
        {
          type: "qcm",
          question: "« Ousmane achète 2 kg de viande à 4 000 F le kg et 3 kg d'oignons à 500 F le kg. Il paie avec 10 000 F. Combien lui rend-on ? » Parmi ces questions, laquelle est une **question intermédiaire utile** (et non la question finale) ?",
          choix: ["Combien lui rend-on ?", "Combien coûte la viande ?", "Combien pèse le panier ?", "Quel âge a Ousmane ?"],
          reponse: 1,
          explication: "Avant la question finale (« Combien lui rend-on ? »), il faut calculer le prix de chaque achat, par exemple celui de la viande : 2 × 4 000 = 8 000 F. Le poids du panier et l'âge d'Ousmane ne servent à rien ici.",
        },
        {
          type: "saisie",
          question: "Un boulanger de Rufisque vend 120 pains lundi, 95 mardi et 130 mercredi. Combien de pains a-t-il vendus en tout ?",
          reponses: ["345"],
          explication: "120 + 95 + 130 = 345 pains.",
        },
        {
          type: "qcm",
          question: "Pour **vérifier** le calcul 4 520 − 1 875 = 2 645, quelle opération fais-tu ?",
          choix: ["4 520 + 1 875", "2 645 + 1 875", "2 645 − 1 875", "4 520 − 2 645 − 1 875"],
          reponse: 1,
          explication: "Preuve de la soustraction : résultat + nombre retiré = grand nombre. 2 645 + 1 875 = 4 520 : c'est juste.",
        },
        {
          type: "redaction",
          question: `**Situation d'intégration**

*Contexte* : Mme Diop tient une boutique à Mbour. Aïssatou achète pour sa mère : 5 kg de riz à 450 F le kg, 2 litres d'huile à 1 300 F le litre, 3 boîtes de lait à 850 F la boîte et 1 savon à 400 F. Elle paie avec un billet de 10 000 F.

*Consigne* :
1) Établis la facture (article, quantité, prix unitaire, montant, total).
2) Calcule la monnaie que Mme Diop rend à Aïssatou.
3) Vérifie ton résultat.`,
          corrige: `1) Facture :

| Article | Quantité | Prix unitaire | Montant |
|---|---|---|---|
| Riz | 5 kg | 450 F | 2 250 F |
| Huile | 2 l | 1 300 F | 2 600 F |
| Lait | 3 boîtes | 850 F | 2 550 F |
| Savon | 1 | 400 F | 400 F |
| **Total** | | | **7 800 F** |

~~~
    2 250
  + 2 600
  + 2 550
  +   400
  -------
    7 800
~~~

2) Monnaie : 10 000 − 7 800 = **2 200 F**. Mme Diop rend 2 200 F à Aïssatou.

3) Vérification : 7 800 + 2 200 = 10 000 F. C'est juste.`,
        },
        {
          type: "redaction",
          question: "Invente un énoncé de problème dont la solution est :\n3 × 1 500 = 4 500\n10 000 − 4 500 = 5 500\nRédige ensuite la solution complète avec des phrases.",
          corrige: `Exemple d'énoncé : « Mamadou achète 3 poulets à 1 500 F l'un au marché de Thiès. Il paie avec un billet de 10 000 F. Combien le vendeur lui rend-il ? »

Solution :
- Prix des 3 poulets : 3 × 1 500 = 4 500 F. Les poulets coûtent 4 500 F.
- Monnaie rendue : 10 000 − 4 500 = 5 500 F. Le vendeur lui rend **5 500 F**.
- Vérification : 4 500 + 5 500 = 10 000 F.

Tout énoncé est juste s'il demande d'abord le prix de 3 objets à 1 500 F, puis ce qui reste sur 10 000 F.`,
        },
      ],
    },

    // ───────────────────────── 21. S'entraîner à l'épreuve de mathématiques du CFEE (ajout de l'inspecteur)
    {
      id: "entrainement-cfee",
      titre: "S'entraîner à l'épreuve de mathématiques du CFEE",
      theme: "Résolution de problèmes",
      cours: `
## Le CFEE depuis 2026
Depuis 2026, le **concours d'entrée en 6e est supprimé** : le **CFEE est le seul examen** de la fin du CM2. Tu es **admis** si tu as **au moins 5 sur 10 de moyenne** sur l'ensemble des épreuves.

## Comment est faite l'épreuve
*D'après le guide du CFEE de 2018 (le barème peut changer).* L'épreuve de mathématiques est notée sur **100 points**. Elle a deux parties.

| Partie | Points | Ce qu'on te demande |
|---|---|---|
| **Ressources** | 40 | des exercices courts sur ce que tu as appris |
| **Compétence** | 60 | une **situation d'intégration** : un contexte et plusieurs consignes |

Toujours d'après ce guide, dans les ressources, la **numération** (nombres, opérations, fractions) compte pour 40 %, la **mesure** pour 30 %, la **géométrie** pour 20 % et la **résolution de problèmes** pour 10 %. Les **opérations doivent être posées**.

La situation d'intégration part d'une situation de la vie (la santé, l'environnement, le commerce, la culture des champs, l'école…). Elle peut mêler les mathématiques et d'autres matières : on te demande parfois aussi un conseil ou une explication.

## La méthode pour la situation d'intégration
1. Lis le **contexte** deux fois. Souligne les nombres et leurs unités.
2. Lis **toutes les consignes** avant de commencer : souvent, le résultat d'une consigne sert à la suivante.
3. Pour chaque consigne : une phrase qui dit ce que tu cherches, l'**opération posée**, puis une **phrase-réponse avec l'unité**.
4. **Vérifie** : ordre de grandeur, preuve de l'opération (+ ↔ −, × ↔ ÷).
5. Soigne la **présentation** : numérote tes réponses comme les consignes.

>! **Exemple de rédaction**
>! Je cherche le prix des 3 sacs : 3 × 14 500 = 43 500.
>! Les 3 sacs coûtent 43 500 F.

> **À retenir**
> - Depuis 2026 : le CFEE est le seul examen (plus de concours d'entrée en 6e) ; admis avec au moins 5/10 de moyenne.
> - D'après le guide de 2018 (le barème peut changer) : ressources 40 points ; compétence (situation d'intégration) 60 points.
> - Toujours : opérations posées, phrase-réponse avec l'unité, vérification.
> - Une consigne peut demander une explication ou un conseil : réponds par une phrase complète.
`,
      textes: {
        pluie: `**Hauteur de pluie à Kolda pendant l'hivernage** (nombres fictifs)

Chaque ■ représente 10 mm de pluie.

~~~
juin       ■■                    20 mm
juillet    ■■■■■■■■■             90 mm
août       ■■■■■■■■■■■■■■■■■■   180 mm
septembre  ■■■■■■■■■■■■■■       140 mm
octobre    ■■■                   30 mm
~~~`,
      },
      exercices: [
        {
          type: "saisie",
          question: "**Ressources (numération)**. Pose et calcule : 307 × 48.",
          reponses: ["14 736"],
          explication: "307 × 8 = 2 456 ; 307 × 40 = 12 280 (décalage d'un rang) ; 2 456 + 12 280 = 14 736. Ordre de grandeur : 300 × 50 = 15 000.",
        },
        {
          type: "saisie",
          question: "**Ressources (numération)**. Pose et calcule le quotient : 8 136 ÷ 24.",
          reponses: ["339"],
          explication: "81 ÷ 24 = 3 reste 9 ; on abaisse 3 : 93 ÷ 24 = 3 reste 21 ; on abaisse 6 : 216 ÷ 24 = 9 reste 0. Quotient : 339. Vérification : 24 × 339 = 8 136.",
        },
        {
          type: "saisie",
          question: "**Ressources (numération)**. Pose et calcule : 125,6 − 48,75.",
          reponses: ["76,85"],
          explication: "Virgule sous virgule : 125,60 − 48,75 = 76,85. Preuve : 76,85 + 48,75 = 125,60.",
        },
        {
          type: "qcm",
          question: "**Ressources (mesure)**. Un champ a une aire de 2,5 ha. Combien cela fait-il de m² ?",
          choix: ["250 m²", "2 500 m²", "25 000 m²", "250 000 m²"],
          reponse: 2,
          explication: "1 ha = 10 000 m², donc 2,5 ha = 2,5 × 10 000 = 25 000 m².",
        },
        {
          type: "qcm",
          question: "**Ressources (géométrie)**. Les diagonales d'un quadrilatère sont égales, perpendiculaires et se coupent en leur milieu. Quel est ce quadrilatère ?",
          choix: ["un losange qui n'est pas un carré", "un rectangle qui n'est pas un carré", "un carré", "un trapèze"],
          reponse: 2,
          explication: "Diagonales égales qui se coupent en leur milieu : c'est un rectangle ; diagonales perpendiculaires qui se coupent en leur milieu : c'est un losange. Les deux à la fois : c'est un carré.",
        },
        {
          type: "vf",
          question: "Au CFEE, dans les ressources, tu peux écrire seulement le résultat d'une opération, sans la poser (d'après le guide du CFEE de 2018).",
          reponse: false,
          explication: "Faux : les opérations posées sont obligatoires. Elles montrent ta démarche et te permettent de vérifier.",
        },
        {
          type: "qcm",
          texte: "pluie",
          question: "D'après le diagramme, quel mois a été le plus pluvieux ?",
          choix: ["juillet", "septembre", "octobre", "août"],
          reponse: 3,
          explication: "La plus longue barre est celle d'août : 18 carrés de 10 mm, soit 180 mm.",
        },
        {
          type: "saisie",
          texte: "pluie",
          question: "D'après le diagramme, quelle hauteur de pluie est tombée en tout pendant ces 5 mois, en mm ?",
          reponses: ["460", "460 mm"],
          explication: "20 + 90 + 180 + 140 + 30 = 460 mm. (La moyenne par mois est 460 ÷ 5 = 92 mm.)",
        },
        {
          type: "redaction",
          question: `**Ressources : sujet d'entraînement** (pose toutes les opérations)

*Numération*
1) 45 306 + 8 795 ; 6 004 − 2 678 ; 7 452 ÷ 18.
2) Simplifie 36/48.
3) Range dans l'ordre croissant : 2,8 ; 2,08 ; 2,18 ; 2,108.

*Mesure*
4) Convertis 3,75 t en kg et 2 h 45 min en minutes.
5) Calcule l'aire d'un triangle de 12 m de base et 7,5 m de hauteur.

*Géométrie*
6) Combien d'axes de symétrie a un losange qui n'est pas un carré ? Lesquels ?

*Résolution de problème*
7) Un tailleur achète 12 m de tissu à 2 250 F le mètre. Il paie avec 3 billets de 10 000 F. Combien lui rend-on ?`,
          corrige: `1) 45 306 + 8 795 = **54 101** ; 6 004 − 2 678 = **3 326** (preuve : 3 326 + 2 678 = 6 004) ; 7 452 ÷ 18 = **414** (74 ÷ 18 = 4 reste 2 ; 25 ÷ 18 = 1 reste 7 ; 72 ÷ 18 = 4 reste 0 ; vérification : 18 × 414 = 7 452).

2) 36/48 = 18/24 (÷ 2) = 6/8 (÷ 3) = **3/4** (÷ 2). On peut aussi diviser directement par 12.

3) Avec trois chiffres après la virgule : 2,800 ; 2,080 ; 2,180 ; 2,108.
**2,08 < 2,108 < 2,18 < 2,8**.

4) 3,75 t = 3,75 × 1 000 = **3 750 kg** ; 2 h 45 min = 2 × 60 + 45 = **165 min**.

5) A = (12 × 7,5) ÷ 2 = 90 ÷ 2 = **45 m²**.

6) **2 axes** : ses deux diagonales.

7) Prix du tissu : 12 × 2 250 = 27 000 F. Somme donnée : 3 × 10 000 = 30 000 F.
Monnaie : 30 000 − 27 000 = **3 000 F**. On lui rend 3 000 F. Vérification : 27 000 + 3 000 = 30 000.`,
        },
        {
          type: "redaction",
          question: `**Situation d'intégration** (mathématiques et éducation au développement durable)

*Contexte* : pour la Journée nationale de l'arbre, la coopérative scolaire d'une école de Kolda veut reboiser le tour d'un terrain rectangulaire de 60 m de long et 45 m de large. On plante un arbre tous les 5 m tout autour du terrain. Un plant coûte 350 F CFA. La coopérative dispose de 25 000 F. Pendant les 4 premières semaines, chaque arbre doit recevoir 10 litres d'eau par jour.

*Consigne* :
1) Calcule le périmètre du terrain, puis son aire en m² et en hectares.
2) Combien d'arbres faut-il planter ?
3) Combien coûtent les plants ? Combien d'argent reste-t-il à la coopérative ?
4) Quelle quantité d'eau faut-il pour arroser tous les arbres pendant les 4 semaines ? Donne-la en litres puis en m³.
5) Écris deux conseils pour que les jeunes arbres poussent bien.`,
          corrige: `1) Périmètre : (60 + 45) × 2 = 105 × 2 = **210 m**.
Aire : 60 × 45 = **2 700 m²** = 2 700 ÷ 10 000 = **0,27 ha**.

2) Le tour du terrain est une ligne **fermée** : autant d'arbres que d'intervalles.
210 ÷ 5 = 42. Il faut planter **42 arbres**.

3) Prix des plants :
~~~
      350
    ×  42
    ------
      700
  + 14 000
  --------
   14 700
~~~
Les plants coûtent **14 700 F CFA**. Reste : 25 000 − 14 700 = **10 300 F CFA**.

4) 4 semaines = 4 × 7 = 28 jours.
Eau par jour : 42 × 10 = 420 litres. Pour 28 jours : 420 × 28 = **11 760 litres**.
1 m³ = 1 000 l, donc 11 760 l = **11,76 m³**.

5) Exemples de conseils : arroser tôt le matin ou le soir, quand il fait moins chaud ; protéger chaque jeune arbre des chèvres et des moutons avec un grillage ou des branches ; ne pas couper les jeunes arbres ; désherber autour du pied. (Deux conseils justes et bien rédigés suffisent.)`,
        },
        {
          type: "redaction",
          question: `**Situation d'intégration** (mathématiques et santé)

*Contexte* : avant l'hivernage, le poste de santé d'un village de 1 248 habitants distribue des moustiquaires imprégnées : une moustiquaire pour 2 personnes. Les moustiquaires arrivent en ballots de 50. L'infirmier a noté le nombre de malades du paludisme reçus l'année passée (nombres fictifs) : juillet 48, août 60, septembre 72, octobre 36.

*Consigne* :
1) Combien de moustiquaires faut-il distribuer ?
2) Combien de ballots faut-il commander ?
3) Calcule le nombre moyen de malades par mois, de juillet à octobre.
4) Cette année, grâce aux moustiquaires, le nombre de malades d'octobre a diminué de 25 %. Combien y a-t-il eu de malades en octobre ?
5) Donne deux gestes qui protègent du paludisme.`,
          corrige: `1) 1 248 ÷ 2 = **624 moustiquaires**.

2) 624 ÷ 50 :
~~~
  6 2 4 | 50
− 5 0   |----
  1 2 4 | 12
− 1 0 0 |
    2 4 |
~~~
12 ballots donnent 600 moustiquaires ; il en manque 24. Il faut commander **13 ballots**.

3) Total : 48 + 60 + 72 + 36 = 216 malades. Moyenne : 216 ÷ 4 = **54 malades par mois**.

4) Diminution : 25 % de 36 = 36 × 25 ÷ 100 = 9 malades.
Nouveau nombre : 36 − 9 = **27 malades** en octobre.

5) Exemples : dormir chaque nuit sous une moustiquaire imprégnée ; vider les récipients d'eau stagnante (boîtes, pneus) où les moustiques pondent ; aller vite au poste de santé en cas de fièvre. (Deux gestes justes suffisent.)`,
        },
      ],
    },
    {
      id: "fiche-numeration",
      titre: "Fiche de révision : numération (nombres, opérations, fractions, proportionnalité)",
      theme: "Fiches de révision CFEE",
      cours: `
## Grands nombres
- On lit par **classes de 3 chiffres** : milliards, millions, mille, unités. Classe vide : **000**.
- Dans 5 438 207 : **chiffre** des centaines de mille = 4 ; **nombre** de centaines de mille = 54.
- Comparer : d'abord le nombre de chiffres, puis chiffre par chiffre depuis la gauche.
- « mille » est invariable ; deux millions, trois milliards.

## Divisible par…
| Par | Si… |
|---|---|
| 2 | dernier chiffre 0, 2, 4, 6, 8 |
| 5 | dernier chiffre 0 ou 5 |
| 10 | dernier chiffre 0 |
| 4 | les 2 derniers chiffres forment un multiple de 4 |
| 25 | finit par 00, 25, 50, 75 |
| 3 / 9 | somme des chiffres divisible par 3 / par 9 |

## Opérations posées
- Aligne les chiffres depuis la droite ; décimaux : **virgule sous virgule** (+ et −).
- Multiplication : décale d'un rang pour les dizaines, de deux pour les centaines.
- **Dividende = diviseur × quotient + reste**, et reste < diviseur.
- Preuves : a − b = c → c + b = a ; a ÷ b = q → b × q = a.

## Décimaux
| Opération | Règle |
|---|---|
| × décimaux | on compte les chiffres après la virgule des deux facteurs |
| ÷ par un entier | virgule au quotient quand on abaisse les dixièmes |
| ÷ par un décimal | × 10 ou × 100 des deux côtés : 12,6 ÷ 0,3 = 126 ÷ 3 |
| × 10, × 100 | virgule de 1, 2 rangs vers la droite |
| ÷ 10, ÷ 100 | virgule de 1, 2 rangs vers la gauche |

## Fractions
- Simplifier : diviser le haut et le bas par le même nombre : 12/18 = **2/3**.
- Comparer : même dénominateur → le plus grand numérateur l'emporte (5/8 > 3/8) ; sinon, mettre au même dénominateur. Une fraction est < 1 si le haut est plus petit que le bas.
- Addition et soustraction : **même dénominateur** d'abord : 1/2 + 1/3 = 3/6 + 2/6 = 5/6.
- × : haut × haut, bas × bas. ÷ par un entier : on multiplie le bas.
- **Fraction d'une grandeur** : ÷ dénominateur puis × numérateur (3/4 de 2 000 = 1 500).
- **Grandeur dont on connaît une fraction** : ÷ numérateur puis × dénominateur (2/5 → 6 000 F, donc tout = 15 000 F).

## Proportionnalité
- **Règle de trois** : on passe par l'unité (÷ puis ×).
- **Tableau de proportionnalité** : on passe d'une ligne à l'autre en multipliant toujours par le même nombre.
- **a % de N** = N × a ÷ 100.
- **Échelle 1/n** : réalité = carte × n (puis convertir : 100 000 cm = 1 km).

> **Pièges fréquents**
> - 2,47 < 2,5 (écris 2,50) : ne compare pas « 47 et 5 ».
> - 4,05 ≠ 4,5.
> - 1 250 mangues par cartons de 24 : 52 cartons pleins, mais **53 cartons** pour tout ranger.
> - Ne jamais additionner les dénominateurs : 1/2 + 1/3 ≠ 2/5.
`,
      exercices: [
        {
          type: "saisie",
          question: "Quel est le **nombre** de centaines de mille dans 7 254 836 ?",
          reponses: ["72"],
          explication: "On prend tout ce qui est à gauche du chiffre des centaines de mille, ce chiffre compris : 72. (Le **chiffre** des centaines de mille est 2.)",
        },
        {
          type: "vf",
          question: "4 572 est divisible par 9.",
          reponse: true,
          explication: "Vrai : 4 + 5 + 7 + 2 = 18, et 18 est divisible par 9.",
        },
        {
          type: "qcm",
          question: "Quel est le plus grand de ces nombres ?",
          choix: ["3,48", "3,09", "3,505", "3,5"],
          reponse: 2,
          explication: "Avec trois chiffres après la virgule : 3,480 ; 3,090 ; 3,505 ; 3,500. Le plus grand est 3,505.",
        },
        {
          type: "saisie",
          question: "Calcule : 4,25 × 100.",
          reponses: ["425"],
          explication: "× 100 : la virgule se déplace de deux rangs vers la droite. 4,25 × 100 = 425.",
        },
        {
          type: "saisie",
          question: "Calcule : 2,4 × 0,3.",
          reponses: ["0,72"],
          explication: "24 × 3 = 72 ; il y a 1 + 1 = 2 chiffres après la virgule : 0,72.",
        },
        {
          type: "qcm",
          question: "Quelle est la fraction 24/36 simplifiée au maximum ?",
          choix: ["12/18", "2/3", "4/6", "3/4"],
          reponse: 1,
          explication: "24/36 = 12/18 (÷ 2) = 4/6 (÷ 3) = 2/3 (÷ 2). On peut aussi diviser directement par 12. 12/18 et 4/6 sont égales à 2/3 mais pas simplifiées au maximum.",
        },
        {
          type: "qcm",
          question: "Combien font 2/3 + 1/4 ?",
          choix: ["3/7", "11/12", "3/12", "2/12"],
          reponse: 1,
          explication: "Même dénominateur 12 : 2/3 = 8/12 et 1/4 = 3/12. 8/12 + 3/12 = 11/12. (3/7 est le piège : on n'additionne pas les dénominateurs.)",
        },
        {
          type: "saisie",
          question: "Calcule les 3/5 de 4 000 F (en F).",
          reponses: ["2 400", "2 400 F", "2 400 F CFA", "2 400 francs", "2400 F"],
          explication: "4 000 ÷ 5 = 800 (un cinquième) ; 800 × 3 = 2 400 F.",
        },
        {
          type: "saisie",
          question: "Calcule 15 % de 6 000 F (en F).",
          reponses: ["900", "900 F", "900 F CFA", "900 francs"],
          explication: "6 000 × 15 ÷ 100 = 900 F.",
        },
        {
          type: "vf",
          question: "Sur une carte à l'échelle 1/100 000, 3 cm représentent 3 km en réalité.",
          reponse: true,
          explication: "Vrai : 3 × 100 000 = 300 000 cm = 3 000 m = 3 km.",
        },
      ],
    },
    {
      id: "fiche-geometrie",
      titre: "Fiche de révision : géométrie (figures, solides, symétrie)",
      theme: "Fiches de révision CFEE",
      cours: `
## Quadrilatères
| Figure | À reconnaître | Diagonales |
|---|---|---|
| Carré | 4 côtés égaux + 4 angles droits | égales, perpendiculaires, même milieu |
| Rectangle | 4 angles droits | égales, même milieu |
| Losange | 4 côtés égaux | perpendiculaires, même milieu |
| Parallélogramme | côtés opposés parallèles et égaux | même milieu |
| Trapèze | 2 côtés parallèles (les bases) | — |

Un **carré** est à la fois un rectangle et un losange.

## Triangles, cercle, polygones
- Isocèle : 2 côtés égaux ; équilatéral : 3 côtés égaux ; rectangle : 1 angle droit.
- **Diamètre = 2 × rayon** ; on trace le cercle au compas, écarté du rayon.
- Pentagone 5 côtés, **hexagone 6**, **octogone 8**. Régulier : côtés et angles tous égaux.
- Tangram : 7 pièces (5 triangles, 1 carré, 1 parallélogramme).
- Angle droit 90° ; aigu < 90° ; obtus entre 90° et 180° ; plat 180°.

## Solides
| Solide | Faces | Arêtes | Sommets | Patron |
|---|---|---|---|---|
| Cube | 6 carrés | 12 | 8 | 6 carrés |
| Pavé droit | 6 rectangles | 12 | 8 | 6 rectangles |
| Prisme droit (base triangle) | 5 | 9 | 6 | 2 triangles + 3 rectangles |
| Cylindre | 2 disques + surface courbe | — | — | 2 disques + 1 rectangle |

« — » : le cylindre n'a **ni arête droite ni sommet** (ses bords sont des cercles).

## Symétrie, translation, agrandissement
| Figure | Axes de symétrie |
|---|---|
| Carré | 4 |
| Rectangle (non carré) | 2 (par les milieux des côtés opposés) |
| Losange (non carré) | 2 (ses diagonales) |
| Triangle équilatéral / isocèle | 3 / 1 |
| Cercle | une infinité |

- **Symétrie** : pliage ; même distance de part et d'autre de l'axe, sur une perpendiculaire.
- **Translation** : glissement (direction, sens, longueur) ; la figure ne tourne pas.
- **Agrandir / réduire** : toutes les longueurs × ou ÷ par le même nombre ; les angles ne changent pas.

> **Pièges fréquents**
> - Les diagonales d'un rectangle ne sont **pas** ses axes de symétrie.
> - Un losange n'a pas forcément d'angle droit.
> - Le rayon est la **moitié** du diamètre.
`,
      exercices: [
        {
          type: "qcm",
          question: "Un quadrilatère a 4 côtés égaux mais aucun angle droit. C'est…",
          choix: ["un rectangle", "un trapèze", "un carré", "un losange"],
          reponse: 3,
          explication: "4 côtés égaux : c'est un losange. Avec 4 angles droits en plus, ce serait un carré.",
        },
        {
          type: "vf",
          question: "Un carré est aussi un rectangle.",
          reponse: true,
          explication: "Vrai : un carré a 4 angles droits, comme un rectangle (et 4 côtés égaux, comme un losange).",
        },
        {
          type: "saisie",
          question: "Combien d'arêtes a un pavé droit ?",
          reponses: ["12", "12 arêtes"],
          explication: "Un pavé droit (comme un cube) a 6 faces, 12 arêtes et 8 sommets.",
        },
        {
          type: "qcm",
          question: "Combien d'axes de symétrie a un rectangle qui n'est pas un carré ?",
          choix: ["0", "4", "2", "1"],
          reponse: 2,
          explication: "2 axes : les droites qui passent par les milieux des côtés opposés. Ses diagonales ne sont pas des axes.",
        },
        {
          type: "saisie",
          question: "Un cercle a un rayon de 3,5 cm. Quel est son diamètre, en cm ?",
          reponses: ["7", "7 cm"],
          explication: "Diamètre = 2 × rayon = 2 × 3,5 = 7 cm.",
        },
        {
          type: "qcm",
          question: "Le patron d'un cylindre est formé de…",
          choix: ["2 disques et 1 rectangle", "6 rectangles", "1 disque et 2 triangles", "2 rectangles et 1 disque"],
          reponse: 0,
          explication: "Les deux bases sont des disques ; la surface courbe se déroule en un rectangle.",
        },
        {
          type: "vf",
          question: "Dans une translation, la figure tourne.",
          reponse: false,
          explication: "Faux : une translation fait seulement glisser la figure, sans la tourner ni la retourner.",
        },
        {
          type: "saisie",
          question: "On agrandit une figure × 3. Un segment de 4 cm devient un segment de combien de cm ?",
          reponses: ["12", "12 cm"],
          explication: "Toutes les longueurs sont multipliées par 3 : 4 × 3 = 12 cm.",
        },
        {
          type: "qcm",
          question: "Combien de faces a un prisme droit à base triangulaire ?",
          choix: ["6", "9", "4", "5"],
          reponse: 3,
          explication: "2 bases triangulaires + 3 faces rectangulaires = 5 faces (9 arêtes, 6 sommets).",
        },
        {
          type: "vf",
          question: "Les diagonales d'un losange sont perpendiculaires.",
          reponse: true,
          explication: "Vrai : les diagonales d'un losange sont perpendiculaires et se coupent en leur milieu ; ce sont aussi ses axes de symétrie.",
        },
      ],
    },
    {
      id: "fiche-mesure",
      titre: "Fiche de révision : mesure (conversions, périmètres, aires, volumes, durées)",
      theme: "Fiches de révision CFEE",
      cours: `
## Tableaux de conversion
| Grandeur | Unités | D'une unité à la suivante |
|---|---|---|
| Longueur | km hm dam **m** dm cm mm | × 10 |
| Capacité | hl dal **l** dl cl ml | × 10 |
| Masse | kg hg dag **g** dg cg mg | × 10 |
| Aire | km² hm² dam² **m²** dm² cm² mm² | × 100 (2 chiffres par colonne) |
| Volume | **m³** dm³ cm³ mm³ | × 1 000 (3 chiffres par colonne) |

- 1 t = 1 000 kg ; 1 q = 100 kg.
- 1 ha = 10 000 m² ; 1 a = 100 m² ; 1 ca = 1 m².
- **1 dm³ = 1 l** ; 1 m³ = 1 000 l ; 1 cm³ = 1 ml. **1 l d'eau pèse 1 kg.**

## Périmètres
| Figure | Périmètre |
|---|---|
| Carré | c × 4 |
| Rectangle | (L + l) × 2 |
| Cercle | D × 3,14 |

Intervalles : ligne **ouverte** avec les 2 bouts → intervalles + 1 ; ligne **fermée** → autant que d'intervalles.

## Aires
| Figure | Aire |
|---|---|
| Carré | c × c |
| Rectangle | L × l |
| Triangle | (b × h) ÷ 2 |
| Parallélogramme | b × h |
| Losange | (D × d) ÷ 2 |
| Trapèze | (B + b) × h ÷ 2 |
| Disque | r × r × 3,14 |

Trouver une dimension : l = A ÷ L ; hauteur du triangle = A × 2 ÷ b.

## Volumes
| Solide | Volume |
|---|---|
| Cube | a × a × a |
| Pavé droit | L × l × h |
| Cylindre | r × r × 3,14 × h |

## Autres formules
- Masse brute = masse nette + tare.
- Masse = volume (dm³) × masse volumique (kg par dm³).
- 1 h = 60 min ; 1 min = 60 s ; 1 jour = 24 h.
- Distance = vitesse × durée ; vitesse = distance ÷ durée ; durée = distance ÷ vitesse.
- Volume = débit × durée ; durée = volume ÷ débit.

Le budget, les prix (achat, vente, bénéfice, perte), les intérêts, les partages et la moyenne font aussi partie de la **mesure** dans le programme : ils sont regroupés dans la fiche « Problèmes ».

> **Pièges fréquents**
> - 1 m² = 100 dm² (et non 10) ; 1 m³ = 1 000 dm³.
> - Toujours les **mêmes unités** avant de calculer (m avec m).
> - 2 h 30 min ≠ 2,30 h : 2 h 30 min = 2,5 h = 150 min.
> - Côté + 2 m ne veut pas dire aire + 4 m² : recalcule la nouvelle aire.
`,
      exercices: [
        {
          type: "saisie",
          question: "Convertis 3,6 km en m.",
          reponses: ["3 600", "3 600 m"],
          explication: "1 km = 1 000 m : 3,6 × 1 000 = 3 600 m.",
        },
        {
          type: "qcm",
          question: "2,5 m², c'est…",
          choix: ["25 dm²", "2 500 dm²", "250 dm²", "0,25 dm²"],
          reponse: 2,
          explication: "1 m² = 100 dm² : 2,5 × 100 = 250 dm².",
        },
        {
          type: "saisie",
          question: "Une citerne contient 1,5 m³ d'eau. Combien de litres ?",
          reponses: ["1 500", "1 500 l", "1 500 litres"],
          explication: "1 m³ = 1 000 l : 1,5 × 1 000 = 1 500 litres.",
        },
        {
          type: "saisie",
          question: "Quel est le périmètre d'un cercle de 10 m de diamètre, en m ?",
          reponses: ["31,4", "31,4 m"],
          explication: "P = D × 3,14 = 10 × 3,14 = 31,4 m.",
        },
        {
          type: "saisie",
          question: "Quelle est l'aire d'un triangle de 8 cm de base et 5 cm de hauteur, en cm² ?",
          reponses: ["20", "20 cm²"],
          explication: "A = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm².",
        },
        {
          type: "qcm",
          question: "Quelle est l'aire d'un disque de 2 m de rayon ?",
          choix: ["6,28 m²", "12,56 m²", "4 m²", "25,12 m²"],
          reponse: 1,
          explication: "A = r × r × 3,14 = 2 × 2 × 3,14 = 12,56 m². (6,28 m² : on a calculé 2 × 3,14 au lieu de 2 × 2 × 3,14.)",
        },
        {
          type: "saisie",
          question: "Quel est le volume d'un pavé droit de 4 dm de long, 3 dm de large et 2 dm de haut, en dm³ ?",
          reponses: ["24", "24 dm³"],
          explication: "V = 4 × 3 × 2 = 24 dm³ (soit 24 litres).",
        },
        {
          type: "vf",
          question: "1 h 50 min + 40 min = 2 h 30 min.",
          reponse: true,
          explication: "Vrai : 50 min + 40 min = 90 min = 1 h 30 min ; 1 h + 1 h 30 min = 2 h 30 min.",
        },
        {
          type: "saisie",
          question: "Un car roule à 60 km/h pendant 2 h 30 min. Quelle distance parcourt-il, en km ?",
          reponses: ["150", "150 km"],
          explication: "2 h 30 min = 2,5 h. Distance = 60 × 2,5 = 150 km (ou : 120 km en 2 h + 30 km en une demi-heure).",
        },
        {
          type: "qcm",
          question: "Un sac de mil a une masse brute de 52 kg. Le sac vide pèse 2 kg. Quelle est la masse nette ?",
          choix: ["54 kg", "26 kg", "50 kg", "104 kg"],
          reponse: 2,
          explication: "Masse nette = masse brute − tare = 52 − 2 = 50 kg.",
        },
      ],
    },
    {
      id: "fiche-problemes",
      titre: "Fiche de révision : problèmes (méthode, commerce, intérêts, partages, moyenne)",
      theme: "Fiches de révision CFEE",
      cours: `
## Méthode en 3 lignes
1. **Lire** deux fois, repérer la question finale, trier les données (utiles, inutiles, manquantes).
2. **Chercher** les questions intermédiaires ; poser chaque opération.
3. **Répondre** par une phrase avec l'unité, puis **vérifier** (ordre de grandeur, preuve).

- Démarche **progressive** : des données vers la question.
- Démarche **régressive** : on part du résultat et on remonte avec les opérations inverses (+ ↔ −, × ↔ ÷).
- Facture : montant = quantité × prix unitaire ; total = somme des montants.
- Tableau ou graphique : lis le titre, les axes et les unités avant de prendre une valeur.

## Budget et commerce
| À calculer | Formule |
|---|---|
| Économies | recettes − dépenses |
| Prix de revient (PR) | prix d'achat + frais |
| Bénéfice | prix de vente − PR |
| Perte | PR − prix de vente |
| a % d'un prix | prix × a ÷ 100 |
| Prix après remise | prix − remise |
| Bénéfice en % | bénéfice ÷ prix d'achat (ou prix de revient, selon l'énoncé) × 100 |

## Intérêts
| Durée | Intérêt I |
|---|---|
| n années | C × t × n ÷ 100 |
| m mois | C × t × m ÷ 1 200 |
| j jours | C × t × j ÷ 36 000 (année de 360 jours) |

- **Valeur acquise = capital + intérêt.**
- Taux t % : 100 F rapportent t F en un an.

## Partages et moyenne
- Parts égales : somme ÷ nombre de parts.
- Somme et différence : **petite part = (somme − différence) ÷ 2** ; grande part = petite + différence.
- Le double : 1 part + 2 parts = 3 parts.
- Partage proportionnel (2, 3, 5) : 10 parts ; une part = total ÷ 10.
- **Moyenne = somme des valeurs ÷ nombre de valeurs.**

> **Pièges fréquents**
> - Perte = PR − PV (pas l'inverse).
> - Une remise **se soustrait** du prix.
> - 2 ans 6 mois = 30 mois (formule des mois).
> - Vérifie qu'un partage redonne bien le total.
`,
      exercices: [
        {
          type: "qcm",
          question: "« Awa, 11 ans, achète 4 cahiers à 300 F. Combien paie-t-elle ? » Quelle donnée est inutile ?",
          choix: ["l'âge d'Awa", "le nombre de cahiers", "le prix d'un cahier", "aucune"],
          reponse: 0,
          explication: "L'âge d'Awa ne sert pas pour calculer le prix : 4 × 300 = 1 200 F.",
        },
        {
          type: "saisie",
          question: "Un commerçant achète une marchandise 12 000 F, paie 1 500 F de transport et la revend 15 000 F. Quel est son bénéfice, en F ?",
          reponses: ["1 500", "1 500 F", "1 500 F CFA", "1 500 francs", "1500 F"],
          explication: "PR = 12 000 + 1 500 = 13 500 F. Bénéfice = 15 000 − 13 500 = 1 500 F.",
        },
        {
          type: "vf",
          question: "Perte = prix de vente − prix de revient.",
          reponse: false,
          explication: "Faux : quand on vend moins cher que le prix de revient, perte = prix de revient − prix de vente.",
        },
        {
          type: "saisie",
          question: "Un pagne coûte 8 500 F. On fait une remise de 20 %. Quel prix paie-t-on, en F ?",
          reponses: ["6 800", "6 800 F", "6 800 F CFA", "6 800 francs", "6800 F"],
          explication: "Remise : 8 500 × 20 ÷ 100 = 1 700 F. Prix payé : 8 500 − 1 700 = 6 800 F.",
        },
        {
          type: "saisie",
          question: "Quel intérêt rapportent 100 000 F placés à 6 % pendant 2 ans, en F ?",
          reponses: ["12 000", "12 000 F", "12 000 F CFA", "12 000 francs", "12000 F"],
          explication: "I = 100 000 × 6 × 2 ÷ 100 = 12 000 F.",
        },
        {
          type: "qcm",
          question: "Quel intérêt rapportent 60 000 F placés à 5 % pendant 6 mois ?",
          choix: ["3 000 F", "18 000 F", "1 500 F", "300 F"],
          reponse: 2,
          explication: "I = 60 000 × 5 × 6 ÷ 1 200 = 1 500 F. (En un an : 3 000 F ; en 6 mois, la moitié.)",
        },
        {
          type: "saisie",
          question: "On place 50 000 F à 4 % pendant 1 an. Quelle est la valeur acquise, en F ?",
          reponses: ["52 000", "52 000 F", "52 000 F CFA", "52 000 francs", "52000 F"],
          explication: "Intérêt : 50 000 × 4 ÷ 100 = 2 000 F. Valeur acquise : 50 000 + 2 000 = 52 000 F.",
        },
        {
          type: "saisie",
          question: "Deux frères ont ensemble 30 000 F. L'aîné a 6 000 F de plus que le cadet. Combien a le cadet, en F ?",
          reponses: ["12 000", "12 000 F", "12 000 F CFA", "12 000 francs", "12000 F"],
          explication: "(30 000 − 6 000) ÷ 2 = 12 000 F pour le cadet ; l'aîné a 18 000 F. Vérification : 12 000 + 18 000 = 30 000.",
        },
        {
          type: "saisie",
          question: "Les notes de Moussa sur 10 sont 6 ; 7 ; 8,5 ; 6,5. Quelle est sa moyenne ? (Écris le nombre seul.)",
          reponses: ["7"],
          explication: "Somme : 6 + 7 + 8,5 + 6,5 = 28. Moyenne : 28 ÷ 4 = 7.",
        },
        {
          type: "qcm",
          question: "Je pense à un nombre. Je le multiplie par 3, puis j'enlève 5 : je trouve 22. Quel est ce nombre ?",
          choix: ["9", "5,67", "21", "81"],
          reponse: 0,
          explication: "Démarche régressive : 22 + 5 = 27 ; 27 ÷ 3 = 9. Vérification : 9 × 3 − 5 = 22.",
        },
      ],
    },
  ],
};
