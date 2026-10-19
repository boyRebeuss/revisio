export default {
  chapitres: [
    {
      id: "identites-echanges",
      titre: "Axe 1 : Identités et échanges",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
L'axe **Identités et échanges** interroge la manière dont les individus et les nations construisent leur identité au contact des autres : migrations, mondialisation, mobilité étudiante, langues. Problématiques possibles :
- *To what extent does migration shape national identity?*
- *Is globalisation a threat to cultural identity?*
- *Is English becoming a global language at the expense of others?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| to emigrate / to immigrate | émigrer / immigrer |
| a migrant, a refugee, an asylum seeker | un migrant, un réfugié, un demandeur d'asile |
| to settle (in) | s'installer |
| a melting pot | un creuset (cultures qui fusionnent) |
| a salad bowl / a mosaic | un saladier (cultures qui coexistent) |
| to assimilate / to integrate | s'assimiler / s'intégrer |
| a sense of belonging | un sentiment d'appartenance |
| roots, heritage | racines, héritage |
| a border, to cross a border | une frontière, franchir une frontière |
| globalisation (UK) / globalization (US) | la mondialisation |
| a lingua franca | une langue véhiculaire |
| to study abroad | étudier à l'étranger |

## Repères culturels
- **Ellis Island** (New York) : principal centre d'accueil des immigrants aux États-Unis de **1892 à 1954** ; environ 12 millions de personnes y sont passées.
- **The Melting Pot** : pièce d'Israel Zangwill (1908) qui popularise l'image de l'Amérique comme creuset.
- **The Windrush generation** : en **1948**, le navire *HMT Empire Windrush* amène au Royaume-Uni des centaines de travailleurs caribéens, invités à reconstruire le pays. Le **scandale Windrush** (2018) a révélé que des membres de cette génération, souvent arrivés enfants et installés légalement depuis des décennies, avaient été privés de leurs droits, détenus ou menacés d'expulsion, faute de papiers prouvant leur statut.
- **Brexit** : référendum du **23 juin 2016** (51,9 % pour le départ) ; le Royaume-Uni quitte l'Union européenne le **31 janvier 2020**. Après la fin de la période de transition (fin 2020), le Royaume-Uni ne participe plus au programme d'échanges **Erasmus+** et lance son propre dispositif, le **Turing Scheme** (2021).
- **Le Commonwealth** : association de 56 États, pour la plupart d'anciennes colonies britanniques.
- **L'anglais, lingua franca** : environ 1,5 milliard de locuteurs, dont une majorité de non-natifs (*Globish*).

>! Pour un essai : définis les termes (*identity, exchange*), oppose les points de vue (enrichissement culturel / peur de la perte d'identité), appuie-toi sur un exemple précis (Windrush, Brexit).

> **À retenir** : *melting pot* (fusion) ≠ *salad bowl* (coexistence). Dates : Ellis Island 1892-1954 ; Windrush 1948 ; Brexit : vote 2016, sortie 2020.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « un demandeur d'asile »", reponses: ["an asylum seeker", "asylum seeker"], explication: "**Asylum seeker** : personne qui demande le statut de réfugié (*refugee*)." },
        { type: "saisie", question: "Traduis : « un sentiment d'appartenance »", reponses: ["a sense of belonging", "sense of belonging", "a feeling of belonging", "feeling of belonging"], explication: "**A sense of belonging** : expression centrale pour parler d'identité." },
        { type: "qcm", question: "Quelle image décrit une société où les cultures coexistent sans se fondre ?", choix: ["the melting pot", "the salad bowl", "the American Dream", "the frontier"], reponse: 1, explication: "Dans le **salad bowl**, chaque ingrédient garde son goût : les cultures coexistent. Le *melting pot* évoque au contraire une fusion." },
        { type: "qcm", question: "Que désigne la *Windrush generation* ?", choix: ["Les colons anglais partis en Amérique en 1620", "Les immigrants caribéens arrivés au Royaume-Uni à partir de 1948", "Les Irlandais fuyant la famine en 1845", "Les étudiants Erasmus britanniques"], reponse: 1, explication: "Le navire *Empire Windrush* arrive en **1948** avec des travailleurs des Caraïbes ; le nom désigne cette génération d'immigrants (1948-1971)." },
        { type: "vf", question: "Le Royaume-Uni a quitté l'Union européenne le jour même du référendum, en 2016.", reponse: false, explication: "Le référendum a eu lieu le **23 juin 2016**, mais la sortie effective date du **31 janvier 2020**." },
        { type: "saisie", question: "Traduis : « s'installer dans un nouveau pays »", reponses: ["to settle in a new country", "settle in a new country", "to settle down in a new country"], explication: "**To settle (in)** = s'installer. *Settlers* = colons, pionniers." },
        { type: "qcm", question: "*Ellis Island* était :", choix: ["la prison fédérale de San Francisco", "le principal centre d'accueil des immigrants à New York", "la première colonie anglaise d'Amérique", "un port de départ vers l'Australie"], reponse: 1, explication: "De **1892 à 1954**, Ellis Island a accueilli environ 12 millions d'immigrants. Alcatraz était la prison de San Francisco." },
        { type: "redaction", question: "Essay (180 mots environ) : *Does globalisation threaten national identities?*", corrige: `Modèle de réponse :

*In today's interconnected world, people, goods and ideas cross borders more easily than ever. Some fear that globalisation will erase national identities, but is this really the case?*

*On the one hand, globalisation does tend to standardise cultures. The same fast-food chains, brands and streaming platforms can be found everywhere, and English has become a lingua franca, sometimes at the expense of local languages. Many minority languages are endangered as young people switch to English online.*

*On the other hand, exchanges can also enrich identities. The Windrush generation, for example, brought Caribbean music, food and festivals such as the Notting Hill Carnival, which are now part of British culture. Moreover, globalisation has sometimes provoked a strong reaction: the Brexit vote in 2016 showed that many people wanted to reassert a national identity.*

*In conclusion, globalisation does not simply destroy identities; it transforms them. Identity is not fixed but constantly redefined through contact with others.*

Méthode :
- introduction avec accroche et reformulation de la question ;
- deux parties opposées introduites par *On the one hand / On the other hand* ;
- exemples précis (lingua franca, Windrush, Brexit) ;
- conclusion nuancée qui répond à la question.` },
      ],
    },
    {
      id: "espace-prive-public",
      titre: "Axe 2 : Espace privé et espace public",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
L'axe **Espace privé et espace public** étudie la frontière entre ce qui relève de l'intime (la maison, la famille, le corps, les données personnelles) et ce qui relève de la société (la rue, la politique, les réseaux sociaux). Problématiques :
- *Is privacy dead in the age of social media?*
- *How did women conquer the public sphere?*
- *Should we accept surveillance in exchange for security?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| privacy | la vie privée, l'intimité |
| the public sphere | la sphère publique |
| surveillance, CCTV cameras | la surveillance, les caméras de vidéosurveillance |
| personal data | les données personnelles |
| to invade someone's privacy | porter atteinte à la vie privée de quelqu'un |
| to share, to post | partager, publier |
| a whistleblower | un lanceur d'alerte |
| gender roles | les rôles attribués à chaque sexe |
| a housewife | une femme au foyer |
| the right to vote | le droit de vote |
| to campaign, to protest | militer, manifester |
| a gated community | une résidence fermée et sécurisée |

## Repères culturels
- *An Englishman's home is his castle* : proverbe qui exprime l'attachement britannique à l'inviolabilité du domicile.
- **George Orwell, *1984*** (publié en 1949) : *Big Brother is watching you* ; le télécran surveille chaque citoyen. Le Royaume-Uni est aujourd'hui l'un des pays les plus équipés en caméras de surveillance.
- **Edward Snowden** (2013) : ancien employé de la NSA, il révèle la surveillance de masse des communications par les services américains.
- **Les suffragettes** : Emmeline Pankhurst fonde la WSPU en 1903 (*Deeds, not words*). Les Britanniques obtiennent le droit de vote en partie en 1918 (femmes de plus de 30 ans), à égalité avec les hommes en 1928 ; aux États-Unis, le **19e amendement** (1920) accorde le droit de vote aux femmes.
- **La femme au foyer des années 1950** et *The Feminine Mystique* de Betty Friedan (1963), qui dénonce l'enfermement des femmes dans l'espace domestique.
- **Le RGPD** (*GDPR*, 2018) protège les données personnelles en Europe.

> **À retenir** : *privacy* = vie privée ; *1984* (Orwell, 1949) = la surveillance totale ; les suffragettes ont fait entrer les femmes dans la sphère publique (droit de vote UK 1918/1928, USA 1920). Snowden (2013) = lanceur d'alerte.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la vie privée »", reponses: ["privacy", "private life"], explication: "**Privacy** est le terme le plus courant ; *private life* existe aussi." },
        { type: "saisie", question: "Traduis : « un lanceur d'alerte »", reponses: ["a whistleblower", "whistleblower", "a whistle-blower", "whistle-blower"], explication: "**Whistleblower** : celui qui « donne un coup de sifflet » pour dénoncer un abus (ex. : Edward Snowden)." },
        { type: "qcm", question: "Quel roman a popularisé la formule *Big Brother is watching you* ?", choix: ["*Brave New World*, Aldous Huxley", "*1984*, George Orwell", "*Fahrenheit 451*, Ray Bradbury", "*The Handmaid's Tale*, Margaret Atwood"], reponse: 1, explication: "Dans **1984** (George Orwell, 1949), le dirigeant invisible du Parti, Big Brother, surveille la population en permanence." },
        { type: "vf", question: "Toutes les Britanniques ont obtenu le droit de vote à égalité avec les hommes dès 1918.", reponse: false, explication: "En 1918, seules les femmes de plus de 30 ans (sous conditions) peuvent voter. L'égalité avec les hommes (dès 21 ans) n'arrive qu'en **1928**." },
        { type: "qcm", question: "Quelle était la devise de la WSPU d'Emmeline Pankhurst ?", choix: ["*Yes, we can*", "*Deeds, not words*", "*I have a dream*", "*Keep calm and carry on*"], reponse: 1, explication: "**Deeds, not words** (« des actes, pas des paroles ») résume la stratégie militante des suffragettes." },
        { type: "saisie", question: "Traduis : « Les réseaux sociaux portent atteinte à notre vie privée. »", reponses: ["Social media invade our privacy", "Social media invades our privacy", "Social networks invade our privacy", "Social media are invading our privacy", "Social media is invading our privacy"], explication: "**To invade someone's privacy**. *Social media* peut être suivi d'un verbe au singulier ou au pluriel." },
        { type: "qcm", question: "*An Englishman's home is his castle* signifie que :", choix: ["les Anglais vivent dans des châteaux", "le domicile est un espace privé inviolable", "les maisons anglaises sont fortifiées", "il faut ouvrir sa maison aux visiteurs"], reponse: 1, explication: "Ce proverbe affirme que chez soi, on est maître et protégé de toute intrusion, y compris de l'État." },
        { type: "redaction", question: "Article de blog (180 mots environ) : *Is privacy dead in the age of social media?* Donne ton opinion de manière argumentée.", corrige: `Modèle de réponse :

*Is Privacy Dead? Think Before You Post!*

*Every day, millions of teenagers share photos, locations and opinions online. We seem to have accepted that our private lives have become public. But is privacy really dead?*

*First of all, it is clear that our personal data are constantly collected. Social networks track what we like, where we go and who we talk to, and they sell this information to advertisers. As Edward Snowden revealed in 2013, governments can also monitor our communications. Orwell's Big Brother no longer seems like pure fiction.*

*However, privacy is not dead yet. Laws such as the GDPR in Europe force companies to protect our data, and more and more users choose private accounts or encrypted messaging apps. Besides, it is up to us to decide what we post.*

*To sum up, privacy is under threat but it can still be defended. The key is education: if we learn to think before we post, we can stay in control of our digital lives.*

Méthode :
- un titre accrocheur (exigence de l'article) et une adresse au lecteur ;
- connecteurs : *First of all, However, Besides, To sum up* ;
- références culturelles : Snowden, Orwell, RGPD ;
- prise de position claire dans la conclusion.` },
      ],
    },
    {
      id: "art-pouvoir",
      titre: "Axe 3 : Art et pouvoir",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
L'art peut **servir** le pouvoir (propagande, portraits officiels, soft power) ou le **contester** (art engagé, satire, protest songs, street art). Problématiques :
- *Can art change society?*
- *Is art always political?*
- *How have those in power used art to impose their vision?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| propaganda | la propagande |
| a poster | une affiche |
| to glorify, to praise | glorifier, faire l'éloge de |
| to denounce, to criticise | dénoncer, critiquer |
| committed art / protest art | l'art engagé / contestataire |
| a protest song | une chanson engagée |
| censorship, to censor | la censure, censurer |
| satire, satirical | la satire, satirique |
| street art, graffiti, a mural | le street art, les graffitis, une fresque murale |
| soft power | l'influence culturelle d'un pays |
| a portrait, a statue | un portrait, une statue |

## Repères culturels
- **Uncle Sam, *I Want You for U.S. Army*** : affiche de recrutement de James Montgomery Flagg (1917), exemple célèbre de propagande. Au Royaume-Uni, l'affiche de Lord Kitchener (*Your Country Needs You*, 1914) l'avait précédée.
- **Billie Holiday, *Strange Fruit*** (1939) : chanson qui dénonce les lynchages des Noirs dans le Sud des États-Unis.
- **Bob Dylan, *Blowin' in the Wind*** (1962) : hymne du mouvement pour les droits civiques et contre la guerre. Dylan reçoit le prix Nobel de littérature en 2016.
- **Charlie Chaplin, *The Great Dictator*** (1940) : satire d'Hitler.
- **Banksy** : artiste de rue britannique anonyme (Bristol) ; ses œuvres critiquent la guerre, la surveillance, la société de consommation. En 2018, *Girl with Balloon* s'autodétruit en partie juste après sa vente aux enchères.
- **Shepard Fairey, *Hope*** (2008) : portrait de Barack Obama devenu l'emblème de sa campagne.
- **Le soft power américain** : Hollywood, la musique et les séries diffusent les valeurs américaines dans le monde.
- **Shakespeare** : ses pièces historiques (*Richard III*) ont été écrites sous la dynastie Tudor et en servent la légitimité.

> **À retenir** : l'art peut glorifier (Uncle Sam, portraits royaux, soft power) ou dénoncer (Strange Fruit, Dylan, Banksy, Chaplin). Mots-clés : *propaganda, censorship, committed art, protest song, soft power*.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la censure »", reponses: ["censorship"], explication: "**Censorship** ; le verbe est *to censor*. Ne pas confondre avec *to censure* (blâmer officiellement)." },
        { type: "saisie", question: "Traduis : « une chanson engagée »", reponses: ["a protest song", "protest song", "a committed song", "a political song"], explication: "**A protest song** : genre emblématique des années 1960 (Bob Dylan, Joan Baez)." },
        { type: "qcm", question: "Que dénonce la chanson *Strange Fruit* chantée par Billie Holiday (1939) ?", choix: ["la guerre du Vietnam", "les lynchages des Afro-Américains dans le Sud", "la pauvreté pendant la Grande Dépression", "la ségrégation dans les écoles"], reponse: 1, explication: "Les *strange fruit* sont les corps des Noirs lynchés pendus aux arbres : la chanson est une dénonciation bouleversante du racisme." },
        { type: "qcm", question: "L'affiche *I Want You for U.S. Army* (1917) est un exemple de :", choix: ["satire", "street art", "propagande", "censure"], reponse: 2, explication: "Cette affiche de recrutement pendant la Première Guerre mondiale est un exemple classique de **propagande**." },
        { type: "vf", question: "Banksy est un artiste britannique dont l'identité est officiellement connue.", reponse: false, explication: "Banksy reste **anonyme** ; cet anonymat fait partie de son œuvre et lui permet de contester le pouvoir sans être identifié." },
        { type: "saisie", question: "Comment appelle-t-on en anglais l'influence culturelle qu'un pays exerce (cinéma, musique...) ?", reponses: ["soft power"], explication: "Le **soft power** (Joseph Nye) s'oppose au *hard power* (militaire, économique). Hollywood en est l'exemple type." },
        { type: "qcm", question: "Quel film de Chaplin (1940) ridiculise Hitler ?", choix: ["*Modern Times*", "*The Kid*", "*The Great Dictator*", "*City Lights*"], reponse: 2, explication: "Dans **The Great Dictator**, Chaplin incarne Adenoid Hynkel, caricature d'Hitler, et termine par un discours humaniste." },
        { type: "redaction", question: "Essay (200 mots environ) : *Can art be a weapon against power?*", corrige: `Modèle de réponse :

*Throughout history, artists have been both servants and critics of those in power. Can art really be used as a weapon against power?*

*Admittedly, power has often used art for its own purposes. During the First World War, posters such as Uncle Sam's "I Want You" encouraged young men to join the army. Today, Hollywood films spread American values all over the world: this is what we call soft power.*

*Nevertheless, art has also been a powerful tool to challenge authority. In 1939, Billie Holiday's "Strange Fruit" exposed the horror of lynching at a time when many preferred to remain silent. In the 1960s, Bob Dylan's protest songs gave a voice to the civil rights and anti-war movements. More recently, Banksy's stencils have criticised war and mass surveillance in the streets.*

*However, the impact of art is limited: a song cannot change a law on its own, and art can be censored or turned into a commercial product.*

*To conclude, art is not a weapon in the military sense, but it can raise awareness and inspire people to act. That is why authoritarian regimes have always feared artists.*

Méthode :
- problématique annoncée dans l'introduction ;
- concession (*Admittedly*), opposition (*Nevertheless*), nuance (*However*) ;
- trois exemples datés et précis ;
- conclusion qui répond clairement à la question.` },
      ],
    },
    {
      id: "citoyennete-mondes-virtuels",
      titre: "Axe 4 : Citoyenneté et mondes virtuels",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
Le numérique transforme la façon d'être citoyen : s'informer, débattre, militer, voter. Il ouvre de nouvelles libertés mais crée aussi des dangers (désinformation, harcèlement, manipulation). Problématiques :
- *Are social networks a threat or an opportunity for democracy?*
- *What does it mean to be a responsible digital citizen?*
- *Can online activism change the real world?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| a digital citizen | un citoyen numérique |
| fake news, misinformation, disinformation | fausses informations, désinformation |
| to fact-check | vérifier les faits |
| cyberbullying, a troll | le cyberharcèlement, un troll |
| a filter bubble, an echo chamber | une bulle de filtres, une chambre d'écho |
| an algorithm | un algorithme |
| to go viral | devenir viral |
| an online petition | une pétition en ligne |
| hashtag activism, slacktivism | l'activisme par hashtag, l'activisme « paresseux » |
| screen addiction | l'addiction aux écrans |
| to be hacked, a hacker | être piraté, un pirate informatique |
| anonymity | l'anonymat |

## Repères culturels
- **Le scandale Cambridge Analytica** (révélé en 2018) : les données de dizaines de millions d'utilisateurs de Facebook ont été exploitées à des fins de ciblage politique, notamment lors de la campagne présidentielle américaine de 2016.
- **#MeToo** (devenu viral en 2017) et **Black Lives Matter** (créé en 2013, mobilisation mondiale en 2020 après la mort de George Floyd) : des mouvements nés ou amplifiés sur les réseaux sociaux.
- **L'assaut du Capitole** (6 janvier 2021) : exemple de mobilisation alimentée par la désinformation en ligne.
- **Black Mirror** (série britannique créée par Charlie Brooker, 2011) : épisodes dystopiques sur les dérives de la technologie (ex. : *Nosedive*, où chacun est noté par les autres).
- **Les mondes virtuels** : jeux en ligne, métavers, avatars ; *Ready Player One* (Ernest Cline, 2011, adapté par Spielberg en 2018).
- **La neutralité du Net** et le débat sur la régulation des plateformes.

> **À retenir** : le numérique est ambivalent : il permet la mobilisation (#MeToo, BLM, pétitions) mais favorise la désinformation et la manipulation (Cambridge Analytica, *filter bubbles*). Le bon citoyen numérique vérifie ses sources (*fact-checking*).
`,
      exercices: [
        { type: "saisie", question: "Traduis : « le cyberharcèlement »", reponses: ["cyberbullying", "cyber-bullying", "online bullying", "online harassment", "cyber harassment"], explication: "**Cyberbullying** ; harceler = *to bully*." },
        { type: "saisie", question: "Traduis : « vérifier les faits »", reponses: ["to fact-check", "fact-check", "to fact check", "fact check", "to check the facts", "check the facts"], explication: "**To fact-check** : les *fact-checkers* vérifient les informations qui circulent." },
        { type: "qcm", question: "Une *echo chamber* désigne :", choix: ["un studio d'enregistrement", "un espace en ligne où l'on n'entend que des opinions semblables aux siennes", "un réseau social chinois", "un logiciel de piratage"], reponse: 1, explication: "Dans une **chambre d'écho**, les algorithmes nous montrent surtout des contenus qui confirment nos opinions, ce qui renforce la polarisation." },
        { type: "qcm", question: "Le scandale Cambridge Analytica concernait :", choix: ["le piratage de la NSA", "l'utilisation des données de millions d'utilisateurs de Facebook à des fins politiques", "la censure de Twitter en Chine", "la création de Bitcoin"], reponse: 1, explication: "Révélé en **2018**, il a montré que des données personnelles pouvaient servir à cibler les électeurs." },
        { type: "vf", question: "Le terme *slacktivism* désigne un engagement en ligne jugé peu efficace (liker, partager sans agir).", reponse: true, explication: "*Slacktivism* = *slacker* (fainéant) + *activism* : on critique ainsi un militantisme qui se limite à un clic." },
        { type: "saisie", question: "Traduis : « Cette vidéo est devenue virale. »", reponses: ["This video went viral", "This video has gone viral", "The video went viral", "The video has gone viral"], explication: "**To go viral** (prétérit *went*, participe *gone*)." },
        { type: "qcm", question: "Quel mouvement est né en 2013 et a pris une ampleur mondiale en 2020 ?", choix: ["#MeToo", "Occupy Wall Street", "Black Lives Matter", "Fridays for Future"], reponse: 2, explication: "**Black Lives Matter** est né en 2013 ; la mort de George Floyd en mai 2020 a provoqué des manifestations dans le monde entier." },
        { type: "redaction", question: "Essay (200 mots environ) : *Social networks: a threat or an opportunity for democracy?*", corrige: `Modèle de réponse :

*Today, more than half of the world's population uses social networks. These platforms have changed the way we get informed and take part in public life. But do they strengthen or weaken democracy?*

*On the one hand, social networks give everyone a voice. Movements such as #MeToo or Black Lives Matter spread across the world thanks to hashtags, and online petitions allow citizens to put pressure on governments. In some countries, social media are the only way to escape state censorship.*

*On the other hand, they can be a serious threat. Fake news spreads faster than accurate information, and algorithms lock users in echo chambers where they only see opinions similar to their own. The Cambridge Analytica scandal revealed in 2018 showed that personal data could be used to manipulate voters.*

*In my opinion, social networks are neither good nor bad in themselves: everything depends on how we use them and how they are regulated. Schools should teach young people to fact-check information so that they become responsible digital citizens.*

Méthode :
- introduction avec une donnée chiffrée et la problématique ;
- plan dialectique (opportunité / menace) ;
- exemples précis : #MeToo, BLM, Cambridge Analytica ;
- conclusion personnelle avec une proposition concrète.` },
      ],
    },
    {
      id: "fictions-realites",
      titre: "Axe 5 : Fictions et réalités",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
La fiction invente des mondes, mais elle parle toujours du réel : elle peut l'imiter, le critiquer, l'anticiper ou le déformer. Inversement, la réalité peut être mise en scène (téléréalité, *fake news*). Problématiques :
- *Can fiction help us understand reality better?*
- *Why are dystopias so popular?*
- *Where is the line between fiction and reality in the media?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| a novel, a novelist | un roman, un romancier |
| a short story | une nouvelle |
| the plot, the setting | l'intrigue, le cadre |
| a character, the main character | un personnage, le personnage principal |
| a utopia / a dystopia | une utopie / une contre-utopie |
| science fiction (sci-fi) | la science-fiction |
| a hoax | un canular |
| a biopic, a docudrama | un film biographique, un docu-fiction |
| reality TV | la téléréalité |
| to blur the line between | brouiller la frontière entre |
| far-fetched, believable | invraisemblable, crédible |
| to be based on a true story | être tiré d'une histoire vraie |

## Repères culturels
- **Thomas More, *Utopia*** (1516) : invente le mot « utopie » (du grec *ou-topos*, « nulle part »).
- **Les grandes dystopies** : *Brave New World* (Aldous Huxley, 1932), *Nineteen Eighty-Four* (George Orwell, 1949), *Fahrenheit 451* (Ray Bradbury, 1953 : les livres sont brûlés), *The Handmaid's Tale* (Margaret Atwood, 1985 : une théocratie asservit les femmes), *The Hunger Games* (Suzanne Collins, 2008).
- **Orson Welles, *The War of the Worlds*** (1938) : adaptation radiophonique du roman de H. G. Wells présentée comme un vrai bulletin d'information ; elle aurait semé la panique chez certains auditeurs (l'ampleur de cette panique est aujourd'hui discutée).
- **The Truman Show** (Peter Weir, 1998) : un homme découvre que sa vie entière est une émission de téléréalité.
- **Le réalisme social** : Charles Dickens (*Oliver Twist*, 1838) dénonce la pauvreté dans l'Angleterre victorienne ; John Steinbeck (*The Grapes of Wrath*, 1939) raconte la Grande Dépression.
- **Les *fake news*** : en 2017, *Collins Dictionary* élit *fake news* mot de l'année.

> **À retenir** : une dystopie exagère les tendances du présent pour nous alerter. Repères : More (1516), Huxley (1932), Orwell (1949), Bradbury (1953), Atwood (1985) ; *The War of the Worlds* (1938) et *The Truman Show* (1998) brouillent la frontière entre fiction et réalité.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « une nouvelle » (récit court)", reponses: ["a short story", "short story"], explication: "Une nouvelle = **a short story**. Attention : *a novel* = un roman, *news* = des nouvelles (informations)." },
        { type: "saisie", question: "Traduis : « un canular »", reponses: ["a hoax", "hoax"], explication: "**A hoax** : une fausse information diffusée volontairement pour tromper." },
        { type: "qcm", question: "Dans quel roman les pompiers brûlent-ils les livres ?", choix: ["*Brave New World*", "*Fahrenheit 451*", "*The Handmaid's Tale*", "*Utopia*"], reponse: 1, explication: "Dans **Fahrenheit 451** (Ray Bradbury, 1953), lire est interdit ; 451 °F serait la température à laquelle le papier s'enflamme." },
        { type: "qcm", question: "Qui a écrit *The Handmaid's Tale* (1985) ?", choix: ["Margaret Atwood", "Mary Shelley", "Virginia Woolf", "Suzanne Collins"], reponse: 0, explication: "La romancière canadienne **Margaret Atwood** y imagine la république de Gilead, où les femmes fertiles sont asservies." },
        { type: "vf", question: "*The War of the Worlds* d'Orson Welles (1938) était une émission de radio présentée comme un véritable bulletin d'information.", reponse: true, explication: "Welles a adapté le roman de H. G. Wells sous forme de faux flashs d'information sur une invasion martienne : un exemple célèbre de fiction confondue avec la réalité." },
        { type: "saisie", question: "Traduis : « Ce film est tiré d'une histoire vraie. »", reponses: ["This film is based on a true story", "This movie is based on a true story", "The film is based on a true story", "The movie is based on a true story"], explication: "**To be based on a true story** ; *film* (UK) ou *movie* (US)." },
        { type: "qcm", question: "Quelle est la fonction principale d'une dystopie ?", choix: ["Décrire une société idéale à imiter", "Divertir sans lien avec le réel", "Alerter sur les dangers de tendances présentes en les exagérant", "Raconter des faits historiques réels"], reponse: 2, explication: "La dystopie projette dans un futur cauchemardesque des tendances déjà visibles (surveillance, autoritarisme, technologie) pour **avertir** le lecteur." },
        { type: "redaction", question: "Essay (200 mots environ) : *Can fiction help us understand reality?*", corrige: `Modèle de réponse :

*Fiction is by definition invented: novels, films and series tell stories that never happened. Yet many people believe that fiction can reveal truths about the real world. How can imaginary stories help us understand reality?*

*First, fiction can expose social problems. In Oliver Twist, Charles Dickens showed his readers the terrible conditions of poor children in Victorian London, and John Steinbeck's The Grapes of Wrath made the suffering of farmers during the Great Depression visible to millions of Americans.*

*Second, dystopias act as warnings. By imagining a society of total surveillance, Orwell's Nineteen Eighty-Four made us aware of the dangers of totalitarianism. Today, the expression "Big Brother" is used to criticise real practices.*

*However, fiction can also blur the line between truth and lies. When Orson Welles broadcast The War of the Worlds in 1938, some listeners thought the Martian invasion was real. Fiction therefore requires a critical mind.*

*To conclude, fiction does not replace reality, but it offers a mirror in which we can see our world more clearly, provided we remain aware that it is a construction.*

Méthode :
- arguments numérotés (*First, Second*) puis nuance (*However*) ;
- références littéraires précises et datées ;
- conclusion qui reprend l'image du miroir et nuance la réponse.` },
      ],
    },
    {
      id: "innovations-responsabilite",
      titre: "Axe 6 : Innovations scientifiques et responsabilité",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
Le progrès scientifique améliore nos vies (médecine, communication, énergie), mais il pose des **questions éthiques** : jusqu'où peut-on aller ? Qui est responsable des conséquences ? Problématiques :
- *Should there be limits to scientific progress?*
- *Is artificial intelligence a blessing or a curse?*
- *Who is responsible for climate change, and who should solve it?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| a breakthrough | une avancée majeure |
| a scientist, a researcher | un scientifique, un chercheur |
| artificial intelligence (AI) | l'intelligence artificielle (IA) |
| genetic engineering, GMOs | le génie génétique, les OGM |
| cloning, a clone | le clonage, un clone |
| ethics, ethical | l'éthique, éthique |
| to play God | se prendre pour Dieu |
| a threat, a hazard | une menace, un danger |
| climate change, global warming | le changement climatique, le réchauffement |
| greenhouse gases, carbon footprint | les gaz à effet de serre, l'empreinte carbone |
| renewable energy | les énergies renouvelables |
| to be held accountable | être tenu pour responsable |

## Repères culturels
- **Mary Shelley, *Frankenstein; or, The Modern Prometheus*** (1818) : le savant Victor Frankenstein crée une créature qu'il abandonne ; mythe fondateur du scientifique dépassé par sa création. Attention : Frankenstein est le **créateur**, pas le monstre.
- **Le projet Manhattan** : programme américain qui a produit la bombe atomique ; Hiroshima et Nagasaki (août 1945). Robert Oppenheimer, son directeur scientifique, citera plus tard la Bhagavad-Gita : *Now I am become Death, the destroyer of worlds.*
- **Apollo 11** (20 juillet 1969) : Neil Armstrong marche sur la Lune : *That's one small step for man, one giant leap for mankind.*
- **Dolly la brebis** (1996, Écosse) : premier mammifère cloné à partir d'une cellule adulte.
- **Silicon Valley** (Californie) : berceau des géants du numérique ; débats sur l'IA générative depuis 2022.
- **Rachel Carson, *Silent Spring*** (1962) : dénonce les pesticides et lance le mouvement écologiste américain.
- **Les accords de Paris** (2015) : objectif de limiter le réchauffement « bien en dessous de 2 °C ».

> **À retenir** : chaque innovation pose la question de la responsabilité. Repères : *Frankenstein* (1818), bombe atomique (1945), Apollo 11 (1969), Dolly (1996), accords de Paris (2015). Mots-clés : *breakthrough, ethics, to play God, accountable*.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « une avancée majeure »", reponses: ["a breakthrough", "breakthrough", "a major breakthrough", "a major advance"], explication: "**A breakthrough** : une découverte qui fait faire un bond à la science." },
        { type: "saisie", question: "Traduis : « l'empreinte carbone »", reponses: ["the carbon footprint", "carbon footprint"], explication: "**Carbon footprint** : quantité de gaz à effet de serre émise par une activité." },
        { type: "qcm", question: "Dans le roman de Mary Shelley (1818), qui est Frankenstein ?", choix: ["le monstre", "le savant qui crée la créature", "le fiancé de la narratrice", "un détective"], reponse: 1, explication: "**Victor Frankenstein** est le savant ; sa créature n'a pas de nom. L'usage populaire qui appelle le monstre « Frankenstein » est une confusion." },
        { type: "vf", question: "Dolly, premier mammifère cloné à partir d'une cellule adulte, est née en 1996 en Écosse.", reponse: true, explication: "Dolly la brebis est née en **1996** à l'Institut Roslin, près d'Édimbourg : une avancée qui a relancé le débat éthique sur le clonage humain." },
        { type: "qcm", question: "Quel ouvrage de 1962 a lancé le mouvement écologiste américain en dénonçant les pesticides ?", choix: ["*Silent Spring*, Rachel Carson", "*Walden*, Henry David Thoreau", "*An Inconvenient Truth*, Al Gore", "*The Jungle*, Upton Sinclair"], reponse: 0, explication: "**Silent Spring** de Rachel Carson montre les effets du DDT sur la nature ; il conduira à son interdiction aux États-Unis en 1972." },
        { type: "saisie", question: "Traduis : « Les scientifiques devraient être tenus pour responsables. »", reponses: ["Scientists should be held accountable", "Scientists should be held responsible", "Scientists ought to be held accountable", "Scientists ought to be held responsible"], explication: "**To be held accountable / responsible** : forme passive avec le modal *should*." },
        { type: "qcm", question: "Qui a dit *That's one small step for man, one giant leap for mankind* ?", choix: ["John F. Kennedy", "Buzz Aldrin", "Neil Armstrong", "Robert Oppenheimer"], reponse: 2, explication: "**Neil Armstrong**, premier homme à marcher sur la Lune, le 20 juillet 1969 (mission Apollo 11)." },
        { type: "redaction", question: "Essay (200 mots environ) : *Should there be limits to scientific progress?*", corrige: `Modèle de réponse :

*From vaccines to smartphones, scientific progress has transformed our lives. However, some innovations raise serious ethical questions. Should scientists be free to explore everything, or should limits be set?*

*Admittedly, freedom of research is essential. Most major breakthroughs, such as antibiotics or the Internet, were not planned in advance. If we had restricted research, we would never have achieved the Moon landing in 1969 or developed vaccines so quickly during the Covid-19 pandemic.*

*Nevertheless, history shows that science without conscience can be dangerous. The Manhattan Project led to the destruction of Hiroshima and Nagasaki in 1945, and Oppenheimer himself later expressed regret. Today, genetic engineering and artificial intelligence could have consequences that nobody can predict. As early as 1818, Mary Shelley's Frankenstein warned us against scientists who play God without taking responsibility for their creations.*

*In my view, research itself should not be banned, but its applications must be regulated by ethics committees and international laws. Scientists, governments and citizens must all be held accountable.*

Méthode :
- concession (*Admittedly*) puis opposition (*Nevertheless*) ;
- grammaire valorisée : conditionnel passé (*If we had restricted..., we would never have...*), passif (*must be regulated*) ;
- références : Manhattan Project, Frankenstein, Apollo 11 ;
- opinion personnelle nuancée en conclusion.` },
      ],
    },
    {
      id: "diversite-inclusion",
      titre: "Axe 7 : Diversité et inclusion",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
Les sociétés anglophones sont marquées par une grande diversité (origines, religions, genres, handicaps) et par une longue histoire de discriminations et de luttes pour l'égalité. Problématiques :
- *How far have English-speaking societies become more inclusive?*
- *Is positive discrimination a fair way to fight inequality?*
- *Can sport and culture promote inclusion?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| diversity, inclusion | la diversité, l'inclusion |
| discrimination, to discriminate against | la discrimination, discriminer |
| racism, prejudice | le racisme, les préjugés |
| segregation | la ségrégation |
| the civil rights movement | le mouvement des droits civiques |
| equal rights, equal opportunities | l'égalité des droits, des chances |
| affirmative action (US) / positive discrimination (UK) | la discrimination positive |
| a minority, an ethnic minority | une minorité, une minorité ethnique |
| disability, disabled people | le handicap, les personnes handicapées |
| the gender pay gap | l'écart de salaire entre femmes et hommes |
| to fit in, to be left out | s'intégrer, être mis à l'écart |
| to raise awareness | sensibiliser |

## Repères culturels
- **Rosa Parks** refuse de céder sa place à un Blanc dans un bus de Montgomery (Alabama) le **1er décembre 1955** : début du boycott des bus.
- **Martin Luther King**, discours *I Have a Dream* lors de la marche sur Washington, le **28 août 1963**.
- **Le Civil Rights Act (1964)** interdit la ségrégation et les discriminations ; le **Voting Rights Act (1965)** garantit le droit de vote des Afro-Américains.
- **Nelson Mandela** : emprisonné 27 ans, il devient le premier président noir d'Afrique du Sud en **1994**, après la fin de l'apartheid.
- **L'Equality Act (2010)** au Royaume-Uni protège contre les discriminations (âge, handicap, sexe, origine, religion, orientation sexuelle...).
- **Les Jeux paralympiques** sont nés des Stoke Mandeville Games (Angleterre, 1948) organisés pour des vétérans blessés.
- **Les peuples autochtones** : Amérindiens (*Native Americans*), Aborigènes d'Australie (*Aboriginal Australians*), Maoris de Nouvelle-Zélande.
- **Le mariage pour tous** : légalisé en Angleterre et au pays de Galles (2013), aux États-Unis par la Cour suprême (*Obergefell v. Hodges*, 2015).

> **À retenir** : du combat pour les droits civiques (Parks 1955, King 1963, Civil Rights Act 1964) à l'Equality Act (2010), l'inclusion progresse mais reste incomplète. *Affirmative action* (US) = *positive discrimination* (UK).
`,
      exercices: [
        { type: "saisie", question: "Traduis : « les préjugés »", reponses: ["prejudice", "prejudices"], explication: "**Prejudice** (souvent indénombrable) ; *to be prejudiced against* = avoir des préjugés contre." },
        { type: "saisie", question: "Traduis : « sensibiliser l'opinion »", reponses: ["to raise awareness", "raise awareness", "to raise public awareness", "raise public awareness"], explication: "**To raise awareness (of something)** : expression très utile dans les essais." },
        { type: "qcm", question: "En quelle année Martin Luther King a-t-il prononcé son discours *I Have a Dream* ?", choix: ["1955", "1963", "1968", "1964"], reponse: 1, explication: "Le **28 août 1963**, lors de la marche sur Washington. 1955 : boycott de Montgomery ; 1964 : Civil Rights Act ; 1968 : assassinat de King." },
        { type: "vf", question: "*Affirmative action* (US) et *positive discrimination* (UK) désignent toutes deux des mesures qui favorisent des groupes défavorisés.", reponse: true, explication: "Les deux expressions désignent la **discrimination positive** (quotas, admissions préférentielles), un sujet très débattu." },
        { type: "qcm", question: "Où le mouvement paralympique est-il né ?", choix: ["à Atlanta", "à Stoke Mandeville, en Angleterre", "à Sydney", "à Londres, pour les JO de 2012"], reponse: 1, explication: "En **1948**, le docteur Ludwig Guttmann organise à **Stoke Mandeville** des jeux pour vétérans blessés : l'origine des Jeux paralympiques." },
        { type: "saisie", question: "Traduis : « l'écart de salaire entre les femmes et les hommes »", reponses: ["the gender pay gap", "gender pay gap", "the pay gap", "the gender gap", "the wage gap", "the gender wage gap"], explication: "**The gender pay gap** : au Royaume-Uni, les grandes entreprises doivent le publier chaque année depuis 2017." },
        { type: "qcm", question: "Nelson Mandela est devenu président de l'Afrique du Sud en :", choix: ["1964", "1990", "1994", "2010"], reponse: 2, explication: "Libéré en **1990**, il est élu président en **1994**, lors des premières élections multiraciales." },
        { type: "redaction", question: "Article (180 mots environ) pour le journal de ton lycée : *How can our school become more inclusive?* Appuie-toi sur au moins un exemple du monde anglophone.", corrige: `Modèle de réponse :

*Everyone Belongs: Building a More Inclusive School*

*Our school welcomes students from many different backgrounds, but do all of them really feel they fit in? Too often, students with disabilities, from ethnic minorities or who are simply "different" are left out.*

*First, our buildings should be fully accessible. Some classrooms can still only be reached by stairs, which is unacceptable. In the UK, the Equality Act of 2010 requires public places to make "reasonable adjustments" for disabled people; we should follow this example.*

*Second, we must raise awareness. Why not organise a Diversity Week, with talks, films and debates? Watching a film about Rosa Parks or Martin Luther King would remind us that equal rights were won by ordinary people who refused injustice.*

*Finally, sport can bring people together. The Paralympic Games show that disability is not an obstacle to excellence, so mixed sports events could be organised.*

*Inclusion is not only the job of teachers: it is everyone's responsibility. Let's make sure that every student feels at home here!*

Méthode :
- titre et adresse aux lecteurs (registre de l'article) ;
- propositions concrètes organisées par *First, Second, Finally* ;
- exemples culturels précis (Equality Act, Rosa Parks, Paralympiques) ;
- conclusion mobilisatrice (*Let's...*).` },
      ],
    },
    {
      id: "territoire-memoire",
      titre: "Axe 8 : Territoire et mémoire",
      theme: "Axes culturels",
      cours: `
## De quoi parle cet axe ?
Un territoire est façonné par son histoire, et les sociétés choisissent ce dont elles se souviennent (ou ce qu'elles oublient) : monuments, commémorations, récits nationaux. Problématiques :
- *Why is it important to remember the past?*
- *Should statues of controversial figures be taken down?*
- *How do territories shape national identity?*

## Vocabulaire clé
| Anglais | Français |
|---|---|
| a memorial, a monument | un mémorial, un monument |
| to commemorate, to pay tribute to | commémorer, rendre hommage à |
| heritage | le patrimoine |
| collective memory | la mémoire collective |
| a landmark | un lieu emblématique, un repère |
| the frontier, the Wild West | la frontière (conquête de l'Ouest) |
| a reservation | une réserve (amérindienne) |
| colonisation (UK) / colonization (US) | la colonisation |
| slavery, the slave trade | l'esclavage, la traite des esclaves |
| to apologise for | présenter des excuses pour |
| to erase, to whitewash history | effacer, enjoliver l'histoire |
| to tear down a statue | déboulonner une statue |

## Repères culturels
- **Remembrance Day** (11 novembre) : au Royaume-Uni et dans le Commonwealth, on porte un **coquelicot** (*poppy*), en référence au poème *In Flanders Fields* (John McCrae, 1915), et on observe deux minutes de silence.
- **Le 9/11 Memorial** (New York) : deux bassins à l'emplacement des tours jumelles détruites le 11 septembre 2001.
- **La conquête de l'Ouest** et la **Destinée manifeste** (*Manifest Destiny*, 1845) ; les Amérindiens sont déplacés de force (*Trail of Tears*, 1838) et confinés dans des réserves.
- **La Grande Famine irlandaise** (1845-1849) : environ un million de morts et une émigration massive vers l'Amérique.
- **Les Troubles** en Irlande du Nord (fin des années 1960-1998), conclus par l'**accord du Vendredi saint** (*Good Friday Agreement*, 1998).
- **Les Générations volées** (*Stolen Generations*) : enfants aborigènes retirés à leurs familles en Australie ; excuses officielles du Premier ministre Kevin Rudd en **2008**.
- **Bristol, 2020** : pendant les manifestations Black Lives Matter, la statue du marchand d'esclaves **Edward Colston** est jetée dans le port.
- **Les parcs nationaux** : Yellowstone (1872), premier parc national du monde, symbole du lien entre territoire et identité américaine.

> **À retenir** : la mémoire est un choix collectif : on commémore (*poppies, 9/11 Memorial*), on répare (excuses de 2008 en Australie, Good Friday Agreement 1998), on conteste (statue de Colston, 2020). Mots-clés : *heritage, memorial, to commemorate, collective memory*.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « le patrimoine »", reponses: ["heritage", "the heritage", "national heritage"], explication: "**Heritage** : ce qu'une génération transmet (bâtiments, traditions, paysages)." },
        { type: "saisie", question: "Traduis : « rendre hommage aux victimes »", reponses: ["to pay tribute to the victims", "pay tribute to the victims", "to pay homage to the victims", "pay homage to the victims"], explication: "**To pay tribute to** : expression idiomatique à retenir." },
        { type: "qcm", question: "Quelle fleur porte-t-on au Royaume-Uni pour Remembrance Day ?", choix: ["la rose", "le coquelicot (poppy)", "le trèfle (shamrock)", "le chardon (thistle)"], reponse: 1, explication: "Le **poppy** rappelle les coquelicots qui poussaient sur les champs de bataille des Flandres, évoqués dans le poème *In Flanders Fields* (1915)." },
        { type: "qcm", question: "Quel accord a mis fin aux Troubles en Irlande du Nord ?", choix: ["le traité de Versailles", "l'accord du Vendredi saint (1998)", "l'Acte d'Union (1801)", "l'accord de Paris (2015)"], reponse: 1, explication: "Le **Good Friday Agreement**, signé le 10 avril 1998, a instauré un partage du pouvoir entre unionistes et nationalistes." },
        { type: "vf", question: "En 2008, le Premier ministre australien a présenté des excuses officielles aux *Stolen Generations*.", reponse: true, explication: "Le 13 février 2008, **Kevin Rudd** a présenté au nom de la nation des excuses aux Aborigènes enlevés à leurs familles." },
        { type: "saisie", question: "Traduis : « déboulonner une statue »", reponses: ["to tear down a statue", "tear down a statue", "to pull down a statue", "pull down a statue", "to topple a statue", "topple a statue", "to take down a statue", "take down a statue"], explication: "**To tear down / pull down / topple a statue** : ex. la statue d'Edward Colston à Bristol en 2020." },
        { type: "qcm", question: "Quel est le premier parc national du monde, créé en 1872 ?", choix: ["Yosemite", "le Grand Canyon", "Yellowstone", "Banff"], reponse: 2, explication: "**Yellowstone** (Wyoming, Montana, Idaho) a été créé en 1872 ; il incarne l'idée d'un territoire sauvage au cœur de l'identité américaine." },
        { type: "redaction", question: "Essay (200 mots environ) : *Should statues of controversial historical figures be removed?*", corrige: `Modèle de réponse :

*In June 2020, during Black Lives Matter protests, the statue of the slave trader Edward Colston was thrown into Bristol harbour. This event sparked a heated debate: should statues of controversial figures be removed from public spaces?*

*Those who want them removed argue that a statue is not a neutral object: it honours someone. Keeping a monument to a man who made his fortune from slavery in the heart of a city is an insult to the descendants of enslaved people. Public spaces should reflect the values of today's society, such as equality and respect.*

*On the other hand, some people fear that tearing down statues amounts to erasing history. They believe we should learn from the past, even its darkest pages, rather than hide it.*

*A compromise is possible. Instead of destroying statues, cities could move them to museums with explanations, as Bristol eventually did with the Colston statue, which is now displayed in the M Shed museum. This way, history is neither glorified nor forgotten.*

*In conclusion, memory is not fixed: each generation has the right to decide whom it wants to honour, as long as the past remains accessible and explained.*

Méthode :
- accroche avec un fait daté (Bristol, 2020) ;
- présentation des deux points de vue ;
- troisième voie (compromis) argumentée et illustrée ;
- conclusion qui élargit sur la notion de mémoire.` },
      ],
    },
    {
      id: "temps-aspects",
      titre: "Temps et aspects : present perfect, past perfect, used to / would",
      theme: "Grammaire",
      cours: `
## Prétérit ou present perfect ?
- **Prétérit** (*did*) : action passée **coupée du présent**, souvent datée : *I visited New York in 2019. Shakespeare wrote Hamlet around 1600.*
- **Present perfect simple** (*have / has + participe passé*) : lien entre le passé et le présent : bilan, expérience, conséquence actuelle : *I have visited New York twice. She has lost her keys* (elle ne les a toujours pas).

Mots indices du present perfect : *ever, never, already, yet, just, so far, recently, since, for*. Mots indices du prétérit : *yesterday, ago, last, in 2010, when*.

On ne peut pas dire *I have seen him yesterday* : le repère passé daté impose le prétérit (*I saw him yesterday*).

## For et since avec le present perfect
Pour une situation qui **dure encore**, le français utilise le présent, l'anglais le present perfect :
- *I have lived here for ten years.* = J'habite ici depuis dix ans (durée).
- *I have lived here since 2015.* = ... depuis 2015 (point de départ).
- *How long have you lived here?* = Depuis combien de temps habites-tu ici ?

## Present perfect continuous (have been + V-ing)
Il insiste sur l'**activité** elle-même, sa durée ou ses traces visibles :
- *I have been waiting for two hours!* (j'attends depuis deux heures)
- *You're out of breath. Have you been running?*

Comparer : *I have read this book* (résultat : je l'ai fini) / *I have been reading this book* (activité, pas forcément terminée).

## Past perfect (had + participe passé)
Il exprime une action **antérieure à une autre action passée** (« plus-que-parfait ») :
- *When I arrived, the film had already started.*
- *She had never seen the sea before she moved to Brighton.*

Past perfect continuous : *They had been walking for hours when they found the village.*

## Used to et would : les habitudes passées
- **used to + base verbale** : habitude ou état passé révolu : *I used to live in Leeds. There used to be a cinema here.* Négation : *didn't use to* ; question : *Did you use to...?*
- **would + base verbale** : action répétée dans le passé (souvenir, récit), **pas avec les verbes d'état** : *Every summer, we would go to the seaside.*
- Ne pas confondre avec **be used to + V-ing** = être habitué à : *I'm used to getting up early.*

> **À retenir** : prétérit = passé daté et révolu ; present perfect = bilan, lien avec le présent, **for / since**. *Had + participe* = antériorité dans le passé. *Used to* = « avant, autrefois » ; *would* = habitude répétée racontée ; *be used to + -ing* = être habitué à.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « J'habite à Londres depuis 2018. »", reponses: ["I have lived in London since 2018", "I've lived in London since 2018", "I have been living in London since 2018", "I've been living in London since 2018"], explication: "Situation qui dure encore → **present perfect** (simple ou continu) + **since** (point de départ)." },
        { type: "qcm", question: "*I ___ him yesterday at the station.*", choix: ["have seen", "saw", "have been seeing", "had seen"], reponse: 1, explication: "*Yesterday* est un repère passé daté et coupé du présent → **prétérit** : *I saw him*." },
        { type: "saisie", question: "Complète avec for ou since : *She has been learning Japanese ___ three years.*", reponses: ["for"], explication: "*Three years* est une durée → **for**. *Since* introduit un point de départ (*since 2021*)." },
        { type: "saisie", question: "Mets le verbe entre parenthèses au past perfect : *When we got to the cinema, the film ___ (already / start).*", reponses: ["had already started", "'d already started", "had started already"], explication: "Action antérieure à une autre action passée (*we got*) → **had + participe passé** ; *already* se place entre *had* et le participe." },
        { type: "qcm", question: "*You look exhausted! What ___?*", choix: ["did you do", "have you been doing", "have you done", "had you done"], reponse: 1, explication: "On constate des **traces visibles** d'une activité récente → present perfect continuous : *What have you been doing?*" },
        { type: "saisie", question: "Traduis avec used to : « Avant, il y avait une usine ici. »", reponses: ["There used to be a factory here"], explication: "État passé révolu → **used to** + base verbale : *There used to be*." },
        { type: "vf", question: "*I'm used to drive on the left* est correct pour dire « J'ai l'habitude de conduire à gauche ».", reponse: false, explication: "*Be used to* (être habitué à) est suivi d'un nom ou d'un **V-ing** : *I'm used to driving on the left.*" },
        { type: "qcm", question: "Quelle phrase est incorrecte ?", choix: ["When I was a child, I would spend hours reading.", "When I was a child, I used to have long hair.", "When I was a child, I would have long hair.", "When I was a child, I used to play outside."], reponse: 2, explication: "**Would** ne s'emploie pas avec les verbes d'état (*have* au sens de posséder, *be, like, know*) : on dit *I used to have long hair*." },
        { type: "redaction", question: "Expression écrite (150 mots environ) : un grand-parent anglophone raconte comment sa ville a changé depuis son enfance. Utilise *used to*, *would*, le present perfect (avec *for* ou *since*) et au moins un past perfect.", corrige: `Modèle de réponse :

*I have lived in Manchester since 1958, so I have seen the city change enormously. When I was a boy, there used to be cotton mills everywhere and the sky was often grey with smoke. Every Saturday, my father would take me to the market, and we would buy fish and chips on the way home. Most of the factories had already closed by the time I turned thirty, and many people lost their jobs.*

*Since then, the city has completely transformed itself. Old warehouses have been turned into flats, and a tram network has been built. For the last twenty years, students from all over the world have come here to study. I didn't use to like modern buildings, but I have got used to them!*

Points grammaticaux :
- **used to / didn't use to** : *there used to be, I didn't use to like* ;
- **would** pour les habitudes racontées : *my father would take me* ;
- **present perfect + since / for** : *I have lived ... since 1958, for the last twenty years ... have come* ;
- **past perfect** : *had already closed by the time I turned thirty* ;
- *get used to* : *I have got used to them*.` },
      ],
    },
    {
      id: "modaux-modalite",
      titre: "Modaux et modalité",
      theme: "Grammaire",
      cours: `
## Rappel de construction
Les modaux (*can, could, may, might, must, shall, should, will, would*) sont invariables et suivis de la **base verbale** : *She might come.* Négation et question sans *do* : *You shouldn't go. May I come in?*

## Les grandes valeurs
| Valeur | Modaux | Exemples |
|---|---|---|
| capacité | can, could, be able to | *She can speak three languages.* |
| permission | can, could, may | *May I leave early?* |
| obligation | must, have to | *You must wear a seatbelt.* |
| interdiction | mustn't, can't | *You mustn't smoke here.* |
| absence d'obligation | don't have to, needn't | *You needn't come.* |
| conseil | should, ought to, had better | *You should see a doctor. You'd better hurry.* |
| probabilité forte | must (affirmatif), can't (négatif) | *He must be tired. That can't be true.* |
| possibilité | may, might, could | *It might rain later.* |

## Le degré de certitude
Du plus certain au moins certain : *It will rain* > *It must be raining* > *It should rain* > *It may rain* > *It might / could rain* > *It can't be raining* (quasi-impossible).

## Les modaux au passé : modal + have + participe passé
- **must have done** : déduction sur le passé : *She must have missed the bus.* (elle a dû rater le bus)
- **can't / couldn't have done** : impossibilité dans le passé : *He can't have said that!*
- **may / might have done** : possibilité dans le passé : *They might have got lost.*
- **should have done** : reproche, regret : *You should have told me.* (tu aurais dû me le dire)
- **could have done** : possibilité non réalisée : *I could have won.* (j'aurais pu gagner)
- **needn't have done** : action faite inutilement : *You needn't have bought flowers.*

## Les équivalents
*Must* et *can* n'ont pas de passé ni de futur : on utilise **had to / will have to**, **was able to / will be able to** : *I will have to work harder. She was able to escape.*

> **À retenir** : un modal exprime soit une **contrainte** (obligation, permission, conseil), soit un **degré de certitude**. Pour le passé : modal + **have + participe passé** (*must have been, should have done*). *Mustn't* = interdit ; *don't have to / needn't* = pas nécessaire.
`,
      exercices: [
        { type: "qcm", question: "*The lights are off. They ___ be at home.*", choix: ["must", "can't", "should", "have to"], reponse: 1, explication: "Déduction négative (quasi-certitude que non) → **can't** : *They can't be at home.*" },
        { type: "saisie", question: "Traduis : « Tu aurais dû me le dire. »", reponses: ["You should have told me", "You ought to have told me", "You should've told me", "You should have told me so", "You should've told me so", "You ought to have told me so", "You should have told me about it"], explication: "Reproche sur le passé → **should have + participe passé** : *You should have told me.*" },
        { type: "saisie", question: "Traduis : « Elle a dû rater le bus. » (déduction)", reponses: ["She must have missed the bus", "She must've missed the bus"], explication: "Déduction quasi certaine sur le passé → **must have + participe passé**." },
        { type: "vf", question: "*You needn't come* signifie « Tu ne dois pas venir » (interdiction).", reponse: false, explication: "*Needn't* = **absence de nécessité** (« tu n'as pas besoin de venir »). L'interdiction se dit *You mustn't come*." },
        { type: "qcm", question: "Quelle phrase exprime le degré de certitude le plus faible ?", choix: ["It will snow tomorrow.", "It should snow tomorrow.", "It might snow tomorrow.", "It must be snowing."], reponse: 2, explication: "**Might** exprime une simple éventualité, plus faible que *should* (probable) et *will / must* (quasi certain)." },
        { type: "saisie", question: "Mets au futur : *I must study harder.* → *I ___ study harder next year.*", reponses: ["will have to", "'ll have to"], explication: "*Must* n'a pas de futur : on utilise **will have to**." },
        { type: "saisie", question: "Traduis : « J'aurais pu gagner. »", reponses: ["I could have won", "I could've won"], explication: "Possibilité non réalisée dans le passé → **could have + participe passé** (*win – won – won*)." },
        { type: "qcm", question: "*You ___ hurry, or you'll miss your train.*", choix: ["had better", "would rather", "might", "needn't"], reponse: 0, explication: "Conseil pressant avec menace implicite → **had better** (*You'd better hurry*), suivi de la base verbale." },
        { type: "redaction", question: "Expression écrite (150 mots environ) : un ami t'écrit qu'il a été harcelé en ligne et qu'il n'en a parlé à personne. Réponds-lui en exprimant des conseils, des hypothèses sur ce qui s'est passé et des regrets, avec au moins six modaux différents (dont deux au passé).", corrige: `Modèle de réponse :

*Dear Sam,*

*I'm so sorry to hear about what happened to you. It must have been really hard to receive those horrible messages every day, and you must have felt very lonely. You should have told someone earlier, but I understand: you might have been afraid that nobody would believe you.*

*Now, you mustn't stay silent. First, you should take screenshots of all the messages: they could be useful as evidence. Then, you ought to report the accounts to the platform, which may decide to block them. You'd better talk to your parents or to the school nurse, too. You don't have to deal with this alone.*

*The bullies can't be allowed to get away with it. If you want, I can come with you to see the head teacher.*

*Take care,*
*Alex*

Points grammaticaux :
- déduction au passé : *must have been, must have felt, might have been* ;
- regret / reproche : *should have told* ;
- conseil : *should, ought to, had better* ; interdiction : *mustn't* ; absence d'obligation : *don't have to* ;
- possibilité : *could, may* ; passif avec modal : *can't be allowed*.` },
      ],
    },
    {
      id: "hypothese-conditionnel",
      titre: "Hypothèse et conditionnel : if-clauses, wish, if only",
      theme: "Grammaire",
      cours: `
## Les quatre types de phrases en if
| Type | Subordonnée (if) | Principale | Sens |
|---|---|---|---|
| 0 | présent | présent | vérité générale |
| 1 | présent | will + base | condition réalisable |
| 2 | prétérit | would + base | hypothèse irréelle dans le présent |
| 3 | past perfect | would have + participe | hypothèse irréelle dans le passé |

>! Type 0 : *If you heat ice, it melts.*
>! Type 1 : *If it rains tomorrow, we will stay at home.*
>! Type 2 : *If I had more money, I would travel around the world.*
>! Type 3 : *If she had studied harder, she would have passed her exam.*

Règles essentielles :
- **jamais de will ni de would dans la subordonnée en if** : *If it rains* (et non *If it will rain*) ;
- au type 2, on emploie souvent **were** à toutes les personnes : *If I were you, I would accept.* (*If I was* est admis à l'oral) ;
- on peut remplacer *would* par *could* ou *might* : *If we left now, we might catch the train.*
- **unless** = *if ... not* : *You won't succeed unless you work.*
- conditionnel mixte : *If I had taken the job, I would be rich now.* (passé → conséquence présente)

## Exprimer un souhait ou un regret : wish et if only
| Structure | Sens | Exemple |
|---|---|---|
| wish / if only + prétérit | regret sur le présent | *I wish I were taller.* (j'aimerais être plus grand) |
| wish / if only + past perfect | regret sur le passé | *I wish I had listened.* (si seulement j'avais écouté) |
| wish + would | souhait qu'une autre personne change, agacement | *I wish you would stop shouting.* |

*If only* est plus fort et plus émotionnel que *I wish* : *If only I hadn't said that!*

## Autres expressions de l'hypothèse
- *Suppose / Supposing (that) you won the lottery, what would you do?*
- *What if robots took our jobs?*
- *As long as / provided (that)* = à condition que : *You can go out as long as you're back by midnight.*
- *It's (high) time + prétérit* : *It's time we acted against climate change.*
- *I'd rather you + prétérit* : *I'd rather you stayed.* (je préférerais que tu restes)

> **À retenir** : pas de *will / would* après *if*. Type 2 : *if* + prétérit → *would* ; type 3 : *if* + *had* + participe → *would have* + participe. *I wish / If only* + prétérit (présent) ou + past perfect (passé).
`,
      exercices: [
        { type: "saisie", question: "Complète (type 1) : *If it ___ (rain) tomorrow, we will cancel the picnic.*", reponses: ["rains"], explication: "Condition réalisable : *if* + **présent**, principale avec *will*. Jamais *will* après *if*." },
        { type: "saisie", question: "Complète (type 2) : *If I ___ (have) more time, I would learn Chinese.*", reponses: ["had"], explication: "Hypothèse irréelle dans le présent : *if* + **prétérit** → *would* + base verbale." },
        { type: "saisie", question: "Complète (type 3) : *If she had left earlier, she ___ (not / miss) the train.*", reponses: ["wouldn't have missed", "would not have missed"], explication: "Hypothèse irréelle dans le passé : *if* + past perfect → **would have + participe passé** (ici à la négative)." },
        { type: "qcm", question: "« À ta place, j'accepterais. »", choix: ["If I am you, I will accept.", "If I were you, I would accept.", "If I would be you, I accepted.", "If I had been you, I accept."], reponse: 1, explication: "Formule figée du conseil : **If I were you, I would...** (type 2, *were* à toutes les personnes)." },
        { type: "saisie", question: "Traduis : « Si seulement j'avais écouté ! »", reponses: ["If only I had listened", "If only I'd listened"], explication: "Regret sur le passé : **if only + past perfect**." },
        { type: "saisie", question: "Traduis : « J'aimerais être plus grand. » (avec wish)", reponses: ["I wish I were taller", "I wish I was taller"], explication: "Regret sur le présent : **wish + prétérit** ; *were* est la forme soutenue, *was* est courant à l'oral." },
        { type: "vf", question: "*Unless you hurry, you will be late* signifie « Si tu ne te dépêches pas, tu seras en retard ».", reponse: true, explication: "**Unless** = *if ... not* : *Unless you hurry* = *If you don't hurry*." },
        { type: "qcm", question: "*If I had accepted that job in London, I ___ in England now.*", choix: ["would live", "would have lived", "will live", "lived"], reponse: 0, explication: "Conditionnel **mixte** : condition passée (*had accepted*) → conséquence présente (*now*) : *would live* (ou *would be living*)." },
        { type: "redaction", question: "Essay (180 mots environ) : *If you could change one thing in the world, what would it be?* Utilise les quatre types de phrases en if et au moins une structure avec *wish* ou *if only*.", corrige: `Modèle de réponse :

*If I could change one thing in the world, I would put an end to climate change. If we keep burning fossil fuels at this rate, temperatures will rise by more than 2°C and millions of people will have to leave their homes.*

*If governments invested massively in renewable energy, we would reduce our emissions quickly. If everyone ate less meat and took the train instead of the plane, the impact would be enormous. Science is clear: if you increase greenhouse gases, the planet warms up.*

*Unfortunately, we have wasted a lot of time. If world leaders had listened to scientists in the 1980s, we would not be facing such a crisis today. I wish they had acted earlier! If only people realised that the future of their own children is at stake.*

*It is high time we stopped talking and started acting. I wish politicians would show more courage.*

Points grammaticaux :
- type 0 : *if you increase..., the planet warms up* ; type 1 : *If we keep..., temperatures will rise* ;
- type 2 : *If I could..., I would ; If governments invested..., we would reduce* ;
- type 3 / mixte : *If world leaders had listened..., we would not be facing* ;
- *I wish they had acted, If only people realised, I wish politicians would, It is high time we stopped*.` },
      ],
    },
    {
      id: "passif-discours-indirect",
      titre: "Voix passive et discours indirect",
      theme: "Grammaire",
      cours: `
## La voix passive : be + participe passé
On utilise le passif pour mettre en avant **ce qui subit l'action**, quand l'agent est inconnu, évident ou moins important. L'agent est introduit par **by**.

| Temps | Actif | Passif |
|---|---|---|
| présent simple | They build houses. | Houses **are built**. |
| be + -ing | They are building a bridge. | A bridge **is being built**. |
| prétérit | Shakespeare wrote Hamlet. | Hamlet **was written** by Shakespeare. |
| present perfect | They have closed the road. | The road **has been closed**. |
| past perfect | They had sold the house. | The house **had been sold**. |
| futur | They will open a museum. | A museum **will be opened**. |
| modal | You must respect the rules. | The rules **must be respected**. |

Particularités :
- passif des verbes à deux compléments : *They gave her a prize.* → *She was given a prize.* (tournure très fréquente) ;
- *It is said that... / He is said to be...* = on dit que... : *He is said to be the richest man in the country.*
- **have / get something done** = faire faire : *I had my hair cut. We're getting the house painted.*

Le passif traduit souvent « on » : *English is spoken here.* = On parle anglais ici.

## Le discours indirect
Pour rapporter des paroles, on utilise *say (that)*, *tell someone (that)*, *ask (if / whether)*, *explain, admit, deny, warn, promise...*

**Concordance des temps** quand le verbe introducteur est au passé :
| Discours direct | Discours indirect |
|---|---|
| présent : *I am tired.* | prétérit : *She said she was tired.* |
| be + -ing : *I'm working.* | was + -ing : *He said he was working.* |
| prétérit / present perfect : *I saw it / I have seen it.* | past perfect : *He said he had seen it.* |
| will : *I will call.* | would : *She said she would call.* |
| can / may : *I can come.* | could / might : *He said he could come.* |

Les repères changent aussi : *now → then, today → that day, tomorrow → the next day / the following day, yesterday → the day before / the previous day, here → there, this → that, ago → before*.

**Questions indirectes** : ordre sujet + verbe, sans *do* ni point d'interrogation :
- *Where do you live?* → *He asked me where I lived.*
- *Are you coming?* → *She asked if / whether I was coming.*

**Ordres** : *tell / ask someone (not) to + base verbale* : *Close the door!* → *He told me to close the door.* *Don't move!* → *She told us not to move.*

> **À retenir** : passif = **be** conjugué + **participe passé** (+ *by* agent). Discours indirect après un verbe au passé : on « recule » d'un temps (présent → prétérit → past perfect ; *will → would*). Question indirecte : sujet + verbe, sans *do*. *Say something* mais *tell somebody something*.
`,
      exercices: [
        { type: "saisie", question: "Mets au passif : *Shakespeare wrote Romeo and Juliet.*", reponses: ["Romeo and Juliet was written by Shakespeare"], explication: "Prétérit actif → **was / were + participe passé** ; l'agent est introduit par *by*." },
        { type: "saisie", question: "Mets au passif sans agent : *They have closed the road.*", reponses: ["The road has been closed"], explication: "Present perfect → **has / have been + participe passé**." },
        { type: "saisie", question: "Mets au passif : *They are building a new hospital.*", reponses: ["A new hospital is being built"], explication: "Be + -ing → **is being + participe passé**." },
        { type: "qcm", question: "« On m'a offert un livre. »", choix: ["I was given a book.", "A book gave me.", "I gave a book.", "I have given a book."], reponse: 0, explication: "Avec les verbes à deux compléments, l'anglais met volontiers la personne en sujet : **I was given a book.**" },
        { type: "saisie", question: "Passe au discours indirect : *\"I am tired,\" she said.* → *She said (that) ___.*", reponses: ["she was tired", "that she was tired"], explication: "Verbe introducteur au passé → le présent devient **prétérit** : *she was tired*." },
        { type: "saisie", question: "Passe au discours indirect : *\"Where do you live?\" he asked me.* → *He asked me ___.*", reponses: ["where I lived"], explication: "Question indirecte : **mot interrogatif + sujet + verbe**, sans *do*, et concordance des temps : *where I lived*." },
        { type: "saisie", question: "Passe au discours indirect : *\"I will call you tomorrow,\" he said.* → *He said (that) he ___.*", reponses: ["would call me the next day", "would call me the following day", "would call me the day after"], explication: "*Will → would*, *you → me*, *tomorrow → the next day / the following day*." },
        { type: "qcm", question: "*\"Don't touch anything!\" the guide said to us.* Au discours indirect :", choix: ["The guide said us don't touch anything.", "The guide told us not to touch anything.", "The guide told us to not touched anything.", "The guide asked if we touched anything."], reponse: 1, explication: "Ordre négatif → **tell someone not to + base verbale**. *Say* ne prend pas de complément de personne direct." },
        { type: "vf", question: "*I had my car repaired* signifie « J'ai réparé ma voiture moi-même ».", reponse: false, explication: "**Have something done** = faire faire : « J'ai fait réparer ma voiture » (par un garagiste)." },
        { type: "redaction", question: "Article (160 mots environ) : un journaliste rend compte d'une interview avec une jeune militante écologiste. Rapporte ses propos au discours indirect (affirmations, questions, conseils) et utilise au moins trois formes passives.", corrige: `Modèle de réponse :

*"We Are Running Out of Time," Warns Young Activist*

*Last Friday, I met Maya Collins, a seventeen-year-old climate activist who was given an award for her campaign against plastic pollution last year. She told me that she had started protesting when she was only fourteen. She explained that thousands of tonnes of plastic were thrown into the ocean every day and that most of it could not be recycled.*

*When I asked her whether she was optimistic, she answered that she was hopeful but that governments had to act immediately. She said that a new law would be debated the following month and that she would keep fighting until it was passed.*

*Finally, she advised young people to stop buying single-use plastics and told them not to give up.*

Points grammaticaux :
- concordance : *she had started, tonnes of plastic were thrown, governments had to act, a new law would be debated, the following month* ;
- question indirecte : *I asked her whether she was optimistic* ;
- conseils / ordres : *advised young people to stop, told them not to give up* ;
- passifs : *was given an award, were thrown, could not be recycled, would be debated, was passed*.` },
      ],
    },
    {
      id: "relatives-gerondif-infinitif",
      titre: "Propositions relatives ; gérondif ou infinitif",
      theme: "Grammaire",
      cours: `
## Les pronoms relatifs
| Pronom | Antécédent | Exemple |
|---|---|---|
| who | personne | *The woman who lives next door is a doctor.* |
| which | chose, animal | *The book which I bought is boring.* |
| that | personne ou chose (relative déterminative) | *The film that we saw was great.* |
| whose | possession (« dont le / la ») | *The boy whose father is a pilot...* |
| where | lieu | *The town where I grew up...* |
| when | temps | *The day when we met...* |
| what | « ce que, ce qui » (sans antécédent) | *What I need is time.* |

### Relative déterminative ou explicative ?
- **déterminative** (*defining*) : indispensable au sens, **pas de virgules**, *that* possible : *Students who work hard succeed.*
- **explicative** (*non-defining*) : information supplémentaire, **entre virgules**, **jamais that** : *My brother, who lives in Dublin, is a nurse. London, which is the capital, has 9 million inhabitants.*

### Omission du relatif
Dans une relative déterminative, on peut omettre le relatif **complément** : *The film (that) we saw was great.* Impossible s'il est sujet : *The man who called you* (obligatoire).

### Préposition rejetée
*The girl (who) I was talking to* (courant) = *The girl to whom I was talking* (soutenu). « Ce dont j'ai besoin » = *What I need*.

## Gérondif (V-ing) ou infinitif (to + V) ?
| Suivis de V-ing | Suivis de to + V |
|---|---|
| enjoy, avoid, mind, finish, keep, consider, suggest, deny, admit, miss, risk, can't stand, can't help | want, decide, hope, plan, refuse, agree, promise, manage, expect, afford, learn, seem, fail, offer |
| après une préposition : *interested in learning, good at drawing, before leaving, instead of complaining, look forward to seeing* | après un adjectif : *happy to help, easy to understand* ; but : *I came to see you* |

- *Look forward to*, *be used to*, *object to* : ici *to* est une préposition → **V-ing** : *I look forward to hearing from you.*
- *Like, love, hate, prefer, start, begin* : les deux sont possibles (*I like reading / to read*). Mais *would like* → **to** : *I'd like to go.*

### Changement de sens
| Verbe | + V-ing | + to + V |
|---|---|---|
| stop | arrêter de : *He stopped smoking.* | s'arrêter pour : *He stopped to smoke.* |
| remember | se souvenir d'avoir fait : *I remember meeting her.* | ne pas oublier de : *Remember to lock the door.* |
| forget | oublier avoir fait : *I'll never forget seeing the sea.* | oublier de : *I forgot to call him.* |
| try | essayer (pour voir) : *Try adding salt.* | s'efforcer de : *I tried to open it.* |
| regret | regretter d'avoir fait : *I regret saying that.* | regretter de devoir (annonce) : *We regret to inform you...* |

**Make / let + base verbale sans to** : *My parents make me study. They let me go out.* Mais *allow someone to* : *They allow me to go out.* **Want someone to** : *I want you to come* (jamais *I want that you come*).

> **À retenir** : *who* (personnes), *which* (choses), *whose* (« dont le »), *where* (lieu) ; relative explicative entre virgules, jamais *that*. Après une préposition → **V-ing** (y compris *look forward to*). *Stop, remember, forget, try* changent de sens selon la construction.
`,
      exercices: [
        { type: "qcm", question: "*The writer ___ novel won the prize is only 25.*", choix: ["who", "which", "whose", "that"], reponse: 2, explication: "Relation de possession (le roman de l'écrivain) → **whose** : « l'écrivain dont le roman a gagné le prix »." },
        { type: "qcm", question: "Quelle phrase est incorrecte ?", choix: ["My sister, who lives in Leeds, is a nurse.", "The man that I met was friendly.", "London, that is a huge city, attracts tourists.", "The house where I was born has been sold."], reponse: 2, explication: "Dans une relative **explicative** (entre virgules), on ne peut pas utiliser *that* : *London, which is a huge city, ...*" },
        { type: "saisie", question: "Traduis : « Ce dont j'ai besoin, c'est de temps. »", reponses: ["What I need is time"], explication: "« Ce que / ce dont » sans antécédent = **what** : *What I need is time.*" },
        { type: "saisie", question: "Complète avec la forme correcte du verbe : *I'm looking forward to ___ (meet) you.*", reponses: ["meeting"], explication: "Dans *look forward to*, *to* est une **préposition** : elle est suivie de V-ing : *meeting*." },
        { type: "saisie", question: "Complète : *She managed ___ (finish) the essay on time.*", reponses: ["to finish"], explication: "*Manage* est suivi de **to + base verbale**." },
        { type: "saisie", question: "Complète : *Would you mind ___ (open) the window?*", reponses: ["opening"], explication: "*Mind* est suivi de **V-ing** : *Would you mind opening...?*" },
        { type: "vf", question: "*He stopped to smoke* signifie « Il a arrêté de fumer ».", reponse: false, explication: "*Stop + to* = s'arrêter **pour** faire quelque chose : « il s'est arrêté pour fumer ». « Il a arrêté de fumer » = *He stopped smoking.*" },
        { type: "saisie", question: "Traduis : « Je veux que tu viennes. »", reponses: ["I want you to come"], explication: "**Want + complément + to + base verbale** : *I want you to come.* La structure *I want that you come* est impossible." },
        { type: "qcm", question: "*My parents never let me ___ out after 10 pm.*", choix: ["to go", "going", "go", "went"], reponse: 2, explication: "**Let (et make) + complément + base verbale sans to** : *let me go*." },
        { type: "redaction", question: "Expression écrite (150 mots environ) : présente une personnalité du monde anglophone qui t'inspire. Utilise au moins quatre pronoms relatifs différents (dont une relative explicative) et au moins quatre verbes suivis de V-ing ou de to + V.", corrige: `Modèle de réponse :

*The person who inspires me most is Malala Yousafzai, a Pakistani activist whose courage has impressed the whole world. She grew up in the Swat Valley, where the Taliban had banned girls from going to school. Malala refused to stay silent and kept writing a blog for the BBC about her life.*

*In 2012, she was shot by a gunman on her way home from school. After being treated in Birmingham, which became her new home, she decided to continue her fight for education. In 2014, she became the youngest person ever to receive the Nobel Peace Prize.*

*What I admire most is her determination. She never avoided speaking out, even when she risked losing her life. I hope to be as brave as she is one day.*

Points grammaticaux :
- relatifs : *who, whose, where*, explicative *which became her new home* (entre virgules), *What I admire* ;
- verbes + to : *refused to stay, decided to continue, hope to be* ;
- verbes + V-ing : *kept writing, avoided speaking, risked losing* ; préposition + V-ing : *from going, After being treated*.` },
      ],
    },
    {
      id: "phrasal-verbs-faux-amis",
      titre: "Phrasal verbs fréquents et faux-amis",
      theme: "Lexique",
      cours: `
## Les phrasal verbs
Un **phrasal verb** associe un verbe et une particule (*up, down, out, off, on, in, away, back...*). Le sens est souvent imprévisible : il faut les apprendre comme des mots à part entière.

| Phrasal verb | Sens |
|---|---|
| give up | abandonner, renoncer à |
| look after | s'occuper de |
| look for | chercher |
| look up (a word) | chercher (dans un dictionnaire) |
| find out | découvrir, apprendre |
| carry on / go on | continuer |
| set up | créer, fonder |
| turn down | refuser ; baisser (le son) |
| take off | décoller ; enlever (un vêtement) |
| put off | reporter, remettre à plus tard |
| come up with | trouver (une idée) |
| get over | se remettre de |
| run out of | être à court de |
| bring up | élever (un enfant) ; soulever (une question) |
| break down | tomber en panne ; s'effondrer |
| stand up for | défendre (une cause) |
| pull down / tear down | démolir |
| make up | inventer ; se réconcilier |
| get along / on with | bien s'entendre avec |

Place du complément : *Turn off the light* ou *Turn the light off* ; mais avec un **pronom**, il se place obligatoirement avant la particule : *Turn it off* (jamais *Turn off it*).

## Les faux-amis (false friends)
| Mot anglais | Sens réel | À ne pas confondre avec |
|---|---|---|
| actually | en fait, en réalité | actuellement = *currently, nowadays* |
| eventually | finalement | éventuellement = *possibly* |
| sensible | raisonnable | sensible = *sensitive* |
| library | bibliothèque | librairie = *bookshop / bookstore* |
| to attend | assister à | attendre = *to wait for* |
| to pretend | faire semblant | prétendre = *to claim* |
| a journey | un voyage | une journée = *a day* |
| to realise | se rendre compte | réaliser = *to achieve, to carry out* |
| a lecture | une conférence, un cours magistral | une lecture = *reading* |
| to rest | se reposer | rester = *to stay* |
| a novel | un roman | une nouvelle = *a short story* / *news* |
| deception | la tromperie | la déception = *disappointment* |
| a location | un emplacement | une location = *a rental* |
| to injure | blesser | injurier = *to insult* |
| fabric | le tissu | une fabrique = *a factory* |
| a grape | un raisin | un pamplemousse = *a grapefruit* |
| achievement | une réussite | achèvement = *completion* |

> **À retenir** : phrasal verb + pronom : *pick it up, turn it down*. Faux-amis à connaître absolument : *actually, eventually, sensible, library, attend, pretend, realise, lecture, deception*.
`,
      exercices: [
        { type: "saisie", question: "Donne le phrasal verb qui signifie « abandonner, renoncer ».", reponses: ["give up", "to give up"], explication: "**Give up** : *Never give up!* ; *She gave up smoking* (+ V-ing)." },
        { type: "saisie", question: "Traduis : « Nous sommes à court de lait. »", reponses: ["We have run out of milk", "We've run out of milk", "We are running out of milk", "We're running out of milk", "We ran out of milk"], explication: "**Run out of** = être à court de." },
        { type: "qcm", question: "*Actually, I don't agree with you.* Que signifie *actually* ?", choix: ["actuellement", "en fait", "éventuellement", "finalement"], reponse: 1, explication: "Faux-ami : *actually* = **en fait, en réalité**. « Actuellement » = *currently, nowadays, at present*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["The music is too loud. Turn down it.", "The music is too loud. Turn it down.", "The music is too loud. Turn it of down.", "The music is too loud. Down turn it."], reponse: 1, explication: "Avec un **pronom**, il se place entre le verbe et la particule : *Turn it down.*" },
        { type: "saisie", question: "Traduis : « Elle a fait semblant de dormir. »", reponses: ["She pretended to sleep", "She pretended to be asleep", "She pretended to be sleeping", "She pretended she was asleep", "She pretended that she was asleep"], explication: "*To pretend* = **faire semblant** (faux-ami). « Prétendre » = *to claim*." },
        { type: "vf", question: "*I attended the meeting* signifie « J'ai attendu la réunion ».", reponse: false, explication: "*To attend* = **assister à** : « J'ai assisté à la réunion ». Attendre = *to wait for*." },
        { type: "saisie", question: "Traduis : « Ma grand-mère s'occupe de mon petit frère. »", reponses: ["My grandmother looks after my little brother", "My grandmother is looking after my little brother", "My grandma looks after my little brother", "My grandmother takes care of my little brother", "My grandmother looks after my younger brother", "My grandma is looking after my little brother", "My grandmother is looking after my younger brother", "My grandmother takes care of my younger brother", "My grandmother is taking care of my little brother", "My grandmother is taking care of my younger brother", "My grandma looks after my younger brother", "My grandma is looking after my younger brother", "My grandma takes care of my little brother", "My grandma takes care of my younger brother", "My grandma is taking care of my little brother", "My grandma is taking care of my younger brother"], explication: "**Look after** (ou *take care of*) = s'occuper de." },
        { type: "qcm", question: "*He eventually found a job.* signifie :", choix: ["Il a éventuellement trouvé un travail.", "Il a finalement trouvé un travail.", "Il a peut-être trouvé un travail.", "Il a aussitôt trouvé un travail."], reponse: 1, explication: "*Eventually* = **finalement, au bout du compte**. « Éventuellement » = *possibly, if necessary*." },
        { type: "saisie", question: "Traduis : « Il s'est rendu compte de son erreur. »", reponses: ["He realised his mistake", "He realized his mistake", "He realised his error", "He realized his error"], explication: "*To realise* (UK) / *to realize* (US) = **se rendre compte**. « Réaliser un projet » = *to carry out / achieve a project*." },
        { type: "redaction", question: "Récit (150 mots environ) : raconte une journée où tout est allé de travers. Utilise au moins six phrasal verbs différents et trois mots de la liste des faux-amis employés dans leur vrai sens.", corrige: `Modèle de réponse :

*Last Monday was a nightmare. I was supposed to attend a lecture on climate change at the university, so I got up early. But when I took off my pyjamas, I realised I had run out of clean clothes!*

*I set off anyway, but on the way the bus broke down. The driver told us to carry on on foot. I tried to look up the route on my phone, but the battery was dead. I eventually found the building, one hour late, and the lecture had been put off until the following week.*

*Actually, I didn't really care: I went to the library and rested for a while. Back home, I looked after my little sister and we made up a funny story about my day. I got over it quickly!*

Points lexicaux :
- phrasal verbs : *got up, took off, run out of, set off, broke down, carry on, look up, put off, looked after, made up, got over* ;
- faux-amis dans leur vrai sens : *attend* (assister à), *lecture* (conférence), *realised* (se rendre compte), *eventually* (finalement), *actually* (en fait), *library* (bibliothèque), *rested* (se reposer).` },
      ],
    },
    {
      id: "methodologie-evaluations",
      titre: "Méthodologie des évaluations et connecteurs logiques",
      theme: "Méthodologie",
      cours: `
## Les évaluations en 1re (LVA)
En 1re, les langues vivantes sont évaluées en **contrôle continu** (moyennes de l'année). Les évaluations portent sur les cinq activités langagières, en lien avec les **axes du programme**. Le niveau visé en fin de 1re est **B1-B2**.

## Compréhension de l'oral et de l'écrit
On te demande en général de rendre compte en **français** (ou en anglais selon la consigne) de ce que tu as compris.

1. **Anticipe** : titre, source, date, illustration, axe du dossier : formule des hypothèses.
2. **Repère** le type de document (interview, reportage, extrait de roman, article d'opinion, discours) et la situation : qui parle, à qui, où, quand, pourquoi ?
3. **Écoute / lis par étapes** : d'abord le sens général, puis les informations précises (chiffres, noms, dates), enfin le point de vue de l'auteur et le ton (ironique, critique, enthousiaste...).
4. **Rends compte** de façon organisée : présentation du document, idées principales hiérarchisées, détails, point de vue, lien avec l'axe.

À l'oral : appuie-toi sur les mots accentués, les noms propres, les chiffres et les connecteurs ; ne panique pas si tu ne comprends pas tout.

## Expression écrite : essay, article, lettre
| Type | Caractéristiques |
|---|---|
| essay | problématique, introduction, développement argumenté (paragraphes), conclusion ; registre neutre ou soutenu |
| article | titre accrocheur, éventuellement sous-titre ; s'adresse aux lecteurs ; paragraphes courts, exemples concrets |
| letter / email | formules d'appel et de clôture (*Dear Sir or Madam, ... Yours faithfully* ; *Dear Tom, ... Best wishes*) |
| speech | s'adresse à un public (*Ladies and gentlemen*), questions rhétoriques, appel à l'action |
| blog post | registre plus personnel, ton direct |

Méthode : 1) analyse la consigne (type de texte, destinataire, nombre de mots, axe) ; 2) fais un plan ; 3) rédige en paragraphes reliés par des connecteurs ; 4) relis-toi (accords, temps, prépositions, orthographe). Respecte le nombre de mots indiqué (à 10 % près).

## Expression orale
- **En continu** : présente un document ou un sujet en 2 à 5 minutes : annonce un plan (*First I'll present..., then I'll explain...*), illustre, conclus.
- **En interaction** : réagis, nuance, demande des précisions : *I see your point, but... Could you explain what you mean by...? That's a good point. I partly agree.*
- Évite de lire tes notes ; parle avec des phrases simples mais correctes ; soigne l'accentuation.

## Les connecteurs logiques et mots de liaison
| Fonction | Connecteurs |
|---|---|
| ajouter | moreover, furthermore, in addition, besides, what is more |
| opposer | however, nevertheless, yet, on the other hand, whereas, while |
| concéder | although, even though, despite + nom / V-ing, in spite of, admittedly |
| cause | because, since, as, due to, owing to, because of |
| conséquence | therefore, thus, so, as a result, consequently |
| but | in order to, so as to, so that |
| exemple | for instance, for example, such as |
| ordonner | first(ly), secondly, then, finally, last but not least |
| conclure | to conclude, in conclusion, all in all, to sum up |

Attention : **despite / in spite of** sont suivis d'un nom ou d'un V-ing (*Despite the rain*, *Despite being tired*), **although** d'une proposition (*Although it was raining*).

>! Phrases d'introduction utiles : *Nowadays, ... ; It is often said that... ; This raises the question of whether... ; We will first examine..., then...*

> **À retenir** : compréhension = anticiper, repérer, hiérarchiser, rendre compte. Écrit = respecter le type de texte et le nombre de mots, plan visible, connecteurs variés. Oral = plan annoncé, exemples, interaction. *Despite + nom / V-ing* ; *although + sujet + verbe*.
`,
      exercices: [
        { type: "qcm", question: "Quel connecteur exprime une conséquence ?", choix: ["however", "therefore", "although", "moreover"], reponse: 1, explication: "**Therefore** = par conséquent. *However* oppose, *although* concède, *moreover* ajoute." },
        { type: "saisie", question: "Complète avec despite ou although : *___ the bad weather, the festival was a success.*", reponses: ["Despite", "In spite of"], explication: "*The bad weather* est un **nom** → **Despite** (ou *In spite of*). *Although* serait suivi d'une proposition : *Although the weather was bad*." },
        { type: "saisie", question: "Complète avec despite ou although : *___ she was exhausted, she kept working.*", reponses: ["Although", "Even though", "Though"], explication: "*She was exhausted* est une proposition (sujet + verbe) → **Although** (ou *Even though*)." },
        { type: "vf", question: "Un article doit comporter un titre.", reponse: true, explication: "Le **titre** (souvent accrocheur) est une caractéristique attendue de l'article de presse ou de blog, contrairement à l'essay." },
        { type: "qcm", question: "Quelle formule de clôture convient à une lettre formelle commençant par *Dear Sir or Madam* ?", choix: ["Love,", "Yours faithfully,", "See you soon,", "Cheers,"], reponse: 1, explication: "Après *Dear Sir or Madam* (destinataire inconnu), on termine par **Yours faithfully**. Si on connaît le nom (*Dear Mr Smith*), on écrit *Yours sincerely*." },
        { type: "saisie", question: "Traduis le connecteur « de plus » (registre soutenu, un seul mot).", reponses: ["moreover", "furthermore", "besides", "additionally"], explication: "**Moreover / Furthermore** : connecteurs d'addition typiques de l'essay." },
        { type: "qcm", question: "Lors d'une compréhension de l'écrit, que faut-il faire en premier ?", choix: ["Traduire le texte phrase par phrase", "Observer le paratexte (titre, source, date) et formuler des hypothèses", "Chercher les mots inconnus dans le dictionnaire", "Rédiger directement le compte rendu"], reponse: 1, explication: "Le **paratexte** permet d'anticiper le thème et le point de vue ; la lecture devient alors plus efficace." },
        { type: "qcm", question: "En interaction orale, quelle formule permet de nuancer poliment ?", choix: ["You're wrong.", "I see your point, but I think...", "No way!", "Whatever."], reponse: 1, explication: "**I see your point, but...** reconnaît l'argument de l'autre avant d'exprimer une opinion différente : c'est l'attitude valorisée à l'examen." },
        { type: "saisie", question: "Corrige l'erreur : *Despite it was late, they went on talking.*", reponses: ["Although it was late, they went on talking", "Even though it was late, they went on talking", "Despite the late hour, they went on talking", "Though it was late, they went on talking"], explication: "*Despite* ne peut pas être suivi d'une proposition : **Although it was late** (ou *Despite the late hour*)." },
        { type: "redaction", question: "Sujet type contrôle continu (axe « Innovations scientifiques et responsabilité ») : *Artificial intelligence: should we be afraid of it?* Rédige un essay de 200 à 250 mots, avec introduction, deux parties argumentées et conclusion.", corrige: `Modèle de réponse :

*Nowadays, artificial intelligence is everywhere: it recommends films, translates texts, drives cars and even writes essays. While some people see it as a revolution that will improve our lives, others fear that it might escape human control. This raises the question of whether we should be afraid of AI.*

*On the one hand, there are good reasons to be worried. Firstly, AI could replace millions of workers, from drivers to translators, and increase inequality. Secondly, it can be used to spread fake news: images and videos generated by AI are so realistic that it is becoming difficult to distinguish truth from lies. Furthermore, the personal data on which these systems depend are often collected without our consent.*

*On the other hand, AI offers huge opportunities. In medicine, for instance, algorithms can detect some cancers earlier than doctors. It can also help scientists fight climate change by optimising energy consumption. Besides, like any tool, AI is neither good nor bad in itself: everything depends on how humans decide to use it.*

*To conclude, fear alone is not the right answer. Although the risks are real, we should not reject AI but regulate it, as the European Union started doing in 2024 with its AI Act. Above all, citizens must be educated so that they understand these technologies instead of being controlled by them. As Mary Shelley's Frankenstein reminds us, the real danger is not the creation but the irresponsibility of its creator.*

Méthode et critères :
- introduction : accroche (*Nowadays*), présentation des deux visions, problématique (*This raises the question of whether*) ;
- deux parties équilibrées avec connecteurs variés : *Firstly, Secondly, Furthermore / On the other hand, for instance, Besides* ;
- exemples précis et lien culturel (AI Act, *Frankenstein*) ;
- conclusion qui répond à la question et ouvre la réflexion ;
- grammaire B2 : modaux (*could, might, should, must*), passif (*are collected, be educated*), relative (*on which these systems depend*), concession (*Although*).` },
      ],
    },
  ],
};
