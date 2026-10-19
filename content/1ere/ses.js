export default {
  chapitres: [
    {
      id: "marche-concurrentiel",
      titre: "Comment un marché concurrentiel fonctionne-t-il ?",
      theme: "Science économique",
      cours: `
## Le marché, lieu de rencontre de l'offre et de la demande
Un **marché** est le lieu, réel ou fictif, où se rencontrent l'**offre** (les vendeurs) et la **demande** (les acheteurs) d'un bien ou d'un service. De cette rencontre naît un **prix** qui sert de signal aux agents économiques. Le marché suppose des **institutions** : droits de propriété, règles juridiques, monnaie, normes de qualité, confiance.

## Le modèle de concurrence parfaite
Le modèle de **concurrence pure et parfaite** est une construction théorique (un modèle simplifié de la réalité) fondée sur des hypothèses :
- **atomicité** : très nombreux offreurs et demandeurs, aucun ne peut influencer le prix (ils sont *preneurs de prix*) ;
- **homogénéité** du produit : les biens sont identiques ;
- **libre entrée et sortie** du marché ;
- **transparence** de l'information : tout le monde connaît prix et qualité ;
- **libre circulation** des facteurs de production.

## La demande
La **courbe de demande** relie le prix à la quantité que les acheteurs souhaitent acheter. Elle est en général **décroissante** : quand le prix baisse, la quantité demandée augmente.
- Une variation du **prix** entraîne un **déplacement le long** de la courbe.
- Une variation d'un autre facteur (revenu, goûts, prix d'un bien substituable, publicité) entraîne un **déplacement de la courbe** elle-même.

## L'offre
La **courbe d'offre** relie le prix à la quantité que les producteurs souhaitent vendre. Elle est en général **croissante** : un prix plus élevé rend la production plus rentable. Le producteur produit tant que le prix couvre au moins son **coût marginal** (le coût de la dernière unité produite). Comme le coût marginal est croissant, le producteur qui maximise son profit produit la quantité pour laquelle **coût marginal = prix** : la courbe d'offre se déduit ainsi de la courbe de coût marginal.
- Une baisse des coûts de production (progrès technique, baisse du prix des matières premières) déplace la courbe d'offre vers la droite.

## L'équilibre et le prix d'équilibre
Le **prix d'équilibre** est le prix pour lequel la quantité offerte est égale à la quantité demandée. Si le prix est au-dessus, il y a **excès d'offre** (surplus de marchandises) et le prix tend à baisser ; s'il est au-dessous, il y a **excès de demande** (pénurie) et le prix tend à monter.

>! **Exemple résolu** : demande Qd = 100 − 2P ; offre Qo = 2P − 20.
>! À l'équilibre : 100 − 2P = 2P − 20, donc 4P = 120, P* = 30 et Q* = 100 − 60 = 40.

## Surplus et gains à l'échange
- Le **surplus du consommateur** est la différence entre le prix maximal qu'il était prêt à payer (son *prix de réservation*) et le prix effectivement payé.
- Le **surplus du producteur** est la différence entre le prix reçu et le prix minimal auquel il était prêt à vendre.
- Le **surplus total** (somme des deux) mesure les **gains à l'échange**. En concurrence parfaite, il est **maximal** à l'équilibre.

>! **Suite de l'exemple** : la demande s'annule pour P = 50, l'offre pour P = 10.
>! Surplus du consommateur = (50 − 30) × 40 / 2 = 400 ; surplus du producteur = (30 − 10) × 40 / 2 = 400 ; surplus total = 800.

## Effets d'une taxe ou d'une subvention
- Une **taxe** sur un produit augmente le coût pour les vendeurs : la courbe d'offre se déplace vers la gauche (vers le haut), le prix payé par l'acheteur augmente, le prix net reçu par le vendeur (après taxe) diminue, la quantité échangée baisse. La charge de la taxe est donc partagée entre acheteurs et vendeurs. Le surplus total diminue : c'est une **perte sèche**.
- Une **subvention** a l'effet inverse : l'offre se déplace vers la droite, le prix baisse, la quantité augmente.

> **À retenir** :
> - Le prix d'équilibre égalise quantité offerte et quantité demandée.
> - Demande décroissante, offre croissante.
> - Le surplus total mesure les gains à l'échange ; il est maximal en concurrence parfaite.
> - Une taxe réduit la quantité échangée et crée une perte sèche.
`,
      exercices: [
        { type: "qcm", question: "Quelle hypothèse signifie qu'aucun agent ne peut, à lui seul, influencer le prix ?", choix: ["L'atomicité", "L'homogénéité du produit", "La transparence", "La libre entrée"], reponse: 0,
          explication: "L'**atomicité** : offreurs et demandeurs sont si nombreux que chacun est *preneur de prix*. L'homogénéité concerne les produits, la transparence l'information, la libre entrée l'accès au marché." },
        { type: "vf", question: "Une hausse du revenu des ménages provoque un déplacement le long de la courbe de demande.", reponse: false,
          explication: "Seule une variation du **prix** provoque un déplacement le long de la courbe. Une hausse du revenu **déplace la courbe** de demande (vers la droite pour un bien normal)." },
        { type: "saisie", question: "Demande : Qd = 100 − 2P ; offre : Qo = 2P − 20. Quel est le prix d'équilibre ?", reponses: ["30", "30 €", "p = 30", "30 euros"],
          explication: "100 − 2P = 2P − 20 ⇔ 120 = 4P ⇔ P = 30. La quantité d'équilibre vaut 100 − 60 = 40." },
        { type: "qcm", question: "Si le prix est fixé au-dessus du prix d'équilibre, on observe :", choix: ["une pénurie", "un équilibre", "un excès d'offre", "une hausse de la demande"], reponse: 2,
          explication: "Au-dessus du prix d'équilibre, les vendeurs veulent vendre plus que ce que les acheteurs veulent acheter : **excès d'offre**, qui pousse le prix à la baisse." },
        { type: "saisie", question: "Un consommateur était prêt à payer 80 € une paire de chaussures ; il la paie 55 €. Quel est son surplus (en euros) ?", reponses: ["25", "25 €", "25 euros"],
          explication: "Surplus du consommateur = prix de réservation − prix payé = 80 − 55 = **25 €**." },
        { type: "qcm", question: "Une baisse du coût des matières premières entraîne, toutes choses égales par ailleurs :", choix: ["une baisse du prix d'équilibre et une hausse de la quantité échangée", "une hausse du prix et une baisse de la quantité", "une hausse du prix et de la quantité", "aucun effet"], reponse: 0,
          explication: "La courbe d'offre se déplace vers la droite : à chaque prix, les producteurs offrent davantage. Le nouvel équilibre a un **prix plus bas** et une **quantité plus élevée**." },
        { type: "vf", question: "L'instauration d'une taxe sur un bien diminue le surplus total sur ce marché.", reponse: true,
          explication: "La taxe réduit la quantité échangée : certains échanges mutuellement avantageux n'ont plus lieu. Cette perte de surplus est la **perte sèche**." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que le marché concurrentiel permet d'atteindre un prix d'équilibre et des gains à l'échange.", corrige: `**Idée 1 – La confrontation de l'offre et de la demande fixe un prix d'équilibre.**
- La demande est décroissante du prix, l'offre est croissante.
- Si le prix est trop élevé, il y a excès d'offre : les vendeurs baissent leurs prix. S'il est trop bas, il y a pénurie : le prix monte.
- Le prix converge donc vers le **prix d'équilibre**, où quantité offerte = quantité demandée.

**Idée 2 – L'échange procure des gains aux deux parties.**
- Les acheteurs dont le prix de réservation dépasse le prix d'équilibre obtiennent un **surplus du consommateur**.
- Les vendeurs dont le coût est inférieur au prix obtiennent un **surplus du producteur**.
- *Exemple* : avec Qd = 100 − 2P et Qo = 2P − 20, P* = 30, Q* = 40, et le surplus total vaut 400 + 400 = 800.

**Conclusion** : en concurrence parfaite, le surplus total est maximal à l'équilibre ; toute intervention qui éloigne le prix de l'équilibre (taxe, prix plafond) crée une perte sèche.` },
        { type: "saisie", question: "La demande devient Qd = 140 − 2P (hausse des revenus) ; l'offre reste Qo = 2P − 20. Quel est le nouveau prix d'équilibre ?", reponses: ["35", "35 €", "p = 35", "35 euros"],
          explication: "140 − 2P = 2P − 20 ⇔ 160 = 4P ⇔ P = **35**. La quantité d'équilibre passe à 140 − 70 = 50 : le déplacement de la courbe de demande vers la droite fait monter le prix (de 30 à 35) et la quantité (de 40 à 50)." },
      ],
    },
    {
      id: "concurrence-imparfaite",
      titre: "Comment les marchés imparfaitement concurrentiels fonctionnent-ils ?",
      theme: "Science économique",
      cours: `
## De la concurrence parfaite au pouvoir de marché
Dans la réalité, beaucoup de marchés ne respectent pas les hypothèses de la concurrence parfaite. Une entreprise dispose d'un **pouvoir de marché** lorsqu'elle peut **influencer le prix** (elle est *faiseuse de prix*), par exemple en fixant un prix supérieur à son coût marginal.

## Le monopole
Un **monopole** est un marché où un seul vendeur fait face à de nombreux acheteurs. Il existe des **barrières à l'entrée** :
- **légales** (brevets, licences, droits exclusifs) ;
- **économiques** (coûts fixes énormes, économies d'échelle) ;
- **stratégiques** (contrôle d'une ressource rare, réseau).

Le **monopole naturel** apparaît quand les coûts fixes sont si élevés qu'une seule entreprise produit à moindre coût que plusieurs (réseau ferré, distribution d'eau).

Le monopole **maximise son profit** en produisant une quantité **plus faible** et en fixant un **prix plus élevé** qu'en concurrence. Résultat : le surplus du consommateur diminue, une partie est captée par le monopole, et il y a une **perte sèche** pour la collectivité.

>! **Exemple** : un laboratoire titulaire d'un brevet sur un médicament fixe un prix bien supérieur à son coût de production pendant la durée du brevet.

## L'oligopole
Un **oligopole** est un marché dominé par un **petit nombre d'offreurs** (téléphonie mobile, aviation, sodas). Chaque entreprise doit tenir compte des réactions de ses concurrentes : il y a **interdépendance stratégique**.
- Les firmes peuvent se livrer une **guerre des prix**.
- Elles peuvent au contraire être tentées de **s'entendre** (entente, cartel) pour fixer des prix élevés ou se partager le marché.

>! **Le dilemme du prisonnier** (théorie des jeux) : deux entreprises auraient intérêt collectivement à maintenir des prix élevés, mais chacune a individuellement intérêt à baisser son prix pour capter la clientèle. Sans coopération, elles aboutissent à une situation moins favorable pour elles deux.

## Les stratégies pour obtenir un pouvoir de marché
- **Différenciation des produits** (marque, qualité, design) : on parle de **concurrence monopolistique**.
- **Innovation** protégée par des brevets.
- **Concentration** : fusions, acquisitions.
- **Pratiques anticoncurrentielles** : ententes, abus de position dominante.

## La politique de la concurrence
Elle vise à protéger le fonctionnement concurrentiel des marchés, dans l'intérêt des consommateurs. En France, l'**Autorité de la concurrence** ; dans l'Union européenne, la **Commission européenne**. Elle :
- sanctionne les **ententes** (cartels) ;
- sanctionne les **abus de position dominante** ;
- contrôle les **concentrations** (fusions) ;
- contrôle les **aides d'État** qui faussent la concurrence.

Le pouvoir de marché n'est pas toujours condamné : le **brevet** donne un monopole temporaire qui récompense l'innovation.

> **À retenir** :
> - Pouvoir de marché = capacité à influencer le prix.
> - Monopole : un vendeur, prix plus élevé, quantité plus faible, perte sèche.
> - Oligopole : peu de vendeurs, interdépendance stratégique, tentation d'entente.
> - La politique de la concurrence sanctionne ententes et abus de position dominante et contrôle les concentrations.
`,
      exercices: [
        { type: "qcm", question: "Un marché avec un petit nombre de vendeurs et de nombreux acheteurs est :", choix: ["un monopole", "un monopsone", "un oligopole", "un marché de concurrence parfaite"], reponse: 2,
          explication: "**Oligopole** : peu d'offreurs. Le monopole a un seul vendeur ; le monopsone un seul acheteur." },
        { type: "vf", question: "Un monopole fixe en général un prix plus élevé et produit une quantité plus faible qu'un marché concurrentiel.", reponse: true,
          explication: "Pour maximiser son profit, le monopole restreint la production afin de vendre plus cher : le surplus du consommateur baisse et une perte sèche apparaît." },
        { type: "qcm", question: "Lequel de ces éléments est une barrière à l'entrée légale ?", choix: ["Des économies d'échelle", "Une forte image de marque", "Un brevet", "Des coûts fixes élevés"], reponse: 2,
          explication: "Le **brevet** est un droit accordé par la loi. Les économies d'échelle et les coûts fixes sont des barrières économiques ; l'image de marque une barrière stratégique." },
        { type: "saisie", question: "Comment appelle-t-on l'accord entre entreprises d'un même marché pour fixer ensemble leurs prix ? (un mot)", reponses: ["entente", "cartel", "une entente", "un cartel", "collusion", "ententes", "cartels"],
          explication: "Une **entente** (ou cartel) est une pratique anticoncurrentielle sanctionnée par l'Autorité de la concurrence." },
        { type: "qcm", question: "Quelle institution sanctionne en France les pratiques anticoncurrentielles ?", choix: ["La Banque de France", "Le Conseil constitutionnel", "La Cour des comptes", "L'Autorité de la concurrence"], reponse: 3,
          explication: "L'**Autorité de la concurrence** (et au niveau européen la Commission) sanctionne ententes et abus de position dominante." },
        { type: "vf", question: "Dans un oligopole, chaque entreprise peut fixer son prix sans se soucier des autres.", reponse: false,
          explication: "C'est l'inverse : l'oligopole se caractérise par l'**interdépendance stratégique**. Chaque firme anticipe les réactions de ses rivales." },
        { type: "qcm", question: "Dans le dilemme du prisonnier appliqué à deux entreprises en duopole, sans coopération :", choix: ["elles maintiennent toujours des prix élevés", "l'une disparaît forcément", "l'État fixe le prix", "chacune a intérêt à baisser son prix, et elles finissent toutes deux moins bien loties"], reponse: 3,
          explication: "Chacune a individuellement intérêt à baisser son prix ; mais si les deux le font, leurs profits sont plus faibles que si elles avaient coopéré. L'intérêt individuel ne conduit pas à l'optimum collectif." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que la politique de la concurrence peut améliorer le fonctionnement des marchés.", corrige: `**Idée 1 – Le pouvoir de marché réduit le bien-être des consommateurs.**
- Un monopole ou une entente fixe des prix supérieurs au coût marginal et réduit les quantités : le surplus du consommateur baisse et une perte sèche apparaît.

**Idée 2 – La politique de la concurrence lutte contre ces situations.**
- Elle **sanctionne les ententes** (amendes infligées à des cartels) et les **abus de position dominante**.
- Elle **contrôle les concentrations** : une fusion peut être refusée ou soumise à conditions si elle crée une position dominante.
- Elle encadre les **aides d'État** qui fausseraient la concurrence.

**Idée 3 – Elle favorise ainsi des prix plus bas, plus de choix et d'innovation**, tout en tolérant certains pouvoirs de marché temporaires utiles (brevets qui récompensent l'innovation).` },
      ],
    },
    {
      id: "defaillances-marche",
      titre: "Quelles sont les principales défaillances du marché ?",
      theme: "Science économique",
      cours: `
## Qu'est-ce qu'une défaillance du marché ?
Il y a **défaillance du marché** lorsque le marché, laissé à lui-même, ne conduit pas à une allocation efficace des ressources. Les principales défaillances sont : les **externalités**, les **biens collectifs** et **biens communs**, et les **asymétries d'information**. Elles justifient une **intervention publique**.

## Les externalités
Une **externalité** est l'effet de l'activité d'un agent sur le bien-être d'un autre agent, **sans contrepartie monétaire** (sans passer par le marché).
- **Externalité négative** : pollution d'une usine, bruit, embouteillages. Le marché produit **trop** car le coût social n'est pas payé par le pollueur.
- **Externalité positive** : vaccination, éducation, recherche, apiculture voisine d'un verger. Le marché produit **trop peu**.

## Biens collectifs et biens communs
On classe les biens selon deux critères :
- **rivalité** : la consommation par l'un empêche celle de l'autre ;
- **excluabilité** : on peut empêcher quelqu'un de consommer (en le faisant payer).

| Type | Rival ? | Excluable ? | Exemple |
|---|---|---|---|
| Bien privé | oui | oui | une baguette |
| Bien collectif (public pur) | non | non | éclairage public, défense nationale |
| Bien commun | oui | non | ressources halieutiques, nappe phréatique |
| Bien de club | non | oui | chaîne cryptée, autoroute peu fréquentée |

- Le **bien collectif** pose le problème du **passager clandestin** (*free rider*) : chacun a intérêt à en profiter sans payer, donc le marché ne le produit pas ou pas assez.
- Le **bien commun** est menacé de **surexploitation** : c'est la « **tragédie des biens communs** » (Garrett Hardin, 1968). Elinor Ostrom a montré que des communautés peuvent gérer durablement des biens communs par des règles collectives.

## Les asymétries d'information
Il y a **asymétrie d'information** quand une partie à l'échange dispose de plus d'informations que l'autre.
- **Sélection adverse** (antisélection), *avant* le contrat : George **Akerlof** (« Le marché des tacots », 1970) montre que sur le marché des voitures d'occasion, l'acheteur ne pouvant distinguer bonnes et mauvaises voitures propose un prix moyen ; les vendeurs de bonnes voitures se retirent, et il ne reste que des « tacots ». Le marché peut disparaître.
- **Aléa moral**, *après* le contrat : une partie modifie son comportement parce que l'autre ne peut pas l'observer (un assuré devient moins prudent).

## L'intervention publique
Pour corriger les défaillances, les pouvoirs publics disposent de plusieurs outils :
- **Réglementation** : normes, interdictions (interdiction de certains pesticides), obligation d'information (contrôle technique, étiquetage).
- **Taxation** des externalités négatives (taxe pigouvienne, principe pollueur-payeur, taxe carbone) et **subventions** des externalités positives.
- **Marché de quotas d'émission** (droits à polluer échangeables).
- **Production publique** des biens collectifs, financée par l'impôt.

> **À retenir** :
> - Externalité = effet sur autrui sans contrepartie monétaire.
> - Bien collectif : non rival et non excluable → passager clandestin.
> - Bien commun : rival et non excluable → surexploitation.
> - Asymétrie d'information : sélection adverse (Akerlof) et aléa moral.
> - L'État corrige par la réglementation, la taxation, les subventions, les quotas, la production publique.
`,
      exercices: [
        { type: "qcm", question: "La pollution d'une rivière par une usine, qui nuit aux pêcheurs sans qu'ils soient indemnisés, est :", choix: ["une externalité positive", "une asymétrie d'information", "une externalité négative", "un bien collectif"], reponse: 2,
          explication: "L'usine affecte le bien-être des pêcheurs sans contrepartie monétaire : **externalité négative**." },
        { type: "qcm", question: "Un bien non rival et non excluable est :", choix: ["un bien collectif", "un bien commun", "un bien de club", "un bien privé"], reponse: 0,
          explication: "Le **bien collectif** (éclairage public, phare) est à la fois non rival et non excluable." },
        { type: "vf", question: "Les stocks de poissons en haute mer sont un bien commun : rivaux mais non excluables.", reponse: true,
          explication: "Un poisson pêché ne peut l'être par un autre (rivalité) et il est difficile d'interdire l'accès à la haute mer (non-excluabilité) : risque de surexploitation." },
        { type: "saisie", question: "Quel économiste a illustré la sélection adverse par le marché des voitures d'occasion ?", reponses: ["Akerlof", "George Akerlof", "G. Akerlof", "Georges Akerlof", "Akerloff"],
          explication: "George **Akerlof**, « The Market for Lemons » (1970), prix Nobel 2001." },
        { type: "qcm", question: "Un automobiliste bien assuré qui devient moins prudent illustre :", choix: ["la sélection adverse", "l'aléa moral", "le passager clandestin", "une externalité positive"], reponse: 1,
          explication: "Le changement de comportement **après** la signature du contrat, non observable par l'assureur, est un **aléa moral**." },
        { type: "vf", question: "Le marché a tendance à produire trop de biens générant des externalités positives.", reponse: false,
          explication: "C'est l'inverse : le producteur n'est pas rémunéré pour le bénéfice qu'il procure aux autres, donc le marché en produit **trop peu**. D'où des subventions (recherche, vaccination)." },
        { type: "qcm", question: "Une taxe carbone est un instrument qui :", choix: ["fait payer au pollueur le coût de l'externalité qu'il crée", "interdit toute émission de CO₂", "subventionne les entreprises polluantes", "crée un bien collectif"], reponse: 0,
          explication: "C'est une taxe **pigouvienne** : elle *internalise* l'externalité en appliquant le principe pollueur-payeur." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : À l'aide d'un exemple, montrez que les asymétries d'information peuvent perturber le fonctionnement du marché.", corrige: `**Définition** : il y a asymétrie d'information lorsqu'une partie à l'échange est mieux informée que l'autre.

**Mécanisme de la sélection adverse (Akerlof)** :
- Sur le marché des voitures d'occasion, le vendeur connaît la qualité de sa voiture, pas l'acheteur.
- L'acheteur, méfiant, n'accepte de payer qu'un prix correspondant à une qualité moyenne.
- Les propriétaires de bonnes voitures, jugeant ce prix trop bas, se retirent du marché.
- La qualité moyenne baisse, le prix aussi… jusqu'à ce qu'il ne reste que des « tacots » : le marché peut disparaître.

**Autre effet : l'aléa moral** (après le contrat), par exemple un assuré moins prudent.

**Conclusion** : le marché n'assure plus des échanges efficaces ; d'où des réponses comme la garantie, le contrôle technique obligatoire, les labels ou la franchise en assurance.` },
      ],
    },
    {
      id: "financement",
      titre: "Comment les agents économiques se financent-ils ?",
      theme: "Science économique",
      cours: `
## Capacité et besoin de financement
- Un agent dégage une **capacité de financement** lorsque son épargne dépasse ses dépenses d'investissement (en général les **ménages**).
- Il a un **besoin de financement** dans le cas inverse (en général les **entreprises** et les **administrations publiques**).

Le système financier met en relation les agents à capacité et les agents à besoin de financement.

## L'autofinancement
L'**autofinancement** consiste pour une entreprise à financer ses investissements avec ses **propres ressources**, issues de ses profits non distribués (épargne brute).
- Avantages : indépendance, pas d'intérêts à payer.
- Limite : souvent insuffisant pour de gros investissements.

Le **taux d'autofinancement** = épargne brute / investissement (FBCF) × 100.

## Le financement externe
### Le financement indirect (intermédié)
L'agent emprunte auprès d'une **banque** (intermédiaire financier) : c'est le **crédit**. La banque collecte l'épargne et prête, ou crée de la monnaie en accordant des crédits. Elle prend en charge le risque.

### Le financement direct (désintermédié)
L'agent se finance directement sur les **marchés financiers** :
- en émettant des **actions** (titres de propriété) sur le marché primaire : on parle de financement par **fonds propres** ; l'actionnaire reçoit des **dividendes** et a un droit de vote ;
- en émettant des **obligations** (titres de créance) : l'obligataire est un prêteur qui reçoit des **intérêts** et est remboursé à l'échéance.

| | Action | Obligation |
|---|---|---|
| Nature | titre de propriété | titre de créance |
| Rémunération | dividende (variable) | intérêt (souvent fixe) |
| Remboursement | non | oui, à l'échéance |
| Droit de vote | oui | non |

## Le taux d'intérêt
Le **taux d'intérêt** est le prix de l'argent emprunté, la rémunération du prêteur. Il dépend :
- de l'offre et de la demande de fonds prêtables ;
- de la **durée** du prêt ;
- du **risque** de l'emprunteur (prime de risque) ;
- de l'**inflation** anticipée et de la politique monétaire.

>! **Exemple** : tu empruntes 10 000 € à 4 % sur un an. Tu rembourses 10 000 + 10 000 × 0,04 = 10 400 € ; le coût du crédit est de 400 €.

**Taux d'intérêt réel ≈ taux nominal − taux d'inflation**. Un taux nominal de 5 % avec 2 % d'inflation donne un taux réel d'environ 3 %.

## Le financement de l'État
Le **budget de l'État** retrace ses **recettes** (impôts : TVA, impôt sur le revenu, impôt sur les sociétés…) et ses **dépenses** (fonctionnement, investissement, intérêts de la dette, transferts).
- **Solde budgétaire** = recettes − dépenses. S'il est négatif : **déficit public**.
- Le déficit est financé par l'**emprunt**, principalement par l'émission de titres (obligations assimilables du Trésor).
- La **dette publique** est le **stock** de tout ce que les administrations publiques doivent ; le déficit est un **flux** annuel qui vient l'alimenter.

Le déficit et la dette sont souvent rapportés au **PIB** (critères européens de référence : déficit de 3 %, dette de 60 % du PIB).

> **À retenir** :
> - Autofinancement, financement externe indirect (crédit bancaire) ou direct (actions, obligations).
> - Le taux d'intérêt est le prix du crédit ; il intègre durée, risque, inflation.
> - Déficit = flux annuel ; dette = stock accumulé.
`,
      exercices: [
        { type: "qcm", question: "Une entreprise qui finance une nouvelle machine grâce à ses bénéfices non distribués pratique :", choix: ["le financement direct", "le financement intermédié", "l'autofinancement", "l'émission d'obligations"], reponse: 2,
          explication: "Utiliser ses propres ressources (profits mis en réserve) est de l'**autofinancement**." },
        { type: "vf", question: "Un détenteur d'obligations est un propriétaire de l'entreprise.", reponse: false,
          explication: "L'obligation est un **titre de créance** : son détenteur est un prêteur. C'est l'action qui est un titre de propriété." },
        { type: "saisie", question: "Une entreprise a une épargne brute de 300 millions d'euros et investit 400 millions. Quel est son taux d'autofinancement (en %) ?", reponses: ["75", "75 %", "75%"],
          explication: "Taux d'autofinancement = 300 / 400 × 100 = **75 %**." },
        { type: "saisie", question: "Tu empruntes 5 000 € à 3 % pour un an. Combien d'intérêts paies-tu (en euros) ?", reponses: ["150", "150 €", "150 euros"],
          explication: "Intérêts = 5 000 × 0,03 = **150 €**." },
        { type: "qcm", question: "Un crédit accordé par une banque à une entreprise relève du :", choix: ["financement direct", "autofinancement", "financement indirect (intermédié)", "financement par fonds propres"], reponse: 2,
          explication: "La banque s'interpose entre l'entreprise et les épargnants : c'est le financement **intermédié**." },
        { type: "saisie", question: "Le taux d'intérêt nominal est de 6 % et l'inflation de 4 %. Quel est le taux d'intérêt réel approximatif (en %) ?", reponses: ["2", "2 %", "2%", "environ 2", "environ 2 %", "≈ 2"],
          explication: "Taux réel ≈ taux nominal − inflation = 6 − 4 = **2 %**." },
        { type: "vf", question: "La dette publique est un flux, le déficit public est un stock.", reponse: false,
          explication: "C'est l'inverse : le **déficit** est un flux (sur une année), la **dette** un stock (accumulation des déficits passés non remboursés)." },
        { type: "qcm", question: "Un État a un PIB de 2 500 milliards d'euros et un déficit de 125 milliards. Son déficit représente :", choix: ["2 % du PIB", "12,5 % du PIB", "20 % du PIB", "5 % du PIB"], reponse: 3,
          explication: "125 / 2 500 × 100 = **5 %** du PIB." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Distinguez les différents modes de financement des entreprises.", corrige: `**1. Le financement interne : l'autofinancement**
- L'entreprise utilise ses profits non distribués.
- Avantage : indépendance et absence de coût d'emprunt. Limite : montant restreint.

**2. Le financement externe indirect : le crédit bancaire**
- Une banque prête à l'entreprise moyennant un **taux d'intérêt**.
- Adapté aux PME qui n'ont pas accès aux marchés financiers ; mais c'est un endettement coûteux.

**3. Le financement externe direct sur les marchés financiers**
- Par **émission d'actions** : apport de fonds propres, pas de remboursement, mais dilution du pouvoir et versement de dividendes.
- Par **émission d'obligations** : emprunt directement auprès des épargnants, remboursable à l'échéance avec intérêts.

**Conclusion** : le choix dépend de la taille de l'entreprise, du coût du crédit (niveau des taux d'intérêt) et de la volonté de garder le contrôle du capital.` },
      ],
    },
    {
      id: "monnaie",
      titre: "Qu'est-ce que la monnaie et comment est-elle créée ?",
      theme: "Science économique",
      cours: `
## Les fonctions de la monnaie
La **monnaie** est un actif accepté par tous comme moyen de paiement. Elle remplit trois fonctions (depuis Aristote) :
- **unité de compte** : elle permet d'exprimer la valeur de tous les biens dans une même unité ;
- **intermédiaire des échanges** : elle évite les difficultés du troc (la « double coïncidence des besoins ») ;
- **réserve de valeur** : elle permet de reporter dans le temps l'utilisation du pouvoir d'achat.

## Les formes de la monnaie
- **Monnaie fiduciaire** : billets et pièces (fondée sur la confiance, *fiducia*).
- **Monnaie scripturale** : soldes créditeurs des comptes bancaires (dépôts à vue), qui circulent par chèque, carte, virement. C'est aujourd'hui l'essentiel de la masse monétaire (environ 90 % dans la zone euro).
- **Monnaie électronique** : unités stockées sur un support (carte prépayée).

La monnaie a perdu toute valeur intrinsèque (monnaie-marchandise → monnaie de papier → monnaie scripturale) : elle repose sur la **confiance**. Les crypto-actifs (bitcoin) ne remplissent qu'imparfaitement les fonctions de la monnaie (forte volatilité).

## La création monétaire par les banques
> **« Les crédits font les dépôts »** : quand une banque accorde un crédit, elle crédite le compte de l'emprunteur d'un montant nouveau. De la monnaie scripturale est **créée** ex nihilo par un simple jeu d'écriture.

- Le **remboursement** du crédit **détruit** la monnaie.
- La masse monétaire augmente quand les nouveaux crédits dépassent les remboursements.

>! **Exemple** : la banque B accorde un prêt de 20 000 € à Léa. Au bilan : à l'actif, une créance de 20 000 € sur Léa ; au passif, un dépôt de 20 000 € sur le compte de Léa. 20 000 € de monnaie sont créés.

## Les limites à la création monétaire
- La **demande de crédit** des agents (et leur solvabilité).
- Le besoin de **monnaie centrale** : les banques doivent disposer de liquidités pour faire face aux retraits en billets, aux paiements vers les autres banques et aux **réserves obligatoires**. Elles se procurent cette monnaie auprès de la **banque centrale** ou sur le **marché interbancaire**.
- La **réglementation prudentielle** (ratios de fonds propres).

## Le rôle de la banque centrale
Dans la zone euro, c'est la **Banque centrale européenne (BCE)**, indépendante. Elle :
- émet les billets (monnaie fiduciaire) ;
- est la « banque des banques » : elle fournit la monnaie centrale ;
- est le **prêteur en dernier ressort** : en cas de crise, elle fournit des liquidités aux banques pour éviter des faillites en chaîne ;
- conduit la **politique monétaire** ; son objectif principal est la **stabilité des prix** (inflation proche de 2 % à moyen terme).

## La politique monétaire
- **Instrument principal** : les **taux directeurs**, taux auxquels la BCE prête aux banques ou rémunère les dépôts qu'elles placent chez elle (depuis 2024, la BCE pilote surtout via le taux de la **facilité de dépôt**).
- **Politique expansive** (baisse des taux) : le crédit devient moins cher, l'investissement et la consommation sont stimulés, mais risque d'inflation.
- **Politique restrictive** (hausse des taux) : le crédit devient plus cher, la demande ralentit, l'inflation recule. Exemple : hausse des taux de la BCE en 2022-2023 face à la forte inflation.
- **Politiques non conventionnelles** : rachats massifs de titres (*quantitative easing*).

> **À retenir** :
> - 3 fonctions : unité de compte, intermédiaire des échanges, réserve de valeur.
> - Les banques créent la monnaie en accordant des crédits ; le remboursement la détruit.
> - La banque centrale fournit la monnaie centrale et fixe les taux directeurs pour assurer la stabilité des prix.
`,
      exercices: [
        { type: "qcm", question: "Quand tu indiques qu'un livre « vaut 20 € », la monnaie remplit sa fonction :", choix: ["de réserve de valeur", "d'intermédiaire des échanges", "d'unité de compte", "de création monétaire"], reponse: 2,
          explication: "Exprimer la valeur d'un bien en euros correspond à la fonction d'**unité de compte**." },
        { type: "vf", question: "Les billets et les pièces représentent la plus grande partie de la masse monétaire dans la zone euro.", reponse: false,
          explication: "La **monnaie scripturale** (dépôts bancaires) est largement majoritaire, autour de 90 %." },
        { type: "qcm", question: "Lorsqu'une banque accorde un crédit de 10 000 € à un client :", choix: ["elle prête l'argent déposé par d'autres clients, sans création monétaire", "elle crée 10 000 € de monnaie scripturale", "la BCE imprime 10 000 € de billets", "la masse monétaire baisse"], reponse: 1,
          explication: "« Les crédits font les dépôts » : la banque crédite le compte du client par un jeu d'écriture et **crée** de la monnaie." },
        { type: "vf", question: "Le remboursement d'un crédit détruit de la monnaie.", reponse: true,
          explication: "Le remboursement annule la créance et le dépôt correspondant : la monnaie créée disparaît." },
        { type: "saisie", question: "Quel est le nom de la banque centrale de la zone euro ? (sigle)", reponses: ["BCE", "Banque centrale européenne", "la BCE"],
          explication: "La **BCE** (Banque centrale européenne), dont le siège est à Francfort." },
        { type: "qcm", question: "Face à une forte inflation, la banque centrale mène plutôt :", choix: ["une hausse des taux directeurs", "une baisse des taux directeurs", "une hausse des impôts", "une dévaluation"], reponse: 0,
          explication: "Une **hausse des taux directeurs** renchérit le crédit, freine la demande et donc la hausse des prix (politique restrictive)." },
        { type: "qcm", question: "Quelle situation fait AUGMENTER la masse monétaire ?", choix: ["Les remboursements dépassent les nouveaux crédits", "Un ménage retire des billets à un distributeur", "Les nouveaux crédits dépassent les remboursements", "Un ménage transfère son argent d'une banque à une autre"], reponse: 2,
          explication: "La masse monétaire augmente quand les créations (crédits) l'emportent sur les destructions (remboursements). Un retrait ou un transfert change seulement la forme ou la banque, pas la quantité." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que les banques créent de la monnaie mais que cette création est limitée.", corrige: `**Idée 1 – Les banques créent la monnaie scripturale.**
- Quand une banque accorde un crédit, elle inscrit une créance à son actif et un dépôt à son passif : « les crédits font les dépôts ».
- *Exemple* : un prêt immobilier de 200 000 € crée 200 000 € de monnaie.
- Le remboursement du crédit détruit la monnaie.

**Idée 2 – Cette création est limitée.**
- Par la **demande de crédit** et la solvabilité des emprunteurs.
- Par le besoin de **monnaie centrale** : les banques doivent obtenir des liquidités auprès de la banque centrale (retraits de billets, réserves obligatoires, paiements interbancaires).
- Par la **politique monétaire** : en relevant ses taux directeurs, la BCE renchérit le refinancement des banques, qui augmentent leurs propres taux, ce qui freine le crédit.
- Par la **réglementation prudentielle** (fonds propres minimaux).` },
      ],
    },
    {
      id: "socialisation",
      titre: "Comment la socialisation contribue-t-elle à expliquer les différences de comportement des individus ?",
      theme: "Sociologie et science politique",
      cours: `
## Définition
La **socialisation** est le processus par lequel un individu **apprend et intériorise** les **normes** et les **valeurs** de la société et des groupes auxquels il appartient, et construit ainsi son identité sociale.
- Les **valeurs** sont des idéaux, des principes jugés désirables (l'égalité, la liberté, le travail).
- Les **normes** sont des règles de conduite qui découlent des valeurs (faire la queue, saluer, respecter le code de la route).

Pour **Émile Durkheim**, l'éducation est une « socialisation méthodique de la jeune génération » : la société s'impose à l'individu.

## Socialisation primaire et secondaire
- La **socialisation primaire** se déroule pendant l'enfance et l'adolescence. Elle est fondamentale et durable (langage, habitudes alimentaires, goûts).
- La **socialisation secondaire** a lieu à l'âge adulte (travail, couple, engagement associatif ou politique). Elle peut prolonger ou transformer la socialisation primaire (Peter Berger et Thomas Luckmann).

## Les instances de socialisation
- La **famille** : instance première, elle transmet langage, valeurs, pratiques, une vision du monde.
- L'**école** : transmet savoirs et normes (ponctualité, discipline, mérite).
- Le **groupe de pairs** : enfants ou jeunes du même âge ; rôle croissant à l'adolescence.
- Les **médias** et le **numérique** : séries, réseaux sociaux numériques, publicité.
- Plus tard : le monde du travail, les associations, les partis, les institutions religieuses.

Ces instances peuvent être **cohérentes** ou **concurrentes** (pluralité des influences).

## Socialisation différenciée selon le milieu social
Les individus ne sont pas socialisés de la même façon selon leur milieu social.
- **Pierre Bourdieu** : chaque milieu transmet un **habitus**, « système de dispositions durables et transposables » (manières de penser, de parler, de se tenir, goûts). Les familles favorisées transmettent aussi un **capital culturel** proche de la culture scolaire.
- *Exemples* : pratiques culturelles (musée, lecture), sport pratiqué, rapport à l'école et à la langue.

## Socialisation différenciée selon le genre
Le **genre** désigne les différences entre hommes et femmes **construites socialement** (et non biologiques).
- Dès la petite enfance : jouets, couleurs, vêtements, attentes des parents (on encourage davantage les garçons à l'action et les filles au soin).
- À l'école : orientation (filières scientifiques et techniques plus masculines), attentes des enseignants.
- Conséquence : division sexuée des tâches domestiques, choix professionnels différents.

## Pluralité des influences socialisatrices
**Bernard Lahire** montre que l'individu est un « **homme pluriel** » : il est socialisé par des instances multiples, parfois contradictoires. Cela explique des comportements non conformes à son milieu d'origine et des **trajectoires improbables** (réussite scolaire en milieu populaire).

> **À retenir** :
> - Socialisation = intériorisation des normes et valeurs.
> - Primaire (enfance) / secondaire (âge adulte).
> - Instances : famille, école, pairs, médias…
> - Socialisation différenciée selon le milieu social (habitus, Bourdieu) et le genre.
> - Pluralité des influences (Lahire).
`,
      exercices: [
        { type: "qcm", question: "« Le respect d'autrui » est plutôt :", choix: ["une norme", "une sanction", "un rôle", "une valeur"], reponse: 3,
          explication: "C'est un idéal, un principe jugé désirable : une **valeur**. Une norme est une règle de conduite concrète (dire bonjour, ne pas couper la parole)." },
        { type: "vf", question: "La socialisation secondaire se déroule principalement pendant l'enfance.", reponse: false,
          explication: "C'est la socialisation **primaire** qui a lieu pendant l'enfance ; la socialisation secondaire concerne l'âge adulte." },
        { type: "saisie", question: "Quel concept de Pierre Bourdieu désigne le système de dispositions durables acquises par la socialisation ?", reponses: ["habitus", "l'habitus", "l habitus"],
          explication: "L'**habitus** : manières de penser, d'agir, de sentir intériorisées, qui varient selon le milieu social." },
        { type: "qcm", question: "Quelle instance prend une importance croissante dans la socialisation à l'adolescence ?", choix: ["La famille", "Le groupe de pairs", "L'entreprise", "Le syndicat"], reponse: 1,
          explication: "Le **groupe de pairs** (amis du même âge) joue un rôle croissant à l'adolescence, parfois en concurrence avec la famille." },
        { type: "vf", question: "Le genre désigne les différences biologiques entre hommes et femmes.", reponse: false,
          explication: "Le genre désigne les différences **socialement construites** ; les différences biologiques relèvent du sexe." },
        { type: "qcm", question: "Bernard Lahire parle d'« homme pluriel » pour souligner :", choix: ["que l'individu est socialisé par des instances multiples, parfois contradictoires", "que la famille est la seule instance de socialisation", "que les hommes et les femmes sont socialisés de la même manière", "que la socialisation s'arrête à 18 ans"], reponse: 0,
          explication: "Lahire insiste sur la **pluralité des influences socialisatrices**, qui explique la diversité des comportements individuels." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que la socialisation varie selon le genre.", corrige: `**Définition** : le genre désigne les différences entre hommes et femmes construites par la société.

**Idée 1 – Dans la famille.**
- Jouets, couleurs, vêtements différenciés ; on attend des filles qu'elles soient calmes et attentives aux autres, des garçons qu'ils soient actifs et compétitifs.
- Les enfants observent la répartition inégale des tâches domestiques entre parents et l'intériorisent.

**Idée 2 – À l'école et chez les pairs.**
- Les attentes des enseignants et les choix d'orientation diffèrent : les filles sont sous-représentées dans les filières d'ingénieurs et le numérique, surreprésentées dans les filières du soin et des lettres.
- Les pairs sanctionnent les comportements jugés non conformes à son genre (moqueries).

**Idée 3 – Conséquences** : choix professionnels, pratiques sportives et culturelles différents à l'âge adulte. Cette socialisation n'est cependant pas un destin : la socialisation secondaire et la pluralité des influences peuvent la transformer.` },
      ],
    },
    {
      id: "liens-sociaux",
      titre: "Comment se construisent et évoluent les liens sociaux ?",
      theme: "Sociologie et science politique",
      cours: `
## Les groupes sociaux
Un **groupe social** est un ensemble d'individus ayant des **interactions**, une **conscience d'appartenance** et souvent des **objectifs ou valeurs communs**. À distinguer de la simple **catégorie** statistique (les « 15-24 ans »).
- **Groupe primaire** : restreint, relations directes et affectives (famille, amis).
- **Groupe secondaire** : plus large, relations plus formelles et fonctionnelles (entreprise, association, parti).

## Les réseaux sociaux
Un **réseau social** est un ensemble de **relations** entre individus (ou organisations). On l'analyse par les **liens** qui unissent les membres.
- **Mark Granovetter** distingue les **liens forts** (famille, amis proches) et les **liens faibles** (connaissances). Il montre la « **force des liens faibles** » : ils permettent d'accéder à des informations nouvelles, par exemple pour trouver un emploi.
- Le **capital social** (Bourdieu) : ensemble des relations qu'un individu peut mobiliser.
- Les **réseaux sociaux numériques** élargissent et transforment les liens, mais peuvent aussi enfermer (« bulles »).

## Les formes de solidarité selon Durkheim
Dans *De la division du travail social* (1893), **Émile Durkheim** se demande ce qui fait tenir une société ensemble (la **cohésion sociale**).
- **Solidarité mécanique** (sociétés traditionnelles) : les individus se ressemblent, partagent les mêmes croyances. La **conscience collective** est forte. Le droit est surtout **répressif**.
- **Solidarité organique** (sociétés modernes) : les individus sont **différents** et **complémentaires** grâce à la **division du travail**, comme les organes d'un corps. Montée de l'**individualisme**. Le droit est surtout **restitutif** (réparer).

## Les liens sociaux selon Serge Paugam
Serge Paugam distingue quatre types de liens qui apportent **protection** et **reconnaissance** :
- le **lien de filiation** (parents-enfants) ;
- le **lien de participation élective** (amis, conjoint, associations) ;
- le **lien de participation organique** (travail, école) ;
- le **lien de citoyenneté** (appartenance à une nation, droits).

## La fragilisation des liens sociaux
- **Chômage et précarité** fragilisent le lien de participation organique.
- **Isolement** et ruptures familiales (divorces, personnes âgées seules).
- **Exclusion** : cumul de ruptures conduisant à la « **désaffiliation** » (Robert Castel) ou à la « **disqualification sociale** » (Paugam).
- Durkheim parle d'**anomie** : affaiblissement des normes qui régulent les comportements.

Mais de nouvelles formes de liens apparaissent : engagement associatif, réseaux numériques, solidarités de voisinage.

> **À retenir** :
> - Groupe social ≠ catégorie statistique.
> - Liens forts / liens faibles (Granovetter).
> - Solidarité mécanique (similitude) / organique (complémentarité, division du travail) : Durkheim.
> - Quatre types de liens (Paugam) ; fragilisation par le chômage, l'isolement, l'exclusion.
`,
      exercices: [
        { type: "qcm", question: "Selon Durkheim, la solidarité organique repose sur :", choix: ["la ressemblance des individus", "une conscience collective très forte", "la complémentarité des individus liée à la division du travail", "un droit essentiellement répressif"], reponse: 2,
          explication: "La solidarité **organique**, propre aux sociétés modernes, repose sur la **différenciation** et la complémentarité des individus (division du travail). Les trois autres caractérisent la solidarité mécanique." },
        { type: "vf", question: "Les « femmes de 30 à 40 ans » constituent un groupe social.", reponse: false,
          explication: "C'est une **catégorie statistique** : ces personnes n'ont pas forcément d'interactions ni de conscience d'appartenance commune." },
        { type: "saisie", question: "Quel sociologue a montré la « force des liens faibles » ?", reponses: ["Granovetter", "Mark Granovetter", "M. Granovetter"],
          explication: "Mark **Granovetter** (1973) : les liens faibles donnent accès à des informations nouvelles, notamment pour trouver un emploi." },
        { type: "qcm", question: "La famille est un exemple de :", choix: ["groupe secondaire", "catégorie statistique", "lien de citoyenneté", "groupe primaire"], reponse: 3,
          explication: "La famille est un **groupe primaire** : restreint, relations directes et affectives." },
        { type: "qcm", question: "Chez Paugam, le lien qui unit un salarié à ses collègues et à son entreprise est le lien :", choix: ["de filiation", "de participation élective", "de participation organique", "de citoyenneté"], reponse: 2,
          explication: "Le lien de **participation organique** est lié au monde du travail et de l'école." },
        { type: "vf", question: "Le chômage de longue durée peut fragiliser plusieurs types de liens sociaux à la fois.", reponse: true,
          explication: "Il affecte le lien organique (travail), mais aussi souvent les liens électifs (sociabilité) voire familiaux : c'est le processus de **disqualification sociale** (Paugam)." },
        { type: "qcm", question: "Dans la solidarité mécanique, le droit est principalement :", choix: ["restitutif", "répressif", "commercial", "inexistant"], reponse: 1,
          explication: "La conscience collective forte punit sévèrement les transgressions : droit **répressif**. Dans la solidarité organique domine le droit restitutif." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Distinguez solidarité mécanique et solidarité organique.", corrige: `**Contexte** : Durkheim, *De la division du travail social* (1893), cherche ce qui assure la cohésion sociale.

**Solidarité mécanique** (sociétés traditionnelles, faible division du travail) :
- les individus se ressemblent, partagent les mêmes croyances et valeurs ;
- la **conscience collective** est forte et laisse peu de place à l'individu ;
- le droit est **répressif** : la transgression est sévèrement punie.

**Solidarité organique** (sociétés modernes, forte division du travail) :
- les individus sont différents et **complémentaires**, interdépendants comme les organes d'un corps ;
- la conscience collective recule, l'**individualisme** progresse ;
- le droit est surtout **restitutif** : il vise à réparer, rétablir l'état antérieur.

**Conclusion** : le passage de l'une à l'autre ne signifie pas la fin du lien social mais sa transformation ; Durkheim souligne toutefois le risque d'**anomie** quand les normes ne régulent plus suffisamment les comportements.` },
      ],
    },
    {
      id: "deviance",
      titre: "Quels sont les processus sociaux qui contribuent à la déviance ?",
      theme: "Sociologie et science politique",
      cours: `
## Normes et contrôle social
- Les **normes sociales** sont des règles de conduite, implicites ou explicites (usages, mœurs).
- Les **normes juridiques** sont des règles de droit, édictées par l'État et assorties de sanctions officielles.

Le **contrôle social** est l'ensemble des moyens par lesquels une société obtient la conformité aux normes.
- **Contrôle social formel** : exercé par des institutions spécialisées (police, justice, école) avec des sanctions codifiées (amende, prison, exclusion).
- **Contrôle social informel** : exercé par l'entourage (famille, voisins, pairs) avec des sanctions diffuses (moquerie, réprobation, mise à l'écart).
- Les sanctions peuvent être **positives** (récompenses) ou **négatives** (punitions).

L'évolution actuelle combine un **contrôle informel** qui s'affaiblit dans les grandes villes et un **contrôle formel** qui se renforce et se technicise (vidéosurveillance, traçage numérique).

## Déviance et délinquance
- La **déviance** est la transgression d'une norme sociale, qui suscite une réprobation et des sanctions.
- La **délinquance** est la transgression d'une **norme juridique** (pénale) : c'est une forme particulière de déviance.

La déviance est **relative** : elle dépend du lieu, de l'époque, du groupe (fumer dans les cafés était admis en France avant 2008).

## Les explications de la déviance
### La déviance comme produit de l'anomie
- **Durkheim** : la déviance (le crime) est « normale » dans toute société ; elle augmente quand il y a **anomie**, c'est-à-dire un affaiblissement des normes.
- **Robert K. Merton** : la déviance naît d'un décalage entre les **buts valorisés** (réussite matérielle) et les **moyens légitimes** d'y parvenir. Certains innovent par des moyens illégitimes.

### La déviance comme apprentissage
Les **sous-cultures déviantes** : la déviance s'apprend au contact d'un groupe qui a ses propres normes (Edwin Sutherland, association différentielle).

### La déviance comme construction sociale : la théorie de l'étiquetage
**Howard Becker**, *Outsiders* (1963) :
- « Le déviant est celui auquel l'étiquette de déviant a été appliquée avec succès. » La déviance n'est pas une qualité de l'acte mais le résultat d'une **interaction** entre celui qui transgresse et ceux qui le désignent.
- Les **entrepreneurs de morale** créent les normes (créateurs) et les font appliquer (police, juges).
- La **carrière déviante** : l'étiquetage pousse l'individu à adopter une identité déviante et à rejoindre un groupe déviant (exemple des fumeurs de marijuana, des musiciens de jazz).

## Mesurer la délinquance
- **Statistiques administratives** (police, gendarmerie, justice) : ne recensent que les faits connus et enregistrés ; elles dépendent de l'activité des services et de la propension des victimes à porter plainte (« chiffre noir »).
- **Enquêtes de victimation** : on interroge un échantillon de personnes sur les atteintes subies, même non déclarées ; elles dépendent de la mémoire et de la sincérité des répondants.

> **À retenir** :
> - Déviance (norme sociale) ⊃ délinquance (norme juridique).
> - Contrôle social formel / informel.
> - Explications : anomie (Durkheim, Merton), apprentissage, étiquetage (Becker).
> - Statistiques administratives et enquêtes de victimation sont complémentaires.
`,
      exercices: [
        { type: "vf", question: "Toute délinquance est une forme de déviance, mais toute déviance n'est pas de la délinquance.", reponse: true,
          explication: "La délinquance est la transgression d'une norme **juridique**, cas particulier de la déviance qui concerne toutes les normes sociales." },
        { type: "qcm", question: "Un élève moqué par ses camarades pour sa tenue subit :", choix: ["un contrôle social informel", "un contrôle social formel", "une sanction pénale", "un étiquetage judiciaire"], reponse: 0,
          explication: "La sanction vient de l'entourage, elle n'est pas codifiée : **contrôle social informel**." },
        { type: "saisie", question: "Quel sociologue est l'auteur de *Outsiders* et de la théorie de l'étiquetage ?", reponses: ["Becker", "Howard Becker", "H. Becker"],
          explication: "Howard **Becker**, *Outsiders* (1963)." },
        { type: "qcm", question: "Chez Becker, les « entrepreneurs de morale » sont :", choix: ["les déviants eux-mêmes", "les chefs d'entreprise", "ceux qui créent les normes et les font appliquer", "les victimes"], reponse: 2,
          explication: "Les entrepreneurs de morale sont les **créateurs** de normes (groupes militants, législateurs) et ceux qui les **font appliquer** (police, juges)." },
        { type: "qcm", question: "Quelle source permet de connaître des délits non déclarés à la police ?", choix: ["Les statistiques de condamnations", "Les plaintes enregistrées", "Les enquêtes de victimation", "Le casier judiciaire"], reponse: 2,
          explication: "Les **enquêtes de victimation** interrogent directement les personnes sur les atteintes subies, déclarées ou non : elles éclairent le « chiffre noir »." },
        { type: "vf", question: "Selon Merton, la déviance peut naître d'un décalage entre les buts valorisés par la société et les moyens légitimes d'y parvenir.", reponse: true,
          explication: "C'est la théorie de l'**anomie** de Merton : faute de moyens légitimes, certains individus « innovent » par des moyens illégitimes." },
        { type: "qcm", question: "Une baisse du nombre de plaintes enregistrées pour violences peut s'expliquer par :", choix: ["obligatoirement une baisse des violences", "une hausse de la population", "la théorie de Durkheim", "une moindre propension des victimes à porter plainte"], reponse: 3,
          explication: "Les statistiques administratives dépendent du **dépôt de plainte** et de l'activité des services : une baisse des plaintes n'indique pas forcément une baisse des faits." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que la déviance peut résulter d'un processus d'étiquetage.", corrige: `**Définition** : la déviance est la transgression d'une norme sociale qui entraîne une réprobation.

**Idée 1 – La déviance est une construction sociale (Becker, *Outsiders*).**
- Un acte n'est pas déviant en soi : il le devient quand des **entrepreneurs de morale** créent une norme et la font appliquer.
- « Le déviant est celui auquel l'étiquette a été appliquée avec succès » : la déviance naît d'une **interaction**.

**Idée 2 – L'étiquetage enclenche une carrière déviante.**
- Une fois désigné comme déviant (par exemple après une interpellation), l'individu est traité comme tel : difficultés scolaires ou professionnelles, mise à l'écart.
- Il intériorise cette identité et se rapproche d'un groupe déviant qui lui offre reconnaissance et justification.
- *Exemple* : les fumeurs de marijuana étudiés par Becker, qui apprennent les techniques et les justifications au sein d'un groupe.

**Conclusion** : la déviance n'est donc pas seulement un acte individuel mais le résultat d'un processus social.` },
      ],
    },
    {
      id: "opinion-publique",
      titre: "Comment se forme et s'exprime l'opinion publique ?",
      theme: "Sociologie et science politique",
      cours: `
## Qu'est-ce que l'opinion publique ?
L'**opinion publique** désigne l'ensemble des jugements, attitudes et croyances partagés par une partie importante d'une population sur des questions d'intérêt général. Elle s'est affirmée au XVIIIe siècle avec l'essor de la presse, des salons et des cafés (Jürgen Habermas parle de « **sphère publique** »). Elle est aujourd'hui un acteur central des démocraties : les gouvernants cherchent à la connaître et à l'influencer.

Elle s'exprime par le **vote**, les **manifestations**, les **pétitions**, la **presse**, les **réseaux sociaux** et les **sondages**.

## Les sondages d'opinion
Un **sondage** est une enquête statistique réalisée auprès d'un **échantillon représentatif** de la population.
- **Méthode des quotas** (la plus utilisée en France) : l'échantillon reproduit la structure de la population selon quelques critères (sexe, âge, PCS, région, taille d'agglomération).
- **Méthode aléatoire** : les individus sont tirés au sort.
- Tout sondage comporte une **marge d'erreur** : pour un échantillon aléatoire de 1 000 personnes, environ ±3 points pour un résultat proche de 50 %. Pour la méthode des quotas, ce calcul n'est qu'une approximation.
- En France, la **Commission des sondages** contrôle les sondages électoraux, dont la **publication** et la diffusion sont interdites la veille et le jour du scrutin.

## Les sondages, outils de la démocratie
- Ils permettent de connaître l'avis des citoyens entre deux élections.
- Ils informent les gouvernants et les partis, éclairent les débats.

## Les critiques des sondages
**Pierre Bourdieu**, « *L'opinion publique n'existe pas* » (1973), formule trois critiques :
1. Tout le monde n'a pas une opinion sur tout : les **non-réponses** sont plus nombreuses chez les moins diplômés et sur les questions techniques. La compétence politique est inégalement répartie.
2. Toutes les opinions n'ont pas le même poids : on additionne des avis réfléchis et des réponses improvisées.
3. Le simple fait de poser la même question à tous suppose qu'il y a un **consensus** sur les questions qui méritent d'être posées : le sondage **impose une problématique**.

Pour Bourdieu, le sondage **construit** l'opinion publique qu'il prétend mesurer ; c'est un instrument d'action politique.

D'autres critiques :
- **formulation des questions** : un mot peut orienter les réponses ;
- **effets sur les électeurs** : effet *bandwagon* (rallier le favori) ou effet *underdog* (soutenir l'outsider) ; vote stratégique ;
- erreurs de prévision (difficulté à mesurer certains votes, abstention).

## La formation de l'opinion : le rôle des médias
- **Paul Lazarsfeld** (*The People's Choice*, 1944) : l'influence des médias est **limitée** et passe par des **leaders d'opinion** qui relaient et interprètent l'information (« **two-step flow of communication** »).
- Les médias exercent surtout une fonction d'**agenda** (*agenda-setting*, Maxwell McCombs et Donald Shaw, 1972) : ils ne disent pas quoi penser mais **à quoi penser**.
- Les réseaux sociaux numériques favorisent l'expression directe mais aussi la désinformation et les « bulles de filtre ».

> **À retenir** :
> - Sondage = échantillon représentatif (quotas) avec marge d'erreur.
> - Bourdieu : « L'opinion publique n'existe pas » (3 postulats contestés).
> - Lazarsfeld : influence limitée des médias, leaders d'opinion.
`,
      exercices: [
        { type: "qcm", question: "La méthode des quotas consiste à :", choix: ["interroger toute la population", "tirer au sort les personnes interrogées", "construire un échantillon qui reproduit la structure de la population selon certains critères", "interroger uniquement des volontaires sur internet"], reponse: 2,
          explication: "La méthode des **quotas** reproduit dans l'échantillon les proportions de la population (sexe, âge, PCS, région…)." },
        { type: "saisie", question: "Quel sociologue a écrit « L'opinion publique n'existe pas » (1973) ?", reponses: ["Bourdieu", "Pierre Bourdieu", "P. Bourdieu"],
          explication: "Pierre **Bourdieu**, qui critique les postulats implicites des sondages." },
        { type: "vf", question: "Selon Bourdieu, tout le monde a une opinion sur toutes les questions posées par les sondages.", reponse: false,
          explication: "C'est précisément le premier postulat que Bourdieu conteste : la compétence politique est inégale, les non-réponses varient selon le diplôme." },
        { type: "qcm", question: "Selon Lazarsfeld, l'influence des médias sur les électeurs :", choix: ["est directe et massive", "passe par des leaders d'opinion", "est nulle", "s'exerce uniquement par la télévision"], reponse: 1,
          explication: "C'est le modèle du **two-step flow** : l'information est relayée et interprétée par des **leaders d'opinion** de l'entourage." },
        { type: "qcm", question: "Un sondage donne 52 % à un candidat avec une marge d'erreur de ±3 points. On peut dire que :", choix: ["son score réel est probablement compris entre 49 % et 55 %", "le candidat obtiendra exactement 52 %", "il est sûr de gagner", "le sondage est faux"], reponse: 0,
          explication: "52 − 3 = 49 et 52 + 3 = 55 : le résultat réel se situe probablement dans **[49 % ; 55 %]**, donc la victoire n'est pas certaine." },
        { type: "vf", question: "L'effet « bandwagon » désigne le fait que certains électeurs se rallient au candidat donné favori par les sondages.", reponse: true,
          explication: "L'effet bandwagon (« prendre le train en marche ») ; l'effet inverse est l'effet underdog." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Présentez les limites des sondages d'opinion.", corrige: `**Définition** : un sondage interroge un échantillon représentatif pour connaître l'opinion d'une population.

**Limite 1 – Les limites techniques.**
- Marge d'erreur (environ ±3 points pour 1 000 personnes).
- **Formulation** des questions qui peut orienter les réponses ; ordre des questions.
- Échantillon parfois peu représentatif (refus de répondre, sondages en ligne).

**Limite 2 – Les critiques de Bourdieu (« L'opinion publique n'existe pas »).**
- Tout le monde n'a pas d'opinion : les non-réponses sont plus fréquentes chez les moins diplômés.
- Toutes les opinions ne se valent pas en intensité, mais sont additionnées.
- Le sondeur impose sa problématique : le sondage **construit** l'opinion qu'il prétend mesurer.

**Limite 3 – Les effets sur les comportements.**
- Effets bandwagon et underdog, vote stratégique : les sondages peuvent influencer le résultat d'une élection. C'est pourquoi leur publication et leur diffusion sont interdites la veille et le jour du scrutin.` },
      ],
    },
    {
      id: "vote",
      titre: "Voter : une affaire individuelle ou collective ?",
      theme: "Sociologie et science politique",
      cours: `
## Le vote, un droit et un geste individuel
Le vote est un acte **individuel** (vote secret, avec isoloir et enveloppe obligatoires depuis 1913) mais il est aussi **collectif** : il est le produit de **déterminants sociaux** et il est construit par des institutions, des partis, des campagnes.

## La participation électorale et l'abstention
- Le **taux de participation** = votants / inscrits × 100.
- Le **taux d'abstention** = abstentionnistes / inscrits × 100 = 100 − taux de participation.
- Ne pas confondre avec la **non-inscription** (environ 5 % à 10 % des personnes en âge de voter) et la **mal-inscription** (inscrit ailleurs que là où l'on vit).
- Les **votes blancs et nuls** sont comptés parmi les votants mais pas parmi les suffrages exprimés.

### Les facteurs de la participation
- **Intégration sociale** : l'âge (les jeunes et les plus âgés votent moins), le diplôme, l'emploi stable, la vie en couple, l'ancienneté de résidence augmentent la participation.
- **Intérêt pour la politique** et sentiment de **compétence politique**.
- **Enjeu perçu** de l'élection : la présidentielle mobilise plus que les européennes.

### Deux lectures de l'abstention (Jérôme Jaffré et Anne Muxel)
- Abstention « **hors du jeu** politique » : liée à une faible intégration sociale.
- Abstention « **dans le jeu** » : intermittente, stratégique ou protestataire, chez des électeurs informés et diplômés.
L'abstention progresse depuis les années 1980 et devient plus **intermittente** : on vote à certaines élections et pas à d'autres.

## Les déterminants du vote
### Le vote, une affaire collective
- **Paul Lazarsfeld** (*The People's Choice*, 1944) : « Une personne pense politiquement comme elle est socialement. » Les caractéristiques sociales (religion, milieu, lieu de résidence) prédisent largement le vote.
- **Variable lourde** en France : la **pratique religieuse** (les catholiques pratiquants votent davantage à droite).
- **Variables sociologiques** : la PCS, le patrimoine (plus on a de patrimoine, plus on vote à droite), le diplôme, l'âge, le sexe, le territoire.
- Le **vote de classe** (ouvriers à gauche) a reculé depuis les années 1980 : une partie des ouvriers vote pour l'extrême droite ou s'abstient.
- L'**identification partisane** et la **socialisation politique** familiale (environ deux tiers des jeunes se situent comme leurs parents sur l'axe gauche-droite).

### Le vote, une affaire individuelle
- Le modèle de l'**électeur rationnel** (ou stratège) : l'électeur compare les offres politiques et vote selon ses intérêts et les **enjeux** (chômage, sécurité, environnement).
- **Volatilité électorale** : changement de vote d'une élection à l'autre (entre partis, ou entre vote et abstention).
- Rôle de l'**offre politique** et de la conjoncture : personnalité des candidats, campagne, médias.
- **Vote stratégique** (« vote utile ») ou **vote sur enjeux**.

La volatilité ne signifie pas la disparition des déterminants sociaux : ils restent très structurants, mais l'électeur est moins fidèle.

> **À retenir** :
> - Taux d'abstention = abstentionnistes / inscrits.
> - Participation liée à l'intégration sociale et à l'intérêt politique.
> - Déterminants collectifs : religion, PCS, patrimoine, socialisation (Lazarsfeld).
> - Dimension individuelle : vote sur enjeux, volatilité, offre politique.
`,
      exercices: [
        { type: "saisie", question: "Il y a 40 millions d'inscrits et 26 millions de votants. Quel est le taux d'abstention (en %) ?", reponses: ["35", "35 %", "35%", "35 % d'abstention"],
          explication: "Abstentionnistes = 40 − 26 = 14 millions. Taux d'abstention = 14 / 40 × 100 = **35 %**." },
        { type: "qcm", question: "« Une personne pense politiquement comme elle est socialement » est une formule de :", choix: ["Bourdieu", "Durkheim", "Lazarsfeld", "Becker"], reponse: 2,
          explication: "Paul **Lazarsfeld** (*The People's Choice*, 1944), qui met en avant les déterminants sociaux du vote." },
        { type: "vf", question: "Les votes blancs et nuls sont comptés dans les suffrages exprimés.", reponse: false,
          explication: "Ils sont comptés parmi les **votants**, mais pas parmi les suffrages exprimés (même si le vote blanc est décompté à part depuis 2014)." },
        { type: "qcm", question: "Quel facteur tend à AUGMENTER la participation électorale ?", choix: ["Être jeune et au chômage", "Avoir déménagé récemment", "Être diplômé et bien intégré socialement", "Ne pas être inscrit sur les listes"], reponse: 2,
          explication: "La participation est liée à l'**intégration sociale** : diplôme, emploi stable, ancienneté de résidence." },
        { type: "qcm", question: "La volatilité électorale désigne :", choix: ["la fidélité à un parti", "le vote obligatoire", "la non-inscription", "le fait de changer de vote (ou de passer du vote à l'abstention) d'une élection à l'autre"], reponse: 3,
          explication: "La **volatilité** traduit une moindre fidélité partisane et un vote plus individualisé." },
        { type: "vf", question: "En France, la pratique religieuse catholique reste une variable lourde du vote.", reponse: true,
          explication: "Les catholiques pratiquants votent nettement plus à droite que les sans-religion : c'est l'une des variables les plus prédictives." },
        { type: "qcm", question: "Un électeur qui vote pour un candidat qui n'est pas son préféré afin d'éviter l'élimination d'un candidat proche réalise :", choix: ["un vote de classe", "un vote utile (stratégique)", "un vote blanc", "une abstention dans le jeu"], reponse: 1,
          explication: "C'est un **vote stratégique** ou « vote utile » : il illustre la dimension individuelle et rationnelle du vote." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que le vote est en partie déterminé par des variables sociales.", corrige: `**Introduction** : bien que le vote soit un acte individuel et secret, il obéit à des régularités sociales (Lazarsfeld : « une personne pense politiquement comme elle est socialement »).

**Idée 1 – La religion, variable lourde.**
- Plus la pratique catholique est intense, plus le vote à droite est fréquent ; les sans-religion votent davantage à gauche.

**Idée 2 – La position sociale.**
- Le **patrimoine** : plus on en possède, plus on vote à droite.
- La **PCS** : le vote de classe (ouvriers à gauche) a reculé mais les cadres du public, les enseignants votent davantage à gauche, les indépendants à droite.
- Le **diplôme** et l'**âge** structurent aussi les choix (et la participation).

**Idée 3 – La socialisation politique.**
- Les préférences se transmettent en partie dans la famille : une majorité de jeunes se situent comme leurs parents sur l'axe gauche-droite.

**Nuance** : la volatilité électorale et le vote sur enjeux montrent que ces déterminants n'expliquent pas tout.` },
        { type: "saisie", question: "50 millions d'inscrits, 37,5 millions de votants dont 1,5 million de votes blancs et nuls. Quel est le taux de participation (en %) ?", reponses: ["75", "75 %", "75%"],
          explication: "Taux de participation = votants / inscrits × 100 = 37,5 / 50 × 100 = **75 %** (abstention : 25 %). Les blancs et nuls font partie des votants ; les suffrages exprimés sont 37,5 − 1,5 = 36 millions." },
      ],
    },
    {
      id: "risques-protection-sociale",
      titre: "Comment l'assurance et la protection sociale contribuent-elles à la gestion des risques ?",
      theme: "Regards croisés",
      cours: `
## Les risques dans les sociétés développées
Un **risque** est un événement **probable** (dont on peut estimer la probabilité) mais **incertain** (on ne sait pas qui sera touché ni quand) et qui entraîne un **dommage**. Ulrich Beck parle de « **société du risque** ».
- Risques **individuels** (maladie, accident, perte d'emploi) et **collectifs** (catastrophe naturelle, pandémie, crise financière).
- **Risques sociaux** : vieillesse, maladie, chômage, famille, accidents du travail, logement, pauvreté.

Face au risque, les agents ont des **comportements différents** : certains sont **averses au risque** (ils préfèrent payer une prime pour s'en protéger), d'autres l'acceptent ou le recherchent.

## Les moyens de se protéger
- **Prévention** : réduire la probabilité ou la gravité du risque (vaccination, ceinture de sécurité, normes).
- **Épargne de précaution** : mettre de l'argent de côté.
- **Solidarité familiale** ou de proximité.
- **Assurance** (privée) et **protection sociale** (publique).

## Le principe de l'assurance : la mutualisation
L'**assurance** repose sur la **mutualisation des risques** : de nombreux assurés versent une **prime** (cotisation) qui alimente un fonds servant à indemniser ceux qui subissent un sinistre. Grâce à la **loi des grands nombres**, l'assureur peut prévoir le coût total des sinistres même s'il ne sait pas qui sera touché.

>! **Exemple** : 1 000 automobilistes, chacun ayant 1 % de risque d'un sinistre coûtant 20 000 €. On attend 1 000 × 0,01 = 10 sinistres, soit 10 × 20 000 = 200 000 €. La prime « pure » par assuré est 200 000 / 1 000 = 200 € (avant frais et marge de l'assureur).

L'assurance privée tarifie selon le **niveau de risque** de chacun (jeune conducteur, fumeur).

### Les problèmes d'information
- **Sélection adverse** : les personnes les plus risquées sont les plus enclines à s'assurer ; si la prime est la même pour tous, les « bons risques » partent. Réponses : questionnaires, tarification différenciée, assurance obligatoire.
- **Aléa moral** : l'assuré, protégé, devient moins prudent. Réponses : **franchise**, **bonus-malus**.

## La protection sociale
La **protection sociale** est l'ensemble des mécanismes de **prévoyance collective** qui protègent les individus face aux risques sociaux. Elle repose sur deux logiques :
- **Logique d'assurance** (modèle **bismarckien**, Allemagne, lois des années 1880) : prestations financées par des **cotisations sociales** sur les salaires, réservées à ceux qui ont cotisé, proportionnelles aux revenus (retraites, allocations chômage).
- **Logique d'assistance** et de **solidarité** (modèle **beveridgien**, Royaume-Uni 1942) : prestations financées par l'**impôt**, versées sous **condition de ressources** ou à tous (universalité) (RSA, allocations familiales – versées à toutes les familles d'au moins deux enfants, mais modulées selon le revenu depuis 2015 –, CMU devenue protection universelle maladie en 2016).

Le système français, créé en 1945, est **mixte** : d'origine bismarckienne, il s'est rapproché de la logique beveridgienne (CSG créée en 1991, universalisation).

## La protection sociale, un outil de solidarité
- **Solidarité** entre bien-portants et malades, actifs et retraités (retraites par **répartition** : les cotisations des actifs financent les pensions des retraités), personnes avec et sans enfants.
- Elle **réduit les inégalités** (redistribution) et **soutient la demande** (rôle de stabilisateur en période de crise).
- Elle pose des questions de **financement** (vieillissement, déficits) et de possible désincitation.

> **À retenir** :
> - Risque = événement probable mais incertain.
> - Assurance = mutualisation des risques grâce à la loi des grands nombres.
> - Sélection adverse et aléa moral perturbent l'assurance (franchise, bonus-malus).
> - Protection sociale : logique d'assurance (Bismarck, cotisations) et d'assistance (Beveridge, impôt).
`,
      exercices: [
        { type: "qcm", question: "Le principe selon lequel les primes de tous les assurés servent à indemniser ceux qui subissent un sinistre s'appelle :", choix: ["la mutualisation", "la capitalisation", "la prévention", "l'assistance"], reponse: 0,
          explication: "C'est la **mutualisation des risques**, fondement de l'assurance." },
        { type: "saisie", question: "2 000 assurés ont chacun 2 % de risque de subir un dégât des eaux coûtant 5 000 €. Quel est le coût total attendu des sinistres (en euros) ?", reponses: ["200000", "200 000", "200 000 €", "200000 €"],
          explication: "Nombre de sinistres attendus : 2 000 × 0,02 = 40. Coût total : 40 × 5 000 = **200 000 €** (soit une prime pure de 100 € par assuré)." },
        { type: "qcm", question: "La franchise en assurance (part du dommage restant à la charge de l'assuré) vise surtout à limiter :", choix: ["la sélection adverse", "la mutualisation", "l'aléa moral", "la loi des grands nombres"], reponse: 2,
          explication: "En laissant une partie du coût à l'assuré, la franchise l'incite à rester prudent : elle limite l'**aléa moral**." },
        { type: "vf", question: "Dans la logique bismarckienne, les prestations sont financées par l'impôt et versées à tous sans condition.", reponse: false,
          explication: "C'est la logique **beveridgienne**. La logique bismarckienne repose sur des **cotisations sociales** liées au travail et réserve les droits aux cotisants." },
        { type: "qcm", question: "Le RSA (revenu de solidarité active) relève de :", choix: ["la logique d'assurance", "l'assurance privée", "l'épargne de précaution", "la logique d'assistance"], reponse: 3,
          explication: "Le RSA est financé par l'impôt et versé sous **condition de ressources**, sans cotisation préalable : logique d'**assistance**." },
        { type: "vf", question: "Dans un système de retraite par répartition, les cotisations des actifs d'aujourd'hui financent les pensions des retraités d'aujourd'hui.", reponse: true,
          explication: "C'est la définition de la **répartition**, fondée sur une solidarité entre générations (à la différence de la capitalisation)." },
        { type: "qcm", question: "Mettre une ceinture de sécurité relève de :", choix: ["la mutualisation", "la prévention", "l'assistance", "l'aléa moral"], reponse: 1,
          explication: "La **prévention** réduit la probabilité ou la gravité du dommage." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que la protection sociale repose sur différentes logiques.", corrige: `**Définition** : la protection sociale est l'ensemble des mécanismes de prévoyance collective qui protègent les individus face aux risques sociaux (maladie, vieillesse, chômage, famille).

**Logique 1 – L'assurance (modèle bismarckien).**
- Financement par des **cotisations sociales** assises sur les salaires.
- Prestations réservées aux cotisants et souvent proportionnelles aux revenus antérieurs.
- *Exemples* : pensions de retraite, allocations chômage.

**Logique 2 – L'assistance / la solidarité (modèle beveridgien).**
- Financement par l'**impôt** (en France, la CSG).
- Prestations versées sous **condition de ressources** (RSA, minimum vieillesse) ou de façon **universelle** (allocations familiales, protection universelle maladie).

**Conclusion** : le système français est **mixte** ; d'origine bismarckienne (1945), il a intégré des éléments beveridgiens pour couvrir l'ensemble de la population.` },
      ],
    },
    {
      id: "entreprises",
      titre: "Comment les entreprises sont-elles organisées et gouvernées ?",
      theme: "Regards croisés",
      cours: `
## La diversité des entreprises
Une **entreprise** est une organisation qui **produit des biens ou des services marchands** en combinant des facteurs de production (travail, capital), en vue de les vendre, généralement pour réaliser un **profit**.

On les classe selon :
- la **taille** : micro-entreprises (moins de 10 salariés), PME (moins de 250), ETI (250 à 4 999), grandes entreprises (5 000 et plus) ;
- le **secteur d'activité** (primaire, secondaire, tertiaire) ;
- le **statut juridique** : entreprise individuelle, sociétés (SARL, SA, SAS), entreprises publiques, entreprises de l'**économie sociale et solidaire** (coopératives, mutuelles, associations) qui suivent le principe « une personne, une voix ».

## L'entreprise, une organisation productive
- La **valeur ajoutée** = chiffre d'affaires − consommations intermédiaires. Elle mesure la richesse créée par l'entreprise.
- Elle est **répartie** entre salaires, impôts, intérêts, dividendes et autofinancement.

>! **Exemple** : une entreprise réalise un chiffre d'affaires de 500 000 € et achète pour 300 000 € de matières et services. Sa valeur ajoutée est 500 000 − 300 000 = 200 000 €.

## Les acteurs de l'entreprise
- L'**entrepreneur** : celui qui crée l'entreprise et prend des risques ; pour Joseph **Schumpeter**, c'est l'**innovateur** qui introduit de nouveaux produits ou procédés.
- Le **manager** (dirigeant salarié) : il dirige l'entreprise et prend les décisions stratégiques sans en être forcément propriétaire.
- Les **actionnaires** (apporteurs de capitaux) : propriétaires dans une société, ils élisent le conseil d'administration en assemblée générale.
- Les **salariés** : liés par un **contrat de travail**, en situation de **subordination**.
- Les **parties prenantes** (*stakeholders*) : fournisseurs, clients, banques, pouvoirs publics, riverains.

## La gouvernance d'entreprise
La **gouvernance** désigne l'ensemble des règles et mécanismes qui organisent le **pouvoir** de décision et le **contrôle** des dirigeants.
- Dans les grandes sociétés, **séparation entre propriété et contrôle** (Berle et Means, 1932) : les actionnaires possèdent, les **managers** dirigent.
- Relation **mandant-mandataire** (relation d'agence) : les dirigeants peuvent poursuivre leurs propres intérêts. Pour aligner leurs intérêts sur ceux des actionnaires : rémunérations indexées sur la valeur boursière (stock-options), contrôle par le conseil d'administration.
- Débat : gouvernance **actionnariale** (création de valeur pour les actionnaires) ou **partenariale** (prise en compte de toutes les parties prenantes). La **loi PACTE (2019)** permet aux entreprises de se doter d'une **raison d'être** et du statut d'**entreprise à mission** ; la responsabilité sociale des entreprises (**RSE**) va dans ce sens.

## Les relations sociales dans l'entreprise
- L'entreprise est un lieu de **coopération** (production commune) mais aussi de **conflits** (salaires, conditions de travail, emploi).
- Le **pouvoir** dans l'entreprise : hiérarchie, mais aussi zones d'autonomie.
- Les salariés sont représentés par les **syndicats** et le **comité social et économique (CSE)**. La **négociation collective** aboutit à des accords collectifs.
- Le **dialogue social** et les conflits (grève) font évoluer les règles.

> **À retenir** :
> - Valeur ajoutée = chiffre d'affaires − consommations intermédiaires.
> - Acteurs : dirigeants, actionnaires, salariés, parties prenantes.
> - Gouvernance : séparation propriété/contrôle, conflits d'intérêts actionnaires/managers.
> - Gouvernance actionnariale vs partenariale ; coopération et conflits.
`,
      exercices: [
        { type: "saisie", question: "Une boulangerie a un chiffre d'affaires de 180 000 € et des consommations intermédiaires de 70 000 €. Quelle est sa valeur ajoutée (en euros) ?", reponses: ["110000", "110 000", "110 000 €", "110000 €"],
          explication: "VA = CA − CI = 180 000 − 70 000 = **110 000 €**." },
        { type: "qcm", question: "Une entreprise de 120 salariés est :", choix: ["une PME", "une micro-entreprise", "une ETI", "une grande entreprise"], reponse: 0,
          explication: "Une **PME** emploie moins de 250 personnes (et au moins 10 pour ne pas être une micro-entreprise)." },
        { type: "vf", question: "Dans une société anonyme, les actionnaires sont les propriétaires de l'entreprise.", reponse: true,
          explication: "Les actionnaires détiennent le capital ; ils élisent le conseil d'administration lors de l'assemblée générale." },
        { type: "qcm", question: "La gouvernance partenariale consiste à :", choix: ["ne tenir compte que des intérêts des actionnaires", "nationaliser l'entreprise", "prendre en compte les intérêts de toutes les parties prenantes", "supprimer le conseil d'administration"], reponse: 2,
          explication: "La gouvernance **partenariale** intègre salariés, clients, fournisseurs, environnement… à la différence de la gouvernance actionnariale." },
        { type: "qcm", question: "Quel principe caractérise les coopératives de l'économie sociale et solidaire ?", choix: ["Une action, une voix", "Le dirigeant décide seul", "Le profit maximal", "Une personne, une voix"], reponse: 3,
          explication: "Dans l'ESS, le pouvoir n'est pas proportionnel au capital : « **une personne, une voix** »." },
        { type: "vf", question: "La séparation entre propriété et contrôle signifie que les actionnaires dirigent eux-mêmes l'entreprise au quotidien.", reponse: false,
          explication: "C'est l'inverse : les actionnaires possèdent, mais ce sont des **managers** salariés qui dirigent, d'où des risques de divergences d'intérêts." },
        { type: "qcm", question: "Les stock-options accordées aux dirigeants visent à :", choix: ["augmenter les salaires des ouvriers", "aligner les intérêts des dirigeants sur ceux des actionnaires", "réduire la valeur boursière", "remplacer le CSE"], reponse: 1,
          explication: "En liant la rémunération des dirigeants au cours de l'action, on les incite à agir dans l'intérêt des actionnaires (résolution de la relation d'agence)." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que l'entreprise est à la fois un lieu de coopération et de conflits.", corrige: `**Idée 1 – Un lieu de coopération.**
- L'entreprise réunit des acteurs (dirigeants, salariés, actionnaires) qui ont un intérêt commun : produire et créer de la **valeur ajoutée**.
- La division du travail et l'organisation (hiérarchie, travail en équipe) supposent la coopération.
- Le **dialogue social** (négociations, accords collectifs avec les syndicats, CSE) permet de construire des règles communes.

**Idée 2 – Un lieu de conflits.**
- La répartition de la valeur ajoutée oppose salaires et profits (dividendes).
- Conflits sur les conditions de travail, l'emploi, les restructurations ; ils peuvent prendre la forme de grèves.
- Conflits d'intérêts entre actionnaires et dirigeants (relation d'agence) dans les grandes sociétés.

**Conclusion** : coopération et conflits coexistent ; le conflit peut aboutir à de nouvelles règles et donc à une forme de coopération renouvelée.` },
      ],
    },
    {
      id: "savoir-faire-quantitatifs",
      titre: "Savoir-faire quantitatifs",
      theme: "Outils et méthodes",
      cours: `
## Proportion et pourcentage de répartition
Une **proportion** (part) = partie / ensemble × 100. On dit : « X % de l'ensemble est… ».

>! Sur 48 élèves, 12 choisissent SES : 12 / 48 × 100 = **25 %** des élèves.

Dans un tableau de répartition, la somme des parts fait **100 %**.

## Taux de variation
Le **taux de variation** mesure l'évolution relative d'une grandeur entre une date de départ (valeur de départ VD) et une date d'arrivée (VA) :
> Taux de variation = (VA − VD) / VD × 100

>! Un salaire passe de 1 250 € à 1 500 € : (1 500 − 1 250) / 1 250 × 100 = **+20 %**. Lecture : « Entre ces deux dates, le salaire a augmenté de 20 % ».

## Coefficient multiplicateur
Le **coefficient multiplicateur** CM = VA / VD.
- CM = 1 + taux / 100 ; taux = (CM − 1) × 100.
- Une hausse de 20 % ↔ CM = 1,2 ; une baisse de 15 % ↔ CM = 0,85.
- Un CM de 3 signifie que la grandeur a été **multipliée par 3** (soit +200 %).
- **Variations successives** : on **multiplie** les CM (on n'additionne pas les taux).

>! +20 % puis −20 % : 1,2 × 0,8 = 0,96 → baisse de **4 %** (et non 0 %).
>! +10 % deux années de suite : 1,1 × 1,1 = 1,21 → hausse de **21 %**.

## Indice simple
Un **indice** compare une valeur à une valeur de référence (année de base) fixée à **100** :
> Indice = valeur de l'année / valeur de l'année de base × 100

>! Prix en 2015 (base) : 80 € ; en 2024 : 92 €. Indice 2024 = 92 / 80 × 100 = **115**. Lecture : « Entre 2015 et 2024, le prix a augmenté de 15 % ».

Attention : la différence entre deux indices n'est un pourcentage que si l'on part de l'année de base. Entre un indice 120 et un indice 150 : (150 − 120) / 120 × 100 = **+25 %** (et non 30 %).

## Moyenne arithmétique et moyenne pondérée
- **Moyenne simple** : somme des valeurs / nombre de valeurs.
- **Moyenne pondérée** : chaque valeur est multipliée par son poids (coefficient ou effectif), puis on divise par la somme des poids.

>! Notes : 14 (coef. 4), 10 (coef. 2), 12 (coef. 2). Moyenne = (14 × 4 + 10 × 2 + 12 × 2) / 8 = 100 / 8 = **12,5**.

## Médiane
La **médiane** partage une population ordonnée en **deux moitiés** : 50 % ont une valeur inférieure, 50 % une valeur supérieure. Elle est moins sensible aux valeurs extrêmes que la moyenne.

>! Salaires : 1 500 ; 1 700 ; 1 800 ; 2 100 ; 4 000. Médiane = **1 800** €, moyenne = 11 100 / 5 = **2 220** €. La moyenne est tirée vers le haut par le salaire de 4 000 €.

## Tableau à double entrée
Il croise deux variables. Il faut repérer **ce qui fait 100 %** (le total en ligne ou en colonne) pour bien lire.
- Si les lignes font 100 % : « Parmi les ouvriers, X % … ».
- Si les colonnes font 100 % : « Parmi les votants de tel parti, X % sont ouvriers ».

## Point de pourcentage
Quand on compare deux **pourcentages**, l'écart absolu s'exprime en **points de pourcentage**.

>! Le taux de chômage passe de 8 % à 10 % : il augmente de **2 points** de pourcentage, ce qui représente une hausse de (10 − 8) / 8 × 100 = **25 %**.

## Corrélation et causalité
- Une **corrélation** est une relation statistique entre deux variables qui évoluent ensemble.
- Une **causalité** signifie que l'une **provoque** l'autre.
- Une corrélation n'implique pas une causalité : il peut exister un **troisième facteur** (variable cachée), une **causalité inverse** ou une simple coïncidence.

>! Les ventes de glaces et les noyades augmentent ensemble : ce n'est pas la glace qui cause les noyades, c'est la **chaleur** (troisième facteur).

> **À retenir** :
> - Taux de variation = (VA − VD) / VD × 100 ; CM = VA / VD.
> - Variations successives : on multiplie les CM.
> - Indice = valeur / valeur de base × 100.
> - Écart entre deux pourcentages = points de pourcentage.
> - Médiane ≠ moyenne ; corrélation ≠ causalité.
`,
      exercices: [
        { type: "saisie", question: "Le PIB d'un pays passe de 2 000 à 2 100 milliards d'euros. Quel est le taux de variation (en %) ?", reponses: ["5", "+5", "5 %", "+5 %", "5%"],
          explication: "(2 100 − 2 000) / 2 000 × 100 = **+5 %**." },
        { type: "qcm", question: "Un prix augmente de 20 % puis baisse de 20 %. Au total, il :", choix: ["a baissé de 4 %", "n'a pas varié", "a augmenté de 4 %", "a baissé de 40 %"], reponse: 0,
          explication: "1,2 × 0,8 = 0,96, donc une **baisse de 4 %**. On multiplie les coefficients multiplicateurs." },
        { type: "saisie", question: "Le prix d'un bien vaut 80 € en 2015 (base 100) et 92 € en 2024. Quel est l'indice en 2024 ?", reponses: ["115"],
          explication: "92 / 80 × 100 = **115** : le prix a augmenté de 15 % entre 2015 et 2024." },
        { type: "qcm", question: "Un indice passe de 120 à 150. La hausse est de :", choix: ["30 %", "20 %", "25 %", "150 %"], reponse: 2,
          explication: "(150 − 120) / 120 × 100 = **25 %**. On ne soustrait directement les indices que lorsque l'on part de l'année de base (indice 100)." },
        { type: "saisie", question: "Le taux de chômage passe de 8 % à 10 %. De combien de points de pourcentage a-t-il augmenté ?", reponses: ["2", "2 points", "+2", "2 points de pourcentage"],
          explication: "10 − 8 = **2 points** de pourcentage (ce qui correspond à une hausse de 25 % du taux)." },
        { type: "saisie", question: "Calcule la moyenne pondérée : 14 (coef. 4), 10 (coef. 2), 12 (coef. 2).", reponses: ["12,5", "12.5"],
          explication: "(56 + 20 + 24) / (4 + 2 + 2) = 100 / 8 = **12,5**." },
        { type: "qcm", question: "Salaires de 5 salariés : 1 500, 1 700, 1 800, 2 100, 4 000 €. Quelle affirmation est juste ?", choix: ["Médiane 1 800 € et moyenne 2 220 €", "Médiane 2 220 € et moyenne 1 800 €", "Médiane et moyenne valent 1 800 €", "Médiane 2 100 € et moyenne 2 220 €"], reponse: 0,
          explication: "La valeur centrale est **1 800 €** ; la moyenne vaut 11 100 / 5 = **2 220 €**, tirée vers le haut par le haut salaire." },
        { type: "vf", question: "Si deux variables sont corrélées, alors l'une est nécessairement la cause de l'autre.", reponse: false,
          explication: "Corrélation ≠ causalité : un troisième facteur peut expliquer les deux, ou la relation peut être fortuite, ou la causalité inverse." },
        { type: "saisie", question: "Un coefficient multiplicateur vaut 0,85. Quel est le taux de variation correspondant (en %) ?", reponses: ["-15", "−15", "-15 %", "−15 %", "baisse de 15 %"],
          explication: "(0,85 − 1) × 100 = **−15 %**." },
        { type: "redaction", question: "**Étude de document (EC2)** : Le prix d'un panier de biens vaut 200 € en 2015, 210 € en 2020 et 240 € en 2024. 1) Calcule les indices base 100 en 2015. 2) Calcule le taux de variation entre 2020 et 2024, et rédige une phrase de lecture. 3) Calcule le coefficient multiplicateur entre 2015 et 2024.", corrige: `**1) Indices base 100 en 2015**
- 2015 : 100.
- 2020 : 210 / 200 × 100 = **105**.
- 2024 : 240 / 200 × 100 = **120**.

**2) Taux de variation 2020-2024**
- (240 − 210) / 210 × 100 ≈ **+14,3 %**.
- On retrouve le même résultat avec les indices : (120 − 105) / 105 × 100 ≈ 14,3 %.
- *Phrase* : « Entre 2020 et 2024, le prix de ce panier a augmenté d'environ 14,3 %. »

**3) Coefficient multiplicateur 2015-2024**
- CM = 240 / 200 = **1,2** : le prix a été multiplié par 1,2, soit une hausse de 20 % (cohérent avec l'indice 120).

>! **Piège** : ne pas écrire que le prix a augmenté de 15 % entre 2020 et 2024 en soustrayant les indices (120 − 105) : ce serait 15 points d'indice, pas 15 %.` },
        { type: "saisie", question: "Sur 200 cadres, 150 ont un enfant bachelier ; sur 300 ouvriers, 60. Quelle est la part (en %) des ouvriers ayant un enfant bachelier ? (tableau de profils en ligne)", reponses: ["20", "20 %", "20%"],
          explication: "Profil en ligne : on rapporte à l'effectif de la ligne. 60 / 300 × 100 = **20 %** (contre 150 / 200 = 75 % chez les cadres). Attention : « parmi les ouvriers, 20 %… » est différent de « parmi les bacheliers, X % sont enfants d'ouvriers » (60 / 210 ≈ 28,6 %)." },
        { type: "saisie", question: "Ton salaire augmente de 3 % pendant que les prix augmentent de 5 %. De combien (en %, arrondi au dixième) varie ton pouvoir d'achat ?", reponses: ["-1,9", "−1,9", "-1,9 %", "−1,9 %", "baisse de 1,9 %"],
          explication: "Pouvoir d'achat (valeur réelle) : CM = 1,03 / 1,05 ≈ 0,981, soit **−1,9 %**. L'approximation « 3 − 5 = −2 % » donne un ordre de grandeur, mais le calcul exact passe par le rapport des coefficients multiplicateurs." },
      ],
    },
    {
      id: "methodes",
      titre: "Méthodes : épreuve composée et dissertation",
      theme: "Outils et méthodes",
      cours: `
## Comment la SES est-elle évaluée ?
- **Si tu abandonnes la SES à la fin de la 1re** : il n'y a **pas d'épreuve finale**. La note retenue au bac est la **moyenne annuelle de tes bulletins de 1re** (contrôle continu), avec un **coefficient 8**. Chaque devoir sur table compte donc ! Tes professeurs te donnent des sujets du même type que ceux du bac (questions de cours, étude de document, raisonnement sur dossier, parfois une dissertation), souvent sur une durée plus courte.
- **Si tu gardes la SES en terminale** : épreuve écrite de **4 heures** en fin de terminale (coefficient 16), sur le programme de terminale. Tu choisis entre une **dissertation** et une **épreuve composée**. Le grand oral peut aussi porter sur la SES.

Dans les deux cas, les méthodes ci-dessous s'apprennent dès la 1re. Le barème indiqué est celui de l'épreuve de terminale à partir de la session 2027 (note de service du 11 septembre 2026), qui réserve **2 points sur 20 à la maîtrise de la langue** (orthographe, syntaxe).

## L'épreuve composée
Elle comporte **trois parties** indépendantes.

### Partie 1 – Mobilisation des connaissances (EC1, 3,5 points)
Une question de cours (« Montrez que… », « Distinguez… », « Présentez… »).
- Réponds de façon **structurée** : 2 ou 3 idées, chacune avec un **mécanisme** expliqué et un **exemple**.
- Définis les notions clés de la question.
- Pas d'introduction ni de conclusion longues ; environ 15 à 20 lignes.

### Partie 2 – Étude d'un document (EC2, 5,5 points)
Un document statistique (tableau, graphique) et en général deux questions :
- une question de **lecture / calcul** : présente les données avec une phrase complète et rigoureuse (source, date, unité, lieu) ;
- une question d'**analyse** reliant le document à tes connaissances.

>! **Méthode de lecture** : « Selon l'Insee, en 2023 en France, 7,3 % des actifs étaient au chômage. » Toujours la source, la date, le lieu et l'unité.

### Partie 3 – Raisonnement s'appuyant sur un dossier documentaire (EC3, 9 points)
Un sujet et 2 ou 3 documents de natures différentes (texte, tableau, graphique). Tu construis une **argumentation** :
- une **courte introduction** (définitions, reformulation du sujet, annonce du plan) ;
- un développement en **parties** ou **paragraphes argumentés** (AEI : **A**ffirmer une idée, l'**E**xpliquer par un mécanisme, l'**I**llustrer par un exemple ou une donnée du dossier) ;
- une **courte conclusion**.
Tu dois **utiliser les documents** (citer des données précises) **et** tes **connaissances personnelles**.

## La dissertation
Un sujet sous forme de question et un dossier de **3 ou 4 documents** factuels (surtout statistiques). Elle se note sur 20 (dont 2 points de maîtrise de la langue). Tu dois mobiliser les documents **et** tes connaissances ; elle demande une vraie problématique et un plan en parties.

### Analyser le sujet
- Définis chaque terme, repère les **mots de liaison** et le **type de sujet** (« Dans quelle mesure… » appelle une discussion ; « Montrez que… » une démonstration ; « Quels sont… » une explication).
- Délimite le sujet dans le temps et l'espace.
- Formule une **problématique**.

### Construire le plan
- Deux ou trois parties, chacune en deux ou trois sous-parties.
- Pour un sujet « Dans quelle mesure… » : I. Oui… / II. Mais…

### Rédiger
- **Introduction** : accroche, définitions, problématique, annonce du plan.
- **Développement** : paragraphes AEI, **transitions** entre parties.
- **Conclusion** : réponse à la problématique, ouverture.

## Les erreurs à éviter
- Paraphraser les documents sans les interpréter.
- Réciter le cours sans lien avec la question.
- Oublier les unités, les dates ou confondre % et points.
- Ne pas définir les notions.

> **À retenir** :
> - SES abandonnée en fin de 1re : contrôle continu (moyenne annuelle de 1re, coefficient 8).
> - EC1 : connaissances structurées (3,5 pts) ; EC2 : document (5,5 pts) ; EC3 : raisonnement sur dossier (9 pts) ; + 2 pts de maîtrise de la langue (barème à partir de 2027).
> - Dissertation : dossier de 3 ou 4 documents.
> - Paragraphe AEI : affirmer, expliquer, illustrer.
> - Dissertation : introduction (problématique, plan), 2 ou 3 parties, conclusion.
`,
      exercices: [
        { type: "qcm", question: "Dans l'épreuve composée, la partie 3 (raisonnement s'appuyant sur un dossier documentaire) est notée sur :", choix: ["3,5 points", "5,5 points", "9 points", "20 points"], reponse: 2,
          explication: "Barème à partir de la session 2027 : EC1 : 3,5 points ; EC2 : 5,5 points ; **EC3 : 9 points** ; les 2 points restants récompensent la maîtrise de la langue. (Avant 2027 : 4, 6 et 10 points.)" },
        { type: "vf", question: "Dans la partie 1 (mobilisation des connaissances), il est indispensable d'utiliser des documents.", reponse: false,
          explication: "La partie 1 ne comporte **aucun document** : elle mobilise uniquement tes connaissances." },
        { type: "qcm", question: "Que signifie le sigle AEI dans la construction d'un paragraphe ?", choix: ["Analyser, Évaluer, Interroger", "Annoncer, Énumérer, Interpréter", "Argumenter, Exemplifier, Insister", "Affirmer, Expliquer, Illustrer"], reponse: 3,
          explication: "**A**ffirmer l'idée, l'**E**xpliquer (mécanisme), l'**I**llustrer (exemple, donnée)." },
        { type: "qcm", question: "Quelle phrase de lecture d'une donnée est la plus rigoureuse ?", choix: ["Le chômage est de 7,3.", "Il y a beaucoup de chômage en France.", "Selon l'Insee, en 2023 en France, 7,3 % des actifs étaient au chômage.", "Le chômage a augmenté de 7,3 %."], reponse: 2,
          explication: "Une bonne lecture précise **source, date, lieu, unité** et ce que représente la donnée." },
        { type: "vf", question: "Un sujet commençant par « Dans quelle mesure… » appelle une réponse nuancée.", reponse: true,
          explication: "« Dans quelle mesure » invite à évaluer l'**ampleur** et les **limites** : un plan du type « oui… mais… »." },
        { type: "qcm", question: "Dans une introduction de dissertation, on trouve :", choix: ["uniquement la réponse finale", "accroche, définitions, problématique et annonce du plan", "les exemples détaillés de chaque partie", "une liste des documents"], reponse: 1,
          explication: "L'introduction comporte **accroche**, **définition** des termes, **problématique** et **annonce du plan**." },
        { type: "redaction", question: "**Raisonnement s'appuyant sur un dossier (EC3)** : À l'aide de tes connaissances, montre que les défaillances du marché justifient l'intervention des pouvoirs publics. Rédige une introduction et le plan détaillé de ton raisonnement.", corrige: `**Introduction**
- *Accroche* : chaque année, la pollution de l'air coûte des dizaines de milliers de vies en France sans que les pollueurs en paient le coût.
- *Définitions* : une **défaillance du marché** est une situation où le marché ne conduit pas à une allocation efficace des ressources ; l'**intervention publique** regroupe les actions de l'État (réglementation, taxes, subventions, production).
- *Annonce* : nous verrons que les externalités (I), les biens collectifs et communs (II) et les asymétries d'information (III) justifient une intervention publique.

**I. Les externalités**
- A : le marché ne tient pas compte du coût social de la pollution → surproduction. *Réponse* : taxe pigouvienne (taxe carbone), normes, marché de quotas d'émission.
- B : externalités positives (recherche, éducation, vaccination) → sous-production. *Réponse* : subventions, crédit d'impôt recherche.

**II. Les biens collectifs et les biens communs**
- A : bien collectif non rival et non excluable → passager clandestin, le marché ne le produit pas. *Réponse* : production publique financée par l'impôt (éclairage public, défense).
- B : bien commun → surexploitation (tragédie des communs). *Réponse* : quotas de pêche, réglementation (on peut citer aussi la gestion collective étudiée par Ostrom).

**III. Les asymétries d'information**
- A : sélection adverse (Akerlof, marché des voitures d'occasion) → risque de disparition du marché. *Réponse* : obligation d'information, contrôle technique, garanties légales.
- B : aléa moral → *Réponse* : réglementation des assurances, assurance obligatoire.

**Conclusion** : les défaillances du marché légitiment l'intervention publique ; celle-ci doit cependant être bien conçue, car l'État peut lui aussi commettre des erreurs.` },
        { type: "vf", question: "Si tu abandonnes la SES à la fin de la 1re, tu passes quand même une épreuve écrite de 4 heures de SES au bac.", reponse: false,
          explication: "La spécialité abandonnée en fin de 1re est évaluée en **contrôle continu** : la note retenue est la moyenne annuelle de tes bulletins de 1re (coefficient 8). Tous tes devoirs comptent donc." },
        { type: "qcm", question: "À partir de la session 2027, combien de points sur 20 l'épreuve écrite de SES réserve-t-elle à la maîtrise de la langue ?", choix: ["0", "1", "2", "4"], reponse: 2,
          explication: "**2 points** sur 20 (orthographe, syntaxe), en dissertation comme en épreuve composée ; d'où le barème EC1 3,5 + EC2 5,5 + EC3 9 = 18 points." },
        { type: "redaction", question: "**Étude d'un document (EC2)** : Selon l'Insee, le taux de chômage en France était de 9,4 % en 2017 et de 7,3 % en 2023. 1) Calculez la variation en points de pourcentage et le taux de variation entre 2017 et 2023. 2) Rédigez une phrase de lecture des deux résultats.", corrige: `**1) Calculs**
- Variation absolue : 7,3 − 9,4 = **−2,1 points** de pourcentage.
- Taux de variation : (7,3 − 9,4) / 9,4 × 100 ≈ **−22,3 %**.

**2) Phrases de lecture**
- « Selon l'Insee, en France, le taux de chômage a baissé de 2,1 points de pourcentage entre 2017 et 2023, passant de 9,4 % à 7,3 % des actifs. »
- « Cela correspond à une baisse relative d'environ 22 % du taux de chômage. »

>! **Barème implicite** : calcul juste avec la bonne unité (points et %), phrase complète avec source, lieu, date et unité. Erreur fréquente : écrire « le chômage a baissé de 2,1 % ».` },
      ],
    },
  ],
};
