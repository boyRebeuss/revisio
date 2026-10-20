export default {
  chapitres: [
    {
      id: "atome",
      titre: "La structure de l'atome",
      theme: "Organisation et transformations de la matière",
      cours: `
## De la molécule à l'atome
Toute la matière est faite d'**atomes**. Les atomes s'assemblent pour former des **molécules** (H₂O, CO₂, O₂...) ou des cristaux (comme le sel). En 3e, on regarde **à l'intérieur** de l'atome.

## Le noyau et les électrons
Un atome est constitué :
- d'un **noyau** central, très petit, qui contient des **protons** et des **neutrons** (on les appelle ensemble les **nucléons**) ;
- d'**électrons**, qui se déplacent autour du noyau et forment le **nuage électronique**.

| Particule | Où ? | Charge électrique | Masse |
|---|---|---|---|
| Proton | dans le noyau | **positive** : +e | environ 1,67 × 10⁻²⁷ kg |
| Neutron | dans le noyau | **nulle** (neutre) | environ 1,67 × 10⁻²⁷ kg |
| Électron | autour du noyau | **négative** : −e | environ 9,11 × 10⁻³¹ kg, soit environ 1 800 fois moins qu'un proton |

La charge **e** s'appelle la **charge élémentaire** : e = 1,6 × 10⁻¹⁹ C (le coulomb, C, est l'unité de charge électrique).

## Le numéro atomique Z
Le **numéro atomique**, noté **Z**, est le **nombre de protons** du noyau. C'est lui qui définit l'**élément chimique** : tous les atomes de carbone ont 6 protons, tous les atomes de fer en ont 26. La **classification périodique** (le tableau de Mendeleïev) range les éléments par Z croissant.

| Élément | Symbole | Z |
|---|---|---|
| Hydrogène | H | 1 |
| Carbone | C | 6 |
| Azote | N | 7 |
| Oxygène | O | 8 |
| Sodium | Na | 11 |
| Aluminium | Al | 13 |
| Chlore | Cl | 17 |
| Fer | Fe | 26 |
| Cuivre | Cu | 29 |
| Zinc | Zn | 30 |

## L'atome est électriquement neutre
Un atome contient **autant d'électrons que de protons**. Les charges positives du noyau (+Z × e) compensent exactement les charges négatives des électrons (−Z × e) : la charge totale de l'atome est **nulle**.

>! **Exemple résolu** : l'atome de sodium a Z = 11 et son noyau contient 23 nucléons.
>! - Protons : 11 (c'est Z).
>! - Neutrons : 23 − 11 = 12.
>! - Électrons : 11 (autant que de protons, car l'atome est neutre).
>! - Charge du noyau : +11e.

## Une structure lacunaire
L'atome est minuscule : son diamètre est de l'ordre de **10⁻¹⁰ m** (un dixième de milliardième de mètre). Le noyau est encore **environ 100 000 fois plus petit** : de l'ordre de **10⁻¹⁵ m**. Si le noyau avait la taille d'une perle de 1 mm, l'atome aurait un diamètre de 100 m ! Entre le noyau et les électrons, il n'y a **rien** : c'est du **vide**. On dit que la structure de l'atome est **lacunaire**.

Les électrons étant très légers, **presque toute la masse de l'atome est concentrée dans son noyau**.

>! **Erreurs fréquentes** :
>! - Le neutron n'est pas chargé : il ne « neutralise » rien. C'est l'égalité *protons = électrons* qui rend l'atome neutre.
>! - Le nombre de neutrons n'est pas toujours égal au nombre de protons (le sodium a 11 protons et 12 neutrons).

> **À retenir** :
> - Atome = noyau (protons + et neutrons neutres) + électrons (−) autour.
> - Z = nombre de protons = nombre d'électrons dans l'atome. Z caractérise l'élément.
> - L'atome est électriquement neutre.
> - Atome : environ 10⁻¹⁰ m ; noyau : environ 10⁻¹⁵ m. Structure lacunaire, masse concentrée dans le noyau.
`,
      exercices: [
        { type: "qcm", question: "Où se trouvent les électrons d'un atome ?", choix: ["Dans le noyau, avec les protons", "Autour du noyau", "Entre les protons et les neutrons", "Dans les neutrons"], reponse: 1, explication: "Les électrons se déplacent **autour du noyau** (nuage électronique). Le noyau, lui, contient les protons et les neutrons." },
        { type: "vf", question: "Le neutron porte une charge électrique positive.", reponse: false, explication: "Le neutron est **neutre** (charge nulle), comme son nom l'indique. C'est le **proton** qui porte une charge positive." },
        { type: "saisie", question: "L'atome d'oxygène a pour numéro atomique Z = 8. Combien possède-t-il d'électrons ?", reponses: ["8 électrons"], explication: "Z = 8 : 8 protons. L'atome est neutre, il a donc autant d'électrons que de protons : **8 électrons**." },
        { type: "qcm", question: "Pourquoi un atome est-il électriquement neutre ?", choix: ["Parce que ses neutrons annulent les charges", "Parce qu'il a autant de neutrons que de protons", "Parce qu'il a autant d'électrons que de protons", "Parce que ses particules ne sont pas chargées"], reponse: 2, explication: "Chaque proton porte +e et chaque électron −e. Avec **autant d'électrons que de protons**, les charges se compensent. Les neutrons, eux, ne jouent aucun rôle dans la charge." },
        { type: "saisie", question: "Le noyau de l'atome d'aluminium contient 13 protons et 27 nucléons. Combien contient-il de neutrons ?", reponses: ["14 neutrons"], explication: "Nucléons = protons + neutrons, donc neutrons = 27 − 13 = **14**." },
        { type: "qcm", question: "Quel est l'ordre de grandeur du diamètre d'un atome ?", choix: ["10⁻³ m", "10⁻¹⁵ m", "10⁻⁶ m", "10⁻¹⁰ m"], reponse: 3, explication: "Un atome mesure environ **10⁻¹⁰ m**. 10⁻¹⁵ m est l'ordre de grandeur de la taille du **noyau**, 100 000 fois plus petit." },
        { type: "vf", question: "Presque toute la masse d'un atome est concentrée dans son noyau.", reponse: true, explication: "Un électron est environ 1 800 fois plus léger qu'un proton ou qu'un neutron : la masse des électrons est négligeable, la masse de l'atome est **presque entièrement celle du noyau**." },
        { type: "qcm", question: "Un atome possède 17 électrons. De quel élément s'agit-il ?", choix: ["Le chlore (Z = 17)", "Le sodium (Z = 11)", "Le fer (Z = 26)", "On ne peut pas savoir"], reponse: 0, explication: "Dans un atome, nombre d'électrons = nombre de protons = Z. Z = 17 : c'est le **chlore**." },
        { type: "redaction", question: "**Type brevet.** L'atome de fer a pour numéro atomique Z = 26 et son noyau contient 56 nucléons. Donnée : masse d'un nucléon ≈ 1,67 × 10⁻²⁷ kg ; on néglige la masse des électrons.\n1. Donne la composition de l'atome de fer (protons, neutrons, électrons).\n2. Quelle est la charge du noyau ? Pourquoi l'atome est-il neutre ?\n3. Calcule la masse d'un atome de fer.\n4. Un petit clou en fer a une masse de 2 g. Combien contient-il environ d'atomes ?", corrige: `1. **Composition** : Z = 26, donc **26 protons**. Neutrons : 56 − 26 = **30 neutrons**. L'atome est neutre : **26 électrons**.

2. Le noyau contient 26 protons de charge +e chacun : sa charge est **+26e**. Les 26 électrons portent en tout −26e : la charge totale de l'atome est nulle, il est **électriquement neutre**.

3. **Masse de l'atome** ≈ masse du noyau = 56 × 1,67 × 10⁻²⁷ ≈ **9,35 × 10⁻²⁶ kg**.

4. 2 g = 2 × 10⁻³ kg. Nombre d'atomes = 2 × 10⁻³ ÷ (9,35 × 10⁻²⁶) ≈ **2,1 × 10²² atomes** (21 000 milliards de milliards !).

> Méthode : convertir la masse en kg avant de diviser, et vérifier l'ordre de grandeur (un objet visible contient un nombre gigantesque d'atomes).` },
      ],
    },
    {
      id: "equations-conservation",
      titre: "Transformations chimiques : équations et conservation",
      theme: "Organisation et transformations de la matière",
      cours: `
## Transformation physique ou chimique ?
- Lors d'une **transformation physique** (changement d'état, dissolution), les molécules restent les mêmes : l'eau qui gèle reste de l'eau (H₂O).
- Lors d'une **transformation chimique**, des espèces chimiques **disparaissent** (les **réactifs**) et de nouvelles espèces **apparaissent** (les **produits**). Les atomes des réactifs se **réarrangent** pour former de nouvelles molécules.

## Lire une formule chimique
Une formule indique les atomes d'une molécule. Le **chiffre en indice** (en bas, à droite) donne le nombre d'atomes de l'élément qui le précède.

| Molécule | Formule | Atomes |
|---|---|---|
| Eau | H₂O | 2 H et 1 O |
| Dioxyde de carbone | CO₂ | 1 C et 2 O |
| Dioxygène | O₂ | 2 O |
| Méthane | CH₄ | 1 C et 4 H |
| Glucose | C₆H₁₂O₆ | 6 C, 12 H et 6 O |

Le **nombre placé devant** une formule (le **coefficient**) indique le nombre de molécules : **2 H₂O** = 2 molécules d'eau = 4 atomes H et 2 atomes O.

## L'équation de réaction
Une transformation chimique se modélise par une **réaction chimique**, écrite sous forme d'**équation** :

~~~
réactifs  →  produits
C + O₂  →  CO₂
~~~

Au cours d'une réaction, **les atomes se conservent** : ils ne sont ni créés ni détruits. Il doit donc y avoir, de chaque côté de la flèche, **le même nombre d'atomes de chaque élément**. On dit que l'équation est **ajustée** (ou équilibrée).

>! **Méthode pour ajuster une équation** : combustion du méthane, CH₄ + O₂ → CO₂ + H₂O.
>! - Carbone : 1 à gauche, 1 à droite : ça va.
>! - Hydrogène : 4 à gauche, 2 à droite : on place un **2** devant H₂O.
>! - Oxygène : à droite, 2 (dans CO₂) + 2 × 1 (dans 2 H₂O) = 4 ; à gauche, 2 : on place un **2** devant O₂.
>! - Résultat : **CH₄ + 2 O₂ → CO₂ + 2 H₂O**. On vérifie : 1 C, 4 H, 4 O de chaque côté.
>! On ne change **jamais** les indices d'une formule (cela changerait la molécule) : on ne modifie que les coefficients.

## La conservation de la masse
Puisque les atomes se conservent, **la masse totale se conserve** : la masse des réactifs qui ont réagi est égale à la masse des produits formés (loi de Lavoisier : « rien ne se perd, rien ne se crée, tout se transforme »).

>! **Exemple résolu** : 16 g de méthane brûlent avec 64 g de dioxygène. On obtient 44 g de dioxyde de carbone. Masse d'eau formée : (16 + 64) − 44 = **36 g**.

Attention : si un gaz s'échappe d'un récipient ouvert, la balance semble indiquer une perte de masse. Dans un récipient **fermé**, la masse totale ne change pas.

> **À retenir** :
> - Transformation chimique : des réactifs disparaissent, des produits apparaissent ; les atomes se réarrangent.
> - Indice = nombre d'atomes dans la molécule ; coefficient = nombre de molécules.
> - Une équation ajustée a le même nombre d'atomes de chaque élément de chaque côté.
> - La masse totale se conserve au cours d'une transformation chimique.
`,
      exercices: [
        { type: "vf", question: "La fusion de la glace est une transformation chimique.", reponse: false, explication: "C'est une **transformation physique** (un changement d'état) : les molécules H₂O restent les mêmes, aucune nouvelle espèce n'apparaît." },
        { type: "saisie", question: "Combien d'atomes d'hydrogène y a-t-il dans 3 H₂O ?", reponses: ["6 atomes", "6 atomes d'hydrogène", "6 H"], explication: "Chaque molécule H₂O contient 2 atomes H ; 3 molécules en contiennent 3 × 2 = **6**." },
        { type: "qcm", question: "La molécule de propane a pour formule C₃H₈. Elle contient :", choix: ["3 atomes de carbone et 8 atomes d'hydrogène", "3 atomes d'hydrogène et 8 atomes de carbone", "11 atomes de carbone", "3 molécules de carbone et 8 molécules d'hydrogène"], reponse: 0, explication: "L'indice suit le symbole de l'élément qu'il compte : **3 C et 8 H**, soit 11 atomes en tout dans une seule molécule." },
        { type: "saisie", question: "Ajuste l'équation : 2 H₂ + … O₂ → 2 H₂O. Quel coefficient faut-il placer devant O₂ ?", reponses: ["1", "1 O2", "1 O₂"], explication: "À droite : 2 × 1 = 2 atomes O. À gauche, une molécule O₂ en apporte 2 : le coefficient est **1** (on ne l'écrit pas). Équation : 2 H₂ + O₂ → 2 H₂O." },
        { type: "qcm", question: "Pourquoi une équation de réaction doit-elle être ajustée ?", choix: ["Parce que les molécules se conservent", "Parce que la masse augmente pendant la réaction", "Parce que les atomes se conservent pendant la réaction", "Parce que les réactifs ne disparaissent pas"], reponse: 2, explication: "Les **atomes se conservent** : ils se réarrangent, mais aucun n'est créé ni détruit. Les molécules, elles, ne se conservent pas (de nouvelles molécules apparaissent)." },
        { type: "saisie", question: "12 g de carbone brûlent complètement dans 32 g de dioxygène. Seul du dioxyde de carbone se forme. Quelle masse de dioxyde de carbone obtient-on ? (en g)", reponses: ["44 g", "44 grammes", "44 g de CO2", "44 g de dioxyde de carbone"], explication: "Conservation de la masse : 12 + 32 = **44 g** de CO₂." },
        { type: "vf", question: "Pour ajuster une équation, on peut changer l'indice d'une formule, par exemple écrire H₂O₂ au lieu de H₂O.", reponse: false, explication: "Jamais ! Changer un indice change la molécule (H₂O₂ est l'eau oxygénée, pas l'eau). On n'ajuste qu'avec les **coefficients** placés devant les formules." },
        { type: "qcm", question: "Quelle équation est correctement ajustée ?", choix: ["CH₄ + O₂ → CO₂ + 2 H₂O", "CH₄ + 2 O₂ → CO₂ + H₂O", "C + O₂ → CO", "CH₄ + 2 O₂ → CO₂ + 2 H₂O"], reponse: 3, explication: "Dans **CH₄ + 2 O₂ → CO₂ + 2 H₂O**, on compte 1 C, 4 H et 4 O de chaque côté. Les autres équations n'ont pas le même nombre d'atomes O (ou H) des deux côtés." },
        { type: "redaction", question: "**Type brevet.** Le butane (C₄H₁₀) est le gaz des réchauds de camping. Sa combustion complète produit du dioxyde de carbone et de l'eau.\n1. Nomme les réactifs et les produits.\n2. Vérifie que l'équation 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O est ajustée.\n3. Lors d'une expérience, 58 g de butane réagissent avec 208 g de dioxygène ; il se forme 176 g de dioxyde de carbone. Calcule la masse d'eau formée et nomme la loi utilisée.", corrige: `1. **Réactifs** : le butane et le dioxygène. **Produits** : le dioxyde de carbone et l'eau.

2. **Comptage des atomes** :

| Élément | À gauche | À droite |
|---|---|---|
| C | 2 × 4 = 8 | 8 × 1 = 8 |
| H | 2 × 10 = 20 | 10 × 2 = 20 |
| O | 13 × 2 = 26 | 8 × 2 + 10 × 1 = 26 |

Il y a autant d'atomes de chaque élément des deux côtés : l'équation est **ajustée**.

3. **Conservation de la masse** (loi de Lavoisier) : masse des réactifs = masse des produits.
58 + 208 = 266 g. Masse d'eau = 266 − 176 = **90 g**.

> La conservation de la masse est une conséquence de la conservation des atomes.` },
      ],
    },
    {
      id: "ions",
      titre: "Les ions et les solutions ioniques",
      theme: "Organisation et transformations de la matière",
      cours: `
## Qu'est-ce qu'un ion ?
Un **ion** est un atome (ou un groupe d'atomes) qui a **perdu** ou **gagné** un ou plusieurs **électrons**. Le noyau ne change pas : le nombre de protons reste le même. L'ion n'est donc plus neutre : il est **chargé**.

| Type d'ion | Électrons | Charge | Exemple |
|---|---|---|---|
| **Cation** | a **perdu** des électrons | **positive** | Na⁺ : l'atome de sodium a perdu 1 électron |
| **Anion** | a **gagné** des électrons | **négative** | Cl⁻ : l'atome de chlore a gagné 1 électron |

Dans la formule, la charge est écrite **en exposant** : Cu²⁺ a perdu 2 électrons ; O²⁻ en a gagné 2. Dans les noms, le chiffre romain rappelle la charge : « cuivre II » se lit « cuivre deux » et désigne Cu²⁺ ; « fer III » (fer trois) désigne Fe³⁺.

>! **Exemple résolu** : l'ion cuivre Cu²⁺ (cuivre : Z = 29).
>! - Protons : 29 (le noyau ne change pas).
>! - L'atome avait 29 électrons ; il en a perdu 2 : il en reste **27**.
>! - Charge : 29 charges + et 27 charges −, soit **+2e**.

## Ions à connaître
| Ion | Formule | Nature |
|---|---|---|
| hydrogène | H⁺ | cation (c'est un proton seul !) |
| sodium | Na⁺ | cation |
| cuivre II | Cu²⁺ | cation |
| fer II | Fe²⁺ | cation |
| fer III | Fe³⁺ | cation |
| zinc | Zn²⁺ | cation |
| aluminium | Al³⁺ | cation |
| chlorure | Cl⁻ | anion |
| hydroxyde | HO⁻ | anion **polyatomique** (plusieurs atomes) |
| sulfate | SO₄²⁻ | anion polyatomique |

## Solutions ioniques
Beaucoup de solides, comme le sel (chlorure de sodium), sont faits d'ions. Quand on les **dissout** dans l'eau, les ions se dispersent : on obtient une **solution ionique**.

Une solution ionique est toujours **électriquement neutre** : il y a autant de charges + que de charges −.
- Chlorure de sodium : Na⁺ et Cl⁻ (un ion de chaque), formule **NaCl**.
- Chlorure de fer III : Fe³⁺ et **3** Cl⁻, formule **FeCl₃**.
- Sulfate de cuivre : Cu²⁺ et SO₄²⁻, formule **CuSO₄** (2 charges + et 2 charges −).

## Les solutions ioniques conduisent le courant
L'eau distillée conduit très mal le courant. Une **solution ionique** (eau salée) le conduit bien : dans un liquide, le courant électrique est dû au **déplacement des ions** (dans un métal, il est dû au déplacement des électrons). Une eau sucrée, faite de molécules non chargées, conduit à peine mieux que l'eau pure.

>! **Erreurs fréquentes** :
>! - Un ion **positif** a **perdu** des électrons (pas gagné de protons !).
>! - Ne confonds pas l'ion chlorure Cl⁻ et la molécule de dichlore Cl₂.

> **À retenir** :
> - Ion = atome ou groupe d'atomes qui a perdu (cation, +) ou gagné (anion, −) des électrons.
> - Le nombre de protons ne change pas.
> - Une solution ionique est électriquement neutre et conduit le courant grâce aux ions.
`,
      exercices: [
        { type: "qcm", question: "Un cation est un atome qui a :", choix: ["gagné des protons", "perdu des électrons", "gagné des électrons", "perdu des neutrons"], reponse: 1, explication: "Un cation est **positif** : il a **perdu des électrons** (charges −). Le noyau, et donc le nombre de protons, ne change pas." },
        { type: "saisie", question: "Combien d'électrons possède l'ion Cu²⁺ ? (Z = 29 pour le cuivre)", reponses: ["27 électrons"], explication: "L'atome de cuivre a 29 électrons ; l'ion Cu²⁺ en a perdu 2 : 29 − 2 = **27 électrons**." },
        { type: "saisie", question: "L'atome de magnésium (symbole Mg) perd 2 électrons. Écris la formule de l'ion obtenu.", reponses: ["Mg²⁺", "Mg2+", "Mg++", "Mg 2+"], explication: "Il a perdu 2 électrons : il porte 2 charges positives. Formule : **Mg²⁺**." },
        { type: "vf", question: "L'ion H⁺ est un atome d'hydrogène qui a perdu son unique électron : il ne reste qu'un proton.", reponse: true, explication: "L'atome d'hydrogène (Z = 1) a 1 proton et 1 électron. En perdant son électron, il ne reste que le **proton**." },
        { type: "qcm", question: "L'ion chlorure Cl⁻ (chlore : Z = 17) possède :", choix: ["17 protons et 17 électrons", "16 protons et 17 électrons", "18 protons et 17 électrons", "17 protons et 18 électrons"], reponse: 3, explication: "Le noyau ne change pas : **17 protons**. L'atome a **gagné** 1 électron : 17 + 1 = **18 électrons**." },
        { type: "qcm", question: "Dans la solution de chlorure de fer III, il y a des ions Fe³⁺ et Cl⁻. Pour que la solution soit neutre, il y a pour un ion Fe³⁺ :", choix: ["1 ion Cl⁻", "2 ions Cl⁻", "3 ions Cl⁻", "aucun ion Cl⁻"], reponse: 2, explication: "Fe³⁺ apporte 3 charges + ; il faut **3 ions Cl⁻** (3 charges −) pour compenser. Formule : FeCl₃." },
        { type: "vf", question: "L'eau sucrée conduit bien le courant électrique car elle contient des ions.", reponse: false, explication: "Le sucre est fait de **molécules**, pas d'ions : l'eau sucrée conduit très mal le courant. C'est l'eau **salée** (ions Na⁺ et Cl⁻) qui le conduit bien." },
        { type: "qcm", question: "L'ion sulfate SO₄²⁻ est :", choix: ["un anion polyatomique", "un cation monoatomique", "un atome neutre", "une molécule neutre"], reponse: 0, explication: "Il est formé de **plusieurs atomes** (1 S et 4 O) et porte une charge **négative** : c'est un **anion polyatomique**." },
        { type: "redaction", question: "**Type brevet.** L'aluminium (Z = 13) forme l'ion Al³⁺.\n1. Cet ion est-il un cation ou un anion ? Justifie.\n2. Donne le nombre de protons et d'électrons de l'ion Al³⁺.\n3. Le chlorure d'aluminium est formé d'ions Al³⁺ et Cl⁻. Écris sa formule en justifiant.\n4. On plonge deux électrodes reliées à une pile et une lampe dans une solution de chlorure d'aluminium : la lampe brille. Explique.", corrige: `1. Al³⁺ porte une charge **positive** : c'est un **cation**. L'atome d'aluminium a **perdu 3 électrons**.

2. Le noyau ne change pas : **13 protons**. Électrons : 13 − 3 = **10 électrons**.

3. Un ion Al³⁺ apporte 3 charges + ; chaque ion Cl⁻ apporte 1 charge −. Pour que l'ensemble soit **électriquement neutre**, il faut 3 ions Cl⁻ pour 1 ion Al³⁺ : formule **AlCl₃**.

4. La solution contient des **ions** qui peuvent se déplacer : le courant électrique dans la solution est dû au **déplacement des ions** (les cations vers une électrode, les anions vers l'autre). Le circuit est fermé, la lampe brille.` },
      ],
    },
    {
      id: "ph-acides-bases",
      titre: "Solutions acides, basiques et pH",
      theme: "Organisation et transformations de la matière",
      cours: `
## Le pH
Le **pH** est un nombre, généralement compris entre **0 et 14**, qui indique si une solution aqueuse est **acide**, **neutre** ou **basique**. Il n'a pas d'unité.

| pH | Solution | Exemples (valeurs approximatives) |
|---|---|---|
| inférieur à 7 | **acide** | jus de citron (pH ≈ 2), vinaigre (≈ 3), soda (≈ 3) |
| égal à 7 | **neutre** | eau pure |
| supérieur à 7 | **basique** | eau savonneuse (≈ 10), eau de Javel (≈ 12), soude (≈ 14) |

Ces valeurs sont données à 25 °C. Plus le pH est **petit**, plus la solution est **acide** ; plus il est **grand**, plus elle est **basique**.

## Mesurer le pH
- Le **papier pH** : on y dépose une goutte de solution avec un agitateur, puis on compare la couleur à l'échelle de teintes. Mesure rapide, peu précise (à une unité près).
- Le **pH-mètre** : on plonge la sonde dans la solution et on lit la valeur. Mesure plus précise (au dixième).

On ne trempe **jamais** le papier pH directement dans le flacon (on le contaminerait).

## Ions H⁺ et HO⁻
Le caractère acide ou basique est dû à deux ions :
- une solution **acide** contient **plus d'ions hydrogène H⁺** que d'ions hydroxyde HO⁻ ;
- une solution **basique** contient **plus d'ions hydroxyde HO⁻** que d'ions H⁺ ;
- une solution **neutre** en contient **autant** de chaque.

Exemples : l'**acide chlorhydrique** contient des ions H⁺ et Cl⁻ ; la **soude** (hydroxyde de sodium en solution) contient des ions Na⁺ et HO⁻.

## La dilution
**Diluer** une solution, c'est lui ajouter de l'eau.
- Quand on dilue un acide, son pH **augmente** et se rapproche de 7, **sans jamais dépasser 7** (une solution acide diluée reste acide).
- Quand on dilue une base, son pH **diminue** et se rapproche de 7, sans descendre sous 7.

## Réaction entre un acide et une base
Quand on mélange un acide et une base, les ions H⁺ et HO⁻ réagissent ensemble pour former de l'eau : **H⁺ + HO⁻ → H₂O**. Cette réaction dégage de la chaleur. Le pH du mélange se rapproche de 7.

## Sécurité
Les acides et les bases concentrés sont **corrosifs** (pictogramme représentant une main et une surface rongées par un liquide). On porte **blouse, lunettes et gants**. Pour diluer un acide concentré, on verse **l'acide dans l'eau**, jamais l'inverse (risque de projections brûlantes).

>! **Erreurs fréquentes** :
>! - « pH 2 est moins acide que pH 4 » : faux, c'est l'inverse ! Plus le pH est petit, plus la solution est acide.
>! - Une solution acide qu'on dilue ne devient pas basique : son pH reste en dessous de 7.

> **À retenir** :
> - pH < 7 : acide (H⁺ majoritaires) ; pH = 7 : neutre ; pH > 7 : basique (HO⁻ majoritaires).
> - Papier pH (approximatif) ou pH-mètre (précis).
> - Dilution : le pH se rapproche de 7 sans le dépasser.
> - Acides et bases concentrés : corrosifs, protection obligatoire.
`,
      exercices: [
        { type: "qcm", question: "Une solution a un pH égal à 3. Elle est :", choix: ["neutre", "basique", "acide", "on ne peut pas savoir"], reponse: 2, explication: "pH < 7 : la solution est **acide**." },
        { type: "saisie", question: "Quel est le pH de l'eau pure à 25 °C ?", reponses: ["7", "pH = 7", "pH 7"], explication: "L'eau pure est **neutre** : pH = **7** à 25 °C." },
        { type: "vf", question: "Une solution de pH 2 est plus acide qu'une solution de pH 5.", reponse: true, explication: "Plus le pH est **petit**, plus la solution est **acide** : pH 2 est plus acide que pH 5." },
        { type: "qcm", question: "Quel ion est majoritaire dans une solution basique ?", choix: ["L'ion hydroxyde HO⁻", "L'ion hydrogène H⁺", "L'ion chlorure Cl⁻", "L'ion sodium Na⁺"], reponse: 0, explication: "Une solution basique contient plus d'ions **hydroxyde HO⁻** que d'ions H⁺." },
        { type: "qcm", question: "On ajoute beaucoup d'eau à du vinaigre de pH 3. Quel pH peut-on mesurer ensuite ?", choix: ["1", "3", "9", "5"], reponse: 3, explication: "En diluant un acide, le pH **augmente** et se rapproche de 7 **sans le dépasser** : pH 5 est possible. pH 9 est impossible (la solution ne devient pas basique) ; pH 1 correspondrait à une solution plus acide." },
        { type: "vf", question: "Pour mesurer le pH avec du papier pH, on trempe la bandelette directement dans le flacon de solution.", reponse: false, explication: "On dépose **une goutte** de solution sur le papier avec un agitateur propre : tremper le papier dans le flacon pollue la solution." },
        { type: "saisie", question: "Écris la formule de l'ion responsable de l'acidité d'une solution.", reponses: ["H⁺", "H+"], explication: "C'est l'ion hydrogène **H⁺**. Une solution acide en contient plus que d'ions HO⁻." },
        { type: "qcm", question: "Pour diluer un acide concentré en toute sécurité, il faut :", choix: ["verser l'eau dans l'acide", "verser l'acide dans l'eau, avec lunettes et gants", "chauffer l'acide avant", "mélanger avec les doigts"], reponse: 1, explication: "On verse **l'acide dans l'eau** (et non l'inverse) pour éviter des projections brûlantes, en portant **lunettes, gants et blouse**." },
        { type: "redaction", question: "**Type brevet.** Un détartrant pour cafetière contient un acide. Son étiquette porte le pictogramme « corrosif ». Léo mesure son pH : 2. Il le dilue 10 fois avec de l'eau, puis mesure à nouveau le pH : 3.\n1. Le détartrant est-il acide, neutre ou basique ? Quel ion y est majoritaire ?\n2. Quelles précautions Léo doit-il prendre ?\n3. Comment évolue le pH lors de la dilution ? La solution diluée est-elle encore acide ? Justifie.\n4. Que deviendrait le pH si Léo diluait encore beaucoup ? Pourrait-il atteindre 8 ?", corrige: `1. pH = 2 < 7 : le détartrant est **acide**. Les ions **hydrogène H⁺** y sont majoritaires (plus nombreux que les ions HO⁻).

2. Le pictogramme indique un produit **corrosif** : Léo doit porter des **lunettes**, des **gants** et une blouse, et verser **le détartrant dans l'eau** pour le diluer.

3. Le pH passe de 2 à 3 : il **augmente**. La solution est **moins acide**, mais elle reste **acide** car 3 < 7.

4. En diluant encore, le pH augmenterait et se **rapprocherait de 7** sans jamais le dépasser. Il ne pourrait **pas atteindre 8** : ajouter de l'eau ne rend pas une solution basique.` },
      ],
    },
    {
      id: "tests-ions",
      titre: "Identifier des ions par des tests",
      theme: "Organisation et transformations de la matière",
      cours: `
## Le principe d'un test
Les ions sont invisibles. Pour savoir si une solution contient un ion, on réalise un **test caractéristique** : on ajoute quelques gouttes d'un **réactif** et on observe la formation d'un **précipité** (un solide qui apparaît dans le liquide et le trouble), dont la **couleur** indique l'ion présent.

>! **Protocole** : verser environ 1 cm de la solution à tester dans un **tube à essais** propre, ajouter **quelques gouttes** du réactif avec une pipette, observer. Porter lunettes et gants.

## Test à la soude (hydroxyde de sodium)
La soude contient des ions hydroxyde HO⁻. Avec certains ions métalliques, elle forme un précipité coloré :

| Ion testé | Formule | Couleur du précipité avec la soude |
|---|---|---|
| cuivre II | Cu²⁺ | **bleu** |
| fer II | Fe²⁺ | **vert** |
| fer III | Fe³⁺ | **orange-rouille** |
| zinc | Zn²⁺ | **blanc** |

(L'ion aluminium Al³⁺ donne lui aussi un précipité blanc : la soude seule ne permet pas de distinguer Zn²⁺ et Al³⁺.)

## Test au nitrate d'argent
Le **nitrate d'argent** permet de détecter l'ion **chlorure Cl⁻** : il se forme un **précipité blanc qui noircit à la lumière**. Attention, le nitrate d'argent tache la peau en noir et est dangereux pour les yeux.

## Autres tests à connaître (rappels)
| Espèce | Test | Résultat positif |
|---|---|---|
| ion H⁺ | papier pH | pH inférieur à 7 |
| dihydrogène H₂ | flamme approchée de l'ouverture du tube | petite **détonation** (« aboiement ») |
| dioxyde de carbone CO₂ | eau de chaux | l'eau de chaux se **trouble** |
| dioxygène O₂ | bûchette incandescente (qui rougeoie sans flamme) | elle se **rallume** |
| eau H₂O | sulfate de cuivre anhydre (sans eau, blanc) | il devient **bleu** |

>! **Exemple résolu** : une solution donne un précipité vert avec la soude et un précipité blanc qui noircit à la lumière avec le nitrate d'argent. Elle contient des ions **Fe²⁺** et **Cl⁻** : c'est une solution de **chlorure de fer II** (FeCl₂).

## Pourquoi un témoin ?
Pour être sûr que c'est bien l'ion recherché qui réagit, on peut faire le même test avec une solution **témoin** dont on connaît la composition, et avec de l'eau distillée (qui ne doit rien donner).

>! **Erreur fréquente** : la couleur de la **solution** ne suffit pas à identifier un ion (beaucoup de solutions sont incolores, et une couleur peut être trompeuse). Seul le **test** permet de conclure.

> **À retenir** :
> - Soude : Cu²⁺ → bleu ; Fe²⁺ → vert ; Fe³⁺ → orange-rouille ; Zn²⁺ → blanc.
> - Nitrate d'argent : Cl⁻ → précipité blanc qui noircit à la lumière.
> - Un test se fait sur un petit prélèvement, dans un tube à essais, avec lunettes et gants.
`,
      exercices: [
        { type: "qcm", question: "On ajoute de la soude à une solution : un précipité bleu se forme. La solution contient l'ion :", choix: ["Fe³⁺", "Zn²⁺", "Cl⁻", "Cu²⁺"], reponse: 3, explication: "Le précipité **bleu** avec la soude est caractéristique de l'ion **cuivre II, Cu²⁺**." },
        { type: "saisie", question: "Quel réactif utilise-t-on pour mettre en évidence les ions chlorure ?", reponses: ["nitrate d'argent", "le nitrate d'argent", "solution de nitrate d'argent", "la solution de nitrate d'argent"], explication: "Le **nitrate d'argent** donne un précipité blanc qui noircit à la lumière en présence d'ions Cl⁻." },
        { type: "qcm", question: "Quelle couleur de précipité obtient-on en ajoutant de la soude à une solution contenant des ions fer III ?", choix: ["Orange-rouille", "Vert", "Bleu", "Blanc"], reponse: 0, explication: "Fe³⁺ donne un précipité **orange-rouille**. Le précipité vert correspond à Fe²⁺ : attention à ne pas confondre les deux ions fer." },
        { type: "vf", question: "Un précipité est un solide qui se forme dans une solution lors d'un test.", reponse: true, explication: "Le précipité est un **solide** qui apparaît dans le liquide (il le trouble ou se dépose au fond)." },
        { type: "qcm", question: "On approche une flamme de l'ouverture d'un tube contenant un gaz : on entend une petite détonation. Ce gaz est :", choix: ["du dioxyde de carbone", "du dioxygène", "du dihydrogène", "de la vapeur d'eau"], reponse: 2, explication: "La petite détonation (« aboiement ») est le test du **dihydrogène H₂**." },
        { type: "vf", question: "Une solution incolore ne contient aucun ion.", reponse: false, explication: "Beaucoup de solutions ioniques sont **incolores** (eau salée : ions Na⁺ et Cl⁻). Seul un **test** permet de savoir si un ion est présent." },
        { type: "saisie", question: "Une solution donne un précipité blanc avec la soude et un précipité blanc qui noircit à la lumière avec le nitrate d'argent. On sait qu'elle ne contient pas d'aluminium. Quel est le nom de la solution ?", reponses: ["chlorure de zinc", "solution de chlorure de zinc", "ZnCl2", "ZnCl₂"], explication: "Précipité blanc avec la soude : ions **Zn²⁺** ; précipité blanc qui noircit avec le nitrate d'argent : ions **Cl⁻**. C'est une solution de **chlorure de zinc** (ZnCl₂)." },
        { type: "qcm", question: "Pour vérifier qu'un test fonctionne, on le réalise aussi :", choix: ["avec une solution témoin de composition connue", "sans réactif", "dans un flacon fermé", "en chauffant fortement"], reponse: 0, explication: "Une solution **témoin** (dont on connaît les ions) permet de vérifier la couleur attendue et de comparer." },
        { type: "redaction", question: "**Type brevet.** Au laboratoire, trois flacons ont perdu leur étiquette. On sait qu'il s'agit de : sulfate de cuivre (Cu²⁺ et SO₄²⁻), chlorure de sodium (Na⁺ et Cl⁻) et chlorure de fer III (Fe³⁺ et Cl⁻). Propose un protocole utilisant des tests d'ions pour identifier chaque flacon, avec les résultats attendus. N'oublie pas la sécurité.", corrige: `**Sécurité** : blouse, **lunettes** et **gants** (la soude est corrosive, le nitrate d'argent tache et irrite).

**Étape 1 : test à la soude.** Je numérote les flacons 1, 2, 3. Pour chacun, je verse environ 1 cm de solution dans un tube à essais propre et j'ajoute quelques gouttes de **soude**.
- Précipité **bleu** → ions Cu²⁺ : c'est le **sulfate de cuivre**.
- Précipité **orange-rouille** → ions Fe³⁺ : c'est le **chlorure de fer III**.
- **Aucun précipité** → il n'y a ni Cu²⁺ ni Fe³⁺ : c'est sans doute le **chlorure de sodium**.

**Étape 2 : confirmation au nitrate d'argent.** Sur un nouveau prélèvement du flacon restant, j'ajoute quelques gouttes de **nitrate d'argent** : un précipité **blanc qui noircit à la lumière** confirme la présence d'ions Cl⁻, donc le chlorure de sodium. (Le sulfate de cuivre, lui, ne donnerait pas ce précipité.)

**Conclusion** : je colle la bonne étiquette sur chaque flacon.

> Un bon protocole précise : quantités, matériel (tubes à essais, pipette), réactif, observation attendue et conclusion pour chaque cas.` },
      ],
    },
    {
      id: "acides-metaux",
      titre: "Réaction entre un acide et un métal",
      theme: "Organisation et transformations de la matière",
      cours: `
## L'expérience : acide chlorhydrique et fer
On verse de l'**acide chlorhydrique** (ions H⁺ et Cl⁻) sur de la **poudre de fer** dans un tube à essais.

**Observations** :
- une **effervescence** (des bulles de gaz) apparaît ;
- le tube **chauffe** légèrement ;
- le fer **disparaît** peu à peu ;
- la solution prend une teinte **vert pâle**.

**Tests** :
- le gaz produit une petite **détonation** à l'approche d'une flamme : c'est du **dihydrogène H₂** ;
- la solution donne un précipité **vert** avec la soude : il s'est formé des ions **fer II, Fe²⁺** ;
- le **pH augmente** (il passe par exemple de 1 à 3) : des ions **H⁺ ont été consommés** ;
- le test au nitrate d'argent est positif **avant et après** la réaction : les ions **Cl⁻** sont toujours là, ils ne participent pas à la réaction. On les appelle des **ions spectateurs**.

## L'équation de la réaction
- Réactifs : le fer Fe et les ions hydrogène H⁺.
- Produits : le dihydrogène H₂ et les ions fer II Fe²⁺.

~~~
Fe + 2 H⁺  →  Fe²⁺ + H₂
~~~

Dans une équation avec des ions, on conserve les **atomes** et aussi les **charges** : à gauche, 2 charges + (2 H⁺) ; à droite, 2 charges + (Fe²⁺).

## Avec d'autres métaux
| Métal | Réaction avec l'acide chlorhydrique | Équation |
|---|---|---|
| Zinc | oui, dégagement de H₂ | Zn + 2 H⁺ → Zn²⁺ + H₂ |
| Aluminium | oui, dégagement de H₂ | 2 Al + 6 H⁺ → 2 Al³⁺ + 3 H₂ |
| Cuivre | **non** (pas de réaction) | — |
| Or | non | — |

## Conséquences pratiques
- On ne conserve **pas d'acides dans des récipients métalliques** (fer, zinc, aluminium) : ils seraient attaqués.
- Les aliments acides (citron, vinaigre, tomate) peuvent attaquer certaines boîtes et casseroles métalliques : les boîtes de conserve sont protégées par un vernis.
- Le dihydrogène est un gaz **inflammable** et explosif mélangé à l'air : on travaille en petites quantités, loin des flammes (sauf pour le test, réalisé sur un petit volume).

>! **Erreurs fréquentes** :
>! - Le gaz formé n'est pas du dioxygène ni du dioxyde de carbone : c'est du **dihydrogène**.
>! - Le fer ne « fond » pas dans l'acide : il est **transformé** en ions Fe²⁺. C'est une transformation **chimique**.

> **À retenir** :
> - Acide + certains métaux (fer, zinc, aluminium) → dihydrogène + ions métalliques.
> - Fe + 2 H⁺ → Fe²⁺ + H₂. Les ions Cl⁻ sont spectateurs.
> - Les ions H⁺ sont consommés : le pH augmente.
> - Une équation avec des ions conserve les atomes et les charges.
`,
      exercices: [
        { type: "qcm", question: "Quel gaz se dégage quand on verse de l'acide chlorhydrique sur du fer ?", choix: ["Du dioxygène", "Du dioxyde de carbone", "Du diazote", "Du dihydrogène"], reponse: 3, explication: "Il se forme du **dihydrogène H₂**, reconnaissable à la petite détonation à l'approche d'une flamme." },
        { type: "vf", question: "Pendant la réaction entre l'acide chlorhydrique et le fer, le pH de la solution augmente.", reponse: true, explication: "Les ions **H⁺ sont consommés** : la solution devient moins acide, son pH **augmente**." },
        { type: "qcm", question: "Après la réaction entre le fer et l'acide chlorhydrique, on ajoute de la soude à la solution : un précipité vert apparaît. Il montre la présence d'ions :", choix: ["Fe²⁺", "Fe³⁺", "Cu²⁺", "H⁺"], reponse: 0, explication: "Le précipité **vert** avec la soude caractérise les ions **fer II, Fe²⁺**, formés pendant la réaction." },
        { type: "saisie", question: "Comment appelle-t-on les ions Cl⁻, présents avant et après la réaction sans y participer ?", reponses: ["ions spectateurs", "spectateurs", "des ions spectateurs", "spectateur"], explication: "Ce sont des **ions spectateurs** : ils sont présents dans la solution mais n'apparaissent pas dans l'équation." },
        { type: "qcm", question: "Quelle équation modélise la réaction du zinc avec l'acide chlorhydrique ?", choix: ["Zn + H⁺ → Zn²⁺ + H₂", "Zn + 2 Cl⁻ → ZnCl₂", "Zn + 2 H⁺ → Zn²⁺ + H₂", "Zn + O₂ → ZnO₂"], reponse: 2, explication: "**Zn + 2 H⁺ → Zn²⁺ + H₂** conserve les atomes (1 Zn, 2 H) et les charges (2 + de chaque côté). Avec un seul H⁺, ni les H ni les charges ne sont conservés." },
        { type: "vf", question: "Le cuivre réagit avec l'acide chlorhydrique en produisant du dihydrogène.", reponse: false, explication: "Le **cuivre ne réagit pas** avec l'acide chlorhydrique (l'or non plus). Le fer, le zinc et l'aluminium, eux, réagissent." },
        { type: "saisie", question: "Complète l'équation ajustée : 2 Al + 6 H⁺ → 2 Al³⁺ + … H₂. Quel coefficient faut-il devant H₂ ?", reponses: ["3", "3 H2", "3 H₂"], explication: "À gauche : 6 atomes H. À droite, chaque H₂ en contient 2 : il faut **3** H₂ (3 × 2 = 6). Charges : 6 + à gauche, 2 × 3 = 6 + à droite." },
        { type: "qcm", question: "Pourquoi ne faut-il pas conserver du vinaigre dans une boîte en fer non protégée ?", choix: ["Le vinaigre gèlerait", "Le vinaigre, acide, attaquerait le fer", "Le fer rendrait le vinaigre basique instantanément", "Le vinaigre deviendrait du dioxygène"], reponse: 1, explication: "Le vinaigre est **acide** : ses ions H⁺ réagissent avec le fer, qui est **attaqué** (il se forme des ions fer et du dihydrogène)." },
        { type: "redaction", question: "**Type brevet.** Dans un tube à essais, on place de la poudre de fer et on ajoute de l'acide chlorhydrique de pH 1. On observe une effervescence. À la fin, le pH vaut 3.\n1. Quel test permet d'identifier le gaz formé ? Quel est ce gaz ?\n2. Comment montrer qu'il s'est formé des ions fer II ?\n3. Que montre l'évolution du pH ?\n4. Écris l'équation de la réaction et vérifie qu'elle est ajustée.\n5. Est-ce une transformation chimique ? Justifie.", corrige: `1. On approche une **flamme** de l'ouverture du tube : une petite **détonation** indique du **dihydrogène H₂**.

2. On prélève un peu de solution et on ajoute quelques gouttes de **soude** : un **précipité vert** montre la présence d'ions **Fe²⁺**.

3. Le pH passe de 1 à 3 : il **augmente**, la solution est moins acide. Des ions **H⁺ ont été consommés** : ce sont des réactifs.

4. **Fe + 2 H⁺ → Fe²⁺ + H₂**.
- Atomes : 1 Fe et 2 H de chaque côté.
- Charges : 2 + à gauche (2 H⁺), 2 + à droite (Fe²⁺).
L'équation est **ajustée**.

5. Oui : des réactifs (fer, ions H⁺) **disparaissent** et de nouvelles espèces (dihydrogène, ions Fe²⁺) **apparaissent**. C'est une **transformation chimique**.` },
      ],
    },
    {
      id: "masse-volumique",
      titre: "Masse volumique : calculer et identifier",
      theme: "Organisation et transformations de la matière",
      cours: `
## Rappel : la formule
La **masse volumique** ρ (« rhô ») d'une matière est la masse d'une unité de volume de cette matière.

> **ρ = m / V** donc **m = ρ × V** et **V = m / ρ**

C'est une grandeur **caractéristique** d'une espèce chimique (à une température donnée) : elle permet d'**identifier** un matériau ou un liquide.

## Les unités et les conversions
| Unité de m | Unité de V | Unité de ρ |
|---|---|---|
| g | cm³ (ou mL) | g/cm³ (ou g/mL) |
| kg | m³ | kg/m³ |
| kg | L | kg/L |
| g | L | g/L |

Équivalences utiles : **1 g/cm³ = 1 kg/L = 1 000 g/L = 1 000 kg/m³**.

>! **Pourquoi 1 g/cm³ = 1 000 kg/m³ ?** 1 m³ = 1 000 000 cm³. Un matériau de 1 g/cm³ a une masse de 1 000 000 g = 1 000 kg par m³.

## Quelques valeurs (à 20 °C)
| Matière | ρ en g/cm³ | ρ en kg/m³ |
|---|---|---|
| Air | 0,0012 | 1,2 |
| Éthanol (alcool) | 0,79 | 790 |
| Huile | environ 0,92 | environ 920 |
| Glace (à 0 °C) | environ 0,92 | environ 920 |
| Eau | 1,0 | 1 000 |
| Aluminium | 2,7 | 2 700 |
| Fer | 7,9 | 7 900 |
| Cuivre | 8,96 | 8 960 |
| Plomb | 11,3 | 11 300 |
| Or | 19,3 | 19 300 |

## Flotter ou couler
- Un objet **plein** flotte sur un liquide si sa masse volumique est **inférieure** à celle du liquide.
- Deux liquides **non miscibles** (qui ne se mélangent pas) se superposent : le moins dense est **au-dessus** (l'huile flotte sur l'eau).

>! **Méthode pour identifier un matériau** :
>! 1. Mesurer la masse m avec une balance.
>! 2. Mesurer le volume V (déplacement d'eau dans une éprouvette, ou calcul pour un cube : V = côté³).
>! 3. Calculer ρ = m / V dans des unités cohérentes.
>! 4. Comparer avec un tableau de valeurs.
>! **Exemple** : une bague de 9,65 g a un volume de 0,5 cm³. ρ = 9,65 ÷ 0,5 = 19,3 g/cm³ : elle est en **or**.

>! **Erreurs fréquentes** :
>! - Mélanger les unités (masse en kg et volume en cm³) : convertir d'abord !
>! - Croire qu'un objet lourd coule toujours : un énorme bateau en acier flotte car il est **creux** (rempli d'air), sa masse volumique moyenne est inférieure à celle de l'eau.

> **À retenir** :
> - ρ = m / V ; m = ρ × V ; V = m / ρ.
> - 1 g/cm³ = 1 kg/L = 1 000 kg/m³. L'eau : 1 g/cm³.
> - La masse volumique permet d'identifier une matière et de prévoir si un objet flotte.
`,
      exercices: [
        { type: "saisie", question: "Convertis 2,7 g/cm³ en kg/m³.", reponses: ["2700 kg/m³", "2 700 kg/m³", "2700 kg/m3", "2 700 kg/m3"], explication: "1 g/cm³ = 1 000 kg/m³, donc 2,7 g/cm³ = 2,7 × 1 000 = **2 700 kg/m³** (masse volumique de l'aluminium)." },
        { type: "qcm", question: "Une bague a une masse de 9,65 g et un volume de 0,5 cm³. En quel métal est-elle ?", choix: ["Argent (10,5 g/cm³)", "Cuivre (8,96 g/cm³)", "Or (19,3 g/cm³)", "Aluminium (2,7 g/cm³)"], reponse: 2, explication: "ρ = m / V = 9,65 ÷ 0,5 = **19,3 g/cm³** : c'est la masse volumique de l'**or**." },
        { type: "vf", question: "L'huile flotte sur l'eau car sa masse volumique est inférieure à celle de l'eau.", reponse: true, explication: "Huile : environ 0,92 g/cm³ ; eau : 1 g/cm³. Le liquide le moins dense se place **au-dessus**." },
        { type: "saisie", question: "Quelle est la masse de 2 m³ d'air ? (ρ de l'air = 1,2 kg/m³ ; réponse en kg)", reponses: ["2,4 kg", "2.4 kg", "2,4 kilogrammes"], explication: "m = ρ × V = 1,2 × 2 = **2,4 kg**. L'air a bien une masse !" },
        { type: "qcm", question: "Dans une éprouvette, on verse de l'eau (1 g/cm³) puis de l'huile (0,92 g/cm³), qui ne se mélangent pas. On y lâche une bille pleine en plastique de masse volumique 0,95 g/cm³. Où s'arrête-t-elle ?", choix: ["Au fond de l'éprouvette", "À la surface de l'huile", "Entre la couche d'huile et la couche d'eau", "Elle reste en haut, au-dessus de l'huile"], reponse: 2, explication: "0,95 g/cm³ est plus grand que 0,92 g/cm³ : la bille **coule dans l'huile**. Mais 0,95 g/cm³ est plus petit que 1 g/cm³ : elle **flotte sur l'eau**. Elle s'arrête donc **à la limite entre l'huile et l'eau**." },
        { type: "saisie", question: "Quel volume occupent 500 g d'éthanol (ρ = 0,79 g/cm³) ? Arrondis à l'unité, en cm³.", reponses: ["633 cm³", "633 cm3", "633 mL"], explication: "V = m / ρ = 500 ÷ 0,79 ≈ **633 cm³** (soit environ 633 mL)." },
        { type: "vf", question: "Un paquebot en acier flotte car l'acier a une masse volumique inférieure à celle de l'eau.", reponse: false, explication: "L'acier (environ 7,9 g/cm³) est bien plus dense que l'eau. Le bateau flotte car il est **creux** : avec l'air qu'il contient, sa masse volumique **moyenne** est inférieure à celle de l'eau." },
        { type: "qcm", question: "1 L d'une huile a une masse de 920 g. Sa masse volumique vaut :", choix: ["920 kg/m³", "9,2 g/cm³", "0,092 kg/L", "92 g/L"], reponse: 0, explication: "ρ = 920 g/L = 0,92 kg/L = 0,92 g/cm³ = **920 kg/m³**. Les autres valeurs sont mal converties." },
        { type: "redaction", question: "**Type brevet.** Lina dispose d'un petit cube métallique de 3 cm de côté. Sa masse est de 242 g.\nDonnées : aluminium 2,7 g/cm³ ; fer 7,9 g/cm³ ; cuivre 8,96 g/cm³ ; plomb 11,3 g/cm³.\n1. Calcule le volume du cube.\n2. Calcule sa masse volumique (arrondie au centième).\n3. Identifie le métal.\n4. Le cube flotte-t-il sur l'eau ? Et sur le mercure (13,5 g/cm³) ? Justifie.", corrige: `1. **Volume** : V = 3 × 3 × 3 = **27 cm³**.

2. **Masse volumique** : ρ = m / V = 242 ÷ 27 ≈ **8,96 g/cm³**.

3. Cette valeur correspond au **cuivre** (8,96 g/cm³).

4. **Sur l'eau** : 8,96 g/cm³ > 1 g/cm³, le cube **coule**.
**Sur le mercure** : 8,96 g/cm³ < 13,5 g/cm³, le cube **flotte** (étonnant, mais vrai : le mercure est un liquide très dense).

> Méthode : formule, application numérique avec unités, résultat arrondi, puis comparaison avec les données pour conclure.` },
      ],
    },
    {
      id: "univers-elements",
      titre: "L'Univers et l'origine des éléments chimiques",
      theme: "Organisation et transformations de la matière",
      cours: `
## La structure de l'Univers
L'Univers est organisé en structures emboîtées, de plus en plus grandes :
- les **planètes** tournent autour des **étoiles** (la Terre autour du Soleil) ;
- le **système solaire** est une petite partie de notre **galaxie**, la **Voie lactée**, qui compte plus de **100 milliards d'étoiles** et mesure environ **100 000 années-lumière** de diamètre ;
- l'Univers observable contient des **centaines de milliards de galaxies**.

Entre ces objets, il y a surtout du **vide** : comme l'atome, l'Univers a une structure **lacunaire**.

## Des distances immenses
| Distance | Valeur approximative |
|---|---|
| Terre – Lune | 384 000 km |
| Terre – Soleil | 150 millions de km (1,5 × 10⁸ km) |
| Soleil – étoile la plus proche (Proxima du Centaure) | 4,2 années-lumière |
| Diamètre de la Voie lactée | environ 100 000 années-lumière |

Une **année-lumière** (al) est la **distance** parcourue par la lumière en un an : environ **9,46 × 10¹² km**. C'est une unité de **distance**, pas de durée (voir le chapitre sur les signaux lumineux).

## L'histoire de l'Univers
- Il y a environ **13,8 milliards d'années**, l'Univers était extrêmement chaud et dense : c'est le **Big Bang**. Depuis, il est en **expansion** (il « grandit ») et se refroidit.
- Dans les premières minutes se sont formés les noyaux des éléments les plus légers : surtout l'**hydrogène** et l'**hélium**. Aujourd'hui encore, ce sont les éléments les plus abondants de l'Univers (environ 3/4 et 1/4 de la masse de la matière ordinaire).
- Les **étoiles** se sont formées plus tard, à partir de nuages de gaz.
- Le Soleil et le système solaire se sont formés il y a environ **4,6 milliards d'années**.

## Les étoiles, usines à éléments
Au cœur des étoiles, la température atteint des millions de degrés : des noyaux légers **fusionnent** pour en former de plus lourds (hydrogène → hélium → carbone, oxygène... jusqu'au fer). C'est la **fusion nucléaire**, qui fait briller les étoiles.

Les éléments plus lourds que le fer (or, plomb, uranium...) se forment surtout lors d'événements violents : **explosions d'étoiles** (supernovas) et collisions d'étoiles à neutrons. Ces explosions dispersent les éléments dans l'espace ; de nouvelles étoiles et planètes se forment ensuite à partir de cette matière.

>! **Conséquence** : les atomes de carbone, d'oxygène, de fer... qui composent la Terre et ton corps ont été fabriqués dans des étoiles disparues avant la naissance du Soleil. On dit que nous sommes faits de **« poussières d'étoiles »**.

## Les mêmes éléments partout
Les éléments chimiques sont les **mêmes dans tout l'Univers** : on retrouve sur Terre, dans le Soleil et dans les étoiles lointaines les éléments de la classification périodique. On le sait grâce à l'analyse de la lumière des étoiles. En revanche, leurs **proportions** diffèrent : le Soleil est surtout fait d'hydrogène et d'hélium ; la Terre surtout de fer, d'oxygène, de silicium et de magnésium ; le corps humain surtout d'oxygène, de carbone, d'hydrogène et d'azote.

> **À retenir** :
> - Univers : planètes, étoiles, galaxies (Voie lactée), séparées par du vide.
> - Big Bang il y a environ 13,8 milliards d'années ; hydrogène et hélium formés en premier.
> - Les éléments plus lourds sont fabriqués dans les étoiles (fusion) et lors de leurs explosions.
> - Les éléments chimiques sont les mêmes partout dans l'Univers.
`,
      exercices: [
        { type: "qcm", question: "Quels sont les deux éléments les plus abondants de l'Univers ?", choix: ["L'oxygène et le carbone", "Le fer et le silicium", "L'azote et l'oxygène", "L'hydrogène et l'hélium"], reponse: 3, explication: "L'**hydrogène** et l'**hélium**, formés juste après le Big Bang, représentent l'essentiel de la matière ordinaire de l'Univers." },
        { type: "vf", question: "L'année-lumière est une unité de durée.", reponse: false, explication: "C'est une unité de **distance** : la distance parcourue par la lumière en un an, environ 9,46 × 10¹² km." },
        { type: "saisie", question: "Il y a environ combien de milliards d'années a eu lieu le Big Bang ?", reponses: ["13,8", "13,8 milliards", "13,8 milliards d'années"], explication: "Le Big Bang date d'environ **13,8 milliards d'années**." },
        { type: "qcm", question: "Où se forment les atomes de carbone et d'oxygène présents dans notre corps ?", choix: ["Dans le noyau de la Terre", "Au cœur des étoiles", "Dans l'atmosphère terrestre", "Dans les océans"], reponse: 1, explication: "Ils ont été fabriqués par **fusion nucléaire au cœur d'étoiles** aujourd'hui disparues, puis dispersés dans l'espace." },
        { type: "qcm", question: "Dans quel ordre, du plus petit au plus grand, ranges-tu ces structures ?", choix: ["Galaxie, système solaire, Terre, Univers", "Terre, galaxie, système solaire, Univers", "Terre, système solaire, galaxie, Univers", "Système solaire, Terre, galaxie, Univers"], reponse: 2, explication: "La **Terre** fait partie du **système solaire**, qui fait partie de la **Voie lactée** (une galaxie), elle-même une parmi des centaines de milliards dans l'**Univers**." },
        { type: "vf", question: "Les éléments chimiques présents dans les étoiles lointaines sont différents de ceux de la classification périodique.", reponse: false, explication: "Les éléments chimiques sont **les mêmes dans tout l'Univers**. Seules leurs proportions changent d'un astre à l'autre." },
        { type: "saisie", question: "Quel est le nom de notre galaxie ?", reponses: ["Voie lactée", "la Voie lactée"], explication: "Notre galaxie est la **Voie lactée** ; elle contient plus de 100 milliards d'étoiles, dont le Soleil." },
        { type: "qcm", question: "Quel phénomène fait briller les étoiles et fabrique de nouveaux éléments ?", choix: ["La combustion du charbon", "La fusion nucléaire", "Les réactions entre acides et métaux", "La fonte des glaces"], reponse: 1, explication: "Au cœur des étoiles, des noyaux légers **fusionnent** pour former des noyaux plus lourds en libérant énormément d'énergie : c'est la **fusion nucléaire**." },
        { type: "redaction", question: "**Type brevet.** Un astrophysicien a dit : « Nous sommes des poussières d'étoiles. »\nÀ l'aide de tes connaissances, explique cette phrase en quelques lignes : quels éléments sont apparus après le Big Bang, où et comment se sont formés les éléments plus lourds comme le carbone, l'oxygène ou le fer, et comment ils se sont retrouvés sur Terre.", corrige: `- Après le **Big Bang** (il y a environ 13,8 milliards d'années), seuls les éléments les plus légers se sont formés : surtout l'**hydrogène** et l'**hélium**.

- Les éléments plus lourds (**carbone, oxygène, fer**...) ont été fabriqués plus tard, **au cœur des étoiles**, par **fusion nucléaire** : des noyaux légers s'assemblent en noyaux plus lourds. Les éléments encore plus lourds (or, uranium) se forment surtout lors des **explosions d'étoiles** (supernovas) et des collisions d'étoiles à neutrons.

- Quand ces étoiles meurent, elles **dispersent** ces éléments dans l'espace sous forme de gaz et de poussières. Il y a environ 4,6 milliards d'années, le **Soleil et les planètes**, dont la Terre, se sont formés à partir d'un nuage contenant ces poussières.

- Les atomes de carbone et d'oxygène de notre corps viennent donc d'**étoiles disparues** : nous sommes bien faits de « poussières d'étoiles ».` },
      ],
    },
    {
      id: "mouvement-vitesse",
      titre: "Décrire un mouvement : référentiel et vitesse",
      theme: "Mouvement et interactions",
      cours: `
## Le référentiel
Un mouvement se décrit toujours **par rapport à un objet de référence**, appelé **référentiel**. Selon le référentiel, un même objet peut être immobile ou en mouvement : c'est la **relativité du mouvement**.
- Le **référentiel terrestre** : le sol, un bâtiment, un arbre... (pour les mouvements de la vie courante).
- Le **référentiel héliocentrique** : centré sur le Soleil (pour étudier le mouvement des planètes).

>! **Exemple** : dans un train qui roule, un voyageur assis est **immobile** dans le référentiel du train, mais **en mouvement** dans le référentiel terrestre (par rapport au quai).

## Trajectoire et nature du mouvement
Pour décrire un mouvement, on donne :
- la **trajectoire** : **rectiligne** (droite), **circulaire** (cercle) ou **curviligne** (courbe quelconque) ;
- l'évolution de la **vitesse**, caractérisée par sa **direction**, son **sens** et sa **valeur** : **uniforme** (constante), **accéléré** (la vitesse augmente) ou **ralenti** (la vitesse diminue).

On combine les deux : une voiture qui démarre en ligne droite a un mouvement **rectiligne accéléré** ; un point d'un manège qui tourne régulièrement a un mouvement **circulaire uniforme**.

## La chronophotographie
Une **chronophotographie** superpose les positions d'un objet à **intervalles de temps égaux** (par exemple toutes les 0,1 s).
- Points **régulièrement espacés** → uniforme.
- Points de plus en plus **espacés** → accéléré.
- Points de plus en plus **rapprochés** → ralenti.

## Calculer une vitesse moyenne
> **v = d / t** ; donc **d = v × t** et **t = d / v**

| d | t | v |
|---|---|---|
| m | s | m/s |
| km | h | km/h |

>! **Conversions** : 1 m/s = 3,6 km/h. De m/s vers km/h : × 3,6 ; de km/h vers m/s : ÷ 3,6.
>! Exemple : 90 km/h = 90 ÷ 3,6 = **25 m/s**.

>! **Exemple résolu (chronophotographie)** : une bille est photographiée toutes les 0,1 s ; deux positions successives sont séparées de 5 cm. v = 0,05 m ÷ 0,1 s = **0,5 m/s**.

## Lire un graphique distance-temps
Si la courbe de la distance parcourue en fonction du temps est une **droite passant par l'origine**, la distance est **proportionnelle** à la durée : le mouvement est **uniforme**. Plus la droite est pentue, plus la vitesse est grande.

## Vitesse et sécurité routière
La **distance d'arrêt** d'un véhicule est la somme de deux distances :
- la **distance de réaction** (DR), parcourue pendant le temps de réaction du conducteur (environ 1 s), à vitesse constante : DR = v × t ;
- la **distance de freinage** (DF), parcourue pendant le freinage.
DA = DR + DF. Les deux augmentent avec la vitesse ; la fatigue, l'alcool ou le téléphone augmentent le temps de réaction, une route mouillée augmente la distance de freinage.

>! **Erreurs fréquentes** :
>! - Oublier de convertir : 30 min = 0,5 h ; 1 h 15 min = 1,25 h (pas 1,15 h !).
>! - Un mouvement circulaire peut être uniforme : la **valeur** de la vitesse est constante, seule sa direction change.

> **À retenir** :
> - Le mouvement dépend du référentiel.
> - Trajectoire (rectiligne, circulaire, curviligne) + vitesse (uniforme, accéléré, ralenti).
> - v = d / t ; 1 m/s = 3,6 km/h.
> - Distance d'arrêt = distance de réaction + distance de freinage.
`,
      exercices: [
        { type: "vf", question: "Un passager assis dans un avion en vol est immobile dans le référentiel de l'avion.", reponse: true, explication: "Sa position ne change pas **par rapport à l'avion**. Dans le référentiel terrestre, en revanche, il se déplace très vite." },
        { type: "qcm", question: "Sur une chronophotographie, les positions d'un skateur sont de plus en plus rapprochées. Son mouvement est :", choix: ["ralenti", "uniforme", "accéléré", "immobile"], reponse: 0, explication: "Pendant des durées égales, il parcourt des distances de plus en plus petites : sa vitesse diminue, le mouvement est **ralenti**." },
        { type: "saisie", question: "Convertis 90 km/h en m/s.", reponses: ["25 m/s", "25 m.s-1", "25 m·s⁻¹"], explication: "90 ÷ 3,6 = **25 m/s**." },
        { type: "saisie", question: "Une bille est photographiée toutes les 0,1 s. Deux positions successives sont distantes de 4 cm. Quelle est sa vitesse en m/s ?", reponses: ["0,4 m/s", "0.4 m/s", "0,4 m.s-1"], explication: "4 cm = 0,04 m. v = d / t = 0,04 ÷ 0,1 = **0,4 m/s**." },
        { type: "qcm", question: "Le mouvement d'un point d'une grande roue qui tourne à vitesse constante est, dans le référentiel terrestre :", choix: ["rectiligne uniforme", "circulaire accéléré", "rectiligne ralenti", "circulaire uniforme"], reponse: 3, explication: "La trajectoire est un **cercle** et la valeur de la vitesse est constante : mouvement **circulaire uniforme**." },
        { type: "saisie", question: "Un conducteur roule à 25 m/s. Son temps de réaction est de 1 s. Quelle distance parcourt-il avant de commencer à freiner ? (en m)", reponses: ["25 m", "25 mètres"], explication: "Pendant le temps de réaction, la vitesse ne change pas : DR = v × t = 25 × 1 = **25 m**." },
        { type: "qcm", question: "Un train parcourt 450 km en 1 h 30 min. Sa vitesse moyenne est :", choix: ["300 km/h", "346 km/h", "675 km/h", "450 km/h"], reponse: 0, explication: "1 h 30 min = **1,5 h** (et non 1,3 h). v = 450 ÷ 1,5 = **300 km/h**." },
        { type: "vf", question: "Si le graphique de la distance parcourue en fonction du temps est une droite passant par l'origine, le mouvement est accéléré.", reponse: false, explication: "Une droite passant par l'origine traduit une distance **proportionnelle** au temps : la vitesse est constante, le mouvement est **uniforme**." },
        { type: "redaction", question: "**Type brevet.** Le 16 août 2009 à Berlin, Usain Bolt a couru le 100 m en 9,58 s (record du monde toujours valable).\n1. Calcule sa vitesse moyenne en m/s (arrondie au centième), puis en km/h (arrondie au dixième).\n2. Pendant la course, sa vitesse n'est pas constante : il part arrêté. Décris la nature de son mouvement au départ, dans le référentiel terrestre.\n3. Une voiture roule à 50 km/h en ville. Bolt pourrait-il la dépasser ? Justifie.", corrige: `1. **Vitesse moyenne** : v = d / t = 100 ÷ 9,58 ≈ **10,44 m/s**.
En km/h : 10,44 × 3,6 ≈ **37,6 km/h** (calcul exact : 100 ÷ 9,58 × 3,6 ≈ 37,58).

2. Au départ, la trajectoire est une **droite** (couloir rectiligne) et sa vitesse **augmente** : le mouvement est **rectiligne accéléré**.

3. Sa vitesse moyenne (37,6 km/h) est **inférieure** à 50 km/h. Même si sa vitesse maximale pendant la course est un peu plus élevée (environ 44 km/h), elle reste inférieure à 50 km/h : il **ne pourrait pas** dépasser la voiture.

> Méthode : formule, conversion, application numérique, résultat avec unité, puis phrase de conclusion.` },
      ],
    },
    {
      id: "interactions-forces",
      titre: "Interactions et forces",
      theme: "Mouvement et interactions",
      cours: `
## Actions et interactions
Un objet A exerce une **action mécanique** sur un objet B s'il peut **modifier son mouvement** (le mettre en mouvement, l'arrêter, changer sa vitesse ou sa trajectoire) ou le **déformer**.

Une action n'est jamais à sens unique : si A agit sur B, alors B agit aussi sur A. On parle d'**interaction**.

| Type d'interaction | Exemples |
|---|---|
| **de contact** (A et B se touchent) | le pied qui frappe le ballon, la table qui soutient un livre, les frottements de l'air |
| **à distance** (sans contact) | l'attraction de la Terre sur la Lune (gravitation), un aimant qui attire un clou, un ballon frotté qui attire des cheveux (électrique) |

## Le diagramme objet-interaction
Pour étudier un objet, on le place au centre d'un schéma (le **système étudié**) et on le relie à tous les objets qui interagissent avec lui :
- un **trait plein** pour une interaction de **contact** ;
- un **trait en pointillés** pour une interaction **à distance**.

>! **Exemple** : un livre posé sur une table. Il interagit avec la **table** (contact, trait plein) et avec la **Terre** (à distance, pointillés).

## Modéliser une action par une force
Une action mécanique est modélisée par une **force**, caractérisée par :
1. son **point d'application** (là où elle s'exerce) ;
2. sa **direction** (la droite selon laquelle elle agit : verticale, horizontale...) ;
3. son **sens** (vers le haut, vers la droite...) ;
4. sa **valeur**, en **newtons (N)**, mesurée avec un **dynamomètre**.

On la représente par un **segment fléché** (un vecteur) qui part du point d'application, avec la bonne direction et le bon sens, et dont la **longueur** est proportionnelle à la valeur, selon une **échelle** choisie (par exemple 1 cm pour 10 N).

On note la force exercée par A sur B : **F A/B** (on écrit souvent une petite flèche au-dessus).

## Les deux forces d'une interaction
Dans une interaction entre A et B, les deux forces F A/B et F B/A ont **la même direction**, **la même valeur** et des **sens opposés**.

>! **Exemple** : quand tu pousses un mur avec une force de 50 N, le mur te pousse aussi avec une force de 50 N, dans le sens opposé. Sur des rollers, tu recules !

## Forces et mouvement
- Si les forces qui s'exercent sur un objet **se compensent**, l'objet est **immobile** ou en **mouvement rectiligne uniforme**.
- Si elles **ne se compensent pas**, la vitesse et/ou la trajectoire de l'objet **changent**.

Au brevet, on utilise surtout le premier cas pour un objet **immobile** (situation d'équilibre). Le cas du mouvement rectiligne uniforme (le **principe d'inertie**) est « pour aller plus loin » : il sera étudié en seconde.

>! **Exemple** : le livre immobile sur la table subit son poids (vers le bas) et l'action de la table (vers le haut) : ces deux forces se compensent.

>! **Erreurs fréquentes** :
>! - Une force n'est pas « la force de l'objet » : c'est l'action d'un objet **sur un autre**. Toujours préciser qui agit sur qui.
>! - Un objet en mouvement n'a pas besoin d'une force « qui le pousse » pour continuer à avancer à vitesse constante en ligne droite.

> **À retenir** :
> - Interaction de contact ou à distance ; diagramme objet-interaction.
> - Force : point d'application, direction, sens, valeur en newtons (N), mesurée au dynamomètre.
> - F A/B et F B/A : même direction, même valeur, sens opposés.
> - Forces qui se compensent : immobile ou mouvement rectiligne uniforme.
`,
      exercices: [
        { type: "qcm", question: "Parmi ces actions, laquelle est une action à distance ?", choix: ["Un pied qui frappe un ballon", "L'attraction d'un clou par un aimant", "Un vent qui pousse une voile", "Une main qui tire une corde"], reponse: 1, explication: "L'aimant attire le clou **sans le toucher** : c'est une action **à distance**. Les autres actions nécessitent un contact." },
        { type: "saisie", question: "Quelle est l'unité de la valeur d'une force ?", reponses: ["newton", "le newton", "N", "newtons"], explication: "La valeur d'une force s'exprime en **newtons (N)**, du nom du physicien Isaac Newton." },
        { type: "saisie", question: "Quel instrument permet de mesurer la valeur d'une force ?", reponses: ["dynamomètre", "un dynamomètre", "le dynamomètre"], explication: "On mesure une force avec un **dynamomètre** (un ressort gradué en newtons)." },
        { type: "vf", question: "Quand la Terre attire la Lune, la Lune attire aussi la Terre, avec une force de même valeur.", reponse: true, explication: "C'est une **interaction** : les deux forces ont la même direction, la **même valeur** et des sens opposés." },
        { type: "qcm", question: "Dans un diagramme objet-interaction, une interaction à distance se représente par :", choix: ["un trait plein", "une flèche rouge", "un trait en pointillés", "un cercle"], reponse: 2, explication: "Contact : **trait plein** ; à distance : **trait en pointillés**." },
        { type: "qcm", question: "Avec l'échelle 1 cm pour 20 N, quelle longueur doit avoir la flèche représentant une force de 70 N ?", choix: ["7 cm", "1,4 cm", "14 cm", "3,5 cm"], reponse: 3, explication: "Longueur = 70 ÷ 20 = **3,5 cm**." },
        { type: "vf", question: "Une voiture qui roule en ligne droite à vitesse constante est soumise à des forces qui se compensent.", reponse: true, explication: "Mouvement **rectiligne uniforme** : les forces (poids, action de la route, force motrice, frottements) **se compensent**. C'est le **principe d'inertie**, notion « pour aller plus loin » qui sera approfondie en seconde." },
        { type: "qcm", question: "Quelles sont les quatre caractéristiques d'une force ?", choix: ["Masse, volume, vitesse, durée", "Point d'application, direction, sens, valeur", "Couleur, longueur, sens, unité", "Point de départ, point d'arrivée, vitesse, masse"], reponse: 1, explication: "Une force est décrite par son **point d'application**, sa **direction**, son **sens** et sa **valeur** (en N)." },
        { type: "redaction", question: "**Type brevet.** Une lampe de masse 0,5 kg est suspendue au plafond par un fil. Elle est immobile.\n1. Avec quels objets la lampe interagit-elle ? Dessine (ou décris) le diagramme objet-interaction en précisant le type de chaque interaction.\n2. La Terre exerce sur la lampe une force verticale, vers le bas, de valeur 4,9 N. Donne les caractéristiques de la force exercée par le fil sur la lampe. Justifie.\n3. Représente (ou décris) les deux forces avec l'échelle 1 cm pour 2 N.", corrige: `1. **Diagramme objet-interaction** : la lampe (au centre) interagit avec :
- le **fil** : interaction de **contact** (trait plein) ;
- la **Terre** : interaction **à distance** (trait en pointillés).
(L'air exerce aussi une action, négligeable ici.)

2. La lampe est **immobile** : les forces qui s'exercent sur elle **se compensent**. La force du fil a donc :
- pour point d'application : le point d'attache du fil sur la lampe ;
- pour direction : la **verticale** (celle du fil) ;
- pour sens : **vers le haut** ;
- pour valeur : **4,9 N**, la même que celle de la force exercée par la Terre.

3. **Représentation** : longueur = 4,9 ÷ 2 = 2,45 cm, soit environ **2,5 cm** pour chaque flèche. Une flèche verticale de 2,5 cm vers le bas (force de la Terre, partant du centre de la lampe) et une flèche verticale de 2,5 cm vers le haut (force du fil, partant du point d'attache).` },
      ],
    },
    {
      id: "gravitation-poids",
      titre: "Gravitation, poids et masse",
      theme: "Mouvement et interactions",
      cours: `
## L'interaction gravitationnelle
Deux objets qui ont une masse **s'attirent** toujours, même à distance : c'est l'**interaction gravitationnelle**, découverte par Isaac Newton au XVIIe siècle. Elle explique la chute des objets sur Terre, le mouvement de la Lune autour de la Terre et celui des planètes autour du Soleil.

La valeur de la force d'attraction entre deux objets A et B est donnée par la **loi de la gravitation universelle** :

> **F = G × m(A) × m(B) / d²**

Au brevet, cette formule est **fournie** dans l'énoncé : il faut savoir l'**utiliser** (bonnes unités, calculatrice) et l'**interpréter**, pas la réciter.

- F : valeur de la force, en **newtons (N)** ;
- m(A) et m(B) : masses des deux objets, en **kilogrammes (kg)** ;
- d : distance entre leurs centres, en **mètres (m)** ;
- G : constante de gravitation universelle, **G = 6,67 × 10⁻¹¹ N·m²/kg²**.

Conséquences :
- plus les masses sont **grandes**, plus la force est grande ;
- plus la distance est **grande**, plus la force est petite : si la distance **double**, la force est divisée par **4** (2² = 4).

>! **Exemple résolu** : force exercée par la Terre (5,97 × 10²⁴ kg) sur la Lune (7,35 × 10²² kg), distantes de 3,84 × 10⁸ m.
>! F = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 7,35 × 10²² ÷ (3,84 × 10⁸)² ≈ **2,0 × 10²⁰ N**.
>! Avec la calculatrice : 6.67E-11 × 5.97E24 × 7.35E22 ÷ (3.84E8)².

## Le poids
Le **poids** d'un objet est la force d'attraction exercée par une planète (ou la Lune) sur cet objet. Sur Terre, c'est pratiquement l'attraction gravitationnelle de la Terre.
- Point d'application : le **centre de gravité** de l'objet ;
- Direction : la **verticale** du lieu ;
- Sens : **vers le bas** (vers le centre de la Terre) ;
- Valeur : **P = m × g**.

> **P = m × g** (P en N ; m en kg ; g en N/kg)

**g** est l'**intensité de la pesanteur** : elle dépend de l'astre.

| Astre | g (en N/kg) |
|---|---|
| Terre | 9,8 (souvent arrondi à 10) |
| Lune | 1,6 |
| Mars | 3,7 |
| Jupiter | environ 25 |

## Masse et poids : ne pas confondre
| | Masse | Poids |
|---|---|---|
| Nature | grandeur qui caractérise la matière contenue dans l'objet | force (action exercée par l'astre) |
| Unité | kilogramme (kg) | newton (N) |
| Instrument | balance | dynamomètre |
| Dépend du lieu ? | **non** | **oui** (par g) |

>! **Exemple résolu** : un astronaute de 80 kg (avec sa combinaison). Sur Terre : P = 80 × 9,8 = 784 N. Sur la Lune : P = 80 × 1,6 = 128 N. Sa masse reste **80 kg** partout ; son poids est environ 6 fois plus faible sur la Lune, d'où ses grands bonds.

Le poids et la masse sont **proportionnels** : le graphique P en fonction de m est une droite passant par l'origine, de coefficient g.

>! **Erreur fréquente** : dans la vie courante, on dit « je pèse 50 kilos ». En physique, 50 kg est ta **masse** ; ton **poids** sur Terre vaut 50 × 9,8 = 490 N.

> **À retenir** :
> - Deux masses s'attirent : F = G × m(A) × m(B) / d² (formule fournie dans les sujets).
> - Poids : force verticale vers le bas, P = m × g ; g = 9,8 N/kg sur Terre, 1,6 N/kg sur la Lune.
> - La masse (kg) ne dépend pas du lieu ; le poids (N) en dépend.
`,
      exercices: [
        { type: "qcm", question: "Quelle est l'unité du poids ?", choix: ["Le kilogramme", "Le newton", "Le newton par kilogramme", "Le gramme"], reponse: 1, explication: "Le poids est une **force** : il s'exprime en **newtons (N)**. Le kilogramme est l'unité de la masse." },
        { type: "saisie", question: "Calcule le poids sur Terre d'un élève de 50 kg (g = 9,8 N/kg).", reponses: ["490 N", "490 newtons"], explication: "P = m × g = 50 × 9,8 = **490 N**." },
        { type: "vf", question: "Sur la Lune, la masse d'un astronaute est plus petite que sur Terre.", reponse: false, explication: "La **masse ne dépend pas du lieu** : elle est la même sur Terre et sur la Lune. C'est le **poids** qui est plus faible sur la Lune." },
        { type: "saisie", question: "Le robot Curiosity a une masse de 899 kg. Quel est son poids sur Mars (g = 3,7 N/kg) ? Arrondis à l'unité.", reponses: ["3326 N", "3 326 N", "3326,3 N", "3 326,3 N", "3326 newtons", "3326,3 newtons"], explication: "P = m × g = 899 × 3,7 = **3 326 N** (3 326,3 N)." },
        { type: "qcm", question: "Si la distance entre deux astres est multipliée par 2, la force d'attraction gravitationnelle est :", choix: ["multipliée par 2", "divisée par 2", "inchangée", "divisée par 4"], reponse: 3, explication: "La distance est au **carré** au dénominateur : (2d)² = 4d². La force est **divisée par 4**." },
        { type: "qcm", question: "Un objet a un poids de 16 N sur la Lune (g = 1,6 N/kg). Quelle est sa masse ?", choix: ["10 kg", "25,6 kg", "1,6 kg", "160 kg"], reponse: 0, explication: "m = P / g = 16 ÷ 1,6 = **10 kg**." },
        { type: "vf", question: "Le poids d'un objet est toujours dirigé verticalement vers le bas, vers le centre de la planète.", reponse: true, explication: "Le poids a pour direction la **verticale** du lieu et pour sens **vers le bas** (vers le centre de l'astre)." },
        { type: "qcm", question: "Quel instrument mesure un poids ?", choix: ["Une balance", "Un thermomètre", "Un dynamomètre", "Un chronomètre"], reponse: 2, explication: "Le poids est une force : il se mesure avec un **dynamomètre**. La balance mesure une masse." },
        { type: "redaction", question: "**Type brevet.** Un astronaute équipé de sa combinaison a une masse totale de 120 kg.\nDonnées : g(Terre) = 9,8 N/kg ; g(Lune) = 1,6 N/kg ; G = 6,67 × 10⁻¹¹ N·m²/kg² ; masse de la Lune = 7,35 × 10²² kg ; rayon de la Lune = 1,74 × 10⁶ m.\n1. Calcule son poids sur Terre, puis sur la Lune.\n2. Quelle est sa masse sur la Lune ? Justifie.\n3. Calcule, avec la loi de la gravitation, la force exercée par la Lune sur l'astronaute posé à sa surface. Compare au poids trouvé à la question 1.\n4. Explique pourquoi il peut faire de grands bonds sur la Lune.", corrige: `1. **Sur Terre** : P = m × g = 120 × 9,8 = **1 176 N**.
**Sur la Lune** : P = 120 × 1,6 = **192 N**.

2. La masse ne dépend pas du lieu : elle vaut toujours **120 kg** sur la Lune.

3. La distance entre l'astronaute et le centre de la Lune est le rayon de la Lune, d = 1,74 × 10⁶ m.
F = G × m(Lune) × m(astronaute) / d² = 6,67 × 10⁻¹¹ × 7,35 × 10²² × 120 ÷ (1,74 × 10⁶)² ≈ **194 N**.
On retrouve presque le poids sur la Lune (192 N) : **le poids est bien la force d'attraction gravitationnelle** exercée par l'astre (la petite différence vient des arrondis des données).

4. Son poids sur la Lune est environ **6 fois plus faible** que sur Terre (1 176 ÷ 192 ≈ 6,1) : la Lune l'attire beaucoup moins, il peut donc sauter plus haut avec le même effort.` },
      ],
    },
    {
      id: "energie-cinetique",
      titre: "Énergie cinétique, énergie de position et conservation",
      theme: "L'énergie, ses transferts et ses conversions",
      cours: `
## Les formes d'énergie (rappel)
L'énergie s'exprime en **joules (J)** (1 kJ = 1 000 J ; 1 MJ = 1 000 000 J). Elle existe sous plusieurs formes : **cinétique** (mouvement), **de position** (hauteur), **thermique**, **chimique** (dans les aliments, les carburants, les piles), **électrique**, **lumineuse** (rayonnante), **nucléaire**.

## L'énergie cinétique
Tout objet **en mouvement** possède de l'**énergie cinétique** Ec :

> **Ec = ½ × m × v²** (Ec en J ; m en **kg** ; v en **m/s**)

- Ec est proportionnelle à la **masse** : si la masse double, Ec double.
- Ec est proportionnelle au **carré de la vitesse** : si la vitesse **double**, Ec est multipliée par **4** ; si elle triple, par 9.

>! **Exemple résolu** : une voiture de 1 200 kg roule à 90 km/h.
>! - Conversion : v = 90 ÷ 3,6 = 25 m/s.
>! - Ec = ½ × 1 200 × 25² = 0,5 × 1 200 × 625 = **375 000 J** = 375 kJ.

## L'énergie de position
Un objet en **hauteur** possède une **énergie de position** (ou énergie potentielle de pesanteur) : plus il est haut et lourd, plus elle est grande. Son expression, **Ep = m × g × h** (h : hauteur en m), est souvent **donnée** dans les sujets.

## Conversions et conservation
L'énergie ne se crée pas et ne disparaît pas : elle **se convertit** d'une forme à une autre. C'est la **conservation de l'énergie**.

>! **Chute d'un objet** : quand une balle tombe, elle perd de la hauteur (son énergie de position diminue) et gagne de la vitesse (son énergie cinétique augmente) : l'énergie de position se **convertit** en énergie cinétique.

Pour aller plus loin (notion souvent rencontrée dans les sujets, avec une définition donnée) : la somme **Em = Ec + Ep** s'appelle l'**énergie mécanique**. Sans frottements, elle **reste constante**. Avec des frottements (air, sol), une partie de l'énergie mécanique est convertie en **énergie thermique** (échauffement) : Em diminue, mais l'énergie totale est conservée.

## Chaîne énergétique
On représente une conversion par une **chaîne énergétique** : réservoir (ou source) → convertisseur → formes d'énergie reçues. Une partie de l'énergie est toujours « perdue » sous forme thermique (dissipée dans l'environnement).

~~~
barrage (eau en hauteur)
   → énergie de position → énergie cinétique (chute de l'eau)
   → turbine + alternateur → énergie électrique (+ énergie thermique perdue)
~~~

## Énergie et sécurité routière
Lors d'un choc ou d'un freinage, l'énergie cinétique du véhicule doit être « dissipée » (déformation, chaleur des freins). Comme Ec dépend du **carré** de la vitesse, une petite hausse de vitesse augmente beaucoup les dégâts et la distance de freinage : à 100 km/h, Ec est **4 fois** plus grande qu'à 50 km/h.

>! **Erreurs fréquentes** :
>! - Oublier de convertir la vitesse en **m/s** et la masse en **kg**.
>! - Oublier le **carré** : Ec = ½ × m × v × v, et non ½ × m × v.

> **À retenir** :
> - Ec = ½ × m × v² (J, kg, m/s). Si v double, Ec est multipliée par 4.
> - Énergie de position : liée à la hauteur.
> - L'énergie se conserve : elle se convertit. Les frottements la convertissent en énergie thermique.
> - Énergie mécanique Em = Ec + Ep, constante sans frottements.
`,
      exercices: [
        { type: "qcm", question: "Quelle est l'unité de l'énergie ?", choix: ["Le watt", "Le newton", "Le joule", "Le volt"], reponse: 2, explication: "L'énergie s'exprime en **joules (J)**. Le watt est l'unité de la puissance, le newton celle de la force." },
        { type: "saisie", question: "Calcule l'énergie cinétique d'un ballon de 0,45 kg lancé à 20 m/s. (en J)", reponses: ["90 J", "90 joules"], explication: "Ec = ½ × m × v² = 0,5 × 0,45 × 20² = 0,5 × 0,45 × 400 = **90 J**." },
        { type: "qcm", question: "Si la vitesse d'un véhicule double, son énergie cinétique est :", choix: ["multipliée par 2", "multipliée par 4", "inchangée", "divisée par 2"], reponse: 1, explication: "Ec dépend du **carré** de la vitesse : (2v)² = 4v². Ec est **multipliée par 4**." },
        { type: "vf", question: "Lorsqu'une pomme tombe d'un arbre, son énergie de position se convertit en énergie cinétique.", reponse: true, explication: "En tombant, la pomme perd de la hauteur (Ep diminue) et prend de la vitesse (Ec augmente) : l'énergie de position se **convertit** en énergie cinétique." },
        { type: "saisie", question: "Une voiture de 1 200 kg roule à 90 km/h. Calcule son énergie cinétique en joules.", reponses: ["375000 J", "375 000 J", "375 kJ", "375 000 joules", "375000 joules"], explication: "v = 90 ÷ 3,6 = 25 m/s. Ec = 0,5 × 1 200 × 25² = **375 000 J** (375 kJ)." },
        { type: "qcm", question: "Un skateur descend une rampe. Avec des frottements, que devient une partie de son énergie mécanique ?", choix: ["Elle disparaît définitivement", "Elle devient de l'énergie nucléaire", "Elle se transforme en masse", "Elle est convertie en énergie thermique"], reponse: 3, explication: "Les frottements convertissent une partie de l'énergie mécanique en **énergie thermique** (échauffement des roues, de l'air). L'énergie ne disparaît pas : elle se **conserve**." },
        { type: "vf", question: "Un camion à l'arrêt possède une énergie cinétique.", reponse: false, explication: "À l'arrêt, v = 0, donc Ec = ½ × m × 0² = **0 J**. Un objet immobile n'a pas d'énergie cinétique." },
        { type: "qcm", question: "Dans une centrale hydroélectrique, l'eau retenue en hauteur par le barrage possède surtout de l'énergie :", choix: ["de position", "cinétique", "chimique", "lumineuse"], reponse: 0, explication: "L'eau en **hauteur** possède de l'**énergie de position**, convertie en énergie cinétique pendant la chute, puis en énergie électrique." },
        { type: "redaction", question: "**Type brevet : sécurité routière.** Une voiture de masse 1 000 kg roule d'abord à 50 km/h, puis à 100 km/h.\n1. Convertis ces vitesses en m/s (arrondis au dixième).\n2. Calcule son énergie cinétique dans les deux cas (arrondis au kJ).\n3. Par combien l'énergie cinétique est-elle multipliée quand la vitesse double ? Retrouve ce résultat sans calcul.\n4. Explique pourquoi un choc à 100 km/h est bien plus grave qu'un choc à 50 km/h.", corrige: `1. 50 km/h = 50 ÷ 3,6 ≈ **13,9 m/s** ; 100 km/h = 100 ÷ 3,6 ≈ **27,8 m/s**.

2. **À 50 km/h** : Ec = ½ × 1 000 × (50 ÷ 3,6)² ≈ **96 451 J ≈ 96 kJ**.
**À 100 km/h** : Ec = ½ × 1 000 × (100 ÷ 3,6)² ≈ **385 802 J ≈ 386 kJ**.
(On garde la valeur exacte de la vitesse dans la calculatrice pour éviter les erreurs d'arrondi.)

3. 385 802 ÷ 96 451 = **4**. Sans calcul : Ec est proportionnelle au **carré** de la vitesse ; si v est multipliée par 2, Ec est multipliée par 2² = **4**.

4. Lors d'un choc, l'énergie cinétique est convertie en déformation et en énergie thermique. À 100 km/h, il y a **4 fois plus d'énergie** à dissiper qu'à 50 km/h : les déformations et les blessures sont beaucoup plus graves. La distance de freinage est aussi environ 4 fois plus grande.` },
      ],
    },
    {
      id: "loi-ohm",
      titre: "Résistance et loi d'Ohm",
      theme: "L'énergie, ses transferts et ses conversions",
      cours: `
## Rappels : tension, intensité et lois des circuits
| Grandeur | Symbole | Unité | Appareil | Branchement |
|---|---|---|---|---|
| Intensité du courant | I | ampère (A) | ampèremètre | **en série** |
| Tension | U | volt (V) | voltmètre | **en dérivation** |

| | Circuit **en série** (une seule boucle) | Circuit **en dérivation** (plusieurs boucles) |
|---|---|---|
| Intensité | **la même partout** | celle de la branche principale est la **somme** des intensités des branches |
| Tension | la tension du générateur est la **somme** des tensions des dipôles | **la même** aux bornes de dipôles branchés en dérivation |

Conversions : 1 A = 1 000 mA ; 1 kΩ = 1 000 Ω.

>! **Brancher un multimètre** : en ampèremètre (bornes **A** ou **mA** et **COM**), il se place **en série** ; en voltmètre (bornes **V** et **COM**), **en dérivation**. Le courant doit **entrer** par la borne A, mA ou V et **sortir** par la borne **COM** : la borne COM est donc reliée du côté de la borne **−** du générateur. Si l'affichage est négatif, les branchements sont inversés.

## La résistance
Une **résistance** (ou conducteur ohmique) est un dipôle qui **s'oppose plus ou moins au passage du courant**. Sa valeur, notée **R**, s'exprime en **ohms (Ω)**. Plus R est grande, plus l'intensité du courant dans le circuit est **faible** (pour une même tension). On la mesure avec un **ohmmètre** (le multimètre en position Ω), hors du circuit.

Une résistance convertit l'énergie électrique en énergie **thermique** : elle **chauffe**. C'est l'**effet Joule**, utilisé dans les radiateurs, grille-pain, bouilloires.

## La loi d'Ohm
On mesure la tension U aux bornes d'une résistance pour différentes intensités I. On constate que U et I sont **proportionnelles** : la courbe U en fonction de I (la **caractéristique**) est une **droite qui passe par l'origine**. Le coefficient de proportionnalité est la résistance R.

> **Loi d'Ohm : U = R × I** (U en V ; R en Ω ; I en **A**)
> On en déduit **I = U / R** et **R = U / I**.

>! **Exemple résolu** : une résistance de 220 Ω est traversée par un courant de 25 mA.
>! - Conversion : I = 25 mA = 0,025 A.
>! - U = R × I = 220 × 0,025 = **5,5 V**.

>! **Exploiter une caractéristique** : sur la droite, on lit un point, par exemple U = 6 V pour I = 0,02 A. R = U / I = 6 ÷ 0,02 = **300 Ω**.

La loi d'Ohm ne s'applique qu'aux **conducteurs ohmiques**. Une lampe ou une diode ne la vérifient pas (leur caractéristique n'est pas une droite passant par l'origine).

>! **Erreurs fréquentes** :
>! - Oublier de convertir les **mA en A** : 25 mA = 0,025 A (et non 25 A).
>! - Appliquer U = R × I à une lampe ou un moteur.

> **À retenir** :
> - Série : I identique, tensions qui s'additionnent. Dérivation : U identique, intensités qui s'additionnent.
> - Résistance R en ohms (Ω) ; elle chauffe (effet Joule).
> - Loi d'Ohm : U = R × I, avec I en ampères.
> - Caractéristique d'un conducteur ohmique : droite passant par l'origine.
`,
      exercices: [
        { type: "saisie", question: "Quelle est l'unité de la résistance électrique ? (donne son nom)", reponses: ["ohm", "l'ohm", "ohms", "Ω"], explication: "La résistance s'exprime en **ohms (Ω)**, du nom du physicien allemand Georg Ohm." },
        { type: "qcm", question: "La loi d'Ohm s'écrit :", choix: ["U = R / I", "U = R × I", "I = R × U", "R = U × I"], reponse: 1, explication: "**U = R × I** : la tension (V) est égale à la résistance (Ω) multipliée par l'intensité (A)." },
        { type: "saisie", question: "Une résistance de 100 Ω est traversée par un courant de 0,05 A. Calcule la tension à ses bornes (en V).", reponses: ["5 V", "5 volts"], explication: "U = R × I = 100 × 0,05 = **5 V**." },
        { type: "qcm", question: "Une résistance de 220 Ω est traversée par un courant de 25 mA. La tension à ses bornes est :", choix: ["5 500 V", "8,8 V", "0,11 V", "5,5 V"], reponse: 3, explication: "25 mA = 0,025 A. U = 220 × 0,025 = **5,5 V**. Le résultat 5 500 V vient de l'oubli de la conversion des mA en A." },
        { type: "vf", question: "Dans un circuit en série, l'intensité du courant est la même en tout point.", reponse: true, explication: "C'est la **loi d'unicité de l'intensité** en série : il n'y a qu'un seul chemin pour le courant." },
        { type: "saisie", question: "Une pile de 9 V alimente une résistance de 1 kΩ. Calcule l'intensité du courant en mA.", reponses: ["9 mA", "9 milliampères", "0,009 A"], explication: "1 kΩ = 1 000 Ω. I = U / R = 9 ÷ 1 000 = 0,009 A = **9 mA**." },
        { type: "qcm", question: "Deux lampes identiques sont branchées en dérivation sur un générateur de 6 V. La tension aux bornes de chaque lampe vaut :", choix: ["6 V", "3 V", "12 V", "0 V"], reponse: 0, explication: "En **dérivation**, les dipôles ont **la même tension** à leurs bornes : celle du générateur, **6 V**." },
        { type: "vf", question: "La caractéristique d'une lampe est une droite qui passe par l'origine.", reponse: false, explication: "Une lampe **ne suit pas** la loi d'Ohm : sa caractéristique est une courbe. Seuls les **conducteurs ohmiques** ont une caractéristique droite passant par l'origine." },
        { type: "redaction", question: "**Type brevet.** Pour identifier une résistance, Sami mesure la tension U à ses bornes et l'intensité I du courant qui la traverse :\n\n| U (V) | 0 | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|---|\n| I (mA) | 0 | 4,3 | 8,5 | 12,8 | 17,0 |\n\n1. Fais le schéma du montage (décris-le) : où place-t-on l'ampèremètre et le voltmètre ?\n2. Sami trace U en fonction de I : il obtient une droite passant par l'origine. Que peut-il en conclure ?\n3. Calcule la valeur de la résistance.\n4. Sami dispose de résistances de 47 Ω, 470 Ω et 4 700 Ω. Laquelle a-t-il utilisée ?", corrige: `1. **Montage** : générateur, résistance et ampèremètre en **série** (une seule boucle) ; le voltmètre est branché **en dérivation** aux bornes de la résistance. Les bornes COM sont du côté de la borne − du générateur.

2. La droite passe par l'origine : **U est proportionnelle à I**. Le dipôle est un **conducteur ohmique**, il vérifie la **loi d'Ohm** U = R × I.

3. On prend un point de mesure, en convertissant en ampères : U = 8 V et I = 17,0 mA = 0,017 A.
R = U / I = 8 ÷ 0,017 ≈ **470 Ω**.
(Avec les autres points : 2 ÷ 0,0043 ≈ 465 Ω ; 4 ÷ 0,0085 ≈ 471 Ω ; 6 ÷ 0,0128 ≈ 469 Ω : les valeurs sont proches, aux erreurs de mesure près.)

4. Sami a utilisé la résistance de **470 Ω**.` },
      ],
    },
    {
      id: "puissance-energie-electrique",
      titre: "Puissance et énergie électriques",
      theme: "L'énergie, ses transferts et ses conversions",
      cours: `
## La puissance électrique
La **puissance** indique la **vitesse** à laquelle un appareil reçoit (et convertit) de l'énergie. Elle s'exprime en **watts (W)** ; 1 kW = 1 000 W.

Sur chaque appareil, une plaque signalétique indique sa **tension nominale** et sa **puissance nominale** : par exemple « 230 V – 2 000 W » pour une bouilloire. Ce sont les valeurs de fonctionnement normal.

> **P = U × I** (P en W ; U en V ; I en A)

>! **Exemple résolu** : une bouilloire de 2 000 W fonctionne sous 230 V. Intensité : I = P / U = 2 000 ÷ 230 ≈ **8,7 A**.

## L'énergie électrique
L'énergie consommée par un appareil dépend de sa puissance **et** de sa durée de fonctionnement :

> **E = P × t**

| E | P | t |
|---|---|---|
| joule (J) | watt (W) | seconde (s) |
| kilowattheure (kWh) | kilowatt (kW) | heure (h) |

**1 kWh = 1 000 W × 3 600 s = 3 600 000 J = 3,6 × 10⁶ J**. Le kWh est l'unité utilisée sur les factures d'électricité, mesurée par le **compteur**.

>! **Exemple résolu** : un four de 2,5 kW fonctionne 1 h 30 min.
>! - t = 1,5 h ; E = 2,5 × 1,5 = **3,75 kWh**.
>! - Avec un prix (fictif) de 0,20 € le kWh : coût = 3,75 × 0,20 = **0,75 €**.

>! **En joules** : une lampe de 60 W allumée 1 h (3 600 s) : E = 60 × 3 600 = **216 000 J**.

## Sécurité électrique
Chaque fil, prise ou multiprise supporte une **intensité maximale** (par exemple 16 A). Si on branche trop d'appareils sur une même multiprise, les puissances s'**additionnent**, l'intensité totale devient trop grande et les fils **chauffent** (risque d'incendie). Le **disjoncteur** ou le **fusible** coupe alors le courant.

>! **Exemple** : bouilloire 2 000 W + radiateur 1 500 W + grille-pain 800 W sur une multiprise de 16 A sous 230 V. P totale = 4 300 W ; I = 4 300 ÷ 230 ≈ 18,7 A > 16 A : **danger**.

Autres règles : ne jamais toucher un appareil avec les mains mouillées, ne pas introduire d'objet dans une prise. Le corps humain est conducteur : le courant du secteur (230 V) peut être **mortel**. La prise de terre et le disjoncteur différentiel protègent les personnes.

## Économiser l'énergie
Pour consommer moins : choisir des appareils de faible puissance (lampes à LED), réduire la durée d'utilisation, éteindre les appareils en **veille** (une box ou une télévision en veille consomme jour et nuit).

>! **Erreurs fréquentes** :
>! - Mélanger les unités : W avec h donne des Wh ; kW avec h donne des kWh ; W avec s donne des J.
>! - Confondre puissance (W) et énergie (J ou kWh) : un appareil puissant utilisé très peu de temps peut consommer peu d'énergie.

> **À retenir** :
> - P = U × I (W, V, A). Puissance nominale indiquée sur l'appareil.
> - E = P × t : J (W, s) ou kWh (kW, h). 1 kWh = 3,6 × 10⁶ J.
> - Trop d'appareils sur une multiprise : intensité trop grande, risque d'incendie.
`,
      exercices: [
        { type: "qcm", question: "Quelle est l'unité de la puissance ?", choix: ["Le joule", "Le kilowattheure", "Le watt", "L'ampère"], reponse: 2, explication: "La puissance s'exprime en **watts (W)**. Le joule et le kilowattheure sont des unités d'énergie." },
        { type: "saisie", question: "Une lampe fonctionne sous 6 V et est traversée par un courant de 0,5 A. Quelle est sa puissance (en W) ?", reponses: ["3 W", "3 watts"], explication: "P = U × I = 6 × 0,5 = **3 W**." },
        { type: "saisie", question: "Un ordinateur de 60 W fonctionne pendant 5 h. Quelle énergie consomme-t-il, en kWh ?", reponses: ["0,3 kWh", "0.3 kWh"], explication: "P = 60 W = 0,06 kW. E = P × t = 0,06 × 5 = **0,3 kWh** (soit 300 Wh)." },
        { type: "vf", question: "1 kWh est égal à 3 600 J.", reponse: false, explication: "1 kWh = 1 000 W × 3 600 s = **3 600 000 J** (3,6 × 10⁶ J). 3 600 J correspondent à 1 Wh." },
        { type: "qcm", question: "Une bouilloire de 2 000 W fonctionne 3 minutes. L'énergie consommée vaut :", choix: ["6 000 J", "0,1 kWh", "6 kWh", "667 J"], reponse: 1, explication: "En joules : E = 2 000 × 180 s = 360 000 J. En kWh : 2 kW × 0,05 h = **0,1 kWh** (3 min = 3/60 h = 0,05 h). On vérifie : 0,1 × 3,6 × 10⁶ = 360 000 J." },
        { type: "saisie", question: "Un radiateur de 1 500 W fonctionne 8 h par jour pendant 30 jours. Le kWh coûte 0,20 € (prix fictif). Combien coûte son fonctionnement, en euros ?", reponses: ["72 €", "72 euros"], explication: "E = 1,5 kW × 8 h × 30 = 360 kWh. Coût = 360 × 0,20 = **72 €**." },
        { type: "qcm", question: "On branche sur une multiprise (16 A maximum, 230 V) une bouilloire de 2 000 W, un radiateur de 1 500 W et un grille-pain de 800 W. Que se passe-t-il ?", choix: ["Rien : 4 300 W reste faible", "L'intensité (environ 9 A) est sans danger", "Les appareils fonctionnent moins bien mais sans risque", "L'intensité (environ 18,7 A) dépasse 16 A : les fils chauffent, risque d'incendie"], reponse: 3, explication: "P totale = 4 300 W ; I = P / U = 4 300 ÷ 230 ≈ **18,7 A**, supérieure aux 16 A admis : **surchauffe, risque d'incendie**." },
        { type: "vf", question: "Un téléviseur en veille consomme de l'énergie électrique.", reponse: true, explication: "En veille, l'appareil reste alimenté : avec 1 W pendant toute une année, il consomme 1 × 24 × 365 = 8 760 Wh, soit environ **8,8 kWh**." },
        { type: "redaction", question: "**Type brevet.** La plaque signalétique d'un sèche-cheveux indique « 230 V – 1 800 W ». Inès l'utilise 10 minutes chaque jour.\n1. Que signifient ces deux indications ?\n2. Calcule l'intensité du courant qui le traverse (arrondie au dixième).\n3. Calcule l'énergie consommée en une journée, en kWh puis en joules.\n4. Combien coûte son utilisation pendant une année de 365 jours, avec un prix (fictif) de 0,20 € le kWh ?", corrige: `1. **230 V** est la **tension nominale** (tension du secteur pour un fonctionnement normal) ; **1 800 W** est la **puissance nominale** (puissance reçue en fonctionnement normal).

2. P = U × I donc I = P / U = 1 800 ÷ 230 ≈ **7,8 A**.

3. t = 10 min = 10/60 h ≈ 0,167 h (on garde la fraction). E = P × t = 1,8 kW × 10/60 h = **0,3 kWh**.
En joules : E = 1 800 W × 600 s = **1 080 000 J** (on vérifie : 0,3 × 3,6 × 10⁶ = 1 080 000 J).

4. Sur un an : 0,3 × 365 = 109,5 kWh. Coût : 109,5 × 0,20 = **21,90 €**.

> Méthode : convertir les durées (10 min = 600 s ou 1/6 h) et garder des unités cohérentes (W et s pour des joules ; kW et h pour des kWh).` },
      ],
    },
    {
      id: "signaux-sonores",
      titre: "Les signaux sonores",
      theme: "Des signaux pour observer et communiquer",
      cours: `
## Émission et propagation d'un son
Un son est produit par un objet qui **vibre** (corde de guitare, membrane d'un haut-parleur, cordes vocales). Cette vibration se transmet de proche en proche au **milieu** qui l'entoure (air, eau, solide) jusqu'à un **récepteur** (oreille, micro).
- Le son a **besoin d'un milieu matériel** pour se propager : il **ne se propage pas dans le vide** (dans l'espace, aucun son ne voyage).
- Un son transporte une **information** (parole, musique, alarme) : c'est un **signal sonore**, de l'émetteur vers le récepteur.

## La vitesse du son
| Milieu | Vitesse du son (environ) |
|---|---|
| Air (à 20 °C) | **340 m/s** |
| Eau | **1 500 m/s** |
| Acier | environ 6 000 m/s |

Le son se propage plus vite dans les liquides et les solides que dans l'air. On utilise toujours **d = v × t**.

>! **Exemple résolu (orage)** : tu vois l'éclair puis tu entends le tonnerre 3 s plus tard. La lumière arrive presque instantanément ; le son met 3 s. d = 340 × 3 = **1 020 m** ≈ 1 km. (Astuce : la distance en km ≈ nombre de secondes ÷ 3.)

## L'écho : mesurer une distance
Un son se **réfléchit** sur un obstacle : c'est l'**écho**. Le son fait un **aller-retour**, donc la distance de l'obstacle est :

> **d = v × t / 2** (t : durée de l'aller-retour)

>! **Exemple (sonar)** : un bateau émet des ultrasons vers le fond ; l'écho revient 0,4 s plus tard. Dans l'eau, v = 1 500 m/s. d = 1 500 × 0,4 ÷ 2 = **300 m** de profondeur.

## Fréquence et hauteur
La **fréquence f** est le nombre de vibrations par seconde. Elle s'exprime en **hertz (Hz)**. La **période T** est la durée d'une vibration (en s) : **f = 1 / T**.
- Un son **aigu** a une fréquence **élevée** ; un son **grave** a une fréquence **basse**. Exemple : le la du diapason vibre à 440 Hz.
- L'oreille humaine perçoit les sons de **20 Hz à 20 000 Hz** (cette plage diminue avec l'âge).
- En dessous de 20 Hz : **infrasons** (éléphants, séismes). Au-dessus de 20 000 Hz : **ultrasons** (chauves-souris, dauphins, échographie, sonar).

>! **Exemple** : une vibration dure T = 2 ms = 0,002 s. f = 1 ÷ 0,002 = **500 Hz** : c'est un son audible.

## Niveau sonore et santé
Le **niveau sonore** se mesure avec un **sonomètre**, en **décibels (dB)**.
| Niveau | Exemple | Effet |
|---|---|---|
| 30 dB | chuchotement | calme |
| 60 dB | conversation | normal |
| 85 dB | rue très bruyante | **seuil de risque** : l'exposition prolongée abîme l'oreille |
| 100 dB | casque à fond, concert | dangereux même pour une durée courte |
| 120 dB | avion au décollage, de près | **seuil de douleur** |

Les lésions de l'oreille interne sont **irréversibles** : baisse le volume, fais des pauses, porte des bouchons en concert.

> **À retenir** :
> - Le son est une vibration qui se propage dans un milieu matériel, pas dans le vide.
> - Vitesse du son : 340 m/s dans l'air, 1 500 m/s dans l'eau. d = v × t ; écho : d = v × t / 2.
> - f = 1 / T en Hz ; audible de 20 Hz à 20 000 Hz ; aigu = fréquence élevée.
> - Niveau sonore en dB ; danger à partir de 85 dB.
`,
      exercices: [
        { type: "vf", question: "Le son peut se propager dans le vide, par exemple entre la Terre et la Lune.", reponse: false, explication: "Le son a besoin d'un **milieu matériel** (air, eau, solide) pour se propager : il **ne se propage pas dans le vide**." },
        { type: "saisie", question: "Tu entends le tonnerre 3 s après avoir vu l'éclair. À quelle distance est l'orage ? (vitesse du son : 340 m/s ; réponse en m)", reponses: ["1020 m", "1 020 m", "1020 mètres", "1,02 km"], explication: "d = v × t = 340 × 3 = **1 020 m** (environ 1 km)." },
        { type: "qcm", question: "Dans quel milieu le son se propage-t-il le plus vite ?", choix: ["L'air", "L'eau", "L'acier", "Le vide"], reponse: 2, explication: "Environ 340 m/s dans l'air, 1 500 m/s dans l'eau, 6 000 m/s dans l'**acier**. Dans le vide, il ne se propage pas." },
        { type: "qcm", question: "Un son de fréquence 50 000 Hz est :", choix: ["un infrason", "un son grave audible", "un son aigu audible", "un ultrason"], reponse: 3, explication: "50 000 Hz est supérieur à 20 000 Hz, limite de l'oreille humaine : c'est un **ultrason**." },
        { type: "saisie", question: "La période d'un son est T = 0,002 s. Calcule sa fréquence (en Hz).", reponses: ["500 Hz", "500 hertz"], explication: "f = 1 / T = 1 ÷ 0,002 = **500 Hz**." },
        { type: "saisie", question: "Un sonar émet un signal ultrasonore vers le fond de la mer ; l'écho revient 0,4 s plus tard. Quelle est la profondeur ? (vitesse dans l'eau : 1 500 m/s ; en m)", reponses: ["300 m", "300 mètres"], explication: "Le signal fait l'**aller-retour** : d = v × t / 2 = 1 500 × 0,4 ÷ 2 = **300 m**." },
        { type: "qcm", question: "À partir de quel niveau sonore une exposition prolongée présente-t-elle un risque pour l'audition ?", choix: ["85 dB", "30 dB", "60 dB", "10 dB"], reponse: 0, explication: "Le **seuil de risque** est d'environ **85 dB**. À 120 dB, on atteint le seuil de douleur." },
        { type: "vf", question: "Plus la fréquence d'un son est élevée, plus le son est aigu.", reponse: true, explication: "Fréquence **élevée** : son **aigu** ; fréquence basse : son grave." },
        { type: "redaction", question: "**Type brevet.** Une chauve-souris chasse la nuit grâce à l'écholocation : elle émet des ultrasons de fréquence 40 000 Hz et capte leur écho sur les insectes.\n1. Pourquoi parle-t-on d'ultrasons ? Un humain peut-il les entendre ?\n2. L'écho revient 0,02 s après l'émission. À quelle distance se trouve l'insecte ? (vitesse du son dans l'air : 340 m/s)\n3. Cite une utilisation des ultrasons par l'être humain.", corrige: `1. 40 000 Hz est **supérieur à 20 000 Hz**, la fréquence maximale perçue par l'oreille humaine : ce sont des **ultrasons**. Un humain **ne peut pas** les entendre.

2. Le son fait un **aller-retour** entre la chauve-souris et l'insecte.
Distance parcourue par le son : 340 × 0,02 = 6,8 m.
Distance de l'insecte : d = 6,8 ÷ 2 = **3,4 m**.

3. Le **sonar** des bateaux (mesure de profondeur, repérage de bancs de poissons), l'**échographie** médicale, le radar de recul des voitures (capteurs à ultrasons).` },
      ],
    },
    {
      id: "signaux-lumineux",
      titre: "Les signaux lumineux et la lumière des étoiles",
      theme: "Des signaux pour observer et communiquer",
      cours: `
## Sources et objets diffusants
- Une **source primaire** produit sa propre lumière : le Soleil, une étoile, une lampe allumée, une flamme.
- Un **objet diffusant** renvoie dans toutes les directions une partie de la lumière qu'il reçoit : la Lune, les planètes, un livre, ton visage.
Pour **voir** un objet, il faut que de la lumière venant de cet objet **entre dans l'œil**.

## Propagation de la lumière
Dans un milieu **transparent et homogène** (le même en tout point : air, eau, verre, vide), la lumière se propage **en ligne droite**. On la représente par un **rayon lumineux** : une droite avec une flèche indiquant le sens de propagation. Contrairement au son, la lumière **se propage dans le vide** : c'est ainsi que la lumière du Soleil nous parvient.

## La vitesse de la lumière
Dans le vide (et presque dans l'air), la lumière se propage à :

> **c ≈ 300 000 km/s = 3 × 10⁸ m/s**

C'est la vitesse la plus grande qui existe. Dans l'eau ou le verre, elle est plus faible (environ 225 000 km/s dans l'eau). En une seconde, la lumière ferait environ 7,5 fois le tour de la Terre.

>! **Exemple résolu** : le Soleil est à 150 millions de km. t = d / v = 150 000 000 ÷ 300 000 = **500 s**, soit 8 min 20 s. Nous voyons le Soleil tel qu'il était il y a 8 min 20 s.

>! **Exemple (télémétrie laser)** : on envoie un faisceau laser vers des réflecteurs déposés sur la Lune ; il revient 2,56 s plus tard. d = 3 × 10⁸ × 2,56 ÷ 2 = **3,84 × 10⁸ m** = 384 000 km.

## L'année-lumière
Pour les distances entre les étoiles, le kilomètre est trop petit. On utilise l'**année-lumière (al)** : la **distance** parcourue par la lumière dans le vide **en une année**.

1 al = 300 000 km/s × (365,25 × 24 × 3 600) s ≈ **9,46 × 10¹² km** (presque 10 000 milliards de km).

>! **Exemple** : Proxima du Centaure, l'étoile la plus proche après le Soleil, est à 4,2 al, soit 4,2 × 9,46 × 10¹² ≈ **4,0 × 10¹³ km**. Sa lumière a voyagé 4,2 ans pour nous parvenir.

**Voir loin, c'est voir dans le passé** : la lumière d'une étoile située à 100 al est partie il y a 100 ans. Certaines étoiles que tu vois ont peut-être déjà disparu.

## Lumière blanche et couleurs
La lumière blanche (Soleil, lampe) est un **mélange de lumières colorées**. Un prisme ou des gouttes de pluie (arc-en-ciel) la **décomposent** en un **spectre** continu, du rouge au violet. L'analyse de la lumière des étoiles permet de connaître les éléments chimiques qu'elles contiennent.

## Signaux lumineux et information
La lumière transporte de l'information : feux de signalisation, phares, télécommande (infrarouge), et surtout **fibre optique** : des impulsions lumineuses guidées dans un fil de verre transportent Internet à très grande vitesse.

> **À retenir** :
> - Source primaire (produit la lumière) / objet diffusant (la renvoie).
> - Propagation rectiligne ; la lumière se propage dans le vide.
> - c ≈ 3 × 10⁸ m/s = 300 000 km/s ; d = v × t.
> - 1 année-lumière ≈ 9,46 × 10¹² km : c'est une distance. Voir loin, c'est voir dans le passé.
`,
      exercices: [
        { type: "qcm", question: "Parmi ces objets, lequel est une source primaire de lumière ?", choix: ["La Lune", "Une étoile", "Un miroir", "Une feuille blanche"], reponse: 1, explication: "Une **étoile** produit sa propre lumière. La Lune, le miroir et la feuille renvoient la lumière qu'ils reçoivent (objets diffusants ou réfléchissants)." },
        { type: "vf", question: "Contrairement au son, la lumière se propage dans le vide.", reponse: true, explication: "La lumière **se propage dans le vide** : c'est ainsi que la lumière du Soleil et des étoiles nous parvient." },
        { type: "saisie", question: "Quelle est la vitesse de la lumière dans le vide, en km/s ?", reponses: ["300 000 km/s", "300000 km/s", "3 × 10^5 km/s", "3×10^5"], explication: "c ≈ **300 000 km/s**, soit 3 × 10⁸ m/s." },
        { type: "saisie", question: "Le Soleil est à 150 millions de km de la Terre. Combien de secondes met sa lumière pour nous parvenir ? (c = 300 000 km/s)", reponses: ["500 s", "500 secondes"], explication: "t = d / v = 150 000 000 ÷ 300 000 = **500 s** (8 min 20 s)." },
        { type: "qcm", question: "L'année-lumière est :", choix: ["la durée d'un voyage vers une étoile", "la durée de rotation de la Terre autour du Soleil", "la vitesse de la lumière en un an", "la distance parcourue par la lumière en un an"], reponse: 3, explication: "L'année-lumière est une **distance** : celle que parcourt la lumière dans le vide en une année, environ 9,46 × 10¹² km." },
        { type: "qcm", question: "L'étoile Sirius est à 8,6 années-lumière. La lumière que nous en recevons aujourd'hui est partie :", choix: ["il y a 8,6 ans", "il y a 8,6 secondes", "à l'instant", "il y a 8,6 millions d'années"], reponse: 0, explication: "La lumière parcourt 1 al en 1 an : pour 8,6 al, il lui faut **8,6 ans**. Nous voyons Sirius telle qu'elle était il y a 8,6 ans." },
        { type: "vf", question: "Dans l'air, la lumière se propage en ligne droite.", reponse: true, explication: "Dans un milieu transparent et **homogène**, la propagation de la lumière est **rectiligne** : on la modélise par des rayons lumineux." },
        { type: "qcm", question: "Un faisceau laser envoyé vers la Lune revient sur Terre 2,56 s plus tard (c = 3 × 10⁸ m/s). La distance Terre-Lune vaut :", choix: ["7,68 × 10⁸ m", "1,17 × 10⁸ m", "3,84 × 10⁸ m", "3,84 × 10⁵ m"], reponse: 2, explication: "C'est un **aller-retour** : d = c × t / 2 = 3 × 10⁸ × 2,56 ÷ 2 = **3,84 × 10⁸ m** (384 000 km). 7,68 × 10⁸ m est la distance aller-retour." },
        { type: "redaction", question: "**Type brevet.** L'étoile Bételgeuse, dans la constellation d'Orion, est située à environ 550 années-lumière de la Terre (valeur approximative).\nDonnée : 1 al ≈ 9,46 × 10¹² km.\n1. Exprime cette distance en km, en notation scientifique.\n2. Un journaliste écrit : « Bételgeuse a peut-être déjà explosé. » Explique pourquoi on ne peut pas le savoir aujourd'hui.\n3. Pourquoi les astronomes n'utilisent-ils pas le kilomètre pour exprimer ces distances ?", corrige: `1. d = 550 × 9,46 × 10¹² ≈ 5 203 × 10¹² km ≈ **5,2 × 10¹⁵ km**.

2. La lumière met **550 ans** pour parcourir 550 al. La lumière que nous voyons aujourd'hui est partie de Bételgeuse il y a environ 550 ans : nous voyons l'étoile **telle qu'elle était il y a 550 ans**. Si elle avait explosé il y a moins de 550 ans, la lumière de l'explosion ne nous serait pas encore parvenue : **voir loin, c'est voir dans le passé**.

3. Les distances en km sont des nombres **gigantesques** (5,2 × 10¹⁵ km), difficiles à lire et à comparer. L'année-lumière donne des nombres plus simples (550 al) et indique en plus le temps mis par la lumière pour nous parvenir.` },
      ],
    },
    {
      id: "sources-energie",
      titre: "Sources d'énergie et production d'électricité",
      theme: "L'énergie, ses transferts et ses conversions",
      cours: `
## Sources d'énergie renouvelables ou non
Une **source d'énergie** (ou ressource) est ce qui fournit l'énergie que l'on convertit : le vent, le Soleil, le pétrole, l'uranium...
- Une source est **renouvelable** si elle se reconstitue rapidement à l'échelle humaine : **Soleil**, **vent**, **eau** des rivières et des marées, **biomasse** (bois, déchets végétaux), **géothermie** (chaleur de la Terre).
- Une source est **non renouvelable** si ses réserves s'épuisent car elles ont mis des millions d'années à se former : **pétrole**, **charbon**, **gaz naturel** (énergies **fossiles**) et **uranium** (nucléaire).

Les énergies fossiles libèrent du **dioxyde de carbone** en brûlant : c'est un gaz à effet de serre responsable du **réchauffement climatique**. Le nucléaire n'émet presque pas de CO₂, mais produit des **déchets radioactifs**.

## L'alternateur, cœur de la plupart des centrales
Un **alternateur** convertit de l'énergie **mécanique** (une rotation) en énergie **électrique** : un **aimant** (ou électroaimant) **tourne** à côté de **bobines** de fil de cuivre, ce qui crée une tension **alternative**. La dynamo d'un vélo fonctionne de la même façon.

Dans presque toutes les centrales, quelque chose fait **tourner une turbine** reliée à un alternateur :

| Centrale | Ce qui fait tourner la turbine | Source |
|---|---|---|
| hydraulique (barrage) | la chute de l'eau | renouvelable |
| éolienne | le vent (qui fait tourner les pales) | renouvelable |
| thermique à flamme | la vapeur d'eau chauffée par la combustion de charbon, gaz ou fioul | non renouvelable |
| nucléaire | la vapeur d'eau chauffée par la fission de l'uranium | non renouvelable |

Exception : les **panneaux photovoltaïques** convertissent **directement** l'énergie **lumineuse** en énergie électrique, sans turbine ni alternateur.

## La chaîne énergétique
On représente les conversions par une **chaîne énergétique** : **réservoir** (ou source) → **convertisseur** → énergie utile, avec toujours une partie **perdue**, le plus souvent sous forme **thermique**.

~~~
Éolienne :
vent (énergie cinétique) → [éolienne + alternateur] → énergie électrique
                                                    → énergie thermique (pertes)
~~~

>! **Exemple résolu : la centrale nucléaire.**
>! uranium (énergie nucléaire) → réacteur → énergie thermique (eau chauffée en vapeur) → turbine → énergie mécanique → alternateur → **énergie électrique**. Une grande partie de l'énergie thermique est évacuée dans un fleuve ou dans l'air par les tours de refroidissement.

## Les transferts thermiques
L'énergie thermique passe toujours du corps **le plus chaud** vers le corps **le plus froid**, de trois façons :
- par **conduction**, à travers la matière (la cuillère qui chauffe dans le thé) ;
- par **convection**, par un déplacement de liquide ou de gaz (l'air chaud qui monte au-dessus d'un radiateur) ;
- par **rayonnement**, même dans le vide (la chaleur du Soleil, d'un feu de cheminée).
Un bon **isolant** (laine de verre, double vitrage, air immobile) limite ces transferts.

## L'électricité en France
Environ **deux tiers** de l'électricité produite en France viennent des centrales **nucléaires** ; plus d'un quart vient des énergies **renouvelables** (hydraulique d'abord, puis éolien et solaire) ; une faible part vient des centrales à combustibles fossiles (ordres de grandeur des années 2020).

>! **Erreurs fréquentes** :
>! - Une centrale ne « fabrique » pas d'énergie : elle **convertit** une forme d'énergie en une autre.
>! - Le nucléaire n'est **pas** renouvelable (l'uranium est un minerai dont les réserves s'épuisent), même s'il émet peu de CO₂.
>! - L'électricité n'est pas une source d'énergie : c'est une forme d'énergie obtenue par conversion.

> **À retenir** :
> - Renouvelables : Soleil, vent, eau, biomasse, géothermie. Non renouvelables : pétrole, charbon, gaz, uranium.
> - Alternateur : rotation d'un aimant près de bobines → énergie électrique (centrales, éoliennes, dynamo).
> - Photovoltaïque : énergie lumineuse → énergie électrique, sans alternateur.
> - Chaîne énergétique : réservoir → convertisseur → énergie utile + pertes thermiques.
> - Transferts thermiques : conduction, convection, rayonnement, du chaud vers le froid.
`,
      exercices: [
        { type: "qcm", question: "Parmi ces sources d'énergie, laquelle est renouvelable ?", choix: ["Le charbon", "L'uranium", "Le vent", "Le gaz naturel"], reponse: 2, explication: "Le **vent** se renouvelle sans cesse. Le charbon et le gaz naturel (fossiles) ainsi que l'uranium (nucléaire) ont des réserves limitées : ils sont **non renouvelables**." },
        { type: "vf", question: "L'énergie nucléaire est une énergie renouvelable car elle émet très peu de dioxyde de carbone.", reponse: false, explication: "Émettre peu de CO₂ ne rend pas une source renouvelable : l'**uranium** est un minerai dont les réserves **s'épuisent**. Le nucléaire est donc **non renouvelable**." },
        { type: "saisie", question: "Quel appareil, présent dans les centrales et les éoliennes, convertit l'énergie mécanique de rotation en énergie électrique ?", reponses: ["alternateur", "un alternateur", "l'alternateur"], explication: "C'est l'**alternateur** : un aimant tourne à côté de bobines et produit une tension alternative." },
        { type: "qcm", question: "Quelle installation produit de l'électricité **sans** alternateur ?", choix: ["Une centrale nucléaire", "Une centrale hydraulique", "Un panneau photovoltaïque", "Une éolienne"], reponse: 2, explication: "Le **panneau photovoltaïque** convertit directement l'énergie lumineuse en énergie électrique. Dans les autres installations, une turbine (ou des pales) fait tourner un alternateur." },
        { type: "qcm", question: "Dans une éolienne, quelle est la forme de l'énergie reçue du vent ?", choix: ["Énergie chimique", "Énergie cinétique", "Énergie nucléaire", "Énergie lumineuse"], reponse: 1, explication: "Le vent est de l'air **en mouvement** : il apporte de l'**énergie cinétique**, convertie en énergie mécanique de rotation, puis en énergie électrique par l'alternateur." },
        { type: "qcm", question: "Une cuillère métallique plongée dans un thé chaud devient chaude jusqu'au manche. Quel est le mode de transfert thermique ?", choix: ["La conduction", "La convection", "Le rayonnement", "La combustion"], reponse: 0, explication: "L'énergie thermique se transmet **à travers la matière** de la cuillère, de proche en proche : c'est la **conduction**. La convection demande un déplacement de liquide ou de gaz ; le rayonnement n'a pas besoin de matière." },
        { type: "vf", question: "L'énergie thermique du Soleil nous parvient par rayonnement, à travers le vide spatial.", reponse: true, explication: "Le **rayonnement** est le seul mode de transfert qui se fait **dans le vide** : conduction et convection ont besoin de matière." },
        { type: "saisie", question: "Dans une centrale thermique, quel gaz à effet de serre est rejeté par la combustion du charbon ou du gaz ? (donne son nom)", reponses: ["dioxyde de carbone", "le dioxyde de carbone", "CO2", "CO₂", "gaz carbonique"], explication: "La combustion des énergies fossiles rejette du **dioxyde de carbone (CO₂)**, principal responsable humain du réchauffement climatique." },
        { type: "redaction", question: "**Type brevet.** Une commune hésite entre construire un parc éolien et une centrale au gaz.\n1. Classe le vent et le gaz naturel en sources renouvelables ou non renouvelables. Justifie.\n2. Construis la chaîne énergétique d'une éolienne (réservoir, convertisseur, énergie utile, pertes).\n3. Explique le rôle de l'alternateur.\n4. Donne un avantage et un inconvénient de chaque solution.", corrige: `1. Le **vent** est une source **renouvelable** : il se reconstitue en permanence (il est dû au Soleil qui chauffe inégalement l'atmosphère). Le **gaz naturel** est **non renouvelable** : c'est une énergie **fossile**, formée en des millions d'années, dont les réserves s'épuisent.

2. **Chaîne énergétique** : vent (**énergie cinétique**) → éolienne (pales + alternateur, le **convertisseur**) → **énergie électrique** (énergie utile) ; une partie est perdue sous forme d'**énergie thermique** (frottements, échauffement).

3. Les pales entraînent l'**alternateur** : un aimant y tourne à côté de bobines, ce qui convertit l'**énergie mécanique** de rotation en **énergie électrique**.

4. **Éolien** : avantage, aucune émission de CO₂ en fonctionnement et une ressource inépuisable ; inconvénient, la production dépend du vent (intermittente) et les éoliennes modifient le paysage.
**Centrale au gaz** : avantage, elle produit à la demande, quelle que soit la météo ; inconvénient, elle rejette du **dioxyde de carbone** (réchauffement climatique) et consomme une ressource qui s'épuise.

> Méthode : pour une question « avantage / inconvénient », donner au moins un argument de chaque côté, en utilisant le vocabulaire du cours (renouvelable, CO₂, intermittence).` },
      ],
    },
    {
      id: "etats-melanges",
      titre: "États de la matière, mélanges et solubilité",
      theme: "Organisation et transformations de la matière",
      cours: `
## Les trois états de la matière
| État | Forme | Volume | Modèle particulaire |
|---|---|---|---|
| **Solide** | forme propre | volume propre | particules **serrées** et **ordonnées**, qui vibrent sur place |
| **Liquide** | prend la forme du récipient (surface libre plane et horizontale au repos) | volume propre | particules **serrées** mais **désordonnées**, qui glissent les unes sur les autres |
| **Gaz** | ni forme propre ni volume propre : il occupe tout l'espace offert | compressible et expansible | particules **très espacées**, **désordonnées**, qui se déplacent très vite |

## Les changements d'état
~~~
            fusion                 vaporisation
 SOLIDE  ------------>  LIQUIDE  ---------------->  GAZ
         <------------           <----------------
        solidification              liquéfaction
~~~
- Le passage direct du solide au gaz est la **sublimation** ; celui du gaz au solide (le givre) est la **condensation** (ou condensation solide).
- La vaporisation peut être lente (**évaporation** du linge qui sèche) ou rapide (**ébullition**, avec des bulles dans tout le liquide).
- La buée sur une vitre froide est une **liquéfaction** de la vapeur d'eau (invisible) de l'air.

## Ce qui se conserve, ce qui change
Lors d'un changement d'état, les particules ne changent pas, elles s'organisent autrement :
- la **masse se conserve** : 50 g de glace donnent 50 g d'eau liquide ;
- le **volume ne se conserve pas** : l'eau est une exception, son volume **augmente** d'environ 9 % quand elle gèle (une bouteille pleine éclate au congélateur, la glace flotte).

## Corps pur et mélange
- Un **corps pur** est constitué d'une seule espèce chimique (eau pure, éthanol pur). Pendant un changement d'état, sa **température reste constante** : sur le graphique de la température en fonction du temps, on observe un **palier**.
- Un **mélange** contient plusieurs espèces chimiques (eau salée, air, jus d'orange). En général, il n'a **pas de palier** net.

| Corps pur (sous la pression atmosphérique normale) | Température de fusion | Température d'ébullition |
|---|---|---|
| Eau | 0 °C | 100 °C |
| Éthanol | −114 °C | 78 °C |
| Fer | 1 538 °C | 2 862 °C |

La température du palier permet d'**identifier** un corps pur, comme la masse volumique.

>! **Lire un graphique de changement d'état** : on chauffe un liquide et on relève la température. La température monte, puis reste à 78 °C pendant plusieurs minutes (palier), alors que l'on chauffe toujours : le liquide **bout**, c'est un **corps pur**, de l'**éthanol**. Pendant le palier, l'énergie reçue sert à changer d'état, pas à chauffer.

## Mélanges homogènes et hétérogènes
- **Homogène** : on ne distingue **qu'une seule phase** à l'œil nu (eau sucrée, eau et alcool, air).
- **Hétérogène** : on distingue **plusieurs phases** (eau et huile, eau boueuse).

Deux liquides sont **miscibles** s'ils forment un mélange homogène (eau et éthanol), **non miscibles** sinon (eau et huile : l'huile, moins dense, reste au-dessus).

## La dissolution et la solubilité
Quand on dissout du sel dans l'eau : le sel est le **soluté**, l'eau le **solvant**, le mélange obtenu une **solution**.
- La **masse se conserve** : 200 g d'eau + 10 g de sel donnent **210 g** de solution.
- La **solubilité** est la masse **maximale** de soluté que l'on peut dissoudre dans un litre de solvant, à une température donnée. Pour le sel dans l'eau, à 20 °C : environ **360 g/L**. Au-delà, le sel ne se dissout plus et se dépose au fond : la solution est **saturée**.
- La solubilité dépend du soluté et de la température. Celle des **gaz** dans l'eau **diminue quand la température augmente** : une boisson gazeuse tiède perd plus vite son gaz (du dioxyde de carbone dissous).

## La composition de l'air
L'air est un **mélange** de gaz. En volume : environ **78 % de diazote** (N₂), **21 % de dioxygène** (O₂) et **1 % d'autres gaz** (argon, dioxyde de carbone : environ 0,04 %, vapeur d'eau en quantité variable).

>! **Erreurs fréquentes** :
>! - « Le sucre disparaît dans l'eau » : non, il est **dissous**, il est toujours là (l'eau a un goût sucré et la masse se conserve).
>! - Condensation et liquéfaction : le passage du gaz au liquide s'appelle **liquéfaction**.
>! - La vapeur d'eau est **invisible** : le « nuage » au-dessus d'une casserole est fait de fines gouttelettes d'eau **liquide**.

> **À retenir** :
> - Solide, liquide, gaz ; fusion, solidification, vaporisation, liquéfaction, sublimation, condensation.
> - Changement d'état : la masse se conserve, pas le volume.
> - Corps pur : palier de température pendant un changement d'état (eau : 0 °C et 100 °C).
> - Mélange homogène ou hétérogène ; liquides miscibles ou non.
> - Solubilité : masse maximale de soluté dissoute par litre de solvant ; masse conservée lors d'une dissolution.
> - Air : environ 78 % de diazote et 21 % de dioxygène.
`,
      exercices: [
        { type: "qcm", question: "Comment s'appelle le passage de l'état liquide à l'état gazeux ?", choix: ["La fusion", "La liquéfaction", "La vaporisation", "La solidification"], reponse: 2, explication: "Liquide → gaz : **vaporisation** (évaporation ou ébullition). La liquéfaction est le passage inverse (gaz → liquide) ; la fusion, solide → liquide ; la solidification, liquide → solide." },
        { type: "saisie", question: "Comment s'appelle le passage de l'état solide à l'état liquide ?", reponses: ["fusion", "la fusion"], explication: "C'est la **fusion** (la glace qui fond). Le passage inverse est la solidification." },
        { type: "vf", question: "Quand 50 g de glace fondent, on obtient 50 g d'eau liquide.", reponse: true, explication: "Lors d'un changement d'état, **la masse se conserve** : les particules sont les mêmes, elles sont seulement organisées autrement." },
        { type: "vf", question: "Quand l'eau liquide gèle, son volume reste le même.", reponse: false, explication: "Le volume **ne se conserve pas** : en gelant, l'eau **augmente** de volume (environ 9 %). C'est pourquoi une bouteille d'eau pleine peut éclater au congélateur et pourquoi la glace flotte." },
        { type: "qcm", question: "Dans un gaz, les particules sont :", choix: ["très espacées et désordonnées", "serrées et ordonnées", "serrées et désordonnées", "immobiles"], reponse: 0, explication: "Dans un gaz, les particules sont **très espacées**, **désordonnées** et se déplacent vite : c'est pour cela qu'un gaz est compressible. Serrées et ordonnées : solide ; serrées et désordonnées : liquide." },
        { type: "saisie", question: "On dissout complètement 15 g de sel dans 250 g d'eau. Quelle est la masse de la solution obtenue ? (en g)", reponses: ["265 g", "265 grammes"], explication: "Lors d'une dissolution, **la masse se conserve** : 250 + 15 = **265 g**." },
        { type: "qcm", question: "On verse de l'huile dans de l'eau et on agite : après quelques minutes, deux couches se forment. Ce mélange est :", choix: ["homogène, car les liquides sont miscibles", "un corps pur", "homogène, car l'huile s'est dissoute", "hétérogène, car les liquides ne sont pas miscibles"], reponse: 3, explication: "On distingue deux phases : le mélange est **hétérogène**, l'eau et l'huile sont **non miscibles**. L'huile, moins dense que l'eau, se place au-dessus." },
        { type: "qcm", question: "Quel gaz est le plus abondant dans l'air ?", choix: ["Le dioxygène", "Le diazote", "Le dioxyde de carbone", "La vapeur d'eau"], reponse: 1, explication: "L'air contient environ **78 % de diazote**, 21 % de dioxygène et 1 % d'autres gaz (dont environ 0,04 % de dioxyde de carbone)." },
        { type: "saisie", question: "La solubilité du sel dans l'eau est d'environ 360 g/L à 20 °C. Quelle masse maximale de sel peut-on dissoudre dans 0,5 L d'eau à cette température ? (en g)", reponses: ["180 g", "180 grammes"], explication: "La masse dissoute maximale est proportionnelle au volume d'eau : 360 × 0,5 = **180 g**. Si on en ajoute plus, le sel en excès reste au fond : la solution est saturée." },
        { type: "redaction", question: "**Type brevet.** Nora chauffe un liquide incolore inconnu et relève sa température toutes les deux minutes :\n\n| t (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 |\n|---|---|---|---|---|---|---|---|\n| T (°C) | 20 | 45 | 65 | 78 | 78 | 78 | 78 |\n\nDonnées (températures d'ébullition) : acétone 56 °C ; éthanol 78 °C ; eau 100 °C.\n1. Décris l'évolution de la température. Comment appelle-t-on la partie où elle ne change plus ?\n2. Que se passe-t-il pour le liquide à partir de 6 min ? Nomme ce changement d'état.\n3. Ce liquide est-il un corps pur ou un mélange ? Justifie.\n4. Identifie le liquide.\n5. La masse du liquide et de sa vapeur, prises ensemble, change-t-elle pendant l'ébullition ?", corrige: `1. La température **augmente** de 20 °C à 78 °C pendant les 6 premières minutes, puis elle **reste constante** à 78 °C : c'est un **palier** de température.

2. À partir de 6 min, le liquide **bout** : il passe de l'état liquide à l'état gazeux. C'est une **vaporisation** (ici une ébullition). L'énergie reçue sert à changer d'état, et non à augmenter la température.

3. La température reste constante pendant le changement d'état : le liquide est un **corps pur** (un mélange n'a en général pas de palier net).

4. La température du palier, **78 °C**, est la température d'ébullition de l'**éthanol**.

5. **Non** : lors d'un changement d'état, la masse se conserve. Le liquide qui disparaît se retrouve sous forme de vapeur (qui s'échappe dans l'air si le récipient est ouvert).

> Méthode : décrire le graphique ou le tableau (« augmente », « reste constante »), utiliser le vocabulaire (palier, corps pur, vaporisation), puis comparer aux données pour identifier.` },
      ],
    },
    {
      id: "combustions",
      titre: "Combustions, corrosion et gaz à effet de serre",
      theme: "Organisation et transformations de la matière",
      cours: `
## Qu'est-ce qu'une combustion ?
Une **combustion** est une **transformation chimique** entre un **combustible** (bois, carbone, méthane, butane, essence...) et un **comburant**, le **dioxygène** de l'air. Elle libère de l'énergie **thermique** (et souvent lumineuse : la flamme).

Pour qu'une combustion démarre et se poursuive, il faut **trois éléments** (le **triangle du feu**) : un **combustible**, un **comburant** (le dioxygène) et une **source d'énergie** pour l'allumer (flamme, étincelle). Pour éteindre un feu, on supprime l'un des trois : couvrir une casserole en feu avec un couvercle prive le feu de dioxygène.

## La combustion du carbone
Le charbon de bois est surtout du **carbone**. Il brûle dans le dioxygène en donnant du **dioxyde de carbone** :

~~~
C + O₂  →  CO₂
~~~

On identifie le dioxyde de carbone avec l'**eau de chaux**, qui se **trouble**.

## La combustion du méthane (gaz naturel)
Le méthane CH₄ brûle en produisant du **dioxyde de carbone** et de l'**eau** (de la buée apparaît sur une paroi froide au-dessus de la flamme ; elle bleuit le sulfate de cuivre anhydre) :

~~~
CH₄ + 2 O₂  →  CO₂ + 2 H₂O
~~~

>! **Exemple résolu (conservation de la masse)** : 16 g de méthane brûlent avec 64 g de dioxygène ; il se forme 36 g d'eau. Masse de dioxyde de carbone : (16 + 64) − 36 = **44 g**.

## Combustion complète ou incomplète
- Avec **assez de dioxygène**, la combustion est **complète** : flamme **bleue**, produits : dioxyde de carbone et eau.
- Avec **trop peu de dioxygène** (pièce mal aérée, appareil mal réglé), elle est **incomplète** : flamme **jaune**, dépôt noir de **carbone** (suie), et formation de **monoxyde de carbone CO**.

Exemple d'équation de combustion incomplète du méthane : 2 CH₄ + 3 O₂ → 2 CO + 4 H₂O.

>! **Danger : le monoxyde de carbone** est un gaz **incolore**, **inodore** et **très toxique** : il empêche le sang de transporter le dioxygène. Il provoque chaque hiver des intoxications, parfois mortelles. Prévention : **aérer** les pièces, ne jamais boucher les aérations, faire **entretenir** chaudières et chauffe-eau, installer un **détecteur de monoxyde de carbone**, ne jamais utiliser un barbecue ou un groupe électrogène à l'intérieur.

## Combustions et gaz à effet de serre
La Terre, chauffée par le Soleil, émet un rayonnement **infrarouge**. Certains gaz de l'atmosphère, les **gaz à effet de serre**, **absorbent** une partie de ce rayonnement : cela réchauffe l'atmosphère. Sans cet **effet de serre naturel**, la température moyenne sur Terre serait d'environ −18 °C au lieu de 15 °C.

| Gaz à effet de serre | Formule | Principales sources humaines |
|---|---|---|
| dioxyde de carbone | CO₂ | **combustions** de charbon, pétrole, gaz, bois ; déforestation |
| méthane | CH₄ | élevage, rizières, fuites de gaz, décharges |
| protoxyde d'azote | N₂O | engrais agricoles |
| vapeur d'eau | H₂O | (surtout d'origine naturelle) |

Les activités humaines, surtout les **combustions** des énergies fossiles, augmentent la quantité de ces gaz : l'effet de serre est **renforcé**, ce qui provoque le **réchauffement climatique**. Une partie du CO₂ se dissout dans les océans et les rend plus acides (leur pH diminue) : c'est l'**acidification des océans**.

Pistes pour limiter les émissions : utiliser des énergies **décarbonées** (renouvelables, nucléaire), isoler les bâtiments, consommer moins (sobriété), privilégier les transports en commun ou le vélo. L'**empreinte carbone** mesure la quantité de gaz à effet de serre émise par une activité ou une personne.

## La corrosion d'un métal
À l'air humide, le **fer rouille** : il réagit avec le **dioxygène** et l'**eau**. C'est une transformation chimique lente, appelée **corrosion**. La rouille (des oxydes de fer) est **poreuse** et s'effrite : la corrosion continue en profondeur.

>! **Expérience** : trois clous en fer, l'un dans de l'air sec, l'un dans de l'eau bouillie (sans air) recouverte d'huile, l'un dans de l'eau au contact de l'air. Après quelques jours, **seul le troisième rouille** : il faut à la fois de l'**eau** et du **dioxygène**.

Protections : peinture, vernis, graisse, couche de zinc (acier **galvanisé**), acier **inoxydable**. L'aluminium se couvre d'une fine couche d'oxyde imperméable qui le protège.

>! **Erreurs fréquentes** :
>! - Le gaz qui trouble l'eau de chaux est le **dioxyde de carbone**, pas le dioxygène.
>! - Le dioxygène n'est pas un combustible : c'est le **comburant**. Il ne brûle pas lui-même.
>! - Le monoxyde de carbone (CO) et le dioxyde de carbone (CO₂) sont deux gaz différents : le CO est un poison, le CO₂ un gaz à effet de serre.

> **À retenir** :
> - Combustion = combustible + dioxygène (comburant) ; il faut aussi une source d'énergie (triangle du feu).
> - C + O₂ → CO₂ ; CH₄ + 2 O₂ → CO₂ + 2 H₂O. Le CO₂ trouble l'eau de chaux.
> - Manque de dioxygène : combustion incomplète, flamme jaune, suie et monoxyde de carbone (toxique, inodore).
> - Gaz à effet de serre : CO₂, CH₄, N₂O, vapeur d'eau. Les combustions renforcent l'effet de serre.
> - Corrosion : le fer rouille avec l'eau et le dioxygène.
`,
      exercices: [
        { type: "qcm", question: "Lors de la combustion du bois dans une cheminée, quel est le comburant ?", choix: ["Le bois", "Le dioxyde de carbone", "Le dioxygène de l'air", "La fumée"], reponse: 2, explication: "Le **comburant** est le **dioxygène** de l'air. Le bois est le **combustible** ; le dioxyde de carbone est un **produit** de la combustion." },
        { type: "saisie", question: "Quel réactif permet de mettre en évidence le dioxyde de carbone ?", reponses: ["eau de chaux", "l'eau de chaux"], explication: "Le dioxyde de carbone **trouble l'eau de chaux**." },
        { type: "qcm", question: "Lequel de ces éléments ne fait pas partie du triangle du feu ?", choix: ["Un combustible", "Un comburant", "Une source d'énergie", "Du dioxyde de carbone"], reponse: 3, explication: "Le triangle du feu réunit **combustible**, **comburant** (dioxygène) et **source d'énergie**. Le dioxyde de carbone est un produit de combustion : il ne l'entretient pas, il sert même dans certains extincteurs." },
        { type: "vf", question: "Le monoxyde de carbone est facile à repérer car il a une forte odeur.", reponse: false, explication: "Le monoxyde de carbone est **incolore** et **inodore** : on ne le sent pas, c'est ce qui le rend si dangereux. D'où l'intérêt d'un **détecteur de monoxyde de carbone** et de l'aération." },
        { type: "qcm", question: "La flamme d'un réchaud est jaune et noircit le fond de la casserole. Cela indique :", choix: ["une combustion complète", "une combustion incomplète, par manque de dioxygène", "une absence de combustion", "une combustion sans combustible"], reponse: 1, explication: "Flamme **jaune** et dépôt noir de **carbone** (suie) : la combustion est **incomplète**, il manque du dioxygène. Elle peut produire du monoxyde de carbone, toxique." },
        { type: "saisie", question: "3 g de carbone brûlent complètement avec 8 g de dioxygène. Seul du dioxyde de carbone se forme. Quelle masse de dioxyde de carbone obtient-on ? (en g)", reponses: ["11 g", "11 grammes", "11 g de CO2", "11 g de dioxyde de carbone"], explication: "Conservation de la masse : 3 + 8 = **11 g** de dioxyde de carbone." },
        { type: "saisie", question: "Ajuste l'équation de combustion complète du propane : C₃H₈ + … O₂ → 3 CO₂ + 4 H₂O. Quel coefficient faut-il placer devant O₂ ?", reponses: ["5", "5 O2", "5 O₂"], explication: "À droite : 3 × 2 + 4 × 1 = 10 atomes O. Chaque O₂ en apporte 2 : il faut **5** O₂. Vérification : 3 C, 8 H et 10 O de chaque côté." },
        { type: "qcm", question: "Parmi ces gaz de l'atmosphère, lequel est un gaz à effet de serre ?", choix: ["Le dioxyde de carbone", "Le diazote", "Le dioxygène", "L'argon"], reponse: 0, explication: "Le **dioxyde de carbone** absorbe une partie du rayonnement infrarouge émis par la Terre : c'est un gaz à effet de serre, comme le méthane, le protoxyde d'azote et la vapeur d'eau. Le diazote, le dioxygène et l'argon n'en sont pas." },
        { type: "vf", question: "Un clou en fer placé dans de l'air parfaitement sec ne rouille pas.", reponse: true, explication: "La rouille se forme avec **à la fois** du dioxygène **et** de l'eau. Dans l'air sec, il manque l'eau : le clou ne rouille pas." },
        { type: "redaction", question: "**Type brevet.** En hiver, une famille utilise un chauffe-eau au gaz (méthane) dans une petite salle de bains dont elle a bouché l'aération pour avoir moins froid.\n1. Nomme les réactifs et les produits de la combustion complète du méthane, puis vérifie que l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O est ajustée.\n2. La combustion de 16 g de méthane consomme 64 g de dioxygène et produit 36 g d'eau. Calcule la masse de dioxyde de carbone formée et nomme la loi utilisée.\n3. Pourquoi boucher l'aération est-il dangereux ? Quel gaz risque de se former ? Donne deux conseils de prévention.\n4. Le dioxyde de carbone produit est-il sans conséquence pour l'environnement ? Explique.", corrige: `1. **Réactifs** : le méthane et le dioxygène. **Produits** : le dioxyde de carbone et l'eau.

| Élément | À gauche | À droite |
|---|---|---|
| C | 1 | 1 |
| H | 4 | 2 × 2 = 4 |
| O | 2 × 2 = 4 | 2 + 2 × 1 = 4 |

Il y a autant d'atomes de chaque élément de chaque côté : l'équation est **ajustée**.

2. **Conservation de la masse** (loi de Lavoisier) : masse des réactifs = masse des produits.
16 + 64 = 80 g. Masse de dioxyde de carbone = 80 − 36 = **44 g**.

3. Sans aération, le dioxygène de la pièce s'épuise : la combustion devient **incomplète** et produit du **monoxyde de carbone CO**, un gaz **incolore, inodore et très toxique** (il peut être mortel). Conseils : ne jamais boucher les aérations et **aérer** chaque jour ; faire **entretenir** le chauffe-eau chaque année ; installer un **détecteur de monoxyde de carbone**.

4. Non : le **dioxyde de carbone** est un **gaz à effet de serre**. Il absorbe une partie du rayonnement infrarouge émis par la Terre ; en augmentant sa quantité dans l'atmosphère, les combustions **renforcent l'effet de serre** et contribuent au **réchauffement climatique** (et à l'acidification des océans).

> Méthode : tableau de comptage des atomes, calcul avec la conservation de la masse, puis réponses rédigées avec le vocabulaire du cours (combustion incomplète, monoxyde de carbone, effet de serre).` },
      ],
    },
  ],
};
