export default {
  chapitres: [
    {
      id: "information-genetique",
      titre: "L'information génétique : chromosomes, gènes et ADN",
      theme: "Le vivant et son évolution",
      cours: `
## Des caractères qui se transmettent
Chaque être humain possède des **caractères** : groupe sanguin, couleur des yeux, forme du lobe de l'oreille... Certains sont **héréditaires** : ils se transmettent des parents aux enfants. D'autres dépendent aussi de l'**environnement** : la couleur de la peau fonce au soleil, la masse musculaire augmente avec l'entraînement, la taille dépend aussi de l'alimentation.

>! **Exemple** : deux vrais jumeaux ont la même information génétique. Si l'un fait beaucoup de sport et l'autre non, leur musculature sera différente : un caractère résulte souvent de l'information génétique **et** de l'environnement.

## Où se trouve l'information génétique ?
L'information génétique se trouve dans le **noyau** de chaque cellule.

>! **L'expérience de l'acétabulaire** : l'acétabulaire est une algue d'une seule cellule, géante (plusieurs centimètres). Si on greffe le noyau d'une espèce dont le chapeau est en forme de fleur sur une cellule sans noyau d'une espèce à chapeau lisse, le nouveau chapeau qui repousse prend la forme de l'espèce qui a **donné le noyau**. Conclusion : c'est le noyau qui contient l'information qui détermine les caractères.

Dans le noyau, on trouve les **chromosomes**. Ils sont formés d'une molécule très longue : l'**ADN** (acide désoxyribonucléique).

## Les chromosomes et le caryotype
Pendant la division d'une cellule, les chromosomes deviennent bien visibles au microscope. On peut alors les photographier, les classer par taille et par paires : c'est le **caryotype**.

| Caryotype humain | Contenu |
|---|---|
| 22 paires d'**autosomes** | identiques chez la fille et le garçon, numérotées de 1 à 22 |
| 1 paire de **chromosomes sexuels** | **XX** chez la femme, **XY** chez l'homme |
| Total | **46 chromosomes**, soit **23 paires** |

Dans chaque paire, un chromosome vient du **père** et l'autre de la **mère**. Toutes les cellules du corps (sauf les cellules reproductrices) ont le même nombre de chromosomes : 46 chez l'humain. Ce nombre est **propre à chaque espèce** : 78 chez le chien, 8 chez la drosophile (mouche du vinaigre).

>! **Le caryotype peut révéler une anomalie** : la **trisomie 21** est due à la présence de **trois chromosomes 21** au lieu de deux. La personne possède alors 47 chromosomes.

## Les gènes et les allèles
Un **gène** est une portion d'ADN, située à un endroit précis d'un chromosome, qui contient l'information pour un caractère héréditaire. L'être humain possède environ **20 000 gènes**.

Un même gène peut exister sous plusieurs versions : ce sont les **allèles**. Par exemple, le gène du groupe sanguin (sur le chromosome 9) existe sous trois allèles principaux : A, B et O.

Comme les chromosomes vont par paires, chaque individu possède **deux allèles** de chaque gène (un venant du père, un de la mère). Ils peuvent être identiques ou différents.
- Un allèle **dominant** s'exprime même s'il n'est présent qu'en un seul exemplaire.
- Un allèle **récessif** ne s'exprime que s'il est présent en **deux exemplaires**.

>! **Exemple résolu : les groupes sanguins**. Les allèles A et B sont dominants sur O ; A et B s'expriment tous les deux ensemble : on dit qu'ils sont **codominants**.
>! - Allèles A et O → groupe **A** ; allèles A et A → groupe A.
>! - Allèles B et O → groupe **B**.
>! - Allèles A et B → groupe **AB**.
>! - Allèles O et O → groupe **O** (l'allèle récessif s'exprime car il est en deux exemplaires).

Deux allèles sont **codominants** quand, présents ensemble, ils s'expriment **tous les deux**, sans que l'un masque l'autre. C'est le cas des allèles A et B : une personne qui possède A et B porte à la fois la molécule A et la molécule B à la surface de ses globules rouges ; elle est du groupe **AB** (ce n'est ni le groupe A, ni le groupe B, ni un mélange « à moitié »).

## La molécule d'ADN
L'ADN a la forme d'une **double hélice** (comme une échelle torsadée). Il est formé d'un enchaînement de quatre « lettres », les **nucléotides**, notés **A, T, C et G**. C'est l'**ordre** de ces lettres (la **séquence**) qui constitue l'information génétique, comme l'ordre des lettres d'un mot donne son sens. L'ADN est universel : on retrouve la même molécule, avec les mêmes quatre lettres, chez tous les êtres vivants.

>! **Attention à une erreur fréquente** : chromosome, gène et ADN ne sont pas trois choses séparées. Un **chromosome** est une molécule d'**ADN** (associée à des protéines) ; un **gène** est un **morceau** de cette molécule.

> **À retenir** :
> - L'information génétique est dans le noyau, portée par les chromosomes, formés d'ADN.
> - L'humain a 46 chromosomes (23 paires) ; XX chez la femme, XY chez l'homme. Le caryotype les classe par paires.
> - Un gène = une portion d'ADN qui code un caractère ; ses différentes versions sont les allèles.
> - Chaque individu a deux allèles de chaque gène, l'un du père, l'autre de la mère ; un allèle dominant s'exprime même seul, un allèle récessif seulement en double ; deux allèles codominants (comme A et B) s'expriment tous les deux.
> - Un caractère dépend de l'information génétique et souvent aussi de l'environnement.
`,
      exercices: [
        { type: "qcm", question: "Dans quelle partie de la cellule se trouvent les chromosomes ?", choix: ["Dans la membrane", "Dans le noyau", "Dans le cytoplasme, en dehors du noyau", "À l'extérieur de la cellule"], reponse: 1, explication: "Les chromosomes, porteurs de l'information génétique, se trouvent dans le **noyau**. L'expérience de l'acétabulaire montre que c'est le noyau qui détermine les caractères." },
        { type: "saisie", question: "Combien de chromosomes contient une cellule de peau d'un être humain ?", reponses: ["46", "quarante-six", "quarante six"], explication: "Une cellule humaine (sauf les cellules reproductrices) contient **46 chromosomes**, soit 23 paires." },
        { type: "vf", question: "Un garçon possède deux chromosomes X.", reponse: false, explication: "Un garçon possède un chromosome **X** et un chromosome **Y** (XY). Ce sont les filles qui possèdent deux chromosomes X (XX)." },
        { type: "saisie", question: "Comment appelle-t-on les différentes versions d'un même gène ?", reponses: ["allèles", "allèle", "des allèles"], explication: "Ce sont les **allèles**. Par exemple, le gène du groupe sanguin existe sous les allèles A, B et O." },
        { type: "qcm", question: "Quelle phrase décrit correctement un gène ?", choix: ["Une cellule spécialisée du noyau", "Un chromosome entier", "Une portion d'ADN qui contient l'information d'un caractère héréditaire", "Une protéine qui entoure les chromosomes"], reponse: 2, explication: "Un **gène** est une **portion d'ADN**, à un endroit précis d'un chromosome. Un chromosome porte des centaines à des milliers de gènes." },
        { type: "vf", question: "Une personne qui possède les allèles A et O a le groupe sanguin A.", reponse: true, explication: "L'allèle A est **dominant** sur l'allèle O, qui est récessif : il s'exprime seul. La personne est du groupe **A**." },
        { type: "qcm", question: "Une personne est du groupe sanguin O. Quels allèles possède-t-elle ?", choix: ["O et O", "A et O", "B et O", "On ne peut pas le savoir"], reponse: 0, explication: "L'allèle O est **récessif** : il ne s'exprime que s'il est présent en deux exemplaires. Une personne du groupe O possède donc forcément les allèles **O et O**." },
        { type: "qcm", question: "Le caryotype d'une personne montre 47 chromosomes, dont trois chromosomes 21. De quoi s'agit-il ?", choix: ["D'un caryotype normal de garçon", "D'une trisomie 21", "D'un caryotype de fille", "D'une mutation d'un seul gène"], reponse: 1, explication: "Trois chromosomes 21 au lieu de deux : c'est une **trisomie 21**. C'est une anomalie du **nombre** de chromosomes, pas la modification d'un seul gène." },
        { type: "redaction", question: "Deux vraies jumelles, Léa et Inès, ont exactement la même information génétique. Léa vit au bord de la mer et passe beaucoup de temps au soleil ; Inès vit en ville et sort peu. À 30 ans, Léa a la peau plus foncée qu'Inès. Mais elles ont toutes les deux les yeux verts et le groupe sanguin B. Explique, à partir de cet exemple, ce qui détermine les caractères d'un individu.", corrige: `**Ce qui ne change pas** : les deux sœurs ont la même couleur des yeux et le même groupe sanguin. Elles ont la **même information génétique** (mêmes chromosomes, mêmes allèles) : ces caractères sont **héréditaires** et dépendent ici uniquement des gènes.

**Ce qui change** : la couleur de la peau est différente. Pourtant leurs gènes sont identiques. La différence vient donc de l'**environnement** : l'exposition au soleil fait foncer la peau (bronzage).

**Conclusion** : les caractères d'un individu dépendent de son **information génétique** (portée par l'ADN des chromosomes, dans le noyau des cellules), mais certains dépendent **aussi de l'environnement** (soleil, alimentation, activité physique...).` },
        { type: "saisie", question: "Les allèles A et B du groupe sanguin s'expriment tous les deux chez une personne qui les possède ensemble. Comment qualifie-t-on deux allèles qui se comportent ainsi ?", reponses: ["codominants", "codominant", "allèles codominants", "des allèles codominants", "ils sont codominants"], explication: "Ils sont **codominants** : présents ensemble, ils s'expriment **tous les deux**, sans que l'un masque l'autre. Une personne qui possède A et B est du groupe **AB**." },
        { type: "qcm", question: "Une personne est du groupe sanguin AB. Quels allèles possède-t-elle ?", choix: ["A et O", "B et O", "A et B", "On ne peut pas le savoir"], reponse: 2, explication: "Pour être du groupe AB, il faut que les deux molécules A et B soient fabriquées : la personne possède l'allèle **A** et l'allèle **B**, qui sont **codominants**. Avec A et O, elle serait du groupe A ; avec B et O, du groupe B." },
        { type: "vf", question: "Un parent du groupe AB peut avoir un enfant du groupe O.", reponse: false, explication: "Un parent AB possède les allèles A et B : il transmet **toujours** A ou B à son enfant, jamais O. Pour être du groupe O, un enfant doit recevoir un allèle O de **chacun** de ses parents : c'est impossible avec un parent AB." },
      ],
    },
    {
      id: "mitose-renouvellement",
      titre: "La division cellulaire : copier et partager l'information génétique",
      theme: "Le vivant et son évolution",
      cours: `
## Un corps formé de milliards de cellules
Tout ton corps provient d'une seule cellule, la **cellule-œuf**. Ton corps compte aujourd'hui des dizaines de milliers de milliards de cellules. Elles proviennent toutes de **divisions successives** de cette cellule-œuf. Même adulte, le corps continue à fabriquer des cellules : pour **grandir**, pour **renouveler** la peau ou le sang, pour **réparer** une blessure.

## Toutes les cellules ont la même information génétique
Malgré leurs formes différentes (cellule de peau, neurone, globule blanc...), toutes les cellules d'un individu contiennent les **mêmes 46 chromosomes**, donc la **même information génétique**. Elles n'utilisent simplement pas toutes les mêmes gènes.

## La mitose en deux temps
1. **La copie (duplication) de l'ADN** : avant la division, chaque chromosome fabrique une copie identique de son ADN. Le chromosome est alors formé de **deux chromatides** identiques, attachées au niveau d'un point appelé **centromère** (il a une forme de X).
2. **La division (mitose)** : les chromosomes se condensent et deviennent visibles, s'alignent au centre de la cellule, puis les deux chromatides de chaque chromosome **se séparent** et partent chacune vers un côté de la cellule. La cellule se coupe en deux.

| Avant la duplication | Après la duplication | Après la mitose |
|---|---|---|
| 1 cellule, 46 chromosomes à 1 chromatide | 1 cellule, 46 chromosomes à 2 chromatides | 2 cellules, chacune avec 46 chromosomes à 1 chromatide |

>! **Bilan** : une cellule mère donne **deux cellules filles identiques** entre elles et identiques à la cellule mère. L'information génétique est **conservée** : même nombre de chromosomes, mêmes allèles.

>! **Calcul** : à partir d'une cellule, combien de cellules après 10 divisions successives ? Le nombre double à chaque fois : 2 × 2 × ... (10 fois) = 2¹⁰ = **1 024 cellules**.

## Quand la division n'est plus contrôlée : le cancer
Normalement, les divisions sont **contrôlées** : une cellule ne se divise que lorsque c'est nécessaire. Si l'ADN d'une cellule est abîmé (par des **mutations**), elle peut se mettre à se diviser sans arrêt : elle forme une **tumeur**. Certains facteurs augmentent ce risque : le **tabac**, les **rayons ultraviolets** (coups de soleil répétés), l'alcool, certaines substances chimiques.

## Le clonage et la reproduction asexuée
La mitose est aussi à l'origine de la **reproduction asexuée** des plantes et des animaux (bouturage d'une plante, bourgeonnement de l'hydre) : les descendants sont des **clones**, génétiquement identiques au parent. Les bactéries, qui n'ont pas de noyau, se divisent par un mécanisme plus simple que la mitose, mais qui donne aussi des clones.

>! **Attention à une erreur fréquente** : après la mitose, chaque cellule fille a **46 chromosomes**, pas 23. On ne divise pas le nombre de chromosomes par deux : on a d'abord **doublé** l'ADN, puis on l'a partagé.

> **À retenir** :
> - Toutes les cellules d'un individu proviennent de la cellule-œuf par divisions successives et possèdent la même information génétique.
> - Avant la division, chaque chromosome est copié : il a alors deux chromatides identiques.
> - Pendant la mitose, les chromatides se séparent : on obtient deux cellules filles identiques, avec 46 chromosomes chacune.
> - Des divisions non contrôlées, après des mutations, peuvent provoquer un cancer.
`,
      exercices: [
        { type: "vf", question: "Un neurone et une cellule de la peau d'une même personne contiennent la même information génétique.", reponse: true, explication: "Toutes les cellules d'un individu proviennent de la cellule-œuf par **mitoses** successives : elles ont les **mêmes chromosomes**. Elles n'utilisent pas toutes les mêmes gènes, d'où leurs différences." },
        { type: "qcm", question: "Combien de chromosomes possède chacune des cellules obtenues après la mitose d'une cellule humaine ?", choix: ["23", "92", "46", "Cela dépend de la cellule"], reponse: 2, explication: "La mitose conserve l'information génétique : chaque cellule fille a **46 chromosomes**, comme la cellule mère." },
        { type: "saisie", question: "Comment appelle-t-on les deux copies identiques qui forment un chromosome après la duplication de l'ADN ?", reponses: ["chromatides", "chromatide", "des chromatides", "deux chromatides", "chromatides sœurs", "2 chromatides", "chromatides soeurs"], explication: "Ce sont les **chromatides**, reliées par le centromère. Elles se séparent pendant la mitose." },
        { type: "qcm", question: "Que se passe-t-il juste AVANT la mitose ?", choix: ["L'ADN de chaque chromosome est copié", "Les chromosomes disparaissent", "La cellule perd la moitié de ses chromosomes", "Deux cellules fusionnent"], reponse: 0, explication: "Avant de se diviser, la cellule **copie son ADN** : chaque chromosome a alors deux chromatides identiques. Ainsi, chaque cellule fille recevra un exemplaire complet." },
        { type: "saisie", question: "Une cellule se divise par mitose toutes les 24 heures. Combien de cellules obtient-on à partir d'une seule cellule au bout de 5 jours ?", reponses: ["32", "32 cellules", "trente-deux", "2^5", "2⁵", "2 puissance 5"], explication: "5 jours = 5 divisions. Le nombre double à chaque fois : 1 → 2 → 4 → 8 → 16 → **32** (2⁵ = 32)." },
        { type: "vf", question: "Les plants de fraisiers obtenus par bouturage à partir d'un même pied sont génétiquement identiques à ce pied.", reponse: true, explication: "Le bouturage est une **reproduction asexuée** : les nouvelles cellules sont produites par **mitose**. Les plants obtenus sont des **clones** du pied d'origine." },
        { type: "qcm", question: "Lequel de ces facteurs augmente le risque de cancer de la peau ?", choix: ["Boire de l'eau", "Les coups de soleil répétés", "Dormir huit heures par nuit", "Manger des fruits"], reponse: 1, explication: "Les **rayons ultraviolets** du soleil peuvent abîmer l'ADN (mutations) des cellules de la peau. Des cellules peuvent alors se diviser sans contrôle et former une tumeur." },
        { type: "qcm", question: "Une cellule a 46 chromosomes à une chromatide. Juste après la copie de l'ADN, combien de chromatides contient-elle au total ?", choix: ["46", "23", "184", "92"], reponse: 3, explication: "Après la copie, il y a toujours **46 chromosomes**, mais chacun a **2 chromatides** : 46 × 2 = **92 chromatides**." },
        { type: "redaction", question: "Explique, en quelques phrases organisées, comment une cellule de ta peau peut donner deux cellules qui possèdent exactement la même information génétique qu'elle. Tu utiliseras les mots : chromosome, ADN, copie, chromatides, mitose, cellules filles.", corrige: `Une cellule de la peau possède **46 chromosomes**, formés d'**ADN**, qui portent l'information génétique.

1. **La copie** : avant de se diviser, la cellule réalise une **copie** exacte de l'ADN de chaque chromosome. Chaque chromosome est alors formé de **deux chromatides** identiques.
2. **La mitose** : les chromosomes s'alignent au centre de la cellule, puis les deux **chromatides** de chaque chromosome se séparent et partent chacune d'un côté. La cellule se coupe en deux.

**Bilan** : on obtient deux **cellules filles** qui ont chacune **46 chromosomes**, avec la même information génétique que la cellule mère. C'est ainsi que la peau se renouvelle tout au long de la vie, sans changer d'information génétique.` },
      ],
    },
    {
      id: "meiose-fecondation",
      titre: "Méiose et fécondation : chaque individu est unique",
      theme: "Le vivant et son évolution",
      cours: `
## Les cellules reproductrices : 23 chromosomes
Lors de la reproduction sexuée, un **spermatozoïde** (cellule reproductrice du père) s'unit à un **ovule** (cellule reproductrice de la mère) : c'est la **fécondation**. Si chacun avait 46 chromosomes, la cellule-œuf en aurait 92 ! En réalité, les cellules reproductrices (les **gamètes**) ne contiennent que **23 chromosomes** : **un seul chromosome de chaque paire**.

## La méiose : fabriquer des gamètes
Les gamètes sont produits dans les **testicules** et les **ovaires** par une division particulière : la **méiose**. Elle se fait en deux divisions successives après une copie de l'ADN. À la fin, une cellule à 46 chromosomes donne **4 cellules à 23 chromosomes**.

Pendant la méiose, les chromosomes de chaque paire **se séparent** : chaque gamète reçoit au hasard **soit** le chromosome que la personne a hérité de **son père**, **soit** celui qu'elle a hérité de **sa mère**, et cela **pour chacune des 23 paires**, indépendamment des autres.

>! **Exemple** : dans les testicules de Paul, chaque paire contient un chromosome venu du père de Paul et un venu de la mère de Paul. Un spermatozoïde de Paul peut ainsi recevoir le chromosome 1 venu du père de Paul, le chromosome 2 venu de sa mère, etc. : chaque spermatozoïde reçoit un mélange différent.

>! **Calcul : combien de gamètes différents ?** Pour une paire, il y a 2 possibilités. Pour 2 paires : 2 × 2 = 4. Pour les 23 paires : 2²³ = **8 388 608**, soit plus de **8 millions** de gamètes différents possibles pour une seule personne, rien qu'en répartissant les chromosomes (sans compter les échanges de morceaux entre chromosomes d'une paire).

## La fécondation : rétablir 46 chromosomes
À la fécondation, le noyau du spermatozoïde (23 chromosomes) s'unit au noyau de l'ovule (23 chromosomes) : la **cellule-œuf** possède **46 chromosomes**, soit 23 paires. Dans chaque paire, un chromosome vient du père, l'autre de la mère.

| Cellule | Nombre de chromosomes |
|---|---|
| Cellule du corps | 46 (23 paires) |
| Gamète (ovule ou spermatozoïde) | 23 (un de chaque paire) |
| Cellule-œuf | 23 + 23 = 46 |

Le hasard intervient deux fois : dans la **méiose** (quel chromosome va dans quel gamète) et dans la **fécondation** (quel spermatozoïde rencontre quel ovule). Pour un couple, le nombre de combinaisons possibles est au moins de 2²³ × 2²³, soit environ **70 000 milliards**. C'est pourquoi chaque individu est **génétiquement unique** (sauf les vrais jumeaux, issus d'une même cellule-œuf qui s'est séparée en deux).

## Fille ou garçon ?
Tous les ovules possèdent un chromosome **X**. Les spermatozoïdes possèdent soit un **X**, soit un **Y** (moitié-moitié). C'est donc le spermatozoïde qui détermine le sexe génétique : ovule X + spermatozoïde X → **XX** (fille) ; ovule X + spermatozoïde Y → **XY** (garçon). Il y a une chance sur deux d'avoir une fille.

>! **Exemple résolu : un tableau de croisement**. Un père de groupe A, d'allèles A et O, et une mère de groupe B, d'allèles B et O. Le père produit des spermatozoïdes A ou O ; la mère des ovules B ou O.
>!
>! | | ovule B | ovule O |
>! |---|---|---|
>! | spermatozoïde A | AB → groupe AB | AO → groupe A |
>! | spermatozoïde O | BO → groupe B | OO → groupe O |
>!
>! Chaque enfant a 1 chance sur 4 d'avoir chaque groupe : ces parents peuvent avoir des enfants des quatre groupes.

>! **Attention à une erreur fréquente** : la méiose ne fabrique pas des cellules « à moitié vides ». Chaque gamète possède un exemplaire **complet** de chaque gène, c'est-à-dire un allèle de chaque gène.

> **À retenir** :
> - La méiose produit des gamètes à 23 chromosomes, un de chaque paire, répartis au hasard : plus de 8 millions de gamètes différents par personne.
> - La fécondation réunit 23 + 23 chromosomes : la cellule-œuf retrouve 46 chromosomes.
> - Le hasard de la méiose et de la fécondation rend chaque individu génétiquement unique.
> - Le sexe dépend du chromosome sexuel apporté par le spermatozoïde (X ou Y).
`,
      exercices: [
        { type: "saisie", question: "Combien de chromosomes contient un spermatozoïde humain ?", reponses: ["23", "vingt-trois", "vingt trois"], explication: "Les gamètes contiennent **23 chromosomes** : un seul chromosome de chaque paire, grâce à la méiose." },
        { type: "qcm", question: "Où se déroule la méiose chez l'être humain ?", choix: ["Dans le cerveau", "Dans tous les organes", "Dans l'utérus", "Dans les ovaires et les testicules"], reponse: 3, explication: "La méiose produit les gamètes : elle a lieu dans les **ovaires** (ovules) et les **testicules** (spermatozoïdes)." },
        { type: "vf", question: "C'est l'ovule qui détermine si l'enfant sera une fille ou un garçon.", reponse: false, explication: "Tous les ovules portent un chromosome **X**. C'est le **spermatozoïde**, qui porte soit un X soit un Y, qui détermine le sexe génétique." },
        { type: "qcm", question: "Quel est le rôle de la fécondation du point de vue des chromosomes ?", choix: ["Elle divise par deux le nombre de chromosomes", "Elle rétablit le nombre de 46 chromosomes en réunissant deux gamètes à 23 chromosomes", "Elle copie l'ADN de la cellule-œuf", "Elle supprime les chromosomes sexuels"], reponse: 1, explication: "La fécondation réunit 23 chromosomes du père et 23 de la mère : **23 + 23 = 46**. La méiose divise par deux, la fécondation rétablit le nombre." },
        { type: "saisie", question: "Combien de gamètes génétiquement différents un individu peut-il produire en ne tenant compte que de 3 paires de chromosomes ?", reponses: ["8", "huit", "2^3", "2³", "8 gamètes", "2 puissance 3"], explication: "Pour chaque paire, 2 possibilités : 2 × 2 × 2 = 2³ = **8** gamètes différents." },
        { type: "vf", question: "Deux frères (qui ne sont pas de vrais jumeaux) ont la même information génétique.", reponse: false, explication: "Chacun provient d'un spermatozoïde et d'un ovule **différents**, issus d'une méiose où les chromosomes se répartissent au hasard. Ils ont donc des combinaisons d'allèles différentes. Seuls les **vrais jumeaux** (issus d'une même cellule-œuf) sont génétiquement identiques." },
        { type: "qcm", question: "Un père a les allèles A et O, une mère a les allèles O et O. Quels groupes sanguins peuvent avoir leurs enfants ?", choix: ["A ou O", "Seulement A", "Seulement O", "A, B, AB ou O"], reponse: 0, explication: "Le père donne A ou O, la mère donne toujours O. Enfants possibles : **AO (groupe A)** ou **OO (groupe O)**, chacun avec une chance sur deux. Personne n'apporte d'allèle B." },
        { type: "saisie", question: "Un couple attend un enfant. Quelle est la probabilité que ce soit une fille ? (écris une fraction ou un pourcentage)", reponses: ["1/2", "50 %", "50%", "0,5", "une chance sur deux", "une chance sur 2", "1 chance sur 2", "1 sur 2", "une sur deux", "moitié"], explication: "La moitié des spermatozoïdes porte un X et l'autre moitié un Y : il y a **1 chance sur 2** (50 %) d'avoir une fille (XX)." },
        { type: "redaction", question: "Sujet type brevet. Le père de Noé est du groupe sanguin A (allèles A et O) et sa mère du groupe B (allèles B et O). Noé est du groupe O. Sa sœur dit : « C'est impossible, aucun de nos parents n'est du groupe O ! » 1) Indique les gamètes que peut produire chaque parent, en expliquant le rôle de la méiose. 2) Réalise un tableau de croisement. 3) Réponds à la sœur de Noé en argumentant.", corrige: `1) **Les gamètes** : pendant la **méiose**, les deux chromosomes de chaque paire se séparent : chaque gamète ne reçoit qu'**un seul allèle** de chaque gène.
- Le père (A et O) produit des spermatozoïdes portant soit l'allèle **A**, soit l'allèle **O**.
- La mère (B et O) produit des ovules portant soit l'allèle **B**, soit l'allèle **O**.

2) **Tableau de croisement** (fécondation au hasard) :

| | ovule B | ovule O |
|---|---|---|
| spermatozoïde A | AB : groupe AB | AO : groupe A |
| spermatozoïde O | BO : groupe B | OO : groupe O |

3) **Réponse à la sœur** : elle a tort. Chaque parent possède un allèle **O**, qui est **récessif** : il ne s'exprime pas chez eux car il est « masqué » par A chez le père et par B chez la mère. Si un spermatozoïde portant O féconde un ovule portant O, l'enfant possède deux allèles O et il est du **groupe O**. C'est le cas de Noé. Cette situation avait **1 chance sur 4** de se produire à chaque enfant.` },
        { type: "vf", question: "Paul a reçu 23 chromosomes de son père et 23 de sa mère. Chacun de ses spermatozoïdes contient exactement les 23 chromosomes que Paul a reçus de son père.", reponse: false, explication: "Pendant la méiose, pour **chaque paire**, le hasard décide si le spermatozoïde reçoit le chromosome venu du père de Paul ou celui venu de sa mère. Un spermatozoïde contient donc un **mélange** des deux (par exemple le chromosome 1 du père, le 2 de la mère...) : plus de 8 millions de combinaisons sont possibles." },
      ],
    },
    {
      id: "mutations-diversite",
      titre: "Mutations, diversité génétique et maladies génétiques",
      theme: "Le vivant et son évolution",
      cours: `
## Tous de la même espèce, mais tous différents
Tous les humains possèdent les **mêmes gènes**, aux mêmes endroits sur les mêmes chromosomes : c'est ce qui fait que nous sommes de la même espèce. Mais nous n'avons pas tous les **mêmes allèles** : c'est la **diversité génétique**. D'où viennent ces différents allèles ?

## Les mutations : à l'origine de nouveaux allèles
Une **mutation** est une modification de la **séquence de l'ADN** (par exemple une lettre remplacée par une autre). Elle peut transformer un allèle en un **nouvel allèle**.
- Les mutations sont **rares** et se produisent **au hasard**, le plus souvent par erreur lors de la copie de l'ADN.
- Leur fréquence est **augmentée** par des agents dits **mutagènes** : rayons **ultraviolets**, **radioactivité**, rayons X, certaines substances chimiques (comme celles de la **fumée de tabac**).

>! **Exemple** : séquence normale ...GAG... ; séquence mutée ...GTG... Une seule lettre a changé. C'est justement le cas d'une mutation du gène de l'hémoglobine, qui provoque la **drépanocytose** : les globules rouges prennent une forme de faucille et circulent mal.

Une mutation peut avoir des effets **variés** : aucun effet visible, un effet défavorable (maladie), ou parfois un effet favorable dans un certain milieu.

## Mutation dans le corps ou dans les gamètes ?
| Où a lieu la mutation ? | Conséquence |
|---|---|
| Dans une cellule du corps (peau, poumon...) | elle ne concerne que les cellules issues de cette cellule ; elle **n'est pas transmise** aux enfants (elle peut parfois provoquer un cancer) |
| Dans une cellule qui donnera des **gamètes** | elle peut être **transmise à la descendance** : un nouvel allèle apparaît dans l'espèce |

## Les maladies génétiques
Certaines maladies sont dues à un allèle muté transmis par les parents : la **mucoviscidose** (mucus trop épais dans les poumons et le tube digestif), la **drépanocytose**, la myopathie de Duchenne... Pour la mucoviscidose et la drépanocytose, l'allèle responsable est **récessif** : une personne malade possède **deux allèles mutés**, un venant de chaque parent. Une personne qui n'en a qu'un n'est pas malade : on dit qu'elle est **porteuse saine**.

>! **Lire un arbre généalogique** : les carrés sont les hommes, les ronds sont les femmes, les symboles noircis indiquent les personnes malades. Si deux parents non malades ont un enfant malade, c'est que l'allèle de la maladie est **récessif** et que chaque parent le **porte** sans être malade.

>! **Exemple résolu** : deux parents porteurs sains de la mucoviscidose (allèles N et m, N = normal dominant, m = muté récessif). Chacun donne N ou m. Enfants possibles : NN, Nm, mN, mm. Seul **mm** est malade : risque de **1 sur 4** à chaque naissance.

## La diversité génétique, une richesse
Grâce aux mutations (qui créent de nouveaux allèles) et à la reproduction sexuée (qui mélange les allèles à chaque génération), une population contient une grande **diversité génétique**. Elle est une des composantes de la **biodiversité** et permet aux espèces de **s'adapter** quand le milieu change.

> **À retenir** :
> - Une mutation est une modification rare et aléatoire de la séquence de l'ADN ; elle crée de nouveaux allèles.
> - Les UV, la radioactivité et certaines substances (tabac) augmentent la fréquence des mutations.
> - Seules les mutations des cellules à l'origine des gamètes se transmettent aux descendants.
> - Une maladie génétique récessive apparaît chez un enfant qui a reçu un allèle muté de chacun de ses parents.
> - Mutations et reproduction sexuée créent la diversité génétique des populations.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on une modification de la séquence de l'ADN ?", reponses: ["mutation", "une mutation", "mutations"], explication: "C'est une **mutation**. Elle peut créer un nouvel allèle." },
        { type: "vf", question: "Les mutations sont fréquentes et se produisent toujours dans le but d'aider l'individu à s'adapter.", reponse: false, explication: "Les mutations sont **rares** et se produisent **au hasard**, sans « but ». Leur effet peut être nul, défavorable ou parfois favorable selon le milieu." },
        { type: "qcm", question: "Lequel de ces agents augmente la fréquence des mutations ?", choix: ["L'eau potable", "Le dioxygène de l'air", "Les rayons ultraviolets", "Le sommeil"], reponse: 2, explication: "Les **ultraviolets** (soleil, cabines de bronzage) sont **mutagènes**, comme la radioactivité, les rayons X et certaines substances de la fumée de tabac." },
        { type: "qcm", question: "Un homme a une mutation dans une cellule de la peau de son bras. Que peut-on dire ?", choix: ["Elle sera transmise à tous ses enfants", "Elle modifie l'ADN de toutes ses cellules", "Elle sera transmise à la moitié de ses enfants", "Elle ne sera pas transmise à ses enfants"], reponse: 3, explication: "Une mutation dans une cellule du corps (et non dans une cellule à l'origine des gamètes) **n'est pas transmise** aux enfants. Elle ne concerne que les cellules issues de cette cellule." },
        { type: "saisie", question: "Comment appelle-t-on une personne qui possède un seul allèle muté d'une maladie récessive et qui n'est donc pas malade ?", reponses: ["porteuse saine", "porteur sain", "porteur", "porteuse", "une porteuse saine", "un porteur sain", "hétérozygote", "porteurs sains"], explication: "Elle est **porteuse saine** : l'allèle normal, dominant, masque l'allèle muté. Elle peut cependant le transmettre à ses enfants." },
        { type: "vf", question: "Deux parents non malades peuvent avoir un enfant atteint de mucoviscidose.", reponse: true, explication: "Si les deux parents sont **porteurs sains** (un allèle normal et un allèle muté chacun), l'enfant peut recevoir l'allèle muté de chacun : il a alors deux allèles mutés et il est malade (risque de 1 sur 4)." },
        { type: "qcm", question: "Deux parents sont porteurs sains de la drépanocytose. Quel est le risque, à chaque naissance, que l'enfant soit malade ?", choix: ["0 %", "100 %", "50 %", "25 %"], reponse: 3, explication: "Chaque parent transmet l'allèle muté avec une chance sur deux : 1/2 × 1/2 = **1/4**, soit **25 %**." },
        { type: "qcm", question: "Quels sont les deux mécanismes à l'origine de la diversité génétique dans une population ?", choix: ["Les mutations et la reproduction sexuée", "La mitose et le sommeil", "La digestion et la respiration", "Le bronzage et la musculation"], reponse: 0, explication: "Les **mutations** créent de nouveaux allèles ; la **reproduction sexuée** (méiose et fécondation) les mélange en combinaisons nouvelles à chaque génération." },
        { type: "redaction", question: "Sujet type brevet. Dans une famille, Paul et Julie ne sont pas malades. Leur fils Hugo est atteint de mucoviscidose ; leur fille Emma n'est pas malade. La mucoviscidose est due à un allèle muté (m) d'un gène ; l'allèle normal (N) est dominant. 1) Montre que l'allèle m est récessif. 2) Donne les allèles de Hugo, puis ceux de Paul et Julie. 3) Paul et Julie attendent un troisième enfant : calcule le risque qu'il soit malade, en justifiant par un tableau.", corrige: `1) **L'allèle m est récessif** : Paul et Julie ne sont pas malades, mais leur fils Hugo l'est. Hugo a forcément reçu l'allèle m de ses parents. Ses parents possèdent donc cet allèle **sans être malades** : chez eux, l'allèle m ne s'exprime pas, il est masqué par l'allèle N. L'allèle m est donc **récessif**.

2) **Les allèles** :
- Hugo est malade : l'allèle m étant récessif, il possède **deux allèles m (m et m)**, un venant de son père et un de sa mère.
- Paul et Julie ne sont pas malades mais ont chacun transmis un allèle m : ils possèdent **N et m**. Ce sont des **porteurs sains**.

3) **Le risque pour le troisième enfant** : par la méiose, chaque parent produit des gamètes N ou m (une chance sur deux).

| | ovule N | ovule m |
|---|---|---|
| spermatozoïde N | NN : non malade | Nm : non malade (porteur) |
| spermatozoïde m | mN : non malade (porteur) | mm : malade |

Une seule case sur quatre correspond à un enfant malade : le risque est de **1/4, soit 25 %**, à chaque naissance, quel que soit le nombre d'enfants déjà nés.` },
      ],
    },
    {
      id: "evolution-selection",
      titre: "L'évolution des espèces : sélection naturelle et dérive génétique",
      theme: "Le vivant et son évolution",
      cours: `
## Les espèces changent au cours du temps
Les **fossiles** montrent que les êtres vivants ont changé au cours des temps géologiques : des espèces sont apparues, d'autres ont disparu (comme les dinosaures non aviens, il y a 66 millions d'années). Cette transformation des espèces au fil des générations s'appelle l'**évolution**. Elle s'explique par des changements de la **fréquence des allèles** dans les populations.

Une **population** est un ensemble d'individus de la même espèce qui vivent au même endroit et se reproduisent entre eux.

## La sélection naturelle
Dans une population, les individus sont tous un peu **différents** (diversité génétique due aux mutations et à la reproduction sexuée). Dans un milieu donné, certains individus possèdent des caractères qui leur permettent de **mieux survivre** et de **laisser plus de descendants**. Ils transmettent leurs allèles : au fil des générations, ces allèles deviennent plus **fréquents**. C'est la **sélection naturelle**, idée proposée par **Charles Darwin** en 1859.

>! **Exemple : la phalène du bouleau** (un papillon de nuit d'Angleterre). Elle existe sous une forme claire et une forme sombre, due à un allèle différent. Au XIXe siècle, la pollution par la suie des usines a noirci les troncs des arbres. Les phalènes claires, bien visibles sur les troncs sombres, étaient davantage mangées par les oiseaux. Les phalènes sombres, camouflées, survivaient mieux et se reproduisaient plus : près de Manchester, la forme sombre est devenue très majoritaire. Depuis la réduction de la pollution, les troncs ont retrouvé leur couleur et la forme claire est redevenue majoritaire.

>! **Exemple actuel : la résistance aux antibiotiques**. Parmi des milliards de bactéries, quelques-unes portent par hasard une mutation qui les rend résistantes à un antibiotique. Si on utilise cet antibiotique, les bactéries sensibles meurent et les résistantes se multiplient : la population devient résistante. C'est de la sélection naturelle observable en quelques années.

## Les étapes du raisonnement
1. **Variation** : les individus d'une population sont différents, en partie à cause de leurs allèles.
2. **Hérédité** : ces différences se transmettent aux descendants.
3. **Tri par le milieu** : dans un milieu donné, certains individus survivent et se reproduisent mieux.
4. **Résultat** : les allèles avantageux deviennent plus fréquents dans la population au fil des générations.

>! **Attention à une erreur fréquente** : ce n'est pas l'environnement qui « crée » la mutation utile. La mutation existe **avant**, apparue **au hasard** ; le milieu ne fait que **trier**. La phalène ne « décide » pas de devenir sombre, et la girafe n'a pas allongé son cou à force de l'étirer.

## La dérive génétique : le rôle du hasard
La fréquence des allèles peut aussi changer **par hasard**, sans avantage ni désavantage : c'est la **dérive génétique**. Par exemple, si quelques individus seulement colonisent une île, ou si une catastrophe tue une grande partie de la population par hasard, les survivants n'ont pas forcément les mêmes proportions d'allèles que la population de départ. La dérive est d'autant plus forte que la population est **petite**.

## Une nouvelle espèce peut apparaître
Si deux populations d'une même espèce sont **séparées** (par une montagne, un bras de mer...) pendant très longtemps, des mutations différentes s'y accumulent et la sélection naturelle et la dérive les font évoluer différemment. Elles peuvent finir par ne plus pouvoir se reproduire entre elles : une **nouvelle espèce** est apparue.

> **À retenir** :
> - L'évolution est la transformation des espèces au fil des générations ; elle correspond à des changements de fréquence des allèles.
> - Sélection naturelle : dans un milieu donné, les individus porteurs de certains allèles survivent et se reproduisent mieux ; ces allèles deviennent plus fréquents.
> - Les mutations apparaissent au hasard ; le milieu ne fait que trier.
> - Dérive génétique : changement de fréquence des allèles dû au hasard, plus fort dans les petites populations.
> - Des populations isolées longtemps peuvent devenir des espèces différentes.
`,
      exercices: [
        { type: "qcm", question: "Quel scientifique a proposé la théorie de la sélection naturelle en 1859 ?", choix: ["Louis Pasteur", "Charles Darwin", "Gregor Mendel", "Isaac Newton"], reponse: 1, explication: "**Charles Darwin** a publié *L'Origine des espèces* en 1859. Mendel a étudié la transmission des caractères, Pasteur les microbes." },
        { type: "vf", question: "Les phalènes du bouleau sont devenues sombres pour se camoufler sur les troncs noircis par la pollution.", reponse: false, explication: "Les papillons ne « deviennent » pas sombres volontairement. La forme sombre **existait déjà** (allèle apparu au hasard) ; sur les troncs noircis, ces papillons ont été moins mangés et se sont plus reproduits : leur allèle est devenu plus fréquent. C'est la **sélection naturelle**." },
        { type: "saisie", question: "Comment appelle-t-on la modification, due uniquement au hasard, de la fréquence des allèles dans une population ?", reponses: ["dérive génétique", "la dérive génétique", "dérive"], explication: "C'est la **dérive génétique**. Elle est plus forte dans les petites populations." },
        { type: "qcm", question: "Dans quel cas la dérive génétique a-t-elle le plus d'effet ?", choix: ["Dans une population d'un million d'individus", "Dans une population très petite, par exemple quelques individus arrivés sur une île", "Uniquement chez les bactéries", "Quand le milieu ne change jamais"], reponse: 1, explication: "Dans une **petite population**, le hasard (qui se reproduit, qui meurt accidentellement) modifie fortement les proportions d'allèles." },
        { type: "qcm", question: "Quelle est l'origine des nouveaux allèles sur lesquels agit la sélection naturelle ?", choix: ["L'effort des individus", "Les besoins de l'espèce", "La nourriture", "Les mutations, qui se produisent au hasard"], reponse: 3, explication: "Les nouveaux allèles proviennent des **mutations**, aléatoires. La sélection naturelle ne crée pas d'allèles : elle trie ceux qui existent." },
        { type: "vf", question: "L'apparition de bactéries résistantes aux antibiotiques est un exemple de sélection naturelle.", reponse: true, explication: "Les bactéries résistantes (par mutation au hasard) survivent à l'antibiotique et se multiplient, tandis que les sensibles meurent : l'allèle de résistance devient fréquent." },
        { type: "saisie", question: "Comment appelle-t-on un ensemble d'individus d'une même espèce qui vivent au même endroit et se reproduisent entre eux ?", reponses: ["population", "une population", "populations"], explication: "C'est une **population**. L'évolution se mesure aux changements de fréquence des allèles dans les populations." },
        { type: "qcm", question: "Deux populations d'une même espèce de lézard sont séparées sur deux îles pendant des centaines de milliers d'années. Que peut-il se produire ?", choix: ["Elles deviennent forcément identiques", "Elles disparaissent obligatoirement", "Elles peuvent évoluer différemment jusqu'à former deux espèces distinctes", "Elles échangent leurs allèles grâce au vent"], reponse: 2, explication: "Isolées, elles accumulent des **mutations différentes**, et la sélection naturelle et la dérive les font évoluer chacune de leur côté. Si elles ne peuvent plus se reproduire entre elles, ce sont deux **espèces** différentes." },
        { type: "redaction", question: "Sujet type brevet. Sur une île, une population de souris vit sur un sol de sable clair. Il existe des souris claires et des souris sombres (la couleur est due à deux allèles d'un même gène). Des chouettes chassent les souris en les repérant à la vue. Après plusieurs générations, 90 % des souris sont claires. Explique, en utilisant le mécanisme de la sélection naturelle, l'évolution de cette population. Indique aussi ce qui pourrait se passer si une éruption volcanique recouvrait l'île de cendres noires.", corrige: `**Situation de départ** : dans la population, les souris sont **différentes** : certaines sont claires, d'autres sombres, à cause de deux **allèles** différents (apparus au hasard par **mutation**). Ce caractère est **héréditaire**.

**Le tri par le milieu** : sur le sable clair, les souris sombres sont très visibles : les chouettes les repèrent et les mangent plus souvent. Les souris claires sont **camouflées** : elles **survivent mieux** et ont donc **plus de descendants**, à qui elles transmettent l'allèle « clair ».

**Résultat** : de génération en génération, l'allèle « clair » devient de plus en plus **fréquent** : 90 % des souris sont claires. C'est la **sélection naturelle**.

**Si l'île était couverte de cendres noires** : ce serait l'inverse. Les souris claires deviendraient visibles et seraient davantage mangées ; les souris sombres seraient avantagées. La fréquence de l'allèle « sombre » augmenterait au fil des générations. Cela montre que l'avantage d'un allèle **dépend du milieu**.` },
      ],
    },
    {
      id: "parente-histoire-vivant",
      titre: "Parentés, fossiles et histoire du vivant",
      theme: "Le vivant et son évolution",
      cours: `
## Tous les êtres vivants sont apparentés
Tous les êtres vivants ont des points communs : ils sont formés de **cellules** et possèdent tous de l'**ADN**, écrit avec les mêmes quatre lettres. Cela montre qu'ils ont une **origine commune** : ils descendent tous, de proche en proche, des premières cellules apparues sur Terre il y a environ **3,8 milliards d'années**.

## Classer pour montrer les parentés
On classe les êtres vivants selon les **attributs** (caractères) qu'ils **partagent**, et non selon ce qu'ils n'ont pas ou selon leur mode de vie. Plus deux espèces partagent d'attributs, plus elles sont **proches parentes** : elles ont un **ancêtre commun** plus récent.

| Attribut | Requin | Grenouille | Lézard | Chat | Humain |
|---|---|---|---|---|---|
| squelette interne (vertébré) | oui | oui | oui | oui | oui |
| 4 membres | non | oui | oui | oui | oui |
| amnios (œuf protégé ou embryon dans une poche) | non | non | oui | oui | oui |
| poils et mamelles | non | non | non | oui | oui |

>! **Lecture** : l'humain partage plus d'attributs avec le chat (poils, mamelles) qu'avec le lézard. Il est donc plus proche parent du chat : ils ont un ancêtre commun plus récent. On représente ces parentés par un **arbre de parenté** (arbre phylogénétique), où chaque nœud représente un ancêtre commun hypothétique.

On compare aussi l'**ADN** des espèces : plus les séquences sont ressemblantes, plus les espèces sont proches parentes. Ainsi, l'ADN de l'humain et celui du chimpanzé sont identiques à environ **98 %**.

>! **Attention à une erreur fréquente** : l'humain ne « descend » pas du chimpanzé. Les deux espèces ont un **ancêtre commun**, qui vivait en Afrique il y a environ **7 millions d'années**, et qui n'était ni un humain ni un chimpanzé actuel. Chacune a ensuite évolué de son côté.

## Les fossiles, témoins du passé
Un **fossile** est un reste (os, coquille, dent) ou une trace (empreinte) d'un être vivant ancien, conservé dans une **roche sédimentaire**. Les fossiles permettent de :
- connaître des espèces disparues ;
- **dater** les roches qui les contiennent ;
- découvrir des formes **intermédiaires**, qui possèdent des caractères de deux groupes. Par exemple, l'**archéoptéryx** (environ 150 millions d'années) avait des plumes et des ailes comme un oiseau, mais aussi des dents, des griffes aux ailes et une longue queue osseuse comme un reptile.

## Une histoire faite d'apparitions et de crises
| Date (en millions d'années, Ma) | Événement |
|---|---|
| environ 3 800 Ma | traces des premières formes de vie (cellules simples) |
| environ 540 Ma | grande diversification des animaux dans les océans |
| environ 252 Ma | la plus grande **crise biologique** : environ 90 % des espèces marines disparaissent |
| 66 Ma | crise de la fin du Crétacé : disparition des dinosaures non aviens et des ammonites |
| environ 7 Ma | ancêtre commun de l'humain et du chimpanzé |
| environ 300 000 ans | plus anciens fossiles connus d'*Homo sapiens* (Maroc) |

Après chaque **crise biologique** (extinction massive), les groupes survivants se **diversifient** et occupent les milieux libérés : les mammifères se sont fortement diversifiés après la disparition des dinosaures.

## La biodiversité actuelle, fragile
Aujourd'hui, de nombreuses espèces disparaissent à un rythme très rapide à cause des activités humaines (destruction des milieux, pollutions, surexploitation, espèces introduites, changement climatique). Certains scientifiques parlent d'une **sixième crise** de la biodiversité.

> **À retenir** :
> - Tous les êtres vivants ont une origine commune : mêmes cellules, même ADN.
> - On classe les espèces selon les attributs qu'elles partagent ; plus elles en partagent, plus leur ancêtre commun est récent.
> - L'humain et le chimpanzé ont un ancêtre commun ; l'humain ne descend pas du chimpanzé.
> - Les fossiles témoignent des espèces disparues et des formes intermédiaires.
> - L'histoire du vivant est marquée par des crises biologiques suivies de diversifications.
`,
      textes: {
        attributs: `**Document : attributs de quelques vertébrés**

| Attribut | Requin | Grenouille | Lézard | Chat | Humain |
|---|---|---|---|---|---|
| squelette interne (vertébré) | oui | oui | oui | oui | oui |
| 4 membres | non | oui | oui | oui | oui |
| amnios (œuf protégé ou embryon dans une poche) | non | non | oui | oui | oui |
| poils et mamelles | non | non | non | oui | oui |`,
      },
      exercices: [
        { type: "qcm", question: "Quel argument montre que tous les êtres vivants ont une origine commune ?", choix: ["Ils ont tous des poumons", "Ils vivent tous dans l'eau", "Ils sont tous formés de cellules et possèdent tous de l'ADN", "Ils ont tous la même taille"], reponse: 2, explication: "Cellules et **ADN universel** (mêmes quatre lettres) se retrouvent chez **tous** les êtres vivants : c'est un héritage d'un ancêtre commun." },
        { type: "vf", question: "L'être humain descend du chimpanzé.", reponse: false, explication: "L'humain et le chimpanzé ont un **ancêtre commun**, qui vivait il y a environ 7 millions d'années. Chaque lignée a ensuite évolué de son côté." },
        { type: "saisie", question: "Comment appelle-t-on un reste ou une trace d'un être vivant ancien conservé dans une roche ?", reponses: ["fossile", "un fossile", "fossiles"], explication: "C'est un **fossile**, conservé le plus souvent dans une roche sédimentaire." },
        { type: "qcm", texte: "attributs", question: "D'après le document, avec quel animal l'humain a-t-il l'ancêtre commun le plus récent ?", choix: ["Le requin", "La grenouille", "Le lézard", "Le chat"], reponse: 3, explication: "Le **chat** partage avec l'humain tous les attributs du tableau, y compris les poils et les mamelles : ce sont tous deux des **mammifères**." },
        { type: "qcm", question: "Il y a 66 millions d'années, une crise biologique a fait disparaître...", choix: ["les dinosaures non aviens et les ammonites", "les premières cellules", "les mammifères", "tous les êtres vivants marins"], reponse: 0, explication: "La crise de la fin du Crétacé (66 Ma) a fait disparaître les **dinosaures non aviens** (les oiseaux en sont des descendants) et les **ammonites**. Les mammifères ont survécu et se sont diversifiés." },
        { type: "vf", question: "Pour classer les êtres vivants, on se base sur les attributs qu'ils partagent, et non sur ce qui leur manque.", reponse: true, explication: "La classification actuelle regroupe les espèces selon leurs **attributs partagés** : « ne pas avoir d'ailes », par exemple, n'est pas un critère." },
        { type: "qcm", question: "L'archéoptéryx avait des plumes, des dents et une longue queue osseuse. Pourquoi ce fossile est-il important ?", choix: ["C'est une forme intermédiaire entre reptiles et oiseaux", "C'est le plus ancien être vivant connu", "C'est l'ancêtre de l'humain", "C'est un poisson"], reponse: 0, explication: "Il présente des caractères d'**oiseau** (plumes, ailes) et de **reptile** (dents, griffes, queue osseuse) : c'est une **forme intermédiaire**, un argument en faveur de l'évolution." },
        { type: "saisie", question: "Comment appelle-t-on un événement au cours duquel un très grand nombre d'espèces disparaissent en peu de temps à l'échelle géologique ?", reponses: ["crise biologique", "une crise biologique", "extinction massive", "une extinction massive", "crise", "extinction de masse", "extinction"], explication: "C'est une **crise biologique** (ou extinction massive), comme celles d'il y a 252 et 66 millions d'années." },
        { type: "redaction", question: "Sujet type brevet. On compare un même fragment d'ADN chez plusieurs espèces. Pourcentage de différences avec l'humain : chimpanzé 1,2 % ; gorille 1,6 % ; orang-outan 3,1 % ; macaque 6,4 % (données simplifiées). 1) Classe ces espèces de la plus proche à la plus éloignée de l'humain. 2) Quelle espèce partage avec l'humain l'ancêtre commun le plus récent ? Justifie. 3) Un camarade conclut : « L'humain descend donc du chimpanzé. » Corrige son erreur.", corrige: `1) **Classement** : moins il y a de différences, plus les espèces sont proches. De la plus proche à la plus éloignée : **chimpanzé** (1,2 %), **gorille** (1,6 %), **orang-outan** (3,1 %), **macaque** (6,4 %).

2) C'est le **chimpanzé** : son ADN est celui qui ressemble le plus à celui de l'humain. Les différences s'accumulent au cours du temps par **mutations** depuis la séparation de deux lignées : peu de différences signifie une séparation récente, donc un **ancêtre commun plus récent**.

3) **Correction** : ces données montrent que l'humain et le chimpanzé sont les plus **proches parents**, pas que l'un descend de l'autre. Ils ont un **ancêtre commun** (il y a environ 7 millions d'années), qui n'était ni un humain ni un chimpanzé. Depuis, chacune des deux lignées a évolué de son côté : le chimpanzé actuel est aussi « évolué » que nous.` },
      ],
    },
    {
      id: "systeme-immunitaire",
      titre: "Le système immunitaire : se défendre contre les microbes",
      theme: "Le corps humain et la santé",
      cours: `
## Des microbes partout
Nous vivons entourés de **micro-organismes** (bactéries, virus, champignons). La plupart sont inoffensifs, et notre **microbiote** nous est même utile. Mais certains sont **pathogènes** : ils provoquent des maladies. Le **système immunitaire** est l'ensemble des organes (moelle osseuse, ganglions lymphatiques, rate...), des cellules (globules blancs) et des molécules qui défendent l'organisme.

## Contamination et infection
- La **contamination** est l'entrée d'un microbe dans l'organisme (par une plaie, l'air, les aliments, une relation sexuelle, le sang...).
- L'**infection** est la **multiplication** de ce microbe dans l'organisme. Une bactérie peut se diviser toutes les 20 minutes ; un virus se multiplie dans les cellules qu'il infecte.

## 1re ligne : les barrières naturelles
La **peau** et les **muqueuses** (nez, bouche, intestin...) empêchent la plupart des microbes d'entrer. Elles sont aidées par le **mucus**, les larmes, l'acidité de l'estomac et le microbiote.

## 2e ligne : la réaction inflammatoire, rapide
Si des microbes franchissent ces barrières, une **réaction inflammatoire** se déclenche en quelques minutes à quelques heures : **rougeur, chaleur, gonflement, douleur**. Des globules blancs appelés **phagocytes** sortent des vaisseaux sanguins, rejoignent l'infection et **englobent** puis **digèrent** les microbes : c'est la **phagocytose**. Cette réaction agit de la même façon contre n'importe quel microbe.

## 3e ligne : la réponse des lymphocytes, spécifique
Si l'infection continue, d'autres globules blancs, les **lymphocytes**, entrent en action. Ils sont **spécifiques** : chacun reconnaît un seul **antigène** (une molécule propre à un microbe donné). Les lymphocytes qui reconnaissent le microbe se **multiplient** dans les **ganglions** (d'où les ganglions gonflés pendant une infection), ce qui prend plusieurs jours.

| Cellule | Action |
|---|---|
| **Lymphocytes B** | ils deviennent des cellules qui produisent des **anticorps** dans le sang. Un anticorps se fixe sur l'antigène qui lui correspond : il **neutralise** le microbe et facilite sa destruction par les phagocytes |
| **Lymphocytes T cytotoxiques** | ils **détruisent les cellules infectées** par un virus, au contact |
| **Lymphocytes T auxiliaires** (appelés aussi T4) | ils **coordonnent** la réponse : ils sont nécessaires à l'activation des lymphocytes B et des lymphocytes T cytotoxiques |

>! **Expérience historique (simplifiée)** : on mélange le sérum (partie liquide du sang) d'un animal guéri de la diphtérie avec la toxine diphtérique, puis on l'injecte à un animal neuf : il ne tombe pas malade. Le sérum d'un animal jamais exposé ne le protège pas. Le sérum de l'animal guéri contient donc des **anticorps** qui neutralisent la toxine.

## La mémoire immunitaire
Après la guérison, il reste des **lymphocytes mémoire**, qui reconnaissent le même microbe. Si ce microbe revient, la réponse est **plus rapide** et **plus forte** : on ne tombe souvent pas malade. C'est pour cela qu'on n'attrape généralement la varicelle qu'une fois. La vaccination utilise cette mémoire (chapitre suivant).

## Quand le système immunitaire est affaibli : le VIH
Le **VIH** (virus de l'immunodéficience humaine) infecte et détruit les **lymphocytes T4**. Sans traitement, après plusieurs années, ils deviennent trop peu nombreux : l'organisme ne se défend plus contre des microbes habituellement sans danger. C'est le **sida**. Une personne **séropositive** est une personne qui a des anticorps anti-VIH dans le sang : elle a été contaminée. Le VIH se transmet par voie **sexuelle**, par le **sang** et de la mère à l'enfant ; le **préservatif** protège de la transmission sexuelle. Aujourd'hui, des traitements efficaces empêchent le virus de se multiplier.

>! **Attention à une erreur fréquente** : un anticorps est **spécifique**. Les anticorps contre le virus de la rougeole n'ont aucun effet sur le virus de la grippe.

> **À retenir** :
> - Barrières naturelles (peau, muqueuses), puis réaction inflammatoire rapide avec phagocytose (non spécifique).
> - Puis réponse spécifique des lymphocytes, plus lente : lymphocytes B → anticorps ; lymphocytes T cytotoxiques → destruction des cellules infectées ; lymphocytes T4 → coordination.
> - Un anticorps se fixe sur un antigène précis et neutralise le microbe.
> - Les lymphocytes mémoire permettent une réponse plus rapide et plus forte lors d'un second contact.
> - Le VIH détruit les lymphocytes T4 et provoque le sida en l'absence de traitement.
`,
      exercices: [
        { type: "qcm", question: "Quels sont les quatre signes de la réaction inflammatoire ?", choix: ["Toux, fièvre, fatigue, frissons", "Rougeur, chaleur, gonflement, douleur", "Pâleur, froid, démangeaison, saignement", "Nausée, vomissement, diarrhée, fièvre"], reponse: 1, explication: "La réaction inflammatoire se reconnaît à **rougeur, chaleur, gonflement et douleur**, au niveau de la zone infectée." },
        { type: "saisie", question: "Comment appelle-t-on le mécanisme par lequel un globule blanc englobe puis digère un microbe ?", reponses: ["phagocytose", "la phagocytose"], explication: "C'est la **phagocytose**, réalisée par les phagocytes lors de la réaction inflammatoire." },
        { type: "vf", question: "La phagocytose est une réponse spécifique : chaque phagocyte ne reconnaît qu'un seul microbe.", reponse: false, explication: "La phagocytose est **non spécifique** : les phagocytes agissent contre toutes sortes de microbes. Ce sont les **lymphocytes** qui sont spécifiques." },
        { type: "qcm", question: "Quelles cellules produisent les anticorps ?", choix: ["Les globules rouges", "Les lymphocytes T cytotoxiques", "Des cellules issues des lymphocytes B", "Les neurones"], reponse: 2, explication: "Les **lymphocytes B** activés se transforment en cellules qui sécrètent des **anticorps** dans le sang." },
        { type: "qcm", question: "Quel est le rôle des lymphocytes T cytotoxiques ?", choix: ["Détruire les cellules infectées par un virus", "Fabriquer des anticorps", "Transporter le dioxygène", "Former les barrières naturelles"], reponse: 0, explication: "Les **lymphocytes T cytotoxiques** reconnaissent et **détruisent les cellules infectées**, ce qui arrête la multiplication du virus." },
        { type: "saisie", question: "Comment appelle-t-on la molécule propre à un microbe, reconnue par un lymphocyte ou un anticorps ?", reponses: ["antigène", "un antigène", "antigènes"], explication: "C'est un **antigène**. Chaque anticorps se fixe sur un antigène précis : la réponse est **spécifique**." },
        { type: "vf", question: "Une personne séropositive au VIH possède des anticorps contre ce virus dans son sang.", reponse: true, explication: "« Séropositif » signifie qu'on détecte dans le **sérum** des anticorps anti-VIH : la personne a été contaminée par le virus." },
        { type: "qcm", question: "Pourquoi une personne atteinte du sida tombe-t-elle malade à cause de microbes habituellement inoffensifs ?", choix: ["Parce que le VIH détruit ses globules rouges", "Parce que le VIH détruit les lymphocytes T4, qui coordonnent les défenses", "Parce que sa peau devient perméable", "Parce qu'elle produit trop d'anticorps"], reponse: 1, explication: "Le VIH détruit les **lymphocytes T4**. Sans eux, les lymphocytes B et T cytotoxiques ne sont plus bien activés : le système immunitaire ne fonctionne plus correctement." },
        { type: "redaction", question: "Sujet type brevet. Clara se coupe le doigt avec un couteau de jardin sale. 1) Explique comment des bactéries peuvent entrer dans son organisme. 2) Décris les étapes de la défense de son organisme si les bactéries se multiplient, de la plus rapide à la plus lente. 3) Explique pourquoi, si elle est à nouveau contaminée plus tard par la même bactérie, elle risque moins de tomber malade.", corrige: `1) **Contamination** : la peau est normalement une **barrière naturelle** efficace. La coupure l'a ouverte : les bactéries présentes sur le couteau sale ont pu **entrer** dans l'organisme. Si elles se multiplient, il y a **infection**.

2) **Les défenses** :
- **La réaction inflammatoire** (rapide, quelques heures) : le doigt devient rouge, chaud, gonflé et douloureux. Des **phagocytes** arrivent par le sang et détruisent les bactéries par **phagocytose**. Cette défense n'est pas spécifique.
- **La réponse des lymphocytes** (plus lente, quelques jours) : si l'infection persiste, les **lymphocytes** spécifiques de cette bactérie se multiplient dans les ganglions. Les **lymphocytes B** produisent des **anticorps** qui se fixent sur les antigènes de la bactérie, la neutralisent et facilitent sa phagocytose. Les **lymphocytes T4** coordonnent cette réponse.

3) **La mémoire** : après la guérison, des **lymphocytes mémoire** spécifiques de cette bactérie restent dans l'organisme. Lors d'un nouveau contact, ils réagissent **plus vite et plus fort** : les bactéries sont éliminées avant d'avoir pu se multiplier beaucoup. Clara risque donc moins de tomber malade.` },
      ],
    },
    {
      id: "vaccination-antibiotiques",
      titre: "Vaccination, antibiotiques et résistance des bactéries",
      theme: "Le corps humain et la santé",
      cours: `
## La vaccination : utiliser la mémoire immunitaire
Un **vaccin** contient un microbe **tué** ou **affaibli**, ou seulement une **partie** de ce microbe (un antigène), ou encore une molécule qui permet à nos cellules de fabriquer cet antigène (vaccins à ARN). Le vaccin n'est **pas dangereux** comme le microbe, mais il est **reconnu** par les lymphocytes.

L'organisme réagit comme lors d'un premier contact : il produit des anticorps et surtout des **lymphocytes mémoire**. Si le vrai microbe arrive plus tard, la réponse est **rapide et forte** : la personne est **protégée**.

>! **Lire un graphique : réponse primaire et secondaire**. On mesure la quantité d'anticorps dans le sang après une 1re injection d'un vaccin, puis après une 2e injection (rappel) un mois plus tard.
>! - Après la 1re injection : les anticorps apparaissent après **une à deux semaines**, en quantité **modérée**, puis diminuent.
>! - Après le rappel : ils apparaissent en **quelques jours** et en quantité **beaucoup plus grande**, et restent plus longtemps.
>! Conclusion : le 1er contact a laissé des **lymphocytes mémoire**. C'est pourquoi certains vaccins nécessitent des **rappels**.

## Un peu d'histoire
- En **1796**, le médecin anglais **Edward Jenner** observe que les fermières qui ont attrapé la « vaccine » (une maladie bénigne de la vache) n'attrapent pas la variole. Il inocule la vaccine à un enfant, qui est ensuite protégé de la variole : c'est l'origine du mot **vaccin** (du latin *vacca*, la vache).
- En **1885**, **Louis Pasteur** soigne avec succès le jeune **Joseph Meister**, mordu par un chien enragé, grâce à son vaccin contre la rage.
- Grâce à la vaccination dans le monde entier, la **variole** a été déclarée **éradiquée** en **1980**.

## Se protéger et protéger les autres
Quand une grande partie de la population est vaccinée, le microbe circule très peu : même les personnes qui ne peuvent pas être vaccinées (nourrissons, personnes malades) sont protégées. C'est la **protection collective**. En France, plusieurs vaccinations sont **obligatoires** pour les jeunes enfants, par exemple contre la diphtérie, le tétanos, la poliomyélite, la coqueluche, l'hépatite B et la rougeole. Depuis le **1er janvier 2025**, s'y ajoutent les vaccins contre les **méningocoques** ACWY et B, des bactéries qui provoquent des **méningites** (infections graves des enveloppes du cerveau). Le but de ces obligations : **vacciner plus d'enfants** pour renforcer la protection collective. D'autres vaccins sont seulement **recommandés**, comme celui contre le papillomavirus, proposé au collège.

## La sérothérapie : une protection immédiate mais courte
En cas d'urgence (morsure de serpent venimeux, risque de tétanos chez une personne non vaccinée), on injecte directement des **anticorps** déjà fabriqués : c'est la **sérothérapie**. L'effet est **immédiat**, mais il ne dure que quelques semaines, car il n'y a **pas de mémoire**.

| | Vaccination | Sérothérapie |
|---|---|---|
| On injecte | un microbe inoffensif ou un antigène | des anticorps |
| Effet | après quelques jours à semaines | immédiat |
| Durée | longue (mémoire), avec des rappels | quelques semaines |
| Rôle | **prévenir** | **soigner en urgence** |

## Les antibiotiques
Un **antibiotique** est une substance qui **tue les bactéries** ou bloque leur multiplication. Le premier, la **pénicilline**, a été découvert par **Alexander Fleming** en **1928**, à partir d'un champignon microscopique. Les antibiotiques sont **inefficaces contre les virus** (rhume, grippe, Covid-19, la plupart des angines des enfants).

>! **L'antibiogramme** : on étale des bactéries sur un milieu de culture et on dépose des pastilles imbibées de différents antibiotiques. Autour d'une pastille efficace, les bactéries ne poussent pas : on voit un **cercle clair**. Pas de cercle : la bactérie est **résistante** à cet antibiotique. Cela permet au médecin de choisir le bon traitement.

## La résistance aux antibiotiques
Chez les bactéries, des **mutations** apparaissent au hasard ; certaines les rendent **résistantes** à un antibiotique. Quand on utilise cet antibiotique, seules les bactéries résistantes survivent et se multiplient : c'est la **sélection naturelle**. Plus on utilise d'antibiotiques (surtout sans raison), plus les bactéries résistantes deviennent fréquentes, et certaines infections deviennent difficiles à soigner.

>! **Les bons gestes** : ne prendre des antibiotiques que sur **ordonnance**, pour une infection **bactérienne** ; suivre le traitement **jusqu'au bout** ; ne jamais réutiliser seul un reste d'antibiotiques.

> **À retenir** :
> - Un vaccin, sans danger, déclenche une réponse immunitaire et la production de lymphocytes mémoire : il protège à l'avance, de façon spécifique et durable.
> - La réponse au rappel est plus rapide et plus forte que la première réponse.
> - La sérothérapie apporte des anticorps : effet immédiat mais de courte durée.
> - Les antibiotiques agissent contre les bactéries, pas contre les virus.
> - Leur usage excessif sélectionne des bactéries résistantes.
`,
      exercices: [
        { type: "vf", question: "Un antibiotique permet de guérir plus vite d'une grippe.", reponse: false, explication: "La grippe est due à un **virus**. Les antibiotiques n'agissent que sur les **bactéries** : ils sont inutiles contre la grippe et leur usage inutile favorise les résistances." },
        { type: "qcm", question: "Que contient un vaccin ?", choix: ["Des anticorps fabriqués par un autre animal", "Un antibiotique", "Des globules blancs", "Un microbe tué ou affaibli, ou une partie de ce microbe"], reponse: 3, explication: "Un vaccin contient un microbe **tué** ou **affaibli**, ou un **antigène** de ce microbe (ou l'information pour le fabriquer). Il est reconnu par les lymphocytes sans rendre malade." },
        { type: "saisie", question: "Quel scientifique a découvert la pénicilline en 1928 ?", reponses: ["Fleming", "Alexander Fleming", "Alexandre Fleming", "A. Fleming"], explication: "C'est **Alexander Fleming**, en 1928, en observant qu'un champignon microscopique empêchait des bactéries de pousser." },
        { type: "qcm", question: "Pourquoi la vaccination protège-t-elle durablement ?", choix: ["Parce qu'elle laisse des lymphocytes mémoire", "Parce que le vaccin reste dans le sang toute la vie", "Parce qu'elle tue tous les microbes du corps", "Parce qu'elle renforce la peau"], reponse: 0, explication: "La vaccination provoque la formation de **lymphocytes mémoire** spécifiques : lors d'un contact avec le vrai microbe, la réponse est rapide et forte." },
        { type: "qcm", question: "Une personne non vaccinée se blesse avec un outil rouillé couvert de terre. Le médecin veut la protéger immédiatement du tétanos. Que fait-il ?", choix: ["Il lui prescrit un antibiotique contre le virus du tétanos", "Il ne fait rien, car le tétanos est une maladie bénigne", "Il lui injecte des anticorps contre la toxine du tétanos (sérothérapie), en plus d'un vaccin", "Il lui fait seulement un vaccin, qui agit en quelques minutes"], reponse: 2, explication: "La **sérothérapie** agit **immédiatement**, car elle apporte des anticorps déjà fabriqués. Le vaccin, lui, met plusieurs jours à agir, mais il protégera durablement. Le tétanos est dû à une bactérie, pas à un virus." },
        { type: "vf", question: "Lors d'un rappel de vaccin, la quantité d'anticorps produite est plus grande et apparaît plus vite qu'après la première injection.", reponse: true, explication: "Grâce aux **lymphocytes mémoire** formés lors de la première injection, la réponse secondaire est **plus rapide et plus forte**." },
        { type: "saisie", question: "Sur un antibiogramme, un cercle clair sans bactéries mesure 25 mm autour de l'antibiotique X et 0 mm autour de l'antibiotique Y. Quel antibiotique le médecin doit-il choisir ? (réponds X ou Y)", reponses: ["X", "antibiotique X", "l'antibiotique X"], explication: "Autour de **X**, les bactéries ne poussent pas : elles sont **sensibles** à X. Pas de cercle autour de Y : elles sont **résistantes** à Y." },
        { type: "qcm", question: "Comment apparaissent les bactéries résistantes à un antibiotique ?", choix: ["Les bactéries apprennent à résister en voyant l'antibiotique", "L'antibiotique transforme les virus en bactéries", "Le corps humain fabrique des bactéries résistantes", "Des mutations apparues au hasard rendent certaines bactéries résistantes ; l'antibiotique élimine les autres"], reponse: 3, explication: "Les mutations de résistance apparaissent **au hasard**. L'antibiotique **sélectionne** les bactéries résistantes, qui se multiplient : c'est la sélection naturelle." },
        { type: "redaction", question: "Sujet type brevet. Un graphique montre la quantité d'anticorps anti-tétanos dans le sang d'un enfant (en unités arbitraires). 1re injection de vaccin au jour 0 : les anticorps apparaissent au jour 10 et atteignent un maximum de 20 au jour 20, puis diminuent. 2e injection (rappel) au jour 60 : les anticorps augmentent dès le jour 63 et atteignent un maximum de 200 au jour 70. 1) Compare les deux réponses (délai et quantité), avec des valeurs chiffrées. 2) Explique la différence. 3) Explique à un camarade pourquoi il est important de faire les rappels de vaccins.", corrige: `1) **Comparaison** :
- **Délai** : après la 1re injection, les anticorps apparaissent après **10 jours** ; après le rappel, après seulement **3 jours** (jour 63 − jour 60).
- **Quantité** : le maximum est de **20** unités après la 1re injection et de **200** après le rappel, soit **10 fois plus** (200 ÷ 20 = 10).
La réponse au rappel est donc **plus rapide** et **plus forte**.

2) **Explication** : lors de la 1re injection, les lymphocytes B spécifiques de l'antigène du tétanos ont été activés pour la première fois, ce qui prend du temps. Ils ont produit des anticorps, et il est resté des **lymphocytes mémoire**. Au rappel, ces lymphocytes mémoire, plus nombreux, reconnaissent tout de suite l'antigène et produisent rapidement beaucoup d'anticorps.

3) **Pour un camarade** : après la 1re injection, la quantité d'anticorps diminue et la protection n'est pas assez forte. Le **rappel** renforce la mémoire immunitaire : la protection devient plus forte et plus durable. Sans rappel, on risque de ne plus être protégé contre une maladie grave comme le tétanos.` },
        { type: "vf", question: "En France, depuis le 1er janvier 2025, la vaccination des nourrissons contre les méningocoques ACWY et B est obligatoire.", reponse: true, explication: "Depuis le **1er janvier 2025**, ces vaccins s'ajoutent aux vaccinations obligatoires des jeunes enfants. Les méningocoques sont des **bactéries** qui peuvent provoquer des **méningites**, des infections graves. Le vaccin ACWY remplace l'ancien vaccin obligatoire contre le méningocoque C." },
        { type: "qcm", question: "Pourquoi rendre obligatoires certaines vaccinations des jeunes enfants, alors que chacun pourrait choisir pour lui-même ?", choix: ["Parce que les vaccins obligatoires guérissent les enfants déjà malades bien plus vite que les antibiotiques", "Parce qu'un vaccin obligatoire protège aussi contre toutes les autres maladies, même celles qu'il ne vise pas", "Parce que beaucoup de personnes vaccinées empêchent le microbe de circuler : cela protège aussi les autres", "Parce qu'un vaccin obligatoire rend tous les rappels inutiles pour le reste de la vie de l'enfant vacciné"], reponse: 2, explication: "Quand une grande partie de la population est vaccinée, le microbe **circule très peu** : c'est la **protection collective**, qui protège aussi les nourrissons trop jeunes et les personnes malades. Un vaccin **prévient** (il ne guérit pas), il est **spécifique** d'un microbe, et beaucoup nécessitent des **rappels**." },
      ],
    },
    {
      id: "digestion-enzymes-microbiote",
      titre: "La digestion à l'échelle des molécules et le microbiote",
      theme: "Le corps humain et la santé",
      cours: `
## Des aliments aux nutriments
Les aliments contiennent de grosses molécules (amidon, protéines, lipides) qui ne peuvent pas passer dans le sang. La **digestion** les transforme en **nutriments**, de petites molécules capables de traverser la paroi de l'intestin. Elle est :
- **mécanique** : mastication, brassage par l'estomac (les aliments sont découpés en petits morceaux, mais les molécules ne changent pas) ;
- **chimique** : des **enzymes** coupent les grosses molécules en petites.

## Les enzymes digestives
Les **enzymes** sont des **protéines** produites par les glandes digestives (glandes salivaires, estomac, pancréas, intestin grêle) et contenues dans les **sucs digestifs**.

| Grosse molécule (aliment) | Enzyme | Nutriments obtenus |
|---|---|---|
| **Amidon** (pain, pâtes, riz) | **amylase** (salive, suc pancréatique), puis d'autres enzymes de l'intestin grêle | **glucose** (l'amylase coupe d'abord l'amidon en **maltose**, un sucre formé de deux glucoses) |
| **Protéines** (viande, œufs, légumineuses) | **protéases** (suc gastrique, suc pancréatique) | **acides aminés** |
| **Lipides** (huile, beurre) | **lipase** (suc pancréatique) | **acides gras** et **glycérol** |

L'eau, les sels minéraux et les vitamines sont déjà assez petits : ils ne sont pas digérés. La **bile**, produite par le foie, n'est pas une enzyme : elle disperse les graisses en fines gouttelettes, ce qui facilite l'action de la lipase.

## Les propriétés des enzymes
- Une enzyme est **spécifique** : l'amylase agit sur l'amidon, mais pas sur les protéines.
- Elle agit le mieux à la température du corps, **37 °C**. Le froid **ralentit** son action ; une forte chaleur (par exemple 90 °C) la **détruit** définitivement.

>! **Expérience modèle (tubes à essai)** :
>! - Tube 1 : amidon + salive à 37 °C ; tube 2 : amidon + eau à 37 °C (**témoin**) ; tube 3 : amidon + salive chauffée à 90 °C, puis mise à 37 °C.
>! - Le **témoin** est un tube identique aux autres, sauf pour le facteur testé (ici, il n'y a pas de salive) : il sert de **référence** pour comparer et prouver que c'est bien la salive qui agit.
>! - Après 20 minutes, on fait deux tests. L'**eau iodée** devient bleu-noir en présence d'**amidon**. La **liqueur de Fehling**, chauffée, donne un précipité rouge brique en présence de **petits sucres** (comme le glucose ou le maltose).
>! - Un test est **positif** quand la couleur attendue apparaît (la substance recherchée est présente) et **négatif** quand elle n'apparaît pas (l'eau iodée reste alors orangée, la liqueur de Fehling reste bleue).
>! - Tube 1 : eau iodée négative, Fehling positive : l'amidon a été transformé en petits sucres (maltose). Tube 2 : eau iodée positive : sans enzyme, l'amidon reste. Tube 3 : eau iodée positive : l'enzyme a été détruite par la chaleur.

## L'absorption
Les nutriments passent dans le sang au niveau de l'**intestin grêle**. Sa paroi est très fine, très irriguée par des capillaires et plissée en millions de **villosités** : sa surface d'échange atteint environ **30 m²** (la surface d'un studio). Les nutriments sont ensuite distribués par le sang à toutes les cellules. Les déchets non digérés (fibres en partie) sont éliminés par le gros intestin.

## Le microbiote intestinal
Ton intestin héberge des dizaines de milliers de milliards de bactéries, appartenant à des centaines d'espèces différentes : c'est le **microbiote intestinal**. On estime qu'il contient environ autant de bactéries que ton corps compte de cellules. Il :
- **digère les fibres** (fruits, légumes, céréales complètes) que nos enzymes ne savent pas digérer ;
- produit certaines **vitamines** (comme la vitamine K) ;
- **protège** contre les bactéries pathogènes, en occupant la place et en consommant les nutriments ;
- participe à l'**éducation du système immunitaire**.

Le microbiote varie selon l'alimentation : une alimentation **variée et riche en fibres** favorise sa diversité. Un traitement **antibiotique** détruit aussi une partie des bactéries utiles du microbiote, ce qui peut provoquer des troubles digestifs.

>! **Attention à une erreur fréquente** : l'estomac n'est pas le lieu principal de l'absorption. L'essentiel des nutriments passe dans le sang au niveau de l'**intestin grêle**.

> **À retenir** :
> - La digestion chimique transforme les grosses molécules des aliments en nutriments grâce aux enzymes.
> - Amidon → glucose (amylase) ; protéines → acides aminés (protéases) ; lipides → acides gras et glycérol (lipase).
> - Les enzymes sont spécifiques, agissent au mieux à 37 °C et sont détruites par une forte chaleur.
> - Les nutriments sont absorbés dans l'intestin grêle, grâce à une très grande surface d'échange.
> - Le microbiote intestinal digère les fibres, produit des vitamines et protège contre les microbes pathogènes.
`,
      exercices: [
        { type: "qcm", question: "En quoi l'amidon est-il transformé lors de la digestion ?", choix: ["En acides aminés", "En glucose", "En acides gras", "En protéines"], reponse: 1, explication: "L'**amylase** transforme l'**amidon** en **glucose**. Les acides aminés viennent des protéines, les acides gras des lipides." },
        { type: "saisie", question: "Comment appelle-t-on les molécules (des protéines) qui coupent les aliments en nutriments ?", reponses: ["enzymes", "enzyme", "enzymes digestives", "des enzymes"], explication: "Ce sont les **enzymes digestives**, contenues dans les sucs digestifs." },
        { type: "vf", question: "La bile est une enzyme qui digère les lipides.", reponse: false, explication: "La **bile**, produite par le foie, n'est **pas une enzyme** : elle disperse les graisses en gouttelettes. C'est la **lipase** du suc pancréatique qui digère les lipides." },
        { type: "qcm", question: "Quels nutriments sont obtenus par la digestion des protéines ?", choix: ["Le glucose", "Les vitamines", "L'amidon", "Les acides aminés"], reponse: 3, explication: "Les **protéases** coupent les protéines en **acides aminés**." },
        { type: "qcm", question: "On place de l'amidon avec de la salive préalablement chauffée à 90 °C puis ramenée à 37 °C. Que montre l'eau iodée au bout de 20 minutes ?", choix: ["Elle devient bleu-noir : l'amidon est toujours là", "Elle reste orangée : l'amidon a été digéré", "Elle devient rouge brique", "On ne peut rien prévoir"], reponse: 0, explication: "Une forte chaleur **détruit** l'enzyme (l'amylase) : l'amidon n'est plus transformé, et l'eau iodée devient **bleu-noir**." },
        { type: "saisie", question: "Quel réactif devient bleu-noir en présence d'amidon ?", reponses: ["eau iodée", "l'eau iodée", "iode", "lugol", "le lugol"], explication: "L'**eau iodée** (ou lugol) colore l'amidon en **bleu-noir**." },
        { type: "vf", question: "Le microbiote intestinal est utile, car il digère notamment des fibres que nos propres enzymes ne savent pas digérer.", reponse: true, explication: "Les bactéries du **microbiote** digèrent les **fibres**, produisent des vitamines et nous protègent contre les bactéries pathogènes." },
        { type: "qcm", question: "Pourquoi un traitement antibiotique peut-il provoquer une diarrhée ?", choix: ["Parce qu'il détruit les virus de l'intestin", "Parce qu'il détruit aussi une partie des bactéries utiles du microbiote", "Parce qu'il contient du sucre", "Parce qu'il bloque les enzymes de l'estomac"], reponse: 1, explication: "Les antibiotiques ne font pas la différence entre bactéries pathogènes et bactéries utiles : ils **perturbent le microbiote** intestinal." },
        { type: "redaction", question: "Sujet type brevet. On veut montrer qu'une enzyme du suc pancréatique, la lipase, agit sur les lipides et seulement à une température proche de 37 °C. 1) Propose une expérience avec trois tubes, dont un tube témoin, en précisant leur contenu et leur température. 2) Indique les résultats attendus si l'hypothèse est juste. On dispose d'un test qui révèle la présence d'acides gras (un indicateur coloré qui change de couleur quand le milieu devient acide).", corrige: `1) **Expérience** (une seule différence entre deux tubes à chaque fois) :
- **Tube 1** : huile + suc pancréatique (lipase), à **37 °C**.
- **Tube 2 (témoin)** : huile + eau, à **37 °C**. Il montre que l'huile ne se transforme pas toute seule.
- **Tube 3** : huile + suc pancréatique, à **4 °C** (dans la glace) ou avec du suc préalablement chauffé à 90 °C. Il permet de tester l'effet de la température.
On ajoute l'indicateur coloré dans chaque tube et on attend environ 30 minutes.

2) **Résultats attendus si l'hypothèse est juste** :
- Tube 1 : l'indicateur **change de couleur** : des **acides gras** sont apparus, la lipase a digéré les lipides.
- Tube 2 : **pas de changement** : sans enzyme, pas de digestion.
- Tube 3 : **pas de changement** (ou très faible à 4 °C) : à basse température l'enzyme agit très lentement, et une enzyme chauffée à 90 °C est détruite.

**Conclusion** : la comparaison des tubes 1 et 2 montre que c'est la **lipase** qui transforme les lipides en acides gras ; la comparaison des tubes 1 et 3 montre qu'elle agit à une température proche de **37 °C**, celle du corps.` },
        { type: "qcm", question: "Dans l'expérience du cours, on ajoute de l'eau iodée dans le tube 2 (amidon + eau, sans salive) : elle devient bleu-noir. Que signifie ce résultat ?", choix: ["Le test est négatif : il n'y a plus d'amidon", "Le test est positif : l'amidon est toujours présent, il n'a pas été digéré sans salive", "Le test est positif : du glucose est apparu", "Le tube 2 est raté et ne sert à rien"], reponse: 1, explication: "Un test est **positif** quand la couleur attendue apparaît : le bleu-noir révèle l'**amidon**. Le tube 2 est le **témoin** : sans salive, l'amidon reste. En le comparant au tube 1 (eau iodée négative), on montre que c'est la **salive** qui digère l'amidon. Le glucose, lui, se révèle avec la liqueur de Fehling." },
      ],
    },
    {
      id: "systeme-nerveux",
      titre: "Le système nerveux : du message nerveux au mouvement",
      theme: "Le corps humain et la santé",
      cours: `
## Percevoir, traiter, répondre
Quand tu attrapes un ballon, plusieurs organes travaillent ensemble :
1. Un **récepteur sensoriel** (l'œil) capte une **stimulation** (la lumière renvoyée par le ballon).
2. Un **nerf sensitif** (le nerf optique) conduit un **message nerveux sensitif** jusqu'aux **centres nerveux**.
3. Les centres nerveux (le **cerveau**) analysent ce message et élaborent une **réponse**.
4. Un **message nerveux moteur** part par la **moelle épinière** puis par des **nerfs moteurs** jusqu'aux **muscles**.
5. Les muscles se **contractent** : c'est le mouvement.

| Élément | Exemples | Rôle |
|---|---|---|
| Récepteurs sensoriels | œil, oreille, peau, langue, nez, récepteurs des muscles | capter les stimulations |
| Nerfs | nerfs sensitifs, nerfs moteurs | conduire les messages |
| Centres nerveux | **encéphale** (dont le cerveau) et **moelle épinière** | analyser, décider, commander |
| Effecteurs | muscles | exécuter la réponse |

## Les neurones et le message nerveux
Le système nerveux est formé de cellules spécialisées : les **neurones**. Un neurone possède un **corps cellulaire** (avec le noyau), des prolongements courts (les **dendrites**) et un long prolongement, l'**axone**, qui peut mesurer jusqu'à 1 mètre. Un nerf est un faisceau de milliers d'axones.

- Le long d'un neurone, le message nerveux est de nature **électrique**. Il circule vite : de 1 m/s à plus de 100 m/s selon les neurones.
- Entre deux neurones, il existe un petit espace : la **synapse**. Le message y devient **chimique** : le premier neurone libère une substance, le **neurotransmetteur**, qui se fixe sur des **récepteurs** du neurone suivant et y déclenche un nouveau message électrique.

>! **Calcul** : un message nerveux parcourt un nerf de 1 m à 50 m/s. Durée : t = d ÷ v = 1 ÷ 50 = **0,02 s**, soit 20 millisecondes. Le temps de réaction total (environ 0,2 s pour une réponse à un signal visuel) est plus long, surtout à cause du temps de traitement dans le cerveau et du passage des synapses.

## Le réflexe : une réponse sans le cerveau
Quand le médecin frappe sous ton genou avec un petit marteau, ta jambe se lève toute seule : c'est un **réflexe**. La réponse est **involontaire**, **rapide** et toujours la même. Le centre nerveux est la **moelle épinière** : le message sensitif y arrive et repart directement vers le muscle, sans passer par le cerveau. Le réflexe protège (retirer la main d'une plaque chaude) et permet de garder l'équilibre.

## Le mouvement volontaire : le rôle du cerveau
Les mouvements volontaires sont commandés par une zone de la surface du cerveau (le **cortex moteur**). Le cerveau est formé de deux **hémisphères**. Les voies nerveuses se croisent : l'**hémisphère gauche commande le côté droit** du corps, et inversement. D'autres zones du cortex reçoivent les messages des sens : par exemple, la vision est traitée à l'**arrière** du cerveau.

>! **Exemple** : après un accident vasculaire cérébral (AVC) qui abîme le cortex moteur de l'hémisphère **gauche**, une personne peut être paralysée du côté **droit** du corps, alors que ses muscles et ses nerfs du côté droit ne sont pas atteints.

>! **Attention à une erreur fréquente** : une **lésion de la moelle épinière** au niveau du dos peut provoquer une paralysie des jambes même si le cerveau et les jambes sont intacts : le message moteur ne peut plus passer.

> **À retenir** :
> - Récepteur sensoriel → nerf sensitif → centres nerveux (encéphale, moelle épinière) → nerf moteur → muscle.
> - Le neurone transmet un message électrique ; à la synapse, le message devient chimique grâce à un neurotransmetteur.
> - Un réflexe est une réponse involontaire et rapide dont le centre est la moelle épinière.
> - Les mouvements volontaires sont commandés par le cortex moteur ; chaque hémisphère commande le côté opposé du corps.
`,
      exercices: [
        { type: "qcm", question: "Quel est le bon ordre du trajet du message nerveux lors d'un mouvement volontaire ?", choix: ["Récepteur sensoriel → nerf sensitif → centres nerveux → nerf moteur → muscle", "Muscle → nerf sensitif → cerveau → œil", "Cerveau → récepteur → muscle → nerf", "Nerf moteur → récepteur → cerveau → muscle"], reponse: 0, explication: "Le message part du **récepteur**, arrive aux **centres nerveux** par un nerf sensitif, puis repart vers le **muscle** par un nerf moteur." },
        { type: "saisie", question: "Comment appelle-t-on les cellules du système nerveux qui transmettent les messages nerveux ?", reponses: ["neurones", "neurone", "les neurones", "cellules nerveuses"], explication: "Ce sont les **neurones** (ou cellules nerveuses)." },
        { type: "vf", question: "Lors d'un réflexe, le message nerveux passe obligatoirement par le cerveau.", reponse: false, explication: "Le centre nerveux d'un réflexe est la **moelle épinière** : le message ne passe pas par le cerveau, ce qui rend la réponse très rapide et involontaire." },
        { type: "saisie", question: "Comment s'appelle la zone de communication entre deux neurones ?", reponses: ["synapse", "la synapse", "synapses"], explication: "C'est la **synapse**. Le message y est transmis par un **neurotransmetteur** : il devient chimique." },
        { type: "qcm", question: "Une personne a été victime d'un AVC qui a abîmé le cortex moteur de son hémisphère droit. Quelle conséquence est la plus probable ?", choix: ["Une paralysie du côté gauche du corps", "Une paralysie du côté droit du corps", "Une perte de la vue", "Aucune conséquence"], reponse: 0, explication: "Les voies nerveuses se **croisent** : l'hémisphère **droit** commande le côté **gauche** du corps." },
        { type: "qcm", question: "Sous quelle forme le message nerveux est-il transmis à travers une synapse ?", choix: ["Électrique", "Lumineuse", "Chimique, grâce à un neurotransmetteur", "Sonore"], reponse: 2, explication: "Le long du neurone, le message est **électrique** ; à la synapse, il est **chimique** : le neurotransmetteur se fixe sur des récepteurs du neurone suivant." },
        { type: "saisie", question: "Un message nerveux parcourt 1,2 m à la vitesse de 60 m/s. Combien de temps met-il ? (réponds en secondes)", reponses: ["0,02", "0,02 s", "0.02", "0,02 seconde", "0,020", "20 ms", "20 millisecondes"], explication: "t = d ÷ v = 1,2 ÷ 60 = **0,02 s** (20 millisecondes)." },
        { type: "vf", question: "Une personne dont la moelle épinière est sectionnée au milieu du dos peut ne plus pouvoir bouger les jambes, même si son cerveau et ses jambes sont intacts.", reponse: true, explication: "La moelle épinière transmet les messages moteurs du cerveau vers les nerfs des jambes. Si elle est coupée, le message **ne passe plus** : les jambes sont paralysées." },
        { type: "redaction", question: "Sujet type brevet. Au tennis de table, Yanis voit la balle arriver et la renvoie avec sa raquette tenue dans la main droite. 1) Décris le trajet du message nerveux depuis la perception de la balle jusqu'au mouvement du bras, en nommant chaque élément. 2) Quel hémisphère cérébral commande le mouvement de son bras droit ? Justifie. 3) Un jour, Yanis touche par accident une casserole brûlante et retire sa main avant même de sentir la douleur. Explique pourquoi cette réponse est si rapide.", corrige: `1) **Trajet du message nerveux** :
- l'**œil** (récepteur sensoriel) capte la lumière renvoyée par la balle ;
- le **nerf optique** (nerf sensitif) conduit un message nerveux **sensitif** jusqu'au **cerveau** ;
- le cerveau (centre nerveux) analyse la position et la vitesse de la balle et élabore une commande ;
- un message nerveux **moteur** descend par la **moelle épinière** puis par des **nerfs moteurs** jusqu'aux **muscles** du bras ;
- les muscles se **contractent** : le bras renvoie la balle.
Entre les neurones, le message passe par des **synapses** grâce à des neurotransmetteurs.

2) C'est l'**hémisphère gauche** : les voies nerveuses se croisent, chaque hémisphère commande les muscles du côté opposé du corps.

3) Retirer sa main de la casserole est un **réflexe**. Le message sensitif part de la peau et arrive à la **moelle épinière**, qui renvoie directement un message moteur vers les muscles du bras, **sans passer par le cerveau**. Le trajet est plus court et compte moins de synapses : la réponse est très rapide. La douleur, elle, est perçue quand le message arrive au cerveau, un peu plus tard.` },
      ],
    },
    {
      id: "cerveau-sante-hormones",
      titre: "Cerveau et santé : drogues, sommeil, écrans et hormones",
      theme: "Le corps humain et la santé",
      cours: `
## Un cerveau en construction
Ton cerveau contient environ **86 milliards de neurones**, reliés par des synapses. Il se modifie toute la vie : quand tu apprends, de nouvelles connexions se forment et se renforcent (c'est la **plasticité cérébrale**). À l'adolescence, il est en pleine réorganisation, jusqu'à 20 à 25 ans environ. Il est donc particulièrement **sensible** à ce qui le perturbe.

## Les drogues perturbent les synapses
Les **drogues** (alcool, tabac, cannabis, cocaïne...) sont des substances qui agissent sur le fonctionnement des **synapses** : certaines **imitent** un neurotransmetteur, d'autres empêchent son élimination ou bloquent ses récepteurs.
- La **nicotine** du tabac se fixe sur les récepteurs d'un neurotransmetteur naturel.
- Le **THC** du cannabis se fixe sur des récepteurs du cerveau qui jouent un rôle dans la mémoire et la coordination des mouvements.
- L'**alcool** ralentit le fonctionnement du système nerveux : il **allonge le temps de réaction**, trouble la vision et l'équilibre.

Beaucoup de drogues activent le **circuit de la récompense** du cerveau (sensation de plaisir). Le cerveau s'habitue : il en faut de plus en plus pour le même effet (**tolérance**), et le manque provoque un malaise : c'est la **dépendance** (ou **addiction**). Plus on commence jeune, plus le risque de dépendance est grand.

>! **Exemple : l'alcool et la conduite**. En France, le taux d'alcool maximal autorisé dans le sang pour conduire est de **0,5 g/L**, et de **0,2 g/L** pour les jeunes conducteurs (permis probatoire). Même à faible dose, le temps de réaction augmente : la distance parcourue avant de freiner s'allonge. À 50 km/h, une voiture parcourt environ 14 m par seconde : chaque dixième de seconde perdu représente environ 1,4 m de plus.

## Le sommeil, indispensable au cerveau
Pendant le sommeil, le cerveau **consolide les apprentissages** de la journée (la mémoire), récupère et le corps produit l'**hormone de croissance**. Un adolescent a besoin d'environ **8 à 10 heures** de sommeil par nuit. Le manque de sommeil diminue la concentration, la mémoire et la vigilance, et augmente l'irritabilité.

Les **écrans** le soir retardent l'endormissement : la lumière qu'ils émettent freine la production de **mélatonine**, l'hormone qui favorise le sommeil, et les contenus (jeux, réseaux sociaux) excitent le cerveau. Il est conseillé d'arrêter les écrans au moins une heure avant de dormir.

## Une autre communication : les hormones
Le système nerveux n'est pas le seul à faire communiquer les organes. Une **hormone** est une substance produite par une **glande**, transportée par le **sang**, qui agit sur des **cellules cibles** possédant des **récepteurs** pour elle. La communication hormonale est plus **lente** que la communication nerveuse, mais elle dure plus longtemps.

| Hormone | Glande | Effet |
|---|---|---|
| **Insuline** | pancréas | fait baisser le taux de glucose dans le sang (**glycémie**) |
| **Adrénaline** | glandes surrénales | en cas de stress ou de danger : accélère le cœur et la respiration |
| **Mélatonine** | épiphyse (dans le cerveau) | favorise l'endormissement |
| **Testostérone**, **œstrogènes** | testicules, ovaires | apparition des caractères sexuels à la puberté |

>! **Pour aller plus loin (étudié surtout au lycée) : la glycémie**. À jeun, la glycémie reste proche de **1 g/L**. Après un repas, le glucose absorbé la fait monter ; le pancréas libère alors de l'**insuline**, qui permet aux cellules (foie, muscles) de stocker ou d'utiliser le glucose : la glycémie redescend. Chez une personne atteinte de **diabète de type 1**, le pancréas ne produit plus d'insuline : la glycémie reste trop élevée et il faut injecter de l'insuline.

> **À retenir** :
> - Le cerveau se modifie avec les apprentissages ; il est en construction jusqu'à 20-25 ans environ.
> - Les drogues agissent sur les synapses ; elles provoquent tolérance et dépendance ; l'alcool allonge le temps de réaction.
> - Le sommeil (8 à 10 h à ton âge) sert à consolider la mémoire et à récupérer ; les écrans le soir retardent l'endormissement.
> - Une hormone est produite par une glande, transportée par le sang et agit sur des cellules cibles qui ont des récepteurs.
> - L'insuline, produite par le pancréas, fait baisser la glycémie.
`,
      exercices: [
        { type: "qcm", question: "À quel niveau du système nerveux agissent la plupart des drogues ?", choix: ["Au niveau des synapses", "Au niveau des os", "Au niveau des globules rouges", "Au niveau de la peau"], reponse: 0, explication: "Les drogues perturbent la communication entre neurones, au niveau des **synapses** : elles imitent des neurotransmetteurs ou modifient leur action." },
        { type: "vf", question: "L'alcool diminue le temps de réaction, ce qui permet de freiner plus vite.", reponse: false, explication: "C'est l'inverse : l'alcool **allonge** le temps de réaction. Le conducteur freine plus tard et la distance d'arrêt augmente." },
        { type: "saisie", question: "Comment appelle-t-on la situation où une personne ne peut plus se passer d'une drogue et ressent un malaise quand elle en manque ?", reponses: ["dépendance", "la dépendance", "addiction", "une addiction", "l'addiction"], explication: "C'est la **dépendance** (ou **addiction**). Le manque provoque un malaise physique ou psychique." },
        { type: "qcm", question: "De combien d'heures de sommeil par nuit un adolescent a-t-il besoin environ ?", choix: ["4 à 5 heures", "6 heures", "8 à 10 heures", "14 heures"], reponse: 2, explication: "Un adolescent a besoin d'environ **8 à 10 heures** de sommeil. Le sommeil consolide la mémoire et permet la récupération." },
        { type: "qcm", question: "Pourquoi les écrans le soir gênent-ils l'endormissement ?", choix: ["Parce qu'ils refroidissent le cerveau", "Parce que leur lumière freine la production de mélatonine et que leur contenu excite le cerveau", "Parce qu'ils produisent de l'insuline", "Parce qu'ils fatiguent trop les yeux pour dormir"], reponse: 1, explication: "La lumière des écrans freine la production de **mélatonine**, l'hormone du sommeil, et les contenus stimulent le cerveau." },
        { type: "saisie", question: "Quelle hormone, produite par le pancréas, fait baisser la glycémie ?", reponses: ["insuline", "l'insuline"], explication: "C'est l'**insuline**. Son absence provoque le diabète de type 1." },
        { type: "vf", question: "Une hormone agit uniquement sur les cellules qui possèdent des récepteurs pour cette hormone.", reponse: true, explication: "L'hormone circule dans tout le sang, mais seules les **cellules cibles**, qui possèdent les **récepteurs** adaptés, réagissent." },
        { type: "saisie", question: "Une voiture roule à 14 m/s. Le temps de réaction du conducteur passe de 0,8 s à 1,3 s après avoir bu de l'alcool. De combien de mètres la distance parcourue pendant le temps de réaction augmente-t-elle ?", reponses: ["7", "7 m", "7 mètres", "7,0"], explication: "Distance = vitesse × temps. Sans alcool : 14 × 0,8 = 11,2 m. Avec alcool : 14 × 1,3 = 18,2 m. Différence : 18,2 − 11,2 = **7 m** (ou directement 14 × 0,5 = 7 m)." },
        { type: "redaction", question: "Sujet type brevet. Document (données fictives, d'après des tendances observées dans les études) : des élèves de 3e ont passé un test de mémoire le matin. Ceux qui avaient dormi 9 heures ont retenu en moyenne 16 mots sur 20 ; ceux qui avaient dormi 6 heures, 11 mots sur 20. 1) Décris ces résultats en les chiffrant. 2) Explique-les à l'aide de tes connaissances. 3) Rédige trois conseils argumentés à un camarade qui joue sur son téléphone jusqu'à minuit avant les contrôles.", corrige: `1) **Description** : les élèves qui ont dormi 9 heures ont retenu en moyenne 16 mots sur 20, contre 11 sur 20 pour ceux qui ont dormi 6 heures, soit **5 mots de plus** (16 − 11 = 5). Plus le sommeil est long (dans ces limites), meilleure est la mémorisation.

2) **Explication** : pendant le sommeil, le cerveau **consolide les apprentissages** : les connexions entre neurones (synapses) formées pendant la journée se renforcent. Avec 6 heures de sommeil, les élèves dorment moins que ce dont un adolescent a besoin (**8 à 10 heures**) : la mémorisation et la concentration sont moins bonnes. Remarque : ces données sont fictives et une étude réelle devrait porter sur beaucoup d'élèves.

3) **Conseils** :
- **Arrête le téléphone au moins une heure avant de dormir** : sa lumière freine la production de **mélatonine**, l'hormone qui favorise l'endormissement, et les jeux excitent le cerveau.
- **Dors 8 à 10 heures**, en te couchant à heure régulière : c'est pendant le sommeil que ton cerveau mémorise ce que tu as révisé.
- **Révise la veille au soir, puis dors** plutôt que de veiller tard : une nuit complète rend la mémoire et la concentration plus efficaces le jour du contrôle.` },
      ],
    },
    {
      id: "reproduction-procreation",
      titre: "Reproduction humaine, sexualité et maîtrise de la procréation",
      theme: "Le corps humain et la santé",
      cours: `
## Des organes reproducteurs qui fonctionnent dès la puberté
À la **puberté**, sous l'effet d'**hormones**, les organes reproducteurs deviennent fonctionnels. Ces hormones sont commandées par le **cerveau** (une petite glande à sa base, l'**hypophyse**, contrôle les testicules et les ovaires).

| | Chez l'homme | Chez la femme |
|---|---|---|
| Organes producteurs de gamètes | **testicules** | **ovaires** |
| Gamètes | **spermatozoïdes**, produits en continu, par millions chaque jour, de la puberté jusqu'à la fin de la vie | **ovules** : en général **un seul** libéré par cycle (ovulation), de la puberté à la ménopause (vers 50 ans) |
| Hormone principale | testostérone | œstrogènes et progestérone |

## Le cycle de la femme
Chez la femme, le fonctionnement des ovaires et de l'utérus est **cyclique**. Un cycle dure environ **28 jours** (souvent entre 21 et 35 jours).
- Le cycle commence le 1er jour des **règles** : la couche interne de l'utérus (la **muqueuse utérine**) est éliminée avec un peu de sang.
- La muqueuse s'épaissit ensuite à nouveau.
- Vers le **14e jour** d'un cycle de 28 jours, un ovaire libère un ovule : c'est l'**ovulation**.
- S'il n'y a pas de fécondation, la muqueuse est éliminée : ce sont les règles du cycle suivant.

## De la fécondation à la naissance
Lors d'un rapport sexuel, les spermatozoïdes déposés dans le vagin remontent jusque dans les **trompes**. La **fécondation** a lieu dans une **trompe** : un seul spermatozoïde entre dans l'ovule. Un ovule ne survit qu'environ 24 heures, mais les spermatozoïdes peuvent survivre jusqu'à 3 à 5 jours dans les voies génitales de la femme : un rapport sexuel quelques jours avant l'ovulation peut donc aboutir à une grossesse.

La **cellule-œuf** se divise et forme un **embryon**, qui s'implante dans la muqueuse de l'utérus environ **une semaine** après la fécondation : c'est la **nidation**. La grossesse dure environ **9 mois**. Le **placenta** permet les échanges entre le sang de la mère et celui de l'embryon puis du fœtus : nutriments et dioxygène vers le fœtus, déchets vers la mère. Il laisse passer aussi certaines substances dangereuses (alcool, nicotine, certains médicaments) : pendant la grossesse, il faut **zéro alcool**.

## Maîtriser sa fécondité
La **contraception** permet d'éviter une grossesse non désirée.

| Méthode | Principe |
|---|---|
| **Préservatif** (externe ou interne) | empêche les spermatozoïdes d'atteindre l'ovule ; c'est la **seule** méthode qui protège aussi des **IST** |
| **Pilule** contraceptive, implant, patch | des hormones de synthèse **bloquent l'ovulation** |
| **Stérilet** (DIU) | placé dans l'utérus, empêche la fécondation et la nidation |
| **Contraception d'urgence** (« pilule du lendemain ») | à prendre le plus tôt possible après un rapport non protégé ; elle retarde l'ovulation ; en pharmacie, sans ordonnance et gratuitement |

En cas de grossesse non désirée, la loi française permet l'**interruption volontaire de grossesse** (IVG). Depuis 2024, la liberté de recourir à l'IVG est inscrite dans la **Constitution**.

## Aider les couples qui ont des difficultés à avoir un enfant
Certains couples ont des difficultés à concevoir un enfant. L'**assistance médicale à la procréation** (AMP, ou PMA) propose des solutions : traitement hormonal pour provoquer l'ovulation, **insémination** (dépôt de spermatozoïdes dans l'utérus), **fécondation in vitro** (FIV : fécondation dans un laboratoire, puis transfert de l'embryon dans l'utérus).

## Se protéger des IST
Les **infections sexuellement transmissibles** (IST) se transmettent lors de rapports sexuels : VIH, chlamydia, papillomavirus, hépatite B... Le **préservatif** protège de la plupart d'entre elles. Des **vaccins** existent contre le papillomavirus (proposé aux filles et aux garçons dès 11 ans) et l'hépatite B. Le **dépistage** est simple et gratuit dans les centres spécialisés.

>! **Attention à une erreur fréquente** : la pilule contraceptive ne protège **pas** des IST. Seul le préservatif protège à la fois d'une grossesse et des IST.

> **À retenir** :
> - Dès la puberté, les testicules produisent des spermatozoïdes en continu, les ovaires libèrent en général un ovule par cycle (vers le 14e jour d'un cycle de 28 jours).
> - La fécondation a lieu dans une trompe ; l'embryon s'implante dans l'utérus (nidation) environ une semaine plus tard.
> - Le placenta assure les échanges entre la mère et le fœtus, mais laisse passer alcool et nicotine.
> - Contraception : préservatif (seul protecteur contre les IST), pilule (bloque l'ovulation), stérilet ; contraception d'urgence après un rapport à risque.
> - L'AMP aide les couples qui ont des difficultés à avoir un enfant.
`,
      exercices: [
        { type: "qcm", question: "Où a lieu la fécondation chez la femme ?", choix: ["Dans l'utérus", "Dans l'ovaire", "Dans le vagin", "Dans une trompe"], reponse: 3, explication: "La fécondation a lieu dans une **trompe**. L'embryon descend ensuite vers l'utérus, où il s'implante (nidation)." },
        { type: "saisie", question: "Comment appelle-t-on la libération d'un ovule par l'ovaire ?", reponses: ["ovulation", "l'ovulation"], explication: "C'est l'**ovulation**, vers le 14e jour d'un cycle de 28 jours." },
        { type: "vf", question: "La pilule contraceptive protège des infections sexuellement transmissibles.", reponse: false, explication: "La pilule bloque l'ovulation mais ne protège **pas** des IST. Seul le **préservatif** protège des IST." },
        { type: "qcm", question: "Comment agit la pilule contraceptive ?", choix: ["Elle tue les spermatozoïdes", "Ses hormones bloquent l'ovulation", "Elle détruit l'embryon", "Elle empêche les règles de façon définitive"], reponse: 1, explication: "Les **hormones de synthèse** de la pilule empêchent l'ovulation : sans ovule, pas de fécondation." },
        { type: "saisie", question: "Comment appelle-t-on l'implantation de l'embryon dans la muqueuse de l'utérus ?", reponses: ["nidation", "la nidation"], explication: "C'est la **nidation**, environ une semaine après la fécondation." },
        { type: "qcm", question: "Quel organe permet les échanges de nutriments et de dioxygène entre la mère et le fœtus ?", choix: ["Le placenta", "L'ovaire", "La trompe", "Le vagin"], reponse: 0, explication: "Le **placenta** assure les échanges entre le sang de la mère et celui du fœtus, sans que les deux sangs se mélangent. Il laisse aussi passer l'alcool et la nicotine." },
        { type: "vf", question: "Un rapport sexuel non protégé trois jours avant l'ovulation peut aboutir à une grossesse.", reponse: true, explication: "Les spermatozoïdes peuvent survivre **3 à 5 jours** dans les voies génitales de la femme : ils peuvent encore être présents au moment de l'ovulation." },
        { type: "saisie", question: "Le premier jour des règles de Sarah était le 3 mars. Ses cycles durent 28 jours et l'ovulation a lieu vers le 14e jour du cycle. Vers quelle date de mars l'ovulation aura-t-elle lieu ? (donne le numéro du jour)", reponses: ["16", "16 mars", "le 16 mars", "seize", "16/03", "le seize mars"], explication: "Le 3 mars est le **jour 1** du cycle. Le jour 14 est 13 jours plus tard : 3 + 13 = **16 mars**." },
        { type: "redaction", question: "Sujet type brevet. Une amie de Léna lui dit : « J'ai un copain, je prends la pilule, je n'ai donc besoin de rien d'autre. » 1) Explique comment la pilule empêche une grossesse. 2) Explique pourquoi cette amie a en partie tort, en citant deux exemples d'IST. 3) Indique ce qu'il faut faire en cas de rapport non protégé.", corrige: `1) **La pilule** contient des **hormones de synthèse** qui **bloquent l'ovulation** : les ovaires ne libèrent plus d'ovule. Sans ovule, il ne peut pas y avoir de **fécondation**, donc pas de grossesse (à condition de la prendre régulièrement, sans oubli).

2) **Elle a en partie tort** : la pilule protège d'une grossesse, mais **pas des infections sexuellement transmissibles** (IST), comme le **VIH** (responsable du sida), les **chlamydias**, le **papillomavirus** ou l'**hépatite B**. Ces microbes se transmettent lors des rapports sexuels. Le **préservatif** est la seule méthode qui protège à la fois d'une grossesse et de la plupart des IST. Il est conseillé d'utiliser le préservatif en plus de la pilule, au moins tant que les deux partenaires n'ont pas fait de dépistage.

3) **En cas de rapport non protégé** :
- pour éviter une grossesse : prendre le plus tôt possible une **contraception d'urgence** (disponible en pharmacie, sans ordonnance et gratuitement) ;
- pour les IST : consulter un médecin ou un centre de santé sexuelle pour un **dépistage** (et, en cas de risque de VIH, un traitement préventif existe s'il est pris très vite, dans les 48 heures).` },
      ],
    },
    {
      id: "climat-changement",
      titre: "Climats passés et changement climatique actuel",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Météo et climat
La **météo** décrit le temps qu'il fait à un moment donné. Le **climat** est la **moyenne** des conditions météorologiques sur au moins **30 ans**. Un hiver froid ne contredit donc pas le réchauffement du climat : il faut regarder les moyennes sur de longues périodes.

## L'effet de serre
Le Soleil chauffe la surface de la Terre, qui émet à son tour un rayonnement **infrarouge** (de la chaleur). Certains gaz de l'atmosphère, les **gaz à effet de serre**, absorbent une partie de ce rayonnement et le renvoient vers le sol : la surface est plus chaude. Les principaux sont la **vapeur d'eau**, le **dioxyde de carbone** (CO₂) et le **méthane** (CH₄).

L'effet de serre naturel est indispensable : sans lui, la température moyenne à la surface serait d'environ **−18 °C** au lieu de **15 °C**, et l'eau ne serait pas liquide.

## Les climats ont changé dans le passé
On reconstitue les climats anciens (**paléoclimats**) grâce à des **indices** :
- les **pollens** fossiles conservés dans les sédiments des lacs et des tourbières : chaque plante vit dans un climat précis ;
- les **bulles d'air** emprisonnées dans les glaces de l'Antarctique et du Groenland : on y mesure la teneur en CO₂ de l'air ancien (sur environ 800 000 ans) ;
- les fossiles et les roches (traces d'anciens glaciers, récifs coralliens...).

>! **Exemple : la dernière glaciation**. Il y a environ **20 000 ans**, d'immenses glaciers recouvraient le nord de l'Europe et de l'Amérique. Le niveau des océans était environ **120 m plus bas** qu'aujourd'hui : on pouvait aller à pied de la France à l'Angleterre. Les pollens montrent qu'en France poussaient surtout des herbes et des plantes de toundra, comme aujourd'hui en Scandinavie du Nord.

Au cours des 800 000 dernières années, les **périodes glaciaires** et les **périodes plus chaudes** (comme la nôtre) ont alterné, à peu près tous les 100 000 ans, en lien avec de lentes variations de l'orbite de la Terre autour du Soleil. Ces changements se faisaient en **milliers d'années**.

## Le réchauffement actuel, d'origine humaine
Depuis le début de l'ère industrielle (vers 1850), l'être humain brûle massivement des **combustibles fossiles** (charbon, pétrole, gaz), ce qui rejette du CO₂. La **déforestation** et l'**élevage** (méthane) y contribuent aussi.

| Indicateur | Avant l'ère industrielle | Aujourd'hui |
|---|---|---|
| CO₂ dans l'air | environ 280 ppm | environ 425 ppm en 2024 (mesures de Mauna Loa, Hawaï) |
| Température moyenne mondiale | référence 1850-1900 | environ **+1,1 °C** en 2011-2020 (GIEC, 2021) ; 2024 est l'année la plus chaude jamais mesurée, environ +1,5 °C |
| Niveau moyen des océans | référence 1901 | environ **+20 cm** en 2018 (GIEC) |

(ppm = parties par million : 425 ppm signifie 425 molécules de CO₂ pour un million de molécules d'air.)

Les scientifiques du **GIEC** (Groupe d'experts intergouvernemental sur l'évolution du climat) concluent que ce réchauffement est **sans équivoque dû aux activités humaines**. Il est beaucoup plus **rapide** que les changements naturels passés : environ 1 °C en un siècle et demi.

## Les conséquences
- Fonte des glaciers et des glaces polaires, **élévation du niveau de la mer** (dilatation de l'eau qui se réchauffe et fonte des glaces continentales).
- Vagues de chaleur, sécheresses et pluies extrêmes plus fréquentes.
- Déplacement ou disparition d'espèces, réchauffement et acidification des océans (blanchiment et fragilisation des coraux), baisse de certains rendements agricoles.

## Agir : atténuer et s'adapter
- **Atténuer** : réduire les émissions de gaz à effet de serre (énergies bas-carbone, isolation des logements, transports en commun, vélo, moins de gaspillage, protection des forêts qui stockent du carbone). En **2015**, l'**accord de Paris** fixe l'objectif de limiter le réchauffement nettement en dessous de 2 °C, et si possible à 1,5 °C.
- **S'adapter** : végétaliser les villes, économiser l'eau, adapter les cultures, protéger les côtes.

>! **Attention à une erreur fréquente** : le trou de la couche d'ozone et l'effet de serre sont deux problèmes **différents**. La couche d'ozone filtre les ultraviolets ; l'effet de serre retient la chaleur.

> **À retenir** :
> - Le climat est une moyenne sur au moins 30 ans ; la météo est le temps d'un jour.
> - L'effet de serre naturel (vapeur d'eau, CO₂, méthane) rend la Terre habitable.
> - Pollens et bulles d'air des glaces permettent de reconstituer les climats passés : glaciations et périodes chaudes ont alterné lentement.
> - Depuis 1850, les activités humaines (combustibles fossiles, déforestation, élevage) ont fait passer le CO₂ d'environ 280 à environ 425 ppm et réchauffé la planète d'environ 1,1 °C : c'est un changement très rapide.
> - Il faut réduire les émissions (atténuation) et s'adapter aux changements.
`,
      exercices: [
        { type: "vf", question: "L'effet de serre est un phénomène uniquement dû aux activités humaines.", reponse: false, explication: "L'effet de serre est d'abord **naturel** (vapeur d'eau, CO₂) : sans lui, il ferait environ −18 °C en moyenne. Les activités humaines le **renforcent**." },
        { type: "qcm", question: "Sur quelle durée minimale calcule-t-on les moyennes qui définissent un climat ?", choix: ["Une semaine", "Un an", "30 ans", "1 000 ans"], reponse: 2, explication: "Le climat est la moyenne des conditions météorologiques sur au moins **30 ans**." },
        { type: "qcm", question: "Quelle activité humaine rejette le plus de CO₂ dans l'atmosphère ?", choix: ["La combustion du charbon, du pétrole et du gaz", "L'utilisation de panneaux solaires", "La plantation d'arbres", "La production d'électricité par les éoliennes"], reponse: 0, explication: "La **combustion des combustibles fossiles** (centrales à charbon et à gaz, transports, chauffage, industrie) est la principale source de CO₂ d'origine humaine." },
        { type: "saisie", question: "Quel était, environ, le taux de CO₂ dans l'air avant l'ère industrielle, en ppm ?", reponses: ["280", "280 ppm", "environ 280"], explication: "Environ **280 ppm** avant 1850, contre environ 425 ppm en 2024." },
        { type: "qcm", question: "Quel indice permet de connaître la composition de l'air d'il y a des centaines de milliers d'années ?", choix: ["Les nuages actuels", "Les relevés des thermomètres du XIXe siècle", "Les feuilles des arbres actuels", "Les bulles d'air emprisonnées dans les glaces de l'Antarctique"], reponse: 3, explication: "Les **bulles d'air** piégées dans la glace contiennent de l'air ancien : on y mesure le CO₂ sur environ 800 000 ans." },
        { type: "saisie", question: "Le taux de CO₂ est passé d'environ 280 ppm à environ 425 ppm. De quel pourcentage environ a-t-il augmenté ? (arrondis à l'unité)", reponses: ["52", "52 %", "52%", "environ 52 %", "52 pour cent"], explication: "Augmentation : 425 − 280 = 145 ppm. En pourcentage : 145 ÷ 280 × 100 ≈ **52 %**. Le taux a augmenté de plus de moitié." },
        { type: "vf", question: "Un hiver particulièrement froid en France prouve que le climat ne se réchauffe pas.", reponse: false, explication: "Un hiver froid relève de la **météo**. Le climat s'étudie sur des **moyennes de 30 ans** et à l'échelle de la planète : la température moyenne mondiale augmente." },
        { type: "qcm", question: "Lequel de ces gestes contribue à atténuer le changement climatique ?", choix: ["Laisser les appareils en veille", "Prendre l'avion pour un trajet court", "Se déplacer à vélo ou en transports en commun plutôt qu'en voiture", "Jeter les restes de repas"], reponse: 2, explication: "Le vélo et les transports en commun émettent beaucoup **moins de CO₂** par personne que la voiture. Les autres gestes augmentent les émissions ou le gaspillage." },
        { type: "redaction", question: "Sujet type brevet. Document 1 : taux de CO₂ dans les bulles d'air des glaces de l'Antarctique : environ 180 ppm pendant les périodes glaciaires et environ 280 ppm pendant les périodes chaudes, sur les 800 000 dernières années ; ces variations se faisaient en plusieurs milliers d'années. Document 2 : taux de CO₂ mesuré à Mauna Loa : environ 315 ppm en 1958, environ 425 ppm en 2024. 1) Compare le taux actuel aux valeurs des 800 000 dernières années. 2) Calcule l'augmentation entre 1958 et 2024 et compare sa vitesse avec celle des variations naturelles. 3) Explique l'origine de cette augmentation et une de ses conséquences.", corrige: `1) **Comparaison** : pendant 800 000 ans, le taux de CO₂ est resté entre environ **180 ppm** (glaciations) et **280 ppm** (périodes chaudes). Aujourd'hui, il atteint environ **425 ppm** : c'est **bien au-dessus** de toutes les valeurs des 800 000 dernières années (environ 145 ppm de plus que le maximum naturel).

2) **Augmentation** : 425 − 315 = **110 ppm** en 2024 − 1958 = **66 ans**. Les variations naturelles, d'environ 100 ppm (de 180 à 280), prenaient **plusieurs milliers d'années**. L'augmentation actuelle, d'un ordre de grandeur comparable, s'est faite en quelques dizaines d'années : elle est **beaucoup plus rapide**.

3) **Origine** : cette augmentation est due aux **activités humaines**, principalement la **combustion des combustibles fossiles** (charbon, pétrole, gaz) et la **déforestation**. Le CO₂ est un **gaz à effet de serre** : il renforce l'effet de serre et provoque un **réchauffement** (environ +1,1 °C en moyenne entre 1850-1900 et 2011-2020). **Une conséquence** : la fonte des glaces continentales et la dilatation de l'eau font **monter le niveau de la mer** (environ 20 cm depuis 1901), ce qui menace les zones côtières.` },
      ],
    },
    {
      id: "risques-naturels",
      titre: "Aléas, risques naturels, prévision et prévention",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Aléa, enjeux et risque
- Un **aléa** est un phénomène naturel qui peut se produire : séisme, éruption volcanique, inondation, tempête, glissement de terrain...
- Les **enjeux** sont les personnes, les biens (habitations, routes, usines) et l'environnement qui peuvent être touchés.
- Le **risque** existe quand un aléa peut toucher des enjeux. Il est d'autant plus grand que l'aléa est fort, que les enjeux sont nombreux et qu'ils sont **vulnérables** (bâtiments fragiles, population non préparée).

>! **Exemple** : un séisme puissant dans un désert inhabité n'est pas une catastrophe ; le même séisme sous une grande ville est un risque majeur. Le risque est nul s'il n'y a pas d'enjeux.

## Pourquoi des séismes et des volcans ? Rappel sur les plaques
La surface de la Terre est découpée en **plaques lithosphériques** rigides, qui se déplacent de quelques centimètres par an. La plupart des séismes et des volcans se trouvent aux **frontières des plaques** :
- là où elles **s'écartent** (dorsales océaniques, rift) : volcanisme ;
- là où elles **se rapprochent** : une plaque plonge sous l'autre (**subduction**, comme aux Antilles ou au Japon) ou elles entrent en collision (Himalaya, Alpes) : séismes fréquents et, en subduction, volcans explosifs.

## Les séismes
Un **séisme** est une rupture brutale des roches en profondeur, au **foyer**, qui libère des **ondes sismiques**. Le point de la surface situé à la verticale du foyer est l'**épicentre**. La **magnitude** (échelle de Richter) mesure l'énergie libérée : quand la magnitude augmente de 1, l'amplitude des ondes enregistrées est multipliée par **10** et l'énergie libérée par environ **30**.

>! **Exemple** : le 6 février 2023, un séisme de magnitude 7,8 frappe la Turquie et la Syrie : plus de 50 000 morts, notamment à cause de l'effondrement d'immeubles qui ne respectaient pas les normes parasismiques.

On ne sait **pas prévoir** précisément le jour et l'heure d'un séisme. On connaît seulement les zones à risque (cartes de l'aléa sismique).

## Les volcans
Les volcans **effusifs** émettent des coulées de lave fluide (Piton de la Fournaise à La Réunion) ; les volcans **explosifs** produisent des nuées ardentes et des projections (montagne Pelée en Martinique : en 1902, une nuée ardente a détruit la ville de Saint-Pierre et fait environ 28 000 morts). Contrairement aux séismes, les éruptions s'annoncent souvent par des **signes** : petits séismes, gonflement du volcan, émission de gaz. Des **observatoires** surveillent les volcans actifs en permanence.

## Les inondations
Les crues sont liées à de fortes pluies. Le risque est aggravé par l'**imperméabilisation des sols** (routes, parkings, bâtiments) : l'eau ne s'infiltre plus et ruisselle vite vers les rivières. Le changement climatique rend les pluies extrêmes plus fréquentes dans de nombreuses régions.

## Prévision et prévention
| | Prévision | Prévention |
|---|---|---|
| Définition | annoncer **où**, **quand** et avec quelle intensité un phénomène va se produire | réduire la **vulnérabilité** des enjeux, avant le phénomène |
| Exemples | surveillance des volcans, Vigicrues (vigilance crues), Météo-France | constructions parasismiques, interdiction de construire en zone inondable (plans de prévention des risques), exercices d'évacuation, information des habitants, plan de mise en sûreté dans les établissements scolaires |

>! **Attention à une erreur fréquente** : on ne peut pas empêcher un séisme ou une crue de se produire. On peut seulement les **prévoir** (quand c'est possible) et **réduire leurs conséquences** par la prévention.

> **À retenir** :
> - Risque = un aléa qui peut toucher des enjeux vulnérables.
> - Séismes et volcans sont surtout situés aux frontières des plaques lithosphériques.
> - La magnitude mesure l'énergie d'un séisme ; on ne sait pas prévoir la date d'un séisme.
> - Les éruptions s'annoncent souvent par des signes que les observatoires surveillent.
> - Prévision : annoncer le phénomène ; prévention : réduire la vulnérabilité (normes parasismiques, zones inconstructibles, exercices).
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on un phénomène naturel qui peut se produire (séisme, inondation...), indépendamment des personnes qui seront touchées ?", reponses: ["aléa", "un aléa", "aléas"], explication: "C'est un **aléa**. Il devient un **risque** quand il peut toucher des **enjeux** (personnes, biens)." },
        { type: "vf", question: "Un séisme très puissant dans une région totalement inhabitée représente un risque majeur pour la population.", reponse: false, explication: "Sans **enjeux** (personnes, habitations), il n'y a pas de risque pour la population, même si l'aléa est fort." },
        { type: "qcm", question: "Où se situent la plupart des séismes et des volcans ?", choix: ["Au centre des plaques, loin de leurs bords", "Uniquement près de l'équateur", "Au hasard sur la planète", "Aux frontières des plaques lithosphériques"], reponse: 3, explication: "Les **frontières des plaques** (dorsales, zones de subduction, de collision) concentrent la plupart des séismes et des volcans." },
        { type: "qcm", question: "Laquelle de ces mesures relève de la PRÉVENTION du risque sismique ?", choix: ["Mesurer la magnitude du séisme après qu'il a eu lieu", "Construire des bâtiments selon les normes parasismiques", "Annoncer la date du prochain séisme", "Empêcher les plaques de bouger"], reponse: 1, explication: "La **prévention** réduit la vulnérabilité **avant** le phénomène : les **constructions parasismiques** résistent mieux aux secousses. On ne sait pas annoncer la date d'un séisme." },
        { type: "saisie", question: "Comment appelle-t-on le point de la surface situé à la verticale du foyer d'un séisme ?", reponses: ["épicentre", "l'épicentre"], explication: "C'est l'**épicentre**. Le **foyer** est le lieu de la rupture, en profondeur." },
        { type: "qcm", question: "Par combien est multipliée l'amplitude des ondes enregistrées quand la magnitude d'un séisme passe de 5 à 7 ?", choix: ["Par 2", "Par 20", "Par 100", "Par 1 000"], reponse: 2, explication: "Chaque degré de magnitude multiplie l'amplitude par 10 : de 5 à 7, c'est 10 × 10 = **100**. (L'énergie, elle, est multipliée par environ 30 × 30, soit environ 1 000.)" },
        { type: "vf", question: "Une éruption volcanique est souvent précédée de signes (petits séismes, gonflement du volcan, gaz) qui permettent de la prévoir.", reponse: true, explication: "C'est pourquoi des **observatoires** surveillent les volcans actifs : on peut parfois évacuer la population à temps. Pour les séismes, une telle prévision est impossible." },
        { type: "qcm", question: "Pourquoi la construction de nombreux parkings et routes augmente-t-elle le risque d'inondation ?", choix: ["Parce qu'ils attirent la pluie", "Parce qu'ils rendent les sols imperméables : l'eau ruisselle au lieu de s'infiltrer", "Parce qu'ils font monter le niveau de la mer", "Parce qu'ils réchauffent les rivières"], reponse: 1, explication: "L'**imperméabilisation** des sols empêche l'eau de s'infiltrer : elle ruisselle rapidement vers les rivières, qui débordent plus vite." },
        { type: "redaction", question: "Sujet type brevet. La commune de Saint-Pierre, en Martinique, est construite au pied de la montagne Pelée, un volcan actif situé dans une zone de subduction. La Martinique est aussi exposée aux séismes. 1) Identifie l'aléa et les enjeux dans cette commune et explique pourquoi on peut parler de risque majeur. 2) Explique pourquoi cette région connaît des séismes et un volcanisme explosif. 3) Propose deux mesures de prévision et deux mesures de prévention adaptées, en les justifiant.", corrige: `1) **Aléa et enjeux** : les **aléas** sont les **éruptions volcaniques** de la montagne Pelée (volcan explosif, nuées ardentes) et les **séismes**. Les **enjeux** sont les habitants de Saint-Pierre, leurs maisons, les routes, les écoles. L'aléa peut toucher de nombreux enjeux vulnérables, très proches du volcan : c'est un **risque majeur**. En 1902, une nuée ardente a d'ailleurs détruit la ville et fait environ 28 000 morts.

2) **Explication** : la Martinique est située dans une zone de **subduction** : une plaque océanique plonge sous une autre plaque. Ce mouvement de plaques qui se rapprochent provoque des ruptures de roches, donc des **séismes**, et la formation d'un magma visqueux à l'origine d'un **volcanisme explosif**.

3) **Prévision** (annoncer le phénomène) :
- surveiller le volcan en permanence grâce à un **observatoire** (sismographes pour détecter les petits séismes, mesure du gonflement du volcan, analyse des gaz) ;
- informer et **alerter** rapidement la population quand les signes d'une éruption augmentent.

**Prévention** (réduire la vulnérabilité) :
- construire selon les **normes parasismiques** pour que les bâtiments résistent aux séismes ;
- prévoir des **plans d'évacuation**, des exercices et interdire les constructions dans les zones les plus exposées.` },
      ],
    },
    {
      id: "ressources-ecosystemes",
      titre: "Ressources naturelles, écosystèmes et choix responsables",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Des ressources renouvelables ou non
Une **ressource naturelle** est un élément de la nature que l'être humain utilise : eau, sol, bois, poissons, minerais, pétrole...
- Une ressource **renouvelable** se reconstitue à l'échelle d'une vie humaine : énergie du **Soleil** et du **vent**, eau douce, bois, poissons... à condition de ne pas en prélever plus qu'elle ne se renouvelle.
- Une ressource **non renouvelable** met des **millions d'années** à se former : **pétrole**, **gaz naturel**, **charbon**, minerais (fer, cuivre, uranium...). Les stocks sont limités : chaque tonne utilisée est perdue pour longtemps.

>! **D'où viennent les combustibles fossiles ?** Le **pétrole** et le gaz se sont formés à partir de **plancton** accumulé au fond de mers anciennes, enfoui sous les sédiments et transformé lentement par la chaleur et la pression pendant des millions d'années. Le **charbon** provient surtout des forêts de l'ère primaire, il y a environ 300 millions d'années. Les brûler libère le carbone qu'ils contenaient, sous forme de **CO₂**.

## L'eau douce, une ressource précieuse
Environ **97 %** de l'eau de la Terre est salée. L'eau douce ne représente qu'environ 2,5 % du total, et la plus grande partie est sous forme de glace : l'eau douce facilement accessible (rivières, lacs, nappes souterraines) représente **moins de 1 %** de l'eau de la planète. L'agriculture est l'activité qui en consomme le plus dans le monde. Les pollutions (nitrates des engrais, pesticides) et les sécheresses la menacent.

## Le sol, une ressource qui se forme très lentement
Le sol se forme par l'altération de la roche et la décomposition de la matière organique par les **décomposeurs** (vers de terre, champignons, bactéries). Il faut souvent des **siècles** pour former quelques centimètres de sol. Il peut être perdu en quelques années par l'**érosion** (sols nus, déforestation), le tassement ou la bétonisation.

## Les écosystèmes et les services qu'ils rendent
Un **écosystème** est formé d'un milieu et des êtres vivants qui y vivent et y interagissent (forêt, prairie, mare, récif corallien). Les écosystèmes rendent à l'humanité des **services** :
- **production** : nourriture, bois, médicaments ;
- **régulation** : pollinisation des cultures par les insectes, épuration de l'eau par les zones humides, stockage du carbone par les forêts et les océans, protection contre l'érosion ;
- **culturels** : loisirs, paysages.

## L'action humaine : menaces et solutions
| Problème | Exemples de solutions |
|---|---|
| **Surpêche** : on pêche plus vite que les poissons ne se reproduisent | quotas de pêche, tailles minimales, aires marines protégées |
| **Agriculture intensive** : engrais et pesticides polluent l'eau, déclin des insectes pollinisateurs | **agroécologie** : rotation des cultures, haies, lutte biologique (coccinelles contre les pucerons), réduction des pesticides |
| **Déforestation** : perte de biodiversité, de sols et de stockage de carbone | gestion durable des forêts, reboisement, labels |
| **Énergies fossiles** : épuisement des stocks, émission de CO₂ | économies d'énergie, énergies renouvelables (solaire, éolien, hydraulique) |
| **Espèces exotiques envahissantes** (frelon asiatique, jussie) | surveillance, contrôle des échanges, lutte ciblée |

Chaque choix (énergie, alimentation, transport) a des **avantages** et des **inconvénients** : un barrage produit de l'électricité renouvelable, mais modifie la rivière et gêne les poissons migrateurs ; une éolienne n'émet pas de CO₂ en fonctionnant, mais sa production dépend du vent. En France, environ deux tiers de l'électricité est d'origine **nucléaire** : peu d'émissions de CO₂, mais l'uranium est une ressource non renouvelable et il faut gérer des déchets radioactifs.

>! **Attention à une erreur fréquente** : une ressource renouvelable peut être **épuisée** localement si on la surexploite. Une forêt coupée plus vite qu'elle ne repousse disparaît.

> **À retenir** :
> - Ressources renouvelables (Soleil, vent, eau, bois, poissons) si on ne les surexploite pas ; non renouvelables (pétrole, gaz, charbon, minerais) formées en millions d'années.
> - L'eau douce accessible représente moins de 1 % de l'eau de la Terre ; le sol se forme très lentement.
> - Les écosystèmes rendent des services (nourriture, pollinisation, épuration de l'eau, stockage du carbone).
> - Une gestion durable (quotas, agroécologie, énergies renouvelables, économies) permet de préserver les ressources.
> - Tout choix a des avantages et des inconvénients qu'il faut argumenter.
`,
      exercices: [
        { type: "qcm", question: "Laquelle de ces ressources n'est pas renouvelable ?", choix: ["L'énergie solaire", "Le vent", "Le pétrole", "Le bois d'une forêt bien gérée"], reponse: 2, explication: "Le **pétrole** met des millions d'années à se former : il est **non renouvelable** à l'échelle humaine." },
        { type: "vf", question: "L'eau douce facilement accessible représente moins de 1 % de l'eau de la Terre.", reponse: true, explication: "97 % de l'eau est salée et la plus grande partie de l'eau douce est sous forme de glace : l'eau douce accessible représente **moins de 1 %** du total." },
        { type: "saisie", question: "Comment appelle-t-on l'ensemble formé par un milieu et les êtres vivants qui y vivent et y interagissent ?", reponses: ["écosystème", "un écosystème", "écosystèmes"], explication: "C'est un **écosystème** (forêt, mare, prairie, récif...)." },
        { type: "qcm", question: "Lequel de ces exemples est un service de régulation rendu par un écosystème ?", choix: ["La pollinisation des arbres fruitiers par les abeilles", "La construction d'une autoroute", "L'extraction de charbon", "La fabrication de plastique"], reponse: 0, explication: "Les insectes **pollinisateurs** permettent la production de nombreux fruits et légumes : c'est un service de **régulation** rendu gratuitement par les écosystèmes." },
        { type: "vf", question: "Une ressource renouvelable ne peut jamais s'épuiser, quelle que soit la façon dont on l'exploite.", reponse: false, explication: "Si on prélève plus vite qu'elle ne se renouvelle (surpêche, déforestation), une ressource renouvelable peut **s'épuiser** localement." },
        { type: "qcm", question: "Quelle pratique relève de l'agroécologie ?", choix: ["Arracher toutes les haies pour agrandir les champs", "Cultiver la même plante chaque année sur la même parcelle", "Épandre davantage de pesticides", "Utiliser des coccinelles pour lutter contre les pucerons"], reponse: 3, explication: "La **lutte biologique** (coccinelles qui mangent les pucerons) limite l'usage des pesticides. Haies, rotation des cultures et diversité font aussi partie de l'agroécologie." },
        { type: "saisie", question: "Quel gaz à effet de serre est libéré quand on brûle du pétrole, du charbon ou du gaz ? (donne son nom ou sa formule)", reponses: ["dioxyde de carbone", "CO2", "CO₂", "gaz carbonique", "le dioxyde de carbone"], explication: "La combustion des combustibles fossiles libère du **dioxyde de carbone** (CO₂), principal gaz responsable du renforcement de l'effet de serre." },
        { type: "qcm", question: "Pourquoi fixe-t-on des quotas de pêche ?", choix: ["Pour ne pas pêcher plus de poissons que ceux qui naissent, afin que les populations se maintiennent", "Pour augmenter le prix du poisson sans raison", "Pour supprimer la pêche", "Pour favoriser les espèces envahissantes"], reponse: 0, explication: "Les **quotas** limitent les prélèvements pour que les populations de poissons aient le temps de se **reproduire** : c'est une gestion **durable**." },
        { type: "redaction", question: "Sujet type brevet. Une commune hésite entre deux projets pour produire de l'électricité : un parc de 5 éoliennes ou une petite centrale au gaz naturel. Document : une éolienne n'émet pas de CO₂ en fonctionnant, mais ne produit que lorsqu'il y a assez de vent ; une centrale au gaz produit à la demande, mais brûle un combustible fossile. En argumentant à partir de tes connaissances (ressources, climat, biodiversité), présente les avantages et inconvénients de chaque projet, puis donne ton avis justifié.", corrige: `**Le parc éolien**
- *Avantages* : le vent est une ressource **renouvelable** ; une éolienne n'émet **pas de CO₂** quand elle fonctionne, elle ne renforce donc pas l'effet de serre ni le **changement climatique**.
- *Inconvénients* : la production est **intermittente** (elle dépend du vent) ; il faut donc d'autres moyens de production ou de stockage. Les éoliennes modifient le paysage et peuvent tuer des oiseaux et des chauves-souris si elles sont mal placées (enjeu pour la **biodiversité**).

**La centrale au gaz**
- *Avantages* : elle produit de l'électricité **à la demande**, quel que soit le temps.
- *Inconvénients* : le gaz naturel est une ressource **non renouvelable**, formée en millions d'années, dont les stocks sont limités ; sa combustion rejette du **CO₂**, un gaz à effet de serre qui contribue au **réchauffement climatique**.

**Mon avis** (exemple) : je choisirais le **parc éolien**, car il utilise une ressource renouvelable et n'aggrave pas le changement climatique, ce qui est aujourd'hui une priorité. Pour compenser l'intermittence, la commune peut le compléter par d'autres énergies renouvelables (solaire) et par des **économies d'énergie**, et choisir l'emplacement des éoliennes après une étude sur les oiseaux. *Un avis différent est accepté s'il est argumenté avec des connaissances.*` },
      ],
    },
    {
      id: "methodes-epreuve-sciences",
      titre: "Méthodes pour réussir l'épreuve de sciences du brevet",
      theme: "Méthodes et préparation du brevet",
      cours: `
## L'épreuve de sciences du brevet
L'épreuve écrite de sciences dure **1 heure** et est notée sur **20 points** : elle porte sur **deux disciplines** parmi physique-chimie, SVT et technologie (environ 30 minutes et **10 points** chacune). Les deux disciplines retenues sont annoncées par le ministère environ deux mois avant l'épreuve (fin avril) : renseigne-toi auprès de ton professeur pour ta session. Le sujet de SVT s'appuie sur des **documents** (textes, graphiques, tableaux, schémas, photos) et sur tes **connaissances**. Depuis l'arrêté du 17 juillet 2026, les sujets sont établis sur les **programmes de la classe de 3e** quand ils existent, et sinon sur ceux du **cycle 4** (5e, 4e et 3e). En SVT, le programme en vigueur pour la session 2027 est celui du cycle 4 : révise donc les notions des trois années, pas seulement celles de 3e. Un **nouveau programme** de SVT du cycle 4 est en préparation (projet du Conseil supérieur des programmes, soumis à la consultation des professeurs en mai-juin 2026) ; tant qu'il n'est pas publié officiellement et entré en vigueur, il ne concerne pas ton brevet. La **maîtrise de la langue** compte pour **1 point sur 10** dans chaque discipline : orthographe, phrases correctes, vocabulaire scientifique précis et raisonnement bien organisé.

## Comprendre la consigne
| Verbe de la consigne | Ce qu'on attend |
|---|---|
| **Relever, extraire** | recopier les informations utiles du document, avec les valeurs et les unités |
| **Décrire** | dire ce qu'on observe, avec des chiffres : « la valeur passe de... à... entre... et... » |
| **Comparer** | indiquer les ressemblances et les différences, chiffrées (« 3 fois plus », « 20 de moins ») |
| **Expliquer, interpréter** | donner la cause, avec tes **connaissances** (« car », « grâce à ») |
| **Argumenter, justifier** | appuyer une affirmation par des faits tirés des documents et des connaissances |
| **Conclure** | répondre au problème posé en une ou deux phrases |

## Lire un graphique
1. Lis le **titre**, puis ce qui est représenté sur chaque **axe** (grandeur et **unité**).
2. Décris l'**évolution** par étapes : augmentation, diminution, stabilité, maximum.
3. **Chiffre** toujours : valeurs, dates, écarts.

>! **Exemple de description** : « La quantité d'anticorps passe de 0 au jour 0 à 20 unités arbitraires au jour 20, puis diminue jusqu'à 5 au jour 50. »

## Les petits calculs à savoir faire
- **Pourcentage** : partie ÷ total × 100. Exemple : 15 élèves sur 25 = 15 ÷ 25 × 100 = **60 %**.
- **Augmentation en pourcentage** : (valeur finale − valeur initiale) ÷ valeur initiale × 100.
- **Comparer par un rapport** : 200 ÷ 20 = 10, donc « 10 fois plus ».
- **Vitesse** : v = d ÷ t (attention aux unités).

## La démarche scientifique et les expériences
1. **Problème** : la question qu'on se pose.
2. **Hypothèse** : une réponse possible, que l'on va tester.
3. **Expérience** : on ne fait varier **qu'un seul facteur** à la fois, et on prévoit un **témoin** (identique, sauf pour le facteur testé), pour pouvoir comparer.
4. **Résultats**, puis **interprétation** : l'hypothèse est validée ou non.
5. **Conclusion** : réponse au problème.

>! **Exemple** : pour tester l'hypothèse « la lumière est nécessaire à la germination du radis », on place des graines identiques dans les mêmes conditions (eau, température, sol), l'un des lots à la lumière, l'autre à l'obscurité. Seul le facteur « lumière » change.

## Corrélation n'est pas causalité
Deux phénomènes qui varient ensemble ne sont pas forcément liés par une relation de cause à effet. Exemple : les ventes de glaces et les coups de soleil augmentent en même temps en été ; ce ne sont pas les glaces qui provoquent les coups de soleil : les deux sont dus au **soleil**. Pour prouver une cause, il faut une **expérience** (ou des études qui éliminent les autres facteurs).

## Bien rédiger
- Réponds par des **phrases complètes**, en reprenant les mots de la question.
- Utilise le **vocabulaire scientifique** précis (allèle, anticorps, synapse...).
- Construis ton raisonnement : « **Je vois que**... (document) ; **or je sais que**... (connaissance) ; **donc**... (conclusion) ».
- Relis-toi : orthographe, unités, et vérifie que tu as répondu à **toutes** les questions.

>! **Attention à une erreur fréquente** : recopier tout le document sans l'expliquer ne rapporte presque rien. Il faut **sélectionner** les informations utiles et les **relier** à tes connaissances.

> **À retenir** :
> - Lis attentivement chaque consigne : décrire, comparer, expliquer et argumenter ne demandent pas la même chose.
> - Décris un graphique en chiffrant, avec les unités.
> - Une expérience ne fait varier qu'un facteur et comporte un témoin.
> - Corrélation n'est pas causalité.
> - Raisonne : « Je vois que... ; or je sais que... ; donc... ».
`,
      textes: {
        rougeole: `**Sujet type brevet : la rougeole dans un pays imaginaire** (données fictives, simplifiées et arrondies)

**Document 1 : vaccination des enfants et nombre de cas de rougeole**

| Année | Enfants de 2 ans vaccinés (2 doses) | Nombre de cas de rougeole dans l'année |
|---|---|---|
| 2010 | 60 % | 5 000 |
| 2014 | 75 % | 1 200 |
| 2018 | 88 % | 300 |
| 2022 | 95 % | 20 |

**Document 2 : une maladie très contagieuse**
La rougeole est due à un **virus**. Une personne malade contamine en moyenne 12 à 18 personnes non protégées. On estime que le virus cesse de circuler quand au moins **95 %** de la population est protégée. Certaines personnes ne peuvent pas être vaccinées : les nourrissons de moins de 12 mois et les personnes dont le système immunitaire est très affaibli.

**Document 3 : le vaccin**
Le vaccin contre la rougeole contient le virus de la rougeole **vivant mais atténué** (affaibli) : il ne provoque pas la maladie. Deux doses sont recommandées, la seconde quelques mois après la première.`,
      },
      exercices: [
        { type: "qcm", question: "Une consigne te demande de « décrire » l'évolution d'une courbe. Que dois-tu faire ?", choix: ["Expliquer les causes de l'évolution avec tes connaissances", "Dire ce que tu observes en donnant des valeurs chiffrées", "Donner ton avis personnel", "Recopier le titre du graphique"], reponse: 1, explication: "**Décrire**, c'est dire ce qu'on observe, avec des **valeurs chiffrées** et des unités. **Expliquer** demande ensuite de donner les causes." },
        { type: "saisie", question: "Dans une classe de 25 élèves, 15 ont été vaccinés contre l'hépatite B. Quel pourcentage d'élèves sont vaccinés ?", reponses: ["60", "60 %", "60%", "60 pour cent"], explication: "15 ÷ 25 × 100 = **60 %**." },
        { type: "vf", question: "Dans une expérience bien construite, on fait varier plusieurs facteurs en même temps pour aller plus vite.", reponse: false, explication: "On ne fait varier **qu'un seul facteur** à la fois, sinon on ne peut pas savoir lequel est responsable du résultat. On prévoit aussi un **témoin**." },
        { type: "saisie", question: "Comment appelle-t-on, dans une expérience, le dispositif identique aux autres sauf pour le facteur testé, et qui sert de référence ?", reponses: ["témoin", "le témoin", "expérience témoin", "tube témoin", "un témoin", "lot témoin"], explication: "C'est le **témoin** : il permet de comparer et d'attribuer le résultat au seul facteur testé." },
        { type: "qcm", question: "Dans une ville, on observe que les années où il y a le plus de cigognes sont aussi celles où il y a le plus de naissances. Que peut-on conclure ?", choix: ["Les cigognes apportent les bébés", "Les naissances attirent les cigognes", "Il y a une corrélation, mais cela ne prouve pas que l'un cause l'autre", "Les données sont forcément fausses"], reponse: 2, explication: "Deux phénomènes qui varient ensemble montrent une **corrélation**, pas forcément une **causalité**. Un troisième facteur (par exemple l'évolution de la région au fil des années) peut expliquer les deux." },
        { type: "saisie", question: "Un nombre de bactéries passe de 200 à 300. De quel pourcentage a-t-il augmenté ?", reponses: ["50", "50 %", "50%", "50 pour cent"], explication: "(300 − 200) ÷ 200 × 100 = 100 ÷ 200 × 100 = **50 %**." },
        { type: "qcm", question: "Quelle phrase est la mieux rédigée pour répondre à : « Explique pourquoi la quantité d'anticorps augmente plus vite après le rappel » ?", choix: ["« Parce que. »", "« Elle augmente plus vite. »", "« Je vois que les anticorps apparaissent en 3 jours après le rappel contre 10 jours après la 1re injection ; or je sais que la 1re injection a laissé des lymphocytes mémoire ; donc la réponse est plus rapide. »", "« Les anticorps c'est des globules rouges. »"], reponse: 2, explication: "Une bonne réponse relie un **fait chiffré** du document à une **connaissance**, puis **conclut** : « je vois que... ; or je sais que... ; donc... »." },
        { type: "vf", question: "Pour décrire un graphique, il faut préciser les unités des valeurs que l'on donne.", reponse: true, explication: "Une valeur sans unité n'a pas de sens : « 20 » peut être 20 jours, 20 % ou 20 mg. Lis toujours les axes." },
        { type: "redaction", question: "Sujet type brevet (démarche). Un élève formule l'hypothèse suivante : « Les graines de haricot ont besoin d'eau pour germer. » 1) Propose une expérience pour tester cette hypothèse, en précisant le facteur testé et le témoin. 2) Indique les résultats attendus si l'hypothèse est validée. 3) Explique pourquoi il vaut mieux utiliser 20 graines par lot plutôt qu'une seule.", corrige: `1) **Expérience** : on prépare deux lots identiques de graines de haricot (même variété, même nombre de graines, même coton, même température, même lumière).
- **Lot 1 (témoin)** : coton **humide**, arrosé régulièrement.
- **Lot 2** : coton **sec**, sans eau.
Le **seul facteur qui change** est la présence d'**eau** : c'est le facteur testé. On observe les lots pendant une semaine environ.

2) **Résultats attendus si l'hypothèse est validée** : les graines du lot 1 (avec eau) **germent** (une petite racine apparaît), alors que les graines du lot 2 (sans eau) **ne germent pas**. Comme seule l'eau différait, on pourra conclure que l'eau est **nécessaire** à la germination du haricot.

3) **Pourquoi 20 graines** : une seule graine peut ne pas germer pour une autre raison (graine abîmée, morte). Avec 20 graines par lot, un accident isolé ne fausse pas le résultat : on peut calculer un **pourcentage de germination** (par exemple 18 sur 20, soit 90 %) et les résultats sont plus **fiables**. On peut aussi recommencer l'expérience pour vérifier.` },
        { type: "saisie", texte: "rougeole", question: "Relever. D'après le document 1, quel pourcentage des enfants de 2 ans étaient vaccinés (2 doses) en 2018 ?", reponses: ["88", "88 %", "88 pour cent"], explication: "On lit la ligne **2018** du tableau, colonne « enfants vaccinés » : **88 %**. Relever, c'est recopier la bonne valeur **avec son unité**." },
        { type: "saisie", texte: "rougeole", question: "Calculer. D'après le document 1, par combien le nombre de cas de rougeole a-t-il été divisé entre 2010 et 2022 ?", reponses: ["250", "250 fois", "par 250", "divisé par 250"], explication: "5 000 ÷ 20 = **250**. Le nombre de cas a été divisé par 250 : on peut écrire « 250 fois moins de cas en 2022 qu'en 2010 »." },
        { type: "qcm", texte: "rougeole", question: "Quelle phrase décrit correctement le document 1 ?", choix: ["Le nombre de cas augmente quand la vaccination augmente", "Le vaccin provoque la rougeole chez 20 enfants en 2022", "Entre 2010 et 2022, la part d'enfants vaccinés passe de 60 % à 95 %, et le nombre de cas baisse de 5 000 à 20", "La vaccination n'a pas changé entre 2010 et 2022"], reponse: 2, explication: "**Décrire**, c'est dire ce qu'on voit en **chiffrant** les deux grandeurs : la vaccination passe de 60 % à 95 %, les cas passent de 5 000 à 20. Les 20 cas de 2022 ne sont pas dus au vaccin : le document 3 indique qu'il ne provoque pas la maladie." },
        { type: "vf", texte: "rougeole", question: "D'après le document 2 et tes connaissances, un antibiotique permet de guérir la rougeole.", reponse: false, explication: "La rougeole est due à un **virus** (document 2). Or les antibiotiques n'agissent que sur les **bactéries** : ils sont inefficaces contre la rougeole. D'où l'importance de la **prévention** par le vaccin." },
        { type: "qcm", texte: "rougeole", question: "Un nourrisson de 6 mois ne peut pas encore être vacciné. Dans quelle situation est-il le mieux protégé de la rougeole ?", choix: ["Quand au moins 95 % de la population autour de lui est vaccinée", "Quand on lui donne des antibiotiques chaque mois", "Quand seulement ses parents sont vaccinés et que le reste de la ville ne l'est pas", "Il ne peut jamais être protégé"], reponse: 0, explication: "Si au moins **95 %** de la population est protégée, le virus **ne circule plus** (document 2) : le nourrisson a très peu de risques d'être contaminé. C'est la **protection collective**." },
        { type: "redaction", texte: "rougeole", question: "Sujet type brevet. 1) Explique, à l'aide du document 3 et de tes connaissances, comment le vaccin protège un enfant contre la rougeole. 2) À l'aide des documents 1 et 2, montre que la vaccination protège aussi les personnes qui ne peuvent pas être vaccinées. Rédige des phrases complètes : la maîtrise de la langue est notée (1 point sur 10).", corrige: `1) **Comment le vaccin protège** : je vois dans le document 3 que le vaccin contient le virus de la rougeole **atténué**, qui ne rend pas malade. Or je sais que ce virus atténué porte les mêmes **antigènes** que le vrai virus : il est reconnu par les **lymphocytes** de l'enfant. Les **lymphocytes B** produisent des **anticorps** spécifiques et il se forme des **lymphocytes mémoire**. Donc, si l'enfant rencontre plus tard le vrai virus, ses lymphocytes mémoire déclenchent une réponse **rapide et forte** qui élimine le virus avant qu'il ne provoque la maladie. La seconde dose (le rappel) rend cette protection plus forte et plus durable.

2) **Une protection pour tous** : je vois dans le document 1 qu'entre 2010 et 2022 la part d'enfants vaccinés passe de **60 %** à **95 %**, tandis que le nombre de cas passe de **5 000** à **20**, soit **250 fois moins**. Le document 2 indique que le virus cesse de circuler quand au moins **95 %** de la population est protégée. Or une personne vaccinée ne tombe pas malade et ne transmet donc pas le virus. Donc, quand presque tout le monde est vacciné, le virus ne trouve plus assez de personnes à contaminer et disparaît : les nourrissons de moins de 12 mois et les personnes au système immunitaire affaibli, qui ne peuvent pas être vaccinés, ne le rencontrent plus. C'est la **protection collective** : se vacciner, c'est se protéger soi-même et protéger les autres.

**Conseil de rédaction** : chaque argument relie un **fait chiffré** des documents (« je vois que ») à une **connaissance** (« or je sais que »), puis **conclut** (« donc »). Le vocabulaire précis (antigène, lymphocytes mémoire, anticorps) compte pour la maîtrise de la langue.` },
      ],
    },
    {
      id: "alimentation-effort",
      titre: "Alimentation, effort physique et santé",
      theme: "Le corps humain et la santé",
      cours: `
## Les muscles ont besoin d'énergie
Pour se contracter, les cellules musculaires utilisent de l'**énergie**. Elles la produisent grâce à la **respiration cellulaire**, qui consomme des **nutriments** (surtout du **glucose**, mais aussi des acides gras) et du **dioxygène** (O₂), et rejette du **dioxyde de carbone** (CO₂) et de l'eau :

~~~
glucose + dioxygène → dioxyde de carbone + eau + énergie
~~~

Une partie de cette énergie sert au mouvement, le reste est libéré sous forme de **chaleur** : c'est pourquoi on a chaud et on transpire pendant un effort.

Les nutriments viennent de la **digestion** des aliments ; le dioxygène vient de l'air, par les **poumons**. C'est le **sang**, mis en mouvement par le **cœur**, qui apporte nutriments et dioxygène aux muscles et qui emporte le CO₂ vers les poumons.

## Ce qui change pendant un effort
Pendant un effort, les muscles consomment beaucoup plus de dioxygène et de nutriments. L'organisme s'adapte :

| Grandeur | Au repos (adolescent, valeurs moyennes) | Pendant un effort intense |
|---|---|---|
| **Fréquence cardiaque** (battements par minute) | environ 70 | jusqu'à 180 à 200 |
| **Fréquence respiratoire** (mouvements par minute) | environ 15 | 40 ou plus |
| Volume d'air par mouvement respiratoire | environ 0,5 L | 2 L ou plus |
| Part du sang envoyée aux muscles | environ 20 % | environ 80 % |

- Le cœur bat **plus vite** et **plus fort** : le **débit cardiaque** augmente. Le débit cardiaque, c'est le **volume de sang** que le cœur envoie dans les vaisseaux **en une minute** (en litres par minute).
- On respire **plus vite** et **plus profondément** : le **débit ventilatoire** (volume d'air qui entre dans les poumons par minute) augmente.
- Les vaisseaux sanguins des muscles **se dilatent** : les muscles reçoivent une plus grande part du sang.

>! **Méthode : calculer un débit**. Débit cardiaque = fréquence cardiaque × volume de sang éjecté à chaque battement. Au repos : 70 battements par minute × 70 mL = 4 900 mL par minute, soit environ **4,9 L/min**. De même, débit ventilatoire = fréquence respiratoire × volume d'air par mouvement : 15 × 0,5 L = **7,5 L/min** au repos.

## Le système nerveux commande ces adaptations
Des **récepteurs** détectent l'effort (la teneur du sang en CO₂ augmente, les muscles travaillent). Des **centres nerveux** situés à la base de l'encéphale (dans le **bulbe rachidien**, la partie de l'encéphale qui prolonge la moelle épinière, juste au-dessus d'elle, à la base du crâne) envoient alors, par des **nerfs**, des messages qui accélèrent le cœur et les mouvements respiratoires. Une hormone, l'**adrénaline**, renforce cette accélération. Après l'effort, les fréquences reviennent peu à peu à leur valeur de repos : c'est la **récupération**.

## Les limites de l'organisme
- La fréquence cardiaque ne peut pas augmenter sans limite. On estime la **fréquence cardiaque maximale** par la formule approximative **220 − âge** : environ 205 battements par minute à 15 ans.
- La consommation de dioxygène atteint aussi un **maximum** : au-delà, l'effort ne peut pas durer longtemps et la **fatigue** apparaît.
- L'**entraînement** régulier rend le cœur plus efficace : il envoie plus de sang à chaque battement. La fréquence cardiaque de repos d'un sportif entraîné est souvent plus basse (parfois 50 battements par minute ou moins) et sa récupération est plus rapide.

>! **Le dopage, un danger** : le **dopage** consiste à utiliser des substances interdites pour augmenter ses performances. Par exemple, l'**EPO** (une hormone) augmente le nombre de **globules rouges**, qui transportent le dioxygène : le muscle en reçoit davantage. Mais le sang devient plus épais, ce qui augmente le risque de caillots, d'accident cardiaque ou d'AVC. Le dopage est interdit et dangereux pour la santé.

## Une alimentation adaptée à ses besoins
Les aliments apportent de la **matière** (pour grandir et renouveler les cellules) et de l'**énergie**. L'énergie s'exprime en **kilocalories** (kcal) ou en **kilojoules** (kJ) : 1 kcal ≈ 4,18 kJ.

| Nutriment | Énergie apportée par gramme | Exemples d'aliments riches |
|---|---|---|
| **Glucides** | environ 4 kcal | pain, pâtes, riz, pommes de terre, fruits |
| **Lipides** | environ 9 kcal | huile, beurre, fromage, fritures |
| **Protéines** | environ 4 kcal | viande, poisson, œufs, légumineuses, produits laitiers |

L'eau, les sels minéraux (calcium, fer), les vitamines et les fibres n'apportent pas ou très peu d'énergie, mais ils sont **indispensables**.

Un adolescent dépense environ **2 000 à 3 000 kcal par jour** (environ 8 400 à 12 500 kJ), selon son âge, son sexe et son activité physique. Une alimentation **équilibrée** est **variée** (au moins 5 portions de fruits et légumes par jour, des féculents, des produits laitiers, des protéines) et apporte autant d'énergie que l'on en dépense. Si les apports dépassent durablement les dépenses, l'organisme stocke l'excédent sous forme de **graisses** : risque de **surpoids**.

>! **Exemple résolu : lire une étiquette**. Une barre de céréales de 25 g contient 16 g de glucides, 4 g de lipides et 2 g de protéines.
>! - Glucides : 16 × 4 = 64 kcal ; lipides : 4 × 9 = 36 kcal ; protéines : 2 × 4 = 8 kcal.
>! - Total : 64 + 36 + 8 = **108 kcal**. Les lipides représentent 4 g sur 22 g de nutriments, mais un tiers de l'énergie (36 sur 108).

## Activité physique et santé
L'Organisation mondiale de la santé (OMS) recommande aux jeunes de 5 à 17 ans **au moins 60 minutes par jour** d'activité physique d'intensité modérée à soutenue. L'activité physique régulière renforce le cœur, les muscles et les os, aide à garder un poids stable, améliore le sommeil et le moral. À l'inverse, la **sédentarité** (rester longtemps assis, devant les écrans) augmente le risque de surpoids, de diabète de type 2 et de maladies cardiovasculaires.

Pour faire un effort sans risque : s'**échauffer**, boire de l'eau (**hydratation**), augmenter l'intensité progressivement, respecter des temps de **récupération** et de sommeil.

>! **Attention à une erreur fréquente** : les muscles ne fabriquent pas leur énergie « à partir de rien », ni directement à partir de l'air. Ils la tirent des **nutriments**, grâce au **dioxygène**. Si le cœur et la respiration s'accélèrent pendant l'effort, c'est pour **approvisionner les muscles qui travaillent** en dioxygène et en nutriments, et pour évacuer le CO₂ qu'ils rejettent.

> **À retenir** :
> - Les muscles produisent leur énergie par la respiration cellulaire : nutriments + dioxygène → CO₂ + eau + énergie (et chaleur).
> - Pendant un effort, les fréquences cardiaque et respiratoire, les débits cardiaque et ventilatoire augmentent, et les muscles reçoivent une plus grande part du sang.
> - Ces adaptations sont commandées par le système nerveux (centres du bulbe rachidien) et renforcées par l'adrénaline ; elles ont des limites (fréquence cardiaque maximale ≈ 220 − âge).
> - Glucides et protéines apportent environ 4 kcal par gramme, les lipides environ 9 kcal ; une alimentation équilibrée est variée et couvre les dépenses.
> - Au moins 60 minutes d'activité physique par jour sont recommandées aux jeunes ; le dopage est interdit et dangereux.
`,
      textes: {
        effort: `**Document : mesures réalisées sur Mehdi, 15 ans, au repos puis à la fin d'une course de 10 minutes** (données fictives, réalistes)

| Mesure | Au repos | Fin de la course |
|---|---|---|
| Fréquence cardiaque (battements par minute) | 70 | 170 |
| Fréquence respiratoire (mouvements par minute) | 15 | 40 |
| Volume d'air par mouvement respiratoire (L) | 0,5 | 2 |
| Dioxygène consommé (L par minute) | 0,3 | 2,5 |`,
      },
      exercices: [
        { type: "qcm", question: "Que deviennent la fréquence cardiaque et la fréquence respiratoire pendant un effort physique ?", choix: ["Elles diminuent toutes les deux", "Seule la fréquence cardiaque augmente", "Elles augmentent toutes les deux", "Elles ne changent pas"], reponse: 2, explication: "Pendant un effort, le cœur bat **plus vite** et on respire **plus vite et plus profondément** : les muscles reçoivent ainsi davantage de dioxygène et de nutriments." },
        { type: "saisie", question: "Quel gaz de l'air les muscles consomment-ils davantage pendant un effort ?", reponses: ["dioxygène", "le dioxygène", "O2", "O₂", "oxygène", "l'oxygène"], explication: "Les muscles consomment davantage de **dioxygène** (O₂) pour la respiration cellulaire, qui libère l'énergie nécessaire à leur contraction. Ils rejettent plus de dioxyde de carbone (CO₂)." },
        { type: "vf", question: "Pendant un effort intense, les muscles reçoivent une plus grande part du sang envoyé par le cœur qu'au repos.", reponse: true, explication: "Les vaisseaux des muscles se dilatent : les muscles reçoivent environ **80 %** du sang pendant un effort intense, contre environ **20 %** au repos." },
        { type: "saisie", question: "À l'aide de la formule approximative « 220 − âge », estime la fréquence cardiaque maximale d'une élève de 15 ans (en battements par minute).", reponses: ["205", "205 battements par minute", "205 bpm", "205 b/min"], explication: "220 − 15 = **205** battements par minute. C'est une estimation : la valeur réelle varie d'une personne à l'autre." },
        { type: "saisie", question: "Une barre de céréales contient 16 g de glucides, 4 g de lipides et 2 g de protéines. Glucides et protéines apportent 4 kcal par gramme, les lipides 9 kcal par gramme. Quelle énergie apporte cette barre (en kcal) ?", reponses: ["108 kcal", "108 kilocalories"], explication: "Glucides : 16 × 4 = 64 kcal ; lipides : 4 × 9 = 36 kcal ; protéines : 2 × 4 = 8 kcal. Total : 64 + 36 + 8 = **108 kcal**." },
        { type: "vf", question: "Un gramme de lipides apporte plus d'énergie qu'un gramme de glucides.", reponse: true, explication: "Un gramme de **lipides** apporte environ **9 kcal**, plus du double d'un gramme de glucides ou de protéines (environ 4 kcal)." },
        { type: "qcm", question: "Pourquoi l'EPO, utilisée comme produit dopant, augmente-t-elle les performances d'endurance ?", choix: ["Elle remplace les nutriments, donc les muscles n'ont plus besoin de glucose", "Elle augmente le nombre de globules rouges, donc le transport du dioxygène vers les muscles", "Elle fait grossir les poumons, qui font entrer plus d'air à chaque mouvement", "Elle supprime la fatigue sans aucun risque pour la santé"], reponse: 1, explication: "L'EPO augmente le nombre de **globules rouges**, qui transportent le dioxygène : les muscles en reçoivent plus. Mais le sang s'épaissit, ce qui augmente le risque de caillots, d'accident cardiaque ou d'AVC : le dopage est **interdit et dangereux**." },
        { type: "saisie", texte: "effort", question: "Calculer. D'après le document, quel est le débit ventilatoire de Mehdi à la fin de la course, en litres par minute ? (débit ventilatoire = fréquence respiratoire × volume d'air par mouvement)", reponses: ["80", "80 L/min", "80 litres par minute", "80 L par minute"], explication: "40 mouvements par minute × 2 L = **80 L/min**. Au repos, il était de 15 × 0,5 = 7,5 L/min : il a été multiplié par plus de 10." },
        { type: "qcm", texte: "effort", question: "Quelle phrase décrit correctement le document ?", choix: ["Entre le repos et la fin de la course, la fréquence cardiaque passe de 170 à 70 battements par minute : le cœur ralentit pendant l'effort", "Seule la fréquence cardiaque change pendant la course : elle passe de 70 à 170 battements par minute", "La consommation de dioxygène reste à 0,3 L par minute pendant toute la course, car Mehdi respire le même air qu'au repos", "Entre le repos et la fin de la course, la fréquence cardiaque passe de 70 à 170 battements par minute et la consommation de dioxygène de 0,3 à 2,5 L par minute"], reponse: 3, explication: "**Décrire**, c'est donner les valeurs avec leurs unités. Toutes les grandeurs **augmentent** : fréquence cardiaque (70 → 170), fréquence respiratoire (15 → 40), volume d'air par mouvement (0,5 → 2 L) et consommation de dioxygène (0,3 → 2,5 L par minute, soit environ 8 fois plus)." },
        { type: "redaction", texte: "effort", question: "Sujet type brevet. 1) À l'aide du document, montre que l'organisme de Mehdi s'adapte à l'effort. 2) Explique pourquoi ces adaptations sont nécessaires, en utilisant tes connaissances sur le fonctionnement des muscles. 3) Mehdi veut améliorer son endurance. Donne-lui deux conseils argumentés pour s'entraîner sans danger pour sa santé.", corrige: `1) **Les adaptations** : je vois dans le document qu'entre le repos et la fin de la course :
- la **fréquence cardiaque** passe de **70 à 170** battements par minute : le cœur envoie plus de sang aux organes ;
- la **fréquence respiratoire** passe de **15 à 40** mouvements par minute et le volume d'air par mouvement de **0,5 à 2 L** : le débit ventilatoire passe de 15 × 0,5 = **7,5 L/min** à 40 × 2 = **80 L/min**, soit plus de 10 fois plus ;
- la **consommation de dioxygène** passe de **0,3 à 2,5 L par minute**, soit environ 8 fois plus.
L'organisme s'adapte donc à l'effort : le cœur et la respiration s'accélèrent.

2) **Pourquoi** : or je sais que les muscles produisent l'énergie nécessaire à leur contraction par la **respiration cellulaire**, qui consomme des **nutriments** (glucose) et du **dioxygène** et rejette du **dioxyde de carbone**. Pendant la course, les muscles travaillent plus : ils consomment beaucoup plus de dioxygène. Donc l'augmentation du débit ventilatoire fait entrer plus de dioxygène dans les poumons, et l'augmentation du débit cardiaque apporte plus vite le sang riche en dioxygène et en nutriments aux muscles, tout en évacuant le CO₂. Ces adaptations sont commandées par le **système nerveux** (centres du bulbe rachidien) et renforcées par l'adrénaline.

3) **Conseils** (exemples) :
- **S'entraîner régulièrement et progressivement**, en commençant par un échauffement : l'entraînement rend le cœur plus efficace (il envoie plus de sang à chaque battement), sans dépasser les limites de l'organisme (fréquence cardiaque maximale d'environ 220 − 15 = 205 battements par minute).
- **Bien s'alimenter, boire de l'eau et dormir suffisamment** : les muscles ont besoin de nutriments et l'organisme récupère pendant le repos. Ne jamais utiliser de **produits dopants**, interdits et dangereux pour le cœur.` },
      ],
    },
    {
      id: "pollutions-sante-environnement",
      titre: "Pollutions : effets sur les écosystèmes et sur la santé",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Qu'est-ce qu'une pollution ?
Une **pollution** est l'introduction dans un milieu (air, eau, sol) de substances ou d'énergie (bruit, lumière, chaleur) qui **dégradent** ce milieu et peuvent nuire aux êtres vivants et à la santé humaine. Les sources principales sont les **transports**, le **chauffage**, l'**industrie**, l'**agriculture** et nos **déchets**.

## La pollution de l'air
| Polluant | Principales sources | Effets |
|---|---|---|
| **Particules fines** | trafic routier (moteurs, freins, pneus), chauffage au bois, industrie, agriculture | elles pénètrent profondément dans les poumons : maladies respiratoires et cardiovasculaires |
| **Dioxyde d'azote** (NO₂) | moteurs, surtout diesel | irritation des bronches, crises d'asthme |
| **Ozone** au niveau du sol | se forme l'été à partir des gaz d'échappement, sous l'effet du soleil | gêne respiratoire, baisse des rendements agricoles |

Santé publique France estime (étude publiée en 2021) que les particules fines sont responsables de près de **40 000 décès par an** en France. L'ozone près du sol est un polluant ; à ne pas confondre avec la **couche d'ozone**, très haut dans l'atmosphère, qui nous protège des ultraviolets.

>! **Les lichens, des indicateurs de la qualité de l'air**. Les lichens sont des êtres vivants formés d'un champignon associé à une algue. Beaucoup d'espèces sont très sensibles à la pollution de l'air : là où l'air est pollué, on en trouve peu d'espèces. Ce sont des **bio-indicateurs** : en les comptant, on peut estimer la qualité de l'air. De même, les petits animaux des rivières (larves d'insectes) renseignent sur la qualité de l'eau.

## La pollution de l'eau et des sols
- Les **nitrates** et les phosphates des engrais (et des eaux usées) ruissellent jusqu'aux rivières et à la mer. Ils provoquent une prolifération d'algues : c'est l'**eutrophisation**. Quand ces algues meurent, les bactéries qui les décomposent consomment le dioxygène de l'eau : les poissons meurent asphyxiés. Les **marées vertes** de Bretagne en sont un exemple.
- Les **pesticides** tuent les organismes visés (insectes, « mauvaises herbes », champignons) mais aussi d'autres êtres vivants (insectes pollinisateurs). Certains restent très longtemps dans les sols. Exemple : le **chlordécone**, un insecticide utilisé dans les bananeraies des **Antilles** jusqu'en 1993, pollue encore les sols pour des siècles ; selon Santé publique France (étude publiée en 2026), plus de 8 adultes sur 10 en Guadeloupe et en Martinique en ont encore dans le sang.
- Les **plastiques** se dégradent très lentement : ils se fragmentent en **microplastiques** que l'on retrouve dans tous les océans, avalés par les animaux marins.

## La bioaccumulation : un polluant qui se concentre
Certains polluants (mercure, certains pesticides comme l'ancien DDT, interdit en France dans les années 1970) ne sont **pas éliminés** par les êtres vivants : ils s'**accumulent** dans leur corps : c'est la **bioaccumulation**. Comme chaque animal mange de nombreuses proies, la concentration du polluant **augmente à chaque maillon** de la chaîne alimentaire (les scientifiques parlent alors de **bioamplification**). Les grands **prédateurs** (thon, espadon, requin, rapaces, et l'être humain) sont les plus contaminés.

>! **Exemple résolu** (données fictives) : concentration en mercure : plancton 0,02 mg/kg ; petits poissons 0,1 mg/kg ; thon 1 mg/kg. Du plancton au thon, la concentration est multipliée par 1 ÷ 0,02 = **50**, alors que l'eau elle-même en contient très peu. C'est pourquoi on conseille aux femmes enceintes de limiter les gros poissons prédateurs (comme l'espadon ou le requin) : le mercure est toxique pour le système nerveux du fœtus.

## Réduire les pollutions
| Pollution | Exemples de solutions |
|---|---|
| Air | transports en commun, vélo, véhicules moins polluants, zones à faibles émissions dans les grandes villes, filtres dans les usines, chauffage au bois performant |
| Eau | stations d'épuration des eaux usées, moins d'engrais et de pesticides (agroécologie), haies et bandes enherbées au bord des champs |
| Déchets | réduire, réutiliser, **trier et recycler**, moins d'emballages plastiques |

Chaque solution a un coût et des contraintes : il faut **argumenter** en comparant avantages et inconvénients.

>! **Attention à une erreur fréquente** : une corrélation (deux choses qui varient en même temps) ne suffit pas à désigner la source d'une pollution. Si les lichens sont rares près d'une ville, cela montre que l'air y est plus pollué ; mais pour savoir **quel** polluant et **quelle** source sont responsables, il faut des mesures supplémentaires.

> **À retenir** :
> - Une pollution dégrade un milieu (air, eau, sol) et peut nuire aux êtres vivants et à la santé.
> - Les particules fines et le dioxyde d'azote (transports, chauffage, industrie) provoquent des maladies respiratoires et cardiovasculaires.
> - Les nitrates provoquent l'eutrophisation ; certains pesticides persistent très longtemps (chlordécone aux Antilles) ; les plastiques forment des microplastiques.
> - Bioaccumulation : un polluant non éliminé se concentre à chaque maillon de la chaîne alimentaire ; les grands prédateurs sont les plus contaminés.
> - Les bio-indicateurs (lichens, petits animaux des rivières) permettent d'estimer la qualité d'un milieu.
`,
      textes: {
        lichens: `**Document : nombre d'espèces de lichens observées sur les arbres, selon la distance au centre d'une grande ville** (données fictives)

| Distance au centre-ville | 0,5 km | 2 km | 5 km | 10 km |
|---|---|---|---|---|
| Nombre d'espèces de lichens | 2 | 6 | 14 | 22 |

Les lichens sont des bio-indicateurs : beaucoup d'espèces disparaissent quand l'air est pollué.`,
        mercure: `**Document : concentration en mercure dans une chaîne alimentaire marine** (données fictives, simplifiées)

| Maillon | Plancton | Petits poissons (sardines) | Grand prédateur (thon) |
|---|---|---|---|
| Concentration en mercure (mg par kg) | 0,02 | 0,1 | 1 |

Le mercure, rejeté notamment par certaines industries et par la combustion du charbon, n'est presque pas éliminé par les êtres vivants. Il est toxique pour le système nerveux, en particulier celui du fœtus et du jeune enfant.`,
      },
      exercices: [
        { type: "qcm", question: "Quels polluants de l'air sont surtout émis par le trafic routier ?", choix: ["Le dioxygène et la vapeur d'eau", "Les particules fines et le dioxyde d'azote", "Les nitrates et les phosphates", "Les microplastiques et le mercure"], reponse: 1, explication: "Le trafic routier émet des **particules fines** (moteurs, freins, pneus) et du **dioxyde d'azote** (NO₂), surtout par les moteurs diesel. Nitrates et phosphates polluent surtout l'eau." },
        { type: "vf", question: "Les particules fines peuvent pénétrer profondément dans les poumons et provoquer des maladies respiratoires et cardiovasculaires.", reponse: true, explication: "Très petites, elles pénètrent jusqu'au fond des poumons. Santé publique France estime qu'elles causent près de **40 000 décès par an** en France." },
        { type: "saisie", question: "Comment appelle-t-on la prolifération d'algues dans une eau trop riche en nitrates et en phosphates, qui finit par priver l'eau de dioxygène ?", reponses: ["eutrophisation", "l'eutrophisation"], explication: "C'est l'**eutrophisation**. Les algues mortes sont décomposées par des bactéries qui consomment le dioxygène de l'eau : les poissons meurent asphyxiés." },
        { type: "qcm", question: "Pourquoi les poissons meurent-ils dans une rivière touchée par l'eutrophisation ?", choix: ["Parce que l'eau devient trop salée", "Parce que les algues mangent les poissons", "Parce que la décomposition des algues mortes par les bactéries consomme le dioxygène de l'eau", "Parce que les nitrates rendent l'eau trop froide"], reponse: 2, explication: "Les engrais font proliférer les algues ; quand elles meurent, les **bactéries décomposeuses** consomment beaucoup de **dioxygène** : il n'en reste plus assez pour les poissons." },
        { type: "qcm", texte: "lichens", question: "Que montre le document ?", choix: ["Plus on s'éloigne du centre-ville, plus le nombre d'espèces de lichens augmente : de 2 espèces à 0,5 km à 22 espèces à 10 km", "Le nombre d'espèces de lichens est à peu près le même partout, entre 2 et 22 espèces quelle que soit la distance", "Plus on s'éloigne du centre-ville, moins il y a d'espèces de lichens : de 22 espèces à 0,5 km à 2 espèces à 10 km", "Les lichens polluent l'air du centre-ville : c'est là qu'on en trouve le plus d'espèces"], reponse: 0, explication: "On décrit en chiffrant : le nombre d'espèces passe de **2** (à 0,5 km) à **22** (à 10 km). Comme les lichens sont sensibles à la pollution, on en déduit que l'air est plus pollué près du centre-ville." },
        { type: "vf", texte: "lichens", question: "Ce document prouve à lui seul que la pollution du centre-ville est due aux voitures.", reponse: false, explication: "Le document montre que l'air est **plus pollué** près du centre (moins de lichens), mais il ne dit rien de la **source** : voitures, chauffage, industrie... Pour la connaître, il faudrait mesurer les polluants." },
        { type: "saisie", texte: "mercure", question: "Calculer. D'après le document, par combien la concentration en mercure est-elle multipliée entre le plancton et le thon ?", reponses: ["50", "50 fois", "par 50", "multipliée par 50", "multiplié par 50", "×50", "x50", "50x", "par cinquante"], explication: "1 ÷ 0,02 = **50**. Le thon contient 50 fois plus de mercure par kilogramme que le plancton : c'est la **bioaccumulation**." },
        { type: "qcm", texte: "mercure", question: "Pourquoi le thon, grand prédateur, est-il plus contaminé que la sardine ?", choix: ["Parce qu'il vit plus près des usines qui rejettent du mercure, alors que la sardine vit au large", "Parce qu'il fabrique lui-même du mercure dans son corps à partir de l'eau de mer", "Parce qu'il avale beaucoup plus d'eau de mer que la sardine, et c'est l'eau qui contient le plus de mercure", "Parce qu'il mange de très nombreuses proies contaminées et n'élimine presque pas le mercure, qui s'accumule dans son corps"], reponse: 3, explication: "Le mercure n'est presque pas éliminé : chaque prédateur accumule le mercure de **toutes les proies** qu'il a mangées. La concentration augmente donc à chaque maillon de la chaîne alimentaire." },
        { type: "qcm", question: "Quel est le principal problème posé par les déchets plastiques dans les océans ?", choix: ["Ils se dissolvent rapidement et rendent l'eau trop salée", "Ils se fragmentent en microplastiques qui persistent très longtemps et sont avalés par les animaux", "Ils servent de nourriture au plancton", "Ils font baisser le niveau de la mer"], reponse: 1, explication: "Les plastiques se dégradent **très lentement** : ils se fragmentent en **microplastiques**, présents dans tous les océans et avalés par les animaux marins. La meilleure solution est d'en produire et d'en jeter moins." },
        { type: "redaction", texte: "mercure", question: "Sujet type brevet. 1) Décris l'évolution de la concentration en mercure le long de la chaîne alimentaire, en chiffrant. 2) Explique ce phénomène. 3) Une femme enceinte mange souvent de l'espadon, un grand poisson prédateur. Explique pourquoi son médecin lui conseille d'en manger moins, et propose une mesure collective pour réduire cette pollution.", corrige: `1) **Description** : je vois dans le document que la concentration en mercure passe de **0,02 mg/kg** dans le plancton à **0,1 mg/kg** dans les petits poissons, puis à **1 mg/kg** dans le thon. Elle augmente à chaque maillon : elle est multipliée par 0,1 ÷ 0,02 = **5** entre le plancton et les petits poissons, et par 1 ÷ 0,02 = **50** entre le plancton et le thon.

2) **Explication** : le document indique que le mercure n'est presque pas éliminé par les êtres vivants. Or je sais qu'un animal mange de très nombreuses proies au cours de sa vie : il accumule dans son corps le mercure de toutes ces proies. Donc la concentration augmente à chaque maillon de la **chaîne alimentaire** : c'est la **bioaccumulation**. Les **grands prédateurs**, en bout de chaîne, sont les plus contaminés.

3) **Le conseil du médecin** : l'espadon est un grand prédateur, comme le thon : il contient beaucoup de mercure. Or le mercure est **toxique pour le système nerveux**, en particulier celui du **fœtus** (document). En mangeant moins d'espadon, et plutôt des petits poissons (sardines), la femme enceinte protège le développement du cerveau de son enfant.

**Mesure collective** (exemple) : réduire les **rejets** de mercure à la source, par exemple en remplaçant les centrales à charbon par des énergies moins polluantes et en imposant des **filtres** aux industries. Moins de mercure dans l'eau, c'est moins de mercure dans toute la chaîne alimentaire.` },
      ],
    },
    {
      id: "sujet-brevet-genetique",
      titre: "Sujet type brevet n° 2 : une maladie génétique dans une famille",
      theme: "Méthodes et préparation du brevet",
      cours: `
## Ce que l'on attend dans un sujet de génétique
Les sujets de génétique du brevet s'appuient sur des **documents** : un arbre généalogique (ou un tableau qui décrit une famille), un texte sur la maladie, parfois des séquences d'ADN. Il faut relier ces documents à tes connaissances : **gène, allèle, dominant, récessif, méiose, fécondation, mutation**.

## Méthode en cinq étapes
1. **Lire l'arbre ou le tableau** : carrés = hommes, ronds = femmes, symboles noircis = personnes atteintes ; un trait horizontal relie les parents, un trait vertical mène à leurs enfants.
2. **Trouver si l'allèle de la maladie est dominant ou récessif** : si deux parents **non atteints** ont un enfant **atteint**, ils portent l'allèle de la maladie sans l'exprimer : il est **récessif**.
3. **Écrire les allèles de chaque personne** (par exemple A = allèle normal, a = allèle de la maladie) : une personne atteinte d'une maladie récessive a deux allèles a ; ses deux parents non atteints ont A et a (porteurs sains).
4. **Faire un tableau de croisement** : les gamètes de chaque parent (un seul allèle par gamète, grâce à la méiose), puis les cellules-œufs possibles (fécondation au hasard).
5. **Calculer une probabilité** : nombre de cases favorables ÷ nombre total de cases.

>! **Exemple résolu** : la phénylcétonurie est une maladie génétique due à un allèle récessif d (l'allèle normal D est dominant). Deux parents non atteints ont une fille atteinte.
>! - La fille est atteinte : elle a les allèles **d et d**, un venant de chaque parent.
>! - Les parents ne sont pas atteints mais ont chacun transmis d : ils ont **D et d**.
>! - Chaque parent produit des gamètes D ou d (une chance sur deux). Tableau : DD, Dd, dD, dd. Une case sur quatre est atteinte : risque de **1/4 (25 %)** pour chaque enfant.

## Comparer des séquences d'ADN
On aligne les deux séquences lettre par lettre et on repère les **différences**. Une seule lettre changée suffit à créer un **nouvel allèle** : c'est une **mutation**. Elle s'est produite au hasard dans une cellule à l'origine d'un gamète d'un ancêtre, puis s'est transmise de génération en génération.

>! **Attention aux erreurs fréquentes** :
>! - Un risque de 1/4 ne signifie pas « un enfant sur quatre exactement ». Si le premier enfant est atteint, le deuxième a **encore 1 risque sur 4** : chaque fécondation est indépendante.
>! - Un enfant non atteint de deux parents porteurs peut être porteur sain ou non : avec l'arbre seul, on ne peut souvent **pas savoir**.
>! - Ne pas confondre **gène** (l'emplacement et l'information, par exemple le gène qui permet de fabriquer la mélanine) et **allèle** (une version de ce gène, normale ou mutée).

> **À retenir** :
> - Deux parents non atteints qui ont un enfant atteint : l'allèle de la maladie est récessif et les deux parents sont porteurs sains.
> - Chaque gamète ne reçoit qu'un allèle de chaque gène (méiose) ; la fécondation réunit deux allèles au hasard.
> - Pour deux parents porteurs sains d'une maladie récessive, le risque est de 1/4 à chaque naissance.
> - Une différence de séquence entre deux allèles est le résultat d'une mutation.
> - Rédige : « je vois que... (document) ; or je sais que... ; donc... ».
`,
      textes: {
        albinisme: `**Sujet type brevet : l'albinisme dans une famille** (famille imaginaire ; séquences simplifiées, fictives)

**Document 1 : la famille de Thomas**

| Personne | Sexe | Parents | Atteinte d'albinisme ? |
|---|---|---|---|
| Bernard | homme | — | non |
| Monique | femme | — | non |
| Thomas | homme | Bernard et Monique | **oui** |
| Claire | femme | Bernard et Monique | non |
| Julien | homme | Bernard et Monique | non |

**Document 2 : l'albinisme**
Chez les personnes atteintes d'albinisme, la peau, les cheveux et les yeux contiennent très peu de **mélanine**, le pigment qui les colore et qui protège la peau des rayons ultraviolets (UV). Cette forme d'albinisme est due à un allèle d'un gène situé sur le chromosome 11 : ce gène permet de fabriquer une protéine nécessaire à la production de mélanine. Les personnes atteintes doivent se protéger strictement du soleil.

**Document 3 : comparaison d'un fragment du gène (allèle normal A et allèle de l'albinisme a)**

~~~
allèle A : ATG CTC CTG GCT GTT TTG TAC
allèle a : ATG CTC CTG GCT GTT TAG TAC
~~~`,
      },
      exercices: [
        { type: "qcm", texte: "albinisme", question: "D'après le document 1, que peut-on déduire du fait que Thomas est atteint alors que ses parents ne le sont pas ?", choix: ["L'allèle de l'albinisme est dominant", "L'albinisme n'est pas une maladie génétique", "L'allèle de l'albinisme est récessif : ses parents le portent sans l'exprimer", "Thomas a reçu l'allèle de l'albinisme d'un seul de ses parents"], reponse: 2, explication: "Thomas a forcément reçu l'allèle a de ses parents, qui ne sont pas atteints : chez eux, l'allèle a est **masqué** par l'allèle A. L'allèle a est donc **récessif**." },
        { type: "saisie", texte: "albinisme", question: "Combien d'allèles a (allèle de l'albinisme) Thomas possède-t-il ?", reponses: ["2", "deux", "2 allèles", "deux allèles"], explication: "L'allèle a est récessif : il ne s'exprime que s'il est présent en **deux exemplaires**. Thomas, atteint, a donc les allèles **a et a**, l'un venant de son père, l'autre de sa mère." },
        { type: "vf", texte: "albinisme", question: "Bernard et Monique possèdent tous les deux l'allèle a.", reponse: true, explication: "Chacun a transmis un allèle a à Thomas, mais ils ne sont pas atteints : ils ont les allèles **A et a**. Ce sont des **porteurs sains**." },
        { type: "saisie", texte: "albinisme", question: "D'après le document 3, combien de nucléotides (lettres) diffèrent entre l'allèle A et l'allèle a ?", reponses: ["1", "un", "une", "une seule", "un seul", "1 nucléotide", "un nucléotide", "un seul nucléotide", "une lettre", "une seule lettre", "1 lettre", "1 seul"], explication: "En alignant les deux séquences, une seule lettre change : dans le 6e groupe, **TTG** devient **TAG** (un T remplacé par un A). Une seule lettre modifiée suffit à créer un nouvel allèle." },
        { type: "qcm", texte: "albinisme", question: "Comment appelle-t-on l'événement qui a transformé l'allèle A en allèle a ?", choix: ["Une mutation", "Une fécondation", "Une mitose", "Une vaccination"], reponse: 0, explication: "Une modification de la séquence de l'ADN est une **mutation**. Elle s'est produite au hasard chez un ancêtre, dans une cellule à l'origine d'un gamète, puis s'est transmise." },
        { type: "saisie", texte: "albinisme", question: "Bernard et Monique attendent un quatrième enfant. Quelle est la probabilité qu'il soit atteint d'albinisme ? (écris une fraction ou un pourcentage)", reponses: ["1/4", "25 %", "25%", "0,25", "1 chance sur 4", "une chance sur quatre", "une chance sur 4", "1 sur 4", "25 pour cent", "un quart", "1 risque sur 4", "un risque sur quatre", "un risque sur 4"], explication: "Chaque parent (A et a) produit des gamètes A ou a, avec une chance sur deux. Tableau de croisement : AA, Aa, aA, aa. Une case sur quatre (aa) correspond à un enfant atteint : **1/4, soit 25 %**." },
        { type: "vf", texte: "albinisme", question: "Puisque Thomas est atteint, les trois enfants suivants de Bernard et Monique ne seront certainement pas atteints.", reponse: false, explication: "Chaque fécondation se fait **au hasard**, indépendamment des précédentes : à **chaque** naissance, le risque est de 1/4, même si un enfant est déjà atteint." },
        { type: "qcm", texte: "albinisme", question: "Claire n'est pas atteinte. Que peut-on dire de ses allèles avec les seuls documents ?", choix: ["Elle a forcément les allèles a et a, comme son frère Thomas", "Elle a forcément les allèles A et A, puisqu'elle n'est pas atteinte", "Elle a forcément les allèles A et a, comme ses deux parents", "Elle a au moins un allèle A, mais on ne peut pas savoir si elle porte aussi l'allèle a"], reponse: 3, explication: "Claire n'est pas atteinte : elle a au moins un allèle **A**. Elle peut avoir A et A, ou A et a (porteuse saine) : les documents ne permettent **pas de trancher**." },
        { type: "qcm", texte: "albinisme", question: "D'après le document 2 et tes connaissances, pourquoi les personnes atteintes d'albinisme doivent-elles se protéger strictement du soleil ?", choix: ["Parce que le soleil aggrave leur allèle muté et le transmet à leurs enfants", "Parce que, sans mélanine, les UV abîment plus facilement l'ADN des cellules de la peau, ce qui augmente le risque de cancer de la peau", "Parce que le soleil détruit leurs globules blancs", "Parce que le soleil fait disparaître leurs chromosomes"], reponse: 1, explication: "La mélanine protège la peau des **UV**, qui sont **mutagènes**. Sans elle, des mutations apparaissent plus facilement dans les cellules de la peau, qui peuvent se diviser sans contrôle : risque de **cancer**. Ces mutations ne touchent que la peau et ne sont pas transmises aux enfants." },
        { type: "redaction", texte: "albinisme", question: "Sujet type brevet. 1) À l'aide du document 1, montre que l'allèle de l'albinisme est récessif, puis donne les allèles de Thomas, de Bernard et de Monique. 2) À l'aide du document 3, explique l'origine de l'allèle a. 3) Bernard et Monique se demandent s'ils risquent d'avoir un autre enfant atteint. Réponds-leur en expliquant le rôle de la méiose et de la fécondation, et en t'appuyant sur un tableau de croisement. Rédige des phrases complètes : la maîtrise de la langue est notée.", corrige: `1) **Un allèle récessif** : je vois dans le document 1 que Thomas est atteint d'albinisme alors que ses parents, Bernard et Monique, ne le sont pas. Or je sais qu'un enfant reçoit un allèle de chaque gène de son père et un de sa mère. Thomas a donc reçu l'allèle **a** de ses parents, qui le possèdent **sans être atteints** : chez eux, l'allèle a est masqué par l'allèle A. Donc l'allèle a est **récessif**.
- **Thomas** est atteint : l'allèle étant récessif, il possède **deux allèles a** (a et a).
- **Bernard** et **Monique** ne sont pas atteints mais ont chacun transmis un allèle a : ils possèdent **A et a**. Ce sont des **porteurs sains**.

2) **Origine de l'allèle a** : je vois dans le document 3 que les deux allèles ne diffèrent que par **une seule lettre** : TTG devient TAG. Or une modification de la séquence de l'ADN est une **mutation**. Donc l'allèle a est apparu par mutation de l'allèle A, **au hasard**, chez un ancêtre de la famille, dans une cellule à l'origine d'un gamète ; il s'est ensuite transmis de génération en génération.

3) **Le risque pour un autre enfant** : pendant la **méiose**, les deux chromosomes 11 de chaque parent se séparent : chaque gamète ne reçoit qu'**un seul allèle**. Bernard produit donc des spermatozoïdes A ou a, et Monique des ovules A ou a, avec une chance sur deux. La **fécondation** réunit au hasard un spermatozoïde et un ovule :

| | ovule A | ovule a |
|---|---|---|
| spermatozoïde A | A et A : non atteint | A et a : non atteint (porteur sain) |
| spermatozoïde a | a et A : non atteint (porteur sain) | a et a : **atteint** |

Une case sur quatre correspond à un enfant atteint. **Réponse aux parents** : oui, à chaque nouvelle naissance, le risque d'avoir un enfant atteint d'albinisme est de **1/4, soit 25 %**, même s'ils ont déjà un enfant atteint, car chaque fécondation se fait au hasard. Il y a aussi 3 chances sur 4 que l'enfant ne soit pas atteint.` },
      ],
    },
    {
      id: "sujet-brevet-riviere",
      titre: "Sujet type brevet n° 3 : une rivière en mauvaise santé (croiser deux documents)",
      theme: "Méthodes et préparation du brevet",
      cours: `
## Pourquoi croiser des documents ?
Dans un sujet de brevet, chaque document apporte **une partie** de la réponse. Un document montre souvent **ce qui change** (une mesure, un polluant), un autre **ce que cela provoque** (des êtres vivants qui disparaissent, une maladie). La consigne « à l'aide des documents 1 et 2 » ou « mets en relation » te demande de **relier** les deux : c'est là que se gagnent beaucoup de points.

## Méthode en quatre étapes
1. **Lire chaque document séparément** : titre, grandeurs, **unités**, lieux ou dates. Note en une phrase ce que montre chacun.
2. **Trouver le point commun** : les deux documents portent-ils sur les **mêmes lieux** (stations, villes), les **mêmes dates** ou les **mêmes individus** ? C'est ce point commun qui permet de les comparer ligne à ligne.
3. **Mettre en relation**, en chiffrant : « là où (document 1)..., on observe que (document 2)... ».
4. **Expliquer avec tes connaissances**, puis **conclure** : « je vois que... ; or je sais que... ; donc... ».

>! **Exemple résolu** (données fictives). Document A : concentration moyenne en dioxyde d'azote (NO₂) dans l'air : centre-ville 40 µg/m³, périphérie 25 µg/m³, campagne 10 µg/m³. Document B : nombre d'espèces de lichens sur les arbres : centre-ville 3, périphérie 9, campagne 20.
>! - Point commun : les **trois mêmes lieux**.
>! - Mise en relation : là où le NO₂ est le plus concentré (centre-ville, 40 µg/m³), on trouve le moins d'espèces de lichens (3) ; là où il l'est le moins (campagne, 10 µg/m³), on en trouve le plus (20).
>! - Explication : or je sais que beaucoup de lichens sont sensibles à la pollution de l'air (ce sont des **bio-indicateurs**). Donc la pollution au NO₂ est **probablement** une cause de la disparition des lichens en ville.
>! - Prudence : c'est une **corrélation**. D'autres polluants, absents des documents, peuvent aussi jouer un rôle.

## Rappels utiles pour un sujet sur une rivière
- Les poissons et les petits animaux de l'eau respirent le **dioxygène dissous** dans l'eau (il s'exprime en mg/L).
- Des rejets riches en **nitrates**, en **phosphates** et en **matière organique** arrivent dans l'eau (eaux usées mal épurées, engrais, effluents d'élevage, c'est-à-dire le lisier et le fumier). Les nitrates et les phosphates font proliférer les algues : c'est l'**eutrophisation**. Les **bactéries** qui décomposent la matière organique et les algues mortes **consomment le dioxygène** de l'eau.
- En aval d'un rejet, l'eau se **dilue** (arrivée d'autres cours d'eau) et se **réoxygène** au contact de l'air (courant, petites chutes) : la rivière peut retrouver peu à peu une bonne qualité, c'est l'**autoépuration**.
- Certains petits animaux sont des **bio-indicateurs** : les larves de **plécoptères** et d'**éphémères** ont besoin d'une eau bien oxygénée ; les **vers tubifex** supportent une eau très pauvre en dioxygène.

>! **Attention aux erreurs fréquentes** :
>! - Décrire les deux documents l'un après l'autre sans jamais les **relier** : la mise en relation est justement ce qui est demandé.
>! - Oublier les **unités** ou les **lieux** (« le dioxygène baisse » ne suffit pas : où ? de combien ?).
>! - Conclure trop vite à une cause : deux documents qui varient ensemble montrent une **corrélation** ; il faut une explication scientifique (tes connaissances) ou une expérience pour parler de cause.

> **À retenir** :
> - Croiser deux documents, c'est les relier grâce à leur point commun (mêmes lieux, mêmes dates, mêmes individus).
> - Rédige : « là où (document 1)..., on observe que (document 2)... ; or je sais que... ; donc... ».
> - Chiffre toujours, avec les unités et les lieux.
> - Dans une rivière polluée par des rejets organiques, la décomposition par les bactéries consomme le dioxygène : les espèces exigeantes disparaissent, les espèces tolérantes prolifèrent.
> - Une corrélation ne suffit pas : appuie-toi sur tes connaissances pour expliquer.
`,
      textes: {
        riviere: `**Sujet type brevet : la rivière de Saint-Aubin** (rivière imaginaire ; données fictives, simplifiées)

Une station d'épuration ancienne rejette ses eaux dans la rivière. Des élèves ont fait des mesures à quatre stations : A, 1 km **en amont** du rejet ; B, 0,5 km **en aval** ; C, 3 km en aval ; D, 10 km en aval.

**Document 1 : mesures dans l'eau de la rivière (au printemps, eau à 12 °C environ)**

| Station | A | B | C | D |
|---|---|---|---|---|
| Nitrates (mg/L) | 10 | 45 | 30 | 15 |
| Dioxygène dissous (mg/L) | 10 | 4 | 6 | 9 |

**Document 2 : petits animaux trouvés au fond de l'eau (bio-indicateurs)**

| Animal | A | B | C | D |
|---|---|---|---|---|
| Larves de plécoptères | présentes | absentes | absentes | présentes |
| Larves d'éphémères | présentes | absentes | présentes | présentes |
| Aselles | présentes | présentes | présentes | présentes |
| Vers tubifex | rares | très nombreux | nombreux | rares |
| **Nombre total d'espèces** | **18** | **5** | **9** | **16** |

Exigences : les larves de **plécoptères** ont besoin d'une eau **très riche** en dioxygène ; les larves d'**éphémères**, d'une eau **bien oxygénée** ; les **aselles** (petits crustacés) sont **assez tolérantes** ; les **vers tubifex** supportent une eau **très pauvre** en dioxygène.

**Document 3 : ce que rejette la station d'épuration**
L'eau rejetée est mal épurée : elle contient des **nitrates**, des **phosphates** et de la **matière organique**. Ces substances font proliférer les algues. Des **bactéries** décomposent la matière organique et les algues mortes ; pour cela, elles consomment beaucoup de **dioxygène**. En été, l'eau plus chaude contient naturellement moins de dioxygène. Plus loin en aval, d'autres ruisseaux diluent l'eau de la rivière, et le courant la réoxygène au contact de l'air.`,
      },
      exercices: [
        { type: "saisie", texte: "riviere", question: "Relever. D'après le document 1, quelle est la concentration en dioxygène dissous à la station B ? (avec l'unité)", reponses: ["4 mg/L", "4 mg par litre", "4 milligrammes par litre", "4 mg/l"], explication: "On lit la colonne **B**, ligne « dioxygène dissous » : **4 mg/L**. Relever, c'est recopier la bonne valeur avec son **unité**." },
        { type: "qcm", texte: "riviere", question: "Quelle phrase décrit correctement l'évolution des nitrates dans le document 1 ?", choix: ["Les nitrates diminuent régulièrement de l'amont vers l'aval : de 45 mg/L à la station A à 10 mg/L à la station D", "Les nitrates restent à peu près constants, autour de 25 mg/L, à toutes les stations de la rivière", "Les nitrates passent de 10 mg/L en amont à 45 mg/L juste après le rejet, puis baissent : 30 mg/L en C, 15 mg/L en D", "Les nitrates augmentent régulièrement de l'amont vers l'aval : ils sont au plus haut à la station D, à 10 km du rejet"], reponse: 2, explication: "On décrit en **chiffrant** et en suivant les stations dans l'ordre : 10 mg/L en amont (A), un **pic** de **45 mg/L** juste après le rejet (B), puis une baisse progressive : 30 mg/L (C) et 15 mg/L (D)." },
        { type: "saisie", texte: "riviere", question: "Calculer. D'après le document 1, par combien la concentration en nitrates est-elle multipliée entre la station A et la station B ?", reponses: ["4,5", "4,5 fois", "par 4,5", "multipliée par 4,5", "multiplié par 4,5", "×4,5", "x4,5", "4,5x", "4,5×", "elle est multipliée par 4,5"], explication: "45 ÷ 10 = **4,5**. Juste après le rejet, l'eau contient 4,5 fois plus de nitrates qu'en amont." },
        { type: "vf", texte: "riviere", question: "D'après le document 2, les larves de plécoptères sont présentes aux quatre stations.", reponse: false, explication: "Les larves de plécoptères sont présentes en **A** et en **D**, mais **absentes en B et en C**. Comme elles ont besoin d'une eau très riche en dioxygène, leur absence est un indice d'une eau moins oxygénée." },
        { type: "qcm", texte: "riviere", question: "En croisant les documents 1 et 2, à quelle station trouve-t-on à la fois le moins de dioxygène dissous et le moins d'espèces ?", choix: ["La station A, en amont du rejet", "La station C, à 3 km en aval", "La station D, à 10 km en aval", "La station B, à 0,5 km en aval"], reponse: 3, explication: "À la station **B**, le dioxygène dissous est le plus bas (**4 mg/L**, document 1) et on ne trouve que **5 espèces** (document 2), contre 18 en amont. Le **point commun** des deux documents, ce sont les stations : c'est lui qui permet de les relier." },
        { type: "saisie", texte: "riviere", question: "Calculer. D'après le document 2, quel pourcentage des espèces présentes en A ne sont plus retrouvées en B ? (on considère que les 5 espèces de B vivent aussi en A ; arrondis à l'unité)", reponses: ["72", "72 %", "environ 72 %", "72 pour cent", "72,2", "72,2 %", "environ 72,2 %"], explication: "En A : 18 espèces ; en B : 5 espèces. Espèces disparues : 18 − 5 = 13. Pourcentage : 13 ÷ 18 × 100 ≈ 72,2, soit environ **72 %**." },
        { type: "qcm", texte: "riviere", question: "Quelle phrase met correctement en relation les documents 1 et 2 ?", choix: ["Là où le dioxygène est le plus bas (B, 4 mg/L), les espèces exigeantes ont disparu et les tubifex, tolérants, abondent", "Là où il y a le plus de nitrates (B, 45 mg/L), on trouve le plus d'espèces, car les nitrates nourrissent les animaux", "Les tubifex sont rares en A parce que l'eau y contient trop de dioxygène, qui est toxique pour tous les animaux", "Le nombre d'espèces ne dépend pas de la qualité de l'eau : il est à peu près le même en amont et en aval du rejet"], reponse: 0, explication: "On relie les deux documents station par station : en **B**, le dioxygène est au plus bas (4 mg/L) ; les plécoptères et les éphémères, qui ont besoin d'une eau bien oxygénée, ont disparu, alors que les **tubifex**, qui supportent une eau pauvre en dioxygène, sont très nombreux. En B, il n'y a que **5 espèces**, le minimum." },
        { type: "qcm", texte: "riviere", question: "D'après le document 3 et tes connaissances, pourquoi le dioxygène dissous baisse-t-il juste après le rejet ?", choix: ["Parce que les nitrates absorbent directement tout le dioxygène dissous dans l'eau, comme une éponge", "Parce que les bactéries qui décomposent la matière organique et les algues mortes consomment beaucoup de dioxygène", "Parce que les poissons, beaucoup plus nombreux près du rejet, y respirent tout le dioxygène de l'eau", "Parce que la station d'épuration pompe le dioxygène de la rivière pour faire fonctionner ses machines"], reponse: 1, explication: "Le rejet apporte de la **matière organique**, des nitrates et des phosphates qui font proliférer les algues. Les **bactéries décomposeuses** consomment beaucoup de **dioxygène** pour dégrader cette matière organique et les algues mortes (c'est ce qui se passe lors de l'**eutrophisation**). En été, l'eau plus chaude contient naturellement moins de dioxygène : la situation serait encore plus grave." },
        { type: "qcm", texte: "riviere", question: "Quelle mesure permettrait de traiter le problème à sa source ?", choix: ["Ajouter des poissons d'élevage à la station B pour remplacer les espèces qui ont disparu", "Interdire la baignade à la station D, où l'eau est pourtant presque redevenue de bonne qualité", "Moderniser la station d'épuration pour que l'eau rejetée contienne moins de matière organique et de nitrates", "Retirer les vers tubifex de la station B pour que les larves de plécoptères puissent revenir"], reponse: 2, explication: "La cause est le **rejet** d'une eau mal épurée (document 3). Moderniser la station d'épuration réduit la pollution **à la source** : moins de matière organique et de nutriments, donc moins de bactéries qui consomment le dioxygène. Les tubifex sont une **conséquence** de la pollution, pas sa cause." },
        { type: "redaction", texte: "riviere", question: "Sujet type brevet. 1) À l'aide du document 1, décris l'effet du rejet sur l'eau de la rivière, en chiffrant. 2) Mets en relation les documents 1 et 2 pour montrer que le rejet modifie les êtres vivants de la rivière. 3) À l'aide du document 3 et de tes connaissances, explique ces observations, puis explique pourquoi la station D retrouve presque l'état de la station A. 4) Propose deux mesures pour améliorer la qualité de la rivière. Rédige des phrases complètes : la maîtrise de la langue est notée.", corrige: `1) **L'effet du rejet** : je vois dans le document 1 qu'en amont du rejet (station A), l'eau contient **10 mg/L** de nitrates et **10 mg/L** de dioxygène dissous. Juste après le rejet (station B), les nitrates montent à **45 mg/L** (4,5 fois plus) et le dioxygène descend à **4 mg/L**. Plus loin, la situation s'améliore : 30 mg/L de nitrates et 6 mg/L de dioxygène en C, puis 15 mg/L et 9 mg/L en D.

2) **Mise en relation** : là où le dioxygène est le plus bas (station B, 4 mg/L), le document 2 montre qu'il ne reste que **5 espèces** contre **18** en amont, soit environ 72 % d'espèces en moins (13 ÷ 18 × 100 ≈ 72). Les larves de **plécoptères** et d'**éphémères**, qui ont besoin d'une eau bien oxygénée, ont disparu, alors que les **vers tubifex**, qui supportent une eau très pauvre en dioxygène, sont très nombreux. Quand le dioxygène remonte (9 mg/L en D), le nombre d'espèces remonte aussi (16) et les plécoptères réapparaissent. Ces petits animaux sont des **bio-indicateurs** de la qualité de l'eau.

3) **Explication** : je vois dans le document 3 que l'eau rejetée contient de la **matière organique**, des nitrates et des phosphates, qui font proliférer les algues. Or je sais que les **bactéries décomposeuses** consomment du dioxygène pour décomposer la matière organique et les algues mortes (la prolifération des algues due aux nitrates et aux phosphates est l'**eutrophisation**). Donc le dioxygène dissous baisse juste après le rejet, et les animaux qui ont besoin de beaucoup de dioxygène ne peuvent plus y vivre : seules les espèces tolérantes restent. En été, l'eau chaude contient moins de dioxygène, ce qui aggrave la situation.
**La station D** : en aval, d'autres ruisseaux **diluent** la pollution (moins de nitrates) et le courant **réoxygène** l'eau au contact de l'air. Le dioxygène remonte (9 mg/L), et les espèces exigeantes peuvent revivre : la rivière s'épure peu à peu d'elle-même.

4) **Deux mesures** (exemples) :
- **moderniser la station d'épuration** pour rejeter une eau qui contient beaucoup moins de matière organique, de nitrates et de phosphates : c'est agir à la source de la pollution ;
- **limiter les autres apports** de nitrates, par exemple en réduisant les engrais dans les champs voisins et en plantant des **haies** et des **bandes enherbées** au bord de la rivière, qui retiennent une partie des nitrates avant qu'ils n'atteignent l'eau.
On pourra vérifier l'efficacité de ces mesures en refaisant les mesures de dioxygène et l'inventaire des bio-indicateurs les années suivantes.` },
      ],
    },
  ],
};
