export default {
  chapitres: [
    {
      id: "droits-devoirs-enfant",
      titre: "Les droits et les devoirs de l'enfant",
      theme: "Vivre ensemble",
      cours: `
## 1. Qu'est-ce qu'un droit ?
Un **droit**, c'est ce que tu peux exiger parce que la loi te le permet ou te protège. Tous les enfants ont des droits, qu'ils soient filles ou garçons, riches ou pauvres, de la ville ou du village.

Ces droits sont écrits dans des textes importants :
- la **Convention relative aux droits de l'enfant** (ONU, 1989), que le Sénégal a acceptée ;
- la **Charte africaine des droits et du bien-être de l'enfant** (1990), le texte de l'Afrique.

Un **enfant**, dans ces textes, c'est toute personne de **moins de 18 ans**.

## 2. Les principaux droits de l'enfant
| Droit | Exemple |
|---|---|
| Droit à la vie et à un nom | être déclaré à l'état civil à la naissance (avoir un acte de naissance) |
| Droit à l'éducation | aller à l'école |
| Droit à la santé | être soigné, être vacciné |
| Droit à une alimentation suffisante | manger à sa faim |
| Droit à la protection | ne pas être battu, exploité ni maltraité |
| Droit aux loisirs | jouer, se reposer |
| Droit d'exprimer son avis | donner son opinion sur ce qui le concerne |

>! **Exemple** : Modou, 11 ans, ne va plus à l'école parce qu'on l'envoie mendier dans la rue toute la journée. Son **droit à l'éducation** et son **droit à la protection** ne sont pas respectés.

## 3. Les devoirs de l'enfant
Avoir des droits, c'est aussi avoir des **devoirs**. Un **devoir**, c'est ce que tu dois faire pour bien vivre avec les autres.
- **Respecter** ses parents, les personnes âgées, ses maîtres et ses camarades.
- **Bien travailler** à l'école et être assidu (venir tous les jours, à l'heure).
- **Aider** à la maison selon son âge.
- **Respecter** les biens des autres et les biens publics (tables-bancs, robinets, arbres).
- **Respecter les droits des autres** : ton droit s'arrête là où commence celui des autres.

## 4. Qui protège les droits de l'enfant ?
D'abord les **parents**, puis l'**école**, l'**État** (les lois, la justice, la police) et des associations. Un enfant en danger peut en parler à un adulte de confiance : un parent, le maître ou la maîtresse, le directeur.

## Erreurs fréquentes
- Croire que les droits sont seulement pour les garçons, ou seulement pour les enfants qui vont à l'école : **tous** les enfants ont les mêmes droits.
- Oublier les devoirs : droits et devoirs vont **ensemble**.

> **À retenir** :
> - Un enfant est une personne de moins de 18 ans.
> - Il a des droits : vie et nom, éducation, santé, alimentation, protection, loisirs, expression.
> - Il a aussi des devoirs : respecter les autres, bien travailler, aider, respecter les biens publics.
> - Textes : Convention relative aux droits de l'enfant (1989), Charte africaine des droits et du bien-être de l'enfant (1990).
`,
      exercices: [
        { type: "qcm", question: "Jusqu'à quel âge est-on un enfant selon la Convention relative aux droits de l'enfant ?", choix: ["10 ans", "15 ans", "18 ans", "21 ans"], reponse: 2, explication: "Un enfant est toute personne de **moins de 18 ans**." },
        { type: "vf", question: "Les droits de l'enfant concernent seulement les garçons.", reponse: false, explication: "Filles et garçons ont **les mêmes droits**." },
        { type: "qcm", question: "Awa a été vaccinée contre la rougeole. Quel droit est respecté ?", choix: ["Le droit aux loisirs", "Le droit à la santé", "Le droit à un nom", "Le droit d'exprimer son avis"], reponse: 1, explication: "La vaccination protège la santé : c'est le **droit à la santé**." },
        { type: "saisie", question: "Quel document prouve qu'un enfant a été déclaré à l'état civil à sa naissance ? (trois mots)", reponses: ["acte de naissance", "un acte de naissance", "l'acte de naissance", "extrait de naissance", "extrait d'acte de naissance"], explication: "L'**acte de naissance** prouve que l'enfant a un nom et une existence officielle : c'est le droit à un nom." },
        { type: "qcm", question: "Lequel de ces comportements est un devoir de l'enfant ?", choix: ["Jouer après les cours", "Être soigné quand il est malade", "Respecter ses camarades et ses maîtres", "Recevoir un nom"], reponse: 2, explication: "Respecter les autres est un **devoir**. Les autres propositions sont des **droits**." },
        { type: "vf", question: "Casser les robinets de l'école ne gêne personne, car ils appartiennent à l'État.", reponse: false, explication: "Les biens publics servent à **tous**. Les respecter est un devoir de chaque élève." },
        { type: "qcm", question: "Fatou, 12 ans, travaille toute la journée au marché au lieu d'aller à l'école. Quels droits ne sont pas respectés ?", choix: ["Le droit à l'éducation et le droit à la protection", "Le droit à un nom et le droit à la vie", "Le droit d'exprimer son avis seulement", "Aucun droit, car elle gagne de l'argent"], reponse: 0, explication: "Elle ne va pas à l'école (**éducation**) et elle fait un travail d'adulte (**protection** contre l'exploitation)." },
        { type: "saisie", question: "Complète : « Ton droit s'arrête là où commence le droit des … »", reponses: ["autres", "des autres"], explication: "On doit **respecter les droits des autres**." },
        { type: "redaction", question: "Cite trois droits et trois devoirs de l'enfant. Explique en une phrase pourquoi droits et devoirs vont ensemble.", corrige: `**Trois droits** : le droit à l'éducation (aller à l'école), le droit à la santé (être soigné), le droit à la protection (ne pas être maltraité). On accepte aussi : droit à un nom, à l'alimentation, aux loisirs, à l'expression.

**Trois devoirs** : respecter ses parents et ses maîtres, bien travailler à l'école, respecter les biens publics. On accepte aussi : aider à la maison, respecter les droits des autres.

**Pourquoi ensemble** : si chacun veut ses droits sans faire ses devoirs, on ne peut pas bien vivre ensemble ; en faisant mes devoirs, je respecte aussi les droits des autres.` },
      ],
    },
    {
      id: "vie-famille-ecole",
      titre: "La vie en famille et à l'école",
      theme: "Vivre ensemble",
      cours: `
## 1. La famille
La **famille** est le premier groupe dans lequel tu vis.
- La **famille restreinte** (ou nucléaire) : le père, la mère et les enfants.
- La **famille élargie** : on y ajoute les grands-parents, les oncles, les tantes, les cousins… Au Sénégal, beaucoup d'enfants vivent dans une famille élargie, dans la même concession.

Dans la famille, chacun a un **rôle** : les parents nourrissent, soignent, éduquent et protègent les enfants ; les enfants respectent leurs parents, les aînés, et aident selon leur âge (balayer, faire une course, garder le petit frère un moment). L'entente demande du **respect**, du **dialogue** et du **partage**.

## 2. L'école
L'école est un lieu où l'on **apprend** et où l'on apprend à **vivre ensemble**. On y rencontre :
- le **directeur** ou la **directrice**, qui dirige l'école ;
- les **maîtres** et **maîtresses**, qui enseignent ;
- les **élèves** ;
- les **parents d'élèves**, réunis dans une association (APE) et dans le **comité de gestion de l'école** (CGE), qui aident l'école.

## 3. Le règlement intérieur
Le **règlement intérieur** fixe les règles de l'école : arriver à l'heure, être propre, respecter les autres, ne pas se battre, prendre soin du matériel. Une **règle** protège tout le monde. Celui qui ne respecte pas la règle reçoit une **sanction** juste, pour l'aider à changer, et répare si possible ce qu'il a abîmé.

## 4. Le gouvernement scolaire
Dans beaucoup d'écoles, les élèves élisent un **gouvernement scolaire** : un président et des « ministres » (de la propreté, de la santé, des sports, de l'environnement…). Les élèves apprennent ainsi à **voter**, à prendre des **responsabilités** et à servir les autres.

>! **Exemple** : Aïssatou est « ministre de la propreté ». Avec son équipe, elle organise le balayage de la cour le lundi et vérifie que les poubelles sont vidées.

## Erreurs fréquentes
- Une sanction n'est pas une vengeance : elle sert à faire respecter la règle.
- Le gouvernement scolaire ne commande pas les maîtres : il aide à la bonne marche de l'école.

> **À retenir** :
> - Famille restreinte : parents et enfants ; famille élargie : avec grands-parents, oncles, tantes, cousins.
> - Chacun a un rôle ; on vit bien ensemble grâce au respect, au dialogue et au partage.
> - Le règlement intérieur fixe les règles de l'école ; ne pas les respecter entraîne une sanction.
> - Le gouvernement scolaire, élu par les élèves, apprend à prendre des responsabilités.
`,
      exercices: [
        { type: "qcm", question: "Qui fait partie de la famille restreinte ?", choix: ["Les parents et leurs enfants", "Tous les habitants du quartier", "Les grands-parents seulement", "Les cousins et les oncles"], reponse: 0, explication: "La famille restreinte, c'est **le père, la mère et les enfants**. Avec les grands-parents, oncles et cousins, on parle de famille élargie." },
        { type: "saisie", question: "Comment appelle-t-on la famille qui comprend aussi les grands-parents, les oncles et les cousins ?", reponses: ["famille élargie", "la famille élargie", "élargie"], explication: "C'est la **famille élargie**." },
        { type: "vf", question: "Dans la famille, les enfants n'ont aucun rôle.", reponse: false, explication: "Les enfants respectent les aînés et **aident selon leur âge**." },
        { type: "saisie", question: "Quel document fixe les règles à respecter dans l'école ? (deux mots)", reponses: ["règlement intérieur", "le règlement intérieur", "règlement", "règlement intérieur de l'école", "le règlement intérieur de l'école"], explication: "C'est le **règlement intérieur** de l'école." },
        { type: "qcm", question: "À quoi sert une sanction à l'école ?", choix: ["À se venger de l'élève", "À humilier l'élève devant tous", "À rien", "À faire respecter la règle et aider l'élève à changer"], reponse: 3, explication: "La sanction est **juste** et sert à faire respecter la règle, pas à se venger." },
        { type: "qcm", question: "Qui élit le gouvernement scolaire ?", choix: ["Le directeur seul", "Les parents d'élèves", "Le maire", "Les élèves"], reponse: 3, explication: "Ce sont **les élèves** qui votent pour leur gouvernement scolaire." },
        { type: "vf", question: "Les parents d'élèves peuvent aider l'école, par exemple dans le comité de gestion de l'école.", reponse: true, explication: "Les parents participent à la vie de l'école (association des parents d'élèves, comité de gestion)." },
        { type: "qcm", question: "Deux élèves se disputent un ballon dans la cour. Quelle est la meilleure solution ?", choix: ["Se battre", "Dialoguer et jouer à tour de rôle", "Cacher le ballon", "Insulter l'autre"], reponse: 1, explication: "Le **dialogue** et le **partage** permettent de régler un conflit sans violence." },
        { type: "redaction", question: "Tu viens d'être élu(e) ministre de l'environnement du gouvernement scolaire. Écris trois actions que tu vas proposer pour ton école.", corrige: `Exemple de réponse :
1. Planter des arbres dans la cour et organiser un tour d'arrosage par classe.
2. Installer des poubelles dans chaque classe et dans la cour, et les vider chaque jour.
3. Interdire de jeter les sachets plastiques par terre et organiser un balayage de la cour chaque semaine.

On accepte toute action utile et réaliste (nettoyer les toilettes, fermer les robinets, faire des affiches…). Les actions doivent être **précises** et faites **ensemble**.` },
      ],
    },
    {
      id: "commune-collectivites",
      titre: "La commune et les collectivités territoriales",
      theme: "Vivre ensemble",
      cours: `
## 1. Le découpage du Sénégal
Pour être bien administré, le Sénégal est divisé en **14 régions**. Chaque région est divisée en **départements**, et chaque département en **arrondissements** : c'est le découpage de l'**État**.

Tout le territoire est aussi partagé en **communes** (des villes et des communes rurales), gérées par des **élus**. Chaque commune se trouve dans un département.

## 2. Les collectivités territoriales
Une **collectivité territoriale** est un territoire dont les habitants **élisent** leurs responsables pour gérer leurs propres affaires. Depuis la réforme de 2013 (appelée « Acte III de la décentralisation »), les collectivités territoriales du Sénégal sont :
- le **département** (dirigé par un conseil départemental et son président) ;
- la **commune** (dirigée par un conseil municipal et le maire).

La région reste un découpage de l'État, dirigé par le **gouverneur**, nommé par l'État. Le département a aussi un **préfet**, et l'arrondissement un **sous-préfet**, qui représentent l'État.

## 3. La commune
La **commune** est la collectivité la plus proche des habitants.
- Les habitants majeurs **élisent** les **conseillers municipaux** ; ils forment le **conseil municipal**.
- Le **maire** est **élu directement par les électeurs** de la commune (c'est le cas depuis la loi de 2021). Il dirige la commune avec ses adjoints, qui sont choisis par le conseil municipal.

**Rôle de la commune** : état civil (actes de naissance, de mariage, de décès), propreté et ramassage des ordures, entretien des rues, marchés, écoles et postes de santé (entretien), éclairage public.

**Les ressources de la commune** : les impôts et taxes payés par les habitants (taxes du marché, par exemple) et l'aide de l'État.

>! **Exemple** : le papa de Bineta va à la **mairie** pour déclarer la naissance du bébé. L'officier d'état civil lui donne un **extrait d'acte de naissance**.

## 4. Le rôle des habitants
Les habitants participent à la vie de la commune : ils votent, paient leurs taxes, respectent les biens publics, participent au **set setal** (nettoyage du quartier).

## Erreurs fréquentes
- Le maire est **élu** ; le gouverneur et le préfet sont **nommés** par l'État.
- La mairie est le bâtiment ; la commune est le territoire et ses habitants.

> **À retenir** :
> - Sénégal : 14 régions, divisées en départements, eux-mêmes divisés en arrondissements ; tout le territoire est partagé en communes.
> - Collectivités territoriales : le département et la commune, gérés par des élus.
> - La commune est dirigée par le conseil municipal et le maire ; elle s'occupe de l'état civil, de la propreté, des marchés…
> - Le gouverneur (région), le préfet (département) et le sous-préfet (arrondissement) représentent l'État.
`,
      exercices: [
        { type: "saisie", question: "En combien de régions le Sénégal est-il divisé ?", reponses: ["14", "quatorze", "14 régions", "quatorze régions"], explication: "Le Sénégal compte **14 régions**." },
        { type: "qcm", question: "Qui dirige la commune ?", choix: ["Le gouverneur", "Le directeur d'école", "Le préfet", "Le maire et le conseil municipal"], reponse: 3, explication: "La commune est dirigée par le **maire** et le **conseil municipal**, élus." },
        { type: "vf", question: "Le gouverneur de région est élu par les habitants.", reponse: false, explication: "Le gouverneur est **nommé** par l'État ; il le représente dans la région." },
        { type: "qcm", question: "Où va-t-on déclarer la naissance d'un bébé ?", choix: ["À la mairie (état civil)", "Au marché", "À l'école", "Au poste de police"], reponse: 0, explication: "L'**état civil** est tenu par la commune, à la mairie (ou dans un centre d'état civil)." },
        { type: "qcm", question: "Lequel de ces services est un rôle de la commune ?", choix: ["Faire les lois du pays", "Commander l'armée", "Ramasser les ordures et entretenir le marché", "Signer des accords avec d'autres pays"], reponse: 2, explication: "La commune s'occupe des affaires proches des habitants : **propreté, marchés, état civil**." },
        { type: "saisie", question: "Comment appelle-t-on l'ensemble des conseillers élus d'une commune ? (deux mots)", reponses: ["conseil municipal", "le conseil municipal"], explication: "Ce sont les membres du **conseil municipal**." },
        { type: "vf", question: "Les taxes payées par les habitants aident la commune à fonctionner.", reponse: true, explication: "Les impôts et taxes sont les **ressources** de la commune, avec l'aide de l'État." },
        { type: "qcm", question: "Quelles sont les deux collectivités territoriales du Sénégal depuis 2013 ?", choix: ["La région et le village", "L'arrondissement et le quartier", "Le département et la commune", "La région et l'arrondissement"], reponse: 2, explication: "Depuis l'Acte III de la décentralisation (2013), ce sont **le département et la commune**." },
        { type: "redaction", question: "Les ordures s'entassent dans ton quartier. Écris une courte lettre au maire (4 à 5 lignes) pour lui expliquer le problème et proposer une solution.", corrige: `Exemple de lettre :

Monsieur le Maire,
Je suis élève au CM2 et j'habite le quartier Médina. Depuis un mois, les ordures s'entassent près du marché. Elles sentent mauvais et attirent les mouches et les moustiques, qui donnent des maladies.
Je vous propose d'installer des bacs à ordures et de faire passer le camion deux fois par semaine. Les jeunes du quartier sont prêts à organiser un set setal.
Veuillez agréer, Monsieur le Maire, mes salutations respectueuses.
Moussa Diop

**Ce qu'il faut** : une formule d'appel, le problème et ses dangers, une solution, une formule de politesse, une signature.` },
      ],
    },
    {
      id: "symboles-republique",
      titre: "Les symboles de la République du Sénégal",
      theme: "Vivre ensemble",
      cours: `
## 1. Le Sénégal, une République indépendante
Le Sénégal est devenu **indépendant** en **1960**. Chaque année, le **4 avril**, on célèbre la **fête de l'indépendance** (fête nationale), avec un défilé : le 4 avril 1960, des accords de transfert des pouvoirs ont été signés avec la France. Le Sénégal est devenu indépendant **seul** le **20 août 1960**, quand il a quitté la Fédération du Mali. Le Sénégal est une **République** : le pouvoir appartient au peuple, qui choisit ses dirigeants par le vote.

Les **symboles** de la République représentent le pays et unissent tous les Sénégalais. Ils sont fixés par la **Constitution** (la loi la plus importante du pays) et par la loi.

## 2. Le drapeau
Le drapeau est formé de **trois bandes verticales égales** : **vert**, **or** (jaune), **rouge**. Au centre de la bande or, il y a une **étoile verte à cinq branches**.

Le sens qu'on donne souvent aux couleurs :
- le **vert** : l'espoir ;
- l'**or** (jaune) : la richesse et le travail ;
- le **rouge** : le sang versé et le courage.

On respecte le drapeau : on se lève et on se tait pendant la **montée des couleurs**.

## 3. La devise
La devise du Sénégal est : **« Un Peuple – Un But – Une Foi »**.
- **Un Peuple** : tous les Sénégalais forment une seule nation.
- **Un But** : ils travaillent ensemble au développement du pays.
- **Une Foi** : ils partagent la même confiance en l'avenir de leur pays.

## 4. L'hymne national
L'hymne national s'appelle **« Le Lion rouge »**. Il commence par : « Pincez tous vos koras, frappez les balafons ». Ses paroles ont été écrites par **Léopold Sédar Senghor**, premier président du Sénégal ; la musique est d'**Herbert Pepper**. On le chante debout, au garde-à-vous.

## 5. Les armoiries
Les **armoiries** sont l'emblème officiel du pays. On y voit notamment un **lion** (la force) et un **baobab** (l'arbre du Sénégal), avec l'étoile verte et la devise.

>! **Méthode** : pour ne pas confondre, retiens : *drapeau = couleurs*, *devise = phrase*, *hymne = chant*, *armoiries = dessin (lion, baobab)*.

## Erreurs fréquentes
- L'étoile est **verte**, sur la bande **jaune (or)** du milieu.
- L'ordre des couleurs, du côté du mât : vert, or, rouge.

> **À retenir** :
> - Drapeau : vert, or, rouge, étoile verte à cinq branches au centre.
> - Devise : « Un Peuple – Un But – Une Foi ».
> - Hymne : « Le Lion rouge » (paroles de Léopold Sédar Senghor).
> - Armoiries : lion et baobab.
> - Fête de l'indépendance : 4 avril (accords du 4 avril 1960) ; Sénégal indépendant seul : 20 août 1960.
`,
      exercices: [
        { type: "qcm", question: "Quelles sont les couleurs du drapeau du Sénégal, dans l'ordre ?", choix: ["Rouge, or, vert", "Vert, or, rouge", "Vert, blanc, rouge", "Bleu, blanc, rouge"], reponse: 1, explication: "Le drapeau est **vert, or, rouge**, avec une étoile verte au centre." },
        { type: "qcm", question: "De quelle couleur est l'étoile du drapeau sénégalais ?", choix: ["Jaune", "Rouge", "Blanche", "Verte"], reponse: 3, explication: "L'étoile est **verte**, à cinq branches, au centre de la bande or." },
        { type: "saisie", question: "Combien de branches a l'étoile du drapeau ?", reponses: ["5", "cinq"], explication: "C'est une étoile à **cinq branches**." },
        { type: "saisie", question: "Écris la devise du Sénégal.", reponses: ["Un Peuple – Un But – Une Foi", "Un Peuple, Un But, Une Foi", "Un Peuple Un But Une Foi", "Un Peuple - Un But - Une Foi"], explication: "La devise est **« Un Peuple – Un But – Une Foi »**." },
        { type: "qcm", question: "Comment s'appelle l'hymne national du Sénégal ?", choix: ["Le Lion rouge", "Le Baobab", "La Teranga", "L'Étoile verte"], reponse: 0, explication: "L'hymne s'appelle **« Le Lion rouge »**." },
        { type: "qcm", question: "Qui a écrit les paroles de l'hymne national ?", choix: ["Cheikh Anta Diop", "Lat Dior", "Blaise Diagne", "Léopold Sédar Senghor"], reponse: 3, explication: "Les paroles sont de **Léopold Sédar Senghor**, poète et premier président du Sénégal." },
        { type: "vf", question: "On célèbre la fête de l'indépendance du Sénégal le 4 avril.", reponse: true, explication: "Le **4 avril** est la fête de l'indépendance (indépendance en 1960)." },
        { type: "qcm", question: "Quel animal et quel arbre trouve-t-on sur les armoiries du Sénégal ?", choix: ["Un lion et un baobab", "Un éléphant et un palmier", "Un aigle et un manguier", "Un cheval et un fromager"], reponse: 0, explication: "Les armoiries montrent un **lion** et un **baobab**." },
        { type: "vf", question: "Pendant la montée des couleurs, on peut continuer à jouer.", reponse: false, explication: "On se lève, on se tait et on reste immobile : c'est une marque de **respect** envers le drapeau." },
        { type: "redaction", question: "Explique à un petit frère ce que veut dire la devise « Un Peuple – Un But – Une Foi » (3 ou 4 phrases).", corrige: `Exemple de réponse :
« Un Peuple » veut dire que tous les Sénégalais, quelles que soient leur ethnie, leur langue ou leur religion, forment une seule nation. « Un But » veut dire qu'ils travaillent ensemble pour que le pays se développe. « Une Foi » veut dire qu'ils ont la même confiance en l'avenir du Sénégal. Cette devise nous invite à rester **unis**.` },
      ],
    },
    {
      id: "institutions",
      titre: "Les institutions de la République",
      theme: "Vivre ensemble",
      cours: `
## 1. La Constitution
La **Constitution** est la loi la plus importante du pays. Elle dit comment le pays est organisé, qui dirige et quels sont les droits des citoyens. La Constitution actuelle du Sénégal date de **2001** ; elle a été modifiée plusieurs fois.

## 2. Trois pouvoirs séparés
Pour éviter qu'une seule personne ait tous les pouvoirs, la Constitution les **sépare** :
| Pouvoir | Qui ? | Rôle |
|---|---|---|
| **Exécutif** | le Président de la République et le Gouvernement | appliquer les lois, diriger le pays |
| **Législatif** | l'Assemblée nationale (les députés) | voter les lois |
| **Judiciaire** | les juges, les cours et tribunaux | juger, faire respecter les lois |

## 3. Le Président de la République
- Il est **élu par le peuple** (tous les électeurs votent eux-mêmes pour lui : c'est le suffrage universel direct), pour **5 ans**.
- Nul ne peut faire plus de **deux mandats consécutifs** (un **mandat** est la période de 5 ans pour laquelle il est élu : au plus deux de suite).
- Il est le **chef de l'État** et le chef des armées ; il nomme le **Premier ministre**.

## 4. Le Gouvernement
Le **Premier ministre** dirige le Gouvernement, formé des **ministres** (ministre de l'Éducation nationale, de la Santé, de l'Agriculture…). Chaque ministre s'occupe d'un domaine.

## 5. L'Assemblée nationale
Les **députés** sont élus par le peuple pour **5 ans**. Ils forment l'**Assemblée nationale**, qui **vote les lois** et le budget de l'État et contrôle l'action du Gouvernement.

## 6. La justice
Les **juges** règlent les conflits entre les personnes et punissent ceux qui ne respectent pas la loi. Ils doivent être **indépendants** : personne ne peut leur dicter leur décision.

Le **Conseil constitutionnel** vérifie que les lois respectent la Constitution et proclame les résultats de l'élection présidentielle.

>! **Exemple** : une nouvelle loi pour protéger les enfants est préparée par le Gouvernement, **votée** par les députés, puis **promulguée** (signée pour devenir officielle) par le Président. Si quelqu'un ne la respecte pas, un **juge** peut le sanctionner.

## Erreurs fréquentes
- Ce n'est pas le Président qui vote les lois : ce sont les **députés**.
- Le Premier ministre est **nommé** par le Président ; il n'est pas élu par le peuple.

> **À retenir** :
> - Constitution : loi la plus importante (2001).
> - Exécutif : Président (élu pour 5 ans, deux mandats consécutifs au plus) et Gouvernement (Premier ministre et ministres).
> - Législatif : Assemblée nationale, les députés votent les lois.
> - Judiciaire : les juges, indépendants ; le Conseil constitutionnel veille au respect de la Constitution.
`,
      exercices: [
        { type: "qcm", question: "Qui vote les lois au Sénégal ?", choix: ["Le Président de la République", "Les députés de l'Assemblée nationale", "Les maires", "Les juges"], reponse: 1, explication: "Le **pouvoir législatif** appartient à l'Assemblée nationale : les **députés** votent les lois." },
        { type: "saisie", question: "Pour combien d'années le Président de la République est-il élu ?", reponses: ["5", "cinq"], explication: "Le mandat du Président dure **5 ans**." },
        { type: "vf", question: "Le Premier ministre est élu directement par le peuple.", reponse: false, explication: "Le Premier ministre est **nommé** par le Président de la République." },
        { type: "qcm", question: "Quel est le rôle des juges ?", choix: ["Voter le budget", "Diriger l'armée", "Juger et faire respecter les lois", "Nommer les ministres"], reponse: 2, explication: "Les juges exercent le **pouvoir judiciaire** : ils jugent." },
        { type: "saisie", question: "Comment s'appelle la loi la plus importante d'un pays ?", reponses: ["Constitution", "la Constitution"], explication: "C'est la **Constitution** (au Sénégal, celle de 2001)." },
        { type: "qcm", question: "Combien de mandats consécutifs un Président peut-il faire au plus ?", choix: ["Un", "Autant qu'il veut", "Trois", "Deux"], reponse: 3, explication: "Nul ne peut faire plus de **deux mandats consécutifs**." },
        { type: "qcm", question: "Le Président de la République, le Premier ministre et les ministres forment le pouvoir…", choix: ["judiciaire", "législatif", "municipal", "exécutif"], reponse: 3, explication: "Ils appliquent les lois et dirigent le pays : c'est le **pouvoir exécutif**." },
        { type: "vf", question: "On sépare les pouvoirs pour qu'une seule personne n'ait pas tous les pouvoirs.", reponse: true, explication: "La **séparation des pouvoirs** protège la liberté des citoyens." },
        { type: "redaction", question: "Complète ce tableau en phrases : pour chaque pouvoir (exécutif, législatif, judiciaire), dis qui l'exerce et ce qu'il fait.", corrige: `- **Pouvoir exécutif** : il est exercé par le Président de la République et le Gouvernement (Premier ministre et ministres). Ils dirigent le pays et font appliquer les lois.
- **Pouvoir législatif** : il est exercé par l'Assemblée nationale. Les députés, élus pour 5 ans, votent les lois et le budget.
- **Pouvoir judiciaire** : il est exercé par les juges des cours et tribunaux. Ils jugent les conflits et sanctionnent ceux qui ne respectent pas la loi.` },
      ],
    },
    {
      id: "citoyennete-vote",
      titre: "La citoyenneté et le vote",
      theme: "Vivre ensemble",
      cours: `
## 1. Qu'est-ce qu'un citoyen ?
Un **citoyen** est une personne qui a la **nationalité** d'un pays et qui participe à sa vie. Le citoyen a des **droits** et des **devoirs**.

| Droits du citoyen | Devoirs du citoyen |
|---|---|
| voter et être candidat | respecter les lois |
| s'exprimer librement | payer ses impôts |
| être protégé par la loi et la justice | défendre le pays |
| aller et venir librement | respecter les biens publics et les autres |

## 2. Le vote
Le **vote** permet aux citoyens de choisir leurs dirigeants : le Président, les députés, les conseillers municipaux et départementaux.
- Au Sénégal, on peut voter à partir de **18 ans**, si l'on est inscrit sur les **listes électorales** et qu'on a sa **carte d'électeur**.
- Le vote est **secret** : on passe dans l'**isoloir**, on met son bulletin dans une enveloppe, puis dans l'**urne**.
- Le vote est **personnel** : personne ne vote à ta place.
- Pour le **Président de la République**, il faut avoir **plus de la moitié des voix** (la majorité absolue) ; sinon, il y a un **2e tour** entre les deux candidats arrivés en tête.
- Pour les **députés** (165), le vote est **mixte** : la plupart sont élus dans chaque **département** (la liste qui arrive en tête gagne les sièges du département) ; les autres sont élus sur une **liste nationale**, et chaque liste reçoit des sièges selon son nombre de voix (c'est la **proportionnelle**).
- Les candidats battus acceptent le résultat : c'est la **démocratie**.

>! **Les étapes du vote** : je montre ma carte d'électeur et ma pièce d'identité → je prends les bulletins et une enveloppe → je passe dans l'isoloir → je mets mon bulletin dans l'urne → je signe la liste → mon doigt est marqué à l'encre.

## 3. Le bon citoyen au quotidien
On n'attend pas 18 ans pour être un bon citoyen : respecter les règles de l'école, garder la rue propre, ne pas abîmer les biens publics, aider les autres, voter pour le gouvernement scolaire.

## Erreurs fréquentes
- Le vote est **secret** : on ne montre pas son bulletin.
- Acheter ou vendre une voix est **interdit**.

> **À retenir** :
> - Le citoyen a des droits (voter, s'exprimer…) et des devoirs (respecter les lois, payer ses impôts…).
> - On vote à partir de 18 ans, avec une carte d'électeur.
> - Le vote est secret (isoloir, urne) et personnel.
> - Président : plus de la moitié des voix, sinon 2e tour entre les deux premiers. Députés : vote mixte (par département et sur une liste nationale).
> - En démocratie, on accepte le résultat du vote.
`,
      exercices: [
        { type: "saisie", question: "À partir de quel âge peut-on voter au Sénégal ?", reponses: ["18", "18 ans", "dix-huit"], explication: "On vote à partir de **18 ans**." },
        { type: "qcm", question: "Comment s'appelle la petite cabine où l'électeur choisit son bulletin en secret ?", choix: ["L'urne", "L'isoloir", "Le bureau", "La mairie"], reponse: 1, explication: "C'est l'**isoloir** ; ensuite on met l'enveloppe dans l'**urne**." },
        { type: "vf", question: "Un voisin peut voter à ta place si tu es d'accord.", reponse: false, explication: "Le vote est **personnel** : chacun vote pour lui-même." },
        { type: "qcm", question: "Lequel est un devoir du citoyen ?", choix: ["S'exprimer librement", "Être candidat à une élection", "Payer ses impôts", "Aller et venir librement"], reponse: 2, explication: "**Payer ses impôts** est un devoir : cet argent sert à construire des écoles, des routes, des hôpitaux." },
        { type: "saisie", question: "Dans quelle boîte glisse-t-on l'enveloppe pour voter ?", reponses: ["urne", "l'urne", "une urne"], explication: "C'est l'**urne**." },
        { type: "vf", question: "Le vote est secret.", reponse: true, explication: "Le **secret du vote** permet à chacun de choisir librement." },
        { type: "qcm", question: "Après une élection, que doivent faire les candidats battus dans une démocratie ?", choix: ["Accepter le résultat", "Empêcher le vainqueur de travailler", "Casser les urnes", "Refuser de parler aux électeurs"], reponse: 0, explication: "En démocratie, on **accepte le résultat** du vote, dans la paix." },
        { type: "qcm", question: "Ibou, 11 ans, veut être un bon citoyen dès maintenant. Que peut-il faire ?", choix: ["Ne pas abîmer les tables-bancs et garder sa rue propre", "Voter à l'élection présidentielle", "Payer les impôts de son père", "Devenir député"], reponse: 0, explication: "À son âge, il est bon citoyen en **respectant les biens publics** et les règles." },
        { type: "redaction", question: "Raconte en 4 ou 5 phrases comment se passe le vote d'un électeur, de son arrivée au bureau de vote jusqu'à son départ.", corrige: `Exemple :
L'électeur arrive au bureau de vote avec sa carte d'électeur et sa pièce d'identité. Il les montre aux membres du bureau, puis il prend les bulletins des candidats et une enveloppe. Il entre seul dans l'isoloir et met dans l'enveloppe le bulletin de son choix. Il sort et glisse l'enveloppe dans l'urne. Il signe la liste et son doigt est marqué à l'encre, pour qu'il ne vote pas deux fois.` },
      ],
    },
    {
      id: "paix-tolerance-solidarite",
      titre: "La paix, la tolérance et la solidarité (teranga)",
      theme: "Vivre ensemble",
      cours: `
## 1. La paix
La **paix**, c'est vivre ensemble sans violence ni guerre. Elle se construit chaque jour : à la maison, à l'école, dans le quartier. Quand il y a un **conflit** (une dispute), on le règle par le **dialogue** et la **médiation** (un **médiateur**, quelqu'un de calme, aide les deux personnes à s'entendre).

## 2. La tolérance
Au Sénégal vivent des personnes de différentes **ethnies** (Wolof, Pulaar, Sérère, Diola, Mandingue, Soninké…), **langues** et **religions**. La **tolérance**, c'est accepter que les autres soient différents de nous et les respecter.

Le **cousinage à plaisanterie** (« kal » en wolof) permet à des groupes de se taquiner sans se fâcher : par exemple entre **Sérères et Diolas** ou entre **Sérères et Peuls**. Il existe aussi entre noms de famille (par exemple entre les **Ndiaye** et les **Diop**). Il aide à garder la paix.

## 3. La solidarité et la teranga
- La **solidarité**, c'est s'entraider : aider un voisin malade, cotiser pour une famille en difficulté, partager son repas.
- La **teranga** est l'**hospitalité** sénégalaise : bien accueillir l'étranger, partager avec lui, le faire se sentir chez lui.

>! **Exemple** : un nouvel élève venu de Guinée arrive dans la classe. Les élèves lui montrent l'école, l'invitent à jouer et l'aident à rattraper les leçons : c'est la teranga et la solidarité.

## 4. Ce qui menace la paix
La violence, les insultes, les moqueries sur l'origine ou la religion, l'injustice et l'exclusion. Il faut les refuser.

## Erreurs fréquentes
- Être tolérant ne veut pas dire tout accepter : on n'accepte pas la violence ni l'injustice.
- La solidarité ne se fait pas seulement avec la famille : elle concerne tout le monde.

> **À retenir** :
> - Paix : vivre sans violence ; on règle les conflits par le dialogue et la médiation.
> - Tolérance : accepter et respecter les différences (ethnie, langue, religion).
> - Solidarité : s'entraider ; teranga : hospitalité sénégalaise.
> - Le cousinage à plaisanterie aide à garder la paix.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on l'hospitalité sénégalaise ?", reponses: ["teranga", "la teranga", "téranga", "la téranga"], explication: "C'est la **teranga** : bien accueillir et partager." },
        { type: "qcm", question: "Que veut dire « être tolérant » ?", choix: ["Accepter et respecter les différences des autres", "Se moquer des autres", "Ne parler qu'avec ceux qui nous ressemblent", "Tout accepter, même la violence"], reponse: 0, explication: "La **tolérance**, c'est respecter ceux qui sont différents, mais sans accepter la violence." },
        { type: "vf", question: "Le cousinage à plaisanterie aide à garder la paix entre les groupes.", reponse: true, explication: "On se taquine **sans se fâcher** : cela rapproche les personnes." },
        { type: "qcm", question: "Deux camarades se disputent. Le meilleur moyen de régler le conflit est…", choix: ["de se battre à la sortie", "de dialoguer, avec l'aide d'un médiateur si besoin", "de ne plus jamais se parler", "d'insulter l'autre"], reponse: 1, explication: "Le **dialogue** et la **médiation** règlent les conflits sans violence." },
        { type: "qcm", question: "Lequel de ces gestes est un acte de solidarité ?", choix: ["Garder tout son goûter pour soi", "Se moquer d'un camarade pauvre", "Refuser de prêter un crayon", "Cotiser pour aider une famille dont la maison a brûlé"], reponse: 3, explication: "**S'entraider**, c'est la solidarité." },
        { type: "vf", question: "Se moquer de la religion d'un camarade est un acte de tolérance.", reponse: false, explication: "Les moqueries sur l'origine ou la religion **menacent la paix**." },
        { type: "saisie", question: "Comment appelle-t-on une personne calme qui aide deux personnes en dispute à s'entendre ?", reponses: ["médiateur", "un médiateur", "médiatrice", "une médiatrice"], explication: "C'est un **médiateur** (ou une médiatrice)." },
        { type: "qcm", question: "Un touriste perdu demande son chemin. Que fais-tu pour montrer la teranga ?", choix: ["Je l'ignore", "Je lui donne une fausse direction pour rire", "Je lui demande de l'argent d'abord", "Je l'aide poliment à trouver son chemin"], reponse: 3, explication: "La **teranga**, c'est bien accueillir et aider l'étranger." },
        { type: "redaction", question: "Un nouvel élève arrive dans ta classe. Il ne parle pas encore bien wolof et certains se moquent de lui. Que fais-tu ? Écris 4 ou 5 phrases.", corrige: `Exemple :
Je dis à mes camarades d'arrêter de se moquer de lui, car ce n'est pas respectueux. Je vais le voir pour lui souhaiter la bienvenue et je lui présente mes amis. Je lui montre l'école et je l'invite à jouer à la récréation. Je peux l'aider à apprendre quelques mots de wolof et lui demander de m'apprendre des mots de sa langue. Si les moqueries continuent, j'en parle au maître. C'est cela, la **tolérance**, la **solidarité** et la **teranga**.` },
      ],
    },
    {
      id: "egalite-filles-garcons",
      titre: "L'égalité entre les filles et les garçons",
      theme: "Vivre ensemble",
      cours: `
## 1. Égaux en droits
Les filles et les garçons sont **égaux en droits** et en **dignité** (ils ont la même valeur). La Constitution du Sénégal interdit les discriminations. Une **discrimination**, c'est traiter quelqu'un moins bien à cause de ce qu'il est (fille ou garçon, origine, handicap…).

## 2. Des situations à changer
Parfois, les filles et les garçons ne sont pas traités de la même façon :
- une fille qu'on retire de l'école pour qu'elle reste à la maison ou qu'on marie trop jeune ;
- toutes les tâches de la maison données aux filles, pendant que les garçons jouent ;
- l'idée fausse que certains métiers sont « pour les garçons » (ingénieur, pilote) et d'autres « pour les filles ».

Ce sont des **stéréotypes** : des idées toutes faites, souvent fausses.

## 3. Ce que dit la loi
- L'école est **obligatoire** pour tous les enfants de 6 à 16 ans, filles comme garçons.
- La **loi sur la parité** (2010) oblige les listes de candidats à certaines élections à compter autant de femmes que d'hommes, en alternance. C'est pourquoi il y a beaucoup de femmes députées.

## 4. Agir pour l'égalité
- Partager les tâches de la maison entre filles et garçons.
- Encourager les filles à aller loin dans les études.
- Choisir son métier selon ses goûts et ses talents, pas selon qu'on est fille ou garçon.

>! **Exemple** : dans la famille de Khady, le samedi, Khady balaie la cour, son frère Pape fait la vaisselle, puis ils inversent la semaine suivante. Chacun a aussi le temps d'apprendre ses leçons.

> **À retenir** :
> - Filles et garçons sont égaux en droits et en dignité.
> - Discrimination : traiter quelqu'un moins bien à cause de ce qu'il est ; elle est interdite.
> - Stéréotype : idée toute faite, souvent fausse.
> - L'école est obligatoire de 6 à 16 ans pour tous ; loi sur la parité (2010).
`,
      exercices: [
        { type: "vf", question: "Les filles et les garçons ont les mêmes droits.", reponse: true, explication: "Ils sont **égaux en droits et en dignité**." },
        { type: "qcm", question: "Qu'est-ce qu'une discrimination ?", choix: ["Un jeu de la cour", "Un métier", "Une règle de l'école", "Traiter quelqu'un moins bien à cause de ce qu'il est"], reponse: 3, explication: "La **discrimination** est interdite par la loi." },
        { type: "qcm", question: "« Les filles ne peuvent pas devenir pilotes d'avion. » Cette phrase est…", choix: ["une loi", "une vérité scientifique", "un stéréotype", "une devise"], reponse: 2, explication: "C'est une **idée toute faite et fausse** : un stéréotype. Des femmes sont pilotes." },
        { type: "saisie", question: "Comment appelle-t-on une idée toute faite, souvent fausse, sur un groupe de personnes ?", reponses: ["stéréotype", "un stéréotype", "cliché", "un cliché", "préjugé", "un préjugé", "stéréotypes", "des stéréotypes"], explication: "C'est un **stéréotype** (on dit aussi un cliché ou un préjugé)." },
        { type: "qcm", question: "De quel âge à quel âge l'école est-elle obligatoire au Sénégal ?", choix: ["De 3 à 10 ans", "De 8 à 12 ans", "De 6 à 16 ans", "De 10 à 20 ans"], reponse: 2, explication: "L'école est obligatoire **de 6 à 16 ans**, pour les filles comme pour les garçons." },
        { type: "vf", question: "Les tâches de la maison doivent toujours être faites par les filles.", reponse: false, explication: "Les tâches peuvent être **partagées** entre filles et garçons." },
        { type: "qcm", question: "Que demande la loi sur la parité de 2010 ?", choix: ["Autant de femmes que d'hommes sur les listes de candidats", "Que seuls les hommes soient candidats", "Que les filles quittent l'école à 12 ans", "Que chaque famille ait deux enfants"], reponse: 0, explication: "La **parité** : autant de femmes que d'hommes sur les listes, en alternance." },
        { type: "redaction", question: "Le père d'Astou veut qu'elle quitte l'école après le CFEE pour aider à la maison, alors que son frère continuera. Écris 4 ou 5 phrases pour convaincre le père de la laisser continuer.", corrige: `Exemple :
Monsieur, Astou a le même **droit à l'éducation** que son frère. L'école est d'ailleurs **obligatoire jusqu'à 16 ans**, pour les filles comme pour les garçons. Si elle continue ses études, elle pourra avoir un bon métier, gagner sa vie et aider sa famille. Les tâches de la maison peuvent être partagées entre Astou et son frère. Laissez-la aller au collège : toute la famille en sera fière.` },
      ],
    },
    {
      id: "organisations-africaines-internationales",
      titre: "Les organisations africaines et internationales",
      theme: "Vivre ensemble",
      cours: `
## 1. Pourquoi des organisations entre pays ?
Les pays se regroupent pour être **plus forts ensemble** : garder la paix, commercer, se développer, s'entraider en cas de catastrophe. Le Sénégal est membre de plusieurs organisations. En janvier 2025, le Mali, le Burkina Faso et le Niger ont quitté la CEDEAO.

## 2. Les organisations africaines
| Organisation | Création | Siège | But |
|---|---|---|---|
| **CEDEAO** (Communauté économique des États de l'Afrique de l'Ouest) | 1975 | Abuja (Nigeria) | libre circulation des personnes et des marchandises, paix en Afrique de l'Ouest |
| **UEMOA** (Union économique et monétaire ouest-africaine) | 1994 | Ouagadougou (Burkina Faso) | 8 pays qui utilisent la même monnaie, le **franc CFA** |
| **Union africaine** (UA) | 2002 (remplace l'OUA, créée en 1963) | Addis-Abeba (Éthiopie) | unité, paix et développement de toute l'Afrique |

## 3. Les organisations internationales
- L'**ONU** (Organisation des Nations unies), créée en **1945**, siège à **New York**. Presque tous les pays du monde en sont membres ; le Sénégal depuis 1960. Son but : la **paix** dans le monde et les droits de l'homme. Les **casques bleus** sont ses soldats de la paix : des soldats sénégalais en font souvent partie.
- Des agences de l'ONU aident les pays : l'**UNICEF** (les enfants), l'**OMS** (la santé), la **FAO** (l'alimentation), l'**UNESCO** (l'éducation et la culture ; l'île de Gorée est inscrite à son patrimoine mondial).

>! **Exemple** : grâce à la CEDEAO, une commerçante de Kaolack peut aller vendre ses tissus en Gambie ou en Côte d'Ivoire **sans visa**, avec un document de voyage reconnu : son **passeport** ou la **carte d'identité biométrique CEDEAO**.

## Erreurs fréquentes
- L'UEMOA est liée à la **monnaie** (franc CFA) ; la CEDEAO regroupe plus de pays et vise la libre circulation.
- L'Union africaine siège à **Addis-Abeba**, pas à Dakar.

> **À retenir** :
> - CEDEAO (1975, Abuja) : Afrique de l'Ouest, libre circulation, paix.
> - UEMOA (1994, Ouagadougou) : 8 pays, franc CFA.
> - Union africaine (2002, Addis-Abeba) : toute l'Afrique.
> - ONU (1945, New York) : paix mondiale ; agences UNICEF, OMS, FAO, UNESCO.
`,
      exercices: [
        { type: "qcm", question: "Quelle organisation regroupe 8 pays qui utilisent le franc CFA ?", choix: ["L'ONU", "L'UEMOA", "L'UNICEF", "L'Union africaine"], reponse: 1, explication: "L'**UEMOA** (Union économique et monétaire ouest-africaine) : 8 pays, une monnaie commune." },
        { type: "saisie", question: "Dans quelle ville se trouve le siège de l'Union africaine ?", reponses: ["Addis-Abeba", "Addis Abeba", "Addis-Ababa", "Addis-Abéba", "Addis Abéba"], explication: "Le siège de l'UA est à **Addis-Abeba**, en Éthiopie." },
        { type: "qcm", question: "Quel est le but principal de l'ONU ?", choix: ["Organiser la Coupe d'Afrique", "Imprimer le franc CFA", "Diriger le Sénégal", "Maintenir la paix dans le monde"], reponse: 3, explication: "L'ONU, créée en 1945, veut **maintenir la paix** dans le monde." },
        { type: "qcm", question: "Quelle agence de l'ONU s'occupe des enfants ?", choix: ["L'UNICEF", "La FAO", "L'OMS", "La CEDEAO"], reponse: 0, explication: "L'**UNICEF** protège les enfants ; l'OMS = santé, la FAO = alimentation." },
        { type: "saisie", question: "En quelle année l'ONU a-t-elle été créée ?", reponses: ["1945"], explication: "L'ONU a été créée en **1945**, après la Seconde Guerre mondiale." },
        { type: "vf", question: "Grâce à la CEDEAO, les habitants de l'Afrique de l'Ouest peuvent circuler plus facilement entre les pays membres.", reponse: true, explication: "La **libre circulation** des personnes est un des buts de la CEDEAO." },
        { type: "qcm", question: "Comment appelle-t-on les soldats de la paix de l'ONU ?", choix: ["Les casques bleus", "Les bérets rouges", "Les lions de la Teranga", "Les gardes verts"], reponse: 0, explication: "Ce sont les **casques bleus** ; des soldats sénégalais y participent souvent." },
        { type: "vf", question: "Le siège de la CEDEAO est à Dakar.", reponse: false, explication: "Le siège de la CEDEAO est à **Abuja** (Nigeria)." },
        { type: "redaction", question: "Explique en 3 ou 4 phrases pourquoi le Sénégal a intérêt à faire partie d'organisations comme la CEDEAO et l'Union africaine.", corrige: `Exemple :
Ensemble, les pays africains sont plus forts pour défendre leurs intérêts dans le monde. Grâce à la CEDEAO, les Sénégalais peuvent voyager et commercer plus facilement avec les pays voisins. Ces organisations aident à garder la paix et à régler les conflits entre pays. Elles permettent aussi de construire ensemble des routes, de lutter contre les maladies et de s'entraider en cas de catastrophe.` },
      ],
    },
    {
      id: "hygiene-sante",
      titre: "L'hygiène et la santé",
      theme: "Vivre dans son milieu",
      cours: `
## 1. L'hygiène corporelle
L'**hygiène**, c'est l'ensemble des gestes qui gardent le corps propre et en bonne santé.
- Se **laver** tout le corps chaque jour avec de l'eau et du savon.
- Se **laver les mains au savon** avant de manger, après les toilettes et après avoir joué.
- Se **brosser les dents** après les repas (au moins matin et soir).
- Couper ses **ongles**, laver ses **habits**.

## 2. Les microbes et les maladies
Les **microbes** sont de très petits êtres vivants, invisibles à l'œil nu. Certains donnent des maladies. Ils passent par les mains sales, l'eau sale, les aliments mal lavés, les mouches et les moustiques.

| Maladie | Cause / transmission | Prévention |
|---|---|---|
| **Paludisme** | piqûre de moustique | dormir sous une **moustiquaire imprégnée**, supprimer les eaux stagnantes |
| **Diarrhée, choléra** | eau et aliments sales, mains sales | eau potable, lavage des mains, latrines |
| **Bilharziose** | baignade dans les mares et marigots infestés | ne pas se baigner ni uriner dans les eaux stagnantes |
| **Rougeole, polio** | contagion entre personnes | **vaccination** |

## 3. Se soigner
Quand on est malade (fièvre, diarrhée…), on va au **poste** ou au **centre de santé**. On ne prend pas de médicaments vendus dans la rue (« pharmacie par terre ») : ils peuvent être faux et dangereux.

>! **Exemple** : Moussa a de la fièvre et des frissons. Sa mère l'amène au poste de santé : le test montre un paludisme. Il est soigné. Désormais, toute la famille dort sous moustiquaire.

> **À retenir** :
> - Se laver le corps, les mains (au savon), les dents chaque jour.
> - Les microbes passent par les mains sales, l'eau sale, les mouches, les moustiques.
> - Paludisme : moustique → moustiquaire imprégnée, pas d'eaux stagnantes.
> - Vaccination contre la rougeole, la polio… ; en cas de maladie, aller au poste de santé.
`,
      exercices: [
        { type: "qcm", question: "Quel animal transmet le paludisme ?", choix: ["La mouche", "Le moustique", "Le rat", "Le chien"], reponse: 1, explication: "Le paludisme est transmis par la **piqûre d'un moustique**." },
        { type: "saisie", question: "Sous quoi faut-il dormir pour se protéger du paludisme ?", reponses: ["moustiquaire", "une moustiquaire", "moustiquaire imprégnée", "une moustiquaire imprégnée", "sous une moustiquaire", "sous la moustiquaire", "sous une moustiquaire imprégnée", "des moustiquaires", "les moustiquaires", "moustiquaires imprégnées"], explication: "La **moustiquaire imprégnée** empêche les moustiques de piquer." },
        { type: "vf", question: "Se laver les mains avec de l'eau seule suffit toujours à enlever les microbes.", reponse: false, explication: "Il faut se laver les mains **au savon**." },
        { type: "qcm", question: "Quand faut-il se laver les mains ?", choix: ["Seulement le vendredi", "Jamais avant de manger", "Seulement quand elles sont noires", "Avant de manger et après les toilettes"], reponse: 3, explication: "Avant de manger, après les toilettes et après avoir joué." },
        { type: "qcm", question: "Comment attrape-t-on la bilharziose ?", choix: ["En se baignant dans une mare ou un marigot infesté", "En mangeant du riz", "En dormant sous une moustiquaire", "En se brossant les dents"], reponse: 0, explication: "La **bilharziose** s'attrape dans les eaux stagnantes infestées." },
        { type: "saisie", question: "Quel moyen protège contre la rougeole et la polio ?", reponses: ["vaccination", "la vaccination", "vaccin", "le vaccin", "les vaccins", "se faire vacciner", "vacciner"], explication: "La **vaccination** protège contre ces maladies." },
        { type: "vf", question: "Les médicaments vendus dans la rue sont sans danger.", reponse: false, explication: "Ils peuvent être **faux ou périmés** : il faut aller au poste de santé." },
        { type: "qcm", question: "Pourquoi faut-il vider les vieux pneus et boîtes qui gardent l'eau de pluie ?", choix: ["Pour les vendre", "Parce que les moustiques y pondent leurs œufs", "Pour arroser les fleurs", "Pour faire du bruit"], reponse: 1, explication: "Les moustiques pondent dans les **eaux stagnantes**." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : pendant l'hivernage, beaucoup d'enfants de ton quartier ont le paludisme. Autour des maisons, il y a des flaques d'eau, de vieux pneus et des boîtes pleines d'eau de pluie. Beaucoup de familles dorment sans moustiquaire.\n\n*Consigne* : explique la cause de cette maladie, puis propose trois actions pour l'éviter.", corrige: `**Cause** : le paludisme est transmis par la piqûre d'un moustique. Les moustiques pondent leurs œufs dans les eaux stagnantes (flaques, pneus, boîtes) ; il y en a beaucoup pendant l'hivernage.

**Trois actions** :
1. Dormir chaque nuit sous une moustiquaire imprégnée, surtout les enfants et les femmes enceintes.
2. Supprimer les eaux stagnantes : vider ou enterrer les boîtes et les pneus, combler les flaques.
3. Aller vite au poste de santé dès qu'un enfant a de la fièvre, pour être soigné.

(On accepte aussi : nettoyer autour des maisons, faire une campagne de sensibilisation avec le gouvernement scolaire.)` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* (image décrite) : à la récréation, des élèves achètent des beignets et des bonbons posés sur une table, sans couvercle ; des mouches se posent dessus. Derrière l'école, les toilettes sont sales et il n'y a ni eau ni savon. Le lendemain, plusieurs élèves ont mal au ventre et la diarrhée.\n\n*Consigne 1* : nomme le problème de santé.\n\n*Consigne 2* : explique ses causes en utilisant les indices de l'image.\n\n*Consigne 3* : propose trois actions en disant qui fait quoi.", corrige: `**Consigne 1** : le problème est la **diarrhée**, une maladie liée au **manque d'hygiène**.

**Consigne 2** : les mouches se posent sur les toilettes sales, puis sur les beignets non couverts : elles y déposent des **microbes**. Sans eau ni savon, les élèves ne se lavent pas les mains après les toilettes et avant de manger. Ils avalent les microbes avec les aliments.

**Consigne 3** :
1. **La vendeuse** couvre ses beignets avec un tissu propre ou une boîte.
2. **Le directeur et le comité de gestion de l'école** installent un point d'eau avec du savon (un lave-mains) près des toilettes, et les font nettoyer chaque jour.
3. **Le ministre de la santé du gouvernement scolaire** rappelle à chaque classe de se laver les mains au savon avant de manger et après les toilettes.` },
      ],
    },
    {
      id: "alimentation-equilibree",
      titre: "L'alimentation équilibrée",
      theme: "Vivre dans son milieu",
      cours: `
## 1. Pourquoi manger ?
Les aliments donnent au corps l'**énergie** pour bouger et travailler, permettent de **grandir** et de se **protéger** contre les maladies.

## 2. Les trois groupes d'aliments
| Groupe | Rôle | Exemples |
|---|---|---|
| **Aliments énergétiques** | donnent de la force (énergie) | riz, mil, maïs, pain, manioc, sucre, huile, arachide |
| **Aliments bâtisseurs** | font grandir, construisent le corps | poisson, viande, œufs, lait, haricots (niébé) |
| **Aliments protecteurs** | protègent contre les maladies (vitamines) | fruits (mangue, orange, pain de singe), légumes (chou, carotte, feuilles de baobab) |

## 3. Un repas équilibré
Un **repas équilibré** contient un aliment de **chaque groupe**. Le **thiéboudieune** (riz, poisson, légumes) est un bon exemple : riz (énergétique), poisson (bâtisseur), légumes (protecteurs).

Il faut aussi :
- prendre un **petit-déjeuner** avant d'aller à l'école ;
- boire de l'**eau potable** ;
- ne pas manger trop de sucre, de sel et d'huile ;
- manger des aliments **propres**, bien lavés et bien cuits.

## 4. Les maladies liées à une mauvaise alimentation
- **Malnutrition** : l'enfant ne mange pas assez ou pas assez varié ; il maigrit, se fatigue, tombe souvent malade.
- Trop de sucre et d'huile : caries, excès de poids, diabète plus tard.

>! **Méthode** : pour vérifier un repas, demande-toi : *Où est l'aliment qui donne de la force ? Celui qui fait grandir ? Celui qui protège ?* S'il en manque un, le repas n'est pas équilibré.

> **À retenir** :
> - Énergétiques : riz, mil, pain, huile, sucre → la force.
> - Bâtisseurs : poisson, viande, œufs, lait, niébé → grandir.
> - Protecteurs : fruits et légumes → se protéger.
> - Repas équilibré = un aliment de chaque groupe ; petit-déjeuner, eau potable, peu de sucre.
`,
      exercices: [
        { type: "qcm", question: "À quel groupe appartient le poisson ?", choix: ["Aliments bâtisseurs", "Aliments énergétiques", "Aliments protecteurs", "Aucun groupe"], reponse: 0, explication: "Le poisson fait grandir : c'est un **aliment bâtisseur**." },
        { type: "qcm", question: "Quel aliment est surtout énergétique ?", choix: ["La mangue", "L'œuf", "Le mil", "Le chou"], reponse: 2, explication: "Le **mil**, comme le riz et le maïs, donne de l'énergie." },
        { type: "saisie", question: "Comment appelle-t-on les aliments qui protègent contre les maladies, comme les fruits et les légumes ?", reponses: ["protecteurs", "aliments protecteurs", "les aliments protecteurs", "les protecteurs", "protecteur", "aliment protecteur", "un aliment protecteur"], explication: "Ce sont les **aliments protecteurs** (riches en vitamines)." },
        { type: "vf", question: "Un repas de riz blanc seul est un repas équilibré.", reponse: false, explication: "Il manque un **aliment bâtisseur** et un **aliment protecteur**." },
        { type: "qcm", question: "Lequel de ces repas est équilibré ?", choix: ["Pain et sucre", "Riz, poisson et légumes", "Huile et arachide", "Bonbons et jus sucré"], reponse: 1, explication: "Riz (énergétique), poisson (bâtisseur), légumes (protecteurs) : **les trois groupes** sont présents." },
        { type: "vf", question: "Il est bon de prendre un petit-déjeuner avant d'aller à l'école.", reponse: true, explication: "Le petit-déjeuner donne l'énergie pour **bien travailler** le matin." },
        { type: "saisie", question: "Comment appelle-t-on la maladie d'un enfant qui ne mange pas assez ou pas assez varié ?", reponses: ["malnutrition", "la malnutrition", "sous-nutrition", "la sous-nutrition"], explication: "C'est la **malnutrition**." },
        { type: "qcm", question: "Le niébé (haricot) est un aliment…", choix: ["protecteur", "énergétique seulement", "sans aucun rôle", "bâtisseur"], reponse: 3, explication: "Le niébé, riche en protéines, est un **aliment bâtisseur**." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : Lamine, 10 ans, vient à l'école sans manger le matin. À midi, il ne mange que du riz blanc avec de la sauce. Il achète souvent des bonbons. Il est fatigué, maigre et souvent malade.\n\n*Consigne* : explique pourquoi Lamine est souvent fatigué et malade, puis propose-lui un menu équilibré pour une journée.", corrige: `**Pourquoi** : Lamine ne prend pas de petit-déjeuner, donc il manque d'énergie le matin. Son repas de midi ne contient qu'un aliment énergétique (le riz) : il manque des aliments bâtisseurs pour grandir et des aliments protecteurs contre les maladies. Les bonbons apportent trop de sucre et abîment les dents.

**Menu équilibré** (exemple) :
- Petit-déjeuner : bouillie de mil au lait (ou pain, lait) et une banane.
- Midi : thiéboudieune (riz, poisson, carottes, chou, aubergine).
- Goûter : une mangue ou du jus de bouye (pain de singe), à la place des bonbons.
- Soir : couscous de mil (thiéré) au niébé, avec une orange.
Et boire de l'eau potable.` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* (menu affiché à la cantine de l'école) :\n\n- Lundi : riz blanc et sauce à l'huile\n- Mardi : pain et sucre\n- Mercredi : riz blanc et sauce à l'huile\n- Jeudi : bouillie de mil sucrée\n- Vendredi : riz blanc et sauce à l'huile\n\nBeaucoup d'élèves sont fatigués l'après-midi et tombent souvent malades.\n\n*Consigne 1* : dis quels groupes d'aliments manquent dans ce menu.\n\n*Consigne 2* : explique ce que ce manque peut provoquer chez les élèves.\n\n*Consigne 3* : propose un menu équilibré pour deux jours, avec des produits du Sénégal.", corrige: `**Consigne 1** : le menu contient surtout des **aliments énergétiques** (riz, pain, sucre, mil, huile). Il manque des **aliments bâtisseurs** (poisson, viande, œufs, lait, niébé) et des **aliments protecteurs** (fruits et légumes).

**Consigne 2** : sans aliments bâtisseurs, les élèves grandissent mal ; sans aliments protecteurs, ils se défendent mal contre les maladies et tombent souvent malades. Avec trop de sucre et d'huile, ils risquent des caries et, plus tard, des maladies. Un manque qui dure peut donner la **malnutrition**.

**Consigne 3** (exemple) :
- Lundi : thiéboudieune (riz, poisson, carottes, chou, aubergine) et une orange.
- Mardi : couscous de mil (thiéré) au niébé avec des légumes, et une mangue ou du jus de bouye (pain de singe).
On accepte tout menu qui contient, chaque jour, un aliment de **chaque groupe**.` },
      ],
    },
    {
      id: "eau-potable",
      titre: "L'eau potable",
      theme: "Vivre dans son milieu",
      cours: `
## 1. L'eau, c'est la vie
L'eau sert à **boire**, à faire la cuisine, à se laver, à arroser les cultures et à abreuver les animaux. Sans eau, il n'y a pas de vie.

## 2. Les sources d'eau
- Le **robinet** (eau traitée et distribuée par les services de l'eau) et la **borne-fontaine**.
- Le **forage** (puits profond avec une pompe).
- Le **puits**, le **marigot**, le fleuve, la mare, l'eau de pluie.

## 3. Eau potable ou non ?
Une eau **potable** est une eau que l'on peut boire **sans danger**. Une eau claire n'est pas forcément potable : elle peut contenir des **microbes** invisibles.
Une eau sale ou non traitée peut donner la **diarrhée**, le **choléra**, la **fièvre typhoïde**, des vers.

## 4. Rendre l'eau potable et la garder propre
- **Filtrer** l'eau avec un linge propre pour enlever les saletés.
- La **faire bouillir** ou y mettre quelques gouttes d'**eau de Javel** (en suivant les indications de l'agent de santé) pour tuer les microbes.
- **Couvrir** les canaris (grandes jarres où l'on garde l'eau), les jarres et les seaux ; puiser avec un gobelet propre à long manche.
- Protéger les puits : margelle (le petit mur autour du puits), couvercle, pas de latrines ni d'ordures à côté.

## 5. Économiser l'eau
L'eau est **rare** dans beaucoup de régions du Sénégal. On ferme bien les robinets, on répare les fuites, on récupère l'eau de pluie pour arroser.

>! **Exemple** : à l'école de Ndiaganiao, le ministre de la santé du gouvernement scolaire vérifie chaque matin que le canari est couvert et que le gobelet est propre.

> **À retenir** :
> - Eau potable = eau qu'on peut boire sans danger ; une eau claire n'est pas toujours potable.
> - Eau sale → diarrhée, choléra, typhoïde.
> - Filtrer, faire bouillir ou javelliser ; couvrir les récipients ; protéger les puits.
> - Économiser l'eau : fermer les robinets, réparer les fuites.
`,
      exercices: [
        { type: "saisie", question: "Comment appelle-t-on une eau que l'on peut boire sans danger ?", reponses: ["potable", "eau potable", "une eau potable", "l'eau potable"], explication: "C'est une eau **potable**." },
        { type: "vf", question: "Une eau claire est toujours potable.", reponse: false, explication: "Elle peut contenir des **microbes invisibles**." },
        { type: "qcm", question: "Quelle maladie peut-on attraper en buvant de l'eau sale ?", choix: ["Le choléra", "La rougeole", "Le paludisme", "La carie"], reponse: 0, explication: "Le **choléra** (et la diarrhée, la typhoïde) vient d'une eau ou d'aliments sales." },
        { type: "qcm", question: "Que fait-on pour tuer les microbes de l'eau ?", choix: ["On la laisse reposer dans un seau ouvert", "On la secoue", "On y ajoute du sucre", "On la fait bouillir"], reponse: 3, explication: "**Faire bouillir** l'eau (ou la javelliser) tue les microbes." },
        { type: "qcm", question: "Pourquoi faut-il couvrir le canari d'eau ?", choix: ["Pour qu'il soit plus joli", "Pour que l'eau soit plus chaude", "Pour empêcher la poussière et les insectes d'y tomber", "Pour l'empêcher de se casser"], reponse: 2, explication: "Couvrir le canari **garde l'eau propre**." },
        { type: "vf", question: "Il ne faut pas creuser de latrines juste à côté d'un puits.", reponse: true, explication: "Les saletés des latrines peuvent **polluer l'eau** du puits." },
        { type: "saisie", question: "Comment s'appelle le puits profond équipé d'une pompe ?", reponses: ["forage", "un forage", "le forage"], explication: "C'est un **forage**." },
        { type: "qcm", question: "Lequel de ces gestes économise l'eau ?", choix: ["Laisser couler le robinet en se brossant les dents", "Laver la voiture tous les jours au tuyau", "Jouer avec l'eau de la borne-fontaine", "Réparer un robinet qui fuit"], reponse: 3, explication: "Une fuite gaspille beaucoup d'eau : il faut la **réparer**." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : dans ton village, les femmes puisent l'eau dans un puits sans margelle ni couvercle. Les animaux boivent à côté. À la maison, l'eau est gardée dans un canari ouvert et tout le monde y plonge son gobelet. Plusieurs enfants ont la diarrhée.\n\n*Consigne* : explique pourquoi les enfants sont malades, puis donne trois conseils pour avoir une eau potable.", corrige: `**Pourquoi** : l'eau du puits est polluée par la poussière, les déchets et les excréments des animaux, car le puits n'est pas protégé. À la maison, le canari ouvert et les gobelets sales ajoutent des microbes. Les enfants boivent cette eau et attrapent la diarrhée.

**Trois conseils** :
1. Protéger le puits : construire une margelle, mettre un couvercle, éloigner les animaux et les latrines.
2. Filtrer l'eau puis la faire bouillir ou la javelliser selon les indications de l'agent de santé.
3. Couvrir le canari et puiser avec un seul gobelet propre à long manche.

(On accepte aussi : se laver les mains au savon, demander un forage à la commune.)` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* (image décrite) : à la borne-fontaine du quartier, le robinet coule sans arrêt, car il est cassé. Une grande flaque s'est formée autour ; des enfants jouent dedans. Une femme remplit un seau sans couvercle et le pose par terre, près de la flaque.\n\n*Consigne 1* : relève deux problèmes que montre l'image.\n\n*Consigne 2* : dis quelles conséquences ces problèmes peuvent avoir.\n\n*Consigne 3* : propose une solution pour chaque problème.", corrige: `**Consigne 1** :
1. Le robinet cassé **gaspille** l'eau.
2. L'eau du seau sans couvercle, posé près de la flaque, peut être **salie** (poussière, eau sale, microbes).

**Consigne 2** : l'eau gaspillée manquera aux habitants, surtout en saison sèche, et coûte cher à la commune. La flaque est une **eau stagnante** où les moustiques pondent (paludisme) et où les enfants attrapent des microbes. L'eau salie du seau peut donner la **diarrhée** ou le **choléra** à la famille.

**Consigne 3** :
1. Les habitants préviennent le gérant de la borne-fontaine ou la commune pour **réparer le robinet** tout de suite ; puis on comble la flaque.
2. La femme **couvre son seau**, le pose sur un endroit propre et surélevé, puis garde l'eau dans un canari couvert à la maison.` },
      ],
    },
    {
      id: "dechets-assainissement",
      titre: "Les déchets, l'assainissement et la pollution",
      theme: "Vivre dans son milieu",
      cours: `
## 1. Les déchets
Les **déchets** (ordures) sont ce que l'on jette : restes de repas, épluchures, sachets plastiques, bouteilles, piles, boîtes de conserve…
- Certains **pourrissent** vite (épluchures, restes de repas) : on peut en faire du **compost** (engrais naturel).
- D'autres restent très longtemps dans la nature : le **plastique** peut y rester des centaines d'années.

## 2. Les dangers des déchets
- Les tas d'ordures attirent les **mouches**, les **rats** et les **moustiques** : ils transmettent des maladies.
- Les sachets plastiques bouchent les **caniveaux** (et provoquent des inondations), tuent les **moutons** et les **chèvres** qui les avalent, et polluent la **mer** et les poissons.
- Brûler les plastiques donne une **fumée toxique**.

## 3. L'assainissement
L'**assainissement**, c'est rendre le milieu **sain** (propre) :
- utiliser des **latrines** ou des toilettes, ne pas faire ses besoins dehors ;
- évacuer les **eaux usées** dans des caniveaux ou des fosses, pas dans la rue ;
- mettre les ordures dans des **poubelles** fermées et les donner au service de ramassage ;
- participer au **set setal** (nettoyage du quartier).

## 4. La pollution
La **pollution**, c'est salir l'air, l'eau ou le sol avec des produits dangereux : fumée des voitures et des usines, ordures, huile de vidange versée par terre, produits chimiques.

## 5. Les bons gestes : réduire, réutiliser, recycler
- **Réduire** : utiliser un panier ou un sac en tissu au marché au lieu des sachets.
- **Réutiliser** : garder les bouteilles et les boîtes pour d'autres usages.
- **Recycler** : transformer un déchet en nouvel objet (sandales, jouets ou tables-bancs fabriqués avec du plastique recyclé).

>! **Exemple** : au marché, Mame Diarra refuse les sachets plastiques et met ses légumes dans son panier : elle **réduit** ses déchets.

> **À retenir** :
> - Les déchets attirent mouches, rats et moustiques ; le plastique reste des centaines d'années dans la nature.
> - Assainissement : latrines, évacuation des eaux usées, poubelles, set setal.
> - Pollution : saleté de l'air, de l'eau ou du sol.
> - Réduire, réutiliser, recycler ; compost avec les déchets qui pourrissent.
`,
      exercices: [
        { type: "qcm", question: "Quel déchet reste le plus longtemps dans la nature ?", choix: ["Une épluchure de mangue", "Un sachet plastique", "Un reste de riz", "Une feuille d'arbre"], reponse: 1, explication: "Le **plastique** peut rester des centaines d'années ; les autres pourrissent vite." },
        { type: "saisie", question: "Comment appelle-t-on l'engrais naturel fabriqué avec les épluchures et les restes de repas ?", reponses: ["compost", "le compost", "du compost"], explication: "C'est le **compost**." },
        { type: "vf", question: "Les sachets plastiques peuvent boucher les caniveaux et provoquer des inondations.", reponse: true, explication: "L'eau ne s'écoule plus : la rue est **inondée**." },
        { type: "qcm", question: "Qu'est-ce que l'assainissement ?", choix: ["Rendre le milieu propre et sain", "Planter des arbres seulement", "Construire des routes", "Vendre des ordures"], reponse: 0, explication: "L'**assainissement** rend le milieu sain : latrines, eaux usées évacuées, ordures ramassées." },
        { type: "qcm", question: "Pourquoi ne faut-il pas brûler les plastiques ?", choix: ["Parce que cela prend trop de temps", "Parce que cela coûte cher", "Parce que cela donne une fumée toxique", "Parce que c'est interdit le dimanche"], reponse: 2, explication: "La fumée du plastique brûlé est **toxique** pour les poumons." },
        { type: "saisie", question: "Comment appelle-t-on, au Sénégal, le nettoyage du quartier fait ensemble par les habitants ? (deux mots)", reponses: ["set setal", "set sétal", "le set setal", "set-setal", "setsetal"], explication: "C'est le **set setal** (« être propre, rendre propre » en wolof)." },
        { type: "qcm", question: "Utiliser un panier au marché au lieu de sachets plastiques, c'est…", choix: ["recycler", "polluer", "brûler", "réduire ses déchets"], reponse: 3, explication: "On produit moins de déchets : on **réduit**." },
        { type: "vf", question: "Verser l'huile de vidange des voitures dans le sable ne pollue pas.", reponse: false, explication: "L'huile pollue le **sol** et l'eau des nappes." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : derrière ton école, il y a un grand dépôt d'ordures. Les sachets plastiques s'envolent dans la cour, les mouches entrent dans les classes et une chèvre est morte après avoir mangé des sachets. Le directeur demande l'aide des élèves.\n\n*Consigne* : explique les dangers de ce dépôt d'ordures, puis propose un plan d'action de trois mesures pour l'école.", corrige: `**Dangers** :
- Les mouches et les rats transmettent des maladies (diarrhée, choléra).
- Les sachets tuent les animaux qui les avalent et bouchent les caniveaux.
- Si on brûle le tas, la fumée est toxique ; l'eau de pluie qui le traverse pollue le sol.

**Plan d'action** :
1. Organiser avec le gouvernement scolaire et les parents un set setal pour ramasser les ordures, et demander à la mairie de les enlever.
2. Installer des poubelles dans les classes et dans la cour, et faire un compost avec les déchets qui pourrissent.
3. Sensibiliser : affiches, sketch devant les parents, et utiliser des sacs en tissu à la place des sachets.` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* (image décrite) : sur la plage d'un village de pêcheurs, on voit des sachets plastiques, des bouteilles et des restes de poissons. Un tuyau déverse les eaux usées des maisons directement dans la mer. Un pêcheur montre une tortue morte prise dans un sachet.\n\n*Consigne 1* : nomme le problème.\n\n*Consigne 2* : donne trois conséquences pour les habitants et pour les animaux.\n\n*Consigne 3* : propose trois actions que les habitants, les pêcheurs et la commune peuvent mener.", corrige: `**Consigne 1** : c'est la **pollution** de la plage et de la mer par les **déchets** (surtout plastiques) et par les **eaux usées**.

**Consigne 2** :
1. Les tortues, les poissons et les oiseaux avalent les plastiques ou s'y prennent et meurent.
2. Les poissons diminuent ou deviennent sales : les pêcheurs gagnent moins.
3. Les enfants qui se baignent dans l'eau sale attrapent des maladies (diarrhée, maladies de la peau) ; les mouches attirées par les restes transmettent des microbes.

**Consigne 3** :
1. **Les habitants et les élèves** organisent un set setal de la plage et utilisent des paniers ou des sacs en tissu à la place des sachets.
2. **Les pêcheurs** rapportent leurs déchets à terre et les mettent dans des poubelles.
3. **La commune** installe des poubelles sur la plage, fait ramasser les ordures et fait construire des fosses pour que les eaux usées n'aillent plus dans la mer.` },
      ],
    },
    {
      id: "desertification-reboisement",
      titre: "La désertification et le reboisement",
      theme: "Vivre dans son milieu",
      cours: `
## 1. Qu'est-ce que la désertification ?
La **désertification**, c'est la **dégradation des terres** dans les régions sèches : le sol devient pauvre, les arbres disparaissent, le sable avance. Le nord du Sénégal (Louga, Matam, Podor…) est très touché.

## 2. Les causes
| Causes naturelles | Causes humaines |
|---|---|
| manque de pluie (sécheresse) | **coupe abusive** des arbres (bois de chauffe, charbon) |
| vent qui emporte le sable | **feux de brousse** |
| forte chaleur | **surpâturage** (trop d'animaux qui broutent au même endroit) |
| | cultures sans repos du sol |

## 3. Les conséquences
Les terres produisent moins (moins de mil, d'arachide), les animaux manquent de pâturage, les puits s'assèchent ; beaucoup de personnes quittent leur village (**exode rural**).

## 4. Lutter contre la désertification
- **Reboiser** : planter des arbres (le **reboisement**) et les protéger.
- Éviter les **feux de brousse** : faire des **pare-feu** (bandes sans herbe sèche).
- Utiliser des **foyers améliorés** (des fourneaux qui chauffent bien avec moins de bois ou de charbon) et le **gaz** pour consommer moins de bois.
- Fixer les **dunes** avec des filaos (comme sur la côte des Niayes).
- Projet de la **Grande Muraille verte** : une bande d'arbres et de cultures à travers l'Afrique, du Sénégal à Djibouti.

## 5. Les ressources à protéger
- La **forêt** donne du bois, des fruits (pain de singe, ditakh), des plantes qui soignent, et abrite les animaux.
- La **mer** et les fleuves donnent le **poisson**. La **surpêche** (pêcher trop, avec des filets à petites mailles, ou des poissons trop petits) les épuise. On protège la pêche avec le **repos biologique** (période où l'on ne pêche pas certaines espèces) et des aires marines protégées.

>! **Exemple** : chaque élève de la classe plante un arbre au début de l'hivernage, lui donne un nom et l'arrose pendant la saison sèche.

> **À retenir** :
> - Désertification = dégradation des terres sèches ; causes naturelles (sécheresse, vent) et humaines (coupe du bois, feux de brousse, surpâturage).
> - Conséquences : moins de récoltes, exode rural.
> - Lutter : reboiser, pare-feu, foyers améliorés, fixer les dunes, Grande Muraille verte.
> - Protéger la forêt et la mer (repos biologique contre la surpêche).
`,
      exercices: [
        { type: "qcm", question: "Laquelle est une cause humaine de la désertification ?", choix: ["Le manque de pluie", "Le vent", "Les feux de brousse", "La chaleur"], reponse: 2, explication: "Les **feux de brousse** sont allumés par l'homme ; les autres causes sont naturelles." },
        { type: "saisie", question: "Comment appelle-t-on l'action de planter des arbres pour refaire une forêt ?", reponses: ["reboisement", "le reboisement", "reboiser"], explication: "C'est le **reboisement**." },
        { type: "vf", question: "Le surpâturage, c'est quand trop d'animaux broutent au même endroit.", reponse: true, explication: "L'herbe n'a pas le temps de repousser : le sol devient **nu**." },
        { type: "qcm", question: "Quelle conséquence de la désertification pousse les habitants à partir en ville ?", choix: ["Les terres produisent moins", "Les récoltes sont plus belles", "Il y a plus d'arbres", "Il pleut davantage"], reponse: 0, explication: "Les terres produisent moins : beaucoup partent en ville, c'est l'**exode rural**." },
        { type: "qcm", question: "À quoi sert un foyer amélioré ?", choix: ["À consommer moins de bois", "À faire plus de fumée", "À cuire plus lentement", "À attirer les moustiques"], reponse: 0, explication: "Le foyer amélioré **économise le bois**, donc protège les arbres." },
        { type: "saisie", question: "Comment s'appelle le grand projet africain de bande d'arbres qui traverse l'Afrique, du Sénégal à Djibouti ?", reponses: ["Grande Muraille verte", "la Grande Muraille verte", "Grande Muraille"], explication: "C'est la **Grande Muraille verte**." },
        { type: "qcm", question: "Qu'est-ce que le repos biologique ?", choix: ["Une sieste après la pêche", "Une période où l'on ne pêche pas certaines espèces pour qu'elles se reproduisent", "Un jour férié", "Une maladie des poissons"], reponse: 1, explication: "Le **repos biologique** laisse les poissons se reproduire et protège la pêche." },
        { type: "vf", question: "Pêcher avec des filets à très petites mailles protège les poissons.", reponse: false, explication: "Ces filets attrapent les **petits poissons** qui n'ont pas eu le temps de se reproduire : c'est la surpêche." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : autour de ton village, il y avait une forêt. Aujourd'hui, les arbres ont été coupés pour faire du charbon de bois, les troupeaux broutent tout et des feux de brousse éclatent chaque saison sèche. Les champs donnent de moins en moins de mil et le sable avance.\n\n*Consigne* : nomme le phénomène, explique ses causes, puis propose trois actions que les habitants et les élèves peuvent mener.", corrige: `**Phénomène** : c'est la **désertification** (dégradation des terres).

**Causes** : la coupe abusive des arbres pour le charbon, trop d'animaux qui broutent au même endroit (le surpâturage) et les feux de brousse ; le manque de pluie aggrave la situation.

**Trois actions** :
1. Reboiser : planter des arbres avec les élèves au début de l'hivernage, les arroser et les protéger des animaux.
2. Prévenir les feux de brousse : faire des pare-feu et ne pas jeter de mégots ou de braises dans la brousse.
3. Utiliser des foyers améliorés ou le gaz pour consommer moins de bois, et limiter le nombre d'animaux sur les pâturages.` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* (image décrite) : en saison sèche, une grande partie de la brousse est noire et brûlée. Quelques arbres calcinés sont encore debout. Au loin, un homme a allumé un feu pour enfumer une ruche et récolter du miel ; à côté de lui, des herbes sèches.\n\n*Consigne 1* : nomme le phénomène que montre l'image et donne sa cause.\n\n*Consigne 2* : explique trois conséquences de ce phénomène.\n\n*Consigne 3* : propose trois moyens de l'éviter.", corrige: `**Consigne 1** : c'est un **feu de brousse**. Il a été causé par l'homme : le feu allumé pour récolter le miel a gagné les herbes sèches (on accepte aussi : un mégot ou des braises jetés dans la brousse).

**Consigne 2** :
1. Les arbres et l'herbe brûlent : les animaux n'ont plus de pâturage et les animaux sauvages meurent ou fuient.
2. Le sol nu devient pauvre et le vent l'emporte : la **désertification** avance.
3. Le feu peut atteindre les champs, les greniers et les cases du village.

**Consigne 3** :
1. Faire des **pare-feu** (bandes sans herbe sèche) autour des villages et des champs avant la saison sèche.
2. Ne jamais allumer de feu dans la brousse ni jeter de mégots ou de braises ; récolter le miel sans feu ou en surveillant le feu.
3. Former un comité de lutte contre les feux de brousse au village et prévenir vite les sapeurs-pompiers (18) en cas de feu.` },
      ],
    },
    {
      id: "energie",
      titre: "L'énergie et ses économies",
      theme: "Vivre dans son milieu",
      cours: `
## 1. À quoi sert l'énergie ?
L'**énergie** permet de faire la cuisine, de s'éclairer, de faire marcher les machines, les voitures, les téléphones et la télévision.

## 2. Les sources d'énergie
| Énergies qui s'épuisent (non renouvelables) | Énergies renouvelables (qui ne s'épuisent pas) |
|---|---|
| **pétrole** (essence, gasoil), **gaz**, **charbon** de terre | **soleil** (énergie solaire, panneaux solaires) |
| | **vent** (énergie éolienne, éoliennes) |
| | **eau** des barrages (énergie hydraulique) |
| | **bois** (s'il est replanté), déchets végétaux (biogaz) |

Le Sénégal a beaucoup de **soleil** et de **vent** : il construit des centrales solaires et des éoliennes (par exemple le parc éolien de Taïba Ndiaye, près de Tivaouane). Il exploite aussi du pétrole et du gaz en mer depuis peu.

## 3. Les problèmes
- Le pétrole et le charbon **s'épuisent** et **polluent** l'air (fumées).
- Le bois de chauffe et le charbon de bois détruisent les forêts.
- L'électricité coûte cher : il ne faut pas la **gaspiller**.

## 4. Économiser l'énergie
- **Éteindre** la lumière, le ventilateur et la télévision quand on quitte la pièce.
- Utiliser des **ampoules basse consommation** (LED).
- Cuisiner avec un **foyer amélioré** ou au gaz.
- Marcher ou prendre le vélo pour les petits trajets.

>! **Exemple** : dans la classe de Pape, le « responsable lumière » éteint les lampes et les ventilateurs à chaque récréation.

> **À retenir** :
> - Énergies non renouvelables (s'épuisent) : pétrole, gaz, charbon.
> - Énergies renouvelables : soleil, vent, eau, bois replanté.
> - Le Sénégal développe le solaire et l'éolien.
> - Économiser : éteindre, ampoules LED, foyers améliorés.
`,
      exercices: [
        { type: "qcm", question: "Laquelle est une énergie renouvelable ?", choix: ["Le pétrole", "Le charbon de terre", "Le gaz", "Le soleil"], reponse: 3, explication: "Le **soleil** ne s'épuise pas : c'est une énergie renouvelable." },
        { type: "vf", question: "Le pétrole est une énergie qui s'épuise.", reponse: true, explication: "Le pétrole est une énergie **non renouvelable**." },
        { type: "saisie", question: "Comment appelle-t-on les appareils qui transforment la lumière du soleil en électricité ? (deux mots)", reponses: ["panneaux solaires", "panneau solaire", "des panneaux solaires", "les panneaux solaires", "plaques solaires"], explication: "Ce sont les **panneaux solaires**." },
        { type: "qcm", question: "Quelle machine produit de l'électricité grâce au vent ?", choix: ["Le barrage", "Le groupe électrogène", "Le panneau solaire", "L'éolienne"], reponse: 3, explication: "L'**éolienne** tourne avec le vent." },
        { type: "qcm", question: "Lequel de ces gestes économise l'énergie ?", choix: ["Laisser la télévision allumée sans la regarder", "Éteindre la lumière en sortant de la pièce", "Ouvrir le réfrigérateur toutes les minutes", "Laisser le ventilateur tourner la nuit dans une pièce vide"], reponse: 1, explication: "**Éteindre** quand on sort évite le gaspillage." },
        { type: "vf", question: "Utiliser beaucoup de charbon de bois protège les forêts.", reponse: false, explication: "Le charbon de bois est fait avec des arbres coupés : il **détruit les forêts**." },
        { type: "qcm", question: "Pourquoi le Sénégal peut-il produire beaucoup d'énergie solaire ?", choix: ["Parce qu'il pleut tout le temps", "Parce qu'il y a beaucoup de neige", "Parce qu'il y a peu de soleil", "Parce qu'il y a beaucoup de soleil toute l'année"], reponse: 3, explication: "Le Sénégal est **très ensoleillé** toute l'année." },
        { type: "saisie", question: "Quelle énergie est produite grâce à l'eau des barrages ?", reponses: ["hydraulique", "l'énergie hydraulique", "énergie hydraulique", "hydroélectrique", "l'hydroélectricité", "hydroélectricité", "énergie hydroélectrique", "l'énergie hydroélectrique"], explication: "C'est l'énergie **hydraulique** (hydroélectricité)." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : dans ta maison, la facture d'électricité est très élevée. Les lampes restent allumées le jour, la télévision marche même quand personne ne la regarde, et ta mère cuisine avec beaucoup de charbon de bois.\n\n*Consigne* : explique à ta famille pourquoi il faut économiser l'énergie, puis donne trois conseils.", corrige: `**Pourquoi** : l'électricité coûte cher et une grande partie est produite avec du pétrole, qui s'épuise et pollue l'air. Le charbon de bois vient des arbres coupés : il fait avancer la désertification. Économiser, c'est dépenser moins d'argent et protéger l'environnement.

**Trois conseils** :
1. Éteindre les lampes le jour et éteindre la télévision et le ventilateur quand on quitte la pièce.
2. Remplacer les vieilles ampoules par des ampoules LED (basse consommation).
3. Cuisiner avec un foyer amélioré ou au gaz pour utiliser moins de charbon de bois.

(On accepte aussi : installer un panneau solaire, débrancher les chargeurs.)` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* : l'école de ton village n'a pas d'électricité. Le comité de gestion de l'école hésite entre deux solutions pour éclairer les classes le soir et faire marcher un ordinateur :\n\n| Solution | Ce qu'il faut savoir |\n|---|---|\n| Groupe électrogène | marche au gasoil, qu'il faut acheter chaque semaine ; bruyant ; fait de la fumée |\n| Panneaux solaires | chers à installer ; ensuite, le soleil ne coûte rien ; pas de bruit ni de fumée |\n\n*Consigne 1* : dis quelle solution utilise une énergie renouvelable et explique pourquoi.\n\n*Consigne 2* : donne deux avantages de cette solution pour l'école et pour l'environnement.\n\n*Consigne 3* : donne deux conseils aux élèves pour ne pas gaspiller l'électricité.", corrige: `**Consigne 1** : ce sont les **panneaux solaires** : ils utilisent l'énergie du **soleil**, qui ne s'épuise pas. Le gasoil du groupe électrogène vient du **pétrole**, une énergie qui s'épuise.

**Consigne 2** :
1. Pour l'école : une fois installés, les panneaux ne coûtent presque plus rien, car il n'y a pas de carburant à acheter ; le Sénégal a du soleil toute l'année.
2. Pour l'environnement : pas de fumée qui pollue l'air, pas de bruit.

**Consigne 3** :
1. Éteindre les lampes et l'ordinateur quand on quitte la classe.
2. Utiliser des ampoules LED (basse consommation) et ne pas allumer en plein jour.` },
      ],
    },
    {
      id: "securite-prevention",
      titre: "La sécurité routière et la prévention des accidents et catastrophes",
      theme: "Vivre dans son milieu",
      cours: `
## 1. La sécurité routière
Au Sénégal, les accidents de la route font beaucoup de victimes. Le **piéton** doit être prudent :
- marcher sur le **trottoir** ou, s'il n'y en a pas, sur le **bord de la route**, face aux voitures ;
- traverser sur le **passage piéton** (passage zébré) ; regarder à **gauche**, à **droite**, puis encore à **gauche** avant de traverser ; traverser **tout droit** sans courir ;
- respecter les **feux** : le piéton traverse quand le feu des piétons est vert (petit bonhomme vert), c'est-à-dire quand le feu des voitures est rouge ;
- ne pas jouer au bord de la route ; ne pas s'accrocher aux cars rapides ni aux charrettes.

Le passager s'assoit, attache sa **ceinture de sécurité** et ne sort pas la tête ou les bras. À vélo ou à moto, on porte un **casque**.

| Panneau | Forme | Sens |
|---|---|---|
| Danger | triangle à bord rouge | attention, prudence |
| Interdiction | rond à bord rouge | c'est interdit |
| Obligation | rond bleu | c'est obligatoire |
| Stop | octogone rouge | arrêt obligatoire |

## 2. Les accidents domestiques
À la maison aussi, il y a des dangers : **brûlures** (marmite, fer, eau bouillante), **intoxications** (empoisonnements : médicaments, eau de Javel, pétrole rangés à portée des enfants), **électrocution** (choc du courant électrique : fils nus, prises), **chutes**, **noyade** (puits ouvert, bassine d'eau pour les petits).
On range les produits dangereux en hauteur, on couvre les puits, on ne touche pas aux fils électriques.

## 3. Les catastrophes : les inondations
Pendant l'**hivernage** (la saison des pluies), de fortes pluies peuvent provoquer des **inondations**, surtout dans les quartiers construits dans des zones basses et quand les **caniveaux** sont bouchés par les ordures.
- **Avant** : ne pas construire dans les zones inondables, curer (nettoyer à fond) les caniveaux, ne pas y jeter d'ordures.
- **Pendant** : couper l'électricité, ne pas jouer ni marcher dans l'eau (fils électriques, trous, microbes), se mettre en hauteur, suivre les consignes des **sapeurs-pompiers**.
- **Après** : nettoyer et désinfecter, boire de l'eau potable, dormir sous moustiquaire (moustiques).

Numéros d'urgence : sapeurs-pompiers **18**, police **17**, SAMU (urgences médicales) **1515**. Les gestes de premiers secours sont dans le chapitre « Les premiers secours, le tabac et les drogues ».

>! **Exemple** : en rentrant de l'école, Saliou arrive à une route sans feu. Il s'arrête sur le trottoir, regarde à gauche, à droite, à gauche, attend qu'aucune voiture n'arrive et traverse tout droit, sans courir.

> **À retenir** :
> - Piéton : trottoir, passage piéton, regarder gauche-droite-gauche, traverser sans courir.
> - Passager : ceinture ; vélo et moto : casque.
> - Accidents domestiques : brûlures, intoxications, électrocution, chutes, noyade.
> - Inondations : caniveaux propres, pas de construction en zone basse, ne pas marcher dans l'eau ; pompiers : 18.
`,
      exercices: [
        { type: "qcm", question: "Avant de traverser la route, dans quel ordre regarde-t-on ?", choix: ["Droite, gauche, droite", "Seulement devant soi", "Gauche, droite, gauche", "On ne regarde pas, on court"], reponse: 2, explication: "Au Sénégal, on roule à droite : on regarde **à gauche, à droite, puis encore à gauche**." },
        { type: "saisie", question: "Où le piéton doit-il traverser la route ? (deux mots)", reponses: ["passage piéton", "sur le passage piéton", "le passage piéton", "passage piétons", "passages piétons", "les passages piétons", "passage clouté", "passage zébré", "passage pour piétons", "un passage piéton", "sur un passage piéton", "sur un passage pour piétons", "sur le passage pour piétons"], explication: "Sur le **passage piéton** (passage zébré)." },
        { type: "vf", question: "S'accrocher derrière un car rapide est un jeu sans danger.", reponse: false, explication: "On peut tomber et être **écrasé** : c'est très dangereux." },
        { type: "qcm", question: "Un panneau en forme de triangle à bord rouge indique…", choix: ["un danger", "une obligation", "une interdiction", "un parking"], reponse: 0, explication: "Le **triangle à bord rouge** signale un danger." },
        { type: "qcm", question: "Que doit faire le passager d'une voiture ?", choix: ["Attacher sa ceinture de sécurité", "Sortir la tête par la fenêtre", "Ouvrir la portière en roulant", "S'asseoir sur le capot"], reponse: 0, explication: "La **ceinture** protège en cas de choc." },
        { type: "qcm", question: "Où faut-il ranger l'eau de Javel et les médicaments ?", choix: ["Par terre dans la cuisine", "Dans une bouteille de jus", "En hauteur, hors de portée des enfants", "À côté de la nourriture des petits"], reponse: 2, explication: "Pour éviter les **intoxications**, on range ces produits en hauteur." },
        { type: "saisie", question: "Quel numéro appelle-t-on pour joindre les sapeurs-pompiers au Sénégal ?", reponses: ["18", "le 18"], explication: "Les sapeurs-pompiers : le **18**." },
        { type: "vf", question: "Pendant une inondation, il est dangereux de jouer dans l'eau.", reponse: true, explication: "L'eau peut cacher des **fils électriques**, des trous et des microbes." },
        { type: "qcm", question: "Quelle action aide à éviter les inondations dans un quartier ?", choix: ["Jeter les ordures dans les caniveaux", "Construire dans les zones basses", "Boucher les canalisations", "Garder les caniveaux propres"], reponse: 3, explication: "Des **caniveaux propres** laissent l'eau de pluie s'écouler." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : chaque hivernage, ton quartier est inondé. Les caniveaux sont pleins d'ordures et de sable, des maisons ont été construites dans une zone basse, et les enfants jouent dans l'eau. Après les pluies, il y a beaucoup de moustiques et de cas de diarrhée.\n\n*Consigne* : explique pourquoi le quartier est inondé et quels dangers cela crée, puis propose des conseils avant, pendant et après les pluies.", corrige: `**Pourquoi** : les caniveaux bouchés par les ordures et le sable empêchent l'eau de s'écouler ; les maisons construites dans une zone basse reçoivent l'eau de tout le quartier.

**Dangers** : noyade, choc électrique (fils électriques dans l'eau), maisons qui s'écroulent, maladies (paludisme à cause des moustiques, diarrhée et choléra à cause de l'eau sale).

**Conseils** :
- Avant : curer les caniveaux par un set setal, ne pas y jeter d'ordures, ne plus construire dans les zones basses.
- Pendant : couper l'électricité, ne pas jouer ni marcher dans l'eau, se mettre en hauteur, appeler les pompiers (18) en cas de danger.
- Après : nettoyer et désinfecter les maisons, boire de l'eau potable, dormir sous moustiquaire, supprimer les eaux stagnantes.` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* : à la maison, le père de Mariama a versé du pétrole dans une vieille bouteille de boisson et l'a posée par terre dans la cuisine. Ndèye, la petite sœur de 3 ans, croit que c'est du jus et en boit. Elle tousse et pleure.\n\n*Consigne 1* : nomme cet accident domestique et explique sa cause.\n\n*Consigne 2* : dis ce que Mariama doit faire tout de suite.\n\n*Consigne 3* : donne deux conseils à la famille pour que cela n'arrive plus.", corrige: `**Consigne 1** : c'est une **intoxication** (un empoisonnement). Le pétrole était rangé **par terre**, à portée des petits enfants, dans une **bouteille de boisson** : Ndèye l'a pris pour du jus.

**Consigne 2** : Mariama appelle tout de suite un adulte ; on **ne fait pas vomir** l'enfant et on l'amène vite au **poste de santé** (ou on appelle le **SAMU au 1515**), en emportant la bouteille pour montrer ce qu'elle a bu.

**Consigne 3** :
1. Ne jamais mettre un produit dangereux (pétrole, eau de Javel, médicaments) dans une bouteille de boisson ; le garder dans son emballage d'origine.
2. Ranger ces produits **en hauteur** ou dans un placard fermé, hors de portée des enfants.` },
      ],
    },
    {
      id: "epreuve-edd-cfee",
      titre: "Réussir l'épreuve d'EDD au CFEE",
      theme: "Préparer le CFEE",
      cours: `
## 1. Comment est faite l'épreuve ?
Depuis 2026, le **concours d'entrée en 6e est supprimé** : le **CFEE** est le **seul examen** de la fin du CM2. Tu es admis si tu as **au moins 5 sur 10 de moyenne** sur l'ensemble des épreuves.

D'après le **guide du CFEE de 2018** (le barème peut changer), l'**Éducation au développement durable** (EDD) est notée **sur 40 points**. Elle a deux parties :
- le **contrôle des ressources** : des questions sur ce que tu as appris en **Vivre ensemble** (droits, commune, institutions, symboles, paix…) et en **Vivre dans son milieu** (santé, eau, déchets, environnement, sécurité…) ;
- le **contrôle de la compétence** : une **situation d'intégration** sur **Vivre dans son milieu**.

## 2. Les questions de ressources
Elles sont courtes : choisir la bonne réponse, dire si c'est **vrai ou faux**, **compléter** une phrase, **relier** (associer chaque élément de gauche à un élément de droite), répondre par une phrase. Dans l'appli, les questions « relier » sont posées sous forme de choix : « Quelle association est juste ? ».
- Lis la question **jusqu'au bout** avant de répondre.
- Réponds **exactement** à ce qu'on demande : si on demande deux exemples, donne-en deux.

## 3. La situation d'intégration
Elle a deux parties :
- le **contexte** (ou support) : un petit texte, parfois une image, qui raconte un **problème** de la vie de tous les jours ;
- la **consigne** : ce que tu dois faire. Il y a souvent **deux ou trois consignes**.

>! **Méthode en 5 étapes**
> 1. Lis le contexte deux fois.
> 2. Souligne le **problème** et les **indices** (ce qui cause le problème, ses dangers).
> 3. Lis chaque consigne et repère le **verbe** : *nomme*, *explique*, *cite*, *propose*…
> 4. Réponds à **chaque consigne séparément**, dans l'ordre, en écrivant « Consigne 1 », « Consigne 2 »…
> 5. Relis-toi : des phrases complètes, des solutions **réalistes**.

Les consignes les plus fréquentes :
| Consigne | Ce qu'on attend |
|---|---|
| Nomme / identifie le problème | un mot ou une phrase courte : « C'est le paludisme », « C'est la pollution par les plastiques » |
| Explique les causes | **pourquoi** le problème existe, avec les indices du contexte |
| Donne les conséquences / les dangers | ce qui peut arriver aux personnes, aux animaux, au milieu |
| Propose des solutions | des actions **précises** que les élèves, les familles ou la commune peuvent faire |

>! **Exemple** : *Contexte* : « Au marché de ton village, la viande et le poisson sont posés sur des tables sans couverture ; les mouches se posent dessus. » *Consigne* : « Propose deux solutions. »
> Bonne réponse : « 1. Couvrir la viande et le poisson avec un tissu propre ou une vitrine. 2. Nettoyer le marché et mettre les ordures dans des poubelles fermées, pour chasser les mouches. »

## Erreurs fréquentes
- **Recopier le contexte** au lieu de répondre : on ne gagne pas de points.
- **Oublier une consigne** : réponds à toutes, même brièvement.
- Proposer des solutions **impossibles** (« il faut que le Président règle tout ») ou trop vagues (« il faut être propre »). Dis **qui** fait **quoi**.
- Utiliser ses connaissances, mais **rester dans le sujet** du contexte.

> **À retenir** :
> - Depuis 2026 : plus de concours d'entrée en 6e ; le CFEE est le seul examen ; admis avec au moins 5/10 de moyenne.
> - EDD au CFEE (guide de 2018, le barème peut changer) : /40 ; ressources (Vivre ensemble et Vivre dans son milieu) + situation d'intégration (Vivre dans son milieu).
> - Situation d'intégration = contexte + consignes.
> - Méthode : lire, souligner le problème et les indices, repérer le verbe de chaque consigne, répondre consigne par consigne.
> - Des solutions précises et réalistes : qui fait quoi.
`,
      exercices: [
        { type: "qcm", question: "Dans une situation d'intégration, comment appelle-t-on le petit texte qui raconte le problème ?", choix: ["La consigne", "Le corrigé", "Le contexte", "Le barème"], reponse: 2, explication: "Le **contexte** (ou support) raconte le problème ; la **consigne** dit ce qu'il faut faire." },
        { type: "saisie", question: "Comment appelle-t-on la partie d'une situation d'intégration qui dit ce que tu dois faire ?", reponses: ["consigne", "la consigne", "les consignes", "consignes", "une consigne"], explication: "C'est la **consigne**. Il y en a souvent deux ou trois." },
        { type: "vf", question: "Pour bien répondre à une situation d'intégration, il suffit de recopier le contexte.", reponse: false, explication: "Recopier ne rapporte pas de points : il faut **répondre à chaque consigne** avec tes connaissances." },
        { type: "qcm", question: "Consigne : « Propose deux solutions pour éviter le paludisme dans ton quartier. » Quelle réponse est la meilleure ?", choix: ["Il faut faire attention.", "1. Dormir sous une moustiquaire imprégnée. 2. Vider les boîtes et les pneus qui gardent l'eau de pluie.", "Le paludisme est une maladie grave.", "Le Président doit tuer tous les moustiques."], reponse: 1, explication: "Elle donne **deux** solutions **précises et réalistes**. Les autres sont vagues, hors consigne ou impossibles." },
        { type: "qcm", question: "Contexte : « Dans la cour de l'école, les élèves jettent les sachets d'eau par terre ; le vent les emporte dans les caniveaux. » Quel est le problème ?", choix: ["La pollution par les déchets plastiques", "Le manque d'eau", "La désertification", "Le paludisme"], reponse: 0, explication: "Les indices (sachets par terre, caniveaux) montrent la **pollution par les déchets plastiques**." },
        { type: "qcm", question: "La consigne dit : « Explique les causes de la maladie. » Que dois-tu écrire ?", choix: ["Des solutions pour guérir", "Pourquoi la maladie apparaît, avec les indices du contexte", "Le nom du médecin", "Un dessin"], reponse: 1, explication: "**Expliquer les causes**, c'est dire **pourquoi** le problème existe." },
        { type: "vf", question: "Au CFEE, la situation d'intégration d'EDD porte sur « Vivre dans son milieu ».", reponse: true, explication: "Les ressources portent sur **Vivre ensemble** et **Vivre dans son milieu** ; la compétence (situation d'intégration) sur **Vivre dans son milieu**." },
        { type: "qcm", question: "Quelle solution est précise (on sait qui fait quoi) ?", choix: ["Il faut que ça change.", "Il faut protéger l'environnement.", "Chaque classe arrose ses arbres à tour de rôle le mercredi.", "Tout le monde doit être gentil."], reponse: 2, explication: "On sait **qui** (chaque classe), **quoi** (arroser) et **quand** (le mercredi)." },
        { type: "saisie", question: "D'après le guide du CFEE de 2018, sur combien de points l'épreuve d'EDD est-elle notée au CFEE ?", reponses: ["40", "quarante", "40 points", "sur 40", "sur 40 points"], explication: "D'après le guide de 2018, l'épreuve d'EDD est notée **sur 40** (ce barème peut changer)." },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : chaque lundi, c'est le jour du marché hebdomadaire (loumo) dans ton village. Les vendeuses de beignets posent leurs plats à côté d'un tas d'ordures. Il n'y a ni toilettes ni point d'eau pour se laver les mains. Les mouches sont partout. Le mardi, plusieurs enfants ont la diarrhée.\n\n*Consigne 1* : nomme le problème de santé et explique ses causes.\n\n*Consigne 2* : propose trois actions que la commune, les vendeuses et les élèves peuvent mener.", corrige: `**Consigne 1** : le problème est la **diarrhée** causée par le **manque d'hygiène** au marché. Les mouches se posent sur les ordures puis sur les beignets non couverts : elles y déposent des microbes. Sans toilettes ni point d'eau, les gens ne peuvent pas se laver les mains au savon. Les enfants mangent ces beignets et tombent malades.
**Consigne 2** :
1. **La commune** installe des toilettes, un point d'eau et des poubelles au marché, et fait enlever les ordures après chaque loumo.
2. **Les vendeuses** couvrent les plats, s'installent loin des ordures et se lavent les mains au savon.
3. **Les élèves** du gouvernement scolaire font une campagne (affiches, sketch) pour apprendre à se laver les mains et à acheter des aliments couverts.

**Ce qui compte** : répondre aux deux consignes, utiliser les indices du contexte (ordures, mouches, pas d'eau), dire qui fait quoi.` },
        { type: "redaction", question: "**Situation d'intégration**\n\n*Contexte* : sur la route nationale qui traverse ton village, il n'y a ni trottoir ni passage piéton. Les voitures et les camions roulent vite. Les élèves traversent en courant et jouent au ballon au bord de la route. La semaine dernière, un élève a été renversé par une moto.\n\n*Consigne 1* : dis quels dangers courent les élèves et pourquoi.\n\n*Consigne 2* : donne trois conseils aux élèves et une action que le directeur peut demander à la commune.", corrige: `**Consigne 1** : les élèves risquent d'être **renversés** et gravement blessés ou tués. Les véhicules roulent vite, il n'y a ni trottoir ni passage piéton, et les élèves traversent en courant et jouent au bord de la route sans regarder.
**Consigne 2** :
- Conseils aux élèves : 1. marcher sur le bord de la route, face aux voitures ; 2. avant de traverser, s'arrêter, regarder à gauche, à droite, puis encore à gauche, et traverser tout droit sans courir quand aucun véhicule n'arrive ; 3. ne jamais jouer au ballon au bord de la route.
- Action du directeur : demander à la commune de faire tracer un passage piéton et poser des panneaux « danger, école » (ou des ralentisseurs) devant l'école.` },
        { type: "qcm", question: "**Question « relier »** (comme au CFEE). Relie chaque symbole à ce qu'il est :\n\n- drapeau • devise • hymne\n- un chant • trois bandes de couleur • une phrase\n\nQuelle association est juste ?", choix: ["drapeau → un chant ; devise → une phrase ; hymne → trois bandes de couleur", "drapeau → une phrase ; devise → trois bandes de couleur ; hymne → un chant", "drapeau → trois bandes de couleur ; devise → une phrase ; hymne → un chant", "drapeau → trois bandes de couleur ; devise → un chant ; hymne → une phrase"], reponse: 2, explication: "Le **drapeau** = les couleurs (vert, or, rouge) ; la **devise** = la phrase « Un Peuple – Un But – Une Foi » ; l'**hymne** = le chant « Le Lion rouge ». Sur ta copie, tu traces un trait entre chaque élément et son sens." },
        { type: "qcm", question: "**Question « relier »**. Relie chaque organisation à la ville de son siège :\n\n- CEDEAO • Union africaine • ONU\n- New York • Abuja • Addis-Abeba\n\nQuelle association est juste ?", choix: ["CEDEAO → Addis-Abeba ; Union africaine → Abuja ; ONU → New York", "CEDEAO → Abuja ; Union africaine → New York ; ONU → Addis-Abeba", "CEDEAO → New York ; Union africaine → Addis-Abeba ; ONU → Abuja", "CEDEAO → Abuja ; Union africaine → Addis-Abeba ; ONU → New York"], reponse: 3, explication: "**CEDEAO** : Abuja (Nigeria) ; **Union africaine** : Addis-Abeba (Éthiopie) ; **ONU** : New York. Aucune n'a son siège à Dakar." },
        { type: "qcm", question: "**Question « relier »**. Relie chaque maladie à son moyen de prévention :\n\n- paludisme • choléra • rougeole\n- vaccination • moustiquaire imprégnée • eau potable et lavage des mains\n\nQuelle association est juste ?", choix: ["paludisme → moustiquaire imprégnée ; choléra → eau potable et lavage des mains ; rougeole → vaccination", "paludisme → vaccination ; choléra → moustiquaire imprégnée ; rougeole → eau potable et lavage des mains", "paludisme → eau potable et lavage des mains ; choléra → vaccination ; rougeole → moustiquaire imprégnée", "paludisme → moustiquaire imprégnée ; choléra → vaccination ; rougeole → eau potable et lavage des mains"], reponse: 0, explication: "Le **paludisme** vient du moustique (moustiquaire) ; le **choléra** de l'eau et des mains sales (eau potable, savon) ; la **rougeole** se prévient par la **vaccination**." },
      ],
    },
    {
      id: "fiche-vivre-ensemble",
      titre: "Fiche de révision : Vivre ensemble",
      theme: "Fiches de révision CFEE",
      cours: `
## Programme de révision sur 7 jours
Les fiches servent au **dernier rappel**, juste avant le CFEE : on apprend d'abord avec les chapitres, puis on relit les fiches. Chaque jour : une fiche de deux matières différentes, et leurs quiz express.

| Jour | À réviser |
|---|---|
| J1 | Maths : numération + Langue : grammaire |
| J2 | Maths : mesure + Langue : conjugaison |
| J3 | Maths : géométrie + Langue : orthographe et vocabulaire |
| J4 | Maths : problèmes + Langue : lecture et écriture |
| J5 | Découverte du monde : histoire + EDD : vivre ensemble |
| J6 | Découverte du monde : géographie + EDD : vivre dans son milieu |
| J7 | Découverte du monde : sciences + relire tous les « Pièges fréquents » + une épreuve complète : « S'entraîner à l'épreuve de mathématiques du CFEE », « Entraînement au CFEE : épreuve blanche de Langue et communication » ou « Réussir l'épreuve d'EDD au CFEE » |

Cette fiche résume **tout le thème Vivre ensemble**. Pour le détail, revois les chapitres du thème.

## 1. Les symboles de la République
| Symbole | Ce qu'il faut savoir |
|---|---|
| Drapeau | vert, or, rouge (bandes verticales) ; **étoile verte** à 5 branches sur la bande or |
| Devise | « Un Peuple – Un But – Une Foi » |
| Hymne | « Le Lion rouge », paroles de **Léopold Sédar Senghor** |
| Armoiries | un **lion** et un **baobab** |
| Fête nationale | **4 avril** : fête de l'indépendance (accords de transfert du 4 avril 1960) ; le Sénégal est indépendant **seul** le **20 août 1960**, après l'éclatement de la Fédération du Mali |

## 2. Les institutions
| Pouvoir | Qui ? | Rôle |
|---|---|---|
| Exécutif | Président + Gouvernement | diriger, appliquer les lois |
| Législatif | Assemblée nationale (députés) | **voter** les lois |
| Judiciaire | les juges | juger |

- **Constitution** (2001) : la loi la plus importante.
- **Président** : élu par le peuple pour **5 ans**, **2 mandats consécutifs** au plus ; il lui faut **plus de la moitié des voix**, sinon 2e tour.
- **Premier ministre** : **nommé** par le Président. **Députés** : élus pour 5 ans.
- **Conseil constitutionnel** : vérifie que les lois respectent la Constitution.

## 3. Le territoire
- **14 régions** → départements → arrondissements (découpage de l'État) ; tout le territoire est partagé en **communes**.
- Collectivités territoriales (élues) : le **département** et la **commune**.
- **Maire** : élu directement par les électeurs. **Gouverneur**, **préfet**, **sous-préfet** : **nommés** par l'État.
- La commune : état civil, propreté, marchés, éclairage.

## 4. Droits et devoirs
- **Enfant** = moins de **18 ans**. Textes : Convention relative aux droits de l'enfant (ONU, **1989**), Charte africaine des droits et du bien-être de l'enfant (**1990**).
- Droits : nom, éducation, santé, alimentation, protection, loisirs, expression.
- Devoirs : respecter les autres, bien travailler, aider, respecter les biens publics.
- École **obligatoire de 6 à 16 ans** ; loi sur la **parité** (2010).
- **Citoyen** : vote à **18 ans** ; vote **secret** (isoloir, urne) et **personnel**.
- **Famille** restreinte (parents, enfants) ou élargie (grands-parents, oncles, cousins…) : respect, dialogue, partage.
- **École** : le **règlement intérieur** fixe les règles (une faute → une sanction juste) ; le **gouvernement scolaire** est élu par les élèves.

## 5. Les organisations
| Organisation | Année | Siège |
|---|---|---|
| CEDEAO (libre circulation) | 1975 | Abuja |
| UEMOA (franc CFA, 8 pays) | 1994 | Ouagadougou |
| Union africaine | 2002 | Addis-Abeba |
| ONU (paix mondiale) | 1945 | New York |

Agences de l'ONU : **UNICEF** (enfants), **OMS** (santé), **FAO** (alimentation), **UNESCO** (éducation, culture).

## 6. Mots à connaître
- **Tolérance** : respecter ceux qui sont différents.
- **Solidarité** : s'entraider. **Teranga** : hospitalité.
- **Médiateur** : aide deux personnes en dispute à s'entendre.
- **Discrimination** : traiter quelqu'un moins bien à cause de ce qu'il est.
- **Stéréotype** : idée toute faite, souvent fausse.

## Pièges fréquents
- Les lois sont votées par les **députés**, pas par le Président.
- Le maire est **élu** ; le gouverneur est **nommé**.
- L'étoile est **verte**, pas jaune.
- UEMOA = **monnaie** ; CEDEAO = **libre circulation**.
- L'UA siège à **Addis-Abeba**, la CEDEAO à **Abuja** : aucune des deux à Dakar.
- **4 avril** = fête de l'indépendance ; **20 août 1960** = le Sénégal indépendant seul (fin de la Fédération du Mali).
- Le **Président** doit avoir plus de la moitié des voix ; les **députés** sont élus par un vote mixte.
`,
      exercices: [
        { type: "qcm", question: "Quelles sont les couleurs du drapeau du Sénégal, en partant du mât ?", choix: ["Rouge, or, vert", "Vert, rouge, or", "Vert, or, rouge", "Or, vert, rouge"], reponse: 2, explication: "**Vert, or, rouge**, avec l'étoile verte au centre." },
        { type: "vf", question: "Le Premier ministre est élu par le peuple.", reponse: false, explication: "Il est **nommé** par le Président." },
        { type: "saisie", question: "Comment appelle-t-on le pouvoir qui vote les lois ?", reponses: ["législatif", "le législatif", "pouvoir législatif", "le pouvoir législatif"], explication: "C'est le pouvoir **législatif** (les députés)." },
        { type: "qcm", question: "Lequel de ces responsables est nommé par l'État ?", choix: ["Le maire", "Le gouverneur", "Un député", "Un conseiller municipal"], reponse: 1, explication: "Le **gouverneur** est nommé ; les autres sont élus." },
        { type: "saisie", question: "Dans quelle ville se trouve le siège de la CEDEAO ?", reponses: ["Abuja"], explication: "Le siège de la CEDEAO est à **Abuja** (Nigeria)." },
        { type: "qcm", question: "Pour être élu Président au premier tour, un candidat doit avoir…", choix: ["plus de la moitié des voix", "le quart des voix", "les voix des députés", "les voix de sa région"], reponse: 0, explication: "Il faut **plus de la moitié des voix**, sinon il y a un 2e tour." },
        { type: "vf", question: "Une jeune fille de 17 ans est encore une enfant selon la Convention relative aux droits de l'enfant.", reponse: true, explication: "Un enfant a **moins de 18 ans**." },
        { type: "qcm", question: "Quelle organisation est liée au franc CFA ?", choix: ["L'ONU", "L'UNICEF", "L'Union africaine", "L'UEMOA"], reponse: 3, explication: "L'**UEMOA** : 8 pays, une même monnaie." },
        { type: "saisie", question: "Quel jour célèbre-t-on la fête de l'indépendance du Sénégal ?", reponses: ["4 avril", "le 4 avril", "quatre avril", "le quatre avril", "4 avril 1960", "le 4 avril 1960"], explication: "Le **4 avril** (accords de transfert signés le 4 avril 1960). Attention : le Sénégal est devenu indépendant **seul** le **20 août 1960**, après l'éclatement de la Fédération du Mali." },
        { type: "qcm", question: "Bien accueillir l'étranger et partager avec lui, c'est…", choix: ["la parité", "la teranga", "la discrimination", "la médiation"], reponse: 1, explication: "La **teranga**, l'hospitalité sénégalaise." },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* : dans ton école, on élit le gouvernement scolaire. Un candidat distribue des bonbons pour qu'on vote pour lui. Le jour du vote, certains élèves veulent montrer leur bulletin à leurs camarades, et un élève veut voter à la place de son ami absent. Après le résultat, les partisans du candidat battu insultent les vainqueurs.\n\n*Consigne 1* : relève trois comportements qui ne respectent pas les règles du vote.\n\n*Consigne 2* : pour chacun, dis quelle règle il faut respecter.\n\n*Consigne 3* : explique, en deux phrases, comment les élèves doivent réagir au résultat.", corrige: `**Consigne 1** :
1. Distribuer des bonbons pour avoir des voix (c'est **acheter des voix**).
2. Montrer son bulletin.
3. Voter à la place d'un ami absent. (On accepte aussi : insulter les vainqueurs.)

**Consigne 2** :
1. Acheter ou vendre une voix est **interdit** : chacun vote librement, selon ses idées.
2. Le vote est **secret** : on choisit seul dans l'isoloir et on ne montre pas son bulletin.
3. Le vote est **personnel** : personne ne vote à la place d'un autre.

**Consigne 3** : en démocratie, on **accepte le résultat** du vote dans la paix, même quand son candidat a perdu. Les élèves félicitent les élus et les aident à bien faire leur travail pour toute l'école.` },
      ],
    },
    {
      id: "fiche-vivre-dans-son-milieu",
      titre: "Fiche de révision : Vivre dans son milieu",
      theme: "Fiches de révision CFEE",
      cours: `
Cette fiche résume **tout le thème Vivre dans son milieu**. Au CFEE, la **situation d'intégration** porte sur ce thème : revois aussi la méthode du chapitre « Réussir l'épreuve d'EDD au CFEE ».

## 1. Hygiène et santé
- Se laver le corps chaque jour, les **mains au savon** (avant de manger, après les toilettes), les dents après les repas.

| Maladie | Comment on l'attrape | Comment l'éviter |
|---|---|---|
| Paludisme | piqûre de moustique | **moustiquaire imprégnée**, pas d'eaux stagnantes |
| Diarrhée, choléra | eau, aliments ou mains sales | eau potable, lavage des mains, latrines |
| Bilharziose | baignade dans les mares | ne pas s'y baigner |
| Rougeole, polio | contagion | **vaccination** |

Malade ? Va au **poste de santé**, jamais à la « pharmacie par terre ».

## 2. Alimentation
| Groupe | Rôle | Exemples |
|---|---|---|
| Énergétiques | la force | riz, mil, pain, huile |
| Bâtisseurs | grandir | poisson, viande, œufs, lait, niébé |
| Protecteurs | se protéger | fruits, légumes |

**Repas équilibré** = un aliment de chaque groupe (ex. thiéboudieune). Pas assez à manger ou pas assez varié → **malnutrition**.

## 3. Eau potable
- **Potable** = qu'on peut boire sans danger. Une eau **claire** n'est **pas forcément** potable.
- Filtrer, **faire bouillir** ou javelliser ; **couvrir** le canari ; protéger le puits (margelle, couvercle, loin des latrines).
- Économiser : fermer les robinets, réparer les fuites.

## 4. Déchets et assainissement
- **Assainissement** = rendre le milieu sain : latrines, eaux usées évacuées, poubelles, **set setal**.
- Le **plastique** reste des centaines d'années ; le brûler donne une fumée **toxique**.
- **Compost** : avec les épluchures et restes de repas.
- **Réduire** (panier au marché), **réutiliser** (bouteilles), **recycler** (sandales en plastique recyclé).
- **Pollution** : salir l'air, l'eau ou le sol.

## 5. Environnement
- **Désertification** = dégradation des terres sèches.
- Causes naturelles : sécheresse, vent, chaleur. Causes humaines : coupe des arbres, **feux de brousse**, **surpâturage**.
- Conséquences : moins de récoltes, **exode rural**.
- Solutions : **reboiser**, pare-feu, foyers améliorés, fixer les dunes, **Grande Muraille verte**.
- Ressources à protéger : la **forêt** (bois, fruits comme le pain de singe, plantes qui soignent, abri des animaux) et la **mer** (poisson).
- Pêche : contre la **surpêche**, le **repos biologique**.
- **Changement climatique** : la Terre se réchauffe (gaz des voitures, des usines, des feux) → pluies irrégulières, sécheresses, inondations, avancée de la mer. Agir : planter des arbres et la mangrove, énergies renouvelables.
- **Aires protégées** : parc du **Niokolo-Koba** (lions, hippopotames, chimpanzés), parc des oiseaux du **Djoudj**, **delta du Saloum** (mangrove).
- **Population** : environ 18 millions d'habitants (recensement de 2023), beaucoup de jeunes, plus de la moitié en ville → il faut plus d'écoles, de postes de santé, d'eau et d'emplois.
- Énergies **renouvelables** : soleil, vent, eau des barrages, bois replanté. **Non renouvelables** : pétrole, gaz, charbon.
- Économiser l'énergie : éteindre, ampoules **LED**, foyer amélioré.

## 6. Sécurité
- Piéton : trottoir, **passage piéton**, regarder **gauche, droite, gauche**, traverser sans courir.
- Passager : **ceinture** ; vélo et moto : **casque**.

| Panneau | Sens |
|---|---|
| Triangle à bord rouge | danger |
| Rond à bord rouge | interdiction |
| Rond bleu | obligation |
| Octogone rouge | stop |

- Maison : brûlures, intoxications, électrocution, chutes, noyade → produits dangereux **en hauteur**, puits couverts.
- Inondation : caniveaux propres ; pendant, **couper l'électricité** et ne pas marcher dans l'eau.
- **Premiers secours** : **protéger** (éviter un autre accident), **alerter** (appeler les secours), **secourir** (gestes simples). Brûlure : eau fraîche pendant au moins 10 minutes. Saignement de nez : tête **penchée en avant**, appuyer sur la narine.
- **Tabac, alcool, drogues** (chanvre indien, colle ou diluant respirés) : dangereux pour le corps et le cerveau, on peut en devenir **dépendant** → dire **non** et en parler à un adulte de confiance.

## 7. Numéros d'urgence
| Service | Numéro |
|---|---|
| Sapeurs-pompiers | **18** |
| Police | **17** |
| SAMU (urgences médicales) | **1515** |

## Pièges fréquents
- Eau **claire** ≠ eau **potable**.
- Le **moustique** donne le paludisme, pas la mouche.
- Le poisson et le niébé sont **bâtisseurs** ; la mangue est **protectrice**.
- Le manque de pluie est une cause **naturelle** ; les feux de brousse, une cause **humaine**.
- Le **bois** n'est renouvelable que si l'on **replante**.
- Brûlure : de l'**eau fraîche**, jamais d'huile, de beurre ni de dentifrice. Saignement de nez : tête **en avant**, pas en arrière.
- Avant de toucher une personne électrocutée, **couper le courant**.
- Solutions : dis toujours **qui fait quoi**.
`,
      exercices: [
        { type: "qcm", question: "À quel groupe appartient la mangue ?", choix: ["Aliments énergétiques", "Aliments bâtisseurs", "Aliments protecteurs", "Aucun groupe"], reponse: 2, explication: "Les fruits sont des **aliments protecteurs**." },
        { type: "qcm", question: "Quelle association maladie – prévention est juste ?", choix: ["Rougeole – moustiquaire", "Paludisme – moustiquaire imprégnée", "Bilharziose – manger du mil", "Choléra – se baigner dans la mare"], reponse: 1, explication: "Le paludisme vient du moustique : on dort sous une **moustiquaire imprégnée**." },
        { type: "saisie", question: "Quel numéro appelle-t-on pour joindre la police au Sénégal ?", reponses: ["17", "le 17"], explication: "La police : le **17** (les sapeurs-pompiers : le **18**)." },
        { type: "saisie", question: "Comment appelle-t-on la dégradation des terres dans les régions sèches, quand le sable avance ?", reponses: ["désertification", "la désertification"], explication: "C'est la **désertification**." },
        { type: "qcm", question: "Un panneau rond et bleu indique…", choix: ["une obligation", "un danger", "une interdiction", "un stop"], reponse: 0, explication: "Rond bleu = **obligation** ; rond à bord rouge = interdiction ; triangle = danger." },
        { type: "vf", question: "Pendant une inondation, il faut couper l'électricité.", reponse: true, explication: "L'eau et le courant ensemble peuvent provoquer une **électrocution**." },
        { type: "qcm", question: "Fabriquer des sandales avec du plastique usagé, c'est…", choix: ["réduire", "polluer", "brûler", "recycler"], reponse: 3, explication: "Transformer un déchet en nouvel objet, c'est **recycler**." },
        { type: "saisie", question: "Comment appelle-t-on la période où l'on ne pêche pas certaines espèces pour qu'elles se reproduisent ? (deux mots)", reponses: ["repos biologique", "le repos biologique"], explication: "C'est le **repos biologique**." },
        { type: "qcm", question: "Laquelle est une cause **naturelle** de la désertification ?", choix: ["Les feux de brousse", "La coupe du bois", "Le surpâturage", "Le manque de pluie"], reponse: 3, explication: "Le **manque de pluie** est naturel ; les autres causes viennent de l'homme." },
        { type: "vf", question: "Le bois est une énergie renouvelable seulement si l'on replante des arbres.", reponse: true, explication: "Sans reboisement, couper du bois fait **disparaître les forêts**." },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* (image décrite) : dans une concession, un canari d'eau est ouvert ; à côté, de vieux pneus et des boîtes sont remplis d'eau de pluie. Des moustiques volent autour. Un enfant dort sur une natte, dehors, sans moustiquaire. C'est l'hivernage.\n\n*Consigne 1* : nomme deux maladies que les habitants de cette concession risquent d'attraper.\n\n*Consigne 2* : explique, pour chacune, comment on l'attrape, avec les indices de l'image.\n\n*Consigne 3* : propose trois actions pour protéger la famille.", corrige: `**Consigne 1** : le **paludisme** et la **diarrhée** (on accepte aussi : le choléra).

**Consigne 2** :
- **Paludisme** : il est transmis par la **piqûre du moustique**. Les moustiques pondent dans l'eau des pneus et des boîtes (eaux stagnantes) ; l'enfant qui dort sans moustiquaire se fait piquer.
- **Diarrhée** : l'eau du canari ouvert reçoit de la poussière, des insectes et des microbes ; en la buvant, on tombe malade.

**Consigne 3** :
1. **Les enfants et les parents** vident et rangent les pneus et les boîtes pour supprimer les eaux stagnantes.
2. **Toute la famille** dort sous une **moustiquaire imprégnée**, surtout les enfants et les femmes enceintes.
3. **La mère** couvre le canari et puise avec un gobelet propre à long manche ; on fait bouillir ou on javellise l'eau si elle n'est pas sûre.` },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* : dans un village côtier près de Saint-Louis, les anciens racontent que la plage était autrefois très large. Aujourd'hui, la mer avance chaque année et a détruit plusieurs maisons. Les filaos qui protégeaient la côte ont été coupés pour faire du bois. Les pluies sont aussi devenues irrégulières.\n\n*Consigne 1* : nomme le phénomène mondial qui explique en partie l'avancée de la mer et les pluies irrégulières.\n\n*Consigne 2* : explique deux causes de l'avancée de la mer dans ce village.\n\n*Consigne 3* : propose trois actions pour protéger le village et lutter contre ce phénomène.", corrige: `**Consigne 1** : c'est le **changement climatique** (le réchauffement de la Terre).

**Consigne 2** :
1. Avec le réchauffement, le **niveau de la mer monte** : la côte recule (c'est l'**érosion côtière**).
2. Les **filaos coupés** ne retiennent plus le sable : la mer l'emporte plus facilement.

**Consigne 3** :
1. **Les habitants et les élèves** replantent des filaos le long de la côte et ne coupent plus les arbres.
2. **La commune** interdit de construire trop près de la mer et de prendre le sable de la plage.
3. **Chacun** consomme moins d'énergie qui pollue (éteindre les lampes, utiliser un foyer amélioré ou le solaire) pour rejeter moins de gaz qui réchauffent la Terre.` },
      ],
    },
    {
      id: "premiers-secours-tabac-drogues",
      titre: "Les premiers secours, le tabac et les drogues",
      theme: "Vivre dans son milieu",
      cours: `
## 1. Les premiers secours : protéger, alerter, secourir
Quand un accident arrive, tu peux aider, même si tu es un enfant. Retiens les **trois étapes** :
1. **Protéger** : éviter un deuxième accident (s'éloigner de la route, **couper le courant** avant de toucher une personne électrocutée, éloigner les autres enfants). Ne te mets jamais toi-même en danger.
2. **Alerter** : appeler un **adulte** et les **secours**.
3. **Secourir** : faire les gestes simples que tu connais, en attendant les secours.

## 2. Bien alerter
| Service | Numéro |
|---|---|
| SAMU (urgences médicales) | **1515** |
| Sapeurs-pompiers | **18** |
| Police | **17** |

Au téléphone, dis calmement : **qui** tu es, **où** tu es (quartier, repère), **ce qui s'est passé**, **combien** il y a de blessés et leur état. Ne raccroche pas avant qu'on te le dise.

## 3. Quelques gestes simples
| Situation | Ce qu'il faut faire | Ce qu'il ne faut pas faire |
|---|---|---|
| **Brûlure** | refroidir sous l'**eau fraîche** (pas glacée) pendant **au moins 10 minutes** ; si elle est grande, aller au poste de santé | mettre de l'huile, du beurre, du dentifrice |
| **Petite plaie** | laver à l'eau propre et au savon, puis couvrir d'un pansement propre | mettre de la terre ou des feuilles |
| **Saignement de nez** | s'asseoir, **pencher la tête en avant**, appuyer sur la narine pendant 10 minutes | pencher la tête en arrière |
| **Blessé de la route** | le laisser couché, le couvrir, lui parler, appeler les secours | le déplacer (sauf danger immédiat, comme un feu) |
| **Morsure de serpent** | calmer la personne, la garder immobile, l'amener **vite** au centre de santé | inciser la plaie ou la sucer |

>! **Exemple** : Abdou se brûle la main avec la marmite. Sa sœur Coumba met tout de suite sa main sous l'eau fraîche du robinet pendant au moins 10 minutes, puis appelle leur mère. Elle n'a pas mis d'huile.

## 4. Le tabac, l'alcool et les drogues
- Le **tabac** (cigarette, chicha) contient de la **nicotine** : on en devient **dépendant** (on ne peut plus s'en passer). Il abîme les **poumons** et le cœur et donne des cancers. La fumée gêne aussi les personnes à côté (c'est le **tabagisme passif**).
- L'**alcool** abîme le foie et le cerveau et provoque des accidents et de la violence.
- Les **drogues** (chanvre indien, colle ou diluant que l'on respire, comprimés pris sans ordonnance) abîment le **cerveau**, font perdre le contrôle de soi et rendent **dépendant**. Elles sont **interdites** par la loi.

On commence souvent pour « faire comme les grands » ou parce qu'un camarade insiste. **Dire non** est un signe de force. Si quelqu'un te propose du tabac ou de la drogue, refuse et parles-en à un **adulte de confiance** (parent, maître, directeur).

## Erreurs fréquentes
- Pencher la tête **en arrière** quand le nez saigne : le sang coule dans la gorge. On la penche **en avant**.
- Toucher une personne électrocutée avant de couper le courant : on s'électrocute à son tour.
- Croire qu'« une seule cigarette » ne fait rien : la dépendance commence vite.

> **À retenir** :
> - Premiers secours : protéger, alerter, secourir.
> - SAMU 1515, pompiers 18, police 17 : dire qui, où, quoi, combien.
> - Brûlure : eau fraîche au moins 10 minutes ; saignement de nez : tête en avant.
> - Tabac, alcool, drogues : dangereux, rendent dépendant ; dire non et en parler à un adulte.
`,
      exercices: [
        { type: "qcm", question: "Quelles sont, dans l'ordre, les trois étapes des premiers secours ?", choix: ["Secourir, protéger, alerter", "Alerter, secourir, protéger", "Protéger, alerter, secourir", "Courir, crier, partir"], reponse: 2, explication: "On **protège** d'abord (pas de 2e accident), on **alerte**, puis on **secourt**." },
        { type: "saisie", question: "Quel numéro appelle-t-on pour joindre le SAMU (urgences médicales) au Sénégal ?", reponses: ["1515", "le 1515", "15 15"], explication: "Le **SAMU** : le **1515** (pompiers 18, police 17)." },
        { type: "qcm", question: "Ton petit frère s'est brûlé la main avec de l'eau bouillante. Que fais-tu d'abord ?", choix: ["Je mets du beurre sur la brûlure", "Je mets la main sous l'eau fraîche pendant au moins 10 minutes", "Je mets du dentifrice", "Je frotte avec du sable"], reponse: 1, explication: "L'**eau fraîche** refroidit la brûlure. Le beurre, l'huile ou le dentifrice gardent la chaleur et salissent la plaie." },
        { type: "vf", question: "Quand le nez saigne, il faut pencher la tête en arrière.", reponse: false, explication: "On penche la tête **en avant** et on appuie sur la narine ; en arrière, le sang coule dans la gorge." },
        { type: "qcm", question: "Un camarade a touché un fil électrique et reste collé au courant. Que faut-il faire en premier ?", choix: ["Le tirer par le bras", "Lui jeter de l'eau", "Couper le courant (ou appeler un adulte pour le faire)", "Attendre qu'il lâche tout seul"], reponse: 2, explication: "C'est l'étape **protéger** : sans couper le courant, tu t'électrocuterais toi aussi." },
        { type: "qcm", question: "Quand tu appelles les secours, que dois-tu dire ?", choix: ["Seulement ton prénom", "Qui tu es, où tu es, ce qui s'est passé et combien il y a de blessés", "Rien, tu raccroches tout de suite", "Le nom de ton école seulement"], reponse: 1, explication: "Les secours doivent savoir **qui, où, quoi, combien** pour venir vite avec le bon matériel." },
        { type: "saisie", question: "Comment appelle-t-on le fait de ne plus pouvoir se passer du tabac ou d'une drogue ?", reponses: ["dépendance", "la dépendance", "être dépendant", "addiction", "l'addiction"], explication: "C'est la **dépendance** : on ne peut plus s'en passer." },
        { type: "vf", question: "La fumée de cigarette est aussi dangereuse pour les personnes qui sont à côté du fumeur.", reponse: true, explication: "C'est le **tabagisme passif** : les voisins respirent aussi la fumée." },
        { type: "qcm", question: "Des grands du quartier proposent à Ousmane de respirer de la colle « pour s'amuser ». Que doit-il faire ?", choix: ["Essayer une seule fois", "Accepter pour ne pas paraître peureux", "Refuser et en parler à un adulte de confiance", "Garder le secret"], reponse: 2, explication: "La colle respirée abîme le **cerveau**. **Dire non** et en parler à un adulte, c'est se protéger." },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* : à la sortie de l'école, une moto renverse un élève. Il est couché au bord de la route, sa jambe saigne. Des enfants veulent le relever et le porter jusqu'à l'école ; d'autres restent au milieu de la route pour regarder.\n\n*Consigne 1* : dis ce qu'il faut faire pour **protéger** et pour **alerter**.\n\n*Consigne 2* : explique pourquoi il ne faut pas relever ni porter le blessé, et ce qu'on peut faire en attendant les secours.", corrige: `**Consigne 1** :
- **Protéger** : faire sortir les enfants de la route, demander à un adulte de faire ralentir les véhicules, pour éviter un deuxième accident.
- **Alerter** : appeler un adulte (le maître, le directeur) et les secours : le **SAMU au 1515** ou les **pompiers au 18**. Dire qui on est, où l'accident a eu lieu (devant l'école, avec un repère), ce qui s'est passé, qu'il y a un blessé à la jambe qui saigne.

**Consigne 2** : on ne relève pas le blessé, car il peut avoir un os cassé ou être blessé au dos : le bouger peut aggraver ses blessures. En attendant, on le laisse couché, on le couvre, on lui parle pour le rassurer ; un adulte appuie sur la plaie avec un linge propre pour arrêter le saignement.` },
      ],
    },
    {
      id: "climat-aires-protegees-population",
      titre: "Le changement climatique, les aires protégées et la population",
      theme: "Vivre dans son milieu",
      cours: `
## 1. Le changement climatique
La Terre se **réchauffe** : c'est le **changement climatique**. Les voitures, les usines, les centrales au pétrole et les feux rejettent des **gaz** (comme le gaz carbonique) qui retiennent la chaleur autour de la Terre. La coupe des forêts aggrave le problème, car les arbres absorbent ce gaz.

**Conséquences au Sénégal** :
- des **pluies irrégulières** : sécheresses certaines années, fortes pluies et **inondations** d'autres années ;
- des **chaleurs** plus fortes ;
- la **montée du niveau de la mer** : la côte recule (c'est l'**érosion côtière**) ; à Saint-Louis, sur la Langue de Barbarie, la mer a détruit des maisons et des familles ont dû partir.

**Agir** : planter des arbres et replanter la **mangrove** (dans le Saloum et en Casamance), utiliser les énergies renouvelables (soleil, vent), économiser l'énergie, marcher ou prendre le vélo.

## 2. Les aires protégées
Une **aire protégée** est un espace où la nature est protégée par la loi : on n'y chasse pas, on n'y coupe pas les arbres.
| Aire protégée | Où ? | Ce qu'on protège |
|---|---|---|
| Parc national du **Niokolo-Koba** | sud-est (régions de Tambacounda et Kédougou) | savane et forêt : lions, hippopotames, chimpanzés, antilopes |
| Parc national des oiseaux du **Djoudj** | delta du fleuve Sénégal, près de Saint-Louis | plus d'un million d'oiseaux (pélicans, flamants) dont beaucoup viennent d'Europe pour passer l'hiver |
| **Delta du Saloum** | région de Fatick | la mangrove, les poissons, les oiseaux |

Le Niokolo-Koba et le Djoudj sont inscrits au **patrimoine mondial** de l'UNESCO depuis 1981. Le Niokolo-Koba, menacé par le braconnage, a été placé sur la liste du patrimoine « en péril » en 2007 ; grâce aux efforts du Sénégal, il en est sorti en 2024. Les **écogardes** (gardes des parcs) les surveillent contre le **braconnage** (la chasse interdite).

## 3. L'éducation à la population
D'après le **recensement de 2023** (RGPH-5, fait par l'ANSD, l'agence de la statistique), le Sénégal compte environ **18 millions d'habitants**.
- La population est **jeune** : environ 39 habitants sur 100 ont moins de 15 ans.
- Plus de la moitié des habitants vivent en **ville** (environ 55 sur 100).
- La population **augmente vite** (environ 2,9 % par an) : à ce rythme, elle doublerait en 25 ans environ.

Quand la population augmente vite, il faut **plus d'écoles**, de maîtres, de **postes de santé**, d'**eau**, de nourriture, de logements et d'**emplois**. L'**exode rural** (départ des villages vers les villes) fait grandir les villes très vite : quartiers sans eau ni assainissement, embouteillages, chômage. Chaque famille réfléchit à la façon de bien **nourrir, soigner et scolariser** tous ses enfants.

>! **Exemple** : dans la commune de Fatou, il y avait 300 élèves à l'école il y a quelques années ; ils sont aujourd'hui 500 (données fictives). Il a fallu construire deux nouvelles classes et un deuxième point d'eau.

## Erreurs fréquentes
- Le changement climatique ne veut pas dire « il fait chaud aujourd'hui » : c'est un changement **sur de nombreuses années**, dans le monde entier.
- Une aire protégée n'est pas un zoo : les animaux y vivent **libres** dans leur milieu.

> **À retenir** :
> - Changement climatique : la Terre se réchauffe à cause des gaz rejetés par l'homme → pluies irrégulières, chaleur, montée de la mer (érosion côtière).
> - Agir : planter des arbres et la mangrove, énergies renouvelables, économies d'énergie.
> - Aires protégées : Niokolo-Koba (animaux de la savane), Djoudj (oiseaux), delta du Saloum (mangrove).
> - Population : environ 18 millions (2023), très jeune, plus de la moitié en ville, augmente vite → plus d'écoles, de santé, d'eau, d'emplois.
`,
      exercices: [
        { type: "qcm", question: "Qu'est-ce que le changement climatique ?", choix: ["Une journée très chaude", "Le réchauffement de la Terre sur de nombreuses années", "Le passage de la saison sèche à l'hivernage", "Une tempête de sable"], reponse: 1, explication: "C'est un changement **durable** du climat de toute la Terre, pas la météo d'un jour." },
        { type: "qcm", question: "Laquelle de ces activités rejette des gaz qui réchauffent la Terre ?", choix: ["Planter des arbres", "Marcher à pied", "Faire rouler beaucoup de voitures au gasoil", "Utiliser un panneau solaire"], reponse: 2, explication: "Les moteurs qui brûlent du pétrole rejettent du **gaz carbonique**." },
        { type: "vf", question: "Au Sénégal, la montée de la mer fait reculer la côte à certains endroits, comme à Saint-Louis.", reponse: true, explication: "C'est l'**érosion côtière** : à Saint-Louis, sur la Langue de Barbarie, la mer a détruit des maisons." },
        { type: "saisie", question: "Comment appelle-t-on la forêt d'arbres qui pousse dans l'eau salée, au bord de la mer, dans le Saloum et en Casamance ?", reponses: ["mangrove", "la mangrove", "une mangrove", "palétuviers", "les palétuviers", "palétuvier", "un palétuvier"], explication: "C'est la **mangrove** (ses arbres sont les palétuviers). La replanter protège la côte et les poissons." },
        { type: "qcm", question: "Dans quel parc national peut-on voir des lions, des hippopotames et des chimpanzés ?", choix: ["Le Djoudj", "Le Niokolo-Koba", "La Langue de Barbarie", "Le lac Rose"], reponse: 1, explication: "Le **Niokolo-Koba**, dans le sud-est du Sénégal, protège les grands animaux de la savane et de la forêt." },
        { type: "qcm", question: "Le parc du Djoudj, près de Saint-Louis, est surtout célèbre pour…", choix: ["ses lions", "ses mines d'or", "ses oiseaux, dont beaucoup viennent d'Europe pour l'hiver", "ses éoliennes"], reponse: 2, explication: "Le **Djoudj** accueille plus d'un million d'**oiseaux** (pélicans, flamants)." },
        { type: "saisie", question: "Comment appelle-t-on la chasse interdite des animaux protégés ?", reponses: ["braconnage", "le braconnage"], explication: "C'est le **braconnage** ; les écogardes surveillent les parcs." },
        { type: "saisie", question: "D'après le recensement de 2023, combien de millions d'habitants le Sénégal compte-t-il environ ?", reponses: ["18", "18 millions", "environ 18 millions", "dix-huit", "dix-huit millions", "18 millions d'habitants", "environ 18 millions d'habitants", "18,1 millions", "18 000 000"], explication: "Environ **18 millions** d'habitants (18 126 390 au recensement de 2023)." },
        { type: "qcm", question: "La population d'une commune augmente vite. De quoi aura-t-elle besoin en premier ?", choix: ["De moins de maîtres", "De plus d'écoles, de postes de santé et de points d'eau", "De fermer le marché", "De couper les arbres"], reponse: 1, explication: "Plus d'habitants = plus de besoins : **écoles, santé, eau, emplois**." },
        { type: "redaction", question: "**Situation d'intégration** (format CFEE)\n\n*Support* : dans le delta du Saloum, les habitants d'un village coupent les palétuviers de la mangrove pour avoir du bois de chauffe. Depuis, les pêcheurs et les femmes qui ramassent les huîtres trouvent de moins en moins de poissons et d'huîtres. Le maître dit que la mangrove est la « maison » des petits poissons.\n\n*Consigne 1* : explique pourquoi les poissons et les huîtres diminuent.\n\n*Consigne 2* : donne deux autres raisons de protéger la mangrove.\n\n*Consigne 3* : propose trois actions pour la protéger.", corrige: `**Consigne 1** : les petits poissons naissent et grandissent entre les racines des palétuviers, et les huîtres s'y accrochent. Quand on coupe la mangrove, ils n'ont plus d'abri : il y en a de moins en moins.

**Consigne 2** :
1. La mangrove protège la **côte** contre les vagues et la montée de la mer.
2. Elle abrite de nombreux **oiseaux** et absorbe le gaz qui réchauffe la Terre (elle aide contre le **changement climatique**).

**Consigne 3** :
1. **Les élèves et les habitants** replantent des palétuviers lors d'une journée de reboisement.
2. **Les familles** utilisent des foyers améliorés ou le gaz pour avoir besoin de moins de bois.
3. **La commune et les écogardes** interdisent de couper la mangrove et surveillent la zone (on accepte aussi : respecter le repos biologique, ne ramasser que les grosses huîtres).` },
      ],
    },
  ],
};
