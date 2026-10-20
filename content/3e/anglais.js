export default {
  chapitres: [
    {
      id: "present-perfect",
      titre: "Le present perfect : bilan, expérience, for et since",
      theme: "Grammaire",
      cours: `
## Formation
Le **present perfect** se forme avec **have / has + participe passé** (*-ed* pour les verbes réguliers, 3e colonne pour les irréguliers).

| Affirmation | Négation | Question |
|---|---|---|
| I / you / we / they have worked (*I've worked*) | I haven't worked | Have you worked? |
| he / she / it has worked (*she's worked*) | she hasn't worked | Has she worked? |

Réponses courtes : *Have you ever been to Scotland? — Yes, I have. / No, I haven't.*

### Participes passés irréguliers à connaître
| Base | Prétérit | Participe passé | Sens |
|---|---|---|---|
| be | was / were | been | être |
| go | went | gone | aller |
| see | saw | seen | voir |
| write | wrote | written | écrire |
| eat | ate | eaten | manger |
| take | took | taken | prendre |
| do | did | done | faire |
| buy | bought | bought | acheter |
| meet | met | met | rencontrer |
| win | won | won | gagner |

## À quoi sert le present perfect ?
Le present perfect relie le **passé** au **présent** : ce qui compte, c'est le **résultat** ou le **bilan** aujourd'hui, pas le moment précis de l'action.

1. **Un bilan, une expérience** (dans ma vie, jusqu'à maintenant) : *I have visited London three times. Have you ever eaten sushi? I've never seen the sea.*
2. **Un résultat visible maintenant** : *She has broken her arm* (elle a le bras cassé) ; *I've lost my keys* (je ne les ai pas en ce moment).
3. **Une action qui dure jusqu'à maintenant**, avec **for** ou **since** : *I have lived in Lyon for five years.*

### Les petits mots du present perfect
- **ever** (déjà, une fois dans ta vie ?) dans les questions : *Have you ever been to the USA?*
- **never** (jamais) : *I have never flown.*
- **just** (venir de) : *He has just arrived.* = Il vient d'arriver.
- **already** (déjà) : *I've already finished.*
- **yet** (déjà ? / pas encore), en **fin** de phrase, dans les questions et négations : *Have you finished yet? — No, not yet. I haven't finished yet.*

## For ou since ?
En français, on dit « J'habite ici **depuis** cinq ans » au **présent**. En anglais, comme l'action dure encore, on emploie le **present perfect** : *I **have lived** here for five years.*

| for + DURÉE | since + POINT DE DÉPART |
|---|---|
| for two hours, for ten years, for a long time | since 2020, since Monday, since I was six |

>! « Je le connais depuis 2019 » → *I have known him since 2019.* (et non *I know him since 2019*)
>!
>! « Depuis combien de temps apprends-tu l'anglais ? » → *How long have you been learning English?* → *For four years.* (avec *learn*, la forme en *been + -ing* est la plus naturelle)

### Le present perfect en be + -ing
Pour insister sur une **activité qui dure** jusqu'à maintenant : **have / has been + V-ing** : *It has been raining since this morning. I've been waiting for you for an hour!*

## Been ou gone ?
- *She has **been** to New York* = elle y est allée et elle est **revenue** (expérience).
- *She has **gone** to New York* = elle y est partie et elle **est là-bas** maintenant.

> **À retenir** : present perfect = **have / has + participe passé**. Il sert à faire un **bilan** (ever, never, already, yet, just) et à dire **depuis** quand ou combien de temps (*for* + durée, *since* + point de départ). « Depuis » + présent en français = **present perfect** en anglais. Jamais de date précise passée avec le present perfect (*yesterday, in 2015, ago* → prétérit).
`,
      exercices: [
        { type: "saisie", question: "Donne le participe passé de *write*.", reponses: ["written"], explication: "*Write – wrote – **written*** : attention au double t du participe passé." },
        { type: "qcm", question: "*I have lived in this town ___ 2018.*", choix: ["for", "ago", "since", "during"], reponse: 2, explication: "*2018* est un **point de départ** → **since**. *For* s'emploie avec une durée (*for eight years*), *ago* avec le prétérit." },
        { type: "qcm", question: "*We have been friends ___ ten years.*", choix: ["for", "since", "ago", "from"], reponse: 0, explication: "*Ten years* est une **durée** → **for**." },
        { type: "saisie", question: "Complète au present perfect : *She ___ (never / see) a koala.*", reponses: ["has never seen", "'s never seen", "She has never seen", "She's never seen", "She has never seen a koala", "She's never seen a koala"], explication: "**has + never + participe passé** : *She has never seen a koala.* *Never* se place entre l'auxiliaire et le participe." },
        { type: "saisie", question: "Pose la question au present perfect : *you / ever / be / to Ireland*", reponses: ["Have you ever been to Ireland"], explication: "Question : **Have** + sujet + **ever** + participe passé : *Have you ever been to Ireland?* On dit *been to* pour une expérience de voyage." },
        { type: "vf", question: "*My father has gone to Canada* signifie qu'il est revenu du Canada.", reponse: false, explication: "*Has **gone** to* = il est parti et il est **encore là-bas**. S'il était revenu, on dirait *He has **been** to Canada*." },
        { type: "saisie", question: "Traduis : « J'apprends l'anglais depuis quatre ans. »", reponses: ["I have learnt English for four years", "I have learned English for four years", "I have been learning English for four years", "I have studied English for four years", "I have been studying English for four years", "I have learnt English for 4 years", "I have learned English for 4 years", "I have been learning English for 4 years", "I have studied English for 4 years", "I have been studying English for 4 years"], explication: "« Depuis » + durée, action qui dure encore → **present perfect + for** : *I have learnt / I've been learning English for four years.* Le présent (*I learn English since...*) est une erreur typique des francophones." },
        { type: "qcm", question: "*Is Tom here?* — *No, he ___ left.* (Il vient de partir.)", choix: ["just has", "is just", "did just", "has just"], reponse: 3, explication: "« Venir de » = **have / has + just + participe passé** : *He has just left.*" },
        { type: "saisie", question: "Transforme en question avec *yet* : *You have finished your homework.*", reponses: ["Have you finished your homework yet"], explication: "Dans une question, *yet* (déjà ?) se place **en fin de phrase** : *Have you finished your homework yet?*" },
        { type: "redaction", question: "Niveau fin de 3e : tu postules pour un échange scolaire d'un mois à Toronto. Écris un paragraphe de 80 à 100 mots où tu présentes ton expérience : ce que tu as déjà fait, ce que tu n'as jamais fait, depuis quand tu apprends l'anglais et pourquoi tu veux partir. Utilise au moins quatre fois le present perfect, avec *for* ou *since*.", corrige: `Exemple de réponse :

*My name is Inès and I'm fourteen. I have been learning English for five years and I have always loved it. I have already travelled abroad: I've been to Spain twice with my family and I have visited London with my school. However, I have never been to North America and I've never taken a plane alone. I have watched a lot of Canadian videos since last year, and I would really like to discover Toronto, its culture and its people. I think this exchange would help me to become more independent.*

Points vérifiés :
- present perfect pour le bilan : *I have already travelled*, *I've been to Spain twice*, *I have never been* ;
- **for** + durée (*for five years*) et **since** + point de départ (*since last year*) ;
- *been to* pour une expérience de voyage ;
- aucune date précise avec le present perfect ;
- motivation exprimée (*I would really like to...*, *I think...*).` },
      ],
    },
    {
      id: "recit-au-passe",
      titre: "Raconter au passé : prétérit ou present perfect, past perfect, used to",
      theme: "Grammaire",
      cours: `
## Prétérit ou present perfect ?
C'est le choix le plus difficile pour un francophone, car « j'ai visité » peut se traduire des deux façons.

| Prétérit (past simple) | Present perfect |
|---|---|
| action **datée, terminée**, coupée du présent | **bilan** ou action reliée au présent |
| *yesterday, last year, in 2019, two days ago, when I was ten* | *ever, never, already, yet, just, so far, for, since* |
| *I **visited** London **last summer**.* | *I **have visited** London three times.* |

>! « J'ai perdu mes clés hier » → *I **lost** my keys **yesterday**.* (date précise → prétérit)
>!
>! « J'ai perdu mes clés ! » (je ne les ai pas maintenant) → *I'**ve lost** my keys!*

Une question en **When...?** ou **What time...?** demande une date : elle se pose toujours au **prétérit** : *When did you arrive?* (jamais *When have you arrived?*).

Souvent, on commence au present perfect (bilan) puis on passe au prétérit pour donner les détails :
*Have you ever been to Scotland? — Yes, I **went** there in 2024. We **visited** Edinburgh.*

## Ago : il y a
**Ago** se place **après** la durée et va avec le **prétérit** : *I met her three years ago.* = Je l'ai rencontrée il y a trois ans.

## Le past perfect : l'antériorité dans le passé
**Had + participe passé** : il exprime une action **antérieure** à une autre action passée (le « plus-que-parfait » français).
>! *When we arrived at the station, the train **had** already **left**.* = le train était parti avant notre arrivée.
>!
>! *She was sad because she **had lost** her phone.*

Négation : *I hadn't seen him before.* Question : *Had you ever met her?* Forme contractée : *I'd left, she'd seen*.

## Used to : les habitudes du passé
**Used to + base verbale** décrit une **habitude ou un état passé qui n'existe plus** (« avant, ... ») :
>! *I **used to** play the piano, but I stopped two years ago.* = Avant, je jouais du piano.
>!
>! *There **used to** be a cinema in my street.*

Négation : *I **didn't use to** like vegetables.* Question : *Did you use to wear a uniform?* (après *did*, on écrit *use*, sans d).

## Raconter une histoire au passé
- **Prétérit** pour les actions principales : *He opened the door and saw a strange man.*
- **Past continuous** (*was / were + V-ing*) pour le décor ou l'action en cours : *It was raining and the wind was blowing.*
- **Past perfect** pour revenir en arrière : *He had never seen him before.*
- Connecteurs : *first, then, after that, suddenly, meanwhile, finally, in the end*.

### Verbes irréguliers indispensables en 3e
| Base | Prétérit | Participe | Sens |
|---|---|---|---|
| begin | began | begun | commencer |
| bring | brought | brought | apporter |
| catch | caught | caught | attraper |
| choose | chose | chosen | choisir |
| fall | fell | fallen | tomber |
| feel | felt | felt | ressentir |
| fly | flew | flown | voler (avion) |
| forget | forgot | forgotten | oublier |
| know | knew | known | savoir, connaître |
| leave | left | left | partir, laisser |
| lose | lost | lost | perdre |
| ride | rode | ridden | monter (à cheval, à vélo) |
| speak | spoke | spoken | parler |
| teach | taught | taught | enseigner |
| think | thought | thought | penser |

> **À retenir** : date ou moment précis passé (*yesterday, ago, in 2010, When...?*) → **prétérit**. Bilan, expérience, lien avec maintenant → **present perfect**. Action antérieure à un autre fait passé → **past perfect** (*had + participe*). Habitude passée révolue → **used to + base verbale**.
`,
      exercices: [
        { type: "qcm", question: "*I ___ my grandparents last weekend.*", choix: ["have visited", "visited", "have been visiting", "had visit"], reponse: 1, explication: "*Last weekend* est un repère passé précis → **prétérit** : *I visited*." },
        { type: "qcm", question: "*___ you ever ___ a horse?*", choix: ["Did / ride", "Have / rode", "Have / ridden", "Do / ride"], reponse: 2, explication: "*Ever* = bilan d'expérience → **present perfect** avec le participe passé *ridden* (*ride – rode – ridden*)." },
        { type: "saisie", question: "Pose la question au bon temps : *When / you / arrive?*", reponses: ["When did you arrive"], explication: "Une question en **When** porte sur un moment précis → **prétérit** : *When did you arrive?*" },
        { type: "saisie", question: "Traduis : « Je l'ai rencontré il y a deux ans. » (rencontrer = meet)", reponses: ["I met him two years ago", "I met him 2 years ago"], explication: "« Il y a » + durée = **durée + ago**, avec le **prétérit** : *I met him two years ago.*" },
        { type: "saisie", question: "Complète au past perfect : *When I got to the cinema, the film ___ (already / start).*", reponses: ["had already started", "'d already started", "the film had already started"], explication: "Le film a commencé **avant** mon arrivée → **past perfect** : *had already started*." },
        { type: "vf", question: "*I used to live in Paris* signifie que j'habite encore à Paris aujourd'hui.", reponse: false, explication: "**Used to** décrit une situation passée **qui n'existe plus** : j'habitais à Paris avant, mais plus maintenant." },
        { type: "saisie", question: "Mets à la forme négative : *I used to like coffee.*", reponses: ["I didn't use to like coffee", "I did not use to like coffee", "I never used to like coffee", "I used not to like coffee"], explication: "Négation : **didn't use to** + base verbale (après *did*, *use* perd son d)." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["I saw this film two days ago.", "I have seen this film yesterday.", "I have seen this film in 2023.", "I see this film last week."], reponse: 0, explication: "*Ago* va avec le **prétérit** : *I saw this film two days ago.* Avec *yesterday* ou *in 2023*, le present perfect est impossible ; *I see* n'est pas un passé." },
        { type: "saisie", question: "Donne le prétérit de *bring*.", reponses: ["brought"], explication: "*Bring – **brought** – brought* (apporter). Ne confonds pas avec *buy – bought – bought*." },
        { type: "redaction", question: "Niveau fin de 3e : raconte en 100 à 120 mots un souvenir marquant (un voyage, une rencontre, une surprise). Utilise le prétérit, au moins un past continuous, un past perfect et *used to*.", corrige: `Exemple de réponse :

*When I was younger, I used to spend every summer at my grandparents' farm in Brittany. One evening in July 2023, I was reading in the garden when I heard a strange noise. I looked up and saw a small dog in the field. It was shaking and it looked very hungry. I had never seen it before, so I gave it some water and a piece of bread. Then my grandfather called the neighbours: the dog had escaped from a house two kilometres away! The next day, its owner, a young girl, came to thank us. We became friends and we still write to each other.*

Points vérifiés :
- **used to** pour l'habitude passée (*I used to spend*) ;
- **past continuous** pour l'action en cours interrompue (*I was reading... when I heard*) ;
- **prétérit** pour les actions principales (*looked, saw, gave, came*), dont des irréguliers ;
- **past perfect** pour l'antériorité (*I had never seen it before, the dog had escaped*) ;
- connecteurs de récit : *one evening, then, the next day*.` },
      ],
    },
    {
      id: "voix-passive",
      titre: "La voix passive",
      theme: "Grammaire",
      cours: `
## Pourquoi utiliser le passif ?
À la voix passive, le sujet **subit** l'action. On l'utilise quand ce qui compte est **ce qui est fait**, pas **qui** le fait, ou quand on ne sait pas qui l'a fait :
- *The Eiffel Tower **was built** in 1889.* (ce qui compte, c'est la tour)
- *My bike **has been stolen**!* (on ne sait pas qui l'a volé)

## Formation : BE + participe passé
C'est **be** qui porte le temps ; le participe passé ne change pas.

| Temps | Voix active | Voix passive |
|---|---|---|
| présent simple | They **speak** English here. | English **is spoken** here. |
| prétérit | Shakespeare **wrote** *Hamlet*. | *Hamlet* **was written** by Shakespeare. |
| present perfect | Someone **has stolen** my bike. | My bike **has been stolen**. |
| futur | They **will open** the shop. | The shop **will be opened**. |
| modal | You **must wear** a uniform. | A uniform **must be worn**. |
| be + -ing | They **are building** a bridge. | A bridge **is being built**. |

## Passer de l'actif au passif
1. Le **complément** de la phrase active devient le **sujet**.
2. On met **be** au temps du verbe actif, puis le **participe passé**.
3. L'ancien sujet devient le **complément d'agent**, introduit par **by** : seulement s'il apporte une information utile.

>! *Millions of people **visit** the British Museum every year.* → *The British Museum **is visited** by millions of people every year.*
>!
>! *Someone **broke** the window.* → *The window **was broken**.* (*by someone* n'apporte rien : on le supprime)

## Les passifs à connaître par cœur
- *I **was born** in 2011.* = Je suis né(e) en 2011 (jamais *I am born*).
- *It **is made of** wood.* (en bois) / *It **is made in** China.* (fabriqué en Chine)
- *He **is called** Sam.* / *The book is set in London.*
- *English **is spoken** all over the world.*

## Le passif et le « on » français
Le français dit souvent « on » là où l'anglais met un passif :
- « **On** m'a offert un livre. » → *I **was given** a book.*
- « **On** parle anglais au Canada. » → *English **is spoken** in Canada.*

## Questions et négations
- Question : on inverse **be** et le sujet : *When **was** the Statue of Liberty **built**?* *Where **are** these phones **made**?*
- Négation : *The museum **isn't open** on Mondays. The letter **wasn't sent**.*

> **À retenir** : passif = **be (au temps voulu) + participe passé**, + *by* + agent si c'est utile. On s'en sert quand l'action compte plus que son auteur. « Je suis né » = *I was born*. « On » se traduit souvent par un passif.
`,
      exercices: [
        { type: "qcm", question: "*The Harry Potter books ___ by J. K. Rowling between 1997 and 2007.*", choix: ["wrote", "are written", "have write", "were written"], reponse: 3, explication: "Les livres ont été écrits entre 1997 et 2007 (action passée datée) → **were written** : *be* au prétérit (pluriel) + participe passé." },
        { type: "saisie", question: "Traduis : « Je suis né(e) en 2011. »", reponses: ["I was born in 2011"], explication: "« Être né » se dit toujours au passif prétérit : **I was born** in 2011." },
        { type: "saisie", question: "Mets au passif (sans complément d'agent) : *They speak English in Australia.*", reponses: ["English is spoken in Australia"], explication: "Le complément *English* devient sujet ; *be* au présent (*is*) + participe *spoken*. *By them* n'apporte rien : on le supprime." },
        { type: "saisie", question: "Mets au passif : *Someone has stolen my phone.*", reponses: ["My phone has been stolen", "My phone's been stolen"], explication: "Present perfect passif : **has been + participe passé** : *My phone has been stolen.*" },
        { type: "vf", question: "Dans la phrase *The window was broken by the wind*, c'est *the window* qui fait l'action.", reponse: false, explication: "Au passif, le sujet **subit** l'action. C'est le vent (*by the wind*, le complément d'agent) qui a cassé la fenêtre." },
        { type: "qcm", question: "« On m'a offert un vélo pour mon anniversaire. »", choix: ["One offered me a bike for my birthday.", "I was given a bike for my birthday.", "I gave a bike for my birthday.", "A bike gave me for my birthday."], reponse: 1, explication: "Le « on » français devient souvent un **passif** : *I was given a bike.* *One offered* ne se dit pas, et *I gave* signifie « j'ai offert »." },
        { type: "saisie", question: "Pose la question au passif : *When / the Eiffel Tower / build?*", reponses: ["When was the Eiffel Tower built"], explication: "Question au passif prétérit : **When + was + sujet + participe** : *When was the Eiffel Tower built?* (réponse : en 1889)." },
        { type: "qcm", question: "*A new swimming pool ___ in my town at the moment.*", choix: ["is building", "has built", "is being built", "builds"], reponse: 2, explication: "*At the moment* → action en cours ; la piscine ne se construit pas elle-même → passif en be + -ing : **is being built**." },
        { type: "saisie", question: "Mets au passif : *You must wear a helmet.*", reponses: ["A helmet must be worn"], explication: "Avec un modal : **modal + be + participe passé** : *A helmet must be worn.* (*wear – wore – worn*)." },
        { type: "redaction", question: "Niveau fin de 3e : tu prépares un audioguide pour un monument ou un lieu célèbre du monde anglophone (Big Ben, la statue de la Liberté, le Golden Gate Bridge...). Écris un texte de 80 à 100 mots en utilisant au moins quatre verbes au passif.", corrige: `Exemple de réponse (la statue de la Liberté) :

*Welcome to Liberty Island! The Statue of Liberty was designed by the French sculptor Auguste Bartholdi, and its iron framework was designed by Gustave Eiffel. It was given to the United States by France as a symbol of friendship, and it was inaugurated in 1886. The statue is made of copper: that's why it is green today. For millions of immigrants, it was the first thing they saw when they arrived in New York. Today, it is visited by millions of tourists every year, and it has been a UNESCO World Heritage Site since 1984.*

Points vérifiés :
- passifs variés : *was designed, was given, was inaugurated, is made of, is visited* (attention : *it has been a UNESCO site* n'est pas un passif, c'est le present perfect de *be*) ;
- *by* + agent quand il est utile (*by Bartholdi, by Eiffel, by France*) ;
- informations exactes : inauguration en 1886, cuivre (*copper*), patrimoine mondial de l'UNESCO depuis 1984 ;
- ton d'audioguide (*Welcome to...*).` },
      ],
    },
    {
      id: "modaux-nuances",
      titre: "Les modaux : capacité, obligation, conseil, probabilité",
      theme: "Grammaire",
      cours: `
## Rappel : comment fonctionnent les modaux ?
**Can, could, must, should, may, might, will, would** :
- sont suivis de la **base verbale** sans *to* : *You should go* (jamais *should to go*) ;
- ne prennent **jamais de -s** : *She can swim* ;
- font seuls la négation et la question : *I can't. Can you...?*

## La capacité : can, could, be able to
- *I **can** speak three languages.* (présent)
- *When I was five, I **could** swim.* (passé : capacité générale)
- *I **will be able to** drive next year.* (futur : *can* n'a pas de futur)
- *I have never **been able to** draw.* (present perfect)

## L'obligation et l'interdiction
| Expression | Sens | Exemple |
|---|---|---|
| **must** | obligation (souvent ressentie par celui qui parle) | *I must finish this today.* |
| **have to** | obligation extérieure (règle, contrainte) | *We have to wear a uniform.* |
| **mustn't** | **interdiction** | *You mustn't use your phone in class.* |
| **don't have to** | **absence d'obligation** (pas besoin) | *You don't have to come: it's optional.* |

Attention au piège : *mustn't* = c'est interdit ; *don't have to* = ce n'est pas obligatoire.
Au passé et au futur, on utilise **have to** : *I **had to** wait. You **will have to** work hard.*

## Le conseil : should
**Should** (« devrais ») donne un conseil ou une recommandation : *You **should** see a doctor. You **shouldn't** eat so much sugar.*
Pour un regret au passé : *You **should have** told me!* = Tu aurais dû me le dire !

## La permission : can, may, could
- *Can I open the window?* (courant) — *May I come in?* (plus poli) — *Could you help me, please?* (demande polie)
- *You **can** go out* = tu as la permission.

## La probabilité : du plus sûr au moins sûr
| Modal | Degré de certitude | Exemple |
|---|---|---|
| **must** | presque certain (déduction logique) | *He's been working all day: he **must** be tired.* |
| **will** | certitude sur l'avenir | *It **will** be sunny tomorrow.* |
| **may** | possible (peut-être) | *It **may** rain this afternoon.* |
| **might / could** | possible, mais moins sûr | *She **might** come, but I'm not sure.* |
| **can't** | presque impossible (déduction) | *That **can't** be Tom: he's in London!* |

>! « Il doit être malade » (je le déduis) → *He **must** be ill.*
>!
>! « Ce n'est sûrement pas vrai » → *It **can't** be true.* (et non *It mustn't be true*)

> **À retenir** : modal + **base verbale**, sans -s ni *to*. *Can → will be able to* au futur ; *must → had to* au passé. *Mustn't* = interdit, *don't have to* = pas obligatoire. *Should* = conseil. Probabilité : *must* (sûr) > *may* > *might* > *can't* (impossible).
`,
      exercices: [
        { type: "qcm", question: "*You ___ smoke in the hospital. It's forbidden.*", choix: ["mustn't", "don't have to", "shouldn't to", "can"], reponse: 0, explication: "C'est **interdit** → **mustn't**. *Don't have to* signifierait « ce n'est pas obligatoire » ; *shouldn't to* est incorrect (pas de *to* après un modal)." },
        { type: "qcm", question: "*Tomorrow is Saturday, so I ___ get up early.* (pas besoin)", choix: ["mustn't", "can't", "must", "don't have to"], reponse: 3, explication: "Absence d'obligation → **don't have to** : je n'ai pas besoin de me lever tôt (mais je peux si je veux)." },
        { type: "saisie", question: "Complète au futur : *Next year, I ___ drive a scooter.* (pouvoir, être capable)", reponses: ["will be able to", "'ll be able to", "I will be able to", "I'll be able to", "I will be able to drive a scooter", "I'll be able to drive a scooter", "Next year, I will be able to drive a scooter", "Next year, I'll be able to drive a scooter"], explication: "*Can* n'a pas de futur : on utilise **will be able to** + base verbale." },
        { type: "saisie", question: "Mets au passé : *I must wait for the bus.*", reponses: ["I had to wait for the bus"], explication: "*Must* n'a pas de passé : on utilise **had to** : *I had to wait for the bus.*" },
        { type: "vf", question: "La phrase *She cans speak Spanish.* est correcte.", reponse: false, explication: "Un modal ne prend jamais de -s : **She can speak Spanish.**" },
        { type: "qcm", question: "*Look at the clouds. It ___ rain later, but I'm not sure.*", choix: ["must", "might", "can't", "has to"], reponse: 1, explication: "Une possibilité incertaine → **might** (ou *may*). *Must* exprimerait une quasi-certitude, *can't* une impossibilité." },
        { type: "saisie", question: "Traduis : « Tu devrais te reposer. » (se reposer = rest)", reponses: ["You should rest", "You should have a rest", "You should take a rest", "You ought to rest", "You had better rest"], explication: "Un conseil → **should** + base verbale : *You should rest.*" },
        { type: "qcm", question: "*She's been running for two hours. She ___ be exhausted!*", choix: ["can't", "mustn't", "must", "doesn't have to"], reponse: 2, explication: "Déduction logique, presque certaine → **must** : elle doit être épuisée." },
        { type: "saisie", question: "Traduis : « Ça ne peut pas être vrai ! »", reponses: ["It can't be true", "It cannot be true", "That can't be true", "That cannot be true", "This can't be true"], explication: "Une impossibilité logique se dit avec **can't** : *It can't be true!* (*mustn't* signifierait une interdiction)." },
        { type: "redaction", question: "Niveau fin de 3e : un élève britannique va passer une semaine dans ton collège. Écris-lui un message de 80 à 100 mots pour lui expliquer les règles (ce qu'on doit faire, ce qui est interdit, ce qui n'est pas obligatoire) et lui donner deux conseils. Utilise *have to, mustn't, don't have to, should* et *can*.", corrige: `Exemple de réponse :

*Hi Oliver,*

*Here are a few things you should know about my school. Classes start at 8 a.m., so you have to arrive on time. You mustn't use your phone in the building: it's forbidden and the teachers can take it! But you don't have to wear a uniform, like in the UK: you can wear jeans and trainers. At lunchtime, you can eat at the canteen with me. You should bring a pencil case and a notebook, and you shouldn't worry about French: everybody will help you!*

*See you on Monday,*
*Hugo*

Points vérifiés :
- obligation : *have to* ; interdiction : *mustn't* ; absence d'obligation : *don't have to* ;
- permission : *can* ; conseils : *should / shouldn't* ;
- base verbale après chaque modal, aucun -s ni *to* ;
- comparaison culturelle avec le Royaume-Uni (uniforme).` },
      ],
    },
    {
      id: "futur-hypotheses",
      titre: "Futur et hypothèses : will, when, if, unless, would",
      theme: "Grammaire",
      cours: `
## Parler de l'avenir : trois façons
| Forme | Emploi | Exemple |
|---|---|---|
| **will** + base verbale | prédiction, décision prise sur le moment, promesse | *I think it **will** rain. — OK, I'**ll** help you!* |
| **be going to** + base verbale | intention, projet déjà décidé ; prédiction fondée sur un indice | *I'**m going to** study law. Look at the sky: it'**s going to** rain.* |
| **présent en be + -ing** | rendez-vous, programme organisé | *I'**m meeting** Sam at six tomorrow.* |

Négation de *will* : **won't** (*will not*) : *She won't come.*

## Après WHEN, AS SOON AS, BEFORE, AFTER : le présent !
Dans une subordonnée de temps qui parle du futur, l'anglais emploie le **présent** (le français emploie le futur) :
>! « Quand **je serai** grand, je **serai** médecin. » → *When I **grow up**, I **will be** a doctor.*
>!
>! « Appelle-moi dès que tu **arriveras**. » → *Call me as soon as you **arrive**.*

Jamais *When I will be...* : c'est l'erreur la plus fréquente.

## Les phrases en IF : trois degrés de réalité
| Type | Structure | Sens | Exemple |
|---|---|---|---|
| vérité générale | **if + présent → présent** | toujours vrai | *If you heat ice, it **melts**.* |
| hypothèse probable | **if + présent → will + base** | c'est possible, réaliste | *If it **rains**, we **will stay** at home.* |
| hypothèse imaginaire | **if + prétérit → would + base** | peu probable ou irréel | *If I **won** the lottery, I **would travel** around the world.* |

Comme après *when*, **jamais de will ni de would juste après if** :
- *If it **will rain**...* ✗ → *If it **rains**...* ✓
- *If I **would have** money...* ✗ → *If I **had** money...* ✓

Avec *be*, à l'hypothèse imaginaire, on peut dire **were** à toutes les personnes : *If I **were** you, I **would** accept.* = Si j'étais toi, j'accepterais (formule pour donner un conseil).

L'ordre des propositions peut changer : *We will stay at home if it rains.* (pas de virgule quand *if* est au milieu.)

## Unless = if... not
**Unless** = « à moins que, sauf si » : *You will fail **unless** you work.* = *You will fail **if** you **don't** work.*
Attention : *unless* est déjà négatif, le verbe qui suit est affirmatif.

## Exprimer un souhait
- *I **would like** to visit New York.* (*I'd like*) = J'aimerais...
- *I'd rather stay at home.* = Je préférerais rester à la maison.
- *I hope you **will** come.* (souhait réaliste)

> **À retenir** : *will* = prédiction, décision, promesse ; *be going to* = projet décidé ; *be + -ing* = rendez-vous. Après **when, as soon as, if, unless**, on met le **présent** (ou le prétérit pour l'imaginaire), jamais *will* ni *would*. Si probable : **if + présent, will** ; si imaginaire : **if + prétérit, would**.
`,
      exercices: [
        { type: "qcm", question: "*Look at those black clouds! It ___ rain.*", choix: ["is going to", "rains", "would", "is raining to"], reponse: 0, explication: "Prédiction fondée sur un **indice visible** (les nuages) → **be going to** : *It's going to rain.*" },
        { type: "saisie", question: "Complète : *If it ___ (be) sunny tomorrow, we will go to the beach.*", reponses: ["is", "'s"], explication: "Hypothèse probable : **if + présent**, puis *will*. Jamais *will* après *if* : *If it is sunny...*" },
        { type: "saisie", question: "Complète : *If I ___ (have) more time, I would learn Japanese.*", reponses: ["had"], explication: "Hypothèse imaginaire : **if + prétérit → would + base verbale** : *If I had more time, I would learn Japanese.*" },
        { type: "qcm", question: "« Quand je serai grand, je voyagerai. »", choix: ["When I will be older, I will travel.", "When I would be older, I travel.", "When I am older, I travelled.", "When I am older, I will travel."], reponse: 3, explication: "Après **when**, on met le **présent** même si l'on parle du futur : *When I am older, I will travel.*" },
        { type: "vf", question: "*You won't pass unless you study* signifie « Tu ne réussiras pas si tu ne travailles pas ».", reponse: true, explication: "**Unless** = *if... not* : *unless you study* = *if you don't study*." },
        { type: "saisie", question: "Traduis la formule de conseil : « Si j'étais toi, j'accepterais. » (accepter = accept)", reponses: ["If I were you, I would accept", "If I were you I would accept", "If I were you, I'd accept", "If I were you I'd accept", "If I were you, I would accept it", "If I were you, I'd accept it"], explication: "Hypothèse imaginaire : *If I **were** you, I **would** accept.* Dans cette formule figée, on emploie **were** même avec *I* (*If I was you* s'entend à l'oral familier, mais n'est pas la forme attendue à l'écrit)." },
        { type: "saisie", question: "Complète : *Text me as soon as you ___ (get) home.*", reponses: ["get"], explication: "Après **as soon as**, présent à valeur de futur : *as soon as you get home*." },
        { type: "qcm", question: "*If you heat water to 100 °C, it ___.*", choix: ["would boil", "boils", "boiled", "will boils"], reponse: 1, explication: "Vérité générale (scientifique) → **if + présent, présent** : *it boils*. *Will boils* est fautif (pas de -s après *will*)." },
        { type: "saisie", question: "Corrige l'erreur : *If I would win the lottery, I would buy a house.*", reponses: ["If I won the lottery, I would buy a house", "If I won the lottery I would buy a house", "If I won the lottery, I'd buy a house", "If I won the lottery I'd buy a house"], explication: "Jamais *would* après *if* : **if + prétérit** (*If I won*), puis *would* dans la principale." },
        { type: "redaction", question: "Niveau fin de 3e : « If you could change one thing in the world, what would it be? » Réponds en 100 à 120 mots. Explique ton choix, imagine ses conséquences (au moins trois phrases en *if* ou *would*) et termine par ce que tu vas faire concrètement, toi, dans les années à venir (*will* ou *be going to*).", corrige: `Exemple de réponse :

*If I could change one thing in the world, I would stop plastic pollution in the oceans. Every year, millions of tonnes of plastic end up in the sea, and many animals die because of it. If there were no plastic bags or bottles, sea turtles and birds would be much safer. Beaches would be cleaner and people would eat healthier fish. If everybody recycled, we would also save energy. Of course, I can't change the world alone, but I'm going to do my part: I'm going to stop buying plastic bottles, and when I am older, I will join an environmental association.*

Points vérifiés :
- hypothèses imaginaires : **if + prétérit → would** (*If I could..., If there were..., If everybody recycled...*) ;
- projets personnels : *I'm going to stop*, *I will join* ;
- présent après *when* (*when I am older*) ;
- justification (*because of it*) et nuance (*Of course, ... but...*) ;
- donnée prudente (*millions of tonnes*) sans chiffre inventé.` },
      ],
    },
    {
      id: "discours-indirect",
      titre: "Le discours indirect (reported speech)",
      theme: "Grammaire",
      cours: `
## Discours direct, discours indirect
- **Direct** : on cite les paroles exactes, entre guillemets : *Emma said, "I am tired."*
- **Indirect** : on **rapporte** les paroles dans une subordonnée : *Emma said (that) she **was** tired.*

## Say ou tell ?
- **say** + (that) + phrase : *He **said** (that) he was hungry.*
- **tell** + **quelqu'un** + (that) : *He **told me** (that) he was hungry.* (on ne dit jamais *He told that...* ni *He said me...*)
- **ask** pour rapporter une question : *She **asked** me where I lived.*

## La concordance des temps
Quand le verbe introducteur est au passé (*said, told, asked*), on « recule » d'un temps :

| Paroles directes | Discours indirect |
|---|---|
| présent : *"I **like** music."* | prétérit : *He said he **liked** music.* |
| be + -ing : *"I'**m working**."* | was + -ing : *She said she **was working**.* |
| prétérit : *"I **saw** it."* | past perfect : *He said he **had seen** it.* |
| present perfect : *"I'**ve finished**."* | past perfect : *She said she **had finished**.* |
| will : *"I **will** call."* | would : *He said he **would** call.* |
| can : *"I **can** swim."* | could : *She said she **could** swim.* |
| must : *"You **must** go."* | had to : *He said I **had to** go.* |

Si le verbe introducteur est au présent (*He says...*), le temps ne change pas : *He says he is tired.*

## Les autres changements
Les pronoms et les repères changent selon la situation :
- *I → he / she*, *my → his / her*, *we → they* ;
- *now → then*, *today → that day*, *tomorrow → the next day*, *yesterday → the day before*, *here → there*, *this → that*.

>! *Tom: "I will see you tomorrow."* → *Tom said he would see me **the next day**.*

## Rapporter une question
On utilise **ask** et l'ordre de la phrase **affirmative** (sujet + verbe), sans *do / did* et sans point d'interrogation :
- question en Wh- : *"Where **do you live**?"* → *She asked me where **I lived**.*
- question fermée (yes / no) : **if** ou **whether** : *"**Are you** OK?"* → *He asked if **I was** OK.*

## Rapporter un ordre ou une demande
**tell / ask + quelqu'un + (not) to + base verbale** :
- *"Close the door!"* → *She **told me to close** the door.*
- *"Don't be late."* → *He **told us not to be** late.*
- *"Can you help me, please?"* → *She **asked me to help** her.*

> **À retenir** : *say (that)*, *tell somebody (that)*, *ask (if / where...)*. Après un verbe au passé, on recule les temps (présent → prétérit, prétérit et present perfect → past perfect, *will → would*, *can → could*). Question rapportée = ordre affirmatif. Ordre rapporté = *tell / ask + qqn + (not) to + V*.
`,
      exercices: [
        { type: "qcm", question: "*She ___ me that she was moving to Wales.*", choix: ["said", "asked", "told", "spoke"], reponse: 2, explication: "Avec une personne juste après le verbe (*me*), on utilise **tell** : *She told me that...* *Said* ne peut pas être suivi directement de *me*." },
        { type: "saisie", question: "Mets au discours indirect : *Leo said, \"I am hungry.\"* → *Leo said (that) he ___ hungry.*", reponses: ["was"], explication: "Le verbe introducteur est au passé : le présent *am* recule au prétérit **was**, et *I* devient *he*." },
        { type: "saisie", question: "Mets au discours indirect : *Mia said, \"I will help you.\"* → *Mia said she ___ help me.*", reponses: ["would", "'d"], explication: "**Will** devient **would** au discours indirect : *Mia said she would help me.*" },
        { type: "qcm", question: "*\"Where do you live?\" she asked.* → *She asked me ___.*", choix: ["where I lived", "where did I live", "where do I live", "where I do live"], reponse: 0, explication: "Dans une question rapportée, on reprend l'**ordre affirmatif** (sujet + verbe), sans *do / did*, et on recule le temps : *where I lived*." },
        { type: "saisie", question: "Mets au discours indirect : *\"Are you French?\" he asked me.* → *He asked me ___ French.*", reponses: ["if I was", "whether I was", "if I was French", "whether I was French"], explication: "Question fermée (réponse oui / non) → **if** ou **whether**, ordre affirmatif, temps reculé : *He asked me if I was French.*" },
        { type: "saisie", question: "Mets au discours indirect : *The teacher said, \"Don't talk!\"* → *The teacher told us ___.*", reponses: ["not to talk"], explication: "Un ordre négatif rapporté : **tell + qqn + not to + base verbale** : *told us not to talk*." },
        { type: "vf", question: "*He said, \"I have finished.\"* devient *He said he had finished.*", reponse: true, explication: "Le present perfect *have finished* recule au **past perfect** *had finished*." },
        { type: "qcm", question: "*Sam (lundi) : \"I'll call you tomorrow.\"* Rapporté plus tard : *Sam said he would call me ___.*", choix: ["tomorrow", "yesterday", "the day before", "the next day"], reponse: 3, explication: "Rapporté plus tard, *tomorrow* devient **the next day** (le lendemain). *The day before* correspond à *yesterday*." },
        { type: "saisie", question: "Mets au discours indirect : *She said, \"I can swim.\"* → *She said she ___ swim.*", reponses: ["could"], explication: "**Can** recule en **could** : *She said she could swim.*" },
        { type: "redaction", question: "Niveau fin de 3e : voici un échange entre un journaliste et une jeune militante pour le climat (texte d'entraînement). Rapporte-le au discours indirect en 6 phrases, en variant *said, told, asked, explained*.\n\n*Journalist: \"How old are you?\"*\n*Ava: \"I'm fifteen.\"*\n*Journalist: \"Why did you start this campaign?\"*\n*Ava: \"I saw a documentary about melting glaciers and I was shocked.\"*\n*Journalist: \"What will you do next?\"*\n*Ava: \"We will organise a march next month. Please come and join us!\"*", corrige: `Corrigé :

*The journalist asked Ava how old she was. She said that she was fifteen. Then he asked her why she had started this campaign. She explained that she had seen a documentary about melting glaciers and that she had been shocked. The journalist asked her what she would do next. She told him that they would organise a march the following month, and she asked people to come and join them.*

Points vérifiés :
- questions rapportées à l'**ordre affirmatif** : *how old she was*, *why she had started*, *what she would do* ;
- concordance des temps : *am → was*, *did start / saw → had started / had seen*, *was → had been*, *will → would* ;
- *next month → the following month* ;
- pronoms adaptés : *I → she*, *we → they*, *us → them* ;
- demande rapportée : *asked people to come and join them*.` },
      ],
    },
    {
      id: "relatives",
      titre: "Les propositions relatives : who, which, that, whose, where",
      theme: "Grammaire",
      cours: `
## À quoi sert une relative ?
Une **proposition relative** donne des précisions sur un nom (l'**antécédent**), comme « qui, que, dont, où » en français :
*The girl **who lives next door** is Irish.*

## Choisir le bon pronom relatif
| Pronom | Antécédent | Exemple |
|---|---|---|
| **who** | une **personne** | *The man **who** helped me was very kind.* |
| **which** | une **chose**, un animal | *The book **which** I'm reading is great.* |
| **that** | personne ou chose (relatives essentielles) | *The film **that** we saw was scary.* |
| **whose** | « dont » + possession (le / la / les ... de qui) | *I have a friend **whose** father is a pilot.* |
| **where** | un **lieu** | *This is the town **where** I was born.* |
| **when** | un **moment** | *I remember the day **when** we met.* |

>! *whose* remplace un possessif : *I have a friend. **His** father is a pilot.* → *I have a friend **whose** father is a pilot.*

## Sujet ou complément ?
- Pronom **sujet** (suivi d'un verbe) : on ne peut pas le supprimer : *The boy **who won** the race is my cousin.*
- Pronom **complément** (suivi d'un sujet + verbe) : on peut le **supprimer** (relative « zéro ») : *The book (**that**) **I read** was boring.* = *The book I read was boring.*

## Les relatives entre virgules
Si la relative ajoute une information **non indispensable**, on la met entre **virgules** ; dans ce cas, **that est interdit** et on ne peut pas supprimer le pronom :
*My sister, **who** lives in Dublin, is a nurse.* (je n'ai qu'une sœur : l'information est accessoire)
*London, **which** is the capital of the UK, has about 9 million inhabitants.*

## La préposition à la fin
En anglais courant, la préposition se place souvent **à la fin** de la relative :
*This is the girl (**who**) I told you **about**.* = C'est la fille dont je t'ai parlé.
*The house (**that**) we live **in** is old.* = La maison dans laquelle nous habitons est vieille.

### Pièges des francophones
- « ce que » / « ce qui » = **what** : *I don't understand **what** he says. **What** I like is music.*
- On ne répète pas le pronom personnel : *The man who **he** lives here* ✗ → *The man who lives here* ✓

> **À retenir** : **who** (personne), **which** (chose), **that** (les deux, sans virgules), **whose** (possession : « dont le / la »), **where** (lieu). Pronom complément : on peut l'omettre. Relative entre virgules : jamais *that*. « Ce que » = **what**.
`,
      exercices: [
        { type: "qcm", question: "*The woman ___ teaches us history is from Scotland.*", choix: ["which", "who", "whose", "where"], reponse: 1, explication: "L'antécédent est une **personne** (*the woman*) et le pronom est sujet de *teaches* → **who** (ou *that*)." },
        { type: "qcm", question: "*This is the café ___ we met for the first time.*", choix: ["which", "who", "where", "whose"], reponse: 2, explication: "L'antécédent est un **lieu** et la relative signifie « où » → **where**." },
        { type: "saisie", question: "Relie avec *whose* : *I know a boy. His mother is a famous singer.*", reponses: ["I know a boy whose mother is a famous singer"], explication: "*His mother* devient **whose mother** : *I know a boy whose mother is a famous singer.*" },
        { type: "vf", question: "Dans *The film that we watched was boring*, on peut supprimer *that*.", reponse: true, explication: "*That* est **complément** (il est suivi du sujet *we*) : on peut dire *The film we watched was boring.*" },
        { type: "vf", question: "Dans *The girl who won the prize is my friend*, on peut supprimer *who*.", reponse: false, explication: "*Who* est **sujet** de *won* : on ne peut pas le supprimer (*The girl won the prize is my friend* n'a pas de sens)." },
        { type: "qcm", question: "*Paris, ___ is the capital of France, attracts millions of tourists.*", choix: ["which", "that", "who", "what"], reponse: 0, explication: "Relative **entre virgules** à propos d'une chose → **which**. *That* est interdit entre virgules." },
        { type: "saisie", question: "Traduis : « Je ne comprends pas ce qu'il dit. »", reponses: ["I don't understand what he says", "I do not understand what he says", "I don't understand what he is saying", "I do not understand what he is saying", "I can't understand what he says", "I can't understand what he is saying"], explication: "« Ce que » se traduit par **what** : *I don't understand what he says / what he's saying.*" },
        { type: "saisie", question: "Complète avec le pronom relatif qui convient : *The phone ___ I bought last week is already broken.* (donne le pronom, même si on pourrait l'omettre)", reponses: ["that", "which"], explication: "Antécédent chose, pronom complément → **that** ou **which** (ou rien : *The phone I bought...*)." },
        { type: "saisie", question: "Corrige l'erreur : *The man who he lives next door is a doctor.*", reponses: ["The man who lives next door is a doctor", "The man that lives next door is a doctor"], explication: "Le pronom relatif **who** est déjà le sujet : on ne répète pas *he*." },
        { type: "redaction", question: "Niveau fin de 3e : présente une personnalité du monde anglophone que tu admires (artiste, sportif, militant, scientifique) en 80 à 100 mots. Utilise au moins quatre relatives différentes (*who, which, whose, where*...).", corrige: `Exemple de réponse (Malala Yousafzai) :

*Malala Yousafzai is a young woman who fights for girls' education. She was born in 1997 in the Swat Valley, a region of Pakistan where the Taliban banned girls from going to school. She wrote a blog which described her life under their rule. In 2012, she was shot by a Taliban gunman, but she survived and moved to Birmingham, in England, where she continued her studies. In 2014, she became the youngest person ever to receive the Nobel Peace Prize. She is someone whose courage inspires millions of young people.*

Points vérifiés :
- relatives variées : *who fights*, *where the Taliban banned*, *which described*, *whose courage* ;
- pas de pronom répété après le relatif ;
- faits exacts : née en 1997, attaquée en 2012, prix Nobel de la paix en 2014 (la plus jeune lauréate, à 17 ans) ;
- prétérit pour la biographie, présent pour le portrait actuel.` },
      ],
    },
    {
      id: "gerondif-infinitif",
      titre: "Verbe + -ing ou to + verbe ; make, let, want someone to",
      theme: "Grammaire",
      cours: `
## Deux constructions après un verbe
En anglais, un verbe suivi d'un autre verbe impose soit **V-ing** (gérondif), soit **to + base verbale** (infinitif).

### Verbes suivis de V-ing
Les verbes de **goût** et quelques autres :
- *like, love, enjoy, hate, can't stand* (ne pas supporter), *don't mind* (ça ne me dérange pas) ;
- *finish, stop, keep* (continuer), *avoid* (éviter), *practise, suggest* ;
- *be keen on, be fond of, be good at, be interested in, look forward to* (avoir hâte de).

>! *I **enjoy reading** comics. She's **good at drawing**. I'm **looking forward to seeing** you.*

### Verbes suivis de TO + base verbale
Les verbes de **projet, décision, souhait** :
- *want, would like, decide, hope, plan, learn, forget, need, promise, refuse, manage* (réussir à), *agree* (accepter de).

>! *I **want to become** a vet. They **decided to leave**. He **managed to escape**.*

## Après une préposition : toujours V-ing
Toute **préposition** (*of, in, at, about, before, after, without, by, instead of, for*) est suivie de **V-ing** :
- *before **going** out*, *without **saying** goodbye*, *thank you for **coming***.
- Piège : *look forward **to*** (avoir hâte de), *be used **to*** (être habitué à) : ici *to* est une préposition → V-ing : *I look forward to **hearing** from you.*

## Le -ing sujet de la phrase
Pour faire d'une activité le sujet, on utilise V-ing (le français utilise l'infinitif) :
*« **Nager** est bon pour la santé. »* → ***Swimming** is good for your health.*

## Le but : TO + base verbale
Pour dire « pour + infinitif » (le but), on dit simplement **to** : *I went to London **to improve** my English.* (jamais *for improve*)

## Faire faire, laisser faire, vouloir que
| Structure | Sens | Exemple |
|---|---|---|
| **make** + qqn + **base verbale** | obliger quelqu'un à | *My mum **makes me tidy** my room.* |
| **let** + qqn + **base verbale** | laisser, permettre | *My parents **let me go** out on Saturdays.* |
| **have** + qqch + **participe passé** | faire faire par un professionnel | *I **had my hair cut**.* |
| **want / would like** + qqn + **to** + base | vouloir que quelqu'un fasse | *I **want you to listen**.* |

« Je veux que tu viennes » → *I want **you to come**.* (jamais *I want that you come*)

> **À retenir** : goûts (*like, enjoy, hate*) et *finish, stop, avoid* → **V-ing** ; projets et décisions (*want, decide, hope, learn*) → **to + V**. Après une préposition → **V-ing**. But → **to + V**. *Make / let + qqn + base verbale* ; *want + qqn + to + V*.
`,
      exercices: [
        { type: "saisie", question: "Complète : *I really enjoy ___ (play) video games with my cousins.*", reponses: ["playing"], explication: "*Enjoy* est suivi de **V-ing** : *I enjoy playing.*" },
        { type: "saisie", question: "Complète : *She has decided ___ (study) medicine.*", reponses: ["to study"], explication: "*Decide* exprime une décision → **to + base verbale** : *decided to study*." },
        { type: "qcm", question: "*He left without ___ goodbye.*", choix: ["say", "to say", "said", "saying"], reponse: 3, explication: "Après une **préposition** (*without*), on met toujours **V-ing** : *without saying goodbye*." },
        { type: "qcm", question: "« Je veux que tu m'aides. »", choix: ["I want that you help me.", "I want you to help me.", "I want you help me.", "I want you helping me."], reponse: 1, explication: "Vouloir que quelqu'un fasse quelque chose : **want + qqn + to + base verbale** : *I want you to help me.*" },
        { type: "saisie", question: "Complète la formule de fin de lettre : *I look forward to ___ (hear) from you.*", reponses: ["hearing"], explication: "Dans *look forward to*, *to* est une préposition → **V-ing** : *I look forward to hearing from you.*" },
        { type: "vf", question: "La phrase *My parents let me to go to the party.* est correcte.", reponse: false, explication: "Après **let + qqn**, on met la **base verbale sans to** : *My parents let me go to the party.*" },
        { type: "saisie", question: "Traduis : « Lire est mon passe-temps préféré. »", reponses: ["Reading is my favourite hobby", "Reading is my favorite hobby", "Reading is my favourite pastime", "Reading is my favorite pastime", "Reading is my favourite activity", "Reading is my favorite activity"], explication: "Une activité sujet de la phrase se dit en **V-ing** : *Reading is my favourite hobby.*" },
        { type: "saisie", question: "Traduis : « Je suis allé(e) à Londres pour améliorer mon anglais. »", reponses: ["I went to London to improve my English", "I went to London in order to improve my English", "I went to London so as to improve my English"], explication: "Le but (« pour + infinitif ») se dit avec **to + base verbale** : *to improve*. *For improve* est une erreur fréquente. Le séjour est un fait passé raconté : **prétérit** (*I went*)." },
        { type: "qcm", question: "*Our teacher made us ___ the text again.*", choix: ["to read", "reading", "read", "reads"], reponse: 2, explication: "**Make + qqn + base verbale** (sans *to*) : *made us read*." },
        { type: "redaction", question: "Niveau fin de 3e : tu réponds à une annonce pour un job d'été dans un camp de vacances en Angleterre. Écris une lettre de motivation de 100 mots environ : présente tes goûts et tes qualités, ce que tu as appris à faire, ce que tu espères faire, et termine poliment. Utilise au moins trois verbes + V-ing et trois verbes + to.", corrige: `Exemple de réponse :

*Dear Sir or Madam,*

*I am writing to apply for the job of assistant at your summer camp. I'm fifteen and I love working with children: I often look after my little cousins and I enjoy organising games for them. I am also good at swimming and I have learnt to play the guitar. I would like to improve my English and I hope to meet people from different countries. I really want to discover British culture. I am patient, sociable and reliable.*

*I look forward to hearing from you.*

*Yours faithfully,*
*Camille Martin*

Points vérifiés :
- V-ing après *love, enjoy, good at, look forward to* ;
- *to* + base verbale après *learnt, would like, hope, want*, et pour le but (*I am writing to apply*) ;
- registre formel : *Dear Sir or Madam* ... *Yours faithfully* (on ne connaît pas le nom du destinataire) ;
- qualités : *patient, sociable, reliable* (fiable).` },
      ],
    },
    {
      id: "opinion-connecteurs-comparaison",
      titre: "Donner son avis, argumenter, comparer",
      theme: "Lexique",
      cours: `
## Exprimer son opinion
| Pour donner son avis | Pour nuancer |
|---|---|
| *I think (that)... / I believe... / I feel...* | *I'm not sure that... / It depends.* |
| *In my opinion... / In my view... / For me...* | *It may be true, but...* |
| *As far as I'm concerned...* (en ce qui me concerne) | *To some extent...* (dans une certaine mesure) |
| *I'm convinced that...* | *On the whole...* (dans l'ensemble) |

### Être d'accord ou non
- *I **agree** with you.* / *I **disagree**.* / *I don't agree with this idea.*
- Piège : on ne dit jamais *I am agree* : **agree** est un verbe.
- *You're right. / That's true, but... / I see your point, but... / I'm afraid I don't agree.*

### Exprimer ses goûts et ses sentiments
*I'm keen on..., I'm fond of..., I'm interested in..., I can't stand..., It makes me feel sad / angry / proud.*
Rappel : après ces expressions, le verbe est en **V-ing** : *I'm keen on cooking.*

## Les connecteurs logiques
| Fonction | Connecteurs | Exemple |
|---|---|---|
| ajouter | *and, also, moreover, furthermore, besides, what's more* | *It's cheap. **Moreover**, it's fast.* |
| opposer | *but, however, whereas, although, even though, on the other hand, yet* | ***Although** it was cold, we went out.* |
| cause | *because, because of + nom, since, as, thanks to + nom* | *The match was cancelled **because of** the rain.* |
| conséquence | *so, therefore, that's why, as a result* | *He was ill, **so** he stayed in bed.* |
| but | *to, in order to, so that* | *I study hard **in order to** pass.* |
| exemple | *for example, for instance, such as, like* | *sports **such as** rugby* |
| conclure | *to sum up, in conclusion, all in all, finally* | ***To sum up**, ...* |

Attention :
- **because** + sujet + verbe (*because it rained*) ; **because of** + nom (*because of the rain*) ;
- **despite / in spite of** + nom ou V-ing : *Despite the rain, we went out.* (jamais *despite it rained*) ;
- **however** se place le plus souvent en début de phrase, suivi d'une virgule : *However, it's expensive.*

## Comparer
| Comparaison | Adjectif court | Adjectif long |
|---|---|---|
| supériorité | *taller **than**, bigger than, happier than* | ***more** expensive **than*** |
| infériorité | *less tall than* ou *not as tall as* | ***less** expensive than* |
| égalité | ***as** tall **as*** | ***as** interesting **as*** |
| superlatif | ***the** tallest, the biggest* | ***the most** famous* |

Irréguliers : *good → better → the best* ; *bad → worse → the worst* ; *far → further → the furthest*.

### Pour aller plus loin
- *The more you read, **the more** you learn.* = Plus tu lis, plus tu apprends.
- *It's getting **colder and colder**.* = Il fait de plus en plus froid. *More and more people use social media.*
- *It's **the best** film **I've ever seen**.* = le meilleur film que j'aie jamais vu (superlatif + present perfect).

> **À retenir** : *I think, in my opinion, I agree / disagree* (jamais *I am agree*). Connecteurs : *moreover* (de plus), *however* (cependant), *although* (bien que), *whereas* (alors que), *because of* + nom, *therefore* (donc). Comparatifs : *-er than / more ... than*, *as ... as*, *the -est / the most*.
`,
      exercices: [
        { type: "vf", question: "La phrase *I am agree with you.* est correcte.", reponse: false, explication: "**Agree** est un verbe : on dit *I agree with you.*" },
        { type: "qcm", question: "*The flight was cancelled ___ the storm.*", choix: ["because of", "because", "although", "so"], reponse: 0, explication: "*The storm* est un **nom** → **because of**. *Because* doit être suivi d'un sujet et d'un verbe (*because there was a storm*)." },
        { type: "qcm", question: "*___ he was tired, he finished his homework.*", choix: ["Despite", "However", "So", "Although"], reponse: 3, explication: "Opposition suivie d'un **sujet + verbe** → **Although** (bien que). *Despite* est suivi d'un nom (*Despite his tiredness*) ; *However* s'emploie seul, suivi d'une virgule, dans une nouvelle phrase (*He was tired. However, he finished...*) ; *So* exprime la conséquence." },
        { type: "saisie", question: "Traduis le connecteur *however*.", reponses: ["cependant", "pourtant", "toutefois", "néanmoins", "en revanche"], explication: "*However* = **cependant, pourtant, toutefois** : il introduit une opposition." },
        { type: "saisie", question: "Complète au comparatif : *A plane is ___ (fast) than a train.*", reponses: ["faster"], explication: "*Fast* est un adjectif court → **-er + than** : *faster than*." },
        { type: "saisie", question: "Complète au superlatif : *It's ___ (good) book I've ever read.*", reponses: ["the best"], explication: "*Good* est irrégulier : *good → better → **the best***." },
        { type: "saisie", question: "Traduis : « Ce film est aussi intéressant que le livre. »", reponses: ["This film is as interesting as the book", "This movie is as interesting as the book", "The film is as interesting as the book", "The movie is as interesting as the book"], explication: "Comparatif d'égalité : **as + adjectif + as**, quel que soit l'adjectif." },
        { type: "qcm", question: "« Plus tu t'entraînes, plus tu progresses. »", choix: ["More you practise, more you improve.", "The more you practise, the more you improve.", "As more you practise, as more you improve.", "The most you practise, the most you improve."], reponse: 1, explication: "« Plus..., plus... » = **The more..., the more...** (avec *the* deux fois)." },
        { type: "qcm", question: "Quel connecteur introduit une **conséquence** ?", choix: ["whereas", "moreover", "therefore", "although"], reponse: 2, explication: "**Therefore** = donc, par conséquent. *Whereas* (alors que) et *although* (bien que) opposent ; *moreover* (de plus) ajoute." },
        { type: "redaction", question: "Niveau fin de 3e : « Should mobile phones be banned in schools? » Donne ton avis argumenté en 120 mots environ : une introduction, deux arguments pour, un argument contre, une conclusion. Utilise au moins cinq connecteurs différents et une comparaison.", corrige: `Exemple de réponse :

*Nowadays, more and more teenagers have a smartphone, and many schools have decided to ban them. In my opinion, this is a good idea.*

*First of all, phones are a distraction: students who check their messages in class can't concentrate on the lessons. Moreover, social media can lead to cyberbullying, and a phone-free school is safer and calmer. Breaks are also more sociable when people talk to each other instead of looking at screens.*

*However, phones can be useful: students can look up a word or take a picture of the board, and parents can contact their children in an emergency.*

*To sum up, I think the advantages of a ban are more important than the disadvantages, so phones should stay in our bags during the school day.*

Points vérifiés :
- plan clair : introduction, arguments, nuance, conclusion ;
- connecteurs variés : *first of all, moreover, also, however, to sum up, so* ;
- comparaisons : *safer and calmer*, *more sociable*, *more important than* ;
- expressions d'opinion : *In my opinion, I think* ;
- modal de recommandation : *should stay*.` },
      ],
    },
    {
      id: "formation-mots-phrasal-verbs",
      titre: "Former des mots, phrasal verbs et faux-amis",
      theme: "Lexique",
      cours: `
## Deviner un mot grâce à sa formation
Beaucoup de mots anglais sont construits sur un **radical** + un **préfixe** (avant) ou un **suffixe** (après). Les reconnaître t'aide à comprendre un texte sans dictionnaire.

### Les préfixes
| Préfixe | Sens | Exemples |
|---|---|---|
| **un-, in-, im-, ir-, il-, dis-** | contraire | *unhappy, unknown, impossible, irregular, illegal, dislike* |
| **re-** | de nouveau | *rewrite, rebuild, recycle* |
| **over-** | trop | *overweight, overcrowded, overeat* |
| **mis-** | mal | *misunderstand* (mal comprendre) |
| **pre- / post-** | avant / après | *prehistoric, post-war* |

### Les suffixes
| Suffixe | Ce qu'il forme | Exemples |
|---|---|---|
| **-er, -or, -ist** | une personne qui fait | *teacher, actor, scientist, journalist* |
| **-ness, -ment, -tion, -ity** | un nom | *happiness, government, pollution, equality* |
| **-ful** | un adjectif : plein de | *helpful, careful, beautiful* |
| **-less** | un adjectif : sans | *homeless* (sans abri), *useless, careless* |
| **-able / -ible** | un adjectif : qu'on peut | *washable, readable, visible* |
| **-ly** | un adverbe (manière) | *quickly, carefully, happily* |

>! *careless* = sans soin, négligent ; *careful* = prudent, soigneux ; *carefully* = soigneusement.

### Les mots composés
*a smartphone, a headteacher, a bus stop, a football match, a 15-year-old girl* (l'adjectif composé reste au singulier : jamais *a 15-years-old girl*).

## Les phrasal verbs
Un **phrasal verb** = verbe + particule (*up, off, on, out, after...*). Le sens change souvent complètement !
| Phrasal verb | Sens | Exemple |
|---|---|---|
| get up | se lever | *I get up at seven.* |
| grow up | grandir | *I grew up in Lille.* |
| give up | abandonner, arrêter | *Don't give up!* |
| look for | chercher | *I'm looking for my keys.* |
| look after | s'occuper de | *She looks after her brother.* |
| find out | découvrir, apprendre | *I found out the truth.* |
| put on / take off | mettre / enlever (un vêtement) | *Take off your shoes.* |
| turn on / turn off | allumer / éteindre | *Turn off the light.* |
| run out of | ne plus avoir de | *We've run out of milk.* |
| set up | créer, fonder | *She set up a charity.* |
| get on with | bien s'entendre avec | *I get on well with my sister.* |

## Les faux-amis les plus fréquents
| Mot anglais | Vrai sens | À ne pas confondre avec |
|---|---|---|
| *actually* | en fait | actuellement = *currently, now* |
| *eventually* | finalement | éventuellement = *possibly* |
| *a library* | une bibliothèque | une librairie = *a bookshop* |
| *a novel* | un roman | une nouvelle = *a short story* |
| *to attend* | assister à | attendre = *to wait* |
| *to pretend* | faire semblant | prétendre = *to claim* |
| *large* | grand | large = *wide* |
| *a deception* | une tromperie | une déception = *a disappointment* |
| *sensible* | raisonnable | sensible = *sensitive* |
| *to achieve* | réussir, accomplir | achever = *to finish* |

> **À retenir** : décompose les mots inconnus : préfixe contraire (*un-, dis-, im-*), suffixe de personne (*-er, -ist*), de nom (*-ness, -tion*), d'adjectif (*-ful* = avec, *-less* = sans). Un phrasal verb a souvent un sens nouveau (*give up* = abandonner). Méfie-toi des faux-amis : *actually* = en fait, *eventually* = finalement.
`,
      exercices: [
        { type: "saisie", question: "Forme le contraire de *possible* avec un préfixe.", reponses: ["impossible"], explication: "Devant un p, le préfixe contraire est souvent **im-** : *impossible* (de même *impatient, impolite*)." },
        { type: "qcm", question: "Que signifie *homeless* ?", choix: ["sans abri", "qui aime sa maison", "casanier", "chez soi"], reponse: 0, explication: "*Home* (maison, foyer) + **-less** (sans) = **sans abri**." },
        { type: "saisie", question: "Forme le nom correspondant à l'adjectif *happy*.", reponses: ["happiness"], explication: "Le suffixe **-ness** forme un nom : *happy → happiness* (le y devient i)." },
        { type: "qcm", question: "*My grandmother ___ my little brother when my parents are at work.*", choix: ["looks for", "looks up", "looks like", "looks after"], reponse: 3, explication: "**Look after** = s'occuper de. *Look for* = chercher ; *look up* = chercher (un mot) ; *look like* = ressembler à." },
        { type: "saisie", question: "Traduis le phrasal verb *give up*.", reponses: ["abandonner", "arrêter", "renoncer", "laisser tomber", "baisser les bras"], explication: "*Give up* = **abandonner, arrêter, renoncer** : *Don't give up!* = N'abandonne pas !" },
        { type: "vf", question: "*Actually, I don't like tea* signifie « Actuellement, je n'aime pas le thé ».", reponse: false, explication: "Faux-ami : *actually* = **en fait**. « Actuellement » se dit *currently* ou *at the moment*." },
        { type: "qcm", question: "*Her new ___ is about a girl who travels in time.* (son nouveau roman)", choix: ["new", "novel", "news", "romance"], reponse: 1, explication: "« Un roman » = **a novel**. Une nouvelle (récit court) = *a short story* ; *news* = les informations." },
        { type: "saisie", question: "Corrige l'erreur : *She is a 15-years-old girl.*", reponses: ["She is a 15-year-old girl", "She's a 15-year-old girl", "She is a fifteen-year-old girl", "She's a fifteen-year-old girl"], explication: "Dans un adjectif composé, le nom reste au **singulier** : *a 15-year-old girl*. (Mais on dit *She is 15 years old.*) Les traits d'union sont obligatoires." },
        { type: "saisie", question: "Traduis : « Nous n'avons plus de lait. » (avec un phrasal verb)", reponses: ["We have run out of milk", "We've run out of milk", "We are out of milk", "We're out of milk"], explication: "« Ne plus avoir de » = **run out of** : *We've run out of milk.*" },
        { type: "redaction", question: "Niveau fin de 3e : lis cette phrase d'un article (texte d'entraînement) : *Thousands of careless tourists leave useless plastic objects on the beaches, which is unacceptable for local residents, who have set up a cleaning association.* Explique en français le sens des mots *careless, useless, unacceptable, residents, set up*, en montrant comment tu les as compris, puis traduis la phrase.", corrige: `Analyse des mots :
- **careless** = *care* (soin, attention) + *-less* (sans) → **négligents, insouciants** ;
- **useless** = *use* (utilité) + *-less* (sans) → **inutiles** ;
- **unacceptable** = *un-* (contraire) + *accept* + *-able* (qu'on peut) → **inacceptable** ;
- **residents** = mot transparent (même racine que « résider ») → **habitants** ;
- **set up** = phrasal verb → **créer, fonder**.

Traduction proposée : « Des milliers de touristes négligents laissent des objets en plastique inutiles sur les plages, ce qui est inacceptable pour les habitants, qui ont créé une association de nettoyage. »

Méthode : on décompose les mots en préfixe + radical + suffixe, on cherche les mots transparents et on s'appuie sur le contexte (le mot *association* aide à deviner le sens de *set up*). Remarque : *which* reprend toute l'idée qui précède (« ce qui »).` },
      ],
    },
    {
      id: "ecole-et-societe",
      titre: "École et société dans le monde anglophone",
      theme: "Culture",
      cours: `
## L'école au Royaume-Uni (en Angleterre)
- Les élèves comptent en **Years** : la 3e française correspond à peu près à **Year 10** (14-15 ans).
- La plupart des élèves portent un **uniforme** (*a school uniform* : blazer, tie, jumper...).
- Beaucoup d'établissements sont organisés en **houses** (maisons) qui gagnent des points, comme dans *Harry Potter*.
- À 16 ans (fin de **Year 11**), les élèves passent les **GCSEs**, des examens dans chaque matière choisie ; à 18 ans, les **A levels**, pour entrer à l'université.
- En Angleterre, il faut rester en éducation ou en formation (lycée, apprentissage...) jusqu'à **18 ans**.
- Vocabulaire : *head teacher* (chef d'établissement), *form tutor* (professeur principal), *timetable* (emploi du temps), *break* (récréation), *detention* (retenue), *assembly* (rassemblement des élèves).

## L'école aux États-Unis
- On compte en **grades** : la 3e correspond à peu près au **9th grade**, la première année de **high school** (4 ans, de 9th à 12th grade).
- Les élèves de 9th grade sont des **freshmen**, puis *sophomores*, *juniors* et *seniors*.
- Pas d'uniforme en général, mais des **lockers** (casiers), des **school buses** jaunes, des clubs et des équipes sportives très importantes.
- Traditions : le **prom** (bal de fin d'année), la **graduation** (cérémonie de remise des diplômes, avec toque et toge), le **yearbook** (album de l'année).
- Vocabulaire : *principal* (chef d'établissement), *grades* (notes, et aussi les niveaux), *GPA* (moyenne générale), *cafeteria*, *homeroom*.

| | Royaume-Uni | États-Unis |
|---|---|---|
| niveau de la 3e | Year 10 | 9th grade (freshman) |
| examen à 16 ans | GCSEs | pas d'examen national équivalent |
| fin du secondaire | A levels (18 ans) | high school diploma, graduation |
| tenue | uniforme | tenue libre (souvent un *dress code*) |

## L'école et les grands débats de société
Les sujets que tu peux rencontrer dans les documents de 3e :
- **le harcèlement** (*bullying, cyberbullying*) : *a bully* (un harceleur), *to be bullied*, *to stand up for someone* (prendre la défense de quelqu'un) ;
- **les écrans** et les réseaux sociaux (*screen time, social media, to be addicted to*) ;
- **l'égalité des chances** : l'école gratuite pour tous, les bourses (*scholarships*), le coût très élevé des universités américaines (*tuition fees*, *student loans*) ;
- **le droit à l'éducation** dans le monde : beaucoup d'enfants, surtout des filles, ne peuvent pas aller à l'école (combat de **Malala Yousafzai**, prix Nobel de la paix 2014).

## Des œuvres pour en parler
- *Dead Poets Society* (film de Peter Weir, 1989) : un professeur de lettres anticonformiste, M. Keating, dans un pensionnat américain des années 1950 (*Carpe diem*).
- *Wonder* (roman de R. J. Palacio, 2012 ; film en 2017) : Auggie, un garçon au visage différent, entre au collège et affronte le regard des autres.
- *Matilda* (Roald Dahl, 1988) : une petite fille surdouée face à une directrice tyrannique, Miss Trunchbull.

> **À retenir** : 3e ≈ **Year 10** en Angleterre, **9th grade** (*freshman*) aux États-Unis. Royaume-Uni : uniforme, houses, **GCSEs** à 16 ans, **A levels** à 18 ans. États-Unis : **high school**, lockers, prom, graduation, yearbook. Vocabulaire clé : *bullying, timetable, detention, head teacher / principal, tuition fees*.
`,
      exercices: [
        { type: "qcm", question: "À quel niveau anglais correspond à peu près la classe de 3e ?", choix: ["Year 7", "Year 13", "Year 10", "Year 3"], reponse: 2, explication: "En Angleterre, les élèves de 14-15 ans sont en **Year 10**. Year 7 correspond à la 6e, Year 13 à la terminale." },
        { type: "saisie", question: "Comment appelle-t-on un élève de 9th grade, en première année de high school aux États-Unis ?", reponses: ["freshman", "a freshman"], explication: "Les quatre années de high school : **freshman** (9th grade), *sophomore*, *junior*, *senior*." },
        { type: "vf", question: "Les GCSEs sont des examens que les élèves anglais passent vers 16 ans.", reponse: true, explication: "Les **GCSEs** (*General Certificate of Secondary Education*) se passent à la fin de **Year 11**, vers 16 ans." },
        { type: "qcm", question: "Que désigne le mot *prom* dans un lycée américain ?", choix: ["le bal de fin d'année", "un examen final", "le casier de l'élève", "le chef d'établissement"], reponse: 0, explication: "Le **prom** est le bal de fin d'année, une grande tradition des high schools américaines." },
        { type: "saisie", question: "Traduis : « le harcèlement » (à l'école).", reponses: ["bullying"], explication: "**Bullying** = le harcèlement ; *a bully* = un harceleur ; *cyberbullying* = le cyberharcèlement." },
        { type: "qcm", question: "*He got a ___ because he was late for the third time.* (une retenue)", choix: ["timetable", "locker", "graduation", "detention"], reponse: 3, explication: "**Detention** = la retenue. *Timetable* = emploi du temps, *locker* = casier, *graduation* = remise des diplômes." },
        { type: "vf", question: "Dans le roman *Wonder*, Auggie est un garçon dont le visage est différent et qui entre pour la première fois au collège.", reponse: true, explication: "*Wonder* (R. J. Palacio, 2012) raconte l'entrée au collège d'Auggie Pullman, né avec une malformation du visage, et le regard des autres sur lui." },
        { type: "saisie", question: "Traduis : « Les élèves doivent porter un uniforme. »", reponses: ["Students have to wear a uniform", "Pupils have to wear a uniform", "Students must wear a uniform", "Pupils must wear a uniform", "Students have to wear uniforms", "Pupils have to wear uniforms", "Students must wear uniforms", "Pupils must wear uniforms", "Students have to wear a school uniform", "Pupils have to wear a school uniform", "Students must wear a school uniform", "Pupils must wear a school uniform"], explication: "Obligation imposée par une règle → **have to** (ou *must*) + base verbale : *Students have to wear a uniform.* *Uniform* commence par le son « you » : on dit **a** uniform." },
        { type: "redaction", question: "Niveau fin de 3e : un magazine britannique pour adolescents demande : « Would you like to go to a British school? » Écris un article de 120 mots environ : compare l'école en France et au Royaume-Uni (au moins trois différences), dis ce qui te plairait ou non et pourquoi.", corrige: `Exemple de réponse :

*Would I like to go to a British school? Yes and no!*

*First, British pupils wear a uniform, whereas in France we can wear what we want. I think a uniform is practical and it makes everybody equal, but I'd miss my favourite hoodie! Secondly, British schools are organised into houses, which compete for points. That sounds fun, because it creates team spirit. Thirdly, the school day usually finishes around half past three in the UK, so pupils have more time for clubs and sports. In France, I sometimes finish at five, which is exhausting.*

*However, I wouldn't like to take GCSEs in so many subjects! All in all, I would love to spend a term in a British school to improve my English and discover a new way of life.*

Points vérifiés :
- trois différences précises : uniforme, *houses*, horaires ; plus les GCSEs ;
- comparaison et opposition : *whereas, however, more time* ;
- opinions justifiées : *I think..., because...* ;
- conditionnel du souhait : *I'd miss, I wouldn't like, I would love* ;
- relatives : *which compete, which is exhausting*.` },
      ],
    },
    {
      id: "voyages-migrations",
      titre: "Voyages et migrations",
      theme: "Culture",
      cours: `
## Les États-Unis, une nation d'immigrants
- **1620** : le **Mayflower** emmène d'Angleterre une centaine de colons, dont les **Pilgrims** (Pères pèlerins), des protestants dissidents, qui fondent la colonie de Plymouth, dans l'actuel Massachusetts. La fête de **Thanksgiving** rappelle leur première récolte, partagée avec les Amérindiens wampanoags.
- Les peuples **amérindiens** (*Native Americans*) vivaient sur le continent bien avant l'arrivée des Européens.
- Du XVIe au XIXe siècle, plus de 12 millions d'Africains sont déportés de force vers les Amériques et réduits en **esclavage** (*slavery*) : c'est la traite atlantique (*the slave trade*). Près de 400 000 d'entre eux sont débarqués en Amérique du Nord, et en 1860, les États-Unis comptent près de 4 millions d'esclaves. L'esclavage est aboli aux États-Unis en **1865** (13e amendement), après la guerre de Sécession.
- **1892-1954** : **Ellis Island**, à New York, est le principal centre d'accueil des immigrants ; environ 12 millions de personnes y sont passées (chiffre du Service des parcs nationaux américain). Ils découvraient d'abord la **statue de la Liberté**.

Dans le socle de la statue, une plaque de bronze (posée en 1903) porte un poème d'Emma Lazarus, *The New Colossus* (1883) :
*"Give me your tired, your poor, / Your huddled masses yearning to breathe free"*
(« Donne-moi tes pauvres, tes exténués, tes masses entassées qui aspirent à vivre libres »)

## L'Irlande et la Grande Famine
De **1845 à 1852**, une maladie de la pomme de terre provoque la **Great Famine** en Irlande : environ un million de personnes meurent et plus d'un million émigrent, surtout vers les États-Unis. C'est pourquoi des dizaines de millions d'Américains ont aujourd'hui des origines irlandaises, et la **St Patrick's Day** est fêtée dans tout le pays.

## Le Royaume-Uni, terre d'immigration
- Le **22 juin 1948**, les passagers du navire **Empire Windrush** débarquent à Tilbury, près de Londres : des centaines d'entre eux viennent des Caraïbes (Jamaïque, Trinité...), alors que le pays manque de main-d'œuvre pour se reconstruire après la guerre. On parle de la **Windrush generation** ; le *Windrush Day* est célébré chaque 22 juin.
- Après la fin de l'Empire, de nombreux habitants du **Commonwealth** (Inde, Pakistan, Caraïbes, Afrique) s'installent au Royaume-Uni. Le **Commonwealth** réunit aujourd'hui 56 pays, pour la plupart d'anciennes colonies britanniques.
- Résultat : une société **multiculturelle** ; à Londres, on parle des centaines de langues. Le *chicken tikka masala* est souvent présenté comme un plat national britannique !

## Voyager aujourd'hui
- **Le vocabulaire du voyage** : *a trip* (un voyage court), *a journey* (un trajet), *to travel* (voyager), *abroad* (à l'étranger), *a passport*, *luggage* (des bagages, indénombrable, comme *advice*, des conseils), *a flight*, *to book* (réserver), *a youth hostel* (auberge de jeunesse), *a host family* (famille d'accueil).
- **Partir pour étudier ou travailler** : *a school exchange*, *a gap year* (une année de césure), *a working holiday visa*, *an internship* (un stage).
- **Migrer** : *to emigrate* (quitter son pays), *to immigrate* (s'installer dans un pays), *a migrant, a refugee* (réfugié), *to flee* (fuir), *to settle* (s'installer), *a better life*, *the American Dream*.

> **À retenir** : 1620 Mayflower ; 1865 abolition de l'esclavage aux États-Unis ; 1892-1954 Ellis Island ; 1845-1852 Grande Famine irlandaise ; 22 juin 1948 Empire Windrush. *Emigrate* = partir de son pays, *immigrate* = arriver dans un pays. *Luggage* et *advice* ne prennent pas de -s.
`,
      exercices: [
        { type: "qcm", question: "En quelle année le Mayflower a-t-il traversé l'Atlantique ?", choix: ["1492", "1620", "1776", "1865"], reponse: 1, explication: "Le **Mayflower** a amené les Pilgrims en Amérique en **1620**. 1492 = Christophe Colomb ; 1776 = Déclaration d'indépendance ; 1865 = abolition de l'esclavage." },
        { type: "saisie", question: "Quelle île de New York a accueilli des millions d'immigrants de 1892 à 1954 ?", reponses: ["Ellis Island", "Ellis"], explication: "**Ellis Island** était le principal centre d'accueil des immigrants, juste à côté de la statue de la Liberté." },
        { type: "vf", question: "La Grande Famine irlandaise (1845-1852) a poussé plus d'un million d'Irlandais à émigrer.", reponse: true, explication: "La maladie de la pomme de terre a fait environ **un million de morts** et a provoqué l'émigration de **plus d'un million** d'Irlandais, surtout vers les États-Unis." },
        { type: "qcm", question: "D'où venaient la plupart des passagers de l'Empire Windrush en 1948 ?", choix: ["d'Irlande", "d'Australie", "des Caraïbes", "du Canada"], reponse: 2, explication: "L'**Empire Windrush** a amené au Royaume-Uni des passagers venus des **Caraïbes**, notamment de Jamaïque : c'est la *Windrush generation*." },
        { type: "qcm", question: "*My grandparents ___ from Italy to the USA in 1950.* (Ils ont quitté l'Italie.)", choix: ["emigrated", "immigrated", "travelled back", "settled"], reponse: 0, explication: "Quitter son pays (*from Italy*) = **emigrate**. *Immigrate* = s'installer dans un nouveau pays : *they immigrated to the USA*." },
        { type: "saisie", question: "Traduis : « une année de césure » (entre le lycée et l'université).", reponses: ["a gap year", "gap year"], explication: "**A gap year** : une année pour voyager, travailler ou faire du bénévolat avant les études supérieures." },
        { type: "saisie", question: "Corrige l'erreur : *I have too many luggages.*", reponses: ["I have too much luggage", "I've got too much luggage", "I have got too much luggage", "I have too many bags", "I've got too many bags", "I have got too many bags"], explication: "**Luggage** est **indénombrable** : pas de -s, et on dit *too much luggage* (ou *too many bags*)." },
        { type: "qcm", question: "Que signifie le vers *Your huddled masses yearning to breathe free* inscrit sur une plaque du socle de la statue de la Liberté ?", choix: ["Vos soldats qui partent à la guerre", "Vos riches qui veulent faire du commerce", "Vos marins qui naviguent sur la mer", "Vos masses entassées qui aspirent à vivre libres"], reponse: 3, explication: "Ce vers d'Emma Lazarus (*The New Colossus*, 1883) présente l'Amérique comme une terre d'accueil pour les pauvres et les opprimés : **des foules entassées qui aspirent à respirer librement**." },
        { type: "redaction", question: "Niveau fin de 3e : imagine que tu es un(e) jeune immigrant(e) irlandais(e) qui arrive à Ellis Island en 1900. Écris une page de journal intime de 120 mots environ : ton voyage, tes sentiments en voyant la statue de la Liberté, tes espoirs.", corrige: `Exemple de réponse :

*Ellis Island, 14th May 1900*

*Dear Diary,*

*At last, we have arrived! The crossing from Ireland took more than a week. The ship was overcrowded and many passengers were seasick. My little brother cried every night because he was cold and hungry. This morning, when I saw the Statue of Liberty in the fog, I couldn't stop crying: I felt so happy and so scared at the same time. Then we had to wait for hours in the Great Hall. A doctor examined our eyes and asked my father a lot of questions. I was afraid they would send us back to Ireland! Fortunately, everything went well. Tomorrow, we are going to take a train to Boston, where my uncle lives. I hope I will find a job and go to school one day.*

Points vérifiés :
- forme du journal : date, lieu, *Dear Diary*, première personne ;
- prétérit pour le récit (*took, saw, had to wait, examined*), present perfect pour le résultat (*we have arrived*) ;
- sentiments variés : *happy, scared, afraid* ;
- futur pour les projets et les espoirs : *we are going to take, I hope I will find* ;
- texte d'imagination plausible (traversée de plus d'une semaine, contrôle médical à Ellis Island).` },
      ],
    },
    {
      id: "combats-pour-egalite",
      titre: "Rencontres avec d'autres cultures : les combats pour l'égalité",
      theme: "Culture",
      cours: `
## Le mouvement des droits civiques aux États-Unis
Après l'abolition de l'esclavage (1865), les États du Sud imposent la **ségrégation** (*segregation*) : écoles, bus, restaurants séparés pour les Noirs et les Blancs.
- **1er décembre 1955**, à Montgomery (Alabama) : **Rosa Parks** refuse de céder sa place à un passager blanc dans un bus. Elle est arrêtée. Les habitants noirs organisent alors le **boycott des bus de Montgomery** pendant plus d'un an.
- Le pasteur **Martin Luther King Jr.** devient le leader du mouvement ; il prône la **non-violence**.
- **28 août 1963** : lors de la **marche sur Washington**, devant le Lincoln Memorial, il prononce le discours **« I Have a Dream »** :
*"I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character."*
- **1964** : le *Civil Rights Act* interdit la ségrégation ; **1965** : le *Voting Rights Act* protège le droit de vote. Martin Luther King reçoit le prix Nobel de la paix en 1964 ; il est assassiné le **4 avril 1968** à Memphis.
- Aujourd'hui, le **Martin Luther King Day** est un jour férié (troisième lundi de janvier).

## Nelson Mandela et l'apartheid
En Afrique du Sud (pays anglophone en partie), l'**apartheid** (de 1948 au début des années 1990 : les dernières lois sont abolies en 1991) sépare les populations selon leur couleur de peau. **Nelson Mandela** lutte contre ce système : il passe **27 ans en prison**, est libéré en **1990**, reçoit le prix Nobel de la paix en 1993 (avec Frederik de Klerk) et devient le **premier président noir** du pays en **1994**.

## Les suffragettes au Royaume-Uni
Au début du XXe siècle, les **suffragettes**, menées par **Emmeline Pankhurst**, réclament le droit de vote des femmes. Leur devise : *"Deeds, not words"* (« Des actes, pas des mots »).
- **1918** : une partie des femmes de plus de 30 ans obtient le droit de vote ;
- **1928** : les femmes votent dans les mêmes conditions que les hommes (dès 21 ans).

## Le vocabulaire de l'engagement
| Anglais | Français |
|---|---|
| *rights, civil rights, equality, freedom* | droits, droits civiques, égalité, liberté |
| *to fight for / against* | se battre pour / contre |
| *to protest, a protest, a march* | manifester, une manifestation, une marche |
| *to boycott, to campaign* | boycotter, faire campagne |
| *racism, discrimination, injustice* | racisme, discrimination, injustice |
| *a leader, an activist, a hero* | un dirigeant, un militant, un héros |
| *to stand up for* | défendre, prendre la défense de |
| *to be arrested, to be sent to prison* | être arrêté, être emprisonné |

> **À retenir** : Rosa Parks, 1er décembre 1955, Montgomery ; Martin Luther King, *I Have a Dream*, 28 août 1963, non-violence ; Civil Rights Act 1964 ; Mandela, 27 ans de prison, président en 1994 ; suffragettes, *Deeds, not words*, 1918 et 1928. Vocabulaire : *rights, equality, to fight for, to protest, segregation*.
`,
      exercices: [
        { type: "qcm", question: "Dans quelle ville Rosa Parks a-t-elle refusé de céder sa place dans un bus en 1955 ?", choix: ["New York", "Montgomery", "Chicago", "Washington"], reponse: 1, explication: "C'était à **Montgomery**, en Alabama, le 1er décembre 1955. Son arrestation a déclenché le boycott des bus de la ville." },
        { type: "saisie", question: "Quels sont les quatre premiers mots du célèbre discours de Martin Luther King en 1963 ? (en anglais)", reponses: ["I have a dream"], explication: "**I Have a Dream**, discours prononcé le 28 août 1963 devant le Lincoln Memorial à Washington." },
        { type: "vf", question: "Martin Luther King défendait l'usage de la violence pour obtenir l'égalité.", reponse: false, explication: "Martin Luther King prônait la **non-violence** : boycotts, marches, désobéissance civile pacifique." },
        { type: "saisie", question: "Combien d'années Nelson Mandela a-t-il passées en prison ? (en chiffres)", reponses: ["27"], explication: "Nelson Mandela est resté **27 ans** en prison, de 1962 à 1990. Il est devenu président de l'Afrique du Sud en 1994." },
        { type: "qcm", question: "Que signifie la devise des suffragettes *Deeds, not words* ?", choix: ["Des mots, pas des armes", "La liberté avant tout", "Des actes, pas des mots", "Les femmes d'abord"], reponse: 2, explication: "*Deeds* = des actes : **« Des actes, pas des mots »**. Les suffragettes voulaient agir, et non plus seulement réclamer." },
        { type: "saisie", question: "Traduis : « l'égalité ».", reponses: ["equality"], explication: "**Equality** = l'égalité ; *equal* = égal ; *inequality* = l'inégalité." },
        { type: "qcm", question: "Complète : *Martin Luther King hoped people would be judged by the content of their ___, not by the color of their skin.*", choix: ["character", "heart", "country", "words"], reponse: 0, explication: "La phrase exacte du discours : *not be judged by the color of their skin but by the content of their **character*** (leur personnalité, leurs valeurs)." },
        { type: "saisie", question: "Mets au passif : *The police arrested Rosa Parks.*", reponses: ["Rosa Parks was arrested by the police", "Rosa Parks was arrested"], explication: "Passif au prétérit : **was + participe passé** : *Rosa Parks was arrested (by the police).*" },
        { type: "redaction", question: "Niveau fin de 3e : tu dois présenter à ta classe une personnalité qui s'est battue pour l'égalité (Rosa Parks, Martin Luther King, Nelson Mandela, Emmeline Pankhurst...). Écris ton texte en 120 mots environ : qui, où, quand, contre quoi, comment, et pourquoi cette personne t'inspire.", corrige: `Exemple de réponse (Rosa Parks) :

*Today I'm going to talk about Rosa Parks, an African American woman who is called "the mother of the civil rights movement". In the 1950s, in the South of the USA, there was segregation: black and white people had to use separate schools, restaurants and seats on buses. On 1st December 1955, in Montgomery, Alabama, Rosa Parks refused to give up her seat to a white passenger. She was arrested and fined. Then, black people boycotted the buses for more than a year, led by Martin Luther King. In 1956, the Supreme Court decided that segregation on buses was illegal. I admire her because she was brave: a simple "no" changed history. She shows that ordinary people can fight injustice peacefully.*

Points vérifiés :
- informations exactes : 1er décembre 1955, Montgomery, boycott de plus d'un an, décision de la Cour suprême en 1956 ;
- passif : *is called, was arrested and fined* ; relative : *who is called* ;
- vocabulaire de l'engagement : *segregation, boycotted, fight injustice* ;
- opinion justifiée : *I admire her because...*.` },
      ],
    },
    {
      id: "langages",
      titre: "Langages : l'anglais dans le monde, Shakespeare, médias",
      theme: "Culture",
      cours: `
## Une langue mondiale
L'anglais est la langue officielle ou l'une des langues officielles de nombreux pays sur tous les continents (Royaume-Uni, Irlande, États-Unis, Canada, Australie, Nouvelle-Zélande, Inde, Nigeria, Afrique du Sud, Jamaïque...). C'est aussi la principale langue internationale des sciences, d'Internet, de l'aviation et du commerce.

Il existe de nombreux **accents** : britannique, américain, écossais, irlandais, australien, indien... Ils changent la prononciation, parfois le vocabulaire, mais tout le monde se comprend.

## Anglais britannique et anglais américain
| Royaume-Uni | États-Unis | Français |
|---|---|---|
| flat | apartment | appartement |
| lift | elevator | ascenseur |
| holiday | vacation | vacances |
| autumn | fall | automne |
| biscuit | cookie | biscuit |
| chips | (French) fries | frites |
| crisps | chips | chips |
| underground / tube | subway | métro |
| mobile (phone) | cell phone | téléphone portable |
| rubbish | garbage / trash | déchets, poubelle |
| trousers | pants | pantalon |

L'orthographe change aussi : *colour / color, centre / center, favourite / favorite, travelled / traveled, organise / organize*.

## William Shakespeare (1564-1616)
- Né et mort à **Stratford-upon-Avon** ; il écrit à Londres, où sa troupe joue au **Globe Theatre**.
- Tragédies : *Romeo and Juliet*, *Hamlet*, *Macbeth*, *Othello*, *King Lear* ; comédies : *A Midsummer Night's Dream*, *Much Ado About Nothing*.
- Réplique célèbre de *Hamlet* : *"To be, or not to be: that is the question."*
- Il a fait entrer dans la langue de nombreux mots et expressions encore utilisés.

## Les médias et l'information
- *the news* (les informations, indénombrable : *the news **is** good*), *a headline* (un gros titre), *an article*, *a journalist*, *a reporter*, *a newspaper*, *a podcast* ;
- *social media, a post, to share, to like, a follower, an influencer* ;
- **fake news** (fausses informations) : avant de partager, *check the source*, *compare with other media*, *look at the date*.
- Langage des messages : *LOL* (laughing out loud), *BTW* (by the way), *ASAP* (as soon as possible), *IDK* (I don't know), *BRB* (be right back). À ne jamais utiliser dans une rédaction !

> **À retenir** : l'anglais est une langue mondiale aux nombreux accents. UK / US : *flat / apartment, holiday / vacation, autumn / fall, underground / subway, colour / color*. Shakespeare (1564-1616), Globe Theatre, *To be, or not to be*. *The news* est singulier. Contre les *fake news* : vérifie la source.
`,
      exercices: [
        { type: "saisie", question: "Comment dit-on *flat* (appartement) en anglais américain ?", reponses: ["apartment", "an apartment"], explication: "UK *flat* = US **apartment**." },
        { type: "qcm", question: "Un Américain te dit : *We took the subway.* Qu'a-t-il pris ?", choix: ["un sous-marin", "un taxi", "un tramway", "le métro"], reponse: 3, explication: "US *subway* = UK *underground* ou *tube* = **le métro**." },
        { type: "saisie", question: "Écris le mot *color* à la britannique.", reponses: ["colour"], explication: "L'orthographe britannique garde le **-our** : *colour, favourite, neighbour* (US : *color, favorite, neighbor*)." },
        { type: "vf", question: "William Shakespeare est né à Stratford-upon-Avon.", reponse: true, explication: "Shakespeare est né en **1564** et mort en **1616** à **Stratford-upon-Avon** ; il a écrit et joué à Londres, au Globe Theatre." },
        { type: "qcm", question: "De quelle pièce vient la réplique *To be, or not to be: that is the question* ?", choix: ["Romeo and Juliet", "Hamlet", "Macbeth", "Othello"], reponse: 1, explication: "C'est le monologue du prince **Hamlet**, qui s'interroge sur la vie et la mort." },
        { type: "qcm", question: "*The news ___ really bad today.*", choix: ["are", "were", "is", "have"], reponse: 2, explication: "**News** est **indénombrable** et se construit au singulier malgré son -s : *The news is bad.*" },
        { type: "saisie", question: "Que signifie l'abréviation *ASAP* ? (en anglais)", reponses: ["as soon as possible"], explication: "*ASAP* = **as soon as possible** (dès que possible). C'est du langage familier : à éviter dans une rédaction." },
        { type: "qcm", question: "Quelle attitude est la plus sûre face à une information surprenante vue sur un réseau social ?", choix: ["Vérifier la source, la date et comparer avec d'autres médias.", "La partager tout de suite pour prévenir ses amis.", "La croire si elle a beaucoup de *likes*.", "La croire si une célébrité la partage."], reponse: 0, explication: "Pour repérer une *fake news*, on **vérifie la source**, la **date** et on **compare** avec des médias fiables. Le nombre de *likes* ne prouve rien." },
        { type: "saisie", question: "Comment dit-on « automne » en anglais américain ?", reponses: ["fall", "the fall"], explication: "UK *autumn* = US **fall** (les feuilles *tombent*)." },
        { type: "redaction", question: "Niveau fin de 3e : « Is it important to learn English? » Réponds en 100 à 120 mots en donnant au moins trois arguments, des exemples précis et ton avis personnel.", corrige: `Exemple de réponse :

*In my opinion, learning English is essential today.*

*First of all, English is spoken all over the world, from the USA to India and Australia. When you travel, it helps you to communicate with people from many different countries. Secondly, it is the language of the Internet, science and international business: a lot of websites, videos and video games are in English, so you can understand them without subtitles. Moreover, many jobs require English, for example in tourism, research or computing.*

*However, English shouldn't replace other languages: learning Spanish or German is also useful and interesting. To sum up, I think English opens doors, and that's why I want to improve mine by watching series in English.*

Points vérifiés :
- trois arguments (voyage, Internet et sciences, travail) avec exemples ;
- connecteurs : *first of all, secondly, moreover, however, to sum up, that's why* ;
- passif : *English is spoken* ;
- avis personnel et nuance ;
- gérondif après préposition : *by watching*.` },
      ],
    },
    {
      id: "comprendre-un-texte",
      titre: "Comprendre un texte écrit (niveau A2-B1)",
      theme: "Méthodologie",
      cours: `
## Ce qu'on attend de toi en fin de 3e
En fin de 3e, en anglais LV1, tu dois atteindre au moins le niveau **A2** du Cadre européen (CECRL) et viser le **B1** : comprendre l'essentiel d'un texte sur un sujet familier (article, récit, blog, lettre), repérer les **informations importantes**, comprendre l'**opinion** de l'auteur et les **sentiments** des personnages.

Au brevet, l'anglais n'a pas d'épreuve écrite finale pour les élèves de collège (les épreuves écrites portent sur le français, les mathématiques, l'histoire-géographie-EMC et les sciences). En revanche, ta **moyenne annuelle de 3e** en anglais compte dans le **contrôle continu** (40 % de la note finale, les épreuves finales comptant pour 60 %). À l'oral du brevet (la soutenance d'un projet), tu peux aussi présenter une partie de ton exposé en anglais.

## La méthode en 5 étapes
1. **Observe le document** : titre, source (journal, blog, roman), date, illustration. Formule une hypothèse sur le sujet.
2. **Lis les questions** avant le texte : elles te disent quoi chercher.
3. **Première lecture globale** (*skimming*) : *Who? What? Where? When? Why?* Ne t'arrête pas sur les mots inconnus.
4. **Lecture ciblée** (*scanning*) : cherche les informations précises (noms, dates, chiffres, lieux).
5. **Lecture fine** : les connecteurs (*but, however, so, because*), les mots qui expriment les sentiments et l'opinion (*unfortunately, luckily, I was shocked, amazing, awful*).

## Deviner le sens d'un mot inconnu
- **mots transparents** : *a decision, to protect, the environment, a community* ;
- **formation des mots** : *un-, -less, -ful, -er* (*unforgettable* = inoubliable) ;
- **contexte** : *She was so **exhausted** after the marathon that she slept for twelve hours* → *exhausted* = épuisée ;
- **famille de mots** : *to grow, growth* (croissance).

## Répondre aux questions
- **Vrai / faux** : justifie toujours par une **citation courte** du texte, entre guillemets.
- **Questions en français** : réponds avec tes mots, en phrases complètes, sans traduire tout le texte.
- **Questions en anglais** : reprends les mots de la question pour construire ta réponse, mais ne recopie pas des lignes entières.
- **Inférence** : certaines réponses ne sont pas écrites mot pour mot : il faut les **déduire** (ex. : *She didn't say a word and left the room, slamming the door* → elle est en colère).

>! Texte : *Tom had been waiting for two hours. When the bus finally arrived, he didn't say a word.* Question : comment se sent Tom ? → Il est sans doute agacé ou épuisé : il a attendu deux heures (*had been waiting for two hours*) et il ne dit rien (*didn't say a word*).

## Rendre compte en français
On peut te demander de **résumer** un texte en français : qui, quoi, où, quand, pourquoi, et la conclusion. Fais des phrases simples, garde les informations essentielles, ne traduis pas mot à mot.

> **À retenir** : observe, lis les questions, lis le texte en entier puis en détail. Devine les mots inconnus grâce aux mots transparents, à leur formation et au contexte. Justifie avec une citation courte. Déduis les sentiments à partir des actions et des connecteurs.
`,
      textes: {
        kofi: `**I never thought I'd love the countryside** — a blog post by Kofi, 15, London (texte d'entraînement)

Last July, my parents decided to spend the summer in a small village in North Wales, where my mum grew up. I was furious. I had planned to spend every day with my friends in London, and the village didn't even have a cinema! For the first few days, I stayed in my room and hardly spoke to anyone.

Then, one morning, our neighbour, Mr Hughes, knocked on the door. He was seventy-two and he needed help on his farm because his son had broken his leg. My mum volunteered me before I could say no. I had never touched a sheep in my life, but by the end of the week I was feeding forty of them every morning.

Mr Hughes taught me a few words of Welsh, the language my grandmother used to speak. In the evenings, he told me stories about the village, which hasn't changed much since the 1950s. When we left at the end of August, I was almost sad.

Now I'm back in London, but I call Mr Hughes every Sunday. Next summer, I'm going to go back to the farm, and this time, it's my idea!`,
      },
      exercices: [
        { type: "qcm", question: "Que faut-il faire lorsqu'on rencontre un mot inconnu à la première lecture ?", choix: ["S'arrêter et chercher chaque mot dans le dictionnaire.", "Sauter le paragraphe entier.", "Abandonner l'exercice.", "Continuer la lecture et essayer de deviner le sens grâce au contexte."], reponse: 3, explication: "À la première lecture, on cherche le **sens général** ; le **contexte**, les mots transparents et la formation du mot permettent souvent de deviner." },
        { type: "qcm", question: "*The road was so slippery that three cars skidded into the ditch.* Que signifie probablement *slippery* ?", choix: ["étroite", "glissante", "fermée", "neuve"], reponse: 1, explication: "Le contexte (trois voitures ont dérapé, *skidded*) montre que la route était **glissante**." },
        { type: "saisie", question: "Que signifie *unforgettable* ? (décompose le mot)", reponses: ["inoubliable"], explication: "*un-* (contraire) + *forget* (oublier) + *-able* (qu'on peut) = **inoubliable**." },
        { type: "vf", question: "Lis : *Although the trip was expensive, Lily said it was worth every penny.* Lily regrette d'avoir fait ce voyage.", reponse: false, explication: "*It was worth every penny* = ça valait chaque centime. Malgré le prix (*although... expensive*), Lily est **contente** de son voyage." },
        { type: "qcm", question: "Lis : *She slammed the door and went upstairs without a word.* Comment se sent-elle ?", choix: ["heureuse", "fatiguée mais contente", "en colère", "reconnaissante"], reponse: 2, explication: "C'est une **inférence** : claquer la porte (*slammed the door*) et partir sans un mot montrent qu'elle est **en colère**." },
        { type: "redaction", question: "Lis ce texte d'entraînement, puis réponds aux questions.\n\n*My name is Aisha and I live in Leicester, in the Midlands. My parents came to England from Gujarat, in India, in 1995. At home, we speak Gujarati and English, and I'm learning French at school. Last year, my class went on an exchange to Lyon. At first, I was really nervous because I had never stayed with a French family. But my host family was so kind! They taught me to cook a real quiche and I made them an Indian curry. Since then, I've been texting Chloé, my French partner, every week. Next autumn, she's going to visit Leicester for Diwali, the Hindu festival of lights. I can't wait to show her my city.*\n\n1. D'où viennent les parents d'Aisha et quand sont-ils arrivés en Angleterre ?\n2. Quelles langues Aisha parle-t-elle ou apprend-elle ?\n3. Pourquoi était-elle inquiète avant l'échange ? Cite le texte.\n4. Vrai ou faux : Aisha et Chloé ne sont plus en contact. Justifie.\n5. À quelle saison et pour quelle occasion Chloé va-t-elle venir à Leicester ?\n6. Relève une phrase au present perfect et explique pourquoi ce temps est employé.", corrige: `Corrigé :

1. Ses parents viennent du **Gujarat, en Inde** ; ils sont arrivés en Angleterre **en 1995**.
2. Elle parle le **gujarati** et l'**anglais** à la maison, et elle **apprend le français** au collège.
3. Elle n'avait **jamais logé** dans une famille française : *"I had never stayed with a French family"*.
4. **Faux** : elles s'écrivent toutes les semaines depuis l'échange : *"Since then, I've been texting Chloé... every week"*.
5. Elle viendra **l'automne prochain** (*next autumn*) pour **Diwali**, la fête hindoue des lumières (*she's going to visit* : projet décidé).
6. *"Since then, I've been texting Chloé every week"* : present perfect en *be + -ing* avec **since**, car l'action a commencé dans le passé (après l'échange) et **continue aujourd'hui**.

Méthode : réponses en phrases complètes, justifiées par des citations courtes ; pour la question 4, on s'appuie sur *since then* et *every week*.` },
        { type: "saisie", question: "Lis : *Despite the heavy rain, thousands of fans waited outside the stadium for hours.* Par quel mot français traduirais-tu *despite* ?", reponses: ["malgré", "en dépit de"], explication: "*Despite* + nom = **malgré** : malgré la forte pluie, des milliers de fans ont attendu." },
        { type: "qcm", question: "Lis : *Luckily, nobody was injured in the fire, but the building was completely destroyed.* Quelle affirmation est juste ?", choix: ["Personne n'a été blessé, mais le bâtiment est détruit.", "Il y a eu des blessés mais le bâtiment est intact.", "Le bâtiment a été en partie réparé.", "Les pompiers sont arrivés trop tard pour sauver les habitants."], reponse: 0, explication: "*Luckily, nobody was injured* = heureusement, personne n'a été blessé ; *but the building was completely destroyed* = **mais** le bâtiment a été entièrement détruit." },
        { type: "redaction", question: "Niveau fin de 3e : rends compte en français, en 5 ou 6 phrases, de ce texte d'entraînement.\n\n*Fourteen-year-old Ben Carter from Bristol has collected more than 2,000 old phones in two years. \"I read an article about electronic waste and I was shocked,\" he explains. \"Most people keep their old phones in a drawer, but they contain precious metals that can be recycled.\" Ben set up collection boxes in his school and in local shops. The phones are sent to a recycling company, and the money is given to a charity that plants trees. Ben's head teacher is very proud: \"He has shown that one teenager can make a difference.\"* (texte et chiffres fictifs)", corrige: `Exemple de compte rendu :

Ben Carter, un adolescent de 14 ans qui vit à Bristol, a récupéré plus de 2 000 vieux téléphones en deux ans. Il a eu cette idée après avoir lu un article sur les déchets électroniques, qui l'a choqué. Il explique que la plupart des gens gardent leurs anciens téléphones dans un tiroir alors qu'ils contiennent des métaux précieux recyclables. Il a installé des boîtes de collecte dans son collège et dans des magasins de son quartier. Les téléphones sont envoyés à une entreprise de recyclage et l'argent est reversé à une association qui plante des arbres. Son chef d'établissement est fier de lui : selon lui, Ben a prouvé qu'un seul adolescent peut changer les choses.

Méthode :
- on répond à *qui, quoi, où, comment, pourquoi* et on donne la conclusion ;
- on ne traduit pas mot à mot : on reformule ;
- on a compris *set up* (installer, créer), *a drawer* (un tiroir, grâce au contexte), *charity* (association caritative) ;
- les passifs (*are sent, is given*) sont rendus naturellement en français.` },
        { type: "qcm", texte: "kofi", question: "Quelle est l'idée principale du texte ?", choix: ["Kofi explique pourquoi Londres est plus agréable que la campagne.", "Kofi raconte ses vacances à Londres avec ses amis.", "Kofi découvre qu'il peut aimer un été qu'il ne voulait pas passer à la campagne.", "Kofi a décidé de devenir agriculteur après le collège."], reponse: 2, explication: "Le titre (*I never thought I'd love the countryside*) et la fin du texte (*I was almost sad*, *this time, it's my idea!*) montrent un **changement** : Kofi ne voulait pas partir, puis il a aimé son séjour. Il ne dit pas qu'il veut devenir agriculteur, et l'été ne se passe pas à Londres." },
        { type: "vf", texte: "kofi", question: "Au début de l'été, Kofi était content de partir au pays de Galles.", reponse: false, explication: "Faux : *\"I was furious\"* (j'étais furieux). Il avait d'autres projets (*I had planned to spend every day with my friends*) et il restait dans sa chambre sans parler à personne (*hardly spoke to anyone*)." },
        { type: "qcm", texte: "kofi", question: "*Why did Mr Hughes need help on his farm?*", choix: ["Because he had bought forty new sheep.", "Because his son had broken his leg.", "Because he was too old to walk.", "Because Kofi's mother wanted to sell him the farm."], reponse: 1, explication: "Le texte le dit : *he needed help on his farm **because his son had broken his leg*** (past perfect : la jambe était cassée avant sa visite). Son âge (72 ans) est cité, mais ce n'est pas la raison donnée." },
        { type: "saisie", texte: "kofi", question: "À la fin de la première semaine, combien de moutons Kofi nourrissait-il chaque matin ? (en chiffres)", reponses: ["40", "40 sheep"], explication: "*By the end of the week I was feeding **forty** of them every morning* : **40** moutons. C'est une lecture ciblée (*scanning*) : on cherche un nombre écrit en lettres." },
        { type: "qcm", texte: "kofi", question: "*My mum volunteered me before I could say no.* Que comprend-on ?", choix: ["Kofi a lui-même proposé son aide à Mr Hughes.", "Mr Hughes a refusé l'aide de Kofi.", "La mère de Kofi lui a interdit d'aider le voisin.", "La mère de Kofi a proposé son aide à sa place, sans lui laisser le temps de refuser."], reponse: 3, explication: "*To volunteer* = se porter volontaire ; ici, c'est la mère qui « porte volontaire » son fils, *before I could say no* (avant qu'il puisse dire non). C'est une **inférence** : Kofi n'a pas choisi, au départ." },
        { type: "redaction", texte: "kofi", question: "Niveau fin de 3e : réponds **en anglais**, en 3 ou 4 phrases complètes : *How did Kofi's feelings change during the summer? Why?* Justifie avec deux citations courtes du texte.", corrige: `Exemple de réponse :

*At the beginning of the summer, Kofi was angry and bored: he says "I was furious" and he stayed in his room. Then he started helping Mr Hughes on his farm, and he learnt new things: he fed the sheep and learnt a few words of Welsh. At the end, he was "almost sad" to leave, and he wants to go back next summer because it is now his own idea.*

Points vérifiés :
- l'évolution est décrite dans l'ordre : *at the beginning, then, at the end* ;
- deux citations courtes entre guillemets (*"I was furious"*, *"almost sad"*), sans recopier de lignes entières ;
- la cause du changement est expliquée (l'aide à Mr Hughes, les découvertes) ;
- temps justes : prétérit pour le récit, présent pour la situation actuelle (*he wants*).` },
      ],
    },
    {
      id: "rediger-en-anglais",
      titre: "Rédiger en anglais : e-mail, lettre, récit, argumentation",
      theme: "Méthodologie",
      cours: `
## Ce qu'on attend de toi en fin de 3e
Au niveau **A2-B1**, tu dois savoir écrire un texte **articulé** (100 à 150 mots) : raconter une expérience, décrire, exprimer et **justifier** une opinion, écrire un e-mail ou une lettre en respectant ses codes, imaginer une suite de récit.

## La méthode
1. **Analyse la consigne** : type de texte, destinataire, registre (familier ou formel), longueur, temps à utiliser, éléments obligatoires. Souligne chaque point à traiter.
2. **Cherche tes idées** directement en anglais, sous forme de liste.
3. **Fais un plan** : introduction, 2 ou 3 paragraphes, conclusion.
4. **Rédige** avec des phrases simples et justes, reliées par des **connecteurs**. Mieux vaut une phrase simple correcte qu'une phrase compliquée traduite du français.
5. **Relis-toi** avec la grille ci-dessous.

## Les codes des différents textes
| Type | Début | Fin | Registre |
|---|---|---|---|
| e-mail à un ami | *Hi Sam, / Dear Sam,* | *Write back soon! / Love, / Take care,* | familier, contractions possibles |
| lettre formelle (destinataire inconnu) | *Dear Sir or Madam,* | *Yours faithfully,* | formel, pas de contractions |
| lettre formelle (nom connu) | *Dear Mrs Brown,* | *Yours sincerely,* | formel |
| e-mail poli (famille d'accueil, professeur) | *Dear Mr and Mrs Campbell,* | *Best wishes, / Kind regards,* | poli, mais moins formel qu'une lettre |
| journal intime | date, *Dear Diary,* | — | personnel, sentiments |
| article | un titre accrocheur | une conclusion ou une question | neutre |
| récit | situation initiale (*It was a cold night...*) | fin, sentiment final | prétérit, past continuous |

### Formules utiles
- Commencer : *I'm writing to tell you about... / I'm writing to apply for... / Thank you for your letter.*
- Raconter : *First, ... Then, ... Suddenly, ... After that, ... In the end, ...*
- Donner son avis : *In my opinion, ... I think that... because... On the one hand, ... on the other hand, ...*
- Exprimer un sentiment : *I was thrilled / disappointed / relieved / embarrassed.*
- Conclure : *To sum up, ... All in all, ... I can't wait to... / I look forward to hearing from you.*

## Grille de relecture
- **verbes** : -s à la 3e personne (*she likes*), prétérits irréguliers (*went, saw, thought*), *did* + base verbale ;
- **temps** : prétérit avec une date, present perfect avec *for / since / ever* ; présent après *when / if* ;
- **ordre des mots** : adjectif **avant** le nom et invariable (*two interesting books*) ; adverbe de fréquence avant le verbe ;
- **pièges** : *people are* (pluriel), *the news is*, *information* et *advice* sans -s ; *I agree* (pas *I am agree*) ;
- **majuscules** : *I*, jours, mois, nationalités, langues (*on Monday, in May, French*) ;
- **la consigne** : tous les points traités, nombre de mots respecté.

## Enrichir son texte
| Au lieu de... | Écris plutôt... |
|---|---|
| *very good* | *amazing, fantastic, brilliant* |
| *very bad* | *awful, terrible* |
| *very big* | *huge* |
| *very tired* | *exhausted* |
| *I like* | *I'm keen on, I really enjoy, I'm fond of* |
| *and, and, and* | *moreover, besides, as well as* |

> **À retenir** : consigne analysée, idées en anglais, plan, connecteurs, relecture avec la grille. Respecte les codes : *Dear Sir or Madam... Yours faithfully* ; *Hi Sam... Write back soon*. Une phrase simple et juste vaut mieux qu'une phrase complexe fausse.
`,
      exercices: [
        { type: "qcm", question: "Tu écris pour postuler à un stage, sans connaître le nom du destinataire. Quelle formule de fin choisis-tu ?", choix: ["Love,", "See you!", "Cheers,", "Yours faithfully,"], reponse: 3, explication: "Lettre formelle commençant par *Dear Sir or Madam* → **Yours faithfully**. *Love, See you, Cheers* sont familiers." },
        { type: "saisie", question: "Corrige l'erreur : *The people is very friendly.*", reponses: ["The people are very friendly", "People are very friendly"], explication: "**People** est un pluriel : *people are*." },
        { type: "saisie", question: "Corrige l'erreur : *She gave me some good advices.*", reponses: ["She gave me some good advice", "She gave me good advice", "She gave me a good piece of advice", "She gave me some good pieces of advice"], explication: "**Advice** est indénombrable : pas de -s. *Some good advice* ou *a piece of advice*." },
        { type: "saisie", question: "Remplace *very tired* par un seul adjectif plus fort.", reponses: ["exhausted", "worn out", "shattered"], explication: "*Very tired* → **exhausted** (épuisé). On ne dit pas *very exhausted* : l'adjectif est déjà fort." },
        { type: "vf", question: "Dans une lettre formelle, on évite les contractions comme *I'm* ou *don't*.", reponse: true, explication: "Le registre formel utilise les formes pleines : *I am writing to..., I do not...*" },
        { type: "saisie", question: "Corrige l'erreur : *We visited London on july.*", reponses: ["We visited London in July"], explication: "Les **mois** prennent une majuscule et on dit **in July** (*on* s'utilise avec un jour : *on Monday, on 4th July*)." },
        { type: "qcm", question: "Quel début convient le mieux à un récit ?", choix: ["Dear Sir or Madam,", "It was a dark and stormy night when I heard a knock at the door.", "To sum up, I think that...", "I look forward to hearing from you."], reponse: 1, explication: "Un récit commence par une **situation initiale** qui pose le décor (prétérit, past continuous). Les autres formules servent à une lettre ou à une conclusion." },
        { type: "redaction", question: "Niveau fin de 3e : tu as passé une semaine dans ta famille d'accueil à Édimbourg lors d'un voyage scolaire. Écris un e-mail de remerciement de 120 mots environ à ta famille d'accueil : remercie-la, raconte deux moments que tu as préférés, dis ce que tu as appris et invite un membre de la famille en France.", corrige: `Exemple de réponse :

*Dear Mr and Mrs Campbell,*

*I'm back in Nantes and I wanted to thank you for the wonderful week I spent with you in Edinburgh. You were so kind and patient with me!*

*My favourite moment was our walk up Arthur's Seat: the view of the city was breathtaking, even though it was windy and cold. I also loved the evening when Fiona taught me a Scottish dance. I laughed so much!*

*Thanks to you, I have learnt a lot of new words and I'm not afraid of speaking English any more. I even tasted haggis, and I liked it!*

*Would Fiona like to come and stay with us next spring? We could visit the Château des ducs de Bretagne together.*

*I look forward to hearing from you.*

*Best wishes,*
*Léo*

Points vérifiés :
- codes de l'e-mail poli : *Dear Mr and Mrs Campbell* ... *Best wishes* ;
- tous les éléments de la consigne : remerciement, deux souvenirs, ce que j'ai appris, invitation ;
- temps variés : prétérit (*spent, taught*), present perfect (*I have learnt*), conditionnel (*We could visit*) ;
- détails culturels exacts : Arthur's Seat (colline d'Édimbourg), le haggis (plat écossais) ;
- connecteurs : *even though, also, thanks to*.` },
        { type: "redaction", question: "Niveau fin de 3e : imagine la suite de ce début de récit (120 à 150 mots) : *When Maya opened the old wooden box she had found in her grandmother's attic, she couldn't believe her eyes...*", corrige: `Exemple de réponse :

*When Maya opened the old wooden box she had found in her grandmother's attic, she couldn't believe her eyes. Inside, there were dozens of letters tied with a red ribbon, and an old black-and-white photo of a young soldier. On the back of the photo, someone had written: "London, 1944. I will come back, I promise."*

*Maya sat down on the dusty floor and started reading. The letters were written by a British soldier called Thomas to a French girl... her great-grandmother! They had met in Normandy, but the war had separated them.*

*Suddenly, Maya heard footsteps. Her grandmother was standing at the door, smiling sadly. "I see you have found Thomas," she whispered. "It's time I told you the whole story."*

Points vérifiés :
- cohérence avec le début (la boîte, le grenier, la grand-mère) ;
- temps du récit : prétérit (*sat, started, heard*), past continuous (*was standing*), past perfect (*had written, had met, had separated*) ;
- passif : *were written by* ; dialogue au discours direct ;
- connecteurs et rythme : *inside, suddenly* ; fin ouverte qui donne envie de lire la suite ;
- vocabulaire précis : *attic, ribbon, dusty, footsteps, whispered*.` },
      ],
    },
    {
      id: "parler-poser-questions",
      titre: "Prendre la parole : poser des questions, réagir, présenter",
      theme: "Méthodologie",
      cours: `
## Ce qu'on attend de toi à l'oral en fin de 3e
À l'oral, tu dois savoir **prendre la parole en continu** (présenter un sujet, raconter, donner ton avis pendant 1 à 2 minutes) et **dialoguer** (poser des questions, réagir, demander de l'aide quand tu ne comprends pas).

## Poser une question : l'ordre des mots
La règle d'or : **mot interrogatif + auxiliaire + sujet + verbe**.

| Mot interrogatif | Sens | Exemple |
|---|---|---|
| **What** | que, quoi, quel | *What do you do at the weekend?* |
| **Where** | où | *Where did you go last summer?* |
| **When** | quand | *When does the film start?* |
| **Why** | pourquoi | *Why are you laughing?* |
| **Who** | qui | *Who did you meet?* |
| **Whose** | à qui | *Whose phone is this?* |
| **Which** | lequel, quel (choix limité) | *Which one do you prefer?* |
| **How** | comment | *How do you go to school?* |
| **How long / How often / How much / How many** | combien de temps / à quelle fréquence / combien (indénombrable / dénombrable) | *How often do you play tennis? How many brothers have you got?* |

Si la phrase n'a ni *be*, ni auxiliaire *have* (present perfect), ni modal, on ajoute **do / does / did** :
>! « Où habite ta cousine ? » → *Where **does** your cousin **live**?* (et non *Where lives your cousin?*)
>!
>! « Qu'as-tu fait hier ? » → *What **did** you **do** yesterday?*

Attention : quand **Who** ou **What** est le **sujet**, pas de *do* : *Who **broke** the window?* (qui a cassé ?) mais *Who **did** you **see**?* (qui as-tu vu ?).

## Réagir et faire vivre un dialogue
- Montrer qu'on écoute : *Really? / Oh, I see. / That's interesting! / Me too. / Me neither.*
- Demander de répéter : *Sorry, could you repeat, please? / Could you speak more slowly, please? / What does "..." mean? / How do you say "..." in English?*
- Gagner du temps : *Well... / Let me think... / Actually...* (plutôt que « euh » ou un mot français)
- Les **reprises courtes** : *Do you like rap? — Yes, I do. / No, I don't.* *Can you swim? — Yes, I can.* *I love horror films. — So do I!* (moi aussi) / *I don't like tea. — Neither do I.* (moi non plus)

## Présenter un sujet (prise de parole en continu)
1. **Annonce** le sujet : *Today I'm going to talk about... / I'd like to present...*
2. **Organise** : *First, ... Then, ... Finally, ...*
3. **Illustre** : *For example, ... / As you can see in this picture, ...*
4. **Donne ton avis** : *In my opinion, ... / What I like is...*
5. **Conclus** : *To conclude, ... / Thank you for listening. Do you have any questions?*

Conseils : prépare des **notes avec des mots-clés** (jamais un texte entier à lire), regarde ton public, parle lentement, soigne la prononciation des mots-clés.

## Décrire une image
*In the foreground* (au premier plan), *in the background* (à l'arrière-plan), *on the left / on the right*, *in the middle*. *It seems that... / It looks like... / Maybe...* Au présent en be + -ing pour ce qui se passe : *Two boys **are playing** football.*

> **À retenir** : question = **mot interrogatif + auxiliaire (do / does / did, be, have, modal) + sujet + verbe**. Pas de *do* quand *who / what* est sujet. Pour dialoguer : *Could you repeat, please?*, *So do I / Neither do I*, réponses courtes (*Yes, I do*). Pour présenter : annonce, plan, exemples, avis, conclusion, avec des notes et non un texte lu.
`,
      exercices: [
        { type: "qcm", question: "« Où habite ton cousin ? »", choix: ["Where lives your cousin?", "Where your cousin lives?", "Where does your cousin live?", "Where does your cousin lives?"], reponse: 2, explication: "Mot interrogatif + **does** + sujet + **base verbale** (sans -s, c'est *does* qui le porte) : *Where does your cousin live?*" },
        { type: "saisie", question: "Pose la question qui correspond à la réponse soulignée : *I went to **Dublin** last summer.* (commence par *Where*)", reponses: ["Where did you go last summer", "Where did you go"], explication: "Au prétérit, on ajoute **did** et le verbe revient à la base : *Where did you go last summer?*" },
        { type: "qcm", question: "*___ do you go to the cinema? — About twice a month.*", choix: ["How much", "How long", "How often", "How many"], reponse: 2, explication: "*Twice a month* répond à une question de **fréquence** → **How often**. *How long* = combien de temps (durée), *How much / how many* = combien (quantité)." },
        { type: "qcm", question: "*Who ___ the last cookie?* (Qui a mangé le dernier cookie ?)", choix: ["did eat", "ate", "did ate", "eated"], reponse: 1, explication: "*Who* est ici le **sujet** de la phrase : pas d'auxiliaire *did*, le verbe est directement au prétérit : *Who ate the last cookie?* (*eat – ate – eaten*)." },
        { type: "saisie", question: "Tu n'as pas compris ton interlocuteur. Demande-lui poliment de répéter (commence par *Could*).", reponses: ["Could you repeat, please", "Could you repeat please", "Could you repeat that, please", "Could you repeat that please", "Could you repeat", "Could you repeat that", "Could you say that again, please", "Could you say that again", "Could you say it again, please", "Could you say it again", "Could you please repeat", "Could you please repeat that", "Could you repeat it, please", "Could you repeat it"], explication: "La formule polie : *Could you repeat, please?* (ou *Could you say that again?*). C'est une phrase indispensable à l'oral." },
        { type: "qcm", question: "*I really like pizza.* — « Moi aussi ! »", choix: ["Neither do I!", "So do I!", "So am I!", "Me neither!"], reponse: 1, explication: "Pour dire « moi aussi » après une phrase affirmative au présent simple : **So do I** (ou *Me too*). *Neither do I / Me neither* = moi non plus (après une négation) ; *So am I* reprendrait le verbe *be*." },
        { type: "vf", question: "*Do you like football? — Yes, I like.* est une réponse correcte.", reponse: false, explication: "La réponse courte reprend l'**auxiliaire** de la question : *Yes, I do.* (ou *Yes, I like it.*) ; *Yes, I like* est incorrect." },
        { type: "saisie", question: "Traduis la question : « Comment dit-on *tiroir* en anglais ? » (garde le mot français *tiroir* dans ta phrase)", reponses: ["How do you say tiroir in English", "How do you say 'tiroir' in English", "What is tiroir in English", "What's tiroir in English", "What is 'tiroir' in English"], explication: "*How do you say ... in English?* = Comment dit-on ... en anglais ? (réponse : *a drawer*)." },
        { type: "redaction", question: "Niveau fin de 3e : prépare une présentation orale de 1 minute 30 (environ 150 mots) sur un lieu du monde anglophone que tu aimerais visiter. Rédige ce que tu dirais, en respectant les cinq étapes du cours, puis indique les mots-clés que tu garderais sur ta fiche.", corrige: `Exemple de réponse :

*Today I'm going to talk about a place I would love to visit: New York City.*

*First, let me tell you where it is. New York is on the east coast of the USA, and it is the biggest city in the country. It is often called "the Big Apple".*

*Then, there are many things to see. For example, you can take a ferry to the Statue of Liberty, walk in Central Park or go to the top of the Empire State Building. As you can see in this picture, the view is amazing!*

*In my opinion, New York is fascinating because people from all over the world live there: you can hear hundreds of languages in the streets. What I like most is its energy.*

*To conclude, I hope I will go there one day. Thank you for listening. Do you have any questions?*

Fiche de mots-clés : *east coast – biggest city – Big Apple / Statue of Liberty – Central Park – Empire State Building / many languages – energy / hope – one day*.

Points vérifiés :
- les cinq étapes : annonce, organisation (*first, then*), exemples, avis justifié (*because*), conclusion avec ouverture aux questions ;
- présent pour décrire, *would love to* pour le souhait, *will* après *I hope* ;
- passif : *It is often called* ;
- la fiche contient des mots-clés, pas des phrases : on ne lit pas son texte.` },
      ],
    },
  ],
};
