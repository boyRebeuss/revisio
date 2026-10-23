// Langue et communication — CM2 (Sénégal). Curriculum de l'éducation de base (CEB), étape 3, préparation du CFEE.
// Textes d'entraînement écrits pour Révisio (sauf mention contraire).
export default {
  chapitres: [
    {
      id: "comprendre-recit",
      titre: "Lire et comprendre un récit",
      theme: "Lecture et compréhension",
      cours: `
## À quoi sert ce chapitre ?
Au **CFEE**, l'épreuve de Langue et communication commence par un **texte** suivi de **questions de compréhension**. Ici, tu apprends une méthode simple pour bien lire et bien répondre.

## Lire le texte : la méthode en 4 étapes
1. **Lis le titre.** Il annonce souvent le sujet du texte.
2. **Lis tout le texte une première fois**, sans t'arrêter. Tu comprends l'histoire en gros.
3. **Lis les questions.** Tu sais alors ce que tu dois chercher.
4. **Relis le texte** et cherche chaque réponse. Souligne la phrase utile au crayon.

## Les 5 questions à se poser sur un récit
| Question | Ce que tu cherches |
|---|---|
| **Qui ?** | les personnages (le personnage principal, les autres) |
| **Où ?** | le lieu de l'histoire (village, ville, plage, champ...) |
| **Quand ?** | le moment (un matin, pendant l'hivernage, à la Tabaski...) |
| **Quoi ?** | ce qui se passe, les actions |
| **Pourquoi ?** | la raison d'une action ou d'un sentiment |

## Les sortes de questions
- **La réponse est écrite dans le texte.** Exemple : « Où habite Modou ? » Tu retrouves la phrase et tu recopies l'information.
- **La réponse n'est pas écrite mot pour mot.** Tu dois **réfléchir** à partir d'indices. Exemple : « Modou a mal aux bras, mais il ne se plaint pas. » → Modou est **courageux**.
- **Le sens d'un mot.** Relis la phrase où se trouve le mot : elle t'aide à deviner le sens.
- **Ton avis.** On te demande ce que tu penses. Donne ton avis **et une raison** : « Je pense que... parce que... ».

>! **Exemple résolu**
>! Texte : « Awa se leva très tôt. Elle mit sa plus belle robe et courut vers l'école. C'était le jour de la remise des prix. »
>! Question : Pourquoi Awa est-elle pressée ?
>! Mauvaise réponse : « Le jour de la remise des prix. » (ce n'est pas une phrase)
>! Bonne réponse : **Awa est pressée parce que c'est le jour de la remise des prix à l'école.**

## Bien répondre
- Réponds par une **phrase complète** : majuscule au début, point à la fin.
- **Reprends les mots de la question** : « Où habite Modou ? » → « Modou habite à Kayar. »
- Ne recopie pas tout un paragraphe : choisis seulement l'information demandée.

## Erreurs fréquentes
- Répondre sans avoir relu le texte (on se trompe de personnage ou de lieu).
- Donner son avis sans dire **pourquoi**.
- Oublier la majuscule et le point.

> **À retenir**
> Je lis le titre, le texte, les questions, puis je relis le texte.
> Je cherche : qui ? où ? quand ? quoi ? pourquoi ?
> Je réponds par une phrase complète qui reprend les mots de la question.
`,
      textes: {
        modou: `**La première pêche de Modou** (texte d'entraînement)

Modou habite à Kayar, un grand village de pêcheurs au bord de l'océan. Son père, Pape Ndiaye, part chaque matin en mer avec sa pirogue peinte en bleu, jaune et vert.

Un samedi, pendant les vacances, Modou a enfin le droit de l'accompagner. Il se lève avant le soleil. Sur la plage, les hommes poussent la pirogue dans les vagues en chantant. Le moteur démarre et la côte devient toute petite.

Au large, le père lance le filet. Modou attend, les yeux grands ouverts. Une heure plus tard, ils tirent ensemble : le filet est lourd de sardinelles qui brillent comme de l'argent. Modou a mal aux bras, mais il ne se plaint pas.

Le soir, quand la pirogue revient, les femmes attendent sur la plage avec leurs bassines. La mère de Modou, Fatou, prend une partie du poisson pour le vendre au marché. Elle sourit à son fils :
— Alors, mon pêcheur, la mer t'a fait peur ?
— Un peu, répond Modou. Mais maintenant, je sais pourquoi papa est si fatigué le soir.`,
      },
      exercices: [
        { type: "qcm", texte: "modou", question: "Où habite Modou ?", choix: ["à Kayar, un village de pêcheurs", "à Dakar, dans un grand immeuble", "dans un village de cultivateurs, loin de la mer", "à Saint-Louis, près du fleuve"], reponse: 0, explication: "La première phrase le dit : « Modou habite à **Kayar**, un grand village de pêcheurs au bord de l'océan. » La réponse est écrite dans le texte." },
        { type: "vf", texte: "modou", question: "Modou accompagne son père un jour d'école.", reponse: false, explication: "C'est faux. Le texte dit : « Un samedi, **pendant les vacances** ». Modou n'a donc pas école ce jour-là." },
        { type: "saisie", texte: "modou", question: "Comment s'appelle le père de Modou ?", reponses: ["Pape Ndiaye", "Pape", "Ndiaye", "Il s'appelle Pape Ndiaye.", "Son père s'appelle Pape Ndiaye.", "Le père de Modou s'appelle Pape Ndiaye."], explication: "Le père s'appelle **Pape Ndiaye** : « Son père, Pape Ndiaye, part chaque matin en mer ». Un prénom et un nom propre prennent une majuscule." },
        { type: "saisie", texte: "modou", question: "Trouve dans le texte le mot qui désigne le bateau des pêcheurs.", reponses: ["pirogue", "C'est la pirogue.", "C'est une pirogue.", "Le bateau s'appelle la pirogue."], explication: "C'est la **pirogue** : un long bateau en bois, souvent peint de couleurs vives, utilisé par les pêcheurs du Sénégal." },
        { type: "qcm", texte: "modou", question: "Quel poisson Modou et son père attrapent-ils ?", choix: ["des capitaines", "des thiofs", "des carpes", "des sardinelles"], reponse: 3, explication: "Le texte dit : « le filet est lourd de **sardinelles** qui brillent comme de l'argent ». Les autres poissons existent au Sénégal, mais ils ne sont pas dans le texte." },
        { type: "qcm", texte: "modou", question: "« Modou attend, **les yeux grands ouverts**. » Cela montre que Modou est :", choix: ["très attentif et curieux", "fatigué et endormi", "en colère contre son père", "malade à cause des vagues"], reponse: 0, explication: "Quand on garde les yeux grands ouverts, on regarde tout avec attention. Modou découvre la pêche : il est **curieux** et **attentif**. Cette réponse n'est pas écrite mot pour mot : on la trouve grâce à un indice." },
        { type: "vf", texte: "modou", question: "Modou se plaint parce qu'il a mal aux bras.", reponse: false, explication: "C'est faux : « Modou a mal aux bras, **mais il ne se plaint pas** ». Le mot *mais* montre une opposition : il a mal, pourtant il ne dit rien. Il est courageux." },
        { type: "qcm", texte: "modou", question: "Pourquoi les femmes attendent-elles sur la plage le soir ?", choix: ["pour se baigner dans la mer", "pour aider à pousser la pirogue", "pour prendre le poisson et le vendre au marché", "pour chanter avec les pêcheurs"], reponse: 2, explication: "Elles ont des **bassines** et la mère de Modou « prend une partie du poisson pour le vendre au marché ». À Kayar comme dans beaucoup de villages de pêcheurs, les femmes s'occupent souvent de la vente et de la transformation du poisson." },
        { type: "qcm", texte: "modou", question: "Quel autre titre conviendrait le mieux à ce texte ?", choix: ["Une journée en mer avec papa", "Le marché de Dakar", "La fête de la Tabaski", "Le poisson qui parlait"], reponse: 0, explication: "Le texte raconte la journée où Modou part pêcher en mer avec son père. Un bon titre résume **l'idée principale** du texte." },
        { type: "redaction", texte: "modou", question: "À la fin, Modou dit : « Maintenant, je sais pourquoi papa est si fatigué le soir. » Explique en deux ou trois phrases ce qu'il a compris. Puis donne ton avis : aimerais-tu partir en mer comme Modou ? Pourquoi ?", corrige: `**Ce qu'il fallait comprendre**
Modou a compris que le travail de pêcheur est **dur** : il faut se lever avant le soleil, pousser la pirogue, aller loin en mer et tirer un filet très lourd. Lui-même a eu mal aux bras après une seule journée. Il comprend donc pourquoi son père, qui fait ce travail **chaque jour**, est fatigué le soir.

**Exemple d'avis**
J'aimerais partir en mer comme Modou, parce que je voudrais voir les poissons et la côte devenir toute petite. Mais j'aurais un peu peur des grosses vagues.
(On peut aussi répondre non : « Je n'aimerais pas, parce que j'ai peur de l'eau profonde. ») L'important est de donner **une raison** avec *parce que*.

**Critères de réussite** : phrases complètes, majuscules et points, une explication tirée du texte, un avis justifié.` },
      ],
    },
    {
      id: "comprendre-documentaire",
      titre: "Lire un texte documentaire et reconnaître les types de textes",
      theme: "Lecture et compréhension",
      cours: `
## Les types de textes
Tous les textes n'ont pas le même but. Pour bien comprendre un texte, demande-toi d'abord : **à quoi sert-il ?**

| Type de texte | Il sert à... | Exemples |
|---|---|---|
| **narratif** | raconter une histoire | conte, récit, fable |
| **documentaire** (informatif) | donner des informations vraies, expliquer | article sur un animal, sur une plante, sur un pays |
| **injonctif** (prescriptif) | dire ce qu'il faut faire | recette, règle d'un jeu, notice, règlement de l'école |
| **descriptif** | montrer à quoi ressemble une personne, un lieu, un objet | portrait, description d'un marché |
| **poétique** | jouer avec les mots, les sons, les images | poème, chanson |
| **lettre** | communiquer avec une personne absente | lettre à un oncle, à un ami |

## Reconnaître un texte documentaire
- Il donne des **informations vraies** (pas une histoire inventée).
- Il n'y a **pas de personnage** qui vit une aventure.
- Il est souvent écrit au **présent** : « Le baobab **perd** ses feuilles en saison sèche. »
- Il contient souvent des **chiffres**, des **dates**, des **mots précis**.
- Il est découpé avec un **titre** et parfois des **intertitres** (petits titres) qui annoncent chaque partie.

## Reconnaître un texte injonctif
Les verbes sont souvent à l'**impératif** (« Lave le riz. ») ou à l'**infinitif** (« Laver le riz. »). Les étapes sont dans l'**ordre** : d'abord, ensuite, enfin, ou bien 1, 2, 3.

>! **Méthode : chercher une information dans un texte documentaire**
>! 1. Lis la question et repère le **mot important** (par exemple : « fruit »).
>! 2. Cherche l'**intertitre** qui parle de ce sujet.
>! 3. Lis cette partie et trouve la phrase qui contient la réponse.
>! 4. Réponds par une phrase complète.

## Le paragraphe et l'idée principale
Un texte est fait de **paragraphes** (des blocs de phrases séparés par un retour à la ligne). Chaque paragraphe développe **une idée**. Pour **résumer** un texte, tu écris l'idée principale de chaque paragraphe en une phrase courte.

> **À retenir**
> Narratif = raconter ; documentaire = informer ; injonctif = dire quoi faire ; descriptif = montrer ; poétique = jouer avec les mots.
> Un texte documentaire donne des informations vraies, souvent au présent, avec un titre et des intertitres.
> Chaque paragraphe a une idée principale.
`,
      textes: {
        baobab: `**Le baobab, arbre géant du Sénégal** (texte d'entraînement)

**Un arbre symbole**
Le baobab pousse dans les savanes d'Afrique. Au Sénégal, on le voit presque partout, surtout dans les régions de Thiès, de Kaolack et de Fatick. Il figure sur les armoiries (le blason) du Sénégal, à côté du lion.

**Un tronc énorme**
Son tronc est très large : plusieurs personnes doivent se tenir la main pour en faire le tour. Ce tronc garde beaucoup d'eau, ce qui aide l'arbre à vivre pendant la saison sèche. Pendant cette saison, le baobab perd ses feuilles. Certains baobabs vivent plusieurs centaines d'années.

**Un arbre utile**
Toutes les parties du baobab servent. Les feuilles, séchées et réduites en poudre, donnent le *lalo*, que l'on met dans le couscous. Le fruit s'appelle le **pain de singe**. Avec sa pulpe blanche, on prépare le jus de *bouye*, très apprécié pendant les fêtes. L'écorce sert à fabriquer des cordes.`,
        recette: `**Préparer le jus de bouye** (texte d'entraînement)

Ingrédients : de la poudre de pain de singe, de l'eau fraîche, du sucre.

1. Verse la poudre dans un grand bol.
2. Ajoute l'eau petit à petit et mélange avec une cuillère.
3. Passe le mélange dans une passoire pour enlever les graines.
4. Ajoute le sucre, puis mets le jus au frais.`,
      },
      exercices: [
        { type: "qcm", texte: "baobab", question: "Quel est le type du texte « Le baobab, arbre géant du Sénégal » ?", choix: ["un conte", "une lettre", "un poème", "un texte documentaire"], reponse: 3, explication: "Il donne des **informations vraies** sur un arbre, au présent, avec un titre et des intertitres. Il n'y a pas de personnage ni d'histoire : c'est un texte **documentaire**." },
        { type: "saisie", texte: "baobab", question: "Comment appelle-t-on le fruit du baobab ?", reponses: ["pain de singe", "le pain de singe", "C'est le pain de singe.", "Le fruit s'appelle le pain de singe.", "Le fruit du baobab s'appelle le pain de singe."], explication: "Dans la partie « Un arbre utile » : « Le fruit s'appelle le **pain de singe**. » L'intertitre t'aide à trouver vite la bonne partie." },
        { type: "vf", texte: "baobab", question: "Le baobab garde ses feuilles toute l'année.", reponse: false, explication: "C'est faux : « Pendant cette saison, le baobab **perd ses feuilles**. » Il s'agit de la saison sèche." },
        { type: "qcm", texte: "baobab", question: "D'après le texte, qu'est-ce qui aide le baobab à vivre pendant la saison sèche ?", choix: ["Ses grandes feuilles vertes.", "Son tronc qui garde beaucoup d'eau.", "L'eau que les hommes lui donnent.", "Ses fruits très sucrés."], reponse: 1, explication: "Le texte dit : « Ce tronc garde beaucoup d'eau, ce qui aide l'arbre à vivre pendant la saison sèche. »" },
        { type: "saisie", texte: "baobab", question: "Avec quelle partie du baobab prépare-t-on le *lalo* ?", reponses: ["les feuilles", "feuilles", "avec les feuilles", "les feuilles séchées", "les feuilles du baobab", "avec les feuilles séchées", "On prépare le lalo avec les feuilles."], explication: "« Les **feuilles**, séchées et réduites en poudre, donnent le *lalo*, que l'on met dans le couscous. »" },
        { type: "qcm", texte: "baobab", question: "Quelle est l'idée principale de la dernière partie, « Un arbre utile » ?", choix: ["Toutes les parties du baobab servent aux hommes.", "Le baobab vit très longtemps.", "Le baobab pousse surtout à Thiès.", "Le jus de bouye est sucré."], reponse: 0, explication: "La première phrase de la partie annonce l'idée : « **Toutes les parties du baobab servent.** » Les phrases suivantes donnent des exemples (feuilles, fruit, écorce)." },
        { type: "qcm", texte: "recette", question: "Le texte « Préparer le jus de bouye » est un texte :", choix: ["narratif, car il raconte une histoire", "poétique, car il joue avec les sons", "injonctif, car il dit ce qu'il faut faire", "documentaire, car il décrit un arbre"], reponse: 2, explication: "C'est une **recette** : les verbes sont à l'impératif (verse, ajoute, passe, mets) et les étapes sont numérotées dans l'ordre. C'est un texte **injonctif**." },
        { type: "vf", texte: "recette", question: "Dans la recette, on ajoute le sucre avant de passer le mélange dans la passoire.", reponse: false, explication: "C'est faux. L'ordre est : 1. verser la poudre, 2. ajouter l'eau, 3. passer dans la passoire, 4. **ensuite** ajouter le sucre. Dans un texte injonctif, l'ordre des étapes est très important." },
        { type: "saisie", texte: "recette", question: "Dans la phrase « Verse la poudre dans un grand bol », à quel mode est le verbe « verse » ?", reponses: ["impératif", "à l'impératif", "l'impératif", "il est à l'impératif", "Le verbe est à l'impératif."], explication: "« Verse » est à l'**impératif** : il donne un ordre ou un conseil, et il n'a pas de sujet écrit. C'est typique d'un texte injonctif." },
        { type: "redaction", texte: "baobab", question: "**Résumer** : écris le résumé du texte sur le baobab en trois phrases, une phrase par partie.", corrige: `**Exemple de résumé**
1. Le baobab est un grand arbre d'Afrique, très répandu au Sénégal, dont il est un symbole.
2. Son énorme tronc garde l'eau, ce qui l'aide à vivre pendant la saison sèche, et il peut vivre plusieurs siècles.
3. Toutes ses parties sont utiles : les feuilles donnent le lalo, le fruit (le pain de singe) donne le jus de bouye et l'écorce sert à faire des cordes.

**Méthode**
- une phrase par paragraphe, avec l'**idée principale** seulement ;
- des phrases courtes, écrites avec **tes mots** (ne recopie pas tout le texte) ;
- garde les mots importants : baobab, tronc, eau, saison sèche, feuilles, pain de singe.

**Critères de réussite** : trois phrases complètes, une idée par partie, rien d'inventé.` },
      ],
    },
    {
      id: "comprendre-conte",
      titre: "Lire un conte : le schéma du récit et la morale",
      theme: "Lecture et compréhension",
      cours: `
## Le conte, une tradition vivante
Au Sénégal, les contes se racontent souvent **le soir**, en famille ou au clair de lune. Le conteur parle, le public répond, rit, chante. Les contes mettent souvent en scène des **animaux qui parlent** : **Leuk-le-Lièvre**, rusé et malin, et **Bouki l'Hyène**, gourmande, paresseuse et souvent naïve. Le roi de la brousse est **Gaïndé le Lion**. Selon les conteurs, Bouki est un personnage masculin (*il*) ou féminin (*elle*) ; dans le conte de ce chapitre, c'est une hyène femelle : on dit donc *elle*.

Des écrivains sénégalais ont mis ces contes par écrit : **Birago Diop** dans *Les Contes d'Amadou Koumba* (1947), **Léopold Sédar Senghor** et **Abdoulaye Sadji** dans *La Belle Histoire de Leuk-le-Lièvre* (1953), un livre écrit pour les écoliers.

## Le schéma du récit (les 5 étapes)
| Étape | Ce qu'on y trouve | Mots qui l'annoncent souvent |
|---|---|---|
| 1. **Situation initiale** | le début : qui, où, quand ; la situation de départ (souvent calme, parfois déjà difficile) | Il était une fois, Un jour, Cette année-là |
| 2. **Élément déclencheur** | un problème arrive | Mais, Soudain, Un jour |
| 3. **Péripéties** | les actions des personnages pour régler le problème | Alors, Ensuite, Puis |
| 4. **Dénouement** | le problème est réglé (bien ou mal) | Finalement, Enfin |
| 5. **Situation finale** | la nouvelle situation, à la fin | Depuis ce jour, Désormais |

## La morale
Beaucoup de contes et de fables donnent une **leçon** : c'est la **morale**. Elle peut être écrite à la fin ou être à deviner. Exemples : « La ruse vaut mieux que la force. » ; « Celui qui ne travaille pas ne doit pas profiter du travail des autres. »

## Les temps du conte
Le conte est souvent écrit au **passé** :
- l'**imparfait** pour décrire le décor et les habitudes : « Les mares **étaient** sèches. »
- le **passé simple** pour les actions qui se suivent : « Leuk **eut** une idée. Il **sculpta** une statue. »

>! **Méthode : trouver la morale**
>! 1. Qui est puni ? Qui est récompensé ?
>! 2. Pourquoi ? (paresse, gourmandise, mensonge... ou courage, ruse, générosité)
>! 3. Écris la leçon en une phrase générale, au présent : « Il ne faut pas... » ou « Celui qui... ».

> **À retenir**
> Le schéma du récit : situation initiale → élément déclencheur → péripéties → dénouement → situation finale.
> La morale est la leçon du conte.
> Leuk-le-Lièvre est rusé ; Bouki l'Hyène est gourmande et paresseuse.
`,
      textes: {
        puits: `**Leuk-le-Lièvre et le puits de la brousse** (texte d'entraînement, inspiré des contes traditionnels)

Cette année-là, la pluie n'était pas venue. Les mares étaient sèches et les animaux de la brousse avaient soif. Gaïndé le Lion réunit tout le monde sous le grand fromager.
— Creusons un puits ensemble ! dit-il.
Tous se mirent au travail, sauf Bouki l'Hyène, qui déclara :
— J'ai mal au dos, je ne peux pas creuser.

Après sept jours, l'eau fraîche apparut au fond du puits. Mais chaque nuit, quelqu'un venait boire en cachette et salissait l'eau avec ses pattes pleines de boue.

Leuk-le-Lièvre eut une idée. Il sculpta une statue en bois, la couvrit de gomme bien collante et la posa près du puits. Cette nuit-là, Bouki arriva.
— Pousse-toi de mon chemin ! cria-t-elle à la statue.
La statue ne bougea pas. Bouki la frappa avec une patte : la patte resta collée. Elle frappa avec l'autre : collée aussi !

Au lever du jour, tous les animaux trouvèrent Bouki prisonnière de la statue. Elle baissa la tête de honte. Depuis ce jour, dit-on, l'hyène rôde seule la nuit et n'ose plus boire avec les autres.`,
      },
      exercices: [
        { type: "qcm", texte: "puits", question: "Quelle est la situation au début du conte (la situation initiale) ?", choix: ["Il n'a pas plu et les animaux ont soif.", "Les animaux ont trop de nourriture.", "Le lion est malade.", "Le lièvre a perdu son chemin."], reponse: 0, explication: "« La pluie n'était pas venue. Les mares étaient sèches et les animaux de la brousse avaient soif. » La situation de départ est la sécheresse. Le vrai problème qui lance l'histoire du piège (l'élément déclencheur) arrive plus tard." },
        { type: "saisie", texte: "puits", question: "Quel animal est le roi qui réunit tous les animaux ?", reponses: ["le lion", "lion", "Gaïndé", "Gaïndé le Lion", "C'est le lion.", "Le roi est le lion.", "C'est Gaïndé le Lion.", "Le roi est Gaïndé le Lion."], explication: "C'est **Gaïndé le Lion**. Dans les contes du Sénégal, le lion (*gaïndé* en wolof) est le roi de la brousse." },
        { type: "vf", texte: "puits", question: "Bouki l'Hyène a aidé à creuser le puits.", reponse: false, explication: "C'est faux : elle dit « J'ai mal au dos, je ne peux pas creuser ». C'est une **excuse** : elle ne veut pas travailler." },
        { type: "qcm", texte: "puits", question: "Quel est l'élément déclencheur, le problème qui lance l'histoire du piège ?", choix: ["Quelqu'un boit en cachette la nuit et salit l'eau.", "Les animaux creusent pendant sept jours.", "Leuk sculpte une statue.", "Bouki baisse la tête de honte."], reponse: 0, explication: "Le mot **Mais** annonce le problème : « Mais chaque nuit, quelqu'un venait boire en cachette et salissait l'eau ». C'est ce problème qui pousse Leuk à agir." },
        { type: "qcm", texte: "puits", question: "Que veut dire « boire **en cachette** » ?", choix: ["boire très vite", "boire dans une cache en bois", "boire sans être vu", "boire avec les autres"], reponse: 2, explication: "Faire quelque chose **en cachette**, c'est le faire en se cachant, pour que personne ne le voie. Le mot vient de *cacher*." },
        { type: "qcm", texte: "puits", question: "Quelle qualité montre Leuk-le-Lièvre dans ce conte ?", choix: ["la force", "la paresse", "la gourmandise", "la ruse"], reponse: 3, explication: "Leuk ne se bat pas : il invente un **piège** avec une statue collante. Il est **rusé** (malin), comme dans beaucoup de contes du Sénégal." },
        { type: "saisie", texte: "puits", question: "Dans la phrase « Leuk-le-Lièvre **eut** une idée », à quel temps est le verbe « eut » ? (verbe avoir)", reponses: ["passé simple", "au passé simple", "le passé simple"], explication: "« Eut » est le verbe *avoir* au **passé simple**. Dans un conte, le passé simple sert à raconter les actions principales." },
        { type: "vf", texte: "puits", question: "La dernière phrase explique pourquoi l'hyène rôde seule la nuit.", reponse: true, explication: "C'est vrai : « Depuis ce jour, dit-on, l'hyène rôde seule la nuit... ». Beaucoup de contes finissent ainsi : ils **expliquent** une habitude des animaux. C'est la situation finale." },
        { type: "qcm", texte: "puits", question: "Quelle morale convient le mieux à ce conte ?", choix: ["Celui qui refuse de travailler ne doit pas profiter du travail des autres.", "Il faut toujours écouter le roi.", "Les statues sont dangereuses.", "Il ne faut jamais boire la nuit."], reponse: 0, explication: "Bouki n'a pas creusé, mais elle a bu l'eau en cachette : elle est punie et a honte. La leçon porte sur la **paresse** et la **malhonnêteté**." },
        { type: "redaction", texte: "puits", question: "Imagine une autre fin : Bouki n'est pas prise par la statue, mais elle est découverte d'une autre façon. Écris cette nouvelle fin en 5 à 8 lignes, au passé simple et à l'imparfait. Termine par une phrase qui donne la morale.", corrige: `**Exemple de nouvelle fin**
Cette nuit-là, Leuk se cacha derrière le fromager avec Golo le Singe. La lune brillait. Bientôt, ils entendirent des pas : c'était Bouki ! Elle se pencha sur le puits et but bruyamment. Golo grimpa vite dans l'arbre et réveilla tous les animaux en criant. Quand Gaïndé arriva, Bouki avait encore les pattes pleines de boue. Elle ne put rien dire. Le lion décida qu'elle porterait l'eau pour tout le monde pendant un mois.
**Morale : celui qui ne travaille pas ne doit pas profiter du travail des autres.**

**Ce qui est attendu**
- une suite logique de l'histoire (les mêmes personnages, le même lieu) ;
- l'**imparfait** pour le décor (la lune brillait) et le **passé simple** pour les actions (se cacha, but, grimpa) ;
- une fin qui règle le problème et une **morale** au présent.

**Critères de réussite** : histoire cohérente, temps du passé bien employés, phrases ponctuées, morale claire.` },
      ],
    },
    {
      id: "phrase-types-formes",
      titre: "La phrase : types et formes",
      theme: "Grammaire",
      cours: `
## Qu'est-ce qu'une phrase ?
Une **phrase** est une suite de mots qui a un **sens**. Elle commence par une **majuscule** et se termine par un **point** (. ? ! ou ...).
- « Awa va au marché. » → c'est une phrase.
- « marché Awa au va » → ce n'est pas une phrase : les mots sont dans le désordre.

Une phrase **verbale** contient un verbe conjugué : « Le car **part** à midi. » Une phrase **non verbale** n'en a pas : « Quelle chaleur ! » ; « Défense de fumer. »

## Les 4 types de phrases
| Type | Elle sert à... | Ponctuation | Exemple |
|---|---|---|---|
| **déclarative** | dire, raconter, informer | point . | Le maître corrige les cahiers. |
| **interrogative** | poser une question | point d'interrogation ? | Où vas-tu ? |
| **exclamative** | montrer un sentiment (joie, peur, surprise, colère) | point d'exclamation ! | Comme ce thiéboudiène est bon ! |
| **impérative** (injonctive) | donner un ordre, un conseil | point ou ! | Ferme la porte. Range ton cartable ! |

## Poser une question : 3 façons
1. Avec l'**intonation** (à l'oral surtout) : Tu viens ?
2. Avec **est-ce que** : Est-ce que tu viens ?
3. Avec l'**inversion du sujet** (à l'écrit soigné) : **Viens-tu** ? Le verbe et le pronom sujet sont reliés par un **trait d'union**.
   Si le verbe finit par une voyelle devant il, elle, on, on ajoute **-t-** : « Va-**t**-il au champ ? » ; « Aime-**t**-elle le lait caillé ? »

Les **mots interrogatifs** : qui, que, quoi, où, quand, comment, pourquoi, combien, quel, quelle.

## Forme affirmative et forme négative
Toute phrase est soit **affirmative**, soit **négative**.
- Affirmative : « Moussa mange du mil. »
- Négative : « Moussa **ne** mange **pas** de mil. »

La négation a **deux mots** qui entourent le verbe conjugué : **ne... pas, ne... plus, ne... jamais, ne... rien, ne... personne**. Devant une voyelle ou un h muet, *ne* devient **n'** : « Il **n'**aime **pas** la pluie. »

>! **Exemple résolu**
>! Mets à la forme négative : « Fatou a encore faim. »
>! *Encore* a pour contraire *plus* : « Fatou **n'a plus** faim. »
>! Et : « Il voit quelqu'un. » → « Il **ne** voit **personne**. » ; « Je mange quelque chose. » → « Je **ne** mange **rien**. » ; « Elle ment toujours. » → « Elle **ne** ment **jamais**. »

## Erreurs fréquentes
- Oublier le **ne** à l'écrit : « Je sais pas » est de l'oral familier. On écrit : « Je **ne** sais **pas**. »
- Oublier le trait d'union dans l'inversion : on écrit « Viens-tu ? » et non « Viens tu ? ».
- Écrire « du », « de la » après une négation : « Il ne boit pas **de** lait. » (et non « pas du lait »).

> **À retenir**
> 4 types : déclarative (.), interrogative (?), exclamative (!), impérative (. ou !).
> 2 formes : affirmative ou négative (ne... pas, ne... plus, ne... jamais, ne... rien, ne... personne).
> Inversion : Viens-tu ? Va-t-il ?
`,
      exercices: [
        { type: "qcm", question: "« Comme la mer est belle ce matin ! » Quel est le type de cette phrase ?", choix: ["déclarative", "interrogative", "exclamative", "impérative"], reponse: 2, explication: "Elle exprime un **sentiment** (l'admiration) et se termine par un point d'exclamation : c'est une phrase **exclamative**." },
        { type: "qcm", question: "« Lave tes mains avant de manger. » Quel est le type de cette phrase ?", choix: ["impérative", "exclamative", "déclarative", "interrogative"], reponse: 0, explication: "Elle donne un **ordre** (ou un conseil), le verbe *lave* est à l'impératif et il n'a pas de sujet écrit : c'est une phrase **impérative**." },
        { type: "vf", question: "« Quelle belle pirogue ! » est une phrase non verbale.", reponse: true, explication: "C'est vrai : il n'y a **aucun verbe conjugué** dans cette phrase. C'est une phrase non verbale (et exclamative)." },
        { type: "saisie", question: "Écris cette phrase à la forme négative avec **ne... pas** : « Awa mange du riz. »", reponses: ["Awa ne mange pas de riz."], explication: "« Awa **ne** mange **pas de** riz. » Les deux mots de la négation entourent le verbe *mange*. Après *pas*, *du* devient **de**." },
        { type: "saisie", question: "Écris cette phrase à la forme négative : « Il voit quelqu'un. » (utilise le contraire de « quelqu'un »)", reponses: ["Il ne voit personne."], explication: "Le contraire de *quelqu'un* est **personne** : « Il **ne** voit **personne**. »" },
        { type: "qcm", question: "Quelle phrase négative est correctement écrite ?", choix: ["Je sais pas nager.", "Je ne sais pas nager.", "Je ne sais nager pas.", "Je sais ne pas nager."], reponse: 1, explication: "La négation a deux mots autour du verbe conjugué : « Je **ne** sais **pas** nager. » « Je sais pas » est de l'oral familier : à l'écrit, il faut le *ne*." },
        { type: "saisie", question: "Pose la question avec l'**inversion du sujet** : « Tu viens au marché. »", reponses: ["Viens-tu au marché ?"], explication: "On place le pronom sujet **après** le verbe, avec un trait d'union : « **Viens-tu** au marché ? » (On peut aussi dire « Est-ce que tu viens au marché ? », mais ici on demandait l'inversion.)" },
        { type: "qcm", question: "Quelle question est bien écrite ?", choix: ["Va il au champ ?", "Va-il au champ ?", "Va-t-il au champ ?", "Va t il au champ ?"], reponse: 2, explication: "Le verbe *va* finit par une voyelle et il est suivi de *il* : on ajoute **-t-** entre deux traits d'union pour faciliter la prononciation : « **Va-t-il** au champ ? »" },
        { type: "vf", question: "Dans « Elle n'aime pas le bruit », la négation est formée de « n' » et « pas ».", reponse: true, explication: "C'est vrai. Devant une voyelle (*aime*), *ne* devient **n'**. La négation est **n'... pas**." },
        { type: "redaction", question: "Écris **quatre phrases** sur ta journée à l'école : une déclarative, une interrogative, une exclamative et une impérative. Puis écris ta phrase déclarative à la forme négative.", corrige: `**Exemple de réponse**
- Déclarative : Ce matin, nous avons fait une dictée.
- Interrogative : As-tu fini ton exercice de calcul ?
- Exclamative : Quelle belle récréation nous avons eue !
- Impérative : Range ton cahier dans ton cartable.
- Déclarative à la forme négative : Ce matin, nous **n'**avons **pas** fait de dictée.

**Ce qui est vérifié**
- chaque phrase a le bon **type** et la bonne **ponctuation** (. ? ! .) ;
- la question utilise l'inversion (As-tu) ou *est-ce que* ;
- la phrase négative a **les deux mots** de la négation autour du verbe conjugué (ici l'auxiliaire *avons*) et *une dictée* devient *de dictée*.` },
      ],
    },
    {
      id: "nature-des-mots",
      titre: "La nature des mots (les classes grammaticales)",
      theme: "Grammaire",
      cours: `
## Nature ou fonction ?
- La **nature** d'un mot, c'est ce qu'il **est** : nom, verbe, adjectif... Elle ne change pas. On la trouve dans le dictionnaire.
- La **fonction** d'un mot, c'est le **rôle** qu'il joue dans la phrase (sujet, complément...). Elle change selon la phrase (voir le chapitre suivant).

## Les mots variables (ils changent de forme)
| Nature | Définition | Exemples |
|---|---|---|
| **nom commun** | désigne une personne, un animal, une chose, une idée | enfant, chèvre, puits, courage |
| **nom propre** | nom particulier, avec une majuscule | Awa, Ziguinchor, la Casamance, le Sénégal |
| **déterminant** | se place devant le nom et indique son genre et son nombre | le, la, les, un, une, des (articles) ; mon, ta, ses, notre (possessifs) ; ce, cet, cette, ces (démonstratifs) |
| **adjectif qualificatif** | dit comment est le nom | grand, rouge, gentil, sec |
| **pronom** | remplace un nom ou un groupe nominal | je, tu, il, elle, nous, vous, ils, elles, le, la, lui, leur... |
| **verbe** | dit une action ou un état ; il se conjugue | courir, manger, être, sembler |

## Les mots invariables (ils ne changent jamais)
| Nature | Rôle | Exemples |
|---|---|---|
| **adverbe** | précise le sens d'un verbe, d'un adjectif ou d'un autre adverbe | vite, bien, très, souvent, hier, ici, lentement |
| **préposition** | introduit un complément | à, de, dans, par, pour, sur, sous, avec, sans, chez, vers |
| **conjonction de coordination** | relie deux mots ou deux groupes de même rôle | **mais, ou, et, donc, or, ni, car** |

>! **Astuce pour les conjonctions de coordination**
>! Retiens la phrase : « **Mais où est donc Ornicar ?** » → mais, ou, et, donc, or, ni, car.

## Comment reconnaître la nature d'un mot ?
- Un **nom** peut avoir un déterminant devant lui : *le* puits, *une* idée.
- Un **verbe** change avec le temps : je mange, je mangeais, je mangerai.
- Un **adjectif** peut se mettre après « très » et s'accorde : une robe *très* belle, des robes belle**s**.
- Un **adverbe en -ment** vient souvent d'un adjectif : lent → lente**ment**, doux → douce**ment**.

>! **Exemple résolu** : « Hier, la petite Binta a vite couru vers sa maison. »
>! Hier : adverbe — la : déterminant (article) — petite : adjectif — Binta : nom propre — a couru : verbe (courir) — vite : adverbe — vers : préposition — sa : déterminant (possessif) — maison : nom commun.

## Attention aux pièges
- **le, la, les** sont des **déterminants** devant un nom (« **la** case ») mais des **pronoms** devant un verbe (« Je **la** vois »).
- **leur** est un déterminant devant un nom (« **leur** champ ») et un pronom devant un verbe (« Je **leur** parle »).

> **À retenir**
> Mots variables : nom, déterminant, adjectif, pronom, verbe.
> Mots invariables : adverbe, préposition, conjonction de coordination (mais, ou, et, donc, or, ni, car).
> La nature d'un mot ne change pas ; sa fonction dépend de la phrase.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la nature du mot **Ziguinchor** ?", choix: ["un nom commun", "un adjectif", "un verbe", "un nom propre"], reponse: 3, explication: "Ziguinchor est le nom d'une ville précise : c'est un **nom propre**, il prend une majuscule." },
        { type: "qcm", question: "Dans « une **vieille** charrette », quelle est la nature de « vieille » ?", choix: ["un adjectif qualificatif", "un nom commun", "un adverbe", "un déterminant"], reponse: 0, explication: "« Vieille » dit **comment est** la charrette : c'est un **adjectif qualificatif**. Il s'accorde avec *charrette* (féminin singulier)." },
        { type: "saisie", question: "Trouve l'**adverbe** dans cette phrase : « Le vieux berger marche lentement derrière ses moutons. »", reponses: ["lentement"], explication: "**Lentement** précise comment il marche. Il est invariable et vient de l'adjectif *lent* (féminin *lente* + *-ment*)." },
        { type: "vf", question: "« Car » est une conjonction de coordination.", reponse: true, explication: "C'est vrai : mais, ou, et, donc, or, ni, **car** sont les sept conjonctions de coordination (« Mais où est donc Ornicar ? »)." },
        { type: "qcm", question: "Dans « Mon frère **la** regarde », quelle est la nature de « la » ?", choix: ["un déterminant", "un nom", "une préposition", "un pronom"], reponse: 3, explication: "Ici, *la* est placé **devant un verbe** (regarde) et remplace un nom (par exemple *la télévision*) : c'est un **pronom**. Devant un nom (« la case »), ce serait un déterminant." },
        { type: "saisie", question: "Trouve la **préposition** dans cette phrase : « Ndèye range ses habits dans la valise. »", reponses: ["dans"], explication: "**Dans** est une préposition : elle introduit le complément *la valise*. Elle est invariable." },
        { type: "qcm", question: "Quel groupe ne contient que des **déterminants** ?", choix: ["le, cette, mes, un", "le, très, mes, un", "il, cette, mes, une", "le, cette, sur, un"], reponse: 0, explication: "*le* et *un* sont des articles, *cette* un démonstratif, *mes* un possessif : ce sont tous des **déterminants**. *Très* est un adverbe, *il* un pronom, *sur* une préposition." },
        { type: "saisie", question: "Forme l'adverbe en **-ment** à partir de l'adjectif « doux ».", reponses: ["doucement"], explication: "On part du féminin de l'adjectif : doux → douce → **doucement**. De même : lent → lente → lentement ; heureux → heureuse → heureusement." },
        { type: "qcm", question: "Dans « Ils **leur** donnent de l'eau », quelle est la nature de « leur » ?", choix: ["un déterminant possessif", "un adjectif", "un pronom personnel", "un adverbe"], reponse: 2, explication: "*Leur* est placé devant le verbe *donnent* : il remplace un groupe (par exemple *aux moutons*). C'est un **pronom**. Dans « leur champ », ce serait un déterminant possessif." },
        { type: "redaction", question: "Donne la nature de chaque mot de cette phrase : « Demain, mon oncle partira à Touba et il prendra le car. »", corrige: `**Corrigé**
| Mot | Nature |
|---|---|
| Demain | adverbe (de temps) |
| mon | déterminant possessif |
| oncle | nom commun |
| partira | verbe (partir, futur simple) |
| à | préposition |
| Touba | nom propre |
| et | conjonction de coordination |
| il | pronom personnel |
| prendra | verbe (prendre, futur simple) |
| le | déterminant (article défini) |
| car | nom commun |

**Attention** : ici, *car* est un **nom** (le car, le véhicule) car il a un déterminant devant lui. Dans « Je reste car il pleut », *car* serait une conjonction de coordination. La nature d'un mot se vérifie toujours **dans la phrase**.` },
      ],
    },
    {
      id: "fonctions-phrase",
      titre: "Les fonctions dans la phrase : sujet, verbe, compléments",
      theme: "Grammaire",
      cours: `
## Le verbe et le sujet
Le **verbe conjugué** est le mot le plus important de la phrase. Pour le trouver, change le temps de la phrase : le mot qui change est le verbe.
« Les femmes **pilent** le mil. » → Hier, les femmes **pilaient** le mil.

Le **sujet** dit **qui fait l'action** (ou de qui on parle). Pour le trouver, pose la question **« Qui est-ce qui ? »** (ou « Qu'est-ce qui ? ») devant le verbe.
« Les femmes pilent le mil. » → Qui est-ce qui pile ? → **les femmes** (sujet).

Le sujet peut être un nom propre (Awa), un groupe nominal (le petit chat de Saly), un pronom (il, nous). Il est parfois **placé après le verbe** : « Dans la cour jouent **les enfants**. »

## Les compléments du verbe (COD et COI)
- Le **COD** (complément d'objet direct) répond à la question **« quoi ? »** ou **« qui ? »** posée **après** le verbe, sans préposition.
  « Les femmes pilent **le mil**. » → Elles pilent quoi ? → le mil (COD).
- Le **COI** (complément d'objet indirect) est introduit par une **préposition** (à, de) : « à qui ? », « à quoi ? », « de qui ? », « de quoi ? ».
  « Moussa parle **à son ami**. » → Il parle à qui ? → à son ami (COI).

Le COD et le COI ne peuvent en général **ni être supprimés ni être déplacés**.

## Les compléments circonstanciels (CC)
Ils donnent des précisions sur les **circonstances** de l'action. On peut souvent les **supprimer** ou les **déplacer**.
| CC de... | Question | Exemple |
|---|---|---|
| **lieu** | où ? | Les enfants jouent **sous le manguier**. |
| **temps** | quand ? | **Pendant l'hivernage**, les paysans sèment l'arachide. |
| **manière** | comment ? | Le griot chante **avec force**. |
| **cause** (pour aller plus loin) | pourquoi ? | Il est resté à la maison **à cause de la pluie**. |

## L'attribut du sujet
Après un **verbe d'état** (être, paraître, sembler, devenir, demeurer, rester, avoir l'air), le mot qui dit comment est le sujet est un **attribut du sujet**. Il s'accorde avec le sujet.
« La mangue **est mûre**. » → *mûre* est attribut du sujet *la mangue*.

>! **Exemple résolu** : « Chaque matin, la maîtresse lit une histoire aux élèves. »
>! Verbe : lit — Sujet : qui est-ce qui lit ? **la maîtresse**
>! COD : elle lit quoi ? **une histoire** — COI : à qui ? **aux élèves**
>! CC de temps : quand ? **chaque matin** (on peut le déplacer ou le supprimer).

> **À retenir**
> Sujet : « Qui est-ce qui ? » avant le verbe.
> COD : « quoi ? / qui ? » après le verbe, sans préposition. COI : avec à ou de.
> CC de lieu (où ?), de temps (quand ?), de manière (comment ?) : souvent supprimables et déplaçables.
> Attribut du sujet : après être, paraître, sembler, devenir, rester...
`,
      exercices: [
        { type: "saisie", question: "Trouve le **sujet** du verbe (écris le sujet **en entier**, avec tous ses mots) dans cette phrase : « Chaque matin, les élèves du CM2 chantent l'hymne national. »", reponses: ["les élèves du CM2", "les élèves du cm2"], explication: "Qui est-ce qui chante ? → **les élèves du CM2**. Le sujet est tout le groupe nominal (le nom *élèves* et son complément *du CM2*)." },
        { type: "qcm", question: "Dans « Ma grand-mère prépare **le thiéboudiène** », quelle est la fonction du groupe en gras ?", choix: ["sujet", "COI", "complément circonstanciel de lieu", "COD"], reponse: 3, explication: "Elle prépare quoi ? → le thiéboudiène. Il n'y a pas de préposition : c'est un **COD**." },
        { type: "qcm", question: "Dans « Pendant l'hivernage, les paysans sèment l'arachide », qu'indique « Pendant l'hivernage » ?", choix: ["le lieu", "le temps", "la manière", "le sujet"], reponse: 1, explication: "Quand sèment-ils ? → **pendant l'hivernage** : c'est un complément circonstanciel de **temps**. On peut le déplacer : « Les paysans sèment l'arachide pendant l'hivernage. »" },
        { type: "vf", question: "Dans « Moussa téléphone à son oncle », « à son oncle » est un COI.", reponse: true, explication: "C'est vrai. Il téléphone **à qui** ? → à son oncle. Le complément est introduit par la préposition *à* : c'est un **COI**." },
        { type: "saisie", question: "Trouve le **complément circonstanciel de lieu** : « Les enfants obéissent à leur maître sur la plage de Yoff. »", reponses: ["sur la plage de Yoff", "sur la plage de yoff"], explication: "Où obéissent-ils ? → **sur la plage de Yoff** : c'est un complément circonstanciel de lieu. (*À leur maître* répond à « à qui ? » : c'est un COI.)" },
        { type: "qcm", question: "Dans « Dans la cour chantent les griots », quel est le sujet ?", choix: ["la cour", "chantent", "les griots", "dans la cour"], reponse: 2, explication: "Qui est-ce qui chante ? → **les griots**. Ici le sujet est placé **après** le verbe. C'est pour cela que le verbe est au pluriel : *chantent*." },
        { type: "qcm", question: "Dans « Le ciel devient **noir** avant l'orage », quelle est la fonction de « noir » ?", choix: ["attribut du sujet", "COD", "complément de manière", "sujet"], reponse: 0, explication: "*Devenir* est un **verbe d'état**. « Noir » dit comment est le sujet *le ciel* : c'est un **attribut du sujet**." },
        { type: "saisie", question: "Trouve le **COD** : « Au marché Sandaga, ma tante achète des tissus pour la Tabaski. »", reponses: ["des tissus"], explication: "Ma tante achète quoi ? → **des tissus** (COD). *Au marché Sandaga* est un CC de lieu ; *pour la Tabaski* indique le but." },
        { type: "vf", question: "On peut toujours supprimer le COD d'une phrase sans changer son sens.", reponse: false, explication: "C'est faux. Le COD complète le verbe : on ne peut en général **pas** le supprimer. « Ma grand-mère prépare » ne dit plus ce qu'elle prépare. Ce sont les **compléments circonstanciels** que l'on peut souvent supprimer." },
        { type: "redaction", question: "Analyse cette phrase : donne le verbe, le sujet, le COD, le COI et le complément circonstanciel de temps. « Hier soir, mon père a raconté un conte à ses enfants. »", corrige: `**Corrigé**
- **Verbe** : a raconté (verbe *raconter* au passé composé)
- **Sujet** : qui est-ce qui a raconté ? → **mon père**
- **COD** : il a raconté quoi ? → **un conte**
- **COI** : à qui ? → **à ses enfants**
- **CC de temps** : quand ? → **hier soir**

**Vérification** : on peut déplacer ou supprimer *hier soir* (« Mon père a raconté un conte à ses enfants hier soir. ») : c'est bien un complément circonstanciel. On ne peut pas supprimer *un conte* sans perdre le sens de la phrase : c'est un complément du verbe.` },
      ],
    },
    {
      id: "groupe-nominal",
      titre: "Le groupe nominal et ses expansions",
      theme: "Grammaire",
      cours: `
## Le groupe nominal minimal
Un **groupe nominal** (GN) est un groupe de mots organisé autour d'un **nom**, appelé le **nom noyau**.
Le GN minimal = **déterminant + nom** : *un* **arbre**, *la* **case**, *mes* **amis**.

## Les expansions du nom
On peut **enrichir** le nom avec des **expansions** : ce sont des mots que l'on ajoute autour du nom pour le préciser (dire comment il est, à qui il est, où il se trouve...).
| Expansion | Exemple | Comment la reconnaître |
|---|---|---|
| **adjectif qualificatif épithète** | une case **ronde** ; un **grand** baobab | adjectif placé juste avant ou après le nom |
| **complément du nom** | le marché **de Kaolack** ; un sac **en plastique** | introduit par une préposition (de, en, à...) |
| **proposition relative** | le garçon **qui court** ; le livre **que je lis** ; le village **où je suis né** | commence par **qui, que, où** (pronoms relatifs) |

*Épithète* se dit de l'adjectif **placé à côté du nom** : l'adjectif épithète touche le nom (une case **ronde**). Quand l'adjectif est séparé du nom par le verbe *être*, il n'est plus épithète mais **attribut du sujet** (la case **est ronde**).

>! **Exemple résolu** : « la vieille pirogue bleue de mon oncle qui dort sur la plage »
>! Nom noyau : **pirogue** — déterminant : la
>! Adjectifs épithètes : vieille, bleue
>! Complément du nom : de mon oncle
>! Proposition relative : qui dort sur la plage

## Les accords dans le GN
Le déterminant et les adjectifs s'accordent en **genre** (masculin, féminin) et en **nombre** (singulier, pluriel) avec le **nom noyau**.
- un grand arbre → de**s** grand**s** arbre**s**
- une petit**e** fille → de**s** petit**es** fille**s**
- Attention : le complément du nom ne s'accorde pas avec le nom noyau. « des sacs **de riz** » (riz reste au singulier).

## Réduire ou enrichir un GN
- **Réduire** : on enlève les expansions et on garde déterminant + nom. « Le vieux pêcheur de Mbour » → « le pêcheur ».
- **Enrichir** : on ajoute des expansions pour **décrire** avec précision. C'est très utile en production d'écrits (description, portrait).

## Qui, que, où
- **qui** est **sujet** dans la relative : « l'enfant **qui** chante » (c'est l'enfant qui chante).
- **que** (qu') est **COD** dans la relative : « la chanson **que** j'aime » (j'aime la chanson).
- **où** indique le **lieu** ou le **temps** : « la ville **où** j'habite », « le jour **où** il est arrivé ».

> **À retenir**
> GN = déterminant + nom noyau (+ expansions).
> Expansions : adjectif épithète, complément du nom (de, en, à...), proposition relative (qui, que, où).
> Déterminant et adjectifs s'accordent avec le nom noyau.
`,
      exercices: [
        { type: "saisie", question: "Quel est le **nom noyau** du groupe nominal « le grand marché de Kaolack » ?", reponses: ["marché", "le nom noyau est marché", "C'est marché."], explication: "Le mot principal est **marché** : *le* est son déterminant, *grand* un adjectif épithète, *de Kaolack* un complément du nom." },
        { type: "qcm", question: "Dans « un sac **de riz** », quelle est la fonction de « de riz » ?", choix: ["adjectif épithète", "proposition relative", "complément du nom", "sujet"], reponse: 2, explication: "« de riz » complète le nom *sac* et commence par la préposition **de** : c'est un **complément du nom**." },
        { type: "qcm", question: "Quel groupe nominal contient une **proposition relative** ?", choix: ["la case ronde", "la case de mon grand-père", "la petite case", "la case où je dors"], reponse: 3, explication: "« **où je dors** » commence par le pronom relatif *où* et contient un verbe conjugué (*dors*) : c'est une proposition relative." },
        { type: "vf", question: "Dans « des sacs de riz », le mot « riz » doit être au pluriel.", reponse: false, explication: "C'est faux. Le complément du nom ne s'accorde pas avec le nom noyau : des sacs **de riz** (le riz en général). Seuls le déterminant et les adjectifs s'accordent avec *sacs*." },
        { type: "saisie", question: "Réduis ce groupe nominal au déterminant et au nom : « la jolie robe verte de ma sœur »", reponses: ["la robe"], explication: "On enlève les expansions (*jolie*, *verte*, *de ma sœur*) et on garde **la robe**." },
        { type: "saisie", question: "Complète avec le bon pronom relatif (qui, que ou où) : « Voici le puits ___ les femmes puisent l'eau. »", reponses: ["où"], explication: "On parle d'un **lieu** : les femmes puisent l'eau **dans ce puits**. On utilise **où** (avec un accent grave)." },
        { type: "saisie", question: "Complète avec le bon pronom relatif (qui, que ou où) : « La chanson ___ je préfère parle de l'Afrique. »", reponses: ["que"], explication: "Je préfère **la chanson** : *la chanson* est COD de *préfère*. On utilise **que**." },
        { type: "qcm", question: "Quelle est la bonne orthographe ?", choix: ["des petites filles joyeuses", "des petits filles joyeuses", "des petites filles joyeuse", "des petite filles joyeuses"], reponse: 0, explication: "Le nom noyau *filles* est féminin pluriel. Le déterminant et les deux adjectifs s'accordent : de**s** petit**es** fille**s** joyeus**es**." },
        { type: "vf", question: "Dans « l'enfant qui chante », le pronom « qui » est sujet du verbe « chante ».", reponse: true, explication: "C'est vrai : qui est-ce qui chante ? → *qui*, mis pour *l'enfant*. Le pronom relatif **qui** est toujours sujet dans la relative." },
        { type: "redaction", question: "Enrichis le groupe nominal « un arbre » de trois façons : 1) avec un adjectif épithète, 2) avec un complément du nom, 3) avec une proposition relative. Puis écris une phrase qui contient les trois expansions à la fois.", corrige: `**Exemple de réponse**
1. Adjectif épithète : un arbre **immense**
2. Complément du nom : un arbre **de la cour**
3. Proposition relative : un arbre **qui donne de l'ombre**

Phrase avec les trois : « Le **grand** manguier **de notre cour**, **qui donne de l'ombre aux élèves**, porte déjà des fruits. »

**Ce qui est vérifié** : l'adjectif s'accorde avec le nom, le complément du nom commence par une préposition, la relative commence par qui, que ou où et contient un verbe conjugué.` },
      ],
    },
    {
      id: "present-futur",
      titre: "Le présent et le futur simple de l'indicatif",
      theme: "Conjugaison",
      cours: `
## Les trois groupes de verbes
| Groupe | Infinitif | Exemples |
|---|---|---|
| **1er groupe** | en **-er** (sauf *aller*) | chanter, manger, jouer |
| **2e groupe** | en **-ir**, avec **-issons** à « nous » | finir (nous finissons), grandir, choisir, réussir |
| **3e groupe** | tous les autres | être, avoir, aller, faire, venir, prendre, voir, partir (nous partons) |

## Le présent de l'indicatif
Il exprime ce qui se passe **maintenant**, une **habitude** ou une **vérité générale** (« La Terre tourne autour du Soleil. »).

| Personne | chanter (1er) | finir (2e) | être | avoir | aller | faire |
|---|---|---|---|---|---|---|
| je (j') | chant**e** | fin**is** | suis | ai | vais | fais |
| tu | chant**es** | fin**is** | es | as | vas | fais |
| il, elle, on | chant**e** | fin**it** | est | a | va | fait |
| nous | chant**ons** | fin**issons** | sommes | avons | allons | faisons |
| vous | chant**ez** | fin**issez** | êtes | avez | allez | faites |
| ils, elles | chant**ent** | fin**issent** | sont | ont | vont | font |

Autres verbes du 3e groupe à connaître : **venir** (je viens, nous venons, ils viennent), **prendre** (je prends, il prend, nous prenons, ils prennent), **dire** (je dis, vous dites), **pouvoir** (je peux, tu peux, il peut), **vouloir** (je veux, il veut), **voir** (je vois, nous voyons).

>! **Verbes en -cer et -ger**
>! Pour garder le même son à « nous » : nous man**ge**ons (avec un e), nous commen**ç**ons (avec une cédille).

## Le futur simple de l'indicatif
Il exprime ce qui se passera **plus tard**. On prend en général l'**infinitif** et on ajoute les terminaisons : **-ai, -as, -a, -ons, -ez, -ont**.
- chanter → je chanter**ai**, tu chanter**as**, il chanter**a**, nous chanter**ons**, vous chanter**ez**, ils chanter**ont**
- finir → je finir**ai** ; prendre → je prendr**ai** (on enlève le *e* final)

Verbes irréguliers (le radical change, les terminaisons restent les mêmes) :
| Verbe | Futur | Verbe | Futur |
|---|---|---|---|
| être | je **serai** | venir | je **viendrai** |
| avoir | j'**aurai** | voir | je **verrai** |
| aller | j'**irai** | pouvoir | je **pourrai** |
| faire | je **ferai** | vouloir | je **voudrai** |

## Erreurs fréquentes
- Oublier le **e** muet du 1er groupe au futur : je **jouerai**, tu **crieras** (on entend peu ce *e*, mais on l'écrit).
- Confondre « il **finit** » (présent) et « il **finira** » (futur).
- Écrire « ils **von** » : c'est **ils vont**.

> **À retenir**
> Présent du 1er groupe : -e, -es, -e, -ons, -ez, -ent. 2e groupe : -is, -is, -it, -issons, -issez, -issent.
> Futur : infinitif + -ai, -as, -a, -ons, -ez, -ont. Irréguliers : serai, aurai, irai, ferai, viendrai, verrai, pourrai.
`,
      exercices: [
        { type: "qcm", question: "À quel groupe appartient le verbe **grandir** (nous grandissons) ?", choix: ["1er groupe", "2e groupe", "3e groupe", "il n'a pas de groupe"], reponse: 1, explication: "*Grandir* se termine par **-ir** et fait **nous grandissons** : c'est un verbe du **2e groupe**, comme *finir*." },
        { type: "saisie", question: "Conjugue le verbe **manger** au présent : « Nous ___ du couscous le dimanche. »", reponses: ["mangeons", "nous mangeons"], explication: "Nous **mangeons** : on garde le **e** après le g pour garder le son [j] de *manger*." },
        { type: "saisie", question: "Conjugue le verbe **finir** au présent : « Les élèves ___ leur exercice. »", reponses: ["finissent", "les élèves finissent"], explication: "Ils **finissent** : au pluriel, les verbes du 2e groupe prennent **-iss-** (nous finissons, vous finissez, ils finissent)." },
        { type: "qcm", question: "Quelle forme du verbe **faire** est correcte ?", choix: ["vous faisez", "vous faites", "vous fait", "vous fesez"], reponse: 1, explication: "*Faire* est irrégulier : vous **faites** (comme vous *êtes* et vous *dites*)." },
        { type: "saisie", question: "Conjugue le verbe **aller** au présent : « Mes cousins ___ à Touba pour le Magal. »", reponses: ["vont", "mes cousins vont"], explication: "Aller au présent : je vais, tu vas, il va, nous allons, vous allez, ils **vont**." },
        { type: "saisie", question: "Conjugue le verbe **être** au futur simple : « Demain, je ___ au marché avec ma mère. »", reponses: ["serai", "je serai"], explication: "*Être* a un futur irrégulier : je **serai**, tu seras, il sera, nous serons, vous serez, ils seront." },
        { type: "saisie", question: "Conjugue le verbe **jouer** au futur simple : « Pendant les vacances, tu ___ avec tes cousins. »", reponses: ["joueras", "tu joueras"], explication: "Infinitif *jouer* + **-as** : tu **joueras**. N'oublie pas le **e** de l'infinitif, même s'il s'entend peu." },
        { type: "qcm", question: "Quelle phrase est au **futur simple** ?", choix: ["Les paysans sèment le mil.", "Les paysans semaient le mil.", "Les paysans sèmeront le mil.", "Les paysans ont semé le mil."], reponse: 2, explication: "« sèmeront » a la terminaison du futur **-ont** : c'est le futur simple. *Sèment* est au présent, *semaient* à l'imparfait, *ont semé* au passé composé." },
        { type: "saisie", question: "Conjugue le verbe **venir** au futur simple : « L'année prochaine, nous ___ te voir à Ziguinchor. »", reponses: ["viendrons", "nous viendrons"], explication: "Venir au futur : je **viendr**ai, nous **viendrons**. Le radical devient *viendr-*." },
        { type: "redaction", question: "Tu prépares la Tabaski avec ta famille. Écris **cinq phrases au futur simple** pour dire ce que chacun fera. Utilise au moins les verbes **aller, faire, être, avoir** et un verbe du 1er groupe.", corrige: `**Exemple de réponse**
1. Mon père **ira** acheter le mouton au marché aux moutons.
2. Ma mère et mes tantes **feront** cuire la viande avec des oignons.
3. Nous **aurons** de nouveaux habits pour la fête.
4. Moi, je **serai** chargé d'aller saluer les voisins.
5. Le soir, mes cousins **danseront** dans la cour.

**Ce qui est vérifié**
- les terminaisons du futur : -ai, -as, -a, -ons, -ez, -ont ;
- les radicaux irréguliers : **ir**- (aller), **fer**- (faire), **aur**- (avoir), **ser**- (être) ;
- le *e* de l'infinitif pour le 1er groupe : dans**e**ront ;
- l'accord du verbe avec le sujet (Ma mère et mes tantes → feront).` },
      ],
    },
    {
      id: "temps-du-passe",
      titre: "Les temps du passé : imparfait, passé composé, passé simple",
      theme: "Conjugaison",
      cours: `
## L'imparfait
Il sert à **décrire** dans le passé (le décor, les personnages) et à dire les **habitudes** passées : « Autrefois, mon grand-père **cultivait** l'arachide. »
Terminaisons, pour **tous** les verbes : **-ais, -ais, -ait, -ions, -iez, -aient**.
| chanter | finir | être | avoir |
|---|---|---|---|
| je chant**ais** | je finiss**ais** | j'étais | j'avais |
| tu chant**ais** | tu finiss**ais** | tu étais | tu avais |
| il chant**ait** | il finiss**ait** | il était | il avait |
| nous chant**ions** | nous finiss**ions** | nous étions | nous avions |
| vous chant**iez** | vous finiss**iez** | vous étiez | vous aviez |
| ils chant**aient** | ils finiss**aient** | ils étaient | ils avaient |

## Le passé composé
Il dit une action **terminée**. C'est un temps **composé** de deux mots : l'**auxiliaire** *avoir* ou *être* au présent + le **participe passé** du verbe.
- avec *avoir* : j'**ai mangé**, tu **as fini**, il **a pris**, nous **avons fait**
- avec *être* (verbes de mouvement surtout : aller, venir, partir, arriver, entrer, sortir, tomber, rester, naître, mourir) : je **suis allé**, elle **est partie**, ils **sont venus**

Participes passés : 1er groupe en **-é** (chanté), 2e groupe en **-i** (fini), 3e groupe variés : été, eu, fait, pris, dit, venu, vu, mis, écrit.
Avec **être**, le participe passé s'accorde avec le sujet : « Awa est part**ie**. » ; « Les garçons sont arrivé**s**. »

## Le passé simple
C'est le temps du **récit écrit** (contes, romans). Il raconte les **actions principales** qui se suivent. On l'utilise surtout à la **3e personne**.
| Personne | 1er groupe (chanter) | 2e groupe (finir) |
|---|---|---|
| il, elle | chant**a** | fin**it** |
| ils, elles | chant**èrent** | fin**irent** |
| je / tu | chant**ai** / chant**as** | fin**is** / fin**is** |
| nous / vous | chant**âmes** / chant**âtes** | fin**îmes** / fin**îtes** |

Verbes du 3e groupe très utiles : être → il **fut**, ils **furent** ; avoir → il **eut**, ils **eurent** ; faire → il **fit**, ils **firent** ; dire → il **dit** ; prendre → il **prit** ; venir → il **vint**, ils **vinrent** ; voir → il **vit** ; aller → il **alla**, ils **allèrent**.

## Imparfait ou passé simple ?
>! **Exemple**
>! « Il **faisait** nuit. Le village **dormait**. Soudain, un chien **aboya** et Samba **sortit** de la case. »
>! *faisait, dormait* (imparfait) : le décor, ce qui dure.
>! *aboya, sortit* (passé simple) : les actions soudaines, qui se suivent.

## Le plus-que-parfait (pour aller plus loin)
Auxiliaire à l'**imparfait** + participe passé : « Quand je suis arrivé, le car **était** déjà **parti**. » Il dit une action passée qui s'est faite **avant** une autre action passée.

> **À retenir**
> Imparfait : -ais, -ais, -ait, -ions, -iez, -aient → décor, habitudes.
> Passé composé : avoir ou être + participe passé → action terminée.
> Passé simple : il chanta, ils chantèrent ; il finit, ils finirent → actions du récit.
`,
      exercices: [
        { type: "saisie", question: "Conjugue le verbe **habiter** à l'imparfait : « Autrefois, nous ___ à Kolda. »", reponses: ["habitions", "nous habitions"], explication: "Imparfait, 1re personne du pluriel : nous habit**ions**." },
        { type: "saisie", question: "Conjugue le verbe **être** à l'imparfait : « Les rues ___ pleines d'eau après l'orage. »", reponses: ["étaient", "les rues étaient"], explication: "Être à l'imparfait : j'étais, tu étais, il était, nous étions, vous étiez, ils **étaient**." },
        { type: "qcm", question: "Quel est l'auxiliaire du verbe **partir** au passé composé ?", choix: ["avoir : il a parti", "aller : il va parti", "faire : il fait parti", "être : il est parti"], reponse: 3, explication: "*Partir* est un verbe de mouvement : il se conjugue avec **être** au passé composé : il **est parti**, elle **est partie**." },
        { type: "saisie", question: "Écris le verbe au passé composé : « Ce matin, Awa (arriver) ___ en retard. »", reponses: ["est arrivée", "Awa est arrivée"], explication: "*Arriver* se conjugue avec **être**, donc le participe passé s'accorde avec le sujet *Awa* (féminin) : Awa **est arrivée**." },
        { type: "saisie", question: "Écris le verbe au passé composé : « Mon frère (prendre) ___ le car rapide. »", reponses: ["a pris", "mon frère a pris"], explication: "*Prendre* se conjugue avec **avoir** : il **a pris**. Le participe passé de *prendre* est *pris* (avec un s : on l'entend au féminin, *prise*)." },
        { type: "qcm", question: "Quelle forme est au **passé simple** ?", choix: ["il chantait", "il a chanté", "il chantera", "il chanta"], reponse: 3, explication: "*Il chanta* est au passé simple (1er groupe : -a à la 3e personne). *Chantait* : imparfait ; *a chanté* : passé composé ; *chantera* : futur." },
        { type: "saisie", question: "Conjugue le verbe **crier** au passé simple : « Les enfants ___ de joie. »", reponses: ["crièrent", "les enfants crièrent"], explication: "Passé simple du 1er groupe à la 3e personne du pluriel : **-èrent** → ils **crièrent**." },
        { type: "qcm", question: "Complète au passé simple : « Le lion ___ un grand rugissement. » (faire)", choix: ["fit", "faisa", "faisait", "fut"], reponse: 0, explication: "*Faire* au passé simple : il **fit**, ils firent. *Faisa* n'existe pas ; *faisait* est l'imparfait ; *fut* vient du verbe *être*." },
        { type: "vf", question: "Dans « Il pleuvait depuis le matin quand Samba sortit », « pleuvait » décrit le décor et « sortit » une action soudaine.", reponse: true, explication: "C'est vrai : l'**imparfait** (*pleuvait*) installe le décor, ce qui dure ; le **passé simple** (*sortit*) dit une action précise qui arrive." },
        { type: "redaction", question: "Réécris ce texte au passé, en employant l'imparfait pour le décor et le passé simple pour les actions : « Il fait très chaud. Les enfants jouent sous le manguier. Soudain, une mangue tombe. Ousmane la ramasse et la partage avec ses amis. »", corrige: `**Corrigé**
Il **faisait** très chaud. Les enfants **jouaient** sous le manguier. Soudain, une mangue **tomba**. Ousmane la **ramassa** et la **partagea** avec ses amis.

**Explications**
- *faisait*, *jouaient* : **imparfait**, car c'est le décor et des actions qui durent.
- *tomba*, *ramassa*, *partagea* : **passé simple**, car ce sont des actions soudaines qui se suivent (le mot *Soudain* l'annonce).
- 1er groupe au passé simple, 3e personne du singulier : **-a** (tomba). Pour *partager*, on garde le **e** après le g : parta**gea**.` },
      ],
    },
    {
      id: "imperatif-conditionnel",
      titre: "L'impératif, le conditionnel présent (et le subjonctif pour aller plus loin)",
      theme: "Conjugaison",
      cours: `
## L'impératif présent
Il sert à donner un **ordre**, un **conseil** ou une **consigne**. Il n'a que **3 personnes** et **pas de sujet** écrit.
| chanter | finir | aller | être | avoir |
|---|---|---|---|---|
| chant**e** | fin**is** | va | sois | aie |
| chant**ons** | fin**issons** | allons | soyons | ayons |
| chant**ez** | fin**issez** | allez | soyez | ayez |

>! **Le piège du 1er groupe**
>! À la 2e personne du singulier, les verbes du 1er groupe (et *aller*) n'ont **pas de s** : « Mang**e** ta bouillie. » ; « **Va** au puits. »
>! Mais on écrit « Mang**es**-en » et « **Va**s-y » (avec un s devant *en* et *y*).

## Le conditionnel présent
Il exprime un **souhait**, une demande **polie** ou une action qui dépend d'une **condition**.
- souhait : « J'**aimerais** devenir médecin. »
- politesse : « **Pourrais**-tu m'aider ? »
- condition : « Si j'avais un vélo, j'**irais** à l'école plus vite. »

Formation : **radical du futur** + terminaisons de l'**imparfait** (-ais, -ais, -ait, -ions, -iez, -aient).
- chanter → je chanter**ais**, nous chanter**ions**, ils chanter**aient**
- être → je **serais** ; avoir → j'**aurais** ; aller → j'**irais** ; faire → je **ferais** ; pouvoir → je **pourrais** ; vouloir → je **voudrais**

>! **Futur ou conditionnel ?**
>! je chanterai (futur, sans s) / je chanterais (conditionnel, avec s).
>! Astuce : remplace par « nous » : *nous chanterons* (futur) / *nous chanterions* (conditionnel).

## Avec « si » : attention !
Après **si**, on emploie l'**imparfait**, jamais le conditionnel : « Si j'**avais** le temps, je **viendrais**. » (et non « si j'aurais »).

## Le subjonctif présent (pour aller plus loin)
Ce mode est une première découverte : retiens seulement l'idée. On l'emploie après **il faut que**, **je veux que** : « Il faut que tu **finisses** ton travail. »
Terminaisons : **-e, -es, -e, -ions, -iez, -ent** : que je chant**e**, que nous chant**ions**.
Verbes très utiles : être → que je **sois**, que tu **sois**, qu'il **soit** ; avoir → que j'**aie**, qu'il **ait** ; aller → que j'**aille** ; faire → que je **fasse**.

> **À retenir**
> Impératif : 3 personnes, pas de sujet ; 1er groupe sans s : mange, chante, va.
> Conditionnel : radical du futur + -ais, -ais, -ait, -ions, -iez, -aient (je voudrais, j'irais).
> Après si : imparfait. Après il faut que : subjonctif (que je sois, que tu fasses).
`,
      exercices: [
        { type: "saisie", question: "Conjugue **ranger** à l'impératif présent, 2e personne du singulier : « ___ ta chambre ! »", reponses: ["Range"], explication: "Les verbes du 1er groupe n'ont **pas de s** à la 2e personne du singulier de l'impératif : **Range** ta chambre !" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Manges ton repas.", "Mangent ton repas.", "Tu mange ton repas !", "Mange ton repas."], reponse: 3, explication: "À l'impératif, 2e personne du singulier, un verbe du 1er groupe s'écrit sans s et sans sujet : « **Mange** ton repas. »" },
        { type: "saisie", question: "Conjugue **être** à l'impératif présent, 2e personne du pluriel : « ___ sages pendant la cérémonie ! »", reponses: ["Soyez"], explication: "*Être* à l'impératif : sois, soyons, **soyez**. (Attention : pas de i après le y.)" },
        { type: "saisie", question: "Conjugue **vouloir** au conditionnel présent pour une demande polie : « Je ___ un kilo de mangues, s'il vous plaît. »", reponses: ["voudrais", "je voudrais"], explication: "Le conditionnel exprime ici la **politesse** : je **voudrais** (radical du futur *voudr-* + *-ais*)." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Si j'aurais de l'argent, j'achèterais un vélo.", "Si j'avais de l'argent, j'achèterais un vélo.", "Si j'avais de l'argent, j'achèterai un vélo.", "Si j'aurai de l'argent, j'achèterais un vélo."], reponse: 1, explication: "Après **si**, on met l'**imparfait** (*j'avais*), et dans l'autre partie de la phrase, le **conditionnel** (*j'achèterais*, avec -ais)." },
        { type: "qcm", question: "« Demain, je **partirai** à Saint-Louis. » Ce verbe est au :", choix: ["futur simple", "conditionnel présent", "imparfait", "subjonctif présent"], reponse: 0, explication: "*Partirai* se termine par **-ai** (sans s) et dit une action certaine dans l'avenir : c'est le **futur simple**. Au conditionnel, on écrirait *partirais*." },
        { type: "saisie", question: "Conjugue **aller** au conditionnel présent : « Si j'avais des ailes, j'___ jusqu'à la lune. »", reponses: ["irais", "j'irais"], explication: "Radical du futur de *aller* : **ir-** ; terminaison de l'imparfait : **-ais** → j'**irais**." },
        { type: "qcm", question: "Complète : « Il faut que tu ___ tes devoirs avant de jouer. » (faire)", choix: ["fais", "feras", "fasses", "faisais"], reponse: 2, explication: "Après **il faut que**, on emploie le **subjonctif** : que tu **fasses**." },
        { type: "vf", question: "« Que nous soyons » est le verbe *être* au subjonctif présent.", reponse: true, explication: "C'est vrai : que je sois, que tu sois, qu'il soit, que nous **soyons**, que vous soyez, qu'ils soient." },
        { type: "redaction", question: "Écris le **règlement de la classe** en cinq consignes à l'impératif (2e personne du pluriel), puis une phrase au conditionnel qui commence par « Si tous les élèves respectaient ce règlement, ... ».", corrige: `**Exemple de réponse**
1. **Arrivez** à l'heure le matin.
2. **Levez** le doigt avant de parler.
3. **Prenez** soin des livres et des tables-bancs.
4. **Soyez** polis avec vos camarades et vos maîtres.
5. **Jetez** les papiers dans la poubelle.

Si tous les élèves respectaient ce règlement, la classe **serait** plus calme et nous **travaillerions** mieux.

**Ce qui est vérifié**
- impératif sans sujet, terminaison **-ez** à la 2e personne du pluriel (*soyez* pour être) ;
- après **si**, l'imparfait (*respectaient*) ; dans l'autre partie, le conditionnel (*serait*, *travaillerions*).` },
      ],
    },
    {
      id: "accords",
      titre: "Les accords : sujet et verbe, participe passé",
      theme: "Orthographe",
      cours: `
## L'accord du verbe avec son sujet
Le verbe s'accorde **en personne et en nombre** avec son **sujet**. Cherche toujours le sujet avec « Qui est-ce qui ? ».
- « Le chien aboie. » → « Les chien**s** aboi**ent**. »

### Les cas difficiles
| Cas | Exemple | Explication |
|---|---|---|
| sujet **éloigné** du verbe | Les **filles** de ma voisine **chantent**. | c'est *les filles* qui chantent, pas *ma voisine* |
| sujet **après** le verbe | Dans la cour **jouent** les **enfants**. | qui est-ce qui joue ? les enfants |
| **plusieurs sujets** | **Awa et Binta préparent** le repas. | deux sujets = pluriel |
| sujet **on** | **On** **mange** à midi. | *on* se conjugue comme *il* |
| pronom **qui** | C'est **moi qui suis** le chef. C'est **toi qui as** gagné. | le verbe s'accorde avec le mot que *qui* remplace |
| pronom placé entre le sujet et le verbe | Les enfants **les** **regardent**. | *les* n'est pas le sujet |

## L'accord du participe passé
### Avec l'auxiliaire être : il s'accorde avec le sujet
- Moussa est parti. → Awa est parti**e**. → Les garçons sont parti**s**. → Les filles sont parti**es**.

### Avec l'auxiliaire avoir : il ne s'accorde PAS avec le sujet
- Awa **a mangé**. Les filles **ont mangé**. (pas de *e*, pas de *s*)
- Pour aller plus loin : il s'accorde avec le **COD** seulement si ce COD est placé **avant** le verbe : « Les mangues que j'ai mangé**es** étaient sucrées. »

### Participe passé employé comme adjectif
Il s'accorde avec le nom comme un adjectif : « une porte ferm**ée** », « des habits lav**és** ».

>! **Méthode : -é, -er ou -ez ?**
>! Remplace le verbe par **vendre** ou **prendre** :
>! - si tu peux dire *vendu* / *pris* → participe passé en **-é** : « J'ai **mangé** » → « J'ai **vendu** ».
>! - si tu peux dire *vendre* / *prendre* → infinitif en **-er** : « Je vais **manger** » → « Je vais **vendre** ».
>! - avec *vous* → **-ez** : « Vous **mangez** ».

## L'accord dans le groupe nominal
Le déterminant et l'adjectif s'accordent avec le nom : « de**s** mangue**s** mûr**es** ». Un adjectif qui qualifie un nom masculin et un nom féminin se met au **masculin pluriel** : « un pagne et une robe **neufs** ».

> **À retenir**
> Le verbe s'accorde avec son sujet (cherche-le avec « Qui est-ce qui ? »).
> Avec être, le participe passé s'accorde avec le sujet. Avec avoir, il ne s'accorde pas avec le sujet.
> -é ou -er ? Remplace par *vendu* / *vendre*.
`,
      exercices: [
        { type: "saisie", question: "Accorde le verbe au présent : « Les élèves de la maîtresse (écouter) ___ attentivement. »", reponses: ["écoutent", "les élèves écoutent"], explication: "Qui est-ce qui écoute ? → **les élèves** (et non *la maîtresse*). Sujet pluriel → ils **écoutent**." },
        { type: "qcm", question: "Quelle phrase est correctement accordée ?", choix: ["Awa et Fatou préparent le repas.", "Awa et Fatou prépare le repas.", "Awa et Fatou prépares le repas.", "Awa et Fatou préparons le repas."], reponse: 0, explication: "Deux sujets (*Awa et Fatou*) = elles → verbe au pluriel : **préparent**." },
        { type: "saisie", question: "Accorde le verbe au présent : « Sous le baobab (dormir) ___ les moutons. »", reponses: ["dorment"], explication: "Qui est-ce qui dort ? → **les moutons**, placés **après** le verbe. Sujet pluriel → ils **dorment**." },
        { type: "qcm", question: "Complète : « Les filles sont ___ au marché. » (aller)", choix: ["allé", "allées", "allés", "aller"], reponse: 1, explication: "Avec l'auxiliaire **être**, le participe passé s'accorde avec le sujet *les filles* (féminin pluriel) : **allées**." },
        { type: "qcm", question: "Complète : « Mes sœurs ont ___ le linge. » (laver)", choix: ["lavées", "lavé", "laver", "lavés"], reponse: 1, explication: "Avec l'auxiliaire **avoir**, le participe passé ne s'accorde pas avec le sujet : mes sœurs ont **lavé** le linge." },
        { type: "saisie", question: "Écris **-é** ou **-er** : « Le maître veut parl___ aux parents. » Écris le verbe en entier.", reponses: ["parler"], explication: "On peut dire « Le maître veut **vendre** » : c'est l'**infinitif** → **parler**." },
        { type: "saisie", question: "Écris **-é** ou **-er** : « Hier, Modou a pêch___ un gros poisson. » Écris le verbe en entier.", reponses: ["pêché"], explication: "On peut dire « Modou a **vendu** » : c'est le **participe passé** → **pêché**." },
        { type: "vf", question: "Dans « C'est toi qui as gagné », le verbe est bien accordé.", reponse: true, explication: "C'est vrai : *qui* remplace *toi*, donc le verbe se conjugue à la 2e personne : toi qui **as** gagné." },
        { type: "saisie", question: "Accorde le verbe au présent : « Le vendeur nous (proposer) ___ des oranges. »", reponses: ["propose", "le vendeur nous propose"], explication: "Qui est-ce qui propose ? → **le vendeur**. *Nous* est placé entre le sujet et le verbe, mais ce n'est pas le sujet : il **propose**." },
        { type: "redaction", question: "**Dictée à corriger** : ce texte contient 5 erreurs d'accord. Recopie-le correctement et explique chaque correction. « Ce matin, les enfants du village est partis au champ. Awa et sa sœur porte les calebasses. Ils ont chantés en marchant. La petite Binta est arrivé la dernière. Les femmes les attend sous l'arbre. »", corrige: `**Texte corrigé**
Ce matin, les enfants du village **sont** partis au champ. Awa et sa sœur **portent** les calebasses. Ils ont **chanté** en marchant. La petite Binta est **arrivée** la dernière. Les femmes les **attendent** sous l'arbre.

**Explications**
1. *sont* : le sujet est *les enfants* (pluriel), et non *le village*.
2. *portent* : deux sujets (*Awa et sa sœur*) → pluriel.
3. *chanté* : avec l'auxiliaire **avoir**, pas d'accord avec le sujet.
4. *arrivée* : avec l'auxiliaire **être**, accord avec le sujet *Binta* (féminin).
5. *attendent* : le sujet est *les femmes* ; *les* placé devant le verbe n'est pas le sujet.` },
      ],
    },
    {
      id: "homophones",
      titre: "Les homophones grammaticaux",
      theme: "Orthographe",
      cours: `
## Qu'est-ce qu'un homophone ?
Des **homophones** sont des mots qui se **prononcent pareil** mais qui **s'écrivent différemment** et n'ont pas le même sens. Pour les distinguer, on **remplace** le mot par un autre.

| Homophones | Astuce : remplace par... | Exemples |
|---|---|---|
| **a** / **à** | *a* = verbe avoir → **avait** | Il **a** faim. (il avait faim) — Il va **à** Thiès. |
| **est** / **et** | *est* = verbe être → **était** ; *et* → **et puis** | Le ciel **est** bleu. — Awa **et** Binta. |
| **son** / **sont** | *sont* = verbe être → **étaient** ; *son* → **mon** | Ils **sont** contents. — **son** cahier |
| **on** / **ont** | *ont* = verbe avoir → **avaient** ; *on* → **il** | Ils **ont** soif. — **On** part demain. |
| **ou** / **où** | *ou* → **ou bien** ; *où* = lieu ou temps | Du riz **ou** du mil ? — **Où** vas-tu ? |
| **ce** / **se** | *ce* + nom → **ce, cette** ; *se* + verbe → **me, te** | **ce** garçon — il **se** lave (je me lave) |
| **ces** / **ses** | *ses* → **mes** (à lui, à elle) ; *ces* → **ces ... -là** (montrer) | **ses** frères — **ces** arbres-là |
| **c'est** / **s'est** | *c'est* → **cela est** ; *s'est* + participe → **je me suis** | **C'est** la fête. — Il **s'est** blessé. |
| **la** / **l'a** / **là** | *l'a* → **l'avait** ; *là* = lieu → **ici** ; *la* → **une** | **La** case. — Il **l'a** vu. — Viens **là** ! |
| **mais** / **mes** | *mais* = opposition → **pourtant** ; *mes* → **tes** | Il pleut **mais** il sort. — **mes** amis |
| **peu** / **peut** / **peux** | *peut*, *peux* = verbe pouvoir → **pouvait** ; *peu* = pas beaucoup | Il **peut** venir. Je **peux**. Un **peu** de sel. |

>! **Exemple résolu**
>! « Moussa ___ parti ___ Dakar. »
>! 1er trou : « Moussa *était* parti » → verbe être → **est**.
>! 2e trou : « Moussa avait Dakar » ne veut rien dire → préposition → **à**.
>! Réponse : « Moussa **est** parti **à** Dakar. »

## Erreurs fréquentes
- Oublier l'**accent** de *à*, *où*, *là* : ils changent le sens !
- Écrire « il **à** faim » : *à* ne peut jamais être remplacé par *avait*.

> **À retenir**
> Pour choisir, je remplace : a → avait ; est → était ; sont → étaient ; ont → avaient ; ou → ou bien ; ses → mes ; se → me ; l'a → l'avait ; là → ici.
`,
      exercices: [
        { type: "saisie", question: "Complète avec **a** ou **à** : « Ma tante ___ acheté du poisson. »", reponses: ["a"], explication: "On peut dire « Ma tante **avait** acheté » : c'est le verbe avoir → **a** (sans accent)." },
        { type: "saisie", question: "Complète avec **a** ou **à** : « Nous allons ___ l'école à pied. »", reponses: ["à"], explication: "« Nous allons *avait* l'école » ne veut rien dire : c'est une préposition → **à** (avec un accent grave)." },
        { type: "saisie", question: "Complète avec **et** ou **est** : « Le thé ___ trop sucré. »", reponses: ["est"], explication: "On peut dire « Le thé **était** trop sucré » : c'est le verbe être → **est**." },
        { type: "saisie", question: "Complète avec **son** ou **sont** : « Les pêcheurs ___ rentrés tard. »", reponses: ["sont"], explication: "On peut dire « Les pêcheurs **étaient** rentrés » : c'est le verbe être → **sont**." },
        { type: "saisie", question: "Complète avec **on** ou **ont** : « Mes parents ___ un grand champ de mil. »", reponses: ["ont"], explication: "On peut dire « Mes parents **avaient** un grand champ » : c'est le verbe avoir → **ont**." },
        { type: "saisie", question: "Complète avec **ou** ou **où** : « ___ as-tu rangé ton cartable ? »", reponses: ["Où"], explication: "La question porte sur le **lieu** : **Où** (avec un accent grave). On ne peut pas dire « ou bien as-tu rangé... »." },
        { type: "qcm", question: "Les habits appartiennent à Fatou. Quelle phrase est correcte ?", choix: ["Fatou range ses habits dans sa valise.", "Fatou range ces habits dans sa valise.", "Fatou range c'est habits dans sa valise.", "Fatou range s'est habits dans sa valise."], reponse: 0, explication: "Ce sont les habits **de Fatou** : on peut dire « mes habits » → **ses** (possessif)." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Il c'est blessé au pied.", "Il ses blessé au pied.", "Il cet blessé au pied.", "Il s'est blessé au pied."], reponse: 3, explication: "On peut dire « Je **me suis** blessé » : c'est **s'est** (le verbe pronominal *se blesser* au passé composé)." },
        { type: "qcm", question: "Complète : « La chèvre ? Mon frère ___ attachée ___, près du puits. »", choix: ["la / là", "l'a / la", "l'a / là", "là / la"], reponse: 2, explication: "« Mon frère **l'avait** attachée » → **l'a**. « près du puits, **ici** » → **là** (le lieu, avec un accent)." },
        { type: "redaction", question: "Écris **cinq phrases** sur le marché de ton quartier. Chaque phrase doit contenir un homophone différent parmi : a / à, est / et, sont / son, ont / on, ou / où. Souligne-les (mets-les entre parenthèses).", corrige: `**Exemple de réponse**
1. Ma mère (a) acheté des tomates (à) la vendeuse du coin.
2. Le marché (est) plein de monde (et) de bruit.
3. Les vendeurs (sont) assis ; chacun surveille (son) étal.
4. Ils (ont) des oignons ; (on) les achète au kilo.
5. (Où) trouve-t-on du bissap (ou) du gingembre ?

**Vérification par remplacement**
- *a* → avait ; *à* → ne se remplace pas par avait.
- *est* → était ; *et* → et puis.
- *sont* → étaient ; *son* → mon.
- *ont* → avaient ; *on* → il.
- *où* → lieu ; *ou* → ou bien.` },
      ],
    },
    {
      id: "pluriel-feminin",
      titre: "Le pluriel des noms, le féminin des noms et des adjectifs",
      theme: "Orthographe",
      cours: `
## Le pluriel des noms
En général, on ajoute un **s** : un enfant → des enfant**s**.

| Noms terminés par... | Pluriel | Exceptions à connaître |
|---|---|---|
| **-s, -x, -z** | ne changent pas | un pays → des pays ; une voix → des voix ; un nez → des nez |
| **-au, -eau, -eu** | + **x** | des tuyau**x**, des chapeau**x**, des feu**x** — sauf : des pneu**s**, des bleu**s** |
| **-al** | **-aux** | un cheval → des chev**aux** — sauf : des bal**s**, des carnaval**s**, des festival**s**, des chacal**s** |
| **-ou** | + **s** | des trou**s**, des fou**s** — sauf 7 noms en **-oux** : bijou, caillou, chou, genou, hibou, joujou, pou |
| **-ail** | + **s** | des rail**s**, des détail**s** — sauf : des trav**aux**, des vitr**aux**, des cor**aux**, des ém**aux** |

Cas particuliers : un œil → des **yeux** ; un ciel → des **cieux** (ou des ciels).

## Le féminin des noms et des adjectifs
En général, on ajoute un **e** : un ami → une ami**e** ; grand → grand**e**.

| Masculin | Féminin | Exemples |
|---|---|---|
| **-er** | **-ère** | boulanger → boulang**ère** ; fier → fi**ère** |
| **-en**, **-on** | **-enne**, **-onne** | ancien → ancien**ne** ; lion → lion**ne** ; bon → bon**ne** |
| **-eux** | **-euse** | heureux → heur**euse** ; joyeux → joy**euse** |
| **-teur** | **-trice** ou **-teuse** | instituteur → institu**trice** ; acteur → ac**trice** ; chanteur → chan**teuse** |
| **-f** | **-ve** | sportif → sporti**ve** ; neuf → neu**ve** |
| **-el** | **-elle** | cruel → cru**elle** |

Formes à connaître : beau → **belle** ; vieux → **vieille** ; blanc → **blanche** ; doux → **douce** ; long → **longue** ; un homme → une **femme** ; un coq → une **poule** ; un roi → une **reine**.

## m devant m, b, p
Devant **m, b, p**, on écrit **m** à la place de **n** : e**m**porter, ja**m**be, co**m**bien, i**m**possible. Exception : bo**n**bon, bo**n**bonne, bo**n**bonnière.

>! **Exemple résolu**
>! « un vieux cheval blanc » au féminin pluriel ? Le féminin de *cheval* est *jument* : « des **vieilles juments blanches** ».

> **À retenir**
> Pluriel : + s en général ; -au, -eau, -eu → x ; -al → -aux ; 7 noms en -ou prennent x.
> Féminin : + e en général ; -er → -ère ; -eux → -euse ; -f → -ve ; -teur → -trice.
> m devant m, b, p (sauf bonbon).
`,
      exercices: [
        { type: "saisie", question: "Écris au pluriel : « un cheval »", reponses: ["des chevaux", "chevaux"], explication: "Les noms en **-al** font leur pluriel en **-aux** : des **chevaux**." },
        { type: "saisie", question: "Écris au pluriel : « un caillou »", reponses: ["des cailloux", "cailloux"], explication: "*Caillou* fait partie des 7 noms en -ou qui prennent un **x** : bijou, **caillou**, chou, genou, hibou, joujou, pou." },
        { type: "qcm", question: "Quel pluriel est correct ?", choix: ["des festivaux", "des festivals", "des festivales", "des festivauxs"], reponse: 1, explication: "*Festival* est une exception : il prend un **s** au pluriel, comme bal, carnaval et chacal." },
        { type: "vf", question: "Le pluriel de « un pays » est « des pays ».", reponse: true, explication: "C'est vrai : les noms terminés par **-s, -x, -z** ne changent pas au pluriel." },
        { type: "saisie", question: "Écris au pluriel : « un travail »", reponses: ["des travaux", "travaux"], explication: "*Travail* est une exception des noms en -ail : des **travaux** (comme vitrail → vitraux)." },
        { type: "saisie", question: "Écris au féminin : « un instituteur »", reponses: ["une institutrice", "institutrice"], explication: "Les noms en **-teur** font souvent leur féminin en **-trice** : une **institutrice** (comme acteur → actrice)." },
        { type: "saisie", question: "Écris l'adjectif au féminin : « un garçon heureux » → « une fille ___ »", reponses: ["heureuse"], explication: "Les adjectifs en **-eux** font leur féminin en **-euse** : **heureuse**." },
        { type: "qcm", question: "Quel est le féminin de « vieux » ?", choix: ["vieuse", "vieille", "vieuxe", "vielle"], reponse: 1, explication: "*Vieux* a un féminin particulier : **vieille** (avec deux l). On dit aussi *un vieil homme* devant une voyelle." },
        { type: "qcm", question: "Quel mot est bien écrit ?", choix: ["janbe", "conbien", "inpossible", "emporter"], reponse: 3, explication: "Devant **m, b, p**, on écrit **m** : e**m**porter, ja**m**be, co**m**bien, i**m**possible." },
        { type: "redaction", question: "Réécris ce texte en mettant les mots en gras au **pluriel** (et fais tous les accords) : « Le **chacal** rôde près du **village**. Il guette le **coq** et le **petit chevreau**. Le **hibou** l'observe du haut du **baobab**. »", corrige: `**Corrigé**
Les **chacals** rôdent près des **villages**. Ils guettent les **coqs** et les **petits chevreaux**. Les **hiboux** les observent du haut des **baobabs**.

**Explications**
- *chacals* : exception des noms en -al (+ s).
- *villages*, *coqs*, *baobabs* : + s.
- *chevreaux* : les noms en -eau prennent un x ; l'adjectif *petits* s'accorde.
- *hiboux* : un des 7 noms en -ou qui prennent un x.
- Les verbes s'accordent avec les sujets au pluriel : *rôdent*, *guettent*, *observent* ; *Il* devient *Ils* et *l'* devient *les*.` },
      ],
    },
    {
      id: "vocabulaire",
      titre: "Le vocabulaire : familles de mots, synonymes, contraires, sens des mots",
      theme: "Vocabulaire",
      cours: `
## Le dictionnaire et l'ordre alphabétique
Les mots du dictionnaire sont rangés dans l'**ordre alphabétique**. Si deux mots commencent par la même lettre, on regarde la 2e lettre, puis la 3e : **ba**nane, **be**rger, **bi**ssap ; **mar**ché, **mai**son → *maison* avant *marché* (i avant r).
Un article de dictionnaire donne : la **nature** du mot (n. m. = nom masculin, adj. = adjectif, v. = verbe), sa ou ses **définitions**, des **exemples**.

## La famille de mots
Une **famille de mots** regroupe les mots formés à partir d'un même **radical**.
- **terre** : terrain, terrasse, enterrer, souterrain, atterrir
- **pêche** : pêcher, pêcheur, pêcherie
On forme les mots avec des **préfixes** (avant le radical) et des **suffixes** (après) :
| Préfixe | Sens | Exemple |
|---|---|---|
| in-, im-, il-, ir-, dé-, mé- | contraire | **im**possible, **dé**faire, **mé**content |
| re-, ré- | de nouveau | **re**venir, **ré**écrire |
| pré- | avant | **pré**voir |

| Suffixe | Sens | Exemple |
|---|---|---|
| -eur, -ier, -iste | celui qui fait | vend**eur**, ferm**ier**, dent**iste** |
| -ette, -on | petit | maisonn**ette**, ân**on** |
| -able | qu'on peut | lav**able** |

## Synonymes et contraires
- Des **synonymes** ont un sens **proche** : content / joyeux ; maison / demeure ; commencer / débuter.
- Des **contraires** ont un sens **opposé** (on dit aussi des *antonymes* : ce mot savant veut simplement dire « contraires ») : chaud / froid ; arriver / partir ; propre / sale.

## Sens propre et sens figuré
- **Sens propre** : le sens habituel, concret. « Le lion a une **crinière**. »
- **Sens figuré** : un sens imagé. « Cet élève a un **cœur de lion**. » (il est très courageux)

## Les homonymes et les mots à plusieurs sens
- Un mot peut avoir **plusieurs sens** : une **feuille** d'arbre / une **feuille** de papier. Le contexte (la phrase) t'aide à choisir.
- Des **homonymes** se prononcent pareil mais ont un sens différent : un **vers** (de poème) / un **ver** de terre / un **verre** d'eau / **vers** la maison / la couleur **vert**.

## Le champ lexical
Un **champ lexical** est l'ensemble des mots qui se rapportent à un **même thème**.
Champ lexical de l'**hivernage** : pluie, orage, nuages, semer, mil, arachide, boue, mares, verdure, champ.

## Les niveaux de langue
| Familier (entre amis) | Courant (tous les jours) | Soutenu (écrit soigné) |
|---|---|---|
| un bouquin | un livre | un ouvrage |
| bosser | travailler | œuvrer |
Au CFEE, dans tes rédactions, utilise le langage **courant** ou **soutenu**.

> **À retenir**
> Famille de mots = même radical ; préfixe avant, suffixe après.
> Synonymes = sens proche ; contraires = sens opposé.
> Sens propre / sens figuré ; champ lexical = mots d'un même thème.
`,
      exercices: [
        { type: "qcm", question: "Quel mot n'appartient **pas** à la famille de « terre » ?", choix: ["terrain", "enterrer", "terrible", "atterrir"], reponse: 2, explication: "*Terrible* vient de *terreur* (avoir peur), pas de *terre*. *Terrain, enterrer, atterrir* contiennent le radical **terr-** de *terre*." },
        { type: "saisie", question: "Trouve le contraire de « possible » en ajoutant un préfixe.", reponses: ["impossible"], explication: "Le préfixe **im-** (devant p) donne le contraire : **impossible**. Devant les autres lettres, on emploie souvent *in-* : inconnu." },
        { type: "qcm", question: "Quel est le **synonyme** de « débuter » ?", choix: ["commencer", "finir", "arrêter", "continuer"], reponse: 0, explication: "*Débuter* et **commencer** ont le même sens. *Finir* et *arrêter* en sont des contraires." },
        { type: "saisie", question: "Donne le contraire de « arriver ».", reponses: ["partir", "s'en aller"], explication: "Le contraire d'**arriver** est **partir** (ou *s'en aller*)." },
        { type: "vf", question: "Dans « Mon grand-père est une bibliothèque vivante », le mot « bibliothèque » est employé au sens figuré.", reponse: true, explication: "C'est vrai : le grand-père n'est pas un meuble avec des livres ! On veut dire qu'il **sait beaucoup de choses**. C'est le sens **figuré**. (Cette image rappelle une phrase célèbre attribuée à l'écrivain malien Amadou Hampâté Bâ : en Afrique, un vieillard qui meurt est une bibliothèque qui brûle.)" },
        { type: "qcm", question: "Dans quel ordre alphabétique faut-il ranger ces mots : marché, maison, mangue, mouton ?", choix: ["maison, mangue, marché, mouton", "mangue, maison, marché, mouton", "marché, maison, mangue, mouton", "maison, marché, mangue, mouton"], reponse: 0, explication: "Tous commencent par **m**. 2e lettre : *a* (maison, mangue, marché) avant *o* (mouton). 3e lettre : *i* (maison) avant *n* (mangue) avant *r* (marché)." },
        { type: "qcm", question: "Quel mot fait partie du **champ lexical de l'école** ?", choix: ["pirogue", "filet", "ardoise", "marmite"], reponse: 2, explication: "L'**ardoise** est utilisée en classe. *Pirogue* et *filet* vont avec la pêche, *marmite* avec la cuisine." },
        { type: "saisie", question: "Avec le suffixe **-eur**, forme le nom de la personne qui vend.", reponses: ["vendeur", "le vendeur", "un vendeur"], explication: "vendre → **vendeur** (celui qui vend). De même : chanter → chanteur, danser → danseur." },
        { type: "qcm", question: "« J'ai bu un ___ de bissap. » Quel homonyme convient ?", choix: ["vers", "vert", "ver", "verre"], reponse: 3, explication: "On boit dans un **verre** (le récipient). *Ver* est un animal, *vert* une couleur, *vers* une ligne de poème ou une préposition." },
        { type: "redaction", question: "Écris un petit texte de 4 ou 5 phrases sur **l'hivernage** dans ton village. Emploie au moins **six mots** du champ lexical de l'hivernage, que tu mettras en gras ou entre parenthèses.", corrige: `**Exemple de réponse**
Au mois de juillet, les premiers (nuages) noirs arrivent. Un soir, un gros (orage) éclate et la (pluie) tombe toute la nuit. Le lendemain, les (mares) sont pleines et les chemins couverts de (boue). Mon père et mes frères partent au (champ) pour (semer) le (mil) et l'(arachide). Quelques semaines plus tard, toute la brousse est couverte de (verdure).

**Ce qui est vérifié**
- au moins six mots du même thème (ici : nuages, orage, pluie, mares, boue, champ, semer, mil, arachide, verdure) ;
- des phrases complètes et bien ponctuées ;
- un ordre logique (arrivée des pluies, puis travaux des champs, puis la verdure).` },
      ],
    },
    {
      id: "lettre-personnelle",
      titre: "Écrire une lettre personnelle",
      theme: "Production d'écrits",
      cours: `
## La production d'écrits au CFEE
D'après le guide du CFEE de 2018 (l'organisation de l'épreuve peut changer), la partie « compétence » de Langue et communication est une **production d'écrits**. On te donne une **situation** :
- un **contexte** : ce qui se passe (par exemple : ton oncle t'a envoyé un cadeau) ;
- une **consigne** : ce que tu dois écrire (par exemple : écris-lui une lettre pour le remercier).
La **lettre personnelle** est un sujet très fréquent. Lis bien la consigne : **à qui** écris-tu ? **pourquoi** ?

## La présentation d'une lettre
~~~
                        Kaolack, le 12 mars 2027
Cher oncle Ibrahima,

   (Corps de la lettre : salutations, nouvelles,
   raison de la lettre, conclusion.)

                        Ton neveu qui t'aime,
                        Mamadou
~~~
| Partie | Où ? | Exemple |
|---|---|---|
| 1. **lieu et date** | en haut, à droite | Kaolack, le 12 mars 2027 |
| 2. **formule d'appel** | à gauche, suivie d'une virgule | Cher oncle, / Chère Awa, / Chers parents, |
| 3. **le corps de la lettre** | au milieu, en paragraphes | voir ci-dessous |
| 4. **formule finale** | en bas | Je t'embrasse. / Ton neveu qui t'aime, / Affectueusement, |
| 5. **signature** | en bas, à droite | ton prénom |

## Le corps de la lettre (le plan en 4 paragraphes)
1. **Les salutations et les nouvelles** : « Comment vas-tu ? J'espère que toute la famille est en bonne santé. Ici, tout le monde va bien. »
2. **La raison de la lettre** : ce que la consigne demande (remercier, inviter, raconter, demander, annoncer une nouvelle).
3. **Les détails** : tu expliques, tu racontes, tu donnes des exemples.
4. **La conclusion** : un souhait, une promesse, les salutations à transmettre : « Salue pour moi tante Khady et mes cousins. »

## Tu ou vous ?
- On **tutoie** un ami, un frère, un cousin, souvent un oncle ou une tante proches : « Cher Pape, comment **vas-tu** ? »
- On **vouvoie** une personne qu'on respecte et qu'on connaît moins, ou si l'usage de la famille le veut : « Cher grand-père, comment **allez-vous** ? »
- **Ne mélange pas** tu et vous dans la même lettre !

## Comment ta lettre est évaluée
Les critères habituels de l'approche par compétences sont les suivants (le barème exact peut varier) :
- **Pertinence** : tu respectes la consigne (le bon destinataire, la bonne raison).
- **Cohérence** : les idées sont dans un ordre logique, avec des paragraphes et des mots de liaison (d'abord, ensuite, enfin, car, mais).
- **Correction de la langue** : orthographe, accords, conjugaison, ponctuation.
- **Présentation** : les 5 parties de la lettre à la bonne place.

>! **Méthode en 4 étapes**
>! 1. Souligne dans la consigne : **qui écrit**, **à qui**, **pourquoi**.
>! 2. Fais un **brouillon** : note tes idées pour chaque paragraphe.
>! 3. Rédige en respectant la présentation.
>! 4. **Relis-toi** : accords, majuscules, points, tu ou vous.

> **À retenir**
> Lieu et date en haut à droite, formule d'appel avec virgule, corps en paragraphes, formule finale, signature.
> Plan : salutations et nouvelles → raison de la lettre → détails → conclusion.
> Tu ou vous, mais jamais les deux.
`,
      exercices: [
        { type: "qcm", question: "Où place-t-on le **lieu et la date** dans une lettre ?", choix: ["en bas, à gauche", "en haut, à droite", "au milieu de la lettre", "après la signature"], reponse: 1, explication: "Le lieu et la date se placent **en haut, à droite** : « Thiès, le 5 mai 2027 »." },
        { type: "saisie", question: "Complète le lieu et la date : « Ziguinchor, ___ 3 juin 2027 »", reponses: ["le"], explication: "On écrit : « Ziguinchor, **le** 3 juin 2027 ». Le lieu, une virgule, puis *le* et la date. Le mois s'écrit sans majuscule." },
        { type: "qcm", question: "Quelle formule d'appel est correcte pour écrire à sa grand-mère ?", choix: ["Chère grand-mère,", "Cher grand-mère,", "Salut grand-mère !", "Grand-mère chérie."], reponse: 0, explication: "*Grand-mère* est féminin : **Chère** (avec -e). La formule d'appel est suivie d'une **virgule**. *Salut* est trop familier pour une grand-mère." },
        { type: "vf", question: "Dans une lettre, on peut écrire « Comment vas-tu ? » au début et « Je vous embrasse » à la fin, pour la même personne.", reponse: false, explication: "C'est faux : il faut choisir **tu** ou **vous** et le garder dans toute la lettre. Avec *vas-tu*, on termine par « Je **t'**embrasse »." },
        { type: "qcm", question: "Quel est le bon ordre des parties du corps de la lettre ?", choix: ["la raison de la lettre, la signature, les salutations, la conclusion", "la conclusion, les détails, la raison de la lettre, les salutations", "les salutations et nouvelles, la raison de la lettre, les détails, la conclusion", "les détails, les salutations, la conclusion, la raison de la lettre"], reponse: 2, explication: "On commence par **saluer et demander des nouvelles**, puis on dit **pourquoi on écrit**, on donne les **détails**, et on **conclut** (souhait, salutations à transmettre)." },
        { type: "qcm", question: "« Consigne : Ton cousin Saliou habite à Saint-Louis. Écris-lui pour l'inviter à passer les vacances chez toi à Tambacounda. » Quelle est la **raison** de la lettre ?", choix: ["remercier Saliou pour un cadeau", "demander de l'argent à Saliou", "raconter un voyage à Saint-Louis", "inviter Saliou pour les vacances"], reponse: 3, explication: "La consigne dit « pour l'**inviter** à passer les vacances ». Si on écrit une autre lettre, même très belle, on n'a pas respecté la consigne (critère de **pertinence**)." },
        { type: "saisie", question: "Quelle **ponctuation** met-on à la fin de la formule d'appel « Cher Moussa » ? (écris le signe)", reponses: [",", "virgule", "une virgule"], explication: "On met une **virgule** : « Cher Moussa, ». Puis on va à la ligne pour commencer la lettre." },
        { type: "qcm", question: "Quelle phrase convient le mieux pour **terminer** une lettre à son oncle ?", choix: ["Salue pour moi tante Khady et mes cousins. Ton neveu qui t'aime,", "Bon, j'arrête là.", "Réponds vite sinon je me fâche !", "Voilà, c'est tout."], reponse: 0, explication: "La conclusion transmet des **salutations** et se termine par une **formule finale** affectueuse. Les autres phrases sont familières ou impolies." },
        { type: "redaction", question: "**Situation d'intégration (type CFEE)**\n**Contexte** : Ton oncle Ibrahima, qui habite à Dakar, t'a envoyé un sac et des cahiers pour la rentrée.\n**Consigne** : Écris-lui une lettre d'une quinzaine de lignes pour le remercier, lui donner de tes nouvelles et lui dire comment tu vas utiliser son cadeau.", corrige: `**Exemple de lettre**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*

Kaolack, le 10 octobre 2026

Cher oncle Ibrahima,

Comment vas-tu ? J'espère que tante Khady et mes cousins sont en bonne santé. Ici, à Kaolack, tout le monde va bien, grâce à Dieu. Papa est très occupé par la récolte de l'arachide et maman te salue.

Je t'écris pour te remercier du beau cadeau que tu m'as envoyé. Le sac est solide et sa couleur bleue me plaît beaucoup. Les cahiers sont arrivés au bon moment, car la rentrée a eu lieu lundi.

Cette année, je suis en CM2 et je vais passer le CFEE. Grâce à toi, j'ai tout ce qu'il faut pour bien travailler. J'ai déjà écrit mes premières leçons de grammaire dans un de tes cahiers. Je te promets de travailler dur pour réussir mon examen et entrer en sixième.

Je te remercie encore, cher oncle. Salue pour moi toute la famille. J'espère te voir pendant les vacances de Noël.

Ton neveu qui t'aime,
Mamadou

**Ce qui est vérifié**
- présentation : lieu et date, formule d'appel, paragraphes, formule finale, signature ;
- consigne respectée : remercier, donner des nouvelles, dire comment on utilise le cadeau ;
- **tu** du début à la fin ; phrases correctes et ponctuées ; mots de liaison (car, grâce à, déjà).` },
        { type: "redaction", question: "**Situation d'intégration (type CFEE)**\n**Contexte** : Ton école a organisé une journée de reboisement : les élèves ont planté des arbres dans la cour et autour du village. Ton amie Coumba, qui a déménagé à Kédougou, n'a pas pu y participer.\n**Consigne** : Écris-lui une lettre pour lui raconter cette journée et lui donner ton avis.", corrige: `**Exemple de lettre**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*

Fatick, le 12 octobre 2026

Chère Coumba,

Comment vas-tu dans ta nouvelle ville ? J'espère que tu t'es fait de nouvelles amies à Kédougou. Ici, tout va bien et toute la classe pense à toi.

Je t'écris pour te raconter la journée de reboisement de notre école. Samedi dernier, dès huit heures, tous les élèves sont venus avec des arrosoirs et des seaux. D'abord, le directeur nous a expliqué que les arbres protègent le sol et donnent de l'ombre. Ensuite, les grands élèves ont creusé des trous dans la cour et le long de la route du village. Nous avons planté des manguiers, des neems et des acacias. Enfin, chaque élève a reçu un arbre à surveiller et à arroser.

J'ai trouvé cette journée formidable, car nous avons travaillé tous ensemble pour notre village. Mon arbre est un petit manguier : je l'arrose chaque matin et je lui ai même donné un nom !

Écris-moi vite pour me parler de ta nouvelle école. Je t'embrasse très fort.

Ton amie,
Aïssatou

**Ce qui est vérifié**
- la présentation de la lettre ;
- le récit de la journée dans l'ordre, avec des mots de liaison (d'abord, ensuite, enfin) et le **passé composé** ;
- un **avis** justifié (« j'ai trouvé... car... ») ;
- le **tu** d'un bout à l'autre ; orthographe et ponctuation soignées.` },
      ],
    },
    {
      id: "ecrire-recit",
      titre: "Écrire un récit",
      theme: "Production d'écrits",
      cours: `
## Raconter une histoire
Un **récit** raconte des événements, vrais ou inventés, qui arrivent à des **personnages**, dans un **lieu**, à un **moment** donné. Au CFEE, on peut te demander de raconter un souvenir (une fête, un voyage, un accident évité), ou d'inventer la suite d'une histoire.

## Le plan du récit
| Partie | Ce que tu écris |
|---|---|
| **Introduction** (situation initiale) | qui ? où ? quand ? « Le jour de la Tabaski, j'étais chez mes grands-parents à Mbacké. » |
| **Développement** (élément déclencheur + péripéties) | ce qui arrive, les actions, dans l'ordre : « Soudain... Alors... Ensuite... » |
| **Conclusion** (dénouement + situation finale) | comment ça se termine et ce que tu as ressenti ou appris |

## Les mots de liaison du temps
Pour que le lecteur suive l'ordre des événements :
- pour commencer : **d'abord, au début, ce jour-là, un matin** ;
- pour continuer : **ensuite, puis, après, alors, quelques minutes plus tard** ;
- pour une surprise : **soudain, tout à coup, brusquement** ;
- pour finir : **enfin, finalement, à la fin**.

## Les temps du récit
Choisis un système et **garde-le** :
- **passé composé + imparfait** (récit de souvenir à la 1re personne) : « Ce jour-là, il **faisait** beau. Nous **sommes partis** tôt. »
- **passé simple + imparfait** (conte, histoire inventée à la 3e personne) : « Il **faisait** beau. Samba **partit** tôt. »

## Rendre le récit vivant
- Ajoute des **détails** : couleurs, bruits, odeurs (voir le chapitre sur la description).
- Dis ce que les personnages **ressentent** : la joie, la peur, la surprise.
- Ajoute une courte réplique de **dialogue** (voir le chapitre sur le dialogue).

>! **Erreurs fréquentes**
>! - Mélanger les temps : « Hier, je **vais** au marché et j'**ai vu**... » → choisis : « Hier, je **suis allé** au marché et j'**ai vu**... »
>! - Répéter « et après, et après » : varie les mots de liaison.
>! - Oublier la conclusion : termine toujours par une fin et un sentiment.

> **À retenir**
> Introduction (qui, où, quand) → développement (ce qui se passe, dans l'ordre) → conclusion (fin et sentiment).
> Mots de liaison : d'abord, ensuite, soudain, enfin.
> Un seul système de temps : passé composé + imparfait, ou passé simple + imparfait.
`,
      exercices: [
        { type: "qcm", question: "Que doit contenir l'**introduction** d'un récit ?", choix: ["la morale de l'histoire", "les personnages, le lieu et le moment", "la fin de l'histoire", "la signature de l'auteur"], reponse: 1, explication: "L'introduction présente la **situation de départ** : **qui** ? **où** ? **quand** ?" },
        { type: "qcm", question: "Quel mot de liaison annonce une **surprise** ?", choix: ["d'abord", "enfin", "soudain", "ensuite"], reponse: 2, explication: "**Soudain** (comme *tout à coup*, *brusquement*) annonce un événement inattendu. C'est souvent l'élément déclencheur." },
        { type: "vf", question: "« Hier, je vais au marché et j'ai acheté des mangues. » Les temps de cette phrase sont bien employés.", reponse: false, explication: "C'est faux : on mélange le présent (*vais*) et le passé composé (*ai acheté*). On écrit : « Hier, je **suis allé** au marché et j'**ai acheté** des mangues. »" },
        { type: "qcm", question: "Remets ces phrases dans l'ordre : (A) Enfin, nous sommes arrivés à Touba. (B) Ce matin-là, nous avons pris le car à Dakar. (C) Ensuite, le car s'est arrêté à Thiès.", choix: ["B, C, A", "C, B, A", "A, B, C", "B, A, C"], reponse: 0, explication: "« Ce matin-là » commence le récit, « Ensuite » continue, « Enfin » termine : le départ, l'arrêt à Thiès, puis l'arrivée à Touba." },
        { type: "saisie", question: "Écris le verbe au passé composé pour garder les temps du récit : « Ce jour-là, il faisait chaud. Nous (partir) ___ très tôt. »", reponses: ["sommes partis", "nous sommes partis", "sommes parties", "nous sommes parties"], explication: "Récit de souvenir : imparfait (*faisait*) + passé composé. *Partir* se conjugue avec être : nous **sommes partis** (ou *parties* si ce sont des filles)." },
        { type: "qcm", question: "Quelle phrase de conclusion convient le mieux à un récit de fête ?", choix: ["Il était une fois une fête.", "Soudain, la musique commença.", "D'abord, nous avons mangé.", "Ce jour-là restera longtemps dans ma mémoire, car toute la famille était réunie."], reponse: 3, explication: "Une conclusion dit **comment l'histoire finit** et **ce qu'on a ressenti**. Les autres phrases servent au début ou au milieu du récit." },
        { type: "qcm", question: "Quelle phrase rend le récit plus **vivant** ?", choix: ["Il y avait des gens au marché.", "Le marché était grand.", "Je suis allé au marché.", "Au marché, les vendeuses criaient leurs prix et l'odeur du poisson grillé chatouillait mon nez."], reponse: 3, explication: "Elle ajoute des **détails** de ce qu'on **entend** (les cris) et de ce qu'on **sent** (l'odeur). Le lecteur s'imagine mieux la scène." },
        { type: "redaction", question: "**Situation d'intégration (type CFEE)**\n**Contexte** : Pendant la fête de la Tabaski, il s'est passé quelque chose qui t'a marqué.\n**Consigne** : Raconte cette journée en une quinzaine de lignes, au passé composé et à l'imparfait. Dis ce que tu as ressenti.", corrige: `**Exemple de récit**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*
L'an dernier, j'ai passé la Tabaski chez mes grands-parents, à Mbacké. Il faisait chaud et la maison était pleine de cousins venus de Dakar et de Kaolack.

Le matin, nous avons mis nos habits neufs. Mon grand-boubou blanc brillait au soleil et j'étais très fier. Après la prière, mon grand-père a sacrifié le mouton dans la cour. Ensuite, les femmes ont préparé la viande avec des oignons et de la moutarde. L'odeur des grillades remplissait toute la maison.

Mais soudain, le petit mouton de mon cousin Cheikh s'est échappé ! Il courait dans la rue et tous les enfants le poursuivaient en riant. Finalement, c'est moi qui l'ai attrapé, près de la boutique du quartier. Tout le monde m'a applaudi.

Le soir, nous sommes allés saluer les voisins et demander pardon, comme le veut la tradition. Je me suis couché fatigué mais heureux. Cette Tabaski restera longtemps dans ma mémoire.

**Ce qui est vérifié**
- introduction (où, quand, qui), développement avec un événement (*soudain*), conclusion avec un sentiment ;
- imparfait pour le décor (*faisait, brillait, courait*) et passé composé pour les actions (*avons mis, a sacrifié, ai attrapé*) ;
- mots de liaison variés ; paragraphes ; orthographe et ponctuation.` },
        { type: "redaction", question: "**Inventer la suite d'une histoire**\n« Ce soir-là, Ndèye rentrait seule du puits avec son seau sur la tête. Le soleil se couchait. Tout à coup, elle entendit un bruit dans les buissons... »\nÉcris la suite (10 à 12 lignes) au **passé simple** et à l'**imparfait**, avec une fin heureuse.", corrige: `**Exemple de suite**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*
Ndèye s'arrêta, le cœur battant. Les feuilles bougeaient et un petit cri sortait du buisson. Elle posa doucement son seau et s'approcha. Dans les branches, elle découvrit un chevreau tout tremblant : sa patte était prise dans une vieille corde.
« N'aie pas peur, je vais t'aider », murmura-t-elle.
Elle défit le nœud avec patience. Le chevreau bêla et se frotta contre ses jambes. Ndèye reconnut alors une tache noire sur son front : c'était le chevreau de la voisine, perdu depuis le matin !
Elle reprit son seau et rentra au village, suivie par le petit animal. Quand la voisine le vit, elle pleura de joie et serra Ndèye dans ses bras. Le lendemain, elle lui offrit un beau pagne pour la remercier.

**Ce qui est vérifié**
- la suite est logique (même personnage, même lieu, le bruit est expliqué) ;
- **passé simple** pour les actions (*s'arrêta, posa, découvrit, défit, reconnut, vit*) et **imparfait** pour le décor (*bougeaient, était prise*) ;
- une fin heureuse, une courte réplique bien ponctuée.` },
      ],
    },
    {
      id: "description-portrait",
      titre: "Décrire un lieu et faire un portrait",
      theme: "Production d'écrits",
      cours: `
## Décrire un lieu
**Décrire**, c'est faire **voir** au lecteur un lieu, un objet ou une scène, comme une photo avec des mots.

### Organiser sa description
Choisis un **ordre** et garde-le :
- **du plus loin au plus près** (ou l'inverse) ;
- **de gauche à droite**, ou **de haut en bas** ;
- **de l'extérieur à l'intérieur** (pour une maison, une école).
Utilise des **mots de lieu**, qui disent **où** se trouve chaque chose (certains livres les appellent des *organisateurs spatiaux*) : *au loin, au fond, devant, derrière, à gauche, à droite, au milieu, au-dessus, en dessous, à côté de, près de, tout autour*.

### Utiliser ses cinq sens
| Sens | Exemples |
|---|---|
| la vue | les pagnes multicolores, le ciel gris |
| l'ouïe | les cris des vendeurs, le chant du coq |
| l'odorat | l'odeur du poisson séché, du café Touba |
| le toucher | le sable brûlant, l'eau fraîche du canari |
| le goût | le jus de bissap sucré |

### Des mots précis
Remplace les mots trop simples par des mots **précis** : *il y a* → *se dresse, s'étend, se trouve* ; *beau* → *magnifique, coloré, élégant* ; *grand* → *immense, haut, large*.
Enrichis les noms avec des **adjectifs**, des **compléments du nom** et des **propositions relatives**.

## Faire un portrait
Le **portrait** est la description d'une **personne** (ou d'un animal).
- **Portrait physique** : l'allure générale (taille, âge), puis **de la tête aux pieds** : visage, cheveux, yeux, vêtements.
- **Portrait moral** : le **caractère** et les **qualités** ou défauts (gentil, courageux, patient, sévère, drôle), avec un **exemple** qui le prouve : « Ma grand-mère est généreuse : elle partage toujours son repas avec les voisins. »
- Termine par ce que tu **ressens** pour cette personne.

>! **Le temps de la description**
>! - au **présent** si tu décris ce qui existe maintenant : « Mon village **se trouve** près du fleuve. »
>! - à l'**imparfait** dans un récit au passé : « Le marché **était** plein de monde. »

## Erreurs fréquentes
- Faire une liste : « Il y a un arbre. Il y a une case. Il y a un puits. » → relie et précise : « Au milieu de la cour se dresse un vieux manguier, à côté d'un puits en ciment. »
- Oublier le portrait moral et ne parler que des vêtements.

> **À retenir**
> Description : un ordre (loin/près, gauche/droite), des mots de lieu, les cinq sens, des mots précis.
> Portrait : physique (de la tête aux pieds) + moral (caractère, avec un exemple) + sentiment.
`,
      exercices: [
        { type: "qcm", question: "Quel groupe ne contient que des **mots de lieu** ?", choix: ["d'abord, ensuite, enfin", "au fond, à gauche, derrière", "joyeux, triste, calme", "soudain, puis, alors"], reponse: 1, explication: "**Au fond, à gauche, derrière** situent les éléments dans l'espace. *D'abord, ensuite, enfin* et *soudain, puis, alors* sont des mots de temps ; *joyeux, triste, calme* sont des adjectifs." },
        { type: "qcm", question: "« **L'odeur du poisson grillé** » fait appel à quel sens ?", choix: ["la vue", "l'ouïe", "l'odorat", "le toucher"], reponse: 2, explication: "Une odeur se **sent** avec le nez : c'est l'**odorat**." },
        { type: "qcm", question: "Quelle phrase est la plus précise ?", choix: ["Il y a un arbre dans la cour.", "Dans la cour, il y a un arbre grand.", "Au milieu de la cour se dresse un vieux fromager aux racines énormes.", "Un arbre est là."], reponse: 2, explication: "Elle situe l'arbre (*au milieu de la cour*), utilise un verbe précis (*se dresse*), nomme l'arbre (*fromager*) et l'enrichit (*vieux*, *aux racines énormes*)." },
        { type: "vf", question: "Un portrait moral décrit les vêtements et la coiffure de la personne.", reponse: false, explication: "C'est faux : les vêtements et la coiffure appartiennent au portrait **physique**. Le portrait **moral** décrit le **caractère** (gentil, courageux, patient...)." },
        { type: "saisie", question: "Trouve un adjectif plus précis que « grand » pour décrire un baobab très, très gros.", reponses: ["immense", "énorme", "gigantesque", "géant", "colossal", "imposant", "monumental", "massif"], explication: "Des adjectifs plus forts que *grand* : **immense, énorme, gigantesque, géant**. Ils rendent la description plus vivante." },
        { type: "qcm", question: "« Ma tante est patiente : ... » Quel exemple prouve le mieux cette qualité ?", choix: ["elle porte un beau boubou vert.", "elle est grande et mince.", "elle habite à Rufisque.", "elle m'explique mes leçons plusieurs fois sans jamais se fâcher."], reponse: 3, explication: "Être **patient**, c'est savoir attendre et répéter sans s'énerver. L'exemple montre la qualité en action. Les autres phrases parlent du physique ou du lieu." },
        { type: "saisie", question: "Dans une description d'une cour, complète avec un mot de lieu qui veut dire « tout au bout, le plus loin » : « Au ___ de la cour, on aperçoit la case de mon grand-père. »", reponses: ["fond"], explication: "« **Au fond** de la cour » : le point le plus éloigné, tout au bout." },
        { type: "redaction", question: "**Situation d'intégration (type CFEE)**\n**Contexte** : Un correspondant étranger veut savoir à quoi ressemble ton village ou ton quartier pendant l'hivernage.\n**Consigne** : Décris-le en une douzaine de lignes, au présent. Utilise des mots de lieu et au moins trois sens.", corrige: `**Exemple de description**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*
Mon village, Keur Massamba, se trouve à quelques kilomètres de Kaffrine. Pendant l'hivernage, il change complètement.

Au loin, les champs de mil et d'arachide forment un grand tapis vert qui s'étend jusqu'à l'horizon. Plus près, les mares sont pleines d'eau et les grenouilles y chantent toute la nuit. Au milieu du village se dresse un vieux baobab couvert de feuilles. Sous son ombre, les anciens discutent assis sur des nattes.

À droite de la place, les cases et les maisons en ciment ont des toits mouillés qui brillent après l'averse. Dans les ruelles, le sol est rouge et collant : la boue colle aux sandales des enfants. Une bonne odeur de terre mouillée monte du sol, mêlée à la fumée des cuisines.

Le soir, le ciel se couvre de gros nuages noirs et le tonnerre gronde. J'aime mon village en hivernage, car tout y est vivant et vert.

**Ce qui est vérifié**
- un ordre clair (du plus loin au plus près, puis le soir) et des mots de lieu (*au loin, plus près, au milieu, à droite, dans les ruelles*) ;
- trois sens au moins : la vue (vert, rouge), l'ouïe (grenouilles, tonnerre), l'odorat (terre mouillée, fumée), le toucher (boue collante) ;
- des verbes précis (*s'étend, se dresse, gronde*) ; le présent ; une phrase finale avec un sentiment.` },
        { type: "redaction", question: "**Portrait**\nFais le portrait d'une personne de ta famille que tu aimes beaucoup (grand-mère, grand-père, oncle, grande sœur...). Écris une douzaine de lignes : portrait physique, portrait moral avec un exemple, et ce que tu ressens.", corrige: `**Exemple de portrait**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*
Ma grand-mère s'appelle Mame Diarra. C'est une vieille femme petite et un peu courbée, mais elle marche encore très vite.

Son visage est rond et ridé comme une pomme séchée. Ses yeux noirs pétillent de malice quand elle sourit. Elle couvre toujours ses cheveux blancs d'un foulard coloré, assorti à son grand boubou. À ses poignets, des bracelets en argent tintent à chaque geste.

Mame Diarra est très généreuse : chaque jour, elle garde une part de son repas pour les talibés qui passent devant la maison. Elle est aussi patiente et pleine de sagesse. Le soir, quand nous nous disputons, elle nous réunit autour d'elle et nous raconte un conte qui nous fait comprendre notre erreur.

J'aime beaucoup ma grand-mère. Auprès d'elle, je me sens en sécurité, et j'espère lui ressembler quand je serai grande.

**Ce qui est vérifié**
- portrait physique dans l'ordre (allure, visage, yeux, cheveux, vêtements, bijoux) ;
- portrait moral avec des **exemples** qui prouvent les qualités ;
- adjectifs et comparaisons (*ridé comme une pomme séchée*) ; une phrase finale qui dit le sentiment ;
- le présent, des accords corrects (*petite, courbée, ridé* selon le nom).` },
      ],
    },
    {
      id: "ecrire-dialogue",
      titre: "Écrire un dialogue",
      theme: "Production d'écrits",
      cours: `
## Qu'est-ce qu'un dialogue ?
Un **dialogue** rapporte les **paroles** échangées entre deux personnages ou plus. Dans un récit, il rend l'histoire plus vivante.

## La ponctuation du dialogue
~~~
Awa entra dans la boutique et demanda :
« Bonjour, monsieur Diallo. Avez-vous du sucre ?
— Oui, ma fille, répondit le boutiquier.
— Je voudrais un kilo, s'il vous plaît. »
Le boutiquier pesa le sucre et le lui tendit.
~~~
| Signe | Rôle |
|---|---|
| **deux-points** (:) | annoncent que quelqu'un va parler |
| **guillemets** (« ») | ouvrent et ferment tout le dialogue |
| **tiret** (—) | indique, à chaque ligne, que **quelqu'un d'autre** prend la parole |
| **retour à la ligne** | à chaque changement de personnage |

## Les verbes de parole
Pour savoir **qui parle** et **comment**, on utilise des **verbes de parole**. Ne répète pas toujours « dit » !
- pour poser une question : **demander, questionner, s'étonner** ;
- pour répondre : **répondre, répliquer, expliquer** ;
- pour parler fort : **crier, s'écrier, hurler** ;
- pour parler doucement : **murmurer, chuchoter** ;
- pour d'autres sentiments : **se plaindre, se moquer, supplier, ordonner, conseiller**.

## L'incise
Une **incise** est un petit groupe de mots glissé dans la réplique, ou ajouté à la fin, pour dire **qui parle** et **comment** : *dit Awa*, *répondit-il*.
Quand le verbe de parole est placé **au milieu** ou **à la fin** de la réplique, le sujet est **inversé** et le groupe est entre virgules : c'est l'**incise**.
- « Je suis fatigué, **soupira Modou**. »
- « Viens ici, **ordonna la mère**, et assieds-toi. »
- Avec un pronom : « Où vas-tu ? **demanda-t-il**. »

>! **Méthode pour écrire un dialogue**
>! 1. Présente la situation avant le dialogue : qui parle, où, pourquoi.
>! 2. Va à la ligne et mets un tiret à chaque nouvelle réplique.
>! 3. Varie les verbes de parole et indique les sentiments.
>! 4. Termine par une phrase de récit qui dit ce qui se passe ensuite.

## Les formules de politesse
Dans un dialogue avec un adulte, un vendeur, le maître, on emploie les formules de politesse : *bonjour, s'il vous plaît, merci, excusez-moi, au revoir*. Au Sénégal, on prend aussi le temps des **salutations** : « Comment vas-tu ? Et la famille ? »

> **À retenir**
> Deux-points et guillemets pour ouvrir ; un tiret et un retour à la ligne à chaque nouveau personnage.
> Varie les verbes de parole : demander, répondre, s'écrier, murmurer...
> Incise : « ..., répondit Awa. » (sujet après le verbe).
`,
      exercices: [
        { type: "qcm", question: "Dans un dialogue, que signifie le **tiret** ( — ) au début d'une ligne ?", choix: ["qu'un autre personnage prend la parole", "que le dialogue est terminé", "que le personnage pose une question", "qu'il faut lire plus vite"], reponse: 0, explication: "Le tiret indique un **changement de personnage** : quelqu'un d'autre parle. On va aussi à la ligne." },
        { type: "qcm", question: "Quel signe de ponctuation annonce que quelqu'un va parler ?", choix: ["le point", "la virgule", "les deux-points", "le point d'exclamation"], reponse: 2, explication: "Les **deux-points** ( : ) annoncent les paroles : Awa demanda : « Où est le sucre ? »" },
        { type: "saisie", question: "Complète avec un verbe de parole qui veut dire « parler tout bas » : « Ne fais pas de bruit, le bébé dort, ___ maman. » (au passé simple)", reponses: ["murmura", "chuchota", "souffla"], explication: "Pour parler tout bas : **murmura** ou **chuchota** (passé simple, 3e personne : -a). Le sujet *maman* est inversé : c'est une incise." },
        { type: "vf", question: "Dans « Je suis fatigué, soupira Modou », le sujet « Modou » est placé après le verbe.", reponse: true, explication: "C'est vrai : dans une **incise** (le verbe de parole au milieu ou à la fin de la réplique), le sujet est **inversé** : *soupira Modou*." },
        { type: "qcm", question: "Quelle incise est correctement écrite ?", choix: ["« Où vas-tu ? il demanda. »", "« Où vas-tu ? demanda-t-il. »", "« Où vas-tu ? demanda il. »", "« Où vas-tu ? demanda-il. »"], reponse: 1, explication: "Dans l'incise, le sujet est inversé. *Demanda* finit par une voyelle et il est suivi de *il* : on ajoute **-t-** → **demanda-t-il**." },
        { type: "qcm", question: "Quel verbe de parole convient le mieux ? « Au secours ! Le feu ! ___ la vendeuse. »", choix: ["murmura", "répondit", "expliqua", "s'écria"], reponse: 3, explication: "La vendeuse a peur et appelle à l'aide : elle parle très fort. **S'écria** (ou *cria*, *hurla*) convient." },
        { type: "qcm", question: "Quel signe ferme la fin de tout le dialogue ?", choix: ["un tiret ( — )", "les deux-points ( : )", "un point-virgule ( ; )", "le guillemet fermant ( » )"], reponse: 3, explication: "On ferme le dialogue avec le **guillemet fermant** ( » ), à la fin de la dernière réplique. Le tiret, lui, marque seulement un changement de personnage." },
        { type: "redaction", question: "**Situation d'intégration**\n**Contexte** : Au marché, Mariama veut acheter des légumes pour le repas. La vendeuse annonce un prix trop élevé.\nConsigne : Écris le dialogue entre Mariama et la vendeuse (8 à 10 répliques). Présente la scène en une phrase, utilise la bonne ponctuation, au moins quatre verbes de parole différents, et termine par une phrase de récit.", corrige: `**Exemple de dialogue**
Au marché de Thiaroye, Mariama s'arrêta devant l'étal de la vieille Adja et demanda :
« Bonjour, Adja. Comment allez-vous ? Et la famille ?
— Tout le monde va bien, grâce à Dieu, répondit la vendeuse en souriant. Qu'est-ce qu'il te faut, ma fille ?
— Je voudrais un kilo de tomates et des oignons. C'est combien ?
— Le kilo de tomates est à mille francs.
— Mille francs ! s'étonna Mariama. C'est trop cher. La semaine dernière, j'ai payé six cents francs le kilo.
— Avec la pluie, les tomates sont rares, expliqua Adja. Mais pour toi, je fais huit cents francs.
— Et si je prends aussi les oignons, pouvez-vous me faire sept cents ? supplia Mariama.
— Bon, d'accord, accepta la vendeuse en riant. Mais c'est bien parce que je connais ta maman ! »
Mariama paya, remercia Adja et rentra vite à la maison pour préparer le repas.

**Ce qui est vérifié**
- une phrase de présentation, puis les deux-points et les guillemets ;
- un **tiret** et un **retour à la ligne** à chaque changement de personnage ;
- des verbes de parole variés : *demanda, répondit, s'étonna, expliqua, supplia, accepta* ; incises avec sujet inversé ;
- les formules de politesse et de salutation ; une phrase de récit pour finir.` },
        { type: "redaction", question: "Transforme ce passage en **dialogue** : « Le maître demanda à Ousmane pourquoi il était en retard. Ousmane répondit qu'il avait aidé sa mère à porter l'eau du puits. Le maître le félicita d'aider sa mère, mais lui conseilla de se lever plus tôt. »", corrige: `**Corrigé**
Le maître regarda Ousmane et lui demanda :
« Pourquoi es-tu en retard, Ousmane ?
— J'ai aidé ma mère à porter l'eau du puits, répondit Ousmane.
— C'est bien d'aider ta mère, le félicita le maître, mais la prochaine fois, lève-toi plus tôt. »

**Explications**
- Les paroles sont rapportées **telles qu'elles sont prononcées** : *il avait aidé* devient « **J'ai aidé** » ; *pourquoi il était en retard* devient « Pourquoi **es-tu** en retard ? ».
- Ponctuation : deux-points, guillemets, tiret à chaque changement de personnage.
- Incises avec sujet inversé : *répondit Ousmane*, *le félicita le maître*.
- Le conseil devient un **impératif** : « lève-toi plus tôt ».` },
      ],
    },
    {
      id: "phrase-complexe",
      titre: "La phrase simple et la phrase complexe",
      theme: "Grammaire",
      cours: `
## Phrase simple ou phrase complexe ?
Une **proposition** est un groupe de mots organisé autour d'un **verbe conjugué**.
- Une **phrase simple** a **un seul verbe conjugué** : elle a une seule proposition. « Le vieux pêcheur **répare** son filet. »
- Une **phrase complexe** a **plusieurs verbes conjugués** : elle a plusieurs propositions. « Le soleil **se lève** et les coqs **chantent**. » (2 verbes → 2 propositions)

>! **Méthode : compter les propositions**
>! 1. Souligne tous les **verbes conjugués**.
>! 2. Il y a autant de propositions que de verbes conjugués.
>! Attention : un **infinitif** ne compte pas (« Je **veux** partir » = 1 proposition). Un temps composé compte pour un seul verbe (« Il **a mangé** » = 1 verbe).

## Trois façons de relier les propositions
| Les propositions sont... | Elles sont reliées par... | Exemple |
|---|---|---|
| **juxtaposées** (posées l'une à côté de l'autre, sans mot de liaison) | une virgule, un point-virgule ou deux-points | Il pleut, nous restons à la maison. |
| **coordonnées** | une conjonction de coordination (mais, ou, et, donc, or, ni, car) | Il pleut, **donc** nous restons à la maison. |
| **subordonnées** | un mot subordonnant (qui, que, où, quand, parce que, si, lorsque...) | Nous restons à la maison **parce qu'**il pleut. |

## La proposition principale et la proposition subordonnée
Dans une phrase avec subordination :
- la **proposition principale** est la plus importante : elle a un sens toute seule ;
- la **proposition subordonnée** dépend de la principale : elle ne peut pas rester seule.
« **Quand la pluie tombe**, les enfants rentrent vite. » → subordonnée : *quand la pluie tombe* ; principale : *les enfants rentrent vite*.

La **proposition relative** (voir le chapitre sur le groupe nominal) est une subordonnée : « Le garçon **qui joue sous l'arbre** est mon cousin. »

>! **Exemple résolu**
>! « Awa voulait jouer, mais sa mère l'a appelée parce que le repas était prêt. »
>! Verbes conjugués : voulait, a appelée, était → **3 propositions**.
>! *mais* coordonne les deux premières ; *parce que* introduit une subordonnée (*parce que le repas était prêt*).

> **À retenir**
> Phrase simple = 1 verbe conjugué ; phrase complexe = plusieurs verbes conjugués = plusieurs propositions.
> Juxtaposées (, ; :) — coordonnées (mais, ou, et, donc, or, ni, car) — subordonnées (qui, que, où, quand, parce que, si...).
> La principale a un sens seule ; la subordonnée dépend d'elle.
`,
      exercices: [
        { type: "qcm", question: "Combien de propositions y a-t-il dans cette phrase : « Le soleil se lève, les coqs chantent et le village se réveille. » ?", choix: ["une", "deux", "trois", "quatre"], reponse: 2, explication: "Il y a trois verbes conjugués : *se lève*, *chantent*, *se réveille*. Donc **trois propositions**." },
        { type: "vf", question: "« Le vieux pêcheur de Kayar répare son filet sous le soleil. » est une phrase simple.", reponse: true, explication: "C'est vrai : il n'y a qu'**un seul verbe conjugué** (*répare*). Les autres mots sont des compléments." },
        { type: "qcm", question: "Dans « Il fait chaud, nous allons sous le manguier. », les deux propositions sont :", choix: ["coordonnées", "juxtaposées", "subordonnées", "il n'y a qu'une proposition"], reponse: 1, explication: "Elles sont séparées par une simple **virgule**, sans mot de liaison : elles sont **juxtaposées**." },
        { type: "saisie", question: "Trouve la conjonction de coordination qui relie les deux propositions : « Awa voulait jouer, mais sa mère l'a appelée. »", reponses: ["mais"], explication: "**Mais** est une conjonction de coordination (mais, ou, et, donc, or, ni, car). Il exprime une opposition. Les propositions sont **coordonnées**." },
        { type: "qcm", question: "Quelle phrase contient une **proposition subordonnée** ?", choix: ["Le car est parti ; nous l'avons raté.", "Le car est parti et nous l'avons raté.", "Nous avons raté le car parce que nous étions en retard.", "Nous avons raté le car."], reponse: 2, explication: "**Parce que** introduit une subordonnée (*parce que nous étions en retard*) qui dépend de la principale. Avec le point-virgule, les propositions sont juxtaposées ; avec *et*, coordonnées ; la dernière phrase est simple." },
        { type: "saisie", question: "Écris la **proposition principale** de cette phrase : « Quand la pluie tombe, les enfants rentrent vite. »", reponses: ["les enfants rentrent vite"], explication: "*Les enfants rentrent vite* a un sens tout seul : c'est la **principale**. *Quand la pluie tombe* ne peut pas rester seul : c'est la subordonnée." },
        { type: "vf", question: "« Je veux partir à Kaolack. » contient deux propositions, car il y a deux verbes.", reponse: false, explication: "C'est faux : *partir* est à l'**infinitif**, il n'est pas conjugué. Seul *veux* est conjugué : c'est une **phrase simple** (une seule proposition)." },
        { type: "saisie", question: "Relie ces deux phrases simples avec la conjonction de coordination qui exprime la **cause** (écris la nouvelle phrase) : « Moussa est fatigué. Il a travaillé au champ toute la journée. »", reponses: ["Moussa est fatigué car il a travaillé au champ toute la journée.", "Moussa est fatigué, car il a travaillé au champ toute la journée."], explication: "La conjonction **car** donne la cause : « Moussa est fatigué **car** il a travaillé au champ toute la journée. » On peut mettre une virgule devant *car*. (*Parce que* dit aussi la cause, mais ce n'est pas une conjonction de coordination : il introduit une subordonnée.)" },
        { type: "qcm", question: "Dans « Le garçon qui joue sous l'arbre est mon cousin », qu'est-ce que « qui joue sous l'arbre » ?", choix: ["la proposition principale", "une proposition juxtaposée", "une proposition coordonnée", "une proposition subordonnée relative"], reponse: 3, explication: "Elle commence par le pronom relatif **qui** et complète le nom *garçon* : c'est une **proposition subordonnée relative**. La principale est *le garçon est mon cousin*." },
        { type: "redaction", question: "1) Relie les deux phrases simples de trois façons : par **juxtaposition**, par **coordination**, puis par **subordination** : « Il a beaucoup plu. La récolte est bonne. »\n2) Combien de propositions y a-t-il dans : « Le maître entre et les élèves se lèvent parce qu'ils le respectent. » ? Comment sont-elles reliées ?", corrige: `**1) Corrigé (exemples)**
- Juxtaposition : Il a beaucoup plu, la récolte est bonne. (ou : Il a beaucoup plu : la récolte est bonne.)
- Coordination : Il a beaucoup plu, **donc** la récolte est bonne. (ou : La récolte est bonne **car** il a beaucoup plu.)
- Subordination : La récolte est bonne **parce qu'**il a beaucoup plu. (ou : **Comme** il a beaucoup plu, la récolte est bonne.)

**2) Corrigé**
Trois verbes conjugués (*entre*, *se lèvent*, *respectent*) → **trois propositions**.
- *Le maître entre* et *les élèves se lèvent* sont **coordonnées** par *et*.
- *parce qu'ils le respectent* est une **subordonnée** (de cause) qui dépend de *les élèves se lèvent*.

**Attention** : *a plu* (passé composé) compte pour un seul verbe conjugué.` },
      ],
    },
    {
      id: "discours-direct-indirect",
      titre: "Le discours direct et le discours indirect",
      theme: "Grammaire",
      cours: `
## Deux façons de rapporter des paroles
- Au **discours direct**, on rapporte les paroles **telles qu'elles ont été prononcées**, avec deux-points et guillemets : Awa dit : « **Je** suis contente. »
- Au **discours indirect**, le narrateur rapporte les paroles **avec ses mots**, dans une proposition subordonnée, **sans** deux-points ni guillemets : Awa dit **qu'elle** est contente.

## Ce qui change au discours indirect
| Au discours direct | Au discours indirect | Exemple |
|---|---|---|
| une affirmation | **que** (qu') | Il dit : « Je suis prêt. » → Il dit **qu'il** est prêt. |
| une question sans mot interrogatif (oui / non) | **si** (s' devant il, ils) | Il me demande : « Viens-tu ? » → Il me demande **si** je viens. |
| une question avec où, quand, pourquoi, comment, qui | on **garde** le mot interrogatif | Il me demande : « Où vas-tu ? » → Il me demande **où** je vais. |
| un ordre (impératif) | **de** + infinitif | Il me dit : « Ferme la porte. » → Il me dit **de fermer** la porte. |

Les **pronoms** et les **possessifs** changent aussi : *je* → *il, elle* ; *mon* → *son* ; *nous* → *ils, elles* ; *notre* → *leur*.
Au discours indirect, la question ne garde **pas** de point d'interrogation et le sujet n'est **pas** inversé : « Il me demande où je vais. »

## Quand le verbe qui introduit est au passé
Si le verbe introducteur (dit, demanda, a répondu...) est au **passé**, les temps changent :
| Discours direct | Discours indirect |
|---|---|
| présent : « Je **suis** malade. » | imparfait : Binta a dit qu'elle **était** malade. |
| passé composé : « J'**ai aidé** ma mère. » | plus-que-parfait : Il répondit qu'il **avait aidé** sa mère. |
| futur : « Je **viendrai**. » | conditionnel présent : Il promit qu'il **viendrait**. |

Les mots de temps peuvent changer aussi : *demain* → *le lendemain* ; *aujourd'hui* → *ce jour-là* ; *ici* → *là*.

>! **Exemple résolu**
>! Le maître demanda aux élèves : « Avez-vous appris votre leçon ? »
>! Question oui / non → **si** ; *vous* → *ils* ; *votre* → *leur* ; verbe au passé → le passé composé devient plus-que-parfait.
>! → Le maître demanda aux élèves **s'ils avaient appris leur** leçon.

> **À retenir**
> Discours direct : deux-points et guillemets ; les paroles exactes.
> Discours indirect : que, si, où / quand / pourquoi..., de + infinitif ; pas de guillemets ; pronoms changés.
> Verbe introducteur au passé : présent → imparfait ; passé composé → plus-que-parfait ; futur → conditionnel.
`,
      exercices: [
        { type: "qcm", question: "Quelle phrase est au **discours indirect** ?", choix: ["Fatou dit : « J'ai faim. »", "Fatou dit qu'elle a faim.", "« J'ai faim ! » s'écria Fatou.", "— J'ai faim, dit Fatou."], reponse: 1, explication: "« Fatou dit **qu'elle** a faim » : pas de guillemets, une subordonnée introduite par *que*, et *je* devient *elle*. C'est le **discours indirect**. Les autres phrases rapportent les paroles exactes : discours direct." },
        { type: "vf", question: "Au discours indirect, on garde les deux-points et les guillemets.", reponse: false, explication: "C'est faux : au discours indirect, les paroles sont intégrées à la phrase du narrateur, **sans** deux-points ni guillemets." },
        { type: "saisie", question: "Mets au discours indirect : Awa dit : « Je suis contente. »", reponses: ["Awa dit qu'elle est contente."], explication: "Affirmation → **que** (qu' devant *elle*) ; *je* devient *elle* : « Awa dit **qu'elle** est contente. » Le verbe *dit* est au présent : le temps ne change pas." },
        { type: "saisie", question: "Mets au discours indirect : Modou demande à Ali : « Viens-tu au match ? »", reponses: ["Modou demande à Ali s'il vient au match."], explication: "Question sans mot interrogatif → **si** ; *si* + *il* s'écrit **s'il** ; *tu* devient *il* et il n'y a plus d'inversion : « Modou demande à Ali **s'il vient** au match. »" },
        { type: "qcm", question: "Le maître demande aux élèves : « Où habitez-vous ? » Quelle est la bonne transformation au discours indirect ?", choix: ["Le maître demande aux élèves où ils habitent.", "Le maître demande aux élèves s'ils habitent où.", "Le maître demande aux élèves où habitez-vous.", "Le maître demande aux élèves qu'ils habitent où."], reponse: 0, explication: "On **garde** le mot interrogatif *où* ; *vous* devient *ils* ; pas d'inversion ni de point d'interrogation : « ... **où ils habitent**. »" },
        { type: "saisie", question: "Mets au discours indirect : Ma mère me dit : « Range ta chambre. »", reponses: ["Ma mère me dit de ranger ma chambre."], explication: "Un ordre à l'impératif devient **de + infinitif** : *Range* → **de ranger** ; *ta chambre* devient *ma chambre* (c'est moi qui raconte)." },
        { type: "qcm", question: "Binta a dit : « Je suis malade. » Quelle transformation au discours indirect est correcte ?", choix: ["Binta a dit : qu'elle était malade.", "Binta a dit que je suis malade.", "Binta a dit qu'elle était malade.", "Binta a dit si elle était malade."], reponse: 2, explication: "Affirmation → **que** ; *je* → *elle* ; le verbe introducteur *a dit* est au passé, donc le présent *suis* devient l'**imparfait** *était*. On n'écrit pas de deux-points au discours indirect, et *si* sert seulement pour les questions." },
        { type: "qcm", question: "Le vendeur dit qu'il n'a plus de pain. Quelle phrase rapporte ces paroles au **discours direct** ?", choix: ["Le vendeur dit : « Il n'a plus de pain. »", "Le vendeur dit : « Qu'il n'a plus de pain. »", "Le vendeur dit qu'il n'a plus de pain.", "Le vendeur dit : « Je n'ai plus de pain. »"], reponse: 3, explication: "Au discours direct, le vendeur parle lui-même : il dit **je** ; on met les deux-points et les guillemets, et on enlève *que* : « Je n'ai plus de pain. »" },
        { type: "vf", question: "« Il me demande pourquoi je pleure. » est au discours indirect.", reponse: true, explication: "C'est vrai : pas de guillemets, le mot interrogatif *pourquoi* introduit une subordonnée, pas d'inversion ni de point d'interrogation. Au discours direct : Il me demande : « Pourquoi pleures-tu ? »" },
        { type: "redaction", question: "Réécris ce passage au **discours indirect** (le récit est au passé) :\nÀ la boutique, Awa demanda : « Avez-vous du sucre ? » Le boutiquier répondit : « Je n'en ai plus, mais j'en recevrai demain. » Awa dit alors : « Je reviendrai. »", corrige: `**Corrigé**
À la boutique, Awa demanda au boutiquier **s'il avait** du sucre. Le boutiquier répondit **qu'il n'en avait plus**, mais **qu'il en recevrait le lendemain**. Awa dit alors **qu'elle reviendrait**.

**Explications**
- Question oui / non → **si** (*s'il*) ; affirmations → **que** (*qu'il*, *qu'elle*), répété devant chaque proposition.
- Pronoms : *vous* → *il* (le boutiquier) ; *je* → *il* ou *elle*.
- Verbes introducteurs au passé (*demanda, répondit, dit*) : présent → **imparfait** (*avait, n'avait plus*) ; futur → **conditionnel présent** (*recevrait, reviendrait*).
- *demain* → **le lendemain**.
- Plus de deux-points, de guillemets ni de point d'interrogation.` },
      ],
    },
    {
      id: "fiche-grammaire",
      titre: "Fiche de révision : grammaire",
      theme: "Fiches de révision CFEE",
      cours: `
## Programme de révision sur 7 jours
Les fiches servent au **dernier rappel**, juste avant le CFEE : on apprend d'abord avec les chapitres, puis on relit les fiches. Chaque jour : une fiche de deux matières différentes, et leurs quiz express.

| Jour | À réviser |
|---|---|
| J1 | Maths : numération + Langue : grammaire |
| J2 | Maths : mesure + Langue : conjugaison |
| J3 | Maths : géométrie + Langue : orthographe et vocabulaire |
| J4 | Maths : problèmes + Langue : lecture et écriture |
| J5 | Découverte du monde : histoire + EDD : vivre ensemble |
| J6 | Découverte du monde : géographie + EDD : vivre dans son milieu |
| J7 | Découverte du monde : sciences + relire tous les « Pièges fréquents » + une épreuve complète : « S'entraîner à l'épreuve de mathématiques du CFEE », « Entraînement au CFEE : épreuve blanche de Langue et communication » ou « Réussir l'épreuve d'EDD au CFEE » |

## Comment utiliser cette fiche
Ce n'est pas un nouveau cours : c'est le **résumé** de toute la grammaire du CM2. Relis-la la veille d'une évaluation, puis fais le quiz express. Si une ligne te paraît floue, retourne au chapitre complet.

## 1. Les types et les formes de phrases
| Type | Sert à | Se termine par | Exemple |
|---|---|---|---|
| **déclaratif** | dire, raconter | . | Awa lit. |
| **interrogatif** | poser une question | ? | Lis-tu ? |
| **exclamatif** | montrer un sentiment | ! | Quel beau livre ! |
| **impératif** | donner un ordre, un conseil | . ou ! | Lis ce livre. |

- Phrase **verbale** (avec un verbe conjugué) : « Le car part. » ; phrase **non verbale** (sans verbe conjugué) : « Quelle chaleur ! »
- Forme **négative** : on encadre le verbe → **ne... pas**, ne... jamais, ne... plus, ne... rien, ne... personne.
- Piège : à l'écrit, n'oublie **jamais le ne** (« Je **ne** sais **pas** »).

## 2. La nature des mots (ce qu'est le mot)
| Nature | Repère rapide | Exemples |
|---|---|---|
| **nom** | on peut mettre *le, la, un* devant | case, Moussa, joie |
| **déterminant** | devant le nom | le, une, mon, ce, des, trois |
| **adjectif** | dit comment est le nom | grand, rouge, gentille |
| **verbe** | se conjugue | manger, je mange |
| **pronom** | remplace un nom | il, elle, nous, le, lui, qui |
| **adverbe** | invariable, précise le verbe | vite, bien, très, souvent, lentement |
| **préposition** | invariable, introduit un complément | à, de, dans, sur, pour, avec, sans |
| **conjonction de coordination** | relie deux mots ou deux phrases | mais, ou, et, donc, or, ni, car |

## 3. Les fonctions (le rôle du mot dans la phrase)
| Fonction | Question à poser | Exemple |
|---|---|---|
| **sujet** | Qui est-ce qui ? / Qu'est-ce qui ? + verbe | **Les pêcheurs** partent. |
| **COD** | verbe + qui ? quoi ? (sans préposition) | Modou pêche **un poisson**. |
| **COI** | verbe + à qui ? à quoi ? de qui ? de quoi ? | Il parle **à son père**. |
| **attribut du sujet** | après être, sembler, paraître, devenir, rester | Le ciel **est bleu**. |
| **CC de lieu** | où ? | Ils jouent **dans la cour**. |
| **CC de temps** | quand ? | **Le soir**, il pleut. |
| **CC de manière** | comment ? | Il marche **lentement**. |

- Les CC se **déplacent** et se **suppriment** ; le COD et le COI, non.
- Écris toujours le sujet ou le complément **en entier** (« les pêcheurs de Kayar », pas « pêcheurs »).

## 4. Le groupe nominal
**Déterminant + nom** (+ des **expansions**, les mots ajoutés pour préciser le nom) :
- un **adjectif épithète** (placé à côté du nom) : une case **ronde** ;
- un **complément du nom** (avec une préposition) : la case **de mon grand-père** ;
- une **proposition relative** (qui, que, où) : la case **où je suis né**.

## 5. Phrase simple, phrase complexe
- **1 verbe conjugué = 1 proposition**. Phrase **simple** = 1 verbe conjugué ; phrase **complexe** = plusieurs.
- Propositions **juxtaposées** (posées côte à côte, séparées par , ; ou :), **coordonnées** (mais, ou, et, donc, or, ni, car), **subordonnées** (qui, que, quand, parce que, si...).

## 6. Discours direct, discours indirect
| Direct | Indirect |
|---|---|
| Ali dit : « **Je** suis fatigué. » | Ali dit **qu'il** est fatigué. |
| Awa me demande : « Viens-tu ? » | Awa me demande **si** je viens. |
| Il a dit : « Je **partirai** **demain**. » | Il a dit qu'il **partirait** **le lendemain**. |

- Au discours indirect : **plus de deux-points ni de guillemets** ; les pronoms changent (je → il ou elle).

## 7. Les pronoms personnels compléments
Un pronom complément **remplace un complément** pour éviter de le répéter. Il se place **devant le verbe** (au passé composé, devant l'auxiliaire : « Je **l'**ai vu »).

| Pronom | Il remplace | Exemple |
|---|---|---|
| **le, la, l', les** | un COD (verbe + qui ? quoi ?) | Je vois **Awa**. → Je **la** vois. Il range **ses cahiers**. → Il **les** range. |
| **lui, leur** | un COI avec *à* (à qui ?) | Je parle **à mon oncle**. → Je **lui** parle. Je parle **à mes oncles**. → Je **leur** parle. |
| **me, te, nous, vous** | un COD ou un COI | Le maître **nous** appelle. Il **te** prête un livre. |
| **en** | un complément avec *de*, ou une quantité | Je mange **des mangues**. → J'**en** mange. |
| **y** | un lieu, ou un complément avec *à* | Je vais **à Thiès**. → J'**y** vais. |

- Piège : **leur** devant un verbe est un pronom : il ne prend **jamais de s** (« Je **leur** donne de l'eau »). Devant un nom, c'est un déterminant : **leur** champ, **leurs** champs.
- À l'impératif affirmatif, le pronom se place **après** le verbe, avec un trait d'union : « Prends-**le** ! », « Donne-**lui** de l'eau. »

> **À retenir**
> Nature = ce qu'est le mot (nom, verbe...). Fonction = son rôle dans la phrase (sujet, COD...).
> Sujet : qui est-ce qui ? COD : verbe + quoi ? COI : verbe + à quoi / de quoi ? CC : où, quand, comment ?
> Autant de verbes conjugués, autant de propositions.
`,
      textes: {
        fichegram: `**Au marché** (texte d'entraînement)

Ce matin, Awa accompagne sa grand-mère au marché de Thiès. Les vendeuses installent leurs étals sous les grands parasols. « Combien coûtent ces mangues ? » demande la grand-mère. La vendeuse lui répond qu'elles coûtent cinq cents francs le tas. Quelle belle journée ! Awa porte le panier et sourit.`,
      },
      exercices: [
        { type: "qcm", question: "« Range tes cahiers avant de sortir. » Quel est le type de cette phrase ?", choix: ["déclaratif", "interrogatif", "exclamatif", "impératif"], reponse: 3, explication: "C'est un **ordre**, sans sujet exprimé : la phrase est de type **impératif**." },
        { type: "saisie", question: "Écris cette phrase à la forme négative avec **ne... pas** : « Awa aime le poisson. »", reponses: ["Awa n'aime pas le poisson."], explication: "On encadre le verbe : Awa **n'**aime **pas** le poisson. Devant une voyelle, *ne* devient **n'**." },
        { type: "qcm", question: "Quelle est la nature du mot **lentement** dans « Le vieux marche lentement » ?", choix: ["un adjectif", "un adverbe", "un nom", "une préposition"], reponse: 1, explication: "*Lentement* est invariable et précise le verbe *marche* : c'est un **adverbe** (beaucoup d'adverbes se terminent par *-ment*)." },
        { type: "saisie", question: "Écris le sujet du verbe en entier : « Chaque matin, les pêcheurs de Kayar partent en mer. »", reponses: ["les pêcheurs de Kayar"], explication: "Qui est-ce qui part ? **Les pêcheurs de Kayar**. « Chaque matin » est un CC de temps." },
        { type: "qcm", question: "Dans « Modou a pêché un gros poisson », quelle est la fonction de **un gros poisson** ?", choix: ["sujet", "complément d'objet indirect", "complément d'objet direct", "complément circonstanciel de lieu"], reponse: 2, explication: "Modou a pêché **quoi ?** un gros poisson, sans préposition : c'est le **COD**." },
        { type: "vf", question: "Dans « Le ciel est bleu », le mot **bleu** est attribut du sujet.", reponse: true, explication: "Vrai : *bleu* vient après le verbe **être** et dit comment est *le ciel* : c'est un **attribut du sujet**." },
        { type: "qcm", question: "Dans « Il parle à son maître », quelle est la fonction de **à son maître** ?", choix: ["complément d'objet indirect", "complément circonstanciel de lieu", "complément d'objet direct", "attribut du sujet"], reponse: 0, explication: "Il parle **à qui ?** à son maître : le complément est introduit par *à* et ne se déplace pas : c'est un **COI**." },
        { type: "qcm", question: "Dans « la case de mon grand-père », que sont les mots **de mon grand-père** ?", choix: ["un adjectif", "une proposition relative", "un COD", "un complément du nom"], reponse: 3, explication: "Ils complètent le nom *case* et commencent par la préposition *de* : c'est un **complément du nom**." },
        { type: "saisie", question: "Combien de propositions y a-t-il dans cette phrase ? « Il pleut, nous restons à la maison et nous jouons aux cartes. » (Écris un nombre.)", reponses: ["3", "trois"], explication: "Il y a **3 verbes conjugués** (pleut, restons, jouons), donc **3 propositions**." },
        { type: "qcm", question: "Fatou dit : « Je suis contente. » Quelle phrase rapporte ces paroles au discours indirect ?", choix: ["Fatou dit : qu'elle est contente.", "Fatou dit qu'elle est contente.", "Fatou dit que je suis contente.", "Fatou dit si elle est contente."], reponse: 1, explication: "On écrit **que**, sans deux-points ni guillemets, et *je* devient **elle** : Fatou dit **qu'elle est contente**." },
        { type: "saisie", question: "Remplace le groupe en gras par un pronom et écris la nouvelle phrase : « Je donne de l'eau **à mes moutons**. »", reponses: ["Je leur donne de l'eau."], explication: "« à mes moutons » répond à **à qui ?** : c'est un COI au pluriel → **leur**, placé devant le verbe et **sans s** : « Je **leur** donne de l'eau. »" },
        { type: "qcm", question: "« Modou range **ses cahiers**. » Quelle phrase remplace correctement le COD par un pronom ?", choix: ["Modou leur range.", "Modou range les.", "Modou lui range.", "Modou les range."], reponse: 3, explication: "*Ses cahiers* est un COD au pluriel → **les**, placé **devant** le verbe : « Modou **les** range. » *Lui* et *leur* remplacent un COI (à qui ?)." },
        { type: "saisie", texte: "fichegram", question: "Dans le texte, écris le **COD** du verbe « installent », en entier.", reponses: ["leurs étals"], explication: "Les vendeuses installent **quoi ?** → **leurs étals** (COD, sans préposition). *Leurs* prend un s car il est devant un nom pluriel. *Sous les grands parasols* est un CC de lieu." },
        { type: "qcm", texte: "fichegram", question: "Dans le texte, « Quelle belle journée ! » est une phrase :", choix: ["déclarative et verbale", "interrogative et verbale", "exclamative et non verbale", "impérative et non verbale"], reponse: 2, explication: "Elle exprime un **sentiment** et finit par un point d'exclamation : elle est **exclamative**. Elle n'a **aucun verbe conjugué** : elle est **non verbale**." },
        { type: "redaction", texte: "fichegram", question: "**Exercice comme au CFEE (connaissances de la langue)** — Relis le texte « Au marché », puis :\n1) Dans « Les vendeuses installent leurs étals sous les grands parasols », donne la **fonction** de : *Les vendeuses*, *leurs étals*, *sous les grands parasols*.\n2) Récris « Awa porte le panier » en remplaçant le COD par un pronom, puis écris cette nouvelle phrase à la **forme négative**.\n3) Récris au **discours direct** : « La vendeuse lui répond qu'elles coûtent cinq cents francs le tas. »", corrige: `**Corrigé**
1) *Les vendeuses* : **sujet** (qui est-ce qui installe ?) ; *leurs étals* : **COD** (installent quoi ?) ; *sous les grands parasols* : **complément circonstanciel de lieu** (où ?).
2) « Awa **le** porte. » Forme négative : « Awa **ne le** porte **pas**. » (le pronom reste collé au verbe, entre *ne* et le verbe)
3) La vendeuse lui répond : « **Elles coûtent** cinq cents francs le tas. » (ou : « Ces mangues coûtent cinq cents francs le tas. »)

**Ce qui est vérifié** : le sujet et les compléments écrits en entier ; le pronom devant le verbe ; les deux mots de la négation ; deux-points et guillemets au discours direct, sans *que*.` },
      ],
    },
    {
      id: "fiche-conjugaison",
      titre: "Fiche de révision : conjugaison",
      theme: "Fiches de révision CFEE",
      cours: `
## Comment utiliser cette fiche
Voici **toutes les terminaisons** à savoir par cœur pour le CM2. Lis les tableaux à voix haute, cache-les, puis récite-les.

## 1. Les trois groupes
- **1er groupe** : infinitif en **-er** (chanter), sauf *aller*.
- **2e groupe** : infinitif en **-ir** avec **nous ...issons** (finir → nous finissons).
- **3e groupe** : tous les autres (être, avoir, aller, faire, prendre, venir, partir...).

## 2. Les terminaisons des temps simples
(Les terminaisons s'ajoutent au radical : chant-, fin- ; au futur et au conditionnel, à l'infinitif : chanter-, finir-.)

| Temps | je | tu | il, elle | nous | vous | ils, elles |
|---|---|---|---|---|---|---|
| **présent** 1er gr. | e | es | e | ons | ez | ent |
| **présent** 2e gr. | is | is | it | issons | issez | issent |
| **imparfait** (tous) | ais | ais | ait | ions | iez | aient |
| **futur** (tous) | ai | as | a | ons | ez | ont |
| **conditionnel** (tous) | ais | ais | ait | ions | iez | aient |
| **passé simple** 1er gr. | ai | as | a | âmes | âtes | èrent |
| **passé simple** 2e gr. | is | is | it | îmes | îtes | irent |

- Futur et conditionnel se construisent sur le **même radical**, souvent l'infinitif : je chanter**ai** (futur), je chanter**ais** (conditionnel) ; verbes irréguliers : j'**ir**ai / j'**ir**ais, je **fer**ai / je **fer**ais.
- Imparfait : radical de « nous » au présent : nous finiss-ons → je finiss**ais**.

## 3. Le présent des verbes du 3e groupe à connaître
| | aller | faire | dire | prendre | venir | pouvoir | vouloir | voir |
|---|---|---|---|---|---|---|---|---|
| je (j') | vais | fais | dis | prends | viens | peux | veux | vois |
| tu | vas | fais | dis | prends | viens | peux | veux | vois |
| il, elle, on | va | fait | dit | prend | vient | peut | veut | voit |
| nous | allons | faisons | disons | prenons | venons | pouvons | voulons | voyons |
| vous | allez | faites | dites | prenez | venez | pouvez | voulez | voyez |
| ils, elles | vont | font | disent | prennent | viennent | peuvent | veulent | voient |

- Pièges : vous **faites**, vous **dites** (pas « faisez », « disez ») ; je **peux**, je **veux** avec un **x** ; il **prend** avec un **d**.
- Passé simple des verbes du 3e groupe : il **fit** (faire), il **dit** (dire), il **prit** (prendre), il **vint**, ils **vinrent** (venir), il **vit** (voir) ; mais aller → il **alla** (comme le 1er groupe).

## 4. Être et avoir à tous les temps
| Temps | être | avoir |
|---|---|---|
| présent | je suis, nous sommes, ils sont | j'ai, nous avons, ils ont |
| imparfait | j'étais | j'avais |
| futur | je serai | j'aurai |
| conditionnel | je serais | j'aurais |
| passé simple | il fut, ils furent | il eut, ils eurent |
| passé composé | j'ai été | j'ai eu |
| impératif | sois, soyons, soyez | aie, ayons, ayez |

## 5. Les futurs irréguliers
| aller | faire | venir | voir | pouvoir | vouloir |
|---|---|---|---|---|---|
| j'irai | je ferai | je viendrai | je verrai | je pourrai | je voudrai |

## 6. Les temps composés
- **Passé composé** = *avoir* ou *être* au **présent** + participe passé : j'**ai mangé**, elle **est partie**.
- Pour aller plus loin : **plus-que-parfait** = *avoir* ou *être* à l'**imparfait** + participe passé : j'**avais mangé**.
- Participes passés : chanter → chant**é** ; finir → fin**i** ; prendre → pr**is** ; faire → fai**t** ; venir → ven**u** ; voir → v**u**.

## 7. L'impératif
3 personnes, **sans sujet** : chante, chantons, chantez. Au 1er groupe : **pas de s** à « tu » (Mange ! Range !). Aller : va, allons, allez.

## Les pièges les plus fréquents
| Piège | Astuce |
|---|---|
| je chanter**ai** (futur) / je chanter**ais** (conditionnel) | remplace par « nous » : nous chanterons → futur ; nous chanterions → conditionnel |
| il chant**a** (passé simple) / il chant**ait** (imparfait) | l'imparfait dure (décor, habitude) ; le passé simple = action courte |
| mang**é** ou mang**er** ? | remplace par *vendu* / *vendre* : il a vendu → **é** ; il veut vendre → **er** |
| nous man**ge**ons, nous commen**ç**ons | on garde le son du g et du c devant o et a |

## 8. Cinq autres verbes du 3e groupe très utiles
| | savoir | devoir | mettre | lire | écrire |
|---|---|---|---|---|---|
| je (j') | sais | dois | mets | lis | écris |
| il, elle | sait | doit | met | lit | écrit |
| nous | savons | devons | mettons | lisons | écrivons |
| ils, elles | savent | doivent | mettent | lisent | écrivent |
| imparfait | je savais | je devais | je mettais | je lisais | j'écrivais |
| futur | je saurai | je devrai | je mettrai | je lirai | j'écrirai |
| passé composé | j'ai su | j'ai dû | j'ai mis | j'ai lu | j'ai écrit |
| passé simple | il sut | il dut | il mit | il lut | il écrivit |

- Pièges : il **met** (un seul t), mais nous **mettons** ; nous **écrivons**, ils **écrivent** (avec un **v**) ; ils **doivent** ; futur de savoir : je **saurai** (pas « je savrai »).
- Participes passés : *mis* et *écrit* gardent une lettre muette qu'on entend au féminin (une lettre **écrite**, la table est **mise**).

> **À retenir**
> Imparfait et conditionnel : -ais, -ais, -ait, -ions, -iez, -aient. Futur : -ai, -as, -a, -ons, -ez, -ont.
> Passé composé = avoir ou être au présent + participe passé.
`,
      textes: {
        ficheconj: `**Le soir chez Moussa** (texte d'entraînement)

Chaque soir, Moussa **lit** un conte à sa petite sœur. Elle **met** sa tête sur son épaule et **écoute**. Puis Moussa **écrit** les mots difficiles sur son ardoise : il **doit** préparer le CFEE. Sa sœur **sait** déjà lire quelques mots.`,
      },
      exercices: [
        { type: "saisie", question: "Conjugue **jouer** à l'imparfait : « Autrefois, nous ___ sous le baobab. »", reponses: ["jouions", "nous jouions"], explication: "Imparfait : radical *jou-* + **-ions** → nous **jouions**." },
        { type: "saisie", question: "Conjugue **aller** au futur simple : « Demain, tu ___ au marché. »", reponses: ["iras", "tu iras"], explication: "*Aller* est irrégulier au futur : j'irai, tu **iras**, il ira." },
        { type: "qcm", question: "Conjugue **bondir** au passé simple : « Soudain, le lion ___ sur sa proie. »", choix: ["bondissa", "bondi", "bondit", "bondait"], reponse: 2, explication: "*Bondir* est du 2e groupe : au passé simple, -is, -is, **-it** → le lion **bondit**." },
        { type: "qcm", question: "« Si j'avais de l'argent, j'___ un vélo. » Quelle forme convient ?", choix: ["achèterais", "achèterai", "achetais", "achète"], reponse: 0, explication: "Après « si + imparfait », on emploie le **conditionnel présent** : j'**achèterais** (terminaison -ais)." },
        { type: "saisie", question: "Conjugue **partir** au passé composé : « Hier, Awa ___ à Thiès. »", reponses: ["est partie", "Awa est partie"], explication: "*Partir* se conjugue avec **être** : le participe s'accorde avec le sujet féminin → Awa **est partie**." },
        { type: "vf", question: "À l'impératif, on écrit « Mange ta soupe ! » sans **s** à la fin de *mange*.", reponse: true, explication: "Vrai : à l'impératif, les verbes du 1er groupe n'ont **pas de s** à la 2e personne du singulier." },
        { type: "saisie", question: "Écris la terminaison qui manque (**é** ou **er**) : « Moussa veut mang___ du riz. »", reponses: ["er", "manger"], explication: "On peut dire « Moussa veut **vendre** » : c'est l'**infinitif** → mang**er**." },
        { type: "qcm", question: "Quelle est la forme du verbe **être** au passé simple, avec *il* ?", choix: ["il était", "il fut", "il sera", "il serait"], reponse: 1, explication: "Passé simple : il **fut**. *Était* = imparfait, *sera* = futur, *serait* = conditionnel." },
        { type: "saisie", question: "Conjugue **finir** au présent : « Nous ___ nos devoirs. »", reponses: ["finissons", "nous finissons"], explication: "2e groupe : nous fin**issons**, avec **-iss-**." },
        { type: "qcm", question: "« Les enfants chantaient sous l'arbre. » À quel temps est le verbe ?", choix: ["au passé simple", "au conditionnel présent", "au futur simple", "à l'imparfait"], reponse: 3, explication: "Terminaison **-aient** sans infinitif devant (chant-aient) : c'est l'**imparfait**. Au conditionnel, on aurait *chanteraient*." },
        { type: "saisie", question: "Conjugue **faire** au présent : « Vous ___ vos exercices. »", reponses: ["faites", "vous faites"], explication: "*Faire* est du 3e groupe : vous **faites** (comme vous *dites*), jamais « vous faisez »." },
        { type: "qcm", question: "Conjugue **prendre** au présent : « Les élèves ___ le car à sept heures. »", choix: ["prendent", "prennent", "prenent", "prend"], reponse: 1, explication: "*Prendre* : je prends, nous prenons, ils **prennent** (avec deux **n**)." },
        { type: "saisie", question: "Conjugue **pouvoir** au présent : « Je ___ t'aider. »", reponses: ["peux", "je peux"], explication: "*Pouvoir* : je **peux**, tu peux (avec un **x**), il peut (avec un **t**)." },
        { type: "qcm", question: "Conjugue **venir** au passé simple : « Le soir, le griot ___ au village. »", choix: ["venit", "vena", "vint", "venait"], reponse: 2, explication: "Passé simple de *venir* : il **vint**, ils vinrent. *Venait* est l'imparfait." },
        { type: "saisie", question: "Conjugue **écrire** au présent : « Vous ___ une lettre à votre oncle. »", reponses: ["écrivez", "vous écrivez"], explication: "*Écrire* : j'écris, nous écri**v**ons, vous **écrivez**, ils écrivent. Au pluriel, un **v** apparaît." },
        { type: "saisie", question: "Conjugue **devoir** au présent : « Les élèves ___ apprendre leur leçon. »", reponses: ["doivent", "les élèves doivent"], explication: "*Devoir* : je dois, nous devons, ils **doivent**." },
        { type: "qcm", question: "Conjugue **mettre** au présent : « Awa ___ son pagne neuf pour la fête. »", choix: ["mets", "mettre", "mette", "met"], reponse: 3, explication: "*Mettre* : je mets, tu mets, elle **met** (un seul t, sans s). *Mets* va avec *je* ou *tu*." },
        { type: "saisie", question: "Conjugue **savoir** au futur simple : « Demain, tu ___ ta leçon par cœur. »", reponses: ["sauras", "tu sauras"], explication: "*Savoir* a un futur irrégulier : je **saur**ai, tu **sauras**, il saura." },
        { type: "redaction", texte: "ficheconj", question: "**Exercice comme au CFEE (conjugaison)** — Relis le texte « Le soir chez Moussa », puis :\n1) Donne l'**infinitif** et le **groupe** de chaque verbe en gras.\n2) Récris tout le texte au **futur simple**, en commençant par « Demain soir, Moussa... ».\n3) Récris la première phrase au **passé composé**, en commençant par « Hier soir, ... ».", corrige: `**Corrigé**
1) *lit* : lire (3e groupe) ; *met* : mettre (3e) ; *écoute* : écouter (1er) ; *écrit* : écrire (3e) ; *doit* : devoir (3e) ; *sait* : savoir (3e).

2) Demain soir, Moussa **lira** un conte à sa petite sœur. Elle **mettra** sa tête sur son épaule et **écoutera**. Puis Moussa **écrira** les mots difficiles sur son ardoise : il **devra** préparer le CFEE. Sa sœur **saura** déjà lire quelques mots.

3) Hier soir, Moussa **a lu** un conte à sa petite sœur.

**Ce qui est vérifié** : les terminaisons du futur (-ai, -as, -a, -ons, -ez, -ont) ; les radicaux irréguliers *saur-* et *devr-* ; le *e* de *écouter* gardé (écout**e**ra) ; l'auxiliaire *avoir* et le participe *lu*. *Lire*, qui reste à l'infinitif après *saura*, ne change pas.` },
      ],
    },
    {
      id: "fiche-orthographe-vocabulaire",
      titre: "Fiche de révision : orthographe et vocabulaire",
      theme: "Fiches de révision CFEE",
      cours: `
## Comment utiliser cette fiche
Les règles d'accord, les homophones et les mots de vocabulaire à connaître, en un seul endroit. Apprends les **astuces** : ce sont elles qui t'aident le jour de l'examen.

## 1. Les accords
| Accord | Règle | Exemple |
|---|---|---|
| **verbe et sujet** | le verbe prend la personne et le nombre du sujet | Les filles de ma voisine **chantent**. |
| plusieurs sujets | pluriel | Awa et Binta **préparent** le repas. |
| sujet **on** | comme *il* | On **mange**. |
| **dans le groupe nominal** | déterminant, nom et adjectif ont le même genre et le même nombre | de **grandes** case**s** ronde**s** |
| participe passé avec **être** | s'accorde avec le sujet | Les filles sont parti**es**. |
| participe passé avec **avoir** | ne s'accorde **pas** avec le sujet | Les filles ont **mangé**. |

## 2. Le pluriel des noms
| Le nom se termine par | Pluriel | Exceptions à savoir |
|---|---|---|
| (cas général) | **+ s** | un arbre → des arbres |
| -s, -x, -z | ne change pas | un repas, une noix, un nez |
| -au, -eau, -eu | **+ x** | pneus, bleus |
| -al | **-aux** (un cheval → des chevaux) | bals, festivals, carnavals, chacals |
| -ou | **+ s** | 7 en -oux : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux |
| -ail | **+ s** | travaux, vitraux, coraux |

## 3. Le féminin
| Masculin | Féminin | Exemple |
|---|---|---|
| (cas général) | + e | grand → grande |
| -er | -ère | fier → fière ; boulanger → boulangère |
| -eux | -euse | courageux → courageuse |
| -if | -ive | sportif → sportive |
| -on, -en, -el | consonne doublée + e | bon → bonne, ancien → ancienne, cruel → cruelle |
| -eur | -euse ou -trice | vendeur → vendeuse ; directeur → directrice |

- Devant **m, b, p**, on écrit **m** et non n : ca**m**pagne, no**m**bre, e**m**mener.

## 4. Les homophones et leur astuce
| Homophones | Je remplace par... |
|---|---|
| a / à | **avait** → a ; sinon à |
| est / et | **était** → est ; **et puis** → et |
| son / sont | **étaient** → sont ; **mon** → son |
| on / ont | **avaient** → ont ; **il** → on |
| ou / où | **ou bien** → ou ; lieu ou temps → où |
| ce / se | **cette** → ce ; **me** (je me lave) → se |
| ces / ses | **mes** → ses ; **ces ...-là** → ces |
| c'est / s'est | **cela est** → c'est ; **je me suis** → s'est |
| la / l'a / là | **une** → la ; **l'avait** → l'a ; **ici** → là |
| mais / mes | **pourtant** → mais ; **tes** → mes |
| peu / peut / peux | **pouvait** → peut, peux ; **pas beaucoup** → peu |
| quel, quelle / qu'elle | **qu'il** → qu'elle (je pense **qu'elle** viendra) ; devant un nom → quel, quelle (**quelle** chaleur !) |
| leur / leurs | devant un **verbe** → leur, jamais de s (je **leur** parle) ; devant un **nom pluriel** → leurs (**leurs** cahiers) |
| ça / sa | **cela** → ça (**ça** brille) ; **ma** → sa (**sa** case) |
| ni / n'y | **y** à la forme affirmative → n'y (il **n'y** va pas → il **y** va) ; **et pas** → ni (il n'a **ni** riz **ni** mil) |

## 5. Le vocabulaire
| Notion | Ce que c'est | Exemple |
|---|---|---|
| **famille de mots** | mots formés sur le même radical | terre, terrain, enterrer |
| **préfixe** | avant le radical | **re**faire, **im**possible, **dé**faire |
| **suffixe** | après le radical | jardin**ier**, lente**ment** |
| **synonymes** | même sens | content = joyeux |
| **contraires** | sens opposé | propre ≠ sale |
| **sens propre / figuré** | sens concret / sens imagé | un cœur qui bat / avoir un cœur d'or |
| **champ lexical** | mots d'un même thème | la mer : vague, pirogue, filet, pêcheur |
| **niveaux de langue** | familier / courant / soutenu | bouffer / manger / se restaurer |

- Dans le dictionnaire, les mots sont rangés par **ordre alphabétique** ; abréviations : *n.* nom, *v.* verbe, *adj.* adjectif.
- Dans tes rédactions, écris en langage **courant** ou **soutenu**, jamais familier.

## 6. La dictée : écrire, puis se relire
1. **Écoute** tout le texte la première fois, sans écrire : tu comprends de quoi il parle.
2. **Écris** phrase par phrase, lisiblement ; écris la ponctuation que le maître dicte.
3. **Relis trois fois**, en cherchant une seule chose à chaque fois :
   - 1re relecture : le **sens** et les **mots oubliés** ;
   - 2e relecture : les **accords** (le verbe et son sujet, avec « qui est-ce qui ? » ; le déterminant, le nom et l'adjectif ; le participe passé avec être) ;
   - 3e relecture : les **homophones** (remplace !), les **accents**, les **majuscules** et les **points**.

**Mots invariables** à savoir écrire par cœur (ils ne changent jamais) : toujours, jamais, souvent, beaucoup, aujourd'hui, hier, demain, maintenant, bientôt, longtemps, après, avant, depuis, pendant, parce que, chez, sans, très, trop, assez, déjà, ensuite.

> **À retenir**
> Avec être, j'accorde avec le sujet ; avec avoir, je n'accorde pas avec le sujet.
> Pour un homophone, je remplace : a → avait, est → était, sont → étaient, ont → avaient, ses → mes.
`,
      textes: {
        ficheortho: `**Au puits** (texte d'entraînement, avec 6 erreurs à trouver)

Aujourd'hui, les enfant du quartier sont allé au puits. Il fesait très chaud. Leurs mères leurs avaient demandé de rapporter de l'eau. Fatou a posé ça calebasse sur sa tête. Qu'elle chaleur ! Il n'y avait ni vent ni ombre sur le chemin.`,
      },
      exercices: [
        { type: "qcm", question: "Quel est le pluriel de **un cheval** ?", choix: ["des chevals", "des chevaux", "des chevaus", "des chevales"], reponse: 1, explication: "Les noms en **-al** font leur pluriel en **-aux** : des **chevaux** (sauf bal, festival, carnaval, chacal...)." },
        { type: "saisie", question: "Écris le pluriel de **un caillou**.", reponses: ["des cailloux", "cailloux"], explication: "*Caillou* fait partie des **7 noms en -ou** qui prennent un **x** : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux." },
        { type: "saisie", question: "Complète par **son** ou **sont** : « Les enfants ___ contents de la fête. »", reponses: ["sont"], explication: "On peut dire « les enfants **étaient** contents » : c'est le verbe être → **sont**." },
        { type: "qcm", question: "Quelle phrase est correctement écrite ?", choix: ["Moussa et parti a Dakar.", "Moussa est parti a Dakar.", "Moussa et parti à Dakar.", "Moussa est parti à Dakar."], reponse: 3, explication: "« Moussa **était** parti » → **est** ; « avait Dakar » ne veut rien dire → préposition **à**, avec un accent." },
        { type: "saisie", question: "Écris le féminin de l'adjectif **courageux** : « une fille ___ ».", reponses: ["courageuse", "une fille courageuse"], explication: "Les adjectifs en **-eux** font leur féminin en **-euse** : courageuse." },
        { type: "vf", question: "On écrit correctement : « Les filles ont mangées le riz. »", reponse: false, explication: "Faux : avec **avoir**, le participe passé ne s'accorde **pas** avec le sujet. On écrit : « Les filles ont **mangé** le riz. »" },
        { type: "saisie", question: "Conjugue **chanter** au présent : « Les filles de ma voisine ___ très bien. »", reponses: ["chantent", "les filles de ma voisine chantent"], explication: "Qui est-ce qui chante ? **les filles** (pas *ma voisine*) : sujet pluriel → **chantent**." },
        { type: "qcm", question: "Quel mot n'appartient **pas** à la famille de **terre** ?", choix: ["terrain", "enterrer", "terrible", "territoire"], reponse: 2, explication: "*Terrible* vient de *terreur* (avoir très peur), pas de *terre*. Terrain, enterrer, territoire ont le radical **terr-** de *terre*." },
        { type: "qcm", question: "« Ma bagnole est en panne. » À quel niveau de langue appartient le mot **bagnole** ?", choix: ["soutenu", "courant", "familier", "on ne peut pas savoir"], reponse: 2, explication: "*Bagnole* est **familier** ; en langage courant, on dit *voiture*. À l'examen, évite le familier." },
        { type: "saisie", question: "Écris le mot en entier avec **m** ou **n** : « une ca_pagne ».", reponses: ["campagne"], explication: "Devant **p**, on écrit **m** : ca**m**pagne (comme no**m**bre, ja**m**be)." },
        { type: "saisie", question: "Complète par **quelle** ou **qu'elle** : « Awa dit ___ viendra demain. »", reponses: ["qu'elle"], explication: "On peut dire « Awa dit **qu'il** viendra » : c'est **qu'elle** (que + elle)." },
        { type: "qcm", question: "Quelle phrase est bien écrite ?", choix: ["Le maître leurs rend leurs cahiers.", "Le maître leur rend leur cahiers.", "Le maître leur rend leurs cahiers.", "Le maître leurs rend leur cahiers."], reponse: 2, explication: "Devant le verbe *rend*, **leur** est un pronom : jamais de s. Devant le nom pluriel *cahiers*, **leurs** est un déterminant : il prend un s." },
        { type: "saisie", question: "Complète par **ça** ou **sa** : « Fatou a perdu ___ sandale. »", reponses: ["sa"], explication: "On peut dire « Fatou a perdu **ma** sandale » : c'est le déterminant **sa**. *Ça* veut dire *cela*." },
        { type: "saisie", question: "Complète par **ni** ou **n'y** : « Il ___ a plus d'eau dans le canari. »", reponses: ["n'y"], explication: "À la forme affirmative, on dit « Il **y** a de l'eau » : c'est donc **n'y** (ne + y)." },
        { type: "redaction", texte: "ficheortho", question: "**Exercice comme au CFEE (orthographe)** — Le texte « Au puits » contient **6 erreurs** d'orthographe.\n1) Recopie le texte en corrigeant les 6 erreurs.\n2) Pour chaque erreur, écris l'astuce ou la règle qui t'a aidé.\n3) Explique pourquoi on écrit **n'y** et **ni** dans la dernière phrase.", corrige: `**Texte corrigé**
Aujourd'hui, les **enfants** du quartier sont **allés** au puits. Il **faisait** très chaud. Leurs mères **leur** avaient demandé de rapporter de l'eau. Fatou a posé **sa** calebasse sur sa tête. **Quelle** chaleur ! Il n'y avait ni vent ni ombre sur le chemin.

**Les règles**
1. *enfants* : après *les*, le nom est au pluriel (+ s).
2. *allés* : avec **être**, le participe passé s'accorde avec le sujet *les enfants* (masculin pluriel).
3. *faisait* : imparfait de *faire*, radical **fais-** (comme *nous faisons*).
4. *leur* : devant le verbe *avaient demandé*, c'est un pronom : jamais de s.
5. *sa* : on peut dire « **ma** calebasse » → sa.
6. *Quelle* : devant le nom *chaleur* (féminin), on écrit **quelle** ; on ne peut pas dire « qu'il chaleur ».

3) *n'y* : à la forme affirmative, on dirait « Il **y** avait du vent » → n'y. *ni* : il veut dire « et pas » (pas de vent **et pas** d'ombre).

**Méthode** : trois relectures, une pour le sens, une pour les accords, une pour les homophones et les accents.` },
      ],
    },
    {
      id: "fiche-lecture-ecriture",
      titre: "Fiche de révision : compréhension de texte et production d'écrits",
      theme: "Fiches de révision CFEE",
      cours: `
## Comment utiliser cette fiche
La méthode pour le texte et les questions, les plans types des rédactions, et la liste à cocher avant de rendre ta copie.

## 1. Comprendre un texte : la méthode
1. Lis le **titre**, puis **tout le texte** une première fois.
2. Lis **les questions** : tu sais ce que tu cherches.
3. **Relis** et souligne au crayon la phrase utile.
4. Réponds par une **phrase complète** qui reprend les mots de la question.

| Sorte de question | Ce qu'on attend | Astuce |
|---|---|---|
| **repérage** (qui ? où ? quand ?) | la réponse est écrite dans le texte | cherche le mot de la question dans le texte |
| **déduction** (pourquoi ? que ressent-il ?) | la réponse n'est pas écrite mot pour mot | appuie-toi sur un indice du texte |
| **vocabulaire** | le sens d'un mot | relis la phrase entière, remplace par un synonyme |
| **justifier, relever** | une preuve | recopie les mots du texte **entre guillemets** |
| **ton avis** | ce que tu penses | « Je pense que... car... » |

| Type de texte | Il sert à... |
|---|---|
| **narratif** | raconter une histoire (conte, récit) |
| **descriptif** | montrer un lieu, une personne |
| **documentaire** | informer, expliquer |
| **injonctif** | dire quoi faire (recette, règlement) |
| **poétique** | jouer avec les mots et les sons |
| **lettre** | communiquer avec une personne absente |

- Un **poème** est écrit en **vers** (les lignes), regroupés en **strophes** (les paragraphes du poème) ; les **rimes** sont les sons répétés à la fin des vers.
- Dans un texte long, demande-toi à chaque pronom (*il, elle, ils*) **qui il désigne**.

## 2. La situation d'intégration (rédaction)
On te donne un **contexte** (ce qui se passe) et une **consigne** (ce que tu dois écrire). Avant d'écrire, réponds à 5 questions : **Qui** écrit ? **À qui** ? **Pourquoi** ? **Quel type** de texte ? **Quelle longueur** et quel **temps** ?

## 3. Les plans types
### La lettre personnelle
| Partie | Contenu |
|---|---|
| lieu et date | en haut à droite : Kaolack, le 12 mars 2027 |
| formule d'appel | Cher oncle, / Chère Awa, |
| paragraphe 1 | salutations et nouvelles |
| paragraphe 2 | la raison de la lettre (ce que demande la consigne) |
| paragraphe 3 | les détails, les exemples |
| paragraphe 4 | conclusion : souhait, promesse, salutations à transmettre |
| formule finale et signature | Je t'embrasse. — ton prénom |

- **Tu** ou **vous** : choisis, et ne mélange pas.

### Le récit
| Partie | Contenu | Mots utiles |
|---|---|---|
| introduction | situation initiale : qui ? où ? quand ? | Un jour, Ce matin-là |
| développement | élément déclencheur et péripéties | Soudain, Alors, Ensuite |
| conclusion | dénouement, situation finale, ce que tu as ressenti | Finalement, Enfin |

- Temps : **passé composé** et **imparfait**, ou **passé simple** et **imparfait**, sans changer en route.

### La description et le portrait
- Dis d'abord **ce que tu décris**, puis suis un **ordre** : de loin à près, de haut en bas, de gauche à droite.
- Utilise des **adjectifs**, des **mots de lieu** (devant, au fond, à côté) et **plusieurs sens** (vue, ouïe, odorat, toucher, goût).
- Portrait : l'**aspect physique**, puis le **caractère** (avec un exemple d'action). Termine par ton **impression**.
- Temps : le **présent** (ou l'imparfait dans un récit au passé).

### Le dialogue
- Une phrase de présentation, puis **deux-points** et **guillemets ouvrants** : Awa demanda : « Où vas-tu ?
- Un **tiret** et un retour à la ligne à chaque **changement de personnage** : — Au marché, répondit Moussa.
- Le **guillemet fermant** ( » ) se met une seule fois, à la fin de la **dernière** réplique.
- Varie les **verbes de parole** : demanda, répondit, s'écria, murmura, expliqua.

## 4. Avant de rendre ta copie : la liste à cocher
- J'ai respecté la **consigne** : le bon destinataire, le bon sujet, le bon type de texte, la longueur demandée.
- Mon texte a un **début**, un **milieu** et une **fin**, en **paragraphes**.
- Chaque phrase commence par une **majuscule** et finit par un **point**.
- J'ai vérifié les **accords** : sujet et verbe, nom et adjectif, participe passé avec être.
- Mes **temps** ne changent pas sans raison.
- J'ai vérifié les **homophones** (a / à, et / est, son / sont, on / ont).
- Lettre : lieu et date, formule d'appel, formule finale, signature ; je n'ai pas mélangé tu et vous.
- Mon écriture est **lisible**, sans ratures.

Pour la correction, on regarde en général : le respect de la consigne, l'ordre des idées, la correction de la langue et la présentation (critères habituels ; le barème exact peut changer).

> **À retenir**
> Questions : phrase complète + preuve du texte entre guillemets.
> Rédaction : lis la consigne (qui, à qui, pourquoi), fais un plan, écris un brouillon, relis avec la liste.
`,
      exercices: [
        { type: "qcm", question: "La question est : « Où Modou est-il allé pêcher ? » Quelle réponse est la mieux rédigée ?", choix: ["À Kayar.", "Modou est allé pêcher en mer, au large de Kayar.", "Kayar", "il est allé"], reponse: 1, explication: "On répond par une **phrase complète** qui reprend les mots de la question, avec une majuscule et un point." },
        { type: "vf", question: "Quand une question demande de **relever** un passage, on recopie les mots du texte entre guillemets.", reponse: true, explication: "Vrai : *relever* veut dire recopier exactement les mots du texte, entre **guillemets**." },
        { type: "qcm", question: "Un texte explique comment préparer le thiéboudiène, étape par étape. C'est un texte :", choix: ["narratif", "poétique", "descriptif", "injonctif"], reponse: 3, explication: "Il dit **ce qu'il faut faire** (comme une recette) : c'est un texte **injonctif**, souvent avec des verbes à l'impératif ou à l'infinitif." },
        { type: "saisie", question: "Dans une lettre, comment s'appelle la partie « Cher oncle, » écrite à gauche au début ? (deux ou trois mots)", reponses: ["la formule d'appel", "formule d'appel"], explication: "C'est la **formule d'appel**, suivie d'une virgule. À la fin, on écrit la **formule finale** puis la signature." },
        { type: "qcm", question: "Où écrit-on le lieu et la date dans une lettre personnelle ?", choix: ["en haut, à droite", "en bas, à gauche", "juste avant la signature", "on ne les écrit pas"], reponse: 0, explication: "Le lieu et la date se placent **en haut, à droite** : « Kaolack, le 12 mars 2027 »." },
        { type: "qcm", question: "Dans un récit, quelle partie suit directement la situation initiale ?", choix: ["le dénouement", "la situation finale", "l'élément déclencheur", "la morale"], reponse: 2, explication: "Ordre du récit : situation initiale → **élément déclencheur** → péripéties → dénouement → situation finale." },
        { type: "vf", question: "Dans un dialogue, on met un tiret à chaque fois qu'un nouveau personnage prend la parole.", reponse: true, explication: "Vrai : un **tiret** et un retour à la ligne marquent chaque **changement de personnage**." },
        { type: "qcm", question: "Ta consigne : « Décris ton marché un jour d'affluence. » Quel conseil est **faux** ?", choix: ["Suivre un ordre, par exemple de l'entrée vers le fond.", "Utiliser plusieurs sens : les bruits, les odeurs, les couleurs.", "Employer surtout des mots familiers pour faire vivant.", "Utiliser des adjectifs et des mots de lieu."], reponse: 2, explication: "À l'examen, on écrit en langage **courant** ou **soutenu**, jamais familier. Les trois autres conseils sont justes." },
        { type: "saisie", question: "Dans la situation d'intégration, on te donne un **contexte** et une... ? (un mot)", reponses: ["consigne", "une consigne"], explication: "Contexte = ce qui se passe ; **consigne** = ce que tu dois écrire. Lis la consigne deux fois." },
        { type: "redaction", question: "**Situation d'intégration (type CFEE)**\n**Contexte** : Tu as écrit cette lettre très vite : « dakar le 3 mai 2027 / cher Pape / je vais bien. Les vacance arrive et je veux que tu vient chez nous. Venez avec tes frères. a bientôt »\n**Consigne** : Avec la liste à cocher de la fiche, trouve au moins cinq erreurs, puis récris la lettre correctement.", corrige: `**Erreurs repérées**
- Majuscules oubliées : *Dakar*, *Cher*, *À bientôt*.
- Virgules oubliées : après *Dakar* et après *Cher Pape*.
- Accords : « Les **vacances arrivent** » (nom toujours au pluriel, verbe au pluriel).
- Conjugaison : « que tu vient » est faux ; le plus simple est d'écrire « je t'**invite à venir** » (pour aller plus loin : « je veux que tu **viennes** », au subjonctif).
- Mélange de *tu* et *vous* : « Venez » → « **Viens** avec tes frères ».
- Il manque la formule finale et la signature.

**Lettre corrigée**
~~~
                        Dakar, le 3 mai 2027
Cher Pape,

   Comment vas-tu ? Ici, tout le monde va bien.
   Les vacances arrivent et je t'invite à venir
   chez nous. Viens avec tes frères : nous irons
   ensemble à la plage.

   À bientôt, je t'embrasse.
                        Ton ami,
                        Ousmane
~~~` },
        { type: "redaction", question: "**Situation d'intégration complète (type CFEE)**\n**Contexte** : Pendant les vacances, ta tante Ndèye t'a accueilli(e) deux semaines chez elle, à Saint-Louis. Elle t'a fait visiter la ville et, à ton départ, elle t'a offert un livre de contes.\n**Consigne** : Écris-lui une lettre complète d'une quinzaine de lignes pour la remercier : lieu et date, formule d'appel, trois ou quatre paragraphes, formule finale et signature. Relis-toi avec la liste à cocher.", corrige: `**Lettre modèle**
~~~
                   Kolda, le 20 octobre 2026
Chère tante Ndèye,

   Comment vas-tu ? J'espère que tonton Abdou
   et mes cousins sont en bonne santé. Ici,
   tout le monde va bien et te salue.

   Je t'écris pour te remercier des deux belles
   semaines passées chez toi. Je n'oublierai pas
   le pont Faidherbe, les pirogues de Guet Ndar
   et nos promenades au bord du fleuve.

   Merci aussi pour le livre de contes : je le
   lis chaque soir à mon petit frère, qui
   l'adore.

   Je te promets de bien travailler pour
   réussir le CFEE. Salue toute la famille
   pour moi. Je t'embrasse très fort.

                   Ton neveu qui t'aime,
                   Ibrahima
~~~

**Ce qui est vérifié**
- **pertinence** : la lettre remercie pour le séjour **et** pour le livre ;
- **cohérence** : salutations et nouvelles → remerciements → détails → conclusion ;
- **langue** : accords (*les deux belles semaines passées*), *tu* d'un bout à l'autre ;
- **présentation** : lieu et date, formule d'appel avec virgule, paragraphes, formule finale, signature.
Si tu vouvoies ta tante, garde le *vous* partout : « Comment allez-vous ? ... Je vous embrasse. »` },
      ],
    },
    {
      id: "comprendre-descriptif",
      titre: "Lire et comprendre un texte descriptif",
      theme: "Lecture et compréhension",
      cours: `
## Qu'est-ce qu'un texte descriptif ?
Un texte **descriptif** montre à quoi ressemble un **lieu**, une **personne**, un **animal** ou un **objet**. Il ne raconte pas une histoire : il fait **voir**, **entendre**, **sentir** au lecteur, comme une photo avec des mots.

## Ce qu'il faut repérer
| Je cherche... | Les indices dans le texte | Exemple |
|---|---|---|
| **ce qui est décrit** | le titre, la première phrase | « le louma de Keur Ndiaye » |
| **l'ordre de la description** | les mots de lieu, qui disent **où** se trouve chaque chose | de loin, à l'entrée, au milieu, plus loin, à gauche, à droite |
| **les cinq sens** | ce qu'on voit, entend, sent, touche, goûte | une poussière rouge (vue), un bourdonnement (ouïe) |
| **les mots précis** | les adjectifs, les compléments du nom | des tissus **multicolores**, des tas **de tomates** |
| **les comparaisons** | le mot **comme** | un bruit **comme** celui d'une ruche |
| **l'impression** | les mots qui disent ce qu'on ressent | calme, joyeux, bruyant, triste |

Le texte descriptif est souvent au **présent** (ce qui existe maintenant) ou à l'**imparfait** (dans un récit au passé).

>! **Exemple résolu**
>! Phrase : « Au milieu de la cour, un vieux manguier étend ses branches **comme** un grand parapluie vert. »
>! - Où ? **au milieu de la cour** (mot de lieu).
>! - Quels mots précis ? *vieux* (adjectif), *ses branches*.
>! - Une comparaison : le manguier est comparé à **un grand parapluie vert** : il fait beaucoup d'ombre.

## Bien répondre
- Pour **relever** un mot, recopie-le exactement, entre guillemets.
- Pour une question sur un **sens**, demande-toi : est-ce que je le vois, l'entends, le sens, le touche, le goûte ?
- Réponds par une **phrase complète**.

## Erreurs fréquentes
- Confondre un mot de **lieu** (au fond, à gauche) et un mot de **temps** (ensuite, le soir).
- Croire que *comme* est toujours une comparaison : dans « Comme il pleut, je reste », *comme* veut dire *parce que*.

> **À retenir**
> Un texte descriptif fait voir un lieu, une personne ou un objet.
> Je repère : l'ordre (mots de lieu), les cinq sens, les adjectifs, les comparaisons avec « comme ».
`,
      textes: {
        louma: `**Le louma de Keur Ndiaye** (texte d'entraînement)

Chaque mercredi, le petit village de Keur Ndiaye se réveille plus tôt que d'habitude : c'est le jour du louma, le marché de la semaine. Dès l'aube, les charrettes arrivent de tous les villages voisins.

De loin, on aperçoit d'abord un nuage de poussière rouge au-dessus des toits. En s'approchant, on entend un bourdonnement qui grandit, comme celui d'une ruche géante. À l'entrée du marché, les marchands de bétail surveillent leurs moutons et leurs chèvres, attachés à des piquets.

Au milieu de la place, sous de vieux tamariniers, les vendeuses ont étalé leurs marchandises sur des nattes : des tas de tomates bien rouges, des oignons, des piments, des sacs de mil et d'arachide. Plus loin, à gauche, les tissus multicolores flottent au vent comme des drapeaux. À droite, l'odeur du poisson séché se mêle à celle des beignets qui cuisent dans l'huile chaude.

Vers midi, le soleil brûle les épaules. Les clients discutent les prix en riant, les enfants courent entre les étals. Le soir, quand les charrettes repartent, la place redevient calme et silencieuse, jusqu'au mercredi suivant.`,
      },
      exercices: [
        { type: "qcm", texte: "louma", question: "Quel est le type de ce texte ?", choix: ["un conte", "une recette", "un texte descriptif", "une lettre"], reponse: 2, explication: "Il **montre** un lieu (le marché) avec des mots de lieu, des couleurs, des bruits, des odeurs. Il n'y a pas de personnage principal qui vit une aventure : c'est un texte **descriptif**." },
        { type: "saisie", texte: "louma", question: "Quel jour de la semaine a lieu le louma de Keur Ndiaye ?", reponses: ["mercredi", "le mercredi", "chaque mercredi", "Le louma a lieu le mercredi.", "Il a lieu le mercredi.", "Le louma a lieu chaque mercredi.", "Il a lieu chaque mercredi."], explication: "La première phrase le dit : « **Chaque mercredi**, le petit village de Keur Ndiaye se réveille plus tôt que d'habitude : c'est le jour du louma »." },
        { type: "qcm", texte: "louma", question: "D'après le texte, qu'est-ce qu'un **louma** ?", choix: ["le marché de la semaine", "une fête religieuse", "un village voisin", "une sorte de charrette"], reponse: 0, explication: "Le texte l'explique juste après le mot : « le louma, **le marché de la semaine** ». Quand un mot est difficile, la suite de la phrase donne souvent son sens." },
        { type: "qcm", texte: "louma", question: "Dans quel ordre le marché est-il décrit dans les paragraphes 2 et 3 ?", choix: ["de bas en haut, des nattes jusqu'au sommet des arbres", "de l'intérieur d'une boutique vers la rue du village", "dans le désordre, sans aucun mot pour dire où", "de loin, puis de plus en plus près, en entrant dans le marché"], reponse: 3, explication: "Les mots de lieu donnent l'ordre : « **De loin** », « **À l'entrée** du marché », « **Au milieu** de la place », « Plus loin, **à gauche** », « **À droite** ». Le lecteur avance dans le marché comme un visiteur." },
        { type: "vf", texte: "louma", question: "Dans le texte, le bruit du marché est comparé à celui d'une ruche.", reponse: true, explication: "C'est vrai : « un bourdonnement qui grandit, **comme** celui d'une ruche géante ». Le mot *comme* annonce une **comparaison** : des milliers de voix font un bruit semblable à celui des abeilles." },
        { type: "saisie", texte: "louma", question: "Relève le groupe de mots de lieu qui commence le 3e paragraphe.", reponses: ["Au milieu de la place", "au milieu", "C'est au milieu de la place."], explication: "Le 3e paragraphe commence par « **Au milieu de la place** » : ce mot de lieu situe les vendeuses et leurs nattes." },
        { type: "qcm", texte: "louma", question: "« Vers midi, le soleil **brûle les épaules**. » Quel sens est sollicité ici ?", choix: ["l'ouïe", "le toucher", "l'odorat", "le goût"], reponse: 1, explication: "La chaleur du soleil se **sent sur la peau** : c'est le **toucher**. Dans le même texte, la poussière rouge parle à la vue, le bourdonnement à l'ouïe, l'odeur du poisson séché à l'odorat." },
        { type: "saisie", texte: "louma", question: "Trouve dans le texte l'adjectif qui veut dire « de plusieurs couleurs ».", reponses: ["multicolores", "multicolore"], explication: "« les tissus **multicolores** » : *multi-* veut dire « plusieurs ». Cet adjectif s'accorde avec *tissus* (masculin pluriel)." },
        { type: "qcm", texte: "louma", question: "À la fin du texte, comment est la place ?", choix: ["bruyante et pleine de clients jusqu'à la nuit", "couverte de poussière rouge et de charrettes", "fermée pour toujours, sans aucun marchand", "calme et silencieuse, jusqu'au mercredi suivant"], reponse: 3, explication: "« Le soir, quand les charrettes repartent, la place redevient **calme et silencieuse**, jusqu'au mercredi suivant. » La fin s'oppose au bruit de midi : le marché revient chaque semaine." },
        { type: "redaction", texte: "louma", question: "1) Relève dans le 3e paragraphe **deux mots de lieu** et **une comparaison**.\n2) Décris en 4 ou 5 lignes un autre coin de ce marché (par exemple le coin des marchands de bétail). Utilise au moins un mot de lieu, deux sens différents et une comparaison avec « comme ».", corrige: `**1) Corrigé**
- Mots de lieu : « Au milieu de la place », « sous de vieux tamariniers », « Plus loin, à gauche », « À droite » (deux suffisent).
- Comparaison : « les tissus multicolores flottent au vent **comme des drapeaux** ».

**2) Exemple de description**
À l'entrée du marché, les moutons bêlent sans arrêt, comme un chœur qui ne sait pas chanter. Leur laine blanche est couverte de poussière rouge. Près des piquets, une forte odeur de foin et d'animal monte du sol. Les vendeurs, assis sur de petits bancs, surveillent leurs bêtes d'un œil attentif.

**Ce qui est vérifié** : un mot de lieu (*À l'entrée du marché*, *Près des piquets*) ; deux sens au moins (l'ouïe : bêlent ; la vue : blanche, rouge ; l'odorat : odeur de foin) ; une comparaison avec *comme* ; des phrases au présent, comme le texte.` },
      ],
    },
    {
      id: "comprendre-lettre",
      titre: "Lire et comprendre une lettre",
      theme: "Lecture et compréhension",
      cours: `
## Lire une lettre : les questions à se poser
Une **lettre** est un texte écrit à une **personne absente**. Au CFEE, on peut te donner une lettre à lire, puis te demander d'y répondre. Avant les questions, repère :

| Question | Où chercher ? |
|---|---|
| **Qui écrit ?** (l'expéditeur) | la **signature**, en bas |
| **À qui ?** (le destinataire) | la **formule d'appel** : « Chère Aïssatou, » |
| **D'où et quand ?** | le **lieu et la date**, en haut à droite |
| **Pourquoi ?** (la raison de la lettre) | souvent le 1er ou le 2e paragraphe |
| **Tu ou vous ?** | les verbes et les pronoms : *vas-tu*, *je t'embrasse* → tutoiement |
| **Que ressent celui qui écrit ?** | les mots de sentiment : *me manquent*, *je suis désolée*, *j'aurais aimé* |

>! **Exemple résolu**
>! « Kaffrine, le 3 mai 2027. Cher Pape, ... Je t'écris pour t'inviter à mon baptême ... Ton cousin, Lamine. »
>! - Qui écrit ? **Lamine** (la signature). À qui ? **Pape** (la formule d'appel).
>! - D'où ? de **Kaffrine**. Pourquoi ? pour **inviter** Pape (« Je t'écris pour... »).

## Les mots de liaison qui aident à comprendre
- **mais, pourtant** : une opposition (« sévère **mais** juste ») ;
- **car, parce que** : une cause ;
- **donc, alors** : une conséquence.

## Erreurs fréquentes
- Confondre celui qui **écrit** et celui qui **reçoit** la lettre.
- Confondre le lieu où l'on **écrit** et le lieu dont on **parle**.

> **À retenir**
> Signature = qui écrit ; formule d'appel = à qui ; en haut à droite = d'où et quand.
> Je cherche la raison de la lettre et les sentiments de celui qui écrit.
`,
      textes: {
        coumba: `**Une lettre de Kédougou** (texte d'entraînement)

Kédougou, le 2 novembre 2026

Chère Aïssatou,

Comment vas-tu ? Et ta famille ? Ici, nous allons tous bien. Merci pour ta longue lettre sur la journée de reboisement : comme j'aurais aimé planter des arbres avec vous ! Je suis désolée de ne pas t'avoir répondu plus tôt : depuis notre arrivée, je n'ai pas eu une minute à moi.

Kédougou ne ressemble pas du tout à Fatick ! Ici, il y a des collines couvertes de forêts, et le fleuve Gambie coule entre les rochers. Le matin, il fait frais, et j'entends les singes crier dans les arbres derrière l'école.

Ma nouvelle école est grande. Ma maîtresse, Mme Kéita, est sévère mais juste. J'ai déjà une amie, Mariama, qui m'apprend quelques mots de sa langue, le pular. Pourtant, tu me manques beaucoup, et nos jeux sous le neem aussi.

Dimanche, papa nous a emmenés voir la cascade de Dindéfélo : l'eau tombe de très haut, dans un bruit de tonnerre. Et toi, as-tu bien arrosé ton petit manguier ?

Écris-moi vite. Je t'embrasse très fort.

Ton amie,
Coumba`,
      },
      exercices: [
        { type: "saisie", texte: "coumba", question: "Qui a écrit cette lettre ?", reponses: ["Coumba", "C'est Coumba.", "Coumba a écrit cette lettre.", "Coumba a écrit la lettre.", "Cette lettre a été écrite par Coumba.", "La lettre a été écrite par Coumba."], explication: "Celui qui écrit signe **en bas** de la lettre : « Ton amie, **Coumba** »." },
        { type: "qcm", texte: "coumba", question: "À qui la lettre est-elle adressée ?", choix: ["à Mme Kéita", "à Mariama", "à Aïssatou", "au papa de Coumba"], reponse: 2, explication: "La **formule d'appel** donne le destinataire : « Chère **Aïssatou**, ». Mme Kéita et Mariama sont des personnes dont Coumba parle." },
        { type: "saisie", texte: "coumba", question: "Dans quelle ville Coumba écrit-elle sa lettre ?", reponses: ["Kédougou", "à Kédougou", "de Kédougou", "Elle écrit à Kédougou.", "Elle écrit sa lettre à Kédougou.", "Coumba écrit sa lettre à Kédougou.", "Elle écrit de Kédougou."], explication: "Le lieu est écrit en haut, à droite, avant la date : « **Kédougou**, le 2 novembre 2026 ». Fatick est la ville où Coumba habitait avant." },
        { type: "qcm", texte: "coumba", question: "Pourquoi Coumba écrit-elle cette lettre ?", choix: ["pour inviter Aïssatou à une fête de baptême", "pour répondre à Aïssatou et lui donner de ses nouvelles", "pour demander à son amie de lui envoyer des livres", "pour se plaindre de sa nouvelle maîtresse, Mme Kéita"], reponse: 1, explication: "Elle la remercie pour sa lettre (« Merci pour ta longue lettre ») et raconte sa nouvelle vie : la ville, l'école, sa nouvelle amie, la cascade. C'est une **lettre de réponse et de nouvelles**." },
        { type: "vf", texte: "coumba", question: "Coumba n'a encore aucune amie dans sa nouvelle école.", reponse: false, explication: "C'est faux : « J'ai **déjà une amie**, Mariama, qui m'apprend quelques mots de sa langue, le pular. »" },
        { type: "qcm", texte: "coumba", question: "« Ma maîtresse est sévère **mais** juste. » Le mot « mais » exprime :", choix: ["une cause", "un lieu", "un moment", "une opposition"], reponse: 3, explication: "*Mais* oppose deux idées : la maîtresse est **sévère** (exigeante), **pourtant** elle est **juste** (elle traite tout le monde de la même façon)." },
        { type: "qcm", texte: "coumba", question: "Que ressent Coumba quand elle pense à Fatick ?", choix: ["de la colère, car son amie ne lui écrit jamais", "de la tristesse, car son amie et leurs jeux lui manquent", "de la peur, car elle n'y connaissait personne", "rien du tout, car elle a déjà tout oublié"], reponse: 1, explication: "« Pourtant, **tu me manques beaucoup**, et nos jeux sous le neem aussi. » Même si elle se plaît à Kédougou, Coumba regrette son amie." },
        { type: "saisie", texte: "coumba", question: "Recopie la formule d'appel de cette lettre.", reponses: ["Chère Aïssatou,", "Chère Aïssatou"], explication: "La formule d'appel est « **Chère Aïssatou,** », suivie d'une virgule. *Chère* prend un **e** car Aïssatou est une fille." },
        { type: "vf", texte: "coumba", question: "Dans cette lettre, Coumba vouvoie son amie.", reponse: false, explication: "C'est faux : elle la **tutoie** du début à la fin : « Comment **vas-tu** ? », « **tu** me manques », « Je **t'**embrasse ». Entre amies, on se tutoie." },
        { type: "redaction", texte: "coumba", question: "Réponds par des phrases complètes.\n1) Cite deux choses que Coumba découvre à Kédougou.\n2) Quelle question Coumba pose-t-elle à Aïssatou à la fin de la lettre ? Pourquoi pose-t-elle cette question ?\n3) Ton avis : Coumba est-elle heureuse à Kédougou ? Justifie avec le texte.", corrige: `**Exemple de réponses**
1) À Kédougou, Coumba découvre des **collines couvertes de forêts** et le **fleuve Gambie** qui coule entre les rochers. Elle entend aussi les **singes** crier derrière l'école (et elle a vu la **cascade de Dindéfélo**).
2) Elle demande : « **As-tu bien arrosé ton petit manguier ?** » Elle pose cette question parce qu'Aïssatou a planté un manguier pendant la journée de reboisement et qu'elle l'a raconté dans sa lettre.
3) Je pense que Coumba est plutôt heureuse à Kédougou, car elle décrit avec plaisir les collines et la cascade, et elle a déjà une nouvelle amie, Mariama. Mais elle est aussi un peu triste, car elle écrit à son amie : « tu me manques beaucoup ».

**Ce qui est vérifié** : des phrases complètes qui reprennent les mots de la question ; des réponses tirées du texte ; pour l'avis, une raison avec *car* et une preuve entre guillemets.` },
      ],
    },
    {
      id: "comprendre-poeme",
      titre: "Lire et comprendre un poème",
      theme: "Lecture et compréhension",
      cours: `
## Qu'est-ce qu'un poème ?
Un **poème** est un texte qui **joue avec les mots, les sons et les images**. Il se reconnaît d'abord à sa forme :
| Mot | Ce que c'est |
|---|---|
| **vers** | une ligne du poème (elle commence souvent par une majuscule) |
| **strophe** | un groupe de vers, séparé des autres par une ligne blanche (comme un paragraphe) |
| **rime** | le même son à la fin de deux vers : *noirs* / *soir* ; *toits* / *bois* |

Au Sénégal, **Léopold Sédar Senghor**, premier président de la République, était aussi un grand poète. Beaucoup de poèmes parlent de la nature, des saisons, de la famille, du pays.

## Les images du poème
- La **comparaison** rapproche deux choses avec un mot comme **comme** : « Les nuages roulent **comme** des tambours. »
- Le poète peut aussi faire agir une chose **comme une personne** : « La pluie **chante** sur les toits. » (la pluie ne chante pas vraiment : on entend son bruit, joyeux comme un chant)
- La **répétition** d'un mot ou d'un son donne du rythme.

## Lire un poème : la méthode
1. Lis-le **à voix haute**, lentement, en respectant la ponctuation.
2. Cherche le **thème** : de quoi parle le poème ? (le titre aide souvent)
3. Repère la **forme** : combien de strophes, de vers, quelles rimes ?
4. Cherche les **images** (comparaisons) et les **sentiments** du poète (joie, tristesse, admiration...).

>! **Exemple résolu**
>! « Le soleil, comme une orange mûre, / Se couche derrière la dune. »
>! - 2 vers. Comparaison : le soleil est comparé à **une orange mûre** (même couleur, même forme ronde).
>! - Sentiment : l'admiration devant un beau coucher de soleil.

## Erreurs fréquentes
- Compter les **phrases** au lieu des **vers** : un vers = une ligne, même si la phrase continue.
- Croire qu'un poème doit toujours rimer : certains poèmes n'ont pas de rimes.

> **À retenir**
> Vers = ligne ; strophe = groupe de vers ; rime = même son à la fin des vers.
> Je cherche le thème, la forme, les images (comme...) et les sentiments.
`,
      textes: {
        pluie: `**Le retour de la pluie** (poème d'entraînement)

Là-haut, de gros nuages noirs
Roulent comme des tambours, le soir.
Le vent souffle sur la savane
Et fait danser l'herbe et les lianes.

Soudain, la pluie frappe les toits,
Elle chante sur la tôle et le bois.
Les enfants courent sous l'averse,
Et les calebasses se renversent.

Demain, mon père ira aux champs
Semer le mil en chantant.
Ô pluie, sois la bienvenue :
Avec toi, la vie est revenue !`,
      },
      exercices: [
        { type: "qcm", texte: "pluie", question: "Combien de **strophes** ce poème contient-il ?", choix: ["deux", "douze", "trois", "quatre"], reponse: 2, explication: "Les groupes de vers sont séparés par une ligne blanche : il y a **trois strophes**. *Douze*, c'est le nombre de **vers** (3 strophes de 4 vers)." },
        { type: "saisie", texte: "pluie", question: "Combien de **vers** y a-t-il dans chaque strophe ? (écris un nombre)", reponses: ["4", "quatre", "Il y a quatre vers.", "Il y a 4 vers.", "Chaque strophe a quatre vers.", "Chaque strophe a 4 vers."], explication: "Chaque strophe a **4 vers** (4 lignes). Un poème de 4 vers par strophe est très courant." },
        { type: "saisie", texte: "pluie", question: "Quel mot rime avec « noirs » dans la première strophe ?", reponses: ["soir", "le soir", "Le mot soir."], explication: "*Noirs* et **soir** se terminent par le même son [oir] : ils **riment**. De même : *savane* / *lianes*." },
        { type: "qcm", texte: "pluie", question: "Quel est le **thème** de ce poème ?", choix: ["la pêche en mer avec les pirogues", "la vie en ville pendant la saison sèche", "la fête de la Tabaski en famille", "l'arrivée de la pluie, au début de l'hivernage"], reponse: 3, explication: "Le titre (« Le retour de la pluie ») et les mots *nuages, pluie, averse, semer le mil* montrent que le poème parle de l'**arrivée de la pluie**, quand l'hivernage commence." },
        { type: "qcm", texte: "pluie", question: "« Là-haut, de gros nuages noirs / Roulent **comme des tambours**, le soir. » À quoi les nuages sont-ils comparés ?", choix: ["à des tambours", "à des chevaux", "à des enfants", "à des calebasses"], reponse: 0, explication: "Le mot **comme** annonce une **comparaison** : le bruit des nuages d'orage (le tonnerre) ressemble au roulement des **tambours**." },
        { type: "vf", texte: "pluie", question: "Dans la 2e strophe, la pluie est présentée comme une personne qui chante.", reponse: true, explication: "C'est vrai : « Elle **chante** sur la tôle et le bois ». La pluie ne chante pas vraiment, mais le poète la fait agir comme une personne : le bruit des gouttes devient un chant joyeux." },
        { type: "qcm", texte: "pluie", question: "Quel vers rime avec « Elle chante sur la tôle et le bois » ?", choix: ["Les enfants courent sous l'averse,", "Soudain, la pluie frappe les toits,", "Semer le mil en chantant.", "Le vent souffle sur la savane"], reponse: 1, explication: "*Bois* et **toits** finissent par le même son [oi] : ils riment. Dans ce poème, les vers riment **deux par deux** (le 1er avec le 2e, le 3e avec le 4e)." },
        { type: "saisie", texte: "pluie", question: "« Ô pluie, **sois** la bienvenue » : à quel mode est le verbe « sois » ?", reponses: ["impératif", "à l'impératif", "l'impératif", "Il est à l'impératif.", "Le verbe est à l'impératif."], explication: "*Sois* est le verbe **être** à l'**impératif** (sois, soyons, soyez). Le poète **parle à la pluie** comme à une invitée qu'on accueille." },
        { type: "qcm", texte: "pluie", question: "Quel sentiment la dernière strophe exprime-t-elle ?", choix: ["la peur de l'orage", "la tristesse", "la joie et l'espoir", "la colère"], reponse: 2, explication: "Le père ira semer « **en chantant** » et le poète dit « sois **la bienvenue** », « **la vie est revenue** » : la pluie apporte la **joie** et l'**espoir** d'une bonne récolte." },
        { type: "redaction", texte: "pluie", question: "1) Relève **trois mots** du champ lexical de la pluie ou de l'orage.\n2) Explique avec tes mots pourquoi le poète écrit : « Avec toi, la vie est revenue ! »\n3) Écris une 4e strophe de **4 vers** sur l'hivernage (essaie de faire rimer les vers deux par deux).", corrige: `**Exemple de réponses**
1) Champ lexical de la pluie : **nuages**, **pluie**, **averse** (on peut aussi citer *tambours*, qui fait penser au tonnerre).
2) Le poète écrit cela parce que, sans pluie, la terre est sèche : rien ne pousse et les animaux ont soif. Quand la pluie revient, les paysans peuvent **semer** le mil, l'herbe repousse et tout le village est joyeux. La pluie rend la **vie** à la nature et aux hommes.
3) Exemple de strophe :
~~~
Les mares brillent sous la lune,
Les grenouilles chantent une à une.
La brousse a quitté son habit gris
Pour une robe verte, toute fleurie.
~~~
(Une strophe plus simple convient aussi : « Les mares sont pleines d'eau, / Le mil devient grand et beau, / Les enfants rient sur le chemin, / Il y aura du mil demain. »)

**Ce qui est vérifié** : des mots tirés du poème ; une explication avec tes mots et une raison (*parce que*) ; une strophe de 4 vers sur le thème, avec des rimes si possible.` },
      ],
    },
    {
      id: "comprendre-recit-long",
      titre: "Lire un récit plus long : suivre l'histoire et les personnages",
      theme: "Lecture et compréhension",
      cours: `
## Un texte plus long : ne pas se perdre
Au CFEE, le texte peut faire une page entière. Pour ne pas te perdre :
1. Lis le **titre**, puis tout le texte une première fois.
2. Après chaque **paragraphe**, dis-toi en une phrase ce qui s'est passé.
3. Note les **personnages** au brouillon : qui est qui ? (Ndiaga = le héros ; Mbaye = le réparateur...)
4. Lis les questions, puis **relis** la partie utile.

## Qui désigne qui ? (les reprises)
Pour ne pas répéter le même nom, l'auteur le remplace par :
- un **pronom** : *Ndiaga* → **il** ; *Ndiaga et Mbaye* → **ils** ;
- un autre **groupe nominal** : *Mbaye* → **le vieil homme**, **le réparateur** ; *le vélo* → **ce tas de ferraille**.
Quand une question demande « Qui désigne le mot *il* ? », cherche le **nom** juste avant, qui va avec le sens de la phrase.

## Les questions de réflexion (déduction)
La réponse n'est pas toujours écrite. Il faut la **déduire** d'indices :
- « Ses mains étaient noires, **mais il souriait**. » → Ndiaga est **heureux** de travailler, même si c'est salissant.
- Pour les **qualités** d'un personnage, cherche ce qu'il **fait** : il travaille pendant les vacances → il est **courageux**, **persévérant** (il continue sans abandonner).

## L'ordre des événements
Les mots de temps aident : *un jour, pendant les vacances, à la rentrée, désormais, quelques mois plus tard*. Le texte peut aussi expliquer **pourquoi** une chose arrive (*car, parce que, donc, en échange*).

>! **Exemple résolu**
>! Le boutiquier éclata de rire et dit : « Prends-le si tu veux, mais il ne roulera jamais ! »
>! Question : Que pense le boutiquier du vélo ? → **Il pense que le vélo est trop abîmé pour rouler de nouveau.** (Indice : il *éclate de rire* et dit *il ne roulera jamais*.)

> **À retenir**
> Un paragraphe = une étape de l'histoire ; je résume chaque paragraphe en une phrase.
> Un pronom ou un autre nom peut remplacer un personnage : je cherche qui il désigne.
> Pour une question de réflexion, je m'appuie sur un indice du texte.
`,
      textes: {
        ndiaga: `**Le vélo de Ndiaga** (texte d'entraînement)

Ndiaga habitait à Diourbel avec sa mère et ses deux petites sœurs. Son père travaillait à Dakar et ne rentrait qu'aux fêtes. Chaque matin, Ndiaga marchait cinq kilomètres pour aller à l'école. Il partait avant le lever du soleil et arrivait souvent fatigué.

Un jour, devant la boutique de Serigne, il vit un vieux vélo rouillé, sans chaîne, avec un pneu crevé.
« Il est à vendre ? » demanda-t-il.
Le boutiquier éclata de rire :
« Ce tas de ferraille ? Prends-le si tu veux, mais il ne roulera jamais ! »

Ndiaga le ramena à la maison. Pendant les vacances, il travailla chez Mbaye, le réparateur du quartier. Il balayait l'atelier, rangeait les outils et, en échange, le vieil homme lui apprenait à réparer. Ensemble, ils changèrent la chaîne, collèrent des rustines sur la chambre à air et graissèrent les roues. Ndiaga passa des heures à frotter la rouille, puis il peignit le vélo en bleu. Ses mains étaient noires de cambouis, mais il souriait.

À la rentrée, un vélo bleu, brillant comme un neuf, s'arrêta devant l'école. Les élèves l'entourèrent.
« C'est le tas de ferraille de Serigne ? » s'étonna son camarade Pape.
Ndiaga hocha la tête, fier.

Désormais, il arrivait à l'heure et reposé. Le soir, il emmenait même ses petites sœurs à la fontaine, sur son porte-bagages. Quelques mois plus tard, Serigne lui-même vint frapper à sa porte : son propre vélo était en panne. Ndiaga le répara en une heure et refusa d'être payé.
« Mbaye m'a appris sans me faire payer, expliqua-t-il. Je fais pareil. »

*Mots difficiles* : une **rustine** est une petite pièce de caoutchouc que l'on colle sur une chambre à air percée ; le **porte-bagages** est le support placé au-dessus de la roue arrière du vélo, pour porter un sac ou un passager.`,
      },
      exercices: [
        { type: "qcm", texte: "ndiaga", question: "Où habite Ndiaga ?", choix: ["à Dakar", "à Touba", "à Kaolack", "à Diourbel"], reponse: 3, explication: "La première phrase le dit : « Ndiaga habitait à **Diourbel** ». C'est son **père** qui travaille à Dakar." },
        { type: "qcm", texte: "ndiaga", question: "Au début de l'histoire, pourquoi Ndiaga arrive-t-il souvent fatigué à l'école ?", choix: ["Il joue trop tard le soir.", "Il marche cinq kilomètres chaque matin.", "Il travaille à la boutique de Serigne.", "Il est malade."], reponse: 1, explication: "« Chaque matin, Ndiaga **marchait cinq kilomètres** pour aller à l'école. Il partait avant le lever du soleil et arrivait souvent fatigué. » C'est le problème du début de l'histoire." },
        { type: "vf", texte: "ndiaga", question: "Le boutiquier pense que le vieux vélo pourra rouler de nouveau.", reponse: false, explication: "C'est faux : il **éclate de rire**, l'appelle « ce **tas de ferraille** » et dit : « il ne roulera **jamais** ! »" },
        { type: "saisie", texte: "ndiaga", question: "Qui apprend à Ndiaga à réparer le vélo ?", reponses: ["Mbaye", "Mbaye, le réparateur du quartier", "le réparateur", "le réparateur du quartier", "C'est Mbaye.", "C'est Mbaye, le réparateur du quartier.", "Mbaye lui apprend à réparer le vélo."], explication: "C'est **Mbaye, le réparateur du quartier** : « le vieil homme lui apprenait à réparer ». *Le vieil homme* est une **reprise** de *Mbaye*." },
        { type: "qcm", texte: "ndiaga", question: "Remets les événements dans l'ordre : (A) Ndiaga répare le vélo de Serigne. (B) Ndiaga trouve un vieux vélo devant la boutique. (C) Ndiaga arrive à l'école sur un vélo bleu. (D) Ndiaga travaille chez Mbaye pendant les vacances.", choix: ["B, C, D, A", "D, B, C, A", "B, D, C, A", "B, D, A, C"], reponse: 2, explication: "Les mots de temps donnent l'ordre : « **Un jour** » (il trouve le vélo), « **Pendant les vacances** » (il travaille chez Mbaye), « **À la rentrée** » (le vélo bleu), « **Quelques mois plus tard** » (il répare le vélo de Serigne)." },
        { type: "saisie", texte: "ndiaga", question: "« Ensemble, **ils** changèrent la chaîne. » Qui le pronom « ils » désigne-t-il ? (écris les deux noms)", reponses: ["Ndiaga et Mbaye", "Mbaye et Ndiaga", "Ndiaga et le réparateur", "le réparateur et Ndiaga", "Ndiaga et le vieil homme", "C'est Ndiaga et Mbaye.", "Ce sont Ndiaga et Mbaye."], explication: "*Ils* reprend les deux personnages qui travaillent **ensemble** dans l'atelier : **Ndiaga et Mbaye** (le vieil homme)." },
        { type: "qcm", texte: "ndiaga", question: "« Ses mains étaient noires de **cambouis**. » D'après le texte, le cambouis est sans doute :", choix: ["de la graisse noire et sale", "de la peinture bleue", "de la boue du chemin", "du charbon de bois"], reponse: 0, explication: "Ndiaga vient de **graisser** les roues et de réparer la chaîne : le **cambouis** est la graisse noire et sale qui reste sur les pièces d'un vélo ou d'un moteur. Le contexte aide à trouver le sens." },
        { type: "qcm", texte: "ndiaga", question: "« Ses mains étaient noires de cambouis, **mais il souriait**. » Que montre cette phrase ?", choix: ["Ndiaga n'aime pas réparer et voudrait arrêter.", "Ndiaga a peur que Mbaye le gronde.", "Ndiaga est heureux de travailler, même si c'est salissant.", "Ndiaga veut vite aller se laver les mains."], reponse: 2, explication: "Le mot **mais** oppose deux idées : le travail est sale, **pourtant** Ndiaga sourit. On en déduit qu'il est **heureux** et fier de ce qu'il fait." },
        { type: "qcm", texte: "ndiaga", question: "Quelle leçon peut-on tirer de cette histoire ?", choix: ["Il ne faut jamais garder de vieux objets cassés à la maison.", "Le travail et la patience mènent à la réussite ; on peut transmettre ce qu'on a reçu.", "Les boutiquiers se moquent toujours des enfants qui n'ont pas d'argent.", "Il vaut mieux habiter tout près de l'école pour ne pas être fatigué."], reponse: 1, explication: "Ndiaga réussit grâce à son **travail** et à sa **patience** (des heures à frotter la rouille). À la fin, il aide Serigne **gratuitement**, comme Mbaye l'a aidé : il **transmet** ce qu'il a reçu." },
        { type: "redaction", texte: "ndiaga", question: "Réponds par des phrases complètes.\n1) Pourquoi Ndiaga refuse-t-il d'être payé par Serigne ?\n2) Donne **deux qualités** de Ndiaga, avec une preuve du texte pour chacune.\n3) Ton avis : aurais-tu fait comme lui à la fin ? Pourquoi ?", corrige: `**Exemple de réponses**
1) Ndiaga refuse d'être payé parce que Mbaye lui a appris à réparer **sans lui faire payer** (Ndiaga avait seulement aidé à l'atelier) : il veut faire pareil et rendre service à son tour (« Je fais pareil »).
2) Ndiaga est **courageux et persévérant** : il marche cinq kilomètres chaque matin et passe « des heures à frotter la rouille ». Il est aussi **généreux** : il emmène ses sœurs à la fontaine et répare le vélo de Serigne gratuitement, alors que celui-ci s'était moqué de lui.
3) Oui, j'aurais fait comme lui, car Serigne lui avait donné le vélo, et rendre service rend les gens plus solidaires. (On peut répondre non : « J'aurais demandé un petit prix, car le travail mérite d'être payé. » L'important est de donner une raison.)

**Ce qui est vérifié** : des phrases complètes ; des preuves tirées du texte (entre guillemets ou avec tes mots) ; un avis avec *car* ou *parce que*.` },
      ],
    },
    {
      id: "ponctuation",
      titre: "La ponctuation : la virgule, le point-virgule et les autres signes",
      theme: "Grammaire",
      cours: `
## À quoi sert la ponctuation ?
La ponctuation aide le lecteur à **comprendre** et à **respirer**. Une phrase mal ponctuée peut changer de sens : « Awa, mange ! » (on parle à Awa) n'est pas « Awa mange. » (on dit ce qu'elle fait).

## Les signes qui terminent la phrase
| Signe | Sert à... | Exemple |
|---|---|---|
| **point** ( . ) | terminer une phrase déclarative ou impérative | Le car part à midi. |
| **point d'interrogation** ( ? ) | poser une question | Où vas-tu ? |
| **point d'exclamation** ( ! ) | montrer un sentiment, un ordre fort | Quelle chaleur ! |
| **points de suspension** ( ... ) | laisser la phrase inachevée | Soudain, un bruit... |

Après ces signes, la phrase suivante commence par une **majuscule**.

## La virgule ( , ) : une petite pause
On met une virgule :
1. entre les éléments d'une **énumération** : « J'ai acheté des tomates**,** des oignons et du piment. » (pas de virgule devant le dernier *et*) ;
2. après un **complément placé en tête** de phrase (souvent) : « Pendant l'hivernage**,** les paysans sèment le mil. » ;
3. pour **appeler quelqu'un** : « Awa**,** viens manger ! » ;
4. entre deux **propositions juxtaposées** ou devant *mais*, *car*, *donc* : « Il pleut**,** nous restons à la maison. » ;
5. autour de l'**incise** du dialogue : « Je suis prêt**,** dit Modou**,** on peut partir. »

>! **La règle d'or**
>! On ne met **jamais** de virgule entre le **sujet** et son **verbe** : « Les enfants du village jouent. » (et non « Les enfants du village, jouent. »)

## Le point-virgule ( ; ) : une pause moyenne
Il sépare deux **propositions** qui ont un lien de sens, sans finir la phrase. Il est plus fort que la virgule, moins fort que le point. **Pas de majuscule** après un point-virgule.
« Le soleil se couche **;** les pêcheurs rentrent au port. »

## Les deux-points ( : )
Ils annoncent :
- une **explication** : « Modou ne sort pas : il est malade. »
- une **énumération** : « Il faut trois ingrédients : du riz, du poisson et des légumes. »
- des **paroles** : Awa demanda : « Tu viens ? »

## Les guillemets et le tiret
Les **guillemets** ( « » ) encadrent les paroles d'un dialogue ; le **tiret** ( — ) marque un changement de personnage (voir le chapitre « Écrire un dialogue »).

> **À retenir**
> Point, ?, !, ... → majuscule ensuite.
> Virgule : énumération, complément en tête, appel, propositions juxtaposées, incise. Jamais entre le sujet et le verbe.
> Point-virgule : deux propositions liées, sans majuscule après. Deux-points : explication, énumération, paroles.
`,
      exercices: [
        { type: "qcm", question: "Quelle phrase est bien ponctuée ?", choix: ["Au marché j'ai acheté, des tomates des oignons, et du piment.", "Au marché, j'ai, acheté des tomates des oignons et du piment.", "Au marché, j'ai acheté des tomates, des oignons et du piment.", "Au, marché j'ai acheté des tomates des oignons et, du piment."], reponse: 2, explication: "Une virgule après le complément en tête (*Au marché*), une virgule entre les éléments de l'énumération, et **pas de virgule devant le dernier *et***." },
        { type: "vf", question: "On écrit correctement : « Les enfants du village, jouent sous le baobab. »", reponse: false, explication: "C'est faux : on ne met **jamais** de virgule entre le sujet (*Les enfants du village*) et son verbe (*jouent*)." },
        { type: "qcm", question: "À quoi sert le **point-virgule** ?", choix: ["à poser une question à quelqu'un", "à séparer deux propositions liées par le sens", "à annoncer les paroles d'un personnage", "à appeler la personne à qui l'on parle"], reponse: 1, explication: "Le point-virgule sépare deux **propositions** qui vont ensemble : « Le soleil se couche ; les pêcheurs rentrent. » C'est une pause plus forte que la virgule, moins forte que le point." },
        { type: "vf", question: "Après un point-virgule, on met une majuscule.", reponse: false, explication: "C'est faux : la phrase **continue** après un point-virgule, donc pas de majuscule (sauf pour un nom propre) : « Il pleut ; nous restons à la maison. »" },
        { type: "qcm", question: "Quelle phrase est bien ponctuée ?", choix: ["Awa viens, manger !", "Awa, viens manger !", "Awa viens manger, !", "Awa ! viens, manger"], reponse: 1, explication: "On **appelle** Awa : son nom est séparé du reste par une virgule : « **Awa,** viens manger ! » Sans virgule, on ne comprend pas qu'on lui parle." },
        { type: "qcm", question: "Où faut-il mettre la virgule ? « Pendant l'hivernage les paysans sèment le mil. »", choix: ["après « l'hivernage »", "après « paysans »", "après « sèment »", "il n'en faut aucune, jamais"], reponse: 0, explication: "Le complément de temps *Pendant l'hivernage* est placé **en tête** : on le sépare du reste par une virgule : « Pendant l'hivernage**,** les paysans sèment le mil. » Après *paysans*, la virgule séparerait le sujet de son verbe." },
        { type: "saisie", question: "Combien de virgules faut-il dans cette phrase ? « Moussa Awa Fatou et Pape sont mes amis. » (écris un nombre)", reponses: ["2", "deux", "Il en faut deux.", "Il faut deux virgules."], explication: "« Moussa**,** Awa**,** Fatou et Pape sont mes amis. » : une virgule entre chaque prénom de l'énumération, mais **pas devant *et*** : **2 virgules**." },
        { type: "qcm", question: "Quel signe convient ? « Modou ne vient pas à l'école ___ il est malade. »", choix: ["des guillemets", "un point d'interrogation", "un tiret", "les deux-points"], reponse: 3, explication: "La deuxième partie **explique** la première (pourquoi Modou ne vient pas) : on met les **deux-points** : « Modou ne vient pas à l'école : il est malade. » (Un point-virgule ou *car* seraient aussi possibles, mais ils ne sont pas proposés.)" },
        { type: "qcm", question: "« Le soleil se couche ___ les pêcheurs rentrent au port. » Quel signe peut-on mettre sans changer les mots ?", choix: ["un point-virgule", "un point d'interrogation", "des guillemets", "un tiret de dialogue"], reponse: 0, explication: "Deux propositions liées par le sens : le **point-virgule** convient (« Le soleil se couche ; les pêcheurs rentrent au port. »). Une virgule ou un point seraient aussi possibles." },
        { type: "redaction", question: "Recopie ce texte en ajoutant la **ponctuation** et les **majuscules** qui manquent (il y a plusieurs bonnes solutions) :\n« ce matin-là modou se leva tôt il prit son seau sa corde et sa calebasse puis il partit au puits sur le chemin il rencontra son ami pape il allait lui aussi chercher de l'eau »", corrige: `**Corrigé (une solution possible)**
Ce matin-là, Modou se leva tôt. Il prit son seau, sa corde et sa calebasse, puis il partit au puits. Sur le chemin, il rencontra son ami Pape : il allait lui aussi chercher de l'eau.

**Explications**
- Majuscules : au début de chaque phrase et aux noms propres (*Modou*, *Pape*).
- Virgules : après les compléments en tête (*Ce matin-là*, *Sur le chemin*) ; dans l'énumération *son seau, sa corde et sa calebasse* (pas devant *et*) ; devant *puis*.
- Deux-points : la fin explique la rencontre (on peut aussi mettre un point : « ... son ami Pape. Il allait lui aussi... »).
- On pouvait mettre un point-virgule à la place du premier point : « Ce matin-là, Modou se leva tôt ; il prit son seau... »` },
      ],
    },
    {
      id: "epreuve-blanche-cfee",
      titre: "Entraînement au CFEE : épreuve blanche de Langue et communication",
      theme: "Préparer le CFEE",
      cours: `
## Comment se passe l'épreuve ?
D'après le guide du CFEE de 2018 (**le barème peut changer** : la réforme de 2026, décret du 21 mai 2026, a modifié le CFEE), l'épreuve de Langue et communication a **deux parties** :
| Partie | Ce qu'on te demande | Points (guide de 2018) |
|---|---|---|
| **Ressources** (connaissances) | des questions de **compréhension** sur un texte et des exercices de **connaissances de la langue** (grammaire, conjugaison, orthographe, vocabulaire) | 40 points : compréhension 10, langue 30 |
| **Compétence** | une **production d'écrits** à partir d'une situation (contexte + consigne), par exemple une lettre | 60 points |

## Comment utiliser cette épreuve blanche
- Fais-la **en une seule fois**, comme le jour de l'examen, **sans regarder les cours**.
- Les exercices 1 à 4 portent sur le **texte** ; les exercices 5 à 9 sur la **langue** ; le 10 est la **production d'écrits**.
- Compte tes points avec le barème ci-dessous (c'est un **barème indicatif** proposé par Révisio, pour t'entraîner).

| Exercices | Partie | Barème indicatif |
|---|---|---|
| 1 à 4 | compréhension du texte | 2,5 points chacun → 10 |
| 5 à 9 | connaissances de la langue | 6 points chacun → 30 |
| 10 | production d'écrits | 60 points |

## Les conseils du jour de l'examen
1. **Lis le texte deux fois** avant les questions.
2. Réponds par des **phrases complètes**, avec une majuscule et un point.
3. Pour la rédaction : souligne dans la consigne **qui écrit, à qui, pourquoi** ; fais un **brouillon** ; recopie proprement.
4. Garde du temps pour **relire** (accords, homophones, ponctuation).

> **À retenir**
> Ressources : compréhension + connaissances de la langue. Compétence : production d'écrits.
> La production d'écrits compte le plus de points : ne la bâcle pas.
`,
      textes: {
        biblio: `**La bibliothèque de l'école** (texte d'entraînement)

À l'école de Ndoffane, il n'y avait pas de bibliothèque. Les élèves n'avaient que leurs manuels, souvent déchirés, qu'ils se prêtaient à tour de rôle.

Un matin, le directeur, M. Sarr, réunit les élèves du CM2 sous le préau.
« Et si nous créions nous-mêmes une bibliothèque ? » proposa-t-il.
Les enfants applaudirent. Chacun apporta ce qu'il pouvait : un livre de contes, un vieux dictionnaire, des magazines. Les parents d'élèves fabriquèrent des étagères en bois, et un ancien élève, devenu instituteur à Kaolack, envoya un carton de romans.

Bientôt, la petite salle du fond se remplit de livres. Rokhaya, la meilleure lectrice de la classe, fut chargée de noter les prêts dans un grand cahier. Chaque vendredi, les petits du CP venaient écouter les grands lire des histoires à voix haute.

À la fin de l'année, lors de la fête de l'école, M. Sarr déclara :
« Un livre ouvert, c'est une fenêtre sur le monde. »
Depuis ce jour, chaque nouvel élève offre un livre en arrivant à l'école.`,
      },
      exercices: [
        { type: "qcm", texte: "biblio", question: "**Compréhension (2,5 points)** — Quel problème y avait-il au début à l'école de Ndoffane ?", choix: ["Il n'y avait pas de maître.", "Il n'y avait pas de bibliothèque.", "L'école était trop loin du village.", "Les élèves ne savaient pas lire."], reponse: 1, explication: "La première phrase le dit : « À l'école de Ndoffane, il n'y avait **pas de bibliothèque**. » Les élèves n'avaient que leurs manuels." },
        { type: "saisie", texte: "biblio", question: "**Compréhension (2,5 points)** — Qui a eu l'idée de créer la bibliothèque ?", reponses: ["M. Sarr", "Monsieur Sarr", "le directeur", "le directeur, M. Sarr", "le directeur M. Sarr", "C'est le directeur.", "C'est M. Sarr.", "C'est le directeur, M. Sarr.", "Le directeur a eu l'idée.", "C'est le directeur qui a eu l'idée."], explication: "C'est **le directeur, M. Sarr** : « Et si nous créions nous-mêmes une bibliothèque ? » **proposa-t-il**." },
        { type: "vf", texte: "biblio", question: "**Compréhension (2,5 points)** — Les parents d'élèves ont acheté les étagères au marché.", reponse: false, explication: "C'est faux : « Les parents d'élèves **fabriquèrent** des étagères en bois. » Ils les ont faites eux-mêmes." },
        { type: "qcm", texte: "biblio", question: "**Compréhension (2,5 points)** — Que veut dire M. Sarr par « Un livre ouvert, c'est une fenêtre sur le monde » ?", choix: ["Il faut lire près d'une fenêtre.", "Il faut ouvrir les fenêtres de la classe.", "Lire permet de découvrir le monde et d'apprendre.", "Les livres coûtent très cher."], reponse: 2, explication: "C'est une **image** (un sens figuré) : par une fenêtre, on voit dehors ; dans un livre, on **découvre** d'autres pays, d'autres gens, d'autres idées." },
        { type: "saisie", texte: "biblio", question: "**Langue — grammaire (6 points)** — Dans « Les parents d'élèves fabriquèrent des étagères en bois », écris le **COD** en entier.", reponses: ["des étagères en bois", "des étagères"], explication: "Ils fabriquèrent **quoi ?** → **des étagères en bois** (COD). *En bois* est un complément du nom *étagères* : il fait partie du COD. « des étagères » (le nom noyau et son déterminant) est accepté aussi, mais le COD **en entier**, c'est « des étagères en bois »." },
        { type: "saisie", texte: "biblio", question: "**Langue — conjugaison (6 points)** — Écris cette phrase au **futur simple** : « Chacun apporte un livre. »", reponses: ["Chacun apportera un livre."], explication: "*Apporter* (1er groupe) au futur : infinitif + **-a** → chacun **apportera**. *Chacun* se conjugue comme *il*." },
        { type: "saisie", texte: "biblio", question: "**Langue — orthographe (6 points)** — Écris au pluriel : « un vieux dictionnaire ».", reponses: ["des vieux dictionnaires", "de vieux dictionnaires", "les vieux dictionnaires", "Des vieux dictionnaires."], explication: "*Vieux* finit par **x** : il ne change pas au pluriel ; *dictionnaire* prend un **s** : **de vieux dictionnaires** (ou *des vieux dictionnaires*, plus courant)." },
        { type: "qcm", texte: "biblio", question: "**Langue — orthographe (6 points)** — Quelle phrase est bien écrite ?", choix: ["Rokhaya à noté les prêts a la fin du cahier.", "Rokhaya a noté les prêts a la fin du cahier.", "Rokhaya à noté les prêts à la fin du cahier.", "Rokhaya a noté les prêts à la fin du cahier."], reponse: 3, explication: "« Rokhaya **avait** noté » → **a** (verbe avoir) ; « avait la fin du cahier » ne veut rien dire → **à** (préposition, avec un accent)." },
        { type: "qcm", texte: "biblio", question: "**Langue — vocabulaire (6 points)** — Quel mot appartient à la même famille que « lecture » ?", choix: ["lettre", "électrique", "lectrice", "lente"], reponse: 2, explication: "**Lectrice** (celle qui lit), *lecture*, *lecteur* viennent de *lire*. Dans le texte : « Rokhaya, la meilleure **lectrice** de la classe ». *Lettre*, *électrique* et *lente* ont un autre sens." },
        { type: "redaction", question: "**Production d'écrits (60 points)**\n**Contexte** : Ton école, comme celle de Ndoffane, veut créer une bibliothèque, mais elle manque de livres. Ton oncle Moustapha, qui habite à Dakar, travaille dans une librairie.\n**Consigne** : Écris-lui une lettre d'une quinzaine de lignes pour lui présenter le projet et lui demander de vous aider. N'oublie aucune partie de la lettre.", corrige: `**Lettre modèle**
*Corrigé modèle, plus long que ce qu'on attend de toi : le jour de l'examen, la longueur demandée dans la consigne suffit.*
~~~
                   Sokone, le 15 janvier 2027
Cher oncle Moustapha,

   Comment vas-tu ? J'espère que tante Awa et
   mes cousins vont bien. Ici, tout le monde est
   en bonne santé et te salue.

   Je t'écris pour te parler d'un projet de mon
   école. Notre maître veut créer une
   bibliothèque, mais nous n'avons presque pas
   de livres. Chaque élève a apporté ce qu'il
   avait, et les parents vont fabriquer les
   étagères.

   Comme tu travailles dans une librairie,
   pourrais-tu nous envoyer quelques livres de
   contes ou des dictionnaires, même anciens ?
   Nous en prendrons grand soin.

   Je te remercie d'avance. Salue toute la
   famille pour moi.

                   Ton neveu qui t'aime,
                   Alioune
~~~

**Grille de correction indicative (60 points)**
| Critère | Ce qu'on regarde | Points |
|---|---|---|
| **pertinence** | la lettre présente le projet **et** demande de l'aide à l'oncle | 20 |
| **cohérence** | salutations → projet → demande → remerciements, en paragraphes | 15 |
| **correction de la langue** | accords, conjugaison, homophones, ponctuation | 15 |
| **présentation** | lieu et date, formule d'appel, formule finale, signature, écriture lisible | 10 |
Cette grille est proposée par Révisio pour t'entraîner : le barème officiel peut être différent.` },
      ],
    },
  ],
};
