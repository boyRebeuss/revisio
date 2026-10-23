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
        { type: "saisie", texte: "modou", question: "Comment s'appelle le père de Modou ?", reponses: ["Pape Ndiaye", "Pape"], explication: "Le père s'appelle **Pape Ndiaye** : « Son père, Pape Ndiaye, part chaque matin en mer ». Un prénom et un nom propre prennent une majuscule." },
        { type: "saisie", texte: "modou", question: "Trouve dans le texte le mot qui désigne le bateau des pêcheurs.", reponses: ["pirogue"], explication: "C'est la **pirogue** : un long bateau en bois, souvent peint de couleurs vives, utilisé par les pêcheurs du Sénégal." },
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
Le baobab pousse dans les savanes d'Afrique. Au Sénégal, on le voit presque partout, surtout dans les régions de Thiès, de Kaolack et de Fatick. Il figure sur les armoiries du Sénégal, à côté du lion.

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
        { type: "saisie", texte: "baobab", question: "Comment appelle-t-on le fruit du baobab ?", reponses: ["pain de singe", "le pain de singe"], explication: "Dans la partie « Un arbre utile » : « Le fruit s'appelle le **pain de singe**. » L'intertitre t'aide à trouver vite la bonne partie." },
        { type: "vf", texte: "baobab", question: "Le baobab garde ses feuilles toute l'année.", reponse: false, explication: "C'est faux : « Pendant cette saison, le baobab **perd ses feuilles**. » Il s'agit de la saison sèche." },
        { type: "qcm", texte: "baobab", question: "D'après le texte, qu'est-ce qui aide le baobab à vivre pendant la saison sèche ?", choix: ["Ses grandes feuilles vertes.", "Son tronc qui garde beaucoup d'eau.", "L'eau que les hommes lui donnent.", "Ses fruits très sucrés."], reponse: 1, explication: "Le texte dit : « Ce tronc garde beaucoup d'eau, ce qui aide l'arbre à vivre pendant la saison sèche. »" },
        { type: "saisie", texte: "baobab", question: "Avec quelle partie du baobab prépare-t-on le *lalo* ?", reponses: ["les feuilles", "feuilles", "avec les feuilles", "les feuilles séchées"], explication: "« Les **feuilles**, séchées et réduites en poudre, donnent le *lalo*, que l'on met dans le couscous. »" },
        { type: "qcm", texte: "baobab", question: "Quelle est l'idée principale de la dernière partie, « Un arbre utile » ?", choix: ["Toutes les parties du baobab servent aux hommes.", "Le baobab vit très longtemps.", "Le baobab pousse surtout à Thiès.", "Le jus de bouye est sucré."], reponse: 0, explication: "La première phrase de la partie annonce l'idée : « **Toutes les parties du baobab servent.** » Les phrases suivantes donnent des exemples (feuilles, fruit, écorce)." },
        { type: "qcm", texte: "recette", question: "Le texte « Préparer le jus de bouye » est un texte :", choix: ["narratif, car il raconte une histoire", "poétique, car il joue avec les sons", "injonctif, car il dit ce qu'il faut faire", "documentaire, car il décrit un arbre"], reponse: 2, explication: "C'est une **recette** : les verbes sont à l'impératif (verse, ajoute, passe, mets) et les étapes sont numérotées dans l'ordre. C'est un texte **injonctif**." },
        { type: "vf", texte: "recette", question: "Dans la recette, on ajoute le sucre avant de passer le mélange dans la passoire.", reponse: false, explication: "C'est faux. L'ordre est : 1. verser la poudre, 2. ajouter l'eau, 3. passer dans la passoire, 4. **ensuite** ajouter le sucre. Dans un texte injonctif, l'ordre des étapes est très important." },
        { type: "saisie", texte: "recette", question: "Dans la phrase « Verse la poudre dans un grand bol », à quel mode est le verbe « verse » ?", reponses: ["impératif", "à l'impératif", "l'impératif"], explication: "« Verse » est à l'**impératif** : il donne un ordre ou un conseil, et il n'a pas de sujet écrit. C'est typique d'un texte injonctif." },
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
Au Sénégal, les contes se racontent souvent **le soir**, en famille ou au clair de lune. Le conteur parle, le public répond, rit, chante. Les contes mettent souvent en scène des **animaux qui parlent** : **Leuk-le-Lièvre**, rusé et malin, et **Bouki l'Hyène**, gourmande, paresseuse et souvent naïve. Le roi de la brousse est **Gaïndé le Lion**.

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
- le **passé simple** pour les actions qui se suivent : « Leuk **eut** une idée. Il **prépara** une statue. »

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
        { type: "saisie", texte: "puits", question: "Quel animal est le roi qui réunit tous les animaux ?", reponses: ["le lion", "lion", "Gaïndé", "Gaïndé le Lion"], explication: "C'est **Gaïndé le Lion**. Dans les contes du Sénégal, le lion (*gaïndé* en wolof) est le roi de la brousse." },
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
On peut **enrichir** le nom avec des **expansions**. Elles donnent des précisions.
| Expansion | Exemple | Comment la reconnaître |
|---|---|---|
| **adjectif qualificatif épithète** | une case **ronde** ; un **grand** baobab | adjectif placé juste avant ou après le nom |
| **complément du nom** | le marché **de Kaolack** ; un sac **en plastique** | introduit par une préposition (de, en, à...) |
| **proposition relative** | le garçon **qui court** ; le livre **que je lis** ; le village **où je suis né** | commence par **qui, que, où** (pronoms relatifs) |

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
        { type: "saisie", question: "Quel est le **nom noyau** du groupe nominal « le grand marché de Kaolack » ?", reponses: ["marché"], explication: "Le mot principal est **marché** : *le* est son déterminant, *grand* un adjectif épithète, *de Kaolack* un complément du nom." },
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
1. Mon père **ira** acheter le mouton au foirail.
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
- Des **contraires** (antonymes) ont un sens **opposé** : chaud / froid ; arriver / partir ; propre / sale.

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
Au CFEE, la partie « compétence » de Langue et communication est une **production d'écrits**. On te donne une **situation** :
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
L'an dernier, j'ai passé la Tabaski chez mes grands-parents, à Mbacké. Il faisait chaud et la maison était pleine de cousins venus de Dakar et de Kaolack.

Le matin, nous avons mis nos habits neufs. Mon grand-boubou blanc brillait au soleil et j'étais très fier. Après la prière, mon grand-père a sacrifié le mouton dans la cour. Ensuite, les femmes ont préparé la viande avec des oignons et de la moutarde. L'odeur des grillades remplissait toute la maison.

Mais soudain, le petit mouton de mon cousin Cheikh s'est échappé ! Il courait dans la rue et tous les enfants le poursuivaient en riant. Finalement, c'est moi qui l'ai attrapé, près de la boutique du quartier. Tout le monde m'a applaudi.

Le soir, nous sommes allés saluer les voisins et demander pardon, comme le veut la tradition. Je me suis couché fatigué mais heureux. Cette Tabaski restera longtemps dans ma mémoire.

**Ce qui est vérifié**
- introduction (où, quand, qui), développement avec un événement (*soudain*), conclusion avec un sentiment ;
- imparfait pour le décor (*faisait, brillait, courait*) et passé composé pour les actions (*avons mis, a sacrifié, ai attrapé*) ;
- mots de liaison variés ; paragraphes ; orthographe et ponctuation.` },
        { type: "redaction", question: "**Inventer la suite d'une histoire**\n« Ce soir-là, Ndèye rentrait seule du puits avec son seau sur la tête. Le soleil se couchait. Tout à coup, elle entendit un bruit dans les buissons... »\nÉcris la suite (10 à 12 lignes) au **passé simple** et à l'**imparfait**, avec une fin heureuse.", corrige: `**Exemple de suite**
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
Utilise des **mots de lieu** (organisateurs spatiaux) : *au loin, au fond, devant, derrière, à gauche, à droite, au milieu, au-dessus, en dessous, à côté de, près de, tout autour*.

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
        { type: "saisie", question: "Trouve un adjectif plus précis que « grand » pour décrire un baobab très, très gros.", reponses: ["immense", "énorme", "gigantesque", "géant", "colossal"], explication: "Des adjectifs plus forts que *grand* : **immense, énorme, gigantesque, géant**. Ils rendent la description plus vivante." },
        { type: "qcm", question: "« Ma tante est patiente : ... » Quel exemple prouve le mieux cette qualité ?", choix: ["elle porte un beau boubou vert.", "elle est grande et mince.", "elle habite à Rufisque.", "elle m'explique mes leçons plusieurs fois sans jamais se fâcher."], reponse: 3, explication: "Être **patient**, c'est savoir attendre et répéter sans s'énerver. L'exemple montre la qualité en action. Les autres phrases parlent du physique ou du lieu." },
        { type: "saisie", question: "Dans une description d'une cour, complète avec un mot de lieu qui veut dire « tout au bout, le plus loin » : « Au ___ de la cour, on aperçoit la case de mon grand-père. »", reponses: ["fond"], explication: "« **Au fond** de la cour » : le point le plus éloigné, tout au bout." },
        { type: "redaction", question: "**Situation d'intégration (type CFEE)**\n**Contexte** : Un correspondant étranger veut savoir à quoi ressemble ton village ou ton quartier pendant l'hivernage.\n**Consigne** : Décris-le en une douzaine de lignes, au présent. Utilise des mots de lieu et au moins trois sens.", corrige: `**Exemple de description**
Mon village, Keur Massamba, se trouve à quelques kilomètres de Kaffrine. Pendant l'hivernage, il change complètement.

Au loin, les champs de mil et d'arachide forment un grand tapis vert qui s'étend jusqu'à l'horizon. Plus près, les mares sont pleines d'eau et les grenouilles y chantent toute la nuit. Au milieu du village se dresse un vieux baobab couvert de feuilles. Sous son ombre, les anciens discutent assis sur des nattes.

À droite de la place, les cases et les maisons en ciment ont des toits mouillés qui brillent après l'averse. Dans les ruelles, le sol est rouge et collant : la boue colle aux sandales des enfants. Une bonne odeur de terre mouillée monte du sol, mêlée à la fumée des cuisines.

Le soir, le ciel se couvre de gros nuages noirs et le tonnerre gronde. J'aime mon village en hivernage, car tout y est vivant et vert.

**Ce qui est vérifié**
- un ordre clair (du plus loin au plus près, puis le soir) et des mots de lieu (*au loin, plus près, au milieu, à droite, dans les ruelles*) ;
- trois sens au moins : la vue (vert, rouge), l'ouïe (grenouilles, tonnerre), l'odorat (terre mouillée, fumée), le toucher (boue collante) ;
- des verbes précis (*s'étend, se dresse, gronde*) ; le présent ; une phrase finale avec un sentiment.` },
        { type: "redaction", question: "**Portrait**\nFais le portrait d'une personne de ta famille que tu aimes beaucoup (grand-mère, grand-père, oncle, grande sœur...). Écris une douzaine de lignes : portrait physique, portrait moral avec un exemple, et ce que tu ressens.", corrige: `**Exemple de portrait**
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
        { type: "saisie", question: "Complète avec un verbe de parole qui veut dire « parler tout bas » : « Ne fais pas de bruit, le bébé dort, ___ maman. » (au passé simple)", reponses: ["murmura", "chuchota"], explication: "Pour parler tout bas : **murmura** ou **chuchota** (passé simple, 3e personne : -a). Le sujet *maman* est inversé : c'est une incise." },
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
| **juxtaposées** | une virgule, un point-virgule ou deux-points | Il pleut, nous restons à la maison. |
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
  ],
};
