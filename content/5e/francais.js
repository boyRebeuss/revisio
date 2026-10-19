export default {
  chapitres: [
    {
      id: "voyage-aventure",
      titre: "Le voyage et l'aventure : pourquoi aller vers l'inconnu ?",
      theme: "Se chercher, se construire",
      cours: `
## Ce que dit le programme
Le questionnement « Se chercher, se construire » invite à lire des **récits de voyage** et des **récits d'aventure**. La question centrale est : *pourquoi partir vers l'inconnu ?* Le voyage transforme celui qui part : il découvre d'autres peuples, d'autres paysages, et surtout il se découvre lui-même.

## Deux genres à distinguer
| Genre | Définition | Exemples repères |
|---|---|---|
| **Récit de voyage** | Récit d'un voyage **réellement vécu**, raconté par le voyageur (souvent à la 1re personne) ; il décrit, informe, témoigne | Marco Polo, *Le Devisement du monde* (1298) ; Jacques Cartier, *Voyages au Canada* (XVIe s.) ; Bougainville, *Voyage autour du monde* (1771) |
| **Roman d'aventure** | Récit **fictif** plein d'action, de dangers, de rebondissements, autour d'un héros qui affronte l'inconnu | Homère, *L'Odyssée* (VIIIe s. av. J.-C.) ; Defoe, *Robinson Crusoé* (1719) ; Stevenson, *L'Île au trésor* (1883) ; Jules Verne, *Le Tour du monde en quatre-vingts jours* (1872) |

>! **Exemple** : dans *L'Odyssée*, Ulysse met dix ans à rentrer chez lui à Ithaque après la guerre de Troie. Il affronte le Cyclope Polyphème, la magicienne Circé, les Sirènes... Chaque épreuve révèle sa qualité principale : la **ruse** (la « mètis »).

## Les ingrédients du récit d'aventure
- un **héros** souvent jeune ou curieux, qui quitte un monde familier ;
- un **départ** (naufrage, carte au trésor, pari, exil...) ;
- des **épreuves** et des **obstacles** : tempêtes, pirates, animaux sauvages, pays inconnus ;
- des **adjuvants** (ceux qui aident) et des **opposants** (ceux qui gênent) ;
- un **suspense** entretenu par des rebondissements ;
- un **retour** ou une arrivée : le héros a changé, il a grandi.

## Le schéma narratif
1. **Situation initiale** : présentation du héros et de son monde, à l'imparfait le plus souvent.
2. **Élément perturbateur** : un événement déclenche l'aventure (souvent introduit par « soudain », « un jour »).
3. **Péripéties** : les actions et épreuves successives.
4. **Élément de résolution** : ce qui met fin aux épreuves.
5. **Situation finale** : le nouvel équilibre.

## Qui raconte ? Le narrateur
- **Narrateur-personnage** : il raconte à la 1re personne (« je ») ce qu'il a vécu. C'est le cas de Robinson Crusoé ou de Jim Hawkins dans *L'Île au trésor*. On partage ses émotions, mais on ne sait que ce qu'il sait.
- **Narrateur extérieur** : il raconte à la 3e personne (« il », « elle »). Il peut tout savoir des personnages (comme chez Jules Verne).

> **À retenir**
> Le récit de voyage raconte un voyage réel ; le roman d'aventure invente un voyage plein de dangers.
> Le voyage est souvent un **parcours initiatique** : le héros revient grandi.
> Pense au schéma narratif et au narrateur pour analyser n'importe quel récit.

## Le vocabulaire du voyage
| Mot | Sens |
|---|---|
| explorateur | personne qui découvre des terres inconnues |
| périple | long voyage avec de nombreuses étapes |
| odyssée | (par antonomase, d'après Ulysse) long voyage plein d'aventures |
| exotisme | goût pour ce qui vient de pays lointains |
| escale | arrêt d'un navire dans un port |
| naufrage | perte d'un navire en mer |

## Pourquoi voyager ? Les motivations
- **découvrir** et connaître (Marco Polo, les explorateurs) ;
- **s'enrichir** ou commercer (marchands, chercheurs de trésor) ;
- **fuir** ou être contraint (exil, naufrage) ;
- **se prouver** quelque chose, relever un défi (Phileas Fogg et son pari) ;
- **rencontrer l'autre** : le voyage fait découvrir que d'autres façons de vivre existent ; il invite à juger sa propre société avec un regard neuf.
`,
      exercices: [
        { type: "qcm", question: "Quel ouvrage est un **récit de voyage réel** ?", choix: ["*L'Île au trésor* de Stevenson", "*Le Devisement du monde* de Marco Polo", "*Le Tour du monde en quatre-vingts jours* de Jules Verne", "*L'Odyssée* d'Homère"], reponse: 1, explication: "Marco Polo raconte (en le dictant à Rustichello de Pise) son véritable voyage en Asie jusqu'à la cour du Grand Khan. Les trois autres œuvres sont des fictions." },
        { type: "vf", question: "Dans *Robinson Crusoé*, le récit est fait par un narrateur-personnage qui dit « je ».", reponse: true, explication: "Robinson raconte lui-même son naufrage et ses années sur l'île : c'est un récit à la 1re personne, présenté comme un témoignage." },
        { type: "saisie", question: "Quelle est la principale qualité d'Ulysse, qui lui permet par exemple d'échapper au Cyclope ? (un mot)", reponses: ["la ruse", "ruse", "l'intelligence", "intelligence", "la mètis", "mètis", "métis", "metis"], explication: "Ulysse est le héros de la **ruse** (la *mètis* en grec) : il se fait appeler « Personne » et aveugle Polyphème, puis s'échappe caché sous un bélier." },
        { type: "qcm", question: "Dans le schéma narratif, l'événement qui déclenche l'aventure s'appelle :", choix: ["la situation initiale", "la péripétie", "l'élément perturbateur", "la situation finale"], reponse: 2, explication: "L'élément perturbateur rompt l'équilibre de départ et lance l'action. Il est souvent introduit par un indice de temps comme « soudain » ou « un jour »." },
        { type: "vf", question: "Un parcours initiatique est un voyage au terme duquel le héros n'a pas du tout changé.", reponse: false, explication: "C'est l'inverse : le parcours initiatique transforme le héros, qui en sort plus mûr, plus savant ou plus sage." },
        { type: "qcm", question: "Pourquoi Phileas Fogg entreprend-il le tour du monde chez Jules Verne ?", choix: ["Pour fuir la police", "Pour retrouver un trésor", "Pour faire du commerce", "Pour gagner un pari"], reponse: 3, explication: "Phileas Fogg parie avec ses collègues du Reform Club qu'il peut faire le tour du monde en 80 jours. Il gagne d'ailleurs son pari grâce au décalage horaire." },
        { type: "saisie", question: "Quel nom commun, tiré du titre de l'épopée d'Homère, désigne un long voyage plein d'aventures ?", reponses: ["odyssée", "odyssee"], explication: "Le mot **odyssée** vient du titre *L'Odyssée* (le poème d'Ulysse, « Odusseus » en grec). Un nom propre devenu nom commun : c'est une antonomase." },
        { type: "redaction", question: "**Sujet de rédaction (type contrôle)** : Tu as embarqué sur un navire qui fait naufrage. Raconte en une vingtaine de lignes ton arrivée sur une île inconnue et ta première découverte. Respecte le schéma narratif, écris à la 1re personne, au passé simple et à l'imparfait, et fais ressentir tes émotions.", corrige: `**Ce qui est attendu**
- un narrateur-personnage (« je ») ;
- le système des temps du passé : **imparfait** pour la description et l'arrière-plan, **passé simple** pour les actions principales ;
- un schéma narratif clair : situation initiale (le voyage calme), élément perturbateur (la tempête), péripéties (le naufrage, la nage, l'arrivée), résolution et situation finale ouverte ;
- du vocabulaire du voyage et de la mer, des émotions (peur, soulagement, curiosité).

**Exemple de début**
Depuis trois semaines, notre navire filait vers les Indes et la mer restait d'un calme parfait. Un soir pourtant, le ciel se couvrit brusquement. Une vague énorme frappa la coque ; j'entendis un craquement terrible et je fus projeté dans l'eau glacée. Je nageai longtemps, agrippé à une planche, jusqu'à ce que mes pieds touchent enfin le sable...

**Exemple de suite**
Quand je repris mes esprits, le soleil brûlait déjà. Devant moi s'étendait une forêt épaisse d'où montaient des cris inconnus. Je me levai, tremblant, et avançai entre les arbres. Soudain, je découvris sur le sol une empreinte de pied humain : je n'étais pas seul...

**Critères de réussite** : cohérence des temps, ponctuation, paragraphes, vocabulaire précis, émotions exprimées, fin qui relance le suspense ou marque une transformation du personnage.` }
      ]
    },
    {
      id: "avec-autrui",
      titre: "Avec autrui : familles, amis, réseaux",
      theme: "Vivre en société, participer à la société",
      cours: `
## Ce que dit le programme
Le questionnement « Vivre en société, participer à la société » propose de réfléchir à nos **relations avec les autres** : la famille, les amis, les réseaux. Les textes montrent des liens d'amour, d'amitié, de solidarité, mais aussi des **conflits** (entre parents et enfants, entre maîtres et valets) et des **tromperies**. On lit surtout des **comédies** (Molière) et des **récits** (fabliaux, nouvelles, romans).

## Molière, le grand auteur comique
Molière (de son vrai nom Jean-Baptiste Poquelin, 1622-1673) est auteur, acteur et chef de troupe sous Louis XIV. Il veut « corriger les mœurs par le rire » : il se moque des défauts humains (avarice, hypocrisie, autorité excessive des pères).

| Pièce | Date | Sujet |
|---|---|---|
| *Le Médecin malgré lui* | 1666 | Sganarelle, un bûcheron, est forcé par la ruse de sa femme de jouer au médecin |
| *L'Avare* | 1668 | Harpagon, obsédé par son argent, veut marier ses enfants contre leur gré |
| *Les Fourberies de Scapin* | 1671 | Le valet Scapin trompe deux pères avares pour aider leurs fils amoureux |
| *Le Bourgeois gentilhomme* | 1670 | M. Jourdain veut à tout prix devenir un noble |

>! **Exemple** : dans *Les Fourberies de Scapin* (acte II, scène 7), Scapin fait croire à Géronte que son fils a été enlevé par des Turcs sur une galère. Le vieil avare répète sans cesse : « Que diable allait-il faire dans cette galère ? » C'est un **comique de répétition** qui révèle son avarice.

## Le vocabulaire du théâtre
| Mot | Sens |
|---|---|
| acte / scène | grandes parties de la pièce / une scène change à chaque entrée ou sortie d'un personnage |
| réplique | ce que dit un personnage quand c'est son tour |
| tirade | longue réplique |
| monologue | un personnage seul en scène parle |
| aparté | réplique dite pour le public, que les autres personnages ne sont pas censés entendre |
| didascalie | indication de l'auteur (en italique) : gestes, ton, décor |
| quiproquo | malentendu : on prend une personne ou une chose pour une autre |

## Les formes du comique
- **comique de mots** : jeux de mots, déformations, jargon (le faux latin de Sganarelle) ;
- **comique de gestes** : coups de bâton, chutes, grimaces ;
- **comique de situation** : quiproquo, personnage caché, trompeur trompé ;
- **comique de caractère** : un défaut exagéré (l'avarice d'Harpagon) ;
- **comique de répétition** : une phrase ou un geste qui revient.

## Les fabliaux du Moyen Âge
Les **fabliaux** (XIIe-XIIIe siècles) sont de petits **récits en vers** (souvent des octosyllabes), écrits pour **faire rire**. Ils mettent en scène des personnages du quotidien : paysans (les « vilains »), marchands, prêtres, épouses rusées. On y trouve souvent le motif du **trompeur trompé**, et une **morale** finale.

>! **Exemple** : dans le fabliau *Le Vilain Mire*, une femme maltraitée par son mari fait croire qu'il est un grand médecin (« mire ») qui ne soigne que si on le bat. Molière reprendra cette idée dans *Le Médecin malgré lui*.

Le *Roman de Renart* (XIIe-XIIIe s.) appartient à la même veine : le goupil Renart ridiculise les autres animaux, notamment le loup Ysengrin. Il est si célèbre que « renard » a remplacé l'ancien mot « goupil ».

> **À retenir**
> La comédie (Molière) et le fabliau (Moyen Âge) font rire des défauts humains pour mieux les dénoncer.
> Connais les cinq formes du comique et le vocabulaire du théâtre (réplique, tirade, aparté, didascalie, quiproquo).
> Les conflits familiaux (pères autoritaires / enfants amoureux) et les rapports maîtres / valets sont des thèmes centraux.

## Réfléchir : amitié, famille, réseaux
Les textes posent des questions toujours actuelles : qu'est-ce qu'un vrai ami ? Faut-il obéir à ses parents ? Comment les réseaux (y compris sociaux) changent-ils nos relations ? Pour y répondre, appuie-toi sur un exemple littéraire et sur ton expérience.
`,
      exercices: [
        { type: "qcm", question: "Comment appelle-t-on une réplique qu'un personnage dit pour le public sans que les autres personnages l'entendent ?", choix: ["Un aparté", "Une tirade", "Une didascalie", "Un monologue"], reponse: 0, explication: "L'aparté crée une complicité avec le spectateur. La tirade est une longue réplique, la didascalie une indication de l'auteur, le monologue la parole d'un personnage seul." },
        { type: "vf", question: "Les fabliaux sont de petits récits en vers du Moyen Âge destinés à faire rire.", reponse: true, explication: "Ce sont des « contes à rire en vers » (XIIe-XIIIe siècles), souvent écrits en octosyllabes, avec une morale finale." },
        { type: "saisie", question: "Quel est le vrai nom de Molière ? (prénom(s) et nom)", reponses: ["Jean-Baptiste Poquelin", "Jean Baptiste Poquelin", "Poquelin"], explication: "Molière est le nom de scène de **Jean-Baptiste Poquelin** (1622-1673)." },
        { type: "qcm", question: "« Que diable allait-il faire dans cette galère ? » répété plusieurs fois par Géronte relève surtout du comique :", choix: ["de gestes", "de répétition", "de situation", "de mots uniquement"], reponse: 1, explication: "La même phrase revient plusieurs fois : c'est un comique de répétition, qui souligne aussi l'avarice du personnage (comique de caractère)." },
        { type: "qcm", question: "Quel personnage de Molière est obsédé par son argent ?", choix: ["Scapin", "Sganarelle", "M. Jourdain", "Harpagon"], reponse: 3, explication: "Harpagon est le héros de *L'Avare* (1668). Scapin est un valet rusé, Sganarelle un bûcheron devenu faux médecin, M. Jourdain un bourgeois qui veut être noble." },
        { type: "vf", question: "Une didascalie est une réplique prononcée par l'acteur sur scène.", reponse: false, explication: "La didascalie est une indication écrite par l'auteur (souvent en italique) : gestes, ton, décor, entrées et sorties. Elle n'est pas prononcée." },
        { type: "saisie", question: "Comment appelle-t-on un malentendu où l'on prend une personne ou une chose pour une autre ?", reponses: ["quiproquo", "un quiproquo"], explication: "Le **quiproquo** (du latin *quid pro quo*, « une chose pour une autre ») est une source majeure de comique de situation." },
        { type: "qcm", question: "Quel fabliau a inspiré *Le Médecin malgré lui* ?", choix: ["*Le Roman de Renart*", "*La Chanson de Roland*", "*Le Vilain Mire*", "*Yvain ou le Chevalier au lion*"], reponse: 2, explication: "Dans *Le Vilain Mire*, une femme fait passer son mari pour un médecin (« mire ») qu'il faut battre pour qu'il soigne. Molière reprend ce motif avec Sganarelle et Martine." },
        { type: "redaction", question: "**Question de réflexion (type contrôle)** : « Un valet peut-il être plus intelligent que son maître ? » Réponds en un paragraphe argumenté d'une quinzaine de lignes, en t'appuyant sur au moins un exemple tiré de Molière.", corrige: `**Méthode** : une phrase qui pose ta position, deux ou trois arguments illustrés d'exemples précis, une phrase de conclusion. Utilise des connecteurs (d'abord, de plus, enfin, ainsi).

**Proposition de corrigé**
Dans les comédies de Molière, le valet est souvent plus intelligent que son maître. **D'abord**, c'est lui qui invente les ruses qui font avancer l'action : dans *Les Fourberies de Scapin*, Scapin trompe Géronte en lui faisant croire que son fils a été enlevé sur une galère turque, et obtient ainsi l'argent dont Léandre a besoin. **De plus**, le valet voit clair dans les défauts des maîtres : il comprend l'avarice ou la vanité des vieillards et sait s'en servir. Les maîtres, eux, sont aveuglés par leur obsession, comme Harpagon dans *L'Avare*. **Enfin**, le rire naît justement de ce renversement : le spectateur s'amuse de voir le plus faible socialement l'emporter par l'esprit. **Toutefois**, cette victoire reste limitée : à la fin de la pièce, le valet retrouve sa place et l'ordre social est rétabli. **Ainsi**, chez Molière, l'intelligence n'est pas liée au rang social, et la comédie le montre en nous faisant rire.` }
      ]
    },
    {
      id: "univers-nouveaux",
      titre: "Imaginer des univers nouveaux",
      theme: "Regarder le monde, inventer des mondes",
      cours: `
## Ce que dit le programme
« Regarder le monde, inventer des mondes » : en 5e, on étudie des textes qui **inventent des mondes imaginaires** — merveilleux, utopiques, de science-fiction. La question : *comment et pourquoi la littérature crée-t-elle des univers qui n'existent pas ?* Ces mondes nous font rêver, mais ils sont aussi un **miroir** de notre propre monde.

## Les grands types de mondes imaginaires
| Type | Définition | Exemples repères |
|---|---|---|
| **Merveilleux** | Le surnaturel est accepté comme normal (fées, magie, animaux qui parlent) | contes de Perrault (1697), *Les Mille et Une Nuits*, Lewis Carroll, *Alice au pays des merveilles* (1865) |
| **Utopie** | Société idéale, imaginaire, souvent sur une île lointaine | Thomas More, *Utopia* (1516) ; l'Eldorado dans *Candide* de Voltaire (1759) |
| **Contre-utopie (dystopie)** | Société imaginaire cauchemardesque, qui sert d'avertissement | George Orwell, *1984* (1949) ; Ray Bradbury, *Fahrenheit 451* (1953) |
| **Science-fiction / anticipation** | Monde futur ou autre planète, fondé sur des progrès scientifiques imaginés | Jules Verne, *Vingt mille lieues sous les mers* (1869-1870), *De la Terre à la Lune* (1865) ; H. G. Wells, *La Machine à explorer le temps* (1895) |
| **Voyage imaginaire** | Le héros découvre des pays inventés | Swift, *Les Voyages de Gulliver* (1726) : Lilliput, pays de minuscules habitants |

>! **Exemple** : le mot **utopie** a été inventé par Thomas More à partir du grec *ou* (« non ») et *topos* (« lieu ») : c'est le « lieu de nulle part ». Aujourd'hui, une utopie désigne aussi un projet idéal mais irréalisable.

## Comment un auteur rend-il crédible un monde imaginaire ?
- la **description** précise des lieux (couleurs, formes, matériaux, dimensions) ;
- l'invention de **mots nouveaux** (néologismes) pour nommer les choses ;
- des **règles** cohérentes (lois, coutumes, technologie) ;
- un **personnage-témoin** qui découvre ce monde et s'étonne, comme le lecteur ;
- des **comparaisons** avec notre monde (« comme », « semblable à »).

## Décrire : les outils
- **organisation dans l'espace** : au premier plan, au loin, à gauche, au-dessus ;
- **les cinq sens** : vue, ouïe, odorat, toucher, goût ;
- **expansions du nom** : adjectifs, compléments du nom, propositions relatives (« une ville *de cristal* *qui brillait sous trois soleils* ») ;
- **temps** : dans un récit au passé, la description est à l'**imparfait**.

## Pourquoi inventer des mondes ?
1. Pour **faire rêver** et dépayser le lecteur.
2. Pour **critiquer** notre monde de manière détournée : Gulliver chez les Lilliputiens découvre des guerres absurdes (faut-il casser les œufs par le petit ou le gros bout ?), qui ridiculisent les conflits européens.
3. Pour **imaginer l'avenir** et réfléchir aux dangers ou aux promesses de la science.
4. Pour proposer un **idéal** (utopie) ou lancer un **avertissement** (dystopie).

> **À retenir**
> Merveilleux, utopie, dystopie, science-fiction : quatre manières d'inventer des mondes.
> Un monde imaginaire est rendu crédible par la description précise et des règles cohérentes.
> Ces mondes sont souvent un miroir critique de notre société.

## Les récits de création
Les mythes racontent aussi la naissance d'un monde : la *Genèse* (Bible) ; les *Métamorphoses* d'Ovide (Ier siècle) qui racontent le passage du chaos au monde ordonné. Ils expliquent l'origine des choses par l'action de dieux.
`,
      exercices: [
        { type: "saisie", question: "Quel mot, inventé par Thomas More en 1516, signifie étymologiquement « lieu de nulle part » ?", reponses: ["utopie", "une utopie", "utopia"], explication: "**Utopie** : du grec *ou* (non) + *topos* (lieu). More décrit une île à la société idéale." },
        { type: "qcm", question: "Dans quel type de récit le surnaturel (fées, magie) est-il accepté comme normal par les personnages ?", choix: ["La science-fiction", "Le récit de voyage", "Le merveilleux", "La dystopie"], reponse: 2, explication: "Dans le merveilleux (contes de fées), personne ne s'étonne que les animaux parlent ou qu'une fée intervienne." },
        { type: "vf", question: "Une dystopie (ou contre-utopie) décrit une société idéale où tout le monde est heureux.", reponse: false, explication: "C'est l'inverse : la dystopie décrit une société cauchemardesque (surveillance, perte de liberté), comme dans *1984* d'Orwell, pour avertir le lecteur." },
        { type: "qcm", question: "Quel roman de Jules Verne fait voyager le lecteur à bord du *Nautilus* ?", choix: ["*Vingt mille lieues sous les mers*", "*Le Tour du monde en quatre-vingts jours*", "*De la Terre à la Lune*", "*Les Voyages de Gulliver*"], reponse: 0, explication: "Le capitaine Nemo commande le sous-marin *Nautilus* dans *Vingt mille lieues sous les mers*. *Les Voyages de Gulliver* sont de Swift." },
        { type: "vf", question: "Dans une description insérée dans un récit au passé, on emploie principalement l'imparfait.", reponse: true, explication: "L'imparfait est le temps de l'arrière-plan et de la description ; le passé simple sert aux actions de premier plan." },
        { type: "qcm", question: "Dans « une cité de verre qui flottait au-dessus des nuages », que sont « de verre » et « qui flottait au-dessus des nuages » ?", choix: ["Deux compléments circonstanciels", "Deux attributs du sujet", "Deux COD", "Deux expansions du nom « cité »"], reponse: 3, explication: "« de verre » est un complément du nom et « qui flottait... » une proposition subordonnée relative : ce sont deux expansions du nom qui enrichissent la description." },
        { type: "saisie", question: "Comment s'appelle le pays aux habitants minuscules découvert par Gulliver ?", reponses: ["Lilliput"], explication: "Gulliver arrive à **Lilliput**, où les habitants mesurent environ six pouces. Swift s'en sert pour se moquer de la politique de son temps." },
        { type: "redaction", question: "**Sujet de rédaction (type contrôle)** : Un voyageur découvre une ville imaginaire. Décris-la en une quinzaine de lignes, à l'imparfait, en organisant ta description dans l'espace et en faisant appel à au moins trois sens. Ta ville doit avoir au moins une règle ou une coutume étrange.", corrige: `**Ce qui est attendu**
- une description à l'**imparfait**, avec un point de vue de voyageur (« je » ou « il ») ;
- des **indicateurs spatiaux** (au loin, au centre, au-dessus, à droite) ;
- au moins **trois sens** (vue, ouïe, odorat, toucher, goût) ;
- des **expansions du nom** variées (adjectifs, compléments du nom, relatives) et au moins une comparaison ;
- une **coutume étrange** qui rend le monde cohérent et, si possible, fait réfléchir sur le nôtre.

**Exemple**
Au loin, au sommet d'une colline violette, s'élevait une ville entièrement faite de verre. Les maisons, transparentes comme des bulles de savon, laissaient voir tout ce que faisaient leurs habitants. Au centre se dressait une tour immense d'où s'échappait une musique douce, semblable au tintement de mille clochettes. Une odeur de miel et de pluie flottait dans les rues. Quand je posai la main sur un mur, il était tiède, presque vivant. Les habitants ne parlaient jamais : ils échangeaient de petites lumières colorées qui changeaient selon leurs émotions. Une loi étrange régnait ici : personne ne pouvait posséder d'objet en double, et chacun devait offrir à un inconnu ce qu'il avait en trop...

**Critères** : cohérence, temps (imparfait), richesse du vocabulaire, ponctuation et orthographe soignées.` }
      ]
    },
    {
      id: "heros-heroismes",
      titre: "Héros et héroïsmes : chevaliers et héros d'hier et d'aujourd'hui",
      theme: "Agir sur le monde",
      cours: `
## Ce que dit le programme
Le questionnement « Agir sur le monde » s'intéresse aux **héros** et à l'**héroïsme**. On lit des textes du **Moyen Âge** (chansons de geste, romans de chevalerie) et des textes plus modernes. Question : *qu'est-ce qu'un héros ? Ses valeurs sont-elles encore les nôtres ?*

## La société médiévale en bref
Au Moyen Âge (Ve - XVe siècle), la société est divisée en trois ordres : ceux qui prient (le **clergé**), ceux qui combattent (la **noblesse**, dont les **chevaliers**), ceux qui travaillent (les paysans). Le chevalier est lié à son seigneur par un serment de **fidélité** (le lien vassalique). Il est fait chevalier lors de la cérémonie de l'**adoubement**.

## La chanson de geste : le héros épique
La **chanson de geste** (du latin *gesta*, « exploits ») est un long poème chanté par les **jongleurs**, qui raconte les exploits guerriers de chevaliers. Elle est écrite en **laisses** (strophes de longueur variable sur une même assonance), en vers de dix syllabes (**décasyllabes**).

>! **Exemple** : *La Chanson de Roland* (vers 1100) raconte la bataille de **Roncevaux** (778) : Roland, neveu de Charlemagne, commande l'arrière-garde attaquée par les Sarrasins. Par **orgueil**, il refuse d'abord de sonner de son cor (l'olifant) pour appeler l'armée. Il meurt en héros, face à l'Espagne, en tendant son gant vers Dieu. Son épée s'appelle **Durendal** ; son ami sage est **Olivier** : « Roland est preux et Olivier est sage. »

Le héros épique est **plus grand que nature** : force surhumaine, courage absolu, combat pour Dieu et pour son roi. Le texte utilise l'**hyperbole** (exagération) et les **répétitions**.

## Le roman de chevalerie : le héros courtois
Au XIIe siècle, **Chrétien de Troyes** écrit des romans en vers (**octosyllabes**) sur les chevaliers du roi **Arthur** et de la **Table ronde** :
- *Lancelot ou le Chevalier de la charrette* (vers 1177-1181) ;
- *Yvain ou le Chevalier au lion* (vers 1177-1181) : Yvain sauve un lion qui devient son compagnon ;
- *Perceval ou le Conte du Graal* (vers 1181-1190) : la quête du Graal, inachevée.

Le chevalier y part en **quête** d'aventures : il affronte des géants, des chevaliers ennemis, des épreuves merveilleuses, pour mériter l'amour de sa dame (**amour courtois**) et prouver sa valeur.

## Les valeurs chevaleresques
| Valeur | Sens |
|---|---|
| prouesse | courage et exploits au combat (le chevalier est « preux ») |
| loyauté | fidélité à sa parole, à son seigneur |
| largesse | générosité |
| courtoisie | politesse raffinée, respect de la dame |
| foi | engagement chrétien, protection des faibles et de l'Église |

## Du héros à l'anti-héros
- **Don Quichotte** (Cervantès, 1605-1615) se croit chevalier et attaque des moulins à vent qu'il prend pour des géants : c'est une **parodie** des romans de chevalerie.
- Le héros moderne peut être un **héros ordinaire** : un résistant, un sauveteur, quelqu'un qui agit pour les autres sans pouvoirs extraordinaires.
- Les super-héros de bandes dessinées et de films reprennent souvent les codes du héros épique (force surhumaine, mission, ennemi).

> **À retenir**
> Héros épique (chanson de geste, *La Chanson de Roland*) : exploits guerriers, force surhumaine, fidélité au roi et à Dieu.
> Héros courtois (Chrétien de Troyes) : quête, épreuves merveilleuses, amour courtois.
> Valeurs : prouesse, loyauté, largesse, courtoisie, foi.
> Un héros se définit par ses actes au service d'une cause qui le dépasse.
`,
      exercices: [
        { type: "qcm", question: "Quel est le nom de l'épée de Roland ?", choix: ["Excalibur", "Durendal", "Joyeuse", "Olifant"], reponse: 1, explication: "L'épée de Roland est **Durendal**. Excalibur est celle d'Arthur, Joyeuse celle de Charlemagne, et l'olifant est le cor de Roland." },
        { type: "vf", question: "Chrétien de Troyes a écrit des romans de chevalerie autour du roi Arthur au XIIe siècle.", reponse: true, explication: "Chrétien de Troyes (XIIe s.) est l'auteur de *Lancelot*, *Yvain*, *Perceval*, en octosyllabes." },
        { type: "saisie", question: "Comment s'appelle la cérémonie au cours de laquelle un jeune homme devient chevalier ?", reponses: ["adoubement", "l'adoubement"], explication: "Lors de l'**adoubement**, le jeune noble reçoit ses armes (épée, éperons) et devient chevalier." },
        { type: "qcm", question: "Quel personnage attaque des moulins à vent qu'il prend pour des géants ?", choix: ["Lancelot", "Perceval", "Roland", "Don Quichotte"], reponse: 3, explication: "Don Quichotte, héros de Cervantès, est un anti-héros : il parodie les chevaliers des romans en se trompant sans cesse sur la réalité." },
        { type: "qcm", question: "Quelle bataille est racontée dans *La Chanson de Roland* ?", choix: ["Roncevaux", "Alésia", "Poitiers", "Hastings"], reponse: 0, explication: "Roland meurt à **Roncevaux**, dans les Pyrénées, en 778, lors de l'attaque de l'arrière-garde de Charlemagne." },
        { type: "vf", question: "Les chansons de geste sont écrites en laisses et étaient chantées par des jongleurs.", reponse: true, explication: "Les laisses sont des strophes de longueur variable sur une même assonance ; les jongleurs les récitaient ou chantaient devant un public." },
        { type: "saisie", question: "Quel adjectif du Moyen Âge qualifie un chevalier courageux et vaillant ? (« Roland est ... et Olivier est sage »)", reponses: ["preux"], explication: "Le chevalier **preux** fait preuve de **prouesse**, c'est-à-dire de courage et de valeur au combat." },
        { type: "qcm", question: "L'amour courtois désigne :", choix: ["un mariage arrangé entre deux familles", "l'amour d'un chevalier pour son cheval", "un amour raffiné où le chevalier se met au service de sa dame", "l'amitié entre deux chevaliers"], reponse: 2, explication: "Dans l'amour courtois (ou *fin'amor*), le chevalier sert sa dame avec respect et accomplit des exploits pour la mériter." },
        { type: "redaction", question: "**Question de réflexion (type contrôle)** : « Les héros d'aujourd'hui ressemblent-ils encore aux chevaliers du Moyen Âge ? » Réponds en un développement de 15 à 20 lignes, organisé en deux parties, avec des exemples.", corrige: `**Méthode** : introduction courte (définir le héros médiéval), deux paragraphes (ressemblances / différences), conclusion qui donne ton avis nuancé.

**Proposition de corrigé**
Les chevaliers des chansons de geste et des romans du Moyen Âge sont des modèles d'héroïsme. Mais leurs valeurs ont-elles disparu ?

**D'abord, les héros actuels gardent beaucoup de points communs avec les chevaliers.** Comme Roland ou Yvain, ils font preuve de **courage** et mettent leur vie en danger pour les autres. Les super-héros de films protègent les faibles, comme le chevalier devait protéger la veuve et l'orphelin. De plus, ils suivent un **code** moral : la loyauté, la fidélité à une cause. Enfin, les récits reprennent la **quête** et les épreuves, comme dans les romans de Chrétien de Troyes.

**Cependant, l'héroïsme a beaucoup changé.** Le chevalier combattait au service de son seigneur et de Dieu, souvent par les armes ; le héros d'aujourd'hui agit plutôt pour des valeurs comme la liberté, la solidarité ou la planète. Par ailleurs, il peut être une personne **ordinaire** : un pompier, une infirmière, un résistant, un sauveteur. Il n'a pas de force surhumaine, mais son engagement le rend admirable. Enfin, des œuvres comme *Don Quichotte* ont montré que l'idéal chevaleresque pouvait aussi faire rire.

**Pour conclure**, les héros d'aujourd'hui héritent du courage et de la générosité des chevaliers, mais l'héroïsme s'est rapproché de la vie quotidienne : chacun peut être un héros par ses actes.` }
      ]
    },
    {
      id: "homme-nature",
      titre: "L'être humain est-il maître de la nature ?",
      theme: "Questionnement complémentaire",
      cours: `
## Ce que dit le programme
Le questionnement complémentaire de 5e pose la question : *l'être humain est-il maître de la nature ?* Les textes montrent l'homme qui **domine** la nature (il défriche, construit, invente des machines), mais aussi la **force** de la nature qui le dépasse (tempêtes, catastrophes), et la nécessité de la **protéger**.

## Trois rapports à la nature
| Rapport | Idée | Exemples repères |
|---|---|---|
| **Dominer** | L'homme transforme la nature grâce à son intelligence et à la science | Descartes (*Discours de la méthode*, 1637) : la science doit nous rendre « comme maîtres et possesseurs de la nature » ; Robinson qui cultive son île ; les machines de Jules Verne |
| **Subir** | La nature reste plus forte : tempêtes, volcans, naufrages | les tempêtes de *L'Odyssée* ; Hugo, *Les Travailleurs de la mer* (1866) : Gilliatt lutte contre l'océan et une pieuvre géante |
| **Respecter / protéger** | L'homme fait partie de la nature et doit en prendre soin | Jean Giono, *L'Homme qui plantait des arbres* (1953) : le berger Elzéard Bouffier fait renaître une région en plantant des arbres ; Rousseau, qui célèbre la nature |

>! **Exemple** : dans la fable de La Fontaine « Le Chêne et le Roseau » (*Fables*, livre I, 1668), le chêne orgueilleux se moque du roseau fragile. Mais lors de la tempête, le roseau plie et survit tandis que le chêne est déraciné. Morale implicite : la force n'est pas toujours là où on l'attend, et l'orgueil face à la nature est dangereux.

## Les outils pour lire ces textes
- **La description** de paysages : champs lexicaux (de la mer, de la forêt, de la tempête), adjectifs, verbes de mouvement.
- **La personnification** : la nature est présentée comme un être vivant (« la mer gronde », « le vent hurle »).
- **L'hyperbole** pour montrer la puissance des éléments (« des vagues hautes comme des montagnes »).
- **L'argumentation** : beaucoup de textes défendent une idée (il faut protéger la forêt, le progrès est utile...).

## Le champ lexical
Un **champ lexical** est l'ensemble des mots qui se rapportent à un même thème dans un texte. Exemple de champ lexical de la tempête : *orage, vent, éclair, vague, déchaîné, gronder, rafale*. Repérer un champ lexical aide à trouver le thème d'un texte.

## Argumenter sur la question
Pour **oui** (l'homme maîtrise la nature) :
- la science permet de prévoir la météo, de soigner, de cultiver, de construire des barrages ;
- l'homme a exploré les océans, l'espace.

Pour **non** (il ne la maîtrise pas) :
- les catastrophes naturelles (séismes, cyclones, épidémies) restent imprévisibles ou incontrôlables ;
- en voulant dominer la nature, l'homme l'a abîmée (pollution, réchauffement climatique, disparition d'espèces), ce qui se retourne contre lui.

> **À retenir**
> Trois rapports : dominer, subir, protéger.
> Repère les champs lexicaux, les personnifications et les hyperboles qui montrent la force de la nature.
> Une bonne réponse argumentée est **nuancée** : l'homme maîtrise en partie la nature, mais il en dépend et doit la respecter.
`,
      exercices: [
        { type: "qcm", question: "Dans « Le Chêne et le Roseau », lequel des deux survit à la tempête ?", choix: ["Le chêne", "Les deux", "Aucun", "Le roseau"], reponse: 3, explication: "Le roseau plie mais ne rompt pas ; le chêne, rigide et orgueilleux, est déraciné." },
        { type: "saisie", question: "Comment s'appelle le procédé qui présente la nature comme un être humain (« la mer gronde de colère ») ?", reponses: ["personnification", "la personnification", "une personnification"], explication: "La **personnification** attribue à une chose ou à un élément des caractéristiques humaines (sentiments, actions)." },
        { type: "vf", question: "Dans *L'Homme qui plantait des arbres*, Giono montre un homme qui détruit une forêt pour construire une ville.", reponse: false, explication: "C'est l'inverse : le berger Elzéard Bouffier plante patiemment des milliers d'arbres et fait revivre une région désertée." },
        { type: "qcm", question: "Lequel de ces groupes de mots forme un champ lexical de la tempête ?", choix: ["rafale, éclair, vague, déchaîné", "soleil, plage, sieste, glace", "école, cahier, stylo, cartable", "forêt, champignon, ruisseau, calme"], reponse: 0, explication: "Rafale, éclair, vague, déchaîné renvoient tous à la tempête." },
        { type: "qcm", question: "Quel philosophe a écrit que la science devait rendre les hommes « comme maîtres et possesseurs de la nature » ?", choix: ["Rousseau", "Descartes", "Voltaire", "Montaigne"], reponse: 1, explication: "C'est Descartes, dans le *Discours de la méthode* (1637)." },
        { type: "vf", question: "« Des vagues hautes comme des montagnes » est une hyperbole (exagération) qui montre la puissance de la nature.", reponse: true, explication: "L'exagération sert à frapper l'imagination. On y trouve aussi une comparaison (outil « comme »)." },
        { type: "saisie", question: "Comment appelle-t-on l'ensemble des mots qui se rapportent à un même thème dans un texte ? (deux mots)", reponses: ["champ lexical", "un champ lexical", "le champ lexical"], explication: "Le **champ lexical** permet d'identifier le thème principal d'un passage." },
        { type: "redaction", question: "**Sujet de réflexion (type contrôle)** : « L'être humain est-il maître de la nature ? » Rédige une réponse argumentée d'une vingtaine de lignes, en deux parties, avec au moins un exemple littéraire et un exemple tiré de l'actualité ou de tes connaissances.", corrige: `**Plan conseillé** : I. Oui, l'homme a appris à dominer la nature. II. Mais il ne la maîtrise pas totalement et doit la respecter. Conclusion nuancée.

**Proposition de corrigé**
Depuis toujours, les hommes cherchent à transformer leur environnement. Mais sont-ils vraiment devenus maîtres de la nature ?

**D'une part, l'homme a acquis un grand pouvoir sur la nature.** Grâce à son intelligence et à la science, il cultive la terre, construit des villes, des ponts, des barrages, et prévoit le temps. Dans *Robinson Crusoé*, le naufragé transforme une île sauvage en domaine organisé : il cultive, élève des chèvres, construit une maison. Les romans de Jules Verne montrent aussi l'homme qui explore les fonds marins à bord du *Nautilus*.

**D'autre part, cette maîtrise reste limitée.** Les séismes, les cyclones ou les inondations rappellent que la nature reste plus forte. Dans la fable « Le Chêne et le Roseau », La Fontaine montre que l'orgueil est puni par la tempête. De plus, en voulant dominer la nature, l'homme l'a abîmée : la pollution et le réchauffement climatique menacent aujourd'hui notre propre vie. C'est pourquoi des œuvres comme *L'Homme qui plantait des arbres* de Giono invitent plutôt à **prendre soin** de la nature.

**En conclusion**, l'homme maîtrise en partie la nature, mais il en dépend : plutôt que d'en être le maître, il devrait en être le gardien.` }
      ]
    },
    {
      id: "classes-de-mots",
      titre: "Les classes de mots (natures)",
      theme: "Étude de la langue",
      cours: `
## Nature et fonction : ne pas confondre
- La **classe** (ou **nature**) d'un mot, c'est ce qu'il **est** : elle ne change pas, on la trouve dans le dictionnaire (nom, verbe, adjectif...).
- La **fonction**, c'est le **rôle** qu'il joue dans une phrase précise (sujet, COD...). Elle change selon la phrase.

>! **Exemple** : « chat » est toujours un **nom**. Dans « Le chat dort », il est sujet ; dans « Je caresse le chat », il est COD.

## Les classes variables (elles changent de forme : genre, nombre, personne...)
| Classe | Rôle | Exemples |
|---|---|---|
| **nom** | désigne un être, une chose, une idée ; nom commun ou propre | table, liberté, Paris |
| **déterminant** | se place devant le nom et l'introduit | le, une, des, du, mon, ce, quel, plusieurs, trois |
| **adjectif** (qualificatif) | précise une qualité du nom | grand, rouge, heureux |
| **pronom** | remplace (ou représente) un nom ou un groupe nominal | il, le, lui, celui-ci, le mien, qui, personne |
| **verbe** | exprime une action ou un état ; se conjugue | courir, être, sembler |

## Les sortes de déterminants
- **articles** : définis (le, la, les, l', et les formes contractées au, aux, du, des = de + les), indéfinis (un, une, des), partitifs (du, de la, de l' : « boire du lait ») ;
- **possessifs** : mon, ton, son, notre, votre, leur, mes, tes, ses, nos, vos, leurs ;
- **démonstratifs** : ce, cet, cette, ces ;
- **interrogatifs / exclamatifs** : quel, quelle, quels, quelles ;
- **indéfinis** : chaque, plusieurs, quelques, aucun, certains, tout ;
- **numéraux** : deux, dix, cent.

## Les sortes de pronoms
- **personnels** : je, tu, il, nous, vous, ils ; me, te, se, le, la, les, lui, leur, en, y ; moi, toi, eux ;
- **possessifs** : le mien, la tienne, les nôtres ;
- **démonstratifs** : celui, celle, ceux, ceci, cela, ça ;
- **relatifs** : qui, que, quoi, dont, où, lequel (ils introduisent une proposition relative) ;
- **interrogatifs** : qui ? que ? quoi ? lequel ? ;
- **indéfinis** : on, personne, rien, chacun, quelqu'un, tout.

>! **Piège** : « le », « la », « les » sont **déterminants** devant un nom (« le livre ») mais **pronoms** devant un verbe (« je **le** lis »). « Leur » est déterminant devant un nom (« **leur** maison ») et pronom devant un verbe (« je **leur** parle ») — le pronom « leur » ne prend jamais de s.

## Les classes invariables (elles ne changent jamais de forme)
| Classe | Rôle | Exemples |
|---|---|---|
| **adverbe** | modifie le sens d'un verbe, d'un adjectif, d'un autre adverbe ou de la phrase | vite, très, hier, ne... pas, lentement, souvent |
| **préposition** | introduit un complément | à, de, pour, par, avec, sans, dans, sur, sous, chez, vers, en |
| **conjonction de coordination** | relie deux éléments de même fonction | mais, ou, et, donc, or, ni, car |
| **conjonction de subordination** | introduit une proposition subordonnée | que, quand, si, comme, lorsque, puisque, parce que, bien que |
| **interjection** | exprime une émotion, un bruit | oh ! hélas ! aïe ! chut ! |

>! **Astuce** : pour retenir les conjonctions de coordination : « Mais où est donc Ornicar ? » (mais, ou, et, donc, or, ni, car).

## Comment trouver la classe d'un mot ?
1. Peut-on mettre un déterminant devant ? → c'est un **nom**.
2. Peut-on le conjuguer ? → c'est un **verbe**.
3. Peut-on le mettre au féminin / pluriel sans qu'il soit un nom ? → **adjectif**, **déterminant** ou **pronom** (regarde sa place : devant un nom = déterminant ; seul à la place d'un nom = pronom).
4. Il ne varie jamais ? → adverbe, préposition, conjonction ou interjection.

## Le cas des adverbes en -ment
Ils se forment souvent sur le féminin de l'adjectif : *lent → lente → lentement*. Les adjectifs en -ant et -ent donnent -amment et -emment : *courant → couramment*, *prudent → prudemment*.

> **À retenir**
> 5 classes variables : nom, déterminant, adjectif, pronom, verbe.
> 5 classes invariables : adverbe, préposition, conjonction de coordination, conjonction de subordination, interjection.
> La nature d'un mot ne change pas ; sa fonction dépend de la phrase.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la classe du mot « rapidement » ?", choix: ["Adjectif", "Adverbe", "Nom", "Préposition"], reponse: 1, explication: "« Rapidement » est un adverbe (invariable) formé sur l'adjectif « rapide » + -ment." },
        { type: "qcm", question: "Dans « Je **les** regarde », quelle est la classe de « les » ?", choix: ["Déterminant article défini", "Préposition", "Pronom personnel", "Adverbe"], reponse: 2, explication: "« les » est placé devant un verbe et remplace un groupe nominal : c'est un pronom personnel (COD). Devant un nom, il serait déterminant." },
        { type: "saisie", question: "Cite la conjonction de coordination qui exprime la cause (3 lettres).", reponses: ["car"], explication: "**Car** introduit une cause : « Je reste, car il pleut. » Les sept conjonctions de coordination : mais, ou, et, donc, or, ni, car." },
        { type: "vf", question: "« Leur » dans « Je leur ai écrit » peut s'écrire « leurs » s'il désigne plusieurs personnes.", reponse: false, explication: "Placé devant un verbe, « leur » est un **pronom personnel** : il est **toujours invariable**. Seul le déterminant possessif s'accorde (« leurs livres »)." },
        { type: "qcm", question: "Dans « Il boit **du** lait », « du » est :", choix: ["un article partitif", "une préposition", "un pronom", "un article défini contracté"], reponse: 0, explication: "« du lait » désigne une quantité non comptable de lait : c'est un article partitif. Dans « il revient du marché », « du » serait l'article défini contracté (de + le)." },
        { type: "saisie", question: "Quelle est la classe (nature) du mot « dont » dans « Le livre dont je parle » ? (deux mots)", reponses: ["pronom relatif", "un pronom relatif"], explication: "« dont » est un **pronom relatif** : il reprend « livre » (son antécédent) et introduit la proposition subordonnée relative « dont je parle »." },
        { type: "saisie", question: "Écris l'adverbe en -ment formé sur l'adjectif « prudent ».", reponses: ["prudemment"], explication: "Les adjectifs en **-ent** donnent des adverbes en **-emment** (prononcé « aman ») : prudent → prudemment. Les adjectifs en -ant donnent -amment : vaillant → vaillamment." },
        { type: "qcm", question: "Dans « Quand la nuit tomba, le chevalier repartit », « quand » est :", choix: ["un adverbe interrogatif", "une préposition", "une conjonction de coordination", "une conjonction de subordination"], reponse: 3, explication: "« Quand » introduit ici la proposition subordonnée « quand la nuit tomba » (complément de temps) : c'est une conjonction de subordination. Dans « Quand pars-tu ? », ce serait un adverbe interrogatif." },
        { type: "redaction", question: "**Exercice type contrôle** : donne la classe grammaticale de chaque mot de la phrase suivante : « Hélas, le vieux chevalier ne reverra jamais sa belle forteresse. »", corrige: `| Mot | Classe |
|---|---|
| Hélas | interjection |
| le | déterminant (article défini) |
| vieux | adjectif qualificatif |
| chevalier | nom commun |
| ne... jamais | adverbe de négation |
| reverra | verbe (revoir, futur de l'indicatif) |
| sa | déterminant possessif |
| belle | adjectif qualificatif |
| forteresse | nom commun |

**Méthode** : pour chaque mot, demande-toi s'il varie et quel est son rôle. « le » et « sa » sont devant un nom : déterminants. « ne... jamais » encadre le verbe : adverbe de négation en deux parties.` }
      ]
    },
    {
      id: "fonctions",
      titre: "Les fonctions dans la phrase",
      theme: "Étude de la langue",
      cours: `
## Le sujet
Le **sujet** indique qui fait l'action (ou de qui on dit quelque chose). Il commande l'accord du verbe.

>! **Méthode** : encadre le mot ou groupe avec « c'est... qui » : « *C'est* le chevalier *qui* combat. » → « le chevalier » est sujet. Attention : le sujet peut être placé **après** le verbe (sujet inversé) : « Au loin galopaient **les cavaliers**. »

## Les compléments du verbe (essentiels)
Ils ne peuvent généralement ni être supprimés ni déplacés.

| Fonction | Définition | Exemple |
|---|---|---|
| **COD** (complément d'objet direct) | construit **sans** préposition ; répond à « qui ? » / « quoi ? » après le verbe | Roland sonne **l'olifant**. |
| **COI** (complément d'objet indirect) | construit **avec** une préposition (à, de) ; répond à « à qui ? de quoi ? » | Il pense **à sa dame**. Il parle **de la bataille**. |
| **COS** (complément d'objet second) | second complément d'un verbe qui a déjà un COD | Il offre une rose **à sa dame**. |

>! **Pronoms** : les pronoms peuvent être COD (« je **le** vois ») ou COI (« je **lui** parle » = je parle à lui).

## L'attribut du sujet
Il donne une caractéristique du sujet par l'intermédiaire d'un **verbe d'état** : *être, paraître, sembler, devenir, demeurer, rester, avoir l'air, passer pour*. Il s'accorde avec le sujet.

>! **Exemple** : « Les princesses semblent **inquiètes**. » → « inquiètes » est attribut du sujet « les princesses ». Ne pas confondre avec le COD : dans « Il voit **un dragon** », « un dragon » est COD (« voir » n'est pas un verbe d'état ; le dragon n'est pas le sujet).

## Les compléments de phrase (circonstanciels)
Ils donnent des précisions sur les **circonstances** de l'action. On peut le plus souvent les **supprimer** et les **déplacer**.

| Circonstance | Question | Exemple |
|---|---|---|
| temps | quand ? | **À l'aube**, ils partirent. |
| lieu | où ? | Il se cache **dans la forêt**. |
| manière | comment ? | Elle avance **prudemment**. |
| cause | pourquoi ? | Il tremble **de peur**. |
| but | dans quel but ? | Il s'entraîne **pour gagner**. |
| moyen | avec quoi ? | Il coupe la corde **avec son épée**. |

## Les fonctions dans le groupe nominal (expansions du nom)
- **épithète** : adjectif placé à côté du nom, sans verbe : « un **vaillant** chevalier » ;
- **complément du nom** : groupe introduit par une préposition : « l'épée **de Roland** », « une tasse **à café** » ;
- **proposition subordonnée relative** : « le chevalier **qui gagna le tournoi** ».

## Fiche-méthode : analyser une phrase
1. Repère le **verbe conjugué**.
2. Cherche son **sujet** (c'est... qui).
3. Le verbe est-il un verbe d'état ? Oui → cherche l'**attribut**.
4. Sinon, pose « qui ? / quoi ? » (COD) ou « à qui ? / de quoi ? » (COI) juste après le verbe.
5. Les groupes déplaçables et supprimables sont des **compléments de phrase** : précise la circonstance.

> **À retenir**
> Sujet → accord du verbe. COD sans préposition, COI avec préposition.
> L'attribut du sujet suit un verbe d'état et s'accorde avec le sujet.
> Les compléments de phrase (circonstanciels) sont déplaçables et supprimables.
> Dans le groupe nominal : épithète, complément du nom, relative.
`,
      exercices: [
        { type: "qcm", question: "Dans « Le dragon garde **le trésor** », quelle est la fonction de « le trésor » ?", choix: ["Sujet", "COI", "COD", "Attribut du sujet"], reponse: 2, explication: "« Garde quoi ? » → le trésor. Il est construit sans préposition : c'est un COD." },
        { type: "qcm", question: "Dans « La princesse paraît **triste** », « triste » est :", choix: ["épithète", "attribut du sujet", "COD", "complément de phrase"], reponse: 1, explication: "« paraître » est un verbe d'état : « triste » caractérise le sujet « la princesse » ; c'est un attribut du sujet." },
        { type: "vf", question: "Dans « Il obéit **à son seigneur** », « à son seigneur » est un COI.", reponse: true, explication: "On obéit « à qui ? » → à son seigneur : complément construit avec la préposition « à », non déplaçable : COI." },
        { type: "saisie", question: "Quel est le sujet du verbe dans « Dans la clairière surgirent deux loups affamés » ?", reponses: ["deux loups affamés", "deux loups", "deux loups affames"], explication: "Le sujet est inversé : « *Ce sont* deux loups affamés *qui* surgirent ». Le verbe est au pluriel car il s'accorde avec « deux loups affamés »." },
        { type: "qcm", question: "Quelle circonstance exprime le complément « de froid » dans « Les soldats tremblaient de froid » ?", choix: ["Le but", "Le lieu", "La manière", "La cause"], reponse: 3, explication: "Pourquoi tremblaient-ils ? À cause du froid : complément de cause." },
        { type: "qcm", question: "Dans « Il offrit une bague à Iseut », quelle est la fonction de « à Iseut » ?", choix: ["COS (complément d'objet second)", "COD", "Complément du nom", "Sujet"], reponse: 0, explication: "Le verbe a déjà un COD (« une bague ») ; « à Iseut » est le second complément d'objet, le COS." },
        { type: "saisie", question: "Quelle est la fonction de « de Roland » dans « l'épée de Roland » ? (trois mots)", reponses: ["complément du nom", "complément du nom épée", "complement du nom", "complement du nom epee", "cdn"], explication: "« de Roland » complète le nom « épée » grâce à la préposition « de » : c'est un **complément du nom**." },
        { type: "vf", question: "Un complément de phrase (circonstanciel) ne peut jamais être déplacé.", reponse: false, explication: "Au contraire, il peut le plus souvent être déplacé et supprimé : « Ils partirent à l'aube » → « À l'aube, ils partirent. »" },
        { type: "redaction", question: "**Exercice type contrôle** : donne la fonction de chaque groupe souligné en gras : « **Chaque matin**, **le vieux berger** conduisait **ses moutons** **vers la colline**. **Il** semblait **heureux**. »", corrige: `- **Chaque matin** : complément de phrase (circonstanciel) de **temps** (déplaçable, supprimable ; répond à « quand ? »).
- **le vieux berger** : **sujet** du verbe « conduisait » (« c'est le vieux berger qui conduisait »).
- **ses moutons** : **COD** du verbe « conduisait » (conduisait quoi ? sans préposition).
- **vers la colline** : complément circonstanciel de **lieu** (où ?).
- **Il** : **sujet** du verbe « semblait ».
- **heureux** : **attribut du sujet** « il » (après le verbe d'état « sembler » ; il s'accorde avec le sujet).

Remarque : « vers la colline » peut aussi être analysé comme complément essentiel de lieu du verbe « conduire » ; l'important est d'identifier la circonstance (lieu).` }
      ]
    },
    {
      id: "phrase-simple-complexe",
      titre: "La phrase : types, formes, phrase simple et complexe",
      theme: "Étude de la langue",
      cours: `
## Les types de phrases
Toute phrase a un **type** (et un seul) :
| Type | But | Ponctuation | Exemple |
|---|---|---|---|
| **déclaratif** | donner une information | point | Le navire arrive. |
| **interrogatif** | poser une question | ? | Le navire arrive-t-il ? |
| **impératif** (injonctif) | donner un ordre, un conseil | point ou ! | Arrête le navire. |
| **exclamatif** | exprimer une émotion | ! | Quel navire magnifique ! |

## Les formes de phrases
Une phrase est à la forme **affirmative** ou **négative** : « Il ne vient **pas**. » La négation se fait avec **ne** + un second mot : *pas, plus, jamais, rien, personne, guère, aucun, ni... ni*.

>! **Piège** : à l'écrit, n'oublie jamais le « ne » : « On **n'**a rien vu » (et non « On a rien vu »). Astuce : remplace « on » par « il » → « Il n'a rien vu ».

## Phrase verbale et non verbale
- Phrase **verbale** : organisée autour d'au moins un verbe conjugué : « Le loup approche. »
- Phrase **non verbale** : sans verbe conjugué : « Silence ! », « Quelle tempête ! », « Défense d'entrer. »

## La proposition
Une **proposition** est un groupe de mots organisé autour d'un **verbe conjugué**. Pour compter les propositions, compte les verbes conjugués.

- **Phrase simple** : une seule proposition (un seul verbe conjugué) → « Le chevalier traverse la forêt. »
- **Phrase complexe** : plusieurs propositions → « Le chevalier traverse la forêt **et** il entend un cri. »

## Comment les propositions sont-elles reliées ?
| Liaison | Comment | Exemple |
|---|---|---|
| **juxtaposition** | par un signe de ponctuation (virgule, point-virgule, deux-points) | Il pleuvait, nous sommes rentrés. |
| **coordination** | par une conjonction de coordination ou un adverbe de liaison (puis, ensuite, alors) | Il pleuvait, **donc** nous sommes rentrés. |
| **subordination** | une proposition **subordonnée** dépend d'une proposition **principale** ; elle est introduite par un mot subordonnant | Nous sommes rentrés **parce qu'il pleuvait**. |

## Deux subordonnées à connaître en 5e
- La **subordonnée relative** : introduite par un **pronom relatif** (qui, que, dont, où...), elle complète un nom, son **antécédent** : « Le château **que tu vois** appartient au roi. »
- La **subordonnée conjonctive** : introduite par une **conjonction de subordination** :
  - complétive, souvent COD du verbe : « Je sais **que tu viendras**. »
  - circonstancielle : « Il partit **quand le soleil se leva**. » (temps), « Il resta **parce qu'il était blessé** » (cause).

>! **Exemple d'analyse** : « Quand le jongleur chanta, la foule, qui l'écoutait, se tut. »
>! 3 verbes conjugués (chanta, écoutait, se tut) → 3 propositions.
>! Principale : « la foule se tut ». Subordonnée conjonctive circonstancielle de temps : « quand le jongleur chanta ». Subordonnée relative : « qui l'écoutait » (antécédent : « la foule »).

> **À retenir**
> 4 types (déclaratif, interrogatif, impératif, exclamatif) ; 2 formes (affirmative, négative).
> Une proposition = un verbe conjugué. Phrase simple = 1 proposition ; complexe = plusieurs.
> Juxtaposition (ponctuation), coordination (conjonction), subordination (subordonnant).
`,
      exercices: [
        { type: "qcm", question: "Quel est le type de la phrase « Ferme la porte » ?", choix: ["Déclaratif", "Impératif (injonctif)", "Exclamatif", "Interrogatif"], reponse: 1, explication: "Elle donne un ordre, avec un verbe à l'impératif : type impératif (ou injonctif)." },
        { type: "saisie", question: "Combien de propositions contient la phrase : « Le loup qui avait faim sortit du bois et il aperçut l'agneau » ? (en chiffres)", reponses: ["3", "trois"], explication: "Trois verbes conjugués : avait, sortit, aperçut → 3 propositions (dont une relative « qui avait faim »)." },
        { type: "vf", question: "« Quelle belle journée ! » est une phrase non verbale.", reponse: true, explication: "Elle ne contient aucun verbe conjugué : c'est une phrase non verbale, de type exclamatif." },
        { type: "qcm", question: "Dans « Il pleuvait ; nous restâmes à l'abri », les propositions sont :", choix: ["coordonnées", "subordonnées", "juxtaposées", "relatives"], reponse: 2, explication: "Elles sont reliées par un signe de ponctuation (le point-virgule), sans mot de liaison : elles sont juxtaposées." },
        { type: "qcm", question: "Dans « La cape que porte le roi est rouge », la proposition « que porte le roi » est :", choix: ["une subordonnée relative", "une subordonnée conjonctive complétive", "une principale", "une proposition coordonnée"], reponse: 0, explication: "« que » est ici un pronom relatif qui reprend « la cape » (antécédent) : c'est une subordonnée relative." },
        { type: "saisie", question: "Corrige la phrase pour qu'elle soit correcte à l'écrit : « On a jamais vu ça. »", reponses: ["On n'a jamais vu ça", "On n'a jamais vu cela"], explication: "La négation complète est **ne... jamais** : « On **n'**a jamais vu ça. » Astuce : « Il **n'**a jamais vu ça. »" },
        { type: "vf", question: "Dans « Je pense que tu as raison », « que » est un pronom relatif.", reponse: false, explication: "Ici « que » n'a pas d'antécédent : c'est une conjonction de subordination qui introduit une subordonnée complétive, COD de « pense »." },
        { type: "redaction", question: "**Exercice type contrôle** : 1) Délimite les propositions de la phrase suivante et donne la nature de chacune : « Lorsque le soleil se coucha, les voyageurs, qui étaient épuisés, dressèrent leur camp. » 2) Transforme les deux phrases simples « Le marin est courageux. Il affronte la tempête. » en une seule phrase complexe de trois manières : juxtaposition, coordination, subordination.", corrige: `**1) Analyse**
Trois verbes conjugués (se coucha, étaient, dressèrent) → trois propositions :
- « les voyageurs dressèrent leur camp » : **proposition principale** ;
- « Lorsque le soleil se coucha » : **subordonnée conjonctive circonstancielle de temps**, introduite par la conjonction de subordination « lorsque » ;
- « qui étaient épuisés » : **subordonnée relative**, introduite par le pronom relatif « qui », antécédent « les voyageurs ».

**2) Transformations (exemples)**
- Juxtaposition : « Le marin est courageux : il affronte la tempête. »
- Coordination : « Le marin est courageux, **donc** il affronte la tempête. » (ou « Le marin est courageux **et** il affronte la tempête. »)
- Subordination : « Le marin, **qui est courageux**, affronte la tempête. » (relative) ou « **Comme** il est courageux, le marin affronte la tempête. » (conjonctive de cause)` }
      ]
    },
    {
      id: "conjugaison-indicatif",
      titre: "Conjuguer à l'indicatif : présent, imparfait, passé simple, futur, temps composés",
      theme: "Étude de la langue",
      cours: `
## Les trois groupes
- **1er groupe** : verbes en **-er** (sauf *aller*) : chanter.
- **2e groupe** : verbes en **-ir** qui font **-issons** avec « nous » : finir → nous fin*issons*.
- **3e groupe** : tous les autres (aller, venir, prendre, voir, faire, mettre, courir...).

## Le présent de l'indicatif
| | 1er groupe (chanter) | 2e groupe (finir) | 3e groupe (prendre / voir) |
|---|---|---|---|
| je | chante | finis | prends / vois |
| tu | chantes | finis | prends / vois |
| il/elle | chante | finit | prend / voit |
| nous | chantons | finissons | prenons / voyons |
| vous | chantez | finissez | prenez / voyez |
| ils/elles | chantent | finissent | prennent / voient |

Irréguliers à connaître : *être* (suis, es, est, sommes, êtes, sont) ; *avoir* (ai, as, a, avons, avez, ont) ; *aller* (vais, vas, va, allons, allez, vont) ; *faire* (fais, fais, fait, faisons, faites, font) ; *dire* (vous dites) ; *pouvoir* (peux, peux, peut) ; *vouloir* (veux, veux, veut).

## L'imparfait
Terminaisons pour **tous** les verbes : **-ais, -ais, -ait, -ions, -iez, -aient**, sur le radical de « nous » au présent : nous fais-ons → je **fais**ais. Seule exception : *être* → j'**ét**ais.

>! **Pièges** : nous cri**i**ons, vous étudi**i**ez (radical en -i + -ions) ; nous pay**i**ons ; nous man**ge**ions, nous commen**ç**ions.

## Le passé simple
| 1er groupe (chanter) | 2e groupe (finir) | 3e groupe en -i (prendre) | 3e groupe en -u (courir) | 3e groupe en -in (venir) |
|---|---|---|---|---|
| je chantai | je finis | je pris | je courus | je vins |
| tu chantas | tu finis | tu pris | tu courus | tu vins |
| il chanta | il finit | il prit | il courut | il vint |
| nous chantâmes | nous finîmes | nous prîmes | nous courûmes | nous vînmes |
| vous chantâtes | vous finîtes | vous prîtes | vous courûtes | vous vîntes |
| ils chantèrent | ils finirent | ils prirent | ils coururent | ils vinrent |

À connaître : *être* → je fus, il fut, ils furent ; *avoir* → j'eus, il eut, ils eurent ; *faire* → il fit ; *voir* → il vit ; *dire* → il dit ; *pouvoir* → il put ; *vouloir* → il voulut ; *savoir* → il sut ; *mettre* → il mit ; *naître* → il naquit ; *mourir* → il mourut ; *aller* → il alla.

>! **Piège** : « je chant**ai** » (passé simple, action terminée) ≠ « je chant**ais** » (imparfait). Astuce : passe à « il » : « il chanta » ou « il chantait » ?

## Imparfait ou passé simple dans un récit ?
- **Passé simple** : actions de **premier plan**, ponctuelles, qui font avancer l'histoire (« Soudain, il **ouvrit** la porte »).
- **Imparfait** : **arrière-plan** : descriptions, actions longues ou habituelles (« La pièce **était** sombre ; chaque soir, il y **lisait** »).

## Le futur simple
Terminaisons : **-ai, -as, -a, -ons, -ez, -ont**, ajoutées en général à l'**infinitif** : je chanter*ai*, je finir*ai*, je prendr*ai* (le e final de l'infinitif disparaît).
Irréguliers : être → je **ser**ai ; avoir → j'**aur**ai ; aller → j'**ir**ai ; faire → je **fer**ai ; venir → je **viendr**ai ; voir → je **verr**ai ; pouvoir → je **pourr**ai ; vouloir → je **voudr**ai ; savoir → je **saur**ai ; devoir → je **devr**ai ; envoyer → j'**enverr**ai ; courir → je **courr**ai ; mourir → je **mourr**ai.

>! **Piège** : les verbes en -ier, -uer, -ouer gardent leur e : je cri**e**rai, je jou**e**rai, je continu**e**rai.

## Les temps composés : auxiliaire + participe passé
| Temps composé | Formation | Exemple |
|---|---|---|
| **passé composé** | auxiliaire au **présent** + participe passé | j'ai chanté, elle est partie |
| **plus-que-parfait** | auxiliaire à l'**imparfait** + participe passé | j'avais chanté, elle était partie |

L'auxiliaire **être** s'emploie avec les verbes de mouvement ou de changement d'état (aller, venir, partir, arriver, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, devenir...) et les verbes pronominaux ; **avoir** avec tous les autres (y compris *être* et *avoir* eux-mêmes : j'ai été, j'ai eu).

Le **plus-que-parfait** exprime une action **antérieure** à une autre action passée : « Il **avait perdu** son épée quand l'ennemi arriva. »

> **À retenir**
> Imparfait : -ais, -ais, -ait, -ions, -iez, -aient pour tous les verbes.
> Passé simple : 1er groupe en -a (-ai, -as, -a, -âmes, -âtes, -èrent) ; autres en -i, -u ou -in.
> Futur : infinitif + -ai, -as, -a, -ons, -ez, -ont.
> Passé composé = auxiliaire au présent + PP ; plus-que-parfait = auxiliaire à l'imparfait + PP.
`,
      exercices: [
        { type: "saisie", question: "Conjugue « finir » à la 3e personne du pluriel du présent de l'indicatif : « ils ... »", reponses: ["finissent", "ils finissent"], explication: "2e groupe : ils fin**issent** (le radical s'allonge en -iss- au pluriel)." },
        { type: "qcm", question: "Quelle est la forme correcte de « crier » à l'imparfait avec « nous » ?", choix: ["nous crions", "nous criions", "nous crierons", "nous criâmes"], reponse: 1, explication: "Radical « cri- » + terminaison « -ions » → nous cri**i**ons (deux i). « Nous crions » est le présent." },
        { type: "saisie", question: "Conjugue « venir » au passé simple, 3e personne du singulier : « il ... »", reponses: ["vint", "il vint"], explication: "Venir fait son passé simple en -in : je vins, tu vins, il **vint**, nous vînmes, vous vîntes, ils vinrent." },
        { type: "saisie", question: "Conjugue « chanter » au passé simple, 3e personne du pluriel : « ils ... »", reponses: ["chantèrent", "ils chantèrent"], explication: "1er groupe : ils chant**èrent**." },
        { type: "qcm", question: "Quelle est la forme de « voir » au futur simple, 1re personne du singulier ?", choix: ["je voirai", "je voyerai", "je verrai", "je vais voir"], reponse: 2, explication: "« Voir » a un radical irrégulier au futur : je **verr**ai. « Je vais voir » est un futur proche (forme périphrastique), pas le futur simple." },
        { type: "vf", question: "Le plus-que-parfait se forme avec l'auxiliaire au présent et le participe passé.", reponse: false, explication: "Avec l'auxiliaire au présent, c'est le **passé composé**. Le plus-que-parfait utilise l'auxiliaire à l'**imparfait** : j'avais chanté, elle était partie." },
        { type: "qcm", question: "Dans un récit au passé, quel temps choisis-tu pour « Soudain, un cri (retentir) » ?", choix: ["retentissait (imparfait)", "retentit (passé simple)", "retentira (futur)", "a retenti (passé composé)"], reponse: 1, explication: "« Soudain » marque une action ponctuelle de premier plan : passé simple, « retentit »." },
        { type: "saisie", question: "Conjugue « faire » au présent, 2e personne du pluriel : « vous ... »", reponses: ["faites", "vous faites"], explication: "Forme irrégulière : vous **faites** (jamais « faisez »). De même : vous dites, vous êtes." },
        { type: "redaction", question: "**Exercice type contrôle** : réécris ce passage au passé, en employant le passé simple et l'imparfait selon le sens : « La nuit est noire. Le vent souffle dans les arbres. Soudain, le chevalier entend un bruit. Il saisit son épée et avance vers la grotte. Un dragon en sort. »", corrige: `**Corrigé**
« La nuit **était** noire. Le vent **soufflait** dans les arbres. Soudain, le chevalier **entendit** un bruit. Il **saisit** son épée et **avança** vers la grotte. Un dragon en **sortit**. »

**Justification**
- « était », « soufflait » : **imparfait** de description, arrière-plan (le décor).
- « entendit », « saisit », « avança », « sortit » : **passé simple**, actions ponctuelles et successives qui font avancer l'histoire (déclenchées par « Soudain »).
- Attention : « saisir » (2e groupe) a la même forme au présent et au passé simple à la 3e personne du singulier (il saisit) ; c'est le contexte qui indique le temps.` }
      ]
    },
    {
      id: "imperatif-subjonctif-conditionnel",
      titre: "L'impératif, le subjonctif présent et le conditionnel",
      theme: "Étude de la langue",
      cours: `
## Les modes du verbe
Le **mode** indique la manière dont celui qui parle présente l'action :
- **indicatif** : action réelle, présentée comme certaine (présent, imparfait, passé simple, futur...) ;
- **impératif** : ordre, conseil, défense ;
- **subjonctif** : action envisagée, souhaitée, doutée ;
- **conditionnel** : action possible, soumise à une condition, ou imaginée. (Les grammaires récentes rangent le conditionnel parmi les temps de l'indicatif ; retiens surtout ses emplois.)

## L'impératif présent
Il n'a que **trois personnes** et **pas de sujet exprimé** : 2e du singulier, 1re et 2e du pluriel.

| chanter | finir | prendre | être | avoir | aller |
|---|---|---|---|---|---|
| chante | finis | prends | sois | aie | va |
| chantons | finissons | prenons | soyons | ayons | allons |
| chantez | finissez | prenez | soyez | ayez | allez |

>! **Piège** : les verbes du 1er groupe (et *aller*, *cueillir*, *offrir*, *ouvrir*...) n'ont **pas de s** à la 2e personne du singulier : « Chante ! », « Va ! », « Ouvre ! ». Exception pour la prononciation devant *en* et *y* : « Manges-en », « Vas-y ».

Autres formes : savoir → sache, sachons, sachez ; vouloir → veuillez (formule de politesse).

## Le subjonctif présent (initiation)
Il s'emploie surtout après **que** dans des propositions qui expriment la **volonté**, le **souhait**, la **nécessité**, le **doute** ou un sentiment : *il faut que, je veux que, je souhaite que, bien que, pour que, avant que*.

**Formation** : radical de la 3e personne du pluriel du présent (ils finiss-ent) + **-e, -es, -e, -ions, -iez, -ent**. Avec « nous » et « vous », certains verbes reprennent le radical de l'imparfait : que nous **pren**ions, que vous **ven**iez.

| chanter | finir | prendre |
|---|---|---|
| que je chante | que je finisse | que je prenne |
| que tu chantes | que tu finisses | que tu prennes |
| qu'il chante | qu'il finisse | qu'il prenne |
| que nous chantions | que nous finissions | que nous prenions |
| que vous chantiez | que vous finissiez | que vous preniez |
| qu'ils chantent | qu'ils finissent | qu'ils prennent |

Irréguliers fréquents :
- **être** : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient ;
- **avoir** : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient ;
- **aller** : que j'aille ; **faire** : que je fasse ; **pouvoir** : que je puisse ; **savoir** : que je sache ; **vouloir** : que je veuille.

>! **Astuce** : pour savoir si un verbe est au subjonctif, remplace-le par « faire » ou « prendre » : « Il faut que tu **viennes** » → « Il faut que tu **fasses** » : c'est bien le subjonctif.

## Le conditionnel présent
**Formation** : radical du **futur** + terminaisons de l'**imparfait** (-ais, -ais, -ait, -ions, -iez, -aient) : je chanter*ais*, je ser*ais*, j'aur*ais*, je verr*ais*.

**Emplois** :
- **hypothèse** avec « si » + imparfait : « **Si** j'étais un chevalier, je **combattrais** les dragons. » (jamais de conditionnel après « si » !) ;
- **politesse** : « **Pourriez**-vous m'aider ? » ;
- **souhait** : « J'**aimerais** voyager. » ;
- **information non vérifiée** : « Le roi **serait** malade. » ;
- **futur dans le passé** : « Il disait qu'il **viendrait**. »

>! **Futur ou conditionnel ?** « je chanterai » (futur, certain) ≠ « je chanterais » (conditionnel). Astuce : passe à « nous » : « nous chanterons » (futur) / « nous chanterions » (conditionnel).

> **À retenir**
> Impératif : 3 personnes, pas de sujet, pas de s aux verbes en -er à la 2e personne du singulier.
> Subjonctif : après « il faut que, je veux que, pour que, bien que » ; terminaisons -e, -es, -e, -ions, -iez, -ent.
> Conditionnel : radical du futur + terminaisons de l'imparfait ; « si » + imparfait → conditionnel.
`,
      exercices: [
        { type: "saisie", question: "Conjugue « regarder » à l'impératif présent, 2e personne du singulier.", reponses: ["regarde"], explication: "Verbe du 1er groupe : pas de s à la 2e personne du singulier de l'impératif → **Regarde !**" },
        { type: "qcm", question: "Quelle est la forme correcte ?", choix: ["Il faut que tu fais tes devoirs.", "Il faut que tu fasses tes devoirs.", "Il faut que tu ferais tes devoirs.", "Il faut que tu feras tes devoirs."], reponse: 1, explication: "« Il faut que » exprime la nécessité et entraîne le **subjonctif** : que tu **fasses**." },
        { type: "saisie", question: "Conjugue « être » au subjonctif présent, 1re personne du pluriel : « que nous ... »", reponses: ["soyons", "que nous soyons"], explication: "Que nous **soyons** (sans i après le y). Même forme qu'à l'impératif : soyons !" },
        { type: "qcm", question: "Complète : « Si j'avais des ailes, je ... jusqu'aux nuages. »", choix: ["volerai", "volais", "vole", "volerais"], reponse: 3, explication: "Système hypothétique : si + imparfait (« avais ») → conditionnel présent (« volerais »)." },
        { type: "vf", question: "On peut écrire : « Si j'aurais su, je serais venu. »", reponse: false, explication: "Jamais de conditionnel après « si » exprimant la condition. Il faut : « Si j'**avais** su, je serais venu. »" },
        { type: "qcm", question: "Dans « Pourriez-vous fermer la fenêtre ? », le conditionnel exprime :", choix: ["la politesse", "une information non vérifiée", "un futur dans le passé", "un ordre brutal"], reponse: 0, explication: "Le conditionnel atténue la demande : c'est le conditionnel de politesse." },
        { type: "saisie", question: "Conjugue « avoir » à l'impératif présent, 2e personne du singulier.", reponses: ["aie"], explication: "Avoir à l'impératif : **aie**, ayons, ayez (« Aie confiance ! »)." },
        { type: "qcm", question: "« Il m'a promis qu'il ... demain. » Quelle forme convient ?", choix: ["viendra", "vienne", "viendrait", "venait"], reponse: 2, explication: "Le verbe principal est au passé (« a promis ») : on emploie le conditionnel comme **futur dans le passé** : « qu'il viendrait »." },
        { type: "redaction", question: "**Exercice type contrôle** : 1) Écris trois conseils à un jeune chevalier en utilisant l'impératif (verbes : être, avoir, protéger). 2) Écris deux phrases commençant par « Il faut que » avec les verbes « aller » et « savoir ». 3) Complète : « Si je rencontrais un dragon, je ... (fuir) et je ... (prévenir) le roi. »", corrige: `**1) Impératif**
- **Sois** loyal envers ton seigneur.
- **Aie** du courage face au danger.
- **Protège** les faibles. (pas de s : verbe du 1er groupe)

**2) Subjonctif**
- Il faut que tu **ailles** au tournoi. (aller → que j'aille, que tu ailles)
- Il faut que vous **sachiez** manier l'épée. (savoir → que je sache, que vous sachiez)

**3) Conditionnel**
« Si je rencontrais un dragon, je **fuirais** et je **préviendrais** le roi. »
- fuir → radical du futur « fuir- » + -ais → je fuirais ;
- prévenir → radical du futur « préviendr- » + -ais → je préviendrais.
Après « si » + imparfait, la principale est au conditionnel présent.` }
      ]
    },
    {
      id: "accords",
      titre: "Les accords : sujet-verbe, groupe nominal, participe passé",
      theme: "Étude de la langue",
      cours: `
## L'accord du verbe avec son sujet
Le verbe s'accorde en **personne** et en **nombre** avec son sujet. Trouve toujours le sujet avec « c'est... qui » / « ce sont... qui ».

| Piège | Exemple correct | Astuce |
|---|---|---|
| sujet **éloigné** du verbe | Les cris des enfants **résonnent**. | Ce sont les cris qui résonnent (pas « des enfants ») |
| sujet **inversé** | Dans la forêt vivaient des **loups**. | Ce sont des loups qui vivaient |
| **pronom écran** entre sujet et verbe | Il **les** regarde. | « les » est COD, le sujet est « il » → regarde |
| **plusieurs sujets** | Le roi et la reine **arrivent**. | deux sujets = pluriel |
| sujets de personnes différentes | Toi et moi **partirons**. | 1re personne l'emporte (= nous) |
| pronom relatif **qui** | C'est moi qui **suis** là. Ce sont eux qui **ont** gagné. | « qui » prend la personne de son antécédent |
| pronom **on** | On **part** demain. | on = 3e personne du singulier |
| noms collectifs avec « la plupart » | La plupart des élèves **sont** venus. | « la plupart » → pluriel |

## L'accord dans le groupe nominal
Le **déterminant** et l'**adjectif** s'accordent en genre et en nombre avec le nom : *de belles forêts sombres*, *un vieux château abandonné*.
- Un adjectif qui qualifie plusieurs noms se met au pluriel ; si l'un est masculin, l'adjectif est au **masculin pluriel** : « un chêne et une vigne **centenaires** », « un garçon et une fille **courageux** ».
- Les adjectifs de couleur issus d'un nom (orange, marron) sont invariables : des yeux **marron**. Les adjectifs de couleur composés aussi : des robes **bleu clair**.

## Le participe passé employé avec « être »
Il s'accorde en genre et en nombre avec le **sujet** (comme un adjectif).
- « Elle est **partie**. » — « Les chevaliers sont **revenus**. » — « Les portes ont été **fermées**. »

## Le participe passé employé avec « avoir »
Il **ne s'accorde jamais avec le sujet**.
- En général, il reste **invariable** : « Elles ont **mangé**. »
- Il s'accorde avec le **COD** seulement si ce COD est placé **avant** le verbe :
  - « J'ai vu **les fées**. » → COD après : pas d'accord (vu).
  - « **Les fées** que j'ai **vues** » → COD « que » (= les fées) placé avant : accord au féminin pluriel.
  - « Ces lettres, je **les** ai **écrites**. » → COD « les » (= ces lettres) avant : accord.

>! **Méthode en 3 questions**
>! 1. Quel est l'auxiliaire ? Être → accord avec le sujet.
>! 2. Avoir → y a-t-il un COD ? (le verbe + quoi ? / qui ?)
>! 3. Ce COD est-il placé **avant** le verbe ? Oui → accord avec le COD ; non (ou pas de COD) → invariable.

## Participe passé en -é ou infinitif en -er ?
Remplace par un verbe du 3e groupe comme **prendre** ou **vendre** : « Il a mangé » → « Il a pris » → participe passé (-é). « Il va manger » → « Il va prendre » → infinitif (-er).

## Le cas des verbes pronominaux (à retenir pour l'instant)
Avec les verbes pronominaux (se lever, se promener), l'auxiliaire est « être » et le participe s'accorde le plus souvent avec le sujet : « Elle s'est **levée** tôt. » (Les cas particuliers seront étudiés plus tard.)

> **À retenir**
> Le verbe s'accorde avec son sujet : cherche-le avec « c'est... qui ».
> PP + être → accord avec le sujet.
> PP + avoir → jamais avec le sujet ; accord avec le COD seulement s'il est placé avant.
> -é ou -er ? Remplace par « prendre » : pris → -é ; prendre → -er.
`,
      exercices: [
        { type: "qcm", question: "Choisis la forme correcte : « Les cris des oiseaux ... la forêt. »", choix: ["remplit", "remplissent", "remplis", "remplissait"], reponse: 1, explication: "Le sujet est « les cris » (pluriel) et non « des oiseaux » : ce sont les cris qui remplissent la forêt." },
        { type: "saisie", question: "Accorde le participe passé : « Les princesses sont (arriver) au château. »", reponses: ["arrivées", "sont arrivées"], explication: "Auxiliaire **être** → accord avec le sujet « les princesses » (féminin pluriel) : arrivé**es**." },
        { type: "vf", question: "Dans « Elles ont chanté toute la soirée », le participe passé est correctement écrit.", reponse: true, explication: "Avec avoir, pas d'accord avec le sujet ; il n'y a pas de COD placé avant : « chanté » reste invariable." },
        { type: "saisie", question: "Accorde le participe passé : « Les histoires que tu m'as (raconter) étaient passionnantes. »", reponses: ["racontées", "as racontées"], explication: "Auxiliaire avoir ; COD « que » (= les histoires, féminin pluriel) placé **avant** le verbe → accord : racont**ées**." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["C'est moi qui a gagné.", "C'est moi qui ai gagné.", "C'est moi qui as gagné.", "C'est moi qui avons gagné."], reponse: 1, explication: "« qui » reprend « moi » (1re personne du singulier) : c'est moi qui **ai** gagné." },
        { type: "qcm", question: "Complète : « Il a ... ses clés. » / « Il va ... ses clés. »", choix: ["oublier / oublier", "oublié / oublié", "oublier / oublié", "oublié / oublier"], reponse: 3, explication: "Il a **pris** → participe passé « oublié » ; il va **prendre** → infinitif « oublier »." },
        { type: "saisie", question: "Accorde l'adjectif : « un chevalier et une dame (courageux) »", reponses: ["courageux"], explication: "Un nom masculin + un nom féminin → l'adjectif se met au **masculin pluriel** : courageux (invariable au masculin car il se termine déjà par x)." },
        { type: "vf", question: "« J'ai rencontré les voyageuses » : il faut écrire « rencontrées » car le COD est féminin pluriel.", reponse: false, explication: "Le COD « les voyageuses » est placé **après** le verbe : le participe reste invariable (« rencontré »). Comparer : « Les voyageuses que j'ai rencontrées »." },
        { type: "redaction", question: "**Dictée-correction type contrôle** : corrige les erreurs d'accord dans ce texte et justifie chaque correction : « Les chevaliers sont parti à l'aube. La princesse qu'ils ont délivré les a remercier. Le bruit des sabots résonnaient dans la vallée. Les épées qu'ils avaient forgé brillait au soleil. »", corrige: `**Texte corrigé**
« Les chevaliers sont **partis** à l'aube. La princesse qu'ils ont **délivrée** les a **remerciés**. Le bruit des sabots **résonnait** dans la vallée. Les épées qu'ils avaient **forgées** **brillaient** au soleil. »

**Justifications**
- **partis** : auxiliaire être → accord avec le sujet « les chevaliers » (masculin pluriel).
- **délivrée** : auxiliaire avoir, COD « qu' » (= la princesse, féminin singulier) placé avant → accord.
- **remerciés** : il faut un participe passé (« a pris ») et non un infinitif ; auxiliaire avoir, COD « les » (= les chevaliers, masculin pluriel) placé avant → accord.
- **résonnait** : le sujet est « le bruit » (singulier), pas « des sabots ».
- **forgées** : auxiliaire avoir, COD « qu' » (= les épées, féminin pluriel) placé avant → accord.
- **brillaient** : le sujet est « les épées » (pluriel).` }
      ]
    },
    {
      id: "orthographe-homophones",
      titre: "Orthographe lexicale et homophones grammaticaux",
      theme: "Étude de la langue",
      cours: `
## Les homophones grammaticaux
Des **homophones** se prononcent de la même façon mais s'écrivent différemment. Pour choisir, on utilise un **test de remplacement**.

| Homophones | Test | Exemples |
|---|---|---|
| **a / à** | a = avait (verbe avoir) ; à = préposition | Il **a** faim. Il va **à** Paris. |
| **et / est** | et = et puis ; est = était | Le ciel **est** bleu **et** clair. |
| **son / sont** | son = mon (déterminant) ; sont = étaient | **Son** chien et son chat **sont** là. |
| **on / ont** | on = il (pronom) ; ont = avaient | **On** dit qu'ils **ont** gagné. |
| **ou / où** | ou = ou bien ; où = lieu ou temps | Où vas-tu ? Ici **ou** là ? |
| **ce / se** | ce = cela / devant un nom ; se = devant un verbe pronominal (me, te...) | **Ce** chevalier **se** bat. |
| **ces / ses** | ces = ceux-là ; ses = les siens | **Ses** amis habitent **ces** maisons. |
| **c'est / s'est** | c'est = cela est ; s'est = verbe pronominal au passé (je me suis) | **C'est** lui qui **s'est** perdu. |
| **la / l'a / là** | la = déterminant ou pronom ; l'a = l'avait ; là = ici | Il **l'a** vue **là**, près de **la** porte. |
| **ma / m'a** | m'a = m'avait | Ma mère **m'a** appelé. |
| **mais / mes / met** | mais = cependant ; mes = les miens ; met = mettait | Il **met** **mes** gants, **mais** il a froid. |
| **peu / peut** | peut = pouvait ; peu = pas beaucoup | Il **peut** manger un **peu**. |
| **leur / leurs** | devant un verbe : leur invariable ; devant un nom pluriel : leurs | Je **leur** donne **leurs** livres. |
| **quand / quant / qu'en** | quand = lorsque ; quant à = en ce qui concerne ; qu'en = que + en | **Quand** viens-tu ? **Quant à** moi, je reste. |
| **ni / n'y** | ni = et pas ; n'y = ne + y | Il **n'y** va **ni** le lundi **ni** le mardi. |
| **sans / s'en / c'en** | sans = préposition (contraire de avec) ; s'en = se + en | Il **s'en** va **sans** bruit. |

>! **Exemple résolu** : « Il ... perdu ... clé. » → « Il a perdu sa clé » (a = avait ; sa = ma, déterminant possessif).

## Orthographe lexicale : quelques règles utiles
- **m devant m, b, p** : emporter, ombre, emmener (exceptions : bonbon, bonbonne, néanmoins, embonpoint).
- **Le son [s]** : s, ss entre deux voyelles (poisson ≠ poison), c devant e, i, y (cerise), ç devant a, o, u (garçon, reçu), t devant i (attention, nation).
- **Le son [g]** devant e, i : gu (guerre, guide) ; le son « je » [ʒ] devant a, o : ge (mangeons, geôle).
- **Les noms féminins en -é / -ée** : la plupart en -ée (une allée, une poupée) ; ceux en -té ou -tié s'écrivent -é (la liberté, l'amitié), sauf les noms de contenu (une assiettée, une pelletée) et la dictée, la montée, la jetée, la portée, la pâtée.
- **Les noms en -eur** : sans e final (la peur, la douleur), sauf l'heure, la demeure, le beurre.
- **Les noms en -oir / -oire** : masculins souvent en -oir (le couloir, le miroir), féminins en -oire (la mémoire, la victoire) ; mais quelques masculins en -oire (le territoire, le laboratoire).

## Lettres muettes : penser à la famille de mots
Pour trouver la lettre finale muette, cherche un mot de la même famille : *un chant* (chanter), *un regard* (regarder), *le galop* (galoper), *un tapis* (tapisser), *le sang* (sanguin).

## Les pluriels particuliers
- noms en -al → -aux (cheval → chevaux), sauf bal, carnaval, chacal, festival, récital, régal → -als ;
- noms en -ail → -ails, sauf bail, corail, émail, soupirail, travail, vantail, vitrail → -aux ;
- noms en -ou → -ous, sauf bijou, caillou, chou, genou, hibou, joujou, pou → -oux ;
- noms en -eau, -au, -eu → -x (des châteaux, des tuyaux, des jeux), sauf landau, sarrau, bleu, pneu, émeu → -s.

> **À retenir**
> Pour choisir entre deux homophones, remplace : a/avait, est/était, son/mon, on/il, ou/ou bien, ses/les siens, ces/ceux-là.
> m devant m, b, p.
> Une lettre muette se retrouve grâce à la famille du mot.
`,
      exercices: [
        { type: "qcm", question: "Complète : « Ils ... toujours rêvé de voyager. »", choix: ["ont", "on", "sont", "son"], reponse: 0, explication: "On peut dire « ils avaient rêvé » : c'est le verbe avoir, « ont »." },
        { type: "qcm", question: "Complète : « ... chevalier ... battu courageusement. »", choix: ["Se / ce", "Ce / s'est", "Ce / c'est", "Se / s'est"], reponse: 1, explication: "« Ce » est un déterminant démonstratif devant le nom. « s'est battu » : verbe pronominal « se battre » (je me suis battu)." },
        { type: "saisie", question: "Complète avec « ou » ou « où » : « ... as-tu caché le trésor ? »", reponses: ["où"], explication: "Il s'agit d'une question sur le lieu : **où** (avec accent). N'oublie pas l'accent grave !" },
        { type: "vf", question: "Dans « Je leurs ai parlé », l'orthographe de « leurs » est correcte.", reponse: false, explication: "Devant un verbe, « leur » est un pronom personnel et reste toujours **invariable** : « Je leur ai parlé »." },
        { type: "saisie", question: "Écris correctement le pluriel de « un vitrail ».", reponses: ["des vitraux", "vitraux"], explication: "Vitrail fait partie des exceptions en -ail qui font -aux : des **vitraux** (comme travail → travaux)." },
        { type: "qcm", question: "Quelle orthographe est correcte ?", choix: ["la liberté", "la libertée", "la libertté", "la libertè"], reponse: 0, explication: "Les noms féminins en -té s'écrivent sans e final : la liberté, la beauté, la bonté." },
        { type: "saisie", question: "Complète avec « peu » ou « peut » : « Il ne ... pas venir ce soir. »", reponses: ["peut"], explication: "On peut dire « il ne pouvait pas venir » : verbe pouvoir → **peut**." },
        { type: "qcm", question: "Quel mot est mal orthographié ?", choix: ["emporter", "embrasser", "enmener", "ombre"], reponse: 2, explication: "Devant m, b, p, on écrit m : **emmener**. Les autres sont corrects." },
        { type: "redaction", question: "**Exercice type contrôle** : complète le texte avec les homophones qui conviennent et justifie trois de tes choix : « Le marin ... (a/à) vu ... (ces/ses) compagnons partir. ... (Quand/Quant) ... (a/à) lui, il ... (c'est/s'est) caché ... (la/là/l'a) ... (ou/où) personne ne ... (peu/peut) le trouver. ... (Ses/Ces) amis ... (on/ont) cherché longtemps ... (et/est) ils ... (son/sont) repartis. »", corrige: `**Texte complété**
« Le marin **a** vu **ses** compagnons partir. **Quant** **à** lui, il **s'est** caché **là** **où** personne ne **peut** le trouver. **Ses** amis **ont** cherché longtemps **et** ils **sont** repartis. »

**Justifications (exemples)**
- **a** vu : on peut dire « avait vu » → verbe avoir.
- **ses** compagnons : les siens, ce sont les compagnons du marin → déterminant possessif. (« ces » serait possible si l'on montrait les compagnons, mais le sens indique la possession.)
- **Quant à** : signifie « en ce qui concerne » → quant.
- **s'est** caché : verbe pronominal « se cacher » (je me suis caché).
- **là** : signifie « à cet endroit ».
- **où** : indique le lieu.
- **peut** : « pouvait » → verbe pouvoir.
- **ont** cherché : « avaient cherché » ; **et** : « et puis » ; **sont** : « étaient ».` }
      ]
    },
    {
      id: "formation-des-mots",
      titre: "Le lexique : formation des mots, sens et niveaux de langue",
      theme: "Étude de la langue",
      cours: `
## Radical, préfixe, suffixe
Un mot peut se décomposer en plusieurs éléments :
- le **radical** porte le sens principal : *terr-* dans terrain, enterrer, terrestre ;
- le **préfixe** se place **avant** le radical et modifie son sens : **im**possible, **re**venir, **dé**faire ;
- le **suffixe** se place **après** le radical et change souvent la classe du mot : chant**eur** (nom), rapide**ment** (adverbe), lav**able** (adjectif).

## Préfixes et suffixes fréquents
| Préfixe | Sens | Exemple |
|---|---|---|
| in-, im-, il-, ir- | contraire | inutile, impossible, illisible, irréel |
| dé-, dés- | contraire, séparation | défaire, désobéir |
| re-, ré- | de nouveau | refaire, réécrire |
| pré- | avant | préhistoire, prévoir |
| anti- | contre | antivol |
| sub-, sous- | sous | sous-marin, subaquatique |

| Suffixe | Sens / classe | Exemple |
|---|---|---|
| -eur, -euse, -ier | celui qui fait (nom) | voyageur, jardinier |
| -ette, -et, -on | diminutif | maisonnette, garçonnet, chaton |
| -able, -ible | qui peut être (adjectif) | mangeable, lisible |
| -ment | manière (adverbe) | lentement |
| -age, -tion | action (nom) | lavage, création |
| -âtre | péjoratif (dépréciatif) | rougeâtre |

## Dérivation et composition
- **Dérivation** : on ajoute un préfixe et/ou un suffixe à un radical : *table → tablette*, *heureux → malheureux*.
- **Composition** : on assemble des mots existants : *chou-fleur*, *pomme de terre*, *portefeuille*, *arc-en-ciel*.
- **Famille de mots** : tous les mots formés sur le même radical : *terre, terrain, terrestre, enterrer, atterrir, souterrain*.

## L'étymologie : le latin et le grec
La plupart des mots français viennent du **latin**. Beaucoup de mots savants viennent du **grec**.
| Racine | Origine | Sens | Mots |
|---|---|---|---|
| aqua | latin | eau | aquarium, aquatique |
| pater / mater | latin | père / mère | paternel, maternel |
| bio | grec | vie | biologie |
| géo | grec | terre | géographie |
| graphe | grec | écrire | autographe, orthographe |
| phone | grec | voix, son | téléphone, microphone |
| logie | grec | science, discours | zoologie |
| chrono | grec | temps | chronologie |

## Le sens des mots
- **Polysémie** : un mot a plusieurs sens : *une feuille* (d'arbre, de papier).
- **Sens propre / sens figuré** : « un cœur qui bat » (propre) / « un cœur de pierre » (figuré).
- **Synonymes** : mots de sens proche : *peur, effroi, frayeur, terreur* (attention aux nuances d'intensité).
- **Antonymes** : mots de sens contraire : *courageux / lâche*.
- **Homonymes** : même prononciation, sens différent : *verre, vert, ver, vers, vair*.
- **Mot générique** (terme général) / **mot spécifique** : *arbre* / *chêne, sapin*.

## Les niveaux (registres) de langue
| Niveau | Où ? | Exemple |
|---|---|---|
| familier | à l'oral, entre amis | J'ai la trouille. / Une bagnole |
| courant | dans la plupart des situations | J'ai peur. / Une voiture |
| soutenu | à l'écrit, littérature, discours officiel | Je suis effrayé. / Un véhicule |

> **À retenir**
> Préfixe avant le radical, suffixe après. Dérivation = ajout d'affixes ; composition = assemblage de mots.
> Les mots d'une même famille partagent un radical.
> Polysémie, sens propre / figuré, synonymes, antonymes, homonymes.
> Trois niveaux de langue : familier, courant, soutenu.
`,
      exercices: [
        { type: "saisie", question: "Quel est le préfixe du mot « impossible » ?", reponses: ["im", "im-"], explication: "« im- » exprime le contraire ; il remplace « in- » devant p, b, m (impossible, imbuvable, immobile)." },
        { type: "qcm", question: "Quel mot n'appartient pas à la famille de « terre » ?", choix: ["atterrir", "souterrain", "terrible", "terrestre"], reponse: 2, explication: "« Terrible » vient du latin *terribilis* (« qui effraie », de la famille de *terror*, la terreur), pas de *terra* (la terre)." },
        { type: "vf", question: "« Chou-fleur » est un mot formé par composition.", reponse: true, explication: "Il est formé de deux mots existants, « chou » et « fleur », reliés par un trait d'union." },
        { type: "qcm", question: "Que signifie la racine grecque « chrono » ?", choix: ["la vie", "l'eau", "la voix", "le temps"], reponse: 3, explication: "*Chronos* = le temps : chronologie, chronomètre, anachronisme." },
        { type: "qcm", question: "Dans « Il a un cœur de pierre », le mot « pierre » est employé :", choix: ["au sens propre", "au sens figuré", "comme homonyme", "comme antonyme"], reponse: 1, explication: "Un cœur de pierre est un cœur insensible : « pierre » est pris au sens figuré (dureté)." },
        { type: "saisie", question: "Donne un antonyme de « courageux » (un mot).", reponses: ["lâche", "peureux", "craintif", "poltron", "couard", "timoré", "froussard", "lache", "timore"], explication: "Antonymes possibles : lâche, peureux, poltron, couard, craintif..." },
        { type: "qcm", question: "À quel niveau de langue appartient « Il s'est fait virer » ?", choix: ["Soutenu", "Courant", "Familier", "Littéraire"], reponse: 2, explication: "« Virer » (renvoyer) est familier. Courant : « Il a été renvoyé ». Soutenu : « Il a été congédié »." },
        { type: "saisie", question: "Quel suffixe permet de former un diminutif de « maison » ? (indique le suffixe, ex. -xxx)", reponses: ["-ette", "ette", "-nette", "nette"], explication: "maison → maison**nette** (suffixe diminutif -ette, avec doublement du n)." },
        { type: "redaction", question: "**Exercice type contrôle** : 1) Décompose les mots « inoubliable », « déraisonnable » et « refroidissement » (préfixe, radical, suffixe). 2) Donne quatre mots de la famille de « lire ». 3) Range ces synonymes du plus faible au plus fort : terreur, inquiétude, peur, épouvante.", corrige: `**1) Décomposition**
- in- (préfixe, contraire) + oubli (radical) + -able (suffixe, « qui peut être ») → *inoubliable* : qu'on ne peut pas oublier.
- dé- (préfixe, contraire) + raison (radical) + -able (suffixe) → *déraisonnable*.
- re- (préfixe, de nouveau) + froid (radical) + -iss- + -ement (suffixe, action) → *refroidissement*.

**2) Famille de « lire »** : lecteur, lecture, lisible, illisible, relire, lisiblement, lectrice.

**3) Gradation** : inquiétude → peur → terreur → épouvante.
(L'inquiétude est un léger malaise ; la peur un sentiment net ; la terreur et l'épouvante une peur extrême. On accepte terreur et épouvante dans l'un ou l'autre ordre si on le justifie.)` }
      ]
    },
    {
      id: "figures-et-types-de-textes",
      titre: "Figures de style et types de textes",
      theme: "Lire et comprendre",
      cours: `
## Les figures de style
Une **figure de style** est une façon particulière d'utiliser les mots pour produire un **effet** (frapper, émouvoir, faire voir). Il ne suffit pas de la nommer : il faut dire **son effet**.

| Figure | Définition | Exemple | Effet |
|---|---|---|---|
| **comparaison** | rapproche deux éléments avec un **outil de comparaison** (comme, tel, pareil à, semblable à, ressembler) | Ses yeux brillent **comme** des étoiles. | rend l'image concrète |
| **métaphore** | rapproche deux éléments **sans** outil de comparaison | Ses yeux sont des étoiles. | image plus forte, plus surprenante |
| **personnification** | attribue des traits humains à une chose ou un animal | Le vent **hurle** sa colère. | rend la nature vivante, menaçante |
| **hyperbole** | exagération | Je te l'ai dit **mille fois**. | insister, impressionner |
| **énumération** | suite de mots de même nature | Il prit son épée, son bouclier, son casque, sa lance. | abondance, rythme |
| **gradation** | énumération d'intensité croissante (ou décroissante) | « Va, cours, vole, et nous venge. » (Corneille, *Le Cid*) | montée de l'émotion |
| **répétition / anaphore** | reprise d'un mot (en début de vers ou de phrase : anaphore) | « **Rome**, l'unique objet de mon ressentiment ! / **Rome**, à qui vient ton bras d'immoler mon amant ! » (Corneille, *Horace*) | insistance, rythme |
| **antithèse** | rapproche deux mots ou idées opposés | Je vis, je meurs. | souligne un contraste |
| **allitération** | répétition d'un son consonne | Pour qui **s**ont ces **s**erpents qui **s**ifflent... (Racine) | fait entendre (le sifflement) |
| **assonance** | répétition d'un son voyelle | « Tout m'afflige et me nuit et conspire à me nuire » (Racine, *Phèdre*) : son [i] | musicalité |

>! **Comparaison ou métaphore ?** Cherche l'outil : « comme » → comparaison. Pas d'outil → métaphore. Attention : « comme » n'est pas toujours un outil de comparaison (« Comme il pleuvait, je suis resté » = cause).

## Les types de textes
| Type | But | Indices |
|---|---|---|
| **narratif** | raconter une histoire | personnages, actions, temps du récit (passé simple, imparfait), connecteurs de temps |
| **descriptif** | faire voir un lieu, un objet, un personnage | imparfait, adjectifs, indicateurs de lieu, cinq sens |
| **explicatif** | faire comprendre, informer | présent de vérité générale, vocabulaire précis, connecteurs logiques (car, donc) |
| **argumentatif** | convaincre, défendre une opinion | thèse, arguments, exemples, connecteurs (d'abord, de plus, cependant, ainsi) |
| **injonctif** (prescriptif) | faire agir | impératif, infinitif (recettes, règles, notices) |

Un texte mêle souvent plusieurs types : un roman contient des passages narratifs, descriptifs, des dialogues...

## Les genres littéraires
- **récit** (roman, conte, nouvelle, fable en prose) ;
- **poésie** (vers, rimes, strophes ; ou poème en prose) ;
- **théâtre** (dialogue, didascalies, destiné à être joué) ;
- **texte argumentatif** (essai, fable avec morale, lettre).

## Quelques mots de la poésie (5e)
- un **vers** : une ligne de poème ; on compte ses **syllabes** : 8 syllabes = octosyllabe, 10 = décasyllabe, 12 = **alexandrin** ;
- une **strophe** : groupe de vers (quatrain = 4 vers, tercet = 3 vers) ;
- les **rimes** : suivies (AABB), croisées (ABAB), embrassées (ABBA).

> **À retenir**
> Nommer une figure ne suffit pas : explique toujours son **effet**.
> Comparaison (avec outil) ≠ métaphore (sans outil).
> Cinq types de textes : narratif, descriptif, explicatif, argumentatif, injonctif.
`,
      exercices: [
        { type: "qcm", question: "« La lune était une pièce d'argent posée sur la nuit. » Quelle figure de style ?", choix: ["Comparaison", "Hyperbole", "Métaphore", "Énumération"], reponse: 2, explication: "La lune est rapprochée d'une pièce d'argent **sans outil de comparaison** : c'est une métaphore." },
        { type: "qcm", question: "« J'ai une faim de loup, je pourrais manger un bœuf entier ! » Quelle figure domine ?", choix: ["L'hyperbole", "L'antithèse", "La personnification", "L'allitération"], reponse: 0, explication: "On exagère volontairement la faim : c'est une hyperbole." },
        { type: "vf", question: "« Il est fort comme un lion » contient une comparaison.", reponse: true, explication: "Il y a un outil de comparaison, « comme », qui rapproche « il » (comparé) et « un lion » (comparant)." },
        { type: "saisie", question: "Comment s'appelle un vers de douze syllabes ?", reponses: ["alexandrin", "un alexandrin"], explication: "L'**alexandrin** compte 12 syllabes ; c'est le vers le plus utilisé de la poésie et du théâtre classiques." },
        { type: "qcm", question: "Une recette de cuisine est un texte surtout :", choix: ["narratif", "argumentatif", "descriptif", "injonctif"], reponse: 3, explication: "Elle dit quoi faire (impératif ou infinitif : « Battez les œufs », « Ajouter le sucre ») : type injonctif." },
        { type: "qcm", question: "Dans « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Racine), la répétition du son [s] est :", choix: ["une assonance", "une allitération", "une anaphore", "une gradation"], reponse: 1, explication: "C'est la répétition d'un son **consonne** : allitération en [s], qui imite le sifflement des serpents." },
        { type: "saisie", question: "Comment appelle-t-on une strophe de quatre vers ?", reponses: ["quatrain", "un quatrain"], explication: "Quatrain = 4 vers ; tercet = 3 vers ; distique = 2 vers." },
        { type: "vf", question: "Dans « Comme la nuit tombait, ils allumèrent un feu », il y a une comparaison.", reponse: false, explication: "Ici « comme » signifie « parce que » : il introduit une cause. Il n'y a pas de rapprochement entre deux éléments." },
        { type: "redaction", question: "**Exercice type contrôle** : Lis ces vers : « La mer, sous le ciel noir, grondait comme un lion ; / Les vagues, tels des monstres, s'élançaient vers le port, / Et le vent, furieux, hurlait sa colère. » Relève et nomme trois figures de style, puis explique en quelques lignes l'effet produit.", corrige: `**Relevé**
1. « grondait comme un lion » : **comparaison** (outil « comme ») ; la mer (comparé) est rapprochée d'un lion (comparant). C'est aussi une **personnification** de la mer, qui « gronde ».
2. « Les vagues, tels des monstres » : **comparaison** (outil « tels »).
3. « le vent, furieux, hurlait sa colère » : **personnification** : le vent a des sentiments (« furieux », « colère ») et une voix (« hurlait »).

**Effet**
Ces figures transforment les éléments naturels en créatures vivantes, sauvages et dangereuses (lion, monstres, être en colère). La tempête devient un combat : le lecteur ressent la violence et la menace de la nature contre les hommes. Le champ lexical du bruit (grondait, hurlait) renforce cette impression.` }
      ]
    },
    {
      id: "methode-redaction",
      titre: "Méthode : réussir sa rédaction et ses réponses rédigées",
      theme: "Écrire",
      cours: `
## Étape 1 : comprendre le sujet
Lis le sujet **deux fois** et souligne les consignes :
- **qui** raconte ? (« je » = narrateur-personnage ; « il » = narrateur extérieur) ;
- **quel temps** ? (passé simple + imparfait, ou présent) ;
- **quel type de texte** ? (récit, description, dialogue, lettre, argumentation) ;
- **quelle longueur** ? ;
- **quelles contraintes** ? (insérer un dialogue, une description, exprimer des sentiments...).

## Étape 2 : chercher des idées et faire un plan au brouillon
Pour un récit, construis ton **schéma narratif** en quelques mots :
1. Situation initiale : qui ? où ? quand ?
2. Élément perturbateur.
3. Péripéties (deux ou trois).
4. Élément de résolution.
5. Situation finale.

>! **Conseil** : n'écris pas tout ton texte au brouillon ; note le plan, des idées et du vocabulaire. Garde du temps pour recopier et relire.

## Étape 3 : rédiger
- **Paragraphes** : un paragraphe par étape (aller à la ligne avec un alinéa).
- **Connecteurs de temps** : d'abord, puis, ensuite, soudain, tout à coup, alors, enfin, le lendemain, quelques heures plus tard.
- **Temps du récit** : passé simple (actions) / imparfait (descriptions). Ne mélange pas présent et passé.
- **Vocabulaire précis** : évite « faire », « il y a », « dire » répétés. Utilise des verbes précis : *s'écria, murmura, répliqua, chuchota*.
- **Reprises** du personnage pour éviter les répétitions : pronoms (il), synonymes (le jeune homme, le voyageur, notre héros).

## Le dialogue : la ponctuation
1. Ouvre les **guillemets** (« ) au début du dialogue.
2. Chaque changement de personnage : **retour à la ligne + tiret** (—).
3. La proposition incise (*dit-il*, *répondit-elle*) est inversée et encadrée de virgules.
4. Ferme les guillemets (») à la fin.

>! « Où vas-tu ? demanda le roi.
>! — Je pars à l'aventure, répondit le chevalier.
>! — Reviendras-tu un jour ? »

## La description dans le récit
Organise-la (de près à loin, de haut en bas), fais appel aux sens, utilise l'imparfait, des adjectifs et des comparaisons. Une description doit **servir** l'histoire (créer une ambiance, annoncer un danger).

## Exprimer les sentiments
Utilise un vocabulaire varié (peur, angoisse, terreur ; joie, enthousiasme ; colère, rage), des manifestations physiques (« mon cœur battait à tout rompre », « mes mains tremblaient »), des phrases exclamatives ou interrogatives.

## Étape 4 : se relire (au moins 10 minutes)
- accords sujet-verbe et participes passés ;
- terminaisons -ai / -ais, -é / -er ;
- homophones (a/à, et/est, son/sont...) ;
- majuscules, points, ponctuation du dialogue.

## Les réponses rédigées aux questions de lecture
Une bonne réponse : **une phrase complète** qui reprend la question + une **justification** avec une **citation** entre guillemets (et la ligne) + une **explication**.

>! **Question** : « Quel sentiment éprouve le héros ? » → **Réponse** : « Le héros éprouve de la peur. On le voit à la ligne 4 : “ses mains tremblaient”. Ce détail physique montre qu'il est terrifié à l'idée d'entrer dans la grotte. »

> **À retenir**
> Comprendre le sujet → brouillon (schéma narratif) → rédiger en paragraphes → se relire.
> Passé simple pour les actions, imparfait pour les descriptions.
> Réponse de lecture : phrase complète + citation + explication.
`,
      exercices: [
        { type: "qcm", question: "Dans un dialogue, que fais-tu à chaque changement de personnage ?", choix: ["Je mets un point-virgule", "Je change de paragraphe sans rien mettre", "Je reviens à la ligne et j'ouvre un tiret", "J'ouvre de nouveaux guillemets"], reponse: 2, explication: "Les guillemets encadrent tout le dialogue ; on passe à la ligne avec un tiret à chaque changement d'interlocuteur." },
        { type: "vf", question: "Dans une rédaction au passé, on peut mélanger librement le présent et le passé simple.", reponse: false, explication: "Il faut garder un système de temps cohérent : passé simple et imparfait (plus-que-parfait pour l'antériorité). Le présent se réserve aux dialogues (ou aux vérités générales)." },
        { type: "qcm", question: "Quelle incise est correctement écrite ?", choix: ["« Viens ici, il cria. »", "« Viens ici ! cria-t-il. »", "« Viens ici, cria il. »", "« Viens ici. Il cria-t-il. »"], reponse: 1, explication: "L'incise est inversée (verbe + sujet) et reliée par un trait d'union, avec -t- euphonique entre deux voyelles : « cria-t-il »." },
        { type: "saisie", question: "Combien d'étapes compte le schéma narratif ? (en chiffres)", reponses: ["5", "cinq"], explication: "Situation initiale, élément perturbateur, péripéties, élément de résolution, situation finale : **5** étapes." },
        { type: "qcm", question: "Quel verbe remplace le mieux « dit » dans « “Attention !” dit-il très fort » ?", choix: ["murmura-t-il", "chuchota-t-il", "soupira-t-il", "s'écria-t-il"], reponse: 3, explication: "« S'écrier », c'est dire en criant : le verbe précis remplace « dit très fort »." },
        { type: "vf", question: "Une bonne réponse à une question de lecture contient une citation du texte entre guillemets et une explication.", reponse: true, explication: "On attend : une phrase complète qui répond, une citation qui prouve, une explication qui analyse la citation." },
        { type: "redaction", question: "**Sujet de rédaction (type brevet blanc, 5e)** : Un jeune écuyer rêve de devenir chevalier. Un jour, il doit affronter seul une épreuve pour prouver sa valeur. Raconte cette aventure en 25 à 30 lignes. Ton texte comportera un passage descriptif et un court dialogue, et sera écrit au passé.", corrige: `**Grille d'évaluation**
- respect du sujet : un écuyer, une épreuve, une transformation (il devient chevalier ou comprend ce qu'est la vraie valeur) ;
- schéma narratif complet et paragraphes ;
- **passé simple / imparfait** maîtrisés ;
- une **description** (lieu de l'épreuve, adversaire) avec sens et comparaisons ;
- un **dialogue** correctement ponctué (guillemets, tirets, incises) ;
- valeurs chevaleresques (courage, loyauté, générosité) ;
- orthographe et syntaxe.

**Exemple de copie (extraits)**
Dans le château du seigneur Bertrand vivait un jeune écuyer nommé Gauvain. Chaque matin, il polissait les armes de son maître et rêvait du jour où il recevrait, lui aussi, l'épée des chevaliers.

Un soir d'hiver, un paysan affolé entra dans la grande salle. Un loup gigantesque dévorait les troupeaux du village. Le seigneur, blessé, ne pouvait combattre. Gauvain s'avança :
« Seigneur, laissez-moi y aller, supplia-t-il.
— Tu n'es qu'un écuyer, répondit le vieux chevalier. Mais si tu reviens vainqueur, tu seras adoubé. »

Le lendemain, Gauvain pénétra dans la forêt. Les arbres noirs, couverts de givre, se dressaient comme des géants immobiles ; un silence glacé régnait, et l'odeur des bêtes sauvages flottait dans l'air. Soudain, deux yeux jaunes brillèrent entre les branches...

Le combat fut terrible. Mais au moment de frapper le loup blessé, Gauvain aperçut derrière lui trois louveteaux affamés. Il comprit que la bête ne tuait que pour nourrir ses petits. Il l'épargna et la chassa vers la montagne, loin du village.

De retour au château, il raconta tout à son seigneur. Celui-ci sourit : « Le courage frappe, mais la sagesse sait épargner. Tu es digne d'être chevalier. » Le dimanche suivant, Gauvain fut adoubé.` }
      ]
    },
    {
      id: "paroles-rapportees",
      titre: "Les paroles rapportées : discours direct et discours indirect",
      theme: "Étude de la langue",
      cours: `
## Deux façons de rapporter des paroles
Dans un récit, le narrateur peut rapporter les paroles d'un personnage de deux manières principales.

| | Discours direct | Discours indirect |
|---|---|---|
| Principe | les paroles sont **citées telles quelles** | les paroles sont **intégrées** à la phrase du narrateur |
| Ponctuation | deux-points, **guillemets**, tirets dans un dialogue | **pas** de guillemets ni de deux-points |
| Construction | verbe de parole avant, ou **incise** (*dit-il*) | verbe de parole + **subordonnée** (*que*, *si*...) ou **de + infinitif** |
| Exemple | Le roi déclara : « Je pars demain. » | Le roi déclara **qu'il partait le lendemain**. |

**Les verbes de parole** (verbes introducteurs) : dire, déclarer, annoncer, demander, répondre, répliquer, s'écrier, murmurer, chuchoter, ordonner, supplier... Choisis le plus précis !

## Passer du discours direct au discours indirect
Il faut faire **quatre transformations**.

**1. Les personnes** : on adopte le point de vue du narrateur.
- « **Je** suis prêt », dit Paul. → Paul dit qu'**il** est prêt.
- « **Nous** avons gagné », crièrent les enfants. → Les enfants crièrent qu'**ils** avaient gagné.

**2. Le type de phrase** : le mot qui introduit les paroles change.
| Paroles au discours direct | Au discours indirect | Exemple |
|---|---|---|
| phrase déclarative | **que** | Il affirme **qu'il** viendra. |
| question totale (réponse oui / non) | **si** | Elle demande **s'il** viendra. |
| question partielle | le mot interrogatif (**où, quand, comment, pourquoi, qui**) | Elle demande **où** il va. |
| « qu'est-ce que... ? » | **ce que** | Elle demande **ce qu'**il veut. |
| ordre (impératif) | **de** + infinitif | Il lui ordonne **de** partir. |

Au discours indirect, la question perd son point d'interrogation et l'**inversion du sujet** : « Où vas-tu ? » → Il me demande **où je vais** (et non « où vais-je » ni « où est-ce que je vais »).

**3. Les temps**, quand le verbe de parole est **au passé** :
| Au discours direct | Au discours indirect (verbe introducteur au passé) |
|---|---|
| présent : « Je **suis** fatigué. » | imparfait : il dit qu'il **était** fatigué |
| passé composé : « J'**ai perdu** ma clé. » | plus-que-parfait : il dit qu'il **avait perdu** sa clé |
| futur : « Je **viendrai**. » | conditionnel présent : il dit qu'il **viendrait** |

Si le verbe de parole est au **présent** (« il dit »), les temps ne changent pas : « Je suis fatigué », dit-il. → Il dit qu'il **est** fatigué.

**4. Les indications de temps et de lieu**, quand le verbe de parole est au passé :
| Discours direct | Discours indirect |
|---|---|
| aujourd'hui, maintenant | ce jour-là, alors |
| hier | la veille |
| demain | le lendemain |
| ici | là |

>! **Exemple complet** : Le chevalier a déclaré : « Je partirai demain et je reviendrai ici. »
>! → Le chevalier a déclaré **qu'il partirait le lendemain et qu'il reviendrait là**.
>! Personne : je → il ; type : phrase déclarative → que ; temps : futur → conditionnel ; indicateurs : demain → le lendemain, ici → là.

## Le discours narrativisé et le discours indirect libre
- **Discours narrativisé** : le narrateur résume les paroles sans les citer : *Il lui raconta toute son aventure.*
- **Discours indirect libre** (tu l'étudieras surtout en 4e) : les paroles ou les pensées sont rapportées sans verbe de parole ni guillemets, aux temps du récit : *Il hésitait. Partirait-il demain ? Personne ne l'attendait plus.*

## Pourquoi choisir l'un ou l'autre ?
- Le **discours direct** rend la scène **vivante** : on entend la voix du personnage, ses émotions, son niveau de langue.
- Le **discours indirect** est plus **rapide** et permet au narrateur de garder le fil du récit.

> **À retenir**
> Discours direct : paroles citées, guillemets et tirets, incise inversée (dit-il).
> Discours indirect : verbe de parole + que / si / mot interrogatif / ce que / de + infinitif ; pas de guillemets.
> Avec un verbe de parole au passé : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel ; demain → le lendemain, hier → la veille, ici → là.
`,
      exercices: [
        { type: "qcm", question: "Dans quelle phrase les paroles sont-elles rapportées au **discours direct** ?", choix: ["Le marin annonça qu'une tempête approchait.", "Le marin annonça : « Une tempête approche ! »", "Le marin raconta la tempête.", "Le marin demanda si la tempête approchait."], reponse: 1, explication: "Les paroles sont citées telles quelles, après deux-points et entre guillemets : discours direct. Les phrases 1 et 4 sont au discours indirect, la phrase 3 résume les paroles (discours narrativisé)." },
        { type: "vf", question: "Au discours indirect, les paroles rapportées sont placées entre guillemets.", reponse: false, explication: "Au discours indirect, les paroles sont intégrées à la phrase du narrateur par un verbe de parole et une subordonnée : il n'y a ni guillemets ni deux-points." },
        { type: "saisie", question: "Complète au discours indirect : « Je suis fatigué », a dit le chevalier. → Le chevalier a dit qu'il ... fatigué. (un seul mot)", reponses: ["était", "qu'il était", "il était"], explication: "Le verbe de parole est au passé (« a dit ») : le présent « suis » devient l'imparfait **était** ; « je » devient « il »." },
        { type: "qcm", question: "Quelle est la bonne transformation au discours indirect de : Elle m'a demandé : « Où vas-tu ? »", choix: ["Elle m'a demandé où vas-tu.", "Elle m'a demandé où est-ce que j'allais.", "Elle m'a demandé où j'allais.", "Elle m'a demandé si où j'allais."], reponse: 2, explication: "Au discours indirect, la question partielle garde le mot interrogatif « où », mais perd l'inversion, « est-ce que » et le point d'interrogation ; le présent devient imparfait (verbe introducteur au passé) : « où j'allais »." },
        { type: "saisie", question: "Complète : Il a déclaré : « Je partirai demain. » → Il a déclaré qu'il partirait ... (indicateur de temps)", reponses: ["le lendemain", "lendemain"], explication: "Le verbe de parole est au passé : « demain » devient **le lendemain** (et le futur « partirai » devient le conditionnel « partirait »)." },
        { type: "qcm", question: "« Viendras-tu au tournoi ? » demanda Perceval à son ami. Au discours indirect, on écrit : Perceval demanda à son ami ...", choix: ["que viendrait-il au tournoi.", "s'il viendrait au tournoi.", "si viendras-tu au tournoi.", "qu'il viendra au tournoi."], reponse: 1, explication: "C'est une question totale (réponse oui / non) : elle est introduite par **si** (s'il). Le futur « viendras » devient le conditionnel « viendrait » car « demanda » est au passé, et « tu » devient « il »." },
        { type: "saisie", question: "Complète au discours indirect : « Ferme la porte ! » m'a dit ma mère. → Ma mère m'a dit ... la porte. (deux mots)", reponses: ["de fermer"], explication: "Un ordre à l'impératif devient **de + infinitif** au discours indirect : Ma mère m'a dit **de fermer** la porte." },
        { type: "vf", question: "Dans « Il dit qu'il est prêt », le verbe de parole est au présent, donc le temps des paroles ne change pas.", reponse: true, explication: "« Je suis prêt », dit-il → Il dit qu'il **est** prêt. Les temps ne changent que si le verbe de parole est au passé : Il a dit qu'il **était** prêt." },
        { type: "redaction", question: "**Exercice type contrôle** : 1) Réécris ce dialogue au discours indirect, en commençant par « Le vieil homme demanda au voyageur... » : « D'où venez-vous ? demanda le vieil homme au voyageur. — Je viens de la montagne, répondit celui-ci. J'ai marché toute la nuit et je repartirai demain. » 2) Réécris au discours direct, avec une incise : « La reine ordonna aux gardes de fermer les portes du château. »", corrige: `**1) Au discours indirect**
« Le vieil homme demanda au voyageur **d'où il venait**. Celui-ci répondit **qu'il venait de la montagne**, **qu'il avait marché toute la nuit** et **qu'il repartirait le lendemain**. »

**Les transformations à justifier**
- **Personnes** : « vous » / « je » → « il » (le voyageur).
- **Types de phrases** : la question partielle garde le mot interrogatif « d'où », sans inversion ni point d'interrogation ; les phrases déclaratives sont introduites par « que » (répété devant chaque proposition).
- **Temps** (verbes de parole au passé simple) : présent « venez », « viens » → imparfait « venait » ; passé composé « ai marché » → plus-que-parfait « avait marché » ; futur « repartirai » → conditionnel « repartirait ».
- **Indicateur de temps** : « demain » → « le lendemain ».

**2) Au discours direct**
« Fermez les portes du château ! » ordonna la reine aux gardes.
- L'ordre retrouve l'**impératif** (« Fermez »), la 2e personne du pluriel (la reine parle aux gardes) et le point d'exclamation.
- L'**incise** « ordonna la reine » est inversée (verbe + sujet) ; après un point d'exclamation, elle commence par une minuscule.` }
      ]
    },
  ],
};
