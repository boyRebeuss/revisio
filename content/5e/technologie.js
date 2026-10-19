export default {
  chapitres: [
    {
      id: "besoin-objet-technique",
      titre: "Besoin, fonction d'usage et cahier des charges",
      theme: "Design, innovation et créativité",
      cours: `
## L'objet technique répond à un besoin
Un **objet technique** est un objet fabriqué par l'être humain pour répondre à un **besoin**. Une pierre ramassée par terre n'est pas un objet technique ; un marteau, oui.

Le **besoin** est ce qui est nécessaire ou désiré par l'utilisateur : se déplacer, s'éclairer, communiquer, conserver les aliments, se divertir...

>! Exemple : le besoin « se déplacer en ville rapidement et sans polluer » peut être satisfait par un vélo, une trottinette électrique, un tramway.

## La fonction d'usage
La **fonction d'usage** dit **à quoi sert** l'objet. On l'exprime par une phrase courte avec un verbe à l'infinitif.

| Objet | Fonction d'usage |
|---|---|
| Lampe de bureau | Éclairer un plan de travail |
| Réfrigérateur | Conserver les aliments au frais |
| Vélo | Permettre à une personne de se déplacer |
| Sèche-cheveux | Sécher les cheveux |

## La fonction d'estime
La **fonction d'estime** correspond à ce qui rend l'objet **agréable ou désirable** : couleur, forme, marque, matériau, design. Deux montres ont la même fonction d'usage (donner l'heure) mais pas la même fonction d'estime.

## Le cahier des charges
Avant de concevoir un objet, on rédige un **cahier des charges** : c'est le document qui liste **les fonctions que l'objet doit remplir** et **les contraintes** qu'il doit respecter.

Pour chaque fonction, on précise :
- un **critère** (ce qu'on mesure : masse, autonomie, prix, dimensions...) ;
- un **niveau** (la valeur attendue : moins de 2 kg, au moins 8 h, moins de 30 €...).

| Fonction | Critère | Niveau |
|---|---|---|
| Éclairer le bureau | Éclairement | au moins 500 lux |
| Être alimentée sur batterie | Autonomie | au moins 6 h |
| Être transportable | Masse | au plus 800 g |
| Être bon marché | Prix | au plus 25 € |

Les **contraintes** peuvent être : de sécurité, de coût, d'environnement (recyclage), de normes, d'esthétique, d'ergonomie (facile à utiliser).

## L'outil « bête à cornes »
Pour exprimer le besoin, on se pose trois questions :
1. **À qui** rend-il service ? (l'utilisateur)
2. **Sur quoi** agit-il ? (la matière d'œuvre)
3. **Dans quel but** ? (la fonction d'usage)

>! Exemple : un taille-crayon rend service à l'élève, agit sur le crayon, dans le but de tailler la mine.

> **À retenir** : un objet technique répond à un **besoin**. Sa **fonction d'usage** dit à quoi il sert, sa **fonction d'estime** ce qui le rend désirable. Le **cahier des charges** liste les fonctions et contraintes, avec des **critères** et des **niveaux** mesurables.
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces éléments est un objet technique ?", choix: ["Un galet sur la plage", "Une branche tombée", "Un ouvre-boîte", "Un coquillage"], reponse: 2, explication: "Seul l'ouvre-boîte a été fabriqué par l'être humain pour répondre à un besoin (ouvrir une boîte de conserve). Les autres sont des objets naturels." },
        { type: "vf", question: "La fonction d'usage d'un objet décrit sa couleur et sa forme.", reponse: false, explication: "Couleur et forme relèvent de la **fonction d'estime**. La fonction d'usage dit **à quoi sert** l'objet." },
        { type: "qcm", question: "Quelle est la fonction d'usage d'un réfrigérateur ?", choix: ["Conserver les aliments au frais", "Être de couleur blanche", "Consommer de l'électricité", "Faire du bruit"], reponse: 0, explication: "La fonction d'usage s'exprime par un verbe : conserver les aliments au frais. La couleur relève de l'estime, la consommation est une caractéristique, pas un but." },
        { type: "saisie", question: "Comment s'appelle le document qui liste les fonctions et les contraintes qu'un objet doit respecter avant sa conception ?", reponses: ["cahier des charges", "le cahier des charges", "un cahier des charges"], explication: "C'est le **cahier des charges** : il précise pour chaque fonction un critère et un niveau." },
        { type: "qcm", question: "Dans le cahier des charges « Autonomie : au moins 6 h », que représente « au moins 6 h » ?", choix: ["Le critère", "Le niveau", "La fonction d'usage", "La contrainte d'estime"], reponse: 1, explication: "Le **critère** est ce qu'on mesure (l'autonomie), le **niveau** est la valeur attendue (au moins 6 h)." },
        { type: "vf", question: "Deux objets peuvent avoir la même fonction d'usage mais des fonctions d'estime différentes.", reponse: true, explication: "Une montre de luxe et une montre en plastique donnent toutes deux l'heure (même fonction d'usage) mais n'ont pas le même aspect ni la même image (fonction d'estime différente)." },
        { type: "qcm", question: "Dans la bête à cornes d'une brosse à dents, « sur quoi agit-elle ? »", choix: ["Sur les dents", "Sur l'utilisateur", "Sur le dentifrice uniquement", "Sur le lavabo"], reponse: 0, explication: "La brosse à dents rend service à l'utilisateur, agit sur les dents, dans le but de les nettoyer." },
        { type: "redaction", question: "Une entreprise veut créer une gourde pour les collégiens. 1) Énonce le besoin et la fonction d'usage. 2) Remplis la bête à cornes. 3) Propose un extrait de cahier des charges avec au moins trois fonctions ou contraintes, chacune avec un critère et un niveau.", corrige: "1) **Besoin** : pouvoir boire de l'eau pendant la journée au collège. **Fonction d'usage** : contenir et transporter une boisson.\n\n2) **Bête à cornes** :\n- À qui rend-elle service ? Au collégien.\n- Sur quoi agit-elle ? Sur la boisson (l'eau).\n- Dans quel but ? Permettre de transporter et de boire de l'eau.\n\n3) **Extrait de cahier des charges** :\n\n| Fonction / contrainte | Critère | Niveau |\n|---|---|---|\n| Contenir la boisson | Volume | 50 cL |\n| Être étanche | Fuite quand on la renverse | aucune fuite |\n| Être légère | Masse à vide | au plus 200 g |\n| Respecter l'environnement | Matériau | réutilisable et recyclable (inox ou plastique sans BPA) |\n| Être abordable | Prix | au plus 15 € |\n\nChaque ligne doit avoir un critère **mesurable** et un niveau **chiffré ou vérifiable**." },
      ],
    },
    {
      id: "fonctions-solutions-techniques",
      titre: "Fonctions techniques et solutions techniques",
      theme: "Design, innovation et créativité",
      cours: `
## De la fonction d'usage aux fonctions techniques
Pour remplir sa fonction d'usage, un objet doit accomplir plusieurs actions internes : ce sont ses **fonctions techniques**. Elles s'expriment aussi avec un verbe à l'infinitif.

Pour chaque fonction technique, les concepteurs choisissent une **solution technique** : le composant, la pièce ou le principe qui réalise la fonction.

| Fonction technique (lampe torche) | Solution technique |
|---|---|
| Stocker l'énergie | Piles ou batterie |
| Commander l'allumage | Interrupteur |
| Transmettre l'énergie | Fils, lamelles métalliques |
| Produire la lumière | DEL (diode électroluminescente) |
| Protéger les composants | Boîtier en plastique ou en aluminium |

## Plusieurs solutions pour une même fonction
Une même fonction technique peut être réalisée par différentes solutions. On choisit selon le cahier des charges : coût, masse, solidité, impact environnemental...

>! Exemple : pour la fonction « freiner » d'un vélo, on peut utiliser des freins à patins (simples, peu chers) ou des freins à disque (plus efficaces sous la pluie, plus chers et plus lourds).

## Le diagramme FAST
Le **diagramme FAST** organise les fonctions de gauche à droite en répondant aux questions :
- **Pourquoi ?** (en lisant vers la gauche) ;
- **Comment ?** (en lisant vers la droite).

À gauche on place la fonction d'usage, au centre les fonctions techniques, à droite les solutions techniques.

>! Exemple (vélo) : Fonction d'usage « déplacer une personne » → comment ? « transmettre le mouvement des jambes à la roue » → comment ? « pédalier + chaîne + pignon ».

## Les liaisons entre pièces
Les solutions techniques assemblent des pièces. On distingue :
- la **liaison fixe** (encastrement) : les pièces ne bougent pas entre elles (vis, soudure, collage, rivet) ;
- la **liaison mobile** : une pièce peut tourner ou glisser par rapport à l'autre (charnière de porte = rotation, tiroir = glissière) ;
- liaison **démontable** (vis, clips) ou **non démontable** (soudure, colle, rivet).

> **À retenir** : la **fonction technique** est une action interne nécessaire à la fonction d'usage ; la **solution technique** est le moyen concret de la réaliser. Le **diagramme FAST** relie fonction d'usage, fonctions techniques et solutions en répondant aux questions « comment ? » et « pourquoi ? ».
`,
      exercices: [
        { type: "qcm", question: "Dans une lampe torche, quelle est la solution technique de la fonction « stocker l'énergie » ?", choix: ["L'interrupteur", "La DEL", "Les piles", "Le boîtier"], reponse: 2, explication: "Les piles (ou la batterie) stockent l'énergie. L'interrupteur commande, la DEL produit la lumière, le boîtier protège." },
        { type: "vf", question: "Une fonction technique ne peut être réalisée que par une seule solution technique.", reponse: false, explication: "Plusieurs solutions sont souvent possibles (freins à patins ou à disque, piles ou batterie...). On choisit selon le cahier des charges." },
        { type: "qcm", question: "Dans un diagramme FAST, en lisant de gauche à droite, on répond à la question :", choix: ["Pourquoi ?", "Quand ?", "Combien ?", "Comment ?"], reponse: 3, explication: "De gauche à droite on répond à « comment ? » ; de droite à gauche, à « pourquoi ? »." },
        { type: "qcm", question: "Une charnière de porte réalise une liaison :", choix: ["fixe", "mobile en rotation", "mobile en glissière", "collée"], reponse: 1, explication: "La porte tourne autour de l'axe de la charnière : c'est une liaison mobile en rotation." },
        { type: "saisie", question: "Comment appelle-t-on une liaison où les pièces ne peuvent pas bouger l'une par rapport à l'autre ? (un mot, synonyme d'encastrement)", reponses: ["fixe", "liaison fixe", "encastrement"], explication: "C'est une **liaison fixe** (ou encastrement), réalisée par vis, soudure, colle, rivet..." },
        { type: "vf", question: "Une soudure est une liaison non démontable.", reponse: true, explication: "On ne peut pas séparer deux pièces soudées sans les abîmer : la liaison est non démontable. Une vis, elle, est démontable." },
        { type: "qcm", question: "Quelle fonction technique d'un vélo est réalisée par la chaîne et les pignons ?", choix: ["Freiner", "Éclairer", "Supporter le cycliste", "Transmettre le mouvement à la roue arrière"], reponse: 3, explication: "La chaîne transmet le mouvement de rotation du pédalier à la roue arrière." },
        { type: "redaction", question: "On étudie un sèche-cheveux. Sa fonction d'usage est « sécher les cheveux ». 1) Cite quatre fonctions techniques. 2) Pour chacune, donne une solution technique. 3) Présente le tout sous forme de diagramme FAST décrit en texte (fonction d'usage → fonctions techniques → solutions).", corrige: "1) et 2) Fonctions techniques et solutions :\n\n| Fonction technique | Solution technique |\n|---|---|\n| Être alimenté en énergie | Cordon et prise électrique |\n| Commander la marche et la vitesse | Interrupteur à plusieurs positions |\n| Produire de la chaleur | Résistance chauffante |\n| Produire un flux d'air | Moteur électrique et hélice (ventilateur) |\n| Protéger l'utilisateur | Boîtier isolant en plastique, grille, thermostat de sécurité |\n\n3) **FAST** :\n- Sécher les cheveux → comment ?\n  - Être alimenté → cordon + prise\n  - Commander → interrupteur\n  - Souffler de l'air → moteur + hélice\n  - Chauffer l'air → résistance chauffante\n  - Protéger → boîtier isolant + thermostat\n\nEn lisant de droite à gauche : pourquoi une résistance ? pour chauffer l'air ; pourquoi chauffer l'air ? pour sécher les cheveux." },
      ],
    },
    {
      id: "materiaux",
      titre: "Les familles de matériaux et leurs propriétés",
      theme: "Matériaux",
      cours: `
## Les familles de matériaux
Les objets sont fabriqués à partir de **matériaux**, classés en grandes familles :

| Famille | Exemples | Origine |
|---|---|---|
| **Métaux** | acier (fer + carbone), aluminium, cuivre, zinc | minerais extraits du sol |
| **Matières plastiques** (polymères) | PET, PVC, polyéthylène, ABS, PLA | pétrole surtout ; PLA = maïs |
| **Matériaux organiques** (d'origine animale ou végétale) | bois, carton, papier, cuir, coton, laine | êtres vivants |
| **Céramiques et verres** | verre, porcelaine, terre cuite, béton | minéraux (sable, argile) |
| **Matériaux composites** | fibre de carbone, fibre de verre + résine, contreplaqué | assemblage de plusieurs matériaux |

## Les propriétés des matériaux
On choisit un matériau selon ses **propriétés** :
- **mécaniques** : dureté (résiste aux rayures), résistance (ne casse pas), élasticité (reprend sa forme), rigidité ;
- **physiques** : masse volumique (léger ou lourd), conductivité **électrique** (conducteur ou isolant), conductivité **thermique** (laisse passer la chaleur ou non) ;
- **chimiques** : résistance à la **corrosion** (rouille, oxydation) ;
- **esthétiques** : couleur, aspect, toucher ;
- **économiques et environnementales** : prix, recyclabilité, énergie nécessaire à la fabrication.

>! Exemple : un câble électrique a une âme en **cuivre** (très bon conducteur électrique) entourée d'une gaine en **PVC** (isolant électrique) pour protéger l'utilisateur.

## Masse volumique
La **masse volumique** ρ indique la masse d'un volume donné : ρ = m / V.

| Matériau | Masse volumique approximative |
|---|---|
| Bois (pin) | 0,5 g/cm³ |
| Plastique (PET) | 1,4 g/cm³ |
| Aluminium | 2,7 g/cm³ |
| Acier | 7,8 g/cm³ |
| Cuivre | 8,9 g/cm³ |

>! Exemple résolu : une pièce de 10 cm³ a une masse de 27 g. ρ = 27 ÷ 10 = 2,7 g/cm³ : c'est probablement de l'aluminium.

## Tester un matériau
On peut réaliser des tests simples : test de rayure (dureté), test de flexion (élasticité), test au circuit électrique avec une lampe (conductivité), test à l'aimant (seuls certains métaux comme le fer, l'acier, le nickel sont attirés).

> **À retenir** : cinq grandes familles : **métaux, plastiques, organiques, céramiques/verres, composites**. On choisit un matériau pour ses **propriétés** (mécaniques, électriques, thermiques, résistance à la corrosion, prix, recyclabilité) en fonction du cahier des charges.
`,
      exercices: [
        { type: "qcm", question: "À quelle famille appartient le bois ?", choix: ["Métaux", "Matières plastiques", "Matériaux organiques", "Céramiques"], reponse: 2, explication: "Le bois est d'origine végétale : c'est un matériau organique." },
        { type: "vf", question: "Le cuivre est un bon isolant électrique.", reponse: false, explication: "Le cuivre est au contraire un excellent **conducteur** électrique : c'est pour cela qu'on l'utilise dans les fils." },
        { type: "qcm", question: "Quel matériau est attiré par un aimant ?", choix: ["L'acier", "Le cuivre", "L'aluminium", "Le verre"], reponse: 0, explication: "L'acier contient du fer, attiré par l'aimant. L'aluminium et le cuivre sont des métaux mais ne sont pas attirés." },
        { type: "qcm", question: "La fibre de carbone noyée dans une résine est un matériau :", choix: ["composite", "organique", "céramique", "métallique"], reponse: 0, explication: "Elle associe plusieurs matériaux (fibres + résine) pour cumuler leurs qualités : c'est un composite." },
        { type: "saisie", question: "Une pièce a une masse de 78 g et un volume de 10 cm³. Calcule sa masse volumique en g/cm³ (nombre seul).", reponses: ["7,8 g/cm³", "7,8 g/cm3"], explication: "ρ = m ÷ V = 78 ÷ 10 = **7,8 g/cm³**, ce qui correspond à l'acier." },
        { type: "vf", question: "La plupart des matières plastiques sont fabriquées à partir du pétrole.", reponse: true, explication: "Oui, la majorité des polymères vient du pétrole. Certains, comme le PLA, sont biosourcés (maïs, canne à sucre)." },
        { type: "qcm", question: "Pourquoi les casseroles ont-elles souvent un manche en bois ou en plastique ?", choix: ["Parce que ces matériaux sont de mauvais conducteurs thermiques", "Parce que ces matériaux sont de bons conducteurs thermiques", "Pour que la casserole soit plus lourde", "Pour qu'elle rouille moins"], reponse: 0, explication: "Bois et plastique conduisent mal la chaleur (isolants thermiques) : on peut tenir le manche sans se brûler, alors que le fond métallique conduit bien la chaleur vers les aliments." },
        { type: "redaction", question: "On veut fabriquer le cadre d'un vélo de ville. Le cahier des charges demande : être léger, résister aux chocs, ne pas rouiller, coût modéré. 1) Compare l'acier, l'aluminium et la fibre de carbone (masse volumique, résistance à la corrosion, prix). 2) Justifie ton choix.", corrige: "1) **Comparaison** :\n\n| Critère | Acier | Aluminium | Fibre de carbone |\n|---|---|---|---|\n| Masse volumique | 7,8 g/cm³ (lourd) | 2,7 g/cm³ (léger) | environ 1,6 g/cm³ (très léger) |\n| Corrosion | rouille si non protégé | ne rouille pas (couche d'oxyde protectrice) | ne rouille pas |\n| Résistance aux chocs | très bonne | bonne | peut se fissurer sous un choc ponctuel |\n| Prix | faible | modéré | élevé |\n| Recyclage | facile | facile | difficile |\n\n2) **Choix** : l'**aluminium** répond le mieux au cahier des charges : il est près de trois fois plus léger que l'acier, ne rouille pas, résiste bien aux chocs du quotidien et reste d'un coût modéré. La fibre de carbone est plus légère mais trop chère et difficile à recycler ; l'acier est solide et bon marché mais lourd et sensible à la rouille." },
      ],
    },
    {
      id: "energie-objets",
      titre: "L'énergie dans les objets : sources et chaîne d'énergie",
      theme: "Énergie et objets techniques",
      cours: `
## Sources et formes d'énergie
Un objet technique a besoin d'**énergie** pour fonctionner. On distingue :
- les **sources d'énergie renouvelables** (qui se renouvellent rapidement à l'échelle humaine) : soleil, vent, eau (hydraulique), biomasse (bois), géothermie, marées ;
- les **sources non renouvelables** (stocks limités) : pétrole, gaz naturel, charbon (énergies fossiles), uranium (nucléaire).

Les principales **formes** d'énergie : électrique, mécanique (mouvement), thermique (chaleur), lumineuse (rayonnement), chimique (piles, carburant), nucléaire.

## Convertir l'énergie
Un **convertisseur** transforme une forme d'énergie en une autre :

| Convertisseur | Énergie reçue | Énergie produite (utile) |
|---|---|---|
| Moteur électrique | électrique | mécanique |
| Lampe (DEL) | électrique | lumineuse |
| Panneau photovoltaïque | lumineuse | électrique |
| Éolienne (alternateur) | mécanique (vent) | électrique |
| Pile | chimique | électrique |
| Radiateur électrique | électrique | thermique |

Une partie de l'énergie est toujours **perdue**, souvent sous forme de chaleur.

## La chaîne d'énergie
Dans un objet, l'énergie suit une **chaîne d'énergie** en quatre fonctions :
1. **Alimenter** : fournir l'énergie (pile, batterie, prise secteur, panneau solaire) ;
2. **Distribuer** : laisser passer ou non l'énergie (interrupteur, relais, transistor, variateur) ;
3. **Convertir** : transformer l'énergie (moteur, lampe, résistance chauffante) ;
4. **Transmettre** : amener l'énergie mécanique jusqu'à l'endroit utile (engrenages, courroie, chaîne, poulies, axe).

>! Exemple (ventilateur) : prise secteur (alimenter) → interrupteur (distribuer) → moteur (convertir) → axe (transmettre) → hélice qui brasse l'air.

## Puissance et énergie
La **puissance** P se mesure en **watts (W)**. L'énergie consommée dépend de la puissance et de la durée : **E = P × t**.
- avec P en W et t en heures, E est en **wattheures (Wh)** ;
- 1 kWh = 1 000 Wh.

>! Exemple résolu : une lampe de 10 W allumée 5 h consomme E = 10 × 5 = 50 Wh. Un radiateur de 2 000 W allumé 3 h consomme 6 000 Wh = 6 kWh.

> **À retenir** : sources **renouvelables** ou **non renouvelables** ; chaîne d'énergie : **alimenter → distribuer → convertir → transmettre** ; **E = P × t** (Wh si P en W et t en h).
`,
      exercices: [
        { type: "qcm", question: "Laquelle de ces sources d'énergie est renouvelable ?", choix: ["Le charbon", "Le gaz naturel", "Le vent", "L'uranium"], reponse: 2, explication: "Le vent se renouvelle en permanence. Charbon et gaz sont des énergies fossiles, l'uranium est un minerai en quantité limitée." },
        { type: "qcm", question: "Un moteur électrique convertit l'énergie électrique en énergie :", choix: ["lumineuse", "chimique", "nucléaire", "mécanique"], reponse: 3, explication: "Le moteur produit un mouvement de rotation : énergie mécanique (avec un peu de chaleur perdue)." },
        { type: "vf", question: "Dans la chaîne d'énergie, l'interrupteur réalise la fonction « distribuer ».", reponse: true, explication: "L'interrupteur laisse passer ou coupe l'énergie : il **distribue**." },
        { type: "qcm", question: "Dans une perceuse sans fil, quel composant réalise la fonction « alimenter » ?", choix: ["La gâchette", "Le moteur", "La batterie", "Le mandrin"], reponse: 2, explication: "La batterie fournit l'énergie. La gâchette distribue, le moteur convertit, les engrenages et le mandrin transmettent." },
        { type: "saisie", question: "Une console de 150 W fonctionne 2 h. Quelle énergie consomme-t-elle, en Wh ? (nombre seul)", reponses: ["300 Wh"], explication: "E = P × t = 150 × 2 = **300 Wh** (soit 0,3 kWh)." },
        { type: "vf", question: "Un panneau photovoltaïque convertit l'énergie lumineuse en énergie électrique.", reponse: true, explication: "C'est exact : les cellules photovoltaïques produisent du courant électrique quand elles reçoivent de la lumière." },
        { type: "saisie", question: "Un four de 2 500 W fonctionne pendant 2 h. Quelle énergie consomme-t-il en kWh ? (nombre seul)", reponses: ["5 kWh"], explication: "E = 2 500 × 2 = 5 000 Wh = **5 kWh**." },
        { type: "redaction", question: "Un portail automatique est alimenté par le secteur. Une carte électronique commande un relais qui alimente un moteur ; le moteur entraîne un pignon et une crémaillère qui font glisser le portail. 1) Décris la chaîne d'énergie en associant chaque composant à sa fonction. 2) Indique les formes d'énergie à l'entrée et à la sortie du moteur. 3) Le moteur a une puissance de 300 W et fonctionne 20 minutes par jour. Calcule l'énergie consommée en un jour puis en 30 jours, en Wh.", corrige: "1) **Chaîne d'énergie** :\n- Alimenter : le réseau électrique (secteur) ;\n- Distribuer : le relais (commandé par la carte électronique) ;\n- Convertir : le moteur électrique ;\n- Transmettre : le pignon et la crémaillère, qui transforment la rotation en translation du portail.\n\n2) Le moteur reçoit de l'énergie **électrique** et fournit de l'énergie **mécanique** (rotation), avec des pertes sous forme de chaleur.\n\n3) 20 min = 20/60 h = 1/3 h.\n- Par jour : E = 300 × 1/3 = **100 Wh**.\n- En 30 jours : 100 × 30 = **3 000 Wh**, soit 3 kWh." },
      ],
    },
    {
      id: "chaine-information",
      titre: "La chaîne d'information : capteurs et actionneurs",
      theme: "Énergie et objets techniques",
      cours: `
## Les objets qui « réagissent »
Beaucoup d'objets modernes réagissent à leur environnement : un éclairage qui s'allume quand il fait nuit, une porte qui s'ouvre quand on approche. Ils possèdent une **chaîne d'information**.

## Les trois fonctions de la chaîne d'information
1. **Acquérir** : prélever une information grâce à un **capteur** (ou une interface comme un bouton) ;
2. **Traiter** : analyser l'information et décider, grâce à un programme dans un **microcontrôleur** (carte programmable) ;
3. **Communiquer** : transmettre un ordre à la chaîne d'énergie ou une information à l'utilisateur (écran, voyant, son, signal radio).

## Les capteurs
Un **capteur** transforme une grandeur physique en signal électrique.

| Capteur | Grandeur détectée |
|---|---|
| Bouton-poussoir, interrupteur de fin de course | appui, contact |
| Capteur de lumière (photorésistance) | luminosité |
| Capteur de température (thermistance) | température |
| Détecteur de présence infrarouge (PIR) | mouvement d'une personne |
| Capteur à ultrasons | distance |
| Microphone | son |
| Capteur d'humidité | humidité |

Un signal est **logique** (tout ou rien : 0 ou 1, comme un bouton) ou **analogique** (valeur variable, comme une température).

## Les actionneurs
Un **actionneur** agit sur l'environnement en convertissant de l'énergie : moteur, vérin, lampe, DEL, buzzer, haut-parleur, résistance chauffante. L'actionneur appartient à la chaîne d'énergie (fonction « convertir »), mais il reçoit ses ordres de la chaîne d'information.

## Lien entre les deux chaînes
>! Exemple (éclairage automatique) : capteur de lumière et détecteur de présence (acquérir) → carte programmable (traiter) → ordre envoyé au relais (communiquer) → le relais distribue l'énergie → la lampe s'allume (convertir).

> **À retenir** : chaîne d'information : **acquérir (capteur) → traiter (microcontrôleur) → communiquer (ordre ou message)**. Le **capteur** prélève une information, l'**actionneur** agit. La chaîne d'information **commande** la chaîne d'énergie.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la fonction d'un capteur ?", choix: ["Traiter l'information", "Acquérir une information", "Convertir l'énergie électrique en mouvement", "Stocker l'énergie"], reponse: 1, explication: "Le capteur **acquiert** une information (température, lumière, présence...) et la transforme en signal électrique." },
        { type: "qcm", question: "Lequel de ces composants est un actionneur ?", choix: ["Un moteur", "Un détecteur de présence", "Une thermistance", "Un bouton-poussoir"], reponse: 0, explication: "Le moteur agit sur l'environnement (mouvement). Les trois autres sont des capteurs." },
        { type: "vf", question: "Un bouton-poussoir délivre un signal logique (tout ou rien).", reponse: true, explication: "Il est soit appuyé (1), soit relâché (0) : c'est un signal logique." },
        { type: "saisie", question: "Quel est le nom de la fonction de la chaîne d'information réalisée par le microcontrôleur (programme) ?", reponses: ["traiter", "traitement", "traiter l'information", "traiter les informations", "traitement de l'information", "traiter l'info"], explication: "Le microcontrôleur exécute le programme qui **traite** l'information et prend une décision." },
        { type: "qcm", question: "Quel capteur utiliser pour qu'un robot mesure la distance d'un obstacle ?", choix: ["Un capteur à ultrasons", "Un microphone", "Une thermistance", "Un capteur d'humidité"], reponse: 0, explication: "Le capteur à ultrasons émet un son très aigu et mesure le temps de retour de l'écho, ce qui donne la distance." },
        { type: "vf", question: "La chaîne d'information commande la chaîne d'énergie.", reponse: true, explication: "Oui : après traitement, la chaîne d'information envoie un ordre au distributeur (relais, transistor) de la chaîne d'énergie." },
        { type: "qcm", question: "Un thermomètre de salle de bain affiche la température sur un écran. L'écran réalise la fonction :", choix: ["communiquer", "traiter", "acquérir", "alimenter"], reponse: 0, explication: "L'écran transmet l'information à l'utilisateur : il **communique**." },
        { type: "redaction", question: "Une serre automatique ouvre une fenêtre quand la température dépasse 28 °C et arrose les plantes quand le sol est trop sec. 1) Identifie les capteurs et les actionneurs. 2) Décris la chaîne d'information (acquérir, traiter, communiquer). 3) Décris la chaîne d'énergie qui ouvre la fenêtre.", corrige: "1) **Capteurs** : capteur de température (thermistance), capteur d'humidité du sol. **Actionneurs** : moteur (ou vérin) qui ouvre la fenêtre, pompe (ou électrovanne) d'arrosage.\n\n2) **Chaîne d'information** :\n- Acquérir : le capteur de température mesure l'air, le capteur d'humidité mesure le sol ;\n- Traiter : la carte programmable compare : si température supérieure à 28 °C alors ouvrir la fenêtre ; si humidité trop faible alors arroser ;\n- Communiquer : la carte envoie l'ordre aux relais (et peut afficher les valeurs sur un écran).\n\n3) **Chaîne d'énergie de la fenêtre** :\n- Alimenter : secteur ou batterie (éventuellement rechargée par panneau solaire) ;\n- Distribuer : relais commandé par la carte ;\n- Convertir : moteur électrique (énergie électrique → mécanique) ;\n- Transmettre : engrenages et bras (ou vis) qui poussent la fenêtre." },
      ],
    },
    {
      id: "evolution-objets",
      titre: "L'évolution des objets techniques",
      theme: "Les objets techniques, les services et les changements induits dans la société",
      cours: `
## Pourquoi les objets évoluent
Les objets techniques changent au cours du temps grâce :
- aux **progrès scientifiques et techniques** (électricité, électronique, informatique) ;
- aux **nouveaux matériaux** (plastiques, aluminium, composites) ;
- aux **nouvelles sources d'énergie** (vapeur, pétrole, électricité, batteries lithium) ;
- à l'évolution des **besoins** et des **modes de vie** ;
- aux exigences **environnementales** et de **sécurité**.

## Lignée d'objets
Une **lignée** (ou famille) d'objets regroupe des objets qui ont la **même fonction d'usage** à différentes époques.

>! Exemple (s'éclairer) : torche et lampe à huile (Antiquité) → bougie → lampe à pétrole (XIXe siècle) → ampoule à incandescence (Edison, 1879) → tube fluorescent → lampe fluocompacte → lampe à DEL (années 2010).

>! Exemple (écouter de la musique) : phonographe (fin XIXe) → disque vinyle et électrophone → cassette audio et baladeur (1979) → CD (1982) → lecteur MP3 → streaming sur smartphone.

## Rupture et innovation
- Une **évolution** améliore l'objet sans changer son principe (vélo avec dérailleur, meilleurs freins).
- Une **rupture technologique** (ou innovation de rupture) change le principe de fonctionnement (passage de la bougie à l'ampoule électrique, de l'argentique au numérique en photographie).
- Une **invention** est une idée nouvelle ; une **innovation** est une invention qui est commercialisée et adoptée.

## Les conséquences sur la société
Les objets modifient nos modes de vie : le téléphone portable change la communication, la machine à laver libère du temps, la voiture change l'urbanisme. Ils ont aussi des conséquences sur l'environnement (pollution, déchets, consommation de ressources) et sur la santé.

## Repères chronologiques
| Période | Exemples |
|---|---|
| Préhistoire | outils en pierre, feu |
| Antiquité | roue, poterie, outils en bronze puis en fer |
| XVIIIe–XIXe siècle | machine à vapeur, révolution industrielle, train |
| XXe siècle | électricité dans les foyers, automobile, avion, radio, télévision, ordinateur |
| XXIe siècle | smartphone, objets connectés, impression 3D, voitures électriques |

> **À retenir** : une **lignée** regroupe des objets de même fonction d'usage à différentes époques. Les objets évoluent grâce aux progrès techniques, aux matériaux, aux énergies et aux besoins. Une **innovation** est une invention adoptée par la société ; une **rupture** change le principe de fonctionnement.
`,
      exercices: [
        { type: "qcm", question: "Quel objet est le plus récent dans la lignée des objets d'éclairage ?", choix: ["La lampe à pétrole", "L'ampoule à incandescence", "La lampe à DEL", "La bougie"], reponse: 2, explication: "Ordre : bougie → lampe à pétrole → ampoule à incandescence → lampe à DEL (la plus récente)." },
        { type: "vf", question: "Les objets d'une même lignée ont la même fonction d'usage.", reponse: true, explication: "C'est la définition : ils répondent au même besoin, à des époques différentes." },
        { type: "qcm", question: "Le passage de la photographie argentique (pellicule) à la photographie numérique est :", choix: ["une simple évolution esthétique", "un changement de fonction d'usage", "un retour en arrière", "une rupture technologique"], reponse: 3, explication: "Le principe change complètement (capteur électronique au lieu d'une pellicule chimique) : c'est une rupture technologique. La fonction d'usage (prendre des photos) reste la même." },
        { type: "saisie", question: "Comment appelle-t-on une invention qui a été commercialisée et adoptée par les utilisateurs ?", reponses: ["innovation", "une innovation"], explication: "Une **innovation** est une invention qui rencontre son public sur le marché." },
        { type: "qcm", question: "Quel événement a marqué les XVIIIe et XIXe siècles ?", choix: ["L'invention du smartphone", "La révolution industrielle et la machine à vapeur", "L'invention de la roue", "L'impression 3D"], reponse: 1, explication: "La machine à vapeur a lancé la révolution industrielle (usines, train)." },
        { type: "vf", question: "L'évolution des objets n'a aucune conséquence sur l'environnement.", reponse: false, explication: "Au contraire : fabrication, utilisation et fin de vie des objets consomment des ressources et produisent des déchets et des pollutions." },
        { type: "qcm", question: "Lequel de ces facteurs n'explique PAS directement l'évolution des objets ?", choix: ["L'apparition de nouveaux matériaux", "Les nouveaux besoins des utilisateurs", "Les progrès de l'électronique", "La couleur du ciel"], reponse: 3, explication: "La couleur du ciel n'a rien à voir. Les matériaux, les besoins et les progrès techniques font évoluer les objets." },
        { type: "redaction", question: "Étudie la lignée des objets permettant de communiquer à distance : lettre portée par messager, télégraphe, téléphone fixe, téléphone portable, smartphone. 1) Range-les dans l'ordre chronologique et donne une date ou une période approximative pour chacun. 2) Identifie une rupture technologique et justifie. 3) Cite deux conséquences (une positive, une négative) du smartphone sur la société ou l'environnement.", corrige: "1) **Ordre chronologique** :\n- Lettre portée par messager : depuis l'Antiquité ;\n- Télégraphe : XIXe siècle (télégraphe électrique, Morse, années 1840) ;\n- Téléphone fixe : fin du XIXe siècle (Bell, 1876) ;\n- Téléphone portable : années 1980–1990 ;\n- Smartphone : années 2000 (succès massif à partir de 2007).\n\n2) **Rupture** : le passage du messager au télégraphe électrique. Le message n'est plus transporté physiquement mais transmis par un signal électrique, presque instantanément. (On peut aussi citer le passage du fixe filaire au portable, qui utilise les ondes radio.)\n\n3) **Conséquences** :\n- Positive : on peut communiquer partout, instantanément, accéder à l'information et appeler les secours.\n- Négative : fabrication gourmande en métaux rares et en énergie, déchets électroniques difficiles à recycler ; risques de dépendance aux écrans." },
      ],
    },
    {
      id: "croquis-representation",
      titre: "Croquis, schémas et modélisation 3D",
      theme: "Modélisation et simulation des objets techniques",
      cours: `
## Pourquoi représenter un objet ?
Pour **imaginer**, **communiquer** et **fabriquer** un objet, on le représente. Chaque représentation a son usage.

## Le croquis
Le **croquis** est un dessin rapide, **à main levée**, sans règle. Il sert à exprimer une idée, à chercher une solution. Il n'est pas forcément à l'échelle, mais il doit être lisible et peut être annoté (légendes, cotes approximatives, matériaux).

## Le schéma
Le **schéma** représente le fonctionnement de façon **simplifiée** à l'aide de **symboles normalisés**. Il ne montre pas l'aspect réel de l'objet.

>! Exemple : le schéma électrique d'une lampe torche montre une pile, un interrupteur et une lampe reliés par des traits, avec leurs symboles normalisés.

| Composant | Symbole (description) |
|---|---|
| Pile | un grand trait (borne +) et un petit trait épais (borne −) |
| Lampe | un cercle avec une croix |
| Interrupteur ouvert | un trait levé entre deux points |
| Moteur | un cercle avec la lettre M |
| DEL | un triangle avec une barre, et deux petites flèches sortantes |

## Le dessin technique et la perspective
Le **dessin technique** est précis, à l'échelle, réalisé avec des instruments ou un logiciel. On y indique les **cotes** (dimensions en mm). La **perspective** permet de représenter un objet en 3 dimensions sur une feuille.

L'**échelle** relie les dimensions du dessin aux dimensions réelles : à l'échelle 1:2, 1 cm sur le dessin = 2 cm en vrai ; à l'échelle 2:1, l'objet est dessiné deux fois plus grand.

>! Exemple résolu : à l'échelle 1:5, une pièce dessinée de 4 cm mesure en réalité 4 × 5 = 20 cm.

## Lire un dessin coté
- Les **cotes** sont toujours les **dimensions réelles** de la pièce, en **millimètres**, quelle que soit l'échelle du dessin. On n'écrit pas l'unité.
- Une cote est écrite au-dessus d'une **ligne de cote** terminée par deux flèches, reliée à la pièce par des **lignes d'attache**.
- **Ø 10** signifie « diamètre 10 mm » (un trou ou un cylindre) ; **R 5** signifie « rayon 5 mm » (un arrondi).
- Types de traits : **trait continu fort** = arête visible ; **trait interrompu court** (pointillés) = arête **cachée** ; **trait mixte fin** (trait-point) = **axe** de symétrie ou centre d'un trou.
- Un objet est souvent représenté par plusieurs **vues** : vue de **face**, vue de **dessus** (placée **sous** la vue de face), vue de **gauche** (placée **à droite** de la vue de face). C'est la disposition européenne.

>! **Exemple décrit** : vue de face d'une plaque rectangulaire. Cote horizontale en bas : 120. Cote verticale à gauche : 40. Un trou Ø 8 dont le centre est coté 15 depuis le bord gauche et 20 depuis le bord du bas. Lecture : la plaque mesure **120 mm × 40 mm** ; le trou a un rayon de 4 mm ; son centre est à 15 mm du bord gauche et à mi-hauteur (40 ÷ 2 = 20 mm). Sur la vue de dessus, le trou apparaît en traits interrompus (arêtes cachées) avec un trait mixte pour son axe.

## La modélisation 3D (initiation)
Un **logiciel de modélisation 3D** (CAO : conception assistée par ordinateur) permet de créer un **modèle numérique** de l'objet :
1. on dessine une **esquisse** 2D (rectangle, cercle) ;
2. on l'**extrude** (on lui donne une épaisseur) pour obtenir un volume ;
3. on ajoute ou on enlève de la matière (perçage, congé, assemblage de formes simples) ;
4. on peut faire pivoter la vue, mesurer, assembler plusieurs pièces, simuler.

Le modèle 3D peut ensuite être envoyé à une **imprimante 3D** (fabrication par ajout de couches de plastique) ou à une machine de découpe.

> **À retenir** : **croquis** = dessin rapide à main levée pour exprimer une idée ; **schéma** = représentation simplifiée avec symboles normalisés ; **dessin technique** = précis, à l'échelle, coté ; **modèle 3D** = représentation numérique créée par esquisse + extrusion.
`,
      exercices: [
        { type: "qcm", question: "Quelle représentation est réalisée à main levée pour exprimer rapidement une idée ?", choix: ["Le schéma électrique", "Le croquis", "Le modèle 3D", "Le dessin technique coté"], reponse: 1, explication: "Le croquis est un dessin rapide, sans instrument, pour communiquer une idée." },
        { type: "vf", question: "Un schéma électrique montre l'aspect réel des composants.", reponse: false, explication: "Le schéma utilise des **symboles normalisés** simplifiés, il ne montre pas l'aspect réel." },
        { type: "qcm", question: "Dans un logiciel de modélisation 3D, quelle opération transforme une esquisse 2D en volume ?", choix: ["L'extrusion", "La rotation de la vue", "L'impression", "La cotation"], reponse: 0, explication: "L'extrusion donne une épaisseur à l'esquisse et crée un volume." },
        { type: "saisie", question: "À l'échelle 1:5, une pièce mesure 4 cm sur le dessin. Quelle est sa longueur réelle en cm ? (nombre seul)", reponses: ["20 cm"], explication: "Longueur réelle = 4 × 5 = **20 cm**." },
        { type: "qcm", question: "Le symbole « cercle avec la lettre M » représente :", choix: ["une lampe", "un moteur", "une pile", "un interrupteur"], reponse: 1, explication: "M pour moteur. La lampe est un cercle avec une croix." },
        { type: "saisie", question: "À l'échelle 2:1, une vis réelle de 15 mm de long est dessinée avec quelle longueur en mm ? (nombre seul)", reponses: ["30 mm"], explication: "À l'échelle 2:1, le dessin est 2 fois plus grand : 15 × 2 = **30 mm**." },
        { type: "vf", question: "Un modèle 3D peut être envoyé à une imprimante 3D pour fabriquer la pièce.", reponse: true, explication: "Le fichier numérique est découpé en couches que l'imprimante dépose une à une." },
        { type: "redaction", question: "Tu dois concevoir un porte-crayons. 1) Explique à quoi servent successivement le croquis, le schéma ou dessin coté, et le modèle 3D dans ce projet. 2) Décris les étapes pour modéliser en 3D un porte-crayons cylindrique de 8 cm de diamètre et 10 cm de haut, avec un trou de 7 cm de diamètre et 9 cm de profondeur.", corrige: "1) **Rôle de chaque représentation** :\n- Le **croquis** permet de chercher rapidement plusieurs idées de forme et de les montrer au groupe pour choisir.\n- Le **dessin coté** fixe les dimensions précises (diamètres, hauteur, épaisseur) pour que tout le monde fabrique la même pièce.\n- Le **modèle 3D** permet de visualiser l'objet sous tous les angles, de vérifier les dimensions et de l'envoyer à l'imprimante 3D.\n\n2) **Étapes de modélisation** :\n1. Créer une esquisse : un cercle de 8 cm de diamètre.\n2. Extruder ce cercle de 10 cm : on obtient un cylindre plein.\n3. Sur la face du dessus, dessiner un cercle concentrique de 7 cm de diamètre.\n4. Faire une extrusion en enlèvement de matière (perçage) de 9 cm de profondeur.\n5. Vérifier : la paroi fait (8 − 7) ÷ 2 = 0,5 cm d'épaisseur et le fond 10 − 9 = 1 cm.\n6. Exporter le fichier pour l'impression 3D." },
        { type: "qcm", question: "Sur un dessin technique, une cote est inscrite sans unité : « 45 ». Dans quelle unité est-elle exprimée ?", choix: ["En centimètres", "En mètres", "En millimètres", "Cela dépend de l'échelle"], reponse: 2, explication: "Par convention, les cotes sont en **millimètres** et on n'écrit pas l'unité. Elles indiquent la dimension réelle, quelle que soit l'échelle." },
        { type: "saisie", question: "Sur un dessin coté, un trou est noté « Ø 12 ». Quel est le rayon de ce trou, en mm ?", reponses: ["6 mm", "6 millimètres"], explication: "Ø signifie **diamètre** : 12 mm. Le rayon est la moitié du diamètre : 12 ÷ 2 = **6 mm**." },
        { type: "qcm", question: "Sur une vue, une arête cachée (qu'on ne voit pas de ce côté de la pièce) est dessinée en :", choix: ["trait continu fort", "trait interrompu court", "trait mixte fin", "trait ondulé"], reponse: 1, explication: "Les arêtes **cachées** sont en **traits interrompus courts** (pointillés). Le trait continu fort sert aux arêtes visibles, le trait mixte fin aux axes." },
        { type: "vf", question: "Sur un dessin à l'échelle 1:2, la cote inscrite « 60 » signifie que la pièce réelle mesure 120 mm.", reponse: false, explication: "Les cotes indiquent toujours la **dimension réelle** : la pièce mesure **60 mm**. Sur le papier, le trait mesure 30 mm (60 ÷ 2), mais la cote reste 60. Erreur fréquente : appliquer l'échelle à la cote." },
        { type: "saisie", question: "Dessin coté décrit : une réglette de longueur 120 porte deux trous Ø 8. Le centre du trou de gauche est coté 15 depuis le bord gauche, celui du trou de droite 15 depuis le bord droit. Quelle est la distance entre les centres des deux trous (l'entraxe), en mm ?", reponses: ["90 mm", "90 millimètres"], explication: "Entraxe = longueur totale − les deux distances aux bords : 120 − 15 − 15 = **90 mm**. Le diamètre des trous n'intervient pas, car les cotes sont prises à leur centre." },
        { type: "qcm", question: "Dans la disposition européenne des vues, où place-t-on la vue de dessus ?", choix: ["Au-dessus de la vue de face", "Sous la vue de face", "À gauche de la vue de face", "Sur une autre feuille"], reponse: 1, explication: "En disposition européenne, la vue de **dessus** se place **sous** la vue de face, et la vue de **gauche** se place **à droite** de la vue de face. C'est contre-intuitif : à bien retenir." },
        { type: "redaction", question: "Dessin coté décrit d'une plaque de support en aluminium : vue de face rectangulaire, cote horizontale 100, cote verticale 60 ; vue de dessus : épaisseur 4. Au centre de la plaque, un trou Ø 20 traverse toute l'épaisseur ; il est coté 50 depuis le bord gauche et 30 depuis le bord du bas. 1) Donne les dimensions hors tout de la plaque et explique pourquoi le trou est bien au centre. 2) Comment le trou apparaît-il sur la vue de dessus ? 3) Calcule le volume de matière de la plaque en cm³ (prends π ≈ 3,14), puis sa masse sachant que la masse volumique de l'aluminium est 2,7 g/cm³.", corrige: `1) **Dimensions hors tout** : 100 mm × 60 mm × 4 mm. Le centre du trou est à 50 mm du bord gauche (100 ÷ 2 = 50) et à 30 mm du bord du bas (60 ÷ 2 = 30) : il est donc au **centre** de la plaque.

2) Sur la **vue de dessus**, on ne voit pas le trou : il est représenté par deux **traits interrompus courts** (ses arêtes cachées, distants de 20 mm, sur toute l'épaisseur) et un **trait mixte fin** pour son axe.

3) **Volume** :
- plaque pleine : 100 × 60 × 4 = 24 000 mm³ ;
- trou (cylindre de rayon 10 mm, hauteur 4 mm) : 3,14 × 10 × 10 × 4 = 1 256 mm³ ;
- volume de matière : 24 000 − 1 256 = 22 744 mm³ ≈ **22,7 cm³** (1 cm³ = 1 000 mm³).

**Masse** : m = ρ × V = 2,7 × 22,7 ≈ **61 g**.

> Méthode : lire les cotes (en mm, dimensions réelles), repérer Ø (diamètre) et R (rayon), convertir les mm³ en cm³ avant d'utiliser une masse volumique en g/cm³.` },
      ],
    },
    {
      id: "programmation-blocs",
      titre: "Algorithmes et programmation par blocs",
      theme: "Informatique et programmation",
      cours: `
## Algorithme et programme
Un **algorithme** est une suite finie d'instructions ordonnées permettant de résoudre un problème. Une recette de cuisine est un algorithme.

Un **programme** est la traduction d'un algorithme dans un langage compris par la machine. Au collège, on utilise des **langages par blocs** (comme Scratch) : on assemble des blocs qui s'emboîtent.

## Les structures de base
### La séquence
Les instructions s'exécutent **dans l'ordre**, de haut en bas.

>! Exemple : « avancer de 50 pas », puis « tourner de 90 degrés », puis « avancer de 50 pas ».

### La boucle (répétition)
Elle répète des instructions :
- **répéter n fois** : nombre de répétitions connu ;
- **répéter jusqu'à** une condition : on s'arrête quand la condition devient vraie ;
- **répéter indéfiniment** : la boucle ne s'arrête jamais (utile pour surveiller un capteur en permanence).

>! Exemple résolu : pour tracer un carré, « répéter 4 fois : avancer de 100, tourner de 90 degrés ». Pour un triangle équilatéral : « répéter 3 fois : avancer de 100, tourner de 120 degrés ». Pour un polygone régulier à n côtés, on tourne de 360 ÷ n degrés.

### La condition (instruction conditionnelle)
**si** condition **alors** actions **sinon** autres actions. La condition est vraie ou fausse.

>! Exemple : « si la luminosité est inférieure à 30 alors allumer la lampe sinon éteindre la lampe ».

### La variable
Une **variable** est une « boîte » nommée qui contient une valeur pouvant changer : score, nombre de vies, température mesurée. On peut la **mettre à** une valeur ou l'**ajouter** (« ajouter 1 à score »).

### L'événement
Un **événement** déclenche un script : « quand le drapeau vert est cliqué », « quand la touche espace est pressée », « quand je reçois un message », « quand le capteur détecte un objet ».

## Exécuter un programme pas à pas
Pour vérifier un programme, on suit la valeur des variables à chaque étape.

>! Exemple : score = 0 ; répéter 3 fois : ajouter 2 à score. Étapes : 2, 4, 6 → score final = 6.

## Les erreurs (bugs)
Un **bug** est une erreur dans un programme. On le cherche en testant, en exécutant pas à pas et en vérifiant l'ordre des blocs.

> **À retenir** : un algorithme est une suite d'instructions. Structures : **séquence**, **boucle** (répéter n fois / jusqu'à / indéfiniment), **condition** (si... alors... sinon), **variable** (valeur qui change), **événement** (déclencheur). Pour un polygone régulier à n côtés : tourner de 360 ÷ n degrés.
`,
      exercices: [
        { type: "qcm", question: "Quelle structure permet de répéter des instructions ?", choix: ["La condition", "La boucle", "La variable", "L'événement"], reponse: 1, explication: "La boucle (répéter n fois, jusqu'à, indéfiniment) répète un bloc d'instructions." },
        { type: "saisie", question: "Pour tracer un hexagone régulier (6 côtés) avec un lutin, de combien de degrés doit-il tourner après chaque côté ? (nombre seul)", reponses: ["60 degrés"], explication: "360 ÷ 6 = **60 degrés**." },
        { type: "vf", question: "« Quand le drapeau vert est cliqué » est un bloc d'événement.", reponse: true, explication: "Ce bloc déclenche le script lorsqu'un événement se produit (le clic sur le drapeau)." },
        { type: "saisie", question: "score = 5. Le programme exécute : répéter 4 fois « ajouter 3 à score ». Quelle est la valeur finale de score ?", reponses: ["17"], explication: "5 + 4 × 3 = 5 + 12 = **17**." },
        { type: "qcm", question: "Un robot doit s'arrêter quand il détecte un obstacle à moins de 10 cm. Quelle boucle est la plus adaptée ?", choix: ["répéter 10 fois", "répéter 0 fois", "aucune boucle", "répéter jusqu'à distance inférieure à 10"], reponse: 3, explication: "On ne sait pas combien de fois avancer : on répète **jusqu'à** ce que la condition (obstacle proche) soit vraie." },
        { type: "qcm", question: "Programme : « si température supérieure à 25 alors allumer ventilateur sinon éteindre ventilateur ». La température vaut 22. Que se passe-t-il ?", choix: ["Le ventilateur s'allume", "Le ventilateur s'éteint (ou reste éteint)", "Le programme s'arrête avec une erreur", "La température passe à 25"], reponse: 1, explication: "22 n'est pas supérieur à 25 : la condition est fausse, on exécute le « sinon »." },
        { type: "vf", question: "Dans une séquence, l'ordre des instructions n'a pas d'importance.", reponse: false, explication: "Les instructions s'exécutent dans l'ordre : « tourner puis avancer » ne donne pas le même résultat que « avancer puis tourner »." },
        { type: "saisie", question: "x = 1. Le programme exécute 3 fois : « mettre x à x × 2 ». Quelle est la valeur finale de x ?", reponses: ["8"], explication: "1 → 2 → 4 → 8. Valeur finale : **8**." },
        { type: "redaction", question: "On veut programmer un jeu : quand le drapeau vert est cliqué, la variable vies est mise à 3 et le score à 0. Ensuite, indéfiniment : si le lutin touche une pomme, on ajoute 1 au score ; si le lutin touche une bombe, on retire 1 à vies ; si vies vaut 0, on affiche « Perdu » et on arrête tout. 1) Écris l'algorithme en blocs (décrits en texte, avec indentation). 2) Identifie dans ton programme : un événement, une boucle, une condition, deux variables. 3) Le joueur touche successivement : pomme, pomme, bombe, pomme, bombe. Donne score et vies à la fin.", corrige: "1) **Programme** :\n- quand le drapeau vert est cliqué\n  - mettre vies à 3\n  - mettre score à 0\n  - répéter indéfiniment\n    - si touche pomme alors : ajouter 1 à score ; cacher la pomme\n    - si touche bombe alors : ajouter −1 à vies ; cacher la bombe\n    - si vies = 0 alors : dire « Perdu » ; stop tout\n\n2) **Structures** :\n- Événement : « quand le drapeau vert est cliqué » ;\n- Boucle : « répéter indéfiniment » ;\n- Conditions : « si touche pomme », « si touche bombe », « si vies = 0 » ;\n- Variables : vies et score.\n\n3) **Exécution pas à pas** (départ : score = 0, vies = 3) :\n- pomme : score 1, vies 3 ;\n- pomme : score 2, vies 3 ;\n- bombe : score 2, vies 2 ;\n- pomme : score 3, vies 2 ;\n- bombe : score 3, vies 1.\n\nÀ la fin : **score = 3** et **vies = 1** (le jeu continue)." },
      ],
    },
    {
      id: "reseaux-internet",
      titre: "Réseaux informatiques et internet",
      theme: "Informatique et programmation",
      cours: `
## Qu'est-ce qu'un réseau ?
Un **réseau informatique** est un ensemble d'appareils (ordinateurs, tablettes, imprimantes, objets connectés) reliés entre eux pour **échanger des informations** et **partager des ressources** (imprimante, fichiers, connexion internet).

Au collège, le réseau relie les postes de la salle à un **serveur** qui stocke les comptes et les fichiers.

## Les éléments d'un réseau
| Élément | Rôle |
|---|---|
| Carte réseau | permet à l'appareil de se connecter (filaire ou wifi) |
| Câble Ethernet (RJ45) ou wifi | support de transmission |
| Commutateur (switch) | relie les appareils d'un même réseau local |
| Routeur / box internet | relie le réseau local à internet |
| Serveur | ordinateur qui fournit des services (fichiers, sites web, mails) |
| Client | appareil qui demande un service |

Un réseau **local** (LAN) relie les appareils d'une maison ou d'un collège. **Internet** est un immense réseau mondial composé de millions de réseaux reliés entre eux.

## L'adresse IP
Chaque appareil connecté possède une **adresse IP** qui l'identifie sur le réseau, comme une adresse postale. En version 4, elle s'écrit avec 4 nombres de 0 à 255 séparés par des points, par exemple 192.168.1.15.

Les noms de sites (comme education.gouv.fr) sont traduits en adresses IP par un service appelé **DNS**.

## Comment circulent les données ?
Les informations sont **découpées en paquets**. Chaque paquet porte l'adresse de l'expéditeur et du destinataire. Les **routeurs** dirigent les paquets, qui peuvent prendre des chemins différents, puis sont réassemblés à l'arrivée.

Le **débit** mesure la quantité de données transmises par seconde (en bits par seconde : kbit/s, Mbit/s, Gbit/s). Rappel : 1 octet = 8 bits.

>! Exemple résolu : avec un débit de 8 Mbit/s, on transfère 1 Mo (8 Mbit) par seconde ; un fichier de 40 Mo demande donc 40 s.

## Internet et le web
**Internet** est le réseau physique. Le **web** est un service d'internet (les pages consultées avec un navigateur). Le courrier électronique, la visioconférence, les jeux en ligne sont d'autres services.

## Usages responsables
- Protéger ses comptes par un **mot de passe** long et unique.
- Ne pas partager ses données personnelles ; respecter le droit à l'image.
- Vérifier les sources d'une information.
- Le numérique consomme de l'énergie (centres de données, réseaux, fabrication des appareils).

> **À retenir** : un réseau relie des appareils pour échanger et partager. Le **switch** relie les appareils localement, le **routeur** relie à internet, le **serveur** fournit des services. Chaque appareil a une **adresse IP**. Les données circulent en **paquets**. Internet ≠ web.
`,
      exercices: [
        { type: "qcm", question: "Quel appareil relie le réseau local de la maison à internet ?", choix: ["L'imprimante", "Le routeur (box)", "La souris", "Le clavier"], reponse: 1, explication: "Le routeur (la box) fait le lien entre le réseau local et internet." },
        { type: "vf", question: "Internet et le web désignent exactement la même chose.", reponse: false, explication: "Internet est le réseau mondial ; le web est un des services qui l'utilisent (comme le mail ou la visioconférence)." },
        { type: "qcm", question: "Laquelle de ces adresses IPv4 est correctement écrite ?", choix: ["192.168.1.25", "192.168.1.300", "192-168-1-25", "192.168.1"], reponse: 0, explication: "Quatre nombres de 0 à 255 séparés par des points : 192.168.1.25. 300 dépasse 255, les tirets et l'adresse à 3 nombres sont incorrects." },
        { type: "saisie", question: "Quel service traduit un nom de site (ex. : education.gouv.fr) en adresse IP ? (sigle)", reponses: ["DNS"], explication: "Le **DNS** (système de noms de domaine) fait cette traduction." },
        { type: "vf", question: "Sur internet, les données sont découpées en paquets qui peuvent emprunter des chemins différents.", reponse: true, explication: "C'est la transmission par paquets : les routeurs les orientent, puis ils sont réassemblés à l'arrivée." },
        { type: "saisie", question: "Combien de bits y a-t-il dans 1 octet ?", reponses: ["8", "huit"], explication: "1 octet = **8 bits**." },
        { type: "qcm", question: "Dans la salle informatique, quel élément fournit les comptes et les fichiers aux postes des élèves ?", choix: ["Le serveur", "Le câble", "Le client", "L'écran"], reponse: 0, explication: "Le serveur fournit des services aux postes clients." },
        { type: "saisie", question: "Avec un débit de 8 Mbit/s (soit 1 Mo par seconde), combien de secondes faut-il pour télécharger un fichier de 40 Mo ? (nombre seul)", reponses: ["40 s"], explication: "8 Mbit/s = 1 Mo/s, donc 40 Mo demandent **40 s**." },
        { type: "redaction", question: "Tu envoies une photo à un ami depuis ton ordinateur à la maison. 1) Décris le trajet des données, depuis ton ordinateur jusqu'à celui de ton ami, en citant les éléments du réseau. 2) Explique le rôle de l'adresse IP et des paquets. 3) Donne deux règles d'usage responsable.", corrige: "1) **Trajet** : la photo part de ton ordinateur par sa carte réseau (wifi ou câble). Elle passe par ta **box (routeur)** qui la fait sortir de ton réseau local vers **internet**. Là, plusieurs **routeurs** successifs l'acheminent (souvent via un **serveur** de messagerie ou de partage qui la stocke). Enfin, elle arrive à la box de ton ami puis à son ordinateur.\n\n2) **Adresse IP et paquets** : chaque appareil a une adresse IP qui l'identifie, comme une adresse postale. La photo est découpée en **paquets** ; chacun contient l'adresse IP de départ et d'arrivée. Les routeurs lisent ces adresses pour orienter chaque paquet ; les paquets peuvent prendre des chemins différents et sont réassemblés à l'arrivée.\n\n3) **Usage responsable** : demander l'accord des personnes présentes sur la photo (droit à l'image) ; utiliser un mot de passe solide pour sa messagerie ; éviter d'envoyer des fichiers inutilement lourds (consommation d'énergie)." },
      ],
    },
    {
      id: "projet-developpement-durable",
      titre: "Démarche de projet et développement durable",
      theme: "Design, innovation et créativité",
      cours: `
## La démarche de projet
En technologie, on conçoit et réalise des objets **en équipe**, en suivant une démarche de projet :
1. **Identifier le besoin** et rédiger le **cahier des charges** ;
2. **Rechercher des solutions** (croquis, recherches documentaires, remue-méninges) ;
3. **Choisir une solution** en la comparant au cahier des charges ;
4. **Concevoir** : modéliser, dessiner, programmer, prévoir les matériaux ;
5. **Planifier** : répartir les tâches, fixer un calendrier (planning) ;
6. **Réaliser** un prototype ;
7. **Tester et valider** : vérifier chaque critère du cahier des charges, corriger ;
8. **Présenter** le projet (oral, fiche, diaporama).

Un **prototype** est un premier exemplaire qui sert à tester l'objet avant de le fabriquer en série.

## Le développement durable
Le **développement durable** répond aux besoins d'aujourd'hui sans empêcher les générations futures de répondre aux leurs. Il repose sur trois piliers : **environnemental**, **social**, **économique**.

## Le cycle de vie d'un objet
Un objet a un impact sur l'environnement à chaque étape de son **cycle de vie** :
1. **Extraction** des matières premières (mines, forêts, pétrole) ;
2. **Fabrication** (usines, énergie, eau) ;
3. **Transport** et distribution ;
4. **Utilisation** (consommation d'énergie, entretien) ;
5. **Fin de vie** : réutilisation, recyclage, incinération ou enfouissement.

>! Exemple : pour un smartphone, l'essentiel de l'impact environnemental vient de la **fabrication** (extraction de métaux, électronique). Le garder plus longtemps est donc le geste le plus efficace.

## Recyclage et valorisation
| Matériau | Recyclage |
|---|---|
| Aluminium | recyclable à l'infini ; le recycler demande environ 95 % d'énergie en moins que de le produire à partir du minerai |
| Verre | recyclable à l'infini |
| Acier | recyclable, trié par aimant |
| Papier, carton | recyclables plusieurs fois (fibres de plus en plus courtes) |
| Plastiques | certains recyclables (PET des bouteilles), beaucoup difficiles à recycler |
| Appareils électroniques (DEEE) | collecte spéciale, récupération des métaux |

La règle des **3 R** : **Réduire** (consommer moins), **Réutiliser** (réparer, donner), **Recycler**.

## L'écoconception
L'**écoconception** consiste à réduire l'impact environnemental dès la conception : moins de matière, matériaux recyclés ou recyclables, pièces démontables et réparables, faible consommation d'énergie, emballages réduits, fabrication locale.

> **À retenir** : démarche de projet : besoin → cahier des charges → recherche → choix → conception → réalisation du **prototype** → tests → présentation. Le **cycle de vie** va de l'extraction à la fin de vie. **3 R** : réduire, réutiliser, recycler. L'**écoconception** pense l'environnement dès le départ.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la première étape d'une démarche de projet ?", choix: ["Fabriquer le prototype", "Identifier le besoin", "Présenter le projet", "Tester l'objet"], reponse: 1, explication: "On commence par identifier le besoin et rédiger le cahier des charges." },
        { type: "vf", question: "Un prototype est le dernier exemplaire fabriqué en série.", reponse: false, explication: "Le prototype est un **premier** exemplaire, réalisé pour tester l'objet avant la production." },
        { type: "qcm", question: "Quels sont les trois piliers du développement durable ?", choix: ["Environnemental, social, économique", "Rapide, solide, joli", "Métal, plastique, bois", "Acquérir, traiter, communiquer"], reponse: 0, explication: "Le développement durable concilie environnement, social et économie." },
        { type: "saisie", question: "Donne les trois mots de la règle des 3 R, dans l'ordre (séparés par des virgules).", reponses: ["réduire, réutiliser, recycler", "reduire, reutiliser, recycler", "réduire réutiliser recycler", "réduire, réutiliser et recycler", "réduire réutiliser et recycler"], explication: "**Réduire**, **réutiliser**, **recycler** : on privilégie d'abord la réduction, puis la réutilisation, enfin le recyclage." },
        { type: "qcm", question: "Pour un smartphone, quelle étape du cycle de vie a le plus d'impact environnemental ?", choix: ["Le transport", "La fabrication", "La recharge quotidienne", "Le rangement"], reponse: 1, explication: "La fabrication (extraction des métaux, composants électroniques) représente la majorité de l'impact. D'où l'intérêt de garder son téléphone longtemps." },
        { type: "vf", question: "L'aluminium et le verre sont recyclables à l'infini.", reponse: true, explication: "Ils peuvent être refondus de nombreuses fois sans perdre leurs propriétés." },
        { type: "qcm", question: "Lequel de ces choix relève de l'écoconception ?", choix: ["Coller toutes les pièces pour qu'on ne puisse pas les démonter", "Choisir un matériau impossible à recycler", "Ajouter un emballage plus gros", "Utiliser des vis pour rendre l'objet réparable"], reponse: 3, explication: "Des pièces démontables permettent de réparer et de trier les matériaux en fin de vie." },
        { type: "redaction", question: "Ton équipe doit concevoir une lampe de chevet « écoresponsable ». 1) Liste les étapes de la démarche de projet que vous allez suivre. 2) Pour chaque étape du cycle de vie de la lampe, propose un choix qui réduit son impact environnemental. 3) Comment vérifierez-vous que le prototype répond au cahier des charges ?", corrige: "1) **Démarche** : identifier le besoin (s'éclairer pour lire au lit) → rédiger le cahier des charges (éclairage suffisant, faible consommation, matériaux recyclables, prix) → rechercher des idées (croquis) → choisir une solution → concevoir (modèle 3D, schéma électrique) → planifier et répartir les tâches → réaliser le prototype → tester → présenter.\n\n2) **Cycle de vie** :\n- Extraction : bois issu de forêts gérées durablement, aluminium recyclé ;\n- Fabrication : peu de pièces, découpe optimisée pour limiter les chutes ;\n- Transport : fabrication locale, emballage carton réduit ;\n- Utilisation : lampe à DEL (faible puissance, longue durée de vie), interrupteur ;\n- Fin de vie : assemblage par vis (démontable), DEL remplaçable, matériaux séparables et recyclables.\n\n3) **Validation** : on reprend chaque ligne du cahier des charges et on mesure le niveau obtenu (puissance de la DEL, éclairement avec un luxmètre, masse, coût total, possibilité de démonter). Si un critère n'est pas atteint, on modifie le prototype puis on refait le test." },
      ],
    },
    {
      id: "programmer-objet",
      titre: "Programmer un objet : carte programmable, capteurs et actionneurs",
      theme: "Informatique et programmation",
      cours: `
## La carte programmable
Une **carte programmable** (micro:bit, Arduino...) contient un **microcontrôleur** : un petit ordinateur qui exécute un programme. On écrit le programme par blocs sur l'ordinateur, puis on le **téléverse** (on le transfère) dans la carte, par câble USB.

La carte possède :
- des **entrées**, reliées aux **capteurs** (boutons, capteur de lumière, de température, à ultrasons...) : elles réalisent la fonction **acquérir** ;
- des **sorties**, reliées aux **actionneurs** (DEL, buzzer, moteur via un relais ou une carte de puissance...) : la carte leur **communique** des ordres.

Le programme réalise la fonction **traiter** : il compare les valeurs mesurées à un **seuil** et décide.

## Les blocs habituels
| Bloc (décrit) | Rôle |
|---|---|
| « au démarrage » | instructions exécutées une seule fois, à la mise sous tension |
| « toujours » (répéter indéfiniment) | boucle qui surveille les capteurs en permanence |
| « si ... alors ... sinon » | choisit une action selon une condition |
| « niveau d'intensité lumineuse », « température » | lit la valeur d'un capteur |
| « écrire sur la broche P0 la valeur 1 » | allume (1) ou éteint (0) un actionneur branché sur une sortie |
| « pause (ms) 1000 » | attend 1 000 millisecondes, soit 1 seconde |

Rappel : 1 s = 1 000 ms.

>! **Exemple : veilleuse automatique** (décrit en texte)
~~~
au démarrage
    afficher « OK »
toujours
    si luminosité < 50 alors
        écrire sur P0 la valeur 1  (DEL allumée)
    sinon
        écrire sur P0 la valeur 0  (DEL éteinte)
~~~
La boucle « toujours » relit le capteur sans arrêt : la DEL s'allume dès qu'il fait sombre (valeur inférieure au seuil 50) et s'éteint quand il fait clair.

## L'algorigramme
Avant de programmer, on peut représenter l'algorithme par un **algorigramme** (organigramme) :
| Symbole | Signification |
|---|---|
| ovale (rectangle aux bords arrondis) | **début** ou **fin** |
| rectangle | une **action** (allumer la DEL, attendre 1 s) |
| **losange** | une **condition** (test) avec deux sorties : oui / non |
| parallélogramme | une **entrée** (lecture d'un capteur) ou une **sortie** (affichage) |
| flèches | l'ordre d'exécution |

## Tester et corriger
On teste le programme dans un **simulateur** puis sur l'objet réel. Erreurs fréquentes : oublier la boucle « toujours » (le capteur n'est lu qu'une fois), un seuil mal choisi, oublier la pause (une DEL qui clignote trop vite semble allumée en continu), inverser « < » et « > ».

> **À retenir** : la carte programmable **acquiert** par ses entrées (capteurs), **traite** grâce au programme et **communique** des ordres par ses sorties (actionneurs). Blocs clés : « au démarrage », « toujours », « si... alors... sinon », lecture d'un capteur, « pause ». 1 s = 1 000 ms. Dans un algorigramme, le **losange** est une condition.
`,
      exercices: [
        { type: "qcm", question: "Sur une carte programmable, un capteur de lumière est branché sur :", choix: ["une sortie", "une entrée", "la batterie", "le câble USB"], reponse: 1, explication: "Un capteur **fournit** une information à la carte : il est branché sur une **entrée** (fonction acquérir). Les actionneurs sont sur les sorties." },
        { type: "saisie", question: "Combien de millisecondes y a-t-il dans 2 secondes ? (nombre seul)", reponses: ["2000 ms", "2 000 ms"], explication: "1 s = 1 000 ms, donc 2 s = **2 000 ms**." },
        { type: "vf", question: "Les instructions placées dans le bloc « au démarrage » sont répétées en permanence.", reponse: false, explication: "Le bloc « au démarrage » est exécuté **une seule fois**. C'est le bloc « **toujours** » qui répète ses instructions indéfiniment." },
        { type: "qcm", question: "Dans un algorigramme, quel symbole représente une condition (un test oui / non) ?", choix: ["Le rectangle", "L'ovale", "Le losange", "La flèche"], reponse: 2, explication: "Le **losange** représente une condition avec deux sorties (oui / non). Le rectangle est une action, l'ovale le début ou la fin." },
        { type: "qcm", question: "Programme : « toujours : si température > 25 alors écrire sur P0 la valeur 1 sinon écrire sur P0 la valeur 0 ». Un ventilateur est commandé par P0. La température vaut 27 °C. Que se passe-t-il ?", choix: ["Le ventilateur s'arrête", "Rien, le programme est bloqué", "Le ventilateur tourne", "La température descend à 25 °C instantanément"], reponse: 2, explication: "27 > 25 : la condition est **vraie**, la carte écrit 1 sur P0, le ventilateur **tourne**. Il s'arrêtera quand la température ne sera plus supérieure à 25 °C." },
        { type: "saisie", question: "Une DEL est programmée ainsi : « toujours : allumer la DEL ; pause 500 ms ; éteindre la DEL ; pause 500 ms ». Combien de fois clignote-t-elle en une minute ? (nombre seul)", reponses: ["60", "60 fois"], explication: "Un cycle dure 500 + 500 = 1 000 ms = 1 s. En une minute (60 s), la DEL clignote **60 fois**." },
        { type: "vf", question: "Si on oublie la boucle « toujours » dans la veilleuse automatique, le capteur de lumière n'est lu qu'une seule fois.", reponse: true, explication: "Sans boucle, le test est fait une seule fois au démarrage : la DEL ne réagit plus ensuite aux changements de luminosité." },
        { type: "qcm", question: "Une veilleuse doit s'allumer quand il fait sombre. Le capteur donne une valeur faible dans le noir. Quelle condition faut-il écrire ?", choix: ["si luminosité < 50 alors allumer", "si luminosité > 50 alors allumer", "si luminosité = 1 000 alors allumer", "répéter 50 fois allumer"], reponse: 0, explication: "Dans le noir, la valeur est **faible** : on allume quand elle est **inférieure** au seuil. Avec « > 50 », la veilleuse s'allumerait en plein jour (erreur fréquente : inverser < et >)." },
        { type: "redaction", question: "On veut programmer une barrière de parking. Un bouton A sert à demander l'ouverture. Quand on appuie sur A, un moteur ouvre la barrière, on attend 5 secondes, puis le moteur la referme. Un compteur affiche le nombre de voitures entrées. 1) Identifie les entrées et les sorties de la carte. 2) Écris le programme en blocs (décrits en texte, avec indentation). 3) Décris l'algorigramme. 4) Que vaut le compteur après 4 appuis sur A ?", corrige: `1) **Entrée** (acquérir) : le bouton A. **Sorties** (communiquer) : le moteur de la barrière (via une carte de commande) et l'afficheur du compteur.

2) **Programme** :
~~~
au démarrage
    mettre voitures à 0
    afficher voitures
toujours
    si bouton A pressé alors
        ouvrir la barrière (moteur dans un sens)
        pause (ms) 5000
        fermer la barrière (moteur dans l'autre sens)
        ajouter 1 à voitures
        afficher voitures
~~~

3) **Algorigramme** : ovale « Début » → rectangle « voitures = 0 » → losange « Bouton A pressé ? ». Si **non** : flèche qui revient au losange. Si **oui** : rectangle « ouvrir la barrière » → rectangle « attendre 5 s » → rectangle « fermer la barrière » → rectangle « ajouter 1 à voitures, afficher » → flèche qui revient au losange (boucle).

4) Chaque appui ajoute 1 : 0 + 4 × 1 = **4** voitures.

> Points de méthode : la variable est initialisée **au démarrage** (sinon elle serait remise à 0 à chaque tour) ; 5 s = **5 000 ms** ; la boucle « toujours » permet de surveiller le bouton en permanence.` },
      ],
    },
  ],
};
