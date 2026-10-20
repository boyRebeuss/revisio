export default {
  chapitres: [
    {
      id: "premiere-guerre-mondiale",
      titre: "Civils et militaires dans la Première Guerre mondiale",
      theme: "Histoire – L'Europe, un théâtre majeur des guerres totales (1914-1945)",
      cours: `
## Introduction
De **1914 à 1918**, la Première Guerre mondiale oppose deux camps : la **Triple-Entente** (France, Royaume-Uni, Russie, rejointes par l'Italie en 1915 et les États-Unis en 1917) et les **puissances centrales** (Allemagne, Autriche-Hongrie, Empire ottoman, Bulgarie). C'est la première **guerre totale** : elle mobilise toutes les forces des pays (soldats, civils, économie, propagande) et touche aussi les civils.

## 1. Le déclenchement et les grandes phases
- Le **28 juin 1914**, l'héritier du trône d'Autriche-Hongrie, François-Ferdinand, est assassiné à **Sarajevo**. Le jeu des alliances entraîne l'Europe dans la guerre au début d'**août 1914**.
- **1914 : la guerre de mouvement**. L'armée allemande envahit la Belgique et le nord de la France ; elle est arrêtée lors de la **bataille de la Marne** (septembre 1914).
- **1915-1917 : la guerre de position**. Les armées s'enterrent dans des **tranchées** sur un front de 700 km, de la mer du Nord à la Suisse.
- **1917, l'année charnière** : les **États-Unis** entrent en guerre (avril) ; la **Russie** en révolution sort du conflit (paix de Brest-Litovsk, mars 1918).
- **1918** : retour de la guerre de mouvement ; l'Allemagne épuisée signe l'**armistice le 11 novembre 1918**.

## 2. L'expérience combattante : une violence de masse
- La vie dans les tranchées : boue, rats, poux, froid, peur, bombardements permanents. Les soldats français sont surnommés les **« poilus »**.
- Des armes nouvelles et industrielles : **artillerie lourde**, mitrailleuses, **gaz de combat** (utilisés par les Allemands à Ypres en avril 1915), chars, avions.
- **Verdun** (21 février – 18 décembre 1916) : l'armée allemande veut « saigner à blanc » l'armée française. Environ **300 000 soldats** des deux camps y meurent. Grâce à la rotation des unités, environ les trois quarts des divisions françaises y combattent. C'est une **bataille d'usure**.
- La **Somme** (juillet-novembre 1916), offensive franco-britannique, est encore plus meurtrière.
- En 1917, après l'échec de l'offensive du Chemin des Dames, des **mutineries** éclatent dans l'armée française : les soldats refusent les attaques inutiles.

## 3. Les civils dans la guerre totale
- **Mobilisation économique** : les usines produisent pour l'armée (obus, canons). Les **femmes** remplacent les hommes dans les champs et les usines (les « munitionnettes »).
- **Mobilisation des esprits** : la **propagande** et la **censure** (on cache les mauvaises nouvelles) entretiennent le moral ; les citoyens prêtent leur argent à l'État (emprunts).
- Les **colonies** fournissent des soldats (environ 600 000 soldats coloniaux pour la France, dont les « tirailleurs sénégalais ») et des travailleurs.
- Les civils subissent l'occupation (nord de la France, Belgique), les bombardements, les privations.
- **Le génocide des Arméniens (1915-1916)** : le gouvernement de l'Empire ottoman organise l'extermination des Arméniens, accusés de soutenir la Russie : massacres, déportations dans le désert syrien. Plus d'un million d'Arméniens sont tués (les historiens estiment entre 1,2 et 1,5 million). C'est le **premier génocide du XXe siècle**.

## 4. Le bilan et la sortie de guerre
- Environ **10 millions de soldats** tués, dont **1,4 million de Français** ; des millions de blessés et de « gueules cassées », de veuves et d'orphelins.
- Le **traité de Versailles** (**28 juin 1919**) impose à l'Allemagne des conditions très dures : perte de l'Alsace-Moselle (rendue à la France), de ses colonies, armée limitée, **réparations** à payer ; elle est déclarée responsable de la guerre. Les Allemands le vivent comme un *Diktat* (une paix imposée).
- La carte de l'Europe change : disparition des empires austro-hongrois, ottoman et russe, nouveaux États (Pologne, Tchécoslovaquie, Yougoslavie). La **Société des Nations** (SDN) est créée pour préserver la paix.
- Chaque commune française élève un **monument aux morts**.

>! **Méthode – définir « guerre totale »** : une guerre totale mobilise **toutes les ressources** d'un pays (hommes, économie, sciences, opinion publique) et **efface la frontière entre civils et militaires** : les civils travaillent pour la guerre et deviennent aussi des cibles.

> **À retenir** :
> - 1914-1918 : Première Guerre mondiale. 1916 : bataille de Verdun. 11 novembre 1918 : armistice. 28 juin 1919 : traité de Versailles.
> - 1915 : début du génocide des Arméniens par l'Empire ottoman.
> - Une guerre totale : violence de masse au front, mobilisation des civils, de l'économie et des colonies.
> - Vocabulaire : guerre totale, guerre de position, tranchée, poilu, guerre d'usure, propagande, censure, génocide, armistice.
`,
      exercices: [
        { type: "saisie", question: "En quelle année a lieu la bataille de Verdun ?", reponses: ["1916", "en 1916", "21 février 1916", "février 1916", "de février à décembre 1916"], explication: "La bataille de Verdun dure du 21 février au 18 décembre 1916." },
        { type: "qcm", question: "Quel pays sort de la guerre en 1917-1918 à cause d'une révolution ?", choix: ["Les États-Unis", "L'Italie", "La Russie", "Le Royaume-Uni"], reponse: 2, explication: "La Russie, en pleine révolution, cesse les combats fin 1917 et signe la paix de Brest-Litovsk avec l'Allemagne en mars 1918. Les États-Unis, eux, entrent en guerre en 1917." },
        { type: "vf", question: "Pendant la Première Guerre mondiale, les civils ne participent pas à l'effort de guerre.", reponse: false, explication: "C'est une guerre totale : les civils travaillent dans les usines d'armement et les champs, prêtent leur argent à l'État et subissent la propagande." },
        { type: "saisie", question: "Comment surnomme-t-on les soldats français de la Première Guerre mondiale ?", reponses: ["poilus", "les poilus", "poilu", "le poilu"], explication: "Les « poilus » : on les appelle ainsi car ils ne peuvent pas se raser dans les tranchées, et parce que « poilu » signifiait aussi « courageux »." },
        { type: "qcm", question: "Quel peuple est victime d'un génocide organisé par le gouvernement ottoman à partir de 1915 ?", choix: ["Les Arméniens", "Les Grecs", "Les Kurdes", "Les Juifs"], reponse: 0, explication: "Le génocide des Arméniens (1915-1916) fait plus d'un million de victimes : c'est le premier génocide du XXe siècle." },
        { type: "qcm", question: "Quelle est la date de l'armistice qui met fin aux combats de la Première Guerre mondiale ?", choix: ["28 juin 1914", "28 juin 1919", "8 mai 1945", "11 novembre 1918"], reponse: 3, explication: "L'armistice est signé le 11 novembre 1918. Le 28 juin 1919 est la date du traité de Versailles ; le 28 juin 1914, celle de l'attentat de Sarajevo." },
        { type: "vf", question: "Le traité de Versailles rend l'Alsace-Moselle à la France et impose des réparations à l'Allemagne.", reponse: true, explication: "L'Allemagne, jugée responsable de la guerre, perd aussi ses colonies et voit son armée limitée. Elle parle de « Diktat »." },
        { type: "qcm", question: "Pourquoi dit-on que Verdun est une « bataille d'usure » ?", choix: ["Parce qu'elle se déroule uniquement dans les airs", "Parce que chaque camp cherche à épuiser l'autre en lui infligeant le maximum de pertes", "Parce qu'elle dure seulement quelques jours", "Parce qu'aucun soldat n'y meurt"], reponse: 1, explication: "À Verdun, l'état-major allemand veut épuiser (« saigner à blanc ») l'armée française. Le front bouge très peu pendant dix mois et environ 300 000 soldats y meurent." },
        { type: "redaction", question: "**Développement construit (brevet)** : dans un texte d'au moins trente lignes, montre que la Première Guerre mondiale est une guerre totale qui touche à la fois les soldats et les civils.", corrige: `**Introduction** : de 1914 à 1918, la Première Guerre mondiale oppose l'Entente (France, Royaume-Uni, Russie, puis États-Unis) aux puissances centrales (Allemagne, Autriche-Hongrie, Empire ottoman). C'est une **guerre totale**, qui mobilise toutes les ressources des pays. Comment frappe-t-elle à la fois les soldats et les civils ?

**1. Les soldats subissent une violence de masse**
Après la guerre de mouvement de 1914, les armées s'enterrent dans les **tranchées**. Les **poilus** y vivent dans la boue, avec les rats et la peur. Les armes sont industrielles : artillerie lourde, mitrailleuses, **gaz de combat** à partir de 1915. À **Verdun**, en **1916**, une bataille d'usure de dix mois fait environ 300 000 morts. Au total, la guerre tue environ 10 millions de soldats, dont 1,4 million de Français.

**2. Les civils sont mobilisés**
L'économie est tournée vers la guerre : les usines fabriquent des obus, les **femmes** remplacent les hommes partis au front, par exemple comme « munitionnettes ». Les colonies fournissent soldats et travailleurs. La **propagande** et la **censure** maintiennent le moral de l'« arrière ».

**3. Les civils sont aussi des victimes**
Les populations du nord de la France et de la Belgique vivent sous l'occupation allemande et subissent bombardements et privations. Dans l'Empire ottoman, le gouvernement organise à partir de **1915** le **génocide des Arméniens** : plus d'un million de morts.

**Conclusion** : la Première Guerre mondiale efface la frontière entre le front et l'arrière : toute la société est engagée et touchée. L'armistice du 11 novembre 1918 laisse une Europe meurtrie, et le traité de Versailles (1919) laisse de fortes rancœurs en Allemagne.` },
        { type: "redaction", question: "**Analyse de document** : « On ne peut pas se représenter ce que c'est. La terre est labourée par les obus. Nous sommes restés trois jours dans un trou, sans pouvoir sortir, sans boire, avec les morts autour de nous. Ceux qui ne sont pas tués deviennent fous. » (Texte d'entraînement inspiré des lettres de poilus, Verdun, 1916). 1. Présente le document. 2. Relève deux souffrances des soldats. 3. Explique, avec tes connaissances, pourquoi les combats de Verdun sont si violents.", corrige: `**1. Présentation** : c'est un **texte d'entraînement** écrit à la manière d'une **lettre de soldat** français (un poilu), rédigée pendant la bataille de **Verdun** en **1916**. Ce type de source est un **témoignage direct** sur la vie au front ; mais les lettres étaient lues par la censure, et beaucoup de soldats cachaient le pire à leur famille.

**2. Deux souffrances** : les soldats sont **bloqués** « trois jours dans un trou », **sans boire** ; ils vivent « avec les morts autour » d'eux ; certains « deviennent fous » (souffrance psychologique).

**3. Explication** : à Verdun (février-décembre 1916), l'armée allemande veut épuiser l'armée française dans une **bataille d'usure**. Les deux camps utilisent une **artillerie** massive : des millions d'obus « labourent » le terrain. Les soldats ne peuvent ni avancer ni se replier, le ravitaillement arrive mal. Environ **300 000 soldats** y meurent. Verdun devient en France le symbole de la souffrance et de la résistance des poilus.` },
      ],
    },
    {
      id: "entre-deux-guerres",
      titre: "Démocraties fragilisées et expériences totalitaires dans l'Europe de l'entre-deux-guerres",
      theme: "Histoire – L'Europe, un théâtre majeur des guerres totales (1914-1945)",
      cours: `
## Introduction
Entre 1918 et 1939, l'Europe sort épuisée de la guerre. Dans plusieurs pays naissent des **régimes totalitaires**, tandis que les **démocraties** sont fragilisées par la crise économique.

>! **Définition** : un **régime totalitaire** est une dictature qui veut contrôler **toute** la société et même la pensée des individus : un **parti unique** et un **chef** tout-puissant, une **idéologie** officielle, une **propagande** omniprésente, l'**embrigadement** de la jeunesse, la **terreur** policière contre les opposants. Exemples : l'URSS de Staline et l'Allemagne nazie d'Hitler. L'Italie fasciste de Mussolini (au pouvoir en 1922) en est une première forme.

## 1. Le régime soviétique de Staline
- En **1917**, la **révolution russe** renverse le tsar (février), puis les **bolcheviks** de **Lénine** prennent le pouvoir (octobre). Après une guerre civile, l'**URSS** est créée en 1922. L'idéologie est le **communisme** : une société sans classes sociales, où l'État possède les moyens de production.
- Après la mort de Lénine (1924), **Staline** élimine ses rivaux et s'impose à la fin des années 1920.
- **Économie** : à partir de 1929, **collectivisation** forcée des terres (les paysans doivent entrer dans des fermes collectives, les **kolkhozes**) et **plans quinquennaux** pour l'industrie lourde. La résistance des paysans est brisée : la famine de 1932-1933, aggravée par le pouvoir, tue des millions de personnes, surtout en **Ukraine**.
- **Terreur** : la police politique (le NKVD) arrête les « ennemis du peuple » ; des millions de personnes sont envoyées au **Goulag** (camps de travail forcé). Lors de la **Grande Terreur** (1936-1938), environ 700 000 personnes sont exécutées.
- **Culte de la personnalité** : Staline est présenté comme le « petit père des peuples ».

## 2. Le régime nazi d'Hitler
- L'Allemagne devient une démocratie, la **république de Weimar** (1919), mais elle est contestée : humiliation du traité de Versailles, crise de 1923, puis **crise de 1929** qui provoque un chômage massif (environ 6 millions de chômeurs en 1932).
- **Adolf Hitler**, chef du parti nazi (NSDAP), promet de redresser le pays. Le parti nazi devient le premier parti au Parlement en 1932, et Hitler est nommé **chancelier le 30 janvier 1933**, de façon légale.
- Il installe rapidement une dictature : partis et syndicats interdits, **premiers camps de concentration** (Dachau, mars 1933) pour les opposants, police politique (la **Gestapo**), SS. En 1934, il devient le **Führer** (guide).
- **Idéologie nazie** : racisme et **antisémitisme** (croyance en une prétendue « race aryenne » supérieure), volonté de conquérir un « espace vital » à l'est, rejet de la démocratie.
- **Persécution des Juifs** : **lois de Nuremberg** (**1935**) qui leur retirent la citoyenneté et interdisent les mariages avec des non-Juifs ; **Nuit de Cristal** (9-10 novembre 1938) : synagogues incendiées, magasins pillés, environ 30 000 Juifs arrêtés.
- **Embrigadement** : Jeunesses hitlériennes, propagande de Goebbels, autodafés (livres brûlés).

## 3. Les démocraties fragilisées : l'exemple de la France
- La **crise de 1929** commence aux États-Unis par le krach de la Bourse de Wall Street (octobre 1929). Elle atteint la France plus tard, à partir de 1931 : faillites, chômage.
- Les **ligues d'extrême droite**, antiparlementaires, manifestent violemment le **6 février 1934** à Paris.
- En réaction, les partis de gauche (socialistes, radicaux, communistes) s'unissent dans le **Front populaire**, qui gagne les élections en **mai 1936**. **Léon Blum** devient président du Conseil.
- Après de grandes grèves, les **accords de Matignon** (juin 1936) augmentent les salaires ; les lois de 1936 instaurent **deux semaines de congés payés** et la **semaine de 40 heures**.
- Mais le Front populaire se divise (notamment sur la guerre d'Espagne) et prend fin en 1938. La démocratie française a résisté, mais reste affaiblie.

| | URSS de Staline | Allemagne d'Hitler |
|---|---|---|
| Idéologie | communisme | nazisme (racisme, antisémitisme) |
| Ennemis désignés | « ennemis de classe » (koulaks, c'est-à-dire paysans aisés ; opposants) | Juifs, opposants, Tsiganes, handicapés… |
| Instruments de terreur | NKVD, Goulag | SS, Gestapo, camps de concentration |
| Points communs | parti unique, chef tout-puissant, propagande, embrigadement, terreur | les mêmes : parti unique, chef tout-puissant, propagande, embrigadement, terreur |

> **À retenir** :
> - 1917 : révolution russe. 1922 : Mussolini au pouvoir en Italie. 1929 : krach de Wall Street.
> - 30 janvier 1933 : Hitler chancelier. 1935 : lois de Nuremberg. 1938 : Nuit de Cristal.
> - 1936 : victoire du Front populaire en France (congés payés, 40 heures).
> - Vocabulaire : totalitarisme, parti unique, propagande, embrigadement, collectivisation, Goulag, antisémitisme, ligues, Front populaire.
`,
      exercices: [
        { type: "saisie", question: "En quelle année Hitler devient-il chancelier d'Allemagne ?", reponses: ["1933", "en 1933", "30 janvier 1933", "le 30 janvier 1933", "30/01/1933", "janvier 1933", "en janvier 1933"], explication: "Hitler est nommé chancelier le 30 janvier 1933, de façon légale, par le président Hindenburg." },
        { type: "qcm", question: "Lequel de ces éléments n'est PAS une caractéristique d'un régime totalitaire ?", choix: ["Un parti unique", "La propagande", "Des élections libres avec plusieurs partis", "La terreur policière"], reponse: 2, explication: "Un régime totalitaire supprime le pluralisme : il n'y a qu'un parti, et les élections, quand elles existent, ne sont pas libres." },
        { type: "saisie", question: "Comment s'appellent les camps de travail forcé de l'URSS stalinienne ?", reponses: ["Goulag", "le Goulag", "Gulag", "goulags", "les goulags", "camps du Goulag", "les camps du Goulag"], explication: "Le Goulag est l'administration des camps de travail forcé : des millions de personnes y sont envoyées sous Staline." },
        { type: "vf", question: "Le Front populaire, au pouvoir en France en 1936, instaure les congés payés.", reponse: true, explication: "Les lois de juin 1936 instaurent deux semaines de congés payés et la semaine de 40 heures." },
        { type: "qcm", question: "Quelles lois de 1935 retirent la citoyenneté allemande aux Juifs ?", choix: ["Les accords de Matignon", "Les lois de Nuremberg", "Les lois de Weimar", "Le traité de Versailles"], reponse: 1, explication: "Les lois de Nuremberg (septembre 1935) excluent les Juifs de la citoyenneté et interdisent leurs mariages avec des non-Juifs." },
        { type: "qcm", question: "Qu'est-ce que la collectivisation dans l'URSS de Staline ?", choix: ["L'obligation pour les paysans de regrouper leurs terres dans des fermes collectives contrôlées par l'État", "La distribution des terres aux paysans", "La création d'entreprises privées", "Le retour du tsar"], reponse: 0, explication: "À partir de 1929, les paysans sont forcés d'entrer dans des kolkhozes. Ceux qui résistent sont déportés ; la famine de 1932-1933 fait des millions de morts." },
        { type: "vf", question: "Hitler prend le pouvoir par un coup d'État militaire en 1933.", reponse: false, explication: "Hitler est nommé chancelier légalement par le président Hindenburg, alors que son parti est devenu le premier parti du Parlement aux élections de 1932 (sans avoir la majorité absolue). C'est ensuite qu'il détruit la démocratie." },
        { type: "qcm", question: "Quel événement de 1929 déclenche une crise économique mondiale ?", choix: ["La Nuit de Cristal", "La victoire du Front populaire", "La révolution russe", "Le krach de la Bourse de New York (Wall Street)"], reponse: 3, explication: "Le krach de Wall Street (octobre 1929) provoque une crise qui touche l'Europe : chômage massif, notamment en Allemagne, ce qui aide les nazis." },
        { type: "redaction", question: "**Réponse courte** (deux ou trois phrases) : explique comment la crise de 1929 a aidé Hitler à arriver au pouvoir.", corrige: `La crise de 1929 provoque en Allemagne un **chômage massif** (environ 6 millions de chômeurs en 1932) et la misère. Beaucoup d'Allemands perdent confiance dans la **république de Weimar**, incapable de régler la crise, et se tournent vers Hitler qui promet du travail et la revanche sur le traité de Versailles. Le parti nazi devient le premier parti en 1932 et Hitler est nommé **chancelier le 30 janvier 1933**.` },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que l'URSS de Staline et l'Allemagne d'Hitler sont des régimes totalitaires.", corrige: `**Introduction** : dans l'entre-deux-guerres, de nouveaux régimes s'installent en Europe : l'**URSS de Staline** (au pouvoir à la fin des années 1920) et l'**Allemagne nazie** d'Hitler (à partir de 1933). Ce sont des **régimes totalitaires** : ils veulent contrôler toute la société. Comment ?

**1. Un pouvoir concentré dans les mains d'un chef et d'un parti unique**
En URSS, le parti communiste est le seul autorisé ; en Allemagne, Hitler interdit tous les partis sauf le parti nazi dès 1933. Les deux chefs font l'objet d'un **culte de la personnalité** : Staline est le « petit père des peuples », Hitler le **Führer**.

**2. Une idéologie imposée à tous**
Staline veut construire une société **communiste** : collectivisation des terres, plans quinquennaux. Hitler impose l'idéologie **nazie**, fondée sur le racisme et l'**antisémitisme** : lois de Nuremberg (1935), Nuit de Cristal (1938). La **propagande** (affiches, radio, cinéma, Goebbels en Allemagne) et l'**embrigadement** de la jeunesse (Jeunesses hitlériennes, organisations de jeunesse communistes) diffusent ces idées.

**3. La terreur contre les opposants**
La police politique (NKVD en URSS, Gestapo et SS en Allemagne) arrête les opposants. Des millions de Soviétiques sont envoyés au **Goulag** ; la Grande Terreur (1936-1938) fait environ 700 000 exécutions. En Allemagne, les opposants et les Juifs sont envoyés dans des **camps de concentration** (Dachau dès 1933).

**Conclusion** : malgré des idéologies opposées, les deux régimes ont les mêmes méthodes totalitaires : parti unique, chef tout-puissant, propagande, terreur. Face à eux, les démocraties, comme la France du Front populaire (1936), sont fragilisées par la crise.` },
      ],
    },
    {
      id: "seconde-guerre-mondiale",
      titre: "La Deuxième Guerre mondiale, une guerre d'anéantissement",
      theme: "Histoire – L'Europe, un théâtre majeur des guerres totales (1914-1945)",
      cours: `
## Introduction
De **1939 à 1945**, la Seconde Guerre mondiale oppose l'**Axe** (Allemagne, Italie, Japon) aux **Alliés** (Royaume-Uni, puis URSS et États-Unis à partir de 1941, la France libre…). Elle fait **plus de 50 millions de morts**, dont une majorité de **civils**. C'est une **guerre d'anéantissement** : il ne s'agit plus seulement de vaincre l'ennemi, mais de le **détruire**, y compris des peuples entiers.

## 1. Les grandes étapes de la guerre
- **1939-1941 : les victoires de l'Axe**. Après le pacte germano-soviétique (août 1939), l'Allemagne envahit la **Pologne** le **1er septembre 1939** ; la France et le Royaume-Uni lui déclarent la guerre. En mai-juin 1940, la France est vaincue. Le Royaume-Uni de **Churchill** résiste seul (bataille d'Angleterre).
- **1941 : la guerre devient mondiale**. Le **22 juin 1941**, l'Allemagne envahit l'**URSS**. Le **7 décembre 1941**, le Japon attaque la base américaine de **Pearl Harbor** : les **États-Unis** entrent en guerre.
- **1942-1943 : le tournant**. Victoire soviétique à **Stalingrad** (capitulation allemande le 2 février 1943), victoire américaine à Midway (Pacifique, juin 1942), victoire britannique à El-Alamein (Égypte).
- **1944-1945 : la victoire des Alliés**. Débarquement en **Normandie le 6 juin 1944** ; l'Armée rouge avance à l'est. L'Allemagne capitule le **8 mai 1945**. Les États-Unis lancent les **bombes atomiques** sur **Hiroshima (6 août 1945)** et **Nagasaki (9 août)** ; le Japon capitule le **2 septembre 1945**.

## 2. Une guerre d'anéantissement
- **Contre les soldats** : à l'est, la guerre est d'une violence extrême ; des millions de prisonniers soviétiques meurent de faim dans les camps allemands.
- **Contre les civils** : bombardements massifs des villes (Londres, Dresde, Tokyo), massacres de populations, famines. L'URSS perd environ 26 millions de personnes.
- **Les armes** : chars, avions, et pour la première fois l'**arme atomique**, qui fait plus de 200 000 morts à Hiroshima et Nagasaki d'ici la fin de 1945.

## 3. Le génocide des Juifs et des Tsiganes
Les nazis veulent faire disparaître les Juifs d'Europe : c'est la **Shoah** (« catastrophe » en hébreu).
1. **Persécutions et ghettos** : en Pologne occupée, les Juifs sont enfermés dans des **ghettos** (Varsovie), où beaucoup meurent de faim et de maladies.
2. **La « Shoah par balles »** : à partir de juin 1941, derrière l'armée allemande en URSS, des unités mobiles (les **Einsatzgruppen**) fusillent plus d'un million de Juifs.
3. **Les centres de mise à mort** : la **conférence de Wannsee** (20 janvier 1942) organise la « solution finale ». Les Juifs de toute l'Europe sont déportés en train vers des centres de mise à mort (Treblinka, Sobibor, **Auschwitz-Birkenau**…) où ils sont assassinés dans des **chambres à gaz**. À Auschwitz-Birkenau, environ 1,1 million de personnes sont tuées.
Au total, environ **6 millions de Juifs** sont exterminés, ainsi que plusieurs centaines de milliers de **Tsiganes** (Roms et Sinti). C'est un **génocide** : l'extermination volontaire et programmée d'un peuple.

>! **Ne confonds pas** : un **camp de concentration** (Dachau, Buchenwald) enferme opposants et « indésirables », qui y meurent souvent de travail forcé, de faim, de mauvais traitements ; un **centre de mise à mort** (Treblinka) sert à tuer immédiatement les déportés à leur arrivée. Auschwitz-Birkenau est à la fois camp de concentration et centre de mise à mort.

## 4. Le bilan
- Plus de 50 millions de morts (on avance souvent 50 à 60 millions), une Europe détruite.
- Au **procès de Nuremberg** (1945-1946), les dirigeants nazis sont jugés pour une notion nouvelle : le **crime contre l'humanité**.
- En **1945**, l'**ONU** est créée (charte signée à San Francisco en juin 1945) pour maintenir la paix.

> **À retenir** :
> - 1939-1945 : Seconde Guerre mondiale. 1er septembre 1939 : invasion de la Pologne. 1941 : attaque de l'URSS et de Pearl Harbor.
> - 1942-1943 : Stalingrad, le tournant. 6 juin 1944 : débarquement en Normandie. 8 mai 1945 : capitulation allemande.
> - 6 et 9 août 1945 : Hiroshima et Nagasaki. 2 septembre 1945 : capitulation du Japon.
> - La Shoah : environ 6 millions de Juifs assassinés (ghettos, Einsatzgruppen, centres de mise à mort comme Auschwitz-Birkenau).
> - Vocabulaire : Axe, Alliés, guerre d'anéantissement, ghetto, Shoah, génocide, centre de mise à mort, crime contre l'humanité.
`,
      exercices: [
        { type: "saisie", question: "Quelle est la date de la capitulation allemande qui met fin à la guerre en Europe ? (jour, mois, année)", reponses: ["8 mai 1945", "le 8 mai 1945", "08/05/1945", "8/05/1945", "8/5/1945", "8 mai 45"], explication: "L'Allemagne capitule le 8 mai 1945 (signature à Reims le 7, puis à Berlin le 8)." },
        { type: "qcm", question: "Quelle bataille marque le tournant de la guerre sur le front de l'Est ?", choix: ["Verdun", "Pearl Harbor", "La bataille d'Angleterre", "Stalingrad"], reponse: 3, explication: "La capitulation allemande à Stalingrad (2 février 1943) marque le début du recul allemand face à l'Armée rouge. Verdun est une bataille de 1916." },
        { type: "vf", question: "Les États-Unis entrent en guerre après l'attaque japonaise de Pearl Harbor en décembre 1941.", reponse: true, explication: "Le 7 décembre 1941, le Japon attaque la base navale américaine de Pearl Harbor (Hawaï). Les États-Unis entrent alors en guerre." },
        { type: "saisie", question: "Quel mot hébreu désigne le génocide des Juifs par les nazis ?", reponses: ["Shoah", "la Shoah"], explication: "Shoah signifie « catastrophe » en hébreu. Environ 6 millions de Juifs sont assassinés." },
        { type: "qcm", question: "Combien de Juifs environ sont exterminés par les nazis ?", choix: ["6 millions", "600 000", "1 million", "60 millions"], reponse: 0, explication: "Environ 6 millions de Juifs sont assassinés. 50 à 60 millions, c'est l'ordre de grandeur du nombre total de morts de la guerre." },
        { type: "qcm", question: "Qui sont les Einsatzgruppen ?", choix: ["Des résistants polonais", "Des soldats américains", "Des unités mobiles allemandes qui fusillent les Juifs à l'est", "Des déportés"], reponse: 2, explication: "Les Einsatzgruppen suivent l'armée allemande en URSS à partir de juin 1941 et fusillent plus d'un million de Juifs : c'est la « Shoah par balles »." },
        { type: "vf", question: "Un centre de mise à mort comme Treblinka servait surtout à faire travailler les déportés.", reponse: false, explication: "Dans un centre de mise à mort, les déportés sont assassinés dans les chambres à gaz dès leur arrivée. Ce sont les camps de concentration qui imposent le travail forcé." },
        { type: "saisie", question: "Sur quelle ville japonaise la première bombe atomique est-elle lancée le 6 août 1945 ?", reponses: ["Hiroshima"], explication: "Hiroshima (6 août), puis Nagasaki (9 août 1945). Le Japon capitule le 2 septembre 1945." },
        { type: "qcm", question: "Quelle notion juridique nouvelle est utilisée au procès de Nuremberg ?", choix: ["Le crime de guerre civile", "Le crime contre l'humanité", "Le crime de lèse-majesté", "Le droit de veto"], reponse: 1, explication: "Le crime contre l'humanité (assassinat, extermination, déportation de populations civiles…) est défini en 1945 pour juger les dirigeants nazis." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que la Seconde Guerre mondiale est une guerre d'anéantissement.", corrige: `**Introduction** : de 1939 à 1945, la Seconde Guerre mondiale oppose l'Axe (Allemagne, Italie, Japon) aux Alliés (Royaume-Uni, URSS, États-Unis…). Elle fait plus de 50 millions de morts. C'est une **guerre d'anéantissement** : il ne s'agit plus seulement de vaincre l'ennemi mais de le détruire, y compris ses populations civiles ; l'Allemagne nazie veut même exterminer des peuples entiers. Comment cela se manifeste-t-il ?

**1. Une violence extrême contre les combattants**
Le conflit est mondial, de l'Europe au Pacifique. Sur le front de l'Est, à partir de juin 1941, l'Allemagne mène une guerre sans limites contre l'URSS : à **Stalingrad** (1942-1943), les combats se déroulent rue par rue ; des millions de prisonniers soviétiques meurent de faim.

**2. Les civils, cibles de la guerre**
Les villes sont bombardées massivement : Londres, Dresde, Tokyo. En août 1945, les États-Unis utilisent l'**arme atomique** sur **Hiroshima** et **Nagasaki**, qui fait plus de 200 000 morts d'ici la fin de 1945. L'URSS perd environ 26 millions de personnes, en majorité des civils.

**3. Le génocide des Juifs et des Tsiganes**
Les nazis veulent exterminer les Juifs d'Europe : d'abord enfermés dans des **ghettos**, ils sont fusillés par les **Einsatzgruppen** à l'est (« Shoah par balles »), puis, après la conférence de Wannsee (1942), déportés vers des **centres de mise à mort** comme **Auschwitz-Birkenau**, où ils sont gazés. Environ **6 millions de Juifs** et des centaines de milliers de Tsiganes sont assassinés.

**Conclusion** : par l'ampleur des destructions et l'extermination de peuples entiers, la Seconde Guerre mondiale est une guerre d'anéantissement. Après 1945, le procès de Nuremberg juge des **crimes contre l'humanité** et l'ONU est créée pour préserver la paix.` },
      ],
    },
    {
      id: "france-occupee",
      titre: "La France défaite et occupée : Vichy, collaboration, Résistance",
      theme: "Histoire – L'Europe, un théâtre majeur des guerres totales (1914-1945)",
      cours: `
## 1. La défaite de 1940
- En **mai-juin 1940**, l'armée allemande perce le front des Ardennes et envahit la France en six semaines : c'est la **débâcle** ; des millions de civils fuient sur les routes (l'**exode**).
- Le maréchal **Philippe Pétain**, héros de Verdun, devient chef du gouvernement et demande l'armistice. Il est signé le **22 juin 1940** à Rethondes : la France est coupée en deux, la **zone occupée** au nord et à l'ouest, la **zone libre** au sud ; l'Alsace-Moselle est annexée de fait par l'Allemagne ; près de 1,8 million de soldats français sont prisonniers.
- Le **18 juin 1940**, depuis Londres, le général **Charles de Gaulle** lance à la radio de la BBC un **appel** à continuer le combat : c'est le début de la **France libre**.

## 2. Le régime de Vichy, un régime autoritaire qui collabore
- Le **10 juillet 1940**, les parlementaires réunis à Vichy votent les **pleins pouvoirs** à Pétain. La IIIe République disparaît : Pétain devient chef de l'**État français**.
- C'est un **régime autoritaire** : plus d'élections, culte du chef, censure, opposants pourchassés. La devise « Liberté, égalité, fraternité » est remplacée par « **Travail, famille, patrie** » : c'est la **Révolution nationale**.
- C'est un régime **antisémite** : dès le **3 octobre 1940**, le **statut des Juifs** les exclut de nombreuses professions (fonction publique, enseignement…), sans que les Allemands l'aient demandé.
- **La collaboration d'État** : Pétain rencontre Hitler à **Montoire** (24 octobre 1940) et annonce entrer « dans la voie de la collaboration ». Vichy livre des matières premières, paie l'occupation, pourchasse les résistants avec la **Milice** (créée en 1943) et met en place le **STO** (Service du travail obligatoire, février 1943) qui envoie des jeunes Français travailler en Allemagne.
- **Vichy participe à la Shoah** : la police française arrête les Juifs, notamment lors de la **rafle du Vél' d'Hiv** à Paris (**16-17 juillet 1942**, environ 13 000 personnes, dont plus de 4 000 enfants). Environ **75 000 Juifs** sont déportés de France ; très peu reviennent.
- En novembre 1942, après le débarquement allié en Afrique du Nord, l'Allemagne occupe aussi la zone sud.
- Certains Français, les **collaborationnistes**, vont plus loin et souhaitent la victoire de l'Allemagne nazie.

## 3. La Résistance
- **La France libre** à Londres : de Gaulle organise les **Forces françaises libres** (FFL), qui combattent aux côtés des Alliés (à Bir Hakeim en 1942, par exemple), et rallie une partie de l'empire colonial.
- **La Résistance intérieure** : des Français de toutes origines refusent l'occupation et Vichy. Ils diffusent des **journaux clandestins** (*Combat*, *Libération*), renseignent les Alliés, cachent des Juifs et des aviateurs, sabotent les voies ferrées. Beaucoup de jeunes qui refusent le STO rejoignent les **maquis**. La répression est terrible : torture, exécutions, déportation.
- **L'unification** : **Jean Moulin**, envoyé par de Gaulle, unifie les mouvements de résistance dans le **Conseil national de la Résistance** (**CNR**), réuni pour la première fois le **27 mai 1943**. Arrêté en juin 1943, il meurt sous la torture. En mars 1944, le CNR adopte un **programme** pour la France d'après-guerre.
- Des **Justes** cachent des Juifs au péril de leur vie (au Chambon-sur-Lignon, par exemple).

## 4. La Libération (1944)
Après le débarquement de **Normandie** (6 juin 1944) et celui de **Provence** (15 août 1944), la France est libérée par les Alliés, les FFL et la Résistance (FFI). **Paris est libéré le 25 août 1944**. De Gaulle dirige le **Gouvernement provisoire de la République française** (GPRF).

> **À retenir** :
> - 18 juin 1940 : appel du général de Gaulle. 22 juin 1940 : armistice. 10 juillet 1940 : pleins pouvoirs à Pétain.
> - 1940-1944 : régime de Vichy, autoritaire, antisémite et collaborateur. Juillet 1942 : rafle du Vél' d'Hiv.
> - 1943 : Jean Moulin unifie la Résistance (CNR). 25 août 1944 : libération de Paris.
> - Vocabulaire : armistice, collaboration, Révolution nationale, STO, Milice, Résistance, maquis, France libre, Juste.
`,
      exercices: [
        { type: "saisie", question: "Quelle est la date de l'appel du général de Gaulle à la BBC ? (jour, mois, année)", reponses: ["18 juin 1940", "le 18 juin 1940", "18/06/1940", "18/6/1940"], explication: "Le 18 juin 1940, depuis Londres, de Gaulle appelle les Français à continuer le combat." },
        { type: "qcm", question: "Quelle est la devise de l'État français de Vichy ?", choix: ["Liberté, égalité, fraternité", "Un peuple, un Empire, un guide", "Travail, famille, patrie", "Paix, pain, liberté"], reponse: 2, explication: "« Travail, famille, patrie » remplace la devise républicaine : c'est la Révolution nationale de Pétain." },
        { type: "vf", question: "Le statut des Juifs d'octobre 1940 a été imposé à Vichy par les Allemands.", reponse: false, explication: "Le statut des Juifs (3 octobre 1940) est une initiative du régime de Vichy, qui est antisémite. Il exclut les Juifs de nombreuses professions." },
        { type: "saisie", question: "Quel résistant unifie les mouvements de résistance intérieure dans le CNR en 1943 ?", reponses: ["Jean Moulin", "Moulin"], explication: "Jean Moulin, envoyé par de Gaulle, préside la première réunion du Conseil national de la Résistance le 27 mai 1943. Arrêté en juin 1943, il meurt sous la torture." },
        { type: "qcm", question: "Que signifie le sigle STO, créé en 1943 ?", choix: ["Service du travail obligatoire", "Service de transport ouvrier", "Société des travailleurs organisés", "Section des troupes d'occupation"], reponse: 0, explication: "Le STO oblige des jeunes Français à aller travailler en Allemagne. Beaucoup préfèrent rejoindre les maquis." },
        { type: "qcm", question: "Qu'est-ce que la rafle du Vél' d'Hiv (juillet 1942) ?", choix: ["Une manifestation de résistants", "Un bombardement allié", "Une course cycliste interdite par les Allemands", "L'arrestation par la police française d'environ 13 000 Juifs à Paris"], reponse: 3, explication: "Les 16 et 17 juillet 1942, la police française arrête environ 13 000 Juifs, dont plus de 4 000 enfants, enfermés au Vélodrome d'Hiver puis déportés." },
        { type: "vf", question: "Après l'armistice de 1940, la France est coupée en une zone occupée et une zone libre.", reponse: true, explication: "La zone occupée (nord et ouest) est sous contrôle allemand ; la zone libre (sud) dépend de Vichy jusqu'à son occupation en novembre 1942." },
        { type: "qcm", question: "Classe dans l'ordre : libération de Paris, pleins pouvoirs à Pétain, création du CNR, rafle du Vél' d'Hiv.", choix: ["Rafle du Vél' d'Hiv, pleins pouvoirs à Pétain, libération de Paris, création du CNR", "Pleins pouvoirs à Pétain, rafle du Vél' d'Hiv, création du CNR, libération de Paris", "Création du CNR, pleins pouvoirs à Pétain, rafle du Vél' d'Hiv, libération de Paris", "Pleins pouvoirs à Pétain, création du CNR, rafle du Vél' d'Hiv, libération de Paris"], reponse: 1, explication: "Juillet 1940 (pleins pouvoirs), juillet 1942 (Vél' d'Hiv), mai 1943 (CNR), août 1944 (libération de Paris)." },
        { type: "redaction", question: "**Développement construit (brevet)** : présente le régime de Vichy et montre qu'il collabore avec l'Allemagne nazie.", corrige: `**Introduction** : en juin 1940, la France est vaincue par l'Allemagne. Le maréchal Pétain signe l'**armistice** le 22 juin 1940 et obtient les **pleins pouvoirs** le 10 juillet 1940 : la République laisse la place à l'**État français**, dont la capitale est **Vichy**. Quel est ce régime et comment collabore-t-il avec l'occupant ?

**1. Un régime autoritaire et antisémite**
Pétain concentre tous les pouvoirs ; il n'y a plus d'élections ni de Parlement. La propagande développe le **culte du chef**. La **Révolution nationale** remplace la devise républicaine par « Travail, famille, patrie ». Dès le 3 octobre 1940, le **statut des Juifs** les exclut de nombreux métiers.

**2. Une collaboration d'État**
Après l'entrevue de **Montoire** avec Hitler (octobre 1940), Pétain engage la France dans la **collaboration**. Vichy paie les frais d'occupation, livre des produits à l'Allemagne et crée en 1943 le **STO**, qui envoie des jeunes travailler en Allemagne. La **Milice** traque les résistants.

**3. La participation à la Shoah**
La police française arrête les Juifs pour les livrer aux nazis, par exemple lors de la **rafle du Vél' d'Hiv** (16-17 juillet 1942). Environ **75 000 Juifs** sont déportés de France vers les centres de mise à mort.

**Conclusion** : le régime de Vichy est une dictature qui collabore avec l'Allemagne nazie et participe à ses crimes. Face à lui, la **Résistance** et la **France libre** du général de Gaulle poursuivent le combat jusqu'à la Libération, en 1944.` },
        { type: "redaction", question: "**Analyse de document** : « Français ! J'ai rencontré, jeudi dernier, le chancelier du Reich. [...] C'est dans l'honneur et pour maintenir l'unité française [...] que j'entre aujourd'hui dans la voie de la collaboration. » (Discours radiodiffusé du maréchal Pétain, 30 octobre 1940, extrait). 1. Présente le document. 2. Quel choix Pétain annonce-t-il ? 3. Quelles formes prend ensuite ce choix ? 4. Qui refuse ce choix ?", corrige: `**1. Présentation** : c'est un **extrait d'un discours radiodiffusé** prononcé le **30 octobre 1940** par le **maréchal Pétain**, chef de l'État français (régime de Vichy). Il s'adresse à tous les Français, quelques jours après sa rencontre avec Hitler (le « chancelier du Reich ») à **Montoire**, le 24 octobre 1940.

**2. Le choix annoncé** : Pétain annonce qu'il entre « dans la **voie de la collaboration** » avec l'Allemagne nazie. Il prétend le faire « dans l'honneur » et pour l'« unité française », c'est-à-dire pour protéger le pays.

**3. Les formes de la collaboration** : livraisons de matières premières et de nourriture à l'Allemagne, paiement des frais d'occupation, **Service du travail obligatoire** (1943), chasse aux résistants par la **Milice**, arrestation et livraison des Juifs par la police française (rafle du **Vél' d'Hiv**, juillet 1942).

**4. Le refus** : le général **de Gaulle**, depuis Londres (appel du **18 juin 1940**), et la **France libre** ; les **résistants** de l'intérieur (journaux clandestins, sabotages, maquis), unifiés par **Jean Moulin** dans le CNR en 1943.` },
      ],
    },
    {
      id: "independances",
      titre: "Indépendances et construction de nouveaux États",
      theme: "Histoire – Le monde depuis 1945",
      cours: `
## Introduction
En 1945, une grande partie de l'Afrique et de l'Asie est encore colonisée par les puissances européennes (Royaume-Uni, France, Pays-Bas, Belgique, Portugal). En une trentaine d'années, la plupart de ces colonies deviennent indépendantes : c'est la **décolonisation**.

>! **Définitions** : la **décolonisation** est le processus par lequel une colonie obtient son **indépendance**, c'est-à-dire sa souveraineté (elle se gouverne elle-même). Le **tiers-monde** (expression d'Alfred Sauvy, 1952) désigne les pays pauvres, souvent anciennement colonisés, qui ne font partie ni du bloc occidental ni du bloc soviétique.

## 1. Pourquoi la décolonisation ?
- Les **colonisés** revendiquent l'égalité et la liberté : des **mouvements nationalistes** se développent (Gandhi en Inde, Hô Chi Minh en Indochine, le FLN en Algérie).
- Les métropoles sont **affaiblies** par la Seconde Guerre mondiale ; les colonies ont participé à l'effort de guerre et réclament des droits.
- Le contexte international est favorable : l'**ONU** (charte de 1945) affirme le **droit des peuples à disposer d'eux-mêmes** ; les **États-Unis** et l'**URSS** sont hostiles aux empires coloniaux.

## 2. Une indépendance négociée : l'Inde (1947)
- Le **Parti du Congrès** mène la lutte contre la domination britannique. **Gandhi** prône la **non-violence** et la désobéissance civile (marche du sel, 1930).
- Le Royaume-Uni accorde l'indépendance le **15 août 1947**, mais le territoire est partagé entre l'**Inde** (majorité hindoue, dirigée par Nehru) et le **Pakistan** (majorité musulmane). La partition provoque des violences terribles (des centaines de milliers de morts) et l'exode de plus de 10 millions de personnes.

## 3. Une indépendance par la guerre : l'Algérie (1954-1962)
- L'Algérie est française depuis 1830 ; environ un million d'Européens (les « pieds-noirs ») y vivent, à côté de près de 9 millions d'Algériens musulmans qui n'ont pas les mêmes droits.
- Le **1er novembre 1954**, le **FLN** (Front de libération nationale) déclenche l'insurrection. La France envoie le contingent (jeunes appelés du service militaire). La guerre est très violente : attentats, torture pratiquée par l'armée française, exécutions, déplacement de populations.
- La crise de mai 1958 ramène le général de Gaulle au pouvoir. Il accepte le principe de l'**autodétermination** : les Algériens pourront choisir eux-mêmes leur avenir par un vote. Les **accords d'Évian** (**18 mars 1962**) aboutissent à l'**indépendance de l'Algérie** le **5 juillet 1962**. Environ 800 000 pieds-noirs et une partie des **harkis** (Algériens ayant combattu dans l'armée française) quittent l'Algérie pour la France.
- Auparavant, la France avait perdu l'**Indochine** après la défaite de **Diên Biên Phu** (1954) ; la plupart des colonies d'Afrique subsaharienne deviennent indépendantes en **1960**, souvent sans guerre.

## 4. Construire de nouveaux États
- Les nouveaux États doivent bâtir une administration, une armée, une nation, souvent dans des **frontières héritées** de la colonisation.
- Ils restent pauvres et dépendants de leurs anciennes métropoles (on parle de **néocolonialisme**). Beaucoup connaissent des régimes autoritaires (parti unique) ou des guerres civiles.
- À la **conférence de Bandung** (Indonésie, **avril 1955**), 29 pays d'Afrique et d'Asie condamnent le colonialisme. En 1961 naît le mouvement des **non-alignés**, qui refuse de choisir entre les deux blocs de la guerre froide.

> **À retenir** :
> - 1947 : indépendance de l'Inde et du Pakistan. 1954 : défaite française de Diên Biên Phu. 1955 : conférence de Bandung.
> - 1954-1962 : guerre d'Algérie. 1962 : accords d'Évian et indépendance de l'Algérie. 1960 : indépendances en Afrique subsaharienne.
> - Vocabulaire : décolonisation, indépendance, nationalisme, non-violence, tiers-monde, non-alignement, FLN, pieds-noirs, harkis.
`,
      exercices: [
        { type: "saisie", question: "En quelle année l'Inde devient-elle indépendante ?", reponses: ["1947", "en 1947", "15 août 1947", "le 15 août 1947"], explication: "Le 15 août 1947, le Royaume-Uni accorde l'indépendance ; le territoire est partagé entre l'Inde et le Pakistan." },
        { type: "qcm", question: "Quelle méthode de lutte Gandhi défend-il ?", choix: ["La guérilla", "Le terrorisme", "La non-violence et la désobéissance civile", "L'alliance avec l'URSS"], reponse: 2, explication: "Gandhi prône la non-violence : boycott des produits britanniques, marche du sel (1930), refus d'obéir aux lois injustes." },
        { type: "vf", question: "L'Algérie obtient son indépendance en 1962, après huit ans de guerre.", reponse: true, explication: "La guerre d'Algérie dure de 1954 à 1962 ; les accords d'Évian (18 mars 1962) conduisent à l'indépendance le 5 juillet 1962." },
        { type: "qcm", question: "Que signifie le sigle FLN ?", choix: ["Forces libres du Nord", "Front de libération nationale", "Fédération des luttes nationales", "Front laïque national"], reponse: 1, explication: "Le Front de libération nationale déclenche l'insurrection algérienne le 1er novembre 1954." },
        { type: "saisie", question: "Dans quelle ville d'Indonésie se réunissent en 1955 des pays d'Afrique et d'Asie qui condamnent le colonialisme ?", reponses: ["Bandung", "Bandoeng", "à Bandung"], explication: "La conférence de Bandung (avril 1955) marque l'entrée du tiers-monde sur la scène internationale." },
        { type: "qcm", question: "Lequel de ces facteurs n'explique PAS la décolonisation ?", choix: ["Le soutien des États-Unis et de l'URSS aux empires coloniaux", "L'affaiblissement des métropoles européennes après 1945", "Le développement de mouvements nationalistes", "La charte de l'ONU et le droit des peuples à disposer d'eux-mêmes"], reponse: 0, explication: "Au contraire, les États-Unis et l'URSS sont hostiles aux empires coloniaux et encouragent la décolonisation." },
        { type: "vf", question: "Les nouveaux États indépendants deviennent tous rapidement riches et stables.", reponse: false, explication: "Beaucoup restent pauvres, dépendants de leurs anciennes métropoles, et connaissent des régimes autoritaires ou des guerres civiles." },
        { type: "qcm", question: "Qui sont les harkis ?", choix: ["Des Européens installés en Algérie", "Des soldats du FLN", "Des Indiens partisans de Gandhi", "Des Algériens qui ont combattu aux côtés de l'armée française"], reponse: 3, explication: "Les harkis sont des Algériens engagés dans l'armée française. Après 1962, beaucoup sont massacrés en Algérie ; une partie est accueillie en France, souvent dans des conditions difficiles. Les Européens d'Algérie sont appelés les pieds-noirs." },
        { type: "redaction", question: "**Développement construit (brevet)** : explique comment l'Algérie accède à l'indépendance.", corrige: `**Introduction** : colonie française depuis **1830**, l'Algérie compte en 1954 environ un million d'Européens, les « pieds-noirs », et près de 9 millions d'Algériens musulmans, qui n'ont pas les mêmes droits. Après la Seconde Guerre mondiale, le mouvement de **décolonisation** touche l'Asie puis l'Afrique : l'Inde devient indépendante en 1947 et la France perd l'Indochine en 1954. Comment l'Algérie accède-t-elle, à son tour, à l'indépendance ?

**1. Une colonie inégalitaire où naît une revendication d'indépendance**
En Algérie, les Européens dominent la vie politique et l'économie ; les Algériens musulmans subissent des inégalités politiques et économiques. Comme ailleurs dans le monde colonisé, des **nationalistes** réclament l'indépendance. Ils sont encouragés par l'affaiblissement de la France après 1945 et par la charte de l'ONU, qui affirme le **droit des peuples à disposer d'eux-mêmes**. Le **1er novembre 1954**, le **FLN** (Front de libération nationale) déclenche l'insurrection.

**2. Une guerre longue et violente (1954-1962)**
La France refuse d'abord l'indépendance : pour ses dirigeants, l'Algérie, divisée en départements, fait partie de la France. Elle envoie des centaines de milliers de soldats, dont les jeunes appelés du **contingent**. Le FLN commet des attentats ; l'armée française pratique la **torture**, par exemple pendant la bataille d'Alger (1957), et déplace des populations. La guerre divise les Français et provoque une crise politique : le 13 mai 1958, à Alger, des partisans de l'Algérie française se soulèvent, ce qui ramène le général **de Gaulle** au pouvoir et conduit à la naissance de la Ve République.

**3. Les accords d'Évian et l'indépendance**
De Gaulle comprend que la guerre ne peut pas être gagnée et accepte le principe de l'**autodétermination** : les Algériens choisiront leur avenir par un vote. Après de longues négociations avec le FLN, les **accords d'Évian** (**18 mars 1962**) mettent fin à la guerre. Les Algériens votent massivement pour l'indépendance, proclamée le **5 juillet 1962**. Environ 800 000 pieds-noirs quittent alors l'Algérie pour la France, ainsi qu'une partie des **harkis**, ces Algériens qui avaient combattu dans l'armée française ; beaucoup d'autres harkis restés en Algérie sont massacrés.

**Conclusion** : l'Algérie accède donc à l'indépendance au terme d'une guerre longue et meurtrière, contrairement à l'Inde (1947), qui l'obtient surtout par la négociation et la non-violence. Le nouvel État doit ensuite se construire, et cette guerre laisse des mémoires douloureuses, en France comme en Algérie.` },
      ],
    },
    {
      id: "guerre-froide",
      titre: "Un monde bipolaire au temps de la guerre froide",
      theme: "Histoire – Le monde depuis 1945",
      cours: `
## Introduction
Alliés contre l'Allemagne nazie, les **États-Unis** et l'**URSS** deviennent rivaux après 1945. Le monde se divise en deux **blocs** : c'est un **monde bipolaire**. De **1947 à 1991**, ils s'affrontent sans jamais se faire directement la guerre : c'est la **guerre froide**.

>! **Définition** : la **guerre froide** est un affrontement **idéologique**, **politique**, **économique** et **militaire** (indirect) entre deux superpuissances et leurs alliés. L'arme nucléaire rend une guerre directe trop dangereuse : c'est l'**équilibre de la terreur**.

## 1. Deux modèles opposés
| | Bloc de l'Ouest | Bloc de l'Est |
|---|---|---|
| Superpuissance | États-Unis | URSS |
| Modèle politique | démocratie libérale (élections libres, plusieurs partis, libertés) | démocratie populaire (parti communiste unique, pas de libertés) |
| Économie | capitalisme, libre entreprise | économie planifiée, propriété d'État |
| Alliance militaire | **OTAN** (1949) | **pacte de Varsovie** (1955) |
| Aide économique | **plan Marshall** (1947) | CAEM (1949) |

En **1946**, Churchill dénonce le **« rideau de fer »** qui coupe l'Europe en deux. En **1947**, le président Truman annonce vouloir **endiguer** le communisme (**doctrine Truman**) ; l'URSS répond par la doctrine Jdanov.

## 2. Berlin, au cœur de la guerre froide
- Après 1945, l'Allemagne et Berlin sont divisés en quatre zones d'occupation. Berlin se trouve au milieu de la zone soviétique.
- **Blocus de Berlin** (juin 1948 – mai 1949) : Staline coupe les accès terrestres à Berlin-Ouest. Les Américains organisent un **pont aérien** pour ravitailler la ville. Staline lève le blocus.
- En **1949**, deux États naissent : la **RFA** (à l'ouest, démocratie) et la **RDA** (à l'est, communiste).
- Des millions d'Allemands de l'Est fuient vers l'Ouest par Berlin. Dans la nuit du **13 août 1961**, la RDA construit le **mur de Berlin**. Il devient le symbole de la division du monde.

## 3. Des crises et des guerres « chaudes »
- **Guerre de Corée** (1950-1953) : la Corée du Nord communiste envahit le Sud ; les États-Unis (sous drapeau de l'ONU) défendent le Sud. La frontière reste sur le 38e parallèle.
- **Crise de Cuba** (**octobre 1962**) : l'URSS installe des missiles nucléaires à Cuba, près des États-Unis. Le monde frôle la guerre nucléaire. Khrouchtchev retire les missiles ; un « téléphone rouge » relie ensuite Washington et Moscou : début de la **détente**.
- **Guerre du Vietnam** (engagement américain massif de 1965 à 1973) : les États-Unis ne parviennent pas à empêcher la victoire du Nord communiste (1975).
- La rivalité touche aussi la conquête spatiale (Spoutnik soviétique en 1957, premier homme sur la Lune américain en 1969), le sport, la culture.

## 4. La fin de la guerre froide
- L'URSS s'épuise dans la course aux armements et sa guerre en Afghanistan (1979-1989). **Gorbatchev**, au pouvoir en 1985, lance des réformes.
- En **1989**, les démocraties populaires d'Europe de l'Est s'effondrent. Le **9 novembre 1989**, le **mur de Berlin tombe**. L'Allemagne est **réunifiée** le **3 octobre 1990**.
- En **décembre 1991**, l'**URSS disparaît** : la guerre froide est terminée. Les États-Unis restent la seule superpuissance.

> **À retenir** :
> - 1947 : début de la guerre froide (doctrine Truman, plan Marshall). 1948-1949 : blocus de Berlin. 1949 : OTAN, RFA et RDA.
> - 1961 : construction du mur de Berlin. 1962 : crise de Cuba.
> - 9 novembre 1989 : chute du mur. 1991 : disparition de l'URSS, fin de la guerre froide.
> - Vocabulaire : guerre froide, bloc, monde bipolaire, rideau de fer, endiguement, démocratie populaire, équilibre de la terreur, détente.
`,
      textes: {
        kennedy: `**« Ich bin ein Berliner »** — discours de John F. Kennedy, président des États-Unis, devant l'hôtel de ville de Berlin-Ouest, le 26 juin 1963 (extraits traduits de l'anglais pour l'exercice)

« Il y a beaucoup de gens dans le monde qui ne comprennent pas vraiment, ou qui disent ne pas comprendre, quel est le grand problème entre le monde libre et le monde communiste. Qu'ils viennent à Berlin ! [...]

La liberté connaît bien des difficultés, et la démocratie n'est pas parfaite. Mais nous n'avons jamais eu besoin de construire un mur pour enfermer notre peuple, pour l'empêcher de nous quitter. [...]

Tous les hommes libres, où qu'ils vivent, sont des citoyens de Berlin. C'est pourquoi, en homme libre, je suis fier de ces mots : *Ich bin ein Berliner* (je suis un Berlinois). »`,
      },
      exercices: [
        { type: "saisie", question: "En quelle année le mur de Berlin est-il construit ?", reponses: ["1961", "en 1961", "13 août 1961", "le 13 août 1961", "août 1961", "en août 1961"], explication: "Dans la nuit du 13 août 1961, la RDA construit un mur pour empêcher ses habitants de fuir vers Berlin-Ouest." },
        { type: "qcm", question: "Quelle alliance militaire rassemble les États-Unis et leurs alliés européens à partir de 1949 ?", choix: ["Le pacte de Varsovie", "L'ONU", "La CECA", "L'OTAN"], reponse: 3, explication: "L'OTAN (Organisation du traité de l'Atlantique Nord) est créée en 1949. Le pacte de Varsovie (1955) est l'alliance du bloc de l'Est." },
        { type: "vf", question: "Pendant la guerre froide, les États-Unis et l'URSS se sont fait la guerre directement à plusieurs reprises.", reponse: false, explication: "Ils ne se sont jamais affrontés directement (risque nucléaire) ; ils se sont opposés par des crises et des guerres indirectes (Corée, Vietnam)." },
        { type: "qcm", question: "Pendant le blocus de Berlin (1948-1949), comment les Occidentaux ravitaillent-ils Berlin-Ouest ?", choix: ["Par un pont aérien", "Par un tunnel", "Par bateau sur la Spree", "Ils ne la ravitaillent pas"], reponse: 0, explication: "Pendant près d'un an, des avions américains et britanniques apportent nourriture et charbon. Staline finit par lever le blocus en mai 1949." },
        { type: "saisie", question: "Sur quelle île l'URSS installe-t-elle des missiles nucléaires en 1962, provoquant une crise majeure ?", reponses: ["Cuba", "à Cuba", "l'île de Cuba", "île de Cuba", "sur l'île de Cuba"], explication: "La crise de Cuba (octobre 1962) est le moment où le monde est le plus près d'une guerre nucléaire." },
        { type: "qcm", question: "Que signifie la politique d'« endiguement » (doctrine Truman, 1947) ?", choix: ["Construire des barrages en Europe", "Envahir l'URSS", "Empêcher l'extension du communisme dans le monde", "Se retirer d'Europe"], reponse: 2, explication: "Les États-Unis veulent contenir (« endiguer ») le communisme en aidant les pays menacés, par exemple avec le plan Marshall." },
        { type: "qcm", question: "Quelle est la date de la chute du mur de Berlin ?", choix: ["13 août 1961", "9 novembre 1989", "3 octobre 1990", "25 décembre 1991"], reponse: 1, explication: "Le mur tombe le 9 novembre 1989. Le 13 août 1961 est la date de sa construction ; le 3 octobre 1990, celle de la réunification allemande ; fin décembre 1991, l'URSS disparaît." },
        { type: "vf", question: "Une démocratie populaire est un régime communiste à parti unique.", reponse: true, explication: "Malgré leur nom, les démocraties populaires d'Europe de l'Est (Pologne, RDA, Hongrie…) sont dirigées par un parti communiste unique, contrôlé par l'URSS." },
        { type: "redaction", question: "**Réponse courte** (deux ou trois phrases) : explique pourquoi Berlin est un symbole de la guerre froide.", corrige: `Après 1945, Berlin est divisée entre les vainqueurs, et Berlin-Ouest est une enclave occidentale au cœur de la zone soviétique, puis de la RDA. La ville connaît les grandes crises de la guerre froide : le **blocus** de 1948-1949, puis la construction du **mur** en **1961**, qui sépare physiquement les deux blocs. La **chute du mur**, le **9 novembre 1989**, symbolise la fin de la guerre froide.` },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que, de 1947 à 1991, le monde est divisé en deux blocs qui s'affrontent sans guerre directe.", corrige: `**Introduction** : en 1945, les États-Unis et l'URSS sortent vainqueurs de la Seconde Guerre mondiale. Mais leurs modèles s'opposent et, à partir de **1947**, ils entrent dans la **guerre froide**, jusqu'à la disparition de l'URSS en **1991**. Comment le monde se divise-t-il et comment les deux blocs s'affrontent-ils ?

**1. Deux blocs opposés**
Le bloc de l'Ouest, dirigé par les **États-Unis**, défend la démocratie libérale et le capitalisme ; il s'organise avec le **plan Marshall** (1947) et l'**OTAN** (1949). Le bloc de l'Est, dirigé par l'**URSS**, impose des démocraties populaires communistes et une économie planifiée ; il s'organise avec le **pacte de Varsovie** (1955). Un « **rideau de fer** » coupe l'Europe en deux.

**2. Des crises sans guerre directe**
L'arme nucléaire empêche une guerre directe (équilibre de la terreur). Les deux Grands s'affrontent par des crises : le **blocus de Berlin** (1948-1949), la construction du **mur de Berlin** (1961), la **crise de Cuba** (1962), où le monde frôle la guerre nucléaire. Ils s'affrontent aussi indirectement dans des guerres locales comme la **guerre de Corée** (1950-1953) ou celle du **Vietnam**, et dans la course à l'espace.

**3. La fin de la guerre froide**
Épuisée économiquement, l'URSS de Gorbatchev se réforme. En 1989, les démocraties populaires s'effondrent et le **mur de Berlin tombe le 9 novembre 1989**. L'URSS disparaît en décembre **1991**.

**Conclusion** : pendant plus de quarante ans, le monde a été **bipolaire**. Après 1991, les États-Unis restent la seule superpuissance, mais de nouveaux conflits apparaissent.` },
        { type: "qcm", texte: "kennedy", question: "**Repères** : combien de temps après la construction du mur de Berlin ce discours est-il prononcé ?", choix: ["Quelques jours", "Un peu moins de deux ans", "Environ dix ans", "Après la chute du mur"], reponse: 1, explication: "Le mur est construit dans la nuit du 13 août 1961 ; Kennedy parle le 26 juin 1963, un peu moins de deux ans plus tard. Le mur tombera le 9 novembre 1989." },
        { type: "qcm", texte: "kennedy", question: "**Présenter** : qui prononce ce discours, et où ?", choix: ["Le dirigeant soviétique Khrouchtchev, à Berlin-Est", "Le chancelier de la RFA, à Bonn", "Le président des États-Unis, John F. Kennedy, à Berlin-Ouest", "Le général de Gaulle, à Paris"], reponse: 2, explication: "John F. Kennedy, président des États-Unis, chef du bloc de l'Ouest, parle devant l'hôtel de ville de Berlin-Ouest, l'enclave occidentale située au cœur de la RDA." },
        { type: "vf", texte: "kennedy", question: "**Prélever** : selon Kennedy, le mur a été construit pour empêcher les habitants du bloc de l'Est de partir.", reponse: true, explication: "Kennedy affirme que les démocraties n'ont « jamais eu besoin de construire un mur pour enfermer [leur] peuple » : il accuse donc le camp communiste d'enfermer le sien. En effet, la RDA a construit le mur pour arrêter la fuite de ses habitants vers l'Ouest (des millions de départs depuis 1949)." },
        { type: "saisie", texte: "kennedy", question: "**Prélever** : d'après le document, à quel « monde » Kennedy oppose-t-il le « monde libre » ? (deux mots)", reponses: ["monde communiste", "le monde communiste", "communiste"], explication: "Kennedy oppose le « monde libre » (le bloc de l'Ouest, démocratique et capitaliste) au « monde communiste » (le bloc de l'Est, dirigé par l'URSS) : c'est l'opposition des deux blocs de la guerre froide." },
        { type: "qcm", texte: "kennedy", question: "**Analyser** : pourquoi Kennedy déclare-t-il « je suis un Berlinois » ?", choix: ["Parce qu'il est né à Berlin", "Pour annoncer la destruction prochaine du mur", "Pour demander l'entrée de la RDA dans l'OTAN", "Pour montrer que les États-Unis soutiennent Berlin-Ouest et ne l'abandonneront pas face au bloc de l'Est"], reponse: 3, explication: "Kennedy, né aux États-Unis, se déclare symboliquement Berlinois : il assure les habitants de Berlin-Ouest de la protection américaine et fait de la ville le symbole de la liberté face au communisme. Le mur ne tombera qu'en 1989." },
        { type: "qcm", texte: "kennedy", question: "**Prendre du recul** : quelle est une limite de ce document ?", choix: ["C'est le discours d'un des deux camps : il présente le monde libre de façon très favorable et ne donne pas le point de vue soviétique", "Il a été écrit après la chute du mur", "Il ne parle pas de Berlin", "On ne connaît pas son auteur"], reponse: 0, explication: "Un discours politique cherche à convaincre. Kennedy défend son camp ; de leur côté, les dirigeants de la RDA présentaient le mur comme un « mur de protection antifasciste ». L'intérêt du document est de montrer comment chaque bloc utilise Berlin dans sa propagande." },
        { type: "redaction", texte: "kennedy", question: "**Exercice 1 en trois temps (brevet)** : **1. Repères** : donne la date de la construction et celle de la chute du mur de Berlin. **2. Prélever** : relève deux idées par lesquelles Kennedy montre la supériorité du « monde libre ». **3. Analyser** : en t'appuyant sur le document et sur tes connaissances, explique pourquoi Berlin est un symbole de la guerre froide, puis indique un intérêt et une limite du document. Une réponse rédigée d'au moins quatre phrases est attendue.", corrige: `**1. Repères** : le mur de Berlin est construit dans la nuit du **13 août 1961** par la RDA ; il tombe le **9 novembre 1989**.

**2. Prélever** : Kennedy affirme que, si « la démocratie n'est pas parfaite », le monde libre n'a « jamais eu besoin de construire un mur pour enfermer [son] peuple ». Il fait aussi de Berlin un symbole de la liberté : « tous les hommes libres, où qu'ils vivent, sont des citoyens de Berlin ».

**3. Analyser** : après 1945, l'Allemagne et Berlin sont partagés entre les vainqueurs, et Berlin-Ouest devient une enclave occidentale au cœur de la RDA communiste. La ville est au centre des grandes crises de la guerre froide : le **blocus** de 1948-1949, puis la construction du **mur** en 1961, qui arrête la fuite des Allemands de l'Est vers l'Ouest. Le mur coupe physiquement la ville en deux et devient le symbole du **rideau de fer** qui divise l'Europe entre le bloc de l'Ouest et le bloc de l'Est. En venant à Berlin-Ouest en 1963, Kennedy montre que les États-Unis ne l'abandonneront pas ; sa chute, en 1989, annonce la fin de la guerre froide. Ce document est intéressant car il montre comment le président américain utilise Berlin pour défendre son modèle ; mais c'est un discours d'un seul camp, qui ne donne pas le point de vue soviétique : la RDA présentait le mur comme une protection contre l'Ouest.

**Méthode** : en « Prélever », cite le document entre guillemets ; en « Analyser », relie le document au contexte (dates, acteurs, vocabulaire : bloc, rideau de fer, RDA) et termine par l'intérêt et la limite du document.` },
      ],
    },
    {
      id: "projet-europeen",
      titre: "Affirmation et mise en œuvre du projet européen",
      theme: "Histoire – Le monde depuis 1945",
      cours: `
## Introduction
Après deux guerres mondiales nées en Europe, des responsables politiques veulent rendre une nouvelle guerre impossible en **unissant** les pays européens. La construction européenne commence à l'ouest, dans le contexte de la guerre froide, puis s'élargit à tout le continent après 1989.

## 1. Les débuts : réconcilier et reconstruire (1950-1957)
- Le **9 mai 1950**, le ministre français **Robert Schuman** propose de mettre en commun la production de charbon et d'acier de la France et de l'Allemagne (déclaration Schuman, préparée avec **Jean Monnet**). Le 9 mai est devenu la « journée de l'Europe ».
- En **1951**, six pays (France, RFA, Italie, Belgique, Pays-Bas, Luxembourg) créent la **CECA** (Communauté européenne du charbon et de l'acier).
- Le **25 mars 1957**, les **traités de Rome** créent la **CEE** (Communauté économique européenne), un **marché commun** où les marchandises circulent sans droits de douane, ainsi qu'**Euratom** (Communauté européenne de l'énergie atomique), pour développer ensemble le nucléaire civil.
- La **réconciliation franco-allemande** est le moteur de l'Europe : traité de l'Élysée (1963) entre de Gaulle et Adenauer.
- Les **« pères de l'Europe »** : Robert Schuman, Jean Monnet, Konrad Adenauer, Alcide De Gasperi, Paul-Henri Spaak.

## 2. Approfondir et élargir
- **Élargissements** : de 6 à 9 (1973 : Royaume-Uni, Irlande, Danemark), 10 (1981 : Grèce), 12 (1986 : Espagne, Portugal), 15 (1995 : Autriche, Finlande, Suède).
- **1979** : premières élections du **Parlement européen** au suffrage universel direct.
- **1985** : accords de **Schengen** (suppression progressive des contrôles aux frontières intérieures, appliqués à partir de 1995).
- **1992** : le **traité de Maastricht** crée l'**Union européenne** (UE) : citoyenneté européenne, projet de monnaie unique, coopération en politique étrangère.
- **Euro** : monnaie unique créée en **1999**, pièces et billets mis en circulation le **1er janvier 2002**.
- Programme **Erasmus** (1987) : des millions d'étudiants partent étudier dans un autre pays européen.

## 3. Après la guerre froide : réunir l'Europe
- Après la chute du mur (1989), les anciens pays communistes demandent à entrer dans l'UE. En **2004**, **dix pays** adhèrent (dont la Pologne, la Hongrie, les États baltes) ; puis la Roumanie et la Bulgarie (2007), la Croatie (2013).
- Le **traité de Lisbonne** (2007) réforme les institutions.

## 4. Les débats et les crises
- Des citoyens jugent l'UE trop éloignée d'eux : en **2005**, les Français et les Néerlandais rejettent par référendum le projet de Constitution européenne.
- La crise financière de 2008 et la crise de l'euro, les arrivées de migrants (2015) divisent les États.
- En **2016**, les Britanniques votent par référendum la sortie de l'UE : le **Brexit** est effectif le **31 janvier 2020**. L'UE compte depuis **27 États membres**.
- Débat permanent entre ceux qui veulent une Europe plus intégrée (fédérale) et ceux qui veulent une Europe des nations (souverainistes).

> **À retenir** :
> - 9 mai 1950 : déclaration Schuman. 1951 : CECA (6 pays). 25 mars 1957 : traités de Rome (CEE).
> - 1992 : traité de Maastricht, naissance de l'UE. 2002 : l'euro en pièces et billets. 2004 : entrée de dix nouveaux pays.
> - 2020 : sortie du Royaume-Uni (Brexit) ; l'UE compte 27 États.
> - Vocabulaire : construction européenne, marché commun, élargissement, approfondissement, espace Schengen, euro, Brexit.
`,
      exercices: [
        { type: "saisie", question: "En quelle année sont signés les traités de Rome qui créent la CEE ?", reponses: ["1957", "en 1957", "25 mars 1957", "le 25 mars 1957"], explication: "Les traités de Rome (25 mars 1957) créent la Communauté économique européenne (CEE) et Euratom (Communauté européenne de l'énergie atomique)." },
        { type: "qcm", question: "Combien de pays fondent la CECA en 1951 ?", choix: ["2", "12", "6", "27"], reponse: 2, explication: "Six pays : France, RFA, Italie, Belgique, Pays-Bas, Luxembourg." },
        { type: "qcm", question: "Quel traité crée l'Union européenne ?", choix: ["Le traité de Maastricht (1992)", "Le traité de Versailles (1919)", "Les traités de Rome (1957)", "Le traité de l'Élysée (1963)"], reponse: 0, explication: "Le traité de Maastricht (1992) transforme la CEE en Union européenne et prévoit la monnaie unique." },
        { type: "vf", question: "Les pièces et les billets en euros sont mis en circulation le 1er janvier 2002.", reponse: true, explication: "L'euro existe depuis 1999 pour les banques et les entreprises ; les pièces et billets arrivent le 1er janvier 2002." },
        { type: "saisie", question: "Quel ministre français propose le 9 mai 1950 de mettre en commun le charbon et l'acier ?", reponses: ["Robert Schuman", "Schuman"], explication: "La déclaration Schuman, préparée avec Jean Monnet, est l'acte de naissance de la construction européenne." },
        { type: "qcm", question: "Quel pays quitte l'Union européenne en 2020 ?", choix: ["La Grèce", "La Norvège", "La Suisse", "Le Royaume-Uni"], reponse: 3, explication: "Après le référendum de 2016, le Royaume-Uni quitte l'UE le 31 janvier 2020 (Brexit). La Norvège et la Suisse n'ont jamais été membres." },
        { type: "vf", question: "La construction européenne a d'abord été un projet de réconciliation et de paix entre la France et l'Allemagne.", reponse: true, explication: "Après trois guerres franco-allemandes (1870, 1914, 1939), la mise en commun du charbon et de l'acier doit rendre la guerre « matériellement impossible »." },
        { type: "qcm", question: "En 2004, l'UE accueille dix nouveaux pays. Ce sont surtout…", choix: ["des pays d'Europe du Nord", "d'anciennes démocraties populaires d'Europe centrale et orientale", "des pays d'Afrique du Nord", "des pays fondateurs"], reponse: 1, explication: "Après la fin de la guerre froide, la Pologne, la Hongrie, la Tchéquie, la Slovaquie, les pays baltes et la Slovénie entrent dans l'UE, ainsi que Chypre et Malte." },
        { type: "redaction", question: "**Développement construit (brevet)** : présente les grandes étapes de la construction européenne depuis 1950 et ses difficultés.", corrige: `**Introduction** : après la Seconde Guerre mondiale, des Européens veulent unir leurs pays pour garantir la **paix**. La construction européenne débute en 1950 et donne naissance à l'**Union européenne**. Quelles en sont les étapes et les difficultés ?

**1. Une Europe de la paix et de l'économie (1950-1957)**
Le **9 mai 1950**, **Robert Schuman** propose de mettre en commun le charbon et l'acier : la **CECA** naît en **1951** avec six pays. En **1957**, les **traités de Rome** créent la **CEE**, un marché commun. La **réconciliation franco-allemande** en est le moteur.

**2. Une Europe qui s'élargit et s'approfondit**
La communauté passe de 6 à 12 pays entre 1973 et 1986. Le **Parlement européen** est élu au suffrage universel depuis 1979. Les accords de **Schengen** (1985) suppriment peu à peu les contrôles aux frontières. Le **traité de Maastricht** (1992) crée l'**Union européenne** et la citoyenneté européenne ; l'**euro** circule depuis **2002**. Après la guerre froide, l'UE accueille en **2004** dix nouveaux pays, surtout d'anciennes démocraties populaires.

**3. Des difficultés et des débats**
Certains citoyens jugent l'UE lointaine : les Français rejettent le projet de Constitution européenne en **2005**. Les crises (crise de l'euro, crise migratoire) divisent les États. En **2020**, le **Royaume-Uni** quitte l'UE (**Brexit**), qui compte désormais 27 membres.

**Conclusion** : en soixante-dix ans, l'Europe est passée d'une communauté du charbon et de l'acier à six à une union politique et monétaire de 27 États. Elle a maintenu la paix entre ses membres mais reste traversée de débats sur son fonctionnement.` },
      ],
    },
    {
      id: "monde-apres-1989",
      titre: "Enjeux et conflits dans le monde après 1989",
      theme: "Histoire – Le monde depuis 1945",
      cours: `
## Introduction
La fin de la guerre froide (1989-1991) fait espérer un monde pacifié, organisé autour de l'**ONU** et de la démocratie. Mais de nouveaux conflits éclatent, et l'ordre mondial devient **multipolaire**.

## 1. Un « nouvel ordre mondial » ? Les États-Unis, hyperpuissance
- Après la disparition de l'URSS (1991), les États-Unis sont la seule superpuissance : on parle d'**hyperpuissance**.
- En **1991**, une coalition dirigée par les États-Unis, avec l'accord de l'ONU, chasse l'armée irakienne du **Koweït** (guerre du Golfe).
- La démocratie progresse (Europe de l'Est, Afrique du Sud, où l'**apartheid** prend fin et **Nelson Mandela** est élu président en 1994).

## 2. Des conflits nouveaux et meurtriers
- **L'ex-Yougoslavie** (1991-1995, puis le Kosovo en 1999) : la Yougoslavie éclate ; les guerres entre Serbes, Croates et Bosniaques sont accompagnées de **purification ethnique**. En juillet 1995, à **Srebrenica**, environ 8 000 hommes et garçons bosniaques musulmans sont massacrés.
- **Le génocide des Tutsi au Rwanda** (avril-juillet **1994**) : entre **800 000 et 1 million** de personnes (l'ONU avance environ 800 000), des Tutsi principalement, ainsi que des Hutu opposés au génocide, sont massacrées en trois mois. La communauté internationale n'intervient pas à temps.
- Ces conflits sont surtout des guerres **à l'intérieur des États** (guerres civiles), qui frappent d'abord les **civils**.

## 3. Le terrorisme islamiste et ses conséquences
- Le **11 septembre 2001**, des terroristes du réseau **Al-Qaïda** détournent des avions et frappent New York (tours du World Trade Center) et Washington : près de **3 000 morts**.
- Les États-Unis répondent par une « guerre contre le terrorisme » : intervention en **Afghanistan** (2001), puis guerre en **Irak** (2003), lancée sans l'accord de l'ONU et contestée (notamment par la France).
- Le terrorisme islamiste frappe aussi l'Europe (Madrid 2004, Londres 2005, Paris en janvier et le **13 novembre 2015**, Nice 2016…). L'**État islamique**, installé en Syrie et en Irak, est combattu par une coalition internationale.

## 4. Un monde multipolaire et instable
- De nouvelles puissances s'affirment : la **Chine** (deuxième économie mondiale), l'Inde, le Brésil. La **Russie** de Vladimir Poutine veut retrouver son influence : guerre en Géorgie (2008), annexion de la **Crimée** (2014), puis invasion de l'**Ukraine** (**24 février 2022**), la plus grande guerre en Europe depuis 1945.
- Le **Proche-Orient** reste une zone de conflits : conflit israélo-palestinien, guerre en Syrie à partir de 2011.
- L'ONU a du mal à agir : au Conseil de sécurité, les cinq membres permanents (États-Unis, Russie, Chine, Royaume-Uni, France) ont un **droit de veto**.
- De nouveaux enjeux mondiaux : réchauffement climatique, migrations, cyberattaques.

> **À retenir** :
> - 1991 : guerre du Golfe ; fin de l'URSS. 1991-1995 : guerres en ex-Yougoslavie (Srebrenica, 1995).
> - 1994 : génocide des Tutsi au Rwanda. 11 septembre 2001 : attentats aux États-Unis.
> - 2014 : annexion de la Crimée par la Russie. 2022 : invasion de l'Ukraine par la Russie.
> - Vocabulaire : hyperpuissance, monde multipolaire, purification ethnique, génocide, terrorisme, droit de veto.
`,
      exercices: [
        { type: "saisie", question: "En quelle année a lieu le génocide des Tutsi au Rwanda ?", reponses: ["1994", "en 1994", "avril 1994", "en avril 1994", "d'avril à juillet 1994", "avril-juillet 1994"], explication: "D'avril à juillet 1994, entre 800 000 et 1 million de personnes, en majorité des Tutsi, sont massacrées." },
        { type: "qcm", question: "Quel réseau terroriste organise les attentats du 11 septembre 2001 ?", choix: ["L'État islamique", "Le FLN", "Al-Qaïda", "Le Hamas"], reponse: 2, explication: "Les attentats du 11 septembre 2001 sont organisés par Al-Qaïda, dirigé par Oussama ben Laden. L'État islamique s'affirme plus tard, en Syrie et en Irak (années 2010)." },
        { type: "vf", question: "Après 1991, les États-Unis restent la seule superpuissance mondiale.", reponse: true, explication: "Après la disparition de l'URSS, on parle d'hyperpuissance américaine. Mais d'autres puissances, comme la Chine, s'affirment ensuite." },
        { type: "qcm", question: "Qu'est-ce que la « purification ethnique » pratiquée en ex-Yougoslavie ?", choix: ["Un programme de vaccination", "L'expulsion ou le massacre d'une population pour qu'un territoire ne soit habité que par un seul groupe", "Une politique d'écologie", "Un accord de paix"], reponse: 1, explication: "Les combattants chassent ou tuent les civils d'un autre groupe pour s'approprier un territoire. Le massacre de Srebrenica (1995) en est l'exemple le plus terrible." },
        { type: "saisie", question: "Quelle péninsule ukrainienne la Russie annexe-t-elle en 2014 ?", reponses: ["Crimée", "la Crimée"], explication: "En 2014, la Russie annexe la Crimée ; le 24 février 2022, elle envahit l'Ukraine." },
        { type: "qcm", question: "Combien de pays sont membres permanents du Conseil de sécurité de l'ONU, avec un droit de veto ?", choix: ["5", "3", "15", "27"], reponse: 0, explication: "Cinq : États-Unis, Russie, Chine, Royaume-Uni et France. Le Conseil compte 15 membres, dont 10 non permanents sans droit de veto." },
        { type: "vf", question: "La guerre en Irak de 2003 a été approuvée par le Conseil de sécurité de l'ONU et soutenue par la France.", reponse: false, explication: "Les États-Unis interviennent en Irak en 2003 sans l'accord de l'ONU ; la France s'y oppose." },
        { type: "qcm", question: "Pourquoi dit-on que le monde est devenu « multipolaire » ?", choix: ["Parce qu'il n'y a plus aucun pays puissant", "Parce que seuls les pôles Nord et Sud sont habités", "Parce que l'URSS domine le monde", "Parce que plusieurs puissances (États-Unis, Chine, UE, Russie, Inde…) se partagent l'influence"], reponse: 3, explication: "Après la courte domination américaine des années 1990, plusieurs puissances s'affirment : c'est un monde multipolaire." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que la fin de la guerre froide n'a pas apporté la paix dans le monde.", corrige: `**Introduction** : avec la chute du mur de Berlin, le **9 novembre 1989**, puis la disparition de l'URSS en décembre **1991**, la guerre froide prend fin. Beaucoup espèrent alors un monde pacifié et démocratique, organisé autour de l'**ONU**. Pourtant, de nombreux conflits éclatent dans les années qui suivent. Pourquoi peut-on dire que la fin de la guerre froide n'a pas apporté la paix ?

**1. Un espoir de paix vite déçu**
Après 1991, les États-Unis sont la seule superpuissance : on parle d'**hyperpuissance**. En **1991**, une coalition dirigée par les Américains, avec l'accord de l'ONU, libère le **Koweït** envahi par l'Irak : c'est la guerre du Golfe. La démocratie progresse en Europe de l'Est et en Afrique du Sud, où l'**apartheid** prend fin et où **Nelson Mandela** est élu président en 1994. Mais l'espoir d'un « nouvel ordre mondial » pacifique est vite déçu.

**2. Des guerres civiles et des génocides**
Les conflits se déroulent désormais surtout à l'intérieur des États et frappent d'abord les **civils**. En **ex-Yougoslavie** (1991-1995), l'éclatement du pays provoque des guerres entre Serbes, Croates et Bosniaques, accompagnées de **purification ethnique** : en juillet **1995**, à **Srebrenica**, environ 8 000 hommes et garçons bosniaques musulmans sont massacrés. Au **Rwanda**, d'avril à juillet **1994**, entre 800 000 et 1 million de personnes, en majorité des Tutsi, sont victimes d'un **génocide**. Dans les deux cas, la communauté internationale n'intervient pas à temps.

**3. Le terrorisme et le retour des guerres entre États**
Le **11 septembre 2001**, le réseau terroriste **Al-Qaïda** frappe New York et Washington : près de 3 000 morts. Les États-Unis répondent par une « guerre contre le terrorisme » : intervention en **Afghanistan** (2001), puis guerre en **Irak** (2003), lancée sans l'accord de l'ONU et contestée, notamment par la France. Le terrorisme islamiste frappe aussi l'Europe, comme à Paris le **13 novembre 2015**. Enfin, de nouvelles puissances s'affirment, comme la Chine, et la Russie de Vladimir Poutine veut retrouver son influence : elle annexe la **Crimée** en 2014, puis envahit l'**Ukraine** le **24 février 2022**, déclenchant la plus grande guerre en Europe depuis 1945.

**Conclusion** : le monde de l'après-guerre froide n'est donc pas pacifié : il est devenu **multipolaire** et instable. L'ONU, souvent paralysée par le **droit de veto** des cinq membres permanents du Conseil de sécurité, peine à maintenir la paix, alors que de nouveaux enjeux mondiaux, comme le réchauffement climatique, s'ajoutent aux conflits.` },
      ],
    },
    {
      id: "refonder-republique",
      titre: "1944-1947 : refonder la République, redéfinir la démocratie",
      theme: "Histoire – Françaises et Français dans une République repensée",
      cours: `
## Introduction
À la Libération, la France est ruinée et divisée par quatre ans d'occupation et de régime de Vichy. Il faut **rétablir la République**, mais aussi la **refonder** : les Français veulent une démocratie plus juste, qui garantisse aussi des **droits sociaux**.

## 1. Rétablir la légalité républicaine
- Le **Gouvernement provisoire de la République française** (**GPRF**), créé le **3 juin 1944** et dirigé par le général **de Gaulle**, s'installe à Paris en août 1944. Il rétablit les libertés et l'autorité de l'État, et annule les lois de Vichy.
- L'**épuration** : les collaborateurs sont jugés. D'abord des exécutions sommaires et des femmes tondues (épuration « sauvage »), puis des procès (Pétain est condamné à mort en 1945, peine transformée, on dit « commuée », en prison à vie).
- Le GPRF s'appuie sur le **programme du CNR** (adopté le **15 mars 1944**, intitulé *Les Jours heureux*), qui prévoit une démocratie politique, économique et sociale.

## 2. Une démocratie élargie : le vote des femmes
- Par une **ordonnance du 21 avril 1944**, les **femmes obtiennent le droit de vote et d'éligibilité**. Elles votent pour la première fois aux élections municipales du **29 avril 1945**, puis aux législatives d'octobre 1945, où 33 femmes sont élues députées.
- C'est la reconnaissance, notamment, de leur rôle dans la Résistance. Le suffrage devient enfin réellement **universel**.

## 3. Une démocratie sociale
- **La Sécurité sociale** (ordonnances d'**octobre 1945**) : elle protège les travailleurs et leurs familles contre les risques de la vie (maladie, accidents du travail, vieillesse, charges de famille). Le ministre communiste **Ambroise Croizat** la met en place.
- **Les nationalisations** : l'État devient propriétaire d'entreprises importantes pour reconstruire le pays et punir certains collaborateurs : **Renault** (janvier 1945), les houillères (charbon), les grandes banques, l'électricité et le gaz (**EDF-GDF**, 1946). L'État dirige la reconstruction grâce à la **planification** (Commissariat au Plan, Jean Monnet, 1946).
- Les **comités d'entreprise** donnent aux salariés un droit d'information sur la vie de l'entreprise.

## 4. La IVe République (1946)
- En octobre 1945, les Français refusent par référendum le retour à la IIIe République et élisent une assemblée chargée d'écrire une nouvelle Constitution.
- De Gaulle, en désaccord avec les partis qui veulent un pouvoir législatif fort, **démissionne en janvier 1946**.
- Après un premier projet rejeté en mai 1946, la **Constitution de la IVe République** est approuvée par **référendum en octobre 1946**. Son **préambule** ajoute aux droits de 1789 des droits sociaux : droit au travail, droit de grève, droit syndical, égalité entre les femmes et les hommes, droit à la protection de la santé, droit à l'instruction.
- C'est un **régime parlementaire** : l'Assemblée nationale domine, le président de la République a peu de pouvoirs. Les gouvernements sont instables.
- En **1947**, avec le début de la guerre froide, les ministres communistes quittent le gouvernement : l'union issue de la Résistance prend fin.

> **À retenir** :
> - 1944 : GPRF dirigé par de Gaulle ; ordonnance du 21 avril 1944 accordant le droit de vote aux femmes (premier vote en avril 1945).
> - 1945 : création de la Sécurité sociale ; nationalisations (Renault, banques, EDF-GDF en 1946).
> - 1946 : Constitution de la IVe République, dont le préambule garantit des droits sociaux.
> - Vocabulaire : GPRF, épuration, nationalisation, Sécurité sociale, État-providence, préambule, régime parlementaire.
`,
      exercices: [
        { type: "saisie", question: "En quelle année les Françaises obtiennent-elles le droit de vote ?", reponses: ["1944", "en 1944", "21 avril 1944", "le 21 avril 1944", "avril 1944", "en avril 1944"], explication: "L'ordonnance du 21 avril 1944 accorde aux femmes le droit de vote et d'éligibilité ; elles votent pour la première fois en avril 1945." },
        { type: "qcm", question: "Qui dirige le Gouvernement provisoire de la République française (GPRF) à la Libération ?", choix: ["Philippe Pétain", "Léon Blum", "Jean Moulin", "Charles de Gaulle"], reponse: 3, explication: "Le général de Gaulle dirige le GPRF jusqu'à sa démission en janvier 1946. Jean Moulin est mort en 1943." },
        { type: "vf", question: "La Sécurité sociale est créée en 1945.", reponse: true, explication: "Les ordonnances d'octobre 1945 créent la Sécurité sociale, qui protège contre la maladie, les accidents du travail, la vieillesse et aide les familles." },
        { type: "qcm", question: "Qu'est-ce qu'une nationalisation ?", choix: ["Le passage d'une entreprise privée sous la propriété de l'État", "L'attribution de la nationalité française à un étranger", "La vente d'une entreprise publique à des actionnaires privés", "L'interdiction des entreprises étrangères"], reponse: 0, explication: "En 1945-1946, l'État nationalise Renault, les houillères, les grandes banques, l'électricité et le gaz. Vendre une entreprise publique au privé s'appelle une privatisation." },
        { type: "qcm", question: "Quel document de la Résistance inspire les réformes de la Libération ?", choix: ["L'appel du 18 juin", "Le traité de Versailles", "Le programme du Conseil national de la Résistance", "La déclaration Schuman"], reponse: 2, explication: "Le programme du CNR (15 mars 1944), « Les Jours heureux », prévoit la Sécurité sociale, les nationalisations et une démocratie sociale." },
        { type: "vf", question: "Sous la IVe République, le président de la République dispose de pouvoirs très importants.", reponse: false, explication: "La IVe République est un régime parlementaire : l'Assemblée nationale domine et le président a surtout un rôle de représentation." },
        { type: "qcm", question: "Lequel de ces droits est ajouté par le préambule de la Constitution de 1946 ?", choix: ["Le droit de vote des hommes", "Le droit de grève", "La liberté d'expression", "Le droit de propriété"], reponse: 1, explication: "Le préambule de 1946 ajoute des droits sociaux (droit de grève, droit syndical, droit au travail, protection de la santé). La liberté d'expression et la propriété figurent déjà dans la Déclaration de 1789." },
        { type: "saisie", question: "Quel est le nom de la Constitution adoptée en 1946 ? Complète : la Constitution de la … République (écris le numéro en chiffres romains).", reponses: ["IVe", "IV", "IVe République", "la IVe République", "4e", "quatrième", "quatrième République", "la quatrième République", "4e République"], explication: "La IVe République dure de 1946 à 1958." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre qu'entre 1944 et 1947, la République est refondée et la démocratie élargie.", corrige: `**Introduction** : en 1944, la France est libérée après quatre ans d'occupation allemande et de régime de Vichy, qui avait supprimé la République. Le **GPRF**, dirigé par le général **de Gaulle**, veut rétablir la République mais aussi la rendre plus démocratique et plus juste. Comment ?

**1. La République rétablie**
Le GPRF rétablit les libertés et annule les lois de Vichy. Les collaborateurs sont jugés lors de l'**épuration**. En 1945, les Français refusent de revenir à la IIIe République et élisent une assemblée qui doit écrire une nouvelle Constitution.

**2. Une démocratie politique élargie aux femmes**
Par l'**ordonnance du 21 avril 1944**, les **femmes obtiennent le droit de vote** et d'éligibilité. Elles votent pour la première fois en **avril 1945** ; 33 femmes sont élues députées en octobre 1945. Le suffrage devient vraiment universel.

**3. Une démocratie sociale**
Inspiré du **programme du CNR**, le GPRF crée la **Sécurité sociale** (1945), qui protège contre la maladie et la vieillesse. Il **nationalise** des entreprises (Renault, banques, EDF-GDF) pour reconstruire le pays. Le **préambule de la Constitution de 1946** ajoute des droits sociaux : droit de grève, droit syndical, égalité femmes-hommes.

**Conclusion** : en trois ans, la République est refondée sur des bases nouvelles : vote des femmes, droits sociaux, État-providence. Mais la **IVe République**, née en 1946, est fragilisée par l'instabilité gouvernementale et la guerre froide.` },
      ],
    },
    {
      id: "cinquieme-republique",
      titre: "La Ve République, de la République gaullienne à l'alternance et à la cohabitation",
      theme: "Histoire – Françaises et Français dans une République repensée",
      cours: `
## 1. 1958 : la naissance de la Ve République
- La IVe République est affaiblie par l'instabilité des gouvernements et la **guerre d'Algérie**. Le **13 mai 1958**, à Alger, des partisans de l'Algérie française se soulèvent.
- Le **général de Gaulle** est appelé au pouvoir (président du Conseil le 1er juin 1958). Il fait rédiger une nouvelle Constitution, avec **Michel Debré**.
- La **Constitution de la Ve République** est approuvée par **référendum le 28 septembre 1958** (environ 80 % de « oui ») et promulguée le **4 octobre 1958**. De Gaulle est élu président en décembre 1958.

## 2. Les institutions : un exécutif renforcé
| Institution | Rôle |
|---|---|
| **Président de la République** | chef de l'État ; nomme le Premier ministre ; peut dissoudre l'Assemblée nationale, recourir au référendum, utiliser des pouvoirs exceptionnels (article 16) ; chef des armées |
| **Gouvernement** (Premier ministre et ministres) | « détermine et conduit la politique de la nation » ; responsable devant l'Assemblée |
| **Parlement** : Assemblée nationale et Sénat | vote les lois et le budget, contrôle le gouvernement ; l'Assemblée peut renverser le gouvernement (motion de censure) |
| **Conseil constitutionnel** | vérifie que les lois respectent la Constitution |

- En **1962**, par **référendum**, de Gaulle fait adopter l'**élection du président de la République au suffrage universel direct**. La première a lieu en **1965** (de Gaulle est réélu face à François Mitterrand).
- En 2000, le mandat présidentiel passe de 7 à **5 ans** (quinquennat), appliqué depuis 2002.

## 3. La République gaullienne (1958-1969)
- De Gaulle met fin à la guerre d'Algérie (1962), modernise l'économie et mène une politique d'**indépendance nationale** : bombe atomique française (1960), sortie du commandement intégré de l'OTAN (1966).
- Il gouverne en s'adressant directement aux Français (télévision, référendums).
- En **mai 1968**, une révolte des étudiants puis une grève générale des ouvriers contestent la société et le pouvoir. De Gaulle dissout l'Assemblée et ses partisans gagnent largement les élections de juin 1968.
- En **1969**, il perd un référendum sur la régionalisation et le Sénat, et **démissionne**.

## 4. L'alternance et la cohabitation
- Après de Gaulle, la droite reste au pouvoir avec **Georges Pompidou** (1969-1974) puis **Valéry Giscard d'Estaing** (1974-1981).
- **1981 : l'alternance**. Pour la première fois sous la Ve République, la gauche arrive au pouvoir : le socialiste **François Mitterrand** est élu président le **10 mai 1981**. Réformes : abolition de la **peine de mort** (1981, Robert Badinter), décentralisation (1982), 5e semaine de congés payés, retraite à 60 ans. L'**alternance** prouve que les institutions fonctionnent avec un président de gauche comme de droite.
- **La cohabitation** : quand la majorité de l'Assemblée nationale est opposée au président, celui-ci doit nommer un Premier ministre issu de cette majorité. Trois cohabitations : **1986-1988** (Mitterrand / Chirac), **1993-1995** (Mitterrand / Balladur), **1997-2002** (Chirac / Jospin). Le Premier ministre gouverne, le président garde un rôle important en politique étrangère et de défense.
- Présidents suivants : Jacques Chirac (1995-2007), Nicolas Sarkozy (2007-2012), François Hollande (2012-2017), Emmanuel Macron (depuis 2017).

>! **Ne confonds pas** : l'**alternance** = le pouvoir passe d'un camp politique à l'autre par les élections (1981). La **cohabitation** = un président et un Premier ministre de camps opposés gouvernent en même temps (1986).

> **À retenir** :
> - 1958 : naissance de la Ve République (Constitution approuvée par référendum le 28 septembre). 1962 : élection du président au suffrage universel direct.
> - 1968 : crise de mai. 1969 : départ de De Gaulle.
> - 1981 : alternance, élection de François Mitterrand. 1986 : première cohabitation.
> - Vocabulaire : Constitution, référendum, exécutif, législatif, suffrage universel direct, alternance, cohabitation, dissolution.
`,
      exercices: [
        { type: "saisie", question: "En quelle année la Ve République est-elle fondée ?", reponses: ["1958", "en 1958"], explication: "La Constitution de la Ve République est approuvée par référendum le 28 septembre 1958 et promulguée le 4 octobre 1958." },
        { type: "qcm", question: "Depuis la réforme de 1962, comment le président de la République est-il élu ?", choix: ["Par les députés et les sénateurs", "Par le Conseil constitutionnel", "Au suffrage universel direct", "Par le Premier ministre"], reponse: 2, explication: "Depuis le référendum de 1962, les citoyens élisent directement le président ; la première élection de ce type a lieu en 1965." },
        { type: "qcm", question: "Qu'est-ce que l'alternance politique ?", choix: ["Le passage du pouvoir d'un camp politique à l'autre par les élections", "Un président et un Premier ministre de camps opposés", "Un changement de Constitution", "Un coup d'État"], reponse: 0, explication: "En 1981, la victoire de François Mitterrand fait passer le pouvoir de la droite à la gauche : c'est l'alternance. La cohabitation, c'est un président et un Premier ministre de camps opposés." },
        { type: "vf", question: "La première cohabitation de la Ve République a lieu de 1986 à 1988, entre François Mitterrand et Jacques Chirac.", reponse: true, explication: "La droite gagne les élections législatives de 1986 : Mitterrand, président socialiste, nomme Jacques Chirac Premier ministre." },
        { type: "saisie", question: "Quel président socialiste est élu le 10 mai 1981 ?", reponses: ["François Mitterrand", "Mitterrand"], explication: "François Mitterrand (attention à l'orthographe : deux « r ») est président de 1981 à 1995." },
        { type: "qcm", question: "Quel pouvoir le président de la Ve République possède-t-il ?", choix: ["Voter les lois à la place du Parlement", "Juger les citoyens", "Renverser le Sénat", "Dissoudre l'Assemblée nationale"], reponse: 3, explication: "Le président peut dissoudre l'Assemblée nationale (de Gaulle en 1962 et 1968, par exemple). Ce sont les députés et les sénateurs qui votent les lois." },
        { type: "vf", question: "En 1981, la peine de mort est abolie en France.", reponse: true, explication: "La loi du 9 octobre 1981, défendue par le garde des Sceaux Robert Badinter, abolit la peine de mort." },
        { type: "qcm", question: "Classe dans l'ordre chronologique : première cohabitation, élection de Mitterrand, crise de mai 1968, élection du président au suffrage universel direct (première fois).", choix: ["Mai 1968, première élection du président au suffrage universel direct, élection de Mitterrand, première cohabitation", "Première élection du président au suffrage universel direct, mai 1968, élection de Mitterrand, première cohabitation", "Première élection du président au suffrage universel direct, mai 1968, première cohabitation, élection de Mitterrand", "Élection de Mitterrand, première élection du président au suffrage universel direct, mai 1968, première cohabitation"], reponse: 1, explication: "Première élection présidentielle au suffrage universel direct en 1965, crise de mai 1968, élection de Mitterrand en 1981, première cohabitation en 1986." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que les institutions de la Ve République ont su s'adapter, de la République gaullienne à l'alternance et à la cohabitation.", corrige: `**Introduction** : en **1958**, en pleine guerre d'Algérie, le général de Gaulle revient au pouvoir et fonde la **Ve République**. Ses institutions, faites pour lui, ont ensuite fonctionné avec des majorités différentes. Comment ont-elles évolué ?

**1. Une République faite pour de Gaulle (1958-1969)**
La Constitution, approuvée par référendum le **28 septembre 1958**, renforce le pouvoir exécutif : le président nomme le Premier ministre, peut dissoudre l'Assemblée et recourir au référendum. En **1962**, l'élection du président au **suffrage universel direct** renforce encore sa légitimité. De Gaulle gouverne en s'adressant directement aux Français ; après la crise de **mai 1968** et l'échec du référendum de 1969, il démissionne.

**2. L'alternance de 1981**
Après Pompidou et Giscard d'Estaing, le socialiste **François Mitterrand** est élu en **1981** : c'est la première **alternance**. La gauche, qui critiquait ces institutions, les utilise à son tour : abolition de la peine de mort, décentralisation. La Ve République montre qu'elle peut fonctionner avec un président de gauche.

**3. La cohabitation**
En **1986**, la droite gagne les législatives : Mitterrand nomme **Jacques Chirac** Premier ministre. C'est la première **cohabitation** : le Premier ministre gouverne, le président garde un rôle en politique étrangère et de défense. Il y en a deux autres (1993-1995, 1997-2002). Le quinquennat, adopté en 2000, rend ces situations plus rares.

**Conclusion** : conçue pour un président fort, la Ve République s'est adaptée à l'alternance et à la cohabitation, ce qui explique sa longévité.` },
        { type: "redaction", question: "**Réponse courte** (deux ou trois phrases) : explique ce qu'est une cohabitation et donne un exemple.", corrige: `Une **cohabitation** est une situation où le **président de la République** et la **majorité de l'Assemblée nationale** (donc le Premier ministre) appartiennent à des camps politiques opposés. Le président doit alors nommer un Premier ministre issu de cette majorité. Par exemple, de **1986 à 1988**, le président socialiste **François Mitterrand** cohabite avec le Premier ministre de droite **Jacques Chirac**.` },
      ],
    },
    {
      id: "societe-1950-1980",
      titre: "Femmes et hommes dans la société des années 1950 aux années 1980 : nouveaux enjeux sociaux et culturels, réponses politiques",
      theme: "Histoire – Françaises et Français dans une République repensée",
      cours: `
## Introduction
Entre les années 1950 et 1980, la société française change profondément : croissance économique, société de consommation, place nouvelle des femmes et des jeunes, immigration. L'État répond à ces nouveaux enjeux par des **lois**.

## 1. Les Trente Glorieuses et la société de consommation
- De 1945 à 1975 environ, la France connaît une forte **croissance économique** : l'économiste Jean Fourastié parle des **« Trente Glorieuses »**. Le chômage est très faible.
- **Baby-boom** : forte hausse des naissances après la guerre ; la population passe d'environ 40 millions d'habitants en 1946 à près de 50 millions en 1968.
- **Société de consommation** : les ménages s'équipent (réfrigérateur, machine à laver, télévision, voiture). Le premier hypermarché ouvre en 1963.
- **Exode rural** : les agriculteurs sont de moins en moins nombreux ; les villes et les banlieues grandissent (grands ensembles).
- **Immigration** : pour reconstruire et faire tourner les usines, la France fait venir des travailleurs étrangers (Italiens, Espagnols, Portugais, Algériens, Marocains). Beaucoup vivent d'abord dans des conditions difficiles (bidonvilles de Nanterre). En **1976**, le **regroupement familial** permet à leurs familles de les rejoindre.
- Le **choc pétrolier de 1973** met fin à cette période : le chômage augmente.

## 2. Une jeunesse qui s'affirme
- Les jeunes, nombreux grâce au baby-boom, ont une culture propre : musique (rock, yé-yé, émission *Salut les copains*), mode, loisirs.
- En **mai 1968**, des étudiants contestent l'autorité (à l'université, dans la famille, dans la société) ; le mouvement est suivi par une grande grève générale.
- La **majorité civile et le droit de vote passent de 21 à 18 ans** en **1974**.

## 3. Les femmes conquièrent de nouveaux droits
Les femmes ont le droit de vote depuis 1944, mais restent inégales en droit et dans les faits. Les **mouvements féministes** (comme le MLF, créé vers 1970) luttent pour l'égalité et pour le droit des femmes à disposer de leur corps.

| Date | Loi ou événement |
|---|---|
| 1965 | une femme mariée peut travailler et ouvrir un compte bancaire sans l'autorisation de son mari |
| 1967 | **loi Neuwirth** : autorisation de la contraception (pilule) |
| 1970 | l'**autorité parentale** partagée remplace la « puissance paternelle » |
| 1971 | « Manifeste des 343 » : des femmes déclarent avoir avorté (c'est alors un délit) |
| 1972 | loi sur l'égalité de rémunération entre femmes et hommes |
| 1975 | **loi Veil** : dépénalisation de l'interruption volontaire de grossesse (IVG), défendue par la ministre **Simone Veil** ; divorce par consentement mutuel |
| 1983 | loi Roudy sur l'égalité professionnelle |

- Les femmes sont de plus en plus nombreuses à faire des études et à travailler, mais les inégalités de salaires et de responsabilités demeurent.

## 4. Des réponses politiques
- Les lois accompagnent les évolutions de la société (majorité à 18 ans, loi Veil sous Giscard d'Estaing) ; d'autres réformes suivent après 1981 : abolition de la peine de mort, dépénalisation de l'homosexualité (1982), loi Roudy.
- Ces réformes sont souvent **débattues** : en 1974, Simone Veil fait face à une forte opposition à l'Assemblée nationale.

> **À retenir** :
> - 1945-1975 : Trente Glorieuses, baby-boom, société de consommation, immigration de travail.
> - 1967 : loi Neuwirth (contraception). 1974 : majorité à 18 ans. 1975 : loi Veil (IVG).
> - Vocabulaire : Trente Glorieuses, baby-boom, société de consommation, exode rural, regroupement familial, féminisme, contraception, IVG.
`,
      textes: {
        veil: `**Simone Veil devant les députés** — discours de Simone Veil, ministre de la Santé, à l'Assemblée nationale, le 26 novembre 1974 (extrait)

« Je voudrais tout d'abord vous faire partager une conviction de femme – je m'excuse de le faire devant cette Assemblée presque exclusivement composée d'hommes : aucune femme ne recourt de gaieté de cœur à l'avortement. Il suffit d'écouter les femmes. C'est toujours un drame et cela restera toujours un drame. »

*Contexte* : en 1974, l'avortement est encore un délit en France, et beaucoup de femmes avortent clandestinement, au péril de leur santé. Simone Veil présente un projet de loi qui autorise l'interruption volontaire de grossesse (IVG) dans des conditions encadrées. Après des débats très vifs, la loi est promulguée le 17 janvier 1975.`,
      },
      exercices: [
        { type: "saisie", question: "En quelle année la loi Veil dépénalise-t-elle l'IVG ?", reponses: ["1975", "en 1975"], explication: "Présentée par Simone Veil à la fin de 1974, la loi est promulguée le 17 janvier 1975." },
        { type: "qcm", question: "Comment l'économiste Jean Fourastié appelle-t-il la période de forte croissance de 1945 à 1975 ?", choix: ["La Belle Époque", "Les Années folles", "Les Trente Glorieuses", "La Grande Dépression"], reponse: 2, explication: "Les Trente Glorieuses : trente années de croissance forte, de plein emploi et d'élévation du niveau de vie." },
        { type: "vf", question: "La loi Neuwirth de 1967 autorise la contraception.", reponse: true, explication: "La loi Neuwirth (décembre 1967) autorise la pilule contraceptive." },
        { type: "qcm", question: "En 1974, la majorité civile et le droit de vote passent…", choix: ["de 25 à 21 ans", "de 21 à 18 ans", "de 18 à 16 ans", "de 20 à 18 ans"], reponse: 1, explication: "Sous Valéry Giscard d'Estaing, la loi de juillet 1974 abaisse la majorité de 21 à 18 ans." },
        { type: "saisie", question: "Comment appelle-t-on la forte hausse des naissances en France après 1945 ?", reponses: ["baby-boom", "baby boom", "le baby-boom"], explication: "Le baby-boom dure jusqu'au milieu des années 1960 et fait fortement augmenter la population." },
        { type: "qcm", question: "Quel événement met fin aux Trente Glorieuses ?", choix: ["Le choc pétrolier de 1973", "La crise de mai 1968", "La chute du mur de Berlin", "Le traité de Rome"], reponse: 0, explication: "En 1973, le prix du pétrole est multiplié par quatre : la croissance ralentit et le chômage augmente." },
        { type: "vf", question: "Avant 1965, une femme mariée devait avoir l'autorisation de son mari pour exercer une profession.", reponse: true, explication: "La loi du 13 juillet 1965 permet aux femmes mariées de travailler et d'ouvrir un compte en banque sans l'autorisation de leur mari." },
        { type: "qcm", question: "Pourquoi la France fait-elle appel à des travailleurs immigrés pendant les Trente Glorieuses ?", choix: ["Pour remplacer les soldats partis en guerre en Europe", "Parce que le chômage est très élevé", "Pour peupler les colonies", "Parce qu'elle manque de main-d'œuvre pour reconstruire et faire tourner l'industrie"], reponse: 3, explication: "La croissance forte crée un besoin de main-d'œuvre, notamment dans le bâtiment et l'industrie automobile." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que la place des femmes dans la société française évolue entre les années 1950 et les années 1980.", corrige: `**Introduction** : les Françaises ont le droit de vote depuis 1944, mais dans les années 1950, elles restent soumises à leur mari et inégales dans le travail. Entre les années 1950 et 1980, leur place change beaucoup. Comment ?

**1. Une société qui change**
Pendant les **Trente Glorieuses**, l'économie se modernise et les femmes sont de plus en plus nombreuses à faire des études et à travailler, surtout dans les services. La société de consommation (électroménager) allège en partie les tâches domestiques, encore faites surtout par les femmes.

**2. Des luttes féministes**
Des mouvements féministes, comme le **MLF** (vers 1970), réclament l'égalité et le droit des femmes à disposer de leur corps. En **1971**, le **Manifeste des 343** rassemble des femmes qui déclarent avoir avorté, ce qui est alors un délit.

**3. Des réponses politiques : de nouveaux droits**
La loi de **1965** permet aux femmes mariées de travailler sans l'accord de leur mari. La **loi Neuwirth** (**1967**) autorise la contraception. En **1970**, l'autorité parentale partagée remplace la puissance paternelle. En **1975**, la **loi Veil**, défendue par Simone Veil malgré de vives oppositions, dépénalise l'IVG. En **1983**, la loi Roudy porte sur l'égalité professionnelle.

**Conclusion** : en trente ans, les femmes obtiennent l'égalité des droits dans la famille et le travail, et la maîtrise de leur fécondité. Mais des inégalités demeurent, notamment de salaires.` },
        { type: "qcm", texte: "veil", question: "**Présenter** : quelle fonction Simone Veil occupe-t-elle quand elle prononce ce discours ?", choix: ["Présidente de la République", "Ministre de la Santé", "Députée européenne", "Présidente de l'Assemblée nationale"], reponse: 1, explication: "Simone Veil est ministre de la Santé depuis mai 1974 ; c'est à ce titre qu'elle présente le projet de loi aux députés. Elle deviendra en 1979 la première présidente du Parlement européen élu au suffrage universel direct." },
        { type: "qcm", texte: "veil", question: "**Repères** : qui est président de la République quand ce discours est prononcé ?", choix: ["Charles de Gaulle", "Georges Pompidou", "François Mitterrand", "Valéry Giscard d'Estaing"], reponse: 3, explication: "Valéry Giscard d'Estaing est élu en mai 1974. Sous sa présidence, la majorité passe à 18 ans (1974) et la loi Veil est adoptée (1975). De Gaulle a quitté le pouvoir en 1969 ; Pompidou est mort en avril 1974 ; Mitterrand est élu en 1981." },
        { type: "vf", texte: "veil", question: "**Prélever** : Simone Veil parle devant une Assemblée où les femmes sont nombreuses.", reponse: false, explication: "Elle s'adresse à une Assemblée « presque exclusivement composée d'hommes » : en 1974, seules 9 femmes siègent parmi les 490 députés." },
        { type: "qcm", texte: "veil", question: "**Analyser** : pourquoi Simone Veil s'excuse-t-elle de parler « devant cette Assemblée presque exclusivement composée d'hommes » ?", choix: ["Parce que la loi concerne d'abord les femmes, alors que ce sont presque uniquement des hommes qui vont la voter", "Parce que les femmes n'ont pas encore le droit de vote en 1974", "Parce qu'elle est opposée à son propre projet de loi", "Parce qu'elle n'a pas le droit de parler à l'Assemblée"], reponse: 0, explication: "Elle souligne avec habileté que les députés, presque tous des hommes, vont décider d'une question qui concerne la vie des femmes ; elle leur demande donc d'« écouter les femmes ». Les Françaises votent depuis 1945 (ordonnance de 1944)." },
        { type: "redaction", texte: "veil", question: "**Exercice 1 en trois temps (brevet)** : **1. Repères** : donne l'année de la loi Veil et celle de la loi Neuwirth sur la contraception. **2. Prélever** : relève deux arguments de Simone Veil en faveur de son projet de loi. **3. Analyser** : en t'appuyant sur le document et sur tes connaissances, montre que la loi Veil est une réponse politique aux revendications des femmes dans les années 1970, puis indique un intérêt et une limite du document. Une réponse rédigée d'au moins quatre phrases est attendue.", corrige: `**1. Repères** : la loi Veil, qui dépénalise l'IVG, date de **1975** (promulguée le 17 janvier 1975) ; la loi Neuwirth, qui autorise la contraception, date de **1967**.

**2. Prélever** : Simone Veil affirme d'abord qu'« aucune femme ne recourt de gaieté de cœur à l'avortement » : c'est toujours un « drame », et non un choix facile. Elle demande aussi aux députés d'« écouter les femmes », c'est-à-dire de tenir compte de leur réalité vécue, alors que l'Assemblée est « presque exclusivement composée d'hommes ».

**3. Analyser** : dans les années 1970, les **mouvements féministes**, comme le MLF, réclament l'égalité et le droit des femmes à disposer de leur corps ; en 1971, le **Manifeste des 343** rassemble des femmes qui déclarent avoir avorté alors que c'est un délit. Le pouvoir politique répond à ces revendications : après la contraception (loi Neuwirth, 1967), le gouvernement de Valéry Giscard d'Estaing fait adopter en **1975** la **loi Veil**, défendue par Simone Veil face à une forte opposition, y compris dans sa propre majorité : la loi passe grâce aux voix de nombreux députés de gauche. Cette loi fait reculer les avortements clandestins, dangereux pour la santé des femmes ; d'abord votée pour cinq ans, elle est confirmée en 1979, et la liberté de recourir à l'IVG est inscrite dans la Constitution en 2024. Ce document est intéressant car il montre les arguments d'une ministre devant une Assemblée d'hommes ; mais ce n'est qu'un court extrait, qui ne donne pas les arguments des opposants à la loi.

**Méthode** : cite le document entre guillemets pour prélever ; pour analyser, replace le document dans son contexte (féminisme, autres lois, président) et finis par l'intérêt et la limite du document.` },
      ],
    },
    {
      id: "aires-urbaines",
      titre: "Les aires urbaines, une nouvelle géographie d'une France mondialisée",
      theme: "Géographie – Dynamiques territoriales de la France contemporaine",
      cours: `
## Introduction
La France compte environ **69 millions d'habitants** (Insee, estimation au 1er janvier 2026, dont 2,3 millions dans les départements d'outre-mer). La grande majorité vit en ville ou sous l'influence d'une ville : la France est un pays **urbain**.

## 1. De l'aire urbaine à l'aire d'attraction d'une ville
>! **Définitions** :
>! - Une **aire urbaine** (ou, depuis 2020, une **aire d'attraction d'une ville** selon l'Insee) regroupe un **pôle** (la ville-centre et sa banlieue, très peuplés et riches en emplois) et une **couronne** de communes dont une partie importante des habitants travaille dans le pôle.
>! - La **banlieue** : communes urbanisées autour de la ville-centre.
>! - Le **périurbain** : espace autour de la banlieue où se mêlent lotissements, champs et forêts.
>! - Une **métropole** : grande ville qui concentre population, activités de commandement (sièges sociaux, universités, institutions) et qui rayonne loin.

- Selon l'Insee, **93 %** de la population vit dans l'une des **699 aires d'attraction des villes** (zonage de 2020).
- L'aire de **Paris** compte environ **13 millions d'habitants**, près d'un habitant sur cinq. Treize autres aires dépassent 700 000 habitants (Insee, 2020) : Lyon, Marseille-Aix-en-Provence, Lille, Toulouse, Bordeaux, Nantes, Strasbourg, Montpellier, Rennes, Grenoble, et trois aires transfrontalières dont le centre est à l'étranger (Genève-Annemasse, Luxembourg, Sarrebruck).
- Le **réseau urbain** français est dominé par Paris : c'est une **macrocéphalie** (une capitale beaucoup plus grande que les autres villes).

## 2. Des villes qui s'étalent : la périurbanisation
- Depuis les années 1970, beaucoup de familles quittent les centres pour s'installer dans des maisons individuelles à la périphérie, où le terrain est moins cher : c'est la **périurbanisation**.
- Elle est permise par la **voiture** et les routes. Conséquence : des **mobilités pendulaires** (trajets quotidiens domicile-travail), des embouteillages, de la pollution.
- L'**étalement urbain** consomme des terres agricoles et des espaces naturels (**artificialisation des sols**). La loi Climat et résilience (2021) fixe l'objectif de **zéro artificialisation nette** en 2050.
- Les périphéries accueillent aussi des **zones commerciales** et d'activités près des échangeurs autoroutiers.

## 3. Des espaces urbains inégaux
- Les **centres-villes** des grandes métropoles attirent des catégories aisées et diplômées, ce qui fait monter les prix : c'est la **gentrification** (exemple : anciens quartiers ouvriers de l'est parisien).
- Certains **quartiers de grands ensembles**, construits dans les années 1960, concentrent pauvreté et chômage : l'État les classe en **quartiers prioritaires de la politique de la ville** (QPV) pour les rénover.
- Les centres de certaines **villes moyennes** perdent des habitants et des commerces.

## 4. Des métropoles insérées dans la mondialisation
- Les grandes métropoles concentrent les activités les plus **innovantes** (recherche, numérique, finance) et sont reliées au monde par des **aéroports** internationaux et des lignes à grande vitesse (**LGV**).
- **Paris** est une **ville mondiale** : quartier d'affaires de **La Défense**, sièges sociaux de grandes entreprises, aéroport de Roissy-Charles-de-Gaulle, tourisme, organisations internationales (Unesco, OCDE).
- Les métropoles régionales (Lyon, Toulouse, Lille…) s'affirment aussi, souvent grâce à leurs universités et à leurs pôles technologiques.

> **À retenir** :
> - La France est très urbanisée : 93 % des habitants vivent dans l'aire d'attraction d'une ville.
> - Paris (13 millions d'habitants dans son aire) domine le réseau urbain ; c'est une ville mondiale.
> - La périurbanisation, liée à la voiture, provoque l'étalement urbain et des mobilités pendulaires.
> - Vocabulaire : aire urbaine (aire d'attraction d'une ville), pôle, couronne, banlieue, périurbanisation, étalement urbain, métropole, mobilité pendulaire, gentrification.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on l'extension des villes vers les campagnes environnantes, avec des lotissements de maisons individuelles ?", reponses: ["périurbanisation", "la périurbanisation", "periurbanisation", "étalement urbain", "l'étalement urbain", "etalement urbain"], explication: "La périurbanisation entraîne l'étalement urbain : les villes s'étendent sur les terres agricoles." },
        { type: "qcm", question: "Quelle part de la population française vit dans l'aire d'attraction d'une ville (Insee, 2020) ?", choix: ["Environ 25 %", "Environ 50 %", "Environ 70 %", "Environ 93 %"], reponse: 3, explication: "93 % des habitants vivent dans l'une des 699 aires d'attraction des villes : la France est un pays très urbanisé." },
        { type: "vf", question: "L'aire d'attraction de Paris rassemble environ 13 millions d'habitants.", reponse: true, explication: "Près d'un Français sur cinq vit dans l'aire de Paris, qui domine très largement le réseau urbain." },
        { type: "qcm", question: "Qu'est-ce qu'une mobilité pendulaire ?", choix: ["Un trajet quotidien entre le domicile et le lieu de travail", "Un déménagement à l'étranger", "Un voyage touristique", "Un déplacement en horloge"], reponse: 0, explication: "Chaque jour, des millions de périurbains font l'aller-retour entre leur domicile et leur travail, souvent en voiture." },
        { type: "qcm", question: "Quel moyen de transport a rendu possible la périurbanisation ?", choix: ["Le bateau", "Le vélo", "La voiture individuelle", "L'avion"], reponse: 2, explication: "La voiture permet d'habiter loin de son travail. Les périurbains en sont très dépendants." },
        { type: "saisie", question: "Comment s'appelle le grand quartier d'affaires situé à l'ouest de Paris ?", reponses: ["La Défense", "Defense", "quartier de La Défense"], explication: "La Défense rassemble des tours de bureaux et de nombreux sièges sociaux : c'est un symbole de Paris ville mondiale." },
        { type: "vf", question: "La gentrification est l'arrivée de populations aisées dans un quartier populaire, ce qui fait monter les prix des logements.", reponse: true, explication: "Exemple : certains anciens quartiers ouvriers de l'est de Paris ou de Lyon." },
        { type: "qcm", question: "Quel est un inconvénient de l'étalement urbain ?", choix: ["Il réduit la circulation automobile", "Il consomme des terres agricoles et des espaces naturels", "Il fait baisser la pollution", "Il rapproche les habitants de leur travail"], reponse: 1, explication: "L'artificialisation des sols fait disparaître champs et forêts ; c'est pourquoi la loi vise le « zéro artificialisation nette » en 2050." },
        { type: "redaction", question: "**Croquis décrit (brevet)** : tu dois réaliser le schéma « Organisation d'une aire urbaine (aire d'attraction d'une ville) ». Propose un titre et une légende organisée en deux parties, en précisant pour chaque élément le figuré (surface, point ou ligne) et sa couleur.", corrige: `**Titre** : L'organisation d'une aire d'attraction d'une ville.

**1. Un pôle urbain qui concentre habitants et emplois**
- Ville-centre (quartiers anciens, commerces, administrations, quartier d'affaires) : **surface** rouge foncé.
- Banlieue (logements collectifs, grands ensembles, zones d'activités) : **surface** rouge clair ou orange.
- Quartier d'affaires ou centre de décision : **point** noir ou étoile.

**2. Une couronne périurbaine qui dépend du pôle**
- Espace périurbain (lotissements, champs, forêts) : **surface** jaune ou hachures orange.
- Zone commerciale en périphérie : **point** violet.
- Axes de transport (autoroutes, rocade, voies ferrées) : **lignes** noires.
- Mobilités pendulaires domicile-travail : **flèches** orientées de la couronne vers le pôle.

**Méthode** : couleurs foncées pour le cœur dense, plus claires vers la périphérie ; les flèches montrent les flux ; la légende est organisée en parties qui répondent au titre.` },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que les aires urbaines organisent le territoire français et sont insérées dans la mondialisation.", corrige: `**Introduction** : avec environ 69 millions d'habitants, la France est un pays très urbanisé : **93 %** de la population vit dans une **aire d'attraction d'une ville** (Insee). Comment ces aires urbaines organisent-elles le territoire et s'insèrent-elles dans la mondialisation ?

**1. Des aires urbaines qui rassemblent la population**
Une aire urbaine se compose d'un **pôle** (ville-centre et banlieue) et d'une **couronne périurbaine**. Depuis les années 1970, grâce à la voiture, de nombreuses familles s'installent dans le périurbain : c'est la **périurbanisation**, qui provoque l'étalement urbain, l'artificialisation des sols et des **mobilités pendulaires**.

**2. Un réseau urbain hiérarchisé**
L'aire de **Paris**, avec environ **13 millions d'habitants**, domine le réseau urbain. Viennent ensuite des métropoles régionales comme **Lyon**, **Marseille-Aix**, **Lille** ou **Toulouse**, puis des villes moyennes. Les inégalités existent aussi à l'intérieur des villes : gentrification des centres, quartiers prioritaires en difficulté.

**3. Des métropoles ouvertes sur le monde**
Les grandes métropoles concentrent les activités de commandement et d'innovation et sont reliées au monde par les **aéroports** et les **LGV**. **Paris** est une **ville mondiale** : quartier d'affaires de **La Défense**, aéroport de Roissy, tourisme, organisations internationales. Toulouse s'est spécialisée dans l'aéronautique (Airbus).

**Conclusion** : les aires urbaines, dominées par Paris et les grandes métropoles, organisent le territoire français et le relient au monde ; mais leur croissance pose des problèmes d'étalement, de transport et d'inégalités.` },
      ],
    },
    {
      id: "espaces-productifs",
      titre: "Les espaces productifs et leurs évolutions",
      theme: "Géographie – Dynamiques territoriales de la France contemporaine",
      cours: `
## Introduction
Un **espace productif** est un espace où l'on produit des richesses : des produits agricoles, industriels, ou des services. Ces espaces se transforment sous l'effet de la **mondialisation** et de l'**innovation**.

## 1. Les espaces productifs agricoles
- La France est le **premier pays agricole de l'Union européenne** (en valeur de la production). Elle exporte céréales, vins, produits laitiers.
- Le nombre d'agriculteurs diminue fortement (environ 390 000 exploitations en 2020, contre plus d'un million en 1970), mais les exploitations s'agrandissent et se **modernisent** (machines, engrais, irrigation) : c'est une agriculture **productiviste**.
- Les régions se **spécialisent** : céréales dans le Bassin parisien (Beauce), élevage en Bretagne et dans les montagnes, vignobles (Bordelais, Champagne, Bourgogne).
- L'**agroalimentaire** transforme les produits agricoles (exemple : Bretagne).
- Évolutions récentes : agriculture biologique, circuits courts, labels de qualité (AOC, AOP), mais aussi difficultés (revenus faibles, concurrence internationale, sécheresses).

## 2. Les espaces productifs industriels
- L'industrie ne représente plus qu'environ **un emploi sur dix**. Les anciennes régions industrielles (Nord, Lorraine), fondées sur le charbon, l'acier, le textile, ont connu une **désindustrialisation** à partir des années 1970 : fermetures d'usines, chômage. Certaines sont reconverties (tourisme de mémoire, nouvelles activités).
- L'industrie se concentre aujourd'hui dans les **zones industrialo-portuaires** (**ZIP**) ouvertes sur le monde, comme **Dunkerque**, **Le Havre**, **Fos-sur-Mer** (près de Marseille).
- Elle se concentre aussi dans les grandes métropoles et autour des **technopôles** (associant universités, laboratoires et entreprises) : **Toulouse** (aéronautique et spatial, Airbus), **Grenoble** (micro-électronique), **Sophia Antipolis** près de Nice, et dans des **pôles de compétitivité** créés par l'État.
- Certaines entreprises **délocalisent** leur production vers des pays où les salaires sont plus bas ; l'État cherche aujourd'hui à **réindustrialiser** (exemple : usines de batteries dans les Hauts-de-France).

## 3. Les espaces productifs de services
- Le secteur **tertiaire** (commerce, transport, banque, santé, éducation, tourisme…) emploie **plus de trois actifs sur quatre**.
- Les services les plus qualifiés se concentrent dans les **métropoles**, surtout **Paris** (sièges sociaux, finance, recherche).
- Le **tourisme** : la France est la **première destination touristique du monde**, avec environ **100 millions de touristes internationaux** par an (2023-2024). Les espaces touristiques : Paris, littoraux (Côte d'Azur), montagnes (stations de ski des Alpes), espaces ruraux, sites patrimoniaux.

## 4. Des espaces connectés au monde
Les espaces productifs les plus dynamiques sont **bien reliés** : autoroutes, LGV, ports, aéroports, réseaux numériques. Les acteurs sont nombreux : **entreprises** (y compris des firmes multinationales étrangères), **État**, **collectivités territoriales** (régions, métropoles), **Union européenne** (politique agricole commune, fonds régionaux).

> **À retenir** :
> - La France est le premier pays agricole de l'UE, avec une agriculture productiviste et spécialisée.
> - Désindustrialisation des vieilles régions (Nord, Lorraine) ; l'industrie se concentre dans les ZIP, les métropoles et les technopôles.
> - Les services emploient plus de trois actifs sur quatre ; la France est la première destination touristique mondiale.
> - Vocabulaire : espace productif, agriculture productiviste, agroalimentaire, désindustrialisation, ZIP, technopôle, délocalisation, secteur tertiaire.
`,
      exercices: [
        { type: "qcm", question: "Quel secteur d'activité emploie le plus d'actifs en France ?", choix: ["Le secteur primaire (agriculture)", "Le secteur secondaire (industrie)", "Le secteur tertiaire (services)", "Ils emploient autant de personnes"], reponse: 2, explication: "Le secteur tertiaire emploie plus de trois actifs sur quatre ; l'industrie environ un sur dix ; l'agriculture beaucoup moins." },
        { type: "saisie", question: "Comment s'appelle un espace qui associe sur un même site universités, laboratoires de recherche et entreprises innovantes ? (exemple : Sophia Antipolis)", reponses: ["technopôle", "un technopôle", "technopole", "une technopole", "technopôles", "parc technologique"], explication: "Un technopôle favorise l'innovation en rapprochant recherche et entreprises." },
        { type: "vf", question: "La France est le premier pays agricole de l'Union européenne.", reponse: true, explication: "C'est la première production agricole de l'UE en valeur (céréales, vins, produits laitiers, viande)." },
        { type: "qcm", question: "Qu'est-ce qu'une zone industrialo-portuaire (ZIP) ?", choix: ["Un espace industriel installé dans un port, qui reçoit et transforme des matières premières importées", "Une zone de pêche", "Une station balnéaire", "Un quartier d'affaires"], reponse: 0, explication: "Exemples : Dunkerque (sidérurgie), Fos-sur-Mer, Le Havre (raffinage, chimie). Elles sont tournées vers les échanges mondiaux." },
        { type: "qcm", question: "Quelle ville est le grand centre de l'industrie aéronautique et spatiale française ?", choix: ["Lille", "Brest", "Strasbourg", "Toulouse"], reponse: 3, explication: "Toulouse accueille Airbus et de nombreuses entreprises du spatial : c'est un technopôle de rang mondial." },
        { type: "saisie", question: "Comment appelle-t-on le recul de l'industrie dans une région (fermetures d'usines, pertes d'emplois) ?", reponses: ["désindustrialisation", "la désindustrialisation", "desindustrialisation"], explication: "Le Nord et la Lorraine ont connu la désindustrialisation à partir des années 1970 (mines de charbon, sidérurgie, textile)." },
        { type: "vf", question: "Une délocalisation consiste à transférer une production vers un autre pays, souvent pour profiter de salaires plus bas.", reponse: true, explication: "Les délocalisations ont touché le textile, l'automobile, l'électronique ; l'État cherche aujourd'hui à réindustrialiser." },
        { type: "qcm", question: "Combien de touristes internationaux la France accueille-t-elle environ chaque année (2023-2024) ?", choix: ["10 millions", "100 millions", "40 millions", "1 milliard"], reponse: 1, explication: "Environ 100 millions : la France est la première destination touristique du monde." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que les espaces productifs français se transforment sous l'effet de la mondialisation.", corrige: `**Introduction** : un **espace productif** est un espace aménagé pour produire des richesses : des produits agricoles, des biens industriels ou des services. En France, ces espaces sont de plus en plus soumis à la **mondialisation**, qui met les territoires en concurrence mais leur ouvre aussi de nouveaux marchés. Comment les espaces productifs français se transforment-ils sous son effet ?

**1. Une agriculture modernisée et tournée vers l'exportation**
La France est le **premier pays agricole de l'Union européenne** (en valeur de la production). Le nombre d'exploitations a fortement diminué (environ 390 000 en 2020, contre plus d'un million en 1970), mais elles se sont agrandies et modernisées : c'est une agriculture **productiviste**, qui utilise machines, engrais et irrigation. Les régions se sont spécialisées : céréales de la Beauce, dans le Bassin parisien ; élevage et **agroalimentaire** en Bretagne ; vignobles du Bordelais ou de Champagne, dont les vins s'exportent dans le monde entier. Mais la concurrence internationale pèse sur les revenus : c'est pourquoi certains agriculteurs misent sur la qualité (AOP, agriculture biologique) ou sur les circuits courts.

**2. Une industrie qui se redéploie vers les littoraux et les métropoles**
À partir des années 1970, les vieilles régions industrielles du Nord et de la Lorraine, fondées sur le charbon, l'acier et le textile, ont subi la **désindustrialisation** : fermetures d'usines, chômage. Certaines entreprises ont **délocalisé** leur production vers des pays où les salaires sont plus bas. L'industrie se concentre aujourd'hui dans les **zones industrialo-portuaires** ouvertes sur le monde, comme **Dunkerque**, **Le Havre** ou **Fos-sur-Mer**, qui reçoivent et transforment des matières premières importées. Elle se développe aussi dans les **technopôles**, qui associent universités, laboratoires et entreprises : **Toulouse** pour l'aéronautique avec Airbus, **Grenoble** pour la micro-électronique, Sophia Antipolis près de Nice. L'État cherche désormais à **réindustrialiser**, par exemple avec les usines de batteries des Hauts-de-France.

**3. Des services dominants, concentrés dans les métropoles**
Le secteur **tertiaire** emploie plus de trois actifs sur quatre. Les services les plus qualifiés (sièges sociaux, finance, recherche) se concentrent dans les **métropoles**, d'abord à **Paris**, avec le quartier d'affaires de La Défense. Le **tourisme** est un autre atout : la France est la **première destination touristique du monde**, avec environ 100 millions de touristes internationaux par an, attirés par Paris, les littoraux, les montagnes et le patrimoine.

**Conclusion** : la mondialisation favorise donc les espaces productifs bien reliés au monde par les ports, les aéroports, les LGV et les réseaux numériques : métropoles, littoraux, technopôles. Elle fragilise en revanche d'autres territoires, que l'État, les régions et l'Union européenne cherchent à soutenir.` },
      ],
    },
    {
      id: "faible-densite",
      titre: "Les espaces de faible densité et leurs atouts",
      theme: "Géographie – Dynamiques territoriales de la France contemporaine",
      cours: `
## Introduction
La densité moyenne de la France métropolitaine est d'environ **120 habitants par km²**. Certains espaces sont beaucoup moins peuplés : ce sont les **espaces de faible densité** : espaces ruraux isolés, montagnes, secteurs touristiques peu urbanisés.

>! **Définitions** :
>! - La **densité** = nombre d'habitants ÷ superficie (en km²).
>! - Un **espace de faible densité** est peu peuplé (souvent moins de 30 habitants par km²) et éloigné des grandes villes.
>! - Un **espace rural** : espace où dominent les champs, les forêts, les petites communes. Selon l'Insee, les communes rurales représentent 88 % des communes et un tiers de la population.

## 1. Où sont les espaces de faible densité ?
- Une large bande de faibles densités traverse la France du nord-est (Ardennes, Meuse) au sud-ouest (Landes), en passant par le Massif central : la **diagonale des faibles densités** (parfois appelée « diagonale du vide »).
- Les **montagnes** (Alpes, Pyrénées, Massif central, Jura, Vosges, Corse) et la **Guyane** (forêt amazonienne) sont aussi peu peuplées.

## 2. Des difficultés
- **Exode rural** ancien (XIXe-XXe siècles) et **vieillissement** de la population.
- **Éloignement des services** : fermeture d'écoles, de bureaux de poste, de commerces ; manque de médecins (**déserts médicaux**) ; transports en commun rares ; couverture internet et téléphone parfois insuffisante (« zones blanches »).
- Dépendance à la **voiture**.

## 3. Des atouts et un renouveau
- **Agriculture** et **forêt** : grandes exploitations céréalières, élevage, produits de qualité (fromages AOP, comme le comté ou le roquefort), exploitation du bois (forêt des Landes).
- **Tourisme** : tourisme vert, randonnée, stations de ski en montagne, patrimoine. Les **parcs nationaux** (11 en France, comme celui des Cévennes ou des Pyrénées) et les **parcs naturels régionaux** protègent ces espaces tout en les valorisant.
- **Nouvelles fonctions** : résidences secondaires, énergies renouvelables (éoliennes, panneaux solaires).
- **Renouveau démographique** de certains espaces ruraux : des citadins s'y installent, attirés par la qualité de vie, le prix des logements, le télétravail ; des retraités s'y établissent. Mais les espaces les plus isolés continuent à perdre des habitants.
- Des **acteurs** les aident : État (maisons France Services, aides à l'installation de médecins), régions, intercommunalités, UE (politique agricole commune, fonds pour le développement rural).

>! **Exemple résolu** : le département de la Lozère compte environ 77 000 habitants pour 5 167 km². Sa densité est d'environ 77 000 ÷ 5 167 ≈ **15 habitants par km²**, huit fois moins que la moyenne métropolitaine.

> **À retenir** :
> - La diagonale des faibles densités va des Ardennes aux Landes ; les montagnes sont aussi peu peuplées.
> - Difficultés : vieillissement, éloignement des services, dépendance à la voiture.
> - Atouts : agriculture de qualité, forêt, tourisme, espaces protégés, énergies renouvelables, arrivée de nouveaux habitants.
> - Vocabulaire : densité, espace rural, espace de faible densité, exode rural, désert médical, parc national, tourisme vert, néoruraux.
`,
      textes: {
        lozere: `**Vivre en Lozère** — texte d'entraînement rédigé à partir de données de l'Insee

La Lozère, au cœur du Massif central, est le département le moins peuplé de France : environ 77 000 habitants pour 5 167 km². Pendant plus d'un siècle, l'exode rural a vidé ses villages, et la population est aujourd'hui âgée. Dans certains villages, le médecin le plus proche est à une demi-heure de route ; les écoles et les commerces ferment ; sans voiture, il est difficile de se déplacer, car les bus sont rares.

Pourtant, le département ne manque pas d'atouts. Les paysages des Cévennes, de l'Aubrac et des gorges du Tarn attirent chaque été de nombreux randonneurs. Le parc national des Cévennes, créé en 1970, protège la nature tout en aidant les éleveurs et les artisans. L'élevage fournit des fromages et une viande de qualité. Depuis quelques années, de nouveaux habitants arrivent : des familles qui télétravaillent, des retraités, des jeunes qui ouvrent un commerce ou reprennent une ferme. L'autoroute A75, en grande partie gratuite, relie le département à Clermont-Ferrand et à Montpellier, et des maisons France Services aident les habitants dans leurs démarches administratives.`,
      },
      exercices: [
        { type: "qcm", question: "Quelle est approximativement la densité moyenne de la France métropolitaine ?", choix: ["12 habitants par km²", "1 200 habitants par km²", "120 habitants par km²", "12 000 habitants par km²"], reponse: 2, explication: "Environ 66,8 millions d'habitants en métropole (sans l'outre-mer) pour environ 544 000 km² : 66 800 000 ÷ 544 000 ≈ 123 habitants par km²." },
        { type: "saisie", question: "Un territoire compte 30 000 habitants sur 1 500 km². Quelle est sa densité, en habitants par km² ?", reponses: ["20", "20 hab/km2", "20 hab/km²", "20 habitants par km2", "20 habitants par km²", "20 hab./km2", "20 hab./km²", "vingt"], explication: "Densité = 30 000 ÷ 1 500 = 20 habitants par km² : c'est un espace de faible densité." },
        { type: "vf", question: "La « diagonale des faibles densités » traverse la France du nord-est au sud-ouest.", reponse: true, explication: "Elle va des Ardennes et de la Meuse jusqu'aux Landes, en passant par la Champagne, la Bourgogne et le Massif central." },
        { type: "qcm", question: "Lequel de ces problèmes touche particulièrement les espaces de faible densité ?", choix: ["Les embouteillages permanents", "Le manque de médecins et de services", "Le prix très élevé des logements", "La surpopulation des écoles"], reponse: 1, explication: "Les déserts médicaux et la fermeture des services (écoles, postes, commerces) sont typiques des espaces ruraux isolés." },
        { type: "qcm", question: "Quel est l'un des atouts des espaces de faible densité ?", choix: ["Le tourisme vert et les paysages préservés", "La présence de nombreux sièges sociaux", "Les grands aéroports internationaux", "Les quartiers d'affaires"], reponse: 0, explication: "Paysages, randonnée, parcs naturels, patrimoine et produits de terroir attirent touristes et nouveaux habitants." },
        { type: "saisie", question: "Combien y a-t-il de parcs nationaux en France ? (écris un nombre)", reponses: ["11", "onze"], explication: "Le onzième, le parc national de Forêts (Champagne et Bourgogne), a été créé en 2019." },
        { type: "vf", question: "Tous les espaces ruraux français continuent de perdre des habitants.", reponse: false, explication: "Certains espaces ruraux, surtout proches des villes ou attractifs (littoral, sud), gagnent des habitants ; ce sont les plus isolés qui continuent à se dépeupler." },
        { type: "qcm", question: "Qu'est-ce que l'exode rural ?", choix: ["L'arrivée de citadins à la campagne", "La fermeture des parcs nationaux", "Le déplacement des troupeaux en montagne", "Le départ massif des habitants des campagnes vers les villes"], reponse: 3, explication: "Aux XIXe et XXe siècles, des millions de ruraux sont partis travailler en ville. L'inverse, l'installation de citadins à la campagne, concerne ceux qu'on appelle les néoruraux." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que les espaces de faible densité ont des difficultés mais aussi des atouts.", corrige: `**Introduction** : la France métropolitaine compte en moyenne environ 120 habitants par km², mais une partie de son territoire est beaucoup moins peuplée : la **diagonale des faibles densités**, qui va des Ardennes aux Landes en passant par le Massif central, et les **montagnes**. Dans ces **espaces de faible densité**, on compte souvent moins de 30 habitants par km² (environ 15 en Lozère). Ces espaces sont-ils condamnés au déclin, ou disposent-ils d'atouts qui leur permettent de se renouveler ?

**1. Des espaces fragiles, marqués par la déprise**
Ces espaces ont connu un fort **exode rural** aux XIXe et XXe siècles : les jeunes sont partis travailler en ville. Il en résulte une **déprise** : des terres sont abandonnées, des villages se vident et la population connaît un fort **vieillissement**. Les services ferment ou s'éloignent : écoles regroupées, bureaux de poste, commerces, et surtout médecins, si bien que l'on parle de **déserts médicaux**. Les transports en commun sont rares : les habitants dépendent de la **voiture**, et certaines zones restent mal couvertes par internet et le téléphone.

**2. Des dynamiques différentes selon les territoires**
Tous ces espaces n'évoluent pas de la même façon. Les plus isolés continuent à perdre des habitants. D'autres, au contraire, en gagnent, surtout s'ils sont proches d'une grande ville, du littoral ou situés dans le sud de la France. Des **néo-ruraux** s'y installent : des familles attirées par la qualité de vie et par des logements moins chers, des retraités, des actifs qui pratiquent le **télétravail**, des jeunes qui reprennent une ferme ou ouvrent un commerce.

**3. Des atouts valorisés par l'aménagement**
Ces espaces ont de vrais atouts. L'agriculture et la forêt y fournissent des produits de qualité : fromages AOP comme le roquefort ou le comté, bois de la forêt des Landes. Les paysages préservés favorisent le **tourisme vert** (randonnée, gîtes, sports de nature) et, en montagne, les stations de ski. Les **parcs nationaux**, comme celui des Cévennes, et les parcs naturels régionaux protègent la nature tout en soutenant les activités locales. On y installe aussi des **énergies renouvelables** (éoliennes, panneaux solaires). Enfin, les acteurs publics mènent une politique d'**aménagement** : l'État ouvre des maisons **France Services** et aide l'installation des médecins, les régions et les départements améliorent les routes et l'internet à haut débit, et l'Union européenne soutient le développement rural grâce à la **politique agricole commune**. L'autoroute A75, qui traverse le Massif central, a ainsi désenclavé la Lozère.

**Conclusion** : les espaces de faible densité ne sont donc ni « vides » ni tous semblables : certains continuent à se dépeupler, tandis que d'autres se renouvellent grâce aux néo-ruraux et au tourisme. Leurs atouts, soutenus par l'aménagement, leur donnent une place nouvelle dans le territoire français.` },
        { type: "qcm", texte: "lozere", question: "**Repères** : dans quel grand ensemble de relief se trouve la Lozère ?", choix: ["Le Massif central", "Les Alpes", "Le Bassin parisien", "Les Pyrénées"], reponse: 0, explication: "Le document situe la Lozère « au cœur du Massif central », dans le sud de la France. Les Alpes sont à l'est, les Pyrénées à la frontière espagnole ; le Bassin parisien est une grande plaine du nord." },
        { type: "qcm", texte: "lozere", question: "**Repères** : à quel grand ensemble de faibles densités la Lozère appartient-elle ?", choix: ["La dorsale européenne", "La Northern Range", "La diagonale des faibles densités", "Une zone industrialo-portuaire"], reponse: 2, explication: "La Lozère fait partie de la diagonale des faibles densités, qui va des Ardennes aux Landes en passant par le Massif central. La dorsale européenne et la Northern Range sont, au contraire, des espaces très peuplés et très actifs." },
        { type: "saisie", texte: "lozere", question: "**Calculer** : à partir des chiffres du document, calcule la densité de la Lozère, arrondie à l'unité, en habitants par km².", reponses: ["15", "15 hab/km²", "15 hab/km2", "15 habitants par km²", "15 habitants par km2", "environ 15"], explication: "Densité = 77 000 ÷ 5 167 ≈ 14,9, soit environ **15 habitants par km²**, huit fois moins que la moyenne de la France métropolitaine (environ 120)." },
        { type: "vf", texte: "lozere", question: "**Prélever** : d'après le document, plus personne ne vient s'installer en Lozère.", reponse: false, explication: "Le document indique au contraire que « de nouveaux habitants arrivent » : familles qui télétravaillent, retraités, jeunes qui ouvrent un commerce ou reprennent une ferme." },
        { type: "redaction", texte: "lozere", question: "**Exercice 1 en trois temps (brevet)** : **1. Repères** : situe la Lozère en France, en nommant le relief et le grand ensemble de faibles densités auxquels elle appartient. **2. Prélever** : relève dans le document deux difficultés et deux atouts de la Lozère. **3. Analyser** : explique en deux ou trois phrases pourquoi la Lozère est un espace de faible densité qui connaît pourtant un certain renouveau, en citant un acteur qui l'aide.", corrige: `**1. Repères** : la Lozère se trouve dans le sud de la France, au cœur du **Massif central**. Elle fait partie de la **diagonale des faibles densités**, qui traverse la France des Ardennes aux Landes.

**2. Prélever** : le document montre des **difficultés** : la population est « âgée » à cause de l'**exode rural**, et les services s'éloignent (« le médecin le plus proche est à une demi-heure de route », les écoles et les commerces ferment). Il présente aussi des **atouts** : des paysages qui attirent « de nombreux randonneurs » (Cévennes, Aubrac, gorges du Tarn) et un élevage qui fournit « des fromages et une viande de qualité ».

**3. Analyser** : avec environ 77 000 habitants pour 5 167 km², soit environ **15 habitants par km²**, la Lozère est un espace de **faible densité**, isolé et dépendant de la voiture. Pourtant, grâce au **tourisme vert**, à ses produits de qualité, au **télétravail** et à l'autoroute A75, elle attire de **nouveaux habitants**. Des acteurs l'aident : l'**État** avec les maisons **France Services**, ou le **parc national des Cévennes**, qui protège la nature tout en soutenant les éleveurs et les artisans.

**Méthode** : en « Repères », situe avec le vocabulaire du cours ; en « Prélever », cite le document entre guillemets ; en « Analyser », relie le document à tes connaissances (définitions, chiffres, acteurs). Chaque réponse est rédigée en phrases.` },
      ],
    },
    {
      id: "amenager-territoire",
      titre: "Aménager pour répondre aux inégalités croissantes entre territoires français, à toutes les échelles",
      theme: "Géographie – Pourquoi et comment aménager le territoire ?",
      cours: `
## Introduction
Les territoires français sont **inégaux** : certains sont riches, dynamiques, bien équipés (métropoles), d'autres sont en difficulté (espaces ruraux isolés, anciennes régions industrielles, quartiers en crise). L'**aménagement du territoire** cherche à réduire ces inégalités.

>! **Définition** : l'**aménagement du territoire** est l'ensemble des actions menées par les pouvoirs publics pour organiser l'espace, mieux répartir les hommes et les activités et réduire les **inégalités** entre les territoires. Objectif : la **cohésion** et l'**égalité** des territoires, dans une logique de **développement durable**.

## 1. Des inégalités à toutes les échelles
- **Échelle nationale** : les métropoles, surtout Paris et Lyon, concentrent richesses et emplois qualifiés. D'autres territoires sont fragiles : rural isolé, villes moyennes en déclin, anciennes régions industrielles (Nord, Lorraine), territoires ultramarins.
- **Échelle régionale** : contraste entre la métropole régionale et le reste de la région.
- **Échelle locale** : à l'intérieur d'une même ville, des quartiers aisés côtoient des quartiers prioritaires.
- Les inégalités concernent les revenus, le chômage, l'accès aux services (santé, transports, numérique), l'**enclavement** (difficulté d'accès).

## 2. Les acteurs de l'aménagement
| Acteur | Exemples d'actions |
|---|---|
| **État** | grands équipements (autoroutes, LGV, aéroports), programmes nationaux, Agence nationale de la cohésion des territoires (**ANCT**, créée en 2020 ; elle prend la suite du CGET, lui-même héritier de la **DATAR** créée en 1963) |
| **Collectivités territoriales** : régions (18), départements (101), communes (près de 35 000) et intercommunalités | transports régionaux (TER), lycées et collèges, routes, aménagement urbain |
| **Union européenne** | fonds européens (FEDER) pour aider les régions en retard ; coopération transfrontalière |
| **Entreprises et associations, citoyens** | investissements, projets locaux, consultations et débats publics |

Depuis les **lois de décentralisation** de 1982, les collectivités territoriales ont de plus en plus de pouvoirs.

## 3. Des politiques d'aménagement
- **Désenclaver** : réseau d'autoroutes et de **LGV** (première ligne Paris-Lyon en 1981), plan France très haut débit (fibre optique).
- **Rééquilibrer** : dans les années 1960, l'État a soutenu des « métropoles d'équilibre » face à Paris ; aujourd'hui, il aide les villes moyennes (programme **Action cœur de ville**, lancé en 2018) et les petites villes (**Petites villes de demain**, 2020).
- **Maintenir les services** : maisons **France Services**, maisons de santé.
- **Rénover les quartiers prioritaires** de la politique de la ville.
- **Aménager durablement** : transports en commun (tramways), limitation de l'étalement urbain, protection des espaces naturels.

## 4. Des aménagements discutés
Les projets d'aménagement suscitent souvent des **conflits d'usage** et des débats : opposants à un aéroport (abandon du projet de Notre-Dame-des-Landes en 2018), à une autoroute ou à un barrage, au nom de l'environnement ou des habitants. Le **débat public** permet de consulter la population.

> **À retenir** :
> - Les inégalités territoriales existent à toutes les échelles (nationale, régionale, locale).
> - Aménager, c'est agir pour réduire ces inégalités : désenclaver, équiper, rééquilibrer, maintenir les services.
> - Acteurs : État (ANCT), collectivités territoriales (décentralisation de 1982), Union européenne (FEDER), entreprises, citoyens.
> - Vocabulaire : aménagement du territoire, inégalités territoriales, enclavement, désenclavement, décentralisation, collectivité territoriale, acteur.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on l'ensemble des actions des pouvoirs publics pour mieux organiser l'espace et réduire les inégalités entre territoires ?", reponses: ["aménagement du territoire", "l'aménagement du territoire", "amenagement du territoire", "aménagement", "l'aménagement"], explication: "L'aménagement du territoire vise la cohésion des territoires." },
        { type: "qcm", question: "Lequel de ces acteurs est une collectivité territoriale ?", choix: ["L'Union européenne", "L'ONU", "Une entreprise multinationale", "La région"], reponse: 3, explication: "Régions, départements et communes sont des collectivités territoriales : elles sont administrées par des élus locaux." },
        { type: "vf", question: "L'Union européenne participe à l'aménagement du territoire français grâce à des fonds comme le FEDER.", reponse: true, explication: "Le Fonds européen de développement régional finance des projets dans les régions, en particulier les plus fragiles." },
        { type: "qcm", question: "Que signifie « désenclaver » un territoire ?", choix: ["Améliorer son accessibilité grâce aux transports et aux réseaux", "Le protéger par une clôture", "Le vider de ses habitants", "Le rattacher à un autre pays"], reponse: 0, explication: "Un territoire enclavé est difficile d'accès ; on le désenclave par des routes, des voies ferrées, des liaisons aériennes, l'internet à haut débit." },
        { type: "saisie", question: "En quelle année sont votées les premières grandes lois de décentralisation ?", reponses: ["1982", "en 1982"], explication: "Les lois Defferre de 1982 donnent plus de pouvoirs aux collectivités territoriales." },
        { type: "qcm", question: "Quelle agence de l'État est chargée depuis 2020 de la cohésion des territoires ?", choix: ["La SNCF", "L'Insee", "L'ANCT", "La BCE"], reponse: 2, explication: "L'Agence nationale de la cohésion des territoires (ANCT) remplace en 2020 le CGET (Commissariat général à l'égalité des territoires), qui avait lui-même remplacé en 2014 la DATAR, créée en 1963." },
        { type: "vf", question: "Les inégalités territoriales n'existent qu'entre les régions ; à l'intérieur d'une ville, tous les quartiers sont semblables.", reponse: false, explication: "Les inégalités existent à toutes les échelles : dans une même ville, quartiers aisés et quartiers prioritaires se côtoient." },
        { type: "qcm", question: "Quel programme de l'État aide depuis 2018 les villes moyennes à revitaliser leur centre ?", choix: ["Plan Marshall", "Action cœur de ville", "Erasmus", "Schengen"], reponse: 1, explication: "Action cœur de ville aide les villes moyennes (rénovation des logements, commerces, espaces publics)." },
        { type: "redaction", question: "**Développement construit (brevet)** : explique pourquoi et comment les acteurs publics aménagent le territoire français.", corrige: `**Introduction** : le territoire français est marqué par de fortes **inégalités** : les grandes métropoles concentrent les richesses, alors que d'autres espaces sont en difficulté. L'**aménagement du territoire** cherche à les réduire. Pourquoi et comment ?

**1. Pourquoi aménager ? Des inégalités à toutes les échelles**
À l'échelle nationale, Paris et les métropoles concentrent les emplois qualifiés, tandis que des espaces ruraux isolés, d'anciennes régions industrielles (Nord, Lorraine) et les territoires ultramarins sont fragiles. À l'échelle locale, dans une même ville, des **quartiers prioritaires** concentrent chômage et pauvreté. Certains territoires sont **enclavés** ou manquent de services (déserts médicaux).

**2. Qui aménage ?**
L'**État** construit les grands équipements et pilote des programmes par l'**ANCT**. Depuis la **décentralisation** de 1982, les **collectivités territoriales** (régions, départements, communes) ont un grand rôle : TER, collèges, routes. L'**Union européenne** finance des projets avec le **FEDER**. Les entreprises et les citoyens participent aussi, notamment par le débat public.

**3. Comment ?**
On **désenclave** (LGV, autoroutes, fibre optique), on **maintient les services** (maisons France Services, maisons de santé), on soutient les villes moyennes (**Action cœur de ville**) et on rénove les quartiers prioritaires. Ces projets doivent respecter le **développement durable** et suscitent parfois des contestations (abandon de l'aéroport de Notre-Dame-des-Landes en 2018).

**Conclusion** : l'aménagement du territoire, mené par des acteurs multiples, vise une France plus solidaire ; mais réduire les inégalités reste un défi permanent.` },
        { type: "redaction", question: "**Croquis décrit (brevet)** : tu dois réaliser le croquis « Des inégalités territoriales en France métropolitaine et les aménagements pour les réduire ». Propose un titre et une légende organisée en trois parties, en précisant pour chaque élément le figuré (surface, point ou ligne) et sa couleur.", corrige: `**Titre** : Des territoires français inégaux, que les acteurs publics aménagent pour réduire les écarts.

**1. Des territoires dynamiques**
- Région parisienne, qui concentre richesses et emplois qualifiés : **surface** rouge foncé.
- Grandes métropoles régionales (Lyon, Marseille, Toulouse, Lille, Bordeaux, Nantes…) : **points** rouges, de taille selon leur importance.
- Littoraux attractifs (façade atlantique, littoral méditerranéen) : **surface** orange.

**2. Des territoires en difficulté**
- Diagonale des faibles densités (des Ardennes aux Landes, Massif central) : **surface** jaune pâle.
- Anciennes régions industrielles en reconversion (Nord, Lorraine) : **hachures** grises.
- Quartiers prioritaires des grandes villes : on ne peut pas les montrer à cette échelle ; on le signale dans une phrase sous la légende ou avec un **encadré**.

**3. Des aménagements pour réduire les inégalités**
- Lignes à grande vitesse (LGV) au départ de Paris : **lignes** rouges épaisses.
- Autoroutes de désenclavement, comme l'A75 dans le Massif central : **lignes** noires.
- Villes moyennes aidées par le programme Action cœur de ville : petits **carrés** verts.
- Aides de l'Union européenne aux régions (FEDER) : on peut l'indiquer par un **sigle** ou une note sous la légende.

**Méthode** : la légende suit le raisonnement du titre (les inégalités, puis les réponses) ; chaque figuré de la légende doit apparaître sur le croquis, et les noms de lieux s'écrivent à l'horizontale.` },
        { type: "qcm", question: "**Croquis** : quel figuré choisis-tu pour représenter la diagonale des faibles densités sur un croquis de la France ?", choix: ["Une flèche rouge", "Une étoile noire", "Une surface de couleur claire", "Un trait épais bleu"], reponse: 2, explication: "La diagonale des faibles densités est une zone : on la représente par un figuré de surface. Une couleur claire indique une faible intensité (peu d'habitants), à l'inverse des couleurs foncées réservées aux espaces dynamiques." },
      ],
    },
    {
      id: "territoires-ultramarins",
      titre: "Les territoires ultramarins français : une problématique spécifique",
      theme: "Géographie – Pourquoi et comment aménager le territoire ?",
      cours: `
## Introduction
La France n'est pas seulement en Europe : elle possède des **territoires ultramarins** (d'outre-mer) dans les océans Atlantique, Indien et Pacifique. Héritages de la colonisation, ils font partie de la République et présentent des **défis particuliers** d'aménagement.

## 1. Des territoires variés, dispersés sur tous les océans
- **Cinq départements et régions d'outre-mer (DROM)** : la **Guadeloupe**, la **Martinique** (Antilles), la **Guyane** (Amérique du Sud), **La Réunion** et **Mayotte** (océan Indien). Ils comptent environ **2,3 millions d'habitants** (Insee, 2026). Mayotte est devenue un département en 2011.
- Des **collectivités d'outre-mer** (COM) avec plus d'autonomie : Polynésie française, Saint-Pierre-et-Miquelon, Wallis-et-Futuna, Saint-Martin, Saint-Barthélemy ; la **Nouvelle-Calédonie** a un statut particulier.
- Les **Terres australes et antarctiques françaises** (TAAF), sans population permanente.

## 2. Des atouts pour la France
- Grâce à eux, la France possède la **deuxième zone économique exclusive (ZEE) du monde** (plus de 10 millions de km², dont plus de 95 % outre-mer), riche en ressources (pêche, ressources minérales).
- Une présence dans toutes les régions du monde, des bases militaires, un rayonnement culturel.
- Le **Centre spatial guyanais** de **Kourou** lance les fusées européennes Ariane.
- Une biodiversité exceptionnelle (forêt amazonienne en Guyane, récifs coralliens, volcans à La Réunion), un fort potentiel **touristique**.

## 3. Des contraintes et des difficultés
- **Éloignement** de la métropole (Paris – La Réunion : environ 9 400 km) et **insularité** (sauf la Guyane), qui renchérissent les transports : on parle de **vie chère**.
- **Risques naturels** forts : cyclones (le cyclone **Chido** a dévasté Mayotte en décembre 2024), séismes et éruptions volcaniques (Antilles, La Réunion), montée du niveau de la mer.
- **Difficultés économiques et sociales** : chômage nettement plus élevé qu'en métropole, surtout chez les jeunes ; pauvreté (à Mayotte, plus des trois quarts des habitants vivaient sous le seuil de pauvreté national en 2018, selon l'Insee) ; économie dépendante des importations, des aides publiques et du tourisme.
- Croissance démographique forte en Guyane et à Mayotte (immigration venue des pays voisins), vieillissement aux Antilles.
- Des problèmes environnementaux : pollution des sols au **chlordécone** (pesticide) aux Antilles, accès à l'eau potable difficile à Mayotte.

## 4. Aménager les territoires ultramarins
- **État** : aides, construction de logements, d'hôpitaux, d'écoles ; politique de « continuité territoriale » (aides aux billets d'avion).
- **Union européenne** : les DROM et Saint-Martin sont des **régions ultrapériphériques** (**RUP**) de l'UE : elles bénéficient de fonds européens importants.
- **Collectivités** : routes (nouvelle route du Littoral à La Réunion), transports, développement du tourisme.
- Enjeu : un développement **durable**, adapté aux risques et ouvert sur les pays voisins (coopération régionale).

> **À retenir** :
> - 5 DROM : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte (environ 2,3 millions d'habitants).
> - Atouts : deuxième ZEE du monde, Kourou, biodiversité, tourisme.
> - Contraintes : éloignement, insularité, risques naturels, chômage et vie chère.
> - Aménagements par l'État, les collectivités et l'UE (RUP).
> - Vocabulaire : ultramarin, DROM, COM, ZEE, insularité, région ultrapériphérique, continuité territoriale.
`,
      textes: {
        reunion: `**La Réunion, une île française de l'océan Indien** — texte d'entraînement rédigé à partir de données de l'Insee

Située dans l'océan Indien, à l'est de Madagascar et à environ 9 400 km de Paris, La Réunion est un département et région d'outre-mer de plus de 900 000 habitants (Insee, 2026). L'intérieur de l'île est occupé par des montagnes volcaniques : le Piton des Neiges, un ancien volcan, et le Piton de la Fournaise, l'un des volcans les plus actifs du monde. La population et les activités se concentrent donc sur une étroite bande littorale, autour de villes comme Saint-Denis, Saint-Paul et Saint-Pierre, où les routes sont souvent embouteillées.

L'île ne manque pas d'atouts : ses paysages de « pitons, cirques et remparts », inscrits au patrimoine mondial de l'Unesco en 2010 et protégés par un parc national, attirent les randonneurs ; la canne à sucre reste la principale culture. Mais La Réunion connaît aussi de grandes difficultés : en 2024, 17 % des actifs sont au chômage, plus de deux fois plus qu'en métropole ; les produits importés par bateau coûtent plus cher ; les cyclones et les éboulements menacent régulièrement les habitants. Pour y faire face, la Région construit la nouvelle route du Littoral, qui passe en partie au-dessus de la mer pour éviter les chutes de pierres de la falaise (une partie est ouverte, le dernier tronçon doit être achevé vers 2030) ; l'État et l'Union européenne, qui considère La Réunion comme une région ultrapériphérique, financent logements, écoles et équipements.`,
      },
      exercices: [
        { type: "qcm", question: "Lequel de ces territoires n'est PAS un département et région d'outre-mer (DROM) ?", choix: ["La Guadeloupe", "La Réunion", "La Polynésie française", "Mayotte"], reponse: 2, explication: "La Polynésie française est une collectivité d'outre-mer (COM). Les 5 DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte." },
        { type: "saisie", question: "Dans quelle ville de Guyane se trouve le Centre spatial d'où partent les fusées Ariane ?", reponses: ["Kourou", "à Kourou"], explication: "Le Centre spatial guyanais de Kourou bénéficie de sa position proche de l'équateur." },
        { type: "vf", question: "Grâce à ses territoires ultramarins, la France possède la deuxième zone économique exclusive du monde.", reponse: true, explication: "Plus de 10 millions de km², dont l'essentiel autour des territoires d'outre-mer, juste derrière les États-Unis." },
        { type: "qcm", question: "Quelle contrainte touche la plupart des territoires ultramarins ?", choix: ["L'insularité et l'éloignement de la métropole", "Le froid polaire", "L'absence totale de risques naturels", "Une population très âgée partout"], reponse: 0, explication: "Ce sont presque tous des îles (sauf la Guyane), éloignées de Paris de plusieurs milliers de kilomètres, ce qui rend les produits plus chers." },
        { type: "saisie", question: "Combien y a-t-il de départements et régions d'outre-mer (DROM) ? (écris un nombre)", reponses: ["5", "cinq"], explication: "Guadeloupe, Martinique, Guyane, La Réunion et Mayotte." },
        { type: "qcm", question: "Comment l'Union européenne appelle-t-elle les DROM, qui bénéficient d'aides spécifiques ?", choix: ["Des pays candidats", "Des États membres", "Des zones franches", "Des régions ultrapériphériques (RUP)"], reponse: 3, explication: "Les DROM et Saint-Martin sont des régions ultrapériphériques : elles font partie de l'UE et reçoivent des fonds européens." },
        { type: "vf", question: "Le chômage est plus faible dans les DROM qu'en France métropolitaine.", reponse: false, explication: "C'est l'inverse : le chômage y est nettement plus élevé, surtout chez les jeunes." },
        { type: "qcm", question: "Quel risque naturel a dévasté Mayotte en décembre 2024 ?", choix: ["Un séisme", "Un cyclone", "Une avalanche", "Une sécheresse"], reponse: 1, explication: "Le cyclone Chido a frappé Mayotte le 14 décembre 2024, détruisant de nombreux habitats précaires." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que les territoires ultramarins sont des atouts pour la France mais qu'ils doivent faire face à des contraintes spécifiques.", corrige: `**Introduction** : la France possède des territoires ultramarins dans les océans Atlantique, Indien et Pacifique, héritages de la colonisation. Parmi eux, cinq **départements et régions d'outre-mer** (DROM) : la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte, qui comptent environ 2,3 millions d'habitants. Ces territoires sont des atouts pour la France, mais ils doivent faire face à des contraintes particulières. Lesquelles, et comment les aménage-t-on ?

**1. Des atouts pour la France**
Grâce à eux, la France est présente dans plusieurs régions du monde et possède la **deuxième zone économique exclusive (ZEE) du monde**, plus de 10 millions de km², riche en ressources marines (pêche, ressources minérales). Ils accueillent des bases militaires et renforcent le rayonnement de la France. En Guyane, près de l'équateur, le **Centre spatial de Kourou** lance les fusées européennes Ariane. Leur biodiversité exceptionnelle (forêt amazonienne, récifs coralliens, volcan du Piton de la Fournaise à La Réunion) et leurs paysages attirent les **touristes**.

**2. Des contraintes spécifiques**
Ces territoires sont très **éloignés** de la métropole (environ 9 400 km entre Paris et La Réunion) et presque tous **insulaires**, sauf la Guyane. Les produits importés y coûtent donc plus cher : on parle de **vie chère**. Ils sont exposés à des **risques naturels** majeurs : cyclones, comme Chido qui a dévasté Mayotte en décembre 2024, séismes et éruptions volcaniques aux Antilles et à La Réunion. Les difficultés sociales sont fortes : le **chômage** y est bien plus élevé qu'en métropole, surtout chez les jeunes, et Mayotte est le département le plus pauvre de France. La population augmente vite en Guyane et à Mayotte, alors qu'elle vieillit aux Antilles. S'y ajoutent des problèmes environnementaux, comme la pollution des sols au chlordécone aux Antilles.

**3. Des aménagements spécifiques**
L'**État** finance des logements, des hôpitaux et des écoles, et aide les habitants à se rendre en métropole grâce à la **continuité territoriale**. L'**Union européenne** reconnaît les DROM comme des **régions ultrapériphériques** (RUP) et leur accorde des fonds importants. Les **collectivités** construisent des infrastructures, comme la nouvelle route du Littoral à La Réunion, et développent le tourisme. Ces aménagements doivent être adaptés aux risques et ouverts sur les pays voisins, grâce à la coopération régionale.

**Conclusion** : les territoires ultramarins enrichissent la France et lui donnent une dimension mondiale, mais ils restent fragiles. Leur aménagement doit être durable, adapté aux risques naturels et tourné vers leur environnement régional.` },
        { type: "qcm", texte: "reunion", question: "**Repères** : où se trouve La Réunion ?", choix: ["Dans la mer des Caraïbes, près de la Martinique", "En Amérique du Sud, à côté du Brésil", "Dans l'océan Pacifique, près de la Polynésie française", "Dans l'océan Indien, à l'est de Madagascar"], reponse: 3, explication: "La Réunion est dans l'océan Indien, à l'est de Madagascar, comme Mayotte (au nord-ouest de Madagascar). La Martinique et la Guadeloupe sont aux Antilles ; la Guyane en Amérique du Sud ; la Polynésie française dans le Pacifique." },
        { type: "saisie", texte: "reunion", question: "**Prélever** : d'après le document, quelle part des actifs est au chômage à La Réunion en 2024 ? (en pourcentage)", reponses: ["17 %", "17", "dix-sept pour cent", "17 % des actifs"], explication: "Le document indique que « 17 % des actifs sont au chômage », plus de deux fois plus qu'en métropole (un peu plus de 7 % en 2024)." },
        { type: "vf", texte: "reunion", question: "**Prélever** : la population de La Réunion se concentre surtout au centre de l'île.", reponse: false, explication: "C'est l'inverse : la population et les activités se concentrent sur « une étroite bande littorale » ; le centre de l'île est occupé par des montagnes volcaniques." },
        { type: "qcm", texte: "reunion", question: "**Analyser** : pourquoi la population se concentre-t-elle sur le littoral ?", choix: ["Parce que l'État interdit d'habiter à l'intérieur de l'île", "Parce que l'intérieur est occupé par des montagnes volcaniques au relief très accidenté", "Parce que le littoral est la seule partie de l'île sans risque naturel", "Parce que l'intérieur de l'île est un désert de sable"], reponse: 1, explication: "Les pentes raides des pitons et des cirques rendent l'intérieur difficile à habiter et à desservir : villes, routes, port et aéroport sont sur le littoral. Mais le littoral n'est pas sans risques : cyclones, houle, éboulements." },
        { type: "qcm", texte: "reunion", question: "**Analyser** : pourquoi beaucoup de produits coûtent-ils plus cher à La Réunion qu'en métropole ?", choix: ["Parce que l'île produit elle-même tout ce qu'elle consomme", "Parce que l'euro n'y est pas utilisé", "Parce qu'ils sont importés par bateau de très loin : c'est l'effet de l'insularité et de l'éloignement", "Parce qu'il n'y a pas de commerces sur l'île"], reponse: 2, explication: "Île éloignée, La Réunion importe une grande partie de ses produits : le transport et la faible concurrence entre les vendeurs augmentent les prix. On parle de « vie chère ». L'euro y est bien la monnaie, comme dans tous les DROM." },
        { type: "redaction", texte: "reunion", question: "**Exercice 1 en trois temps (brevet)** : **1. Repères** : situe La Réunion (océan, continent voisin) et donne son statut. **2. Prélever** : relève dans le document deux atouts et deux contraintes de La Réunion. **3. Analyser** : en t'appuyant sur le document et sur tes connaissances, montre que La Réunion est un territoire ultramarin aux défis spécifiques, et présente deux acteurs qui l'aménagent. Une réponse rédigée d'au moins quatre phrases est attendue.", corrige: `**1. Repères** : La Réunion se trouve dans l'**océan Indien**, à l'est de **Madagascar** et donc au large de l'**Afrique**, à environ 9 400 km de Paris. C'est un **département et région d'outre-mer** (DROM).

**2. Prélever** : le document présente des **atouts** : des paysages de « pitons, cirques et remparts » inscrits au patrimoine mondial de l'Unesco, qui « attirent les randonneurs », et la culture de la canne à sucre. Il montre aussi des **contraintes** : un chômage élevé (« 17 % des actifs » en 2024) et des risques naturels, car « les cyclones et les éboulements menacent régulièrement les habitants ».

**3. Analyser** : comme les autres territoires ultramarins, La Réunion est **éloignée** de la métropole et **insulaire** : les produits importés y sont plus chers, c'est la **vie chère**. Son relief volcanique concentre la population sur une étroite bande littorale, où les routes sont saturées. Elle est exposée à de forts **risques naturels** et connaît des difficultés sociales, comme un chômage plus de deux fois supérieur à celui de la métropole. Pour répondre à ces défis, la **Région** construit la nouvelle route du Littoral, qui doit protéger les usagers des chutes de pierres ; l'**État** finance logements et écoles ; l'**Union européenne**, qui la reconnaît comme **région ultrapériphérique**, lui accorde des fonds. L'aménagement doit donc s'adapter aux contraintes de l'île tout en valorisant ses atouts, comme le tourisme.

**Méthode** : en « Repères », situe avec le vocabulaire du cours (océan, continent, statut) ; en « Prélever », cite le document entre guillemets ; en « Analyser », relie le document aux notions du cours (insularité, vie chère, risques, RUP) et nomme les acteurs.` },
        { type: "redaction", texte: "reunion", question: "**Schéma (brevet)** : à partir du document, tu dois réaliser le schéma « L'organisation du territoire de La Réunion ». Propose un titre et une légende organisée en trois parties, en précisant pour chaque élément le figuré (surface, point ou ligne) et sa couleur.", corrige: `**Titre** : La Réunion, une île volcanique aux habitants concentrés sur le littoral.

**1. Un intérieur montagneux et protégé**
- Montagnes volcaniques (pitons et cirques) : **surface** marron.
- Cœur du parc national, site inscrit à l'Unesco : **hachures** vertes sur la surface marron.
- Piton de la Fournaise, volcan actif : **point** (triangle) rouge.

**2. Un littoral qui concentre la population et les activités**
- Bande littorale densément peuplée : **surface** orange.
- Principales villes (Saint-Denis, Saint-Paul, Saint-Pierre) : **points** rouges, de taille selon leur importance.
- Port et aéroport, portes d'entrée de l'île : **pictogrammes** ou carrés violets.

**3. Un territoire aménagé mais exposé aux risques**
- Routes littorales, dont la nouvelle route du Littoral : **ligne** noire épaisse.
- Risque cyclonique : **flèche** courbe bleue venant de l'océan.
- Liens avec la métropole et l'Union européenne (importations, aides, continuité territoriale) : **flèche** violette vers l'extérieur du schéma.

**Méthode** : un schéma simplifie la forme de l'île (un ovale suffit) ; la légende suit le titre, de l'intérieur vers le littoral puis vers l'extérieur. N'oublie pas l'océan Indien (surface bleue) et une orientation (le nord).` },
        { type: "qcm", texte: "reunion", question: "**Schéma** : quel figuré choisis-tu pour représenter, sur ton schéma, la concentration des habitants sur le littoral de La Réunion ?", choix: ["Une flèche bleue", "Un point noir", "Une surface colorée (par exemple orange) le long des côtes", "Une ligne en pointillés"], reponse: 2, explication: "Une zone (ici la bande littorale peuplée) se représente par un figuré de surface. Les points servent pour les villes, les lignes pour les routes, les flèches pour les flux ou les menaces." },
      ],
    },
    {
      id: "union-europeenne-territoire",
      titre: "L'Union européenne, un nouveau territoire de référence et d'appartenance",
      theme: "Géographie – La France et l'Union européenne",
      cours: `
## Introduction
Les Français vivent en France, mais aussi dans l'**Union européenne** (UE) : ils en sont **citoyens** depuis le traité de Maastricht (1992), y circulent librement, utilisent l'euro. L'UE est devenue un **territoire de référence** (on s'y compare, on y applique des règles communes) et d'**appartenance** (on s'y sent chez soi).

## 1. Un territoire de 27 États
- L'UE compte **27 États membres** (depuis la sortie du Royaume-Uni en 2020) et environ **450 millions d'habitants**. Elle a **24 langues officielles**. Sa devise : « Unie dans la diversité ».
- Ses **limites** ont évolué avec les élargissements ; neuf pays sont officiellement **candidats** en 2026 à l'adhésion, dont l'Ukraine, la Moldavie, la Serbie et la Turquie.

Deux espaces ne recouvrent pas exactement le territoire de l'UE :

- L'**espace Schengen** (**29 pays** depuis 2025, dont 25 de l'UE ainsi que la Norvège, l'Islande, la Suisse et le Liechtenstein) : libre circulation des personnes sans contrôle systématique aux frontières intérieures.
- La **zone euro** : **21 pays** depuis l'entrée de la Bulgarie le 1er janvier 2026.

## 2. Des institutions communes
| Institution | Siège | Rôle |
|---|---|---|
| **Commission européenne** | Bruxelles | propose les lois, veille à leur application |
| **Parlement européen** | Strasbourg (aussi Bruxelles) | élu au suffrage universel direct ; vote les lois et le budget avec le Conseil (720 députés depuis 2024, dont 81 Français) |
| **Conseil de l'UE** | Bruxelles | réunit les ministres des États ; vote les lois avec le Parlement |
| **Conseil européen** | Bruxelles | réunit les chefs d'État ou de gouvernement ; fixe les grandes orientations |
| **Banque centrale européenne** | Francfort | gère l'euro |
| **Cour de justice de l'UE** | Luxembourg | fait respecter le droit européen |

## 3. Un territoire inégal
- Le cœur économique de l'UE est la **dorsale européenne** (ou « mégalopole européenne »), qui s'étend du sud de l'Angleterre au nord de l'Italie en passant par le Benelux et la vallée du Rhin. Elle concentre population, grandes villes, richesses, ports (Rotterdam) et axes de transport.
- Les périphéries sont moins riches : une partie de l'Europe de l'Est et du Sud, régions rurales isolées, **régions ultrapériphériques** (RUP).
- La **politique régionale** de l'UE (fonds **FEDER**) et la **politique agricole commune** (**PAC**) aident à réduire ces inégalités : c'est la **cohésion** européenne.

## 4. Les régions transfrontalières, laboratoires de l'Europe
- La France a des frontières terrestres avec huit pays : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Andorre, Espagne (sans compter l'outre-mer : la Guyane touche le Brésil et le Suriname, Saint-Martin la partie néerlandaise de l'île).
- Dans les régions frontalières, des centaines de milliers de **travailleurs frontaliers** traversent chaque jour la frontière, par exemple vers la **Suisse** (Genève) et le **Luxembourg**, où les salaires sont plus élevés.
- Des **coopérations transfrontalières** existent, financées en partie par l'UE (programme **Interreg**) : l'**Eurométropole Lille-Kortrijk-Tournai** (avec la Belgique), l'**Eurodistrict Strasbourg-Ortenau** (avec l'Allemagne), le **Grand Genève** (avec la Suisse, pays hors UE mais membre de l'espace Schengen). Exemples : tramway Strasbourg-Kehl, hôpital transfrontalier de Cerdagne (France-Espagne).

>! **Méthode – lire une carte de l'UE** : repère d'abord les États membres (surface colorée), les pays candidats, la zone euro et l'espace Schengen (souvent des hachures ou des contours), puis les centres d'impulsion (dorsale, capitales) et les périphéries.

> **À retenir** :
> - UE : 27 États, environ 450 millions d'habitants, 24 langues ; zone euro (21 pays) ; espace Schengen (29 pays).
> - Institutions : Commission (Bruxelles), Parlement (Strasbourg), BCE (Francfort), Cour de justice (Luxembourg).
> - Un territoire inégal : dorsale européenne au centre, périphéries aidées par le FEDER et la PAC.
> - Les régions transfrontalières (Grand Genève, Eurodistrict Strasbourg-Ortenau) montrent l'intégration européenne au quotidien.
> - Vocabulaire : État membre, citoyenneté européenne, espace Schengen, zone euro, dorsale européenne, cohésion, région transfrontalière, travailleur frontalier.
`,
      exercices: [
        { type: "saisie", question: "Combien l'Union européenne compte-t-elle d'États membres en 2026 ? (écris un nombre)", reponses: ["27", "vingt-sept"], explication: "27 États depuis la sortie du Royaume-Uni, le 31 janvier 2020." },
        { type: "qcm", question: "Dans quelle ville siège le Parlement européen ?", choix: ["Bruxelles uniquement", "Francfort", "Strasbourg", "Luxembourg"], reponse: 2, explication: "Le siège officiel du Parlement européen est à Strasbourg (sessions plénières) ; il se réunit aussi à Bruxelles. Francfort accueille la BCE, Luxembourg la Cour de justice." },
        { type: "vf", question: "Tous les pays de l'espace Schengen sont membres de l'Union européenne.", reponse: false, explication: "La Suisse, la Norvège, l'Islande et le Liechtenstein font partie de l'espace Schengen sans être membres de l'UE." },
        { type: "qcm", question: "Combien de pays utilisent l'euro en 2026 ?", choix: ["12", "21", "19", "27"], reponse: 1, explication: "21 pays depuis l'entrée de la Bulgarie le 1er janvier 2026 : tous les États de l'UE n'ont pas adopté l'euro (Pologne, Suède, Hongrie, Tchéquie… gardent leur monnaie)." },
        { type: "saisie", question: "Quelle est la ville siège de la Banque centrale européenne ?", reponses: ["Francfort", "à Francfort", "Frankfurt", "Francfort-sur-le-Main"], explication: "La BCE, installée à Francfort (Allemagne), gère l'euro et fixe les taux d'intérêt." },
        { type: "qcm", question: "Comment appelle-t-on l'espace le plus riche et le plus peuplé de l'UE, du sud de l'Angleterre au nord de l'Italie ?", choix: ["La dorsale européenne", "La diagonale du vide", "Le rideau de fer", "La zone euro"], reponse: 0, explication: "La dorsale (ou mégalopole) européenne concentre grandes villes, richesses et axes de transport, notamment le long du Rhin." },
        { type: "vf", question: "Un travailleur frontalier habite dans un pays et travaille dans un pays voisin.", reponse: true, explication: "Exemple : des habitants de Haute-Savoie qui travaillent à Genève, ou des Lorrains qui travaillent au Luxembourg." },
        { type: "qcm", question: "Quel fonds européen aide les régions les moins riches à se développer ?", choix: ["Le FMI", "L'OTAN", "Le plan Marshall", "Le FEDER"], reponse: 3, explication: "Le Fonds européen de développement régional finance routes, équipements, projets innovants. Le FMI est une organisation mondiale ; l'OTAN une alliance militaire." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que l'Union européenne est un territoire de référence et d'appartenance pour les Français.", corrige: `**Introduction** : la France est l'un des six pays fondateurs de la construction européenne, commencée en 1950-1951. Aujourd'hui, l'**Union européenne** rassemble **27 États** et environ 450 millions d'habitants. Pour les Français, elle est devenue un territoire de **référence**, où s'appliquent des règles communes, et d'**appartenance**, où l'on se sent chez soi. En quoi ?

**1. Un territoire d'appartenance**
Depuis le traité de **Maastricht** (1992), les Français sont **citoyens européens** : ils élisent leurs députés au **Parlement européen** (81 des 720 députés depuis 2024) et, s'ils habitent dans un autre pays de l'UE, ils peuvent y voter aux élections municipales. Ils peuvent vivre, étudier et travailler librement dans les autres pays membres : des millions d'étudiants sont partis avec le programme **Erasmus**. Ils utilisent l'**euro**, partagé par 21 pays, et circulent sans contrôle systématique aux frontières dans l'**espace Schengen** (29 pays). Le drapeau européen, la devise « Unie dans la diversité » et la journée de l'Europe, le 9 mai, sont des symboles communs.

**2. Un territoire de référence, avec des règles et des institutions communes**
Des institutions communes adoptent des lois qui s'appliquent en France : la **Commission européenne** (Bruxelles) les propose ; le **Parlement** (Strasbourg) et le **Conseil de l'UE**, qui réunit les ministres des États, les votent ; la **Cour de justice** (Luxembourg) fait respecter le droit européen et la **Banque centrale européenne** (Francfort) gère l'euro. L'UE fixe des normes dans de nombreux domaines : environnement, sécurité alimentaire, protection des données personnelles. Elle mène aussi des politiques communes, comme la **politique agricole commune** (PAC), essentielle pour les agriculteurs français, et la politique régionale : le fonds **FEDER** aide les régions françaises les plus fragiles, notamment les territoires ultramarins, qui sont des régions ultrapériphériques.

**3. Une appartenance vécue au quotidien dans les régions frontalières**
C'est dans les régions frontalières que l'Europe se vit le plus concrètement. Chaque jour, des centaines de milliers de **travailleurs frontaliers** traversent la frontière, vers le Luxembourg, l'Allemagne ou la Suisse. Des **coopérations transfrontalières**, financées en partie par le programme européen **Interreg**, organisent des services communs : l'**Eurodistrict Strasbourg-Ortenau** et son tramway entre Strasbourg et Kehl, l'**Eurométropole Lille-Kortrijk-Tournai**, ou l'hôpital transfrontalier de Cerdagne, entre la France et l'Espagne.

**Conclusion** : l'Union européenne fait donc partie de la vie quotidienne des Français, comme territoire de référence et d'appartenance. Mais ce sentiment reste inégal : certains citoyens jugent l'Europe lointaine, comme l'a montré le « non » des Français au référendum de 2005 sur le projet de Constitution européenne.` },
        { type: "redaction", question: "**Croquis décrit (brevet)** : tu dois réaliser le croquis « L'Union européenne, un territoire inégal aux limites mouvantes ». Propose un titre et une légende organisée en trois parties, en précisant pour chaque élément le figuré (surface, point ou ligne) et sa couleur.", corrige: `**Titre** : L'Union européenne, un territoire de 27 États, inégalement développé et aux limites mouvantes.

**1. Un cœur riche et peuplé**
- Dorsale européenne, du sud de l'Angleterre au nord de l'Italie : **surface** rouge (ou orange foncé).
- Grandes métropoles (Paris, Berlin, Madrid, Milan…) : **points** rouges, de taille selon leur importance.
- Villes des institutions européennes (Bruxelles, Strasbourg, Luxembourg, Francfort) : **étoiles** noires.
- Northern Range, façade portuaire de la mer du Nord (Le Havre, Anvers, Rotterdam, Hambourg) : **trait** épais violet le long du littoral.

**2. Des périphéries inégalement développées**
- Périphéries intégrées, proches du cœur : **surface** orange clair.
- Périphéries moins riches de l'Est et du Sud, aidées par la politique régionale (FEDER) : **surface** jaune.
- Régions ultrapériphériques (dont les DROM français) : petits **carrés** jaunes dans un encadré.

**3. Un territoire ouvert, aux limites qui évoluent**
- Limite de l'Union européenne : **ligne** bleue épaisse.
- Pays candidats à l'adhésion (Ukraine, Moldavie, Serbie, Turquie…) : **hachures** grises.
- Régions transfrontalières et travailleurs frontaliers (Grand Genève, Eurodistrict Strasbourg-Ortenau, Eurométropole Lille-Kortrijk-Tournai) : **flèches** vertes à double sens de part et d'autre des frontières.

**Méthode** : un croquis répond à un titre précis ; ne surcharge pas la carte. Ici, on n'ajoute pas la zone euro et l'espace Schengen, qui feraient un autre croquis. Les couleurs vont du plus foncé (le cœur) au plus clair (les périphéries).` },
        { type: "qcm", question: "**Croquis** : sur un croquis de l'Union européenne, comment représentes-tu les déplacements quotidiens des travailleurs frontaliers entre la Lorraine et le Luxembourg ?", choix: ["Par une surface verte", "Par une flèche (figuré linéaire)", "Par un point noir", "Par des hachures"], reponse: 1, explication: "Un déplacement, un flux ou un échange se représente par une flèche, figuré linéaire, dont l'épaisseur peut indiquer l'importance. Les surfaces servent pour les zones, les points pour les villes." },
      ],
    },
    {
      id: "france-europe-monde",
      titre: "La France et l'Europe dans le monde",
      theme: "Géographie – La France et l'Union européenne",
      cours: `
## Introduction
La France et l'Union européenne sont des acteurs importants de la **mondialisation**. Leur **puissance** (capacité à agir et à influencer le monde) repose sur l'économie, la diplomatie, la culture et l'armée, mais elle a aussi des limites.

## 1. La France, une puissance mondiale moyenne
- **Puissance économique** : l'une des **dix premières économies du monde** (7e PIB mondial en 2024), grandes entreprises de rang mondial (luxe, aéronautique avec Airbus, énergie, agroalimentaire), première destination touristique mondiale.
- **Puissance politique et militaire** : **membre permanent du Conseil de sécurité de l'ONU** (droit de veto), **puissance nucléaire**, armée capable d'intervenir loin (opérations au Sahel, de 2013 à 2022), l'un des plus grands réseaux d'ambassades du monde.
- **Présence mondiale** : grâce à ses territoires ultramarins, la France est présente dans tous les océans et possède la **deuxième ZEE du monde**.
- **Rayonnement culturel** (*soft power*) : la langue française, parlée par environ **320 millions de personnes** (Organisation internationale de la francophonie, 2022) ; la **francophonie** ; la gastronomie, la mode, le cinéma, les musées (Louvre), les grands événements (Jeux olympiques de Paris 2024) ; Paris accueille l'**Unesco** et l'OCDE.
- **Limites** : la France pèse de moins en moins face aux géants (États-Unis, Chine) ; elle a besoin de l'UE pour peser.

## 2. L'Union européenne, une puissance économique
- L'UE est l'**une des trois premières puissances commerciales du monde**, avec les États-Unis et la Chine, et l'un des marchés les plus riches (450 millions de consommateurs).
- L'**euro** est la deuxième monnaie du monde après le dollar.
- Les **façades maritimes** ouvrent l'Europe sur le monde : la **Northern Range** (du Havre à Hambourg, en passant par Anvers et Rotterdam) est l'une des façades portuaires les plus actives de la planète.
- Des **coopérations** réussies : **Airbus** (avion), **Ariane** (fusée, lancée de Kourou), **Galileo** (système de navigation par satellite).
- L'UE est le **premier donateur d'aide au développement** du monde (avec ses États membres).

## 3. Une puissance politique incomplète
- L'UE a une diplomatie (un Haut représentant pour les affaires étrangères) et adopte des **sanctions** (contre la Russie depuis 2014 et 2022), mais les 27 ne sont pas toujours d'accord.
- Sa **défense** dépend en grande partie de l'**OTAN** et des États-Unis ; depuis la guerre en Ukraine (2022), les Européens cherchent à renforcer leur défense commune.
- Elle est un modèle pour certains pays voisins, qui veulent la rejoindre, et une destination pour de nombreux **migrants**.

## 4. Des liens privilégiés avec le monde
- La France entretient des liens forts avec l'**Afrique** (francophonie, histoire coloniale, échanges), la Méditerranée et ses voisins européens.
- Ses territoires ultramarins la placent au cœur de plusieurs régions du monde (Caraïbes, océan Indien, Pacifique).

> **À retenir** :
> - La France : membre permanent du Conseil de sécurité, puissance nucléaire, 2e ZEE, francophonie, première destination touristique ; une puissance moyenne d'influence mondiale.
> - L'UE : une des trois premières puissances commerciales, l'euro, la Northern Range, Airbus et Ariane ; mais une puissance politique et militaire limitée.
> - Vocabulaire : puissance, soft power (influence culturelle), francophonie, façade maritime, Northern Range, mondialisation.
`,
      exercices: [
        { type: "qcm", question: "Quel est l'un des atouts diplomatiques majeurs de la France ?", choix: ["Elle est la première puissance économique mondiale", "Elle n'a aucune alliance", "Elle possède la plus grande armée du monde", "Elle est membre permanent du Conseil de sécurité de l'ONU"], reponse: 3, explication: "La France est l'un des cinq membres permanents du Conseil de sécurité, avec un droit de veto." },
        { type: "saisie", question: "Comment appelle-t-on l'ensemble des pays et des personnes qui ont en commun l'usage de la langue française ?", reponses: ["francophonie", "la francophonie"], explication: "L'Organisation internationale de la francophonie rassemble des dizaines d'États ; environ 320 millions de personnes parlent français (2022)." },
        { type: "vf", question: "L'Union européenne est l'une des trois premières puissances commerciales du monde.", reponse: true, explication: "Avec les États-Unis et la Chine, elle est l'un des trois géants du commerce mondial." },
        { type: "qcm", question: "Qu'est-ce que la Northern Range ?", choix: ["La façade maritime de l'Europe du Nord-Ouest, du Havre à Hambourg", "Une chaîne de montagnes en Scandinavie", "Une alliance militaire", "Une ligne de chemin de fer"], reponse: 0, explication: "La Northern Range regroupe les grands ports du Havre, d'Anvers, de Rotterdam et de Hambourg : c'est l'une des façades maritimes les plus actives du monde." },
        { type: "qcm", question: "Quelle coopération européenne fabrique des fusées lancées depuis Kourou ?", choix: ["Airbus", "Galileo", "Ariane", "Erasmus"], reponse: 2, explication: "Les fusées Ariane sont lancées depuis le Centre spatial guyanais. Airbus construit des avions ; Galileo est un système de navigation par satellite ; Erasmus un programme d'échanges étudiants." },
        { type: "vf", question: "L'Union européenne dispose d'une armée commune qui remplace les armées nationales.", reponse: false, explication: "Il n'y a pas d'armée européenne : chaque État a sa propre armée et beaucoup comptent sur l'OTAN. L'UE cherche à renforcer sa défense commune." },
        { type: "qcm", question: "Qu'appelle-t-on le « soft power » ?", choix: ["La puissance militaire", "La capacité d'influencer par la culture, la langue, l'image d'un pays", "La puissance nucléaire", "Le commerce des produits mous"], reponse: 1, explication: "Le soft power (ou puissance douce) repose sur l'attractivité : culture, langue, gastronomie, universités, tourisme, grands événements." },
        { type: "saisie", question: "Dans quelle ville se trouve le siège de l'Unesco ?", reponses: ["Paris", "à Paris"], explication: "L'Unesco (Organisation des Nations unies pour l'éducation, la science et la culture) a son siège à Paris, comme l'OCDE." },
        { type: "redaction", question: "**Développement construit (brevet)** : montre que la France est une puissance d'influence mondiale, qui s'appuie aussi sur l'Union européenne.", corrige: `**Introduction** : la **puissance** est la capacité d'un État à agir et à influencer le monde. La France n'est pas une superpuissance comme les États-Unis ou la Chine, mais elle exerce une influence mondiale. Sur quoi repose-t-elle, et en quoi l'UE la renforce-t-elle ?

**1. Une puissance économique et politique**
La France est l'une des **dix premières économies du monde**, avec des entreprises mondiales (luxe, aéronautique, énergie) et la place de **première destination touristique**. Elle est **membre permanent du Conseil de sécurité de l'ONU**, avec un droit de veto, et **puissance nucléaire** ; son armée peut intervenir loin, comme au Sahel.

**2. Une présence et une influence dans le monde entier**
Grâce à ses **territoires ultramarins**, la France est présente dans tous les océans et possède la **deuxième ZEE du monde**. Son **soft power** repose sur la **francophonie** (environ 320 millions de francophones), sa culture, sa gastronomie, et l'accueil de grands événements (Jeux olympiques de Paris 2024) et d'organisations internationales comme l'**Unesco**.

**3. L'Union européenne, un relais de puissance**
Seule, la France pèse moins face aux géants. Avec l'UE, elle fait partie de l'une des **trois premières puissances commerciales** du monde, partage l'**euro**, et participe à des coopérations comme **Airbus** et **Ariane**. Mais l'UE reste une puissance politique et militaire incomplète, qui dépend de l'OTAN pour sa défense.

**Conclusion** : la France est une puissance moyenne à l'influence mondiale ; l'Union européenne est pour elle un multiplicateur de puissance, même si les Européens peinent encore à parler d'une seule voix.` },
      ],
    },
    {
      id: "reperes-brevet",
      titre: "Les repères chronologiques et spatiaux du brevet",
      theme: "Méthodes et préparation du brevet",
      cours: `
## Pourquoi apprendre les repères ?
Au brevet, l'exercice 1 commence par des **questions sur des repères chronologiques ou spatiaux**, et l'exercice 2 peut te demander de localiser et nommer des lieux sur un fond de carte. Les repères à connaître sont ceux des ressources d'accompagnement officielles (Eduscol), auxquelles renvoie la note de service sur l'épreuve. Les repères sont aussi indispensables pour réussir le développement construit : une bonne copie est **datée** et **localisée**.

## 1. Les repères chronologiques de 3e
| Date | Événement |
|---|---|
| 1914-1918 | Première Guerre mondiale |
| 1915 | génocide des Arméniens |
| 1916 | bataille de Verdun |
| 1917 | révolution russe |
| 11 novembre 1918 | armistice |
| 1919 | traité de Versailles |
| 1924-1953 | Staline au pouvoir en URSS |
| 1929 | krach de Wall Street, début de la crise économique |
| 30 janvier 1933 | Hitler chancelier (1933-1945 : Hitler au pouvoir) |
| 1936 | Front populaire |
| 1939-1945 | Seconde Guerre mondiale |
| 18 juin 1940 | appel du général de Gaulle |
| 1940-1944 | régime de Vichy |
| 1942 | rafle du Vél' d'Hiv ; 1942-1943 : bataille de Stalingrad |
| 6 juin 1944 | débarquement en Normandie |
| 1944 | droit de vote des femmes ; 25 août : libération de Paris |
| 8 mai 1945 | capitulation de l'Allemagne |
| 6 et 9 août 1945 | Hiroshima et Nagasaki |
| 1945 | création de l'ONU et de la Sécurité sociale |
| 1946 | IVe République |
| 1947 | indépendance de l'Inde ; début de la guerre froide (1947-1991) |
| 1948-1949 | blocus de Berlin |
| 1954-1962 | guerre d'Algérie |
| 1957 | traités de Rome |
| 1958 | Ve République |
| 1961 | construction du mur de Berlin (1961-1989) |
| 1962 | indépendance de l'Algérie ; crise de Cuba ; élection du président au suffrage universel direct |
| 1975 | loi Veil |
| 1981 | alternance : élection de François Mitterrand |
| 1986 | première cohabitation |
| 9 novembre 1989 | chute du mur de Berlin |
| 1991 | fin de l'URSS |
| 1992 | traité de Maastricht |
| 2001 | attentats du 11 septembre |
| 2002 | l'euro en pièces et billets |

>! **Astuce** : regroupe les dates par périodes. **1914-1945** : les guerres totales. **1945-1991** : la guerre froide et la décolonisation. **Après 1989-1991** : un monde multipolaire. Pour la France : **1944-1947** (refondation), **1958** (Ve République), **1981** (alternance). Et rappelle-toi qu'on est au **XXe siècle** de 1901 à 2000, au **XXIe** depuis 2001.

## 2. Les repères spatiaux
**En France** :
- Les grandes aires urbaines : **Paris**, **Lyon**, **Marseille-Aix-en-Provence**, **Lille**, **Toulouse**, **Bordeaux**, **Nantes**, **Strasbourg**, **Nice**…
- Les grands fleuves : la **Seine**, la **Loire**, la **Garonne**, le **Rhône** et le **Rhin**.
- Les massifs : **Alpes**, **Pyrénées**, **Massif central**, **Jura**, **Vosges**.
- Les grands ports : **Marseille-Fos**, **Le Havre**, **Dunkerque** ; les grands aéroports : Roissy-Charles-de-Gaulle, Orly.
- Les façades maritimes : Manche et mer du Nord, Atlantique, Méditerranée.
- Les **DROM** : Guadeloupe et Martinique (Antilles, océan Atlantique, mer des Caraïbes), Guyane (Amérique du Sud), La Réunion et Mayotte (océan Indien).

**En Europe** :
- Les États de l'UE et leurs capitales ; les pays fondateurs (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg).
- Les villes des institutions : Bruxelles, Strasbourg, Luxembourg, Francfort.
- La dorsale européenne, la Northern Range.

**Dans le monde (histoire)** : Verdun, Sarajevo, Berlin, Stalingrad, Auschwitz-Birkenau, Hiroshima, Pearl Harbor, Cuba, l'Inde, l'Algérie, Bandung, le Rwanda, New York.

> **À retenir** :
> - Apprends les dates par périodes et par thèmes, et entraîne-toi à les classer dans l'ordre.
> - Sache situer sur une carte : les grandes villes, fleuves, massifs et DROM de la France ; les États et villes de l'UE ; les grands lieux de l'histoire du XXe siècle.
`,
      exercices: [
        { type: "qcm", question: "Classe dans l'ordre chronologique : traités de Rome, chute du mur de Berlin, armistice de la Première Guerre mondiale, naissance de la Ve République.", choix: ["Traités de Rome, armistice, chute du mur, Ve République", "Armistice, Ve République, traités de Rome, chute du mur", "Armistice, traités de Rome, Ve République, chute du mur", "Ve République, armistice, traités de Rome, chute du mur"], reponse: 2, explication: "1918 (armistice), 1957 (traités de Rome), 1958 (Ve République), 1989 (chute du mur)." },
        { type: "saisie", question: "En quelle année commence la guerre d'Algérie ?", reponses: ["1954", "en 1954"], explication: "Elle commence le 1er novembre 1954 et s'achève en 1962." },
        { type: "saisie", question: "En quelle année a lieu la révolution russe ?", reponses: ["1917", "en 1917", "octobre 1917", "février 1917", "en octobre 1917"], explication: "En février 1917, le tsar est renversé ; en octobre 1917, les bolcheviks de Lénine prennent le pouvoir." },
        { type: "qcm", question: "Quel événement a lieu en 1936 en France ?", choix: ["La victoire du Front populaire", "La création de la Sécurité sociale", "La naissance de la Ve République", "L'armistice"], reponse: 0, explication: "Le Front populaire de Léon Blum gagne les élections de 1936. La Sécurité sociale date de 1945, la Ve République de 1958." },
        { type: "vf", question: "Le traité de Maastricht, qui crée l'Union européenne, date de 1992.", reponse: true, explication: "Il est signé en février 1992 et entre en vigueur en 1993." },
        { type: "qcm", question: "Quel fleuve traverse Lyon, puis se jette dans la Méditerranée ?", choix: ["La Loire", "La Seine", "La Garonne", "Le Rhône"], reponse: 3, explication: "Le Rhône passe à Lyon et se jette dans la Méditerranée. La Seine traverse Paris ; la Loire et la Garonne se jettent dans l'Atlantique." },
        { type: "qcm", question: "Dans quel océan se trouvent La Réunion et Mayotte ?", choix: ["L'océan Atlantique", "L'océan Indien", "L'océan Pacifique", "L'océan Arctique"], reponse: 1, explication: "La Réunion et Mayotte sont dans l'océan Indien, à l'est de l'Afrique. Les Antilles (Guadeloupe, Martinique) sont dans l'Atlantique." },
        { type: "saisie", question: "En quelle année les femmes obtiennent-elles le droit de vote en France ?", reponses: ["1944", "en 1944", "21 avril 1944", "le 21 avril 1944", "avril 1944"], explication: "Ordonnance du 21 avril 1944 ; premier vote en avril 1945." },
        { type: "qcm", question: "À quel siècle appartient l'année 2000 ?", choix: ["Au XIXe siècle", "Au XXIe siècle", "Au XXe siècle", "Au XXIIe siècle"], reponse: 2, explication: "Le XXe siècle va de 1901 à 2000 : l'année 2000 en est la dernière. Le XXIe siècle commence en 2001." },
        { type: "redaction", question: "**Repères (brevet)** : en deux ou trois phrases, situe dans le temps et explique l'importance de trois de ces dates : 1945, 1962, 1989.", corrige: `- **1945** : fin de la Seconde Guerre mondiale (capitulation de l'Allemagne le 8 mai, du Japon le 2 septembre après Hiroshima et Nagasaki) ; création de l'**ONU** pour préserver la paix ; en France, création de la **Sécurité sociale** et premier vote des femmes.
- **1962** : les **accords d'Évian** mettent fin à la guerre d'Algérie, qui devient indépendante ; la **crise de Cuba** est le moment le plus dangereux de la guerre froide ; en France, le président de la République sera désormais élu au **suffrage universel direct**.
- **1989** : le **9 novembre**, le **mur de Berlin** tombe : c'est le symbole de la fin de la guerre froide et de l'effondrement des démocraties populaires ; l'URSS disparaît deux ans plus tard (1991).

**Méthode** : pour un repère, donne la **date**, l'**événement** et son **importance** (ce qu'il commence ou termine).` },
        { type: "saisie", question: "Pendant quelle période Staline dirige-t-il l'URSS ? (écris les deux années séparées par un tiret)", reponses: ["1924-1953", "de 1924 à 1953", "1924 à 1953"], explication: "Repère : 1924-1953. Staline succède à Lénine, mort en 1924 ; il élimine ses rivaux et s'impose seul à la fin des années 1920, puis dirige l'URSS jusqu'à sa mort en 1953." },
        { type: "qcm", question: "Combien de temps le mur de Berlin a-t-il existé ?", choix: ["Environ 10 ans", "Environ 28 ans", "Environ 45 ans", "Environ 70 ans"], reponse: 1, explication: "Construit le 13 août 1961, il tombe le 9 novembre 1989 : 1989 − 1961 = 28 ans. La guerre froide, elle, dure de 1947 à 1991, soit environ 45 ans." },
      ],
    },
    {
      id: "methodes-brevet",
      titre: "Méthode : réussir l'épreuve d'histoire-géographie du brevet",
      theme: "Méthodes et préparation du brevet",
      cours: `
## 1. L'épreuve (session 2027)
L'épreuve est définie par la **note de service du 11 septembre 2026** (Bulletin officiel spécial n° 4 du 17 septembre 2026), applicable dès la session 2027 ; les sujets portent sur le **programme de 3e**. L'épreuve écrite d'**histoire-géographie et enseignement moral et civique** dure **2 heures**, sans pause entre les deux sous-épreuves : c'est à toi de gérer ton temps. Le dictionnaire et la calculatrice sont interdits (c'est indiqué sur le sujet de référence publié pour 2027). L'histoire-géographie est notée sur **40 points** (ramenés sur 20, coefficient 1,5) ; l'EMC sur **20 points** (coefficient 0,5).
1. **Exercice 1 – Analyser et comprendre des documents** en histoire **ou** en géographie (**15 points**) : un ou deux documents, parfois accompagnés d'une image. Le questionnement est organisé en **trois temps successifs**, annoncés par des titres dans le sujet : des questions sur des **repères chronologiques ou spatiaux** ; des questions de **prélèvement d'informations** dans les documents ; des questions d'**analyse**, qui te demandent d'expliquer le sens des documents et d'indiquer leur **intérêt** et leurs éventuelles **limites**. La dernière question demande souvent une réponse plus longue (dans le sujet de référence : « une réponse rédigée d'au moins quatre phrases »).
2. **Exercice 2 – Maîtriser différents langages** (**25 points**) : un **développement construit** d'**au moins 30 lignes** (18 points), qui répond à une question d'histoire ou de géographie ; puis une question de **croquis, de schéma ou de frise chronologique** (7 points). Dans le sujet de référence, l'exercice 1 porte sur l'histoire et le développement construit sur la géographie, et les 7 points consistent à **localiser et nommer** des repères sur un fond de carte (quatre aires urbaines, deux fleuves, trois massifs) : attends-toi à changer de discipline entre les deux exercices.
3. **Enseignement moral et civique** (EMC, **20 points**) : une situation pratique ou une thématique appuyée sur un ou deux documents, avec des réponses courtes, une réponse plus développée et souvent un court texte (dans le sujet de référence : « un texte de 8 à 10 lignes » pour sensibiliser tes camarades).

>! **Toutes les réponses sont rédigées.** L'énoncé précise quand il s'agit d'une **réponse courte** (**une ou deux phrases**) ou d'une réponse construite et développée (avec un nombre indicatif de lignes ou de phrases). La **maîtrise de la langue** est notée dans chaque partie : **2 points sur 15** à l'exercice 1, **2 points sur 18** au développement construit, **2 points sur 20** en EMC. Quatre critères sont évalués : l'**orthographe**, la **syntaxe** (des phrases correctement construites), le **lexique** (le vocabulaire précis de la discipline) et l'**organisation du propos** (un fil conducteur clair et cohérent).

## 2. Analyser un document
1. **Présenter** : nature (texte, carte, photographie, affiche, graphique), auteur, date, source, sujet, contexte.
2. **Prélever** : cite le document entre guillemets ou relève les données utiles.
3. **Expliquer** : mobilise tes connaissances (dates, acteurs, vocabulaire) pour comprendre ce que dit le document.
4. **Prendre du recul** : qui parle ? pour qui ? dans quel but ? (une affiche de propagande ne montre pas la réalité ; un témoignage est personnel). Indique l'**intérêt** du document (ce qu'il nous apprend) et ses **limites** (ce qu'il ne montre pas, son point de vue).

>! **Exemple de réponse courte rédigée** : « Relève deux informations montrant que Verdun est une bataille très meurtrière. » Mauvaise réponse : « 300 000 morts, obus ». Bonne réponse : « Le document indique que la bataille fait environ 300 000 morts dans les deux camps. Il montre aussi que le terrain est entièrement ravagé par les obus. »

## 3. Le développement construit
C'est un texte rédigé d'**au moins 30 lignes** (une page et demie à deux pages de copie ; lis bien la consigne du sujet), qui répond à une question d'histoire ou de géographie. La consigne peut proposer quelques mots ou expressions pour t'aider ; tu n'es pas obligé de les utiliser, mais ce sont de bonnes pistes.
1. **Analyser la consigne** : repère le verbe (« montre », « explique », « décris », « raconte »), le thème, les **bornes chronologiques** ou l'**espace**.
2. **Mobiliser tes connaissances** au brouillon : dates, acteurs, lieux, vocabulaire, exemples.
3. **Organiser** en deux ou trois paragraphes, chacun avec une idée.
4. **Rédiger** : une **introduction** (présentation du sujet, contexte, question) ; des **paragraphes** introduits par des connecteurs (d'abord, ensuite, de plus, enfin, ainsi, en effet, c'est pourquoi) ; une **conclusion** qui répond à la question.

>! **Les erreurs fréquentes** : réciter tout le cours sans répondre à la consigne ; oublier les dates et exemples précis ; écrire en style télégraphique ou par listes ; oublier la conclusion ; ne pas relire l'orthographe.

## 4. Le croquis et le schéma
Un **croquis** est une représentation simplifiée d'un espace ; il comporte un **titre**, une **légende organisée** en parties, une **nomenclature** (noms de lieux écrits à l'horizontale), une orientation.
- **Figurés de surface** (couleurs, hachures) : zones (espaces urbains, agricoles, de faible densité).
- **Figurés ponctuels** (cercles, carrés, étoiles) : villes, ports, technopôles. La taille peut traduire l'importance.
- **Figurés linéaires** (traits, flèches) : axes de transport, frontières, flux.
- **Couleurs** : chaudes et foncées pour ce qui est dynamique ou intense, claires ou froides pour ce qui l'est moins ; bleu pour l'eau.

>! **Méthode – réaliser un croquis en cinq étapes** : 1. lis le titre et la consigne ; 2. classe les informations en deux ou trois parties qui répondent au titre ; 3. choisis un figuré adapté pour chaque élément (surface, point, ligne) ; 4. colorie d'abord les surfaces, puis place les points et les lignes ; 5. écris la nomenclature à l'horizontale et vérifie que chaque élément de la légende est sur le croquis.

>! **Localiser et nommer des repères sur un fond de carte** : place chaque ville au bon point et écris son nom à côté, à l'horizontale ; écris le nom des fleuves le long de leur tracé et repasse-les en bleu ; écris le nom des massifs dans les cadres prévus. Repères utiles : **Lille** au nord, près de la Belgique ; **Nantes** à l'ouest, sur la Loire, près de l'Atlantique ; **Bordeaux** au sud-ouest, sur la Garonne ; **Toulouse** au sud-ouest, sur la Garonne, au nord des Pyrénées ; **Marseille** au sud-est, sur la Méditerranée ; **Lyon** dans le centre-est, au confluent du Rhône et de la Saône ; **Strasbourg** au nord-est, sur le Rhin.

## 5. La frise chronologique
Elle place des **dates** (points) et des **périodes** (barres) sur un axe gradué régulièrement : choisis une échelle (par exemple 1 cm pour 5 ans) et respecte-la. Fais les calculs de tête ou à la main : la calculatrice est interdite.

> **À retenir** :
> - Épreuve de 2 heures : histoire-géographie sur 40 points (exercice 1 sur 15, exercice 2 sur 25), EMC sur 20 points ; 2 points de maîtrise de la langue dans chaque partie.
> - Exercice 1 : repères, prélèvement, analyse ; les réponses courtes se rédigent en une ou deux phrases.
> - Développement construit : introduction, deux ou trois paragraphes avec dates et exemples, conclusion ; au moins 30 lignes.
> - Croquis : titre, légende organisée, figurés de surface, de point et de ligne, nomenclature.
> - La langue compte : relis-toi.
`,
      exercices: [
        { type: "vf", question: "Au brevet, une réponse courte peut s'écrire en quelques mots, sans phrase.", reponse: false, explication: "Depuis la session 2027, une réponse courte doit être rédigée en une ou deux phrases ; la maîtrise de la langue est notée." },
        { type: "qcm", question: "Quelle est la première étape pour analyser un document ?", choix: ["Le recopier entièrement", "Le présenter : nature, auteur, date, source, sujet", "Donner son avis personnel", "Faire un croquis"], reponse: 1, explication: "Présenter le document permet de comprendre qui parle, quand et dans quel but." },
        { type: "qcm", question: "Sur un croquis, quel figuré utilises-tu pour représenter un axe autoroutier ?", choix: ["Un figuré linéaire", "Un figuré de surface", "Un figuré ponctuel", "Aucun figuré"], reponse: 0, explication: "Les axes de transport, les frontières et les flux se représentent par des figurés linéaires (traits, flèches)." },
        { type: "qcm", question: "Quelle est la bonne structure d'un développement construit ?", choix: ["Une liste de dates", "Un seul paragraphe sans connecteurs", "Un tableau à deux colonnes", "Une introduction, deux ou trois paragraphes organisés, une conclusion"], reponse: 3, explication: "Le développement construit est un texte rédigé et organisé ; il doit contenir des dates, des exemples et du vocabulaire précis." },
        { type: "vf", question: "Sur un croquis, les noms de lieux s'écrivent à l'horizontale.", reponse: true, explication: "La nomenclature s'écrit à l'horizontale pour être lisible (sauf parfois les fleuves et les massifs, qui suivent leur tracé)." },
        { type: "qcm", question: "Une frise va de 1940 à 1990 avec une échelle de 1 cm pour 5 ans. Quelle longueur fait-elle ?", choix: ["5 cm", "50 cm", "8 cm", "10 cm"], reponse: 3, explication: "1990 − 1940 = 50 ans ; 50 ÷ 5 = 10 cm." },
        { type: "saisie", question: "Sur une frise où 1 cm représente 10 ans, et qui commence en 1910, à combien de centimètres du début places-tu l'année 1958 ? (écris un nombre)", reponses: ["4,8", "4.8", "4,8 cm", "4,8 centimètres"], explication: "1958 − 1910 = 48 ans ; 48 ÷ 10 = 4,8 cm." },
        { type: "qcm", question: "Lequel de ces mots est un connecteur logique utile dans un développement construit ?", choix: ["Cependant", "Verdun", "Croquis", "Légende"], reponse: 0, explication: "Les connecteurs (cependant, ainsi, de plus, en effet, c'est pourquoi) organisent le raisonnement." },
        { type: "redaction", question: "**Méthode (brevet)** : pour le sujet « Montre que la France est une puissance d'influence mondiale », rédige une introduction et indique au brouillon le plan et les connaissances que tu utiliserais.", corrige: `**Introduction possible** : la France compte environ 69 millions d'habitants et n'est pas une superpuissance comme les États-Unis ou la Chine. Pourtant, elle exerce une influence dans le monde entier. Sur quels atouts repose cette influence ?

**Plan et connaissances au brouillon** :
1. **Une puissance économique** : une des dix premières économies du monde, grandes entreprises (Airbus, luxe), première destination touristique (environ 100 millions de touristes internationaux).
2. **Une puissance politique et militaire** : membre permanent du Conseil de sécurité de l'ONU (droit de veto), puissance nucléaire, interventions extérieures.
3. **Une présence et un rayonnement mondiaux** : territoires ultramarins et deuxième ZEE du monde, francophonie (environ 320 millions de locuteurs), culture, Unesco à Paris, Jeux olympiques 2024 ; et l'appui de l'Union européenne.

**Méthode** : l'introduction **présente** le sujet, donne le **contexte** et pose une **question** ; le plan répond à la question, chaque partie ayant au moins deux exemples précis.` },
        { type: "redaction", question: "**Croquis décrit (brevet)** : tu dois réaliser le croquis « Les dynamiques des espaces productifs en France ». Propose un titre et une légende organisée en trois parties (figuré et couleur pour chaque élément).", corrige: `**Titre** : Des espaces productifs français inégalement dynamiques et ouverts sur le monde.

**1. Des espaces productifs dynamiques**
- Région parisienne, cœur économique : **surface** rouge foncé.
- Grandes métropoles et technopôles (Lyon, Toulouse, Grenoble, Sophia Antipolis) : **points** rouges (taille selon l'importance).
- Zones industrialo-portuaires (Dunkerque, Le Havre, Fos-sur-Mer) : **carrés** violets.
- Littoraux et montagnes touristiques (Côte d'Azur, Alpes) : **surface** ou hachures orange.

**2. Des espaces agricoles spécialisés**
- Grandes cultures du Bassin parisien : **surface** jaune.
- Élevage et agroalimentaire (Bretagne) : **surface** verte.

**3. Des espaces en reconversion ou fragiles et des réseaux**
- Anciennes régions industrielles en reconversion (Nord, Lorraine) : **hachures** grises ou bleues.
- Diagonale des faibles densités : **surface** beige.
- Grands axes de transport (autoroutes, LGV) : **lignes** noires ; ouverture sur le monde par les ports et aéroports : **flèches**.

**Méthode** : la légende est organisée en parties qui répondent au titre ; chaque élément de la légende figure sur le croquis, et les noms de lieux sont écrits à l'horizontale.` },
        { type: "qcm", question: "Au brevet (session 2027), quelle longueur est attendue en général pour le développement construit ?", choix: ["5 lignes", "10 lignes", "30 lignes", "100 lignes"], reponse: 2, explication: "La note de service sur l'épreuve (BO spécial n° 4 du 17 septembre 2026) demande un développement construit d'au moins 30 lignes : un vrai texte rédigé et organisé, soit une page et demie à deux pages. Il est noté sur 18 points, dont 2 pour la maîtrise de la langue. Quelques lignes ne suffisent pas." },
        { type: "redaction", question: "**Exercice 1 en trois temps (brevet)** : « Le dernier mot est-il dit ? L'espérance doit-elle disparaître ? La défaite est-elle définitive ? Non ! [...] Cette guerre n'est pas tranchée par la bataille de France. Cette guerre est une guerre mondiale. [...] Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas. » (Appel du général de Gaulle, radio BBC, Londres, extraits). **1. Repères** : donne la date de cet appel. **2. Prélever** : relève deux arguments du général de Gaulle pour continuer le combat. **3. Analyser** : explique en deux ou trois phrases pourquoi cet appel s'oppose au choix du maréchal Pétain.", corrige: `**1. Repères** : cet appel est lancé le **18 juin 1940**, depuis Londres, à la radio britannique (BBC).
**2. Prélever** : De Gaulle affirme que « la défaite » n'est pas « définitive ». Il explique aussi que « cette guerre est une guerre mondiale » : la France peut encore compter sur ses alliés (le Royaume-Uni, son empire colonial) et sur les ressources du monde.
**3. Analyser** : au même moment, le maréchal **Pétain** demande l'armistice, qui est signé le **22 juin 1940** ; il arrête donc le combat et choisit ensuite la **collaboration** avec l'Allemagne. Au contraire, le général de Gaulle refuse la défaite et appelle les Français à continuer la lutte : son appel marque la naissance de la **France libre** et de la **Résistance**.

**Méthode** : chaque réponse est **rédigée** en une ou deux phrases ; on cite le document entre guillemets pour prélever, et on utilise ses connaissances (dates, acteurs, vocabulaire) pour analyser.` },
        { type: "redaction", question: "**Frise chronologique (brevet)** : tu dois réaliser une frise de **1939 à 1962** avec une échelle de **1 cm pour 2 ans**. Indique la longueur de la frise, puis la position (en cm depuis le début) et le figuré de chacun de ces éléments : la Seconde Guerre mondiale (1939-1945), le régime de Vichy (1940-1944), la guerre d'Algérie (1954-1962), l'appel du 18 juin 1940, le droit de vote des femmes (1944), la Constitution de la IVe République (1946), les traités de Rome (1957), la naissance de la Ve République (1958). Propose enfin un titre.", corrige: `**Longueur** : 1962 − 1939 = 23 ans ; 23 ÷ 2 = **11,5 cm**. On gradue l'axe régulièrement (par exemple un trait tous les 5 ans : 1940 à 0,5 cm, 1945 à 3 cm, 1950 à 5,5 cm, 1955 à 8 cm, 1960 à 10,5 cm).

**Les périodes** (figuré : **barres** ou rectangles colorés au-dessus ou au-dessous de l'axe, une couleur par période) :
- Seconde Guerre mondiale (1939-1945) : de 0 à **3 cm**.
- Régime de Vichy (1940-1944) : de **0,5** à **2,5 cm** (la barre se place sous celle de la guerre, car les deux périodes se chevauchent).
- Guerre d'Algérie (1954-1962) : de **7,5** à **11,5 cm**.

**Les dates** (figuré : **point** ou petit trait sur l'axe, relié à une courte étiquette) :
- 18 juin 1940, appel du général de Gaulle : **0,5 cm**.
- 1944, droit de vote des femmes : **2,5 cm**.
- 1946, Constitution de la IVe République : **3,5 cm**.
- 1957, traités de Rome : **9 cm**.
- 1958, naissance de la Ve République : **9,5 cm**.

**Titre possible** : « La France de 1939 à 1962 : de la guerre à la Ve République ».

**Méthode** : position d'une date = (date − année de départ) ÷ nombre d'années par cm. Par exemple, pour 1957 : (1957 − 1939) ÷ 2 = 18 ÷ 2 = 9 cm. Écris les étiquettes lisiblement et à l'horizontale, et utilise une légende si tu emploies des couleurs.` },
        { type: "saisie", question: "Sur une frise qui commence en 1939, avec une échelle de 1 cm pour 2 ans, à combien de centimètres du début places-tu l'année 1958 ? (écris un nombre)", reponses: ["9,5", "9.5", "9,5 cm", "9,5 centimètres"], explication: "1958 − 1939 = 19 ans ; 19 ÷ 2 = 9,5 cm." },
        { type: "qcm", question: "Au brevet 2027, dans l'exercice 1, dans quel ordre viennent les questions ?", choix: ["Analyse, puis prélèvement, puis repères", "Prélèvement, puis développement construit, puis repères", "Il n'y a pas d'ordre fixe", "Repères chronologiques ou spatiaux, puis prélèvement d'informations, puis analyse"], reponse: 3, explication: "La note de service du 11 septembre 2026 organise le questionnement en trois temps successifs : repères, prélèvement d'informations dans les documents, analyse. Les questions vont donc du plus simple au plus approfondi." },
        { type: "qcm", question: "Au brevet 2027, combien de points la maîtrise de la langue représente-t-elle dans le développement construit ?", choix: ["2 points sur 18", "Aucun point", "10 points sur 18", "Les 18 points"], reponse: 0, explication: "La maîtrise de la langue compte pour 2 points sur 18 dans le développement construit, comme 2 points sur 15 à l'exercice 1 et 2 points sur 20 en EMC. Les autres points récompensent les connaissances et le raisonnement." },
        { type: "vf", question: "Au brevet d'histoire-géographie, tu peux utiliser une calculatrice pour construire une frise chronologique.", reponse: false, explication: "Le sujet de référence de la session 2027 précise que le dictionnaire et la calculatrice sont interdits : les calculs d'une frise (durée ÷ nombre d'années par cm) se font de tête ou à la main." },
        { type: "qcm", question: "**Repères géographiques** : sur un fond de carte de France, où places-tu l'aire urbaine de Nantes ?", choix: ["Au nord, près de la frontière belge", "Au sud-est, au bord de la Méditerranée", "À l'ouest, sur la Loire, près de l'océan Atlantique", "À l'est, sur le Rhin"], reponse: 2, explication: "Nantes est à l'ouest, sur la Loire, près de son estuaire. Au nord, près de la Belgique, c'est Lille ; au sud-est, sur la Méditerranée, Marseille ; à l'est, sur le Rhin, Strasbourg." },
        { type: "saisie", question: "**Repères géographiques** : quel fleuve traverse à la fois Toulouse et Bordeaux ?", reponses: ["Garonne", "la Garonne", "le fleuve Garonne", "c'est la Garonne"], explication: "La Garonne naît dans les Pyrénées, traverse Toulouse puis Bordeaux, et se jette dans l'océan Atlantique par l'estuaire de la Gironde." },
        { type: "redaction", question: "**Repères géographiques (brevet, 7 points)** : sur un fond de carte de France, on te demande de localiser et nommer les aires urbaines de Toulouse, Marseille, Lille et Nantes, deux fleuves de ton choix et trois massifs : les Alpes, les Pyrénées et le Massif central. Explique où tu places chaque élément et comment tu le représentes.", corrige: `**Les aires urbaines** (figuré : **point**, nom écrit à côté, à l'horizontale) :
- **Lille** : tout au nord, près de la frontière belge.
- **Nantes** : à l'ouest, sur la Loire, près de l'océan Atlantique.
- **Toulouse** : au sud-ouest, sur la Garonne, au nord des Pyrénées.
- **Marseille** : au sud-est, au bord de la Méditerranée, à l'est de l'embouchure du Rhône.

**Deux fleuves** (figuré : **ligne** bleue, nom écrit le long du tracé), par exemple :
- la **Loire** : le plus long fleuve de France ; elle prend sa source dans le Massif central, coule vers le nord puis vers l'ouest et se jette dans l'Atlantique près de Nantes ;
- la **Seine** : elle traverse Paris et se jette dans la Manche au Havre.
(On peut aussi choisir la **Garonne**, qui passe à Toulouse et à Bordeaux, ou le **Rhône**, qui passe à Lyon et se jette dans la Méditerranée.)

**Trois massifs** (figuré : **surface** déjà grisée sur le fond de carte ; on écrit le nom dans le cadre) :
- les **Alpes** : à l'est, à la frontière avec l'Italie et la Suisse ;
- les **Pyrénées** : au sud-ouest, à la frontière avec l'Espagne ;
- le **Massif central** : au centre et au sud du pays.

**Méthode** : avant de répondre, oriente-toi (le nord en haut) et repère les frontières et les littoraux ; écris lisiblement, sans rature, à l'horizontale pour les villes ; vérifie que tu as bien placé tous les éléments demandés.` },
        { type: "redaction", question: "**Question d'analyse (brevet)** : « Montre que la politique du régime de Vichy s'oppose aux valeurs républicaines défendues par la Résistance. » Une réponse rédigée d'au moins quatre phrases est attendue.", corrige: `Le régime de Vichy, né du vote des **pleins pouvoirs** au maréchal Pétain le **10 juillet 1940**, supprime la République : il n'y a plus d'élections ni de Parlement, et la **liberté** d'expression disparaît avec la censure. La devise républicaine « Liberté, égalité, fraternité » est remplacée par « **Travail, famille, patrie** ». Vichy rejette aussi l'**égalité** : dès le **3 octobre 1940**, le **statut des Juifs** les exclut de nombreux métiers, puis la police française participe à leur arrestation, comme lors de la **rafle du Vél' d'Hiv** en juillet 1942. Au contraire, la **Résistance** et la **France libre** du général de Gaulle se battent pour libérer le pays et rétablir la République et ses valeurs : le programme du **Conseil national de la Résistance** (1944) prévoit le retour de la démocratie et de nouveaux droits sociaux.

**Méthode** : « au moins quatre phrases » signifie un vrai paragraphe rédigé, avec des connecteurs (au contraire, aussi, dès), des dates et des exemples précis ; chaque phrase apporte une idée nouvelle.` },
      ],
    },
  ],
};
