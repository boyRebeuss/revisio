export default {
  chapitres: [
    {
      id: "grands-empires",
      titre: "Les grands empires : Ghana, Mali, Songhaï",
      theme: "Histoire",
      cours: `
## Trois grands empires de l'Afrique de l'Ouest
Il y a très longtemps, bien avant l'arrivée des Européens, de **grands empires** se sont formés dans la région du fleuve Niger et du fleuve Sénégal. Ils se sont succédé : d'abord le **Ghana**, puis le **Mali**, puis le **Songhaï**.

| Empire | Peuple fondateur | Capitale | Grand souverain |
|---|---|---|---|
| **Ghana** | les Soninkés | Koumbi Saleh | le roi appelé « Kaya Maghan » (le roi de l'or) |
| **Mali** | les Malinkés (Mandingues) | Niani | **Soundiata Keïta**, puis **Kankou Moussa** |
| **Songhaï** | les Songhaïs | Gao | **Sonni Ali Ber**, puis **l'Askia Mohammed** |

## L'empire du Ghana
- C'est le plus ancien des trois. Les Soninkés l'appelaient le **Wagadou**.
- Il était riche grâce au **commerce de l'or et du sel** : l'or venait du sud, le sel venait du Sahara. Les caravanes de chameaux traversaient le désert.
- Au **XIe siècle**, il est attaqué par les **Almoravides** venus du nord. Il s'affaiblit puis disparaît.

## L'empire du Mali
- Vers **1235**, **Soundiata Keïta** bat le roi Soumaoro Kanté à la **bataille de Kirina**. Il fonde l'empire du Mali.
- En **1324**, l'empereur **Kankou Moussa** fait le pèlerinage à **La Mecque**. Il emporte tant d'or que sa richesse devient célèbre jusqu'en Europe.
- Les villes de **Tombouctou** et **Djenné** deviennent des centres de commerce et de savoir (mosquées, écoles, livres).

## L'empire songhaï
- Sa capitale est **Gao**, sur le fleuve Niger.
- **Sonni Ali Ber** agrandit l'empire. **L'Askia Mohammed** l'organise et développe l'islam et les études à Tombouctou.
- En **1591**, l'armée du Maroc, équipée d'**armes à feu**, bat les Songhaïs à la **bataille de Tondibi**. L'empire s'effondre.

>! **Méthode** : pour ne pas mélanger les trois empires, retiens l'ordre **G – M – S** (Ghana, Mali, Songhaï), comme l'ordre des siècles. Associe chaque empire à une capitale : Koumbi Saleh, Niani, Gao.

## Erreurs fréquentes
- L'ancien empire du Ghana **n'était pas** à la place du Ghana actuel : il était entre le sud de la Mauritanie et l'ouest du Mali actuels.
- Soundiata Keïta a **fondé** l'empire du Mali ; Kankou Moussa est célèbre pour son **pèlerinage**.

> **À retenir** :
> - Ghana (Soninkés, Koumbi Saleh), Mali (Soundiata Keïta, Kirina vers 1235), Songhaï (Gao, fin en 1591 à Tondibi).
> - Leur richesse venait du commerce de l'or et du sel à travers le Sahara.
> - Tombouctou et Djenné étaient des villes de commerce et de savoir.
`,
      exercices: [
        { type: "qcm", question: "Dans quel ordre les trois grands empires se sont-ils succédé ?", choix: ["Mali, Ghana, Songhaï", "Ghana, Mali, Songhaï", "Songhaï, Mali, Ghana", "Ghana, Songhaï, Mali"], reponse: 1, explication: "Le Ghana est le plus ancien. Le Mali lui succède au XIIIe siècle, puis le Songhaï, qui tombe en 1591." },
        { type: "qcm", question: "Qui a fondé l'empire du Mali ?", choix: ["Kankou Moussa", "Sonni Ali Ber", "Soundiata Keïta", "Soumaoro Kanté"], reponse: 2, explication: "Soundiata Keïta a fondé l'empire du Mali après sa victoire de Kirina. Soumaoro Kanté est le roi qu'il a battu ; Kankou Moussa est un empereur plus tardif." },
        { type: "vf", question: "L'empire du Ghana était riche grâce au commerce de l'or et du sel.", reponse: true, explication: "Vrai : l'or venait du sud, le sel du Sahara. Les caravanes les échangeaient." },
        { type: "saisie", question: "Quelle était la capitale de l'empire songhaï ?", reponses: ["Gao"], explication: "Gao, sur le fleuve Niger, était la capitale de l'empire songhaï." },
        { type: "vf", question: "L'ancien empire du Ghana se trouvait au même endroit que le Ghana actuel.", reponse: false, explication: "Faux : l'ancien Ghana était entre le sud de la Mauritanie et l'ouest du Mali actuels. Le pays actuel a seulement repris son nom." },
        { type: "qcm", question: "Quel empereur du Mali est célèbre pour son pèlerinage à La Mecque en 1324 ?", choix: ["Kankou Moussa", "Soundiata Keïta", "l'Askia Mohammed", "Sonni Ali Ber"], reponse: 0, explication: "Kankou Moussa fit le pèlerinage en 1324 avec beaucoup d'or : sa richesse devint célèbre jusqu'en Europe." },
        { type: "saisie", question: "En quelle année l'armée marocaine a-t-elle vaincu les Songhaïs à Tondibi ?", reponses: ["1591"], explication: "En 1591, à Tondibi, les soldats marocains avaient des armes à feu. L'empire songhaï s'effondre." },
        { type: "qcm", question: "Quelles villes étaient de grands centres de commerce et de savoir ?", choix: ["Dakar et Saint-Louis", "Gao et Dakar", "Kaolack et Thiès", "Tombouctou et Djenné"], reponse: 3, explication: "Tombouctou et Djenné, au Mali actuel, avaient des mosquées, des écoles et beaucoup de livres." },
        { type: "redaction", question: "Explique en quelques phrases pourquoi les empires du Ghana, du Mali et du Songhaï étaient riches et puissants.", corrige: "Ces empires étaient riches grâce au **commerce**. Ils contrôlaient les routes des caravanes qui traversaient le Sahara. Ils échangeaient l'**or** du sud contre le **sel** du désert. Les rois prélevaient des taxes sur ce commerce.\n\nIls étaient puissants grâce à leurs **armées** et à de grands souverains comme Soundiata Keïta ou l'Askia Mohammed. Des villes comme **Tombouctou** et **Djenné** attiraient marchands et savants." },
      ],
    },
    {
      id: "royaumes-senegal",
      titre: "Les royaumes du Sénégal",
      theme: "Histoire",
      cours: `
## Le Tekrour, un royaume très ancien
Le **Tekrour** se trouvait dans la vallée du fleuve Sénégal (le **Fouta Toro** actuel). Il est connu depuis plus de mille ans. Son roi **War Diabi** s'est converti à l'islam au XIe siècle : c'est l'un des premiers royaumes musulmans d'Afrique de l'Ouest.

## Le Djolof et son éclatement
Selon la tradition, **Ndiadiane Ndiaye** a fondé le royaume du **Djolof**. Le Djolof a dominé les autres royaumes wolofs et sérères : **Waalo, Cayor, Baol, Sine et Saloum**.

Au **XVIe siècle**, le Cayor se libère du Djolof (bataille de **Danki**, gagnée par Amary Ngoné Sobel Fall). Les autres royaumes deviennent eux aussi indépendants.

## Les royaumes et le titre de leur roi

| Royaume | Région actuelle | Titre du roi |
|---|---|---|
| **Djolof** | Linguère, Louga | le **Bourba** |
| **Waalo** | bas fleuve Sénégal | le **Brak** |
| **Cayor** | entre Dakar et Saint-Louis | le **Damel** |
| **Baol** | Diourbel | le **Teigne** |
| **Sine** | Fatick | le **Bour Sine** |
| **Saloum** | Kaolack | le **Bour Saloum** |
| **Fouta Toro** | vallée du fleuve | l'**Almamy** (à partir de la fin du XVIIIe siècle) |
| **Gabou** | Casamance, Guinée-Bissau | le **Mansa** (royaume mandingue) |

## La société
- Le roi était entouré de grandes familles et de conseillers. La **linguère** (mère ou sœur du roi) avait un rôle important.
- La société était organisée en **groupes** : nobles, hommes libres (paysans), artisans (forgerons, cordonniers, griots…), captifs.
- Les **griots** gardaient l'histoire des familles et la racontaient.
- Des femmes ont marqué l'histoire, comme **Ndaté Yalla Mbodj**, linguère du Waalo, qui s'est opposée aux Français au XIXe siècle.

>! **Méthode** : pour retenir les titres, associe-les deux par deux : Damel (Cayor) et Teigne (Baol), voisins ; Bour Sine et Bour Saloum, voisins sérères ; Bourba (Djolof) et Brak (Waalo).

> **À retenir** :
> - Le Tekrour, dans la vallée du fleuve, est le plus ancien royaume connu du Sénégal.
> - Le Djolof dominait le Waalo, le Cayor, le Baol, le Sine et le Saloum, jusqu'au XVIe siècle.
> - Titres : Bourba (Djolof), Brak (Waalo), Damel (Cayor), Teigne (Baol), Bour (Sine et Saloum), Almamy (Fouta).
`,
      exercices: [
        { type: "qcm", question: "Quel était le titre du roi du Cayor ?", choix: ["le Brak", "le Damel", "le Bourba", "le Teigne"], reponse: 1, explication: "Le roi du Cayor portait le titre de Damel. Le Brak régnait sur le Waalo, le Bourba sur le Djolof, le Teigne sur le Baol." },
        { type: "saisie", question: "Selon la tradition, qui a fondé le royaume du Djolof ? (prénom et nom)", reponses: ["Ndiadiane Ndiaye", "Ndiadiane N'Diaye"], explication: "Selon la tradition, Ndiadiane Ndiaye est le fondateur du Djolof." },
        { type: "vf", question: "Le Djolof a dominé pendant longtemps les royaumes du Waalo, du Cayor, du Baol, du Sine et du Saloum.", reponse: true, explication: "Vrai, jusqu'au XVIe siècle, quand le Cayor puis les autres royaumes se sont libérés." },
        { type: "qcm", question: "Dans quelle région actuelle se trouvait le royaume du Baol ?", choix: ["Ziguinchor", "Saint-Louis", "Diourbel", "Tambacounda"], reponse: 2, explication: "Le Baol se trouvait autour de Diourbel. Son roi portait le titre de Teigne." },
        { type: "qcm", question: "Quel royaume, dans la vallée du fleuve Sénégal, est l'un des premiers d'Afrique de l'Ouest à devenir musulman ?", choix: ["le Sine", "le Gabou", "le Cayor", "le Tekrour"], reponse: 3, explication: "Le Tekrour : son roi War Diabi s'est converti à l'islam au XIe siècle." },
        { type: "saisie", question: "Comment appelait-on le roi du Sine ?", reponses: ["Bour Sine", "Bour", "Bour du Sine"], explication: "Le roi du Sine était le Bour Sine ; celui du Saloum, le Bour Saloum." },
        { type: "vf", question: "Les griots gardaient l'histoire des familles et la racontaient.", reponse: true, explication: "Vrai : les griots sont les gardiens de la mémoire et de l'histoire orale." },
        { type: "qcm", question: "Qui était Ndaté Yalla Mbodj ?", choix: ["la linguère du Waalo, qui s'est opposée aux Français", "la fondatrice du Djolof", "une reine de l'empire du Mali", "la première présidente du Sénégal"], reponse: 0, explication: "Ndaté Yalla Mbodj était linguère du Waalo au XIXe siècle. Elle s'est opposée à l'avancée française." },
        { type: "redaction", question: "Recopie et complète ce tableau : Cayor → ? ; Waalo → ? ; Djolof → ? ; Saloum → ? (titre du roi). Puis explique en une phrase ce qui s'est passé au XVIe siècle.", corrige: "- Cayor → **Damel**\n- Waalo → **Brak**\n- Djolof → **Bourba**\n- Saloum → **Bour Saloum**\n\nAu XVIe siècle, le **Cayor** s'est libéré du Djolof (bataille de Danki) ; les autres royaumes sont devenus indépendants à leur tour et le Djolof a perdu sa domination." },
      ],
    },
    {
      id: "traite-atlantique",
      titre: "La traite atlantique et l'esclavage",
      theme: "Histoire",
      cours: `
## Les Européens arrivent sur les côtes
Au **XVe siècle**, les navigateurs **portugais** arrivent sur les côtes du Sénégal. Puis viennent les Hollandais, les Anglais et les Français. Ils installent des **comptoirs** (lieux de commerce) sur la côte et sur des îles : **Gorée**, **Saint-Louis**.

## Le commerce triangulaire
La **traite atlantique** est le commerce d'êtres humains réduits en esclavage, transportés d'Afrique vers l'Amérique. Elle a duré du **XVIe au XIXe siècle**. On l'appelle **commerce triangulaire** car les bateaux faisaient trois trajets :

1. **Europe → Afrique** : les bateaux apportent des tissus, des armes, de l'alcool, de la pacotille (bijoux sans valeur).
2. **Afrique → Amérique** : ils emportent des **captifs africains**, enchaînés, dans des conditions terribles. Beaucoup meurent pendant la traversée.
3. **Amérique → Europe** : ils rapportent du **sucre**, du **coton**, du **café**, produits par les esclaves dans les plantations.

## Gorée, un lieu de mémoire
L'île de **Gorée**, en face de Dakar, avait des comptoirs. Sa **Maison des Esclaves** rappelle les souffrances des captifs. Gorée est inscrite au **patrimoine mondial de l'UNESCO depuis 1978**. C'est un **symbole** de la traite, visité par des personnes du monde entier.

## Les conséquences pour l'Afrique
- Des millions d'hommes, de femmes et d'enfants arrachés à leur pays : l'Afrique perd des forces jeunes.
- Des **guerres** et des razzias (attaques de villages) pour capturer des gens.
- La peur et l'insécurité dans les villages.

## La fin de la traite et de l'esclavage
La traite est interdite au début du XIXe siècle. La **France abolit l'esclavage en 1848**. Aujourd'hui, la traite et l'esclavage sont reconnus comme des **crimes contre l'humanité**.

>! **Méthode** : pour réciter le commerce triangulaire, dessine un triangle Europe – Afrique – Amérique et écris sur chaque côté ce que transportent les bateaux.

> **À retenir** :
> - La traite atlantique (XVIe-XIXe siècle) : commerce triangulaire Europe → Afrique → Amérique → Europe.
> - Gorée, avec la Maison des Esclaves, est un lieu de mémoire (UNESCO, 1978).
> - La France abolit l'esclavage en 1848.
`,
      exercices: [
        { type: "qcm", question: "Quels Européens sont arrivés les premiers sur les côtes du Sénégal, au XVe siècle ?", choix: ["les Anglais", "les Français", "les Portugais", "les Hollandais"], reponse: 2, explication: "Les navigateurs portugais sont arrivés les premiers au XVe siècle. Les autres sont venus ensuite." },
        { type: "vf", question: "Pendant la traite atlantique, les bateaux emportaient des captifs africains vers l'Amérique.", reponse: true, explication: "Vrai : c'est le deuxième trajet du commerce triangulaire, le plus terrible." },
        { type: "qcm", question: "Que rapportaient les bateaux d'Amérique vers l'Europe ?", choix: ["des armes et de l'alcool", "du sucre, du coton et du café", "des captifs", "de l'or et du sel"], reponse: 1, explication: "Ils rapportaient les produits des plantations : sucre, coton, café. Les armes et l'alcool allaient de l'Europe vers l'Afrique." },
        { type: "saisie", question: "Quelle île, en face de Dakar, est un lieu de mémoire de la traite avec sa Maison des Esclaves ?", reponses: ["Gorée", "île de Gorée"], explication: "L'île de Gorée, inscrite au patrimoine mondial de l'UNESCO en 1978." },
        { type: "saisie", question: "En quelle année la France a-t-elle aboli l'esclavage ?", reponses: ["1848"], explication: "La France a aboli l'esclavage en 1848." },
        { type: "vf", question: "La traite atlantique n'a eu aucune conséquence pour l'Afrique.", reponse: false, explication: "Faux : l'Afrique a perdu des millions de personnes jeunes ; il y a eu des guerres et de l'insécurité." },
        { type: "qcm", question: "Pourquoi parle-t-on de commerce « triangulaire » ?", choix: ["parce que les bateaux étaient en forme de triangle", "parce qu'il durait trois siècles exactement", "parce qu'il y avait trois rois", "parce que les bateaux reliaient trois continents : Europe, Afrique, Amérique"], reponse: 3, explication: "Les trajets Europe → Afrique → Amérique → Europe dessinent un triangle sur la carte." },
        { type: "qcm", question: "Comment appelle-t-on aujourd'hui la traite et l'esclavage ?", choix: ["des crimes contre l'humanité", "un simple commerce", "une guerre entre royaumes", "une migration volontaire"], reponse: 0, explication: "La traite et l'esclavage sont reconnus comme des crimes contre l'humanité." },
        { type: "redaction", question: "Ton correspondant étranger visite Gorée avec toi. Explique-lui en quelques phrases ce qu'était la traite atlantique et pourquoi on visite la Maison des Esclaves.", corrige: "La traite atlantique était le **commerce d'êtres humains** réduits en esclavage, du XVIe au XIXe siècle. Les bateaux européens apportaient des marchandises en Afrique, emportaient des **captifs** vers l'Amérique, puis rapportaient du sucre, du coton et du café en Europe : c'est le **commerce triangulaire**.\n\nGorée avait des comptoirs. La **Maison des Esclaves** rappelle les souffrances des captifs. On la visite pour **ne pas oublier** ce crime contre l'humanité et pour honorer les victimes. Gorée est inscrite au patrimoine mondial de l'UNESCO depuis 1978." },
      ],
    },
    {
      id: "conquete-resistances",
      titre: "La conquête coloniale et les résistances",
      theme: "Histoire",
      cours: `
## La conquête du Sénégal par la France
Au **XIXe siècle**, la France veut contrôler l'intérieur du pays, ses terres et ses richesses (surtout l'**arachide**). Le gouverneur **Louis Faidherbe**, arrivé à la tête de la colonie en **1854**, mène la conquête avec une armée et construit des forts. Le **chemin de fer Dakar – Saint-Louis**, ouvert en **1885**, aide les Français à transporter soldats et arachide.

## Les grandes figures de la résistance

| Résistant | Région / royaume | Ce qu'il faut retenir |
|---|---|---|
| **El Hadj Omar Tall** | Fouta Toro | chef religieux toucouleur ; il assiège le fort de **Médine** en **1857** ; il meurt en **1864** près de Bandiagara (Mali actuel) |
| **Maba Diakhou Bâ** | Rip (Saloum) | chef musulman ; il meurt en **1867** à la bataille de Somb |
| **Lat Dior Ngoné Latyr Diop** | **Cayor** (damel) | refuse le chemin de fer sur ses terres ; tué à **Dékheulé** en **octobre 1886** |
| **Alboury Ndiaye** | **Djolof** (bourba) | dernier grand roi du Djolof ; il refuse de se soumettre et meurt en exil au Niger actuel |
| **Cheikh Ahmadou Bamba** | Baol (Touba) | résistance **pacifique** (sans armes) ; exilé au **Gabon** en **1895** |
| **Aline Sitoé Diatta** | Casamance (Kabrousse) | refuse que les Français prennent le riz et les jeunes hommes pendant la Seconde Guerre mondiale ; arrêtée en **1943**, elle meurt en déportation à **Tombouctou** en **1944** |

## Deux façons de résister
- La **résistance armée** : batailles contre les troupes françaises (Lat Dior, El Hadj Omar, Alboury Ndiaye, Maba).
- La **résistance pacifique** : refuser d'obéir sans prendre les armes (Cheikh Ahmadou Bamba, Aline Sitoé Diatta).

## Pourquoi la France a gagné
Les Français avaient des **armes modernes** (fusils, canons), des forts, et ils profitaient des **divisions** entre les royaumes.

>! **Méthode** : pour réviser, fais une fiche par résistant : nom, région, date à retenir, type de résistance (armée ou pacifique).

## Erreur fréquente
Ne confonds pas **Lat Dior** (damel du **Cayor**) et **Alboury Ndiaye** (bourba du **Djolof**).

> **À retenir** :
> - Faidherbe mène la conquête à partir de 1854.
> - Lat Dior (Cayor) meurt à Dékheulé en 1886 ; El Hadj Omar assiège Médine en 1857 ; Alboury Ndiaye (Djolof) meurt en exil.
> - Cheikh Ahmadou Bamba et Aline Sitoé Diatta : résistance pacifique.
`,
      textes: {
        latdior: `**Lat Dior et le chemin de fer** — texte d'entraînement

Les Français voulaient construire un chemin de fer entre Dakar et Saint-Louis. Il devait traverser le Cayor. Le damel Lat Dior refusa. Il savait que le train servirait à faire venir des soldats et à emporter l'arachide. Il prit les armes. Le chemin de fer fut pourtant ouvert en 1885. En octobre 1886, Lat Dior et ses derniers fidèles furent tués au combat à Dékheulé. Aujourd'hui, il est un héros national.`,
      },
      exercices: [
        { type: "qcm", texte: "latdior", question: "D'après le texte, pourquoi Lat Dior refusait-il le chemin de fer ?", choix: ["parce que le train était trop bruyant", "parce qu'il voulait le construire lui-même", "parce que le train servirait à faire venir des soldats et à emporter l'arachide", "parce qu'il préférait les bateaux"], reponse: 2, explication: "Le texte le dit : le train servirait aux soldats français et à emporter l'arachide du Cayor." },
        { type: "saisie", texte: "latdior", question: "Dans quel royaume Lat Dior était-il damel ?", reponses: ["Cayor", "Kayor"], explication: "Lat Dior était damel (roi) du Cayor." },
        { type: "saisie", texte: "latdior", question: "Où Lat Dior a-t-il été tué en 1886 ?", reponses: ["Dékheulé", "Dékhelé"], explication: "Il est tombé au combat à Dékheulé, en octobre 1886." },
        { type: "qcm", question: "Quel gouverneur a mené la conquête du Sénégal à partir de 1854 ?", choix: ["Louis Faidherbe", "Blaise Diagne", "Alboury Ndiaye", "Léopold Sédar Senghor"], reponse: 0, explication: "Louis Faidherbe dirigeait la colonie à partir de 1854. Blaise Diagne et Senghor sont des hommes politiques sénégalais du XXe siècle." },
        { type: "qcm", question: "Quel résistant était bourba du Djolof ?", choix: ["Lat Dior", "Maba Diakhou Bâ", "El Hadj Omar Tall", "Alboury Ndiaye"], reponse: 3, explication: "Alboury Ndiaye était le bourba (roi) du Djolof. Lat Dior était damel du Cayor." },
        { type: "vf", question: "Cheikh Ahmadou Bamba a mené une résistance pacifique, sans armes.", reponse: true, explication: "Vrai : il a refusé de se soumettre sans faire la guerre. Les Français l'ont exilé au Gabon en 1895." },
        { type: "qcm", question: "Aline Sitoé Diatta a résisté en Casamance. Que refusait-elle ?", choix: ["la construction d'un port", "que les Français prennent le riz et les jeunes hommes", "l'arrivée des Portugais", "l'indépendance"], reponse: 1, explication: "Pendant la Seconde Guerre mondiale, elle refusait les réquisitions de riz et le recrutement des jeunes. Arrêtée en 1943, elle est morte à Tombouctou en 1944." },
        { type: "vf", question: "El Hadj Omar Tall a assiégé le fort de Médine en 1857.", reponse: true, explication: "Vrai : le chef toucouleur a assiégé ce fort français sur le fleuve Sénégal en 1857." },
        { type: "qcm", question: "Pourquoi les Français ont-ils fini par gagner ?", choix: ["parce que les résistants n'avaient pas de chefs", "parce que les royaumes étaient alliés entre eux", "parce qu'ils avaient des armes modernes et profitaient des divisions entre royaumes", "parce que les Sénégalais voulaient être colonisés"], reponse: 2, explication: "Fusils, canons et forts, et des royaumes divisés : ce sont les raisons de la victoire française." },
        { type: "redaction", question: "Choisis deux résistants : l'un qui a combattu avec les armes, l'autre qui a résisté sans armes. Présente-les en quelques phrases (nom, région, ce qu'ils ont fait).", corrige: "**Résistance armée : Lat Dior Ngoné Latyr Diop.** Il était damel du Cayor. Il a refusé le chemin de fer Dakar – Saint-Louis, qui devait traverser son royaume. Il a combattu les Français et il est mort à Dékheulé en octobre 1886.\n\n**Résistance pacifique : Aline Sitoé Diatta.** Elle vivait à Kabrousse, en Casamance. Pendant la Seconde Guerre mondiale, elle a demandé aux habitants de ne pas donner leur riz et leurs jeunes hommes aux Français. Elle a été arrêtée en 1943 et elle est morte en déportation à Tombouctou en 1944.\n\n(On peut aussi choisir El Hadj Omar, Alboury Ndiaye ou Maba pour la résistance armée, Cheikh Ahmadou Bamba pour la résistance pacifique.)" },
      ],
    },
    {
      id: "colonie-independance",
      titre: "De la colonie à l'indépendance",
      theme: "Histoire",
      cours: `
## L'Afrique-Occidentale française (AOF)
En **1895**, la France regroupe ses colonies d'Afrique de l'Ouest dans l'**AOF**, dirigée par un **gouverneur général**. La capitale est d'abord **Saint-Louis**, puis **Dakar à partir de 1902**. Au milieu du XXe siècle, l'AOF comptait huit colonies : Sénégal, Mauritanie, Soudan français (Mali actuel), Guinée, Côte d'Ivoire, Haute-Volta (Burkina Faso actuel), Niger, Dahomey (Bénin actuel).

## La vie au temps de la colonie
- Les habitants doivent payer l'**impôt** et faire le **travail forcé** (routes, chemins de fer).
- Les paysans doivent cultiver l'**arachide**, vendue en France.
- Seuls les habitants des **quatre communes** (Saint-Louis, Gorée, Rufisque, Dakar) sont citoyens français. En **1914**, **Blaise Diagne** est le premier Africain noir élu député à Paris.
- Les **tirailleurs sénégalais** (créés en **1857**) sont des soldats africains de l'armée française. Ils combattent pendant les deux guerres mondiales. Le **1er décembre 1944**, à **Thiaroye**, des tirailleurs qui réclamaient leur argent sont tués par l'armée française.

## Le chemin de l'indépendance
- Après 1945, des hommes politiques comme **Léopold Sédar Senghor** et **Mamadou Dia** demandent plus de droits.
- En **1959**, le Sénégal et le Soudan français forment la **Fédération du Mali**.
- Le **4 avril 1960**, des accords avec la France sont signés : c'est la date de la **fête de l'Indépendance** au Sénégal.
- Le **20 juin 1960**, la Fédération du Mali devient indépendante.
- Le **20 août 1960**, le Sénégal quitte la Fédération et devient un État indépendant. **Senghor** devient le premier président de la République.

## Le Sénégal indépendant

| Président | Période |
|---|---|
| Léopold Sédar Senghor | 1960 – 1980 |
| Abdou Diouf | 1981 – 2000 |
| Abdoulaye Wade | 2000 – 2012 |
| Macky Sall | 2012 – 2024 |
| Bassirou Diomaye Faye | depuis 2024 |

## Les symboles de la République
- Le **drapeau** : trois bandes verticales **vert, or, rouge**, avec une **étoile verte** au centre.
- La **devise** : « **Un Peuple – Un But – Une Foi** ».
- L'**hymne national** : « Le Lion rouge », dont Senghor a écrit les paroles.

> **À retenir** :
> - AOF créée en 1895, capitale Dakar à partir de 1902.
> - Tirailleurs sénégalais ; massacre de Thiaroye le 1er décembre 1944.
> - Fête de l'Indépendance : 4 avril ; Fédération du Mali indépendante le 20 juin 1960 ; Sénégal indépendant seul le 20 août 1960.
> - Premier président : Léopold Sédar Senghor.
`,
      exercices: [
        { type: "qcm", question: "Quelle ville devient la capitale de l'AOF à partir de 1902 ?", choix: ["Saint-Louis", "Bamako", "Dakar", "Thiès"], reponse: 2, explication: "La capitale de l'AOF passe de Saint-Louis à Dakar en 1902." },
        { type: "saisie", question: "En quelle année l'AOF a-t-elle été créée ?", reponses: ["1895"], explication: "L'Afrique-Occidentale française a été créée en 1895." },
        { type: "vf", question: "Les tirailleurs sénégalais étaient des soldats africains de l'armée française.", reponse: true, explication: "Vrai : créés en 1857, ils ont combattu pendant les deux guerres mondiales." },
        { type: "qcm", question: "Que s'est-il passé à Thiaroye le 1er décembre 1944 ?", choix: ["la signature de l'indépendance", "des tirailleurs qui réclamaient leur argent ont été tués par l'armée française", "l'ouverture du chemin de fer", "la création de l'AOF"], reponse: 1, explication: "À Thiaroye, des tirailleurs revenus de la guerre réclamaient leur solde ; l'armée française a tiré sur eux." },
        { type: "saisie", question: "Qui fut, en 1914, le premier Africain noir élu député à Paris ?", reponses: ["Blaise Diagne", "Diagne"], explication: "Blaise Diagne, élu en 1914 par les habitants des quatre communes." },
        { type: "qcm", question: "Quels pays formaient la Fédération du Mali ?", choix: ["le Sénégal et la Mauritanie", "le Sénégal et la Gambie", "le Sénégal et la Guinée", "le Sénégal et le Soudan français"], reponse: 3, explication: "La Fédération du Mali réunissait le Sénégal et le Soudan français (le Mali actuel)." },
        { type: "qcm", question: "À quelle date le Sénégal fête-t-il son indépendance chaque année ?", choix: ["le 4 avril", "le 20 août", "le 1er décembre", "le 20 juin"], reponse: 0, explication: "La fête de l'Indépendance est le 4 avril (accords signés avec la France le 4 avril 1960)." },
        { type: "saisie", question: "Qui fut le premier président de la République du Sénégal ? (prénoms et nom, ou nom)", reponses: ["Léopold Sédar Senghor", "Senghor", "Léopold Senghor"], explication: "Léopold Sédar Senghor, président de 1960 à 1980." },
        { type: "vf", question: "La devise du Sénégal est « Un Peuple – Un But – Une Foi ».", reponse: true, explication: "Vrai. Le drapeau est vert, or, rouge avec une étoile verte ; l'hymne est « Le Lion rouge »." },
        { type: "redaction", question: "Raconte en quelques phrases, dans l'ordre, comment le Sénégal est devenu indépendant (1959-1960).", corrige: "En **1959**, le Sénégal et le Soudan français s'unissent dans la **Fédération du Mali**.\n\nLe **4 avril 1960**, des accords sont signés avec la France : c'est aujourd'hui la date de la fête de l'Indépendance. Le **20 juin 1960**, la Fédération du Mali devient indépendante.\n\nMais les deux pays ne s'entendent pas. Le **20 août 1960**, le Sénégal quitte la Fédération et devient un État indépendant. **Léopold Sédar Senghor** est élu premier président de la République." },
      ],
    },
    {
      id: "senegal-situation-relief",
      titre: "Le Sénégal : situation, relief et cours d'eau",
      theme: "Géographie",
      cours: `
## Où se trouve le Sénégal ?
Le Sénégal est en **Afrique de l'Ouest**, au bord de l'**océan Atlantique**. Sa superficie est de **196 722 km²**. Sa capitale est **Dakar**, sur la presqu'île du Cap-Vert. La **pointe des Almadies**, à Dakar, est le point le plus à l'ouest du continent africain.

## Ses voisins

| Direction | Pays voisin | Capitale |
|---|---|---|
| nord | **Mauritanie** | Nouakchott |
| est | **Mali** | Bamako |
| sud | **Guinée** | Conakry |
| sud | **Guinée-Bissau** | Bissau |
| à l'intérieur | **Gambie** | Banjul |

La **Gambie** est un petit pays presque entièrement entouré par le Sénégal (on dit qu'elle est **enclavée** dans le Sénégal) ; elle ne touche que l'océan à l'ouest.

## Un relief plat
- Le Sénégal est un pays **plat** : surtout des **plaines** et des **plateaux bas**.
- Les seules **collines** sont au **sud-est**, dans la région de **Kédougou** (au pied du massif du Fouta-Djalon, en Guinée).
- Sur la côte, on trouve des **dunes** (la Grande Côte, au nord de Dakar) et des **niayes** (cuvettes humides où l'on cultive des légumes).

## Les fleuves et les lacs
- Le **fleuve Sénégal** prend sa source en **Guinée** (Fouta-Djalon). Il forme la frontière avec la Mauritanie et se jette dans l'océan près de **Saint-Louis**.
- Le **fleuve Gambie** prend aussi sa source en Guinée. Il traverse le parc du Niokolo-Koba puis la Gambie.
- La **Casamance** coule entièrement au Sénégal, au sud.
- Le **Saloum** est un bras de mer : l'eau salée de l'océan y entre loin.
- Le **lac de Guiers**, près du fleuve Sénégal, donne une grande partie de l'**eau potable de Dakar**. Le **lac Rose** (lac Retba), près de Dakar, est connu pour son sel.
- Deux **barrages** sur le fleuve Sénégal : **Diama** (près de l'embouchure : il empêche l'eau salée de remonter) et **Manantali** (au Mali : il garde l'eau et produit de l'électricité).

>! **Méthode pour lire une carte** : repère d'abord la **rose des vents** (N, S, E, O), puis la **légende** (couleurs, symboles), puis l'**échelle**. Ensuite seulement, cherche les lieux demandés.

> **À retenir** :
> - Sénégal : Afrique de l'Ouest, 196 722 km², capitale Dakar.
> - Voisins : Mauritanie, Mali, Guinée, Guinée-Bissau ; la Gambie est enclavée.
> - Relief plat ; collines seulement au sud-est (Kédougou).
> - Fleuves : Sénégal, Gambie, Casamance ; le Saloum est un bras de mer.
`,
      exercices: [
        { type: "qcm", question: "Quel pays est le voisin du Sénégal au nord ?", choix: ["le Mali", "la Guinée", "la Mauritanie", "la Gambie"], reponse: 2, explication: "La Mauritanie est au nord, de l'autre côté du fleuve Sénégal. Le Mali est à l'est, la Guinée au sud." },
        { type: "saisie", question: "Quel petit pays est presque entièrement entouré par le Sénégal ?", reponses: ["Gambie", "la Gambie"], explication: "La Gambie est enclavée dans le Sénégal ; elle ne touche que l'océan, à l'ouest." },
        { type: "vf", question: "Le Sénégal est un pays de hautes montagnes.", reponse: false, explication: "Faux : le Sénégal est plat. Il n'y a que quelques collines au sud-est, vers Kédougou." },
        { type: "qcm", question: "Dans quel pays le fleuve Sénégal prend-il sa source ?", choix: ["en Guinée", "en Mauritanie", "au Sénégal", "en Gambie"], reponse: 0, explication: "Il prend sa source dans le massif du Fouta-Djalon, en Guinée." },
        { type: "saisie", question: "Près de quelle ville le fleuve Sénégal se jette-t-il dans l'océan ?", reponses: ["Saint-Louis", "Saint Louis", "Ndar"], explication: "Le fleuve Sénégal se jette dans l'océan Atlantique près de Saint-Louis." },
        { type: "qcm", question: "Quel fleuve coule entièrement au Sénégal ?", choix: ["le fleuve Sénégal", "le fleuve Gambie", "le Niger", "la Casamance"], reponse: 3, explication: "La Casamance coule entièrement au Sénégal. Les fleuves Sénégal et Gambie viennent de Guinée." },
        { type: "vf", question: "Le barrage de Diama empêche l'eau salée de l'océan de remonter dans le fleuve Sénégal.", reponse: true, explication: "Vrai : il est situé près de l'embouchure. Il protège les cultures de la vallée." },
        { type: "qcm", question: "Quel lac fournit une grande partie de l'eau potable de Dakar ?", choix: ["le lac Rose", "le lac de Guiers", "le lac Tchad", "le lac Retba"], reponse: 1, explication: "Le lac de Guiers, près du fleuve Sénégal. Le lac Rose (ou Retba) est salé : on y récolte du sel." },
        { type: "saisie", question: "Quelle est la superficie du Sénégal, en km² ?", reponses: ["196 722", "196722"], explication: "La superficie du Sénégal est de 196 722 km²." },
        { type: "redaction", question: "Situation : un correspondant qui vit à l'étranger et ne connaît pas l'Afrique de l'Ouest te demande de lui présenter ton pays. Écris quelques phrases sur la situation du Sénégal (continent, océan, voisins, capitale) et sur son relief.", corrige: "Le Sénégal se trouve en **Afrique de l'Ouest**, au bord de l'**océan Atlantique**. Ses voisins sont la **Mauritanie** au nord, le **Mali** à l'est, la **Guinée** et la **Guinée-Bissau** au sud. La **Gambie** est presque entièrement entourée par le Sénégal. La capitale est **Dakar**.\n\nLe relief est **plat** : des plaines et des plateaux bas. Il y a seulement quelques **collines au sud-est**, vers Kédougou. Le pays est arrosé par les fleuves **Sénégal**, **Gambie** et **Casamance**." },
      ],
    },
    {
      id: "climat-vegetation",
      titre: "Le climat, les saisons et la végétation",
      theme: "Géographie",
      cours: `
## Deux saisons
Au Sénégal, il fait chaud presque toute l'année. On distingue deux saisons :
- la **saison des pluies**, appelée **hivernage** : en général de **juin-juillet à octobre** ;
- la **saison sèche** : de **novembre à mai-juin**. Il ne pleut presque pas.

## Les vents
Trois vents sont à connaître. Attention : l'alizé maritime et la mousson viennent tous deux de l'océan, mais ce ne sont **pas le même vent**. L'**alizé maritime** souffle du nord-ouest, il est **frais** et il souffle surtout sur la côte ; la **mousson** souffle du sud-ouest, elle est **très humide** et elle arrive pendant l'hivernage.

| Vent | D'où vient-il ? | Ce qu'il apporte |
|---|---|---|
| **alizé maritime** | de l'océan, du nord-ouest | de la fraîcheur sur la côte (il n'apporte pas les grandes pluies) |
| **harmattan** | du Sahara (nord-est) | un air chaud, sec, plein de poussière (saison sèche) |
| **mousson** | de l'océan, du sud-ouest | l'air très humide qui donne les **pluies** de l'hivernage |

## Il pleut plus au sud qu'au nord
- **Au nord** (vers Podor, Matam) : climat **sahélien** (le Sahel est la zone sèche au sud du Sahara), peu de pluie (souvent moins de 500 mm par an).
- **Au centre** (vers Kaolack, Tambacounda) : climat **soudanien** (plus de pluie que le Sahel, entre 500 et 1 000 mm par an environ).
- **Au sud** (Casamance, vers Ziguinchor) : climat plus humide, souvent **plus de 1 000 mm** de pluie par an.
- **Sur la côte** (Dakar, Saint-Louis) : l'alizé maritime rend le climat plus **doux**.

## La végétation suit la pluie
| Zone | Végétation |
|---|---|
| nord | **steppe** : herbes courtes, arbustes épineux (acacias) |
| centre | **savane** : hautes herbes et arbres (baobabs, kads) |
| sud | **forêt** et forêt claire (fromagers, palmiers à huile) |
| bords de mer, estuaires | **mangrove** (palétuviers), dans le Saloum et en Casamance |

Un **estuaire** est l'endroit où un fleuve se jette dans la mer : l'eau douce et l'eau salée s'y mélangent. La **mangrove** est une forêt d'arbres (les palétuviers) qui poussent les pieds dans l'eau salée.

Le **baobab** est l'arbre symbole du Sénégal.

## Protéger la végétation
Les feux de brousse, la coupe abusive du bois et le manque de pluie font reculer les arbres. On lutte en **reboisant** (planter des arbres) et avec des projets comme la **Grande Muraille verte**, au nord.

>! **Méthode** : un **diagramme de pluies** montre, mois par mois, la quantité de pluie en millimètres (mm). Les mois les plus hauts sont ceux de l'hivernage.

> **À retenir** :
> - Deux saisons : hivernage (pluies, de juin-juillet à octobre) et saison sèche.
> - Harmattan (nord-est, Sahara) : chaud et sec ; mousson (sud-ouest) : apporte la pluie ; alizé maritime (nord-ouest) : frais sur la côte. Alizé et mousson ne sont pas le même vent.
> - Il pleut plus au sud : steppe au nord, savane au centre, forêt au sud, mangrove sur les estuaires.
`,
      exercices: [
        { type: "qcm", question: "Comment appelle-t-on la saison des pluies au Sénégal ?", choix: ["la saison sèche", "l'hivernage", "l'harmattan", "la mousson"], reponse: 1, explication: "La saison des pluies s'appelle l'hivernage. La mousson est le vent humide qui apporte ces pluies." },
        { type: "qcm", question: "Quel vent chaud et sec, venu du Sahara, souffle pendant la saison sèche ?", choix: ["l'alizé maritime", "la mousson", "la brise de mer", "l'harmattan"], reponse: 3, explication: "L'harmattan vient du Sahara : il est chaud, sec et chargé de poussière." },
        { type: "vf", question: "Il pleut davantage en Casamance qu'au nord du Sénégal.", reponse: true, explication: "Vrai : le sud reçoit souvent plus de 1 000 mm par an, le nord souvent moins de 500 mm." },
        { type: "saisie", question: "Quel vent humide apporte les pluies de l'hivernage ?", reponses: ["mousson", "la mousson"], explication: "La mousson vient de l'océan, au sud-ouest : elle apporte l'air humide et les pluies." },
        { type: "qcm", question: "Quelle végétation trouve-t-on au nord du Sénégal, où il pleut peu ?", choix: ["la steppe", "la forêt dense", "la mangrove", "la savane boisée"], reponse: 0, explication: "Au nord, il pleut peu : herbes courtes et arbustes épineux, c'est la steppe." },
        { type: "qcm", question: "Où pousse la mangrove ?", choix: ["dans le désert", "sur les collines de Kédougou", "dans les estuaires, au bord de la mer (Saloum, Casamance)", "au centre du pays, loin de l'eau"], reponse: 2, explication: "La mangrove (palétuviers) pousse là où l'eau douce et l'eau salée se mélangent : estuaires du Saloum et de la Casamance." },
        { type: "saisie", question: "Quel arbre est le symbole du Sénégal ?", reponses: ["baobab", "le baobab"], explication: "Le baobab est l'arbre emblème du Sénégal." },
        { type: "vf", question: "Les feux de brousse aident la végétation à se développer.", reponse: false, explication: "Faux : les feux de brousse détruisent arbres, herbes et animaux. On les combat et on reboise." },
        { type: "qcm", question: "Quel vent souffle du sud-ouest, très humide, et apporte les pluies de l'hivernage ?", choix: ["l'harmattan", "l'alizé maritime", "la mousson", "la brise du désert"], reponse: 2, explication: "C'est la mousson. L'alizé maritime, lui, est un vent frais du nord-ouest sur la côte ; l'harmattan vient du Sahara." },
        { type: "redaction", question: "Situation : ton cousin habite à Ziguinchor, toi à Podor. Explique-lui pourquoi la végétation n'est pas la même chez vous deux.", corrige: "La végétation dépend surtout de la **pluie**.\n\nÀ **Podor**, au nord, le climat est **sahélien** : il pleut peu (souvent moins de 500 mm par an) et la saison sèche est longue. On y trouve la **steppe** : des herbes courtes et des arbustes épineux.\n\nÀ **Ziguinchor**, au sud, il pleut beaucoup plus (souvent plus de 1 000 mm par an). La végétation est plus riche : **forêt**, palmiers, et **mangrove** au bord du fleuve Casamance." },
      ],
    },
    {
      id: "population-regions",
      titre: "La population et les régions administratives",
      theme: "Géographie",
      cours: `
## Combien sommes-nous ?
Le dernier **recensement** (on compte tous les habitants) a eu lieu en **2023**. D'après l'**ANSD** (Agence nationale de la statistique et de la démographie), le Sénégal compte **18 126 390 habitants**.
- La population est **jeune** : **39 %** des habitants ont **moins de 15 ans**.
- Un peu plus de la moitié des habitants vit **en ville** (environ **55 %**).
- La **densité** moyenne est de **92 habitants par km²** : beaucoup de monde à Dakar, peu à Kédougou.
- La population augmente vite : environ **3 % par an**.

## Une population variée
Le Sénégal compte plusieurs groupes : **Wolofs** (le groupe le plus nombreux), **Pulaar** (Peuls et Toucouleurs), **Sérères**, **Diolas**, **Mandingues**, **Soninkés**, et d'autres. La langue officielle est le **français** ; il y a aussi des **langues nationales** (wolof, pulaar, sérère, diola, mandingue, soninké…). Tous vivent ensemble dans la paix : c'est la **cohésion nationale**.

## Les 14 régions
Le Sénégal est découpé en **14 régions**. Chaque région porte le nom de sa ville principale (son **chef-lieu**).

| Zone | Régions |
|---|---|
| ouest | Dakar, Thiès |
| centre | Diourbel, Fatick, Kaolack, Kaffrine |
| nord | Saint-Louis, Louga, Matam |
| est et sud-est | Tambacounda, Kédougou |
| sud (Casamance) | Ziguinchor, Sédhiou, Kolda |

Les régions les plus récentes sont **Kaffrine, Kédougou et Sédhiou** (créées en **2008**). Les régions sont découpées en **46 départements**.

## Où vivent les Sénégalais ?
- La région de **Dakar** est la plus peuplée, alors que c'est la plus petite.
- Les gens quittent souvent la campagne pour la ville : c'est l'**exode rural**. Cela crée des problèmes en ville (logement, embouteillages, déchets).

>! **Méthode pour retenir les 14 régions** : trace une carte et place-les par zone : 2 à l'ouest, 4 au centre, 3 au nord, 2 à l'est, 3 au sud.

> **À retenir** :
> - Recensement 2023 (ANSD) : 18 126 390 habitants, une population jeune.
> - 14 régions, 46 départements ; les dernières régions créées : Kaffrine, Kédougou, Sédhiou (2008).
> - Dakar : la région la plus peuplée ; exode rural vers les villes.
`,
      exercices: [
        { type: "saisie", question: "Combien de régions administratives compte le Sénégal ?", reponses: ["14", "quatorze", "14 régions"], explication: "Le Sénégal compte 14 régions, découpées en 46 départements." },
        { type: "qcm", question: "D'après le recensement de 2023 (ANSD), combien d'habitants compte le Sénégal ?", choix: ["environ 8 millions", "environ 30 millions", "environ 18 millions", "environ 2 millions"], reponse: 2, explication: "Le recensement de 2023 compte 18 126 390 habitants, soit environ 18 millions." },
        { type: "vf", question: "Au Sénégal, environ 39 % des habitants ont moins de 15 ans.", reponse: true, explication: "Vrai : la population sénégalaise est très jeune." },
        { type: "qcm", question: "Laquelle de ces villes n'est PAS le chef-lieu d'une région ?", choix: ["Kolda", "Matam", "Kaffrine", "Mbour"], reponse: 3, explication: "Mbour est une grande ville de la région de Thiès, mais ce n'est pas un chef-lieu de région. Kolda, Matam et Kaffrine en sont." },
        { type: "qcm", question: "Quelles sont les trois régions créées en 2008 ?", choix: ["Kaffrine, Kédougou, Sédhiou", "Dakar, Thiès, Diourbel", "Louga, Matam, Saint-Louis", "Kolda, Ziguinchor, Fatick"], reponse: 0, explication: "Kaffrine, Kédougou et Sédhiou sont les régions les plus récentes (2008)." },
        { type: "saisie", question: "Quelle est la région la plus peuplée du Sénégal ?", reponses: ["Dakar", "région de Dakar"], explication: "La région de Dakar est la plus peuplée, alors que c'est la plus petite." },
        { type: "qcm", question: "Comment appelle-t-on le départ des habitants de la campagne vers la ville ?", choix: ["l'émigration", "l'exode rural", "le recensement", "la densité"], reponse: 1, explication: "C'est l'exode rural. L'émigration, c'est partir vivre dans un autre pays." },
        { type: "vf", question: "Le groupe le plus nombreux au Sénégal est celui des Wolofs.", reponse: true, explication: "Vrai. Viennent ensuite notamment les Pulaar (Peuls, Toucouleurs) et les Sérères." },
        { type: "saisie", question: "Quelle est la langue officielle du Sénégal ?", reponses: ["français", "le français"], explication: "La langue officielle est le français ; le wolof, le pulaar, le sérère, le diola… sont des langues nationales." },
        { type: "redaction", question: "Cite les 3 régions de la Casamance et 3 régions du nord du Sénégal. Puis explique en une ou deux phrases ce qu'est l'exode rural et un problème qu'il pose.", corrige: "- Régions de la Casamance (sud) : **Ziguinchor, Sédhiou, Kolda**.\n- Régions du nord : **Saint-Louis, Louga, Matam**.\n\nL'**exode rural**, c'est le départ des habitants de la campagne vers les villes, surtout vers Dakar, pour chercher du travail. En ville, cela crée des problèmes : **manque de logements**, quartiers sans eau ni assainissement, embouteillages, déchets. Et la campagne perd ses jeunes." },
      ],
    },
    {
      id: "activites-economiques",
      titre: "Les activités économiques et les transports",
      theme: "Géographie",
      cours: `
## L'agriculture
Beaucoup de Sénégalais vivent de l'agriculture. Elle dépend de la **pluie** de l'hivernage.

| Culture | Où ? |
|---|---|
| **arachide** (culture de rente, vendue) | **bassin arachidier** : Kaolack, Kaffrine, Fatick, Diourbel |
| **mil**, sorgho, maïs, niébé (cultures vivrières, pour se nourrir) | dans tout le pays |
| **riz** | vallée du fleuve Sénégal, Casamance |
| **légumes** (oignons, choux, tomates) | **Niayes** (entre Dakar et Saint-Louis) |
| **coton** | Tambacounda, Kolda |

Une **culture vivrière** sert à nourrir la famille ; une **culture de rente** est vendue pour gagner de l'argent.

## La pêche et l'élevage
- La **pêche** est très importante : les pêcheurs partent en **pirogue** depuis Kayar, Mbour, Joal, Saint-Louis… Le poisson se mange (le thiéboudienne !) et se vend à l'étranger.
- L'**élevage** (bœufs, moutons, chèvres) est surtout pratiqué dans le **Ferlo**, au nord. Les éleveurs se déplacent avec leurs troupeaux pour trouver de l'herbe et de l'eau.

## Les mines et l'industrie
- **Phosphates** (Taïba, région de Thiès), utilisés pour faire des engrais ; **or** (région de Kédougou) ; **sel** (Kaolack, lac Rose).
- Depuis **2024**, le Sénégal produit du **pétrole** en mer (champ de Sangomar).
- Usines : huileries (huile d'arachide), cimenteries, conserveries de poisson. Beaucoup d'usines sont autour de Dakar.

## Le tourisme et l'artisanat
Les touristes viennent pour les plages (Saly, Cap Skirring), Gorée, Saint-Louis, les parcs (Niokolo-Koba, Djoudj pour les oiseaux). Les artisans (tisserands, bijoutiers, sculpteurs) vendent leurs produits.

## Les transports
- La **route** transporte le plus de personnes et de marchandises.
- Le **port autonome de Dakar** est un grand port d'Afrique de l'Ouest.
- L'**aéroport international Blaise-Diagne** (AIBD), à Diass, est le principal aéroport.
- Le **TER** (train express régional) relie Dakar à Diamniadio.

> **À retenir** :
> - Agriculture : arachide (bassin arachidier), mil, riz (vallée du fleuve), légumes (Niayes).
> - Pêche en pirogue ; élevage dans le Ferlo.
> - Phosphates, or, sel ; pétrole depuis 2024 ; tourisme.
> - Port de Dakar, aéroport Blaise-Diagne, TER.
`,
      exercices: [
        { type: "qcm", question: "Où cultive-t-on surtout l'arachide ?", choix: ["dans les Niayes", "dans la vallée du fleuve", "dans le bassin arachidier (Kaolack, Kaffrine…)", "dans le Ferlo"], reponse: 2, explication: "L'arachide est la culture du bassin arachidier, au centre : Kaolack, Kaffrine, Fatick, Diourbel." },
        { type: "vf", question: "Le mil est une culture vivrière : il sert d'abord à nourrir la famille.", reponse: true, explication: "Vrai : le mil, le sorgho, le maïs sont des cultures vivrières. L'arachide est une culture de rente." },
        { type: "qcm", question: "Quelle zone est connue pour la culture des légumes (oignons, choux, tomates) ?", choix: ["les Niayes", "le Ferlo", "le Sénégal oriental", "le Saloum"], reponse: 0, explication: "Les Niayes, entre Dakar et Saint-Louis : leurs cuvettes humides conviennent aux légumes." },
        { type: "saisie", question: "Dans quelle zone du nord pratique-t-on surtout l'élevage ?", reponses: ["Ferlo", "le Ferlo"], explication: "Le Ferlo est la grande zone d'élevage, au nord du pays." },
        { type: "qcm", question: "Quelle ressource minière sert à fabriquer des engrais ?", choix: ["l'or", "le sel", "le pétrole", "les phosphates"], reponse: 3, explication: "Les phosphates (Taïba, région de Thiès) servent à fabriquer des engrais." },
        { type: "qcm", question: "Où cultive-t-on surtout le riz ?", choix: ["dans le Ferlo", "dans la vallée du fleuve Sénégal et en Casamance", "dans les Niayes", "au lac Rose"], reponse: 1, explication: "Le riz a besoin de beaucoup d'eau : vallée du fleuve (irriguée) et Casamance (pluvieuse)." },
        { type: "vf", question: "Le Sénégal produit du pétrole depuis 2024.", reponse: true, explication: "Vrai : le pétrole est extrait en mer, au champ de Sangomar, depuis 2024." },
        { type: "saisie", question: "Quel est le nom de l'aéroport international du Sénégal, à Diass ?", reponses: ["Blaise-Diagne", "Blaise Diagne", "AIBD", "aéroport Blaise-Diagne", "aéroport international Blaise-Diagne"], explication: "L'aéroport international Blaise-Diagne (AIBD)." },
        { type: "redaction", question: "Situation : un pêcheur de Kayar et un cultivateur de Kaffrine se rencontrent au marché. Explique ce que chacun produit, et pourquoi chacun a besoin de l'autre.", corrige: "Le **pêcheur de Kayar** part en mer en **pirogue**. Il pêche du **poisson** qu'il vend au marché ou aux usines.\n\nLe **cultivateur de Kaffrine** vit dans le **bassin arachidier**. Il cultive l'**arachide** (culture de rente) et le **mil** (culture vivrière) pendant l'hivernage.\n\nChacun a besoin de l'autre : le cultivateur achète du poisson pour nourrir sa famille ; le pêcheur achète du mil, de l'huile d'arachide et d'autres produits de la campagne. Les **échanges** font vivre les deux." },
      ],
    },
    {
      id: "afrique",
      titre: "L'Afrique et les organisations africaines",
      theme: "Géographie",
      cours: `
## Le continent africain
- L'Afrique est entourée par l'**océan Atlantique** à l'ouest, l'**océan Indien** à l'est, la **mer Méditerranée** au nord et la **mer Rouge** au nord-est.
- Elle compte **54 États**.
- Le **Sahara**, au nord, est le plus grand désert chaud du monde.
- Le **Nil** est le plus long fleuve d'Afrique. D'autres grands fleuves : le **Niger**, le **Congo**.
- Le plus haut sommet est le **Kilimandjaro** (5 895 m), en Tanzanie.
- L'**équateur** traverse l'Afrique : près de lui, il fait chaud et humide toute l'année (grande forêt).

## Les grandes zones de climat et de végétation
En partant de l'équateur vers le nord : **forêt dense** (climat équatorial, pluies toute l'année) → **savane** (climat tropical, une saison des pluies) → **steppe** (Sahel) → **désert** (Sahara). Le Sénégal est entre la savane et la steppe.

## Les organisations africaines
Les pays africains s'unissent pour être plus forts.

| Organisation | Ce qu'elle fait | Siège |
|---|---|---|
| **Union africaine (UA)**, créée en 2002 | réunit les États africains, cherche la paix et l'unité | Addis-Abeba (Éthiopie) |
| **CEDEAO**, créée en 1975 | Communauté économique des États de l'Afrique de l'Ouest : commerce, circulation des personnes (le Mali, le Burkina Faso et le Niger l'ont quittée en janvier 2025) | Abuja (Nigeria) |
| **UEMOA** | Union économique et monétaire ouest-africaine : pays qui utilisent le **franc CFA** | Ouagadougou (Burkina Faso) |
| **OMVS** | Organisation pour la mise en valeur du fleuve Sénégal : Sénégal, Mali, Mauritanie, Guinée ; barrages de Diama et Manantali | Dakar |

>! **Méthode** : pour réciter l'ordre des végétations, pars du sud vers le nord en suivant la pluie : beaucoup de pluie (forêt) → moins (savane) → peu (steppe) → presque pas (désert).

> **À retenir** :
> - Afrique : 54 États ; Sahara, Nil, Kilimandjaro.
> - Végétation de l'équateur vers le nord : forêt, savane, steppe, désert.
> - UA (Addis-Abeba), CEDEAO (Abuja ; trois pays l'ont quittée en 2025), UEMOA (franc CFA), OMVS (fleuve Sénégal).
`,
      exercices: [
        { type: "qcm", question: "Quel est le plus long fleuve d'Afrique ?", choix: ["le Niger", "le Congo", "le Nil", "le Sénégal"], reponse: 2, explication: "Le Nil est le plus long fleuve d'Afrique ; il traverse notamment le Soudan et l'Égypte." },
        { type: "saisie", question: "Combien d'États compte l'Afrique ?", reponses: ["54", "cinquante-quatre", "54 États", "54 pays"], explication: "L'Afrique compte 54 États." },
        { type: "qcm", question: "Quel est le plus haut sommet d'Afrique ?", choix: ["le Kilimandjaro", "le Fouta-Djalon", "le mont Cameroun", "l'Atlas"], reponse: 0, explication: "Le Kilimandjaro, en Tanzanie, mesure 5 895 m." },
        { type: "vf", question: "Le Sahara est le plus grand désert chaud du monde.", reponse: true, explication: "Vrai : il couvre tout le nord de l'Afrique." },
        { type: "qcm", question: "Dans quelle ville se trouve le siège de l'Union africaine ?", choix: ["Dakar", "Abuja", "Ouagadougou", "Addis-Abeba"], reponse: 3, explication: "Le siège de l'UA est à Addis-Abeba, en Éthiopie. Abuja est le siège de la CEDEAO." },
        { type: "qcm", question: "Quels pays forment l'OMVS, qui gère le fleuve Sénégal ?", choix: ["Sénégal, Gambie, Guinée-Bissau, Cap-Vert", "Sénégal, Mali, Mauritanie, Guinée", "Sénégal, Côte d'Ivoire, Ghana, Togo", "Sénégal, Niger, Tchad, Nigeria"], reponse: 1, explication: "Les quatre pays traversés par le fleuve Sénégal ou par ses sources : Sénégal, Mali, Mauritanie, Guinée." },
        { type: "saisie", question: "Que signifie le sigle CEDEAO ? (complète : Communauté économique des États de ...)", reponses: ["l'Afrique de l'Ouest", "Afrique de l'Ouest"], explication: "CEDEAO = Communauté économique des États de l'Afrique de l'Ouest." },
        { type: "vf", question: "Près de l'équateur, on trouve surtout le désert.", reponse: false, explication: "Faux : près de l'équateur, il pleut toute l'année ; c'est la forêt dense. Le désert est plus au nord (Sahara)." },
        { type: "redaction", question: "Explique en quelques phrases pourquoi les pays d'Afrique de l'Ouest ont créé la CEDEAO, et donne un avantage pour un commerçant sénégalais.", corrige: "Les pays d'Afrique de l'Ouest ont créé la **CEDEAO** en **1975** pour **s'unir** : ensemble, ils sont plus forts pour développer le **commerce**, construire des routes et maintenir la **paix**.\n\nAvantage pour un commerçant sénégalais : il peut **circuler** plus facilement dans les pays membres et y **vendre ses marchandises** (poisson, arachide, tissus) avec moins de barrières.\n\n(Remarque : en janvier 2025, le Mali, le Burkina Faso et le Niger ont quitté la CEDEAO ; les règles pour commercer avec eux ont donc changé.)" },
      ],
    },
    {
      id: "digestion",
      titre: "La digestion et l'alimentation",
      theme: "Initiation scientifique et technologique",
      cours: `
## Le trajet des aliments
Les aliments suivent un long tuyau : le **tube digestif**.

1. **La bouche** : les **dents** coupent et écrasent les aliments ; la **salive** les mouille. On mâche bien !
2. **L'œsophage** : il conduit les aliments jusqu'à l'estomac.
3. **L'estomac** : il brasse les aliments avec le **suc gastrique**. Ils deviennent une bouillie.
4. **L'intestin grêle** : très long (plusieurs mètres). Les aliments y deviennent très petits : ce sont les **nutriments**. Ils **passent dans le sang** à travers la paroi de l'intestin : c'est l'**absorption**.
5. **Le gros intestin** : il reçoit ce qui n'a pas été digéré (les déchets).
6. **L'anus** : les déchets sont rejetés (les excréments).

Le **foie** (qui fabrique la **bile**) et le **pancréas** aident à la digestion, mais les aliments ne passent pas dedans.

## Les dents
| Dents | Rôle |
|---|---|
| **incisives** (devant) | couper |
| **canines** (pointues) | déchirer |
| **prémolaires et molaires** (au fond) | écraser, broyer |

Un enfant a **20 dents de lait** ; un adulte a **32 dents**. Pour éviter les **caries** : se brosser les dents après les repas, manger peu de sucreries.

## Manger équilibré
Les aliments sont classés en trois groupes :
- **aliments énergétiques** (donnent de l'énergie) : mil, riz, pain, manioc, huile, sucre ;
- **aliments bâtisseurs** (font grandir, construisent le corps) : poisson, viande, œufs, lait, niébé, arachide ;
- **aliments protecteurs** (protègent contre les maladies) : fruits (mangue, orange, pain de singe) et légumes (feuilles de baobab, tomate, carotte).

Un **repas équilibré** contient des aliments des trois groupes, et on boit de l'**eau potable**.

>! **Exemple** : un thiéboudienne avec du riz (énergétique), du poisson (bâtisseur) et des légumes (protecteurs) est un plat équilibré. Ajoute un fruit au dessert !

> **À retenir** :
> - Bouche → œsophage → estomac → intestin grêle → gros intestin → anus.
> - Les nutriments passent dans le sang au niveau de l'intestin grêle.
> - Trois groupes d'aliments : énergétiques, bâtisseurs, protecteurs.
`,
      exercices: [
        { type: "qcm", question: "Dans quel organe les nutriments passent-ils dans le sang ?", choix: ["l'estomac", "l'œsophage", "le gros intestin", "l'intestin grêle"], reponse: 3, explication: "C'est dans l'intestin grêle que les nutriments traversent la paroi et passent dans le sang (absorption)." },
        { type: "qcm", question: "Quel est le bon ordre du trajet des aliments ?", choix: ["bouche, estomac, œsophage, intestin grêle", "bouche, œsophage, estomac, intestin grêle, gros intestin", "bouche, intestin grêle, estomac, œsophage", "bouche, foie, estomac, gros intestin"], reponse: 1, explication: "Bouche → œsophage → estomac → intestin grêle → gros intestin → anus. Les aliments ne passent pas dans le foie." },
        { type: "saisie", question: "Comment s'appellent les dents de devant, qui servent à couper ?", reponses: ["incisives", "les incisives", "incisive"], explication: "Les incisives coupent, les canines déchirent, les molaires écrasent." },
        { type: "vf", question: "Un adulte a 32 dents.", reponse: true, explication: "Vrai. Un enfant a 20 dents de lait." },
        { type: "qcm", question: "À quel groupe appartient le poisson ?", choix: ["aliments bâtisseurs", "aliments énergétiques", "aliments protecteurs", "boissons"], reponse: 0, explication: "Le poisson est un aliment bâtisseur : il aide le corps à grandir et à se construire." },
        { type: "qcm", question: "Lequel de ces aliments est un aliment protecteur ?", choix: ["le riz", "l'huile", "la mangue", "la viande"], reponse: 2, explication: "Les fruits et les légumes, comme la mangue, sont des aliments protecteurs." },
        { type: "vf", question: "Les aliments passent par le foie pendant la digestion.", reponse: false, explication: "Faux : le foie fabrique la bile qui aide la digestion, mais les aliments ne passent pas dedans." },
        { type: "saisie", question: "Quel liquide de la bouche mouille les aliments ?", reponses: ["salive", "la salive"], explication: "La salive mouille les aliments et commence leur digestion." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : Moussa, 10 ans, mange chaque jour du riz blanc avec un peu d'huile, et beaucoup de bonbons. Il est souvent fatigué, malade, et il a mal aux dents. Consigne : 1) Dis ce qui manque dans les repas de Moussa. 2) Propose-lui un repas équilibré avec des aliments de chez nous. 3) Donne-lui deux conseils pour ses dents.", corrige: "1) Moussa mange surtout des **aliments énergétiques** (riz, huile, sucre). Il lui manque des **aliments bâtisseurs** (poisson, viande, œufs, lait, niébé) et des **aliments protecteurs** (fruits et légumes). C'est pour cela qu'il est faible et souvent malade.\n\n2) Repas équilibré : du **riz** (énergétique) avec du **poisson** (bâtisseur) et des **légumes** (carotte, chou, aubergine : protecteurs), puis une **mangue** ou une orange au dessert, et de l'**eau potable**. Exemple : un thiéboudienne.\n\n3) Conseils pour ses dents : se **brosser les dents** après chaque repas ; **manger moins de bonbons** ; aller voir le dentiste ou l'infirmier quand il a mal." },
      ],
    },
    {
      id: "respiration-circulation",
      titre: "La respiration et la circulation du sang",
      theme: "Initiation scientifique et technologique",
      cours: `
## La respiration
L'air entre par le **nez** (ou la bouche), passe dans la **trachée**, puis dans les **bronches**, et arrive dans les deux **poumons**.
- **Inspiration** : on fait entrer l'air ; la poitrine se gonfle. L'air apporte l'**oxygène**, dont le corps a besoin.
- **Expiration** : on rejette l'air ; la poitrine se dégonfle. L'air rejeté contient plus de **gaz carbonique** (un déchet).

Dans les poumons, l'oxygène passe dans le **sang**, et le gaz carbonique quitte le sang.

## Le cœur et les vaisseaux
- Le **cœur** est un **muscle** qui fonctionne comme une **pompe**. Il bat sans arrêt (environ 70 à 90 fois par minute chez un enfant au repos, plus quand il court).
- Le sang circule dans des tuyaux : les **vaisseaux sanguins**.
  - les **artères** partent du cœur ;
  - les **veines** reviennent au cœur ;
  - les **capillaires**, très fins, relient artères et veines dans tous les organes.
- On sent les battements du cœur au poignet ou au cou : c'est le **pouls**.

## Le sang
| Élément | Rôle |
|---|---|
| **globules rouges** | transportent l'oxygène |
| **globules blancs** | défendent le corps contre les microbes |
| **plaquettes** | arrêtent le saignement (forment une croûte) |
| **plasma** (partie liquide) | transporte les nutriments et les déchets |

Le sang apporte à tous les organes l'**oxygène** (des poumons) et les **nutriments** (de l'intestin).

## Garder un cœur et des poumons en bonne santé
- Faire du **sport** régulièrement.
- Ne pas **fumer** et éviter la fumée (le tabac abîme les poumons).
- Éviter la fumée du bois dans une cuisine fermée : bien aérer.

>! **Expérience** : compte ton pouls pendant une minute au repos, puis après avoir couru. Le cœur bat plus vite à l'effort, car les muscles ont besoin de plus d'oxygène.

> **À retenir** :
> - Nez → trachée → bronches → poumons. On inspire l'oxygène, on expire le gaz carbonique.
> - Le cœur est une pompe ; artères (partent du cœur), veines (reviennent au cœur).
> - Les globules rouges transportent l'oxygène ; les globules blancs nous défendent.
`,
      exercices: [
        { type: "qcm", question: "Quel gaz le corps prend-il dans l'air quand on inspire ?", choix: ["le gaz carbonique", "l'oxygène", "la vapeur d'eau", "la fumée"], reponse: 1, explication: "On inspire l'oxygène, dont le corps a besoin. On rejette le gaz carbonique en expirant." },
        { type: "qcm", question: "Quel est le bon trajet de l'air ?", choix: ["nez, bronches, trachée, poumons", "bouche, œsophage, estomac", "nez, trachée, bronches, poumons", "nez, cœur, poumons"], reponse: 2, explication: "L'air passe par le nez, la trachée, les bronches et arrive dans les poumons. L'œsophage conduit les aliments." },
        { type: "vf", question: "Le cœur est un muscle qui fonctionne comme une pompe.", reponse: true, explication: "Vrai : il pousse le sang dans tout le corps sans arrêt." },
        { type: "saisie", question: "Comment s'appellent les vaisseaux qui partent du cœur ?", reponses: ["artères", "les artères", "artère"], explication: "Les artères partent du cœur ; les veines reviennent au cœur." },
        { type: "qcm", question: "Quel est le rôle des globules blancs ?", choix: ["défendre le corps contre les microbes", "transporter l'oxygène", "arrêter le saignement", "digérer les aliments"], reponse: 0, explication: "Les globules blancs défendent le corps. Les globules rouges transportent l'oxygène ; les plaquettes arrêtent le saignement." },
        { type: "vf", question: "Le cœur bat moins vite quand on court.", reponse: false, explication: "Faux : à l'effort, il bat plus vite, car les muscles ont besoin de plus d'oxygène." },
        { type: "saisie", question: "Comment appelle-t-on les battements du cœur que l'on sent au poignet ?", reponses: ["pouls", "le pouls"], explication: "C'est le pouls." },
        { type: "qcm", question: "Quel conseil est bon pour la santé des poumons ?", choix: ["fumer un peu", "cuisiner au bois dans une pièce fermée", "dormir près d'un feu", "ne pas fumer et aérer la cuisine"], reponse: 3, explication: "Le tabac et la fumée abîment les poumons : il faut ne pas fumer et bien aérer." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : après un match de football, Fatou sent son cœur battre très fort et elle respire vite. Sa petite sœur a peur et croit qu'elle est malade. Consigne : 1) Explique à la petite sœur pourquoi Fatou respire vite et pourquoi son cœur bat fort. 2) Donne deux conseils pour garder un cœur et des poumons en bonne santé.", corrige: "1) Pendant le match, les **muscles** de Fatou ont travaillé. Ils ont besoin de plus d'**oxygène** et de nutriments. Pour en apporter plus, Fatou **respire plus vite** (plus d'oxygène entre dans les poumons) et son **cœur bat plus vite** (le sang circule plus vite vers les muscles). Ce n'est pas une maladie : après quelques minutes de repos, tout redevient normal.\n\n2) Conseils : faire du **sport régulièrement** ; **ne pas fumer** et éviter la fumée (tabac, feu de bois dans une pièce fermée)." },
      ],
    },
    {
      id: "sante-paludisme-hygiene",
      titre: "La santé : paludisme, vaccination, hygiène",
      theme: "Initiation scientifique et technologique",
      cours: `
## Le paludisme
Le **paludisme** est une maladie grave, très fréquente pendant l'**hivernage**.
- Il est causé par un **parasite** : un tout petit être vivant, invisible à l'œil nu, qui vit dans le sang. Il s'appelle le **plasmodium**.
- Il est transmis par la **piqûre d'un moustique femelle** : l'**anophèle**. Le moustique pique une personne malade, puis une personne saine.
- Signes : **fièvre**, frissons, maux de tête, vomissements, fatigue.
- Si on a ces signes, il faut aller **vite au centre de santé** : on fait un test et on donne le bon médicament.

>! **Se protéger** :
>! - dormir sous une **moustiquaire imprégnée** ;
>! - **supprimer les eaux stagnantes** (vieux pneus, boîtes, flaques) où les moustiques pondent ;
>! - assainir les alentours de la maison (désherber, couvrir les canaris d'eau).

## Les maladies liées à l'eau sale
- La **diarrhée** et le **choléra** viennent de l'eau ou des aliments salis par des microbes.
- La **bilharziose** s'attrape en se baignant dans des **eaux douces stagnantes** (marigots) où vivent de petits escargots.
- Pour se protéger : boire de l'**eau potable**, se **laver les mains au savon** (avant de manger, après les toilettes), laver les fruits, utiliser les **latrines**.

## La vaccination
Un **vaccin** apprend au corps à se défendre contre une maladie **avant** de l'attraper. Au Sénégal, le **Programme élargi de vaccination (PEV)** vaccine gratuitement les enfants contre la rougeole, la poliomyélite, la tuberculose, le tétanos, la coqueluche… Il faut garder le **carnet de vaccination**.

## L'hygiène de tous les jours
- **Hygiène corporelle** : se laver tous les jours, se brosser les dents, couper ses ongles.
- **Hygiène alimentaire** : couvrir les aliments contre les mouches, laver les fruits.
- **Hygiène du milieu** : jeter les ordures dans une poubelle, balayer la cour, ne pas faire ses besoins dans la nature.

## Erreur fréquente
Le paludisme ne s'attrape pas en mangeant des mangues ni en se mouillant sous la pluie : seule la **piqûre de l'anophèle** le transmet.

> **À retenir** :
> - Paludisme : piqûre de l'anophèle femelle ; moustiquaire imprégnée, plus d'eaux stagnantes ; centre de santé si fièvre.
> - Eau potable et lavage des mains au savon contre la diarrhée et le choléra.
> - Le vaccin protège avant la maladie (PEV, carnet de vaccination).
`,
      exercices: [
        { type: "qcm", question: "Comment s'attrape le paludisme ?", choix: ["en mangeant des mangues", "en se mouillant sous la pluie", "en touchant un malade", "par la piqûre d'un moustique anophèle femelle"], reponse: 3, explication: "Seule la piqûre de l'anophèle femelle transmet le paludisme." },
        { type: "vf", question: "Dormir sous une moustiquaire imprégnée protège du paludisme.", reponse: true, explication: "Vrai : la moustiquaire empêche les moustiques de piquer et le produit les tue." },
        { type: "qcm", question: "Pourquoi faut-il vider les vieux pneus et les boîtes remplis d'eau ?", choix: ["parce que les moustiques pondent dans les eaux stagnantes", "pour avoir de l'eau potable", "pour arroser les plantes", "parce que l'eau sale attire les poules"], reponse: 0, explication: "Les moustiques pondent dans l'eau qui ne coule pas. Sans eau stagnante, moins de moustiques." },
        { type: "saisie", question: "Comment s'appelle le moustique qui transmet le paludisme ?", reponses: ["anophèle", "l'anophèle", "anophèle femelle", "l'anophèle femelle", "le moustique anophèle"], explication: "C'est l'anophèle (la femelle)." },
        { type: "qcm", question: "Que fait un vaccin ?", choix: ["il guérit la maladie quand on l'a déjà", "il apprend au corps à se défendre avant d'attraper la maladie", "il remplace la moustiquaire", "il nettoie l'eau"], reponse: 1, explication: "Le vaccin prépare le corps à se défendre : on est protégé avant d'être malade." },
        { type: "vf", question: "On peut attraper la bilharziose en se baignant dans un marigot.", reponse: true, explication: "Vrai : dans les eaux douces stagnantes vivent des escargots qui portent le parasite." },
        { type: "qcm", question: "Quel geste protège le mieux contre la diarrhée et le choléra ?", choix: ["dormir sous une moustiquaire", "porter des chaussures", "boire de l'eau potable et se laver les mains au savon", "se vacciner contre la rougeole"], reponse: 2, explication: "Ces maladies viennent de l'eau et des mains sales : eau potable et savon." },
        { type: "saisie", question: "Que signifie le sigle PEV ? (Programme ... de vaccination)", reponses: ["élargi", "Programme élargi de vaccination"], explication: "PEV = Programme élargi de vaccination." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : c'est l'hivernage dans ton quartier. Il y a des flaques d'eau, de vieux pneus et des boîtes vides partout. Plusieurs enfants ont de la fièvre et des frissons. Le chef de quartier te demande de l'aider à informer les habitants. Consigne : 1) Dis de quelle maladie les enfants souffrent peut-être et comment elle s'attrape. 2) Que doivent faire les parents des enfants malades ? 3) Rédige trois conseils pour protéger le quartier.", corrige: "1) Les enfants ont peut-être le **paludisme** (fièvre, frissons). Il est transmis par la **piqûre du moustique anophèle femelle**, qui pond dans les **eaux stagnantes**.\n\n2) Les parents doivent emmener **vite** les enfants au **centre de santé** pour faire un test et recevoir le bon médicament. Il ne faut pas attendre.\n\n3) Conseils :\n- **vider et ramasser** les vieux pneus, les boîtes et combler les flaques ;\n- **dormir sous une moustiquaire imprégnée**, surtout les enfants et les femmes enceintes ;\n- **désherber** et nettoyer les alentours des maisons, couvrir les récipients d'eau." },
      ],
    },
    {
      id: "vegetaux",
      titre: "Les végétaux : nutrition et reproduction",
      theme: "Initiation scientifique et technologique",
      cours: `
## Les parties d'une plante
| Partie | Rôle |
|---|---|
| **racines** | fixent la plante au sol et **absorbent l'eau** et les sels minéraux |
| **tige** (ou tronc) | porte les feuilles et fait monter la **sève** |
| **feuilles** | fabriquent la nourriture de la plante grâce à la lumière |
| **fleur** | sert à la **reproduction** |
| **fruit** | contient les **graines** |

## Comment la plante se nourrit
La plante verte fabrique elle-même sa nourriture dans ses **feuilles**. Pour cela, elle a besoin :
- d'**eau** et de **sels minéraux** (pris par les racines) ;
- de **lumière** (du soleil) ;
- du **gaz carbonique** de l'air.

Elle rejette de l'**oxygène**. C'est pourquoi les arbres sont précieux : ils produisent l'oxygène que nous respirons. Ce travail de la feuille s'appelle la **photosynthèse** : la plante utilise la lumière du soleil pour fabriquer sa nourriture (son mot veut dire « fabriquer avec la lumière »).

## La germination
Une **graine** contient une petite plante (le **germe**) et des réserves. Pour **germer**, une graine a besoin d'**eau**, d'**air** et d'une **température convenable** (ni trop froid, ni trop chaud). La lumière n'est pas nécessaire pour germer, mais elle l'est ensuite pour grandir.

>! **Expérience** : mets des graines de niébé dans trois pots : un sec, un avec du coton mouillé, un rempli d'eau (sans air). Seules celles du coton mouillé germent : il faut à la fois de l'eau et de l'air.

## La reproduction
- **Par les graines** : la fleur est **pollinisée** (le pollen est transporté par les insectes ou le vent) ; elle devient un **fruit** qui contient des **graines**. Exemple : mil, arachide, manguier.
- **Sans graine** (multiplication végétative) : on plante un morceau de la plante. Le **manioc** se reproduit par **bouture** (un morceau de tige) ; la patate douce aussi.

> **À retenir** :
> - Les racines absorbent l'eau ; les feuilles fabriquent la nourriture avec la lumière, l'eau et le gaz carbonique ; la plante rejette de l'oxygène.
> - Germination : eau + air + température convenable.
> - Fleur → fruit → graines ; bouture pour le manioc.
`,
      exercices: [
        { type: "qcm", question: "Quelle partie de la plante absorbe l'eau du sol ?", choix: ["les feuilles", "la fleur", "les racines", "le fruit"], reponse: 2, explication: "Les racines absorbent l'eau et les sels minéraux du sol." },
        { type: "qcm", question: "De quoi une graine a-t-elle besoin pour germer ?", choix: ["d'eau, d'air et d'une température convenable", "seulement de lumière", "d'engrais et de sable", "d'eau seulement, sans air"], reponse: 0, explication: "Eau, air et température convenable. Une graine noyée dans l'eau, sans air, ne germe pas." },
        { type: "vf", question: "Les plantes vertes rejettent de l'oxygène.", reponse: true, explication: "Vrai : en fabriquant leur nourriture à la lumière, elles rejettent de l'oxygène." },
        { type: "saisie", question: "Quelle partie de la plante devient un fruit après la pollinisation ?", reponses: ["fleur", "la fleur"], explication: "La fleur pollinisée se transforme en fruit, qui contient les graines." },
        { type: "qcm", question: "Comment reproduit-on le manioc le plus souvent ?", choix: ["par les graines", "par la fleur", "par les feuilles", "par bouture (un morceau de tige)"], reponse: 3, explication: "On plante des morceaux de tige de manioc : c'est le bouturage." },
        { type: "vf", question: "Une plante peut grandir longtemps dans le noir complet.", reponse: false, explication: "Faux : sans lumière, la plante ne peut pas fabriquer sa nourriture ; elle jaunit et finit par mourir." },
        { type: "qcm", question: "Qui transporte souvent le pollen d'une fleur à l'autre ?", choix: ["les racines", "les insectes (abeilles) et le vent", "la sève", "les vers de terre"], reponse: 1, explication: "Les abeilles, papillons et le vent transportent le pollen : c'est la pollinisation." },
        { type: "saisie", question: "Que contient un fruit, et qui peut donner une nouvelle plante ?", reponses: ["graines", "des graines", "graine", "les graines", "pépins", "noyau"], explication: "Le fruit contient des graines (pépins, noyau). Semées, elles donnent de nouvelles plantes." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : pour la fête de l'arbre, ta classe sème des graines de baobab. Ton camarade Ibrahima met ses graines dans un sac en plastique fermé et sec, au fond d'une armoire. Rien ne pousse. Consigne : 1) Explique pourquoi les graines d'Ibrahima n'ont pas germé. 2) Dis-lui comment faire pour réussir. 3) Explique pourquoi il est important de planter des arbres.", corrige: "1) Les graines d'Ibrahima n'ont **pas d'eau** (le sac est sec) et peu d'**air** (le sac est fermé). Or une graine a besoin d'**eau**, d'**air** et d'une **température convenable** pour germer.\n\n2) Il doit semer ses graines dans de la **terre humide**, dans un pot ou un champ, à l'air libre, et les **arroser** régulièrement sans les noyer. Une fois la petite plante sortie, il faut la mettre à la **lumière**.\n\n3) Les arbres donnent de l'**oxygène**, de l'ombre, des fruits (le pain de singe du baobab) et du bois. Ils retiennent le sol et freinent l'avancée du désert. Planter des arbres protège notre environnement." },
      ],
    },
    {
      id: "animaux",
      titre: "Les animaux : classement, alimentation, reproduction",
      theme: "Initiation scientifique et technologique",
      cours: `
## Vertébrés et invertébrés
- Les **vertébrés** ont un **squelette** avec une **colonne vertébrale**.
- Les **invertébrés** n'en ont pas : insectes (criquet, mouche), escargot, ver de terre, araignée.

## Les cinq groupes de vertébrés
| Groupe | Corps couvert de | Respiration | Exemples |
|---|---|---|---|
| **mammifères** | poils | poumons | vache, chèvre, lion, chauve-souris, dauphin |
| **oiseaux** | plumes | poumons | poule, pélican, vautour |
| **reptiles** | écailles sèches | poumons | lézard, serpent, crocodile, tortue |
| **amphibiens** (batraciens) | peau nue et humide | branchies (têtard), puis poumons et peau | grenouille, crapaud |
| **poissons** | écailles | **branchies** | thiof, capitaine, tilapia |

Attention : la **chauve-souris** vole mais c'est un **mammifère** ; le **dauphin** vit dans l'eau mais c'est un **mammifère** (il allaite ses petits et respire avec des poumons).

## Comment ils naissent
- **Vivipares** : le petit se développe dans le ventre de la mère (mammifères). La mère **allaite** ses petits.
- **Ovipares** : la femelle pond des **œufs** (oiseaux, la plupart des reptiles, amphibiens, poissons, insectes).
- Certains animaux changent beaucoup de forme en grandissant : c'est la **métamorphose** (œuf → têtard → grenouille ; œuf → chenille → chrysalide → papillon).

## Ce qu'ils mangent
- **Herbivores** : mangent des plantes (mouton, gazelle, criquet).
- **Carnivores** : mangent d'autres animaux (lion, épervier).
- **Omnivores** : mangent de tout (poule, porc, être humain).

## Prédateurs et proies
Un **prédateur** est un animal qui chasse et mange d'autres animaux (le lion, l'épervier, le serpent). L'animal mangé est sa **proie** (la gazelle, la souris).

## La chaîne alimentaire
Une **chaîne alimentaire** montre **qui est mangé par qui**. La flèche veut dire « est mangé par ».

~~~
herbe  →  gazelle  →  lion
mil  →  criquet  →  poule  →  homme
~~~

Elle commence toujours par une **plante verte**. Si un maillon disparaît, toute la chaîne est perturbée.

> **À retenir** :
> - Vertébrés (colonne vertébrale) : mammifères, oiseaux, reptiles, amphibiens, poissons. Invertébrés : insectes, escargots…
> - Vivipares (mammifères) et ovipares (œufs).
> - Herbivores, carnivores, omnivores ; une chaîne alimentaire commence par une plante.
`,
      exercices: [
        { type: "qcm", question: "À quel groupe appartient la chauve-souris ?", choix: ["les oiseaux", "les reptiles", "les insectes", "les mammifères"], reponse: 3, explication: "La chauve-souris vole, mais elle a des poils et allaite ses petits : c'est un mammifère." },
        { type: "qcm", question: "Avec quoi respirent les poissons ?", choix: ["des branchies", "des poumons", "la peau seulement", "le nez"], reponse: 0, explication: "Les poissons respirent avec des branchies, qui prennent l'oxygène dissous dans l'eau." },
        { type: "vf", question: "Le criquet est un vertébré.", reponse: false, explication: "Faux : le criquet est un insecte ; il n'a pas de colonne vertébrale. C'est un invertébré." },
        { type: "saisie", question: "Comment appelle-t-on un animal qui pond des œufs ?", reponses: ["ovipare", "un ovipare", "ovipares"], explication: "Un animal qui pond des œufs est ovipare ; un animal dont le petit se développe dans le ventre de la mère est vivipare." },
        { type: "qcm", question: "La poule mange des graines, des insectes et des vers. Elle est donc :", choix: ["herbivore", "carnivore", "omnivore", "invertébrée"], reponse: 2, explication: "Elle mange à la fois des plantes et des animaux : elle est omnivore." },
        { type: "qcm", question: "Quelle chaîne alimentaire est correcte ?", choix: ["lion → gazelle → herbe", "herbe → gazelle → lion", "gazelle → herbe → lion", "lion → herbe → gazelle"], reponse: 1, explication: "La chaîne commence par une plante : l'herbe est mangée par la gazelle, qui est mangée par le lion." },
        { type: "vf", question: "Le dauphin est un mammifère.", reponse: true, explication: "Vrai : il respire avec des poumons et allaite ses petits, même s'il vit dans la mer." },
        { type: "saisie", question: "Comment s'appelle le petit de la grenouille, qui vit dans l'eau et respire avec des branchies ?", reponses: ["têtard", "un têtard", "le têtard"], explication: "Le têtard se transforme en grenouille : c'est la métamorphose." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : dans un village, les paysans ont tué presque tous les serpents et les oiseaux rapaces (éperviers). L'année suivante, les rats et les souris envahissent les greniers de mil. Consigne : 1) Écris une chaîne alimentaire avec le mil, la souris et l'épervier. 2) Explique pourquoi les rats et les souris sont devenus si nombreux. 3) Donne un conseil aux paysans.", corrige: "1) Chaîne alimentaire : **mil → souris → épervier** (la flèche veut dire « est mangé par »). On peut aussi écrire mil → souris → serpent.\n\n2) Les serpents et les éperviers mangent les souris et les rats : ce sont leurs **prédateurs**. Comme les paysans les ont tués, plus personne ne mange les rongeurs. Ils se sont donc **multipliés** et mangent le mil des greniers. La chaîne alimentaire a été **perturbée**.\n\n3) Conseil : **protéger** les rapaces et ne pas tuer tous les animaux sauvages, car chacun a sa place dans la nature ; et bien **fermer les greniers**." },
      ],
    },
    {
      id: "eau-etats",
      titre: "L'eau : états, cycle et eau potable",
      theme: "Initiation scientifique et technologique",
      cours: `
## Les trois états de l'eau
| État | Exemple | Forme |
|---|---|---|
| **solide** | la glace | a une forme propre |
| **liquide** | l'eau du robinet, la pluie | prend la forme du récipient |
| **gazeux** | la **vapeur d'eau** (invisible) | occupe tout l'espace |

## Les changements d'état
| Passage | Nom | Exemple |
|---|---|---|
| solide → liquide | **fusion** | la glace fond au soleil |
| liquide → solide | **solidification** | l'eau gèle au congélateur |
| liquide → gaz | **évaporation** (ou ébullition) | le linge sèche ; l'eau bout dans la marmite |
| gaz → liquide | **condensation** | des gouttes sur une bouteille fraîche |

L'eau pure **gèle à 0 °C** et **bout à 100 °C**. La température se mesure avec un **thermomètre**.

## Le cycle de l'eau
1. Le soleil chauffe l'eau des océans, des fleuves et des lacs : elle s'**évapore**.
2. En montant, la vapeur se refroidit et se **condense** en petites gouttes : ce sont les **nuages**.
3. Les gouttes grossissent et tombent : ce sont les **pluies** (les précipitations).
4. L'eau ruisselle vers les fleuves, ou s'**infiltre** dans le sol (nappes souterraines, puits), puis retourne à la mer.

## L'eau potable
Une eau **potable** peut se boire sans danger. Une eau claire n'est pas toujours potable : elle peut contenir des **microbes** invisibles.

>! **Rendre l'eau plus propre** :
>! - **décanter** : laisser reposer ; la terre tombe au fond ;
>! - **filtrer** : verser à travers un tissu propre, du sable ou un filtre ;
>! - **désinfecter** : **faire bouillir** l'eau ou ajouter quelques gouttes d'**eau de Javel** (la bonne dose), pour tuer les microbes.
>! Décanter et filtrer enlèvent la saleté visible ; seule la **désinfection** tue les microbes.

## Économiser l'eau
L'eau est précieuse, surtout au nord du pays. Fermer les robinets, réparer les fuites, arroser le soir.

> **À retenir** :
> - Trois états : solide (glace), liquide, gaz (vapeur invisible). Fusion à 0 °C, ébullition à 100 °C.
> - Cycle de l'eau : évaporation → condensation (nuages) → pluie → ruissellement et infiltration.
> - Eau potable : décanter, filtrer, puis désinfecter (bouillir ou eau de Javel).
`,
      exercices: [
        { type: "qcm", question: "Comment s'appelle le passage de l'état solide à l'état liquide ?", choix: ["la solidification", "la fusion", "l'évaporation", "la condensation"], reponse: 1, explication: "La glace qui fond passe de l'état solide à l'état liquide : c'est la fusion." },
        { type: "saisie", question: "À quelle température l'eau pure bout-elle (en °C) ?", reponses: ["100", "100 °C", "100 degrés"], explication: "L'eau pure bout à 100 °C et gèle à 0 °C." },
        { type: "vf", question: "La vapeur d'eau est visible.", reponse: false, explication: "Faux : la vapeur d'eau est un gaz invisible. La « fumée » blanche au-dessus de la marmite est faite de petites gouttes d'eau liquide." },
        { type: "qcm", question: "Pourquoi des gouttes apparaissent-elles sur une bouteille sortie du réfrigérateur ?", choix: ["la bouteille fuit", "le plastique transpire", "la vapeur d'eau de l'air se condense au contact du froid", "l'eau de la bouteille s'évapore"], reponse: 2, explication: "La vapeur d'eau invisible de l'air se refroidit sur la bouteille froide et redevient liquide : c'est la condensation." },
        { type: "qcm", question: "Dans le cycle de l'eau, comment se forment les nuages ?", choix: ["la vapeur d'eau se refroidit en altitude et se condense en petites gouttes", "le vent apporte du sable", "l'eau des puits monte au ciel", "la glace fond"], reponse: 0, explication: "En montant, la vapeur se refroidit et se condense en gouttelettes : elles forment les nuages." },
        { type: "vf", question: "Une eau claire est toujours potable.", reponse: false, explication: "Faux : elle peut contenir des microbes invisibles. Il faut la désinfecter (bouillir ou eau de Javel)." },
        { type: "qcm", question: "Quelle opération tue les microbes de l'eau ?", choix: ["la décantation", "la filtration avec un tissu", "laisser l'eau au soleil une minute", "faire bouillir l'eau"], reponse: 3, explication: "Faire bouillir (ou ajouter la bonne dose d'eau de Javel) tue les microbes. Décanter et filtrer enlèvent seulement la saleté visible." },
        { type: "saisie", question: "Le linge mouillé sèche au soleil. Comment s'appelle ce passage de l'eau liquide à l'état gazeux ?", reponses: ["évaporation", "l'évaporation", "vaporisation"], explication: "C'est l'évaporation : l'eau liquide devient vapeur d'eau." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : dans ton village, l'eau du puits est trouble et plusieurs enfants ont la diarrhée. La maman de ton ami Ndiaye te demande comment rendre cette eau bonne à boire. Consigne : 1) Explique pourquoi les enfants sont peut-être malades. 2) Décris, dans l'ordre, les étapes pour rendre l'eau potable. 3) Donne un conseil pour garder l'eau propre à la maison.", corrige: "1) L'eau du puits contient peut-être des **microbes**. En la buvant, les enfants attrapent la **diarrhée**. Une eau trouble ou même claire n'est pas forcément **potable**.\n\n2) Étapes :\n- **décanter** : laisser reposer l'eau dans un seau ; la terre tombe au fond ; verser doucement l'eau du dessus ;\n- **filtrer** : la verser à travers un tissu propre ou un filtre ;\n- **désinfecter** : la **faire bouillir** (puis la laisser refroidir), ou ajouter la bonne dose d'**eau de Javel** et attendre avant de boire.\n\n3) Conseil : garder l'eau dans un récipient **propre et couvert** (canari ou bidon fermé), et la puiser avec un gobelet propre ; **couvrir le puits**." },
      ],
    },
    {
      id: "electricite-energie",
      titre: "L'électricité et l'énergie",
      theme: "Initiation scientifique et technologique",
      cours: `
## Le circuit électrique
Pour qu'une ampoule s'allume, il faut un **circuit électrique fermé** : une **pile** (le générateur), des **fils**, une **ampoule** (le récepteur) et souvent un **interrupteur**. Le courant doit pouvoir faire **le tour complet**.
- Circuit **fermé** (interrupteur fermé) : le courant passe, l'ampoule brille.
- Circuit **ouvert** (fil coupé ou interrupteur ouvert) : le courant ne passe pas, l'ampoule est éteinte.

## Conducteurs et isolants
- **Conducteurs** : ils laissent passer le courant. Les **métaux** (cuivre, fer, aluminium), l'eau salée, le corps humain.
- **Isolants** : ils ne laissent pas passer le courant. Le **plastique**, le caoutchouc, le verre, le bois sec.
Les fils électriques sont en **cuivre** (conducteur) entouré de **plastique** (isolant) qui nous protège.

## Les dangers de l'électricité
La pile de la lampe torche n'est pas dangereuse. Mais le courant des **prises** de la maison (plus de **200 volts** : 220 à 230 V) peut **tuer** (électrocution).
- Ne jamais mettre un objet dans une prise.
- Ne jamais toucher un appareil électrique avec les mains mouillées.
- Ne pas s'approcher d'un fil électrique tombé par terre ; prévenir un adulte.
- Ne pas faire voler un cerf-volant près des lignes électriques.

## Les sources d'énergie
| Énergies **renouvelables** (ne s'épuisent pas) | Énergies **non renouvelables** (s'épuisent) |
|---|---|
| soleil (panneaux solaires) | pétrole, essence, gasoil |
| vent (éoliennes, comme à Taïba Ndiaye) | gaz |
| eau des fleuves (barrage de Manantali) | charbon |

Le **bois** est renouvelable seulement si l'on **replante** autant d'arbres qu'on en coupe. Couper trop de bois provoque la **déforestation**.

## Économiser l'énergie
Éteindre la lumière en sortant, utiliser des **lampes économiques**, des **foyers améliorés** qui brûlent moins de bois, profiter du soleil.

>! **Méthode** : pour savoir si un objet est conducteur, place-le dans un circuit à la place d'un fil. Si l'ampoule s'allume, il est conducteur ; sinon, il est isolant.

> **À retenir** :
> - Une ampoule s'allume seulement dans un circuit fermé.
> - Métaux = conducteurs ; plastique, caoutchouc, verre, bois sec = isolants.
> - Le courant des prises (environ 220-230 V) est dangereux.
> - Renouvelables : soleil, vent, eau ; non renouvelables : pétrole, gaz, charbon.
`,
      exercices: [
        { type: "qcm", question: "Pourquoi l'ampoule ne s'allume-t-elle pas quand l'interrupteur est ouvert ?", choix: ["parce que la pile est neuve", "parce que le circuit est ouvert : le courant ne peut pas faire le tour", "parce que l'ampoule est trop petite", "parce qu'il fait jour"], reponse: 1, explication: "Un interrupteur ouvert coupe le circuit : le courant ne passe plus." },
        { type: "qcm", question: "Lequel de ces matériaux est un conducteur électrique ?", choix: ["le plastique", "le caoutchouc", "le cuivre", "le bois sec"], reponse: 2, explication: "Le cuivre, comme tous les métaux, est conducteur. Les autres sont des isolants." },
        { type: "vf", question: "On peut toucher une prise électrique avec les mains mouillées sans danger.", reponse: false, explication: "Faux : c'est très dangereux. L'eau et le corps conduisent le courant ; on risque l'électrocution." },
        { type: "saisie", question: "Comment appelle-t-on un matériau qui ne laisse pas passer le courant ?", reponses: ["isolant", "un isolant"], explication: "Un isolant (plastique, caoutchouc, verre, bois sec)." },
        { type: "qcm", question: "Laquelle de ces énergies est renouvelable ?", choix: ["l'énergie solaire", "le pétrole", "le gaz", "le charbon"], reponse: 0, explication: "Le soleil ne s'épuise pas : son énergie est renouvelable. Pétrole, gaz et charbon s'épuisent." },
        { type: "vf", question: "Les fils électriques sont entourés de plastique pour nous protéger.", reponse: true, explication: "Vrai : le plastique est isolant ; il empêche le courant de passer dans notre corps." },
        { type: "qcm", question: "Quel geste permet d'économiser le bois de chauffe ?", choix: ["faire un grand feu", "laisser le feu allumé toute la nuit", "couper plus d'arbres", "utiliser un foyer amélioré"], reponse: 3, explication: "Le foyer amélioré brûle moins de bois pour cuire le repas." },
        { type: "vf", question: "Le courant des prises de la maison (plus de 200 volts) peut tuer, alors que la pile d'une lampe torche est sans danger.", reponse: true, explication: "Vrai : les prises de la maison donnent environ 220-230 volts ; la pile de la lampe torche a seulement 1,5 à 4,5 volts." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : l'école de ton village n'a pas l'électricité. Le soir, les élèves révisent à la lampe à pétrole, qui fait de la fumée et coûte cher. Le directeur veut installer des panneaux solaires. Consigne : 1) Explique pourquoi l'énergie solaire est un bon choix pour l'école. 2) Une lampe ne s'allume pas : propose deux causes possibles. 3) Donne deux règles de sécurité à afficher dans la classe.", corrige: "1) L'énergie solaire est **renouvelable** : le soleil brille presque toute l'année au Sénégal et ne s'épuise pas. Elle est **gratuite** une fois les panneaux installés, ne fait **pas de fumée** et ne pollue pas, contrairement au pétrole.\n\n2) Causes possibles : le **circuit est ouvert** (interrupteur ouvert, fil coupé ou débranché) ; l'**ampoule est grillée** ; la batterie est vide.\n\n3) Règles de sécurité :\n- ne jamais toucher un appareil ou une prise avec les **mains mouillées** ;\n- ne jamais mettre un objet dans une **prise** ; ne pas toucher un fil abîmé et **prévenir un adulte**." },
      ],
    },
    {
      id: "machines-simples",
      titre: "Les machines simples : levier, poulie, plan incliné",
      theme: "Initiation scientifique et technologique",
      cours: `
## À quoi sert une machine simple ?
Une **machine simple** est un outil qui nous aide à **soulever ou déplacer une charge avec moins d'effort**. Les principales : le **levier**, la **poulie**, le **plan incliné**, la **roue**.

## Le levier
Un levier est une barre rigide qui tourne autour d'un **point d'appui**. Il y a trois éléments :
- le **point d'appui** (là où la barre s'appuie) ;
- la **charge** (ce qu'on veut soulever : la résistance) ;
- l'**effort** (la force qu'on exerce : la puissance).

Plus on appuie **loin du point d'appui**, moins on a besoin de force.

Exemples : la barre à mine pour soulever une pierre, la balançoire, les ciseaux, la brouette, le décapsuleur, la pince.

>! **Exemple** : pour soulever une grosse pierre avec un bâton, place une petite pierre (le point d'appui) **près** de la grosse pierre, et appuie à l'**autre bout** du bâton. C'est beaucoup plus facile.

## La poulie
Une **poulie** est une roue avec une gorge où passe une corde. Au **puits**, la poulie permet de **tirer vers le bas** pour faire monter le seau : c'est plus facile et plus confortable que de tirer vers le haut.

## Le plan incliné
Un **plan incliné** est une pente. Pour monter un fût lourd dans une charrette, on le fait **rouler sur une planche inclinée** : le chemin est plus long, mais l'effort est plus petit. Les rampes pour les fauteuils roulants sont des plans inclinés.

## La roue
La **roue** diminue le frottement : il est plus facile de tirer une charrette que de traîner un sac par terre.

> **À retenir** :
> - Une machine simple permet de faire moins d'effort.
> - Levier : point d'appui, charge, effort ; plus on appuie loin du point d'appui, moins il faut de force.
> - Poulie (puits), plan incliné (planche, rampe), roue (charrette, brouette).
`,
      exercices: [
        { type: "qcm", question: "À quoi sert une machine simple ?", choix: ["à produire de l'électricité", "à faire moins d'effort pour soulever ou déplacer une charge", "à aller plus vite en voiture", "à remplacer le soleil"], reponse: 1, explication: "Levier, poulie, plan incliné et roue diminuent l'effort nécessaire." },
        { type: "saisie", question: "Autour de quel point un levier tourne-t-il ?", reponses: ["point d'appui", "le point d'appui", "appui"], explication: "Un levier tourne autour de son point d'appui." },
        { type: "qcm", question: "Pour soulever une pierre avec un levier en faisant le moins d'effort, où faut-il appuyer ?", choix: ["tout près du point d'appui", "sur la pierre", "loin du point d'appui", "au milieu exactement, toujours"], reponse: 2, explication: "Plus on appuie loin du point d'appui, moins il faut de force." },
        { type: "qcm", question: "Quelle machine simple utilise-t-on au puits pour remonter le seau ?", choix: ["la poulie", "le plan incliné", "la balançoire", "les ciseaux"], reponse: 0, explication: "La poulie permet de tirer la corde vers le bas pour faire monter le seau." },
        { type: "vf", question: "La rampe d'accès pour fauteuils roulants est un plan incliné.", reponse: true, explication: "Vrai : c'est une pente qui permet de monter avec moins d'effort." },
        { type: "vf", question: "Avec un plan incliné, le chemin est plus court et l'effort plus grand.", reponse: false, explication: "Faux : c'est l'inverse. Le chemin est plus long, mais l'effort est plus petit." },
        { type: "qcm", question: "Lequel de ces objets est un levier ?", choix: ["un seau", "une bouteille", "une corde", "un décapsuleur"], reponse: 3, explication: "Le décapsuleur s'appuie sur le bord de la capsule (point d'appui) : c'est un levier." },
        { type: "saisie", question: "Comment appelle-t-on, dans un levier, l'objet lourd que l'on veut soulever ?", reponses: ["charge", "la charge", "résistance", "la résistance"], explication: "C'est la charge (on dit aussi la résistance). La force qu'on exerce est l'effort." },
        { type: "redaction", question: "**Situation d'intégration.** Contexte : au marché, Modou doit charger un fût d'huile très lourd dans sa charrette. Il n'arrive pas à le soulever. Il a une longue planche solide et une barre de fer. Consigne : 1) Propose une solution avec la planche et explique pourquoi elle aide Modou. 2) Explique comment il pourrait aussi utiliser la barre de fer pour soulever un côté du fût. Fais un petit schéma si tu veux.", corrige: "1) Modou pose la **planche en pente** entre le sol et la charrette : c'est un **plan incliné**. Il fait **rouler** le fût sur la planche. Le chemin est plus long, mais l'**effort est beaucoup plus petit** que s'il soulevait le fût d'un coup.\n\n2) Avec la barre de fer, Modou fabrique un **levier** : il glisse un bout de la barre sous le fût, pose une pierre ou un morceau de bois **près du fût** (le **point d'appui**) et **appuie à l'autre bout**, le plus loin possible. Le fût (la **charge**) se soulève avec peu d'**effort**.\n\nSchéma : fût (charge) — point d'appui (pierre) ———————— main de Modou (effort)." },
      ],
    },
    {
      id: "monde-cartes",
      titre: "La Terre, les continents et la lecture de carte",
      theme: "Géographie",
      cours: `
## La Terre : globe et planisphère
La Terre a la forme d'une boule. Le **globe** la représente en boule ; le **planisphère** est une carte du monde entier à plat.
- L'**équateur** est une ligne imaginaire qui fait le tour de la Terre, à égale distance des deux **pôles** (pôle Nord, pôle Sud). Il partage la Terre en deux **hémisphères** : l'hémisphère **nord** et l'hémisphère **sud**.
- Les **tropiques** (tropique du Cancer au nord, tropique du Capricorne au sud) entourent la zone chaude de la Terre.
- Le **Sénégal** est dans l'**hémisphère nord**, entre l'équateur et le tropique du Cancer : c'est un pays **tropical**, chaud.

## Les continents et les océans
| Continents | Océans |
|---|---|
| **Afrique**, **Amérique**, **Asie**, **Europe**, **Océanie**, **Antarctique** (couvert de glace, autour du pôle Sud) | **Pacifique** (le plus grand), **Atlantique**, **Indien**, **Arctique** (au nord), **Austral** (au sud) |

On dit souvent « les cinq continents » : on compte alors seulement les continents habités (sans l'Antarctique).
L'**océan Atlantique** sépare l'Afrique et l'Europe de l'Amérique : c'est l'océan qui borde le Sénégal.

## S'orienter
- Les quatre **points cardinaux** : **Nord**, **Sud**, **Est**, **Ouest**. Entre eux : nord-est, nord-ouest, sud-est, sud-ouest.
- Le soleil se **lève à l'est** et se **couche à l'ouest**. À midi, au Sénégal, ton ombre est très courte.
- Sur une carte, le nord est presque toujours **en haut** ; une **rose des vents** l'indique.
- Exemple : Saint-Louis est au **nord-est** de Dakar ; Ziguinchor est au **sud-est** de Dakar.

## Lire une carte
Une carte a toujours :
1. un **titre** (ce que montre la carte) ;
2. une **légende** (ce que veulent dire les couleurs et les symboles) ;
3. une **orientation** (la flèche du nord ou la rose des vents) ;
4. une **échelle** (combien de kilomètres représente 1 cm).

>! **Utiliser l'échelle** : à l'échelle **1/1 000 000**, 1 cm sur la carte = 1 000 000 cm en vrai = **10 km**.
>! Deux villes à **7 cm** sur la carte sont donc à 7 × 10 = **70 km** en vrai.
>! À l'échelle **1/2 000 000**, 1 cm = **20 km**.

## Erreur fréquente
Ne confonds pas **continent** (grande étendue de terre : l'Afrique) et **pays** (le Sénégal est un pays du continent africain).

> **À retenir** :
> - L'équateur partage la Terre en hémisphère nord et hémisphère sud ; le Sénégal est dans l'hémisphère nord, entre l'équateur et le tropique du Cancer.
> - 6 continents (Afrique, Amérique, Asie, Europe, Océanie, Antarctique) et 5 océans (Pacifique, Atlantique, Indien, Arctique, Austral).
> - Points cardinaux : le soleil se lève à l'est. Une carte : titre, légende, orientation, échelle.
`,
      exercices: [
        { type: "qcm", question: "Quel est le plus grand océan du monde ?", choix: ["l'océan Atlantique", "l'océan Indien", "l'océan Pacifique", "l'océan Arctique"], reponse: 2, explication: "L'océan Pacifique est le plus grand. L'Atlantique, qui borde le Sénégal, vient ensuite." },
        { type: "vf", question: "Le Sénégal se trouve dans l'hémisphère sud.", reponse: false, explication: "Faux : le Sénégal est au nord de l'équateur, donc dans l'hémisphère nord, entre l'équateur et le tropique du Cancer." },
        { type: "saisie", question: "De quel côté (point cardinal) le soleil se lève-t-il ?", reponses: ["est", "l'est", "à l'est"], explication: "Le soleil se lève à l'est et se couche à l'ouest." },
        { type: "qcm", question: "Quel continent est couvert de glace, autour du pôle Sud ?", choix: ["l'Antarctique", "l'Océanie", "l'Europe", "l'Asie"], reponse: 0, explication: "L'Antarctique est couvert de glace ; presque personne n'y vit." },
        { type: "qcm", question: "Sur une carte, où trouve-t-on ce que veulent dire les couleurs et les symboles ?", choix: ["dans le titre", "dans l'échelle", "dans la rose des vents", "dans la légende"], reponse: 3, explication: "La légende explique les couleurs et les symboles. L'échelle sert à calculer les distances, la rose des vents à s'orienter." },
        { type: "saisie", question: "Sur une carte à l'échelle 1/1 000 000 (1 cm = 10 km), deux villes sont à 7 cm l'une de l'autre. Quelle est la distance réelle, en km ?", reponses: ["70", "70 km"], explication: "1 cm = 10 km, donc 7 cm = 7 × 10 = 70 km." },
        { type: "qcm", question: "Dans quelle direction se trouve Ziguinchor par rapport à Dakar ?", choix: ["au nord-ouest", "au sud-est", "au nord-est", "à l'ouest"], reponse: 1, explication: "Ziguinchor, en Casamance, est au sud-est de Dakar. Saint-Louis, lui, est au nord-est." },
        { type: "vf", question: "L'équateur partage la Terre en deux hémisphères : nord et sud.", reponse: true, explication: "Vrai : l'équateur est à égale distance des deux pôles." },
        { type: "qcm", question: "Quel océan sépare l'Afrique de l'Amérique ?", choix: ["l'océan Indien", "l'océan Austral", "l'océan Atlantique", "l'océan Pacifique"], reponse: 2, explication: "L'océan Atlantique, qui borde le Sénégal, sépare l'Afrique et l'Europe de l'Amérique." },
        { type: "redaction", question: "**Situation.** Contexte : pour un exposé, ton maître te donne une carte du Sénégal à l'échelle 1/2 000 000. Sur la carte, Dakar et Kaolack sont à 8 cm l'une de l'autre. Ton camarade ne sait pas lire une carte. Consigne : 1) Cite les quatre éléments qu'il doit d'abord regarder sur une carte et dis à quoi sert chacun. 2) Calcule la distance réelle à vol d'oiseau entre Dakar et Kaolack. 3) Dans quelle direction se trouve Kaolack par rapport à Dakar ?", corrige: "1) Il faut regarder :\n- le **titre** : il dit ce que montre la carte ;\n- la **légende** : elle explique les couleurs et les symboles ;\n- l'**orientation** (rose des vents ou flèche du nord) : elle indique le nord ;\n- l'**échelle** : elle permet de calculer les distances réelles.\n\n2) À l'échelle 1/2 000 000, 1 cm = 20 km. Donc 8 cm = 8 × 20 = **160 km** à vol d'oiseau.\n\n3) Kaolack se trouve à l'**est** de Dakar (un peu au sud-est)." },
      ],
    },
    {
      id: "fiche-histoire",
      titre: "Fiche de révision : histoire",
      theme: "Fiches de révision CFEE",
      cours: `
## Ma frise des dates clés
| Date | Ce qui se passe |
|---|---|
| vers 1235 | **Kirina** : Soundiata Keïta fonde l'empire du Mali |
| 1324 | pèlerinage de **Kankou Moussa** à La Mecque |
| XVe s. | les **Portugais** arrivent sur la côte |
| vers 1549 | **Danki** : le Cayor se libère du Djolof (XVIe s.) |
| 1591 | **Tondibi** : fin de l'empire songhaï |
| XVIe-XIXe s. | **traite atlantique** |
| 1848 | la France **abolit l'esclavage** |
| 1854 | **Faidherbe** mène la conquête |
| 1857 | siège de **Médine** (El Hadj Omar) ; création des tirailleurs |
| 1867 | Maba Diakhou Bâ tué à **Somb** |
| 1885 | chemin de fer **Dakar – Saint-Louis** |
| 1886 | Lat Dior tué à **Dékheulé** |
| 1895 | création de l'**AOF** ; Bamba exilé au **Gabon** |
| 1902 | **Dakar** capitale de l'AOF |
| 1914 | **Blaise Diagne** élu député |
| 1er déc. 1944 | massacre de **Thiaroye** |
| 1959 | **Fédération du Mali** |
| 4 avril 1960 | accords : **fête de l'Indépendance** |
| 20 août 1960 | le Sénégal **indépendant seul** |
| 1978 | **Gorée** au patrimoine de l'UNESCO |

## Les personnages
| Qui ? | Ce qu'il a fait |
|---|---|
| **Soundiata Keïta** | fonde l'empire du Mali (Kirina) |
| **Kankou Moussa** | empereur du Mali, pèlerinage plein d'or |
| **Sonni Ali Ber**, **l'Askia Mohammed** | agrandissent et organisent le Songhaï |
| **Ndiadiane Ndiaye** | fonde le Djolof (selon la tradition) |
| **Ndaté Yalla Mbodj** | linguère du Waalo, s'oppose aux Français |
| **Faidherbe** | gouverneur, conquête du Sénégal |
| **El Hadj Omar Tall** | Fouta Toro ; assiège Médine |
| **Maba Diakhou Bâ** | Rip (Saloum) ; meurt à Somb |
| **Lat Dior** | damel du **Cayor** ; refuse le chemin de fer |
| **Alboury Ndiaye** | bourba du **Djolof** ; meurt en exil |
| **Cheikh Ahmadou Bamba** | résistance **pacifique** ; exil au Gabon |
| **Aline Sitoé Diatta** | Casamance ; résistance pacifique ; morte à Tombouctou |
| **Blaise Diagne** | 1er Africain noir élu député (1914) |
| **Senghor** | 1er président (1960-1980) ; paroles de l'hymne |

## Les listes à savoir par cœur
- **Empires** (ordre G – M – S) : Ghana (Koumbi Saleh), Mali (Niani), Songhaï (Gao).
- **Tekrour** (vallée du fleuve) : roi War Diabi, musulman dès le XIe siècle, un des premiers royaumes musulmans.
- **Titres des rois** : Bourba (Djolof), Brak (Waalo), Damel (Cayor), Teigne (Baol), Bour (Sine, Saloum), Almamy (Fouta), Mansa (Gabou).
- **Commerce triangulaire** : Europe → Afrique (tissus, armes) → Amérique (captifs) → Europe (sucre, coton, café).
- **Quatre communes** : Saint-Louis, Gorée, Rufisque, Dakar.
- **Présidents** : Senghor, Abdou Diouf, Abdoulaye Wade, Macky Sall, Bassirou Diomaye Faye (depuis 2024).
- **Symboles** : drapeau vert, or, rouge avec une étoile verte ; devise « Un Peuple – Un But – Une Foi » ; hymne « Le Lion rouge ».

## Les mots à connaître
- **comptoir** : lieu de commerce des Européens sur la côte (Gorée, Saint-Louis).
- **traite** : commerce d'êtres humains réduits en esclavage.
- **AOF** : Afrique-Occidentale française, colonies regroupées en 1895.
- **tirailleurs sénégalais** : soldats africains de l'armée française.
- **résistance armée** (batailles) / **résistance pacifique** (sans armes).
- **griot** : garde et raconte l'histoire des familles.

## Les pièges
- L'ancien **Ghana** n'était pas à la place du Ghana actuel.
- **Lat Dior** = Cayor ; **Alboury Ndiaye** = Djolof.
- Fête de l'Indépendance le **4 avril**, mais indépendance seul le **20 août 1960**.
- Bamba et Aline Sitoé Diatta : **sans armes**.
`,
      exercices: [
        { type: "qcm", question: "Dans quel ordre les trois grands empires se sont-ils succédé ?", choix: ["Mali, Ghana, Songhaï", "Ghana, Mali, Songhaï", "Songhaï, Mali, Ghana", "Ghana, Songhaï, Mali"], reponse: 1, explication: "Ordre G – M – S : Ghana, puis Mali, puis Songhaï." },
        { type: "saisie", question: "Quel était le titre du roi du Cayor ?", reponses: ["damel", "le damel"], explication: "Le roi du Cayor était le damel (Lat Dior, par exemple)." },
        { type: "vf", question: "Cheikh Ahmadou Bamba a mené une résistance armée contre les Français.", reponse: false, explication: "Faux : sa résistance était pacifique, sans armes. Il a été exilé au Gabon en 1895." },
        { type: "qcm", question: "Qu'emportaient les bateaux de l'Afrique vers l'Amérique, dans le commerce triangulaire ?", choix: ["du sucre et du café", "des tissus et des armes", "de l'or et du sel", "des captifs africains"], reponse: 3, explication: "D'Afrique vers l'Amérique : des captifs. Le sucre et le café allaient de l'Amérique vers l'Europe." },
        { type: "saisie", question: "En quelle année Lat Dior est-il tué à Dékheulé ?", reponses: ["1886", "en 1886"], explication: "Lat Dior, damel du Cayor, est tué à Dékheulé en 1886, un an après l'ouverture du chemin de fer." },
        { type: "qcm", question: "Quelle ville devient la capitale de l'AOF à partir de 1902 ?", choix: ["Dakar", "Saint-Louis", "Gorée", "Rufisque"], reponse: 0, explication: "La capitale de l'AOF est d'abord Saint-Louis, puis Dakar à partir de 1902." },
        { type: "vf", question: "Le Sénégal fête son indépendance le 4 avril.", reponse: true, explication: "Vrai : le 4 avril 1960, des accords sont signés avec la France. Le Sénégal devient indépendant seul le 20 août 1960." },
        { type: "qcm", question: "Qui a été le premier président du Sénégal ?", choix: ["Abdou Diouf", "Mamadou Dia", "Léopold Sédar Senghor", "Blaise Diagne"], reponse: 2, explication: "Léopold Sédar Senghor, de 1960 à 1980. Il a aussi écrit les paroles de l'hymne." },
        { type: "saisie", question: "Quelle île, en face de Dakar, est un lieu de mémoire de la traite avec sa Maison des Esclaves ?", reponses: ["Gorée", "l'île de Gorée", "île de Gorée"], explication: "Gorée, inscrite au patrimoine mondial de l'UNESCO depuis 1978." },
        { type: "qcm", question: "Quel événement a lieu à Thiaroye le 1er décembre 1944 ?", choix: ["la création de l'AOF", "des tirailleurs qui réclamaient leur argent sont tués", "l'élection de Blaise Diagne", "la fin de la traite"], reponse: 1, explication: "À Thiaroye, des tirailleurs sénégalais qui réclamaient leur argent sont tués par l'armée française." },
      ],
    },
    {
      id: "fiche-geographie",
      titre: "Fiche de révision : géographie",
      theme: "Fiches de révision CFEE",
      cours: `
## Ma carte mentale du Sénégal
~~~
          SÉNÉGAL
  Afrique de l'Ouest, capitale Dakar
            |
 Voisins : Mauritanie (N), Mali (E),
 Guinée et Guinée-Bissau (S),
 Gambie (enclavée), océan (O)
            |
 Relief : plat ; collines à Kédougou
            |
 Fleuves : Sénégal, Gambie,
 Casamance ; Saloum = bras de mer
            |
 Climat : hivernage + saison sèche
            |
 Végétation (du nord au sud) :
 steppe -> savane -> forêt
~~~

## Les chiffres à retenir
| Quoi ? | Chiffre |
|---|---|
| superficie | **196 722 km²** |
| habitants (recensement 2023, ANSD) | **18 126 390** |
| moins de 15 ans | **39 %** |
| habitants en ville | environ **55 %** |
| densité | **92 habitants par km²** |
| croissance | environ **3 % par an** |
| régions | **14** (dont Kaffrine, Kédougou, Sédhiou en 2008) |
| départements | **46** |
| États d'Afrique | **54** |

## Les 14 régions par zone
- **Ouest** (2) : Dakar, Thiès.
- **Centre** (4) : Diourbel, Fatick, Kaolack, Kaffrine.
- **Nord** (3) : Saint-Louis, Louga, Matam.
- **Est** (2) : Tambacounda, Kédougou.
- **Sud** (3) : Ziguinchor, Sédhiou, Kolda.

## Eau, climat, végétation
- **Lac de Guiers** : eau potable de Dakar. **Lac Rose** : sel.
- Barrages : **Diama** (bloque l'eau salée), **Manantali** (au Mali, électricité).
- Vents : **harmattan** (nord-est, chaud et sec), **mousson** (sud-ouest, pluies), **alizé maritime** (nord-ouest, frais).
- Pluie : peu au nord (sahélien), plus au centre (soudanien), beaucoup au sud (Casamance).
- **Mangrove** dans le Saloum et en Casamance. Arbre symbole : le **baobab**.

## Les activités
| Activité | Où ? |
|---|---|
| arachide | bassin arachidier (Kaolack, Kaffrine…) |
| riz | vallée du fleuve, Casamance |
| légumes | Niayes |
| élevage | Ferlo |
| pêche en pirogue | Kayar, Mbour, Joal, Saint-Louis |
| phosphates / or | Taïba / Kédougou |
| pétrole (depuis 2024) | en mer, Sangomar |

Transports : port de Dakar, aéroport Blaise-Diagne (Diass), TER Dakar – Diamniadio.

## Afrique et monde
- Afrique : **Sahara** (plus grand désert chaud), **Nil** (plus long fleuve), **Kilimandjaro** (plus haut sommet).
- **UA** (Addis-Abeba), **CEDEAO** (Abuja), **UEMOA** (franc CFA), **OMVS** (fleuve Sénégal).
- **6 continents**, **5 océans** ; le Sénégal est dans l'**hémisphère nord**.
- Une carte : **titre, légende, orientation, échelle**. À 1/1 000 000, 1 cm = 10 km.

## Les mots à connaître
- **culture vivrière** (pour se nourrir) / **culture de rente** (pour vendre).
- **exode rural** : départ de la campagne vers la ville.
- **estuaire** : là où un fleuve se jette dans la mer.
- **enclavé** : presque entièrement entouré par un autre pays (la Gambie, dans le Sénégal, ne touche que l'océan à l'ouest).

## Les pièges
- La **Gambie** est un pays ; le **fleuve Gambie** est un fleuve.
- La région de Dakar est la **plus peuplée**, mais la **plus petite**.
- Alizé maritime et mousson viennent de l'océan, mais seule la **mousson** apporte les pluies.
- **Continent** (l'Afrique) ≠ **pays** (le Sénégal).
`,
      exercices: [
        { type: "saisie", question: "Combien de régions compte le Sénégal ?", reponses: ["14", "quatorze", "14 régions"], explication: "14 régions ; les plus récentes (2008) sont Kaffrine, Kédougou et Sédhiou." },
        { type: "qcm", question: "Quel pays est presque entièrement entouré par le Sénégal ?", choix: ["la Guinée-Bissau", "la Mauritanie", "le Mali", "la Gambie"], reponse: 3, explication: "La Gambie est enclavée dans le Sénégal ; elle ne touche que l'océan à l'ouest." },
        { type: "qcm", question: "Quel vent chaud et sec, plein de poussière, vient du Sahara ?", choix: ["l'harmattan", "la mousson", "l'alizé maritime", "le vent de mer"], reponse: 0, explication: "L'harmattan souffle du nord-est pendant la saison sèche. La mousson apporte les pluies." },
        { type: "vf", question: "Il pleut plus au nord du Sénégal qu'en Casamance.", reponse: false, explication: "Faux : il pleut plus au sud. Le nord est sahélien, la Casamance est la zone la plus humide." },
        { type: "saisie", question: "Comment appelle-t-on le départ des habitants de la campagne vers la ville ?", reponses: ["exode rural", "l'exode rural"], explication: "C'est l'exode rural. Il crée des problèmes en ville : logement, embouteillages, déchets." },
        { type: "qcm", question: "Où cultive-t-on surtout les légumes (oignons, choux, tomates) ?", choix: ["dans le Ferlo", "dans les Niayes", "à Kédougou", "dans le bassin arachidier"], reponse: 1, explication: "Les Niayes, cuvettes humides entre Dakar et Saint-Louis. Le Ferlo est une zone d'élevage." },
        { type: "vf", question: "Une culture de rente est une culture que l'on vend pour gagner de l'argent.", reponse: true, explication: "Vrai : l'arachide est une culture de rente ; le mil est une culture vivrière." },
        { type: "qcm", question: "Quelle organisation regroupe les pays qui utilisent le franc CFA ?", choix: ["l'OMVS", "l'Union africaine", "l'UEMOA", "la CEDEAO"], reponse: 2, explication: "L'UEMOA : Union économique et monétaire ouest-africaine." },
        { type: "saisie", question: "Sur une carte à l'échelle 1/1 000 000 (1 cm = 10 km), deux villes sont à 5 cm. Quelle est la distance réelle, en km ?", reponses: ["50", "50 km"], explication: "5 × 10 = 50 km." },
        { type: "qcm", question: "Quel lac fournit une grande partie de l'eau potable de Dakar ?", choix: ["le lac Rose", "le lac de Guiers", "le lac de Manantali", "le lac Retba"], reponse: 1, explication: "Le lac de Guiers, près du fleuve Sénégal. Le lac Rose (lac Retba) est connu pour son sel." },
      ],
    },
    {
      id: "fiche-sciences",
      titre: "Fiche de révision : sciences (IST)",
      theme: "Fiches de révision CFEE",
      cours: `
## Le corps humain en schémas
~~~
DIGESTION
bouche (dents, salive)
  -> œsophage
  -> estomac (bouillie)
  -> intestin grêle
     (nutriments -> sang)
  -> gros intestin
  -> anus (déchets)
aides : foie (bile), pancréas
~~~

~~~
RESPIRATION
nez -> trachée -> bronches
    -> 2 poumons
inspiration : entre l'oxygène
expiration : sort le gaz carbonique
~~~

~~~
CIRCULATION
cœur = pompe
artères : partent du cœur
veines : reviennent au cœur
capillaires : relient les deux
~~~

## Le sang et les dents
| Élément | Rôle |
|---|---|
| globules rouges | transportent l'oxygène |
| globules blancs | défendent contre les microbes |
| plaquettes | arrêtent le saignement |
| incisives / canines / molaires | couper / déchirer / broyer |

Enfant : **20** dents de lait ; adulte : **32** dents.

## Aliments et santé
- **Énergétiques** (riz, mil, huile) ; **bâtisseurs** (poisson, viande, œufs, niébé) ; **protecteurs** (fruits, légumes).
- **Paludisme** : parasite **plasmodium**, transmis par l'**anophèle femelle**. Moustiquaire imprégnée, plus d'eaux stagnantes, centre de santé si fièvre.
- **Diarrhée, choléra** : eau sale → eau potable, mains lavées au savon.
- **Bilharziose** : baignade dans des eaux douces stagnantes.
- **Vaccin** : protège **avant** la maladie (PEV, carnet de vaccination).

## Plantes et animaux
~~~
PLANTE VERTE (photosynthèse)
racines : prennent eau + sels
feuilles + lumière + gaz carbonique
  -> nourriture de la plante
  -> rejette de l'oxygène
~~~
- Germination : **eau + air + température convenable**.
- Fleur → fruit → graines ; **bouture** pour le manioc.
- Vertébrés : **mammifères** (poils), **oiseaux** (plumes), **reptiles** (écailles sèches), **amphibiens** (peau nue), **poissons** (branchies).
- **Vivipares** (mammifères) / **ovipares** (œufs).
- Chaîne alimentaire : herbe → gazelle → lion (« est mangé par »). Elle commence par une **plante**.

## Matière et énergie
| Passage | Nom |
|---|---|
| solide → liquide | fusion |
| liquide → solide | solidification |
| liquide → gaz | évaporation |
| gaz → liquide | condensation |

- L'eau gèle à **0 °C**, bout à **100 °C**.
- Cycle de l'eau : évaporation → nuages → pluie → ruissellement et infiltration.
- Eau potable : décanter, filtrer, puis **désinfecter** (bouillir, eau de Javel).

~~~
CIRCUIT FERMÉ
pile -> fil -> interrupteur fermé
     -> ampoule -> fil -> pile
=> l'ampoule brille
~~~
- **Conducteurs** : métaux. **Isolants** : plastique, caoutchouc, verre, bois sec.
- Prises (environ 220-230 V) : **danger de mort**.
- **Renouvelables** : soleil, vent, eau. **Non renouvelables** : pétrole, gaz, charbon.
- **Machines simples** : levier (point d'appui, charge, effort), poulie (puits), plan incliné (rampe), roue.

## Les pièges
- La **chauve-souris** et le **dauphin** sont des mammifères.
- Une eau **claire** n'est pas toujours **potable**.
- Le paludisme ne vient ni des mangues ni de la pluie : seulement de la piqûre de l'anophèle.
- Le foie aide à digérer, mais les aliments **ne passent pas** dedans.
- Levier : pousse sur le bout de la barre **loin** du point d'appui (l'effort) : il faut moins de force.
`,
      exercices: [
        { type: "qcm", question: "Où les nutriments passent-ils dans le sang ?", choix: ["dans l'intestin grêle", "dans l'estomac", "dans la bouche", "dans le foie"], reponse: 0, explication: "Dans l'intestin grêle : c'est l'absorption." },
        { type: "saisie", question: "Quel moustique transmet le paludisme ?", reponses: ["anophèle", "l'anophèle", "anophèle femelle", "l'anophèle femelle", "le moustique anophèle"], explication: "La femelle de l'anophèle, en piquant une personne malade puis une personne saine." },
        { type: "vf", question: "Les veines conduisent le sang du cœur vers les organes.", reponse: false, explication: "Faux : ce sont les artères qui partent du cœur ; les veines reviennent au cœur." },
        { type: "qcm", question: "À quel groupe appartient la chauve-souris ?", choix: ["les oiseaux", "les reptiles", "les mammifères", "les insectes"], reponse: 2, explication: "Elle vole, mais elle a des poils et allaite ses petits : c'est un mammifère." },
        { type: "saisie", question: "Comment s'appelle le passage de l'eau de l'état solide à l'état liquide ?", reponses: ["fusion", "la fusion"], explication: "La fusion : la glace fond. L'inverse est la solidification." },
        { type: "qcm", question: "De quoi une graine a-t-elle besoin pour germer ?", choix: ["de lumière seulement", "d'eau, d'air et d'une température convenable", "d'engrais et de lumière", "d'eau seulement"], reponse: 1, explication: "Eau + air + température convenable. La lumière sert ensuite à la plante pour grandir." },
        { type: "vf", question: "Le plastique est un isolant électrique.", reponse: true, explication: "Vrai : il ne laisse pas passer le courant. C'est pour cela qu'il entoure le cuivre des fils." },
        { type: "qcm", question: "Quelle source d'énergie est non renouvelable ?", choix: ["le soleil", "le vent", "l'eau des fleuves", "le pétrole"], reponse: 3, explication: "Le pétrole s'épuise. Le soleil, le vent et l'eau sont renouvelables." },
        { type: "qcm", question: "Quel aliment est un aliment bâtisseur ?", choix: ["le poisson", "le riz", "la mangue", "l'huile"], reponse: 0, explication: "Le poisson fait grandir (bâtisseur). Le riz et l'huile sont énergétiques, la mangue est protectrice." },
        { type: "saisie", question: "Un levier a trois éléments : la charge, l'effort et le point… ?", reponses: ["d'appui", "point d'appui", "le point d'appui", "appui"], explication: "Le point d'appui. Plus on pousse loin de lui (là où on fait l'effort), moins il faut de force." },
      ],
    },
  ],
};
