export default {
  chapitres: [
    {
      id: "terre-systeme-solaire",
      titre: "La Terre dans le système solaire et la structure du globe",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## La Terre, une planète du système solaire
Le **système solaire** est formé d'une étoile, le **Soleil**, et de tous les objets qui tournent autour de lui : 8 planètes, leurs satellites (comme la Lune), des planètes naines, des astéroïdes et des comètes. Il s'est formé il y a environ **4,6 milliards d'années**.

| Planètes telluriques (rocheuses) | Planètes géantes (gazeuses) |
|---|---|
| Mercure, Vénus, Terre, Mars | Jupiter, Saturne, Uranus, Neptune |
| petites, denses, surface solide | très grosses, surtout formées de gaz |

La Terre est la **3e planète** à partir du Soleil, à environ **150 millions de km** de lui.

## Les mouvements de la Terre
- **Rotation** : la Terre tourne sur elle-même autour de son axe (pôle Nord – pôle Sud) en **24 heures environ**. Cela explique l'alternance du **jour et de la nuit** : la moitié tournée vers le Soleil est éclairée.
- **Révolution** : la Terre tourne autour du Soleil en **365,25 jours** (1 an).
- L'axe de rotation est **incliné** d'environ 23° : c'est ce qui explique les **saisons**. En été, ton hémisphère reçoit les rayons du Soleil plus verticalement et pendant plus longtemps.

>! **Attention à une erreur fréquente** : les saisons ne sont PAS dues à la distance Terre-Soleil. La Terre est même un peu plus proche du Soleil en janvier, pendant l'hiver de l'hémisphère Nord !

## Pourquoi la vie sur Terre ?
La Terre est la seule planète connue qui abrite la vie. Grâce à sa **distance au Soleil** et à son **atmosphère** (qui produit un effet de serre naturel), la température moyenne en surface est d'environ 15 °C : l'**eau** peut y exister à l'état **liquide**. L'atmosphère contient aussi du dioxygène et la couche d'ozone filtre une partie des rayons ultraviolets.

## La structure du globe terrestre
La Terre est une sphère d'environ **6 370 km de rayon**. On connaît son intérieur grâce à l'étude des **ondes sismiques**. Schéma en coupe, de l'extérieur vers le centre :

| Couche | Profondeur | État |
|---|---|---|
| Croûte (continentale ou océanique) | de 0 à 30 km environ sous les continents, 7 km sous les océans | solide |
| Manteau | jusqu'à 2 900 km | solide (mais peut se déformer très lentement) |
| Noyau externe | de 2 900 à 5 100 km | liquide (fer et nickel) |
| Noyau interne (graine) | de 5 100 à 6 370 km | solide |

La croûte et la partie supérieure du manteau forment la **lithosphère**, une couche rigide d'environ 100 km d'épaisseur, découpée en **plaques**.

> **À retenir** :
> - La Terre est la 3e planète du système solaire, une planète rocheuse.
> - Rotation en 24 h → jours et nuits ; révolution en 365,25 j → une année ; axe incliné → saisons.
> - L'eau liquide est possible grâce à la distance au Soleil et à l'atmosphère.
> - Du centre vers la surface : noyau interne (solide), noyau externe (liquide), manteau, croûte.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la position de la Terre en partant du Soleil ?", choix: ["1re", "2e", "3e", "4e"], reponse: 2, explication: "L'ordre est Mercure, Vénus, **Terre**, Mars... La Terre est donc la 3e planète." },
        { type: "vf", question: "L'alternance du jour et de la nuit est due à la révolution de la Terre autour du Soleil.", reponse: false, explication: "C'est la **rotation** de la Terre sur elle-même (en 24 h environ) qui explique le jour et la nuit. La révolution (365,25 jours) correspond à une année." },
        { type: "saisie", question: "Comment appelle-t-on les planètes rocheuses comme Mercure, Vénus, la Terre et Mars ?", reponses: ["telluriques", "planètes telluriques", "tellurique", "rocheuses", "planètes rocheuses"], explication: "Les 4 planètes les plus proches du Soleil sont les planètes **telluriques** (rocheuses). Les 4 autres sont des planètes géantes gazeuses." },
        { type: "qcm", question: "Quelle couche du globe terrestre est liquide ?", choix: ["La croûte", "Le noyau interne", "Le manteau", "Le noyau externe"], reponse: 3, explication: "Seul le **noyau externe** (entre 2 900 et 5 100 km de profondeur) est liquide. Le manteau est solide même s'il se déforme très lentement." },
        { type: "vf", question: "Les saisons existent parce que la Terre est parfois beaucoup plus proche du Soleil.", reponse: false, explication: "Les saisons sont dues à l'**inclinaison de l'axe de rotation** de la Terre. La distance Terre-Soleil varie très peu, et la Terre est même plus proche du Soleil en janvier (hiver dans l'hémisphère Nord)." },
        { type: "saisie", question: "Combien de planètes compte le système solaire ? (en chiffres)", reponses: ["8", "huit"], explication: "Le système solaire compte **8 planètes** : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Pluton est une planète naine depuis 2006." },
        { type: "qcm", question: "Quelle caractéristique de la Terre permet surtout la présence d'eau liquide ?", choix: ["Sa distance au Soleil et son atmosphère", "Ses anneaux", "Sa taille gigantesque", "Son noyau liquide"], reponse: 0, explication: "La **distance au Soleil** et l'**atmosphère** (effet de serre naturel) donnent une température moyenne d'environ 15 °C, ce qui permet à l'eau d'être liquide." },
        { type: "redaction", question: "Explique pourquoi il fait plus chaud en été qu'en hiver en France. Tu utiliseras les mots : axe de rotation, inclinaison, rayons du Soleil, durée du jour.", corrige: `La Terre tourne autour du Soleil en un an, et son **axe de rotation est incliné** d'environ 23° par rapport à son orbite. Cette inclinaison reste la même toute l'année.

- En **été**, l'hémisphère Nord (où se trouve la France) est penché vers le Soleil : les **rayons du Soleil** arrivent plus verticalement, donc ils chauffent une surface plus petite et plus fortement. De plus, la **durée du jour** est longue (jusqu'à environ 16 h) : le sol est chauffé plus longtemps.
- En **hiver**, l'hémisphère Nord est penché à l'opposé du Soleil : les rayons arrivent de façon rasante, l'énergie est répartie sur une plus grande surface et les jours sont courts.

> Conclusion : les saisons s'expliquent par l'inclinaison de l'axe de rotation de la Terre, et non par la distance au Soleil.` },
      ],
    },
    {
      id: "roches-paysages-erosion",
      titre: "Roches, paysages, érosion et sédimentation",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Les roches et les paysages
Un **paysage** dépend de la nature des **roches** du sous-sol, du climat, des êtres vivants et des activités humaines. Une **roche** est un matériau naturel formé d'un ou plusieurs minéraux.

| Famille | Formation | Exemples |
|---|---|---|
| Roches magmatiques | refroidissement d'un magma | granite, basalte |
| Roches sédimentaires | dépôt et accumulation de sédiments | calcaire, grès, argile, sable |
| Roches métamorphiques | transformation d'une roche par la chaleur et la pression | marbre, schiste |

Pour identifier une roche, on observe ses caractéristiques : couleur, dureté (raye-t-elle le verre ?), perméabilité (laisse-t-elle passer l'eau ?), cohérence (meuble comme le sable ou dure).

>! **Test du calcaire** : on dépose une goutte d'acide chlorhydrique dilué sur la roche. S'il y a une **effervescence** (des bulles de dioxyde de carbone), la roche contient du calcaire.

## L'érosion : la destruction des roches
L'**érosion** est l'ensemble des phénomènes qui usent les roches (altération) et emportent leurs débris (transport). Elle est suivie du dépôt de ces débris (sédimentation). De la roche au sédiment, il y a donc trois étapes :
1. **Altération** : la roche est abîmée et fragmentée par l'eau (pluie, rivières), le **gel** (l'eau qui gèle dans les fissures augmente de volume et fait éclater la roche), le vent, les racines des végétaux...
2. **Transport** : les fragments (blocs, galets, sables, argiles) sont déplacés par l'eau, le vent ou les glaciers. Plus le courant est rapide, plus il peut transporter de gros éléments. Pendant le transport, les fragments s'arrondissent (galets).
3. **Sédimentation** : quand le courant ralentit (plaine, lac, mer), les fragments se déposent : ce sont les **sédiments**. Les plus gros se déposent en premier.

## Des sédiments aux roches sédimentaires
Les sédiments s'accumulent en **couches** (strates). Au fil de millions d'années, ils sont compactés et cimentés : ils deviennent des **roches sédimentaires**. Elles contiennent souvent des **fossiles**, restes ou traces d'êtres vivants du passé.

> **À retenir** :
> - Érosion = altération + transport ; puis sédimentation quand le courant faiblit.
> - Les agents de l'érosion : eau, gel, vent, glaciers, êtres vivants... et l'humain.
> - **Principe de superposition** : dans une série de couches non déformées, une couche est plus récente que celle située en dessous.
> - Le calcaire fait effervescence avec l'acide chlorhydrique.

## L'action de l'être humain
L'humain modifie aussi les paysages : carrières, routes, barrages, déforestation (qui accélère l'érosion des sols), constructions sur les côtes qui reculent.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la bonne succession des étapes ?", choix: ["Sédimentation, transport, altération", "Altération, transport, sédimentation", "Transport, altération, sédimentation", "Altération, sédimentation, transport"], reponse: 1, explication: "La roche est d'abord **altérée** (fragmentée), puis les fragments sont **transportés**, et enfin ils se **déposent** (sédimentation) quand le courant ralentit." },
        { type: "vf", question: "Le gel peut faire éclater les roches car l'eau augmente de volume en devenant de la glace.", reponse: true, explication: "En gelant, l'eau infiltrée dans les fissures augmente de volume (environ 9 %) et agit comme un coin : c'est la **gélifraction**." },
        { type: "saisie", question: "Comment appelle-t-on les restes ou traces d'êtres vivants conservés dans les roches ?", reponses: ["fossiles", "des fossiles", "fossile", "un fossile"], explication: "Les **fossiles** se trouvent surtout dans les roches sédimentaires. Ils renseignent sur les êtres vivants et les milieux du passé." },
        { type: "qcm", question: "Une goutte d'acide chlorhydrique sur une roche provoque une effervescence. On peut conclure que la roche contient :", choix: ["du granite", "de l'argile", "du sel", "du calcaire"], reponse: 3, explication: "L'**effervescence** (dégagement de dioxyde de carbone) avec l'acide chlorhydrique est le test caractéristique du **calcaire**." },
        { type: "vf", question: "Le granite est une roche sédimentaire.", reponse: false, explication: "Le granite est une roche **magmatique** : il se forme par refroidissement lent d'un magma en profondeur." },
        { type: "qcm", question: "Dans une falaise, on observe trois couches A (en haut), B (au milieu) et C (en bas), non déformées. Laquelle est la plus ancienne ?", choix: ["A", "B", "C", "Impossible à dire"], reponse: 2, explication: "D'après le **principe de superposition**, la couche du bas s'est déposée en premier : **C** est la plus ancienne et A la plus récente." },
        { type: "saisie", question: "Comment appelle-t-on le dépôt des fragments de roches quand le courant ralentit ?", reponses: ["sédimentation", "la sédimentation"], explication: "C'est la **sédimentation** : les fragments déposés sont les sédiments." },
        { type: "redaction", question: "Une rivière de montagne transporte des blocs et des galets. Arrivée dans la plaine, son courant devient lent et on n'y trouve plus que du sable et de l'argile près de l'embouchure. Explique cette observation.", corrige: `La capacité d'une rivière à **transporter** des fragments dépend de la **vitesse de son courant** :
- En montagne, la pente est forte et le courant est **rapide** : la rivière peut transporter de gros éléments (blocs, galets).
- Dans la plaine, la pente est faible et le courant **ralentit** : les gros éléments, trop lourds, se déposent les premiers en chemin (**sédimentation**). Seuls les éléments fins et légers (sables, argiles) continuent d'être transportés jusqu'à l'embouchure, où ils se déposent à leur tour.

> Conclusion : les sédiments sont **triés** selon leur taille : plus le courant faiblit, plus les éléments déposés sont fins.` },
      ],
    },
    {
      id: "meteo-climat",
      titre: "Météo et climat",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Météo et climat : deux notions différentes
- La **météorologie** (la météo) décrit le **temps qu'il fait** en un lieu à un moment donné, ou prévu pour les jours suivants : température, pluie, vent, nuages...
- Le **climat** est la **moyenne** des conditions météorologiques d'une région, calculée sur une longue période (au moins **30 ans**).

>! **Exemple** : « Il neige à Paris aujourd'hui » relève de la météo. « À Paris, les hivers sont frais et les étés tempérés » décrit le climat.

## Les instruments de mesure
| Grandeur | Instrument | Unité |
|---|---|---|
| Température | thermomètre | degré Celsius (°C) |
| Précipitations | pluviomètre | millimètre (mm) |
| Pression atmosphérique | baromètre | hectopascal (hPa) |
| Vitesse du vent | anémomètre | km/h ou m/s |
| Direction du vent | girouette | points cardinaux |
| Humidité de l'air | hygromètre | pourcentage (%) |

1 mm de pluie correspond à 1 litre d'eau tombé sur 1 m².

## Les mouvements de l'atmosphère et de l'eau
Le Soleil chauffe inégalement la Terre : beaucoup à l'équateur, peu aux pôles. L'**air chaud**, plus léger, **monte** ; l'air froid descend. Ces mouvements créent les **vents**, qui transportent la chaleur. Les zones de basse pression (dépressions) amènent souvent du mauvais temps, les hautes pressions (anticyclones) du beau temps.

Le **cycle de l'eau** : l'eau des océans s'**évapore** grâce à l'énergie solaire, la vapeur se refroidit en altitude et forme des **nuages** (gouttelettes), puis retombe en **précipitations** (pluie, neige). Elle ruisselle ou s'infiltre et rejoint les océans.

## Les zones climatiques
| Zone | Caractéristiques |
|---|---|
| Polaire | très froid toute l'année |
| Tempérée (France) | 4 saisons, températures modérées |
| Tropicale | chaud, une saison sèche et une saison des pluies |
| Équatoriale | chaud et humide toute l'année |

Un **climatogramme** est un graphique qui montre, pour chaque mois, les **précipitations** (en barres, en mm) et la **température moyenne** (en courbe, en °C).

## Le changement climatique
Depuis environ 150 ans, la température moyenne de la Terre augmente (environ +1,2 °C). Cause principale : les activités humaines qui rejettent des **gaz à effet de serre** (dioxyde de carbone, méthane) en brûlant du charbon, du pétrole et du gaz. Conséquences : fonte des glaciers, montée du niveau des mers, événements extrêmes plus fréquents.

> **À retenir** :
> - Météo = temps à court terme ; climat = moyenne sur au moins 30 ans.
> - L'air chaud monte, l'air froid descend : cela crée les vents.
> - Le cycle de l'eau : évaporation → condensation (nuages) → précipitations → ruissellement / infiltration.
> - Le réchauffement climatique actuel est principalement dû aux gaz à effet de serre rejetés par l'humain.
`,
      exercices: [
        { type: "vf", question: "« Demain, il pleuvra à Lyon » est une information sur le climat.", reponse: false, explication: "C'est une prévision **météorologique** : elle concerne un lieu et un moment précis. Le climat est une moyenne sur au moins 30 ans." },
        { type: "qcm", question: "Quel instrument mesure la quantité de pluie tombée ?", choix: ["Le baromètre", "L'anémomètre", "L'hygromètre", "Le pluviomètre"], reponse: 3, explication: "Le **pluviomètre** mesure les précipitations en mm. Le baromètre mesure la pression, l'anémomètre la vitesse du vent, l'hygromètre l'humidité." },
        { type: "saisie", question: "Sur combien d'années au minimum calcule-t-on les moyennes qui définissent un climat ? (nombre)", reponses: ["30", "trente", "30 ans"], explication: "Le climat est défini par des moyennes calculées sur au moins **30 ans**." },
        { type: "qcm", question: "Un pluviomètre indique 12 mm de pluie. Quel volume d'eau est tombé sur 1 m² ?", choix: ["1,2 L", "12 L", "120 L", "0,12 L"], reponse: 1, explication: "1 mm de pluie correspond à 1 L par m². Donc 12 mm correspondent à **12 L** par m²." },
        { type: "vf", question: "L'air chaud a tendance à monter.", reponse: true, explication: "L'air chaud est moins dense que l'air froid : il **monte**. Ces mouvements sont à l'origine des vents et de la formation de nombreux nuages." },
        { type: "qcm", question: "Quelle est la principale cause du réchauffement climatique actuel ?", choix: ["Les rejets de gaz à effet de serre par les activités humaines", "Le rapprochement de la Terre et du Soleil", "Les éruptions volcaniques", "La diminution du nombre de nuages"], reponse: 0, explication: "La combustion du charbon, du pétrole et du gaz rejette du **dioxyde de carbone**, un gaz à effet de serre qui renforce l'effet de serre et réchauffe la planète." },
        { type: "saisie", question: "Dans le cycle de l'eau, comment s'appelle le passage de l'eau liquide des océans à l'état de vapeur ?", reponses: ["évaporation", "l'évaporation", "vaporisation"], explication: "C'est l'**évaporation**, rendue possible par l'énergie du Soleil." },
        { type: "redaction", question: "Le climatogramme de Brest montre des températures moyennes de 7 °C en janvier et 16 °C en juillet, et des pluies toute l'année (environ 1 200 mm par an). Celui de Marseille montre 7 °C en janvier, 24 °C en juillet, très peu de pluie en été et environ 550 mm par an. Compare ces deux climats et propose une explication.", corrige: `**Comparaison** :
- Les hivers sont aussi doux dans les deux villes (7 °C en janvier).
- Les étés sont bien plus chauds à Marseille (24 °C) qu'à Brest (16 °C) : l'écart de température entre l'hiver et l'été est de 9 °C à Brest et de 17 °C à Marseille.
- Brest reçoit plus de deux fois plus de pluie (1 200 mm contre 550 mm), répartie toute l'année, alors que Marseille a un été sec.

**Conclusion** : Brest a un climat **océanique** (doux et humide, faibles écarts de température), Marseille un climat **méditerranéen** (été chaud et sec).

**Explication** : Brest est au bord de l'océan Atlantique, d'où arrivent des vents chargés d'humidité ; l'océan adoucit les températures. Marseille est plus au sud et, en été, protégée par des anticyclones qui apportent du beau temps sec.` },
      ],
    },
    {
      id: "seismes-volcans",
      titre: "Séismes et volcans",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Les séismes
Un **séisme** (tremblement de terre) est une série de secousses du sol. Il est provoqué par la **rupture brutale de roches** en profondeur, soumises à des forces énormes. Les roches cassent et se déplacent le long d'une **faille**.

- Le **foyer** (ou hypocentre) est le lieu, en profondeur, où se produit la rupture.
- L'**épicentre** est le point de la surface situé à la verticale du foyer : c'est là que les secousses sont souvent les plus fortes.
- Depuis le foyer partent des **ondes sismiques** dans toutes les directions. Elles sont enregistrées par des **sismographes** (enregistrement : un sismogramme).

| Mesure | Ce qu'elle indique | Échelle |
|---|---|---|
| Magnitude | l'énergie libérée au foyer | échelle ouverte (on parle souvent d'« échelle de Richter ») ; une seule valeur par séisme ; +1 de magnitude ≈ 30 fois plus d'énergie |
| Intensité | les effets et dégâts observés en un lieu | échelle EMS-98 de I à XII ; diminue en s'éloignant de l'épicentre |

## Les volcans
Un **volcan** est un relief formé par l'accumulation de produits émis lors d'**éruptions**. Le **magma** (roche fondue) remonte depuis la **chambre magmatique** par la **cheminée** et sort par le **cratère**.

| Type d'éruption | Lave | Manifestations | Exemple |
|---|---|---|---|
| Effusive | **fluide**, très chaude | coulées de lave, fontaines de lave | Piton de la Fournaise (La Réunion) |
| Explosive | **visqueuse** (pâteuse), riche en gaz | explosions, nuées ardentes, cendres, bombes | Montagne Pelée (Martinique, 1902) |

## Pourquoi là ?
Séismes et volcans ne sont pas répartis au hasard : ils se concentrent surtout le long des **limites des plaques lithosphériques**, qui se déplacent de quelques centimètres par an.

## Risques et prévention
Un **risque** naturel existe quand un **aléa** (séisme, éruption) peut toucher une zone où vivent des humains (**enjeux**). On ne peut pas prévoir précisément un séisme, mais on peut **prévenir** : constructions parasismiques, exercices d'alerte, surveillance des volcans (sismographes, mesure du gonflement, des gaz), plans d'évacuation.

> **À retenir** :
> - Séisme = rupture de roches en profondeur, au foyer ; l'épicentre est en surface à sa verticale.
> - Magnitude = énergie (une valeur) ; intensité = dégâts (varie selon le lieu).
> - Lave fluide → éruption effusive ; lave visqueuse → éruption explosive (plus dangereuse).
> - Séismes et volcans se situent surtout aux limites des plaques.
`,
      exercices: [
        { type: "saisie", question: "Comment s'appelle le point de la surface situé à la verticale du foyer d'un séisme ?", reponses: ["épicentre", "l'épicentre"], explication: "L'**épicentre** est à la surface, juste au-dessus du foyer (hypocentre) où la roche s'est rompue." },
        { type: "qcm", question: "Une éruption avec des coulées de lave très fluide est une éruption :", choix: ["explosive", "sédimentaire", "sismique", "effusive"], reponse: 3, explication: "Une lave **fluide** s'écoule facilement et forme des coulées : l'éruption est **effusive**." },
        { type: "vf", question: "Un même séisme a une seule magnitude mais plusieurs intensités selon le lieu.", reponse: true, explication: "La **magnitude** mesure l'énergie libérée au foyer (une valeur unique). L'**intensité** mesure les dégâts, qui diminuent en général en s'éloignant de l'épicentre." },
        { type: "qcm", question: "Quel instrument enregistre les ondes sismiques ?", choix: ["Le sismographe", "Le baromètre", "Le thermomètre", "Le pluviomètre"], reponse: 0, explication: "Le **sismographe** enregistre les mouvements du sol ; l'enregistrement s'appelle un sismogramme." },
        { type: "vf", question: "Les éruptions explosives sont liées à une lave visqueuse riche en gaz.", reponse: true, explication: "Une lave **visqueuse** retient les gaz qui s'accumulent puis s'échappent violemment : l'éruption est **explosive** (nuées ardentes, cendres)." },
        { type: "qcm", question: "Où se produisent la plupart des séismes et des volcans ?", choix: ["Au centre des continents", "Aux pôles uniquement", "Le long des limites des plaques", "Au hasard sur le globe"], reponse: 2, explication: "Ils se concentrent le long des **limites des plaques lithosphériques**, là où les plaques s'écartent, se rapprochent ou coulissent." },
        { type: "saisie", question: "Comment appelle-t-on la cassure dans les roches le long de laquelle elles se déplacent lors d'un séisme ?", reponses: ["faille", "une faille", "la faille"], explication: "C'est une **faille**. La rupture se produit au foyer, situé sur la faille." },
        { type: "redaction", question: "Dans une région, deux villages A et B ont été touchés par le même séisme. A est à 5 km de l'épicentre et a subi une intensité VIII ; B est à 60 km et a subi une intensité IV. Explique ces différences, puis propose deux mesures pour limiter les dégâts lors d'un futur séisme.", corrige: `**Explication** : les deux villages ont subi le même séisme, donc la même **magnitude** (énergie libérée au foyer). Mais l'**intensité** mesure les effets en un lieu. Les ondes sismiques partent du foyer et **perdent de l'énergie en s'éloignant** : le village A, proche de l'épicentre (5 km), a reçu des secousses beaucoup plus fortes (intensité VIII, dégâts importants) que le village B, situé à 60 km (intensité IV, secousses ressenties mais peu de dégâts).

**Mesures de prévention** (deux parmi) :
- construire des bâtiments **parasismiques** (structures qui résistent aux secousses) ;
- informer la population et faire des **exercices** (se protéger sous une table solide, s'éloigner des fenêtres) ;
- éviter de construire sur les zones les plus fragiles ;
- prévoir des plans de secours.` },
      ],
    },
    {
      id: "vivant-classification-cellule",
      titre: "Le vivant : cellule, classification et biodiversité",
      theme: "Le vivant et son évolution",
      cours: `
## Les caractéristiques du vivant
Un être vivant **naît**, **se nourrit**, **respire**, **grandit**, **se reproduit** et **meurt**. Un objet inerte (une pierre) ne fait rien de tout cela.

## La cellule, unité du vivant
Tous les êtres vivants sont constitués de **cellules** : c'est l'**unité du vivant**. Certains n'ont qu'une cellule (êtres **unicellulaires** : bactéries, levures, paramécies), d'autres en ont des milliards (êtres **pluricellulaires** : toi, un chêne). On les observe au **microscope**.

| Élément | Cellule animale | Cellule végétale |
|---|---|---|
| Membrane (limite la cellule) | oui | oui |
| Cytoplasme (intérieur) | oui | oui |
| Noyau (contient l'information génétique, l'ADN) | oui | oui |
| Paroi (enveloppe rigide) | non | oui |
| Chloroplastes (verts, photosynthèse) | non | oui (parties vertes) |
| Grande vacuole | non | oui |

>! **Calcul du grossissement** : grossissement du microscope = grossissement de l'oculaire × grossissement de l'objectif. Exemple : oculaire ×10 et objectif ×40 → grossissement ×400.

## La diversité du vivant et la biodiversité
La **biodiversité** est la diversité du vivant à trois niveaux : la diversité des **écosystèmes**, des **espèces** et des **individus** au sein d'une espèce (diversité génétique).

Une **espèce** est un ensemble d'individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant des descendants **fertiles**.

## Classer les êtres vivants
Les scientifiques classent les êtres vivants selon les **caractères (attributs) qu'ils possèdent en commun**, jamais selon ce qu'ils n'ont pas, ni selon leur mode de vie ou leur lieu de vie.

On forme des **groupes emboîtés** (comme des boîtes les unes dans les autres) :
- **Vertébrés** : squelette interne avec une colonne vertébrale.
- **Tétrapodes** : vertébrés avec 4 membres.
- **Mammifères** : tétrapodes avec des poils et des mamelles.
- **Oiseaux** : tétrapodes avec des plumes.
- **Arthropodes** : squelette externe et pattes articulées (insectes, araignées, crustacés).
- **Insectes** : arthropodes à 6 pattes ; **arachnides** : 8 pattes.

Exemple : la chauve-souris vole mais n'a pas de plumes ; elle a des poils et des mamelles : c'est un **mammifère**. La baleine vit dans l'eau mais c'est aussi un mammifère.

## Unité et parenté : l'évolution
Les êtres vivants partagent des caractères communs parce qu'ils ont des **ancêtres communs**. Les espèces se transforment au cours des temps géologiques : c'est l'**évolution**. Des espèces apparaissent, d'autres disparaissent (comme les dinosaures non aviens, il y a 66 millions d'années).

> **À retenir** :
> - Tous les êtres vivants sont faits de cellules (membrane, cytoplasme, noyau).
> - La cellule végétale a en plus une paroi, des chloroplastes et une vacuole.
> - On classe selon les **caractères partagés**, en groupes emboîtés.
> - Biodiversité = diversité des écosystèmes, des espèces et des individus.
`,
      exercices: [
        { type: "vf", question: "Une bactérie est un être vivant unicellulaire.", reponse: true, explication: "Une bactérie est formée d'**une seule cellule** : c'est un être unicellulaire." },
        { type: "qcm", question: "Quel élément trouve-t-on dans une cellule végétale mais pas dans une cellule animale ?", choix: ["La paroi", "La membrane", "Le noyau", "Le cytoplasme"], reponse: 0, explication: "La **paroi** (ainsi que les chloroplastes et la grande vacuole) est propre aux cellules végétales. Noyau, membrane et cytoplasme existent dans les deux." },
        { type: "saisie", question: "Un microscope a un oculaire ×10 et un objectif ×40. Quel est le grossissement total ? (nombre)", reponses: ["400", "x400", "×400"], explication: "Grossissement = 10 × 40 = **400**." },
        { type: "qcm", question: "La chauve-souris possède des poils et des mamelles. Dans quel groupe la classe-t-on ?", choix: ["Les oiseaux", "Les poissons", "Les insectes", "Les mammifères"], reponse: 3, explication: "On classe selon les caractères partagés : poils et mamelles → **mammifères**. Le fait de voler n'est pas un critère de classification." },
        { type: "vf", question: "On peut regrouper le requin et la baleine car ils vivent tous les deux dans la mer.", reponse: false, explication: "Le lieu de vie n'est pas un critère de classification. La baleine (poils à la naissance, mamelles) est un mammifère ; le requin n'en est pas un." },
        { type: "saisie", question: "Quel élément de la cellule contient l'information génétique ?", reponses: ["noyau", "le noyau"], explication: "Le **noyau** contient l'ADN, support de l'information génétique." },
        { type: "qcm", question: "Une araignée a 8 pattes articulées et un squelette externe. C'est :", choix: ["un insecte", "un arachnide", "un vertébré", "un mammifère"], reponse: 1, explication: "Squelette externe et pattes articulées → arthropode ; 8 pattes → **arachnide**. Les insectes ont 6 pattes." },
        { type: "qcm", question: "Lequel de ces éléments n'est PAS un niveau de la biodiversité ?", choix: ["La diversité des espèces", "La diversité des écosystèmes", "La diversité des roches", "La diversité des individus d'une espèce"], reponse: 2, explication: "La biodiversité concerne le **vivant** : écosystèmes, espèces et individus (diversité génétique). Les roches ne sont pas vivantes." },
        { type: "redaction", question: "Voici des animaux : truite, moineau, chat, criquet, grenouille. Leurs caractères : la truite a une colonne vertébrale et des nageoires ; le moineau a une colonne vertébrale, 4 membres et des plumes ; le chat a une colonne vertébrale, 4 membres, des poils et des mamelles ; la grenouille a une colonne vertébrale et 4 membres ; le criquet a un squelette externe et 6 pattes articulées. Construis une classification en groupes emboîtés et justifie-la.", corrige: `On regroupe les animaux selon les **caractères qu'ils partagent** :

- **Vertébrés** (colonne vertébrale) : truite, moineau, chat, grenouille.
  - **Tétrapodes** (4 membres) : moineau, chat, grenouille.
    - **Oiseaux** (plumes) : moineau.
    - **Mammifères** (poils et mamelles) : chat.
    - La grenouille reste dans les tétrapodes sans sous-groupe ici.
  - La truite (nageoires) reste dans les vertébrés, hors des tétrapodes.
- **Arthropodes** (squelette externe, pattes articulées) : criquet.
  - **Insectes** (6 pattes) : criquet.

Les groupes sont **emboîtés** : le groupe des mammifères est contenu dans celui des tétrapodes, lui-même contenu dans celui des vertébrés. On ne classe jamais en fonction de ce que les animaux n'ont pas ou de leur lieu de vie.` },
      ],
    },
    {
      id: "demarche-scientifique",
      titre: "La démarche scientifique : expériences et graphiques",
      theme: "Méthodes et démarche scientifique",
      cours: `
## Les étapes de la démarche scientifique
1. **Observation** d'un fait surprenant ou intéressant.
2. **Problème** : on formule une question scientifique (« Pourquoi... ? », « Quelle est l'influence de... ? »).
3. **Hypothèse** : une explication possible, qu'il faudra tester (« Je suppose que... »).
4. **Expérience** : on teste l'hypothèse. On prévoit ce qu'on devrait observer si l'hypothèse est juste.
5. **Résultats** : ce qu'on observe ou mesure (tableau, graphique).
6. **Interprétation** et **conclusion** : l'hypothèse est-elle validée ou rejetée ?

## Une bonne expérience
- On ne fait varier **qu'un seul paramètre** (facteur) à la fois ; tout le reste est identique.
- On réalise une **expérience témoin** : elle est identique, sauf pour le paramètre testé. Elle sert de comparaison.
- On **répète** l'expérience (ou on utilise plusieurs individus) pour que le résultat soit fiable.

>! **Exemple** : on veut savoir si la lumière est nécessaire à la croissance des plants de haricot. Lot 1 : 10 plants à la lumière (témoin). Lot 2 : 10 plants à l'obscurité. Même terre, même eau, même température. Seule la lumière change.

## Lire et construire un graphique
- L'axe horizontal (**abscisse**) porte en général le paramètre que l'on fait varier (souvent le temps).
- L'axe vertical (**ordonnée**) porte la grandeur mesurée.
- Chaque axe a un **titre** et une **unité** ; la graduation est régulière.
- Le graphique a un **titre** : « Évolution de [grandeur mesurée] en fonction de [paramètre] ».

Pour décrire une courbe, on indique les valeurs de départ et d'arrivée, on repère quand la grandeur **augmente**, **diminue** ou **reste stable**, en citant des valeurs chiffrées.

| Mot | Sens |
|---|---|
| augmente | la courbe monte |
| diminue | la courbe descend |
| reste stable / constante | la courbe est horizontale (plateau) |

> **À retenir** :
> - Problème → hypothèse → expérience → résultats → conclusion.
> - Un seul paramètre varie ; on compare toujours à un **témoin**.
> - Un graphique : un titre, deux axes avec titres et unités.
> - Pour décrire, on cite des valeurs ; pour interpréter, on explique le « pourquoi ».
`,
      exercices: [
        { type: "qcm", question: "Dans la démarche scientifique, que fait-on juste après avoir formulé le problème ?", choix: ["On propose une hypothèse", "On conclut", "On publie les résultats", "On trace le graphique"], reponse: 0, explication: "Après le problème, on propose une **hypothèse** (explication possible), puis on la teste par une expérience." },
        { type: "saisie", question: "Comment appelle-t-on l'expérience qui sert de référence pour comparer, où le paramètre testé n'est pas modifié ?", reponses: ["témoin", "expérience témoin", "l'expérience témoin", "le témoin", "une expérience témoin"], explication: "C'est l'**expérience témoin** : elle permet de vérifier que c'est bien le paramètre testé qui est responsable de la différence." },
        { type: "vf", question: "Pour tester l'effet de la lumière et de l'eau sur une plante, on peut changer les deux en même temps dans une seule expérience.", reponse: false, explication: "Si on change deux paramètres à la fois, on ne peut pas savoir lequel est responsable du résultat. On ne fait varier **qu'un seul paramètre** à la fois." },
        { type: "qcm", question: "Sur un graphique « Évolution de la température en fonction du temps », que place-t-on en abscisse ?", choix: ["La température", "Le temps", "Le titre", "Rien"], reponse: 1, explication: "Le titre « Y en fonction de X » indique que X (ici **le temps**) est en abscisse (axe horizontal) et Y (la température) en ordonnée." },
        { type: "vf", question: "Pour qu'un résultat soit fiable, il vaut mieux répéter l'expérience ou utiliser plusieurs individus.", reponse: true, explication: "Un seul essai peut être faussé par un hasard (une graine abîmée, une erreur de mesure). **Répéter** rend le résultat plus fiable." },
        { type: "qcm", question: "Une courbe horizontale signifie que la grandeur mesurée :", choix: ["augmente rapidement", "diminue", "reste constante", "est nulle"], reponse: 2, explication: "Une portion horizontale (plateau) signifie que la grandeur **reste constante** pendant cette période." },
        { type: "saisie", question: "Comment appelle-t-on l'explication possible que l'on propose avant de faire une expérience ?", reponses: ["hypothèse", "une hypothèse", "l'hypothèse"], explication: "C'est une **hypothèse** : elle sera validée ou rejetée par l'expérience." },
        { type: "redaction", question: "Des élèves mesurent la masse d'une plante de 5 g au départ. Elle est arrosée à 10 °C : sa masse passe à 7 g après 3 semaines. Une plante identique, arrosée de la même façon mais placée à 25 °C, passe à 15 g. Décris et interprète ces résultats. Quelle est l'expérience témoin ? La conclusion est-elle fiable ?", corrige: `**Description** : les deux plantes ont la même masse au départ (5 g). Après 3 semaines, la plante à 10 °C a gagné 2 g (7 − 5) et celle à 25 °C a gagné 10 g (15 − 5), soit 5 fois plus.

**Interprétation** : seul le paramètre **température** est différent (même arrosage, même plante, même durée). La différence de croissance est donc due à la température : dans ces conditions, une température de 25 °C favorise la croissance de cette plante par rapport à 10 °C.

**Témoin** : il n'y a pas ici de « témoin » au sens strict ; les deux plantes se servent mutuellement de comparaison. On peut choisir comme témoin la plante placée dans les conditions habituelles de culture (ici 25 °C, température d'une pièce chauffée). L'important est qu'**un seul paramètre** (la température) varie entre les deux lots.

**Fiabilité** : avec une seule plante par lot, le résultat est peu fiable (une plante peut être malade). Il faudrait **répéter** l'expérience avec plusieurs plantes par lot, et vérifier que la lumière reçue est identique.` },
      ],
    },
    {
      id: "respiration-milieux",
      titre: "Respiration et occupation des milieux",
      theme: "Le vivant et son évolution",
      cours: `
## Qu'est-ce que respirer ?
**Respirer**, c'est **prélever du dioxygène** (O₂) dans le milieu et **rejeter du dioxyde de carbone** (CO₂). Tous les êtres vivants respirent : animaux, végétaux, champignons, la plupart des bactéries. Ces échanges entre l'organisme et le milieu sont des **échanges gazeux**.

>! **Test du dioxyde de carbone** : l'**eau de chaux** se **trouble** (devient blanchâtre) en présence de dioxyde de carbone. Pour le dioxygène, on utilise une sonde à dioxygène reliée à un ordinateur (ExAO), qui mesure sa concentration.

## Des organes respiratoires adaptés au milieu
| Organe | Milieu | Exemples |
|---|---|---|
| Poumons | aérien | mammifères, oiseaux, reptiles, grenouille adulte |
| Branchies | aquatique | poissons, têtard, moule, crabe |
| Trachées (tubes ouverts par des orifices, les stigmates) | aérien (ou aquatique pour certaines larves) | insectes |
| Peau | milieu humide | ver de terre, grenouille (en partie) |

Ces organes ont des points communs : une **grande surface** d'échange, une **paroi très fine** et souvent riche en vaisseaux sanguins.

L'eau contient beaucoup moins de dioxygène que l'air : un poisson doit faire circuler beaucoup d'eau sur ses branchies. Une eau chaude ou polluée contient encore moins de dioxygène.

## La respiration et la photosynthèse chez les végétaux
- Les végétaux **respirent jour et nuit** (ils prélèvent du O₂ et rejettent du CO₂), par des petits orifices des feuilles, les **stomates**.
- **À la lumière**, leurs parties vertes réalisent aussi la **photosynthèse** : elles absorbent du CO₂ et rejettent du O₂ pour fabriquer leur matière. Le jour, la photosynthèse est plus intense que la respiration : globalement, la plante rejette du dioxygène.
- **À l'obscurité**, il n'y a que la respiration : la plante rejette du CO₂.

## L'occupation des milieux
La répartition des êtres vivants dépend des **conditions du milieu** : température, lumière, humidité, teneur en dioxygène. Par exemple, on trouve des cloportes dans des lieux sombres et humides.

Au cours des saisons, les êtres vivants s'adaptent aux conditions défavorables (hiver) :
- **vie ralentie** : hibernation (marmotte), graines, bourgeons, œufs qui résistent au froid ;
- **migration** vers des régions plus favorables (hirondelles) ;
- certains végétaux perdent leurs feuilles ou ne survivent que sous forme de graines.

> **À retenir** :
> - Respirer = prélever O₂ et rejeter CO₂ (l'eau de chaux se trouble avec le CO₂).
> - Poumons, branchies, trachées, peau : grande surface et paroi fine.
> - Les végétaux respirent jour et nuit ; à la lumière, ils font aussi la photosynthèse.
> - La répartition des êtres vivants dépend des conditions du milieu, qui varient avec les saisons.
`,
      exercices: [
        { type: "qcm", question: "Respirer, c'est :", choix: ["prélever du O₂ et rejeter du CO₂", "prélever du CO₂ et rejeter du O₂", "prélever de l'eau", "rejeter de l'azote"], reponse: 0, explication: "La respiration consiste à **prélever du dioxygène** et à **rejeter du dioxyde de carbone**." },
        { type: "saisie", question: "Quel liquide se trouble en présence de dioxyde de carbone ?", reponses: ["eau de chaux", "l'eau de chaux", "de l'eau de chaux"], explication: "L'**eau de chaux** se trouble en présence de CO₂ : c'est le test du dioxyde de carbone." },
        { type: "qcm", question: "Quel est l'organe respiratoire d'un poisson ?", choix: ["Les poumons", "Les trachées", "Les stomates", "Les branchies"], reponse: 3, explication: "Les poissons respirent grâce à des **branchies**, qui prélèvent le dioxygène dissous dans l'eau." },
        { type: "vf", question: "Les plantes ne respirent pas : elles font seulement la photosynthèse.", reponse: false, explication: "Les plantes **respirent jour et nuit**. La photosynthèse s'ajoute à la respiration seulement à la lumière, dans les parties vertes." },
        { type: "qcm", question: "Les insectes respirent grâce à :", choix: ["des trachées", "des branchies", "des poumons", "leurs ailes"], reponse: 0, explication: "Les insectes ont des **trachées**, petits tubes qui amènent l'air jusqu'aux organes ; ils s'ouvrent par des stigmates." },
        { type: "vf", question: "Une eau plus chaude contient moins de dioxygène dissous qu'une eau froide.", reponse: true, explication: "Plus l'eau est chaude, moins elle peut dissoudre de dioxygène : c'est pourquoi les poissons souffrent lors des canicules." },
        { type: "saisie", question: "Comment appelle-t-on l'état de vie ralentie de la marmotte pendant l'hiver ?", reponses: ["hibernation", "l'hibernation"], explication: "C'est l'**hibernation** : la température et le rythme respiratoire diminuent fortement, ce qui économise l'énergie." },
        { type: "redaction", question: "On place un plant de géranium dans un bocal fermé, à l'obscurité, avec une sonde à dioxygène. En 1 heure, la teneur en dioxygène passe de 20,9 % à 20,5 %. On recommence à la lumière : elle passe de 20,9 % à 21,4 %. Interprète ces deux résultats.", corrige: `**À l'obscurité** : la teneur en dioxygène **diminue** de 20,9 % à 20,5 % (−0,4 point). La plante **consomme** du dioxygène : elle **respire**. À l'obscurité, la photosynthèse est impossible ; seule la respiration a lieu.

**À la lumière** : la teneur en dioxygène **augmente** de 20,9 % à 21,4 % (+0,5 point). La plante **rejette** plus de dioxygène qu'elle n'en consomme : à la lumière, elle réalise la **photosynthèse**, qui produit du dioxygène, en plus de la respiration. La photosynthèse est plus intense que la respiration.

> Conclusion : la plante respire en permanence ; à la lumière, la photosynthèse masque la respiration.` },
      ],
    },
    {
      id: "nutrition-organes",
      titre: "Nutrition et besoins des organes : digestion, respiration, circulation",
      theme: "Le corps humain et la santé",
      cours: `
## Les besoins des organes
Les organes (muscles, cerveau, cœur...) ont besoin en permanence de **nutriments** (comme le glucose) et de **dioxygène** pour produire l'**énergie** dont ils ont besoin. Ils rejettent du **dioxyde de carbone** et des **déchets** (comme l'urée). Trois appareils travaillent ensemble pour répondre à ces besoins.

## La digestion : des aliments aux nutriments
Le **tube digestif** : bouche → œsophage → estomac → intestin grêle → gros intestin → anus. Les **glandes digestives** (glandes salivaires, foie, pancréas) et les parois de l'estomac et de l'intestin produisent des **sucs digestifs** contenant des **enzymes**.

La **digestion** est la transformation des aliments en **nutriments**, des molécules assez petites pour passer dans le sang. Elle est **mécanique** (mastication, brassage de l'estomac) et **chimique** (action des enzymes).

>! **Expérience** : on mélange de l'amidon et de la salive à 37 °C. Au départ, l'eau iodée devient bleu-noir (présence d'amidon). Après 15 minutes, elle ne bleuit plus : l'amidon a été transformé en sucre plus simple par une enzyme de la salive. Le tube témoin (amidon + eau, sans salive) bleuit toujours.

L'**absorption** : les nutriments passent dans le sang au niveau de l'**intestin grêle**, qui est très long (environ 7 m) et dont la paroi, très fine et richement irriguée de capillaires, est plissée de **villosités** : cela donne une très grande surface d'échange (plusieurs dizaines de m², bien plus que la surface de ta peau, environ 2 m²). Les restes non digérés sont éliminés sous forme d'excréments.

## La respiration chez l'humain
L'air entre par le nez ou la bouche, passe par la **trachée**, les **bronches**, les **bronchioles** et arrive dans les **alvéoles pulmonaires**. Là, le dioxygène passe dans le sang et le dioxyde de carbone passe du sang dans l'air.

| Gaz | Air inspiré | Air expiré |
|---|---|---|
| Dioxygène | environ 21 % | environ 16 % |
| Dioxyde de carbone | environ 0,04 % | environ 4 % |

## La circulation sanguine
Le **cœur**, un muscle creux, met le sang en mouvement dans des **vaisseaux** :
- les **artères** partent du cœur vers les organes ;
- les **veines** ramènent le sang des organes vers le cœur ;
- les **capillaires**, très fins, irriguent les organes : c'est là que se font les échanges.

Le sang **transporte** : le dioxygène (fixé sur les globules rouges), les nutriments, le dioxyde de carbone et les déchets. Le CO₂ est éliminé par les poumons, l'urée par les **reins** (dans l'urine).

> **À retenir** :
> - Les organes consomment nutriments et O₂, rejettent CO₂ et déchets.
> - Digestion : aliments → nutriments grâce aux enzymes ; absorption dans l'intestin grêle.
> - Échanges gazeux dans les alvéoles pulmonaires.
> - Le sang, mis en mouvement par le cœur, transporte tout ; les échanges ont lieu dans les capillaires.
`,
      exercices: [
        { type: "qcm", question: "Où se fait principalement l'absorption des nutriments ?", choix: ["Dans l'estomac", "Dans l'œsophage", "Dans le gros intestin", "Dans l'intestin grêle"], reponse: 3, explication: "L'**intestin grêle** a une paroi fine et une très grande surface grâce à ses villosités : c'est là que les nutriments passent dans le sang." },
        { type: "saisie", question: "Comment appelle-t-on les molécules contenues dans les sucs digestifs qui transforment les aliments ?", reponses: ["enzymes", "des enzymes", "les enzymes", "enzyme", "enzymes digestives"], explication: "Ce sont les **enzymes digestives**, comme celle de la salive qui transforme l'amidon." },
        { type: "vf", question: "Les artères ramènent le sang des organes vers le cœur.", reponse: false, explication: "Ce sont les **veines** qui ramènent le sang vers le cœur. Les **artères** partent du cœur vers les organes." },
        { type: "qcm", question: "Dans quelle partie des poumons se font les échanges gazeux avec le sang ?", choix: ["La trachée", "Les bronches", "Les alvéoles pulmonaires", "Le larynx"], reponse: 2, explication: "Les **alvéoles**, minuscules sacs à paroi très fine entourés de capillaires, sont le lieu des échanges gazeux." },
        { type: "vf", question: "L'air expiré contient environ 100 fois plus de dioxyde de carbone que l'air inspiré.", reponse: true, explication: "Environ 4 % dans l'air expiré contre environ 0,04 % dans l'air inspiré : 4 ÷ 0,04 = **100**. Le CO₂ produit par les organes est rejeté par les poumons." },
        { type: "qcm", question: "Quel organe élimine l'urée du sang ?", choix: ["Les reins", "Le cœur", "L'estomac", "Les poumons"], reponse: 0, explication: "Les **reins** filtrent le sang et éliminent l'urée dans l'urine. Les poumons, eux, éliminent le CO₂." },
        { type: "saisie", question: "Quelles cellules du sang transportent le dioxygène ?", reponses: ["globules rouges", "les globules rouges", "hématies", "les hématies"], explication: "Les **globules rouges** (hématies) transportent le dioxygène grâce à l'hémoglobine." },
        { type: "redaction", question: "Tube A : amidon + salive à 37 °C. Tube B : amidon + eau à 37 °C. Après 15 min, on ajoute de l'eau iodée : le tube A reste jaune-orangé, le tube B devient bleu-noir. Interprète l'expérience. À quoi sert le tube B ?", corrige: `**Rappel** : l'eau iodée devient bleu-noir en présence d'**amidon**.

- **Tube B** : il devient bleu-noir, donc il contient encore de l'amidon. Sans salive, l'amidon n'a pas été transformé.
- **Tube A** : il ne bleuit pas, donc il n'y a plus d'amidon. Avec la salive, l'amidon a disparu : il a été **transformé** (en sucres plus simples).

La seule différence entre les deux tubes est la présence de salive : c'est donc la **salive** qui a transformé l'amidon, grâce à une **enzyme** qu'elle contient. C'est une étape de la **digestion chimique**.

**Le tube B** est le **témoin** : il montre que l'amidon ne disparaît pas tout seul à 37 °C, et permet d'attribuer la transformation à la salive.` },
      ],
    },
    {
      id: "alimentation-effort",
      titre: "Alimentation équilibrée et activité physique",
      theme: "Le corps humain et la santé",
      cours: `
## Une alimentation équilibrée
Les aliments apportent la **matière** pour construire et réparer le corps, et l'**énergie** pour fonctionner. Aucun aliment ne contient tout ce dont on a besoin : il faut **varier**.

| Groupe d'aliments | Apport principal | Conseil |
|---|---|---|
| Fruits et légumes | vitamines, fibres, minéraux | au moins 5 par jour |
| Féculents (pain, pâtes, riz) | énergie (glucides) | à chaque repas |
| Produits laitiers | calcium (os) | 2 par jour |
| Viandes, poissons, œufs, légumineuses | protéines (construction) | 1 à 2 fois par jour |
| Matières grasses | lipides (énergie) | à limiter |
| Produits sucrés | énergie rapide | à limiter |
| Eau | hydratation | seule boisson indispensable |

Les **besoins** varient selon l'**âge**, le **sexe**, l'**activité physique** et la taille. Un adolescent en croissance a des besoins importants. Trop manger favorise le surpoids ; ne pas assez manger entraîne fatigue et carences. Il faut aussi faire 4 repas réguliers, dont un vrai petit-déjeuner.

## L'activité physique et l'effort
Pendant un effort, les **muscles** travaillent plus : ils consomment plus de **dioxygène** et de **nutriments** et rejettent plus de **dioxyde de carbone**. L'organisme s'adapte :
- la **fréquence respiratoire** (nombre de mouvements respiratoires par minute) augmente, ainsi que le volume d'air inspiré ;
- la **fréquence cardiaque** (battements du cœur par minute) augmente : le sang circule plus vite et apporte plus de O₂ et de nutriments aux muscles.

>! **Repère** : la fréquence cardiaque au repos est d'environ 70 battements par minute chez l'adulte (un peu plus chez l'enfant). La fréquence cardiaque maximale se calcule environ par : 220 − âge. Pour un élève de 12 ans : 220 − 12 = 208 battements par minute.

Après l'effort, pendant la **récupération**, les fréquences diminuent progressivement pour revenir aux valeurs de repos. Plus on est entraîné, plus la récupération est rapide.

## Une pratique sportive responsable
- S'**échauffer** avant, s'**hydrater**, respecter des temps de **récupération** et de **sommeil**.
- Adapter l'intensité à ses capacités.
- Refuser le **dopage** (produits interdits, dangereux pour la santé).
- Il est recommandé aux jeunes de pratiquer au moins **1 heure** d'activité physique par jour.

> **À retenir** :
> - Une alimentation équilibrée est variée et adaptée aux besoins (âge, sexe, activité).
> - Pendant l'effort, fréquences cardiaque et respiratoire augmentent pour apporter plus de O₂ et de nutriments aux muscles.
> - Échauffement, hydratation, récupération et sommeil protègent la santé.
`,
      exercices: [
        { type: "qcm", question: "Quel groupe d'aliments apporte principalement le calcium nécessaire aux os ?", choix: ["Les féculents", "Les matières grasses", "Les produits sucrés", "Les produits laitiers"], reponse: 3, explication: "Les **produits laitiers** (lait, yaourt, fromage) sont la principale source de calcium." },
        { type: "vf", question: "Pendant un effort, la fréquence cardiaque diminue pour économiser l'énergie.", reponse: false, explication: "La fréquence cardiaque **augmente** pendant l'effort : le cœur envoie plus de sang aux muscles, qui ont besoin de plus de O₂ et de nutriments." },
        { type: "saisie", question: "Selon la formule 220 − âge, quelle est la fréquence cardiaque maximale théorique d'une personne de 40 ans ? (battements par minute)", reponses: ["180", "180 battements par minute", "180 bpm"], explication: "220 − 40 = **180** battements par minute." },
        { type: "qcm", question: "Quelle est la seule boisson indispensable ?", choix: ["Le jus de fruits", "Le soda", "L'eau", "Le lait"], reponse: 2, explication: "L'**eau** est la seule boisson indispensable. Les sodas et jus contiennent beaucoup de sucre." },
        { type: "vf", question: "Les besoins alimentaires d'un sportif de 15 ans sont les mêmes que ceux d'une personne âgée sédentaire.", reponse: false, explication: "Les besoins dépendent de l'**âge**, du **sexe** et de l'**activité physique** : un adolescent sportif a besoin de plus d'énergie." },
        { type: "qcm", question: "Pourquoi la fréquence respiratoire augmente-t-elle pendant l'effort ?", choix: ["Pour apporter plus de dioxygène aux muscles et rejeter plus de CO₂", "Pour rejeter plus de dioxygène", "Pour refroidir les poumons", "Parce que les muscles produisent de l'oxygène"], reponse: 0, explication: "Les muscles consomment plus de **dioxygène** et produisent plus de **CO₂** : respirer plus vite permet d'augmenter les échanges gazeux." },
        { type: "saisie", question: "Comment appelle-t-on la phase après l'effort pendant laquelle les fréquences reviennent aux valeurs de repos ?", reponses: ["récupération", "la récupération"], explication: "C'est la **récupération**. Elle est plus rapide chez une personne entraînée." },
        { type: "redaction", question: "On mesure la fréquence cardiaque de Léa : 75 battements/min au repos, 160 battements/min après 5 minutes de course, puis 120 battements/min 2 minutes après l'arrêt et 78 battements/min 5 minutes après l'arrêt. Décris l'évolution de sa fréquence cardiaque et explique-la.", corrige: `**Description** :
- Au repos : 75 battements/min.
- Pendant l'effort, la fréquence cardiaque **augmente** jusqu'à 160 battements/min, soit 85 battements de plus (plus du double).
- Après l'arrêt, elle **diminue** : 120 battements/min après 2 min, puis 78 battements/min après 5 min, presque la valeur de repos.

**Explication** : pendant la course, les **muscles** travaillent davantage. Ils ont besoin de plus de **dioxygène** et de **nutriments** et rejettent plus de **dioxyde de carbone**. Le cœur bat plus vite pour que le **sang** circule plus rapidement et apporte ces éléments aux muscles (et emporte le CO₂).

Après l'effort, les besoins des muscles diminuent : c'est la **récupération**, la fréquence cardiaque revient progressivement à sa valeur de repos.` },
      ],
    },
    {
      id: "reproduction-peuplement",
      titre: "Reproduction sexuée, reproduction asexuée et peuplement des milieux",
      theme: "Le vivant et son évolution",
      cours: `
## La reproduction sexuée
La **reproduction sexuée** fait intervenir **deux parents** (un mâle et une femelle). Chacun produit des cellules reproductrices, les **gamètes** :
- gamète mâle : le **spermatozoïde** (chez les animaux) ; le noyau contenu dans le **grain de pollen** (chez les plantes à fleurs) ;
- gamète femelle : l'**ovule** (chez les animaux, on parle aussi d'ovocyte) ; l'ovule situé dans le **pistil** (chez les plantes).

La **fécondation** est la rencontre et la fusion d'un gamète mâle et d'un gamète femelle. Elle donne une **cellule-œuf**, qui se développe en **embryon**.

| Fécondation | Où ? | Exemples |
|---|---|---|
| Externe | dans le milieu (eau) | la plupart des poissons, grenouille |
| Interne | dans le corps de la femelle | mammifères, oiseaux, reptiles, insectes |

- **Ovipare** : le petit se développe dans un œuf pondu (oiseaux, poissons).
- **Vivipare** : le petit se développe dans le ventre de la mère (la plupart des mammifères).

Chez les **plantes à fleurs** : les **étamines** produisent le pollen ; le **pistil** contient les ovules. La **pollinisation** est le transport du pollen jusqu'au pistil (par le vent ou les insectes pollinisateurs comme l'abeille). Après la fécondation, l'ovule devient **graine** et le pistil devient **fruit**.

Chaque descendant est **unique** : il reçoit un mélange des caractères de ses deux parents. La reproduction sexuée crée de la **diversité**.

## La reproduction asexuée
La **reproduction asexuée** se fait à partir d'**un seul individu**, sans gamètes ni fécondation. Les descendants sont **identiques** au parent (des **clones**).

| Mode | Exemple |
|---|---|
| Stolons (tiges rampantes) | fraisier |
| Tubercules | pomme de terre |
| Bulbes | tulipe, ail |
| Bouturage (un fragment donne une plante entière) | géranium, saule |
| Division d'une cellule en deux | bactéries |
| Bourgeonnement, fragmentation | hydre, étoile de mer |

## Le peuplement des milieux
Un milieu est **peuplé** grâce à la reproduction et à la **dispersion** des individus :
- les graines et fruits sont dispersés par le **vent** (pissenlit, érable), l'**eau** (noix de coco) ou les **animaux** (fruits mangés, graines accrochées aux poils) ;
- les animaux se déplacent et colonisent de nouveaux milieux.

Un milieu nu (après un incendie, une coulée de lave) est **colonisé** progressivement : d'abord des lichens et mousses, puis des herbes, des arbustes et enfin une forêt. Le peuplement dépend aussi des conditions du milieu et de l'action de l'humain.

> **À retenir** :
> - Sexuée : 2 parents, gamètes, fécondation → cellule-œuf ; descendants tous différents.
> - Asexuée : 1 seul parent, pas de gamètes ; descendants identiques (clones).
> - Fleur : étamines (pollen) et pistil (ovules) ; pollinisation puis fécondation → graines et fruit.
> - La dispersion et la reproduction permettent le peuplement des milieux.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on la fusion d'un gamète mâle et d'un gamète femelle ?", reponses: ["fécondation", "la fécondation"], explication: "C'est la **fécondation** : elle donne une cellule-œuf." },
        { type: "qcm", question: "Le fraisier se multiplie grâce à des tiges rampantes appelées :", choix: ["stolons", "bulbes", "tubercules", "étamines"], reponse: 0, explication: "Les **stolons** sont des tiges rampantes qui forment de nouveaux fraisiers : c'est une reproduction asexuée." },
        { type: "vf", question: "Dans la reproduction asexuée, les descendants sont génétiquement identiques au parent.", reponse: true, explication: "Il n'y a qu'un seul parent et pas de fécondation : les descendants sont des **clones**." },
        { type: "qcm", question: "Quelle partie de la fleur produit le pollen ?", choix: ["Le pistil", "Les pétales", "Les étamines", "Les sépales"], reponse: 2, explication: "Les **étamines** sont les organes mâles qui produisent le pollen. Le pistil est l'organe femelle." },
        { type: "vf", question: "Chez la grenouille, la fécondation est interne.", reponse: false, explication: "Chez la grenouille, la femelle pond ses ovules dans l'eau et le mâle y libère ses spermatozoïdes : la fécondation est **externe**." },
        { type: "saisie", question: "Comment appelle-t-on le transport du pollen des étamines jusqu'au pistil ?", reponses: ["pollinisation", "la pollinisation"], explication: "C'est la **pollinisation**, assurée par le vent ou par des insectes pollinisateurs." },
        { type: "qcm", question: "Les fruits du pissenlit ont une petite aigrette. Ils sont dispersés :", choix: ["par le vent", "par l'eau", "par les fourmis uniquement", "ils ne sont pas dispersés"], reponse: 0, explication: "L'aigrette agit comme un parachute : les fruits sont dispersés par le **vent**." },
        { type: "qcm", question: "Après la fécondation, que devient le pistil de la fleur ?", choix: ["Une graine", "Un fruit", "Une étamine", "Un bulbe"], reponse: 1, explication: "Le pistil devient le **fruit** et les ovules fécondés deviennent les **graines**." },
        { type: "redaction", question: "Un jardinier veut obtenir beaucoup de rosiers exactement identiques à un rosier qu'il aime. Il hésite entre semer des graines de ce rosier et faire des boutures. Que lui conseilles-tu ? Justifie en comparant les deux modes de reproduction.", corrige: `Je lui conseille de faire des **boutures**.

- Les **graines** sont issues de la **reproduction sexuée** : elles proviennent d'une fécondation entre un gamète mâle (pollen, qui peut venir d'un autre rosier) et un gamète femelle. Chaque graine reçoit un mélange des caractères des deux parents : les rosiers obtenus seront **tous différents** et pas forcément identiques au rosier choisi.
- Le **bouturage** est une **reproduction asexuée** : un fragment de tige du rosier développe des racines et donne une plante entière. Il n'y a qu'un seul parent et pas de fécondation : les nouveaux rosiers sont des **clones**, identiques au rosier de départ.

> Le bouturage permet donc d'obtenir rapidement de nombreux rosiers identiques à celui qu'il aime.` },
      ],
    },
    {
      id: "ecosystemes-humain",
      titre: "Écosystèmes et action de l'être humain",
      theme: "La planète Terre, l'environnement et l'action humaine",
      cours: `
## Qu'est-ce qu'un écosystème ?
Un **écosystème** est formé de deux éléments en interaction :
- le **biotope** : le milieu de vie et ses caractéristiques physiques (sol, eau, lumière, température) ;
- la **biocénose** : l'ensemble des êtres vivants qui y vivent.

Exemples : une mare, une forêt, une prairie, un récif de corail.

## Les relations alimentaires
Une **chaîne alimentaire** montre qui mange qui. La flèche signifie **« est mangé par »** (elle indique le sens de passage de la matière).

>! **Exemple** : herbe → criquet → grenouille → héron. L'herbe est mangée par le criquet, qui est mangé par la grenouille...

| Rôle | Définition | Exemple |
|---|---|---|
| Producteur | fabrique sa matière à partir de matière minérale, grâce à la lumière (photosynthèse) | végétaux chlorophylliens, algues |
| Consommateur primaire | mange des producteurs (herbivore) | criquet, lapin |
| Consommateur secondaire | mange des consommateurs primaires (carnivore) | grenouille, renard |
| Décomposeur | transforme la matière morte (feuilles, cadavres, excréments) en matière minérale | champignons, bactéries (aidés par les vers de terre et les cloportes, qui fragmentent la matière morte) |

Toutes les chaînes commencent par un **producteur**. L'ensemble des chaînes alimentaires reliées entre elles forme un **réseau trophique**. Si une espèce disparaît, tout le réseau peut être perturbé. Grâce aux décomposeurs, la matière est **recyclée** : la matière minérale est réutilisée par les végétaux.

## L'humain modifie les écosystèmes
| Action | Conséquence |
|---|---|
| Déforestation, urbanisation | destruction des habitats, érosion des sols |
| Pollution (pesticides, plastiques, eaux usées) | intoxication des êtres vivants |
| Surpêche, chasse excessive | diminution ou disparition d'espèces |
| Introduction d'espèces invasives (frelon asiatique) | concurrence avec les espèces locales |
| Rejets de gaz à effet de serre | changement climatique |

## Préserver la biodiversité
Aires protégées (parcs nationaux, réserves), **corridors écologiques** (haies, passages à faune) qui relient les milieux, réduction des pesticides, quotas de pêche, tri et réduction des déchets, consommation responsable.

> **À retenir** :
> - Écosystème = biotope + biocénose.
> - Dans une chaîne alimentaire, la flèche signifie « est mangé par » ; elle commence toujours par un producteur.
> - Les décomposeurs recyclent la matière morte en matière minérale.
> - L'humain peut dégrader les écosystèmes, mais aussi les protéger.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on l'ensemble des êtres vivants d'un écosystème ?", reponses: ["biocénose", "la biocénose"], explication: "La **biocénose** est l'ensemble des êtres vivants ; le **biotope** est le milieu physique." },
        { type: "qcm", question: "Dans la chaîne « herbe → lapin → renard », que signifie la flèche ?", choix: ["« est mangé par »", "« mange »", "« vit avec »", "« produit »"], reponse: 0, explication: "La flèche signifie « **est mangé par** » : l'herbe est mangée par le lapin, qui est mangé par le renard." },
        { type: "vf", question: "Une chaîne alimentaire commence toujours par un végétal chlorophyllien (ou une algue).", reponse: true, explication: "Elle commence par un **producteur**, seul capable de fabriquer sa matière à partir de matière minérale grâce à la lumière." },
        { type: "qcm", question: "Quel est le rôle des champignons et des bactéries du sol ?", choix: ["Producteurs", "Consommateurs primaires", "Pollinisateurs", "Décomposeurs"], reponse: 3, explication: "Ce sont des **décomposeurs** : ils transforment la matière morte en matière minérale, réutilisée par les végétaux." },
        { type: "qcm", question: "Dans la chaîne « algue → crevette → poisson → phoque », la crevette est :", choix: ["un producteur", "un consommateur primaire", "un consommateur secondaire", "un décomposeur"], reponse: 1, explication: "La crevette mange l'algue (un producteur) : c'est un **consommateur primaire**." },
        { type: "vf", question: "Planter des haies entre les champs peut aider à préserver la biodiversité.", reponse: true, explication: "Les haies servent d'abri et de **corridors écologiques** : elles permettent aux animaux de se déplacer entre les milieux." },
        { type: "saisie", question: "Comment appelle-t-on l'ensemble des chaînes alimentaires reliées entre elles dans un écosystème ?", reponses: ["réseau trophique", "un réseau trophique", "le réseau trophique", "réseau alimentaire"], explication: "C'est un **réseau trophique** (ou réseau alimentaire)." },
        { type: "redaction", question: "Dans une région, les agriculteurs utilisent un insecticide qui tue presque tous les criquets d'une prairie. Le réseau trophique de la prairie comporte : herbe → criquet → grenouille → héron, et herbe → lapin → renard, et grenouille → couleuvre. Prévois les conséquences de la disparition des criquets sur les autres êtres vivants.", corrige: `Les criquets sont des **consommateurs primaires** : ils mangent l'herbe et sont mangés par les grenouilles.

- **Grenouilles** : elles perdent leur nourriture ; leur nombre va **diminuer**. De plus, l'insecticide peut les intoxiquer.
- **Hérons** et **couleuvres** : ils mangent des grenouilles, devenues rares ; leur nombre risque aussi de **diminuer**.
- **Herbe** : elle est moins mangée (plus de criquets) ; elle peut **se développer davantage**.
- **Lapins** : ils ont plus d'herbe disponible ; leur nombre peut **augmenter**, ce qui peut favoriser les **renards**.

> Conclusion : dans un réseau trophique, tous les êtres vivants sont liés. La disparition d'une seule espèce, causée ici par l'action humaine, perturbe tout l'écosystème.` },
      ],
    },
    {
      id: "puberte",
      titre: "La puberté",
      theme: "Le corps humain et la santé",
      cours: `
## Qu'est-ce que la puberté ?
La **puberté** est la période de la vie où le corps se transforme pour devenir capable de se **reproduire**. Elle commence en général entre **10 et 14 ans** et dure plusieurs années. Elle commence en moyenne un peu plus tôt chez les filles que chez les garçons, mais chacun a son propre rythme : c'est normal d'être en avance ou en retard sur ses camarades.

## Les transformations du corps
| Chez les filles | Chez les garçons | Chez les deux |
|---|---|---|
| développement des seins | élargissement des épaules | poussée de croissance |
| élargissement des hanches | la voix devient plus grave (la mue) | apparition de poils (aisselles, pubis) |
| apparition des **règles** | développement du pénis et des testicules, poils sur le visage | transpiration plus forte, parfois de l'acné |

Ces changements sont les **caractères sexuels secondaires**. Les **caractères sexuels primaires** sont les organes génitaux, présents dès la naissance.

## Le fonctionnement des organes reproducteurs
- Chez le garçon, les **testicules** commencent à produire des **spermatozoïdes**, en continu, toute la vie. Les premières éjaculations apparaissent.
- Chez la fille, les **ovaires** commencent à libérer un **ovule** (ovocyte) environ une fois par mois. Si l'ovule n'est pas fécondé, la paroi de l'utérus s'élimine : ce sont les **règles**, qui reviennent environ tous les **28 jours** (le cycle varie selon les personnes).

## Qui commande ces changements ?
Ces transformations sont déclenchées par des **hormones**, des substances transportées par le **sang**. À la puberté, le **cerveau** (une glande à sa base, l'hypophyse) stimule les testicules et les ovaires, qui produisent à leur tour des hormones sexuelles (testostérone chez le garçon, œstrogènes chez la fille).

## Respect et hygiène
- La puberté modifie aussi les émotions : c'est normal. On peut en parler à un adulte de confiance, à l'infirmière scolaire.
- Une bonne **hygiène** (douche quotidienne, linge propre) est importante.
- Chacun doit respecter le corps des autres et le sien : personne n'a le droit de toucher ton corps sans ton **consentement**.

> **À retenir** :
> - Puberté = période où le corps devient capable de se reproduire, vers 10-14 ans.
> - Testicules → spermatozoïdes ; ovaires → ovules ; règles environ tous les 28 jours.
> - Les changements sont commandés par des hormones transportées par le sang.
> - Chacun a son rythme ; respect et consentement sont essentiels.
`,
      exercices: [
        { type: "qcm", question: "Quels organes produisent les spermatozoïdes ?", choix: ["Les ovaires", "Les testicules", "Les reins", "L'utérus"], reponse: 1, explication: "Les **testicules** produisent les spermatozoïdes à partir de la puberté. Les ovaires libèrent les ovules." },
        { type: "vf", question: "Tous les adolescents commencent leur puberté exactement au même âge.", reponse: false, explication: "Chacun a son propre **rythme** : la puberté commence en général entre 10 et 14 ans, mais avec de grandes différences entre individus." },
        { type: "saisie", question: "Comment appelle-t-on les substances transportées par le sang qui déclenchent la puberté ?", reponses: ["hormones", "des hormones", "les hormones", "hormone"], explication: "Ce sont des **hormones**, produites par le cerveau (hypophyse), puis par les testicules et les ovaires." },
        { type: "qcm", question: "Les règles reviennent en moyenne tous les :", choix: ["7 jours", "14 jours", "28 jours", "365 jours"], reponse: 2, explication: "Le cycle dure en moyenne **28 jours**, mais il peut varier selon les personnes, surtout au début de la puberté." },
        { type: "vf", question: "La mue de la voix est un caractère sexuel secondaire.", reponse: true, explication: "La voix plus grave apparaît à la puberté : c'est un **caractère sexuel secondaire**, comme la pilosité ou le développement des seins." },
        { type: "qcm", question: "Lequel de ces changements concerne à la fois les filles et les garçons ?", choix: ["L'apparition des règles", "La mue de la voix", "La poussée de croissance", "Le développement des seins"], reponse: 2, explication: "La **poussée de croissance**, ainsi que l'apparition de poils aux aisselles et au pubis, concernent les deux." },
        { type: "redaction", question: "Explique ce que sont les règles et pourquoi elles apparaissent à la puberté.", corrige: `À la puberté, sous l'effet d'**hormones** (produites par le cerveau puis par les ovaires), les **ovaires** commencent à fonctionner : ils libèrent environ **un ovule par mois**.

Chaque mois, la paroi de l'**utérus** s'épaissit pour pouvoir accueillir un éventuel embryon. Si l'ovule n'est **pas fécondé** par un spermatozoïde, cette paroi se détache et s'élimine avec un peu de sang par le vagin : ce sont les **règles**. Elles durent quelques jours et reviennent environ tous les **28 jours**.

L'apparition des règles montre que l'organisme de la jeune fille devient capable de se reproduire.` },
      ],
    },
    {
      id: "nutrition-vegetaux",
      titre: "Les besoins des plantes vertes et la production de matière",
      theme: "Le vivant et son évolution",
      cours: `
## De quoi une plante verte a-t-elle besoin ?
Une plante verte (on dit **chlorophyllienne**) ne mange pas : elle **fabrique sa propre matière** à partir de **matière minérale** prélevée dans son milieu. Pour cela, elle a besoin :
- d'**eau** et de **sels minéraux** (nitrates, phosphates...), prélevés dans le sol par les **racines** (au niveau des **poils absorbants**, qui augmentent la surface d'échange) ;
- de **dioxyde de carbone** (CO₂), prélevé dans l'air par les **stomates** des feuilles ;
- de **lumière**, captée par la **chlorophylle**, le pigment vert contenu dans les **chloroplastes**.

On dit qu'une plante verte est un **producteur** : elle produit de la matière organique à partir de matière minérale.

## La photosynthèse
Dans les feuilles éclairées, les cellules chlorophylliennes réalisent la **photosynthèse** :

eau + dioxyde de carbone → matière organique (sucres) + dioxygène, grâce à la **lumière** et à la **chlorophylle**.

>! **Mettre en évidence l'amidon dans une feuille** : on place une plante à l'obscurité 48 h (elle utilise ses réserves), puis on cache une partie d'une feuille avec un cache opaque et on éclaire la plante plusieurs heures. On décolore la feuille (dans l'alcool chaud, au laboratoire) et on la plonge dans l'**eau iodée**. Seules les parties **éclairées** deviennent **bleu-noir** : elles ont fabriqué de l'**amidon**. La partie cachée ne se colore pas : sans lumière, pas de production de matière. Une feuille panachée (vert et blanc) montre de même que seules les parties **vertes** (avec chlorophylle) fabriquent de l'amidon.

## La circulation de la matière dans la plante
La plante possède deux sortes de vaisseaux conducteurs, qui transportent deux **sèves** différentes :

| Sève | Contenu | Trajet |
|---|---|---|
| **Sève brute** | eau + sels minéraux | des racines vers les feuilles (elle monte) |
| **Sève élaborée** | eau + sucres fabriqués par la photosynthèse | des feuilles vers tous les organes (racines, fruits, graines, tubercules) |

Les sucres apportés par la sève élaborée servent à la **croissance** et à la **respiration** des cellules ; une partie est mise en **réserve** (souvent sous forme d'amidon) dans des organes de réserve : tubercule de pomme de terre, racine de carotte, graines de haricot ou de blé, fruits.

>! **Exemple** : la pomme de terre est un tubercule (une tige souterraine) rempli d'amidon. Cet amidon a été fabriqué dans les feuilles, transporté par la sève élaborée sous forme de sucre, puis stocké. Il servira à la nouvelle plante au printemps.

## Les plantes, base des chaînes alimentaires
Toute la matière des animaux provient, directement ou non, de la matière fabriquée par les plantes vertes : c'est pourquoi **toutes les chaînes alimentaires commencent par un producteur**. La photosynthèse produit aussi le **dioxygène** que nous respirons.

>! **Attention à une erreur fréquente** : la plante ne « mange » pas la terre. Une expérience célèbre (van Helmont, XVIIe siècle) le montre : un saule planté dans un pot a gagné environ 74 kg en 5 ans, alors que la terre du pot n'avait perdu que quelques dizaines de grammes. La matière de la plante vient surtout du **CO₂ de l'air** et de l'**eau**.

> **À retenir** :
> - Une plante verte fabrique sa matière à partir d'eau, de sels minéraux et de CO₂, grâce à la lumière captée par la chlorophylle : c'est la **photosynthèse**.
> - Les racines prélèvent eau et sels minéraux ; les feuilles prélèvent le CO₂ par les stomates.
> - Sève brute (eau + sels minéraux) : racines → feuilles ; sève élaborée (sucres) : feuilles → tous les organes.
> - Une partie de la matière fabriquée est stockée dans des organes de réserve (tubercules, graines, fruits), souvent sous forme d'amidon.
`,
      exercices: [
        { type: "qcm", question: "Par quels organes une plante verte prélève-t-elle l'eau et les sels minéraux ?", choix: ["Les feuilles", "Les fruits", "Les fleurs", "Les racines"], reponse: 3, explication: "Les **racines**, grâce à leurs **poils absorbants**, prélèvent l'eau et les sels minéraux du sol. Les feuilles prélèvent le CO₂ de l'air." },
        { type: "saisie", question: "Comment s'appelle le pigment vert qui capte la lumière dans les feuilles ?", reponses: ["chlorophylle", "la chlorophylle"], explication: "C'est la **chlorophylle**, contenue dans les chloroplastes des cellules des parties vertes." },
        { type: "vf", question: "Une plante verte grossit surtout en mangeant la terre du sol.", reponse: false, explication: "La plante fabrique sa matière surtout à partir du **CO₂ de l'air** et de l'**eau**, grâce à la lumière (photosynthèse). Le sol n'apporte que l'eau et une petite quantité de sels minéraux." },
        { type: "qcm", question: "Quel gaz la plante prélève-t-elle dans l'air pour fabriquer sa matière ?", choix: ["Le dioxyde de carbone", "Le diazote", "Le dioxygène", "La vapeur d'eau"], reponse: 0, explication: "La photosynthèse utilise le **dioxyde de carbone** (CO₂), qui entre par les stomates des feuilles, et rejette du dioxygène." },
        { type: "saisie", question: "Quelle sève, contenant les sucres fabriqués par les feuilles, est distribuée à tous les organes de la plante ?", reponses: ["sève élaborée", "la sève élaborée", "seve elaboree"], explication: "C'est la **sève élaborée**. La sève brute, elle, contient l'eau et les sels minéraux et monte des racines vers les feuilles." },
        { type: "qcm", question: "On cache une partie d'une feuille, on éclaire la plante, puis on teste la feuille à l'eau iodée. Que constate-t-on ?", choix: ["Toute la feuille devient bleu-noir", "Seule la partie éclairée devient bleu-noir", "Seule la partie cachée devient bleu-noir", "Rien ne se colore"], reponse: 1, explication: "Seule la partie **éclairée** a fabriqué de l'**amidon** (coloration bleu-noir à l'eau iodée) : la lumière est indispensable à la production de matière." },
        { type: "vf", question: "Le tubercule de pomme de terre est un organe de réserve rempli d'amidon.", reponse: true, explication: "L'amidon, fabriqué dans les feuilles puis transporté par la sève élaborée, est stocké dans le **tubercule**, une tige souterraine." },
        { type: "qcm", question: "Une feuille panachée a des zones vertes et des zones blanches (sans chlorophylle). Après une journée au soleil, où trouve-t-on de l'amidon ?", choix: ["Dans les zones blanches seulement", "Dans toute la feuille", "Nulle part", "Dans les zones vertes seulement"], reponse: 3, explication: "Seules les zones **vertes**, qui contiennent de la chlorophylle, réalisent la photosynthèse et fabriquent de l'amidon." },
        { type: "redaction", question: "Au XVIIe siècle, van Helmont plante un saule de 2,3 kg dans un pot contenant 90 kg de terre sèche. Pendant 5 ans, il l'arrose seulement avec de l'eau de pluie. À la fin, le saule pèse 76,7 kg et la terre, séchée, pèse 89,94 kg. 1) Calcule la masse gagnée par le saule et la masse perdue par la terre. 2) La plante s'est-elle nourrie de terre ? 3) D'où vient la matière du saule, d'après tes connaissances ?", corrige: `1) **Calculs** :
- masse gagnée par le saule : 76,7 − 2,3 = **74,4 kg** ;
- masse perdue par la terre : 90 − 89,94 = **0,06 kg**, soit 60 g.

2) La terre n'a perdu que 60 g alors que le saule a gagné 74,4 kg, plus de 1 000 fois plus. La plante **ne s'est donc pas nourrie de terre**. (Les 60 g perdus correspondent aux sels minéraux prélevés par les racines.)

3) La plante verte fabrique sa matière par **photosynthèse**, dans ses feuilles éclairées, à partir de l'**eau** (prélevée par les racines) et du **dioxyde de carbone de l'air** (prélevé par les stomates), grâce à l'énergie de la **lumière** captée par la **chlorophylle**. Les **sels minéraux** du sol, en petite quantité, sont aussi nécessaires. Van Helmont pensait que tout venait de l'eau : il ignorait le rôle du CO₂ de l'air, découvert plus tard.

> Conclusion : la matière d'une plante verte vient surtout de l'air (CO₂) et de l'eau, transformés grâce à la lumière.` },
      ],
    },
  ],
};
