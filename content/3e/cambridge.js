export default {
  chapitres: [
    // ───────────────────────────── 1. L'examen
    {
      id: "presentation-examen",
      titre: "Découvrir l'examen B1 Preliminary for Schools",
      theme: "L'examen",
      cours: `
## Qu'est-ce que le B1 Preliminary for Schools ?
Le **B1 Preliminary for Schools** (on dit encore souvent **PET**, pour *Preliminary English Test*) est l'examen de **Cambridge English** du niveau **B1** du Cadre européen commun de référence pour les langues (CECRL). La version *for Schools* a le même niveau et le même format que la version « adultes », mais les sujets parlent de la vie des adolescents : le collège, les amis, le sport, les sorties, les réseaux sociaux, les voyages.

Après l'A2 Key, c'est une vraie marche : au niveau B1, tu sais **raconter** une expérience, **donner ton avis et le justifier**, comprendre l'essentiel d'un article ou d'une conversation sur un sujet familier, et te débrouiller dans la plupart des situations de voyage. C'est aussi, à peu près, le niveau attendu en fin de collège dans la langue vivante A ; en section internationale ou Cambridge, on vise souvent plus haut.

## Les quatre épreuves
| Épreuve | Durée | Contenu | Part de la note |
|---|---|---|---|
| **Reading** | 45 minutes | **6 parties, 32 questions** | 25 % |
| **Writing** | 45 minutes | **2 parties** : un e-mail (obligatoire), puis un **article ou une histoire** (au choix), environ **100 mots** chacun | 25 % |
| **Listening** | environ 30 minutes (dont 6 minutes pour reporter les réponses, version papier) | **4 parties, 25 questions** ; chaque enregistrement est entendu **deux fois** | 25 % |
| **Speaking** | 10 à 12 minutes par paire (15 à 17 minutes à trois) | **4 parties**, avec un autre candidat, face à deux examinateurs | 25 % |

> **À retenir** : 4 épreuves qui comptent **chacune pour un quart**. Attention au changement par rapport à l'A2 Key : Reading et Writing sont maintenant **deux épreuves séparées** de 45 minutes chacune.

## Le détail des parties
| Épreuve | Partie | Tâche |
|---|---|---|
| Reading | Part 1 | 5 textes courts (panneau, message, e-mail) : 3 propositions, trouver le sens du message |
| Reading | Part 2 | 5 personnes à relier à **8 textes courts** sur un même sujet (3 textes ne servent pas) |
| Reading | Part 3 | Un texte long, 5 questions à **4 propositions** (détail, idée générale, avis de l'auteur) |
| Reading | Part 4 | Un texte dont on a retiré **5 phrases** : les remettre à leur place parmi **8** |
| Reading | Part 5 | Texte à trous : 6 trous, **4 mots** proposés par trou (vocabulaire) |
| Reading | Part 6 | *Open cloze* : 6 trous, écrire **un seul mot** par trou (grammaire) |
| Writing | Part 1 | Répondre à un **e-mail** en tenant compte de **notes** écrites dessus (environ 100 mots) |
| Writing | Part 2 | Au choix : un **article** pour un magazine ou un site, ou une **histoire** (environ 100 mots) |
| Listening | Part 1 | 7 courts extraits : choisir la bonne **image** parmi 3 |
| Listening | Part 2 | 6 courts dialogues : 3 propositions (idée générale, sentiment, avis) |
| Listening | Part 3 | Un monologue : compléter **6 trous** dans des notes |
| Listening | Part 4 | Une **interview** : 6 questions à 3 propositions |
| Speaking | Part 1 | Questions personnelles (environ 2 min) |
| Speaking | Part 2 | Décrire **seul une photo** pendant environ 1 minute |
| Speaking | Part 3 | Discuter **avec ton partenaire** à partir d'images, se mettre d'accord (environ 4 min) |
| Speaking | Part 4 | Conversation générale sur le thème de la Part 3 (environ 3 min) |

## Les résultats
Ton résultat est donné sur l'**échelle Cambridge English** : chaque épreuve reçoit un score, et la moyenne donne le score global.

| Score global | Résultat | Niveau indiqué sur le certificat |
|---|---|---|
| 160 à 170 | **Grade A** (*Pass with Distinction*) | **B2** |
| 153 à 159 | **Grade B** (*Pass with Merit*) | B1 |
| 140 à 152 | **Grade C** (*Pass*) | B1 |
| 120 à 139 | pas de *grade* | **A2** |

En dessous de 120, il n'y a pas de certificat. Le certificat n'a **pas de date d'expiration**.

>! **Comment c'est compté ?** Reading : 1 point par question (32). Listening : 1 point par question (25). Writing : chaque texte est noté sur **20** (quatre critères sur 5), soit 40. Speaking : noté par les deux examinateurs. Ces points « bruts » sont ensuite convertis sur l'échelle de 120 à 170.

## Papier ou ordinateur ?
Le centre te propose une version **papier** ou une version **sur ordinateur** : le format est **le même** (mêmes parties, mêmes durées). Le Speaking se passe toujours face à des examinateurs.

## Trois conseils pour bien te préparer
- **Lis et écoute de l'anglais authentique** chaque semaine : articles pour ados, séries en VO sous-titrées en anglais, podcasts.
- **Entraîne-toi partie par partie** avec les chapitres de cette matière, puis fais l'**examen blanc** en temps limité.
- **Écris régulièrement** environ 100 mots (e-mail, article, histoire) et compare avec les modèles.
`,
      exercices: [
        { type: "qcm", question: "How many papers (épreuves) are there in the B1 Preliminary for Schools exam?", choix: ["two", "three", "four", "six"], reponse: 2, explication: "Il y a **quatre** épreuves : Reading, Writing, Listening et Speaking, qui comptent chacune pour 25 %. Six, c'est le nombre de parties de la seule épreuve de Reading." },
        { type: "vf", question: "Au B1 Preliminary for Schools, Reading et Writing forment une seule épreuve d'une heure, comme à l'A2 Key.", reponse: false, explication: "Faux : au B1, ce sont **deux épreuves séparées** de **45 minutes** chacune. C'est l'A2 Key qui réunit Reading et Writing en une heure." },
        { type: "saisie", question: "Combien de questions compte l'épreuve de Reading ? (écris le nombre)", reponses: ["32", "thirty-two", "thirty two", "trente-deux", "trente deux"], explication: "**32 questions** réparties en 6 parties (5 + 5 + 5 + 5 + 6 + 6 = 32)." },
        { type: "qcm", question: "In Writing Part 2, what do you have to do?", choix: ["write an e-mail and a story", "choose an article or a story and write about 100 words", "write a story of about 35 words from three pictures", "write a letter of 250 words"], reponse: 1, explication: "En Part 2, tu **choisis** entre un **article** et une **histoire**, d'environ **100 mots**. L'e-mail est la Part 1, obligatoire. L'histoire de 35 mots en images, c'est l'A2 Key." },
        { type: "qcm", question: "A candidate gets an overall score of **155**. What result does she get?", choix: ["Grade A, level B2", "Grade C, level B1", "level A2, no grade", "Grade B, level B1"], reponse: 3, explication: "155 est entre **153 et 159** : *Grade B (Pass with Merit)*, niveau **B1**. Le *Grade A* commence à 160, le *Grade C* va de 140 à 152." },
        { type: "vf", question: "Un score global de 162 donne un certificat qui indique le niveau B2.", reponse: true, explication: "Vrai : de **160 à 170**, c'est le *Grade A* (*Pass with Distinction*) et le certificat indique le niveau **B2**." },
        { type: "saisie", question: "En Listening, combien de fois entends-tu chaque enregistrement ? (écris le nombre)", reponses: ["2", "two", "deux", "2 fois", "deux fois", "twice", "two times", "2 times"], explication: "Chaque enregistrement est entendu **deux fois** : la première écoute pour répondre, la seconde pour vérifier." },
        { type: "qcm", question: "In Speaking Part 2, what do you do?", choix: ["You talk about a photograph on your own for about one minute.", "You answer questions about your name and your school.", "You discuss some pictures with your partner and agree.", "You read a text aloud to the examiner."], reponse: 0, explication: "Part 2 = **décrire seul une photo** pendant environ une minute. Les questions personnelles sont en Part 1, la discussion avec le partenaire en Part 3. On ne lit jamais de texte à voix haute." },
        { type: "qcm", question: "In Reading Part 4, a text has five gaps. How many sentences can you choose from?", choix: ["five", "six", "eight", "ten"], reponse: 2, explication: "On propose **8 phrases** pour **5 trous** : 3 phrases ne servent pas. C'est ce qui rend la Part 4 exigeante : il faut vérifier les liens logiques avant et après chaque trou." },
        { type: "redaction", question: "Explique en quelques phrases (en français) comment est organisé le B1 Preliminary for Schools et ce que tu dois faire pour obtenir le niveau B1. Indique au moins une différence avec l'A2 Key.", corrige: `**Corrigé modèle**

Le B1 Preliminary for Schools comporte **quatre épreuves** qui comptent chacune pour **25 %** : **Reading** (45 minutes, 6 parties, 32 questions), **Writing** (45 minutes, un e-mail obligatoire puis un article ou une histoire au choix, environ 100 mots chacun), **Listening** (environ 30 minutes, 4 parties, 25 questions, enregistrements entendus deux fois) et **Speaking** (10 à 12 minutes à deux candidats, 4 parties).

Le résultat est donné sur l'échelle Cambridge English : il faut au moins **140** pour obtenir le niveau **B1** (*Grade C* de 140 à 152, *Grade B* de 153 à 159). À partir de 160, le *Grade A* certifie même le niveau **B2** ; de 120 à 139, le certificat indique le niveau A2.

**Différences avec l'A2 Key** : Reading et Writing sont deux épreuves séparées (au lieu d'une seule d'une heure) ; les rédactions sont plus longues (environ 100 mots au lieu de 25 et 35) ; le Speaking a 4 parties, dont une description de photo en solo.` },
      ],
    },

    // ───────────────────────────── 2. Reading Part 1
    {
      id: "reading-messages",
      titre: "Reading Part 1 : comprendre des messages courts",
      theme: "Reading",
      cours: `
## La tâche
Tu lis **5 textes courts** de la vie réelle : un panneau, une affiche, un SMS, un post-it, un e-mail, une annonce sur un site. Pour chacun, tu choisis parmi **3 propositions** celle qui donne **le sens du message**.

>! **Exemple**
>! **SWIMMING POOL — Children under 8 must be with an adult in the water at all times.**
>! - A. Adults cannot swim when children are in the pool.
>! - B. Young children are not allowed to swim on their own.
>! - C. Children under 8 can only use the pool at certain times.
>! → **B**. *Must be with an adult* = ne peuvent pas nager seuls. A invente une interdiction ; C reprend *times*, mais *at all times* veut dire « en permanence ».

## La méthode en 4 étapes
1. **Qui écrit, à qui, pourquoi ?** Un panneau interdit ou informe ; un message invite, demande, prévient, s'excuse, change un rendez-vous.
2. **Lis le texte en entier**, puis dis-toi en une phrase ce qu'il veut dire.
3. **Lis les trois propositions** et cherche celle qui dit **la même chose avec d'autres mots**.
4. **Élimine** les deux autres en trouvant la raison précise : contraire, trop fort, détail mal placé.

## Les pièges classiques
| Piège | Exemple |
|---|---|
| **Même mot, autre sens** | *at all times* (tout le temps) ≠ *at certain times* (à certaines heures) |
| **Trop fort ou trop général** | *No practice this week* ≠ *practice is cancelled for ever* |
| **Mauvaise personne** | qui doit faire l'action : l'auteur ou le lecteur ? |
| **Mauvais moment** | *until Friday* (jusqu'à vendredi) ≠ *from Friday* (à partir de vendredi) |

## Le vocabulaire des messages
| Expression | Sens |
|---|---|
| *unless* | sauf si, à moins que |
| *in advance* | à l'avance |
| *due to* | en raison de |
| *available* | disponible |
| *apart from* | à part, sauf |
| *no longer* | ne... plus |
| *in case* | au cas où |
| *postponed / put off* | reporté |
| *refund* | remboursement |
| *staff only* | réservé au personnel |

> **À retenir** : la bonne réponse **reformule** le message avec d'autres mots ; les mauvaises reprennent souvent **les mêmes mots** que le texte pour te piéger. Justifie toujours ton choix ET l'élimination des deux autres.
`,
      exercices: [
        { type: "qcm", question: `Read the notice.
**LIBRARY — Books may be renewed online unless another student has reserved them.**`, choix: ["You can always keep your books longer if you go online.", "You can keep a book longer online if nobody else is waiting for it.", "You must go online to reserve a book for another student."], reponse: 1, explication: "*Unless* = sauf si : on peut prolonger en ligne **sauf si** un autre élève a réservé le livre. *Always* est trop fort, et personne ne réserve un livre « pour un autre élève »." },
        { type: "qcm", question: `Read the text message.
*Hi Tom, the match has been put off until next Saturday because of the rain. Same time, same place. Coach Davies*`, choix: ["The match will take place a week later than planned.", "The match will start later on the same day.", "The match will be at a different sports ground."], reponse: 0, explication: "*Put off until next Saturday* = **reporté** au samedi suivant. *Same time, same place* montre que ni l'heure ni le lieu ne changent." },
        { type: "qcm", question: `Read the note.
*Emma — I've taken the dog for a walk. Your lunch is in the fridge; just heat it up for two minutes. Back by 2. Dad*`, choix: ["Emma has to take the dog out before lunch.", "Emma's dad will make lunch when he gets back.", "Emma can eat before her dad comes home."], reponse: 2, explication: "Le déjeuner est **prêt** dans le frigo : il suffit de le réchauffer. Emma peut donc manger sans attendre. C'est papa qui promène le chien ; il ne préparera rien en rentrant." },
        { type: "qcm", question: `Read the sign in a shop.
**Items bought in the sale cannot be returned for a refund, but may be exchanged within 14 days.**`, choix: ["You can get your money back for sale items within 14 days.", "You can't get your money back, but you can change a sale item for another one.", "Sale items cannot be taken back to the shop at all."], reponse: 1, explication: "Pas de **remboursement** (*refund*), mais un **échange** (*exchanged*) possible dans les 14 jours. *You can get your money back* confond les deux ; *at all* (pas du tout) est trop fort." },
        { type: "qcm", question: `Read the e-mail.
*Hi Priya, I know you wanted to borrow my camera for the school trip, but my brother's using it this week. My cousin has one she doesn't need, though — shall I ask her? Jade*`, choix: ["Jade is offering to find Priya another camera.", "Jade wants Priya to lend her a camera.", "Jade's brother is going on the school trip."], reponse: 0, explication: "*Shall I ask her?* = « Veux-tu que je lui demande ? » : Jade **propose** de trouver un autre appareil, celui de sa cousine. Rien ne dit que le frère part en voyage scolaire." },
        { type: "vf", question: "Dans la Part 1, la bonne proposition reprend en général exactement les mêmes mots que le texte.", reponse: false, explication: "Faux : la bonne réponse **reformule** le sens avec d'autres mots. Ce sont souvent les **mauvaises** propositions qui reprennent les mots du texte pour piéger." },
        { type: "saisie", question: "Traduis en anglais par **un seul mot** : « sauf si, à moins que » (très fréquent sur les panneaux).", reponses: ["unless"], explication: "**Unless** = sauf si. *You can't enter unless you have a ticket* = Tu ne peux pas entrer sauf si tu as un billet." },
        { type: "qcm", question: `Read the post on the school website.
**Year 9 students: the deadline for signing up for the ski trip is no longer 1st December. You now have until 15th December.**`, choix: ["Students have less time to sign up than before.", "The ski trip has moved to 15th December.", "Students have more time to sign up for the trip."], reponse: 2, explication: "*No longer 1st December... now until 15th December* : la date limite d'inscription est **repoussée**, donc il y a **plus de temps**. Ce n'est pas la date du voyage qui change." },
        { type: "redaction", question: `Pour chaque message, écris en français en une phrase ce qu'il veut dire, puis explique le piège possible.
1. **Bikes must not be left in front of the gate at any time.**
2. *Mum, I'll be home late — I'm staying at Leo's to finish our project. I've already eaten. Sam*`, corrige: `**Corrigé**

1. Il est **interdit de laisser un vélo** devant le portail, **à aucun moment** (*at any time*). Piège possible : une proposition qui dirait que c'est interdit seulement à certaines heures, ou qu'on ne peut pas **passer** à vélo (le panneau parle de **laisser** le vélo, *left*).
2. Sam prévient sa mère qu'il **rentrera tard**, parce qu'il **reste chez Leo** pour finir leur projet, et qu'il **a déjà mangé** (inutile de lui garder à dîner). Pièges possibles : croire que Leo vient chez Sam, ou que Sam demande la permission (il **informe**, il ne demande pas).

**Méthode** : qui écrit ? à qui ? pour quoi faire (interdire, informer, demander, proposer) ? Puis cherche la proposition qui dit la même chose avec d'autres mots.` },
      ],
    },

    // ───────────────────────────── 3. Reading Part 2
    {
      id: "reading-appariement",
      titre: "Reading Part 2 : relier des personnes à des textes",
      theme: "Reading",
      cours: `
## La tâche
Tu lis **5 descriptions de personnes** (par exemple des ados qui cherchent un livre, un club, une sortie, un camp de vacances) et **8 textes courts** sur un même sujet. Pour chaque personne, tu choisis **le seul texte qui correspond à TOUS ses besoins**. Trois textes ne servent pas.

Dans l'appli, chaque personne est présentée comme une question à choix multiple ; les personnes et les huit textes sont affichés au-dessus de la question (bouton « Relire le texte »). Relis à chaque fois les besoins de la personne et les textes, sans te fier seulement au titre.

## La méthode
1. **Souligne les besoins** de chaque personne : en général **trois critères** (par exemple : *loves animals*, *only free at weekends*, *doesn't want to spend much money*).
2. **Parcours les 8 textes** et repère ceux qui répondent au premier critère.
3. **Vérifie les autres critères** dans ces textes seulement. Un texte qui remplit deux critères sur trois **n'est pas** la bonne réponse.
4. **Ne raye pas** un texte trop vite : chaque texte ne sert qu'une fois, mais tu peux te tromper sur une personne précédente.

>! **Exemple**
>! *Lucy wants to learn a new sport. She is only free on Sunday mornings and she doesn't want to spend a lot of money.*
>! - Texte 1 : *Beginners' tennis, Sunday 10–12. £5 a session.* → nouveau sport ✔, dimanche matin ✔, pas cher ✔ : **c'est la réponse**.
>! - Texte 2 : *Free yoga for beginners, Saturday mornings.* → gratuit ✔, débutants ✔, mais **samedi** ✘.

## Les pièges classiques
- **Un mot en commun** sans le bon sens : Lucy veut *learn*, un texte parle d'un club *for experienced players* (joueurs confirmés).
- **Un critère négatif** : *She doesn't like crowded places* → un texte qui dit *very popular, always busy* est éliminé.
- **Les synonymes** : *cheap* = *it won't cost much* = *great value* ; *free* (gratuit) = *no charge* ; *beginners* = *no experience needed*.

| Dans la description | Dans le texte |
|---|---|
| *has never done it before* | *no experience necessary, for beginners* |
| *can't go out in the evening* | *daytime only, closes at 5 pm* |
| *wants to be outside* | *outdoor, in the open air* |
| *with his little sister* | *suitable for all ages, family tickets* |
| *doesn't want to travel far* | *in the town centre, a short walk from the station* |

> **À retenir** : la bonne réponse coche **tous** les critères. Souligne-les, vérifie-les un par un, et méfie-toi des textes qui en remplissent seulement deux.
`,
      textes: {
        activites: `**Weekend activities**

**The teenagers**
- **Nadia** wants to try something creative. She's never done it before, and she can only go out on Saturday afternoons.
- **Ben** loves animals and would like to help outdoors. He doesn't want to pay anything.
- **Chloé** enjoys science and wants to learn with her little brother, who is six.
- **Omar** is a good swimmer and wants a challenge. He's free on Sunday mornings.
- **Lily** wants to improve her photography. She prefers indoor activities because she hates cold weather.

**The activities**
- **Clay Café** : *No experience needed! Make your own cup or plate with our friendly teachers. Saturdays, 2–5 pm. £12 including materials.*
- **City Farm Volunteers** : *Feed the goats and clean the gardens with us every Sunday morning. Volunteers don't pay, and you get a free lunch.*
- **Lake Race** : *Our 2 km open-water swim is for strong swimmers only. Start: Sunday, 9 am. Wetsuits can be hired.*
- **Star Lab** : *Science shows and experiments for families — children of all ages welcome. Every Saturday at 11 am, in the Science Museum.*
- **Pixel Studio** : *Learn to take better pictures with your phone or camera. Indoor sessions in our warm studio, Sunday afternoons.*
- **Art in the Park** : *Painting for experienced artists. Bring your own materials. Saturday afternoons, outdoors if it's sunny.*
- **Robot Club** : *Build and program robots. For ages 12–16 only. Saturday mornings.*
- **Riverside Walks** : *Take photos of birds and plants on our three-hour walk along the river. Bring warm clothes!*`,
      },
      exercices: [
        { type: "qcm", texte: "activites", question: `**Reading Part 2.** Read about the five teenagers and the eight weekend activities.

Which activity would be most suitable for **Nadia**?`, choix: ["Clay Café", "Art in the Park", "Robot Club", "Pixel Studio", "Star Lab", "City Farm Volunteers", "Lake Race", "Riverside Walks"], reponse: 0, explication: "Nadia veut une activité **créative**, pour **débutants**, le **samedi après-midi**. *Clay Café* : *No experience needed* ✔, création de bols et d'assiettes ✔, samedi 14 h–17 h ✔. *Art in the Park* est aussi le samedi après-midi et créatif, mais **pour artistes confirmés** (*experienced*) : un critère manque." },
        { type: "qcm", texte: "activites", question: "**Reading Part 2 — same texts.** Which activity would be most suitable for **Ben**?", choix: ["Riverside Walks", "Star Lab", "Lake Race", "City Farm Volunteers", "Clay Café", "Pixel Studio", "Art in the Park", "Robot Club"], reponse: 3, explication: "*City Farm Volunteers* : nourrir les chèvres (**animaux** ✔), s'occuper des jardins (**dehors** ✔), *Volunteers don't pay* (**gratuit** ✔). *Riverside Walks* parle d'oiseaux et se passe dehors, mais il s'agit de prendre des photos, pas d'**aider**." },
        { type: "qcm", texte: "activites", question: "**Reading Part 2 — same texts.** Which activity would be most suitable for **Chloé**?", choix: ["Robot Club", "Pixel Studio", "Clay Café", "City Farm Volunteers", "Star Lab", "Lake Race", "Riverside Walks", "Art in the Park"], reponse: 4, explication: "*Star Lab* : sciences ✔, pour les familles, *children of all ages welcome* ✔ (son frère de six ans peut venir). *Robot Club* est scientifique mais réservé aux **12–16 ans** : le petit frère serait refusé." },
        { type: "qcm", texte: "activites", question: "**Reading Part 2 — same texts.** Which activity would be most suitable for **Omar**?", choix: ["City Farm Volunteers", "Riverside Walks", "Star Lab", "Clay Café", "Art in the Park", "Robot Club", "Pixel Studio", "Lake Race"], reponse: 7, explication: "*Lake Race* : 2 km de nage en eau libre *for strong swimmers only* (un **défi** pour un bon nageur ✔), **dimanche 9 h** ✔. *City Farm* a lieu le dimanche matin aussi, mais ne correspond pas au reste." },
        { type: "qcm", texte: "activites", question: "**Reading Part 2 — same texts.** Which activity would be most suitable for **Lily**?", choix: ["Riverside Walks", "Star Lab", "Art in the Park", "Pixel Studio", "Clay Café", "Lake Race", "City Farm Volunteers", "Robot Club"], reponse: 3, explication: "*Pixel Studio* : photographie ✔, *indoor sessions in our warm studio* ✔. *Riverside Walks* propose aussi de la photo, mais **dehors**, avec *Bring warm clothes!* : exactement ce que Lily veut éviter." },
        { type: "vf", question: "En Part 2, un texte qui correspond à deux des trois besoins d'une personne peut être la bonne réponse s'il n'y en a pas de meilleur.", reponse: false, explication: "Faux : il y a toujours **un texte qui correspond à tous les besoins**. Un texte qui n'en remplit que deux est un **piège** prévu par les auteurs de l'examen." },
        { type: "qcm", question: "A description says: *Max has never played the guitar.* Which phrase in a text matches this need?", choix: ["for advanced players", "suitable for complete beginners", "bring your own guitar", "join our band"], reponse: 1, explication: "*Has never played* = débutant complet : **suitable for complete beginners**. *Advanced players* dit le contraire ; apporter sa guitare ou rejoindre un groupe ne dit rien sur le niveau." },
        { type: "saisie", question: "Complète avec **un mot** : un texte dit *There's no ___* pour dire que c'est gratuit (sans frais). *There's no c___ for children under 12.*", reponses: ["charge"], explication: "*There's no charge* = c'est gratuit. Synonymes : *it's free*, *it doesn't cost anything*." },
        { type: "redaction", question: `Pour cette personne, souligne les trois besoins, puis explique en français pourquoi le texte 1 convient et pas le texte 2.
*Jamal wants to go on a cycling holiday with his parents in July. He'd like to stay somewhere quiet and he doesn't want to camp.*
- Texte 1 : *Green Hills Bike Tours — family cycling trips in a peaceful valley, June to August. Nights in small hotels.*
- Texte 2 : *Coast Cycle Camp — exciting rides for families every summer. Sleep under the stars in our big tents next to the busy beach.*`, corrige: `**Corrigé**

**Besoins de Jamal** : (1) des **vacances à vélo en famille** en **juillet** ; (2) un endroit **calme** ; (3) **pas de camping**.

- **Texte 1** : vélo en famille ✔, de juin à août donc juillet compris ✔, *peaceful valley* = calme ✔, *small hotels* = pas de tente ✔. **C'est la réponse.**
- **Texte 2** : vélo en famille l'été ✔, mais *sleep... in our big tents* = camping ✘, et *next to the busy beach* = un endroit animé ✘.

**Méthode** : un texte peut partager un ou deux points avec la personne ; seul celui qui coche **tous** les critères est juste. Les synonymes (*quiet* = *peaceful*) et les critères négatifs (*doesn't want to camp*) sont les clés.` },
      ],
    },

    // ───────────────────────────── 4. Reading Part 3
    {
      id: "reading-texte-long",
      titre: "Reading Part 3 : un texte long et l'avis de l'auteur",
      theme: "Reading",
      cours: `
## La tâche
Tu lis un **texte long** (environ 300 à 400 mots : un article, un témoignage, un récit de jeune) et tu réponds à **5 questions à 4 propositions**. Les questions suivent en général l'**ordre du texte**, sauf souvent la **dernière**, qui porte sur le **texte entier**.

## Les types de questions
| Type | Formulation fréquente | Ce qu'on attend |
|---|---|---|
| **Détail** | *What did Sara do after...?* | une information précise dans un paragraphe |
| **Sentiment, avis** | *How did Sara feel when...? What does Sara think about...?* | l'attitude, souvent exprimée par un adjectif ou un adverbe |
| **Inférence** | *What does Sara mean when she says...?* | comprendre ce qui n'est pas dit directement |
| **But de l'auteur** | *Why does the writer mention...?* | à quoi sert un exemple, une phrase |
| **Global** | *What would Sara write in her blog?* / *What is the best title?* | le sens général de tout le texte |

## La méthode
1. **Lis le texte en entier une première fois**, rapidement, pour comprendre de quoi il parle.
2. Lis la question 1 (sans les propositions) et **retrouve le passage** concerné.
3. **Relis ce passage attentivement**, formule la réponse dans ta tête, **puis** lis les quatre propositions.
4. Élimine les propositions **vraies mais qui ne répondent pas à la question**, et celles qui sont **dites dans le texte mais pour une autre personne ou un autre moment**.
5. Pour la question globale, pense au **message principal**, pas à un détail.

## Repérer l'opinion et le sentiment
| Mots | Ce qu'ils montrent |
|---|---|
| *at first, to begin with... but later* | un changement d'avis : la réponse est souvent l'avis **final** |
| *I expected... but actually* | une surprise : ce qu'on croyait était faux |
| *I must admit, to be honest* | un aveu, souvent un point négatif |
| *disappointed, relieved, proud, embarrassed, grateful* | les sentiments les plus testés |

| Adjectif | Sens |
|---|---|
| *relieved* | soulagé |
| *disappointed* | déçu |
| *embarrassed* | gêné, honteux |
| *grateful* | reconnaissant |
| *anxious* | inquiet |
| *amazed* | stupéfait |

> **À retenir** : retrouve le passage, formule ta réponse **avant** de lire les propositions, et vérifie qu'elle répond **exactement** à la question. Pour l'avis, attention au mot *but* : c'est souvent ce qui suit qui compte.
`,
      textes: {
        ines: `**My year without a smartphone**

*Last September, my parents made me a deal: if I could live without my smartphone for a whole school year, they would pay for a trip to London with my best friend. I said yes immediately, because I thought it would be easy. I was wrong.*

*The first month was terrible. My friends organised everything in group chats, so I often found out about parties after they had happened. I felt left out, and I nearly gave up twice. My mum lent me her old phone, which could only make calls and send texts, and that helped a little.*

*Then something changed. Without my phone, I started reading again: I finished twelve novels before Christmas. I also slept better, because I wasn't checking messages at midnight. My marks in maths went up, which surprised my teacher more than me.*

*The strangest thing was how my friends reacted. At first they laughed at me, but by spring two of them had decided to switch off their phones at weekends. “You look so relaxed,” one of them told me.*

*In June, my parents gave me my phone back, and of course we booked the London trip. I use my phone again now, but differently: I turn off notifications and I never take it to my bedroom. I don't think everyone needs to stop for a year, but I'd recommend trying it for a month. You might be surprised.*

*— Inès, 15*`,
      },
      exercices: [
        { type: "qcm", texte: "ines", question: `**Reading Part 3.** Read the text.
**Question 1.** Why did Inès accept her parents' deal?`, choix: ["She wanted to read more books.", "She was sleeping badly at the time.", "Her friends had already tried it.", "She didn't expect it to be difficult."], reponse: 3, explication: "*I said yes immediately, because I thought it would be easy. I was wrong.* : elle pensait que ce serait **facile**. La lecture et le sommeil sont des **conséquences** du défi, pas ses raisons ; les amis ont essayé **après** elle." },
        { type: "qcm", texte: "ines", question: "**Reading Part 3 — same text (Inès).**\n**Question 2.** How did Inès feel during the first month?", choix: ["proud of herself", "relaxed and happy", "bored with reading", "excluded by her friends"], reponse: 3, explication: "*I often found out about parties after they had happened. I felt left out* : elle se sentait **exclue**. *Relaxed* est le mot d'une amie, plus tard ; *proud* n'est pas dit." },
        { type: "qcm", texte: "ines", question: "**Reading Part 3 — same text (Inès).**\n**Question 3.** What does Inès say about her maths marks?", choix: ["Her teacher was more surprised by them than she was.", "They went up because she read more novels.", "They were the reason for her parents' deal.", "Her teacher didn't believe they were her own work."], reponse: 0, explication: "*My marks in maths went up, which surprised my teacher more than me* : le professeur est **plus surpris qu'elle**. Le texte ne relie pas les notes aux romans, et ne parle pas de doute du professeur." },
        { type: "qcm", texte: "ines", question: "**Reading Part 3 — same text (Inès).**\n**Question 4.** How did her friends' attitude change?", choix: ["They started to organise parties without group chats.", "They stopped laughing at her and lent her a phone.", "Some of them began to use their phones less.", "They asked her parents to make them the same deal."], reponse: 2, explication: "*At first they laughed at me, but by spring two of them had decided to switch off their phones at weekends* : certains **utilisent moins** leur téléphone. Le vieux téléphone vient de la **mère** d'Inès ; aucun ami ne demande le même marché." },
        { type: "qcm", texte: "ines", question: "**Reading Part 3 — same text (Inès).**\n**Question 5.** What would Inès say to a friend about the experience?", choix: ["“Everyone should live without a phone for a year — it's easy!”", "“It was hard at first, but a short break from your phone is worth trying.”", "“I'll never use a smartphone again after this year.”", "“It was a good idea only because I got a free trip.”"], reponse: 1, explication: "Question **globale** : difficile au début (*the first month was terrible*), mais elle conseille d'essayer **un mois** (*I'd recommend trying it for a month*). Elle dit le contraire de *everyone... for a year* et de *easy* ; elle utilise de nouveau son téléphone ; et elle cite beaucoup d'autres bienfaits que le voyage." },
        { type: "vf", question: "En Part 3, la dernière question porte souvent sur le sens général de tout le texte.", reponse: true, explication: "Vrai : les premières questions suivent l'ordre du texte, la dernière demande souvent l'**idée générale** ou ce que l'auteur pense globalement (titre, message, ce qu'il écrirait à un ami)." },
        { type: "saisie", question: "Écris l'adjectif anglais qui veut dire « soulagé ». *I was so ___ when I found my lost wallet.*", reponses: ["relieved"], explication: "**Relieved** = soulagé. Ne pas confondre avec *relaxed* (détendu)." },
        { type: "qcm", question: "*I expected the museum to be boring, but actually it was one of the best days of the trip.* What does the writer think of the museum?", choix: ["It was boring.", "He didn't go in the end.", "It was the best day of his life.", "It was better than he thought."], reponse: 3, explication: "*I expected... but actually* : il s'attendait à s'ennuyer, **mais en fait** c'était très bien. L'avis à retenir est celui qui suit *but actually*. *The best day of his life* est exagéré : *one of the best days of the trip*." },
        { type: "redaction", question: `Lis ce paragraphe et réponds en français : (1) Que ressent Tom au début et à la fin ? (2) Quels mots te le montrent ? (3) Propose une question de type Part 3 avec quatre propositions, dont une seule juste.
*When my parents told me we were moving to Scotland, I was furious. I didn't want to leave my friends, and I refused to talk to anyone for a week. Six months later, I must admit I was wrong. My new school is great, and I've joined a mountain bike club that I would never have found at home.*`, corrige: `**Corrigé**

1. Au début, Tom est **furieux** (il ne veut pas quitter ses amis) ; à la fin, il est **content** de sa nouvelle vie et reconnaît qu'il avait tort.
2. *furious*, *refused to talk to anyone* (colère) ; *I must admit I was wrong*, *great*, *a club that I would never have found* (changement d'avis positif). La locution *Six months later* marque le changement.
3. **Exemple de question** : *How does Tom feel about moving now?*
- *He is still angry with his parents.* (faux : c'était au début)
- *He is glad that it happened.* (**juste**)
- *He misses his mountain bike club at home.* (faux : le club est en Écosse)
- *He wants to go back to his old school.* (faux : *My new school is great*)

**Méthode** : en Part 3, distingue le sentiment **d'avant** et celui **d'après** ; les pièges reprennent souvent le premier.` },
      ],
    },

    // ───────────────────────────── 5. Reading Part 4
    {
      id: "reading-phrases-manquantes",
      titre: "Reading Part 4 : remettre les phrases manquantes",
      theme: "Reading",
      cours: `
## La tâche
On a retiré **5 phrases** d'un texte (souvent un récit à la première personne ou un article). Tu dois remettre chaque phrase à sa place, en choisissant parmi **8 phrases** : **3 ne servent pas**.

C'est la partie qui teste le mieux ta compréhension de la **logique d'un texte** : comment les phrases s'enchaînent, à quoi renvoient les pronoms, comment les idées s'opposent ou se suivent.

## La méthode
1. **Lis tout le texte** (avec les trous) pour comprendre l'histoire ou le sujet.
2. Pour chaque trou, lis attentivement **la phrase d'avant ET la phrase d'après**.
3. Cherche les **indices de lien** dans la phrase proposée et autour du trou.
4. Place d'abord les phrases dont tu es **sûr**, puis les autres.
5. **Relis le paragraphe entier** avec la phrase choisie : il doit couler naturellement.

## Les indices de lien
| Indice | Exemple | Ce qu'il faut vérifier |
|---|---|---|
| **Pronoms** : *he, she, it, they, this, that, these* | *This made me very proud.* | Ce que *this* reprend doit être juste avant. |
| **Connecteurs** : *but, however, so, because, then, after that, also* | *However, the weather changed.* | Une opposition avec la phrase d'avant. |
| **Temps** : *at first, later, the next day, finally* | *The next day, I tried again.* | Un événement précédent à reprendre. |
| **Répétition ou synonyme** | *The instructor... She...* | Un nom déjà cité. |
| **Ponctuation et paroles** | *“Everyone falls,” she said.* | Qui parle ? Qui est *she* ? |

>! **Exemple**
>! *My brother bought a second-hand bike. ___ He took it to a shop, and now it works perfectly.*
>! - *It didn't cost much, but the brakes didn't work.* → ✔ *the brakes didn't work* explique pourquoi il va au magasin ; *it* = le vélo.
>! - *He had wanted one for years.* → ✘ ne prépare pas la réparation.

## Les pièges
- Une phrase qui parle **du bon sujet** mais contredit la suite (le temps qu'il fait, un sentiment opposé).
- Un **pronom** qui ne renvoie à rien (*she* alors qu'aucune femme n'est citée avant).
- Un **connecteur** mal placé : *so* après une phrase qui n'est pas une cause.

> **À retenir** : la bonne phrase s'accorde **avec ce qui précède ET avec ce qui suit**. Vérifie les pronoms, les connecteurs et les indices de temps. Trois phrases sont des intrus.
`,
      textes: {
        surf: `**My first surfing lesson**

*Last summer, my aunt invited me to spend two weeks at her house in Cornwall, in the south-west of England. She lives in a small village next to one of the best surfing beaches in the country. (1) ___ I had never even stood on a surfboard before.*

*On my first morning, I joined a beginners' class at the local surf school. The instructor, Kerry, started by teaching us how to stay safe in the sea. (2) ___ Only then did she let us get into the water.*

*Standing up on the board was much harder than I had imagined. I fell off again and again, and by lunchtime my arms were aching. (3) ___ “Everyone falls,” she said. “That's how you learn.”*

*On the fourth day, something amazing happened. (4) ___ It lasted only a few seconds, but I felt fantastic.*

*By the end of the holiday, I could catch small waves on my own. (5) ___ Next summer I'm going back, and this time I want to try a bigger board.*

**The sentences**
- *So I was very excited, but also a little nervous.*
- *We practised on the sand for almost an hour, lying on our boards and jumping up.*
- *I was ready to give up, but Kerry wouldn't let me.*
- *I caught a wave and stood up all the way to the beach.*
- *My aunt even took a video of me to show my parents.*
- *The water was so warm that nobody needed a wetsuit.*
- *Unfortunately, it rained every day, so we stayed indoors.*
- *That evening, we went to a restaurant to celebrate my birthday.*`,
      },
      exercices: [
        { type: "qcm", texte: "surf", question: `**Reading Part 4.** Five sentences have been removed from the text. Choose the correct sentence for each gap. There are three extra sentences.

**Gap 1** : *...one of the best surfing beaches in the country. (1) ___ I had never even stood on a surfboard before.*`, choix: ["So I was very excited, but also a little nervous.", "We practised on the sand for almost an hour, lying on our boards and jumping up.", "I was ready to give up, but Kerry wouldn't let me.", "I caught a wave and stood up all the way to the beach.", "My aunt even took a video of me to show my parents.", "The water was so warm that nobody needed a wetsuit.", "Unfortunately, it rained every day, so we stayed indoors.", "That evening, we went to a restaurant to celebrate my birthday."], reponse: 0, explication: "*So* présente la **conséquence** de la phrase d'avant (une des meilleures plages : excitée), et *a little nervous* est expliqué par la phrase d'après (*I had never even stood on a surfboard*)." },
        { type: "qcm", texte: "surf", question: "**Reading Part 4 — same text (surfing).**\n**Gap 2** : *Kerry started by teaching us how to stay safe in the sea. (2) ___ Only then did she let us get into the water.*", choix: ["Unfortunately, it rained every day, so we stayed indoors.", "I caught a wave and stood up all the way to the beach.", "We practised on the sand for almost an hour, lying on our boards and jumping up.", "So I was very excited, but also a little nervous.", "That evening, we went to a restaurant to celebrate my birthday.", "I was ready to give up, but Kerry wouldn't let me.", "The water was so warm that nobody needed a wetsuit.", "My aunt even took a video of me to show my parents."], reponse: 2, explication: "*Only then* (seulement alors) suppose une étape **avant d'entrer dans l'eau** : l'entraînement **sur le sable**. Une phrase sur une vague réussie serait impossible avant d'être allé dans l'eau." },
        { type: "qcm", texte: "surf", question: "**Reading Part 4 — same text (surfing).**\n**Gap 3** : *I fell off again and again, and by lunchtime my arms were aching. (3) ___ “Everyone falls,” she said.*", choix: ["My aunt even took a video of me to show my parents.", "I was ready to give up, but Kerry wouldn't let me.", "That evening, we went to a restaurant to celebrate my birthday.", "The water was so warm that nobody needed a wetsuit.", "We practised on the sand for almost an hour, lying on our boards and jumping up.", "So I was very excited, but also a little nervous.", "Unfortunately, it rained every day, so we stayed indoors.", "I caught a wave and stood up all the way to the beach."], reponse: 1, explication: "Après les chutes et la fatigue, elle a envie d'**abandonner** ; *Kerry* dans la phrase choisie explique qui est *she* dans la phrase suivante, qui l'encourage (*That's how you learn*)." },
        { type: "qcm", texte: "surf", question: "**Reading Part 4 — same text (surfing).**\n**Gap 4** : *On the fourth day, something amazing happened. (4) ___ It lasted only a few seconds, but I felt fantastic.*", choix: ["The water was so warm that nobody needed a wetsuit.", "So I was very excited, but also a little nervous.", "That evening, we went to a restaurant to celebrate my birthday.", "I caught a wave and stood up all the way to the beach.", "Unfortunately, it rained every day, so we stayed indoors.", "My aunt even took a video of me to show my parents.", "I was ready to give up, but Kerry wouldn't let me.", "We practised on the sand for almost an hour, lying on our boards and jumping up."], reponse: 3, explication: "*Something amazing* annonce un exploit : **sa première vague debout**. *It lasted only a few seconds* reprend cet exploit (une vague dure quelques secondes). Une soirée au restaurant ne « dure » pas quelques secondes." },
        { type: "qcm", texte: "surf", question: "**Reading Part 4 — same text (surfing).**\n**Gap 5** : *By the end of the holiday, I could catch small waves on my own. (5) ___ Next summer I'm going back.*", choix: ["Unfortunately, it rained every day, so we stayed indoors.", "That evening, we went to a restaurant to celebrate my birthday.", "So I was very excited, but also a little nervous.", "We practised on the sand for almost an hour, lying on our boards and jumping up.", "I was ready to give up, but Kerry wouldn't let me.", "My aunt even took a video of me to show my parents.", "I caught a wave and stood up all the way to the beach.", "The water was so warm that nobody needed a wetsuit."], reponse: 5, explication: "*Even* (même) ajoute un fait qui montre sa réussite : sa tante la **filme** pour ses parents. Les intrus : *it rained every day, so we stayed indoors* contredit tout le récit ; *That evening* ne renvoie à aucun moment précis ; l'eau chaude en Cornouailles n'a aucun lien avec les phrases voisines." },
        { type: "vf", question: "En Part 4, il suffit de regarder la phrase qui précède le trou pour choisir la bonne réponse.", reponse: false, explication: "Faux : il faut vérifier la phrase **d'avant ET celle d'après**. Beaucoup d'intrus conviennent à l'une, mais pas à l'autre." },
        { type: "qcm", question: `Choose the sentence that fits the gap.
*Our school decided to stop selling bottled water. ___ Now everyone brings their own bottle and fills it at the new fountains.*`, choix: ["Water is very important for your health.", "Plastic bottles are cheaper in supermarkets.", "The canteen sells delicious pizzas on Fridays.", "At first, some students complained about it."], reponse: 3, explication: "*At first... complained* prépare *Now everyone brings their own bottle* : d'abord des plaintes, **maintenant** tout le monde s'y est fait. *It* renvoie à la décision de la phrase d'avant. Les autres phrases parlent d'eau ou de plastique, mais cassent l'enchaînement." },
        { type: "qcm", question: `Choose the sentence that fits the gap.
*I phoned my grandfather to ask about his first job. ___ He told me he had started working on a farm when he was only fourteen.*`, choix: ["She was very surprised.", "They worked very hard.", "It was raining all day.", "He was happy to tell me the whole story."], reponse: 3, explication: "*He* renvoie au grand-père, et *happy to tell me the whole story* annonce le récit qui suit. *She* et *They* ne renvoient à personne ; la pluie n'a aucun lien." },
        { type: "redaction", question: `Écris toi-même (en anglais) la phrase manquante, puis explique en français quels indices tu as utilisés.
*My little sister wanted a dog for years, but my parents always said no because our flat was too small. ___ The first thing my sister did was buy a dog bed.*`, corrige: `**Exemple de phrase** : *Then last year we moved to a house with a big garden, and they finally agreed.*

**Indices utilisés**
- La phrase d'avant donne l'**obstacle** : l'appartement est trop petit ; la phrase manquante doit **lever cet obstacle** (déménagement, maison avec jardin).
- La phrase d'après (*The first thing my sister did was buy a dog bed*) montre que les parents ont **dit oui** : il faut annoncer ce changement (*finally agreed*).
- *Then* et *finally* marquent la progression dans le temps ; *they* renvoie à *my parents*.

**Autres réponses possibles** : *When we moved to a bigger flat, they changed their minds.* / *But this summer they finally said yes.*` },
      ],
    },

    // ───────────────────────────── 6. Reading Part 5
    {
      id: "reading-cloze-vocabulaire",
      titre: "Reading Part 5 : texte à trous de vocabulaire",
      theme: "Reading",
      cours: `
## La tâche
Un texte court contient **6 trous**. Pour chacun, **4 mots** sont proposés. Les quatre ont souvent un sens **proche** : c'est la **construction** qui fait la différence. Cette partie teste surtout le **vocabulaire** : les mots qui vont ensemble (*collocations*), les verbes à particule (*phrasal verbs*), les prépositions après un mot, les connecteurs.

>! **Exemple**
>! *I'm really looking ___ to the holidays.*
>! A. forward — B. ahead — C. up — D. on
>! → **forward** : *look forward to* = attendre avec impatience. *Look up* (chercher un mot), *look on* (regarder sans agir) existent, mais pas dans ce sens.

## La méthode
1. **Lis tout le texte** une fois pour le sens général.
2. Pour chaque trou, regarde les mots **juste avant et juste après** : une préposition (*to, of, in*), un nom, *that*, un infinitif ?
3. Essaie chaque mot dans la phrase **à voix basse** : un seul « sonne » juste et respecte la construction.
4. Relis le texte complet à la fin.

## Les groupes de mots les plus testés
| Groupe | Exemples |
|---|---|
| *make / do / take / have* | *make a decision, make friends, do homework, do your best, take a photo, take part in, have fun, have a rest* |
| *say / tell / speak / talk* | *say something, tell someone, tell a story, speak English, talk to someone* |
| *look / see / watch* | *look at, see a film at the cinema, watch TV* |
| *borrow / lend* | *borrow something FROM someone, lend something TO someone* |
| *win / earn / gain* | *win a match, earn money, gain experience* |
| *journey / trip / travel* | *a long journey, a school trip, travel* = voyager (verbe) |
| Mot + préposition | *interested in, good at, afraid of, proud of, depend on, full of, famous for, keen on* |

## Les connecteurs
| Sens | Mots | Construction |
|---|---|---|
| opposition | *although, even though* | + sujet + verbe |
| opposition | *despite, in spite of* | + nom ou verbe en -ing |
| cause | *because* / *because of* | + phrase / + nom |
| but | *to, in order to, so that* | + verbe / + sujet + can |
| ajout | *as well as, besides* | + nom ou -ing |

> **À retenir** : les quatre mots ont un sens voisin ; c'est la **construction** (préposition, nom qui suit, phrase ou -ing) qui donne la bonne réponse. Apprends les mots **par groupes** : *make a mistake*, *take part in*, *interested in*.
`,
      textes: {
        bus: `**The library bus**

*In many villages in the north of Scotland, there is no library, so a library bus (1) ___ round once a week. The bus is (2) ___ with more than 3,000 books, from picture books to cookery books. People of all ages look (3) ___ to its visit. The driver, Moira, has (4) ___ the job for twenty years. She says the best part is (5) ___ to know everyone in the villages. “Some people come to (6) ___ books, but others just want a chat,” she says.*`,
      },
      exercices: [
        { type: "qcm", texte: "bus", question: `**Reading Part 5.** Read the text and choose the correct word for each gap.

**Gap 1** : *a library bus ___ round once a week.*`, choix: ["arrives", "reaches", "visits", "comes"], reponse: 3, explication: "**Come round** = passer (chez quelqu'un, dans un endroit). *Arrive* se construit avec *at/in*, *reach* et *visit* ont un complément direct (*visits the village*) et ne vont pas avec *round*." },
        { type: "qcm", texte: "bus", question: "**Reading Part 5 — same text (library bus).**\n**Gap 2** : *The bus is ___ with more than 3,000 books.*", choix: ["filled", "full", "busy", "crowded"], reponse: 0, explication: "**Filled with** = rempli de. *Full* se construit avec **of** (*full of books*) ; *crowded* s'emploie pour des **gens** (*crowded with tourists*) ; *busy* n'a pas ce sens." },
        { type: "qcm", texte: "bus", question: "**Reading Part 5 — same text (library bus).**\n**Gap 3** : *People of all ages look ___ to its visit.*", choix: ["ahead", "forward", "up", "after"], reponse: 1, explication: "**Look forward to** = attendre avec impatience. *Look after* = s'occuper de ; *look up* = chercher (un mot) ; *look ahead* = penser à l'avenir, sans *to*." },
        { type: "qcm", texte: "bus", question: "**Reading Part 5 — same text (library bus).**\n**Gap 4** : *Moira has ___ the job for twenty years.*", choix: ["made", "taken", "done", "played"], reponse: 2, explication: "**Do a job** = faire un travail. *Make* sert à fabriquer ou créer (*make a cake, make a mistake*) ; *take the job* veut dire accepter un poste, une action ponctuelle qui ne va pas avec *for twenty years*." },
        { type: "qcm", texte: "bus", question: "**Reading Part 5 — same text (library bus).**\n**Gap 5** : *The best part is ___ to know everyone.*", choix: ["knowing", "meeting", "getting", "making"], reponse: 2, explication: "**Get to know** someone = apprendre à connaître. Seul *getting* se construit avec *to know*." },
        { type: "qcm", texte: "bus", question: "**Reading Part 5 — same text (library bus).**\n**Gap 6** : *Some people come to ___ books.*", choix: ["lend", "rent", "hire", "borrow"], reponse: 3, explication: "On **emprunte** un livre à la bibliothèque : **borrow**. *Lend* = prêter (c'est la bibliothèque qui prête) ; *rent* et *hire* = louer, en payant." },
        { type: "saisie", question: "Complète avec la bonne préposition : *My brother is very interested ___ space and planets.*", reponses: ["in"], explication: "*Interested* **in** something. À retenir avec *good at, afraid of, proud of, keen on*." },
        { type: "qcm", question: "Choose the correct word: *___ the rain, we went for a long walk in the hills.*", choix: ["Although", "However", "Because", "Despite"], reponse: 3, explication: "Devant un **nom** (*the rain*) : **despite** (malgré). *Although* doit être suivi d'une phrase (*Although it was raining*) ; *however* commence une nouvelle phrase ; *because* donne une cause, ce qui n'a pas de sens ici." },
        { type: "qcm", question: "Choose the correct word: *Kim ___ a lot of money last summer working in her uncle's café.*", choix: ["won", "gained", "paid", "earned"], reponse: 3, explication: "On **gagne de l'argent en travaillant** : **earn**. *Win* = gagner un match ou un prix ; *gain* = acquérir (de l'expérience, du poids) ; *paid* = payé (dans l'autre sens)." },
        { type: "redaction", question: `Écris une phrase en anglais avec chacune de ces expressions, pour montrer que tu connais leur construction : *take part in*, *make a decision*, *borrow... from*, *be proud of*, *even though*.`, corrige: `**Exemples de phrases**

- *Our class is going to **take part in** a national science competition.*
- *It took me a week to **make a decision** about which school to choose.*
- *Can I **borrow** a charger **from** you? Mine is broken.* (avec la personne : *borrow something **from** someone*)
- *My parents were really **proud of** me when I passed my piano exam.*
- *We went swimming **even though** the water was cold.*

**Points de vigilance** : *take part **in*** (pas *at*) ; *make* (pas *take*) *a decision* ; *borrow from* = emprunter à, *lend to* = prêter à ; *proud **of*** ; *even though* + sujet + verbe.` },
      ],
    },

    // ───────────────────────────── 7. Reading Part 6
    {
      id: "reading-open-cloze",
      titre: "Reading Part 6 : l'open cloze (un mot par trou)",
      theme: "Reading",
      cours: `
## La tâche
Un texte court (souvent un e-mail ou un article) contient **6 trous**. Aucune proposition : tu écris **un seul mot** par trou. Cette partie teste surtout la **grammaire** : les petits mots qui tiennent la phrase. L'**orthographe** doit être correcte.

## Les mots qui manquent le plus souvent
| Catégorie | Mots |
|---|---|
| Auxiliaires | *am, is, are, was, were, do, does, did, have, has, had, will, would* |
| Prépositions | *in, on, at, for, since, to, of, with, by, from, about* |
| Pronoms et possessifs | *it, them, their, there, its, my, his* |
| Relatifs | *who, which, that, where, whose* |
| Articles et quantité | *a, an, the, some, any, much, many, few, little, enough* |
| Comparaison | *than, as, more, most, the* |
| Liens | *but, so, because, if, when, although, and, or* |
| Expressions | *as soon as, look forward to, used to, in order to, such a* |

## La méthode
1. **Lis tout le texte** sans rien écrire.
2. Pour chaque trou, demande-toi **quelle nature de mot** il manque : un verbe ? un mot qui relie ? une préposition ?
3. Regarde **la structure** : *___ you ever been...?* → il faut un auxiliaire (*Have*) ; *bigger ___ mine* → *than*.
4. Écris **un seul mot**, sans abréviation (pas de *can't* qui compte pour deux mots).
5. Relis la phrase complète.

>! **Exemples**
>! - *I've lived here ___ 2019.* → **since** (point de départ). *For* s'emploie avec une durée : *for six years*.
>! - *This is the café ___ we met.* → **where** (lieu).
>! - *It was ___ a good film that I watched it twice.* → **such** (*such a* + nom ; *so* + adjectif seul).
>! - *I'm looking forward ___ seeing you.* → **to** (+ verbe en -ing).

> **À retenir** : un seul mot, bien orthographié ; identifie la **nature** du mot qui manque grâce à ce qui l'entoure. Les erreurs fréquentes : *for/since*, *so/such*, *who/which*, *a/an/the*, les auxiliaires dans les questions.
`,
      textes: {
        lucas: `*Hi Max,*
*Sorry I haven't written for ages! I've been really busy (1) ___ we came back from holiday. My sister and I went to a summer camp (2) ___ was next to a lake. I'd never tried windsurfing before, but it was (3) ___ easier than I thought. (4) ___ you ever been to a camp like that? My mum says you can come and stay with us next summer. Let me know as (5) ___ as possible! I'm looking forward (6) ___ hearing from you.*
*Lucas*`,
      },
      exercices: [
        { type: "saisie", texte: "lucas", question: `**Reading Part 6.** Read the e-mail and write ONE word for each gap.

**Gap 1** : *I've been really busy ___ we came back from holiday.*`, reponses: ["since"], explication: "Avec le **present perfect** (*I've been*), le point de départ s'introduit par **since** : depuis que nous sommes rentrés." },
        { type: "saisie", texte: "lucas", question: "**Reading Part 6 — same e-mail (Lucas).**\n**Gap 2** : *We went to a summer camp ___ was next to a lake.*", reponses: ["which", "that"], explication: "Pronom relatif sujet pour une **chose** (*a summer camp*) : **which** ou **that**. *Who* est réservé aux personnes, *where* serait suivi d'un sujet (*where we did...*)." },
        { type: "saisie", texte: "lucas", question: "**Reading Part 6 — same e-mail (Lucas).**\n**Gap 3** : *It was ___ easier than I thought.*", reponses: ["much", "far", "even"], explication: "Pour renforcer un comparatif : **much** (beaucoup), **far** ou **even** (encore). *A lot easier* est juste aussi, mais compte deux mots. *Very easier* est impossible." },
        { type: "saisie", texte: "lucas", question: "**Reading Part 6 — same e-mail (Lucas).**\n**Gap 4** : *___ you ever been to a camp like that?*", reponses: ["have"], explication: "Question au **present perfect** avec *ever* et *been* : il manque l'auxiliaire **Have** (*Have you ever been...?*)." },
        { type: "saisie", texte: "lucas", question: "**Reading Part 6 — same e-mail (Lucas).**\n**Gap 5** : *Let me know as ___ as possible!*", reponses: ["soon"], explication: "*As soon as possible* = dès que possible. Structure *as + adjectif/adverbe + as*." },
        { type: "saisie", texte: "lucas", question: "**Reading Part 6 — same e-mail (Lucas).**\n**Gap 6** : *I'm looking forward ___ hearing from you.*", reponses: ["to"], explication: "*Look forward* **to** + verbe en -ing : *I'm looking forward to hearing from you* (formule de fin très utile en Writing)." },
        { type: "saisie", question: "Écris un seul mot : *It was ___ a hot day that we stayed by the pool all afternoon.*", reponses: ["such"], explication: "**Such a** + (adjectif) + nom : *such a hot day*. *So* s'emploie devant un adjectif seul : *It was so hot that...*" },
        { type: "saisie", question: "Écris un seul mot : *My grandfather ___ to live in Morocco when he was young, but now he lives in Lyon.*", reponses: ["used"], explication: "**Used to** + base verbale = une habitude ou une situation passée qui n'existe plus." },
        { type: "qcm", question: "In Part 6, a student writes *didn't* in one gap. What is the problem?", choix: ["Contractions are not allowed in English.", "It counts as two words (did + not).", "Only nouns can go in the gaps.", "Nothing: contractions are always the best answer."], reponse: 1, explication: "Une forme contractée comme *didn't* compte pour **deux mots** (*did not*) : la réponse est refusée. Il faut **un seul mot** par trou." },
        { type: "redaction", question: `Complète ce texte avec **un mot par trou**, puis justifie chaque réponse en français.
*My cousin Ana is the person (1) ___ taught me to cook. She has worked in a restaurant (2) ___ six years. Last week she showed me how to make paella, (3) ___ is a famous dish from Spain. It was (4) ___ best meal I've ever eaten!*`, corrige: `**Corrigé**

1. **who** (ou **that**) : pronom relatif sujet pour une **personne** (*the person*).
2. **for** : devant une **durée** (*six years*) avec le present perfect. (*Since* irait avec un point de départ : *since 2020*.)
3. **which** : relatif qui reprend une **chose**, après une virgule. Après une virgule, *that* est impossible.
4. **the** : superlatif (*the best meal*), toujours avec *the* ; *I've ever eaten* confirme le superlatif.

**Méthode** : regarde ce qui entoure le trou (une personne, une durée, une virgule, un superlatif) pour trouver la **nature** du mot qui manque.` },
      ],
    },

    // ───────────────────────────── 8. Writing Part 1
    {
      id: "writing-email",
      titre: "Writing Part 1 : répondre à un e-mail",
      theme: "Writing",
      cours: `
## La tâche
Tu reçois un **e-mail** (d'un ami anglais, d'un correspondant, d'un professeur, d'un organisateur) sur lequel quelqu'un a écrit des **notes** dans la marge (**quatre** dans les sujets officiels). Tu réponds en écrivant **environ 100 mots** et en traitant **toutes les notes**. Cette partie est **obligatoire**.

>! **Exemple de sujet**
>! *From: Jess — Subject: My visit*
>! *Hi! I'm so happy I'm coming to stay with you in May!* → note : **Great!**
>! *What would you like to do while I'm there?* → note : **Suggest...**
>! *Should I bring anything special?* → note : **Tell Jess**
>! *I don't eat meat. Is that a problem?* → note : **No, because...**

## Comment c'est noté
Chaque texte est noté sur **20** : quatre critères, chacun de 0 à 5.

| Critère | Ce que l'examinateur regarde |
|---|---|
| **Content** | As-tu traité **les quatre notes** ? Le lecteur a-t-il toutes les informations ? |
| **Communicative Achievement** | Le ton est-il adapté au lecteur (ami : familier ; professeur : poli) ? Le texte atteint-il son but ? |
| **Organisation** | Paragraphes, ouverture et fin, **connecteurs** variés (*because, so, however, also, first of all*). |
| **Language** | Vocabulaire **varié** et précis, grammaire juste, phrases **simples et complexes** (relatives, *if*, *when*...). |

> **À retenir** : **quatre notes = quatre idées développées**. Une note oubliée fait chuter la note *Content*. Vise **100 à 120 mots** : moins, tu développes trop peu ; beaucoup plus, tu risques des fautes et des hors-sujets.

## Le plan type (environ 100 mots)
1. **Ouverture** : *Hi Jess,* + une phrase de réaction (*Thanks for your email!*).
2. **Corps** : une ou deux phrases **par note**, dans l'ordre de l'e-mail.
3. **Fin** : une phrase de clôture (*I can't wait to see you!*), puis *Best wishes, / Love, / See you soon,* et ton prénom.

>! **Modèle (99 mots)**
>! *Hi Jess,*
>! *Thanks for your email! It's great news that you're coming in May.*
>! *There's lots to do here. If the weather's nice, we could go cycling along the river, and I'd love to show you the old town. On Saturday, there's a concert in the park, so let's go!*
>! *You should bring a raincoat, because it often rains in May, and some comfortable shoes for walking.*
>! *Don't worry about the food. My mum is a great cook and she makes delicious vegetarian dishes, so it's not a problem at all.*
>! *I can't wait to see you!*
>! *Love,*
>! *Camille*

## Phrases utiles
| Pour... | Phrases |
|---|---|
| réagir | *Thanks for your email. / It was great to hear from you. / That's fantastic news!* |
| proposer | *How about + -ing...? / We could... / Why don't we...? / Let's...* |
| conseiller | *You should... / It's a good idea to... / Don't forget to...* |
| expliquer | *That's because... / The reason is that...* |
| s'excuser | *I'm afraid I can't... / Unfortunately...* |
| préférer | *I'd rather... / I'd prefer to...* |
| finir | *Write back soon! / I'm looking forward to seeing you. / Best wishes,* |

## Le ton (registre)
- **À un ami** : *Hi Jess,* ; contractions (*I'm, don't*) ; *Love, / See you soon,*.
- **À un professeur ou un organisateur** : *Dear Mr Brown,* ; phrases complètes et polies (*I would like to ask...*, *Could you tell me...?*) ; *Best wishes, / Kind regards,* + prénom et nom.
`,
      exercices: [
        { type: "qcm", question: "In Writing Part 1, how many words should you write?", choix: ["about 25", "about 50", "about 100", "about 250"], reponse: 2, explication: "**Environ 100 mots** pour chaque partie du Writing au B1. (25 et 35 mots, c'était l'A2 Key.)" },
        { type: "vf", question: "Dans l'e-mail de la Part 1, tu peux choisir de traiter seulement trois des quatre notes si tu développes bien.", reponse: false, explication: "Faux : **les quatre notes** doivent être traitées. C'est le critère *Content* : un point oublié et la note baisse nettement." },
        { type: "qcm", question: "The note next to the e-mail says **Suggest...**. Which sentence answers it?", choix: ["I went to the beach last summer.", "The climbing centre is very big.", "I don't like climbing very much.", "How about going to the climbing centre on Saturday?"], reponse: 3, explication: "*Suggest* = faire une proposition : **How about** + verbe en -ing. Les autres phrases racontent, décrivent ou donnent un goût, mais ne proposent rien." },
        { type: "qcm", question: "You are writing to your new English teacher, Mrs Hall. Which opening and ending are best?", choix: ["Hi Mrs Hall! ... Love, Léo", "Dear Mrs Hall, ... Best wishes, Léo Martin", "Hello teacher, ... See ya!", "Dear Sir or Madam, ... Lots of love, Léo"], reponse: 1, explication: "Pour un adulte qu'on vouvoie : **Dear** + titre + nom, et une fin polie (*Best wishes* ou *Kind regards*) avec prénom et nom. *Love* et *See ya* sont pour les amis ; *Dear Sir or Madam* s'utilise quand on ne connaît pas le nom." },
        { type: "saisie", question: "Complète avec la bonne forme du verbe *see* : *I'm really looking forward to ___ you next month.*", reponses: ["seeing"], explication: "*Look forward to* + **verbe en -ing** : *to seeing*. Erreur très fréquente : *to see*." },
        { type: "qcm", question: "Which sentence uses a **linking word** correctly to give a reason?", choix: ["I can't come, so I have a dentist appointment.", "I can't come because of I have a dentist appointment.", "I can't come because I have a dentist appointment.", "I can't come although I have a dentist appointment."], reponse: 2, explication: "**Because** + sujet + verbe donne une cause. *Because of* doit être suivi d'un **nom** (*because of my appointment*) ; *so* introduit une conséquence ; *although* une opposition." },
        { type: "vf", question: "Pour obtenir une bonne note en Language, il vaut mieux employer quelques phrases complexes (relatives, *if*, *when*) plutôt que seulement des phrases très courtes.", reponse: true, explication: "Vrai : au B1, l'examinateur valorise un vocabulaire varié et **des phrases simples ET complexes**. Exemple : *If the weather's nice, we could go to the beach, which is only ten minutes from my house.*" },
        { type: "redaction", question: `**Writing Part 1.** Read this e-mail from your English friend Ollie and the notes you have made. Write your e-mail to Ollie using **all the notes**. Write **about 100 words**.

*Hi!*
*Guess what? My school is organising a trip to France in June, and we're going to visit your town!* → note : **Brilliant!**
*We'll have a free afternoon on the Saturday. What could we do together?* → note : **Suggest...**
*What's the weather usually like in June?* → note : **Tell Ollie**
*Also, could you recommend a good present to bring back for my parents?* → note : **Yes, ...**
*Ollie*`, corrige: `**Model answer (101 words)**

*Hi Ollie,*

*That's brilliant news! I'm so happy you're coming to my town in June.*

*On Saturday afternoon, why don't we go to the market in the old town? It's really lively, and there's a fantastic ice cream shop next to it. After that, we could take a boat trip on the river.*

*In June it's usually warm and sunny, but it sometimes rains, so bring a light jacket just in case.*

*For your parents, I'd recommend some local cheese or a box of chocolates from the bakery near the station. They're delicious!*

*I can't wait to see you!*

*Love,*
*Inès*

**Critères (sur 20)**
- **Content (5)** : les quatre notes sont traitées dans l'ordre (réaction, propositions, météo, cadeau).
- **Communicative Achievement (5)** : ton amical, enthousiaste et naturel pour un ami ; Ollie a toutes les infos.
- **Organisation (5)** : un paragraphe par note ; connecteurs *After that, but, so, just in case*.
- **Language (5)** : *why don't we...?*, *we could*, *I'd recommend*, *just in case*, vocabulaire précis (*lively, boat trip, light jacket*).` },
        { type: "redaction", question: `**Writing Part 1.** You have received this e-mail from Mr Patel, the organiser of a summer sports camp in England. Write your reply using **all the notes**. Write **about 100 words**.

*Dear student,*
*Thank you for joining our summer camp in August.* → note : **Pleased**
*Which two sports would you like to try?* → note : **Choose and explain why**
*Do you have any health problems we should know about?* → note : **Tell him**
*Is there anything you would like to ask us?* → note : **Ask about...**
*Best wishes, Mr Patel*`, corrige: `**Model answer (107 words)**

*Dear Mr Patel,*

*Thank you for your email. I'm very pleased to be coming to the camp in August.*

*I would like to try sailing and tennis. I have never been sailing, but I live far from the sea, so this is a great opportunity. I already play tennis at school and I would like to improve.*

*I don't have any serious health problems, but I'm allergic to nuts, so please tell the kitchen staff.*

*Could you tell me how many students there will be in each group? I would also like to know if I need to bring my own tennis racket.*

*Best wishes,*
*Hugo Lefèvre*

**Ce qui compte ici**
- **Registre poli** (on écrit à un organisateur adulte) : *Dear Mr Patel*, *I would like*, *Could you tell me...?*, pas de *Hi* ni de *Love*.
- **Les quatre notes** : plaisir, deux sports **justifiés**, santé, une question (ici deux).
- **Langue variée** : present perfect (*I have never been*), *so* et *but*, question indirecte (*how many students there will be* : pas d'inversion).` },
      ],
    },

    // ───────────────────────────── 9. Writing Part 2 : article
    {
      id: "writing-article",
      titre: "Writing Part 2 : écrire un article",
      theme: "Writing",
      cours: `
## La tâche
En Part 2, tu **choisis** entre deux sujets : un **article** ou une **histoire**. Pour l'article, on te montre une **annonce** d'un magazine ou d'un site pour ados, avec des **questions**. Tu écris **environ 100 mots** en répondant à ces questions et en donnant **ton avis**.

>! **Exemple de sujet**
>! *You see this announcement on an English website for teenagers.*
>! **Articles wanted! — The best day of the week**
>! *Which is your favourite day of the week? Why? What do you usually do on that day?*
>! *Write an article answering these questions. The best articles will appear on our website.*

## Ce qui fait un bon article
| Élément | Comment faire |
|---|---|
| **Un titre** | court et accrocheur : *Why I love Saturdays* |
| **Une ouverture qui parle au lecteur** | une question : *Do you love weekends as much as I do?* |
| **Toutes les questions traitées** | une réponse développée (avec exemple) pour chaque question |
| **Ton avis** | *In my opinion..., I think..., For me, the best thing is...* |
| **Une conclusion** | une phrase qui résume ou interpelle : *What about you?* |
| **Un ton vivant** | adjectifs variés, exemples personnels, un peu d'humour |

La notation utilise les **mêmes quatre critères** que l'e-mail (Content, Communicative Achievement, Organisation, Language, sur 20). Pour l'article, *Communicative Achievement* récompense un texte qui **intéresse** le lecteur.

>! **Modèle (103 mots)**
>! **Why I love Saturdays**
>! *Do you love weekends as much as I do? For me, the best day of the week is definitely Saturday.*
>! *First of all, there's no school, so I can sleep until ten o'clock! After a big breakfast, I usually play basketball with my friends at the sports centre. In the afternoon, we often go into town or watch a film together.*
>! *But the main reason I love Saturdays is that the whole weekend is still ahead of me. On Sundays, I start thinking about homework, which isn't much fun.*
>! *So what about you? Which day do you like best?*

## Phrases utiles
| Pour... | Phrases |
|---|---|
| accrocher | *Have you ever...? / Imagine... / Do you...?* |
| donner son avis | *In my opinion, / I really think that / For me, / Personally,* |
| ajouter | *What's more, / Also, / Another reason is that* |
| opposer | *However, / On the other hand, / Although* |
| conclure | *All in all, / To sum up, / So, what about you?* |

> **À retenir** : un **titre**, une **ouverture qui interpelle**, **toutes les questions** traitées avec des exemples, **ton avis**, une **conclusion**. Écris pour un lecteur de ton âge : un texte vivant vaut mieux qu'une liste de réponses.
`,
      exercices: [
        { type: "qcm", question: "In Writing Part 2, how do you choose your task?", choix: ["You must write both the article and the story.", "The examiner chooses for you.", "You write the story only if you finish the e-mail early.", "You choose to write either the article or the story."], reponse: 3, explication: "En Part 2, tu **choisis un seul sujet** : l'article **ou** l'histoire. Choisis celui pour lequel tu as le plus d'idées et de vocabulaire." },
        { type: "vf", question: "Un article de la Part 2 doit commencer par *Dear Sir or Madam*.", reponse: false, explication: "Faux : ce n'est pas une lettre. Un article commence par un **titre**, puis une ouverture qui accroche le lecteur, souvent une question." },
        { type: "qcm", question: "Which is the best opening sentence for an article called *My favourite place*?", choix: ["My favourite place is the beach.", "In this article I will write about my favourite place.", "Have you ever found a place where you feel completely free?", "The beach. It is nice."], reponse: 2, explication: "Une **question au lecteur** donne envie de lire. *In this article I will write about...* est une formule scolaire et plate ; *The beach. It is nice.* est trop pauvre pour le B1 ; la phrase sur la plage est juste, mais sans effet." },
        { type: "saisie", question: "Complète avec un mot pour ajouter un argument : *The park is close to my house. ___'s more, it's free!*", reponses: ["what"], explication: "**What's more** = de plus, en plus. Autres façons d'ajouter : *Also, Besides, Another reason is that...*" },
        { type: "qcm", question: "Which sentence gives an opinion **and** a reason?", choix: ["I play the guitar.", "Music is a subject.", "There are many music schools in my town.", "I think music lessons should be free, because everyone should have the chance to learn."], reponse: 3, explication: "*I think... because...* : un **avis** + une **justification**. C'est ce que l'examinateur attend dans un article. Les autres phrases donnent seulement des faits." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["Although it was raining, but we played outside.", "Despite it was raining, we played outside.", "Although it was raining, we played outside.", "However it was raining, we played outside."], reponse: 2, explication: "*Although* + phrase, **sans** *but* dans la même phrase. *Despite* doit être suivi d'un nom ou d'un -ing (*Despite the rain*). *However* s'emploie en début de nouvelle phrase, suivi d'une virgule." },
        { type: "vf", question: "Dans un article, il faut répondre à toutes les questions de l'annonce.", reponse: true, explication: "Vrai : les questions de l'annonce sont l'équivalent des notes de l'e-mail. Une question oubliée fait baisser la note *Content*." },
        { type: "redaction", question: `**Writing Part 2 (article).** You see this announcement in an English-language magazine for teenagers.

**Articles wanted! — A person I admire**
*Who is a person you really admire? What has this person done? What can we learn from him or her?*
*Write an article answering these questions.*

Write **about 100 words**.`, corrige: `**Model answer (106 words)**

**My grandmother, my hero**

*Is there someone in your life who always makes you feel better? For me, it's my grandmother, Lucie.*

*When she was young, she wanted to become a doctor, but her family didn't have enough money for university. So she worked in a shop during the day and studied at night. At the age of thirty, she finally became a nurse, and she worked in a hospital for thirty-five years.*

*I think she teaches us that you should never give up, even when life is difficult. She also shows that it's never too late to follow your dreams.*

*Who do you admire most?*

**Pourquoi ce texte réussit**
- **Titre**, question d'ouverture, question finale au lecteur.
- **Les trois questions** : qui (*my grandmother*), ce qu'elle a fait (études, infirmière), la leçon (*never give up*).
- **Langue B1** : prétérit, *when*, *so*, *even when*, *it's never too late to...*` },
        { type: "redaction", question: `**Writing Part 2 (article).** You see this announcement on a school website.

**Can you live without the internet?**
*How much time do you spend online? What would you miss most if you had no internet for a week? Would anything be better?*
*Write an article answering these questions.*

Write **about 100 words**.`, corrige: `**Model answer (101 words)**

**A week offline? No way!**

*How many hours do you spend online every day? I must admit that I spend about three hours on my phone, mostly chatting with friends and watching videos.*

*If I had no internet for a week, I would miss my group chats most. My friends organise everything online, so I would feel left out.*

*However, some things would probably be better. I would sleep more, because I often stay up late watching videos, and I might read the books that are waiting on my shelf.*

*So could I do it? Maybe... but only for one week!*

**Points forts**
- **Conditionnel 2** (*If I had..., I would miss*) pour une situation imaginaire, exactement ce que demande la question.
- Connecteurs **However, because, so** ; aveu (*I must admit*) ; ton vivant et humoristique.
- Les trois questions sont traitées dans l'ordre, chacune dans un paragraphe.` },
      ],
    },

    // ───────────────────────────── 10. Writing Part 2 : story
    {
      id: "writing-story",
      titre: "Writing Part 2 : écrire une histoire",
      theme: "Writing",
      cours: `
## La tâche
Si tu choisis l'histoire, on te donne **la première phrase** : ton récit doit **commencer exactement par cette phrase**. Tu écris **environ 100 mots**.

>! **Exemple de sujet**
>! *Your English teacher has asked you to write a story.*
>! *Your story must begin with this sentence:*
>! **When Max opened the door, he couldn't believe his eyes.**
>! *Write your story.*

## Ce qui fait une bonne histoire
| Élément | Comment faire |
|---|---|
| **Respecter la première phrase** | même personnage (*Max*, *he*), même temps (prétérit), même situation |
| **Un début, un problème, une fin** | que voit Max ? que se passe-t-il ? comment ça finit ? |
| **Les temps du récit** | prétérit (actions), prétérit continu (décor, action en cours), *past perfect* (ce qui s'est passé avant) |
| **Des connecteurs de temps** | *At first, Then, Suddenly, After a while, In the end* |
| **Des sentiments** | *terrified, delighted, relieved, embarrassed* |
| **Un peu de dialogue** | *“Who's there?” he whispered.* |
| **Une vraie fin** | une surprise, une leçon ou un retour au calme |

## Les temps du récit
>! *It **was raining** and Max **was walking** home.* → décor (prétérit continu)
>! *Suddenly, he **heard** a strange noise.* → action (prétérit)
>! *He **had forgotten** his keys at school.* → avant le moment du récit (*past perfect* = *had* + participe passé)

>! **Modèle (101 mots)**
>! *When Max opened the door, he couldn't believe his eyes. His living room was full of balloons, and all his friends were standing there in silence.*
>! *“Surprise!” they shouted. Max had completely forgotten that it was his fifteenth birthday. He had spent the whole week studying for his exams.*
>! *At first, he felt embarrassed, because he was still wearing his old school uniform. But then his sister gave him a box. Inside, there was a ticket for a concert by his favourite band.*
>! *In the end, it was the best birthday of his life, and he forgot all about the exams!*

## Les erreurs à éviter
- Changer le personnage ou le temps de la première phrase.
- Raconter une simple liste d'actions (*and then... and then...*) : varie les connecteurs.
- Oublier la **fin** parce qu'on n'a plus de place : prévois-la dès le brouillon.

> **À retenir** : commence **par la phrase imposée**, raconte au **prétérit** (avec du prétérit continu et du *past perfect*), varie les connecteurs de temps, ajoute des sentiments et un peu de dialogue, et termine vraiment l'histoire.
`,
      exercices: [
        { type: "vf", question: "Dans l'histoire de la Part 2, tu peux changer un peu la première phrase imposée si cela t'arrange.", reponse: false, explication: "Faux : l'histoire doit commencer **exactement** par la phrase donnée, avec le même personnage et le même temps." },
        { type: "qcm", question: "Choose the correct tense: *I ___ along the beach when I saw a strange light in the sky.*", choix: ["walked", "was walking", "have walked", "am walking"], reponse: 1, explication: "Une action **en cours** (le décor) interrompue par une action courte (*I saw*) : **prétérit continu** *was walking*." },
        { type: "qcm", question: "Choose the correct tense: *When we arrived at the cinema, the film ___ already ___.*", choix: ["has / started", "was / starting", "did / start", "had / started"], reponse: 3, explication: "Le film a commencé **avant** notre arrivée : *past perfect* **had started**. *Already* renforce cette idée d'antériorité." },
        { type: "saisie", question: "Écris le *past perfect* de *forget* avec *she* : *She realised that she ___ ___ her phone on the bus.* (deux mots)", reponses: ["had forgotten", "'d forgotten"], explication: "*Past perfect* = **had** + participe passé : *forget, forgot, **forgotten*** → *had forgotten*." },
        { type: "qcm", question: "Which word is best to introduce something unexpected in a story?", choix: ["Suddenly,", "Firstly,", "In my opinion,", "To sum up,"], reponse: 0, explication: "**Suddenly** (soudain) introduit un événement inattendu. *Firstly* et *To sum up* organisent des arguments ; *In my opinion* donne un avis : ils conviennent à un article, pas à un récit." },
        { type: "saisie", question: "Écris l'adjectif anglais qui veut dire « terrifié » (plus fort que *scared*).", reponses: ["terrified"], explication: "**Terrified** = terrifié. Varier les adjectifs de sentiment (*terrified, delighted, relieved, amazed*) fait monter la note *Language*." },
        { type: "qcm", question: "The first sentence is: *Emma knew it was going to be a strange day.* Which second sentence continues best?", choix: ["I woke up late and missed the bus.", "Emma will go to school tomorrow.", "When she woke up, her cat was sitting on her head and singing.", "Strange days are very common in England."], reponse: 2, explication: "Il faut garder **le personnage** (Emma, *she*), **le temps** (prétérit) et le thème (une journée étrange). *I woke up* change de narrateur ; *will go* change de temps ; la dernière phrase quitte l'histoire." },
        { type: "redaction", question: `**Writing Part 2 (story).** Your English teacher has asked you to write a story.
Your story must begin with this sentence:
**I was halfway up the mountain when the weather suddenly changed.**
Write your story in **about 100 words**.`, corrige: `**Model answer (102 words)**

*I was halfway up the mountain when the weather suddenly changed. Dark clouds were coming towards us, and within minutes it started to snow.*

*My friend Tom and I had planned to reach the top by midday, but now we could hardly see the path. “We have to go back,” I said. Tom looked terrified.*

*Slowly, we walked down, holding hands so that we didn't lose each other. After an hour, we saw a small hut. Inside, an old shepherd gave us hot tea and blankets.*

*When the storm finally stopped, he showed us the way home. We never forgot his kindness.*

**Points forts**
- La phrase imposée est reprise **mot pour mot** ; même narrateur (*I*).
- **Temps du récit** : prétérit continu (*were coming*), *past perfect* (*had planned*), prétérit.
- Connecteurs : *within minutes, Slowly, After an hour, When... finally* ; dialogue ; sentiments ; une **vraie fin**.` },
        { type: "redaction", question: `**Writing Part 2 (story).** Your story must begin with this sentence:
**The message on my phone said: “Meet me at the station at 6 o'clock. Don't be late!”**
Write your story in **about 100 words**.`, corrige: `**Model answer (98 words)**

*The message on my phone said: “Meet me at the station at 6 o'clock. Don't be late!” It was from my cousin Lisa, who lives in London. I hadn't seen her for two years.*

*I ran all the way to the station and arrived at five to six. There were people everywhere, but I couldn't see Lisa. Suddenly, someone covered my eyes.*

*“Guess who?” said a voice. I turned round and there she was, with a huge suitcase. She had decided to spend the holidays with us and nobody had told me!*

*It was the best surprise ever.*

**Points forts** : la phrase est reprise exactement ; relative (*who lives in London*) ; *past perfect* (*hadn't seen, had decided, had told*) ; suspense (*Suddenly*), dialogue, chute.` },
      ],
    },

    // ───────────────────────────── 11. Listening
    {
      id: "listening",
      titre: "Listening : les quatre parties et les stratégies",
      theme: "Listening",
      cours: `
## L'épreuve
Environ **30 minutes** (dont **6 minutes** à la fin pour reporter les réponses, en version papier), **4 parties, 25 questions**. Chaque enregistrement est entendu **deux fois**.

| Partie | Document | Questions |
|---|---|---|
| **Part 1** | 7 courts extraits (monologues ou dialogues) | 7 questions : choisir la bonne **image** parmi 3 |
| **Part 2** | 6 courts dialogues | 6 questions à 3 propositions : **idée générale**, sentiment, avis, but |
| **Part 3** | un **monologue** (annonce, présentation, émission de radio) | compléter **6 trous** dans des notes : un mot, un nombre, une date, une heure |
| **Part 4** | une **interview** (souvent un jeune ou un spécialiste) | 6 questions à 3 propositions : détail, attitude, opinion |

Dans l'appli, pas d'audio : on s'entraîne sur des **transcriptions**. Fais-les-toi **lire à voix haute** (deux fois, sans regarder), ou lis-les **une seule fois** et réponds sans revenir en arrière. Pour la Part 1, les images sont **décrites avec des mots**.

## Avant l'écoute
- Utilise le temps de lecture pour lire **la question et toutes les propositions**.
- Part 1 : regarde les **différences** entre les trois images (lieu, objet, heure, nombre).
- Part 3 : devine le **type de mot** pour chaque trou (un nom ? un nombre ? un jour ?). Souvent, les mots écrits sur les notes sont **dans le même ordre** que dans l'enregistrement.
- Part 4 : souligne les **mots-clés** de chaque question.

## Pendant l'écoute : les pièges
Les enregistrements citent souvent **les trois propositions**, mais une seule répond à la question.

>! *What did the girl buy?*
>! *“I wanted a new jacket, but they didn't have my size. The scarves were nice but expensive, so in the end I got some gloves.”*
>! → **des gants**. La veste et l'écharpe sont citées, mais pas achetées.

| Signal | Ce qu'il annonce |
|---|---|
| *but, actually, in fact, in the end* | un changement : la vraie réponse suit souvent |
| *I'd hoped / I expected... but* | ce qui était prévu n'a pas eu lieu |
| *I wasn't sure at first, but now...* | un avis qui change : on demande souvent l'avis **actuel** |
| *What I really liked / The best thing was...* | l'opinion principale |

## Part 3 : compléter des notes
- Écris **un ou deux mots**, ou un nombre, **exactement ceux entendus** : l'orthographe compte.
- Les noms peu courants sont **épelés** ; les mots simples (*kitchen, Tuesday*) doivent être bien écrits.
- La phrase des notes **n'est pas mot pour mot** l'enregistrement : *Visitors can see...* ↔ *you'll be able to look at...*

## Part 4 : l'interview
- Les questions suivent l'ordre de l'interview.
- On teste les **opinions** et les **raisons** : *Why did Sam start...?* *What does Sam say about...?*
- Écoute jusqu'à la fin de la réponse : la première idée entendue est souvent un piège.

> **À retenir** : lis tout avant d'écouter, devine le type de réponse, méfie-toi des propositions toutes citées, écoute ce qui suit *but* ou *in the end*, et utilise la **deuxième écoute pour vérifier**.
`,
      textes: {
        hillside: `**Listening Part 3 — transcript** (fais-le-toi lire, ou lis-le une seule fois)

*Hello everyone, and welcome to the Hillside Wildlife Centre. We'll start with the birds of prey, and at eleven o'clock you can watch our keepers feeding the otters. Please don't feed the animals yourselves. Lunch is at the picnic area beside the lake, and if it rains, you can eat in the visitor centre. The whole tour lasts about ninety minutes, and the gift shop closes at four.*`,
        ruby: `**Listening Part 4 — transcript of the interview** (fais-le-toi lire, ou lis-le une seule fois)

*Interviewer : Ruby, you're fifteen and you've just won a national cooking competition. How did you start cooking?*

*Ruby : Well, people think my parents taught me, but they're both terrible cooks! Actually, it was my grandad. Every Sunday he let me help him make lunch, and by the time I was ten I was cooking for the whole family.*

*Interviewer : What was the hardest part of the competition?*

*Ruby : Not the cooking itself — I'm used to that. And the judges were really kind. What I found difficult was having cameras around me all the time. I kept looking at them instead of at my food!*`,
      },
      exercices: [
        { type: "qcm", question: `**Listening Part 1 (transcript).** *What time will the friends meet?*
*Boy : The film starts at half past seven, doesn't it? Girl : Yes, but I want to get popcorn first. Let's meet at quarter past seven. Boy : Hmm, the bus gets in at ten past. OK, quarter past it is.*
Pictures : a clock showing 7.10 / a clock showing 7.15 / a clock showing 7.30.`, choix: ["7.10", "7.15", "7.30"], reponse: 1, explication: "Ils se retrouvent à **sept heures et quart** (*quarter past it is*). 7.30 est l'heure du film, 7.10 celle du bus : les trois heures sont citées." },
        { type: "qcm", question: `**Listening Part 1 (transcript).** *Where did the boy leave his sports bag?*
*Mum : Have you got your sports bag? Boy : I thought I'd left it in the car, but it's not there. Oh wait — I remember, I took it into the kitchen to clean my boots. Mum : Well, it's not in the kitchen now. Your sister put it in the hall, next to the door.*
Pictures : a car / a kitchen / a hall with a front door.`, choix: ["in the car", "in the kitchen", "in the hall"], reponse: 2, explication: "Le sac est maintenant **dans l'entrée** (*Your sister put it in the hall*). Il l'avait posé dans la cuisine, mais on demande où il est **maintenant**, d'après le dernier renseignement." },
        { type: "qcm", question: `**Listening Part 2 (transcript).** *You hear two friends talking about a school play. How does the girl feel about it?*
*Boy : Are you nervous about tomorrow? Girl : I was last week, when I kept forgetting my lines. But we've practised so much that now I just can't wait to get on stage!*`, choix: ["worried that she will forget her lines", "excited about performing", "disappointed with her part"], reponse: 1, explication: "*Now I just can't wait to get on stage* = elle est **impatiente**, enthousiaste. L'inquiétude, c'était **la semaine dernière** : le *But* marque le changement." },
        { type: "qcm", question: `**Listening Part 2 (transcript).** *You hear a boy talking to his friend about a new café. What does he think of it?*
*Girl : Was the new café good? Boy : Well, the cakes were amazing, I have to say. But we waited forty minutes for them, and the staff didn't even say sorry. I won't go back for a while.*`, choix: ["The service needs to improve.", "The cakes were too expensive.", "It is the best café in town."], reponse: 0, explication: "Il loue les gâteaux, **mais** critique l'attente et le personnel : *I won't go back for a while*. Son avis principal porte sur le **service**. Le prix n'est pas cité." },
        { type: "saisie", texte: "hillside", question: `**Listening Part 3 (transcript).** Complete the notes.
Notes : **The otters are fed at ___ o'clock.**`, reponses: ["11", "eleven", "11.00", "11:00", "11 am", "11am", "11 a.m.", "11 o'clock", "eleven o'clock", "at 11", "at eleven", "at 11 o'clock", "at eleven o'clock"], explication: "*At eleven o'clock you can watch our keepers feeding the otters* → **11**. Les notes reformulent : *are fed* ↔ *feeding*." },
        { type: "saisie", texte: "hillside", question: "**Listening Part 3 — same transcript (Hillside Wildlife Centre).**\nNotes : **If the weather is bad, visitors can have lunch in the ___.** (two words)", reponses: ["visitor centre", "visitor center", "visitors centre", "visitors' centre", "visitor's centre", "visitors center", "visitor's center", "visitors' center"], explication: "*If it rains, you can eat in the visitor centre* → **visitor centre**. Les notes disent *If the weather is bad* pour *if it rains* et *have lunch* pour *eat*." },
        { type: "saisie", texte: "hillside", question: "**Listening Part 3 — same transcript (Hillside Wildlife Centre).**\nNotes : **The tour takes about ___ minutes.**", reponses: ["90", "ninety"], explication: "*The whole tour lasts about ninety minutes* → **90**. *Takes* reformule *lasts*. Attention : *ninety* (90) ≠ *nineteen* (19)." },
        { type: "qcm", texte: "ruby", question: `**Listening Part 4 (transcript, interview).** Question 1.
Who taught Ruby to cook?`, choix: ["her parents", "her grandfather", "a teacher at school"], reponse: 1, explication: "*Actually, it was my grandad* : c'est son **grand-père**. Les parents sont cités pour être écartés (*they're both terrible cooks*) : c'est le piège." },
        { type: "qcm", texte: "ruby", question: `**Listening Part 4 — same interview (Ruby).** Question 2.
What did Ruby find most difficult?`, choix: ["being filmed while she cooked", "talking to the judges", "cooking in a short time"], reponse: 0, explication: "*What I found difficult was having cameras around me* : être **filmée**. Elle dit le contraire pour la cuisine (*I'm used to that*) et les juges (*really kind*)." },
        { type: "redaction", question: `Prépare une Part 3 : lis la transcription, puis complète les notes (un ou deux mots, ou un nombre) et explique les pièges.
*“Good morning. This is an announcement about the school summer fair. It will take place on Saturday the twelfth of July, not on the fifth as we said before. It starts at ten and finishes at four. There will be games, a cake stall and a second-hand book sale. All the money will go to the local animal hospital. If you'd like to help, please speak to Mr Okafor, that's O-K-A-F-O-R, in room 14.”*
Notes : Date : Saturday ___ July / Finishes at : ___ / Money will go to : the local ___ / Contact : Mr ___ / Room : ___`, corrige: `**Answers**

- **Date** : Saturday **12th** July (*the twelfth*). Piège : le 5 était l'ancienne date (*not on the fifth as we said before*).
- **Finishes at** : **4** (*four*). Piège : 10 h est l'heure de **début**.
- **Money will go to** : the local **animal hospital**.
- **Contact** : Mr **Okafor** (épelé O-K-A-F-O-R).
- **Room** : **14** (*fourteen*, à ne pas confondre avec *forty*).

**Méthode** : devine le type de chaque réponse avant d'écouter (une date, une heure, un lieu, un nom, un nombre) ; écoute les mots qui annulent une information (*not... as we said before*) ; vérifie l'orthographe à la deuxième écoute.` },
      ],
    },

    // ───────────────────────────── 12. Speaking
    {
      id: "speaking",
      titre: "Speaking : les quatre parties de l'oral",
      theme: "Speaking",
      cours: `
## L'épreuve
Elle dure **10 à 12 minutes** pour deux candidats (15 à 17 minutes s'il y a trois candidats). Deux examinateurs sont présents : l'**interlocutor** pose les questions et te parle ; l'**assessor** écoute et note.

| Partie | Durée | Ce que tu fais |
|---|---|---|
| **Part 1** | environ 2 min | Questions sur toi : nom, ville, études, loisirs, routines. Réponds avec **une ou deux phrases** et un détail. |
| **Part 2** | environ 3 min | Chacun **décrit une photo** pendant environ **1 minute** (*Tell us what you can see in the photograph*). |
| **Part 3** | environ 4 min | **Discussion à deux** : l'examinateur décrit une situation et montre des dessins (*Talk together about the different things... and say which would be best*). Vous proposez, réagissez et essayez de vous **mettre d'accord**. |
| **Part 4** | environ 3 min | **Conversation générale** sur le thème de la Part 3 : goûts, habitudes, expériences, opinions. |

## Comment c'est noté
L'*assessor* note la **grammaire et le vocabulaire**, l'**organisation du discours** (parler assez longtemps, de façon reliée), la **prononciation** et l'**interaction** (réagir à ton partenaire). L'*interlocutor* donne une note **globale**.

## Part 2 : décrire une photo pendant une minute
Tu ne connais pas toujours le mot exact : **décris autrement** (*It's a kind of..., It looks like...*).
1. **Où ?** *This photo shows... / In this picture I can see... / It looks like a kitchen.*
2. **Qui ?** *There are two teenagers... / On the left, there's a girl who is wearing...*
3. **Que font-ils ?** (présent continu) *They're cooking... / He's holding...*
4. **Le reste** : *In the background, there are... / In the foreground...*
5. **Hypothèses** : *They might be... / Maybe they're preparing a party... / She looks happy.*

## Part 3 : discuter et se mettre d'accord
| Pour... | Phrases |
|---|---|
| commencer | *Shall I start? / Let's talk about this one first.* |
| proposer | *What about...? / I think... would be a good idea because...* |
| demander l'avis | *What do you think? / Do you agree? / How about you?* |
| être d'accord | *I agree. / That's a good point. / You're right.* |
| ne pas être d'accord poliment | *I'm not sure about that. / I see what you mean, but...* |
| conclure | *So, shall we choose...? / I think we agree that... is the best.* |

>! **Exemple de Part 3** : *A teenager wants to get fitter. Here are some ideas : join a football team, cycle to school, use a fitness app, go swimming, walk the dog. Talk together about the different ideas and say which would be best.*
>! *A : Shall I start? I think cycling to school is a great idea, because you do it every day.*
>! *B : That's true, but it can be dangerous if there's a lot of traffic. What about joining a football team? You make friends too.*
>! *A : I see what you mean, but not everyone likes team sports...*

## Part 4 : donner son avis et développer
Réponds en trois temps : **avis** + **raison** + **exemple**. *Do you prefer doing sport alone or with friends?* → *I prefer doing sport with friends, because it's more fun. For example, every Wednesday I play volleyball with my classmates.*

> **À retenir** : développe tes réponses (jamais seulement *Yes* ou *No*), décris la photo **pendant une minute** avec le présent continu et des hypothèses, **interagis** en Part 3 (propose, demande l'avis, réagis), et justifie toujours ton opinion en Part 4.
`,
      exercices: [
        { type: "qcm", question: "In Speaking Part 2, what do you have to do?", choix: ["discuss some drawings with your partner", "ask the examiner questions", "answer questions about your name and your family", "talk about a photograph on your own for about a minute"], reponse: 3, explication: "Part 2 = **description d'une photo, seul, environ une minute**. La discussion à partir de dessins, c'est la Part 3 ; les questions personnelles, la Part 1." },
        { type: "qcm", question: "Which tense is the most useful to describe what people are doing in a photo?", choix: ["the present continuous: *They're playing...*", "the past simple: *They played...*", "the present perfect: *They've played...*", "the future: *They will play...*"], reponse: 0, explication: "On décrit ce qu'on voit **en ce moment** sur la photo : **présent continu** (*They're playing, She's wearing*)." },
        { type: "qcm", question: "In Part 3, your partner says: *I think the museum is the best idea.* You don't agree. What do you say?", choix: ["No. You're wrong.", "I see what you mean, but I think the beach would be more fun for everyone.", "OK.", "The museum."], reponse: 1, explication: "On **nuance poliment** son désaccord (*I see what you mean, but...*) et on **justifie**. *You're wrong* est impoli ; *OK* et *The museum* ne font pas avancer la discussion." },
        { type: "saisie", question: "Complète pour demander l'avis de ton partenaire : *What do you ___?*", reponses: ["think"], explication: "**What do you think?** est la question la plus utile de la Part 3. Autres : *Do you agree? How about you?*" },
        { type: "vf", question: "En Part 3, il faut absolument se mettre d'accord avec son partenaire, sinon on perd des points.", reponse: false, explication: "Faux : on **essaie** de se mettre d'accord, mais on peut finir sur un désaccord poli (*We don't agree, but that's OK!*). Ce qui est noté, c'est la **qualité de l'échange** : proposer, réagir, justifier." },
        { type: "qcm", question: "You don't know the word for an object in your photo (a *whisk*, un fouet de cuisine). What is the best strategy?", choix: ["Say nothing and stop talking.", "Say the French word.", "Describe it: *It's a kind of tool you use to mix eggs.*", "Ask the examiner to translate."], reponse: 2, explication: "On **contourne** le mot : *It's a kind of..., It's something you use to...* L'examinateur valorise cette stratégie ; le silence ou le français font perdre des points." },
        { type: "saisie", question: "Complète pour faire une hypothèse sur une photo : *They ___ be on holiday, because they're wearing sunglasses.* (un modal qui veut dire « peut-être »)", reponses: ["might", "may", "could", "must"], explication: "**Might / may / could** + verbe = peut-être (hypothèse). **Must** est accepté aussi : il exprime une déduction plus sûre (« ils doivent être en vacances »)." },
        { type: "redaction", question: `**Speaking Part 1 et Part 4.** Prépare à l'écrit (puis dis à voix haute) tes réponses, avec un avis, une raison et un exemple :
1. *Where do you live?*
2. *What do you enjoy doing in your free time?*
3. *Do you think teenagers spend too much time on their phones? Why?*
4. *Would you prefer to live in a big city or in the countryside? Why?*`, corrige: `**Exemples de réponses**

1. *I live in Nantes, in the west of France. It's quite a big city, with a river and lots of parks. I've lived there since I was six.*
2. *I really enjoy playing the drums. I have lessons every Thursday, and at the weekend I sometimes play with a band at my friend's house.*
3. *In my opinion, some teenagers do, yes. It's easy to spend hours watching videos without noticing. But phones are also useful: for example, I use mine to practise English with an app.*
4. *I'd prefer to live in a big city, because there are more things to do, like concerts and museums. However, the countryside is quieter, so maybe I'll live there when I'm older!*

**Ce qui est attendu** : des réponses **développées** (2 ou 3 phrases), des **raisons** (*because, so*), des **exemples**, des nuances (*But, However*), et des temps variés (present perfect, conditionnel *I'd prefer*).` },
        { type: "redaction", question: `**Speaking Part 2.** Voici la description d'une photo (imagine-la). Écris ce que tu dirais pendant **une minute** (environ 90 à 110 mots), puis entraîne-toi à voix haute avec un chronomètre.
*Photo : dans un parc, en été, trois adolescents sont assis sur l'herbe autour d'une nappe ; l'un d'eux sert des boissons, une autre fille fait une photo avec son téléphone ; à l'arrière, des arbres et un vélo posé contre un banc.*`, corrige: `**Exemple de description (101 mots)**

*In this photo, I can see three teenagers in a park. It looks like summer, because the sun is shining and they're wearing T-shirts and shorts. They're sitting on the grass around a picnic blanket. On the left, a boy is pouring some drinks — maybe lemonade or orange juice. In the middle, a girl is taking a photo with her phone, probably of the food. In the background, there are some tall trees, and a bike is leaning against a bench. I think they might be celebrating something, like the end of the school year. They all look relaxed and happy.*

**Ce qui est attendu** : le lieu, les personnes, leurs actions au **présent continu**, des repères (*On the left, In the middle, In the background*), des **hypothèses** (*maybe, probably, they might be*) et les sentiments (*They look...*).` },
      ],
    },

    // ───────────────────────────── 13. Grammaire : les temps
    {
      id: "grammaire-temps",
      titre: "Grammaire B1 : les temps du passé, du présent et du futur",
      theme: "Grammaire et vocabulaire",
      cours: `
## Present perfect ou prétérit ?
| Temps | Forme | Emploi | Mots typiques |
|---|---|---|---|
| **Prétérit** | *I visited, I went* | action **terminée** à un moment **précis** du passé | *yesterday, last week, in 2022, ago, when I was ten* |
| **Present perfect** | *I have visited, she has gone* | expérience, résultat **présent**, ou situation qui **dure encore** | *ever, never, already, yet, just, for, since, so far* |

>! - *I **went** to London **last year**.* (moment précis → prétérit)
>! - *I**'ve been** to London **twice**.* (expérience, sans date → present perfect)
>! - *She**'s lived** here **for** three years / **since** 2023.* (et elle y habite encore)
>! - *Have you finished your homework **yet**? — Yes, I've **just** finished.*

**For** + durée (*for two hours, for ages*) ; **since** + point de départ (*since Monday, since I was eight*).

**Present perfect continu** (*have been* + -ing) : une activité qui dure jusqu'à maintenant, souvent avec un résultat visible : *I'm tired because I've been running.*

## Les temps du récit
| Temps | Forme | Emploi |
|---|---|---|
| **Prétérit continu** | *was / were* + -ing | action **en cours** à un moment du passé, décor : *It was raining.* |
| **Prétérit** | *-ed* / forme irrégulière | actions **successives** ou action qui interrompt : *...when the phone rang.* |
| **Past perfect** | *had* + participe passé | action **antérieure** à un autre moment passé : *When I arrived, the bus had left.* |
| **Used to** | *used to* + base verbale | **habitude passée** qui n'existe plus : *I used to hate vegetables.* |

## Le futur
| Forme | Emploi | Exemple |
|---|---|---|
| **will** | décision sur le moment, prédiction, promesse | *I'll help you. / It will be sunny tomorrow.* |
| **be going to** | intention déjà décidée, prédiction d'après un signe | *I'm going to study medicine. / Look at those clouds! It's going to rain.* |
| **présent continu** | rendez-vous ou projet **organisé** | *I'm meeting Sam at six.* |
| **présent simple** | horaires officiels | *The train leaves at 8.15.* |
| **might / may** | possibilité | *I might go to the party.* |

## Erreurs fréquentes des francophones
- *I am here since two days* → *I**'ve been** here **for** two days.* (« depuis » + situation qui dure = present perfect)
- *I have seen him yesterday* → *I **saw** him yesterday.* (date précise = prétérit)
- *When I will be older...* → *When I **am** older, I'll travel.* (pas de *will* après *when* ou *if*)
- *I use to play* → *I **used to** play.*

> **À retenir** : date précise → **prétérit** ; expérience, résultat ou situation qui dure → **present perfect** (avec *for* + durée, *since* + point de départ) ; antériorité dans le passé → **past perfect** ; pas de *will* après *when* ou *if*.
`,
      exercices: [
        { type: "qcm", question: "Choose the correct sentence.", choix: ["I live in Paris since 2020.", "I am living in Paris since 2020.", "I lived in Paris since 2020.", "I have lived in Paris since 2020."], reponse: 3, explication: "Situation commencée en 2020 qui **dure encore** : **present perfect** + *since*. Le français « j'habite depuis » pousse à l'erreur du présent." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["Have you seen the new Marvel film last weekend?", "Had you seen the new Marvel film last weekend?", "Do you see the new Marvel film last weekend?", "Did you see the new Marvel film last weekend?"], reponse: 3, explication: "*Last weekend* = moment **précis et terminé** → **prétérit** (*Did you see...?*). Le present perfect est impossible avec une date passée." },
        { type: "saisie", question: "Complète avec *for* ou *since* : *We've been friends ___ we were five.*", reponses: ["since"], explication: "*We were five* est un **point de départ** → **since**. *For* irait avec une durée : *for ten years*." },
        { type: "saisie", question: "Mets le verbe au *past perfect* : *When we got to the station, the train ___ (leave).* (deux mots)", reponses: ["had left", "had already left"], explication: "Le train est parti **avant** notre arrivée : **had left** (*leave, left, left*)." },
        { type: "qcm", question: "Choose the best form: *Look at the sky! It ___ rain.*", choix: ["is going to", "will", "rains", "is raining to"], reponse: 0, explication: "Prédiction fondée sur un **signe visible** (le ciel) : **be going to**. *Will* sert aux prédictions plus générales ou aux décisions sur le moment." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["When I will finish school, I will travel.", "When I finish school, I will travel.", "When I finished school, I will travel.", "When I am finishing school, I travel."], reponse: 1, explication: "Après **when** (ou *if*) avec un sens futur, on met le **présent** : *When I finish school, I will travel.*" },
        { type: "saisie", question: "Complète avec le prétérit continu : *I ___ (read) in bed when I heard a strange noise.* (deux mots)", reponses: ["was reading"], explication: "Action **en cours** (*was reading*) interrompue par une action courte (*I heard*)." },
        { type: "vf", question: "*I used to play the piano* signifie que je joue encore du piano régulièrement aujourd'hui.", reponse: false, explication: "Faux : **used to** exprime une habitude **passée qui n'existe plus**. Je jouais du piano autrefois, mais plus maintenant." },
        { type: "qcm", question: "Your friend says: *I've forgotten my pen.* You answer:", choix: ["I'm lending you one.", "I lend you one.", "I'll lend you one.", "I'm going to lend you one yesterday."], reponse: 2, explication: "**Décision prise sur le moment**, offre d'aide : **will** (*I'll lend you one*)." },
        { type: "redaction", question: `Corrige les erreurs de temps de ce paragraphe (il y en a cinq) et explique chaque correction en français.
*I am learning English since six years. Last summer I have been to Ireland with my family. While we visited Dublin, it started to rain. When we arrived at the museum, it already closed. Next year, when I will be in Year 11, I'll go to England.*`, corrige: `**Corrigé**

*I **have been learning** English **for** six years. Last summer I **went** to Ireland with my family. While we **were visiting** Dublin, it started to rain. When we arrived at the museum, it **had** already **closed**. Next year, when I **am** in Year 11, I'll go to England.*

1. **have been learning... for** : situation qui dure jusqu'à maintenant (present perfect, ici continu) ; *for* + durée.
2. **went** : *last summer* = moment précis passé → prétérit.
3. **were visiting** : action en cours (décor) interrompue par *it started to rain* → prétérit continu.
4. **had already closed** : la fermeture est **antérieure** à l'arrivée → past perfect.
5. **am** : après *when* à sens futur → présent, pas *will*.` },
      ],
    },

    // ───────────────────────────── 14. Grammaire : les structures
    {
      id: "grammaire-structures",
      titre: "Grammaire B1 : passif, conditionnels, relatives, discours indirect, modaux",
      theme: "Grammaire et vocabulaire",
      cours: `
## Le passif
**be** (au temps voulu) + **participe passé**. On l'emploie quand l'auteur de l'action est inconnu ou moins important.
| Actif | Passif |
|---|---|
| *They make cars in this factory.* | *Cars **are made** in this factory.* |
| *Someone stole my bike.* | *My bike **was stolen**.* |
| *They will open the new pool in June.* | *The new pool **will be opened** in June.* |
| *They have cancelled the match.* | *The match **has been cancelled**.* |
On indique l'auteur avec **by** : *This book was written **by** a teenager.*

## Les conditionnels
| Type | Structure | Emploi |
|---|---|---|
| **0** | *If* + présent, présent | vérité générale : *If you heat ice, it melts.* |
| **1** | *If* + présent, **will** + verbe | situation **possible** : *If it rains, we'll stay at home.* |
| **2** | *If* + **prétérit**, **would** + verbe | situation **imaginaire** : *If I had a million euros, I would travel round the world.* |
Avec *be* au type 2 : *If I **were** you, I'd talk to her.* (*was* est fréquent à l'oral). **Unless** = *if... not* : *We'll be late unless we hurry.*

## Les relatives
| Pronom | Pour | Exemple |
|---|---|---|
| **who** | une personne | *the girl **who** lives next door* |
| **which** | une chose, un animal | *the book **which** I'm reading* |
| **that** | personne ou chose (pas après une virgule) | *the film **that** won the prize* |
| **where** | un lieu | *the town **where** I was born* |
| **whose** | possession (dont le, dont la) | *the boy **whose** dog bit me* |

## Le discours indirect
Après un verbe au passé (*said, told, asked*), on **recule** les temps : présent → prétérit ; prétérit / present perfect → past perfect ; *will* → *would* ; *can* → *could*.
>! - *“I'm tired.”* → *She said (that) she **was** tired.*
>! - *“We'll call you.”* → *They told me they **would** call me.*
>! - *“Where do you live?”* → *He asked me where **I lived**.* (question indirecte : **pas d'inversion**, pas de *do*)
>! - *“Are you coming?”* → *She asked **if** I was coming.*
**Say** (*said that...*) / **tell** + personne (*told me that...*).

## Les modaux
| Modal | Sens | Exemple |
|---|---|---|
| *must / have to* | obligation | *You must wear a helmet. / I have to get up early.* |
| *don't have to* | **absence** d'obligation | *You don't have to come.* (ce n'est pas nécessaire) |
| *mustn't* | **interdiction** | *You mustn't use your phone in class.* |
| *should* | conseil | *You should see a doctor.* |
| *might / may / could* | possibilité | *She might be late.* |
| *must* (déduction) | quasi-certitude | *He must be tired; he ran 20 km.* |
| *can't* (déduction) | impossibilité | *That can't be Tom; he's in Spain.* |

## Gérondif ou infinitif ?
- Verbe + **-ing** : *enjoy, finish, mind, avoid, suggest, keep, spend time* ; après une **préposition** (*good at swimming, before leaving*).
- Verbe + **to** + verbe : *want, decide, hope, plan, agree, learn, offer, promise, would like*.

> **À retenir** : passif = *be* + participe passé ; conditionnel 1 = *if* + présent / *will*, conditionnel 2 = *if* + prétérit / *would* ; *who* (personnes), *which* (choses), *where* (lieux), *whose* (possession) ; au discours indirect, on recule les temps et on n'inverse pas dans les questions ; *mustn't* = interdit, *don't have to* = pas obligé.
`,
      exercices: [
        { type: "qcm", question: "Choose the passive sentence that means: *Someone built this castle in the 12th century.*", choix: ["This castle built in the 12th century.", "This castle is building in the 12th century.", "This castle has built in the 12th century.", "This castle was built in the 12th century."], reponse: 3, explication: "Passif au prétérit : **was** + participe passé **built**. Sans *be*, la phrase est fausse ; *has built* et *is building* sont actifs." },
        { type: "saisie", question: "Conditionnel 2 : *If I ___ (have) more free time, I would learn to play the guitar.*", reponses: ["had"], explication: "Situation imaginaire : *if* + **prétérit** (*had*), puis *would* + verbe." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["If it will rain tomorrow, we will stay at home.", "If it rained tomorrow, we will stay at home.", "If it rains tomorrow, we will stay at home.", "If it would rain tomorrow, we will stay at home."], reponse: 2, explication: "Conditionnel 1 : *if* + **présent**, puis **will** + verbe. Jamais *will* ni *would* juste après *if* dans ce type de phrase." },
        { type: "saisie", question: "Complète avec un pronom relatif : *That's the boy ___ sister is in my class.*", reponses: ["whose"], explication: "**Whose** = dont le, dont la (possession) : le garçon **dont** la sœur est dans ma classe." },
        { type: "qcm", question: "Report this question: *“Where do you live?” the teacher asked me.*", choix: ["The teacher asked me where did I live.", "The teacher asked me where I lived.", "The teacher asked me where do you live.", "The teacher asked me where I live?"], reponse: 1, explication: "Question indirecte : on **recule le temps** (*live* → *lived*) et on **n'inverse pas** (pas de *did*, ordre sujet + verbe), sans point d'interrogation." },
        { type: "qcm", question: "*At our school, uniforms are not necessary.* Which sentence means the same?", choix: ["You mustn't wear a uniform.", "You shouldn't wear a uniform.", "You must wear a uniform.", "You don't have to wear a uniform."], reponse: 3, explication: "*Not necessary* = **don't have to** (pas obligé). *Mustn't* serait une **interdiction** : ce n'est pas le sens." },
        { type: "saisie", question: "Discours indirect : *“I will help you,” Tom said.* → *Tom said he ___ help me.*", reponses: ["would"], explication: "Au discours indirect au passé, *will* devient **would**." },
        { type: "qcm", question: "*The lights are off and nobody answers the door.* Which sentence is the best deduction?", choix: ["They must be out.", "They can't be out.", "They should be out.", "They don't have to be out."], reponse: 0, explication: "Déduction quasi certaine : **must be** (ils doivent être sortis). *Can't be out* dit le contraire ; *should* exprime un conseil ou une attente ; *don't have to* une absence d'obligation." },
        { type: "saisie", question: "Gérondif ou infinitif ? *My parents decided ___ (sell) our old car.* (écris les deux mots)", reponses: ["to sell"], explication: "*Decide* est suivi de **to** + verbe : *decided to sell*. (À l'inverse, *enjoy, finish, avoid* sont suivis de -ing.)" },
        { type: "redaction", question: `Transforme chaque phrase comme indiqué, puis explique la règle en français.
1. *They will announce the results on Friday.* (passif)
2. *“I can't come to your party,” Lisa said to me.* (discours indirect, avec *told*)
3. *I don't have a bike, so I can't cycle to school.* (conditionnel 2 avec *If*)
4. *This is the café. We met there for the first time.* (une seule phrase avec *where*)`, corrige: `**Corrigé**

1. *The results **will be announced** on Friday.* → passif au futur : *will be* + participe passé.
2. *Lisa **told me (that) she couldn't come** to my party.* → *tell* + personne ; *can't* devient *couldn't* ; *I* devient *she*, *your* devient *my*.
3. *If I **had** a bike, I **could** (ou **would**) **cycle** to school.* → situation imaginaire : *if* + prétérit, puis *could/would* + verbe.
4. *This is the café **where** we met for the first time.* → *where* reprend un lieu et remplace *there*.` },
      ],
    },

    // ───────────────────────────── 15. Vocabulaire
    {
      id: "vocabulaire",
      titre: "Vocabulaire B1 : phrasal verbs, formation des mots, mots pièges",
      theme: "Grammaire et vocabulaire",
      cours: `
## Les thèmes de l'examen
Les sujets du B1 Preliminary for Schools reviennent souvent sur les mêmes domaines : **school and study**, **sport**, **hobbies and leisure**, **travel and holidays**, **food**, **shopping**, **health**, **the environment**, **technology**, **entertainment and media**, **family and friends**, **the natural world**, **jobs**. Apprends le vocabulaire **par thème**, avec des **phrases exemples**.

## Les phrasal verbs les plus utiles
| Phrasal verb | Sens | Exemple |
|---|---|---|
| *find out* | découvrir, apprendre (une info) | *I found out that the shop was closed.* |
| *give up* | abandonner, arrêter | *Don't give up!* |
| *look after* | s'occuper de | *I look after my little brother.* |
| *look forward to* | attendre avec impatience | *I'm looking forward to the trip.* |
| *get on with* | bien s'entendre avec | *I get on well with my sister.* |
| *take up* | se mettre à (un loisir) | *I've taken up the guitar.* |
| *put off* | reporter | *The match was put off.* |
| *run out of* | ne plus avoir de | *We've run out of milk.* |
| *set off* | partir (en voyage) | *We set off at 6 am.* |
| *turn down* | refuser ; baisser (le son) | *She turned down the offer.* |
| *come up with* | trouver (une idée) | *He came up with a great idea.* |
| *grow up* | grandir | *I grew up in Lille.* |

## La formation des mots
| Suffixe ou préfixe | Ce qu'il forme | Exemples |
|---|---|---|
| *-ful* / *-less* | adjectifs (avec / sans) | *careful, careless, helpful, useless* |
| *-ness*, *-ment*, *-tion* | noms | *happiness, excitement, information* |
| *-er*, *-or*, *-ist* | personnes | *teacher, actor, artist* |
| *-able*, *-ous*, *-y* | adjectifs | *comfortable, dangerous, sunny* |
| *-ly* | adverbes | *quickly, carefully* |
| *un-, dis-, im-, in-* | contraires | *unhappy, dislike, impossible, independent* |

## Les mots pièges (faux amis et confusions)
| Mot anglais | Sens réel | À ne pas confondre avec |
|---|---|---|
| *actually* | en fait | « actuellement » = *at the moment, currently* |
| *eventually* | finalement | « éventuellement » = *possibly* |
| *sensible* | raisonnable | « sensible » = *sensitive* |
| *library* | bibliothèque | « librairie » = *bookshop* |
| *attend* | assister à | « attendre » = *wait for* |
| *pass an exam* | **réussir** un examen | « passer un examen » = *take an exam* |
| *journey* | trajet, voyage | « journée » = *day* |
| *control* | maîtriser, diriger | « contrôle » (au collège) = *test* |
| *borrow / lend* | emprunter / prêter | |
| *say / tell* | dire / dire **à quelqu'un** | *tell me*, mais *say to me* |

> **À retenir** : apprends les mots **en contexte** (phrase exemple), par **thème** et par **famille** (*care, careful, careless, carefully*). Méfie-toi des faux amis : *actually* = en fait, *pass* = réussir, *library* = bibliothèque.
`,
      exercices: [
        { type: "qcm", question: "Choose the correct phrasal verb: *I'm going to ___ chess this year. My uncle will teach me.*", choix: ["take up", "give up", "put off", "turn down"], reponse: 0, explication: "**Take up** = se mettre à une activité. *Give up* = abandonner (le contraire) ; *put off* = reporter ; *turn down* = refuser." },
        { type: "saisie", question: "Complète avec la particule : *We've run ___ of bread. Can you buy some?*", reponses: ["out"], explication: "**Run out of** = ne plus avoir de : *We've run out of bread.*" },
        { type: "qcm", question: "*Actually* means:", choix: ["currently, at the moment", "possibly", "every day", "in fact"], reponse: 3, explication: "*Actually* = **en fait**. Faux ami : « actuellement » se dit *at the moment* ou *currently*." },
        { type: "saisie", question: "Formation des mots : écris l'adjectif contraire de *careful* (qui ne fait pas attention).", reponses: ["careless"], explication: "*-ful* = plein de, *-less* = sans : *careful* (prudent) / **careless** (négligent)." },
        { type: "saisie", question: "Formation des mots : écris le nom formé sur *excite*. *There was a lot of ___ before the final.*", reponses: ["excitement"], explication: "*Excite* + *-ment* → **excitement** (l'excitation, l'enthousiasme)." },
        { type: "vf", question: "*I passed my maths exam* veut dire « j'ai réussi mon examen de maths ».", reponse: true, explication: "Vrai : *pass an exam* = **réussir**. « Passer un examen » (le présenter) se dit *take an exam* ou *sit an exam*." },
        { type: "qcm", question: "Choose the correct word: *Can you ___ me your bike this afternoon?*", choix: ["borrow", "lend", "rent", "give back"], reponse: 1, explication: "Celui qui donne le vélo **prête** : **lend** me your bike. *Borrow* = emprunter : *Can I borrow your bike?*" },
        { type: "qcm", question: "Choose the correct word: *My mum ___ me that she would be late.*", choix: ["said", "talked", "spoke", "told"], reponse: 3, explication: "**Tell** + personne : *She told me that...* *Say* se construit sans personne (*She said that...*) ou avec *to* (*said to me*)." },
        { type: "saisie", question: "Traduis par un mot anglais : « une bibliothèque » (où l'on emprunte des livres).", reponses: ["library", "a library"], explication: "**Library** = bibliothèque. Une librairie (où l'on achète) = *bookshop*." },
        { type: "redaction", question: `Écris un petit texte de 5 ou 6 phrases (en anglais) sur tes loisirs, en employant au moins **quatre** de ces mots : *take up, get on with, find out, look forward to, give up, careful, actually*. Souligne-les (en gras).`, corrige: `**Exemple de texte**

*Last year I **took up** climbing at a club near my school. At first it was really hard and I nearly **gave up**, but the instructor helped me. I **get on** really well **with** the other members, who are all about my age. You have to be very **careful**, of course, but **actually** it's less dangerous than people think. Last week I **found out** that our club is going to Fontainebleau in May, and I'm really **looking forward to** it!*

**Points de vigilance** : *look forward to* + nom ou -ing ; *get on with* + personne ; *actually* = en fait ; *found out* au prétérit (*find, found, found*).` },
      ],
    },

    // ───────────────────────────── 16. Examen blanc
    {
      id: "examen-blanc",
      titre: "Examen blanc écrit (Mock test)",
      theme: "L'examen",
      cours: `
## À quoi sert cet examen blanc ?
Ce chapitre est un **examen blanc** (*mock test*) : toutes les parties du B1 Preliminary for Schools, dans l'ordre de l'examen, avec des documents nouveaux. Fais-le **d'une traite**, sans regarder les cours, comme le jour J. Ensuite seulement, lis les corrections et compte tes points.

| Exercices | Épreuve | Ce que tu fais |
|---|---|---|
| 1 à 3 | Reading Part 1 | 3 textes courts, 3 propositions |
| 4 à 6 | Reading Part 2 | 3 ados et 6 descriptions de livres |
| 7 à 10 | Reading Part 3 | Un article et 4 questions à 4 propositions |
| 11 à 13 | Reading Part 4 | Un récit dont on a retiré 3 phrases (5 phrases proposées) |
| 14 à 17 | Reading Part 5 | Un texte à trous, 4 mots par trou |
| 18 à 21 | Reading Part 6 | Un e-mail à trous : **un seul mot** par trou |
| 22 | Writing Part 1 | Un e-mail d'**environ 100 mots** (4 notes) |
| 23 | Writing Part 2 | Au choix : un article **ou** une histoire, environ 100 mots |
| 24 à 28 | Listening | Des transcriptions des Parts 1 à 4 |
| 29 | Speaking | Préparer une Part 3 et une Part 4 |
| 30 | Bilan | Compter ses points et faire son plan de révision |

Dans l'appli, l'appariement de la Part 2 et les phrases de la Part 4 sont présentés en QCM (une question à la fois). Les textes communs à plusieurs questions (livres, article, récit, e-mail, transcription) s'affichent au-dessus de la question : déplié la première fois, puis avec le bouton « Relire le texte ».

> **Attention** : cet examen blanc est **plus court** que le vrai (21 questions de lecture au lieu de 32, 5 questions d'écoute au lieu de 25). Il te donne une **idée** de ton niveau, pas une note officielle.

## Gérer son temps
| Épreuve | À l'examen | Ici |
|---|---|---|
| Reading (exercices 1 à 21) | 45 minutes pour 32 questions | **30 minutes** |
| Writing (exercices 22 et 23) | 45 minutes : environ 20 minutes par texte, plus la relecture | **45 minutes** |
| Listening (24 à 28) | environ 30 minutes | 10 minutes |
| Speaking (29) | 10 à 12 minutes à deux | 10 minutes, à voix haute |

- Mets un **minuteur**. Si une question te bloque, **choisis une réponse quand même** : une erreur ne fait pas perdre de points.
- Pour le Writing, fais un **plan rapide** (2 minutes), écris, puis **compte tes mots** (environ 100) et relis-toi (temps, accords, orthographe).
- Pour le Listening, fais-toi **lire les transcriptions** deux fois sans les regarder ; sinon, lis-les **une seule fois**.

## Compter ses points
1. **Reading** (1 à 21) : 1 point par bonne réponse → **21 points**.
2. **Writing** (22 et 23) : note chaque texte sur **20** avec la grille ci-dessous → **40 points**. Compare honnêtement ta copie au modèle.
3. **Listening** (24 à 28) : 1 point par bonne réponse → **5 points**.
4. **Speaking** (29) : coche la liste du corrigé, 1 point par élément réussi → **10 points**.

Calcule un **pourcentage par compétence** : points ÷ total × 100. Exemple : 15 sur 21 en Reading → 15 ÷ 21 × 100 ≈ **71 %**.

### La grille de Writing (sur 20 : quatre critères sur 5)
| Note | Content | Communicative Achievement | Organisation | Language |
|---|---|---|---|---|
| **5** | Tout est traité, le lecteur est pleinement informé | Ton adapté, texte qui retient l'attention et atteint son but | Texte bien relié, paragraphes, connecteurs variés | Vocabulaire varié, phrases simples et complexes bien maîtrisées ; fautes rares |
| **3** | Un point manque ou reste flou | Ton globalement adapté, idées simples | Connecteurs simples (*and, but, because*) | Langue simple correcte ; des fautes qui ne gênent pas |
| **1** | Le texte répond peu à la tâche | Ton inadapté ou but peu clair | Phrases juxtaposées | Beaucoup de fautes, sens parfois difficile |

Les notes 4 et 2 se situent entre ces descriptions ; 0 = rien d'utilisable.

## Estimer son niveau (repères indicatifs)
Cambridge convertit les points bruts sur l'**échelle de 120 à 170**, avec des réglages propres à chaque session : il n'existe pas de table simple. Les repères ci-dessous sont **seulement indicatifs**.

| Pourcentage dans une compétence | Ce que cela suggère |
|---|---|
| 85 % ou plus | Niveau B1 très solide, en route vers le B2 (*Grade A* possible) |
| 70 % à 84 % | Niveau B1 bien installé |
| 55 % à 69 % | Proche du B1 : revois les chapitres de cette compétence |
| moins de 55 % | Le B1 n'est pas encore atteint ici : reprends les cours, puis refais un examen blanc dans quelques semaines |

> **À retenir** : un examen blanc se passe **d'un seul coup, chronométré** ; compte tes points **par compétence** ; le pourcentage n'est qu'un **repère**. Le plus utile est de repérer **où** tu perds des points et de retravailler les chapitres correspondants.
`,
      textes: {
        livres: `**The teenagers**
- **Hugo** wants to read about a real adventure. He likes books with lots of photos.
- **Léna** wants a funny novel about school. She only reads on the bus, so she prefers short chapters.
- **Sami** wants to learn how to cook food from other countries. He has never cooked before.

**The books**
- **Wild Ocean** : *The true story of a sixteen-year-old girl who sailed alone across the Atlantic. Includes forty pages of her own photos.*
- **Mountain Mystery** : *An exciting novel about four friends lost in the Alps. Full of suspense from the first page to the last.*
- **Class 9B Strikes Again** : *A hilarious novel about a class that tries to get their teacher on TV. Only 120 pages, with very short chapters.*
- **Laughing Matters** : *A collection of funny poems about school life, perfect for reading aloud with friends.*
- **World Kitchen** : *Easy recipes from twenty countries, with step-by-step photos. No experience needed.*
- **Pastry Masterclass** : *Advanced techniques for experienced bakers who want to make cakes like a professional.*`,
        noah: `**The young beekeeper**

*When Noah Reed was twelve, his neighbour, Mrs Ellis, asked him to help with her beehives. Noah wasn't keen at first: he had been stung by a bee when he was little, and he was still a bit scared of them. “But Mrs Ellis was so calm with the bees that I soon forgot my fear,” he says.*

*Every Saturday that summer, Noah put on a special suit and helped Mrs Ellis check the hives. He learned how bees communicate by dancing, and how important they are for the plants we eat. “I'd always thought bees were just annoying insects,” he says. “Now I know that without them, we'd have far fewer apples or strawberries.”*

*When Mrs Ellis moved to a smaller house last year, she gave Noah two of her hives. Now fifteen, he looks after them on his own and sells the honey at the local market. He spends the money on new equipment, and he gives a few jars to the school canteen.*

*Noah's friends sometimes tease him about his “boring” hobby, but he doesn't mind. “Most of them have tried my honey,” he laughs, “and nobody has said it's boring!” He hopes to study biology at university and would like to do research on protecting bees.*`,
        musee: `**A night at the museum**

*Last month, our class spent a night at the Natural History Museum. We arrived at seven in the evening, just as the last visitors were leaving. (11) ___ Our guide, Dan, gave each of us a torch and told us to follow him.*

*First, we explored the dinosaur hall in the dark. It was quite scary, especially when Dan switched off his torch and told us a ghost story. (12) ___ Luckily, it was just my friend Theo, who thought it was very funny.*

*At midnight, we finally got into our sleeping bags under the skeleton of a huge whale. I didn't think I would be able to sleep there. (13) ___ The next thing I knew, Dan was waking us up for breakfast.*

**The sentences**
- *The building felt very different once it was empty.*
- *Suddenly, someone grabbed my arm and I screamed.*
- *But I was so tired that I fell asleep immediately.*
- *We had to pay twenty pounds each for the tickets.*
- *The whale was discovered on a beach a long time ago.*`,
        refuge: `**Helping at the animal shelter**

*Last year I decided to (14) ___ part in a volunteering project at an animal shelter near my town. At first I was (15) ___ of the big dogs, but the staff showed me how to handle them. Over the months, I (16) ___ a lot of experience, and now I (17) ___ on really well with all the animals, even the noisy ones!*`,
        jade: `*Hi Ella,*
*I'm writing to tell you about the concert I went (18) ___ on Saturday. It was the best concert I've (19) ___ been to! The band played (20) ___ nearly three hours. My brother, (21) ___ is a big fan, bought a T-shirt and a poster.*
*Love, Jade*`,
        filmclub: `**Listening Part 3 — transcript** (fais-le-toi lire, ou lis-le une seule fois)

*Welcome to the summer film club. We meet every Thursday in the school hall, starting on the third of July. Each week we'll watch a film and then discuss it. Membership costs fifteen pounds for the whole summer, and that includes popcorn! If you want to suggest a film, send an email to our organiser, Ms Varga — that's V-A-R-G-A.*`,
      },
      exercices: [
        // ── Reading Part 1
        { type: "qcm", question: `**Reading Part 1 — Question 1.** Read the notice at a sports centre.
**Lockers must be emptied by 9 pm. Anything left after this time will be taken to reception.**`, choix: ["You can leave your things in a locker overnight.", "If you forget something in a locker, you can collect it at reception.", "Reception closes at 9 pm."], reponse: 1, explication: "Les affaires oubliées dans les casiers après 21 h sont **déposées à l'accueil** : on peut donc les y récupérer. Laisser ses affaires la nuit est justement interdit, et rien ne dit que l'accueil ferme à 21 h (c'est l'heure limite des casiers)." },
        { type: "qcm", question: `**Reading Part 1 — Question 2.** Read the message.
*Hi Zara, I'm going to be about 20 minutes late — my piano lesson has gone on longer than usual. Order me a hot chocolate if you get there first! Mia*`, choix: ["Mia wants Zara to get her a drink.", "Mia's piano lesson has been cancelled.", "Mia wants to meet at a different café."], reponse: 0, explication: "*Order me a hot chocolate* : Mia demande à Zara de lui **commander une boisson**. Le cours n'est pas annulé, il **dure plus longtemps** (*gone on longer*) ; le lieu ne change pas." },
        { type: "qcm", question: `**Reading Part 1 — Question 3.** Read the notice on the school website.
**Year 10 trip to the Science Museum: students who have not returned the form by Friday will not be able to go.**`, choix: ["The trip will take place on Friday.", "Students can go on the trip without a form if they pay.", "Students must hand in a form by Friday to go on the trip."], reponse: 2, explication: "Sans formulaire rendu **avant vendredi**, pas de sortie : il faut le rendre pour partir. Vendredi est la **date limite**, pas la date de la sortie ; le paiement n'est pas évoqué." },

        // ── Reading Part 2
        { type: "qcm", texte: "livres", question: `**Reading Part 2.** Three teenagers are looking for a book. Read the descriptions of six books and decide which book would be most suitable for each person.

**Question 4.** Which book would be most suitable for **Hugo**?`, choix: ["Mountain Mystery", "Wild Ocean", "World Kitchen", "Class 9B Strikes Again", "Laughing Matters", "Pastry Masterclass"], reponse: 1, explication: "*Wild Ocean* : **histoire vraie** (*true story*) d'aventure ✔ et **beaucoup de photos** ✔. *Mountain Mystery* est une aventure, mais c'est un **roman** (*novel*), donc une fiction, et il n'y a pas de photos." },
        { type: "qcm", texte: "livres", question: "**Reading Part 2 — same texts (books).**\n**Question 5.** Which book would be most suitable for **Léna**?", choix: ["Laughing Matters", "Wild Ocean", "Mountain Mystery", "Pastry Masterclass", "World Kitchen", "Class 9B Strikes Again"], reponse: 5, explication: "*Class 9B Strikes Again* : **drôle** (*hilarious*) ✔, **roman** sur une classe ✔, **chapitres très courts** ✔. *Laughing Matters* est drôle et parle de l'école, mais ce sont des **poèmes**, pas un roman." },
        { type: "qcm", texte: "livres", question: "**Reading Part 2 — same texts (books).**\n**Question 6.** Which book would be most suitable for **Sami**?", choix: ["Pastry Masterclass", "Class 9B Strikes Again", "World Kitchen", "Wild Ocean", "Mountain Mystery", "Laughing Matters"], reponse: 2, explication: "*World Kitchen* : recettes de **vingt pays** ✔, *Easy*, *No experience needed* ✔. *Pastry Masterclass* parle de cuisine, mais pour des pâtissiers **confirmés** (*experienced*)." },

        // ── Reading Part 3
        { type: "qcm", texte: "noah", question: `**Reading Part 3.** Read the article.
**Question 7.** How did Noah feel when Mrs Ellis first asked him to help?`, choix: ["excited to learn something new", "proud that she had chosen him", "nervous because of something that had happened before", "annoyed because he had to work on Saturdays"], reponse: 2, explication: "*He had been stung by a bee when he was little, and he was still a bit scared* : il était **inquiet** à cause d'une **piqûre passée** (*past perfect* : *had been stung*). L'enthousiasme et la fierté ne sont pas dits ; les samedis ne le gênent pas." },
        { type: "qcm", texte: "noah", question: "**Reading Part 3 — same article (Noah).**\n**Question 8.** What changed Noah's opinion of bees?", choix: ["Mrs Ellis told him they never sting.", "He found out that honey is good for your health.", "He saw them dancing in the garden.", "He learned that many foods depend on them."], reponse: 3, explication: "*Now I know that without them, we'd have far fewer apples or strawberries* : il comprend que **de nombreux aliments dépendent d'elles**. La « danse » des abeilles est une chose apprise, mais ce n'est pas ce qui a changé son avis sur leur utilité." },
        { type: "qcm", texte: "noah", question: "**Reading Part 3 — same article (Noah).**\n**Question 9.** What does Noah do with the money from his honey?", choix: ["He gives it to the school canteen.", "He saves it for university.", "He gives it back to Mrs Ellis.", "He buys things he needs for beekeeping."], reponse: 3, explication: "*He spends the money on new equipment* : il achète du **matériel**. La cantine reçoit quelques **pots de miel**, pas l'argent : piège classique sur un détail voisin." },
        { type: "qcm", texte: "noah", question: "**Reading Part 3 — same article (Noah).**\n**Question 10.** What would Noah probably say about his hobby?", choix: ["“I nearly didn't try it, but now it's an important part of my life.”", "“I'd stop if my friends kept laughing at me.”", "“It was fun, but I'm going to give it up when I go to university.”", "“Anyone can do it without help from an expert.”"], reponse: 0, explication: "Question **globale** : il hésitait au début (*wasn't keen*), et maintenant il s'occupe seul des ruches et veut faire de la recherche sur les abeilles. Les moqueries ne le gênent pas (*he doesn't mind*), il veut **continuer** à l'université, et il a appris grâce à Mrs Ellis." },

        // ── Reading Part 4
        { type: "qcm", texte: "musee", question: `**Reading Part 4.** Three sentences have been removed from the text. Choose the correct sentence for each gap. There are two extra sentences.

**Gap 11** : *...just as the last visitors were leaving. (11) ___ Our guide, Dan, gave each of us a torch.*`, choix: ["We had to pay twenty pounds each for the tickets.", "Suddenly, someone grabbed my arm and I screamed.", "But I was so tired that I fell asleep immediately.", "The building felt very different once it was empty.", "The whale was discovered on a beach a long time ago."], reponse: 3, explication: "*Once it was empty* reprend *the last visitors were leaving* : le musée se vide. La phrase sur le prix casse l'enchaînement entre l'arrivée et la visite guidée." },
        { type: "qcm", texte: "musee", question: "**Reading Part 4 — same text (museum).**\n**Gap 12** : *Dan switched off his torch and told us a ghost story. (12) ___ Luckily, it was just my friend Theo.*", choix: ["The whale was discovered on a beach a long time ago.", "Suddenly, someone grabbed my arm and I screamed.", "But I was so tired that I fell asleep immediately.", "We had to pay twenty pounds each for the tickets.", "The building felt very different once it was empty."], reponse: 1, explication: "*Luckily, it was just my friend Theo* explique qui était *someone* : c'est Theo qui lui a attrapé le bras, et il trouvait ça drôle." },
        { type: "qcm", texte: "musee", question: "**Reading Part 4 — same text (museum).**\n**Gap 13** : *I didn't think I would be able to sleep there. (13) ___ The next thing I knew, Dan was waking us up.*", choix: ["The building felt very different once it was empty.", "We had to pay twenty pounds each for the tickets.", "Suddenly, someone grabbed my arm and I screamed.", "The whale was discovered on a beach a long time ago.", "But I was so tired that I fell asleep immediately."], reponse: 4, explication: "*But* s'oppose à *I didn't think I would be able to sleep* ; *fell asleep immediately* explique *The next thing I knew* (elle s'est endormie tout de suite). La phrase sur la baleine reprend un mot du texte, mais ne relie pas les deux phrases." },

        // ── Reading Part 5
        { type: "qcm", texte: "refuge", question: `**Reading Part 5.** Read the text and choose the correct word for each gap.

**Gap 14** : *I decided to ___ part in a volunteering project.*`, choix: ["make", "have", "do", "take"], reponse: 3, explication: "**Take part in** = participer à. *Make part* ou *do part* n'existent pas." },
        { type: "qcm", texte: "refuge", question: "**Reading Part 5 — same text (animal shelter).**\n**Gap 15** : *At first I was ___ of the big dogs.*", choix: ["worried", "anxious", "frightening", "afraid"], reponse: 3, explication: "**Afraid of** = avoir peur de. *Worried* et *anxious* se construisent avec *about* ; *frightening* (effrayant) décrit ce qui fait peur, pas la personne qui a peur." },
        { type: "qcm", texte: "refuge", question: "**Reading Part 5 — same text (animal shelter).**\n**Gap 16** : *I ___ a lot of experience.*", choix: ["gained", "won", "earned", "took"], reponse: 0, explication: "On **acquiert** de l'expérience : **gain experience**. *Win* = gagner un match ou un prix ; *earn* = gagner de l'argent en travaillant." },
        { type: "qcm", texte: "refuge", question: "**Reading Part 5 — same text (animal shelter).**\n**Gap 17** : *Now I ___ on really well with all the animals.*", choix: ["go", "come", "get", "keep"], reponse: 2, explication: "**Get on (well) with** = bien s'entendre avec. *Go on* = continuer ; *come on* = allez ! ; *keep on* = continuer à." },

        // ── Reading Part 6
        { type: "saisie", texte: "jade", question: `**Reading Part 6.** Read the e-mail and write ONE word for each gap.

**Gap 18** : *the concert I went ___ on Saturday.*`, reponses: ["to"], explication: "*Go* **to** a concert : la préposition reste à la fin de la relative (*the concert I went to*)." },
        { type: "saisie", texte: "jade", question: "**Reading Part 6 — same e-mail (Jade).**\n**Gap 19** : *It was the best concert I've ___ been to!*", reponses: ["ever"], explication: "Superlatif + present perfect : *the best... I've* **ever** *been to* = le meilleur que j'aie jamais vu." },
        { type: "saisie", texte: "jade", question: "**Reading Part 6 — same e-mail (Jade).**\n**Gap 20** : *The band played ___ nearly three hours.*", reponses: ["for"], explication: "Devant une **durée** : **for** (*for nearly three hours*)." },
        { type: "saisie", texte: "jade", question: "**Reading Part 6 — same e-mail (Jade).**\n**Gap 21** : *My brother, ___ is a big fan, bought a T-shirt.*", reponses: ["who"], explication: "Relatif sujet pour une **personne**, entre virgules : **who**. *That* est impossible après une virgule ; *which* est pour les choses." },

        // ── Writing
        { type: "redaction", question: `**Writing Part 1 — Question 22.** Read this e-mail from your English friend Sam and the notes you have made. Write your e-mail to Sam using **all the notes**. Write **about 100 words**.

*Hi!*
*I've got some great news: my family is going to spend two weeks in France this summer!* → note : **Fantastic!**
*Would you like to meet up while we're there?* → note : **Yes, suggest when**
*What's the best way to travel around your region?* → note : **Explain**
*And what's one dish we really must try?* → note : **Tell Sam**
*Sam*`, corrige: `**Model answer (102 words)**

*Hi Sam,*

*That's fantastic news! I'm really happy you're coming to France this summer.*

*Of course I'd love to meet up. How about the second weekend of your holiday? My exams will be over by then, so I'll have lots of free time.*

*The best way to travel around my region is by train, because it's fast and quite cheap. If you want to visit the small villages, though, you'll need a car or a bike.*

*You really must try a galette, which is a kind of pancake made with buckwheat flour. They're delicious with cheese and ham!*

*Write back soon,*
*Louise*

**Grille** : les **quatre notes** traitées (réaction, date proposée, transport expliqué, plat) ; ton amical ; paragraphes et connecteurs (*so, because, though*) ; langue variée (*How about...?*, *If you want..., you'll need*, relative *which is a kind of...*).` },
        { type: "redaction", question: `**Writing Part 2 — Question 23.** Choose **ONE** task. Write **about 100 words**.

**Option A (article).** You see this announcement in an English-language magazine for teenagers.
**Articles wanted! — The perfect weekend**
*What would your perfect weekend be like? Where would you go, and who would you spend it with? Why?*

**Option B (story).** Your English teacher has asked you to write a story. Your story must begin with this sentence:
**As soon as I got on the train, I knew something was wrong.**`, corrige: `**Option A — model article (103 words)**

**My perfect weekend**

*Have you ever imagined a weekend with no homework and no alarm clock? Here is mine.*

*On Saturday, I would take the train to the Alps with my two best friends. We would rent mountain bikes and ride along the lakes, then have a huge picnic by the water.*

*In the evening, we would sleep in a wooden cabin and watch the stars, because in the mountains the sky is amazing.*

*On Sunday, my family would join us for a long lunch in a little restaurant. For me, the perfect weekend means nature, friends and good food.*

*What about yours?*

**Option B — model story (97 words)**

*As soon as I got on the train, I knew something was wrong. The carriage was completely empty, and the doors closed behind me with a loud bang.*

*I checked my ticket: the train to Bordeaux was leaving from platform 4. I was on platform 5! I ran to the door, but the train had already started moving.*

*Just then, a guard appeared. “Don't worry,” she said with a smile. “This train is going to the depot, but we'll stop at the next station.”*

*Twenty minutes later, I was on the right train, feeling embarrassed but relieved.*

**Grille** : article = titre, question d'ouverture, **les trois questions** (où, avec qui, pourquoi), conditionnel *would* pour une situation imaginaire, conclusion vers le lecteur. Histoire = phrase imposée reprise **mot pour mot**, temps du récit (prétérit, *past perfect* *had already started*), dialogue, sentiments, vraie fin.` },

        // ── Listening
        { type: "qcm", question: `**Listening Part 1 — Question 24 (transcript).** *What will the weather be like on Saturday?*
*Man : And now the weekend weather. Friday will stay cloudy, with some light rain in the evening. But don't worry: on Saturday the clouds will clear and we'll have sunshine all day. Then on Sunday, strong winds are expected.*
Pictures : clouds and rain / sunshine / wind.`, choix: ["clouds and rain", "sunshine", "wind"], reponse: 1, explication: "*On Saturday the clouds will clear and we'll have sunshine all day* : **soleil** samedi. Les nuages et la pluie, c'est vendredi ; le vent, dimanche." },
        { type: "qcm", question: `**Listening Part 2 — Question 25 (transcript).** *You hear a girl telling her friend about a holiday job. What does she say about it?*
*Boy : So how's the job at the bookshop? Girl : The pay's not great, to be honest, and I have to start at eight. But I've learned so much about how a business works. I'd do it again next summer for sure.*`, choix: ["She is glad she took it.", "She wants a job that pays more.", "She finds the early starts too difficult."], reponse: 0, explication: "Elle cite deux points négatifs, **mais** (*But*) elle a beaucoup appris et le refera l'été prochain : elle est **contente** de ce job. Le salaire et l'horaire sont des pièges." },
        { type: "saisie", texte: "filmclub", question: `**Listening Part 3 — Question 26 (transcript).** Complete the notes.
Notes : **The club meets every ___.**`, reponses: ["Thursday", "Thursdays", "on Thursday", "on Thursdays"], explication: "*We meet every Thursday* → **Thursday**. Attention à l'orthographe (T-H-U-R-S-D-A-Y) : elle compte en Part 3." },
        { type: "saisie", texte: "filmclub", question: "**Listening Part 3 — Question 27 (same transcript, film club).**\nNotes : **Organiser's name : Ms ___**", reponses: ["Varga", "Ms Varga"], explication: "Le nom est **épelé** : V-A-R-G-A → **Varga**." },
        { type: "qcm", question: `**Listening Part 4 — Question 28 (transcript, interview).** *Interviewer : Leo, you've just cycled from Paris to Rome with your dad. Why did you decide to do it? Leo : People always think it was for charity, and we did raise some money in the end. But really, my dad had always dreamed of doing it, and when he turned fifty, I said, “Let's go!” I wanted to share his dream with him.*
Why did Leo do the trip?`, choix: ["to raise money for charity", "to help his father do something he had always wanted to do", "to celebrate his own birthday"], reponse: 1, explication: "*My dad had always dreamed of doing it... I wanted to share his dream* : réaliser le **rêve de son père**. L'argent pour une association est venu **en plus** (*in the end*), et c'est l'anniversaire du père (cinquante ans), pas celui de Leo." },

        // ── Speaking
        { type: "redaction", question: `**Speaking — Question 29.** Entraîne-toi à voix haute (seul ou avec quelqu'un), puis écris tes idées.

**Part 3.** *Your class wants to raise money for a local hospital. Here are some ideas : a cake sale, a sponsored run, a school concert, a car wash, a second-hand clothes sale. Talk together about the different ideas and say which would raise the most money.*

**Part 4.** *Do you think young people should do volunteering? Why? / What could you do to help people in your town?*`, corrige: `**Exemple de discussion (Part 3)**

*A : Shall I start? I think a cake sale is a good idea, because everyone loves cakes and it's easy to organise.*
*B : That's true, but we wouldn't make much money. What about a sponsored run? Families could pay for every kilometre.*
*A : Good point. But some students don't like running. How about a school concert? We could sell tickets to parents.*
*B : I agree, that would raise a lot. So shall we choose the concert?*
*A : Yes, let's choose the concert.*

**Exemple de réponse (Part 4)** : *Yes, I think so, because it teaches you to think about other people. For example, my cousin helps at a food bank every Saturday, and she says it has changed the way she sees things. In my town, I could help elderly neighbours with their shopping.*

**Liste de contrôle (1 point par élément réussi, sur 10)**
1. Je propose une idée **avec une raison**.
2. Je **demande l'avis** de mon partenaire (*What do you think?*).
3. Je **réagis** à son idée (*That's true, Good point*).
4. J'exprime un **désaccord poli** (*I see what you mean, but...*).
5. Je fais une **comparaison** (*more money, the best*).
6. Je conduis vers une **décision** (*So shall we choose...?*).
7. En Part 4, je donne un **avis** clair.
8. Je le **justifie** (*because*).
9. Je donne un **exemple** personnel.
10. Je parle **sans longs silences**, en reformulant si un mot me manque.` },

        // ── Bilan
        { type: "redaction", question: "**Bilan — Question 30.** Compte tes points (Reading sur 21, Writing sur 40, Listening sur 5, Speaking sur 10), calcule un pourcentage par compétence, puis écris ton plan de révision pour les trois prochaines semaines.", corrige: `**Exemple de bilan**

- **Reading** : 16/21 → 16 ÷ 21 × 100 ≈ **76 %**. Erreurs surtout en Part 4 (phrases manquantes).
- **Writing** : 28/40 → **70 %**. L'e-mail est bien, mais l'article manque de connecteurs et de phrases complexes.
- **Listening** : 3/5 → **60 %**. Pièges sur les informations qui changent (*but, in the end*).
- **Speaking** : 7/10 → **70 %**. Je ne demande pas assez l'avis de mon partenaire.

**Plan de révision**
1. **Semaine 1** : Listening (chapitre « Listening ») — 15 minutes d'écoute en anglais chaque jour (podcast, série en VO), en notant les mots *but, actually, in the end*.
2. **Semaine 2** : Reading Part 4 (chapitre « Reading Part 4 ») et un article de 100 mots par semaine, avec *However, What's more, If I..., I would...*
3. **Semaine 3** : Speaking avec un camarade (Part 3 : *What do you think? Do you agree?*), puis refaire l'examen blanc chronométré.

**Repère** : ces pourcentages sont **indicatifs** ; le vrai score est donné sur l'échelle Cambridge (140 à 159 = B1, 160 et plus = B2).` },
      ],
    },
  ],
};
