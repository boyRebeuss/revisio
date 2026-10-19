export default {
  chapitres: [
    {
      id: "bac-de-francais",
      titre: "Le bac de français : épreuves, programme et œuvres",
      theme: "Préparer le bac",
      cours: `
## Les deux épreuves anticipées (voie générale)
Tu passes le bac de français à la fin de la 1re. Il compte deux épreuves, chacune de **coefficient 5**.

| Épreuve | Durée | Contenu |
|---|---|---|
| **Écrit** | 4 heures | au choix : un **commentaire** de texte OU une **dissertation** sur une œuvre au programme |
| **Oral** | 20 minutes (après 30 minutes de préparation) | 1re partie (12 points) : lecture, **explication linéaire** d'un texte étudié en classe et **question de grammaire** ; 2e partie (8 points) : présentation d'une **œuvre choisie** et **entretien** avec l'examinateur |

>! **Attention** : la **contraction de texte** et l'essai sont réservés à la voie **technologique**. En voie générale, tu choisis entre commentaire et dissertation.

## Le programme : quatre objets d'étude
1. **La poésie du XIXe au XXIe siècle**
2. **La littérature d'idées du XVIe au XVIIIe siècle**
3. **Le roman et le récit du Moyen Âge au XXIe siècle**
4. **Le théâtre du XVIIe au XXIe siècle**

Pour chaque objet d'étude, le programme national propose plusieurs **œuvres intégrales** (trois en voie générale), chacune associée à un **parcours** (un thème qui relie l'œuvre à d'autres textes) ; ton professeur en étudie une avec ta classe. Ce programme est **renouvelé régulièrement** : la liste officielle de ton année est publiée au Bulletin officiel ; **vérifie-la sur eduscol**. Pour l'année 2026-2027 (épreuves de juin 2027), les douze œuvres et leurs parcours sont présentés dans le dernier chapitre, « Les œuvres au programme 2026-2027 ». Dans ce cours, les œuvres citées sont des **exemples classiques**, utiles quelle que soit l'année.

## Ce que l'on attend de toi
- **connaître** les œuvres étudiées en classe (intrigue, personnages, structure, enjeux) ;
- situer un texte dans son **mouvement** et son **siècle** ;
- maîtriser les **outils d'analyse** : versification, figures de style, registres, énonciation, argumentation, narration, dramaturgie ;
- **construire une problématique** et un raisonnement organisé ;
- **rédiger** une copie claire, correcte, avec des citations analysées ;
- à l'oral : **lire** de façon expressive, **expliquer**, **dialoguer**.

## Le récapitulatif pour l'oral
Ton professeur établit un **récapitulatif** (descriptif) des textes et œuvres étudiés pendant l'année. L'examinateur y choisit **le texte** que tu expliques. Tu dois donc préparer **tous** les textes de la liste : relire, revoir l'explication, s'entraîner à la lecture à voix haute.

>! **Ce que fixe le texte officiel** (note de service du 11 septembre 2026, BO spécial n° 4 du 17 septembre 2026, en vigueur dès l'année 2026-2027) :
>! - en voie générale, chaque objet d'étude compte **au moins quatre textes** sur lesquels tu peux être interrogé : au moins **deux extraits de l'œuvre** et au moins **un extrait du parcours** ;
>! - si le texte est long, l'examinateur choisit un passage d'**une vingtaine de lignes** à expliquer ;
>! - la question de grammaire porte sur ce passage : **analyse syntaxique** d'une courte phrase ou d'une partie de phrase ;
>! - pour la 2e partie, tu choisis une œuvre **étudiée en classe** ou proposée par ton professeur au titre des **lectures cursives obligatoires** ; ton exemplaire peut porter des passages surlignés et quelques annotations non rédigées (pour la 1re partie, les textes doivent être vierges de toute annotation).

## La maîtrise de la langue
À l'écrit, l'orthographe, la syntaxe, la précision du vocabulaire et la clarté de l'expression comptent dans la note : **une copie défaillante sur l'ensemble des aspects de la maîtrise de la langue ne peut pas avoir la moyenne**. Garde toujours 15 à 20 minutes pour te relire.

>! **Vocabulaire officiel** : les épreuves que tu passes en juin 2027 sont dites « anticipées » ; les textes officiels les rattachent à la **session 2028** du baccalauréat (celle de ton année de terminale). On parle pourtant couramment du « bac de français 2027 ».

## Planifier ses révisions
1. **Dès le début de l'année** : fiches par œuvre (résumé, personnages, thèmes, citations clés).
2. **Chaque semaine** : une méthode (une introduction de commentaire, un plan de dissertation).
3. **Les dernières semaines** : explications à voix haute en 10 minutes chrono, questions de grammaire sur tes textes, préparation de l'œuvre choisie pour l'entretien.

> **À retenir**
> Écrit (4 h, coeff. 5) : commentaire OU dissertation. Pas de contraction de texte en voie générale.
> Oral (20 min + 30 min de préparation, coeff. 5) : explication linéaire + grammaire (12 pts), puis œuvre choisie + entretien (8 pts).
> Quatre objets d'étude ; les œuvres au programme changent : vérifie la liste officielle sur eduscol.
> Récapitulatif (voie générale) : au moins 4 textes par objet d'étude (2 extraits de l'œuvre, 1 du parcours, au minimum).
`,
      exercices: [
        { type: "qcm", question: "En voie générale, quels exercices sont proposés à l'écrit du bac de français ?", choix: ["La contraction de texte et l'essai", "Le commentaire ou la dissertation", "Le commentaire et la contraction", "La dissertation uniquement"], reponse: 1, explication: "En voie générale, l'élève choisit entre un **commentaire** et une **dissertation**. La contraction de texte suivie d'un essai est propre à la voie technologique." },
        { type: "saisie", question: "Combien de temps dure l'épreuve écrite du bac de français ? (en heures, chiffre)", reponses: ["4", "4h", "4 h", "quatre", "4 heures", "quatre heures"], explication: "L'écrit dure **4 heures**." },
        { type: "vf", question: "À l'oral, la question de grammaire porte sur un passage du texte que tu expliques.", reponse: true, explication: "La question de grammaire fait partie de la première partie de l'oral et porte sur une phrase ou un court passage du texte expliqué." },
        { type: "qcm", question: "Sur combien de points est notée la seconde partie de l'oral (œuvre choisie et entretien) ?", choix: ["12 points", "10 points", "8 points", "4 points"], reponse: 2, explication: "1re partie (lecture, explication, grammaire) : 12 points ; 2e partie (présentation de l'œuvre choisie + entretien) : 8 points." },
        { type: "qcm", question: "Lequel de ces objets d'étude n'appartient PAS au programme de 1re ?", choix: ["Le théâtre du XVIIe au XXIe siècle", "La poésie du XIXe au XXIe siècle", "La littérature d'idées du XVIe au XVIIIe siècle", "Le cinéma du XXe siècle"], reponse: 3, explication: "Les quatre objets d'étude sont : poésie (XIXe-XXIe), littérature d'idées (XVIe-XVIIIe), roman et récit (Moyen Âge-XXIe), théâtre (XVIIe-XXIe)." },
        { type: "vf", question: "La liste des œuvres au programme du bac de français est la même depuis la réforme et ne change jamais.", reponse: false, explication: "Le programme d'œuvres est renouvelé régulièrement par publication au Bulletin officiel. Il faut vérifier la liste de son année sur eduscol." },
        { type: "redaction", question: "**Question de préparation (type entretien)** : Explique en une quinzaine de lignes comment tu organiserais tes révisions pour le bac de français sur les deux derniers mois, en tenant compte de l'écrit et de l'oral.", corrige: `**Réponse attendue : un plan concret et équilibré.**

**1. Faire le point (semaine 1)**
Je reprends le récapitulatif des textes de l'oral et la liste des œuvres au programme. Je repère les textes que je maîtrise mal et je vérifie que j'ai une fiche par œuvre (résumé, personnages, thèmes, citations, lien avec le parcours).

**2. Alterner écrit et oral (semaines 2 à 6)**
- **Oral** : chaque jour, une explication linéaire à voix haute en 10 minutes chronométrées, avec la lecture expressive ; une question de grammaire sur ce texte (négation, interrogation, subordonnées).
- **Écrit** : chaque semaine, un sujet en temps limité — une semaine un commentaire, la suivante une dissertation (au moins l'introduction et le plan détaillé) ; je relis les corrigés de mes devoirs.
- Je révise les outils : figures de style, versification, registres, mouvements littéraires.

**3. Préparer l'entretien**
Je choisis l'œuvre que je présenterai, je prépare les raisons de mon choix, deux ou trois passages marquants et des liens avec d'autres œuvres.

**4. Dernière semaine**
Révision légère : relecture des fiches, une dernière simulation d'oral, repos et sommeil réguliers.` },
        { type: "qcm", question: "En voie générale, combien de textes chaque objet d'étude du récapitulatif doit-il compter au minimum (note de service de septembre 2026) ?", choix: ["Deux", "Quatre", "Six", "Dix"], reponse: 1, explication: "Au moins **quatre** textes par objet d'étude : au minimum deux extraits de l'œuvre et un extrait du parcours. Ton professeur peut en prévoir davantage : il faut alors tous les préparer." },
        { type: "vf", question: "Une copie très faible en orthographe et en syntaxe peut quand même obtenir la moyenne si les idées sont bonnes.", reponse: false, explication: "Le texte officiel est clair : une copie défaillante sur l'ensemble des aspects de la maîtrise de la langue **ne peut pas avoir la moyenne**. Le fond et la forme ne se séparent pas." }
      ]
    },
    {
      id: "poesie-xixe-xxie",
      titre: "La poésie du XIXe au XXIe siècle : mouvements et auteurs",
      theme: "Objet d'étude : la poésie",
      cours: `
## Les grands enjeux
Du XIXe au XXIe siècle, la poésie se **libère** progressivement des règles classiques (alexandrin, rime, strophes fixes) et s'interroge sur sa **fonction** : exprimer le moi ? chercher la beauté pure ? changer le monde ? révéler le mystère des choses ?

## Le romantisme (1820-1850)
- **Idées** : primauté des **sentiments** et du **moi**, nature confidente, fuite du temps, mélancolie (le « mal du siècle »), mission du poète-**mage** qui guide le peuple.
- **Auteurs** : Lamartine, *Méditations poétiques* (1820 ; « Le Lac » : « Ô temps ! suspends ton vol ») ; Victor Hugo, *Les Contemplations* (1856, poèmes sur la mort de sa fille Léopoldine, « Demain, dès l'aube ») ; Musset, *Les Nuits* ; Vigny, *Les Destinées*.
- **Registre** dominant : **lyrique** (et élégiaque).

## Le Parnasse (vers 1850-1870)
- **Idées** : réaction contre l'épanchement romantique ; **l'art pour l'art** : la poésie n'a pas à être utile, elle cherche la **beauté formelle**, la perfection du vers, l'impersonnalité.
- **Auteurs** : Théophile Gautier, *Émaux et Camées* (1852) ; Leconte de Lisle, *Poèmes antiques* ; José-Maria de Heredia, *Les Trophées* (1893, sonnets).

## Baudelaire, entre deux mondes
*Les Fleurs du mal* (1857, procès pour immoralité) : tension entre le **spleen** (ennui, angoisse) et l'**idéal** ; recherche de la beauté dans le laid et la ville moderne (« Tu m'as donné ta boue et j'en ai fait de l'or ») ; théorie des **correspondances** entre les sens et entre le monde visible et un monde spirituel. *Le Spleen de Paris* ou *Petits poèmes en prose* (1869, posthume) : le **poème en prose** (inventé par Aloysius Bertrand, *Gaspard de la nuit*, 1842).

## Le symbolisme (fin XIXe)
- **Idées** : suggérer plutôt que dire ; la poésie déchiffre les **symboles** du monde ; **musicalité** du vers ; le poète « voyant ».
- **Auteurs** : Verlaine, *Poèmes saturniens* (1866), *Romances sans paroles* (1874), « Art poétique » (« De la musique avant toute chose », éloge du vers impair) ; Rimbaud, *Poésies* (1870-1871), *Une saison en enfer* (1873), *Illuminations* ; lettre « du Voyant » (1871) : « Je est un autre » ; Mallarmé, poésie hermétique.

## Le XXe siècle : libertés nouvelles
- **Apollinaire**, *Alcools* (1913, suppression de la ponctuation, « Le Pont Mirabeau ») ; *Calligrammes* (1918, poèmes-dessins).
- **Le surréalisme** (Manifeste d'André Breton, 1924) : libérer l'inconscient par l'**écriture automatique**, le rêve, les images surprenantes. Paul Éluard, *Capitale de la douleur* (1926) ; Robert Desnos ; Louis Aragon.
- **La poésie engagée** de la Résistance : Éluard, « Liberté » (1942) ; Aragon, *La Diane française* ; René Char, *Feuillets d'Hypnos*.
- **La négritude** : Aimé Césaire, *Cahier d'un retour au pays natal* (1939) ; Léopold Sédar Senghor.
- **La poésie des choses et du quotidien** : Francis Ponge, *Le Parti pris des choses* (1942) ; Jacques Prévert, *Paroles* (1946).
- Après 1950 : Yves Bonnefoy, Philippe Jaccottet, Andrée Chedid ; au XXIe siècle, poésie sonore, slam, poésie numérique.

## Tableau de synthèse
| Mouvement | Période | Mot-clé | Repère |
|---|---|---|---|
| Romantisme | 1820-1850 | le moi, les sentiments | Lamartine, Hugo |
| Parnasse | 1850-1870 | l'art pour l'art | Gautier, Heredia |
| Baudelaire | 1857 | spleen et idéal, modernité | *Les Fleurs du mal* |
| Symbolisme | 1870-1900 | suggestion, musique | Verlaine, Rimbaud, Mallarmé |
| Surréalisme | 1920-1940 | inconscient, rêve | Breton, Éluard |
| Engagement | 1940-1945 | Résistance | Éluard, Aragon, Char |

> **À retenir**
> La poésie du XIXe au XXIe siècle passe de l'expression lyrique du moi (romantisme) à la recherche formelle (Parnasse), à la suggestion (symbolisme), puis à la libération totale (vers libre, surréalisme).
> Baudelaire est la charnière : spleen et idéal, modernité, poème en prose.
> Pour commenter un poème, relie toujours la forme (vers, sons, images) au sens.
`,
      exercices: [
        { type: "qcm", question: "Quel mouvement défend la doctrine de « l'art pour l'art » ?", choix: ["Le Parnasse", "Le romantisme", "Le surréalisme", "La négritude"], reponse: 0, explication: "Le Parnasse (Gautier, Leconte de Lisle, Heredia) refuse que la poésie soit utile ou sentimentale : seule compte la beauté formelle." },
        { type: "saisie", question: "Quel recueil Baudelaire publie-t-il en 1857 ?", reponses: ["Les Fleurs du mal", "Fleurs du mal"], explication: "*Les Fleurs du mal* (1857) vaut à Baudelaire un procès pour outrage à la morale publique ; six poèmes sont condamnés." },
        { type: "qcm", question: "Qui a écrit « Je est un autre » ?", choix: ["Verlaine", "Hugo", "Rimbaud", "Apollinaire"], reponse: 2, explication: "Rimbaud, dans la lettre « du Voyant » (1871), affirme que le poète doit se faire « voyant » par un « dérèglement de tous les sens »." },
        { type: "vf", question: "*Alcools* d'Apollinaire (1913) se caractérise notamment par la suppression de la ponctuation.", reponse: true, explication: "Apollinaire supprime la ponctuation de son recueil sur les épreuves : le rythme du vers suffit à guider la lecture." },
        { type: "qcm", question: "L'écriture automatique est une technique :", choix: ["du Parnasse", "du symbolisme", "du romantisme", "du surréalisme"], reponse: 3, explication: "Les surréalistes (Breton, Soupault, *Les Champs magnétiques*, 1920) écrivent sans contrôle de la raison pour libérer l'inconscient." },
        { type: "saisie", question: "Quel poète a écrit « Le Lac » (« Ô temps ! suspends ton vol ») dans les *Méditations poétiques* (1820) ?", reponses: ["Lamartine", "Alphonse de Lamartine"], explication: "**Lamartine** : poème romantique emblématique (fuite du temps, nature confidente, amour perdu)." },
        { type: "vf", question: "Le poème en prose a été inventé par les surréalistes au XXe siècle.", reponse: false, explication: "Le poème en prose apparaît au XIXe siècle avec Aloysius Bertrand (*Gaspard de la nuit*, 1842), et Baudelaire le développe dans *Le Spleen de Paris*." },
        { type: "qcm", question: "Quel auteur est associé au mouvement de la négritude ?", choix: ["Francis Ponge", "Aimé Césaire", "Paul Verlaine", "Théophile Gautier"], reponse: 1, explication: "Aimé Césaire (*Cahier d'un retour au pays natal*, 1939), avec Senghor et Damas, revendique l'identité et la culture noires." },
        { type: "redaction", question: "**Question de dissertation (plan détaillé)** : « La poésie doit-elle seulement exprimer les sentiments du poète ? » Propose une problématique et un plan en trois parties avec des exemples précis.", corrige: `**Analyse du sujet** : « seulement » invite à discuter une conception lyrique de la poésie (expression du moi) et à envisager d'autres fonctions.

**Problématique** : la poésie n'est-elle que l'expression des émotions intimes du poète, ou a-t-elle d'autres pouvoirs : chercher la beauté, révéler le monde, agir sur lui ?

**I. La poésie est d'abord l'expression privilégiée des sentiments**
1. Le lyrisme romantique : Lamartine, « Le Lac » ; Hugo, *Les Contemplations* (deuil de Léopoldine, « Demain, dès l'aube »).
2. Le poète transforme une émotion singulière en émotion universelle : le lecteur s'y reconnaît (« Ah ! insensé, qui crois que je ne suis pas toi ! », préface des *Contemplations*).

**II. Mais la poésie est aussi un travail de la forme et de la langue**
1. Le Parnasse : l'art pour l'art, l'impersonnalité (Gautier, Heredia).
2. Baudelaire : transformer la « boue » en « or », la beauté naît du travail poétique ; Ponge, *Le Parti pris des choses* : décrire les objets plutôt que soi.

**III. Enfin, la poésie peut chercher à révéler et transformer le monde**
1. Le poète voyant et le surréalisme : explorer l'inconscient, changer la vie (Rimbaud, Breton).
2. La poésie engagée : Éluard, « Liberté » (1942), parachuté au-dessus de la France occupée ; Césaire et la négritude.

**Conclusion** : l'expression des sentiments est une fonction majeure mais non exclusive ; la poésie est aussi recherche de beauté et action sur le monde — et ces fonctions se mêlent souvent (le lyrisme engagé d'Aragon).` }
      ]
    },
    {
      id: "versification",
      titre: "La versification : mètre, rimes, strophes, formes poétiques",
      theme: "Objet d'étude : la poésie",
      cours: `
## Compter les syllabes
Un vers se mesure en **syllabes prononcées** (on parle de **mètre**). Règles du **e muet** (ou e caduc) :
- il **se prononce** et compte devant une **consonne** : « Je / vis / cet / te / fem / me » ;
- il **s'élide** (ne compte pas) devant une **voyelle** ou un h muet : « Ell(e) a / vait » ;
- il ne compte **jamais en fin de vers**.

>! **Exemple** : « Demain, dès l'aube, à l'heure où blanchit la campagne » (Hugo)
>! De / main / dès / l'au / b(e) à / l'heu // r(e) où / blan / chit / la / cam / pagn(e) → 12 syllabes : un alexandrin. Le e de « aube » et celui de « heure » s'élident devant voyelle ; le e final de « campagne » ne compte pas.

**Diérèse** : on prononce en deux syllabes deux voyelles qui se suivent (« pas-si-on » au lieu de « pas-sion ») ; elle met souvent en valeur le mot. **Synérèse** : l'inverse (on les prononce en une syllabe).

## Les principaux vers
| Nom | Syllabes | Remarque |
|---|---|---|
| **alexandrin** | 12 | vers noble ; césure à l'hémistiche (6/6) |
| **décasyllabe** | 10 | vers des chansons de geste (souvent 4/6) |
| **octosyllabe** | 8 | vers des romans médiévaux, des chansons |
| heptasyllabe, pentasyllabe | 7, 5 | vers **impairs**, prisés par Verlaine |

La **césure** est une pause à l'intérieur du vers ; elle partage l'alexandrin en deux **hémistiches**. Le rythme peut être binaire (6/6) ou ternaire (4/4/4 : le « trimètre romantique »).

## Les rimes
**Disposition** :
- **suivies** (ou plates) : AABB ;
- **croisées** : ABAB ;
- **embrassées** : ABBA.

**Qualité (richesse)** : rime **pauvre** (1 son commun : ami / pari → [i]) ; **suffisante** (2 sons : bonté / beauté → [t] + [é]) ; **riche** (3 sons ou plus : charmant / dormant → [r] + [m] + [an]).

**Genre** : rime **féminine** si le vers se termine par un e muet (« plaine / haleine ») ; **masculine** sinon. La règle classique impose leur **alternance**.

## Discordances entre la phrase et le vers
- **Enjambement** : la phrase déborde largement sur le vers suivant.
- **Rejet** : un élément bref de la phrase est rejeté au début du vers suivant (mis en valeur).
- **Contre-rejet** : un élément bref commence la phrase à la fin d'un vers, la suite étant au vers suivant.

>! **Exemple de rejet** : « Serait-ce déjà lui ? C'est bien à l'escalier / Dérobé. » (Hugo, *Hernani*, 1830). L'adjectif « Dérobé », rejeté seul au début du vers suivant, est mis en relief : ce rejet audacieux a fait scandale lors de la « bataille d'*Hernani* ».

## Strophes et formes fixes
- Strophes : **distique** (2 vers), **tercet** (3), **quatrain** (4), **quintil** (5), **sizain** (6), **huitain**, **dizain**.
- **Le sonnet** (venu d'Italie, Pétrarque ; introduit en France au XVIe s. par Marot, Du Bellay, Ronsard) : **14 vers**, **deux quatrains** et **deux tercets** ; schéma fréquent ABBA ABBA CCD EED (sonnet « français ») ou CCD EDE ; le dernier vers, la **chute**, est souvent frappant.
- **La ballade**, **le rondeau** (formes médiévales, Villon, Charles d'Orléans).

## Les libertés modernes
- **Vers libre** : vers sans mètre régulier ni rime obligatoire (Apollinaire, Éluard, Prévert).
- **Verset** : long vers proche du paragraphe (Claudel, Saint-John Perse, Césaire).
- **Poème en prose** : poème sans vers (Bertrand, Baudelaire, Rimbaud, Ponge).
- **Calligramme** : le texte dessine son objet (Apollinaire).

## Les sons
- **Allitération** : répétition d'une **consonne** ; **assonance** : répétition d'une **voyelle**.
- **Harmonie imitative** : les sons imitent ce qui est évoqué.

> **À retenir**
> E muet : compte devant consonne, s'élide devant voyelle, jamais en fin de vers.
> Alexandrin = 12 syllabes, césure à l'hémistiche. Sonnet = 14 vers (2 quatrains + 2 tercets).
> Rimes suivies AABB, croisées ABAB, embrassées ABBA ; pauvres, suffisantes, riches.
> Toujours relier un fait de versification à un **effet de sens**.
`,
      exercices: [
        { type: "saisie", question: "Combien de syllabes compte ce vers de Baudelaire : « Je suis belle, ô mortels ! comme un rêve de pierre » ? (en chiffres)", reponses: ["12", "douze", "douze syllabes"], explication: "Je-suis-bel-l(e) ô-mor-tels-com-m(e) un-rê-ve-de-pier-r(e) → 12 syllabes. Les e de « belle » et « comme » s'élident devant voyelle ; « rêve » se prononce devant consonne ; le e final de « pierre » ne compte pas." },
        { type: "qcm", question: "Un schéma de rimes ABAB est un schéma de rimes :", choix: ["suivies", "embrassées", "croisées", "plates"], reponse: 2, explication: "ABAB = rimes croisées. AABB = suivies (plates). ABBA = embrassées." },
        { type: "vf", question: "Un sonnet est composé de deux quatrains suivis de deux tercets.", reponse: true, explication: "Le sonnet compte 14 vers : 4 + 4 + 3 + 3." },
        { type: "qcm", question: "Comment appelle-t-on la prononciation en deux syllabes de deux voyelles habituellement prononcées ensemble (« li-on », « nati-on ») ?", choix: ["La synérèse", "La diérèse", "L'élision", "La césure"], reponse: 1, explication: "La diérèse dissocie les voyelles et allonge le mot, souvent pour le mettre en valeur. La synérèse est le phénomène inverse." },
        { type: "qcm", question: "Les rimes « soleil / pareil » sont :", choix: ["riches", "pauvres", "féminines", "suffisantes"], reponse: 3, explication: "On entend [ɛj] : la voyelle [ɛ] + la consonne [j] → deux sons communs = rime suffisante. Elles sont masculines (pas de e muet final)." },
        { type: "saisie", question: "Comment appelle-t-on chacune des deux moitiés d'un alexandrin séparées par la césure ?", reponses: ["hémistiche", "hémistiches", "hemistiche", "hemistiches"], explication: "Chaque moitié de 6 syllabes est un **hémistiche**." },
        { type: "vf", question: "Le e muet en fin de vers compte toujours comme une syllabe.", reponse: false, explication: "En fin de vers, le e muet ne se compte jamais ; il rend seulement la rime féminine." },
        { type: "qcm", question: "Un élément bref placé au début du vers suivant et appartenant à la phrase du vers précédent s'appelle :", choix: ["un rejet", "un contre-rejet", "une césure", "une chute"], reponse: 0, explication: "Le rejet met en valeur ce mot détaché en tête de vers. Le contre-rejet est l'inverse (élément bref en fin de vers qui annonce la phrase suivante)." },
        { type: "redaction", question: "**Exercice d'analyse (type commentaire)** : Analyse la versification de cette strophe de Verlaine et montre ce qu'elle apporte au sens : « Les sanglots longs / Des violons / De l'automne / Blessent mon cœur / D'une langueur / Monotone. » (« Chanson d'automne », *Poèmes saturniens*, 1866).", corrige: `**Relevé formel**
- Strophe de **six vers** (sizain) très courts : 4 / 4 / 3 / 4 / 4 / 3 syllabes (Les-san-glots-longs / Des-vi-o-lons (diérèse sur « vi-o-lons ») / De-l'au-tom-n(e) / Bles-sent-mon-cœur / D'u-ne-lan-gueur / Mo-no-to-n(e)).
- Rimes **AAB CCB** : longs / violons, cœur / langueur (suivies), automne / monotone (qui encadrent la structure).
- Sons : **assonances** des voyelles nasales [on] et [an] (sanglots, longs, violons, langueur) et du son [o] (sanglots, automne, monotone) ; allitération en [l] (les, longs, violons, l'automne, langueur).

**Interprétation**
- La brièveté des vers et leur mètre court et impair créent une musique fragile, comme une chanson : c'est l'idéal de Verlaine (« De la musique avant toute chose »).
- Les sons nasals et longs ([on], [an]) imitent la plainte prolongée des violons et la lenteur de la mélancolie : **harmonie imitative**.
- La diérèse « vi-o-lons » étire le mot et prolonge la plainte.
- La **personnification** des violons qui « sanglotent » et le verbe « blessent » montrent que la nature automnale fait écho à la tristesse du poète : c'est un **paysage état d'âme**.
- Le mot « monotone », isolé en fin de strophe et à la rime, résume l'ennui : la forme rend sensible le spleen.

**Conclusion** : la versification n'est pas un ornement : elle fait entendre la mélancolie que le poème exprime.` }
      ]
    },
    {
      id: "litterature-idees",
      titre: "La littérature d'idées du XVIe au XVIIIe siècle",
      theme: "Objet d'étude : la littérature d'idées",
      cours: `
## Définition
La **littérature d'idées** regroupe les textes qui cherchent à **réfléchir**, **critiquer**, **convaincre** : essais, traités, discours, dialogues, lettres, fables, contes philosophiques, maximes. Du XVIe au XVIIIe siècle, elle accompagne de grands bouleversements : Renaissance, guerres de Religion, monarchie absolue, Lumières.

## XVIe siècle : l'humanisme
- **Idées** : confiance en l'homme et en sa capacité à se perfectionner par le savoir ; retour aux textes antiques (grec, latin, hébreu) ; esprit critique ; éducation complète ; tolérance face aux guerres de Religion.
- **Auteurs et œuvres** :
  - **Érasme**, *Éloge de la folie* (1511), satire des institutions ;
  - **Rabelais**, *Pantagruel* (1532), *Gargantua* (1534) : géants comiques, critique de l'éducation scolastique ; lettre de Gargantua à Pantagruel (programme d'éducation humaniste) ; l'abbaye de Thélème (« Fais ce que voudras ») ;
  - **Montaigne**, *Essais* (1580-1595) : « Je suis moi-même la matière de mon livre » ; « Des cannibales » (relativisme culturel : « chacun appelle barbarie ce qui n'est pas de son usage ») ; « Que sais-je ? » ;
  - **La Boétie**, *Discours de la servitude volontaire* (vers 1548).

## XVIIe siècle : le classicisme et les moralistes
- **Idées** : ordre, raison, mesure ; idéal de l'**honnête homme** ; peinture des passions et des mœurs ; souci de **plaire et instruire**.
- **Auteurs et œuvres** :
  - **La Fontaine**, *Fables* (1668-1694) : l'**apologue** (récit + morale) ; « La raison du plus fort est toujours la meilleure » (« Le Loup et l'Agneau ») ;
  - **La Rochefoucauld**, *Maximes* (1665) : « Nos vertus ne sont, le plus souvent, que des vices déguisés » ;
  - **La Bruyère**, *Les Caractères* (1688) : portraits satiriques de la société ;
  - **Pascal**, *Pensées* (1670) : misère et grandeur de l'homme, « roseau pensant » ; le divertissement ;
  - **Descartes**, *Discours de la méthode* (1637) : « Je pense, donc je suis ».

## XVIIIe siècle : les Lumières
- **Idées** : combattre l'**obscurantisme**, le fanatisme, l'intolérance, l'esclavage, l'arbitraire ; défendre la **raison**, la **liberté**, le **bonheur**, le **progrès** ; diffuser le savoir.
- **Auteurs et œuvres** :
  - **Montesquieu**, *Lettres persanes* (1721, regard étranger sur la France), *De l'esprit des lois* (1748, séparation des pouvoirs ; ironie sur l'esclavage des nègres) ;
  - **Voltaire**, *Lettres philosophiques* (1734), *Zadig* (1747), *Candide* (1759, contre l'optimisme de Leibniz ; « il faut cultiver notre jardin » ; le nègre de Surinam), *Traité sur la tolérance* (1763, affaire Calas) ;
  - **Diderot** et **d'Alembert**, *l'Encyclopédie* (1751-1772) ; Diderot, *Supplément au Voyage de Bougainville* (écrit en 1772) ;
  - **Rousseau**, *Discours sur l'origine et les fondements de l'inégalité* (1755), *Du contrat social* (1762), *Émile ou De l'éducation* (1762) ;
  - **Olympe de Gouges**, *Déclaration des droits de la femme et de la citoyenne* (1791).

## Les formes de l'argumentation
| Argumentation directe | Argumentation indirecte |
|---|---|
| l'auteur expose sa thèse explicitement | l'idée passe par un récit, une fiction, qu'il faut interpréter |
| essai, traité, discours, lettre ouverte, article d'encyclopédie, pamphlet | **apologue** : fable, conte philosophique, utopie, parabole |
| ex. : Montaigne, *Essais* ; Voltaire, *Traité sur la tolérance* | ex. : La Fontaine, *Fables* ; Voltaire, *Candide* ; l'Eldorado |

>! **Pourquoi l'argumentation indirecte ?** Pour **plaire et instruire** (« placere et docere »), toucher un large public, et **échapper à la censure** : la fiction permet de critiquer le roi, l'Église ou la société sans les nommer.

> **À retenir**
> XVIe : humanisme (Rabelais, Montaigne) — l'homme, le savoir, la tolérance.
> XVIIe : moralistes classiques (La Fontaine, La Rochefoucauld, La Bruyère, Pascal) — peindre et corriger les mœurs.
> XVIIIe : Lumières (Montesquieu, Voltaire, Diderot, Rousseau) — la raison contre l'injustice.
> Argumentation directe (essai, traité) / indirecte (apologue : fable, conte philosophique).
`,
      exercices: [
        { type: "qcm", question: "Qui a écrit les *Essais* ?", choix: ["Rabelais", "Pascal", "Montaigne", "Voltaire"], reponse: 2, explication: "Montaigne publie les *Essais* de 1580 à 1588 (édition posthume en 1595). Il y prend son propre esprit comme objet d'étude." },
        { type: "saisie", question: "Dans quel conte philosophique de Voltaire (1759) trouve-t-on la formule « il faut cultiver notre jardin » ?", reponses: ["Candide", "Candide ou l'Optimisme", "Candide ou l'optimisme"], explication: "C'est la dernière phrase de *Candide ou l'Optimisme* : après avoir rejeté l'optimisme de Pangloss, Candide prône le travail concret et modeste." },
        { type: "vf", question: "Un apologue est un court récit dont on tire une leçon morale ou philosophique.", reponse: true, explication: "L'apologue (fable, conte philosophique, parabole) est une forme d'argumentation indirecte qui instruit en divertissant." },
        { type: "qcm", question: "Quel ouvrage est une œuvre collective dirigée par Diderot et d'Alembert ?", choix: ["*Les Caractères*", "*L'Encyclopédie*", "*Les Pensées*", "*Du contrat social*"], reponse: 1, explication: "*L'Encyclopédie ou Dictionnaire raisonné des sciences, des arts et des métiers* (1751-1772) diffuse le savoir et l'esprit critique des Lumières." },
        { type: "qcm", question: "À quel siècle appartient le mouvement humaniste en France ?", choix: ["XVIIIe", "XVIIe", "XIXe", "XVIe"], reponse: 3, explication: "L'humanisme se développe avec la Renaissance au XVIe siècle (Rabelais, Montaigne, Du Bellay)." },
        { type: "saisie", question: "Qui a rédigé la *Déclaration des droits de la femme et de la citoyenne* en 1791 ?", reponses: ["Olympe de Gouges", "de Gouges", "Gouges"], explication: "**Olympe de Gouges** répond à la Déclaration de 1789 en revendiquant l'égalité des droits entre femmes et hommes." },
        { type: "vf", question: "La Rochefoucauld est l'auteur des *Fables*.", reponse: false, explication: "Les *Fables* sont de La Fontaine. La Rochefoucauld est l'auteur des *Maximes* (1665)." },
        { type: "qcm", question: "Quel est un avantage de l'argumentation indirecte au XVIIIe siècle ?", choix: ["Contourner la censure en critiquant par la fiction", "Éviter toute forme de critique", "Rendre le texte plus difficile à lire", "Supprimer toute dimension morale"], reponse: 0, explication: "La fiction (conte, lettres d'étrangers fictifs) permet de dénoncer sans viser directement le pouvoir et de toucher un public plus large en plaisant." },
        { type: "redaction", question: "**Dissertation (plan détaillé, littérature d'idées)** : « Le détour par la fiction est-il plus efficace que l'argumentation directe pour convaincre ? » Rédige l'introduction complète et le plan détaillé.", corrige: `**Introduction**
*Amorce* : Au XVIIIe siècle, Voltaire publie aussi bien le *Traité sur la tolérance* (1763), argumentation directe née de l'affaire Calas, que *Candide* (1759), conte philosophique qui ridiculise l'optimisme et le fanatisme.
*Analyse du sujet* : le « détour par la fiction » désigne l'apologue (fable, conte, utopie) ; l'« argumentation directe » expose explicitement une thèse (essai, traité, discours). « Efficace » renvoie à la capacité de convaincre (raison) et de persuader (émotions).
*Problématique* : raconter une histoire permet-il mieux d'emporter l'adhésion du lecteur que d'énoncer et démontrer clairement une thèse ?
*Annonce du plan* : nous verrons d'abord les atouts du détour par la fiction, puis ses limites, avant de montrer que les deux formes se complètent.

**I. Le détour par la fiction séduit et marque les esprits**
1. Il plaît et instruit : La Fontaine, « Le Loup et l'Agneau » rend visible l'injustice du plus fort ; le plaisir du récit retient l'attention.
2. Il fait réfléchir le lecteur, qui tire lui-même la leçon : *Candide* et ses péripéties absurdes réfutent l'optimisme mieux qu'un exposé.
3. Il permet d'échapper à la censure : Montesquieu, *Lettres persanes*, critique la monarchie par le regard faussement naïf d'Usbek et Rica.

**II. Mais la fiction a ses limites**
1. Le sens peut être mal compris : l'ironie, l'implicite exigent un lecteur attentif (le chapitre « De l'esclavage des nègres » de Montesquieu a pu être mal lu).
2. Le plaisir du récit peut faire oublier la thèse.
3. L'argumentation directe est plus claire et rigoureuse : Montaigne, Rousseau (*Discours sur l'inégalité*), Olympe de Gouges énoncent des idées précises et démontrées.

**III. Les deux formes se complètent**
1. Beaucoup de textes mêlent récit et argumentation : Montaigne, « Des cannibales », appuie sa réflexion sur des récits de voyage ; le *Traité sur la tolérance* s'ouvre sur le récit de l'affaire Calas.
2. L'efficacité dépend du public et du contexte : le conte touche un large public, le traité convainc les lecteurs éclairés.

**Conclusion** : le détour par la fiction est redoutablement efficace pour persuader et contourner la censure, mais il gagne à être relayé par une argumentation directe ; Voltaire lui-même pratique les deux.` }
      ]
    },
    {
      id: "argumentation",
      titre: "Argumenter : thèse, arguments, raisonnements, connecteurs",
      theme: "Objet d'étude : la littérature d'idées",
      cours: `
## Les notions de base
- **Thème** : ce dont on parle (la tolérance).
- **Thèse** : la position défendue sur ce thème (« la tolérance est nécessaire à la paix civile »).
- **Thèse adverse / réfutée** : la position combattue.
- **Argument** : idée qui justifie la thèse.
- **Exemple** : fait précis qui illustre l'argument (il peut aussi avoir valeur d'argument).

## Convaincre, persuader, délibérer
| Visée | Moyen | Indices |
|---|---|---|
| **convaincre** | s'adresser à la **raison** | arguments logiques, connecteurs, exemples, démonstration |
| **persuader** | s'adresser aux **émotions** | apostrophes, exclamations, images, registre pathétique ou polémique |
| **délibérer** | peser le pour et le contre, souvent avec soi-même ou dans un dialogue | interrogations, alternatives (stances du *Cid*, dialogue d'idées) |

## Les types d'arguments
- **argument logique** (cause/conséquence) ;
- **argument d'autorité** (on cite une personne reconnue) ;
- **argument par l'exemple** ;
- **argument par analogie** (comparaison avec une situation semblable) ;
- **argument *ad hominem*** (attaque de la personne de l'adversaire) ;
- **argument par l'absurde** (on montre que la thèse adverse mène à une conséquence absurde).

## Les types de raisonnement
- **Déductif** : du général au particulier (« Tous les hommes sont mortels ; Socrate est un homme ; donc Socrate est mortel »).
- **Inductif** : du particulier (exemples) au général.
- **Concessif** : on accorde un point à l'adversaire pour mieux le contredire (« Certes..., mais... »).
- **Par l'absurde**.
- **Dialectique** : thèse, antithèse, synthèse.

## Les connecteurs logiques
| Relation | Connecteurs |
|---|---|
| addition | et, de plus, en outre, par ailleurs |
| cause | car, parce que, puisque, en effet, étant donné que |
| conséquence | donc, ainsi, c'est pourquoi, si bien que, par conséquent |
| opposition | mais, cependant, pourtant, toutefois, en revanche, néanmoins |
| concession | certes, bien que, quoique, même si |
| illustration | par exemple, ainsi, notamment |
| conclusion | enfin, en somme, finalement, bref |

## Les stratégies de l'argumentation
- **L'ironie** : dire le contraire de ce qu'on pense pour faire entendre le vrai sens (antiphrase) ; Montesquieu, « De l'esclavage des nègres » : « On ne peut se mettre dans l'esprit que Dieu, qui est un être très sage, ait mis une âme, surtout une âme bonne, dans un corps tout noir. » Ici l'auteur feint d'adopter les arguments des esclavagistes pour en montrer l'absurdité.
- **Le regard étranger / naïf** : un personnage découvre la société et en révèle l'absurdité (*Lettres persanes*, Candide, l'Ingénu).
- **La satire** : moquerie critique d'une personne, d'un groupe, d'une institution.
- **Le registre polémique** : attaque vive (questions rhétoriques, termes péjoratifs, hyperboles).

## L'énonciation dans l'argumentation
Repère : **qui parle** (je, nous), **à qui** (vous, apostrophes), les **modalisateurs** (peut-être, sans doute, il est certain que, adjectifs évaluatifs) qui indiquent le degré de certitude ou le jugement de l'auteur.

> **À retenir**
> Thèse, arguments, exemples : identifie toujours la thèse défendue et la thèse réfutée.
> Convaincre (raison) ≠ persuader (émotions) ≠ délibérer (peser).
> Raisonnements : déductif, inductif, concessif, par l'absurde, dialectique.
> L'ironie dit le contraire de ce qu'elle pense : repère les indices (exagérations, arguments absurdes, contradictions).
`,
      exercices: [
        { type: "qcm", question: "Persuader, c'est :", choix: ["s'adresser à la raison par des démonstrations", "peser le pour et le contre", "s'adresser aux émotions et aux sentiments", "exposer des faits sans prendre position"], reponse: 2, explication: "Convaincre fait appel à la raison ; persuader fait appel aux émotions. Délibérer, c'est examiner le pour et le contre." },
        { type: "saisie", question: "Comment appelle-t-on un raisonnement qui part d'exemples particuliers pour aboutir à une loi générale ?", reponses: ["inductif", "raisonnement inductif", "induction", "l'induction"], explication: "Le raisonnement **inductif** va du particulier au général ; le déductif fait l'inverse." },
        { type: "vf", question: "« Certes il est riche, mais il est malheureux » relève d'un raisonnement concessif.", reponse: true, explication: "On concède un point (« certes il est riche ») pour mieux affirmer le sien (« mais il est malheureux »)." },
        { type: "qcm", question: "Quel connecteur exprime la conséquence ?", choix: ["Par conséquent", "Pourtant", "Puisque", "Certes"], reponse: 0, explication: "« Par conséquent » introduit une conséquence. « Pourtant » = opposition, « puisque » = cause, « certes » = concession." },
        { type: "qcm", question: "Dans « De l'esclavage des nègres », Montesquieu feint de soutenir les esclavagistes pour mieux les ridiculiser. Ce procédé est :", choix: ["le lyrisme", "l'argument d'autorité", "l'éloge", "l'ironie"], reponse: 3, explication: "Montesquieu use de l'**ironie** : il prête aux esclavagistes des arguments absurdes et racistes pour en montrer l'inanité." },
        { type: "saisie", question: "Comment appelle-t-on un argument qui s'appuie sur l'opinion d'une personne reconnue ? (argument d'...)", reponses: ["argument d'autorité", "autorité", "d'autorité", "argument d'autorite", "autorite", "d'autorite"], explication: "L'**argument d'autorité** s'appuie sur le prestige d'un savant, d'un écrivain, d'un texte reconnu." },
        { type: "vf", question: "Un modalisateur est un mot qui indique le degré de certitude ou le jugement de l'énonciateur.", reponse: true, explication: "Exemples : « sans doute », « peut-être », « il est évident que », des adjectifs évaluatifs (« scandaleux »), le conditionnel." },
        { type: "qcm", question: "Un argument *ad hominem* consiste à :", choix: ["citer un expert", "attaquer la personne de l'adversaire plutôt que ses idées", "donner un exemple chiffré", "comparer deux situations"], reponse: 1, explication: "L'argument ad hominem (« contre l'homme ») discrédite l'adversaire lui-même ; c'est un procédé polémique, souvent fallacieux." },
        { type: "redaction", question: "**Exercice d'analyse (type commentaire)** : Analyse la stratégie argumentative de cette maxime de La Rochefoucauld : « Nous avons tous assez de force pour supporter les maux d'autrui. » Explique la forme, la thèse implicite et l'effet sur le lecteur.", corrige: `**Forme**
- Une **maxime** : phrase brève, au **présent de vérité générale**, qui énonce une vérité universelle.
- Le pronom « **nous** » et le déterminant « **tous** » incluent l'auteur et le lecteur : personne n'échappe à la critique.

**Stratégie : l'ironie et la chute**
- La phrase commence comme un éloge : « assez de force » suggère le courage, la vertu.
- Mais le complément « **les maux d'autrui** » renverse le sens : ce n'est pas notre propre souffrance que nous supportons, mais celle des autres. La « force » n'est donc qu'**indifférence** : c'est une **antiphrase** ironique.
- L'effet de chute en fin de phrase surprend et fait sourire.

**Thèse implicite**
L'homme est **égoïste** : sa compassion est faible, il se résigne facilement au malheur des autres. On retrouve la vision pessimiste des moralistes du XVIIe siècle (« Nos vertus ne sont, le plus souvent, que des vices déguisés »).

**Effet sur le lecteur**
La brièveté rend la maxime mémorable ; le « nous » oblige le lecteur à s'examiner lui-même. La Rochefoucauld ne démontre pas : il **frappe** l'esprit et invite à réfléchir sur l'amour-propre. C'est une argumentation par la formule, qui plaît et instruit à la fois.` }
      ]
    },
    {
      id: "roman-recit",
      titre: "Le roman et le récit du Moyen Âge au XXIe siècle",
      theme: "Objet d'étude : le roman et le récit",
      cours: `
## Une histoire du roman
Le mot **roman** désigne d'abord, au Moyen Âge, un texte écrit en **langue romane** (le français ancien) et non en latin. Le genre, longtemps jugé inférieur, devient au XIXe siècle le genre dominant.

| Époque | Tendances | Repères |
|---|---|---|
| **Moyen Âge** | romans de chevalerie en vers, merveilleux, quête, amour courtois | Chrétien de Troyes, *Lancelot ou le Chevalier de la charrette*, *Yvain*, *Perceval* (XIIe s.) ; *Tristan et Iseut* |
| **XVIe** | récit humaniste et comique | Rabelais, *Gargantua* (1534) |
| **XVIIe** | roman précieux, roman comique, **roman d'analyse** (psychologie, passion contre devoir) | Mme de La Fayette, *La Princesse de Clèves* (1678) |
| **XVIIIe** | roman **épistolaire**, roman-mémoires, roman libertin, conte philosophique | Prévost, *Manon Lescaut* (1731) ; Rousseau, *La Nouvelle Héloïse* (1761) ; Laclos, *Les Liaisons dangereuses* (1782) |
| **XIXe : romantisme** | héros en marge, histoire, grandeur | Hugo, *Notre-Dame de Paris* (1831), *Les Misérables* (1862) |
| **XIXe : réalisme** | représenter fidèlement la société, ascension sociale, argent | Balzac, *La Comédie humaine* (*Le Père Goriot*, 1835) ; Stendhal, *Le Rouge et le Noir* (1830) ; Flaubert, *Madame Bovary* (1857) |
| **XIXe : naturalisme** | méthode quasi scientifique, hérédité et milieu, classes populaires | Zola, *Les Rougon-Macquart* (20 romans, 1871-1893 : *L'Assommoir*, 1877 ; *Germinal*, 1885) ; Maupassant, *Une vie* (1883), *Bel-Ami* (1885) |
| **XXe** | crise du personnage et du récit, introspection, absurde, engagement | Proust, *À la recherche du temps perdu* (1913-1927) ; Céline, *Voyage au bout de la nuit* (1932) ; Camus, *L'Étranger* (1942) ; Yourcenar, *Mémoires d'Hadrien* (1951) |
| **Nouveau Roman** (années 1950-1960) | refus de l'intrigue et du personnage traditionnels | Robbe-Grillet, Nathalie Sarraute, Michel Butor (*La Modification*, 1957), Claude Simon |
| **XXIe** | autofiction, récit de filiation, retour du romanesque | Annie Ernaux, Patrick Modiano, Marie NDiaye... |

## Narrateur et point de vue
**Le narrateur** (celui qui raconte) n'est pas l'auteur (celui qui écrit).
- Narrateur **personnage** (récit à la 1re personne) ou **extérieur** à l'histoire (3e personne).

**La focalisation** (le point de vue) :
| Focalisation | Le lecteur sait... | Indices |
|---|---|---|
| **zéro (omnisciente)** | tout : pensées de tous, passé, avenir | narrateur « dieu », commentaires, prolepses (Balzac) |
| **interne** | ce que perçoit et pense un personnage | verbes de perception, pensées, vision limitée (Flaubert, Stendhal) |
| **externe** | seulement ce qu'une caméra verrait | aucune pensée, description objective (début de certains romans, Hemingway, Camus) |

## Le temps du récit
- **Ordre** : récit chronologique, **analepse** (retour en arrière, flash-back), **prolepse** (anticipation).
- **Vitesse** (rythme) : **scène** (temps du récit ≈ temps de l'histoire, dialogue), **sommaire** (résumé), **ellipse** (on saute une période), **pause** (description, l'histoire s'arrête).

## Le discours rapporté
- **Direct** : paroles citées telles quelles, guillemets, tirets : Il dit : « Je partirai demain. »
- **Indirect** : paroles intégrées dans une subordonnée, transposition des temps et personnes : Il dit qu'il partirait le lendemain.
- **Indirect libre** : paroles ou pensées rapportées sans verbe introducteur ni subordination, avec les temps du récit : *Il partirait demain ; rien ne le retiendrait plus.* (très fréquent chez Flaubert).

## Le personnage
Étudie : son **portrait** (physique, moral), son **statut social**, ses **relations**, son **évolution** (roman d'apprentissage ou de formation : Julien Sorel, Rastignac, Frédéric Moreau dans *L'Éducation sentimentale*), et ce qu'il **représente** (type social, héros, anti-héros).

## Incipit et excipit
L'**incipit** (début) doit informer (qui ? où ? quand ?), donner envie de lire et établir un **pacte de lecture**. L'**excipit** (fin) peut être **fermé** (dénouement clair) ou **ouvert**.

>! **Exemple** : « Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas. » (Camus, *L'Étranger*, 1942). Incipit brutal, narrateur à la 1re personne, phrases courtes, passé composé : le lecteur découvre d'emblée le détachement étrange de Meursault.

> **À retenir**
> Moyen Âge (Chrétien de Troyes) → XVIIe (*La Princesse de Clèves*) → XVIIIe (épistolaire) → XIXe (réalisme, naturalisme) → XXe (crise du roman, Nouveau Roman).
> Focalisation zéro / interne / externe.
> Ordre (analepse, prolepse) et rythme (scène, sommaire, ellipse, pause).
> Discours direct, indirect, indirect libre.
`,
      exercices: [
        { type: "qcm", question: "Quel roman de 1678 est considéré comme le premier grand roman d'analyse psychologique français ?", choix: ["*Manon Lescaut*", "*La Princesse de Clèves*", "*Les Liaisons dangereuses*", "*Le Rouge et le Noir*"], reponse: 1, explication: "*La Princesse de Clèves* de Mme de La Fayette analyse le conflit entre la passion et le devoir chez l'héroïne." },
        { type: "saisie", question: "Quel auteur a écrit le cycle des *Rougon-Macquart* ?", reponses: ["Zola", "Émile Zola", "Emile Zola"], explication: "**Émile Zola**, chef de file du naturalisme : vingt romans retraçant l'« histoire naturelle et sociale d'une famille sous le Second Empire »." },
        { type: "qcm", question: "Quand le lecteur a accès aux pensées et perceptions d'un seul personnage, la focalisation est :", choix: ["zéro", "externe", "interne", "omnisciente"], reponse: 2, explication: "Focalisation interne : on voit le monde à travers un personnage, avec ses limites." },
        { type: "vf", question: "*Les Liaisons dangereuses* de Laclos est un roman épistolaire.", reponse: true, explication: "Le roman (1782) est entièrement composé de lettres échangées entre les personnages (Merteuil, Valmont, Mme de Tourvel...)." },
        { type: "saisie", question: "Comment appelle-t-on un retour en arrière dans un récit ?", reponses: ["analepse", "une analepse", "flash-back", "flashback", "rétrospection", "retrospection"], explication: "L'**analepse** (ou flash-back) évoque un événement antérieur au moment de l'histoire racontée. La prolepse fait l'inverse." },
        { type: "qcm", question: "« Elle irait le voir demain ; il comprendrait enfin. » Ce type de discours est :", choix: ["direct", "indirect", "narrativisé", "indirect libre"], reponse: 3, explication: "Les pensées du personnage sont rapportées sans verbe introducteur ni guillemets, aux temps du récit : discours indirect libre." },
        { type: "vf", question: "Le Nouveau Roman (Robbe-Grillet, Sarraute, Butor) renforce le rôle de l'intrigue et du personnage traditionnels.", reponse: false, explication: "Au contraire, il remet en cause l'intrigue linéaire, le personnage psychologique et le narrateur omniscient." },
        { type: "qcm", question: "Dans un récit, une **ellipse** consiste à :", choix: ["passer sous silence une période de l'histoire", "décrire longuement un lieu", "rapporter un dialogue en entier", "annoncer un événement futur"], reponse: 0, explication: "L'ellipse accélère le récit en sautant un moment (« Dix ans passèrent »)." },
        { type: "redaction", question: "**Dissertation (plan détaillé, roman)** : « Le personnage de roman doit-il être un modèle pour le lecteur ? » Propose une problématique et un plan détaillé en trois parties avec des exemples précis.", corrige: `**Problématique** : le roman doit-il proposer des héros exemplaires que le lecteur admire et imite, ou son intérêt est-il au contraire de montrer des personnages imparfaits, voire condamnables, qui l'aident à comprendre l'homme ?

**I. Le personnage peut être un modèle qui élève le lecteur**
1. Le héros médiéval incarne un idéal : Yvain, Perceval et les valeurs chevaleresques (courage, loyauté).
2. Le roman d'analyse propose des modèles moraux : la princesse de Clèves renonce à sa passion par fidélité au devoir.
3. Le héros romantique force l'admiration : Jean Valjean (*Les Misérables*), figure de rédemption et de bonté.

**II. Mais le roman montre souvent des personnages imparfaits ou condamnables**
1. Le réalisme peint l'homme tel qu'il est : Emma Bovary et ses illusions, Rastignac et son ambition.
2. Le naturalisme montre des êtres déterminés par l'hérédité et le milieu : Gervaise dans *L'Assommoir*.
3. Les personnages négatifs fascinent : Valmont et Merteuil (*Les Liaisons dangereuses*) ; Bel-Ami, arriviste sans scrupule.

**III. Le personnage n'est pas un modèle mais un moyen de comprendre l'homme et le monde**
1. L'identification permet de vivre d'autres vies et d'exercer son jugement : le lecteur juge Julien Sorel sans l'imiter.
2. Le contre-modèle a une valeur critique : Laclos affirme dans sa préface vouloir instruire en montrant les dangers du libertinage.
3. Au XXe siècle, le personnage devient énigmatique (Meursault dans *L'Étranger*) : il fait réfléchir plutôt qu'il ne sert d'exemple.

**Conclusion** : le personnage romanesque n'a pas besoin d'être exemplaire ; sa valeur tient à ce qu'il révèle de la condition humaine. Ouverture : le personnage de théâtre, incarné par un acteur, pose la même question avec plus de force encore.` }
      ]
    },
    {
      id: "theatre",
      titre: "Le théâtre du XVIIe au XXIe siècle",
      theme: "Objet d'étude : le théâtre",
      cours: `
## Un texte fait pour être joué
Le théâtre est un genre **double** : un **texte** (répliques et didascalies) et une **représentation** (mise en scène, acteurs, décor). Sa règle fondamentale est la **double énonciation** : un personnage parle à un autre personnage, mais à travers lui, l'auteur s'adresse au **public**.

## XVIIe siècle : le théâtre classique
**Les règles** (inspirées d'Aristote, fixées par Boileau dans *L'Art poétique*, 1674) :
- **unité de temps** : l'action dure au maximum 24 heures ;
- **unité de lieu** : un seul lieu ;
- **unité d'action** : une intrigue principale ;
- **vraisemblance** : l'action doit paraître crédible ;
- **bienséance** : ne pas choquer le public (pas de mort ni de violence sur scène ; elles sont racontées dans un **récit**).
« Qu'en un lieu, qu'en un jour, un seul fait accompli / Tienne jusqu'à la fin le théâtre rempli. » (Boileau)

**La tragédie** : personnages nobles (rois, héros), en **alexandrins**, cinq actes ; conflit entre **passion** et **devoir** ; **fatalité** ; dénouement malheureux ; but : la **catharsis** (purgation des passions par la terreur et la pitié). Corneille, *Le Cid* (1637, tragi-comédie à l'origine, avec la célèbre « querelle du Cid »), *Horace*, *Cinna* ; Racine, *Andromaque* (1667), *Britannicus* (1669), *Bérénice* (1670), *Phèdre* (1677).

**La comédie** : personnages ordinaires (bourgeois, valets), dénouement heureux (souvent un mariage), but : « **corriger les mœurs par le rire** » (*castigat ridendo mores*). **Molière** : *L'École des femmes* (1662), *Tartuffe* (1664-1669), *Dom Juan* (1665), *Le Misanthrope* (1666), *L'Avare* (1668), *Le Malade imaginaire* (1673).

## XVIIIe siècle
- **Marivaux** : comédies de l'amour et du langage (le **marivaudage**), *L'Île des esclaves* (1725, inversion maîtres/valets), *Le Jeu de l'amour et du hasard* (1730).
- **Beaumarchais** : *Le Barbier de Séville* (1775), *Le Mariage de Figaro* (1784) : critique des privilèges de la noblesse (monologue de Figaro, acte V).
- **Le drame bourgeois** (Diderot) : entre tragédie et comédie, personnages bourgeois.

## XIXe siècle : le drame romantique
Victor Hugo, *Préface de Cromwell* (1827) : refus des unités de temps et de lieu, **mélange des genres** (le sublime et le grotesque), sujets historiques. *Hernani* (1830, la « bataille d'Hernani »), *Ruy Blas* (1838). Musset, *Lorenzaccio* (1834), *On ne badine pas avec l'amour* (1834). Fin du siècle : Jarry, *Ubu roi* (1896), provocation qui annonce le théâtre moderne ; Edmond Rostand, *Cyrano de Bergerac* (1897).

## XXe et XXIe siècles
- **Réécritures des mythes** : Giraudoux, *La guerre de Troie n'aura pas lieu* (1935) ; Cocteau, *La Machine infernale* (1934) ; Anouilh, *Antigone* (1944).
- **Théâtre existentialiste** : Sartre, *Huis clos* (1944, « L'enfer, c'est les autres ») ; Camus, *Caligula*.
- **Théâtre de l'absurde** (années 1950) : langage qui tourne à vide, personnages sans repères, absence d'intrigue. Ionesco, *La Cantatrice chauve* (1950), *Rhinocéros* (1959) ; Beckett, *En attendant Godot* (1953), *Fin de partie*.
- **Théâtre contemporain** : Koltès, Jean-Luc Lagarce (*Juste la fin du monde*, 1990), Yasmina Reza, Wajdi Mouawad (*Incendies*, 2003), Joël Pommerat.

## Le vocabulaire de l'analyse théâtrale
| Terme | Définition |
|---|---|
| exposition | début de la pièce qui présente personnages et situation |
| nœud | conflit central, obstacles |
| péripétie / coup de théâtre | événement qui modifie brusquement la situation |
| dénouement | résolution finale du conflit |
| tirade | longue réplique |
| monologue | personnage seul en scène (les **stances** : monologue lyrique en strophes, comme celui de Rodrigue) |
| stichomythie | échange rapide de répliques courtes (souvent d'un vers chacune) |
| aparté | réplique que les autres personnages ne sont pas censés entendre |
| quiproquo | malentendu |
| didascalie | indication scénique de l'auteur |
| récit | narration d'une action qui s'est déroulée hors scène (récit de Théramène dans *Phèdre*) |

> **À retenir**
> Double énonciation : le personnage parle au personnage, l'auteur au public.
> Classicisme : trois unités, vraisemblance, bienséance ; tragédie (catharsis) / comédie (corriger les mœurs).
> Drame romantique : mélange des genres (Hugo, *Préface de Cromwell*).
> XXe : réécriture des mythes, absurde (Ionesco, Beckett).
`,
      exercices: [
        { type: "qcm", question: "Quelle règle du théâtre classique interdit de montrer la mort sur scène ?", choix: ["L'unité de lieu", "La vraisemblance", "La bienséance", "L'unité d'action"], reponse: 2, explication: "La bienséance interdit ce qui pourrait choquer le public (violence, mort, intimité) : ces événements sont racontés dans un récit." },
        { type: "saisie", question: "Comment appelle-t-on le principe selon lequel un personnage parle à un autre personnage tout en s'adressant, à travers lui, au public ?", reponses: ["double énonciation", "double enonciation"], explication: "La **double énonciation** est le fondement de la communication théâtrale." },
        { type: "vf", question: "Dans la *Préface de Cromwell* (1827), Hugo défend le mélange des genres et le refus des unités de temps et de lieu.", reponse: true, explication: "Hugo y théorise le drame romantique : mélange du sublime et du grotesque, liberté de temps et de lieu ; il conserve l'unité d'action (d'ensemble)." },
        { type: "qcm", question: "Qui a écrit *En attendant Godot* ?", choix: ["Beckett", "Ionesco", "Sartre", "Anouilh"], reponse: 0, explication: "Samuel Beckett (1953), pièce emblématique du théâtre de l'absurde : Vladimir et Estragon attendent un Godot qui ne vient jamais." },
        { type: "qcm", question: "Un échange rapide de répliques très courtes s'appelle :", choix: ["une tirade", "des stances", "un aparté", "une stichomythie"], reponse: 3, explication: "La stichomythie (répliques d'un vers ou moins) crée un rythme vif, souvent dans les affrontements." },
        { type: "saisie", question: "Comment appelle-t-on l'effet de « purgation des passions » que doit produire la tragédie selon Aristote ?", reponses: ["catharsis", "la catharsis"], explication: "La **catharsis** : en éprouvant terreur et pitié devant le héros tragique, le spectateur se libère de ses passions." },
        { type: "vf", question: "*Phèdre* (1677) est une comédie de Molière.", reponse: false, explication: "*Phèdre* est une **tragédie** de **Racine** : Phèdre, épouse de Thésée, brûle d'une passion coupable pour Hippolyte, son beau-fils." },
        { type: "qcm", question: "Dans quelle pièce de Marivaux les maîtres et les valets échangent-ils leurs rôles sur une île ?", choix: ["*Le Jeu de l'amour et du hasard*", "*L'Île des esclaves*", "*Les Fausses Confidences*", "*La Dispute*"], reponse: 1, explication: "Dans *L'Île des esclaves* (1725), Iphicrate et Euphrosine deviennent esclaves de leurs anciens serviteurs, Arlequin et Cléanthis." },
        { type: "redaction", question: "**Dissertation (plan détaillé, théâtre)** : « Le théâtre n'est-il qu'un divertissement ? » Rédige l'introduction et le plan détaillé.", corrige: `**Introduction**
*Amorce* : Molière affirmait que « le devoir de la comédie [est] de corriger les hommes en les divertissant » (premier placet de *Tartuffe*).
*Analyse* : « divertissement » = ce qui distrait, amuse, détourne des soucis ; « n'est-il que » invite à chercher d'autres fonctions.
*Problématique* : le théâtre se limite-t-il à distraire le spectateur, ou le plaisir qu'il procure sert-il aussi à l'émouvoir, l'instruire et le faire réfléchir ?
*Plan* : nous verrons que le théâtre est d'abord un spectacle qui divertit, puis qu'il est aussi une école de réflexion, et enfin qu'il bouleverse et interroge l'homme.

**I. Le théâtre est d'abord un divertissement**
1. Le plaisir du rire : la farce et la comédie (coups de bâton de *Scapin*, quiproquos).
2. Le plaisir du spectacle : décors, costumes, jeux de scène ; la fête (comédies-ballets de Molière).
3. Le plaisir de l'intrigue : rebondissements, coups de théâtre, suspense.

**II. Mais il instruit et critique la société**
1. « Corriger les mœurs par le rire » : *Tartuffe* dénonce l'hypocrisie religieuse, *L'Avare* l'avarice.
2. Critique sociale et politique : Marivaux, *L'Île des esclaves* ; Beaumarchais, monologue de Figaro (« Qu'avez-vous fait pour tant de biens ? Vous vous êtes donné la peine de naître »).
3. Le théâtre engagé : *Rhinocéros* d'Ionesco contre les totalitarismes ; *Antigone* d'Anouilh sous l'Occupation.

**III. Il émeut et fait réfléchir sur la condition humaine**
1. La catharsis tragique : *Phèdre*, la passion fatale.
2. Le drame et la fatalité de l'histoire : *Lorenzaccio*.
3. L'absurde : Beckett et Ionesco montrent l'homme face au vide et à l'attente (*En attendant Godot*).

**Conclusion** : le théâtre divertit, mais ce divertissement est un moyen : il permet de toucher le spectateur pour l'instruire et l'émouvoir. Ouverture : la mise en scène contemporaine renouvelle sans cesse le sens des pièces classiques.` }
      ]
    },
    {
      id: "figures-de-style",
      titre: "Les figures de style",
      theme: "Outils d'analyse",
      cours: `
## Principe
Une figure de style n'est pas un ornement gratuit. Au bac, il faut **identifier** la figure, la **citer** et surtout **interpréter son effet** en lien avec le sens du texte. On les classe par familles.

## Figures d'analogie (rapprochement)
| Figure | Définition | Exemple |
|---|---|---|
| **comparaison** | rapprochement avec outil (comme, tel, pareil à, ainsi que, ressembler) | « Il est pâle comme un mort » |
| **métaphore** | rapprochement sans outil ; *in praesentia* (comparé et comparant présents) ou *in absentia* (comparé absent) | « Ma jeunesse ne fut qu'un ténébreux orage » (Baudelaire) |
| **métaphore filée** | métaphore développée sur plusieurs mots ou phrases | la mer comme un monstre qui rugit, dévore, bondit |
| **personnification** | une chose ou une abstraction est présentée comme humaine | « La Nature est un temple où de vivants piliers / Laissent parfois sortir de confuses paroles » (Baudelaire, « Correspondances ») |
| **allégorie** | représentation concrète d'une idée abstraite (souvent avec majuscule) | la Mort avec sa faux ; la Liberté guidant le peuple |

## Figures de substitution
| Figure | Définition | Exemple |
|---|---|---|
| **métonymie** | remplacer un mot par un autre lié logiquement (contenant/contenu, cause/effet, auteur/œuvre...) | « boire un verre » ; « lire un Zola » ; « Paris a voté » |
| **synecdoque** | type de métonymie : la partie pour le tout | « une voile » pour un bateau |
| **périphrase** | remplacer un mot par une expression qui le définit | « la Ville Lumière » (Paris) ; « l'astre du jour » (le soleil) |
| **antonomase** | nom propre devenu nom commun, ou l'inverse | « un harpagon » (un avare) |

## Figures d'opposition
| Figure | Définition | Exemple |
|---|---|---|
| **antithèse** | opposition de deux mots ou idées | « Je vis, je meurs ; je me brûle et me noie » (Louise Labé) |
| **oxymore** | deux termes contradictoires réunis dans un même groupe | « Cette obscure clarté qui tombe des étoiles » (Corneille) |
| **chiasme** | structure croisée ABBA | « Il faut manger pour vivre et non pas vivre pour manger » (Molière) |
| **paradoxe** | idée contraire à l'opinion commune | « Je me presse de rire de tout, de peur d'être obligé d'en pleurer » (Beaumarchais, *Le Barbier de Séville*, I, 2) |

## Figures d'amplification et d'atténuation
| Figure | Définition | Exemple |
|---|---|---|
| **hyperbole** | exagération | « mourir de rire » |
| **gradation** | progression d'intensité | « Va, cours, vole, et nous venge » (Corneille) |
| **accumulation / énumération** | succession de termes | les inventaires de Rabelais |
| **anaphore** | reprise d'un mot en tête de vers ou de phrase | « Paris ! Paris outragé ! Paris brisé ! Paris martyrisé ! » (de Gaulle) |
| **litote** | dire moins pour suggérer plus | « Va, je ne te hais point » (Chimène à Rodrigue = je t'aime) |
| **euphémisme** | atténuer une réalité pénible | « il nous a quittés » (il est mort) |
| **prétérition** | dire qu'on ne va pas dire ce qu'on dit | « Je ne vous dirai pas combien il a souffert » |

## Figures de construction et de discours
- **Parallélisme** : même structure syntaxique répétée.
- **Question rhétorique** : question qui n'attend pas de réponse et affirme une idée.
- **Apostrophe** : on s'adresse directement à quelqu'un ou quelque chose (« Ô temps ! suspends ton vol »).
- **Ironie / antiphrase** : dire le contraire de ce qu'on pense.
- **Hypallage** : attribuer à un mot ce qui convient à un autre (« ce marchand accoudé sur son comptoir avide », Hugo : c'est le marchand qui est avide, pas le comptoir).

>! **Méthode d'analyse** : « Le poète utilise une *métaphore* [identification] : “ma jeunesse ne fut qu'un ténébreux orage” [citation]. En assimilant sa jeunesse à une tempête obscure, Baudelaire suggère la violence et la noirceur de ses premières années : le spleen semble l'avoir accompagné dès l'origine [interprétation]. »

> **À retenir**
> Identifier → citer → interpréter : une figure sans effet expliqué ne rapporte rien.
> Analogie : comparaison, métaphore, personnification, allégorie.
> Substitution : métonymie, synecdoque, périphrase.
> Opposition : antithèse, oxymore, chiasme. Atténuation : litote, euphémisme.
`,
      exercices: [
        { type: "qcm", question: "« Cette obscure clarté qui tombe des étoiles » (Corneille) contient :", choix: ["une litote", "un oxymore", "un chiasme", "une métonymie"], reponse: 1, explication: "« obscure » et « clarté » sont contradictoires et réunis dans le même groupe nominal : c'est un oxymore." },
        { type: "saisie", question: "« Va, je ne te hais point » (Chimène, *Le Cid*) est l'exemple le plus célèbre de quelle figure ?", reponses: ["litote", "la litote", "une litote"], explication: "La **litote** dit moins pour faire entendre plus : Chimène signifie qu'elle aime encore Rodrigue." },
        { type: "qcm", question: "« Il faut manger pour vivre et non pas vivre pour manger » est construit sur :", choix: ["une anaphore", "une gradation", "un euphémisme", "un chiasme"], reponse: 3, explication: "Structure croisée manger / vivre / vivre / manger (ABBA) : chiasme." },
        { type: "vf", question: "« Boire un verre » est une métonymie (le contenant pour le contenu).", reponse: true, explication: "On boit le contenu du verre, pas le verre : le contenant désigne le contenu." },
        { type: "qcm", question: "« L'astre du jour » pour désigner le soleil est :", choix: ["une périphrase", "une allégorie", "une antithèse", "une hyperbole"], reponse: 0, explication: "La périphrase remplace un mot par une expression qui le définit ou le caractérise." },
        { type: "saisie", question: "Comment appelle-t-on une métaphore prolongée sur plusieurs mots ou plusieurs vers ?", reponses: ["métaphore filée", "metaphore filee"], explication: "La **métaphore filée** développe une même image (ex. : la ville comme une bête qui respire et dévore)." },
        { type: "vf", question: "Un euphémisme exagère une réalité pour la rendre plus frappante.", reponse: false, explication: "C'est l'inverse : l'euphémisme **atténue** une réalité pénible (« il s'est éteint »). L'exagération est l'hyperbole." },
        { type: "qcm", question: "Dans « Ô temps ! suspends ton vol » (Lamartine), on trouve :", choix: ["une litote et une antithèse", "un chiasme", "une apostrophe et une personnification", "un oxymore"], reponse: 2, explication: "Le poète s'adresse au temps (apostrophe) et lui attribue une capacité d'agir sur ordre, comme une personne (personnification ; le « vol » est aussi une métaphore)." },
        { type: "redaction", question: "**Exercice type commentaire** : Analyse les figures de style dans ces vers de Louise Labé et montre ce qu'elles révèlent : « Je vis, je meurs ; je me brûle et me noie ; / J'ai chaud extrême en endurant froidure : / La vie m'est et trop molle et trop dure. / J'ai grands ennuis entremêlés de joie. » (*Sonnets*, 1555)", corrige: `**Relevé et identification**
- **Antithèses** en série : « je vis / je meurs », « je me brûle / me noie », « chaud extrême / froidure », « trop molle / trop dure », « ennuis / joie ».
- **Parallélisme** et rythme binaire : « Je vis, je meurs » ; « et trop molle et trop dure » (avec la répétition de « trop »).
- **Hyperboles** : « je meurs », « chaud extrême ».
- Images du feu et de l'eau (« brûle », « noie ») : métaphores de la passion.
- Reprise du « je » (« Je vis, je meurs », « je me brûle », « J'ai chaud », « J'ai grands ennuis ») : omniprésence du moi lyrique.

**Interprétation**
- Les antithèses accumulées traduisent le **déchirement intérieur** de l'amoureuse : la passion fait éprouver simultanément des sensations contraires. C'est un **topos** pétrarquiste (hérité de Pétrarque) : l'amour comme contradiction.
- Le rythme haché, binaire, mime l'**oscillation** constante entre extase et souffrance.
- Les hyperboles disent l'intensité absolue de l'émotion : l'amour est vécu comme une expérience de vie et de mort.
- Le **registre lyrique** domine : la poétesse exprime ses sentiments à la 1re personne, avec une audace remarquable pour une femme au XVIe siècle.

**Conclusion** : les figures d'opposition ne sont pas un jeu gratuit : elles rendent sensible le paradoxe de la passion amoureuse.` }
      ]
    },
    {
      id: "registres-analyse",
      titre: "Registres, énonciation et vocabulaire de l'analyse littéraire",
      theme: "Outils d'analyse",
      cours: `
## Les registres (ou tonalités)
Le **registre** est l'effet qu'un texte cherche à produire sur le lecteur, à travers des procédés caractéristiques.

| Registre | Effet recherché | Procédés |
|---|---|---|
| **lyrique** | exprimer des sentiments personnels | 1re personne, apostrophes, exclamations, musicalité, champ lexical des sentiments |
| **élégiaque** | plainte douce et mélancolique (deuil, amour perdu, temps qui passe) | lyrique + thèmes de la perte |
| **pathétique** | susciter la pitié, la compassion | souffrance, larmes, interjections, phrases exclamatives, hyperboles |
| **tragique** | montrer l'homme écrasé par une fatalité | destin, mort, dilemme, impuissance, champ lexical de la fatalité |
| **épique** | célébrer des exploits héroïques, grandir | hyperboles, pluriels, gradations, combats, merveilleux |
| **comique** | faire rire | jeux de mots, quiproquo, répétitions, exagération, décalage |
| **satirique** | se moquer pour critiquer | ironie, caricature, portrait charge |
| **polémique** | attaquer, dénoncer avec violence | questions rhétoriques, termes péjoratifs, impératifs, apostrophes |
| **fantastique** | faire hésiter entre explication rationnelle et surnaturelle | doute, modalisateurs, peur, focalisation interne |
| **didactique** | enseigner, expliquer | présent de vérité générale, vocabulaire précis, exemples |
| **ironique** | faire entendre le contraire de ce qui est dit | antiphrase, fausse naïveté, décalage |

## L'énonciation
**Énoncé ancré dans la situation d'énonciation** : il renvoie à celui qui parle (*je*), à son destinataire (*tu*, *vous*), au moment et au lieu de l'énonciation (*ici*, *maintenant*, *hier*, *demain*) ; temps : présent, passé composé, futur (lettres, dialogues, discours, poésie lyrique).

**Énoncé coupé de la situation d'énonciation** (récit) : 3e personne, passé simple et imparfait, indicateurs relatifs (*là*, *ce jour-là*, *la veille*, *le lendemain*).

**Modalisation** : marques du jugement ou de la certitude de l'énonciateur — adverbes (*sans doute*, *heureusement*), verbes (*sembler*, *croire*), conditionnel, adjectifs évaluatifs (*magnifique*, *odieux*), termes péjoratifs ou mélioratifs.

## Les valeurs des temps à connaître
- **Présent** : d'énonciation, de vérité générale, de narration (présent historique ou de narration qui rend la scène vivante), d'habitude.
- **Imparfait** : description, arrière-plan, habitude, durée.
- **Passé simple** : actions de premier plan, ponctuelles.
- **Passé composé** : action passée en lien avec le présent du locuteur.
- **Futur** : projection, prophétie, injonction.

## Le vocabulaire de l'analyse littéraire
| Terme | Sens |
|---|---|
| **champ lexical** | ensemble des mots d'un texte se rapportant à un même thème |
| **connotation / dénotation** | sens suggéré, associé / sens premier, objectif |
| **mélioratif / péjoratif** | qui valorise / qui dévalorise |
| **topos** (pl. *topoï*) | lieu commun littéraire, motif récurrent (le *locus amoenus*, la rencontre amoureuse) |
| ***carpe diem*** | « cueille le jour » (Horace) : profiter de l'instant présent (Ronsard, « Mignonne, allons voir si la rose ») |
| **memento mori** | « souviens-toi que tu vas mourir » |
| **intertextualité** | relation entre un texte et d'autres textes (citation, allusion, parodie, réécriture) |
| **parodie / pastiche** | imitation moqueuse / imitation du style sans intention moqueuse forcément |
| **mise en abyme** | œuvre dans l'œuvre (théâtre dans le théâtre) |
| **incipit / excipit** | début / fin d'une œuvre |
| **implicite** | ce qui est suggéré sans être dit |
| **rythme** | organisation des sons, des longueurs de phrases ou de vers (binaire, ternaire, accélération) |

## Les marques de la subjectivité
Pour montrer que l'auteur ou le personnage prend position, relève : pronoms personnels, vocabulaire affectif et évaluatif, ponctuation expressive, figures d'insistance.

>! **Exemple** : « Ô malheureux mortels ! ô terre déplorable ! » (Voltaire, *Poème sur le désastre de Lisbonne*, 1756). Apostrophes, interjection « ô », adjectifs péjoratifs, exclamations : registre **pathétique**, au service d'une argumentation contre l'optimisme.

> **À retenir**
> Le registre se prouve par des **procédés** : ne l'affirme jamais sans les citer.
> Énoncé ancré (je/tu, présent, ici/maintenant) / coupé (il, passé simple, ce jour-là).
> Maîtrise le vocabulaire de l'analyse : champ lexical, connotation, topos, intertextualité, modalisation.
`,
      exercices: [
        { type: "qcm", question: "Un texte qui célèbre des exploits héroïques avec des hyperboles et des combats relève du registre :", choix: ["élégiaque", "didactique", "épique", "fantastique"], reponse: 2, explication: "Le registre épique (de l'épopée) grandit les héros et leurs actions par l'exagération." },
        { type: "saisie", question: "Quelle expression latine d'Horace signifie « cueille le jour » ?", reponses: ["carpe diem"], explication: "**Carpe diem** : invitation à profiter du présent, thème repris par Ronsard dans « Mignonne, allons voir si la rose »." },
        { type: "vf", question: "Le registre fantastique repose sur une hésitation entre une explication rationnelle et une explication surnaturelle.", reponse: true, explication: "C'est la définition de Todorov : le lecteur (et souvent le personnage) hésite ; si le surnaturel est accepté, on passe au merveilleux." },
        { type: "qcm", question: "Quel terme désigne le sens suggéré, associé à un mot, au-delà de son sens premier ?", choix: ["La dénotation", "La connotation", "La modalisation", "La périphrase"], reponse: 1, explication: "La connotation est le sens second (« rouge » peut connoter la passion, le sang, la colère) ; la dénotation est le sens premier." },
        { type: "qcm", question: "Dans « Hier, je t'ai écrit cette lettre », l'énoncé est :", choix: ["ancré dans la situation d'énonciation", "coupé de la situation d'énonciation", "au discours indirect libre", "en focalisation externe"], reponse: 0, explication: "« je », « t' », « hier », passé composé : ces marques renvoient au locuteur, au destinataire et au moment où l'on parle." },
        { type: "vf", question: "Le registre pathétique cherche à faire rire le lecteur.", reponse: false, explication: "Le registre pathétique cherche à émouvoir et à susciter la **pitié** (du grec *pathos*, la souffrance)." },
        { type: "saisie", question: "Comment appelle-t-on le procédé de l'« œuvre dans l'œuvre » (par exemple le théâtre dans le théâtre) ?", reponses: ["mise en abyme", "la mise en abyme", "mise en abîme", "mise en abime", "la mise en abime"], explication: "La **mise en abyme** insère dans l'œuvre une représentation réduite d'elle-même (*L'Illusion comique* de Corneille)." },
        { type: "qcm", question: "Quel registre domine dans un texte qui attaque violemment un adversaire avec des questions rhétoriques et des termes péjoratifs ?", choix: ["Lyrique", "Élégiaque", "Didactique", "Polémique"], reponse: 3, explication: "Le registre polémique (du grec *polemos*, la guerre) attaque et dénonce." },
        { type: "redaction", question: "**Exercice type commentaire** : Identifie le registre dominant de cet extrait et justifie par au moins quatre procédés : « Ô rage ! ô désespoir ! ô vieillesse ennemie ! / N'ai-je donc tant vécu que pour cette infamie ? / Et ne suis-je blanchi dans les travaux guerriers / Que pour voir en un jour flétrir tant de lauriers ? » (Corneille, *Le Cid*, I, 4, monologue de Don Diègue)", corrige: `**Registre dominant : pathétique et tragique (avec une dimension lyrique)**

**Procédés**
1. **Apostrophes** et **interjections** répétées : « Ô rage ! ô désespoir ! ô vieillesse ennemie ! » — gradation de trois exclamations qui expriment une douleur violente (rythme ternaire, anaphore de « ô »).
2. **Questions rhétoriques** : « N'ai-je donc tant vécu que pour cette infamie ? » — le personnage ne demande rien, il exprime son désespoir et son sentiment d'injustice.
3. **Personnification** de la vieillesse, « ennemie » : le vieillard est trahi par son propre corps, qui l'empêche de se venger de l'affront (le soufflet du comte).
4. **Antithèse** entre le passé glorieux (« travaux guerriers », « lauriers ») et le présent humiliant (« infamie », « flétrir ») ; la **métaphore** des lauriers qui se flétrissent montre la gloire anéantie « en un jour ».
5. Le champ lexical de l'honneur et de la honte (« infamie », « lauriers », « flétrir ») installe le **dilemme tragique** de la pièce.

**Interprétation** : Don Diègue, seul en scène (monologue), suscite la **pitié** du spectateur : un héros devenu impuissant. Le texte annonce aussi le ressort **tragique** : seul son fils Rodrigue pourra le venger, en affrontant le père de Chimène qu'il aime.` }
      ]
    },
    {
      id: "commentaire",
      titre: "Méthode : le commentaire de texte",
      theme: "Méthodes de l'écrit",
      cours: `
## L'exercice
Le **commentaire** porte sur un texte littéraire que tu ne connais généralement pas, en lien avec l'un des objets d'étude du programme ; le texte officiel précise qu'il n'est **jamais extrait d'une des œuvres au programme**. Tu dois proposer une **lecture organisée et argumentée** : montrer **comment** le texte produit du sens. Ce n'est ni un résumé, ni une paraphrase, ni une explication ligne à ligne.

## Étape 1 : la lecture et l'analyse au brouillon (environ 1 h 30)
1. **Lis** le texte plusieurs fois, ainsi que le paratexte (auteur, titre, date, présentation).
2. **Identifie** : genre, forme, registre(s), situation d'énonciation, thème principal, mouvement littéraire.
3. **Pose-toi les questions** : de quoi parle le texte ? Qu'a-t-il de singulier ? Quel effet produit-il ? Pourquoi l'auteur écrit-il ainsi ?
4. **Annote** le texte avec des couleurs : champs lexicaux, figures, temps verbaux, rythme, sonorités, ponctuation.
5. Formule une **problématique** (ou projet de lecture) : une question qui porte sur le **fonctionnement** et la **visée** du texte.
6. **Regroupe** tes remarques en deux ou trois **axes** qui répondent à la problématique.

>! **Exemple** de problématique pour « Le Dormeur du val » (Rimbaud, 1870) : *Comment Rimbaud transforme-t-il un paysage paisible en une dénonciation saisissante de la guerre ?*
>! Axe I : un tableau idyllique et apaisé. Axe II : une révélation tragique qui dénonce la guerre.

## Étape 2 : le plan détaillé
Chaque **axe** (partie) comporte 2 ou 3 **sous-parties**. Chaque sous-partie = une idée + des citations + des analyses précises.
- Évite le plan « fond / forme » : forme et sens doivent être étudiés ensemble.
- Fais progresser le plan : du plus évident au plus subtil.

## Étape 3 : l'introduction (à rédiger au brouillon)
1. **Amorce** : une phrase qui introduit le contexte (mouvement, thème, auteur).
2. **Présentation** du texte : auteur, titre, date, genre, situation du passage.
3. **Problématique**.
4. **Annonce du plan**.

## Étape 4 : le développement
**Un paragraphe = une sous-partie**, construit ainsi :
1. une phrase qui énonce l'**idée** ;
2. des **citations** courtes, entre guillemets, avec la ligne ou le vers ;
3. l'**analyse** des procédés (nommer le procédé + interpréter l'effet) ;
4. une phrase de **bilan** ou de transition.

Formule de base : **Idée → Citation → Procédé → Interprétation**.

>! « Le poète présente d'abord la nature comme un lieu accueillant. Le vallon est “un trou de verdure où chante une rivière” (v. 1) : la personnification de la rivière qui “chante” et les couleurs vives (“verdure”, “argent”) créent une atmosphère joyeuse et vivante, qui contraste avec la révélation finale. »

Entre deux grandes parties, rédige une **transition** (bilan de la partie + annonce de la suivante). Laisse une ligne entre les parties, va à la ligne avec un alinéa pour chaque paragraphe.

## Étape 5 : la conclusion
1. **Bilan** : réponse claire à la problématique, en reprenant les axes.
2. **Ouverture** : rapprochement avec une autre œuvre (même thème, même auteur, même mouvement) ou une autre forme d'art.

## Étape 6 : la relecture (15 minutes)
Orthographe, accords, citations exactes, titres d'œuvres soulignés (à la main), noms d'auteurs corrects.

## Les erreurs à éviter
- la **paraphrase** (répéter le texte avec d'autres mots) ;
- le **catalogue** de procédés sans interprétation ;
- les citations trop longues ou non analysées ;
- les hors-sujet biographiques.

> **À retenir**
> Commentaire = lecture organisée : problématique + 2 ou 3 axes.
> Introduction : amorce, présentation, problématique, annonce du plan.
> Chaque paragraphe : idée → citation → procédé → interprétation.
> Conclusion : bilan + ouverture.
`,
      exercices: [
        { type: "qcm", question: "Quel est l'ordre des éléments d'une introduction de commentaire ?", choix: ["Problématique, amorce, plan, présentation", "Amorce, présentation du texte, problématique, annonce du plan", "Plan, problématique, présentation, amorce", "Présentation, plan, amorce, problématique"], reponse: 1, explication: "On part du général (amorce) vers le particulier (présentation du texte), puis on pose la question (problématique) avant d'annoncer le plan." },
        { type: "vf", question: "Dans un commentaire, il est conseillé de faire une partie sur le fond et une partie sur la forme.", reponse: false, explication: "Le plan fond/forme est à proscrire : chaque analyse doit relier un procédé (forme) à son effet (sens)." },
        { type: "qcm", question: "Qu'est-ce que la paraphrase ?", choix: ["Une citation commentée", "Une figure de style", "Une analyse des procédés", "Le fait de redire le texte avec d'autres mots sans l'analyser"], reponse: 3, explication: "La paraphrase n'apporte aucune analyse : c'est l'erreur la plus fréquente au commentaire." },
        { type: "saisie", question: "Combien de grands axes comporte généralement un commentaire ? (indique « 2 ou 3 »)", reponses: ["2 ou 3", "deux ou trois", "2 ou 3 axes", "deux ou trois axes", "2-3", "2 à 3", "deux à trois", "2 a 3", "deux a trois"], explication: "Un commentaire comporte **deux ou trois** axes, chacun divisé en deux ou trois sous-parties." },
        { type: "qcm", question: "Quelle formule résume la construction d'un paragraphe de commentaire ?", choix: ["Idée → citation → procédé → interprétation", "Résumé → citation → conclusion", "Biographie → citation → avis personnel", "Citation → citation → citation"], reponse: 0, explication: "On énonce une idée, on la prouve par une citation, on nomme le procédé et on interprète son effet." },
        { type: "vf", question: "La conclusion d'un commentaire comprend un bilan qui répond à la problématique et une ouverture.", reponse: true, explication: "Le bilan synthétise les axes ; l'ouverture élargit vers une autre œuvre ou un autre art." },
        { type: "qcm", question: "Laquelle de ces problématiques est la mieux formulée pour un commentaire ?", choix: ["Qui est Rimbaud ?", "Que raconte ce poème ?", "Comment le poète transforme-t-il un paysage paisible en dénonciation de la guerre ?", "Ce poème est-il beau ?"], reponse: 2, explication: "Une bonne problématique interroge le fonctionnement du texte (« comment ») et sa visée (dénonciation)." },
        { type: "redaction", question: "**Sujet type bac (commentaire)** : Rédige l'introduction et le plan détaillé du commentaire du sonnet « Le Dormeur du val » de Rimbaud (1870) : « C'est un trou de verdure où chante une rivière / Accrochant follement aux herbes des haillons / D'argent ; où le soleil, de la montagne fière, / Luit : c'est un petit val qui mousse de rayons. // Un soldat jeune, bouche ouverte, tête nue, / Et la nuque baignant dans le frais cresson bleu, / Dort ; il est étendu dans l'herbe, sous la nue, / Pâle dans son lit vert où la lumière pleut. // Les pieds dans les glaïeuls, il dort. Souriant comme / Sourirait un enfant malade, il fait un somme : / Nature, berce-le chaudement : il a froid. // Les parfums ne font pas frissonner sa narine ; / Il dort dans le soleil, la main sur sa poitrine / Tranquille. Il a deux trous rouges au côté droit. »", corrige: `**Introduction**
*Amorce* : En 1870, la guerre franco-prussienne bouleverse la France ; le jeune Arthur Rimbaud, à peine âgé de seize ans, compose alors plusieurs poèmes de révolte.
*Présentation* : « Le Dormeur du val », sonnet en alexandrins écrit en octobre 1870 et recueilli dans le *Cahier de Douai*, semble décrire un jeune soldat endormi dans un paysage paisible ; mais le dernier vers révèle qu'il est mort.
*Problématique* : Comment Rimbaud transforme-t-il le tableau d'un paysage harmonieux en une dénonciation saisissante de la guerre ?
*Annonce du plan* : Nous étudierons d'abord le tableau idyllique d'une nature vivante et protectrice, puis nous montrerons comment le poème construit une révélation tragique qui accuse la guerre.

**I. Un tableau idyllique : une nature vivante et maternelle**
1. *Une nature animée et lumineuse* : personnifications (« chante une rivière », « la montagne fière »), lumière omniprésente (« soleil », « rayons », « la lumière pleut ») ; couleurs vives (« verdure », « argent », « bleu », « vert ») qui font du poème un tableau.
2. *Un lieu protecteur* : le « trou », le « petit val », le « lit vert » : espace clos, nid accueillant ; apostrophe « Nature, berce-le chaudement » : la nature est une mère.
3. *Un soldat apparemment paisible* : champ lexical du sommeil (« dort » répété trois fois, « fait un somme »), jeunesse (« Un soldat jeune », comparaison avec « un enfant »).

**II. Une révélation tragique : la dénonciation de la guerre**
1. *Des indices inquiétants* : « bouche ouverte », « pâle », comparaison avec « un enfant malade », « il a froid » en fin de vers, « Les parfums ne font pas frissonner sa narine » (négation) ; rejets troublants (« Dort », « Tranquille ») qui isolent et rendent ambiguë l'immobilité.
2. *La chute du sonnet* : le dernier vers, phrase courte et neutre, révèle la mort : « deux trous rouges » — le rouge du sang rompt avec les couleurs de la vie ; l'euphémisme du « sommeil » devient métaphore de la mort.
3. *Une dénonciation implicite* : le contraste entre la vie de la nature et la mort du jeune homme rend la guerre absurde et scandaleuse ; le poète ne commente pas : la composition seule accuse.

**Conclusion**
*Bilan* : Rimbaud dissimule la mort derrière un paysage idyllique pour mieux surprendre le lecteur ; la chute du sonnet transforme le tableau en un réquisitoire silencieux contre la guerre.
*Ouverture* : On peut rapprocher ce poème de « Le Mal », autre sonnet de Rimbaud contre la guerre, ou, au XXe siècle, des poèmes d'Apollinaire dans *Calligrammes*, qui disent aussi l'horreur de la guerre.` }
      ]
    },
    {
      id: "dissertation",
      titre: "Méthode : la dissertation sur œuvre",
      theme: "Méthodes de l'écrit",
      cours: `
## L'exercice
La **dissertation** porte sur une **œuvre au programme** et son **parcours** associé. **Trois sujets** sont proposés, chacun en rapport avec l'une des œuvres du programme et son parcours : tu choisis celui qui correspond à l'œuvre étudiée en classe. Tu dois **répondre à une question** de façon argumentée, organisée, en t'appuyant sur l'œuvre (d'abord), sur les textes du parcours et sur ta culture littéraire.

## Étape 1 : analyser le sujet (environ 30 minutes)
1. **Souligne les mots-clés** et définis-les (sens précis, connotations).
2. Repère la **forme** du sujet : question fermée (« Peut-on dire que... ? »), citation à discuter, question ouverte (« Comment... ? », « Dans quelle mesure... ? »).
3. Repère les **mots qui restreignent** ou absolutisent : « seulement », « toujours », « ne... que », « uniquement ».
4. Reformule le sujet et dégage le **paradoxe** ou la **tension** qu'il contient : c'est ta **problématique**.

>! **Exemple** : « Le personnage de roman n'est-il qu'un reflet de la société ? » Mots-clés : *personnage* (être de fiction), *reflet* (image fidèle, passive), *n'... que* (restriction à discuter). Problématique : le personnage se contente-t-il de représenter fidèlement la société de son temps, ou possède-t-il une existence et une portée qui la dépassent ?

## Étape 2 : chercher des idées et des exemples
- Liste des arguments **pour** et **contre** la thèse du sujet.
- Pour chaque argument, trouve un **exemple précis** : un passage, un personnage, une scène, une citation de l'œuvre au programme. Complète avec le **parcours** et d'autres œuvres.
- Prépare des **citations** courtes que tu sais par cœur.

## Étape 3 : choisir un plan
| Plan | Quand ? | Structure |
|---|---|---|
| **dialectique** | sujet qui appelle un débat (question fermée, citation à discuter) | I. Oui (thèse du sujet) ; II. Mais (limites, antithèse) ; III. Dépassement (une réponse plus nuancée) |
| **analytique** | sujet « comment / pourquoi » | I. causes ou manifestations ; II. conséquences ou enjeux ; III. portée |
| **thématique** | sujet « quelles sont les fonctions / les formes de... » | I, II, III : trois aspects complémentaires |

>! **Attention** : la 3e partie dialectique n'est pas un résumé des deux premières ni « un peu des deux » : elle propose un **nouveau point de vue** qui dépasse l'opposition.

## Étape 4 : rédiger
**Introduction** (rédigée au brouillon) :
1. **Amorce** (une phrase de contexte, une citation, un fait littéraire) ;
2. **Citation ou présentation du sujet** et **analyse** des termes ;
3. **Problématique** ;
4. **Annonce du plan**.

**Développement** : chaque partie commence par une phrase qui annonce l'idée ; chaque **paragraphe** = un **argument** + un **exemple analysé** (pas seulement cité) + un **lien** avec la problématique. Transitions entre les parties.

**Conclusion** : bilan (réponse nette à la question) + ouverture.

## Les exemples : la clé de la réussite
Un bon exemple est **précis** (scène, chapitre, personnage, citation) et **analysé** : explique en quoi il prouve ton argument. L'œuvre au programme doit être au **centre** de ta copie.

## Les erreurs à éviter
- le **hors-sujet** (réciter un cours sans répondre à la question) ;
- le **catalogue d'exemples** sans argument ;
- le **résumé** de l'œuvre ;
- un plan qui ne répond pas à la problématique ;
- l'absence de conclusion (garde 15 minutes).

## Gestion du temps (4 heures)
| Étape | Temps |
|---|---|
| analyse du sujet et problématique | 30 min |
| recherche d'idées et plan détaillé | 1 h |
| rédaction de l'introduction et de la conclusion au brouillon | 20 min |
| rédaction au propre | 1 h 50 |
| relecture | 20 min |

> **À retenir**
> Analyser les mots du sujet → problématique → plan (dialectique, analytique, thématique).
> Paragraphe = argument + exemple précis et analysé.
> L'œuvre au programme est au cœur de la copie ; le parcours et la culture personnelle viennent en appui.
`,
      exercices: [
        { type: "qcm", question: "Quel plan convient le mieux au sujet « Le théâtre doit-il seulement divertir ? »", choix: ["Un plan thématique sans discussion", "Un plan dialectique", "Un plan chronologique de la pièce", "Un résumé de l'œuvre"], reponse: 1, explication: "La question fermée avec « seulement » invite à discuter : oui le théâtre divertit, mais il a d'autres fonctions, et ces fonctions se rejoignent (dépassement)." },
        { type: "vf", question: "Dans une dissertation, la troisième partie d'un plan dialectique doit simplement résumer les deux premières.", reponse: false, explication: "La troisième partie propose un dépassement : un nouveau point de vue qui résout ou reformule la tension, pas un résumé." },
        { type: "qcm", question: "Dans le sujet « Le roman n'est-il qu'un divertissement ? », quel mot doit retenir ton attention en priorité ?", choix: ["« roman »", "« est »", "« le »", "« ne... que »"], reponse: 3, explication: "La restriction « ne... que » (seulement) est le cœur du débat : il faut montrer que le roman divertit, mais pas seulement." },
        { type: "saisie", question: "Sur quoi la dissertation du bac porte-t-elle obligatoirement ? (une œuvre au programme et son ...)", reponses: ["parcours", "son parcours", "parcours associé", "parcours associe"], explication: "La dissertation porte sur une œuvre au programme et son **parcours associé**." },
        { type: "vf", question: "Un bon exemple de dissertation est précis et analysé en lien avec l'argument.", reponse: true, explication: "Il ne suffit pas de citer un titre : il faut évoquer une scène, un passage, une citation, et montrer en quoi il prouve l'idée." },
        { type: "qcm", question: "Quel est le défaut d'un paragraphe qui raconte l'intrigue de l'œuvre sans la relier à la question ?", choix: ["C'est un résumé hors sujet", "C'est une bonne transition", "C'est une problématique", "C'est une ouverture"], reponse: 0, explication: "Le résumé n'argumente pas : il faut toujours relier l'exemple à l'argument et à la problématique." },
        { type: "redaction", question: "**Sujet type bac (dissertation sur œuvre, exemple classique : *Le Malade imaginaire* de Molière, parcours « Spectacle et comédie »)** : « La comédie ne fait-elle que rire du spectateur ? » — Choisis une comédie de Molière que tu connais et rédige l'introduction complète, le plan détaillé et la conclusion. (Rappel : l'œuvre au programme de ton année se vérifie sur eduscol.)", corrige: `*Corrigé proposé à partir du* Malade imaginaire *(1673) ; la méthode vaut pour toute comédie.*

**Introduction**
*Amorce* : Le 17 février 1673, Molière s'effondre sur scène lors de la quatrième représentation du *Malade imaginaire*, où il joue Argan, l'hypocondriaque ; il meurt quelques heures plus tard. Ironie tragique pour une comédie qui fait rire de la maladie et de la mort.
*Analyse du sujet* : la formulation, à première vue étrange, joue sur l'expression « rire du spectateur » : la comédie se moque-t-elle du spectateur lui-même, en lui tendant un miroir de ses défauts, ou cherche-t-elle seulement à le faire rire ? « Ne... que » invite à discuter cette restriction.
*Problématique* : la comédie de Molière se contente-t-elle de provoquer le rire, ou ce rire, qui vise aussi le spectateur à travers les personnages, a-t-il une portée critique et morale ?
*Annonce du plan* : nous verrons d'abord que la comédie est un spectacle conçu pour faire rire, puis que ce rire vise les travers du spectateur pour les corriger, enfin qu'il est un moyen de célébrer le théâtre et la vie face à la peur de la mort.

**I. La comédie est d'abord une machine à faire rire**
1. Le comique de gestes et de situation : Argan et ses lavements, la scène du faux médecin Toinette déguisée (III, 8-10), le stratagème de la fausse mort d'Argan (III, 12-14).
2. Le comique de mots : jargon latin des médecins, noms ridicules (Diafoirus, Purgon, Fleurant), la tirade de Thomas Diafoirus.
3. Le spectacle total : comédie-ballet avec intermèdes, musique, danse ; cérémonie burlesque finale.

**II. Mais ce rire vise le spectateur lui-même : corriger les mœurs**
1. Le spectateur se reconnaît dans les travers des personnages : peur de la maladie, crédulité, égoïsme d'Argan qui veut marier sa fille à un médecin.
2. La satire de la médecine et des charlatans : Diafoirus, Purgon ; Béralde (III, 3) critique une médecine qui ignore la nature.
3. Le « castigat ridendo mores » : le rire est une arme morale (premier placet de *Tartuffe* : « corriger les hommes en les divertissant »).

**III. Plus profondément, le rire est une manière d'affronter la condition humaine**
1. Rire de la peur de la mort : la fausse mort révèle les vrais sentiments (Béline / Angélique) ; le rire libère de l'angoisse.
2. Une célébration du théâtre : le jeu, le déguisement, la cérémonie finale où Argan devient médecin : l'illusion théâtrale comme remède.
3. Une réflexion sur le spectacle et le spectateur : le parcours « Spectacle et comédie » montre que la comédie joue avec le public, le fait participer et réfléchir à sa propre crédulité.

**Conclusion**
*Bilan* : la comédie de Molière fait rire, mais ce rire n'est jamais gratuit : il tend un miroir au spectateur, critique les impostures et aide à affronter la peur de la maladie et de la mort.
*Ouverture* : au XXe siècle, Ionesco poursuit cette réflexion en faisant rire de l'absurdité de la condition humaine (*Le roi se meurt*, 1962).` }
      ]
    },
    {
      id: "explication-lineaire",
      titre: "Méthode : l'explication linéaire à l'oral",
      theme: "Méthodes de l'oral",
      cours: `
## Le déroulement de l'oral (1re partie, 12 points)
1. Tu as **30 minutes de préparation** pour un texte tiré de ton récapitulatif (et la question de grammaire).
2. Devant l'examinateur (environ 12 minutes au total pour la 1re partie) :
   - **introduction** et **lecture expressive** du texte ;
   - **explication linéaire** ;
   - **conclusion** ;
   - réponse à la **question de grammaire**.

## Qu'est-ce qu'une explication linéaire ?
Tu expliques le texte **dans l'ordre**, du début à la fin, **mouvement par mouvement**, en montrant comment le sens se construit progressivement. À la différence du commentaire, tu suis le fil du texte ; mais ce n'est pas une paraphrase : chaque remarque doit **analyser** un procédé et l'**interpréter** au service d'un **projet de lecture**.

## L'introduction (environ 1 à 2 minutes)
1. **Situation** : auteur, œuvre, date, mouvement, place de l'extrait dans l'œuvre (ce qui précède).
2. **Lecture expressive** du texte (souvent placée après la présentation).
3. **Projet de lecture** (problématique) : ce que l'explication va montrer.
4. **Mouvements** du texte : 2 à 4 étapes, délimitées précisément (vers 1 à 4, lignes 5 à 12...).

>! **Exemple** : « Ce poème, “Demain, dès l'aube” (Hugo, *Les Contemplations*, 1856), semble raconter une marche vers un rendez-vous amoureux ; mais le dernier vers révèle qu'il s'agit d'un pèlerinage sur la tombe de Léopoldine. Nous verrons comment Hugo transforme un voyage apparemment amoureux en un hommage funèbre. Le texte se compose de trois mouvements : la détermination du départ (strophe 1), la marche indifférente au monde (strophe 2), l'arrivée sur la tombe (strophe 3). »

## La lecture expressive
Elle est **notée** (environ 2 points). Lis **lentement**, **à voix haute et claire**, en respectant la ponctuation et, en poésie, les **e muets** qui se prononcent devant consonne, les **liaisons** et les **diérèses**. Montre que tu comprends le texte : ton adapté (lyrique, ironique, tragique), sans surjouer.

## L'explication (environ 7 à 8 minutes)
Pour chaque mouvement :
- annonce le mouvement et son idée principale ;
- avance **phrase par phrase** ou **vers par vers**, en **citant** et en **analysant** : lexique, figures, syntaxe, temps verbaux, rythme, sonorités, énonciation ;
- relie toujours l'analyse au **projet de lecture** ;
- fais une courte **transition** vers le mouvement suivant.

Formule utile : « Au vers 5, l'image paradoxale “les yeux fixés sur mes pensées” montre que... ».

## La conclusion (environ 1 minute)
- **Bilan** : réponse au projet de lecture.
- **Ouverture** : lien avec un autre texte de l'œuvre ou du parcours, une autre œuvre, un tableau, un film.

## Conseils pour réussir
- **Ne lis pas tes notes** : regarde l'examinateur ; prépare des notes sous forme de mots-clés, au brouillon, avec le texte annoté.
- **Gère ton temps** : n'expédie pas la fin du texte (souvent la plus riche).
- Utilise un **vocabulaire précis** d'analyse.
- Montre ton **interprétation personnelle**, fondée sur le texte.

> **À retenir**
> 30 min de préparation ; environ 12 min pour lecture + explication + grammaire.
> Introduction : situation, lecture, projet de lecture, mouvements.
> Explication dans l'ordre du texte, mouvement par mouvement : citer → analyser → interpréter.
> Conclusion : bilan + ouverture. Regarde l'examinateur, gère ton temps.
`,
      exercices: [
        { type: "qcm", question: "Combien de temps de préparation as-tu à l'oral du bac de français ?", choix: ["10 minutes", "20 minutes", "30 minutes", "1 heure"], reponse: 2, explication: "Tu disposes de 30 minutes pour préparer l'explication linéaire et la question de grammaire." },
        { type: "vf", question: "L'explication linéaire suit l'ordre du texte, mouvement par mouvement.", reponse: true, explication: "C'est sa définition : on explique le texte du début à la fin, en le découpant en mouvements." },
        { type: "qcm", question: "Quelle est la principale différence entre l'explication linéaire et le commentaire ?", choix: ["L'explication linéaire ne cite pas le texte", "L'explication suit l'ordre du texte, le commentaire est organisé en axes thématiques", "Le commentaire est oral", "L'explication ne comporte pas de problématique"], reponse: 1, explication: "Les deux exercices ont un projet de lecture, mais l'explication suit le fil du texte alors que le commentaire regroupe les analyses en axes." },
        { type: "saisie", question: "Comment appelle-t-on les grandes étapes dans lesquelles on découpe le texte pour l'explication linéaire ?", reponses: ["mouvements", "les mouvements", "des mouvements", "mouvement"], explication: "On découpe le texte en 2 à 4 **mouvements**, délimités précisément (lignes ou vers)." },
        { type: "vf", question: "La lecture expressive du texte n'est pas évaluée à l'oral.", reponse: false, explication: "La lecture fait partie de la première partie de l'épreuve et est notée (environ 2 points)." },
        { type: "qcm", question: "Quel est le défaut principal à éviter pendant l'explication ?", choix: ["Citer le texte", "Nommer les procédés", "Relier les remarques au projet de lecture", "Paraphraser le texte sans l'analyser"], reponse: 3, explication: "La paraphrase redit le texte sans l'analyser : chaque remarque doit nommer un procédé et l'interpréter." },
        { type: "redaction", question: "**Exercice type oral** : Prépare l'introduction et l'explication linéaire (mouvement par mouvement, sous forme de notes rédigées) du poème de Victor Hugo : « Demain, dès l'aube, à l'heure où blanchit la campagne, / Je partirai. Vois-tu, je sais que tu m'attends. / J'irai par la forêt, j'irai par la montagne. / Je ne puis demeurer loin de toi plus longtemps. // Je marcherai les yeux fixés sur mes pensées, / Sans rien voir au dehors, sans entendre aucun bruit, / Seul, inconnu, le dos courbé, les mains croisées, / Triste, et le jour pour moi sera comme la nuit. // Je ne regarderai ni l'or du soir qui tombe, / Ni les voiles au loin descendant vers Harfleur, / Et quand j'arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » (*Les Contemplations*, 1856)", corrige: `**Introduction**
*Situation* : Victor Hugo, chef de file du romantisme, perd sa fille Léopoldine, noyée dans la Seine à Villequier en 1843. *Les Contemplations* (1856) sont organisées autour de ce deuil (« Autrefois » / « Aujourd'hui »). Ce poème, daté symboliquement du 3 septembre 1847, veille de l'anniversaire de sa mort, figure dans le livre IV, « Pauca meae ».
*Lecture expressive.*
*Projet de lecture* : comment Hugo fait-il d'un poème qui ressemble à l'annonce d'un rendez-vous amoureux un hommage funèbre bouleversant ?
*Mouvements* : 1) strophe 1 : la détermination du départ ; 2) strophe 2 : une marche coupée du monde ; 3) strophe 3 : l'arrivée sur la tombe.

**Mouvement 1 (v. 1-4) : un départ résolu vers un être aimé**
- « Demain, dès l'aube » : indicateurs temporels en tête de poème, précision qui traduit l'impatience ; « blanchit » : lumière naissante.
- Futur de certitude : « Je partirai », « J'irai » ; le rejet de « Je partirai » (phrase courte en début de vers 2) marque la résolution.
- Apostrophe et tutoiement : « Vois-tu, je sais que tu m'attends » : dialogue avec un « tu » mystérieux, intimité amoureuse apparente : le lecteur est volontairement trompé.
- Anaphore et parallélisme « J'irai par la forêt, j'irai par la montagne » : rythme binaire, obstination, aucun obstacle n'arrêtera le poète.
- v. 4 : « Je ne puis demeurer loin de toi plus longtemps » : la séparation est insupportable ; « demeurer » annonce peut-être la « demeure » finale.

**Mouvement 2 (v. 5-8) : une marche intérieure, indifférente au monde**
- « les yeux fixés sur mes pensées » : image paradoxale (on fixe des pensées et non des objets) : le voyage est intérieur.
- Négations « sans rien voir », « sans entendre aucun bruit » : refus des sensations, du monde extérieur.
- Rythme haché du v. 7 : « Seul, inconnu, le dos courbé, les mains croisées » : énumération qui dessine la posture d'un homme accablé, presque en prière (« les mains croisées »).
- v. 8 : « Triste », mis en relief en tête de vers ; comparaison « le jour pour moi sera comme la nuit » : antithèse jour/nuit, le deuil abolit la lumière.

**Mouvement 3 (v. 9-12) : l'arrivée et la révélation**
- « Je ne regarderai ni l'or du soir qui tombe, / Ni les voiles au loin descendant vers Harfleur » : beauté du paysage refusée (« ni... ni ») ; « l'or du soir qui tombe » : le soir répond à l'aube du v. 1 — une journée entière de marche ; le verbe « tombe » rime avec « tombe » (v. 11).
- Chute : « je mettrai sur ta tombe » : le mot « tombe » révèle enfin que le « tu » est une morte ; tout le poème se relit autrement.
- Dernier vers : « Un bouquet de houx vert et de bruyère en fleur » : offrande simple ; le houx toujours vert (fidélité, éternité) et la bruyère en fleur (vie) : le souvenir maintient l'enfant vivante.

**Conclusion**
*Bilan* : par une construction qui retarde la révélation jusqu'au dernier vers, Hugo transforme l'élan amoureux en pèlerinage funèbre ; le poème exprime un deuil vécu comme une fidélité indéfectible, registre lyrique et élégiaque.
*Ouverture* : on peut rapprocher ce poème de « À Villequier », dans le même recueil, où Hugo s'adresse à Dieu, ou de « Le Dormeur du val » de Rimbaud, autre poème à chute qui révèle une mort.` }
      ]
    },
    {
      id: "grammaire-interrogation-negation",
      titre: "Grammaire du bac : l'interrogation et la négation",
      theme: "Grammaire du bac",
      cours: `
## La question de grammaire à l'oral
Elle porte sur une **phrase ou un court passage** du texte que tu expliques. Elle vaut **2 points**. Tu dois **identifier**, **analyser** avec un vocabulaire précis, et parfois **interpréter** l'effet. Le texte officiel précise qu'elle vise l'**analyse syntaxique d'une courte phrase ou d'une partie de phrase**. Les notions du programme de 1re : l'**interrogation**, la **négation**, les **subordonnées conjonctives circonstancielles** ; les notions de 2de (accords, valeurs des temps et des modes, relations au sein de la phrase complexe : relatives, complétives...) peuvent aussi être mobilisées.

## L'interrogation
### Interrogation totale ou partielle
- **Totale** : elle porte sur l'ensemble de la phrase ; on répond par **oui / non / si** : « Viens-tu ? »
- **Partielle** : elle porte sur un élément, introduit par un **mot interrogatif** : pronom (*qui, que, quoi, lequel*), déterminant (*quel*), adverbe (*où, quand, comment, pourquoi, combien*) : « Où vas-tu ? »

### Interrogation directe ou indirecte
- **Directe** : phrase de type interrogatif, avec un point d'interrogation : « Viendra-t-il ? »
- **Indirecte** : la question est intégrée dans une **subordonnée interrogative indirecte**, souvent COD d'un verbe comme *demander, se demander, savoir, ignorer* ; pas de point d'interrogation, pas d'inversion du sujet : « Je me demande **s'il viendra** » (totale, introduite par *si*) ; « Je me demande **où il va** » (partielle).

### Les constructions de l'interrogation directe (et leur niveau de langue)
| Construction | Exemple | Niveau |
|---|---|---|
| **intonation** seule | Tu viens ? | familier / oral |
| **est-ce que** | Est-ce que tu viens ? | courant |
| **inversion simple** du pronom sujet | Viens-tu ? | soutenu |
| **inversion complexe** : sujet nominal repris par un pronom | Pierre vient-il ? | soutenu |

Le **-t-** euphonique s'insère entre deux voyelles : « Viendra-t-il ? »

### Les valeurs (emplois)
- demande d'**information** (vraie question) ;
- **question rhétorique** (oratoire) : elle n'attend pas de réponse et équivaut à une affirmation forte : « N'ai-je donc tant vécu que pour cette infamie ? » = je n'ai pas vécu pour cela ;
- **délibération** : un personnage s'interroge lui-même (stances) ;
- **ordre ou demande atténuée** : « Pourriez-vous vous taire ? » ;
- expression d'une **émotion** (indignation, angoisse).

## La négation
### Les outils
La négation se forme le plus souvent avec l'**adverbe *ne*** + un **second élément** (forclusif) :
| Négation | Outils | Exemple |
|---|---|---|
| **totale** (porte sur toute la phrase) | ne... pas ; ne... point (soutenu, littéraire) | Je ne viendrai pas. |
| **partielle** (porte sur un élément : temps, personne, chose...) | ne... jamais, ne... plus, ne... rien, ne... personne, ne... aucun, ne... nulle part, ne... guère | Il ne voit personne. |
| **restrictive** (ou exceptive) — ce n'est pas une vraie négation | ne... que (= seulement) | Il n'aime que toi. |
| **coordination négative** | ni... ni, ne... ni... ni | Je ne regarderai ni l'or du soir... ni les voiles. |

- Les pronoms et déterminants *personne, rien, aucun, nul* peuvent être **sujets** : « **Personne** ne vient. »
- Avec un infinitif, les deux éléments se placent avant : « **ne pas** se pencher ».
- À l'oral familier, le *ne* disparaît souvent : « J'sais pas. »

### Le *ne* explétif
Il n'a **pas de valeur négative** ; il apparaît en langue soutenue après des verbes de crainte, *avant que*, *à moins que*, et dans les comparatives : « Je crains qu'il **ne** vienne » (= j'ai peur qu'il vienne).

### La négation lexicale
Elle passe par le vocabulaire : préfixes (*in-, im-, dé-, a-* : *inutile, impossible*), prépositions (*sans*), verbes (*refuser, nier*).

>! **Exemple de réponse** : « Analysez la négation dans : “Les parfums ne font pas frissonner sa narine” (Rimbaud). »
>! Réponse : il s'agit d'une **négation totale**, formée de l'adverbe *ne* et du forclusif *pas*, qui encadrent le verbe conjugué *font*. Elle porte sur l'ensemble du prédicat : le soldat ne réagit plus aux parfums. Cette négation est un **indice** de la mort du soldat, que le poème ne révèle qu'au dernier vers.

> **À retenir**
> Interrogation totale (oui/non) / partielle (mot interrogatif) ; directe (?) / indirecte (subordonnée, pas de ?).
> Intonation (familier), est-ce que (courant), inversion (soutenu).
> Négation totale (ne... pas), partielle (jamais, rien, personne...), restrictive (ne... que = seulement) ; ne explétif sans valeur négative.
> Toujours : identifier, analyser précisément, puis donner l'effet dans le texte.
`,
      exercices: [
        { type: "qcm", question: "« Où as-tu caché la lettre ? » est une interrogation :", choix: ["totale directe", "partielle directe", "totale indirecte", "partielle indirecte"], reponse: 1, explication: "Elle porte sur un élément (le lieu) introduit par l'adverbe interrogatif « où » : partielle ; elle a un point d'interrogation et une inversion : directe." },
        { type: "qcm", question: "« Je me demande s'il viendra » contient :", choix: ["une interrogation totale indirecte", "une interrogation partielle directe", "une subordonnée relative", "une subordonnée circonstancielle de condition"], reponse: 0, explication: "« s'il viendra » est une subordonnée interrogative indirecte, COD de « me demande » ; « si » introduit une interrogation totale (réponse oui/non)." },
        { type: "vf", question: "Dans « Il n'aime que la musique », il s'agit d'une négation totale.", reponse: false, explication: "« ne... que » est une tournure **restrictive** (= il aime seulement la musique) : le sens n'est pas négatif." },
        { type: "saisie", question: "Comment appelle-t-on le « ne » de « Je crains qu'il ne pleuve », qui n'a pas de valeur négative ?", reponses: ["ne explétif", "explétif", "ne expletif", "expletif"], explication: "C'est le **ne explétif** : il apparaît après les verbes de crainte, « avant que », « à moins que » ; il n'exprime pas la négation." },
        { type: "qcm", question: "Quelle construction de l'interrogation relève du niveau de langue soutenu ?", choix: ["Tu pars ?", "Est-ce que tu pars ?", "Tu pars quand ?", "Pars-tu ?"], reponse: 3, explication: "L'inversion du pronom sujet (« Pars-tu ? ») est soutenue ; l'intonation est familière, « est-ce que » courant." },
        { type: "vf", question: "Une question rhétorique n'attend pas de réponse et équivaut à une affirmation.", reponse: true, explication: "Par exemple, « Qui ne connaît ce poème ? » signifie « Tout le monde connaît ce poème »." },
        { type: "saisie", question: "Dans « Personne ne l'a vu », quelle est la fonction de « personne » ?", reponses: ["sujet", "sujet du verbe", "sujet de a vu", "sujet du verbe a vu"], explication: "« Personne » est un pronom indéfini négatif, **sujet** du verbe « a vu » ; il forme avec « ne » une négation partielle." },
        { type: "qcm", question: "Dans « Je ne regarderai ni l'or du soir qui tombe, / Ni les voiles au loin » (Hugo), la négation est :", choix: ["restrictive", "explétive", "une coordination négative (ne... ni... ni)", "lexicale"], reponse: 2, explication: "« ni... ni » coordonne deux COD niés : le poète refuse la beauté du paysage." },
        { type: "redaction", question: "**Question de grammaire type bac** : Analysez l'interrogation dans ces vers de Corneille : « N'ai-je donc tant vécu que pour cette infamie ? / Et ne suis-je blanchi dans les travaux guerriers / Que pour voir en un jour flétrir tant de lauriers ? » (*Le Cid*, I, 4)", corrige: `**Identification**
Deux phrases de type **interrogatif**, en **interrogation directe** (point d'interrogation).

**Analyse**
- Il s'agit d'**interrogations totales** : elles portent sur l'ensemble de la phrase et appelleraient une réponse par oui ou non ; aucun mot interrogatif ne les introduit.
- Construction : **inversion simple du pronom sujet** « ai-je », « suis-je » (trait d'union), construction de **niveau soutenu**, conforme au style tragique.
- Elles sont combinées avec la tournure **restrictive** « ne... que » (« n'ai-je... que pour », « ne suis-je blanchi... que pour ») : *ai-je vécu seulement pour cette infamie ?* — c'est une interro-négative restrictive.

**Interprétation (valeur)**
Ce sont des **questions rhétoriques** : Don Diègue, seul en scène, n'attend aucune réponse. Elles expriment son **désespoir** et son **indignation** : toute sa vie glorieuse semble n'avoir abouti qu'à la honte du soufflet reçu. La forme interrogative, associée aux exclamations du vers précédent (« Ô rage ! ô désespoir ! »), traduit le **pathétique** de la situation.` }
      ]
    },
    {
      id: "grammaire-subordonnees",
      titre: "Grammaire du bac : les propositions subordonnées",
      theme: "Grammaire du bac",
      cours: `
## Rappels : la phrase complexe
Une **proposition** s'organise autour d'un verbe conjugué. Les propositions peuvent être **juxtaposées** (ponctuation), **coordonnées** (conjonction de coordination) ou **subordonnées** : la subordonnée dépend d'une **proposition principale** (ou d'un élément de celle-ci) et est introduite par un **mot subordonnant** (sauf l'infinitive et la participiale).

Pour analyser une subordonnée, donne toujours : **sa nature** (relative, conjonctive complétive, interrogative indirecte, circonstancielle...), **le mot qui l'introduit**, **sa fonction**, et éventuellement **le mode** du verbe et son **effet**.

## 1. Les subordonnées relatives
Introduites par un **pronom relatif** : *qui, que, quoi, dont, où, lequel* (et composés : *auquel, duquel...*).
- **Relative adjective** : elle complète un nom ou un pronom, son **antécédent** ; fonction : **complément de l'antécédent** (expansion du nom).
  - **Déterminative** (restrictive) : indispensable au sens, sans virgules : « Les élèves *qui ont révisé* réussiront » (seulement ceux-là).
  - **Explicative** (appositive) : supprimable, entre virgules, apporte une précision : « Les élèves, *qui ont révisé*, réussiront » (tous ont révisé).
- **Relative substantive** (sans antécédent) : elle a une fonction de groupe nominal : « *Qui vivra* verra » (sujet).

Le **pronom relatif** a une fonction **dans la relative** : *qui* sujet, *que* COD ou attribut, *dont* complément introduit par *de* (COI, complément du nom, de l'adjectif), *où* complément de lieu ou de temps.

>! « La ville *où je suis né* » : relative adjective déterminative, introduite par « où », complément de l'antécédent « ville » ; « où » est complément circonstanciel de lieu de « suis né ».

## 2. Les subordonnées complétives
Elles occupent une place de **complément essentiel** (souvent COD) ou de sujet.
- **Conjonctive complétive** introduite par **que** : « Je sais *que tu viendras* » (COD) ; « *Qu'il vienne* me surprend » (sujet) ; « Le problème est *qu'il ment* » (attribut) ; « Je suis heureux *que tu sois là* » (complément de l'adjectif).
  - **Mode** : indicatif après les verbes de déclaration, d'opinion, de certitude ; **subjonctif** après les verbes de volonté, de souhait, de crainte, de sentiment, de doute.
- **Interrogative indirecte** : introduite par *si* ou un mot interrogatif, COD d'un verbe de questionnement (voir chapitre précédent).
- **Infinitive** : verbe à l'infinitif avec son propre sujet, après un verbe de perception (*voir, entendre, sentir*) ou *laisser, faire* : « J'entends *les oiseaux chanter* » (COD).

>! **Piège** : « que » conjonction (complétive, sans antécédent) ≠ « que » pronom relatif (avec antécédent) : « Je crois *que* tu as raison » / « Le livre *que* je lis ».

## 3. Les subordonnées circonstancielles
Introduites par une **conjonction (ou locution conjonctive) de subordination** ; fonction : **complément circonstanciel** (ou complément de phrase), le plus souvent déplaçable et supprimable.

| Circonstance | Subordonnants | Mode |
|---|---|---|
| **temps** | quand, lorsque, dès que, pendant que, après que / avant que, jusqu'à ce que | indicatif ; **subjonctif** après *avant que, jusqu'à ce que, en attendant que* |
| **cause** | parce que, puisque, comme, étant donné que, vu que | indicatif |
| **conséquence** | si bien que, de sorte que, si... que, tellement... que, au point que | indicatif |
| **but** | pour que, afin que, de peur que | subjonctif |
| **concession / opposition** | bien que, quoique, même si, alors que, tandis que | subjonctif (bien que, quoique) ; indicatif (même si, alors que) |
| **condition / hypothèse** | si, à condition que, pourvu que, au cas où | indicatif après *si* ; subjonctif après *à condition que, pourvu que* ; conditionnel après *au cas où* |
| **comparaison** | comme, ainsi que, de même que, plus... que | indicatif |

>! **Le système hypothétique avec « si »** : si + présent → futur (« S'il pleut, je resterai ») ; si + imparfait → conditionnel présent (potentiel ou irréel du présent) ; si + plus-que-parfait → conditionnel passé (irréel du passé).

## 4. La subordonnée participiale
Verbe au participe avec son **propre sujet**, sans subordonnant ; fonction de complément circonstanciel (temps, cause...) : « *Le soleil s'étant levé*, les voyageurs partirent. »

## Méthode pour la question de grammaire
1. **Délimite** précisément la subordonnée (du subordonnant au dernier mot).
2. Donne sa **nature** et son **subordonnant**.
3. Donne sa **fonction** (par rapport à quel mot ou quelle proposition).
4. Précise le **mode** et, si possible, son **rôle dans le texte** (effet de sens).

> **À retenir**
> Relative : pronom relatif + antécédent ; déterminative (sans virgules) / explicative (entre virgules) ; complément de l'antécédent.
> Complétive : « que » sans antécédent, souvent COD ; ou interrogative indirecte ; ou infinitive.
> Circonstancielle : conjonction de subordination ; temps, cause, conséquence, but, concession, condition, comparaison ; attention au mode (but et concession → subjonctif).
`,
      exercices: [
        { type: "qcm", question: "Dans « Le livre que tu m'as prêté est passionnant », « que tu m'as prêté » est :", choix: ["une conjonctive complétive", "une circonstancielle de but", "une relative adjective", "une interrogative indirecte"], reponse: 2, explication: "« que » reprend l'antécédent « livre » : pronom relatif, relative adjective (déterminative), complément de l'antécédent. « que » y est COD de « as prêté »." },
        { type: "qcm", question: "Dans « Je souhaite que tu réussisses », la subordonnée est :", choix: ["conjonctive complétive, COD de « souhaite », au subjonctif", "relative, complément de l'antécédent", "circonstancielle de but", "interrogative indirecte"], reponse: 0, explication: "« que » n'a pas d'antécédent : c'est une conjonction ; la subordonnée est COD de « souhaite » ; le subjonctif est appelé par un verbe de souhait." },
        { type: "saisie", question: "Quel mode emploie-t-on après « bien que » ?", reponses: ["subjonctif", "le subjonctif"], explication: "« Bien que » (concession) est suivi du **subjonctif** : « Bien qu'il soit fatigué, il continue »." },
        { type: "vf", question: "Dans « Les invités, qui étaient fatigués, partirent tôt », la relative est explicative.", reponse: true, explication: "Elle est encadrée de virgules et peut être supprimée sans changer l'identité des invités : elle apporte une précision (tous étaient fatigués). C'est une relative explicative (appositive)." },
        { type: "qcm", question: "« Il travaille pour que ses enfants vivent mieux » : la subordonnée exprime :", choix: ["la cause", "la conséquence", "la concession", "le but"], reponse: 3, explication: "« pour que » introduit une circonstancielle de but, au subjonctif (« vivent »)." },
        { type: "saisie", question: "Dans « J'entends les vagues gronder », comment s'appelle la subordonnée « les vagues gronder » ?", reponses: ["proposition subordonnée infinitive", "subordonnée infinitive", "proposition infinitive", "infinitive", "proposition subordonnee infinitive", "subordonnee infinitive"], explication: "C'est une **subordonnée infinitive** : verbe à l'infinitif (« gronder ») avec son propre sujet (« les vagues »), COD du verbe de perception « entends »." },
        { type: "qcm", question: "« Si j'avais su, je serais venu » exprime :", choix: ["un potentiel", "l'irréel du passé", "l'irréel du présent", "une simple condition réalisable dans le futur"], reponse: 1, explication: "Si + plus-que-parfait → conditionnel passé : la condition ne s'est pas réalisée dans le passé (irréel du passé)." },
        { type: "vf", question: "Le pronom relatif « dont » peut représenter un complément introduit par la préposition « de ».", reponse: true, explication: "« Le livre dont je parle » = je parle de ce livre : « dont » est COI de « parle »." },
        { type: "redaction", question: "**Question de grammaire type bac** : Relevez et analysez les propositions subordonnées dans ces vers de Hugo : « Et quand j'arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. » et dans la phrase : « Vois-tu, je sais que tu m'attends. »", corrige: `**Phrase 1 : « Et quand j'arriverai, je mettrai sur ta tombe / Un bouquet de houx vert et de bruyère en fleur. »**
- Proposition principale : « je mettrai sur ta tombe un bouquet de houx vert et de bruyère en fleur ».
- Subordonnée : « **quand j'arriverai** » : proposition subordonnée **conjonctive circonstancielle de temps**, introduite par la conjonction de subordination « quand » ; elle est **complément circonstanciel de temps** du verbe « mettrai » (déplaçable, supprimable). Verbe à l'**indicatif futur**, en concordance avec le futur de la principale : les deux actions sont envisagées comme certaines et quasi simultanées.
- *Effet* : la subordonnée retarde l'arrivée du mot « tombe » à la rime ; la certitude du futur exprime la fidélité inébranlable du père.

**Phrase 2 : « Vois-tu, je sais que tu m'attends. »**
- « Vois-tu » : proposition incise (juxtaposée), interrogation totale directe à valeur d'interpellation (apostrophe affectueuse), sans réelle attente de réponse.
- Proposition principale : « je sais ».
- Subordonnée : « **que tu m'attends** » : proposition subordonnée **conjonctive complétive**, introduite par la conjonction « que » (sans antécédent), **COD** du verbe « sais ». Verbe à l'**indicatif présent**, appelé par un verbe de certitude (« savoir »).
- *Effet* : la complétive au présent exprime une certitude qui rend la défunte présente, comme si elle attendait réellement son père : le poète entretient l'illusion d'un rendez-vous amoureux.` }
      ]
    },
    {
      id: "entretien-oral",
      titre: "Méthode : présenter l'œuvre choisie et réussir l'entretien",
      theme: "Méthodes de l'oral",
      cours: `
## La seconde partie de l'oral (8 points, environ 8 minutes)
Après l'explication et la question de grammaire, tu **présentes une œuvre que tu as choisie** parmi celles étudiées en classe ou proposées par ton professeur au titre des lectures cursives obligatoires (elle figure dans la partie individuelle de ton récapitulatif). Tu as ton exemplaire avec toi : des passages surlignés et quelques annotations non rédigées sont tolérés. L'examinateur engage ensuite un **entretien** avec toi.

Ce n'est **pas** une nouvelle explication de texte : on évalue ta capacité à **rendre compte d'une lecture personnelle**, à **justifier tes choix** et à **dialoguer**.

## Préparer la présentation (en amont, pendant l'année)
Construis une présentation d'**environ 2 à 3 minutes** :
1. **Présentation de l'œuvre** : titre, auteur, date, genre, mouvement, en quelques phrases.
2. **Les raisons de ton choix** : ce qui t'a touché, surpris, fait réfléchir — de façon **précise et argumentée** (un personnage, une scène, un thème, une forme d'écriture).
3. **Un ou deux passages** marquants que tu peux évoquer précisément, avec une ou deux citations.
4. **Les liens** avec l'objet d'étude, le parcours, d'autres œuvres, d'autres arts (adaptation au cinéma, mise en scène, tableau), ou l'actualité.

>! **Exemple** : « J'ai choisi *Les Fausses Confidences* de Marivaux (1737). Ce qui m'a frappé, c'est que tout l'amour d'Araminte naît d'un mensonge organisé par le valet Dubois. Je trouve passionnante cette idée qu'on peut faire naître un sentiment par la parole : la scène où Dubois prétend révéler malgré lui l'amour de Dorante (I, 14) montre une manipulation brillante. Cela m'a fait réfléchir à la sincérité : un amour né d'une ruse peut-il être vrai ? J'ai aussi vu une captation de la mise en scène de Luc Bondy... »

## Pendant l'entretien
L'examinateur te pose des questions pour **approfondir** : pourquoi ce choix ? Que penses-tu de tel personnage ? Quel lien avec le parcours ? Aurais-tu aimé une autre fin ? As-tu lu d'autres œuvres de l'auteur ?
- **Écoute** la question jusqu'au bout ; prends une seconde pour réfléchir.
- **Réponds précisément**, en t'appuyant sur des **exemples** de l'œuvre.
- **Développe** : une réponse de deux mots ne suffit pas ; ajoute un exemple ou une nuance.
- **Assume ton avis** tout en le justifiant ; tu peux nuancer ou même dire qu'un passage t'a moins plu, si tu l'expliques.
- Si tu ne sais pas, dis-le honnêtement et propose une piste de réflexion.

## Les critères d'évaluation
- connaissance de l'œuvre ;
- qualité de l'**engagement personnel** dans la lecture ;
- capacité à **argumenter** et à établir des **liens** ;
- qualité de l'**expression orale** (clarté, correction, registre adapté) et de l'**échange**.

## Expressions utiles
- « Ce qui m'a d'abord frappé, c'est... »
- « Cette scène me semble essentielle parce que... »
- « Je rapprocherais ce passage de... »
- « Je nuancerais en disant que... »
- « À première vue..., mais en relisant, j'ai compris que... »

## Les erreurs à éviter
- réciter un résumé appris par cœur ;
- répondre par « oui », « non », « j'ai aimé » sans justifier ;
- ignorer le parcours ou l'objet d'étude ;
- employer un registre familier (« c'était trop bien », « genre »).

> **À retenir**
> 2e partie : 8 points, environ 8 minutes : présentation de l'œuvre choisie + entretien.
> Prépare : présentation de l'œuvre, raisons argumentées de ton choix, passages précis, liens.
> Pendant l'entretien : écoute, développe, justifie, assume un avis personnel nuancé.
`,
      exercices: [
        { type: "qcm", question: "Dans la seconde partie de l'oral, que fait le candidat ?", choix: ["Il explique un nouveau texte", "Il présente une œuvre choisie et dialogue avec l'examinateur", "Il répond à une seconde question de grammaire", "Il rédige une dissertation"], reponse: 1, explication: "Il présente l'œuvre qu'il a choisie parmi celles de son récapitulatif, puis l'examinateur engage un entretien." },
        { type: "vf", question: "Pendant l'entretien, il est préférable de réciter un résumé de l'œuvre appris par cœur.", reponse: false, explication: "On évalue une lecture personnelle et la capacité à dialoguer : un résumé récité est sans intérêt. Il faut justifier ses choix avec des exemples précis." },
        { type: "saisie", question: "Sur combien de points est notée la seconde partie de l'oral ? (en chiffres)", reponses: ["8", "huit", "8 points"], explication: "La seconde partie (présentation de l'œuvre choisie et entretien) est notée sur **8 points**." },
        { type: "qcm", question: "Quelle réponse est la plus adaptée à la question « Pourquoi avez-vous choisi cette œuvre ? »", choix: ["« Parce qu'elle était courte. »", "« Je ne sais pas trop, c'était trop bien. »", "« Parce que la scène de l'aveu m'a fait réfléchir à la sincérité : peut-on aimer quelqu'un grâce à un mensonge ? »", "« C'est le professeur qui l'a choisie. »"], reponse: 2, explication: "Une bonne réponse est précise (une scène), personnelle et ouverte sur une réflexion." },
        { type: "vf", question: "On peut exprimer un avis nuancé, voire une réserve, sur l'œuvre, à condition de le justifier.", reponse: true, explication: "L'examinateur attend un engagement personnel argumenté : une réserve justifiée vaut mieux qu'un enthousiasme vague." },
        { type: "qcm", question: "Lequel de ces éléments enrichit le plus la présentation ?", choix: ["Un lien avec le parcours et une autre œuvre ou mise en scène", "La biographie complète de l'auteur", "La liste de tous les personnages", "Le prix du livre"], reponse: 0, explication: "Les liens avec le parcours, d'autres œuvres ou d'autres arts montrent une culture et une réflexion personnelles." },
        { type: "redaction", question: "**Exercice type oral** : Rédige la présentation (environ 2 minutes à l'oral, une quinzaine de lignes) d'une œuvre que tu as aimée parmi celles du programme de 1re, en suivant la structure : présentation, raisons du choix, passage marquant, liens. (Corrigé proposé avec un exemple classique : *Les Fleurs du mal* de Baudelaire.)", corrige: `**Exemple de présentation : Baudelaire, *Les Fleurs du mal***

*Présentation* : J'ai choisi de présenter *Les Fleurs du mal* de Charles Baudelaire, recueil publié en 1857 et condamné la même année pour outrage à la morale publique. Il est organisé en sections, de « Spleen et Idéal » à « La Mort », ce qui dessine un véritable itinéraire.

*Raisons du choix* : ce qui m'a d'abord frappé, c'est l'idée que la beauté peut naître de la laideur : Baudelaire affirme transformer la « boue » en « or ». J'ai été surpris de trouver de la poésie dans des sujets comme une charogne ou la ville moderne. J'ai aussi été touché par la description du spleen, cet ennui profond qui me semble très moderne.

*Passage marquant* : le poème « Spleen » (« Quand le ciel bas et lourd pèse comme un couvercle ») m'a marqué : la comparaison du ciel avec un couvercle et les images d'enfermement font ressentir physiquement l'angoisse. À l'inverse, « L'Invitation au voyage » propose un idéal de beauté et de calme : « Là, tout n'est qu'ordre et beauté, / Luxe, calme et volupté. »

*Liens* : ce recueil fait le lien entre le romantisme et le symbolisme ; il annonce Verlaine et Rimbaud. J'ai pensé aussi aux tableaux de Delacroix, que Baudelaire admirait, et aux mises en musique de ses poèmes par Léo Ferré.

*Pour l'entretien, prépare des réponses à* : pourquoi ce titre paradoxal ? Quel poème t'a le moins plu et pourquoi ? Le procès de 1857 te paraît-il compréhensible ? Quel lien avec le parcours étudié en classe ?` }
      ]
    },
    {
      id: "oeuvres-programme-2027",
      titre: "Les œuvres au programme 2026-2027 (bac 2027)",
      theme: "Préparer le bac",
      cours: `
## Le programme national de l'année
Pour l'année 2026-2027 (épreuves anticipées de juin 2027, rattachées par les textes officiels à la session 2028 du bac), la note de service du 4 juillet 2025, publiée au Bulletin officiel n° 30 du 24 juillet 2025, fixe **douze œuvres** pour la voie générale, trois par objet d'étude. Ton professeur en choisit **une par objet d'étude** (soit quatre œuvres dans l'année), avec son **parcours**. Le programme est renouvelé par quart chaque année : par rapport à 2025-2026, seul l'objet d'étude **roman et récit** change ; les neuf autres œuvres sont maintenues.

| Objet d'étude | Œuvre | Parcours |
|---|---|---|
| Poésie | Rimbaud, *Cahier de Douai* | Émancipations créatrices |
| Poésie | Ponge, *La rage de l'expression* | Dans l'atelier du poète |
| Poésie | Hélène Dorion, *Mes forêts* | La poésie, la nature, l'intime |
| Littérature d'idées | La Boétie, *Discours de la servitude volontaire* | « Défendre » et « entretenir » la liberté |
| Littérature d'idées | Fontenelle, *Entretiens sur la pluralité des mondes* | Le goût de la science |
| Littérature d'idées | Françoise de Graffigny, *Lettres d'une Péruvienne* | « Un nouvel univers s'est offert à mes yeux » |
| Roman et récit | Chrétien de Troyes, *Le Chevalier de la charrette* | Le roman et l'invention de l'amour |
| Roman et récit | Zola, *Pot-Bouille* | Dévoiler les rouages de la société |
| Roman et récit | Simone Schwarz-Bart, *Pluie et vent sur Télumée Miracle* | Tisser les mémoires, habiter le monde |
| Théâtre | Corneille, *Le Menteur* | Mensonge et comédie |
| Théâtre | Musset, *On ne badine pas avec l'amour* | Les jeux du cœur et de la parole |
| Théâtre | Nathalie Sarraute, *Pour un oui ou pour un non* | Théâtre et dispute |

## Les précisions du Bulletin officiel (voie générale)
- **Rimbaud** : le *Cahier de Douai* (aussi appelé *Cahiers de Douai*, « Recueil Demeny » ou *Recueil de Douai*) : les **22 poèmes**, de « Première soirée » à « Ma Bohème (Fantaisie) ».
- **Graffigny** : on étudie aussi des éléments de la **seconde édition augmentée de 1752** : l'« Introduction historique » et les lettres **XXVIII, XXIX, XXX et XXXIV**.
- **Chrétien de Troyes** : le roman est lu en **édition bilingue** (ancien français et traduction en regard).
- **Ponge** et **Fontenelle** : en voie générale, l'œuvre est au programme **en entier**. Les limites que tu peux lire ailleurs (pour Ponge, de « Berges de la Loire » à « Le mimosa » inclus ; pour Fontenelle, les trois premiers soirs) concernent **seulement la voie technologique**.
- La voie technologique a les mêmes œuvres, sauf en roman : *Thérèse Raquin* de Zola (parcours « anatomie des passions ») y remplace *Pot-Bouille*, et le parcours du *Chevalier de la charrette* y est « héroïsme et amour ».

>! **Attention** : à l'écrit, le sujet de **dissertation** porte sur l'une de ces œuvres et son parcours. Le **commentaire**, lui, porte sur un texte que tu ne connais pas. À l'oral, l'explication porte sur un texte de ton récapitulatif. Vérifie toujours auprès de ton professeur les œuvres retenues pour ta classe.

## Poésie du XIXe au XXIe siècle
- **Rimbaud, *Cahier de Douai*** (1870) : vingt-deux poèmes que Rimbaud, âgé de seize ans, recopie à Douai à l'automne 1870 et confie au poète Paul Demeny. Fugues et liberté (« Ma Bohème », « Sensation »), éveil de la sensualité, adolescence (« Roman » : « On n'est pas sérieux, quand on a dix-sept ans. »), révolte contre la guerre (« Le Dormeur du val », « Le Mal ») et contre Napoléon III (« Rages de Césars »), satire des bourgeois (« À la musique »). *Émancipations créatrices* : le jeune poète s'affranchit de sa famille, de l'école, des conventions, et bouscule le sonnet de l'intérieur (rejets, mots familiers, ironie).
- **Ponge, *La rage de l'expression*** (1952) : sept textes écrits entre 1938 et 1944, dans cet ordre : « Berges de la Loire », « La guêpe », « Notes prises pour un oiseau », « L'œillet », « Le mimosa », « Le carnet du bois de pins », « La Mounine ». Ponge publie ses **brouillons**, ses notes datées, ses essais successifs : le poème se montre **en train de se faire**. *Dans l'atelier du poète* : la poésie comme travail, recherche obstinée du mot juste pour dire l'objet.
- **Hélène Dorion, *Mes forêts*** (2021) : recueil de la poétesse québécoise. La forêt y est à la fois un paysage réel, menacé, et un miroir de l'intime : mémoire, corps, temps qui passe, fragilité du vivant. *La poésie, la nature, l'intime* : le poème relie le moi et le monde naturel (on peut le rapprocher du romantisme, mais aussi de la conscience écologique contemporaine).

## Littérature d'idées du XVIe au XVIIIe siècle
- **La Boétie, *Discours de la servitude volontaire*** (écrit vers 1548, publié après sa mort) : l'ami de Montaigne y pose une question paradoxale : pourquoi des peuples entiers obéissent-ils à un seul tyran ? Sa thèse : le tyran n'a de pouvoir que celui qu'on lui donne ; il suffirait de cesser de le soutenir : « Soyez résolus de ne servir plus, et vous voilà libres. » Il explique la servitude par la **coutume** (on s'habitue à servir), par les **divertissements** qui endorment le peuple, et par la **chaîne des complices** qui profitent du tyran. Discours oratoire : apostrophes, questions rhétoriques, exemples antiques.
- **Fontenelle, *Entretiens sur la pluralité des mondes*** (1686) : un philosophe (le narrateur) explique l'astronomie moderne (le système de Copernic, les tourbillons de Descartes) à une **marquise**, au cours de soirées passées dans un parc ; il imagine que d'autres planètes pourraient être habitées. Ouvrage de **vulgarisation** : dialogue, galanterie, images familières pour rendre la science accessible à un public mondain, et à une femme curieuse et vive d'esprit. *Le goût de la science* : plaire et instruire.
- **Françoise de Graffigny, *Lettres d'une Péruvienne*** (1747) : roman épistolaire. Zilia, jeune Inca arrachée au temple du Soleil par les conquistadors alors qu'elle devait épouser Aza, est ensuite capturée par des Français et recueillie par le chevalier Déterville, qui l'aime. Elle écrit d'abord avec des *quipos* (cordons noués), puis apprend le français. Son **regard étranger** critique la société française (vanité, luxe, éducation négligée des femmes). À la fin, trahie par Aza, elle refuse d'épouser Déterville, lui offre son amitié et choisit une vie indépendante.

## Roman et récit du Moyen Âge au XXIe siècle
- **Chrétien de Troyes, *Le Chevalier de la charrette*** (vers 1177-1181) : roman en octosyllabes, écrit pour Marie de Champagne. Pour délivrer la reine Guenièvre, enlevée par Méléagant, Lancelot accepte de monter dans une **charrette d'infamie**, réservée aux criminels, mais seulement après une brève hésitation ; il traverse ensuite le **pont de l'épée**. La reine l'accueille d'abord froidement, à cause de cette hésitation : l'amant doit tout sacrifier, même son honneur, à sa dame. C'est la **fin'amor** (amour courtois). Le roman est achevé par Godefroi de Leigni. *Le roman et l'invention de l'amour* : le roman médiéval invente un modèle amoureux qui traverse toute la littérature.
- **Zola, *Pot-Bouille*** (1882) : dixième roman des *Rougon-Macquart*. Octave Mouret, jeune provincial ambitieux venu de Plassans, s'installe dans un immeuble bourgeois de la rue de Choiseul, à Paris. Derrière la façade respectable : mariages d'argent, adultères, hypocrisie, mépris des domestiques, dont les ragots dans la cour de service révèlent l'envers du décor. *Dévoiler les rouages de la société* : le roman naturaliste démonte les mécanismes de la bourgeoisie du Second Empire. Suite : *Au Bonheur des Dames* (1883).
- **Simone Schwarz-Bart, *Pluie et vent sur Télumée Miracle*** (1972) : en Guadeloupe, la vieille Télumée raconte à la 1re personne sa vie et celle des femmes de sa lignée, les Lougandor, après l'abolition de l'esclavage. Sa grand-mère, **Reine Sans Nom**, lui apprend à rester debout face au malheur. Amour, misère, travail dans les champs de canne, violence, mais aussi solidarité et dignité. *Tisser les mémoires, habiter le monde* : transmission entre générations, mémoire de l'esclavage, langue nourrie de l'oralité créole.

## Théâtre du XVIIe au XXIe siècle
- **Corneille, *Le Menteur*** (créé en 1643-1644) : comédie en cinq actes et en alexandrins, adaptée d'une pièce espagnole (Ruiz de Alarcón). Dorante, jeune homme arrivé de Poitiers à Paris, ment sans cesse, par plaisir et pour briller : faux exploits guerriers, fête sur l'eau imaginaire, faux mariage inventé pour échapper au projet de son père Géronte. Son valet Cliton commente ses inventions ; un **quiproquo** sur les noms de Clarice et de Lucrèce complique l'intrigue. *Mensonge et comédie* : le menteur est un **poète de l'instant**, un double du dramaturge ; le théâtre lui-même est une illusion assumée.
- **Musset, *On ne badine pas avec l'amour*** (1834) : « proverbe » en trois actes, en prose. Perdican et sa cousine Camille, qui sort du couvent, devraient se marier ; Camille refuse l'amour par peur d'être trompée. Par orgueil et par dépit, chacun joue avec l'autre ; Perdican courtise la paysanne Rosette, qui en meurt à la fin. Mélange du comique (le baron, Blazius, Bridaine, dame Pluche, le chœur) et du tragique. Tirade de Perdican (II, 5) : « J'ai souffert souvent, je me suis trompé quelquefois, mais j'ai aimé. »
- **Nathalie Sarraute, *Pour un oui ou pour un non*** (1982) : pièce courte, d'abord écrite pour la radio. Deux vieux amis, H.1 et H.2, se brouillent à cause d'une **intonation** : la façon dont H.1 a dit « C'est bien... ça » en apprenant un succès de H.2. Des voisins sont appelés comme juges. Sarraute met en scène les **tropismes** : ces mouvements intérieurs à peine perceptibles sous les mots (la « sous-conversation »). *Théâtre et dispute* : la querelle devient l'action même de la pièce.

> **À retenir**
> Bac 2027, voie générale : douze œuvres, une par objet d'étude étudiée en classe, chacune avec son parcours.
> Pour chaque œuvre de ta classe : auteur, date, genre, résumé, personnages, trois ou quatre passages clés, citations courtes et exactes, lien avec le parcours.
> Une dissertation se gagne avec des exemples précis tirés de l'œuvre : scènes, personnages, citations.
`,
      exercices: [
        { type: "qcm", question: "Quel parcours est associé au *Menteur* de Corneille ?", choix: ["Les jeux du cœur et de la parole", "Théâtre et dispute", "Mensonge et comédie", "Dévoiler les rouages de la société"], reponse: 2, explication: "*Le Menteur* : « Mensonge et comédie ». « Les jeux du cœur et de la parole » accompagne Musset ; « Théâtre et dispute », Sarraute ; « Dévoiler les rouages de la société », *Pot-Bouille* de Zola." },
        { type: "qcm", question: "Quelle œuvre appartient à l'objet d'étude « littérature d'idées » en 2026-2027 ?", choix: ["*Mes forêts*", "*Entretiens sur la pluralité des mondes*", "*Pot-Bouille*", "*Pour un oui ou pour un non*"], reponse: 1, explication: "Fontenelle (1686), avec La Boétie et Graffigny, représente la littérature d'idées. *Mes forêts* est un recueil poétique, *Pot-Bouille* un roman, *Pour un oui ou pour un non* une pièce de théâtre." },
        { type: "saisie", question: "Dans *Le Chevalier de la charrette*, quel chevalier accepte de monter dans la charrette d'infamie pour retrouver la reine Guenièvre ?", reponses: ["Lancelot", "Lancelot du Lac"], explication: "**Lancelot** : il monte dans la charrette après une brève hésitation, que Guenièvre lui reprochera ; l'amant courtois doit tout sacrifier à sa dame." },
        { type: "vf", question: "Dans le *Discours de la servitude volontaire*, La Boétie soutient que le tyran n'a de pouvoir que celui que le peuple lui donne.", reponse: true, explication: "C'est le paradoxe central : il suffirait de cesser de servir pour être libre (« Soyez résolus de ne servir plus, et vous voilà libres »)." },
        { type: "saisie", question: "Comment s'appelle l'héroïne des *Lettres d'une Péruvienne* de Françoise de Graffigny ?", reponses: ["Zilia"], explication: "**Zilia**, jeune Inca enlevée puis recueillie par le Français Déterville, écrit à son fiancé Aza ; son regard étranger critique la société française." },
        { type: "qcm", question: "Dans *Pour un oui ou pour un non*, qu'est-ce qui déclenche la brouille entre H.1 et H.2 ?", choix: ["Une dette d'argent jamais remboursée", "Une rivalité amoureuse", "Un héritage", "La façon dont une phrase a été prononcée"], reponse: 3, explication: "Tout part de l'intonation de « C'est bien... ça » : Sarraute montre la violence cachée sous les mots les plus anodins (les tropismes)." },
        { type: "saisie", question: "Dans *Pluie et vent sur Télumée Miracle*, quel surnom porte la grand-mère de Télumée, qui lui transmet la force de rester debout ?", reponses: ["Reine Sans Nom", "Reine sans nom"], explication: "**Reine Sans Nom** (Toussine) incarne la mémoire et la dignité des femmes Lougandor." },
        { type: "vf", question: "*Pot-Bouille* de Zola se déroule dans une mine du Nord de la France.", reponse: false, explication: "C'est *Germinal* qui se passe dans une mine. *Pot-Bouille* (1882) se déroule dans un immeuble bourgeois de la rue de Choiseul, à Paris, où s'installe Octave Mouret." },
        { type: "qcm", question: "Quelle particularité de *La rage de l'expression* justifie le parcours « Dans l'atelier du poète » ?", choix: ["Ponge y publie ses brouillons et ses essais successifs : on voit le poème se faire", "Ponge y respecte strictement le sonnet", "Ponge y raconte sa vie à la manière d'un roman", "Ponge y traduit des poètes étrangers"], reponse: 0, explication: "Notes datées, reprises, ratures : Ponge montre le travail de l'écriture, la recherche du mot juste pour dire l'objet." },
        { type: "redaction", question: "**Dissertation (plan détaillé, sujet type bac 2027)** : « Dans *Le Menteur*, le mensonge n'est-il qu'un défaut que la comédie condamne ? » Rédige l'introduction et le plan détaillé.", corrige: `**Introduction**
*Amorce* : Au XVIIe siècle, la comédie se donne pour mission de corriger les mœurs par le rire ; or Corneille, avec *Le Menteur* (1643-1644), choisit pour héros un jeune homme qui ment presque à chaque réplique.
*Analyse du sujet* : le « mensonge » désigne les inventions de Dorante ; « ne... que » et « défaut » invitent à se demander si la pièce se contente de dénoncer ce vice, ou si elle en fait aussi une source de plaisir et une image du théâtre lui-même.
*Problématique* : la comédie de Corneille condamne-t-elle le mensonge, ou le célèbre-t-elle comme un art de l'invention proche de celui du dramaturge ?
*Annonce du plan* : nous verrons que le mensonge est bien un défaut dont la pièce montre les dangers, mais qu'il est aussi un spectacle brillant qui charme le public, et enfin qu'il devient une image du théâtre.

**I. Un défaut dont la comédie montre les dangers**
1. Un vice moral : Dorante ment sans nécessité, par vanité (faux exploits guerriers pour séduire), au mépris de la parole donnée.
2. Le menteur pris à son propre piège : il doit inventer de nouveaux mensonges pour couvrir les anciens (le faux mariage inventé pour son père) ; le quiproquo sur Clarice et Lucrèce se retourne contre lui.
3. La colère du père, Géronte, et les commentaires du valet Cliton font entendre le jugement moral.

**II. Mais le mensonge est un spectacle qui séduit**
1. Le plaisir du récit : la fête sur l'eau imaginaire est un morceau de bravoure poétique, admiré même par ceux qui savent qu'il est faux.
2. Un héros sympathique, jeune et inventif, que le dénouement ne punit guère : il épouse Lucrèce.
3. Le rire naît de la virtuosité du menteur et de l'étonnement de Cliton.

**III. Le mensonge, image du théâtre lui-même**
1. Dorante est un dramaturge de l'instant : il invente des personnages, des décors, des intrigues, comme Corneille.
2. Le spectateur accepte d'être trompé : le théâtre est une illusion consentie (lien avec le parcours « Mensonge et comédie »).
3. Ouverture du parcours : d'autres comédies où le mensonge mène l'action (les fourberies de Scapin chez Molière, les ruses de Dubois dans *Les Fausses Confidences* de Marivaux).

**Conclusion** : Corneille ne se contente pas de condamner le mensonge ; il le met en scène avec une telle virtuosité qu'il en fait un éloge paradoxal de l'invention et du théâtre. Ouverture : *L'Illusion comique* (1636), où Corneille faisait déjà l'éloge du théâtre comme illusion.` },
        { type: "qcm", question: "En voie générale, quelle partie de *La rage de l'expression* de Ponge est au programme ?", choix: ["Seulement de « Berges de la Loire » à « Le mimosa »", "Seulement « Le carnet du bois de pins »", "L'œuvre entière", "Seulement les textes sur les animaux"], reponse: 2, explication: "En voie générale, l'œuvre est au programme **en entier**. La limite « de “Berges de la Loire” à “Le mimosa” inclus » ne concerne que la voie technologique (de même que les trois premiers soirs pour Fontenelle)." },
        { type: "vf", question: "Pour les *Lettres d'une Péruvienne*, le programme inclut aussi des éléments de l'édition augmentée de 1752.", reponse: true, explication: "Le BO ajoute l'« Introduction historique » et les lettres XXVIII, XXIX, XXX et XXXIV de la seconde édition (1752)." },
        { type: "redaction", question: "**Dissertation (sujet type bac, poésie)** : Rimbaud, *Cahier de Douai*, parcours « Émancipations créatrices ». « Le *Cahier de Douai* n'est-il que l'œuvre d'un adolescent révolté ? » Rédige l'introduction, le plan détaillé et la conclusion.", corrige: `**Introduction**
*Amorce* : À l'automne 1870, en pleine guerre franco-prussienne, Arthur Rimbaud, seize ans, fugue de Charleville ; à Douai, il recopie vingt-deux poèmes qu'il confie au poète Paul Demeny.
*Analyse du sujet* : l'« adolescent révolté » renvoie à l'image d'un poète qui refuse sa famille, sa ville, l'école, l'Empire et la religion ; « n'... que » invite à se demander si l'œuvre se réduit à ce refus, ou si la révolte devient autre chose : une joie de la liberté et une invention poétique.
*Problématique* : dans le *Cahier de Douai*, la révolte n'est-elle qu'un refus, ou devient-elle le moteur d'une émancipation heureuse et d'une création poétique nouvelle ?
*Annonce du plan* : nous verrons d'abord que le recueil est bien celui d'un adolescent en révolte, puis qu'il chante aussi la liberté conquise, enfin que cette émancipation est avant tout celle d'un poète qui invente sa propre voix.

**I. Une poésie de la révolte adolescente**
1. Contre la société bourgeoise : « À la musique » fait la satire des bourgeois de Charleville réunis sur la place de la Gare, pendant que le jeune poète suit des yeux les jeunes filles.
2. Contre la guerre et l'Empire : « Le Dormeur du val » cache jusqu'au dernier vers la mort d'un jeune soldat ; « Rages de Césars » montre Napoléon III vaincu ; « Le Mal » montre des bataillons entiers qui s'écroulent dans le feu sous les railleries du « Roi ».
3. Contre la religion : dans « Le Mal », Dieu « rit aux nappes damassées / Des autels » et ne se réveille que lorsque des mères en pleurs lui donnent « un gros sou » ; « Le Châtiment de Tartufe » dénonce l'hypocrite dévot.

**II. Mais la révolte se transforme en joie de la liberté**
1. La fugue et la bohème : « Ma Bohème » (« Je m'en allais, les poings dans mes poches crevées ») ; « Au Cabaret-Vert » célèbre le plaisir simple d'une halte après la marche.
2. L'éveil des sens et de l'amour : « Sensation » (« Par les soirs bleus d'été, j'irai dans les sentiers »), « Première soirée », « Roman » (« On n'est pas sérieux, quand on a dix-sept ans »), avec humour et tendresse.
3. Une communion avec la nature : le poète va « Par la Nature, — heureux comme avec une femme » (« Sensation ») ; « Soleil et Chair » rêve d'un monde païen et libre.

**III. Surtout, une émancipation créatrice : le poète invente sa voix**
1. Rimbaud reprend les formes héritées (sonnet, alexandrin) pour les bousculer : rejets inattendus (« Dort », « Tranquille » dans « Le Dormeur du val »), mots familiers et prosaïques.
2. Il parodie les modèles : « Vénus Anadyomène » renverse le mythe de la beauté née des eaux en un corps laid et vulgaire ; dans « Ma Bohème », la lyre du poète devient les « élastiques / De [ses] souliers blessés » : l'ironie désacralise le poète inspiré.
3. Le mélange des registres (lyrique, satirique, comique, pathétique) annonce la lettre « du Voyant » (1871) : il faut « trouver une langue ».

**Conclusion**
*Bilan* : le *Cahier de Douai* est bien le livre d'un adolescent en révolte, mais ce refus est le point de départ d'une liberté joyeuse et, surtout, d'une émancipation poétique : Rimbaud s'y libère des règles autant que de sa famille.
*Ouverture* : cette émancipation se radicalise dans *Une saison en enfer* (1873) et les *Illuminations*, où Rimbaud abandonne le vers régulier.` },
        { type: "redaction", question: "**Dissertation (sujet type bac, littérature d'idées)** : La Boétie, *Discours de la servitude volontaire*, parcours « “Défendre” et “entretenir” la liberté ». « Le *Discours de la servitude volontaire* désespère-t-il de la liberté ? » Rédige l'introduction, le plan détaillé et la conclusion.", corrige: `**Introduction**
*Amorce* : Vers 1548, un jeune humaniste d'à peine dix-huit ans, Étienne de La Boétie, pose une question qui traversera les siècles : pourquoi des millions d'hommes obéissent-ils à un seul ?
*Analyse du sujet* : « désespérer de la liberté », c'est penser que les hommes ne pourront jamais être libres. Le constat de La Boétie est sombre (la servitude est générale, et voulue) ; mais un texte qui explique la servitude peut aussi chercher à la combattre.
*Problématique* : en montrant que la servitude est volontaire, La Boétie condamne-t-il les hommes à l'obéissance, ou leur montre-t-il au contraire que la liberté est à portée de main, à condition de la défendre et de l'entretenir ?
*Annonce du plan* : nous verrons que le constat est d'abord accablant, puis que la liberté reste naturelle et accessible, enfin que le *Discours* invite à la préserver par la lucidité et l'amitié.

**I. Un constat accablant : les hommes consentent à leur servitude**
1. Le paradoxe central : un tyran seul n'a de puissance que celle qu'on lui donne ; pourtant les peuples le servent, et même avec zèle.
2. La force de la **coutume** : ceux qui naissent serfs ne connaissent pas la liberté et ne la regrettent pas ; c'est la première raison de la servitude volontaire.
3. Les **divertissements** et la **chaîne des complices** : jeux, spectacles et festins sont « les appâts de la servitude » (exemple de Cyrus, qui affaiblit les Lydiens par les tavernes et les jeux) ; autour du tyran, quelques favoris en tiennent des centaines, qui en tiennent des milliers, tous intéressés à la tyrannie.

**II. Mais la liberté est naturelle, et donc toujours possible**
1. La nature a fait les hommes égaux et « compagnons » ; même les bêtes résistent à la captivité.
2. Le remède est simple et sans violence : « Soyez résolus de ne servir plus, et vous voilà libres. » Il suffit de cesser de soutenir le tyran pour qu'il s'effondre, comme un colosse dont on a retiré la base.
3. Le registre oratoire (apostrophes au peuple, questions rhétoriques, indignation) ne se contente pas de constater : il cherche à réveiller le lecteur.

**III. Le *Discours* appelle à défendre et à entretenir la liberté**
1. La liberté se garde par l'esprit : certains hommes, nourris par l'étude et la mémoire du passé, n'oublient jamais ce qu'est la liberté.
2. Elle se garde par l'**amitié**, qui n'existe qu'entre égaux : autour du tyran, il n'y a que des complices qui se craignent, non des amis. L'amitié de Montaigne et de La Boétie en est le modèle.
3. Un texte qui continue d'agir : Rousseau (« L'homme est né libre, et partout il est dans les fers », *Du contrat social*, 1762), puis les écrivains engagés (Éluard, « Liberté », 1942) reprennent ce combat (lien avec le parcours).

**Conclusion**
*Bilan* : le constat de La Boétie est sombre, mais ce n'est pas un texte du désespoir : en révélant que la servitude est voulue, il montre qu'elle peut être défaite, et que la liberté exige une vigilance de chaque instant.
*Ouverture* : la question reste actuelle : la servitude volontaire peut aussi prendre la forme de la passivité face aux puissances de l'argent ou des écrans.` },
        { type: "redaction", question: "**Dissertation (sujet type bac, roman)** : Chrétien de Troyes, *Le Chevalier de la charrette*, parcours « Le roman et l'invention de l'amour ». « Dans *Le Chevalier de la charrette*, l'amour grandit-il le chevalier ou l'humilie-t-il ? » Rédige l'introduction, le plan détaillé et la conclusion.", corrige: `**Introduction**
*Amorce* : Vers 1177-1181, à la demande de Marie de Champagne, Chrétien de Troyes compose un roman en octosyllabes dont le héros, Lancelot, accepte de monter dans une charrette réservée aux criminels pour retrouver la reine Guenièvre.
*Analyse du sujet* : « grandir », c'est rendre plus fort, plus héroïque ; « humilier », c'est abaisser, couvrir de honte. Le sujet oppose deux effets de l'amour sur le héros.
*Problématique* : l'amour de Lancelot pour la reine est-il la source de sa grandeur héroïque, ou le soumet-il à des épreuves humiliantes, et que nous dit cette tension de l'amour inventé par le roman médiéval ?
*Annonce du plan* : nous verrons que l'amour rend Lancelot capable d'exploits surhumains, qu'il l'expose pourtant à la honte et à la soumission, et que cette contradiction définit un idéal amoureux nouveau.

**I. L'amour, source d'exploits héroïques**
1. Pour délivrer la reine enlevée par Méléagant, Lancelot affronte les épreuves les plus terribles : il traverse le **pont de l'épée**, se blessant aux mains et aux pieds.
2. Il triomphe dans les combats, notamment contre Méléagant : l'amour décuple sa force ; la seule pensée de la reine le rend invincible.
3. L'amour l'élève au-dessus des autres chevaliers : Gauvain choisit le pont sous l'eau, qui semble moins dangereux, et manque de s'y noyer.

**II. Mais l'amour l'expose à l'humiliation et à la soumission**
1. La **charrette d'infamie** : Lancelot y monte après une courte hésitation entre Raison et Amour ; tous se moquent de lui ensuite.
2. La reine lui fait payer cette hésitation par un accueil glacial : l'amant doit obéir sans réfléchir.
3. Au tournoi, sur l'ordre de Guenièvre, il accepte de se battre « au pire », passant pour un lâche, avant qu'elle ne l'autorise à combattre « au mieux » ; l'extase devant un peigne où restent des cheveux de la reine le rend presque ridicule.

**III. Une contradiction qui invente un nouvel idéal amoureux**
1. Dans la *fin'amor* (amour courtois), l'humilité du chevalier devant sa dame est une forme de grandeur : servir, c'est mériter.
2. L'amour devient une sorte de religion : Lancelot vénère la reine comme une sainte ; c'est l'amour qui donne sens à la prouesse, non l'inverse.
3. Ce modèle traverse la littérature (lien avec le parcours) : *Tristan et Iseut*, mais aussi, par contraste, *La Princesse de Clèves* (1678), où l'héroïne renonce à la passion.

**Conclusion**
*Bilan* : l'amour humilie Lancelot aux yeux du monde, mais c'est cette humiliation acceptée qui fait sa grandeur : le roman de Chrétien invente un héros dont la valeur se mesure à la force de son amour.
*Ouverture* : on peut confronter ce modèle aux romans de chevalerie parodiés par Cervantès dans *Don Quichotte* (1605-1615).` },
        { type: "redaction", question: "**Dissertation (sujet type bac, roman)** : Zola, *Pot-Bouille*, parcours « Dévoiler les rouages de la société ». « *Pot-Bouille* n'est-il qu'une satire de la bourgeoisie ? » Rédige l'introduction, le plan détaillé et la conclusion.", corrige: `**Introduction**
*Amorce* : En 1882, avec *Pot-Bouille*, dixième roman des *Rougon-Macquart*, Zola fait entrer le lecteur dans un immeuble bourgeois de la rue de Choiseul, à Paris, sous le Second Empire.
*Analyse du sujet* : la « satire » est une critique moqueuse ; « n'... que » invite à se demander si le roman se limite à ridiculiser les bourgeois, ou s'il démonte aussi, avec la méthode naturaliste, les mécanismes d'une société.
*Problématique* : le roman de Zola se contente-t-il de se moquer de la bourgeoisie, ou en révèle-t-il les rouages cachés pour en faire une critique plus profonde ?
*Annonce du plan* : nous verrons que le roman est une satire féroce, puis qu'il dévoile en réalité les mécanismes de cette société, enfin qu'il atteint une portée plus large, entre comédie noire et vérité humaine.

**I. Une satire féroce de la bourgeoisie**
1. La façade et l'envers : l'immeuble « respectable », son grand escalier et son concierge, M. Gourd, gardien des apparences, cachent adultères, mesquineries et hypocrisie.
2. Les mariages d'argent : Mme Josserand pousse sans relâche ses filles à trouver un mari riche ; Berthe épouse Auguste Vabre.
3. Des personnages ridicules ou odieux : querelle sordide d'héritage chez les Vabre, Duveyrier, magistrat austère qui entretient une maîtresse.

**II. Mais le roman démonte les rouages d'une société**
1. L'argent gouverne tout : dots, héritages, ambitions ; Octave Mouret, venu de Plassans, se sert des femmes pour réussir.
2. Les domestiques révèlent l'envers du décor : dans la cour de service, les bonnes échangent les secrets de leurs maîtres ; leur exploitation (Adèle, qui accouche seule dans sa chambre de bonne) montre la violence sociale cachée.
3. Les institutions complices : la religion (l'abbé Mauduit étouffe les scandales) et la morale bourgeoise servent surtout à sauver les apparences. L'immeuble devient le **microcosme** d'une société entière, observée avec la méthode naturaliste.

**III. Une portée plus large : comédie noire et vérité humaine**
1. Le comique : le roman emprunte au vaudeville (adultère découvert, duel qui n'a jamais lieu) ; le rire rend la critique plus mordante.
2. Le titre : la « pot-bouille », c'est la cuisine ordinaire, le quotidien médiocre du ménage ; le roman montre la banalité du mal social.
3. Rien ne change à la fin : le cycle des apparences recommence ; Octave réussit en épousant Mme Hédouin (suite dans *Au Bonheur des Dames*, 1883). La critique dépasse la bourgeoisie du Second Empire et vise toute société de façade (lien avec le parcours : Balzac, *Le Père Goriot* ; Maupassant, *Bel-Ami*).

**Conclusion**
*Bilan* : *Pot-Bouille* est bien une satire, mais une satire qui démonte méthodiquement les mécanismes de l'argent, du mariage et de l'hypocrisie : le rire y sert le dévoilement naturaliste.
*Ouverture* : au cinéma, Julien Duvivier a adapté le roman en 1957, avec Gérard Philipe dans le rôle d'Octave.` }
      ]
    },
  ],
};
