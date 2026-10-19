export default {
  chapitres: [
    {
      id: "elements-chimiques",
      titre: "Les éléments chimiques : origine, abondance et classification",
      theme: "Une longue histoire de la matière",
      cours: `
## Un niveau d'organisation : l'élément chimique
Toute la matière ordinaire est faite d'**atomes**. Un atome est formé d'un **noyau** (protons et neutrons) entouré d'**électrons**.

- Le **numéro atomique Z** est le nombre de protons : il définit l'**élément chimique** (Z = 1 : hydrogène, Z = 6 : carbone, Z = 8 : oxygène, Z = 26 : fer).
- Le **nombre de masse A** est le nombre de nucléons (protons + neutrons).
- Des **isotopes** sont des atomes de même Z mais de A différents : carbone 12 (6 protons, 6 neutrons), carbone 14 (6 protons, 8 neutrons).

On note un noyau ᴬ_Z X, par exemple ¹⁴₆C.

## D'où viennent les éléments ? La nucléosynthèse
Les noyaux se forment par des **réactions nucléaires** :
- **Nucléosynthèse primordiale** : dans les premières minutes après le Big Bang (il y a environ 13,8 milliards d'années) se forment essentiellement les noyaux d'**hydrogène** et d'**hélium** (et un peu de lithium).
- **Nucléosynthèse stellaire** : au cœur des étoiles, la **fusion** forme des noyaux plus lourds (hélium, carbone, oxygène...) jusqu'au **fer**.
- Les éléments plus lourds que le fer (or, plomb, uranium) se forment lors d'événements violents : **explosions d'étoiles massives (supernovae)** et fusions d'étoiles à neutrons.

Les étoiles en fin de vie dispersent ces éléments dans l'espace ; ils entrent dans la composition de nouvelles étoiles, des planètes et des êtres vivants : « nous sommes des poussières d'étoiles ».

>! Exemple : dans le Soleil, la fusion transforme l'hydrogène en hélium : globalement 4 ¹₁H → ⁴₂He + 2 positons (+ neutrinos et rayonnement).

## L'abondance des éléments
| Milieu | Éléments les plus abondants |
|---|---|
| Univers | hydrogène (environ 92 % des atomes, 74 % de la masse), hélium (environ 8 % des atomes, 24 % de la masse) |
| Croûte terrestre (en masse) | oxygène (environ 46 %), silicium (environ 28 %), aluminium, fer |
| Corps humain (en masse) | oxygène (environ 65 %), carbone (18 %), hydrogène (10 %), azote (3 %) |
| Atmosphère (en volume) | diazote (78 %), dioxygène (21 %) |

La répartition des éléments est donc **très différente** selon le milieu : les êtres vivants concentrent le carbone, la croûte concentre le silicium.

## Une tentative de classification : le tableau périodique
Au XIXe siècle, les chimistes cherchent à ranger les éléments connus. En **1869**, **Dmitri Mendeleïev** classe les 63 éléments alors connus par **masse atomique croissante** et regroupe en colonnes ceux qui ont des **propriétés chimiques semblables**.

Son génie : il **laisse des cases vides** et **prédit** les propriétés d'éléments encore inconnus. La découverte du gallium (1875) et du germanium (1886), aux propriétés prévues, confirme sa classification.

Aujourd'hui, les **118** éléments sont rangés par **numéro atomique Z croissant**. Une même colonne (famille) regroupe des éléments aux propriétés voisines (gaz nobles, halogènes, métaux alcalins).

> **À retenir** : un élément est défini par son numéro atomique Z. H et He sont nés juste après le **Big Bang** ; les éléments jusqu'au fer sont formés par **fusion dans les étoiles**, les plus lourds lors de **supernovae**. H et He dominent l'Univers ; O et Si dominent la croûte ; O, C, H, N dominent le vivant. Mendeleïev (1869) a classé les éléments et prédit des éléments inconnus.
`,
      exercices: [
        { type: "qcm", question: "Quel est l'élément le plus abondant dans l'Univers ?", choix: ["L'oxygène", "Le carbone", "L'hydrogène", "Le fer"], reponse: 2, explication: "L'hydrogène représente environ 92 % des atomes de l'Univers (74 % de la masse), suivi de l'hélium." },
        { type: "saisie", question: "Le noyau ¹⁴₆C contient combien de neutrons ?", reponses: ["8", "huit"], explication: "Nombre de neutrons = A − Z = 14 − 6 = **8**." },
        { type: "vf", question: "Le carbone de notre corps a été formé lors du Big Bang.", reponse: false, explication: "Le Big Bang a formé surtout H et He. Le carbone est issu de la **fusion nucléaire au cœur des étoiles**, puis dispersé dans l'espace." },
        { type: "qcm", question: "Les éléments plus lourds que le fer, comme l'or, sont principalement formés :", choix: ["lors de supernovae et de fusions d'étoiles à neutrons", "au cœur du Soleil actuel", "dans le noyau terrestre", "lors des réactions chimiques dans les volcans"], reponse: 0, explication: "La fusion stellaire « ordinaire » s'arrête au fer. Les éléments plus lourds demandent des événements très énergétiques : supernovae, fusions d'étoiles à neutrons." },
        { type: "qcm", question: "Quel élément est le plus abondant (en masse) dans la croûte terrestre ?", choix: ["Le silicium", "L'oxygène", "Le fer", "L'hydrogène"], reponse: 1, explication: "L'oxygène (environ 46 % en masse) devance le silicium (environ 28 %) : la croûte est faite surtout de silicates." },
        { type: "vf", question: "Mendeleïev a laissé des cases vides dans son tableau et a prédit les propriétés d'éléments alors inconnus.", reponse: true, explication: "Il a ainsi prévu le gallium et le germanium, découverts ensuite avec les propriétés annoncées." },
        { type: "saisie", question: "Combien d'éléments chimiques compte aujourd'hui le tableau périodique ?", reponses: ["118"], explication: "On connaît **118** éléments, rangés par numéro atomique croissant." },
        { type: "redaction", question: "Document : l'abondance relative (en nombre d'atomes) est, dans l'Univers, H : 92 %, He : 8 %, autres : 0,1 % ; dans le corps humain, H : 63 %, O : 25 %, C : 9 %, N : 1,4 %. 1) Compare les deux compositions. 2) Explique l'origine de l'hydrogène et celle du carbone et de l'oxygène présents dans notre corps. 3) Pourquoi dit-on que nous sommes des « poussières d'étoiles » ?", corrige: "1) **Comparaison** : l'hydrogène domine dans les deux cas, mais l'Univers est composé presque uniquement d'hydrogène et d'hélium, alors que le corps humain contient beaucoup d'oxygène, de carbone et d'azote (ensemble plus du tiers des atomes) et **pas d'hélium** (gaz inerte qui ne forme pas de molécules). Les êtres vivants concentrent donc fortement des éléments rares à l'échelle de l'Univers.\n\n2) **Origine** :\n- L'**hydrogène** provient de la **nucléosynthèse primordiale**, quelques minutes après le Big Bang (il y a environ 13,8 milliards d'années).\n- Le **carbone** et l'**oxygène** ont été formés par **fusion nucléaire au cœur d'étoiles** (fusion de l'hélium : 3 noyaux d'hélium donnent un noyau de carbone, puis carbone + hélium donne de l'oxygène).\n\n3) Ces étoiles, en fin de vie (vents stellaires, supernovae), ont dispersé ces éléments dans l'espace. Ils se sont retrouvés dans le nuage qui a formé le Système solaire, puis dans la Terre et les êtres vivants. Les atomes de C, O, N de notre corps ont donc été fabriqués dans des étoiles : nous sommes faits de « poussières d'étoiles »." },
      ],
    },
    {
      id: "radioactivite-datation",
      titre: "La radioactivité, la décroissance et la demi-vie",
      theme: "Une longue histoire de la matière",
      cours: `
## La radioactivité
Certains noyaux sont **instables** : ils se transforment **spontanément** en un autre noyau en émettant un rayonnement. C'est la **désintégration radioactive**, découverte par **Henri Becquerel** en 1896, puis étudiée par **Pierre et Marie Curie**.

- Radioactivité **α** : émission d'un noyau d'hélium ⁴₂He. Exemple : ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.
- Radioactivité **β⁻** : émission d'un électron. Exemple : ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.
- Radioactivité **β⁺** : émission d'un positon.

Lors d'une désintégration, il y a **conservation du nombre de masse A** et **du nombre de charge Z**. La désintégration d'un noyau donné est **aléatoire** : on ne peut pas prévoir quand elle aura lieu, mais pour un grand nombre de noyaux, l'évolution est prévisible.

## La demi-vie
La **demi-vie** t½ d'un noyau radioactif est la durée au bout de laquelle **la moitié** des noyaux initialement présents s'est désintégrée.

Après n demi-vies (t = n × t½), il reste : **N = N₀ / 2ⁿ**.

| Durée | 0 | t½ | 2 t½ | 3 t½ | 4 t½ | 10 t½ |
|---|---|---|---|---|---|---|
| Fraction restante | 1 | 1/2 | 1/4 | 1/8 | 1/16 | 1/1024 (≈ 0,1 %) |

La courbe N(t) est une **décroissance exponentielle** : elle diminue toujours de moitié sur une même durée, sans jamais atteindre zéro.

| Noyau | Demi-vie |
|---|---|
| Iode 131 | 8 jours |
| Carbone 14 | 5 730 ans |
| Potassium 40 | 1,25 milliard d'années |
| Uranium 238 | 4,47 milliards d'années |

L'**activité** A d'un échantillon (nombre de désintégrations par seconde) s'exprime en **becquerels (Bq)**. Elle décroît avec la même demi-vie.

## Exemples résolus
>! On a 8 000 noyaux d'iode 131 (t½ = 8 jours). Au bout de 24 jours : n = 24 ÷ 8 = 3 demi-vies, donc N = 8 000 ÷ 2³ = 8 000 ÷ 8 = **1 000 noyaux**.

>! Un os ancien contient 25 % du carbone 14 présent dans un os actuel. 25 % = 1/4 = 1/2², donc 2 demi-vies : âge = 2 × 5 730 = **11 460 ans**.

>! Lire une demi-vie sur un graphique : on repère N₀ sur l'axe vertical, on trace la droite horizontale N₀/2 jusqu'à la courbe et on lit l'abscisse correspondante.

## La datation radioactive
On compare la quantité d'un noyau « père » restant à sa quantité initiale (ou à la quantité de noyau « fils » formé).
- **Carbone 14** : un être vivant échange du carbone avec son milieu, sa proportion de ¹⁴C reste constante. À sa mort, le ¹⁴C n'est plus renouvelé et décroît. Méthode utilisable jusqu'à environ 50 000 ans (environ 9 demi-vies, il reste alors trop peu de ¹⁴C pour être mesuré).
- **Potassium-argon, uranium-plomb** : pour dater des roches très anciennes (millions à milliards d'années).

Il faut choisir un noyau dont la demi-vie est **adaptée à l'âge** à mesurer.

> **À retenir** : la désintégration est spontanée et aléatoire, mais une population de noyaux décroît de moitié à chaque **demi-vie** : **N = N₀ / 2ⁿ** avec n = t / t½. Datation : ¹⁴C pour quelques dizaines de milliers d'années, K-Ar et U-Pb pour les roches.
`,
      exercices: [
        { type: "qcm", question: "La demi-vie d'un noyau radioactif est la durée au bout de laquelle :", choix: ["tous les noyaux ont disparu", "la moitié des noyaux initiaux s'est désintégrée", "l'activité double", "un noyau précis se désintègre"], reponse: 1, explication: "Par définition, après une demi-vie il reste la moitié des noyaux initiaux. On ne peut pas prévoir quand un noyau précis se désintègre (phénomène aléatoire)." },
        { type: "saisie", question: "Un échantillon contient 6 400 noyaux d'iode 131 (t½ = 8 jours). Combien en reste-t-il au bout de 32 jours ?", reponses: ["400"], explication: "n = 32 ÷ 8 = 4 demi-vies ; N = 6 400 ÷ 2⁴ = 6 400 ÷ 16 = **400**." },
        { type: "vf", question: "On peut prévoir l'instant exact où un noyau de carbone 14 donné va se désintégrer.", reponse: false, explication: "La désintégration d'un noyau individuel est **aléatoire**. Seule l'évolution d'une grande population est prévisible." },
        { type: "saisie", question: "Un fossile contient 1/8 du carbone 14 d'un organisme vivant (t½ = 5 730 ans). Quel est son âge en années ?", reponses: ["17190", "17 190"], explication: "1/8 = 1/2³ : 3 demi-vies, âge = 3 × 5 730 = **17 190 ans**." },
        { type: "qcm", question: "Dans la désintégration ²³⁸₉₂U → ²³⁴₉₀Th + X, la particule X est :", choix: ["un électron", "un positon", "un neutron", "un noyau d'hélium ⁴₂He"], reponse: 3, explication: "Conservation de A : 238 = 234 + 4 ; de Z : 92 = 90 + 2. X = ⁴₂He : radioactivité α." },
        { type: "qcm", question: "Pour dater une roche volcanique de 300 millions d'années, quelle méthode choisir ?", choix: ["Carbone 14 (t½ = 5 730 ans)", "Iode 131 (t½ = 8 jours)", "Potassium-argon (t½ = 1,25 milliard d'années)", "Aucune méthode n'existe"], reponse: 2, explication: "La demi-vie doit être adaptée à l'âge : après 300 Ma il ne reste plus de ¹⁴C mesurable ; le potassium 40, de demi-vie 1,25 Ga, convient." },
        { type: "saisie", question: "L'activité d'un échantillon vaut 1 200 Bq. Elle vaut 150 Bq 30 heures plus tard. Quelle est la demi-vie en heures ?", reponses: ["10"], explication: "1 200 ÷ 150 = 8 = 2³ : 3 demi-vies en 30 h, donc t½ = 30 ÷ 3 = **10 h**." },
        { type: "redaction", question: "Des archéologues trouvent un charbon de bois dans une grotte ornée. Sa teneur en carbone 14 vaut 6,25 % de celle d'un bois actuel. Donnée : t½(¹⁴C) = 5 730 ans. 1) Explique pourquoi la teneur en ¹⁴C diminue après la mort de l'arbre. 2) Calcule l'âge du charbon. 3) Pourquoi cette méthode ne permet-elle pas de dater un dinosaure (environ 70 millions d'années) ? Propose une autre méthode.", corrige: "1) Tant que l'arbre est vivant, il absorbe du CO₂ par photosynthèse : il renouvelle son carbone et sa proportion de ¹⁴C reste égale à celle de l'atmosphère. À sa mort, les échanges cessent : le ¹⁴C se désintègre (¹⁴₆C → ¹⁴₇N + ⁰₋₁e) sans être remplacé, sa quantité diminue de moitié tous les 5 730 ans.\n\n2) 6,25 % = 0,0625 = 1/16 = 1/2⁴. Il s'est écoulé **4 demi-vies** :\n\nâge = 4 × 5 730 = **22 920 ans**.\n\n3) 70 millions d'années correspondent à 70 000 000 ÷ 5 730 ≈ 12 200 demi-vies : il ne reste plus aucun ¹⁴C mesurable (au-delà d'environ 50 000 ans la méthode est inutilisable). De plus, les fossiles de dinosaures sont minéralisés. On date plutôt les **roches volcaniques** encadrant les couches fossilifères avec une méthode à longue demi-vie, comme le **potassium-argon** (t½ = 1,25 milliard d'années) ou l'uranium-plomb." },
      ],
    },
    {
      id: "cristaux",
      titre: "Des édifices ordonnés : les cristaux",
      theme: "Une longue histoire de la matière",
      cours: `
## Solide cristallin et solide amorphe
Un **solide cristallin** (cristal) est un solide dont les atomes, ions ou molécules sont **empilés de façon ordonnée et périodique** dans l'espace. Exemples : sel (chlorure de sodium), quartz, glace, métaux, diamant.

Un **solide amorphe** n'a pas d'ordre à grande échelle. Exemple : le **verre**, obtenu par refroidissement rapide d'un liquide.

## Réseau et maille
La structure d'un cristal se décrit par la répétition d'un motif de base, la **maille**, qui pave tout l'espace. Au programme, on étudie la **maille cubique** de côté a (le **paramètre de maille**) :
- **cubique simple** : un atome à chaque sommet du cube ;
- **cubique à faces centrées (CFC)** : un atome à chaque sommet + un au centre de chaque face.

## Nombre d'atomes par maille
Un atome situé à un sommet est partagé entre **8** mailles (il compte pour 1/8) ; un atome au centre d'une face est partagé entre **2** mailles (il compte pour 1/2).
- Cubique simple : 8 × 1/8 = **1 atome par maille**.
- CFC : 8 × 1/8 + 6 × 1/2 = 1 + 3 = **4 atomes par maille**.

## Compacité
La **compacité** C est la fraction du volume de la maille réellement occupée par les atomes (assimilés à des sphères de rayon r) :

C = (N × 4/3 π r³) / a³

- Cubique simple : les atomes se touchent le long d'une arête, a = 2r → C = π/6 ≈ **0,52**.
- CFC : les atomes se touchent le long de la diagonale d'une face, a√2 = 4r → C = π/(3√2) ≈ **0,74** (empilement le plus compact possible).

## Masse volumique
ρ = (N × m) / a³, avec N le nombre d'entités par maille, m la masse d'une entité (kg) et a en mètres.

>! Exemple résolu (cuivre, CFC) : a = 361 pm = 3,61 × 10⁻¹⁰ m ; m(Cu) = 1,055 × 10⁻²⁵ kg. ρ = 4 × 1,055 × 10⁻²⁵ / (3,61 × 10⁻¹⁰)³ = 4,22 × 10⁻²⁵ / 4,70 × 10⁻²⁹ ≈ **8,97 × 10³ kg/m³**, en accord avec la valeur mesurée.

>! Exemple : le chlorure de sodium NaCl : les ions Cl⁻ forment un réseau CFC et les ions Na⁺ occupent le centre du cube et le milieu des arêtes. Une maille contient 4 Na⁺ et 4 Cl⁻ (4 « motifs » NaCl). Un même élément peut cristalliser de façons différentes : le carbone donne le **diamant** ou le **graphite**, aux propriétés très différentes.

## Les cristaux dans la nature
- **Roches magmatiques** : le **granite** refroidit lentement en profondeur, ses cristaux sont grands et visibles à l'œil nu ; le **basalte** refroidit vite en surface, il contient de petits cristaux (microlites) et du verre.
- **Êtres vivants** : coquilles (carbonate de calcium, calcite ou aragonite), os et dents (hydroxyapatite, un phosphate de calcium).

Plus le refroidissement est **lent**, plus les cristaux ont le temps de **grossir**.

> **À retenir** : un cristal est un empilement **ordonné et périodique** décrit par une **maille**. Cubique simple : 1 atome/maille, compacité 0,52. CFC : 4 atomes/maille, compacité 0,74. **ρ = N × m / a³**. Refroidissement lent → gros cristaux (granite) ; rapide → petits cristaux et verre (basalte).
`,
      exercices: [
        { type: "qcm", question: "Combien d'atomes contient une maille cubique à faces centrées ?", choix: ["1", "2", "4", "14"], reponse: 2, explication: "8 sommets × 1/8 + 6 faces × 1/2 = 1 + 3 = 4. (14 est le nombre d'atomes dessinés, pas le nombre appartenant à la maille.)" },
        { type: "vf", question: "Le verre est un solide cristallin.", reponse: false, explication: "Le verre est un solide **amorphe** : ses atomes ne sont pas ordonnés à grande échelle." },
        { type: "saisie", question: "Dans une maille cubique simple, combien d'atomes appartiennent en propre à la maille ?", reponses: ["1", "un"], explication: "8 sommets × 1/8 = **1 atome**." },
        { type: "qcm", question: "Quelle est la compacité d'un cristal cubique à faces centrées ?", choix: ["0,74", "0,68", "0,52", "1"], reponse: 0, explication: "C = π/(3√2) ≈ 0,74. La valeur 0,52 correspond au cubique simple." },
        { type: "qcm", question: "Le granite présente de grands cristaux visibles à l'œil nu car :", choix: ["il a refroidi rapidement en surface", "il a refroidi lentement en profondeur", "il est d'origine biologique", "il est amorphe"], reponse: 1, explication: "Un refroidissement lent laisse le temps aux cristaux de grossir. Le basalte, refroidi vite, a de petits cristaux et du verre." },
        { type: "vf", question: "Dans une maille CFC, les atomes sont en contact le long de la diagonale d'une face, d'où a√2 = 4r.", reponse: true, explication: "La diagonale d'une face mesure a√2 et contient un rayon d'atome au sommet, un diamètre de l'atome central et un rayon de l'autre sommet : 4r." },
        { type: "saisie", question: "Le polonium cristallise en cubique simple avec a = 335 pm. La masse d'un atome est 3,47 × 10⁻²⁵ kg. Calcule sa masse volumique en kg/m³, arrondie à la centaine (ex. : 9200).", reponses: ["9200", "9 200", "9,2 × 10³", "9,2x10^3"], explication: "ρ = 1 × 3,47 × 10⁻²⁵ / (3,35 × 10⁻¹⁰)³ = 3,47 × 10⁻²⁵ / 3,76 × 10⁻²⁹ ≈ **9,2 × 10³ kg/m³**." },
        { type: "redaction", question: "L'aluminium cristallise dans un système cubique à faces centrées de paramètre a = 405 pm. Données : masse d'un atome d'aluminium m = 4,48 × 10⁻²⁶ kg. 1) Représente (ou décris) la maille et montre qu'elle contient 4 atomes. 2) Calcule le rayon r d'un atome d'aluminium. 3) Calcule la masse volumique de l'aluminium et compare à la valeur tabulée 2,70 × 10³ kg/m³. 4) Calcule la compacité.", corrige: "1) **Maille CFC** : un cube avec un atome à chacun des 8 sommets et un au centre de chacune des 6 faces. Un atome de sommet est partagé entre 8 mailles, un atome de face entre 2 mailles :\n\nN = 8 × 1/8 + 6 × 1/2 = 1 + 3 = **4 atomes**.\n\n2) Les atomes se touchent le long de la diagonale d'une face : a√2 = 4r, donc\n\nr = a√2 / 4 = 405 × 1,414 / 4 ≈ **143 pm**.\n\n3) **Masse volumique** : a = 4,05 × 10⁻¹⁰ m, a³ = 6,64 × 10⁻²⁹ m³.\n\nρ = N × m / a³ = 4 × 4,48 × 10⁻²⁶ / 6,64 × 10⁻²⁹ = 1,792 × 10⁻²⁵ / 6,64 × 10⁻²⁹ ≈ **2,70 × 10³ kg/m³**.\n\nLe résultat est en accord avec la valeur tabulée : le modèle CFC est validé.\n\n4) **Compacité** : C = 4 × (4/3) π r³ / a³. Avec r = a√2/4, on obtient C = π√2/6 = π/(3√2) ≈ **0,74** : 74 % du volume est occupé par les atomes." },
      ],
    },
    {
      id: "cellules-molecules",
      titre: "Des cellules et des molécules : une structure complexe",
      theme: "Une longue histoire de la matière",
      cours: `
## Naissance de la théorie cellulaire
La découverte de la cellule est liée à l'invention du **microscope** :
- **1665** : Robert **Hooke** observe des petites cases dans du liège et les nomme « cellules » (il ne voit que des parois de cellules mortes).
- Vers **1675** : Antoine **van Leeuwenhoek**, avec ses microscopes à une lentille, observe des êtres unicellulaires, des spermatozoïdes, des bactéries.
- **1838–1839** : **Schleiden** (végétaux) et **Schwann** (animaux) affirment que **tous les êtres vivants sont formés de cellules**.
- **1855** : **Virchow** : « toute cellule provient d'une autre cellule » (omnis cellula e cellula).

La **théorie cellulaire** s'est donc construite progressivement, grâce aux progrès techniques (microscope optique puis électronique au XXe siècle) et à la confrontation des observations.

> La cellule est l'**unité structurelle et fonctionnelle** du vivant ; toute cellule naît d'une autre cellule.

## Échelles de taille
| Objet | Ordre de grandeur |
|---|---|
| Atome | 0,1 nm (10⁻¹⁰ m) |
| Molécule d'eau | 0,3 nm |
| Épaisseur de la membrane plasmique | environ 7 nm |
| Virus | 20 à 300 nm |
| Bactérie | 1 à 5 µm |
| Cellule animale ou végétale | 10 à 100 µm |
| Ovule humain | 0,1 mm (visible à l'œil nu, à la limite) |

Rappels : 1 mm = 10³ µm ; 1 µm = 10³ nm = 10⁻⁶ m.

>! Exemple résolu : une cellule de 20 µm observée au grossissement × 400 apparaît avec une taille de 20 × 400 = 8 000 µm = **8 mm**. Inversement, une image de 6 mm au grossissement × 600 correspond à un objet réel de 6 000 µm ÷ 600 = 10 µm.

## La membrane plasmique
Toute cellule est délimitée par une **membrane plasmique**, qui sépare l'intérieur (cytoplasme) du milieu extérieur et contrôle les échanges.

Elle est formée d'une **bicouche de phospholipides** : chaque phospholipide a une **tête hydrophile** (attirée par l'eau) et deux **queues hydrophobes** (qui fuient l'eau). Dans l'eau, les phospholipides s'organisent spontanément en double couche, têtes vers l'extérieur et vers le cytoplasme, queues vers l'intérieur de la membrane. Des **protéines** sont insérées dans cette bicouche (transport, récepteurs).

Le **modèle de la mosaïque fluide** (1972) a été construit à partir d'observations au microscope électronique (aspect en « double trait ») et d'expériences.

## Les molécules du vivant
Les cellules sont faites d'eau (environ 70 % de la masse) et de **molécules organiques**, construites autour d'un squelette de **carbone** :
- **glucides** (glucose, amidon, cellulose) : énergie, structure ;
- **lipides** (graisses, phospholipides) : membranes, réserves ;
- **protéines** (enchaînements d'acides aminés) : enzymes, structure, transport ;
- **acides nucléiques** (ADN, ARN) : information génétique.

Ces macromolécules sont souvent des **polymères** : de longues chaînes d'unités qui se répètent (glucose pour l'amidon, acides aminés pour les protéines, nucléotides pour l'ADN).

> **À retenir** : la **théorie cellulaire** (Hooke, Leeuwenhoek, Schleiden et Schwann, Virchow) affirme que tout être vivant est fait de cellules issues d'autres cellules. Une cellule mesure 10 à 100 µm ; elle est entourée d'une **membrane** (bicouche de phospholipides + protéines, environ 7 nm). Les molécules du vivant sont **carbonées** : glucides, lipides, protéines, acides nucléiques.
`,
      exercices: [
        { type: "qcm", question: "Qui a, le premier, utilisé le mot « cellule » en observant du liège ?", choix: ["Virchow", "Hooke", "Schwann", "Pasteur"], reponse: 1, explication: "Robert Hooke en 1665. Schwann et Schleiden ont généralisé la théorie cellulaire (1838–1839), Virchow a ajouté que toute cellule vient d'une cellule (1855)." },
        { type: "vf", question: "La théorie cellulaire a été établie en une seule observation par un seul savant.", reponse: false, explication: "Elle s'est construite sur près de deux siècles, grâce aux progrès du microscope et aux travaux de plusieurs scientifiques." },
        { type: "qcm", question: "Quel est l'ordre de grandeur de la taille d'une cellule animale ?", choix: ["10 nm", "1 cm", "1 mm", "10 µm"], reponse: 3, explication: "Une cellule mesure typiquement 10 à 100 µm, invisible à l'œil nu." },
        { type: "saisie", question: "Une cellule de 15 µm est observée au grossissement × 400. Quelle taille apparente a-t-elle, en mm ?", reponses: ["6", "6 mm"], explication: "15 × 400 = 6 000 µm = **6 mm**." },
        { type: "qcm", question: "Dans la membrane plasmique, les queues des phospholipides sont :", choix: ["hydrophiles et tournées vers l'eau", "hydrophobes et tournées vers l'intérieur de la bicouche", "remplacées par de l'ADN", "à l'extérieur de la cellule"], reponse: 1, explication: "Les queues hydrophobes fuient l'eau : elles se regroupent au centre de la bicouche, les têtes hydrophiles étant au contact de l'eau des deux côtés." },
        { type: "vf", question: "Les protéines sont des enchaînements d'acides aminés.", reponse: true, explication: "Une protéine est un polymère d'acides aminés ; son ordre est codé par l'ADN." },
        { type: "saisie", question: "La membrane plasmique a une épaisseur d'environ 7 nm et une cellule mesure 70 µm. Combien de fois la cellule est-elle plus grande que l'épaisseur de la membrane ?", reponses: ["10000", "10 000", "10⁴", "10^4"], explication: "70 µm = 70 000 nm ; 70 000 ÷ 7 = **10 000** = 10⁴." },
        { type: "redaction", question: "Montre, à partir de l'histoire des sciences, comment la théorie cellulaire s'est construite. Ta réponse doit citer au moins quatre étapes datées, expliquer le rôle des progrès techniques, et terminer par un énoncé de la théorie cellulaire.", corrige: "**Introduction** : aujourd'hui, on sait que tous les êtres vivants sont faits de cellules. Cette idée n'a rien d'évident car les cellules sont invisibles à l'œil nu (10 à 100 µm) : elle s'est construite progressivement.\n\n**Étapes** :\n- **1665, Hooke** : grâce à un des premiers microscopes, il observe dans le liège des petites cavités qu'il nomme « cellules ». Il ne voit que des parois de cellules mortes et ne comprend pas qu'il s'agit d'unités vivantes.\n- **Vers 1675, van Leeuwenhoek** : ses lentilles plus puissantes lui permettent d'observer des micro-organismes, des spermatozoïdes, des globules rouges : le monde microscopique vivant est révélé.\n- **1838–1839, Schleiden et Schwann** : en comparant de nombreux tissus végétaux et animaux, ils généralisent : tous les êtres vivants sont constitués de cellules.\n- **1855, Virchow** : il affirme que toute cellule provient de la division d'une cellule préexistante, ce qui rejette l'idée de génération spontanée des cellules.\n- **XXe siècle** : le **microscope électronique** révèle la structure fine (membrane en double feuillet, organites), conduisant au modèle de la mosaïque fluide (1972).\n\n**Rôle des techniques** : chaque amélioration des instruments (meilleures lentilles, colorants, microscope électronique) a permis de nouvelles observations, qui ont fait évoluer les idées.\n\n**Conclusion — la théorie cellulaire** : la cellule est l'unité structurelle et fonctionnelle de tous les êtres vivants, et toute cellule provient d'une autre cellule." },
      ],
    },
    {
      id: "rayonnement-solaire",
      titre: "Le rayonnement solaire et la loi de Wien",
      theme: "Le Soleil, notre source d'énergie",
      cours: `
## L'origine de l'énergie solaire
Le Soleil est une étoile. En son cœur (environ 15 millions de kelvins), des réactions de **fusion nucléaire** transforment l'hydrogène en hélium. La masse des produits est légèrement inférieure à celle des réactifs : la masse « perdue » Δm est convertie en énergie selon la relation d'**Einstein** :

**E = Δm × c²** (E en J, Δm en kg, c = 3,00 × 10⁸ m/s).

La **puissance** rayonnée par le Soleil vaut environ **P = 3,8 × 10²⁶ W**. Chaque seconde, il perd donc une masse :

Δm = E / c² = 3,8 × 10²⁶ / (3,00 × 10⁸)² = 3,8 × 10²⁶ / 9,0 × 10¹⁶ ≈ **4,2 × 10⁹ kg** (plus de 4 millions de tonnes par seconde).

Cette perte reste minuscule face à la masse du Soleil (2,0 × 10³⁰ kg).

## Le spectre du rayonnement et la loi de Wien
Tout corps chaud émet un rayonnement électromagnétique. Pour un corps modélisé comme un **corps noir**, le spectre est continu et présente un maximum à une longueur d'onde λmax qui dépend **uniquement de la température** de surface T : c'est la **loi de Wien**.

**λmax × T = 2,898 × 10⁻³ m·K** (λmax en mètres, T en kelvins).

Plus le corps est **chaud**, plus λmax est **petite** (décalage vers le bleu). Rappel : T(K) = θ(°C) + 273,15.

>! Exemple résolu (Soleil) : T ≈ 5 800 K. λmax = 2,898 × 10⁻³ / 5 800 ≈ 5,00 × 10⁻⁷ m = **500 nm** : le maximum est dans le visible (bleu-vert).

>! Exemple résolu (étoile bleue) : λmax = 290 nm = 2,90 × 10⁻⁷ m. T = 2,898 × 10⁻³ / 2,90 × 10⁻⁷ ≈ **1,0 × 10⁴ K**.

>! Exemple résolu (Terre) : T ≈ 288 K (15 °C). λmax = 2,898 × 10⁻³ / 288 ≈ 1,0 × 10⁻⁵ m = **10 µm** : la Terre émet dans l'**infrarouge**.

| Domaine | Longueurs d'onde |
|---|---|
| Ultraviolet | inférieures à 400 nm |
| Visible | de 400 nm (violet) à 800 nm (rouge) |
| Infrarouge | supérieures à 800 nm |

## La puissance solaire reçue par la Terre
La puissance du Soleil se répartit sur une sphère de rayon d (distance Soleil–Terre, d = 1,50 × 10¹¹ m). La puissance reçue par m², perpendiculairement aux rayons, au sommet de l'atmosphère est la **constante solaire** :

C = P / (4π d²) ≈ **1 361 W/m²** (on arrondit souvent à 1 360 W/m²).

La Terre intercepte le rayonnement sur un disque de rayon R = 6 371 km : puissance totale reçue ≈ C × πR² ≈ **1,74 × 10¹⁷ W**.

Comme la surface de la Terre (4πR²) est 4 fois plus grande que ce disque, la puissance **moyenne** reçue par m² de surface terrestre vaut **C/4 ≈ 340 W/m²**.

## Variation selon la latitude et les saisons
Un même faisceau lumineux se répartit sur une surface plus grande quand il arrive **obliquement** : la puissance reçue par m² de sol est plus faible aux **hautes latitudes**. Sans atmosphère, elle vaut environ C × cos(α), où α est l'angle entre les rayons et la verticale du lieu.

>! Exemple : avec α = 60°, la puissance reçue est 1 361 × cos 60° = 1 361 × 0,5 ≈ 680 W/m², deux fois moins qu'avec des rayons verticaux.

L'axe de rotation de la Terre est **incliné d'environ 23,4°** par rapport à la perpendiculaire au plan de son orbite : l'inclinaison des rayons et la durée du jour varient au cours de l'année, ce qui explique les **saisons** (et non la distance au Soleil, qui varie peu).

> **À retenir** : le Soleil tire son énergie de la **fusion** : E = Δm c². **Loi de Wien** : λmax × T = 2,898 × 10⁻³ m·K (Soleil 5 800 K → 500 nm ; Terre 288 K → 10 µm). Constante solaire ≈ 1 361 W/m² ; moyenne à la surface du globe ≈ 340 W/m². L'inclinaison des rayons explique les différences selon la latitude et les saisons.
`,
      exercices: [
        { type: "qcm", question: "D'où provient l'énergie rayonnée par le Soleil ?", choix: ["De la combustion de l'hydrogène avec le dioxygène", "De la fusion nucléaire de l'hydrogène en hélium", "De la fission de l'uranium", "De réactions chimiques"], reponse: 1, explication: "Au cœur du Soleil, la fusion de noyaux d'hydrogène en hélium libère de l'énergie (E = Δm c²). Ce n'est pas une combustion chimique." },
        { type: "saisie", question: "Une étoile a une température de surface de 3 500 K. Calcule λmax en nm (arrondi à l'unité).", reponses: ["828", "828 nm"], explication: "λmax = 2,898 × 10⁻³ / 3 500 = 8,28 × 10⁻⁷ m = **828 nm** (proche infrarouge : étoile rouge)." },
        { type: "vf", question: "Plus un corps est chaud, plus la longueur d'onde de son maximum d'émission est grande.", reponse: false, explication: "C'est l'inverse : λmax = 2,898 × 10⁻³ / T, donc λmax diminue quand T augmente." },
        { type: "qcm", question: "Une étoile émet un maximum à λmax = 290 nm. Sa température de surface est d'environ :", choix: ["10 000 K", "5 800 K", "1 000 K", "100 000 K"], reponse: 0, explication: "T = 2,898 × 10⁻³ / 2,90 × 10⁻⁷ ≈ 9 990 K ≈ 10 000 K." },
        { type: "saisie", question: "Le Soleil rayonne 3,8 × 10²⁶ W. Quelle masse perd-il chaque seconde, en kg ? (c = 3,0 × 10⁸ m/s ; écris par exemple 4,2 × 10^9)", reponses: ["4,2 × 10^9", "4,2 × 10⁹", "4,2x10^9", "4,2 x 10^9", "4,2e9", "4,2 10^9", "4200000000"], explication: "Δm = E / c² = 3,8 × 10²⁶ / 9,0 × 10¹⁶ ≈ **4,2 × 10⁹ kg**." },
        { type: "qcm", question: "Pourquoi la puissance moyenne reçue par m² de surface terrestre vaut-elle C/4 ?", choix: ["Parce que l'atmosphère absorbe les 3/4", "Parce que la surface de la sphère (4πR²) est 4 fois celle du disque qui intercepte le rayonnement (πR²)", "Parce que la Terre tourne 4 fois par jour", "Parce qu'il y a 4 saisons"], reponse: 1, explication: "La Terre capte la lumière comme un disque de surface πR² mais la répartit, grâce à sa rotation, sur toute sa surface 4πR² : le rapport vaut 4." },
        { type: "vf", question: "Les saisons s'expliquent principalement par la variation de la distance Terre–Soleil.", reponse: false, explication: "Elles s'expliquent par l'**inclinaison de l'axe de rotation** (23,4°), qui modifie l'inclinaison des rayons et la durée du jour. La Terre est d'ailleurs au plus près du Soleil début janvier, en plein hiver boréal." },
        { type: "redaction", question: "Données : puissance rayonnée par le Soleil P = 3,83 × 10²⁶ W ; distance Terre–Soleil d = 1,50 × 10¹¹ m ; rayon terrestre R = 6,37 × 10⁶ m ; température de surface du Soleil 5 800 K. 1) Calcule λmax du rayonnement solaire et situe-le dans le spectre. 2) Montre que la puissance reçue par m² au sommet de l'atmosphère vaut environ 1 360 W/m². 3) Calcule la puissance totale interceptée par la Terre. 4) Déduis-en la puissance moyenne reçue par m² de surface terrestre.", corrige: "1) **Loi de Wien** : λmax = 2,898 × 10⁻³ / 5 800 ≈ 5,00 × 10⁻⁷ m = **500 nm**, dans le domaine **visible** (bleu-vert).\n\n2) La puissance se répartit sur une sphère de rayon d :\n\nC = P / (4π d²) = 3,83 × 10²⁶ / (4π × (1,50 × 10¹¹)²) = 3,83 × 10²⁶ / 2,83 × 10²³ ≈ **1,35 × 10³ W/m²**, soit environ 1 360 W/m².\n\n3) La Terre intercepte le rayonnement sur un disque de surface πR² = π × (6,37 × 10⁶)² ≈ 1,27 × 10¹⁴ m².\n\nP reçue = C × πR² ≈ 1 360 × 1,27 × 10¹⁴ ≈ **1,73 × 10¹⁷ W**.\n\n4) Cette puissance se répartit sur toute la surface de la sphère, 4πR² :\n\nP moyenne par m² = P reçue / (4πR²) = C / 4 ≈ 1 360 / 4 = **340 W/m²**." },
      ],
    },
    {
      id: "bilan-radiatif-terrestre",
      titre: "Le bilan radiatif terrestre et l'effet de serre",
      theme: "Le Soleil, notre source d'énergie",
      cours: `
## L'albédo
Une partie du rayonnement solaire reçu est directement **réfléchie** vers l'espace (par les nuages, les glaces, les sols clairs, l'atmosphère). L'**albédo** A est la fraction de la puissance reçue qui est réfléchie :

A = puissance réfléchie / puissance reçue (nombre entre 0 et 1).

| Surface | Albédo approximatif |
|---|---|
| Neige fraîche | 0,8 à 0,9 |
| Nuages épais | 0,6 à 0,9 |
| Désert de sable | 0,3 à 0,4 |
| Forêt | 0,1 à 0,15 |
| Océan | 0,05 à 0,1 |
| **Terre (moyenne)** | **environ 0,30** |

## Le bilan radiatif
Puissance moyenne reçue au sommet de l'atmosphère : environ 340 W/m².
- Réfléchie : 0,30 × 340 ≈ **102 W/m²**.
- Absorbée par le système Terre–atmosphère : (1 − A) × 340 = 0,70 × 340 ≈ **238 W/m²**.

À l'**équilibre**, la Terre doit **réémettre** vers l'espace autant de puissance qu'elle en absorbe (sinon sa température changerait). Elle réémet sous forme de rayonnement **infrarouge** (λmax ≈ 10 µm d'après la loi de Wien).

>! Si la Terre n'avait pas d'atmosphère, l'équilibre entre les 238 W/m² absorbés et le rayonnement émis par sa surface conduirait à une température moyenne d'environ **−18 °C (255 K)**. La température moyenne réelle est d'environ **+15 °C (288 K)** : la différence est due à l'**effet de serre**.

## L'effet de serre
L'atmosphère est presque transparente au rayonnement visible du Soleil, mais certains gaz **absorbent le rayonnement infrarouge** émis par la surface : vapeur d'eau H₂O, dioxyde de carbone CO₂, méthane CH₄, protoxyde d'azote N₂O.

Ces gaz réémettent ensuite de l'infrarouge **dans toutes les directions**, notamment **vers le sol**. La surface reçoit donc à la fois le rayonnement solaire et ce rayonnement de l'atmosphère : elle est plus chaude.

- L'**effet de serre naturel** est indispensable à la vie (environ +33 °C).
- L'augmentation de la concentration en CO₂ due aux activités humaines (combustibles fossiles, déforestation) **renforce** l'effet de serre : c'est la cause du **réchauffement climatique actuel**. La concentration en CO₂ est passée d'environ 280 ppm avant l'ère industrielle à plus de 420 ppm aujourd'hui.

## Rétroactions
Une **rétroaction positive** amplifie une perturbation. Exemple : le réchauffement fait fondre la banquise (albédo élevé), remplacée par l'océan (albédo faible) ; la Terre absorbe davantage, ce qui accentue le réchauffement.

>! Exemple résolu : une zone reçoit en moyenne 200 W/m². Couverte de neige (A = 0,85), elle absorbe 0,15 × 200 = 30 W/m² ; en océan libre (A = 0,07), elle absorbe 0,93 × 200 = 186 W/m², soit plus de 6 fois plus.

> **À retenir** : **albédo** terrestre ≈ 0,30 ; puissance absorbée ≈ 0,70 × 340 ≈ 238 W/m². À l'équilibre, la Terre réémet autant qu'elle absorbe, en **infrarouge**. L'**effet de serre** (H₂O, CO₂, CH₄ absorbent l'infrarouge et le renvoient en partie vers le sol) porte la température moyenne de −18 °C à +15 °C. Son renforcement par le CO₂ d'origine humaine provoque le réchauffement climatique.
`,
      exercices: [
        { type: "qcm", question: "L'albédo moyen de la Terre vaut environ :", choix: ["0,03", "0,30", "0,70", "0,95"], reponse: 1, explication: "Environ 30 % du rayonnement solaire reçu est réfléchi vers l'espace." },
        { type: "saisie", question: "Une surface reçoit 340 W/m² et a un albédo de 0,30. Quelle puissance (en W/m²) absorbe-t-elle ? Arrondis à l'unité.", reponses: ["238"], explication: "P absorbée = (1 − A) × 340 = 0,70 × 340 = **238 W/m²**." },
        { type: "vf", question: "Les gaz à effet de serre absorbent surtout le rayonnement visible venant du Soleil.", reponse: false, explication: "L'atmosphère est presque transparente au visible. Les gaz à effet de serre absorbent le rayonnement **infrarouge** émis par la surface terrestre." },
        { type: "qcm", question: "Sans effet de serre, la température moyenne de la surface terrestre serait d'environ :", choix: ["+15 °C", "0 °C", "−100 °C", "−18 °C"], reponse: 3, explication: "Environ −18 °C (255 K), contre +15 °C réellement : l'effet de serre naturel apporte environ +33 °C." },
        { type: "qcm", question: "Lequel de ces gaz n'est PAS un gaz à effet de serre important ?", choix: ["La vapeur d'eau", "Le dioxyde de carbone", "Le méthane", "Le diazote"], reponse: 3, explication: "Le diazote N₂ (78 % de l'air) n'absorbe pas l'infrarouge terrestre. H₂O, CO₂ et CH₄ sont des gaz à effet de serre." },
        { type: "vf", question: "La fonte de la banquise est une rétroaction positive du réchauffement climatique.", reponse: true, explication: "La glace (albédo élevé) laisse place à l'océan sombre (albédo faible), qui absorbe plus de rayonnement : le réchauffement s'accentue." },
        { type: "saisie", question: "Une surface reçoit 500 W/m² et en réfléchit 150 W/m². Quel est son albédo ?", reponses: ["0,3", "0,30", "0.3"], explication: "A = 150 / 500 = **0,30**." },
        { type: "redaction", question: "On modélise le bilan radiatif de la Terre. Données : puissance solaire moyenne reçue au sommet de l'atmosphère 340 W/m² ; albédo 0,30 ; température moyenne de surface 15 °C. 1) Calcule la puissance réfléchie et la puissance absorbée par m². 2) Calcule λmax du rayonnement émis par la surface terrestre et indique le domaine. 3) Explique le mécanisme de l'effet de serre. 4) Explique pourquoi l'augmentation de la concentration atmosphérique en CO₂ entraîne une hausse de la température moyenne.", corrige: "1) **Réfléchie** : 0,30 × 340 = **102 W/m²**. **Absorbée** : 340 − 102 = 0,70 × 340 = **238 W/m²**.\n\n2) T = 15 + 273 = 288 K. Loi de Wien : λmax = 2,898 × 10⁻³ / 288 ≈ 1,0 × 10⁻⁵ m = **10 µm**, dans l'**infrarouge**.\n\n3) **Effet de serre** : le rayonnement solaire, surtout visible, traverse l'atmosphère et chauffe la surface. La surface émet un rayonnement infrarouge. Les gaz à effet de serre (H₂O, CO₂, CH₄) absorbent une grande partie de cet infrarouge, puis le réémettent dans toutes les directions, en partie vers le sol. La surface reçoit donc, en plus du rayonnement solaire, un rayonnement infrarouge venant de l'atmosphère : sa température d'équilibre est plus élevée (+15 °C au lieu de −18 °C).\n\n4) Si la concentration en CO₂ augmente, l'atmosphère absorbe davantage d'infrarouge et en renvoie davantage vers le sol. Temporairement, la Terre émet vers l'espace moins de puissance qu'elle n'en absorbe (238 W/m²) : le bilan est déséquilibré et le système accumule de l'énergie. La température de surface s'élève jusqu'à ce qu'un nouvel équilibre soit atteint, à une température plus haute. Ce déséquilibre, amplifié par des rétroactions (vapeur d'eau, fonte des glaces), explique le réchauffement climatique actuel." },
      ],
    },
    {
      id: "photosynthese",
      titre: "Une conversion biologique : la photosynthèse",
      theme: "Le Soleil, notre source d'énergie",
      cours: `
## Les végétaux captent l'énergie solaire
Les végétaux chlorophylliens (plantes, algues, cyanobactéries) réalisent la **photosynthèse** : ils utilisent l'énergie **lumineuse** pour fabriquer de la **matière organique** à partir de matière minérale.

**6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂** (en présence de lumière et de chlorophylle)

- Réactifs : dioxyde de carbone (entré par les **stomates** des feuilles) et eau (absorbée par les racines).
- Produits : **glucose** (matière organique), transformé ensuite en amidon, cellulose... et **dioxygène** rejeté.

>! Vérifier l'équilibre : C : 6 = 6 ; H : 6 × 2 = 12 = 12 ; O : 6 × 2 + 6 × 1 = 18 à gauche et 6 + 6 × 2 = 18 à droite. L'équation est équilibrée.

L'énergie lumineuse est ainsi **convertie en énergie chimique** stockée dans les molécules organiques.

## Où et comment ?
La photosynthèse a lieu dans les **chloroplastes** des cellules chlorophylliennes, surtout dans les feuilles. Les **pigments** (chlorophylles a et b, caroténoïdes) absorbent la lumière.

Le **spectre d'absorption** des chlorophylles montre qu'elles absorbent surtout le **bleu-violet** et le **rouge**, et très peu le **vert**, qui est réfléchi ou transmis : c'est pourquoi les feuilles nous paraissent vertes. Le **spectre d'action** (intensité de la photosynthèse selon la couleur de la lumière) a la même allure que le spectre d'absorption.

## Un faible rendement
Seule une très petite partie de l'énergie solaire reçue par la Terre est utilisée pour la photosynthèse : à l'échelle du globe, **moins de 1 %**. Le reste est réfléchi, transmis, dissipé en chaleur, ou sert à l'évaporation de l'eau.

>! Exemple résolu : une parcelle reçoit 4,0 × 10⁶ J de lumière par m² et par jour ; la plante stocke 2,0 × 10⁴ J/m² dans sa biomasse. Rendement = 2,0 × 10⁴ / 4,0 × 10⁶ = 0,005 = **0,5 %**.

## La matière organique, ressource énergétique
- La biomasse produite est la base des **chaînes alimentaires** : les animaux et les décomposeurs utilisent cette matière et cette énergie (respiration). Une faible part de l'énergie passe d'un maillon au suivant (de l'ordre de 10 %).
- Au cours des temps géologiques, une petite partie de la matière organique a échappé à la décomposition : enfouie, elle s'est transformée lentement en **combustibles fossiles** (charbon, pétrole, gaz). Ces combustibles sont donc de l'**énergie solaire stockée** il y a des millions d'années.
- Leur combustion libère du CO₂ qui avait été retiré de l'atmosphère : c'est une perturbation du **cycle du carbone**.

> **À retenir** : **6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂** grâce à l'énergie lumineuse, dans les **chloroplastes**. La chlorophylle absorbe le **bleu** et le **rouge**, réfléchit le **vert**. Le rendement global est **inférieur à 1 %**. La matière organique nourrit les chaînes alimentaires et, fossilisée, forme charbon, pétrole et gaz.
`,
      exercices: [
        { type: "qcm", question: "Quels sont les réactifs de la photosynthèse ?", choix: ["Glucose et dioxygène", "Dioxyde de carbone et eau", "Dioxygène et eau", "Glucose et eau"], reponse: 1, explication: "La plante utilise CO₂ et H₂O ; elle produit glucose et O₂." },
        { type: "saisie", question: "Complète : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + ? O₂. Quel est le coefficient du dioxygène ?", reponses: ["6", "six"], explication: "Oxygène à gauche : 12 + 6 = 18 ; à droite : 6 dans le glucose + 2 × 6 = 18. Coefficient : **6**." },
        { type: "vf", question: "Les feuilles sont vertes parce que la chlorophylle absorbe fortement le vert.", reponse: false, explication: "C'est l'inverse : la chlorophylle absorbe le bleu et le rouge et **réfléchit** le vert, qui arrive à nos yeux." },
        { type: "qcm", question: "Dans quel organite a lieu la photosynthèse ?", choix: ["Le chloroplaste", "Le noyau", "La mitochondrie", "La vacuole"], reponse: 0, explication: "Le chloroplaste contient la chlorophylle. La mitochondrie est le lieu de la respiration." },
        { type: "saisie", question: "Une plante reçoit 5,0 × 10⁶ J/m² par jour et stocke 4,0 × 10⁴ J/m² dans sa biomasse. Quel est le rendement en % ?", reponses: ["0,8", "0,8 %", "0.8"], explication: "4,0 × 10⁴ / 5,0 × 10⁶ = 0,008 = **0,8 %**." },
        { type: "vf", question: "Le pétrole et le charbon proviennent de matière organique produite grâce à l'énergie solaire il y a des millions d'années.", reponse: true, explication: "Ils sont issus de la transformation lente de biomasse enfouie : c'est de l'énergie solaire stockée." },
        { type: "qcm", question: "À l'échelle de la planète, la part de l'énergie solaire reçue qui est convertie par photosynthèse est :", choix: ["environ 50 %", "environ 30 %", "environ 10 %", "inférieure à 1 %"], reponse: 3, explication: "Le rendement global de la photosynthèse est inférieur à 1 % de l'énergie solaire reçue." },
        { type: "redaction", question: "On place une plante aquatique (élodée) dans de l'eau enrichie en CO₂ et on mesure la quantité de dioxygène dans l'eau à la lumière, puis à l'obscurité. À la lumière, la teneur en O₂ augmente ; à l'obscurité, elle diminue lentement. 1) Interprète ces résultats. 2) Écris l'équation de la photosynthèse et vérifie qu'elle est équilibrée. 3) Explique comment l'énergie solaire captée par des végétaux peut se retrouver dans le moteur d'une voiture à essence, et la conséquence sur le climat.", corrige: "1) **À la lumière**, la plante réalise la photosynthèse : elle produit plus de dioxygène qu'elle n'en consomme par respiration, la teneur en O₂ augmente. **À l'obscurité**, la photosynthèse s'arrête mais la respiration continue (elle consomme O₂ et rejette CO₂) : la teneur en O₂ diminue. La lumière est donc indispensable à la photosynthèse.\n\n2) **6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂**.\n\nVérification : C : 6 et 6 ; H : 12 et 12 ; O : (6 × 2) + 6 = 18 à gauche, 6 + (6 × 2) = 18 à droite. L'équation est équilibrée.\n\n3) Il y a des dizaines à des centaines de millions d'années, des organismes photosynthétiques (plancton, végétaux) ont converti l'énergie lumineuse en énergie chimique stockée dans leur matière organique. Une partie de cette matière, enfouie dans des sédiments pauvres en dioxygène, a échappé à la décomposition et s'est lentement transformée en **pétrole**. L'essence issue du raffinage du pétrole, en brûlant dans le moteur, libère cette énergie chimique : c'est de l'énergie solaire très ancienne.\n\nConséquence : la combustion libère du **CO₂** qui avait été retiré de l'atmosphère il y a des millions d'années. Elle augmente rapidement la concentration atmosphérique en CO₂, renforce l'effet de serre et contribue au réchauffement climatique." },
      ],
    },
    {
      id: "bilan-thermique-corps",
      titre: "Le bilan thermique du corps humain",
      theme: "Le Soleil, notre source d'énergie",
      cours: `
## Le corps, un système qui produit de la chaleur
La température interne du corps humain est maintenue autour de **37 °C** (310 K), quelle que soit la température extérieure : l'être humain est **homéotherme**.

Cette chaleur provient du **métabolisme** : les cellules utilisent les nutriments (glucose, lipides) et le dioxygène lors de la **respiration cellulaire** (C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O). Une grande partie de l'énergie libérée est dissipée sous forme de **chaleur**.

## La puissance thermique du corps
Au repos, un adulte dissipe environ **100 W**. Lors d'un effort intense, cette puissance peut atteindre plusieurs centaines de watts.

L'énergie vient de l'**alimentation**. On mesure souvent l'énergie alimentaire en **kilocalories** : **1 kcal ≈ 4,18 kJ** (= 4 180 J).

>! Exemple résolu : une ration de 2 000 kcal par jour correspond à E = 2 000 × 4 180 = 8,36 × 10⁶ J. Sur une journée (t = 24 × 3 600 = 86 400 s), la puissance moyenne est P = E / t = 8,36 × 10⁶ / 86 400 ≈ **97 W** : on retrouve l'ordre de grandeur de 100 W.

Rappel : **P = E / t** (P en W, E en J, t en s), et 1 Wh = 3 600 J.

## Les échanges thermiques avec l'environnement
À l'équilibre, la puissance produite par le métabolisme est égale à la puissance cédée à l'extérieur. Le corps échange de l'énergie par :
- **conduction** : contact direct avec un objet (sol froid, eau) ;
- **convection** : l'air ou l'eau en mouvement emporte la chaleur (vent) ;
- **rayonnement** : le corps émet de l'**infrarouge** (d'après la loi de Wien, λmax = 2,898 × 10⁻³ / 310 ≈ 9,3 µm) ; c'est ce que détectent les caméras thermiques ;
- **évaporation** : la **transpiration** (sueur) s'évapore en prélevant de l'énergie à la peau, ce qui la refroidit. C'est le mécanisme principal lors d'un effort ou quand il fait chaud.

## La régulation de la température
- Quand il fait **chaud** : vasodilatation des vaisseaux de la peau (plus de sang en surface, plus d'échanges), transpiration.
- Quand il fait **froid** : vasoconstriction (moins de pertes), frissons (contractions musculaires qui produisent de la chaleur), comportements (se couvrir).

Les vêtements limitent la convection et la conduction (l'air immobile emprisonné est un bon isolant).

>! Exemple : un sportif a une puissance métabolique de 600 W, dont environ 25 % sous forme de travail mécanique et 75 % de chaleur, soit 0,75 × 600 = 450 W de chaleur à évacuer, essentiellement par transpiration.

> **À retenir** : le corps est maintenu vers **37 °C** ; au repos il dissipe environ **100 W** (≈ 2 000 kcal/jour ; 1 kcal ≈ 4,18 kJ ; **P = E/t**). Il échange de la chaleur par **conduction, convection, rayonnement infrarouge** (λmax ≈ 9,3 µm) et **évaporation** de la sueur.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la puissance thermique dissipée par un adulte au repos ?", choix: ["Environ 1 W", "Environ 100 W", "Environ 1 000 W", "Environ 10 000 W"], reponse: 1, explication: "Environ 100 W au repos, ce qui correspond à environ 2 000 kcal par jour." },
        { type: "saisie", question: "Combien de kJ représentent 500 kcal ? (1 kcal = 4,18 kJ)", reponses: ["2090", "2 090", "2090 kJ", "2 090 kJ"], explication: "500 × 4,18 = **2 090 kJ**." },
        { type: "vf", question: "L'évaporation de la sueur refroidit la peau.", reponse: true, explication: "Pour s'évaporer, l'eau prélève de l'énergie à la peau, ce qui la refroidit." },
        { type: "saisie", question: "En appliquant la loi de Wien, calcule λmax (en µm, à 0,1 près) du rayonnement émis par la peau à 34 °C (307 K).", reponses: ["9,4", "9.4", "9,4 µm"], explication: "λmax = 2,898 × 10⁻³ / 307 ≈ 9,44 × 10⁻⁶ m ≈ **9,4 µm** (infrarouge)." },
        { type: "qcm", question: "Le vent donne une sensation de froid principalement à cause :", choix: ["de la conduction", "de la photosynthèse", "du rayonnement", "de la convection"], reponse: 3, explication: "L'air en mouvement emporte la chaleur de la peau : c'est la convection." },
        { type: "qcm", question: "Lequel de ces mécanismes permet de lutter contre le froid ?", choix: ["La vasodilatation cutanée", "La transpiration", "Le frisson", "Se découvrir"], reponse: 2, explication: "Le frisson est une contraction musculaire involontaire qui produit de la chaleur. Vasodilatation et transpiration servent au contraire à évacuer la chaleur." },
        { type: "saisie", question: "Une ration alimentaire de 2 400 kcal est consommée sur 24 h. Calcule la puissance moyenne en W (arrondie à l'unité). 1 kcal = 4,18 kJ.", reponses: ["116", "116 W"], explication: "E = 2 400 × 4 180 = 1,0032 × 10⁷ J ; t = 86 400 s ; P = 1,0032 × 10⁷ / 86 400 ≈ **116 W**." },
        { type: "redaction", question: "Un marathonien court pendant 3 h. Sa puissance métabolique est de 1 000 W, dont 20 % sont convertis en travail mécanique. 1) Calcule la puissance thermique à évacuer. 2) Calcule l'énergie thermique produite pendant la course, en J puis en kcal. 3) Cite les modes d'échange thermique et explique lequel est le plus important pendant la course. 4) Pourquoi est-il indispensable de boire ?", corrige: "1) Puissance thermique = 80 % de 1 000 W = **800 W**.\n\n2) t = 3 × 3 600 = 10 800 s.\n\nE = P × t = 800 × 10 800 = **8,64 × 10⁶ J**.\n\nEn kcal : 8,64 × 10⁶ / 4 180 ≈ **2 070 kcal**, l'équivalent d'une ration journalière.\n\n3) Le corps échange de la chaleur par **conduction** (contact avec le sol, faible), **convection** (air qui circule autour du coureur), **rayonnement infrarouge** et **évaporation** de la sueur. Pendant un effort intense, surtout par temps chaud, l'**évaporation** de la sueur est le mécanisme principal : elle peut évacuer plusieurs centaines de watts, alors que le rayonnement et la convection deviennent insuffisants quand l'air est chaud.\n\n4) La transpiration fait perdre beaucoup d'eau (souvent plus d'un litre par heure). Sans boire, le coureur se déshydrate, transpire moins, n'évacue plus assez de chaleur : sa température interne monte, avec un risque de coup de chaleur." },
      ],
    },
    {
      id: "forme-de-la-terre",
      titre: "La forme de la Terre : Ératosthène, méridiens et triangulation",
      theme: "La Terre, un astre singulier",
      cours: `
## Les preuves de la rotondité de la Terre
Dès l'Antiquité grecque, des arguments montrent que la Terre est **sphérique** :
- lors d'une **éclipse de Lune**, l'ombre de la Terre sur la Lune est toujours un **arc de cercle** (Aristote, IVe siècle av. J.-C.) ;
- un navire qui s'éloigne disparaît **par la coque d'abord**, puis par le mât ;
- en voyageant vers le sud, on voit apparaître de **nouvelles étoiles** et l'étoile Polaire est de plus en plus basse sur l'horizon.

## La mesure d'Ératosthène (vers 240 av. J.-C.)
**Ératosthène**, à Alexandrie, sait qu'à **Syène** (Assouan), le jour du solstice d'été à midi, le Soleil est **à la verticale** (il éclaire le fond des puits). Le même jour, à la même heure, à **Alexandrie**, située à peu près au nord de Syène, un bâton vertical (gnomon) fait une ombre : les rayons font un angle de **7,2°** avec la verticale.

Hypothèses : la Terre est sphérique et les rayons du Soleil arrivent **parallèles** (le Soleil est très loin).

Raisonnement : l'angle de 7,2° est égal à l'angle au centre de la Terre entre Syène et Alexandrie (angles alternes-internes). La distance Syène–Alexandrie est d'environ **5 000 stades**. La longueur d'un arc est **proportionnelle** à l'angle au centre :

circonférence = 5 000 × 360 / 7,2 = 5 000 × 50 = **250 000 stades**.

Avec 1 stade ≈ 157,5 m, on obtient environ 39 400 km ; avec une distance de 800 km, on trouve 800 × 50 = **40 000 km**, très proche de la valeur actuelle (environ 40 000 km pour un méridien).

## Méridiens, parallèles et coordonnées
- Un **méridien** est un demi-cercle allant d'un pôle à l'autre. Tous les méridiens ont la même longueur (environ 20 000 km pour un demi-cercle).
- Un **parallèle** est un cercle perpendiculaire à l'axe des pôles ; l'équateur est le plus grand. Le parallèle de latitude φ a pour rayon R × cos φ.
- La **latitude** est l'angle mesuré depuis l'équateur (0° à 90° N ou S) ; la **longitude** est l'angle mesuré depuis le méridien de Greenwich (0° à 180° E ou O).

## Calculer une longueur d'arc
Sur un cercle de rayon R, un arc d'angle au centre α (en degrés) a pour longueur :

**L = (α / 360) × 2πR**

>! Exemple résolu : Dunkerque (51,03° N) et Barcelone (41,39° N) sont presque sur le même méridien. Δφ = 9,64°. Avec R = 6 371 km : L = (9,64 / 360) × 2π × 6 371 ≈ **1 072 km**.

>! Exemple : la longueur du parallèle 60° N vaut 2π × 6 371 × cos 60° ≈ 20 000 km, la moitié de l'équateur.

Le **plus court chemin** entre deux points de la sphère est un arc de **grand cercle** (cercle centré sur le centre de la Terre), par exemple un méridien. C'est pourquoi les avions qui vont de Paris à Tokyo passent près du pôle Nord.

## La triangulation et la définition du mètre
Pour mesurer précisément un long arc de méridien, on utilise la **triangulation** : on mesure avec soin une seule longueur (la **base**), puis on ne mesure que des **angles** entre des points visibles de loin (clochers, sommets). Les longueurs se calculent avec la **loi des sinus** : dans un triangle ABC, a / sin A = b / sin B = c / sin C.

>! Exemple résolu : base AB = 10 km, angles en A = 60° et en B = 70°. L'angle en C vaut 180 − 60 − 70 = 50°. BC (opposé à A) = 10 × sin 60° / sin 50° ≈ **11,3 km** ; AC (opposé à B) = 10 × sin 70° / sin 50° ≈ **12,3 km**.

De **1792 à 1798**, **Delambre et Méchain** mesurent par triangulation l'arc de méridien de **Dunkerque à Barcelone**. Le **mètre** est alors défini comme **la dix-millionième partie du quart du méridien terrestre** : un méridien complet (cercle) mesure donc 40 000 km.

> **À retenir** : la Terre est sphérique (éclipses, navires, étoiles). **Ératosthène** : angle de 7,2° (1/50 de cercle) entre Syène et Alexandrie → circonférence = 50 × distance. Longueur d'arc **L = (α/360) × 2πR** ; parallèle de latitude φ : rayon R cos φ. **Triangulation** : une base mesurée + des angles + la loi des sinus. Le mètre (1799) = 1/10 000 000 du quart de méridien.
`,
      exercices: [
        { type: "qcm", question: "Quelle observation de l'Antiquité prouve que la Terre est sphérique ?", choix: ["Le Soleil se lève à l'est", "L'ombre de la Terre sur la Lune lors d'une éclipse est toujours un arc de cercle", "La Lune a des phases", "Les marées"], reponse: 1, explication: "Seule une sphère projette toujours une ombre circulaire, quelle que soit son orientation." },
        { type: "vf", question: "Ératosthène suppose que les rayons du Soleil arrivent parallèles sur la Terre.", reponse: true, explication: "Le Soleil est très éloigné : les rayons arrivant à Syène et à Alexandrie sont considérés comme parallèles. C'est ce qui permet d'égaler l'angle de l'ombre à l'angle au centre." },
        { type: "saisie", question: "Deux villes sont sur le même méridien, distantes de 500 km. L'angle des rayons solaires diffère de 4,5° entre elles. Quelle circonférence terrestre obtient-on, en km ?", reponses: ["40000", "40 000"], explication: "Circonférence = 500 × 360 / 4,5 = 500 × 80 = **40 000 km**." },
        { type: "qcm", question: "Avec R = 6 371 km, la longueur d'un arc de méridien de 1° vaut environ :", choix: ["111 km", "11 km", "637 km", "1 111 km"], reponse: 0, explication: "L = (1/360) × 2π × 6 371 ≈ 111 km." },
        { type: "qcm", question: "Le rayon du parallèle de latitude 60° est égal à :", choix: ["R", "R/2", "2R", "R√3"], reponse: 1, explication: "Rayon du parallèle = R cos φ = R cos 60° = R/2." },
        { type: "vf", question: "Le plus court chemin entre deux villes situées sur le même parallèle (hors équateur) suit ce parallèle.", reponse: false, explication: "Le plus court chemin est un arc de **grand cercle**, centré sur le centre de la Terre. Un parallèle (sauf l'équateur) n'est pas un grand cercle : le chemin le plus court s'en écarte vers le pôle." },
        { type: "saisie", question: "Triangulation : dans un triangle, la base AB mesure 10 km, l'angle en A vaut 40° et l'angle en B vaut 60°. Calcule AC (opposé à B), en km arrondi au dixième, avec la loi des sinus.", reponses: ["8,8", "8.8", "8,8 km"], explication: "Angle C = 180 − 40 − 60 = 80°. AC / sin B = AB / sin C, donc AC = 10 × sin 60° / sin 80° = 10 × 0,866 / 0,985 ≈ **8,8 km**." },
        { type: "saisie", question: "Le mètre a été défini comme la dix-millionième partie du quart du méridien. Quelle est alors la longueur d'un méridien complet (tour de la Terre par les pôles), en km ?", reponses: ["40000", "40 000"], explication: "Quart de méridien = 10 000 000 m = 10 000 km ; tour complet = 4 × 10 000 = **40 000 km**." },
        { type: "redaction", question: "Reproduis le raisonnement d'Ératosthène. À Syène, le jour du solstice d'été à midi, un bâton vertical n'a pas d'ombre. À Alexandrie, à 800 km au nord, un bâton vertical de 1,00 m porte une ombre de 12,6 cm. 1) Énonce les hypothèses. 2) Calcule l'angle entre les rayons et la verticale à Alexandrie. 3) Fais un schéma (décris-le) et justifie que cet angle est égal à l'angle au centre de la Terre. 4) Calcule la circonférence et le rayon de la Terre.", corrige: "1) **Hypothèses** : la Terre est une sphère ; les rayons du Soleil arrivent parallèles ; Syène et Alexandrie sont sur le même méridien.\n\n2) Dans le triangle rectangle formé par le bâton (1,00 m) et son ombre (0,126 m) : tan α = 0,126 / 1,00 = 0,126, donc α ≈ **7,2°**.\n\n3) **Schéma** : un cercle (la Terre) de centre O. À Syène (S), un rayon solaire arrive dans le prolongement du rayon OS (verticale). À Alexandrie (A), le bâton est dans le prolongement de OA ; le rayon solaire, parallèle à celui de Syène, fait un angle α avec la verticale OA. Les droites (OS) et le rayon arrivant en A sont parallèles, coupées par la sécante (OA) : l'angle α en A et l'angle au centre AOS sont **alternes-internes**, donc égaux. L'angle au centre vaut 7,2°.\n\n4) La longueur d'arc est proportionnelle à l'angle au centre :\n\ncirconférence = 800 × 360 / 7,2 = 800 × 50 = **40 000 km**.\n\nRayon : R = 40 000 / (2π) ≈ **6 370 km**, très proche de la valeur actuelle (6 371 km)." },
      ],
    },
    {
      id: "age-de-la-terre",
      titre: "L'histoire de l'âge de la Terre",
      theme: "La Terre, un astre singulier",
      cours: `
## Une question ancienne
Pendant longtemps, en Occident, l'âge de la Terre est estimé à partir de textes religieux : quelques **milliers d'années** (environ 6 000 ans). À partir du XVIIIe siècle, les scientifiques cherchent à l'évaluer par des **méthodes physiques et géologiques**. Chaque méthode repose sur des **hypothèses** qui seront ensuite discutées.

## Les principales étapes
| Date | Scientifique | Méthode | Estimation |
|---|---|---|---|
| 1778 | **Buffon** | refroidissement de boulets de fer chauffés, extrapolé à une Terre initialement en fusion | environ **75 000 ans** |
| 1859 | **Darwin** | durée de l'érosion d'une région (le Weald, en Angleterre) ; temps nécessaire à l'évolution | environ **300 millions d'années** |
| 1862 | **Kelvin** | refroidissement par conduction d'une Terre initialement liquide (gradient géothermique) | entre **20 et 400 millions d'années** (puis 20 à 40 Ma) |
| fin XIXe | géologues | épaisseur des sédiments ÷ vitesse de sédimentation | dizaines à centaines de millions d'années |
| 1899 | **Joly** | salinité des océans (apports de sel par les fleuves) | environ 90 millions d'années |
| 1956 | **Patterson** | **radiochronologie** uranium-plomb des **météorites** | **4,55 milliards d'années** |

## Pourquoi tant de désaccords ?
- **Buffon et Kelvin** ignoraient l'existence de la **radioactivité** (découverte par Becquerel en **1896**) : la désintégration des noyaux radioactifs dans les roches **produit de la chaleur**, ce qui ralentit le refroidissement. De plus, le manteau transporte la chaleur par **convection**, bien plus efficace que la conduction. Kelvin sous-estimait donc fortement l'âge.
- Les méthodes par **sédimentation** supposent une vitesse constante et une série complète, alors que l'érosion efface des couches.
- La méthode par la salinité ignore que le sel est aussi retiré des océans (dépôts d'évaporites).

>! Exemple résolu (sédimentation) : une série de 3 000 m de sédiments s'est déposée à la vitesse moyenne de 0,2 mm par an. Durée = 3 000 000 mm ÷ 0,2 mm/an = **15 millions d'années**. Ce n'est qu'une durée minimale pour cette série.

## La radiochronologie
La radioactivité fournit des « horloges » fiables, car la demi-vie d'un noyau ne dépend ni de la température ni de la pression. Patterson date des **météorites**, formées en même temps que la Terre et non modifiées depuis (contrairement aux roches terrestres, recyclées par la tectonique et l'érosion).

Aujourd'hui, l'âge de la Terre et du Système solaire est estimé à **environ 4,56 milliards d'années**. Les plus vieux minéraux terrestres connus (zircons d'Australie) ont environ 4,4 milliards d'années.

## Une démarche scientifique
L'histoire de l'âge de la Terre montre que la science avance par **modèles**, **hypothèses** et **controverses** (géologues et biologistes contre Kelvin), et que de nouvelles découvertes (la radioactivité) peuvent remettre en cause des conclusions établies.

> **À retenir** : Buffon (75 000 ans, refroidissement), Kelvin (20 à 400 Ma, conduction), Darwin (300 Ma, érosion), sédimentation et salinité (dizaines à centaines de Ma), puis **Patterson (1956) : 4,55 Ga** par radiochronologie des météorites. Kelvin ignorait la chaleur produite par la **radioactivité** et la **convection** du manteau. Âge actuel : **≈ 4,56 Ga**.
`,
      exercices: [
        { type: "qcm", question: "Qui a déterminé en 1956 un âge de 4,55 milliards d'années pour la Terre ?", choix: ["Buffon", "Kelvin", "Patterson", "Darwin"], reponse: 2, explication: "Clair Patterson, par datation uranium-plomb de météorites." },
        { type: "vf", question: "Kelvin a surestimé l'âge de la Terre car il ignorait la radioactivité.", reponse: false, explication: "Il l'a **sous-estimé** : la radioactivité produit de la chaleur dans la Terre, ce qui ralentit son refroidissement. Sans elle, le refroidissement paraît plus rapide, donc la Terre semble plus jeune." },
        { type: "qcm", question: "Sur quoi repose l'estimation de Buffon ?", choix: ["La salinité des océans", "L'évolution des espèces", "La datation au carbone 14", "Le refroidissement de boulets de fer chauffés"], reponse: 3, explication: "Buffon chauffe des boulets de différentes tailles, mesure leur temps de refroidissement et extrapole à une sphère de la taille de la Terre." },
        { type: "saisie", question: "Une couche de 600 m de sédiments s'est déposée à la vitesse moyenne de 0,3 mm par an. Combien de millions d'années a duré le dépôt ? (nombre seul)", reponses: ["2", "2 millions"], explication: "600 m = 600 000 mm ; 600 000 ÷ 0,3 = 2 000 000 ans = **2 millions d'années**." },
        { type: "qcm", question: "Pourquoi Patterson a-t-il daté des météorites plutôt que des roches terrestres ?", choix: ["Elles sont plus faciles à trouver", "Elles sont formées en même temps que la Terre et n'ont pas été transformées depuis", "Elles ne contiennent pas d'uranium", "Elles sont radioactives alors que les roches terrestres ne le sont pas"], reponse: 1, explication: "Les roches terrestres sont recyclées (tectonique, érosion, métamorphisme) ; les météorites sont des témoins intacts de la formation du Système solaire." },
        { type: "vf", question: "La demi-vie d'un noyau radioactif dépend de la température de la roche.", reponse: false, explication: "La demi-vie est indépendante de la température et de la pression : c'est ce qui fait des noyaux radioactifs des horloges fiables." },
        { type: "qcm", question: "Quel est l'âge actuellement admis de la Terre ?", choix: ["6 000 ans", "75 000 ans", "100 millions d'années", "environ 4,56 milliards d'années"], reponse: 3, explication: "Environ 4,56 milliards d'années, cohérent avec la datation des météorites." },
        { type: "redaction", question: "En t'appuyant sur l'histoire des sciences, explique pourquoi l'estimation de l'âge de la Terre a beaucoup varié entre le XVIIIe et le XXe siècle. Tu présenteras au moins trois méthodes, leurs hypothèses et leurs limites, et la méthode qui fait aujourd'hui consensus.", corrige: "**Introduction** : estimer l'âge de la Terre suppose de trouver un phénomène dont on connaît la vitesse. Chaque époque a utilisé les connaissances disponibles, ce qui explique des résultats très différents.\n\n**1. Le refroidissement (Buffon, Kelvin)**\n- Hypothèse : la Terre était initialement en fusion et se refroidit sans source de chaleur interne.\n- Buffon (1778), à partir du refroidissement de boulets de fer, trouve environ 75 000 ans. Kelvin (1862), avec les lois de la conduction thermique et le gradient géothermique, trouve 20 à 400 millions d'années, puis réduit à 20–40 Ma.\n- Limites : ils ignoraient la **radioactivité** (découverte en 1896), source de chaleur interne, et la **convection** du manteau. Leurs âges sont trop faibles.\n\n**2. La sédimentation et l'érosion (géologues, Darwin)**\n- Hypothèse : les sédiments se déposent (ou l'érosion agit) à vitesse constante. Darwin estime environ 300 Ma pour l'érosion du Weald ; il a besoin de temps longs pour l'évolution.\n- Limites : vitesses variables, lacunes dans les séries sédimentaires : on obtient seulement des durées minimales.\n\n**3. La salinité des océans (Joly, 1899)**\n- Hypothèse : les océans étaient d'eau douce au départ, les fleuves apportent du sel à vitesse constante. Résultat : environ 90 Ma.\n- Limites : le sel est aussi retiré (évaporites), les apports varient.\n\n**4. La radiochronologie (Patterson, 1956)**\n- La désintégration radioactive a une demi-vie constante, indépendante des conditions. Patterson date par la méthode uranium-plomb des **météorites**, contemporaines de la formation de la Terre : **4,55 milliards d'années**.\n\n**Conclusion** : l'âge de la Terre est aujourd'hui estimé à environ 4,56 milliards d'années. Cette histoire illustre comment une découverte (la radioactivité) peut remettre en cause un modèle, et comment les controverses entre physiciens, géologues et biologistes font progresser la science." },
      ],
    },
    {
      id: "terre-dans-univers",
      titre: "La Terre dans l'Univers : de Ptolémée à Kepler",
      theme: "La Terre, un astre singulier",
      cours: `
## Le modèle géocentrique
Dans l'Antiquité, **Aristote** (IVe siècle av. J.-C.) puis **Ptolémée** (IIe siècle) placent la **Terre immobile au centre** de l'Univers : c'est le **géocentrisme**. Le Soleil, la Lune et les planètes tournent autour d'elle. Pour expliquer le mouvement apparent compliqué des planètes (la **rétrogradation** : Mars semble parfois revenir en arrière dans le ciel), Ptolémée imagine des **épicycles** (petits cercles parcourus sur de grands cercles).

Ce modèle, en accord avec le sens commun (on ne sent pas la Terre bouger), domine pendant environ 1 400 ans.

## L'héliocentrisme
- **Aristarque de Samos** (IIIe siècle av. J.-C.) propose déjà que la Terre tourne autour du Soleil, sans être suivi.
- **Nicolas Copernic** publie en **1543** un modèle **héliocentrique** : le **Soleil est au centre**, la Terre tourne sur elle-même en un jour et autour du Soleil en un an. La rétrogradation s'explique simplement : la Terre, plus rapide, « dépasse » Mars sur son orbite. Mais Copernic garde des orbites circulaires et son modèle n'est pas plus précis que celui de Ptolémée.

## Les observations de Galilée
En **1609–1610**, **Galilée** pointe une **lunette** vers le ciel et observe :
- des **montagnes et cratères sur la Lune** : les astres ne sont pas parfaits ;
- quatre **satellites tournant autour de Jupiter** : tout ne tourne pas autour de la Terre ;
- les **phases de Vénus**, avec des tailles apparentes différentes : Vénus tourne autour du Soleil (le modèle de Ptolémée ne permet pas une phase « pleine » de Vénus) ;
- des **taches solaires** et une multitude d'étoiles dans la Voie lactée.

Ces observations soutiennent l'héliocentrisme. Galilée est condamné par l'Église en **1633** et doit abjurer.

## Les lois de Kepler
**Johannes Kepler**, à partir des observations très précises de **Tycho Brahe**, établit trois lois (1609 et 1619) :
1. **Loi des orbites** : chaque planète décrit une **ellipse** dont le Soleil occupe un des **foyers**.
2. **Loi des aires** : le segment Soleil–planète balaie des **aires égales en des durées égales** : la planète va plus vite quand elle est proche du Soleil.
3. **Loi des périodes** : le rapport **T² / a³** est le **même pour toutes les planètes** (T : période de révolution, a : demi-grand axe de l'orbite).

>! Exemple résolu : en prenant T en années et a en unités astronomiques (1 UA = distance moyenne Terre–Soleil ≈ 1,5 × 10⁸ km), pour la Terre T²/a³ = 1. Mars a a = 1,524 UA : T² = 1,524³ ≈ 3,54, donc T ≈ √3,54 ≈ **1,88 an**. Jupiter (a = 5,2 UA) : T = √(5,2³) ≈ **11,9 ans**.

En **1687**, **Newton** explique ces lois par la **gravitation universelle**.

## La Terre, un astre singulier
La Terre est une planète rocheuse parmi d'autres, mais la seule connue à posséder de l'**eau liquide** en surface de façon durable (distance au Soleil adaptée, atmosphère, effet de serre modéré) et la vie.

> **À retenir** : **géocentrisme** (Aristote, Ptolémée, épicycles) → **héliocentrisme** (Copernic, 1543). **Galilée** (1610, lunette) : relief lunaire, satellites de Jupiter, phases de Vénus. **Kepler** : orbites **elliptiques**, loi des **aires**, **T²/a³ = constante**. Newton (1687) : gravitation.
`,
      exercices: [
        { type: "qcm", question: "Qui a publié en 1543 un modèle plaçant le Soleil au centre ?", choix: ["Ptolémée", "Copernic", "Newton", "Aristote"], reponse: 1, explication: "Nicolas Copernic (De revolutionibus, 1543). Ptolémée et Aristote étaient géocentristes ; Newton est venu plus tard (1687)." },
        { type: "qcm", question: "Quelle observation de Galilée montre que tous les astres ne tournent pas autour de la Terre ?", choix: ["Les satellites de Jupiter", "Les cratères de la Lune", "Les étoiles de la Voie lactée", "Les éclipses de Soleil"], reponse: 0, explication: "Les quatre satellites de Jupiter tournent autour de Jupiter et non de la Terre." },
        { type: "vf", question: "D'après la première loi de Kepler, les planètes décrivent des cercles parfaits centrés sur le Soleil.", reponse: false, explication: "Les orbites sont des **ellipses** dont le Soleil occupe un **foyer** (et non le centre)." },
        { type: "qcm", question: "D'après la loi des aires, une planète va :", choix: ["à vitesse constante", "plus vite quand elle est loin du Soleil", "plus vite quand elle est proche du Soleil", "de plus en plus lentement au fil des siècles"], reponse: 2, explication: "Pour balayer la même aire en un même temps, la planète doit aller plus vite quand le segment Soleil–planète est court." },
        { type: "saisie", question: "Une planète a un demi-grand axe de 4 UA. En utilisant T²/a³ = 1 (T en années, a en UA), calcule sa période en années.", reponses: ["8"], explication: "T² = 4³ = 64, donc T = √64 = **8 ans**." },
        { type: "vf", question: "La rétrogradation apparente de Mars s'explique simplement dans le modèle héliocentrique.", reponse: true, explication: "La Terre, plus proche du Soleil et plus rapide, dépasse Mars : vu depuis la Terre, Mars semble reculer temporairement sur le fond des étoiles." },
        { type: "saisie", question: "Mercure a une période de révolution de 0,241 an. Quel est son demi-grand axe en UA (arrondi au centième) ? (T²/a³ = 1)", reponses: ["0,39", "0.39"], explication: "a³ = T² = 0,241² ≈ 0,0581, donc a = ∛0,0581 ≈ **0,39 UA**." },
        { type: "redaction", question: "Explique comment on est passé du modèle géocentrique au modèle héliocentrique. Tu présenteras le modèle de Ptolémée, la proposition de Copernic, les observations de Galilée et les apports de Kepler, en montrant le rôle des instruments et des mesures.", corrige: "**Le modèle géocentrique** : depuis Aristote et surtout Ptolémée (IIe siècle), la Terre est immobile au centre de l'Univers ; le Soleil, la Lune et les planètes tournent autour d'elle sur des cercles. Pour rendre compte de la rétrogradation des planètes, Ptolémée ajoute des épicycles. Ce modèle est complexe mais prédit correctement les positions et s'accorde avec l'expérience quotidienne.\n\n**Copernic (1543)** : il place le Soleil au centre ; la Terre tourne sur elle-même en un jour et autour du Soleil en un an. La rétrogradation s'explique naturellement (la Terre dépasse les planètes extérieures). Mais ses orbites restent circulaires et le modèle n'est pas plus précis : il n'est pas encore démontré.\n\n**Galilée (1610)** : grâce à la **lunette**, nouvel instrument, il observe le relief de la Lune (les astres ne sont pas parfaits), les satellites de Jupiter (un astre autre que la Terre est centre de mouvements) et surtout les **phases complètes de Vénus**, impossibles dans le modèle de Ptolémée mais prévues si Vénus tourne autour du Soleil. Ces observations renforcent l'héliocentrisme ; Galilée est condamné en 1633.\n\n**Kepler (1609–1619)** : grâce aux mesures très précises de Tycho Brahe, il montre que les orbites sont des **ellipses** dont le Soleil occupe un foyer, que la vitesse varie (loi des aires) et que T²/a³ est le même pour toutes les planètes. Le modèle héliocentrique devient alors plus précis que tous les précédents.\n\n**Conclusion** : le passage au modèle héliocentrique a pris près d'un siècle et demi ; il a reposé sur de nouveaux instruments, des mesures précises et des lois mathématiques, avant d'être expliqué par la gravitation universelle de Newton (1687)." },
      ],
    },
    {
      id: "son-phenomene-vibratoire",
      titre: "Le son, un phénomène vibratoire : fréquence et niveau sonore",
      theme: "Son et musique, porteurs d'information",
      cours: `
## Production et propagation du son
Un son est produit par un objet qui **vibre** (corde de guitare, membrane de haut-parleur, cordes vocales). La vibration se transmet de proche en proche au milieu environnant (air, eau, solide) : c'est une **onde mécanique**, une succession de compressions et de dilatations.

- Le son a besoin d'un **milieu matériel** : il ne se propage **pas dans le vide**.
- Vitesse du son : environ **340 m/s dans l'air** (à 15–20 °C), environ 1 500 m/s dans l'eau, plusieurs milliers de m/s dans les solides.

## Période et fréquence
Un son **périodique** se répète identique à lui-même. Sa **période T** (en secondes) est la durée d'un motif ; sa **fréquence f** (en hertz, Hz) est le nombre de motifs par seconde :

**f = 1 / T** et **T = 1 / f**

>! Exemple résolu : sur un oscillogramme, 4 périodes occupent 10 ms. T = 10 ÷ 4 = 2,5 ms = 2,5 × 10⁻³ s ; f = 1 / 2,5 × 10⁻³ = **400 Hz**.

>! Exemple : le la du diapason (la₃) a une fréquence de 440 Hz : T = 1/440 ≈ 2,27 × 10⁻³ s = 2,27 ms.

L'oreille humaine perçoit les sons de **20 Hz à 20 000 Hz** environ. En dessous : **infrasons** ; au-dessus : **ultrasons** (utilisés par les chauves-souris, les dauphins, l'échographie).

## Son pur et son composé
- Un **son pur** a un signal **sinusoïdal** (une seule fréquence) : c'est celui du diapason.
- Un **son composé** (instrument, voix) est la somme de sons purs : la **fréquence fondamentale** f₁ et des **harmoniques** de fréquences multiples : **fₙ = n × f₁** (2f₁, 3f₁...).

La **hauteur** d'un son (grave ou aigu) est déterminée par sa fréquence fondamentale. Le **timbre** (ce qui distingue une flûte d'un violon jouant la même note) dépend des harmoniques présents et de leurs amplitudes, visibles sur le **spectre** du son.

Pour une **corde vibrante**, la fréquence fondamentale est **inversement proportionnelle à sa longueur** : une corde deux fois plus courte (même tension, même corde) donne une fréquence deux fois plus grande. Elle augmente aussi avec la tension et diminue avec la masse de la corde.

## Intensité et niveau sonore
L'**intensité sonore I** est la puissance transportée par l'onde par unité de surface, en **W/m²**. L'oreille perçoit des intensités de 10⁻¹² W/m² (seuil d'audibilité, noté I₀) à environ 1 W/m² (seuil de douleur) : un rapport de mille milliards !

On utilise donc le **niveau d'intensité sonore** L, en **décibels (dB)** :

**L = 10 × log(I / I₀)** avec I₀ = 1,0 × 10⁻¹² W/m².

Inversement : **I = I₀ × 10^(L/10)**.

>! Exemple résolu : I = 1,0 × 10⁻⁵ W/m². L = 10 log(10⁻⁵ / 10⁻¹²) = 10 log(10⁷) = 10 × 7 = **70 dB**.

>! Exemple résolu : L = 90 dB. I = 10⁻¹² × 10⁹ = **1,0 × 10⁻³ W/m²**.

Les niveaux **ne s'additionnent pas** ; ce sont les **intensités** qui s'additionnent :
- **doubler** l'intensité ajoute **3 dB** (10 log 2 ≈ 3,0) : deux scooters à 70 dB font 73 dB, pas 140 dB ;
- **multiplier par 10** l'intensité ajoute **10 dB** : dix sources identiques à 60 dB donnent 70 dB.

L'intensité diminue avec la distance (elle se répartit sur une sphère de surface 4πd²) : doubler la distance divise I par 4, soit environ **−6 dB**.

| Situation | Niveau approximatif |
|---|---|
| Seuil d'audibilité | 0 dB |
| Chuchotement | 30 dB |
| Conversation | 60 dB |
| Rue animée | 70 à 80 dB |
| Concert, discothèque | 100 à 105 dB |
| Seuil de douleur | 120 dB |

> **À retenir** : le son est une **vibration** qui se propage dans un milieu matériel (340 m/s dans l'air). **f = 1/T** ; audible de 20 Hz à 20 kHz. Hauteur = fréquence fondamentale ; timbre = harmoniques (fₙ = n f₁). **L = 10 log(I/I₀)**, I₀ = 10⁻¹² W/m² ; doubler I → +3 dB ; ×10 → +10 dB.
`,
      exercices: [
        { type: "vf", question: "Le son se propage dans le vide.", reponse: false, explication: "Le son est une onde mécanique : il a besoin d'un milieu matériel (air, eau, solide). Dans le vide, il ne se propage pas." },
        { type: "saisie", question: "Un son a une période de 5,0 ms. Quelle est sa fréquence en Hz ?", reponses: ["200", "200 Hz"], explication: "f = 1/T = 1 / 5,0 × 10⁻³ = **200 Hz**." },
        { type: "qcm", question: "Un son composé a une fréquence fondamentale de 220 Hz. Laquelle de ces fréquences peut être celle d'un de ses harmoniques ?", choix: ["330 Hz", "500 Hz", "660 Hz", "110 Hz"], reponse: 2, explication: "Les harmoniques ont des fréquences multiples entières du fondamental : 440, 660, 880 Hz... 660 = 3 × 220." },
        { type: "qcm", question: "Deux instruments jouent la même note avec la même intensité. Ce qui permet de les distinguer est :", choix: ["la hauteur", "la vitesse du son", "la fréquence fondamentale", "le timbre"], reponse: 3, explication: "Même note = même fréquence fondamentale (même hauteur). Le timbre dépend des harmoniques et permet de reconnaître l'instrument." },
        { type: "saisie", question: "Calcule le niveau sonore (en dB) correspondant à une intensité de 1,0 × 10⁻⁴ W/m² (I₀ = 10⁻¹² W/m²).", reponses: ["80", "80 dB"], explication: "L = 10 log(10⁻⁴ / 10⁻¹²) = 10 log(10⁸) = **80 dB**." },
        { type: "qcm", question: "Une tondeuse produit 80 dB. Deux tondeuses identiques fonctionnent ensemble. Le niveau sonore est d'environ :", choix: ["80 dB", "83 dB", "90 dB", "160 dB"], reponse: 1, explication: "Les intensités s'additionnent : I double, donc L augmente de 10 log 2 ≈ 3 dB : 83 dB." },
        { type: "saisie", question: "Un niveau sonore vaut 100 dB. Quelle est l'intensité sonore en W/m² ? (écris par exemple 1 × 10^-2)", reponses: ["1 × 10^-2", "10^-2", "0,01", "1 x 10^-2", "1e-2", "1,0 × 10^-2", "1 × 10⁻²", "10⁻²"], explication: "I = I₀ × 10^(L/10) = 10⁻¹² × 10¹⁰ = **10⁻² W/m²** = 0,01 W/m²." },
        { type: "redaction", question: "Lors d'un concert, un sonomètre placé à 10 m d'une enceinte indique 96 dB. 1) Calcule l'intensité sonore à cet endroit. 2) On ajoute une deuxième enceinte identique : quel est le nouveau niveau ? 3) Avec une seule enceinte, quel niveau mesure-t-on à 20 m (on admet que I est divisée par 4 quand la distance double) ? 4) La note la plus aiguë jouée a une période de 0,25 ms : est-elle audible ? Donnée : I₀ = 1,0 × 10⁻¹² W/m².", corrige: "1) I = I₀ × 10^(L/10) = 10⁻¹² × 10^9,6 ≈ **4,0 × 10⁻³ W/m²**.\n\n2) Deux enceintes : l'intensité double, I' = 8,0 × 10⁻³ W/m².\n\nL' = 10 log(8,0 × 10⁻³ / 10⁻¹²) = 10 log(8,0 × 10⁹) ≈ **99 dB** (soit 96 + 3 dB).\n\n3) À 20 m : I'' = 4,0 × 10⁻³ / 4 = 1,0 × 10⁻³ W/m².\n\nL'' = 10 log(10⁻³ / 10⁻¹²) = 10 log(10⁹) = **90 dB** (environ 6 dB de moins).\n\n4) f = 1/T = 1 / 0,25 × 10⁻³ = **4 000 Hz**. Cette fréquence est comprise entre 20 Hz et 20 000 Hz : le son est **audible** (et c'est même une zone où l'oreille est très sensible)." },
      ],
    },
    {
      id: "musique-gammes",
      titre: "La musique ou l'art de faire entendre les nombres : gammes et tempérament",
      theme: "Son et musique, porteurs d'information",
      cours: `
## Intervalles et rapports de fréquences
En musique, on s'intéresse à l'**intervalle** entre deux notes, caractérisé par le **rapport** de leurs fréquences (f₂ / f₁), et non par leur différence.

| Intervalle | Rapport de fréquences |
|---|---|
| **Octave** | 2 |
| **Quinte** (juste) | 3/2 |
| Quarte | 4/3 |
| Ton pythagoricien | 9/8 |

Deux notes à l'**octave** sonnent comme « la même note », l'une plus aiguë : on leur donne le même nom (la₃ à 440 Hz, la₄ à 880 Hz). Pour ajouter des intervalles, on **multiplie** les rapports : quinte puis quarte = 3/2 × 4/3 = 2 (une octave).

Selon la tradition, **Pythagore** (VIe siècle av. J.-C.) étudie ces rapports sur un **monocorde** : une corde deux fois plus courte sonne à l'octave, une corde aux 2/3 de la longueur sonne à la quinte.

## La gamme de Pythagore
Une **gamme** est une suite de notes dans une octave. Pour construire la gamme de Pythagore, on enchaîne des **quintes** (on multiplie par 3/2) et on **ramène dans l'octave** (on divise par 2 quand on dépasse le double de la note de départ).

>! Exemple résolu à partir de do = 264 Hz (octave : 264 à 528 Hz).

- sol = 264 × 3/2 = **396 Hz** ;
- ré = 396 × 3/2 = 594 Hz, supérieur à 528 : on divise par 2 → **297 Hz** ;
- la = 297 × 3/2 = **445,5 Hz** ;
- mi = 445,5 × 3/2 = 668,25 → ÷ 2 → **334,1 Hz** ;
- si = 334,125 × 3/2 ≈ **501,2 Hz** ;
- fa (quinte descendante depuis do) : 264 × 2/3 = 176 → × 2 → **352 Hz**.

On obtient la gamme à 7 notes : do 264, ré 297, mi 334,1, fa 352, sol 396, la 445,5, si 501,2, do 528. Les écarts sont des **tons** (rapport 9/8) ou des **demi-tons** (rapport 256/243 ≈ 1,053), inégaux.

## Le problème : la spirale des quintes ne se referme pas
En enchaînant **12 quintes**, on espère retomber sur la note de départ, **7 octaves** plus haut. Or :
- (3/2)¹² ≈ 129,75 ;
- 2⁷ = 128.

Les deux ne sont pas égaux : l'écart, le **comma pythagoricien**, vaut 129,75 / 128 ≈ **1,0136**. Mathématiquement, aucune puissance de 3/2 n'est égale à une puissance de 2 (3ⁿ est impair, 2ᵐ est pair). Le cycle des quintes ne se referme **jamais** : il faut faire un compromis, ce qui gêne pour **transposer** un morceau dans une autre tonalité.

## La gamme tempérée
Au XVIIe–XVIIIe siècle (Bach, « Le Clavier bien tempéré »), le **tempérament égal** s'impose : l'octave est divisée en **12 demi-tons égaux**. Le rapport d'un demi-ton est le nombre q tel que q¹² = 2 :

**q = 2^(1/12) ≈ 1,0595**

- La **quinte tempérée** (7 demi-tons) vaut 2^(7/12) ≈ **1,4983**, très proche de 1,5 (quinte juste) ;
- toutes les tonalités deviennent équivalentes : on peut transposer librement.

>! Exemple résolu : à partir de la₃ = 440 Hz, le do situé 3 demi-tons plus haut a pour fréquence 440 × 2^(3/12) ≈ **523,3 Hz**. Le mi situé une quinte (7 demi-tons) au-dessus vaut 440 × 2^(7/12) ≈ **659,3 Hz** (contre 660 Hz pour une quinte juste).

Les fréquences de la gamme tempérée forment une **suite géométrique** de raison 2^(1/12).

> **À retenir** : octave = rapport **2**, quinte = **3/2**. Gamme de Pythagore : quintes successives ramenées dans l'octave. 12 quintes ≠ 7 octaves (**comma** ≈ 1,0136) : le cycle ne se ferme pas. Gamme **tempérée** : 12 demi-tons égaux de rapport **2^(1/12) ≈ 1,0595** ; quinte tempérée ≈ 1,498.
`,
      exercices: [
        { type: "qcm", question: "Quel est le rapport de fréquences d'une octave ?", choix: ["3/2", "2", "4/3", "9/8"], reponse: 1, explication: "Une note à l'octave supérieure a une fréquence double." },
        { type: "saisie", question: "Quelle est la fréquence (en Hz) de la quinte juste au-dessus d'un la à 440 Hz ?", reponses: ["660", "660 Hz"], explication: "440 × 3/2 = **660 Hz**." },
        { type: "vf", question: "En enchaînant 12 quintes justes, on retombe exactement sur la note de départ 7 octaves plus haut.", reponse: false, explication: "(3/2)¹² ≈ 129,75 alors que 2⁷ = 128 : l'écart est le comma pythagoricien (≈ 1,0136). Le cycle ne se referme pas." },
        { type: "saisie", question: "Gamme de Pythagore : à partir de sol = 396 Hz, on monte d'une quinte puis on ramène dans l'octave 264–528 Hz. Quelle fréquence obtient-on (note ré) ?", reponses: ["297", "297 Hz"], explication: "396 × 3/2 = 594 Hz, supérieur à 528 : on divise par 2 → **297 Hz**." },
        { type: "qcm", question: "Dans la gamme tempérée, le rapport de fréquences entre deux demi-tons successifs vaut :", choix: ["2^(1/12) ≈ 1,0595", "2/12", "1/12", "3/2"], reponse: 0, explication: "On veut 12 demi-tons égaux formant une octave : q¹² = 2, donc q = 2^(1/12) ≈ 1,0595." },
        { type: "saisie", question: "Un la₄ vaut 880 Hz. Quelle est la fréquence du la₂, deux octaves plus bas ?", reponses: ["220", "220 Hz"], explication: "Descendre d'une octave divise par 2 : 880 → 440 → **220 Hz**." },
        { type: "qcm", question: "Calcule 2^(7/12), le rapport de la quinte tempérée :", choix: ["1,414", "1,4983", "1,5000", "1,3348"], reponse: 1, explication: "2^(7/12) ≈ 1,4983, légèrement inférieur à la quinte juste 1,5. 1,414 = √2 (6 demi-tons) ; 1,3348 ≈ 2^(5/12) (quarte)." },
        { type: "saisie", question: "Gamme tempérée : à partir de la = 440 Hz, calcule la fréquence de la note 3 demi-tons plus haut (do), arrondie au dixième de Hz.", reponses: ["523,3", "523.3", "523,3 Hz"], explication: "440 × 2^(3/12) = 440 × 1,1892 ≈ **523,3 Hz**." },
        { type: "redaction", question: "1) Construis les cinq premières notes obtenues par la méthode de Pythagore à partir de do = 132 Hz (octave 132–264 Hz) en montant de quinte en quinte et en ramenant dans l'octave. Range-les par fréquence croissante. 2) Montre que 12 quintes ne font pas 7 octaves et calcule le comma pythagoricien. 3) Explique comment la gamme tempérée résout ce problème, et donne la fréquence du sol tempéré (7 demi-tons au-dessus de do = 132 Hz), à comparer avec le sol pythagoricien.", corrige: "1) **Quintes successives** (× 3/2), ramenées dans [132 ; 264] :\n- do = 132 Hz ;\n- sol = 132 × 1,5 = **198 Hz** ;\n- ré = 198 × 1,5 = 297 Hz, supérieur à 264 → ÷ 2 → **148,5 Hz** ;\n- la = 148,5 × 1,5 = **222,75 Hz** ;\n- mi = 222,75 × 1,5 = 334,125 → ÷ 2 → **167,06 Hz**.\n\nPar fréquence croissante : do 132 ; ré 148,5 ; mi 167,06 ; sol 198 ; la 222,75 Hz (gamme pentatonique).\n\n2) 12 quintes : (3/2)¹² = 531 441 / 4 096 ≈ 129,75. 7 octaves : 2⁷ = 128. Ces valeurs diffèrent. Le comma vaut :\n\n(3/2)¹² / 2⁷ = 531 441 / 524 288 ≈ **1,0136**.\n\nPlus fondamentalement, 3¹² est impair et 2¹⁹ est pair : l'égalité est impossible, aucun nombre de quintes ne redonne exactement un nombre entier d'octaves.\n\n3) La **gamme tempérée** divise l'octave en 12 demi-tons **égaux**, de rapport q = 2^(1/12) ≈ 1,0595, de sorte que q¹² = 2 exactement. Les quintes deviennent légèrement fausses mais le cycle se referme et toutes les tonalités sont équivalentes (on peut transposer).\n\nSol tempéré : 132 × 2^(7/12) ≈ 132 × 1,4983 ≈ **197,8 Hz**, contre 198 Hz en gamme de Pythagore : la différence est très faible, à peine perceptible." },
      ],
    },
    {
      id: "numerisation-son",
      titre: "Le son, une information à coder : numérisation et débit",
      theme: "Son et musique, porteurs d'information",
      cours: `
## Signal analogique et signal numérique
Un microphone transforme le son en **signal électrique analogique** : une tension qui varie de façon **continue** dans le temps. Pour le stocker ou le transmettre par ordinateur, on le **numérise** : on le transforme en une suite de nombres écrits en binaire (0 et 1).

La numérisation comporte deux étapes.

## 1. L'échantillonnage
On mesure la valeur du signal à intervalles de temps réguliers Tₑ (la **période d'échantillonnage**). La **fréquence d'échantillonnage** fₑ = 1 / Tₑ est le nombre de mesures (échantillons) par seconde.

Pour que le signal numérique soit fidèle, la fréquence d'échantillonnage doit être **au moins le double** de la plus haute fréquence contenue dans le son (critère de **Nyquist-Shannon**) : **fₑ ≥ 2 × fmax**.

>! L'oreille entend jusqu'à 20 kHz : il faut fₑ ≥ 40 kHz. Le CD utilise **fₑ = 44,1 kHz**. Le téléphone, qui se limite à la voix (environ 4 kHz), utilise 8 kHz.

## 2. La quantification
Chaque échantillon est arrondi à une valeur parmi un nombre fini de niveaux, codée sur **n bits**. Avec n bits, on dispose de **2ⁿ niveaux** :
- 8 bits → 2⁸ = 256 niveaux ;
- 16 bits (CD) → 2¹⁶ = 65 536 niveaux ;
- 24 bits (studio) → 2²⁴ ≈ 16,8 millions de niveaux.

Le **pas de quantification** est l'écart entre deux niveaux : pas = (étendue des valeurs) / 2ⁿ. Plus n est grand, plus l'arrondi est fin et la numérisation fidèle.

>! Exemple : un signal variant de −5 V à +5 V (étendue 10 V) codé sur 3 bits a 2³ = 8 niveaux, de pas 10 / 8 = 1,25 V. Sur 16 bits, le pas tombe à 10 / 65 536 ≈ 0,15 mV.

## Débit binaire et taille d'un fichier
Le **débit binaire** D est le nombre de bits produits par seconde :

**D = fₑ × n × (nombre de voies)** (en bit/s ; stéréo = 2 voies)

La **taille** d'un fichier non compressé vaut : **taille = D × durée** (en bits), puis on divise par 8 pour l'avoir en octets.

>! Exemple résolu (CD) : D = 44 100 × 16 × 2 = **1 411 200 bit/s** ≈ 1,41 Mbit/s. Pour 1 min : 1 411 200 × 60 = 84 672 000 bits = 10 584 000 octets ≈ **10,6 Mo**.

Rappels : 1 octet = 8 bits ; 1 ko = 10³ octets ; 1 Mo = 10⁶ octets ; 1 Go = 10⁹ octets.

## La compression
Pour réduire la taille, on **compresse** :
- **sans perte** (FLAC) : on retrouve exactement le fichier initial ;
- **avec perte** (MP3, AAC) : on supprime des informations peu perceptibles par l'oreille (sons masqués par d'autres plus forts, fréquences extrêmes). Un MP3 à 128 kbit/s est environ 1 411 / 128 ≈ **11 fois** plus léger que le CD.

>! Exemple : une chanson de 3 min en MP3 à 128 kbit/s occupe 128 000 × 180 = 23 040 000 bits = **2,88 Mo**, contre environ 31,8 Mo en qualité CD.

> **À retenir** : numériser = **échantillonner** (fₑ ≥ 2 fmax ; CD : 44,1 kHz) puis **quantifier** (n bits → 2ⁿ niveaux ; CD : 16 bits). **D = fₑ × n × voies** ; taille = D × durée (÷ 8 pour les octets). CD : 1,41 Mbit/s. La compression avec perte (MP3) supprime ce que l'oreille perçoit peu.
`,
      exercices: [
        { type: "qcm", question: "La fréquence d'échantillonnage d'un CD audio est :", choix: ["8 kHz", "20 kHz", "44,1 kHz", "1,41 MHz"], reponse: 2, explication: "44,1 kHz, soit plus du double de 20 kHz, la limite de l'audition humaine." },
        { type: "saisie", question: "Combien de niveaux différents permet une quantification sur 8 bits ?", reponses: ["256"], explication: "2⁸ = **256** niveaux." },
        { type: "vf", question: "Pour numériser fidèlement un son contenant des fréquences jusqu'à 15 kHz, une fréquence d'échantillonnage de 20 kHz suffit.", reponse: false, explication: "Il faut fₑ ≥ 2 × 15 = 30 kHz. 20 kHz est insuffisant : le signal serait déformé." },
        { type: "saisie", question: "Calcule le débit binaire (en kbit/s) d'un signal téléphonique : fₑ = 8 kHz, 8 bits, mono.", reponses: ["64", "64 kbit/s"], explication: "D = 8 000 × 8 × 1 = 64 000 bit/s = **64 kbit/s**." },
        { type: "qcm", question: "Quel est le débit d'un enregistrement studio à 48 kHz, 24 bits, stéréo ?", choix: ["1,152 Mbit/s", "96 kbit/s", "1,411 Mbit/s", "2,304 Mbit/s"], reponse: 3, explication: "D = 48 000 × 24 × 2 = 2 304 000 bit/s = 2,304 Mbit/s." },
        { type: "vf", question: "Le format MP3 est une compression avec perte.", reponse: true, explication: "Il supprime des informations jugées peu audibles ; on ne peut pas retrouver exactement le signal d'origine." },
        { type: "saisie", question: "Un signal variant entre 0 et 8 V est quantifié sur 4 bits. Quel est le pas de quantification, en V ?", reponses: ["0,5", "0.5", "0,5 V"], explication: "2⁴ = 16 niveaux ; pas = 8 / 16 = **0,5 V**." },
        { type: "redaction", question: "Un morceau de musique dure 4 min. 1) Calcule le débit binaire en qualité CD (44,1 kHz, 16 bits, stéréo). 2) Calcule la taille du fichier non compressé en Mo. 3) Le même morceau en MP3 occupe 5,76 Mo : calcule son débit en kbit/s et le taux de compression. 4) Explique pourquoi fₑ = 44,1 kHz a été choisie, et ce qui se passerait avec fₑ = 22,05 kHz.", corrige: "1) D = 44 100 × 16 × 2 = **1 411 200 bit/s** ≈ 1,41 Mbit/s.\n\n2) Durée : 4 × 60 = 240 s.\n\nTaille = 1 411 200 × 240 = 338 688 000 bits ; en octets : 338 688 000 / 8 = 42 336 000 octets ≈ **42,3 Mo**.\n\n3) 5,76 Mo = 5 760 000 octets = 46 080 000 bits.\n\nDébit MP3 = 46 080 000 / 240 = 192 000 bit/s = **192 kbit/s**.\n\nTaux de compression : 42,336 / 5,76 ≈ **7,35** (le fichier MP3 est environ 7 fois plus léger ; 192 kbit/s × 7,35 ≈ 1 411 kbit/s).\n\n4) L'oreille humaine perçoit les sons jusqu'à environ 20 kHz. D'après le critère de Nyquist-Shannon, il faut fₑ ≥ 2 × 20 kHz = 40 kHz : 44,1 kHz respecte ce critère avec une marge. Avec fₑ = 22,05 kHz, on ne pourrait restituer correctement que les fréquences inférieures à 11 kHz environ : les aigus (harmoniques des cymbales, timbre des instruments) seraient perdus ou déformés et le son paraîtrait étouffé." },
      ],
    },
    {
      id: "oreille-audition",
      titre: "Entendre la musique : l'oreille et le cerveau",
      theme: "Son et musique, porteurs d'information",
      cours: `
## Le trajet du son dans l'oreille
L'oreille transforme une vibration de l'air en **message nerveux**. Elle comprend trois parties :

| Partie | Structures | Rôle |
|---|---|---|
| **Oreille externe** | pavillon, conduit auditif | capter et canaliser le son jusqu'au tympan |
| **Oreille moyenne** | **tympan**, **osselets** (marteau, enclume, étrier) | le tympan vibre ; les osselets transmettent et **amplifient** la vibration jusqu'à la fenêtre ovale |
| **Oreille interne** | **cochlée** (remplie de liquide) | les **cellules ciliées** transforment la vibration en message nerveux |

## La cochlée et les cellules ciliées
La vibration de l'étrier met en mouvement le liquide de la **cochlée**. Les **cils** des **cellules ciliées** (environ 15 000 par oreille) sont inclinés ; cela déclenche un **message nerveux** transmis par le **nerf auditif** au cerveau.

Chaque région de la cochlée est sensible à une gamme de fréquences : la **base** détecte les sons **aigus**, le **sommet** les sons **graves**. Le cerveau sait donc quelles fréquences sont présentes : il analyse le son comme un spectre.

## Le rôle du cerveau
Le message nerveux arrive au **cortex auditif** (dans le lobe temporal). C'est le cerveau qui donne du sens : il reconnaît une voix, une mélodie, un instrument, localise une source (en comparant les signaux des deux oreilles). La perception de la musique fait aussi intervenir la mémoire et les émotions ; l'apprentissage musical modifie le cerveau (**plasticité cérébrale**).

## Le champ auditif
L'oreille humaine perçoit les sons de **20 Hz à 20 000 Hz**, et elle est **plus sensible** entre environ 1 000 et 5 000 Hz (domaine de la voix). Un **audiogramme** représente le seuil d'audition selon la fréquence. Avec l'âge, la perception des aigus diminue (**presbyacousie**).

## Les risques auditifs
Les cellules ciliées peuvent être **détruites** par des sons trop intenses ou une exposition trop longue ; chez l'être humain, elles **ne se régénèrent pas** : la perte est **définitive** (surdité, **acouphènes** = sifflements permanents).

- Danger à partir d'environ **80 dB** en exposition prolongée ; la douleur apparaît vers **120 dB**.
- Le risque dépend du **niveau** et de la **durée** : chaque fois que le niveau augmente de **3 dB** (intensité doublée), la durée d'exposition sans risque est **divisée par 2**.

>! Exemple résolu : si 8 h à 80 dB constituent la limite, à 83 dB la limite est 4 h, à 86 dB 2 h, à 89 dB 1 h, à 92 dB 30 min. Pour 98 dB : 18 dB de plus = 6 fois 3 dB, la durée est divisée par 2⁶ = 64 : 480 min / 64 = **7,5 min**.

Protections : bouchons d'oreille, s'éloigner des enceintes (doubler la distance fait perdre environ 6 dB), faire des pauses, limiter le volume du casque.

> **À retenir** : oreille externe (pavillon, conduit) → oreille moyenne (**tympan**, **osselets**) → oreille interne (**cochlée**, **cellules ciliées**) → **nerf auditif** → **cortex auditif**. Base de la cochlée = aigus, sommet = graves. Champ auditif 20 Hz – 20 kHz. Les cellules ciliées détruites **ne repoussent pas** : danger à partir de 80 dB ; +3 dB → durée d'exposition sûre ÷ 2.
`,
      exercices: [
        { type: "qcm", question: "Quelle structure transforme la vibration sonore en message nerveux ?", choix: ["Le tympan", "Les osselets", "Les cellules ciliées de la cochlée", "Le pavillon"], reponse: 2, explication: "Les cellules ciliées de la cochlée réalisent cette transformation. Le tympan et les osselets transmettent la vibration." },
        { type: "saisie", question: "Comment s'appellent les trois osselets de l'oreille moyenne ? (ordre du tympan vers l'oreille interne, séparés par des virgules)", reponses: ["marteau, enclume, étrier", "marteau, enclume, etrier", "marteau enclume étrier"], explication: "**Marteau**, **enclume**, **étrier** : ils transmettent et amplifient la vibration du tympan jusqu'à la fenêtre ovale." },
        { type: "vf", question: "Chez l'être humain, les cellules ciliées détruites par un bruit trop fort se régénèrent en quelques semaines.", reponse: false, explication: "Elles ne se régénèrent pas : la perte auditive est **définitive**." },
        { type: "qcm", question: "La base de la cochlée est sensible aux sons :", choix: ["aigus", "graves", "de toutes fréquences de la même façon", "inaudibles uniquement"], reponse: 0, explication: "La base détecte les aigus, le sommet les graves : chaque fréquence stimule une zone précise." },
        { type: "qcm", question: "Où le message nerveux auditif est-il interprété ?", choix: ["Dans la cochlée", "Dans le tympan", "Dans le cortex auditif du cerveau", "Dans le conduit auditif"], reponse: 2, explication: "Le nerf auditif conduit le message au cortex auditif (lobe temporal), où le son est perçu et interprété." },
        { type: "saisie", question: "On admet qu'une exposition de 8 h à 80 dB est la limite sans risque, et que la durée est divisée par 2 à chaque augmentation de 3 dB. Quelle est la durée maximale (en heures) à 89 dB ?", reponses: ["1", "1 h", "une heure"], explication: "89 − 80 = 9 dB = 3 × 3 dB ; 8 / 2³ = **1 h**." },
        { type: "vf", question: "L'oreille humaine est la plus sensible pour les fréquences comprises entre 1 000 et 5 000 Hz environ.", reponse: true, explication: "C'est le domaine de la voix ; le seuil d'audition y est le plus bas." },
        { type: "redaction", question: "Un élève écoute de la musique au casque à 95 dB, pendant 2 h par jour. 1) Décris le trajet du son et du message nerveux depuis le casque jusqu'au cerveau. 2) En utilisant la règle « 8 h à 80 dB, durée divisée par 2 à chaque +3 dB », calcule la durée maximale d'exposition à 95 dB. Conclus. 3) Explique pourquoi les dégâts sont irréversibles et propose deux conseils de prévention.", corrige: "1) **Trajet** : le haut-parleur du casque fait vibrer l'air du **conduit auditif**. L'onde fait vibrer le **tympan**, qui met en mouvement les **osselets** (marteau, enclume, étrier) ; ceux-ci amplifient et transmettent la vibration à la fenêtre ovale. Le liquide de la **cochlée** se met en mouvement, ce qui incline les cils des **cellules ciliées** : elles produisent un **message nerveux**, transmis par le **nerf auditif** jusqu'au **cortex auditif** du cerveau, qui l'interprète (mélodie, voix, instruments).\n\n2) 95 − 80 = 15 dB = 5 × 3 dB. La durée est divisée par 2⁵ = 32 :\n\n8 h = 480 min ; 480 / 32 = **15 min**.\n\nL'élève s'expose 2 h, soit **8 fois plus** que la durée maximale : il risque une perte auditive.\n\n3) Les sons trop intenses abîment ou détruisent les cils des cellules ciliées ; or, chez l'être humain, ces cellules **ne se renouvellent pas**. La perte (surdité partielle, souvent dans les aigus, acouphènes) est donc définitive.\n\nConseils : baisser le volume (passer à 80 dB permet 8 h ; chaque −3 dB double la durée permise) ; faire des pauses régulières ; utiliser un casque à réduction de bruit pour éviter de monter le volume ; porter des bouchons en concert et s'éloigner des enceintes." },
      ],
    },
  ],
};
