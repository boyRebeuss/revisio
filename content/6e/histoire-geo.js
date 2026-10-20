export default {
  chapitres: [
    {
      id: "debuts-humanite",
      titre: "Les débuts de l'humanité",
      theme: "Histoire – La longue histoire de l'humanité et des migrations",
      cours: `
## Introduction
L'histoire de l'humanité commence il y a plusieurs **millions d'années**, en **Afrique**. On n'a pas de textes pour cette période : c'est la **Préhistoire**, la période qui précède l'invention de l'écriture. Pour la connaître, les **archéologues** et les **paléontologues** (savants qui étudient les fossiles) étudient des **traces** : ossements, outils, foyers, peintures. Ce sont des faits **scientifiques**, établis par des fouilles et des datations.

## 1. Les premiers humains apparaissent en Afrique
- Les plus anciens fossiles de la lignée humaine ont été retrouvés en **Afrique**. Par exemple, **Toumaï**, découvert au **Tchad** en 2001, a environ **7 millions d'années** (les scientifiques discutent encore pour savoir s'il appartient vraiment à la lignée humaine).
- **Lucy** est une **australopithèque** découverte en **Éthiopie** en 1974. Elle a vécu il y a environ **3,2 millions d'années**. Elle marchait déjà debout, mais grimpait encore aux arbres.
- Le genre ***Homo*** (« homme » en latin) apparaît il y a environ **2,5 millions d'années**. Ces humains fabriquent des **outils en pierre taillée**, comme le **galet aménagé** puis le **biface**.
- Plus tard, les humains apprennent à **maîtriser le feu** (il y a au moins **400 000 ans**) : il sert à se chauffer, s'éclairer, cuire les aliments et se protéger des animaux.

>! **Attention** : l'être humain ne « descend pas du singe ». Les humains et les grands singes actuels (chimpanzés, gorilles) ont des **ancêtres communs**. Il y a eu plusieurs espèces humaines différentes, parfois à la même époque.

## 2. Les grandes migrations : l'humanité peuple la Terre
- Une **migration** est le déplacement d'un groupe humain d'un lieu à un autre pour s'y installer.
- ***Homo erectus*** sort d'Afrique il y a environ **1,8 million d'années** et gagne l'Asie, puis l'Europe.
- ***Homo sapiens***, notre espèce, apparaît en Afrique il y a environ **300 000 ans** (fossiles de Djebel Irhoud, au Maroc). Il quitte l'Afrique et peuple peu à peu toute la Terre : l'Asie, l'**Australie** (il y a plus de 50 000 ans, en traversant la mer), l'**Europe** (vers 45 000 ans), et enfin l'**Amérique** (il y a au moins 15 000 ans).
- En Europe vivait déjà l'**homme de Néandertal**. Il disparaît il y a environ **40 000 ans**. Les deux espèces se sont rencontrées : une petite partie de nos gènes vient de Néandertal.

## 3. Vivre au Paléolithique : s'adapter au climat
- Le **Paléolithique** (« âge de la pierre ancienne ») est la plus longue période de l'histoire humaine. Il se termine vers **10 000 av. J.-C.**
- Les humains sont **nomades** : ils se déplacent au fil des saisons. Ce sont des **chasseurs-cueilleurs** : ils chassent (rennes, mammouths, chevaux), pêchent et cueillent des fruits et des plantes.
- Le climat change beaucoup : il y a des **périodes glaciaires** très froides et des périodes plus chaudes. Pendant la dernière glaciation, le niveau de la mer était environ **120 mètres plus bas** qu'aujourd'hui : on pouvait aller à pied de la France à l'Angleterre ! Les humains **s'adaptent** : vêtements de peaux cousues avec des aiguilles en os, abris, feu.
- *Homo sapiens* crée les premières **œuvres d'art** : peintures et gravures dans les grottes (**Chauvet**, en Ardèche, il y a environ **36 000 ans** ; **Lascaux**, en Dordogne, il y a environ **20 000 ans**), statuettes, parures. Il enterre aussi ses morts.

| Espèce | Apparition (environ) | Ce qu'il faut savoir |
|---|---|---|
| Australopithèque (Lucy) | 4 millions d'années | marche debout, Afrique de l'Est |
| *Homo habilis* | 2,5 millions d'années | parmi les premiers fabricants d'outils en pierre taillée |
| *Homo erectus* | 2 millions d'années | sort d'Afrique, taille des bifaces |
| Néandertal | 400 000 ans | vit en Europe, disparaît vers 40 000 ans |
| *Homo sapiens* | 300 000 ans | notre espèce, peuple toute la Terre, art des grottes |

>! **Erreur fréquente** : les dinosaures et les premiers humains n'ont **jamais vécu ensemble** ! Les dinosaures ont disparu il y a 66 millions d'années, bien avant les premiers humains.

> **À retenir** :
> - La Préhistoire est la période qui précède l'invention de l'écriture. On la connaît grâce à l'archéologie.
> - Les premiers humains apparaissent en **Afrique** il y a plusieurs millions d'années.
> - *Homo sapiens* apparaît en Afrique il y a environ 300 000 ans et peuple toute la Terre par des **migrations**.
> - Au **Paléolithique**, les humains sont **nomades**, **chasseurs-cueilleurs**, taillent la pierre, maîtrisent le feu et s'adaptent aux changements du climat.
> - Vocabulaire : Préhistoire, fossile, nomade, chasseur-cueilleur, biface, migration, Paléolithique.
`,
      exercices: [
        { type: "qcm", question: "Sur quel continent sont apparus les premiers humains ?", choix: ["En Afrique", "En Europe", "En Asie", "En Amérique"], reponse: 0, explication: "Tous les plus anciens fossiles de la lignée humaine (Toumaï, Lucy…) ont été découverts en **Afrique**. L'Amérique est le dernier continent peuplé par *Homo sapiens*." },
        { type: "vf", question: "Les premiers humains chassaient les dinosaures.", reponse: false, explication: "Les dinosaures ont disparu il y a 66 millions d'années, bien avant l'apparition des premiers humains (environ 7 millions d'années pour les plus anciens fossiles). Ils ne se sont jamais rencontrés." },
        { type: "saisie", question: "Comment appelle-t-on la période qui précède l'invention de l'écriture ?", reponses: ["Préhistoire", "la Préhistoire"], explication: "La **Préhistoire** est la période avant l'écriture. On la connaît grâce aux traces étudiées par les archéologues." },
        { type: "qcm", question: "Comment s'appelle notre espèce, apparue en Afrique il y a environ 300 000 ans ?", choix: ["*Homo erectus*", "*Homo sapiens*", "*Homo habilis*", "L'australopithèque"], reponse: 1, explication: "Nous sommes des *Homo sapiens*. *Homo habilis* et *Homo erectus* sont des espèces plus anciennes ; l'australopithèque (comme Lucy) n'appartient pas au genre *Homo*." },
        { type: "saisie", question: "Comment appelle-t-on des humains qui ne vivent pas toujours au même endroit et se déplacent au fil des saisons ?", reponses: ["nomades", "nomade", "des nomades"], explication: "Les humains du Paléolithique sont **nomades** : ils suivent les troupeaux et les saisons." },
        { type: "vf", question: "Pendant la dernière glaciation, le niveau de la mer était plus bas qu'aujourd'hui.", reponse: true, explication: "Une grande partie de l'eau était bloquée dans les glaciers : le niveau de la mer était environ 120 mètres plus bas. On pouvait passer à pied de la France à l'actuelle Angleterre." },
        { type: "qcm", question: "Dans quelle grotte trouve-t-on des peintures datées d'environ 36 000 ans, parmi les plus anciennes connues ?", choix: ["La grotte de Lascaux", "La grotte de Lourdes", "La grotte Chauvet", "La grotte de Toumaï"], reponse: 2, explication: "La grotte **Chauvet** (Ardèche) a des peintures d'environ 36 000 ans. Celles de **Lascaux** (Dordogne) sont plus récentes (environ 20 000 ans). Toumaï est un fossile, pas une grotte." },
        { type: "qcm", question: "Quelle invention permet aux humains de se chauffer, de cuire les aliments et de se protéger des animaux ?", choix: ["La roue", "L'écriture", "L'agriculture", "La maîtrise du feu"], reponse: 3, explication: "Les humains maîtrisent le **feu** depuis au moins 400 000 ans. La roue, l'écriture et l'agriculture sont bien plus récentes (Néolithique et après)." },
        { type: "redaction", question: "**Paragraphe argumenté** : en quelques lignes, explique comment *Homo sapiens* a peuplé la Terre et comment les humains du Paléolithique se sont adaptés à leur environnement. Utilise au moins trois mots de vocabulaire du cours.", corrige: `**Une origine africaine** : *Homo sapiens*, notre espèce, apparaît en **Afrique** il y a environ **300 000 ans**.

**Des migrations sur toute la Terre** : par des **migrations** successives, il quitte l'Afrique et gagne l'Asie, l'Australie (il y a plus de 50 000 ans, en traversant la mer), l'Europe (vers 45 000 ans) puis l'Amérique (il y a au moins 15 000 ans). En Europe, il rencontre l'homme de Néandertal, qui disparaît vers 40 000 ans.

**S'adapter à un climat changeant** : au **Paléolithique**, le climat alterne entre des périodes **glaciaires** très froides et des périodes plus douces. Les humains sont **nomades** et **chasseurs-cueilleurs** : ils suivent les troupeaux. Pour résister au froid, ils maîtrisent le **feu**, cousent des vêtements en peaux avec des aiguilles en os et construisent des abris.

**Conclusion** : en s'adaptant à des milieux très différents, *Homo sapiens* a fini par occuper tous les continents. Il a aussi laissé les premières œuvres d'art, comme les peintures de la grotte Chauvet.` },
      ],
    },
    {
      id: "revolution-neolithique",
      titre: "La « révolution » néolithique",
      theme: "Histoire – La longue histoire de l'humanité et des migrations",
      cours: `
## Introduction
Pendant des centaines de milliers d'années, les humains ont vécu de la chasse et de la cueillette. Puis, à partir d'environ **10 000 av. J.-C.**, certains groupes se mettent à **cultiver** des plantes et à **élever** des animaux. Ils deviennent **sédentaires**. Ce grand changement s'appelle la **« révolution » néolithique**. On met « révolution » entre guillemets, car ce changement a été **lent** : il a pris plusieurs milliers d'années.

## 1. Les débuts de l'agriculture et de l'élevage
- Le **Néolithique** signifie « âge de la pierre nouvelle » (on polit la pierre). Le climat se réchauffe à la fin de la dernière glaciation.
- Le premier foyer connu est le **Croissant fertile**, au Proche-Orient (une région en forme d'arc qui va d'Israël et du Liban actuels jusqu'à la Syrie, à l'Irak et à l'ouest de l'Iran), vers **10 000 av. J.-C.** On y cultive le **blé**, l'**orge**, les lentilles ; on élève **moutons**, **chèvres**, **porcs**, **bœufs**.
- L'agriculture apparaît aussi **ailleurs**, à des moments différents et de façon indépendante : en **Chine** (riz, millet), en **Amérique** (maïs, courge), en **Afrique** (sorgho), en Nouvelle-Guinée.
- En **France**, l'agriculture arrive **vers 6000-5000 av. J.-C.**, apportée par des agriculteurs venus du Proche-Orient par la Méditerranée et le Danube. Les **migrations** continuent donc au Néolithique.

## 2. Des humains sédentaires : un nouveau mode de vie
- Les agriculteurs doivent rester près de leurs champs : ils deviennent **sédentaires** et construisent des **villages** (maisons en bois, en terre ou en pierre).
- Nouveaux outils et techniques : la **hache en pierre polie** pour défricher, la **faucille** pour moissonner, la **meule** pour moudre le grain, la **poterie** pour conserver les réserves, le **tissage**.
- On produit plus de nourriture : la **population augmente**. Certains habitants deviennent **artisans** (potiers, tisserands) ; des **inégalités** apparaissent entre riches et pauvres, et des **conflits** pour les terres et les réserves.
- On élève des **mégalithes** (« grandes pierres ») : **menhirs** (pierres dressées, comme les alignements de **Carnac** en Bretagne, à partir de 4500 av. J.-C. environ) et **dolmens** (tombes collectives).

## 3. Les humains transforment leur environnement
- Pour cultiver, les humains **défrichent** : ils coupent et brûlent des forêts. Ils **domestiquent** des plantes et des animaux (le chien était déjà domestiqué au Paléolithique).
- C'est la première fois que les humains **modifient** autant la nature pour la mettre à leur service. Ils deviennent des **producteurs**, alors que les chasseurs-cueilleurs étaient des **prédateurs** (ils prenaient ce que la nature offrait).

| | Paléolithique | Néolithique |
|---|---|---|
| Mode de vie | nomade | sédentaire |
| Nourriture | chasse, pêche, cueillette | agriculture, élevage |
| Habitat | abris, campements | villages |
| Outils | pierre taillée | pierre polie, faucille, poterie |

>! **Méthode – compter les années avant J.-C.** : avant J.-C., on compte **à rebours**. L'an 6000 av. J.-C. est **plus ancien** que l'an 4500 av. J.-C. Pour calculer une durée entre deux dates avant J.-C., on fait une **soustraction** : de 10 000 av. J.-C. à 6000 av. J.-C., il s'écoule 10 000 − 6 000 = **4 000 ans**.

> **À retenir** :
> - Vers **10 000 av. J.-C.**, dans le **Croissant fertile**, les humains commencent à cultiver et à élever : c'est la « révolution » **néolithique**.
> - L'agriculture apparaît à des moments différents selon les régions (en France vers 6000-5000 av. J.-C.).
> - Les humains deviennent **sédentaires**, vivent dans des **villages**, inventent la poterie et la pierre polie.
> - Ils transforment leur environnement (défrichement, domestication) ; la population augmente, des inégalités apparaissent.
> - Vocabulaire : Néolithique, sédentaire, domestiquer, défricher, Croissant fertile, mégalithe, menhir, dolmen.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on des humains qui vivent toujours au même endroit ?", reponses: ["sédentaires", "sédentaire", "des sédentaires"], explication: "Les agriculteurs du Néolithique sont **sédentaires** : ils restent près de leurs champs et construisent des villages." },
        { type: "qcm", question: "Dans quelle région apparaissent l'agriculture et l'élevage vers 10 000 av. J.-C. ?", choix: ["Dans le Croissant fertile", "En Bretagne", "En Australie", "En Amazonie"], reponse: 0, explication: "Le **Croissant fertile** (Proche-Orient) est le premier foyer connu de l'agriculture. En Bretagne, elle n'arrive que vers 5000 av. J.-C." },
        { type: "vf", question: "L'agriculture est apparue au même moment partout dans le monde.", reponse: false, explication: "Elle apparaît à des **moments différents** selon les régions : vers 10 000 av. J.-C. au Proche-Orient, plus tard en Chine, en Amérique ou en Europe (vers 6000-5000 av. J.-C. en France)." },
        { type: "qcm", question: "Quel objet est une invention du Néolithique servant à conserver les réserves de grain ?", choix: ["Le biface", "La poterie", "L'aiguille en os", "Le galet aménagé"], reponse: 1, explication: "La **poterie** apparaît avec les agriculteurs sédentaires. Le biface, le galet aménagé et l'aiguille en os existaient déjà au Paléolithique." },
        { type: "qcm", question: "Combien d'années séparent 10 000 av. J.-C. (débuts de l'agriculture au Proche-Orient) et 6000 av. J.-C. ?", choix: ["16 000 ans", "6 000 ans", "4 000 ans", "10 000 ans"], reponse: 2, explication: "Pour deux dates avant J.-C., on soustrait : 10 000 − 6 000 = **4 000 ans**. On n'additionne que si l'une des dates est avant J.-C. et l'autre après." },
        { type: "saisie", question: "Comment s'appellent les grandes pierres dressées, comme celles des alignements de Carnac ?", reponses: ["menhirs", "menhir", "des menhirs", "les menhirs"], explication: "Les **menhirs** sont des pierres dressées. Les **dolmens**, eux, sont des tombes collectives. Les deux sont des mégalithes." },
        { type: "vf", question: "On écrit « révolution » néolithique entre guillemets parce que ce changement a pris plusieurs milliers d'années.", reponse: true, explication: "Une révolution est normalement un changement rapide. Le passage à l'agriculture a été **lent et progressif** : d'où les guillemets." },
        { type: "qcm", question: "Quelle conséquence de la révolution néolithique est vraie ?", choix: ["La population diminue fortement", "Les humains redeviennent nomades", "Les humains arrêtent de modifier la nature", "La population augmente et des inégalités apparaissent"], reponse: 3, explication: "Grâce à l'agriculture, on produit plus de nourriture : la **population augmente**. Des **inégalités** apparaissent entre ceux qui ont beaucoup de terres et de réserves et les autres. Les humains transforment beaucoup la nature (défrichement)." },
        { type: "redaction", question: "**Paragraphe argumenté** : explique pourquoi on parle de « révolution » néolithique. Montre ce qui change dans la façon de se nourrir, d'habiter et dans les relations des humains avec leur environnement.", corrige: `**Introduction** : vers **10 000 av. J.-C.**, dans le **Croissant fertile**, des humains commencent à cultiver et à élever. Ce changement se diffuse lentement, en France vers 6000-5000 av. J.-C.

**Se nourrir autrement** : les chasseurs-cueilleurs du Paléolithique prenaient ce que la nature offrait. Au Néolithique, les humains deviennent **producteurs** : ils cultivent le blé et l'orge, élèvent moutons, chèvres et bœufs.

**Habiter autrement** : ils deviennent **sédentaires** et construisent des **villages**. Ils inventent la poterie pour conserver les réserves, la hache en pierre polie, la faucille. La population augmente, des artisans apparaissent, mais aussi des inégalités et des conflits.

**Transformer l'environnement** : pour cultiver, ils **défrichent** les forêts et **domestiquent** plantes et animaux. C'est la première fois qu'ils modifient autant la nature.

**Conclusion** : c'est une « révolution », car presque tout change dans la vie des humains. Mais on la met entre guillemets, car elle a duré plusieurs **milliers d'années**.` },
      ],
    },
    {
      id: "premiers-etats-ecritures",
      titre: "Premiers États, premières écritures",
      theme: "Histoire – La longue histoire de l'humanité et des migrations",
      cours: `
## Introduction
Vers **3300 av. J.-C.**, dans l'**Orient ancien**, deux grandes inventions apparaissent presque en même temps : l'**écriture** et les premiers **États**. Avec l'écriture, on sort de la Préhistoire et on entre dans l'**Histoire**. Deux régions sont étudiées : la **Mésopotamie** et l'**Égypte**.

## 1. Des villes et des États au bord des grands fleuves
- La **Mésopotamie** (« pays entre les fleuves ») est située entre le **Tigre** et l'**Euphrate** (Irak actuel). L'**Égypte** s'étend le long du **Nil**.
- Les fleuves apportent l'eau et le **limon** (une boue très fertile déposée par les crues) : grâce à l'**irrigation** (canaux), les paysans produisent beaucoup. Les villes grandissent.
- Un **État** est une organisation politique qui dirige un territoire et sa population : il a un **chef**, des **lois**, des **fonctionnaires**, une **armée** et lève des **impôts**.
- En Mésopotamie, il y a d'abord des **cités-États** rivales (**Uruk**, **Ur**…), chacune dirigée par un **roi**. Vers **1750 av. J.-C.**, **Hammurabi**, roi de **Babylone**, fait graver ses lois sur une stèle : le **Code de Hammurabi** (conservé au musée du Louvre).
- L'Égypte est unifiée vers **3100 av. J.-C.** sous l'autorité d'un seul souverain, le **pharaon**. Il est considéré comme le fils des dieux, garant de l'ordre du monde. Il fait construire des **pyramides** pour son tombeau (pyramide de **Khéops** à Gizeh, vers 2560 av. J.-C.).

## 2. L'invention de l'écriture
- L'écriture apparaît vers **3300 av. J.-C.** à **Uruk**, en Mésopotamie. On écrit avec un roseau taillé (un **calame**) sur des **tablettes d'argile**. Les signes ont une forme de clous ou de coins : c'est l'écriture **cunéiforme** (du latin *cuneus*, « coin »).
- En Égypte, vers **3200 av. J.-C.**, apparaissent les **hiéroglyphes** (« écritures sacrées »), gravés sur les monuments ou écrits sur du **papyrus**.
- À quoi sert l'écriture ? D'abord à **compter** et à **gérer** : les récoltes, les impôts, les troupeaux, les réserves des temples et des palais. Puis à écrire les **lois**, raconter les exploits des rois, prier les dieux, écrire des récits (*L'Épopée de Gilgamesh*).
- Ceux qui savent écrire sont les **scribes**. Ils sont peu nombreux, très respectés, et travaillent pour le roi ou le temple.
- Les hiéroglyphes ont été **déchiffrés** en **1822** par le Français **Jean-François Champollion**, grâce à la **pierre de Rosette** (un même texte écrit en hiéroglyphes, en démotique, une écriture égyptienne plus simple, et en grec).

## 3. Une société organisée et des dieux nombreux
- La société est **hiérarchisée** : en haut le roi ou pharaon, puis les prêtres, les scribes, les soldats ; en bas les artisans, les paysans (la majorité) et les esclaves.
- Les Mésopotamiens et les Égyptiens sont **polythéistes** : ils croient en **plusieurs dieux** (en Égypte : **Rê**, le dieu soleil ; **Osiris**, dieu des morts). En Mésopotamie, chaque cité a un grand temple en forme de tour à étages, la **ziggourat**.

>! **Méthode – lire une frise chronologique** : sur une frise, le temps avance de gauche à droite. Avant J.-C., les dates sont de plus en plus **petites** quand on avance vers l'an 1. Exemple : 3300 av. J.-C. (écriture) est placé **à gauche** de 1750 av. J.-C. (Hammurabi). Entre les deux : 3 300 − 1 750 = **1 550 ans**.

> **À retenir** :
> - Vers **3300 av. J.-C.** : invention de l'écriture (**cunéiforme**) en **Mésopotamie** ; vers 3200 av. J.-C. : les **hiéroglyphes** en Égypte. C'est la fin de la Préhistoire.
> - Les premiers **États** naissent près des grands fleuves (Tigre, Euphrate, Nil) : cités-États de Mésopotamie, Égypte unifiée vers 3100 av. J.-C. sous le **pharaon**.
> - L'écriture sert d'abord à compter et à gérer, puis à fixer les lois (**Code de Hammurabi**, vers 1750 av. J.-C.) et les récits.
> - Vocabulaire : État, cité-État, pharaon, scribe, cunéiforme, hiéroglyphe, papyrus, polythéisme, ziggourat.
`,
      exercices: [
        { type: "qcm", question: "Où l'écriture est-elle apparue vers 3300 av. J.-C. ?", choix: ["En Mésopotamie", "En Grèce", "En Gaule", "À Rome"], reponse: 0, explication: "L'écriture cunéiforme apparaît à **Uruk**, en **Mésopotamie**, vers 3300 av. J.-C. La Grèce et Rome sont bien plus tardives." },
        { type: "saisie", question: "Comment s'appelle l'écriture en forme de clous des Mésopotamiens ?", reponses: ["cunéiforme", "l'écriture cunéiforme", "écriture cunéiforme", "le cunéiforme"], explication: "Le **cunéiforme** (de *cuneus*, « coin » en latin) est tracé avec un calame sur des tablettes d'argile." },
        { type: "vf", question: "L'écriture a d'abord servi à écrire des poèmes et des romans.", reponse: false, explication: "L'écriture a d'abord servi à **compter et gérer** : récoltes, impôts, troupeaux, réserves des temples. Les récits (comme *L'Épopée de Gilgamesh*) viennent plus tard." },
        { type: "qcm", question: "Comment s'appelle le souverain de l'Égypte ancienne ?", choix: ["Le consul", "Le pharaon", "Le scribe", "L'empereur"], reponse: 1, explication: "Le **pharaon** dirige l'Égypte unifiée ; il est considéré comme le fils des dieux. Le scribe est celui qui sait écrire, le consul est un magistrat romain." },
        { type: "saisie", question: "Quel fleuve traverse l'Égypte ?", reponses: ["le Nil", "Nil"], explication: "L'Égypte s'étend le long du **Nil**, dont les crues apportent le limon fertile." },
        { type: "qcm", question: "Qui a déchiffré les hiéroglyphes en 1822 ?", choix: ["Hammurabi", "Khéops", "Champollion", "Gilgamesh"], reponse: 2, explication: "**Jean-François Champollion** a déchiffré les hiéroglyphes en 1822 grâce à la pierre de Rosette. Hammurabi est un roi de Babylone, Khéops un pharaon, Gilgamesh un héros de récit." },
        { type: "vf", question: "Le Code de Hammurabi est un recueil de lois gravé sur une stèle vers 1750 av. J.-C.", reponse: true, explication: "Hammurabi, roi de Babylone, fait graver ses lois sur une stèle de basalte vers 1750 av. J.-C. Elle est conservée au musée du Louvre." },
        { type: "saisie", question: "Combien d'années séparent l'invention de l'écriture (3300 av. J.-C.) du Code de Hammurabi (1750 av. J.-C.) ? (réponds par un nombre)", reponses: ["1550", "1 550", "mille cinq cent cinquante"], explication: "Deux dates avant J.-C. : on soustrait. 3 300 − 1 750 = **1 550 ans**." },
        { type: "qcm", question: "Qu'est-ce qu'un État ?", choix: ["Un grand temple à étages où l'on prie les dieux de la cité", "Une ville entourée de remparts et de champs irrigués", "Un groupe de familles nomades qui suivent leurs troupeaux", "Une organisation qui dirige un territoire et sa population"], reponse: 3, explication: "Un **État** dirige un territoire et sa population : il a un chef, des lois, des fonctionnaires, une armée et lève des impôts. Le grand temple à étages est la ziggourat ; une ville entourée de remparts n'est pas forcément un État." },
        { type: "redaction", question: "**Analyse de document** : « Si un homme a crevé l'œil d'un homme libre, on lui crèvera un œil. S'il a crevé l'œil d'un esclave, il paiera la moitié de son prix. » (D'après le Code de Hammurabi, vers 1750 av. J.-C., texte simplifié). 1. Présente le document. 2. Que prévoit la loi quand on blesse un homme libre ? 3. La punition est-elle la même pour tous ? Que nous apprend le document sur la société ? 4. Pourquoi l'écriture est-elle importante pour un roi ?", corrige: `**1. Présentation** : c'est un extrait du **Code de Hammurabi**, un recueil de lois gravé sur une **stèle** vers **1750 av. J.-C.** sur ordre de **Hammurabi**, roi de **Babylone**, en Mésopotamie. La stèle est aujourd'hui au musée du Louvre.

**2. Blesser un homme libre** : le coupable subit la **même blessure** que sa victime (« on lui crèvera un œil »). C'est le principe « œil pour œil, dent pour dent », qu'on appelle la **loi du talion**.

**3. Une société inégale** : non, si la victime est un **esclave**, le coupable paie seulement une somme d'argent. La loi ne protège pas tout le monde de la même façon : la société mésopotamienne est **hiérarchisée**, avec des hommes libres et des esclaves.

**4. L'écriture et le pouvoir** : grâce à l'écriture, les lois sont **fixées** et connues de tous ; elles ne changent pas selon l'humeur du juge. Le roi montre aussi sa **puissance** : il est celui qui fait régner la justice dans son **État**.` },
      ],
    },
    {
      id: "cites-grecques",
      titre: "Le monde des cités grecques",
      theme: "Histoire – Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire av. J.-C.",
      cours: `
## Introduction
Au **Ier millénaire av. J.-C.** (de l'an 1000 à l'an 1 av. J.-C.), les Grecs vivent dans des centaines de **cités** indépendantes et souvent **rivales**. Pourtant, ils ont le sentiment d'appartenir à un même monde : celui des **Hellènes**. Qu'est-ce qui les unit ?

## 1. Des cités indépendantes
- Une **cité** (en grec *polis*) est un petit État indépendant : une **ville** (souvent avec une **acropole**, colline où se trouvent les temples, et une **agora**, place publique) et la **campagne** qui l'entoure. Chaque cité a ses lois, ses dieux protecteurs, son armée, sa monnaie.
- Les plus célèbres sont **Athènes** et **Sparte**. Les cités se font souvent la **guerre**.
- Le relief montagneux et la mer séparent les cités. Les Grecs sont de grands **marins**.
- À partir du **VIIIe siècle av. J.-C.**, manquant de terres, des Grecs partent fonder de nouvelles cités tout autour de la Méditerranée et de la mer Noire : ce sont des **colonies**. Exemple : **Marseille** (*Massalia*), fondée vers **600 av. J.-C.** par des Grecs venus de Phocée (en Asie Mineure).

## 2. Ce qui unit les Grecs : une culture commune
- **La langue** : tous parlent le **grec** et utilisent le même **alphabet**, emprunté aux **Phéniciens** au VIIIe siècle av. J.-C. et complété par des voyelles. Ceux qui ne parlent pas grec sont appelés **« barbares »** (ceux dont on ne comprend pas la langue).
- **Les dieux** : les Grecs sont **polythéistes**. Les principaux dieux vivent, selon les **mythes**, sur le mont **Olympe** : **Zeus** (roi des dieux), **Héra**, **Athéna** (sagesse, protectrice d'Athènes), **Apollon**, **Poséidon** (la mer)… Ils ont une apparence humaine, des sentiments humains, mais ils sont **immortels**.
- Un **mythe** est un récit qui met en scène des dieux et des héros pour expliquer le monde. Ce n'est pas de l'histoire : il faut distinguer **mythe** et **faits historiques**.
- **Les récits d'Homère** : l'***Iliade*** (la guerre de Troie, la colère d'Achille) et l'***Odyssée*** (le long retour d'Ulysse) sont attribuées au poète **Homère** (VIIIe siècle av. J.-C.). Tous les Grecs les connaissent et les apprennent.
- **Les sanctuaires communs** : un **sanctuaire** est un lieu sacré consacré à un dieu. À **Delphes**, on consulte l'**oracle** d'Apollon (la Pythie). À **Olympie**, sanctuaire de Zeus, ont lieu tous les **quatre ans** les **Jeux olympiques**, dont la tradition fixe les premiers en **776 av. J.-C.** Pendant les Jeux, une **trêve** sacrée permet aux athlètes de voyager.

>! **Mythe ou histoire ?** La guerre de Troie racontée par Homère mêle des dieux et des héros : c'est un **récit mythique**. Les archéologues ont bien retrouvé une ville ancienne nommée Troie (en Turquie actuelle), détruite plusieurs fois, mais on ne peut pas prouver que les événements de l'*Iliade* ont eu lieu.

> **À retenir** :
> - Les Grecs vivent dans des **cités** (*poleis*) indépendantes et rivales : Athènes, Sparte… Ils fondent des **colonies** (Marseille vers 600 av. J.-C.).
> - Ils partagent une **culture commune** : la langue et l'alphabet grecs, les mêmes **dieux** (polythéisme), les récits d'**Homère** (*Iliade*, *Odyssée*), les **sanctuaires** (Delphes, Olympie) et les **Jeux olympiques** (776 av. J.-C. selon la tradition).
> - Vocabulaire : cité, acropole, agora, colonie, polythéisme, mythe, sanctuaire, oracle, barbare.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on un petit État grec indépendant formé d'une ville et de la campagne qui l'entoure ?", reponses: ["une cité", "cité", "polis", "cité-État", "une cité-État", "la cité", "une polis", "cité grecque", "une cité grecque", "cités", "les cités", "des cités"], explication: "La **cité** (*polis*) est un petit État indépendant avec ses lois, ses dieux, son armée." },
        { type: "qcm", question: "Quel dieu grec est le roi des dieux de l'Olympe ?", choix: ["Zeus", "Poséidon", "Apollon", "Athéna"], reponse: 0, explication: "**Zeus** règne sur les dieux de l'Olympe. Poséidon est le dieu de la mer, Apollon le dieu de la lumière et des arts, Athéna la déesse de la sagesse." },
        { type: "vf", question: "Les cités grecques formaient un seul État dirigé par un roi.", reponse: false, explication: "Les cités sont **indépendantes** et souvent **rivales** (Athènes et Sparte se font la guerre). Ce qui les unit, c'est une culture commune, pas un État." },
        { type: "qcm", question: "Quelle ville française a été fondée par des Grecs vers 600 av. J.-C. ?", choix: ["Lyon", "Marseille", "Paris", "Bordeaux"], reponse: 1, explication: "**Marseille** (*Massalia*) est une **colonie** fondée par des Grecs de Phocée vers 600 av. J.-C." },
        { type: "saisie", question: "Dans quel sanctuaire grec, consacré à Zeus, se déroulent les Jeux olympiques ?", reponses: ["Olympie", "à Olympie"], explication: "Les Jeux ont lieu tous les quatre ans à **Olympie**, sanctuaire de Zeus. Attention : l'Olympe est la montagne des dieux, Olympie est le sanctuaire." },
        { type: "qcm", question: "Quelle œuvre attribuée à Homère raconte le long retour d'Ulysse après la guerre de Troie ?", choix: ["L'Iliade", "L'Énéide", "L'Odyssée", "L'Épopée de Gilgamesh"], reponse: 2, explication: "L'***Odyssée*** raconte le retour d'Ulysse. L'*Iliade* raconte un épisode de la guerre de Troie. L'*Énéide* est un récit romain de Virgile ; *Gilgamesh* un récit mésopotamien." },
        { type: "vf", question: "Pour les Grecs, un « barbare » est quelqu'un qui ne parle pas grec.", reponse: true, explication: "Le mot vient du bruit « bar-bar » : le langage incompréhensible des étrangers. Il ne voulait pas dire « cruel » au départ." },
        { type: "qcm", question: "Où les Grecs vont-ils consulter l'oracle d'Apollon ?", choix: ["À Sparte", "À Troie", "À Marseille", "À Delphes"], reponse: 3, explication: "À **Delphes**, la Pythie transmet les réponses d'Apollon. Les Grecs de toutes les cités viennent l'interroger avant une décision importante." },
        { type: "redaction", question: "**Paragraphe argumenté** : « Les Grecs vivent dans des cités rivales mais partagent une culture commune. » Explique cette phrase en donnant au moins trois éléments de culture commune.", corrige: `**Des cités rivales** : au Ier millénaire av. J.-C., les Grecs vivent dans des centaines de **cités** indépendantes, comme **Athènes** ou **Sparte**. Chacune a ses lois, son armée, sa monnaie, et elles se font souvent la guerre. Des Grecs fondent aussi des **colonies** autour de la Méditerranée, comme **Marseille** vers 600 av. J.-C.

**Une culture commune** :
- ils parlent tous le **grec** et utilisent le même **alphabet** ; ils appellent « barbares » ceux qui ne parlent pas grec ;
- ils croient aux mêmes **dieux** de l'Olympe (Zeus, Athéna, Apollon…) : ils sont **polythéistes** ;
- ils connaissent les récits d'**Homère**, l'*Iliade* et l'*Odyssée* ;
- ils se retrouvent dans des **sanctuaires** communs : à **Delphes** pour consulter l'oracle d'Apollon, à **Olympie** pour les **Jeux olympiques**, organisés tous les quatre ans pendant une trêve sacrée.

**Conclusion** : malgré leurs rivalités, les Grecs ont le sentiment d'appartenir à un même monde, celui des Hellènes.` },
      ],
    },
    {
      id: "democratie-athenes",
      titre: "Athènes et la naissance de la démocratie",
      theme: "Histoire – Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire av. J.-C.",
      cours: `
## Introduction
Le mot **démocratie** vient du grec *dêmos* (le peuple) et *kratos* (le pouvoir) : c'est le **pouvoir du peuple**. Elle naît à **Athènes** à la fin du **VIe siècle av. J.-C.** Dans quelles conditions ? Et qui est vraiment « le peuple » ?

## 1. La naissance de la démocratie athénienne
- Avant, Athènes était dirigée par des familles riches (les aristocrates), puis par un **tyran** (un homme qui prend seul le pouvoir).
- En **508-507 av. J.-C.**, l'Athénien **Clisthène** réorganise la cité : tous les citoyens peuvent désormais participer aux décisions, quelle que soit leur richesse. C'est la naissance de la démocratie.
- Au **Ve siècle av. J.-C.**, Athènes devient la cité la plus puissante de Grèce, après avoir vaincu les **Perses** (bataille de **Marathon** en **490 av. J.-C.**, bataille navale de **Salamine** en **480 av. J.-C.**). Sa flotte domine la mer Égée.
- **Périclès**, élu **stratège** de nombreuses années de suite, dirige la cité vers le milieu du Ve siècle. Il fait construire le **Parthénon** sur l'acropole (entre **447 et 432 av. J.-C.**), temple dédié à **Athéna**. Il crée une **indemnité** (le *misthos*) pour que les citoyens pauvres puissent participer à la vie politique sans perdre leur journée de travail.
- En **431 av. J.-C.** éclate la **guerre du Péloponnèse** entre Athènes et Sparte. Aux funérailles des premiers soldats morts, Périclès prononce un célèbre éloge de la démocratie, rapporté par l'historien athénien **Thucydide**. Périclès meurt de la peste en 429 av. J.-C. ; Athènes est finalement vaincue par Sparte en **404 av. J.-C.**

## 2. Comment fonctionne la démocratie ?
| Institution | Qui ? | Rôle |
|---|---|---|
| **Ecclésia** (assemblée du peuple) | tous les citoyens qui le veulent, réunis sur la colline de la **Pnyx** | vote les lois, décide de la guerre et de la paix |
| **Boulè** (conseil) | **500** citoyens **tirés au sort** pour un an | prépare les lois votées par l'Ecclésia |
| **Tribunal** (Héliée) | citoyens tirés au sort | rend la justice |
| **Stratèges** | **10** citoyens **élus** pour un an | commandent l'armée et la flotte |

- Les citoyens peuvent prendre la parole et votent à **main levée**. Ils peuvent aussi exiler pour dix ans un homme jugé dangereux : c'est l'**ostracisme** (on écrit son nom sur un tesson de poterie, l'*ostrakon*).

## 3. Une démocratie limitée
- Est **citoyen** à Athènes un **homme**, **libre**, **adulte**, né de **parents athéniens** (après 451 av. J.-C., le père et la mère doivent être athéniens).
- Sont **exclus** de la citoyenneté :
  - les **femmes**, qui vivent surtout dans l'espace de la maison et n'ont pas de droits politiques (même si elles jouent un rôle dans les fêtes religieuses) ;
  - les **métèques**, étrangers installés à Athènes : ils paient des impôts et font la guerre, mais ne votent pas ;
  - les **esclaves**, très nombreux, qui sont la propriété de leur maître.
- Au Ve siècle, il y aurait eu environ **40 000 citoyens** sur plusieurs centaines de milliers d'habitants (estimations des historiens) : une **minorité** de la population.

>! **Erreur fréquente** : la démocratie athénienne n'est pas comme la nôtre. C'est une démocratie **directe** (les citoyens votent eux-mêmes les lois), alors qu'en France aujourd'hui elle est surtout **représentative** (on élit des députés). Et aujourd'hui, les femmes votent : en France, elles ont obtenu le droit de vote en **1944** et ont voté pour la première fois en **1945**.

> **À retenir** :
> - **508-507 av. J.-C.** : réformes de **Clisthène**, naissance de la **démocratie** à Athènes.
> - Ve siècle av. J.-C. : **Périclès** ; construction du **Parthénon** (447-432 av. J.-C.).
> - Les citoyens votent les lois à l'**Ecclésia** ; la **Boulè** (500 tirés au sort) les prépare ; 10 **stratèges** élus commandent l'armée.
> - Démocratie **directe** mais **limitée** : femmes, métèques et esclaves sont exclus.
> - Vocabulaire : démocratie, citoyen, Ecclésia, Boulè, stratège, métèque, ostracisme, tirage au sort.
`,
      textes: {
        pericles: `**Document : Périclès fait l'éloge de la démocratie athénienne**

*En 431 av. J.-C., la guerre du Péloponnèse éclate entre Athènes et Sparte. L'hiver suivant, lors des funérailles des premiers soldats athéniens morts au combat, le stratège Périclès prononce un discours devant les citoyens.*

« Notre constitution n'imite pas les lois des autres cités : nous sommes plutôt un modèle que des imitateurs. Elle s'appelle **démocratie**, parce que le pouvoir n'est pas entre les mains d'une minorité, mais du plus grand nombre. Devant la loi, tous sont égaux pour régler leurs affaires privées. Pour les charges publiques, chacun est choisi selon son mérite, et non selon sa richesse ; et la pauvreté n'empêche personne, s'il est capable de rendre service à la cité, d'y prendre part.

Chez nous, un même homme s'occupe à la fois de ses affaires et de celles de la cité. Nous sommes les seuls à penser qu'un homme qui ne participe pas à la vie politique n'est pas un citoyen tranquille, mais un citoyen inutile. Nous décidons nous-mêmes des affaires de la cité, ou du moins nous en discutons. [...] En un mot, notre cité est l'école de la Grèce. »

Plus loin, Périclès s'adresse aux veuves des soldats morts : « Votre plus grande gloire est que l'on parle de vous le moins possible parmi les hommes, en bien comme en mal. »

*D'après Thucydide, Histoire de la guerre du Péloponnèse, livre II (passages 37, 40, 41 et 45), écrit à la fin du Ve siècle av. J.-C. ; texte traduit et simplifié. Thucydide, historien athénien, a assisté à la guerre ; il reconnaît lui-même qu'il a réécrit les discours de façon à rendre l'essentiel de ce qui avait été dit.*

*Vocabulaire : la **constitution** = l'ensemble des règles qui organisent le pouvoir dans la cité ; les **charges publiques** = les fonctions au service de la cité (juge, membre de la Boulè, stratège…) ; le **mérite** = ce qu'une personne vaut par ses qualités et son travail ; les **funérailles** = la cérémonie pour enterrer les morts.*`,
      },
      exercices: [
        { type: "qcm", question: "Que signifie le mot « démocratie » ?", choix: ["Le pouvoir du peuple", "Le pouvoir d'un seul homme", "Le pouvoir des dieux", "Le pouvoir des riches"], reponse: 0, explication: "*Dêmos* = le peuple, *kratos* = le pouvoir. Le pouvoir d'un seul est une monarchie (ou une tyrannie) ; le pouvoir d'un petit groupe de riches, une oligarchie (*oligoi* = peu nombreux)." },
        { type: "saisie", question: "Quel Athénien réorganise la cité en 508-507 av. J.-C. et fonde la démocratie ?", reponses: ["Clisthène"], explication: "Les réformes de **Clisthène** (508-507 av. J.-C.) permettent à tous les citoyens de participer, quelle que soit leur richesse." },
        { type: "vf", question: "À Athènes, les femmes pouvaient voter à l'Ecclésia.", reponse: false, explication: "Les **femmes** n'étaient pas citoyennes au sens politique : elles ne votaient pas. Seuls les hommes libres, adultes, nés de parents athéniens étaient citoyens." },
        { type: "qcm", question: "Comment s'appelle l'assemblée où tous les citoyens votent les lois ?", choix: ["La Boulè", "L'Ecclésia", "Le Sénat", "L'agora"], reponse: 1, explication: "L'**Ecclésia** réunit les citoyens sur la Pnyx. La **Boulè** prépare les lois ; le Sénat est une institution romaine ; l'agora est la place publique." },
        { type: "saisie", question: "Comment appelle-t-on un étranger installé à Athènes, qui paie des impôts mais ne vote pas ?", reponses: ["métèque", "un métèque", "les métèques", "métèques"], explication: "Les **métèques** sont des étrangers libres installés à Athènes. Ils n'ont pas de droits politiques." },
        { type: "qcm", question: "Comment sont désignés les 500 membres de la Boulè ?", choix: ["Ils sont élus", "Ils sont nommés par Périclès", "Ils sont tirés au sort", "Ils héritent de leur place"], reponse: 2, explication: "Les 500 membres de la Boulè sont **tirés au sort** pour un an : pour les Athéniens, c'est très démocratique, car chacun a la même chance. Les 10 stratèges, eux, sont **élus**." },
        { type: "vf", question: "Périclès a fait construire le Parthénon, temple dédié à Athéna, sur l'acropole d'Athènes.", reponse: true, explication: "Le Parthénon est construit entre 447 et 432 av. J.-C., à l'époque de Périclès, en l'honneur d'Athéna, protectrice de la cité." },
        { type: "qcm", question: "Pourquoi Périclès crée-t-il une indemnité (le misthos) pour les citoyens ?", choix: ["Pour récompenser les soldats victorieux", "Pour payer les esclaves", "Pour attirer les métèques", "Pour que les citoyens pauvres puissent participer à la vie politique"], reponse: 3, explication: "Un citoyen pauvre qui siège au tribunal ou au conseil perd une journée de travail. L'indemnité lui permet de **participer** quand même : c'est une mesure démocratique." },
        { type: "saisie", question: "Comment s'appelle le vote par lequel les Athéniens exilent pour dix ans un homme jugé dangereux ?", reponses: ["ostracisme", "l'ostracisme"], explication: "L'**ostracisme** : on écrit le nom de l'homme sur un tesson de poterie (*ostrakon*)." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : montre que la démocratie athénienne donne le pouvoir aux citoyens, mais qu'elle est limitée. Appuie-toi sur des exemples précis (institutions, dates, personnages).", corrige: `**Introduction** : la démocratie (« pouvoir du peuple ») naît à **Athènes** avec les réformes de **Clisthène** en **508-507 av. J.-C.** Elle atteint son apogée au Ve siècle av. J.-C. avec **Périclès**.

**1. Le pouvoir aux citoyens**
- À l'**Ecclésia**, réunie sur la Pnyx, tous les citoyens qui le veulent peuvent parler et voter les lois, décider de la guerre ou de la paix.
- La **Boulè**, 500 citoyens **tirés au sort** pour un an, prépare les lois ; les tribunaux sont formés de citoyens tirés au sort ; les **10 stratèges** sont **élus**.
- Les citoyens peuvent exiler un homme dangereux par l'**ostracisme**.
- Périclès crée le **misthos**, une indemnité qui permet aux pauvres de participer.

**2. Une démocratie limitée**
- Seuls les **hommes libres, adultes, nés de parents athéniens** sont citoyens : peut-être 40 000 personnes, une minorité des habitants.
- Les **femmes** n'ont aucun droit politique.
- Les **métèques** (étrangers) paient des impôts mais ne votent pas.
- Les **esclaves**, très nombreux, n'ont aucun droit.

**Conclusion** : Athènes invente une démocratie **directe** où les citoyens décident eux-mêmes, ce qui est nouveau. Mais elle exclut la majorité des habitants : elle est très différente de notre démocratie actuelle.` },
        { type: "qcm", texte: "pericles", question: "D'après le document, dans quelle circonstance Périclès prononce-t-il ce discours ?", choix: ["Lors de l'ouverture des Jeux olympiques, devant les Grecs de toutes les cités", "Au lendemain de la victoire navale de Salamine contre les Perses", "Aux funérailles des premiers soldats athéniens morts dans la guerre contre Sparte", "Devant les 500 membres de la Boulè, pour faire voter une loi"], reponse: 2, explication: "L'introduction du document l'indique : c'est un **discours funèbre**, prononcé pendant l'hiver qui suit le début de la **guerre du Péloponnèse** (431 av. J.-C.), pour honorer les premiers soldats morts. Salamine date de 480 av. J.-C., bien avant." },
        { type: "saisie", texte: "pericles", question: "D'après le texte, quel nom porte le régime politique d'Athènes ?", reponses: ["démocratie", "la démocratie", "une démocratie", "démocratie athénienne", "la démocratie athénienne", "démocratie directe", "une démocratie directe", "la démocratie directe"], explication: "Périclès dit que la constitution « s'appelle **démocratie**, parce que le pouvoir n'est pas entre les mains d'une minorité, mais du plus grand nombre »." },
        { type: "vf", texte: "pericles", question: "Selon Périclès, un citoyen pauvre ne peut pas servir la cité.", reponse: false, explication: "Périclès affirme le contraire : « la pauvreté n'empêche personne, s'il est capable de rendre service à la cité, d'y prendre part ». C'est pour cela qu'il a créé le **misthos**, une indemnité versée aux citoyens qui participent aux tribunaux et à d'autres charges publiques." },
        { type: "qcm", texte: "pericles", question: "« Nous décidons nous-mêmes des affaires de la cité. » Dans quelle institution les citoyens athéniens votent-ils eux-mêmes les lois ?", choix: ["Le Sénat", "L'Ecclésia", "L'acropole", "Le tribunal des stratèges"], reponse: 1, explication: "À l'**Ecclésia**, réunie sur la Pnyx, les citoyens votent eux-mêmes les lois : c'est une démocratie **directe**. Le Sénat est romain ; l'acropole est la colline des temples ; les stratèges commandent l'armée." },
        { type: "saisie", texte: "pericles", question: "Combien d'années séparent les réformes de Clisthène (508 av. J.-C.) et le début de la guerre du Péloponnèse (431 av. J.-C.) ? (réponds par un nombre)", reponses: ["77", "soixante-dix-sept"], explication: "Deux dates avant J.-C. : on **soustrait**. 508 − 431 = **77 ans**. La démocratie athénienne a donc moins d'un siècle quand Périclès prononce ce discours." },
        { type: "vf", texte: "pericles", question: "D'après le document, Périclès souhaite que les femmes prennent la parole dans les débats de la cité.", reponse: false, explication: "Il dit aux veuves que leur « plus grande gloire est que l'on parle de [elles] le moins possible parmi les hommes ». Les **femmes** restent à l'écart de la vie politique : elles ne sont pas citoyennes." },
        { type: "qcm", texte: "pericles", question: "Pourquoi un historien doit-il lire ce texte avec un regard critique ?", choix: ["Parce que c'est un éloge réécrit par Thucydide, qui ne dit rien des métèques ni des esclaves", "Parce que Thucydide n'a jamais vécu à Athènes et ne connaissait la guerre que par des rumeurs", "Parce que Périclès était en réalité un roi de Sparte qui voulait se moquer des Athéniens", "Parce que le texte a été écrit par un auteur romain, plus de mille ans après la guerre"], reponse: 0, explication: "Le discours veut **honorer les morts** et donner du courage aux Athéniens : il donne une image très belle de la cité. Thucydide, un Athénien qui a vécu la guerre, l'a **réécrit**. Et le texte ne dit rien des **métèques** ni des **esclaves**, exclus de la citoyenneté." },
        { type: "redaction", texte: "pericles", question: "**Analyse de document (niveau contrôle)** : 1. Présente le document (nature, auteur, date, contexte). 2. Relève deux phrases qui montrent que, selon Périclès, le peuple a le pouvoir à Athènes. 3. Explique ces phrases avec tes connaissances (institutions, misthos). 4. Montre que cette démocratie est pourtant limitée, à l'aide du document et du cours.", corrige: `**1. Présentation** : c'est un **discours** de **Périclès**, stratège athénien, rapporté par l'historien athénien **Thucydide** dans son *Histoire de la guerre du Péloponnèse*. Il est prononcé pendant l'hiver 431-430 av. J.-C., aux **funérailles** des premiers soldats morts dans la guerre contre **Sparte**. C'est un **éloge** d'Athènes et de sa démocratie. Thucydide l'a réécrit : ce ne sont pas exactement les mots de Périclès.

**2. Le pouvoir du peuple** : Périclès dit que la constitution « s'appelle démocratie, parce que le pouvoir n'est pas entre les mains d'une minorité, mais du plus grand nombre ». Il ajoute : « la pauvreté n'empêche personne [...] d'y prendre part » et « nous décidons nous-mêmes des affaires de la cité ».

**3. Explication** : depuis les réformes de **Clisthène** (508-507 av. J.-C.), tous les citoyens peuvent voter les lois à l'**Ecclésia**, sur la Pnyx : c'est une démocratie **directe**. Les 500 membres de la **Boulè** et les juges sont **tirés au sort**, ce qui donne la même chance à tous. Périclès a créé le **misthos**, une indemnité qui permet aux citoyens pauvres de participer sans perdre leur journée de travail.

**4. Une démocratie limitée** : le document montre que les **femmes** sont écartées de la vie publique (« que l'on parle de vous le moins possible »). Le discours ne parle pas non plus des **métèques** (étrangers installés à Athènes) ni des **esclaves**, qui n'ont aucun droit politique. Seuls les hommes libres, adultes, nés de parents athéniens sont citoyens : peut-être 40 000 personnes, une **minorité** des habitants.

**Conclusion** : ce discours présente Athènes comme un modèle, « l'école de la Grèce ». Il montre une idée nouvelle, le pouvoir du peuple, mais le « peuple » athénien n'est qu'une partie de la population.` },
      ],
    },
    {
      id: "rome-mythe-histoire",
      titre: "Rome, du mythe à l'histoire",
      theme: "Histoire – Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire av. J.-C.",
      cours: `
## Introduction
Selon les Romains, leur ville a été fondée en **753 av. J.-C.** par **Romulus**. Est-ce vrai ? Pour le savoir, les historiens comparent le **mythe** (le récit raconté par les Romains) avec les découvertes des **archéologues**.

## 1. Le mythe de la fondation de Rome
- **Énée**, un prince troyen fils de la déesse Vénus, fuit Troie en flammes et arrive en Italie. Ses descendants règnent dans la région.
- Bien plus tard, la princesse **Rhéa Silvia** donne naissance à des jumeaux, **Romulus et Rémus**, fils du dieu **Mars**. Le roi Amulius les fait abandonner dans le Tibre. Une **louve** les recueille et les allaite ; un berger les élève.
- Devenus adultes, les jumeaux décident de fonder une ville. Ils se disputent ; **Romulus tue Rémus** et devient le premier roi de la ville, à qui il donne son nom : **Rome**, en **753 av. J.-C.**, sur la colline du **Palatin**.
- Ce mythe est raconté par l'historien **Tite-Live** et par le poète **Virgile** dans l'***Énéide***, écrits à l'époque de l'empereur **Auguste** (fin du Ier siècle av. J.-C.), plus de 700 ans après la date supposée !

## 2. Ce que disent les archéologues
- Les archéologues ont retrouvé sur le **Palatin** des traces de **cabanes** du **VIIIe siècle av. J.-C.** : il y avait bien de petits villages à cette époque.
- Mais Rome est née peu à peu du **regroupement de villages** installés sur plusieurs **collines** près du **Tibre**, et non d'une fondation en un seul jour.
- Au VIe siècle av. J.-C., Rome est dominée par des rois **étrusques** (un peuple du centre de l'Italie, installé au nord de Rome) : la ville se dote alors d'un forum, de temples, d'égouts.
- La célèbre statue de la **louve** du Capitole a longtemps été crue antique ; des analyses récentes suggèrent qu'elle date peut-être du Moyen Âge, et les jumeaux ont été ajoutés à la Renaissance. Il faut toujours **critiquer** ses sources !

## 3. Pourquoi ce mythe est-il important ?
- Il donne aux Romains une **origine glorieuse** : ils descendent des dieux (Mars, Vénus) et des héros de Troie.
- Il justifie leur **domination** : si les dieux ont voulu Rome, il est normal qu'elle domine le monde.
- Il est **mis en scène** partout : sur les monnaies, les statues, les monuments. L'empereur **Auguste** se dit descendant d'Énée et de Vénus.

## 4. De la royauté à la République
- Selon la tradition, Rome a eu **sept rois**. En **509 av. J.-C.**, les Romains chassent le dernier roi, Tarquin le Superbe, et fondent la **République** (*res publica*, « la chose publique »).
- Le pouvoir est partagé : deux **consuls** élus pour un an, le **Sénat** (anciens magistrats) et les **assemblées** de citoyens. La devise est **SPQR** : *Senatus Populusque Romanus*, « le Sénat et le peuple romain ».

>! **Méthode – distinguer mythe et histoire** : un récit est un **mythe** s'il fait intervenir des dieux, des miracles ou des animaux extraordinaires et s'il a été écrit longtemps après. Un fait est **historique** s'il est prouvé par des **sources** (traces archéologiques, textes de l'époque). Pour Rome : la louve = mythe ; les cabanes du Palatin = histoire.

> **À retenir** :
> - Le **mythe** : Énée, Romulus et Rémus, la louve ; fondation de Rome en **753 av. J.-C.** selon la tradition.
> - L'**histoire** : des villages sur les collines du Tibre dès le VIIIe siècle av. J.-C., qui se regroupent peu à peu.
> - Le mythe sert à donner une origine glorieuse et à justifier la domination de Rome.
> - **509 av. J.-C.** : naissance de la **République** (consuls, Sénat, SPQR).
> - Vocabulaire : mythe, archéologie, Palatin, Tibre, République, consul, Sénat.
`,
      exercices: [
        { type: "saisie", question: "En quelle année Rome a-t-elle été fondée selon la tradition ? (avec « av. J.-C. »)", reponses: ["753 av. J.-C.", "753 avant J.-C.", "753 av JC", "-753", "753 avant Jésus-Christ", "en 753 av. J.-C.", "753 avant JC", "753 av J-C", "753 av. J-C", "753 avant J-C", "753 av. JC", "753 av. J.C.", "753 av J.C.", "753 av JC.", "753 avant J.C.", "753 avant Jésus Christ", "en 753 avant Jésus-Christ"], explication: "Selon la tradition, Romulus fonde Rome en **753 av. J.-C.** sur le Palatin." },
        { type: "qcm", question: "Quel animal recueille Romulus et Rémus selon le mythe ?", choix: ["Une louve", "Une ourse", "Une chouette", "Une lionne"], reponse: 0, explication: "Une **louve** allaite les jumeaux abandonnés au bord du Tibre. La chouette est l'oiseau d'Athéna." },
        { type: "vf", question: "Les archéologues ont prouvé que Romulus a fondé Rome seul, en un jour, en 753 av. J.-C.", reponse: false, explication: "Les archéologues ont trouvé des **cabanes du VIIIe siècle av. J.-C.** sur le Palatin, mais Rome est née du **regroupement progressif de villages**. Romulus est un personnage du mythe." },
        { type: "qcm", question: "Quel prince troyen, selon le mythe, est l'ancêtre des Romains ?", choix: ["Ulysse", "Énée", "Achille", "Périclès"], reponse: 1, explication: "**Énée**, fils de Vénus, fuit Troie et arrive en Italie (Virgile, *Énéide*). Ulysse et Achille sont des héros grecs, Périclès un homme politique athénien." },
        { type: "saisie", question: "Quel fleuve traverse Rome ?", reponses: ["le Tibre", "Tibre"], explication: "Rome est née près du **Tibre**, sur des collines comme le Palatin." },
        { type: "qcm", question: "Pourquoi les Romains racontent-ils ce mythe de fondation ?", choix: ["Pour montrer que Rome est une ville pauvre", "Pour remercier les Grecs", "Pour se donner une origine glorieuse et justifier leur domination", "Pour expliquer la naissance de l'écriture"], reponse: 2, explication: "Descendre de Mars, de Vénus et des héros de Troie donne aux Romains une **origine glorieuse** : si les dieux ont voulu Rome, sa domination paraît légitime." },
        { type: "vf", question: "En 509 av. J.-C., les Romains chassent leur dernier roi et fondent la République.", reponse: true, explication: "La République (*res publica*) est dirigée par deux consuls élus pour un an, le Sénat et les assemblées." },
        { type: "qcm", question: "Combien d'années séparent la fondation légendaire de Rome (753 av. J.-C.) et la naissance de la République (509 av. J.-C.) ?", choix: ["1 262 ans", "509 ans", "253 ans", "244 ans"], reponse: 3, explication: "Deux dates avant J.-C. : 753 − 509 = **244 ans**. On n'additionne pas !" },
        { type: "redaction", question: "**Analyse de document** : « Les jumeaux furent abandonnés au bord du Tibre. Une louve assoiffée, descendue des montagnes voisines, se dirigea vers les cris des enfants ; elle leur présenta ses mamelles. » (D'après Tite-Live, *Histoire romaine*, livre I, écrit vers 27 av. J.-C., texte traduit et simplifié). 1. Présente le document. 2. Quels éléments montrent qu'il s'agit d'un mythe ? 3. Combien d'années séparent le récit de la date légendaire de la fondation ? Qu'en conclus-tu ? 4. Que nous apprennent, au contraire, les archéologues ?", corrige: `**1. Présentation** : c'est un extrait de l'*Histoire romaine*, écrite par l'historien romain **Tite-Live** vers **27 av. J.-C.**, à l'époque de l'empereur Auguste. Il raconte l'enfance de **Romulus et Rémus**.

**2. Un mythe** : une **louve** sauvage allaite deux bébés humains, ce qui est extraordinaire. Le reste du récit fait des jumeaux les fils du dieu **Mars**. Ce sont des éléments **merveilleux**, impossibles à prouver.

**3. Un récit très tardif** : 753 − 27 = **726 ans** séparent la date légendaire de la fondation et l'écriture du texte. Tite-Live n'a donc pas été témoin : il reprend des légendes transmises oralement. Son texte n'est pas une source fiable sur la fondation de Rome.

**4. L'archéologie** : les archéologues ont trouvé sur le **Palatin** des traces de **cabanes du VIIIe siècle av. J.-C.** Rome est née du regroupement progressif de **villages** installés sur les collines près du Tibre, puis s'est développée sous les rois étrusques. Le mythe contient donc une part de vérité (l'époque, le lieu), mais pas le récit merveilleux.` },
      ],
    },
    {
      id: "monotheisme-juif",
      titre: "La naissance du monothéisme juif dans un monde polythéiste",
      theme: "Histoire – Récits fondateurs, croyances et citoyenneté dans la Méditerranée antique au Ier millénaire av. J.-C.",
      cours: `
## Introduction
Dans l'Orient ancien, presque tous les peuples sont **polythéistes** : Égyptiens, Mésopotamiens, Cananéens croient en de nombreux dieux. Au **Ier millénaire av. J.-C.**, un petit peuple, les **Hébreux**, en vient à croire en un **dieu unique** : c'est le **monothéisme**. Quand et dans quel contexte ce monothéisme est-il né ?

## 1. La Bible hébraïque, un livre de récits
- Le livre sacré des juifs est la **Bible hébraïque**. Ses cinq premiers livres forment la **Torah** (« la Loi »).
- Elle raconte l'histoire du peuple hébreu et de son alliance avec son dieu, **Yahvé** :
  - **Abraham** quitte la Mésopotamie pour le pays de **Canaan**, la terre que Dieu lui promet ;
  - **Moïse** fait sortir les Hébreux d'Égypte, où ils étaient esclaves (l'**Exode**) ; sur le mont **Sinaï**, Dieu lui remet les **Dix Commandements** ;
  - les rois **David** et **Salomon** règnent à **Jérusalem** ; Salomon y construit le **Temple**.
- Ces récits ont été **mis par écrit** surtout entre le **VIIIe** et le **Ve siècle av. J.-C.**, longtemps après les événements qu'ils racontent. Les historiens ne trouvent pas de traces archéologiques de l'Exode ni d'Abraham : ce sont des **récits de croyance**, qu'il faut confronter aux sources.

## 2. Ce que disent l'histoire et l'archéologie
- Des **royaumes hébreux** ont bien existé : le royaume d'**Israël** au nord et le royaume de **Juda** au sud, avec **Jérusalem** pour capitale. Une stèle du IXe siècle av. J.-C. (la stèle de **Tel Dan**) mentionne la « maison de David ».
- Ces petits royaumes sont pris entre de grands empires. Le royaume d'Israël est détruit par les **Assyriens** vers **722 av. J.-C.**
- En **587 av. J.-C.** (ou 586), le roi de Babylone **Nabuchodonosor** prend Jérusalem, **détruit le Temple** et déporte une partie des habitants : c'est l'**exil à Babylone**.
- C'est surtout **pendant et après l'exil** que s'affirme le monothéisme : loin de leur terre et de leur Temple, les Judéens rassemblent leurs textes et affirment que Yahvé est le **seul dieu**, créateur du monde.
- En **538 av. J.-C.**, le roi perse **Cyrus** permet aux exilés de rentrer ; le Temple est reconstruit.

## 3. Les croyances et les pratiques du judaïsme
- Un **dieu unique**, tout-puissant, créateur du monde, qui a fait une **alliance** avec son peuple.
- Le respect de la **Loi** (la Torah) : les Dix Commandements (ne pas tuer, ne pas voler, honorer ses parents…), le repos du **sabbat** (le samedi), des règles alimentaires.
- La prière, la lecture de la Torah ; plus tard, la **synagogue** devient le lieu de réunion et de prière.
- En **70 ap. J.-C.**, les **Romains** détruisent le second Temple de Jérusalem. Il n'en reste qu'un mur qui soutenait l'esplanade du Temple : le **mur occidental** (ou « mur des Lamentations »). La dispersion des juifs dans tout le monde romain, commencée depuis l'exil, s'accentue : c'est la **diaspora**.

| | Polythéisme | Monothéisme |
|---|---|---|
| Définition | croyance en plusieurs dieux | croyance en un dieu unique |
| Exemples | Égyptiens, Mésopotamiens, Grecs, Romains | judaïsme, puis christianisme et islam |

>! **Méthode – croyance ou fait historique ?** Phrase de croyance : « Selon la Bible, Moïse a reçu les Dix Commandements sur le mont Sinaï. » Fait historique : « En 587 av. J.-C., Nabuchodonosor détruit le Temple de Jérusalem. » (attesté par des sources babyloniennes et l'archéologie). En histoire, on écrit « selon la Bible… » quand on rapporte un récit religieux.

> **À retenir** :
> - Le **monothéisme** est la croyance en un **dieu unique**. Le judaïsme est le premier grand monothéisme.
> - La **Bible hébraïque** (Torah) raconte l'alliance entre Dieu et les Hébreux (Abraham, Moïse, David).
> - Des royaumes hébreux ont existé (Israël, Juda, capitale **Jérusalem**). **587 av. J.-C.** : destruction du Temple, **exil à Babylone** : le monothéisme s'affirme.
> - **70 ap. J.-C.** : les Romains détruisent le second Temple ; diaspora.
> - Vocabulaire : monothéisme, polythéisme, Bible, Torah, alliance, Temple, exil, synagogue, diaspora.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on la croyance en un dieu unique ?", reponses: ["monothéisme", "le monothéisme"], explication: "**Mono** = un seul, **théos** = dieu. La croyance en plusieurs dieux est le **polythéisme**." },
        { type: "qcm", question: "Comment s'appellent les cinq premiers livres de la Bible hébraïque ?", choix: ["La Torah", "Les Évangiles", "L'Iliade", "Le Code de Hammurabi"], reponse: 0, explication: "La **Torah** (« la Loi ») regroupe les cinq premiers livres. Les Évangiles appartiennent au Nouveau Testament chrétien." },
        { type: "vf", question: "Les Égyptiens et les Mésopotamiens étaient monothéistes.", reponse: false, explication: "Ils étaient **polythéistes** (Rê, Osiris en Égypte ; de nombreux dieux en Mésopotamie). Le monothéisme des Hébreux est une exception dans l'Orient ancien." },
        { type: "qcm", question: "Selon la Bible, qui reçoit les Dix Commandements sur le mont Sinaï ?", choix: ["Abraham", "Moïse", "David", "Salomon"], reponse: 1, explication: "Selon la Bible, **Moïse** reçoit les Dix Commandements après la sortie d'Égypte (l'Exode). Abraham est l'ancêtre, David et Salomon des rois." },
        { type: "saisie", question: "Quelle ville est la capitale du royaume de Juda, où se trouve le Temple ?", reponses: ["Jérusalem"], explication: "**Jérusalem** est la capitale du royaume de Juda ; le Temple y est construit puis détruit en 587 av. J.-C." },
        { type: "qcm", question: "Que se passe-t-il en 587 av. J.-C. ?", choix: ["Moïse fait sortir les Hébreux d'Égypte", "Les Romains détruisent le second Temple", "Nabuchodonosor détruit le Temple de Jérusalem et déporte des habitants à Babylone", "Cyrus construit le premier Temple"], reponse: 2, explication: "En **587 av. J.-C.**, le roi de Babylone **Nabuchodonosor** prend Jérusalem : c'est le début de l'**exil**. Les Romains détruisent le second Temple bien plus tard, en 70 ap. J.-C." },
        { type: "vf", question: "Le monothéisme s'affirme surtout pendant et après l'exil à Babylone.", reponse: true, explication: "Privés de leur Temple et de leur terre, les Judéens rassemblent leurs textes et affirment que Yahvé est le seul dieu." },
        { type: "qcm", question: "Laquelle de ces phrases un historien peut-il écrire ?", choix: ["Dieu a donné les Dix Commandements à Moïse en 1250 av. J.-C.", "Abraham est né en Mésopotamie, c'est prouvé.", "L'Exode est attesté par de nombreuses fouilles.", "Selon la Bible, Moïse a reçu les Dix Commandements sur le mont Sinaï."], reponse: 3, explication: "L'historien distingue **croyance** et **fait** : il écrit « **selon la Bible** » pour rapporter un récit religieux. Aucune fouille n'a trouvé de traces de l'Exode ni d'Abraham." },
        { type: "saisie", question: "Comment appelle-t-on la dispersion des juifs dans le monde, surtout après 70 ap. J.-C. ?", reponses: ["diaspora", "la diaspora"], explication: "La **diaspora** : après la destruction du second Temple par les Romains (70 ap. J.-C.), les communautés juives se dispersent dans tout l'Empire romain." },
        { type: "redaction", question: "**Paragraphe argumenté** : explique dans quel contexte naît le monothéisme juif. Distingue ce que raconte la Bible et ce que savent les historiens.", corrige: `**Un monde polythéiste** : dans l'Orient ancien, les peuples (Égyptiens, Mésopotamiens, Cananéens) croient en de nombreux dieux. Les Hébreux, eux, finissent par croire en un **dieu unique** : c'est le **monothéisme**.

**Ce que raconte la Bible** : la **Bible hébraïque** raconte l'**alliance** entre Dieu et son peuple. Selon elle, **Abraham** quitte la Mésopotamie pour Canaan, **Moïse** fait sortir les Hébreux d'Égypte et reçoit les **Dix Commandements**, puis les rois **David** et **Salomon** règnent à Jérusalem, où Salomon construit le **Temple**. Ces récits ont été écrits surtout entre le VIIIe et le Ve siècle av. J.-C., longtemps après : ce sont des **récits de croyance**.

**Ce que savent les historiens** : des royaumes hébreux ont existé (**Israël** et **Juda**), comme le montre la stèle de Tel Dan. Ils sont pris entre de grands empires. En **587 av. J.-C.**, **Nabuchodonosor**, roi de Babylone, détruit le Temple de Jérusalem et déporte des habitants : c'est l'**exil**. C'est surtout à ce moment que s'affirme l'idée d'un dieu unique, créateur du monde. En 538 av. J.-C., le roi perse Cyrus permet le retour.

**Conclusion** : le monothéisme juif naît dans un contexte difficile, celui de petits royaumes menacés et de l'exil. Il sera à l'origine du christianisme puis de l'islam.` },
      ],
    },
    {
      id: "conquetes-paix-romaine",
      titre: "Conquêtes, paix romaine et romanisation",
      theme: "Histoire – L'empire romain dans le monde antique",
      cours: `
## Introduction
Petite ville d'Italie au VIIIe siècle av. J.-C., Rome domine au IIe siècle ap. J.-C. un immense **empire** autour de la Méditerranée, que les Romains appellent *mare nostrum*, « notre mer ». Comment Rome a-t-elle conquis cet empire, et comment en a-t-elle assuré l'unité ?

## 1. Les conquêtes : de la ville à l'empire
- Rome conquiert d'abord l'**Italie** (IIIe siècle av. J.-C.), puis bat **Carthage** (en Afrique du Nord) lors des **guerres puniques** (264-146 av. J.-C.) et conquiert la **Grèce** (146 av. J.-C.).
- **Jules César** conquiert la **Gaule** de **58 à 51 av. J.-C.** ; il bat le chef gaulois **Vercingétorix** à **Alésia** en **52 av. J.-C.**
- La force de Rome : son **armée** de **légionnaires**, des soldats entraînés et disciplinés, et ses routes.
- César devient très puissant, mais il est assassiné en **44 av. J.-C.** par des sénateurs qui craignent qu'il devienne roi.

## 2. Auguste et l'Empire
- Son fils adoptif **Octave** reste seul maître de Rome après des guerres civiles. En **27 av. J.-C.**, le Sénat lui donne le titre d'**Auguste** (« celui qui est vénéré ») : c'est le premier **empereur** et le début de l'**Empire**.
- L'empereur a tous les pouvoirs : il commande l'armée, fait les lois, est le chef de la religion (**grand pontife**). Après sa mort, il est souvent **divinisé** (proclamé dieu par le Sénat). Les habitants doivent participer au **culte impérial** (honorer l'empereur comme un dieu).
- L'Empire atteint sa plus grande étendue en **117 ap. J.-C.**, sous l'empereur **Trajan** : du nord de l'Angleterre actuelle à l'Égypte, de l'Espagne à la Mésopotamie. Il compterait peut-être 50 à 70 millions d'habitants (estimation des historiens).

## 3. La paix romaine
- Aux **Ier et IIe siècles ap. J.-C.**, il y a peu de guerres à l'intérieur de l'Empire : c'est la **paix romaine** (*pax romana*).
- Les frontières (le **limes**) sont protégées par des légions et des fortifications, comme le **mur d'Hadrien** en Bretagne (Grande-Bretagne actuelle), construit à partir de 122.
- Grâce à la paix et à un réseau de **voies romaines**, le **commerce** se développe : blé d'Égypte, huile d'Espagne, vin de Gaule circulent dans tout l'Empire.

## 4. La romanisation
- La **romanisation** est l'adoption par les peuples conquis de la **culture**, de la langue et du mode de vie des Romains.
- **Les villes** sont construites sur le modèle de Rome (l'*Urbs*, « la Ville ») : un **forum** (place publique), des **temples**, des **thermes** (bains publics), un **amphithéâtre** (combats de gladiateurs), un **théâtre**, un **aqueduc** qui apporte l'eau. Exemples en Gaule : **Nîmes** (Maison carrée, arènes ; aqueduc du **pont du Gard**), **Lyon** (*Lugdunum*), **Arles**.
- **La langue** : le **latin** se diffuse, surtout en Occident (en Orient, le grec reste dominant). Le français vient du latin !
- **La citoyenneté** : au début, peu d'habitants de l'Empire sont citoyens romains. Elle est accordée peu à peu aux élites locales, puis en **212**, l'empereur **Caracalla** l'étend à **tous les hommes libres** de l'Empire.
- Les peuples gardent souvent une partie de leurs traditions et de leurs dieux, qu'ils associent aux dieux romains : la romanisation est un **mélange**.

>! **Méthode – compter les dates avant et après J.-C.** : entre 27 av. J.-C. (Auguste) et 117 ap. J.-C. (Trajan), on **additionne** : 27 + 117 = **144 ans**. (Pour être tout à fait exact, il faut retirer 1 an, car il n'y a pas d'année 0 : on passe directement de 1 av. J.-C. à 1 ap. J.-C. ; mais au collège, le calcul simple est accepté.)

> **À retenir** :
> - **52 av. J.-C.** : César bat Vercingétorix à Alésia ; la Gaule est romaine.
> - **27 av. J.-C.** : Octave devient **Auguste**, premier **empereur**.
> - Ier-IIe siècles : la **paix romaine** ; plus grande étendue de l'Empire en 117 (Trajan).
> - **Romanisation** : villes à la romaine (forum, thermes, amphithéâtre, aqueduc), latin, citoyenneté (**212**, édit de Caracalla).
> - Vocabulaire : empire, empereur, légion, limes, paix romaine, romanisation, citoyenneté, culte impérial.
`,
      exercices: [
        { type: "qcm", question: "Qui est le premier empereur romain, à partir de 27 av. J.-C. ?", choix: ["Auguste", "Jules César", "Trajan", "Caracalla"], reponse: 0, explication: "**Octave** reçoit le titre d'**Auguste** en 27 av. J.-C. : c'est le premier empereur. César n'a jamais été empereur : il est assassiné en 44 av. J.-C." },
        { type: "saisie", question: "Quel chef gaulois est battu par César à Alésia en 52 av. J.-C. ?", reponses: ["Vercingétorix"], explication: "**Vercingétorix** se rend à César après le siège d'**Alésia** (52 av. J.-C.)." },
        { type: "vf", question: "Jules César a été le premier empereur de Rome.", reponse: false, explication: "César a conquis la Gaule et pris beaucoup de pouvoir, mais il est assassiné en 44 av. J.-C. sans avoir été empereur. Le premier empereur est **Auguste** (27 av. J.-C.)." },
        { type: "saisie", question: "Comment appelle-t-on l'adoption de la culture et du mode de vie romains par les peuples conquis ?", reponses: ["romanisation", "la romanisation"], explication: "La **romanisation** : villes à la romaine, latin, citoyenneté, culte impérial." },
        { type: "qcm", question: "Quel monument apporte l'eau dans une ville romaine ?", choix: ["L'amphithéâtre", "L'aqueduc", "Le forum", "Les thermes"], reponse: 1, explication: "L'**aqueduc** transporte l'eau (le pont du Gard en est un morceau). Les thermes utilisent cette eau ; le forum est la place publique ; l'amphithéâtre accueille les combats de gladiateurs." },
        { type: "qcm", question: "Que décide l'empereur Caracalla en 212 ?", choix: ["Il fait construire le mur d'Hadrien", "Il conquiert la Gaule", "Il accorde la citoyenneté romaine à tous les hommes libres de l'Empire", "Il interdit le latin"], reponse: 2, explication: "Par l'**édit de Caracalla** (212), tous les hommes libres de l'Empire deviennent **citoyens romains**." },
        { type: "vf", question: "La paix romaine désigne une période de calme dans l'Empire aux Ier et IIe siècles ap. J.-C.", reponse: true, explication: "La *pax romana* : peu de guerres à l'intérieur, frontières protégées (limes), commerce prospère." },
        { type: "saisie", question: "Combien d'années séparent le début du règne d'Auguste (27 av. J.-C.) et l'apogée territoriale de l'Empire sous Trajan (117 ap. J.-C.) ? (réponds par un nombre)", reponses: ["144", "143", "cent quarante-quatre"], explication: "Une date avant J.-C. et une après : on **additionne** : 27 + 117 = **144 ans** (143 si l'on tient compte de l'absence d'année 0 : les deux réponses sont acceptées)." },
        { type: "qcm", question: "Comment appelle-t-on la frontière fortifiée de l'Empire romain ?", choix: ["Le forum", "L'Urbs", "Le Sénat", "Le limes"], reponse: 3, explication: "Le **limes** est la frontière protégée par des légions et des fortifications (mur d'Hadrien, par exemple). L'*Urbs* désigne Rome, « la Ville »." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : montre comment Rome assure l'unité de son immense empire aux Ier et IIe siècles ap. J.-C. Donne des exemples précis, en particulier en Gaule.", corrige: `**Introduction** : après de nombreuses conquêtes (Carthage, la Grèce, la Gaule par César entre 58 et 51 av. J.-C.), Rome domine tout le pourtour de la Méditerranée. En **27 av. J.-C.**, **Auguste** devient le premier empereur. Comment tenir ensemble des peuples si différents ?

**1. Le pouvoir de l'empereur et l'armée**
- L'**empereur** a tous les pouvoirs : il commande l'armée, fait les lois, dirige la religion. Les habitants pratiquent le **culte impérial**.
- Les **légions** protègent les frontières, le **limes** (mur d'Hadrien). C'est la **paix romaine** : le commerce circule sur les **voies romaines**.

**2. La romanisation**
- Les villes imitent Rome : **forum**, temples, **thermes**, **amphithéâtre**, **aqueduc**. En Gaule, **Nîmes** a sa Maison carrée et ses arènes, alimentées en eau par l'aqueduc du **pont du Gard** ; **Lyon** (*Lugdunum*) est une grande ville romaine.
- Le **latin** se diffuse en Occident.
- La **citoyenneté** romaine est accordée peu à peu, puis à tous les hommes libres par l'**édit de Caracalla** en **212**.

**Conclusion** : l'unité de l'Empire repose sur l'empereur, l'armée et la romanisation. Les peuples conservent toutefois une partie de leurs traditions : la culture de l'Empire est un mélange.` },
      ],
    },
    {
      id: "chretiens-empire",
      titre: "Des chrétiens dans l'empire",
      theme: "Histoire – L'empire romain dans le monde antique",
      cours: `
## Introduction
Au Ier siècle ap. J.-C., dans la province romaine de **Judée**, naît une nouvelle religion : le **christianisme**. Issu du judaïsme, ce nouveau monothéisme se diffuse dans l'Empire romain. D'abord persécuté, il devient en quelques siècles la **religion officielle** de l'Empire.

## 1. Jésus et les débuts du christianisme
- **Jésus** est un **juif** de Palestine, né vers **6-4 av. J.-C.** (le moine qui a fixé notre calendrier au VIe siècle s'est trompé de quelques années). Il prêche en Galilée et en Judée et rassemble des **disciples**, dont douze **apôtres**.
- Son message : l'**amour de Dieu** et du **prochain**, le pardon, l'attention aux pauvres et aux exclus, l'annonce du royaume de Dieu.
- Il est **crucifié** à **Jérusalem** vers **30 ap. J.-C.**, sur ordre du gouverneur romain **Ponce Pilate**. Les historiens ont peu de sources sur sa vie : quelques auteurs romains et juifs le mentionnent (comme l'historien romain Tacite).
- Ses disciples affirment qu'il est **ressuscité** et qu'il est le **Christ** (en grec, « l'oint », le **messie** envoyé par Dieu) : c'est une **croyance**. Ceux qui y croient sont appelés **chrétiens**.
- Les **Évangiles** (« bonne nouvelle »), écrits entre 70 et 100 environ, racontent sa vie et son enseignement. Avec d'autres textes (lettres de Paul…), ils forment le **Nouveau Testament**. La Bible chrétienne comprend aussi l'Ancien Testament (la Bible hébraïque).

## 2. La diffusion du christianisme
- L'apôtre **Paul de Tarse** fait de grands **voyages** autour de la Méditerranée (années 45-60) et convertit des non-juifs. Il écrit des **lettres** aux premières communautés.
- Le christianisme se diffuse grâce à la **paix romaine**, aux routes et à la langue grecque, d'abord dans les **villes** de l'Orient puis de l'Occident (Rome, Lyon…).
- Les chrétiens se réunissent dans des maisons ; leur communauté s'appelle l'**Église**, dirigée par des **évêques**. Ils ont des signes de reconnaissance comme le **poisson** (en grec *ichthus*, dont les lettres sont les initiales de « Jésus-Christ, fils de Dieu, Sauveur »).

## 3. Des persécutions au christianisme impérial
- Les chrétiens **refusent** d'honorer les dieux romains et de rendre un **culte à l'empereur**. Pour les Romains, c'est une menace pour l'Empire.
- Ils sont **persécutés** (arrêtés, condamnés à mort) à plusieurs reprises : sous **Néron** en **64**, après l'incendie de Rome ; à **Lyon** en **177** (sainte Blandine) ; sous **Dioclétien** au début du IVe siècle (la « grande persécution », à partir de 303). Ceux qui meurent pour leur foi sont des **martyrs**.
- Vers **112**, **Pline le Jeune**, gouverneur de la province de Bithynie (au nord de la Turquie actuelle), demande par lettre à l'empereur **Trajan** comment juger les chrétiens. Trajan répond qu'il ne faut pas les rechercher, mais qu'il faut punir ceux qui sont dénoncés et refusent de prier les dieux romains.
- En **313**, l'empereur **Constantin** accorde la **liberté de culte** aux chrétiens (**édit de Milan**). Il favorise l'Église et se fait baptiser avant de mourir en 337.
- En **380**, l'empereur **Théodose** fait du christianisme la **religion officielle** de l'Empire ; en **392**, il **interdit les cultes païens** (polythéistes).

| Date | Événement |
|---|---|
| vers 30 | crucifixion de Jésus à Jérusalem |
| 64 | persécution de Néron à Rome |
| 177 | martyrs de Lyon |
| 313 | édit de Milan : liberté de culte (Constantin) |
| 380 | le christianisme, religion officielle (Théodose) |

>! **Erreur fréquente** : ne confonds pas « persécuté » et « interdit pour toujours ». Les persécutions n'ont pas été continues : elles ont eu lieu à certains moments, sous certains empereurs. Et en 392, la situation s'inverse : ce sont les cultes païens qui sont interdits.

> **À retenir** :
> - Le **christianisme** naît du judaïsme, au Ier siècle, autour de **Jésus**, crucifié vers 30 à Jérusalem. Les chrétiens croient qu'il est le **Christ**, ressuscité.
> - Il se diffuse dans l'Empire grâce à **Paul** et à la paix romaine.
> - Les chrétiens refusent le culte impérial : ils sont **persécutés** (Néron en 64, Lyon en 177, Dioclétien).
> - **313** : édit de Milan (Constantin), liberté de culte. **380** : religion officielle (Théodose).
> - Vocabulaire : christianisme, Christ, apôtre, Évangile, Nouveau Testament, Église, évêque, martyr, persécution.
`,
      textes: {
        pline: `**Document : un gouverneur romain face aux chrétiens (vers 112 ap. J.-C.)**

*Pline le Jeune gouverne la province romaine de Bithynie (au nord de la Turquie actuelle). Il écrit à l'empereur Trajan pour lui demander comment juger les chrétiens qu'on lui dénonce.*

**Lettre de Pline à Trajan**
« Je n'ai jamais assisté à des procès de chrétiens. Voici comment j'ai agi envers ceux qu'on m'a dénoncés comme chrétiens. Je leur ai demandé s'ils étaient chrétiens. À ceux qui l'avouaient, j'ai posé la question une deuxième et une troisième fois, en les menaçant du supplice ; ceux qui ont persisté, je les ai fait exécuter. Ceux qui niaient être chrétiens, je les ai relâchés quand ils ont prié les dieux, offert de l'encens et du vin devant ta statue, et maudit le Christ. [...]
Ils affirment que toute leur faute consistait à se réunir à jour fixe, avant le lever du soleil, à chanter un hymne au Christ comme à un dieu, et à s'engager par serment à ne commettre ni vol, ni brigandage, ni adultère. [...] Je n'ai rien trouvé d'autre qu'une superstition déraisonnable et sans mesure. [...]
Beaucoup de personnes de tout âge, de toute condition, des deux sexes, sont concernées. Cette contagion n'a pas seulement gagné les villes, mais aussi les villages et les campagnes. Les temples, presque abandonnés, recommencent pourtant à être fréquentés. »

*(Pline veut dire : beaucoup d'habitants, devenus chrétiens, ne venaient presque plus prier dans les temples des dieux romains ; depuis qu'il punit les chrétiens, les gens y reviennent.)*

**Réponse de Trajan à Pline**
« Tu as suivi la bonne méthode, mon cher Pline. [...] Il ne faut pas les rechercher. S'ils sont dénoncés et reconnus coupables, il faut les punir ; mais celui qui nie être chrétien et le prouve en priant nos dieux doit être pardonné. [...] Quant aux dénonciations anonymes, elles ne doivent être acceptées dans aucune accusation : c'est un très mauvais exemple, indigne de notre époque. »

*D'après Pline le Jeune, Lettres, livre X, lettres 96 et 97, vers 112 ap. J.-C. ; texte traduit et simplifié.*

*Vocabulaire : le **supplice** = une punition très cruelle, souvent la mort ; **persister** = continuer, ne pas changer d'avis ; **maudire** = souhaiter du mal, rejeter ; un **hymne** = un chant religieux ; le **brigandage** = le vol avec violence ; l'**adultère** = le fait de tromper son mari ou sa femme ; une **superstition** = pour les Romains, une croyance fausse et dangereuse ; **anonyme** = sans le nom de la personne.*`,
      },
      exercices: [
        { type: "qcm", question: "De quelle religion le christianisme est-il issu ?", choix: ["Du judaïsme", "De la religion égyptienne", "De la religion grecque", "Du culte impérial"], reponse: 0, explication: "Jésus et ses premiers disciples sont **juifs**. Le christianisme garde la Bible hébraïque (l'Ancien Testament) et la croyance en un dieu unique." },
        { type: "saisie", question: "Dans quelle ville Jésus est-il crucifié vers l'an 30 ?", reponses: ["Jérusalem", "à Jérusalem"], explication: "Jésus est crucifié à **Jérusalem**, sur ordre du gouverneur romain Ponce Pilate." },
        { type: "vf", question: "Les Évangiles ont été écrits par Jésus lui-même.", reponse: false, explication: "Jésus n'a rien écrit. Les **Évangiles** ont été rédigés par ses disciples ou des chrétiens, entre 70 et 100 environ." },
        { type: "qcm", question: "Pourquoi les chrétiens sont-ils persécutés par les Romains ?", choix: ["Parce qu'ils refusent de payer l'impôt", "Parce qu'ils refusent de rendre un culte à l'empereur et aux dieux romains", "Parce qu'ils parlent grec", "Parce qu'ils sont tous esclaves"], reponse: 1, explication: "Refuser le **culte impérial** et les dieux de Rome est vu comme une trahison envers l'Empire." },
        { type: "saisie", question: "Comment appelle-t-on une personne qui meurt pour sa foi ?", reponses: ["martyr", "un martyr", "une martyre", "martyre", "martyrs", "des martyrs", "les martyrs"], explication: "Un **martyr** (du grec « témoin ») est mis à mort parce qu'il refuse de renoncer à sa foi, comme Blandine à Lyon en 177." },
        { type: "qcm", question: "Quel empereur accorde la liberté de culte aux chrétiens en 313 ?", choix: ["Néron", "Théodose", "Constantin", "Auguste"], reponse: 2, explication: "**Constantin** accorde la liberté de culte par l'édit de Milan (313). **Néron** persécute les chrétiens ; **Théodose** fait du christianisme la religion officielle (380)." },
        { type: "saisie", question: "En quelle année Théodose fait-il du christianisme la religion officielle de l'Empire ?", reponses: ["380", "en 380", "380 ap. J.-C.", "380 après J.-C.", "en 380 ap. J.-C.", "380 apr. J.-C."], explication: "En **380**, Théodose fait du christianisme la religion officielle ; en 392, il interdit les cultes païens." },
        { type: "vf", question: "Le mot « Christ » vient du grec et signifie « l'oint », c'est-à-dire le messie envoyé par Dieu.", reponse: true, explication: "*Christos* traduit l'hébreu *mashiah* (messie). Les chrétiens croient que Jésus est ce messie." },
        { type: "qcm", question: "Quel apôtre voyage autour de la Méditerranée pour diffuser le christianisme auprès des non-juifs ?", choix: ["Ponce Pilate", "Moïse", "Constantin", "Paul"], reponse: 3, explication: "**Paul de Tarse** fait plusieurs voyages (années 45-60) et écrit des lettres aux communautés. Ponce Pilate est le gouverneur romain qui fait crucifier Jésus." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : raconte comment le christianisme, né en Judée au Ier siècle, devient la religion officielle de l'Empire romain. Utilise au moins quatre dates.", corrige: `**Introduction** : au Ier siècle, dans la province romaine de Judée, naît une nouvelle religion issue du judaïsme : le **christianisme**.

**1. Jésus et ses disciples** : **Jésus**, un juif de Palestine, prêche l'amour de Dieu et du prochain. Il est **crucifié vers 30** à Jérusalem, sur ordre du gouverneur romain Ponce Pilate. Ses disciples croient qu'il est **ressuscité** et qu'il est le **Christ**. Les **Évangiles** racontent sa vie.

**2. La diffusion** : l'apôtre **Paul** voyage autour de la Méditerranée et convertit des non-juifs. Grâce à la paix romaine et aux routes, des communautés chrétiennes (les Églises, dirigées par des évêques) se forment dans les villes de l'Empire.

**3. Les persécutions** : les chrétiens refusent le **culte impérial**. Ils sont persécutés à plusieurs reprises : par **Néron en 64**, à **Lyon en 177** (Blandine), puis par **Dioclétien** à partir de 303. Beaucoup deviennent des **martyrs**.

**4. Le christianisme impérial** : en **313**, **Constantin** accorde la liberté de culte (édit de Milan). En **380**, **Théodose** fait du christianisme la **religion officielle** ; en 392, il interdit les cultes païens.

**Conclusion** : en moins de quatre siècles, la religion d'un petit groupe persécuté devient la religion de l'Empire romain.` },
        { type: "saisie", texte: "pline", question: "D'après le document, à quel empereur romain Pline écrit-il ?", reponses: ["Trajan", "l'empereur Trajan"], explication: "Pline écrit à l'empereur **Trajan** (qui règne de 98 à 117), celui sous lequel l'Empire atteint sa plus grande étendue." },
        { type: "qcm", texte: "pline", question: "Qui est Pline le Jeune, l'auteur de la première lettre ?", choix: ["Un évêque chrétien de Bithynie", "Un gouverneur romain chargé d'une province", "Un apôtre de Jésus, compagnon de Paul", "Un savant chinois venu par la route de la soie"], reponse: 1, explication: "**Pline le Jeune** est un haut fonctionnaire romain, **gouverneur** de la province de **Bithynie**. Il ne faut pas le confondre avec son oncle, le savant Pline l'Ancien. Ce n'est pas un chrétien : il juge les chrétiens." },
        { type: "qcm", texte: "pline", question: "D'après la lettre, que doit faire un accusé pour prouver qu'il n'est pas chrétien ?", choix: ["Payer une forte amende au gouverneur de la province", "Quitter la Bithynie pour aller vivre dans une autre province", "Prier les dieux et faire une offrande devant la statue de l'empereur", "Lire à voix haute un passage des Évangiles devant le juge"], reponse: 2, explication: "Il doit **prier les dieux romains**, faire une offrande devant la **statue de l'empereur** et maudire le Christ. C'est le **culte impérial** : les chrétiens, qui croient en un dieu unique, refusent de le pratiquer, et c'est pour cela qu'ils sont condamnés." },
        { type: "saisie", texte: "pline", question: "Quel mot Pline utilise-t-il pour désigner le christianisme, une croyance qu'il juge « déraisonnable et sans mesure » ?", reponses: ["superstition", "une superstition", "la superstition", "superstition déraisonnable", "une superstition déraisonnable", "superstition déraisonnable et sans mesure", "une superstition déraisonnable et sans mesure"], explication: "Pline parle d'une « **superstition** déraisonnable et sans mesure ». Pour un Romain, c'est une croyance étrangère et dangereuse, qui détourne des dieux de la cité." },
        { type: "vf", texte: "pline", question: "D'après la lettre, le christianisme ne touche que quelques habitants des grandes villes.", reponse: false, explication: "Pline écrit que « beaucoup de personnes de tout âge, de toute condition, des deux sexes » sont concernées, et que la « contagion » a gagné « les villes, mais aussi les villages et les campagnes ». Le christianisme se **diffuse** largement dans l'Empire." },
        { type: "qcm", texte: "pline", question: "D'après sa réponse, quelle règle Trajan fixe-t-il ?", choix: ["Ne pas rechercher les chrétiens, mais punir ceux qui sont dénoncés et refusent de renier leur foi", "Rechercher activement tous les chrétiens de la province et les exécuter sans procès", "Laisser les chrétiens libres de se réunir et de pratiquer leur religion", "Accepter toutes les dénonciations, même anonymes, pour aller plus vite"], reponse: 0, explication: "Trajan écrit : « Il ne faut pas les rechercher », mais ceux qui sont dénoncés et reconnus coupables doivent être punis. Il refuse les **dénonciations anonymes**. La liberté de culte ne sera accordée qu'en **313** (édit de Milan)." },
        { type: "saisie", texte: "pline", question: "Combien d'années séparent cette lettre (vers 112) et l'édit de Milan (313) ? (réponds par un nombre)", reponses: ["201", "deux cent un"], explication: "Deux dates après J.-C. : on **soustrait**. 313 − 112 = **201 ans**. Il faut encore deux siècles pour que les chrétiens obtiennent la liberté de culte." },
        { type: "redaction", texte: "pline", question: "**Analyse de document (niveau contrôle)** : 1. Présente le document (nature, auteurs, date, contexte). 2. Relève ce que Pline apprend sur les pratiques des chrétiens. 3. Explique pourquoi les chrétiens sont condamnés, à l'aide du document et du cours. 4. Que montre le document sur la diffusion du christianisme au début du IIe siècle ?", corrige: `**1. Présentation** : ce sont deux **lettres** écrites vers **112 ap. J.-C.** La première est de **Pline le Jeune**, **gouverneur** romain de la province de **Bithynie** (au nord de la Turquie actuelle) ; la seconde est la réponse de l'empereur **Trajan**. Pline, qui n'a jamais assisté à un procès de chrétiens, demande à l'empereur comment les juger. Ce sont des sources **romaines** : elles nous montrent les chrétiens vus par ceux qui les jugent.

**2. Les pratiques des chrétiens** : ils se réunissent « à jour fixe, avant le lever du soleil », chantent « un hymne au Christ comme à un dieu » et s'engagent à ne commettre « ni vol, ni brigandage, ni adultère ». Pline reconnaît qu'il n'a rien trouvé de criminel, seulement une « superstition ».

**3. Pourquoi sont-ils condamnés ?** Ce n'est pas pour des crimes, mais parce qu'ils **refusent** de prier les dieux romains et d'offrir de l'encens et du vin devant la **statue de l'empereur**. Ils refusent donc le **culte impérial**, ce que les Romains voient comme une menace pour l'Empire. Ceux qui persistent sont exécutés : ce sont des **martyrs**. Trajan fixe une règle : on ne recherche pas les chrétiens, mais on punit ceux qui sont dénoncés et refusent de renier leur foi ; il refuse les dénonciations anonymes.

**4. Une religion qui se diffuse** : selon Pline, le christianisme touche des personnes « de tout âge, de toute condition, des deux sexes », dans les villes mais aussi dans « les villages et les campagnes ». Les temples des dieux romains étaient « presque abandonnés » : beaucoup d'habitants n'y venaient plus prier (Pline ajoute qu'ils recommencent à être fréquentés depuis qu'il punit les chrétiens). Moins d'un siècle après la mort de Jésus (vers 30), le christianisme s'est donc répandu dans une province d'Asie Mineure, grâce à la **paix romaine** et aux routes.

**Conclusion** : ce document montre une persécution **limitée** (on ne recherche pas les chrétiens) mais réelle. Il faudra attendre l'**édit de Milan** (313) pour que les chrétiens obtiennent la liberté de culte.` },
      ],
    },
    {
      id: "rome-chine-han",
      titre: "L'empire romain, la route de la soie et la Chine des Han",
      theme: "Histoire – L'empire romain dans le monde antique",
      cours: `
## Introduction
À l'autre bout du monde connu, à l'époque où Rome domine la Méditerranée, un autre grand empire se développe : la **Chine des Han**. Les deux empires ne se sont presque jamais rencontrés directement, mais ils sont reliés par le **commerce**, le long de ce qu'on appelle les **routes de la soie**.

## 1. La Chine des Han, un grand empire
- En **221 av. J.-C.**, **Qin Shi Huangdi** unifie la Chine et devient le **premier empereur**. Il est enterré avec une **armée de soldats en terre cuite** (plus de 7 000 statues, découvertes en 1974 près de Xi'an).
- La **dynastie Han** règne ensuite de **206 av. J.-C. à 220 ap. J.-C.** Sa capitale est **Chang'an** (aujourd'hui Xi'an), puis Luoyang. Comme l'Empire romain, la Chine des Han compte plusieurs dizaines de millions d'habitants.
- L'empereur est appelé le **« Fils du Ciel »** : il gouverne avec l'accord du Ciel.
- Il s'appuie sur des **fonctionnaires lettrés**, recrutés pour leur connaissance des textes de **Confucius**, un sage chinois du VIe-Ve siècle av. J.-C. qui enseigne le respect des parents, des anciens et du souverain.
- Pour se protéger des nomades du nord (les Xiongnu), les empereurs renforcent des murailles : ce sont les ancêtres de la **Grande Muraille**.
- Inventions chinoises de cette époque : le **papier** (amélioré vers 105 ap. J.-C.), la boussole primitive, la brouette… et surtout la fabrication de la **soie**, tissu précieux tiré du cocon du ver à soie, dont les Chinois gardent le secret.

## 2. Les routes de la soie
- Vers **138 av. J.-C.**, l'empereur Han envoie l'ambassadeur **Zhang Qian** vers l'ouest, en Asie centrale. Ses voyages ouvrent des routes commerciales vers l'Occident.
- Les **routes de la soie** sont des **routes terrestres** (à travers les déserts et les montagnes d'Asie centrale, à dos de chameau) et **maritimes** (par l'océan Indien, l'Inde, la mer Rouge et l'Égypte romaine).
- Le nom « route de la soie » a été inventé en **1877** par un géographe allemand, Ferdinand von Richthofen : les Anciens ne l'utilisaient pas.
- Les marchandises passent de main en main par de nombreux **intermédiaires** (Parthes, marchands d'Asie centrale, Indiens, Arabes) : un même marchand ne fait presque jamais tout le trajet. Le prix augmente à chaque étape.

| De la Chine vers Rome | De Rome vers l'Orient |
|---|---|
| soie, laque, fer | or, argent (pièces de monnaie), verre, vin, corail |
| (de l'Inde : épices, poivre, pierres précieuses) | |

## 3. Des contacts, mais peu de rencontres
- Les Romains appellent les Chinois les **Sères** (le « peuple de la soie »), mais ils les connaissent mal. Les Chinois appellent l'Empire romain **Da Qin**.
- À Rome, la soie est un **produit de luxe** très recherché par les riches. Le savant romain **Pline l'Ancien** (Ier siècle) se plaint que l'Inde, les Sères et l'Arabie coûtent chaque année à l'Empire des sommes énormes.
- Selon des sources chinoises, une délégation se présentant comme envoyée par l'empereur de Da Qin (sans doute des marchands) arrive en Chine en **166 ap. J.-C.**
- Avec les marchandises circulent aussi des **idées**, des techniques et des religions (le bouddhisme arrive d'Inde en Chine par ces routes).

>! **Méthode – lire une carte des routes de la soie** : repère d'abord le **titre**, la **légende** et l'**échelle**. Les flèches (figurés linéaires) montrent les routes ; les points montrent les villes-étapes (Chang'an, Samarcande, Antioche, Alexandrie, Rome). Mesure la distance avec l'échelle : de Chang'an à Rome, il y a environ **8 000 km** à vol d'oiseau.

> **À retenir** :
> - La **Chine des Han** (206 av. J.-C. - 220 ap. J.-C.) est un grand empire dirigé par un empereur, le **Fils du Ciel**, et des fonctionnaires lettrés (Confucius).
> - Les **routes de la soie**, terrestres et maritimes, relient la Chine et l'Empire romain grâce à de nombreux **intermédiaires**.
> - La Chine vend la **soie** ; Rome paie en or, en argent, en verre. Les deux empires se connaissent mal.
> - Vocabulaire : dynastie, Fils du Ciel, lettré, route de la soie, intermédiaire, caravane, Sères.
`,
      exercices: [
        { type: "qcm", question: "Quelle dynastie règne sur la Chine de 206 av. J.-C. à 220 ap. J.-C. ?", choix: ["Les Han", "Les Qin", "Les Ming", "Les Carolingiens"], reponse: 0, explication: "La dynastie **Han** règne plus de quatre siècles. Les **Qin** l'ont précédée (Qin Shi Huangdi, premier empereur en 221 av. J.-C.). Les Ming sont bien plus tardifs ; les Carolingiens sont une dynastie franque." },
        { type: "saisie", question: "Quel produit précieux, fabriqué en Chine à partir du cocon d'un ver, est très recherché à Rome ?", reponses: ["la soie", "soie"], explication: "La **soie** : les Chinois gardent le secret de sa fabrication. Elle a donné son nom aux routes de la soie." },
        { type: "vf", question: "Les marchands romains allaient eux-mêmes jusqu'en Chine pour acheter la soie.", reponse: false, explication: "Les marchandises passent par de **nombreux intermédiaires** (Parthes, marchands d'Asie centrale, Indiens) : presque personne ne faisait tout le trajet." },
        { type: "qcm", question: "Comment l'empereur de Chine est-il appelé ?", choix: ["Le consul", "Le Fils du Ciel", "Le pharaon", "Auguste"], reponse: 1, explication: "L'empereur chinois est le **Fils du Ciel** : il gouverne avec l'accord du Ciel. Le pharaon gouverne l'Égypte, Auguste est un empereur romain, le consul un magistrat de la République romaine." },
        { type: "qcm", question: "Que donne Rome en échange de la soie ?", choix: ["Du papier et de la laque", "Des soldats en terre cuite", "De l'or, de l'argent, du verre", "Des vers à soie"], reponse: 2, explication: "Rome paie surtout en **monnaies d'or et d'argent**, et vend du verre, du vin, du corail. Le papier et la laque sont des produits chinois." },
        { type: "saisie", question: "Quel sage chinois inspire les fonctionnaires lettrés de la Chine des Han ?", reponses: ["Confucius"], explication: "**Confucius** enseigne le respect des parents, des anciens et du souverain. Les fonctionnaires sont recrutés pour leur connaissance de ses textes." },
        { type: "vf", question: "Les routes de la soie étaient à la fois terrestres et maritimes.", reponse: true, explication: "Par terre, à travers l'Asie centrale, à dos de chameau ; par mer, par l'océan Indien, l'Inde, la mer Rouge et l'Égypte." },
        { type: "qcm", question: "Sur une carte, l'échelle indique que 1 cm représente 1 000 km. La distance entre Chang'an et Rome mesure 8 cm. Quelle est la distance réelle ?", choix: ["800 km", "80 000 km", "1 008 km", "8 000 km"], reponse: 3, explication: "8 × 1 000 = **8 000 km**. Pour utiliser une échelle, on multiplie la distance mesurée par la valeur d'un centimètre." },
        { type: "redaction", question: "**Paragraphe argumenté** : montre que l'Empire romain et la Chine des Han sont en relation, mais qu'ils se connaissent mal.", corrige: `**Deux grands empires** : aux Ier et IIe siècles, deux empires dominent les deux extrémités du monde connu : l'**Empire romain** autour de la Méditerranée et la **Chine des Han** (206 av. J.-C. - 220 ap. J.-C.), dirigée par un empereur, le **Fils du Ciel**.

**Des relations commerciales** : depuis le voyage de **Zhang Qian** (vers 138 av. J.-C.), des routes commerciales relient l'Asie à l'Occident : ce sont les **routes de la soie**, terrestres (à travers l'Asie centrale) et maritimes (par l'océan Indien). La Chine vend la **soie**, très recherchée par les riches Romains ; Rome paie en **or**, en **argent** et vend du verre ou du vin. Des idées et des religions circulent aussi.

**Mais peu de rencontres** : les marchandises passent par de nombreux **intermédiaires** (Parthes, marchands d'Asie centrale, Indiens) ; presque personne ne fait tout le trajet. Les Romains appellent les Chinois les **Sères** sans bien les connaître ; les Chinois parlent de « Da Qin ». Les sources chinoises signalent une délégation venue de Da Qin en 166, sans doute des marchands.

**Conclusion** : les deux empires sont reliés par le commerce, mais ils restent lointains et se connaissent surtout par ouï-dire.` },
      ],
    },
    {
      id: "metropoles-habitants",
      titre: "Les métropoles et leurs habitants",
      theme: "Géographie – Habiter une métropole",
      cours: `
## Introduction
Aujourd'hui, **plus de la moitié** de l'humanité vit en ville (depuis 2007-2008, selon l'ONU). Les plus grandes villes sont des **métropoles**. Mais qu'est-ce qu'une métropole, et comment y vit-on ? Comparons une métropole d'un pays **développé**, **Paris**, et une métropole d'un pays **émergent**, **Mumbai** (Inde).

## 1. Qu'est-ce qu'une métropole ?
- Une **métropole** est une très grande ville qui **concentre** la population, les **richesses** et les **pouvoirs** (économiques, politiques, culturels), et qui **rayonne** sur un vaste territoire, parfois sur le monde entier.
- Ses **fonctions** : sièges d'entreprises et banques (fonction **économique**), ministères ou gouvernement (fonction **politique**), musées, universités, spectacles (fonction **culturelle**), hôpitaux, gares, aéroports.
- Une métropole est formée de **plusieurs espaces** : le **centre-ville** (quartiers anciens, commerces, monuments), le **quartier d'affaires** (tours de bureaux), les **banlieues** (quartiers d'habitation, zones industrielles et commerciales), puis la **périphérie** où la ville s'étale sur la campagne (**périurbanisation**).
- Une **mégapole** est une ville de plus de **10 millions** d'habitants. Il en existe plus d'une trentaine dans le monde.

## 2. Paris, une métropole d'un pays développé
- La ville de Paris compte environ **2,1 millions** d'habitants, mais son **aire d'attraction** (Paris et toutes les communes d'où beaucoup d'habitants viennent y travailler chaque jour) en compte environ **13 millions** (INSEE).
- C'est la **capitale** de la France (Élysée, ministères, Parlement) et une **ville mondiale** : quartier d'affaires de **La Défense**, sièges de grandes entreprises, aéroport de **Roissy-Charles-de-Gaulle**, musées (le Louvre), tourisme.
- Chaque jour, des centaines de milliers de **navetteurs** (ou **migrants pendulaires**) font l'aller-retour entre leur domicile en banlieue et leur travail : transports saturés, embouteillages.
- Des problèmes : logements chers, pollution, inégalités entre quartiers riches et quartiers pauvres.

## 3. Mumbai, une métropole d'un pays émergent
- **Mumbai** (Bombay), sur la côte ouest de l'**Inde**, compte plus de **20 millions** d'habitants dans son agglomération (estimation de l'ONU). C'est une **mégapole** qui grandit très vite : chaque année arrivent des **migrants** venus des campagnes indiennes.
- C'est la **capitale économique** de l'Inde : la **Bourse**, de grandes entreprises, un très grand port, et le cinéma de **Bollywood**.
- De très fortes **inégalités** : à côté de quartiers d'affaires et de tours de luxe se trouvent des **bidonvilles** (quartiers de maisons construites avec des matériaux de récupération, souvent sans eau courante ni égouts). Le plus célèbre, **Dharavi**, abriterait près d'un million d'habitants sur environ 2 km² (estimations).
- Des trains de banlieue surchargés transportent plusieurs millions de voyageurs par jour.

## 4. Des habitants qui pratiquent la métropole différemment
- **Résidents** (qui y habitent), **navetteurs** (qui viennent y travailler), **touristes**, **usagers occasionnels** (qui viennent faire des achats, se soigner, voir un spectacle) : chacun utilise la ville à sa façon et contribue à la façonner.

| | Paris | Mumbai |
|---|---|---|
| Pays | développé (France) | émergent (Inde) |
| Population | environ 13 millions (aire d'attraction) | plus de 20 millions (agglomération) |
| Points communs | capitale économique, quartier d'affaires (La Défense), aéroport mondial, navetteurs, inégalités | capitale économique, quartiers d'affaires, Bourse, grand port, navetteurs, inégalités |
| Différences | croissance lente, peu de bidonvilles | croissance rapide, grands bidonvilles |

>! **Méthode – calculer une densité** : densité = nombre d'habitants ÷ superficie (en km²). Exemple : la ville de Paris a environ 2,1 millions d'habitants sur environ 105 km² : 2 100 000 ÷ 105 = **20 000 habitants par km²** environ. C'est l'une des villes les plus denses d'Europe.

> **À retenir** :
> - Une **métropole** concentre population, richesses et pouvoirs et rayonne sur un vaste territoire. Plus de la moitié de l'humanité vit en ville.
> - Elle est faite de plusieurs espaces : centre, quartier d'affaires, banlieues, périphérie (**périurbanisation**).
> - Paris (pays développé) et Mumbai (pays émergent) ont des points communs (fonctions, navetteurs, inégalités) et des différences (croissance, bidonvilles).
> - Vocabulaire : métropole, mégapole, banlieue, périurbanisation, quartier d'affaires, navetteur (migrant pendulaire), bidonville, densité.
`,
      exercices: [
        { type: "qcm", question: "Qu'est-ce qu'une métropole ?", choix: ["Une très grande ville qui concentre habitants, richesses et pouvoirs", "Une petite ville de campagne qui vit surtout du commerce local", "Un quartier pauvre construit avec des matériaux de récupération", "Un village de montagne isolé, loin des grandes routes"], reponse: 0, explication: "La **métropole** concentre habitants, richesses et pouvoirs, et **rayonne** sur un vaste territoire. Le quartier de maisons de récupération est un **bidonville**." },
        { type: "saisie", question: "Comment appelle-t-on une ville de plus de 10 millions d'habitants ?", reponses: ["mégapole", "une mégapole"], explication: "Une **mégapole** dépasse 10 millions d'habitants (Mumbai, Tokyo, Lagos…). Attention à ne pas confondre avec une *mégalopole*, qui est autre chose : un long chapelet de grandes villes reliées entre elles (de Boston à Washington, par exemple)." },
        { type: "vf", question: "Aujourd'hui, plus de la moitié de l'humanité vit en ville.", reponse: true, explication: "Selon l'ONU, les citadins sont majoritaires depuis 2007-2008, et leur part continue d'augmenter." },
        { type: "qcm", question: "Comment appelle-t-on une personne qui fait chaque jour l'aller-retour entre son domicile en banlieue et son travail en ville ?", choix: ["Un touriste", "Un navetteur", "Un résident", "Un migrant international"], reponse: 1, explication: "Le **navetteur** (ou **migrant pendulaire**) fait la navette chaque jour. Le touriste vient pour ses loisirs, quelques jours." },
        { type: "saisie", question: "Comment appelle-t-on le quartier d'affaires de la métropole parisienne, avec ses grandes tours de bureaux ?", reponses: ["La Défense", "Défense", "quartier de La Défense"], explication: "**La Défense**, à l'ouest de Paris, est l'un des plus grands quartiers d'affaires d'Europe." },
        { type: "qcm", question: "Quelle différence principale existe entre Paris et Mumbai ?", choix: ["Seule Paris a des navetteurs", "Seule Paris est une métropole", "Seule Mumbai a des bidonvilles immenses et une croissance très rapide", "Mumbai n'a pas de quartier d'affaires"], reponse: 2, explication: "Les deux sont des métropoles avec navetteurs et quartiers d'affaires. Mais Mumbai, métropole d'un pays **émergent**, grandit très vite et compte d'immenses **bidonvilles** comme Dharavi." },
        { type: "saisie", question: "Une ville fictive compte 600 000 habitants sur 50 km². Quelle est sa densité, en habitants par km² ? (réponds par un nombre)", reponses: ["12000", "12 000", "12 000 hab/km²", "12 000 hab./km²", "12000 hab/km2", "12 000 hab/km2", "douze mille"], explication: "Densité = habitants ÷ superficie = 600 000 ÷ 50 = **12 000 habitants par km²**." },
        { type: "vf", question: "La périurbanisation est l'étalement de la ville sur les campagnes qui l'entourent.", reponse: true, explication: "Des habitants s'installent dans des lotissements à la périphérie, souvent pour avoir une maison et un jardin moins chers, et vont travailler en ville." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : à partir des exemples de Paris et de Mumbai, montre ce qu'est une métropole et explique les points communs et les différences entre une métropole d'un pays développé et une métropole d'un pays émergent.", corrige: `**Introduction** : une **métropole** est une très grande ville qui concentre la population, les richesses et les pouvoirs, et qui rayonne sur un vaste territoire. Comparons **Paris** (France, pays développé) et **Mumbai** (Inde, pays émergent).

**1. Des points communs**
- Ce sont deux très grandes villes : environ 13 millions d'habitants dans l'aire d'attraction de Paris, plus de 20 millions dans l'agglomération de Mumbai.
- Elles ont des **fonctions** économiques (La Défense à Paris, la Bourse à Mumbai), culturelles (musées parisiens, cinéma de Bollywood) et sont reliées au monde (aéroport de Roissy, port de Mumbai).
- Elles sont formées de plusieurs espaces (centre, quartier d'affaires, banlieues) et des millions de **navetteurs** y circulent chaque jour dans des transports saturés.
- On y trouve des **inégalités** entre quartiers riches et pauvres.

**2. Des différences**
- Mumbai grandit **très vite**, car des migrants arrivent des campagnes indiennes ; la croissance de Paris est lente.
- À Mumbai, une grande partie des habitants vit dans des **bidonvilles**, comme Dharavi, sans eau courante ni égouts. À Paris, les problèmes sont surtout le prix des logements et la pollution.

**Conclusion** : toutes les métropoles concentrent les richesses et attirent les habitants, mais les inégalités sont beaucoup plus fortes dans les métropoles des pays émergents.` },
      ],
    },
    {
      id: "ville-de-demain",
      titre: "La ville de demain",
      theme: "Géographie – Habiter une métropole",
      cours: `
## Introduction
Les villes concentrent de plus en plus d'habitants. Elles consomment beaucoup d'**énergie**, d'**eau**, de **terres**, et produisent pollution et déchets. Comment imaginer une ville où l'on vivra mieux demain ? On parle de **ville durable** : c'est faire de la **prospective** (imaginer l'avenir pour le préparer).

## 1. Les défis des villes d'aujourd'hui
- **Se déplacer** : embouteillages, transports en commun saturés, pollution de l'air due aux voitures.
- **Se loger** : logements chers, quartiers pauvres, étalement urbain qui grignote les terres agricoles.
- **S'approvisionner** : nourrir des millions d'habitants, leur fournir de l'eau et de l'énergie, gérer les **déchets**.
- **Le climat** : en été, la ville est plus chaude que la campagne autour d'elle (les **îlots de chaleur**), car le béton et le goudron stockent la chaleur.
- **Vivre ensemble** : inégalités entre quartiers, manque d'espaces verts et de lieux de rencontre.

## 2. Les solutions pour une ville durable
Le **développement durable** cherche à répondre aux besoins des habitants d'aujourd'hui sans compromettre ceux des générations futures. Il a trois piliers : **environnemental**, **économique** et **social**.

| Défi | Solutions possibles |
|---|---|
| se déplacer | tramways, métros, bus électriques, pistes cyclables, rues piétonnes (**mobilités douces**) |
| se loger | construire en hauteur plutôt que s'étaler, rénover les logements, mélanger logements sociaux et privés |
| s'approvisionner | panneaux solaires, toits végétalisés, jardins partagés, agriculture urbaine, **tri** et **recyclage** des déchets |
| le climat | planter des arbres, créer des parcs, utiliser des revêtements clairs |
| vivre ensemble | espaces publics, équipements de quartier, participation des habitants aux décisions |

## 3. Des exemples réels
- Un **écoquartier** est un quartier conçu pour respecter l'environnement : bâtiments économes en énergie, place réduite pour la voiture, espaces verts, gestion de l'eau de pluie. Exemples : le quartier **Vauban** à **Fribourg-en-Brisgau** (Allemagne), le quartier **Clichy-Batignolles** à Paris.
- Dans la métropole parisienne, le **Grand Paris Express** (nouvelles lignes de métro automatiques autour de Paris, mises en service progressivement depuis 2024 et jusqu'au début des années 2030) doit faciliter les déplacements de banlieue à banlieue sans passer par le centre.
- De nombreuses villes d'Europe (Londres, Madrid, Milan…) créent des **zones à faibles émissions** où les véhicules les plus polluants sont interdits.

>! **Méthode – imaginer la ville du futur** (exercice de prospective) : 1. Pars d'un **problème réel** (par exemple les embouteillages). 2. Propose une **solution** précise et réaliste (une ligne de tramway). 3. Explique ses **avantages** pour l'environnement, l'économie et les habitants. 4. Note ses **limites** (coût, travaux, acceptation par les habitants).

> **À retenir** :
> - Les villes font face à de grands défis : déplacements, logement, approvisionnement, déchets, chaleur, inégalités.
> - La **ville durable** cherche des solutions respectueuses de l'environnement, économiques et justes : mobilités douces, écoquartiers, végétalisation, recyclage.
> - Exemples : écoquartier Vauban à Fribourg, Grand Paris Express.
> - Vocabulaire : ville durable, développement durable, écoquartier, mobilité douce, îlot de chaleur, prospective, étalement urbain.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on un quartier conçu pour respecter l'environnement (bâtiments économes, peu de voitures, espaces verts) ?", reponses: ["écoquartier", "un écoquartier", "éco-quartier", "écoquartiers", "des écoquartiers"], explication: "Un **écoquartier**, comme Vauban à Fribourg-en-Brisgau ou Clichy-Batignolles à Paris." },
        { type: "qcm", question: "Lequel de ces moyens de transport est une mobilité douce ?", choix: ["La voiture", "L'avion", "Le scooter à essence", "Le vélo"], reponse: 3, explication: "Le **vélo** (comme la marche) est une **mobilité douce** : il ne pollue pas et ne fait pas de bruit." },
        { type: "vf", question: "Un îlot de chaleur est un quartier de ville plus chaud que la campagne environnante, à cause du béton et du goudron.", reponse: true, explication: "Le béton et le goudron stockent la chaleur le jour et la rendent la nuit. Planter des arbres et créer des parcs aide à rafraîchir la ville." },
        { type: "qcm", question: "Quels sont les trois piliers du développement durable ?", choix: ["Environnemental, économique, social", "Politique, militaire, religieux", "Urbain, rural, littoral", "Ancien, moderne, futur"], reponse: 0, explication: "Le développement durable concilie **l'environnement**, **l'économie** et le **social** (la justice entre les habitants)." },
        { type: "vf", question: "Pour limiter l'étalement urbain, construire de nouveaux lotissements loin de la ville est une bonne solution.", reponse: false, explication: "C'est l'inverse : les lotissements lointains **augmentent** l'étalement urbain, consomment des terres agricoles et obligent à prendre la voiture. On préfère construire dans la ville existante, parfois en hauteur." },
        { type: "qcm", question: "Quel est le but principal du Grand Paris Express ?", choix: ["Relier Paris à Londres", "Faciliter les déplacements de banlieue à banlieue sans passer par le centre", "Construire des autoroutes", "Remplacer la tour Eiffel"], reponse: 1, explication: "Ses nouvelles lignes de métro automatiques relient les banlieues entre elles (la ligne 15 formera une boucle autour de Paris) : on n'est plus obligé de passer par le centre." },
        { type: "saisie", question: "Comment appelle-t-on la démarche qui consiste à imaginer l'avenir d'un territoire pour mieux le préparer ?", reponses: ["prospective", "la prospective", "prospective territoriale"], explication: "La **prospective** : on part des problèmes d'aujourd'hui pour imaginer des solutions pour demain." },
        { type: "qcm", question: "Quelle solution aide à la fois à gérer les déchets et à économiser les ressources ?", choix: ["Brûler tous les déchets en plein air", "Jeter les déchets dans la mer", "Le tri et le recyclage", "Construire plus de parkings"], reponse: 2, explication: "Le **tri** permet de **recycler** le verre, le papier, le plastique : on réutilise la matière au lieu d'en extraire de nouvelle." },
        { type: "redaction", question: "**Exercice de prospective** : tu es maire d'une grande ville en 2050. Choisis deux problèmes de ta ville (déplacements, logement, chaleur, déchets…) et propose pour chacun une solution précise. Explique ses avantages et une limite.", corrige: `**Exemple de réponse attendue**

**Problème 1 – Les embouteillages et la pollution de l'air**
- *Solution* : créer une ligne de **tramway** et un réseau de **pistes cyclables** sécurisées, et rendre le centre-ville **piéton**.
- *Avantages* : moins de pollution et de bruit (environnement), des déplacements plus rapides pour aller travailler (économie), un transport bon marché accessible à tous (social).
- *Limite* : les travaux coûtent cher et gênent les habitants pendant plusieurs années.

**Problème 2 – La chaleur en été (îlots de chaleur)**
- *Solution* : planter des **arbres** dans les rues, créer des **parcs** et **végétaliser** les toits des écoles et des immeubles.
- *Avantages* : la ville est plus fraîche, l'eau de pluie est mieux absorbée, la biodiversité revient, les habitants ont des lieux pour se rencontrer.
- *Limite* : les arbres mettent des années à grandir et il faut de la place.

**Conclusion** : une ville **durable** respecte l'environnement, reste dynamique et permet à tous ses habitants de bien vivre ensemble. Les habitants doivent être associés aux décisions.

*(D'autres problèmes et solutions sont possibles : écoquartiers, tri et recyclage, jardins partagés, logements rénovés…)*` },
      ],
    },
    {
      id: "espaces-contraintes-biodiversite",
      titre: "Habiter un espace à fortes contraintes naturelles ou de grande biodiversité",
      theme: "Géographie – Habiter un espace de faible densité",
      cours: `
## Introduction
Certains espaces sont **peu peuplés** : on dit qu'ils sont de **faible densité**. Souvent, la nature y impose des **contraintes** fortes à l'installation humaine : le froid, la chaleur et la sécheresse, la forêt, l'altitude. Certains abritent aussi une **biodiversité** exceptionnelle. Comment les humains habitent-ils ces espaces ?

## 1. Des contraintes naturelles fortes
- Une **contrainte naturelle** est un élément du milieu qui rend la vie humaine difficile.
- **Les déserts chauds** (le **Sahara**, plus grand désert chaud du monde, environ 9 millions de km²) : chaleur, manque d'eau.
- **Les déserts froids** (l'**Arctique**, la Sibérie) : froid extrême, nuit polaire en hiver.
- **Les hautes montagnes** (Himalaya, Andes, Alpes) : altitude, pentes, froid, isolement.
- **Les forêts équatoriales** (Amazonie) : forêt dense, chaleur humide, difficulté de circuler.

## 2. Étude de cas : l'Amazonie, un espace de grande biodiversité
- L'**Amazonie** est la plus grande forêt tropicale du monde (environ **5,5 millions de km²**), partagée entre **neuf pays** : surtout le **Brésil**, mais aussi le Pérou, la Colombie… et la **France**, avec la **Guyane**. Elle est traversée par l'**Amazone**, le fleuve au plus grand débit du monde.
- La **biodiversité** est la diversité des êtres vivants (plantes, animaux, champignons…). L'Amazonie abrite environ **10 %** des espèces connues sur Terre (estimation souvent citée par les scientifiques et le WWF).
- **Qui y habite ?** Des **peuples autochtones** (amérindiens) qui vivent depuis des millénaires de la chasse, de la pêche, de la cueillette et de petites cultures, en respectant la forêt. Mais aussi des **villes** comme **Manaus** (environ 2 millions d'habitants au Brésil), des orpailleurs (chercheurs d'or), des éleveurs et des agriculteurs venus d'ailleurs.
- **Les menaces** : la **déforestation** (pour l'élevage de bovins, la culture du soja, les routes, les mines). Près d'un cinquième de la forêt amazonienne a déjà disparu (estimations). L'orpaillage illégal pollue les rivières au **mercure**.
- **Protéger** : création de **réserves** et de **parcs nationaux**, comme le **Parc amazonien de Guyane** (créé en **2007**, le plus grand parc national de France), droits des peuples autochtones, surveillance par satellite.

## 3. Une autre façon de s'adapter : vivre dans le Sahara
- Les **Touaregs**, éleveurs **nomades**, se déplacent avec leurs troupeaux (dromadaires, chèvres) à la recherche de pâturages et de points d'eau.
- Dans les **oasis**, grâce à l'eau des nappes souterraines, des paysans sédentaires cultivent des **palmiers-dattiers** et des légumes à leur ombre.
- Aujourd'hui, beaucoup de nomades se sédentarisent ; le tourisme et l'exploitation du pétrole ou de l'uranium transforment certaines régions.

>! **Les représentations** : on imagine souvent ces espaces comme « vides », « sauvages » ou « hostiles » (l'« enfer vert », le « désert mort »). En réalité, ils sont habités, parcourus et exploités depuis longtemps. Leurs habitants connaissent très bien leur milieu.

> **À retenir** :
> - Les espaces de **faible densité** sont peu peuplés, souvent à cause de **contraintes naturelles** : désert, froid, altitude, forêt dense.
> - L'**Amazonie** est un espace de très grande **biodiversité**, habité par des peuples autochtones et des villes comme Manaus, mais menacé par la **déforestation**.
> - Les sociétés **s'adaptent** (nomadisme des Touaregs, oasis, savoirs des peuples autochtones) et cherchent à **protéger** ces milieux (parcs nationaux).
> - Vocabulaire : faible densité, contrainte naturelle, biodiversité, déforestation, peuple autochtone, nomade, oasis, parc national.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on la diversité des êtres vivants (plantes, animaux…) dans un milieu ?", reponses: ["biodiversité", "la biodiversité"], explication: "La **biodiversité** : l'Amazonie en abrite une part exceptionnelle (environ 10 % des espèces connues)." },
        { type: "qcm", question: "Quelle est la plus grande forêt tropicale du monde ?", choix: ["La forêt des Landes", "La forêt de Sibérie", "La forêt du bassin du Congo", "L'Amazonie"], reponse: 3, explication: "L'**Amazonie** couvre environ 5,5 millions de km², surtout au Brésil. La forêt du bassin du Congo, en Afrique, est la deuxième ; la forêt de Sibérie n'est pas tropicale (c'est la taïga, une forêt froide)." },
        { type: "vf", question: "L'Amazonie est un espace totalement vide d'habitants.", reponse: false, explication: "Elle est **peu dense**, mais habitée : peuples autochtones, villes comme Manaus (environ 2 millions d'habitants), orpailleurs, éleveurs, agriculteurs." },
        { type: "qcm", question: "Quelle est la principale menace pour la forêt amazonienne ?", choix: ["La déforestation pour l'élevage, le soja et les mines", "La montée de la neige", "Les tremblements de terre", "La construction de stations de ski"], reponse: 0, explication: "La **déforestation** : on coupe et on brûle la forêt pour créer des pâturages pour les bovins, des champs de soja, des routes, des mines." },
        { type: "saisie", question: "Dans le désert, comment appelle-t-on un lieu où l'eau permet la culture, par exemple des palmiers-dattiers ?", reponses: ["oasis", "une oasis"], explication: "Une **oasis** est alimentée par une nappe d'eau souterraine ou une source." },
        { type: "qcm", question: "Lequel de ces espaces présente une contrainte de froid extrême ?", choix: ["Le Sahara", "L'Arctique", "L'Amazonie", "La Côte d'Azur"], reponse: 1, explication: "L'**Arctique** est un désert froid (nuit polaire, glace). Le Sahara est un désert chaud, l'Amazonie une forêt équatoriale chaude et humide." },
        { type: "vf", question: "Le Parc amazonien de Guyane, créé en 2007, est le plus grand parc national de France.", reponse: true, explication: "Il protège une immense partie de la forêt guyanaise et les modes de vie des peuples qui y habitent." },
        { type: "saisie", question: "Comment s'appellent les éleveurs nomades du Sahara qui se déplacent avec leurs dromadaires ?", reponses: ["Touaregs", "les Touaregs", "Touareg", "Touaregs nomades"], explication: "Les **Touaregs** (on écrit aussi « les Touareg ») vivent traditionnellement de l'élevage nomade dans le Sahara. Beaucoup se sédentarisent aujourd'hui." },
        { type: "redaction", question: "**Paragraphe argumenté** : montre comment les humains habitent l'Amazonie, un espace de faible densité et de grande biodiversité, et quels problèmes cela pose.", corrige: `**Un espace de faible densité et de grande biodiversité** : l'**Amazonie** est la plus grande forêt tropicale du monde (environ 5,5 millions de km²), partagée entre neuf pays, surtout le Brésil, dont la France avec la Guyane. Elle abrite environ 10 % des espèces connues. La forêt dense, la chaleur humide et les difficultés de circulation en font un espace **peu peuplé**.

**Des habitants variés** : des **peuples autochtones** y vivent depuis des millénaires de chasse, de pêche, de cueillette et de petites cultures, en respectant la forêt. Mais il y a aussi de grandes **villes**, comme **Manaus**, des orpailleurs, des éleveurs et des agriculteurs venus d'autres régions.

**Des problèmes** : la **déforestation** progresse pour l'élevage de bovins, la culture du soja, les routes et les mines : près d'un cinquième de la forêt a déjà disparu. L'orpaillage illégal pollue les rivières au mercure. La biodiversité et le mode de vie des peuples autochtones sont menacés.

**Des solutions** : on crée des **parcs nationaux** et des réserves (Parc amazonien de Guyane, 2007), on reconnaît les droits des peuples autochtones et on surveille la forêt par satellite.` },
      ],
    },
    {
      id: "faible-densite-agricole",
      titre: "Habiter un espace de faible densité à vocation agricole",
      theme: "Géographie – Habiter un espace de faible densité",
      cours: `
## Introduction
Les **campagnes** (ou espaces **ruraux**) sont souvent des espaces de **faible densité** où domine l'**agriculture**. Mais toutes les campagnes ne se ressemblent pas : certaines sont **riches** et liées aux villes, d'autres perdent leurs habitants. Et entre les pays riches (qu'on appelle les « Nords », car la plupart sont dans l'hémisphère nord) et les pays pauvres (les « Suds »), l'agriculture est très différente.

## 1. Une campagne riche et dynamique : la Beauce
- La **Beauce**, au sud-ouest de Paris, est une grande plaine aux sols très fertiles : on l'appelle le « **grenier à blé** » de la France.
- Les **exploitations** (fermes) sont **grandes** et très **mécanisées** (tracteurs, moissonneuses-batteuses) : peu d'agriculteurs cultivent de grandes surfaces de **céréales** (blé, maïs, orge), de colza ou de betteraves. C'est une **agriculture productiviste** (qui cherche à produire le plus possible), qui utilise des engrais et des pesticides.
- La densité est faible, mais la Beauce est **intégrée aux dynamiques urbaines** : proche de Paris, elle voit s'installer des **périurbains** qui travaillent en ville. Ses céréales sont **exportées** dans le monde entier.

## 2. Des campagnes en déprise
- D'autres campagnes françaises **perdent des habitants** : c'est la **déprise rurale** (ou **exode rural** quand les habitants partent vers les villes).
- Exemple : la **Creuse**, dans le Massif central, compte environ **20 habitants par km²** (INSEE), contre plus de 100 en moyenne en France. Les jeunes partent, la population vieillit, des écoles, des commerces et des services ferment.
- Une bande de territoires peu denses traverse la France du nord-est au sud-ouest (des Ardennes aux Landes) : on l'appelle parfois la « **diagonale des faibles densités** ».
- Des **solutions** : développer le tourisme vert, les produits de qualité (labels, AOP : appellation d'origine protégée, comme pour certains fromages), le télétravail grâce à Internet, les maisons de santé ; accueillir de nouveaux habitants.
- En France, il y avait environ **389 000 exploitations agricoles en 2020**, d'une surface moyenne de **69 hectares** (recensement agricole, ministère de l'Agriculture). Leur nombre diminue et leur taille augmente.

## 3. Comparer avec les « Suds » : un village du Sahel
- Au **Sahel** (au sud du Sahara : Mali, Niger, Burkina Faso…), beaucoup de paysans pratiquent une **agriculture vivrière** : ils cultivent d'abord pour **nourrir leur famille** (mil, sorgho, arachide), sur de petites parcelles, avec des outils simples (houe, traction animale).
- Les contraintes : **saisons sèches** longues, pluies irrégulières, sols fragiles, manque d'argent pour acheter des machines ou des engrais.
- La population rurale reste nombreuse et augmente ; beaucoup de jeunes partent vers les villes ou à l'étranger.

| | Beauce (Nord) | Village du Sahel (Sud) |
|---|---|---|
| Taille des exploitations | grandes | petites |
| Techniques | très mécanisées | outils simples, travail manuel |
| Production | céréales pour la vente et l'exportation | cultures vivrières pour la famille |
| Lien avec les villes | fort (périurbanisation, marchés mondiaux) | plus faible, départs vers les villes |

>! **Méthode – lire un paysage** : sur une photographie de paysage, distingue le **premier plan** (en bas, le plus proche), le **second plan** et l'**arrière-plan** (au loin). Pour chacun, décris les éléments **naturels** (relief, végétation, eau) et **humains** (champs, bâtiments, routes). Puis explique : quelles activités ? quelle densité ?

> **À retenir** :
> - Les espaces agricoles de faible densité sont variés : des campagnes **riches et productives**, intégrées aux villes (la **Beauce**), et des campagnes **en déprise** qui perdent leurs habitants (la **Creuse**).
> - Dans les « Nords », l'agriculture est mécanisée et productiviste ; dans les « Suds », elle est souvent **vivrière**, avec des contraintes fortes (Sahel).
> - Vocabulaire : espace rural, exploitation agricole, agriculture productiviste, agriculture vivrière, déprise rurale, exode rural, mécanisation.
`,
      exercices: [
        { type: "qcm", question: "Pourquoi appelle-t-on la Beauce le « grenier à blé » de la France ?", choix: ["Parce qu'on y stocke le blé importé", "Parce qu'elle est très peuplée", "Parce que ses sols fertiles produisent beaucoup de céréales", "Parce qu'on y élève des moutons"], reponse: 2, explication: "La **Beauce** est une plaine aux sols très fertiles où de grandes exploitations mécanisées produisent beaucoup de **céréales**." },
        { type: "saisie", question: "Comment appelle-t-on une agriculture dont les produits servent d'abord à nourrir la famille du paysan ?", reponses: ["vivrière", "agriculture vivrière", "l'agriculture vivrière", "agriculture de subsistance", "une agriculture de subsistance", "une agriculture vivrière"], explication: "L'agriculture **vivrière** est très répandue au Sahel. L'agriculture de la Beauce, elle, produit pour la vente et l'exportation." },
        { type: "vf", question: "Toutes les campagnes françaises perdent des habitants.", reponse: false, explication: "Certaines campagnes, proches des villes, **gagnent** des habitants (périurbanisation, comme en Beauce). D'autres, comme la Creuse, sont **en déprise**." },
        { type: "qcm", question: "Qu'est-ce que l'exode rural ?", choix: ["Le départ des habitants des villes vers la campagne", "L'arrivée de touristes à la campagne", "La construction de fermes", "Le départ des habitants des campagnes vers les villes"], reponse: 3, explication: "L'**exode rural** est le départ des ruraux vers les villes, à la recherche d'emplois et de services." },
        { type: "saisie", question: "Un département fictif compte 120 000 habitants pour 6 000 km². Quelle est sa densité en habitants par km² ? (réponds par un nombre)", reponses: ["20", "20 hab/km²", "20 hab./km²", "20 hab/km2", "vingt"], explication: "120 000 ÷ 6 000 = **20 habitants par km²**. C'est une faible densité (la moyenne française dépasse 100)." },
        { type: "qcm", question: "Quelle caractéristique correspond à l'agriculture d'un village du Sahel ?", choix: ["Petites parcelles, outils simples, cultures de mil et de sorgho", "Grandes exploitations très mécanisées", "Exportation de blé dans le monde entier", "Serres chauffées et robots"], reponse: 0, explication: "Au **Sahel**, l'agriculture est souvent vivrière : petites parcelles, houe ou traction animale, mil et sorgho, malgré une longue saison sèche." },
        { type: "vf", question: "En France, le nombre d'exploitations agricoles diminue, mais leur taille moyenne augmente.", reponse: true, explication: "Il y avait environ 389 000 exploitations en 2020 (surface moyenne 69 hectares) ; elles étaient bien plus nombreuses et plus petites il y a cinquante ans." },
        { type: "qcm", question: "Laquelle de ces solutions peut aider une campagne en déprise ?", choix: ["Fermer l'école du village", "Développer le tourisme vert", "Supprimer la ligne de bus", "Fermer le bureau de poste"], reponse: 1, explication: "Le **tourisme vert**, les produits de qualité (AOP, labels), le télétravail ou les maisons de santé peuvent attirer ou retenir des habitants." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : compare deux façons d'habiter un espace de faible densité à vocation agricole, l'une dans un pays développé, l'autre dans un pays en développement.", corrige: `**Introduction** : les campagnes sont souvent des espaces de **faible densité** où domine l'agriculture. Comparons la **Beauce** en France et un **village du Sahel** en Afrique.

**1. La Beauce, une campagne riche et productive**
- C'est une grande plaine aux sols fertiles, le « grenier à blé » de la France.
- Les exploitations sont **grandes** et **mécanisées** : peu d'agriculteurs produisent beaucoup de céréales, vendues en France et **exportées**. C'est une agriculture **productiviste**.
- Proche de Paris, elle accueille des **périurbains** : elle est liée à la ville.

**2. Un village du Sahel, une agriculture vivrière**
- Les paysans cultivent de **petites parcelles** de mil et de sorgho, avec des **outils simples**, pour **nourrir leur famille** : c'est une agriculture **vivrière**.
- Les **contraintes** sont fortes : longue saison sèche, pluies irrégulières, manque d'argent pour les machines et les engrais.
- La population rurale est nombreuse, mais beaucoup de jeunes partent vers les villes.

**Conclusion** : les deux espaces sont peu denses et agricoles, mais les habitants n'ont pas les mêmes moyens. Dans les deux cas, ces espaces évoluent : en France, certaines campagnes se vident (la Creuse) quand d'autres accueillent des citadins.` },
      ],
    },
    {
      id: "habiter-littoraux",
      titre: "Habiter les littoraux : littoral industrialo-portuaire, littoral touristique",
      theme: "Géographie – Habiter les littoraux",
      cours: `
## Introduction
Un **littoral** est l'espace de contact entre la terre et la mer. Environ **40 %** de la population mondiale vit à moins de 100 km d'une côte (ONU). Les littoraux sont très **aménagés** pour deux grandes activités : l'**industrie** et le **commerce** autour des ports, et le **tourisme**. Comment les humains habitent-ils ces espaces attractifs mais fragiles ?

## 1. Un littoral industrialo-portuaire : Rotterdam
- **Plus de 80 %** du commerce mondial de marchandises (en volume) voyage par la mer, sur d'immenses navires (estimation de l'ONU-CNUCED) : **porte-conteneurs**, pétroliers et vraquiers (navires qui transportent des marchandises en vrac, comme les céréales ou le charbon). C'est la **maritimisation** de l'économie.
- Un **conteneur** est une grande boîte métallique standardisée, facile à transférer d'un navire à un camion ou un train. On compte les conteneurs en **EVP** (« équivalent vingt pieds ») : un EVP correspond à un conteneur standard d'environ 6 mètres de long.
- **Rotterdam** (Pays-Bas), à l'embouchure du Rhin, est le **premier port d'Europe** : environ **430 millions de tonnes** de marchandises par an (428 millions en 2025, selon l'autorité du port de Rotterdam). Pour accueillir les plus gros navires, le port s'est étendu vers la mer, sur des terres gagnées sur la mer du Nord (**Maasvlakte 2**, ouverte en 2013).
- Autour des quais se trouve une **zone industrialo-portuaire** (**ZIP**) : raffineries de pétrole, usines chimiques, entrepôts. Les marchandises repartent vers l'intérieur de l'Europe par le Rhin, le rail, la route et les oléoducs : c'est l'**arrière-pays** (ou *hinterland*).
- Dans le monde, les plus grands ports sont en **Asie** : **Shanghai** (Chine) est le premier port mondial pour les conteneurs (plus de 55 millions d'EVP en 2025, près de quatre fois plus que Rotterdam). En France, les grands ports sont **Marseille-Fos** et **Le Havre**.

## 2. Un littoral touristique : la côte méditerranéenne française
- Le **tourisme balnéaire** (lié à la mer et aux plages) attire des millions de vacanciers chaque été. La France est l'un des pays les plus visités au monde.
- La **Côte d'Azur** (Nice, Cannes…) est touristique depuis le XIXe siècle. Sur le littoral du Languedoc, l'État a créé dans les années **1960** des **stations balnéaires** neuves, comme **La Grande-Motte**, avec ses immeubles en forme de pyramide.
- Le tourisme apporte des **emplois** (hôtels, restaurants, commerces) et de l'argent. Mais il entraîne la **bétonisation** du littoral (immeubles, routes, ports de plaisance), des embouteillages, la hausse des prix des logements et une forte pression sur l'eau et les milieux naturels l'été. La population peut être multipliée en été, puis les stations se vident en hiver.

## 3. Des littoraux fragiles à protéger
- Les littoraux abritent une **faune** et une **flore** riches (dunes, marais, oiseaux migrateurs, herbiers de posidonies, des plantes sous-marines de Méditerranée).
- Ils sont **vulnérables** : **érosion** (la mer grignote la côte), **pollutions** (marées noires, déchets plastiques), **submersions** lors des tempêtes (la tempête **Xynthia** en 2010 a inondé des quartiers en Vendée), montée du niveau de la mer avec le **réchauffement climatique**. À **Soulac-sur-Mer** (Gironde), l'immeuble **Le Signal**, menacé par l'érosion de la dune, a été évacué en 2014 puis démoli.
- **Protéger** : en France, le **Conservatoire du littoral** (créé en **1975**) achète des terrains pour les protéger ; la **loi Littoral** (**1986**) limite les constructions près du rivage.

>! **Méthode – réaliser un croquis de littoral** : 1. Un **titre**. 2. Une **légende organisée** : (a) les activités industrialo-portuaires (surface grise pour la ZIP, point noir pour le port), (b) les activités touristiques (surface orange pour les stations, symbole pour les plages), (c) les espaces protégés (surface verte), (d) les flux (flèches pour les échanges). 3. Une **orientation** (le nord) et une **échelle**.

> **À retenir** :
> - Les **littoraux** attirent les populations et les activités : environ 40 % de l'humanité vit à moins de 100 km des côtes.
> - Littoral **industrialo-portuaire** : grands ports (Rotterdam, 1er port d'Europe ; Shanghai, 1er port mondial à conteneurs), **ZIP**, conteneurs : c'est la **maritimisation**.
> - Littoral **touristique** : stations balnéaires (Côte d'Azur, La Grande-Motte), emplois mais bétonisation.
> - Des espaces **fragiles** : érosion, pollutions, submersion. Protection : Conservatoire du littoral (1975), loi Littoral (1986).
> - Vocabulaire : littoral, port, conteneur, ZIP, arrière-pays, maritimisation, tourisme balnéaire, station balnéaire, érosion.
`,
      textes: {
        ports: `**Document : les trafics de quelques grands ports en 2025**

*Tableau 1 – Les plus grands ports à conteneurs du monde, et le premier d'Europe*

| Port | Pays | Conteneurs traités en 2025 (millions d'EVP) |
|---|---|---|
| Shanghai | Chine | 55,1 |
| Singapour | Singapour | 44,7 |
| Ningbo-Zhoushan | Chine | 43,9 |
| Rotterdam (1er port d'Europe) | Pays-Bas | 14,2 |

*Tableau 2 – Le trafic total de quelques ports européens (toutes marchandises)*

| Port | Pays | Marchandises traitées en 2025 (millions de tonnes) |
|---|---|---|
| Rotterdam | Pays-Bas | 428 |
| Anvers-Bruges | Belgique | 267 |
| Hambourg | Allemagne | 115 |
| HAROPA (Le Havre, Rouen, Paris) | France | 85 |
| Marseille-Fos | France | 74 |

*EVP : « équivalent vingt pieds », un conteneur standard d'environ 6 mètres de long. Sources : bilans annuels des autorités portuaires (port de Shanghai, autorité maritime de Singapour, port de Rotterdam, HAROPA Port, port de Marseille-Fos…) et presse maritime spécialisée, publiés début 2026 ; chiffres arrondis.*`,
      },
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on l'espace de contact entre la terre et la mer ?", reponses: ["littoral", "le littoral", "un littoral", "la côte", "côte", "les littoraux", "les côtes", "côtes"], explication: "Le **littoral** (ou la côte) : un espace très peuplé et très aménagé." },
        { type: "qcm", question: "Quel est le premier port d'Europe ?", choix: ["Marseille", "Venise", "Rotterdam", "Le Havre"], reponse: 2, explication: "**Rotterdam** (Pays-Bas) traite environ 430 millions de tonnes par an (428 millions en 2025). Marseille-Fos et Le Havre sont les grands ports français." },
        { type: "saisie", question: "Comment appelle-t-on la grande boîte métallique standardisée qui sert à transporter les marchandises sur les navires ?", reponses: ["conteneur", "un conteneur", "container", "les conteneurs", "conteneurs", "des conteneurs", "containers"], explication: "Le **conteneur** passe facilement du navire au camion ou au train : il a révolutionné le commerce maritime." },
        { type: "vf", question: "Le tourisme sur les littoraux n'a que des avantages.", reponse: false, explication: "Il apporte des **emplois** et de l'argent, mais aussi la **bétonisation**, des embouteillages, la hausse des prix des logements et une forte pression sur l'eau et la nature." },
        { type: "qcm", question: "Que signifie le sigle ZIP ?", choix: ["Zone d'intérêt patrimonial", "Zone interdite à la pêche", "Zone internationale de plaisance", "Zone industrialo-portuaire"], reponse: 3, explication: "La **zone industrialo-portuaire** regroupe, autour des quais, raffineries, usines chimiques et entrepôts." },
        { type: "qcm", question: "Quelle station balnéaire a été créée par l'État dans les années 1960 sur le littoral du Languedoc ?", choix: ["La Grande-Motte", "Nice", "Rotterdam", "Cannes"], reponse: 0, explication: "**La Grande-Motte**, célèbre pour ses immeubles en pyramide, a été construite dans le cadre de l'aménagement du littoral languedocien. Nice et Cannes sont touristiques depuis le XIXe siècle." },
        { type: "vf", question: "La loi Littoral de 1986 limite les constructions près du rivage en France.", reponse: true, explication: "La **loi Littoral** (1986) protège les rivages ; le **Conservatoire du littoral** (1975) achète des terrains pour les préserver." },
        { type: "saisie", question: "Comment appelle-t-on le recul de la côte grignotée par la mer ?", reponses: ["érosion", "l'érosion", "érosion littorale", "érosion côtière", "l'érosion littorale", "érosion marine", "l'érosion marine", "l'érosion côtière"], explication: "L'**érosion** : à Soulac-sur-Mer, l'immeuble Le Signal a dû être évacué en 2014 puis démoli." },
        { type: "qcm", question: "Quelle part du commerce mondial de marchandises (en volume) passe par la mer ?", choix: ["Environ 10 %", "Plus de 80 %", "Environ 30 %", "Environ 50 %"], reponse: 1, explication: "**Plus de 80 %** des marchandises (en volume) voyagent par la mer : c'est la **maritimisation** de l'économie." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : montre que les littoraux sont des espaces très aménagés pour des activités variées, mais aussi des espaces fragiles. Appuie-toi sur un exemple de littoral industrialo-portuaire et un exemple de littoral touristique.", corrige: `**Introduction** : les **littoraux** attirent les hommes et les activités : environ 40 % de l'humanité vit à moins de 100 km des côtes. Ils sont aménagés pour l'industrie, le commerce et le tourisme, mais ils sont fragiles.

**1. Un littoral industrialo-portuaire : Rotterdam**
- **Rotterdam** est le premier port d'Europe (environ 430 millions de tonnes par an). Les **porte-conteneurs** y apportent des marchandises du monde entier : c'est la **maritimisation**.
- Le port s'est étendu sur la mer (**Maasvlakte 2**). Autour des quais, la **ZIP** regroupe raffineries, usines chimiques et entrepôts. Les marchandises repartent vers l'**arrière-pays** européen par le Rhin, le rail et la route.

**2. Un littoral touristique : la côte méditerranéenne française**
- Les stations balnéaires (Côte d'Azur, **La Grande-Motte** créée dans les années 1960) attirent des millions de vacanciers chaque été. Le tourisme crée des **emplois**.
- Mais il entraîne la **bétonisation**, les embouteillages, la hausse des prix des logements et une forte pression sur l'eau.

**3. Des espaces fragiles**
- Les littoraux sont menacés par l'**érosion** (immeuble Le Signal à Soulac-sur-Mer), la **pollution** et la **submersion** (tempête Xynthia, 2010), aggravées par la montée du niveau de la mer.
- En France, le **Conservatoire du littoral** (1975) et la **loi Littoral** (1986) les protègent.

**Conclusion** : habiter un littoral, c'est profiter de ses atouts tout en le protégeant : il faut concilier développement et préservation.` },
        { type: "qcm", texte: "ports", question: "D'après le tableau 1, quel est le premier port à conteneurs du monde en 2025 ?", choix: ["Rotterdam", "Singapour", "Ningbo-Zhoushan", "Shanghai"], reponse: 3, explication: "**Shanghai** (Chine) a traité plus de 55 millions d'EVP en 2025 : c'est le premier port à conteneurs du monde depuis 2010. Rotterdam est seulement le premier port d'Europe." },
        { type: "vf", texte: "ports", question: "D'après le tableau 1, les trois plus grands ports à conteneurs du monde se trouvent en Asie.", reponse: true, explication: "Shanghai et Ningbo-Zhoushan sont en **Chine**, Singapour en Asie du Sud-Est. L'Asie est devenue le cœur du commerce maritime mondial : c'est là que sont fabriquées une grande partie des marchandises transportées en conteneurs." },
        { type: "saisie", texte: "ports", question: "D'après le tableau 1, combien de fois environ Shanghai traite-t-il plus de conteneurs que Rotterdam ? (arrondis à l'unité ; astuce : cherche combien de fois 14 « rentre » dans 55)", reponses: ["4", "environ 4", "quatre", "4 fois", "3,9", "3,88"], explication: "55,1 ÷ 14,2 ≈ 3,9, soit **environ 4 fois** plus. Le premier port d'Europe est loin derrière les grands ports asiatiques pour les conteneurs." },
        { type: "saisie", texte: "ports", question: "D'après le tableau 2, combien de millions de tonnes Rotterdam traite-t-il de plus que Marseille-Fos ? (réponds par un nombre)", reponses: ["354", "354 millions", "354 millions de tonnes", "354 Mt", "trois cent cinquante-quatre"], explication: "428 − 74 = **354 millions de tonnes** de plus. Rotterdam traite presque six fois plus de marchandises que Marseille-Fos." },
        { type: "qcm", texte: "ports", question: "Avec tes connaissances : pourquoi Rotterdam est-il le premier port d'Europe ?", choix: ["Parce que c'est le port d'Europe le plus proche de la Chine et des grands ports d'Asie", "Parce que c'est le seul port d'Europe capable d'accueillir des porte-conteneurs", "Parce qu'il est à l'embouchure du Rhin, relié à un vaste arrière-pays, et s'est agrandi sur la mer", "Parce que c'est le plus ancien port d'Europe, fondé par les Romains dans l'Antiquité"], reponse: 2, explication: "Rotterdam est à l'embouchure du **Rhin** : les marchandises repartent par le fleuve, le rail, la route et les oléoducs vers un **arrière-pays** (*hinterland*) très peuplé et riche (Pays-Bas, Allemagne…). Le port a gagné des terres sur la mer (**Maasvlakte 2**) pour accueillir les plus grands navires. Anvers, Hambourg ou Le Havre accueillent aussi des conteneurs." },
        { type: "vf", texte: "ports", question: "D'après le tableau 2, le trafic total de HAROPA (Le Havre, Rouen, Paris) est plus important que celui de Hambourg.", reponse: false, explication: "HAROPA traite environ **85** millions de tonnes, Hambourg environ **115** millions. Les ports français sont des ports importants, mais plus petits que les grands ports du nord de l'Europe (Rotterdam, Anvers-Bruges, Hambourg)." },
        { type: "redaction", texte: "ports", question: "**Analyse de document (niveau contrôle)** : 1. Présente le document. 2. Décris ce que montre le tableau 1, en citant deux chiffres. 3. Décris ce que montre le tableau 2 sur la place des ports français. 4. Explique, avec tes connaissances, pourquoi les grands ports sont des espaces très aménagés.", corrige: `**1. Présentation** : le document est formé de deux **tableaux statistiques** réalisés d'après les bilans des **autorités portuaires** publiés début 2026. Ils donnent les **trafics** de grands ports en **2025** : en conteneurs (en millions d'EVP) et en tonnes de marchandises.

**2. Le tableau 1** : les trois premiers ports à conteneurs du monde sont en **Asie** : **Shanghai** (55,1 millions d'EVP), Singapour (44,7) et Ningbo-Zhoushan (43,9). Le premier port d'Europe, **Rotterdam**, n'en traite que 14,2 millions, environ quatre fois moins que Shanghai. L'Asie est le cœur du commerce maritime mondial.

**3. Le tableau 2** : en Europe, **Rotterdam** domine nettement (428 millions de tonnes), devant Anvers-Bruges (267) et Hambourg (115) : ce sont les grands ports de la **mer du Nord**. Les ports français, **HAROPA** (85) et **Marseille-Fos** (74), sont importants mais beaucoup plus petits : Rotterdam traite environ cinq fois plus de marchandises que HAROPA.

**4. Des espaces très aménagés** : plus de 80 % du commerce mondial (en volume) passe par la mer : c'est la **maritimisation**. Pour accueillir des **porte-conteneurs** géants, les ports creusent des bassins profonds et gagnent des terres sur la mer (**Maasvlakte 2** à Rotterdam). Autour des quais, la **zone industrialo-portuaire** (ZIP) regroupe raffineries, usines et entrepôts. Les marchandises repartent vers l'**arrière-pays** par les fleuves (le Rhin), le rail, la route et les oléoducs.

**Conclusion** : les trafics portuaires montrent que le monde est relié par la mer. Les ports sont des **littoraux industrialo-portuaires** très aménagés, et les plus grands sont aujourd'hui en Asie.` },
      ],
    },
    {
      id: "monde-habite",
      titre: "Le monde habité",
      theme: "Géographie – Le monde habité",
      cours: `
## Introduction
Le **15 novembre 2022**, selon l'ONU, l'humanité a atteint **8 milliards** d'habitants. Mais ces habitants sont très **inégalement répartis** sur la Terre. Où vivent les femmes et les hommes ? Comment expliquer ces inégalités ? Et comment le peuplement évolue-t-il ?

## 1. Une population très inégalement répartie
- La **densité de population** est le nombre moyen d'habitants par km². En moyenne, elle est d'environ **60 habitants par km²** sur les terres émergées (hors Antarctique).
- Les **foyers de peuplement** sont les régions où la population est très nombreuse et dense. Les trois principaux :
  - l'**Asie de l'Est** (Chine, Japon, Corée) ;
  - l'**Asie du Sud** (Inde, Pakistan, Bangladesh) ;
  - l'**Europe**.
- Il existe aussi des foyers secondaires : le nord-est des **États-Unis**, le golfe de Guinée en **Afrique de l'Ouest** (Nigeria), la vallée du **Nil**, l'Indonésie (île de Java).
- L'**Asie** regroupe à elle seule environ **60 %** de la population mondiale. L'**Inde** est le pays le plus peuplé du monde depuis 2023 (plus de 1,4 milliard d'habitants), devant la **Chine**.
- À l'inverse, il existe de vastes **espaces peu peuplés** (ou « vides ») : les déserts chauds (Sahara) et froids (Arctique, Sibérie, Antarctique), les hautes montagnes, les forêts équatoriales (Amazonie).

## 2. Comment expliquer cette répartition ?
- **Des facteurs naturels** : on vit plus facilement dans les plaines, les vallées de fleuves, près des littoraux, sous des climats tempérés ou humides (pour l'agriculture). Les contraintes (froid, sécheresse, altitude) repoussent les humains.
- **Des facteurs historiques** : les grands foyers sont **anciens**. La Chine, l'Inde, la vallée du Nil sont densément peuplées depuis l'Antiquité grâce à l'agriculture (riz en Asie, blé en Europe) : c'est une **permanence** dans la longue durée (approche de **géohistoire**).
- **Des facteurs économiques** : aujourd'hui, les populations se concentrent là où il y a des **emplois** : dans les villes et sur les littoraux.
- Exemple : en **Égypte**, la très grande majorité de la population vit dans la vallée et le delta du **Nil**, sur une toute petite partie du territoire ; le reste est désert.

## 3. Les dynamiques du peuplement
- La population mondiale a beaucoup **augmenté** : environ 1 milliard vers **1800**, 2,5 milliards en **1950**, 8 milliards en **2022**. Cette croissance ralentit aujourd'hui.
- Selon les projections de l'ONU (2024), la population pourrait atteindre un maximum d'environ **10,3 milliards** vers le milieu des années 2080, puis diminuer légèrement.
- La croissance est aujourd'hui la plus forte en **Afrique** subsaharienne ; en Europe, au Japon ou en Chine, la population vieillit et commence à diminuer.
- Les **villes** grandissent partout : l'**urbanisation** et la **littoralisation** (concentration sur les côtes) sont des dynamiques majeures.

## 4. La variété des formes d'occupation de l'espace
- **Espaces urbains très denses** : métropoles et mégapoles (Tokyo, Mumbai, Lagos).
- **Campagnes très denses** : les rizières des deltas d'Asie (Bangladesh, plus de 1 100 habitants par km²).
- **Espaces peu denses** : campagnes de grandes exploitations, déserts, montagnes (le Canada a environ 4 habitants par km², la Mongolie environ 2).
- Ces formes posent des **contraintes** aux habitants : manque de place et de logements dans les espaces très denses ; isolement et éloignement des services dans les espaces vides.

| Pays | Population (environ) | Superficie (environ) | Densité (environ) |
|---|---|---|---|
| Bangladesh | 172 millions | 148 000 km² | plus de 1 100 hab./km² |
| France métropolitaine | 66 millions | 550 000 km² | environ 120 hab./km² |
| Canada | 40 millions | 10 millions de km² | 4 hab./km² |

*Sources : ONU, Banque mondiale, INSEE ; chiffres arrondis.*

>! **Méthode – lire une carte des densités** : la légende utilise des couleurs de plus en plus **foncées** pour les densités de plus en plus **fortes**. Repère d'abord les zones les plus foncées (les foyers de peuplement), puis les plus claires (les espaces peu peuplés), puis cherche des explications (relief, climat, fleuves, littoraux, histoire).

> **À retenir** :
> - Plus de **8 milliards** d'humains (2022), très inégalement répartis.
> - Trois grands **foyers de peuplement** : **Asie de l'Est**, **Asie du Sud**, **Europe**. L'Asie regroupe environ 60 % de l'humanité.
> - Des espaces **peu peuplés** : déserts chauds et froids, hautes montagnes, forêts équatoriales.
> - Explications : conditions **naturelles**, **histoire** (foyers anciens), **économie** (villes, littoraux).
> - Dynamiques : croissance qui ralentit, forte en Afrique ; **urbanisation** et **littoralisation**.
> - Vocabulaire : densité, foyer de peuplement, répartition, croissance démographique, urbanisation, littoralisation.
`,
      textes: {
        egypte: `**Document : l'Égypte, un pays peuplé le long d'un fleuve**

| Égypte | Chiffres (environ) |
|---|---|
| Population (2024) | 116 millions d'habitants |
| Superficie du pays | 1 000 000 km² |
| Part du territoire occupée par la vallée et le delta du Nil | 5 % |
| Part de la population qui vit dans la vallée et le delta du Nil | 95 % |

« En dehors de l'étroite vallée du Nil et de son delta, l'Égypte est presque entièrement couverte par le désert. Les villes, les villages et les champs irrigués se serrent le long du fleuve. »

*D'après l'ONU (World Population Prospects 2024) et la Banque mondiale ; chiffres arrondis.*`,
      },
      exercices: [
        { type: "qcm", question: "Quel continent regroupe environ 60 % de la population mondiale ?", choix: ["L'Afrique", "L'Europe", "L'Asie", "L'Amérique"], reponse: 2, explication: "L'**Asie** compte plus de 4,7 milliards d'habitants sur environ 8,2 milliards, soit environ 60 %. On y trouve deux des trois grands foyers de peuplement." },
        { type: "saisie", question: "Combien d'habitants l'humanité a-t-elle atteint le 15 novembre 2022, selon l'ONU ? (en milliards)", reponses: ["8 milliards", "8", "huit milliards", "8000000000"], explication: "Le **15 novembre 2022**, la population mondiale a atteint **8 milliards** d'habitants selon l'ONU." },
        { type: "qcm", question: "Lequel de ces espaces est un grand foyer de peuplement ?", choix: ["Le Sahara", "La Sibérie", "L'Amazonie", "L'Asie du Sud"], reponse: 3, explication: "L'**Asie du Sud** (Inde, Pakistan, Bangladesh) est un des trois grands foyers. Le Sahara, la Sibérie et l'Amazonie sont des espaces peu peuplés." },
        { type: "vf", question: "La Chine est aujourd'hui le pays le plus peuplé du monde.", reponse: false, explication: "Depuis **2023**, c'est l'**Inde** (plus de 1,4 milliard d'habitants) qui est le pays le plus peuplé, devant la Chine." },
        { type: "saisie", question: "Un pays fictif compte 30 millions d'habitants pour 300 000 km². Quelle est sa densité en habitants par km² ? (réponds par un nombre)", reponses: ["100", "100 hab/km²", "100 hab./km²", "100 hab/km2", "cent"], explication: "30 000 000 ÷ 300 000 = **100 habitants par km²**." },
        { type: "qcm", question: "Pourquoi la plupart des Égyptiens vivent-ils dans la vallée et le delta du Nil ?", choix: ["Parce que le Nil apporte l'eau dans un pays presque entièrement désertique", "Parce que le reste du pays est couvert de forêts", "Parce que c'est la région la plus froide", "Parce que la loi l'oblige"], reponse: 0, explication: "Le reste de l'Égypte est un **désert**. Le **Nil** apporte l'eau nécessaire à l'agriculture et à la vie, depuis l'Antiquité." },
        { type: "vf", question: "Les grands foyers de peuplement d'Asie et d'Europe sont très anciens.", reponse: true, explication: "Grâce à l'agriculture (riz, blé), ils sont densément peuplés depuis l'Antiquité : c'est une **permanence** dans la longue durée." },
        { type: "qcm", question: "Dans quelle région du monde la croissance de la population est-elle aujourd'hui la plus forte ?", choix: ["En Europe", "En Afrique subsaharienne", "Au Japon", "En Chine"], reponse: 1, explication: "L'**Afrique subsaharienne** a la croissance la plus rapide. En Europe, au Japon ou en Chine, la population vieillit et commence à diminuer." },
        { type: "saisie", question: "Comment appelle-t-on la concentration croissante des populations et des activités sur les côtes ?", reponses: ["littoralisation", "la littoralisation"], explication: "La **littoralisation** : les littoraux attirent de plus en plus d'habitants (environ 40 % de l'humanité à moins de 100 km des côtes)." },
        { type: "redaction", question: "**Paragraphe argumenté (niveau contrôle)** : décris la répartition de la population mondiale et explique-la. Termine en présentant une dynamique actuelle du peuplement.", corrige: `**Introduction** : plus de **8 milliards** d'humains vivent sur Terre (2022), mais ils sont très **inégalement répartis**.

**1. Une répartition inégale**
- Trois grands **foyers de peuplement** rassemblent l'essentiel de l'humanité : l'**Asie de l'Est** (Chine, Japon), l'**Asie du Sud** (Inde, Bangladesh) et l'**Europe**. L'Asie regroupe à elle seule environ 60 % de la population mondiale.
- Il existe des foyers secondaires (nord-est des États-Unis, golfe de Guinée, vallée du Nil).
- À l'inverse, de vastes espaces sont **presque vides** : déserts chauds (Sahara) et froids (Arctique), hautes montagnes, forêts équatoriales (Amazonie).

**2. Des explications**
- **Naturelles** : les humains préfèrent les plaines, les vallées des fleuves et les littoraux, sous des climats favorables à l'agriculture. Le froid, la sécheresse ou l'altitude sont des contraintes. Ex. : en Égypte, presque toute la population vit dans la vallée du Nil.
- **Historiques** : les grands foyers d'Asie et d'Europe sont **anciens**, grâce à l'agriculture (riz, blé) depuis l'Antiquité.
- **Économiques** : aujourd'hui, on se concentre là où se trouvent les emplois, dans les villes et sur les littoraux.

**3. Une dynamique actuelle**
- La population augmente encore, mais de moins en moins vite ; la croissance est forte en **Afrique subsaharienne**. L'ONU prévoit un maximum d'environ 10,3 milliards vers les années 2080. Partout, les villes grandissent : c'est l'**urbanisation**.

**Conclusion** : la répartition des hommes s'explique à la fois par la nature, l'histoire et l'économie ; elle continue d'évoluer.` },
        { type: "saisie", texte: "egypte", question: "D'après le document, calcule la densité moyenne de l'Égypte, en habitants par km². (réponds par un nombre)", reponses: ["116", "116 hab/km²", "116 hab./km²", "116 habitants par km²", "environ 116"], explication: "Densité = habitants ÷ superficie = 116 000 000 ÷ 1 000 000 = **116 habitants par km²**. Mais cette moyenne cache de très fortes différences à l'intérieur du pays." },
        { type: "saisie", texte: "egypte", question: "D'après le document, quelle superficie, en km², occupent la vallée et le delta du Nil ? (réponds par un nombre)", reponses: ["50000", "50 000", "50 000 km²", "50000 km²", "50 000 km2", "environ 50 000"], explication: "5 % de 1 000 000 km² : 1 000 000 × 5 ÷ 100 = **50 000 km²**. C'est une toute petite partie du pays." },
        { type: "vf", texte: "egypte", question: "D'après le document, dans la vallée et le delta du Nil, la densité est beaucoup plus forte que la moyenne du pays.", reponse: true, explication: "Environ 95 % des 116 millions d'Égyptiens, soit environ 110 millions de personnes, vivent sur 50 000 km² : 110 000 000 ÷ 50 000 = **plus de 2 000 habitants par km²**, près de vingt fois la moyenne du pays. Le désert, lui, est presque vide." },
        { type: "qcm", texte: "egypte", question: "Quelle phrase résume le mieux ce que montre le document ?", choix: ["La population égyptienne est répartie de façon égale sur tout le territoire", "La population égyptienne se concentre le long du Nil, le reste du pays est presque vide", "La plupart des Égyptiens vivent dans le désert, loin du fleuve", "L'Égypte est un pays peu peuplé, avec moins de 10 millions d'habitants"], reponse: 1, explication: "95 % de la population vit sur 5 % du territoire, **le long du Nil** : la répartition est très **inégale**. L'Égypte compte environ 116 millions d'habitants : elle est très peuplée." },
        { type: "redaction", texte: "egypte", question: "**Analyse de document (niveau contrôle)** : 1. Présente le document. 2. Décris la répartition de la population égyptienne en citant deux chiffres. 3. Explique cette répartition à l'aide du document et de tes connaissances (au moins deux explications). 4. Quel mot de vocabulaire désigne une région où la population est très nombreuse et dense ?", corrige: `**1. Présentation** : c'est un **tableau statistique** accompagné d'un court **texte**, réalisé d'après des données de l'**ONU** (2024) et de la Banque mondiale. Il porte sur la **répartition de la population** en **Égypte**, un pays d'Afrique du Nord traversé par le **Nil**.

**2. Une répartition très inégale** : l'Égypte compte environ **116 millions** d'habitants, mais **95 %** d'entre eux vivent dans la vallée et le delta du Nil, qui ne représentent que **5 %** du territoire. La densité moyenne est de 116 habitants par km², mais elle dépasse 2 000 habitants par km² le long du fleuve, alors que le désert est presque vide.

**3. Des explications**
- **Naturelles** : le reste du pays est un **désert** très sec (le document dit qu'il couvre presque tout le pays). Le **Nil** apporte l'eau nécessaire à la vie et à l'**irrigation** des champs.
- **Historiques** : la vallée du Nil est cultivée et peuplée depuis l'**Antiquité** (l'Égypte des pharaons, vers 3100 av. J.-C.) : c'est une **permanence** dans la longue durée.
- **Économiques** : les grandes villes, les emplois et les terres cultivables se trouvent le long du fleuve, ce qui attire encore les habitants.

**4. Vocabulaire** : la vallée du Nil est un **foyer de peuplement** (secondaire à l'échelle du monde).` },
      ],
    },
    {
      id: "methodes-6e",
      titre: "Méthode : repères, frise, carte et analyse de document",
      theme: "Méthodes",
      cours: `
## 1. Les grands repères chronologiques de 6e
| Date | Événement |
|---|---|
| il y a environ 7 millions d'années | Toumaï, peut-être le plus ancien fossile connu de la lignée humaine (Afrique) |
| il y a environ 300 000 ans | apparition d'*Homo sapiens* en Afrique |
| vers 10 000 av. J.-C. | débuts de l'agriculture dans le Croissant fertile (Néolithique) |
| vers 3300 av. J.-C. | invention de l'écriture en Mésopotamie (fin de la Préhistoire) |
| vers 1750 av. J.-C. | Code de Hammurabi |
| 776 av. J.-C. | premiers Jeux olympiques (selon la tradition) |
| 753 av. J.-C. | fondation légendaire de Rome |
| 587 av. J.-C. | destruction du Temple de Jérusalem, exil à Babylone |
| 508-507 av. J.-C. | réformes de Clisthène : naissance de la démocratie à Athènes |
| 52 av. J.-C. | César bat Vercingétorix à Alésia |
| 27 av. J.-C. | Auguste, premier empereur romain |
| vers 30 ap. J.-C. | crucifixion de Jésus à Jérusalem |
| 212 | édit de Caracalla : citoyenneté pour tous les hommes libres |
| 313 | édit de Milan : liberté de culte pour les chrétiens |
| 380 | le christianisme, religion officielle de l'Empire |

## 2. Se repérer dans le temps : siècles, millénaires, frises
- Notre calendrier compte les années à partir de la naissance supposée de Jésus (« J.-C. »). **Avant J.-C.**, on compte à rebours : plus le nombre est grand, plus c'est **ancien**.
- Un **siècle** = 100 ans ; un **millénaire** = 1 000 ans.
- **Trouver le siècle** : on prend le nombre de centaines et on ajoute 1. 52 av. J.-C. → 0 centaine + 1 → **Ier siècle av. J.-C.** ; 212 → 2 + 1 → **IIIe siècle**. Attention aux années en 00 : l'année 300 est la dernière du **IIIe siècle**.
- **Calculer une durée** : deux dates du même côté de J.-C. → **soustraction** (753 − 509 = 244 ans) ; une date avant et une après → **addition** (27 + 212 = 239 ans).
- **Construire une frise** : 1. trace une flèche orientée vers la droite ; 2. choisis une **échelle** régulière (par exemple 1 cm = 100 ans) ; 3. place l'**an 1** ; 4. place les dates (un point pour un événement, une bande pour une période) ; 5. donne un titre.

>! **Exemple résolu** : sur une frise où **1 cm = 100 ans**, à quelle distance de l'an 1 places-tu 753 av. J.-C. ? 753 ÷ 100 = **7,53 cm à gauche** de l'an 1. Et 313 ap. J.-C. ? **3,13 cm à droite**.

## 3. Se repérer dans l'espace : lire et compléter une carte
- Une carte a un **titre** (ce qu'elle montre), une **légende** (le sens des couleurs et des symboles), une **orientation** (la flèche du nord) et une **échelle** (qui permet de calculer les distances réelles).
- Les **figurés** : de **surface** (couleurs, hachures) pour les zones ; **ponctuels** (points, symboles) pour les villes ou les lieux ; **linéaires** (traits, flèches) pour les routes, les frontières, les flux.
- **Utiliser l'échelle** : si 1 cm = 50 km et que tu mesures 4 cm, la distance réelle est 4 × 50 = **200 km**.
- Repères à connaître : les **continents** (Afrique, Amérique, Asie, Europe, Océanie, Antarctique), les **océans** (Pacifique, Atlantique, Indien, Arctique, Austral), la mer **Méditerranée**, l'**équateur**, les grands fleuves (Nil, Tigre, Euphrate, Amazone).

## 4. Analyser un document
1. **Présenter** : sa **nature** (texte, carte, photographie, objet, stèle, mosaïque…), son **auteur**, sa **date**, sa **source**, son **sujet**.
2. **Prélever** : relève les informations qui répondent aux questions, en citant le document entre guillemets.
3. **Expliquer** : utilise tes connaissances pour expliquer les informations (contexte, mots importants).
4. **Avoir un regard critique** : l'auteur était-il témoin ? A-t-il un point de vue ? Est-ce un **mythe**, une **croyance** ou un **fait historique** ?

## 5. Rédiger un paragraphe argumenté
1. **Lis** bien le sujet, souligne les mots-clés, repère la période et le lieu.
2. Une **phrase d'introduction** présente le sujet.
3. Deux ou trois idées, chacune avec des **exemples précis** (dates, noms, lieux, chiffres) et du **vocabulaire** ; relie-les par des connecteurs (d'abord, ensuite, de plus, enfin, car, donc).
4. Une **phrase de conclusion** répond à la question.

> **À retenir** :
> - Avant J.-C., on compte à rebours. Siècle = centaines + 1 (sauf années en 00).
> - Durée : même côté de J.-C. → soustraction ; de part et d'autre → addition.
> - Une carte : titre, légende, orientation, échelle ; figurés de surface, ponctuels et linéaires.
> - Un document : présenter, prélever, expliquer, critiquer.
`,
      exercices: [
        { type: "saisie", question: "À quel siècle appartient l'année 212 ? (écris en chiffres romains, par exemple IIe)", reponses: ["IIIe", "III", "IIIe siècle", "III siècle", "le IIIe siècle"], explication: "2 centaines + 1 = **IIIe siècle**. On écrit les siècles en **chiffres romains**, suivis d'un « e » : IIIe (et non « 3e » ni « IIIème »)." },
        { type: "qcm", question: "À quel siècle se déroule la bataille d'Alésia (52 av. J.-C.) ?", choix: ["Ve siècle av. J.-C.", "Ier siècle ap. J.-C.", "Ier siècle av. J.-C.", "IIe siècle av. J.-C."], reponse: 2, explication: "52 av. J.-C. : 0 centaine + 1 = **Ier siècle av. J.-C.** (de 100 à 1 av. J.-C.)." },
        { type: "vf", question: "L'année 500 av. J.-C. est plus ancienne que l'année 700 av. J.-C.", reponse: false, explication: "Avant J.-C., on compte **à rebours** : 700 av. J.-C. est **plus ancien** que 500 av. J.-C. (il est plus loin de l'an 1)." },
        { type: "saisie", question: "Combien d'années séparent le début du règne d'Auguste (27 av. J.-C.) et l'édit de Caracalla (212) ? (réponds par un nombre)", reponses: ["239", "238", "deux cent trente-neuf"], explication: "Une date avant J.-C. et une après : **addition** : 27 + 212 = **239 ans** (238 si l'on tient compte de l'absence d'année 0 : les deux réponses sont acceptées)." },
        { type: "qcm", question: "Sur une carte, 1 cm représente 50 km. Tu mesures 6 cm entre deux villes. Quelle est la distance réelle ?", choix: ["56 km", "3 000 km", "30 km", "300 km"], reponse: 3, explication: "6 × 50 = **300 km**. On multiplie la mesure par la valeur d'un centimètre." },
        { type: "qcm", question: "Sur une carte, quel type de figuré utilise-t-on pour représenter une route commerciale ?", choix: ["Un figuré linéaire", "Un figuré de surface", "Un figuré ponctuel", "Aucun figuré"], reponse: 0, explication: "Les routes, frontières et flux sont représentés par des **figurés linéaires** (traits, flèches). Les points servent aux villes ; les surfaces aux zones." },
        { type: "saisie", question: "Sur une frise où 1 cm = 100 ans, à combien de centimètres à gauche de l'an 1 places-tu l'année 500 av. J.-C. ? (réponds par un nombre)", reponses: ["5", "5 cm", "cinq"], explication: "500 ÷ 100 = **5 cm** à gauche de l'an 1." },
        { type: "qcm", question: "Quelle est la première étape pour analyser un document ?", choix: ["Donner son avis", "Le présenter : nature, auteur, date, source, sujet", "Recopier tout le texte", "Inventer une conclusion"], reponse: 1, explication: "On commence toujours par **présenter** le document, avant de prélever les informations, les expliquer et les critiquer." },
        { type: "vf", question: "L'année 300 appartient au IIIe siècle.", reponse: true, explication: "Le IIIe siècle va de **201 à 300** : l'année 300 en est la dernière année. Le IVe siècle commence en 301." },
        { type: "redaction", question: "**Construire une frise** : explique comment tu construirais une frise allant de 800 av. J.-C. à 400 ap. J.-C., avec l'échelle 1 cm = 100 ans. Quelle longueur fera-t-elle ? Où places-tu la fondation légendaire de Rome (753 av. J.-C.), le premier empereur (27 av. J.-C.) et l'édit de Milan (313) ?", corrige: `**1. La longueur** : de 800 av. J.-C. à 400 ap. J.-C., il y a 800 + 400 = **1 200 ans**. Avec 1 cm = 100 ans, la frise mesure **12 cm**.

**2. La construction** :
- trace une flèche de 12 cm orientée vers la droite ;
- place 800 av. J.-C. au début, puis l'**an 1** à **8 cm** du début (800 ÷ 100 = 8) ;
- gradue tous les centimètres (700 av., 600 av.… 1, 100, 200, 300, 400).

**3. Les événements** :
- **753 av. J.-C.** : 7,53 cm à gauche de l'an 1, soit environ **0,5 cm** après le début de la frise ;
- **27 av. J.-C.** : 0,27 cm à gauche de l'an 1, soit environ **7,7 cm** du début ;
- **313** : 3,13 cm à droite de l'an 1, soit environ **11,1 cm** du début.

**4. Titre** : par exemple « De la fondation de Rome au christianisme impérial ». On peut aussi colorier des **périodes** sous forme de bandes : la République (509-27 av. J.-C.), l'Empire (à partir de 27 av. J.-C.).` },
      ],
    },
  ],
};
