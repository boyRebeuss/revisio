export default {
  chapitres: [
    {
      id: "marche-concurrentiel",
      titre: "Comment un marché concurrentiel fonctionne-t-il ?",
      theme: "Science économique",
      cours: `
## Le marché, lieu de rencontre de l'offre et de la demande
Un **marché** est le lieu, réel ou fictif, où se rencontrent l'**offre** (les vendeurs) et la **demande** (les acheteurs) d'un bien ou d'un service. De cette rencontre naît un **prix** qui sert de signal aux agents économiques. Le marché suppose des **institutions** : droits de propriété, règles juridiques, monnaie, normes de qualité, confiance. Le marché est donc lui-même une **institution** : il est organisé par des règles.

On distingue les marchés selon leur **degré de concurrence** : de la **concurrence parfaite** (très nombreux vendeurs) à l'**oligopole** (quelques vendeurs) et au **monopole** (un seul vendeur), en passant par la concurrence monopolistique (produits différenciés).

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

>! **Exemple chiffré** : le coût marginal d'un maraîcher est de 10 € pour la 1re caisse, 14 € pour la 2e, 18 € pour la 3e, 22 € pour la 4e. Au prix de 20 €, il produit **3 caisses** : la 3e rapporte 20 € et coûte 18 € (profit + 2 €), la 4e coûterait 22 € pour 20 € de recette (profit − 2 €). Si le prix monte à 22 €, il produit 4 caisses : plus le prix est élevé, plus la quantité offerte est grande.
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez qu'une taxe modifie l'équilibre d'un marché concurrentiel.

**Document 1 – Un marché avant et après une taxe (données fictives)**
Demande : Qd = 100 − 2P. Offre sans taxe : Qo = 2P − 20. On instaure une taxe de 4 € par unité vendue, payée par les vendeurs.

| | Sans taxe | Avec la taxe de 4 € |
|---|---|---|
| Prix payé par l'acheteur | 30 € | 32 € |
| Prix net reçu par le vendeur | 30 € | 28 € |
| Quantité échangée | 40 | 36 |
| Surplus des consommateurs | 400 | 324 |
| Surplus des producteurs | 400 | 324 |
| Recettes fiscales | 0 | 144 |
| Surplus total (recettes comprises) | 800 | 792 |

**Document 2 – La « taxe soda » en France**
Depuis 2012, les boissons sucrées sont soumises en France à une contribution spécifique. Depuis 2018, son montant augmente avec la teneur en sucre de la boisson : l'objectif est d'inciter les industriels à réduire le sucre de leurs recettes et les consommateurs à en boire moins, pour des raisons de santé publique.`, corrige: `**Introduction**
- *Accroche* : depuis 2012, la France taxe les boissons sucrées pour en réduire la consommation (document 2).
- *Définitions* : un **marché concurrentiel** confronte de nombreux offreurs et demandeurs preneurs de prix ; l'**équilibre** est le prix pour lequel quantité offerte = quantité demandée. Une **taxe** est un prélèvement obligatoire ; ici, un montant fixe par unité vendue.
- *Annonce* : la taxe déplace l'équilibre (I) et modifie la répartition des gains à l'échange en créant une perte sèche (II).

**I. La taxe déplace l'équilibre du marché**
- *Affirmer* : la taxe augmente le prix payé et réduit la quantité échangée.
- *Expliquer* : pour les vendeurs, chaque unité coûte 4 € de plus ; à chaque prix, ils offrent moins : la courbe d'offre se déplace vers la gauche (vers le haut de 4 €). La nouvelle offre est Qo = 2(P − 4) − 20 = 2P − 28 ; l'équilibre 100 − 2P = 2P − 28 donne P = 32 €.
- *Illustrer* : selon le document 1, le prix payé passe de 30 à 32 € et la quantité de 40 à 36, soit une baisse de (36 − 40) / 40 × 100 = **−10 %**. C'est l'effet recherché par la taxe soda (document 2) : moins de consommation d'un bien jugé nocif pour la santé.

**II. La taxe modifie la répartition des gains et réduit le surplus total**
- *La charge est partagée* : l'acheteur paie 2 € de plus (32 au lieu de 30) et le vendeur reçoit 2 € de moins (28 au lieu de 30). Le partage est égal ici car offre et demande réagissent autant au prix ; en général, la charge pèse davantage sur le côté du marché le moins sensible au prix.
- *Une perte sèche apparaît* : les surplus des consommateurs et des producteurs passent de 400 à 324 ; l'État perçoit 4 × 36 = 144. Le surplus total tombe de 800 à 792 : la **perte sèche** de 8 correspond aux échanges mutuellement avantageux qui n'ont plus lieu (4 × 4 / 2 = 8).
- *Nuance* : cette perte est le coût de la taxe ; elle peut se justifier si la taxe corrige un problème que le marché ignore (coûts de santé liés au sucre) ou finance des dépenses utiles.

**Conclusion** : la taxe élève le prix payé, abaisse le prix reçu et la quantité échangée, et réduit le surplus total. C'est un instrument d'incitation efficace, dont le coût (perte sèche) doit être comparé aux bénéfices attendus.

>! **Barème implicite (9 points)** : introduction avec définitions et annonce ; mécanismes expliqués (déplacement de l'offre, partage de la charge, perte sèche) ; données des deux documents exploitées avec au moins un calcul ; connaissances personnelles ; conclusion qui répond au sujet. **Erreur fréquente** : décrire le tableau ligne par ligne sans expliquer le mécanisme.` },
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Quantités de fraises demandées et offertes sur le marché d'une ville, un samedi, selon le prix (données fictives)**

| Prix du kilo (en €) | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|
| Quantité demandée (en kg) | 800 | 700 | 600 | 500 | 400 | 300 |
| Quantité offerte (en kg) | 200 | 300 | 400 | 500 | 600 | 700 |

1) À l'aide du document, déterminez le prix et la quantité d'équilibre, puis calculez l'écart entre la quantité demandée et la quantité offerte au prix de 3 €.
2) À l'aide du document et de vos connaissances, expliquez comment le prix se fixe sur un marché concurrentiel.`, corrige: `**1) Lecture et calcul**
- Le prix d'équilibre est celui pour lequel la quantité demandée est égale à la quantité offerte : **5 € le kilo**, pour une quantité d'équilibre de **500 kg**.
- Au prix de 3 € : quantité demandée 700 kg, quantité offerte 300 kg. Écart : 700 − 300 = **400 kg** d'**excès de demande** (pénurie).
- *Phrase* : « D'après ces données fictives, sur ce marché un samedi, au prix de 3 € le kilo, les acheteurs souhaiteraient acheter 700 kg de fraises, mais les producteurs ne proposent que 300 kg : il manque 400 kg. »

**2) La formation du prix sur un marché concurrentiel**
- *Le marché* : lieu de rencontre de l'offre et de la demande. Il est **concurrentiel** si les vendeurs et les acheteurs sont nombreux (atomicité : aucun ne peut fixer seul le prix), les fraises comparables (homogénéité) et les prix affichés (transparence).
- *La demande est décroissante* : quand le prix baisse, de plus en plus d'acheteurs ont un prix de réservation supérieur au prix ; la quantité demandée passe de 300 kg à 7 € à 800 kg à 2 €.
- *L'offre est croissante* : un producteur vend tant que le prix couvre son **coût marginal**, qui augmente avec la quantité ; un prix plus élevé rend rentables des quantités supplémentaires (200 kg à 2 €, 700 kg à 7 €).
- *L'ajustement par le prix* : à 3 €, l'excès de demande de 400 kg pousse les acheteurs à accepter de payer plus et les vendeurs à monter leurs prix ; à 7 €, il y a 700 − 300 = 400 kg d'**excès d'offre** (invendus), les vendeurs baissent leurs prix. Le prix converge vers **5 €**, où les 500 kg offerts sont tous achetés.
- *Intérêt de l'équilibre* : à ce prix, tous les échanges mutuellement avantageux ont lieu ; le **surplus total** (gains à l'échange des acheteurs et des vendeurs) est maximal.
- *Nuance* : l'équilibre change si une courbe se déplace (une mauvaise récolte réduit l'offre et fait monter le prix) ; et le modèle suppose des hypothèses rarement toutes réunies.

>! **Barème indicatif (5,5 points ; la note de service du 11 septembre 2026 ne fixe pas la répartition entre les deux questions)** : Q1 (2 points) : prix et quantité d'équilibre justes, écart de 400 kg qualifié d'excès de demande, phrase avec unités. Q2 (3,5 points) : définition du marché concurrentiel, pente des courbes expliquée (prix de réservation, coût marginal), mécanisme d'ajustement appuyé sur au moins deux données du document, idée de gains à l'échange. **Erreur fréquente** : décrire le tableau ligne par ligne sans expliquer pourquoi le prix change.` },
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

On distingue trois types de monopoles :
- le **monopole naturel** : les coûts fixes sont si élevés qu'une seule entreprise produit à moindre coût que plusieurs (réseau ferré, distribution d'eau) ;
- le **monopole institutionnel** (ou légal) : la loi réserve l'activité à une seule entreprise (par exemple la Française des jeux pour les jeux de loterie) ;
- le **monopole d'innovation** : l'entreprise qui innove est temporairement seule sur son marché, souvent protégée par un brevet.

Le monopole est **faiseur de prix**. Il **maximise son profit** en produisant une quantité **plus faible** et en fixant un **prix plus élevé** qu'en concurrence. Résultat : le surplus du consommateur diminue, une partie est captée par le monopole, et il y a une **perte sèche** pour la collectivité : l'équilibre du monopole **n'est pas efficace**.

>! **Exemple chiffré** : la demande est Q = 100 − P et chaque unité coûte 20 € à produire (coût marginal constant). En concurrence, P = 20 € et Q = 80. Le monopole compare ses profits, égaux à (prix − 20) × quantité, le prix étant lu sur la demande (P = 100 − Q) : pour Q = 20, P = 80 et le profit vaut (80 − 20) × 20 = 1 200 € ; pour Q = 40, P = 60 et (60 − 20) × 40 = **1 600 €** ; pour Q = 60, P = 40 et (40 − 20) × 60 = 1 200 €. Il choisit Q = 40 et P = 60 €. Le surplus total passe de 3 200 (80 × 80 / 2) à 2 400 (surplus du consommateur 800 + profit 1 600) : la **perte sèche** vaut 800.

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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que les entreprises en oligopole sont tentées de s'entendre et que la politique de la concurrence cherche à l'empêcher.

**Document 1 – Les profits de deux entreprises en duopole selon leur stratégie de prix (en millions d'euros, données fictives)**

| | B maintient un prix élevé | B baisse son prix |
|---|---|---|
| A maintient un prix élevé | A : 10 ; B : 10 | A : 3 ; B : 14 |
| A baisse son prix | A : 14 ; B : 3 | A : 6 ; B : 6 |

**Document 2 – Deux ententes sanctionnées**

| Année | Autorité | Marché concerné | Amende |
|---|---|---|---|
| 2005 | Conseil de la concurrence (France) | téléphonie mobile (Orange, SFR, Bouygues Telecom) | 534 millions d'euros |
| 2016 | Commission européenne | camions (grands constructeurs européens) | environ 2,9 milliards d'euros |

Sources : Conseil de la concurrence, décision du 30 novembre 2005 ; Commission européenne, décision du 19 juillet 2016.`, corrige: `**Introduction**
- *Définitions* : un **oligopole** est un marché dominé par un petit nombre d'offreurs ; une **entente** (cartel) est un accord entre concurrents pour fixer les prix ou se partager le marché ; la **politique de la concurrence** regroupe les règles et institutions qui protègent la concurrence.
- *Annonce* : l'interdépendance stratégique pousse les firmes à s'entendre (I), ce qui nuit aux consommateurs et justifie la politique de la concurrence (II).

**I. L'interdépendance stratégique incite à l'entente**
- *Affirmer* : en oligopole, le profit de chaque firme dépend de la stratégie de l'autre.
- *Expliquer* : c'est le **dilemme du prisonnier**. Quelle que soit la stratégie de B, A gagne plus à baisser son prix (14 > 10 si B maintient ; 6 > 3 si B baisse). B raisonne de même : les deux baissent leurs prix et obtiennent 6 chacune, alors qu'elles gagneraient 10 chacune en maintenant des prix élevés (document 1).
- *Conséquence* : les deux firmes ont intérêt à **s'entendre** pour maintenir des prix élevés (20 millions de profits cumulés au lieu de 12). Mais l'entente est fragile : chacune reste tentée de tricher (14 > 10).

**II. Les ententes nuisent aux consommateurs, d'où la politique de la concurrence**
- *Effets* : une entente fixe un prix supérieur au prix concurrentiel ; les quantités baissent, le surplus du consommateur diminue et une perte sèche apparaît.
- *Sanctions* : les autorités infligent de lourdes amendes, par exemple 534 millions d'euros aux trois opérateurs de téléphonie mobile en France en 2005, ou environ 2,9 milliards d'euros aux constructeurs de camions par la Commission européenne en 2016 (document 2). L'amende doit être assez élevée pour rendre l'entente non rentable.
- *Autres outils* : la **procédure de clémence** (une entreprise qui dénonce l'entente peut échapper à l'amende), qui exploite la fragilité du cartel ; le contrôle des concentrations, qui empêche de réduire encore le nombre de concurrents.

**Conclusion** : la logique stratégique de l'oligopole rend l'entente tentante ; la politique de la concurrence la rend risquée et coûteuse, dans l'intérêt des consommateurs.

>! **Barème implicite (9 points)** : lecture juste de la matrice (raisonnement « quelle que soit la stratégie de l'autre ») ; lien entre entente, prix élevé et perte de surplus ; exploitation du document 2 ; connaissance des outils de la politique de la concurrence.` },
        { type: "saisie", question: "Un monopole fait face à la demande Q = 120 − P ; chaque unité lui coûte 20 € à produire (coût marginal constant, pas de coût fixe). Pour maximiser son profit, il produit **50 unités** et les vend au prix de **70 €**. Quel est son profit (en euros) ?", reponses: ["2500", "2 500", "2 500 €", "2500 €", "2 500 euros"],
          explication: "Profit = (prix − coût unitaire) × quantité = (70 − 20) × 50 = **2 500 €**. C'est bien le maximum : pour 40 unités (prix 80 €), le profit serait (80 − 20) × 40 = 2 400 € ; pour 60 unités (prix 60 €), (60 − 20) × 60 = 2 400 €. Attention à ne pas confondre profit et recette (70 × 50 = 3 500 €)." },
        { type: "saisie", question: "Même marché : en concurrence, le prix serait égal au coût marginal (20 €) et 100 unités seraient échangées ; le monopole, lui, vend 50 unités à 70 €. Quelle est la **perte sèche** due au monopole (en euros) ?", reponses: ["1250", "1 250", "1 250 €", "1250 €", "1 250 euros"],
          explication: "La perte sèche correspond aux échanges qui n'ont plus lieu (de la 51e à la 100e unité) : triangle de base 100 − 50 = 50 et de hauteur 70 − 20 = 50, soit 50 × 50 / 2 = **1 250 €**. Vérification : en concurrence, le surplus total vaut (120 − 20) × 100 / 2 = 5 000 € ; avec le monopole, surplus du consommateur (120 − 70) × 50 / 2 = 1 250 € + profit 2 500 € = 3 750 € ; 5 000 − 3 750 = 1 250 €." },
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Parts de marché en valeur des fabricants de boissons gazeuses dans un pays en 2025, en % (données fictives)**

| Entreprise A | Entreprise B | Entreprise C | Entreprise D | Une quarantaine d'autres fabricants | Total |
|---|---|---|---|---|---|
| 45 | 25 | 12 | 8 | 10 | 100 |

1) Calculez la part de marché cumulée des deux premières entreprises, puis des quatre premières, et rédigez une phrase de lecture de l'un de ces résultats.
2) À l'aide du document et de vos connaissances, montrez que ce marché est un oligopole et expliquez les conséquences possibles pour les consommateurs.`, corrige: `**1) Calculs et lecture**
- Deux premières entreprises : 45 + 25 = **70 %** du marché.
- Quatre premières entreprises : 45 + 25 + 12 + 8 = **90 %** du marché.
- *Phrase* : « D'après ces données fictives, en 2025 dans ce pays, les quatre premiers fabricants de boissons gazeuses réalisent 90 % des ventes en valeur du marché ; la quarantaine d'autres fabricants se partage les 10 % restants. »

**2) Un oligopole et ses conséquences**
- *Définition* : un **oligopole** est un marché dominé par un **petit nombre d'offreurs** face à de nombreux acheteurs. C'est le cas ici : quatre entreprises détiennent 90 % du marché, et l'entreprise A à elle seule 45 %, soit près de la moitié.
- *Un pouvoir de marché* : contrairement à la concurrence parfaite, ces entreprises ne sont pas preneuses de prix ; grâce à la **différenciation** (marques, publicité) et aux **barrières à l'entrée** (coûts de publicité, accès aux rayons des supermarchés, économies d'échelle), elles peuvent fixer un prix supérieur à leur coût marginal.
- *L'interdépendance stratégique* : chaque firme doit anticiper la réaction des autres. Elles peuvent se livrer une guerre des prix (favorable aux consommateurs) ou être tentées de **s'entendre** (cartel) pour maintenir des prix élevés : c'est la logique du dilemme du prisonnier, où la coopération rapporte plus aux firmes.
- *Conséquences pour les consommateurs* : en cas d'entente ou de domination, prix plus élevés, quantités plus faibles, moins de choix : le surplus du consommateur diminue et une **perte sèche** apparaît. Mais la rivalité entre grandes marques peut aussi stimuler l'innovation (nouveaux produits, réduction du sucre).
- *Le rôle de la politique de la concurrence* : l'Autorité de la concurrence sanctionne les ententes et les abus de position dominante (l'entreprise A pourrait être en position dominante) et contrôle les concentrations : un rachat de C par A, qui porterait sa part à 57 %, serait examiné de près.

>! **Barème indicatif (5,5 points ; la note de service du 11 septembre 2026 ne fixe pas la répartition entre les deux questions)** : Q1 (2 points) : deux cumuls justes (70 % et 90 %), phrase avec lieu, date, unité et caractère fictif. Q2 (3,5 points) : définition de l'oligopole reliée aux chiffres, pouvoir de marché et barrières à l'entrée, interdépendance stratégique et tentation d'entente, effets sur les consommateurs, politique de la concurrence. **Erreur fréquente** : parler de monopole alors que plusieurs grandes firmes coexistent.` },
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que les pouvoirs publics disposent de plusieurs instruments pour lutter contre la pollution.

**Document 1 – La composante carbone des taxes sur l'énergie en France (en euros par tonne de CO₂)**

| 2014 | 2016 | 2018 | depuis 2019 |
|---|---|---|---|
| 7 | 22 | 44,6 | 44,6 (gel de la hausse prévue) |

Source : lois de finances (ministère de l'Économie).

**Document 2 – Le marché européen des quotas d'émission (SEQE-UE)**
Les grandes installations industrielles et les centrales électriques de l'Union européenne doivent détenir un quota pour chaque tonne de CO₂ émise. Le nombre total de quotas est plafonné et diminue chaque année ; les quotas s'échangent sur un marché. Le prix de la tonne était inférieur à 10 € en 2017 ; il a dépassé 80 € en 2023 (ordres de grandeur, source : Commission européenne).

**Document 3 – Une norme européenne**
L'Union européenne a adopté en 2023 une règle selon laquelle, à partir de 2035, les voitures neuves vendues ne devront plus émettre de CO₂. En décembre 2025, la Commission européenne a proposé d'assouplir cet objectif (réduction de 90 % des émissions au lieu de 100 %).`, corrige: `**Introduction**
- *Définitions* : la pollution est une **externalité négative** : le pollueur impose un coût à d'autres agents sans contrepartie monétaire. Le marché, qui ignore ce coût social, conduit à **trop** produire et polluer : c'est une défaillance du marché.
- *Annonce* : les pouvoirs publics peuvent agir par la taxation (I), par un marché de quotas (II) et par la réglementation (III).

**I. Taxer la pollution : le signal-prix**
- *Mécanisme* : une **taxe pigouvienne** fait payer au pollueur le coût de l'externalité (principe pollueur-payeur) ; elle *internalise* l'externalité et incite à réduire les émissions.
- *Illustration* : en France, la composante carbone est passée de 7 € la tonne en 2014 à 44,6 € en 2018, soit un montant multiplié par 6,4 environ (document 1).
- *Limite* : l'acceptabilité sociale ; la hausse a été gelée depuis 2019 après le mouvement des « gilets jaunes », car la taxe pèse relativement plus sur les ménages modestes et ruraux.

**II. Créer un marché de quotas : fixer la quantité**
- *Mécanisme* : l'État fixe un **plafond** d'émissions et distribue ou vend des quotas échangeables ; l'entreprise qui réduit ses émissions à faible coût revend ses quotas, celle pour qui c'est coûteux en achète. L'objectif de quantité est atteint au moindre coût.
- *Illustration* : la baisse du plafond a fait passer le prix de la tonne de moins de 10 € (2017) à plus de 80 € (2023), ce qui rend la pollution plus coûteuse (document 2).
- *Limite* : un prix longtemps trop bas quand les quotas étaient trop nombreux.

**III. Réglementer : normes et interdictions**
- *Mécanisme* : la norme impose directement un comportement (seuils d'émission, interdictions).
- *Illustration* : la fin de la vente des voitures neuves émettant du CO₂ dans l'UE en 2035 (document 3).
- *Limite* : la norme est simple et sûre, mais rigide et parfois contestée : la proposition de 2025 de ramener l'objectif à 90 % de réduction montre son coût pour les industriels (document 3). Elle n'incite pas à aller au-delà du seuil et impose le même effort à tous, quel que soit son coût.

**Conclusion** : les trois instruments sont complémentaires : la taxe agit sur le prix, le marché de quotas sur la quantité, la norme sur le comportement. Leur efficacité dépend aussi de leur acceptabilité sociale.` },
        { type: "redaction", question: `**Dissertation s'appuyant sur un dossier documentaire** : Dans quelle mesure le marché permet-il une allocation efficace des ressources ?

**Document 1 – Un marché concurrentiel avec et sans prix plafond (données fictives)**
Demande : Qd = 100 − 2P ; offre : Qo = 2P − 20.

| | Équilibre de marché | Prix plafond fixé à 25 € |
|---|---|---|
| Prix | 30 € | 25 € |
| Quantité demandée | 40 | 50 |
| Quantité offerte | 40 | 30 |
| Quantité échangée | 40 | 30 |
| Surplus total | 800 | 750 |

**Document 2 – Pollution de l'air**
Selon Santé publique France (estimation publiée en 2021), près de 40 000 décès par an en France sont attribuables à l'exposition aux particules fines.

**Document 3 – Le contrôle technique**
Depuis 1992, en France, toute voiture de plus de quatre ans doit passer un contrôle technique ; le vendeur d'une voiture d'occasion doit remettre à l'acheteur un procès-verbal de contrôle récent.`, corrige: `**Introduction**
- *Accroche* : chaque année, la pollution de l'air serait responsable de près de 40 000 décès en France (document 2), alors que les pollueurs n'en paient pas le coût.
- *Définitions* : le **marché** est le lieu de rencontre de l'offre et de la demande où se forme un prix ; l'**allocation des ressources** est la façon dont les ressources rares sont réparties entre les usages ; elle est **efficace** quand on ne peut pas augmenter le bien-être de certains sans réduire celui d'autres (surplus total maximal).
- *Problématique* : le libre jeu de l'offre et de la demande suffit-il à utiliser au mieux les ressources, ou faut-il une intervention publique ?
- *Annonce* : le marché concurrentiel est un mécanisme efficace d'allocation (I), mais il connaît des défaillances qui justifient l'intervention publique (II).

**I. Le marché concurrentiel permet une allocation efficace des ressources**

*A. Le prix est un signal qui coordonne les décisions*
- Excès de demande → hausse du prix ; excès d'offre → baisse : le prix converge vers l'équilibre, sans planification centrale.
- Le prix informe sur la rareté : un prix élevé incite à produire plus et à consommer moins.

*B. À l'équilibre, le surplus total est maximal*
- Tous les échanges mutuellement avantageux ont lieu : surplus total de 800 dans le document 1.
- Une intervention qui fixe le prix hors de l'équilibre réduit l'efficacité : avec un prix plafond à 25 €, la quantité offerte tombe à 30 alors que 50 sont demandées (pénurie de 20) ; le surplus total baisse à 750, soit une **perte sèche** de 50 (document 1).

*Transition* : cette efficacité suppose des hypothèses (concurrence, information, absence d'effets externes) rarement toutes réunies.

**II. Mais le marché connaît des défaillances qui justifient une intervention publique**

*A. Les externalités*
- Le marché ne tient pas compte des coûts imposés aux autres : il produit trop de biens polluants (document 2) et trop peu de biens à externalités positives (vaccination, recherche).
- Réponses : taxe pigouvienne, marché de quotas, normes, subventions.

*B. Les biens collectifs et les biens communs*
- Bien collectif (non rival, non excluable) : comportement de passager clandestin, le marché ne le produit pas → production publique financée par l'impôt.
- Bien commun : surexploitation (tragédie des communs) → quotas de pêche, règles collectives (Ostrom).

*C. Les asymétries d'information et le pouvoir de marché*
- Sélection adverse (Akerlof) : le marché des voitures d'occasion peut disparaître ; l'obligation de contrôle technique réduit l'asymétrie (document 3). Aléa moral en assurance.
- Monopoles et ententes fixent des prix trop élevés : politique de la concurrence.

**Conclusion**
- *Bilan* : le marché concurrentiel est efficace quand ses hypothèses sont réunies, mais ses défaillances (externalités, biens collectifs et communs, asymétries d'information, pouvoir de marché) empêchent souvent une allocation optimale ; l'intervention publique peut alors améliorer la situation.
- *Ouverture* : l'État peut lui aussi mal intervenir (prix plafond du document 1) : il s'agit de bien choisir ses instruments.

>! **Barème implicite (sur 20, dont 2 de maîtrise de la langue)** : problématique explicite ; plan en deux parties équilibrées avec sous-parties ; chaque sous-partie argumentée (mécanisme + exemple) ; les trois documents exploités avec des données précises, sans paraphrase ; connaissances personnelles (Akerlof, Ostrom, Pigou) ; transitions ; conclusion qui répond à la question « dans quelle mesure ».` },
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Stock et captures d'une espèce de poisson dans une zone de pêche, en milliers de tonnes (données fictives)**
Des quotas de pêche sont instaurés en 2015.

| | 1990 | 2000 | 2010 | 2015 | 2025 |
|---|---|---|---|---|---|
| Stock de poissons adultes | 400 | 300 | 160 | 120 | 210 |
| Captures de l'année | 80 | 95 | 60 | 35 | 40 |

1) Calculez le taux de variation du stock de poissons entre 1990 et 2015, puis entre 2015 et 2025, et rédigez une phrase de lecture de l'un de ces résultats.
2) À l'aide du document et de vos connaissances, expliquez pourquoi le marché ne permet pas une gestion durable de cette ressource et comment l'intervention publique peut y remédier.`, corrige: `**1) Calculs et lecture**
- Taux de variation = (valeur d'arrivée − valeur de départ) / valeur de départ × 100.
- 1990-2015 : (120 − 400) / 400 × 100 = **−70 %**.
- 2015-2025 : (210 − 120) / 120 × 100 = **+75 %**.
- *Phrase* : « D'après ces données fictives, dans cette zone de pêche, le stock de poissons adultes a diminué de 70 % entre 1990 et 2015, passant de 400 000 à 120 000 tonnes. »

**2) Une défaillance du marché et sa correction**
- *Un bien commun* : les poissons de cette zone sont **rivaux** (un poisson pêché ne peut plus l'être par un autre) mais **non excluables** (il est difficile d'interdire l'accès à la mer). Le marché ne fixe aucun prix pour le stock lui-même : il ne rémunère que les poissons pêchés.
- *La tragédie des biens communs* (Garrett Hardin, 1968) : chaque pêcheur a intérêt à pêcher davantage tant que la vente rapporte plus que le coût de sa sortie en mer ; ce qu'il laisse dans l'eau risque d'être pêché par un autre. La somme de ces choix individuels rationnels conduit à la **surexploitation** : entre 1990 et 2000, les captures augmentent (de 80 000 à 95 000 tonnes) alors que le stock recule (de 400 000 à 300 000 tonnes). Chaque pêcheur impose aux autres et aux générations futures un coût (moins de poissons) sans contrepartie : c'est aussi une **externalité négative**. Les captures finissent par chuter (35 000 tonnes en 2015) faute de poissons.
- *L'intervention publique* : en fixant des **quotas** (un total de captures autorisé réparti entre pêcheurs ; dans l'Union européenne, ils sont fixés chaque année par le Conseil), les pouvoirs publics rendent la ressource en partie excluable et limitent les prélèvements. Les captures sont de 40 000 tonnes en 2025, bien en dessous de leur niveau de 1990-2000, et le stock remonte de 75 % entre 2015 et 2025. D'autres outils existent : licences, fermetures de zones ou de périodes, normes sur les filets, contrôles et sanctions.
- *D'autres solutions* : Elinor Ostrom a montré que des communautés de pêcheurs peuvent elles-mêmes fixer et faire respecter des règles collectives.
- *Nuance* : d'autres facteurs (température de l'eau, pollution) peuvent expliquer l'évolution du stock : la coïncidence entre quotas et remontée du stock ne prouve pas à elle seule la causalité.

>! **Barème indicatif (5,5 points ; la note de service du 11 septembre 2026 ne fixe pas la répartition entre les deux questions)** : Q1 (2 points) : formule, deux taux justes (−70 % et +75 %), phrase avec lieu, période, unité. Q2 (3,5 points) : bien commun défini par la rivalité et la non-excluabilité, mécanisme de surexploitation (tragédie des communs) relié aux données, rôle des quotas appuyé sur le document, au moins une nuance ou une autre solution. **Erreur fréquente** : confondre bien commun et bien collectif (non rival).` },
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

Le système financier met en relation les agents à capacité et les agents à besoin de financement : le **financement** consiste à couvrir les besoins de financement des uns par les capacités de financement des autres.

### Le revenu disponible des ménages
Le **revenu disponible** des ménages (revenus d'activité et du patrimoine + prestations sociales − impôts directs et cotisations sociales) se répartit entre **consommation** et **épargne**. Taux d'épargne = épargne / revenu disponible × 100. Un ménage qui épargne plus qu'il n'investit (achat de logement) dégage une capacité de financement ; un ménage qui achète un logement à crédit a un besoin de financement.

## L'autofinancement
L'**excédent brut d'exploitation** (**EBE**) est ce qui reste à l'entreprise de sa valeur ajoutée après avoir payé les salaires, les cotisations sociales et les impôts sur la production (et perçu les subventions d'exploitation) : EBE = VA − rémunération des salariés − impôts sur la production + subventions d'exploitation. C'est le profit brut tiré de la production.

L'**autofinancement** consiste pour une entreprise à financer ses investissements avec ses **propres ressources** : la part de l'EBE qui reste après paiement des intérêts, des impôts sur les bénéfices et des dividendes (épargne brute, profits non distribués).
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
Le **budget de l'État** retrace ses **recettes** — **fiscales** (impôts : TVA, impôt sur le revenu, impôt sur les sociétés…) et **non fiscales** (dividendes des entreprises publiques, revenus du domaine, amendes) — et ses **dépenses** (fonctionnement, investissement, intérêts de la dette, transferts).
- **Solde budgétaire** = recettes − dépenses. S'il est négatif : **déficit public**.
- Le déficit est financé par l'**emprunt**, principalement par l'émission de titres (obligations assimilables du Trésor).
- La **dette publique** est le **stock** de tout ce que les administrations publiques doivent ; le déficit est un **flux** annuel qui vient l'alimenter.

Le déficit et la dette sont souvent rapportés au **PIB** (critères européens de référence : déficit de 3 %, dette de 60 % du PIB).

### Les effets contradictoires des dépenses publiques
- **Effet de relance** : une hausse des dépenses publiques augmente la demande (commandes publiques, revenus distribués), donc la production et l'emploi, surtout quand l'activité est faible.
- **Effet d'éviction** : financées par l'emprunt, ces dépenses accroissent la demande de fonds prêtables, ce qui peut faire monter le taux d'intérêt et décourager l'investissement privé ; l'effet sur l'activité est alors réduit.

> **À retenir** :
> - Autofinancement, financement externe indirect (crédit bancaire) ou direct (actions, obligations).
> - Le taux d'intérêt est le prix du crédit ; il intègre durée, risque, inflation.
> - Déficit = flux annuel ; dette = stock accumulé.
> - EBE = VA − rémunération des salariés − impôts sur la production + subventions.
> - Dépenses publiques : effet de relance de la demande, mais risque d'effet d'éviction.
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que les entreprises peuvent financer leurs investissements de différentes manières.

**Document 1 – Le financement des investissements de deux entreprises en 2024 (en millions d'euros, données fictives)**

| | Entreprise A (PME) | Entreprise B (grande entreprise cotée) |
|---|---|---|
| Investissement (FBCF) | 5 | 600 |
| Épargne brute (profits non distribués) | 4 | 300 |
| Crédit bancaire | 1 | 0 |
| Émission d'obligations | 0 | 200 |
| Émission d'actions | 0 | 100 |

**Document 2 – Taux d'intérêt moyen des nouveaux crédits aux entreprises (données fictives arrondies)**
1,5 % en 2021 ; 4,5 % en 2023.`, corrige: `**Introduction**
- *Définitions* : **investir**, c'est acquérir des biens de production durables (machines, bâtiments, logiciels) : c'est la **FBCF**. Le **financement** désigne les ressources mobilisées pour payer cet investissement.
- *Annonce* : les entreprises recourent d'abord à leurs ressources propres (I), puis à des financements externes, intermédiés ou directs (II).

**I. Le financement interne : l'autofinancement**
- *Mécanisme* : l'entreprise utilise ses profits non distribués (épargne brute).
- *Données* : taux d'autofinancement = épargne brute / FBCF × 100 ; 4 / 5 × 100 = **80 %** pour A, 300 / 600 × 100 = **50 %** pour B (document 1).
- *Avantages et limites* : indépendance, pas d'intérêts à payer ; mais les ressources sont limitées, surtout pour de gros investissements.

**II. Le financement externe**

*A. Le financement indirect (intermédié) : le crédit bancaire*
- La banque prête à l'entreprise et facture des intérêts ; c'est la principale source externe des PME, qui n'ont pas accès aux marchés financiers (entreprise A : 1 million emprunté).
- Son coût dépend du taux d'intérêt : un emprunt de 1 million d'euros coûte 15 000 € d'intérêts par an à 1,5 %, mais 45 000 € à 4,5 % (document 2). La hausse des taux de 2021 à 2023 rend l'investissement moins rentable.

*B. Le financement direct sur les marchés financiers*
- **Obligations** (titres de créance) : l'entreprise B emprunte 200 millions directement auprès des épargnants ; elle verse des intérêts et rembourse à l'échéance.
- **Actions** (titres de propriété) : 100 millions de fonds propres pour B, sans remboursement ni intérêts, mais avec des dividendes à verser et une dilution du pouvoir des anciens actionnaires.

**Conclusion** : le choix dépend de la taille de l'entreprise (accès ou non aux marchés financiers), de sa rentabilité, du niveau des taux d'intérêt et de la volonté des propriétaires de garder le contrôle.

>! **Barème implicite (9 points)** : calcul des deux taux d'autofinancement ; distinction claire interne / externe, intermédié / direct, action / obligation ; usage du taux d'intérêt (document 2) ; connaissances (fonds propres, dividendes, dilution).` },
        { type: "saisie", question: "Une entreprise a une valeur ajoutée de 800 000 €. Elle verse 500 000 € de rémunération des salariés (salaires et cotisations sociales), paie 40 000 € d'impôts sur la production et reçoit 10 000 € de subventions d'exploitation. Quel est son excédent brut d'exploitation (EBE, en euros) ?", reponses: ["270000", "270 000", "270 000 €", "270000 €", "270 000 euros"],
          explication: "EBE = VA − rémunération des salariés − impôts sur la production + subventions d'exploitation = 800 000 − 500 000 − 40 000 + 10 000 = **270 000 €**. Les subventions s'**ajoutent** : les retrancher donnerait 250 000 €, à tort. L'EBE sert ensuite à payer les intérêts, l'impôt sur les bénéfices et les dividendes ; le reste permet l'autofinancement." },
        { type: "saisie", question: "Un ménage dispose d'un revenu disponible de 2 500 € par mois et consomme 2 100 € par mois. Quel est son taux d'épargne (en %) ?", reponses: ["16", "16 %", "16%"],
          explication: "Épargne = revenu disponible − consommation = 2 500 − 2 100 = 400 €. Taux d'épargne = épargne / revenu disponible × 100 = 400 / 2 500 × 100 = **16 %**. On divise par le **revenu disponible**, pas par la consommation (400 / 2 100 ≈ 19 % serait faux)." },
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Taux d'épargne des ménages en France, en % du revenu disponible brut**

| 2015 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
|---|---|---|---|---|---|---|---|
| 14,0 | 14,6 | 20,4 | 19,1 | 16,9 | 17,0 | 18,5 | 17,9 |

Source : Insee, comptes nationaux annuels (base 2020), « Données diverses sur les ménages en 2025 », 29 mai 2026.

1) Comparez, à l'aide d'un calcul, le taux d'épargne des ménages en 2019 et en 2020, et rédigez une phrase de lecture de la donnée de 2020.
2) À l'aide du document et de vos connaissances, expliquez pourquoi les ménages dégagent en général une capacité de financement et comment leur épargne contribue au financement des autres agents économiques.`, corrige: `**1) Lecture et calcul**
- Écart : 20,4 − 14,6 = **+5,8 points** de pourcentage entre 2019 et 2020 (soit une hausse relative d'environ 40 % : (20,4 − 14,6) / 14,6 × 100 ≈ 39,7 %).
- *Phrase* : « Selon l'Insee, en 2020, en France, les ménages ont épargné 20,4 % de leur revenu disponible brut : sur 100 € de revenu disponible, ils en ont épargné en moyenne 20,4. »
- *Remarque* : cette hausse s'explique surtout par les confinements liés à la crise sanitaire (épargne « forcée » : commerces fermés, voyages impossibles) et par l'épargne de **précaution** face à l'incertitude ; le taux redescend ensuite (16,9 % en 2022) sans revenir à son niveau d'avant la crise.

**2) L'épargne des ménages et le financement de l'économie**
- *Définitions* : le **revenu disponible** se partage entre consommation et **épargne** ; un agent a une **capacité de financement** quand son épargne dépasse ses dépenses d'investissement.
- *Pourquoi une capacité de financement ?* Les ménages épargnent une part importante de leur revenu (entre 14 % et 20,4 % sur la période du document) pour se protéger des aléas, préparer leur retraite ou un projet. Leur investissement (surtout l'achat de logements neufs et les travaux) est en général inférieur à cette épargne : globalement, ils dégagent une capacité de financement. Les **entreprises**, qui investissent en général plus qu'elles n'épargnent, et les **administrations publiques**, en déficit en France depuis 1975, ont au contraire le plus souvent un besoin de financement.
- *Le financement indirect* : les ménages placent leur épargne auprès des banques et des assurances (livrets, assurance-vie) ; ces intermédiaires financiers la prêtent ou la placent, notamment auprès des entreprises et de l'État.
- *Le financement direct* : en achetant des **actions** (titres de propriété) ou des **obligations** (titres de créance, dont les obligations d'État) sur les marchés financiers, les ménages financent directement entreprises et administrations, en échange de dividendes ou d'intérêts.
- *Nuance* : un taux d'épargne élevé n'est pas toujours favorable : il traduit aussi une consommation plus faible, donc moins de débouchés pour les entreprises ; et l'épargne thésaurisée (billets conservés) ou placée sur des supports très liquides finance moins l'investissement productif qu'une épargne placée à long terme (actions, assurance-vie).

>! **Barème indicatif (5,5 points ; la note de service du 11 septembre 2026 ne fixe pas la répartition entre les deux questions)** : Q1 (2 points) : écart en **points** de pourcentage juste, phrase avec source, lieu, date et unité (« % du revenu disponible brut »). Q2 (3,5 points) : définitions (épargne, capacité de financement), raison de la capacité des ménages appuyée sur le document, financement indirect et direct, au moins une nuance. **Erreur fréquente** : écrire que l'épargne a augmenté « de 5,8 % ».` },
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
- **Monnaie scripturale** : soldes créditeurs des comptes bancaires (dépôts à vue), qui circulent par chèque, carte, virement. C'est aujourd'hui l'essentiel de la masse monétaire : dans la zone euro, les billets et pièces ne représentent qu'environ 15 % de l'agrégat M1 (dépôts à vue + billets et pièces) et moins de 10 % de l'agrégat large M3.
- **Monnaie électronique** : unités stockées sur un support (carte prépayée).

La monnaie a perdu toute valeur intrinsèque (monnaie-marchandise → monnaie de papier → monnaie scripturale) : elle repose sur la **confiance**. Les crypto-actifs (bitcoin) ne remplissent qu'imparfaitement les fonctions de la monnaie (forte volatilité).

## La création monétaire par les banques
> **« Les crédits font les dépôts »** : quand une banque accorde un crédit, elle crédite le compte de l'emprunteur d'un montant nouveau. De la monnaie scripturale est **créée** ex nihilo par un simple jeu d'écriture.

- Le **remboursement** du crédit **détruit** la monnaie.
- La masse monétaire augmente quand les nouveaux crédits dépassent les remboursements.

>! **Exemple** : la banque B accorde un prêt de 20 000 € à l'entreprise E.
>! Bilan de la banque : à l'actif, une créance de 20 000 € sur E ; au passif, un dépôt de 20 000 € sur le compte de E.
>! Bilan de l'entreprise : à l'actif, 20 000 € de dépôt bancaire (de la monnaie qu'elle peut dépenser) ; au passif, une dette de 20 000 € envers la banque.
>! 20 000 € de monnaie sont créés.

## Les limites à la création monétaire
- La **demande de crédit** des agents (et leur solvabilité).
- Le besoin de **monnaie centrale** : les banques doivent disposer de liquidités pour faire face aux retraits en billets, aux paiements vers les autres banques et aux **réserves obligatoires**. Elles se procurent cette monnaie auprès de la **banque centrale** ou auprès des autres banques sur le **marché monétaire** (marché interbancaire), où se forme le taux d'intérêt à court terme.
- La **réglementation prudentielle** (ratios de fonds propres).

## Le rôle de la banque centrale
Dans la zone euro, c'est la **Banque centrale européenne (BCE)**, indépendante. Elle :
- émet les billets (monnaie fiduciaire) ;
- est la « banque des banques » : elle fournit la monnaie centrale ;
- est le **prêteur en dernier ressort** : en cas de crise, elle fournit des liquidités aux banques pour éviter des faillites en chaîne ;
- conduit la **politique monétaire** ; son objectif principal est la **stabilité des prix** (inflation proche de 2 % à moyen terme).

## La politique monétaire
- **Instrument principal** : les **taux directeurs**, taux auxquels la BCE prête aux banques ou rémunère les dépôts qu'elles placent chez elle (depuis 2024, la BCE pilote surtout via le taux de la **facilité de dépôt**). Ils lui permettent de **piloter le taux d'intérêt à court terme sur le marché monétaire**, qui se répercute sur les taux des crédits, puis sur la demande, l'activité et le niveau des prix.
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
          explication: "La **monnaie scripturale** (dépôts bancaires) est largement majoritaire : les billets et pièces ne font qu'environ 15 % de M1 et moins de 10 % de M3." },
        { type: "qcm", question: "Lorsqu'une banque accorde un crédit de 10 000 € à un client :", choix: ["elle prête l'argent déposé par d'autres clients, sans création monétaire", "elle crée 10 000 € de monnaie scripturale", "la BCE imprime 10 000 € de billets", "la masse monétaire baisse"], reponse: 1,
          explication: "« Les crédits font les dépôts » : la banque crédite le compte du client par un jeu d'écriture et **crée** de la monnaie." },
        { type: "vf", question: "Le remboursement d'un crédit détruit de la monnaie.", reponse: true,
          explication: "Le remboursement annule la créance et le dépôt correspondant : la monnaie créée disparaît." },
        { type: "saisie", question: "Quel est le nom de la banque centrale de la zone euro ? (sigle)", reponses: ["BCE", "Banque centrale européenne", "la BCE", "Banque centrale européenne (BCE)", "BCE (Banque centrale européenne)", "la Banque centrale européenne"],
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que la banque centrale peut influencer la création monétaire des banques.

**Document 1 – Le taux de la facilité de dépôt de la BCE (taux directeur de référence)**

| De septembre 2019 à juillet 2022 | Septembre 2023 | Juin 2025 |
|---|---|---|
| −0,50 % | 4,00 % | 2,00 % |

Source : BCE.

**Document 2 – Le crédit aux entreprises dans la zone euro**
La croissance sur un an des crédits accordés par les banques aux entreprises de la zone euro dépassait 8 % à l'automne 2022 ; elle était proche de 0 % fin 2023 (ordres de grandeur, BCE).

**Document 3 – Bilan simplifié d'une banque qui accorde un crédit de 50 000 €**

| Actif | Passif |
|---|---|
| Créance sur le client : +50 000 € | Dépôt sur le compte du client : +50 000 € |`, corrige: `**Introduction**
- *Définitions* : la **création monétaire** est l'augmentation de la masse monétaire ; elle résulte surtout des crédits accordés par les banques. La **banque centrale** (BCE dans la zone euro) émet la monnaie centrale et conduit la politique monétaire.
- *Annonce* : les banques créent la monnaie en accordant des crédits (I), mais la banque centrale influence cette création, notamment par ses taux directeurs (II).

**I. Les banques créent la monnaie scripturale**
- *Mécanisme* : « les crédits font les dépôts » : en accordant un crédit de 50 000 €, la banque inscrit une créance à son actif et crédite le compte du client de 50 000 € à son passif (document 3) : 50 000 € de monnaie sont créés par un jeu d'écriture.
- *Limites propres* : la demande de crédit des agents, leur solvabilité, la réglementation prudentielle (fonds propres).

**II. La banque centrale influence cette création**

*A. Les banques ont besoin de monnaie centrale*
- Retraits de billets, paiements entre banques, réserves obligatoires : les banques doivent se refinancer auprès de la banque centrale, qui fixe le prix de cette monnaie centrale.

*B. Les taux directeurs agissent sur le coût du crédit*
- Quand la BCE relève ses taux, les banques se refinancent plus cher et augmentent leurs propres taux : la demande de crédit diminue.
- *Illustration* : face à la forte inflation, la BCE a fait passer le taux de la facilité de dépôt de −0,50 % à 4 % entre juillet 2022 et septembre 2023, soit une hausse de 4,5 points (document 1). Dans le même temps, la croissance des crédits aux entreprises est passée de plus de 8 % à près de 0 % (document 2).
- *Nuance* : cette évolution n'est pas due qu'aux taux (incertitude, ralentissement de l'activité) : corrélation n'est pas causalité. La baisse des taux à partir de 2024 (2 % en juin 2025) vise au contraire à soutenir le crédit.

*C. D'autres instruments*
- Réserves obligatoires, rachats de titres (*quantitative easing*), rôle de prêteur en dernier ressort.

**Conclusion** : la banque centrale ne crée pas elle-même l'essentiel de la monnaie, mais elle oriente la création monétaire des banques en agissant sur le coût et la disponibilité de la monnaie centrale.` },
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Taux directeur de la BCE et inflation dans la zone euro**

| | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|
| Taux de la facilité de dépôt de la BCE au 31 décembre (en %) | −0,50 | 2,00 | 4,00 | 3,00 |
| Inflation : hausse moyenne des prix à la consommation sur l'année (indice des prix à la consommation harmonisé, en %) | 2,6 | 8,4 | 5,4 | 2,4 |

Sources : Banque centrale européenne (taux directeurs) ; Eurostat (inflation).

1) Calculez la variation du taux de la facilité de dépôt entre fin 2021 et fin 2023, et rédigez une phrase de lecture de la donnée d'inflation de 2022.
2) À l'aide du document et de vos connaissances, expliquez pourquoi et comment la BCE a modifié ses taux directeurs entre 2021 et 2024.`, corrige: `**1) Lecture et calcul**
- Variation : 4,00 − (−0,50) = **+4,5 points** de pourcentage entre fin 2021 et fin 2023.
- *Phrase* : « Selon Eurostat, en 2022, dans la zone euro, les prix à la consommation ont augmenté en moyenne de 8,4 % par rapport à 2021. »

**2) Pourquoi et comment la BCE a modifié ses taux**
- *L'objectif* : la BCE, indépendante, a pour mission principale la **stabilité des prix** : une inflation de **2 %** à moyen terme (objectif symétrique depuis 2021). En 2022, l'inflation atteint 8,4 %, plus de quatre fois cet objectif (forte hausse des prix de l'énergie, sortie de la crise sanitaire).
- *L'instrument* : les **taux directeurs**, dont le taux de la facilité de dépôt (taux auquel la BCE rémunère les dépôts des banques). Ils pilotent le taux d'intérêt à court terme sur le marché monétaire, c'est-à-dire le coût de la **monnaie centrale** dont les banques ont besoin.
- *Une politique restrictive (2022-2023)* : la BCE relève le taux de 4,5 points. Les banques se refinancent plus cher et augmentent les taux de leurs crédits ; les ménages et les entreprises empruntent moins, donc les banques **créent moins de monnaie** (« les crédits font les dépôts »). La demande de consommation et d'investissement ralentit, ce qui freine la hausse des prix : l'inflation revient à 5,4 % en 2023 puis 2,4 % en 2024.
- *Un assouplissement (2024)* : l'inflation se rapprochant de 2 %, la BCE abaisse son taux à 3 % fin 2024 pour ne pas freiner inutilement le crédit et l'activité.
- *Nuances* : les effets de la politique monétaire sont **décalés dans le temps** (en 2022, l'inflation monte malgré la hausse des taux) ; la baisse de l'inflation s'explique aussi par le recul des prix de l'énergie : corrélation n'est pas causalité.

>! **Barème indicatif (5,5 points ; la note de service du 11 septembre 2026 ne fixe pas la répartition entre les deux questions)** : Q1 (2 points) : variation de +4,5 **points** (attention au signe de −0,50), phrase avec source, lieu, date et unité. Q2 (3,5 points) : objectif de stabilité des prix (2 %) relié aux chiffres d'inflation, mécanisme de transmission (refinancement, taux des crédits, création monétaire, demande, prix), baisse de 2024 expliquée, au moins une nuance. **Erreur fréquente** : calculer 4,00 − 0,50 = 3,5 points.` },
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
- Les **socialisations secondaires** ont lieu à l'âge adulte : socialisation **professionnelle** (apprendre un métier, ses normes), **conjugale** (la vie en couple transforme les habitudes), **politique** (engagement associatif, syndical, partisan). Elles peuvent prolonger ou transformer la socialisation primaire (Peter Berger et Thomas Luckmann).

## Les instances de socialisation
- La **famille** : instance première, elle transmet langage, valeurs, pratiques, une vision du monde.
- L'**école** : transmet savoirs et normes (ponctualité, discipline, mérite).
- Le **groupe de pairs** : enfants ou jeunes du même âge ; rôle croissant à l'adolescence.
- Les **médias** et le **numérique** : séries, réseaux sociaux numériques, publicité.
- Plus tard : le monde du travail, les associations, les partis, les institutions religieuses.

Ces instances peuvent être **cohérentes** ou **concurrentes** (pluralité des influences).

## La diversité des configurations familiales
Les familles sont de plus en plus diverses : familles « traditionnelles » (un couple et ses enfants, environ deux tiers des familles avec enfants mineurs), **monoparentales** (20 à 25 %, le plus souvent une mère et ses enfants), **recomposées** (8 à 10 %), homoparentales (ordres de grandeur, Insee). Ces **configurations familiales** modifient les conditions de la socialisation :
- ressources disponibles : les familles monoparentales sont plus souvent pauvres et mal logées, ce qui réduit le temps, l'argent et l'aide scolaire disponibles ;
- enfants en résidence alternée ou dans une famille recomposée : ils sont socialisés dans deux foyers aux normes parfois différentes ;
- **taille et rang dans la fratrie** : les aînés et les enfants de petites fratries bénéficient en moyenne d'un investissement parental plus important ;
- trajectoire migratoire des parents, statut conjugal, milieu social et genre se combinent avec ces configurations.

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
> - Primaire (enfance) / secondaires (professionnelle, conjugale, politique).
> - Instances : famille, école, pairs, médias…
> - Les configurations familiales (monoparentale, recomposée, fratrie) modifient les conditions de la socialisation.
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
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Part des 11-17 ans pratiquant certaines activités en club, selon le sexe, en % (données fictives)**

| Activité | Filles | Garçons |
|---|---|---|
| Football | 8 | 40 |
| Danse | 30 | 4 |
| Équitation | 12 | 3 |

1) À l'aide d'un calcul, comparez la pratique du football chez les filles et chez les garçons.
2) À l'aide du document et de vos connaissances, montrez que ces écarts s'expliquent par une socialisation différenciée selon le genre.`, corrige: `**1) Lecture et calcul**
- « Selon ces données, 40 % des garçons de 11 à 17 ans pratiquent le football en club, contre 8 % des filles. »
- Écart : 40 − 8 = **32 points** de pourcentage ; rapport : 40 / 8 = **5** : les garçons sont proportionnellement 5 fois plus nombreux à jouer au football en club.
- Remarque : un même jeune peut pratiquer plusieurs activités, donc les pourcentages d'une colonne ne s'additionnent pas.

**2) Explication par la socialisation de genre**
- *Définition* : le **genre** désigne les différences entre hommes et femmes construites socialement ; la **socialisation différenciée** transmet des normes et des goûts différents selon le sexe.
- *Famille* : dès la petite enfance, jouets, vêtements et encouragements diffèrent ; on valorise chez les garçons la force et la compétition, chez les filles la grâce et le soin. Les goûts sportifs en découlent : la danse est pratiquée par 30 % des filles contre 4 % des garçons (7,5 fois plus).
- *Pairs et médias* : les pairs sanctionnent les pratiques jugées « non conformes » (moqueries envers un garçon qui danse) ; les médias montrent surtout le football masculin.
- *Nuance* : 8 % des filles jouent au football : la socialisation n'est pas un destin, et ces normes évoluent (essor du football féminin).

>! **Barème implicite** : Q1 : donnée lue avec unité et population (« 11-17 ans », « en club »), écart en **points** et rapport justes. Q2 : définition du genre, mécanismes de socialisation (famille, pairs, médias), au moins une donnée du document mobilisée, nuance. **Erreur fréquente** : écrire « 32 % de garçons en plus ».` },
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que la socialisation varie selon le milieu social.

**Document 1 – Pratiques culturelles des 15-19 ans selon la catégorie socioprofessionnelle des parents, en % (données fictives)**

| | Cadres | Professions intermédiaires | Employés | Ouvriers |
|---|---|---|---|---|
| Lit au moins un livre par mois (hors école) | 60 | 45 | 35 | 30 |
| Est allé au musée dans l'année | 70 | 50 | 35 | 30 |
| Joue d'un instrument de musique | 35 | 20 | 12 | 10 |

**Document 2 – Récit de vie (texte fictif)**
Samia, fille d'un ouvrier et d'une aide-soignante, est la première de sa famille à faire des études supérieures. Elle raconte que sa grande sœur lui prêtait des livres et qu'une professeure de collège l'a encouragée à viser une classe préparatoire.`, corrige: `**Introduction**
- *Définitions* : la **socialisation** est le processus par lequel l'individu intériorise les normes et les valeurs de la société et de ses groupes d'appartenance ; le **milieu social** se repère ici par la catégorie socioprofessionnelle des parents.
- *Annonce* : chaque milieu transmet des manières d'être et des pratiques différentes (I), mais cette socialisation n'est pas un destin (II).

**I. Une socialisation différenciée selon le milieu social**
- *Affirmer* : les pratiques culturelles des jeunes varient fortement selon le milieu.
- *Expliquer* : la famille transmet un **habitus** (Bourdieu), système de dispositions durables, et un **capital culturel** plus ou moins proche de la culture scolaire ; elle transmet aussi par l'exemple (parents lecteurs) et par les ressources (cours de musique payants).
- *Illustrer* : 60 % des enfants de cadres lisent au moins un livre par mois, contre 30 % des enfants d'ouvriers, soit deux fois plus ; l'écart atteint 40 points pour la visite de musée (70 % contre 30 %) (document 1).
- *Autres instances* : l'école valorise ces pratiques, ce qui renforce l'avantage des enfants déjà familiarisés.

**II. Une socialisation qui n'est pas mécanique**
- *Pluralité des instances* : Bernard Lahire montre que l'individu est un « homme pluriel », socialisé par plusieurs instances parfois contradictoires. Samia a reçu de sa sœur et d'une professeure des incitations différentes de celles de son milieu d'origine (document 2) : c'est une **trajectoire improbable**.
- *Variations à l'intérieur d'un milieu* : 30 % des enfants d'ouvriers lisent chaque mois (document 1) ; le milieu donne des probabilités, pas des certitudes.
- *Socialisation secondaire* : études, travail, conjoint peuvent transformer les goûts acquis.

**Conclusion** : la socialisation varie selon le milieu social, ce qui explique des différences de pratiques et de réussite scolaire ; mais la pluralité des influences laisse place à des parcours différents.` },
        { type: "redaction", question: `**Dissertation s'appuyant sur un dossier documentaire** : Dans quelle mesure la socialisation explique-t-elle les différences de comportement des individus ?

**Document 1 – Part des filles parmi les élèves de première générale suivant certaines spécialités, en % (données fictives arrondies)**

| Numérique et sciences informatiques | Sciences économiques et sociales | Humanités, littérature et philosophie |
|---|---|---|
| 15 | 55 | 80 |

**Document 2 – Pratiques culturelles des 15-19 ans selon la catégorie socioprofessionnelle des parents, en % (données fictives)**

| | Cadres | Ouvriers |
|---|---|---|
| Lit au moins un livre par mois (hors école) | 60 | 30 |
| Est allé au musée dans l'année | 70 | 30 |

**Document 3 – Temps moyen consacré chaque jour aux tâches domestiques par les adultes vivant en couple (données fictives arrondies)**
Femmes : 3 h 30 ; hommes : 2 h.`, corrige: `**Introduction**
- *Accroche* : en première, les filles sont très majoritaires en humanités, littérature et philosophie (80 %) et très minoritaires en numérique et sciences informatiques (15 %) (document 1) : ces choix ne relèvent pas seulement de goûts personnels.
- *Définitions* : la **socialisation** est le processus d'intériorisation des normes et des valeurs ; les **comportements** désignent les manières d'agir, de penser et de choisir (orientation, loisirs, consommation, partage des tâches).
- *Problématique* : nos comportements sont-ils le simple produit de ce que la société nous a transmis, ou laissent-ils une place à d'autres facteurs et à des parcours singuliers ?
- *Annonce* : la socialisation explique en grande partie les différences de comportement (I), mais elle ne les explique ni entièrement ni mécaniquement (II).

**I. La socialisation explique largement les différences de comportement**

*A. Une socialisation différenciée selon le milieu social*
- Habitus et capital culturel (Bourdieu) : les enfants de cadres sont deux fois plus nombreux que les enfants d'ouvriers à lire chaque mois (60 % contre 30 %) et l'écart est de 40 points pour le musée (document 2).
- Ces dispositions orientent ensuite le rapport à l'école et les choix d'études.

*B. Une socialisation différenciée selon le genre*
- Jouets, attentes des parents et des enseignants, pairs : les filles sont orientées vers le soin et les lettres, les garçons vers la technique et le numérique (document 1).
- À l'âge adulte, les femmes en couple consacrent en moyenne 1 h 30 de plus par jour que les hommes aux tâches domestiques (3 h 30 contre 2 h, document 3) : la répartition observée dans l'enfance est reproduite.

*Transition* : ces régularités statistiques n'empêchent pas une grande diversité de comportements individuels.

**II. Mais la socialisation n'explique pas tout, ni de façon mécanique**

*A. Une socialisation plurielle et parfois contradictoire*
- Lahire, « l'homme pluriel » : famille, école, pairs, médias transmettent des normes différentes ; d'où des trajectoires improbables (réussite scolaire en milieu populaire).
- Les régularités sont des probabilités : 30 % des enfants d'ouvriers lisent chaque mois et 15 % des élèves de NSI sont des filles.

*B. Une socialisation qui se poursuit et se transforme*
- La socialisation secondaire (études, travail, couple, engagement) peut modifier les dispositions acquises (Berger et Luckmann).
- Les normes de genre évoluent : le partage des tâches domestiques reste inégal mais se rééquilibre lentement.

*C. D'autres facteurs comptent*
- Les contraintes économiques (revenus, prix, offre culturelle près de chez soi) et les situations : on ne va pas au musée s'il n'y en a pas à proximité.
- Les individus font aussi des choix, réfléchissent à leurs expériences et peuvent s'écarter des normes transmises.

**Conclusion**
- *Bilan* : la socialisation est un facteur majeur des différences de comportement, notamment selon le milieu social et le genre ; mais, plurielle et continue, elle laisse place à la diversité des parcours et se combine à d'autres facteurs.
- *Ouverture* : ces différences de socialisation contribuent à expliquer les inégalités de réussite scolaire, que l'école cherche à réduire.

>! **Barème implicite (sur 20, dont 2 de maîtrise de la langue)** : problématique ; plan « oui… mais… » cohérent avec « dans quelle mesure » ; chaque argument mécanisme + donnée ; les trois documents utilisés (calculs d'écarts en points ou de rapports) ; auteurs (Bourdieu, Lahire, Berger et Luckmann) ; conclusion qui nuance.` },
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

## Les professions et catégories socioprofessionnelles (PCS)
La nomenclature des **PCS** de l'Insee (rénovée en 2020) classe la population selon la **profession**. Pour les actifs, elle combine plusieurs **critères** :
- le **statut** : indépendant (à son compte) ou salarié ;
- le **niveau de qualification** et la **position hiérarchique** (ouvrier non qualifié, technicien, cadre…) ;
- la **taille de l'entreprise** pour les indépendants (dans la PCS 2020, le dirigeant d'une entreprise de plus de 10 personnes est classé chef d'entreprise, et non artisan ou commerçant) ;
- le **secteur d'activité** et la nature de l'employeur (public ou privé).

Six groupes d'actifs : agriculteurs exploitants ; artisans, commerçants et chefs d'entreprise ; cadres et professions intellectuelles supérieures ; professions intermédiaires ; employés ; ouvriers. Les retraités et les autres inactifs sont classés à part. Certaines catégories correspondent à de vrais groupes sociaux (les ouvriers, les agriculteurs), d'autres restent surtout des catégories statistiques (les professions intermédiaires).

## Les réseaux sociaux
Un **réseau social** est un ensemble de **relations** entre individus (ou organisations). On l'analyse par les **liens** qui unissent les membres.
- **Mark Granovetter** distingue les **liens forts** (famille, amis proches) et les **liens faibles** (connaissances). Il montre la « **force des liens faibles** » : ils permettent d'accéder à des informations nouvelles, par exemple pour trouver un emploi.
- Le **capital social** (Bourdieu) : ensemble des relations qu'un individu peut mobiliser.
- Les **réseaux sociaux numériques** élargissent et transforment les liens, mais peuvent aussi enfermer (« bulles »).

## Les formes de solidarité selon Durkheim
Dans *De la division du travail social* (1893), **Émile Durkheim** se demande ce qui fait tenir une société ensemble (la **cohésion sociale**).
- **Solidarité mécanique** (sociétés traditionnelles) : les individus se ressemblent, partagent les mêmes croyances. La **conscience collective** est forte. Le droit est surtout **répressif**.
- **Solidarité organique** (sociétés modernes) : les individus sont **différents** et **complémentaires** grâce à la **division du travail**, comme les organes d'un corps. Montée de l'**individualisme**. Le droit est surtout **restitutif** (réparer).

Ce passage traduit un **processus d'individualisation** : les individus sont moins enfermés dans des appartenances imposées (village, religion, famille élargie) et choisissent davantage leurs liens (conjoint, amis, associations). L'individualisation ne fait pas disparaître le lien social : elle en transforme les formes.

## Les liens sociaux selon Serge Paugam
Serge Paugam distingue quatre types de liens qui apportent **protection** et **reconnaissance** :
- le **lien de filiation** (parents-enfants) ;
- le **lien de participation élective** (amis, conjoint, associations) ;
- le **lien de participation organique** (travail, école) ;
- le **lien de citoyenneté** (appartenance à une nation, droits).

## La fragilisation des liens sociaux
- **Chômage et précarité** fragilisent le lien de participation organique.
- **Isolement** et ruptures familiales (divorces, personnes âgées seules).
- **Ségrégations** (spatiale, scolaire) : la concentration des ménages pauvres dans certains quartiers réduit les contacts avec les autres groupes sociaux et les liens faibles utiles pour trouver un emploi.
- **Exclusion** : cumul de ruptures conduisant à la « **désaffiliation** » (Robert Castel) ou à la « **disqualification sociale** » (Paugam).
- Durkheim parle d'**anomie** : affaiblissement des normes qui régulent les comportements.

Mais de nouvelles formes de liens apparaissent : engagement associatif, réseaux numériques, solidarités de voisinage.

> **À retenir** :
> - Groupe social ≠ catégorie statistique.
> - PCS : statut, qualification, position hiérarchique, taille de l'entreprise, secteur.
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que le chômage peut fragiliser les liens sociaux.

**Document 1 – Liens sociaux selon la situation sur le marché du travail, en % (données fictives)**

| | En emploi | Au chômage |
|---|---|---|
| Personnes en situation d'isolement relationnel (au plus un contact par mois) | 9 | 18 |
| Personnes membres d'une association | 40 | 25 |

**Document 2 – La disqualification sociale (d'après Serge Paugam)**
Serge Paugam décrit un processus en trois étapes : la **fragilité** (perte d'emploi, revenus irréguliers, sentiment de déclassement), la **dépendance** envers les services sociaux, puis la **rupture** des liens sociaux, qui peut conduire à la grande pauvreté.`, corrige: `**Introduction**
- *Définitions* : les **liens sociaux** sont les relations qui unissent les individus et assurent leur intégration ; le **chômage** est la situation d'une personne sans emploi qui en recherche un.
- *Annonce* : le travail est une source essentielle de liens (I) ; sa perte peut entraîner l'affaiblissement de plusieurs liens à la fois (II).

**I. Le travail, source de protection et de reconnaissance**
- Serge Paugam distingue quatre liens (filiation, participation élective, participation organique, citoyenneté) ; le travail fonde le lien de **participation organique**.
- Il apporte une **protection** (revenu, droits sociaux) et une **reconnaissance** (utilité sociale, statut, identité professionnelle) ; il est aussi un lieu de sociabilité (collègues).

**II. Le chômage peut fragiliser l'ensemble des liens sociaux**
- *Perte du lien organique* : le chômeur perd revenus, collègues et statut.
- *Effets en chaîne* : les personnes au chômage sont deux fois plus souvent en situation d'isolement relationnel que les personnes en emploi (18 % contre 9 %, soit 9 points d'écart) et moins souvent membres d'une association (25 % contre 40 %, soit 15 points de moins) (document 1) : le lien électif s'affaiblit aussi (manque d'argent, honte, perte des occasions de rencontre).
- *Processus cumulatif* : la **disqualification sociale** mène de la fragilité à la dépendance puis à la rupture (document 2) ; Robert Castel parle de **désaffiliation** quand la perte de travail se cumule avec l'isolement relationnel.
- *Nuance* : la famille, les amis ou des associations de chômeurs peuvent amortir ces effets ; tous les chômeurs ne sont pas isolés (82 % ne le sont pas, d'après le document 1).

**Conclusion** : le travail étant un pilier de l'intégration, le chômage, surtout de longue durée, peut entraîner un affaiblissement cumulatif des liens sociaux ; d'où l'importance des politiques d'emploi et d'accompagnement.` },
        { type: "qcm", question: "Quel classement dans les groupes de PCS de l'Insee est correct pour ces quatre personnes : une infirmière salariée d'un hôpital, un professeur certifié de lycée, une caissière de supermarché, un chauffeur-livreur salarié ?", choix: ["Infirmière : employés ; professeur : professions intermédiaires ; caissière : employés ; chauffeur-livreur : employés", "Infirmière : cadres et professions intellectuelles supérieures ; professeur : cadres et professions intellectuelles supérieures ; caissière : ouvriers ; chauffeur-livreur : artisans, commerçants et chefs d'entreprise", "Infirmière : professions intermédiaires ; professeur : professions intermédiaires ; caissière : employés ; chauffeur-livreur : employés", "Infirmière : professions intermédiaires ; professeur : cadres et professions intellectuelles supérieures ; caissière : employés ; chauffeur-livreur : ouvriers"], reponse: 3,
          explication: "Les **infirmiers** sont classés dans les **professions intermédiaires** (professions de la santé et du travail social). Les **professeurs de lycée** (certifiés, agrégés) font partie des **cadres et professions intellectuelles supérieures**, alors que les **professeurs des écoles** sont en professions intermédiaires. La **caissière** est une **employée** (employés de commerce). Le **chauffeur-livreur salarié** est un **ouvrier** (catégorie des conducteurs et chauffeurs-livreurs). Dans la PCS 2020, même un livreur à son compte (par exemple pour une plateforme) reste classé dans cette catégorie d'ouvriers." },
        { type: "saisie", question: "Groupes de PCS : 1 = agriculteurs exploitants ; 2 = artisans, commerçants et chefs d'entreprise ; 3 = cadres et professions intellectuelles supérieures ; 4 = professions intermédiaires ; 5 = employés ; 6 = ouvriers. Code dans l'ordre ces cinq professions par le numéro de leur groupe, en écrivant les cinq chiffres à la suite (par exemple 12345) : un maçon qualifié salarié d'une entreprise du bâtiment ; une professeure des écoles ; un boulanger à son compte employant 3 salariés ; une aide-soignante dans un Ehpad ; un ingénieur informaticien salarié.", reponses: ["64253", "6-4-2-5-3", "6, 4, 2, 5, 3", "6,4,2,5,3", "6 ; 4 ; 2 ; 5 ; 3", "6/4/2/5/3"],
          explication: "**6-4-2-5-3**. Le maçon salarié est **ouvrier** (qualifié) ; la professeure des écoles relève des **professions intermédiaires** ; le boulanger indépendant dont l'entreprise compte au plus 10 personnes est un **artisan** (groupe 2 : au-delà de 10 personnes, il serait chef d'entreprise, dans le même groupe) ; l'aide-soignante est **employée** (et non profession intermédiaire comme l'infirmière, plus qualifiée) ; l'ingénieur est **cadre**. Le classement combine statut (indépendant ou salarié), qualification, position hiérarchique et taille de l'entreprise." },
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
- La **stigmatisation** : Erving **Goffman** (*Stigmate*, 1963) montre qu'un attribut jugé négatif (casier judiciaire, handicap, maladie) discrédite l'individu aux yeux des autres et réduit son identité à ce « stigmate ».
- La **carrière déviante** : l'étiquetage et la stigmatisation poussent l'individu à adopter une identité déviante et à rejoindre un groupe déviant (exemple des fumeurs de marijuana, des musiciens de jazz).

## Mesurer la délinquance
- **Statistiques administratives** (police, gendarmerie, justice) : ne recensent que les faits connus et enregistrés ; elles dépendent de l'activité des services et de la propension des victimes à porter plainte (« chiffre noir »).
- **Enquêtes de victimation** : on interroge un échantillon de personnes sur les atteintes subies, même non déclarées ; elles dépendent de la mémoire et de la sincérité des répondants.

> **À retenir** :
> - Déviance (norme sociale) ⊃ délinquance (norme juridique).
> - Contrôle social formel / informel.
> - Processus : étiquetage (Becker), stigmatisation (Goffman), carrière déviante ; autres explications : anomie (Durkheim, Merton), apprentissage.
> - Statistiques administratives et enquêtes de victimation sont complémentaires.
`,
      exercices: [
        { type: "vf", question: "Toute délinquance est une forme de déviance, mais toute déviance n'est pas de la délinquance.", reponse: true,
          explication: "La délinquance est la transgression d'une norme **juridique**, cas particulier de la déviance qui concerne toutes les normes sociales." },
        { type: "qcm", question: "Un élève moqué par ses camarades pour sa tenue subit :", choix: ["un contrôle social informel", "un contrôle social formel", "une sanction pénale", "un étiquetage judiciaire"], reponse: 0,
          explication: "La sanction vient de l'entourage, elle n'est pas codifiée : **contrôle social informel**." },
        { type: "saisie", question: "Quel sociologue est l'auteur de *Outsiders* et de la théorie de l'étiquetage ?", reponses: ["Becker", "Howard Becker", "H. Becker", "Howard S. Becker", "Howard Saul Becker"],
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
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Victimes estimées par une enquête de victimation et plaintes déposées, en France sur une année (données fictives arrondies)**

| Type d'atteinte | Victimes estimées (enquête) | Victimes ayant porté plainte |
|---|---|---|
| Vol de voiture | 100 000 | 75 000 |
| Cambriolage | 400 000 | 200 000 |
| Violences physiques (hors ménage) | 600 000 | 120 000 |
| Violences sexuelles | 250 000 | 25 000 |

1) Calculez le taux de plainte pour les cambriolages et pour les violences sexuelles, et rédigez une phrase de lecture pour l'un d'eux.
2) À l'aide du document et de vos connaissances, expliquez pourquoi les statistiques de la police et de la gendarmerie ne mesurent qu'imparfaitement la délinquance.`, corrige: `**1) Calculs et lecture**
- Taux de plainte = victimes ayant porté plainte / victimes estimées × 100.
- Cambriolage : 200 000 / 400 000 × 100 = **50 %** ; violences sexuelles : 25 000 / 250 000 × 100 = **10 %**.
- *Phrase* : « D'après ces données, sur une année en France, seule une victime de violences sexuelles sur dix a porté plainte. »

**2) Les limites des statistiques administratives**
- *Définition* : les statistiques de police et de gendarmerie recensent les faits **enregistrés** (plaintes, constatations des services).
- *Le chiffre noir* : les faits non déclarés échappent à ces statistiques ; le document montre que la part déclarée varie de 75 % (vols de voiture) à 10 % (violences sexuelles).
- *Pourquoi ces écarts ?* L'assurance exige souvent un dépôt de plainte pour indemniser un vol de voiture ; à l'inverse, pour les violences, les victimes peuvent avoir peur, honte, connaître l'auteur ou douter de l'utilité de la plainte.
- *L'activité des services* : les chiffres dépendent aussi des priorités de la police (contrôles routiers, stupéfiants) : une hausse des faits constatés peut traduire une hausse de l'activité policière plutôt que de la délinquance.
- *Complémentarité* : les **enquêtes de victimation** éclairent le chiffre noir, mais dépendent de la mémoire et de la sincérité des répondants et ne couvrent pas toutes les infractions (délits sans victime directe).

>! **Barème implicite** : Q1 : formule, deux taux justes en %, phrase avec lieu, période et unité. Q2 : notion de chiffre noir, raisons de la non-déclaration, rôle de l'activité policière, intérêt et limites des enquêtes de victimation.` },
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que la déviance peut s'expliquer par plusieurs processus sociaux.

**Document 1 – Les modes d'adaptation individuelle selon Robert K. Merton (1938)**

| Mode d'adaptation | Buts valorisés (réussite) | Moyens légitimes |
|---|---|---|
| Conformisme | acceptés | acceptés |
| Innovation | acceptés | rejetés |
| Ritualisme | rejetés | acceptés |
| Évasion (retrait) | rejetés | rejetés |
| Rébellion | rejetés et remplacés | rejetés et remplacés |

**Document 2 – Part des adolescents déclarant avoir commis un vol dans l'année, selon le comportement de leurs amis (données fictives)**
Amis ne commettant pas de vols : 5 % ; amis commettant des vols : 35 %.

**Document 3 – Devenir fumeur de marijuana (d'après Howard Becker, *Outsiders*, 1963)**
Becker montre qu'on apprend, au contact de fumeurs expérimentés, la technique pour fumer, la manière de percevoir les effets de la drogue et le fait de les trouver agréables. Une fois désigné comme « drogué », l'individu se rapproche d'un groupe qui partage ces pratiques.`, corrige: `**Introduction**
- *Définitions* : la **déviance** est la transgression d'une norme sociale, qui suscite réprobation et sanctions ; elle est **relative** (époque, lieu, groupe).
- *Annonce* : la déviance peut naître d'un défaut de régulation (I), s'apprendre au contact d'un groupe (II) et résulter d'un processus d'étiquetage (III).

**I. La déviance comme produit de l'anomie**
- Pour **Durkheim**, l'anomie (affaiblissement des normes) favorise la déviance.
- Pour **Merton**, elle naît d'un décalage entre les **buts** valorisés (réussite matérielle) et l'accès aux **moyens légitimes** : celui qui accepte les buts mais n'a pas accès aux moyens peut « innover » par des moyens illégitimes (vol, fraude) (document 1).

**II. La déviance comme apprentissage**
- Selon **Sutherland** (association différentielle), la déviance s'apprend dans des interactions avec des proches qui la valorisent.
- *Illustration* : les adolescents dont les amis volent sont 7 fois plus nombreux à déclarer un vol (35 % contre 5 %, soit 30 points d'écart, document 2). Nuance : corrélation ne vaut pas causalité, des jeunes déjà tentés peuvent aussi choisir ces amis.
- Becker montre que l'usage de marijuana s'apprend : techniques, perception et appréciation des effets (document 3).

**III. La déviance comme résultat d'un étiquetage**
- Pour **Becker**, « le déviant est celui auquel l'étiquette a été appliquée avec succès » : la déviance résulte d'une **interaction** entre celui qui transgresse et les **entrepreneurs de morale**.
- La désignation publique enclenche une **carrière déviante** : l'individu, rejeté, rejoint un groupe déviant (document 3).

**Conclusion** : plusieurs processus sociaux se combinent : défaut de régulation, apprentissage et étiquetage ; la déviance n'est donc pas qu'un choix individuel.` },
      ],
    },
    {
      id: "opinion-publique",
      titre: "Comment se forme et s'exprime l'opinion publique ?",
      theme: "Sociologie et science politique",
      cours: `
## Qu'est-ce que l'opinion publique ?
L'**opinion publique** désigne l'ensemble des jugements, attitudes et croyances partagés par une partie importante d'une population sur des questions d'intérêt général. Elle s'est affirmée au XVIIIe siècle avec l'essor de la presse, des salons et des cafés (Jürgen Habermas parle de « **sphère publique** »). Son émergence est **indissociable de l'avènement de la démocratie** : d'abord **monopole des catégories « éclairées »** (élites cultivées, bourgeoisie lettrée), l'opinion publique est désormais entendue comme celle du **plus grand nombre**, avec le suffrage universel, l'école et la presse de masse. Elle est aujourd'hui un acteur central des démocraties : les gouvernants cherchent à la connaître et à l'influencer.

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
- Leur usage fréquent transforme la vie politique : on parle de **démocratie d'opinion**. Les sondages servent au **contrôle des gouvernants** (cotes de popularité), pèsent sur la **participation électorale** (mobilisation ou démobilisation selon les pronostics) et orientent la **communication politique** (choix des thèmes, des candidats, des slogans).

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
> - L'opinion publique, d'abord celle des élites « éclairées », est devenue celle du plus grand nombre ; les sondages installent une démocratie d'opinion.
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que les sondages ne mesurent qu'imparfaitement l'opinion publique.

**Document 1 – Part des « sans opinion » à une question sur la politique monétaire européenne, selon le diplôme (données fictives)**

| Sans diplôme | Baccalauréat | Bac + 3 et plus |
|---|---|---|
| 25 % | 12 % | 6 % |

**Document 2 – Un résultat inattendu**
Au premier tour de l'élection présidentielle d'avril 2002, les derniers sondages publiés donnaient Jean-Marie Le Pen autour de 14 % des voix. Il obtient 16,9 % et se qualifie pour le second tour, devant Lionel Jospin (16,2 %) (résultats : Conseil constitutionnel).

**Document 3 – Deux formulations d'une même question (données fictives)**
« Faut-il augmenter les impôts pour financer les hôpitaux ? » : 35 % de oui. « Faut-il donner plus de moyens aux hôpitaux, même si cela coûte plus cher ? » : 60 % de oui.`, corrige: `**Introduction**
- *Définitions* : l'**opinion publique** est l'ensemble des jugements partagés par une partie importante de la population sur des questions d'intérêt général ; un **sondage** interroge un échantillon représentatif pour l'estimer.
- *Annonce* : les sondages connaissent des limites techniques (I) et, plus profondément, ils construisent en partie l'opinion qu'ils prétendent mesurer (II).

**I. Des limites techniques**
- *Marge d'erreur* : pour 1 000 personnes, environ ±3 points autour de 50 % ; le score réel n'est connu que dans une fourchette.
- *Erreurs de prévision* : en 2002, l'écart entre les sondages (environ 14 %) et le résultat de Jean-Marie Le Pen (16,9 %) est de près de 3 points, alors que seuls 0,7 point le séparait de Lionel Jospin : le sondage n'a pas vu la qualification (document 2). Explications : vote caché, indécis, abstention mal anticipée, quotas imparfaits.
- *Formulation des questions* : selon le vocabulaire employé, la même préoccupation recueille 35 % ou 60 % d'avis favorables, soit 25 points d'écart (document 3).

**II. Une opinion en partie construite par le sondage (Bourdieu)**
- Pour Pierre **Bourdieu** (« L'opinion publique n'existe pas », 1973), tout le monde n'a pas une opinion sur tout : les « sans opinion » sont 4 fois plus nombreux chez les sans-diplôme que chez les bac + 3 et plus (25 % contre 6 %, document 1) ; la compétence politique est inégalement répartie.
- Toutes les opinions n'ont pas le même poids : on additionne avis réfléchis et réponses improvisées.
- Le sondeur **impose sa problématique** : il suppose que la question mérite d'être posée.
- Effets en retour : les sondages publiés peuvent modifier les votes (effets *bandwagon* et *underdog*, vote stratégique).

**Conclusion** : les sondages restent utiles pour connaître l'avis des citoyens entre deux élections, mais ils doivent être lus avec prudence : marge d'erreur, formulation, non-réponses.` },
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
- Le **taux d'inscription** = inscrits sur les listes électorales / personnes en droit de voter (majeurs de nationalité française) × 100.
- Ne pas confondre l'abstention avec la **non-inscription** (environ 5 % à 10 % des personnes en âge de voter) et la **mal-inscription** (inscrit ailleurs que là où l'on vit).
- Les **votes blancs et nuls** sont comptés parmi les votants mais pas parmi les suffrages exprimés.

### Les facteurs de la participation
- **Intégration sociale** : l'âge (les jeunes et les très âgés votent moins), le diplôme, l'emploi stable, la vie en couple, l'ancienneté de résidence augmentent la participation.
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
- L'**identification partisane** et la **socialisation politique** familiale (une majorité de jeunes se situent comme leurs parents sur l'axe gauche-droite, surtout quand les deux parents partagent la même orientation).

### Le vote, une affaire individuelle
- Le modèle de l'**électeur rationnel** (ou stratège) : l'électeur compare les offres politiques et vote selon ses intérêts et les **enjeux** (chômage, sécurité, environnement).
- **Volatilité électorale** : elle prend des formes variées : **intermittence** du vote (voter à certaines élections et pas à d'autres) et **changement de préférences** (voter pour des partis différents). Elle reflète l'affaiblissement ou la recomposition du poids de certaines variables sociales, le **déclin de l'identification politique** (moins d'électeurs se reconnaissent durablement dans la gauche ou la droite) et le poids croissant des **variables contextuelles** (enjeux, candidats, campagne).
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
        { type: "redaction", question: `**Étude d'un document (EC2)**

**Document – Taux d'abstention au premier tour de différentes élections en France (tour unique pour les européennes), en % des inscrits (source : ministère de l'Intérieur)**

| Présidentielle 2022 | Législatives 2022 | Européennes 2024 | Régionales 2021 |
|---|---|---|---|
| 26,3 | 52,5 | 48,5 | 66,7 |

1) Comparez, à l'aide d'un calcul, l'abstention aux régionales de 2021 et à la présidentielle de 2022.
2) À l'aide du document et de vos connaissances, expliquez pourquoi le niveau de l'abstention varie selon le type d'élection.`, corrige: `**1) Lecture et calcul**
- « Selon le ministère de l'Intérieur, au premier tour des régionales de 2021 en France, 66,7 % des inscrits se sont abstenus, contre 26,3 % au premier tour de la présidentielle de 2022. »
- Écart : 66,7 − 26,3 = **40,4 points** de pourcentage ; rapport : 66,7 / 26,3 ≈ **2,5** : l'abstention a été environ 2,5 fois plus forte aux régionales.

**2) Explication**
- *Enjeu perçu* : la présidentielle désigne le chef de l'État, élection jugée décisive et très médiatisée ; les régionales portent sur une collectivité moins connue, dont les compétences sont mal identifiées.
- *Abstention intermittente* : beaucoup d'électeurs votent à certaines élections et pas à d'autres ; c'est l'abstention « dans le jeu » (Jaffré et Muxel), choix d'électeurs qui jugent l'enjeu faible ou veulent exprimer un mécontentement.
- *Calendrier* : les législatives suivent de peu la présidentielle et paraissent jouées d'avance (52,5 %).
- *Abstention « hors du jeu »* : une partie des abstentionnistes, moins intégrée socialement (jeunes, peu diplômés, précaires), s'abstient quelle que soit l'élection.
- *Contexte* : les régionales de 2021 ont eu lieu pendant la crise sanitaire.

>! **Barème implicite** : Q1 : phrase avec source, lieu, date, unité (« % des inscrits ») ; écart en points et rapport. Q2 : au moins deux explications (enjeu perçu, intermittence, intégration sociale) reliées aux chiffres. **Erreur fréquente** : calculer l'abstention en % des votants.` },
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que la participation électorale dépend de l'intégration sociale.

**Document 1 – Part des inscrits ayant voté à tous les tours d'une année électorale, selon l'âge et le diplôme, en % (données fictives)**

| 18-24 ans | 40-59 ans | 60-74 ans | Sans diplôme | Diplôme du supérieur |
|---|---|---|---|---|
| 20 | 40 | 55 | 30 | 45 |

**Document 2 – Deux formes d'abstention (d'après Jérôme Jaffré et Anne Muxel)**
Les abstentionnistes « hors du jeu » politique sont peu intégrés socialement et s'abstiennent régulièrement ; les abstentionnistes « dans le jeu » s'intéressent à la politique et sont souvent diplômés, mais choisissent de ne pas voter à certaines élections.`, corrige: `**Introduction**
- *Définitions* : la **participation électorale** mesure la part des inscrits qui votent (votants / inscrits × 100) ; l'**intégration sociale** désigne l'insertion de l'individu dans des groupes et des liens sociaux (famille, travail, école, voisinage).
- *Annonce* : les plus intégrés votent davantage (I), même si une partie de l'abstention n'a rien à voir avec un défaut d'intégration (II).

**I. Plus on est intégré, plus on vote**
- *Mécanisme* : le vote suppose de se sentir concerné et compétent, d'être inscrit au bon endroit, d'être entouré de personnes qui votent ; l'emploi stable, la vie en couple, l'ancienneté de résidence et le diplôme favorisent tout cela.
- *Âge* : 20 % des 18-24 ans ont voté à tous les tours, contre 55 % des 60-74 ans (document 1) : les jeunes, plus mobiles et moins insérés professionnellement, votent moins.
- *Diplôme* : 45 % des diplômés du supérieur votent à tous les tours, contre 30 % des sans-diplôme, soit 15 points d'écart (document 1) ; le diplôme renforce le sentiment de **compétence politique**.
- *Abstention « hors du jeu »* : elle concerne les personnes peu intégrées (document 2).

**II. Mais l'intégration n'explique pas toute l'abstention**
- *Abstention « dans le jeu »* : des électeurs intégrés et diplômés s'abstiennent par choix, pour protester ou parce qu'ils jugent l'enjeu faible (document 2).
- *Intermittence* : la plupart des abstentionnistes votent à certaines élections ; l'enjeu perçu (présidentielle) et l'offre politique comptent aussi.
- Même chez les diplômés, plus de la moitié ne votent pas à tous les tours (document 1).

**Conclusion** : l'intégration sociale est un déterminant majeur de la participation, mais l'abstention a aussi une dimension politique et stratégique.` },
        { type: "redaction", question: `**Dissertation s'appuyant sur un dossier documentaire** : Voter : une affaire individuelle ou collective ?

**Document 1 – Vote au second tour d'une élection présidentielle selon la pratique religieuse, en % des suffrages exprimés (données fictives)**

| | Catholiques pratiquants réguliers | Sans religion |
|---|---|---|
| Candidat de droite | 70 | 35 |
| Candidat de gauche | 30 | 65 |

**Document 2 – Part des électeurs ayant voté pour des partis différents au premier tour de deux élections présidentielles successives (données fictives)**
Années 1990 : 25 % ; années 2020 : 40 %.

**Document 3 – Abstention au premier tour (tour unique pour les européennes), en % des inscrits (ministère de l'Intérieur)**
Présidentielle 2022 : 26,3 % ; européennes 2024 : 48,5 %.`, corrige: `**Introduction**
- *Accroche* : depuis la loi de 1913, l'électeur vote seul dans l'isoloir ; pourtant, les catholiques pratiquants votent deux fois plus à droite que les sans-religion (70 % contre 35 %, document 1).
- *Définitions* : le **vote** est l'acte par lequel un citoyen exprime un choix lors d'une élection ; il est **individuel** s'il résulte d'un calcul personnel (intérêts, enjeux), **collectif** s'il dépend des groupes d'appartenance et de la socialisation.
- *Problématique* : l'acte apparemment le plus personnel du citoyen est-il le produit de choix individuels ou de déterminants sociaux ?
- *Annonce* : le vote est largement une affaire collective (I), mais il s'individualise (II).

**I. Le vote, une affaire collective**

*A. Des déterminants sociaux puissants*
- Lazarsfeld (*The People's Choice*, 1944) : « une personne pense politiquement comme elle est socialement ».
- La religion reste une **variable lourde** : 70 % des catholiques pratiquants votent pour le candidat de droite, contre 35 % des sans-religion, soit 35 points d'écart (document 1). Le patrimoine, la PCS, le diplôme, l'âge et le territoire structurent aussi les votes.

*B. La socialisation politique et l'identification partisane*
- La famille transmet des préférences : une majorité de jeunes se situent comme leurs parents sur l'axe gauche-droite ; le milieu professionnel et les syndicats renforcent ces orientations.

*C. La participation elle-même est sociale*
- Les plus intégrés (diplôme, emploi stable) votent davantage ; l'abstention « hors du jeu » touche les moins intégrés.

*Transition* : ces régularités s'affaiblissent depuis les années 1980.

**II. Un vote qui s'individualise**

*A. Un électeur plus stratège*
- Modèle de l'**électeur rationnel** : il compare les offres selon les **enjeux** (pouvoir d'achat, sécurité, environnement) ; vote utile ou stratégique.
- Recul du vote de classe : une partie des ouvriers vote à l'extrême droite ou s'abstient.

*B. Une volatilité croissante*
- La part des électeurs changeant de parti d'une présidentielle à l'autre passerait de 25 % à 40 % (+15 points, document 2) : la fidélité partisane recule.
- L'abstention intermittente montre un choix au cas par cas : 26,3 % d'abstention à la présidentielle 2022 contre 48,5 % aux européennes 2024 (document 3) selon l'enjeu perçu.

*C. Le rôle de l'offre politique et de la campagne*
- Personnalité des candidats, médias, événements de campagne pèsent sur les choix.
- Mais ces choix individuels restent socialement situés : la volatilité est plus forte chez certains groupes (jeunes, diplômés peu politisés).

**Conclusion**
- *Bilan* : le vote est à la fois collectif (déterminants sociaux, socialisation) et individuel (enjeux, stratégie, volatilité) ; la dimension individuelle progresse sans faire disparaître les déterminants sociaux.
- *Ouverture* : la montée de l'abstention pose la question de la représentativité des élus.

>! **Barème implicite (sur 20, dont 2 de maîtrise de la langue)** : sujet à deux termes traité dans ses deux dimensions ; problématique ; auteurs et notions (Lazarsfeld, variable lourde, électeur rationnel, volatilité) ; documents exploités avec calculs d'écarts en points ; transitions ; conclusion qui articule les deux dimensions.` },
        { type: "saisie", question: "Dans un pays, 52 millions de personnes remplissent les conditions pour voter (âge, nationalité) et 49,4 millions sont inscrites sur les listes électorales (données fictives arrondies). Quel est le taux d'inscription (en %) ?", reponses: ["95", "95 %", "95%"],
          explication: "Taux d'inscription = inscrits / personnes en droit de voter × 100 = 49,4 / 52 × 100 = **95 %**. Les 5 % restants (2,6 millions de personnes) sont non inscrits : ils ne sont pas comptés parmi les abstentionnistes, puisque l'abstention se calcule en % des **inscrits**." },
      ],
    },
    {
      id: "risques-protection-sociale",
      titre: "Comment l'assurance et la protection sociale contribuent-elles à la gestion des risques dans les sociétés développées ?",
      theme: "Regards croisés",
      cours: `
## Les risques dans les sociétés développées
Un **risque** est un événement **probable** (dont on peut estimer la probabilité) mais **incertain** (on ne sait pas qui sera touché ni quand) et qui entraîne un **dommage**. Ulrich Beck parle de « **société du risque** ».
- Risques **individuels** (maladie, accident, perte d'emploi) et **collectifs** (catastrophe naturelle, pandémie, crise financière).
- **Risques sociaux** : vieillesse, maladie, chômage, famille, accidents du travail, logement, pauvreté.

Face au risque, les agents ont des **comportements différents** : certains sont **averses au risque** (ils préfèrent payer une prime pour s'en protéger), d'autres l'acceptent ou le recherchent.

L'**exposition** au risque et l'**attitude** face au risque (perception du risque, aversion, conduites à risque) varient selon les individus, les **groupes sociaux** et les **sociétés** : les ouvriers sont bien plus exposés aux accidents du travail que les cadres ; les jeunes hommes ont davantage de conduites à risque sur la route ; la perception d'un même risque (nucléaire, vaccin) diffère d'un pays à l'autre.

## Les principes de la gestion des risques
- **Prévention** : réduire la probabilité ou la gravité du risque (vaccination, ceinture de sécurité, normes).
- **Mutualisation** : répartir le coût des sinistres sur un grand nombre de personnes (voir ci-dessous).
- **Diversification** : ne pas dépendre d'une seule source de revenu ou d'un seul placement (« ne pas mettre tous ses œufs dans le même panier ») : un agriculteur pratique plusieurs cultures, un épargnant répartit son épargne entre plusieurs placements, une entreprise vend plusieurs produits.

Ces principes sont mis en œuvre par plusieurs **institutions** :
- la **famille** (solidarité familiale, épargne de précaution) ;
- les **sociétés d'assurance** (à but lucratif) et les **mutuelles** (sans but lucratif, « une personne, une voix ») ;
- les **pouvoirs publics** : protection sociale, assurances obligatoires, normes de prévention.

## Les effets du partage des risques
- **Effets positifs** : le partage des risques accroît le **bien-être** (sécurité, tranquillité) et favorise la **prise de risque** et l'**innovation** : un entrepreneur assuré ose davantage investir.
- **Effet négatif** : l'**aléa moral** ; l'assuré, protégé, peut devenir moins prudent.

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
> - Trois principes : prévention, mutualisation, diversification ; institutions : famille, assurances et mutuelles, pouvoirs publics.
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que l'assurance et la protection sociale permettent de faire face aux risques.

**Document 1 – La mutualisation (données fictives)**
Un assureur couvre 10 000 logements. Chaque logement a 1 % de probabilité de subir dans l'année un dégât des eaux, dont le coût moyen est de 3 000 €.

**Document 2 – Répartition des prestations de protection sociale par risque en France (ordres de grandeur arrondis, début des années 2020 ; source : Drees, comptes de la protection sociale)**

| Vieillesse-survie | Santé | Famille | Emploi (chômage, insertion) | Logement, pauvreté-exclusion |
|---|---|---|---|---|
| environ 45 % | environ 35 % | environ 7 % | environ 6 % | environ 6 % |

**Document 3 – Le bonus-malus en assurance automobile**
Chaque année sans accident responsable, le coefficient appliqué à la prime de l'assuré est multiplié par 0,95 (bonus de 5 %) ; chaque accident responsable le multiplie par 1,25 (malus de 25 %).`, corrige: `**Introduction**
- *Définitions* : un **risque** est un événement probable mais incertain qui entraîne un dommage ; l'**assurance** (privée) et la **protection sociale** (publique) sont des mécanismes de couverture collective.
- *Annonce* : l'assurance repose sur la mutualisation (I) ; la protection sociale couvre les risques sociaux selon des logiques d'assurance et d'assistance (II).

**I. L'assurance : mutualiser les risques**
- *Mécanisme* : grâce à la **loi des grands nombres**, l'assureur prévoit le coût total des sinistres : 10 000 × 0,01 = 100 dégâts des eaux attendus, soit 100 × 3 000 = 300 000 € ; la prime pure est de 300 000 / 10 000 = **30 €** par logement (document 1). Chacun paie 30 € pour ne pas risquer de payer 3 000 €.
- *Limites* : l'**aléa moral** (l'assuré moins prudent) et la **sélection adverse**. Le bonus-malus y répond : un accident responsable augmente la prime de 25 %, une année sans accident la réduit de 5 % (document 3), ce qui incite à la prudence.

**II. La protection sociale : couvrir les risques sociaux**
- *Les risques couverts* : vieillesse-survie (environ 45 % des prestations) et santé (environ 35 %) représentent ensemble environ 80 % des prestations (document 2) ; viennent ensuite la famille, l'emploi, le logement et la pauvreté.
- *Logique d'assurance* (bismarckienne) : cotisations sur les salaires, prestations liées aux cotisations (retraites, allocations chômage).
- *Logique d'assistance* (beveridgienne) : financement par l'impôt, prestations sous condition de ressources (RSA) ou universelles (protection universelle maladie).
- *Une solidarité plus large que l'assurance privée* : la protection sociale ne tarifie pas selon le risque individuel ; elle organise une solidarité entre bien-portants et malades, actifs et retraités, et réduit les inégalités.

**Conclusion** : assurance et protection sociale permettent de faire face aux risques en les mutualisant ; la protection sociale va plus loin en couvrant aussi ceux que le marché de l'assurance exclurait.` },
        { type: "qcm", question: "Un épargnant répartit son épargne entre un livret, des actions de plusieurs entreprises de secteurs différents et un appartement mis en location. Il applique le principe de :", choix: ["mutualisation", "prévention", "diversification", "aléa moral"], reponse: 2,
          explication: "La **diversification** consiste à ne pas dépendre d'un seul placement ou d'une seule source de revenu : si l'un perd de la valeur, les autres limitent la perte (« ne pas mettre tous ses œufs dans le même panier »). La mutualisation répartit le coût des sinistres entre de nombreux assurés ; la prévention réduit la probabilité ou la gravité du risque ; l'aléa moral est un effet pervers de l'assurance." },
        { type: "redaction", question: "**Mobilisation des connaissances (EC1)** : Montrez que le partage des risques a des effets positifs et négatifs.", corrige: `**Définition** : partager les risques, c'est répartir sur un grand nombre d'agents le coût des dommages subis par quelques-uns, par la **mutualisation** (assurances, mutuelles, protection sociale) ou par la **diversification**.

**Idée 1 – Des effets positifs.**
- *Le bien-être et la sécurité* : grâce à la loi des grands nombres, chacun paie une prime certaine et modeste au lieu de supporter seul un dommage coûteux (incendie, maladie grave). Les agents, souvent averses au risque, sont plus sereins.
- *La prise de risque et l'innovation* : un entrepreneur assuré ose davantage investir et innover ; un agriculteur assuré contre la grêle peut se lancer dans une culture plus rentable.
- *La solidarité* : la protection sociale protège aussi ceux qui ne pourraient pas s'assurer seuls (malades chroniques, chômeurs) et réduit les inégalités.

**Idée 2 – Des effets négatifs.**
- *L'aléa moral* : protégé, l'assuré peut devenir moins prudent (conducteur bien assuré moins attentif), ce qui augmente le nombre de sinistres et le coût pour tous. Réponses : franchise, bonus-malus.
- *La sélection adverse* : si la prime est la même pour tous, les plus exposés s'assurent davantage, les « bons risques » partent et le système peut se fragiliser.
- *Un coût* : primes, cotisations, frais de gestion ; pour la protection sociale, un financement de plus en plus lourd (vieillissement).

**Conclusion** : le partage des risques accroît le bien-être et favorise l'initiative, mais il modifie les comportements ; d'où des mécanismes qui laissent une part du risque à l'assuré.` },
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
- la **taille** : micro-entreprises (moins de 10 salariés), PME (moins de 250), ETI (250 à 4 999), grandes entreprises (5 000 et plus) ; la définition officielle combine l'effectif avec des seuils de chiffre d'affaires ou de total de bilan ;
- le **secteur d'activité** (primaire, secondaire, tertiaire) ;
- le **statut juridique** : entreprise individuelle, sociétés (SARL, SA, SAS), entreprises publiques, entreprises de l'**économie sociale et solidaire** (coopératives, mutuelles, associations) qui suivent le principe « une personne, une voix ».

## Le cycle de vie d'une entreprise
- **Création** : plus d'un million d'entreprises sont créées chaque année en France depuis 2022, en majorité sous le régime du micro-entrepreneur (Insee).
- **Croissance** : interne (nouvelles usines, embauches) ou externe (rachat d'autres entreprises, fusions).
- **Changement de statut juridique** : une entreprise individuelle qui grandit devient souvent une société (SARL, SAS), puis parfois une SA cotée en Bourse pour lever des capitaux.
- **Disparition** : cessation d'activité, rachat par une autre entreprise, ou défaillance (liquidation judiciaire).

## Les figures de l'entrepreneur
- Selon le **statut juridique** : l'**entrepreneur individuel** (il exerce en son nom propre), le **micro-entrepreneur** (régime simplifié de l'entrepreneur individuel, réservé aux petits chiffres d'affaires), le **chef d'entreprise** qui dirige une société.
- Selon la **fonction économique** : l'**entrepreneur-innovateur** (Schumpeter), le **manager** (dirigeant salarié), l'**actionnaire** (apporteur de capitaux).

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
- L'**autorité** est un pouvoir reconnu comme **légitime** : le salarié obéit à son supérieur parce qu'il reconnaît son droit à donner des ordres (contrat de travail, compétence, position hiérarchique).
- Les décisions peuvent être **centralisées** (prises au sommet, par la direction générale : cohérence, rapidité de la stratégie) ou **décentralisées** (déléguées aux filiales, aux établissements, aux équipes : réactivité, motivation, adaptation au terrain).
- Dans les grandes sociétés, **séparation entre propriété et contrôle** (Berle et Means, 1932) : les actionnaires possèdent, les **managers** dirigent.
- Relation **mandant-mandataire** (relation d'agence) : les dirigeants peuvent poursuivre leurs propres intérêts. Pour aligner leurs intérêts sur ceux des actionnaires : rémunérations indexées sur la valeur boursière (stock-options), contrôle par le conseil d'administration.
- Débat : gouvernance **actionnariale** (création de valeur pour les actionnaires) ou **partenariale** (prise en compte de toutes les parties prenantes). La **loi PACTE (2019)** permet aux entreprises de se doter d'une **raison d'être** et du statut d'**entreprise à mission** ; la responsabilité sociale des entreprises (**RSE**) va dans ce sens.

## Les relations sociales dans l'entreprise
- L'entreprise est un lieu de **coopération** (production commune) mais aussi de **conflits** (salaires, conditions de travail, emploi).
- Le **pouvoir** dans l'entreprise : hiérarchie, mais aussi zones d'autonomie.
- Les salariés sont représentés par les **syndicats** et le **comité social et économique (CSE)**. La **négociation collective** aboutit à des accords collectifs.
- Le **dialogue social** et les conflits (grève) font évoluer les règles.

> **À retenir** :
> - Cycle de vie : création, croissance, changement de statut, disparition.
> - Figures de l'entrepreneur : entrepreneur individuel, micro-entrepreneur, chef d'entreprise ; innovateur, manager, actionnaire.
> - Valeur ajoutée = chiffre d'affaires − consommations intermédiaires.
> - Acteurs : dirigeants, actionnaires, salariés, parties prenantes.
> - Autorité = pouvoir légitime ; décisions centralisées ou décentralisées.
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
        { type: "redaction", question: `**Raisonnement s'appuyant sur un dossier documentaire (EC3)** : À l'aide du dossier documentaire et de vos connaissances, vous montrerez que la gouvernance des entreprises cherche à concilier des intérêts différents.

**Document 1 – Répartition de la valeur ajoutée d'une entreprise en 2024 (en millions d'euros, données fictives)**

| Salaires et cotisations sociales | Impôts sur la production | Intérêts versés | Dividendes | Autofinancement |
|---|---|---|---|---|
| 6,5 | 0,8 | 0,4 | 1,0 | 1,3 |

**Document 2 – La loi PACTE (2019)**
La loi PACTE permet à une société d'inscrire dans ses statuts une **raison d'être** et de devenir **société à mission**, en se fixant des objectifs sociaux et environnementaux contrôlés par un comité. En 2020, Danone est devenue la première société du CAC 40 à adopter ce statut.

**Document 3 – La rémunération d'un dirigeant (données fictives)**
Le PDG d'une grande société cotée perçoit un salaire fixe de 1 million d'euros et une part variable pouvant atteindre 1,5 million, liée surtout à l'évolution du cours de l'action.`, corrige: `**Introduction**
- *Définitions* : la **gouvernance** désigne les règles et mécanismes qui organisent le pouvoir de décision et le contrôle des dirigeants ; les **parties prenantes** sont tous les acteurs concernés par l'activité de l'entreprise (actionnaires, salariés, clients, fournisseurs, État, riverains).
- *Annonce* : les acteurs de l'entreprise ont des intérêts en partie divergents (I) ; la gouvernance cherche à les concilier, selon une logique actionnariale ou partenariale (II).

**I. Des intérêts divergents**
- *Partage de la valeur ajoutée* : sur 10 millions d'euros de valeur ajoutée (6,5 + 0,8 + 0,4 + 1,0 + 1,3), 65 % vont aux salariés, 10 % aux actionnaires et 13 % à l'autofinancement (document 1) : plus de salaires, c'est moins de profits à distribuer ou à investir.
- *Actionnaires et dirigeants* : avec la **séparation entre propriété et contrôle** (Berle et Means, 1932), les managers peuvent poursuivre leurs propres objectifs (prestige, taille, rémunération) : c'est la relation **d'agence**.

**II. Des mécanismes de gouvernance pour les concilier**

*A. La gouvernance actionnariale*
- Le conseil d'administration, élu par l'assemblée générale, contrôle les dirigeants.
- Indexer la rémunération sur le cours de l'action aligne les intérêts du dirigeant sur ceux des actionnaires : la part variable (jusqu'à 1,5 million) peut dépasser le fixe (1 million) (document 3). Risque : privilégier la valeur boursière à court terme au détriment des salariés ou de l'investissement.

*B. La gouvernance partenariale*
- La loi PACTE permet de se doter d'une raison d'être et du statut de société à mission (Danone en 2020, document 2) : l'entreprise intègre des objectifs sociaux et environnementaux.
- Représentation des salariés (CSE, administrateurs salariés dans les grandes entreprises), négociation collective, responsabilité sociale des entreprises (RSE).

**Conclusion** : la gouvernance arbitre entre les intérêts des actionnaires, des dirigeants et des autres parties prenantes ; le débat porte sur la place à donner à chacun.` },
        { type: "qcm", question: "Léa, graphiste, quitte son emploi salarié et se met à son compte, seule, sous un régime simplifié de l'entreprise individuelle réservé aux petits chiffres d'affaires. Quelle figure de l'entrepreneur et quelle étape du cycle de vie de l'entreprise cela illustre-t-il ?", choix: ["Un chef d'entreprise dirigeant une société anonyme, en phase de croissance externe", "Une micro-entrepreneuse, lors de la création de l'entreprise", "Une manager salariée, lors d'un changement de statut juridique", "Une actionnaire, lors de la disparition de l'entreprise"], reponse: 1,
          explication: "Le **micro-entrepreneur** exerce sous le régime simplifié de l'entrepreneur individuel, réservé aux petits chiffres d'affaires ; Léa en est au stade de la **création** ; ce régime représente la majorité des créations d'entreprise en France (Insee). Si son activité se développe, elle pourra embaucher (croissance) et transformer son entreprise en société, par exemple une SARL ou une SAS (changement de statut juridique)." },
        { type: "vf", question: "Dans une chaîne de magasins très **centralisée**, ce sont les directeurs de chaque magasin qui fixent eux-mêmes leurs prix, leurs horaires et leurs produits.", reponse: false,
          explication: "C'est la description d'une organisation **décentralisée** (décisions déléguées aux établissements, ce qui favorise la réactivité et l'adaptation au terrain). Dans une organisation **centralisée**, ces décisions sont prises au sommet, par la direction générale, ce qui assure la cohérence de la stratégie et une image uniforme de l'enseigne." },
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

Le **taux de variation cumulé** est le taux de variation global sur plusieurs périodes : taux cumulé = (produit des CM − 1) × 100. Dans l'exemple ci-dessus, il vaut 21 %.

## Indice simple
Un **indice** compare une valeur à une valeur de référence (année de base) fixée à **100** :
> Indice = valeur de l'année / valeur de l'année de base × 100

>! Prix en 2015 (base) : 80 € ; en 2024 : 92 €. Indice 2024 = 92 / 80 × 100 = **115**. Lecture : « Entre 2015 et 2024, le prix a augmenté de 15 % ».

Attention : la différence entre deux indices n'est un pourcentage que si l'on part de l'année de base. Entre un indice 120 et un indice 150 : (150 − 120) / 120 × 100 = **+25 %** (et non 30 %).

## Indice synthétique
Un **indice synthétique** résume en un seul nombre l'évolution de **plusieurs** grandeurs, en pondérant chacune par son importance. Exemple : l'**indice des prix à la consommation** (IPC) de l'Insee mesure l'évolution moyenne des prix de milliers de biens et services, chacun pondéré par sa part dans les dépenses des ménages. Il se lit comme un indice simple : un IPC de 120 (base 100 en 2015) signifie que les prix ont augmenté en moyenne de 20 % depuis 2015.

## Valeur nominale et valeur réelle
- La **valeur nominale** est exprimée en euros courants (de l'année considérée).
- La **valeur réelle** (en euros constants) élimine l'effet de la hausse des prix : valeur réelle = valeur nominale / indice des prix × 100.

>! Un salaire de 2 000 € en 2024, avec un IPC de 120 (base 100 en 2015), vaut 2 000 / 120 × 100 ≈ **1 667 €** de 2015 : c'est son pouvoir d'achat mesuré aux prix de 2015.

De même, **taux d'intérêt réel ≈ taux nominal − taux d'inflation** (exactement : CM réel = CM nominal / CM des prix).

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

## Représentations graphiques
- **Diagramme de répartition** (diagramme circulaire, barres empilées à 100 %) : il montre les parts d'un ensemble ; la somme fait 100 %.
- **Série chronologique** (courbe ou histogramme dans le temps) : elle montre une évolution. Repère l'unité, la période, l'origine de l'axe vertical (une échelle qui ne part pas de 0 grossit les variations) et distingue niveau (valeur) et évolution (pente).
- **Courbes d'offre, de demande, de coût** : lis la **pente** (sens de variation) et distingue déplacement **sur** la courbe (variation du prix) et déplacement **de** la courbe (autre facteur).

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
> - Indice = valeur / valeur de base × 100 ; l'IPC est un indice synthétique.
> - Valeur réelle = valeur nominale / indice des prix × 100.
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
        { type: "saisie", question: "Calcule la moyenne pondérée : 14 (coef. 4), 10 (coef. 2), 12 (coef. 2).", reponses: ["12,5", "12.5", "12,5/20"],
          explication: "(56 + 20 + 24) / (4 + 2 + 2) = 100 / 8 = **12,5**." },
        { type: "qcm", question: "Salaires de 5 salariés : 1 500, 1 700, 1 800, 2 100, 4 000 €. Quelle affirmation est juste ?", choix: ["Médiane 1 800 € et moyenne 2 220 €", "Médiane 2 220 € et moyenne 1 800 €", "Médiane et moyenne valent 1 800 €", "Médiane 2 100 € et moyenne 2 220 €"], reponse: 0,
          explication: "La valeur centrale est **1 800 €** ; la moyenne vaut 11 100 / 5 = **2 220 €**, tirée vers le haut par le haut salaire." },
        { type: "vf", question: "Si deux variables sont corrélées, alors l'une est nécessairement la cause de l'autre.", reponse: false,
          explication: "Corrélation ≠ causalité : un troisième facteur peut expliquer les deux, ou la relation peut être fortuite, ou la causalité inverse." },
        { type: "saisie", question: "Un coefficient multiplicateur vaut 0,85. Quel est le taux de variation correspondant (en %) ?", reponses: ["-15", "−15", "-15 %", "−15 %", "baisse de 15 %"],
          explication: "(0,85 − 1) × 100 = **−15 %**." },
        { type: "redaction", question: "**Exercice de calcul (préparation à l'EC2)** : Le prix d'un panier de biens vaut 200 € en 2015, 210 € en 2020 et 240 € en 2024. 1) Calcule les indices base 100 en 2015. 2) Calcule le taux de variation entre 2020 et 2024, et rédige une phrase de lecture. 3) Calcule le coefficient multiplicateur entre 2015 et 2024.", corrige: `**1) Indices base 100 en 2015**
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
        { type: "saisie", question: "Ton salaire augmente de 3 % pendant que les prix augmentent de 5 %. De combien (en %, arrondi au dixième) varie ton pouvoir d'achat ?", reponses: ["-1,9", "−1,9", "-1,9 %", "−1,9 %", "baisse de 1,9 %", "environ -1,9", "environ -1,9 %", "environ −1,9 %", "≈ -1,9", "≈ −1,9 %", "-1,9 % environ"],
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

Dans les deux cas, les méthodes ci-dessous s'apprennent dès la 1re. Le programme fixe comme attendus de **fin de 1re** la mobilisation des connaissances, les calculs simples, l'analyse de documents et la construction d'un raisonnement rigoureux (c'est l'épreuve composée) ; la **construction d'une problématique** et la **dissertation** sont des attendus de **fin de terminale** : en 1re, les dissertations proposées ici sont un entraînement. Le barème indiqué est celui de l'épreuve de terminale à partir de la session 2027 (note de service du 11 septembre 2026, publiée au Bulletin officiel spécial n° 4 du 17 septembre 2026), qui réserve **2 points sur 20 à la maîtrise des normes orthographiques et syntaxiques**. La qualité de l'expression (organisation du raisonnement, vocabulaire précis) compte en plus dans l'évaluation de chaque partie. Les notions de 1re doivent rester connues et mobilisables en terminale. En 1re, ton professeur peut utiliser un barème adapté : renseigne-toi auprès de lui.

## L'épreuve composée
Elle comporte **trois parties** indépendantes.

### Partie 1 – Mobilisation des connaissances (EC1, 3,5 points)
Une question de cours (« Montrez que… », « Distinguez… », « Présentez… »).
- Réponds de façon **structurée** : 2 ou 3 idées, chacune avec un **mécanisme** expliqué et un **exemple**.
- Définis les notions clés de la question.
- Pas d'introduction ni de conclusion longues ; environ 15 à 20 lignes.

### Partie 2 – Étude d'un document (EC2, 5,5 points)
Un document statistique (tableau, graphique, carte…) et **deux questions** :
- une question de **lecture / calcul** : présente les données avec une phrase complète et rigoureuse (source, date, unité, lieu) ;
- une question d'**analyse** reliant le document à tes connaissances.

>! **Méthode de lecture** : « Selon l'Insee, en 2023 en France, 7,3 % des actifs étaient au chômage. » Toujours la source, la date, le lieu et l'unité.

### Partie 3 – Raisonnement s'appuyant sur un dossier documentaire (EC3, 9 points)
Un sujet et 2 ou 3 documents de natures différentes (texte, tableau, graphique). Tu construis une **argumentation** :
- une **courte introduction** (définitions, reformulation du sujet, annonce du plan) ;
- un développement en **parties** ou **paragraphes argumentés** (AEI : **A**ffirmer une idée, l'**E**xpliquer par un mécanisme, l'**I**llustrer par un exemple ou une donnée du dossier) ;
- une **courte conclusion**.
Tu dois **utiliser les documents** (citer des données précises) **et** tes **connaissances personnelles**.

Les trois parties portent sur trois questions différentes du programme et sur au moins deux champs (science économique ; sociologie et science politique ; regards croisés).

>! **Pour t'entraîner** : chaque chapitre du programme comporte un sujet d'EC3 avec son dossier documentaire ; des EC2 chiffrées figurent dans les chapitres « marché concurrentiel », « concurrence imparfaite », « défaillances du marché », « financement », « monnaie », « socialisation », « déviance » et « vote », et trois dissertations sont corrigées (chapitres « défaillances du marché », « socialisation » et « vote »). Dans ces sujets, les données marquées « fictives » servent seulement à l'entraînement.

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
        { type: "redaction", question: "**Entraînement au raisonnement (type EC3, sans dossier documentaire)** : À l'aide de tes connaissances, montre que les défaillances du marché justifient l'intervention des pouvoirs publics. Rédige une introduction et le plan détaillé de ton raisonnement.", corrige: `**Introduction**
- *Accroche* : selon Santé publique France (2021), près de 40 000 décès par an en France sont attribuables aux particules fines, sans que les pollueurs en paient le coût.
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
