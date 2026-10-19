export default {
  chapitres: [
    {
      id: "etats-matiere",
      titre: "Les trois états de la matière",
      theme: "Organisation et transformations de la matière",
      cours: `
## Solide, liquide, gaz
La matière qui nous entoure peut exister sous trois **états physiques** : **solide**, **liquide** et **gazeux**. L'eau, par exemple, existe sous forme de glace (solide), d'eau liquide et de vapeur d'eau (gaz, invisible).

| État | Forme | Volume | Autres propriétés |
|---|---|---|---|
| Solide | forme **propre** | volume propre | se saisit avec les doigts ; un solide en poudre (sable, sel) reste un solide |
| Liquide | prend la forme du récipient | volume propre | coule ; au repos, sa **surface libre est plane et horizontale** |
| Gaz | occupe **tout l'espace** disponible | pas de volume propre | **compressible** et **expansible** |

>! **Attention** : la vapeur d'eau est **invisible**. Le « nuage » blanc au-dessus d'une casserole n'est pas de la vapeur, mais de minuscules **gouttelettes d'eau liquide** formées quand la vapeur se refroidit.

## Le modèle particulaire
Pour expliquer ces propriétés, les scientifiques utilisent un **modèle** : la matière est faite de minuscules **particules** (molécules), invisibles même au microscope.

| État | Disposition des particules | Mouvement |
|---|---|---|
| Solide | **ordonnées** et **collées** les unes aux autres | vibrent sur place |
| Liquide | **désordonnées** mais **proches** (en contact) | glissent les unes sur les autres |
| Gaz | **désordonnées** et **très éloignées** | se déplacent rapidement dans tous les sens |

Ce modèle explique pourquoi un gaz est compressible : il y a beaucoup d'espace vide entre ses particules, on peut les rapprocher. Un liquide, lui, est presque incompressible.

## L'air, un mélange de gaz
L'**air** est un gaz (un mélange de gaz) : environ **78 % de diazote** et **21 % de dioxygène**, plus 1 % d'autres gaz (argon, dioxyde de carbone...). L'air a une **masse** : 1 L d'air pèse environ 1,2 g.

> **À retenir** :
> - Solide : forme propre ; liquide : surface libre plane et horizontale ; gaz : occupe tout l'espace, compressible.
> - Modèle particulaire : solide ordonné et compact ; liquide désordonné et compact ; gaz désordonné et dispersé.
> - La vapeur d'eau est invisible.
> - L'air contient environ 78 % de diazote et 21 % de dioxygène.
`,
      exercices: [
        { type: "qcm", question: "Quel état de la matière occupe tout l'espace disponible ?", choix: ["Le gaz", "Le solide", "Le liquide", "Aucun"], reponse: 0, explication: "Un **gaz** n'a ni forme ni volume propres : il occupe tout le volume qui lui est offert." },
        { type: "vf", question: "Le sable est un liquide car il coule et prend la forme du récipient.", reponse: false, explication: "Le sable est un **solide divisé** (en grains). Chaque grain a une forme propre : on peut le saisir. Sa surface n'est pas forcément horizontale (il forme des tas)." },
        { type: "vf", question: "La vapeur d'eau est visible : c'est le nuage blanc au-dessus de l'eau qui bout.", reponse: false, explication: "La vapeur d'eau est **invisible**. Le nuage blanc est formé de **gouttelettes d'eau liquide**." },
        { type: "qcm", question: "Dans le modèle particulaire, les particules d'un liquide sont :", choix: ["ordonnées et collées", "désordonnées et très éloignées", "désordonnées et proches", "ordonnées et éloignées"], reponse: 2, explication: "Dans un liquide, les particules sont **désordonnées** (elles glissent les unes sur les autres) mais **proches** (en contact)." },
        { type: "saisie", question: "Quel gaz est le plus abondant dans l'air ?", reponses: ["diazote", "le diazote", "azote", "l'azote"], explication: "Le **diazote** représente environ 78 % de l'air. Le dioxygène en représente environ 21 %." },
        { type: "qcm", question: "On bouche une seringue remplie d'air et on appuie sur le piston : il s'enfonce. Cela montre que l'air est :", choix: ["incompressible", "compressible", "solide", "sans masse"], reponse: 1, explication: "Un gaz est **compressible** : ses particules sont éloignées, on peut les rapprocher en diminuant le volume." },
        { type: "saisie", question: "Combien pèsent environ 10 L d'air, sachant que 1 L d'air pèse environ 1,2 g ? (en g)", reponses: ["12", "12 g"], explication: "10 × 1,2 = **12 g**. L'air, comme tout gaz, a une masse." },
        { type: "redaction", question: "On remplit une seringue d'eau, on bouche l'extrémité et on essaie d'enfoncer le piston : c'est impossible. Avec de l'air, le piston s'enfonce. Explique ces observations à l'aide du modèle particulaire.", corrige: `**Observation** : l'air se laisse comprimer, l'eau liquide non.

**Explication avec le modèle particulaire** :
- Dans un **gaz** comme l'air, les particules sont **très éloignées** les unes des autres : il y a beaucoup d'espace vide entre elles. En appuyant sur le piston, on **rapproche** les particules : le volume diminue. Le gaz est **compressible**.
- Dans un **liquide** comme l'eau, les particules sont **en contact** les unes avec les autres (même si elles sont désordonnées). Il n'y a presque pas d'espace entre elles : on ne peut pas les rapprocher davantage. Le liquide est **pratiquement incompressible**.

> Le nombre de particules ne change pas pendant la compression : seule la distance entre elles diminue.` },
      ],
    },
    {
      id: "changements-etat",
      titre: "Les changements d'état et l'eau dans tous ses états",
      theme: "Organisation et transformations de la matière",
      cours: `
## Les noms des changements d'état
| Changement | Nom |
|---|---|
| solide → liquide | **fusion** |
| liquide → solide | **solidification** |
| liquide → gaz | **vaporisation** (ébullition ou évaporation) |
| gaz → liquide | **liquéfaction** (on dit aussi condensation liquide) |
| solide → gaz | **sublimation** |
| gaz → solide | **condensation** (solide) |

La vaporisation peut être une **évaporation** (lente, à la surface, à toute température : le linge qui sèche) ou une **ébullition** (rapide, avec des bulles dans tout le liquide, à une température précise).

## Température de changement d'état
Pour un **corps pur** (une seule espèce chimique, comme l'eau pure), un changement d'état se fait à **température constante**. Sur le graphique de la température en fonction du temps, on observe un **palier** (portion horizontale).

| Eau pure (à la pression atmosphérique normale) | Température |
|---|---|
| fusion / solidification | **0 °C** |
| ébullition / liquéfaction | **100 °C** |

>! **Lire un graphique de solidification** : on refroidit de l'eau liquide à 20 °C. La température baisse jusqu'à 0 °C, puis reste à 0 °C pendant toute la solidification (palier : liquide et solide coexistent), puis baisse à nouveau quand toute l'eau est devenue glace.

Pour un **mélange** (eau salée par exemple), il n'y a **pas de palier net** : la température varie pendant le changement d'état. L'eau salée se solidifie en dessous de 0 °C : c'est pourquoi on sale les routes en hiver. Le palier est donc un **critère de pureté**.

## Masse et volume lors d'un changement d'état
- La **masse se conserve** : 100 g d'eau liquide donnent 100 g de glace. Le nombre de particules ne change pas.
- Le **volume change** : pour l'eau, le volume **augmente** d'environ 9 % quand elle gèle (une bouteille pleine d'eau éclate au congélateur). C'est une exception : la plupart des corps purs diminuent de volume en se solidifiant.

## L'eau dans la nature
L'eau est présente sur Terre sous ses trois états : glaciers et banquise (solide), océans, rivières et nappes (liquide), vapeur d'eau dans l'air (gaz). Le **cycle de l'eau** enchaîne évaporation, liquéfaction (nuages), précipitations, solidification (neige) et fusion.

> **À retenir** :
> - Fusion, solidification, vaporisation, liquéfaction, sublimation, condensation.
> - Corps pur : changement d'état à température constante (palier). Eau pure : 0 °C et 100 °C.
> - Lors d'un changement d'état, la **masse se conserve**, le **volume change**.
> - La glace a un volume plus grand que l'eau liquide qui l'a formée.
`,
      exercices: [
        { type: "saisie", question: "Comment s'appelle le passage de l'état solide à l'état liquide ?", reponses: ["fusion", "la fusion"], explication: "C'est la **fusion** (exemple : un glaçon qui fond)." },
        { type: "qcm", question: "La buée sur une vitre froide est due à :", choix: ["la fusion", "la liquéfaction de la vapeur d'eau", "la sublimation", "la solidification"], reponse: 1, explication: "La vapeur d'eau invisible de l'air se refroidit au contact de la vitre et devient liquide : c'est une **liquéfaction**." },
        { type: "vf", question: "Pendant la fusion de la glace pure, la température reste constante à 0 °C.", reponse: true, explication: "Pour un **corps pur**, le changement d'état se fait à température constante : on observe un **palier** à 0 °C." },
        { type: "qcm", question: "On fait geler 250 g d'eau liquide. Quelle est la masse de glace obtenue ?", choix: ["moins de 250 g", "250 g", "plus de 250 g", "cela dépend du congélateur"], reponse: 1, explication: "La **masse se conserve** lors d'un changement d'état : on obtient **250 g** de glace (c'est le volume qui augmente)." },
        { type: "vf", question: "Le volume de l'eau diminue quand elle se transforme en glace.", reponse: false, explication: "C'est l'inverse : le volume de l'eau **augmente** d'environ 9 % quand elle gèle. C'est pour cela qu'une bouteille pleine éclate au congélateur." },
        { type: "qcm", question: "Une courbe de refroidissement ne présente aucun palier. On peut en conclure que le liquide est :", choix: ["de l'eau pure", "un corps pur", "un mélange", "un gaz"], reponse: 2, explication: "L'absence de palier montre que le liquide n'est pas un corps pur : c'est un **mélange** (par exemple de l'eau salée)." },
        { type: "saisie", question: "À quelle température bout l'eau pure à la pression atmosphérique normale ? (en °C)", reponses: ["100", "100 °C", "100°C", "100 degrés"], explication: "L'eau pure bout à **100 °C** sous la pression atmosphérique normale." },
        { type: "qcm", question: "La neige carbonique (dioxyde de carbone solide) passe directement à l'état gazeux. C'est :", choix: ["une condensation", "une évaporation", "une fusion", "une sublimation"], reponse: 3, explication: "Le passage direct de l'état solide à l'état gazeux est une **sublimation**." },
        { type: "redaction", question: "On chauffe de la glace sortie du congélateur. On relève la température : −10 °C à 0 min, −5 °C à 1 min, 0 °C à 2 min, 0 °C à 3, 4 et 5 min, 5 °C à 6 min, 10 °C à 7 min. Décris le graphique que l'on obtient, interprète-le et indique l'état de l'eau à chaque étape.", corrige: `**Description** : on trace la température (en °C) en fonction du temps (en min).
- De 0 à 2 min, la température **augmente** de −10 °C à 0 °C.
- De 2 à 5 min, la température **reste constante** à 0 °C : c'est un **palier**.
- De 5 à 7 min, la température **augmente** de nouveau, de 0 °C à 10 °C.

**Interprétation** :
- De 0 à 2 min : l'eau est entièrement **solide** (glace) et se réchauffe.
- De 2 à 5 min : la glace **fond** (fusion). Glace et eau liquide **coexistent**. La température reste à 0 °C : c'est la température de fusion de l'eau.
- De 5 à 7 min : l'eau est entièrement **liquide** et se réchauffe.

> La présence d'un palier montre que l'eau est un **corps pur**.` },
      ],
    },
    {
      id: "masse-volume",
      titre: "Masse, volume et masse volumique",
      theme: "Organisation et transformations de la matière",
      cours: `
## La masse
La **masse** représente la quantité de matière d'un objet. Elle se mesure avec une **balance**. Son unité est le **kilogramme (kg)** ; on utilise aussi le gramme (g) et la tonne (t).
- 1 kg = 1 000 g ; 1 g = 1 000 mg ; 1 t = 1 000 kg.

>! **Méthode avec la balance** : on pose le récipient vide, on appuie sur « tare » (la balance affiche 0), puis on ajoute la substance : on lit directement sa masse.

## Le volume
Le **volume** est la place occupée par un objet. Son unité est le **mètre cube (m³)** ; on utilise aussi le litre (L).

| Conversions à connaître |
|---|
| 1 m³ = 1 000 dm³ = 1 000 L |
| 1 dm³ = 1 L = 1 000 cm³ = 1 000 mL |
| 1 cm³ = 1 mL |

Pour mesurer le volume d'un liquide, on utilise une **éprouvette graduée** posée bien à plat. On place l'œil **à la hauteur** de la surface du liquide et on lit la graduation au **bas du ménisque** (la surface légèrement courbée du liquide).

Pour mesurer le volume d'un **solide de forme quelconque** (un caillou), on utilise le **déplacement d'eau** : on verse de l'eau dans l'éprouvette (volume V₁), on plonge le solide (volume V₂). Volume du solide = V₂ − V₁.

## La masse volumique (initiation)
Un litre d'huile et un litre d'eau n'ont pas la même masse. Pour comparer les matériaux, on calcule la **masse volumique** ρ (lettre grecque « rhô ») : c'est la masse d'une unité de volume.

> **ρ = m / V** (m : masse ; V : volume)

| Matière | Masse volumique |
|---|---|
| Eau liquide | 1 g/cm³ = 1 g/mL = 1 kg/L |
| Huile | environ 0,92 g/cm³ |
| Glace | environ 0,92 g/cm³ |
| Aluminium | 2,7 g/cm³ |
| Fer | environ 7,9 g/cm³ |

Un objet (ou un liquide) **flotte** sur l'eau si sa masse volumique est **plus petite** que celle de l'eau : la glace et l'huile flottent, le fer coule.

>! **Exemple résolu** : un objet a une masse de 54 g et un volume de 20 cm³. ρ = 54 ÷ 20 = 2,7 g/cm³ : il est sans doute en aluminium, et il coule dans l'eau.

> **À retenir** :
> - Masse : balance, en kg ou g. Volume : éprouvette, en m³, L, mL ; 1 mL = 1 cm³.
> - Lire au bas du ménisque, l'œil à la hauteur du liquide.
> - ρ = m / V ; l'eau a une masse volumique de 1 g/mL.
> - Ce qui a une masse volumique plus petite que l'eau flotte.
`,
      exercices: [
        { type: "saisie", question: "Convertis 2,5 L en mL.", reponses: ["2500", "2 500", "2500 mL", "2 500 mL"], explication: "1 L = 1 000 mL, donc 2,5 L = 2,5 × 1 000 = **2 500 mL**." },
        { type: "qcm", question: "1 cm³ est égal à :", choix: ["1 L", "1 dL", "1 mL", "10 mL"], reponse: 2, explication: "**1 cm³ = 1 mL**, et 1 dm³ = 1 L." },
        { type: "vf", question: "On lit le volume d'un liquide dans une éprouvette au bas du ménisque, l'œil à la hauteur du liquide.", reponse: true, explication: "C'est la bonne méthode : regarder d'au-dessus ou d'en dessous fausse la lecture." },
        { type: "saisie", question: "Une éprouvette contient 50 mL d'eau. On y plonge un caillou : le niveau monte à 62 mL. Quel est le volume du caillou ? (en cm³)", reponses: ["12", "12 cm³", "12 cm3", "12 mL"], explication: "V = 62 − 50 = **12 mL**, soit 12 cm³." },
        { type: "qcm", question: "Un objet a une masse de 39,5 g et un volume de 5 cm³. Sa masse volumique est :", choix: ["7,9 g/cm³", "197,5 g/cm³", "0,13 g/cm³", "44,5 g/cm³"], reponse: 0, explication: "ρ = m / V = 39,5 ÷ 5 = **7,9 g/cm³** (c'est la masse volumique du fer)." },
        { type: "vf", question: "Un glaçon flotte sur l'eau car la masse volumique de la glace est plus petite que celle de l'eau liquide.", reponse: true, explication: "La glace (environ 0,92 g/cm³) est moins dense que l'eau liquide (1 g/cm³) : elle **flotte**." },
        { type: "saisie", question: "Quelle est la masse de 3 L d'eau liquide ? (en kg)", reponses: ["3", "3 kg"], explication: "La masse volumique de l'eau est 1 kg/L, donc m = 1 × 3 = **3 kg**." },
        { type: "qcm", question: "Quel est l'instrument qui mesure une masse ?", choix: ["L'éprouvette graduée", "Le thermomètre", "Le bécher", "La balance"], reponse: 3, explication: "La masse se mesure avec une **balance**. L'éprouvette graduée mesure un volume." },
        { type: "redaction", question: "Tom a deux cubes de même volume, 10 cm³ chacun. Le cube A a une masse de 27 g, le cube B une masse de 6 g. Calcule la masse volumique de chaque cube et prévois s'il flotte ou coule dans l'eau. Justifie.", corrige: `On utilise la formule **ρ = m / V**.

- **Cube A** : ρ = 27 ÷ 10 = **2,7 g/cm³** (c'est la masse volumique de l'aluminium).
- **Cube B** : ρ = 6 ÷ 10 = **0,6 g/cm³** (cela peut être un bois léger).

La masse volumique de l'eau est **1 g/cm³**.
- 2,7 g/cm³ est plus grand que 1 g/cm³ : le cube A **coule**.
- 0,6 g/cm³ est plus petit que 1 g/cm³ : le cube B **flotte**.

> Deux objets de même volume n'ont pas forcément la même masse : c'est la masse volumique qui permet de comparer les matériaux et de prévoir s'ils flottent.` },
      ],
    },
    {
      id: "melanges-solubilite",
      titre: "Corps purs, mélanges, solubilité et miscibilité",
      theme: "Organisation et transformations de la matière",
      cours: `
## Corps pur ou mélange ?
- Un **corps pur** est constitué d'une **seule espèce chimique** (une seule sorte de particules) : eau distillée, sel, sucre, dioxygène.
- Un **mélange** contient **plusieurs** espèces chimiques : eau du robinet, eau minérale (elle contient des sels minéraux dissous), air, lait, jus d'orange.

| Mélange homogène | Mélange hétérogène |
|---|---|
| on ne distingue **qu'une seule phase** à l'œil nu | on distingue **au moins deux phases** |
| eau sucrée, eau salée, air, sirop dilué | eau boueuse, eau + huile, jus d'orange avec pulpe |

>! **Test de l'eau** : le **sulfate de cuivre anhydre**, poudre blanche, devient **bleu** au contact de l'eau. Il permet de détecter la présence d'eau dans un liquide ou un aliment.

## Dissolution et solubilité
Quand on met du sucre dans l'eau, il disparaît à la vue : il se **dissout**.
- Le **soluté** est l'espèce qui se dissout (le sucre) ;
- le **solvant** est le liquide qui dissout (l'eau) ;
- la **solution** est le mélange homogène obtenu (eau sucrée).

La masse se **conserve** lors d'une dissolution : 200 g d'eau + 10 g de sel = 210 g d'eau salée. Le sel n'a pas disparu, ses particules se sont dispersées entre celles de l'eau.

La **solubilité** est la masse maximale de soluté que l'on peut dissoudre dans 1 L de solvant, à une température donnée. Exemple : environ **360 g de sel** par litre d'eau à 20 °C. Au-delà, le sel ne se dissout plus : la solution est **saturée** et un dépôt apparaît au fond. La solubilité augmente en général avec la température. Le sable est **insoluble** dans l'eau.

## Miscibilité
Deux liquides sont **miscibles** s'ils forment un mélange **homogène** (eau et alcool, eau et sirop). Ils sont **non miscibles** s'ils forment un mélange **hétérogène** (eau et huile). Le liquide le moins dense se place au-dessus : l'huile flotte sur l'eau.

## Séparer les constituants d'un mélange
| Technique | Principe | Utilisation |
|---|---|---|
| Décantation | on laisse reposer : les particules solides tombent au fond | eau boueuse |
| Filtration | un filtre retient les particules solides ; le liquide obtenu est le **filtrat** | eau boueuse, café |
| Ampoule à décanter | on sépare deux liquides non miscibles | eau et huile |
| Évaporation | on évapore l'eau, le soluté reste | marais salants |
| Distillation | on vaporise puis liquéfie un liquide pour le récupérer pur | eau distillée, parfums |

Attention : la filtration ne sépare **pas** un soluté dissous : l'eau salée filtrée reste salée.

> **À retenir** :
> - Corps pur : une seule espèce chimique ; mélange : plusieurs.
> - Homogène : une seule phase visible ; hétérogène : plusieurs phases.
> - Soluté + solvant → solution ; la masse se conserve ; solubilité = masse maximale dissoute par litre.
> - Liquides miscibles → mélange homogène ; non miscibles → hétérogène.
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces liquides est un corps pur ?", choix: ["L'eau minérale", "L'eau distillée", "Le jus d'orange", "L'eau de mer"], reponse: 1, explication: "L'**eau distillée** ne contient que de l'eau. L'eau minérale contient des sels minéraux dissous : c'est un mélange." },
        { type: "vf", question: "L'eau salée est un mélange homogène.", reponse: true, explication: "On ne distingue qu'une seule phase : l'eau salée est un **mélange homogène**." },
        { type: "saisie", question: "Dans l'eau sucrée, comment appelle-t-on le sucre ?", reponses: ["soluté", "le soluté", "un soluté"], explication: "Le sucre est le **soluté** ; l'eau est le **solvant** ; l'eau sucrée est la **solution**." },
        { type: "saisie", question: "On dissout 15 g de sel dans 250 g d'eau. Quelle est la masse de l'eau salée obtenue ? (en g)", reponses: ["265", "265 g"], explication: "La masse se conserve : 250 + 15 = **265 g**." },
        { type: "qcm", question: "L'eau et l'huile forment un mélange hétérogène. On dit que ces liquides sont :", choix: ["miscibles", "solubles", "non miscibles", "purs"], reponse: 2, explication: "Deux liquides qui ne se mélangent pas (deux phases visibles) sont **non miscibles**." },
        { type: "vf", question: "En filtrant de l'eau salée, on récupère de l'eau pure.", reponse: false, explication: "Le sel est **dissous** : ses particules traversent le filtre. Le filtrat reste salé. Pour récupérer l'eau pure, il faut une **distillation**." },
        { type: "qcm", question: "La solubilité du sel est d'environ 360 g/L à 20 °C. Combien de sel peut-on dissoudre au maximum dans 0,5 L d'eau à 20 °C ?", choix: ["720 g", "360 g", "36 g", "180 g"], reponse: 3, explication: "Dans un demi-litre, on peut dissoudre la moitié : 360 ÷ 2 = **180 g**." },
        { type: "qcm", question: "Quel test permet de mettre en évidence la présence d'eau ?", choix: ["Le sulfate de cuivre anhydre qui devient bleu", "L'eau de chaux qui se trouble", "L'eau iodée qui devient bleu-noir", "Une flamme qui s'éteint"], reponse: 0, explication: "Le **sulfate de cuivre anhydre** (blanc) devient **bleu** au contact de l'eau. L'eau de chaux sert à détecter le CO₂, l'eau iodée l'amidon." },
        { type: "redaction", question: "On te donne un mélange d'eau, de sable et de sel. Propose un protocole pour récupérer séparément le sable et le sel. Explique chaque étape.", corrige: `**Étape 1 : décantation puis filtration**. Le sable est **insoluble** dans l'eau : on laisse reposer (décantation), puis on verse le mélange dans un entonnoir muni d'un **papier filtre**. Le sable reste sur le filtre ; le **filtrat** est de l'eau salée, homogène (le sel, dissous, traverse le filtre).

**Étape 2 : séchage du sable**. On laisse sécher le sable récupéré sur le filtre.

**Étape 3 : évaporation**. On place l'eau salée dans une coupelle et on la chauffe doucement (ou on la laisse au soleil, comme dans les marais salants). L'eau s'**évapore**, le **sel** reste au fond sous forme de cristaux.

**Sécurité** : lunettes et blouse, chauffer doucement, ne pas toucher le récipient chaud.

> On peut récupérer aussi l'eau pure par **distillation** de l'eau salée.` },
      ],
    },
    {
      id: "mouvements-vitesse",
      titre: "Mouvements et vitesse",
      theme: "Mouvement et interactions",
      cours: `
## Décrire un mouvement
Un objet est **en mouvement** si sa position change au cours du temps **par rapport à un objet de référence**. Un mouvement dépend toujours de cette référence : un passager assis dans un train est **immobile par rapport au train**, mais **en mouvement par rapport au quai**.

La **trajectoire** est l'ensemble des positions successives occupées par un point de l'objet.

| Trajectoire | Forme | Exemple |
|---|---|---|
| Rectiligne | une droite | une bille qui roule sur une table plane |
| Circulaire | un cercle (ou un arc de cercle) | la valve d'une roue de vélo |
| Curviligne | une courbe quelconque | un ballon lancé |

## La vitesse
Une **chronophotographie** montre les positions d'un objet à intervalles de temps égaux.
- Les points sont **régulièrement espacés** → vitesse **constante** : mouvement **uniforme**.
- Les points s'**écartent** → la vitesse **augmente** : mouvement **accéléré**.
- Les points se **rapprochent** → la vitesse **diminue** : mouvement **ralenti**.

La **vitesse moyenne** se calcule avec la relation :

> **v = d / t** (v : vitesse ; d : distance parcourue ; t : durée du parcours)

| Unité de d | Unité de t | Unité de v |
|---|---|---|
| mètre (m) | seconde (s) | mètre par seconde (m/s) |
| kilomètre (km) | heure (h) | kilomètre par heure (km/h) |

On en déduit **d = v × t** et **t = d / v**.

>! **Exemple résolu** : une voiture parcourt 150 km en 2 h. v = 150 ÷ 2 = 75 km/h.
>! **Conversion** : 1 m/s = 3,6 km/h (car 1 m/s = 3 600 m en 1 h = 3,6 km/h). Pour passer des m/s aux km/h, on multiplie par 3,6 ; dans l'autre sens, on divise par 3,6. Exemple : 72 km/h = 72 ÷ 3,6 = 20 m/s.

Attention aux durées : 30 min = 0,5 h ; 15 min = 0,25 h ; 1 h 30 min = 1,5 h.

> **À retenir** :
> - Un mouvement se décrit toujours par rapport à une référence.
> - Trajectoire rectiligne, circulaire ou curviligne.
> - Uniforme : vitesse constante ; accéléré : vitesse qui augmente ; ralenti : vitesse qui diminue.
> - v = d / t ; 1 m/s = 3,6 km/h.
`,
      exercices: [
        { type: "qcm", question: "La trajectoire de la pointe d'une aiguille de montre est :", choix: ["rectiligne", "circulaire", "curviligne quelconque", "immobile"], reponse: 1, explication: "La pointe de l'aiguille décrit un **cercle** autour du centre du cadran : la trajectoire est **circulaire**." },
        { type: "vf", question: "Un passager assis dans un bus qui roule est immobile par rapport au bus.", reponse: true, explication: "Sa position ne change pas **par rapport au bus**. En revanche, il est en mouvement par rapport au trottoir." },
        { type: "saisie", question: "Un coureur parcourt 100 m en 10 s. Quelle est sa vitesse moyenne en m/s ?", reponses: ["10", "10 m/s"], explication: "v = d / t = 100 ÷ 10 = **10 m/s**." },
        { type: "qcm", question: "Sur une chronophotographie, les points s'écartent de plus en plus. Le mouvement est :", choix: ["uniforme", "ralenti", "accéléré", "circulaire"], reponse: 2, explication: "L'objet parcourt des distances de plus en plus grandes pendant des durées égales : sa vitesse augmente, le mouvement est **accéléré**." },
        { type: "saisie", question: "Convertis 20 m/s en km/h.", reponses: ["72", "72 km/h"], explication: "20 × 3,6 = **72 km/h**." },
        { type: "qcm", question: "Une voiture roule à 90 km/h pendant 30 minutes. Quelle distance parcourt-elle ?", choix: ["2 700 km", "3 km", "180 km", "45 km"], reponse: 3, explication: "30 min = 0,5 h. d = v × t = 90 × 0,5 = **45 km**." },
        { type: "saisie", question: "Un cycliste parcourt 60 km à la vitesse moyenne de 20 km/h. Combien de temps dure son trajet ? (en heures)", reponses: ["3", "3 h", "3 heures"], explication: "t = d / v = 60 ÷ 20 = **3 h**." },
        { type: "vf", question: "Un objet dont la trajectoire est rectiligne a forcément une vitesse constante.", reponse: false, explication: "La trajectoire et la vitesse sont deux choses différentes. Une voiture qui démarre en ligne droite a une trajectoire **rectiligne** et un mouvement **accéléré**." },
        { type: "redaction", question: "Inès va au collège à vélo. Elle parcourt 3 km en 12 minutes. Calcule sa vitesse moyenne en km/h, puis en m/s (arrondie au dixième). Le panneau à l'entrée du collège limite la vitesse des véhicules à 30 km/h : la respecte-t-elle ?", corrige: `**Conversion de la durée** : 12 min = 12 ÷ 60 h = **0,2 h**.

**Vitesse en km/h** : v = d / t = 3 ÷ 0,2 = **15 km/h**.

**Vitesse en m/s** : v = 15 ÷ 3,6 ≈ **4,2 m/s**.
(Vérification : 3 km = 3 000 m et 12 min = 720 s ; 3 000 ÷ 720 ≈ 4,2 m/s.)

**Conclusion** : 15 km/h est inférieur à 30 km/h : Inès **respecte** la limitation (en moyenne). Attention, c'est une vitesse moyenne : à certains moments, elle a pu aller plus vite ou moins vite.` },
      ],
    },
    {
      id: "energie-conversions",
      titre: "L'énergie, ses sources et ses conversions",
      theme: "L'énergie et ses conversions",
      cours: `
## Qu'est-ce que l'énergie ?
Un objet possède de l'**énergie** s'il est capable de produire un effet : se mettre en mouvement, chauffer, éclairer... L'unité d'énergie est le **joule (J)**.

## Les formes d'énergie
| Forme | Associée à... | Exemple |
|---|---|---|
| Énergie de mouvement (cinétique) | un objet en mouvement | le vent, une voiture qui roule |
| Énergie de position | un objet en hauteur | l'eau retenue par un barrage |
| Énergie thermique | la température | l'eau chaude |
| Énergie électrique | le courant électrique | une prise, une pile qui débite |
| Énergie lumineuse (rayonnante) | la lumière | le rayonnement du Soleil |
| Énergie chimique | les réactions chimiques | aliments, pétrole, pile |
| Énergie nucléaire | les noyaux des atomes | l'uranium |

## Les sources d'énergie
| Renouvelables (inépuisables à notre échelle) | Non renouvelables (stocks limités) |
|---|---|
| solaire, éolien (vent), hydraulique (eau), biomasse (bois), géothermie | pétrole, gaz naturel, charbon (énergies **fossiles**), uranium (nucléaire) |

Les énergies fossiles se sont formées en des millions d'années ; leur combustion rejette du **dioxyde de carbone**, gaz à effet de serre.

## Les conversions d'énergie
L'énergie **ne se crée pas** et **ne disparaît pas** : elle se **transforme** (se convertit) d'une forme à une autre. Un **convertisseur** est un objet qui transforme une forme d'énergie en une autre.

Une **chaîne énergétique** se représente ainsi : réservoir (ou source) → convertisseur → énergie utile (+ énergie perdue, souvent thermique).

| Convertisseur | Énergie reçue | Énergie utile | Énergie perdue |
|---|---|---|---|
| Lampe | électrique | lumineuse | thermique (elle chauffe) |
| Moteur électrique | électrique | mouvement | thermique |
| Panneau photovoltaïque | lumineuse | électrique | thermique |
| Éolienne | mouvement (du vent) | électrique | thermique |
| Pile | chimique | électrique | thermique |
| Muscle | chimique (aliments) | mouvement | thermique |

>! **Exemple de chaîne** : dans une centrale hydraulique, l'énergie de position de l'eau du barrage devient énergie de mouvement dans la conduite forcée ; la turbine et l'alternateur la convertissent en énergie électrique.

> **À retenir** :
> - L'énergie se mesure en joules (J) ; elle se conserve et se convertit.
> - Formes : mouvement, position, thermique, électrique, lumineuse, chimique, nucléaire.
> - Sources renouvelables (soleil, vent, eau...) ou non (pétrole, gaz, charbon, uranium).
> - Toute conversion s'accompagne de pertes, souvent sous forme d'énergie thermique.
`,
      exercices: [
        { type: "saisie", question: "Quelle est l'unité d'énergie ? (nom)", reponses: ["joule", "le joule", "joules", "j"], explication: "L'énergie se mesure en **joules** (symbole J)." },
        { type: "qcm", question: "Laquelle de ces sources d'énergie est renouvelable ?", choix: ["Le charbon", "Le pétrole", "Le vent", "L'uranium"], reponse: 2, explication: "Le **vent** (énergie éolienne) se renouvelle sans cesse. Charbon, pétrole et uranium ont des stocks limités." },
        { type: "qcm", question: "Un panneau photovoltaïque convertit l'énergie :", choix: ["électrique en lumineuse", "lumineuse en électrique", "chimique en électrique", "thermique en lumineuse"], reponse: 1, explication: "Le panneau reçoit l'énergie **lumineuse** du Soleil et fournit de l'énergie **électrique**." },
        { type: "vf", question: "Une lampe allumée transforme toute l'énergie électrique reçue en lumière.", reponse: false, explication: "Une partie de l'énergie est **perdue sous forme thermique** : la lampe chauffe. Ce sont les pertes de la conversion." },
        { type: "vf", question: "L'énergie peut disparaître lors d'une conversion.", reponse: false, explication: "L'énergie **se conserve** : elle ne disparaît pas, elle se transforme. Les « pertes » sont de l'énergie convertie sous une forme non utile (thermique)." },
        { type: "qcm", question: "Quelle forme d'énergie possède l'eau retenue en hauteur par un barrage ?", choix: ["Énergie de position", "Énergie nucléaire", "Énergie lumineuse", "Énergie électrique"], reponse: 0, explication: "Un objet en hauteur possède de l'**énergie de position**, qui se convertit en énergie de mouvement quand l'eau descend." },
        { type: "saisie", question: "Quelle forme d'énergie est stockée dans une pile ?", reponses: ["chimique", "énergie chimique", "l'énergie chimique"], explication: "Une pile stocke de l'énergie **chimique**, convertie en énergie électrique quand elle débite." },
        { type: "redaction", question: "Décris la chaîne énergétique d'une lampe de poche alimentée par une pile. Précise le réservoir, le convertisseur, l'énergie utile et l'énergie perdue. Pourquoi dit-on que l'énergie se conserve ?", corrige: `**Chaîne énergétique** :
- **Réservoir** : la **pile**, qui stocke de l'énergie **chimique** et la convertit en énergie **électrique**.
- L'énergie électrique est transférée par les fils au **convertisseur** : la **lampe**.
- **Énergie utile** : énergie **lumineuse** (la lampe éclaire).
- **Énergie perdue** : énergie **thermique** (la lampe chauffe un peu).

Schéma : pile (énergie chimique) → énergie électrique → lampe → énergie lumineuse (utile) + énergie thermique (perdue).

**Conservation** : l'énergie ne se crée pas et ne disparaît pas. L'énergie électrique reçue par la lampe est égale à la somme de l'énergie lumineuse et de l'énergie thermique produites. Quand la pile est « usée », son énergie chimique a été entièrement convertie.` },
      ],
    },
    {
      id: "lumiere",
      titre: "La lumière : sources, propagation et ombres",
      theme: "Des signaux pour observer et communiquer",
      cours: `
## Sources de lumière et objets diffusants
- Une **source primaire** produit sa propre lumière : le Soleil, une étoile, une flamme, une lampe allumée.
- Un **objet diffusant** (source secondaire) ne produit pas de lumière ; il renvoie dans toutes les directions une partie de la lumière qu'il reçoit : la Lune, les planètes, un livre, ton visage.

## Voir un objet
On voit un objet lorsque de la **lumière** venant de cet objet **entre dans notre œil**. L'œil n'envoie rien : il reçoit. Dans le noir complet, on ne voit rien.

## La propagation de la lumière
Dans un milieu **transparent et homogène** (air, eau, verre), la lumière se propage **en ligne droite** : c'est la **propagation rectiligne**. On la représente par un **rayon lumineux** : une droite munie d'une **flèche** qui indique le sens de propagation. Un ensemble de rayons forme un **faisceau**.

La lumière se propage aussi dans le **vide** (elle nous arrive du Soleil à travers l'espace). Sa vitesse dans le vide (et presque la même dans l'air) est d'environ **300 000 km/s**.

>! **Exemple** : la lumière parcourt les 150 millions de km entre le Soleil et la Terre en 150 000 000 ÷ 300 000 = 500 s, soit **8 min 20 s**.

| Matériau | Comportement |
|---|---|
| Transparent | laisse passer la lumière, on voit nettement à travers (vitre) |
| Translucide | laisse passer la lumière, mais on ne voit pas nettement (papier calque, verre dépoli) |
| Opaque | ne laisse pas passer la lumière (bois, carton, métal) |

## Les ombres
Un objet **opaque** éclairé par une source présente :
- une **ombre propre** : la partie de l'objet qui n'est pas éclairée ;
- une **ombre portée** : la zone sombre, derrière l'objet, sur un écran ou sur le sol, où la lumière n'arrive pas.

Schéma décrit : source à gauche → objet opaque au milieu → écran à droite. Les rayons qui passent juste au bord de l'objet délimitent l'ombre portée. Plus l'objet est proche de la source, plus l'ombre portée est grande.

L'ombre s'explique par la propagation rectiligne : la lumière ne peut pas « contourner » l'objet.

## Phases de la Lune et éclipses
- La Lune est toujours à moitié éclairée par le Soleil. Selon sa position autour de la Terre (un tour en 29,5 jours environ), on voit une partie plus ou moins grande de sa face éclairée : ce sont les **phases** (nouvelle Lune, premier quartier, pleine Lune, dernier quartier).
- **Éclipse de Soleil** : la Lune passe entre le Soleil et la Terre ; l'ombre de la Lune tombe sur la Terre.
- **Éclipse de Lune** : la Terre passe entre le Soleil et la Lune ; la Lune entre dans l'ombre de la Terre.

> **À retenir** :
> - Source primaire : produit sa lumière ; objet diffusant : renvoie la lumière reçue.
> - On voit un objet si sa lumière entre dans l'œil.
> - Propagation rectiligne dans un milieu transparent homogène, à environ 300 000 km/s ; elle se propage aussi dans le vide.
> - Ombre propre (sur l'objet) et ombre portée (derrière l'objet).
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces objets est une source primaire de lumière ?", choix: ["La Lune", "Une bougie allumée", "Un miroir", "Une feuille blanche"], reponse: 1, explication: "La **bougie allumée** produit sa propre lumière. La Lune, un miroir et une feuille ne font que renvoyer la lumière reçue." },
        { type: "vf", question: "La Lune produit sa propre lumière.", reponse: false, explication: "La Lune est un **objet diffusant** : elle renvoie la lumière qu'elle reçoit du Soleil." },
        { type: "saisie", question: "Comment appelle-t-on la zone sombre qui se forme sur un écran derrière un objet opaque éclairé ?", reponses: ["ombre portée", "l'ombre portée", "une ombre portée"], explication: "C'est l'**ombre portée**. La partie non éclairée de l'objet lui-même est l'**ombre propre**." },
        { type: "qcm", question: "Le papier calque laisse passer la lumière mais on ne voit pas nettement à travers. Il est :", choix: ["transparent", "opaque", "translucide", "diffusant primaire"], reponse: 2, explication: "Un matériau qui laisse passer la lumière sans permettre de voir nettement est **translucide**." },
        { type: "vf", question: "On voit un objet parce que notre œil envoie de la lumière vers lui.", reponse: false, explication: "C'est l'inverse : on voit un objet quand de la **lumière venant de l'objet entre dans l'œil**." },
        { type: "saisie", question: "La Lune est à environ 384 000 km de la Terre. Combien de temps met la lumière pour venir de la Lune à la Terre ? (en secondes, arrondi au dixième)", reponses: ["1,3", "1,3 s", "1.3"], explication: "t = d / v = 384 000 ÷ 300 000 = 1,28 s, soit environ **1,3 s**." },
        { type: "qcm", question: "Lors d'une éclipse de Soleil :", choix: ["la Terre est entre le Soleil et la Lune", "le Soleil est entre la Terre et la Lune", "la Lune s'éteint", "la Lune est entre le Soleil et la Terre"], reponse: 3, explication: "La **Lune passe entre le Soleil et la Terre** : son ombre portée atteint une région de la Terre." },
        { type: "redaction", question: "Lors d'une expérience, on éclaire une balle opaque avec une lampe et on observe l'ombre sur un écran. On rapproche ensuite la balle de la lampe. Décris ce que l'on observe sur la balle et sur l'écran, puis explique comment évolue la taille de l'ombre portée. Tu peux t'aider d'un schéma décrit.", corrige: `**Observations** :
- Sur la balle, la face tournée vers la lampe est éclairée ; la face opposée est sombre : c'est l'**ombre propre**.
- Sur l'écran apparaît une zone sombre en forme de disque : c'est l'**ombre portée**.

**Explication** : la lumière se propage **en ligne droite**. Les rayons qui frôlent les bords de la balle délimitent un **cône d'ombre** derrière elle : la lumière ne peut pas atteindre cette zone de l'écran.

**Schéma décrit** : lampe (point) → deux rayons qui touchent le haut et le bas de la balle → ces rayons continuent en ligne droite jusqu'à l'écran ; entre eux, derrière la balle, l'écran n'est pas éclairé.

**Quand on rapproche la balle de la lampe** : les rayons qui frôlent la balle sont plus écartés (le cône s'ouvre davantage), donc l'**ombre portée devient plus grande** sur l'écran.` },
      ],
    },
    {
      id: "son",
      titre: "Le son : production, propagation et vitesse",
      theme: "Des signaux pour observer et communiquer",
      cours: `
## La production d'un son
Un son est produit par un objet qui **vibre** : la corde d'une guitare, la membrane d'un tambour ou d'un haut-parleur, nos **cordes vocales**. L'objet qui vibre est la **source sonore**.

## La propagation du son
La vibration de la source se transmet de proche en proche aux particules du milieu (air, eau, solide). Le son a donc besoin d'un **milieu matériel** pour se propager : il **ne se propage pas dans le vide**. Dans l'espace, il n'y a aucun son.

>! **Expérience de la cloche à vide** : on place un réveil qui sonne sous une cloche en verre et on retire l'air avec une pompe. Le son devient de plus en plus faible, jusqu'à ne plus être entendu, alors qu'on voit toujours le marteau vibrer. Sans air, le son ne se propage plus. La lumière, elle, traverse le vide.

| Milieu | Vitesse du son (environ) |
|---|---|
| Air | **340 m/s** |
| Eau | 1 500 m/s |
| Acier | 5 000 à 6 000 m/s |

Le son se propage beaucoup moins vite que la lumière (300 000 km/s) : c'est pourquoi on voit l'éclair avant d'entendre le tonnerre.

>! **Exemple résolu (orage)** : on entend le tonnerre 3 s après avoir vu l'éclair. d = v × t = 340 × 3 = 1 020 m : l'orage est à environ 1 km. (Méthode rapide : chaque 3 s de décalage ≈ 1 km.)

>! **Écho** : le son se réfléchit sur un obstacle. Si l'écho revient 2 s après le cri, le son a parcouru 340 × 2 = 680 m aller-retour : la falaise est à 680 ÷ 2 = 340 m.

## Caractéristiques d'un son
- La **fréquence** (en **hertz, Hz**) : nombre de vibrations par seconde. Un son **aigu** a une fréquence élevée, un son **grave** une fréquence basse. L'oreille humaine perçoit les sons de **20 Hz à 20 000 Hz** environ. En dessous : infrasons ; au-dessus : ultrasons (perçus par les chauves-souris, les dauphins).
- Le **niveau sonore** (en **décibels, dB**) : il indique si le son est fort ou faible. Il se mesure avec un **sonomètre**.

| Niveau sonore | Effet |
|---|---|
| 0 dB | seuil d'audibilité |
| à partir de 85 dB environ | **seuil de danger** (exposition prolongée) |
| 120 dB | **seuil de douleur** |

Pour protéger ton audition : limiter le volume et la durée d'écoute au casque, s'éloigner des enceintes, porter des bouchons d'oreilles en concert.

> **À retenir** :
> - Un son est produit par une vibration et a besoin d'un milieu matériel : pas de son dans le vide.
> - Vitesse du son dans l'air : environ 340 m/s (bien plus faible que celle de la lumière).
> - d = v × t permet de calculer une distance (orage, écho).
> - Fréquence en Hz (grave/aigu ; audible de 20 à 20 000 Hz), niveau sonore en dB (danger dès 85 dB).
`,
      exercices: [
        { type: "vf", question: "Le son peut se propager dans le vide.", reponse: false, explication: "Le son a besoin d'un **milieu matériel** (air, eau, solide) : il ne se propage pas dans le vide." },
        { type: "qcm", question: "Quelle est la vitesse approximative du son dans l'air ?", choix: ["300 000 km/s", "34 m/s", "340 m/s", "3 400 km/s"], reponse: 2, explication: "Le son se propage à environ **340 m/s** dans l'air. 300 000 km/s est la vitesse de la lumière." },
        { type: "saisie", question: "On entend le tonnerre 5 s après avoir vu l'éclair. À quelle distance est l'orage ? (en m, avec v = 340 m/s)", reponses: ["1700", "1 700", "1700 m", "1 700 m"], explication: "d = v × t = 340 × 5 = **1 700 m** (environ 1,7 km)." },
        { type: "qcm", question: "Dans quel milieu le son se propage-t-il le plus vite ?", choix: ["L'air", "L'eau", "L'acier", "Le vide"], reponse: 2, explication: "Le son va plus vite dans les solides : environ 5 000 à 6 000 m/s dans l'**acier**, 1 500 m/s dans l'eau, 340 m/s dans l'air. Il ne se propage pas dans le vide." },
        { type: "saisie", question: "Quelle est l'unité de la fréquence ? (nom)", reponses: ["hertz", "le hertz", "hz"], explication: "La fréquence se mesure en **hertz** (Hz) : nombre de vibrations par seconde." },
        { type: "vf", question: "Un son de 25 000 Hz est audible par l'oreille humaine.", reponse: false, explication: "L'oreille humaine perçoit les sons d'environ 20 Hz à 20 000 Hz. Un son de 25 000 Hz est un **ultrason**." },
        { type: "qcm", question: "À partir de quel niveau sonore environ une exposition prolongée devient-elle dangereuse pour l'audition ?", choix: ["85 dB", "20 dB", "40 dB", "200 dB"], reponse: 0, explication: "Le **seuil de danger** est d'environ **85 dB** ; le seuil de douleur est de 120 dB." },
        { type: "saisie", question: "Un randonneur crie face à une falaise et entend l'écho 4 s plus tard. À quelle distance est la falaise ? (en m, avec v = 340 m/s)", reponses: ["680", "680 m"], explication: "Le son fait l'aller-retour : 340 × 4 = 1 360 m. La falaise est à 1 360 ÷ 2 = **680 m**." },
        { type: "redaction", question: "On place un réveil qui sonne sous une cloche en verre reliée à une pompe à vide. Au fur et à mesure qu'on retire l'air, on entend de moins en moins le réveil, puis plus du tout, alors qu'on voit toujours le marteau s'agiter. Interprète cette expérience. Que peut-on en conclure sur la lumière et sur le son ?", corrige: `**Observation** : quand l'air est retiré, le son diminue puis disparaît, mais le réveil continue de **vibrer** (le marteau bouge) et on continue de le **voir**.

**Interprétation** : le son est produit par la vibration du réveil. Pour arriver à nos oreilles, cette vibration doit être transmise de proche en proche par les particules de l'**air**. Quand on retire l'air, il n'y a presque plus de particules pour transmettre la vibration : le son ne se propage plus.

**Conclusions** :
- Le **son** a besoin d'un **milieu matériel** pour se propager : il ne se propage **pas dans le vide**.
- La **lumière**, elle, se propage dans le vide, puisqu'on voit toujours le réveil à travers la cloche vidée d'air (c'est aussi ainsi que la lumière du Soleil nous parvient à travers l'espace).` },
      ],
    },
    {
      id: "circuits-electriques",
      titre: "Les circuits électriques",
      theme: "L'énergie et ses conversions",
      cours: `
## Les éléments d'un circuit : les dipôles
Un **dipôle** est un composant qui possède **deux bornes**. Un circuit électrique contient :
- un **générateur** (pile, batterie, alimentation) qui fournit l'énergie électrique ; une pile a une borne **+** et une borne **−** ;
- des **récepteurs** (lampe, moteur, DEL, résistance) qui la convertissent ;
- des **fils de connexion** et souvent un **interrupteur**.

| Dipôle | Symbole normalisé (décrit) |
|---|---|
| Pile | deux traits parallèles : le grand trait = borne +, le petit trait épais = borne − |
| Lampe | un cercle contenant une croix |
| Interrupteur ouvert | un trait incliné qui ne touche pas l'autre côté |
| Interrupteur fermé | un trait continu |
| Moteur | un cercle contenant la lettre M |
| Diode | un triangle pointant vers une barre |
| DEL (diode électroluminescente) | symbole de la diode avec deux petites flèches sortantes |

## Circuit ouvert ou fermé
Le courant ne circule que dans une **boucle fermée** passant par le générateur. Si le circuit est **ouvert** (interrupteur ouvert, fil débranché, lampe grillée), le courant ne circule plus. Par convention, le **courant** sort par la borne **+** du générateur et rentre par la borne **−**.

Une **diode** ne laisse passer le courant que dans **un seul sens** (sens passant). Branchée à l'envers, elle est bloquante.

## Circuit en série et circuit en dérivation
| | Circuit en série | Circuit en dérivation |
|---|---|---|
| Structure | une **seule boucle** : les dipôles sont les uns à la suite des autres | **plusieurs boucles** ; les branches se séparent en des **nœuds** |
| Si une lampe est dévissée | les autres **s'éteignent** (circuit ouvert) | les autres **restent allumées** |
| Ordre des dipôles | sans importance | chaque branche est indépendante |

Les installations électriques de la maison sont en **dérivation** : on peut éteindre une lampe sans éteindre le réfrigérateur.

## Conducteurs et isolants
- **Conducteurs** : laissent passer le courant : les **métaux** (cuivre, fer, aluminium), le graphite (mine de crayon), l'eau salée, le **corps humain**.
- **Isolants** : ne laissent pas passer le courant : plastique, verre, bois sec, caoutchouc, air.

>! **Tester un matériau** : on le place dans un circuit pile + lampe ; si la lampe s'allume, le matériau est conducteur.

## Le court-circuit et la sécurité
Un **court-circuit** se produit quand deux bornes d'un dipôle sont reliées par un fil (conducteur) : le courant passe par le fil plutôt que par le dipôle.
- Une **lampe court-circuitée** s'éteint, mais le reste du circuit peut fonctionner.
- Un **générateur court-circuité** est **dangereux** : le courant devient très intense, les fils chauffent, il y a un risque d'**incendie**. Les **fusibles** et **disjoncteurs** coupent le courant pour protéger l'installation.

**Sécurité** : la tension du secteur (230 V) est **mortelle**. Ne jamais introduire d'objet dans une prise, ne pas toucher un appareil électrique avec les mains mouillées, ne pas approcher des lignes à haute tension. En classe, on n'utilise que des piles ou des générateurs de faible tension.

> **À retenir** :
> - Le courant circule dans une boucle fermée, de la borne + vers la borne − à l'extérieur du générateur.
> - Série : une seule boucle, tout s'éteint si un dipôle est retiré ; dérivation : branches indépendantes.
> - Métaux : conducteurs ; plastique, verre, air : isolants ; le corps humain est conducteur.
> - Court-circuit du générateur = danger d'incendie ; le secteur (230 V) est mortel.
`,
      exercices: [
        { type: "qcm", question: "Dans un circuit en série avec deux lampes, on dévisse une lampe. L'autre lampe :", choix: ["s'éteint", "brille plus fort", "reste allumée normalement", "clignote"], reponse: 0, explication: "En série, il n'y a qu'**une seule boucle** : dévisser une lampe ouvre le circuit, le courant ne passe plus, l'autre lampe **s'éteint**." },
        { type: "vf", question: "Dans une maison, les appareils sont branchés en dérivation.", reponse: true, explication: "Les prises et les lampes sont en **dérivation** : chaque appareil fonctionne indépendamment des autres." },
        { type: "qcm", question: "Lequel de ces matériaux est un isolant électrique ?", choix: ["Le cuivre", "L'aluminium", "Le plastique", "Le graphite"], reponse: 2, explication: "Le **plastique** est isolant (on en entoure les fils électriques). Le cuivre, l'aluminium et le graphite sont conducteurs." },
        { type: "saisie", question: "Comment appelle-t-on un composant électrique qui possède deux bornes ?", reponses: ["dipôle", "un dipôle", "dipole"], explication: "Un composant à deux bornes est un **dipôle** : pile, lampe, moteur, interrupteur, diode..." },
        { type: "vf", question: "Une diode laisse passer le courant dans les deux sens.", reponse: false, explication: "Une diode ne laisse passer le courant que dans **un seul sens**, le sens passant." },
        { type: "qcm", question: "On relie les deux bornes d'une pile directement par un fil. C'est :", choix: ["un circuit en dérivation", "un court-circuit dangereux", "un circuit ouvert", "un montage sans risque"], reponse: 1, explication: "C'est un **court-circuit du générateur** : le courant devient très intense, le fil et la pile chauffent, avec un risque d'incendie." },
        { type: "saisie", question: "Quelle est la tension du secteur en France ? (en volts)", reponses: ["230", "230 V", "230 volts", "230v"], explication: "La tension du secteur est de **230 V** : elle est dangereuse, voire mortelle." },
        { type: "qcm", question: "Quel est le symbole normalisé d'une lampe ?", choix: ["Un cercle contenant la lettre M", "Un triangle pointant vers une barre", "Deux traits parallèles", "Un cercle contenant une croix"], reponse: 3, explication: "La lampe est représentée par **un cercle contenant une croix**. Le cercle avec M est un moteur, le triangle et la barre une diode, les deux traits une pile." },
        { type: "redaction", question: "Un circuit comporte une pile, un interrupteur fermé et deux lampes L1 et L2 en série. On relie les deux bornes de L1 par un fil. Qu'observe-t-on pour L1 et L2 ? Explique. Ce montage est-il dangereux ? Que se passerait-il si on reliait les deux bornes de la pile ?", corrige: `**Observation** : **L1 s'éteint** et **L2 reste allumée** (elle brille même un peu plus fort).

**Explication** : le fil relié aux bornes de L1 **court-circuite** la lampe L1. Le courant passe par le fil (conducteur, qui offre un chemin plus facile) au lieu de passer par L1 : L1 n'est plus traversée par le courant et s'éteint. Le circuit reste **fermé** grâce au fil, donc le courant continue de traverser **L2**, qui reste allumée.

**Danger** : ici, le court-circuit d'une lampe n'est pas très dangereux car L2 limite le courant.

**Si on reliait les deux bornes de la pile** : ce serait un **court-circuit du générateur**. Le courant deviendrait très intense, les lampes s'éteindraient, le fil et la pile chaufferaient fortement : il y aurait un **risque d'incendie** et la pile s'abîmerait. Il ne faut jamais court-circuiter un générateur.` },
      ],
    },
    {
      id: "univers-systeme-solaire",
      titre: "L'Univers et le système solaire",
      theme: "Organisation et transformations de la matière",
      cours: `
## Du système solaire à l'Univers
- Le **Soleil** est une **étoile** : une énorme boule de gaz très chaud qui produit sa propre lumière. Son diamètre (environ 1,4 million de km) vaut environ **109 fois** celui de la Terre.
- Le **système solaire** comprend le Soleil, **8 planètes** (Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune), leurs **satellites** naturels (la Lune pour la Terre), des planètes naines (Pluton), des astéroïdes et des comètes.
- Le Soleil fait partie d'une **galaxie**, la **Voie lactée**, qui contient plus de 100 milliards d'étoiles.
- L'**Univers** contient des centaines de milliards de galaxies. Il est âgé d'environ **13,8 milliards d'années** (le système solaire, d'environ 4,6 milliards d'années).

| Objet | Définition |
|---|---|
| Étoile | produit sa propre lumière (source primaire) |
| Planète | tourne autour d'une étoile, ne produit pas de lumière |
| Satellite | tourne autour d'une planète |
| Galaxie | immense regroupement d'étoiles, de gaz et de poussières |

## Les distances dans l'Univers
Les distances sont immenses. On utilise l'**année-lumière (al)** : c'est la **distance** parcourue par la lumière en un an, dans le vide.

>! **Calcul** : 1 al = 300 000 km/s × nombre de secondes dans une année ≈ 300 000 × 31 536 000 ≈ 9 460 milliards de km (environ 9,5 × 10¹² km).

Attention : l'année-lumière est une unité de **distance**, pas de durée !

| Distance | Valeur approchée |
|---|---|
| Terre – Lune | 384 000 km (la lumière met environ 1,3 s) |
| Terre – Soleil | 150 millions de km (la lumière met environ 8 min 20 s) |
| Soleil – étoile la plus proche (Proxima du Centaure) | environ 4,2 al |
| Diamètre de la Voie lactée | environ 100 000 al |

Regarder loin, c'est regarder dans le **passé** : la lumière du Soleil que tu vois est partie il y a environ 8 minutes.

## La gravitation (première approche)
Les objets du système solaire restent en orbite autour du Soleil grâce à la **gravitation** : tous les objets ayant une masse s'attirent. C'est elle qui retient la Lune autour de la Terre et qui nous fait tomber vers le sol.

> **À retenir** :
> - Le Soleil est une étoile parmi plus de 100 milliards dans notre galaxie, la Voie lactée.
> - 8 planètes ; la Lune est le satellite naturel de la Terre.
> - L'année-lumière est une **distance** : environ 9 460 milliards de km.
> - La gravitation maintient les planètes en orbite autour du Soleil.
`,
      exercices: [
        { type: "qcm", question: "Le Soleil est :", choix: ["une planète", "une galaxie", "un satellite", "une étoile"], reponse: 3, explication: "Le Soleil est une **étoile** : il produit sa propre lumière." },
        { type: "vf", question: "L'année-lumière est une unité de durée.", reponse: false, explication: "L'année-lumière est une unité de **distance** : la distance parcourue par la lumière en un an (environ 9 460 milliards de km)." },
        { type: "saisie", question: "Comment s'appelle la galaxie dont fait partie le système solaire ?", reponses: ["Voie lactée", "la Voie lactée", "voie lactee"], explication: "Notre galaxie est la **Voie lactée**, qui compte plus de 100 milliards d'étoiles." },
        { type: "qcm", question: "La Lune est :", choix: ["une étoile", "le satellite naturel de la Terre", "une planète du système solaire", "une galaxie"], reponse: 1, explication: "La Lune tourne autour de la Terre : c'est son **satellite naturel**." },
        { type: "qcm", question: "Quelle est la planète la plus proche du Soleil ?", choix: ["Vénus", "Mars", "Mercure", "Neptune"], reponse: 2, explication: "L'ordre à partir du Soleil est : **Mercure**, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune." },
        { type: "saisie", question: "Proxima du Centaure est à environ 4,2 années-lumière. Combien d'années sa lumière met-elle pour nous parvenir ?", reponses: ["4,2", "4,2 ans", "4.2"], explication: "Par définition, la lumière parcourt 1 al en 1 an. Pour 4,2 al, il lui faut **4,2 ans**." },
        { type: "vf", question: "C'est la gravitation qui maintient la Terre en orbite autour du Soleil.", reponse: true, explication: "Le Soleil et la Terre s'attirent par **gravitation** : c'est ce qui maintient la Terre sur son orbite." },
        { type: "redaction", question: "La lumière se propage à 300 000 km/s. Calcule le temps mis par la lumière du Soleil (à 150 millions de km) pour atteindre la Terre, en secondes puis en minutes et secondes. Explique pourquoi on dit que « voir loin, c'est voir dans le passé ».", corrige: `**Calcul** : on utilise t = d / v.
- d = 150 000 000 km ; v = 300 000 km/s.
- t = 150 000 000 ÷ 300 000 = **500 s**.
- 500 s = 8 × 60 s + 20 s = **8 min 20 s**.

**Voir dans le passé** : quand tu regardes le Soleil (avec des lunettes adaptées !), la lumière qui entre dans ton œil est partie du Soleil il y a 8 min 20 s. Tu vois donc le Soleil tel qu'il était **il y a 8 min 20 s**. Pour une étoile située à 100 années-lumière, la lumière a voyagé pendant 100 ans : on la voit telle qu'elle était il y a 100 ans. Plus un objet est loin, plus l'image qu'on en reçoit est ancienne.` },
      ],
    },
    {
      id: "demarche-securite",
      titre: "Démarche expérimentale et sécurité au laboratoire",
      theme: "Méthodes et démarche expérimentale",
      cours: `
## La démarche expérimentale
1. **Observer** une situation et formuler un **problème** (une question).
2. Proposer une **hypothèse** : une réponse possible.
3. Concevoir un **protocole** : la liste précise du matériel et des étapes. On ne fait varier **qu'un seul paramètre** à la fois.
4. Réaliser l'expérience et **noter les résultats** (tableau de mesures, graphique).
5. **Interpréter** les résultats et **conclure** : l'hypothèse est-elle validée ?

>! **Exemple** : problème : « La température de l'eau influence-t-elle la vitesse de dissolution du sucre ? » Hypothèse : le sucre se dissout plus vite dans l'eau chaude. Protocole : même masse de sucre (5 g), même volume d'eau (100 mL), même agitation ; seule la température change (20 °C et 60 °C). On mesure la durée de dissolution.

## Les mesures et les graphiques
- Une mesure s'écrit toujours avec une **valeur** et une **unité** (25 °C, 12 mL).
- Un **tableau de mesures** indique les grandeurs et leurs unités dans la première ligne.
- Pour un **graphique** : choisir une échelle régulière, mettre en abscisse le paramètre que l'on fait varier (souvent le temps), en ordonnée la grandeur mesurée, nommer les axes avec leurs unités, donner un titre. On ne relie pas forcément les points « à la règle » : on trace une courbe ou une droite qui passe au plus près des points.
- Toute mesure comporte une petite incertitude : on répète les mesures si possible.

## La sécurité au laboratoire
- Porter une **blouse en coton** (fermée), des **lunettes de protection**, des gants si nécessaire ; attacher les cheveux longs.
- Ne **jamais goûter** ni sentir directement un produit ; ne pas manger au laboratoire.
- Lors d'un chauffage, tenir le tube à essai avec une **pince**, l'**incliner** et ne jamais diriger son ouverture vers quelqu'un.
- Ranger la paillasse, jeter les produits dans les récipients prévus (pas dans l'évier sans autorisation).
- Lire les **pictogrammes de sécurité** sur les étiquettes (losanges à bord rouge).

| Pictogramme (décrit) | Signification |
|---|---|
| une flamme | **inflammable** : tenir loin d'une flamme |
| une tête de mort | **toxique** : peut tuer même en petite quantité |
| des gouttes rongeant une main et un métal | **corrosif** : brûle la peau et les yeux |
| un point d'exclamation | **irritant / nocif** |
| une silhouette avec une étoile sur la poitrine | **danger grave pour la santé** |
| un arbre et un poisson mort | **dangereux pour l'environnement** |
| une bombe qui explose | **explosif** |
| une flamme au-dessus d'un cercle | **comburant** : favorise les combustions |
| une bouteille de gaz | **gaz sous pression** |

> **À retenir** :
> - Problème → hypothèse → protocole (un seul paramètre varie) → résultats → conclusion.
> - Toujours une valeur et une unité ; graphique avec titre, axes nommés et unités.
> - Blouse, lunettes, cheveux attachés ; ne jamais goûter ; tube incliné vers personne.
> - Lire les pictogrammes de danger avant d'utiliser un produit.
`,
      exercices: [
        { type: "qcm", question: "Que signifie un pictogramme représentant une flamme ?", choix: ["Corrosif", "Toxique", "Inflammable", "Dangereux pour l'environnement"], reponse: 2, explication: "La flamme signale un produit **inflammable** : il faut le tenir éloigné de toute flamme ou source de chaleur." },
        { type: "vf", question: "Au laboratoire, on peut goûter un produit s'il ressemble à de l'eau.", reponse: false, explication: "On ne goûte **jamais** un produit au laboratoire : un liquide incolore peut être toxique ou corrosif." },
        { type: "saisie", question: "Comment appelle-t-on la liste précise du matériel et des étapes d'une expérience ?", reponses: ["protocole", "le protocole", "un protocole", "protocole expérimental"], explication: "C'est le **protocole** expérimental." },
        { type: "qcm", question: "Pour chauffer un liquide dans un tube à essai, il faut :", choix: ["tenir le tube à la main, droit", "tenir le tube avec une pince, incliné, ouverture vers personne", "boucher le tube", "remplir le tube à ras bord"], reponse: 1, explication: "On utilise une **pince**, on **incline** le tube et on ne dirige jamais son ouverture vers soi ou un camarade, car le liquide peut être projeté." },
        { type: "vf", question: "Pour tester l'influence de la température sur la dissolution du sucre, il faut utiliser la même masse de sucre et le même volume d'eau dans les deux essais.", reponse: true, explication: "Seule la **température** doit changer ; tous les autres paramètres restent identiques pour que la comparaison soit valable." },
        { type: "qcm", question: "Un pictogramme montre des gouttes qui rongent une main et un métal. Le produit est :", choix: ["explosif", "inflammable", "comburant", "corrosif"], reponse: 3, explication: "Ce pictogramme signale un produit **corrosif** : il attaque la peau, les yeux et les métaux (port de gants et de lunettes obligatoire)." },
        { type: "qcm", question: "Quelle écriture d'un résultat de mesure est correcte ?", choix: ["25", "25 °C", "°C 25", "vingt-cinq environ"], reponse: 1, explication: "Une mesure s'écrit toujours avec une **valeur** et une **unité** : 25 °C." },
        { type: "redaction", question: "Léo pense que le sucre se dissout plus vite dans l'eau chaude. Rédige un protocole complet pour vérifier son hypothèse (matériel, étapes, paramètre testé, paramètres fixés, règles de sécurité), puis indique quels résultats valideraient l'hypothèse.", corrige: `**Problème** : la température de l'eau influence-t-elle la vitesse de dissolution du sucre ?

**Hypothèse** : le sucre se dissout plus vite dans l'eau chaude.

**Matériel** : 2 béchers, une éprouvette graduée, une balance, du sucre en poudre, un thermomètre, une bouilloire ou une plaque chauffante, un agitateur, un chronomètre.

**Protocole** :
1. Verser **100 mL** d'eau à **20 °C** dans le bécher A et **100 mL** d'eau à **60 °C** dans le bécher B (vérifier au thermomètre).
2. Peser deux fois **5 g** de sucre.
3. Verser le sucre en même temps dans chaque bécher, déclencher le chronomètre et agiter de la même façon.
4. Noter la durée nécessaire pour que le sucre ne soit plus visible.
5. Recommencer l'expérience pour vérifier les résultats.

**Paramètre testé** : la température de l'eau. **Paramètres fixés** : volume d'eau, masse et type de sucre, agitation.

**Sécurité** : blouse et lunettes, manipuler l'eau chaude avec précaution (risque de brûlure), ne pas goûter.

**Résultats attendus** : si la durée de dissolution est plus courte dans le bécher B (60 °C), l'hypothèse est **validée**. Sinon, elle est rejetée.` },
      ],
    },
  ],
};
