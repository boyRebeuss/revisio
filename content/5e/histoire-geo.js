export default {
  chapitres: [
    {
      id: "byzance-carolingiens",
      titre: "Byzance et l'Europe carolingienne",
      theme: "Histoire – Chrétientés et islam (VIe-XIIIe siècles)",
      cours: `
## Introduction
Après la chute de l'Empire romain d'Occident (476), deux mondes chrétiens se développent : à l'est, l'**Empire byzantin**, héritier direct de Rome ; à l'ouest, l'**Empire carolingien** de Charlemagne. Ils partagent la même religion, mais s'éloignent peu à peu.

## 1. L'Empire byzantin, un empire chrétien d'Orient
- **Capitale** : Constantinople, fondée par l'empereur Constantin en **330** sur le site de l'ancienne Byzance (aujourd'hui Istanbul). Ville immense, carrefour commercial entre l'Europe et l'Asie.
- **L'empereur** (le *basileus*) a un pouvoir absolu : il est chef de l'armée, de l'administration, fait les lois, et il est considéré comme l'élu de Dieu, protecteur de l'Église.
- **Justinien** (empereur de **527 à 565**) veut restaurer l'Empire romain : il reconquiert l'Italie, l'Afrique du Nord et le sud de l'Espagne, fait rédiger le **Code Justinien** (recueil des lois romaines) et fait construire la basilique **Sainte-Sophie**, consacrée en **537**.
- La langue officielle devient le **grec**. L'art byzantin se reconnaît à ses **mosaïques** à fond d'or et à ses **icônes** (images saintes).

## 2. Charlemagne et l'Empire carolingien
- Les Francs se sont convertis au christianisme avec le baptême de **Clovis** (vers 500).
- **Pépin le Bref** devient roi des Francs en **751** : c'est le début de la dynastie **carolingienne**.
- Son fils **Charlemagne** devient roi en **768**. Par des guerres (Lombards, Saxons…), il conquiert un vaste territoire et impose le christianisme.
- Le **25 décembre 800**, à Rome, le pape **Léon III** le couronne **empereur d'Occident**. Il veut restaurer l'Empire romain en Occident, en alliance avec l'Église.
- Pour gouverner, il s'appuie sur des **comtes** (qui administrent les comtés), contrôlés par les **missi dominici** (« envoyés du maître »), et sur des lois écrites, les **capitulaires**. Sa résidence principale est **Aix-la-Chapelle**.
- La **renaissance carolingienne** : Charlemagne développe les écoles (dans les monastères), fait recopier les textes anciens ; le savant **Alcuin** l'entoure ; une nouvelle écriture lisible apparaît, la **minuscule caroline**.
- Après sa mort (**814**), l'empire est partagé entre ses trois petits-fils au **traité de Verdun (843)**.

## 3. Deux chrétientés qui s'éloignent
| | Chrétienté d'Orient | Chrétienté d'Occident |
|---|---|---|
| Chef religieux | patriarche de Constantinople | pape (Rome) |
| Langue | grec | latin |
| Pouvoir | l'empereur domine l'Église | le pape revendique son autorité |
En **1054**, le **schisme** sépare définitivement l'Église **orthodoxe** (Orient) et l'Église **catholique** (Occident).

Constantinople est prise par les Turcs ottomans en **1453** : c'est la fin de l'Empire byzantin.

> **À retenir** :
> - 330 : fondation de Constantinople. 527-565 : règne de Justinien. 537 : Sainte-Sophie.
> - 800 : couronnement impérial de Charlemagne par le pape Léon III. 843 : traité de Verdun.
> - 1054 : schisme entre orthodoxes et catholiques. 1453 : prise de Constantinople par les Ottomans.
> - Vocabulaire : basileus, icône, capitulaire, missi dominici, schisme.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la capitale de l'Empire byzantin ?", choix: ["Rome", "Aix-la-Chapelle", "Bagdad", "Constantinople"], reponse: 3, explication: "Constantinople, fondée par Constantin en 330, est la capitale de l'Empire byzantin. Aix-la-Chapelle est la résidence de Charlemagne, Bagdad la capitale des Abbassides." },
        { type: "saisie", question: "En quelle année Charlemagne est-il couronné empereur ?", reponses: ["800", "en 800"], explication: "Charlemagne est couronné empereur à Rome par le pape Léon III le 25 décembre 800." },
        { type: "vf", question: "Le basileus est le chef religieux de l'Église d'Occident.", reponse: false, explication: "Le basileus est l'**empereur byzantin**. Le chef de l'Église d'Occident est le **pape**." },
        { type: "qcm", question: "Comment s'appellent les envoyés de Charlemagne chargés de contrôler les comtes ?", choix: ["Les missi dominici", "Les capitulaires", "Les vassaux", "Les patriarches"], reponse: 0, explication: "Les missi dominici (« envoyés du maître ») vont deux par deux contrôler les comtes. Les capitulaires sont les lois écrites de Charlemagne." },
        { type: "saisie", question: "Quel mot désigne la séparation de 1054 entre l'Église d'Orient et l'Église d'Occident ?", reponses: ["schisme", "le schisme", "grand schisme"], explication: "Le schisme de 1054 sépare l'Église orthodoxe et l'Église catholique." },
        { type: "qcm", question: "Quel empereur byzantin fait construire Sainte-Sophie ?", choix: ["Constantin", "Charlemagne", "Léon III", "Justinien"], reponse: 3, explication: "Justinien (527-565) fait construire Sainte-Sophie, consacrée en 537. Constantin a fondé Constantinople ; Léon III est un pape." },
        { type: "vf", question: "Au traité de Verdun (843), l'empire de Charlemagne est partagé entre ses trois petits-fils.", reponse: true, explication: "Lothaire, Louis le Germanique et Charles le Chauve se partagent l'empire en 843." },
        { type: "redaction", question: "**Développement construit** : montre comment Charlemagne gouverne son empire et quels liens il entretient avec l'Église (une quinzaine de lignes).", corrige: `**Introduction** : Charlemagne, roi des Francs depuis 768, se fait couronner empereur à Rome le 25 décembre 800 par le pape Léon III. Il gouverne un immense empire chrétien.

**1. Gouverner un vaste empire**
- Il divise l'empire en comtés, confiés à des **comtes** qui rendent la justice, lèvent les soldats et font appliquer les lois.
- Les **missi dominici** contrôlent les comtes.
- Il fait rédiger des lois écrites, les **capitulaires**, et réside surtout à **Aix-la-Chapelle**.

**2. Un empereur allié de l'Église**
- Son couronnement par le pape montre l'alliance entre le pouvoir politique et l'Église : il se présente comme le protecteur de la chrétienté.
- Il impose le christianisme aux peuples conquis (les Saxons, par exemple).
- Il développe les écoles dans les monastères et fait recopier les textes religieux et antiques : c'est la **renaissance carolingienne** (Alcuin, minuscule caroline).

**Conclusion** : Charlemagne s'appuie sur une administration contrôlée et sur l'Église. Mais l'empire ne lui survit pas longtemps : il est partagé au traité de Verdun en 843.` },
      ],
    },
    {
      id: "naissance-islam",
      titre: "De la naissance de l'islam à la prise de Bagdad par les Mongols",
      theme: "Histoire – Chrétientés et islam (VIe-XIIIe siècles)",
      cours: `
## 1. La naissance de l'islam
- Au VIe siècle, l'Arabie est peuplée de tribus, souvent nomades et **polythéistes** (elles croient en plusieurs dieux). **La Mecque** est une ville marchande et un lieu de pèlerinage (la Kaaba).
- **Muhammad** (Mahomet) naît vers **570** à La Mecque. Vers **610**, il dit recevoir des révélations de Dieu (Allah) par l'ange Gabriel. Il prêche une religion **monothéiste** : l'**islam** (« soumission à Dieu »). Ses fidèles sont les **musulmans**.
- Rejeté par les riches Mecquois, il part pour **Yathrib** (rebaptisée **Médine**) en **622** : c'est l'**Hégire**, l'an 1 du calendrier musulman.
- Il revient à La Mecque en **630** et meurt en **632**. Ses révélations sont rassemblées dans le **Coran**, livre sacré.

## 2. Les cinq piliers de l'islam
1. La profession de foi (*chahada*) : « Il n'y a de dieu que Dieu et Muhammad est son envoyé (son prophète) ».
2. La prière cinq fois par jour, tourné vers La Mecque.
3. L'aumône aux pauvres.
4. Le jeûne pendant le mois de **ramadan**.
5. Le pèlerinage à La Mecque, au moins une fois dans sa vie si on le peut.
Le lieu de prière est la **mosquée** ; le muezzin appelle à la prière du haut du minaret.

## 3. Un vaste empire : les califats
- Après la mort de Muhammad, ses successeurs, les **califes**, ont un pouvoir à la fois politique et religieux.
- Des conquêtes rapides (VIIe-VIIIe siècles) : Proche-Orient, Perse, Afrique du Nord, Espagne (**711**). L'avancée vers le royaume franc est arrêtée à **Poitiers** en **732** par Charles Martel.
- Une division apparaît entre **sunnites** (majoritaires) et **chiites** (partisans d'Ali, gendre du Prophète).
- Dynastie des **Omeyyades** (661-750), capitale **Damas**. Puis des **Abbassides** (750-1258), qui fondent **Bagdad** en **762**.
- Les chrétiens et les juifs, « gens du Livre », sont des **dhimmis** : protégés, ils peuvent pratiquer leur religion mais paient un impôt spécial.

## 4. Bagdad, une capitale rayonnante
- Bagdad compte peut-être plusieurs centaines de milliers d'habitants : c'est l'une des plus grandes villes du monde. Le calife **Haroun al-Rachid** (786-809) la rend célèbre.
- C'est un grand centre de **commerce** (soie, épices, papier venu de Chine) et de **savoir** : à la **Maison de la sagesse**, des savants traduisent en arabe les textes grecs (Aristote) et indiens. Progrès en mathématiques (**algèbre**, avec al-Khwarizmi ; chiffres dits « arabes », venus d'Inde), astronomie, médecine. Les savants circulent dans tout le monde musulman : le médecin persan **Avicenne** (Ibn Sina, mort en 1037) travaille en Iran et en Asie centrale, pas à Bagdad.
- Un autre foyer brillant : **Cordoue** en al-Andalus (Espagne musulmane), siège d'un califat à partir de 929.
- Le monde musulman se divise peu à peu. En **1258**, les **Mongols** prennent et pillent Bagdad : c'est la fin du califat abbasside.

> **À retenir** :
> - 622 : Hégire. 632 : mort de Muhammad. 762 : fondation de Bagdad. 1258 : prise de Bagdad par les Mongols.
> - L'islam est une religion monothéiste fondée sur le Coran et les cinq piliers.
> - Le calife est le successeur du Prophète ; les Abbassides font de Bagdad une capitale de commerce et de savoir.
> - Vocabulaire : Hégire, Coran, calife, dhimmi, mosquée, sunnite, chiite.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on le départ de Muhammad de La Mecque vers Médine en 622 ?", reponses: ["Hégire", "l'Hégire", "hegire"], explication: "L'Hégire (622) marque l'an 1 du calendrier musulman." },
        { type: "qcm", question: "Quel est le livre sacré des musulmans ?", choix: ["La Bible", "Le Code Justinien", "La Torah", "Le Coran"], reponse: 3, explication: "Le Coran rassemble les révélations reçues par Muhammad." },
        { type: "vf", question: "Le calife est à la fois un chef politique et un chef religieux.", reponse: true, explication: "Le calife, successeur du Prophète, dirige la communauté des croyants et l'empire." },
        { type: "qcm", question: "Quelle dynastie fonde Bagdad en 762 ?", choix: ["Les Omeyyades", "Les Carolingiens", "Les Mongols", "Les Abbassides"], reponse: 3, explication: "Les Abbassides, au pouvoir à partir de 750, fondent Bagdad en 762. Les Omeyyades avaient pour capitale Damas." },
        { type: "saisie", question: "En quelle année les Mongols prennent-ils Bagdad ?", reponses: ["1258", "en 1258"], explication: "En 1258, les Mongols de Hulagu prennent et pillent Bagdad, mettant fin au califat abbasside." },
        { type: "qcm", question: "Lequel de ces éléments ne fait PAS partie des cinq piliers de l'islam ?", choix: ["Le jeûne du ramadan", "Le pèlerinage à La Mecque", "L'aumône", "La croisade"], reponse: 3, explication: "Les cinq piliers sont : profession de foi, prière, aumône, jeûne du ramadan, pèlerinage. La croisade est une expédition chrétienne." },
        { type: "vf", question: "Dans l'empire musulman, les chrétiens et les juifs ont le statut de dhimmis : ils peuvent pratiquer leur religion en payant un impôt.", reponse: true, explication: "Les dhimmis sont protégés mais soumis à un impôt spécial et à certaines restrictions." },
        { type: "redaction", question: "**Paragraphe argumenté** : montre que Bagdad est une capitale rayonnante à l'époque des Abbassides.", corrige: `Bagdad est fondée en **762** par les califes **abbassides**, qui en font la capitale de leur empire. C'est d'abord une **capitale politique** : le calife y réside dans un immense palais et dirige l'empire musulman. C'est aussi une **ville marchande** : située sur le Tigre, au carrefour des routes commerciales, elle reçoit la soie et le papier de Chine, les épices d'Inde, les fourrures du nord. Elle compte plusieurs centaines de milliers d'habitants, ce qui en fait l'une des plus grandes villes du monde. Enfin, c'est un **centre intellectuel** : à la **Maison de la sagesse**, des savants traduisent en arabe les œuvres grecques et indiennes et font progresser les mathématiques (algèbre), l'astronomie et la médecine. Ce rayonnement dure jusqu'en **1258**, quand les Mongols prennent et pillent la ville.` },
      ],
    },
    {
      id: "croisades-contacts",
      titre: "Croisades et contacts entre chrétientés et islam",
      theme: "Histoire – Chrétientés et islam (VIe-XIIIe siècles)",
      cours: `
## 1. Les croisades (1095-1291)
- En **1095**, au concile de **Clermont**, le pape **Urbain II** appelle les chrétiens d'Occident à aller délivrer **Jérusalem** et le tombeau du Christ (le Saint-Sépulcre), contrôlés par les musulmans, et à aider les Byzantins menacés par les Turcs.
- Une **croisade** est une expédition militaire et un pèlerinage armé : les croisés portent une croix cousue sur leurs vêtements et espèrent le pardon de leurs péchés (**indulgence**).
- La **première croisade** prend **Jérusalem en 1099** (avec un massacre de la population). Les croisés fondent des **États latins d'Orient** (royaume de Jérusalem…), protégés par des ordres religieux militaires (Templiers, Hospitaliers) et de grandes forteresses (le krak des Chevaliers).
- Le sultan **Saladin** reprend Jérusalem en **1187**.
- Lors de la **4e croisade**, les croisés détournés pillent **Constantinople** chrétienne (**1204**) : la rupture entre Byzantins et Latins s'aggrave.
- Le roi de France **Louis IX** (Saint Louis) mène deux croisades et meurt devant Tunis en **1270**.
- La chute de **Saint-Jean-d'Acre** en **1291** met fin aux États latins d'Orient.

## 2. La Reconquista en Espagne
- Depuis 711, une grande partie de la péninsule Ibérique est musulmane (**al-Andalus**).
- Les royaumes chrétiens du nord la reconquièrent progressivement : prise de **Tolède (1085)**, victoire de **Las Navas de Tolosa (1212)**, et enfin prise de **Grenade** en **1492**.

## 3. Des contacts aussi pacifiques
- **Commerce** : les marchands de **Venise** et de **Gênes** commercent avec les ports musulmans et byzantins (épices, soie, sucre, coton).
- **Échanges culturels** : à **Tolède** ou en **Sicile**, des savants traduisent en latin des œuvres arabes et grecques (Aristote, Avicenne, Averroès). Les chiffres arabes et l'algèbre passent en Europe ; de nombreux mots français viennent de l'arabe (algèbre, chiffre, sucre, orange, magasin…).
- **Diplomatie** : des souverains négocient. Par exemple, l'empereur Frédéric II obtient par traité le retour de Jérusalem aux chrétiens en 1229.

>! **Méthode** : dans un sujet sur les contacts, pense à distinguer les **contacts guerriers** (croisades, Reconquista) et les **contacts pacifiques** (commerce, savoir, diplomatie).

> **À retenir** :
> - 1095 : appel d'Urbain II à Clermont. 1099 : prise de Jérusalem. 1187 : Saladin reprend Jérusalem. 1204 : sac de Constantinople. 1291 : chute d'Acre. 1492 : prise de Grenade.
> - Les mondes chrétiens et musulmans s'affrontent mais échangent aussi marchandises et savoirs.
> - Vocabulaire : croisade, indulgence, États latins d'Orient, Reconquista.
`,
      exercices: [
        { type: "qcm", question: "Quel pape lance la première croisade en 1095 ?", choix: ["Léon III", "Boniface VIII", "Urbain II", "Grégoire VII"], reponse: 2, explication: "Urbain II lance l'appel à la croisade au concile de Clermont en 1095. Léon III a couronné Charlemagne." },
        { type: "saisie", question: "En quelle année les croisés prennent-ils Jérusalem ?", reponses: ["1099", "en 1099"], explication: "La première croisade aboutit à la prise de Jérusalem en 1099." },
        { type: "vf", question: "Saladin est un roi croisé qui fonde le royaume de Jérusalem.", reponse: false, explication: "Saladin est un **sultan musulman** qui reprend Jérusalem aux croisés en 1187." },
        { type: "qcm", question: "Quelle ville chrétienne est pillée par les croisés en 1204 ?", choix: ["Constantinople", "Jérusalem", "Grenade", "Tolède"], reponse: 0, explication: "Lors de la 4e croisade, les croisés pillent Constantinople, capitale byzantine chrétienne." },
        { type: "saisie", question: "Comment appelle-t-on la reconquête de la péninsule Ibérique par les royaumes chrétiens ?", reponses: ["Reconquista", "la Reconquista", "reconquete", "la reconquete"], explication: "La Reconquista s'achève en 1492 avec la prise de Grenade." },
        { type: "vf", question: "Les marchands de Venise et de Gênes commerçaient avec les ports musulmans.", reponse: true, explication: "Les cités italiennes importent épices, soie, sucre depuis les ports musulmans et byzantins." },
        { type: "qcm", question: "Lequel de ces mots français vient de l'arabe ?", choix: ["Château", "Chiffre", "Seigneur", "Église"], reponse: 1, explication: "« Chiffre » vient de l'arabe *sifr* (zéro). Les autres mots viennent du latin." },
        { type: "redaction", question: "**Développement construit** : montre que, du XIe au XIIIe siècle, chrétiens et musulmans s'affrontent mais échangent aussi.", corrige: `**Introduction** : Entre le XIe et le XIIIe siècle, les chrétientés (Occident latin, Byzance) et le monde musulman sont voisins autour de la Méditerranée. Leurs contacts sont à la fois guerriers et pacifiques.

**1. Des affrontements**
- En 1095, le pape Urbain II lance la **croisade** : les croisés prennent Jérusalem en **1099** et fondent les États latins d'Orient.
- Les musulmans réagissent : **Saladin** reprend Jérusalem en **1187** ; la chute d'Acre en **1291** met fin aux États latins.
- En Espagne, la **Reconquista** : Tolède (1085), Las Navas de Tolosa (1212), Grenade (1492).

**2. Des échanges**
- **Commerciaux** : Venise et Gênes importent épices, soie et sucre des ports musulmans.
- **Culturels** : à Tolède et en Sicile, on traduit en latin les savants arabes et grecs ; l'algèbre et les chiffres arabes arrivent en Europe ; des mots arabes entrent dans les langues européennes.
- **Diplomatiques** : en 1229, Frédéric II récupère Jérusalem par un traité.

**Conclusion** : la guerre n'empêche pas les échanges ; la Méditerranée est un espace de contacts multiples entre mondes chrétiens et musulman.` },
      ],
    },
    {
      id: "ordre-seigneurial",
      titre: "L'ordre seigneurial : la formation et la domination des campagnes",
      theme: "Histoire – Société, Église et pouvoir dans l'Occident féodal (XIe-XVe siècles)",
      cours: `
## 1. Une société d'ordres
Vers **1030**, l'évêque **Adalbéron de Laon** décrit une société divisée en **trois ordres** voulus par Dieu :
- ceux qui **prient** (*oratores*) : le **clergé** ;
- ceux qui **combattent** (*bellatores*) : les **seigneurs** et chevaliers ;
- ceux qui **travaillent** (*laboratores*) : les **paysans** (la très grande majorité, environ 90 % de la population).

## 2. Seigneurs et vassaux : la féodalité
- Le **seigneur** possède une terre, la **seigneurie**, et domine ceux qui y vivent depuis son **château fort** (d'abord une motte en bois, puis en pierre à partir du XIe siècle, avec un **donjon**).
- Un seigneur peut devenir le **vassal** d'un seigneur plus puissant, son **suzerain**, lors de la cérémonie de l'**hommage** : le vassal jure fidélité et promet aide militaire et conseil ; en échange, il reçoit un **fief** (souvent une terre) et une protection.
- Les chevaliers sont adoubés (cérémonie de l'**adoubement**) et doivent respecter des valeurs : courage, loyauté, protection des faibles.

## 3. Les paysans dans la seigneurie
La seigneurie comprend la **réserve** (terres exploitées directement pour le seigneur) et les **tenures** (terres confiées aux paysans).
| Obligation | Définition |
|---|---|
| Corvée | travail gratuit sur la réserve du seigneur |
| Cens / champart | redevance en argent / part de la récolte pour la tenure |
| Taille | impôt payé au seigneur |
| Banalités | taxes pour utiliser le moulin, le four, le pressoir du seigneur |
| Dîme | environ un dixième des récoltes, versé à l'Église |
Le seigneur rend aussi la **justice**. Les **serfs** sont des paysans non libres, attachés à la terre ; les **vilains** sont libres. Au fil du temps, beaucoup de serfs obtiennent leur liberté (affranchissement).

## 4. L'essor des campagnes (XIe-XIIIe siècles)
- La population de l'Occident augmente fortement (elle double à peu près entre l'an mil et 1300).
- Les paysans **défrichent** forêts et marais, créent de nouveaux villages.
- Progrès techniques : **charrue** à versoir, collier d'épaule pour le cheval, **assolement triennal** (rotation des cultures sur trois ans), moulins à eau et à vent.
- Au XIVe siècle, crises : famines, guerre et surtout la **peste noire** (**1347-1352**), qui tue entre un tiers et la moitié des Européens.

## 5. L'Église encadre la société
- Le **clergé séculier** (prêtres, évêques) vit parmi les fidèles ; le **clergé régulier** (moines) vit selon une règle dans un monastère. Ordres de **Cluny** (fondé en **910**) et de **Cîteaux** (**1098**).
- L'Église encadre la vie des fidèles par les **sacrements** (baptême, mariage…), le calendrier des fêtes, et tente de limiter la violence des seigneurs (**paix de Dieu**, **trêve de Dieu**).
- Les **églises romanes** (XIe-XIIe s.) puis **gothiques** (à partir du XIIe s.) marquent le paysage.

> **À retenir** :
> - La société médiévale est divisée en trois ordres : ceux qui prient, combattent, travaillent.
> - Le seigneur domine les paysans de sa seigneurie (corvée, taille, banalités, justice) ; le vassal reçoit un fief de son suzerain.
> - XIe-XIIIe siècles : essor agricole et démographique. 1347-1352 : peste noire.
> - Vocabulaire : seigneurie, fief, vassal, suzerain, hommage, corvée, banalités, dîme, serf.
`,
      exercices: [
        { type: "qcm", question: "Selon Adalbéron de Laon, quels sont les trois ordres de la société ?", choix: ["Rois, nobles, bourgeois", "Ceux qui prient, ceux qui combattent, ceux qui travaillent", "Moines, prêtres, évêques", "Seigneurs, serfs, esclaves"], reponse: 1, explication: "Vers 1030, Adalbéron distingue le clergé (prier), les guerriers (combattre) et les paysans (travailler)." },
        { type: "saisie", question: "Comment s'appelle la terre donnée par un suzerain à son vassal ?", reponses: ["fief", "un fief", "le fief"], explication: "Le fief est donné au vassal en échange de sa fidélité et de son aide militaire." },
        { type: "vf", question: "La corvée est un travail gratuit que les paysans doivent faire sur la réserve du seigneur.", reponse: true, explication: "C'est exact : la corvée est une obligation de travail gratuit (labourer, moissonner, entretenir le château…)." },
        { type: "qcm", question: "Que sont les banalités ?", choix: ["Des fêtes religieuses", "L'impôt versé à l'Église", "Des taxes pour utiliser le moulin, le four ou le pressoir du seigneur", "Des terres données aux paysans"], reponse: 2, explication: "Les banalités sont payées pour utiliser les équipements du seigneur. L'impôt versé à l'Église est la dîme." },
        { type: "saisie", question: "Comment appelle-t-on l'impôt (environ un dixième des récoltes) versé à l'Église ?", reponses: ["dime", "la dime"], explication: "La dîme sert à entretenir le clergé et les églises." },
        { type: "vf", question: "Un serf est un paysan libre qui peut quitter la seigneurie quand il le veut.", reponse: false, explication: "Le serf n'est pas libre : il est attaché à la terre de son seigneur. Le paysan libre est le vilain." },
        { type: "qcm", question: "Quelle épidémie frappe l'Europe entre 1347 et 1352 ?", choix: ["La variole", "Le choléra", "La grippe espagnole", "La peste noire"], reponse: 3, explication: "La peste noire tue entre un tiers et la moitié de la population européenne." },
        { type: "redaction", question: "**Paragraphe argumenté** : explique comment le seigneur domine les paysans de sa seigneurie.", corrige: `Au Moyen Âge, le seigneur domine les paysans qui vivent sur sa seigneurie. Cette domination est d'abord **économique** : les paysans exploitent des **tenures** et doivent en échange payer le **cens** ou le **champart**, ainsi que la **taille** ; ils effectuent des **corvées**, c'est-à-dire un travail gratuit sur la **réserve** du seigneur ; ils paient des **banalités** pour utiliser le moulin, le four ou le pressoir. Elle est aussi **judiciaire** : le seigneur rend la justice et punit. Elle est enfin **militaire** : depuis son **château fort**, il protège les paysans mais les surveille aussi. Certains paysans, les **serfs**, ne sont même pas libres. Ainsi, le seigneur tire sa richesse et sa puissance du travail des paysans, en échange d'une protection.` },
      ],
    },
    {
      id: "societe-urbaine",
      titre: "L'émergence d'une nouvelle société urbaine",
      theme: "Histoire – Société, Église et pouvoir dans l'Occident féodal (XIe-XVe siècles)",
      cours: `
## 1. L'essor des villes (XIe-XIIIe siècles)
- Grâce à l'essor agricole, les campagnes produisent plus : les surplus sont vendus en ville, et des paysans s'y installent.
- Les villes grandissent : **Paris** atteint environ **200 000 habitants** vers 1300, c'est la plus grande ville d'Occident. Elles sont entourées de **remparts**.
- Le **commerce** se développe : grandes **foires de Champagne** (XIIe-XIIIe s.), où se rencontrent marchands italiens et flamands ; villes marchandes d'Italie (Venise, Gênes, Florence), de Flandre (Bruges) et de la **Hanse** (association de villes marchandes d'Europe du Nord autour de Lübeck). Les **banquiers** inventent la lettre de change.

## 2. Les bourgeois et l'artisanat
- Les habitants des villes s'appellent les **bourgeois** (habitants du bourg). Ce sont des marchands, des artisans…
- Les artisans d'un même métier s'organisent en **corporations** (ou métiers) qui fixent les règles de fabrication, les prix et les horaires. Il y a trois niveaux : **apprenti**, **compagnon**, **maître**.
- Les villes veulent s'administrer elles-mêmes : elles obtiennent du seigneur ou du roi une **charte de franchise** qui leur accorde des libertés (impôts, justice). Les villes libres sont des **communes**, dirigées par des **échevins** ou des **consuls**. Le **beffroi** (tour qui abrite la cloche communale) et l'**hôtel de ville** symbolisent ces libertés.
- La société urbaine est inégale : riches marchands et pauvres, mendiants.

## 3. La ville, lieu de foi et de savoir
- Les **cathédrales gothiques** sont construites grâce à la richesse des villes : voûtes sur croisée d'ogives, arcs-boutants, grandes fenêtres avec **vitraux**. Exemples : basilique de **Saint-Denis** (vers 1140), **Notre-Dame de Paris** (commencée en **1163**), **Chartres**.
- Les **ordres mendiants** s'installent en ville pour prêcher aux citadins et vivre dans la pauvreté : **franciscains** (saint François d'Assise) et **dominicains** (saint Dominique), au début du XIIIe siècle.
- Les **universités** apparaissent : **Bologne**, **Paris** (vers 1200), Oxford. On y étudie la théologie, le droit, la médecine, en latin. Le collège de la **Sorbonne** est fondé à Paris en **1257**.

> **À retenir** :
> - Du XIe au XIIIe siècle, les villes et le commerce se développent (foires de Champagne, Hanse, Italie).
> - Les bourgeois s'organisent en corporations et obtiennent des chartes de franchise : les communes.
> - La ville est un lieu de foi (cathédrales gothiques, ordres mendiants) et de savoir (universités).
> - Vocabulaire : bourgeois, corporation, charte de franchise, commune, beffroi, gothique, université.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on les habitants des villes au Moyen Âge ?", reponses: ["bourgeois", "les bourgeois"], explication: "Le bourgeois est l'habitant du bourg, c'est-à-dire de la ville." },
        { type: "qcm", question: "Quel document accorde des libertés à une ville ?", choix: ["Une charte de franchise", "Un capitulaire", "Un fief", "Une bulle pontificale"], reponse: 0, explication: "La charte de franchise est accordée par le seigneur ou le roi ; la ville devient une commune." },
        { type: "vf", question: "Le beffroi est le symbole des libertés de la ville.", reponse: true, explication: "Le beffroi abrite la cloche de la commune, qui appelle les bourgeois à se réunir." },
        { type: "qcm", question: "Dans une corporation, quel est l'ordre des grades, du débutant au plus élevé ?", choix: ["Maître, compagnon, apprenti", "Compagnon, apprenti, maître", "Apprenti, compagnon, maître", "Apprenti, maître, compagnon"], reponse: 2, explication: "On commence apprenti, on devient compagnon, puis maître (souvent après un chef-d'œuvre)." },
        { type: "vf", question: "Les cathédrales gothiques se caractérisent par des murs épais et de petites fenêtres.", reponse: false, explication: "C'est le style **roman**. Le gothique utilise croisées d'ogives et arcs-boutants pour ouvrir de grandes fenêtres à vitraux." },
        { type: "qcm", question: "Où se tiennent les grandes foires commerciales des XIIe et XIIIe siècles en France ?", choix: ["En Bretagne", "En Champagne", "En Provence", "En Normandie"], reponse: 1, explication: "Les foires de Champagne (Troyes, Provins…) réunissent marchands italiens et flamands." },
        { type: "saisie", question: "Quel nom donne-t-on à l'association de villes marchandes d'Europe du Nord, autour de Lübeck ?", reponses: ["Hanse", "la Hanse", "hanse teutonique"], explication: "La Hanse contrôle le commerce de la mer du Nord et de la Baltique." },
        { type: "redaction", question: "**Développement construit** : présente l'essor des villes en Occident du XIe au XIIIe siècle et la nouvelle société qui y apparaît.", corrige: `**Introduction** : À partir du XIe siècle, l'Occident connaît un fort essor urbain. Une nouvelle société naît dans les villes.

**1. Des villes qui grandissent grâce au commerce**
- L'essor agricole permet de nourrir plus de monde ; des paysans viennent s'installer en ville.
- Le commerce se développe : foires de Champagne, villes italiennes, Flandre, Hanse. Paris atteint environ 200 000 habitants vers 1300.

**2. Une société urbaine nouvelle**
- Les **bourgeois** (marchands, artisans) s'organisent en **corporations** (apprenti, compagnon, maître).
- Ils obtiennent des **chartes de franchise** : les **communes** se gouvernent avec leurs échevins ; le **beffroi** symbolise ces libertés.
- La société reste inégale : riches marchands, artisans, pauvres.

**3. Des lieux de foi et de savoir**
- On construit des **cathédrales gothiques** (Notre-Dame de Paris, commencée en 1163).
- Les **ordres mendiants** (franciscains, dominicains) prêchent aux citadins.
- Les **universités** (Paris, Bologne) forment les élites.

**Conclusion** : les villes deviennent des centres économiques, politiques et culturels, à côté de l'ordre seigneurial des campagnes.` },
      ],
    },
    {
      id: "etat-monarchique",
      titre: "L'affirmation de l'État monarchique : Capétiens et Valois",
      theme: "Histoire – Société, Église et pouvoir dans l'Occident féodal (XIe-XVe siècles)",
      cours: `
## 1. Des débuts fragiles (987-1180)
- En **987**, **Hugues Capet** est élu roi des Francs : il fonde la dynastie des **Capétiens**. Son pouvoir réel est faible : il ne contrôle qu'un petit **domaine royal** autour de Paris et d'Orléans ; les grands seigneurs (ducs, comtes) sont parfois plus puissants que lui.
- Mais le roi a un prestige particulier : il est **sacré** à **Reims** (onction d'huile sainte), ce qui fait de lui l'élu de Dieu. Il est aussi le **suzerain** de tous les grands seigneurs.
- Les Capétiens font sacrer leur fils de leur vivant pour assurer la succession.

## 2. Le renforcement du pouvoir royal (XIIe-XIVe siècles)
- **Philippe II Auguste** (1180-1223) agrandit le domaine royal (confisque la Normandie au roi d'Angleterre en 1204) et remporte la **bataille de Bouvines** (**1214**) contre l'empereur germanique et ses alliés. Il crée les **baillis** (au nord) et **sénéchaux** (au sud), agents du roi qui rendent la justice et lèvent les impôts.
- **Louis IX** (Saint Louis, 1226-1270) se veut un roi juste et pieux : il rend la justice (on peut faire appel au roi : le **Parlement**), crée une monnaie royale, part en croisade. Il est canonisé (déclaré saint) en **1297**.
- **Philippe IV le Bel** (1285-1314) s'entoure de **légistes** (juristes), s'oppose au pape Boniface VIII et réunit en **1302** les premiers **États généraux** (représentants des trois ordres) pour obtenir leur soutien.

## 3. Les Valois et la guerre de Cent Ans (1337-1453)
- En **1328**, faute d'héritier direct, la couronne passe à **Philippe VI de Valois** : début de la dynastie des **Valois**. Le roi d'Angleterre Édouard III, petit-fils de Philippe le Bel, revendique aussi le trône : c'est l'une des causes de la **guerre de Cent Ans** (**1337-1453**).
- Grandes défaites françaises (Crécy 1346, Poitiers 1356, Azincourt 1415). En 1420, le traité de Troyes prévoit que le roi d'Angleterre héritera de la France.
- **Jeanne d'Arc** délivre **Orléans** en **1429** et fait sacrer **Charles VII** à Reims la même année. Capturée, elle est brûlée à **Rouen** en **1431**.
- La victoire de **Castillon** (**1453**) chasse les Anglais (sauf de Calais).

## 4. Un État plus fort à la fin du Moyen Âge
- Pour faire la guerre, le roi crée un **impôt royal permanent** (la taille royale, 1439) et une **armée permanente** (compagnies d'ordonnance, 1445).
- L'administration royale se développe : Parlement (justice), Chambre des comptes (finances), baillis.
- Le sentiment d'appartenance au royaume se renforce.

> **À retenir** :
> - 987 : Hugues Capet, début des Capétiens. 1214 : Bouvines. 1328 : début des Valois. 1337-1453 : guerre de Cent Ans. 1429 : Jeanne d'Arc délivre Orléans, sacre de Charles VII.
> - Le roi renforce son pouvoir : agrandissement du domaine royal, administration (baillis, Parlement), impôt et armée permanents.
> - Vocabulaire : domaine royal, sacre, bailli, États généraux, dynastie.
`,
      exercices: [
        { type: "saisie", question: "En quelle année Hugues Capet devient-il roi ?", reponses: ["987", "en 987"], explication: "Hugues Capet est élu en 987 et fonde la dynastie des Capétiens." },
        { type: "qcm", question: "Dans quelle ville les rois de France sont-ils sacrés ?", choix: ["Paris", "Saint-Denis", "Orléans", "Reims"], reponse: 3, explication: "Le sacre a lieu à la cathédrale de Reims, en souvenir du baptême de Clovis. Saint-Denis est la nécropole royale." },
        { type: "qcm", question: "Quel roi remporte la bataille de Bouvines en 1214 ?", choix: ["Philippe Auguste", "Louis IX", "Philippe le Bel", "Charles VII"], reponse: 0, explication: "Philippe II Auguste bat l'empereur Otton IV et ses alliés à Bouvines." },
        { type: "vf", question: "Les baillis et les sénéchaux sont des agents du roi chargés de la justice et des impôts dans les provinces.", reponse: true, explication: "Créés sous Philippe Auguste, ils représentent le roi dans le domaine royal." },
        { type: "qcm", question: "Quelles sont les dates de la guerre de Cent Ans ?", choix: ["1214-1314", "1337-1453", "1347-1352", "1429-1431"], reponse: 1, explication: "La guerre de Cent Ans dure en réalité 116 ans, de 1337 à 1453." },
        { type: "saisie", question: "Quel roi Jeanne d'Arc fait-elle sacrer à Reims en 1429 ?", reponses: ["Charles VII", "Charles 7", "charles vii"], explication: "Après la délivrance d'Orléans, Jeanne d'Arc conduit Charles VII à Reims pour son sacre (juillet 1429)." },
        { type: "vf", question: "Philippe le Bel réunit les premiers États généraux en 1302.", reponse: true, explication: "Il cherche le soutien des trois ordres dans son conflit avec le pape Boniface VIII." },
        { type: "redaction", question: "**Développement construit** : montre comment les rois de France renforcent leur pouvoir entre le XIIe et le XVe siècle.", corrige: `**Introduction** : En 987, Hugues Capet fonde la dynastie capétienne, mais son pouvoir est faible. Entre le XIIe et le XVe siècle, les rois renforcent leur autorité.

**1. Un territoire agrandi**
- Philippe Auguste agrandit le domaine royal (Normandie, 1204) et gagne la bataille de **Bouvines (1214)**.
- Les rois annexent des terres par la guerre, les héritages et les mariages.

**2. Une administration et une justice royales**
- Les **baillis** et **sénéchaux** représentent le roi dans les provinces.
- Saint Louis développe la justice royale (Parlement) et une monnaie royale.
- Philippe le Bel s'entoure de légistes et réunit les **États généraux** en 1302.

**3. La guerre de Cent Ans renforce l'État**
- Les Valois (depuis 1328) affrontent les Anglais (1337-1453). Jeanne d'Arc fait sacrer **Charles VII** en 1429.
- Pour vaincre, le roi crée un **impôt permanent** et une **armée permanente**. La victoire de Castillon (1453) renforce son prestige.

**Conclusion** : à la fin du XVe siècle, le roi de France dispose d'un territoire, d'une administration, d'un impôt et d'une armée : l'État monarchique s'est affirmé.` },
      ],
    },
    {
      id: "charles-quint-soliman",
      titre: "Le monde au temps de Charles Quint et Soliman le Magnifique",
      theme: "Histoire – Transformations de l'Europe et ouverture sur le monde (XVIe-XVIIe siècles)",
      cours: `
## 1. Les grandes découvertes
À la fin du XVe siècle, les Européens cherchent une route maritime vers les épices et l'or d'Asie, sans passer par les intermédiaires musulmans et italiens. De nouveaux navires (la **caravelle**) et instruments (**boussole**, **astrolabe**) le permettent.
- **1492** : **Christophe Colomb**, au service des Rois catholiques d'Espagne, atteint l'**Amérique** (une île des Bahamas, puis Cuba et Hispaniola, dans les Antilles) en croyant arriver en Asie (les « Indes »).
- **1498** : le Portugais **Vasco de Gama** contourne l'Afrique et arrive à **Calicut**, en Inde.
- **1519-1522** : l'expédition de **Magellan** réalise le premier **tour du monde** ; Magellan est tué aux Philippines (1521) et c'est **Elcano** qui ramène le dernier navire.

## 2. Les empires coloniaux et leurs conséquences
- Les **conquistadors** espagnols s'emparent des empires amérindiens : **Cortés** conquiert l'Empire **aztèque** (Mexique, 1519-1521), **Pizarro** l'Empire **inca** (Pérou, à partir de 1532).
- Les Amérindiens sont soumis au travail forcé dans les mines d'or et d'argent (Potosí). La population amérindienne s'effondre à cause des guerres, des mauvais traitements et surtout des **maladies** apportées par les Européens (variole).
- Le dominicain **Bartolomé de Las Casas** dénonce ces violences ; lors de la **controverse de Valladolid** (**1550-1551**), il s'oppose à Sepúlveda sur la manière de traiter les Amérindiens.
- Pour remplacer cette main-d'œuvre, les Européens développent la **traite** des Africains réduits en esclavage vers l'Amérique (plantations de canne à sucre).
- Le monde est désormais relié : c'est une première **mondialisation** (or, argent, sucre, épices ; plantes échangées : maïs, pomme de terre, tomate vers l'Europe).

## 3. Charles Quint, un empire « sur lequel le soleil ne se couche jamais »
- Né en **1500** à Gand, **Charles Quint** hérite de l'Espagne et de ses colonies d'Amérique, des Pays-Bas, de territoires en Italie et des possessions des Habsbourg (Autriche). En **1519**, il est élu **empereur du Saint-Empire romain germanique**.
- Il veut défendre l'unité de la chrétienté catholique : il combat les protestants en Allemagne, les Ottomans et rivalise avec le roi de France **François Ier**.
- Épuisé, il **abdique** en **1556** et partage ses possessions entre son fils Philippe II (Espagne) et son frère Ferdinand (Autriche, Empire).

## 4. Soliman le Magnifique et l'Empire ottoman
- Les Turcs ottomans ont pris Constantinople en **1453** ; elle devient **Istanbul**, leur capitale.
- **Soliman le Magnifique** est **sultan** de **1520 à 1566**. Il agrandit l'empire : victoire de **Mohács** en Hongrie (**1526**), siège de **Vienne** (**1529**, échec). Son empire s'étend de l'Algérie à l'Irak et sur les Balkans.
- Surnommé « le Législateur » (*Kanuni*), il réorganise les lois et fait construire de nombreux monuments par l'architecte **Sinan** (mosquée **Süleymaniye** à Istanbul).
- Ennemi de Charles Quint, il s'allie à **François Ier** : cette alliance franco-ottomane, scandaleuse pour l'Europe chrétienne, s'accompagne d'accords commerciaux (les **capitulations**, négociées vers 1536 et confirmées en 1569) qui favorisent les marchands français.

> **À retenir** :
> - 1492 : Colomb en Amérique. 1498 : Vasco de Gama en Inde. 1519-1522 : premier tour du monde. 1519 : Charles Quint élu empereur. 1520-1566 : règne de Soliman. 1529 : siège de Vienne.
> - Les Européens se partagent les océans et conquièrent l'Amérique : effondrement des populations amérindiennes, traite des Africains.
> - Deux grands empires s'affrontent en Europe : celui de Charles Quint et l'Empire ottoman de Soliman.
> - Vocabulaire : conquistador, colonie, traite, mondialisation, sultan.
`,
      exercices: [
        { type: "saisie", question: "En quelle année Christophe Colomb atteint-il l'Amérique ?", reponses: ["1492", "en 1492"], explication: "Le 12 octobre 1492, Colomb aborde une île des Bahamas, croyant être en Asie." },
        { type: "qcm", question: "Quel navigateur atteint l'Inde par la mer en contournant l'Afrique en 1498 ?", choix: ["Magellan", "Christophe Colomb", "Vasco de Gama", "Cortés"], reponse: 2, explication: "Le Portugais Vasco de Gama arrive à Calicut en 1498." },
        { type: "vf", question: "Magellan est revenu en Espagne à la fin du premier tour du monde.", reponse: false, explication: "Magellan est tué aux Philippines en 1521 ; c'est Elcano qui achève le voyage en 1522." },
        { type: "qcm", question: "Quel empire amérindien Cortés conquiert-il ?", choix: ["L'Empire aztèque", "L'Empire inca", "L'Empire maya", "L'Empire ottoman"], reponse: 0, explication: "Cortés conquiert l'Empire aztèque (Mexique) entre 1519 et 1521 ; Pizarro s'attaque aux Incas." },
        { type: "qcm", question: "Quelle est la principale cause de l'effondrement de la population amérindienne ?", choix: ["Les famines dues au froid", "Les maladies apportées par les Européens", "Les guerres entre Aztèques et Incas", "L'émigration vers l'Europe"], reponse: 1, explication: "Les maladies comme la variole, contre lesquelles les Amérindiens n'étaient pas immunisés, ont tué l'essentiel des victimes, avec le travail forcé et les violences." },
        { type: "saisie", question: "Quel est le titre de Soliman le Magnifique ?", reponses: ["sultan", "sultan ottoman", "le sultan", "sultan de l'Empire ottoman"], explication: "Soliman est le sultan de l'Empire ottoman de 1520 à 1566." },
        { type: "vf", question: "Charles Quint et François Ier sont alliés contre Soliman le Magnifique.", reponse: false, explication: "C'est l'inverse : François Ier s'allie à Soliman contre Charles Quint, son grand rival." },
        { type: "redaction", question: "**Paragraphe argumenté** : explique pourquoi l'on peut parler d'un monde de plus en plus relié au XVIe siècle, et quelles en sont les conséquences pour les populations d'Amérique.", corrige: `Au XVIe siècle, le monde devient de plus en plus relié grâce aux **grandes découvertes** : Colomb atteint l'Amérique en **1492**, Vasco de Gama l'Inde en **1498**, et l'expédition de Magellan fait le premier tour du monde (**1519-1522**). Les Espagnols et les Portugais créent des **empires coloniaux** : l'or et l'argent d'Amérique, les épices d'Asie arrivent en Europe, et des plantes circulent (maïs, pomme de terre). C'est une première **mondialisation**. Pour les **Amérindiens**, les conséquences sont dramatiques : les **conquistadors** détruisent les empires aztèque (Cortés) et inca (Pizarro), les populations sont soumises au travail forcé et décimées par les **maladies** venues d'Europe. Las Casas dénonce ces violences à Valladolid (1550-1551). Pour remplacer cette main-d'œuvre, les Européens développent la **traite** des Africains réduits en esclavage.` },
      ],
    },
    {
      id: "humanisme-reformes",
      titre: "Humanisme, réformes et conflits religieux",
      theme: "Histoire – Transformations de l'Europe et ouverture sur le monde (XVIe-XVIIe siècles)",
      cours: `
## 1. L'humanisme
- Vers **1450**, **Gutenberg** met au point à Mayence l'**imprimerie** à caractères mobiles métalliques. Les livres deviennent moins chers et plus nombreux : les idées circulent plus vite (Bible de Gutenberg vers 1455).
- Les **humanistes** redécouvrent les textes de l'Antiquité grecque et latine, les étudient de façon critique et placent l'**être humain** au centre de leur réflexion. Ils croient en l'éducation et en l'esprit critique.
- Grandes figures : **Érasme** (*Éloge de la folie*, 1511), **Rabelais** (*Gargantua*, 1534), Thomas More (*Utopie*, 1516), Montaigne (*Essais*).
- La **Renaissance** artistique, née en Italie : perspective, étude du corps humain, inspiration antique. **Léonard de Vinci** (*La Joconde*), **Michel-Ange** (plafond de la chapelle Sixtine, 1508-1512), Raphaël.
- Les sciences progressent : **Copernic** affirme en **1543** que la Terre tourne autour du Soleil (**héliocentrisme**) ; Galilée le confirme au XVIIe siècle, mais l'Église le condamne (1633).

## 2. Les réformes religieuses
- Au début du XVIe siècle, beaucoup de chrétiens critiquent l'Église : vente des **indulgences** (rémission des péchés contre de l'argent), richesse et ignorance d'une partie du clergé.
- En **1517**, le moine allemand **Martin Luther** publie ses **95 thèses** contre les indulgences. Pour lui, seule la **foi** sauve et seule la **Bible** fait autorité ; il la traduit en allemand. Excommunié par le pape en **1521**, il est à l'origine du **protestantisme** (luthériens).
- **Jean Calvin**, un Français, s'installe à **Genève** et publie *L'Institution de la religion chrétienne* (1536). Ses fidèles sont les calvinistes (en France : les **huguenots**).
- En Angleterre, le roi **Henri VIII** rompt avec Rome en **1534** et fonde l'**anglicanisme**.
- L'Église catholique répond par la **Réforme catholique** (ou Contre-Réforme) : le **concile de Trente** (**1545-1563**) réaffirme les dogmes (sept sacrements, culte des saints, autorité du pape) et décide de mieux former les prêtres ; la Compagnie de Jésus (**jésuites**, 1540) enseigne et évangélise.

| | Catholiques | Protestants |
|---|---|---|
| Autorité | Bible + tradition de l'Église, pape | la Bible seule |
| Sacrements | sept | deux (baptême, Cène) |
| Clergé | prêtres non mariés | pasteurs, peuvent se marier |
| Saints, Vierge | vénérés | pas de culte des saints |

## 3. Les guerres de Religion en France (1562-1598)
- Catholiques et protestants s'affrontent en huit guerres.
- Le **24 août 1572**, le **massacre de la Saint-Barthélemy** : à Paris, des milliers de protestants sont tués, puis en province.
- Le roi **Henri IV**, ancien protestant converti au catholicisme (1593), signe l'**édit de Nantes** en **1598** : les protestants obtiennent la liberté de conscience et, dans certains lieux, de culte. La paix revient.

> **À retenir** :
> - Vers 1450 : imprimerie de Gutenberg. 1517 : 95 thèses de Luther. 1545-1563 : concile de Trente. 1572 : massacre de la Saint-Barthélemy. 1598 : édit de Nantes.
> - L'humanisme met l'être humain et le savoir antique au centre ; la Réforme divise la chrétienté occidentale entre catholiques et protestants.
> - Vocabulaire : humanisme, Renaissance, indulgence, protestant, huguenot, concile, édit.
`,
      exercices: [
        { type: "qcm", question: "Quelle invention de Gutenberg, vers 1450, permet aux idées de circuler plus vite ?", choix: ["La boussole", "Le papier", "L'imprimerie à caractères mobiles", "La caravelle"], reponse: 2, explication: "L'imprimerie permet de produire les livres en grand nombre et moins cher." },
        { type: "saisie", question: "En quelle année Luther publie-t-il ses 95 thèses ?", reponses: ["1517", "en 1517"], explication: "Le 31 octobre 1517 selon la tradition, Luther dénonce la vente des indulgences." },
        { type: "vf", question: "Pour les protestants, seule la Bible fait autorité en matière de foi.", reponse: true, explication: "C'est un principe central de la Réforme : la Bible seule, sans l'autorité du pape." },
        { type: "qcm", question: "Quel humaniste a écrit *L'Éloge de la folie* ?", choix: ["Érasme", "Rabelais", "Calvin", "Copernic"], reponse: 0, explication: "Érasme, humaniste de Rotterdam, publie l'*Éloge de la folie* en 1511." },
        { type: "qcm", question: "Quel texte de 1598 met fin aux guerres de Religion en France ?", choix: ["Le concile de Trente", "La Saint-Barthélemy", "Le traité de Verdun", "L'édit de Nantes"], reponse: 3, explication: "Henri IV signe l'édit de Nantes en 1598 : les protestants obtiennent la liberté de conscience et une liberté de culte limitée." },
        { type: "saisie", question: "Comment appelle-t-on les protestants calvinistes en France ?", reponses: ["huguenots", "les huguenots", "huguenot"], explication: "Les huguenots sont les protestants français, principalement calvinistes." },
        { type: "vf", question: "Le concile de Trente accepte les idées de Luther pour réconcilier les chrétiens.", reponse: false, explication: "Le concile de Trente (1545-1563) réaffirme au contraire les dogmes catholiques : c'est la Réforme catholique." },
        { type: "redaction", question: "**Développement construit** : explique comment la chrétienté occidentale se divise au XVIe siècle et quelles en sont les conséquences en France.", corrige: `**Introduction** : Au XVIe siècle, l'unité de la chrétienté occidentale éclate entre catholiques et protestants.

**1. Les causes et les réformes protestantes**
- L'Église est critiquée : vente des **indulgences**, richesse du clergé. L'imprimerie et l'humanisme favorisent la lecture de la Bible et l'esprit critique.
- En **1517**, **Luther** publie ses 95 thèses : seule la foi sauve, seule la Bible fait autorité. Il est excommunié en 1521.
- **Calvin** diffuse la Réforme depuis Genève ; en Angleterre, **Henri VIII** crée l'anglicanisme (1534).

**2. La réponse catholique**
- Le **concile de Trente (1545-1563)** réaffirme les dogmes et améliore la formation des prêtres ; les **jésuites** enseignent et évangélisent.

**3. Les guerres de Religion en France**
- De **1562 à 1598**, catholiques et protestants (huguenots) s'affrontent.
- Le **24 août 1572**, le massacre de la **Saint-Barthélemy** fait des milliers de morts.
- **Henri IV** signe l'**édit de Nantes** (1598), qui accorde une liberté de culte limitée aux protestants.

**Conclusion** : la chrétienté d'Occident est désormais durablement divisée ; en France, la paix repose sur la tolérance accordée par le roi.` },
      ],
    },
    {
      id: "prince-roi-absolu",
      titre: "Du Prince de la Renaissance au roi absolu",
      theme: "Histoire – Transformations de l'Europe et ouverture sur le monde (XVIe-XVIIe siècles)",
      cours: `
## 1. François Ier, un prince de la Renaissance (1515-1547)
- **François Ier** devient roi en **1515** et remporte la même année la bataille de **Marignan** en Italie. Il rivalise toute sa vie avec Charles Quint.
- **Mécène**, il protège les artistes et les savants : il invite **Léonard de Vinci**, qui finit ses jours au Clos-Lucé près d'**Amboise** (mort en **1519**). Il fait construire le château de **Chambord** (commencé en 1519) et agrandir **Fontainebleau**.
- Il fonde le **Collège des lecteurs royaux** (1530, futur Collège de France) pour enseigner le grec, l'hébreu, le latin.
- Il renforce l'État : l'**ordonnance de Villers-Cotterêts** (**1539**) impose le **français** dans les actes officiels et de justice, et oblige les curés à tenir des registres des baptêmes (ancêtres de l'état civil).
- Il décide seul, entouré de conseillers : « Car tel est notre plaisir ».

## 2. Vers l'absolutisme (1589-1661)
- **Henri IV** (1589-1610), premier roi **Bourbon**, rétablit la paix (édit de Nantes, 1598) ; il est assassiné par Ravaillac en **1610**.
- **Louis XIII** (1610-1643) et son ministre le cardinal de **Richelieu** renforcent l'autorité royale contre les nobles et les protestants (siège de La Rochelle, 1628).
- Pendant l'enfance de **Louis XIV**, la **Fronde** (**1648-1653**), révolte des parlementaires et des nobles, menace le pouvoir royal. Le jeune roi en garde un mauvais souvenir.

## 3. Louis XIV, le roi absolu (1643-1715)
- Roi à 4 ans en **1643**, il gouverne seul à partir de **1661**, à la mort du cardinal Mazarin, sans Premier ministre.
- C'est une **monarchie absolue de droit divin** : le roi tient son pouvoir de Dieu (idée défendue par l'évêque **Bossuet**) ; il concentre tous les pouvoirs (faire les lois, rendre la justice, diriger l'armée, lever les impôts) et n'a de comptes à rendre qu'à Dieu.
- Il gouverne avec des **ministres** (comme **Colbert** pour les finances et l'économie) et contrôle les provinces grâce aux **intendants**.
- Il se fait appeler le **Roi-Soleil**. Il s'installe à **Versailles** en **1682** : le château est un instrument de pouvoir où il domestique la noblesse par l'**étiquette** et la vie de cour. Il protège les artistes (Molière, Lully, Le Brun) et fonde des académies.
- Il veut l'unité religieuse : par l'**édit de Fontainebleau** (**1685**), il **révoque l'édit de Nantes** ; malgré l'interdiction, environ 150 000 à 200 000 protestants fuient la France (Provinces-Unies, Prusse, Angleterre, Suisse).
- Ses nombreuses guerres agrandissent le royaume mais ruinent les finances. Il meurt en **1715**.

> **À retenir** :
> - 1515 : François Ier roi, victoire de Marignan. 1539 : ordonnance de Villers-Cotterêts. 1661 : début du gouvernement personnel de Louis XIV. 1682 : installation à Versailles. 1685 : révocation de l'édit de Nantes. 1715 : mort de Louis XIV.
> - François Ier est un prince mécène qui renforce l'État ; Louis XIV incarne la monarchie absolue de droit divin.
> - Vocabulaire : mécène, monarchie absolue, droit divin, intendant, courtisan, étiquette.
`,
      exercices: [
        { type: "saisie", question: "En quelle année François Ier remporte-t-il la bataille de Marignan ?", reponses: ["1515", "en 1515"], explication: "Marignan (1515), en Italie, est la première grande victoire de François Ier." },
        { type: "qcm", question: "Qu'impose l'ordonnance de Villers-Cotterêts (1539) ?", choix: ["La liberté de culte pour les protestants", "L'usage du français dans les actes officiels et de justice", "La création d'une armée permanente", "L'installation de la cour à Versailles"], reponse: 1, explication: "Elle impose le français à la place du latin dans les actes de justice et administratifs." },
        { type: "vf", question: "Un mécène est une personne riche qui protège et finance les artistes.", reponse: true, explication: "François Ier, mécène, accueille par exemple Léonard de Vinci." },
        { type: "qcm", question: "À partir de quelle date Louis XIV gouverne-t-il seul, sans Premier ministre ?", choix: ["1643", "1648", "1661", "1682"], reponse: 2, explication: "En 1661, à la mort de Mazarin, Louis XIV décide de gouverner seul. 1643 est la date où il devient roi, enfant." },
        { type: "saisie", question: "Comment s'appellent les représentants du roi chargés de contrôler les provinces sous Louis XIV ?", reponses: ["intendants", "les intendants", "intendant"], explication: "Les intendants appliquent les décisions du roi en matière de justice, de police et de finances." },
        { type: "vf", question: "Louis XIV confirme l'édit de Nantes en 1685.", reponse: false, explication: "Au contraire : en 1685, par l'édit de Fontainebleau, il **révoque** l'édit de Nantes et interdit le protestantisme." },
        { type: "qcm", question: "Que signifie « monarchie de droit divin » ?", choix: ["Le roi est élu par le peuple", "Le roi partage son pouvoir avec le pape", "Le roi tient son pouvoir de Dieu", "Le roi obéit aux États généraux"], reponse: 2, explication: "Le roi est sacré et considéré comme le représentant de Dieu sur terre : il n'a de comptes à rendre qu'à Dieu." },
        { type: "redaction", question: "**Paragraphe argumenté** : montre que Louis XIV est un roi absolu. Appuie-toi sur des exemples précis.", corrige: `Louis XIV, roi de 1643 à 1715, est un **roi absolu**. D'abord, il tient son pouvoir de **Dieu** : il est sacré à Reims et l'évêque **Bossuet** affirme que le roi est le représentant de Dieu sur terre (monarchie de **droit divin**). Ensuite, il **concentre tous les pouvoirs** : à partir de **1661**, il gouverne seul, sans Premier ministre ; il fait les lois, rend la justice, dirige l'armée et lève les impôts. Ses **ministres**, comme Colbert, lui obéissent, et les **intendants** font appliquer ses ordres dans les provinces. Il contrôle aussi la noblesse : à **Versailles**, où il s'installe en **1682**, les nobles vivent à la cour sous son regard et suivent l'**étiquette**. Enfin, il impose l'unité religieuse en révoquant l'édit de Nantes en **1685**. Le Roi-Soleil incarne ainsi la monarchie absolue.` },
      ],
    },
    {
      id: "demographie-developpement",
      titre: "La question démographique et l'inégal développement",
      theme: "Géographie – La question démographique et l'inégal développement",
      cours: `
## 1. Une population mondiale nombreuse et en croissance
- La population mondiale a dépassé **8 milliards** d'habitants en **2022** (elle n'était que d'environ 1 milliard vers 1800 et 2,5 milliards en 1950). L'ONU prévoit environ **9,7 milliards en 2050**.
- Elle est **inégalement répartie** : trois grands **foyers de peuplement** rassemblent l'essentiel de l'humanité : l'**Asie de l'Est** (Chine, Japon), l'**Asie du Sud** (Inde, Bangladesh) et l'**Europe**. Viennent ensuite des foyers secondaires (golfe de Guinée, vallée du Nil, nord-est des États-Unis…).
- De vastes espaces sont presque vides : déserts chauds (Sahara), régions froides (Sibérie, Grand Nord canadien), forêts équatoriales (Amazonie), hautes montagnes.
- Les deux pays les plus peuplés sont l'**Inde** (le plus peuplé depuis 2023) et la **Chine**, avec chacun plus de 1,4 milliard d'habitants.
- Plus de la moitié de l'humanité vit en **ville**.

## 2. Les indicateurs démographiques
| Notion | Définition |
|---|---|
| Taux de natalité | nombre de naissances pour 1 000 habitants en un an |
| Taux de mortalité | nombre de décès pour 1 000 habitants en un an |
| Accroissement naturel | natalité − mortalité |
| Indice de fécondité | nombre moyen d'enfants par femme |
| Espérance de vie | nombre moyen d'années qu'un nouveau-né peut espérer vivre |

>! **Exemple** : si un pays a un taux de natalité de 30 ‰ et un taux de mortalité de 10 ‰, son taux d'accroissement naturel est de 30 − 10 = 20 ‰, soit 2 % par an.

## 3. La transition démographique
C'est le passage d'un régime démographique **traditionnel** (natalité et mortalité fortes) à un régime **moderne** (natalité et mortalité faibles).
1. La mortalité baisse d'abord (progrès de l'hygiène, de la médecine, de l'alimentation), alors que la natalité reste forte : la population augmente très vite.
2. Puis la natalité baisse à son tour (scolarisation des filles, contraception, urbanisation) : la croissance ralentit.
- L'Europe et le Japon ont achevé leur transition : leur population **vieillit** (Allemagne, Italie, Japon). Indice de fécondité du Japon : environ 1,2 enfant par femme.
- L'Afrique subsaharienne est encore en transition : population très **jeune**, croissance rapide (indice de fécondité du **Niger** proche de 6 enfants par femme).
- Certains États mènent des **politiques démographiques** : la Chine a imposé la politique de l'**enfant unique** (1979-2015) ; d'autres pays encouragent la natalité (France, Corée du Sud).

## 4. Un développement inégal
- Le **développement** est l'amélioration des conditions de vie de la population (revenus, santé, éducation…).
- On le mesure avec l'**IDH** (indice de développement humain), calculé par l'ONU (PNUD) : il est compris entre **0 et 1** et combine **trois critères** : l'**espérance de vie**, le **niveau d'éducation** (durée de scolarisation) et le **revenu par habitant**.
- Les pays les plus développés (Suisse, Norvège : IDH supérieur à 0,95) s'opposent aux pays les moins avancés (Somalie, Soudan du Sud, Niger, Tchad : IDH inférieur à 0,45), surtout en **Afrique subsaharienne**.
- Les inégalités existent aussi **à l'intérieur des pays** : entre villes et campagnes, entre quartiers riches et bidonvilles (à Mumbai, Lagos, Rio…).
- Croissance démographique et développement sont liés : une population jeune et nombreuse impose de construire écoles, hôpitaux, logements et de créer des emplois.

> **À retenir** :
> - Plus de 8 milliards d'humains, concentrés en Asie de l'Est, Asie du Sud et Europe.
> - La transition démographique explique les différences : Europe vieillissante, Afrique jeune en forte croissance.
> - L'IDH (entre 0 et 1) mesure le développement à partir de l'espérance de vie, de l'éducation et du revenu.
> - Vocabulaire : foyer de peuplement, densité, natalité, mortalité, fécondité, transition démographique, IDH.
`,
      exercices: [
        { type: "qcm", question: "Quels sont les trois grands foyers de peuplement du monde ?", choix: ["Amérique du Nord, Europe, Australie", "Asie de l'Est, Asie du Sud, Europe", "Afrique, Amérique du Sud, Asie", "Sahara, Sibérie, Amazonie"], reponse: 1, explication: "L'Asie de l'Est, l'Asie du Sud et l'Europe concentrent l'essentiel de la population. Sahara, Sibérie, Amazonie sont au contraire des vides." },
        { type: "saisie", question: "Quel pays est le plus peuplé du monde depuis 2023 ?", reponses: ["Inde", "l'Inde"], explication: "Selon l'ONU, l'Inde a dépassé la Chine en 2023 ; les deux comptent plus de 1,4 milliard d'habitants." },
        { type: "vf", question: "L'IDH est compris entre 0 et 100.", reponse: false, explication: "L'IDH est compris entre **0 et 1** : plus il est proche de 1, plus le pays est développé." },
        { type: "qcm", question: "Lequel de ces critères n'entre PAS dans le calcul de l'IDH ?", choix: ["L'espérance de vie", "Le niveau d'éducation", "Le revenu par habitant", "La superficie du pays"], reponse: 3, explication: "L'IDH combine santé (espérance de vie), éducation et revenu ; la superficie n'a rien à voir." },
        { type: "saisie", question: "Un pays a un taux de natalité de 35 ‰ et un taux de mortalité de 8 ‰. Quel est son taux d'accroissement naturel (en ‰) ?", reponses: ["27", "27 ‰", "27 pour mille"], explication: "Accroissement naturel = natalité − mortalité = 35 − 8 = 27 ‰." },
        { type: "qcm", question: "Durant la première phase de la transition démographique…", choix: ["la mortalité baisse alors que la natalité reste forte", "la natalité baisse alors que la mortalité reste forte", "natalité et mortalité augmentent", "la population diminue"], reponse: 0, explication: "La mortalité baisse en premier (médecine, hygiène) ; la natalité baisse plus tard : la population augmente fortement." },
        { type: "vf", question: "La population du Japon est vieillissante, avec un indice de fécondité d'environ 1,2 enfant par femme.", reponse: true, explication: "Le Japon a achevé sa transition depuis longtemps ; sa population diminue et vieillit." },
        { type: "redaction", question: "**Développement construit** : montre que la croissance démographique et le développement sont inégaux dans le monde. Donne des exemples précis.", corrige: `**Introduction** : La population mondiale dépasse 8 milliards d'habitants depuis 2022, mais elle évolue et se développe de façon très inégale.

**1. Une croissance démographique inégale**
- Les pays ont atteint des étapes différentes de la **transition démographique**.
- L'Afrique subsaharienne a encore une forte natalité : au **Niger**, près de 6 enfants par femme ; la population est jeune et augmente vite.
- L'Europe et le Japon ont achevé leur transition : faible fécondité (environ 1,2 au Japon), population **vieillissante**.

**2. Un développement inégal**
- L'**IDH** (espérance de vie, éducation, revenu) dépasse 0,95 en Suisse ou en Norvège, mais reste inférieur à 0,45 au Niger ou au Tchad.
- Les inégalités existent aussi à l'intérieur des pays : quartiers riches et bidonvilles à Mumbai ou Lagos.

**3. Des liens entre population et développement**
- Une forte croissance oblige à construire écoles, hôpitaux, logements et à créer des emplois.
- Le développement (scolarisation des filles, santé) fait baisser la fécondité.

**Conclusion** : la question démographique et celle du développement sont liées ; elles posent le défi de répondre aux besoins d'une population encore en croissance.` },
      ],
    },
    {
      id: "energie-eau",
      titre: "Des ressources limitées : l'énergie et l'eau",
      theme: "Géographie – Des ressources limitées, à gérer et à renouveler",
      cours: `
## 1. L'énergie, une ressource inégalement produite et consommée
- Une **ressource** est un élément (naturel le plus souvent) que les sociétés utilisent pour satisfaire leurs besoins.
- On distingue les énergies **non renouvelables**, dont les stocks s'épuisent : énergies **fossiles** (pétrole, charbon, gaz naturel) et **uranium** (nucléaire) ; et les énergies **renouvelables**, qui se reconstituent : solaire, éolien, hydraulique, géothermie, biomasse.
- Les énergies fossiles fournissent encore environ **80 %** de l'énergie consommée dans le monde. Leur combustion émet des **gaz à effet de serre** (CO₂) responsables du réchauffement climatique.
- Production et consommation sont inégales : de grands producteurs (Arabie saoudite, Russie, États-Unis pour les hydrocarbures) ; de grands consommateurs (Chine, États-Unis, Union européenne). Un habitant des pays riches consomme bien plus d'énergie qu'un habitant d'un pays pauvre ; des centaines de millions de personnes n'ont pas accès à l'électricité, surtout en Afrique subsaharienne.
- La **transition énergétique** consiste à réduire la part des énergies fossiles au profit des énergies renouvelables, et à consommer moins (économies, isolation des logements). Exemple : la France produit son électricité surtout grâce au **nucléaire** (environ deux tiers) et développe l'éolien et le solaire.

## 2. L'eau, une ressource vitale inégalement répartie
- La Terre est couverte d'eau, mais **97,5 %** de cette eau est salée. L'eau douce (2,5 %) est surtout bloquée dans les glaciers ; une toute petite part est facilement accessible (fleuves, lacs, nappes souterraines).
- L'**agriculture** (irrigation) représente environ **70 %** des prélèvements d'eau douce dans le monde, devant l'industrie et les usages domestiques.
- La ressource est inégalement répartie : régions bien arrosées (Amazonie, Asie des moussons) et régions arides (Sahara, Moyen-Orient). On parle de **stress hydrique** lorsque la demande dépasse les ressources disponibles.
- Plus de **2 milliards** de personnes (environ une sur quatre) n'ont pas accès à une eau potable gérée en toute sécurité (OMS-UNICEF). L'eau insalubre provoque des maladies (choléra, diarrhées).
- L'eau peut être source de **tensions** entre États qui partagent un fleuve : le Nil (Égypte, Soudan, Éthiopie et son grand barrage de la Renaissance), le Tigre et l'Euphrate (Turquie, Syrie, Irak).

## 3. Gérer durablement les ressources
- Le **développement durable** répond aux besoins du présent sans compromettre ceux des générations futures (rapport Brundtland, **1987**). Il repose sur trois piliers : **économique**, **social**, **environnemental**.
- Solutions pour l'eau : irrigation au **goutte-à-goutte**, recyclage des eaux usées, **dessalement** de l'eau de mer (coûteux en énergie : Israël, pays du Golfe), lutte contre les fuites.
- Solutions pour l'énergie : énergies renouvelables, sobriété, transports moins polluants.

> **À retenir** :
> - Les énergies fossiles (non renouvelables) dominent encore ; la transition énergétique vise les énergies renouvelables.
> - L'eau douce est rare et inégalement répartie ; l'agriculture en consomme environ 70 % ; plus de 2 milliards de personnes n'ont pas accès à une eau potable sûre.
> - Le développement durable cherche à concilier économie, société et environnement.
> - Vocabulaire : ressource, énergie renouvelable / fossile, transition énergétique, stress hydrique, développement durable.
`,
      exercices: [
        { type: "qcm", question: "Laquelle de ces énergies est renouvelable ?", choix: ["Le pétrole", "Le charbon", "L'énergie solaire", "Le gaz naturel"], reponse: 2, explication: "Le solaire se renouvelle sans cesse ; pétrole, charbon et gaz sont des énergies fossiles dont les stocks s'épuisent." },
        { type: "vf", question: "Les énergies fossiles fournissent encore environ 80 % de l'énergie consommée dans le monde.", reponse: true, explication: "Pétrole, charbon et gaz dominent toujours, malgré la croissance des renouvelables." },
        { type: "saisie", question: "Quelle activité représente environ 70 % des prélèvements d'eau douce dans le monde ?", reponses: ["agriculture", "l'agriculture", "irrigation", "l'irrigation"], explication: "L'irrigation des cultures est de loin le premier usage de l'eau douce." },
        { type: "qcm", question: "Que désigne le stress hydrique ?", choix: ["Une inondation", "Une situation où la demande en eau dépasse les ressources disponibles", "La pollution des océans", "La fonte des glaciers"], reponse: 1, explication: "Le stress hydrique touche notamment le Moyen-Orient et l'Afrique du Nord." },
        { type: "qcm", question: "Quels sont les trois piliers du développement durable ?", choix: ["Économique, social, environnemental", "Politique, militaire, religieux", "Agricole, industriel, touristique", "Local, national, mondial"], reponse: 0, explication: "Le développement durable doit être économiquement viable, socialement équitable et respectueux de l'environnement." },
        { type: "vf", question: "Le dessalement de l'eau de mer est une solution peu coûteuse en énergie.", reponse: false, explication: "Le dessalement consomme beaucoup d'énergie et coûte cher ; il est surtout utilisé par des pays riches et arides (pays du Golfe, Israël)." },
        { type: "saisie", question: "Quelle source fournit environ deux tiers de l'électricité produite en France ?", reponses: ["nucleaire", "le nucleaire", "energie nucleaire", "l'energie nucleaire"], explication: "Le parc de centrales nucléaires produit la majorité de l'électricité française." },
        { type: "redaction", question: "**Paragraphe argumenté** : explique pourquoi l'eau est une ressource inégalement répartie et comment on peut mieux la gérer.", corrige: `L'eau est une ressource vitale mais **limitée** : 97,5 % de l'eau sur Terre est salée et l'eau douce est en grande partie bloquée dans les glaciers. Elle est **inégalement répartie** : certaines régions sont très arrosées (Amazonie, Asie des moussons) tandis que d'autres sont arides (Sahara, Moyen-Orient) et souffrent de **stress hydrique**. L'accès à l'eau dépend aussi du **développement** : plus de **2 milliards** de personnes n'ont pas accès à une eau potable sûre, surtout dans les pays pauvres. Le partage des fleuves crée des **tensions**, comme sur le Nil entre l'Égypte et l'Éthiopie. Pour mieux gérer cette ressource, on peut économiser l'eau d'irrigation (l'agriculture utilise environ 70 % des prélèvements) grâce au **goutte-à-goutte**, recycler les eaux usées, réparer les fuites, ou **dessaler** l'eau de mer, une solution efficace mais coûteuse. Il s'agit de gérer l'eau de façon **durable**.` },
      ],
    },
    {
      id: "alimentation",
      titre: "Des ressources limitées : nourrir les humains",
      theme: "Géographie – Des ressources limitées, à gérer et à renouveler",
      cours: `
## 1. Une production suffisante, mais une alimentation inégale
- La production agricole mondiale a fortement augmenté et suffirait en théorie à nourrir toute l'humanité.
- Pourtant, environ **700 millions** de personnes (entre 670 et 750 millions selon les années et les estimations de la FAO) souffrent de **sous-alimentation** (elles ne mangent pas assez de calories), surtout en **Afrique subsaharienne** et en **Asie du Sud**. D'autres souffrent de **malnutrition** (alimentation déséquilibrée, carences).
- À l'inverse, dans les pays riches et de plus en plus dans les pays émergents, l'**obésité** progresse, et beaucoup de nourriture est gaspillée.
- La **sécurité alimentaire**, c'est quand toutes les personnes ont à tout moment accès à une nourriture suffisante, saine et nutritive.
- Les causes de l'insécurité alimentaire sont surtout la **pauvreté**, les **guerres** (Soudan, Yémen…), les catastrophes climatiques (sécheresses) et les prix élevés.

## 2. Des agricultures très différentes
| | Agriculture vivrière | Agriculture productiviste (intensive) |
|---|---|---|
| But | nourrir la famille, vendre un petit surplus | produire beaucoup pour vendre, souvent à l'export |
| Moyens | travail manuel, peu de machines | machines, engrais, pesticides, irrigation |
| Où | Afrique subsaharienne, Asie rurale | États-Unis, Europe, Brésil |
- La **révolution verte** (à partir des années **1960**, en Inde notamment) a augmenté les rendements grâce à des semences sélectionnées, aux engrais et à l'irrigation : l'Inde est devenue autosuffisante en céréales, mais au prix de la pollution des sols et de l'épuisement des nappes d'eau.
- L'agriculture productiviste pose des problèmes : pollution des sols et des rivières, **déforestation** (Amazonie, pour le soja et l'élevage), perte de biodiversité, émissions de gaz à effet de serre.

## 3. Vers une agriculture durable
- **Agriculture biologique** (sans engrais ni pesticides chimiques), **agroécologie** (utiliser les ressources naturelles : haies, rotation des cultures).
- **Circuits courts** (vente directe du producteur au consommateur), lutte contre le **gaspillage** alimentaire.
- Aider les petits paysans des pays pauvres (accès à l'eau, aux semences, aux marchés). Le **Programme alimentaire mondial** (PAM, ONU) distribue une aide d'urgence.

> **À retenir** :
> - Environ 700 millions de personnes sont sous-alimentées, surtout en Afrique subsaharienne et en Asie du Sud, en raison de la pauvreté et des conflits.
> - L'agriculture productiviste produit beaucoup mais abîme l'environnement ; l'agriculture vivrière nourrit les familles avec peu de moyens.
> - Il faut produire plus et mieux : agriculture durable, circuits courts, moins de gaspillage.
> - Vocabulaire : sous-alimentation, malnutrition, sécurité alimentaire, agriculture vivrière, productiviste, révolution verte.
`,
      exercices: [
        { type: "qcm", question: "Combien de personnes environ souffrent de sous-alimentation dans le monde ?", choix: ["7 millions", "70 millions", "700 millions", "7 milliards"], reponse: 2, explication: "Selon la FAO, environ 700 millions de personnes ne mangent pas à leur faim (673 millions estimés en 2024), soit environ une personne sur 12." },
        { type: "vf", question: "La sous-alimentation s'explique surtout par une production agricole mondiale insuffisante.", reponse: false, explication: "La production suffirait en théorie ; la faim s'explique surtout par la **pauvreté**, les **guerres** et les catastrophes, qui empêchent l'accès à la nourriture." },
        { type: "saisie", question: "Comment appelle-t-on l'agriculture qui sert d'abord à nourrir la famille du paysan ?", reponses: ["vivriere", "agriculture vivriere", "l'agriculture vivriere"], explication: "L'agriculture vivrière est pratiquée par des centaines de millions de petits paysans." },
        { type: "qcm", question: "Quelle est la différence entre sous-alimentation et malnutrition ?", choix: ["Aucune, ce sont des synonymes", "La sous-alimentation : pas assez de calories ; la malnutrition : alimentation déséquilibrée", "La malnutrition ne touche que les pays riches", "La sous-alimentation concerne seulement les enfants"], reponse: 1, explication: "On peut manger assez de calories mais souffrir de carences (malnutrition) ; l'obésité est aussi une forme de malnutrition." },
        { type: "qcm", question: "La révolution verte des années 1960 a permis à l'Inde…", choix: ["d'abandonner l'agriculture", "de devenir autosuffisante en céréales", "de supprimer l'irrigation", "d'interdire les engrais"], reponse: 1, explication: "Semences sélectionnées, engrais et irrigation ont fait augmenter les rendements, avec des effets négatifs sur l'environnement." },
        { type: "vf", question: "Les circuits courts réduisent le nombre d'intermédiaires entre le producteur et le consommateur.", reponse: true, explication: "Exemple : vente à la ferme, AMAP, marchés de producteurs." },
        { type: "qcm", question: "Quel problème environnemental est lié à l'extension des cultures de soja et de l'élevage au Brésil ?", choix: ["La déforestation de l'Amazonie", "La fonte des glaciers alpins", "La montée des eaux en Hollande", "La désertification du Sahara"], reponse: 0, explication: "Le front pionnier agricole avance sur la forêt amazonienne." },
        { type: "redaction", question: "**Développement construit** : montre que nourrir les humains est un défi et présente des solutions pour y répondre.", corrige: `**Introduction** : Avec plus de 8 milliards d'habitants, nourrir l'humanité de façon suffisante et durable est un grand défi.

**1. Des inégalités alimentaires**
- Environ **700 millions** de personnes sont **sous-alimentées**, surtout en Afrique subsaharienne et en Asie du Sud.
- Causes : **pauvreté**, **guerres** (Soudan, Yémen), sécheresses, prix élevés.
- Dans les pays riches, au contraire, obésité et **gaspillage**.

**2. Des agricultures inégales et leurs limites**
- L'agriculture **productiviste** (États-Unis, Europe, Brésil) produit beaucoup mais pollue, épuise l'eau et provoque la déforestation (Amazonie).
- L'agriculture **vivrière** manque de moyens. La **révolution verte** a aidé l'Inde, avec des effets négatifs sur l'environnement.

**3. Des solutions durables**
- Agroécologie, agriculture biologique, circuits courts.
- Réduire le gaspillage, aider les petits paysans, aide d'urgence du PAM.

**Conclusion** : il ne suffit pas de produire plus : il faut produire mieux et mieux répartir la nourriture.` },
      ],
    },
    {
      id: "risques-changement-global",
      titre: "Prévenir les risques, s'adapter au changement global",
      theme: "Géographie – Prévenir les risques, s'adapter au changement global",
      cours: `
## 1. Aléa, vulnérabilité, risque
- Un **aléa** est un phénomène naturel ou technologique qui peut se produire (séisme, cyclone, inondation, explosion d'usine…).
- Les **enjeux** sont les personnes et les biens exposés ; la **vulnérabilité** mesure à quel point ils peuvent être touchés.
- Le **risque** est la rencontre entre un aléa et des enjeux vulnérables : **risque = aléa × vulnérabilité**. Un séisme dans un désert vide n'est pas un risque majeur.
- Une **catastrophe** se produit quand l'aléa frappe et cause de lourds dégâts.
- On distingue les risques **naturels** (séismes, éruptions volcaniques, cyclones, inondations, sécheresses) et **technologiques** (accident industriel, nucléaire).

## 2. Des sociétés inégalement vulnérables
- Le **12 janvier 2010**, un séisme de magnitude 7 frappe **Haïti**, pays pauvre : plus de 200 000 morts selon les estimations (le bilan exact reste incertain). Les constructions sont fragiles et les secours limités.
- Le **11 mars 2011**, au **Japon**, pays riche et préparé, un séisme de magnitude 9 provoque un **tsunami** qui fait environ 18 000 morts et disparus et entraîne l'**accident nucléaire de Fukushima** : même un pays développé n'est jamais totalement à l'abri.
- Les pays riches ont plus de moyens pour prévenir et réparer ; les pays pauvres sont plus **vulnérables**. Les populations pauvres vivent souvent dans des zones exposées (bidonvilles sur des pentes, zones inondables).

## 3. Les risques industriels et technologiques
- Ils naissent des activités humaines : usines chimiques, centrales nucléaires, dépôts de carburant, transport de matières dangereuses. Les usines sont souvent proches des villes, ce qui augmente les **enjeux**.
- **Exemples** : explosion de l'usine **AZF** à **Toulouse** (21 septembre 2001, 31 morts et des milliers de blessés) ; incendie de l'usine **Lubrizol** à **Rouen** (26 septembre 2019, nuage de fumée sur l'agglomération) ; catastrophe de **Bhopal** en Inde (1984, des milliers de morts, dans un pays moins protégé) ; accident nucléaire de **Tchernobyl** (Ukraine, alors en URSS, 1986) ; explosion du port de **Beyrouth** (Liban, 2020, plus de 200 morts).
- **Prévention** : les sites dangereux sont classés « **Seveso** » (du nom d'une ville italienne touchée par un accident chimique en 1976) et surveillés par l'État ; depuis 2003 (loi votée après AZF), des **plans de prévention des risques technologiques** (PPRT) limitent l'urbanisation autour des usines ; sirènes d'alerte (essai le premier mercredi du mois), exercices de confinement, information des habitants.
- Ici encore, les pays pauvres, où les normes sont moins appliquées, sont plus **vulnérables**.

## 4. Le changement global
- Le **changement climatique** : la température moyenne de la Terre a augmenté d'environ **1,1 à 1,3 °C** depuis la fin du XIXe siècle (et 2024 a été la première année à plus de 1,5 °C), à cause des **gaz à effet de serre** émis par les activités humaines (combustion des énergies fossiles, déforestation, élevage).
- Conséquences : fonte des glaciers et des banquises, **montée du niveau des mers** (menace pour les deltas comme celui du **Bangladesh**, les îles basses comme les Maldives ou Tuvalu), multiplication des canicules, sécheresses, cyclones plus violents.
- Le **GIEC** (groupe d'experts créé en **1988**) étudie ces évolutions. L'**accord de Paris** (**2015**, COP21) vise à limiter le réchauffement **bien en dessous de 2 °C**, si possible à **1,5 °C**.
- Le changement global inclut aussi la **perte de biodiversité** et l'épuisement des ressources.

## 5. Prévenir et s'adapter
- **Prévoir** : surveillance (sismographes, satellites, météo), alertes.
- **Prévenir** : normes de construction **parasismiques**, digues, interdiction de construire en zone inondable (en France, les **plans de prévention des risques**), information et exercices (au collège : le plan particulier de mise en sûreté, **PPMS**).
- **Atténuer** le changement climatique : réduire les émissions de gaz à effet de serre.
- **S'adapter** : végétaliser les villes contre les canicules, cultures résistantes à la sécheresse, relocaliser des habitations menacées par la mer.

> **À retenir** :
> - Risque = aléa × vulnérabilité ; les pays pauvres sont plus vulnérables (Haïti 2010) mais les pays riches ne sont pas à l'abri (Japon 2011).
> - Le changement climatique, causé par les gaz à effet de serre, augmente certains risques. Accord de Paris (2015) : limiter le réchauffement sous 2 °C.
> - Les risques industriels et technologiques (AZF à Toulouse en 2001, Lubrizol à Rouen en 2019) sont encadrés par la classification Seveso et les PPRT.
> - Il faut prévoir, prévenir, atténuer et s'adapter.
> - Vocabulaire : aléa, enjeu, vulnérabilité, risque, catastrophe, risque technologique, changement climatique, GIEC, adaptation.
`,
      exercices: [
        { type: "qcm", question: "Comment définit-on un risque ?", choix: ["Un phénomène naturel quel qu'il soit", "La rencontre entre un aléa et des enjeux vulnérables", "Une catastrophe déjà passée", "Une zone sans habitants"], reponse: 1, explication: "Sans population ni biens exposés, un aléa n'est pas un risque majeur." },
        { type: "saisie", question: "Quel mot désigne le phénomène (séisme, cyclone…) qui peut se produire ?", reponses: ["alea", "un alea", "l'alea"], explication: "L'aléa est le phénomène lui-même ; il devient un risque quand il menace des enjeux." },
        { type: "vf", question: "Un même séisme fait en général plus de victimes dans un pays pauvre que dans un pays riche.", reponse: true, explication: "Les pays pauvres ont des constructions plus fragiles et moins de moyens de secours : leur vulnérabilité est plus grande." },
        { type: "qcm", question: "Quelle catastrophe a frappé le Japon le 11 mars 2011 ?", choix: ["Un cyclone et une inondation", "Une éruption volcanique", "Un séisme suivi d'un tsunami et d'un accident nucléaire", "Une canicule"], reponse: 2, explication: "Le séisme de magnitude 9 a provoqué un tsunami et l'accident de la centrale de Fukushima." },
        { type: "saisie", question: "En quelle année l'accord de Paris sur le climat a-t-il été signé ?", reponses: ["2015", "en 2015"], explication: "L'accord de Paris est adopté lors de la COP21, en décembre 2015." },
        { type: "vf", question: "La montée du niveau des mers menace particulièrement les deltas et les îles basses.", reponse: true, explication: "Le delta du Bangladesh, les Maldives ou Tuvalu sont parmi les espaces les plus menacés." },
        { type: "qcm", question: "Laquelle de ces mesures relève de la prévention du risque sismique ?", choix: ["Construire selon des normes parasismiques", "Construire en zone inondable", "Supprimer les alertes", "Augmenter les émissions de CO₂"], reponse: 0, explication: "Les normes parasismiques permettent aux bâtiments de résister aux secousses." },
        { type: "redaction", question: "**Développement construit** : à partir des exemples d'Haïti (2010) et du Japon (2011), montre que les sociétés sont inégalement vulnérables face aux risques, puis présente les moyens de s'en protéger.", corrige: `**Introduction** : Un risque naît de la rencontre entre un **aléa** et des **enjeux vulnérables**. Face aux séismes, toutes les sociétés ne sont pas égales.

**1. Haïti, une société très vulnérable**
- Le **12 janvier 2010**, un séisme de magnitude 7 frappe Port-au-Prince : plus de 200 000 morts selon les estimations.
- Pays pauvre : constructions fragiles, peu de normes, secours limités, aide internationale nécessaire.

**2. Le Japon, un pays préparé mais pas invulnérable**
- Le **11 mars 2011**, un séisme de magnitude 9 – bien plus puissant – provoque un **tsunami** (environ 18 000 morts et disparus) et l'accident nucléaire de **Fukushima**.
- Les bâtiments parasismiques ont limité les dégâts du séisme, mais le tsunami a dépassé les digues.

**3. Se protéger des risques**
- Prévoir : surveillance, systèmes d'alerte.
- Prévenir : normes parasismiques, digues, interdire de construire en zone dangereuse, exercices.
- S'adapter au changement climatique, qui aggrave certains risques (inondations, cyclones).

**Conclusion** : la vulnérabilité dépend du niveau de développement ; la prévention réduit les dégâts, sans supprimer totalement le risque.` },
        { type: "qcm", question: "Dans quelle ville l'usine chimique AZF a-t-elle explosé le 21 septembre 2001 ?", choix: ["Rouen", "Lyon", "Toulouse", "Marseille"], reponse: 2, explication: "L'explosion d'AZF à **Toulouse** a fait 31 morts. À **Rouen**, c'est l'usine Lubrizol qui a brûlé en 2019." },
        { type: "vf", question: "Un risque technologique est provoqué par un phénomène naturel comme un séisme.", reponse: false, explication: "Un risque **technologique** (ou industriel) naît des activités humaines : usine chimique, centrale nucléaire, transport de matières dangereuses. Un séisme est un aléa **naturel**, même s'il peut déclencher un accident technologique (Fukushima)." },
        { type: "redaction", question: "**Paragraphe argumenté** : à partir de l'exemple d'AZF (Toulouse, 2001), explique pourquoi les risques industriels menacent particulièrement les villes et comment on cherche à les prévenir.", corrige: `Le **21 septembre 2001**, l'usine chimique **AZF** explose à **Toulouse** : 31 personnes meurent et des milliers d'habitations sont endommagées. Cet exemple montre que les risques industriels menacent surtout les **villes** : beaucoup d'usines dangereuses, construites autrefois à l'écart, ont été rattrapées par l'urbanisation, si bien que de nombreux habitants, écoles et commerces (les **enjeux**) se trouvent tout près de l'**aléa**. Pour prévenir ces risques, l'État classe les sites les plus dangereux « **Seveso** » et les contrôle ; après AZF, une loi de 2003 crée les **plans de prévention des risques technologiques** (PPRT), qui limitent les constructions autour des usines. Les habitants sont informés, des sirènes d'alerte sont testées et des exercices de confinement sont organisés, au collège aussi (PPMS). Ces mesures réduisent la **vulnérabilité**, mais le risque zéro n'existe pas, comme l'a rappelé l'incendie de Lubrizol à Rouen en 2019.` },
      ],
    },
    {
      id: "methode-hg",
      titre: "Méthode : repères, documents, croquis et vocabulaire",
      theme: "Méthodes",
      cours: `
## 1. Les grands repères chronologiques de 5e
| Date | Événement |
|---|---|
| 622 | Hégire (début du calendrier musulman) |
| 800 | Charlemagne couronné empereur |
| 987 | Hugues Capet, roi : début des Capétiens |
| 1054 | Schisme entre catholiques et orthodoxes |
| 1095-1099 | Première croisade, prise de Jérusalem |
| 1258 | Prise de Bagdad par les Mongols |
| 1337-1453 | Guerre de Cent Ans |
| 1347-1352 | Peste noire |
| 1453 | Prise de Constantinople par les Ottomans |
| 1492 | Christophe Colomb en Amérique |
| 1517 | Les 95 thèses de Luther |
| 1572 | Massacre de la Saint-Barthélemy |
| 1598 | Édit de Nantes |
| 1661-1715 | Règne personnel de Louis XIV |

>! **Astuce** : un siècle se compte en ajoutant 1 aux centaines. L'année 1453 est au **XVe** siècle (14 + 1). **Attention aux années « rondes »** : un siècle se termine par l'année en 00, donc l'année 800 est la dernière du **VIIIe** siècle (701-800) et 1500 la dernière du XVe siècle. Le **Moyen Âge** va de 476 (chute de Rome) à 1453 ou 1492 ; ensuite commencent les **Temps modernes**.

## 2. Analyser un document
1. **Présenter** le document : sa **nature** (texte, carte, tableau, photographie, enluminure…), son **auteur**, sa **date**, sa **source**, son **sujet**. Demande-toi : l'auteur était-il témoin ? Quel est son point de vue ?
2. **Prélever** les informations utiles en répondant aux questions (cite le document entre guillemets).
3. **Expliquer** avec tes connaissances : replacer dans le contexte, définir les mots importants.
4. **Critiquer** : le document est-il fiable ? Exagère-t-il ? Ce qu'il ne dit pas.

## 3. Réaliser un croquis ou compléter une carte
- Un **croquis** est une représentation simplifiée d'un espace. Il comporte un **titre**, une **légende** organisée en parties, une **orientation** (le nord) et parfois une **échelle**.
- Figurés : **surfaces** (couleurs, hachures) pour les zones ; **points** (ronds, carrés) pour les villes ou lieux ; **lignes** (traits, flèches) pour les frontières et les flux.
- Couleurs logiques : bleu pour l'eau, couleurs chaudes (rouge, orange) pour les phénomènes intenses, froides pour les plus faibles.

## 4. Rédiger un développement construit ou un paragraphe argumenté
1. **Analyser le sujet** : souligne les mots-clés, repère le lieu et la période.
2. **Introduction** : présente le sujet, le contexte (dates, lieu) et la question.
3. **Développement** : deux ou trois parties, chacune avec une idée, des **exemples précis** (dates, noms, chiffres) et du **vocabulaire** ; utilise des connecteurs (d'abord, ensuite, de plus, enfin, ainsi, car).
4. **Conclusion** : réponds à la question en une ou deux phrases.

## 5. Vocabulaire indispensable
| Mot | Définition |
|---|---|
| Dynastie | suite de souverains d'une même famille |
| Chrétienté | ensemble des peuples chrétiens |
| Empire | État très vaste regroupant des peuples différents sous l'autorité d'un empereur |
| Monothéisme | croyance en un dieu unique |
| Densité | nombre d'habitants par km² |
| Développement durable | développement qui répond aux besoins actuels sans compromettre ceux des générations futures |

> **À retenir** :
> - Siècle = centaines + 1 (1515 → XVIe siècle), sauf pour les années en 00 (1500 → XVe siècle).
> - Un document se présente (nature, auteur, date, source, sujet) avant d'être analysé et critiqué.
> - Un croquis a un titre, une légende organisée et des figurés de surface, de point et de ligne.
> - Une rédaction : introduction, parties avec exemples précis, conclusion.
`,
      exercices: [
        { type: "saisie", question: "À quel siècle appartient l'année 1453 ? (écris en chiffres romains, par exemple XIIe)", reponses: ["XVe", "XV", "15e", "15eme", "XVe siecle", "15", "XVeme", "XV siecle", "XVeme siecle", "15eme siecle"], explication: "14 centaines + 1 = XVe siècle." },
        { type: "qcm", question: "À quel siècle a lieu le couronnement de Charlemagne (800) ?", choix: ["VIIe siècle", "VIIIe siècle", "IXe siècle", "Xe siècle"], reponse: 1, explication: "L'année 800 est la dernière année du VIIIe siècle (701-800)." },
        { type: "qcm", question: "Classe dans l'ordre chronologique : édit de Nantes, Hégire, prise de Bagdad par les Mongols, schisme de 1054.", choix: ["Hégire, schisme, prise de Bagdad, édit de Nantes", "Schisme, Hégire, édit de Nantes, prise de Bagdad", "Hégire, prise de Bagdad, schisme, édit de Nantes", "Prise de Bagdad, Hégire, schisme, édit de Nantes"], reponse: 0, explication: "622 (Hégire), 1054 (schisme), 1258 (Bagdad), 1598 (édit de Nantes)." },
        { type: "vf", question: "Pour présenter un document, il faut indiquer sa nature, son auteur, sa date et sa source.", reponse: true, explication: "C'est la première étape, indispensable pour comprendre le point de vue du document." },
        { type: "qcm", question: "Sur un croquis, quel figuré utilises-tu pour représenter un flux commercial ?", choix: ["Une surface colorée", "Un point", "Une flèche", "Des hachures"], reponse: 2, explication: "Les flux (déplacements de marchandises, de personnes) se représentent par des flèches (figurés linéaires)." },
        { type: "saisie", question: "Quel mot désigne une suite de souverains appartenant à la même famille ?", reponses: ["dynastie", "une dynastie", "la dynastie"], explication: "Exemples : Carolingiens, Capétiens, Valois, Bourbons." },
        { type: "vf", question: "La légende d'un croquis doit être organisée en parties qui correspondent aux idées principales.", reponse: true, explication: "Une légende organisée montre que tu as compris et hiérarchisé les informations." },
        { type: "redaction", question: "**Méthode** : rédige l'introduction d'un développement construit sur le sujet « Charlemagne, un empereur chrétien ». Puis indique le plan que tu suivrais.", corrige: `**Exemple d'introduction** : À la fin du VIIIe siècle, Charlemagne, roi des Francs depuis 768, a conquis un vaste territoire en Europe occidentale. Le 25 décembre 800, à Rome, le pape Léon III le couronne empereur. Comment Charlemagne gouverne-t-il son empire en s'appuyant sur l'Église ?

**Plan possible** :
1. Un empereur couronné par le pape (couronnement de 800, alliance avec l'Église, protection de la papauté).
2. Un empereur qui gouverne un vaste empire (comtes, missi dominici, capitulaires, Aix-la-Chapelle).
3. Un empereur qui diffuse le christianisme et la culture (conversion forcée des Saxons, écoles, renaissance carolingienne).

**Méthode** : l'introduction donne le **contexte** (date, lieu, personnage), puis pose une **question** à laquelle le développement répond.` },
        { type: "redaction", question: "**Croquis** : tu dois réaliser le croquis « La répartition de la population mondiale ». Propose un titre et une légende organisée en deux parties, en précisant pour chaque élément le type de figuré (surface, point ou ligne) et sa couleur.", corrige: `**Titre** : La répartition inégale de la population mondiale.

**1. Des espaces très peuplés**
- Grands foyers de peuplement (Asie de l'Est, Asie du Sud, Europe) : **surface** rouge foncé.
- Foyers secondaires (golfe de Guinée, vallée du Nil, nord-est des États-Unis, Sud-Est du Brésil) : **surface** orange.
- Mégapoles (Tokyo, Delhi, Shanghai, Le Caire, Mexico, New York…) : **points** noirs.

**2. Des espaces peu peuplés**
- Déserts chauds (Sahara, Australie), déserts froids (Sibérie, Grand Nord canadien), forêt amazonienne : **surface** jaune pâle ou hachures.

**Méthode** : couleurs chaudes et foncées pour les fortes densités, claires pour les faibles ; chaque figuré de la légende doit apparaître sur la carte, et la nomenclature (noms des foyers, des océans) s'écrit à l'horizontale.` },
        { type: "redaction", question: "**Analyse de document** : « Certains serfs sont si soumis à leur seigneur que celui-ci peut prendre tout ce qu'ils ont, à leur mort et de leur vivant, et les tenir en prison toutes les fois qu'il lui plaît, à tort ou à raison ; il n'est tenu d'en répondre qu'à Dieu. » (Philippe de Beaumanoir, juriste, *Coutumes du Beauvaisis*, vers 1283, texte traduit en français moderne). Présente ce document, puis explique ce qu'il montre de la condition des serfs.", corrige: `**Présentation** : ce document est un **extrait d'un texte juridique**, les *Coutumes du Beauvaisis*, rédigé vers **1283** par **Philippe de Beaumanoir**, un juriste, bailli (représentant) du comte de Clermont puis du roi de France. Il décrit les règles (coutumes) en usage dans la région de Beauvais, au XIIIe siècle. Son auteur connaît bien le droit de son temps : c'est donc une source fiable sur les règles, mais il décrit la loi, pas forcément la vie réelle de tous les paysans.

**Explication** : le texte montre que les **serfs** sont des paysans **non libres**, soumis à leur **seigneur** : celui-ci peut « prendre tout ce qu'ils ont » (domination économique) et « les tenir en prison toutes les fois qu'il lui plaît » (domination **judiciaire** : le seigneur rend la justice dans sa seigneurie). Il n'a de comptes à rendre qu'à **Dieu**, ce qui rappelle que la société d'ordres est présentée comme voulue par Dieu.

**Regard critique** : l'auteur écrit « **certains** serfs » : il décrit la situation la plus dure, pas celle de tous ; en réalité, les obligations des serfs sont fixées par la coutume, et beaucoup obtiennent leur **affranchissement** aux XIIe-XIIIe siècles. Les paysans libres (vilains) sont aussi soumis au seigneur (corvées, taille, banalités) mais ne lui appartiennent pas.` },
      ],
    },
  ],
};
