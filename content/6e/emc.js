export default {
  chapitres: [
    {
      id: "delegue-de-classe",
      titre: "Le délégué de classe : représenter les autres",
      theme: "Représenter les autres et servir l'intérêt général",
      cours: `
## 1. Une classe, ce sont des élèves qui ont besoin d'une voix
En 6e, tu arrives dans un collège où il y a beaucoup d'élèves, de professeurs et d'adultes. Toute la classe ne peut pas parler en même temps aux adultes : elle choisit donc des **représentants**, les **délégués de classe**.
- **Représenter**, c'est **parler et agir au nom des autres**, pas seulement en son propre nom.
- Un **représentant** est choisi par un **vote** : on dit qu'il est **élu**. Ceux qui votent sont les **électeurs**.

## 2. L'élection des délégués
- Chaque classe élit **deux délégués** et **deux suppléants** (ils remplacent les délégués absents), pour **toute l'année scolaire**.
- L'élection a lieu dans les premières semaines de l'année. **Tous les élèves** de la classe sont **électeurs** et peuvent être **candidats**.
- Le vote est **secret** (bulletin dans une urne, personne ne sait pour qui tu as voté) et **personnel** (personne ne vote à ta place).
- Pour être élu au **premier tour**, il faut la **majorité absolue** (plus de la moitié des voix). Sinon, on organise un **second tour** : celui qui obtient le plus de voix est élu. En cas d'égalité des voix, c'est le **plus jeune** des candidats qui est élu (c'est la règle prévue pour les élections d'élèves).

>! **Exemple** : avant le vote, chaque candidat présente sa **profession de foi** : « Je serai à l'écoute de tous, je transmettrai vos questions aux professeurs et je vous rendrai compte du conseil de classe. » On vote pour celui qui sera le meilleur **porte-parole**, pas forcément pour son meilleur ami.

## 3. Les missions du délégué
- **Écouter** les élèves de la classe et **transmettre** leurs questions, leurs propositions ou leurs difficultés aux adultes (professeur principal, CPE, principal).
- **Participer au conseil de classe**, à la fin de chaque trimestre ou semestre : il présente l'avis de la classe, écoute, puis **rend compte** à ses camarades de ce qui s'est dit (sans répéter les remarques personnelles sur un élève).
- **Aider à la vie de la classe** : accueillir un nouvel élève, aider à régler un petit conflit par le dialogue.
- Les délégués se réunissent aussi entre eux et élisent des représentants des élèves dans les **instances du collège** (par exemple le conseil d'administration).

## 4. Ce que le délégué n'est pas
Le délégué n'est **ni un chef, ni un surveillant, ni un « rapporteur »**. Il n'a pas plus de droits que les autres élèves. Il a en revanche des **responsabilités** : être honnête, discret, porter la parole de **tous** (même de ceux qui n'ont pas voté pour lui).

## 5. D'autres représentants au collège et autour
| Représentant | Rôle |
|---|---|
| Éco-délégué | élu dans chaque classe de collège depuis 2020 ; propose des actions pour l'environnement (tri, économies d'énergie, biodiversité) |
| Membre du conseil de la vie collégienne (CVC) | élèves et adultes qui font des propositions sur la vie du collège (foyer, sorties, solidarité) |
| Conseiller départemental jeune ou conseiller municipal jeune | collégiens élus qui proposent des projets à leur département ou à leur commune (selon les endroits) |

> **À retenir** :
> - Représenter, c'est parler et agir au nom des autres.
> - Chaque classe élit deux délégués et deux suppléants, par un vote secret, pour l'année.
> - Le délégué écoute, transmet, participe au conseil de classe et rend compte.
> - Il n'est pas un chef : il a des responsabilités, pas plus de droits.
> - Vocabulaire : représentant, électeur, candidat, élu, suppléant, conseil de classe, rendre compte.
`,
      exercices: [
        { type: "qcm", question: "Que veut dire « représenter » sa classe ?", choix: ["Commander les autres élèves", "Parler et agir au nom des autres élèves", "Surveiller la classe quand le professeur sort", "Décider seul des règles de la classe"], reponse: 1, explication: "Le délégué est un **porte-parole** : il transmet l'avis de la classe. Il ne commande pas et ne surveille pas." },
        { type: "saisie", question: "Comment appelle-t-on l'élève qui remplace un délégué absent ?", reponses: ["suppleant", "le suppleant", "suppleante", "un suppleant", "suppleants", "delegue suppleant", "le delegue suppleant"], explication: "Chaque classe élit deux délégués et deux **suppléants**." },
        { type: "vf", question: "Le vote pour élire les délégués de classe est secret.", reponse: true, explication: "Chacun vote librement, sans que personne ne sache pour qui il a voté : c'est le **secret du vote**." },
        { type: "qcm", question: "À quelle réunion le délégué participe-t-il à la fin de chaque trimestre (ou semestre) ?", choix: ["Le conseil municipal", "Le conseil des ministres", "Le conseil de classe", "Le Parlement européen"], reponse: 2, explication: "Au **conseil de classe**, les professeurs font le bilan de chaque élève ; le délégué présente l'avis de la classe puis rend compte à ses camarades." },
        { type: "vf", question: "Le délégué de classe a le droit de punir un élève qui bavarde.", reponse: false, explication: "Le délégué n'est ni un chef ni un surveillant. Seuls les adultes du collège peuvent punir ou sanctionner." },
        { type: "qcm", question: "Après le conseil de classe, que doit faire le délégué ?", choix: ["Rendre compte à la classe de ce qui s'est dit, sans répéter les remarques personnelles sur un élève", "Raconter à tout le monde les notes de chaque élève", "Ne rien dire, car le conseil est secret", "Écrire un message sur les réseaux sociaux"], reponse: 0, explication: "Le représentant **rend compte** à ceux qui l'ont élu, mais il respecte la **discrétion** : les remarques sur un élève ne regardent que lui et sa famille." },
        { type: "saisie", question: "Comment appelle-t-on l'élève élu dans chaque classe pour proposer des actions en faveur de l'environnement ?", reponses: ["eco-delegue", "eco delegue", "ecodelegue", "eco-deleguee", "eco-delegues", "les eco-delegues", "eco-deleguees"], explication: "Depuis 2020, chaque classe de collège élit un ou des **éco-délégués**." },
        { type: "qcm", question: "Pour choisir un bon délégué, quel est le meilleur critère ?", choix: ["C'est mon meilleur ami", "Il est le plus fort au football", "Il a les meilleures notes", "Il sait écouter tout le monde et transmettre les idées de la classe"], reponse: 3, explication: "On élit un **porte-parole** : il doit être à l'écoute, honnête et capable de parler au nom de **tous**." },
        { type: "redaction", question: "**Rédige ta profession de foi** (5 à 8 lignes) pour te présenter comme délégué de ta classe de 6e. Explique ce que tu feras et ce que tu ne feras pas.", corrige: `**Exemple de profession de foi**

Chers camarades, je me présente comme délégué(e) de la classe. Mon rôle sera de **représenter toute la classe**, même ceux qui ne voteront pas pour moi. Je serai **à l'écoute** : vous pourrez me confier vos questions ou vos propositions, par exemple sur la quantité de devoirs ou l'organisation d'une sortie, et je les **transmettrai** au professeur principal ou à la CPE. Au **conseil de classe**, je présenterai l'avis de la classe, puis je vous **rendrai compte** de ce qui s'est dit, sans répéter ce qui concerne un élève en particulier. Je pourrai aussi aider à accueillir les nouveaux et à régler un petit désaccord par le dialogue.

En revanche, je ne serai **pas un chef** : je ne donnerai pas d'ordres et je ne punirai personne. Je ne promets pas ce qui est impossible (« moins d'heures de cours ») : je promets de faire entendre votre voix.

**Ce qu'on attend** : le rôle de représentant (porte-parole), au moins deux missions précises (écouter, transmettre, conseil de classe, rendre compte), et une limite (pas de pouvoir de commander ni de punir).` },
      ],
    },
    {
      id: "voter-elire",
      titre: "Voter et élire : comment fonctionne une élection",
      theme: "Représenter les autres et servir l'intérêt général",
      cours: `
## 1. Pourquoi vote-t-on ?
Dans une **démocratie**, le pouvoir appartient au **peuple**. Mais tous les citoyens ne peuvent pas discuter ensemble de chaque décision : ils **élisent des représentants** qui décident en leur nom. C'est la **démocratie représentative**.
- Parfois, les citoyens décident eux-mêmes en votant « oui » ou « non » à une question : c'est un **référendum** (démocratie directe).
- **Voter** permet de choisir ses représentants, de donner son avis et de **changer** de représentants à l'élection suivante si l'on n'est pas satisfait.

## 2. Les règles d'un vote démocratique
| Principe | Ce que cela veut dire |
|---|---|
| Universel | tous les citoyens qui remplissent les conditions peuvent voter |
| Égal | une personne = une voix |
| Secret | on vote seul dans l'**isoloir**, le bulletin est mis dans une enveloppe puis dans l'**urne** |
| Libre | personne ne doit te forcer ni t'acheter ton vote |
| Personnel | on vote pour soi (on peut seulement donner une **procuration** à quelqu'un de confiance) |

## 3. Qui peut voter en France ?
- Pour voter à toutes les élections, il faut avoir **18 ans**, être de **nationalité française** et être **inscrit sur les listes électorales**.
- Les citoyens des autres pays de l'**Union européenne** qui habitent en France peuvent voter aux élections **municipales** et **européennes**.
- Un **suffrage**, c'est une **voix** donnée lors d'un vote. Le **suffrage universel**, c'est le droit de vote accordé à tous les citoyens (et non à quelques-uns seulement).
- Le droit de vote s'est étendu peu à peu : **1848** (suffrage universel masculin), **1944** (droit de vote des femmes, qui votent pour la première fois en 1945), **1974** (droit de vote à 18 ans au lieu de 21 ans).

## 4. Compter les voix
- Les **votants** sont ceux qui ont voté. Les bulletins **blancs** (sans nom) et **nuls** (déchirés, annotés) sont comptés à part.
- Les **suffrages exprimés** = votants − blancs − nuls.
- La **majorité absolue**, c'est **plus de la moitié** des suffrages exprimés.
- L'**abstention**, c'est le fait de ne pas aller voter.

>! **Exemple résolu** : 25 élèves votent pour élire un délégué. Il y a 1 bulletin blanc et 1 bulletin nul. Suffrages exprimés : 25 − 1 − 1 = **23**. La moitié de 23 est 11,5 ; la majorité absolue est donc de **12 voix**. Inès a 11 voix, Tom 8, Maël 4 (11 + 8 + 4 = 23). Inès est en tête, mais elle n'a pas 12 voix : il faut un **second tour**.

## 5. Accepter le résultat
En démocratie, la **majorité** décide, mais la **minorité** est respectée : elle peut continuer à donner son avis et proposer d'autres idées. Celui qui perd une élection accepte le résultat ; l'élu, lui, représente **tout le monde**, y compris ceux qui n'ont pas voté pour lui.

> **À retenir** :
> - Démocratie représentative : les citoyens élisent des représentants ; démocratie directe : ils décident eux-mêmes (référendum).
> - Le vote est universel, égal, secret, libre et personnel.
> - En France, on vote à 18 ans (depuis 1974) ; les femmes votent depuis 1944.
> - Majorité absolue = plus de la moitié des suffrages exprimés.
> - Vocabulaire : électeur, isoloir, urne, bulletin, suffrages exprimés, abstention, référendum.
`,
      exercices: [
        { type: "qcm", question: "Dans quel objet glisse-t-on son bulletin de vote ?", choix: ["L'isoloir", "Le registre", "L'urne", "La profession de foi"], reponse: 2, explication: "L'**isoloir** est la cabine où l'on prépare son vote en secret ; l'**urne** est la boîte transparente où l'on dépose l'enveloppe." },
        { type: "saisie", question: "À quel âge peut-on voter en France ? (réponds par un nombre)", reponses: ["18", "18 ans", "dix-huit", "dix-huit ans"], explication: "Depuis **1974**, on vote à **18 ans** (avant, il fallait avoir 21 ans)." },
        { type: "vf", question: "Le droit de vote des femmes en France date de 1944.", reponse: true, explication: "Une ordonnance de **1944** accorde le droit de vote aux femmes ; elles votent pour la première fois en **1945**." },
        { type: "qcm", question: "Que veut dire « le vote est égal » ?", choix: ["Chaque personne a une voix, qui compte autant que celle des autres", "Tous les candidats ont le même nombre de voix", "On vote toujours deux fois", "Les adultes ont plus de voix que les jeunes"], reponse: 0, explication: "Une personne = une voix : la voix d'un ministre compte autant que celle de n'importe quel citoyen." },
        { type: "saisie", question: "Comment appelle-t-on un vote où les citoyens répondent eux-mêmes par « oui » ou par « non » à une question ?", reponses: ["referendum", "un referendum", "referendums"], explication: "Le **référendum** est une forme de **démocratie directe** : les citoyens décident sans passer par des représentants." },
        { type: "saisie", question: "Lors d'une élection de délégué, il y a 28 suffrages exprimés. Combien de voix faut-il au minimum pour avoir la majorité absolue ?", reponses: ["15", "15 voix", "quinze", "quinze voix"], explication: "La moitié de 28 est 14. La majorité absolue, c'est **plus** de la moitié : il faut donc **15 voix** (14 ne suffit pas, c'est seulement la moitié)." },
        { type: "vf", question: "Ne pas aller voter s'appelle l'abstention.", reponse: true, explication: "L'**abstention** est le fait de ne pas participer à un vote. Le vote **blanc**, lui, consiste à aller voter sans choisir de candidat." },
        { type: "qcm", question: "Un citoyen italien de 30 ans habite à Lyon. À quelle élection peut-il voter en France ?", choix: ["À l'élection présidentielle", "À aucune élection", "Aux élections législatives (députés)", "Aux élections municipales et européennes"], reponse: 3, explication: "Les citoyens de l'Union européenne qui résident en France peuvent voter aux élections **municipales** et **européennes**, mais pas à la présidentielle ni aux législatives." },
        { type: "redaction", question: "**Exercice de contrôle** : dans une classe de 6e, 26 élèves votent. Résultats : Lina 13 voix, Sacha 9 voix, Nathan 2 voix, 2 bulletins blancs.\n\n1. Calcule le nombre de suffrages exprimés. 2. Calcule la majorité absolue. 3. Lina est-elle élue dès le premier tour ? Justifie. 4. Explique en deux phrases pourquoi Sacha doit accepter le résultat et ce que Lina doit faire une fois élue.", corrige: `**1. Suffrages exprimés** : 26 votants − 2 bulletins blancs = **24** suffrages exprimés (vérification : 13 + 9 + 2 = 24).

**2. Majorité absolue** : la moitié de 24 est 12 ; la majorité absolue est donc de **13 voix** (plus de la moitié).

**3.** Lina a **13 voix** : elle atteint la majorité absolue. Elle est donc **élue dès le premier tour**, il n'y a pas besoin de second tour.

**4.** En démocratie, c'est la **majorité** qui décide : Sacha a pu se présenter et faire campagne librement, le vote a été secret et régulier, il doit donc accepter le résultat ; il peut continuer à donner ses idées. Lina, une fois élue, doit représenter **toute la classe**, y compris les élèves qui n'ont pas voté pour elle, et leur **rendre compte** de son action.` },
        { type: "qcm", question: "Que veut dire « suffrage universel » ?", choix: ["Le droit de vote accordé seulement aux plus riches", "Le droit de vote accordé à tous les citoyens qui remplissent les conditions (âge, nationalité)", "Un vote où l'on choisit entre tous les pays du monde", "Un vote réservé aux élus"], reponse: 1, explication: "Un **suffrage** est une voix. Le suffrage est **universel** quand tous les citoyens peuvent voter : en France, il existe pour les hommes depuis 1848 et pour les femmes depuis 1944." },
      ],
    },
    {
      id: "representants-echelles",
      titre: "Des représentants à toutes les échelles : de la commune à l'Union européenne",
      theme: "Représenter les autres et servir l'intérêt général",
      cours: `
## 1. Des besoins collectifs
Pour vivre ensemble, les habitants ont des **besoins collectifs** : des écoles et des collèges, des hôpitaux, des pompiers pour les **secours**, des routes et des **transports**, la protection de l'environnement. Des **élus** décident comment y répondre, à différentes **échelles** (du plus proche au plus lointain).

## 2. Qui fait quoi ?
| Échelle | Représentants élus | Exemples de missions |
|---|---|---|
| Commune | le **conseil municipal**, élu pour 6 ans, qui élit le **maire** | écoles maternelles et élémentaires, cantine, état civil (naissances, mariages), voirie, équipements sportifs |
| Département | le **conseil départemental**, élu pour 6 ans : dans chaque **canton** (un regroupement de communes), on élit un **binôme**, c'est-à-dire un duo formé d'une femme et d'un homme | **collèges**, aide sociale (personnes âgées, enfance), routes départementales, financement des pompiers |
| Région | le **conseil régional**, élu pour 6 ans | **lycées**, trains régionaux et cars scolaires, développement économique |
| France (État) | le **Président de la République** (5 ans), les **députés** de l'Assemblée nationale (577, élus pour 5 ans), les **sénateurs** (348, élus pour 6 ans par des élus) | lois, budget de l'État, paie des professeurs, armée, police, justice, hôpitaux publics |
| Union européenne | les **députés européens**, élus pour 5 ans (720 en 2024, dont 81 pour la France) | lois européennes votées avec les gouvernements des pays membres : environnement, commerce, protection des données |

>! **Exemple : ton collège.** Le **bâtiment** et la **cantine** dépendent du **département** ; les **professeurs** sont payés par l'**État** ; le **maire** s'occupe de ton ancienne école primaire. Les **cars scolaires** sont organisés par la **région** (hors des grandes villes).

## 3. Le Parlement : les représentants de la Nation
- Le **Parlement** français est formé de l'**Assemblée nationale** et du **Sénat**. Il **vote les lois** et contrôle le gouvernement.
- Les **députés** sont élus directement par les citoyens au **suffrage universel direct**. Les **sénateurs** sont élus par des élus (surtout des conseillers municipaux) : c'est un **suffrage indirect**.
- Le **Parlement européen** est élu au suffrage universel direct depuis **1979**. Il siège surtout à **Strasbourg**.

## 4. Des représentants responsables
Un élu reçoit un **mandat** : une mission confiée pour une durée limitée. Il doit :
- **porter la parole** des électeurs et **participer aux délibérations** (les discussions avant une décision) ;
- **respecter les règles** de l'assemblée où il siège (temps de parole, vote) ;
- **rendre des comptes** : à la fin du mandat, les électeurs jugent son action et peuvent choisir quelqu'un d'autre.

> **À retenir** :
> - Les élus répondent aux besoins collectifs : éducation, santé, secours, transports, environnement.
> - Commune → maire et conseil municipal ; département → collèges ; région → lycées ; État → lois, professeurs ; UE → lois européennes.
> - Le Parlement (Assemblée nationale + Sénat) vote les lois ; le Parlement européen est élu depuis 1979.
> - Un élu a un mandat limité dans le temps et doit rendre des comptes.
> - Vocabulaire : échelle, mandat, conseil municipal, député, sénateur, suffrage direct et indirect.
`,
      exercices: [
        { type: "qcm", question: "Quelle collectivité est chargée des bâtiments des collèges ?", choix: ["La commune", "Le département", "La région", "L'Union européenne"], reponse: 1, explication: "Les **collèges** relèvent du **département**, les **lycées** de la **région**, les **écoles primaires** de la **commune**." },
        { type: "saisie", question: "Qui est élu par le conseil municipal pour diriger la commune ?", reponses: ["maire", "le maire", "la maire", "un maire"], explication: "Les habitants élisent le **conseil municipal**, qui élit ensuite le **maire** parmi ses membres." },
        { type: "vf", question: "Les professeurs de ton collège sont payés par l'État.", reponse: true, explication: "Les professeurs de l'enseignement public sont des fonctionnaires de l'**État** (ministère de l'Éducation nationale). Le département s'occupe du bâtiment et de la cantine." },
        { type: "qcm", question: "Quelles sont les deux assemblées qui forment le Parlement français ?", choix: ["Le conseil municipal et le conseil régional", "Le conseil de classe et le conseil d'administration", "L'Assemblée nationale et le Sénat", "Le Parlement européen et l'ONU"], reponse: 2, explication: "Le **Parlement** = **Assemblée nationale** (577 députés) + **Sénat** (348 sénateurs). Il vote les lois." },
        { type: "saisie", question: "Combien y a-t-il de députés à l'Assemblée nationale ? (réponds par un nombre)", reponses: ["577", "577 deputes"], explication: "**577 députés**, élus pour 5 ans au suffrage universel direct." },
        { type: "vf", question: "Les sénateurs sont élus directement par tous les citoyens.", reponse: false, explication: "Les sénateurs sont élus au **suffrage indirect**, par des élus (surtout des conseillers municipaux). Les **députés**, eux, sont élus directement par les citoyens." },
        { type: "qcm", question: "Depuis quelle année les citoyens élisent-ils directement les députés européens ?", choix: ["1979", "1789", "1958", "2024"], reponse: 0, explication: "Le **Parlement européen** est élu au suffrage universel direct depuis **1979**. Les dernières élections européennes ont eu lieu en 2024." },
        { type: "qcm", question: "Que veut dire qu'un élu a un « mandat » ?", choix: ["Il est élu pour toute sa vie", "Il peut faire ce qu'il veut sans rien expliquer", "Il a reçu de l'argent pour être candidat", "On lui a confié une mission pour une durée limitée, et il devra rendre des comptes"], reponse: 3, explication: "Un **mandat** est limité dans le temps (par exemple 6 ans pour un conseiller municipal) : à l'élection suivante, les électeurs jugent l'action de l'élu." },
        { type: "redaction", question: "**Étude de cas** : la famille de Léo habite une petite commune. Le matin, Léo prend le car scolaire pour aller au collège ; sa petite sœur va à l'école du village ; son grand frère est au lycée de la ville voisine.\n\n1. Pour chaque enfant, indique quelle collectivité s'occupe du bâtiment de son établissement. 2. Qui organise le car scolaire de Léo ? 3. Pourquoi dit-on que ces élus répondent à des « besoins collectifs » ? 4. Comment les parents de Léo peuvent-ils donner leur avis sur ces choix ?", corrige: `**1.** L'école du village de la petite sœur dépend de la **commune** (maire et conseil municipal) ; le collège de Léo dépend du **département** (conseil départemental) ; le lycée du grand frère dépend de la **région** (conseil régional).

**2.** Les cars scolaires, hors des grandes villes, sont organisés par la **région**.

**3.** Ce sont des **besoins collectifs**, car ils concernent tous les habitants et pas une seule famille : toutes les familles ont besoin d'écoles, de transports, de routes. Une famille seule ne pourrait pas construire un collège ; les élus décident ensemble, avec l'argent des impôts, au service de **l'intérêt général**.

**4.** Les parents de Léo peuvent **voter** aux élections municipales, départementales et régionales pour choisir leurs représentants, et les juger à la fin de leur **mandat**. Ils peuvent aussi assister aux séances publiques du conseil municipal, écrire aux élus ou participer à des réunions publiques.` },
      ],
    },
    {
      id: "interet-general",
      titre: "L'intérêt général",
      theme: "Représenter les autres et servir l'intérêt général",
      cours: `
## 1. Intérêt particulier et intérêt général
- L'**intérêt particulier**, c'est ce qui est bon pour **une personne** ou pour **un petit groupe**.
- L'**intérêt général**, c'est l'**intérêt commun de tous les membres de la société** : ce qui est bon pour tout le monde, même si chacun n'en profite pas de la même façon.

>! **Exemple** : la commune construit une piscine. Pour l'intérêt général, c'est utile : tous les enfants pourront apprendre à nager. Mais les voisins du chantier subissent du bruit pendant des mois : l'intérêt général et leur intérêt particulier ne vont pas dans le même sens.

## 2. Quand les intérêts s'opposent
L'intérêt général **n'est pas toujours compatible** avec les intérêts de chacun.
- Payer des **impôts** coûte à chacun, mais permet de financer les écoles, les hôpitaux, les routes, les pompiers.
- Limiter la vitesse en ville oblige les automobilistes à rouler moins vite, mais protège les piétons et les cyclistes.
- Au collège, le **règlement intérieur** limite certaines libertés (pas de téléphone en classe), mais permet à **tous** de travailler dans le calme.
Les **représentants élus** doivent alors **arbitrer** : écouter les différents intérêts, en discuter, puis décider ce qui sert le mieux l'ensemble de la population.

## 3. Penser aussi aux générations futures
- Le **développement durable** est un développement qui répond aux besoins des personnes d'aujourd'hui **sans empêcher les générations futures** de répondre aux leurs.
- L'intérêt général prend donc en compte les personnes **qui ne sont pas encore nées** : protéger l'eau, les forêts, le climat, la biodiversité.
- En **2015**, les pays de l'**ONU** ont adopté **17 objectifs de développement durable (ODD)** à atteindre d'ici 2030. Par exemple :

| ODD | Objectif | Exemple d'action |
|---|---|---|
| 12 | consommation et production responsables | lutter contre le gaspillage à la cantine, trier et recycler |
| 13 | lutter contre le changement climatique | économiser l'énergie, venir à pied ou à vélo |
| 14 | vie aquatique (océans, mers, rivières) | réduire les déchets plastiques qui finissent dans l'eau |

## 4. Du geste individuel à l'action publique
- Chacun peut agir par des **gestes individuels** : éteindre la lumière, ne pas gaspiller le pain.
- Mais certains problèmes demandent une **action publique** : une décision prise par des **élus** pour tous (installer des bacs de tri dans tout le collège, créer une piste cyclable, protéger une zone naturelle).

> **À retenir** :
> - Intérêt particulier = celui d'une personne ou d'un groupe ; intérêt général = celui de toute la société.
> - L'intérêt général peut s'opposer aux intérêts de chacun : les élus arbitrent.
> - Il inclut les générations futures (développement durable, 17 ODD adoptés par l'ONU en 2015).
> - Vocabulaire : intérêt général, intérêt particulier, impôt, développement durable, ODD, action publique.
`,
      exercices: [
        { type: "qcm", question: "Qu'est-ce que l'intérêt général ?", choix: ["L'intérêt du maire", "L'intérêt commun de tous les membres de la société", "L'intérêt de la personne la plus riche", "L'intérêt de ceux qui ont voté pour le gagnant"], reponse: 1, explication: "L'intérêt général dépasse les intérêts particuliers : c'est ce qui est bon pour **toute** la société." },
        { type: "vf", question: "L'intérêt général est toujours d'accord avec l'intérêt de chaque personne.", reponse: false, explication: "Il **n'est pas toujours compatible** avec les intérêts de chacun : par exemple, les voisins du chantier de la piscine subissent le bruit, alors que la piscine est utile à tous." },
        { type: "qcm", question: "Laquelle de ces situations montre un **intérêt particulier** ?", choix: ["Construire une bibliothèque ouverte à tous", "Installer des feux près d'une école", "Vouloir que la commune goudronne seulement le chemin qui mène à sa propre maison", "Protéger une rivière de la pollution"], reponse: 2, explication: "Goudronner seulement son propre chemin profite à **une seule personne** : c'est un intérêt particulier." },
        { type: "saisie", question: "Combien d'objectifs de développement durable (ODD) l'ONU a-t-elle adoptés en 2015 ? (réponds par un nombre)", reponses: ["17", "dix-sept", "17 objectifs"], explication: "**17 ODD**, à atteindre d'ici 2030, par exemple l'ODD 13 : lutter contre le changement climatique." },
        { type: "qcm", question: "Pourquoi dit-on que le développement durable pense aux « générations futures » ?", choix: ["Parce qu'il ne concerne que les personnes âgées", "Parce qu'il interdit d'utiliser les ressources", "Parce qu'il ne concerne que les enfants d'aujourd'hui", "Parce qu'il cherche à répondre à nos besoins sans empêcher ceux qui vivront après nous de répondre aux leurs"], reponse: 3, explication: "Le développement durable protège les ressources (eau, forêts, climat) pour que les personnes qui naîtront plus tard puissent elles aussi bien vivre." },
        { type: "vf", question: "Les impôts servent notamment à financer les écoles, les hôpitaux et les routes, qui sont utiles à tous.", reponse: true, explication: "Payer des impôts coûte à chacun, mais permet de financer des services utiles à **l'intérêt général**." },
        { type: "qcm", question: "Lequel de ces exemples est une **action publique** et non un simple geste individuel ?", choix: ["Le conseil municipal vote la création d'une piste cyclable", "Tu éteins la lumière en sortant de ta chambre", "Ta sœur prend une gourde au lieu d'une bouteille en plastique", "Ton voisin trie ses déchets"], reponse: 0, explication: "Une **action publique** est décidée par des **élus** pour tous ; les autres exemples sont des gestes individuels, utiles mais limités." },
        { type: "saisie", question: "Comment appelle-t-on l'intérêt d'une seule personne ou d'un petit groupe, par opposition à l'intérêt général ?", reponses: ["interet particulier", "l'interet particulier", "interets particuliers", "interet personnel", "interet individuel", "interet prive"], explication: "L'**intérêt particulier** s'oppose à l'**intérêt général**, qui est celui de toute la société." },
        { type: "redaction", question: "**Paragraphe argumenté** : la commune veut transformer un parking du centre-ville en jardin public avec des arbres. Des commerçants protestent : leurs clients ne pourront plus se garer devant leur magasin. Explique en quoi ce projet oppose intérêt général et intérêt particulier, puis dis comment les élus peuvent décider.", corrige: `Ce projet sert l'**intérêt général** : un jardin avec des arbres profite à tous les habitants (un lieu de promenade et de jeu, de l'ombre l'été, plus de biodiversité) et aussi aux **générations futures**, car il s'inscrit dans le **développement durable** et la lutte contre le changement climatique (ODD 13). Mais il heurte l'**intérêt particulier** des commerçants, qui craignent de perdre des clients s'ils ne peuvent plus se garer. Les deux intérêts sont **légitimes** mais **pas compatibles**. C'est aux **élus du conseil municipal** d'**arbitrer** : ils doivent écouter les habitants et les commerçants (réunion publique), chercher des solutions (un parking à proximité, des places de livraison, une meilleure desserte en bus), puis **délibérer** et **voter**. Ils prennent la décision qui sert le mieux l'ensemble de la population, et ils en **rendront compte** aux électeurs lors des prochaines élections.` },
      ],
    },
    {
      id: "deliberer-decider",
      titre: "Délibérer et décider ensemble : du collège à la commune",
      theme: "Représenter les autres et servir l'intérêt général",
      cours: `
## 1. Délibérer, qu'est-ce que c'est ?
- **Délibérer**, c'est **discuter ensemble** d'une question, en écoutant les arguments de chacun, **avant de prendre une décision**.
- Une **délibération** se termine en général par un **vote** : la proposition qui obtient la **majorité** est adoptée.
- Les élus doivent **suivre les règles** de leur assemblée : on demande la parole, on respecte l'ordre du jour, on vote selon les règles prévues. Une décision prise sans respecter ces règles n'est pas valable.

## 2. Exemple au collège : le projet des éco-délégués
>! **Étapes d'une décision au collège** (exemple)
>! 1. **Constat** : les éco-délégués observent qu'on jette beaucoup de pain à la cantine.
>! 2. **Proposition** : ils proposent une « table de tri » et une pesée du pain jeté chaque semaine.
>! 3. **Délibération** : ils présentent le projet au conseil de la vie collégienne (CVC) ; les élèves et les adultes en discutent (qui s'en occupe ? combien cela coûte ?).
>! 4. **Décision** : le projet est voté ; s'il faut de l'argent, il est présenté au **conseil d'administration** du collège.
>! 5. **Mise en œuvre et bilan** : on affiche les résultats ; on mesure si le gaspillage diminue.

Les éco-délégués ont un double rôle : **représenter** les élèves et **donner l'impulsion** (lancer des projets).

## 3. Exemple dans la commune : le conseil municipal
1. Un problème est signalé : les enfants traversent une route dangereuse pour aller à l'école.
2. Le maire et une commission étudient des solutions (passage piéton surélevé, feu, piste cyclable) et leur coût.
3. Le projet est inscrit à l'**ordre du jour** du **conseil municipal**. La séance est **publique** : les habitants peuvent y assister.
4. Les conseillers **délibèrent** puis **votent**. La décision est publiée.
5. Les travaux sont réalisés et payés par le **budget** de la commune (en partie grâce aux impôts locaux).

## 4. Apprendre la délibération : le Parlement des enfants
Le **Parlement des enfants** est une opération organisée chaque année par l'Assemblée nationale avec le ministère de l'Éducation nationale : des classes de **CM2 et de 6e** rédigent une **proposition de loi** sur un thème, en débattent et votent ; les finalistes sont reçus à l'Assemblée nationale. En 2025-2026, le thème était la protection des mineurs face aux dangers des réseaux sociaux. C'est un moyen de découvrir comment on prépare une loi et de réfléchir à l'**intérêt général**.

## 5. Respecter la décision
Une fois la décision prise à la majorité, elle s'applique à **tous**, même à ceux qui ont voté contre. Ceux-ci peuvent continuer à défendre leur avis **par le dialogue** et demander qu'on en discute à nouveau plus tard.

> **À retenir** :
> - Délibérer = discuter ensemble avant de décider, puis voter.
> - Une décision suit des étapes : constat, proposition, délibération, vote, mise en œuvre, bilan.
> - Les éco-délégués représentent les élèves et lancent des projets pour l'environnement.
> - Le conseil municipal délibère en séance publique ; ses décisions sont financées par le budget de la commune.
> - Vocabulaire : délibérer, ordre du jour, majorité, budget, proposition de loi, impulsion.
`,
      exercices: [
        { type: "qcm", question: "Que signifie « délibérer » ?", choix: ["Libérer un prisonnier", "Discuter ensemble d'une question avant de prendre une décision", "Décider seul et vite", "Annuler une élection"], reponse: 1, explication: "Une **délibération** est une discussion organisée, qui se termine en général par un vote." },
        { type: "vf", question: "Les séances du conseil municipal sont publiques : les habitants peuvent y assister.", reponse: true, explication: "Les habitants peuvent venir écouter les débats ; c'est une façon de contrôler le travail des élus." },
        { type: "qcm", question: "Les éco-délégués proposent d'installer des composteurs, ce qui coûte de l'argent. Quelle instance du collège devra voter la dépense ?", choix: ["Le conseil de classe", "Le Sénat", "Le conseil d'administration du collège", "Le Parlement européen"], reponse: 2, explication: "Le **conseil d'administration** vote le budget du collège. Le conseil de classe, lui, fait le bilan du travail des élèves." },
        { type: "saisie", question: "Comment appelle-t-on la liste des sujets qui seront discutés pendant une réunion ou une séance du conseil municipal ?", reponses: ["ordre du jour", "l'ordre du jour"], explication: "L'**ordre du jour** fixe à l'avance les sujets traités : chacun peut se préparer." },
        { type: "vf", question: "Une décision votée à la majorité ne s'applique qu'à ceux qui ont voté pour.", reponse: false, explication: "La décision s'applique à **tous**. Ceux qui ont voté contre peuvent continuer à donner leur avis par le dialogue." },
        { type: "qcm", question: "Remets dans l'ordre les étapes d'une décision : A. vote ; B. constat d'un problème ; C. mise en œuvre ; D. délibération. Quel est le bon ordre ?", choix: ["B, D, A, C", "A, B, C, D", "D, A, B, C", "C, A, D, B"], reponse: 0, explication: "On part d'un **constat**, on en **délibère**, on **vote**, puis on **met en œuvre** la décision (et on fait un bilan)." },
        { type: "saisie", question: "Comment s'appelle l'opération où des classes de CM2 et de 6e rédigent une proposition de loi, organisée avec l'Assemblée nationale ?", reponses: ["Parlement des enfants", "le Parlement des enfants"], explication: "Le **Parlement des enfants** permet de découvrir comment on prépare une loi." },
        { type: "qcm", question: "On dit que les éco-délégués ont un rôle « d'impulsion ». Qu'est-ce que cela veut dire ?", choix: ["Ils punissent ceux qui ne trient pas", "Ils décident seuls du budget du collège", "Ils remplacent les professeurs", "Ils lancent des idées et des projets pour faire avancer le collège"], reponse: 3, explication: "Donner une **impulsion**, c'est lancer un mouvement : proposer des projets et entraîner les autres. Ils n'ont pas le pouvoir de punir." },
        { type: "redaction", question: "**Exercice de contrôle** : ta classe constate que beaucoup de lumières restent allumées dans les salles vides du collège. Explique, étape par étape, comment les éco-délégués peuvent faire aboutir un projet pour réduire ce gaspillage. Montre en quoi ce projet sert l'intérêt général.", corrige: `**Étapes du projet**
1. **Constat** : les éco-délégués observent et notent pendant une semaine les salles éclairées alors qu'elles sont vides.
2. **Proposition** : ils imaginent des solutions : des affichettes « Dernier sorti, j'éteins », un élève responsable de la lumière dans chaque classe, et demander au département s'il est possible d'installer des détecteurs de présence.
3. **Délibération** : ils présentent le projet au **CVC** ou en réunion des délégués ; chacun donne son avis, on discute de ce qui est réaliste.
4. **Décision** : on **vote** ; si une dépense est nécessaire (affiches, détecteurs), le projet est présenté au **conseil d'administration** et, pour les travaux, au **département**, qui est propriétaire du bâtiment.
5. **Mise en œuvre et bilan** : on applique la mesure, on mesure les résultats et on les présente à tous les élèves.

**L'intérêt général** : ce projet profite à **tous**. Il fait économiser de l'argent public (payé par les impôts de tous), il réduit la consommation d'énergie et participe à la lutte contre le changement climatique (**ODD 13**), donc il pense aussi aux **générations futures**. On passe ainsi du **geste individuel** (éteindre en sortant) à une **action collective** décidée ensemble.` },
      ],
    },
    {
      id: "regles-droits-devoirs",
      titre: "Des règles, des droits et des devoirs",
      theme: "Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École",
      cours: `
## 1. À quoi servent les règles ?
Une **règle** dit ce qu'il faut faire ou ne pas faire dans un groupe. Les règles ne sont pas là pour embêter : elles servent à
- **protéger** chacun (contre la violence, les moqueries, l'injustice) ;
- **organiser** la vie collective (horaires, prise de parole) ;
- garantir l'**égalité** : la même règle pour tous.
Au collège, les règles sont écrites dans le **règlement intérieur**, voté par le **conseil d'administration**. Dans le pays, les règles les plus importantes sont les **lois**, votées par le **Parlement**.

## 2. Avoir des droits
- Un **droit** est ce que la loi te permet ou te garantit : par exemple le droit d'aller à l'école, d'être protégé, de donner ton avis.
- Les droits des enfants sont réunis dans la **Convention internationale des droits de l'enfant** (**CIDE**), adoptée par l'**ONU** le **20 novembre 1989** et ratifiée (acceptée officiellement) par la France en 1990. Elle concerne tous les enfants de **moins de 18 ans**.

| Article de la CIDE | Ce qu'il garantit |
|---|---|
| Article 2 | tous les enfants ont les mêmes droits, sans aucune discrimination |
| Article 12 | l'enfant a le droit de donner son opinion sur ce qui le concerne et d'être entendu |
| Article 13 | la liberté d'expression |
| Article 14 | la liberté de pensée, de conscience et de religion |
| Article 28 | le droit à l'éducation |

Chaque **20 novembre**, on célèbre la **Journée internationale des droits de l'enfant**.

## 3. Des droits naissent des devoirs
Un **devoir** est ce que l'on **doit** faire. Les devoirs **découlent** des droits : si j'ai un droit, les autres ont le même, et je dois le respecter.
| Mon droit | Le devoir qui en découle |
|---|---|
| m'exprimer librement | laisser les autres s'exprimer, ne pas insulter |
| être éduqué | venir en cours (assiduité), travailler, laisser les autres travailler |
| être respecté dans mes croyances | respecter les croyances et les opinions des autres |
| être en sécurité | ne pas mettre en danger les autres |

>! **La limite de la liberté** : l'article 4 de la **Déclaration des droits de l'homme et du citoyen** (DDHC, 1789) dit que « la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ». Ma liberté s'arrête là où je ferais du tort aux autres.

## 4. Quand une règle n'est pas respectée
Au collège, le règlement intérieur prévoit des **punitions** (décidées par les professeurs ou la vie scolaire : devoir supplémentaire, retenue) et des **sanctions** pour les fautes graves (décidées par le chef d'établissement ou le conseil de discipline : avertissement, blâme, mesure de responsabilisation, exclusion). La punition doit être **juste** : proportionnée à la faute et expliquée. L'élève peut s'expliquer avant d'être sanctionné.

> **À retenir** :
> - Les règles protègent, organisent la vie collective et garantissent l'égalité.
> - La CIDE (ONU, 20 novembre 1989) protège les droits de tous les enfants de moins de 18 ans.
> - Les devoirs découlent des droits : respecter chez les autres les droits que l'on a soi-même.
> - DDHC, article 4 : la liberté, c'est faire tout ce qui ne nuit pas à autrui.
> - Vocabulaire : règle, loi, droit, devoir, règlement intérieur, punition, sanction, CIDE.
`,
      exercices: [
        { type: "qcm", question: "À quoi sert principalement une règle dans un groupe ?", choix: ["À montrer qui est le chef", "À punir le plus souvent possible", "À protéger chacun et à organiser la vie ensemble", "À empêcher toute liberté"], reponse: 2, explication: "Les règles **protègent**, **organisent** et assurent l'**égalité** : la même règle s'applique à tous." },
        { type: "saisie", question: "Quel sigle désigne la Convention internationale des droits de l'enfant ?", reponses: ["CIDE", "CDE", "la CIDE"], explication: "La **CIDE** (on dit aussi CDE, Convention relative aux droits de l'enfant) a été adoptée par l'ONU en 1989." },
        { type: "saisie", question: "En quelle année l'ONU a-t-elle adopté la Convention internationale des droits de l'enfant ?", reponses: ["1989"], explication: "Le **20 novembre 1989**. Le 20 novembre est devenu la Journée internationale des droits de l'enfant." },
        { type: "vf", question: "La CIDE protège les enfants jusqu'à 18 ans.", reponse: true, explication: "Pour la CIDE, un enfant est tout être humain de **moins de 18 ans**." },
        { type: "qcm", question: "J'ai le droit d'être éduqué. Quel devoir en découle ?", choix: ["Venir en cours, travailler et laisser les autres travailler", "Faire les devoirs de mes camarades", "Ne jamais poser de question", "Choisir les professeurs"], reponse: 0, explication: "Le droit à l'éducation (article 28 de la CIDE) entraîne des devoirs : l'**assiduité**, le travail, le respect du travail des autres." },
        { type: "qcm", question: "Selon l'article 4 de la DDHC (1789), la liberté consiste à…", choix: ["faire tout ce que l'on veut", "obéir sans réfléchir", "pouvoir faire tout ce qui ne nuit pas à autrui", "ne jamais respecter de règle"], reponse: 2, explication: "« La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui » : ma liberté a pour limite les droits des autres." },
        { type: "vf", question: "Un élève a le droit de s'expliquer avant de recevoir une sanction.", reponse: true, explication: "Une sanction doit être **juste** : l'élève peut donner sa version des faits, et la sanction doit être proportionnée à la faute." },
        { type: "qcm", question: "Quel article de la CIDE garantit la liberté de pensée, de conscience et de religion ?", choix: ["L'article 2", "L'article 28", "L'article 12", "L'article 14"], reponse: 3, explication: "L'**article 14**. L'article 2 interdit les discriminations, l'article 12 garantit le droit d'être entendu, l'article 28 le droit à l'éducation." },
        { type: "redaction", question: "**Paragraphe argumenté** : un élève de 6e dit : « Le règlement intérieur, ça sert juste à nous interdire des choses. » Réponds-lui en montrant à quoi servent les règles et en expliquant le lien entre droits et devoirs. Appuie-toi sur un texte vu en cours.", corrige: `Je comprends que le règlement intérieur puisse paraître seulement fait d'interdictions, mais ses règles servent d'abord à **protéger** chacun. Par exemple, l'interdiction des insultes et des violences protège tous les élèves, y compris toi. Les règles **organisent** aussi la vie collective (horaires, prise de parole), ce qui permet à tout le monde de travailler dans le calme. Elles garantissent enfin l'**égalité**, car elles sont les mêmes pour tous.

Le règlement ne contient d'ailleurs pas que des interdictions : il rappelle aussi nos **droits** (être respecté, s'exprimer, être éduqué, comme le prévoit la **CIDE** de 1989 dans son article 28). Or, de ces droits découlent des **devoirs** : si j'ai le droit d'être respecté, je dois respecter les autres ; si j'ai le droit d'apprendre, je dois laisser les autres apprendre. C'est ce qu'affirme l'**article 4 de la DDHC** de 1789 : « la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ». Les règles ne s'opposent donc pas à notre liberté : elles permettent à chacun d'en profiter.` },
      ],
    },
    {
      id: "liberte-de-conscience",
      titre: "La liberté de conscience",
      theme: "Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École",
      cours: `
## 1. Qu'est-ce que la liberté de conscience ?
- La **conscience**, c'est ce que tu penses au fond de toi, tes convictions sur le sens de la vie, sur la religion, sur le bien et le mal.
- La **liberté de conscience**, c'est la liberté de **croire**, celle de **ne pas croire**, et aussi celle de **changer** de croyance ou de religion.
- Personne ne peut t'obliger à avoir une religion, ni t'empêcher d'en avoir une, ni t'interdire d'en changer.

## 2. Des textes qui la protègent
| Texte | Ce qu'il dit (en résumé) |
|---|---|
| DDHC (1789), article 10 | « Nul ne doit être inquiété pour ses opinions, même religieuses, pourvu que leur manifestation ne trouble pas l'ordre public établi par la Loi. » |
| Loi du 9 décembre 1905, article 1er | « La République assure la liberté de conscience. » |
| Constitution de 1958, article 1er | la République est laïque et « respecte toutes les croyances » |
| CIDE (1989), article 14 | l'enfant a droit à la liberté de pensée, de conscience et de religion ; ses parents le guident selon son âge |

## 3. Croyants, athées, agnostiques : tous libres
| Mot | Définition |
|---|---|
| Croyant | personne qui croit en un ou plusieurs dieux (par exemple chrétien, juif, musulman, bouddhiste, hindou…) |
| Athée | personne qui ne croit en aucun dieu |
| Agnostique | personne qui pense qu'on ne peut pas savoir si un dieu existe |
| Indifférent | personne qui ne se pose pas la question |
Tous ont les **mêmes droits**. Être croyant, athée ou agnostique est une **option personnelle**. La **laïcité**, elle, n'est **pas** une opinion de ce genre : c'est un **principe juridique** (une règle de droit) qui protège la liberté de **tous**.

## 4. Les limites : l'ordre public et le respect des autres
- On peut **exprimer** et **pratiquer** sa religion (prier, aller dans un lieu de culte, faire des fêtes religieuses), mais **dans le respect de la loi** et de l'**ordre public** (la sécurité, la tranquillité de tous).
- Personne ne peut invoquer sa religion pour **ne pas respecter la loi** ou pour **imposer** ses croyances aux autres.
- Le **prosélytisme**, c'est chercher avec insistance à convaincre les autres d'adopter sa religion ou ses convictions. Dans la société, chacun a le droit de parler de sa religion et d'essayer de convaincre, poliment ; mais **faire pression** sur quelqu'un (menaces, harcèlement, mise à l'écart) pour qu'il change de croyance porte atteinte à **sa** liberté de conscience. À l'**école publique**, la laïcité protège les élèves de **tout** prosélytisme (tu le verras dans le chapitre « La laïcité à l'École »).

>! **Exemple** : Yanis est croyant, Chloé ne croit en aucun dieu, Hugo ne sait pas. Ils peuvent en parler entre eux, poliment, en se respectant. Mais si Yanis se moque de Chloé parce qu'elle n'a pas de religion, ou si Chloé insulte la religion de Yanis pour le blesser, ils ne respectent plus la liberté de conscience de l'autre.

> **À retenir** :
> - La liberté de conscience : croire, ne pas croire, changer de croyance.
> - Elle est protégée par la DDHC (art. 10), la loi de 1905, la Constitution de 1958 et la CIDE (art. 14).
> - Croyants, athées et agnostiques ont les mêmes droits ; la laïcité n'est pas une opinion mais un principe juridique.
> - Limites : respecter la loi, l'ordre public et la liberté des autres (aucune pression pour faire changer quelqu'un de croyance) ; à l'école publique, pas de prosélytisme.
> - Vocabulaire : conscience, croyant, athée, agnostique, culte, ordre public, prosélytisme.
`,
      exercices: [
        { type: "qcm", question: "Que comprend la liberté de conscience ?", choix: ["Seulement le droit d'avoir une religion", "La liberté de croire, de ne pas croire et de changer de croyance", "L'obligation de choisir une religion à 18 ans", "Le droit d'imposer sa religion aux autres"], reponse: 1, explication: "La liberté de conscience protège **tous** les choix : croire, ne pas croire, changer d'avis." },
        { type: "saisie", question: "Comment appelle-t-on une personne qui ne croit en aucun dieu ?", reponses: ["athee", "un athee", "une athee", "athees"], explication: "Un **athée** ne croit en aucun dieu ; un **agnostique** pense qu'on ne peut pas savoir." },
        { type: "vf", question: "La laïcité est une opinion, comme l'athéisme.", reponse: false, explication: "La laïcité est un **principe juridique**, une règle de droit qui protège la liberté de tous, croyants comme non-croyants. L'athéisme est une **option personnelle**." },
        { type: "qcm", question: "Quel article de la DDHC dit que « nul ne doit être inquiété pour ses opinions, même religieuses » ?", choix: ["L'article 1er", "L'article 4", "L'article 10", "L'article 17"], reponse: 2, explication: "L'**article 10** de la DDHC (1789), à condition que l'expression de ces opinions « ne trouble pas l'ordre public établi par la Loi »." },
        { type: "saisie", question: "Comment appelle-t-on une personne qui pense qu'on ne peut pas savoir si un dieu existe ?", reponses: ["agnostique", "un agnostique", "une agnostique"], explication: "L'**agnostique** ne dit ni « oui » ni « non » : il pense qu'on ne peut pas savoir." },
        { type: "vf", question: "On peut refuser de respecter une loi en disant que sa religion l'interdit.", reponse: false, explication: "Chacun est libre de pratiquer sa religion **dans le respect de la loi**. Personne ne peut invoquer ses croyances pour s'affranchir des règles communes." },
        { type: "qcm", question: "Comment appelle-t-on le fait de chercher avec insistance à convaincre les autres d'adopter sa religion ?", choix: ["Le prosélytisme", "La laïcité", "La neutralité", "L'agnosticisme"], reponse: 0, explication: "Le **prosélytisme** insistant fait pression sur les autres. À l'école, la laïcité protège les élèves de ces pressions." },
        { type: "qcm", question: "Léa, 11 ans, dit à une camarade : « Tu ne crois en rien, tu n'as pas le droit de venir à mon anniversaire. » Que penser de cette phrase ?", choix: ["C'est normal, chacun choisit ses amis selon la religion", "C'est la laïcité qui l'exige", "C'est une obligation de la loi de 1905", "Elle exclut sa camarade à cause de ses convictions, ce qui ne respecte pas sa liberté de conscience"], reponse: 3, explication: "Croyants et non-croyants ont les **mêmes droits** et la **même dignité**. Exclure quelqu'un pour ses convictions, c'est ne pas respecter sa liberté de conscience." },
        { type: "redaction", question: "**Analyse de document** : « Nul ne doit être inquiété pour ses opinions, même religieuses, pourvu que leur manifestation ne trouble pas l'ordre public établi par la Loi. » (Déclaration des droits de l'homme et du citoyen, 26 août 1789, article 10)\n\n1. Présente le document (nature, date). 2. Explique avec tes mots « nul ne doit être inquiété pour ses opinions ». 3. Quelle limite le texte fixe-t-il ? Donne un exemple. 4. Quel lien fais-tu avec la liberté de conscience ?", corrige: `**1. Présentation** : c'est l'**article 10** de la **Déclaration des droits de l'homme et du citoyen**, adoptée le **26 août 1789**, au début de la Révolution française. C'est un texte fondamental : il fait encore partie de nos règles les plus importantes aujourd'hui.

**2. Explication** : « nul ne doit être inquiété » signifie que **personne** ne peut être menacé, puni ou persécuté à cause de ce qu'il pense, y compris en matière de **religion**. Chacun peut avoir ses opinions sans avoir peur.

**3. La limite** : exprimer ses opinions ne doit pas « troubler l'**ordre public** établi par la Loi », c'est-à-dire mettre en danger la sécurité ou la tranquillité de tous. Exemple : on peut manifester sa religion, mais pas en empêchant les autres de passer, en les menaçant ou en appelant à la violence.

**4. Lien avec la liberté de conscience** : cet article protège la **liberté de conscience** : la liberté de croire, de ne pas croire ou de changer de croyance. La loi de **1905** reprendra cette idée : « La République assure la liberté de conscience. »` },
      ],
    },
    {
      id: "laicite-republique",
      titre: "La laïcité, un principe de la République",
      theme: "Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École",
      cours: `
## 1. Une République laïque
L'**article 1er de la Constitution** de 1958 dit : « La France est une République indivisible, **laïque**, démocratique et sociale. Elle assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. Elle respecte toutes les croyances. »
La **laïcité** est un principe qui garantit la **liberté de conscience** et l'**égalité** de tous les citoyens, **quelles que soient leurs croyances ou leurs opinions**.

## 2. La loi du 9 décembre 1905
La **loi du 9 décembre 1905** « concernant la séparation des Églises et de l'État » fonde la laïcité en France.
- **Article 1er** : « La République assure la liberté de conscience. Elle garantit le libre exercice des cultes » (dans le respect de l'ordre public).
- **Article 2** : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » L'État ne choisit aucune religion, ne paie pas les prêtres, les pasteurs, les rabbins ou les imams.
Ces deux articles donnent les deux piliers de la laïcité :
1. La **neutralité de l'État** à l'égard des religions : il n'en favorise ni n'en défavorise aucune.
2. Le **libre exercice des cultes** : chacun peut pratiquer sa religion (dans le respect de la loi).

>! **Une exception** : en **Alsace** et en **Moselle** (allemandes en 1905), un régime particulier hérité du **Concordat** de 1801 (un accord signé entre Napoléon Bonaparte et le pape, par lequel l'État payait les prêtres) s'applique encore pour certains cultes (par exemple, l'État y rémunère des ministres du culte).

## 3. La laïcité ne s'applique pas de la même façon partout
| Espace | Exemples | Règle |
|---|---|---|
| Sphère publique (l'État et les services publics) | mairie, tribunal, école publique, hôpital public | les **agents** (fonctionnaires) doivent être **neutres** : ils ne montrent pas leur religion et traitent tout le monde de la même façon |
| Espace public | la rue, un parc, les transports | chacun peut manifester sa religion, dans le respect de l'ordre public et de la loi |
| Sphère privée | la maison, un lieu de culte, une association | chacun vit et pratique ses convictions librement, dans le respect de la loi |

Il faut distinguer les **agents** du service public (neutres) et les **usagers** (les personnes qui utilisent le service : en général, ils restent libres de montrer leur religion). L'**école** est un cas particulier, que tu verras dans le chapitre suivant.

## 4. Pourquoi la laïcité ?
- Elle **protège** chacun : personne ne peut t'imposer une religion, et l'État ne peut pas t'empêcher d'en avoir une.
- Elle assure l'**égalité** : un citoyen n'a ni plus ni moins de droits selon sa religion.
- Elle permet de **vivre ensemble** : des personnes de convictions différentes partagent les mêmes règles communes, les lois votées par tous.
Chaque **9 décembre**, jour anniversaire de la loi de 1905, on célèbre la **Journée de la laïcité**, notamment à l'école.

> **À retenir** :
> - Constitution de 1958, art. 1er : la France est une République laïque qui respecte toutes les croyances.
> - Loi du 9 décembre 1905 : liberté de conscience, libre exercice des cultes, l'État ne reconnaît, ne salarie ni ne subventionne aucun culte.
> - Neutralité de l'État et des agents publics ; liberté des usagers et des personnes dans l'espace public et privé.
> - Journée de la laïcité : le 9 décembre.
> - Vocabulaire : laïcité, neutralité, culte, séparation, sphère publique, espace public, sphère privée, agent, usager.
`,
      exercices: [
        { type: "saisie", question: "En quelle année a été votée la loi de séparation des Églises et de l'État ?", reponses: ["1905"], explication: "La loi du **9 décembre 1905**, qui fonde la laïcité en France." },
        { type: "qcm", question: "Que signifie « la République ne reconnaît, ne salarie ni ne subventionne aucun culte » ?", choix: ["Les religions sont interdites en France", "L'État ne favorise aucune religion et ne paie pas les responsables religieux", "L'État choisit une religion officielle", "Seuls les athées peuvent devenir fonctionnaires"], reponse: 1, explication: "C'est la **neutralité de l'État** (article 2 de la loi de 1905). Les religions restent libres : c'est le **libre exercice des cultes**." },
        { type: "vf", question: "La laïcité interdit aux habitants de pratiquer une religion.", reponse: false, explication: "Au contraire : la laïcité **garantit** le libre exercice des cultes et la liberté de conscience. C'est l'**État** qui est neutre, pas les citoyens." },
        { type: "qcm", question: "Un agent de la mairie (fonctionnaire) reçoit les habitants à son guichet. Que lui impose la laïcité ?", choix: ["Rien du tout", "Porter un signe religieux", "Demander la religion des habitants", "Rester neutre et traiter tous les habitants de la même façon"], reponse: 3, explication: "Les **agents** du service public doivent être **neutres** : ils représentent l'État, qui ne favorise aucune religion." },
        { type: "saisie", question: "Quel jour de l'année célèbre-t-on la Journée de la laïcité ? (jour et mois)", reponses: ["9 decembre", "le 9 decembre", "9/12", "09/12", "neuf decembre"], explication: "Le **9 décembre**, jour anniversaire de la loi de 1905." },
        { type: "vf", question: "Dans la rue, une personne peut porter un signe religieux.", reponse: true, explication: "Dans l'**espace public**, chacun peut manifester sa religion, dans le respect de la loi et de l'ordre public." },
        { type: "qcm", question: "Quel texte affirme que « la France est une République indivisible, laïque, démocratique et sociale » ?", choix: ["La Constitution de 1958 (article 1er)", "Le Code de la route", "La CIDE de 1989", "Le règlement intérieur du collège"], reponse: 0, explication: "L'**article 1er de la Constitution** de 1958, notre texte le plus important." },
        { type: "qcm", question: "Dans quel lieu une personne vit-elle ses convictions avec le plus de liberté (dans le respect de la loi) ?", choix: ["Au guichet de la préfecture, si elle y travaille", "Chez elle ou dans un lieu de culte", "Dans un tribunal, si elle est juge", "Dans sa classe, si elle est professeure"], reponse: 1, explication: "La **sphère privée** (maison, lieu de culte) est celle de la plus grande liberté. Les agents publics, eux, doivent être neutres dans l'exercice de leur travail." },
        { type: "redaction", question: "**Exercice de contrôle** : explique en un paragraphe ce qu'est la laïcité. Tu dois utiliser au moins une date, les expressions « liberté de conscience » et « neutralité de l'État », et montrer pourquoi la laïcité permet de vivre ensemble.", corrige: `La **laïcité** est un **principe** de la République française, inscrit dans l'article 1er de la **Constitution de 1958** (« La France est une République indivisible, laïque, démocratique et sociale »). Elle a été fondée par la **loi du 9 décembre 1905** de séparation des Églises et de l'État. Elle repose sur deux idées. D'abord, la **liberté de conscience** : chacun est libre de croire, de ne pas croire ou de changer de religion, et peut pratiquer son culte dans le respect de la loi et de l'ordre public. Ensuite, la **neutralité de l'État** : l'État « ne reconnaît, ne salarie ni ne subventionne aucun culte » ; il ne favorise aucune religion et ses agents (fonctionnaires) doivent rester neutres. La laïcité permet de **vivre ensemble**, car elle garantit l'**égalité** de tous les citoyens, quelles que soient leurs convictions : croyants, athées ou agnostiques ont les mêmes droits et obéissent aux mêmes lois. Personne ne peut imposer sa religion aux autres, et personne n'est rejeté à cause de la sienne.` },
      ],
    },
    {
      id: "laicite-ecole",
      titre: "La laïcité à l'École",
      theme: "Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École",
      cours: `
## 1. L'école, un espace particulier
L'**école publique** (école, collège, lycée) est un lieu où l'on **apprend** et où l'on forme son **esprit critique**. Les élèves sont jeunes : ils doivent pouvoir réfléchir et faire **leurs propres choix**, sans subir de **pression**. C'est pourquoi la laïcité y impose des **règles à tous** : aux personnels et aux élèves.

## 2. Des règles pour les personnels
Les **professeurs** et tous les **personnels** de l'école publique sont **neutres** : ils ne montrent pas leur religion ni leurs opinions politiques, et traitent tous les élèves de la même façon. Les **enseignements sont laïques** : on enseigne ce qui est établi par les sciences et l'histoire, et l'on peut **étudier** les religions comme faits historiques et culturels (par exemple en histoire en 6e).

## 3. Des règles pour les élèves : la loi du 15 mars 2004
La **loi du 15 mars 2004** dit : « Dans les écoles, les collèges et les lycées publics, le port de signes ou tenues par lesquels les élèves manifestent **ostensiblement** une appartenance religieuse est **interdit**. »
- **Ostensiblement** veut dire : de façon très visible, qui se remarque tout de suite (par exemple un voile, une kippa, une grande croix). Les signes **discrets** (une petite médaille, une petite croix) restent autorisés.
- Cette règle est reprise dans le **règlement intérieur** de chaque collège public.
- Elle ne concerne pas les établissements privés.
- En 2023, le ministre de l'Éducation nationale a précisé que l'**abaya** et le **qamis** (longues robes), portés pour montrer une appartenance religieuse, entrent dans cette interdiction ; le **Conseil d'État** (le plus haut tribunal administratif) a jugé cette décision conforme à la loi.
- Un élève ne peut pas refuser un cours (SVT, histoire, sport…) ou contester un enseignement au nom de sa religion.

## 4. La Charte de la laïcité à l'École
Depuis **2013**, la **Charte de la laïcité à l'École** est affichée dans tous les établissements publics. Ses **15 articles** rappellent notamment que :
- la laïcité de l'École protège les élèves de tout **prosélytisme** et de toute **pression** qui les empêcheraient de faire leurs propres choix ;
- elle permet l'**égalité** entre les filles et les garçons et le **respect** de chacun ;
- les personnels sont tenus à une stricte **neutralité** ;
- aucun élève ne peut invoquer une conviction religieuse ou politique pour contester à un enseignant le droit de traiter une question au programme.

## 5. Pourquoi un interdit protège
>! **Comparer les textes** : la DDHC (articles 4 et 10) protège la **liberté** d'avoir et d'exprimer ses opinions, avec une limite : ne pas nuire aux autres. La loi de 2004 **limite** une liberté à l'école. Ce n'est pas une contradiction : l'**interdit** protège la liberté de conscience des élèves, qui sont encore en train de se construire. Aucun élève n'est mis à part, montré du doigt ou poussé à changer de convictions à cause des signes portés par les autres.

À l'école laïque, des élèves de toutes les convictions apprennent **ensemble**, avec les mêmes règles : cela les prépare à vivre dans une société où différentes opinions peuvent s'exprimer et se discuter **dans le cadre de la loi**.

> **À retenir** :
> - L'école publique est un espace neutre qui protège les élèves des pressions.
> - Personnels : neutralité stricte. Élèves : loi du 15 mars 2004, pas de signe religieux ostensible.
> - Charte de la laïcité à l'École (2013, 15 articles) : protection contre le prosélytisme, égalité, respect.
> - On ne peut pas refuser un cours au nom de ses convictions.
> - Vocabulaire : ostensible, neutralité, prosélytisme, charte, enseignement laïque.
`,
      exercices: [
        { type: "saisie", question: "En quelle année a été votée la loi qui interdit aux élèves des écoles, collèges et lycées publics les signes religieux ostensibles ?", reponses: ["2004"], explication: "La **loi du 15 mars 2004**, reprise dans le règlement intérieur des établissements publics." },
        { type: "qcm", question: "Que veut dire « ostensiblement » dans la loi de 2004 ?", choix: ["En secret", "Seulement pendant les cours de sport", "De façon très visible, qui se remarque tout de suite", "Avec l'accord des parents"], reponse: 2, explication: "Un signe **ostensible** se voit tout de suite. Les signes **discrets** (petite médaille, petite croix) sont autorisés." },
        { type: "vf", question: "Dans un collège public, un professeur doit rester neutre et ne pas montrer sa religion.", reponse: true, explication: "Les personnels du service public d'éducation sont tenus à une **stricte neutralité**." },
        { type: "qcm", question: "Depuis quelle année la Charte de la laïcité est-elle affichée dans les établissements scolaires publics ?", choix: ["1789", "1905", "2013", "2024"], reponse: 2, explication: "La **Charte de la laïcité à l'École** date de **2013** et compte 15 articles." },
        { type: "vf", question: "Un élève peut refuser d'assister à un cours d'histoire sur les débuts du christianisme en invoquant sa religion.", reponse: false, explication: "Aucun élève ne peut contester un enseignement au programme au nom de ses convictions. Étudier une religion en histoire, ce n'est pas demander d'y croire." },
        { type: "qcm", question: "Selon la Charte de la laïcité, de quoi la laïcité protège-t-elle les élèves ?", choix: ["Des devoirs à la maison", "De tout prosélytisme et de toute pression qui les empêcheraient de faire leurs propres choix", "Des contrôles de connaissances", "Des règles du collège"], reponse: 1, explication: "L'école laïque est un espace **à l'abri des pressions**, où chaque élève peut construire librement sa pensée." },
        { type: "saisie", question: "Combien d'articles compte la Charte de la laïcité à l'École ? (réponds par un nombre)", reponses: ["15", "quinze", "15 articles"], explication: "La Charte de 2013 compte **15 articles**." },
        { type: "qcm", question: "Quelle situation respecte la laïcité dans un collège public ?", choix: ["Un élève porte une petite médaille religieuse discrète sous son pull", "Un professeur distribue des prospectus pour sa religion", "Un élève refuse de travailler avec une fille", "Une élève refuse le cours de SVT sur la reproduction"], reponse: 0, explication: "Les signes **discrets** sont autorisés. Les autres situations portent atteinte à la neutralité, à l'égalité filles-garçons ou au droit d'enseigner le programme." },
        { type: "redaction", question: "**Analyse de documents** :\n\n**Document 1** : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. » (DDHC, 1789, article 4)\n\n**Document 2** : « Dans les écoles, les collèges et les lycées publics, le port de signes ou tenues par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit. » (loi du 15 mars 2004)\n\n1. Présente les deux documents. 2. Le document 2 limite-t-il une liberté ? Laquelle ? 3. Explique pourquoi cet interdit protège en réalité les élèves. Aide-toi du document 1 et de la Charte de la laïcité.", corrige: `**1. Présentation** : le document 1 est l'**article 4** de la **Déclaration des droits de l'homme et du citoyen** de **1789**, texte fondamental de la Révolution française, qui définit la liberté. Le document 2 est un extrait de la **loi du 15 mars 2004**, votée par le Parlement, qui s'applique aux élèves des **écoles, collèges et lycées publics** et est reprise dans le règlement intérieur.

**2. Une liberté limitée** : oui, la loi de 2004 limite la **liberté de manifester sa religion** : à l'école publique, les élèves ne peuvent pas porter de signes ou de tenues religieuses **ostensibles** (très visibles). Ils restent libres de croire et de porter un signe **discret** ; et dehors, ils retrouvent toute leur liberté.

**3. Un interdit qui protège** : le document 1 montre que la liberté a une limite : ne pas **nuire à autrui**. À l'école, les élèves sont jeunes et encore en train de construire leurs idées. Sans cette règle, certains pourraient subir des **pressions** pour adopter ou montrer une religion, ou être **mis à l'écart** à cause de leurs signes. La **Charte de la laïcité** (2013) explique que la laïcité protège les élèves de tout **prosélytisme** et de toute **pression** qui les empêcheraient de faire leurs propres choix. L'interdit protège donc la **liberté de conscience** de chacun et l'**égalité** entre tous les élèves : à l'école, on est d'abord des élèves qui apprennent ensemble, avec les mêmes règles.` },
        { type: "vf", question: "Dans un collège public, une élève peut porter une abaya pour montrer son appartenance religieuse.", reponse: false, explication: "Depuis 2023, l'**abaya** et le **qamis**, portés pour manifester une appartenance religieuse, entrent dans l'interdiction de la **loi du 15 mars 2004** ; le **Conseil d'État** a jugé cette règle conforme à la loi." },
      ],
    },
    {
      id: "droit-vie-privee",
      titre: "Le droit au respect de la vie privée",
      theme: "Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée",
      cours: `
## 1. Vie privée et vie publique
- La **vie privée**, c'est tout ce qui ne regarde que toi et tes proches : ta famille, ta maison, ta santé, tes amitiés, tes sentiments, tes messages, tes croyances.
- La **vie publique**, c'est ce que tu fais devant les autres ou dans la société : au collège, dans la rue, dans un club, quand tu publies quelque chose en ligne pour tout le monde.
- Même dans la vie publique, ta vie privée reste protégée : un camarade n'a pas le droit de lire tes messages ou de raconter tes secrets à tout le monde.

## 2. Un droit pour l'enfant comme pour l'adulte
| Texte | Ce qu'il dit |
|---|---|
| CIDE (1989), article 16 | « Nul enfant ne fera l'objet d'immixtions arbitraires ou illégales dans sa vie privée, sa famille, son domicile ou sa correspondance, ni d'atteintes illégales à son honneur et à sa réputation. » |
| Charte des droits fondamentaux de l'Union européenne (2000), article 7 | « Toute personne a droit au respect de sa vie privée et familiale, de son domicile et de ses communications. » |
| Code civil, article 9 | « Chacun a droit au respect de sa vie privée. » |
| DDHC (1789) | le Conseil constitutionnel considère que ce droit découle de la **liberté** proclamée par la Déclaration (article 2) |
Une **immixtion**, c'est le fait de se mêler de ce qui ne nous regarde pas, d'entrer sans permission dans la vie de quelqu'un. La **correspondance**, ce sont les lettres et, aujourd'hui, les messages.

## 3. Un droit lié à d'autres droits de la CIDE
- **Article 6** : le **droit à la vie** ; **articles 7 et 8** : le droit d'avoir un **nom**, une **nationalité**, et de préserver son **identité**.
- Ces droits disent la même chose : chaque enfant est une **personne** unique, qui a une **dignité**. Respecter sa vie privée, c'est respecter cette personne.

## 4. Ce que comprend la vie privée
Le droit au respect de la vie privée comprend en particulier :
- le **droit à l'intimité** : ton corps, ta santé, ta vie affective et sexuelle, tes sentiments ne regardent que toi ;
- le **droit à l'image** : on ne peut pas diffuser ta photo ou ta vidéo sans ton accord (et celui de tes parents tant que tu es mineur) ;
- la protection de tes **données personnelles** (nom, adresse, numéro, photos), y compris sur internet.

## 5. Des limites pour te protéger
Tes **parents** exercent l'**autorité parentale** : ils doivent te protéger, veiller à ta santé, ta sécurité et ton éducation. Ils peuvent donc s'intéresser à ce que tu fais en ligne et fixer des règles, ce n'est pas une atteinte à ta vie privée. En revanche, la loi leur demande aussi de respecter ta vie privée, en tenant compte de ton âge, et de **protéger ensemble** ton droit à l'image (loi du 19 février 2024).

> **À retenir** :
> - Vie privée = ce qui ne regarde que toi et tes proches ; elle est protégée même dans la vie publique.
> - Textes : CIDE art. 16, Charte des droits fondamentaux de l'UE art. 7, Code civil art. 9.
> - Elle comprend l'intimité, le droit à l'image et les données personnelles.
> - Elle est liée à la dignité de la personne (CIDE art. 6, 7 et 8).
> - Vocabulaire : vie privée, vie publique, intimité, immixtion, correspondance, dignité, autorité parentale.
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces éléments fait partie de ta vie privée ?", choix: ["Le nom de ton collège", "La couleur du drapeau français", "Ta santé et les messages que tu échanges avec tes amis", "L'emploi du temps affiché dans le couloir"], reponse: 2, explication: "Ta **santé** et ta **correspondance** (messages) font partie de ta vie privée : elles ne regardent que toi et tes proches." },
        { type: "saisie", question: "Quel article de la CIDE protège la vie privée de l'enfant ? (donne le numéro)", reponses: ["16", "article 16", "art. 16", "l'article 16", "art 16", "article 16 de la CIDE"], explication: "L'**article 16** de la CIDE : « Nul enfant ne fera l'objet d'immixtions arbitraires ou illégales dans sa vie privée… »" },
        { type: "vf", question: "Le droit au respect de la vie privée ne concerne que les adultes.", reponse: false, explication: "L'enfant comme l'adulte a droit au respect de sa vie privée : la **CIDE** le garantit aux enfants." },
        { type: "qcm", question: "Que veut dire le mot « immixtion » ?", choix: ["Se mêler sans permission de la vie de quelqu'un", "Un mélange de couleurs", "Une loi européenne", "Un message envoyé à toute la classe"], reponse: 0, explication: "Une **immixtion** dans la vie privée, c'est entrer sans permission dans ce qui ne nous regarde pas (lire un journal intime, fouiller un téléphone)." },
        { type: "qcm", question: "Quel texte dit : « Chacun a droit au respect de sa vie privée » ?", choix: ["La loi de 1905", "Le Code de la route", "La Charte de la laïcité", "Le Code civil (article 9)"], reponse: 3, explication: "L'**article 9 du Code civil**. La Charte des droits fondamentaux de l'UE (art. 7) et la CIDE (art. 16) protègent aussi ce droit." },
        { type: "vf", question: "Le droit à l'image fait partie du droit au respect de la vie privée.", reponse: true, explication: "Le droit au respect de la vie privée comprend le **droit à l'intimité** et le **droit à l'image**." },
        { type: "qcm", question: "Ta mère veut savoir sur quelles applications tu passes du temps. Que faut-il en penser ?", choix: ["C'est interdit par la CIDE", "C'est normal : avec l'autorité parentale, elle doit te protéger, tout en respectant ta vie privée selon ton âge", "Elle doit demander l'autorisation d'un juge", "Elle n'a aucun droit sur ce que tu fais"], reponse: 1, explication: "Les parents exercent l'**autorité parentale** pour protéger leur enfant. Ils fixent des règles, mais doivent aussi respecter sa vie privée en tenant compte de son âge." },
        { type: "saisie", question: "Comment appelle-t-on la partie de la vie privée qui concerne le corps, les sentiments et la vie affective d'une personne ?", reponses: ["intimite", "l'intimite", "la vie intime", "droit a l'intimite", "le droit a l'intimite"], explication: "L'**intimité** recouvre notamment la vie affective et sexuelle d'une personne." },
        { type: "redaction", question: "**Étude de cas** : pendant la récréation, Mathis prend le téléphone que Jade a laissé sur un banc, lit ses messages et raconte à toute la classe qu'elle est amoureuse d'un élève de 5e.\n\n1. Quel droit de Jade n'a pas été respecté ? Cite un texte. 2. Quelles parties de la vie privée sont touchées ? 3. Quelles conséquences ce geste peut-il avoir pour Jade ? 4. Que peut faire Jade ?", corrige: `**1.** Mathis n'a pas respecté le **droit au respect de la vie privée** de Jade. Ce droit est garanti à tous les enfants par l'**article 16 de la CIDE** (1989) : « Nul enfant ne fera l'objet d'immixtions arbitraires ou illégales dans sa vie privée, [...] sa correspondance, ni d'atteintes illégales à son honneur et à sa réputation. » L'article 9 du Code civil dit aussi : « Chacun a droit au respect de sa vie privée. »

**2.** Deux parties de la vie privée sont touchées : sa **correspondance** (ses messages, que Mathis a lus sans permission) et son **intimité** (ses sentiments, sa vie affective, qui ne regardent qu'elle).

**3.** Jade peut se sentir **humiliée** et trahie ; elle peut subir des moqueries, qui risquent de se répéter et de devenir du **harcèlement** ; sa **réputation** peut être atteinte.

**4.** Jade peut en parler à un adulte de confiance (professeur principal, CPE, parents). Le collège peut **punir ou sanctionner** Mathis, car le règlement intérieur impose le respect des autres. Si les moqueries continuent ou se diffusent en ligne, elle peut appeler le **3018**, numéro gratuit et confidentiel contre le harcèlement et les violences numériques.` },
        { type: "qcm", question: "Dans la CIDE, le droit au respect de la vie privée (article 16) est lié au droit à la vie (article 6) et au droit d'avoir un nom et une nationalité (articles 7 et 8). Pourquoi ces droits vont-ils ensemble ?", choix: ["Parce qu'ils ont tous été écrits en 1789", "Parce qu'ils concernent seulement les réseaux sociaux", "Parce qu'ils protègent tous l'enfant comme une personne unique, avec son identité et sa dignité", "Parce qu'un enfant sans nationalité n'a pas droit à une vie privée"], reponse: 2, explication: "Être vivant, avoir un **nom**, une **nationalité**, une **identité** : c'est être reconnu comme une **personne**. Respecter la vie privée de quelqu'un, c'est respecter cette personne et sa **dignité**. Ces droits valent pour **tous** les enfants, sans exception (article 2 de la CIDE) ; la CIDE date de 1989, pas de 1789." },
        { type: "redaction", question: "**Analyse de documents** :\n\n**Document 1** : « Chacun a droit au respect de sa vie privée. » (Code civil, article 9)\n\n**Document 2** : « Toute personne a droit au respect de sa vie privée et familiale, de son domicile et de ses communications. » (Charte des droits fondamentaux de l'Union européenne, 2000, article 7)\n\n**Document 3** : « Nul enfant ne fera l'objet d'immixtions arbitraires ou illégales dans sa vie privée, sa famille, son domicile ou sa correspondance, ni d'atteintes illégales à son honneur et à sa réputation. » (Convention internationale des droits de l'enfant, 1989, article 16)\n\n1. Présente les trois documents : de quel texte viennent-ils, et qui protègent-ils ? 2. Quel droit ont-ils en commun ? Relève deux éléments de la vie privée cités dans les documents. 3. Qu'est-ce que le document 3 ajoute par rapport aux deux autres ? 4. Montre, avec un exemple de la vie d'un élève de 6e, que ce droit doit aussi être respecté sur internet.", corrige: `**1. Présentation** : le document 1 est l'**article 9 du Code civil**, une loi française qui s'applique à **chacun**, adulte ou enfant. Le document 2 est l'**article 7** de la **Charte des droits fondamentaux de l'Union européenne** (2000), qui protège **toute personne** dans l'Union européenne. Le document 3 est l'**article 16** de la **Convention internationale des droits de l'enfant** (ONU, 1989), qui protège spécialement les **enfants** (les moins de 18 ans).

**2. Un droit commun** : les trois textes protègent le **droit au respect de la vie privée**. Ils citent par exemple la **famille**, le **domicile** et les **communications** ou la **correspondance** (aujourd'hui, les messages).

**3. Ce qu'ajoute le document 3** : il dit clairement que l'**enfant** a ce droit, comme l'adulte. Il protège aussi l'**honneur** et la **réputation** de l'enfant : on ne doit pas l'humilier ni salir son image. Il interdit les **immixtions**, c'est-à-dire le fait de se mêler sans permission de la vie de quelqu'un.

**4. Sur internet** : par exemple, si un camarade publie sur un groupe de classe une capture d'écran de mes messages privés, ou une photo de moi sans mon accord, il ne respecte ni ma **correspondance** ni mon **droit à l'image**, et il peut atteindre ma **réputation numérique**. Les mêmes règles s'appliquent en ligne et dans la vie réelle.

**Ce qu'on attend** : les trois textes présentés (nature, date si elle est donnée, personnes protégées) ; le droit commun nommé ; au moins deux éléments relevés et cités ; l'idée que la CIDE protège spécialement l'enfant (honneur, réputation) ; un exemple numérique précis.` },
      ],
    },
    {
      id: "intimite-droit-image",
      titre: "L'intimité et le droit à l'image",
      theme: "Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée",
      cours: `
## 1. Le droit à l'intimité
- L'**intimité** d'une personne, c'est ce qu'elle a de plus personnel : son **corps**, sa **santé**, ses **sentiments**, sa **vie affective et sexuelle**.
- Ton corps t'appartient : personne n'a le droit de le toucher, de le regarder ou de le photographier **sans ton accord**. Dire **non** est un droit.
- Si quelqu'un ne respecte pas ton intimité (gestes, photos, messages gênants), ce n'est **jamais** de ta faute : parles-en à un adulte de confiance. Tu peux aussi appeler le **119** (Allô enfance en danger), gratuit, jour et nuit.

## 2. Le droit à l'image
- Ton **image**, c'est ta photo, ta vidéo, ta voix enregistrée : tout ce qui permet de te **reconnaître**.
- Le **droit à l'image** : on ne peut pas **diffuser** (publier, envoyer, partager) l'image d'une personne reconnaissable **sans son accord**. Pour un **mineur**, il faut en plus l'accord des **parents**.
- C'est pour cela que le collège demande à tes parents une **autorisation** avant de publier une photo de classe ou de sortie.
- Il existe des exceptions limitées : une foule lors d'un événement public, l'actualité (sans porter atteinte à la dignité de la personne).

>! **Avant de publier, pose-toi trois questions** :
>! 1. Les personnes sont-elles reconnaissables ?
>! 2. Leur ai-je demandé leur accord (et celui de leurs parents si elles sont mineures) ?
>! 3. Cette image pourrait-elle les blesser, les gêner ou les humilier, aujourd'hui ou plus tard ?
>! Si tu as un doute : **je ne publie pas**.

## 3. Ce que la loi punit
| Acte | Ce que dit la loi |
|---|---|
| Prendre en photo ou filmer quelqu'un dans un **lieu privé** (chez lui, dans sa chambre) sans son accord, ou diffuser cette image | atteinte à l'intimité de la vie privée : jusqu'à **1 an** de prison et **45 000 €** d'amende (Code pénal, art. 226-1) |
| Diffuser une image **intime** ou à caractère sexuel de quelqu'un sans son accord | délit puni encore plus sévèrement, même si la personne avait accepté d'être photographiée |
| Photographier ou filmer le corps de quelqu'un pendant qu'il se change (vestiaire, cabine, toilettes) | délit (voyeurisme), puni plus sévèrement quand la victime est mineure ou quand l'image est enregistrée ou envoyée |
| Faire un **montage** (photo truquée) d'une personne sans son accord | délit |
| Filmer une agression | considéré comme une complicité de l'agression ; diffuser la vidéo est en plus un délit (exceptions : le travail des journalistes qui informent le public, et le fait de filmer pour donner la vidéo comme **preuve** à la police ou à la justice, sans la diffuser) |
Un **mineur** peut être jugé et sanctionné par la justice des mineurs, et ses parents doivent réparer le dommage.

## 4. Les parents aussi
La **loi du 19 février 2024** sur le droit à l'image des enfants rappelle que les **parents** doivent protéger **ensemble** l'image de leur enfant, en respectant sa vie privée. Publier sans cesse des photos de son enfant sur les réseaux sociaux peut lui nuire plus tard.

> **À retenir** :
> - Ton intimité (corps, santé, sentiments) t'appartient : tu as le droit de dire non.
> - Droit à l'image : pas de diffusion sans l'accord de la personne (et de ses parents si elle est mineure).
> - Diffuser une image intime, faire un montage ou diffuser une agression filmée sont des délits.
> - Numéros utiles : 119 (enfance en danger), 3018 (harcèlement et violences numériques).
> - Vocabulaire : intimité, droit à l'image, diffuser, consentement (accord), montage.
`,
      exercices: [
        { type: "vf", question: "On peut publier la photo d'un camarade reconnaissable sans lui demander son accord, si la photo est jolie.", reponse: false, explication: "Le **droit à l'image** impose l'accord de la personne, et celui de ses parents si elle est mineure, quelle que soit la photo." },
        { type: "qcm", question: "Pourquoi le collège demande-t-il une autorisation aux parents avant de publier une photo de sortie scolaire ?", choix: ["Pour faire payer la photo", "Pour respecter le droit à l'image des élèves mineurs", "Parce que les photos sont interdites au collège", "Pour vérifier que les élèves sont bien présents"], reponse: 1, explication: "Les élèves sont **mineurs** : il faut l'accord des **parents** pour diffuser leur image." },
        { type: "saisie", question: "Quel numéro gratuit peut appeler un enfant en danger, jour et nuit ?", reponses: ["119"], explication: "Le **119** (Allô enfance en danger) est gratuit et joignable 24 heures sur 24. Le **3018** concerne le harcèlement et les violences numériques." },
        { type: "qcm", question: "Lequel de ces éléments fait partie de l'intimité d'une personne ?", choix: ["Sa classe", "Le nom de sa ville", "Sa couleur préférée affichée sur son profil public", "Son corps et ses sentiments"], reponse: 3, explication: "L'**intimité** recouvre le corps, la santé, les sentiments et la vie affective et sexuelle." },
        { type: "vf", question: "Filmer une bagarre et partager la vidéo est puni par la loi.", reponse: true, explication: "Filmer une agression est considéré comme une **complicité** de violence, et diffuser la vidéo est un **délit** : cela humilie encore la victime." },
        { type: "qcm", question: "Une élève a envoyé une photo d'elle à une amie, en confiance. L'amie la partage sur un groupe de classe. Que faut-il en penser ?", choix: ["L'amie n'a pas respecté le droit à l'image : avoir reçu la photo ne donne pas le droit de la diffuser", "Ce n'est pas grave, puisque l'élève avait envoyé la photo elle-même", "C'est la faute de l'élève, elle n'avait qu'à ne rien envoyer", "C'est autorisé si le groupe compte moins de 30 personnes"], reponse: 0, explication: "Accepter d'envoyer une photo à une personne, ce n'est **pas** accepter qu'elle soit diffusée. La victime n'est jamais coupable : il faut prévenir un adulte et signaler la publication." },
        { type: "saisie", question: "Comment appelle-t-on le droit qui permet à chacun de s'opposer à la diffusion de sa photo ou de sa vidéo ?", reponses: ["droit a l'image", "le droit a l'image", "droit a l image"], explication: "Le **droit à l'image** fait partie du droit au respect de la vie privée." },
        { type: "qcm", question: "Quelle peine maximale le Code pénal prévoit-il pour l'atteinte à l'intimité de la vie privée (par exemple filmer quelqu'un chez lui sans son accord et diffuser la vidéo) ?", choix: ["Aucune peine", "Un simple avertissement", "1 an de prison et 45 000 € d'amende", "10 € d'amende"], reponse: 2, explication: "L'article **226-1** du Code pénal prévoit jusqu'à **1 an d'emprisonnement et 45 000 € d'amende**." },
        { type: "redaction", question: "**Paragraphe argumenté** : à la sortie de la piscine, Noé prend en photo Adam qui se change et veut la poster « pour rigoler » sur le groupe de la classe. Explique à Noé pourquoi il ne doit pas le faire. Utilise au moins deux notions du cours et une règle de loi.", corrige: `Noé ne doit pas publier cette photo. D'abord, elle touche à l'**intimité** d'Adam : son **corps** ne regarde que lui, et il a été photographié sans son **accord** dans un vestiaire, un lieu où chacun doit être protégé des regards. Ensuite, publier la photo d'une personne reconnaissable sans son accord (et, pour un mineur, sans celui de ses parents) ne respecte pas son **droit à l'image**, qui fait partie du **droit au respect de la vie privée** garanti par l'article 16 de la **CIDE** et l'article 9 du Code civil. Ce n'est donc pas « pour rigoler » : Adam pourrait être **humilié** et subir des moqueries, et une image publiée peut être copiée et ne jamais disparaître. Enfin, c'est puni par la loi : le **Code pénal** punit l'atteinte à l'intimité de la vie privée (article 226-1 : jusqu'à **1 an de prison et 45 000 € d'amende**), et il punit aussi comme un délit le fait de photographier le corps de quelqu'un pendant qu'il se change, encore plus sévèrement quand la victime est mineure ; un mineur peut être sanctionné par la justice des mineurs. Noé doit **effacer** la photo. Si elle a déjà circulé, Adam peut prévenir un adulte et appeler le **3018**.` },
      ],
    },
    {
      id: "donnees-traces-numeriques",
      titre: "Données personnelles, traces et réputation numériques",
      theme: "Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée",
      cours: `
## 1. Les données personnelles
Une **donnée personnelle** est une information qui permet d'**identifier** une personne, directement ou indirectement :
- ton **nom**, ton **prénom**, ta **photo**, ta **voix** ;
- ton **adresse**, ton numéro de téléphone, ton adresse électronique, ton identifiant de jeu ;
- ta **localisation**, ton collège, tes goûts, tes achats…
Certaines données sont **sensibles** : ta santé, ta religion, tes opinions politiques. Elles sont particulièrement protégées.

## 2. Les traces numériques
Chaque fois que tu utilises internet, tu laisses des **traces numériques**.
| Traces volontaires | Traces involontaires |
|---|---|
| ce que tu publies : photos, commentaires, « j'aime », vidéos, messages | ce qui est enregistré sans que tu le voies : sites visités, recherches, temps passé, localisation, cookies |
Ces traces forment ton **identité numérique** : l'image de toi que l'on peut trouver en ligne.

## 3. À quoi servent tes données ?
- **Usages commerciaux** : les entreprises analysent tes traces pour te montrer des **publicités ciblées** et te garder le plus longtemps possible sur leur application. Quand un service est « gratuit », ce sont souvent tes **données** qui le paient.
- **Usages politiques** : des données peuvent servir à envoyer à chacun des messages politiques adaptés pour influencer son vote. En **2018**, le scandale **Cambridge Analytica** a révélé que les données de millions d'utilisateurs de Facebook avaient été récupérées sans leur accord pour cibler des électeurs.

## 4. Ta réputation numérique
- La **réputation numérique** (ou e-réputation), c'est ce que les autres pensent de toi à partir de ce qu'ils trouvent en ligne.
- Une publication peut être **copiée**, **capturée** (capture d'écran) et **partagée** en quelques secondes : même supprimée, elle peut réapparaître des années plus tard (par exemple au moment de chercher un stage).
- Le **droit à l'oubli** permet de demander l'effacement de données ou leur retrait des moteurs de recherche, surtout pour ce qui a été publié quand on était mineur. Mais il est **difficile à faire appliquer** complètement, car les copies circulent.

## 5. La loi te protège
- La **CNIL** (Commission nationale de l'informatique et des libertés), créée en **1978**, protège les données personnelles en France ; elle aide les jeunes à faire valoir leurs droits.
- Le **RGPD** (règlement général sur la protection des données), règlement de l'**Union européenne** appliqué depuis **2018**, te donne des droits : savoir quelles données sont gardées, les corriger, les faire effacer.
- En France, c'est à partir de **15 ans** qu'un jeune peut accepter **seul** que ses données soient utilisées par un service en ligne ; avant, l'accord d'un parent est aussi nécessaire.

>! **Les bons réflexes** : un pseudonyme plutôt que ton vrai nom ; un profil **privé** ; ne jamais donner ton adresse ou ton numéro ; un mot de passe long et secret ; réfléchir avant de publier (« est-ce que j'accepterais que tout le collège le voie, et dans dix ans ? »).

> **À retenir** :
> - Donnée personnelle = information qui permet d'identifier quelqu'un.
> - Traces volontaires (ce que je publie) et involontaires (ce qui est enregistré) forment mon identité numérique.
> - Mes données servent à des fins commerciales et parfois politiques.
> - Une publication est difficile à effacer : droit à l'oubli, mais difficile à appliquer.
> - CNIL (1978), RGPD (2018), accord seul à partir de 15 ans.
> - Vocabulaire : donnée personnelle, trace numérique, identité et réputation numériques, droit à l'oubli, CNIL, RGPD.
`,
      exercices: [
        { type: "qcm", question: "Laquelle de ces informations est une donnée personnelle ?", choix: ["La date de la fête nationale", "La capitale de la France", "Ton adresse et ton numéro de téléphone", "La météo du jour"], reponse: 2, explication: "Une **donnée personnelle** permet d'identifier une personne : ton adresse et ton numéro t'identifient." },
        { type: "vf", question: "L'historique des sites que tu visites est une trace numérique involontaire.", reponse: true, explication: "Il est enregistré sans que tu le publies : c'est une **trace involontaire**. Une photo que tu postes est une trace **volontaire**." },
        { type: "saisie", question: "Quel est le sigle de la Commission nationale de l'informatique et des libertés ?", reponses: ["CNIL", "la CNIL"], explication: "La **CNIL**, créée en 1978, protège les données personnelles en France." },
        { type: "qcm", question: "Pourquoi beaucoup d'applications « gratuites » collectent-elles tes données ?", choix: ["Pour t'envoyer des publicités ciblées et te garder le plus longtemps possible sur l'application", "Pour t'aider à faire tes devoirs", "Parce que la loi les y oblige", "Pour les donner gratuitement au collège"], reponse: 0, explication: "Tes **données** ont une valeur commerciale : elles permettent de vendre de la publicité ciblée." },
        { type: "saisie", question: "À partir de quel âge un jeune peut-il, en France, accepter seul que ses données soient utilisées par un service en ligne ? (réponds par un nombre)", reponses: ["15", "15 ans", "quinze", "quinze ans"], explication: "À partir de **15 ans** ; avant, l'accord d'un parent est aussi nécessaire." },
        { type: "vf", question: "Une photo supprimée de ton compte disparaît forcément d'internet pour toujours.", reponse: false, explication: "Elle a pu être **copiée** ou **capturée** avant d'être supprimée : c'est pourquoi le **droit à l'oubli** est difficile à faire appliquer complètement." },
        { type: "qcm", question: "Que révèle le scandale Cambridge Analytica (2018) ?", choix: ["Que les réseaux sociaux protègent toujours parfaitement les données", "Que les données personnelles sont inutiles", "Que les données de millions d'utilisateurs avaient été récupérées sans leur accord pour cibler des électeurs", "Que seules les entreprises de jeux vidéo collectent des données"], reponse: 2, explication: "Ce scandale montre que les données peuvent aussi servir à des **fins politiques**, pour influencer des votes." },
        { type: "qcm", question: "Quel est le meilleur réflexe pour protéger ta vie privée sur un réseau social ?", choix: ["Mettre ton nom complet et ton adresse dans ton profil", "Accepter toutes les demandes d'amis", "Publier ta localisation en direct", "Utiliser un pseudonyme et un profil privé"], reponse: 3, explication: "Un **pseudonyme** et un **profil privé** limitent les personnes qui peuvent voir tes informations." },
        { type: "redaction", question: "**Étude de cas** : Sarah, 11 ans, crée un compte sur une application de vidéos. Elle met son vrai nom, le nom de son collège, publie une vidéo dans sa chambre et active la localisation.\n\n1. Relève les données personnelles que Sarah partage. 2. Quels risques prend-elle ? Donne au moins deux exemples. 3. Explique ce qu'est la « réputation numérique » et pourquoi Sarah doit y penser dès maintenant. 4. Donne-lui trois conseils.", corrige: `**1. Les données personnelles** : son **nom** et son **prénom**, le **nom de son collège**, son **image** (la vidéo) et l'**intérieur de sa chambre**, sa **localisation**. Ensemble, elles permettent de savoir qui elle est et où la trouver.

**2. Les risques** (au choix) : être retrouvée par un inconnu mal intentionné grâce à sa localisation et à son collège ; voir sa vidéo copiée, détournée ou commentée de façon blessante, ce qui peut mener à du **cyberharcèlement** ; voir ses données utilisées à des fins **commerciales** (publicité ciblée). De plus, à 11 ans, elle n'a pas l'âge pour accepter seule l'utilisation de ses données : l'accord d'un parent est nécessaire avant 15 ans.

**3. La réputation numérique** est l'image que les autres se font d'elle à partir de ce qu'ils trouvent en ligne. Une vidéo peut être **capturée** et **partagée** en quelques secondes, et réapparaître des années plus tard, même si elle l'a supprimée : le **droit à l'oubli** existe, mais il est difficile à faire appliquer complètement. Ce qu'elle publie à 11 ans peut donc la suivre longtemps.

**4. Trois conseils** : utiliser un **pseudonyme** et un **profil privé** ; **désactiver la localisation** et ne jamais indiquer son collège ou son adresse ; **en parler à ses parents** et réfléchir avant de publier (« accepterais-je que tout le collège voie cette vidéo, aujourd'hui et dans dix ans ? »).` },
      ],
    },
    {
      id: "majorite-numerique",
      titre: "La majorité numérique et les risques du numérique",
      theme: "Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée",
      cours: `
## 1. Des risques bien réels
Le numérique permet d'apprendre, de jouer, de garder le contact avec ses proches. Mais il comporte aussi des **risques**, surtout pour les plus jeunes.
| Risque | Exemple | Que faire ? |
|---|---|---|
| **Cyberharcèlement** | messages insultants répétés, photo humiliante partagée, exclusion d'un groupe | ne pas répondre, faire des captures d'écran, bloquer, signaler, en parler à un adulte, appeler le **3018** |
| **Désinformation** | une fausse information (« infox ») partagée des milliers de fois | vérifier la source, chercher si des médias fiables en parlent, ne pas partager dans le doute |
| **Risques pour la santé** | se coucher tard à cause des écrans, fatigue, manque d'activité physique, difficulté à décrocher | fixer des horaires, pas d'écran dans la chambre la nuit, faire d'autres activités |
| **Rencontres dangereuses** | un inconnu qui se fait passer pour un enfant et demande des photos | ne jamais envoyer de photo, ne pas accepter de rendez-vous, prévenir un adulte |

## 2. Le cyberharcèlement est un délit
Le **harcèlement** (en ligne ou non) consiste à faire subir à quelqu'un, de façon **répétée**, des paroles ou des actes qui le blessent. Sur internet, il ne s'arrête pas à la sortie du collège et peut être vu par beaucoup de monde. C'est un **délit**, puni par la loi, y compris pour les mineurs. Le **3018** est le numéro national, **gratuit**, **anonyme** et **confidentiel** contre le harcèlement et les violences numériques (il existe aussi une application 3018).

## 3. La majorité numérique : 15 ans
- La **loi du 7 juillet 2023** a fixé la **majorité numérique** à **15 ans** : avant cet âge, un réseau social devait obtenir l'**accord d'un parent** pour qu'un jeune s'y inscrive.
- **Pourquoi 15 ans ?** Le législateur (le Parlement, qui vote les lois) a considéré qu'avant cet âge, les enfants sont plus exposés au cyberharcèlement, aux contenus choquants, à la désinformation et aux effets des écrans sur la santé et le sommeil.
- **Attention, où en est-on ?** Cette loi n'a jamais été appliquée, faute de texte d'application. En juillet 2026, le Parlement a voté une nouvelle loi pour **interdire** les réseaux sociaux aux moins de 15 ans, mais le **Conseil constitutionnel** (qui vérifie que les lois respectent la Constitution) a censuré cette interdiction le **14 août 2026**, avant qu'elle s'applique : elle visait tous les réseaux sociaux sans distinction, ce qui portait trop atteinte à la **liberté d'expression**, et elle obligeait tout le monde à prouver son âge sans garanties suffisantes pour la **vie privée**. **Aucune interdiction générale n'est donc en vigueur** ; le gouvernement a annoncé qu'il préparait un nouveau texte, mais **en octobre 2026, aucune nouvelle loi n'a encore été votée**. C'est un sujet d'actualité qui peut changer : demande à ton professeur où en sont les choses.
- De leur côté, la plupart des grands réseaux sociaux interdisent déjà, dans leurs propres règles, l'inscription avant **13 ans**.

## 4. Être responsable en ligne
- Ce qui est **interdit** dans la vie réelle l'est aussi en ligne : insulter, menacer, harceler, se moquer de quelqu'un, publier sa photo sans accord.
- Être **responsable**, c'est penser aux conséquences de ce que l'on publie, pour soi et pour les autres.
- Le **Safer Internet Day** (journée pour un internet plus sûr), chaque année en février, et la plateforme **Pix**, qui évalue tes compétences numériques, t'aident à mieux utiliser le numérique.

> **À retenir** :
> - Risques : cyberharcèlement, désinformation, santé, mauvaises rencontres.
> - Le cyberharcèlement est un délit ; numéro d'aide : 3018 (gratuit, anonyme, confidentiel).
> - Loi du 7 juillet 2023 : majorité numérique fixée à 15 ans (jamais appliquée) ; l'interdiction votée en 2026 a été censurée.
> - En ligne, les mêmes règles et le même respect que dans la vie réelle.
> - Vocabulaire : majorité numérique, cyberharcèlement, désinformation, infox, signaler, législateur.
`,
      exercices: [
        { type: "saisie", question: "À quel âge la loi du 7 juillet 2023 a-t-elle fixé la majorité numérique ? (réponds par un nombre)", reponses: ["15", "15 ans", "quinze", "quinze ans"], explication: "La **majorité numérique** a été fixée à **15 ans** par la loi du 7 juillet 2023." },
        { type: "qcm", question: "Quel numéro gratuit et confidentiel peut-on appeler en cas de cyberharcèlement ?", choix: ["Le 17", "Le 15", "Le 3018", "Le 112"], reponse: 2, explication: "Le **3018** est le numéro national contre le harcèlement et les violences numériques. Le 17 est la police, le 15 le SAMU, le 112 le numéro d'urgence européen." },
        { type: "vf", question: "Insulter quelqu'un en ligne est moins grave que dans la vie réelle, car ce n'est « que » sur internet.", reponse: false, explication: "Les règles et les lois s'appliquent **aussi en ligne**. Le cyberharcèlement est même souvent plus grave : il ne s'arrête jamais et peut être vu par beaucoup de monde." },
        { type: "qcm", question: "Tu reçois une information étonnante partagée par un ami, sans source. Quel est le bon réflexe ?", choix: ["La partager vite à tous tes contacts", "Vérifier d'où elle vient et si des médias fiables en parlent, et ne pas la partager dans le doute", "La croire, puisque c'est un ami", "La modifier pour la rendre plus drôle"], reponse: 1, explication: "Face à une possible **désinformation**, on **vérifie la source** avant de partager." },
        { type: "qcm", question: "Où en est l'interdiction des réseaux sociaux aux moins de 15 ans votée par le Parlement en juillet 2026 ?", choix: ["Elle s'applique depuis la rentrée 2026", "Elle ne concerne que les jeux vidéo", "Elle a été remplacée par une interdiction avant 18 ans", "Elle a été censurée par le Conseil constitutionnel le 14 août 2026 : aucune interdiction générale n'est en vigueur"], reponse: 3, explication: "Le **Conseil constitutionnel** a jugé que cette interdiction portait trop atteinte à la liberté d'expression et manquait de garanties. Un nouveau texte est en préparation." },
        { type: "vf", question: "Le cyberharcèlement consiste à blesser quelqu'un de façon répétée par des messages, des photos ou des moqueries en ligne.", reponse: true, explication: "C'est la **répétition** qui caractérise le harcèlement. C'est un **délit**, y compris pour les mineurs." },
        { type: "saisie", question: "Comment appelle-t-on, en un mot, une fausse information diffusée en ligne (en anglais : *fake news*) ?", reponses: ["infox", "une infox", "infos fausses", "fausse information", "fausse nouvelle", "fake news", "fausse info"], explication: "Une **infox** (ou fausse information) : il faut toujours vérifier la source avant de croire ou de partager." },
        { type: "qcm", question: "Pourquoi le législateur a-t-il voulu protéger particulièrement les moins de 15 ans sur les réseaux sociaux ?", choix: ["Parce qu'ils sont plus exposés au cyberharcèlement, aux contenus choquants, à la désinformation et aux effets des écrans sur la santé", "Parce que les moins de 15 ans n'ont pas de vie privée", "Parce que les réseaux sociaux sont réservés aux adultes depuis 1905", "Parce que les moins de 15 ans ne savent pas lire"], reponse: 0, explication: "Les plus jeunes sont plus **vulnérables** face aux risques du numérique : la loi cherche à les **protéger**." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : « Faut-il attendre 15 ans pour aller sur les réseaux sociaux ? » Présente au moins deux arguments en faveur de cette limite et un argument qui montre ses difficultés, puis donne ton avis justifié. Utilise le vocabulaire du cours.", corrige: `**Arguments en faveur de la limite de 15 ans**
- **Protéger la santé** : les réseaux sociaux sont conçus pour retenir le plus longtemps possible ; avant 15 ans, ils peuvent réduire le **sommeil** et l'activité physique et rendre difficile de « décrocher ».
- **Protéger contre le cyberharcèlement et les contenus choquants** : les plus jeunes sont plus exposés aux moqueries répétées, aux images violentes et aux rencontres dangereuses. Le cyberharcèlement ne s'arrête pas à la sortie du collège.
- **Protéger la vie privée** : un enfant mesure moins bien les **traces numériques** qu'il laisse et l'effet sur sa **réputation numérique** ; c'est pour cela que la **loi du 7 juillet 2023** a fixé la **majorité numérique** à 15 ans.

**Un argument qui montre les difficultés**
- Interdire totalement pose problème pour la **liberté d'expression** et la **vie privée** : pour vérifier l'âge, il faudrait contrôler l'identité de tous les utilisateurs. C'est pour ces raisons que le **Conseil constitutionnel** a censuré, le 14 août 2026, l'interdiction votée en juillet 2026. De plus, certains jeunes pourraient mentir sur leur âge.

**Mon avis (exemple)** : je pense qu'il est raisonnable d'attendre 15 ans, ou au moins d'avoir l'**accord et l'accompagnement de ses parents** avant, car les risques sont réels. Mais une loi ne suffit pas : il faut aussi apprendre à être **responsable** en ligne (profil privé, vérifier les sources, ne rien publier sur les autres sans leur accord) et savoir demander de l'aide (**3018**).` },
      ],
    },
    {
      id: "methode-emc-6e",
      titre: "Méthode en EMC : lire un document, argumenter, débattre",
      theme: "Méthodes",
      cours: `
## 1. Le programme d'EMC de 6e
>! **Programme de 6e (en vigueur depuis la rentrée 2026)** : « Apprendre à vivre dans une société démocratique », en trois parties : « Représenter les autres et servir l'intérêt général » (délégués, vote, élus, intérêt général) ; « Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École » (règles, liberté de conscience, laïcité) ; « Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée » (vie privée, droit à l'image, numérique).

En EMC, on n'attend pas seulement ton avis : il faut **connaître** des règles et des textes, **comprendre** des documents, **justifier** ce que tu dis et **respecter** les autres quand ils ne pensent pas comme toi.

## 2. Fait ou opinion ?
| | Définition | Exemple |
|---|---|---|
| Fait | ce qui est vrai et se **vérifie** | « La CIDE a été adoptée en 1989. » |
| Opinion | ce que pense une personne ; cela **se discute** | « Les délégués devraient être élus pour deux ans. » |
Un bon argument s'appuie sur des **faits** (une loi, une date, un exemple précis), pas seulement sur « je pense que ».

## 3. Lire un texte de loi ou un article
- Une **loi** est votée par le **Parlement** ; elle s'applique à tous. Elle est découpée en **articles** numérotés.
- Pour citer un texte : son **nom**, sa **date** et le **numéro de l'article**. Exemple : « l'article 10 de la DDHC de 1789 ».
- Lis lentement, repère les mots importants et **explique-les avec tes mots** (« ostensiblement » = de façon très visible).

>! **Les textes à connaître en 6e** (inutile d'apprendre tous les numéros d'articles cités dans les cours : retiens surtout ceux-ci)
>! - **DDHC de 1789** : article 4 (la liberté, c'est faire ce qui ne nuit pas à autrui) et article 10 (liberté d'opinion, même religieuse).
>! - **Loi du 9 décembre 1905** : séparation des Églises et de l'État (liberté de conscience, l'État ne paie aucun culte).
>! - **Constitution de 1958, article 1er** : la France est une République laïque.
>! - **Loi du 15 mars 2004** : pas de signe religieux ostensible pour les élèves de l'école publique.
>! - **CIDE de 1989** : les droits de l'enfant ; article 16 pour la vie privée.
>! Pour les autres textes (Code civil, Code pénal, Charte de l'UE), il suffit de savoir qu'ils existent et ce qu'ils protègent.

## 4. Présenter et analyser un document
1. **Présenter** : la **nature** (texte de loi, affiche, photo, article de journal, témoignage), l'**auteur**, la **date**, le **sujet**.
2. **Comprendre** : relever les informations utiles et les **citer entre guillemets**.
3. **Relier au cours** : quelle notion le document montre-t-il (représentation, intérêt général, laïcité, vie privée) ?
4. **Prendre du recul** : qui parle, et dans quel but (informer, convaincre, alerter) ?

>! **Exemple** : une affiche du ministère de l'Éducation nationale montre un élève seul face à un écran rempli de messages méchants, avec le numéro 3018. Nature : affiche de prévention ; auteur : le ministère ; but : **alerter** et faire connaître le numéro d'aide ; notions : cyberharcèlement, vie privée, responsabilité.

## 5. Rédiger un paragraphe argumenté
Un **argument** se construit en trois temps :
1. **L'idée** : « La laïcité protège les élèves. »
2. **L'exemple précis** : « La loi du 15 mars 2004 interdit les signes religieux ostensibles à l'école publique. »
3. **L'explication** : « Ainsi, aucun élève ne subit de pression à cause de ses croyances. »
Utilise des **connecteurs** : d'abord, ensuite, de plus, en effet, car, donc, ainsi, enfin.

## 6. Participer à un débat en classe
- On **lève la main** et on attend que la parole soit donnée.
- On **écoute** jusqu'au bout sans couper.
- On **reformule** l'idée de l'autre avant de répondre : « Si j'ai bien compris, tu penses que… »
- On critique les **idées**, jamais les **personnes** : pas de moquerie, pas d'insulte.
- On peut **changer d'avis** : c'est la preuve qu'on a écouté.

### Le débat réglé
Un **débat réglé** est un débat organisé en classe, avec des **règles** et des **rôles** fixés à l'avance. Voici les rôles les plus courants (leur nom peut varier d'une classe à l'autre ; parfois, un élève est aussi chargé de reformuler).
| Rôle | Mission |
|---|---|
| Président de séance (ou modérateur) | donne la parole dans l'ordre des mains levées, fait respecter les règles, relance le débat |
| Gardien du temps | veille à ce que chacun ait un temps de parole limité et équitable |
| Secrétaire | note au tableau **tous** les arguments, en deux colonnes « pour » et « contre » |
| Observateurs | vérifient qu'on écoute, qu'on reformule et qu'on respecte les personnes ; ils font un compte rendu à la fin |
| Débatteurs | défendent une position avec des arguments préparés |

Il se déroule en **trois temps** :
1. **Préparer** : comprendre la question, chercher des arguments pour et contre, avec des **exemples précis** (une loi, un texte, une situation vécue).
2. **Débattre** : chacun parle à son tour, reformule l'idée de l'autre avant de répondre et appuie son avis sur des arguments.
3. **Faire le bilan** : quels arguments étaient les plus solides ? Sur quoi est-on d'accord ? Qui a changé d'avis, et pourquoi ?

>! **Exemple** : « Faut-il installer des caméras dans la cour du collège ? » Un débatteur dit : « Oui, pour la sécurité. » Une autre élève reformule : « Si j'ai bien compris, tu penses que les caméras empêcheraient les bagarres. Mais la CNIL dit qu'on ne doit pas filmer les lieux de vie comme la cour pendant les heures d'ouverture, sauf cas exceptionnels, pour protéger la vie privée des élèves. » Le secrétaire note les deux arguments ; le président de séance donne ensuite la parole à quelqu'un qui n'a pas encore parlé.

> **À retenir** :
> - Fait = vérifiable ; opinion = se discute.
> - Citer un texte : nom, date, article.
> - Document : présenter, comprendre, relier au cours, prendre du recul.
> - Argument = idée + exemple précis + explication.
> - Débat : demander la parole, écouter, reformuler, respecter les personnes.
> - Débat réglé : des rôles (président de séance, gardien du temps, secrétaire, observateurs) et trois temps (préparer, débattre, faire le bilan).
`,
      exercices: [
        { type: "qcm", question: "Laquelle de ces phrases est un fait ?", choix: ["« Le collège devrait commencer à 9 heures. »", "« Le meilleur délégué, c'est celui qui fait rire. »", "« Les réseaux sociaux, c'est nul. »", "« La loi de séparation des Églises et de l'État date de 1905. »"], reponse: 3, explication: "Un **fait** se vérifie (ici, une date historique). Les autres phrases sont des **opinions** : elles se discutent." },
        { type: "saisie", question: "Comment s'appelle chaque partie numérotée d'une loi ou d'une déclaration ?", reponses: ["article", "un article", "les articles", "articles"], explication: "Une loi est découpée en **articles**. On cite toujours le numéro : « l'article 1er de la loi de 1905 »." },
        { type: "qcm", question: "Quel est le thème annuel du programme d'EMC de 6e ?", choix: ["Égalité, fraternité et solidarité", "Faire vivre la démocratie", "Apprendre à vivre dans une société démocratique", "Défendre les droits et les libertés"], reponse: 2, explication: "En 6e : « **Apprendre à vivre dans une société démocratique** ». « Égalité, fraternité et solidarité » est le thème de la 5e, « Défendre les droits et les libertés » celui de la 4e, « Faire vivre la démocratie » celui de la 3e." },
        { type: "vf", question: "Dans un débat en classe, on peut se moquer de quelqu'un si son idée est mauvaise.", reponse: false, explication: "On peut critiquer une **idée**, jamais se moquer d'une **personne**." },
        { type: "qcm", question: "Que faut-il indiquer pour présenter un document ?", choix: ["Sa nature, son auteur, sa date et son sujet", "Seulement s'il te plaît ou non", "Le nombre de mots", "La couleur du papier"], reponse: 0, explication: "Présenter un document, c'est dire **ce que c'est** (nature), **qui** l'a fait (auteur), **quand** (date) et **de quoi** il parle (sujet)." },
        { type: "saisie", question: "Comment appelle-t-on le fait de répéter avec ses propres mots l'idée de quelqu'un avant de lui répondre ?", reponses: ["reformuler", "la reformulation", "reformulation", "reformuler son idee"], explication: "**Reformuler** montre qu'on a bien écouté et évite les malentendus." },
        { type: "qcm", question: "Quels sont les trois éléments d'un argument bien construit ?", choix: ["Un titre, un dessin, une date", "Une idée, un exemple précis, une explication", "Une opinion, une insulte, une conclusion", "Une question, une réponse, une note"], reponse: 1, explication: "L'idée seule ne suffit pas : l'**exemple précis** (une loi, une date, une situation) et l'**explication** la rendent convaincante." },
        { type: "vf", question: "Changer d'avis pendant un débat, c'est la preuve qu'on a écouté les arguments des autres.", reponse: true, explication: "Le but d'un débat n'est pas de « gagner », mais de réfléchir ensemble avec de bons arguments." },
        { type: "redaction", question: "**Paragraphe argumenté** : « Pourquoi est-il important de voter pour élire ses délégués de classe ? » Rédige un paragraphe d'au moins deux arguments construits (idée, exemple, explication), avec des connecteurs.", corrige: `**Exemple de paragraphe**

Il est important de voter pour élire ses délégués de classe. **D'abord**, voter permet de choisir de vrais **représentants**. **En effet**, les délégués portent la parole de toute la classe au **conseil de classe** et auprès des adultes ; **donc**, si je ne vote pas, je laisse les autres choisir à ma place la personne qui parlera en mon nom. **Ensuite**, le vote est une règle **juste** et **égale** : chaque élève a une voix qui compte autant que celle des autres, et le vote est **secret**, ce qui permet de choisir librement, sans pression. **Ainsi**, le délégué élu à la majorité représente vraiment la classe. **Enfin**, voter au collège est un **apprentissage de la citoyenneté** : plus tard, à 18 ans, je voterai pour élire le maire, les députés ou le Président de la République. **C'est pourquoi** participer à cette élection, c'est déjà agir pour l'**intérêt général** de la classe.

**Ce qu'on attend** : au moins deux arguments, chacun avec une idée, un exemple précis (conseil de classe, vote secret, une voix par élève, vote à 18 ans) et une explication ; des connecteurs (d'abord, en effet, donc, ensuite, ainsi, enfin).` },
        { type: "qcm", question: "Dans un débat réglé, quel est le rôle du président de séance (ou modérateur) ?", choix: ["Donner son avis le premier pour montrer la bonne réponse", "Noter les arguments au tableau", "Donner la parole à tour de rôle, faire respecter les règles et relancer le débat", "Décider à la fin qui a gagné le débat"], reponse: 2, explication: "Le **président de séance** organise la parole. C'est le **secrétaire** qui note les arguments ; le **gardien du temps** surveille les temps de parole. Un débat réglé n'a pas de « gagnant » : on fait un **bilan** des arguments." },
        { type: "vf", question: "Dans un débat réglé, le secrétaire ne note au tableau que les arguments avec lesquels il est d'accord.", reponse: false, explication: "Le secrétaire note **tous** les arguments, « pour » et « contre », de façon neutre : c'est ce qui permet de faire un bilan honnête à la fin." },
        { type: "redaction", question: "**Préparer un débat réglé** : ta classe va débattre de la question « Faut-il installer des caméras de surveillance dans la cour du collège ? »\n\n1. Cite trois rôles du débat réglé et la mission de chacun. 2. Prépare un argument « pour » et un argument « contre », chacun avec une idée, un exemple précis et une explication ; utilise au moins une notion du cours d'EMC. 3. Un camarade dit : « Les caméras, c'est pour les délinquants ! » Écris la phrase que tu dis pour reformuler son idée et lui répondre poliment. 4. Que fait-on à la fin du débat ?", corrige: `**1. Trois rôles** (au choix) : le **président de séance** donne la parole et fait respecter les règles ; le **gardien du temps** veille à ce que chacun ait un temps de parole équitable ; le **secrétaire** note au tableau tous les arguments, pour et contre ; les **observateurs** vérifient qu'on écoute et qu'on respecte les personnes, puis font un compte rendu.

**2. Deux arguments**
- **Pour** : les caméras pourraient améliorer la **sécurité**. Par exemple, si un collège subit souvent des vols ou des dégradations, les images peuvent aider à retrouver les responsables. Ainsi, elles protégeraient les biens de tous, ce qui sert l'**intérêt général**.
- **Contre** : les caméras portent atteinte à la **vie privée** des élèves. En effet, la **CNIL** explique que les lieux de vie comme la cour de récréation, la cantine ou les salles de classe ne doivent pas être filmés pendant les heures d'ouverture, sauf cas exceptionnels (actes de malveillance fréquents et répétés). Être filmé toute la journée, c'est perdre une partie de sa liberté ; il vaut mieux des adultes présents et des élèves formés à régler les conflits par le dialogue.

**3. Reformuler et répondre** : « Si j'ai bien compris, tu penses que les caméras ne servent qu'à surveiller ceux qui font des bêtises. Je comprends ton idée, mais elles filmeraient aussi tous les autres élèves, ce qui touche à notre vie privée. »

**4. À la fin**, on fait le **bilan** : le secrétaire relit les arguments notés, on repère les plus solides et les points d'accord, les observateurs disent si les règles ont été respectées, et chacun peut dire s'il a changé d'avis et pourquoi.

**Ce qu'on attend** : trois rôles exacts ; deux arguments complets (idée, exemple, explication) avec une notion du cours (vie privée, intérêt général, sécurité, CNIL) ; une vraie reformulation (« Si j'ai bien compris… ») sans moquerie ; l'idée de bilan.` },
      ],
    },
    {
      id: "bilan-annee-6e",
      titre: "Bilan de l'année : vivre dans une société démocratique",
      theme: "Méthodes",
      cours: `
## 1. Le fil de l'année
Toute l'année, une même question a guidé le programme d'EMC de 6e : comment **apprendre à vivre dans une société démocratique** ? Le programme y répond en trois parties.
| Partie du programme | La grande question | Notions clés | Un exemple au collège |
|---|---|---|---|
| Représenter les autres et servir l'intérêt général | Comment choisir ceux qui parlent et décident au nom de tous ? | représentant, vote, majorité absolue, mandat, intérêt général, délibération | l'élection des délégués, le projet des éco-délégués |
| Respecter des règles et en comprendre la finalité : l'exemple de la laïcité à l'École | Pourquoi des règles communes, et comment vivre ensemble avec des convictions différentes ? | règle, droit, devoir, liberté de conscience, laïcité, neutralité | le règlement intérieur, la Charte de la laïcité affichée dans le hall |
| Avoir des droits en tant que personne et respecter ceux des autres : l'exemple du droit à la vie privée | Qu'est-ce qui ne regarde que moi, et comment protéger les autres, y compris en ligne ? | vie privée, intimité, droit à l'image, données personnelles, cyberharcèlement | l'autorisation demandée aux parents avant de publier une photo de sortie |

## 2. Ce qui relie les trois parties
Les trois parties disent au fond la même chose : en démocratie, **chacun est libre**, **tous sont égaux**, et la liberté de chacun s'arrête là où elle **nuirait aux autres** (article 4 de la DDHC de 1789).
- La **liberté** : choisir son représentant par un vote **secret** ; croire ou ne pas croire (**liberté de conscience**) ; garder pour soi sa **vie privée**.
- L'**égalité** : une personne = une voix ; la même règle pour tous ; les mêmes droits pour tous les enfants, sans discrimination (article 2 de la CIDE).
- Le **respect des autres** : l'élu représente aussi ceux qui n'ont pas voté pour lui ; personne ne fait pression sur la religion d'un autre ; personne ne publie la photo d'un autre sans son accord.
- Des **règles communes** : votées par des représentants (lois, règlement intérieur), elles protègent ces libertés.

## 3. Les dates et les textes repères de l'année
Les **six dates en gras** sont à savoir par cœur ; les autres t'aident à comprendre.
| Date | Texte ou événement | Ce qu'il faut en retenir |
|---|---|---|
| **1789** | Déclaration des droits de l'homme et du citoyen (DDHC) | art. 4 : la liberté, c'est faire ce qui ne nuit pas à autrui ; art. 10 : liberté d'opinion, même religieuse |
| 1848 | suffrage universel masculin | tous les hommes votent |
| **1905** | loi du 9 décembre de séparation des Églises et de l'État | liberté de conscience ; l'État ne paie et ne favorise aucun culte |
| **1944** | droit de vote des femmes | elles votent pour la première fois en 1945 |
| **1958** | Constitution, article 1er | la France est une République laïque |
| 1974 | vote à 18 ans | au lieu de 21 ans |
| **1989** | Convention internationale des droits de l'enfant (CIDE) | droits de tous les moins de 18 ans ; art. 16 : vie privée |
| **2004** | loi du 15 mars | pas de signe religieux ostensible pour les élèves des écoles, collèges et lycées publics |
| 2013 | Charte de la laïcité à l'École | 15 articles affichés dans les établissements publics |
| 2018 | RGPD (appliqué depuis 2018) | droits sur ses données personnelles dans l'Union européenne |
| 2023 | loi du 7 juillet sur la majorité numérique | 15 ans, mais jamais appliquée |

## 4. Méthode : traiter une situation qui mêle plusieurs parties
Au contrôle de fin d'année, une même situation peut faire appel à **plusieurs** chapitres. Procède ainsi :
1. **Lis la situation** et repère chaque problème posé (un vote ? une règle ? une religion ? une photo ? un message en ligne ?).
2. Pour chaque problème, **trouve la partie du programme** et la **notion** qui correspondent.
3. **Appuie-toi sur un texte ou une règle précise** (nom, date, et article si tu le connais).
4. **Explique** pourquoi la règle existe : quelle liberté protège-t-elle, et de qui ?

>! **Exemple résolu** : en décembre, une élève propose de voter en classe pour qu'Ilyès ne vienne pas au goûter de fin de trimestre, « parce qu'il ne fête pas Noël ». Puis un élève filme Ilyès, seul dans un coin, et veut poster la vidéo.
>! 1. **Le vote** : en démocratie, la majorité décide, mais la **minorité est respectée** ; un vote ne peut pas servir à priver quelqu'un de ses droits (partie 1).
>! 2. **La raison invoquée** : exclure Ilyès à cause de ses convictions ne respecte pas sa **liberté de conscience** ni l'**égalité** ; la **Charte de la laïcité** rappelle le respect de chacun à l'école (partie 2).
>! 3. **La vidéo** : la poster sans son accord (et celui de ses parents) viole son **droit à l'image** et sa **vie privée** (CIDE, article 16) ; si les moqueries se répètent en ligne, c'est du **cyberharcèlement**, et l'on peut appeler le **3018** (partie 3).
>! **Conclusion** : les trois règles protègent la même chose, la liberté et la dignité d'Ilyès, comme celles de chacun.

## 5. Les erreurs fréquentes à éviter
| Erreur fréquente | Ce qui est juste |
|---|---|
| « Le candidat qui a le plus de voix est toujours élu au premier tour. » | Au premier tour, il faut la **majorité absolue** (plus de la moitié des suffrages exprimés). |
| « Le délégué est le chef de la classe. » | Il est un **représentant**, un porte-parole : il n'a pas plus de droits que les autres. |
| « La laïcité interdit les religions. » | Elle **garantit** la liberté de conscience et le libre exercice des cultes ; c'est l'**État** qui est neutre. |
| « Les collèges dépendent de la région. » | Le **département** construit et entretient les collèges ; la région, les lycées ; la commune, les écoles. |
| « Ce qui est publié en ligne peut toujours être effacé. » | Une publication peut être **copiée** et **capturée** : elle laisse des **traces**. |
| « Si la majorité est d'accord, on a le droit de tout décider. » | Une décision prise à la majorité doit **respecter les droits** de tous, y compris de la minorité. |

> **À retenir** :
> - Le programme de 6e : « Apprendre à vivre dans une société démocratique », en trois parties (représenter et servir l'intérêt général ; respecter des règles, l'exemple de la laïcité ; avoir des droits, l'exemple de la vie privée).
> - Le fil commun : liberté, égalité, respect des autres, règles communes ; la liberté de chacun s'arrête là où elle nuit aux autres (DDHC, art. 4).
> - Les repères : 1789 (DDHC), 1905 (laïcité), 1944 (vote des femmes), 1958 (Constitution), 1989 (CIDE), 2004 (signes religieux à l'école).
> - Méthode : repérer chaque problème, trouver la partie et la notion, citer un texte, expliquer ce que la règle protège.
`,
      textes: {
        journee: `**Une journée au collège Simone-Veil** (situation fictive)

**Le matin**, la classe de 6e B élit ses délégués. Il y a 27 votants. On trouve 1 bulletin blanc et 1 bulletin nul. Anaïs obtient 12 voix, Bilal 10 voix et Chloé 3 voix.

**À midi**, les éco-délégués présentent au conseil de la vie collégienne (CVC) leur projet de bacs de tri à la cantine. Le projet est discuté puis voté ; comme il coûte de l'argent, il sera ensuite présenté au conseil d'administration.

**L'après-midi**, la classe prépare une exposition pour la Journée de la laïcité. Théo propose d'écrire sur une affiche que « sa religion est la seule vraie et que tout le monde devrait la suivre ».

**Le soir**, Lucas, de retour de la sortie scolaire, veut publier sur son compte une photo de Maëlle endormie dans le car, « pour rigoler ».`,
      },
      exercices: [
        { type: "saisie", texte: "journee", question: "Lors de l'élection des délégués de la 6e B, combien y a-t-il de suffrages exprimés ? (réponds par un nombre)", reponses: ["25", "25 suffrages", "25 suffrages exprimes", "25 voix", "vingt-cinq"], explication: "Suffrages exprimés = votants − blancs − nuls = 27 − 1 − 1 = **25**. Vérification : 12 + 10 + 3 = 25." },
        { type: "qcm", texte: "journee", question: "Anaïs est-elle élue déléguée dès le premier tour ?", choix: ["Oui : elle a plus de voix que Bilal et Chloé, elle est donc élue dès le premier tour", "Oui : avec 12 voix, elle dépasse le quart des votants, ce qui suffit au premier tour", "Non : la majorité absolue est de 13 voix et elle n'en a que 12, il faut un second tour", "Non : pour être élu au premier tour, il faut obligatoirement l'unanimité de la classe"], reponse: 2, explication: "La moitié de 25 est 12,5 : la **majorité absolue** est donc de **13 voix**. Avec 12 voix, Anaïs est en tête mais n'est pas élue au premier tour : on organise un **second tour**, où celui qui a le plus de voix est élu." },
        { type: "qcm", texte: "journee", question: "À midi, à quelle étape d'une décision collective correspond la discussion du projet des éco-délégués au CVC, avant le vote ?", choix: ["Au constat", "À la délibération", "À la mise en œuvre", "Au bilan"], reponse: 1, explication: "**Délibérer**, c'est discuter ensemble avant de décider. Les étapes sont : constat, proposition, **délibération**, vote, mise en œuvre, bilan." },
        { type: "vf", texte: "journee", question: "L'affiche proposée par Théo pour l'exposition sur la laïcité peut être accrochée dans le collège public.", reponse: false, explication: "Affirmer qu'une religion est « la seule vraie » et que tous devraient la suivre, c'est du **prosélytisme**. La **Charte de la laïcité à l'École** protège les élèves de tout prosélytisme et de toute pression. Théo reste libre de croire ce qu'il veut (**liberté de conscience**), mais il ne peut pas l'imposer aux autres à l'école." },
        { type: "qcm", texte: "journee", question: "Que faut-il penser du projet de Lucas ?", choix: ["Il ne doit pas la publier sans l'accord de Maëlle : c'est son droit à l'image", "Il peut la publier, puisque la photo a été prise pendant une sortie scolaire", "Il peut la publier s'il floute le car derrière Maëlle", "Il peut la publier si la photo est drôle et pas méchante"], reponse: 0, explication: "Le **droit à l'image** interdit de diffuser l'image d'une personne reconnaissable **sans son accord** (et, pour une mineure, sans celui de ses parents). Une photo prise pendant le sommeil touche aussi à l'**intimité** et peut humilier Maëlle." },
        { type: "qcm", question: "Range ces textes dans l'ordre chronologique : A. la CIDE ; B. la loi de séparation des Églises et de l'État ; C. la DDHC ; D. la loi sur les signes religieux à l'école.", choix: ["B, C, A, D", "C, A, B, D", "A, C, D, B", "C, B, A, D"], reponse: 3, explication: "**DDHC** (1789) → **loi de séparation** (1905) → **CIDE** (1989) → **loi sur les signes religieux** (2004)." },
        { type: "saisie", question: "Comment appelle-t-on l'intérêt commun de tous les membres de la société, que les élus doivent servir ? (deux mots)", reponses: ["interet general", "l'interet general"], explication: "L'**intérêt général** s'oppose à l'**intérêt particulier** (celui d'une personne ou d'un petit groupe). C'est le fil de la première partie du programme." },
        { type: "vf", question: "Si la majorité de la classe vote pour exclure un élève d'une sortie à cause de sa religion, cette décision est juste, puisqu'elle a été votée.", reponse: false, explication: "En démocratie, la majorité décide, mais elle doit **respecter les droits de tous**, y compris de la minorité. Exclure quelqu'un à cause de ses convictions viole la **liberté de conscience** et l'**égalité** : aucun vote ne peut le permettre." },
        { type: "qcm", question: "Quel point commun relie le vote secret, la laïcité à l'École et le droit à la vie privée ?", choix: ["Ils ne concernent que les adultes", "Ils protègent la liberté de chacun de faire ses choix et de vivre sans pression des autres", "Ils ont tous été créés en 1789", "Ils permettent à la majorité d'imposer ses idées"], reponse: 1, explication: "Le **vote secret** permet de choisir sans pression ; la **laïcité** protège la liberté de conscience ; la **vie privée** protège ce qui ne regarde que soi. Les trois protègent la **liberté** et l'**égalité** de chacun." },
        { type: "redaction", texte: "journee", question: "**Exercice bilan (niveau contrôle)** : montre que cette journée au collège Simone-Veil fait appel aux trois parties du programme d'EMC de 6e. Pour chaque partie : nomme-la, explique le problème posé ou l'action menée, et appuie-toi sur une notion et une règle (ou un texte) vues dans l'année. Conclus en une ou deux phrases sur ce qui relie ces trois situations.", corrige: `**1. Représenter les autres et servir l'intérêt général** (le matin et à midi). L'élection des délégués montre comment on choisit des **représentants** par un vote **secret** et **égal**. Il y a 27 − 1 − 1 = **25** suffrages exprimés, donc la **majorité absolue** est de **13 voix** : Anaïs, avec 12 voix, n'est pas élue au premier tour et il faut un **second tour**. À midi, les éco-délégués suivent les étapes d'une décision collective : proposition, **délibération** au CVC, vote, puis passage au **conseil d'administration** qui vote les dépenses. Leur projet de tri sert l'**intérêt général** et le **développement durable**.

**2. Respecter des règles : l'exemple de la laïcité à l'École** (l'après-midi). Théo est libre de croire ce qu'il veut : c'est la **liberté de conscience**, protégée par l'article 10 de la DDHC et la loi de **1905**. Mais son affiche serait du **prosélytisme** : la **Charte de la laïcité à l'École** (2013) protège les élèves de toute pression, pour que chacun fasse ses propres choix. L'exposition peut présenter la loi de 1905 et la Charte, pas dire qu'une religion est la seule vraie.

**3. Avoir des droits en tant que personne : l'exemple de la vie privée** (le soir). Publier la photo de Maëlle endormie, sans son accord ni celui de ses parents, ne respecterait pas son **droit à l'image** ni son **intimité**, protégés par l'article 16 de la **CIDE** et l'article 9 du Code civil. La photo pourrait être copiée, circuler et nuire à sa **réputation numérique** ; si des moqueries se répétaient, ce serait du **cyberharcèlement** (numéro d'aide : **3018**).

**Conclusion** : ces trois situations montrent qu'en démocratie, chacun est **libre** et **égal**, mais que la liberté de chacun s'arrête là où elle nuit aux autres (article 4 de la DDHC). Des **règles communes**, votées par des représentants, protègent la liberté de tous.

**Ce qu'on attend** : les trois parties nommées ; le calcul juste (25 suffrages exprimés, majorité absolue de 13 voix, second tour) ; au moins une notion et un texte ou une règle par partie ; une conclusion qui fait le lien (liberté, égalité, respect des autres).` },
      ],
    },
  ],
};
