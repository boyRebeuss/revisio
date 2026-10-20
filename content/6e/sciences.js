export default {
  chapitres: [
    {
      id: "etats-matiere-materiaux",
      titre: "Les états de la matière et les propriétés des matériaux",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## Les trois états de la matière
Tout ce qui nous entoure est fait de **matière**. La matière peut se trouver dans trois **états physiques** :

| État | Forme propre ? | Volume propre ? | Exemples |
|---|---|---|---|
| **Solide** | oui | oui | glace, bois, fer, sel |
| **Liquide** | non (il prend la forme du récipient) | oui | eau, huile, lait |
| **Gazeux** | non | non (il occupe tout l'espace disponible) | air, vapeur d'eau |

La surface d'un liquide au repos est toujours **plane et horizontale**.

>! **Attention** : la vapeur d'eau est un **gaz invisible**. Le « nuage » blanc au-dessus d'une casserole n'est pas de la vapeur : ce sont de minuscules **gouttelettes d'eau liquide**, formées quand la vapeur se refroidit.

## Les changements d'état
Une même matière peut changer d'état quand on la chauffe ou qu'on la refroidit.

| Passage | Nom | Exemple |
|---|---|---|
| solide → liquide | **fusion** | un glaçon fond |
| liquide → solide | **solidification** | l'eau gèle au congélateur |
| liquide → gaz | **vaporisation** (ébullition ou évaporation) | l'eau bout, le linge sèche |
| gaz → liquide | **liquéfaction** (ou condensation) | buée sur une vitre froide |

Ces changements sont **réversibles** : la glace fondue peut regeler.

## Mesurer la température d'un changement d'état
On chauffe de la glace pilée et on relève la température toutes les minutes avec un thermomètre. On trace la courbe de la température en fonction du temps.

- Tant qu'il reste de la glace, la température **reste à 0 °C** : c'est un **palier de température**.
- Quand toute la glace a fondu, la température remonte.
- Pour l'eau pure, à la pression habituelle : **fusion à 0 °C**, **ébullition à 100 °C**.

>! **Méthode pour lire une courbe** : un **palier** (partie horizontale) signale un changement d'état d'un **corps pur** (une seule substance, sans mélange, comme l'eau pure). Lis sur l'axe vertical la température du palier : elle permet d'identifier la substance (0 °C pour la fusion de l'eau).

## Les propriétés des matériaux
Un **matériau** est la matière qui sert à fabriquer un objet. Certains sont **naturels** (bois, pierre, laine, coton), d'autres sont **fabriqués ou transformés** par l'être humain (plastique, verre, acier, papier).

On peut **trier** les matériaux grâce à leurs propriétés physiques :
- **Conductivité électrique** : un matériau **conducteur** laisse passer le courant (les métaux : cuivre, fer, aluminium ; la mine de crayon). Un **isolant** ne le laisse pas passer (plastique, verre, bois sec, caoutchouc).
- **Conductivité thermique** : un bon conducteur thermique transmet vite la chaleur (métaux) ; un isolant thermique la transmet mal (laine, polystyrène, bois, air).
- **Attraction par un aimant** : le **fer**, l'acier, le nickel et le cobalt sont attirés. L'aluminium et le cuivre ne le sont **pas** : tous les métaux ne sont pas attirés par un aimant !

>! **Application au tri des déchets** : dans un centre de tri, un gros aimant (électroaimant) retire les boîtes de conserve en acier du tapis roulant ; les canettes en aluminium, elles, ne sont pas attirées.

## Matériaux et environnement
Abandonnés dans la nature, les matériaux mettent plus ou moins longtemps à se **décomposer**. Les durées varient beaucoup selon les conditions ; voici des ordres de grandeur souvent cités :

| Matériau | Durée approximative de décomposition |
|---|---|
| papier, carton | quelques mois |
| boîte de conserve en acier | des dizaines d'années |
| canette en aluminium, bouteille en plastique | des centaines d'années |
| verre | plusieurs milliers d'années |

C'est pourquoi il faut **trier et recycler** ses déchets.

> **À retenir** :
> - Solide : forme et volume propres. Liquide : volume propre, pas de forme propre. Gaz : ni l'un ni l'autre.
> - Fusion, solidification, vaporisation, liquéfaction : des changements d'état réversibles.
> - Pendant le changement d'état d'un corps pur, la température reste constante (palier) : 0 °C pour la fusion de l'eau, 100 °C pour son ébullition.
> - Les métaux sont conducteurs électriques ; seuls certains (fer, acier, nickel) sont attirés par un aimant.
`,
      exercices: [
        { type: "qcm", question: "Quel état de la matière n'a ni forme propre ni volume propre ?", choix: ["L'état gazeux", "L'état liquide", "L'état solide", "Aucun état"], reponse: 0, explication: "Un **gaz** occupe tout l'espace qu'on lui donne : il n'a ni forme propre ni volume propre. Un liquide a un volume propre, un solide a une forme et un volume propres." },
        { type: "saisie", question: "Comment s'appelle le passage de l'état solide à l'état liquide ?", reponses: ["fusion", "la fusion"], explication: "C'est la **fusion** (un glaçon qui fond). Le passage inverse, du liquide au solide, est la solidification." },
        { type: "vf", question: "La fumée blanche au-dessus d'une casserole d'eau bouillante est de la vapeur d'eau.", reponse: false, explication: "La vapeur d'eau est un gaz **invisible**. Ce que l'on voit, ce sont des **gouttelettes d'eau liquide** formées quand la vapeur se refroidit au contact de l'air." },
        { type: "qcm", question: "Quel objet sera attiré par un aimant ?", choix: ["Une canette en aluminium", "Un clou en fer", "Une pièce en cuivre", "Une règle en plastique"], reponse: 1, explication: "Le **fer** est attiré par un aimant. L'aluminium et le cuivre sont des métaux, mais ils ne sont pas attirés ; le plastique non plus." },
        { type: "vf", question: "Tous les métaux sont des conducteurs électriques.", reponse: true, explication: "Oui : fer, cuivre, aluminium, or... tous les métaux laissent passer le courant électrique. C'est pour cela que les fils électriques sont en **cuivre**." },
        { type: "saisie", question: "On fait fondre de la glace pure. À quelle température (en °C) observe-t-on le palier de température ?", reponses: ["0", "0 °C", "0 degré", "zéro"], explication: "La glace pure fond à **0 °C**. Pendant toute la fusion, la température reste constante à 0 °C : c'est le palier." },
        { type: "qcm", question: "Pour fabriquer la poignée d'une casserole, on choisit un matériau qui est :", choix: ["un bon conducteur thermique", "attiré par un aimant", "un bon conducteur électrique", "un isolant thermique"], reponse: 3, explication: "La poignée ne doit pas brûler la main : il faut un **isolant thermique** (bois, certains plastiques). Le fond de la casserole, lui, est en métal, bon conducteur thermique, pour bien chauffer les aliments." },
        { type: "qcm", question: "Quel déchet, abandonné dans la nature, met le plus de temps à disparaître ?", choix: ["Une bouteille en verre", "Un journal", "Une boîte en carton", "Un trognon de pomme"], reponse: 0, explication: "Le **verre** met plusieurs milliers d'années à se décomposer. Le papier et le carton disparaissent en quelques mois, le trognon de pomme en quelques semaines à quelques mois." },
        { type: "redaction", question: "Lucas chauffe de l'eau. Il relève : au départ 20 °C ; après 2 min 50 °C ; après 4 min 80 °C ; après 6 min 100 °C ; après 8 min 100 °C ; après 10 min 100 °C. Décris l'évolution de la température, nomme ce qui se passe à partir de 6 minutes et explique ce que montre la partie où la température ne change plus.", corrige: `**Évolution** : de 0 à 6 minutes, la température **augmente** (de 20 °C à 100 °C). De 6 à 10 minutes, elle **reste constante** à 100 °C.

**Ce qui se passe** : à partir de 6 minutes, l'eau **bout** : c'est l'**ébullition**, un changement d'état de l'état liquide à l'état gazeux (vaporisation). L'eau liquide se transforme en vapeur d'eau.

**Interprétation** : la partie horizontale de la courbe est un **palier de température**. Pendant le changement d'état d'un corps pur, la température ne change pas, même si on continue à chauffer : l'énergie apportée sert à changer l'état de l'eau. La valeur du palier, 100 °C, est la température d'ébullition de l'eau pure.` },
      ],
    },
    {
      id: "masse-volume",
      titre: "Masse et volume",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## La masse
La **masse** indique la quantité de matière d'un objet. Elle se mesure avec une **balance**. Son unité est le **kilogramme (kg)**.

| Unité | tonne (t) | quintal (q) | kilogramme (kg) | gramme (g) | milligramme (mg) |
|---|---|---|---|---|---|
| Valeur | 1 t = 1 000 kg | 1 q = 100 kg | 1 kg = 1 000 g | 1 g = 1 000 mg | |

>! **Tarer la balance** : pour peser un liquide, pose le récipient vide sur la balance, appuie sur « Tare » (l'écran affiche 0 g), puis verse le liquide : la balance affiche seulement la masse du liquide.

## Le volume
Le **volume** indique la place occupée par un objet. L'unité officielle est le **mètre cube (m³)**, mais on utilise souvent le **litre (L)**.

- 1 L = 1 000 mL = 1 dm³
- 1 mL = 1 cm³
- 1 L = 100 cL ; 1 cL = 10 mL

**Mesurer le volume d'un liquide** : on utilise une **éprouvette graduée**. On place l'œil **à la hauteur** de la surface du liquide et on lit la graduation au **bas** de la surface (appelée ménisque).

**Mesurer le volume d'un solide** (par déplacement de liquide) : on note le volume d'eau dans l'éprouvette (V1), on plonge l'objet, on note le nouveau volume (V2). Le volume de l'objet est **V2 − V1**.

>! **Exemple résolu** : l'eau est à 50 mL ; avec un caillou, elle monte à 65 mL. Volume du caillou : 65 − 50 = **15 mL**, soit 15 cm³.

**Mesurer le volume d'un gaz** : on remplit d'eau une éprouvette, on la retourne dans une cuve d'eau, puis on y fait arriver le gaz par un tuyau. Le gaz **chasse l'eau** : le volume d'eau chassé est égal au volume de gaz recueilli.

## Masse et volume : deux grandeurs différentes
Un litre de plumes et un litre de plomb ont le **même volume**, mais pas la même masse ! Pour un **même volume**, des matières différentes ont des masses différentes :
- 1 L d'eau a une masse d'environ **1 kg** ;
- 1 L d'huile a une masse d'environ 0,9 kg.

## Une relation de proportionnalité
Pour une **même matière**, la masse est **proportionnelle** au volume : si le volume double, la masse double.

| Volume d'eau | 1 L | 2 L | 5 L | 0,5 L |
|---|---|---|---|---|
| Masse | 1 kg | 2 kg | 5 kg | 0,5 kg |

## Deux liquides qui ne se mélangent pas
Si on verse de l'huile dans de l'eau, elles ne se mélangent pas : on dit qu'elles sont **non miscibles**. L'huile reste **au-dessus**. La règle : le liquide qui a la **plus grande masse pour un même volume** se place **en dessous**.

> **À retenir** :
> - La masse se mesure avec une balance (en kg, g...). Le volume se mesure avec une éprouvette graduée (en L, mL...).
> - 1 L = 1 000 mL ; 1 mL = 1 cm³ ; 1 kg = 1 000 g ; 1 t = 1 000 kg.
> - Volume d'un solide = volume final − volume initial de l'eau.
> - Pour une même matière, la masse est proportionnelle au volume. 1 L d'eau pèse environ 1 kg.
`,
      exercices: [
        { type: "qcm", question: "Avec quel instrument mesure-t-on le volume d'un liquide ?", choix: ["Une balance", "Un thermomètre", "Une éprouvette graduée", "Une règle"], reponse: 2, explication: "L'**éprouvette graduée** mesure les volumes de liquide. La balance mesure les masses, le thermomètre les températures." },
        { type: "saisie", question: "Convertis 2,5 kg en grammes.", reponses: ["2500 g", "2500", "2 500 g", "2500 grammes"], explication: "1 kg = 1 000 g, donc 2,5 kg = 2,5 × 1 000 = **2 500 g**." },
        { type: "saisie", question: "Convertis 1,5 L en millilitres (mL).", reponses: ["1500 mL", "1500", "1 500 mL", "1500 ml", "1500 millilitres"], explication: "1 L = 1 000 mL, donc 1,5 L = **1 500 mL**." },
        { type: "vf", question: "1 mL est égal à 1 cm³.", reponse: true, explication: "Oui, **1 mL = 1 cm³**. De même, 1 L = 1 dm³." },
        { type: "saisie", question: "Une éprouvette contient 40 mL d'eau. On y plonge une bille : l'eau monte à 52 mL. Quel est le volume de la bille en mL ?", reponses: ["12 mL", "12", "12 ml", "12 cm³", "12 cm3", "12 cm cube", "12 centimètres cubes", "12 millilitres"], explication: "Volume de la bille = 52 − 40 = **12 mL** (soit 12 cm³)." },
        { type: "vf", question: "1 kg de plumes a une masse plus petite que 1 kg de plomb.", reponse: false, explication: "Piège classique : 1 kg, c'est 1 kg ! Les deux ont la **même masse**. En revanche, 1 kg de plumes occupe un **volume** bien plus grand que 1 kg de plomb." },
        { type: "qcm", question: "On verse de l'huile et de l'eau dans un verre. Que se passe-t-il ?", choix: ["L'huile se dissout dans l'eau", "L'huile reste au-dessus de l'eau", "L'huile coule au fond", "Les deux liquides forment un seul liquide"], reponse: 1, explication: "L'huile et l'eau sont **non miscibles**. Pour un même volume, l'huile a une masse plus petite que l'eau : elle reste **au-dessus**." },
        { type: "qcm", question: "5 L d'une huile ont une masse de 4,6 kg. Quelle est la masse de 10 L de cette huile ?", choix: ["9,2 kg", "4,6 kg", "2,3 kg", "46 kg"], reponse: 0, explication: "Pour une même matière, la masse est **proportionnelle** au volume. Le volume est multiplié par 2, donc la masse aussi : 4,6 × 2 = **9,2 kg**." },
        { type: "redaction", question: "Décris, étape par étape, comment mesurer le volume d'un petit caillou avec une éprouvette graduée et de l'eau. Donne ensuite le résultat si l'eau passe de 60 mL à 78 mL.", corrige: `**Protocole** (méthode par déplacement d'eau) :
1. Je verse de l'eau dans l'éprouvette graduée, assez pour que le caillou soit entièrement recouvert.
2. Je lis le volume d'eau, l'œil à la hauteur de la surface : c'est V1.
3. J'incline l'éprouvette et je fais glisser doucement le caillou dedans (pour ne pas casser l'éprouvette ni faire gicler l'eau).
4. Je lis le nouveau volume : c'est V2.
5. Je calcule le volume du caillou : V = V2 − V1.

**Résultat** : V = 78 − 60 = **18 mL**, soit **18 cm³**.` },
        { type: "qcm", question: "On veut mesurer le volume de gaz produit par une réaction. On le fait arriver par un tuyau dans une éprouvette remplie d'eau et retournée sur une cuve d'eau. L'eau descend de 30 mL dans l'éprouvette. Quel volume de gaz a-t-on recueilli ?", choix: ["0 mL : un gaz n'a pas de volume", "60 mL", "30 mL", "On ne peut pas savoir sans balance"], reponse: 2, explication: "Le gaz **chasse l'eau** : le volume d'eau chassé est égal au volume de gaz recueilli, soit **30 mL**. C'est la mesure d'un volume de gaz par **déplacement de liquide**." },
      ],
    },
    {
      id: "melanges-transformations",
      titre: "Les mélanges et les transformations chimiques",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## Séparer les constituants d'un mélange
Un **mélange** contient plusieurs constituants. On peut souvent les séparer :

| Technique | Pour séparer... | Exemple |
|---|---|---|
| **Tamisage** | des solides de tailles différentes | sable et graviers |
| **Décantation** | un solide qui tombe au fond d'un liquide | eau boueuse laissée au repos |
| **Filtration** | un solide non dissous d'un liquide (avec un filtre) | café et marc de café |
| **Évaporation** | un solide dissous d'un liquide | eau salée → sel |
| **Ampoule à décanter** | deux liquides **non miscibles** | eau et huile |

>! **Avec l'ampoule à décanter** : on verse le mélange, on attend que les deux couches se séparent, puis on ouvre le robinet pour faire couler la couche du bas (l'eau) ; on le ferme juste avant que l'huile arrive.

Dans les marais salants, l'eau de mer s'**évapore** au soleil et le **sel** reste : c'est la récolte du sel.

## La dissolution et la saturation
Quand on met du sucre ou du sel dans l'eau, il **se dissout** : on ne le voit plus, mais il est toujours là (l'eau a un goût). On obtient une **solution**. Le liquide (l'eau) est le **solvant**, le solide dissous est le **soluté**.

- La **masse se conserve** : masse de l'eau + masse du sel = masse de l'eau salée.
- On ne peut pas dissoudre une quantité illimitée de solide : au bout d'un moment, le solide ne se dissout plus et reste au fond. La solution est **saturée**. Exemple : on peut dissoudre environ 360 g de sel dans 1 L d'eau à 20 °C, pas plus.

>! **Exemple résolu** : on dissout 20 g de sel dans 200 g d'eau. Masse de la solution : 200 + 20 = **220 g**.

## L'air, un mélange de gaz
L'**air** est un mélange : environ **78 % de diazote**, **21 % de dioxygène** et **1 %** d'autres gaz (argon, dioxyde de carbone, vapeur d'eau...).

Certains gaz de l'air retiennent la chaleur près du sol : ce sont les **gaz à effet de serre**, comme la **vapeur d'eau**, le **dioxyde de carbone** et le **méthane**. Ils sont indispensables à la vie (sans eux, il ferait environ −18 °C en moyenne sur Terre), mais leur augmentation due aux activités humaines réchauffe la planète.

## Les transformations chimiques
Parfois, quand on mélange deux produits, de **nouvelles substances apparaissent** : c'est une **transformation chimique**.
- Les produits de départ, qui disparaissent, sont les **réactifs**.
- Les nouvelles substances formées sont les **produits**.

Indices d'une transformation chimique : **apparition d'un gaz** (bulles), **changement de couleur**, formation d'un solide, **changement de température** (le mélange chauffe ou se refroidit).

>! **Exemple** : vinaigre + bicarbonate de soude → de nombreuses bulles de **dioxyde de carbone**. Si on met beaucoup de vinaigre, tout le bicarbonate finit par disparaître : il a été **consommé**.

Attention : dissoudre du sucre n'est **pas** une transformation chimique (le sucre est toujours là) ; faire fondre de la glace non plus (c'est un changement d'état).

## La sécurité avec les produits chimiques
Les produits ménagers et les produits du laboratoire portent des **pictogrammes de danger** (losange à bord rouge) :

| Pictogramme | Danger |
|---|---|
| flamme | inflammable : peut prendre feu |
| tête de mort | toxique : peut tuer même en petite quantité |
| liquide qui ronge une main et une surface | corrosif : brûle la peau, abîme les yeux |
| point d'exclamation | irritant, nocif |
| arbre mort et poisson mort | dangereux pour l'environnement |

Règles : ne jamais **mélanger** des produits ménagers (eau de Javel + détartrant dégagent un gaz toxique), les garder dans leur emballage d'origine, hors de portée des petits enfants, porter blouse et lunettes au laboratoire. Ne jamais les jeter dans l'évier ou la nature : ils polluent l'eau.

> **À retenir** :
> - Tamisage, décantation, filtration, évaporation, ampoule à décanter : des techniques pour séparer les mélanges.
> - Lors d'une dissolution, la masse se conserve ; une solution peut être saturée.
> - L'air : 78 % de diazote, 21 % de dioxygène. CO2, méthane et vapeur d'eau sont des gaz à effet de serre.
> - Transformation chimique : des réactifs disparaissent, de nouveaux produits apparaissent (gaz, couleur...).
`,
      exercices: [
        { type: "qcm", question: "Quelle technique permet de récupérer le sel dissous dans l'eau de mer ?", choix: ["La filtration", "Le tamisage", "La décantation", "L'évaporation"], reponse: 3, explication: "Le sel est **dissous** : il traverse les filtres. Il faut **évaporer** l'eau, comme dans les marais salants, pour que le sel reste." },
        { type: "saisie", question: "Quel gaz représente environ 21 % de l'air ?", reponses: ["dioxygène", "le dioxygène", "oxygène", "l'oxygène", "O2"], explication: "Le **dioxygène** représente environ 21 % de l'air. Le gaz le plus abondant est le diazote (environ 78 %)." },
        { type: "vf", question: "Quand le sucre se dissout dans l'eau, il disparaît : la masse totale diminue.", reponse: false, explication: "Le sucre est toujours là, mais en morceaux trop petits pour être vus. La **masse se conserve** : masse de l'eau + masse du sucre = masse de l'eau sucrée." },
        { type: "saisie", question: "On dissout 15 g de sucre dans 250 g d'eau. Quelle est la masse de la solution obtenue (en g) ?", reponses: ["265 g", "265", "265 grammes"], explication: "La masse se conserve : 250 + 15 = **265 g**." },
        { type: "qcm", question: "Lequel de ces gaz est un gaz à effet de serre ?", choix: ["Le diazote", "Le dioxyde de carbone", "Le dioxygène", "L'argon"], reponse: 1, explication: "Le **dioxyde de carbone** (comme le méthane et la vapeur d'eau) retient la chaleur près du sol. Le diazote, le dioxygène et l'argon ne sont pas des gaz à effet de serre." },
        { type: "qcm", question: "Quelle observation montre qu'il s'agit d'une transformation chimique ?", choix: ["Un glaçon fond dans un verre", "Du sel disparaît dans l'eau", "Du sable tombe au fond de l'eau", "Des bulles de gaz apparaissent quand on mélange vinaigre et bicarbonate"], reponse: 3, explication: "Un **nouveau gaz** (du dioxyde de carbone) apparaît : de nouvelles substances se forment, c'est une **transformation chimique**. La fusion est un changement d'état, la dissolution et la décantation sont des mélanges." },
        { type: "vf", question: "On peut dissoudre autant de sel qu'on veut dans un verre d'eau.", reponse: false, explication: "Au-delà d'une certaine quantité, le sel ne se dissout plus et reste au fond : la solution est **saturée** (environ 360 g de sel par litre d'eau à 20 °C)." },
        { type: "qcm", question: "Un flacon porte un pictogramme représentant une flamme. Cela signifie que le produit est :", choix: ["toxique", "corrosif", "inflammable", "dangereux pour l'environnement"], reponse: 2, explication: "La **flamme** signale un produit **inflammable** : il faut le tenir loin de toute source de chaleur ou de flamme." },
        { type: "saisie", question: "Lors d'une transformation chimique, comment appelle-t-on les substances de départ, qui sont consommées ?", reponses: ["réactifs", "les réactifs", "réactif"], explication: "Les substances consommées sont les **réactifs** ; les nouvelles substances formées sont les **produits**." },
        { type: "redaction", question: "Tu disposes d'un mélange de sable, de sel et d'eau. Propose une méthode, étape par étape, pour récupérer séparément le sable et le sel. Nomme chaque technique.", corrige: `1. **Décantation** (facultative) : je laisse reposer le mélange ; le sable tombe au fond.
2. **Filtration** : je verse le mélange dans un entonnoir muni d'un **filtre**. Le **sable**, qui ne se dissout pas, reste dans le filtre. Le liquide qui passe (le **filtrat**) est de l'eau salée : le sel dissous traverse le filtre.
3. **Évaporation** : je chauffe doucement l'eau salée (ou je la laisse au soleil) : l'eau s'évapore et le **sel** reste au fond du récipient.

Le sable récupéré dans le filtre peut être séché à l'air. On a ainsi séparé les trois constituants (l'eau étant partie dans l'air sous forme de vapeur).` },
        { type: "qcm", question: "Quel matériel permet de séparer un mélange d'eau et d'huile ?", choix: ["Un tamis", "Une ampoule à décanter", "Un aimant", "Un filtre à café"], reponse: 1, explication: "L'eau et l'huile sont deux liquides **non miscibles** : on les sépare avec une **ampoule à décanter**, en faisant couler la couche du bas (l'eau) puis en fermant le robinet. Un filtre laisse passer les deux liquides." },
      ],
    },
    {
      id: "mouvements-vitesse",
      titre: "Décrire un mouvement et calculer une vitesse",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## Un mouvement dépend du point de vue
Un objet est en mouvement si sa position change **par rapport à** un autre objet (l'observateur). Il faut toujours préciser **par rapport à quoi**.

>! **Exemple** : tu es assis dans un train qui roule. **Par rapport à ton siège**, tu es immobile. **Par rapport à une personne sur le quai**, tu te déplaces en ligne droite.

## La trajectoire
La **trajectoire** est le chemin suivi par l'objet.
- **Rectiligne** : une ligne droite (un train sur une voie droite, par rapport au quai).
- **Circulaire** : un cercle (un point coloré sur une toupie, par rapport à l'axe de la toupie ; une nacelle de grande roue).
- **Curviligne** : une courbe quelconque (un ballon lancé).

## Vitesse constante ou variable
- Si la vitesse ne change pas, le mouvement est **uniforme** (vitesse **constante**).
- Si la vitesse augmente ou diminue, la vitesse est **variable** (une voiture qui démarre, un vélo qui freine).

## Calculer une vitesse
Pour un mouvement uniforme, on calcule la vitesse en divisant la **distance parcourue** par la **durée** du déplacement :

> **vitesse = distance ÷ durée**

| Distance en | Durée en | Vitesse en |
|---|---|---|
| kilomètres (km) | heures (h) | kilomètres par heure (km/h) |
| mètres (m) | secondes (s) | mètres par seconde (m/s) |

>! **Exemple résolu** : un train parcourt 300 km en 2 h à vitesse constante. Vitesse = 300 ÷ 2 = **150 km/h**.

>! **Exemple résolu** : un escargot parcourt 6 m en 10 min. 10 min = 600 s. Vitesse = 6 ÷ 600 = **0,01 m/s**.

## Les conversions utiles
- 1 km = 1 000 m ; 1 h = 60 min ; 1 min = 60 s ; 1 h = 3 600 s.
- 30 min = 0,5 h ; 15 min = 0,25 h ; 1 jour = 24 h ; 1 an ≈ 365 jours.

**Une durée** est l'intervalle entre deux instants : un film qui commence à 14 h 10 et finit à 15 h 40 dure 1 h 30 min.

## Les mouvements de la Terre
On regarde le système solaire « depuis le Soleil » (point de vue **héliocentrique**) :
- La Terre **tourne autour du Soleil** : c'est la **révolution**. Un tour dure environ **365 jours** (365 jours et un quart) : c'est **une année**.
- La Terre **tourne sur elle-même** autour de l'axe des pôles : c'est la **rotation**. Un tour dure environ **24 heures** : c'est **un jour**.

Les autres planètes ont des durées de révolution différentes : plus une planète est loin du Soleil, plus son année est longue (Mars : environ 687 jours terrestres).

>! **Ordre de grandeur** : la Terre parcourt environ 940 millions de km par an autour du Soleil, soit plus de **100 000 km/h** !

> **À retenir** :
> - On décrit un mouvement **par rapport à** un observateur.
> - Trajectoire rectiligne, circulaire ou curviligne ; vitesse constante (mouvement uniforme) ou variable.
> - Vitesse = distance ÷ durée (en km/h ou en m/s).
> - Révolution de la Terre autour du Soleil : 1 an. Rotation sur elle-même : 1 jour.
`,
      exercices: [
        { type: "vf", question: "Un passager assis dans un avion en vol est immobile par rapport à son siège.", reponse: true, explication: "Sa position ne change pas **par rapport à son siège**. Par rapport au sol, en revanche, il se déplace très vite." },
        { type: "qcm", question: "Quelle est la trajectoire d'une nacelle de grande roue, par rapport au sol ?", choix: ["Rectiligne", "Circulaire", "Curviligne quelconque", "Il n'y a pas de trajectoire"], reponse: 1, explication: "La nacelle tourne autour de l'axe de la roue : sa trajectoire est un **cercle**." },
        { type: "saisie", question: "Un bus parcourt 120 km en 2 h à vitesse constante. Quelle est sa vitesse en km/h ?", reponses: ["60 km/h", "60", "60 kilomètres par heure"], explication: "Vitesse = distance ÷ durée = 120 ÷ 2 = **60 km/h**." },
        { type: "saisie", question: "Combien de secondes y a-t-il dans 1 heure ?", reponses: ["3600", "3 600", "3600 s", "3 600 s", "3600 secondes"], explication: "1 h = 60 min et 1 min = 60 s, donc 1 h = 60 × 60 = **3 600 s**." },
        { type: "qcm", question: "Une voiture démarre à un feu vert. Sa vitesse est :", choix: ["constante", "nulle", "variable", "toujours de 50 km/h"], reponse: 2, explication: "En démarrant, la voiture va de plus en plus vite : sa vitesse **augmente**, elle est **variable**." },
        { type: "qcm", question: "Quel mouvement de la Terre explique la durée d'une année ?", choix: ["Sa révolution autour du Soleil", "Sa rotation sur elle-même", "Le mouvement de la Lune", "Le mouvement du Soleil autour de la Terre"], reponse: 0, explication: "Une année correspond à un tour complet de la Terre **autour du Soleil** : c'est la **révolution**. La rotation sur elle-même dure un jour." },
        { type: "saisie", question: "Un coureur parcourt 400 m en 80 s à vitesse constante. Quelle est sa vitesse en m/s ?", reponses: ["5 m/s", "5", "5 mètres par seconde"], explication: "Vitesse = 400 ÷ 80 = **5 m/s**." },
        { type: "vf", question: "Pour calculer une vitesse en km/h, il faut une distance en kilomètres et une durée en heures.", reponse: true, explication: "Oui. Si la durée est donnée en minutes, il faut d'abord la convertir en heures (30 min = 0,5 h)." },
        { type: "qcm", question: "Un cycliste roule à vitesse constante et parcourt 10 km en 30 minutes. Quelle est sa vitesse ?", choix: ["20 km/h", "0,3 km/h", "3 km/h", "300 km/h"], reponse: 0, explication: "30 min = 0,5 h. Vitesse = 10 ÷ 0,5 = **20 km/h**. (Autre raisonnement : en 1 h, il ferait 2 fois 10 km.)" },
        { type: "redaction", question: "Le TGV relie deux villes distantes de 450 km. Il part à 9 h 00 et arrive à 11 h 30, en roulant à vitesse constante. 1) Calcule la durée du trajet en heures. 2) Calcule sa vitesse en km/h. 3) Lina dit : « Le TGV est immobile. » Dans quel cas a-t-elle raison ?", corrige: `**1) Durée** : de 9 h 00 à 11 h 30, il s'écoule **2 h 30 min**. 30 min = 0,5 h, donc la durée est **2,5 h**.

**2) Vitesse** : vitesse = distance ÷ durée = 450 ÷ 2,5 = **180 km/h**.

**3)** Le mouvement dépend du point de vue. Lina a raison si elle est **assise dans le TGV** et qu'elle regarde le train **par rapport à elle-même** (ou par rapport à son siège) : le train ne bouge pas par rapport à elle. En revanche, **par rapport aux rails** ou à une personne sur le quai, le TGV est en mouvement.` },
      ],
    },
    {
      id: "energie-conversions",
      titre: "Les formes d'énergie, leurs conversions et les ressources",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## Les différentes formes d'énergie
L'**énergie** permet de faire bouger, chauffer, éclairer, fonctionner un appareil. Elle existe sous plusieurs **formes** :

| Forme d'énergie | Elle est liée à... | Exemple |
|---|---|---|
| **de pesanteur** | l'altitude (la hauteur) d'un objet | l'eau en haut d'un barrage |
| **cinétique** | le mouvement | le vent, une voiture qui roule |
| **chimique** | certaines substances | les aliments, l'essence, le bois, une pile |
| **thermique** | la chaleur | l'eau chaude d'un radiateur |
| **électrique** | le courant électrique | le courant qui arrive par une prise |
| **lumineuse** | la lumière | la lumière du Soleil |
| **nucléaire** | le noyau des atomes | l'uranium d'une centrale nucléaire |

Certaines énergies peuvent être **stockées** (de pesanteur, cinétique, chimique, thermique, nucléaire). D'autres sont plutôt des **transferts** d'un objet à un autre : l'énergie **électrique** (transportée par le courant) et l'énergie **lumineuse** (transportée par la lumière).

## Les conversions d'énergie
L'énergie ne se crée pas : elle **se convertit** d'une forme en une autre grâce à un **convertisseur**.

>! **Bien le dire** : « Au cours de la chute d'un objet, son énergie de pesanteur est convertie en énergie cinétique. » « Dans une voiture à essence, de l'énergie chimique est convertie en énergie cinétique. » « La Terre reçoit de l'énergie du Soleil par la lumière qu'il émet. »

## La chaîne énergétique
On représente une conversion par une **chaîne énergétique** : un **réservoir** d'énergie, un **convertisseur**, et des flèches qui indiquent la forme d'énergie transférée.

>! **Exemple : la lampe de poche**
>! pile (réservoir d'énergie chimique) → énergie électrique → lampe (convertisseur) → énergie lumineuse + énergie thermique (la lampe chauffe un peu)

| Appareil ou dispositif | Énergie reçue | Énergie produite |
|---|---|---|
| éolienne | cinétique (vent) | électrique |
| barrage hydroélectrique | de pesanteur de l'eau, puis cinétique | électrique |
| panneau solaire (photovoltaïque) | lumineuse | électrique |
| moteur électrique | électrique | cinétique |
| dynamo de vélo, alternateur de centrale (l'inverse d'un moteur) | cinétique | électrique |
| radiateur électrique | électrique | thermique |
| muscles | chimique (aliments) | cinétique + thermique |

## Construire une chaîne énergétique
Une chaîne énergétique se lit de haut en bas (ou de gauche à droite). Chaque **objet** (réservoir, convertisseur) est écrit dans un **cadre** (ici, les crochets [ ] dessinent le cadre ; sur ton cahier, trace un rectangle ou un ovale, selon la convention de ton professeur : les manuels ne dessinent pas tous les cadres de la même forme) ; chaque **flèche** porte le **nom de la forme d'énergie** transférée.

~~~
[ pile ]   (réservoir)
   │
   │ énergie électrique
   ▼
[ lampe ]  (convertisseur)
   │
   ├─▶ énergie lumineuse
   │   (utile : on la veut)
   └─▶ énergie thermique
       (perdue : ça chauffe)
~~~

>! **Méthode**
>! 1. Trouve d'où vient l'énergie : un **réservoir** (pile, aliments, eau d'un barrage, essence) ou une **source** comme le Soleil ou le vent.
>! 2. Trouve le ou les **convertisseurs**, dans l'ordre. Une chaîne peut en avoir plusieurs à la suite.
>! 3. Sur chaque flèche, écris la **forme d'énergie** (électrique, cinétique, lumineuse...), jamais le nom d'un objet.
>! 4. Ajoute l'énergie **utile** (celle qu'on veut obtenir) et l'énergie **perdue**, souvent **thermique** (l'appareil chauffe).

>! **Exemple résolu : une petite éolienne qui allume une lampe dans un jardin** (deux convertisseurs à la suite)
>! vent → énergie cinétique → **éolienne** → énergie électrique → **lampe** → énergie lumineuse (utile) + énergie thermique (perdue : la lampe chauffe un peu).

**Erreurs fréquentes** :
- écrire « le moteur **fabrique** de l'énergie » : un convertisseur ne crée pas d'énergie, il la **transforme** ;
- écrire un objet sur une flèche (« pile → fil → lampe ») : sur la flèche, on écrit une **forme d'énergie** ;
- oublier l'énergie perdue : aucun convertisseur ne transforme toute l'énergie reçue en énergie utile. L'énergie perdue ne disparaît pas : elle chauffe l'appareil et l'air autour.

## Les ressources en énergie
Une **ressource** est ce que l'on trouve dans la nature pour obtenir de l'énergie.
- **Renouvelables** : elles se renouvellent rapidement, à l'échelle d'une vie humaine : **Soleil**, **vent**, **eau** des rivières, **bois** (si on replante les forêts), chaleur de la Terre (géothermie).
- **Non renouvelables** : elles ont mis des millions d'années à se former, ou existent en quantité limitée : **pétrole**, **charbon**, **gaz naturel**, **uranium**. Un jour, il n'y en aura plus.

Le **dihydrogène** n'est pas une ressource naturelle disponible : il faut le **fabriquer**, en dépensant de l'énergie. Il n'est « propre » que si l'énergie utilisée pour le fabriquer l'est.

## Énergie et environnement
Brûler du pétrole, du charbon ou du gaz rejette du **dioxyde de carbone**, un gaz à effet de serre qui réchauffe le climat. Les centrales nucléaires n'en rejettent presque pas, mais produisent des **déchets radioactifs** dangereux très longtemps. Les éoliennes et les panneaux solaires ne produisent pas d'électricité quand il n'y a pas de vent ou de soleil.

Presque toute l'énergie que nous utilisons vient, à l'origine, du **Soleil** : il fait pousser les plantes (aliments, bois), crée les vents, évapore l'eau qui remplira les barrages.

> **À retenir** :
> - Formes d'énergie : de pesanteur, cinétique, chimique, thermique, électrique, lumineuse, nucléaire.
> - Un convertisseur transforme une forme d'énergie en une autre ; on le représente par une chaîne énergétique.
> - Dans une chaîne énergétique : les objets dans des cadres, une forme d'énergie sur chaque flèche, l'énergie utile et l'énergie perdue (souvent thermique).
> - Ressources renouvelables : Soleil, vent, eau, bois, géothermie. Non renouvelables : pétrole, charbon, gaz, uranium.
> - Toute utilisation de l'énergie a des conséquences sur l'environnement.
`,
      textes: {
        voiture: `**La chaîne énergétique d'une voiture jouet solaire, à compléter**

~~~
Soleil
   │
   │ énergie ... (1)
   ▼
[ panneau solaire ]
   │
   │ énergie électrique
   ▼
[ ... (2) ]
   │
   ├─▶ énergie cinétique
   │   (les roues tournent)
   └─▶ énergie thermique
       (perdue)
~~~`,
        barrage: `**Un barrage hydroélectrique**

L'eau d'un lac de montagne est retenue en hauteur par un barrage. On ouvre une vanne : l'eau descend à grande vitesse dans une grosse conduite et fait tourner une **turbine**. La turbine entraîne un **alternateur**, une machine qui produit de l'électricité (comme une dynamo de vélo, en beaucoup plus gros). L'électricité part ensuite par des lignes électriques vers les villes.`,
      },
      exercices: [
        { type: "qcm", question: "Quelle forme d'énergie possède une voiture qui roule ?", choix: ["De l'énergie lumineuse", "De l'énergie nucléaire", "De l'énergie de pesanteur seulement", "De l'énergie cinétique"], reponse: 3, explication: "L'énergie **cinétique** est liée au **mouvement** : tout objet qui se déplace en possède." },
        { type: "vf", question: "Le pétrole est une ressource d'énergie renouvelable.", reponse: false, explication: "Le pétrole a mis des **millions d'années** à se former : à l'échelle d'une vie humaine, il ne se renouvelle pas. C'est une ressource **non renouvelable**." },
        { type: "saisie", question: "Un panneau solaire photovoltaïque convertit de l'énergie lumineuse en énergie... ?", reponses: ["électrique", "énergie électrique", "l'énergie électrique"], explication: "Le panneau photovoltaïque convertit l'énergie **lumineuse** du Soleil en énergie **électrique**." },
        { type: "qcm", question: "Quel est le réservoir d'énergie dans une lampe de poche ?", choix: ["L'interrupteur", "L'ampoule", "La pile", "Les fils"], reponse: 2, explication: "La **pile** contient de l'énergie **chimique** : c'est le réservoir. L'ampoule est le convertisseur (elle produit de la lumière)." },
        { type: "qcm", question: "Laquelle de ces ressources est renouvelable ?", choix: ["Le charbon", "L'uranium", "Le gaz naturel", "Le vent"], reponse: 3, explication: "Le **vent** se renouvelle sans cesse. Le charbon, le gaz naturel et l'uranium existent en quantité limitée : ils sont non renouvelables." },
        { type: "vf", question: "Quand une pomme tombe d'un arbre, son énergie de pesanteur est convertie en énergie cinétique.", reponse: true, explication: "En tombant, la pomme perd de l'altitude (énergie de pesanteur) et gagne de la vitesse (énergie **cinétique**)." },
        { type: "saisie", question: "Quel est le nom de l'énergie apportée par les aliments et stockée dans une pile ?", reponses: ["chimique", "énergie chimique", "l'énergie chimique"], explication: "Les aliments, les carburants, le bois et les piles sont des réservoirs d'énergie **chimique**." },
        { type: "qcm", question: "Dans un radiateur électrique, l'énergie électrique est surtout convertie en énergie :", choix: ["cinétique", "nucléaire", "thermique", "de pesanteur"], reponse: 2, explication: "Le radiateur sert à chauffer : il convertit l'énergie électrique en énergie **thermique**." },
        { type: "redaction", question: "Une éolienne produit de l'électricité. 1) Écris sa chaîne énergétique (énergie reçue, convertisseur, énergie produite). 2) Le vent est-il une ressource renouvelable ? Justifie. 3) Donne un avantage et un inconvénient de l'éolienne.", corrige: `**1) Chaîne énergétique** :
vent (énergie **cinétique**) → **éolienne** (convertisseur) → énergie **électrique** (et un peu d'énergie thermique perdue, car les pièces chauffent).

**2)** Oui, le vent est une ressource **renouvelable** : il est créé en permanence par le Soleil, qui chauffe l'air de façon inégale. Il ne s'épuise pas quand on l'utilise.

**3) Avantage** : l'éolienne ne rejette pas de dioxyde de carbone en fonctionnant, elle ne contribue donc presque pas au réchauffement climatique.
**Inconvénient** : elle ne produit de l'électricité que lorsqu'il y a du vent (production irrégulière) ; elle modifie aussi le paysage et peut gêner certains oiseaux.` },
        { type: "saisie", texte: "voiture", question: "Complète la case (1) de la chaîne : sous quelle forme d'énergie (une de la liste du cours) le panneau solaire reçoit-il l'énergie du Soleil ? Énergie...", reponses: ["lumineuse", "énergie lumineuse", "l'énergie lumineuse", "lumière", "la lumière", "lumière du Soleil", "la lumière du Soleil"], explication: "Le panneau solaire reçoit la **lumière** du Soleil : c'est de l'énergie **lumineuse**, qu'il convertit en énergie électrique. « Solaire » n'est pas une forme d'énergie : il dit seulement d'où vient l'énergie (le Soleil, la source). Sur une flèche, on écrit la forme : ici, lumineuse." },
        { type: "saisie", texte: "voiture", question: "Complète la case (2) de la chaîne : quel convertisseur transforme l'énergie électrique en énergie cinétique pour faire tourner les roues ?", reponses: ["moteur", "un moteur", "le moteur", "moteur électrique", "un moteur électrique", "le moteur électrique"], explication: "C'est le **moteur** électrique : il reçoit de l'énergie électrique et produit de l'énergie cinétique (et un peu d'énergie thermique perdue, car il chauffe). Cette chaîne a donc **deux convertisseurs** à la suite : le panneau solaire, puis le moteur." },
        { type: "vf", texte: "voiture", question: "L'énergie thermique « perdue » par le moteur disparaît complètement.", reponse: false, explication: "L'énergie ne disparaît jamais : elle **se convertit**. L'énergie dite « perdue » chauffe le moteur et l'air autour ; elle n'est simplement pas **utile** pour faire avancer la voiture." },
        { type: "qcm", question: "Une dynamo de vélo allume le phare quand la roue tourne. Quelle conversion réalise la dynamo ?", choix: ["Énergie cinétique → énergie électrique", "Énergie électrique → énergie cinétique", "Énergie lumineuse → énergie électrique", "Énergie chimique → énergie lumineuse"], reponse: 0, explication: "La dynamo reçoit le **mouvement** de la roue (énergie **cinétique**) et produit de l'énergie **électrique**, qui va ensuite à la lampe du phare (deuxième convertisseur : électrique → lumineuse). C'est l'inverse d'un moteur." },
        { type: "qcm", question: "Lina a écrit la chaîne d'une lampe de poche : « pile → fil électrique → lampe → lumière ». Quelle est son erreur ?", choix: ["La pile n'est pas un réservoir d'énergie", "Elle a écrit un objet (le fil) à la place d'une forme d'énergie sur la flèche", "Une lampe n'est pas un convertisseur", "L'ordre est inversé : la lampe donne l'énergie à la pile"], reponse: 1, explication: "Sur la flèche entre la pile et la lampe, il faut écrire la **forme d'énergie** transférée : « énergie **électrique** ». Le fil est un objet, pas une forme d'énergie. Chaîne correcte : pile → énergie électrique → lampe → énergie lumineuse (+ énergie thermique perdue)." },
        { type: "qcm", texte: "barrage", question: "Dans le barrage, quel est le bon ordre des formes d'énergie, du lac jusqu'aux lignes électriques ?", choix: ["Énergie électrique → énergie cinétique → énergie de pesanteur", "Énergie cinétique → énergie de pesanteur → énergie électrique", "Énergie de pesanteur → énergie électrique → énergie cinétique", "Énergie de pesanteur → énergie cinétique → énergie électrique"], reponse: 3, explication: "L'eau retenue **en hauteur** possède de l'énergie **de pesanteur**. En descendant, elle prend de la vitesse : énergie **cinétique**, qui fait tourner la turbine. L'alternateur, entraîné par la turbine, produit l'énergie **électrique**." },
        { type: "redaction", question: "Une lampe torche à manivelle n'a pas de pile : on tourne une manivelle, qui entraîne une petite dynamo, et la DEL s'allume. 1) Écris la chaîne énergétique complète, en partant de l'énergie apportée par les aliments de la personne qui tourne la manivelle. 2) Combien y a-t-il de convertisseurs ? 3) Pourquoi cette lampe est-elle utile en cas de panne de courant ?", corrige: `**1) Chaîne énergétique** :
~~~
[ aliments ]  (réservoir)
   │
   │ énergie chimique
   ▼
[ muscles du bras ]  (1)
   │
   │ énergie cinétique
   │ (la manivelle tourne)
   ▼
[ dynamo ]  (2)
   │
   │ énergie électrique
   ▼
[ DEL ]  (3)
   │
   ├─▶ énergie lumineuse
   │   (utile)
   └─▶ énergie thermique
       (perdue)
~~~
(1), (2) et (3) sont les trois convertisseurs.
Les muscles et la dynamo perdent aussi un peu d'énergie sous forme **thermique** (on a chaud en tournant la manivelle, la dynamo chauffe un peu).

**2)** Il y a **trois convertisseurs** : les muscles (chimique → cinétique), la dynamo (cinétique → électrique), la DEL (électrique → lumineuse).

**3)** Elle n'a besoin **ni de pile ni de prise** : c'est la personne qui fournit l'énergie en tournant la manivelle. Elle fonctionne donc même quand il n'y a plus d'électricité et sans pile à remplacer.` },
      ],
    },
    {
      id: "lumiere-jour-saisons",
      titre: "La lumière, les ombres, le jour, la nuit et les saisons",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## Rappels sur la lumière et les ombres
- Une **source de lumière** produit sa propre lumière (le Soleil, une lampe allumée). Les autres objets ne sont visibles que parce qu'ils renvoient (diffusent) la lumière qu'ils reçoivent : la **Lune** n'est pas une source, elle est éclairée par le Soleil.
- La lumière se propage **en ligne droite**.
- Un objet **opaque** arrête la lumière, un objet **transparent** la laisse passer (vitre), un objet **translucide** en laisse passer une partie sans qu'on voie nettement à travers (papier calque).

Quand un objet opaque est éclairé, il y a :
- une **ombre propre** : la partie de l'objet qui n'est pas éclairée ;
- une **ombre portée** : la zone sombre derrière l'objet, sur le sol ou sur un mur.

L'ombre portée est toujours **à l'opposé de la source** de lumière. Plus la source est basse, plus l'ombre est longue.

## L'alternance du jour et de la nuit
La Terre est une boule (une sphère) éclairée par le Soleil. **À chaque instant, une moitié de la Terre est éclairée** (il y fait jour) et l'autre moitié est dans l'ombre (il y fait nuit) : la nuit, c'est l'**ombre propre** de la Terre.

Comme la Terre **tourne sur elle-même** en environ 24 heures, un observateur passe de la moitié éclairée à la moitié sombre : il voit le jour puis la nuit.

>! **Modélisation** : dans une salle sombre, une lampe représente le Soleil et un globe terrestre représente la Terre. On fait tourner le globe sur lui-même : un petit personnage collé sur la France passe de la partie éclairée (jour) à la partie sombre (nuit).

>! **Erreur fréquente** : ce n'est pas le Soleil qui tourne autour de la Terre ! Le Soleil semble se déplacer dans le ciel **du point de vue d'un observateur sur Terre**, mais c'est la Terre qui tourne sur elle-même.

## Le mouvement apparent du Soleil
Pour un observateur en France, le Soleil se lève à l'**est**, monte dans le ciel, est au plus haut au milieu de la journée (le « midi solaire », vers 13 h ou 14 h à nos montres), en direction du **sud**, et se couche à l'**ouest**. Ces directions sont approximatives : en été, il se lève plutôt au nord-est ; en hiver, plutôt au sud-est. L'ombre d'un bâton planté dans le sol (un **gnomon**) tourne au cours de la journée et elle est **la plus courte** quand le Soleil est au plus haut.

## Les saisons
Au cours de l'année, en France, la hauteur du Soleil dans le ciel et la durée du jour changent :

| | Hauteur du Soleil à midi | Durée du jour | Ombre à midi |
|---|---|---|---|
| **Été** (juin) | grande : Soleil haut | longue (environ 16 h à Paris) | courte |
| **Hiver** (décembre) | faible : Soleil bas | courte (environ 8 h à Paris) | longue |

En été, le Soleil est haut et il éclaire plus longtemps : le sol reçoit plus d'énergie et il fait plus chaud. En hiver, le Soleil est bas et les jours sont courts : il fait plus froid.

Ces changements viennent du fait que l'**axe de rotation de la Terre est penché** (incliné) et garde toujours la même direction pendant que la Terre tourne autour du Soleil.

>! **Erreur fréquente** : les saisons ne sont **pas** dues à la distance entre la Terre et le Soleil. La Terre est même un peu plus proche du Soleil début janvier, en plein hiver pour la France !

> **À retenir** :
> - La lumière se propage en ligne droite ; un objet opaque éclairé a une ombre propre et une ombre portée.
> - Une moitié de la Terre est toujours éclairée ; la rotation de la Terre sur elle-même explique l'alternance du jour et de la nuit.
> - Le Soleil se lève à l'est, est au plus haut vers le sud, se couche à l'ouest.
> - En été, le Soleil monte plus haut et les jours sont plus longs qu'en hiver : c'est l'origine des saisons.
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces objets est une source de lumière ?", choix: ["La Lune", "Un miroir", "Une feuille blanche", "Une bougie allumée"], reponse: 3, explication: "La **bougie allumée** produit sa propre lumière. La Lune, le miroir et la feuille renvoient seulement la lumière qu'ils reçoivent." },
        { type: "vf", question: "L'ombre portée d'un objet se trouve du même côté que la source de lumière.", reponse: false, explication: "La lumière se propage en ligne droite et l'objet opaque l'arrête : l'ombre portée est donc **à l'opposé** de la source." },
        { type: "saisie", question: "Comment appelle-t-on un objet qui ne laisse pas passer la lumière ?", reponses: ["opaque", "un objet opaque", "opaques"], explication: "Un objet **opaque** arrête la lumière (bois, carton, métal). Un objet transparent la laisse passer, un objet translucide en laisse passer une partie." },
        { type: "qcm", question: "Qu'est-ce qui explique l'alternance du jour et de la nuit ?", choix: ["La rotation de la Terre sur elle-même", "La révolution de la Terre autour du Soleil", "Le mouvement du Soleil autour de la Terre", "Les nuages qui cachent le Soleil la nuit"], reponse: 0, explication: "En **tournant sur elle-même** en 24 h environ, la Terre fait passer chaque endroit de la moitié éclairée (jour) à la moitié dans l'ombre (nuit)." },
        { type: "saisie", question: "Dans quelle direction le Soleil se lève-t-il ? (un point cardinal)", reponses: ["est", "à l'est", "l'est"], explication: "Le Soleil se lève à l'**est** et se couche à l'**ouest**. Vers midi, en France, il est au plus haut vers le sud." },
        { type: "vf", question: "À chaque instant, une moitié de la Terre est éclairée par le Soleil.", reponse: true, explication: "La Terre est une sphère éclairée d'un seul côté : une moitié est dans le jour, l'autre moitié dans la nuit (c'est l'ombre propre de la Terre)." },
        { type: "qcm", question: "À midi, à quelle saison l'ombre d'un bâton est-elle la plus longue en France ?", choix: ["En été", "Au printemps", "En hiver", "Elle a la même longueur toute l'année"], reponse: 2, explication: "En **hiver**, le Soleil reste bas dans le ciel : les ombres sont longues. En été, le Soleil est haut et les ombres sont courtes." },
        { type: "qcm", question: "Pourquoi fait-il plus chaud en été qu'en hiver en France ?", choix: ["Parce que la Terre est plus proche du Soleil", "Parce que le Soleil est plus haut dans le ciel et que les jours sont plus longs", "Parce que le Soleil brille plus fort en été", "Parce que la Terre tourne plus vite"], reponse: 1, explication: "En été, le Soleil monte **plus haut** et il éclaire **plus longtemps** : le sol reçoit plus d'énergie. La distance au Soleil n'y est pour rien." },
        { type: "redaction", question: "Avec une lampe et un globe terrestre, explique à un camarade pourquoi il fait nuit en France quand il fait jour en Australie. Utilise les mots : moitié éclairée, rotation, ombre.", corrige: `La lampe représente le Soleil et le globe représente la Terre. La lampe ne peut éclairer qu'**une moitié** du globe à la fois : c'est la **moitié éclairée**, où il fait **jour**. L'autre moitié est dans l'**ombre** (l'ombre propre de la Terre) : il y fait **nuit**.

La France et l'Australie sont presque à l'opposé l'une de l'autre sur le globe. Quand la France est du côté éclairé, l'Australie est du côté sombre, et inversement.

Comme la Terre fait une **rotation** sur elle-même en 24 heures environ, chaque pays passe à son tour de la moitié éclairée à la moitié dans l'ombre : c'est l'alternance du jour et de la nuit. Ce n'est pas le Soleil qui tourne autour de la Terre.` },
      ],
    },
    {
      id: "circuits-signaux",
      titre: "Les circuits électriques et les signaux pour communiquer",
      theme: "Matière, mouvement, énergie, information",
      cours: `
## Le circuit électrique à une boucle
Pour qu'un appareil fonctionne, il faut un **circuit fermé** : une boucle sans interruption qui part d'une **borne** du générateur et revient à l'**autre borne**.

Un circuit contient :
- un **générateur** : la pile (ou une cellule photovoltaïque éclairée), qui fournit l'énergie électrique ;
- des **récepteurs** : lampe, moteur, DEL (diode électroluminescente), buzzer...
- un **interrupteur**, qui ouvre ou ferme le circuit ;
- des **fils de connexion**.

Si le circuit est **ouvert** (interrupteur ouvert, fil débranché, lampe grillée), le courant ne circule plus : rien ne fonctionne.

## Le schéma normalisé
Pour représenter un circuit, on utilise des **symboles normalisés**, compris dans le monde entier. Les fils sont dessinés par des traits droits, à la règle.

| Composant | Symbole |
|---|---|
| pile | un grand trait et un petit trait parallèles (le grand trait est la borne +) |
| lampe | un cercle barré d'une croix |
| interrupteur ouvert | un trait levé qui ne touche pas l'autre côté |
| interrupteur fermé | un trait continu |
| moteur | un cercle avec la lettre M |
| DEL | un triangle contre un trait, avec deux petites flèches qui sortent |

Dans le schéma ci-dessous, la pile est à gauche : le **grand trait** est la borne +, le **petit trait** la borne −.

~~~
   +----------------+
   |                |
 =====  borne +    (X)  lampe
  ===   borne −     |
   |                |
   +-----/  --------+
      interrupteur ouvert
~~~

Voici les symboles dessinés sur un fil (dans ces dessins, les traits « ─ » et « │ » sont des fils, sauf les deux traits de la pile) :

~~~
pile
         │
      ───┴───   borne +
        ━━━     borne −
         │
(grand trait fin = borne +,
 petit trait épais = borne −)

lampe        ──(X)──
moteur       ──(M)──
interrupteur
  ouvert     ──•/  •──
  fermé      ──•───•──
(• = les 2 bornes de
 l'interrupteur. Ouvert : le
 trait est levé, il ne touche
 pas l'autre borne. Fermé : il
 est rabattu et touche les 2.)

DEL          ──▷|──
             + 2 flèches ↗↗
~~~

>! **Méthode pour dessiner un schéma normalisé**
>! 1. Repère tous les composants du circuit réel et le chemin du courant, d'une borne de la pile à l'autre.
>! 2. Trace les fils **à la règle**, en **traits droits** horizontaux et verticaux, avec des **angles droits** : le schéma a souvent la forme d'un **rectangle**.
>! 3. Place chaque composant **sur le fil**, dans le même ordre que dans le circuit réel, avec son **symbole** (jamais un dessin réaliste de la lampe ou de la pile).
>! 4. Indique les bornes **+** et **−** de la pile, et dessine l'interrupteur dans l'état demandé (ouvert ou fermé).
>! 5. Vérifie : en suivant les fils avec le doigt, tu dois faire **une seule boucle** qui passe par chaque composant et revient à la pile.

**Erreurs fréquentes** : dessiner les fils en vagues ou à main levée ; dessiner une lampe avec son culot au lieu du cercle barré d'une croix ; oublier les bornes de la pile ; dessiner un fil qui relie directement les deux bornes de la pile (c'est un **court-circuit**).

## Quelques règles du circuit à une boucle
- Dans une boucle, on peut **intervertir** (échanger) la place des composants : la lampe brille de la même façon, qu'elle soit avant ou après l'interrupteur.
- Si on **inverse les bornes** de la pile, un **moteur tourne dans l'autre sens**. Une **DEL**, elle, ne s'allume que si elle est branchée dans le bon sens.
- Le courant ne « s'use » pas en traversant une lampe : ce qui est consommé, c'est l'énergie de la pile, pas le courant.
- Un **capteur** peut commander un circuit : une photorésistance réagit à la lumière, un capteur de température à la chaleur, un détecteur de mouvement à un passage.

## Conducteurs et isolants
Pour savoir si un matériau est **conducteur**, on le place dans un circuit avec une lampe : si la lampe s'allume, il est conducteur (métaux, mine de crayon, eau salée). L'eau salée et la mine de crayon conduisent moins bien que les métaux : la lampe brille peu, une DEL permet de mieux le voir. Sinon, il est **isolant** (plastique, verre, bois sec, caoutchouc).

## Le danger électrique
Les piles de 1,5 V ou 4,5 V sont sans danger pour toi. Mais la **prise de courant** (230 V) peut **tuer**.
- Ne jamais introduire d'objet dans une prise.
- Ne jamais toucher un appareil électrique avec les mains mouillées ou dans la salle de bain.
- Ne jamais tirer sur le fil pour débrancher un appareil ; ne pas s'approcher d'un fil électrique tombé à terre.
- Un **court-circuit** (relier directement les deux bornes d'une pile avec un fil) fait chauffer la pile et les fils : risque de brûlure et d'incendie.

## Des signaux pour transmettre une information
Un **signal** transporte une **information** d'un émetteur vers un récepteur.

| Type de signal | Exemples |
|---|---|
| **lumineux** | feu tricolore, voyant de charge d'un téléphone, phare, lumière dans une fibre optique |
| **sonore** | sirène des pompiers, alarme incendie, sonnerie du collège |
| **électrique** | courant dans un câble téléphonique, signal envoyé par un capteur |
| **ondes radio** | téléphone portable, wifi, radio |

>! **Exemple** : les **câbles sous-marins** qui relient les continents contiennent des **fibres optiques** : l'information d'internet y voyage sous forme de signaux lumineux.

> **À retenir** :
> - Un appareil fonctionne seulement si le circuit est fermé.
> - On représente un circuit par un schéma avec des symboles normalisés.
> - Dans une boucle, l'ordre des composants ne change rien ; une DEL a un sens de branchement.
> - Le courant du secteur (230 V) est dangereux.
> - Les signaux lumineux, sonores, électriques ou radio permettent de transmettre des informations.
> - Un schéma normalisé : fils tracés à la règle avec des angles droits, symboles normalisés, bornes + et − de la pile indiquées.
`,
      textes: {
        schemas: `**Trois schémas normalisés**

Dans chaque schéma, la pile est à gauche : grand trait fin = borne +, petit trait épais = borne −. Les traits « ─ » et « │ » sont des fils (sauf les deux traits de la pile).

~~~
Schéma 1
      ┌──────(X)──────┐
      │               │
 + ───┴───            │
 −   ━━━              │
      │               │
      └─────•/  •─────┘

Schéma 2
      ┌─────┬──(X)────┐
      │     │         │
 + ───┴───  │         │
 −   ━━━    │         │
      │     │         │
      └─────┴─────────┘

Schéma 3
      ┌──(X)────(M)───┐
      │               │
 + ───┴───            │
 −   ━━━              │
      │               │
      └───────────────┘
~~~`,
      },
      exercices: [
        { type: "vf", question: "Une lampe peut s'allumer dans un circuit ouvert.", reponse: false, explication: "Le courant ne circule que dans un circuit **fermé**, sans interruption. Si le circuit est ouvert, aucun récepteur ne fonctionne." },
        { type: "qcm", question: "Quel est le symbole normalisé d'une lampe ?", choix: ["Un cercle avec la lettre M", "Un cercle barré d'une croix", "Un grand trait et un petit trait parallèles", "Un triangle contre un trait"], reponse: 1, explication: "La lampe se représente par un **cercle barré d'une croix**. Le cercle avec M est le moteur, les deux traits parallèles sont la pile, le triangle est la DEL." },
        { type: "qcm", question: "Dans un circuit à une boucle, on échange la place de la lampe et de l'interrupteur. Que se passe-t-il ?", choix: ["La lampe ne s'allume plus", "La lampe brille plus fort", "La lampe grille", "Rien ne change"], reponse: 3, explication: "Dans une boucle, on peut **intervertir** les composants : la lampe fonctionne exactement de la même façon." },
        { type: "saisie", question: "Comment appelle-t-on un matériau qui ne laisse pas passer le courant électrique ?", reponses: ["isolant", "un isolant", "isolant électrique", "un isolant électrique"], explication: "Un **isolant** (plastique, verre, bois sec) ne laisse pas passer le courant. C'est pour cela que les fils électriques sont entourés de plastique." },
        { type: "qcm", question: "On inverse les branchements de la pile dans un circuit avec un moteur. Que se passe-t-il ?", choix: ["Le moteur tourne dans l'autre sens", "Le moteur s'arrête", "Le moteur tourne deux fois plus vite", "La pile se recharge"], reponse: 0, explication: "Le courant circule dans l'autre sens, donc le moteur **tourne dans l'autre sens**." },
        { type: "vf", question: "Il est dangereux d'utiliser un sèche-cheveux branché au secteur avec les mains mouillées.", reponse: true, explication: "L'eau favorise le passage du courant dans le corps. Le secteur (230 V) peut provoquer une **électrocution** mortelle." },
        { type: "saisie", question: "Quel type de signal utilise un feu tricolore pour donner une information aux automobilistes ?", reponses: ["lumineux", "un signal lumineux", "signal lumineux", "lumière", "la lumière"], explication: "Le feu tricolore émet un **signal lumineux** : rouge, orange ou vert." },
        { type: "qcm", question: "On place une cuillère en métal dans un circuit avec une lampe. La lampe s'allume. On peut conclure que :", choix: ["le métal est isolant", "la cuillère est un générateur", "la lampe est grillée", "le métal est conducteur"], reponse: 3, explication: "Le courant traverse la cuillère et la lampe s'allume : le métal est **conducteur**." },
        { type: "qcm", question: "Un éclairage de jardin s'allume tout seul quand il fait nuit. Quel composant détecte qu'il fait sombre ?", choix: ["Le fil électrique", "La lampe", "La photorésistance", "L'interrupteur à bascule"], reponse: 2, explication: "La **photorésistance** est un **capteur de lumière** : elle détecte qu'il fait sombre et commande l'allumage. La lampe est un récepteur (elle produit la lumière), le fil transporte le courant, l'interrupteur à bascule doit être actionné à la main." },
        { type: "redaction", question: "Tom a réalisé un circuit avec une pile, un interrupteur fermé, une lampe et des fils. La lampe ne s'allume pas. Propose au moins trois causes possibles et, pour chacune, comment la vérifier.", corrige: `Plusieurs causes sont possibles :
1. **La pile est usée** : je la remplace par une pile neuve (ou je la teste dans un autre circuit qui fonctionne).
2. **La lampe est grillée** (son filament est cassé) ou mal vissée : je revisse la lampe, puis je l'essaie dans un circuit qui fonctionne.
3. **Un fil est mal branché ou coupé**, et le circuit est alors **ouvert** : je vérifie que chaque fil est bien fixé aux bornes et je change les fils un par un.
4. **Les deux fils de la lampe arrivent sur la même borne**, ou un fil relie directement les deux bornes de la pile (**court-circuit**) : je vérifie le schéma du circuit, qui doit former une seule boucle passant par chaque composant.

Pour que la lampe brille, il faut une **boucle fermée** qui part d'une borne de la pile, traverse la lampe et l'interrupteur, et revient à l'autre borne.` },
        { type: "vf", question: "Dans le symbole normalisé de la pile, le grand trait représente la borne +.", reponse: true, explication: "Oui : la pile se dessine avec un **grand trait** (borne +) et un **petit trait** (borne −), parallèles. Ce repère est utile pour brancher une DEL dans le bon sens." },
        { type: "qcm", texte: "schemas", question: "Quels composants le schéma 1 représente-t-il ?", choix: ["Une pile, une lampe et un interrupteur ouvert", "Une pile, un moteur et un interrupteur fermé", "Deux piles et une lampe", "Une pile, une DEL et un interrupteur ouvert"], reponse: 0, explication: "On reconnaît la **pile** (un grand trait et un petit trait), la **lampe** (cercle barré d'une croix, dessiné ici « (X) ») et un **interrupteur ouvert** (le trait levé « / » qui ne touche pas l'autre côté). Comme l'interrupteur est ouvert, le circuit est ouvert : la lampe ne brille pas." },
        { type: "qcm", texte: "schemas", question: "Dans le schéma 2, il n'y a aucun interrupteur ouvert, et pourtant la lampe ne brille pas. Pourquoi ?", choix: ["La lampe est mal dessinée", "La pile est branchée à l'envers", "Un fil relie directement les deux bornes de la pile : c'est un court-circuit", "Il manque un moteur"], reponse: 2, explication: "Le fil vertical du milieu relie directement la borne + et la borne − de la pile : c'est un **court-circuit**. Le courant passe par ce fil plutôt que par la lampe, qui ne brille pas, et la pile chauffe : c'est dangereux (risque de brûlure). Une lampe s'allume quel que soit le sens de branchement de la pile." },
        { type: "qcm", texte: "schemas", question: "On veut pouvoir allumer et éteindre ensemble la lampe et le moteur du schéma 3. Où peut-on placer un interrupteur ?", choix: ["Seulement entre la pile et la lampe", "Seulement entre la lampe et le moteur", "Il faut deux interrupteurs, un par composant", "N'importe où dans la boucle"], reponse: 3, explication: "Le schéma 3 est un circuit **à une boucle** : la pile, la lampe et le moteur sont sur le même chemin. Un interrupteur placé **n'importe où dans la boucle** ouvre ou ferme tout le circuit : dans une boucle, on peut intervertir les composants sans rien changer." },
        { type: "saisie", question: "Dans le symbole normalisé de la pile, quelle borne représente le petit trait épais ? Réponds « + » ou « − ».", reponses: ["−", "-", "borne −", "borne -", "la borne −", "moins", "borne moins", "la borne moins", "négative", "borne négative", "la borne négative", "négatif", "pôle négatif", "le pôle négatif", "pôle −", "pôle -", "pôle moins"], explication: "Le **petit trait épais** est la borne **−** ; le grand trait fin est la borne **+**." },
        { type: "qcm", question: "Laquelle de ces règles faut-il respecter pour dessiner un schéma normalisé ?", choix: ["Tracer les fils à la règle, en traits droits avec des angles droits", "Dessiner la lampe telle qu'on la voit, avec son culot et son filament", "Dessiner les fils avec leurs vraies courbes", "Inventer un symbole pour chaque nouveau composant"], reponse: 0, explication: "Dans un schéma normalisé, les fils sont des **traits droits tracés à la règle**, avec des angles droits, et chaque composant est représenté par son **symbole**, le même dans le monde entier. On ne dessine ni le culot de la lampe ni les vraies courbes des fils." },
        { type: "redaction", question: "Sur ton cahier, dessine le schéma normalisé d'un circuit à une boucle comprenant une pile, un interrupteur ouvert, une lampe et un moteur. Indique les bornes + et − de la pile. Explique ensuite ce qui se passe quand on ferme l'interrupteur.", corrige: `**Schéma** (une solution possible ; l'ordre des composants dans la boucle peut changer) :
~~~
      ┌──(X)────(M)───┐
      │               │
 + ───┴───            │
 −   ━━━              │
      │               │
      └─────•/  •─────┘
~~~
- la **pile** à gauche : grand trait fin = borne **+**, petit trait épais = borne **−** ;
- la **lampe** : cercle barré d'une croix ;
- le **moteur** : cercle avec la lettre M ;
- l'**interrupteur ouvert** : trait levé qui ne touche pas l'autre côté ;
- les fils sont tracés **à la règle**, avec des angles droits ; on vérifie qu'on fait **une seule boucle** en partant d'une borne de la pile et en revenant à l'autre.

**Quand on ferme l'interrupteur** : le circuit devient **fermé**, le courant circule dans toute la boucle : la lampe s'allume et le moteur tourne. Si on ouvre l'interrupteur, les deux s'arrêtent en même temps, car ils sont dans la même boucle.` },
        { type: "vf", question: "Dans un schéma normalisé, l'interrupteur fermé se dessine avec un trait levé qui ne touche pas l'autre borne.", reponse: false, explication: "Le trait **levé** qui ne touche pas l'autre borne, c'est l'interrupteur **ouvert**. Quand l'interrupteur est **fermé**, le trait est **rabattu** : il touche les deux bornes et le courant passe." },
      ],
    },
    {
      id: "cellule-classification",
      titre: "La cellule et la classification des êtres vivants",
      theme: "Le vivant, sa diversité et les fonctions qui le caractérisent",
      cours: `
## Tous les êtres vivants sont faits de cellules
En observant au **microscope** un morceau de peau d'oignon, de feuille d'élodée ou l'intérieur de ta joue, on voit de petites unités : les **cellules**. La **cellule** est l'**unité de base commune à tous les êtres vivants**.

Toute cellule possède :
- une **membrane**, qui l'entoure ;
- du **cytoplasme**, qui la remplit ;
- en général, un **noyau**, qui contient l'information génétique (les bactéries, elles, n'ont pas de noyau).

Les cellules **végétales** ont en plus une **paroi** rigide autour de la membrane et, dans les parties vertes, des **chloroplastes** (petits grains verts).

| | Cellule animale | Cellule végétale |
|---|---|---|
| membrane, cytoplasme, noyau | oui | oui |
| paroi | non | oui |
| chloroplastes | non | oui (parties vertes) |

Certains êtres vivants sont formés d'**une seule cellule** : ce sont des êtres **unicellulaires** (paramécie, levure, bactérie). Les autres, comme nous, sont **pluricellulaires** : le corps humain contient des milliers de milliards de cellules.

>! **Utiliser un microscope** : place la lame sur la platine, commence avec le **plus petit grossissement**, fais la mise au point avec la vis, puis augmente le grossissement. Grossissement total = grossissement de l'oculaire × grossissement de l'objectif (par exemple 10 × 40 = 400).

>! **Faire un dessin d'observation** : au crayon à papier, traits nets, légendes écrites horizontalement et reliées par des traits à la règle, un titre et le grossissement.

## Classer les êtres vivants
Il existe plusieurs façons de classer les êtres vivants, selon ce qu'on veut faire :
- classement **utilitaire** : selon leur utilité pour l'humain (plantes comestibles, animaux domestiques) ;
- classement **écologique** : selon leur milieu de vie (animaux aquatiques, animaux du sol) ;
- classement **scientifique** (phylogénétique) : selon les **attributs** (caractères) qu'ils **possèdent en commun**. C'est lui qui montre les **liens de parenté**.

>! **Attention** : en sciences, on classe d'après ce que les êtres vivants **ont** (des plumes, des vertèbres, des poils), et **jamais** d'après ce qu'ils n'ont pas, ce qu'ils font ou où ils vivent. La baleine vit dans l'eau, mais elle a des poils (quelques-uns) et allaite ses petits : c'est un **mammifère**, pas un poisson.

## Les groupes emboîtés
On regroupe les espèces qui partagent un attribut dans une même « boîte ». Les boîtes s'emboîtent les unes dans les autres :
- **Vertébrés** (squelette avec des vertèbres) : truite, grenouille, lézard, merle, chat...
- dans les vertébrés, les **tétrapodes** (4 membres) : grenouille, lézard, merle, chat...
- dans les tétrapodes, les animaux à **plumes** (oiseaux) : merle ; et les animaux à **poils** et **mamelles** (mammifères) : chat.

Plus deux espèces partagent d'attributs, plus elles sont **proches parentes**. Le chat est plus proche du merle (tous deux ont 4 membres) que de la truite.

## Lire un arbre de parenté
Un **arbre de parenté** représente ces liens. Chaque branche part d'un **ancêtre commun**. Deux espèces sont d'autant plus proches parentes que leur ancêtre commun est **récent** (proche des extrémités des branches).

>! **Exemple** : l'humain et le chimpanzé ont un ancêtre commun plus récent que l'humain et le chat. Cela ne veut pas dire que l'humain descend du chimpanzé : ils descendent tous les deux d'un même ancêtre, aujourd'hui disparu.

> **À retenir** :
> - La cellule est l'unité de base de tous les êtres vivants : membrane, cytoplasme, noyau (sauf chez les bactéries).
> - Les cellules végétales ont en plus une paroi et souvent des chloroplastes.
> - La classification scientifique regroupe les êtres vivants selon les attributs qu'ils partagent : elle montre leurs liens de parenté.
> - Plus l'ancêtre commun de deux espèces est récent, plus elles sont proches parentes.
`,
      textes: {
        arbre: `**Un arbre de parenté**

Chaque point de rencontre de deux branches représente un **ancêtre commun**. Le numéro entre crochets indique l'attribut apparu chez cet ancêtre et transmis à tous ses descendants.

~~~
escargot  truite  grenouille  chat  humain
    |       |        |        |     |
    |       |        |        +--+--+
    |       |        |           | [3]
    |       |        +-----+-----+
    |       |              | [2]
    |       +------+-------+
    |              | [1]
    +------+-------+
           |
 ancêtre commun à tous
~~~

- **[1]** vertèbres
- **[2]** 4 membres
- **[3]** poils et mamelles`,
      },
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on l'unité de base commune à tous les êtres vivants ?", reponses: ["cellule", "la cellule", "les cellules", "cellules"], explication: "Tous les êtres vivants sont faits d'une ou de plusieurs **cellules**." },
        { type: "qcm", question: "Quel élément trouve-t-on dans une cellule végétale mais pas dans une cellule animale ?", choix: ["Le noyau", "La membrane", "La paroi", "Le cytoplasme"], reponse: 2, explication: "La **paroi** (et les chloroplastes) n'existent que chez les cellules végétales. Membrane, cytoplasme et noyau sont présents dans les deux." },
        { type: "vf", question: "Un être vivant peut être formé d'une seule cellule.", reponse: true, explication: "Oui, ce sont les êtres **unicellulaires** : bactéries, levures, paramécies..." },
        { type: "saisie", question: "On observe une cellule avec un oculaire ×10 et un objectif ×40. Quel est le grossissement total ?", reponses: ["400", "×400", "x400", "400 fois", "400x", "400×"], explication: "Grossissement total = 10 × 40 = **400**." },
        { type: "qcm", question: "La chauve-souris vole, mais elle a des poils et allaite ses petits. Dans quel groupe la classe-t-on ?", choix: ["Les oiseaux", "Les insectes", "Les reptiles", "Les mammifères"], reponse: 3, explication: "On classe d'après les attributs : **poils** et **mamelles** font de la chauve-souris un **mammifère**. Voler n'est pas un critère de classification." },
        { type: "vf", question: "En classification scientifique, on peut créer le groupe des « animaux sans pattes ».", reponse: false, explication: "On ne classe **jamais** d'après ce qu'un être vivant **n'a pas**. Le serpent et le ver de terre n'ont pas de pattes, mais ils ne sont pas proches parents (le serpent a des vertèbres, pas le ver)." },
        { type: "qcm", question: "Ranger des animaux en « animaux de la mare » et « animaux de la forêt », c'est faire un classement :", choix: ["écologique", "utilitaire", "scientifique", "phylogénétique"], reponse: 0, explication: "Classer selon le **milieu de vie**, c'est un classement **écologique**. Il est utile, mais il ne montre pas les liens de parenté." },
        { type: "qcm", question: "Le lézard, le chat et la truite : quelle paire est la plus proche parente ?", choix: ["La truite et le chat", "Le lézard et la truite", "Toutes les paires sont aussi proches", "Le lézard et le chat"], reponse: 3, explication: "Les trois ont des vertèbres, mais seuls le **lézard et le chat** ont aussi 4 membres (tétrapodes) : ils partagent plus d'attributs, ils sont plus proches parents." },
        { type: "redaction", question: "Voici des animaux et leurs attributs : la truite (vertèbres, nageoires), la grenouille (vertèbres, 4 membres), le moineau (vertèbres, 4 membres, plumes), le lapin (vertèbres, 4 membres, poils), l'escargot (coquille, pas de vertèbres). 1) Réalise une classification en groupes emboîtés en décrivant les « boîtes ». 2) Le lapin est-il plus proche parent de la grenouille ou de la truite ? Justifie.", corrige: `**1) Groupes emboîtés** (de la plus grande boîte à la plus petite) :
- Boîte « **vertèbres** » (les vertébrés) : truite, grenouille, moineau, lapin.
- À l'intérieur, boîte « **4 membres** » (les tétrapodes) : grenouille, moineau, lapin. La truite reste dans la boîte « vertèbres », en dehors de celle-ci.
- À l'intérieur de la boîte « 4 membres » : une boîte « **plumes** » avec le moineau et une boîte « **poils** » avec le lapin.
- L'**escargot** est en dehors de la boîte « vertèbres » : on le place dans une boîte « coquille ».

**2)** Le lapin partage **deux** attributs avec la grenouille (vertèbres et 4 membres), mais **un seul** avec la truite (vertèbres). Le lapin est donc **plus proche parent de la grenouille** que de la truite : ils sont dans la même boîte « 4 membres ».` },
        { type: "qcm", texte: "arbre", question: "D'après l'arbre, quel animal est le plus proche parent de l'humain ?", choix: ["La grenouille", "Le chat", "La truite", "L'escargot"], reponse: 1, explication: "L'humain et le **chat** ont l'ancêtre commun le plus **récent** (celui qui porte l'attribut n° 3, « poils et mamelles ») : ce sont tous les deux des mammifères." },
        { type: "qcm", texte: "arbre", question: "D'après l'arbre, la grenouille est-elle plus proche parente de la truite ou de l'humain ?", choix: ["De la truite, car elles vivent toutes les deux dans l'eau", "Des deux de la même façon", "De l'humain, car leur ancêtre commun est plus récent", "D'aucun des deux"], reponse: 2, explication: "La grenouille et l'humain partagent un ancêtre commun qui avait déjà **4 membres** ; cet ancêtre est plus **récent** que celui qu'ils partagent avec la truite. La grenouille est donc plus proche parente de l'humain. Le milieu de vie (l'eau) n'est pas un critère de parenté." },
        { type: "vf", texte: "arbre", question: "D'après cet arbre, l'humain descend du chat.", reponse: false, explication: "Un arbre de parenté ne montre jamais qu'une espèce actuelle descend d'une autre espèce actuelle. L'humain et le chat descendent tous les deux d'un **ancêtre commun**, aujourd'hui disparu, qui avait des poils et des mamelles." },
        { type: "saisie", texte: "arbre", question: "Quel attribut, apparu chez l'ancêtre commun n° 2, possèdent à la fois la grenouille, le chat et l'humain ?", reponses: ["4 membres", "quatre membres", "des membres", "membres", "4 pattes", "quatre pattes", "tétrapode", "tétrapodes"], explication: "Ils ont **4 membres** : ce sont des **tétrapodes**. La truite et l'escargot, en dehors de ce groupe, n'en ont pas." },
      ],
    },
    {
      id: "biodiversite-fossiles",
      titre: "La biodiversité d'aujourd'hui et du passé",
      theme: "Le vivant, sa diversité et les fonctions qui le caractérisent",
      cours: `
## Qu'est-ce qu'une espèce ?
Une **espèce** est un ensemble d'êtres vivants qui se **ressemblent** et qui peuvent se **reproduire entre eux** en donnant des descendants eux-mêmes capables de se reproduire (fertiles).

>! **Exemple** : le cheval et l'âne peuvent avoir un petit, le mulet, mais le mulet est presque toujours **stérile**. Le cheval et l'âne sont donc deux espèces différentes.

## La diversité à l'intérieur d'une espèce
Les individus d'une même espèce ne sont pas tous identiques : c'est la **diversité intraspécifique**. Tous les humains appartiennent à la même espèce, *Homo sapiens*, mais leurs yeux, leurs cheveux, leur taille sont différents. Tous les chiens sont de la même espèce, du chihuahua au saint-bernard.

Pour décider si des individus sont de la même espèce, il ne suffit donc pas de regarder leur apparence : c'est la **capacité à se reproduire entre eux** qui compte.

## La biodiversité
La **biodiversité**, c'est la diversité du vivant : diversité des **espèces**, des **individus** dans une espèce, et des **milieux de vie**. Pour **identifier** une espèce, on utilise une **clé de détermination** : on répond à une suite de questions à deux choix (« a-t-il des ailes ? oui / non ») jusqu'à trouver son nom.

>! **Identifier n'est pas classer** : la clé de détermination sert à trouver le **nom** d'un être vivant ; la classification sert à montrer ses **liens de parenté**.

## Les fossiles, témoins de la biodiversité passée
Un **fossile** est un reste (os, coquille, dent) ou une trace (empreinte de pas, de feuille) d'un être vivant ayant vécu il y a très longtemps, conservé dans une roche. Les fossiles montrent que **la biodiversité a changé** au cours de l'histoire de la Terre : des espèces sont apparues, d'autres ont disparu.

Grâce aux fossiles trouvés dans un lieu, les scientifiques **reconstituent le paysage du passé** (paléoenvironnement). Par exemple, des coraux et des coquillages fossiles dans les roches d'une région aujourd'hui loin de la mer montrent qu'il y avait autrefois une mer chaude à cet endroit.

## Le temps long
La Terre s'est formée il y a environ **4,6 milliards d'années**. Les premières traces de vie ont plus de **3,5 milliards d'années**. L'espèce humaine actuelle n'existe que depuis environ **300 000 ans**. À l'échelle de l'histoire de la Terre, l'être humain est arrivé « à la dernière seconde ».

>! **Pour se représenter le temps long** : si l'histoire de la Terre durait une journée de 24 heures, notre espèce apparaîtrait seulement dans les 6 dernières secondes avant minuit.

## Les crises biologiques
À plusieurs moments, un très grand nombre d'espèces ont disparu en peu de temps (à l'échelle géologique) : ce sont les **crises biologiques** (extinctions de masse). On en compte **cinq grandes**. La plus importante a eu lieu il y a environ **252 millions d'années** : la grande majorité des espèces marines a disparu. La plus célèbre a eu lieu il y a environ **66 millions d'années** : les dinosaures (sauf les oiseaux, qui en descendent : on parle donc des dinosaures « **non aviens** », c'est-à-dire autres que les oiseaux) et les ammonites ont disparu. Après chaque crise, de nouvelles espèces se sont diversifiées : après la disparition des dinosaures, les mammifères se sont beaucoup diversifiés.

> **À retenir** :
> - Une espèce : des individus qui se ressemblent et peuvent se reproduire entre eux avec des descendants fertiles.
> - Les individus d'une même espèce sont différents : c'est la diversité intraspécifique.
> - La clé de détermination sert à identifier ; la classification sert à établir les parentés.
> - Les fossiles montrent que la biodiversité a changé ; des crises biologiques ont fait disparaître de nombreuses espèces (il y a 66 millions d'années : les dinosaures non aviens).
`,
      textes: {
        cle: `**Clé de détermination de quelques petits animaux du sol**

Lis la question 1, choisis la réponse qui correspond à ton animal et va là où la flèche t'envoie.

- **1.** L'animal a-t-il des pattes ? Non → va en 2. Oui → va en 3.
- **2.** Il a une coquille → **escargot**. Il n'a pas de coquille et son corps est formé d'anneaux → **ver de terre**.
- **3.** Il a 6 pattes → va en 4. Il a plus de 6 pattes → va en 5.
- **4.** Son dos est recouvert de deux ailes dures (élytres) → **carabe**. Il n'a pas d'ailes → **fourmi ouvrière**.
- **5.** Il a 8 pattes → **araignée**. Il a plus de 8 pattes → va en 6.
- **6.** Il a 14 pattes → **cloporte**. Il a plus de 30 pattes → **iule** (un mille-pattes).`,
      },
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on le reste ou la trace d'un être vivant du passé conservé dans une roche ?", reponses: ["fossile", "un fossile", "fossiles", "des fossiles"], explication: "Un **fossile** peut être un os, une coquille, une dent ou une simple empreinte." },
        { type: "vf", question: "Un chihuahua et un saint-bernard appartiennent à deux espèces différentes.", reponse: false, explication: "Malgré leurs différences, ce sont deux chiens de la **même espèce** : ils peuvent avoir ensemble des petits fertiles. C'est un exemple de **diversité intraspécifique**." },
        { type: "qcm", question: "À quoi sert une clé de détermination ?", choix: ["À établir des liens de parenté", "À identifier le nom d'un être vivant", "À dater un fossile", "À compter les espèces d'un milieu"], reponse: 1, explication: "La clé de détermination permet de **trouver le nom** d'un être vivant grâce à une suite de questions. Les liens de parenté s'établissent avec la classification." },
        { type: "qcm", question: "Il y a combien de temps environ les dinosaures (non aviens) ont-ils disparu ?", choix: ["6 000 ans", "66 000 ans", "66 millions d'années", "4,6 milliards d'années"], reponse: 2, explication: "Ils ont disparu il y a environ **66 millions d'années**, lors d'une crise biologique. 4,6 milliards d'années, c'est l'âge de la Terre." },
        { type: "vf", question: "Les êtres humains et les dinosaures géants ont vécu à la même époque.", reponse: false, explication: "Les dinosaures non aviens ont disparu il y a 66 millions d'années ; notre espèce n'existe que depuis environ 300 000 ans. Ils ne se sont **jamais rencontrés**." },
        { type: "qcm", question: "On trouve des fossiles de coraux dans une carrière du Jura. Que peut-on en déduire ?", choix: ["Les coraux vivent dans les montagnes", "Le Jura a toujours été une montagne", "Il y avait autrefois une mer chaude à cet endroit", "Il faisait très froid dans le Jura"], reponse: 2, explication: "Les coraux vivent dans des **mers chaudes et peu profondes**. Leurs fossiles montrent qu'une telle mer existait autrefois à cet endroit : c'est la reconstitution d'un **paléoenvironnement**." },
        { type: "saisie", question: "Comment appelle-t-on une période où un très grand nombre d'espèces disparaissent en peu de temps ? (deux mots)", reponses: ["crise biologique", "une crise biologique", "crises biologiques", "extinction de masse", "extinctions de masse", "extinction massive"], explication: "C'est une **crise biologique** (ou extinction de masse). On en compte cinq grandes dans l'histoire de la Terre." },
        { type: "qcm", question: "Le cheval et l'âne donnent naissance au mulet, presque toujours stérile. On en conclut que :", choix: ["le cheval et l'âne sont deux espèces différentes", "le mulet est une nouvelle espèce", "le cheval et l'âne sont de la même espèce", "le mulet est un fossile"], reponse: 0, explication: "Leurs descendants ne sont **pas fertiles** : le cheval et l'âne appartiennent donc à **deux espèces différentes**." },
        { type: "redaction", question: "Explique, en t'appuyant sur des exemples, pourquoi on dit que la biodiversité a changé au cours de l'histoire de la Terre.", corrige: `Les **fossiles** montrent que les êtres vivants du passé n'étaient pas les mêmes qu'aujourd'hui.

- **Des espèces ont disparu** : par exemple, les ammonites et les dinosaures non aviens, qui ont disparu il y a environ 66 millions d'années, lors d'une **crise biologique**. On ne les connaît que par leurs fossiles.
- **Des espèces sont apparues** : notre espèce, *Homo sapiens*, n'existe que depuis environ 300 000 ans ; les mammifères se sont beaucoup diversifiés après la disparition des dinosaures.
- **Les milieux ont changé** : des fossiles de coraux dans des régions aujourd'hui éloignées de la mer montrent qu'il y avait autrefois une mer chaude à ces endroits.

> Conclusion : la biodiversité n'est pas figée ; elle se transforme sur des durées très longues, de l'ordre de millions d'années.` },
        { type: "qcm", texte: "cle", question: "Avec la clé : un animal sans pattes, sans coquille, dont le corps est formé d'anneaux. Qui est-ce ?", choix: ["Un iule", "Un escargot", "Un cloporte", "Un ver de terre"], reponse: 3, explication: "Question 1 : pas de pattes → question 2. Pas de coquille, corps en anneaux → **ver de terre**." },
        { type: "saisie", texte: "cle", question: "Avec la clé : un animal a 8 pattes. Quel est son nom ?", reponses: ["araignée", "une araignée", "l'araignée"], explication: "1 : il a des pattes → 3 : plus de 6 pattes → 5 : 8 pattes → **araignée**. Attention : l'araignée n'est pas un insecte (les insectes ont 6 pattes)." },
        { type: "qcm", texte: "cle", question: "Léo trouve sous une pierre un petit animal gris à 14 pattes. Quel chemin suit-il dans la clé ?", choix: ["1 → 3 → 5 → 6 : c'est un cloporte", "1 → 2 : c'est un ver de terre", "1 → 3 → 4 : c'est une fourmi ouvrière", "1 → 3 → 5 : c'est une araignée"], reponse: 0, explication: "1 : il a des pattes → 3 : plus de 6 pattes → 5 : plus de 8 pattes → 6 : 14 pattes → **cloporte**." },
        { type: "vf", texte: "cle", question: "Cette clé de détermination montre que le carabe et la fourmi sont proches parents.", reponse: false, explication: "Une clé de détermination sert seulement à **identifier** (trouver le nom). Ce sont les attributs partagés, rangés dans une **classification**, qui montrent les liens de parenté. (Le carabe et la fourmi sont d'ailleurs tous deux des insectes, mais ce n'est pas la clé qui le prouve.)" },
        { type: "qcm", question: "Quel ordre va de l'événement le plus ancien au plus récent ?", choix: ["Premières traces de vie → formation de la Terre → disparition des dinosaures non aviens → apparition d'*Homo sapiens*", "Formation de la Terre → premières traces de vie → disparition des dinosaures non aviens → apparition d'*Homo sapiens*", "Formation de la Terre → disparition des dinosaures non aviens → premières traces de vie → apparition d'*Homo sapiens*", "Formation de la Terre → premières traces de vie → apparition d'*Homo sapiens* → disparition des dinosaures non aviens"], reponse: 1, explication: "Formation de la Terre : **4,6 milliards d'années** ; premières traces de vie : plus de **3,5 milliards d'années** ; disparition des dinosaures non aviens : **66 millions d'années** ; apparition d'*Homo sapiens* : environ **300 000 ans**." },
      ],
    },
    {
      id: "alimentation-micro-organismes",
      titre: "Alimentation, micro-organismes et conservation des aliments",
      theme: "Le vivant, sa diversité et les fonctions qui le caractérisent",
      cours: `
## Pourquoi manger ?
Les aliments apportent à ton corps :
- de la **matière** pour grandir et réparer tes organes ;
- de l'**énergie** pour bouger, garder ton corps à 37 °C, faire fonctionner ton cerveau.

Tes **besoins** dépendent de ton âge, de ta taille et de ton **activité physique**. Une alimentation favorable à la santé est **équilibrée** et **variée** : les **apports** doivent correspondre aux **besoins**.

| Famille d'aliments | Rôle principal | À quelle fréquence ? |
|---|---|---|
| fruits et légumes | vitamines, fibres, minéraux | à chaque repas |
| féculents (pain, pâtes, riz, légumes secs) | énergie | à chaque repas |
| produits laitiers | calcium pour les os | chaque jour |
| viande, poisson, œufs | matériaux de construction (protéines) | une fois par jour environ, en petite portion (poisson deux fois par semaine) |
| matières grasses | énergie, certaines vitamines | en petite quantité |
| produits sucrés | plaisir, énergie rapide | à limiter |
| eau | seule boisson indispensable | à volonté |

>! **Lire une étiquette** : la liste des ingrédients est rangée du plus abondant au moins abondant. Le tableau nutritionnel indique, pour 100 g, l'énergie, les glucides (dont les sucres), les lipides (graisses), les protéines et le sel.

L'alimentation dépend aussi des **cultures** et des **régions** du monde : riz en Asie, maïs en Amérique centrale, blé en Europe... et de la façon dont les aliments sont **produits** (agriculture, élevage, pêche, industrie).

## Les micro-organismes
Les **micro-organismes** sont des êtres vivants **trop petits pour être vus à l'œil nu** : bactéries, levures, certaines moisissures. Ils sont partout : dans l'air, le sol, l'eau, sur ta peau, dans ton intestin. La plupart sont **inoffensifs** ou même **utiles** ; quelques-uns sont **pathogènes** (ils rendent malade).

## Des micro-organismes pour fabriquer des aliments
Certains micro-organismes transforment les aliments par **fermentation** :

| Aliment | Micro-organisme | Ce qu'il fait |
|---|---|---|
| **yaourt** | bactéries lactiques (ferments) | transforment le sucre du lait en acide lactique : le lait devient acide et épais |
| **pain** | levure de boulanger | produit un gaz, le dioxyde de carbone, qui fait gonfler la pâte |
| fromage, choucroute, vinaigre | bactéries, moisissures, levures | |

>! **Fabriquer un yaourt** : mélange du lait et un peu de yaourt (qui contient les bactéries), puis laisse le mélange au chaud, vers **40 à 45 °C**, pendant plusieurs heures. Si tu le laisses au réfrigérateur, ou si tu chauffes trop (les bactéries meurent), le lait ne prend pas : la **température** est un paramètre important. Avec un **capteur** de pH (un appareil qui mesure l'acidité), on mesure que le mélange devient de plus en plus **acide** au cours du temps.

## Conserver les aliments
Les micro-organismes peuvent aussi **abîmer** les aliments et provoquer des **intoxications alimentaires**. Pour conserver les aliments, on empêche les micro-organismes de se multiplier, ou on les tue :

| Technique | Principe |
|---|---|
| **réfrigération** (0 à 4 °C) et **congélation** (−18 °C) | le froid **ralentit** ou arrête leur multiplication, sans les tuer |
| **stérilisation**, conserves (appertisation) | une forte chaleur **tue** les micro-organismes, puis la boîte est fermée hermétiquement |
| **pasteurisation** | un chauffage modéré tue la plupart des micro-organismes |
| **salaison**, séchage, sucre (confitures) | on retire l'eau dont les micro-organismes ont besoin |
| mise sous vide | on retire l'air |

>! **Erreur fréquente** : un aliment décongelé ne doit **pas** être recongelé, car le froid n'a pas tué les micro-organismes : ils se multiplient à nouveau pendant la décongélation.

**Règles d'hygiène** : se laver les mains avant de cuisiner et de manger, respecter la **date limite de consommation**, ne pas casser la chaîne du froid.

> **À retenir** :
> - Les aliments apportent de la matière et de l'énergie ; les apports doivent correspondre aux besoins.
> - Les micro-organismes sont invisibles à l'œil nu ; certains fabriquent des aliments par fermentation (yaourt, pain).
> - Le froid ralentit les micro-organismes ; la chaleur forte (stérilisation) les tue ; le sel, le sucre, le séchage les privent d'eau.
`,
      textes: {
        etiquette: `**Étiquette d'un paquet de céréales au chocolat**

*Ingrédients* : flocons de blé complet (60 %), sucre (22 %), huile de tournesol, cacao maigre en poudre (5 %), sel.

| Valeurs nutritionnelles | pour 100 g |
|---|---|
| énergie | 1 600 kJ (380 kcal) |
| lipides (graisses) | 8 g |
| glucides | 70 g |
| dont sucres | 25 g |
| fibres | 7 g |
| protéines | 9 g |
| sel | 0,6 g |`,
        yaourt: `**Suivi d'une fabrication de yaourt avec un capteur de pH**

Une classe place un mélange de lait et de yaourt à 42 °C et mesure le pH toutes les heures avec un capteur. Plus le pH est **petit**, plus le mélange est **acide**.

| Temps (h) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| pH | 6,7 | 6,5 | 6,0 | 5,2 | 4,8 | 4,6 | 4,5 |`,
      },
      exercices: [
        { type: "qcm", question: "Quel micro-organisme fait gonfler la pâte à pain ?", choix: ["Une moisissure", "Un virus", "Une bactérie lactique", "La levure"], reponse: 3, explication: "La **levure** de boulanger produit du **dioxyde de carbone** : ce gaz forme des bulles qui font gonfler la pâte." },
        { type: "vf", question: "Tous les micro-organismes sont dangereux pour la santé.", reponse: false, explication: "La plupart sont **inoffensifs** ou **utiles** (fabrication du yaourt, du pain, du fromage ; bactéries de l'intestin). Seuls quelques-uns sont pathogènes." },
        { type: "saisie", question: "Comment s'appelle la transformation d'un aliment par des micro-organismes, comme le lait qui devient yaourt ?", reponses: ["fermentation", "la fermentation", "une fermentation"], explication: "C'est la **fermentation** : les bactéries lactiques transforment le sucre du lait en acide lactique." },
        { type: "qcm", question: "Pourquoi met-on les aliments au réfrigérateur ?", choix: ["Le froid tue tous les micro-organismes", "Le froid ralentit la multiplication des micro-organismes", "Le froid ajoute des vitamines", "Le froid retire l'eau des aliments"], reponse: 1, explication: "Le froid **ralentit** la multiplication des micro-organismes, **sans les tuer**. C'est pour cela qu'un aliment se garde plus longtemps, mais pas indéfiniment, au réfrigérateur." },
        { type: "qcm", question: "Quelle technique de conservation tue les micro-organismes par une forte chaleur ?", choix: ["La congélation", "La stérilisation", "La salaison", "La mise sous vide"], reponse: 1, explication: "La **stérilisation** (conserves) utilise une forte chaleur qui tue les micro-organismes, puis la boîte est fermée hermétiquement." },
        { type: "vf", question: "Le sel et le sucre permettent de conserver les aliments car ils privent les micro-organismes d'eau.", reponse: true, explication: "Le sel (jambon, poisson salé) et le sucre (confitures) « attirent » l'eau : les micro-organismes n'en ont plus assez pour se multiplier." },
        { type: "qcm", question: "Quelle boisson est la seule indispensable au corps ?", choix: ["Le jus de fruit", "Le soda", "Le lait", "L'eau"], reponse: 3, explication: "L'**eau** est la seule boisson indispensable. Les sodas et même les jus de fruits contiennent beaucoup de sucre." },
        { type: "saisie", question: "Vers quelle température (en °C) faut-il laisser le mélange de lait et de yaourt pour fabriquer un yaourt ? (donne une valeur entre 40 et 45)", reponses: ["40", "41", "42", "43", "44", "45", "40 °C", "42 °C", "45 °C", "40 degrés", "41 degrés", "42 degrés", "43 degrés", "44 degrés", "45 degrés"], explication: "Les bactéries lactiques se développent bien vers **40 à 45 °C**. Trop froid, elles sont ralenties ; trop chaud, elles meurent." },
        { type: "redaction", question: "Une classe fabrique des yaourts. Pot A : lait + yaourt, placé à 42 °C pendant 8 h. Pot B : lait seul, à 42 °C pendant 8 h. Pot C : lait + yaourt, au réfrigérateur (4 °C) pendant 8 h. Seul le pot A est devenu épais. Explique ces résultats.", corrige: `**Pot A** : il contient du lait, des **bactéries lactiques** (apportées par le yaourt) et il est à une bonne **température** (42 °C). Les bactéries se multiplient et réalisent une **fermentation** : elles transforment le sucre du lait en acide lactique, ce qui épaissit le lait. On obtient un yaourt.

**Pot B** : il n'y a pas de bactéries lactiques ajoutées. Même à bonne température, il n'y a pas de fermentation : le lait reste liquide. Cela montre que **les bactéries sont indispensables**.

**Pot C** : il y a des bactéries, mais il fait trop **froid** : leur activité est très ralentie. En 8 h, le lait n'a pas eu le temps de devenir yaourt. Cela montre que **la température est un paramètre important**.

> Conclusion : pour fabriquer un yaourt, il faut du lait, des bactéries lactiques et une température d'environ 40 à 45 °C. On ne fait varier qu'un seul paramètre à la fois par rapport au pot A, qui sert de témoin.` },
        { type: "qcm", texte: "etiquette", question: "D'après l'étiquette, quel est l'ingrédient le plus abondant dans ces céréales ?", choix: ["Le sucre", "Le cacao", "Les flocons de blé complet", "L'huile de tournesol"], reponse: 2, explication: "La liste des ingrédients est rangée **du plus abondant au moins abondant** : les **flocons de blé complet** (60 %) viennent en premier. Le sucre arrive juste après, avec 22 %." },
        { type: "saisie", texte: "etiquette", question: "Un bol contient 40 g de ces céréales. Combien de grammes de sucres apporte-t-il ?", reponses: ["10", "10 g", "10 grammes"], explication: "100 g de céréales contiennent 25 g de sucres. 40 g, c'est 0,4 fois 100 g : 25 × 0,4 = **10 g** de sucres, soit l'équivalent de 2 morceaux de sucre." },
        { type: "qcm", texte: "yaourt", question: "D'après le tableau, comment évolue le mélange au cours de la fabrication du yaourt ?", choix: ["Il devient de moins en moins acide", "Il devient de plus en plus acide", "Son acidité ne change pas", "Il devient acide puis redevient neutre"], reponse: 1, explication: "Le pH **diminue** de 6,7 à 4,5 : le mélange devient de plus en plus **acide**. Ce sont les bactéries lactiques qui transforment le sucre du lait en **acide lactique**." },
        { type: "qcm", texte: "yaourt", question: "D'après le tableau, pendant quelle heure le pH baisse-t-il le plus ?", choix: ["Entre 0 h et 1 h", "Entre 5 h et 6 h", "Entre 2 h et 3 h", "Entre 4 h et 5 h"], reponse: 2, explication: "Entre 2 h et 3 h, le pH passe de 6,0 à 5,2 : il baisse de **0,8**, plus que pendant les autres heures (0,2 ; 0,5 ; 0,4 ; 0,2 ; 0,1). C'est le moment où les bactéries, devenues nombreuses, produisent le plus d'acide." },
      ],
    },
    {
      id: "pollinisation",
      titre: "De la fleur au fruit : la pollinisation",
      theme: "Le vivant, sa diversité et les fonctions qui le caractérisent",
      cours: `
## Le cycle de vie d'une plante à fleurs
Une plante à fleurs suit un **cycle de vie** : graine → germination → plantule → plante adulte → **fleurs** → **fruits** contenant des **graines** → nouvelle plante. La fleur est l'organe de la **reproduction**.

## Les parties de la fleur
De l'extérieur vers l'intérieur :
- les **sépales** (souvent verts) protègent le bouton ;
- les **pétales** (souvent colorés) attirent les insectes ;
- les **étamines** produisent le **pollen** (poudre souvent jaune) : ce sont les organes reproducteurs **mâles** ;
- le **pistil**, au centre, est l'organe reproducteur **femelle**. Sa partie gonflée, l'**ovaire**, contient les **ovules**. Son sommet collant s'appelle le **stigmate**.

## La pollinisation
La **pollinisation** est le **transport du pollen** des étamines jusqu'au pistil d'une fleur de la même espèce. Ce transport est fait :
- par des **animaux**, surtout des **insectes** (abeilles, bourdons, papillons, mouches) qui viennent boire le nectar et se couvrent de pollen ;
- ou par le **vent** (maïs, blé, graminées des prairies, noisetier).

## Après la pollinisation : de la fleur au fruit
Après la pollinisation a lieu la **fécondation** : le grain de pollen déposé sur le stigmate forme un long **tube** qui descend dans le pistil jusqu'à un ovule. La cellule reproductrice mâle apportée par le pollen s'unit alors à la cellule reproductrice femelle contenue dans l'ovule. Ensuite :
- les pétales et les étamines **fanent** et tombent ;
- l'**ovaire** grossit et se transforme en **fruit** ;
- les **ovules** se transforment en **graines**.

>! **Expérience** : sur un cerisier, on enferme quelques branches fleuries dans un sac en tissu fin qui empêche les insectes de passer, et on laisse les autres libres. Résultat : les fleurs enfermées donnent **très peu ou pas de cerises**, les autres en donnent beaucoup. Conclusion : la pollinisation par les insectes est nécessaire à la formation des fruits.

>! **Erreur fréquente** : pour un scientifique, un **fruit** est ce qui provient de l'ovaire et contient les graines. La tomate, le poivron, la noisette et le haricot vert sont donc des fruits !

## Une coopération entre plantes et insectes
La pollinisation est une **coopération** (on dit aussi une interaction **mutualiste**) : les **deux partenaires y gagnent**. L'insecte se nourrit de nectar et de pollen ; la plante est pollinisée et peut se reproduire.

## Les pollinisateurs sont menacés
Selon un rapport scientifique international (IPBES, 2016), plus des trois quarts des principales cultures alimentaires du monde dépendent, au moins en partie, des animaux pollinisateurs : fruits, légumes, colza, café, cacao...

Or le nombre de pollinisateurs **diminue** à cause de la destruction des haies et des prairies fleuries, des maladies, du réchauffement climatique et de l'usage de **pesticides** (produits qui tuent les « nuisibles », mais aussi les insectes utiles). Moins de pollinisateurs, c'est **moins de fruits** dans certaines cultures.

Pour les protéger : planter des haies et des fleurs variées, limiter les pesticides, installer des hôtels à insectes.

> **À retenir** :
> - La pollinisation est le transport du pollen des étamines vers le pistil, par les insectes ou le vent.
> - Après la pollinisation et la fécondation, l'ovaire devient le fruit et les ovules deviennent les graines.
> - Plantes et insectes pollinisateurs coopèrent : chacun y gagne.
> - La baisse des pollinisateurs (pesticides, perte des fleurs sauvages) menace des cultures.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on le transport du pollen jusqu'au pistil ?", reponses: ["pollinisation", "la pollinisation"], explication: "C'est la **pollinisation**, réalisée par les insectes ou par le vent." },
        { type: "qcm", question: "Quelle partie de la fleur produit le pollen ?", choix: ["Les pétales", "Les étamines", "Le pistil", "Les sépales"], reponse: 1, explication: "Les **étamines** sont les organes mâles de la fleur : elles produisent le pollen." },
        { type: "qcm", question: "Après la pollinisation, en quoi se transforme l'ovaire ?", choix: ["En pétale", "En graine", "En fruit", "En pollen"], reponse: 2, explication: "L'**ovaire** se transforme en **fruit**, et les **ovules** qu'il contient deviennent les **graines**." },
        { type: "vf", question: "Pour un scientifique, la tomate est un fruit.", reponse: true, explication: "La tomate provient de l'ovaire de la fleur et contient des graines : c'est un **fruit**, même si on la cuisine comme un légume." },
        { type: "saisie", question: "Les ovules contenus dans l'ovaire deviennent des... ?", reponses: ["graines", "des graines", "graine", "une graine"], explication: "Les **ovules** deviennent les **graines**, qui pourront donner de nouvelles plantes." },
        { type: "qcm", question: "Pourquoi dit-on que la pollinisation par les abeilles est une coopération ?", choix: ["Parce que seule l'abeille y gagne", "Parce que seule la plante y gagne", "Parce que les deux partenaires y gagnent", "Parce que l'abeille mange la plante"], reponse: 2, explication: "L'abeille obtient de la nourriture (nectar, pollen) et la plante est pollinisée : **les deux y gagnent**, c'est une coopération (interaction mutualiste)." },
        { type: "vf", question: "L'utilisation de certains pesticides peut faire diminuer le nombre d'insectes pollinisateurs.", reponse: true, explication: "Certains **pesticides** tuent aussi les insectes utiles, comme les abeilles. C'est l'une des causes de la baisse des pollinisateurs." },
        { type: "qcm", question: "Dans un verger, le nombre d'abeilles a beaucoup diminué. Quelle conséquence peut-on prévoir ?", choix: ["Plus de feuilles sur les arbres", "Moins de fruits récoltés", "Des fleurs plus grandes", "Plus de graines dans chaque fruit"], reponse: 1, explication: "Moins d'abeilles, c'est moins de fleurs pollinisées, donc **moins de fruits**." },
        { type: "redaction", question: "Un arboriculteur enferme certaines branches fleuries de son pommier dans des sacs en tissu fin que les insectes ne peuvent pas traverser. Les autres branches restent libres. À l'automne, les branches enfermées n'ont presque pas de pommes. 1) Quelle question cherche-t-il à résoudre ? 2) Interprète le résultat. 3) Quel conseil peut-on lui donner ?", corrige: `**1) Question** : les insectes sont-ils nécessaires pour que les fleurs de pommier donnent des pommes ?

**2) Interprétation** : les branches libres, visitées par les insectes, ont donné des pommes ; les branches enfermées, que les insectes ne pouvaient pas atteindre, n'en ont presque pas donné. Les deux groupes de branches ne diffèrent que par la présence des insectes. Donc les **insectes** sont nécessaires : en transportant le **pollen** des étamines jusqu'au pistil, ils réalisent la **pollinisation**. Sans pollinisation, l'ovaire ne se transforme pas en fruit.

**3) Conseil** : il doit favoriser les pollinisateurs dans son verger : planter des haies et des fleurs variées, installer des ruches ou des hôtels à insectes, et éviter les pesticides dangereux pour les abeilles, surtout pendant la floraison.` },
        { type: "qcm", question: "Chez une plante à fleurs, que se passe-t-il juste après la pollinisation ?", choix: ["Le pollen se transforme en fruit", "Le pollen forme un tube jusqu'à un ovule : c'est la fécondation", "Les pétales deviennent des graines", "L'insecte pond ses œufs dans la fleur"], reponse: 1, explication: "Le grain de pollen déposé sur le stigmate forme un **tube** qui descend jusqu'à un ovule : la cellule reproductrice mâle s'unit à la cellule femelle, c'est la **fécondation**. Ensuite l'ovaire devient le fruit et les ovules deviennent les graines." },
      ],
    },
    {
      id: "puberte-reproduction",
      titre: "La puberté et la reproduction humaine",
      theme: "Le vivant, sa diversité et les fonctions qui le caractérisent",
      cours: `
## La puberté : le corps se transforme
La **puberté** est la période où le corps de l'enfant devient un corps d'adulte, **capable de se reproduire**. Elle commence en général entre **8 et 13 ans chez les filles** et entre **9 et 14 ans chez les garçons**. Chacun a son propre rythme : il n'y a pas lieu de s'inquiéter si les changements arrivent plus tôt ou plus tard que chez les copains.

Ces changements sont commandés par des **hormones**, des substances fabriquées par le corps et transportées par le sang.

| Chez les filles et chez les garçons | Plutôt chez les filles | Plutôt chez les garçons |
|---|---|---|
| poussée de croissance, poils (aisselles, pubis), transpiration, boutons possibles | développement des seins, hanches qui s'élargissent, **premières règles** | voix qui mue (devient grave), barbe, épaules qui s'élargissent, **premières éjaculations** |

Il y a aussi des changements de **comportement** et d'émotions : besoin d'autonomie, humeur qui change, intérêt nouveau pour les autres. C'est normal.

## Les appareils reproducteurs
| Appareil reproducteur | Organes et rôles |
|---|---|
| **féminin** | 2 **ovaires** : produisent les **ovules** (cellules reproductrices) ; 2 **trompes** : conduisent l'ovule vers l'utérus, c'est là que peut avoir lieu la fécondation ; **utérus** : accueille et protège le futur bébé ; **vagin** : relie l'utérus à l'extérieur |
| **masculin** | 2 **testicules** : produisent les **spermatozoïdes** (cellules reproductrices) ; **spermiductes** : conduisent les spermatozoïdes ; glandes (prostate, vésicules séminales) : fabriquent le liquide qui forme le **sperme** avec les spermatozoïdes ; **pénis** : permet de déposer le sperme dans le vagin |

À partir de la puberté, les **ovaires** libèrent en général **un ovule environ tous les 28 jours**. Si l'ovule n'est pas fécondé, la paroi de l'utérus, qui s'était épaissie, est éliminée avec un peu de sang : ce sont les **règles**. Les testicules, eux, produisent des spermatozoïdes **en continu**, des millions par jour.

## De la fécondation à la naissance
1. Lors d'un rapport sexuel, des millions de spermatozoïdes sont déposés dans le vagin et remontent vers les trompes.
2. **Fécondation** : un seul spermatozoïde s'unit à l'ovule dans une trompe. Il se forme une **cellule-œuf**. La fécondation a lieu à l'intérieur du corps de la femme : c'est une **fécondation interne**.
3. La cellule-œuf se divise et devient un **embryon**, qui s'installe dans la paroi de l'utérus. À partir du 3e mois de grossesse (après environ 8 semaines de développement), on parle de **fœtus**.
4. Le bébé se développe dans l'utérus pendant environ **9 mois** : l'être humain est **vivipare** (le petit se développe dans le ventre de sa mère, et non dans un œuf pondu).
5. **Les échanges placentaires** : le **placenta**, relié au fœtus par le **cordon ombilical**, permet les échanges avec le sang de la mère. La mère apporte au fœtus le **dioxygène** et les **nutriments** ; le fœtus rejette vers la mère le **dioxyde de carbone** et les **déchets**. Attention : l'alcool, le tabac et certains médicaments passent aussi par le placenta et peuvent nuire au bébé.

## Reproduction et sexualité
La **reproduction** est la fonction biologique qui permet d'avoir des enfants. La **sexualité** humaine est bien plus large : elle a une dimension **biologique**, mais aussi **psycho-émotionnelle** (sentiments, émotions, respect de soi et de l'autre), **sociale** et **juridique** (la loi protège les enfants ; personne n'a le droit de toucher ton corps sans ton accord). Si quelqu'un te met mal à l'aise, parles-en à un adulte de confiance ; tu peux aussi appeler le **119** (Allô Enfance en danger), gratuit, 24 h sur 24.

> **À retenir** :
> - La puberté transforme le corps de l'enfant en corps capable de se reproduire, sous l'effet d'hormones.
> - Ovaires → ovules ; testicules → spermatozoïdes.
> - La fécondation (union d'un ovule et d'un spermatozoïde) a lieu dans une trompe : fécondation interne. Elle forme une cellule-œuf.
> - Le fœtus se développe dans l'utérus pendant 9 mois ; le placenta assure les échanges avec la mère.
> - La sexualité ne se limite pas à la reproduction : elle a aussi des dimensions affectives, sociales et juridiques.
`,
      exercices: [
        { type: "qcm", question: "Quels organes produisent les spermatozoïdes ?", choix: ["Les ovaires", "Les testicules", "L'utérus", "Les trompes"], reponse: 1, explication: "Les **testicules** produisent les spermatozoïdes. Les ovaires produisent les ovules." },
        { type: "saisie", question: "Comment s'appelle la période de la vie où le corps devient capable de se reproduire ?", reponses: ["puberté", "la puberté"], explication: "C'est la **puberté**, qui commence en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons." },
        { type: "vf", question: "La puberté commence exactement au même âge pour tout le monde.", reponse: false, explication: "Chacun a **son propre rythme** : la puberté commence en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons. C'est normal." },
        { type: "qcm", question: "Où a lieu la fécondation chez l'être humain ?", choix: ["Dans une trompe", "Dans le vagin", "Dans l'ovaire", "Dans le placenta"], reponse: 0, explication: "La fécondation a lieu dans une **trompe**. La cellule-œuf descend ensuite vers l'utérus, où elle s'installe." },
        { type: "saisie", question: "Comment s'appelle la cellule formée par l'union d'un ovule et d'un spermatozoïde ?", reponses: ["cellule-œuf", "cellule œuf", "cellule-oeuf", "cellule oeuf", "la cellule-œuf", "œuf", "oeuf"], explication: "C'est la **cellule-œuf** : elle va se diviser pour former l'embryon." },
        { type: "qcm", question: "Quel est le rôle du placenta ?", choix: ["Produire les ovules", "Fabriquer le lait maternel", "Protéger le bébé des chocs uniquement", "Assurer les échanges entre le sang de la mère et celui du fœtus"], reponse: 3, explication: "Le **placenta** permet les **échanges** : la mère apporte dioxygène et nutriments, le fœtus rejette dioxyde de carbone et déchets." },
        { type: "vf", question: "L'être humain est vivipare.", reponse: true, explication: "Le bébé se développe **dans le ventre de sa mère** (dans l'utérus) et naît déjà formé : l'être humain est vivipare." },
        { type: "qcm", question: "Lequel de ces changements de la puberté concerne à la fois les filles et les garçons ?", choix: ["Le développement des seins", "La mue de la voix", "Les règles", "L'apparition des poils sous les aisselles"], reponse: 3, explication: "Les **poils** sous les aisselles et sur le pubis apparaissent chez les filles comme chez les garçons, tout comme la poussée de croissance." },
        { type: "qcm", question: "On déconseille à une femme enceinte de boire de l'alcool. Pourquoi ?", choix: ["L'alcool empêche les règles", "L'alcool bloque le cordon ombilical", "L'alcool passe par le placenta et peut nuire au fœtus", "L'alcool n'a aucun effet sur le fœtus"], reponse: 2, explication: "L'alcool passe du sang de la mère au sang du fœtus **à travers le placenta** et peut gravement perturber son développement. Il est recommandé de ne pas boire d'alcool du tout pendant la grossesse." },
        { type: "redaction", question: "Raconte, en quelques phrases et dans l'ordre, les étapes qui vont de la fécondation à la naissance d'un bébé. Utilise les mots : trompe, cellule-œuf, utérus, placenta, 9 mois.", corrige: `1. Un spermatozoïde rencontre un ovule dans une **trompe** : c'est la **fécondation**. Elle forme une **cellule-œuf**.
2. La cellule-œuf se divise plusieurs fois en descendant vers l'**utérus** : elle devient un **embryon**, qui s'installe dans la paroi de l'utérus.
3. L'embryon grandit et devient un **fœtus**. Il est relié au **placenta** par le cordon ombilical. Grâce au placenta, il reçoit le dioxygène et les nutriments apportés par le sang de sa mère, et rejette son dioxyde de carbone et ses déchets.
4. Après environ **9 mois** de grossesse, le bébé est prêt à vivre hors du ventre de sa mère : c'est l'**accouchement**, la naissance.` },
      ],
    },
    {
      id: "objets-techniques",
      titre: "Les objets techniques : fonctions, matériaux, cycle de vie et programmation",
      theme: "Les objets techniques au cœur de la société",
      cours: `
## Objet technique ou objet naturel ?
Un **objet technique** est fabriqué par l'être humain pour répondre à un **besoin** : se déplacer, se nourrir, se chauffer, communiquer, se soigner... Un **objet naturel** existe sans intervention humaine (un caillou, une branche, un coquillage).

>! **Exemple** : un galet ou une branche tombée sont des objets naturels ; un vélo, une chaise ou un taille-crayon sont des objets techniques.

## Besoin, fonction et solution
- Le **besoin** : ce que l'utilisateur veut faire (par exemple, s'éclairer pour lire le soir).
- Les **fonctions techniques** : ce que l'objet doit faire pour répondre au besoin (produire de la lumière, être allumé et éteint, être alimenté en énergie, tenir debout).
- Les **solutions technologiques** : les éléments choisis pour réaliser chaque fonction.

| Fonction technique (lampe de bureau) | Solution technologique |
|---|---|
| produire de la lumière | ampoule à DEL |
| allumer et éteindre | interrupteur |
| transporter l'énergie électrique | cordon électrique |
| orienter la lumière | bras articulé |
| tenir stable sur le bureau | socle lourd |

## Choisir les matériaux
On choisit un matériau selon ses **propriétés** (ce sont celles que tu as étudiées en sciences) :
- **conducteur électrique** (cuivre) pour les fils, **isolant** (plastique) pour leur gaine ;
- **isolant thermique** (laine de verre, polystyrène) pour isoler une maison ;
- **léger et solide** (aluminium) pour un cadre de vélo ;
- **transparent** (verre) pour une fenêtre ;
- **imperméable** pour une veste de pluie.

Une **contrainte** est une condition que l'objet doit respecter : poids, prix, autonomie, imperméabilité, sécurité, respect de l'environnement...

## L'évolution des objets
Les besoins des humains changent peu (se déplacer, s'éclairer...), mais les **objets évoluent** grâce aux inventions et aux progrès techniques : pour s'éclairer, on est passé de la bougie à la lampe à huile, puis à la lampe à incandescence, et aujourd'hui à la DEL, qui consomme beaucoup moins d'énergie.

## Le cycle de vie d'un objet
Un objet a un **cycle de vie** :
1. **extraction** des matières premières (minerai, pétrole, bois...) ;
2. **fabrication** dans une usine ;
3. **transport** et vente ;
4. **utilisation** (qui consomme parfois de l'énergie) ;
5. **fin de vie** : réparation, réutilisation, **recyclage** ou mise en décharge.

Chaque étape consomme de l'énergie et des ressources. Pour protéger l'environnement, on peut choisir des matériaux recyclables, fabriquer des objets **réparables** et qui durent longtemps.

## Les objets programmables
Certains objets contiennent un **programme** : un robot, un éclairage automatique, une alarme.
- Les **capteurs** prennent des informations (détecteur d'obstacle, capteur de lumière, de température, bouton).
- La **carte programmable** traite ces informations grâce au programme. Capteurs et carte programmable forment la **chaîne d'information**.
- Les **actionneurs** agissent (moteur, lampe, buzzer) : ils forment la **chaîne d'action**.

>! **Exemple : l'éclairage public intelligent** : le détecteur de présence (capteur) repère un piéton → le boîtier de commande (programme) décide → le lampadaire (actionneur) s'allume.

## Programmer avec des blocs
Un **algorithme** est une suite d'instructions dans un ordre précis. On le traduit en **programme**, par exemple avec des blocs (Scratch). Les blocs les plus utiles :
- « **répéter** ... fois » : une boucle ;
- « **si** ... **alors** ... **sinon** ... » : une condition ;
- « **attendre** ... secondes ».

~~~
quand le drapeau est cliqué
répéter indéfiniment
   si obstacle détecté alors
      tourner à droite de 90 degrés
   sinon
      avancer de 10 pas
~~~

En langage naturel : « Le robot avance sans arrêt ; dès qu'il détecte un obstacle, il tourne à droite, puis il repart. »

> **À retenir** :
> - Un objet technique répond à un besoin ; il réalise des fonctions techniques grâce à des solutions technologiques.
> - Les matériaux sont choisis selon leurs propriétés et les contraintes.
> - Cycle de vie : extraction, fabrication, transport, utilisation, fin de vie (recyclage).
> - Objet programmable : capteurs (informations) → programme (traitement) → actionneurs (action).
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces objets est un objet naturel ?", choix: ["Une chaise", "Un galet de rivière", "Un stylo", "Une bouteille en verre"], reponse: 1, explication: "Le **galet** s'est formé sans intervention humaine. Les autres sont des objets techniques, fabriqués pour répondre à un besoin." },
        { type: "vf", question: "Le cordon d'une lampe de bureau a pour fonction de transporter l'énergie électrique.", reponse: true, explication: "Le cordon électrique est la **solution technologique** qui réalise la fonction « transporter l'énergie électrique » jusqu'à l'ampoule." },
        { type: "qcm", question: "Pour fabriquer la gaine qui entoure un fil électrique, on choisit un matériau :", choix: ["attiré par un aimant", "conducteur électrique", "isolant électrique", "transparent"], reponse: 2, explication: "La gaine doit empêcher le courant de passer dans la main de l'utilisateur : il faut un **isolant électrique**, comme le plastique." },
        { type: "saisie", question: "Comment appelle-t-on un composant qui prend une information, comme un détecteur d'obstacle ?", reponses: ["capteur", "un capteur", "capteurs"], explication: "Un **capteur** prend une information. Les **actionneurs** (moteur, lampe, buzzer) agissent." },
        { type: "qcm", question: "Dans un robot, quel composant est un actionneur ?", choix: ["Le moteur", "Le détecteur d'obstacle", "Le capteur de lumière", "Le bouton poussoir"], reponse: 0, explication: "Le **moteur** agit : il fait avancer le robot. Les trois autres prennent des informations : ce sont des capteurs." },
        { type: "qcm", question: "Quelle étape du cycle de vie d'un objet vient juste avant sa fabrication ?", choix: ["L'extraction des matières premières", "Le recyclage", "Le transport vers le magasin", "L'utilisation"], reponse: 0, explication: "Il faut d'abord **extraire les matières premières** (minerai, pétrole, bois) avant de pouvoir fabriquer l'objet." },
        { type: "vf", question: "Le bloc « répéter 4 fois » permet d'exécuter plusieurs fois les mêmes instructions.", reponse: true, explication: "C'est une **boucle** : les instructions placées dans le bloc sont exécutées 4 fois de suite." },
        { type: "saisie", question: "Un robot exécute : « répéter 4 fois : avancer de 50 pas, tourner à droite de 90 degrés ». Quelle figure dessine-t-il ?", reponses: ["carré", "un carré"], explication: "4 côtés égaux et 4 angles droits (4 × 90° = 360°) : le robot dessine un **carré**." },
        { type: "redaction", question: "On veut une veilleuse qui s'allume toute seule quand la chambre devient sombre. 1) Quel est le besoin ? 2) Nomme le capteur et l'actionneur. 3) Écris l'algorithme en langage naturel avec une condition « si... alors... sinon ».", corrige: `**1) Besoin** : avoir un peu de lumière dans la chambre la nuit, sans avoir à allumer soi-même (pour se rassurer ou se déplacer sans se cogner).

**2)** Le **capteur** est un capteur de lumière (par exemple une photorésistance) : il mesure la luminosité. L'**actionneur** est la lampe (une DEL) : elle produit la lumière.

**3) Algorithme** :
~~~
répéter indéfiniment
   si la luminosité est faible alors
      allumer la DEL
   sinon
      éteindre la DEL
~~~
Le programme vérifie sans arrêt la luminosité : quand il fait sombre, la veilleuse s'allume ; quand il fait clair, elle s'éteint.` },
      ],
    },
    {
      id: "terre-vie-climat",
      titre: "La Terre, une planète habitable, et le réchauffement climatique",
      theme: "La Terre, une planète peuplée par des êtres vivants",
      cours: `
## Pourquoi y a-t-il de la vie sur Terre ?
La Terre est la **3e planète** du système solaire, à environ **150 millions de km** du Soleil. C'est la seule planète connue qui abrite la vie, grâce à trois conditions :
- de l'**eau liquide** : la Terre n'est ni trop près ni trop loin du Soleil ;
- une **température compatible avec la vie** : en moyenne environ **15 °C** à la surface ;
- une **atmosphère** : elle contient du dioxygène, filtre une partie des rayons dangereux du Soleil (couche d'ozone) et retient la chaleur grâce à l'**effet de serre naturel**.

| Planète | Position | Température moyenne en surface | Eau liquide en surface ? |
|---|---|---|---|
| Vénus | 2e | environ 460 °C | non (trop chaud) |
| Terre | 3e | environ 15 °C | oui |
| Mars | 4e | environ −60 °C | non (trop froid) |

## Météo et climat
- La **météo** décrit le temps qu'il fait **à un endroit, à un moment donné** (aujourd'hui, demain) : température, pluie, vent.
- Le **climat** est la **moyenne** du temps qu'il fait dans une **région**, calculée sur au moins **30 ans**.

>! **Exemple** : « Il a neigé à Marseille ce matin » : c'est de la météo. « À Marseille, les étés sont chauds et secs » : c'est le climat. Un hiver froid ne prouve pas que le climat ne se réchauffe pas !

## Le réchauffement climatique actuel
Les scientifiques mesurent un **réchauffement climatique** rapide depuis le milieu du 19e siècle, époque où l'industrie s'est développée ; il s'accélère depuis les années 1970. Les preuves :
- la **température moyenne** de la Terre a augmenté d'environ **1,1 °C** entre la fin du 19e siècle et les années 2011-2020 (GIEC, 2021) ;
- les **glaciers** de montagne reculent, la banquise de l'Arctique diminue ;
- le **niveau de la mer** monte (l'eau se dilate en se réchauffant et la glace des continents fond).

## La cause : les gaz à effet de serre
Les activités humaines rejettent des **gaz à effet de serre**, surtout du **dioxyde de carbone** (en brûlant du pétrole, du charbon, du gaz, et en coupant les forêts) et du **méthane** (élevage, décharges). La quantité de dioxyde de carbone dans l'air a augmenté d'environ **50 %** depuis 1850. Ces gaz retiennent davantage la chaleur : la température monte.

>! **Raisonner avec deux courbes** : quand on compare la courbe de la teneur en dioxyde de carbone et celle de la température moyenne depuis 1850, on voit qu'elles **augmentent en même temps**. Ce lien, ajouté à ce que l'on sait de l'effet de serre, permet d'affirmer que les activités humaines sont la cause du réchauffement actuel.

## Les conséquences sur les êtres vivants
- Certaines espèces **se déplacent** vers le nord ou en altitude pour retrouver des températures qui leur conviennent (des papillons, des poissons, certains arbres).
- D'autres, qui ne peuvent pas se déplacer assez vite, sont menacées (ours polaire qui chasse sur la banquise, coraux qui blanchissent dans des mers trop chaudes).
- Les sécheresses, canicules et inondations deviennent plus fréquentes.

## Que faire ?
- **Atténuer** (limiter le réchauffement) : rejeter moins de gaz à effet de serre : marcher, faire du vélo, prendre les transports en commun, isoler les maisons, utiliser des énergies renouvelables, moins gaspiller, planter des arbres.
- **S'adapter** (vivre avec les changements) : végétaliser les villes pour avoir plus de fraîcheur, économiser l'eau, construire des digues, choisir des cultures qui résistent à la sécheresse.

> **À retenir** :
> - Eau liquide, température moyenne d'environ 15 °C et atmosphère permettent la vie sur Terre.
> - Météo : temps d'un jour en un lieu. Climat : moyenne sur au moins 30 ans dans une région.
> - Depuis 1850, la Terre s'est réchauffée d'environ 1,1 °C, à cause des gaz à effet de serre rejetés par les activités humaines.
> - Atténuer = réduire les rejets de gaz à effet de serre ; s'adapter = se protéger des conséquences.
`,
      exercices: [
        { type: "qcm", question: "Quelle condition permet la vie sur Terre ?", choix: ["La présence d'eau liquide", "L'absence d'atmosphère", "Une température moyenne de 460 °C", "La présence d'anneaux"], reponse: 0, explication: "L'**eau liquide**, une température moyenne d'environ 15 °C et une atmosphère sont indispensables à la vie telle que nous la connaissons." },
        { type: "vf", question: "« Demain, il pleuvra à Lille » est une information sur le climat.", reponse: false, explication: "C'est une prévision **météo** : elle concerne un lieu et un moment précis. Le climat est une moyenne sur au moins 30 ans." },
        { type: "saisie", question: "Sur combien d'années au minimum calcule-t-on les moyennes qui décrivent un climat ?", reponses: ["30", "30 ans", "trente", "trente ans", "au moins 30 ans", "au moins trente ans"], explication: "Le climat est une moyenne calculée sur **au moins 30 ans**." },
        { type: "qcm", question: "Quel gaz, rejeté quand on brûle du pétrole ou du charbon, est le principal responsable du réchauffement climatique actuel ?", choix: ["Le dioxygène", "Le diazote", "Le dioxyde de carbone", "L'hélium"], reponse: 2, explication: "Le **dioxyde de carbone** est un gaz à effet de serre. Sa quantité dans l'air a augmenté d'environ 50 % depuis 1850 à cause des activités humaines." },
        { type: "vf", question: "Le recul des glaciers de montagne est un indice du réchauffement climatique.", reponse: true, explication: "Les glaciers fondent plus vite qu'ils ne se reforment car il fait plus chaud : c'est l'un des indices du réchauffement." },
        { type: "qcm", question: "De combien la température moyenne de la Terre a-t-elle augmenté environ depuis la fin du 19e siècle (années 2011-2020, GIEC) ?", choix: ["0,01 °C", "11 °C", "1,1 °C", "110 °C"], reponse: 2, explication: "Environ **1,1 °C**. Cela paraît peu, mais c'est une moyenne sur toute la planète et en très peu de temps : c'est suffisant pour bouleverser les milieux." },
        { type: "qcm", question: "Lequel de ces gestes est une action d'atténuation du réchauffement climatique ?", choix: ["Construire une digue contre la montée de la mer", "Installer un ventilateur", "Planter des cultures résistantes à la sécheresse", "Aller au collège à vélo plutôt qu'en voiture"], reponse: 3, explication: "Le vélo ne rejette pas de dioxyde de carbone : il **réduit** les rejets de gaz à effet de serre, c'est de l'**atténuation**. Les trois autres sont des façons de s'**adapter**." },
        { type: "saisie", question: "D'après le tableau des températures, pourquoi n'y a-t-il pas d'eau liquide à la surface de Mars ? Réponds en deux mots : « trop ... » (trop chaud ou trop froid ?)", reponses: ["trop froid", "il fait trop froid", "froid", "trop froide"], explication: "Il y fait **trop froid** (environ −60 °C en moyenne) : l'eau y est gelée. Si tu as pensé « trop loin », c'est la **cause** : Mars est plus loin du Soleil que la Terre et son atmosphère est très fine, donc il y fait trop froid." },
        { type: "redaction", question: "Ton cousin affirme : « Cet hiver a été très froid, donc le réchauffement climatique n'existe pas. » Réponds-lui avec une argumentation scientifique : distingue météo et climat, puis donne au moins deux preuves du réchauffement et sa cause.", corrige: `**Météo et climat** : un hiver froid, c'est de la **météo** (ce qui se passe une année, en un lieu). Le **climat** est une moyenne sur au moins 30 ans et, pour le réchauffement, sur toute la planète. Un hiver froid en France ne contredit donc pas le réchauffement : il peut faire froid une année et chaud la suivante, mais c'est la **tendance moyenne** qui compte.

**Preuves du réchauffement** :
- la température moyenne de la Terre a augmenté d'environ **1,1 °C** depuis la fin du 19e siècle ;
- les **glaciers** reculent et la banquise de l'Arctique diminue ;
- le **niveau de la mer** monte.

**Cause** : les activités humaines (transports, chauffage, industrie, déforestation) rejettent des **gaz à effet de serre**, surtout du **dioxyde de carbone**, qui retiennent la chaleur. Sa quantité dans l'air a augmenté d'environ 50 % depuis 1850, en même temps que la température.

> Conclusion : le réchauffement climatique est bien réel, même si certains hivers restent froids.` },
      ],
    },
    {
      id: "ecosystemes-peuplement",
      titre: "Les écosystèmes : milieux, saisons et actions humaines",
      theme: "La Terre, une planète peuplée par des êtres vivants",
      cours: `
## Qu'est-ce qu'un écosystème ?
Un **écosystème** est formé :
- d'un **milieu de vie** (sol, eau, air, lumière, température...) ;
- de l'**ensemble des êtres vivants** qui y vivent (le **peuplement**) ;
- des **relations** entre eux et avec le milieu.

Exemples : une mare, une forêt, une prairie, un récif de corail. Un **paysage** a des composantes **biologiques** (êtres vivants), **géologiques** (roches, relief, sol) et **humaines** (routes, champs, maisons).

## Le milieu influence le peuplement
Les êtres vivants ne se répartissent pas au hasard : ils vivent là où les **conditions** leur conviennent (lumière, humidité, température, nourriture). Une mare (écosystème **aquatique**) abrite des poissons, des larves de libellule, des nénuphars ; une forêt (écosystème **terrestre**) abrite des chênes, des champignons, des écureuils.

>! **Exemple** : sous une pierre, il fait sombre et humide : on y trouve des cloportes et des vers de terre. En plein soleil, sur un mur sec, on trouve plutôt des lézards.

## Le peuplement change avec les saisons
Dans un même écosystème, le peuplement varie au cours de l'année : en hiver, il fait froid, les jours sont courts et la nourriture est rare. C'est la « **mauvaise saison** ». Les êtres vivants ont différentes façons de la passer :

| Stratégie | Exemples |
|---|---|
| **migration** : partir vers des régions plus chaudes | hirondelle, cigogne |
| **hibernation** : dormir profondément, le corps refroidi | marmotte, hérisson, loir |
| **vie ralentie** | grenouille enfouie dans la vase, coccinelle cachée |
| passer l'hiver sous forme d'**œufs** ou de **larves** | de nombreux insectes |
| perdre ses **feuilles** | chêne, hêtre (arbres à feuilles caduques) |
| passer l'hiver sous forme de **graines** ou de **bulbes** | coquelicot (graines), tulipe (bulbe) |
| rester actif et changer de pelage | renard, hermine (pelage blanc l'hiver) |

## Les relations entre êtres vivants
- **Prédation** : un animal en mange un autre (le renard mange le lapin).
- **Coopération** : les deux partenaires y gagnent (l'abeille et la fleur).
- **Compétition** : plusieurs êtres vivants ont besoin de la même ressource (des arbres pour la lumière).

## Un écosystème évolue
Un écosystème n'est **pas figé**. Après une **perturbation naturelle**, comme une tempête qui abat des arbres (un **chablis**) ou un incendie, il se transforme petit à petit : la lumière arrive au sol, des herbes puis des arbustes poussent, et la forêt finit par se reconstituer en plusieurs dizaines d'années. C'est la **résilience** de l'écosystème, qui a toutefois des limites.

## Comparer deux écosystèmes
Pour savoir pourquoi deux endroits n'abritent pas les mêmes êtres vivants, on les **compare**. Pour que la comparaison soit juste, on observe **les mêmes choses**, **de la même façon**, dans les deux écosystèmes.

>! **Méthode pour comparer deux écosystèmes**
>! 1. Relève les **conditions du milieu** dans chacun : lumière, température, humidité, type de sol...
>! 2. Relève le **peuplement** : quelles espèces et combien d'espèces. Observe la **même surface**, le **même jour** (donc à la même saison) et pendant la **même durée** dans les deux endroits.
>! 3. Range les résultats dans un **tableau** à deux colonnes, une par écosystème.
>! 4. Repère les **différences** (« la haie abrite plus d'espèces que le champ »), puis **explique-les** : une différence de peuplement vient souvent d'une différence des conditions du milieu, ou des actions humaines.

>! **Exemple** : une mare et une prairie voisines. Dans la mare, il y a de l'eau en permanence : on y trouve des poissons, des larves de libellule, des nénuphars. Dans la prairie, le sol est plus sec et très ensoleillé : on y trouve des herbes, des sauterelles, des papillons. Les deux milieux ne réunissent pas les mêmes conditions, donc pas les mêmes êtres vivants.

**Erreur fréquente** : comparer une forêt observée en mai et une prairie observée en décembre. Le peuplement change avec les saisons : on ne saurait plus si la différence vient du milieu ou de la saison !

## L'être humain et les écosystèmes
Certaines actions humaines **dégradent** les écosystèmes : pollution, destruction des haies, assèchement des zones humides, bétonnage, déchets plastiques. D'autres les **protègent** ou les **restaurent** : réserves naturelles, replantation de haies, nettoyage des rivières.

Il faut **exploiter les ressources de façon raisonnée** (pêche, forêts, eau) : ne pas prendre plus que ce qui peut se renouveler, pour que les générations futures en profitent aussi. C'est le **développement durable**.

>! **Agir au collège** : construire un **nichoir** (adapté à une espèce d'oiseau : taille du trou, hauteur, orientation à l'abri du vent et du plein soleil), une **mangeoire** pour l'hiver ou un **hôtel à insectes** favorise la biodiversité.

> **À retenir** :
> - Écosystème = milieu de vie + êtres vivants + relations entre eux.
> - Les êtres vivants vivent là où les conditions du milieu leur conviennent.
> - Pour passer la mauvaise saison : migration, hibernation, vie ralentie, œufs, graines, perte des feuilles...
> - Un écosystème évolue et peut se reconstituer après une perturbation ; l'être humain peut le dégrader ou le protéger.
> - Pour comparer deux écosystèmes : mêmes relevés (milieu et peuplement), même surface, même jour, même durée ; puis on explique les différences par les conditions du milieu.
`,
      textes: {
        haie: `**Deux écosystèmes d'une même ferme** (données fictives)

Une classe a observé, le même jour de mai, deux écosystèmes voisins : une **haie** (arbres, arbustes et herbes au bord d'un chemin) et le **milieu d'un champ de blé**. Dans chacun, les élèves ont étudié une surface de 20 m² pendant une heure, à la même heure de l'après-midi.

| | Haie | Milieu du champ de blé |
|---|---|---|
| Lumière au sol | faible (ombre des arbres) | forte (plein soleil) |
| Température de l'air à 14 h | 19 °C | 24 °C |
| Sol | humide, couvert de feuilles mortes | sec, labouré chaque année |
| Nombre d'espèces de plantes | 18 | 3 (blé, coquelicot, liseron) |
| Nombre d'espèces d'animaux observées | 24 | 5 |
| Quelques animaux observés | mésange, hérisson, escargot, carabe, coccinelle, abeille sauvage | alouette, puceron, criquet, coccinelle, campagnol |

Remarque des élèves : les coccinelles venues de la haie mangent les pucerons qui vivent sur les épis de blé.`,
      },
      exercices: [
        { type: "qcm", question: "Qu'est-ce qu'un écosystème ?", choix: ["Uniquement les animaux d'une région", "Un milieu de vie, les êtres vivants qui l'habitent et leurs relations", "Uniquement les plantes d'une forêt", "Une liste d'espèces menacées"], reponse: 1, explication: "Un **écosystème** réunit le **milieu**, les **êtres vivants** et les **relations** entre eux et avec le milieu." },
        { type: "saisie", question: "Comment s'appelle le long sommeil de la marmotte pendant l'hiver ?", reponses: ["hibernation", "l'hibernation"], explication: "C'est l'**hibernation** : la température du corps baisse fortement et l'animal vit sur ses réserves." },
        { type: "vf", question: "L'hirondelle passe l'hiver en Afrique : c'est une migration.", reponse: true, explication: "L'hirondelle **migre** vers l'Afrique, où elle trouve des insectes à manger, et revient au printemps." },
        { type: "qcm", question: "Comment le coquelicot passe-t-il l'hiver ?", choix: ["Il hiberne", "Il migre", "Il change de couleur", "Sous forme de graines"], reponse: 3, explication: "La plante meurt à l'automne, mais ses **graines** passent l'hiver dans le sol et germent au printemps." },
        { type: "qcm", question: "Le renard mange un lapin. Quelle relation existe entre eux ?", choix: ["Une coopération", "Une prédation", "Une compétition", "Aucune relation"], reponse: 1, explication: "C'est une **prédation** : le renard (prédateur) mange le lapin (proie)." },
        { type: "vf", question: "Un écosystème ne change jamais au cours du temps.", reponse: false, explication: "Un écosystème **évolue** : son peuplement change avec les saisons et il se transforme après une perturbation (tempête, incendie)." },
        { type: "saisie", question: "Comment appelle-t-on des arbres abattus ou déracinés par le vent, en forêt ?", reponses: ["chablis", "un chablis", "des chablis"], explication: "C'est un **chablis**. La lumière qui arrive alors jusqu'au sol permet à de nouvelles plantes de pousser." },
        { type: "qcm", question: "Quelle action humaine favorise la biodiversité ?", choix: ["Planter une haie avec des arbustes variés", "Assécher une mare", "Arracher les haies", "Jeter ses déchets dans la rivière"], reponse: 0, explication: "Une **haie variée** offre abri et nourriture à de nombreux oiseaux, insectes et petits mammifères." },
        { type: "redaction", question: "Après une tempête, une partie d'une forêt de hêtres a été abattue. Décris comment cet endroit va évoluer dans les années qui suivent, et explique pourquoi.", corrige: `Avant la tempête, les grands hêtres faisaient beaucoup d'**ombre** : peu de plantes poussaient au sol.

Après la tempête (le **chablis**), les arbres sont tombés : la **lumière** arrive jusqu'au sol. Les conditions du milieu ont changé, donc le **peuplement** change :
1. Les premières années, des **herbes** et des plantes à fleurs, qui ont besoin de beaucoup de lumière, poussent rapidement (à partir de graines apportées par le vent ou les animaux, ou déjà présentes dans le sol). De nouveaux insectes et oiseaux arrivent.
2. Ensuite, des **arbustes** (ronces, noisetiers) et des arbres qui poussent vite (bouleaux) s'installent.
3. Enfin, après plusieurs dizaines d'années, de jeunes **hêtres** grandissent à l'ombre des autres arbres et la forêt se **reconstitue**.

Le bois mort laissé sur place est aussi décomposé par des champignons et des insectes, ce qui enrichit le sol.

> Conclusion : un écosystème n'est pas figé ; après une perturbation naturelle, il évolue et peut se reconstituer (résilience).` },
        { type: "qcm", texte: "haie", question: "D'après le document, quel écosystème abrite le plus d'espèces ?", choix: ["La haie", "Le milieu du champ de blé", "Les deux en abritent autant", "On ne peut pas le savoir avec ce document"], reponse: 0, explication: "La **haie** abrite 18 espèces de plantes et 24 espèces d'animaux, contre 3 et 5 au milieu du champ. Les relevés ont été faits de la même façon (même jour, même surface, même durée) : on peut donc comparer." },
        { type: "saisie", texte: "haie", question: "Combien d'espèces de plantes la haie compte-t-elle de plus que le milieu du champ ?", reponses: ["15", "15 espèces", "quinze", "15 espèces de plantes"], explication: "18 − 3 = **15** espèces de plantes de plus dans la haie." },
        { type: "qcm", texte: "haie", question: "Les escargots ont besoin d'humidité et craignent le plein soleil. D'après le document, pourquoi en trouve-t-on dans la haie et pas au milieu du champ ?", choix: ["Parce que les escargots mangent du blé", "Parce que le sol de la haie est humide et à l'ombre", "Parce qu'il fait plus chaud dans la haie", "Parce que le champ est trop petit"], reponse: 1, explication: "Dans la haie, le sol est **humide** et la lumière au sol est **faible** : ces conditions conviennent à l'escargot. Au milieu du champ, le sol est sec et en plein soleil. Les êtres vivants vivent là où les **conditions du milieu** leur conviennent. (Attention : il fait plus **frais** dans la haie, pas plus chaud : 19 °C contre 24 °C.)" },
        { type: "vf", texte: "haie", question: "Pour compléter l'étude, les élèves pourraient comparer leurs relevés de mai dans la haie avec des relevés faits en décembre dans le champ.", reponse: false, explication: "Non : le peuplement **change avec les saisons**. Si on compare la haie en mai et le champ en décembre, on ne sait plus si les différences viennent du milieu ou de la saison. Il faut observer les deux écosystèmes **le même jour** (ou au moins à la même saison)." },
        { type: "qcm", texte: "haie", question: "Les coccinelles venues de la haie mangent les pucerons du champ de blé. Quelle relation existe entre la coccinelle et le puceron ?", choix: ["Une coopération", "Une compétition", "Une prédation", "Aucune relation"], reponse: 2, explication: "La coccinelle **mange** le puceron : c'est une **prédation** (la coccinelle est le prédateur, le puceron la proie). Les deux écosystèmes ne sont donc pas isolés : la haie aide l'agriculteur, car les pucerons abîment le blé." },
        { type: "redaction", texte: "haie", question: "À l'aide du document, compare les deux écosystèmes : 1) décris les différences des conditions du milieu ; 2) décris les différences de peuplement ; 3) explique ces différences ; 4) l'agriculteur veut arracher la haie pour agrandir son champ. Donne-lui un argument scientifique pour la garder.", corrige: `**1) Le milieu** : dans la haie, la lumière au sol est **faible**, il fait plus **frais** (19 °C contre 24 °C) et le sol est **humide**, couvert de feuilles mortes. Au milieu du champ, il y a du **plein soleil**, il fait plus chaud et le sol est **sec** et labouré chaque année.

**2) Le peuplement** : la haie abrite beaucoup plus d'espèces : **18** espèces de plantes contre **3**, et **24** espèces d'animaux contre **5**. On y trouve par exemple des escargots, des hérissons, des mésanges, qu'on ne trouve pas au milieu du champ.

**3) Explication** : les êtres vivants vivent là où les **conditions du milieu** leur conviennent. La haie offre de l'ombre, de l'humidité, des abris (branches, feuilles mortes) et une nourriture variée. Dans le champ, l'être humain ne cultive qu'une seule plante, le blé, et laboure le sol chaque année : peu d'espèces peuvent y vivre. La différence vient donc à la fois du **milieu** et des **actions humaines**.

**4) Argument** : la haie abrite des **prédateurs** des ravageurs du blé : les coccinelles qui en viennent mangent les pucerons qui abîment les épis. Sans la haie, il y aurait moins de coccinelles et plus de pucerons. La haie abrite aussi des abeilles sauvages (pollinisateurs) et de nombreuses autres espèces : la garder protège la **biodiversité**.

> Méthode : la comparaison est valable parce que les relevés ont été faits le même jour, sur la même surface et pendant la même durée.` },
      ],
    },
    {
      id: "chaines-alimentaires-matiere",
      titre: "Chaînes alimentaires, production et décomposition de la matière",
      theme: "La Terre, une planète peuplée par des êtres vivants",
      cours: `
## Les végétaux produisent leur propre matière
Un animal grandit en **mangeant** d'autres êtres vivants. Une plante verte, elle, **fabrique sa propre matière** à partir de ce qu'elle prend dans son milieu. Ses besoins :
- de la **lumière** ;
- de l'**eau** (prélevée dans le sol par les racines) ;
- des **sels minéraux** (dissous dans l'eau du sol) ;
- du **dioxyde de carbone** (un gaz de l'air, prélevé par les feuilles).

On dit que les végétaux sont des **producteurs primaires** : ils sont à la **base** de toutes les chaînes alimentaires.

>! **Expérience** : on fait pousser des plants de haricot identiques, les uns à la lumière, les autres dans un placard noir, avec le même arrosage. Après deux semaines, les plants à l'obscurité sont jaunes, fragiles et ont peu grandi. **Conclusion** : la lumière est nécessaire à la production de matière par la plante. On ne change qu'**un seul facteur** à la fois (ici la lumière) : c'est indispensable pour pouvoir conclure.

## Les chaînes et les réseaux alimentaires
Une **chaîne alimentaire** montre « qui est mangé par qui ». La **flèche** signifie « **est mangé par** » : elle va de l'aliment vers celui qui le mange.

>! **Exemple** : salade → limace → hérisson → renard. (La salade est mangée par la limace, qui est mangée par le hérisson...)

- Le premier maillon est toujours un **végétal** (producteur).
- Les **herbivores** mangent des végétaux ; les **carnivores** mangent des animaux ; les **omnivores** mangent les deux.

Dans un écosystème, les chaînes s'entrecroisent : elles forment un **réseau alimentaire** (ou réseau trophique). Si une espèce disparaît, toutes celles qui en dépendent sont touchées.

## Que devient la matière après la mort ?
Les feuilles mortes, les cadavres, les excréments ne s'accumulent pas indéfiniment : ils sont **décomposés**. Dans le sol, la litière de feuilles est d'abord découpée par de petits animaux (**vers de terre**, cloportes, collemboles), puis transformée par des **champignons** et des **bactéries**, des **micro-organismes**. Elle devient de l'**humus**, puis des **sels minéraux**.

Ces sels minéraux sont à nouveau absorbés par les racines des plantes : la matière est **recyclée**. C'est le **cycle de la matière** :

~~~
végétaux (producteurs)
   → animaux (consommateurs)
      → restes et cadavres
         → décomposeurs (animaux du sol, champignons, bactéries)
            → sels minéraux → absorbés par les végétaux
~~~

>! **Le compost** fonctionne de la même façon : les épluchures sont décomposées par des êtres vivants et donnent un engrais naturel pour le jardin.

> **À retenir** :
> - Les végétaux fabriquent leur matière grâce à la lumière, l'eau, les sels minéraux et le dioxyde de carbone : ce sont les producteurs primaires.
> - Dans une chaîne alimentaire, la flèche signifie « est mangé par » ; le premier maillon est un végétal.
> - Les chaînes forment un réseau alimentaire.
> - Les décomposeurs (animaux du sol, champignons, bactéries) transforment la matière morte en sels minéraux : la matière est recyclée.
`,
      exercices: [
        { type: "qcm", question: "Dans une chaîne alimentaire, que signifie la flèche ?", choix: ["« mange »", "« est mangé par »", "« vit à côté de »", "« est plus gros que »"], reponse: 1, explication: "Par convention, la flèche signifie « **est mangé par** » : elle va de l'aliment vers le mangeur (herbe → lapin)." },
        { type: "vf", question: "Le premier maillon d'une chaîne alimentaire est toujours un végétal (ou un être vivant producteur).", reponse: true, explication: "Les **végétaux** fabriquent leur propre matière : ce sont les producteurs primaires, à la base de toutes les chaînes." },
        { type: "qcm", question: "Lequel de ces éléments n'est PAS un besoin d'une plante verte pour produire sa matière ?", choix: ["La lumière", "L'eau", "Le dioxyde de carbone", "La viande"], reponse: 3, explication: "La plante verte a besoin de **lumière, d'eau, de sels minéraux et de dioxyde de carbone**. Elle ne mange pas d'autres êtres vivants." },
        { type: "saisie", question: "Quel gaz de l'air les plantes vertes prélèvent-elles pour produire leur matière ?", reponses: ["dioxyde de carbone", "le dioxyde de carbone", "CO2", "gaz carbonique", "le gaz carbonique"], explication: "Les feuilles prélèvent le **dioxyde de carbone** de l'air." },
        { type: "qcm", question: "Quelle chaîne alimentaire est correctement écrite ?", choix: ["renard → lapin → herbe", "lapin → herbe → renard", "herbe → renard → lapin", "herbe → lapin → renard"], reponse: 3, explication: "L'herbe est mangée par le lapin, qui est mangé par le renard : **herbe → lapin → renard**. La chaîne commence par le végétal." },
        { type: "saisie", question: "En quoi la matière des feuilles mortes est-elle finalement transformée par les décomposeurs ? (deux mots)", reponses: ["sels minéraux", "des sels minéraux", "en sels minéraux", "les sels minéraux", "sel minéral"], explication: "Les décomposeurs transforment la matière morte en humus, puis en **sels minéraux**, réutilisés par les plantes." },
        { type: "vf", question: "Les champignons et les bactéries du sol jouent un rôle important dans la décomposition de la matière morte.", reponse: true, explication: "Après le travail des petits animaux du sol, ce sont surtout les **champignons** et les **bactéries** qui transforment la matière morte en sels minéraux." },
        { type: "qcm", question: "Pour montrer que la lumière est nécessaire à une plante, on compare deux plants. Quel montage est correct ?", choix: ["Un plant à la lumière et arrosé, un plant à l'obscurité et non arrosé", "Un plant à la lumière, un plant à l'obscurité, tous les deux arrosés de la même façon", "Deux plants à la lumière, arrosés différemment", "Un seul plant à l'obscurité"], reponse: 1, explication: "On ne change qu'**un seul facteur** (la lumière) ; tout le reste (arrosage, sol, température) doit être identique. Sinon, on ne saurait pas quel facteur explique le résultat." },
        { type: "redaction", question: "Dans un jardin, on trouve : des salades, des limaces, des hérissons, des chenilles, des mésanges, des renards (qui mangent notamment des hérissons) et des éperviers (qui mangent des mésanges). 1) Écris deux chaînes alimentaires. 2) Explique ce que sont les salades dans ces chaînes. 3) Un jardinier utilise un produit qui tue toutes les limaces : quelles conséquences peut-on prévoir ?", corrige: `**1) Deux chaînes alimentaires** :
- salade → limace → hérisson → renard
- salade → chenille → mésange → épervier

**2)** Les salades sont des **végétaux** : elles fabriquent leur propre matière grâce à la lumière, l'eau, les sels minéraux et le dioxyde de carbone. Ce sont les **producteurs primaires**, au début des chaînes.

**3) Conséquences** : les chaînes forment un **réseau** ; toucher une espèce touche les autres.
- Les **hérissons** n'ont plus de limaces à manger : ils risquent de devenir moins nombreux ou de partir.
- Les **renards** auront moins de hérissons à manger : ils chercheront d'autres proies.
- Les **salades** seront moins mangées par les limaces (c'était le but du jardinier).
- De plus, le produit peut empoisonner les hérissons qui mangent des limaces contaminées.

> Conclusion : supprimer une espèce perturbe tout le réseau alimentaire.` },
      ],
    },
  ],
};
