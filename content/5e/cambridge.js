export default {
  chapitres: [
    // ───────────────────────────── 1. L'examen
    {
      id: "presentation-examen",
      titre: "Découvrir l'examen A2 Key for Schools",
      theme: "L'examen",
      cours: `
## Qu'est-ce que l'A2 Key for Schools ?
L'**A2 Key for Schools** (on dit aussi **KET**, pour *Key English Test*) est un examen d'anglais de **Cambridge English**. La version *for Schools* a exactement le même niveau et le même format que l'A2 Key « adultes », mais les sujets parlent de la vie des collégiens : l'école, les amis, les loisirs, les vacances.

Il certifie le niveau **A2** du Cadre européen commun de référence pour les langues (CECRL) : tu sais comprendre et utiliser des phrases simples de la vie quotidienne, te présenter, parler de ta famille, de tes goûts, de ce que tu as fait le week-end.

> **À retenir** : le certificat n'a pas de date d'expiration. L'examen ne se « rate » pas comme un contrôle : de 100 à 150 points, tu reçois un certificat qui indique ton niveau réel (A1, A2 ou B1). Seul un score inférieur à 100 ne donne pas de certificat.

## Les trois épreuves
| Épreuve | Durée | Ce qu'on fait | Part de la note |
|---|---|---|---|
| **Reading and Writing** | 1 heure | 7 parties, **32 questions** : 5 parties de lecture (30 questions), 2 d'écriture | 50 % (25 % Reading + 25 % Writing) |
| **Listening** | environ 30 minutes (dont 6 minutes pour reporter les réponses, version papier) | 5 parties, **25 questions** ; chaque enregistrement est entendu **deux fois** | 25 % |
| **Speaking** | 8 à 10 minutes par paire (13 à 15 minutes s'il y a trois candidats) | 2 parties, en général **à deux candidats** face à deux examinateurs | 25 % |

## Version papier ou sur ordinateur ?
Le centre d'examen te propose l'une ou l'autre : le **format est le même** (mêmes parties, même nombre de questions, même durée).
- **Sur papier** : tu reportes tes réponses au crayon sur une feuille de réponses (*answer sheet*), sans temps supplémentaire en Reading and Writing. Résultats en général **4 à 6 semaines** après l'examen.
- **Sur ordinateur** : tu tapes tes réponses directement (attention à l'orthographe au clavier !). Résultats en **5 à 10 jours ouvrés**.
- Dans les deux cas, le **Speaking** se passe **en face à face** avec les examinateurs.
- Attention à ne pas confondre : la version papier de l'A2 Key « adultes » disparaît après la session de décembre 2026, mais l'**A2 Key for Schools** reste proposé **sur papier et sur ordinateur**.

## Le détail de Reading and Writing
| Partie | Questions | Type de tâche |
|---|---|---|
| Part 1 | 6 | Six textes courts (panneaux, notes, messages) : choisir le sens correct (3 propositions) |
| Part 2 | 7 | Appariement : relier 7 questions à trois textes courts sur un même thème |
| Part 3 | 5 | Un texte long et 5 questions à choix multiples (3 propositions) |
| Part 4 | 6 | Texte informatif à trous à choix multiples, 3 propositions (surtout du vocabulaire) |
| Part 5 | 6 | *Open cloze* : un e-mail (parfois avec sa réponse) à trous, un mot par trou (surtout de la grammaire) |
| Part 6 | 1 (sur 15 points) | Écrire un e-mail ou une note court (**25 mots ou plus**) à partir de 3 points |
| Part 7 | 1 (sur 15 points) | Écrire une petite histoire (**35 mots ou plus**) à partir de 3 images |

Chaque question de lecture vaut 1 point. Chaque rédaction est notée sur 15 : 0 à 5 points pour chacun des trois critères **Content**, **Organisation** et **Language** (voir les chapitres Writing).

## Le détail de Listening
| Partie | Questions | Type de tâche |
|---|---|---|
| Part 1 | 5 | Cinq courts dialogues : choisir la bonne **image** (3 images) |
| Part 2 | 5 | Un monologue : **compléter des notes** (un mot, un nombre, une date, une heure) |
| Part 3 | 5 | Un dialogue plus long : 5 questions à 3 propositions |
| Part 4 | 5 | Cinq courts textes : trouver l'**idée principale** (le sujet, le message, la raison de l'appel) |
| Part 5 | 5 | Un dialogue : **relier** 5 personnes (ou jours) à des éléments d'une liste |

## La notation
Chaque compétence (Reading, Writing, Listening, Speaking) compte pour **un quart** de la note. Tu reçois un score pour chaque compétence et un **score global** (la moyenne des quatre) sur l'**échelle Cambridge English** (*Cambridge English Scale*) :

| Score global | Résultat |
|---|---|
| 140 à 150 | *Grade A* : certificat qui reconnaît le niveau **B1** (au-dessus du niveau visé !) |
| 133 à 139 | *Grade B* : certificat de niveau **A2** |
| 120 à 132 | *Grade C* : certificat de niveau **A2** |
| 100 à 119 | certificat Cambridge English de niveau **A1** |
| 80 à 99 | pas de certificat ; le score figure seulement sur le relevé de résultats (*Statement of Results*) |

Le détail par compétence te montre où tu es fort et où tu dois progresser.

## Conseils généraux
- Lis toujours la **consigne** et l'**exemple** (souvent numéroté 0) : il montre ce qu'on attend.
- Ne laisse **aucune case vide** : une mauvaise réponse ne fait pas perdre de points.
- Surveille ton temps en Reading and Writing : garde environ **20 minutes** pour les deux rédactions.
- Pas de dictionnaire pendant l'examen : entraîne-toi à deviner le sens d'un mot grâce au contexte.

>! **Exemple de planning de révision** : chaque semaine, une partie de Reading, une rédaction (Part 6 ou 7), 15 minutes d'écoute en anglais (vidéos, podcasts pour ados) et 5 minutes à parler à voix haute de toi.
`,
      exercices: [
        { type: "qcm", question: "Which level does the A2 Key for Schools exam test?", choix: ["A1", "A2", "B2", "C1"], reponse: 1, explication: "Le nom le dit : **A2** Key. C'est le niveau « élémentaire » du CECRL : le programme de collège le fixe comme objectif en **fin de 5e** pour la première langue (LVA), avant A2+ en 4e et B1 en 3e." },
        { type: "vf", question: "L'épreuve de Speaking se passe en général à deux candidats.", reponse: true, explication: "En général, deux candidats passent ensemble devant deux examinateurs : l'un pose les questions, l'autre écoute et note. Dans la Part 2, tu discutes avec ton partenaire." },
        { type: "saisie", question: "Combien de parties (*parts*) compte l'épreuve Reading and Writing ? (écris un nombre)", reponses: ["7", "seven", "sept"], explication: "**7 parties** : Parts 1 à 5 pour la lecture, Parts 6 et 7 pour l'écriture." },
        { type: "qcm", question: "In Writing Part 6, how many words must you write?", choix: ["10 words or more", "100 words or more", "25 words or more", "exactly 50 words"], reponse: 2, explication: "Le message ou l'e-mail de la Part 6 doit faire **25 mots ou plus**. L'histoire de la Part 7 en demande **35 ou plus**." },
        { type: "vf", question: "Pendant l'examen, chaque enregistrement de Listening n'est entendu qu'une seule fois.", reponse: false, explication: "Chaque enregistrement est entendu **deux fois**. Profite de la première écoute pour répondre et de la seconde pour vérifier." },
        { type: "qcm", question: "Un élève obtient **142** sur l'échelle Cambridge. Que signifie ce résultat ?", choix: ["Il a échoué", "Il a le niveau A1", "Il a le niveau A2 de justesse", "Il obtient le Grade A et son niveau est reconnu B1"], reponse: 3, explication: "De **140 à 150**, c'est le *Grade A* : le certificat indique que ton niveau dépasse l'A2 et atteint le **B1**." },
        { type: "qcm", question: "Quelle compétence compte le plus dans la note finale ?", choix: ["Aucune : chacune compte pour un quart", "Reading", "Writing", "Speaking"], reponse: 0, explication: "Reading, Writing, Listening et Speaking comptent **chacune pour 25 %**. Aucune ne peut être négligée." },
        { type: "saisie", question: "Dans quelle partie de Reading and Writing écris-tu une histoire à partir de trois images ? (écris le numéro)", reponses: ["7", "part 7", "seven"], explication: "C'est la **Part 7** : une histoire de 35 mots ou plus." },
        { type: "redaction", question: "Un camarade passe le KET le mois prochain et il est stressé. Explique-lui en français, en 6 à 8 lignes, comment se déroulent les trois épreuves et donne-lui trois conseils.", corrige: `**Exemple de réponse**

L'examen a trois épreuves. **Reading and Writing** dure environ une heure : cinq parties de lecture (petits messages, appariement, texte long, deux textes à trous) puis deux rédactions, un message de 25 mots ou plus et une histoire de 35 mots ou plus. **Listening** dure environ 30 minutes, en cinq parties, et tu entends chaque enregistrement deux fois. **Speaking** dure 8 à 10 minutes, en général avec un autre candidat : d'abord des questions sur toi, puis une discussion à partir d'images.

Mes conseils :
- lis bien l'exemple de chaque partie ;
- ne laisse aucune réponse vide, tu ne perds pas de points ;
- garde environ 20 minutes pour les deux rédactions.

**Critères** : les trois épreuves sont citées avec leur contenu, les durées sont plausibles, les conseils sont concrets.` },
        { type: "qcm", question: "Un élève obtient **115** sur l'échelle Cambridge. Que reçoit-il ?", choix: ["Rien du tout", "Un certificat de niveau A1", "Un certificat A2 (Grade C)", "Un certificat B1"], reponse: 1, explication: "De **100 à 119**, Cambridge délivre un certificat qui atteste le niveau **A1**. Le certificat A2 commence à **120** (Grade C). En dessous de 100, le score est indiqué sur le relevé de résultats, mais sans certificat." },
        { type: "saisie", question: "Combien de questions compte l'épreuve de Listening ? (écris un nombre)", reponses: ["25", "twenty-five", "twenty five", "vingt-cinq"], explication: "**25 questions** : 5 parties de 5 questions, chaque enregistrement entendu deux fois." },
        { type: "vf", question: "Dans la version sur ordinateur, les parties et le nombre de questions sont les mêmes que dans la version papier.", reponse: true, explication: "Le format est **identique**. Ce qui change : tu tapes tes réponses au clavier, et les résultats arrivent plus vite (5 à 10 jours ouvrés au lieu de 4 à 6 semaines). Le Speaking reste en face à face." },
        { type: "qcm", question: "Sur combien de points est notée chaque rédaction (Part 6 et Part 7) ?", choix: ["5 points", "15 points : 0 à 5 pour Content, Organisation et Language", "20 points", "10 points pour l'orthographe seulement"], reponse: 1, explication: "Chaque rédaction vaut **15 points** : trois critères (*Content*, *Organisation*, *Language*) notés chacun de 0 à 5." },
      ],
    },

    // ───────────────────────────── 2. Reading Part 1
    {
      id: "reading-signes-messages",
      titre: "Reading Part 1 : signes et messages courts",
      theme: "Reading",
      cours: `
## La tâche
Tu lis **6 textes très courts** : panneaux (*signs*), affiches, étiquettes, notes, SMS, e-mails. Pour chacun, tu choisis parmi **3 phrases (A, B, C)** celle qui a **le même sens** que le texte.

## La méthode en 4 étapes
1. **Qui écrit, à qui, où ?** Un panneau dans une piscine, un mot d'une mère à son fils, un message d'un professeur... Le contexte aide à comprendre.
2. **Lis le texte en entier**, puis les trois propositions.
3. **Élimine** : une proposition fausse contient souvent un mot du texte, mais avec un autre sens (piège !).
4. **Vérifie** que la réponse choisie dit *exactement* la même chose, ni plus ni moins.

>! **Exemple**
>! *SWIMMING POOL — Children under 8 must be with an adult.*
>! A. Children under 8 cannot use the pool.
>! B. Young children can only swim if an adult is with them.
>! C. Adults must not swim with children.
>! → **B**. A est trop fort (ils peuvent nager, mais accompagnés) ; C dit le contraire.

## Le vocabulaire des panneaux
| Anglais | Sens |
|---|---|
| *No entry* | Entrée interdite |
| *Out of order* | En panne |
| *Closed for repairs* | Fermé pour travaux |
| *Keep off the grass* | Ne pas marcher sur la pelouse |
| *Sale — 50% off* | Soldes — moins 50 % |
| *Tickets available at reception* | Billets en vente à l'accueil |
| *Please do not feed the animals* | Ne pas nourrir les animaux |
| *Open daily* / *Open weekdays* | Ouvert tous les jours / en semaine |
| *Staff only* | Réservé au personnel |

## Les mots qui changent tout
- **must / mustn't** (obligation / interdiction), **don't have to** (ce n'est pas obligatoire) ;
- **only**, **all**, **every**, **until** (jusqu'à), **before**, **after** ;
- **free** = gratuit *ou* libre ; **book** = réserver ; **late** = en retard.

> **À retenir** : la bonne réponse **reformule** le texte avec d'autres mots. Méfie-toi de la proposition qui reprend les mots du texte mot pour mot : c'est souvent le piège.
`,
      exercices: [
        { type: "qcm", question: "**LIFT OUT OF ORDER — Please use the stairs.**\nWhat does the sign say?", choix: ["The lift is not working.", "The stairs are closed.", "You must wait for the lift.", "The lift is only for staff."], reponse: 0, explication: "*Out of order* = en panne. On doit donc prendre l'escalier : l'ascenseur ne fonctionne pas." },
        { type: "qcm", question: "**Message** — *Hi Tom, the football match is now at 4 pm, not 3. Bring your boots! Sam*\nWhat is Sam telling Tom?", choix: ["The match is cancelled.", "Tom must buy new boots.", "The match starts one hour later.", "The match starts at 3 pm."], reponse: 2, explication: "Le match passe de 15 h à 16 h : il commence **une heure plus tard**. Tom doit apporter ses chaussures, pas en acheter." },
        { type: "vf", question: "**SCHOOL LIBRARY — Books must be returned within two weeks.**\nCe panneau signifie qu'on peut garder un livre deux semaines au maximum.", reponse: true, explication: "*Within two weeks* = dans un délai de deux semaines. Il faut rendre le livre avant la fin des deux semaines." },
        { type: "qcm", question: "**MUSEUM — Free entry for students on Mondays**\nWhich sentence is correct?", choix: ["Students can visit the museum only on Mondays.", "Students don't pay on Mondays.", "The museum is closed on Mondays.", "Everybody can enter free every day."], reponse: 1, explication: "*Free* signifie ici **gratuit**. Le lundi, les élèves ne paient pas. Ils peuvent venir les autres jours, mais en payant : « *only on Mondays* » est donc faux." },
        { type: "saisie", question: "Traduis le panneau en français : **KEEP OFF THE GRASS**", reponses: ["ne pas marcher sur la pelouse", "ne marchez pas sur la pelouse", "pelouse interdite", "interdit de marcher sur la pelouse", "ne pas marcher sur l'herbe", "ne marchez pas sur l'herbe", "défense de marcher sur la pelouse", "interdiction de marcher sur la pelouse", "restez hors de la pelouse"], explication: "*Keep off* = rester à l'écart de ; *the grass* = la pelouse. C'est le panneau classique des parcs anglais." },
        { type: "qcm", question: "**Note** — *Mum, I've gone to Lucy's house to do our science project. I'll be back before dinner. Emma*\nWhy did Emma write this note?", choix: ["To invite Lucy to dinner", "To ask her mum for help with science", "To say she will be late for dinner", "To explain where she is"], reponse: 3, explication: "Emma explique **où elle est** (chez Lucy) et pourquoi. Elle rentrera *before dinner* : elle ne sera donc pas en retard (*To say she will be late for dinner* est faux)." },
        { type: "vf", question: "**SCHOOL TRIP — You don't have to bring lunch. Sandwiches will be provided.**\nCe message signifie qu'il est interdit d'apporter son déjeuner.", reponse: false, explication: "*Don't have to* = **ce n'est pas obligatoire**, et non « c'est interdit » (ce serait *mustn't*). On peut apporter son repas, mais ce n'est pas nécessaire." },
        { type: "qcm", question: "**SPORTS CENTRE — Tennis courts must be booked one day in advance.**\nWhat does it mean?", choix: ["You can play tennis for one day only.", "You can't book the courts.", "The tennis courts are closed today.", "You must reserve a court the day before you play."], reponse: 3, explication: "*Book* = réserver ; *one day in advance* = un jour à l'avance. Il faut donc réserver **la veille**." },
        { type: "redaction", question: "Écris en anglais un petit panneau (une ligne) pour la cantine de ton collège, puis trois phrases A, B, C dont une seule a le même sens. Indique la bonne réponse et explique en français pourquoi les deux autres sont fausses.", corrige: `**Exemple**

*CANTEEN — Please do not take food outside.*

A. You can eat outside if the weather is nice.
B. Food must stay in the canteen.
C. The canteen is closed outside lunchtime.

**Réponse : B.** A dit le contraire du panneau. C parle des horaires d'ouverture, dont le panneau ne dit rien.

**Critères** : un panneau court et correct en anglais ; une seule proposition équivalente ; un piège qui reprend un mot du texte (ici *outside*).` },
        { type: "qcm", question: `**Exam practice (Part 1).** Look at the notice. What does it say?
**TOWN SWIMMING POOL — The pool will close at 5 pm on Friday for a swimming competition.**`, choix: ["You can't swim at the pool on Friday evening.", "You can watch a swimming competition every Friday.", "The pool is closed all day on Friday."], reponse: 0, explication: "La piscine ferme **à 17 h** vendredi : on ne peut donc pas nager vendredi soir. La compétition n'a lieu que ce vendredi-là (pas *every Friday*), et la piscine est ouverte le matin et l'après-midi : *closed all day* est trop fort." },
        { type: "qcm", question: `**Exam practice (Part 1).** Read the message.
*Hi Oscar, Dad can't drive us to the concert tonight, so let's take the bus. It leaves from outside the bank at 6.30. Ellie*
What is Ellie doing?`, choix: ["changing the time of the concert", "telling Oscar how they will travel", "asking Oscar's dad for a lift"], reponse: 1, explication: "Ellie explique **comment** ils iront au concert : en bus, et non plus en voiture. 6.30 est l'heure du bus, pas celle du concert ; et c'est le père d'Ellie (*Dad*) qui ne peut pas les conduire : elle ne demande rien au père d'Oscar." },
        { type: "qcm", question: `**Exam practice (Part 1).** Look at the sign. What does it say?
**SCHOOL SHOP — Pens, pencils and notebooks: half price this week only.**`, choix: ["Notebooks are cheaper than pens this week.", "The school shop will be closed next week.", "Some things in the shop cost less for a short time."], reponse: 2, explication: "*Half price* = moitié prix, *this week only* = seulement cette semaine : certains articles coûtent **moins cher pendant peu de temps**. Le panneau ne compare pas les cahiers et les stylos, et il ne dit rien d'une fermeture : *only* porte sur la réduction." },
      ],
    },

    // ───────────────────────────── 3. Reading Part 2
    {
      id: "reading-appariement",
      titre: "Reading Part 2 : relier des questions à des textes",
      theme: "Reading",
      cours: `
## La tâche
Tu lis **trois textes courts** (A, B, C) sur un même sujet : par exemple trois ados qui parlent de leur club de sport, ou trois musées. Puis tu réponds à **7 questions** du type *Which person...?* ou *Which museum...?* en choisissant A, B ou C. Une même lettre peut servir plusieurs fois.

## La méthode
1. **Lis d'abord les questions** et souligne le mot-clé de chacune : *Which person* **started** *the activity* **because of a friend**?
2. **Lis un texte** et cherche l'idée correspondante (pas forcément les mêmes mots !).
3. Attention aux **synonymes** et aux **reformulations** :

| Dans la question | Dans le texte |
|---|---|
| *didn't enjoy it at first* | *I hated it in the beginning* |
| *practises every day* | *I train seven days a week* |
| *it's cheap* | *it doesn't cost much* |
| *a family member taught her* | *my uncle showed me how to do it* |

**Piège classique** : les trois textes parlent souvent de la même chose (par exemple l'argent), mais un seul correspond exactement à la question. *My parents pay for it* ≠ *It's free*.

>! **Exemple**
>! A. **Lena** : *I joined the drama club last year. I was shy, but now I love being on stage.*
>! B. **Max** : *My sister was in the club, so I joined too. We rehearse twice a week.*
>! C. **Jade** : *I've been in the club for five years. Next year I want to write my own play.*

*Which person joined because of a family member?* → **B** (*my sister*).
*Which person has changed a lot?* → **A** (timide au début, elle adore maintenant la scène).

> **À retenir** : questions d'abord, mots-clés soulignés, puis recherche d'une **idée équivalente** dans les textes, pas d'un mot identique.
`,
      exercices: [
        { type: "qcm", question: `Read the three texts.
A. **Ryan** : *I go swimming before school three times a week. The water is really cold at 7 am!*
B. **Chloé** : *I play basketball with my dad's team. They're older, but they're very kind to me.*
C. **Omar** : *I tried judo, but I didn't like it. Now I go running with my dog every evening.*

Which person does sport with adults?`, choix: ["Ryan", "Chloé", "Omar"], reponse: 1, explication: "Chloé joue avec l'équipe de son père : *they're older* (ils sont plus âgés). Ce sont des adultes." },
        { type: "qcm", question: "Same texts (Ryan, Chloé, Omar). Which person stopped doing a sport?", choix: ["Ryan", "Chloé", "Omar"], reponse: 2, explication: "Omar a essayé le judo, *but I didn't like it* : il a arrêté et fait maintenant de la course." },
        { type: "qcm", question: "Same texts (Ryan, Chloé, Omar). Which person does sport very early in the morning?", choix: ["Omar", "Chloé", "Ryan"], reponse: 2, explication: "Ryan nage *before school* et parle de *7 am* : c'est très tôt le matin. Omar court le soir (*every evening*)." },
        { type: "vf", question: "Dans la Part 2, chaque lettre (A, B, C) ne peut être utilisée qu'une seule fois.", reponse: false, explication: "Il y a 7 questions pour 3 textes : au moins une lettre sert forcément **plusieurs fois** (en pratique, chacune sert deux ou trois fois)." },
        { type: "qcm", question: "Question : *Which camp is good for people who don't like being outside?* Which sentence from a text matches?", choix: ["*All our activities take place indoors.*", "*We go walking in the mountains every day.*", "*You can sleep in a tent.*", "*The camp is near a beautiful lake.*"], reponse: 0, explication: "*Indoors* = à l'intérieur. C'est l'idée contraire de *outside* : ce camp convient à quelqu'un qui n'aime pas être dehors." },
        { type: "saisie", question: "Trouve dans cette phrase le mot qui signifie « bon marché, pas cher » : *The tickets are cheap, but the café is expensive.*", reponses: ["cheap"], explication: "**Cheap** = bon marché ; son contraire est **expensive** (cher)." },
        { type: "qcm", question: "Question : *Which person found the activity difficult at the beginning?* Which sentence matches?", choix: ["*I've always been good at it.*", "*It was really hard for me in the first few weeks.*", "*I'd like to try it one day.*", "*My brother finds it boring.*"], reponse: 1, explication: "*Really hard in the first few weeks* = difficile au début. *I've always been good at it* dit le contraire, *I'd like to try it one day* parle d'une activité jamais essayée, *My brother finds it boring* parle du frère." },
        { type: "vf", question: "*My parents pay for my lessons* correspond à la question *Which person's activity is free?*", reponse: false, explication: "Les parents paient : l'activité n'est donc **pas gratuite** (*free*). C'est un piège typique, car le même thème (l'argent) apparaît." },
        { type: "redaction", question: "Write a short text (40 words or more) about your favourite hobby, like a text from Reading Part 2. Say when you started, how often you do it and what you like about it. Then write one question *Which person...?* that your text answers.", corrige: `**Model answer**

*I started playing the guitar when I was nine because my grandfather gave me his old guitar. Now I practise for thirty minutes every day after school. I love it because I can play songs for my friends at parties.* (40 words)

Question : *Which person got something from a family member?*

**Critères simplifiés**
- **Content** : les trois informations demandées sont là (début, fréquence, ce que j'aime).
- **Organisation** : des phrases reliées par *because*, *now*, *after*.
- **Language** : prétérit pour le passé (*started, gave*), présent pour l'habitude (*practise, love*).

Remarque : la question utilise *got something from a family member* et non *grandfather* : c'est une reformulation, comme à l'examen.` },
        { type: "qcm", question: `**Exam practice (Part 2).** Read what three young people say about animals.
A. **Noah** : *I've got two pets, a rabbit and a hamster. I clean their cages every Saturday. My mum helps me because the rabbit's cage is very big.*
B. **Ella** : *My cat Biscuit is fifteen, so she's older than me! She sleeps all day, but at night she likes playing with my feet.*
C. **Jamal** : *I haven't got a pet because my little sister is allergic to animals. But every Sunday I walk my neighbour's dog, and she gives me some pocket money.*

Which person earns money by looking after an animal?`, choix: ["Noah", "Ella", "Jamal"], reponse: 2, explication: "Jamal promène le chien de sa voisine et elle lui donne de l'argent de poche (*pocket money*). *Earns money* reformule *gives me some pocket money*." },
        { type: "qcm", question: "Same texts (Noah, Ella, Jamal). Which person gets help from a family member?", choix: ["Noah", "Ella", "Jamal"], reponse: 0, explication: "Noah : *My mum helps me*. Jamal parle aussi de sa sœur, mais elle ne l'aide pas : elle est allergique. C'est le piège : un membre de la famille est cité dans deux textes." },
        { type: "qcm", question: "Same texts (Noah, Ella, Jamal). Which person has a very old animal?", choix: ["Noah", "Ella", "Jamal"], reponse: 1, explication: "Ella : sa chatte a quinze ans, *she's older than me*. Pour un chat, c'est très âgé. Rien n'est dit sur l'âge des animaux de Noah ni du chien de la voisine." },
      ],
    },

    // ───────────────────────────── 4. Reading Part 3
    {
      id: "reading-texte-long",
      titre: "Reading Part 3 : comprendre un texte long",
      theme: "Reading",
      cours: `
## La tâche
Tu lis **un texte plus long** (un article de magazine, le récit d'un ado, une interview) et tu réponds à **5 questions à choix multiples** (3 propositions). Les questions suivent **l'ordre du texte**.

## La méthode
1. **Lis le titre et le texte une première fois** sans t'arrêter sur les mots inconnus : de quoi parle-t-il ? Qui ? Où ? Quand ?
2. **Lis la question 1**, puis retrouve le passage qui correspond (souvent le 1er paragraphe).
3. **Relis ce passage lentement** et compare chaque proposition avec le texte.
4. Les questions portent souvent sur les **sentiments** (*How did she feel?*), les **raisons** (*Why did he...?*) ou l'**opinion** de la personne.

## Les pièges
- Une proposition **vraie en général** mais qui ne répond pas à la question.
- Une proposition qui reprend **un mot du texte** dans une autre idée.
- Les **négations** et les mots de contraste : *but*, *however*, *at first... then*, *I thought... but actually*.

>! **Exemple**
>! *At first, I didn't want to go to the summer camp because I didn't know anybody. But on the first day I met Kim, and we became best friends.*
>! **How did the writer feel before the camp?**
>! A. excited — B. **worried** — C. bored
>! → **B** : elle ne connaissait personne et ne voulait pas y aller ; *worried* (inquiète) résume ce sentiment.

## Deviner un mot inconnu
- Regarde la **nature du mot** (nom, verbe, adjectif) et ce qui l'entoure.
- Cherche un mot de la **même famille** : *dangerous* → *danger* ; *helpful* → *help*.
- Pense aux mots **transparents** (*museum, adventure, delicious*), mais méfie-toi des faux amis (chapitre « Faux amis »).

> **À retenir** : les questions sont dans l'ordre du texte. Pour chaque question, **retrouve le passage**, puis vérifie les trois propositions une par une avant de choisir.
`,
      exercices: [
        { type: "qcm", question: `Read the text.
*Last summer, my family moved from London to a small village in Scotland. At first I hated it: there was no cinema and the bus to town only came twice a day. But then I joined the village football team. Now I know everybody, and I go fishing with my new friends at the weekend. I don't miss London at all!* — **Ben, 13**

Why didn't Ben like the village at first?`, choix: ["There wasn't much to do there.", "He didn't like football.", "His new school was too big."], reponse: 0, explication: "Pas de cinéma, peu de bus : il n'y avait **pas grand-chose à faire**. Le football est au contraire ce qui l'a aidé." },
        { type: "qcm", question: "Same text (Ben). What helped Ben to make friends?", choix: ["Going fishing alone", "Taking the bus to town", "Playing in a team"], reponse: 2, explication: "*Then I joined the village football team. Now I know everybody* : c'est l'équipe de foot qui l'a aidé. Il pêche *with my new friends*, donc pas seul." },
        { type: "vf", question: "Same text (Ben). *I don't miss London at all* signifie que Ben voudrait revenir à Londres.", reponse: false, explication: "*Miss* = regretter, manquer. *I don't miss London at all* = Londres ne lui manque **pas du tout**. Il est content dans son village." },
        { type: "qcm", question: "Which word best describes Ben's feelings now?", choix: ["happy", "lonely", "angry"], reponse: 0, explication: "Il connaît tout le monde et Londres ne lui manque pas : il est **content** (*happy*). *Lonely* (seul) décrit ce qu'il ressentait au début." },
        { type: "qcm", question: "*Mia was **exhausted** after the 10-kilometre walk, so she went straight to bed.* What does *exhausted* probably mean?", choix: ["very hungry", "very tired", "very excited"], reponse: 1, explication: "Après 10 km de marche, elle va directement au lit : *exhausted* veut dire **épuisée**, très fatiguée." },
        { type: "saisie", question: "Find the adjective of the same family as *danger* (it describes something that can hurt you).", reponses: ["dangerous"], explication: "*Danger* (nom) → **dangerous** (adjectif) = dangereux. Le suffixe *-ous* forme de nombreux adjectifs : *famous, nervous*." },
        { type: "qcm", question: "*I thought the museum would be boring, but actually it was brilliant.* What was the writer's opinion after the visit?", choix: ["The museum was boring.", "The museum was too expensive.", "The museum was very good."], reponse: 2, explication: "*I thought... but actually* : l'avis a changé. Après la visite, le musée était **brilliant** (génial). *The museum was boring* est l'avis d'avant la visite : c'est le piège." },
        { type: "vf", question: "Dans la Part 3, les questions suivent l'ordre du texte.", reponse: true, explication: "Oui : la question 1 porte sur le début du texte, la dernière sur la fin (ou parfois sur le texte entier, par exemple « Quel est le meilleur titre ? »)." },
        { type: "redaction", question: "Write a short text (50 words or more) about a time you did something new (a new school, a trip, a sport). Say how you felt **at first**, what happened, and how you feel **now**.", corrige: `**Model answer**

*Last year I started a new school in Lyon. At first I was very nervous because I didn't know anyone and the building was huge. But on the second day, a girl called Inès helped me find my classroom. We became friends quickly. Now I really like my school and I'm not shy any more.* (55 words)

**Critères simplifiés**
- **Content** : sentiment au début, événement, sentiment maintenant : tout y est.
- **Organisation** : *At first... But... Now...* structure le texte, comme les textes de la Part 3.
- **Language** : prétérit (*started, was, helped, became*) puis présent (*like, I'm not*) ; adjectifs de sentiment (*nervous, shy*).` },
      ],
    },

    // ───────────────────────────── 5. Reading Part 4
    {
      id: "reading-cloze-qcm",
      titre: "Reading Part 4 : texte à trous à choix multiples",
      theme: "Reading",
      cours: `
## La tâche
Tu lis un **texte court** (souvent informatif : un animal, un lieu, une personne célèbre) avec **6 trous**. Pour chaque trou, tu choisis le bon mot parmi **3 propositions (A, B, C)**. Les trois mots ont souvent un sens proche : c'est surtout un test de **vocabulaire** et de **mots qui vont ensemble**.

## Ce qu'on teste
- **Les collocations** (mots qui vont toujours ensemble) :

| Correct | Incorrect (calque du français) |
|---|---|
| *make a mistake* | do a mistake |
| *do homework* | make homework |
| *take a photo* | do a photo |
| *have breakfast* | take breakfast |
| *go shopping* | do shopping (sens « aller faire les magasins ») |
| *win a match* / *earn money* | gain a match |

- **Les verbes proches** : *say / tell / speak / talk* ; *look / see / watch* ; *bring / take* ; *lend / borrow*.
- **Les prépositions après un mot** : *interested* **in**, *good* **at**, *afraid* **of**, *famous* **for**, *listen* **to**, *wait* **for**.

>! **Exemple**
>! *The giant panda lives in China. It ___ about 12 hours a day eating bamboo.*
>! A. passes — B. **spends** — C. takes
>! → **B**. *Spend time doing something* = passer du temps à faire quelque chose. *Pass* est un faux ami ici.

## La méthode
1. Lis **tout le texte** avant de répondre.
2. Pour chaque trou, regarde **les mots juste avant et juste après** (préposition, nom qui suit...).
3. **Essaie les trois mots** dans la phrase ; élimine ceux qui ne vont pas avec la construction.

> **À retenir** : ici, la question n'est pas « quel mot a le bon sens ? » mais « quel mot va avec **ce qui l'entoure** ? ». Apprends le vocabulaire **par groupes de mots** : *spend time, tell a story, make friends*.
`,
      exercices: [
        { type: "qcm", question: "*Can you ___ me the way to the station, please?*", choix: ["say", "speak", "tell", "talk"], reponse: 2, explication: "*Tell somebody something* : on dit **tell me the way**. *Say* ne prend pas directement la personne (*say something to somebody*)." },
        { type: "qcm", question: "*I always ___ my homework before dinner.*", choix: ["do", "make", "have", "take"], reponse: 0, explication: "On dit **do homework** (faire ses devoirs). *Make* s'emploie pour *make a cake, make a mistake, make friends*." },
        { type: "qcm", question: "*Leo is very good ___ maths.*", choix: ["in", "on", "for", "at"], reponse: 3, explication: "*Good* **at** something = doué pour quelque chose. Le français « bon en » pousse à l'erreur *good in*." },
        { type: "saisie", question: "Complete with one word: *She ___ two hours a day practising the piano.* (passer du temps)", reponses: ["spends"], explication: "*Spend time doing something* : **spends** (avec *she*, on ajoute -s)." },
        { type: "qcm", question: "*Can I ___ your pen? I've forgotten mine.*", choix: ["lend", "take", "give", "borrow"], reponse: 3, explication: "**Borrow** = emprunter (on reçoit) ; **lend** = prêter (on donne). *Can I borrow your pen?* = Puis-je emprunter ton stylo ?" },
        { type: "qcm", question: "*The Eiffel Tower is famous ___ its view of Paris.*", choix: ["for", "with", "of", "by"], reponse: 0, explication: "*Famous* **for** something = célèbre pour quelque chose." },
        { type: "qcm", question: `Read the text and choose the best word.
*Dolphins are very clever animals. They ___ in groups and they can communicate with each other.*`, choix: ["spend", "live", "stand"], reponse: 1, explication: "Pour parler d'un mode de vie : *they* **live** *in groups* (ils vivent en groupe). *Spend* demande un complément de temps ou d'argent (*spend time*) ; *stand* veut dire être debout." },
        { type: "saisie", question: "Complete: *Don't worry if you ___ a mistake. Everybody does!*", reponses: ["make"], explication: "On dit **make a mistake** (faire une erreur), jamais *do a mistake*." },
        { type: "redaction", question: "Write a short factual text (40 words or more) about an animal you like, like the texts in Reading Part 4. Use at least three of these: *live in, eat, spend time, famous for, can*.", corrige: `**Model answer**

*Koalas live in Australia, in eucalyptus trees. They eat only eucalyptus leaves and they spend about twenty hours a day sleeping! Koalas are famous for their soft grey fur and big ears. They can climb very well, but they are slow on the ground.* (44 words)

**Critères simplifiés**
- **Content** : un texte informatif clair, au moins trois expressions imposées.
- **Organisation** : où il vit → ce qu'il mange → ce qui le rend célèbre → ce qu'il sait faire.
- **Language** : présent simple pour des faits généraux ; collocations correctes (*spend time doing, famous for*).` },
        { type: "qcm", question: `**Exam practice (Part 4).** Choose the best word.
*The city of Bath is in the south-west of England. It is ___ for its Roman baths, which are about 2,000 years old.*`, choix: ["special", "famous", "favourite"], reponse: 1, explication: "Seul **famous** se construit avec **for** dans ce sens : *famous for* = célèbre pour. *Special* (spécial) et *favourite* (préféré) ne se construisent pas ainsi. C'est exactement le type de piège de la Part 4 : un seul mot va avec la préposition qui suit." },
        { type: "qcm", question: `**Exam practice (Part 4).** Choose the best word.
*Every year, thousands of tourists ___ the old town to see its beautiful buildings.*`, choix: ["visit", "go", "travel"], reponse: 0, explication: "**Visit** se construit directement avec un complément : *visit the old town*. *Go* et *travel* demandent *to* (*go to the old town*)." },
      ],
    },

    // ───────────────────────────── 6. Reading Part 5
    {
      id: "reading-open-cloze",
      titre: "Reading Part 5 : l'open cloze",
      theme: "Reading",
      cours: `
## La tâche
Tu lis un texte court (un e-mail, parfois suivi de sa réponse) avec **6 trous**, **sans propositions**. Tu écris **un seul mot** par trou. L'orthographe doit être correcte.

## Quels mots manquent ?
Presque toujours des **petits mots de grammaire** :

| Catégorie | Exemples |
|---|---|
| auxiliaires | *am, is, are, was, were, do, does, did, have, has, will* |
| prépositions | *in, on, at, to, for, with, from, of* |
| pronoms | *it, them, him, me, us, who, which* |
| déterminants | *a, an, the, some, any, my, your, their* |
| connecteurs | *and, but, because, so, when, if, than* |
| modaux | *can, must, should, could* |

## La méthode
1. Lis tout le texte une fois pour en comprendre le sens.
2. Pour chaque trou, demande-toi : **quelle nature de mot** manque ? Un verbe ? Une préposition ? Un pronom ?
3. Regarde le **temps** de la phrase : *We ___ to the beach yesterday* → verbe au passé (*went*).
4. Relis la phrase complète : est-elle correcte et naturelle ?

>! **Exemple**
>! *Hi Jo! I'm writing ___ (1) tell you about my holiday. We're staying ___ (2) a hotel near the sea. It's bigger ___ (3) our last hotel.*
>! (1) **to** (but : *to tell*) — (2) **in** (*stay in a hotel*) — (3) **than** (comparatif : *bigger than*)

## Les pièges fréquents
- **there / their / they're** : *there is* (il y a), *their house* (leur maison), *they're* = *they are*.
- **who / which** : *who* pour une personne, *which* pour une chose.
- **since / for** : *since 2020* (depuis un point de départ), *for two years* (pendant une durée).
- Écrire **deux mots** dans un trou : c'est toujours faux.

> **À retenir** : un mot, bien orthographié, et le plus souvent un mot de grammaire. Pense **nature du mot**, puis **temps**, puis **sens**.
`,
      exercices: [
        { type: "saisie", question: "Write ONE word: *My sister is taller ___ me.*", reponses: ["than"], explication: "Après un comparatif (*taller*), on emploie **than** : plus grande **que** moi." },
        { type: "saisie", question: "Write ONE word: *We went ___ the cinema last Saturday.*", reponses: ["to"], explication: "Mouvement vers un lieu : *go* **to** *the cinema*." },
        { type: "saisie", question: "Write ONE word: *I've lived in this town ___ 2019.*", reponses: ["since"], explication: "*2019* est un point de départ : **since**. Avec une durée, on dirait *for seven years*." },
        { type: "saisie", question: "Write ONE word: *___ you like pizza? — Yes, I love it!*", reponses: ["do"], explication: "Question au présent simple avec *you* : auxiliaire **Do**." },
        { type: "qcm", question: "*My friends are coming tonight. ___ bringing pizza!*", choix: ["Their", "There", "They're", "Them"], reponse: 2, explication: "**They're** = *they are* : *they are bringing pizza*. *Their* est un possessif, *there* veut dire « là / il y a »." },
        { type: "saisie", question: "Write ONE word: *The boy ___ lives next door is my best friend.*", reponses: ["who", "that"], explication: "Pour une personne, le pronom relatif est **who** (ou *that*)." },
        { type: "saisie", question: "Write ONE word: *I didn't go to school yesterday ___ I was ill.*", reponses: ["because", "as", "since"], explication: "On donne une raison : **because** (parce que). *As* et *since* sont aussi possibles dans ce sens, mais *because* est le mot attendu au niveau A2." },
        { type: "saisie", question: "Write ONE word: *Is ___ a bank near here? — Yes, opposite the post office.*", reponses: ["there"], explication: "*Is there...?* = Y a-t-il... ? (*there is / there are*)." },
        { type: "redaction", question: `Complete the e-mail with ONE word in each gap, then explain each answer in French.
*Hi Sara, Thanks (1) ___ your e-mail. I'm sorry I wasn't (2) ___ your party last week. I (3) ___ visiting my grandparents. (4) ___ you free next Sunday? We (5) ___ go to the park. Love, Ana*`, corrige: `**Answers**

1. **for** : *thanks for something* (merci pour).
2. **at** : *be at a party* (être à une fête).
3. **was** : prétérit continu *I was visiting* (j'étais en train de rendre visite).
4. **Are** : question avec *be* et *you* : *Are you free?*
5. **could** (ou **can**) : proposition : *We could go to the park* (on pourrait aller au parc).

**Méthode** : pour chaque trou, trouve d'abord la nature du mot (préposition, verbe, verbe *be*, modal), puis le temps de la phrase.` },
      ],
    },

    // ───────────────────────────── 7. Writing Part 6
    {
      id: "writing-message",
      titre: "Writing Part 6 : écrire un message ou un e-mail court",
      theme: "Writing",
      cours: `
## La tâche
On te donne une situation (par exemple : *Your English friend Alex has invited you to the cinema*) et **trois points** à traiter. Tu écris un message, un e-mail ou une note de **25 mots ou plus**.

>! **Exemple de sujet**
>! *You want to go to the swimming pool with your English friend Sam on Saturday. Write an e-mail to Sam.*
>! *In your e-mail:*
>! - *ask Sam to come with you*
>! - *say what time you'll meet*
>! - *tell Sam what to bring.*

## Comment c'est noté (en simple)
Ta rédaction est notée sur **15 points** : **trois critères**, chacun de 0 à 5. L'examinateur cherche d'abord si ton message est **compréhensible** ; de petites fautes qui ne gênent pas la compréhension sont acceptées au niveau A2.

| Critère | Ce que l'examinateur regarde |
|---|---|
| **Content** (contenu) | As-tu traité **les trois points** ? Le lecteur a-t-il compris ce que tu veux ? |
| **Organisation** | Le message est-il bien construit ? Formule d'ouverture, phrases reliées (*and, but, because, so*), formule de fin. |
| **Language** (langue) | Vocabulaire de tous les jours bien choisi, grammaire simple correcte ; les fautes ne doivent pas empêcher de comprendre. |

> **À retenir** : **oublier un des trois points** coûte cher en *Content*. Coche chaque point au brouillon quand tu l'as traité.

## Le modèle
*Hi Sam,*
*Would you like to come to the swimming pool with me on Saturday? Let's meet at the bus stop at 2 pm. Don't forget to bring a towel and some money for a drink!*
*See you soon,*
*Léa* (40 mots)

→ Point 1 : *Would you like to come...?* ; point 2 : *at 2 pm* ; point 3 : *a towel and some money*. Ouverture et fin présentes.

## Phrases utiles
| Pour... | On écrit |
|---|---|
| ouvrir | *Hi Tom, / Hello Anna, / Dear Mr Brown,* |
| inviter | *Would you like to...? / Do you want to...? / Let's...* |
| proposer un moment | *Let's meet at 3 pm in front of the cinema.* |
| s'excuser | *I'm sorry, but I can't come because...* |
| remercier | *Thanks for the lovely present.* |
| demander | *Can you bring...? / What time does it start?* |
| finir | *See you soon, / Love, / Bye for now, / Best wishes,* |

## Les erreurs à éviter
- Écrire **moins de 25 mots** ou, au contraire, un très long texte : 25 à 40 mots suffisent.
- Répondre à un point sans **le développer** (« *Yes.* ») : fais au moins une phrase par point.
- Oublier la **formule de fin** et ton prénom.
`,
      exercices: [
        { type: "vf", question: "Dans la Part 6, il faut écrire 25 mots ou plus et traiter les trois points de la consigne.", reponse: true, explication: "Les deux conditions sont essentielles : un point oublié fait baisser la note *Content*." },
        { type: "qcm", question: "Which sentence is the best way to **invite** a friend?", choix: ["You come to my house.", "Come my house Friday.", "I want you at my house.", "Would you like to come to my house on Friday?"], reponse: 3, explication: "*Would you like to...?* est la formule polie et naturelle pour inviter. Les autres sont incorrectes ou trop brusques." },
        { type: "qcm", question: "Which is a good way to **end** an e-mail to a friend?", choix: ["See you soon,", "Yours faithfully,", "Dear Tom,", "Hello,"], reponse: 0, explication: "*See you soon* (à bientôt) est une fin amicale. *Dear* et *Hello* ouvrent un message ; *Yours faithfully* est une formule très formelle." },
        { type: "saisie", question: "Complete: *I'm sorry, but I can't come ___ I have a dentist appointment.* (give a reason)", reponses: ["because", "as"], explication: "Pour donner une raison : **because** (parce que)." },
        { type: "qcm", question: `The task says: *ask Sam to come, say what time you'll meet, tell Sam what to bring.* A student writes: *Hi Sam, do you want to come to the pool on Saturday? Bring a towel. Bye, Léa.* What is the problem?`, choix: ["The message has no opening.", "The student forgot one of the three points.", "The message is too long.", "The student used *bye*."], reponse: 1, explication: "L'heure du rendez-vous manque (point 2). De plus, le message fait moins de 25 mots : la note *Content* sera basse." },
        { type: "saisie", question: "Complete with one word to make a suggestion: *___ meet at the bus station at 10 am.*", reponses: ["let's", "lets", "let us"], explication: "**Let's** (*let us*) + verbe = proposer : *Let's meet...* = Retrouvons-nous..." },
        { type: "vf", question: "*Dear Mrs Smith* convient pour écrire à ta professeure d'anglais.", reponse: true, explication: "*Dear* + titre + nom est la formule correcte et polie pour un adulte qu'on ne tutoie pas. Pour un ami, *Hi Tom* suffit." },
        { type: "redaction", question: `**Writing Part 6.** Your English friend Jamie has invited you to a birthday party on Saturday, but you can't go. Write an e-mail to Jamie.
In your e-mail:
- say sorry you can't come
- explain why
- suggest another day to meet.
Write **25 words or more**.`, corrige: `**Model answer**

*Hi Jamie,*
*Thanks for the invitation! I'm really sorry, but I can't come to your party on Saturday because I'm visiting my grandparents in Brittany. Can we meet on Sunday afternoon instead? We could go to the park.*
*Love,*
*Hugo* (40 words)

**Critères**
- **Content** : excuse (*I'm really sorry*), raison (*because I'm visiting...*), autre jour (*Sunday afternoon*) : les 3 points sont traités.
- **Organisation** : ouverture, remerciement, développement logique, fin (*Love, Hugo*) ; connecteurs *but, because*.
- **Language** : présent continu pour un projet (*I'm visiting*), modaux (*can't, can, could*), question correcte.` },
        { type: "redaction", question: `**Writing Part 6.** You have a new bike. Write a message to your English friend Kim.
In your message:
- describe your bike
- say where you got it
- invite Kim to go cycling with you.
Write **25 words or more**.`, corrige: `**Model answer**

*Hi Kim,*
*Guess what? I've got a new bike! It's blue and black and it's really fast. My parents gave it to me for my birthday. Would you like to go cycling with me in the forest on Saturday morning?*
*Bye for now,*
*Nina* (44 words)

**Critères**
- **Content** : description (*blue and black, fast*), origine (*my parents gave it to me*), invitation (*Would you like...?*).
- **Organisation** : une idée par phrase, ordre de la consigne respecté, formule de fin.
- **Language** : *have got*, prétérit irrégulier (*gave*), *Would you like to* + verbe.` },
        { type: "redaction", question: `**Writing Part 6.** You are going shopping with your English friend Pat tomorrow. Write an e-mail to Pat.
Say:
- where you want to meet
- what time you want to meet
- what you want to buy.
Write **25 words or more**.`, corrige: `**Model answer**

*Hi Pat,*
*Shall we meet outside the sports shop in the town centre tomorrow? Let's meet at half past ten, because the shops are quieter in the morning. I want to buy some new trainers for basketball.*
*See you tomorrow,*
*Lucas* (41 words)

**Critères (sur 15)**
- **Content (5/5)** : le lieu (*outside the sports shop*), l'heure (*half past ten*) et l'achat (*new trainers*) sont là ; Pat sait exactement quoi faire.
- **Organisation (5/5)** : ouverture, une phrase par point dans l'ordre de la consigne, connecteur *because*, formule de fin.
- **Language (5/5)** : *Shall we...?*, *Let's* + base verbale, *I want to buy*, comparatif *quieter* ; vocabulaire précis.

**Ce qui ferait perdre des points** : oublier l'heure (*Content*), écrire des phrases sans lien (*Organisation*), *I want buy* ou *Let's to meet* (*Language*).` },
      ],
    },

    // ───────────────────────────── 8. Writing Part 7
    {
      id: "writing-histoire",
      titre: "Writing Part 7 : raconter une histoire en images",
      theme: "Writing",
      cours: `
## La tâche
Tu vois **trois images** qui racontent une petite histoire. Tu écris cette histoire en **35 mots ou plus**. Dans l'appli, les images sont **décrites avec des mots** : imagine-les !

>! **Exemple de sujet (images décrites)**
>! 1. *A boy is walking his dog in the park. It's sunny.*
>! 2. *The dog runs after a ball and jumps into the lake.*
>! 3. *The boy and the wet dog are at home. The boy's mum is laughing.*

## La méthode
1. **Une ou deux phrases par image**, dans l'ordre. N'oublie aucune image.
2. Raconte **au passé** : prétérit simple pour les actions (*he walked, the dog jumped*), prétérit continu pour le décor (*it was raining, he was walking*).
3. **Relie** les phrases : *First, Then, After that, Suddenly, Finally, In the end*.
4. Donne un **prénom** au personnage et ajoute un **sentiment** ou un **détail** (*he was surprised, a big red ball*).
5. **Relis-toi** : verbes irréguliers, -ed, majuscules, points.

## Le modèle
*One sunny afternoon, Tom was walking his dog Max in the park. Suddenly, Max saw a ball and ran after it. He jumped into the lake! When they got home, Max was very wet and Tom's mum laughed a lot.* (40 mots)

## Comment c'est noté
Comme en Part 6 : **15 points**, soit 0 à 5 pour chacun des trois critères.

| Critère | Pour avoir une bonne note |
|---|---|
| **Content** | Les **trois images** sont racontées ; l'histoire se comprend. |
| **Organisation** | Les événements sont dans l'ordre et reliés par des connecteurs. |
| **Language** | Passé correct, vocabulaire varié (adjectifs, adverbes), phrases simples mais justes. |

## Verbes irréguliers indispensables
| Base | Prétérit | Base | Prétérit |
|---|---|---|---|
| go | went | see | saw |
| come | came | find | found |
| run | ran | take | took |
| fall | fell | leave | left |
| buy | bought | think | thought |
| get | got | lose | lost |
| eat | ate | make | made |

> **À retenir** : 3 images = au moins 3 étapes. Passé + connecteurs + un personnage nommé + un sentiment = une histoire réussie.
`,
      exercices: [
        { type: "saisie", question: "Write the past simple of *fall*.", reponses: ["fell"], explication: "*Fall* (tomber) est irrégulier : **fell** (participe passé : *fallen*)." },
        { type: "saisie", question: "Write the past simple of *buy*.", reponses: ["bought"], explication: "*Buy* → **bought** (acheter). Même finale que *think → thought*, *bring → brought*." },
        { type: "qcm", question: "Which word is best to start the **last** part of a story?", choix: ["First,", "Suddenly,", "One day,", "In the end,"], reponse: 3, explication: "*In the end* (à la fin, finalement) conclut l'histoire. *One day* et *First* ouvrent l'histoire ; *Suddenly* introduit un événement inattendu." },
        { type: "qcm", question: "Choose the correct sentence to describe the background of a story.", choix: ["It rains when Lily left the house.", "It raining when Lily left the house.", "It was rain when Lily left the house.", "It was raining when Lily left the house."], reponse: 3, explication: "Le décor se met au **prétérit continu** (*was raining*) et l'action ponctuelle au prétérit simple (*left*)." },
        { type: "saisie", question: "Put the verb in the past simple: *Yesterday, Ella ___ (find) a wallet in the street.*", reponses: ["found"], explication: "*Find* → **found** (trouver)." },
        { type: "vf", question: "Dans la Part 7, on peut raconter seulement les deux premières images si on manque de temps.", reponse: false, explication: "Il faut raconter **les trois images** : sinon la note *Content* baisse fortement." },
        { type: "qcm", question: "Which sentence is correct?", choix: ["He was very happy and he smiled.", "He was very happy and he smile.", "He were very happy and smiled.", "He is very happy and he smiled."], reponse: 0, explication: "Les deux verbes doivent être au passé : *he* **was** (*were* va avec *you, we, they*) et *he* **smiled**. *He is very happy and he smiled* mélange présent et passé." },
        { type: "redaction", question: `**Writing Part 7.** Look at the three pictures and write the story. Write **35 words or more**.
1. *A girl is at a bus stop. She is looking at her watch.*
2. *The bus is leaving. The girl is running after it.*
3. *The girl is sitting in a car with her dad. They are both smiling.*`, corrige: `**Model answer**

*Last Monday, Emma was waiting for the bus to go to school. She looked at her watch: she was late! Then the bus arrived, but it left before she could get on. Emma ran after it, but it was too fast. Luckily, her dad saw her and drove her to school in his car. They both smiled.* (57 words)

**Critères**
- **Content** : les trois images sont racontées (attente, bus raté, papa en voiture).
- **Organisation** : *Then, but, Luckily* relient les étapes dans l'ordre.
- **Language** : prétérit continu (*was waiting*), prétérit irrégulier (*left, ran, saw, drove*), vocabulaire précis (*late, luckily*).` },
        { type: "redaction", question: `**Writing Part 7.** Write the story. Write **35 words or more**.
1. *Two friends are in a forest. They have a map.*
2. *It's dark and they look worried. One of them is using a phone.*
3. *A man with a torch is walking towards them. The friends look happy.*`, corrige: `**Model answer**

*On Saturday, Ali and Jake went for a walk in the forest with a map. After a few hours, it got dark and they couldn't find the path. They were very worried, so Jake called his dad. Twenty minutes later, a park ranger with a torch found them. They were so happy!* (52 words)

**Critères**
- **Content** : forêt et carte, nuit et inquiétude, sauveteur avec une lampe : tout est raconté.
- **Organisation** : repères de temps (*On Saturday, After a few hours, Twenty minutes later*) et connecteur *so*.
- **Language** : passé régulier et irrégulier (*went, got, called, found*), *couldn't* pour l'incapacité au passé, adjectifs de sentiment.` },
      ],
    },

    // ───────────────────────────── 9. Listening
    {
      id: "listening-strategies",
      titre: "Listening : stratégies d'écoute",
      theme: "Listening",
      cours: `
## L'épreuve
L'épreuve dure **environ 30 minutes** (dont 6 minutes à la fin pour reporter tes réponses sur la feuille, en version papier) et comporte **5 parties de 5 questions**. Chaque enregistrement est entendu **deux fois**.
- **Part 1** : cinq **courts dialogues** ; pour chacun, tu choisis la bonne **image** parmi trois.
- **Part 2** : un **monologue** (une annonce, un professeur qui présente une sortie) ; tu **complètes des notes** avec un mot, un nombre, une date, une heure ou un nom épelé.
- **Part 3** : une **conversation plus longue** et 5 questions à 3 propositions.
- **Part 4** : cinq **courts textes** (dialogues ou monologues) ; tu trouves l'**idée principale** : de quoi on parle, pourquoi quelqu'un appelle, ce qu'il pense.
- **Part 5** : un dialogue et un **appariement** : relier 5 personnes (ou jours) à des éléments d'une liste plus longue (par exemple des cadeaux ou des activités) ; certains éléments ne servent pas.

Dans l'appli, pas d'audio : on s'entraîne sur des **transcriptions** (le texte de l'enregistrement). Lis-les à voix haute, ou demande à quelqu'un de te les lire !

## Avant l'écoute : anticiper
- Lis la question et les propositions **pendant le temps de préparation**.
- Devine **le type de réponse** : un nombre ? une heure ? un lieu ? un objet ?
- Souligne les **mots-clés** : *What time*, *How much*, *Where*, *Who*.

## Pendant l'écoute : se méfier des pièges
Les enregistrements mentionnent **souvent les trois propositions**, mais une seule est la bonne :

>! *What time does the film start?*
>! *« The film was at 6, but they changed it. Now it starts at 7.15, so let's meet at 7. »*
>! → **7.15**. 6 h était l'ancien horaire, 7 h l'heure du rendez-vous.

Mots qui signalent un changement : *but, actually, in fact, no wait, they changed it, not... but...*

## Les nombres et l'épellation
| Attention | Exemple |
|---|---|
| *-teen* / *-ty* | *thirteen* (13, accent sur *-teen*) / *thirty* (30, accent sur *thir-*) |
| les prix | *£4.50* se dit *four pounds fifty* |
| les heures | *half past six* = 6.30 ; *quarter to nine* = 8.45 |
| les dates | *the twenty-first of May* = 21st May |
| les lettres | **E** se prononce « i » ; **I** se prononce « aï » ; **A** se prononce « eï » ; **G** « dji », **J** « djeï » ; **W** = *double-u* ; **Y** « waï » |
| doubles | *double L* = LL (*Bellamy* : B-E-double L-A-M-Y) |

> **À retenir** : lis les questions avant d'écouter, devine le type de réponse, méfie-toi de la première information entendue, et utilise la **deuxième écoute pour vérifier**.

## Après l'écoute
Vérifie l'**orthographe** des mots recopiés et les **majuscules** des noms propres. Ne laisse rien de vide.
`,
      exercices: [
        { type: "qcm", question: `**Transcript** — *Girl : Are we meeting at the station? Boy : No, the station's too busy. Let's meet outside the library, next to the café.*
Where will they meet?`, choix: ["at the station", "in the café", "outside the library"], reponse: 2, explication: "La gare est refusée (*No, the station's too busy*). Ils se retrouvent **devant la bibliothèque** ; le café sert seulement de repère (*next to*)." },
        { type: "saisie", question: `**Transcript** — *Woman : The museum trip costs eleven pounds, but students get two pounds off.*
How much does a student pay? (write the number of pounds)`, reponses: ["9", "£9", "nine", "9 pounds", "nine pounds"], explication: "11 − 2 = **9 livres**. Il faut écouter jusqu'au bout : le premier prix entendu (11) n'est pas la réponse." },
        { type: "saisie", question: `**Transcript** — *Man : My name's Mr Kerridge. That's K-E-double R-I-D-G-E.*
Write the name.`, reponses: ["Kerridge"], explication: "K-E-**double R**-I-D-G-E → **Kerridge**. *Double R* = deux R." },
        { type: "qcm", question: `**Transcript** — *Boy : The football training is usually on Tuesday, but this week it's on Thursday because the field is closed.*
When is training this week?`, choix: ["Thursday", "Tuesday", "Wednesday"], reponse: 0, explication: "*Usually on Tuesday, but this week... Thursday* : le mot *but* signale le changement. Cette semaine, c'est **jeudi**." },
        { type: "saisie", question: "Écris en chiffres l'heure entendue : *quarter to nine* (format 8.45).", reponses: ["8.45", "8:45", "8h45", "20.45", "20:45", "8.45 am", "8:45 am", "8.45 a.m.", "8:45 a.m."], explication: "*Quarter to nine* = un quart d'heure **avant** neuf heures → **8.45**. (*Quarter past nine* = 9.15.)" },
        { type: "vf", question: "*Thirteen* et *thirty* se distinguent surtout par l'accent : sur *-teen* pour 13, sur *thir-* pour 30.", reponse: true, explication: "13 = thir**TEEN** (accent à la fin, son long) ; 30 = **THIR**ty (accent au début). Bien écouter l'accent évite une erreur classique." },
        { type: "qcm", question: `**Transcript** — *Mum : What do you want for your birthday? A new phone? Daughter : No, my phone's fine. I'd love a guitar, but they're expensive. Mum : OK, and what about some concert tickets? Daughter : Oh yes, that would be perfect!*
What will the girl probably get for her birthday?`, choix: ["a phone", "a guitar", "concert tickets"], reponse: 2, explication: "Le téléphone est refusé, la guitare est trop chère ; elle accepte avec enthousiasme les **billets de concert** (*that would be perfect*)." },
        { type: "saisie", question: `**Transcript** — *Teacher : The school trip to the zoo is on the twenty-second of June.*
Write the date in numbers (day only).`, reponses: ["22", "22nd", "twenty-second", "22 june", "22nd june"], explication: "*The twenty-second* = le **22**. Attention : *twenty-second* (22e) se distingue de *twenty-seven* (27)." },
        { type: "redaction", question: `Lis cette transcription (comme une Part 2 de Listening) et complète les notes.
*« Hello everyone. Next Saturday our club is going to the Science Museum. We'll meet at the school gate at half past eight. The bus leaves at a quarter to nine, so don't be late! The ticket costs twelve pounds fifty. Bring a packed lunch and a notebook. If you have questions, phone Mrs Dalby, that's D-A-L-B-Y. »*
Notes : Place : ___ / Meeting time : ___ / Price : ___ / Bring : ___ and ___ / Teacher's name : Mrs ___`, corrige: `**Answers**

- **Place** : Science Museum
- **Meeting time** : 8.30 (*half past eight*). Piège : 8.45 est l'heure de départ du bus.
- **Price** : £12.50 (*twelve pounds fifty*)
- **Bring** : a packed lunch and a notebook
- **Teacher's name** : Mrs **Dalby** (épelé D-A-L-B-Y)

**Méthode** : avant d'écouter, devine le type de chaque réponse (un lieu, une heure, un prix, des objets, un nom). Pendant l'écoute, méfie-toi des deux heures proches. Après, vérifie l'orthographe et la majuscule du nom.` },
        { type: "qcm", question: `**Transcript (Part 4)** — *Boy : Hi Grandma, it's Leo. Thanks for the birthday money! I'm going to spend it on a new game, and maybe a book too. See you on Sunday!*
Why is Leo phoning his grandmother?`, choix: ["to ask her for money", "to thank her for a present", "to invite her on Sunday"], reponse: 1, explication: "Part 4 : on cherche l'**idée principale**. Leo appelle pour **remercier** (*Thanks for the birthday money!*). Il ne demande pas d'argent (il l'a déjà reçu) et dimanche est seulement mentionné à la fin." },
        { type: "qcm", question: `**Transcript (Part 5)** — *Girl : For the class party, Anna's bringing the music. Ben wanted to bring a cake, but his oven is broken, so he's bringing drinks. And Carla's making the cake instead.*
What is Ben bringing?`, choix: ["a cake", "drinks", "music"], reponse: 1, explication: "Part 5 : relier chaque personne à un élément. Ben **voulait** apporter un gâteau, **mais** (*but*) son four est cassé : il apporte les **boissons**. Le gâteau revient à Carla, la musique à Anna. Comme à l'examen, les trois éléments sont cités pour Ben." },
      ],
    },

    // ───────────────────────────── 10. Speaking
    {
      id: "speaking",
      titre: "Speaking : parler avec l'examinateur et son partenaire",
      theme: "Speaking",
      cours: `
## L'épreuve
Elle dure **8 à 10 minutes**, en général avec un autre candidat. Il y a **deux examinateurs** : l'un pose les questions (*interlocutor*), l'autre écoute et note (*assessor*).

| Partie | Ce que tu fais |
|---|---|
| **Part 1** (3 à 4 min) | L'examinateur te pose des questions sur toi : nom, âge, pays, ville. Puis, sur un thème (l'école, la maison...), deux questions courtes et une question plus longue du type *Please tell me something about...* Tu réponds à l'examinateur, pas à ton partenaire. |
| **Part 2** (5 à 6 min) | L'examinateur montre **cinq images** sur un thème (par exemple des loisirs) et demande : *Do you like these different hobbies? Say why or why not.* Tu en discutes **avec ton partenaire** pendant 1 à 2 minutes : ce que vous aimez, ce que vous n'aimez pas, pourquoi. Ensuite l'examinateur te pose des questions sur les images, puis deux questions de plus sur le même thème. |

## Ce qui est noté (en simple)
L'examinateur qui écoute (*assessor*) note trois critères :
- **Grammar and Vocabulary** : des phrases simples justes, des mots variés.
- **Pronunciation** : être compréhensible (pas besoin d'un accent parfait !).
- **Interactive Communication** : répondre, poser des questions à ton partenaire, réagir à ce qu'il dit, développer la conversation.

L'examinateur qui pose les questions (*interlocutor*) donne en plus une note d'ensemble (*Global Achievement*) : arrives-tu à communiquer dans des situations de tous les jours ?

## Part 1 : bien se présenter
>! *What's your name? — My name's Louise Martin. / How old are you? — I'm twelve. / Where do you live? — I live in Nantes, in the west of France. / Do you like your school? — Yes, I do, because my teachers are nice and I've got lots of friends.*

**La règle d'or : ne réponds jamais par un seul mot.** Ajoute une raison (*because...*) ou un détail (*and...*).

| Question | Réponse trop courte | Bonne réponse |
|---|---|---|
| *Do you like sport?* | *Yes.* | *Yes, I love it. I play handball twice a week with my club.* |
| *What did you do last weekend?* | *Cinema.* | *I went to the cinema with my cousin. We saw a funny film.* |
| *Tell me something about your best friend.* | *She's nice.* | *My best friend is called Zoé. She's funny and kind, and we often go to the park together.* |

## Part 2 : discuter avec son partenaire
Phrases utiles :
- **Donner son avis** : *I think... / I like... because... / I don't like... because... / For me, ... is more fun than...*
- **Demander l'avis** : *What about you? / Do you like...? / What do you think?*
- **Réagir** : *Me too! / Really? / I agree. / I don't agree, because...*
- **Gagner du temps** : *Let me think... / That's a good question.*
- **Faire répéter** : *Sorry, can you repeat that, please? / Sorry, I don't understand.*

> **À retenir** : réponds en phrases complètes, **justifie** avec *because*, et en Part 2 **pose des questions** à ton partenaire. Demander de répéter n'est pas une faute : c'est une vraie compétence de communication.
`,
      exercices: [
        { type: "qcm", question: "The examiner asks: *Do you like music?* Which answer is the best?", choix: ["Yes.", "Music, yes, yes.", "Yes, I do. I listen to pop music every day, and I'm learning the piano.", "I like."], reponse: 2, explication: "*Yes, I do. I listen to pop music every day...* est la seule réponse complète, développée et correcte. *I like* seul est incorrect : *like* a besoin d'un complément (*I like it*)." },
        { type: "qcm", question: "In Part 2, you want to ask your partner's opinion. What do you say?", choix: ["What about you?", "You are agree?", "Me too.", "Say me."], reponse: 0, explication: "*What about you?* (et toi ?) relance la discussion. *You are agree* est une faute courante (*Do you agree?*)." },
        { type: "saisie", question: "Complete to agree with your partner: *I ___.* (« Je suis d'accord. »)", reponses: ["agree", "i agree"], explication: "**I agree** : *agree* est un verbe. *I am agree* est une faute très fréquente chez les francophones." },
        { type: "vf", question: "Demander à l'examinateur de répéter une question fait perdre des points.", reponse: false, explication: "Non : *Sorry, can you repeat that, please?* montre que tu sais communiquer. Mieux vaut demander que répondre à côté." },
        { type: "qcm", question: "The examiner asks: *What did you do last weekend?* Choose the correct answer.", choix: ["I go to my grandparents' house.", "I was go to my grandparents' house.", "I have gone to my grandparents' house.", "I went to my grandparents' house and we had lunch together."], reponse: 3, explication: "*Last weekend* → **prétérit** : *I went... we had*. Le present perfect ne s'utilise pas avec un moment passé précis." },
        { type: "saisie", question: "Complete the sentence to give a reason: *I prefer football ___ it's a team sport.*", reponses: ["because", "as", "since"], explication: "**Because** introduit la raison. Justifier ses goûts est attendu dans les deux parties de l'épreuve." },
        { type: "qcm", question: "In Part 2, the examiner shows pictures of holidays: a beach, a city, a campsite, mountains. Which sentence compares two ideas?", choix: ["The beach.", "I like.", "I think the mountains are more exciting than the beach.", "Mountains is good."], reponse: 2, explication: "Un **comparatif** avec justification (*more exciting than*) est exactement ce qu'on attend. *Mountains is good* est fautif : *mountains* est un pluriel (*are*)." },
        { type: "redaction", question: "**Speaking Part 1 practice.** Write your answer (as you would say it) to: *Please tell me something about your family.* Say 4 or 5 sentences.", corrige: `**Model answer**

*There are four people in my family: my mum, my dad, my little brother and me. My mum is a nurse and my dad works in a bank. My brother is called Léo and he's eight. He's funny, but sometimes he's annoying! We've also got a cat called Moka.*

**Ce qui est apprécié**
- des phrases complètes et variées (*There are, is called, works, has got*) ;
- des détails (métiers, âge, caractère) ;
- un connecteur et une petite touche personnelle (*but sometimes he's annoying!*).

**Erreurs à éviter** : *My mother is nurse* (il faut l'article : *a nurse*), *He has eight years* (on dit *He's eight*).` },
        { type: "redaction", question: `**Speaking Part 2 practice.** The topic is *Free-time activities*. The pictures show: playing video games, reading, going to the cinema, playing tennis.
Write a short dialogue (6 to 8 lines) between you (A) and your partner (B). Give opinions, reasons, and ask questions.`, corrige: `**Model answer**

**A** : *Do you like playing video games?*
**B** : *Yes, I do! I play with my friends online at the weekend. What about you?*
**A** : *Not really. I think it's boring. I prefer playing tennis because I like being outside.*
**B** : *Me too, I love tennis! But I don't like reading. It's not very exciting for me.*
**A** : *Really? I love reading. I read every evening before bed.*
**B** : *And going to the cinema? I think it's the best activity, but it's quite expensive.*
**A** : *I agree. It's more fun with friends.*

**Ce qui est apprécié** : les deux candidats donnent leur avis, **justifient** (*because, but*), **posent des questions** (*What about you? And...?*) et **réagissent** (*Me too, Really?, I agree*). On parle de plusieurs images, pas d'une seule.` },
        { type: "vf", question: "Au Speaking, un seul examinateur note les candidats ; l'autre se contente de poser les questions.", reponse: false, explication: "Les **deux** examinateurs notent. L'*assessor* (qui écoute) note *Grammar and Vocabulary*, *Pronunciation* et *Interactive Communication* ; l'*interlocutor* (qui pose les questions) donne une note d'ensemble, *Global Achievement*." },
        { type: "qcm", question: "In Speaking Part 2, the examiner shows five pictures and says: *Do you like these different hobbies? Say why or why not.* What should you do first?", choix: ["Talk about one picture for two minutes.", "Wait for the examiner to ask you a question.", "Describe the colours in each picture.", "Talk with your partner about the hobbies, give reasons and ask what he or she thinks."], reponse: 3, explication: "En Part 2, tu discutes **avec ton partenaire** de plusieurs images : avis, raisons (*because*), questions (*What about you?*). Il ne s'agit pas de décrire les images, mais de dire ce que tu aimes et pourquoi." },
      ],
    },

    // ───────────────────────────── 11. Vocabulaire
    {
      id: "vocabulaire-themes",
      titre: "Le vocabulaire thématique de l'A2 Key",
      theme: "Vocabulaire",
      cours: `
## Pourquoi apprendre par thèmes ?
Cambridge publie une **liste de vocabulaire officielle** pour l'A2 Key (*A2 Key Vocabulary List*), classée par ordre alphabétique et par thèmes. Les auteurs des sujets s'appuient sur cette liste (mise à jour régulièrement) : la quasi-totalité des mots de l'examen en fait partie. Apprends les mots **en groupes** et **en phrases**, pas isolés.

## La vie quotidienne
| Thème | Mots essentiels |
|---|---|
| **École** | *timetable* (emploi du temps), *subject, break, homework, exam, pass/fail an exam, classroom, uniform, term* (trimestre), *library, dictionary* |
| **Famille** | *parents, grandparents, aunt, uncle, cousin, nephew, niece, only child, twins, get on well with* (bien s'entendre avec) |
| **Maison** | *kitchen, living room, bedroom, bathroom, garden, upstairs, downstairs, flat* (appartement), *floor* (étage, sol), *furniture* (meubles, toujours singulier) |
| **Nourriture** | *breakfast, lunch, dinner, vegetables, fruit, bread, cheese, chicken, rice, snack, delicious, hungry, thirsty* |
| **Vêtements** | *jacket, coat, jeans, trousers, skirt, dress, T-shirt, sweater, trainers* (baskets), *boots, try on* (essayer), *wear* (porter) |
| **Shopping** | *shop assistant, price, cheap, expensive, sale, receipt* (ticket de caisse), *change* (monnaie), *pay by card / in cash* |
| **Santé** | *headache* (mal de tête), *stomach ache, a cold* (un rhume), *temperature* (fièvre), *cough, medicine, chemist's* (pharmacie), *feel ill / well* |

## Sorties, monde et loisirs
| Thème | Mots essentiels |
|---|---|
| **Loisirs** | *hobby, free time, collect, draw, paint, play an instrument, board game, go out with friends* |
| **Sports** | *team, player, match, score, win, lose, coach, pitch* (terrain), *court* (court de tennis), *go swimming / go skiing, play football, do judo* |
| **Ville** | *town centre, square, bridge, museum, post office, bank, chemist's, opposite* (en face de), *between, next to, turn left / right, go straight on* |
| **Transports** | *bus stop, station, platform* (quai), *ticket, single / return ticket, timetable, miss the bus* (rater), *catch the train, by car / on foot* |
| **Voyages** | *holiday, trip, journey* (trajet), *passport, luggage, suitcase, hotel, campsite, abroad* (à l'étranger), *sightseeing* |
| **Météo** | *sunny, cloudy, rainy, windy, foggy, snow, storm, hot, warm, cool, cold, weather forecast* (météo) |
| **Technologie** | *laptop, screen, keyboard, website, app, download, upload, password, online, charge my phone, send a message* |
| **Travail** | *job, work* (indénombrable), *doctor, nurse, engineer, farmer, pilot, mechanic, office, factory, earn money* (gagner de l'argent) |

## Les mots qui piègent
- **travel / trip / journey** : *travel* est surtout un verbe (*I love travelling*) ; *a trip* = un voyage, une excursion ; *a journey* = le trajet.
- **work / job** : *I have a job* (dénombrable) ; *I have a lot of work* (indénombrable, jamais *a work*).
- **furniture, information, advice, homework, news** : toujours au **singulier**, sans *a* : *some information, a piece of advice*.
- Les sports : **play** + sport de ballon (*play tennis*), **go** + activité en *-ing* (*go swimming*), **do** + arts martiaux, gym (*do karate*).

> **À retenir** : apprends **5 à 10 mots par jour** dans une phrase. Révise-les avec la méthode des petites fiches : anglais d'un côté, phrase d'exemple et traduction de l'autre.
`,
      exercices: [
        { type: "qcm", question: "*I can't come to school today. I've got a terrible ___ and I can't stop coughing.*", choix: ["cold", "cool", "coat", "cook"], reponse: 0, explication: "*A cold* = un rhume. *Cool* = frais (météo) ou « génial »." },
        { type: "saisie", question: "Complete: *I go ___ every Wednesday at the pool.* (nager, avec go)", reponses: ["swimming"], explication: "**Go swimming** : *go* + activité en *-ing* (*go skiing, go shopping, go running*)." },
        { type: "qcm", question: "Which verb goes with *karate*?", choix: ["play", "go", "do", "make"], reponse: 2, explication: "On dit **do karate**, *do judo*, *do gymnastics*. *Play* va avec les sports de ballon ou de raquette." },
        { type: "qcm", question: "*Excuse me, where's the ___? I need some medicine for my headache.*", choix: ["library", "post office", "bookshop", "chemist's"], reponse: 3, explication: "*Chemist's* (britannique) = pharmacie. *Library* est un faux ami : c'est une **bibliothèque**." },
        { type: "saisie", question: "What's the opposite of *expensive*?", reponses: ["cheap", "inexpensive"], explication: "**Cheap** = bon marché, pas cher." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["Can you give me an information?", "Can you give me some informations?", "Can you give me a informations?", "Can you give me some information?"], reponse: 3, explication: "*Information* est **indénombrable** : jamais de -s ni de *a*. On dit *some information* ou *a piece of information*." },
        { type: "saisie", question: "Traduis en anglais : « un billet aller-retour » (britannique).", reponses: ["a return ticket", "return ticket", "a return"], explication: "**A return ticket** = un aller-retour ; *a single ticket* = un aller simple." },
        { type: "qcm", question: "*How was your ___ to Scotland? — Great! We visited Edinburgh and saw the castle, but the ___ by train was very long.*", choix: ["trip / journey", "journey / trip", "travel / trip", "trip / travel"], reponse: 0, explication: "*Trip* = le voyage (le séjour, l'excursion) ; *journey* = le trajet. *Travel* est surtout un verbe." },
        { type: "saisie", question: "Complete: *Mr Jones is a ___. He works in a hospital and looks after sick people.* (pas *doctor*)", reponses: ["nurse"], explication: "**Nurse** = infirmier, infirmière." },
        { type: "redaction", question: "Write 6 sentences about your town and your daily life, using at least **one word from six different topics** (school, family, home, transport, weather, technology...). Underline (in your head!) the key words.", corrige: `**Model answer**

1. *I live in a **flat** on the third **floor** with my parents and my **twin** sister.* (maison, famille)
2. *Every morning, I **catch the bus** at the **bus stop** opposite the bakery.* (transports, ville)
3. *My favourite **subject** is history, but I don't like our **timetable** on Mondays.* (école)
4. *In winter it's often **cold** and **foggy** in my town.* (météo)
5. *After school, I **charge my phone** and I **send messages** to my friends.* (technologie)
6. *At the weekend, I **go swimming** or I **play board games** with my cousins.* (sports, loisirs)

**Critères** : six thèmes différents, mots de la liste A2 Key utilisés dans une phrase correcte, collocations justes (*catch the bus, go swimming, send messages*).` },
      ],
    },

    // ───────────────────────────── 12. Grammaire : les temps
    {
      id: "grammaire-temps",
      titre: "La grammaire de l'examen : les temps",
      theme: "Grammaire",
      cours: `
## Le présent simple et le présent continu
| Temps | Emploi | Exemple |
|---|---|---|
| **Présent simple** | habitudes, vérités générales, goûts | *I **play** tennis on Fridays. She **doesn't like** fish.* |
| **Présent continu** | action en cours, situation temporaire, projet décidé | *Look! It**'s raining**. I**'m meeting** Tom tomorrow.* |

Mots-repères : *always, usually, often, never, every day* (simple) ; *now, at the moment, look!, today* (continu).
Les verbes d'état (*like, love, want, know, understand, need*) ne se mettent presque jamais au continu : *I **know** the answer* (et non *I'm knowing*).

## Le prétérit simple et le prétérit continu
- **Prétérit simple** : action terminée à un moment passé : *We **went** to Spain last summer. Did you **see** the match?*
- **Prétérit continu** : action en cours dans le passé, souvent interrompue : *I **was having** a shower when the phone **rang**.*

## Le present perfect (have + participe passé)
Il relie le passé et le présent, **sans moment précis**.
| Mot | Sens | Exemple |
|---|---|---|
| **ever** | déjà (dans une question) | *Have you **ever** been to London?* |
| **never** | jamais | *I've **never** eaten sushi.* |
| **just** | venir de | *She's **just** arrived.* (elle vient d'arriver) |
| **already** | déjà | *I've **already** finished my homework.* |
| **yet** | déjà (question) / pas encore (négation), en fin de phrase | *Have you done it **yet**? I haven't done it **yet**.* |
| **for / since** | depuis | *I've lived here **for** 3 years / **since** 2022.* |

>! **Prétérit ou present perfect ?** *I **visited** Rome **in 2023*** (date précise → prétérit). *I**'ve visited** Rome **twice*** (expérience, sans date → present perfect). *I've seen this film yesterday* est **faux** : avec *yesterday, last week, ago*, on met le prétérit.

## Le futur
| Forme | Emploi | Exemple |
|---|---|---|
| **will** | décision prise sur le moment, prédiction, promesse | *It's cold. I**'ll** close the window. You**'ll** love this film!* |
| **be going to** | intention, projet ; prédiction d'après ce qu'on voit | *I**'m going to** study medicine. Look at those clouds: it**'s going to** rain.* |
| **présent continu** | rendez-vous, projet organisé | *We**'re flying** to Dublin on Monday.* |

> **À retenir** : présent simple = habitude ; présent continu = maintenant ; prétérit = moment passé précis ; present perfect = expérience ou résultat, sans date ; futur : *will* (décision immédiate), *going to* (intention), présent continu (programme fixé).
`,
      exercices: [
        { type: "qcm", question: "*Shh! The baby ___.*", choix: ["sleeps", "is sleeping", "slept", "has slept"], reponse: 1, explication: "*Shh!* indique que l'action se déroule **maintenant** : présent continu *is sleeping*." },
        { type: "saisie", question: "Put the verb in the correct form: *My dad ___ (work) in a bank.* (habitude)", reponses: ["works"], explication: "Présent simple, 3e personne du singulier : **works**." },
        { type: "saisie", question: "Complete with the present perfect: *I ___ (never / be) to the USA.*", reponses: ["have never been", "'ve never been", "I have never been", "I've never been"], explication: "**Have never been** : *never* se place entre *have* et le participe. *Been* est le participe de *be* (et sert aussi à dire « aller » au sens « être allé »)." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["I've seen her yesterday.", "I see her yesterday.", "I have saw her yesterday.", "I saw her yesterday."], reponse: 3, explication: "*Yesterday* = moment passé précis → **prétérit** : *I saw her yesterday*. Le present perfect est impossible avec *yesterday*." },
        { type: "saisie", question: "Complete with the past continuous: *I ___ (walk) home when it started to rain.*", reponses: ["was walking", "I was walking"], explication: "Action en cours (**was walking**) interrompue par une action courte (*started*, prétérit simple)." },
        { type: "qcm", question: "*Have you finished your project ___?* — *No, not ___.*", choix: ["already / already", "yet / yet", "just / yet", "ever / never"], reponse: 1, explication: "**Yet** s'emploie en fin de question (déjà ?) et de phrase négative (pas encore). *Already* s'emploie dans les phrases affirmatives." },
        { type: "qcm", question: "*The phone is ringing!* — *OK, I ___ answer it.*", choix: ["'ll", "answer", "am going to", "am answering"], reponse: 0, explication: "Décision **prise sur le moment** → *will*, ici contracté : *I'll answer it* (ou *I will answer it*). *Going to* et le présent continu supposent une décision prise avant." },
        { type: "saisie", question: "Complete with *for* or *since*: *She has played the violin ___ six years.*", reponses: ["for"], explication: "*Six years* est une **durée** → **for**. Avec un point de départ (*since 2020, since Monday*), on emploie *since*." },
        { type: "saisie", question: "Complete with *going to*: *Look at that boy on the wall! He ___ (fall).*", reponses: ["is going to fall", "'s going to fall", "he is going to fall", "he's going to fall"], explication: "Prédiction fondée sur ce qu'on **voit** → **is going to fall**." },
        { type: "redaction", question: "Write 5 sentences about yourself using: (1) the present simple, (2) the present continuous, (3) the past simple with *last*, (4) the present perfect with *ever*, *never* or *just*, (5) a future form. Name the tense of each sentence.", corrige: `**Model answer**

1. *I usually walk to school with my neighbour.* → présent simple (habitude, *usually*).
2. *Right now, I'm doing my English homework.* → présent continu (en ce moment).
3. *Last summer, I went to Portugal with my family.* → prétérit (moment passé précis).
4. *I've never tried surfing, but I'd like to.* → present perfect (expérience, *never*).
5. *Next year, I'm going to join the school choir.* → *going to* (intention).

**Critères** : chaque temps correspond à son emploi, les mots-repères sont cohérents (*usually, right now, last summer, never, next year*), les participes et prétérits irréguliers sont justes (*went, tried*).` },
      ],
    },

    // ───────────────────────────── 13. Grammaire : outils
    {
      id: "grammaire-outils",
      titre: "La grammaire de l'examen : comparer, modaux, quantité, liens",
      theme: "Grammaire",
      cours: `
## Comparatifs et superlatifs
| Adjectif | Comparatif | Superlatif |
|---|---|---|
| court : *tall* | *taller than* | *the tallest* |
| en -y : *happy* | *happier than* | *the happiest* |
| long : *interesting* | *more interesting than* | *the most interesting* |
| irrégulier : *good* | *better than* | *the best* |
| irrégulier : *bad* | *worse than* | *the worst* |
| irrégulier : *far* | *further / farther than* | *the furthest / farthest* |

Égalité : *as tall as* (aussi grand que) ; *not as tall as* (moins grand que).
Doublement de la consonne : *big → bigger, hot → hotter*.

## Les modaux
| Modal | Sens | Exemple |
|---|---|---|
| **can / can't** | capacité, permission, possibilité | *I can swim. Can I open the window?* |
| **could** | capacité passée, demande polie, suggestion | *I could read when I was five. Could you help me? We could go to the beach.* |
| **must / mustn't** | obligation forte / **interdiction** | *You must wear a helmet. You mustn't run in the corridor.* |
| **have to / don't have to** | obligation (règle extérieure) / **absence d'obligation** | *I have to wear a uniform. We don't have to go to school on Sunday.* |
| **should / shouldn't** | conseil | *You should go to bed early.* |

Après un modal : **verbe à la base, sans *to*** et sans -s : *She can swim* (jamais *she cans swim* ni *she can to swim*). Exception : *have to*.

## Les quantifieurs
| Avec dénombrable (*apples*) | Avec indénombrable (*water*) | Les deux |
|---|---|---|
| *many, a few, How many?* | *much, a little, How much?* | *some* (affirmatif, offres), *any* (questions, négatif), *a lot of / lots of*, *no* |

>! *There are **a lot of** students but there isn't **much** space. — Is there **any** milk? — Yes, there's **some** in the fridge. — Would you like **some** tea?*

## Les prépositions
- **Temps** : *at* 7 o'clock / *at* the weekend / *at* night — *on* Monday / *on* 3rd May / *on* my birthday — *in* July / *in* 2025 / *in* the morning / *in* summer.
- **Lieu** : *in* the box / *in* London — *on* the table / *on* the wall — *at* school / *at* home / *at* the bus stop — *next to, opposite, between, behind, in front of, under*.
- **Mouvement** : *go* **to** school, *come* **from** Spain, *get* **on / off** the bus, *get* **into / out of** the car.

## Les connecteurs
*and* (et), *but* (mais), *because* (parce que), *so* (donc), *then* (ensuite), *or* (ou), *when* (quand), *after that* (après cela).

## Les questions
- avec auxiliaire : ***Do** you like...? **Did** she go...? **Have** you seen...? **Is** he coming?*
- mots interrogatifs : *What, Where, When, Who, Why, How, How old, How much, How many, How often, Which, Whose*.
- Question **sur le sujet** : pas d'auxiliaire : ***Who** broke the window?* (et non *Who did break*).

> **À retenir** : comparatif court = **-er than**, long = **more... than** ; *mustn't* = interdit mais *don't have to* = pas obligatoire ; *much* + indénombrable, *many* + pluriel ; *at* 7 pm, *on* Monday, *in* July.
`,
      exercices: [
        { type: "saisie", question: "Complete: *Mount Everest is ___ (high) mountain in the world.*", reponses: ["the highest"], explication: "Superlatif d'un adjectif court : **the highest**. N'oublie pas *the* : *highest mountain* seul est incorrect." },
        { type: "qcm", question: "*This film is ___ than the book.*", choix: ["more good", "gooder", "better", "best"], reponse: 2, explication: "*Good* est irrégulier : **better than** (meilleur que), *the best* (le meilleur)." },
        { type: "qcm", question: "*You ___ touch that wire! It's dangerous.*", choix: ["don't have to", "can", "should", "mustn't"], reponse: 3, explication: "C'est une **interdiction** → **mustn't**. *Don't have to* signifierait « tu n'es pas obligé », ce qui n'a pas de sens ici." },
        { type: "saisie", question: "Complete with *much* or *many*: *How ___ brothers and sisters have you got?*", reponses: ["many"], explication: "*Brothers and sisters* est dénombrable pluriel → **How many**." },
        { type: "saisie", question: "Complete with *in*, *on* or *at*: *My birthday is ___ 14th March.*", reponses: ["on"], explication: "Avec une **date précise** ou un jour : **on** (*on Monday, on 14th March*). *In* s'emploie avec le mois seul (*in March*)." },
        { type: "qcm", question: "*Is there ___ bread left? — No, sorry, there isn't ___.*", choix: ["some / some", "any / any", "many / any", "a / some"], reponse: 1, explication: "Dans une **question** et une **phrase négative** : **any**. *Bread* est indénombrable : *many* et *a* sont impossibles." },
        { type: "saisie", question: "Correct the mistake (write the correct verb group): *She can to play the piano.*", reponses: ["can play", "she can play the piano", "she can play"], explication: "Après un modal, verbe à la base **sans to** : *She **can play** the piano.*" },
        { type: "qcm", question: "*I was tired, ___ I went to bed early.*", choix: ["because", "but", "so", "or"], reponse: 2, explication: "*So* (donc) introduit une **conséquence** : fatiguée → donc au lit. *Because* introduirait la cause." },
        { type: "saisie", question: "Write the question for the underlined answer: *Tom lives in **Manchester**.* → *Where ___?*", reponses: ["does Tom live", "where does Tom live", "does he live", "where does he live"], explication: "Présent simple, 3e personne : auxiliaire **does** + verbe à la base : *Where does Tom live?* (pas *lives*)." },
        { type: "redaction", question: "Write 5 or 6 sentences comparing two places you know (two towns, two schools, two holiday places). Use a comparative, a superlative, *as... as*, a modal (*can, must, should*) and at least two connectors.", corrige: `**Model answer**

*My grandparents' village is much smaller than Paris, but it's more relaxing. The best thing about the village is the river, because you can swim in it in summer. Paris is not as quiet as the village, and there are a lot of cars, so you must be careful when you cross the street. However, Paris has the most interesting museums in France. If you visit, you should go to the Louvre!*

**Critères**
- comparatifs : *smaller than, more relaxing* ; superlatifs : *the best, the most interesting* ; égalité : *not as quiet as* ;
- modaux : *can, must, should* + base verbale ;
- connecteurs : *but, because, and, so, However* ;
- quantifieur : *a lot of cars*.` },
      ],
    },

    // ───────────────────────────── 14. Faux amis et erreurs
    {
      id: "faux-amis-erreurs",
      titre: "Faux amis et erreurs fréquentes des francophones",
      theme: "Erreurs fréquentes",
      cours: `
## Les faux amis
Un **faux ami** ressemble à un mot français, mais n'a pas le même sens.

| Anglais | Vrai sens | Pour dire le mot français |
|---|---|---|
| *library* | bibliothèque | librairie = *bookshop* |
| *actually* | en fait | actuellement = *now, at the moment* |
| *eventually* | finalement | éventuellement = *maybe, possibly* |
| *sensible* | raisonnable | sensible = *sensitive* |
| *to attend* | assister à (un cours) | attendre = *to wait (for)* |
| *to pass an exam* | réussir un examen | passer un examen = *to take an exam* |
| *a coin* | une pièce de monnaie | un coin = *a corner* |
| *a journey* | un trajet | une journée = *a day* |
| *a lecture* | une conférence | une lecture = *reading* |
| *to rest* | se reposer | rester = *to stay* |
| *a cave* | une grotte | une cave = *a cellar* |
| *a car* | une voiture | un car = *a coach* |

## Les erreurs fréquentes
| Erreur (calque du français) | Correct |
|---|---|
| *I have 12 years.* | *I'm 12 (years old).* |
| *I am agree.* | *I agree.* |
| *It depends of the weather.* | *It depends **on** the weather.* |
| *I'm here since two days.* | *I've been here **for** two days.* |
| *She explained me the rule.* | *She explained the rule **to me**.* |
| *People is nice.* | *People **are** nice.* (*people* est pluriel) |
| *I like the music.* (en général) | *I like music.* (pas d'article pour une idée générale) |
| *He is a doctor and she is teacher.* | *she is **a** teacher* (article devant un métier) |
| *Is it the book of Tom?* | *Is it **Tom's** book?* |
| *I didn't went.* | *I didn't **go**.* (après *did*, base verbale) |
| *He don't like it.* | *He **doesn't** like it.* |
| *Do you can help me?* | ***Can** you help me?* |
| *The informations / the homeworks* | *the information / the homework* |
| *I'm boring in maths class.* | *I'm **bored**.* (*-ed* = ce que je ressens ; *-ing* = ce qui provoque) |

>! **Adjectifs en -ed et -ing** : *The film was **boring**, so I was **bored**.* (Le film était ennuyeux, donc je m'ennuyais.) Même chose avec *interesting / interested, exciting / excited, tiring / tired*.

## L'orthographe qui compte à l'examen
En Reading Part 5 et en Listening (notes), **l'orthographe doit être juste**. Vérifie les mots souvent mal écrits : *Wednesday, February, beautiful, friend, because, different, which, their*.

> **À retenir** : un mot qui ressemble au français n'a pas forcément le même sens. Les erreurs les plus pénalisantes viennent du **mot à mot** : l'âge avec *be*, *I agree*, *depend on*, *for/since*, et la base verbale après *did / does / can*.
`,
      exercices: [
        { type: "qcm", question: "*I borrowed three books from the ___.*", choix: ["library", "bookshop", "librairie", "lecture"], reponse: 0, explication: "On **emprunte** des livres à la **library** (bibliothèque). Dans une *bookshop* (librairie), on les achète." },
        { type: "qcm", question: "What does *actually* mean?", choix: ["actuellement", "éventuellement", "activement", "en fait"], reponse: 3, explication: "*Actually* = **en fait**. « Actuellement » se dit *now* ou *at the moment*." },
        { type: "saisie", question: "Correct the sentence: *I have thirteen years.*", reponses: ["I'm thirteen", "I am thirteen", "I'm thirteen years old", "I am thirteen years old", "I'm 13", "I am 13", "I'm 13 years old", "I am 13 years old"], explication: "L'âge se dit avec **be** : *I'm thirteen (years old)*." },
        { type: "vf", question: "*I passed my exam* signifie « J'ai réussi mon examen ».", reponse: true, explication: "*Pass an exam* = **réussir**. « Passer un examen » se dit *take an exam* (ou *sit an exam*)." },
        { type: "qcm", question: "Choose the correct sentence.", choix: ["It depends of you.", "It depends from you.", "It depends on you.", "It depends to you."], reponse: 2, explication: "*Depend* **on** : *It depends on you* (ça dépend de toi)." },
        { type: "saisie", question: "Correct the sentence: *She didn't went to school.*", reponses: ["She didn't go to school", "She did not go to school", "didn't go", "did not go"], explication: "Après *didn't*, le verbe est à la **base** : *She didn't **go** to school.* Le passé est déjà porté par *did*." },
        { type: "qcm", question: "*The match was very long and I was ___.*", choix: ["boring", "boredom", "bore", "bored"], reponse: 3, explication: "Pour dire ce qu'on **ressent** : adjectif en **-ed** (*bored* = je m'ennuyais). *I was boring* voudrait dire « j'étais ennuyeux »." },
        { type: "saisie", question: "Translate into English: « J'habite ici depuis deux ans. »", reponses: ["I've lived here for two years", "I have lived here for two years", "I've been living here for two years", "I have been living here for two years", "I've lived here for 2 years", "I have lived here for 2 years", "I've been living here for 2 years", "I have been living here for 2 years"], explication: "« Depuis » + durée, action qui continue → **present perfect + for** : *I've lived here for two years.* Jamais *I live here since two years*." },
        { type: "qcm", question: "*We took the ___ to the airport. It was a big bus with fifty seats.*", choix: ["coach", "car", "cave", "carriage"], reponse: 0, explication: "Un car = **a coach**. *A car* est une voiture, *a cave* une grotte." },
        { type: "redaction", question: `This e-mail has **six mistakes** made by a French student. Find them and correct them.
*Hi Alex, I am agree with you, the film was very boring. I was boring too! Next week I go to the library to buy a new book. My sister has 15 years and she is teacher of dance. See you soon!*`, corrige: `**Corrections**

1. *I am agree* → **I agree** (*agree* est un verbe).
2. *I was boring* → **I was bored** (sentiment → *-ed*).
3. *I go* (futur) → **I'm going** / **I'm going to go** (projet).
4. *to the library to buy* → **to the bookshop** (on achète dans une *bookshop* ; la *library* prête les livres).
5. *has 15 years* → **is 15** (l'âge avec *be*).
6. *she is teacher of dance* → **she is a dance teacher** (article devant un métier, et le nom qui précise se place avant : *a dance teacher*).

**Texte corrigé** : *Hi Alex, I agree with you, the film was very boring. I was bored too! Next week I'm going to the bookshop to buy a new book. My sister is 15 and she is a dance teacher. See you soon!*` },
      ],
    },

    // ───────────────────────────── 15. Examen blanc
    {
      id: "examen-blanc",
      titre: "Examen blanc complet (Mock test)",
      theme: "L'examen",
      cours: `
## À quoi sert cet examen blanc ?
Ce chapitre est un **examen blanc** (*mock test*) : toutes les parties de l'A2 Key for Schools, dans l'ordre de l'examen, avec des documents nouveaux. Fais-le **d'une traite**, sans regarder les cours, comme le jour J. Ensuite seulement, lis les corrections et compte tes points.

| Exercices | Épreuve | Ce que tu fais |
|---|---|---|
| 1 à 5 | Reading Part 1 | 5 textes courts (panneau, SMS, note, e-mail, étiquette), 3 propositions |
| 6 à 9 | Reading Part 2 | 3 textes de jeunes ; pour chaque question, choisir la bonne personne |
| 10 à 13 | Reading Part 3 | Un article et 4 questions à 3 propositions |
| 14 à 17 | Reading Part 4 | Un texte informatif à trous, 3 propositions par trou |
| 18 à 23 | Reading Part 5 | Un e-mail à trous : écrire **un seul mot** par trou |
| 24 | Writing Part 6 | Un e-mail de **25 mots ou plus** (3 points à traiter) |
| 25 | Writing Part 7 | Une histoire de **35 mots ou plus** à partir de 3 images décrites |
| 26 à 31 | Listening | Des transcriptions représentatives des Parts 1 à 5 |
| 32 | Speaking | Préparer ses réponses de Part 1 et une discussion de Part 2 |
| 33 | Bilan | Compter ses points et faire son plan de révision |

Dans l'appli, l'appariement de la Part 2 est présenté sous forme de QCM (une question à la fois) et le texte long n'est écrit en entier que dans la première question de chaque partie : garde-le en tête ou relis-le.

> **Attention** : cet examen blanc a **moins de questions** que le vrai (23 questions de lecture au lieu de 30, 6 questions d'écoute au lieu de 25). Il te donne une **idée** de ton niveau, pas une note officielle.

## Gérer son temps
À l'examen, **Reading and Writing dure 1 heure** pour 30 questions de lecture et 2 rédactions. Ici, il y a un peu moins de lecture : donne-toi **50 minutes** pour les exercices 1 à 25 (ou l'heure complète si c'est ton premier examen blanc).

| Partie | Temps conseillé ici | Conseil pour l'examen (1 heure) |
|---|---|---|
| Reading Part 1 | 5 min | environ 6 min |
| Reading Part 2 | 6 min | environ 8 min |
| Reading Part 3 | 7 min | environ 9 min |
| Reading Part 4 | 5 min | environ 7 min |
| Reading Part 5 | 7 min | environ 8 min |
| Writing Part 6 | 8 min | environ 8 min |
| Writing Part 7 | 12 min | environ 12 min |

- Mets un **minuteur** et note l'heure de début.
- Si une question te bloque, **choisis une réponse quand même** et passe à la suivante : une erreur ne fait pas perdre de points.
- Écris tes deux rédactions **sur une feuille** (ou dans la zone de réponse), puis compte tes mots : 25 ou plus, 35 ou plus.
- Pour le Listening, fais-toi **lire les transcriptions** par quelqu'un, deux fois, sans les regarder ; sinon, lis chaque transcription **une seule fois**, puis réponds sans revenir en arrière.
- Pour le Speaking, réponds **à voix haute** avant d'écrire, et chronomètre-toi.

## Compter ses points
1. **Reading** (exercices 1 à 23) : 1 point par bonne réponse, soit **23 points**.
2. **Writing** (exercices 24 et 25) : note chaque rédaction sur **15** avec la grille ci-dessous, soit **30 points**. Sois honnête : compare ta copie au modèle point par point.
3. **Listening** (exercices 26 à 31) : 1 point par bonne réponse, soit **6 points**.
4. **Speaking** (exercice 32) : coche la liste de contrôle du corrigé ; compte 1 point par élément réussi, soit **10 points**.

Calcule ensuite un **pourcentage par compétence** : points obtenus ÷ points possibles × 100. Exemple : 17 sur 23 en Reading → 17 ÷ 23 × 100 ≈ **74 %**.

### La grille de Writing (sur 15)
| Note | Content | Organisation | Language |
|---|---|---|---|
| **5** | Les 3 points (ou les 3 images) sont traités ; le lecteur comprend tout | Ouverture et fin (Part 6), ordre logique, connecteurs variés | Phrases simples correctes, bon vocabulaire ; quelques petites fautes qui ne gênent pas |
| **3** | Un point manque ou n'est pas clair | Quelques connecteurs (*and, but*), mais des phrases parfois juxtaposées | Des fautes, mais on comprend presque tout |
| **1** | Le message répond peu à la consigne | Pas de lien entre les phrases | Beaucoup de fautes, le sens est souvent difficile à comprendre |

Les notes 4 et 2 se situent entre ces descriptions ; 0 = rien d'utilisable.

## Estimer son niveau (repères indicatifs)
Cambridge ne publie pas de table simple pour passer des points au score : les points bruts sont convertis sur l'**échelle Cambridge English** (de 100 à 150 pour un certificat), avec des réglages propres à chaque session. Les repères ci-dessous sont donc **seulement des indications** pour t'orienter, pas une conversion officielle.

| Pourcentage dans une compétence | Ce que cela suggère |
|---|---|
| 85 % ou plus | Niveau A2 très solide ; tu peux viser le *Grade A* ou *B* |
| 70 % à 84 % | Niveau A2 bien installé ; continue à t'entraîner |
| 50 % à 69 % | Proche de l'A2 ; revois les chapitres de cette compétence |
| moins de 50 % | L'A2 n'est pas encore atteint dans cette compétence : reprends les cours, puis refais l'examen blanc dans quelques semaines |

>! **Exemple de bilan** : Reading 18/23 (78 %), Writing 22/30 (73 %), Listening 4/6 (67 %), Speaking 8/10 (80 %). Le niveau A2 semble acquis ; la priorité est le Listening (chapitre « Listening : stratégies d'écoute »), puis les rédactions.

> **À retenir** : passe l'examen blanc d'un seul coup et chronométré ; compte tes points par compétence ; un pourcentage n'est qu'un **repère**. Le plus utile est de repérer **où** tu perds des points et de retravailler les chapitres correspondants.
`,
      exercices: [
        // ── Reading Part 1
        { type: "qcm", question: `**Reading Part 1 — Question 1.** Look at the sign. What does it say?
**RIVERSIDE CAFÉ — Please order and pay at the counter before you sit down.**`, choix: ["You can sit down and wait for someone to take your order.", "You must buy your food and drink before you find a table.", "There are no tables in this café."], reponse: 1, explication: "On commande et on paie **au comptoir avant** de s'asseoir : *You must buy your food and drink before you find a table* reformule exactement cette idée. *You can sit down and wait...* dit le contraire (quelqu'un viendrait prendre la commande) ; *There are no tables* n'est pas dit : *before you sit down* montre au contraire qu'il y a des places." },
        { type: "qcm", question: `**Reading Part 1 — Question 2.** Read the text message.
*Mia, I've left your keys with Mrs Patel next door. I'll be home at about six. Mum*
What should Mia do?`, choix: ["Get her keys from the neighbour.", "Look for the keys her mum has lost.", "Wait for Mrs Patel to come home at six."], reponse: 0, explication: "Maman a laissé les clés **chez la voisine** (*next door*) : Mia doit aller les chercher chez Mrs Patel. Les clés ne sont pas perdues, et c'est la mère qui rentre vers six heures, pas la voisine : piège classique qui reprend un détail du texte." },
        { type: "qcm", question: `**Reading Part 1 — Question 3.** Read the notice.
**SCHOOL CHOIR — No practice this Thursday. Next practice: Thursday 14th, as usual.**`, choix: ["The choir now practises on a different day.", "Choir practice is cancelled for the rest of term.", "The choir will not meet this week."], reponse: 2, explication: "Pas de répétition **cette semaine**, puis reprise le jeudi suivant *as usual* (comme d'habitude). Le jour ne change donc pas. *Cancelled for the rest of term* est trop fort : seule la répétition de cette semaine est annulée." },
        { type: "qcm", question: `**Reading Part 1 — Question 4.** Read the e-mail.
*Hi Leo, I can't find my maths book anywhere! Did I leave it at your house on Saturday? If it's there, can you bring it to school tomorrow? Thanks, Jack*
What does Jack want Leo to do?`, choix: ["lend him a maths book", "help him with his maths homework", "look for Jack's book and bring it back"], reponse: 2, explication: "Jack pense avoir oublié **son** livre chez Leo et lui demande de le chercher et de le rapporter. Il ne veut pas emprunter un livre de Leo, et il ne parle pas de devoirs." },
        { type: "qcm", question: `**Reading Part 1 — Question 5.** Read the label on a jar.
**Keep in the fridge and eat within three days of opening.**`, choix: ["You must eat it all on the day you open it.", "After you open it, you have three days to eat it.", "Leave it in the fridge for three days before you eat it."], reponse: 1, explication: "*Within three days of opening* = dans les trois jours **après l'ouverture**. *All on the day you open it* est trop strict. Attendre trois jours avant de manger est un contresens : *within* = au plus tard dans, pas « après »." },

        // ── Reading Part 2
        { type: "qcm", question: `**Reading Part 2.** Read what three young people say about their summer clubs.

**A. Hannah** : *I go to the Riverside Art Club every summer. It's in an old building in the town centre, so I can walk there from my house. We paint and make things, and on the last day there's an exhibition of our work for our parents. It costs forty pounds, but my grandmother pays for it.*

**B. Kofi** : *This year I tried a sailing club on the coast for the first time. I was nervous because I'm not very good at swimming, but the instructors were really patient. We slept in tents for five nights. It didn't cost anything because my school organised it.*

**C. Isabel** : *I've been to Green Valley Sports Camp three times. You can choose a different sport every day, and my favourite is climbing. The camp is a long way from my town, so my dad drives me there. This year my best friend Rosa came with me.*

**Question 6.** Which person didn't have to pay for the club?`, choix: ["Hannah", "Kofi", "Isabel"], reponse: 1, explication: "Kofi : *It didn't cost anything* = c'était **gratuit**, car l'école l'a organisé. Hannah ne paie pas elle-même, mais sa grand-mère paie quarante livres : le club n'est pas gratuit. C'est le piège typique de la Part 2." },
        { type: "qcm", question: "**Reading Part 2 — same texts (Hannah, Kofi, Isabel).**\n**Question 7.** Which person shows things they made to their family?", choix: ["Hannah", "Kofi", "Isabel"], reponse: 0, explication: "Hannah : le dernier jour, il y a une **exposition** de leurs œuvres *for our parents*. La question reformule : *things they made* = *our work*, *their family* = *our parents*." },
        { type: "qcm", question: "**Reading Part 2 — same texts (Hannah, Kofi, Isabel).**\n**Question 8.** Which person went to the club with a friend this year?", choix: ["Hannah", "Kofi", "Isabel"], reponse: 2, explication: "Isabel : *This year my best friend Rosa came with me.* Son père l'emmène en voiture, mais il ne reste pas au camp." },
        { type: "qcm", question: "**Reading Part 2 — same texts (Hannah, Kofi, Isabel).**\n**Question 9.** Which person was worried before doing the activity?", choix: ["Hannah", "Kofi", "Isabel"], reponse: 1, explication: "Kofi : *I was nervous because I'm not very good at swimming*. *Worried* (inquiet) reformule *nervous*. Comme à l'examen, une même personne peut être la réponse à plusieurs questions." },

        // ── Reading Part 3
        { type: "qcm", question: `**Reading Part 3.** Read the article.

**The boy who cleans beaches**

*When Ethan Price was eleven, he went on holiday to Cornwall with his family. He was excited about swimming in the sea, but when he arrived at the beach, he was shocked. There were plastic bottles, bags and old fishing nets everywhere.*

*Back home in Bristol, Ethan told his class about it, and his teacher had an idea: once a month, the class could clean a beach near the city. At first only six students came, and some people laughed at them. "They thought we were wasting our time," Ethan says.*

*But Ethan didn't give up. He made a short video about the project and put it on the school website. Soon, families from other schools wanted to help. Now, two years later, more than two hundred people join the clean-ups every month.*

*"The beaches are much cleaner now," says Ethan, "but the most important thing is that people think more before they throw rubbish away." Next summer, Ethan wants to go back to Cornwall, this time with a group of volunteers.*

**Question 10.** How did Ethan feel when he saw the beach in Cornwall?`, choix: ["excited", "surprised and unhappy", "bored"], reponse: 1, explication: "*He was shocked* (choqué) devant les déchets : il est **surpris et malheureux**. *Excited* est le piège : c'est ce qu'il ressentait **avant** d'arriver à la plage (*He was excited about swimming..., but...*)." },
        { type: "qcm", question: "**Reading Part 3 — same article (Ethan).**\n**Question 11.** Whose idea was the monthly beach clean-up?", choix: ["Ethan's", "his parents'", "his teacher's"], reponse: 2, explication: "*His teacher had an idea: once a month, the class could clean a beach.* Ethan a raconté son voyage, mais c'est **le professeur** qui a eu l'idée du nettoyage mensuel." },
        { type: "qcm", question: "**Reading Part 3 — same article (Ethan).**\n**Question 12.** What happened after Ethan put a video on the school website?", choix: ["More people started to help.", "Some people laughed at the class.", "The school stopped the project."], reponse: 0, explication: "*Soon, families from other schools wanted to help* : de plus en plus de gens participent (plus de deux cents aujourd'hui). Les moqueries ont eu lieu **avant** la vidéo, au début du projet." },
        { type: "qcm", question: "**Reading Part 3 — same article (Ethan).**\n**Question 13.** What does Ethan think is the most important result of the project?", choix: ["The beaches look much cleaner.", "People are more careful with their rubbish.", "He can go back to Cornwall with volunteers."], reponse: 1, explication: "*But the most important thing is that people think more before they throw rubbish away* : les gens font **plus attention** à leurs déchets. Les plages plus propres sont une réalité, mais *but* montre que ce n'est pas le plus important pour lui. Le retour en Cornouailles est un projet, pas un résultat." },

        // ── Reading Part 4
        { type: "qcm", question: `**Reading Part 4.** Read the text and choose the best word for each gap.

**Hedgehogs**

*Hedgehogs are small brown animals with about 5,000 sharp spines on their backs. They (14) ___ in gardens, parks and forests in many parts of Europe. During the day, they usually sleep, and at night they go out to (15) ___ for food, for example insects and worms. In winter, when it is very cold, hedgehogs sleep for several months. This is (16) ___ hibernation. Many people in the UK love hedgehogs, and some (17) ___ small holes in their garden fences, so that hedgehogs can move easily from one garden to the next.*

**Question 14.** *They ___ in gardens, parks and forests.*`, choix: ["live", "stand", "put"], reponse: 0, explication: "Pour dire où un animal habite : **live** (*they live in gardens*). *Stand* = être debout ; *put* = poser, et il lui faudrait un complément d'objet." },
        { type: "qcm", question: "**Reading Part 4 — same text (Hedgehogs).**\n**Question 15.** *At night they go out to ___ for food.*", choix: ["see", "watch", "look"], reponse: 2, explication: "**Look for** = chercher. *See* et *watch* (voir, regarder) ne se construisent pas avec *for* dans ce sens. C'est la préposition qui suit qui donne la réponse." },
        { type: "qcm", question: "**Reading Part 4 — same text (Hedgehogs).**\n**Question 16.** *This is ___ hibernation.*", choix: ["told", "called", "said"], reponse: 1, explication: "*This is called...* = cela s'appelle... : **called** sert à donner le nom de quelque chose. *Told* et *said* parlent de paroles (*he told me, she said*)." },
        { type: "qcm", question: "**Reading Part 4 — same text (Hedgehogs).**\n**Question 17.** *Some people ___ small holes in their garden fences.*", choix: ["do", "take", "make"], reponse: 2, explication: "On dit **make a hole** (faire un trou), comme *make a cake, make a mistake*. *Do* s'emploie pour des activités (*do homework, do sport*) : calque du français « faire » à éviter." },

        // ── Reading Part 5
        { type: "saisie", question: `**Reading Part 5.** Read the e-mail and write ONE word for each gap.

*Hi Zoe,*
*I'm writing (18) ___ tell you about my new school. It's much bigger (19) ___ my old one: there are more than a thousand students! There are lots of after-school clubs, (20) ___ I go to the drama club on Wednesdays. (21) ___ you in a club at your school?*
*Last weekend I (22) ___ to the cinema with two girls from my class. The film (23) ___ quite long, but we had a great time.*
*Write soon!*
*Love, Amélie*

**Question 18.** *I'm writing ___ tell you about my new school.*`, reponses: ["to"], explication: "Pour exprimer le **but** (pour + verbe) : **to** + base verbale : *I'm writing to tell you...*" },
        { type: "saisie", question: "**Reading Part 5 — same e-mail (Amélie).**\n**Question 19.** *It's much bigger ___ my old one.*", reponses: ["than"], explication: "Après un comparatif (*bigger*), on emploie **than** (que). *Much* renforce le comparatif : beaucoup plus grand." },
        { type: "saisie", question: "**Reading Part 5 — same e-mail (Amélie).**\n**Question 20.** *There are lots of after-school clubs, ___ I go to the drama club on Wednesdays.*", reponses: ["and", "so"], explication: "Un connecteur relie les deux idées : **and** (et) est le plus naturel ; **so** (donc) est aussi accepté. *But* ne convient pas : il n'y a pas d'opposition." },
        { type: "saisie", question: "**Reading Part 5 — same e-mail (Amélie).**\n**Question 21.** *___ you in a club at your school?*", reponses: ["are"], explication: "Question avec le verbe *be* : on inverse sujet et verbe : **Are** you in a club? (*Do you in a club* est impossible : il n'y a pas d'autre verbe.)" },
        { type: "saisie", question: "**Reading Part 5 — same e-mail (Amélie).**\n**Question 22.** *Last weekend I ___ to the cinema with two girls from my class.*", reponses: ["went"], explication: "*Last weekend* → prétérit. *Go* est irrégulier : **went**. Attention à l'orthographe, elle compte en Part 5." },
        { type: "saisie", question: "**Reading Part 5 — same e-mail (Amélie).**\n**Question 23.** *The film ___ quite long, but we had a great time.*", reponses: ["was"], explication: "Il manque le verbe : *be* au prétérit (on parle du week-end dernier) avec un sujet singulier (*the film*) : **was**. *Is* serait au présent, *were* va avec un pluriel." },

        // ── Writing
        { type: "redaction", question: `**Writing Part 6 — Question 24.** Your English friend Charlie is coming to stay at your house next weekend. Write an e-mail to Charlie.
In your e-mail:
- tell Charlie what the weather will be like
- say what you are going to do together
- tell Charlie what clothes to bring.
Write **25 words or more**.`, corrige: `**Model answer**

*Hi Charlie,*
*I can't wait to see you on Saturday! The weather forecast says it will be sunny but quite cold. We're going to cycle to the lake and have a picnic with my cousins. Bring a warm jacket and some trainers.*
*See you soon,*
*Manon* (46 words)

**Note du modèle : 15/15**
- **Content 5/5** : la météo (*sunny but quite cold*), le programme (*cycle to the lake, picnic*), les vêtements (*a warm jacket, trainers*) : les trois points sont clairs.
- **Organisation 5/5** : ouverture, une phrase par point dans l'ordre, connecteurs *but, and*, formule de fin.
- **Language 5/5** : *will* pour une prévision, *be going to* pour un projet, impératif *Bring* ; vocabulaire précis (*weather forecast*).

**Exemple de copie moyenne**
*Hi Charlie, the weather is good. We go to the cinema and we eat pizza. Bye, Manon* (17 words)
- **Content 2/5** : les vêtements sont oubliés et la météo est vague ; moins de 25 mots.
- **Organisation 3/5** : ouverture et fin présentes, mais un seul connecteur (*and*).
- **Language 3/5** : phrases correctes mais très simples ; présent au lieu du futur (*We go* → *We're going to go*).
- **Total : 8/15.**

**Pour te noter** : vérifie d'abord les 3 points (*Content*), puis l'ouverture, la fin et les connecteurs (*Organisation*), enfin les temps et le vocabulaire (*Language*). Compte tes mots.` },
        { type: "redaction", question: `**Writing Part 7 — Question 25.** Look at the three pictures and write the story. Write **35 words or more**.
1. *A girl is walking in a park. A small dog is sitting alone under a bench.*
2. *The girl is reading the name on the dog's collar and she is calling a phone number.*
3. *An old man is holding the dog and smiling. He is giving the girl a box of chocolates.*`, corrige: `**Model answer**

*Last Sunday, Chloé was walking in the park when she saw a little dog under a bench. It was alone and it looked sad. There was a phone number on its collar, so Chloé called it. Half an hour later, an old man arrived. He was so happy to see his dog that he gave Chloé a big box of chocolates!* (61 words)

**Note du modèle : 15/15**
- **Content 5/5** : les trois images sont racontées (le chien seul, l'appel grâce au collier, le propriétaire reconnaissant).
- **Organisation 5/5** : repères de temps (*Last Sunday, Half an hour later*), connecteurs *when, so, that* ; l'histoire suit l'ordre des images.
- **Language 5/5** : prétérit continu pour le décor (*was walking*), prétérits irréguliers (*saw, gave*), adjectifs de sentiment (*sad, happy*), structure *so happy that*.

**Exemple de copie moyenne**
*Chloé walk in the park. She see a dog. She call the number. The man is happy.* (17 words)
- **Content 3/5** : les trois images sont évoquées, mais très brièvement, et le cadeau est oublié ; moins de 35 mots.
- **Organisation 2/5** : phrases juxtaposées, sans aucun connecteur.
- **Language 2/5** : verbes au présent sans -s au lieu du passé (*walk, see, call* → *walked, saw, called*).
- **Total : 7/15.**

**Pour te noter** : une phrase au moins par image, tout au passé, au moins trois connecteurs, un prénom et un sentiment.` },

        // ── Listening
        { type: "qcm", question: `**Listening Part 1 — Question 26.** What did the boy buy at the market?
**Transcript** — *Girl : Did you get the apples for Grandma's cake? Boy : No, sorry, they didn't have any good ones. I got some strawberries instead. I wanted to buy some cheese too, but it was really expensive.*`, choix: ["a picture of a bag of apples", "a picture of a box of strawberries", "a picture of a piece of cheese"], reponse: 1, explication: "Les trois images sont citées, comme à l'examen. Pas de pommes (*they didn't have any good ones*), pas de fromage (*I wanted to buy some cheese too, but it was really expensive*) : il a acheté des **fraises** (*I got some strawberries instead*)." },
        { type: "saisie", question: `**Listening Part 2.** You will hear a librarian talking about a summer reading challenge. Complete the notes.
**Transcript** — *Hello everyone! This summer, the town library is running a reading challenge for young people aged nine to fourteen. It starts on the fifth of July. Last year you had to read five books, but this year it's a bit harder: you need to read six. There's a party for everyone who finishes, on Saturday the thirtieth of August at three o'clock. To join, just speak to me. My name's Mr Fairley, that's F-A-I-R-L-E-Y.*

**Question 27.** Number of books to read: ___`, reponses: ["6", "six"], explication: "**Six** livres. *Five* est l'ancien chiffre (*Last year...*), et *but this year* annonce le changement : piège typique de la Part 2." },
        { type: "saisie", question: "**Listening Part 2 — same transcript (reading challenge).**\n**Question 28.** Librarian's name: Mr ___", reponses: ["Fairley", "Mr Fairley", "Mr. Fairley"], explication: "Le nom est épelé : F-A-I-R-L-E-Y → **Fairley**. Attention : le **E** se prononce « i » et le **I** « aï ». Vérifie toujours l'orthographe d'un nom épelé." },
        { type: "qcm", question: `**Listening Part 3 — Question 29.** You will hear Jack talking to his mum about a school trip.
**Transcript** — *Mum : So, are you looking forward to the trip to the castle tomorrow? Jack : Well, I wasn't at first, because I thought it would be boring. But Mr Hughes says we can dress up as knights, and there's a sword fight at lunchtime. Mum : That sounds great! Have you got your packed lunch ready? Jack : Not yet. Can I take some of that chocolate cake?*
How does Jack feel about the trip now?`, choix: ["He thinks it will be boring.", "He's worried about the sword fight.", "He's looking forward to it."], reponse: 2, explication: "*I wasn't at first... But...* : son avis a changé. Les costumes de chevalier et le combat d'épées le rendent **impatient** (*looking forward to it*). *It will be boring* est son opinion **d'avant** ; rien n'indique qu'il a peur du combat." },
        { type: "qcm", question: `**Listening Part 4 — Question 30.** You will hear a girl leaving a message for her friend. Why is she calling?
**Transcript** — *Hi Sophie, it's Grace. I know we said we'd go to the swimming pool tomorrow, but I've just found out it's closed for cleaning all week. Do you want to go ice skating instead? The rink opens at ten. Call me back!*`, choix: ["to say she can't go out tomorrow", "to ask Sophie what time the pool opens", "to suggest a different activity"], reponse: 2, explication: "Part 4 : on cherche l'**idée principale**. La piscine est fermée, alors Grace **propose une autre activité** : le patin à glace (*Do you want to go ice skating instead?*). Elle n'annule pas la sortie, et l'heure donnée est celle de la patinoire, pas de la piscine." },
        { type: "qcm", question: `**Listening Part 5 — Question 31.** You will hear Lily talking to her teacher about the school fair. What will Lily do at the fair?
**Transcript** — *Mr Dean : So, Lily, are you selling cakes at the fair? Lily : Well, I was going to, but Tom's mum makes amazing cakes, so Tom's doing that. Mr Dean : OK. So what will you do? Lily : I'm going to take photos for the school website. And Sam's going to help with the games. Mr Dean : Great. And who's selling the old books? Lily : Nobody yet!*`, choix: ["sell cakes", "help with the games", "take photos", "sell books"], reponse: 2, explication: "Lily **voulait** vendre des gâteaux (*I was going to, but...*) : c'est Tom qui le fera. Elle va **prendre des photos**. Les jeux, c'est Sam ; les livres, personne encore. En Part 5, la liste contient toujours des éléments qui ne correspondent à personne." },

        // ── Speaking
        { type: "redaction", question: `**Speaking.** Prepare your answers, then say them aloud (time yourself), and finally write them down.
**Part 1** (the examiner asks you): *What's your name? How old are you? Where do you live? What's your favourite school subject? Please tell me something about what you do at the weekend.*
**Part 2** (with your partner): the pictures show five places to go at the weekend: a shopping centre, a zoo, a beach, a museum, a sports centre. *Do you like these different places? Say why or why not.* Write a short dialogue between you (A) and your partner (B), 8 to 10 lines.`, corrige: `**Model answer — Part 1**

- *My name's Hugo Lefèvre.*
- *I'm thirteen.*
- *I live in Rennes, in the west of France.*
- *My favourite subject is science, because we do experiments and our teacher is really funny.*
- *At the weekend, I usually play football with my club on Saturday morning. On Sunday, I often visit my grandparents and we have lunch together. Sometimes I go to the cinema with my friends.*

**Model answer — Part 2**

**A** : *Do you like going to shopping centres?*
**B** : *Not really. They're always very busy and I don't like shopping. What about you?*
**A** : *I quite like them, because you can go to the cinema there too. But I prefer the beach.*
**B** : *Me too! I love swimming in the sea in summer.*
**A** : *What do you think about museums?*
**B** : *I think they're a bit boring, but science museums are interesting.*
**A** : *I agree. And the zoo? I love animals, so it's my favourite place.*
**B** : *Really? I think the sports centre is more fun than the zoo. You can play basketball with your friends.*

**Liste de contrôle (1 point par élément réussi, sur 10)**
1. Réponses complètes aux questions personnelles (jamais un seul mot).
2. Au moins une raison avec *because*.
3. La réponse longue (*tell me something about...*) fait 3 phrases ou plus.
4. Mots de fréquence (*usually, often, sometimes*).
5. En Part 2, on parle d'au moins 4 lieux sur 5.
6. On donne son avis (*I think, I prefer, I love*).
7. On pose des questions au partenaire (*What about you? What do you think...?*).
8. On réagit (*Me too! Really? I agree.*).
9. Un comparatif (*more fun than*).
10. On a parlé à voix haute et chronométré : environ 2 minutes pour la Part 1, 2 minutes pour la discussion.

**Erreurs à éviter** : *I have thirteen years* (→ *I'm thirteen*), *I am agree* (→ *I agree*), *The museums is boring* (→ *are*).` },

        // ── Bilan
        { type: "redaction", question: `**Bilan de l'examen blanc.** Compte tes points : Reading (exercices 1 à 23, sur 23), Writing (exercices 24 et 25, sur 30), Listening (exercices 26 à 31, sur 6), Speaking (exercice 32, sur 10). Calcule le pourcentage de chaque compétence, repère la plus faible et écris en français ton plan de révision pour les trois prochaines semaines.`, corrige: `**Exemple de bilan**

| Compétence | Points | Pourcentage |
|---|---|---|
| Reading | 17 / 23 | 17 ÷ 23 × 100 ≈ 74 % |
| Writing | 20 / 30 | 20 ÷ 30 × 100 ≈ 67 % |
| Listening | 5 / 6 | 5 ÷ 6 × 100 ≈ 83 % |
| Speaking | 7 / 10 | 70 % |

**Analyse** : niveau proche de l'A2 ou atteint dans toutes les compétences ; le point faible est le **Writing**. Dans les deux rédactions, un point de la consigne a été oublié et il y a peu de connecteurs.

**Plan de révision**
- Semaine 1 : relire les chapitres Writing Part 6 et Part 7 ; écrire deux messages et deux histoires en cochant les 3 points de la consigne.
- Semaine 2 : apprendre les verbes irréguliers du tableau de la Part 7 et refaire les exercices de Reading Part 5 (petits mots de grammaire).
- Semaine 3 : refaire cet examen blanc en entier, chronométré, et comparer les pourcentages.

**Rappel** : ces pourcentages sont des **repères** ; ils ne correspondent pas exactement au score de l'échelle Cambridge, qui est calculé avec des tables officielles propres à chaque session.

**Critères** : les quatre compétences sont comptées, les pourcentages sont justes, la compétence la plus faible est identifiée, et le plan propose des actions concrètes liées aux chapitres de l'appli.` },
      ],
    },
  ],
};
