export default {
  chapitres: [
    {
      id: "innovations-rupture-societe",
      titre: "Sciences, inventions, innovations de rupture et société",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## De la découverte scientifique à l'objet technique
Les objets techniques évoluent rarement par hasard. Très souvent, une **découverte scientifique** (un phénomène compris par les chercheurs) permet, des années plus tard, un **développement technologique** (un composant, un procédé), puis de nouveaux **objets** qui changent la **société**.

| Découverte scientifique | Développement technologique | Objets et effets sur la société |
|---|---|---|
| Induction électromagnétique (Michael Faraday, 1831) | génératrice, alternateur, transformateur | production et transport de l'électricité, éoliennes, centrales |
| Effet photovoltaïque (observé par Edmond Becquerel, 1839) | cellule photovoltaïque au silicium (laboratoires Bell, 1954) | panneaux solaires, satellites, énergie renouvelable |
| Ondes électromagnétiques (Heinrich Hertz, années 1880) | émetteurs et récepteurs radio | radio, télévision, téléphone portable, Wi-Fi |
| Propriétés des semi-conducteurs | transistor (laboratoires Bell, 1947) | ordinateurs, smartphones, objets connectés |
| Magnétorésistance géante (Albert Fert et Peter Grünberg, 1988, prix Nobel 2007) | têtes de lecture des disques durs | stockage massif des données |

## Invention, innovation : ne pas confondre
- Une **invention** est une idée ou un dispositif **nouveau**, qui n'existait pas avant (souvent protégé par un **brevet**).
- Une **innovation** est une invention (ou une amélioration) **mise sur le marché et adoptée** par les utilisateurs.

Une invention peut ne jamais devenir une innovation (trop chère, inutile, pas au point).

## Innovation incrémentale ou de rupture
- L'**innovation incrémentale** améliore un objet existant **petit à petit** : un smartphone un peu plus rapide, une batterie un peu plus durable.
- L'**innovation de rupture** change **profondément** les usages, les métiers, parfois l'économie entière. L'ancien objet est souvent remplacé.

>! Exemples d'innovations de rupture : l'ampoule à DEL face à l'ampoule à incandescence ; le smartphone tactile (fin des années 2000), qui réunit téléphone, appareil photo, GPS, baladeur et accès à internet ; la photo numérique face à la pellicule.

## Famille et lignée d'objets
- Une **famille** d'objets regroupe des objets qui ont la **même fonction d'usage** mais des principes différents : pour « se déplacer », vélo, trottinette, voiture, bus.
- Une **lignée** suit l'**évolution dans le temps** d'objets qui reposent sur un même principe : les téléphones à cadran, à touches, mobiles, puis smartphones.

## Les contraintes sociétales
La société impose aussi ses exigences aux concepteurs : ce sont les **contraintes sociétales**.
- **Lois et normes** : la loi AGEC de 2020 (anti-gaspillage pour une économie circulaire) a créé l'indice de réparabilité ; l'Union européenne impose le port de charge USB-C sur les téléphones vendus depuis le 28 décembre 2024 ; les normes d'émissions de CO₂ poussent les constructeurs vers les voitures électriques.
- **Protection des personnes** : sécurité, santé, accessibilité aux personnes handicapées, protection des données personnelles (RGPD).
- **Attentes des citoyens** : moins de déchets, moins d'émissions de gaz à effet de serre, objets réparables.

## Exprimer un argumentaire court
Au brevet, on te demande souvent d'**argumenter** en quelques lignes. Méthode :
1. **Affirme** ton idée en une phrase.
2. **Justifie** avec un fait ou une donnée du document (« d'après le document 2... »).
3. **Nuance** : donne un avantage **et** un inconvénient (pour la société, l'environnement, l'économie).
4. **Conclus** en une phrase.

>! Exemple : « Le smartphone a profondément transformé la société. D'après le document, il réunit plusieurs objets en un seul, ce qui facilite la communication et l'accès à l'information. Mais sa fabrication consomme des métaux rares et son usage peut créer une dépendance. C'est donc une innovation de rupture aux effets à la fois positifs et négatifs. »

> **À retenir** : une **découverte scientifique** permet des **développements technologiques** qui transforment la **société**. Une **invention** est nouvelle ; une **innovation** est adoptée par les utilisateurs. L'innovation **de rupture** bouleverse les usages, l'innovation **incrémentale** améliore pas à pas. Les **contraintes sociétales** (lois, normes, attentes) influencent la conception des objets.
`,
      exercices: [
        { type: "qcm", question: "Quelle phrase décrit le mieux une **innovation** ?", choix: ["Une idée nouvelle qui reste dans un carnet", "Un phénomène naturel découvert par un chercheur", "Une invention mise sur le marché et adoptée par les utilisateurs", "Un objet ancien qu'on ne fabrique plus"], reponse: 2, explication: "L'innovation, c'est l'invention (ou l'amélioration) **adoptée** par les utilisateurs. Une idée qui reste dans un carnet est au mieux une invention ; un phénomène naturel est une découverte scientifique." },
        { type: "vf", question: "Une innovation incrémentale bouleverse complètement les usages et remplace l'objet précédent.", reponse: false, explication: "C'est la définition de l'innovation **de rupture**. L'innovation **incrémentale** améliore l'objet petit à petit (un peu plus d'autonomie, un peu plus léger...)." },
        { type: "qcm", question: "Quelle découverte scientifique est à l'origine des panneaux solaires ?", choix: ["L'induction électromagnétique", "L'effet photovoltaïque", "La magnétorésistance géante", "La gravitation universelle"], reponse: 1, explication: "L'**effet photovoltaïque** (la lumière produit un courant électrique dans certains matériaux) a été observé par Edmond Becquerel en 1839 ; la première cellule au silicium date de 1954. L'induction a donné les génératrices, la magnétorésistance géante les disques durs." },
        { type: "saisie", question: "Quel scientifique a découvert l'induction électromagnétique en 1831, principe des génératrices et des alternateurs ? (nom)", reponses: ["Faraday", "Michael Faraday"], explication: "**Michael Faraday** a montré en 1831 qu'un aimant en mouvement près d'une bobine produit un courant électrique : c'est le principe de toutes les génératrices (éoliennes, centrales, dynamos)." },
        { type: "qcm", question: "Lequel de ces exemples est une **contrainte sociétale** imposée aux concepteurs ?", choix: ["Le choix de la couleur du boîtier par le designer", "La vitesse du processeur choisie par l'ingénieur", "Le prix des matières premières sur le marché", "L'obligation européenne d'un port de charge USB-C sur les téléphones"], reponse: 3, explication: "L'obligation du chargeur USB-C vient d'une **loi** (règle de la société) pour réduire les déchets : c'est une contrainte sociétale. La couleur et la vitesse du processeur sont des choix de conception." },
        { type: "vf", question: "Le smartphone tactile est considéré comme une innovation de rupture.", reponse: true, explication: "Il a réuni en un seul objet téléphone, appareil photo, GPS, baladeur et accès à internet, et transformé les usages (réseaux sociaux, paiement, navigation...) : c'est une rupture." },
        { type: "qcm", question: "Vélo, trottinette, bus et voiture répondent tous au besoin « se déplacer » avec des principes différents. Ils forment :", choix: ["une famille d'objets", "une lignée d'objets", "une chaîne d'énergie", "un cahier des charges"], reponse: 0, explication: "Même fonction d'usage, principes différents : c'est une **famille**. Une **lignée** suit l'évolution dans le temps d'un même principe (par exemple, du téléphone à cadran au smartphone)." },
        { type: "saisie", question: "Quel composant électronique, inventé en 1947 aux laboratoires Bell, est à la base de tous les ordinateurs et smartphones ? (un mot)", reponses: ["transistor", "le transistor", "transistors"], explication: "Le **transistor** est un minuscule interrupteur électronique. Un processeur de smartphone en contient des milliards." },
        { type: "redaction", question: "**Sujet type brevet.** Document : « La lampe à DEL (diode électroluminescente) blanche est devenue possible grâce à la mise au point de la DEL bleue dans les années 1990 (prix Nobel de physique 2014). Une lampe à DEL consomme environ 5 fois moins d'électricité qu'une lampe à incandescence pour le même éclairement et dure beaucoup plus longtemps. Depuis 2009, l'Union européenne a progressivement interdit la vente des lampes à incandescence. » 1) Montre qu'il s'agit d'une innovation de rupture. 2) Relie la découverte scientifique, le développement technologique et l'effet sur la société. 3) Identifie une contrainte sociétale citée et explique son influence. 4) Rédige un argumentaire court (4 à 6 lignes) sur l'incidence de la lampe à DEL sur la société.", corrige: "1) **Innovation de rupture** : la lampe à DEL repose sur un principe totalement différent (un composant électronique et non un filament chauffé) et elle a **remplacé** la lampe à incandescence dans les foyers. Ce n'est pas une petite amélioration de l'ancienne lampe.\n\n2) **Chaîne découverte → technologie → société** :\n- découverte et mise au point scientifique : la DEL bleue (années 1990, prix Nobel 2014) ;\n- développement technologique : la DEL blanche, puis les lampes à DEL pour l'éclairage ;\n- effet sur la société : consommation d'électricité pour l'éclairage fortement réduite, moins de lampes jetées, nouveaux usages (éclairage décoratif, écrans, phares).\n\n3) **Contrainte sociétale** : l'interdiction progressive des lampes à incandescence par l'Union européenne (depuis 2009). Cette loi a obligé les fabricants à concevoir des lampes plus économes et a accéléré l'adoption des DEL.\n\n4) **Argumentaire** : La lampe à DEL a eu une incidence positive sur la société. D'après le document, elle consomme environ 5 fois moins d'électricité pour le même éclairage et dure plus longtemps, ce qui réduit les factures et les déchets. Cependant, elle contient des composants électroniques plus difficiles à recycler, et une lumière trop bleue peut gêner le sommeil. Globalement, c'est une innovation utile pour la transition énergétique, à condition de bien la recycler.\n\n> Barème indicatif : définition de la rupture justifiée (1 pt), chaîne complète (1 pt), contrainte identifiée et expliquée (1 pt), argumentaire structuré avec avantage et inconvénient, vocabulaire précis (1 pt)." },
      ],
    },
    {
      id: "intelligence-artificielle",
      titre: "L'intelligence artificielle : apprentissage, usages et biais",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## Qu'est-ce qu'une intelligence artificielle ?
Une **intelligence artificielle** (IA) est un programme capable de réaliser des tâches qui semblaient demander de l'intelligence humaine : reconnaître une image, comprendre une phrase, traduire, choisir un trajet.

Une IA ne « pense » pas comme un humain : elle **calcule** à partir de **données**. La plupart des IA actuelles fonctionnent par **apprentissage automatique** : au lieu d'écrire toutes les règles à la main, on fournit au programme un grand nombre d'exemples et il **apprend** à en déduire un **modèle**.

## Les grands types d'apprentissage
| Type | Principe | Exemple |
|---|---|---|
| **Supervisé** | on donne des exemples **étiquetés** (avec la bonne réponse) | des milliers de photos marquées « chat » ou « chien » ; l'IA apprend à classer une nouvelle photo |
| **Non supervisé** | données **sans étiquette** ; l'IA cherche elle-même des **ressemblances** et forme des groupes | regrouper les clients d'un site qui achètent les mêmes produits |
| **Par renforcement** | l'IA essaie des actions et reçoit des **récompenses** ou des pénalités | un robot qui apprend à marcher, une IA qui apprend à jouer aux échecs |

## Entraîner et tester un modèle
1. **Collecter** des données (images, sons, mesures).
2. **Étiqueter** les données (apprentissage supervisé).
3. **Entraîner** le modèle sur une partie des données (jeu d'entraînement).
4. **Tester** sur d'autres données qu'il n'a jamais vues (jeu de test) et calculer le **taux de réussite**.
5. **Intégrer** le modèle dans le programme d'un objet (caméra, robot...).

>! Exemple résolu : sur 250 images de test, le modèle en classe correctement 230. Taux de réussite = 230 ÷ 250 = 0,92, soit **92 %**.

## Les usages possibles
- **Géolocalisation** et calcul d'itinéraire (prévoir les bouchons) ;
- **Identification** : reconnaissance d'objets, de visages, de plaques, de défauts sur une chaîne de production, aide au diagnostic médical sur des images ;
- **Calcul** et prévision : consommation d'énergie, maintenance prédictive d'une machine ;
- **Traduction** automatique, assistants vocaux ;
- **IA générative** : elle produit du texte, des images ou du son à partir d'une consigne.

## Les biais : quand l'IA se trompe de façon injuste
Un **biais** apparaît quand les données d'entraînement **ne représentent pas bien** la réalité. L'IA reproduit alors les déséquilibres de ses données.

>! Exemple : une IA de reconnaissance de visages entraînée surtout avec des photos de personnes à peau claire reconnaîtra moins bien les personnes à peau foncée. Une IA de tri de CV entraînée sur les embauches passées d'un métier très masculin risque de défavoriser les femmes.

Pour limiter les biais : des données **nombreuses**, **variées**, **équilibrées**, et des tests sur tous les cas d'usage.

## Utiliser une IA générative avec esprit critique
Un **moteur de recherche** renvoie vers des **pages existantes** dont tu peux vérifier la source. Une **IA générative** **fabrique** une réponse nouvelle : elle peut être très utile, mais aussi **inventer** des informations fausses présentées avec assurance.

Un bon **prompt** (la consigne donnée à l'IA) précise :
- le **rôle** donné à l'IA (« Tu es un technicien de maintenance ») ;
- la **tâche** (« Rédige une notice de montage ») ;
- le **contexte** (« pour une étagère en pin, destinée à des élèves de 3e ») ;
- le **format de sortie** (« liste numérotée de 6 étapes maximum »).

Deux IA différentes, ou la même IA deux fois, peuvent donner des réponses différentes au même prompt : elles n'ont pas été entraînées sur les mêmes données et leurs réponses comportent une part de hasard. **Vérifie** toujours avec des sources fiables, et **ne donne pas** de données personnelles.

## Les incidences sur la société
- **Positives** : gain de temps, aide au diagnostic médical, sécurité (freinage d'urgence automatique), accessibilité (sous-titrage, traduction).
- **Négatives** : biais et discriminations, erreurs, surveillance et vie privée, consommation d'énergie des centres de données, emplois transformés, fausses images (hypertrucages).

> **À retenir** : une IA **apprend à partir de données**. Apprentissage **supervisé** (exemples étiquetés), **non supervisé** (regroupements), **par renforcement** (récompenses). On **entraîne** puis on **teste** (taux de réussite). Un **biais** vient de données non représentatives. Une IA générative peut se tromper : un bon **prompt** (rôle, tâche, contexte, format) et une **vérification** des sources sont indispensables.
`,
      exercices: [
        { type: "qcm", question: "On entraîne une IA avec 10 000 photos de fruits, chacune marquée « pomme », « banane » ou « orange ». Quel type d'apprentissage est utilisé ?", choix: ["Non supervisé", "Par renforcement", "Supervisé", "Aucun : ce n'est pas de l'apprentissage"], reponse: 2, explication: "Les exemples sont **étiquetés** (la bonne réponse est donnée) : c'est l'apprentissage **supervisé**. En non supervisé, il n'y aurait pas d'étiquette ; en renforcement, l'IA recevrait des récompenses." },
        { type: "vf", question: "Une IA comprend le monde exactement comme un être humain.", reponse: false, explication: "Une IA **calcule** à partir des données qu'elle a reçues. Elle n'a ni expérience vécue ni compréhension humaine, et elle peut se tromper sur des cas éloignés de ses données." },
        { type: "saisie", question: "Sur 50 images de test, un modèle d'IA en reconnaît correctement 46. Quel est son taux de réussite, en % ? (nombre seul)", reponses: ["92", "92 %"], explication: "46 ÷ 50 = 0,92, soit **92 %**." },
        { type: "qcm", question: "Une IA qui repère les défauts sur des pièces a été entraînée uniquement avec des photos prises en plein jour. La nuit, elle se trompe souvent. Quelle est la cause la plus probable ?", choix: ["Un biais : les données d'entraînement ne représentent pas toutes les situations", "Le capteur est forcément cassé", "L'IA est trop intelligente", "Le programme n'a pas de boucle"], reponse: 0, explication: "Les données ne couvraient pas les conditions nocturnes : c'est un **biais** des données d'entraînement. Il faut ajouter des photos prises de nuit puis refaire l'entraînement et les tests." },
        { type: "qcm", question: "Un robot apprend à sortir d'un labyrinthe : il gagne des points quand il avance vers la sortie et en perd quand il heurte un mur. C'est un apprentissage :", choix: ["supervisé", "non supervisé", "par cœur", "par renforcement"], reponse: 3, explication: "Récompenses et pénalités après chaque essai : c'est l'apprentissage **par renforcement**." },
        { type: "vf", question: "Une IA générative peut produire une réponse fausse présentée avec beaucoup d'assurance.", reponse: true, explication: "Elle fabrique une réponse probable, pas forcément vraie : elle peut inventer des chiffres, des références ou des faits. D'où la nécessité de **vérifier** avec des sources fiables." },
        { type: "saisie", question: "Comment appelle-t-on la consigne écrite que l'on donne à une IA générative ? (un mot, en anglais ou en français)", reponses: ["prompt", "un prompt", "requête", "invite", "consigne"], explication: "C'est le **prompt** (on dit aussi requête ou invite). Un bon prompt précise le rôle, la tâche, le contexte et le format attendu." },
        { type: "qcm", question: "Lequel de ces prompts est le plus efficace pour obtenir une notice utile ?", choix: ["« Notice »", "« Fais-moi un truc sur la trottinette »", "« Tu es technicien. Rédige pour des élèves de 3e une notice de recharge d'une trottinette électrique, en 5 étapes numérotées, avec une règle de sécurité. »", "« Réponds vite »"], reponse: 2, explication: "Ce prompt contient un **rôle** (technicien), une **tâche** (rédiger une notice de recharge), un **contexte** (élèves de 3e, trottinette) et un **format** (5 étapes, une règle de sécurité)." },
        { type: "redaction", question: "**Sujet type brevet.** Un constructeur développe une voiture autonome. Une caméra et une IA de reconnaissance d'images repèrent les piétons ; le modèle a été entraîné avec 2 millions d'images, prises surtout en ville, de jour et par beau temps. Lors des tests, le taux de réussite est de 99 % de jour mais de 85 % la nuit sous la pluie. 1) Quel type d'apprentissage a été utilisé ? Justifie. 2) Explique l'écart entre les deux taux de réussite. 3) Propose deux actions pour améliorer le modèle. 4) Rédige un argumentaire court sur les incidences positives et négatives des véhicules autonomes sur la société.", corrige: "1) **Apprentissage supervisé** : pour apprendre à repérer les piétons, les images d'entraînement doivent être **étiquetées** (on indique où se trouve un piéton sur chaque image).\n\n2) **Écart** : les données d'entraînement contiennent surtout des images de jour et par beau temps. Elles ne représentent pas bien les situations de nuit sous la pluie : c'est un **biais** des données. Le modèle est donc moins fiable dans ces conditions (85 % au lieu de 99 %).\n\n3) **Améliorations** :\n- ajouter des images étiquetées prises de nuit, sous la pluie, dans le brouillard, à la campagne, avec des piétons variés (taille, vêtements, fauteuils roulants) ;\n- refaire l'entraînement puis tester à nouveau sur un jeu de test qui contient toutes ces situations ; compléter éventuellement la caméra par d'autres capteurs (radar, lidar) qui fonctionnent dans le noir.\n\n4) **Argumentaire** : Les véhicules autonomes pourraient réduire les accidents dus à l'inattention ou à la fatigue, et rendre la mobilité accessible aux personnes qui ne peuvent pas conduire. Cependant, l'exemple montre que l'IA peut être moins fiable dans certaines conditions : une erreur peut être grave, et la question de la responsabilité en cas d'accident reste difficile. Ces véhicules collectent aussi beaucoup de données sur les trajets, ce qui pose la question de la vie privée. Leur développement doit donc s'accompagner de tests rigoureux et de règles claires.\n\n> Points de vigilance : employer le vocabulaire précis (données étiquetées, entraînement, test, biais, taux de réussite) et citer les chiffres du sujet." },
      ],
    },
    {
      id: "numerique-responsable-cybersecurite",
      titre: "Usages du numérique : cybersécurité, données personnelles et propriété intellectuelle",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## Ton identité numérique et tes traces
Ton **identité numérique** est l'ensemble des informations qui te concernent sur internet : profils, publications, photos, commentaires, mais aussi ce que d'autres publient sur toi.

Tu laisses des **traces numériques** sans toujours t'en rendre compte :
- les **témoins de connexion** (cookies) : petits fichiers déposés par les sites pour mémoriser tes préférences ou suivre ta navigation à des fins publicitaires. En France, les sites doivent te demander ton **consentement** pour les cookies publicitaires ;
- la **géolocalisation** : ton téléphone et certaines applications connaissent ta position ; une photo peut contenir les coordonnées GPS du lieu de prise de vue ;
- l'historique de navigation, les recherches, les « j'aime ».

## Les données personnelles et la loi
Une **donnée personnelle** permet d'identifier une personne directement ou indirectement : nom, photo, adresse, numéro de téléphone, adresse IP, position.

Le **RGPD** (règlement général sur la protection des données, appliqué depuis 2018 dans l'Union européenne) donne des droits : savoir quelles données sont collectées, les corriger, les faire effacer. En France, c'est la **CNIL** qui veille au respect de ces règles. Avant **15 ans**, quand un service en ligne (un réseau social par exemple) a besoin de ton consentement pour utiliser tes données, il faut **aussi l'accord d'un parent**.

## Sécuriser son environnement numérique
### Identification et authentification
- **S'identifier**, c'est dire **qui on est** (son identifiant, son adresse mail).
- **S'authentifier**, c'est **prouver** qu'on est bien cette personne.

On peut s'authentifier avec :
- ce que l'on **sait** (mot de passe, code) ;
- ce que l'on **possède** (téléphone qui reçoit un code, clé de sécurité) ;
- ce que l'on **est** (empreinte digitale, visage).

La **double authentification** combine deux de ces moyens : même si ton mot de passe est volé, le pirate ne peut pas entrer sans ton téléphone.

### Un mot de passe solide
Plus il est **long** et **varié**, plus il y a de combinaisons à essayer.

>! Exemple résolu : un code de 4 chiffres offre 10 × 10 × 10 × 10 = 10⁴ = **10 000** combinaisons. Un mot de passe de 8 caractères choisis parmi 62 (26 minuscules, 26 majuscules, 10 chiffres) en offre 62⁸, soit environ 218 000 milliards.

Règles : au moins 12 caractères, un mot de passe **différent** pour chaque compte, ne jamais le partager, utiliser un gestionnaire de mots de passe.

### Les autres bons réflexes
- Méfie-toi de l'**hameçonnage** (phishing) : faux message (banque, livraison, réseau social) qui t'invite à cliquer sur un lien pour voler tes identifiants.
- Fais les **mises à jour** : elles corrigent des failles de sécurité.
- Fais des **sauvegardes**, verrouille ton téléphone, ne te connecte pas à un compte important sur un Wi-Fi public inconnu.

## La propriété intellectuelle
Une photo, une musique, un texte, un programme, une vidéo appartiennent à leur **auteur** (droit d'auteur), même s'ils sont sur internet. Pour les réutiliser, il faut l'autorisation de l'auteur ou une **licence** qui le permet.

Les licences **Creative Commons** indiquent ce qui est autorisé :
| Sigle | Signification |
|---|---|
| BY | citer l'auteur |
| NC | pas d'utilisation commerciale |
| ND | pas de modification |
| SA | partager dans les mêmes conditions |

## La cyberviolence
- **Cyberharcèlement** : messages, moqueries, rumeurs ou photos répétés pour humilier quelqu'un. Les auteurs **et** ceux qui partagent sont responsables.
- **Usurpation d'identité** : se faire passer pour quelqu'un (faux profil, utilisation de son compte). C'est un délit puni par la loi.
- **Usage détourné** : publier une photo sans accord, diffuser une conversation privée.

En cas de problème : en parler à un adulte, faire des captures d'écran, signaler le contenu, appeler le **3018** (numéro national gratuit contre le cyberharcèlement).

## Le numérique, un enjeu stratégique
Le numérique transforme les métiers : maintenance de machines à distance, analyse de données, conception assistée par ordinateur, cybersécurité, robotique. Les entreprises et les États protègent leurs données comme un bien précieux. Mais le numérique a aussi un coût environnemental, surtout lié à la **fabrication** des appareils : les garder longtemps est le geste le plus efficace.

> **À retenir** : tes **traces** (cookies, géolocalisation) forment ton identité numérique. Les **données personnelles** sont protégées par le **RGPD** (contrôle par la CNIL). **Identifier** = dire qui on est ; **authentifier** = le prouver. Mot de passe **long, varié, unique** + **double authentification**. Les œuvres en ligne sont protégées par le **droit d'auteur** (licences Creative Commons). Cyberviolence : en parler, signaler, **3018**.
`,
      exercices: [
        { type: "qcm", question: "Tu tapes ton adresse mail puis ton mot de passe pour te connecter à l'ENT. Que réalise la saisie du mot de passe ?", choix: ["L'identification", "L'authentification", "Le chiffrement du disque", "La géolocalisation"], reponse: 1, explication: "L'adresse mail **identifie** (dit qui tu es) ; le mot de passe **authentifie** (prouve que c'est bien toi)." },
        { type: "vf", question: "Les cookies (témoins de connexion) sont de petits fichiers déposés par les sites web pour mémoriser des informations sur ta navigation.", reponse: true, explication: "C'est exact. Certains sont utiles (mémoriser ton panier), d'autres servent à la publicité ciblée : ceux-là nécessitent ton consentement." },
        { type: "saisie", question: "Un cadenas à code a 4 molettes, chacune avec les chiffres de 0 à 9. Combien de combinaisons différentes existe-t-il ? (nombre)", reponses: ["10000", "10 000", "10⁴", "dix mille"], explication: "10 × 10 × 10 × 10 = **10 000** combinaisons. C'est très peu pour un ordinateur : d'où l'intérêt de mots de passe longs." },
        { type: "qcm", question: "Quelle est la meilleure protection si ton mot de passe a été volé lors d'une fuite de données ?", choix: ["Utiliser le même mot de passe partout", "Écrire le mot de passe sur un post-it collé à l'écran", "Activer la double authentification et changer le mot de passe", "Désactiver les mises à jour"], reponse: 2, explication: "Avec la **double authentification**, le pirate a aussi besoin de ton téléphone. Et un mot de passe unique par compte évite qu'une fuite ouvre tous tes comptes." },
        { type: "qcm", question: "Une image est publiée sous licence Creative Commons **BY-NC**. Que peux-tu faire ?", choix: ["La réutiliser dans un exposé en citant l'auteur", "La vendre sur des tee-shirts", "La réutiliser sans citer personne", "Dire que tu en es l'auteur"], reponse: 0, explication: "**BY** : tu dois citer l'auteur ; **NC** : pas d'usage commercial. Un exposé scolaire en citant l'auteur est autorisé ; la vente ne l'est pas." },
        { type: "vf", question: "Une photo trouvée sur internet peut être réutilisée librement puisqu'elle est publique.", reponse: false, explication: "Être visible ne veut pas dire être libre de droits. Le **droit d'auteur** s'applique : il faut une autorisation ou une licence qui permet la réutilisation." },
        { type: "qcm", question: "Tu reçois ce SMS : « Votre colis est bloqué, payez 1,99 € de frais ici : lien-bizarre.xyz ». De quoi s'agit-il probablement ?", choix: ["D'une mise à jour de sécurité", "D'un cookie", "D'une licence Creative Commons", "D'une tentative d'hameçonnage"], reponse: 3, explication: "Message urgent, petite somme, lien inconnu : c'est un **hameçonnage** (phishing) destiné à voler tes coordonnées bancaires. Ne clique pas, supprime et signale." },
        { type: "saisie", question: "Quel est le numéro national gratuit à appeler en cas de cyberharcèlement ? (4 chiffres)", reponses: ["3018"], explication: "Le **3018** est gratuit, anonyme et confidentiel. Il peut aussi aider à faire supprimer des contenus." },
        { type: "redaction", question: "**Sujet type brevet.** Léa, 14 ans, installe l'application de sa montre connectée pour suivre ses footings. L'application demande : accès à la position GPS en permanence, accès aux contacts, accès aux photos, création d'un compte avec un mot de passe. Elle choisit « lea2012 », le même que pour son réseau social. 1) Identifie les données personnelles collectées et explique pourquoi certaines autorisations ne sont pas justifiées. 2) Explique les risques liés à son mot de passe et propose une solution. 3) Rédige, en 5 lignes environ, trois règles d'usage raisonné des objets connectés en les justifiant.", corrige: "1) **Données personnelles** : position GPS (lieux et horaires de ses footings, donc son domicile), contacts de ses proches, photos, identifiant et mot de passe. La **position pendant le footing** est utile au service (tracer le parcours), mais la position **en permanence**, les **contacts** et les **photos** ne sont pas nécessaires pour suivre une course : elles peuvent servir à la publicité ou être volées. Il faut refuser ces autorisations (principe : ne donner que ce qui est nécessaire).\n\n2) **Mot de passe** : « lea2012 » est **court** (7 caractères), **facile à deviner** (prénom + année) et **réutilisé** : si un des deux services est piraté, le pirate peut entrer dans l'autre. Solution : un mot de passe d'au moins 12 caractères mélangeant minuscules, majuscules, chiffres et symboles, **différent** pour chaque compte, si possible avec la **double authentification**.\n\n3) **Règles d'usage raisonné** :\n- je n'accorde que les autorisations utiles au service, car chaque donnée collectée peut être revendue ou volée ;\n- je désactive la géolocalisation quand je ne m'en sers pas et je ne publie pas mes parcours en public, pour ne pas révéler où j'habite ;\n- je mets à jour l'application et la montre, car les mises à jour corrigent des failles de sécurité.\n\n> Rappel : en France, avant 15 ans, un réseau social qui s'appuie sur le consentement pour utiliser les données doit obtenir à la fois l'accord de l'adolescent et celui d'un parent (RGPD et loi Informatique et libertés)." },
      ],
    },
    {
      id: "choix-ost-developpement-durable",
      titre: "Choisir un objet : cycle de vie, développement durable et analyse multicritère",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## Les trois piliers du développement durable
Le **développement durable** répond aux besoins d'aujourd'hui sans empêcher les générations futures de répondre aux leurs. Il repose sur **trois piliers** :
- **environnemental** : préserver les ressources, limiter la pollution et les émissions de gaz à effet de serre ;
- **social** : conditions de travail, santé, sécurité, accès de tous au service ;
- **économique** : coût raisonnable, emplois, rentabilité.

Un choix est durable quand il est équilibré sur les **trois** piliers.

## Le cycle de vie d'un objet
| Étape | Exemples d'impacts |
|---|---|
| Extraction des matières premières | mines, consommation d'eau, destruction de milieux |
| Transformation et fabrication | énergie, déchets, produits chimiques |
| Assemblage et emballage | énergie, matériaux d'emballage |
| Transport (à chaque étape) | carburant, émissions de CO₂ |
| Utilisation | consommation d'énergie, d'eau, de consommables |
| Fin de vie | réemploi, recyclage, incinération, mise en décharge |

L'**analyse du cycle de vie** (ACV) mesure les impacts à toutes les étapes avec des **indicateurs** : effet sur l'**air** (gaz à effet de serre), l'**eau**, les **sols**, la **santé** humaine, l'épuisement des ressources.

>! Pour un smartphone, l'essentiel de l'impact environnemental vient de la **fabrication** (extraction des métaux, composants électroniques). Pour un réfrigérateur ou un radiateur, c'est plutôt l'**utilisation** (électricité consommée pendant des années). Les leviers d'action ne sont donc pas les mêmes.

## Les étiquettes qui aident à choisir
- **Étiquette énergie** (classes de A à G) : consommation d'énergie d'un appareil électroménager, d'un téléviseur, d'une lampe.
- **Indice de réparabilité** (depuis 2021, note sur 10) : il évalue la documentation, la facilité de démontage, la disponibilité et le prix des pièces détachées.
- **Indice de durabilité** (depuis 2025 pour les téléviseurs, puis les lave-linge à hublot) : il remplace l'indice de réparabilité pour ces produits et ajoute des critères de **fiabilité** (robustesse, durée de vie, facilité d'entretien).

## Choisir avec une analyse multicritère
Quand plusieurs objets répondent au même besoin, on les compare de façon **objective** :
1. **Lister** les objets possibles.
2. **Choisir les critères** : performance, coût, efficacité énergétique, réparabilité, durabilité, recyclabilité, masse...
3. **Pondérer** : donner un **coefficient** à chaque critère selon son importance.
4. **Noter** chaque objet sur chaque critère.
5. **Calculer** le score total : somme des (note × coefficient).
6. **Choisir** et **argumenter**.

>! Exemple résolu (notes sur 5, données fictives) :
>! | Critère (coefficient) | Aspirateur A | Aspirateur B | Aspirateur C |
>! |---|---|---|---|
>! | Autonomie et efficacité (3) | 4 | 3 | 5 |
>! | Réparabilité (2) | 3 | 5 | 2 |
>! | Prix (2) | 2 | 4 | 3 |
>! | Masse (1) | 3 | 2 | 3 |
>! | **Score** | 4×3 + 3×2 + 2×2 + 3×1 = **25** | 9 + 10 + 8 + 2 = **29** | 15 + 4 + 6 + 3 = **28** |
>! B obtient le meilleur score : il est un peu moins performant mais bien plus réparable et moins cher.

## Le coût global
Le prix d'achat ne suffit pas : il faut ajouter le coût de l'**utilisation** (énergie, consommables, réparations) sur toute la durée de vie.

>! Exemple : un lave-linge X à 450 € consomme 150 kWh par an ; un lave-linge Y à 380 € consomme 200 kWh par an. Avec un prix fictif de 0,25 € le kWh, sur 10 ans : X coûte 450 + 150 × 10 × 0,25 = **825 €** ; Y coûte 380 + 200 × 10 × 0,25 = **880 €**. Le moins cher à l'achat n'est pas le moins cher au total.

> **À retenir** : 3 piliers (**environnemental, social, économique**). Cycle de vie : extraction → fabrication → assemblage → transport → utilisation → fin de vie. Étiquette énergie (A à G), **indice de réparabilité** et **indice de durabilité** (sur 10). Analyse **multicritère** : critères, **coefficients**, notes, score = somme des notes × coefficients. Penser au **coût global**.
`,
      exercices: [
        { type: "qcm", question: "Quels sont les trois piliers du développement durable ?", choix: ["Rapide, solide, joli", "Environnemental, social, économique", "Matière, énergie, information", "Alimenter, distribuer, convertir"], reponse: 1, explication: "Le développement durable équilibre l'**environnement**, le **social** et l'**économie**. « Matière, énergie, information » sont les trois champs d'étude des objets ; « alimenter, distribuer, convertir » sont des fonctions de la chaîne d'énergie." },
        { type: "vf", question: "L'indice de réparabilité est une note sur 10 affichée sur certains produits, comme les smartphones et les ordinateurs portables.", reponse: true, explication: "Obligatoire en France depuis 2021, il note notamment la documentation, la facilité de démontage, la disponibilité et le prix des pièces détachées." },
        { type: "qcm", question: "Pour un smartphone, quelle étape du cycle de vie pèse en général le plus sur l'environnement ?", choix: ["L'utilisation (recharge)", "Le transport jusqu'au magasin", "La fabrication (extraction des métaux, composants)", "Le recyclage"], reponse: 2, explication: "La recharge consomme peu. L'essentiel de l'impact vient de la **fabrication** : extraction de métaux, fabrication des puces et de l'écran. Garder son téléphone plus longtemps est donc le geste le plus efficace." },
        { type: "saisie", question: "Analyse multicritère. Coefficients : prix 2, autonomie 3, réparabilité 1. Une trottinette obtient les notes : prix 4, autonomie 3, réparabilité 5. Quel est son score total ? (nombre)", reponses: ["22", "22 points"], explication: "4 × 2 + 3 × 3 + 5 × 1 = 8 + 9 + 5 = **22**." },
        { type: "qcm", question: "Dans une analyse multicritère, à quoi sert le **coefficient** (pondération) d'un critère ?", choix: ["À donner plus de poids aux critères les plus importants pour l'utilisateur", "À calculer le prix de l'objet", "À éliminer les critères inutiles", "À mesurer la masse de l'objet"], reponse: 0, explication: "Le coefficient traduit l'**importance** du critère : pour un livreur à vélo, l'autonomie compte plus que la couleur, on lui donne donc un coefficient plus élevé." },
        { type: "vf", question: "L'objet le moins cher à l'achat est toujours le moins cher sur toute sa durée de vie.", reponse: false, explication: "Il faut raisonner en **coût global** : un appareil moins cher mais qui consomme plus d'énergie ou tombe vite en panne peut coûter plus cher au total." },
        { type: "saisie", question: "Un radiateur coûte 120 € et consomme 800 kWh par an. Avec un prix fictif de 0,25 € le kWh, quel est son coût global sur 5 ans, en euros ? (nombre)", reponses: ["1120", "1 120"], explication: "Énergie : 800 × 5 × 0,25 = 1 000 €. Coût global : 120 + 1 000 = **1 120 €**. Ici, l'utilisation coûte bien plus que l'achat." },
        { type: "qcm", question: "Quelle étiquette indique la consommation d'énergie d'un lave-linge sous forme de classes de A à G ?", choix: ["L'indice de réparabilité", "La licence Creative Commons", "Le marquage IP67", "L'étiquette énergie"], reponse: 3, explication: "L'**étiquette énergie** classe les appareils de A (le plus économe) à G. L'indice de réparabilité concerne la facilité de réparation, l'indice IP l'étanchéité." },
        { type: "redaction", question: "**Sujet type brevet.** Une famille hésite entre deux réfrigérateurs (données fictives). Modèle M : 520 €, classe énergie C, 160 kWh/an, indice de réparabilité 7,8/10, pièces disponibles 10 ans. Modèle N : 430 €, classe énergie E, 240 kWh/an, indice 5,1/10, pièces disponibles 7 ans. Prix fictif de l'électricité : 0,25 € le kWh ; durée d'usage prévue : 12 ans. 1) Calcule le coût global de chaque modèle sur 12 ans. 2) Indique à quelle étape du cycle de vie se situe l'essentiel de l'impact d'un réfrigérateur et justifie. 3) Choisis un modèle en argumentant sur les trois piliers du développement durable.", corrige: "1) **Coût global sur 12 ans** :\n- M : énergie 160 × 12 × 0,25 = 480 € ; coût global = 520 + 480 = **1 000 €** ;\n- N : énergie 240 × 12 × 0,25 = 720 € ; coût global = 430 + 720 = **1 150 €**.\nM est plus cher à l'achat (90 € de plus) mais revient **150 € moins cher** sur 12 ans.\n\n2) Un réfrigérateur fonctionne **jour et nuit pendant des années** : l'essentiel de son impact se situe à l'étape d'**utilisation** (électricité consommée). Le choix d'un appareil économe (bonne classe énergie) est donc décisif.\n\n3) **Choix argumenté : modèle M**.\n- **Pilier environnemental** : il consomme 80 kWh de moins par an, soit 960 kWh sur 12 ans ; il est plus réparable (7,8/10) et ses pièces sont disponibles plus longtemps, ce qui retarde sa fin de vie et limite les déchets.\n- **Pilier économique** : malgré un prix d'achat plus élevé, son coût global est inférieur de 150 €.\n- **Pilier social** : un appareil réparable fait travailler des réparateurs locaux, et une facture d'énergie plus faible pèse moins sur le budget de la famille.\n\nConclusion : le modèle M répond mieux au besoin dans une logique de développement durable.\n\n> Barème indicatif : calculs justifiés (2 pts), étape d'utilisation justifiée (1 pt), argumentation sur les trois piliers avec des données chiffrées (2 pts)." },
      ],
    },
    {
      id: "protocole-mesure-performance",
      titre: "Mesurer une performance : concevoir un protocole de test",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## Caractéristique, performance, exigence
- Une **caractéristique** décrit l'objet : dimensions, masse, matériau, tension de la batterie.
- Une **performance** décrit ce que l'objet est **capable de faire** : vitesse, autonomie, temps de réaction, distance de freinage, éclairement, débit.
- Une **exigence** (issue du cahier des charges ou d'une norme) fixe le **niveau attendu** : « autonomie d'au moins 25 km », « temps de réaction inférieur à 0,5 s ».

Mesurer, c'est vérifier si l'objet **respecte l'exigence**.

## Mesure directe ou indirecte
- **Mesure directe** : l'appareil donne directement la grandeur cherchée (un mètre ruban donne une longueur, un chronomètre une durée).
- **Mesure indirecte** : on mesure d'autres grandeurs puis on **calcule** (vitesse = distance ÷ durée ; énergie = puissance × durée ; distance d'un obstacle à partir du temps de trajet d'un écho).

## Les appareils de mesure
| Grandeur | Appareil | Unité |
|---|---|---|
| Longueur | réglet, mètre ruban, pied à coulisse, télémètre laser | m, mm |
| Durée | chronomètre | s |
| Masse | balance | kg, g |
| Tension | voltmètre (multimètre), branché **en dérivation** | V |
| Intensité | ampèremètre (multimètre), branché **en série** | A |
| Puissance électrique | wattmètre | W |
| Vitesse de rotation | tachymètre | tr/min |
| Éclairement | luxmètre | lux |
| Niveau sonore | sonomètre | dB |
| Force | dynamomètre | N |
| Température | thermomètre | °C |

## Rédiger un protocole expérimental
Un **protocole** est une suite d'étapes assez précise pour qu'une autre personne puisse **refaire** l'expérience et obtenir le même résultat. Il comporte :
1. le **but** : quelle performance, quelle exigence ;
2. le **matériel** (avec les appareils de mesure) ;
3. un **schéma** légendé du montage ;
4. les **étapes** numérotées, avec les **conditions** fixées (même charge, même sol, batterie pleine...) ;
5. **plusieurs essais** (au moins 3) notés dans un **tableau**, puis la **moyenne** ;
6. la **comparaison** avec l'exigence et une **conclusion** (respectée ou non).

>! Exemple résolu : on veut vérifier qu'une trottinette a une autonomie d'au moins 25 km. On charge complètement la batterie, on roule sur un parcours plat avec un conducteur de 60 kg à vitesse constante, et on relève la distance au compteur quand la trottinette s'arrête. Trois essais donnent 23,5 km, 24,1 km et 23,8 km. Moyenne : (23,5 + 24,1 + 23,8) ÷ 3 = 71,4 ÷ 3 = **23,8 km**. Conclusion : 23,8 km < 25 km, l'exigence **n'est pas respectée**.

## Écart, précision et erreurs
- **Écart** = valeur mesurée − valeur attendue (ou sa valeur absolue).
- **Écart relatif** = écart ÷ valeur attendue, exprimé en %.
- Toute mesure a une **incertitude** : précision de l'appareil, erreur de lecture, conditions qui varient. Faire **plusieurs essais** et calculer une moyenne réduit l'effet des erreurs.

>! Exemple : autonomie annoncée 25 km, moyenne mesurée 23,8 km. Écart = 1,2 km ; écart relatif = 1,2 ÷ 25 = 0,048, soit **4,8 %**.

## Mesurer avec un écho (capteur à ultrasons, sonar)
Le capteur émet un son, qui rebondit sur l'obstacle et revient. Le temps mesuré correspond à l'**aller-retour**. Avec v la vitesse du son : **d = v × t ÷ 2** (ou d = v × t_aller).

>! Exemple : dans l'air, v ≈ 340 m/s. Temps aller-retour : 5 ms = 0,005 s. d = 340 × 0,005 ÷ 2 = **0,85 m**.

Pour vérifier la **précision** d'un tel capteur : placer un obstacle à des distances **connues** (mesurées au mètre ruban, par exemple 0,50 m, 1,00 m, 1,50 m), comparer à chaque fois la distance affichée et la distance réelle, et vérifier que l'écart reste inférieur à la précision exigée.

> **À retenir** : performance = ce que l'objet sait faire ; exigence = niveau attendu. Mesure **directe** (lue) ou **indirecte** (calculée). Protocole : **but, matériel, schéma, étapes, plusieurs essais, tableau, moyenne, comparaison à l'exigence, conclusion**. Voltmètre **en dérivation**, ampèremètre **en série**. Écho : **d = v × t ÷ 2**.
`,
      exercices: [
        { type: "qcm", question: "Quel appareil permet de mesurer la vitesse de rotation d'un moteur ?", choix: ["Un luxmètre", "Un sonomètre", "Un dynamomètre", "Un tachymètre"], reponse: 3, explication: "Le **tachymètre** mesure une vitesse de rotation (en tours par minute). Le luxmètre mesure l'éclairement, le sonomètre le niveau sonore, le dynamomètre une force." },
        { type: "vf", question: "Calculer la vitesse d'un robot à partir d'une distance mesurée au mètre ruban et d'une durée mesurée au chronomètre est une mesure indirecte.", reponse: true, explication: "La vitesse n'est pas lue sur un appareil : elle est **calculée** (v = d ÷ t) à partir de deux mesures directes. C'est une mesure indirecte." },
        { type: "saisie", question: "Trois essais d'autonomie d'un robot donnent 42 min, 45 min et 39 min. Quelle est l'autonomie moyenne, en minutes ? (nombre)", reponses: ["42"], explication: "(42 + 45 + 39) ÷ 3 = 126 ÷ 3 = **42 min**." },
        { type: "qcm", question: "Pourquoi réalise-t-on plusieurs essais dans un protocole ?", choix: ["Pour que l'expérience dure plus longtemps", "Pour réduire l'effet des erreurs de mesure et vérifier que le résultat est reproductible", "Parce qu'un seul essai est interdit par la loi", "Pour user la batterie"], reponse: 1, explication: "Chaque mesure comporte des erreurs (lecture, conditions). Plusieurs essais et une **moyenne** donnent un résultat plus fiable et montrent si l'expérience est **reproductible**." },
        { type: "saisie", question: "Un capteur à ultrasons mesure un temps d'aller-retour de 4 ms (0,004 s). La vitesse du son dans l'air est d'environ 340 m/s. À quelle distance se trouve l'obstacle, en m ? (nombre)", reponses: ["0,68", "0,68 m"], explication: "d = v × t ÷ 2 = 340 × 0,004 ÷ 2 = 1,36 ÷ 2 = **0,68 m**. Il ne faut pas oublier de diviser par 2 : le son fait l'aller **et** le retour." },
        { type: "qcm", question: "Pour mesurer la tension aux bornes d'un moteur, comment branche-t-on le voltmètre ?", choix: ["En dérivation, aux bornes du moteur", "En série avec le moteur", "À la place du moteur", "Sur la prise secteur uniquement"], reponse: 0, explication: "Un **voltmètre** se branche toujours **en dérivation** (en parallèle) aux bornes du composant. C'est l'ampèremètre qui se branche en série." },
        { type: "saisie", question: "Une lampe doit fournir un éclairement de 500 lux. On mesure 450 lux. Quel est l'écart relatif, en % ? (nombre)", reponses: ["10", "10 %"], explication: "Écart = 500 − 450 = 50 lux. Écart relatif = 50 ÷ 500 = 0,10, soit **10 %**." },
        { type: "vf", question: "Dans un protocole, il est inutile de préciser les conditions de l'essai (charge, type de sol, état de la batterie) puisque l'appareil de mesure est précis.", reponse: false, explication: "Si les conditions changent d'un essai à l'autre, les résultats ne sont pas comparables. Un protocole doit **fixer les conditions** pour que l'expérience soit reproductible." },
        { type: "redaction", question: "**Sujet type brevet.** Un robot aspirateur est équipé d'un capteur à ultrasons à l'avant pour détecter les meubles. Le cahier des charges exige qu'il détecte un obstacle à 30 cm avec une précision de 2 cm (la distance affichée doit être comprise entre 28 cm et 32 cm). 1) S'agit-il d'une caractéristique ou d'une performance ? 2) À l'aide d'un schéma décrit en texte, d'une liste de matériel et d'étapes numérotées, propose un protocole qui permet de vérifier cette exigence. 3) Lors des essais, on obtient 29,5 cm, 31,0 cm et 33,5 cm. Conclus.", corrige: "1) La précision de détection est une **performance** : elle décrit ce que le capteur est capable de faire.\n\n2) **Protocole** :\n- **But** : vérifier que la distance mesurée par le capteur pour un obstacle à 30 cm est comprise entre 28 et 32 cm.\n- **Matériel** : le robot (batterie chargée) relié à un ordinateur ou à un écran qui affiche la distance mesurée, un obstacle plat et rigide (une planche), un mètre ruban, un support pour que le robot reste immobile.\n- **Schéma** (décrit) : le robot posé au sol, capteur face à la planche verticale ; une flèche cotée « 30 cm » entre l'avant du capteur et la planche ; le mètre ruban posé au sol le long de cette distance.\n- **Étapes** :\n  1. Placer la planche bien perpendiculaire au capteur, à 30 cm mesurés au mètre ruban.\n  2. Mettre le robot sous tension, roues bloquées, et relever la distance affichée.\n  3. Recommencer au moins 3 fois en replaçant à chaque fois la planche à 30 cm ; noter les résultats dans un tableau.\n  4. Pour aller plus loin, refaire les mesures à d'autres distances connues (20 cm, 40 cm) et avec d'autres surfaces (tissu, bois).\n  5. Comparer chaque mesure à l'intervalle exigé [28 cm ; 32 cm] et conclure.\n\n3) **Conclusion** : 29,5 cm et 31,0 cm sont dans l'intervalle, mais **33,5 cm** est en dehors (écart de 3,5 cm > 2 cm). L'exigence **n'est pas respectée à chaque essai** : le capteur n'est pas assez fiable. Il faudrait chercher la cause (planche mal placée, surface, capteur à régler ou à remplacer) puis refaire les essais.\n\n> L'évaluation valorise un protocole reproductible : distance connue mesurée indépendamment, plusieurs essais, comparaison à la précision exigée." },
      ],
    },
    {
      id: "chaine-energie-schema-bloc",
      titre: "La chaîne d'énergie : schéma bloc, conversions et rendement",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Les quatre fonctions de la chaîne d'énergie
Dans un objet technique, la **chaîne d'énergie** réalise l'action sur la **matière d'œuvre** (déplacer, chauffer, éclairer). Elle comporte quatre fonctions, toujours dans le même ordre :

| Fonction | Rôle | Constituants courants |
|---|---|---|
| **Alimenter** | fournir l'énergie (la stocker ou la prélever) | batterie, pile, prise secteur, panneau photovoltaïque, réservoir d'air comprimé |
| **Distribuer** | laisser passer l'énergie ou non, la doser | interrupteur, relais, transistor, variateur, contrôleur de moteur, distributeur pneumatique |
| **Convertir** | transformer l'énergie en une autre forme | moteur électrique, lampe, résistance chauffante, vérin, génératrice |
| **Transmettre** | amener l'énergie mécanique à l'endroit utile, adapter le mouvement | engrenages, poulies et courroie, pignons et chaîne, axe, roue |

La chaîne d'énergie reçoit des **ordres** de la chaîne d'information (allumer, accélérer, arrêter) : c'est la fonction **distribuer** qui les applique.

## Le schéma bloc
On représente la chaîne d'énergie par des **blocs** (rectangles) reliés par des **flèches**. Dans chaque bloc : la fonction et le constituant. Sur chaque flèche : la **forme d'énergie** qui circule.

>! Exemple : trottinette électrique
>! ~~~
>! [ALIMENTER : batterie] --énergie électrique-->
>! [DISTRIBUER : contrôleur] --énergie électrique-->
>! [CONVERTIR : moteur] --énergie mécanique (rotation)-->
>! [TRANSMETTRE : roue] --> déplacement de la trottinette
>! ~~~
>! La gâchette d'accélérateur est un **capteur** : elle appartient à la **chaîne d'information**, pas à la chaîne d'énergie.

## Les formes d'énergie et les conversions
Formes : **électrique**, **mécanique** (cinétique : mouvement ; potentielle : hauteur), **thermique**, **lumineuse**, **chimique**, **pneumatique** (air comprimé).

| Constituant | Énergie d'entrée | Énergie utile en sortie |
|---|---|---|
| Moteur électrique | électrique | mécanique (rotation) |
| Génératrice, alternateur | mécanique | électrique |
| Lampe | électrique | lumineuse |
| Radiateur (résistance) | électrique | thermique |
| Vérin pneumatique | pneumatique | mécanique (translation) |
| Batterie qui se décharge | chimique | électrique |
| Panneau photovoltaïque | lumineuse | électrique |

## Puissance, énergie et unités
- La **puissance** P s'exprime en **watts (W)**.
- L'**énergie** E s'exprime en **joules (J)** ou en **wattheures (Wh)** : **E = P × t**. Avec t en secondes, E est en J ; avec t en heures, E est en Wh. **1 Wh = 3 600 J** ; 1 kWh = 1 000 Wh.
- L'énergie stockée dans une batterie : **E (Wh) = tension (V) × capacité (Ah)**.

>! Exemple résolu : une batterie de vélo de 36 V et 10 Ah stocke 36 × 10 = **360 Wh**. Avec un moteur qui consomme 250 W, l'autonomie est t = E ÷ P = 360 ÷ 250 = **1,44 h**, soit environ 1 h 26 min (0,44 × 60 ≈ 26 min).

## Le rendement
Aucun convertisseur n'est parfait : une partie de l'énergie est **perdue**, le plus souvent en **chaleur**.

**Rendement η = puissance utile ÷ puissance absorbée** (sans unité, entre 0 et 1, souvent en %).

>! Exemple : un moteur absorbe 400 W et fournit 300 W de puissance mécanique. η = 300 ÷ 400 = **0,75**, soit **75 %**. Les pertes valent 400 − 300 = 100 W, transformés en chaleur (le moteur chauffe).

Le rendement global d'une chaîne est le **produit** des rendements : un contrôleur à 95 % suivi d'un moteur à 80 % donne 0,95 × 0,80 = 0,76, soit 76 %.

## Choisir une source d'énergie
La fonction **alimenter** peut être assurée par plusieurs sources. On la choisit d'après le **besoin** (objet fixe ou mobile), l'**énergie nécessaire**, la **masse**, le **coût** et l'**impact environnemental**.

| Source | Avantages | Inconvénients | Usage typique |
|---|---|---|---|
| Pile (non rechargeable) | simple, peu chère à l'achat | jetée après usage (déchet à rapporter en point de collecte), coût élevé à la longue | télécommande, détecteur de fumée |
| Batterie rechargeable (lithium-ion) | se recharge des centaines de fois, beaucoup d'énergie pour sa masse | fabrication gourmande en métaux (lithium, cobalt), s'use, risque d'incendie si elle est abîmée | smartphone, trottinette, robot |
| Secteur (prise 230 V) | énergie disponible sans limite de durée, puissance élevée | objet fixe, relié par un câble | électroménager, ordinateur de bureau |
| Panneau photovoltaïque (avec une batterie) | énergie renouvelable, objet autonome loin des prises | dépend de l'ensoleillement ; il faut stocker l'énergie pour la nuit | borne isolée, capteur extérieur |

Méthode : 1) calcule l'énergie nécessaire, **E = P × t** ; 2) calcule l'énergie stockée par chaque source possible, **E = tension × capacité** ; 3) élimine celles qui ne suffisent pas (garde une **marge**) ; 4) départage avec les autres critères (masse, coût, recharge, environnement).

>! Exemple résolu : un capteur connecté consomme 0,5 W en permanence et doit tenir 3 jours (72 h) sans recharge. Énergie nécessaire : 0,5 × 72 = **36 Wh**. Batterie A : 3,7 V × 5 Ah = 18,5 Wh, insuffisante. Batterie B : 3,7 V × 12 Ah = 44,4 Wh, suffisante avec une marge : on choisit **B**.

> **À retenir** : **Alimenter → Distribuer → Convertir → Transmettre**. Dans le schéma bloc, indique la **forme d'énergie** sur chaque flèche. **E = P × t** (Wh si t en h ; 1 Wh = 3 600 J). Batterie : **Wh = V × Ah**. **Rendement = P utile ÷ P absorbée** ; les pertes partent surtout en chaleur. Choisir une **source d'énergie** : énergie nécessaire (P × t), énergie stockée (V × Ah), marge, puis masse, coût et environnement. Capteurs et boutons appartiennent à la chaîne d'**information**.
`,
      exercices: [
        { type: "qcm", question: "Dans un portail motorisé, quel constituant réalise la fonction **distribuer** ?", choix: ["Le moteur", "Le relais commandé par la carte électronique", "La crémaillère", "La prise secteur"], reponse: 1, explication: "Le **relais** laisse passer ou coupe l'énergie vers le moteur selon les ordres de la carte : il **distribue**. Le moteur convertit, la crémaillère transmet, la prise alimente." },
        { type: "qcm", question: "Un vérin pneumatique convertit :", choix: ["l'énergie électrique en énergie lumineuse", "l'énergie thermique en énergie électrique", "l'énergie pneumatique (air comprimé) en énergie mécanique de translation", "l'énergie mécanique en énergie chimique"], reponse: 2, explication: "L'air comprimé pousse le piston du vérin, qui sort ou rentre en ligne droite : énergie **pneumatique → mécanique** (translation)." },
        { type: "vf", question: "Dans une trottinette électrique, la gâchette d'accélérateur fait partie de la chaîne d'énergie.", reponse: false, explication: "La gâchette **mesure** la volonté du conducteur et envoie une information au contrôleur : c'est un capteur de la **chaîne d'information**. Le contrôleur, lui, distribue l'énergie." },
        { type: "saisie", question: "Une batterie de trottinette a une tension de 36 V et une capacité de 7,5 Ah. Quelle énergie stocke-t-elle, en Wh ? (nombre)", reponses: ["270", "270 Wh", "270 wattheures"], explication: "E = V × Ah = 36 × 7,5 = **270 Wh**." },
        { type: "saisie", question: "Une batterie stocke 270 Wh. Le moteur consomme en moyenne 300 W. Quelle est l'autonomie, en heures ? (nombre décimal)", reponses: ["0,9", "0,9 h"], explication: "t = E ÷ P = 270 ÷ 300 = **0,9 h**, soit 0,9 × 60 = 54 minutes." },
        { type: "saisie", question: "Un moteur absorbe 500 W et fournit 400 W de puissance mécanique. Quel est son rendement, en % ? (nombre)", reponses: ["80", "80 %"], explication: "η = 400 ÷ 500 = 0,8, soit **80 %**. Les 100 W perdus sont transformés en chaleur." },
        { type: "qcm", question: "Combien de joules vaut 1 wattheure ?", choix: ["3 600 J", "60 J", "1 000 J", "100 J"], reponse: 0, explication: "1 Wh = 1 W pendant 1 h = 1 W × 3 600 s = **3 600 J**." },
        { type: "vf", question: "Le rendement d'un moteur électrique réel peut être supérieur à 100 %.", reponse: false, explication: "Impossible : la puissance utile est toujours **inférieure** à la puissance absorbée, car il y a des pertes (chaleur, frottements). Le rendement est donc inférieur à 1 (100 %)." },
        { type: "redaction", question: "**Sujet type brevet.** Document : « Le vélo à assistance électrique (VAE) est équipé d'une batterie lithium-ion de 36 V et 14 Ah. Un contrôleur électronique, qui reçoit les informations du capteur de pédalage, fait varier la puissance envoyée au moteur placé dans le moyeu (la partie centrale) de la roue arrière. Le moteur, d'une puissance de 250 W, fait tourner directement la roue. Un écran affiche la vitesse et le niveau de charge. » 1) Identifie les constituants de la chaîne d'énergie et représente-la par un schéma bloc en indiquant la forme d'énergie sur chaque flèche. 2) Cite deux constituants du document qui n'appartiennent pas à la chaîne d'énergie et dis à quelle chaîne ils appartiennent. 3) Calcule l'énergie stockée dans la batterie et l'autonomie si le moteur fonctionne en permanence à 250 W. 4) Le moteur a un rendement de 80 %. Calcule la puissance mécanique utile et explique ce que deviennent les pertes.", corrige: "1) **Constituants** : batterie (alimenter), contrôleur (distribuer), moteur (convertir), roue arrière / moyeu (transmettre).\n\n**Schéma bloc** :\n~~~\n[ALIMENTER : batterie 36 V] --énergie électrique-->\n[DISTRIBUER : contrôleur] --énergie électrique-->\n[CONVERTIR : moteur 250 W] --énergie mécanique de rotation-->\n[TRANSMETTRE : moyeu et roue] --> déplacement du vélo\n~~~\n\n2) Le **capteur de pédalage** et l'**écran** appartiennent à la **chaîne d'information** (acquérir et communiquer). Ils ne transportent pas l'énergie qui fait avancer le vélo.\n\n3) **Énergie** : E = 36 × 14 = **504 Wh**. **Autonomie** : t = 504 ÷ 250 = **2,016 h**, soit environ 2 h (en pratique davantage, car le moteur ne fonctionne pas toujours à pleine puissance et le cycliste pédale).\n\n4) **Puissance utile** : P utile = 0,80 × 250 = **200 W**. Les 50 W de pertes sont transformés en **chaleur** (échauffement du moteur, frottements).\n\n> Points d'attention : ne pas placer le capteur dans la chaîne d'énergie ; écrire les unités ; respecter l'ordre alimenter, distribuer, convertir, transmettre." },
        { type: "qcm", question: "Un détecteur de passage d'animaux doit fonctionner au fond d'un jardin, loin de toute prise, pendant plusieurs années sans intervention. Quelle source d'énergie est la plus adaptée ?", choix: ["Une prise secteur avec une rallonge de 50 m", "Un panneau photovoltaïque associé à une petite batterie", "Une pile non rechargeable à changer chaque mois", "Un réservoir d'air comprimé"], reponse: 1, explication: "Le panneau photovoltaïque produit de l'énergie sur place, et la batterie la **stocke** pour la nuit : l'objet est autonome et utilise une énergie renouvelable. La rallonge est peu pratique et dangereuse dehors ; les piles changées chaque mois font des déchets et demandent une intervention." },
        { type: "saisie", question: "Un objet connecté consomme 2 W en permanence. Quelle énergie, en Wh, doit stocker sa batterie pour qu'il fonctionne 24 heures sans recharge ? (nombre)", reponses: ["48", "48 Wh", "48 wattheures"], explication: "E = P × t = 2 × 24 = **48 Wh**. En pratique, on choisit une batterie un peu plus grosse pour garder une marge." },
        { type: "redaction", question: "**Sujet type brevet.** Une lampe avant de vélo consomme 3 W. Le cahier des charges exige qu'elle éclaire au moins 4 h sans recharge et qu'elle soit la plus légère possible. Sources proposées : B1 : batterie lithium-ion 3,7 V, 2 Ah, 45 g, rechargeable par USB ; B2 : batterie lithium-ion 3,7 V, 4 Ah, 85 g, rechargeable par USB ; P : boîtier de 3 piles alcalines (4,5 V, 2,5 Ah), 70 g, non rechargeables. 1) Calcule l'énergie nécessaire. 2) Calcule l'énergie stockée par chaque source. 3) Choisis la source et justifie, en ajoutant un argument environnemental.", corrige: "1) **Énergie nécessaire** : E = P × t = 3 × 4 = **12 Wh**.\n\n2) **Énergie stockée** (E = tension × capacité) :\n- B1 : 3,7 × 2 = **7,4 Wh** ;\n- B2 : 3,7 × 4 = **14,8 Wh** ;\n- P : 4,5 × 2,5 = **11,25 Wh**.\n\n3) **Choix** : B1 (7,4 Wh) et P (11,25 Wh) stockent moins que les 12 Wh nécessaires : elles ne respectent pas l'exigence d'autonomie, même si elles sont plus légères. Seule **B2** (14,8 Wh, soit environ 4 h 56 min d'éclairage : 14,8 ÷ 3 ≈ 4,9 h) convient, avec une petite marge. Je choisis donc **B2**. Argument environnemental : elle se recharge des centaines de fois, alors que les piles deviendraient des déchets après chaque usage.\n\n> Méthode : calculer d'abord l'énergie nécessaire, éliminer les sources insuffisantes, puis départager avec les autres critères (masse, recharge, environnement)." },
      ],
    },
    {
      id: "transmission-transformation-mouvement",
      titre: "Transmettre et transformer un mouvement",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Transmettre ou transformer ?
La fonction **transmettre** de la chaîne d'énergie amène le mouvement du moteur jusqu'à l'organe qui agit (roue, bras, portail). Deux cas :
- **transmission** de mouvement : le mouvement reste de **même nature** (rotation → rotation), mais sa vitesse ou son sens peuvent changer ;
- **transformation** de mouvement : le mouvement change de **nature** (rotation ↔ translation).

## Les mécanismes de transmission (rotation → rotation)
| Mécanisme | Sens de rotation (ou position des axes) | Remarques |
|---|---|---|
| Deux **engrenages** (roues dentées) en contact par l'extérieur (**engrenages extérieurs**) | **inversé** | précis, pas de glissement |
| **Poulies et courroie** | **conservé** | silencieux, axes éloignés, peut glisser |
| **Pignons et chaîne** (vélo) | **conservé** | axes éloignés, ne glisse pas |
| **Roue et vis sans fin** | axes perpendiculaires | très forte réduction de vitesse, souvent **irréversible** (la roue ne peut pas entraîner la vis) |

Avec trois engrenages en ligne, le sens du dernier est le même que celui du premier (inversé deux fois). Cas particulier : un pignon qui tourne à l'**intérieur** d'une couronne dentée (engrenage intérieur) tourne dans le **même** sens qu'elle.

## Le rapport de transmission
On appelle **menante** la roue qui entraîne (côté moteur) et **menée** celle qui est entraînée.

**r = N menée ÷ N menante = Z menante ÷ Z menée** (Z = nombre de dents ; N = vitesse de rotation en tr/min).

Pour des poulies, on remplace le nombre de dents par le **diamètre** : r = d menante ÷ d menée.
- r < 1 : la sortie tourne **moins vite** (c'est un **réducteur**) mais avec plus de **couple** (plus de force pour faire tourner) ;
- r > 1 : la sortie tourne **plus vite** (multiplicateur).

>! Exemple résolu : un moteur tourne à 1 500 tr/min. Son pignon a 12 dents, la roue menée en a 36. r = 12 ÷ 36 = 1/3. N menée = 1 500 × 1/3 = **500 tr/min**.

>! Exemple résolu (vélo) : plateau de 44 dents (menant), pignon arrière de 11 dents (mené). r = 44 ÷ 11 = **4** : un tour de pédalier fait faire 4 tours à la roue. Si la roue a un diamètre de 0,70 m, elle avance de π × 0,70 ≈ 2,20 m par tour, donc d ≈ 4 × 2,20 ≈ **8,8 m** par tour de pédalier.

## Les mécanismes de transformation (rotation ↔ translation)
| Mécanisme | Transformation | Exemple |
|---|---|---|
| **Pignon et crémaillère** | rotation ↔ translation | portail coulissant, direction de voiture |
| **Système vis-écrou** | rotation → translation | étau, cric, imprimante 3D (axe vertical) |
| **Bielle-manivelle** | rotation ↔ translation alternative | moteur thermique (le piston pousse la **bielle**, une tige articulée, qui fait tourner le **vilebrequin**, l'axe coudé qui joue le rôle de manivelle), scie sauteuse |
| **Came et poussoir** | rotation → translation alternative | ouverture des soupapes d'un moteur, jouets mécaniques |

> **À retenir** : **transmission** = même type de mouvement ; **transformation** = rotation ↔ translation. Engrenages : sens **inversé** ; poulies-courroie et pignons-chaîne : sens **conservé**. **r = Z menante ÷ Z menée = N menée ÷ N menante** (diamètres pour les poulies). Un réducteur diminue la vitesse et augmente le couple. Pignon-crémaillère, vis-écrou, bielle-manivelle, came : **transformations**.
`,
      exercices: [
        { type: "qcm", question: "Deux engrenages sont en contact. La roue menante tourne dans le sens des aiguilles d'une montre. Dans quel sens tourne la roue menée ?", choix: ["Dans le même sens", "Elle ne tourne pas", "Dans le sens inverse des aiguilles d'une montre", "Elle oscille"], reponse: 2, explication: "Deux engrenages extérieurs en contact tournent en **sens inverses**." },
        { type: "saisie", question: "Un moteur tourne à 1 200 tr/min. Son pignon (menant) a 10 dents, la roue menée en a 40. À quelle vitesse tourne la roue menée, en tr/min ? (nombre)", reponses: ["300", "300 tr/min", "300 tours par minute"], explication: "r = 10 ÷ 40 = 1/4. N menée = 1 200 × 1/4 = **300 tr/min**." },
        { type: "qcm", question: "Quel mécanisme transforme la rotation d'un moteur en translation pour faire coulisser un portail ?", choix: ["Deux poulies et une courroie", "Pignon et crémaillère", "Deux engrenages", "Pignons et chaîne"], reponse: 1, explication: "Le **pignon** tourne et entraîne la **crémaillère** (barre dentée fixée au portail) en ligne droite : rotation → translation. Les trois autres sont des transmissions (rotation → rotation)." },
        { type: "vf", question: "Avec un système poulies-courroie, les deux poulies tournent dans le même sens.", reponse: true, explication: "La courroie entraîne les deux poulies dans le **même sens** (comme la chaîne d'un vélo)." },
        { type: "saisie", question: "Sur un vélo, le plateau a 48 dents et le pignon arrière 16 dents. Combien de tours fait la roue arrière pour un tour de pédalier ? (nombre)", reponses: ["3", "3 tours", "trois", "trois tours"], explication: "r = Z menant ÷ Z mené = 48 ÷ 16 = **3** : la roue fait 3 tours par tour de pédalier." },
        { type: "saisie", question: "Une poulie motrice de 40 mm de diamètre tourne à 3 000 tr/min. Elle entraîne par courroie une poulie de 120 mm. Quelle est la vitesse de la poulie menée, en tr/min ? (nombre)", reponses: ["1000", "1 000", "1000 tr/min", "1000 tours par minute"], explication: "r = d menante ÷ d menée = 40 ÷ 120 = 1/3. N menée = 3 000 ÷ 3 = **1 000 tr/min**." },
        { type: "qcm", question: "Dans un moteur de voiture à essence, quel mécanisme transforme le mouvement de va-et-vient des pistons en rotation ?", choix: ["Roue et vis sans fin", "Pignon et crémaillère", "Poulies et courroie", "Bielle-manivelle (vilebrequin)"], reponse: 3, explication: "La **bielle** relie le piston (translation alternative) au **vilebrequin** (manivelle) qui tourne : c'est le système bielle-manivelle." },
        { type: "qcm", question: "Pourquoi utilise-t-on souvent une roue et vis sans fin dans un treuil ou une barrière ?", choix: ["Parce qu'elle augmente fortement la vitesse de la barrière", "Parce qu'elle réduit fortement la vitesse et bloque la charge à l'arrêt", "Parce qu'elle transforme la rotation en translation", "Parce qu'elle conserve le sens de rotation sans glisser"], reponse: 1, explication: "La vis sans fin donne une **forte réduction** (beaucoup de couple) et elle est souvent **irréversible** : la roue ne peut pas entraîner la vis, la charge reste bloquée même moteur arrêté. C'est une sécurité. Elle ne transforme pas le mouvement (rotation → rotation, axes perpendiculaires)." },
        { type: "redaction", question: "**Sujet type brevet.** Un store banne électrique est déroulé par un moteur qui tourne à 2 800 tr/min. Un réducteur à roue et vis sans fin entraîne le tube d'enroulement : la vis a 1 filet et la roue 70 dents (rapport r = 1/70). Le tube d'enroulement a un diamètre de 8 cm. 1) Calcule la vitesse de rotation du tube en tr/min. 2) Calcule la longueur de toile déroulée par tour de tube, puis en une minute (prends π ≈ 3,14). 3) Le store mesure 3 m de profondeur. Combien de temps faut-il pour le dérouler entièrement ? 4) Explique l'intérêt du caractère irréversible de ce réducteur pour un store. 5) Indique s'il s'agit d'une transmission ou d'une transformation de mouvement et justifie.", corrige: "1) **Vitesse du tube** : N = 2 800 × 1/70 = **40 tr/min**.\n\n2) **Longueur par tour** : périmètre = π × d = 3,14 × 8 = **25,12 cm** ≈ 0,25 m. **En une minute** : 40 × 25,12 = **1 004,8 cm**, soit environ **10 m par minute**.\n\n3) **Durée** : t = 3 ÷ 10,048 ≈ 0,30 min, soit environ **18 secondes** (0,30 × 60).\n\n4) **Irréversibilité** : le vent ou le poids de la toile ne peuvent pas faire tourner la vis à l'envers ; le store reste donc **bloqué** dans sa position même quand le moteur est arrêté, sans frein supplémentaire. C'est une sécurité.\n\n5) Entre le moteur et le tube, c'est une **transmission** (rotation → rotation, axes perpendiculaires). Le déroulement de la toile, lui, est un mouvement de translation obtenu par l'enroulement sur le tube.\n\n> Penser à convertir les unités (cm → m) et à arrondir raisonnablement." },
      ],
    },
    {
      id: "chaine-information-capteurs",
      titre: "La chaîne d'information : capteurs, données et interface humain-machine",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Les trois fonctions de la chaîne d'information
La **chaîne d'information** gère les **données** : elle observe l'environnement et l'utilisateur, décide, puis donne des ordres.

| Fonction | Rôle | Constituants courants |
|---|---|---|
| **Acquérir** | prélever une information et la transformer en signal électrique | capteurs, boutons, clavier, écran tactile, microphone, caméra |
| **Traiter** | exécuter le programme : comparer, calculer, décider | microcontrôleur (carte programmable), ordinateur |
| **Communiquer** | envoyer des ordres à la chaîne d'énergie et des informations à l'utilisateur ou à d'autres objets | sorties de la carte, écran, voyant, haut-parleur, module Wi-Fi, Bluetooth, radio |

Les ordres partent vers la fonction **distribuer** de la chaîne d'énergie (relais, contrôleur de moteur).

## Information logique ou analogique
- Un capteur **logique** (tout ou rien) ne donne que **deux états** : 0 ou 1, vrai ou faux. Exemples : bouton-poussoir, interrupteur de fin de course, détecteur de présence infrarouge (il y a quelqu'un ou non), capteur d'ouverture de porte (interrupteur à lame souple, ILS).
- Un capteur **analogique** donne une grandeur qui varie **de façon continue** (une tension qui change avec la grandeur mesurée). Exemples : capteur de température (thermistance), de lumière (photorésistance), d'humidité, potentiomètre.
- Certains capteurs fournissent directement une **valeur numérique** au microcontrôleur (capteur à ultrasons qui donne un temps, capteur de température numérique).

## De la grandeur physique à la donnée
Le microcontrôleur ne traite que des **nombres**. Pour une grandeur analogique, un **convertisseur analogique-numérique** (CAN) transforme la tension en nombre entier.

Sur beaucoup de cartes, ce convertisseur fonctionne sur **10 bits** : il donne un nombre entre **0 et 1023** (2¹⁰ = 1 024 valeurs). Avec une tension de référence de 5 V :
**valeur ≈ tension × 1023 ÷ 5** et **tension ≈ valeur × 5 ÷ 1023**.

>! Exemple résolu : la carte lit la valeur 614. Tension ≈ 614 × 5 ÷ 1023 ≈ **3,0 V**.

>! Exemple : le capteur de température LM35 fournit **10 mV par °C**. S'il délivre 0,25 V = 250 mV, la température est 250 ÷ 10 = **25 °C**.

## Choisir le format des données
| Donnée | Format (type) | Exemple |
|---|---|---|
| Présence détectée, bouton appuyé | **booléen** (vrai / faux) | vrai |
| Valeur brute du capteur, nombre de passages | **nombre entier** | 614 |
| Température, distance précise | **nombre décimal** | 21,5 |
| Message affiché, nom d'un objet | **chaîne de caractères** (mot) | « Porte ouverte » |

## L'interface humain-machine (IHM)
L'**IHM** permet à l'utilisateur de **dialoguer** avec l'objet : boutons, écran tactile, clavier, voyants, afficheur, buzzer, commande vocale, application sur smartphone. Une bonne IHM est **ergonomique** : facile à comprendre, lisible, accessible.

## Caractériser la chaîne d'information d'un objet
Pour décrire un objet, on dresse la liste : **grandeurs à mesurer** → capteurs choisis (logique ou analogique) → données et formats → traitement (règles « si... alors... ») → sorties (actionneurs commandés, informations affichées ou transmises).

>! Exemple (serre connectée) : acquérir la température (capteur analogique, nombre décimal) et l'humidité du sol (analogique) ; détecter l'ouverture de la porte (ILS, booléen) ; traiter avec un microcontrôleur (« si température > 28 °C alors ouvrir la fenêtre ») ; communiquer : ordre au moteur de la fenêtre, affichage sur un écran, envoi des mesures par Wi-Fi.

> **À retenir** : **Acquérir → Traiter → Communiquer**. Capteur **logique** : 2 états (0/1) ; capteur **analogique** : valeur continue convertie par le **CAN** (souvent 0 à 1023 sur 10 bits). Formats : **booléen, entier, décimal, chaîne de caractères**. L'**IHM** permet le dialogue humain-objet. Les ordres vont vers la fonction **distribuer** de la chaîne d'énergie.
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces capteurs fournit une information **logique** (tout ou rien) ?", choix: ["Une thermistance", "Une photorésistance", "Un interrupteur de fin de course", "Un capteur d'humidité du sol"], reponse: 2, explication: "L'interrupteur de fin de course est soit appuyé, soit relâché : **deux états**. Les trois autres donnent une valeur qui varie de façon continue (analogique)." },
        { type: "vf", question: "Le microcontrôleur réalise la fonction « traiter » de la chaîne d'information.", reponse: true, explication: "Il exécute le programme : il compare les données aux seuils, calcule et décide des ordres à envoyer." },
        { type: "qcm", question: "Quel format de donnée convient pour mémoriser « un mouvement est détecté ou non » ?", choix: ["Un booléen", "Une chaîne de caractères", "Un nombre décimal", "Une image"], reponse: 0, explication: "Deux états seulement (vrai / faux) : c'est un **booléen**." },
        { type: "saisie", question: "Une carte possède un convertisseur 10 bits (valeurs de 0 à 1023) avec une tension de référence de 5 V. Elle lit la valeur 1023. Quelle tension, en volts, est présente sur l'entrée ? (nombre)", reponses: ["5", "5 V"], explication: "1023 est la valeur maximale : elle correspond à la tension de référence, soit **5 V**." },
        { type: "saisie", question: "Un capteur LM35 fournit 10 mV par degré Celsius. Il délivre 0,22 V. Quelle est la température, en °C ? (nombre)", reponses: ["22", "22 °C", "22 degrés", "22 degrés Celsius"], explication: "0,22 V = 220 mV ; 220 ÷ 10 = **22 °C**." },
        { type: "saisie", question: "Combien de valeurs différentes peut donner un convertisseur analogique-numérique sur 10 bits ? (nombre)", reponses: ["1024", "1 024", "2¹⁰"], explication: "2¹⁰ = **1 024** valeurs, numérotées de 0 à 1023." },
        { type: "qcm", question: "Dans une alarme, quel constituant réalise la fonction **communiquer** vers l'utilisateur ?", choix: ["Le détecteur de présence", "Le microcontrôleur", "La pile", "La sirène et la notification envoyée sur le téléphone"], reponse: 3, explication: "La sirène et la notification **transmettent** l'information à l'utilisateur. Le détecteur acquiert, le microcontrôleur traite, la pile alimente." },
        { type: "vf", question: "Un écran tactile peut à la fois acquérir une information (le toucher) et communiquer une information (l'affichage).", reponse: true, explication: "C'est un composant d'**IHM** qui joue les deux rôles : la dalle tactile est un capteur, l'écran un afficheur." },
        { type: "redaction", question: "**Sujet type brevet.** On conçoit un éclairage intelligent pour un couloir de collège. Comportement attendu : la lumière s'allume quand quelqu'un passe **et** qu'il fait sombre ; elle reste allumée 2 minutes après le dernier passage ; un écran au bureau de la vie scolaire affiche le nombre de passages de la journée ; un bouton permet de forcer l'allumage. 1) Liste les grandeurs à mesurer et propose un capteur pour chacune ; classe-les en logique ou analogique. 2) Pour chaque donnée utilisée par le programme, donne son format. 3) Représente la chaîne d'information (acquérir, traiter, communiquer) de cet objet. 4) Écris en langage naturel la règle qui commande l'allumage.", corrige: "1) **Grandeurs et capteurs** :\n- passage d'une personne → détecteur de présence infrarouge : **logique** ;\n- luminosité ambiante → photorésistance (ou capteur de lumière) : **analogique** ;\n- appui sur le bouton de forçage → bouton-poussoir : **logique**.\n\n2) **Données et formats** :\n- presence : **booléen** ;\n- luminosite : **nombre entier** (valeur du convertisseur, par exemple de 0 à 1023) ;\n- bouton : **booléen** ;\n- compteur de passages : **nombre entier** ;\n- durée depuis le dernier passage : **nombre** (en secondes) ;\n- message affiché : **chaîne de caractères** (« Passages : 154 »).\n\n3) **Chaîne d'information** :\n- **Acquérir** : détecteur de présence, capteur de lumière, bouton ;\n- **Traiter** : microcontrôleur qui exécute le programme (comparaison au seuil de luminosité, comptage, minuterie) ;\n- **Communiquer** : ordre envoyé au relais qui alimente les lampes (vers la chaîne d'énergie), envoi du nombre de passages à l'écran de la vie scolaire (par le réseau).\n\n4) **Règle** :\n~~~\nsi (presence = vrai ET luminosite < seuil) OU bouton = vrai alors\n    allumer les lampes\n    remettre la minuterie à 0\n    si presence = vrai alors ajouter 1 au compteur\nsinon si minuterie > 120 secondes alors\n    éteindre les lampes\n~~~\n\n> Une réponse est valorisée si elle distingue clairement logique et analogique et si elle utilise les opérateurs ET / OU correctement." },
      ],
    },
    {
      id: "donnees-numerisation",
      titre: "Numériser, structurer et stocker les données",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Le bit et l'octet
Un ordinateur ou un objet programmable ne manipule que des **0** et des **1**. Le **bit** (binary digit) est la plus petite quantité d'information : il vaut 0 ou 1. Un **octet** regroupe **8 bits**.

| Unité | Valeur |
|---|---|
| 1 octet (o) | 8 bits |
| 1 kilooctet (ko) | 1 000 octets |
| 1 mégaoctet (Mo) | 1 000 ko = 1 million d'octets |
| 1 gigaoctet (Go) | 1 000 Mo |
| 1 téraoctet (To) | 1 000 Go |

Certains logiciels comptent par 1 024 (on écrit alors Kio, Mio, Gio) : c'est pour cela qu'un disque de 1 To apparaît parfois comme « 931 Go ».

## Compter en binaire
En **décimal**, chaque rang vaut 10 fois le précédent (unités, dizaines, centaines). En **binaire**, chaque rang vaut **2 fois** le précédent : 1, 2, 4, 8, 16, 32, 64, 128...

>! Binaire → décimal : 1101 = 1×8 + 1×4 + 0×2 + 1×1 = **13**. Et 10010110 = 128 + 16 + 4 + 2 = **150**.

>! Décimal → binaire : on cherche les puissances de 2 qui composent le nombre. 45 = 32 + 8 + 4 + 1 → bits des rangs 32, 8, 4, 1 → **101101**.

Avec n bits, on peut coder **2ⁿ** valeurs : avec 8 bits, 2⁸ = 256 valeurs, de 0 à **255**.

## Représenter différents types d'informations
- Un **booléen** (vrai / faux) : 1 bit suffit (1 = vrai, 0 = faux).
- Un **nombre entier** : écrit en binaire.
- Un **caractère** : chaque lettre a un numéro dans la table **ASCII**. « A » = 65 (01000001 en binaire), « B » = 66, « a » = 97, l'espace = 32. La table ASCII étendue code chaque caractère sur **1 octet**. Le mot « CHAT » occupe donc 4 octets.
- Une **image** numérique est un quadrillage de **pixels**. En couleurs, chaque pixel est codé par trois valeurs rouge, vert, bleu (RVB), de 0 à 255 chacune, soit **3 octets par pixel**.
- Un **son** est numérisé en mesurant le signal des milliers de fois par seconde (**échantillonnage**) ; chaque mesure est un nombre.

>! Taille d'une image non compressée : 1 920 × 1 080 pixels × 3 octets = 6 220 800 octets ≈ **6,2 Mo**. Un son de qualité CD (44 100 mesures par seconde, 2 octets par mesure, 2 voies) occupe 44 100 × 2 × 2 = 176 400 octets par seconde, soit environ **10,6 Mo par minute**.

Pour réduire la taille, on **compresse** : le format JPEG (photos) et MP3 (son) suppriment des détails peu perceptibles (compression **avec pertes**) ; PNG ou ZIP compressent **sans pertes**.

## Fichiers, formats, dossiers
Les données sont stockées dans des **fichiers**, rangés dans des **dossiers** qui forment une **arborescence**. L'**extension** indique le format : .txt (texte), .csv (tableau de données en texte), .png ou .jpg (image), .mp3 (son), .mp4 (vidéo), .py (programme Python), .stl (modèle 3D). Les **droits** de lecture et d'écriture précisent qui peut ouvrir ou modifier un fichier.

## Structurer les données : la table
Pour décrire des **objets** (des capteurs, des élèves, des mesures), on choisit des **descripteurs** (les colonnes). Chaque **ligne** est un objet ; l'ensemble forme une **collection**.

| date | heure | temperature | humidite | fenetre_ouverte |
|---|---|---|---|---|
| 12/05 | 08:00 | 17,5 | 62 | faux |
| 12/05 | 12:00 | 29,0 | 48 | vrai |

Dans un fichier **CSV**, chaque ligne est un objet et les valeurs sont séparées par un **séparateur** (point-virgule ou virgule) :
~~~
date;heure;temperature;humidite;fenetre_ouverte
12/05;08:00;17,5;62;faux
12/05;12:00;29,0;48;vrai
~~~

Dans un **tableur**, on **trie** (par ordre croissant), on **filtre** (garder les lignes où temperature > 25), on **calcule** (formule =MOYENNE(C2:C50), =MAX(C2:C50)) et on trace des graphiques pour **interpréter** le comportement de l'objet.

> **À retenir** : **1 octet = 8 bits** ; ko, Mo, Go, To (×1 000). Binaire : rangs 1, 2, 4, 8, 16, 32, 64, 128 ; n bits → **2ⁿ** valeurs (8 bits : 0 à 255). ASCII : 1 caractère = 1 octet (A = 65). Image : pixels × **3 octets** (RVB). Table de données : **objets** (lignes), **descripteurs** (colonnes), fichier **CSV** ; tableur : trier, filtrer, calculer.
`,
      exercices: [
        { type: "saisie", question: "Écris le nombre décimal 22 en binaire.", reponses: ["10110", "00010110"], explication: "22 = 16 + 4 + 2 → rangs 16, 4 et 2 (pas de 8 ni de 1) → **10110**." },
        { type: "saisie", question: "Quelle est la valeur décimale du nombre binaire 10100101 ?", reponses: ["165"], explication: "Les 1 sont aux rangs 128, 32, 4 et 1 : 128 + 32 + 4 + 1 = **165**." },
        { type: "qcm", question: "Combien d'octets y a-t-il dans 1 mégaoctet (Mo) ?", choix: ["1 000", "8", "1 000 000", "1 000 000 000"], reponse: 2, explication: "1 Mo = 1 000 ko = 1 000 × 1 000 = **1 000 000 octets** (un million)." },
        { type: "saisie", question: "Une image de 800 × 600 pixels est codée en couleurs RVB (3 octets par pixel), sans compression. Quelle est sa taille en octets ? (nombre)", reponses: ["1440000", "1 440 000", "1440000 o"], explication: "800 × 600 = 480 000 pixels ; × 3 = **1 440 000 octets**, soit 1,44 Mo." },
        { type: "qcm", question: "Dans la table ASCII, la lettre « A » a le code 65. Quel est le code de la lettre « D » ?", choix: ["66", "68", "69", "4"], reponse: 1, explication: "Les lettres se suivent : A = 65, B = 66, C = 67, **D = 68**." },
        { type: "saisie", question: "Quel est le plus grand nombre entier que l'on peut écrire avec 8 bits ? (nombre)", reponses: ["255"], explication: "Avec 8 bits, on a 2⁸ = 256 valeurs, de 0 à **255** (11111111 en binaire)." },
        { type: "vf", question: "Un fichier CSV est un fichier texte dans lequel les valeurs d'une ligne sont séparées par un séparateur (virgule ou point-virgule).", reponse: true, explication: "C'est exact : on peut l'ouvrir avec un éditeur de texte ou un tableur. Chaque ligne est un objet, chaque colonne un descripteur." },
        { type: "qcm", question: "Une station météo enregistre, pour chaque mesure : la date, l'heure, la température et la vitesse du vent. Dans la table de données, « vitesse du vent » est :", choix: ["un objet", "une collection", "un fichier", "un descripteur"], reponse: 3, explication: "Chaque mesure est un **objet** (une ligne) ; date, heure, température, vitesse du vent sont des **descripteurs** (les colonnes) ; l'ensemble des mesures est la **collection**." },
        { type: "redaction", question: "**Sujet type brevet.** Une station météo du collège mesure toutes les 10 minutes la température (nombre décimal), l'humidité (nombre entier en %) et la présence de pluie (vrai/faux), puis enregistre chaque mesure, avec la date et l'heure, dans un fichier sur une carte mémoire. Chaque ligne du fichier occupe 20 octets. 1) Propose la structure du fichier : nom des descripteurs, format de chaque donnée, puis écris la ligne d'en-tête et les deux premières mesures d'un fichier CSV (valeurs fictives). 2) Calcule le nombre de mesures par jour, puis la taille du fichier au bout d'un jour et d'une année (365 jours). 3) La carte mémoire a une capacité de 8 Go. Est-elle suffisante pour 10 ans de mesures ? Justifie. 4) Explique comment un tableur permettrait de trouver le jour le plus chaud de l'année.", corrige: "1) **Structure** : descripteurs date (chaîne de caractères ou date), heure (chaîne), temperature (**nombre décimal**), humidite (**nombre entier**), pluie (**booléen**).\n~~~\ndate;heure;temperature;humidite;pluie\n03/10/2026;08:00;12,4;81;vrai\n03/10/2026;08:10;12,6;80;faux\n~~~\n(La 1re ligne, l'en-tête, contient les noms des descripteurs ; viennent ensuite les deux premières mesures, à 10 minutes d'écart.)\n\n2) **Calculs** :\n- 1 jour = 24 × 60 = 1 440 min ; 1 440 ÷ 10 = **144 mesures par jour** ;\n- taille par jour : 144 × 20 = **2 880 octets** (environ 2,9 ko) ;\n- taille par an : 2 880 × 365 = **1 051 200 octets**, soit environ **1,05 Mo**.\n\n3) **10 ans** : environ 10,5 Mo. 8 Go = 8 000 Mo, ce qui est **largement suffisant** (environ 760 fois plus que nécessaire).\n\n4) **Tableur** : on importe le fichier CSV, on **trie** la colonne temperature par ordre décroissant (ou on utilise la formule =MAX sur la colonne), puis on lit la date de la ligne correspondante. On peut aussi calculer la **moyenne** par jour et tracer un graphique pour repérer la période la plus chaude.\n\n> Attention aux unités : 1 ko = 1 000 octets ; 1 Mo = 1 000 000 octets." },
      ],
    },
    {
      id: "internet-routage-chiffrement",
      titre: "La circulation de l'information dans Internet : adresses, routage, chiffrement",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Du réseau local à Internet
Un **réseau local** relie les appareils d'une maison ou d'un collège. **Internet** est un **réseau de réseaux** : des millions de réseaux locaux reliés entre eux par des **routeurs**.

| Constituant | Rôle |
|---|---|
| **Terminal** (ordinateur, tablette, objet connecté) | appareil qui envoie ou reçoit des données |
| **Carte réseau** | permet au terminal de se connecter (par câble ou sans fil) ; chacune a une adresse physique unique, l'adresse MAC |
| **Liaisons** | câble Ethernet, fibre optique, ondes Wi-Fi |
| **Commutateur** (switch) | relie les appareils **d'un même réseau local** et transmet chaque message au bon destinataire |
| **Point d'accès Wi-Fi** | relie les appareils sans fil au réseau local |
| **Routeur** (la box à la maison) | relie **des réseaux différents** et choisit la route des paquets |
| **Serveur** | ordinateur qui **fournit un service** (pages web, vidéos, messagerie, ENT) à des **clients** |

## L'adresse IP et sa structure
Chaque terminal a une **adresse IP**. En IPv4 : 4 nombres de 0 à 255 séparés par des points (4 octets = 32 bits), par exemple **192.168.1.25**.

L'adresse se divise en deux parties, définies par le **masque** :
- la partie **réseau** (identique pour tous les appareils du même réseau local) ;
- la partie **machine** (différente pour chaque appareil).

>! Avec le masque 255.255.255.0 (noté /24), les trois premiers nombres désignent le réseau. 192.168.1.25 et 192.168.1.80 sont dans le **même réseau** (192.168.1.0) ; 192.168.2.25 est dans un **autre réseau**. Les valeurs 0 (adresse du réseau) et 255 (adresse de **diffusion** : un message envoyé à cette adresse est reçu par tous les appareils du réseau) sont réservées : il reste **254** adresses pour les machines (de .1 à .254).

Deux appareils d'un même réseau local communiquent par le **commutateur**. Pour joindre un autre réseau, un terminal envoie ses paquets à sa **passerelle** : le routeur.

## Le routage
Les données sont découpées en **paquets**. Chaque paquet contient l'adresse IP de l'expéditeur et du destinataire. À chaque routeur, une **table de routage** indique par où envoyer le paquet selon le réseau de destination.

>! Table de routage (simplifiée) du routeur R1 (une **interface** est l'une des prises réseau du routeur) :
>! | Réseau de destination | Envoyer vers |
>! |---|---|
>! | 192.168.1.0/24 | interface 1 (réseau du collège) |
>! | 10.0.0.0/24 | interface 2 |
>! | 172.16.5.0/24 | routeur R2 (10.0.0.2) |
>! | tout autre réseau | routeur du fournisseur d'accès |
>! Un paquet destiné à 172.16.5.20 est envoyé au routeur R2 ; un paquet pour 192.168.1.40 sort par l'interface 1.

Sans routage, chaque réseau resterait isolé : les routeurs, de proche en proche, acheminent les paquets à travers le monde. Si une liaison est coupée, les paquets peuvent prendre un **autre chemin**.

## Le trajet d'une requête web
1. Tu tapes une adresse de site : un **serveur DNS** traduit le nom en adresse IP.
2. Ta tablette envoie la demande (requête) via le point d'accès Wi-Fi et le commutateur jusqu'à la **box** (routeur).
3. Les routeurs d'Internet acheminent les paquets jusqu'au **serveur web**.
4. Le serveur renvoie la page, découpée en paquets, qui suivent le chemin inverse et sont réassemblés.

## Le débit
Le **débit** est la quantité de données transmise par seconde, en **bits par seconde** (Mbit/s, Gbit/s). Ordres de grandeur : ADSL : quelques Mbit/s à environ 20 Mbit/s ; 4G : quelques dizaines de Mbit/s ; fibre : de 300 Mbit/s à plusieurs Gbit/s.

>! Temps de transfert = taille (en bits) ÷ débit. Un fichier de 600 Mo = 600 × 8 = 4 800 Mbit. Avec 100 Mbit/s : 4 800 ÷ 100 = **48 s**. Attention : 1 octet = 8 bits.

## Le chiffrement : confidentialité et intégrité
Les paquets traversent de nombreux équipements qui ne t'appartiennent pas. Le **chiffrement** transforme le message avec une **clé** pour qu'il soit illisible par quelqu'un qui n'a pas la clé.
- **Confidentialité** : seul le destinataire peut lire le message.
- **Intégrité** : on peut vérifier que le message n'a pas été modifié en chemin.

>! Le code de César décale chaque lettre d'un nombre fixe (la clé). Avec un décalage de 3 : A → D, B → E... « CHAT » devient « FKDW ». Ce chiffrement est très facile à casser ; les chiffrements modernes utilisent des clés de 128 bits ou plus, impossibles à deviner en essayant toutes les combinaisons.

Le **cadenas** et le préfixe **https** dans la barre d'adresse indiquent que les échanges avec le site sont chiffrés. Indispensable pour un mot de passe ou un paiement.

> **À retenir** : **commutateur** = relie les appareils d'un même réseau ; **routeur** = relie des réseaux différents grâce à sa **table de routage** ; **serveur** = fournit un service. IP = partie **réseau** + partie **machine** (masque /24 : 254 adresses). Paquets, **DNS**, débit en **bit/s** (1 octet = 8 bits). **Chiffrement** = confidentialité + intégrité (https).
`,
      exercices: [
        { type: "qcm", question: "Quel constituant permet de faire communiquer **deux réseaux différents** ?", choix: ["Le commutateur", "Le routeur", "La carte réseau", "Le câble Ethernet"], reponse: 1, explication: "Le **routeur** relie des réseaux différents et oriente les paquets grâce à sa table de routage. Le commutateur relie seulement les appareils d'un même réseau local." },
        { type: "qcm", question: "Masque 255.255.255.0. Quelle adresse est dans le même réseau que 192.168.1.10 ?", choix: ["192.168.2.10", "10.168.1.10", "192.168.1.200", "192.169.1.10"], reponse: 2, explication: "Avec ce masque, les trois premiers nombres (192.168.1) désignent le réseau : seule **192.168.1.200** les partage." },
        { type: "saisie", question: "Dans un réseau 192.168.1.0 avec le masque 255.255.255.0, combien d'adresses peuvent être attribuées à des machines ? (nombre)", reponses: ["254"], explication: "Le dernier nombre va de 0 à 255 (256 valeurs), mais 0 (adresse du réseau) et 255 (diffusion) sont réservés : 256 − 2 = **254**." },
        { type: "vf", question: "Un commutateur suffit pour relier le réseau du collège au réseau d'un autre établissement.", reponse: false, explication: "Le commutateur ne relie que les appareils d'un **même** réseau local. Pour passer d'un réseau à un autre, il faut un **routeur**." },
        { type: "saisie", question: "Combien de secondes faut-il pour transférer un fichier de 300 Mo avec un débit de 20 Mbit/s ? (nombre)", reponses: ["120", "120 s"], explication: "300 Mo = 300 × 8 = 2 400 Mbit. t = 2 400 ÷ 20 = **120 s**, soit 2 minutes." },
        { type: "qcm", question: "D'après la table de routage du cours, vers où le routeur R1 envoie-t-il un paquet destiné à 172.16.5.20 ?", choix: ["Vers l'interface 1", "Vers le routeur R2 (10.0.0.2)", "Vers le routeur du fournisseur d'accès", "Il le détruit"], reponse: 1, explication: "172.16.5.20 appartient au réseau 172.16.5.0/24 : la table indique de passer par le **routeur R2**." },
        { type: "saisie", question: "Chiffre le mot ROBOT avec le code de César, décalage de 3 (A → D).", reponses: ["URERW"], explication: "R → U, O → R, B → E, O → R, T → W : **URERW**." },
        { type: "qcm", question: "Que garantit principalement le chiffrement des échanges (https) entre ton navigateur et un site ?", choix: ["Que le site est gratuit", "Que la connexion sera plus rapide", "Que l'ordinateur ne tombera jamais en panne", "La confidentialité et l'intégrité des données échangées"], reponse: 3, explication: "Le chiffrement rend les données **illisibles** pour les intermédiaires (confidentialité) et permet de détecter une **modification** (intégrité). Il ne rend pas la connexion plus rapide." },
        { type: "redaction", question: "**Sujet type brevet.** Au CDI, Noé utilise une tablette (adresse 192.168.10.37, masque 255.255.255.0) connectée en Wi-Fi pour se connecter à l'ENT, hébergé sur un serveur situé dans un centre de données à 300 km. 1) Représente par un croquis décrit en texte (suite de blocs et de flèches) le trajet de sa demande, en nommant chaque constituant traversé. 2) Explique le rôle du serveur DNS, du routeur et du serveur de l'ENT. 3) Indique la partie réseau et la partie machine de l'adresse de la tablette. Peut-on donner l'adresse 192.168.10.37 à une imprimante du même réseau ? Justifie. 4) Justifie la nécessité de chiffrer les échanges lors de la connexion à l'ENT.", corrige: "1) **Trajet** :\n~~~\n[tablette] --Wi-Fi--> [point d'accès Wi-Fi] --câble--> [commutateur]\n--> [routeur du collège] --> [routeurs d'Internet]\n--> [routeur du centre de données] --> [serveur de l'ENT]\n~~~\nLa réponse revient par un chemin inverse (pas forcément identique).\n\n2) **Rôles** :\n- **serveur DNS** : traduit le nom de l'ENT en **adresse IP** du serveur ;\n- **routeur** : relie le réseau du collège aux autres réseaux et choisit, grâce à sa **table de routage**, où envoyer chaque paquet ;\n- **serveur de l'ENT** : reçoit la requête, vérifie l'identifiant et le mot de passe et **fournit le service** (pages, messagerie, cahier de textes).\n\n3) **Adresse** : avec le masque 255.255.255.0, la partie **réseau** est **192.168.10** et la partie **machine** est **37**. On **ne peut pas** donner la même adresse à l'imprimante : deux appareils d'un même réseau doivent avoir des adresses **différentes**, sinon les messages ne sauraient pas à qui être remis (conflit d'adresses). On choisira par exemple 192.168.10.200 si elle est libre.\n\n4) **Chiffrement** : les paquets traversent le Wi-Fi et de nombreux routeurs qui n'appartiennent pas au collège. Sans chiffrement, quelqu'un pourrait **lire** l'identifiant et le mot de passe (confidentialité) ou **modifier** les données (intégrité). Le protocole https chiffre ces échanges.\n\n> Le vocabulaire précis (paquet, routeur, table de routage, serveur, DNS) est attendu." },
      ],
    },
    {
      id: "depannage-reparation-diagnostic",
      titre: "Diagnostiquer une panne, dépanner et réparer",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Réparer plutôt que jeter
Réparer prolonge la **durée de vie** d'un objet : moins de déchets, moins de matières premières extraites, des économies. En France, la loi impose d'afficher un **indice de réparabilité** (ou de **durabilité**) sur de nombreux produits, et un **bonus réparation** réduit le prix de la réparation chez les réparateurs labellisés.

Trois notions :
- **fiabilité** : capacité à fonctionner **sans panne** pendant une durée donnée ;
- **durabilité** : capacité à **durer** longtemps, en étant entretenu et réparé ;
- **réparabilité** : facilité à réparer (démontage, pièces disponibles, documentation).

## Dépannage ou réparation ?
- **Dépanner**, c'est **rétablir provisoirement** une fonction dégradée pour que l'objet fonctionne à nouveau (contourner le problème).
- **Réparer**, c'est **rétablir définitivement** le bon fonctionnement : remplacer le composant défectueux, refaire un réglage, fabriquer une pièce sur mesure.

>! Exemple : la poignée cassée d'un tiroir est remplacée par une ficelle : c'est un dépannage. On imprime en 3D une poignée identique et on la visse : c'est une réparation.

## La démarche de diagnostic
1. **Constater** l'effet : qu'est-ce qui ne marche pas ? Dans quelles conditions ?
2. **Formuler des hypothèses** de causes, sous la forme « **si** telle cause, **alors** on devrait observer tel effet ».
3. **Classer** les hypothèses : de la plus **simple** à vérifier et la plus **probable**, à la plus compliquée.
4. **Tester** chaque hypothèse avec un **protocole** (observation, mesure, remplacement par une pièce qui fonctionne).
5. **Dépanner** si besoin, puis **réparer**.
6. **Valider** : vérifier que l'objet fonctionne de nouveau dans toutes les conditions.

>! Exemple : une lampe de bureau à DEL ne s'allume plus. Hypothèses : prise non alimentée (si oui, une autre lampe ne marchera pas non plus sur cette prise) ; fil coupé (si oui, pas de continuité entre les broches de la prise et la lampe) ; interrupteur défectueux (si oui, pas de continuité quand il est sur « marche ») ; DEL ou module d'alimentation hors service.

## Les mesures au multimètre
| Mesure | Comment | Ce qu'elle révèle |
|---|---|---|
| **Tension** (V) | en dérivation, appareil **sous tension** | une pile usée (une pile de 1,5 V qui n'affiche plus que 0,9 V est usée), une alimentation absente |
| **Continuité** / résistance | appareil **hors tension**, débranché | un fil coupé, un fusible grillé, un interrupteur défectueux (pas de bip = circuit ouvert) |
| **Intensité** (A) | en série | une consommation anormale |

>! Astuce de diagnostic : dans un circuit en série alimenté par une pile de 4,5 V, si la lampe ne s'allume pas et que le voltmètre mesure **4,5 V aux bornes de la lampe**, c'est que le circuit est ouvert **dans la lampe** : elle est grillée.

## Les règles de sécurité
- **Débrancher** l'appareil avant de l'ouvrir ; certains composants (condensateurs) restent chargés.
- Manipuler les **batteries lithium** avec précaution : ne pas les percer, ne pas les court-circuiter.
- Porter les **équipements de protection individuelle** (lunettes, gants selon les cas) ; utiliser l'outil adapté (tournevis de la bonne taille, pince).
- Pour fabriquer une pièce : respecter les règles de l'atelier (imprimante 3D, découpe laser, perceuse).

## Remplacer une pièce
- **Remplacement standard** : une pièce du commerce (fusible, pile, interrupteur, capteur, moteur) de **mêmes caractéristiques** (tension, intensité, dimensions).
- **Nouveau paramétrage** : un réglage ou un programme à corriger.
- **Pièce sur mesure** : relever les cotes au **pied à coulisse**, modéliser en 3D, imprimer ou usiner, contrôler, puis monter.

> **À retenir** : **dépanner** = provisoire ; **réparer** = définitif. Démarche : constater → hypothèses « si... alors... » → tests (du plus simple au plus probable) → réparer → **valider**. Multimètre : tension **sous tension** en dérivation, continuité **hors tension**. Fiabilité, durabilité, réparabilité. Sécurité : débrancher d'abord.
`,
      exercices: [
        { type: "qcm", question: "Une imprimante ne s'allume plus. Quelle est la première vérification à faire ?", choix: ["Commander une carte électronique neuve", "Démonter entièrement l'imprimante", "Vérifier qu'elle est bien branchée et que la prise est alimentée", "Mettre à jour le pilote sur l'ordinateur"], reponse: 2, explication: "On teste d'abord l'hypothèse la **plus simple** et la plus probable : l'alimentation. Inutile de démonter ou de commander des pièces avant." },
        { type: "qcm", question: "Le câble d'un chargeur est abîmé : on l'entoure de ruban adhésif isolant en attendant d'acheter un câble neuf. C'est :", choix: ["une réparation définitive", "un dépannage", "une innovation", "un recyclage"], reponse: 1, explication: "La solution est **provisoire** : c'est un **dépannage**. La réparation consistera à remplacer le câble." },
        { type: "vf", question: "Pour tester la continuité d'un fil au multimètre, l'appareil doit être branché et sous tension.", reponse: false, explication: "Le test de continuité (ou de résistance) se fait **hors tension**, appareil débranché : sinon la mesure est fausse et l'on risque d'abîmer le multimètre ou de s'électrocuter." },
        { type: "qcm", question: "Une pile de 1,5 V affiche 0,9 V au voltmètre. Que conclus-tu ?", choix: ["La pile est usée et doit être remplacée", "La pile est neuve", "Le voltmètre est forcément cassé", "Il faut mesurer l'intensité à la place"], reponse: 0, explication: "Une pile de 1,5 V qui ne délivre plus que 0,9 V est **usée** : l'objet ne reçoit plus assez d'énergie." },
        { type: "saisie", question: "Quel appareil permet de mesurer une tension, une intensité et de tester la continuité d'un circuit ? (un mot)", reponses: ["multimètre", "un multimètre"], explication: "Le **multimètre** combine voltmètre, ampèremètre et ohmmètre (avec test de continuité)." },
        { type: "qcm", question: "Circuit en série : pile de 4,5 V, interrupteur fermé, lampe éteinte. Le voltmètre mesure 4,5 V aux bornes de la lampe. Quelle est la cause la plus probable ?", choix: ["La pile est vide", "L'interrupteur est ouvert", "Un fil est coupé entre la pile et l'interrupteur", "La lampe est grillée (circuit ouvert dans la lampe)"], reponse: 3, explication: "Toute la tension de la pile se retrouve aux bornes de la lampe : le circuit est donc coupé **dans la lampe**. Si la pile était vide ou un fil coupé ailleurs, on mesurerait 0 V aux bornes de la lampe." },
        { type: "vf", question: "Un objet fiable est un objet qui fonctionne longtemps sans tomber en panne.", reponse: true, explication: "C'est la définition de la **fiabilité**. La **durabilité** inclut aussi la possibilité d'entretenir et de réparer l'objet." },
        { type: "qcm", question: "Le clip en plastique qui ferme le couvercle des piles d'une télécommande est cassé et introuvable dans le commerce. Quelle solution de réparation est la plus adaptée ?", choix: ["Jeter la télécommande", "Mesurer le clip au pied à coulisse, le modéliser en 3D et l'imprimer", "Changer les piles", "Mettre à jour la télévision"], reponse: 1, explication: "La pièce n'existe pas dans le commerce : on fabrique une **pièce sur mesure** (relevé des cotes, modélisation, impression 3D, contrôle, montage)." },
        { type: "redaction", question: "**Sujet type brevet.** Un ventilateur de bureau USB ne tourne plus. Il comprend : un câble USB, un interrupteur, un moteur électrique, une hélice fixée sur l'axe du moteur. L'utilisateur a constaté que lorsqu'il fait tourner l'hélice à la main, elle tourne librement. 1) Formule au moins trois hypothèses de cause sous la forme « si... alors on devrait observer... ». 2) Classe-les et propose, pour chacune, un test précis (appareil, conditions de mesure, résultat attendu). 3) Les tests montrent que le câble et l'interrupteur sont bons, mais que la tension aux bornes du moteur est de 5 V et qu'il ne tourne pas. Conclus et propose une réparation. 4) Comment valider la réparation ?", corrige: "1) **Hypothèses** :\n- si le port USB ne fournit pas d'énergie, alors un autre appareil branché sur ce port ne fonctionnera pas non plus ;\n- si le câble USB est coupé, alors il n'y aura **pas de continuité** entre les broches du connecteur et les fils du ventilateur ;\n- si l'interrupteur est défectueux, alors il n'y aura pas de continuité entre ses bornes en position « marche » ;\n- si le moteur est hors service, alors il recevra bien 5 V mais ne tournera pas.\n(L'hélice tourne librement : on écarte une hélice bloquée.)\n\n2) **Tests** (du plus simple au plus compliqué) :\n1. Brancher le ventilateur sur un autre port USB ou un chargeur qui fonctionne ; s'il tourne, le port était en cause.\n2. Ventilateur **débranché**, multimètre en position continuité : tester chaque fil du câble ; un bip indique que le fil est bon.\n3. Toujours **hors tension**, tester la continuité de l'interrupteur en position marche puis arrêt.\n4. Ventilateur **branché**, interrupteur sur marche, voltmètre **en dérivation** aux bornes du moteur : on attend environ 5 V.\n\n3) **Conclusion** : le moteur reçoit 5 V mais ne tourne pas : le **moteur est défectueux** (bobinage coupé, balais usés). **Réparation** : le remplacer par un moteur de **mêmes caractéristiques** (tension 5 V, dimensions, diamètre d'axe), en débranchant d'abord le ventilateur, puis souder ou connecter les fils.\n\n4) **Validation** : rebrancher, vérifier que l'hélice tourne dans le bon sens, que l'interrupteur coupe bien le moteur, que le moteur ne chauffe pas anormalement après quelques minutes.\n\n> L'évaluation valorise la logique effet → causes, l'ordre des tests et les conditions de sécurité (hors tension pour la continuité)." },
      ],
    },
    {
      id: "materiaux-procedes-validation",
      titre: "Matériaux et procédés : choisir, fabriquer, valider la tenue mécanique",
      theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
      cours: `
## Propriétés et caractéristiques des matériaux
On choisit un matériau d'après ses **propriétés** :
- **mécaniques** : résistance à la traction (ne casse pas quand on tire), dureté (résiste aux rayures), élasticité (reprend sa forme), rigidité (se déforme peu) ;
- **thermiques** : conductivité thermique (laisse passer la chaleur ou isole), résistance à la chaleur ;
- **électriques** : conducteur (cuivre, aluminium) ou isolant (plastiques, verre, bois sec) ;
- **chimiques** : résistance à la corrosion (inox, aluminium, plastiques) ;
- **optiques** : transparent, translucide, opaque.

Il faut aussi penser à la **masse volumique** (légèreté), au **prix**, à la **disponibilité** et à la **recyclabilité**.

## Les sollicitations mécaniques
| Sollicitation | Description | Exemple |
|---|---|---|
| **Traction** | on tire sur la pièce, elle s'allonge | câble d'un pont suspendu |
| **Compression** | on écrase la pièce | pilier d'un pont |
| **Flexion** | la pièce se courbe sous une charge | plongeoir, étagère, poutre |
| **Torsion** | on tord la pièce autour de son axe | tournevis, arbre de moteur |
| **Cisaillement** | deux forces opposées tendent à couper | ciseaux, vis qui retient deux plaques |

## Ce qui influence la déformation en flexion
Pour une poutre en flexion, la déformation (la **flèche**) dépend :
- de la **charge** : deux fois plus de charge, deux fois plus de flèche ;
- du **matériau** : un matériau plus rigide se déforme moins (l'acier est environ **3 fois plus rigide** que l'aluminium) ;
- de la **forme de la section** : une poutre rectangulaire posée **sur chant** (hauteur importante) est bien plus rigide qu'à plat. Si l'on **double la hauteur**, la flèche est divisée par **8** (2 × 2 × 2) ;
- de la **longueur** : si l'on double la portée, la flèche est multipliée par 8 (pour une charge placée en un point ; davantage encore si la charge est répartie sur toute la longueur).

On valide la **tenue mécanique** par une **simulation** (logiciel ou feuille de calcul : on renseigne le matériau, les dimensions, la charge) puis par un **essai réel** ; on compare la flèche obtenue à la flèche **maximale autorisée** par le cahier des charges.

>! Exemple : une étagère se déforme de 12 mm sous une charge. On la remplace par une planche du même bois, de même largeur, mais deux fois plus épaisse : flèche = 12 ÷ 8 = **1,5 mm**.

## Les indices de protection
- **Indice IP** (deux chiffres) : protection contre les **solides** (1er chiffre, de 0 à 6) et les **liquides** (2e chiffre, de 0 à 8 ou 9). **IP67** : totalement protégé contre la poussière (6) et contre une immersion temporaire (7, jusqu'à 1 m environ pendant 30 minutes).
- **Indice IK** (de IK00 à IK10) : résistance aux **chocs**.

## Les procédés de mise en forme
| Famille | Procédés | Formes obtenues |
|---|---|---|
| **Enlèvement de matière** | sciage, perçage, fraisage, tournage, découpe laser | pièces usinées précises, découpes planes |
| **Ajout de matière** | impression 3D (fabrication additive) | formes complexes, pièces uniques, prototypes |
| **Déformation** | pliage, thermoformage (plaque de plastique chauffée puis moulée) | coques fines, boîtiers, pièces pliées |
| **Moulage** | moulage par injection (plastique fondu injecté dans un moule) | grandes séries de pièces identiques |
| **Assemblage** | vis, rivets, clips (démontables ou non), collage, soudure | ensembles de plusieurs pièces |

Le choix dépend de la **forme**, du **matériau**, du **nombre de pièces** et du **coût**. Une pièce unique se fait à l'imprimante 3D ; un million de coques identiques par injection.

Sécurité : le **PVC** est **interdit** à la découpe laser (chauffé, il dégage des gaz toxiques et corrosifs contenant du chlore) ; on découpe plutôt du contreplaqué, du carton ou du PMMA (plexiglas).

## Matériaux et environnement
- Chaque matériau a une **empreinte carbone** (CO₂ émis pour le produire). Produire de l'aluminium à partir de minerai demande énormément d'électricité ; **recycler** l'aluminium économise environ **95 %** de cette énergie. Source : Institut international de l'aluminium, qui estime l'énergie nécessaire à environ 186 GJ par tonne pour l'aluminium produit à partir du minerai (2019), contre environ 8 GJ par tonne pour l'aluminium recyclé (1 GJ = 1 milliard de joules). Calcul : (186 − 8) ÷ 186 ≈ 0,96 ; on retient couramment « environ 95 % », car les valeurs varient selon les usines et les années.
- Certains matériaux sont concentrés dans quelques pays, ce qui pose des questions de **disponibilité**, de dépendance et de conditions de travail.

| Matériau | Principaux pays producteurs en 2024 (part de la production minière mondiale, USGS 2025) | Principaux pays producteurs en 2025 (estimations, USGS 2026) |
|---|---|---|
| **Cobalt** (batteries) | République démocratique du Congo, environ 76 % ; Indonésie, environ 10 % | République démocratique du Congo, environ 74 % (230 000 t sur 310 000 t) ; Indonésie, environ 14 % |
| **Terres rares** (aimants des moteurs électriques et des éoliennes) | Chine, environ 69 % (270 000 t sur 390 000 t) | Chine, environ 69 % (270 000 t sur 390 000 t) |
| **Lithium** (batteries) | Australie, environ 37 % ; Chili, environ 20 % ; Chine, environ 17 % | Australie, environ 32 % ; Chine, environ 21 % ; Chili, environ 19 % |

La Chine assure aussi environ 90 % du **raffinage** des terres rares (transformation du minerai en métaux utilisables).

Sources : Institut d'études géologiques des États-Unis (USGS), *Mineral Commodity Summaries* 2025 et 2026 (chaque édition donne la production estimée de l'année précédente) ; pour le raffinage des terres rares, Agence internationale de l'énergie (2025). Ces chiffres changent chaque année : en 2025, la Chine est passée devant le Chili pour le lithium. Les chiffres d'une année sont même parfois corrigés dans l'édition suivante (l'édition 2026 estime par exemple la production mondiale de terres rares de 2024 à 380 000 t). Pour un exposé, cherche toujours l'édition la plus récente.

- Bien concevoir, c'est limiter le nombre de matériaux différents, éviter les assemblages collés de matériaux différents (difficiles à recycler) et privilégier les matériaux recyclés ou recyclables.

> **À retenir** : propriétés mécaniques, thermiques, électriques, chimiques, optiques. Sollicitations : **traction, compression, flexion, torsion, cisaillement**. Flèche : proportionnelle à la charge ; hauteur × 2 → flèche ÷ 8. Valider par **simulation** puis **essai**. Procédés : **enlèvement**, **ajout**, **déformation**, **moulage**, **assemblage**. Indices **IP** (poussière, eau) et **IK** (chocs). Penser **empreinte carbone**, **disponibilité**, **recyclage**.
`,
      exercices: [
        { type: "qcm", question: "Un plongeoir se courbe quand un nageur se tient au bout. Quelle sollicitation subit-il ?", choix: ["La flexion", "La traction", "La torsion", "Le cisaillement"], reponse: 0, explication: "La planche se **courbe** sous la charge : c'est de la **flexion**." },
        { type: "qcm", question: "Quelle sollicitation subit la tige d'un tournevis qu'on fait tourner pour serrer une vis ?", choix: ["La compression", "La flexion", "La torsion", "La traction"], reponse: 2, explication: "On **tord** la tige autour de son axe : c'est de la **torsion**." },
        { type: "vf", question: "Une règle en bois posée sur chant (sur sa tranche) fléchit beaucoup moins que posée à plat, pour la même charge.", reponse: true, explication: "La rigidité dépend fortement de la **hauteur** de la section (au cube) : sur chant, la hauteur est grande, la règle se déforme très peu." },
        { type: "saisie", question: "Une poutre fléchit de 16 mm sous une charge. On utilise une poutre identique mais deux fois plus haute. Quelle sera la flèche, en mm ? (nombre)", reponses: ["2", "2 mm", "deux"], explication: "Doubler la hauteur divise la flèche par 2 × 2 × 2 = 8 : 16 ÷ 8 = **2 mm**." },
        { type: "qcm", question: "On doit produire 500 000 coques de téléphone identiques en plastique. Quel procédé est le plus adapté ?", choix: ["L'impression 3D", "Le moulage par injection", "Le sciage", "Le pliage"], reponse: 1, explication: "Pour une **grande série** de pièces identiques en plastique, le **moulage par injection** est rapide et peu coûteux par pièce (le moule est cher, mais amorti). L'impression 3D convient aux pièces uniques ou aux prototypes." },
        { type: "qcm", question: "Une caméra extérieure est marquée **IP67**. Que signifie le chiffre 7 ?", choix: ["Elle résiste à des chocs de 7 joules", "Elle fonctionne jusqu'à 7 °C", "Elle est protégée contre une immersion temporaire dans l'eau", "Elle pèse 7 kg"], reponse: 2, explication: "Le **2e chiffre** de l'indice IP concerne les **liquides** : 7 = immersion temporaire. Le 6 indique une protection totale contre la poussière. Les chocs relèvent de l'indice IK." },
        { type: "vf", question: "On peut découper du PVC à la découpe laser du FabLab sans danger.", reponse: false, explication: "Le **PVC** contient du chlore : chauffé par le laser, il dégage des gaz toxiques et corrosifs. Il est **interdit** à la découpe laser. On utilise par exemple du PMMA (plexiglas), du contreplaqué, du carton." },
        { type: "saisie", question: "Recycler l'aluminium permet d'économiser environ quel pourcentage de l'énergie nécessaire pour le produire à partir du minerai ? (nombre)", reponses: ["95", "95 %", "96", "96 %"], explication: "Environ **95 %** (le calcul avec 186 et 8 GJ donne environ 96 %) : refondre de l'aluminium usagé demande bien moins d'énergie que d'extraire et transformer la bauxite (environ 8 GJ par tonne au lieu de 186 GJ, d'après l'Institut international de l'aluminium)." },
        { type: "redaction", question: "**Sujet type brevet.** On conçoit un support de smartphone à fixer sur le guidon d'un vélo. Exigences : masse inférieure à 100 g ; résister à la pluie et aux vibrations ; ne pas casser en cas de chute du vélo ; être fabriqué au FabLab en 20 exemplaires ; être recyclable. Matériaux disponibles (données simplifiées) : PLA (imprimable en 3D, rigide mais cassant en cas de choc, biosourcé c'est-à-dire fabriqué à partir de plantes comme le maïs, recyclable dans des filières spécifiques) ; PETG (imprimable en 3D, plus résistant aux chocs, résiste à l'eau, recyclable) ; aluminium (usinable, très résistant, plus lourd, recyclable à l'infini, usinage long au collège) ; contreplaqué (découpe laser, craint l'humidité). 1) Identifie les sollicitations subies par le support. 2) Choisis un matériau et un procédé, en justifiant au regard des exigences et des contraintes environnementales. 3) Propose une démarche pour valider la tenue mécanique (simulation puis essai).", corrige: "1) **Sollicitations** : le smartphone en porte-à-faux (il dépasse dans le vide, au bout du bras) fait travailler le bras du support en **flexion** ; les vibrations créent des flexions répétées ; le collier serré autour du guidon est en **traction** ; une chute provoque un **choc**.\n\n2) **Choix : PETG imprimé en 3D**.\n- Il **résiste à l'eau** (le contreplaqué est exclu car il craint l'humidité) et **aux chocs** mieux que le PLA (qui est cassant).\n- Il est **léger** : un support imprimé pèse quelques dizaines de grammes, sous les 100 g exigés (l'aluminium serait plus lourd et trop long à usiner en 20 exemplaires au collège).\n- L'**impression 3D** permet des formes complexes (clips, collier) et convient à une petite série de 20 pièces sans moule.\n- Il est **recyclable** ; pour limiter l'impact, on optimise la forme (nervures plutôt que pièces pleines), on règle un taux de remplissage adapté et on n'utilise qu'**un seul matériau** pour faciliter le recyclage.\n\n3) **Validation** :\n- **Simulation** : modéliser le support en 3D, renseigner le matériau (PETG) et appliquer une charge nettement supérieure au poids d'un smartphone (un téléphone de 200 g pèse environ 2 N ; on simule par exemple 6 N, trois fois plus, pour tenir compte des secousses : c'est une marge de sécurité) ; vérifier que la déformation reste inférieure à la valeur autorisée et repérer les zones fragiles, puis renforcer si besoin.\n- **Essai réel** : fixer le support sur un guidon, suspendre une masse connue (600 g par exemple, comme dans la simulation) et mesurer la flèche au réglet ; faire un essai de vibrations (rouler sur un chemin) et de chute contrôlée depuis 1 m ; vérifier l'absence de fissure ; comparer avec la simulation et conclure.\n\n> On attend un choix argumenté par **plusieurs critères** (eau, chocs, masse, procédé, série, recyclage)." },
        { type: "saisie", question: "D'après l'USGS (*Mineral Commodity Summaries 2025*), la République démocratique du Congo a extrait environ 220 000 t de cobalt en 2024, sur une production mondiale d'environ 290 000 t. Quelle part de la production mondiale cela représente-t-il, en % arrondi à l'unité ? (nombre)", reponses: ["76", "76 %"], explication: "220 000 ÷ 290 000 ≈ 0,759, soit environ **76 %** : plus des trois quarts du cobalt extrait dans le monde vient d'un seul pays. Une crise dans ce pays perturberait toute la fabrication des batteries." },
        { type: "qcm", question: "D'après l'Institut international de l'aluminium, produire 1 t d'aluminium à partir du minerai demande environ 186 GJ, et produire 1 t d'aluminium recyclé environ 8 GJ. Quelle économie d'énergie le recyclage permet-il ?", choix: ["Environ 5 %", "Environ 50 %", "Environ 23 %", "Environ 95 %"], reponse: 3, explication: "Économie : 186 − 8 = 178 GJ ; 178 ÷ 186 ≈ 0,96. Avec la valeur plus précise de 8,3 GJ, on trouve environ 95,5 % : on retient **environ 95 %**. Le recyclé ne demande qu'environ 4 à 5 % de l'énergie du primaire (8 ÷ 186 ≈ 0,04)." },
        { type: "vf", question: "D'après l'USGS, en 2024, l'Australie était le premier pays producteur de lithium extrait des mines, devant le Chili et la Chine.", reponse: true, explication: "Production estimée en 2024 : Australie environ 88 000 t, Chili environ 49 000 t, Chine environ 41 000 t (USGS, *Mineral Commodity Summaries 2025*). Ces trois pays fournissent à eux seuls environ les trois quarts du lithium extrait." },
        { type: "saisie", question: "D'après l'USGS (*Mineral Commodity Summaries 2026*), la Chine a extrait environ 62 000 t de lithium en 2025, sur une production mondiale d'environ 290 000 t. Quelle part de la production mondiale cela représente-t-il, en % arrondi à l'unité ? (nombre)", reponses: ["21", "21 %"], explication: "62 000 ÷ 290 000 ≈ 0,214, soit environ **21 %**. En 2024, la part de la Chine était d'environ 17 % : elle est passée devant le Chili (environ 19 % en 2025)." },
        { type: "qcm", question: "D'après le tableau du cours (USGS 2025 et 2026), qu'est-ce qui a changé entre 2024 et 2025 pour le lithium extrait des mines ?", choix: ["L'Australie a perdu sa première place", "Le Chili est devenu le premier producteur", "La Chine est passée devant le Chili", "La production mondiale a été divisée par deux"], reponse: 2, explication: "En 2025, l'Australie reste première (environ 32 %), la Chine passe à environ 21 % devant le Chili (environ 19 %). Ces classements changent d'une année à l'autre : il faut toujours citer l'**année** et la **source** des chiffres." },
      ],
    },
    {
      id: "algorithmes-programmation-3e",
      titre: "Concevoir un algorithme et le programmer par blocs",
      theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
      cours: `
## La pensée informatique
Face à un problème, l'informaticien procède par étapes :
- **abstraction** : ne garder que les informations utiles (la distance à l'obstacle compte, la couleur du robot non) ;
- **décomposition** : découper le problème en sous-problèmes plus simples (détecter, décider, agir) ;
- **modélisation** : décrire le comportement attendu, par exemple dans un **tableau** « situation → action » ;
- **algorithme** : écrire la suite d'instructions en langage naturel ou par un algorigramme ;
- **simulation** et **tests** : exécuter pas à pas, vérifier, corriger.

## Variables et types
Une **variable** a un **nom** et contient une **valeur** qui peut changer. On lui **affecte** une valeur avec « mettre ... à ... ». Trois types :
- **nombre** (distance, score, température) ;
- **mot** ou chaîne de caractères (« Bonjour ») ;
- **booléen** : vrai ou faux (porte ouverte, présence détectée).

Opérateurs arithmétiques : +, −, ×, ÷ ; comparaisons : <, >, = (et ≤, ≥ en combinant).

## Les opérateurs logiques ET, OU, NON
| A | B | A ET B | A OU B | NON A |
|---|---|---|---|---|
| vrai | vrai | vrai | vrai | faux |
| vrai | faux | faux | vrai | faux |
| faux | vrai | faux | vrai | vrai |
| faux | faux | faux | faux | vrai |

- **ET** : vrai seulement si les **deux** conditions sont vraies ;
- **OU** : vrai si **au moins une** condition est vraie ;
- **NON** : inverse la valeur.

>! « distance comprise entre 10 et 20 » s'écrit : (distance > 10) ET (distance < 20).

## Conditions, boucles, événements
- **Si ... alors ... sinon** : on peut **imbriquer** des conditions pour traiter plusieurs cas.
- **Boucles** : « répéter n fois », « répéter jusqu'à condition », « répéter indéfiniment ».
- **Événements** : « quand le drapeau vert est cliqué », « quand le bouton A est pressé », « quand je reçois message ». Un événement **déclenche** une séquence d'instructions.

## Les listes
Une **liste** stocke plusieurs valeurs dans une seule variable : toutes les températures mesurées, par exemple. Blocs utiles : « ajouter (valeur) à [liste] », « élément (n) de [liste] », « longueur de [liste] ». En Scratch, le premier élément porte le numéro **1**.

>! Liste mesures = [12, 18, 15, 21]. élément 3 de mesures = **15** ; longueur de mesures = **4** ; somme = 66 ; moyenne = 66 ÷ 4 = **16,5**.

## Exemple résolu : un robot qui ralentit devant un obstacle
Modélisation :
| Distance (cm) | Action |
|---|---|
| supérieure à 50 | avancer, vitesse 100 |
| entre 20 et 50 | avancer, vitesse 40 |
| inférieure ou égale à 20 | s'arrêter (vitesse 0) et afficher « Obstacle » |

Programme (blocs écrits en texte) :
~~~
quand le drapeau vert est cliqué
mettre vitesse à 0
répéter indéfiniment
    mettre distance à (distance mesurée)
    si distance > 50 alors
        mettre vitesse à 100
    sinon
        si distance > 20 alors
            mettre vitesse à 40
        sinon
            mettre vitesse à 0
            dire « Obstacle »
    avancer à (vitesse)
~~~

## Exécuter pas à pas
On suit la valeur des variables dans un **tableau de suivi**.

>! x = 2 ; répéter 3 fois : mettre x à (x × 3 − 1).
| Tour | Calcul | x |
|---|---|---|
| départ | | 2 |
| 1 | 2 × 3 − 1 | 5 |
| 2 | 5 × 3 − 1 | 14 |
| 3 | 14 × 3 − 1 | 41 |

## Erreurs fréquentes
- Initialiser une variable **dans** la boucle (elle est remise à zéro à chaque tour).
- Oublier un cas (que se passe-t-il pour distance = 20 exactement ?).
- Confondre ET et OU.
- Ne pas respecter le **nom exact** des variables donné dans le sujet.

> **À retenir** : décomposer, modéliser (tableau situation → action), écrire l'algorithme, programmer, **tester pas à pas**. Variables : **nombre, mot, booléen**. **ET** : les deux ; **OU** : au moins une ; **NON** : l'inverse. Conditions imbriquées pour plusieurs cas. **Listes** : ajouter, élément n (le 1er a le numéro 1 en Scratch), longueur.
`,
      exercices: [
        { type: "qcm", question: "temperature = 30 et fenetre_ouverte = faux. Que vaut la condition (temperature > 25) ET (NON fenetre_ouverte) ?", choix: ["faux", "vrai", "30", "On ne peut pas savoir"], reponse: 1, explication: "temperature > 25 est **vrai** ; NON faux = **vrai** ; vrai ET vrai = **vrai** : il fait chaud et la fenêtre est fermée, on peut l'ouvrir." },
        { type: "saisie", question: "x = 2. Le programme exécute « répéter 3 fois : mettre x à (x × 3 − 1) ». Quelle est la valeur finale de x ?", reponses: ["41"], explication: "2 → 5 → 14 → **41**." },
        { type: "qcm", question: "Quelle condition traduit « la distance est comprise entre 10 et 20 (exclus) » ?", choix: ["(distance > 10) OU (distance < 20)", "(distance < 10) ET (distance > 20)", "NON (distance > 10)", "(distance > 10) ET (distance < 20)"], reponse: 3, explication: "Il faut que les **deux** conditions soient vraies en même temps : **ET**. Avec OU, toute distance conviendrait (par exemple 50 > 10)." },
        { type: "vf", question: "Si A est faux et B est vrai, alors A OU B est vrai.", reponse: true, explication: "OU est vrai dès qu'**au moins une** des conditions est vraie : ici B." },
        { type: "saisie", question: "En Scratch, la liste mesures contient [12, 18, 15, 21]. Que vaut « élément 3 de mesures » ?", reponses: ["15"], explication: "En Scratch, la numérotation commence à 1 : élément 1 = 12, élément 2 = 18, **élément 3 = 15**." },
        { type: "saisie", question: "compteur = 0. Le programme exécute « répéter jusqu'à compteur > 10 : ajouter 3 à compteur ». Quelle est la valeur finale de compteur ?", reponses: ["12", "compteur = 12"], explication: "0 → 3 → 6 → 9 → 12. À 9, la condition « > 10 » est fausse, on continue ; à **12**, elle est vraie, la boucle s'arrête." },
        { type: "qcm", question: "Dans le programme du robot du cours, que se passe-t-il quand la distance vaut exactement 20 cm ?", choix: ["Le robot s'arrête et affiche « Obstacle »", "Le robot avance à la vitesse 40", "Le robot avance à la vitesse 100", "Le programme plante"], reponse: 0, explication: "20 > 50 est faux ; 20 > 20 est faux aussi : on exécute le dernier « sinon » : vitesse 0 et « Obstacle ». Tester les **valeurs limites** est indispensable." },
        { type: "qcm", question: "Un élève écrit « mettre score à 0 » à l'intérieur de la boucle « répéter indéfiniment ». Quel problème cela pose-t-il ?", choix: ["Aucun", "Le score ne s'affiche plus", "Le score est remis à 0 à chaque tour de boucle et ne peut jamais augmenter", "La boucle s'arrête"], reponse: 2, explication: "L'initialisation doit être faite **avant** la boucle, une seule fois. Sinon la variable repart de 0 à chaque tour." },
        { type: "redaction", question: "**Sujet type brevet.** Un système d'arrosage automatique de jardin mesure l'humidité du sol (variable humidite, en %) et commande une pompe et un voyant. Comportement souhaité :\n\n| Valeur de humidite | Pompe | Voyant |\n|---|---|---|\n| inférieure à 30 | allumée | rouge |\n| de 30 à 60 (60 exclu) | éteinte | orange |\n| 60 ou plus | éteinte | vert |\n\nDe plus, si humidite dépasse 80, le système envoie le message « Sol détrempé » au téléphone. Le début du programme est donné :\n~~~\nquand le système démarre\nrépéter indéfiniment\n    mettre humidite à (valeur du capteur d'humidité)\n    si humidite < 30 alors\n        allumer la pompe\n        mettre le voyant en rouge\n~~~\n1) Complète le programme en respectant le nom de la variable. 2) Indique le type de la variable humidite. 3) Fais le suivi du programme pour humidite = 30, puis humidite = 85.", corrige: "1) **Programme complet** :\n~~~\nquand le système démarre\nrépéter indéfiniment\n    mettre humidite à (valeur du capteur d'humidité)\n    si humidite < 30 alors\n        allumer la pompe\n        mettre le voyant en rouge\n    sinon\n        si humidite < 60 alors\n            éteindre la pompe\n            mettre le voyant en orange\n        sinon\n            éteindre la pompe\n            mettre le voyant en vert\n    si humidite > 80 alors\n        envoyer « Sol détrempé » au téléphone\n    attendre 60 secondes\n~~~\nLe test « > 80 » est placé **en dehors** des autres conditions, car il s'ajoute au cas « vert ». L'attente évite d'envoyer le message des centaines de fois par seconde.\n\n2) humidite est un **nombre** (entier, en %).\n\n3) **Suivi** :\n- humidite = 30 : 30 < 30 est faux ; 30 < 60 est vrai → pompe éteinte, voyant **orange** ; 30 > 80 faux → pas de message ;\n- humidite = 85 : 85 < 30 faux ; 85 < 60 faux → pompe éteinte, voyant **vert** ; 85 > 80 vrai → message « Sol détrempé ».\n\n> Le correcteur vérifie : nom exact de la variable, conditions imbriquées correctes, valeurs limites (30 et 60) bien traitées." },
      ],
    },
    {
      id: "programme-structure-python",
      titre: "Structurer un programme : fonctions, et passage des blocs à Python",
      theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
      cours: `
## Pourquoi structurer un programme ?
Un programme qui commande un objet réel devient vite long. Pour qu'il reste **lisible**, **testable** et **modifiable** par toute l'équipe, on le **découpe** en **sous-programmes** (ou **fonctions**) : chacun réalise une tâche précise et porte un nom clair.

- On **décompose** l'objectif en sous-objectifs.
- On écrit un sous-programme par sous-objectif et on le **teste seul**, pas à pas.
- Le **programme principal** appelle les sous-programmes dans le bon ordre.
- On ajoute des **commentaires** pour expliquer le rôle de chaque partie.

## Les sous-programmes en blocs
En Scratch, « Créer un bloc » permet de définir un nouveau bloc, avec ou sans **paramètre** :
~~~
définir polygone (cotes) (longueur)
    répéter (cotes) fois
        avancer de (longueur)
        tourner de (360 / cotes) degrés

quand le drapeau vert est cliqué
    polygone (4) (100)     (commentaire : carré de côté 100)
    polygone (6) (50)      (commentaire : hexagone de côté 50)
~~~
Un seul bloc sert pour tous les polygones : c'est la **modularité**.

## Des blocs au langage Python
À la fin de la 3e, tu dois savoir faire le lien entre un programme par blocs et le même programme en **Python**, un langage **textuel** très utilisé au lycée.

| Blocs | Python |
|---|---|
| mettre score à 0 | score = 0 |
| ajouter 1 à score | score = score + 1 |
| dire (score) | print(score) |
| demander « Âge ? » et attendre | age = int(input("Âge ? ")) |
| si ... alors ... sinon | if ...: ... else: ... |
| sinon si | elif ...: |
| répéter 10 fois | for i in range(10): |
| répéter jusqu'à condition | while not condition: |
| répéter indéfiniment | while True: |
| a = b (comparaison) | a == b |
| a ≠ b | a != b |
| ET, OU, NON | and, or, not |
| liste vide | mesures = [] |
| ajouter 25 à mesures | mesures.append(25) |
| élément 1 de mesures | mesures[0] |
| longueur de mesures | len(mesures) |
| définir bloc (paramètre) | def nom(parametre): |

## Les règles de Python à connaître
- Les blocs d'instructions sont définis par l'**indentation** (le décalage de 4 espaces) : elle est **obligatoire**.
- Les lignes **if**, **elif**, **else**, **for**, **while**, **def** se terminent par **deux-points**.
- **=** affecte une valeur ; **==** compare deux valeurs.
- Les indices de liste commencent à **0** : mesures[0] est le premier élément.
- **range(4)** donne 0, 1, 2, 3 (4 valeurs, de 0 à 3). **range(1, 5)** donne 1, 2, 3, 4.
- Une fonction peut **renvoyer** un résultat avec **return**.
- Un commentaire commence par **#**.

>! Exemple résolu : le même programme en blocs puis en Python.
>! ~~~
>! quand le drapeau vert est cliqué
>! mettre score à 0
>! répéter 5 fois
>!     demander « 7 × 8 ? » et attendre
>!     si réponse = 56 alors
>!         ajouter 1 à score
>! dire (score)
>! ~~~
>! ~~~
>! score = 0               # avant la boucle
>! for i in range(5):
>!     reponse = int(input("7 × 8 ? "))
>!     if reponse == 56:
>!         score = score + 1
>! print(score)
>! ~~~

>! Exemple : une fonction qui renvoie une valeur.
>! ~~~
>! def moyenne(liste):
>!     total = 0
>!     for valeur in liste:
>!         total = total + valeur
>!     return total / len(liste)
>!
>! print(moyenne([12, 18, 15, 21]))   # affiche 16.5
>! ~~~

## Python sur une carte programmable
Les cartes micro:bit se programment aussi en Python (MicroPython) :
~~~
from microbit import *

while True:                        # répéter indéfiniment
    if temperature() > 25:
        pin0.write_digital(1)      # ventilateur en marche
        display.show(Image.SAD)
    else:
        pin0.write_digital(0)      # ventilateur arrêté
        display.show(Image.HAPPY)
    sleep(1000)                    # pause de 1 000 ms
~~~

> **À retenir** : découper en **sous-programmes / fonctions** (def), les tester un par un, puis le programme principal. Python : **indentation obligatoire**, **deux-points** après if, else, for, while, def ; **=** affecte, **==** compare ; **for i in range(n)** = répéter n fois ; **while True** = répéter indéfiniment ; listes indexées à partir de **0**.
`,
      exercices: [
        { type: "qcm", question: "Quelle instruction Python correspond au bloc « répéter 4 fois » ?", choix: ["while 4:", "repeat(4)", "for i in range(4):", "if i == 4:"], reponse: 2, explication: "**for i in range(4):** exécute le bloc indenté 4 fois (i prend les valeurs 0, 1, 2, 3)." },
        { type: "saisie", question: "Qu'affiche ce programme Python ?\n~~~\nx = 3\nif x > 5:\n    print(\"grand\")\nelse:\n    print(\"petit\")\n~~~", reponses: ["petit"], explication: "3 > 5 est faux : on exécute le **else**, qui affiche **petit**." },
        { type: "saisie", question: "notes = [12, 15, 9]. Qu'affiche print(notes[1]) ?", reponses: ["15"], explication: "En Python, les indices commencent à 0 : notes[0] = 12, **notes[1] = 15**, notes[2] = 9. Attention, c'est différent de Scratch." },
        { type: "qcm", question: "En Python, quelle ligne **teste** si la distance vaut 10 ?", choix: ["if distance == 10:", "if distance = 10:", "if distance == 10", "if (distance = 10)"], reponse: 0, explication: "**==** compare, **=** affecte (on ne peut pas affecter dans un test). Et la ligne if doit se terminer par **deux-points** : sans eux, Python signale une erreur de syntaxe." },
        { type: "saisie", question: "Qu'affiche ce programme ?\n~~~\ns = 0\nfor i in range(1, 5):\n    s = s + i\nprint(s)\n~~~", reponses: ["10"], explication: "range(1, 5) donne 1, 2, 3, 4 (5 est exclu). s = 1 + 2 + 3 + 4 = **10**." },
        { type: "saisie", question: "Qu'affiche ce programme ?\n~~~\ndef double(x):\n    return 2 * x\n\nprint(double(7) + 1)\n~~~", reponses: ["15"], explication: "double(7) renvoie 14 ; 14 + 1 = **15**." },
        { type: "vf", question: "En Python, l'indentation (le décalage en début de ligne) est obligatoire : elle indique quelles instructions sont dans la boucle ou la condition.", reponse: true, explication: "C'est l'indentation qui remplace l'emboîtement des blocs de Scratch. Une erreur d'indentation change le programme ou provoque une erreur." },
        { type: "qcm", question: "Pourquoi découpe-t-on un long programme en sous-programmes (fonctions) ?", choix: ["Pour qu'il s'exécute forcément plus vite", "Pour le rendre lisible, tester chaque partie séparément et réutiliser le code", "Parce que Python interdit les programmes de plus de 10 lignes", "Pour éviter d'utiliser des variables"], reponse: 1, explication: "La **modularité** rend le programme plus clair, permet de tester chaque fonction seule et de **réutiliser** un même bloc (comme le bloc polygone)." },
        { type: "redaction", question: "**Sujet type brevet.** Voici un programme par blocs qui commande une barrière de parking :\n~~~\nquand le système démarre\nmettre places à 20\nrépéter indéfiniment\n    si voiture détectée en entrée ET places > 0 alors\n        ouvrir_barriere\n        ajouter -1 à places\n    afficher (places)\n\ndéfinir ouvrir_barriere\n    lever la barrière\n    attendre 5 secondes\n    baisser la barrière\n~~~\n1) Identifie : une variable et son type, un sous-programme, une boucle, un opérateur logique. 2) Traduis ce programme en Python, en utilisant les fonctions fournies voiture_entree() (renvoie True ou False), lever(), baisser(), attendre(secondes) et afficher(valeur). 3) Explique ce qui se passe quand places vaut 0 et qu'une voiture arrive. 4) Propose deux tests à réaliser pour valider le programme.", corrige: "1) **Éléments** :\n- variable : **places**, de type **nombre entier** ;\n- sous-programme : **ouvrir_barriere** ;\n- boucle : **répéter indéfiniment** ;\n- opérateur logique : **ET**.\n\n2) **Python** :\n~~~\ndef ouvrir_barriere():\n    lever()\n    attendre(5)\n    baisser()\n\nplaces = 20\nwhile True:\n    if voiture_entree() and places > 0:\n        ouvrir_barriere()\n        places = places - 1\n    afficher(places)\n~~~\nLa fonction doit être **définie avant** d'être appelée ; « ajouter −1 » devient places = places − 1.\n\n3) Si places vaut 0, la condition places > 0 est **fausse**, donc la condition complète (ET) est fausse : la barrière **ne s'ouvre pas** et l'afficheur indique 0. Le parking est complet.\n\n4) **Tests** :\n- simuler 3 voitures avec 20 places au départ : l'afficheur doit indiquer 17 et la barrière s'ouvrir 3 fois ;\n- mettre places à 1, faire passer 2 voitures : la 1re passe (afficheur 0), la 2e reste bloquée.\nOn peut aussi vérifier que, si aucune voiture ne se présente, le compteur ne change pas.\n\n> Attendus : syntaxe Python (deux-points, indentation, ==, and), noms des fonctions respectés, raisonnement sur la valeur limite 0." },
      ],
    },
    {
      id: "objets-communicants",
      titre: "Objets communicants : faire dialoguer deux objets",
      theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
      cours: `
## Qu'est-ce qu'un objet communicant ?
Un **objet communicant** échange des données avec d'autres objets, un ordinateur ou un serveur : montre connectée, thermostat, sonnette vidéo, capteur de qualité de l'air, robot. Relié à Internet, il fait partie de l'**Internet des objets** (IoT).

## Les moyens de communication
| Liaison | Portée (ordre de grandeur) | Usage typique |
|---|---|---|
| Câble (Ethernet, USB) | quelques mètres à 100 m | fiable, rapide, sans ondes |
| **Wi-Fi** | quelques dizaines de mètres | débit élevé, accès au réseau local et à Internet |
| **Bluetooth** | une dizaine de mètres | écouteurs, montre, faible consommation |
| **Radio** des cartes programmables | quelques dizaines de mètres | échanges simples entre cartes (micro:bit) |
| **RFID / NFC** | quelques centimètres | badge d'accès, paiement sans contact, étiquette antivol |
| Réseaux bas débit longue portée (LoRa, par exemple) | plusieurs kilomètres | capteurs isolés, faible débit, très faible consommation |
| Réseau mobile (4G, 5G) | partout où il y a couverture | objets mobiles (trottinettes en libre-service) |

Pour se comprendre, deux objets doivent utiliser le même **protocole** : un ensemble de **règles communes** (format des messages, ordre des échanges, adresses).

## Ajouter un objet à un réseau local : l'adresse IP fixe
Le plus souvent, la box attribue automatiquement les adresses IP grâce au service **DHCP**. Pour un objet qu'on doit toujours retrouver à la même adresse (une caméra, une carte qui commande un portail), on paramètre une **adresse IP fixe**.

Méthode :
1. Relever l'adresse du réseau et le **masque** (par exemple 192.168.1.0, masque 255.255.255.0) et l'adresse de la **passerelle** (la box, souvent 192.168.1.1).
2. Choisir une adresse **dans le même réseau** (192.168.1.x), **libre** (aucun autre appareil ne l'utilise) et **en dehors de la plage DHCP** (si la box distribue de .10 à .100, choisir par exemple .150).
3. Saisir dans l'objet : adresse IP, masque, passerelle.
4. **Tester** la connexion depuis un ordinateur avec la commande **ping** suivie de l'adresse : si l'objet répond, la liaison fonctionne.

## Faire dialoguer deux objets
Un objet **émetteur** envoie un message ; un objet **récepteur** le reçoit et agit.

>! Exemple : une sonnette sans fil avec deux cartes micro:bit (blocs écrits en texte).
>! Émetteur (à la porte) :
>! ~~~
>! au démarrage
>!     définir groupe radio sur 12
>! quand le bouton A est pressé
>!     envoyer le nombre 1 par radio
>! ~~~
>! Récepteur (dans la maison) :
>! ~~~
>! au démarrage
>!     définir groupe radio sur 12
>! quand un nombre est reçu par radio (nombre_recu)
>!     si nombre_recu = 1 alors
>!         jouer la mélodie « sonnerie »
>!         afficher l'icône cloche
>! ~~~
>! Les deux cartes doivent être sur le **même groupe radio** (comme deux talkies-walkies sur le même canal).

Sur un réseau IP, c'est le même principe : un objet envoie un message à l'**adresse IP** de l'autre (par exemple une carte qui mesure la température envoie la valeur à une autre carte qui commande un chauffage).

## Sécurité des objets connectés
- Changer le **mot de passe par défaut** dès l'installation (les pirates connaissent les mots de passe d'usine).
- Faire les **mises à jour** du logiciel de l'objet.
- Ne pas exposer l'objet à Internet si ce n'est pas nécessaire ; utiliser des échanges **chiffrés**.
- Se demander quelles **données** l'objet collecte et où elles sont envoyées.

> **À retenir** : un objet communicant échange des données (Wi-Fi, Bluetooth, radio, RFID/NFC, réseau mobile...) selon un **protocole** commun. IP fixe : **même réseau**, adresse **libre**, **hors plage DHCP**, même masque, passerelle = box ; tester avec **ping**. Émetteur / récepteur : même canal (groupe radio) ou adresse IP du destinataire. Sécurité : changer le mot de passe par défaut, mettre à jour.
`,
      exercices: [
        { type: "qcm", question: "La box a l'adresse 192.168.1.1 (masque 255.255.255.0) et distribue par DHCP les adresses de 192.168.1.10 à 192.168.1.100. Quelle adresse fixe choisir pour une caméra ?", choix: ["192.168.1.50", "192.168.2.150", "192.168.1.150", "192.168.1.1"], reponse: 2, explication: "192.168.1.**150** est dans le même réseau, en dehors de la plage DHCP et différente de la box. .50 risque d'être attribuée à un autre appareil ; 192.168.2.150 est dans un autre réseau ; .1 est déjà la box." },
        { type: "vf", question: "Deux cartes micro:bit doivent être réglées sur le même groupe radio pour communiquer.", reponse: true, explication: "Le groupe radio joue le rôle d'un **canal** : une carte n'écoute que les messages de son groupe." },
        { type: "qcm", question: "À quoi sert la commande **ping** suivie de l'adresse IP d'un objet ?", choix: ["À vérifier que l'objet répond sur le réseau", "À changer l'adresse IP de l'objet", "À chiffrer les données", "À recharger la batterie de l'objet"], reponse: 0, explication: "Le ping envoie un petit message et attend la réponse : si l'objet répond, la **liaison réseau fonctionne**." },
        { type: "qcm", question: "Quelle technologie est utilisée par un badge d'accès qu'on approche à quelques centimètres d'un lecteur ?", choix: ["La 5G", "Le Wi-Fi", "Le câble Ethernet", "La RFID (identification par radiofréquence)"], reponse: 3, explication: "La **RFID** (et le NFC) fonctionne à très courte distance : badge de cantine, carte de transport, paiement sans contact." },
        { type: "saisie", question: "Quel service de la box attribue automatiquement une adresse IP aux appareils qui se connectent ? (sigle)", reponses: ["DHCP"], explication: "Le **DHCP** distribue automatiquement les adresses IP d'une plage définie." },
        { type: "vf", question: "192.168.1.300 est une adresse IPv4 valide.", reponse: false, explication: "Chaque nombre d'une adresse IPv4 est compris entre **0 et 255** (il tient sur un octet) : 300 est impossible." },
        { type: "qcm", question: "Quelle est la première mesure de sécurité à prendre en installant une caméra connectée ?", choix: ["La peindre en noir", "Changer le mot de passe par défaut", "La placer près de la box", "Désactiver les mises à jour"], reponse: 1, explication: "Les mots de passe d'usine sont connus des pirates : il faut les **changer** dès l'installation, puis faire les mises à jour." },
        { type: "saisie", question: "Un ordinateur a l'adresse 192.168.0.12 avec le masque 255.255.255.0. Par quels trois nombres doit commencer l'adresse d'un objet placé dans le même réseau ? (écris-les séparés par des points)", reponses: ["192.168.0", "192.168.0.x"], explication: "Avec ce masque, la partie réseau est formée des trois premiers nombres : **192.168.0**. Seul le dernier nombre change d'un appareil à l'autre." },
        { type: "redaction", question: "**Sujet type brevet.** Dans un collège, on veut qu'un détecteur de fumée connecté (objet A) déclenche une sirène connectée (objet B) située dans un autre bâtiment, sur le même réseau local (192.168.5.0, masque 255.255.255.0, passerelle 192.168.5.1, plage DHCP de .20 à .120). 1) Propose une adresse IP fixe pour A et pour B, et justifie tes choix. 2) Explique comment tester que chaque objet est bien connecté. 3) Écris en langage naturel (ou en blocs décrits en texte) le programme de A et celui de B. 4) Cite deux mesures de sécurité pour ce système.", corrige: "1) **Adresses** : A = **192.168.5.150**, B = **192.168.5.151** (par exemple). Elles sont dans le **même réseau** (192.168.5), **différentes** l'une de l'autre et de la passerelle (.1), et **en dehors de la plage DHCP** (.20 à .120) pour qu'aucun autre appareil ne reçoive la même adresse. Le masque est 255.255.255.0 et la passerelle 192.168.5.1 pour les deux.\n\n2) **Tests** : depuis un ordinateur du réseau, lancer **ping 192.168.5.150** puis **ping 192.168.5.151** ; une réponse de chaque objet prouve la connexion. Ensuite, tester la communication réelle : déclencher le détecteur avec une bombe de test et vérifier que la sirène sonne.\n\n3) **Programmes** :\n\nObjet A (détecteur) :\n~~~\nrépéter indéfiniment\n    mettre fumee à (valeur du capteur de fumée)\n    si fumee > seuil alors\n        envoyer le message « ALARME » à 192.168.5.151\n        attendre 10 secondes\n~~~\nObjet B (sirène) :\n~~~\nquand un message est reçu\n    si message = « ALARME » alors\n        allumer la sirène\n        attendre 60 secondes\n        éteindre la sirène\n~~~\n\n4) **Sécurité** : changer les **mots de passe par défaut** des deux objets ; faire les **mises à jour** ; ne pas exposer ces objets à Internet (réseau local seulement) ; chiffrer les messages pour qu'un pirate ne puisse pas déclencher ou bloquer l'alarme. On peut aussi vérifier régulièrement, par un message de test, que la liaison fonctionne.\n\n> Attendus : adresses cohérentes et justifiées (réseau, unicité, hors DHCP), test par ping, programme émetteur / récepteur." },
      ],
    },
    {
      id: "projet-planning-prototypage",
      titre: "Mener un projet : planning, revues de projet, écoconception et prototypage",
      theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
      cours: `
## Les étapes d'un projet technologique
1. **Analyser le besoin** et rédiger le **cahier des charges** (fonctions, contraintes, critères, niveaux).
2. **Rechercher des idées** (créativité) : remue-méninges, croquis, recherche documentaire ; une IA générative peut proposer des pistes, à vérifier et à critiquer.
3. **Conception préliminaire** : choisir une solution parmi plusieurs (analyse multicritère).
4. **Conception détaillée** : modèle 3D, choix des matériaux, des composants, de la source d'énergie, schémas, algorithme.
5. **Réalisation** : fabrication des pièces, assemblage, programmation.
6. **Tests et validation** : vérifier chaque exigence du cahier des charges, corriger, **optimiser**.
7. **Mise en service** et **présentation** (soutenance).

Les **revues de projet** jalonnent le projet : l'équipe fait le point (ce qui est fait, les difficultés, les décisions), valide une étape et ajuste le planning.

## Le planning et le diagramme de Gantt
Pour chaque **tâche** : une **durée**, des **antériorités** (tâches qui doivent être terminées avant), des **ressources** (élèves, machines).

>! Exemple (durées en séances) :
>! | Tâche | Durée | Après |
>! |---|---|---|
>! | A : rédiger le cahier des charges | 2 | aucune |
>! | B : modéliser et fabriquer la structure | 3 | A |
>! | C : choisir les capteurs, écrire l'algorithme | 1 | A |
>! | E : programmer et tester le programme | 1 | C |
>! | D : assembler et tester le prototype | 2 | B et E |
>! | F : préparer la soutenance | 1 | D |

Diagramme de Gantt (chaque X = une séance) :
| Tâche | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| A | X | X | | | | | | |
| B | | | X | X | X | | | |
| C | | | X | | | | | |
| E | | | | X | | | | |
| D | | | | | | X | X | |
| F | | | | | | | | X |

- **Durée totale** : 8 séances. Le **chemin critique** est la suite de tâches sans aucune marge : **A → B → D → F** (2 + 3 + 2 + 1 = 8). Tout retard sur ces tâches retarde tout le projet.
- La **marge libre** d'une tâche est le retard possible **sans retarder la tâche suivante**. La **marge totale** est le retard possible **sans retarder la fin du projet**.
- C finit au plus tôt à la fin de la séance 3 et E commence juste après : marge libre de C = **0**. Mais C et E ensemble peuvent glisser d'une séance sans retarder D : marge totale de C = **1**. E finit à la fin de la séance 4 alors que D ne commence qu'à la séance 6 : marge libre et marge totale de E = **1**.

En cas d'**aléa** (une pièce ratée, un élève absent), on utilise les marges, on répartit autrement les tâches, ou on demande de l'aide.

## L'écoconception
**Écoconcevoir**, c'est réduire les impacts environnementaux **dès la conception**, sur tout le cycle de vie :
- utiliser **moins de matière** (formes évidées, épaisseurs ajustées) ;
- choisir des matériaux **recyclés**, **recyclables**, disponibles **localement** ;
- limiter le nombre de matériaux différents, préférer les assemblages **démontables** (vis, clips) au collage ;
- réduire la **consommation d'énergie** à l'usage (mode veille, composants efficaces) ;
- rendre l'objet **réparable** (pièces standard, documentation).

## Prototyper : modéliser et fabriquer
- **Modéliser en 3D** : esquisse cotée, puis fonctions volumiques (extrusion, révolution, enlèvement de matière, perçage, congé). On peut aussi **numériser en 3D** une pièce cassée pour la reproduire.
- **Impression 3D** : le modèle est exporté en fichier **STL**, puis un **trancheur** le découpe en couches et produit le fichier de commande de la machine (G-code). On règle la hauteur de couche, le **taux de remplissage**, les supports.
- **Découpe laser** : à partir d'un dessin **vectoriel** 2D (SVG, DXF), pour des plaques de bois, carton, PMMA (jamais de PVC).
- **Contrôler** la pièce : mesurer les cotes au **pied à coulisse** et les comparer au dessin.

>! Lecture d'un pied à coulisse au 1/10 (le **vernier** est la petite graduation de la partie qui coulisse) : le zéro du vernier est juste après la graduation 23 mm de la règle, et c'est le trait 4 du vernier qui est aligné avec un trait de la règle : la mesure vaut 23 + 0,4 = **23,4 mm**.

## La sécurité à l'atelier
Lunettes de protection, cheveux attachés, pas de vêtements flottants, ne jamais laisser une machine sans surveillance (imprimante, laser), capot fermé pendant la découpe laser, utilisation des machines après autorisation du professeur.

> **À retenir** : étapes : besoin → idées → conception préliminaire puis détaillée → réalisation → tests → mise en service ; **revues de projet** à chaque étape. Gantt : durées, antériorités ; **chemin critique** = tâches sans marge ; **marge libre** (sans retarder la tâche suivante) ≤ **marge totale** (sans retarder la fin). **Écoconception** dès le départ. Prototypage : modèle 3D → STL → trancheur → impression ; laser = dessin vectoriel ; contrôle au **pied à coulisse**.
`,
      exercices: [
        { type: "qcm", question: "À quoi sert une revue de projet ?", choix: ["À noter les élèves", "À acheter le matériel", "À faire le point sur l'avancement, valider une étape et ajuster le planning", "À ranger l'atelier"], reponse: 2, explication: "La **revue de projet** est un point d'étape : ce qui est fait, ce qui bloque, les décisions et les ajustements du planning." },
        { type: "saisie", question: "Dans l'exemple du cours, quelle est la durée totale du projet, en séances ? (nombre)", reponses: ["8", "8 séances", "huit"], explication: "Chemin critique A → B → D → F : 2 + 3 + 2 + 1 = **8 séances**." },
        { type: "saisie", question: "Dans l'exemple du cours, quelle est la marge totale de la tâche C, en séances ? (nombre)", reponses: ["1", "1 séance", "une", "une séance"], explication: "C et E durent 2 séances à elles deux et doivent finir avant D (séance 6) : elles peuvent glisser d'**une** séance sans retarder la fin du projet. Sa marge libre, elle, est nulle." },
        { type: "qcm", question: "Dans l'exemple du cours, la tâche B prend une séance de retard. Quelle est la conséquence ?", choix: ["Aucune, B a une marge", "Le projet finit une séance plus tard, car B est sur le chemin critique", "Seule la tâche C est retardée", "Le projet finit plus tôt"], reponse: 1, explication: "B fait partie du **chemin critique** (aucune marge) : tout retard sur B retarde D, F et donc la fin du projet d'une séance." },
        { type: "vf", question: "En écoconception, coller ensemble plusieurs matériaux différents facilite le recyclage.", reponse: false, explication: "C'est l'inverse : des matériaux collés sont difficiles à **séparer** pour les recycler. On préfère peu de matériaux différents et des assemblages **démontables**." },
        { type: "qcm", question: "Après avoir modélisé une pièce en 3D et exporté un fichier STL, quel logiciel prépare l'impression (couches, remplissage, supports) ?", choix: ["Un tableur", "Un navigateur web", "Un traitement de texte", "Un trancheur"], reponse: 3, explication: "Le **trancheur** découpe le modèle en couches et produit le fichier de commande de l'imprimante (G-code), avec les réglages de remplissage et de supports." },
        { type: "saisie", question: "Sur un pied à coulisse au 1/10, le zéro du vernier est juste après la graduation 31 mm et c'est le trait 7 du vernier qui coïncide avec un trait de la règle. Quelle est la mesure, en mm ? (nombre)", reponses: ["31,7", "31,7 mm"], explication: "31 mm lus sur la règle + 7 dixièmes lus sur le vernier : **31,7 mm**." },
        { type: "qcm", question: "Quel type de fichier faut-il fournir à une découpeuse laser ?", choix: ["Un dessin vectoriel 2D (par exemple SVG ou DXF)", "Un fichier son MP3", "Un tableau CSV", "Une photo floue"], reponse: 0, explication: "La découpeuse suit des **tracés vectoriels** 2D : lignes et courbes qu'elle découpe ou grave." },
        { type: "redaction", question: "**Sujet type brevet.** Une équipe de 4 élèves doit réaliser en 10 séances un distributeur automatique de croquettes pour chat (commande à distance, réserve de 1 kg). Tâches : T1 cahier des charges (1 séance, aucune antériorité) ; T2 modélisation 3D de la trémie, le réservoir en entonnoir (2 séances, après T1) ; T3 impression 3D de la trémie (2 séances, après T2) ; T4 choix des composants et câblage (1 séance, après T1) ; T5 programmation et test de la commande à distance (2 séances, après T4) ; T6 assemblage et essais (2 séances, après T3 et T5) ; T7 préparation de la soutenance (1 séance, après T6). 1) Calcule la durée totale du projet et indique le chemin critique. Le délai de 10 séances est-il respecté ? 2) Calcule la marge libre et la marge totale de la tâche T4. 3) À la séance 4, l'impression de la trémie échoue et doit être recommencée (1 séance de plus pour T3). Quelle est la conséquence ? Propose deux solutions. 4) Donne deux règles d'écoconception à appliquer à ce distributeur.", corrige: "1) **Durée** : deux chemins partent de T1 et se rejoignent à T6.\n- T1 → T2 → T3 : 1 + 2 + 2 = **5** séances avant T6 ;\n- T1 → T4 → T5 : 1 + 1 + 2 = **4** séances avant T6.\nT6 attend la fin du chemin le plus long (5 séances), puis T6 (2) et T7 (1) : durée totale = 5 + 2 + 1 = **8 séances**. Le **chemin critique** est **T1 → T2 → T3 → T6 → T7** (aucune marge). Le délai de **10 séances est respecté**, avec 2 séances de réserve.\n\n2) **Marges de T4** : T4 occupe la séance 2 et T5 les séances 3 et 4 ; T6 ne commence qu'à la séance 6.\n- **marge libre** de T4 = **0** : T5 peut commencer juste après T4 (séance 3), tout retard de T4 retarde T5 ;\n- **marge totale** de T4 = **1** séance : T4 et T5 peuvent glisser d'une séance (T5 finirait à la fin de la séance 5) sans retarder T6 ni la fin du projet.\n\n3) **Conséquence** : T3 est sur le chemin critique : T6 et T7 sont décalées d'une séance, le projet dure **9 séances**, ce qui reste dans le délai de 10. **Solutions** : utiliser la réserve ; pendant la réimpression, avancer la préparation de la soutenance ou les tests de programme ; analyser la cause de l'échec (réglages du trancheur, adhérence au plateau) pour ne pas la reproduire ; découper la trémie en deux pièces plus rapides à imprimer.\n\n4) **Écoconception** : limiter la matière (parois fines, taux de remplissage réduit) ; assemblages **vissés** plutôt que collés pour pouvoir démonter et réparer ; un **seul** plastique pour la trémie ; mode veille du microcontrôleur pour réduire la consommation ; composants standard faciles à remplacer.\n\n> Bien distinguer chemin critique (aucune marge) et tâches qui ont de la marge ; justifier par des calculs." },
      ],
    },
    {
      id: "brevet-epreuve-technologie",
      titre: "Réussir la partie technologie de l'épreuve de sciences du brevet",
      theme: "Préparer le brevet : l'épreuve de sciences",
      cours: `
## Comment se passe l'épreuve ?
L'épreuve écrite de **sciences** du brevet dure **1 heure**. Elle porte sur **deux** disciplines parmi trois (physique-chimie, SVT, technologie), connues seulement le jour de l'épreuve. Tu dois donc réviser les trois.

À partir de la session **2027** :
- chaque discipline compte pour **10 points sur 20**, avec un temps conseillé de **30 minutes** ;
- la **maîtrise de la langue** est notée (1 point par discipline) : orthographe, phrases correctes, **vocabulaire technique précis**, raisonnement organisé ;
- le sujet de technologie porte sur **tout le programme du cycle 4** (5e, 4e et 3e) : la technologie n'a pas de programme propre à la classe de 3e, mais un programme de cycle avec des repères pour chaque année. Revois donc aussi les notions de 5e et de 4e.

Le sujet présente un **objet ou système technique** réel (drone, robot, objet connecté, véhicule...) avec des **documents** : texte, tableau de données, schéma, programme. Les essais et démarches, même non aboutis, sont pris en compte.

## Les types de questions fréquents
| Question | Ce qu'on attend |
|---|---|
| Identifier les constituants de la chaîne d'énergie ou d'information | trier les informations du document ; ne pas mélanger les deux chaînes |
| Représenter par un schéma bloc | blocs dans le bon ordre (alimenter, distribuer, convertir, transmettre), formes d'énergie sur les flèches |
| Choisir un constituant d'après des exigences | lire le tableau, vérifier **chaque** exigence, calculer si besoin, **justifier** |
| Proposer un protocole | schéma, matériel, étapes, plusieurs essais, comparaison à l'exigence |
| Compléter un programme | respecter **exactement** les noms de variables, traiter tous les cas, imiter la syntaxe donnée |
| Argumenter (développement durable, IA, société) | idée + donnée du document + avantage et inconvénient + conclusion |

## Les verbes des consignes
- **Identifier, citer, relever** : réponse courte, sans justification longue.
- **Décrire** : dire comment c'est, avec le vocabulaire précis.
- **Expliquer** : dire **pourquoi** ou **comment** ça fonctionne.
- **Justifier** : appuyer ta réponse sur une **donnée du document** ou un calcul (« d'après le document 2, ... donc ... »).
- **Calculer** : formule, application numérique, résultat avec **unité**.
- **Proposer** : une solution ou un protocole personnel mais réaliste.
- **Compléter** : écrire dans le cadre fourni, sans changer ce qui est déjà donné.

## Méthode en 30 minutes
1. **Lis tout le sujet** (2 à 3 minutes) et repère l'objet étudié.
2. Pour chaque question, **surligne** dans les documents les informations utiles.
3. Commence par les questions que tu sais faire, mais **numérote** bien tes réponses.
4. **Rédige des phrases** complètes, avec le vocabulaire technique : « la batterie **alimente** », « le contrôleur **distribue** l'énergie électrique ».
5. Pour un calcul : formule, valeurs, résultat, **unité**, puis une phrase de conclusion (« l'exigence est respectée »).
6. Garde 2 minutes pour **relire** (orthographe, unités, noms des variables).

>! Exemple de réponse justifiée : « D'après le document 2, l'hélice H2 permet d'atteindre 11 km/h à partir de 1 300 tr/min. Le moteur A tourne au maximum à 1 200 tr/min : il ne convient pas avec H2. Le moteur B (1 500 tr/min) convient et il est plus léger que le moteur C : je choisis donc H2 avec le moteur B. »

## Les erreurs qui coûtent des points
- Placer un **capteur** dans la chaîne d'énergie.
- Oublier les **unités** ou se tromper de conversion (min → h, mm → m, octets → bits).
- Ne vérifier qu'**une** exigence sur deux.
- Dans un programme, inventer un nouveau nom de variable (« dist » au lieu de « distance »).
- Répondre sans **justifier** quand la consigne le demande.

> **À retenir** : 1 h pour deux disciplines, environ **30 min** pour la technologie, **10 points** dont 1 pour la langue. Lis tout, surligne, **justifie avec les documents**, écris formule + unité + conclusion, respecte les **noms de variables**, relis.
`,
      exercices: [
        { type: "qcm", question: "Combien de temps est-il conseillé de consacrer à la partie technologie de l'épreuve de sciences du brevet ?", choix: ["30 minutes", "1 heure", "2 heures", "10 minutes"], reponse: 0, explication: "L'épreuve de sciences dure **1 h** pour **deux** disciplines : environ **30 minutes** chacune." },
        { type: "vf", question: "À partir de la session 2027, la maîtrise de la langue (orthographe, vocabulaire précis, raisonnement organisé) est notée dans l'épreuve de sciences.", reponse: true, explication: "Elle compte pour 2 points sur 20, soit 1 point pour chacune des deux disciplines." },
        { type: "qcm", question: "La consigne dit : « **Justifier** le choix du moteur. » Que dois-tu faire ?", choix: ["Donner seulement le nom du moteur", "Recopier tout le document", "Appuyer ton choix sur les données du document (et un calcul si besoin)", "Dessiner le moteur"], reponse: 2, explication: "Justifier, c'est **prouver** avec les données : « d'après le tableau, ce moteur atteint ... et pèse ... donc il respecte les deux exigences »." },
        { type: "qcm", question: "Dans un sujet, le document décrit la variable « distance ». Tu complètes le programme. Que faut-il faire ?", choix: ["Utiliser un nom plus court comme « d »", "Utiliser exactement le nom « distance »", "Créer une nouvelle variable « dist »", "Ne pas utiliser de variable"], reponse: 1, explication: "Le correcteur vérifie le **respect des noms** donnés dans le sujet : un autre nom rendrait le programme faux." },
        { type: "redaction", question: "**Sujet type brevet : le robot tondeuse (1/4).** Document 1 : « Le robot tondeuse est alimenté par une batterie lithium-ion de 18 V et 2,5 Ah, rechargée sur sa base. Une carte de commande fait varier la puissance envoyée à deux moteurs de roues et à un moteur de coupe. Les moteurs de roues entraînent les roues par l'intermédiaire de réducteurs à engrenages ; le moteur de coupe fait tourner directement la lame. Un capteur de pluie, un capteur de choc (pare-chocs) et un capteur de fil périphérique (qui délimite la pelouse) renseignent le microcontrôleur. Un écran et une application sur smartphone permettent de programmer les horaires. » Question : identifie les constituants de la chaîne d'énergie qui permettent au robot de se déplacer et représente cette chaîne par un schéma bloc. Cite aussi deux constituants de la chaîne d'information.", corrige: "**Constituants de la chaîne d'énergie (déplacement)** : batterie, carte de commande (partie puissance), moteurs de roues, réducteurs à engrenages, roues.\n\n**Schéma bloc** :\n~~~\n[ALIMENTER : batterie 18 V] --énergie électrique-->\n[DISTRIBUER : carte de commande] --énergie électrique-->\n[CONVERTIR : moteurs de roues] --énergie mécanique de rotation-->\n[TRANSMETTRE : réducteurs à engrenages et roues] --> déplacement du robot\n~~~\n\n**Chaîne d'information** : capteur de pluie, capteur de choc, capteur de fil périphérique (acquérir), microcontrôleur (traiter), écran et application (communiquer / IHM).\n\n> On n'attend pas le moteur de coupe dans la chaîne du déplacement. Mettre un capteur dans la chaîne d'énergie est une erreur fréquente." },
        { type: "redaction", question: "**Sujet type brevet : le robot tondeuse (2/4).** Exigences : exigence 1 : le robot doit avancer à au moins **0,4 m/s** ; exigence 2 : le motoréducteur doit être le plus **léger** possible. Les roues ont un diamètre de **20 cm**. Document 2 (motoréducteurs disponibles) : M1 : vitesse de sortie 30 tr/min, masse 250 g ; M2 : 45 tr/min, 300 g ; M3 : 60 tr/min, 420 g. Question : calcule la vitesse du robot obtenue avec chaque motoréducteur (v = N × π × d ÷ 60, avec N en tr/min et d en m ; prends π ≈ 3,14), puis choisis le motoréducteur qui respecte les deux exigences. Justifie.", corrige: "**Distance parcourue par tour de roue** : π × d = 3,14 × 0,20 = **0,628 m**.\n\n**Vitesses** (v = N × 0,628 ÷ 60) :\n- M1 : 30 × 0,628 ÷ 60 ≈ **0,31 m/s** → inférieure à 0,4 m/s : exigence 1 **non respectée** ;\n- M2 : 45 × 0,628 ÷ 60 ≈ **0,47 m/s** → exigence 1 respectée ;\n- M3 : 60 × 0,628 ÷ 60 ≈ **0,63 m/s** → exigence 1 respectée.\n\n**Choix** : M2 et M3 respectent l'exigence 1. Pour l'exigence 2, M2 (300 g) est **plus léger** que M3 (420 g). Je choisis donc le **motoréducteur M2** : c'est le plus léger de ceux qui respectent l'exigence 1 (M1, plus léger, est trop lent).\n\n> Méthode : vérifier d'abord l'exigence 1 pour éliminer, puis départager avec l'exigence 2 ; écrire les unités et convertir 20 cm en 0,20 m." },
        { type: "redaction", question: "**Sujet type brevet : le robot tondeuse (3/4).** Le fabricant annonce une autonomie d'au moins **1 h 15 min** pour une tonte normale. La batterie stocke 18 V × 2,5 Ah. 1) Calcule l'énergie stockée en Wh, puis l'autonomie théorique si le robot consomme en moyenne 30 W. 2) À l'aide d'un schéma décrit en texte, d'une liste de matériel et d'étapes, propose un protocole expérimental permettant de vérifier l'autonomie annoncée.", corrige: "1) **Énergie** : E = 18 × 2,5 = **45 Wh**. **Autonomie théorique** : t = E ÷ P = 45 ÷ 30 = **1,5 h**, soit 1 h 30 min, ce qui est supérieur à 1 h 15 min.\n\n2) **Protocole** :\n- **But** : vérifier que le robot fonctionne au moins 1 h 15 min (75 min) avec une batterie pleine.\n- **Matériel** : le robot et sa base, une pelouse délimitée par le fil périphérique, un chronomètre, une fiche de relevés.\n- **Schéma** (décrit) : la pelouse rectangulaire entourée du fil, la base de recharge sur un côté, le robot sur la pelouse ; légende « départ » et « chronomètre ».\n- **Étapes** :\n  1. Charger complètement la batterie (voyant de charge pleine).\n  2. Lancer la tonte et démarrer le chronomètre en même temps.\n  3. Ne pas intervenir ; noter l'heure à laquelle le robot retourne à sa base pour batterie faible.\n  4. Recommencer au moins 3 fois, dans les mêmes conditions (même hauteur d'herbe, herbe sèche), et calculer la moyenne.\n  5. Comparer la moyenne à 75 min et conclure.\n\n> Une réponse plus aboutie précise les conditions (herbe sèche, même pelouse) et prévoit plusieurs essais." },
        { type: "redaction", question: "**Sujet type brevet : le robot tondeuse (4/4).** Document 4 (comportement souhaité) :\n\n| Situation | Action |\n|---|---|\n| pluie = vrai | arrêter la lame, retourner à la base |\n| batterie < 20 (en %) | arrêter la lame, retourner à la base |\n| choc = vrai | reculer pendant 1 s, puis tourner de 120° |\n| sinon | lame en marche, avancer |\n\nLe début du programme est donné :\n~~~\nrépéter indéfiniment\n    si pluie = vrai alors\n        arrêter la lame\n        retourner à la base\n~~~\nQuestion : complète le programme en respectant les noms des variables (pluie, batterie, choc). Tu peux regrouper deux situations avec un opérateur logique.", corrige: "**Programme complet** :\n~~~\nrépéter indéfiniment\n    si pluie = vrai OU batterie < 20 alors\n        arrêter la lame\n        retourner à la base\n    sinon\n        si choc = vrai alors\n            reculer pendant 1 seconde\n            tourner de 120 degrés\n        sinon\n            mettre la lame en marche\n            avancer\n~~~\n(La version sans OU, avec un « si batterie < 20 » imbriqué dans le « sinon » du test de pluie, est également juste.)\n\n**Points vérifiés** :\n- **OU** et non ET : une seule des deux situations suffit pour rentrer ;\n- conditions **imbriquées** : on ne teste le choc que si le robot n'est pas en train de rentrer ;\n- noms des variables **identiques** au document ;\n- le cas « sinon » final (avancer, lame en marche) est bien présent." },
      ],
    },
    {
      id: "objet-environnement-utilisateur",
      titre: "L'objet dans son environnement : interacteurs, contraintes, normes et expérience de l'utilisateur",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## Les interacteurs d'un objet
Un objet technique n'est jamais isolé. Ses **interacteurs** sont tout ce avec quoi il est en relation pendant son utilisation :
- les **usagers** : l'utilisateur, mais aussi les personnes à proximité, le technicien de maintenance ;
- les **autres objets** : smartphone, box, base de recharge, serveur ;
- les **données** échangées : position GPS, niveau de batterie, commandes envoyées par une application ;
- les **éléments de l'environnement** : pluie, soleil, température, poussière, sol, bruit.

>! Exemple : trottinette en libre-service. Usagers : le conducteur, les piétons, l'agent qui recharge les batteries. Autres objets : le smartphone du conducteur, le serveur de l'opérateur, le réseau mobile. Données : position GPS, niveau de charge, paiement. Environnement : route, trottoir, pluie, nuit, froid.

On représente souvent ces relations par un **schéma** : l'objet au centre, les interacteurs autour, et sur chaque trait une phrase qui décrit la relation (« permettre au conducteur de se déplacer en ville », « résister à la pluie »).

## Contraintes et exigences
Chaque interacteur impose des **contraintes** que le concepteur doit prendre en compte :
| Domaine | Exemple d'exigence (critère + niveau) |
|---|---|
| **Sécurité** | freiner sur moins de 4 m à 20 km/h ; aucune pièce coupante accessible |
| **Environnement** (milieu extérieur) | fonctionner de −10 °C à 40 °C ; indice IP54 au minimum contre la poussière et la pluie |
| **Incidences environnementales** | contenir au moins 30 % de plastique recyclé ; pièces détachées disponibles 10 ans |
| **Ergonomie** | se plier en moins de 10 s ; poignée utilisable avec des gants |
| **Formes et fonctions** | tenir dans le coffre d'une voiture une fois pliée |
| **Qualité, fiabilité** | supporter 5 000 cycles de pliage sans casser |

Une exigence utile est **vérifiable** : elle donne un **critère** (ce qu'on mesure) et un **niveau** (la valeur à atteindre).

## Normes, marquage, labels et certifications
- Une **norme** est un document qui fixe des règles techniques communes (dimensions des prises électriques, sécurité des jouets, indices IP et IK). Elle permet que des objets de fabricants différents soient sûrs et compatibles.
- Le **marquage CE** est **obligatoire** pour de nombreux produits vendus dans l'Union européenne (jouets, appareils électriques, objets connectés) : le fabricant déclare que son produit respecte les exigences européennes de sécurité, de santé et de protection de l'environnement. Ce n'est **pas** un label de qualité.
- Un **label** est **volontaire** : un organisme l'attribue si le produit respecte un cahier des charges. Par exemple, l'**Écolabel européen** signale un produit à l'impact environnemental réduit.
- Une **certification** est la vérification, par un organisme **indépendant**, qu'un produit respecte une norme ou un référentiel (par exemple la marque NF).
- Certaines **étiquettes** sont imposées par la loi : étiquette énergie, indice de réparabilité ou de durabilité.

## Ergonomie et accessibilité
L'**ergonomie** consiste à adapter l'objet à l'être humain : taille et position des boutons, lisibilité de l'écran, masse, forme de la poignée, nombre d'étapes pour réaliser une tâche.

L'**accessibilité** permet à tous de l'utiliser : retour sonore ou vibration pour une personne malvoyante, signal lumineux pour une personne malentendante, commandes à une hauteur atteignable depuis un fauteuil roulant, textes simples.

## Décrire l'expérience de l'utilisateur
Pour savoir si un objet est facile et agréable à utiliser, on **observe** et on **interroge** des utilisateurs qui réalisent une tâche précise. On relève leur ressenti, les **difficultés**, les **erreurs** et le **temps** mis.

On passe ensuite du **langage naturel** (« je n'ai pas trouvé le bouton ») à des **représentations** plus précises : tableau de résultats, graphique, croquis annoté, algorithme des étapes d'utilisation.

>! Exemple résolu : 10 élèves doivent déverrouiller un vélo en libre-service avec l'application. 7 réussissent du premier coup ; les temps relevés ont une moyenne de 45 s, alors que l'objectif est de moins de 30 s. Taux de réussite : 7 ÷ 10 = **70 %**. Les remarques montrent que le code QR est mal placé : on propose de le placer sur le guidon et d'ajouter un message d'aide dans l'application, puis on refait le test.

> **À retenir** : les **interacteurs** sont les usagers, les autres objets, les données et les éléments de l'environnement. Chacun impose des **contraintes**, traduites en **exigences** vérifiables (critère + niveau) : sécurité, environnement, ergonomie, fiabilité... Une **norme** fixe des règles communes ; le **marquage CE** est obligatoire (ce n'est pas un label) ; un **label** est volontaire ; une **certification** est un contrôle indépendant. L'**expérience de l'utilisateur** se décrit par des observations (réussite, erreurs, temps, ressenti) puis par des tableaux, graphiques ou algorithmes.
`,
      exercices: [
        { type: "qcm", question: "Lequel de ces éléments n'est **pas** un interacteur d'un robot tondeuse, mais un de ses constituants internes ?", choix: ["La pelouse", "L'utilisateur qui programme les horaires", "La pluie", "Le moteur de coupe"], reponse: 3, explication: "Le **moteur de coupe** fait partie du robot (c'est un constituant de sa chaîne d'énergie). La pelouse et la pluie sont des éléments de l'environnement, l'utilisateur est un usager : ce sont des interacteurs." },
        { type: "vf", question: "Le marquage CE est un label de qualité attribué par une association de consommateurs après des tests comparatifs.", reponse: false, explication: "Le **marquage CE** est **obligatoire** pour de nombreux produits vendus dans l'Union européenne : le fabricant déclare que son produit respecte les exigences européennes (sécurité, santé, environnement). Ce n'est ni un label de qualité ni le résultat d'un test comparatif." },
        { type: "qcm", question: "On conçoit une télécommande pour des personnes âgées qui voient mal. Quelle modification améliore le plus son **ergonomie** ?", choix: ["Ajouter vingt nouvelles fonctions", "Des touches moins nombreuses, plus grandes et bien contrastées", "Un boîtier plus petit et plus léger avec de minuscules touches", "Une couleur à la mode"], reponse: 1, explication: "L'ergonomie adapte l'objet à ses utilisateurs : des touches **grandes**, **contrastées** et **peu nombreuses** sont plus faciles à voir et à utiliser. Ajouter des fonctions ou réduire la taille des touches complique l'usage." },
        { type: "qcm", question: "L'exigence « la sonnette sans fil doit fonctionner de −10 °C à 50 °C » est une contrainte liée :", choix: ["à l'esthétique", "au prix", "à l'environnement (milieu extérieur) de l'objet", "à la propriété intellectuelle"], reponse: 2, explication: "La température de l'air est un **élément de l'environnement** de la sonnette, installée dehors : c'est une contrainte d'environnement, avec un critère (la température) et un niveau (de −10 °C à 50 °C)." },
        { type: "vf", question: "« La trottinette doit être pratique » est une exigence bien formulée pour un cahier des charges.", reponse: false, explication: "Cette phrase n'est pas **vérifiable** : il manque un **critère** et un **niveau**. On écrira plutôt « se plier en moins de 10 s » ou « peser moins de 13 kg »." },
        { type: "saisie", question: "Lors d'un test d'utilisation, trois personnes mettent 40 s, 55 s et 31 s pour régler un thermostat connecté. Quel est le temps moyen, en secondes ? (nombre)", reponses: ["42", "42 s", "42 secondes"], explication: "(40 + 55 + 31) ÷ 3 = 126 ÷ 3 = **42 s**. On compare ensuite cette moyenne à l'objectif du cahier des charges." },
        { type: "qcm", question: "Quelle proposition décrit un **label** comme l'Écolabel européen ?", choix: ["Une démarche volontaire : un organisme l'attribue si le produit respecte un cahier des charges environnemental", "Une obligation pour tous les produits vendus en Europe", "Un brevet qui protège une invention", "Une loi qui interdit les produits polluants"], reponse: 0, explication: "Un **label** est **volontaire** : le fabricant le demande, et il n'est accordé que si le produit respecte le cahier des charges du label (ici, un impact environnemental réduit). C'est différent du marquage CE, obligatoire." },
        { type: "vf", question: "Prévoir un signal sonore en plus de l'affichage sur un distributeur de billets aide les personnes malvoyantes : c'est un choix d'accessibilité.", reponse: true, explication: "L'**accessibilité** permet à toutes les personnes d'utiliser l'objet. Doubler une information visuelle par une information sonore (ou une vibration) est une solution courante." },
        { type: "redaction", question: "**Sujet type brevet.** Document : « La poubelle de rue connectée compacte les déchets grâce à un moteur alimenté par un panneau photovoltaïque et une batterie. Quand elle est remplie à 80 %, elle envoie un message par radio au serveur de la mairie, qui organise la tournée des agents de collecte. Les passants ouvrent la trappe avec une poignée placée à 1,40 m du sol. Elle est installée dans des rues fréquentées. » Lors d'une observation de 20 passants, 6 ont cherché plus de 5 s comment l'ouvrir ; les 2 personnes en fauteuil roulant observées n'ont pas pu atteindre la poignée. 1) Liste au moins six interacteurs de la poubelle en les classant (usagers, autres objets, données, environnement). 2) Formule deux exigences liées à l'environnement de la poubelle et une exigence d'ergonomie, chacune avec un critère et un niveau. 3) Décris l'expérience des utilisateurs à partir des résultats (calcule un pourcentage) et propose deux améliorations. 4) Explique ce qu'indique le marquage CE présent sur la poubelle.", corrige: "1) **Interacteurs** :\n- **usagers** : les passants, les personnes en fauteuil roulant, les agents de collecte, le technicien de maintenance ;\n- **autres objets** : le serveur de la mairie, l'antenne radio qui reçoit le message, le camion de collecte ;\n- **données** : le niveau de remplissage, le message d'alerte, la position de la poubelle ;\n- **environnement** : le soleil (qui alimente le panneau), la pluie, le froid et la chaleur, la poussière, le trottoir, les animaux.\n\n2) **Exigences** (exemples) :\n- résister à la pluie et à la poussière : indice de protection **IP55 au minimum** ;\n- fonctionner par des températures de **−10 °C à 45 °C** ;\n- ergonomie : poignée placée à **environ 1 m du sol** au maximum et trappe qui s'ouvre avec un effort faible, d'une seule main.\n\n3) **Expérience des utilisateurs** : 6 passants sur 20, soit 6 ÷ 20 = **30 %**, ont hésité plus de 5 s : la façon d'ouvrir n'est pas assez évidente. Les personnes en fauteuil roulant ne peuvent pas l'utiliser : la poubelle n'est pas **accessible**. **Améliorations** : abaisser la poignée (vers 1 m) ou ajouter une pédale ; ajouter un pictogramme ou une flèche qui montre comment ouvrir. On refait ensuite le test pour vérifier l'amélioration.\n\n4) **Marquage CE** : le fabricant déclare que la poubelle respecte les exigences européennes de **sécurité** (électricité, moteur), de santé et d'environnement ; il est **obligatoire** pour la vendre dans l'Union européenne. Ce n'est pas un label de qualité.\n\n> Barème indicatif : interacteurs variés et bien classés (1 pt), exigences avec critère et niveau (1 pt), pourcentage et analyse de l'expérience utilisateur avec améliorations (1,5 pt), marquage CE (0,5 pt)." },
      ],
    },
    {
      id: "bilan-carbone-objet",
      titre: "Chiffrer le bilan carbone d'un objet sur son cycle de vie",
      theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
      cours: `
## De quoi parle-t-on ?
Les **gaz à effet de serre** (dioxyde de carbone CO₂, méthane, protoxyde d'azote...) réchauffent le climat. Pour les additionner, on convertit chacun en **équivalent CO₂** : l'unité est le **kilogramme d'équivalent CO₂**, noté **kg CO₂e**.

Le **bilan carbone** d'un objet est la **somme** des émissions de gaz à effet de serre à **toutes les étapes de son cycle de vie** : extraction des matières et fabrication, transport, utilisation, fin de vie. C'est l'un des indicateurs de l'analyse du cycle de vie (ACV) : il ne mesure que l'effet sur le climat, pas la pollution de l'eau ou l'épuisement des ressources.

## La formule de base
Pour chaque poste, on multiplie une **quantité** par un **facteur d'émission** :

**émissions (kg CO₂e) = quantité × facteur d'émission**

Le facteur d'émission indique combien de kg CO₂e sont émis **par unité** : par kg de matériau, par kWh d'électricité, par tonne transportée sur 1 km. En France, l'ADEME publie ces facteurs dans sa **Base Empreinte**. Pour s'entraîner, on utilise des valeurs **simplifiées** :

| Poste | Unité de la quantité | Facteur d'émission (valeurs simplifiées d'entraînement) |
|---|---|---|
| Aluminium produit à partir du minerai | kg | 8 kg CO₂e par kg |
| Aluminium recyclé | kg | 0,5 kg CO₂e par kg |
| Acier | kg | 2 kg CO₂e par kg |
| Plastique (ABS, PLA...) | kg | 3 kg CO₂e par kg |
| Électricité consommée en France | kWh | 0,06 kg CO₂e par kWh |
| Transport par camion | t·km | 0,1 kg CO₂e par t·km |
| Transport par bateau | t·km | 0,01 kg CO₂e par t·km |
| Transport par avion | t·km | 1 kg CO₂e par t·km |

Ces valeurs arrondies donnent les bons **ordres de grandeur** pour s'entraîner. Les facteurs de la Base Empreinte sont plus détaillés (type exact d'aluminium, d'acier ou de plastique, pays, année, moyen de transport) et ils sont **mis à jour régulièrement** : pour un vrai bilan, on les relève dans la base en notant la **version** utilisée, afin que le calcul puisse être vérifié et refait.

Pour le transport, la quantité s'exprime en **tonnes-kilomètres** (t·km) : **masse transportée (en t) × distance (en km)**. Attention : 1 t = 1 000 kg, donc 12 kg = 0,012 t.

## La méthode en cinq étapes
1. **Lister** les postes d'émission, étape par étape du cycle de vie.
2. **Relever** la quantité de chaque poste (masse, kWh, t·km), avec son unité.
3. **Calculer** les émissions de chaque poste (quantité × facteur).
4. **Additionner** pour obtenir le bilan total.
5. **Interpréter** : calculer la **part** de chaque étape en % (émissions de l'étape ÷ total), repérer le poste qui pèse le plus et proposer des **actions** sur ce poste.

Pour comparer deux objets, il faut qu'ils rendent le **même service** pendant la **même durée** : on ramène souvent le bilan à **une année d'utilisation** (total ÷ nombre d'années).

>! Exemple résolu : trottinette électrique de 12 kg utilisée 5 ans (valeurs fictives).
>! | Étape | Calcul | Émissions |
>! |---|---|---|
>! | Fabrication : cadre en aluminium (6 kg) | 6 × 8 | 48 kg CO₂e |
>! | Fabrication : batterie (donnée du fabricant) | | 30 kg CO₂e |
>! | Fabrication : moteur, électronique, pneus (donnée) | | 22 kg CO₂e |
>! | Transport : 10 000 km en bateau | 0,012 × 10 000 × 0,01 | 1,2 kg CO₂e |
>! | Transport : 500 km en camion | 0,012 × 500 × 0,1 | 0,6 kg CO₂e |
>! | Utilisation : 50 kWh par an pendant 5 ans | 50 × 5 × 0,06 | 15 kg CO₂e |
>! | Fin de vie (donnée) | | 2 kg CO₂e |
>! | **Total** | 100 + 1,8 + 15 + 2 | **118,8 kg CO₂e** |
>! Part de la fabrication : 100 ÷ 118,8 ≈ 0,84, soit environ **84 %**. Par année d'utilisation : 118,8 ÷ 5 ≈ **23,8 kg CO₂e par an**.
>! Actions : un cadre en aluminium **recyclé** émettrait 6 × 0,5 = 3 kg CO₂e au lieu de 48, soit 45 kg CO₂e de moins. Garder la trottinette **8 ans** au lieu de 5 : total = 100 + 1,8 + 8 × 50 × 0,06 + 2 = 127,8 kg CO₂e, soit 127,8 ÷ 8 ≈ **16 kg CO₂e par an**. Faire durer l'objet est très efficace.

## Ce que montrent les bilans réels
- Pour la plupart des objets électroniques, c'est la **fabrication** qui pèse le plus. Pour le numérique en France, la fabrication des équipements représente environ **60 %** de l'empreinte carbone, et l'utilisation environ 40 % (étude ADEME-Arcep publiée en 2025, données 2022, qui compte aussi les centres de données situés à l'étranger ; la fabrication y reste le premier poste).
- Pour un appareil qui consomme beaucoup pendant des années (réfrigérateur, radiateur), l'**utilisation** peut peser davantage, surtout dans un pays où l'électricité est produite avec du charbon ou du gaz. En France, l'électricité est **peu carbonée** (nucléaire, hydraulique, éolien, solaire).
- Le **transport par avion** émet environ 100 fois plus par t·km que le bateau (valeurs du tableau : 1 contre 0,01).

## Erreurs fréquentes
- Oublier de convertir les kg en **tonnes** pour le transport.
- Confondre la **puissance** (W, kW) et l'**énergie** (Wh, kWh) : le facteur de l'électricité s'applique à des **kWh**.
- Oublier de multiplier la consommation annuelle par le **nombre d'années**.
- Comparer deux objets qui ne rendent pas le même service ou pas pendant la même durée.

> **À retenir** : le **bilan carbone** additionne les émissions de gaz à effet de serre sur **tout le cycle de vie**, en **kg CO₂e**. Pour chaque poste : **émissions = quantité × facteur d'émission** (par kg, par kWh, par t·km). Transport : **t·km = masse en t × distance en km**. Part d'une étape = émissions de l'étape ÷ total. Pour comparer, ramener à **une année d'utilisation**. Pour les objets électroniques, la **fabrication** domine : les **faire durer** et choisir des matériaux **recyclés** sont les leviers les plus efficaces.
`,
      exercices: [
        { type: "qcm", question: "Que signifie l'unité **kg CO₂e** utilisée dans un bilan carbone ?", choix: ["Kilogramme de charbon extrait", "Kilogramme d'équivalent CO₂", "Kilowatt-heure d'électricité consommée", "Kilogramme de déchets électroniques"], reponse: 1, explication: "Chaque gaz à effet de serre (méthane, protoxyde d'azote...) est converti en la masse de CO₂ qui aurait le même effet sur le climat : on peut alors tout **additionner** en **kg CO₂e**." },
        { type: "saisie", question: "Le boîtier d'un objet contient 2 kg de plastique. Avec un facteur d'émission de 3 kg CO₂e par kg de plastique, combien de kg CO₂e émet sa fabrication ? (nombre)", reponses: ["6", "6 kg", "6 kg CO2e", "6 kg CO₂e", "6 kg CO2", "6 kgCO2e", "6 kgCO2"], explication: "Émissions = quantité × facteur = 2 × 3 = **6 kg CO₂e**." },
        { type: "saisie", question: "Un camion transporte 500 kg de matériel sur 400 km. Avec un facteur de 0,1 kg CO₂e par t·km, combien de kg CO₂e ce transport émet-il ? (nombre)", reponses: ["20", "20 kg", "20 kg CO2e", "20 kg CO₂e", "20 kg CO2", "20 kgCO2e", "20 kgCO2"], explication: "500 kg = 0,5 t. Quantité : 0,5 × 400 = 200 t·km. Émissions : 200 × 0,1 = **20 kg CO₂e**. Ne pas oublier de convertir les kg en tonnes." },
        { type: "vf", question: "D'après le tableau du cours, transporter une même charge sur la même distance émet moins de gaz à effet de serre en bateau qu'en camion.", reponse: true, explication: "Bateau : 0,01 kg CO₂e par t·km ; camion : 0,1 kg CO₂e par t·km. Le bateau émet **10 fois moins** pour la même charge et la même distance. L'avion (1 kg CO₂e par t·km) émet 10 fois plus que le camion." },
        { type: "saisie", question: "Un réfrigérateur consomme 150 kWh par an pendant 10 ans. Avec un facteur de 0,06 kg CO₂e par kWh, quelles sont les émissions liées à son utilisation, en kg CO₂e ? (nombre)", reponses: ["90", "90 kg", "90 kg CO2e", "90 kg CO₂e", "90 kg CO2", "90 kgCO2e", "90 kgCO2"], explication: "Énergie consommée : 150 × 10 = 1 500 kWh. Émissions : 1 500 × 0,06 = **90 kg CO₂e**. Il ne faut pas oublier de multiplier par le nombre d'années." },
        { type: "saisie", question: "Le bilan carbone d'une enceinte connectée est de 75 kg CO₂e, dont 60 kg CO₂e pour la fabrication. Quelle part du bilan représente la fabrication, en % ? (nombre)", reponses: ["80", "80 %"], explication: "Part = 60 ÷ 75 = 0,8, soit **80 %**. La fabrication est le poste principal : c'est sur elle (durée de vie, matériaux) qu'il faut agir en priorité." },
        { type: "qcm", question: "Bilan d'un vélo à assistance électrique (valeurs fictives) : fabrication 130 kg CO₂e, transport 8 kg CO₂e, utilisation 25 kg CO₂e, fin de vie 4 kg CO₂e. Quelle action réduirait le plus son bilan par année d'utilisation ?", choix: ["Le transporter en camion plutôt qu'en bateau", "Le garder plus longtemps en le réparant et en changeant la batterie seulement quand elle est usée", "Le recharger la nuit plutôt que le jour", "Supprimer l'emballage du manuel"], reponse: 1, explication: "La **fabrication** (130 sur 167 kg CO₂e, soit environ 78 %) domine. Faire durer le vélo répartit ces émissions sur plus d'années. Le camion émet plus que le bateau ; l'heure de recharge et l'emballage du manuel ne changent presque rien." },
        { type: "saisie", question: "Un smartphone émet 60 kg CO₂e pour sa fabrication et 2 kg CO₂e par an d'utilisation. On le garde 4 ans. Quel est son bilan par année d'utilisation, en kg CO₂e par an ? (nombre)", reponses: ["17", "17 kg", "17 kg CO2e", "17 kg CO₂e", "17 kg CO2e par an", "17 kg CO₂e par an", "17 kg par an", "17 kg CO2", "17 kg CO2 par an", "17 kgCO2e", "17 kgCO2", "17 kg CO2e/an", "17 kg CO2/an", "17 kgCO2e/an"], explication: "Total sur 4 ans : 60 + 2 × 4 = 68 kg CO₂e. Par an : 68 ÷ 4 = **17 kg CO₂e**. Gardé seulement 2 ans, il aurait coûté (60 + 2 × 2) ÷ 2 = 32 kg CO₂e par an, presque deux fois plus." },
        { type: "vf", question: "Pour comparer le bilan carbone de deux objets, il suffit de comparer leurs totaux, même s'ils ne servent pas le même nombre d'années.", reponse: false, explication: "Il faut comparer des objets qui rendent le **même service** pendant la **même durée**. Un objet au total plus élevé mais qui dure deux fois plus longtemps peut être meilleur : on ramène donc le bilan à **une année d'utilisation**." },
        { type: "redaction", question: "**Sujet type brevet.** Une famille hésite : remplacer son smartphone, dont la batterie est usée, ou le faire réparer. Données (valeurs fictives) : fabrication d'un smartphone neuf : 50 kg CO₂e ; transport du neuf par avion : 0,3 kg (avec l'emballage) sur 10 000 km, facteur 1 kg CO₂e par t·km ; utilisation : 4 kWh par an, facteur 0,06 kg CO₂e par kWh ; fin de vie : 0,5 kg CO₂e ; fabrication d'une batterie de remplacement : 4 kg CO₂e. 1) Calcule le bilan carbone d'un smartphone neuf utilisé 3 ans, poste par poste. 2) Calcule la part de la fabrication et conclus. 3) Compare les émissions des 2 prochaines années dans les deux cas : A) changer la batterie de l'ancien téléphone et le garder 2 ans ; B) acheter un téléphone neuf et l'utiliser 2 ans (on ne compte pas la fin de vie). 4) Rédige un argumentaire court pour conseiller la famille.", corrige: "1) **Bilan du neuf sur 3 ans** :\n- fabrication : **50 kg CO₂e** ;\n- transport : 0,3 kg = 0,0003 t ; 0,0003 × 10 000 = 3 t·km ; 3 × 1 = **3 kg CO₂e** ;\n- utilisation : 4 × 3 = 12 kWh ; 12 × 0,06 = **0,72 kg CO₂e** ;\n- fin de vie : **0,5 kg CO₂e** ;\n- **total** : 50 + 3 + 0,72 + 0,5 = **54,22 kg CO₂e** (environ 18 kg CO₂e par an : 54,22 ÷ 3 ≈ 18,1).\n\n2) **Part de la fabrication** : 50 ÷ 54,22 ≈ 0,92, soit environ **92 %**. Presque tout le bilan vient de la fabrication : l'utilisation (recharge) pèse très peu. Le levier principal est donc de **faire durer** le téléphone.\n\n3) **Comparaison sur 2 ans** :\n- A (réparation) : batterie 4 + utilisation 4 × 2 × 0,06 = 0,48 → **4,48 kg CO₂e** ;\n- B (neuf) : fabrication 50 + transport 3 + utilisation 0,48 → **53,48 kg CO₂e**.\nB émet environ **12 fois plus** que A (53,48 ÷ 4,48 ≈ 11,9).\n\n4) **Argumentaire** : Je conseille à la famille de faire **réparer** le téléphone. D'après les calculs, changer la batterie émet environ 4,5 kg CO₂e sur deux ans, contre plus de 53 kg CO₂e pour un téléphone neuf, car la fabrication représente plus de 90 % du bilan d'un smartphone. La réparation coûte aussi en général moins cher et fait travailler un réparateur. Il faut cependant vérifier que le téléphone reçoit encore les mises à jour de sécurité ; sinon, un téléphone reconditionné serait une bonne solution.\n\n> Barème indicatif : calculs posés avec unités et conversion kg → t (2 pts), part de la fabrication interprétée (1 pt), comparaison A/B juste (1 pt), argumentaire appuyé sur les chiffres avec une nuance (1 pt)." },
      ],
    },
    {
      id: "notice-technique",
      titre: "Lire et rédiger une notice technique",
      theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
      cours: `
## Les documents qui accompagnent un objet
Un objet est livré avec des **documents techniques** qui permettent de le monter, de l'utiliser en sécurité et de l'entretenir :
| Document | Ce qu'il contient | Exemple |
|---|---|---|
| **Fiche technique** | les **caractéristiques** de l'objet | tension 5 V, puissance 3 W, masse 85 g, indice IP54 |
| **Notice de montage** | les **étapes** pour assembler l'objet | meuble en kit, robot à construire |
| **Notice d'utilisation** (mode d'emploi) | comment **mettre en service**, utiliser, régler l'objet | lampe, imprimante, montre connectée |
| **Notice de maintenance** | l'**entretien**, le **dépannage**, le remplacement des pièces | changer un filtre, une batterie |

La fiche technique **décrit** l'objet ; une notice explique **comment faire**.

En France, le **mode d'emploi** d'un produit vendu doit être rédigé **en français** (loi du 4 août 1994 relative à l'emploi de la langue française). Une notice claire améliore la **sécurité**, évite les pannes et facilite la **réparation**.

## Ce que contient une bonne notice
1. L'**identification** : nom de l'objet, référence, fabricant.
2. Les **consignes de sécurité**, avec des **pictogrammes**.
3. La **nomenclature** : la liste des pièces fournies, avec pour chacune un **repère** (numéro), une **quantité** et une **désignation**.
4. Les **outils** nécessaires.
5. Les **étapes** numérotées, illustrées par un **schéma** ou une **vue éclatée** (dessin où les pièces sont écartées les unes des autres, dans l'ordre du montage) qui reprend les repères.
6. L'**utilisation**, l'**entretien**, un **tableau de dépannage**.
7. Les **caractéristiques techniques**, la **garantie** et la **fin de vie** (où rapporter l'objet).

## Les règles de rédaction
- **Une seule action par étape**, dans l'ordre où on la fait.
- Commencer par un **verbe d'action** à l'infinitif : « Visser », « Brancher », « Appuyer ».
- Citer les pièces par leur **repère** et leur nom, avec la **quantité** et l'**outil**.
- Placer un **avertissement avant** l'étape dangereuse, pas après.
- Des phrases **courtes**, un vocabulaire **précis**, sans « truc » ni « ça ».
- **Tester** la notice : la donner à une personne qui ne connaît pas l'objet et l'observer. Là où elle hésite, la notice doit être corrigée.

>! Exemple : la même étape mal puis bien rédigée.
>! Mal rédigée : « Ensuite on met les trucs dans les trous et on serre, mais attention à ne pas trop forcer sinon ça casse. »
>! Bien rédigée : « 3. **Attention** : ne pas trop serrer, le bois risque de se fendre. Visser les 2 équerres (repère 2) sous la planche (repère 1) avec les 4 vis (repère 3), à l'aide d'un tournevis cruciforme. »

>! Exemple de nomenclature (étagère murale en kit) :
>! | Repère | Quantité | Désignation |
>! |---|---|---|
>! | 1 | 1 | planche en pin 60 × 20 cm |
>! | 2 | 2 | équerre en acier |
>! | 3 | 4 | vis à bois 4 × 20 mm |
>! | 4 | 2 | vis 5 × 50 mm avec cheville pour le mur |

## Les pictogrammes de sécurité
Une **norme internationale** (ISO 7010) fixe des formes et des couleurs que tout le monde peut comprendre, quelle que soit sa langue :
| Forme et couleur | Signification | Exemple |
|---|---|---|
| **Rond rouge barré** | **interdiction** | ne pas jeter au feu, ne pas toucher |
| **Rond bleu**, dessin blanc | **obligation** | porter des lunettes, lire la notice |
| **Triangle jaune** bordé de noir | **avertissement** : danger | risque électrique, surface chaude |
| **Rectangle vert** | **secours**, situation sûre | sortie de secours, premiers secours |

La **poubelle barrée** sur un appareil électrique ou électronique signifie qu'il ne faut **pas le jeter avec les ordures ménagères** : on le rapporte en magasin ou en déchetterie pour qu'il soit recyclé.

## Le tableau de dépannage
Il aide l'utilisateur à résoudre seul les problèmes courants, en partant de ce qu'il **constate** :
| Problème constaté | Cause possible | Solution |
|---|---|---|
| La lampe ne s'allume pas | batterie déchargée | recharger la batterie pendant 3 h |
| Le voyant de charge ne s'allume pas | câble mal branché ou abîmé | rebrancher le câble ou le remplacer |
| La lampe s'éteint au bout de quelques minutes | batterie usée | remplacer la batterie (voir la notice de maintenance) |

## La garantie
Pour un objet neuf acheté à un vendeur professionnel, la **garantie légale de conformité** dure **2 ans** en France (Code de la consommation) : si l'objet présente un **défaut** (par exemple une panne qui n'est due ni à une mauvaise utilisation ni à un accident) ou ne correspond pas à ce qui était annoncé, le vendeur doit le **réparer ou le remplacer gratuitement**, au choix de l'acheteur ; si c'est impossible, il le rembourse en tout ou en partie. Elle est **obligatoire** et gratuite ; la **garantie commerciale** proposée en plus par certains fabricants est facultative. La notice indique comment faire valoir les garanties.

> **À retenir** : la **fiche technique** décrit l'objet (caractéristiques) ; la **notice** explique comment le monter, l'utiliser, l'entretenir. Une notice contient : identification, **sécurité**, **nomenclature** (repère, quantité, désignation), outils, **étapes numérotées** illustrées, dépannage, fin de vie. Rédaction : **une action par étape**, **verbe d'action**, repères, avertissement **avant** l'étape dangereuse, puis **tester** la notice. Pictogrammes : rond rouge barré = **interdiction**, rond bleu = **obligation**, triangle jaune = **danger**, rectangle vert = **secours**.
`,
      exercices: [
        { type: "qcm", question: "Quelle information trouve-t-on dans la **fiche technique** d'une lampe de vélo, plutôt que dans sa notice ?", choix: ["« Appuyer 2 secondes sur le bouton pour allumer »", "« Ne pas regarder le faisceau en face »", "« Brancher le câble USB pour recharger »", "« Puissance : 3 W ; batterie : 3,7 V, 4 Ah ; masse : 85 g »"], reponse: 3, explication: "La **fiche technique** donne les **caractéristiques** (puissance, batterie, masse). Les trois autres phrases expliquent **comment faire** ou donnent une consigne de sécurité : elles appartiennent à la notice." },
        { type: "qcm", question: "Sur la notice d'une perceuse, un pictogramme est un **rond bleu** avec des lunettes dessinées en blanc. Que signifie-t-il ?", choix: ["Il est interdit de porter des lunettes", "Le port de lunettes de protection est obligatoire", "Danger : risque de projection", "Sortie de secours"], reponse: 1, explication: "Le **rond bleu** indique une **obligation** : ici, porter des lunettes de protection. L'interdiction est un rond rouge barré, le danger un triangle jaune, le secours un rectangle vert." },
        { type: "vf", question: "Un triangle jaune bordé de noir sur une notice indique une interdiction.", reponse: false, explication: "Le **triangle jaune** est un **avertissement** : il signale un **danger** (risque électrique, surface chaude...). L'interdiction est représentée par un **rond rouge barré**." },
        { type: "qcm", question: "Que signifie le pictogramme de la **poubelle barrée** sur la notice d'un objet électronique ?", choix: ["L'objet ne doit pas être jeté avec les ordures ménagères : il faut le rapporter en magasin ou en déchetterie", "L'objet est fabriqué en matériaux recyclés", "L'objet ne produit aucun déchet", "L'objet doit être jeté dans la poubelle jaune"], reponse: 0, explication: "Les appareils électriques et électroniques usagés contiennent des matériaux à récupérer (métaux) et parfois des substances dangereuses : ils doivent être **collectés à part** pour être dépollués et recyclés." },
        { type: "saisie", question: "En France, combien d'années dure la garantie légale de conformité pour un objet neuf acheté à un vendeur professionnel ? (nombre)", reponses: ["2", "2 ans", "deux", "deux ans", "24 mois"], explication: "La **garantie légale de conformité** dure **2 ans** pour un objet neuf : le vendeur doit réparer ou remplacer gratuitement un objet qui présente un défaut (panne non due à une mauvaise utilisation) ou ne correspond pas à ce qui était annoncé." },
        { type: "qcm", question: "Quelle étape de notice est la mieux rédigée ?", choix: ["« Après, il faut mettre la batterie et faire attention au sens. »", "« Mettre la batterie, fermer le couvercle, allumer et vérifier que tout marche bien. »", "« 2. Insérer la batterie (repère 4) dans son logement, le signe + vers le haut. »", "« La batterie, on la met, normalement ça rentre tout seul. »"], reponse: 2, explication: "Cette étape est **numérotée**, commence par un **verbe d'action** à l'infinitif, contient **une seule action**, cite la pièce par son **repère** et précise le sens. La proposition « Mettre la batterie, fermer le couvercle... » enchaîne quatre actions dans la même étape." },
        { type: "qcm", question: "Dans une notice de montage, où faut-il placer l'avertissement « Débrancher l'appareil avant d'ouvrir le boîtier » ?", choix: ["À la fin de la notice", "Juste avant l'étape où l'on ouvre le boîtier (et dans les consignes de sécurité)", "Juste après l'étape où l'on ouvre le boîtier", "Nulle part, c'est évident"], reponse: 1, explication: "L'avertissement doit être lu **avant** de faire l'action dangereuse. Placé après, il arrive trop tard. On le rappelle aussi dans les consignes de sécurité au début de la notice." },
        { type: "saisie", question: "Une étagère en kit comporte 3 tablettes. Chaque tablette se fixe avec 4 vis (repère 5), et il faut 2 vis de plus (même repère) pour fixer l'étagère au mur. Quelle quantité faut-il indiquer pour le repère 5 dans la nomenclature ? (nombre)", reponses: ["14", "14 vis"], explication: "3 × 4 = 12 vis pour les tablettes, plus 2 pour le mur : 12 + 2 = **14 vis**. Une erreur de quantité dans la nomenclature bloque le montage." },
        { type: "vf", question: "En France, le mode d'emploi d'un produit vendu doit être rédigé en français.", reponse: true, explication: "La loi du 4 août 1994 relative à l'emploi de la langue française impose le français pour le mode d'emploi des produits vendus en France. D'autres langues peuvent s'y ajouter." },
        { type: "redaction", question: "**Sujet type brevet.** Fiche technique d'une lampe avant de vélo : batterie lithium-ion 3,7 V, 4 Ah, rechargeable par câble USB (fourni), durée de recharge 3 h ; voyant de charge rouge pendant la charge, vert quand la batterie est pleine ; un bouton : un appui court allume ou change de mode (fort, faible, clignotant), un appui de 2 s éteint ; indice IPX4 (protégée contre les projections d'eau, mais pas contre l'immersion) ; fixation par une sangle en caoutchouc. 1) Rédige la partie « Utilisation » de la notice : recharge, fixation et allumage, en étapes numérotées. 2) Rédige trois consignes de sécurité ou de bon usage et indique, pour chacune, la forme et la couleur du pictogramme qui l'accompagnerait. 3) Rédige un tableau de dépannage de trois lignes (problème, cause possible, solution). 4) Explique comment vérifier que ta notice est compréhensible.", corrige: "1) **Utilisation** :\n1. Brancher le câble USB (fourni) sur la lampe et sur un chargeur USB : le voyant devient **rouge**.\n2. Attendre environ 3 h, jusqu'à ce que le voyant devienne **vert**, puis débrancher le câble.\n3. Placer la lampe sur le guidon, faisceau vers l'avant.\n4. Passer la sangle en caoutchouc autour du guidon et l'accrocher au crochet de la lampe.\n5. Appuyer brièvement sur le bouton pour allumer (mode fort).\n6. Appuyer brièvement à nouveau pour passer au mode faible, puis au mode clignotant.\n7. Maintenir le bouton appuyé 2 secondes pour éteindre.\n\n2) **Consignes et pictogrammes** :\n- « Ne pas plonger la lampe dans l'eau » (indice IPX4 : projections seulement) : **rond rouge barré** (interdiction) ;\n- « Ne pas regarder directement le faisceau » : **triangle jaune** bordé de noir (avertissement, danger pour les yeux) ;\n- « Lire la notice avant la première utilisation » : **rond bleu** (obligation).\nOn peut aussi citer : ne pas jeter la lampe à la poubelle (poubelle barrée, batterie à rapporter en point de collecte) ; ne pas recharger une batterie abîmée ou gonflée.\n\n3) **Dépannage** :\n| Problème constaté | Cause possible | Solution |\n|---|---|---|\n| La lampe ne s'allume pas | batterie déchargée | recharger 3 h jusqu'au voyant vert |\n| Le voyant reste éteint pendant la recharge | câble ou chargeur défectueux, mal branché | rebrancher, essayer un autre câble ou chargeur |\n| La lampe glisse sur le guidon | sangle mal accrochée ou détendue | raccrocher la sangle en la tendant davantage |\n\n4) **Vérification** : donner la lampe et la notice à une personne qui ne connaît pas l'objet (un autre élève), sans l'aider ; observer si elle réussit chaque étape, noter où elle hésite ou se trompe et le temps mis ; corriger les étapes qui posent problème, puis refaire le test.\n\n> Attendus : étapes numérotées commençant par un verbe d'action, une action par étape ; pictogrammes correctement associés (forme et couleur) ; tableau de dépannage cohérent avec la fiche technique ; test de la notice par un utilisateur." },
      ],
    },
    {
      id: "sujet-brevet-complet-abri-velos",
      titre: "Sujet complet type brevet : l'abri à vélos solaire et connecté",
      theme: "Préparer le brevet : l'épreuve de sciences",
      cours: `
## S'entraîner sur un sujet complet
Ce chapitre est un **sujet complet** de technologie, construit comme au brevet : un objet réel, plusieurs **documents**, une dizaine de questions qui couvrent tout le programme (chaînes d'énergie et d'information, calculs, programme, communication, développement durable). Les questions sont notées sur **9 points**, et **1 point** récompense la maîtrise de la langue : **10 points** en tout, à traiter en **30 minutes** environ.

Les documents sont les mêmes pour toutes les questions : lis-les une fois en entier, puis reviens-y pour chaque question (« Relire le texte »). Le format de l'épreuve et les verbes des consignes sont expliqués dans le chapitre « Réussir la partie technologie de l'épreuve de sciences du brevet ».

## Gérer ses 30 minutes
| Moment | Durée conseillée | Ce que tu fais |
|---|---|---|
| Lecture du sujet | 3 min | repérer l'objet, les exigences, le rôle de chaque document |
| Questions courtes (identifier, citer) | 5 min | réponses brèves, vocabulaire précis |
| Calculs | 10 min | formule, valeurs, résultat avec unité, phrase de conclusion |
| Programme, schéma bloc | 6 min | noms de variables exacts, ordre des fonctions |
| Argumentation | 4 min | idée, données du document, nuance, conclusion |
| Relecture | 2 min | unités, orthographe, numéros des questions |

## Relier chaque question au bon document
Avant de répondre, demande-toi : **quel document contient les données utiles ?** Souligne-les et note leur **unité**. Une même donnée sert souvent à plusieurs questions : la tension de la batterie sert à calculer l'énergie stockée, puis l'autonomie.

## Méthode : faire le bilan d'énergie d'un objet autonome
Beaucoup de sujets portent sur un objet alimenté par des panneaux photovoltaïques et une batterie. Méthode :
1. **Besoin** : pour chaque appareil, énergie consommée par jour = puissance (W) × durée d'utilisation (h). Ne pas oublier les appareils qui fonctionnent **en permanence** (24 h sur 24).
2. **Production** : énergie produite par les panneaux chaque jour (donnée du document), dans le cas le plus **défavorable** (l'hiver).
3. **Stockage** : énergie de la batterie = tension (V) × capacité (Ah), puis la part **réellement utilisable** si le document la précise.
4. **Comparer** et conclure : la production couvre-t-elle le besoin ? Sinon, combien de **jours entiers** la batterie peut-elle compenser le manque ?

>! Exemple résolu : une borne d'information solaire possède un écran de 10 W allumé 12 h par jour et une carte électronique de 2 W qui fonctionne en permanence. Besoin : 10 × 12 + 2 × 24 = 120 + 48 = **168 Wh par jour**. Sa batterie de 12 V et 40 Ah stocke 12 × 40 = 480 Wh, dont 80 % utilisables : 0,8 × 480 = **384 Wh**. Par temps très couvert (production presque nulle), elle tient 384 ÷ 168 ≈ 2,3, soit **2 jours entiers** : on arrondit **à l'unité inférieure**, car le troisième jour ne serait pas terminé.

## Erreurs fréquentes
- Confondre **puissance** (W) et **énergie** (Wh) : une énergie = puissance × durée.
- Oublier un appareil, surtout l'électronique qui consomme jour et nuit.
- Arrondir un nombre de jours **au-dessus** : 2,3 jours ne font pas 3 jours de fonctionnement.
- Répondre sans **comparer à l'exigence** : terminer par « l'exigence est respectée » ou « n'est pas respectée ».
- Dans l'argumentation, ne donner que des avantages : il faut **nuancer**.

> **À retenir** : sur un sujet complet, **lis tout** (3 min), relie chaque question à son **document**, garde du temps pour les calculs et la relecture. Bilan d'énergie : **besoin** (W × h, sans oublier le permanent) → **production** (cas le plus défavorable) → **stockage** (V × Ah, part utilisable) → comparaison, en arrondissant les jours **à l'unité inférieure**. Termine chaque réponse par une **conclusion** sur l'exigence.
`,
      textes: {
        abri: `**Sujet : l'abri à vélos solaire et connecté** (données fictives)

**Document 1 : présentation.** La commune installe devant le collège un abri fermé de **12 places** pour les vélos, dont les vélos à assistance électrique (VAE). Son toit est couvert de panneaux photovoltaïques. Un **régulateur de charge** envoie l'énergie produite vers une **batterie** lithium de **48 V et 100 Ah**. Pour ne pas abîmer la batterie, on n'utilise que **80 %** de son énergie. L'abri comprend :
- 6 prises pour recharger les batteries des VAE ;
- un éclairage à DEL de **20 W**, allumé par un **relais** commandé par la carte électronique quand le **détecteur de présence** repère quelqu'un et que le **capteur de luminosité** indique qu'il fait sombre (en moyenne **5 h par jour** en hiver) ;
- un **lecteur de badges RFID** et une **gâche électrique** qui verrouille la porte ; à l'intérieur, un **bouton de sortie** ;
- une **carte électronique** (microcontrôleur), un **écran** qui affiche le nombre de places libres et un **module radio** : l'ensemble consomme **5 W en permanence**.

**Document 2 : extrait du cahier des charges.**
| Exigence | Niveau attendu |
|---|---|
| Ex. 1 : recharger des VAE | au moins 4 batteries de VAE de 500 Wh par jour |
| Ex. 2 : autonomie en hiver | fonctionner au moins **5 jours de suite** avec la production de décembre, sans réseau électrique, en partant d'une batterie pleine |
| Ex. 3 : rapidité d'ouverture | porte déverrouillée moins de **2 s** après la lecture d'un badge autorisé |
| Ex. 4 : suivi à distance | envoyer toutes les 15 minutes le nombre de places libres et la charge de la batterie à la mairie, située à **1,5 km** |

**Document 3 : production moyenne des panneaux par jour.**
| Mois | Décembre | Mars | Juin | Septembre |
|---|---|---|---|---|
| Énergie produite par jour | 1,5 kWh | 4,0 kWh | 7,5 kWh | 5,0 kWh |

**Document 4 : comportement attendu à la porte.**
| Situation | Action |
|---|---|
| badge autorisé et places_libres > 0 | déverrouiller la gâche 5 s ; retirer 1 à places_libres |
| badge autorisé et places_libres = 0 | afficher « Complet » |
| badge non autorisé | allumer le voyant rouge 2 s |
| appui sur bouton_sortie | déverrouiller la gâche 5 s ; ajouter 1 à places_libres |

Variables du programme : badge_autorise (booléen), places_libres (nombre entier), bouton_sortie (booléen).

**Document 5 : deux structures possibles pour l'abri.**
| Structure | Émissions de fabrication et de transport | Durée de vie prévue | Entretien |
|---|---|---|---|
| Acier galvanisé (usine à 800 km) | 1 900 kg CO₂e | 40 ans | presque aucun |
| Bois local, douglas (scierie à 60 km) | 600 kg CO₂e | 25 ans | lasure tous les 5 ans ; pièces remplaçables |

**Document 6 : liaisons sans fil (ordres de grandeur).**
| Liaison | Portée | Débit | Consommation |
|---|---|---|---|
| NFC | quelques centimètres | faible | très faible |
| Bluetooth | une dizaine de mètres | moyen | faible |
| Wi-Fi | quelques dizaines de mètres | élevé | élevée |
| LoRa | plusieurs kilomètres | très faible | très faible |`,
      },
      exercices: [
        { type: "qcm", texte: "abri", question: "**Question 1 (0,5 pt).** Dans la chaîne d'énergie de l'éclairage, quelle fonction réalise la batterie ?", choix: ["Distribuer", "Alimenter", "Convertir", "Acquérir"], reponse: 1, explication: "La batterie **stocke** l'énergie produite par les panneaux et la fournit à l'éclairage : elle **alimente**. Le relais distribue, la lampe à DEL convertit l'énergie électrique en lumière ; « acquérir » est une fonction de la chaîne d'information." },
        { type: "vf", texte: "abri", question: "**Question 2 (0,5 pt).** Le lecteur de badges RFID fait partie de la chaîne d'énergie de l'abri.", reponse: false, explication: "Le lecteur **lit une information** (le numéro du badge) et la transmet à la carte : il réalise la fonction **acquérir** de la chaîne d'**information**. La gâche électrique, elle, reçoit de l'énergie pour se déverrouiller." },
        { type: "saisie", texte: "abri", question: "**Question 3 (0,5 pt).** Quelle énergie la batterie stocke-t-elle quand elle est pleine, en Wh ? (nombre)", reponses: ["4800", "4 800", "4800 Wh", "4 800 Wh"], explication: "E = tension × capacité = 48 × 100 = **4 800 Wh** (4,8 kWh). Seuls 80 % sont utilisables : 0,8 × 4 800 = 3 840 Wh." },
        { type: "saisie", texte: "abri", question: "**Question 4 (1 pt).** En hiver, quelle énergie l'abri consomme-t-il chaque jour, en Wh, pour recharger 4 batteries de VAE, pour l'éclairage et pour l'électronique (carte, écran, module radio) ? (nombre)", reponses: ["2220", "2 220", "2220 Wh", "2 220 Wh"], explication: "Recharges : 4 × 500 = 2 000 Wh. Éclairage : 20 × 5 = 100 Wh. Électronique, **en permanence** : 5 × 24 = 120 Wh. Total : 2 000 + 100 + 120 = **2 220 Wh** par jour. L'oubli le plus fréquent est l'électronique, qui fonctionne jour et nuit." },
        { type: "saisie", texte: "abri", question: "**Question 5 (1 pt).** En décembre, les panneaux produisent 1,5 kWh par jour et l'abri consomme 2 220 Wh par jour. La batterie, pleine au départ, compense le manque avec ses 80 % utilisables. Pendant combien de jours entiers l'abri peut-il fonctionner sans le réseau électrique ? (nombre)", reponses: ["5", "5 jours", "cinq", "cinq jours"], explication: "Manque par jour : 2 220 − 1 500 = 720 Wh. Énergie utilisable : 0,8 × 4 800 = 3 840 Wh. Durée : 3 840 ÷ 720 ≈ 5,3, soit **5 jours entiers** (on arrondit à l'unité inférieure). L'exigence 2 (au moins 5 jours) est **respectée**, mais de justesse : il reste peu de marge." },
        { type: "qcm", texte: "abri", question: "**Question 6 (0,5 pt).** D'après les documents 2 et 6, quelle liaison choisir pour envoyer les données à la mairie (exigence 4) ?", choix: ["NFC", "Bluetooth", "Wi-Fi", "LoRa"], reponse: 3, explication: "La mairie est à **1,5 km** : seule la liaison **LoRa** a une portée de plusieurs kilomètres. Son débit est très faible, mais il suffit pour envoyer deux nombres toutes les 15 minutes, et elle consomme très peu, ce qui compte pour un abri alimenté par le soleil. NFC, Bluetooth et Wi-Fi ont une portée trop courte." },
        { type: "saisie", texte: "abri", question: "**Question 7 (0,5 pt).** Pour vérifier l'exigence 3, on mesure trois fois au chronomètre le temps entre la lecture du badge et le déverrouillage : 1,2 s ; 1,6 s ; 1,4 s. Quelle est la durée moyenne, en secondes ? (nombre)", reponses: ["1,4", "1,4 s", "1,4 seconde", "1,4 secondes"], explication: "(1,2 + 1,6 + 1,4) ÷ 3 = 4,2 ÷ 3 = **1,4 s**. La moyenne et même chaque essai sont inférieurs à 2 s : l'exigence 3 est **respectée**." },
        { type: "redaction", texte: "abri", question: "**Question 8 (1,5 pt).** 1) Représente la chaîne d'énergie de l'**éclairage** par un schéma bloc, en indiquant le constituant de chaque fonction et la forme d'énergie sur chaque flèche. 2) Cite les constituants de la chaîne d'information qui commandent l'éclairage, en précisant leur fonction (acquérir, traiter, communiquer). 3) Pour chaque capteur de l'éclairage, indique s'il fournit une information logique ou analogique.", corrige: "1) **Chaîne d'énergie de l'éclairage** :\n~~~\nlumière du soleil --> [panneaux photovoltaïques] --énergie électrique-->\n[ALIMENTER : régulateur de charge et batterie 48 V] --énergie électrique-->\n[DISTRIBUER : relais] --énergie électrique-->\n[CONVERTIR : lampe à DEL] --énergie lumineuse--> éclairage de l'abri\n~~~\nIl n'y a pas de fonction « transmettre » : la lampe ne produit pas de mouvement à transmettre. (Accepté aussi : les panneaux dans le bloc ALIMENTER, avec la batterie.)\n\n2) **Chaîne d'information** :\n- **acquérir** : le détecteur de présence et le capteur de luminosité ;\n- **traiter** : la carte électronique (microcontrôleur), qui décide d'allumer s'il y a quelqu'un **et** qu'il fait sombre ;\n- **communiquer** : la sortie de la carte qui envoie l'ordre au **relais** (vers la fonction distribuer de la chaîne d'énergie).\n\n3) Le **détecteur de présence** donne une information **logique** (quelqu'un ou personne : 2 états). Le **capteur de luminosité** donne une information **analogique** (une valeur qui varie de façon continue, que la carte compare à un seuil).\n\n> Barème indicatif : schéma bloc dans le bon ordre avec les formes d'énergie (0,75 pt) ; chaîne d'information juste (0,5 pt) ; logique / analogique (0,25 pt). Erreur à éviter : placer un capteur dans la chaîne d'énergie." },
        { type: "redaction", texte: "abri", question: "**Question 9 (1,5 pt).** Le début du programme de la porte est donné :\n~~~\nrépéter indéfiniment\n    si un badge est lu alors\n        si badge_autorise = vrai ET places_libres > 0 alors\n            déverrouiller la gâche pendant 5 s\n~~~\nComplète le programme pour qu'il respecte **tout** le document 4, en utilisant exactement les noms des variables (badge_autorise, places_libres, bouton_sortie).", corrige: "**Programme complet** :\n~~~\nrépéter indéfiniment\n    si un badge est lu alors\n        si badge_autorise = vrai ET places_libres > 0 alors\n            déverrouiller la gâche pendant 5 s\n            places_libres ← places_libres − 1\n        sinon\n            si badge_autorise = vrai alors\n                afficher « Complet »\n            sinon\n                allumer le voyant rouge pendant 2 s\n    si bouton_sortie = vrai alors\n        déverrouiller la gâche pendant 5 s\n        places_libres ← places_libres + 1\n~~~\n(En blocs : « ajouter −1 à places_libres » et « ajouter 1 à places_libres ».)\n\n**Points vérifiés** :\n- les **quatre situations** du document 4 sont traitées ;\n- dans le « sinon », on distingue le badge autorisé quand l'abri est **complet** (places_libres = 0) du badge **non autorisé** ;\n- le compteur **diminue** à l'entrée et **augmente** à la sortie ;\n- le test du bouton de sortie est **en dehors** du test du badge (on peut sortir sans badge) ;\n- les noms des variables sont **exactement** ceux du document.\n\nPour aller plus loin : un programme encore plus sûr n'ajoute 1 que si places_libres < 12 (l'abri a 12 places), pour que le compteur reste juste si quelqu'un sort sans être entré par la porte.\n\n> Barème indicatif : mise à jour de places_libres (0,5 pt) ; cas « Complet » et badge refusé (0,5 pt) ; bouton de sortie (0,5 pt)." },
        { type: "redaction", texte: "abri", question: "**Question 10 (1,5 pt).** La commune hésite entre les deux structures du document 5. 1) Calcule, pour chacune, les émissions par année d'utilisation. 2) Rédige un argumentaire de 5 à 7 lignes pour conseiller la commune, en t'appuyant sur les documents et en donnant au moins un inconvénient de la solution choisie.", corrige: "1) **Émissions par année d'utilisation** :\n- acier : 1 900 ÷ 40 = **47,5 kg CO₂e par an** ;\n- bois local : 600 ÷ 25 = **24 kg CO₂e par an**.\n\n2) **Argumentaire** : Je conseille à la commune de choisir la structure en **bois local**. D'après le document 5, elle émet environ deux fois moins de gaz à effet de serre par année d'utilisation que la structure en acier (24 kg CO₂e contre 47,5 kg CO₂e), même si elle dure moins longtemps. Le bois vient d'une scierie située à 60 km : le transport est court et cela fait travailler une entreprise de la région. Ses pièces sont remplaçables, ce qui prolonge sa durée de vie. Cependant, le bois demande un **entretien** régulier (une lasure tous les 5 ans), qui a un coût et ajoute un peu d'émissions, alors que l'acier galvanisé n'en demande presque pas. Malgré cet inconvénient, le bois local est le choix le plus favorable au climat.\n\n> Barème indicatif : calculs justes avec unité (0,5 pt) ; choix appuyé sur les données des documents (0,5 pt) ; nuance (inconvénient) et conclusion (0,5 pt). Le **point de langue** de la discipline (1 pt) récompense dans tout le sujet des phrases correctes, l'orthographe et un vocabulaire technique précis : il complète les 9 points des questions." },
      ],
    },
    {
      id: "plaque-essai-prototype",
      titre: "Prototyper un circuit sur une plaque d'essai",
      theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
      cours: `
## À quoi sert une plaque d'essai ?
Avant de souder des composants ou de fabriquer une carte électronique, on **teste** le circuit sur une **plaque d'essai** (on dit aussi « plaque de prototypage » ou, en anglais, *breadboard*). On enfonce les pattes des composants et des fils dans ses trous, **sans soudure** : on peut modifier le montage, changer un composant, corriger une erreur en quelques secondes. C'est l'outil du **prototypage** électronique, souvent avec une carte programmable (micro:bit, Arduino...).

## Comment les trous sont-ils reliés ?
Sous les trous, des **lamelles métalliques** relient certains trous entre eux :
- dans la partie centrale, les trous sont repérés par une **lettre** (a à j) et un **numéro de rangée** (1, 2, 3...) ; dans une même rangée, les **5 trous a, b, c, d, e** sont reliés entre eux, et les **5 trous f, g, h, i, j** aussi ;
- une **rainure centrale** sépare ces deux groupes : ils ne sont **pas** reliés d'un côté à l'autre de la rainure ;
- sur les bords, les **rails d'alimentation** (une ligne marquée **+**, souvent rouge, et une ligne marquée **−**, souvent bleue) relient tous leurs trous sur la longueur. Sur certaines plaques longues, les rails sont **coupés au milieu** : on vérifie au multimètre (test de continuité) ou on ajoute un fil pour les relier.

>! Règle d'or : deux pattes placées dans le **même groupe de 5 trous** sont **reliées** (au même point du circuit). Pour qu'un composant fonctionne, ses deux pattes doivent donc être dans **deux rangées différentes**.

## Les composants de base
| Composant | Rôle | À savoir |
|---|---|---|
| **DEL** (diode électroluminescente) | éclairer, signaler | **polarisée** : la patte **longue** est l'**anode** (côté +), la patte courte la **cathode** (côté −, du côté du méplat) ; elle ne s'allume que dans le bon sens |
| **Résistance** | limiter l'intensité du courant | non polarisée ; sa valeur (en ohms, Ω) se lit avec le code de couleurs ou se mesure à l'ohmmètre |
| **Bouton-poussoir** | donner un ordre (information logique) | celui à 4 pattes se place **à cheval sur la rainure centrale** : ses pattes se trouvent ainsi dans des groupes de trous différents, et l'appui relie vraiment deux points du circuit |
| **Fils de liaison** | relier les rangées, les rails et la carte | convention : rouge pour le +, noir ou bleu pour le − (la masse, notée **GND**) |
| **Carte programmable** | traiter (microcontrôleur) | broches d'entrée et de sortie numérotées, broche **GND** (0 V) et broche d'alimentation (3,3 V sur la micro:bit, 5 V sur beaucoup de cartes Arduino) |

## Calculer la résistance de protection d'une DEL
Branchée sans résistance, une DEL laisse passer trop de courant et **grille**. On place une résistance **en série** avec elle. Une DEL rouge a besoin d'environ **2 V** à ses bornes (environ 3 V pour une bleue ou une blanche) et d'un courant d'environ **10 à 20 mA**.

La résistance reçoit le reste de la tension. D'après la loi d'Ohm (U = R × I) :

**R = (tension d'alimentation − tension de la DEL) ÷ intensité voulue** (R en Ω, U en V, I en A ; 20 mA = 0,020 A).

>! Exemple résolu : carte en 5 V, DEL rouge (2 V), courant voulu 20 mA. R = (5 − 2) ÷ 0,020 = 3 ÷ 0,020 = **150 Ω**. Les résistances n'existent qu'en **valeurs normalisées** (par exemple 100, 120, 150, 180, 220, 270, 330 Ω) : si le calcul ne tombe pas sur une valeur existante, on prend la valeur **immédiatement supérieure**, pour que le courant ne dépasse pas la valeur voulue. Ici, 150 Ω existe. Avec une résistance plus grande, par exemple 220 Ω, le courant vaut 3 ÷ 220 ≈ 0,014 A, soit environ 14 mA : la DEL éclaire un peu moins, sans risque.

## La méthode de câblage
1. **Dessiner le schéma** du circuit et repérer les broches de la carte à utiliser.
2. **Carte débranchée**, relier la broche **GND** au rail **−** (et, si besoin, l'alimentation au rail **+**).
3. **Placer les composants** : chaque patte dans une rangée bien choisie ; DEL dans le bon sens.
4. **Relier** par des fils courts, avec les bonnes couleurs.
5. **Vérifier avant de brancher** : comparer le montage au schéma, tester au multimètre qu'il n'y a **pas de continuité** entre les rails + et − (sinon, c'est un **court-circuit**).
6. **Tester** avec un programme simple (faire clignoter la DEL), puis le programme complet.
7. Si tout fonctionne, on peut passer à un montage **soudé** ou à une carte électronique fabriquée pour l'objet.

>! Exemple : DEL commandée par la broche 13 d'une carte en 5 V.
>! - un fil va de la broche 13 au trou a10 ;
>! - la résistance de 220 Ω relie le trou c10 au trou c14 ;
>! - la DEL a son anode (patte longue) en e14 et sa cathode (patte courte) en e15 ;
>! - un fil relie le trou a15 au rail − ;
>! - un fil relie le rail − à la broche GND de la carte.
>! Le courant suit le chemin : broche 13 → rangée 10 → résistance → rangée 14 → DEL → rangée 15 → rail − → GND.

## Erreurs fréquentes et diagnostic
| Ce qu'on constate | Cause probable |
|---|---|
| La DEL ne s'allume pas, le programme est juste | DEL à l'envers, ou masse (GND) non reliée : le circuit n'est pas fermé |
| La DEL ne s'allume pas, ses deux pattes sont dans la même rangée | elle est **court-circuitée** : le courant passe par la lamelle, pas par la DEL |
| La DEL a éclairé très fort puis s'est éteinte définitivement | pas de résistance de protection : elle a grillé |
| La carte s'éteint ou chauffe dès qu'on la branche | **court-circuit** entre + et − : débrancher tout de suite |
| Le montage marche « par moments » | patte mal enfoncée, fil abîmé |

**Sécurité** : la plaque d'essai sert uniquement en **très basse tension** (piles, port USB, cartes en 3,3 V ou 5 V), jamais sur le secteur 230 V. On **débranche** la carte avant de modifier le montage.

> **À retenir** : la plaque d'essai permet de **prototyper sans soudure**. Dans une rangée, les **5 trous** d'un même côté de la rainure sont **reliés** ; les **rails** + et − relient leurs trous sur la longueur. Un composant doit avoir ses pattes dans **des rangées différentes**. DEL : **patte longue = anode (+)**, toujours avec une **résistance en série** : **R = (U alimentation − U DEL) ÷ I**, puis valeur normalisée **immédiatement supérieure**. Relier la **masse (GND)**, vérifier l'absence de court-circuit **avant** de brancher, puis tester.
`,
      exercices: [
        { type: "qcm", question: "Sur une plaque d'essai, quels trous sont reliés entre eux par une lamelle métallique ?", choix: ["Tous les trous de la plaque", "Les 5 trous a, b, c, d, e d'une même rangée numérotée", "Les trous a10 et f10, de part et d'autre de la rainure centrale", "Aucun : il faut toujours ajouter des fils"], reponse: 1, explication: "Dans une même rangée, les **5 trous** situés du même côté de la rainure (a à e, ou f à j) sont reliés. La rainure centrale **sépare** les deux groupes : a10 et f10 ne sont pas reliés." },
        { type: "vf", question: "On place une DEL avec ses deux pattes dans les trous b7 et d7. Elle s'allumera normalement si le reste du circuit est correct.", reponse: false, explication: "b7 et d7 sont dans le **même groupe de 5 trous** : ils sont reliés par la lamelle. La DEL est **court-circuitée** : le courant passe par la lamelle et pas par elle. Il faut placer ses pattes dans **deux rangées différentes** (par exemple d7 et d8)." },
        { type: "qcm", question: "Comment reconnaît-on l'anode d'une DEL, la patte à relier du côté + ?", choix: ["C'est la patte la plus courte", "C'est la patte du côté du méplat", "C'est la patte la plus longue", "Les deux pattes sont identiques"], reponse: 2, explication: "L'**anode** est la patte **longue** (côté +). La patte courte, du côté du **méplat** du boîtier, est la **cathode** (côté −). Une DEL branchée à l'envers ne s'allume pas." },
        { type: "saisie", question: "Une DEL rouge (2 V) est alimentée par une carte en 5 V. On veut un courant de 15 mA (0,015 A). Quelle résistance faut-il, en ohms ? (nombre)", reponses: ["200", "200 Ω", "200 ohms", "200 ohm"], explication: "R = (5 − 2) ÷ 0,015 = 3 ÷ 0,015 = **200 Ω**. Penser à convertir les mA en A (15 mA = 0,015 A)." },
        { type: "qcm", question: "Une carte programmable fournit 3,3 V sur ses sorties. Pour une DEL rouge (2 V) et un courant de 10 mA, le calcul donne R = 1,3 ÷ 0,010 = 130 Ω. Le magasin propose 100 Ω, 120 Ω, 150 Ω et 180 Ω. Laquelle choisir ?", choix: ["100 Ω", "120 Ω", "180 Ω", "150 Ω"], reponse: 3, explication: "On prend la valeur normalisée **immédiatement supérieure** au calcul : **150 Ω**. Le courant vaut alors 1,3 ÷ 150 ≈ 8,7 mA, sans dépasser les 10 mA voulus. Avec 100 ou 120 Ω, le courant dépasserait 10 mA ; 180 Ω marcherait aussi, mais la DEL éclairerait moins sans raison." },
        { type: "saisie", question: "Une DEL rouge (2 V) est branchée en série avec une résistance de 220 Ω sur une carte en 5 V. Quelle est l'intensité du courant, en mA arrondie à l'unité ? (nombre)", reponses: ["14", "14 mA", "13,6", "13,6 mA"], explication: "La résistance reçoit 5 − 2 = 3 V. I = U ÷ R = 3 ÷ 220 ≈ 0,0136 A, soit environ **14 mA**." },
        { type: "vf", question: "Un bouton-poussoir à 4 pattes se place généralement à cheval sur la rainure centrale de la plaque d'essai.", reponse: true, explication: "Ainsi, ses pattes se trouvent dans des groupes de trous **différents** et le bouton relie vraiment deux points du circuit quand on appuie. Placé autrement, il peut être court-circuité en permanence." },
        { type: "qcm", question: "Un élève a câblé une DEL et sa résistance sur la broche 13 de sa carte. Le programme de clignotement est juste, la DEL est dans le bon sens, mais elle ne s'allume pas. Il a relié la cathode au rail −, mais aucun fil ne relie le rail − à la carte. Quelle est la cause ?", choix: ["La masse (GND) n'est pas reliée : le circuit n'est pas fermé", "La résistance est trop faible", "La DEL est court-circuitée", "La carte a besoin d'une batterie plus puissante"], reponse: 0, explication: "Le courant part de la broche 13 et doit **revenir** à la carte par la broche **GND**. Sans fil entre le rail − et GND, le circuit est **ouvert** : aucun courant ne passe." },
        { type: "saisie", question: "Avant de brancher la carte, on vérifie au multimètre, en position continuité, s'il y a un bip entre le rail + et le rail −. Comment appelle-t-on le défaut qui ferait biper le multimètre ? (un nom composé)", reponses: ["court-circuit", "un court-circuit", "courts-circuits"], explication: "Un bip signifie que le + et le − sont reliés directement : c'est un **court-circuit**. Le courant passerait sans traverser les composants, très fort : la carte ou le port USB pourrait chauffer et être endommagé." },
        { type: "redaction", question: "**Sujet type brevet.** On prototype une veilleuse sur une plaque d'essai, avec une carte programmable en 5 V : un bouton-poussoir (broche 2) allume ou éteint une DEL blanche (3 V, courant voulu 20 mA) commandée par la broche 9. Résistances disponibles : 68 Ω, 82 Ω, 100 Ω, 120 Ω. 1) Calcule la résistance de protection de la DEL et choisis une valeur disponible. Justifie. 2) Décris le câblage de la DEL et de sa résistance sur la plaque d'essai (trous utilisés, fils, rails). 3) Liste trois vérifications à faire avant de brancher la carte. 4) La DEL ne s'allume pas au premier essai. Propose une démarche de diagnostic en trois étapes.", corrige: "1) **Résistance** : R = (5 − 3) ÷ 0,020 = 2 ÷ 0,020 = **100 Ω**. La valeur **100 Ω** existe : on la choisit (courant = 2 ÷ 100 = 0,020 A = 20 mA). Si le calcul avait donné 90 Ω, on aurait pris la valeur immédiatement supérieure, 100 Ω ; 68 Ω et 82 Ω donneraient un courant trop fort.\n\n2) **Câblage** (un exemple parmi d'autres) :\n- carte débranchée, un fil noir relie la broche GND au rail − ;\n- un fil relie la broche 9 au trou a20 ;\n- la résistance de 100 Ω relie c20 à c24 ;\n- la DEL : anode (patte longue) en e24, cathode (patte courte) en e25 ;\n- un fil relie a25 au rail −.\nChaque composant a ses pattes dans **deux rangées différentes** ; la résistance est **en série** avec la DEL.\n\n3) **Vérifications avant de brancher** :\n- comparer le montage au schéma, fil par fil ;\n- vérifier le **sens de la DEL** (patte longue côté résistance, patte courte côté rail −) ;\n- tester au multimètre qu'il n'y a **pas de continuité** entre les rails + et − (pas de court-circuit) ;\n- vérifier que le bouton est à cheval sur la rainure et que toutes les pattes sont bien enfoncées.\n\n4) **Diagnostic** (du plus simple au plus compliqué) :\n1. Vérifier le **sens de la DEL** et le fil entre le rail − et **GND** (circuit fermé ?).\n2. Téléverser un programme de test très simple (allumer la broche 9 en permanence) : si la DEL s'allume, l'erreur est dans le programme (lecture du bouton, numéro de broche).\n3. Carte branchée, mesurer au voltmètre la tension entre la broche 9 et GND (environ 5 V attendus quand la sortie est activée), puis aux bornes de la DEL ; carte débranchée, tester la continuité des fils. Remplacer la DEL si elle est grillée.\n\n> Barème indicatif : calcul et choix justifiés (1 pt), câblage cohérent (1 pt), vérifications de sécurité (1 pt), diagnostic ordonné (1 pt)." },
      ],
    },
  ],
};
