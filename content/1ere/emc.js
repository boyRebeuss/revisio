export default {
  chapitres: [
    {
      id: "lien-social-cohesion",
      titre: "La société, les liens sociaux et les fondements de la cohésion sociale",
      theme: "Cohésion et diversité – Les valeurs et les principes de la République à l'épreuve de la cohésion sociale",
      cours: `
## Introduction
Qu'est-ce qui fait qu'une société « tient ensemble » malgré la diversité de ses membres ? C'est la question de la **cohésion sociale**. Elle repose sur des **liens sociaux** multiples (famille, travail, amis, citoyenneté) et sur des institutions qui garantissent des droits et une solidarité entre tous.

## 1. Définitions
- **Société** : ensemble d'individus vivant ensemble, organisés par des règles, des institutions et des valeurs communes.
- **Lien social** : ensemble des relations qui unissent les individus entre eux et à la société.
- **Cohésion sociale** : capacité d'une société à assurer le bien-être de tous ses membres, à réduire les inégalités et à éviter l'exclusion.
- **Socialisation** : processus par lequel l'individu apprend les normes et les valeurs de la société (famille, école, pairs, médias).

## 2. Les types de liens sociaux
Le sociologue **Serge Paugam** distingue quatre types de liens, qui apportent chacun **protection** et **reconnaissance** :

| Lien | Exemple | Ce qu'il apporte |
|---|---|---|
| Lien de filiation | parents, enfants | sécurité affective, entraide familiale |
| Lien de participation élective | amis, couple, associations | appartenance choisie, reconnaissance |
| Lien de participation organique | travail, école | revenu, statut, utilité sociale |
| Lien de citoyenneté | appartenance à la nation | droits civils, politiques et sociaux |

## 3. Les analyses classiques
- **Émile Durkheim** (*De la division du travail social*, 1893) : dans les sociétés traditionnelles domine une **solidarité mécanique**, fondée sur la ressemblance des individus ; dans les sociétés modernes domine une **solidarité organique**, fondée sur la complémentarité et l'interdépendance (division du travail). Quand les règles communes s'affaiblissent, il parle d'**anomie**.
- **Alexis de Tocqueville** (*De la démocratie en Amérique*, 1835-1840) : il redoute que l'**individualisme** démocratique pousse chacun à se replier sur sa sphère privée ; les **associations** permettent de recréer du lien.

## 4. Les fondements de la cohésion sociale en France
- **Des valeurs communes** : la devise « Liberté, Égalité, Fraternité », la laïcité, la DDHC de 1789.
- **Des droits garantis** : droits civils et politiques ; **droits sociaux** inscrits dans le **Préambule de la Constitution de 1946** (droit à l'emploi, à la protection de la santé, à l'instruction...).
- **Des institutions** : l'école (gratuite, laïque, obligatoire), la protection sociale, les services publics, la justice.
- **La Constitution de 1958**, article 1 : « La France est une République indivisible, laïque, démocratique et sociale. »

## 5. Des liens fragilisés
- **Chômage et précarité** fragilisent le lien de participation organique ; le sociologue Robert Castel parle de **désaffiliation** pour désigner la rupture progressive des liens.
- **Isolement** : un nombre important de personnes, notamment âgées, souffrent de solitude (la crise sanitaire de 2020 l'a accentué).
- **Inégalités et ségrégation** spatiale (quartiers prioritaires, territoires ruraux isolés), sentiment de relégation.
- **Montée de la défiance** envers les institutions et les autres.

> **À retenir** : la cohésion sociale repose sur plusieurs types de liens (famille, liens choisis, travail, citoyenneté) et sur des institutions qui garantissent droits et solidarité. Dans les sociétés modernes, la solidarité naît de l'interdépendance (Durkheim). Le chômage, l'isolement et les inégalités fragilisent ces liens et menacent la cohésion.
`,
      exercices: [
        { type: "qcm", question: "Selon Durkheim, sur quoi repose la solidarité dans les sociétés modernes ?", choix: ["Sur la ressemblance des individus", "Sur la contrainte de l'État", "Sur la religion uniquement", "Sur la complémentarité née de la division du travail"], reponse: 3,
          explication: "C'est la **solidarité organique** : chacun a une fonction différente et tous dépendent les uns des autres. La solidarité fondée sur la ressemblance est dite mécanique." },
        { type: "saisie", question: "Quel mot Durkheim emploie-t-il pour désigner l'affaiblissement des règles communes dans une société ?", reponses: ["anomie", "l'anomie"],
          explication: "L'**anomie** est une situation où les normes sociales ne règlent plus les comportements." },
        { type: "vf", question: "Le lien de participation organique correspond aux relations nouées par le travail ou l'école.", reponse: true,
          explication: "Vrai : il procure un revenu, un statut et un sentiment d'utilité sociale (classification de Serge Paugam)." },
        { type: "qcm", question: "Quel texte inscrit les droits sociaux (santé, emploi, instruction) dans le bloc de constitutionnalité ?", choix: ["La DDHC de 1789", "Le Code civil de 1804", "Le Préambule de la Constitution de 1946", "La loi de 1905"], reponse: 2,
          explication: "Le **Préambule de 1946** proclame les droits économiques et sociaux ; il fait partie du bloc de constitutionnalité avec la DDHC et la Charte de l'environnement." },
        { type: "saisie", question: "Complète l'article 1 de la Constitution : « La France est une République indivisible, laïque, démocratique et ... »", reponses: ["sociale"],
          explication: "La République est **sociale** : elle doit garantir la solidarité et réduire les inégalités." },
        { type: "vf", question: "Pour Tocqueville, les associations sont un danger pour la démocratie.", reponse: false,
          explication: "Faux : Tocqueville voit dans les **associations** un remède à l'individualisme et un moyen de faire vivre la démocratie." },
        { type: "qcm", question: "Que désigne la « désaffiliation » selon Robert Castel ?", choix: ["La rupture progressive des liens au travail et des liens sociaux", "L'adhésion à un syndicat", "Le changement de nationalité", "Le divorce"], reponse: 0,
          explication: "La **désaffiliation** décrit le processus qui conduit de la précarité à l'exclusion, par la perte du travail et l'affaiblissement des liens." },
        { type: "redaction", question: "Question argumentée : *Quels sont les fondements de la cohésion sociale en France, et qu'est-ce qui la fragilise aujourd'hui ?*",
          corrige: `**Problématique** : sur quoi repose le « vivre-ensemble » en France et pourquoi est-il menacé ?

**I. Les fondements de la cohésion sociale**
- Des liens sociaux multiples : filiation, liens choisis, travail, citoyenneté (Paugam).
- Des valeurs communes : devise républicaine, laïcité, DDHC.
- Des institutions protectrices : école, protection sociale, services publics ; droits sociaux du Préambule de 1946 ; République « sociale » (article 1 de la Constitution).

**II. Des fragilités**
- Chômage et précarité : désaffiliation (Castel).
- Isolement, inégalités territoriales, ségrégation.
- Défiance envers les institutions, individualisme (Tocqueville).

**III. Des réponses possibles**
- Politiques de solidarité, services publics de proximité.
- Engagement associatif, école comme lieu de mixité.

**Conclusion** : la cohésion sociale n'est jamais acquise ; elle dépend à la fois de l'action publique et de l'engagement de chacun.` },
      ],
    },
    {
      id: "fraternite-solidarite",
      titre: "La recomposition du lien social : fraternité et solidarité",
      theme: "Cohésion et diversité – Les valeurs et les principes de la République à l'épreuve de la cohésion sociale",
      cours: `
## Introduction
La **fraternité** est le troisième terme de la devise républicaine. Longtemps considérée comme une simple valeur morale, elle a été reconnue en **2018** comme un principe à valeur constitutionnelle. Elle se traduit concrètement par la **solidarité**, organisée par l'État (protection sociale) et vécue par les citoyens (associations, bénévolat).

## 1. Fraternité et solidarité : définitions
- **Fraternité** : lien de bienveillance et d'entraide entre les êtres humains, considérés comme membres d'une même communauté.
- **Solidarité** : dépendance mutuelle entre les membres d'un groupe, qui se traduit par une aide réciproque ; elle peut être **publique** (organisée par l'État) ou **privée** (famille, associations).
- La devise « **Liberté, Égalité, Fraternité** » apparaît pendant la Révolution, est adoptée par la Deuxième République en 1848 et figure à l'article 2 de la Constitution de 1958.

## 2. La fraternité, un principe constitutionnel
- **Décision du Conseil constitutionnel du 6 juillet 2018** : saisi à propos du « délit de solidarité » (affaire de l'agriculteur **Cédric Herrou**, qui aidait des migrants dans la vallée de la Roya), il reconnaît que la fraternité est un **principe à valeur constitutionnelle** dont découle « la liberté d'aider autrui, dans un but humanitaire, sans considération de la régularité de son séjour sur le territoire national ».
- Le législateur a ensuite précisé que l'aide humanitaire désintéressée n'est pas punissable (loi de septembre 2018).

## 3. La solidarité organisée par l'État : la protection sociale
- **Ordonnances d'octobre 1945** : création de la **Sécurité sociale**, inspirée du programme du Conseil national de la Résistance (1944) ; les ordonnances sont prises sous le ministre Alexandre Parodi, puis **Ambroise Croizat**, ministre du Travail (1945-1947), met en place le régime général ; le haut fonctionnaire **Pierre Laroque** en est l'architecte. Principe : « chacun cotise selon ses moyens et reçoit selon ses besoins ».
- **Branches** : maladie, famille, retraite (vieillesse), accidents du travail et maladies professionnelles, et depuis 2020 la branche autonomie.
- **Logiques** : l'**assurance** (prestations en échange de cotisations) et l'**assistance** (aides sans contrepartie de cotisation pour les plus démunis, financées par l'impôt) : RMI (1988), remplacé par le **RSA** (2009), CMU (1999, remplacée en 2016 par la protection universelle maladie), minimum vieillesse.
- **Redistribution** : impôts et prestations réduisent les inégalités de revenus.
- **Services publics** gratuits ou peu coûteux : école, hôpital.

## 4. La solidarité vécue par les citoyens
- **Associations** (loi du 1er juillet 1901) : Restos du cœur (fondés par Coluche en 1985), Secours populaire, Croix-Rouge, Emmaüs (abbé Pierre, 1949), associations de quartier.
- **Bénévolat** : des millions de Français donnent de leur temps.
- **Solidarités familiales** et de voisinage, solidarités intergénérationnelles.
- **Nouvelles formes** : plateformes d'entraide, financement participatif, épiceries solidaires, colocations intergénérationnelles.

## 5. Des débats
- Coût de la protection sociale, financement (déficit), équilibre entre droits et devoirs.
- Fraude et non-recours : de nombreuses personnes éligibles ne demandent pas les aides auxquelles elles ont droit.
- Solidarité nationale ou internationale (accueil des réfugiés, aide au développement).

> **À retenir** : la fraternité, principe à valeur constitutionnelle depuis la décision du Conseil constitutionnel du 6 juillet 2018, se traduit par la solidarité. Celle-ci est organisée par l'État (Sécurité sociale créée en 1945, minima sociaux, services publics) et prolongée par l'engagement des citoyens (associations, bénévolat).
`,
      exercices: [
        { type: "saisie", question: "En quelle année le Conseil constitutionnel reconnaît-il la fraternité comme principe à valeur constitutionnelle ?", reponses: ["2018"],
          explication: "Décision du **6 juillet 2018**, à propos du « délit de solidarité »." },
        { type: "qcm", question: "En quelle année est créée la Sécurité sociale ?", choix: ["1936", "1945", "1958", "1988"], reponse: 1,
          explication: "Les ordonnances d'**octobre 1945** créent la Sécurité sociale. 1988 correspond au RMI." },
        { type: "vf", question: "Le RSA relève d'une logique d'assistance : il est versé sans contrepartie de cotisations.", reponse: true,
          explication: "Vrai : le RSA (2009, successeur du RMI de 1988) est financé par l'impôt et versé aux personnes aux ressources faibles." },
        { type: "qcm", question: "Quelle association a été fondée par Coluche en 1985 ?", choix: ["Emmaüs", "Le Secours populaire", "La Croix-Rouge", "Les Restos du cœur"], reponse: 3,
          explication: "Les **Restos du cœur** distribuent des repas aux plus démunis. Emmaüs a été fondé par l'abbé Pierre en 1949." },
        { type: "saisie", question: "Quel texte de 1901 encadre la liberté d'association en France ? (donne l'année)", reponses: ["1901", "loi de 1901", "loi du 1er juillet 1901", "loi 1901", "loi du 1 juillet 1901", "en 1901"],
          explication: "La loi du **1er juillet 1901** permet à toute personne de créer librement une association à but non lucratif." },
        { type: "vf", question: "La protection sociale française repose uniquement sur la logique d'assurance.", reponse: false,
          explication: "Faux : elle combine **assurance** (cotisations) et **assistance** (minima sociaux financés par l'impôt)." },
        { type: "qcm", question: "Dans quelle affaire le Conseil constitutionnel a-t-il consacré la « liberté d'aider autrui » ?", choix: ["L'affaire de Cédric Herrou, poursuivi pour avoir aidé des migrants", "L'affaire Dreyfus", "L'affaire du voile de Creil", "L'affaire des Gilets jaunes"], reponse: 0,
          explication: "L'agriculteur **Cédric Herrou** aidait des migrants dans la vallée de la Roya ; sa question prioritaire de constitutionnalité a abouti à la décision de 2018." },
        { type: "redaction", question: "Question argumentée : *En quoi la fraternité est-elle aujourd'hui à la fois une valeur, un principe juridique et une pratique ?*",
          corrige: `**Problématique** : comment la fraternité, idéal de la devise républicaine, devient-elle une réalité concrète ?

**I. Une valeur républicaine**
- Devise « Liberté, Égalité, Fraternité » (Révolution, 1848, article 2 de la Constitution de 1958).
- Idée d'une communauté de citoyens liés par l'entraide.

**II. Un principe juridique**
- Décision du Conseil constitutionnel du 6 juillet 2018 : principe à valeur constitutionnelle, « liberté d'aider autrui dans un but humanitaire ».
- Conséquence : l'aide humanitaire désintéressée n'est plus sanctionnée.

**III. Une pratique de solidarité**
- Solidarité publique : Sécurité sociale (1945), minima sociaux (RSA), services publics, redistribution.
- Solidarité citoyenne : associations (loi 1901), bénévolat, Restos du cœur, entraide de proximité.
- Limites et débats : non-recours, financement, accueil des étrangers.

**Conclusion** : la fraternité donne sens à la solidarité ; elle est l'affaire de l'État comme de chaque citoyen.` },
      ],
    },
    {
      id: "engagement-politique-social",
      titre: "Les formes de l'engagement politique et social",
      theme: "Approfondissements (programmes de 2nde et de terminale)",
      cours: `
## Introduction
Être citoyen, ce n'est pas seulement voter : c'est aussi **s'engager**, c'est-à-dire consacrer du temps et de l'énergie à une cause collective. L'engagement prend des formes très variées, anciennes (partis, syndicats) ou nouvelles (pétitions en ligne, mobilisations ponctuelles, engagement associatif).

## 1. Définitions
- **Engagement** : action volontaire d'un individu au service d'une cause ou d'un collectif.
- **Engagement politique** : participation à la vie de la cité et à la conquête ou à l'exercice du pouvoir (vote, adhésion à un parti, candidature, manifestation).
- **Engagement social** : action au service des autres ou d'une cause (associations, syndicats, bénévolat, humanitaire).
- **Militant** : personne qui s'engage activement et durablement pour une cause.

## 2. Les formes institutionnelles de l'engagement
- **Le vote** : droit de vote à 18 ans depuis la loi du **5 juillet 1974** ; les femmes votent depuis l'ordonnance du 21 avril 1944 (premier vote en avril 1945). Le vote n'est pas obligatoire en France.
- **Les partis politiques** : l'article 4 de la Constitution de 1958 précise qu'ils « concourent à l'expression du suffrage » ; ils sélectionnent des candidats et proposent des programmes.
- **Les syndicats**, autorisés par la loi Waldeck-Rousseau de **1884**, défendent les intérêts des salariés (CGT, CFDT, FO...) ou des employeurs. Le droit syndical et le droit de grève figurent dans le Préambule de 1946.
- **Les mandats électifs** : conseiller municipal (possible dès 18 ans), maire, député, etc.

## 3. Les formes associatives et citoyennes
- **Associations** : plus d'un million d'associations actives en France, dans le sport, la culture, l'humanitaire, l'environnement, la défense des droits (Ligue des droits de l'homme, 1898 ; Amnesty International ; Greenpeace...).
- **Service civique** (créé en **2010**) : engagement volontaire de 6 à 12 mois pour les 16-25 ans (jusqu'à 30 ans pour les jeunes en situation de handicap), indemnisé, dans une mission d'intérêt général.
- **Engagements de défense et de sécurité** : réserve militaire, sapeurs-pompiers volontaires, réserve citoyenne.
- **Engagements lycéens** : délégués de classe, conseil de la vie lycéenne (CVL), maisons des lycéens.

## 4. Les évolutions de l'engagement
- **Recul des engagements traditionnels** : baisse des adhésions aux partis et aux syndicats, montée de l'**abstention**, surtout chez les jeunes.
- **Engagements plus ponctuels et individualisés** : manifestations, pétitions (notamment en ligne), boycott, mobilisations pour le climat (grèves scolaires lancées en 2018 par Greta Thunberg), mouvements spontanés comme les **Gilets jaunes** (2018-2019).
- **Rôle du numérique** : mobilisation rapide par les réseaux sociaux, mais risque d'un engagement superficiel (« militantisme du clic »).
- **Désobéissance civile** : violation publique et non violente d'une loi jugée injuste, pour la faire changer (Henry David Thoreau, Gandhi, Martin Luther King). Elle pose la question des limites de l'engagement dans un État de droit.

>! **Exemple** : un lycéen peut s'engager en étant élu au CVL, en rejoignant une association de défense de l'environnement, en réalisant un service civique après le bac ou en s'inscrivant sur les listes électorales à 18 ans (inscription automatique s'il a effectué son recensement citoyen).

> **À retenir** : l'engagement prend des formes politiques (vote, partis, mandats) et sociales (associations, syndicats, bénévolat, service civique). Les formes traditionnelles reculent au profit d'engagements plus ponctuels, souvent liés au numérique, mais le désir de s'engager reste fort, notamment chez les jeunes.
`,
      exercices: [
        { type: "saisie", question: "Depuis quelle année la majorité civile et le droit de vote sont-ils fixés à 18 ans en France ?", reponses: ["1974"],
          explication: "La loi du **5 juillet 1974** abaisse la majorité de 21 à 18 ans." },
        { type: "qcm", question: "Quel dispositif, créé en 2010, permet aux 16-25 ans de s'engager 6 à 12 mois dans une mission d'intérêt général ?", choix: ["Le service militaire", "Le conseil de la vie lycéenne", "Le service civique", "Le Parlement des enfants"], reponse: 2,
          explication: "Le **service civique** est indemnisé et ouvert à tous les jeunes de 16 à 25 ans (30 ans en situation de handicap)." },
        { type: "vf", question: "En France, le vote est obligatoire.", reponse: false,
          explication: "Faux : voter est un droit et un devoir civique, mais il n'est pas obligatoire (contrairement à la Belgique)." },
        { type: "qcm", question: "Que dit l'article 4 de la Constitution de 1958 à propos des partis politiques ?", choix: ["Ils sont interdits", "Ils doivent être financés par les syndicats", "Ils désignent le président", "Ils concourent à l'expression du suffrage"], reponse: 3,
          explication: "Les partis « **concourent à l'expression du suffrage** » et se forment librement." },
        { type: "saisie", question: "Comment appelle-t-on la violation publique et non violente d'une loi jugée injuste, dans le but de la faire changer ?", reponses: ["désobéissance civile", "la désobéissance civile"],
          explication: "La **désobéissance civile** (Thoreau, Gandhi, Luther King) assume la sanction pour interpeller l'opinion." },
        { type: "vf", question: "L'adhésion aux partis et aux syndicats tend à reculer, alors que les engagements ponctuels se développent.", reponse: true,
          explication: "Vrai : on observe une crise de l'engagement traditionnel mais un essor des mobilisations ponctuelles, associatives et numériques." },
        { type: "qcm", question: "En quelle année les femmes votent-elles pour la première fois en France ?", choix: ["1848", "1936", "1945", "1974"], reponse: 2,
          explication: "Le droit de vote leur est accordé par l'ordonnance du 21 avril 1944 ; elles votent pour la première fois aux municipales d'avril **1945**." },
        { type: "redaction", question: "Question argumentée : *Les jeunes se désintéressent-ils de l'engagement ?*",
          corrige: `**Problématique** : l'abstention et le faible engagement partisan des jeunes signifient-ils un recul de leur engagement, ou une transformation de ses formes ?

**I. Des signes de désengagement**
- Forte abstention des jeunes aux élections.
- Faible adhésion aux partis et aux syndicats.
- Défiance envers les responsables politiques.

**II. Mais un engagement qui se transforme**
- Engagement associatif et bénévole, service civique (2010).
- Mobilisations pour le climat (grèves scolaires depuis 2018), contre les discriminations.
- Usage des réseaux sociaux, pétitions, boycott ; engagement lycéen (CVL).

**III. Des limites et des enjeux**
- Risque d'un engagement superficiel (militantisme du clic).
- Importance de l'éducation civique et de la participation électorale pour peser sur les décisions.

**Conclusion** : les jeunes ne se désintéressent pas de l'engagement ; ils privilégient des formes plus ponctuelles et concrètes, ce qui interroge les institutions démocratiques sur leur capacité à les intégrer.` },
      ],
    },
    {
      id: "democratie-representative-participative",
      titre: "La démocratie représentative et la démocratie participative",
      theme: "Approfondissements (programmes de 2nde et de terminale)",
      cours: `
## Introduction
En France, le peuple exerce sa souveraineté surtout par ses **représentants** élus. Mais la crise de la représentation (abstention, défiance) pousse à développer des formes de **démocratie participative**, qui associent davantage les citoyens aux décisions.

## 1. Définitions
- **Démocratie** : régime où le pouvoir appartient au peuple (« gouvernement du peuple, par le peuple et pour le peuple », article 2 de la Constitution).
- **Démocratie directe** : les citoyens décident eux-mêmes (référendum, assemblées citoyennes).
- **Démocratie représentative** : les citoyens élisent des représentants qui décident en leur nom.
- **Démocratie participative** : ensemble de dispositifs qui associent les citoyens à l'élaboration des décisions, sans remplacer les élus (consultations, débats publics, budgets participatifs, conventions citoyennes).

## 2. La démocratie représentative en France
- **Article 3 de la Constitution de 1958** : « La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. »
- Élections : présidentielle (au suffrage universel direct depuis la révision de **1962**, mandat de 5 ans depuis le référendum de **2000**), législatives (577 députés), municipales, départementales, régionales, européennes ; sénatoriales au suffrage indirect.
- **Atouts** : permet de gouverner un grand pays, confie la décision à des élus responsables devant les électeurs.
- **Limites** : forte **abstention**, défiance envers les élus, faible représentation de certaines catégories (ouvriers, jeunes), sentiment que les décisions échappent aux citoyens.

## 3. Les outils de la démocratie directe
- **Référendum** (article 11 et article 89 pour la révision de la Constitution) : par exemple sur le traité établissant une constitution pour l'Europe (**29 mai 2005**, rejeté à environ 55 % de « non »).
- **Référendum d'initiative partagée (RIP)** créé par la révision constitutionnelle de **2008** (en vigueur en 2015) : il faut le soutien d'un cinquième des parlementaires et d'un dixième des électeurs inscrits. Tenté en 2019 sur la privatisation d'Aéroports de Paris, il n'a pas atteint le seuil (environ 1,1 million de soutiens).
- **Référendums locaux** décisionnels (depuis 2003) et consultations locales.

## 4. Les dispositifs de démocratie participative
- **Conseils de quartier**, obligatoires dans les communes de plus de 80 000 habitants (loi « démocratie de proximité » de 2002).
- **Budgets participatifs** : les habitants proposent et votent des projets financés par la commune (Paris depuis 2014).
- **Commission nationale du débat public (CNDP)**, créée par la loi Barnier de 1995, organise des débats sur les grands projets d'aménagement.
- **Grand débat national** (janvier-mars 2019), lancé après le mouvement des Gilets jaunes.
- **Convention citoyenne pour le climat** (octobre 2019 - juin 2020) : 150 citoyens tirés au sort formulent 149 propositions ; une partie est reprise dans la loi Climat et résilience (2021). Une **Convention citoyenne sur la fin de vie** a suivi (2022-2023).
- **Pétitions** : le Conseil économique, social et environnemental (CESE) peut être saisi par pétition ; l'Assemblée nationale et le Sénat disposent de plateformes de pétitions en ligne.

## 5. Débats
- La démocratie participative **complète** la démocratie représentative mais ne la remplace pas : la décision finale revient aux élus, ce qui peut créer des déceptions (propositions de la Convention pour le climat pas toutes retenues).
- Risque que seuls les citoyens les plus diplômés ou les plus disponibles participent ; le **tirage au sort** cherche à y remédier.

> **À retenir** : la France est une démocratie représentative où le peuple s'exprime aussi par référendum (article 3). Face à la crise de la représentation, des dispositifs participatifs se développent (conseils de quartier, budgets participatifs, CNDP, Grand débat, conventions citoyennes). Ils enrichissent la démocratie sans remplacer les élus.
`,
      exercices: [
        { type: "qcm", question: "Selon l'article 3 de la Constitution, comment le peuple exerce-t-il la souveraineté nationale ?", choix: ["Par ses représentants et par la voie du référendum", "Uniquement par ses représentants", "Par le tirage au sort", "Par les partis politiques"], reponse: 0,
          explication: "« La souveraineté nationale appartient au peuple qui l'exerce **par ses représentants et par la voie du référendum**. »" },
        { type: "saisie", question: "Combien de citoyens tirés au sort composaient la Convention citoyenne pour le climat ?", reponses: ["150", "cent cinquante"],
          explication: "**150 citoyens** tirés au sort ont siégé d'octobre 2019 à juin 2020 et formulé 149 propositions." },
        { type: "vf", question: "Le référendum d'initiative partagée peut être déclenché par les seuls citoyens, sans parlementaires.", reponse: false,
          explication: "Faux : il faut l'initiative d'**un cinquième des parlementaires**, soutenue par **un dixième des électeurs inscrits**." },
        { type: "qcm", question: "Quel dispositif permet aux habitants de proposer et de voter des projets financés par leur commune ?", choix: ["Le budget participatif", "Le référendum national", "La question prioritaire de constitutionnalité", "L'élection municipale"], reponse: 0,
          explication: "Le **budget participatif** (Paris depuis 2014, et de nombreuses autres villes) est un outil de démocratie participative." },
        { type: "saisie", question: "En quelle année les Français ont-ils rejeté par référendum le traité constitutionnel européen ?", reponses: ["2005"],
          explication: "Le **29 mai 2005**, environ 55 % des votants ont voté « non »." },
        { type: "vf", question: "La démocratie participative a vocation à remplacer les élus.", reponse: false,
          explication: "Faux : elle **complète** la démocratie représentative ; la décision finale reste généralement aux élus." },
        { type: "qcm", question: "Quel événement a conduit au lancement du Grand débat national en 2019 ?", choix: ["La crise sanitaire", "Le mouvement des Gilets jaunes", "Le référendum de 2005", "La réforme des retraites de 2023"], reponse: 1,
          explication: "Le **Grand débat national** (janvier-mars 2019) répond à la crise des **Gilets jaunes** née à l'automne 2018." },
        { type: "redaction", question: "Question argumentée : *La démocratie participative est-elle une réponse à la crise de la démocratie représentative ?*",
          corrige: `**Problématique** : les dispositifs participatifs peuvent-ils redonner confiance aux citoyens dans la démocratie ?

**I. Une démocratie représentative en crise**
- Principe : article 3 de la Constitution, élections, rôle des partis.
- Symptômes : abstention, défiance, sous-représentation de certaines catégories, mouvements comme les Gilets jaunes.

**II. Les apports de la démocratie participative**
- Dispositifs : conseils de quartier (2002), budgets participatifs, CNDP (1995), Grand débat (2019), Convention citoyenne pour le climat (150 citoyens, 149 propositions).
- Avantages : citoyens mieux informés et associés, décisions plus légitimes, tirage au sort qui diversifie les profils.

**III. Des limites**
- Décision finale aux élus : déception quand les propositions sont écartées.
- Participation inégale selon les milieux sociaux.
- Outils de démocratie directe peu utilisés (RIP difficile à déclencher).

**Conclusion** : la démocratie participative ne remplace pas la représentation mais peut la revitaliser, à condition que la parole des citoyens soit réellement prise en compte.` },
      ],
    },
    {
      id: "societe-information",
      titre: "Les enjeux moraux et civiques de la société de l'information",
      theme: "Approfondissements (programmes de 2nde et de terminale)",
      cours: `
## Introduction
Internet et les réseaux sociaux ont transformé notre rapport à l'information : chacun peut s'informer, publier et partager instantanément. Cette **société de l'information** élargit la liberté d'expression, mais elle pose des questions morales et civiques : désinformation, haine en ligne, protection de la vie privée, pouvoir des grandes plateformes.

## 1. Notions
- **Société de l'information** : société où la production, la circulation et l'usage de l'information, notamment numérique, jouent un rôle central.
- **Liberté d'expression** : droit de communiquer ses idées et opinions (article 11 de la DDHC : « La libre communication des pensées et des opinions est un des droits les plus précieux de l'Homme »), sauf à répondre de l'abus de cette liberté dans les cas prévus par la loi.
- **Désinformation** : diffusion volontaire d'informations fausses pour tromper. On parle aussi de *fake news* ou d'« infox ».
- **Mésinformation** : diffusion d'une information fausse sans intention de tromper.
- **Complotisme** : croyance que les événements sont secrètement orchestrés par un groupe caché.
- **Bulle de filtres** : enfermement de l'utilisateur dans des contenus conformes à ses goûts, sélectionnés par les **algorithmes**.

## 2. Une liberté encadrée par la loi
- **Loi du 29 juillet 1881 sur la liberté de la presse** : principe de liberté, mais sanction de la diffamation, de l'injure, de la provocation à la haine ou à la violence.
- **Limites pénales** : l'apologie du terrorisme, l'incitation à la haine raciale (loi Pleven, 1972), la contestation de crimes contre l'humanité (loi Gayssot, 1990) sont punies.
- **Loi du 22 décembre 2018** relative à la lutte contre la manipulation de l'information : en période électorale, un juge peut faire cesser rapidement la diffusion de fausses informations.
- **Règlement européen sur les services numériques (DSA)**, applicable à toutes les plateformes depuis février 2024 : obligations de modération des contenus illicites et de transparence des algorithmes.
- **Arcom** (Autorité de régulation de la communication audiovisuelle et numérique), née en 2022 de la fusion du CSA et de la Hadopi.

## 3. La protection des données personnelles et de la vie privée
- **Loi Informatique et libertés (6 janvier 1978)** et création de la **CNIL** (Commission nationale de l'informatique et des libertés).
- **RGPD** (Règlement général sur la protection des données), applicable dans l'Union européenne depuis le **25 mai 2018** : consentement, droit d'accès, de rectification, d'effacement (« droit à l'oubli »).
- Les grandes entreprises du numérique tirent profit des données de leurs utilisateurs (publicité ciblée) : « si c'est gratuit, c'est toi le produit ».

## 4. Les dangers : haine, harcèlement, manipulation
- **Cyberharcèlement** : harcèlement par des moyens numériques ; c'est un délit (la loi de 2018 sanctionne aussi les « raids » numériques collectifs). Le numéro national **3018** aide les victimes. En 2022, le harcèlement scolaire est devenu un délit spécifique.
- **Discours de haine** en ligne (racisme, antisémitisme, sexisme, homophobie) : plateforme de signalement **Pharos**.
- **Manipulations** : ingérences étrangères, deepfakes (vidéos truquées par l'intelligence artificielle), théories du complot, captation de l'attention.

## 5. Développer l'esprit critique : le rôle du citoyen
- **Vérifier la source** (qui parle ? site fiable ? date ?), croiser les sources, distinguer information, opinion et publicité.
- Connaître le travail des **journalistes** (vérification, déontologie, protection du secret des sources) et des sites de vérification (fact-checking).
- **Éducation aux médias et à l'information (EMI)**, portée notamment par le **CLEMI** (créé en 1983).
- Réfléchir avant de publier : respect d'autrui, droit à l'image, responsabilité pénale.

>! **Méthode – vérifier une information en 4 questions** : 1) Qui est l'auteur ou le média ? 2) Quand l'information a-t-elle été publiée ? 3) D'autres sources fiables la confirment-elles ? 4) L'image ou la citation est-elle authentique (recherche d'image inversée) ?

> **À retenir** : la société de l'information élargit la liberté d'expression mais celle-ci n'est pas absolue (loi de 1881). Les enjeux sont la lutte contre la désinformation et la haine en ligne, la protection des données (CNIL 1978, RGPD 2018) et la régulation des plateformes (DSA). Le citoyen doit exercer son esprit critique et sa responsabilité.
`,
      exercices: [
        { type: "qcm", question: "Quel article de la DDHC protège la libre communication des pensées et des opinions ?", choix: ["Article 1", "Article 3", "Article 11", "Article 17"], reponse: 2,
          explication: "L'**article 11** affirme la libre communication des pensées et des opinions, sauf à répondre de l'abus de cette liberté dans les cas déterminés par la loi." },
        { type: "saisie", question: "Quel sigle désigne l'autorité administrative française chargée de la protection des données personnelles, créée en 1978 ?", reponses: ["CNIL"],
          explication: "La **CNIL** (Commission nationale de l'informatique et des libertés) est créée par la loi Informatique et libertés du 6 janvier 1978." },
        { type: "vf", question: "La liberté d'expression est absolue en France : on peut tout dire en ligne sans risque de poursuite.", reponse: false,
          explication: "Faux : la diffamation, l'injure, la provocation à la haine, l'apologie du terrorisme ou le cyberharcèlement sont punis par la loi." },
        { type: "qcm", question: "Depuis quelle date le RGPD s'applique-t-il dans l'Union européenne ?", choix: ["1er janvier 2000", "25 mai 2018", "29 juillet 1881", "17 février 2024"], reponse: 1,
          explication: "Le **RGPD** s'applique depuis le **25 mai 2018**. Le 17 février 2024 correspond à l'application générale du DSA." },
        { type: "saisie", question: "Quel est le numéro national d'aide aux victimes de cyberharcèlement ?", reponses: ["3018"],
          explication: "Le **3018** est gratuit, anonyme et confidentiel ; il peut aussi faire supprimer des contenus." },
        { type: "qcm", question: "Comment appelle-t-on la diffusion volontaire d'informations fausses dans le but de tromper ?", choix: ["La mésinformation", "Le fact-checking", "La désinformation", "La déontologie"], reponse: 2,
          explication: "La **désinformation** est intentionnelle ; la **mésinformation** désigne le partage d'une fausse information de bonne foi." },
        { type: "vf", question: "Les algorithmes des réseaux sociaux peuvent enfermer l'utilisateur dans une « bulle de filtres ».", reponse: true,
          explication: "Vrai : en proposant des contenus proches de ceux déjà consultés, ils réduisent la diversité des points de vue." },
        { type: "redaction", question: "Question argumentée : *Faut-il davantage réguler les réseaux sociaux pour protéger la démocratie ?*",
          corrige: `**Problématique** : comment concilier liberté d'expression et protection des citoyens face aux dérives des réseaux sociaux ?

**I. Les réseaux sociaux, un espace de liberté démocratique**
- Liberté d'expression (article 11 de la DDHC), accès à l'information, mobilisations citoyennes.
- Possibilité pour chacun de s'exprimer et de dénoncer des injustices.

**II. Des menaces pour la démocratie**
- Désinformation, manipulations et ingérences (période électorale), deepfakes.
- Haine et cyberharcèlement ; bulles de filtres et polarisation.
- Pouvoir des plateformes et exploitation des données personnelles.

**III. Réguler sans censurer**
- Cadre légal : loi de 1881, loi de 2018 sur la manipulation de l'information, RGPD (2018), DSA (2024), Arcom.
- Risque de censure excessive : le juge et le Conseil constitutionnel protègent la liberté d'expression.
- Rôle essentiel de l'éducation aux médias et de l'esprit critique.

**Conclusion** : une régulation est nécessaire, mais elle doit être encadrée par le droit et accompagnée de la responsabilité de chaque citoyen.` },
      ],
    },
    {
      id: "laicite-evolutions",
      titre: "La laïcité et ses évolutions",
      theme: "Cohésion et diversité – Les valeurs et les principes de la République à l'épreuve de la cohésion sociale",
      cours: `
## Introduction
La **laïcité** est un principe fondamental de la République française. Elle garantit la **liberté de conscience**, la **neutralité de l'État** à l'égard des religions et l'**égalité** de tous les citoyens quelles que soient leurs convictions. Issue d'une longue histoire, elle continue d'évoluer face aux questions nouvelles.

## 1. Définitions
- **Laïcité** : principe d'organisation de l'État qui sépare les institutions publiques et les religions, garantit la liberté de croire ou de ne pas croire et assure la neutralité de l'État.
- **Liberté de conscience** : liberté de choisir ses convictions religieuses ou philosophiques, d'en changer ou de n'en avoir aucune.
- **Neutralité** : obligation pour l'État, les services publics et leurs agents de ne manifester aucune préférence religieuse.

## 2. Une construction historique
- **1789** : la DDHC (article 10) affirme que « nul ne doit être inquiété pour ses opinions, même religieuses ».
- **1801** : le **Concordat** entre Bonaparte et le pape fait du catholicisme la religion « de la grande majorité des Français » ; l'État rémunère le clergé (puis aussi protestants et juifs).
- **1881-1886** : lois Ferry et Goblet : écoles publiques laïques.
- **Loi du 9 décembre 1905** de séparation des Églises et de l'État : article 1 (« La République assure la liberté de conscience. Elle garantit le libre exercice des cultes sous les seules restrictions édictées ci-après dans l'intérêt de l'ordre public ») et article 2 (« La République ne reconnaît, ne salarie ni ne subventionne aucun culte »).
- **1946 et 1958** : la laïcité devient un principe constitutionnel. Article 1 de la Constitution de 1958 : la France est une République « laïque » qui « assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion. Elle respecte toutes les croyances. »
- Exception : l'**Alsace-Moselle**, allemande en 1905, conserve le régime concordataire.

## 3. Ce que la laïcité permet et ce qu'elle impose
| Qui ? | Règle |
|---|---|
| L'État, les services publics, leurs agents | stricte **neutralité** : un fonctionnaire ne peut pas manifester sa religion dans l'exercice de ses fonctions |
| Les usagers des services publics | libres de manifester leur religion, dans le respect de l'ordre public (sauf règles particulières à l'école) |
| Les élèves des écoles, collèges et lycées publics | interdiction des signes ou tenues manifestant ostensiblement une appartenance religieuse (loi du **15 mars 2004**) |
| Tous dans l'espace public | liberté de culte et d'expression, sous réserve de l'ordre public ; interdiction de dissimuler son visage (loi de 2010) |

La laïcité n'est **pas** l'interdiction des religions ni l'hostilité envers elles : elle protège les croyants comme les non-croyants.

## 4. Les évolutions et débats récents
- **1989** : affaire des collégiennes voilées de **Creil** ; avis du Conseil d'État (27 novembre 1989) qui admet alors le port de signes religieux s'il n'est pas ostentatoire ou prosélyte.
- **2003-2004** : commission **Stasi**, puis loi du 15 mars 2004 sur les signes religieux à l'école.
- **2013** : **Charte de la laïcité à l'école**, affichée dans les établissements publics (15 articles).
- **Octobre 2020** : assassinat du professeur **Samuel Paty**, après un cours sur la liberté d'expression ; la laïcité et la liberté d'enseigner deviennent des enjeux centraux.
- **Loi du 24 août 2021** confortant le respect des principes de la République : extension de la neutralité aux salariés des organismes privés chargés d'un service public, contrôle renforcé des associations et des cultes, délit de séparatisme.
- **Rentrée 2023** : interdiction de l'**abaya** à l'école, validée par le Conseil d'État.
- Débats : place des signes religieux dans les entreprises privées (encadrée par le règlement intérieur), accompagnatrices de sorties scolaires, menus dans les cantines.

>! **Exemple** : une élève de lycée public ne peut pas porter de voile en classe (loi de 2004), mais sa mère, venant à un rendez-vous parents-professeurs, en a le droit : elle est usagère, pas agente du service public.

> **À retenir** : la laïcité repose sur trois piliers : liberté de conscience, séparation des Églises et de l'État (1905), égalité de tous. Elle impose la neutralité à l'État et à ses agents, pas aux citoyens en général. Elle s'adapte par la loi (2004, 2010, 2021) et la jurisprudence aux nouvelles questions.
`,
      exercices: [
        { type: "saisie", question: "En quelle année est votée la loi de séparation des Églises et de l'État ?", reponses: ["1905"],
          explication: "La loi du **9 décembre 1905** met fin au Concordat de 1801." },
        { type: "qcm", question: "Que dit l'article 2 de la loi de 1905 ?", choix: ["La République interdit les cultes", "La République impose la neutralité à tous les citoyens", "La République reconnaît quatre cultes officiels", "La République ne reconnaît, ne salarie ni ne subventionne aucun culte"], reponse: 3,
          explication: "L'article 2 affirme la **séparation** ; l'article 1 garantit la liberté de conscience et le libre exercice des cultes." },
        { type: "vf", question: "Un fonctionnaire peut porter un signe religieux visible lorsqu'il reçoit le public au guichet.", reponse: false,
          explication: "Faux : les **agents publics** sont soumis à une stricte neutralité dans l'exercice de leurs fonctions." },
        { type: "vf", question: "La laïcité interdit à un usager de porter un signe religieux dans une mairie ou un hôpital.", reponse: false,
          explication: "Faux : les **usagers** sont libres de manifester leur religion, dans le respect de l'ordre public. Seuls les élèves des écoles publiques sont soumis à la loi de 2004." },
        { type: "saisie", question: "Quelle région française conserve le régime concordataire ? (donne son nom)", reponses: ["Alsace-Moselle", "l'Alsace-Moselle", "Alsace Moselle", "Alsace et Moselle", "l'Alsace et la Moselle"],
          explication: "En 1905, l'**Alsace-Moselle** était allemande ; elle a conservé le Concordat après son retour à la France en 1918." },
        { type: "qcm", question: "Que prévoit la loi du 15 mars 2004 ?", choix: ["L'interdiction des signes religieux ostensibles pour les élèves des écoles, collèges et lycées publics", "L'interdiction de toute religion à l'école", "La neutralité des salariés du privé", "La fin du Concordat"], reponse: 0,
          explication: "Elle vise les **élèves** des établissements **publics** ; les signes discrets restent autorisés." },
        { type: "qcm", question: "Lequel de ces principes n'est PAS un pilier de la laïcité ?", choix: ["La liberté de conscience", "La neutralité de l'État", "L'égalité des citoyens quelles que soient leurs convictions", "L'obligation pour chacun d'abandonner sa religion"], reponse: 3,
          explication: "La laïcité **protège** la liberté de croire ou de ne pas croire ; elle n'impose à personne de renoncer à sa religion." },
        { type: "redaction", question: "Question argumentée : *La laïcité est-elle un principe de liberté ou un principe de restriction ?*",
          corrige: `**Problématique** : la laïcité limite-t-elle les libertés religieuses ou les garantit-elle ?

**I. Un principe de liberté**
- Liberté de conscience (DDHC art. 10 ; loi de 1905 art. 1) : croire, ne pas croire, changer de religion.
- Libre exercice des cultes ; protection des minorités religieuses ; égalité de tous (Constitution, art. 1).
- Séparation (1905) : l'État n'impose aucune religion.

**II. Des restrictions encadrées**
- Neutralité des agents publics.
- Loi de 2004 sur les signes ostensibles à l'école, loi de 2010 sur la dissimulation du visage, loi de 2021.
- Limites liées à l'ordre public.

**III. Un équilibre en débat**
- Débats : abaya (2023), accompagnatrices, entreprises privées.
- Ces restrictions visent à protéger la liberté de conscience des élèves et la neutralité du service public, pas à combattre les religions.

**Conclusion** : la laïcité est d'abord un principe de liberté et d'égalité ; ses restrictions, limitées et fixées par la loi, servent à garantir cette liberté pour tous.` },
      ],
    },
    {
      id: "egalite-discriminations",
      titre: "L'égalité et les discriminations",
      theme: "Cohésion et diversité – Les valeurs et les principes de la République à l'épreuve de la cohésion sociale",
      cours: `
## Introduction
« Les hommes naissent et demeurent libres et égaux en droits » (article 1 de la DDHC). L'**égalité** est un principe fondateur de la République. Pourtant, des **discriminations** persistent, liées à l'origine, au sexe, au handicap, à l'orientation sexuelle, à l'âge, au lieu de résidence... Le droit les interdit et des politiques cherchent à les combattre.

## 1. Définitions
- **Égalité en droits** (ou égalité formelle) : tous les citoyens ont les mêmes droits et sont égaux devant la loi.
- **Égalité des chances** : chacun doit pouvoir accéder aux mêmes positions sociales selon ses mérites, quelle que soit son origine.
- **Équité** : traiter différemment des situations différentes pour corriger des inégalités (exemple : aides aux élèves boursiers).
- **Inégalité** : différence d'accès à des ressources (revenus, diplômes, santé) socialement hiérarchisées.
- **Discrimination** : traitement défavorable d'une personne en raison d'un critère interdit par la loi, dans un domaine visé par la loi (emploi, logement, accès à un service...).
- **Préjugé** et **stéréotype** : idées toutes faites sur un groupe, qui peuvent conduire à la discrimination.

## 2. Le cadre juridique
- **Constitution de 1958**, article 1 : égalité devant la loi « sans distinction d'origine, de race ou de religion ».
- **Préambule de 1946** : « La loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme. »
- **Code pénal, article 225-1** : il énumère plus de vingt critères de discrimination prohibés (origine, sexe, situation de famille, grossesse, apparence physique, patronyme, lieu de résidence, état de santé, handicap, mœurs, orientation sexuelle, identité de genre, âge, opinions politiques, activités syndicales, appartenance vraie ou supposée à une ethnie, une nation, une prétendue race ou une religion...). La discrimination est punie jusqu'à 3 ans d'emprisonnement et 45 000 euros d'amende.
- **Lois contre le racisme** : loi Pleven (1972), loi Gayssot (1990).
- **Défenseur des droits**, autorité indépendante créée par la révision constitutionnelle de 2008 et installée en 2011 ; il a succédé notamment à la HALDE (2004-2011). On peut le saisir gratuitement.

## 3. L'égalité entre les femmes et les hommes
- Étapes : droit de vote (1944), autorisation d'exercer une profession sans l'accord du mari (1965), loi Veil sur l'IVG (1975), égalité salariale inscrite dans la loi (1972, loi Roudy de 1983 sur l'égalité professionnelle), autorité parentale conjointe (1987), inscription dans la Constitution de la liberté garantie à la femme de recourir à l'IVG (loi constitutionnelle du 8 mars 2024, article 34).
- **Parité** : la révision constitutionnelle de 1999 et la loi du **6 juin 2000** favorisent l'égal accès des femmes et des hommes aux mandats électoraux.
- **Index de l'égalité professionnelle** (2018) dans les entreprises d'au moins 50 salariés.
- Persistances : écarts de salaire, « plafond de verre », violences sexistes et sexuelles, répartition inégale des tâches domestiques.

## 4. D'autres combats contre les discriminations
- **Orientation sexuelle** : dépénalisation de l'homosexualité (1982), PACS (1999), **mariage pour tous** (loi du 17 mai 2013).
- **Handicap** : loi du **11 février 2005** pour l'égalité des droits et des chances (accessibilité, scolarisation).
- **Origine** : discriminations à l'embauche et au logement mises en évidence par le **testing** (envoi de CV identiques ne différant que par le nom ou l'adresse) ; le testing est reconnu comme preuve en justice.
- **Discrimination positive** (ou action positive) : mesures temporaires en faveur de groupes défavorisés (conventions d'éducation prioritaire de Sciences Po depuis 2001, réseaux d'éducation prioritaire).

## 5. Haines et rejets : nommer pour combattre
Le nouveau programme demande de distinguer précisément :
- **Racisme** : idéologie qui hiérarchise de prétendues « races » humaines, et comportements de rejet qui en découlent ;
- **Antisémitisme** : hostilité envers les Juifs (des préjugés antijudaïques médiévaux au génocide nazi, jusqu'aux actes antisémites actuels) ;
- **Antitsiganisme** : hostilité envers les Roms, Manouches, Gitans et « gens du voyage » ;
- **Xénophobie** : rejet des étrangers ;
- **Haine anti-LGBT** : rejet des personnes lesbiennes, gays, bisexuelles et transgenres ;
- **Harcèlement** : agissements répétés qui dégradent les conditions de vie d'une personne ; le harcèlement scolaire est un délit spécifique depuis la loi du 2 mars 2022.
Acteurs de la lutte : le **Défenseur des droits**, la **DILCRAH** (Délégation interministérielle à la lutte contre le racisme, l'antisémitisme et la haine anti-LGBT), les associations (LICRA, SOS Racisme, SOS Homophobie…), la plateforme **Pharos** pour les contenus haineux en ligne. Le caractère raciste, antisémite, sexiste ou homophobe d'un crime ou d'un délit est une **circonstance aggravante** qui alourdit la peine.

>! **Exemple** : refuser un logement à quelqu'un en raison de son nom à consonance étrangère est une discrimination punie par la loi ; la victime peut saisir le Défenseur des droits ou porter plainte.

> **À retenir** : l'égalité en droits est garantie par la DDHC, le Préambule de 1946 et la Constitution de 1958. Le Code pénal (article 225-1) interdit les discriminations fondées sur plus de vingt critères. Malgré des progrès (parité, mariage pour tous, loi handicap de 2005), les inégalités et discriminations persistent ; leur réduction passe par le droit, des politiques publiques et l'évolution des mentalités.
`,
      exercices: [
        { type: "qcm", question: "Quelle autorité indépendante peut-on saisir gratuitement en cas de discrimination ?", choix: ["Le Conseil constitutionnel", "La CNIL", "Le Défenseur des droits", "Le Sénat"], reponse: 2,
          explication: "Le **Défenseur des droits** (créé par la révision de 2008, installé en 2011) lutte contre les discriminations et protège les droits des usagers et des enfants." },
        { type: "vf", question: "Une discrimination est un traitement défavorable fondé sur un critère interdit par la loi.", reponse: true,
          explication: "Vrai : c'est la définition juridique (article 225-1 du Code pénal)." },
        { type: "saisie", question: "En quelle année la loi ouvrant le mariage aux couples de même sexe est-elle adoptée ?", reponses: ["2013"],
          explication: "La loi du **17 mai 2013** ouvre le mariage et l'adoption aux couples de personnes de même sexe." },
        { type: "qcm", question: "Quelle méthode consiste à envoyer des candidatures identiques ne différant que par un critère (nom, adresse) pour détecter une discrimination ?", choix: ["Le sondage", "Le testing", "Le référendum", "Le recensement"], reponse: 1,
          explication: "Le **testing** (ou test de discrimination) est reconnu comme mode de preuve devant les tribunaux." },
        { type: "saisie", question: "En quelle année est votée la loi sur la parité en politique ?", reponses: ["2000"],
          explication: "La loi du **6 juin 2000** fait suite à la révision constitutionnelle de 1999." },
        { type: "vf", question: "L'équité consiste à traiter tout le monde exactement de la même manière.", reponse: false,
          explication: "Faux : l'**équité** consiste à traiter différemment des situations différentes pour corriger des inégalités (ex. : bourses, éducation prioritaire)." },
        { type: "qcm", question: "Quelle loi de 2005 concerne les personnes handicapées ?", choix: ["La loi pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées", "La loi sur la parité", "La loi Gayssot", "La loi sur les signes religieux"], reponse: 0,
          explication: "La loi du **11 février 2005** impose notamment l'accessibilité et le droit à la scolarisation en milieu ordinaire." },
        { type: "redaction", question: "Question argumentée : *L'égalité en droits suffit-elle à garantir l'égalité réelle ?*",
          corrige: `**Problématique** : pourquoi l'égalité inscrite dans le droit ne suffit-elle pas toujours à faire disparaître les inégalités et les discriminations ?

**I. Une égalité en droits solidement garantie**
- DDHC (article 1), Préambule de 1946 (égalité femmes-hommes), Constitution de 1958 (article 1).
- Interdiction des discriminations (article 225-1 du Code pénal), Défenseur des droits.
- Avancées : parité (2000), loi handicap (2005), mariage pour tous (2013).

**II. Des inégalités et discriminations persistantes**
- Écarts de salaire et plafond de verre pour les femmes.
- Discriminations à l'embauche et au logement selon l'origine ou l'adresse (testing).
- Préjugés et stéréotypes.

**III. Des politiques pour une égalité réelle**
- Équité et action positive : éducation prioritaire, conventions Sciences Po, index de l'égalité professionnelle.
- Éducation, sensibilisation, sanctions.
- Débat : risque de stigmatiser ou de remettre en cause l'égalité formelle.

**Conclusion** : l'égalité en droits est une condition nécessaire mais non suffisante ; l'égalité réelle exige des politiques actives et un changement des mentalités.` },
        { type: "qcm", question: "Quel organisme interministériel coordonne la lutte contre le racisme, l'antisémitisme et la haine anti-LGBT ?", choix: ["La CNIL", "La DILCRAH", "L'Arcom", "Le Conseil d'État"], reponse: 1, explication: "La **DILCRAH** pilote les plans nationaux de lutte contre le racisme, l'antisémitisme et la haine anti-LGBT ; elle finance aussi des actions éducatives." },
        { type: "vf", question: "Lorsqu'un délit est commis en raison de l'origine ou de l'orientation sexuelle de la victime, la peine encourue est plus lourde.", reponse: true, explication: "Vrai : le mobile raciste, antisémite, sexiste ou homophobe est une **circonstance aggravante** prévue par le Code pénal." },
        { type: "saisie", question: "Comment appelle-t-on l'hostilité envers les Roms et les gens du voyage ?", reponses: ["antitsiganisme", "l'antitsiganisme", "anti-tsiganisme", "antitziganisme", "l'antitziganisme"], explication: "L'**antitsiganisme** est explicitement nommé par le nouveau programme, à côté du racisme, de l'antisémitisme, de la xénophobie et de la haine anti-LGBT." },
      ],
    },
    {
      id: "methode-emc",
      titre: "Méthodes en EMC : question argumentée, débat et analyse de document",
      theme: "Méthodes",
      cours: `
## L'évaluation en EMC
L'EMC est évaluée en **contrôle continu**. Les exercices attendus sont : l'**analyse de document(s)**, la **question argumentée** (ou réflexion argumentée), la participation à un **débat argumenté** et parfois un **projet d'engagement** (exposé, dossier). On évalue ta maîtrise des notions, ta capacité à argumenter et ton esprit critique.

>! **Le programme de 1re (en vigueur depuis la rentrée 2025)** s'intitule « Cohésion et diversité dans une société démocratique ». Partie I, « Les valeurs et les principes de la République à l'épreuve de la cohésion sociale » : fraternité et solidarité, égalité femmes-hommes, discriminations et haines (racisme, antisémitisme, antitsiganisme, xénophobie, haine anti-LGBT, harcèlement), laïcité. Partie II, « La République et la Nation » : République indivisible et décentralisée, nationalité, citoyenneté et mémoires, défense et sécurité nationale. Les chapitres sur l'engagement, la démocratie participative et la société de l'information restent utiles pour argumenter.

## 1. La question argumentée
1. **Analyser la question** : repère les notions (égalité, laïcité, engagement...) et définis-les.
2. **Formuler une problématique** qui montre l'enjeu ou la tension (liberté/sécurité, égalité formelle/égalité réelle).
3. **Construire un plan** en deux ou trois parties, souvent : constat/principe – limites ou débats – solutions/ouverture.
4. **Argumenter** : chaque argument est **appuyé sur un exemple précis** (texte juridique, date, acteur, situation concrète).
5. **Conclure** en répondant clairement à la question et en prenant position de façon nuancée.

## 2. Le débat argumenté
- **Préparer** : rassembler des arguments pour et contre, avec des sources fiables.
- **Écouter** : reformuler la position de l'autre avant de répondre.
- **Respecter** : on critique des idées, jamais des personnes ; on accepte le désaccord.
- **Nuancer** : distinguer les faits, les opinions et les valeurs.
- Le débat est un **exercice démocratique** : il apprend à construire un jugement personnel et à respecter le pluralisme.

## 3. L'analyse de document
1. **Présenter** le document : nature (texte de loi, article de presse, affiche, graphique, décision de justice), auteur, date, contexte.
2. **Dégager l'idée principale** et prélever les informations utiles.
3. **Expliquer** avec les notions du cours.
4. **Porter un regard critique** : point de vue de l'auteur, limites, intérêt du document.

## 4. Les grands textes à connaître

| Texte | Ce qu'il apporte |
|---|---|
| DDHC (1789) | droits naturels, égalité, souveraineté nationale, liberté d'expression (art. 11) |
| Loi du 29 juillet 1881 | liberté de la presse |
| Loi du 1er juillet 1901 | liberté d'association |
| Loi du 9 décembre 1905 | séparation des Églises et de l'État |
| Préambule de 1946 | droits économiques et sociaux, égalité femmes-hommes |
| Constitution de 1958 | République indivisible, laïque, démocratique et sociale ; souveraineté (art. 3) |
| Loi du 6 janvier 1978 | Informatique et libertés, CNIL |
| RGPD (2018) | protection des données en Europe |

>! **Exemple de problématique** : sujet « La démocratie participative » → « Les dispositifs participatifs renforcent-ils réellement le pouvoir des citoyens dans une démocratie représentative ? »

> **À retenir** : en EMC, on attend des définitions précises, des arguments appuyés sur des exemples juridiques et concrets, une problématique et une réponse nuancée. Dans un débat, on argumente, on écoute et on respecte autrui.
`,
      exercices: [
        { type: "qcm", question: "Dans une question argumentée d'EMC, comment un argument doit-il être présenté ?", choix: ["Sans exemple, pour rester général", "Appuyé sur un exemple précis (texte juridique, date, situation)", "Sous forme de liste de mots-clés", "Par une citation sans explication"], reponse: 1,
          explication: "Un argument convaincant associe une **idée**, un **exemple précis** et une **explication**." },
        { type: "vf", question: "Dans un débat argumenté, il est acceptable de critiquer la personne plutôt que ses idées.", reponse: false,
          explication: "Faux : on critique les **idées**, jamais les personnes ; le respect d'autrui est une règle du débat démocratique." },
        { type: "saisie", question: "Quel article de la Constitution de 1958 définit la souveraineté nationale ? (donne le numéro)", reponses: ["3", "article 3", "l'article 3", "art. 3", "art 3"],
          explication: "L'**article 3** : « La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. »" },
        { type: "qcm", question: "Quel texte garantit la liberté d'association ?", choix: ["La loi de 1881", "La loi de 1901", "La loi de 1905", "La loi de 1978"], reponse: 1,
          explication: "La loi du **1er juillet 1901**. 1881 : presse ; 1905 : séparation ; 1978 : informatique et libertés." },
        { type: "vf", question: "Distinguer faits, opinions et valeurs fait partie de l'esprit critique attendu en EMC.", reponse: true,
          explication: "Vrai : un fait se vérifie, une opinion se discute, une valeur se défend ; savoir les distinguer est essentiel pour argumenter." },
        { type: "qcm", question: "Quelle problématique convient le mieux au sujet « La laïcité à l'école » ?", choix: ["Qu'est-ce que l'école ?", "En quoi la laïcité à l'école protège-t-elle la liberté de conscience des élèves tout en encadrant l'expression religieuse ?", "Combien y a-t-il d'écoles en France ?", "Qui a inventé l'école ?"], reponse: 1,
          explication: "Elle pose une **tension** (protection de la liberté / encadrement) qui appelle une démonstration nuancée." },
        { type: "redaction", question: "Prépare un débat argumenté sur la question : *Faut-il rendre le vote obligatoire en France ?* Présente les arguments pour, contre, et ta position nuancée.",
          corrige: `**Problématique** : rendre le vote obligatoire renforcerait-il la démocratie ou porterait-il atteinte à la liberté des citoyens ?

**Arguments pour**
- Lutter contre l'abstention, forte notamment chez les jeunes et les milieux populaires : les élus seraient plus représentatifs.
- Le vote est déjà un devoir civique ; l'obligation existe dans d'autres démocraties (Belgique, Australie).
- Inciter les citoyens à s'informer.

**Arguments contre**
- Le vote est un **droit** ; ne pas voter est aussi une manière de s'exprimer.
- Une obligation ne règle pas les causes de l'abstention (défiance, sentiment d'inutilité) ; risque d'augmenter les votes blancs ou au hasard.
- Difficulté de sanctionner (amendes) sans créer de nouvelles injustices.

**Position nuancée**
- Plutôt que l'obligation, on peut reconnaître le vote blanc dans les suffrages exprimés, faciliter le vote (procuration, inscription automatique), développer la démocratie participative et l'éducation civique.

**Règles du débat** : écouter, reformuler, s'appuyer sur des exemples, respecter les opinions contraires.` },
      ],
    },
    {
      id: "republique-indivisible-decentralisee",
      titre: "Une République indivisible dont l'organisation est décentralisée",
      theme: "Cohésion et diversité – La République et la Nation",
      cours: `
## Introduction
Le nouveau programme d'EMC de 1re (en vigueur depuis la rentrée 2025) s'intitule « **Cohésion et diversité dans une société démocratique** ». Sa deuxième partie, « **La République et la Nation** », part de l'article 1er de la Constitution : « La France est une République **indivisible**, laïque, démocratique et sociale. [...] Son organisation est **décentralisée**. » Comment une République **une** peut-elle laisser une large place aux **territoires** et à leur diversité ?

## 1. Le principe d'indivisibilité
- **Indivisibilité** : la souveraineté appartient au **peuple français** tout entier ; aucune partie du peuple ni aucun territoire ne peut se l'attribuer. La **loi** est la même pour tous sur tout le territoire, et les citoyens sont **égaux** devant elle « sans distinction d'origine, de race ou de religion ».
- Héritage révolutionnaire : la République « une et indivisible » (1792), la création des **départements** (1790) pour remplacer les provinces aux privilèges différents.
- Conséquences juridiques :
  - **une seule langue officielle** : « La langue de la République est le français » (article 2, depuis 1992) ;
  - **pas de reconnaissance de « peuples » ou de communautés** au sein du peuple français : en 1991, le Conseil constitutionnel censure l'expression « **peuple corse** » ; en 1999, il juge contraire à la Constitution la Charte européenne des langues régionales, que la France a signée mais pas ratifiée.
- Mais l'indivisibilité n'est pas l'uniformité : depuis 2008, « les **langues régionales** appartiennent au patrimoine de la France » (article 75-1). La **loi Molac** (21 mai 2021) protège et promeut les langues régionales (breton, basque, occitan, alsacien, corse, créoles…) ; le Conseil constitutionnel a toutefois censuré l'enseignement « immersif » dans ces langues à l'école publique.

## 2. La décentralisation : transférer des compétences aux collectivités
- **Décentralisation** : transfert de compétences et de moyens de l'**État** vers des **collectivités territoriales** élues, qui s'administrent librement (article 72 de la Constitution). À distinguer de la **déconcentration** : l'État délègue des pouvoirs à ses propres agents sur le territoire (le **préfet**, représentant de l'État dans le département et la région).
- **Acte I** : les **lois Defferre** (à partir du 2 mars **1982**) suppriment la tutelle a priori du préfet (remplacée par un **contrôle de légalité** a posteriori) et font de la région une collectivité élue (premières élections régionales en 1986).
- **Acte II** : la **révision constitutionnelle du 28 mars 2003** inscrit dans l'article 1er que l'organisation de la République est **décentralisée** ; elle crée le référendum local décisionnel.
- **Acte III** : lois **MAPTAM** (2014, métropoles) et **NOTRe** (2015) ; 13 régions métropolitaines depuis le 1er janvier 2016.

| Collectivité | Élus | Principales compétences |
|---|---|---|
| Commune (environ 35 000) | conseil municipal, maire | état civil, écoles maternelles et élémentaires, urbanisme (plan local d'urbanisme), action sociale de proximité |
| Département (101) | conseil départemental | action sociale (RSA, personnes âgées, handicap, aide sociale à l'enfance), collèges, routes départementales |
| Région (18, dont 13 en métropole) | conseil régional | lycées, transports régionaux (TER), développement économique, formation professionnelle |
Les **intercommunalités** (communautés de communes, d'agglomération, métropoles) regroupent des communes pour gérer ensemble transports, déchets, eau ou développement économique.

## 3. Des statuts adaptés à la diversité des territoires
- **Outre-mer** :
  - **départements et régions d'outre-mer** (article 73 : Guadeloupe, Martinique, Guyane, La Réunion, Mayotte depuis 2011) : les lois s'y appliquent de plein droit, avec des adaptations possibles ;
  - **collectivités d'outre-mer** (article 74 : Polynésie française, Wallis-et-Futuna, Saint-Pierre-et-Miquelon, Saint-Barthélemy, Saint-Martin) : statut d'autonomie plus ou moins large ;
  - la **Nouvelle-Calédonie** (titre XIII de la Constitution) dispose d'un statut unique issu des accords de **Matignon (1988)** et de **Nouméa (1998)** ; trois référendums sur l'indépendance (2018, 2020, 2021) ont donné une majorité au « non », mais le troisième a été boycotté par les indépendantistes et l'avenir institutionnel reste en discussion.
- **Corse** : collectivité à statut particulier, la **Collectivité de Corse** (depuis 2018).
- Ces statuts montrent que l'unité de la République se concilie avec la **reconnaissance de la diversité** des territoires.

## 4. Des débats
- La décentralisation rapproche les décisions des citoyens, mais rend l'organisation complexe (le « millefeuille territorial ») et peut accroître les **inégalités entre territoires** riches et pauvres : l'État pratique donc une **péréquation** (redistribution de ressources entre collectivités).
- Jusqu'où aller dans l'autonomie (Corse, Nouvelle-Calédonie) ou la promotion des langues régionales sans remettre en cause l'**égalité** des citoyens et l'**unité** de la Nation ?

> **À retenir** : la République est **indivisible** (un seul peuple, une même loi, une langue officielle) mais son organisation est **décentralisée** depuis 1982, inscrit dans la Constitution en 2003 : communes, départements et régions s'administrent librement, sous le contrôle de légalité du préfet. Des statuts particuliers (outre-mer, Corse, Nouvelle-Calédonie) et la reconnaissance des langues régionales (2008, loi Molac 2021) concilient unité et diversité.
`,
      exercices: [
        { type: "saisie", question: "Complète l'article 1er de la Constitution : « La France est une République ..., laïque, démocratique et sociale. »", reponses: ["indivisible"], explication: "« La France est une République **indivisible**, laïque, démocratique et sociale. » Depuis 2003, l'article précise : « Son organisation est décentralisée. »" },
        { type: "qcm", question: "Quelles lois lancent la décentralisation en France à partir de 1982 ?", choix: ["Les lois Ferry", "Les lois Defferre", "Les lois Auroux", "La loi NOTRe"], reponse: 1, explication: "Les **lois Defferre** (1982-1983) suppriment la tutelle préfectorale a priori et font de la région une collectivité territoriale. La loi NOTRe date de 2015." },
        { type: "vf", question: "La déconcentration et la décentralisation désignent la même chose.", reponse: false, explication: "Faux : la **décentralisation** transfère des compétences à des collectivités **élues** ; la **déconcentration** délègue des pouvoirs aux **agents de l'État** sur le territoire (préfets)." },
        { type: "qcm", question: "Quelle collectivité territoriale est chargée des lycées ?", choix: ["La commune", "Le département", "La région", "L'intercommunalité"], reponse: 2, explication: "La **région** construit et entretient les lycées ; le **département** s'occupe des collèges, la **commune** des écoles maternelles et élémentaires." },
        { type: "vf", question: "Depuis 2008, la Constitution affirme que les langues régionales appartiennent au patrimoine de la France.", reponse: true, explication: "Vrai : article **75-1**. Le français reste la seule langue officielle (article 2)." },
        { type: "qcm", question: "Pourquoi le Conseil constitutionnel a-t-il censuré en 1991 l'expression « peuple corse » ?", choix: ["Parce que la Corse n'est pas française", "Parce que la Constitution ne connaît que le peuple français, composé de tous les citoyens sans distinction", "Parce que la Corse est un département d'outre-mer", "Parce que le mot « peuple » est interdit"], reponse: 1, explication: "Le principe d'**indivisibilité** interdit de reconnaître des composantes du peuple français ; la Corse a cependant obtenu un **statut particulier**." },
        { type: "saisie", question: "Comment appelle-t-on le représentant de l'État dans le département, qui exerce le contrôle de légalité sur les actes des collectivités ?", reponses: ["préfet", "le préfet", "prefet"], explication: "Le **préfet** (créé en 1800) représente l'État ; depuis 1982, il contrôle a posteriori la légalité des actes des collectivités et peut saisir le juge administratif." },
        { type: "qcm", question: "Lequel de ces territoires est un département et région d'outre-mer (article 73) ?", choix: ["La Polynésie française", "La Nouvelle-Calédonie", "La Réunion", "Wallis-et-Futuna"], reponse: 2, explication: "**La Réunion** est un DROM, comme la Guadeloupe, la Martinique, la Guyane et Mayotte. La Polynésie et Wallis-et-Futuna sont des collectivités d'outre-mer ; la Nouvelle-Calédonie a un statut à part." },
        { type: "redaction", question: "Question argumentée : *La décentralisation remet-elle en cause l'unité de la République ?*", corrige: `**Problématique** : comment la République peut-elle rester **une et indivisible** tout en confiant de larges pouvoirs à ses territoires ?

**I. Une République une et indivisible**
- Article 1er de la Constitution : République indivisible ; égalité de tous devant la loi.
- Un seul peuple (censure du « peuple corse », 1991), une langue officielle (article 2).
- L'État garde la souveraineté : la loi, la justice, la défense, la police restent nationales ; le **préfet** exerce le contrôle de légalité.

**II. Une organisation décentralisée qui rapproche les décisions des citoyens**
- Lois Defferre (1982), révision de 2003 (« organisation décentralisée »), MAPTAM et NOTRe (2014-2015).
- Communes, départements, régions s'administrent librement (article 72) : écoles, collèges, lycées, action sociale, transports.
- Des statuts adaptés : DROM et COM, Nouvelle-Calédonie, Collectivité de Corse ; langues régionales reconnues (article 75-1, loi Molac 2021).

**III. Des tensions réelles mais encadrées**
- Inégalités de ressources entre territoires, corrigées par la péréquation.
- Revendications d'autonomie (Corse, Nouvelle-Calédonie) et débats sur les langues régionales (censure de l'enseignement immersif en 2021).
- Le Conseil constitutionnel veille à ce que la diversité ne remette pas en cause l'égalité des citoyens.

**Conclusion** : la décentralisation ne remet pas en cause l'unité de la République ; elle en est une **modalité**, tant que la souveraineté reste au peuple français tout entier et que l'égalité des droits est garantie partout.` },
      ],
    },
    {
      id: "nation-nationalite-citoyennete",
      titre: "La communauté nationale : nationalité, citoyenneté et mémoires",
      theme: "Cohésion et diversité – La République et la Nation",
      cours: `
## Introduction
Qu'est-ce qui fait qu'on appartient à la **Nation** française ? Le droit répond par la **nationalité** ; la vie politique par la **citoyenneté** ; l'histoire par des **mémoires** partagées et des **commémorations**. La communauté nationale française se veut une communauté **ouverte**, fondée sur l'adhésion à des valeurs plutôt que sur l'origine.

## 1. Deux conceptions de la nation
- **Conception « élective »** (ou contractuelle), dominante en France : la nation repose sur la **volonté de vivre ensemble**. Ernest **Renan**, *Qu'est-ce qu'une nation ?* (1882) : « L'existence d'une nation est [...] un **plébiscite de tous les jours** » ; la nation, c'est « avoir fait de grandes choses ensemble, vouloir en faire encore ».
- **Conception « ethnique »** (ou culturelle), associée au romantisme allemand (Herder, Fichte) : la nation repose sur la langue, la culture, l'origine communes.
- Ces deux conceptions sont des modèles : en pratique, tous les pays les combinent.

## 2. La nationalité française
- **Nationalité** : lien juridique entre une personne et un État ; elle donne des droits (protection, droit de vote pour les majeurs) et des devoirs (respect des lois, défense nationale).
- **Attribution à la naissance** :
  - **droit du sang** : est français l'enfant dont au moins un parent est français, où qu'il naisse ;
  - **double droit du sol** : est français l'enfant né en France d'un parent lui-même né en France.
- **Acquisition** au cours de la vie :
  - **droit du sol « différé »** : un enfant né en France de parents étrangers devient français à **18 ans** s'il réside en France et y a vécu au moins cinq ans depuis l'âge de 11 ans (il peut le demander dès 13 ans avec ses parents, ou seul dès 16 ans) ; des règles plus restrictives s'appliquent à Mayotte ;
  - **par mariage** avec un Français, par déclaration après **4 ans** de mariage ;
  - **par naturalisation** : décision de l'État (décret) après au moins 5 ans de résidence en général, avec des conditions d'**assimilation** (connaissance de la langue française, de l'histoire et de la culture françaises, adhésion aux principes et valeurs de la République). Une **cérémonie d'accueil dans la citoyenneté française** est organisée en préfecture.
- La France accepte la **double nationalité**.

## 3. Nationalité et citoyenneté
- **Citoyenneté** : participation à la vie politique (voter, être élu) et ensemble de droits et de devoirs civiques. En France, être citoyen suppose d'être **français et majeur** (18 ans).
- **Citoyenneté européenne** (traité de **Maastricht**, 1992) : tout national d'un État membre est citoyen de l'Union. Il peut circuler et s'installer librement dans l'UE, **voter et être élu aux élections municipales et européennes** dans l'État où il réside, bénéficier de la protection consulaire de tout État membre, adresser une pétition au Parlement européen ou soutenir une **initiative citoyenne européenne** (un million de signatures dans au moins 7 pays). Elle **complète** la citoyenneté nationale sans la remplacer.

## 4. Une Nation, une histoire, des mémoires
- **Histoire** et **mémoire** sont différentes : l'histoire est un savoir critique construit par les historiens ; la mémoire est le souvenir, souvent affectif et sélectif, qu'un groupe garde du passé. Il existe **des** mémoires, parfois concurrentes (mémoires de la guerre d'Algérie, de l'esclavage…).
- **Reconnaissances officielles** : discours du président **Jacques Chirac** reconnaissant la responsabilité de l'État dans la déportation des Juifs (rafle du Vél d'Hiv, **16 juillet 1995**) ; **loi Taubira** (21 mai **2001**) qualifiant la traite et l'esclavage de **crime contre l'humanité** ; loi reconnaissant le génocide arménien (2001).
- **Commémorations** : fête nationale (**14 juillet**), victoire de 1945 (**8 mai**), armistice de 1918 (**11 novembre**, devenu en 2012 l'hommage à tous les morts pour la France), journée des mémoires de la traite, de l'esclavage et de leurs abolitions (**10 mai**, depuis 2006), journée de la mémoire des génocides (**27 janvier**, dans les établissements scolaires).
- **Le Panthéon** (« Aux grands hommes la patrie reconnaissante ») honore des figures qui incarnent les valeurs de la Nation : Victor Hugo, Jean Jaurès, Jean Moulin, Marie Curie, **Simone Veil** (2018), **Joséphine Baker** (2021), **Missak et Mélinée Manouchian** (2024), **Robert Badinter** (2025). Les débats sur les entrées au Panthéon (place des femmes, des étrangers morts pour la France) disent quelle Nation on veut célébrer.

>! **Méthode – analyser une commémoration** : qui l'organise (État, commune, association) ? quel événement ou quelle personne est honoré(e) ? quels symboles (drapeau, Marseillaise, discours) ? quel message est adressé aux citoyens d'aujourd'hui ? quelles mémoires sont mises en avant, lesquelles sont absentes ?

> **À retenir** : la Nation française se conçoit comme une communauté **ouverte**, fondée sur la volonté de vivre ensemble (Renan). La nationalité s'attribue par le droit du sang et le double droit du sol, s'acquiert par le droit du sol différé, le mariage ou la naturalisation. La citoyenneté européenne (1992) complète la citoyenneté nationale. Commémorations, lois mémorielles et Panthéon entretiennent une mémoire nationale, plurielle et parfois débattue.
`,
      exercices: [
        { type: "qcm", question: "Selon Ernest Renan (1882), qu'est-ce qui fonde avant tout une nation ?", choix: ["La race", "La langue uniquement", "La volonté de vivre ensemble, « un plébiscite de tous les jours »", "La religion commune"], reponse: 2, explication: "Renan défend une conception **élective** : la nation repose sur un passé partagé et le **consentement** présent de ses membres." },
        { type: "vf", question: "Un enfant né à l'étranger d'un père ou d'une mère française est français dès sa naissance.", reponse: true, explication: "Vrai : c'est le **droit du sang** (article 18 du Code civil)." },
        { type: "qcm", question: "Un enfant né en France de parents étrangers nés à l'étranger devient français…", choix: ["automatiquement à sa naissance", "jamais, sauf naturalisation", "à 18 ans, s'il réside en France et y a vécu au moins 5 ans depuis l'âge de 11 ans", "seulement s'il se marie avec un Français"], reponse: 2, explication: "C'est le **droit du sol différé** ; il peut l'anticiper dès 13 ans (avec ses parents) ou 16 ans (seul). Le **double droit du sol** ne s'applique que si l'un des parents est lui-même né en France." },
        { type: "saisie", question: "Comment appelle-t-on la décision de l'État (par décret) qui accorde la nationalité française à un étranger qui en fait la demande ?", reponses: ["naturalisation", "la naturalisation"], explication: "La **naturalisation** suppose en général 5 ans de résidence et des conditions d'assimilation (langue, connaissance de la société française, adhésion aux valeurs de la République)." },
        { type: "qcm", question: "Quel droit la citoyenneté européenne donne-t-elle à un Espagnol qui habite à Lyon ?", choix: ["Voter à l'élection présidentielle française", "Voter et être candidat aux élections municipales et européennes", "Devenir automatiquement français", "Voter aux élections législatives"], reponse: 1, explication: "Depuis le traité de **Maastricht** (1992), un citoyen européen vote aux **municipales** et aux **européennes** dans son pays de résidence ; les élections nationales restent réservées aux nationaux." },
        { type: "vf", question: "L'histoire et la mémoire sont deux mots qui désignent exactement la même chose.", reponse: false, explication: "Faux : l'**histoire** est un savoir critique et vérifiable ; la **mémoire** est un souvenir vivant, affectif et sélectif, propre à un groupe." },
        { type: "qcm", question: "Quelle loi de 2001 reconnaît la traite et l'esclavage comme crime contre l'humanité ?", choix: ["La loi Gayssot", "La loi Taubira", "La loi Pleven", "La loi Veil"], reponse: 1, explication: "La **loi Taubira** du 21 mai 2001 ; depuis 2006, le **10 mai** est la journée des mémoires de la traite, de l'esclavage et de leurs abolitions." },
        { type: "saisie", question: "En quelle année Jacques Chirac reconnaît-il la responsabilité de l'État français dans la déportation des Juifs, lors de la commémoration de la rafle du Vél d'Hiv ?", reponses: ["1995"], explication: "Le **16 juillet 1995** : « la France, ce jour-là, accomplissait l'irréparable »." },
        { type: "redaction", question: "**Analyse de document** : « Une nation est une âme, un principe spirituel. [...] L'une est la possession en commun d'un riche legs de souvenirs ; l'autre est le consentement actuel, le désir de vivre ensemble, la volonté de continuer à faire valoir l'héritage qu'on a reçu indivis. [...] L'existence d'une nation est (pardonnez-moi cette métaphore) un plébiscite de tous les jours. » (Ernest Renan, *Qu'est-ce qu'une nation ?*, conférence à la Sorbonne, 11 mars 1882). *Consigne* : présente le document, explique la conception de la nation qu'il défend et montre en quoi elle éclaire le droit français de la nationalité.", corrige: `**Présentation** : extrait d'une **conférence** prononcée à la Sorbonne le **11 mars 1882** par **Ernest Renan**, historien et philosophe. Le contexte est celui de l'après-1871 : l'Alsace-Moselle a été annexée par l'Allemagne, qui justifie cette annexion par la langue et la culture germaniques de ses habitants. Renan répond à cette conception.

**I. Une nation fondée sur un héritage et une volonté**
- Deux éléments : le passé (« un riche **legs de souvenirs** ») et le présent (« le **consentement actuel**, le désir de vivre ensemble »).
- La nation n'est pas définie par la race, la langue ou la religion, mais par un « principe **spirituel** ».
- La métaphore du « **plébiscite de tous les jours** » : la nation existe parce que ses membres choisissent sans cesse d'y appartenir. C'est la conception **élective**, opposée à la conception **ethnique** (Fichte) ; elle permet de dire que les Alsaciens, qui veulent rester français, sont français.

**II. Une conception qui éclaire le droit français**
- La nationalité française n'est pas réservée aux descendants de Français (**droit du sang**) : le **droit du sol** (double ou différé) intègre les enfants nés et élevés en France.
- La **naturalisation** suppose l'adhésion aux principes et valeurs de la République et la connaissance de la langue et de l'histoire : on demande une **volonté** d'appartenir à la communauté nationale, et une cérémonie marque cet accueil.
- Les **commémorations** et le **Panthéon** entretiennent le « legs de souvenirs » commun.

**III. Limites et débats**
- Renan reste un homme de son temps (il défend aussi la colonisation, en contradiction avec l'idée de consentement).
- Le droit de la nationalité fait l'objet de débats (restrictions à Mayotte, conditions de naturalisation).

**Conclusion** : ce texte fonde une conception **ouverte** de la nation, au cœur de l'identité républicaine : on appartient à la Nation française par l'adhésion à ses valeurs et à son histoire, et non par l'origine.` },
      ],
    },
    {
      id: "defense-securite-nationale",
      titre: "Défendre la Nation : défense, sécurité nationale et résilience",
      theme: "Cohésion et diversité – La République et la Nation",
      cours: `
## Introduction
Une démocratie doit pouvoir **se défendre** pour protéger ses citoyens, son territoire et ses valeurs. Aujourd'hui, les menaces ne sont plus seulement militaires : terrorisme, cyberattaques, manipulations de l'information, crises sanitaires ou climatiques. On parle donc de **sécurité nationale**, qui associe l'État, les armées et chaque citoyen.

## 1. Définitions
- **Défense** : ensemble des moyens destinés à protéger le territoire, la population et les intérêts d'un pays contre une agression armée.
- **Sécurité nationale** (notion introduite par le **Livre blanc sur la défense et la sécurité nationale de 2008**, puis inscrite dans le Code de la défense) : identifier l'ensemble des menaces et des risques qui peuvent affecter la vie de la Nation et y répondre ; elle inclut la défense, la sécurité intérieure, la sécurité civile, la sécurité économique et numérique.
- **Souveraineté nationale** : capacité d'un peuple à décider librement de son destin, sans subir la volonté d'une puissance étrangère.
- **Ingérence** : intervention d'un État étranger dans les affaires intérieures d'un autre pour l'influencer ou le déstabiliser.
- **Résilience** : capacité d'une société à résister à un choc (attentat, catastrophe, cyberattaque, pandémie) et à retrouver un fonctionnement normal.

## 2. L'organisation de la défense en France
- **Le président de la République** est « le **chef des armées** » (article 15) et le garant de « l'indépendance nationale, de l'intégrité du territoire » (article 5) ; il décide de l'emploi de la **dissuasion nucléaire**.
- **Le Premier ministre** est « responsable de la défense nationale » (article 21) ; le gouvernement « dispose de la force armée » (article 20).
- **Le Parlement** autorise la déclaration de guerre (article 35) ; il est informé des interventions extérieures dans les 3 jours et doit autoriser leur prolongation au-delà de 4 mois ; il vote les **lois de programmation militaire** (LPM 2024-2030 : 413 milliards d'euros).
- **Une armée professionnelle** depuis la suspension du service militaire obligatoire (loi de 1997, derniers appelés en 2001). Les citoyens restent concernés : **recensement** à 16 ans, **Journée défense et citoyenneté** (JDC), **réserve** opérationnelle et citoyenne (Garde nationale, 2016), sapeurs-pompiers volontaires, service national universel (SNU, expérimenté de 2019 à 2025, puis abandonné) ; depuis la fin d'août 2026, un nouveau **service national** militaire et volontaire de dix mois accueille des jeunes de 18 à 25 ans.
- **Alliances** : la France est membre de l'**OTAN** (1949 ; retour dans le commandement intégré en 2009) et de l'**Union européenne**, dont l'article 42-7 du traité prévoit une clause d'**assistance mutuelle**, invoquée pour la première fois par la France après les attentats du 13 novembre 2015.

## 3. Des menaces multiples et « hybrides »
- **Le retour de la guerre en Europe** : invasion de l'**Ukraine** par la Russie (24 février 2022) ; la Revue nationale stratégique (2022, actualisée en 2025) prévient d'un risque de guerre de haute intensité.
- **Le terrorisme** : attentats de janvier 2015 (*Charlie Hebdo*, Hyper Cacher) et du **13 novembre 2015** (130 morts à Paris et Saint-Denis), Nice (14 juillet 2016). Réponses : plan **Vigipirate**, opération **Sentinelle** (militaires déployés sur le territoire depuis janvier 2015), renseignement.
- **Les cybermenaces** : attaques contre des hôpitaux, des entreprises, des collectivités ; l'**ANSSI** (créée en 2009) protège les systèmes d'information de l'État et des opérateurs vitaux.
- **Les guerres hybrides** : mélange d'actions militaires, cyber, économiques et informationnelles, souvent sans déclaration de guerre. Exemple : les **ingérences informationnelles** (faux sites imitant des médias, campagnes de comptes automatisés sur les réseaux sociaux, deepfakes) visant à diviser l'opinion ou à peser sur les élections. Le service **Viginum** (créé en 2021) détecte ces manipulations venues de l'étranger ; une loi de juillet 2024 renforce la prévention des ingérences étrangères.

## 4. La résilience : l'affaire de tous
- La sécurité nationale ne repose pas seulement sur les armées : services publics, entreprises, collectivités et citoyens doivent pouvoir faire face à une crise.
- Chacun peut y contribuer : se former aux **gestes qui sauvent**, connaître les consignes en cas d'alerte, s'engager (réserve, pompiers volontaires, associations de secours), vérifier une information avant de la partager pour ne pas relayer une manipulation.
- **Patriotisme constitutionnel** : notion popularisée par le philosophe allemand Jürgen **Habermas** ; l'attachement des citoyens ne porte pas sur une origine ou une culture, mais sur les **principes** de la Constitution démocratique (droits de l'homme, État de droit). Défendre la Nation, c'est d'abord défendre ces principes.

>! **Exemple – une ingérence informationnelle** : en juin 2023, Viginum a révélé la campagne russe « RRN » (ou « Doppelgänger ») : de faux sites reproduisaient l'apparence de grands médias français (*Le Monde*, *Le Figaro*, *20 Minutes*…) pour diffuser de fausses informations sur la guerre en Ukraine. Réflexes du citoyen : vérifier l'adresse du site, la source, croiser avec des médias fiables, signaler.

> **À retenir** : la défense de la Nation relève du président (chef des armées, dissuasion), du gouvernement et du Parlement (article 35, lois de programmation militaire). Les menaces sont désormais **hybrides** (guerre en Europe, terrorisme, cyberattaques, ingérences informationnelles). La **sécurité nationale** et la **résilience** reposent aussi sur l'engagement des citoyens (JDC, réserve, esprit critique), attachés aux principes de la Constitution (patriotisme constitutionnel).
`,
      exercices: [
        { type: "qcm", question: "Selon l'article 15 de la Constitution, qui est le chef des armées ?", choix: ["Le Premier ministre", "Le ministre des Armées", "Le président de la République", "Le chef d'état-major"], reponse: 2, explication: "Le **président de la République** est le chef des armées ; le **Premier ministre** est responsable de la défense nationale (article 21)." },
        { type: "vf", question: "En France, le service militaire obligatoire existe toujours pour tous les jeunes de 18 ans.", reponse: false, explication: "Faux : il est **suspendu** depuis la loi de 1997 (derniers appelés en 2001). Restent obligatoires le **recensement** à 16 ans et la **Journée défense et citoyenneté**." },
        { type: "saisie", question: "Comment appelle-t-on la capacité d'une société à résister à un choc et à retrouver un fonctionnement normal ?", reponses: ["résilience", "la résilience", "resilience"], explication: "La **résilience** concerne l'État, les services publics, les entreprises et les citoyens." },
        { type: "qcm", question: "Quel service français est chargé de détecter les ingérences numériques étrangères (manipulations de l'information) ?", choix: ["La CNIL", "Viginum", "L'Arcom", "Le CESE"], reponse: 1, explication: "**Viginum** (2021) détecte les campagnes de manipulation venues de l'étranger. La CNIL protège les données personnelles ; l'Arcom régule l'audiovisuel et le numérique." },
        { type: "qcm", question: "Qu'est-ce qu'une guerre « hybride » ?", choix: ["Une guerre entre deux alliances", "Une guerre qui combine moyens militaires, cyberattaques, pressions économiques et manipulation de l'information, souvent sans déclaration de guerre", "Une guerre uniquement navale", "Une guerre civile"], reponse: 1, explication: "La guerre hybride brouille la frontière entre paix et guerre : elle vise à **déstabiliser** une société de l'intérieur." },
        { type: "vf", question: "L'opération Sentinelle déploie des militaires sur le territoire national pour protéger la population contre le terrorisme.", reponse: true, explication: "Vrai : elle a été lancée en **janvier 2015**, après les attentats contre *Charlie Hebdo* et l'Hyper Cacher." },
        { type: "saisie", question: "Quel article de la Constitution prévoit que la déclaration de guerre est autorisée par le Parlement ? (donne le numéro)", reponses: ["35", "article 35", "l'article 35", "art. 35", "art 35"], explication: "L'**article 35** ; depuis 2008, le Parlement est aussi informé des interventions extérieures et doit autoriser leur prolongation au-delà de quatre mois." },
        { type: "qcm", question: "Que désigne le « patriotisme constitutionnel » (Habermas) ?", choix: ["L'attachement à une origine ethnique commune", "L'attachement des citoyens aux principes démocratiques de leur Constitution", "L'obligation de servir dans l'armée", "La fierté d'avoir une armée puissante"], reponse: 1, explication: "On est attaché à la communauté politique parce qu'elle garantit des **droits** et des **principes** (État de droit, libertés), non pour une identité d'origine." },
        { type: "redaction", question: "Question argumentée : *La défense de la Nation est-elle seulement l'affaire des militaires ?*", corrige: `**Problématique** : face à des menaces de plus en plus diverses, la défense peut-elle reposer sur les seules armées, ou exige-t-elle l'engagement de toute la société ?

**I. La défense militaire reste essentielle**
- Institutions : le président, chef des armées (article 15) et garant de l'indépendance nationale (article 5), décide de la dissuasion nucléaire ; le Parlement autorise la guerre (article 35) et vote la LPM 2024-2030.
- Une armée professionnelle, intégrée à des alliances (OTAN, clause d'assistance mutuelle de l'UE).
- Le retour de la guerre en Europe (Ukraine, 2022) rappelle l'importance des moyens militaires.

**II. Mais les menaces dépassent le champ militaire**
- Terrorisme (13 novembre 2015) : police, renseignement, opération Sentinelle.
- Cyberattaques contre des hôpitaux ou des collectivités : rôle de l'ANSSI.
- Ingérences informationnelles et guerres hybrides : Viginum, loi de 2024 ; elles visent l'opinion publique elle-même.

**III. La sécurité nationale, l'affaire de tous les citoyens**
- Parcours de citoyenneté : recensement, JDC, réserve, nouveau service national volontaire (2026), pompiers volontaires, engagement associatif de secours.
- **Résilience** : gestes qui sauvent, connaissance des consignes, esprit critique face à la désinformation.
- **Patriotisme constitutionnel** : défendre la Nation, c'est défendre les principes démocratiques.

**Conclusion** : la défense reste d'abord la mission des armées, mais la **sécurité nationale** est devenue l'affaire de tous : une démocratie résiste d'autant mieux que ses citoyens sont informés, engagés et attachés à ses valeurs.` },
      ],
    },
  ],
};
