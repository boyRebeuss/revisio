export default {
  chapitres: [
    {
      id: "be-have-got",
      titre: "Be et have got",
      theme: "Grammaire",
      cours: `
## Le verbe be (être)
**Be** est le verbe le plus utilisé en anglais. Il se conjugue différemment selon le sujet.

| Forme pleine | Forme contractée | Négation |
|---|---|---|
| I am | I'm | I'm not |
| you are | you're | you aren't / you're not |
| he / she / it is | he's / she's / it's | he isn't / he's not |
| we are | we're | we aren't |
| they are | they're | they aren't |

**Question** : on inverse le sujet et le verbe : *Are you French? Is she your sister?*

**Réponses courtes** : *Yes, I am. / No, I'm not. — Yes, she is. / No, she isn't.*
Attention : on ne contracte jamais une réponse courte affirmative (*Yes, she is*, jamais *Yes, she's*).

### Be là où le français utilise « avoir »
- l'âge : *I am twelve (years old).* = J'ai douze ans.
- les sensations : *I'm hungry* (j'ai faim), *I'm thirsty* (j'ai soif), *I'm cold* (j'ai froid), *I'm hot* (j'ai chaud), *I'm afraid* (j'ai peur), *You're right* (tu as raison).

## Have got (avoir, posséder)
**Have got** exprime la possession, les liens de parenté et la description physique (surtout en anglais britannique).

| Affirmation | Négation | Question |
|---|---|---|
| I have got / I've got | I haven't got | Have I got...? |
| he / she / it has got / he's got | he hasn't got | Has he got...? |
| we / you / they have got / they've got | they haven't got | Have they got...? |

>! *She has got blue eyes and long hair. — Have you got a pet? Yes, I have. / No, I haven't.*

En anglais américain, on dit plutôt *I have a dog / Do you have a dog? / I don't have a dog.*

> **À retenir** : be → *am / is / are* ; have got → *has got* avec he, she, it. L'âge et les sensations se disent avec **be** : *I'm 12, I'm hungry*. Dans les réponses courtes, on reprend l'auxiliaire : *Yes, I am / No, he hasn't.*
`,
      exercices: [
        { type: "saisie", question: "Complète avec be : *My brother ___ fourteen years old.*", reponses: ["is", "'s"], explication: "Avec he / she / it (ici *my brother*), be se conjugue **is**. Et on dit *he is 14* : l'âge se dit avec be, pas avec have." },
        { type: "qcm", question: "Comment dit-on « J'ai froid » ?", choix: ["I have cold", "I am cold", "I've got cold", "I has cold"], reponse: 1, explication: "Les sensations (froid, chaud, faim, soif, peur) se disent avec **be** : *I am cold* ou *I'm cold*." },
        { type: "saisie", question: "Mets à la forme négative : *They are from Spain.*", reponses: ["They are not from Spain", "They aren't from Spain", "They're not from Spain"], explication: "On ajoute **not** après be : *They are not / aren't / They're not from Spain.*" },
        { type: "vf", question: "La phrase *He have got a dog.* est correcte.", reponse: false, explication: "Avec he / she / it, on utilise **has got** : *He has got a dog* ou *He's got a dog*." },
        { type: "qcm", question: "*Is your sister at school?* — *Yes, ___.*", choix: ["she's", "she is", "she does", "she has"], reponse: 1, explication: "La réponse courte reprend l'auxiliaire de la question (*is*) et ne se contracte jamais à l'affirmative : *Yes, she is.*" },
        { type: "saisie", question: "Pose la question avec have got : *you / a bike*", reponses: ["Have you got a bike", "Have you got a bicycle"], explication: "On inverse **have** et le sujet ; *got* reste après le sujet : *Have you got a bike?*" },
        { type: "saisie", question: "Complète la réponse courte : *Has Tom got a brother?* — *No, he ___.*", reponses: ["hasn't", "has not"], explication: "On reprend l'auxiliaire **has** à la forme négative : *No, he hasn't.*" },
        { type: "saisie", question: "Traduis : « Elle a les yeux verts. »", reponses: ["She has got green eyes", "She's got green eyes", "She has green eyes"], explication: "La description physique se fait avec **have got** (ou *have*) : *She has got / She's got green eyes.* L'adjectif de couleur est placé avant le nom et ne prend jamais de -s." },
        { type: "redaction", question: "Présente-toi en 5 à 6 phrases en anglais : ton nom, ton âge, ta nationalité, ton apparence physique, ta famille et tes animaux. Utilise **be** et **have got** au moins deux fois chacun.", corrige: `Exemple de réponse :

*Hi! My name is Léa and I am twelve years old. I'm French and I live in Lyon. I've got long brown hair and blue eyes. I have got one brother, but I haven't got a sister. My brother is nine. We've got a cat called Mimi: she is black and very cute!*

Points vérifiés :
- **be** pour le nom, l'âge, la nationalité : *I am twelve*, *I'm French* ;
- **have got** pour l'apparence, la famille, les animaux : *I've got long brown hair* ;
- l'adjectif avant le nom : *brown hair*, *blue eyes* (sans -s) ;
- une négation : *I haven't got a sister*.` },
      ],
    },
    {
      id: "present-simple-continu",
      titre: "Présent simple, présent en be + -ing et adverbes de fréquence",
      theme: "Grammaire",
      cours: `
## Le présent simple : habitudes et vérités générales
On l'utilise pour ce qui est habituel, répété ou toujours vrai : *I go to school by bus. Water boils at 100°C.*

| Affirmation | Négation | Question |
|---|---|---|
| I / you / we / they play | I don't play (do not) | Do you play? |
| he / she / it play**s** | he doesn't play (does not) | Does he play? |

### Le -s de la 3e personne du singulier
- cas général : *play → plays, like → likes* ;
- après -s, -sh, -ch, -x, -o : **-es** : *watch → watches, go → goes, do → does* ;
- consonne + y → **-ies** : *study → studies* (mais *play → plays*) ;
- *have → has*.

Attention : à la négation et à la question, c'est **does** qui porte le -s, le verbe reste à la base : *She doesn't like fish. Does she like fish?*

## Le présent en be + -ing (présent continu)
Il décrit une action **en cours au moment où l'on parle** : *Look! It's raining. I'm doing my homework now.*

Forme : **be + verbe-ing** : *I am reading, she is reading, they are reading.* Négation : *I'm not reading.* Question : *Are you reading?*

Orthographe : *write → writing* (le e tombe), *swim → swimming, run → running* (consonne doublée), *lie → lying*.

Mots indices : *now, right now, at the moment, Look!, Listen!*

Certains verbes d'état ne se mettent presque jamais en -ing : *know, like, love, hate, want, understand, believe, need*. On dit *I know the answer*, pas *I'm knowing*.

## Les adverbes de fréquence
*always* (toujours) > *usually* (d'habitude) > *often* (souvent) > *sometimes* (parfois) > *rarely / seldom* (rarement) > *never* (jamais).

Place : **avant le verbe**, mais **après be** :
- *I often play football.* / *She never eats meat.*
- *He is always late.*

Questions de fréquence : *How often do you go swimming? — Twice a week. Once a month. Every day.*

> **À retenir** : présent simple = habitude (*every day, often*) ; be + -ing = action en cours (*now, look!*). Le -s de la 3e personne passe sur *does* à la négation et à la question. L'adverbe de fréquence se place avant le verbe, après be.
`,
      exercices: [
        { type: "saisie", question: "Complète au présent simple : *Emma ___ (play) tennis every Saturday.*", reponses: ["plays"], explication: "Habitude (*every Saturday*) + 3e personne du singulier → **plays** (voyelle + y : on ajoute simplement -s)." },
        { type: "saisie", question: "Complète au présent simple : *My brother ___ (study) English every evening.*", reponses: ["studies"], explication: "Consonne + y → **-ies** : *study → studies*." },
        { type: "saisie", question: "Mets à la forme négative : *I like fish.*", reponses: ["I don't like fish", "I do not like fish"], explication: "Au présent simple, la négation se forme avec **don't / do not** + base verbale." },
        { type: "saisie", question: "Complète avec le bon temps : *Look! The children ___ (run) in the park.*", reponses: ["are running", "'re running", "The children are running", "The children're running"], explication: "*Look!* indique une action en cours → **be + -ing**. *Run* double son n : *running*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["She always is late.", "She is always late.", "Always she is late.", "She is late always."], reponse: 1, explication: "L'adverbe de fréquence se place **après be** : *She is always late.* Avec un autre verbe, il se place avant : *She always arrives late.*" },
        { type: "qcm", question: "*What ___ you doing right now?*", choix: ["do", "does", "are", "is"], reponse: 2, explication: "*Right now* → action en cours → be + -ing. Avec *you*, be se conjugue **are** : *What are you doing?*" },
        { type: "vf", question: "La phrase *I am knowing the answer.* est correcte.", reponse: false, explication: "*Know* est un verbe d'état : il ne se met pas en -ing. On dit **I know the answer.**" },
        { type: "saisie", question: "Pose la question au présent simple : *he / speak / Spanish*", reponses: ["Does he speak Spanish"], explication: "Question au présent simple avec he : **Does** + sujet + base verbale (sans -s) : *Does he speak Spanish?*" },
        { type: "qcm", question: "*Tom usually ___ to school by bus, but today he ___ his bike.*", choix: ["goes / rides", "is going / rides", "goes / is riding", "go / is riding"], reponse: 2, explication: "*Usually* = habitude → présent simple *goes* ; *today* = exception en cours → *is riding*." },
        { type: "redaction", question: "Écris un court texte (6 à 8 phrases) : décris ta journée habituelle d'école (avec au moins trois adverbes de fréquence), puis dis ce que toi et ta famille êtes en train de faire en ce moment.", corrige: `Exemple de réponse :

*On school days, I always get up at seven o'clock. I usually have cereal for breakfast and I often take the bus with my friend Hugo. I sometimes eat at the school canteen, but I never eat fish because I hate it! In the evening, I do my homework and I watch TV.*

*Right now, it's Sunday afternoon. I'm writing this text in my bedroom. My mum is cooking a cake and my little sister is playing with the dog. My dad isn't working: he's reading a newspaper.*

Points vérifiés :
- présent simple pour les habitudes, avec le -s à la 3e personne ;
- adverbes bien placés : *I always get up*, *I never eat* ;
- be + -ing pour ce qui se passe maintenant : *I'm writing*, *my mum is cooking*.` },
      ],
    },
    {
      id: "past-simple",
      titre: "Le prétérit (past simple)",
      theme: "Grammaire",
      cours: `
## À quoi sert le prétérit ?
Le **prétérit** (past simple) raconte une action **terminée dans le passé**, souvent avec un repère de temps : *yesterday, last week, last summer, two days ago, in 2020, when I was young*.

>! *I visited London last year.* = J'ai visité Londres l'an dernier / Je visitai Londres.

## Les verbes réguliers : base + -ed
- cas général : *play → played, watch → watched* ;
- verbe terminé par -e : *like → liked, dance → danced* ;
- consonne + y : *study → studied* (mais *play → played*) ;
- verbe court consonne-voyelle-consonne : *stop → stopped, plan → planned*.

Prononciation de -ed : /t/ (*watched, liked*), /d/ (*played, opened*), /ɪd/ après t ou d (*wanted, needed*).

## Les verbes irréguliers les plus courants
| Base | Prétérit | Sens |
|---|---|---|
| be | was / were | être |
| have | had | avoir |
| go | went | aller |
| do | did | faire |
| make | made | fabriquer, faire |
| see | saw | voir |
| eat | ate | manger |
| drink | drank | boire |
| buy | bought | acheter |
| take | took | prendre |
| come | came | venir |
| get | got | obtenir, devenir |
| give | gave | donner |
| write | wrote | écrire |
| read | read | lire |
| swim | swam | nager |
| meet | met | rencontrer |
| find | found | trouver |
| leave | left | partir, quitter |
| say | said | dire |
| think | thought | penser |
| know | knew | savoir, connaître |
| fly | flew | voler (en avion) |
| win | won | gagner |
| lose | lost | perdre |

**Be** : *I / he / she / it* **was** ; *you / we / they* **were**.

## Négation et question : did
- négation : **didn't (did not) + base verbale** : *I didn't go to school.*
- question : **Did + sujet + base verbale** : *Did you see the film? — Yes, I did. / No, I didn't.*

Le verbe revient à la base : on ne dit jamais *I didn't went*.

> **À retenir** : prétérit = action passée terminée. Réguliers : -ed ; irréguliers : à apprendre par cœur. Négation et question avec **did**, suivi de la **base verbale**. Be fait exception : *was / were, wasn't / weren't, Was he...?*
`,
      exercices: [
        { type: "saisie", question: "Donne le prétérit de **go**.", reponses: ["went"], explication: "*Go* est irrégulier : *go – went – gone*." },
        { type: "saisie", question: "Donne le prétérit de **buy**.", reponses: ["bought"], explication: "*Buy* est irrégulier : *buy – bought – bought*." },
        { type: "saisie", question: "Complète : *Yesterday I ___ (visit) my grandparents.*", reponses: ["visited"], explication: "*Yesterday* → prétérit. *Visit* est régulier : **visited**." },
        { type: "vf", question: "Le prétérit de *stop* s'écrit *stoped*.", reponse: false, explication: "Verbe court terminé par consonne-voyelle-consonne : on double la consonne → **stopped**." },
        { type: "qcm", question: "Quelle négation est correcte ?", choix: ["I didn't went to the cinema.", "I didn't go to the cinema.", "I not went to the cinema.", "I don't went to the cinema."], reponse: 1, explication: "Négation au prétérit : **didn't + base verbale** : *I didn't go*." },
        { type: "saisie", question: "Complète avec was ou were : *We ___ at the beach last Sunday.*", reponses: ["were"], explication: "Avec *we*, be au prétérit se conjugue **were**." },
        { type: "saisie", question: "Pose la question au prétérit : *you / see / the match / last night*", reponses: ["Did you see the match last night"], explication: "Question au prétérit : **Did + sujet + base verbale** : *Did you see the match last night?*" },
        { type: "qcm", question: "Dans quel verbe la terminaison -ed se prononce-t-elle /ɪd/ ?", choix: ["played", "watched", "wanted", "opened"], reponse: 2, explication: "-ed se prononce /ɪd/ après t ou d : *wanted*. *Played* et *opened* : /d/ ; *watched* : /t/." },
        { type: "saisie", question: "Mets au prétérit : *She writes a letter and she takes the bus.*", reponses: ["She wrote a letter and she took the bus", "She wrote a letter and took the bus"], explication: "Deux verbes irréguliers : *write → wrote*, *take → took*." },
        { type: "redaction", question: "Raconte ton dernier week-end en 6 à 8 phrases (environ 60 mots). Utilise au moins quatre verbes irréguliers différents, une négation et des repères de temps.", corrige: `Exemple de réponse :

*Last weekend was great! On Saturday morning, I went to the market with my mum and we bought some fruit. In the afternoon, I met my friends at the park and we played football. We didn't win, but it was fun. On Sunday, I got up late. I read a comic and I wrote an email to my penfriend in Manchester. In the evening, we ate pizza and watched a film.*

Points vérifiés :
- repères de temps : *last weekend, on Saturday morning, in the evening* ;
- verbes irréguliers : *went, bought, met, got up, read, wrote, ate, was* ;
- verbes réguliers en -ed : *played, watched* ;
- négation avec didn't + base : *We didn't win*.` },
      ],
    },
    {
      id: "there-is-quantifieurs",
      titre: "There is / there are et les quantifieurs",
      theme: "Grammaire",
      cours: `
## There is / there are : « il y a »
| | Singulier | Pluriel |
|---|---|---|
| Présent | There is (there's) a cat. | There are two cats. |
| Négation | There isn't a cat. | There aren't any cats. |
| Question | Is there a cat? | Are there any cats? |
| Prétérit | There was a cat. | There were two cats. |

>! *There is a big park in my town. There are three bedrooms in my house. There was a storm last night. There were a lot of people at the concert.*

Réponses courtes : *Is there a cinema? — Yes, there is. / No, there isn't.*

## Dénombrable ou indénombrable ?
- **dénombrable** : on peut compter, il y a un pluriel : *an apple, two apples ; a chair, chairs*.
- **indénombrable** : pas de pluriel, pas de *a* : *water, milk, bread, money, rice, information, advice, homework, furniture*.

## Some et any
- **some** dans les phrases affirmatives : *There is some milk. I've got some friends.*
- **any** dans les négations et les questions : *There isn't any milk. Have you got any friends?*
- **some** dans les propositions et demandes polies : *Would you like some tea? Can I have some water?*
- **no** = not any : *There's no milk.* = *There isn't any milk.*

## Much, many, a lot of
| | Dénombrable | Indénombrable |
|---|---|---|
| beaucoup (affirmatif) | a lot of / many | a lot of |
| beaucoup (négation, question) | many | much |
| combien ? | How many? | How much? |
| un peu de, quelques | a few | a little |

>! *How many brothers have you got? — How much money have you got? — I haven't got much time. — There are a lot of students.*

> **À retenir** : *there is* + singulier, *there are* + pluriel, *there was / were* au passé. *Some* à l'affirmative, *any* à la négative et à l'interrogative. *Many* et *How many* avec ce qui se compte, *much* et *How much* avec ce qui ne se compte pas.
`,
      exercices: [
        { type: "saisie", question: "Complète : *___ two beds in my bedroom.*", reponses: ["There are"], explication: "Nom au pluriel (*two beds*) → **There are**." },
        { type: "saisie", question: "Complète au passé : *There ___ a big storm yesterday.*", reponses: ["was"], explication: "Passé + singulier (*a storm*) → **There was**." },
        { type: "qcm", question: "*Is there ___ milk in the fridge?*", choix: ["some", "any", "many", "a"], reponse: 1, explication: "Dans une question, on utilise **any**. *Many* est impossible car *milk* est indénombrable, et *a* aussi." },
        { type: "qcm", question: "*How ___ apples do you want?*", choix: ["much", "many", "any", "some"], reponse: 1, explication: "*Apples* se compte (dénombrable, au pluriel) → **How many**." },
        { type: "saisie", question: "Complète : *How ___ sugar do you take in your tea?*", reponses: ["much"], explication: "*Sugar* est indénombrable → **How much**." },
        { type: "vf", question: "Dans *Would you like some tea?*, l'emploi de *some* est correct.", reponse: true, explication: "On utilise **some** dans les questions qui sont des propositions ou des demandes polies, car on attend une réponse positive." },
        { type: "saisie", question: "Mets à la forme négative : *There is some bread.*", reponses: ["There isn't any bread", "There is not any bread", "There is no bread", "There's no bread", "There's not any bread"], explication: "À la négation, *some* devient **any** : *There isn't any bread*, ou bien *There is no bread*." },
        { type: "qcm", question: "*I can't buy it. I haven't got ___ money.*", choix: ["much", "many", "a few", "some"], reponse: 0, explication: "*Money* est indénombrable et la phrase est négative → **much**. *Many* et *a few* vont avec des dénombrables." },
        { type: "redaction", question: "Décris ta ville ou ton quartier en 6 à 8 phrases : utilise *there is / there are*, au moins un *there was / there were* (comment c'était avant), et les mots *some, any, a lot of*.", corrige: `Exemple de réponse :

*I live in a small town near Nantes. There is a nice park and there are a lot of shops in the main street. There are some good restaurants, but there isn't a cinema, so we go to Nantes to watch films. There aren't any museums. Ten years ago, there was a big factory near the river, and there were a lot of workers. Now there is a swimming pool there!*

Points vérifiés :
- *there is* + singulier, *there are* + pluriel ;
- passé : *there was a factory, there were workers* ;
- *some* à l'affirmative, *any* à la négative : *there aren't any museums* ;
- *a lot of* pour « beaucoup ».` },
      ],
    },
    {
      id: "modaux",
      titre: "Can, must et have to",
      theme: "Grammaire",
      cours: `
## Les modaux : une règle simple
**Can** et **must** sont des modaux :
- ils ne prennent **jamais de -s** : *she can, he must* ;
- ils sont suivis de la **base verbale sans to** : *I can swim* (jamais *I can to swim*) ;
- négation et question **sans do** : *I can't swim. Can you swim?*

## Can : capacité, permission, possibilité
- capacité : *I can play the guitar.* = Je sais jouer de la guitare.
- permission : *Can I go out? — Yes, you can. / No, you can't.*
- demande : *Can you help me, please?*
- négation : **can't** ou **cannot** (en un seul mot).
- au passé : **could** : *When I was five, I could swim.* Négation : *couldn't*.

## Must : obligation ressentie, interdiction
- obligation : *I must finish my homework.* = Je dois finir mes devoirs (c'est moi qui le pense).
- **mustn't** (must not) = **interdiction** : *You mustn't run in the corridors.* = Il est interdit de courir.

## Have to : obligation extérieure
**Have to** n'est pas un modal : il se conjugue comme un verbe ordinaire.
- *I have to wear a uniform. She has to get up early.*
- question : *Do you have to...? Does she have to...?*
- négation : **don't / doesn't have to** = **absence d'obligation** : *You don't have to come.* = Tu n'es pas obligé de venir.
- au passé : *I had to wait.* (must n'a pas de passé : on utilise *had to*).

| Phrase | Sens |
|---|---|
| You must / have to go. | Tu dois y aller. |
| You mustn't go. | Tu n'as pas le droit d'y aller. |
| You don't have to go. | Tu n'es pas obligé d'y aller. |
| You can go. | Tu peux y aller (permission). |
| You can't go. | Tu ne peux pas y aller. |

> **À retenir** : can / must + base verbale, sans -s, sans to, sans do. **Mustn't** = interdiction ; **don't have to** = pas d'obligation. Au passé : *could* et *had to*.
`,
      exercices: [
        { type: "qcm", question: "*My sister can ___ the piano very well.*", choix: ["plays", "to play", "play", "playing"], reponse: 2, explication: "Après un modal, on met la **base verbale sans to** : *can play*." },
        { type: "saisie", question: "Mets à la forme négative : *I can swim.*", reponses: ["I can't swim", "I cannot swim", "I can not swim"], explication: "Négation de can : **can't** ou **cannot**, sans *do*." },
        { type: "saisie", question: "Complète avec have to à la bonne forme : *My dad ___ get up early on Mondays.*", reponses: ["has to", "has got to", "'s got to"], explication: "*Have to* se conjugue : avec he / she / it → **has to**." },
        { type: "vf", question: "*You mustn't wear a uniform* signifie « Tu n'es pas obligé de porter un uniforme ».", reponse: false, explication: "**Mustn't** exprime une **interdiction** (« tu n'as pas le droit »). Pour l'absence d'obligation, on dit *You don't have to wear a uniform*." },
        { type: "qcm", question: "*___ she have to wear a uniform at school?*", choix: ["Do", "Does", "Is", "Has"], reponse: 1, explication: "*Have to* n'est pas un modal : la question se fait avec do / does. Avec *she* → **Does**." },
        { type: "qcm", question: "Comment dit-on « Il est interdit de courir dans les couloirs » ?", choix: ["You don't have to run in the corridors.", "You mustn't run in the corridors.", "You can run in the corridors.", "You haven't to run in the corridors."], reponse: 1, explication: "Interdiction → **mustn't**. *Don't have to* signifie « pas obligé »." },
        { type: "saisie", question: "Traduis : « Tu dois faire tes devoirs. »", reponses: ["You must do your homework", "You have to do your homework", "You've got to do your homework", "You have got to do your homework"], explication: "Obligation : **must** ou **have to**. Attention : « faire ses devoirs » = *do your homework* (*homework* est indénombrable, sans -s)." },
        { type: "saisie", question: "Complète au passé : « Quand j'avais cinq ans, je savais nager. » *When I was five, I ___ swim.*", reponses: ["could", "was able to"], explication: "Le passé de *can* est **could**." },
        { type: "redaction", question: "Écris le règlement de ton collège idéal en 6 à 8 phrases : utilise *can, can't, must, mustn't, have to* et *don't have to*.", corrige: `Exemple de réponse :

*In my ideal school, students don't have to wear a uniform: they can wear their own clothes. Lessons start at 9 o'clock, so we don't have to get up early. We must be polite to teachers and other students. We mustn't use our phones in class, but we can use them at break time. We have to do our homework, but only twice a week! Students can't smoke, of course. And everybody can play music in the playground.*

Points vérifiés :
- base verbale sans to après can / must : *can wear, must be* ;
- distinction **mustn't** (interdit) / **don't have to** (pas obligé) ;
- *have to* conjugué normalement.` },
      ],
    },
    {
      id: "comparatifs-superlatifs",
      titre: "Comparatifs et superlatifs",
      theme: "Grammaire",
      cours: `
## Le comparatif de supériorité
On compare deux éléments avec **than** (« que »).

| Adjectif | Comparatif | Exemple |
|---|---|---|
| court (1 syllabe) | adjectif + **-er** | *tall → taller than* |
| terminé par -y | **-ier** | *happy → happier, easy → easier* |
| long (2 syllabes ou plus) | **more** + adjectif | *more expensive than* |

Orthographe : *big → bigger, hot → hotter, thin → thinner* (consonne doublée) ; *nice → nicer* (on ajoute seulement -r).

Cas des adjectifs de 2 syllabes : ceux en **-y** prennent *-ier* (*funny → funnier*) ; quelques autres acceptent aussi -er (*quiet → quieter, clever → cleverer, narrow → narrower, simple → simpler*). Les autres prennent *more* : *more boring, more famous, more modern*.

Erreur fréquente : on ne cumule jamais les deux formes : on ne dit pas *more bigger*, mais *bigger*.

>! *London is bigger than Manchester. Maths is more difficult than art. My cat is lazier than my dog.*

## Le superlatif
On distingue un élément dans un groupe : **the ... -est** ou **the most ...**

| Adjectif | Superlatif |
|---|---|
| tall | the tallest |
| big | the biggest |
| happy | the happiest |
| beautiful | the most beautiful |

>! *Ben Nevis is the highest mountain in the UK. This is the most interesting book I have ever read.*

On dit **in** devant un lieu ou un groupe : *the best player in the team, the tallest building in the world.*

## Les irréguliers
| Adjectif | Comparatif | Superlatif |
|---|---|---|
| good | better | the best |
| bad | worse | the worst |
| far | further / farther | the furthest / the farthest |

## Égalité et infériorité
- égalité : **as + adjectif + as** : *Tom is as tall as his father.* Négation : *not as / not so ... as* : *It isn't as cold as yesterday.*
- infériorité : **less + adjectif + than** : *This film is less interesting than the book.*

> **À retenir** : adjectif court → *-er than / the -est* ; adjectif long → *more ... than / the most ...*. *Good → better → the best ; bad → worse → the worst.* Égalité : *as ... as*.
`,
      exercices: [
        { type: "saisie", question: "Donne le comparatif de supériorité de **tall**.", reponses: ["taller", "taller than"], explication: "Adjectif court → **-er** : *taller (than)*." },
        { type: "saisie", question: "Donne le superlatif de **big**.", reponses: ["the biggest", "biggest"], explication: "Consonne-voyelle-consonne : on double le g → **the biggest**." },
        { type: "saisie", question: "Donne le comparatif de **good**.", reponses: ["better", "better than"], explication: "*Good* est irrégulier : *good → better → the best*." },
        { type: "qcm", question: "Quel est le comparatif de **happy** ?", choix: ["more happy", "happyer", "happier", "happiest"], reponse: 2, explication: "Adjectif terminé par consonne + y → **-ier** : *happier*. *Happiest* est le superlatif." },
        { type: "qcm", question: "*This book is ___ than that one.*", choix: ["more interesting", "interestinger", "most interesting", "more interestinger"], reponse: 0, explication: "*Interesting* est un adjectif long → **more interesting than**." },
        { type: "saisie", question: "Complète avec le superlatif : *For me, Paris is ___ (beautiful) city in the world.*", reponses: ["the most beautiful"], explication: "Adjectif long → **the most** + adjectif : *the most beautiful city in the world*." },
        { type: "saisie", question: "Donne le superlatif de **bad**.", reponses: ["the worst", "worst"], explication: "*Bad* est irrégulier : *bad → worse → the worst*." },
        { type: "vf", question: "*My sister is as tall as me* signifie que ma sœur et moi avons la même taille.", reponse: true, explication: "**as + adjectif + as** exprime l'égalité : « aussi grande que moi »." },
        { type: "saisie", question: "Traduis : « Le Nil est plus long que la Tamise. »", reponses: ["The Nile is longer than the Thames", "The River Nile is longer than the River Thames", "The Nile is longer than the River Thames", "The Nile's longer than the Thames"], explication: "*Long* est court → **longer than**. Les noms de fleuves prennent *the* : *the Nile, the Thames*." },
        { type: "redaction", question: "Compare deux villes, deux sports ou deux animaux que tu connais en 6 phrases : utilise au moins deux comparatifs (dont un adjectif long), un superlatif, un irrégulier (*better / worse / the best*) et *as ... as*.", corrige: `Exemple de réponse (deux animaux) :

*I have got a dog called Max and a cat called Luna. Max is bigger than Luna and he is more energetic: he runs all day! Luna is quieter and more independent than Max. Max isn't as clever as Luna, but he is friendlier. For me, dogs are better pets than cats because you can play with them outside. But Luna is the cutest animal in the world!*

Points vérifiés :
- comparatifs courts : *bigger, quieter, friendlier* (y → ier) ;
- comparatifs longs : *more energetic, more independent* ;
- irrégulier : *better* ; superlatif : *the cutest ... in the world* ;
- égalité niée : *isn't as clever as*.` },
      ],
    },
    {
      id: "pronoms-possessifs",
      titre: "Pronoms, possessifs et génitif 's",
      theme: "Grammaire",
      cours: `
## Le tableau des pronoms
| Sujet | Complément | Adjectif possessif | Pronom possessif |
|---|---|---|---|
| I | me | my | mine |
| you | you | your | yours |
| he | him | his | his |
| she | her | her | hers |
| it | it | its | (rare) |
| we | us | our | ours |
| they | them | their | theirs |

- **sujet** : avant le verbe : *She plays tennis.*
- **complément** : après un verbe ou une préposition : *I like her. Come with us.*
- **adjectif possessif** : devant un nom : *my bag, their house*.
- **pronom possessif** : remplace « possessif + nom » : *This bag is mine.* = C'est le mien / il est à moi.

## Attention au possesseur !
En anglais, le possessif s'accorde avec le **possesseur**, pas avec l'objet possédé :
- *Tom and his sister* (la sœur de Tom) ; *Emma and her brother* (le frère d'Emma).
- *Its* (sans apostrophe) = son, sa pour un objet ou un animal : *The dog is eating its dinner.* Ne pas confondre avec *it's* = *it is*.

## Le génitif 's (cas possessif)
Pour dire « le ... de quelqu'un », on met le **possesseur en premier** + **'s** :
- *Tom's bike* = le vélo de Tom ;
- *my mother's car* = la voiture de ma mère.

Cas particuliers :
- possesseur au pluriel en -s : seulement l'apostrophe : *my parents' room* (la chambre de mes parents) ;
- pluriel irrégulier : *'s* : *the children's toys, the women's team* ;
- lieux : *at my grandmother's* = chez ma grand-mère.

**Whose?** = à qui ? : *Whose phone is this? — It's Sarah's. / It's hers.*

> **À retenir** : le possessif s'accorde avec le possesseur (*his* pour un homme, *her* pour une femme). Génitif : possesseur + **'s** + objet ; pluriel en -s → seulement **'**. *Its* = possessif ; *it's* = it is.
`,
      exercices: [
        { type: "qcm", question: "« C'est son sac (le sac de Julie). » *This is ___ bag.*", choix: ["she", "her", "hers", "his"], reponse: 1, explication: "Devant un nom, on utilise l'adjectif possessif. Le possesseur est une fille → **her**." },
        { type: "saisie", question: "« Ce livre est à moi. » *This book is ___.*", reponses: ["mine"], explication: "Le pronom possessif remplace « mon livre » : **mine**." },
        { type: "saisie", question: "Traduis avec le génitif : « le vélo de Tom »", reponses: ["Tom's bike"], explication: "Possesseur + **'s** + objet : *Tom's bike*." },
        { type: "saisie", question: "Traduis avec le génitif : « la chambre de mes parents »", reponses: ["my parents' room", "my parents' bedroom"], explication: "*Parents* est un pluriel en -s : on ajoute seulement l'apostrophe : **my parents' room**." },
        { type: "saisie", question: "Traduis avec le génitif : « les jouets des enfants »", reponses: ["the children's toys"], explication: "*Children* est un pluriel irrégulier (sans -s) : on ajoute **'s** : *the children's toys*." },
        { type: "qcm", question: "« Je les adore. » *I love ___.*", choix: ["they", "their", "them", "theirs"], reponse: 2, explication: "Après un verbe, on utilise le pronom complément : **them**." },
        { type: "vf", question: "La phrase *The dog is eating it's dinner.* est correcte.", reponse: false, explication: "*It's* = *it is*. Le possessif s'écrit sans apostrophe : **its dinner**." },
        { type: "saisie", question: "*Whose pen is this? Is it Paul's?* — *Yes, it's ___.* (pronom possessif)", reponses: ["his"], explication: "Le possesseur est un garçon → pronom possessif **his** (identique à l'adjectif)." },
        { type: "redaction", question: "Présente ta famille en 6 phrases en utilisant au moins trois génitifs ('s ou s'), deux adjectifs possessifs différents et un pronom possessif.", corrige: `Exemple de réponse :

*Let me introduce my family. My mother's name is Claire and my father's name is Karim. I've got a sister, Inès. Her favourite hobby is dancing. My grandparents live in Brittany and I often spend my holidays at my grandparents' house. My uncle's dog is called Rex: its fur is all white. My cousins have got a big garden, but my bedroom is bigger than theirs!*

Points vérifiés :
- génitifs : *my mother's name, my uncle's dog*, et pluriel : *my grandparents' house* ;
- adjectifs possessifs accordés avec le possesseur : *her favourite hobby* (Inès), *its fur* (le chien) ;
- pronom possessif : *theirs*.` },
      ],
    },
    {
      id: "questions-wh",
      titre: "Poser des questions : les mots en Wh-",
      theme: "Grammaire",
      cours: `
## Les mots interrogatifs
| Mot | Sens | Exemple |
|---|---|---|
| What | quoi, que, quel | *What is your name?* |
| Who | qui | *Who is your best friend?* |
| Where | où | *Where do you live?* |
| When | quand | *When is your birthday?* |
| Why | pourquoi | *Why are you sad? — Because...* |
| Which | lequel, quel (choix limité) | *Which colour do you prefer, red or blue?* |
| Whose | à qui | *Whose bag is this?* |
| How | comment | *How are you?* |
| How old | quel âge | *How old are you?* |
| How many / How much | combien | *How many sisters have you got?* |
| How often | à quelle fréquence | *How often do you play tennis?* |
| How long | combien de temps | *How long does the trip take?* |
| What time | à quelle heure | *What time do you get up?* |

## La construction : mot interrogatif + auxiliaire + sujet + verbe
- avec be : *Where is she?*
- avec un modal : *What can you see?*
- au présent simple : *Where **do** you live? What time **does** he get up?*
- au prétérit : *Where **did** you go last summer?*
- avec be + -ing : *What are you doing?*

>! Pour interroger sur un élément souligné : *She lives in Leeds.* → *Where does she live?*

## Attention : question sur le sujet
Quand *Who* ou *What* est le **sujet** du verbe, on n'utilise **pas** do / does / did :
- *Who phoned you?* (quelqu'un a téléphoné) — mais *Who did you phone?* (tu as téléphoné à quelqu'un).
- *What happened?*

> **À retenir** : mot en Wh- + auxiliaire (do, does, did, be, can...) + sujet + verbe. Pas d'auxiliaire do si *who / what* est sujet. *How* se combine : *how old, how many, how much, how often, how long*.
`,
      exercices: [
        { type: "qcm", question: "*___ do you live? — In London.*", choix: ["What", "Who", "Where", "When"], reponse: 2, explication: "La réponse est un lieu → **Where**." },
        { type: "saisie", question: "Complète : *___ old are you? — I'm twelve.*", reponses: ["How"], explication: "L'âge se demande avec **How old**." },
        { type: "qcm", question: "*___ is this bag? — It's Paul's.*", choix: ["Who", "Whose", "Which", "What"], reponse: 1, explication: "La réponse indique le propriétaire → **Whose** (à qui)." },
        { type: "saisie", question: "Complète : *How ___ brothers have you got?*", reponses: ["many"], explication: "*Brothers* est dénombrable → **How many**." },
        { type: "saisie", question: "Pose la question portant sur l'heure : *She gets up at 7 o'clock.*", reponses: ["What time does she get up", "When does she get up"], explication: "Question sur l'heure : **What time** + *does* (3e personne) + sujet + base verbale." },
        { type: "saisie", question: "Pose la question portant sur le lieu : *They went to Scotland last summer.*", reponses: ["Where did they go last summer", "Where did they go"], explication: "Prétérit → **did** + base verbale : *Where did they go (last summer)?*" },
        { type: "vf", question: "Pour demander « Qui t'a téléphoné ? », on dit *Who did phone you?*", reponse: false, explication: "*Who* est ici le sujet de *phone* : pas d'auxiliaire did. On dit **Who phoned you?**" },
        { type: "qcm", question: "*How often do you go to the cinema?* La meilleure réponse est :", choix: ["By bus.", "Twice a month.", "Two hours.", "Because I like films."], reponse: 1, explication: "*How often* demande une fréquence → *Twice a month* (deux fois par mois). *Two hours* répondrait à *How long*." },
        { type: "redaction", question: "Tu vas interviewer ton chanteur ou ton sportif préféré. Écris 6 questions variées en anglais en utilisant 6 mots interrogatifs différents (au moins une au prétérit).", corrige: `Exemple de réponse (interview d'une joueuse de football) :

1. *Where do you live now?*
2. *How old were you when you started football?*
3. *Why did you choose this sport?*
4. *How often do you train?*
5. *Who is your favourite player?*
6. *What are you going to do after the World Cup?*

Points vérifiés :
- ordre mot interrogatif + auxiliaire + sujet + verbe : *Where do you live?* ;
- prétérit avec did ou was / were : *Why did you choose...? How old were you...?* ;
- *Who is...?* : who sujet de be, sans do ;
- variété : where, how old, why, how often, who, what.` },
      ],
    },
    {
      id: "futur",
      titre: "Parler du futur : will et be going to",
      theme: "Grammaire",
      cours: `
## Will + base verbale
**Will** est un modal : pas de -s, pas de to.

| Affirmation | Négation | Question |
|---|---|---|
| I will go / I'll go | I won't go (will not) | Will you go? |
| she will go / she'll go | she won't go | Will she go? |

On utilise **will** pour :
- une **prédiction**, une opinion sur l'avenir : *I think it will rain tomorrow. In 2050, people will live on Mars.*
- une **décision prise sur le moment** : *The phone is ringing. — I'll answer it!*
- une promesse : *I'll help you, I promise.*

Mots fréquents : *I think, I hope, probably, maybe, tomorrow, next year, in the future*.

## Be going to + base verbale
**Be going to** s'utilise pour :
- une **intention, un projet déjà décidé** : *We are going to visit London next summer.* (les billets sont achetés)
- une **prédiction fondée sur un indice présent** : *Look at those black clouds! It's going to rain.*

Forme : *I'm going to play / she's going to play / they're going to play.* Négation : *I'm not going to play.* Question : *Are you going to play?*

| Situation | Forme |
|---|---|
| Je décide maintenant | I'll... |
| C'est déjà prévu | I'm going to... |
| Je pense que... (opinion) | It will... |
| Je vois que ça va arriver | It's going to... |

> **À retenir** : **will** = prédiction, décision spontanée, promesse ; **be going to** = projet décidé à l'avance ou conséquence visible. Les deux sont suivis de la base verbale : *will go, is going to go*.
`,
      exercices: [
        { type: "saisie", question: "Complète avec will : *I think it ___ (rain) tomorrow.*", reponses: ["will rain", "'ll rain", "it will rain", "it'll rain"], explication: "*I think* + prédiction → **will + base verbale** : *will rain*." },
        { type: "saisie", question: "Complète avec be going to : *Look at those black clouds! It ___ rain.*", reponses: ["is going to", "'s going to", "is going to rain", "'s going to rain", "It is going to rain", "It's going to rain"], explication: "Prédiction fondée sur un indice visible (les nuages) → **is going to**." },
        { type: "qcm", question: "*The phone is ringing!* — Que réponds-tu ?", choix: ["I'm going to answer it!", "I'll answer it!", "I answer it!", "I answering it!"], reponse: 1, explication: "Décision prise sur le moment → **will** : *I'll answer it!*" },
        { type: "saisie", question: "Mets à la forme négative : *She will come to the party.*", reponses: ["She won't come to the party", "She will not come to the party"], explication: "Négation de will : **won't** (will not) + base verbale." },
        { type: "vf", question: "La phrase *I will to go to the cinema.* est correcte.", reponse: false, explication: "*Will* est un modal : il est suivi de la **base verbale sans to** : *I will go*." },
        { type: "saisie", question: "C'est déjà décidé et réservé : *We ___ (visit) London next summer.* Utilise be going to.", reponses: ["are going to visit", "'re going to visit"], explication: "Projet déjà décidé → **be going to** : *We are going to visit*." },
        { type: "qcm", question: "Quelle question est correcte ?", choix: ["Will you come with us?", "Do you will come with us?", "Will you to come with us?", "Are you will come with us?"], reponse: 0, explication: "Question avec un modal : **Will + sujet + base verbale**, sans do." },
        { type: "redaction", question: "Écris un texte de 6 à 8 phrases en deux parties : 1) tes projets pour les prochaines vacances (be going to) ; 2) tes prédictions sur la vie en 2050 (will / won't).", corrige: `Exemple de réponse :

*Next summer, my family and I are going to travel to Ireland. We are going to take the ferry from Cherbourg. I'm going to visit Dublin and I'm going to practise my English!*

*In 2050, I think life will be very different. People will have electric flying cars and robots will do the housework. Children probably won't go to school every day: they will study at home with computers. I hope there will be less pollution.*

Points vérifiés :
- **be going to** pour des projets décidés : *are going to travel* ;
- **will / won't** pour des prédictions : *robots will do, children won't go* ;
- base verbale après will et going to ;
- mots d'opinion : *I think, probably, I hope*.` },
      ],
    },
    {
      id: "prepositions",
      titre: "Les prépositions de lieu et de temps",
      theme: "Grammaire",
      cours: `
## Les prépositions de lieu
| Préposition | Sens | Exemple |
|---|---|---|
| in | dans | *The keys are in my bag.* |
| on | sur (en contact) | *The book is on the table.* |
| under | sous | *The cat is under the bed.* |
| above | au-dessus de | *There's a lamp above the desk.* |
| next to | à côté de | *Sit next to me.* |
| near | près de | *I live near the station.* |
| between | entre | *The bank is between the café and the bakery.* |
| behind | derrière | *The garden is behind the house.* |
| in front of | devant | *The bus stops in front of the school.* |
| opposite | en face de | *The library is opposite the park.* |

Expressions : *at home, at school, at the station, in London, in France, on the wall, on the left / on the right*.

## Les prépositions de temps : at, on, in
| Préposition | Avec... | Exemples |
|---|---|---|
| **at** | une heure, un moment précis | *at 8 o'clock, at noon, at night, at the weekend (UK ; US : on the weekend), at Christmas* |
| **on** | un jour, une date | *on Monday, on 14th July, on my birthday, on Christmas Day* |
| **in** | une période plus longue | *in May, in 2025, in summer, in the morning, in the 19th century* |

Attention : *at night* mais *in the morning, in the afternoon, in the evening*. *On Monday morning* (jour précis).

Autres prépositions de temps :
- **from ... to** : *from 9 to 5* ;
- **before / after** : *before dinner, after school* ;
- **during** : pendant (une période) : *during the holidays* ;
- **for** + durée : *I lived there for three years.*

Pas de préposition devant *next, last, this, every* : *next week, last Sunday, every day*.

> **À retenir** : **at** + heure, **on** + jour / date, **in** + mois, année, saison, partie de la journée. Pas de préposition avant *next, last, every, this*.
`,
      exercices: [
        { type: "saisie", question: "Complète : *My birthday is ___ May.*", reponses: ["in"], explication: "Mois → **in** : *in May*." },
        { type: "saisie", question: "Complète : *The film starts ___ 8 o'clock.*", reponses: ["at"], explication: "Heure précise → **at** : *at 8 o'clock*." },
        { type: "saisie", question: "Complète : *We have PE ___ Monday.*", reponses: ["on"], explication: "Jour → **on** : *on Monday*." },
        { type: "qcm", question: "*I usually read ___ night.*", choix: ["in", "on", "at", "by"], reponse: 2, explication: "Expression fixe : **at night**, mais *in the evening*." },
        { type: "qcm", question: "Le chat est sous la table : *The cat is ___ the table.*", choix: ["on", "under", "in", "behind"], reponse: 1, explication: "Sous = **under**. *On* = sur, *behind* = derrière." },
        { type: "saisie", question: "« La banque est entre la poste et la boulangerie. » *The bank is ___ the post office and the bakery.*", reponses: ["between"], explication: "Entre deux éléments = **between ... and ...**." },
        { type: "saisie", question: "« Le bus s'arrête devant l'école. » *The bus stops ___ the school.*", reponses: ["in front of"], explication: "Devant = **in front of**. *Opposite* signifie « en face de »." },
        { type: "vf", question: "*See you ___ next Friday!* : il faut mettre *on*.", reponse: false, explication: "Pas de préposition devant **next, last, this, every** : *See you next Friday!*" },
        { type: "redaction", question: "Décris ta chambre en 6 phrases avec au moins six prépositions de lieu différentes, puis indique en 2 phrases ton emploi du temps du mercredi avec *at, on, in*.", corrige: `Exemple de réponse :

*My bedroom is small but cosy. My bed is next to the window and there is a poster of my favourite band above it. My desk is opposite the bed and my computer is on the desk. My school bag is under the desk. There is a wardrobe behind the door, and my guitar is between the wardrobe and the bookcase.*

*On Wednesdays, I have lessons in the morning. At 2 o'clock, I go to the swimming pool, and in the evening I play video games.*

Points vérifiés :
- prépositions de lieu variées : *next to, above, opposite, on, under, behind, between* ;
- temps : **on** Wednesdays, **in** the morning, **at** 2 o'clock, **in** the evening.` },
      ],
    },
    {
      id: "vocab-famille-ecole-maison",
      titre: "Vocabulaire : famille, école, maison, vêtements",
      theme: "Vocabulaire",
      cours: `
## La famille (the family)
| Anglais | Français |
|---|---|
| parents / mother (mum) / father (dad) | parents / mère / père |
| brother / sister | frère / sœur |
| grandparents / grandmother / grandfather | grands-parents |
| uncle / aunt | oncle / tante |
| cousin | cousin, cousine |
| son / daughter | fils / fille |
| husband / wife | mari / femme |
| an only child | un enfant unique |
| a stepmother / a stepfather | une belle-mère / un beau-père (remariage) |

Attention : *parents* = seulement le père et la mère. « Les parents » au sens large (la famille) = *relatives*.

## L'école (school)
| Anglais | Français |
|---|---|
| a subject | une matière |
| maths (UK) / math (US) | les maths |
| history, geography, science, art, music, PE | histoire, géo, sciences, arts plastiques, musique, EPS |
| a timetable (UK) / a schedule (US) | un emploi du temps |
| a break (UK) / recess (US) | la récréation |
| the canteen / the cafeteria | la cantine |
| homework (indénombrable) | les devoirs |
| a pencil case, a ruler, a rubber (UK) / an eraser (US) | une trousse, une règle, une gomme |
| a schoolbag | un cartable |

En Angleterre, la 5e correspond à **Year 8** ; aux États-Unis, à **7th grade**.

## La maison (the house)
*the kitchen* (la cuisine), *the living room* (le salon), *the bedroom* (la chambre), *the bathroom* (la salle de bains), *the toilet*, *the garden* (UK) / *the yard* (US), *upstairs / downstairs* (en haut / en bas), *a flat* (UK) / *an apartment* (US), *the stairs* (l'escalier), *the furniture* (les meubles, indénombrable).

## Les vêtements (clothes)
| Anglais | Français |
|---|---|
| a T-shirt, a shirt | un tee-shirt, une chemise |
| a jumper (UK) / a sweater | un pull |
| trousers (UK) / pants (US) | un pantalon |
| jeans, shorts | un jean, un short |
| a skirt, a dress | une jupe, une robe |
| a coat, a jacket | un manteau, une veste |
| shoes, trainers (UK) / sneakers (US) | chaussures, baskets |
| a cap, a hat, a scarf | une casquette, un chapeau, une écharpe |

*Trousers, jeans, shorts* sont toujours au pluriel : *My jeans are blue.*

> **À retenir** : attention aux différences UK / US (*trousers / pants, rubber / eraser, flat / apartment*). *Homework* et *furniture* n'ont pas de pluriel. *Parents* = père et mère seulement.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « ma tante »", reponses: ["my aunt", "my auntie"], explication: "Tante = **aunt** ; oncle = *uncle*." },
        { type: "saisie", question: "Traduis : « un pantalon »", reponses: ["trousers", "pants", "a pair of trousers", "a pair of pants"], explication: "**Trousers** (UK) ou **pants** (US), toujours au pluriel. Attention : en anglais britannique, *pants* désigne aussi un slip !" },
        { type: "qcm", question: "Où prépares-tu les repas ?", choix: ["in the bedroom", "in the bathroom", "in the kitchen", "in the garden"], reponse: 2, explication: "La cuisine = **the kitchen**." },
        { type: "saisie", question: "Traduis : « l'emploi du temps » (anglais britannique)", reponses: ["the timetable", "timetable", "the schedule", "schedule"], explication: "**Timetable** en anglais britannique, *schedule* en anglais américain." },
        { type: "vf", question: "*My parents* peut désigner toute la famille (oncles, cousins, etc.).", reponse: false, explication: "*Parents* = le père et la mère seulement. Les membres de la famille au sens large = **relatives**." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["I have a lot of homeworks.", "I have a lot of homework.", "I have many homeworks.", "I have a homework."], reponse: 1, explication: "*Homework* est indénombrable : pas de -s, pas de *a*, pas de *many* : **a lot of homework**." },
        { type: "saisie", question: "Traduis : « la récréation » (anglais britannique)", reponses: ["break", "the break", "break time", "breaktime", "recess"], explication: "**Break** (ou *break time*) en anglais britannique, *recess* en anglais américain." },
        { type: "saisie", question: "Traduis : « un pull »", reponses: ["a jumper", "a sweater", "a pullover", "jumper", "sweater", "pullover"], explication: "**A jumper** (UK) ou **a sweater**. *Pullover* existe aussi." },
        { type: "redaction", question: "Ton correspondant anglais te demande de décrire ta maison, ta famille et ta tenue préférée. Écris-lui un e-mail de 70 mots environ.", corrige: `Exemple de réponse :

*Hi Jack,*

*Thanks for your email! I live in a house near Bordeaux. Downstairs, there is a big kitchen and a living room; upstairs, there are three bedrooms and a bathroom. We've also got a small garden. There are four people in my family: my mum, my stepfather, my little sister Zoé and me. My grandparents live in Paris. My favourite clothes are my blue jeans, a black hoodie and my white trainers!*

*Write soon,*
*Hugo*

Points vérifiés :
- formules d'e-mail : *Hi..., Thanks for your email, Write soon* ;
- vocabulaire de la maison : *downstairs, upstairs, kitchen, living room, garden* ;
- famille : *stepfather, grandparents* ;
- vêtements : *jeans* au pluriel, adjectifs avant le nom : *blue jeans, white trainers*.` },
      ],
    },
    {
      id: "vocab-ville-loisirs-voyage",
      titre: "Vocabulaire : ville, nourriture, loisirs, météo, voyage",
      theme: "Vocabulaire",
      cours: `
## La ville (the town / the city)
*a street* (une rue), *a square* (une place), *a shop* (UK) / *a store* (US), *a supermarket*, *a bakery* (une boulangerie), *a library* (une bibliothèque, attention faux-ami !), *a bookshop* (une librairie), *the town hall* (la mairie), *the post office*, *a hospital*, *the train station*, *the underground / the tube* (UK) ou *the subway* (US) : le métro.

Demander son chemin : *Excuse me, where is the station, please? — Go straight on, turn left, take the second street on the right. It's next to the bank.*

## La nourriture (food)
| Anglais | Français |
|---|---|
| breakfast / lunch / dinner | petit-déjeuner / déjeuner / dîner |
| bread, butter, cheese, eggs | pain, beurre, fromage, œufs |
| meat, chicken, fish | viande, poulet, poisson |
| vegetables, fruit, potatoes | légumes, fruits, pommes de terre |
| chips (UK) / fries (US) | frites |
| crisps (UK) / chips (US) | chips |
| sweets (UK) / candy (US) | bonbons |

Au restaurant : *Can I have a glass of water, please? I'd like the fish and chips. — Anything else?*

## Les loisirs (hobbies, free time)
*play football / tennis / video games / the guitar* ; *go swimming / skating / shopping* ; *do judo / karate / gymnastics* ; *read, draw, dance, listen to music, watch TV*.

On dit *I like* / *I love* / *I enjoy* / *I hate* + **-ing** : *I love playing basketball. I hate cooking.*

## La météo (the weather)
*What's the weather like?* — *It's sunny, cloudy, windy, rainy, foggy, snowy. It's raining. It's snowing. It's hot / warm / cold.*

Les saisons : *spring, summer, autumn* (UK) / *fall* (US), *winter*.

## Le voyage (travel)
*a trip / a journey* (un voyage), *a holiday* (UK) / *a vacation* (US) : des vacances, *a passport*, *a suitcase* (une valise), *a ticket*, *a plane, a train, a ferry, a coach* (un car), *to travel abroad* (voyager à l'étranger), *to book a hotel* (réserver).

> **À retenir** : *library* = bibliothèque (une librairie = *bookshop*). Attention aux paires UK / US : *chips / fries, holiday / vacation, autumn / fall, underground / subway*. Après *like, love, enjoy, hate* : verbe en **-ing**.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « une bibliothèque »", reponses: ["a library", "library"], explication: "Bibliothèque = **library**. Faux-ami : une librairie se dit *a bookshop* (UK) ou *a bookstore* (US)." },
        { type: "qcm", question: "Que signifie *Turn left and go straight on* ?", choix: ["Tourne à droite et continue tout droit.", "Tourne à gauche et continue tout droit.", "Reste à gauche et arrête-toi.", "Prends la deuxième à gauche."], reponse: 1, explication: "*Turn left* = tourne à gauche ; *go straight on* = continue tout droit." },
        { type: "saisie", question: "Traduis : « l'automne »", reponses: ["autumn", "fall", "the autumn", "the fall"], explication: "**Autumn** en anglais britannique, **fall** en anglais américain." },
        { type: "qcm", question: "En Angleterre, tu commandes des frites. Tu demandes :", choix: ["crisps", "chips", "sweets", "biscuits"], reponse: 1, explication: "Au Royaume-Uni, les frites = **chips** (aux États-Unis : *fries*). *Crisps* = les chips en sachet." },
        { type: "saisie", question: "Complète : *I love ___ (swim) in the sea.*", reponses: ["swimming"], explication: "Après *love, like, enjoy, hate*, on met le verbe en **-ing**. *Swim* double son m : *swimming*." },
        { type: "saisie", question: "Traduis : « Il pleut. »", reponses: ["It's raining", "It is raining", "It rains"], explication: "Il pleut (en ce moment) = **It's raining**. On peut dire aussi *It's rainy* (le temps est pluvieux)." },
        { type: "vf", question: "*Holiday* (UK) et *vacation* (US) signifient tous deux « les vacances ».", reponse: true, explication: "Les Britanniques disent *I'm on holiday*, les Américains *I'm on vacation*." },
        { type: "saisie", question: "Traduis : « une valise »", reponses: ["a suitcase", "suitcase", "a case"], explication: "Une valise = **a suitcase**." },
        { type: "redaction", question: "Tu es en vacances dans une ville anglophone. Écris une carte postale de 60 à 80 mots à un ami : où tu es, le temps qu'il fait, ce que tu manges, ce que tu as visité et ce que tu aimes faire là-bas.", corrige: `Exemple de réponse :

*Dear Sam,*

*Greetings from Edinburgh! I'm on holiday here with my family for a week. The weather isn't great: it's cloudy and windy, and it rained yesterday! But the city is beautiful. On Monday, we visited the castle and we walked along the Royal Mile. I tried fish and chips and a Scottish breakfast with eggs and sausages. I love walking in the old streets and going to the bookshops.*

*See you soon,*
*Chloé*

Points vérifiés :
- formules de carte postale : *Dear..., Greetings from..., See you soon* ;
- météo : *it's cloudy and windy, it rained* ;
- prétérit pour ce qui est fait : *we visited, I tried* ;
- *love* + -ing : *I love walking*.` },
      ],
    },
    {
      id: "culture-pays-anglophones",
      titre: "Le monde anglophone : Royaume-Uni, États-Unis et fêtes",
      theme: "Culture",
      cours: `
## Le Royaume-Uni (the United Kingdom)
Le **Royaume-Uni** réunit quatre nations : **l'Angleterre** (capitale London), **l'Écosse** (Scotland, capitale Edinburgh), **le pays de Galles** (Wales, capitale Cardiff) et **l'Irlande du Nord** (Northern Ireland, capitale Belfast).
- La **Grande-Bretagne** (Great Britain) = l'île qui comprend l'Angleterre, l'Écosse et le pays de Galles.
- Le drapeau : l'**Union Jack** (ou *Union Flag*).
- Le roi **Charles III** est le chef de l'État depuis 2022 ; le Premier ministre dirige le gouvernement (à *10 Downing Street*).
- Monuments de Londres : *Big Ben* (la cloche de la tour Elizabeth), *Buckingham Palace*, *the Tower of London*, *the London Eye*, la Tamise (*the Thames*).
- Monnaie : la livre sterling (*the pound*, £).
- On roule à gauche (*they drive on the left*).

## Les États-Unis (the United States of America)
- **50 États** ; capitale **Washington, D.C.** ; plus grande ville : **New York**.
- Le drapeau : *the Stars and Stripes* (50 étoiles pour les États, 13 bandes pour les 13 colonies d'origine).
- Le président vit à la **Maison-Blanche** (*the White House*).
- La **statue de la Liberté** (*the Statue of Liberty*), offerte par la France en 1886, se trouve à New York.
- Monnaie : le dollar ($).
- Fête nationale : **Independence Day**, le **4 juillet** (Déclaration d'indépendance de 1776).

## Les autres pays anglophones
L'anglais est parlé dans le monde entier : **l'Irlande** (Dublin), **le Canada** (Ottawa ; anglais et français), **l'Australie** (Canberra), **la Nouvelle-Zélande** (Wellington), **l'Afrique du Sud**, **l'Inde**, le Nigeria, la Jamaïque... Beaucoup de ces pays font partie du **Commonwealth**.

## Les fêtes (festivals and celebrations)
| Fête | Date | Traditions |
|---|---|---|
| Bonfire Night (UK) | 5 novembre | feux de joie et feux d'artifice, en souvenir de Guy Fawkes (1605) |
| Halloween | 31 octobre | déguisements, *trick or treat*, citrouilles (*jack-o'-lanterns*) |
| Thanksgiving (USA) | 4e jeudi de novembre | repas en famille avec de la dinde (*turkey*) |
| Christmas | 25 décembre | *Christmas pudding*, *crackers*, *stockings* ; *Boxing Day* le 26 (UK) |
| St Patrick's Day (Irlande) | 17 mars | couleur verte, trèfle (*shamrock*), défilés |
| Independence Day (USA) | 4 juillet | feux d'artifice, barbecues, parades |

> **À retenir** : UK = Angleterre + Écosse + pays de Galles + Irlande du Nord. USA = 50 États, capitale Washington, D.C. Fêtes : Halloween (31/10), Bonfire Night (5/11), Thanksgiving (4e jeudi de novembre), St Patrick's Day (17/03), Independence Day (4/07).
`,
      exercices: [
        { type: "qcm", question: "Quelle est la capitale de l'Écosse ?", choix: ["Glasgow", "Cardiff", "Edinburgh", "Dublin"], reponse: 2, explication: "**Edinburgh** est la capitale de l'Écosse. Glasgow est la plus grande ville écossaise ; Cardiff est la capitale du pays de Galles, Dublin celle de l'Irlande." },
        { type: "saisie", question: "Combien d'États comptent les États-Unis ? (en chiffres)", reponses: ["50", "fifty"], explication: "Les États-Unis comptent **50 États**, représentés par les 50 étoiles du drapeau." },
        { type: "vf", question: "L'Irlande (capitale Dublin) fait partie du Royaume-Uni.", reponse: false, explication: "La **République d'Irlande** est un pays indépendant. Seule l'**Irlande du Nord** (capitale Belfast) fait partie du Royaume-Uni." },
        { type: "qcm", question: "Que célèbre-t-on le 5 novembre au Royaume-Uni ?", choix: ["Thanksgiving", "Bonfire Night", "Boxing Day", "St Patrick's Day"], reponse: 1, explication: "**Bonfire Night** (ou *Guy Fawkes Night*) rappelle l'échec du complot des poudres de Guy Fawkes contre le Parlement en 1605." },
        { type: "saisie", question: "Comment s'appelle la résidence du président des États-Unis ? (en anglais)", reponses: ["the White House", "White House"], explication: "Le président américain vit et travaille à la **White House** (Maison-Blanche), à Washington, D.C." },
        { type: "qcm", question: "Quel plat est traditionnel à Thanksgiving ?", choix: ["la dinde (turkey)", "le fish and chips", "le haggis", "le pudding de Noël"], reponse: 0, explication: "À Thanksgiving, les familles américaines mangent de la **dinde** (*turkey*), souvent avec de la tarte à la citrouille (*pumpkin pie*)." },
        { type: "saisie", question: "Quelle est la date de la fête nationale américaine ? (réponds en anglais, ex. : 14th July)", reponses: ["4th July", "July 4th", "July 4", "4 July", "the 4th of July", "the Fourth of July", "Fourth of July"], explication: "**Independence Day**, le 4 juillet, célèbre la Déclaration d'indépendance de 1776." },
        { type: "vf", question: "La statue de la Liberté a été offerte aux États-Unis par la France.", reponse: true, explication: "Elle a été offerte par la France et inaugurée à New York en **1886**, pour célébrer l'amitié entre les deux pays." },
        { type: "redaction", question: "Présente en anglais (6 à 8 phrases) une fête du monde anglophone de ton choix : son nom, la date, le pays, son origine et ce que les gens font ce jour-là.", corrige: `Exemple de réponse (Halloween) :

*Halloween is a popular festival in the USA, in the UK and in Ireland. It is celebrated on 31st October. It comes from an old Celtic festival called Samhain, when people believed that ghosts came back to Earth. Today, children dress up as witches, ghosts, vampires or monsters. They go from door to door and say "Trick or treat!" to get sweets. People carve pumpkins to make jack-o'-lanterns and they decorate their houses. Some people go to Halloween parties and watch horror films.*

Points vérifiés :
- informations précises : pays, date (*on 31st October*), origine (fête celtique de Samhain) ;
- présent simple pour les traditions : *children dress up, they go from door to door* ;
- vocabulaire spécifique : *trick or treat, carve pumpkins, jack-o'-lanterns, dress up*.` },
      ],
    },
    {
      id: "methodes",
      titre: "Méthodes : comprendre un texte et rédiger",
      theme: "Méthodologie",
      cours: `
## Comprendre un texte écrit
### Avant de lire
- Regarde le **titre**, les **images**, la **source** (article, e-mail, blog, publicité...) et la **date** : ils t'aident à deviner le sujet.
- Lis les **questions** avant le texte : tu sauras quelles informations chercher.

### Pendant la lecture
1. Première lecture rapide : qui ? quoi ? où ? quand ? (*who, what, where, when*).
2. Repère les **mots transparents** (qui ressemblent au français) : *animal, important, family, restaurant, visit*.
3. Utilise le **contexte** pour deviner un mot inconnu : ne t'arrête pas sur chaque mot !
4. Repère les **mots de liaison** : *and, but* (mais), *because* (parce que), *so* (donc), *then* (ensuite), *first, finally*.
5. Attention aux **faux-amis** : *library* (bibliothèque), *actually* (en fait), *sensible* (raisonnable), *journey* (voyage, et non journée).

### Répondre aux questions
- Justifie avec une **citation** du texte entre guillemets.
- En vrai / faux, une seule erreur dans la phrase suffit à la rendre fausse.

## Rédiger un court texte
### La méthode en 4 étapes
1. **Lis bien la consigne** : type de texte (e-mail, carte postale, récit, description), destinataire, nombre de mots, temps à utiliser.
2. **Prépare** : note tes idées en anglais, avec le vocabulaire que tu connais.
3. **Rédige** avec des phrases simples mais justes, reliées par des connecteurs : *first, then, after that, finally ; and, but, because, so*.
4. **Relis-toi** avec une liste de vérification :
- le -s de la 3e personne au présent (*she likes*) ;
- les verbes irréguliers au prétérit (*went, saw*) ;
- l'adjectif avant le nom et invariable (*a red car, red cars*) ;
- les majuscules aux jours, mois, nationalités et langues (*Monday, May, French*) ;
- *I* toujours en majuscule.

### Les formules utiles
| Type de texte | Début | Fin |
|---|---|---|
| e-mail amical | *Hi Tom, / Dear Tom,* | *Write soon, / Best wishes, / Love,* |
| carte postale | *Greetings from London!* | *See you soon,* |
| donner son avis | *I think that... / In my opinion...* | *That's why...* |

>! Enrichis tes phrases : au lieu de *It was good*, écris *It was really great because we visited a fantastic museum.*

> **À retenir** : pour comprendre, appuie-toi sur le contexte, les mots transparents et les connecteurs ; justifie par une citation. Pour rédiger : consigne, idées, phrases reliées par des connecteurs, relecture grammaticale.
`,
      exercices: [
        { type: "qcm", question: "Que faut-il faire en premier face à un texte à comprendre ?", choix: ["Traduire chaque mot dans l'ordre.", "Observer le titre, les images, la source et lire les questions.", "Chercher tous les mots inconnus dans un dictionnaire.", "Répondre aux questions sans lire le texte."], reponse: 1, explication: "Le titre, les images, la source et les questions donnent le **sujet** et orientent la lecture. Traduire mot à mot fait perdre du temps et du sens." },
        { type: "saisie", question: "Traduis le connecteur *because*.", reponses: ["parce que", "car"], explication: "*Because* = **parce que, car** : il introduit une cause." },
        { type: "qcm", question: "Lis : *Ben was tired, so he went to bed early.* Que signifie *so* ici ?", choix: ["mais", "parce que", "donc", "ensuite"], reponse: 2, explication: "*So* introduit une **conséquence** : il était fatigué, **donc** il est allé se coucher tôt." },
        { type: "vf", question: "*Sensible* en anglais signifie « sensible » en français.", reponse: false, explication: "Faux-ami : *sensible* = **raisonnable**. « Sensible » se dit *sensitive*." },
        { type: "saisie", question: "Corrige l'erreur : *My friend like football.*", reponses: ["My friend likes football"], explication: "Au présent simple, on ajoute **-s** à la 3e personne du singulier : *My friend likes football.*" },
        { type: "saisie", question: "Corrige l'erreur : *I have two reds bags.*", reponses: ["I have two red bags", "I've got two red bags", "I have got two red bags"], explication: "En anglais, l'adjectif est **invariable** : *two red bags*." },
        { type: "qcm", question: "Lis : *Last summer, Mia travelled to Canada with her parents. They spent two weeks in Montreal, where people speak French and English. Mia loved the food but she found the weather too hot.* Quelle affirmation est vraie ?", choix: ["Mia est partie seule.", "Mia n'a pas aimé la nourriture.", "Mia a trouvé qu'il faisait trop chaud.", "Mia est restée un mois à Montréal."], reponse: 2, explication: "Le texte dit *she found the weather too hot* : elle a trouvé le temps trop chaud. Elle est partie *with her parents*, a aimé la nourriture (*loved the food*) et est restée *two weeks*." },
        { type: "redaction", question: "Consigne de contrôle : ton correspondant américain te demande comment s'est passée ta rentrée en 5e. Réponds-lui par un e-mail de 80 mots environ : parle de ton collège, de tes matières préférées (et pourquoi), de tes nouveaux amis et d'un projet pour cette année.", corrige: `Exemple de réponse :

*Hi Ethan,*

*Thanks for your email! I started 5e two weeks ago: it's like seventh grade in the USA. My school is quite big: there are about 600 students. My favourite subjects are science and English because the teachers are really nice and the lessons are interesting. But I don't like maths: it's too difficult for me! I've got two new friends, Nina and Malik. We always eat together at the canteen. This year, we are going to visit London with our English class. I'm so excited!*

*Write soon,*
*Lucas*

Méthode appliquée :
- formules d'e-mail au début et à la fin ;
- toutes les parties de la consigne sont traitées (collège, matières, amis, projet) ;
- adaptation au destinataire américain : *seventh grade* (et non *Year 8*, qui est britannique) ;
- temps variés : prétérit (*I started*), présent (*my school is*), futur (*we are going to visit*) ;
- connecteurs : *because, but* ;
- justification des goûts : *because the teachers are really nice*.` },
      ],
    },
    {
      id: "nombres-heure-dates",
      titre: "Nombres, heure, dates et prix",
      theme: "Vocabulaire",
      cours: `
## Les nombres
- de 13 à 19 : **-teen** (accent sur *-teen*) : *thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen* ;
- les dizaines : **-ty** (accent au début) : *twenty, thirty, forty* (sans u), *fifty, sixty, seventy, eighty, ninety* ;
- trait d'union entre dizaine et unité : *twenty-one, forty-five* ;
- **and** devant les dizaines après *hundred* (UK) : *a hundred and twenty* (120), *three hundred and five* (305) ;
- *hundred, thousand, million* ne prennent pas de -s après un nombre : *two hundred, five thousand* (mais *hundreds of people*).

Attention à la prononciation : *thirteen* (13) / *thirty* (30) ; *fourteen* (14) / *forty* (40).

## Les ordinaux (1er, 2e...)
*first* (1st), *second* (2nd), *third* (3rd), puis **-th** : *fourth* (4th), *fifth* (5th), *ninth* (9th), *twelfth* (12th), *twentieth* (20th), *twenty-first* (21st), *thirty-second* (32nd).

On les utilise pour les dates et les étages : *on the second floor* (au 2e étage).

## Les dates
| À l'écrit | À l'oral |
|---|---|
| 14th July / 14 July (UK) | *the fourteenth of July* |
| July 14th / July 14 (US) | *July fourteenth* |

- Les **jours et les mois** prennent une **majuscule** : *Monday, January*.
- Préposition : **on** + date : *My birthday is on 3rd March.*
- Les années se lisent par paires : *1998 = nineteen ninety-eight* ; *2026 = twenty twenty-six* (ou *two thousand and twenty-six*) ; *2005 = two thousand and five*.

## L'heure
*What time is it? / What's the time?*

| Heure | Façon traditionnelle | Façon « digitale » |
|---|---|---|
| 7:00 | *seven o'clock* | *seven* |
| 7:15 | *a quarter past seven* | *seven fifteen* |
| 7:30 | *half past seven* | *seven thirty* |
| 7:45 | *a quarter to eight* | *seven forty-five* |
| 7:10 | *ten past seven* | *seven ten* |
| 7:50 | *ten to eight* | *seven fifty* |

- **past** = après l'heure (jusqu'à la demie) ; **to** = avant l'heure suivante.
- **a.m.** = le matin (de minuit à midi) ; **p.m.** = l'après-midi et le soir : *3 p.m.* = 15 h. Au Royaume-Uni et aux États-Unis, on utilise peu l'horaire sur 24 heures à l'oral.
- Piège : *half past seven* = 7 h 30 (« la demie après sept heures »). Si tu fais de l'allemand, attention : *halb sieben* veut dire 6 h 30.

## Les prix
*£3.50* se lit *three pounds fifty* ; *$10.99* = *ten dollars ninety-nine* ; *50p* = *fifty pence* (ou *fifty p*). *How much is it? — It's five pounds.*

Le point sert de séparateur décimal (*3.5*), la virgule sépare les milliers (*10,000*) : c'est l'inverse du français !

> **À retenir** : *-teen* (13-19) ≠ *-ty* (dizaines) ; *forty* sans u. Ordinaux : *first, second, third*, puis *-th*. Date : *on the 14th of July*. Heure : *past* jusqu'à la demie, *to* ensuite ; *a.m.* le matin, *p.m.* l'après-midi. Majuscules aux jours et aux mois.
`,
      exercices: [
        { type: "saisie", question: "Écris en lettres : **40**", reponses: ["forty"], explication: "**Forty** s'écrit sans u, contrairement à *four* et *fourteen*. Erreur très fréquente : *fourty*." },
        { type: "qcm", question: "Comment dit-on 7 h 30 ?", choix: ["half past six", "half past seven", "half to eight", "seven and half"], reponse: 1, explication: "*Half past seven* = « la demie après sept heures » = 7 h 30. L'expression *half to* n'existe pas." },
        { type: "saisie", question: "Écris l'ordinal correspondant à **3** (en lettres).", reponses: ["third", "the third"], explication: "Les trois premiers ordinaux sont irréguliers : *first, second, third*. Ensuite on ajoute **-th** : *fourth, fifth...*" },
        { type: "saisie", question: "Il est 8 h 45. Complète : *It's a quarter ___ nine.*", reponses: ["to"], explication: "Après la demie, on compte ce qui manque avant l'heure suivante avec **to** : *a quarter to nine* = 9 h moins le quart." },
        { type: "vf", question: "En anglais, les noms des mois et des jours s'écrivent avec une majuscule.", reponse: true, explication: "On écrit *Monday, Friday, January, August* avec une majuscule, contrairement au français." },
        { type: "qcm", question: "*The film starts at 3 p.m.* Il commence à :", choix: ["3 h du matin", "13 h", "15 h", "3 h 30"], reponse: 2, explication: "**p.m.** = après midi : *3 p.m.* = 15 h. *3 a.m.* serait 3 h du matin." },
        { type: "saisie", question: "Comment lit-on l'année **1998** ? (en lettres)", reponses: ["nineteen ninety-eight", "nineteen ninety eight"], explication: "On lit les années par paires de chiffres : *19 / 98* → **nineteen ninety-eight**." },
        { type: "saisie", question: "Écris en lettres le prix **£4.50**.", reponses: ["four pounds fifty", "four pounds and fifty pence", "four pounds fifty pence", "four fifty"], explication: "On lit les livres puis les pence : **four pounds fifty**. *Pound* prend un -s au pluriel." },
        { type: "saisie", question: "Traduis : « Mon anniversaire est le 2 mai. » (avec une préposition, ordinal en chiffres ou en lettres)", reponses: ["My birthday is on 2nd May", "My birthday is on the 2nd of May", "My birthday is on the second of May", "My birthday is on May 2nd", "My birthday is on May 2", "My birthday is on 2 May", "My birthday is on May second", "My birthday's on 2nd May", "My birthday's on the second of May"], explication: "**On** + date ; on dit *the second of May* à l'oral (UK) et *May second* (US)." },
        { type: "redaction", question: "Écris ton emploi du temps d'une journée de collège en 6 phrases : donne au moins quatre heures (avec *past*, *to*, *half past* ou *o'clock*), la date du jour et le prix de quelque chose que tu achètes.", corrige: `Exemple de réponse :

*Today is Tuesday, the 14th of October. I get up at a quarter to seven and I leave home at half past seven. My first lesson starts at eight o'clock: it's maths. At ten past ten, we have a break and I buy a croissant: it costs one euro twenty. Lunch is at twelve o'clock in the canteen. I finish school at a quarter past five and I go home by bus.*

Points vérifiés :
- heures variées : *a quarter to seven, half past seven, eight o'clock, ten past ten, a quarter past five* ;
- date avec ordinal et majuscules : *Tuesday, the 14th of October* ;
- prix : *one euro twenty* ;
- présent simple pour les habitudes, avec *at* + heure.` },
      ],
    },
    {
      id: "past-continuous",
      titre: "Le passé en be + -ing (past continuous)",
      theme: "Grammaire",
      cours: `
## À quoi sert le past continuous ?
Le **past continuous** (prétérit en be + -ing) décrit une action **en cours à un moment du passé**. Il correspond souvent à l'**imparfait** français (« j'étais en train de... »).

>! *At 8 o'clock last night, I was watching TV.* = Hier soir à 8 h, je regardais la télé (j'étais en train de la regarder).

## La forme : was / were + verbe-ing
| Affirmation | Négation | Question |
|---|---|---|
| I / he / she / it **was** playing | I **wasn't** playing (was not) | **Was** he playing? |
| you / we / they **were** playing | they **weren't** playing (were not) | **Were** you playing? |

- Réponses courtes : *Were you sleeping? — Yes, I was. / No, I wasn't.*
- Orthographe du -ing, comme au présent : *write → writing, swim → swimming, run → running*.
- Les verbes d'état (*know, like, want, understand*) restent au prétérit simple : *I knew the answer* (jamais *I was knowing*).

## Les trois grands emplois
1. **Une action en cours à un moment précis du passé** : *What were you doing at 9 p.m.? — I was reading.*
2. **Le décor d'un récit** (ce qui se passait) : *It was raining and the wind was blowing. People were walking quickly.*
3. **Une action interrompue** par une action courte au prétérit simple :
- *I was having a shower **when** the phone **rang**.* (la douche est en cours ; le téléphone sonne : action courte)
- ***While** I was walking home, I **met** my teacher.*

Deux actions longues en même temps : *While my dad was cooking, I was doing my homework.*

## Prétérit simple ou past continuous ?
| Prétérit simple | Past continuous |
|---|---|
| action terminée, courte, ou une suite d'actions | action en cours, en train de se dérouler |
| *I watched a film last night.* (je l'ai vu en entier) | *I was watching a film when you called.* (j'étais en train de le regarder) |
| après **when** (l'action qui interrompt) | souvent après **while** (pendant que) |

> **À retenir** : past continuous = **was / were + V-ing** (*I / he / she / it was ; you / we / they were*). Il décrit une action **en cours** dans le passé ou le **décor** d'un récit. *I was reading* (action longue) **when** *the phone rang* (action courte, prétérit simple). **While** + action longue.
`,
      exercices: [
        { type: "saisie", question: "Complète au past continuous : *At 8 o'clock last night, I ___ (watch) TV.*", reponses: ["was watching"], explication: "Action en cours à un moment précis du passé, avec *I* → **was + V-ing** : *I was watching TV.*" },
        { type: "saisie", question: "Complète au past continuous : *They ___ (play) football when it started to rain.*", reponses: ["were playing"], explication: "Avec *they*, on utilise **were** : *They were playing* (action longue interrompue par *it started to rain*)." },
        { type: "qcm", question: "*While she ___ dinner, the lights went out.*", choix: ["cooked", "was cooking", "were cooking", "is cooking"], reponse: 1, explication: "Après **while**, l'action longue en cours se met au past continuous. Avec *she* → **was cooking**. *Were* va avec *you, we, they*." },
        { type: "vf", question: "La phrase *I was knowing the answer.* est correcte.", reponse: false, explication: "*Know* est un verbe d'état : il ne se met pas en -ing, même au passé. On dit **I knew the answer.**" },
        { type: "saisie", question: "Mets à la forme négative : *We were sleeping.*", reponses: ["We weren't sleeping", "We were not sleeping"], explication: "On ajoute **not** après *were* : *We weren't (were not) sleeping.*" },
        { type: "qcm", question: "Choisis la bonne combinaison : *I ___ a shower when the phone ___.*", choix: ["was having / rang", "had / was ringing", "was having / was ringing", "have / rang"], reponse: 0, explication: "La douche est l'action **longue, en cours** → *was having* ; le téléphone qui sonne est l'action **courte qui l'interrompt** → prétérit simple *rang* (*ring – rang – rung*)." },
        { type: "saisie", question: "Pose la question au past continuous : *What / you / do / when I phoned you?*", reponses: ["What were you doing when I phoned you", "What were you doing when I called you"], explication: "Question : mot interrogatif + **were** + sujet + V-ing : *What were you doing...?* Avec *you*, toujours **were**." },
        { type: "saisie", question: "Complète la réponse courte : *Were your friends waiting for you?* — *Yes, they ___.*", reponses: ["were"], explication: "On reprend l'auxiliaire de la question : *Yes, they were. / No, they weren't.*" },
        { type: "saisie", question: "Traduis : « Il pleuvait quand je suis sorti. »", reponses: ["It was raining when I went out", "It was raining when I left", "It was raining when I went outside", "It was raining when I got out"], explication: "« Il pleuvait » = décor, action en cours → **It was raining** ; « je suis sorti » = action courte → prétérit simple **went out**." },
        { type: "redaction", question: "Écris le début d'une histoire (6 à 8 phrases) qui commence par *Last Saturday evening...* : décris le décor avec au moins trois verbes au past continuous, puis raconte un événement soudain avec *when* et au moins trois verbes au prétérit simple.", corrige: `Exemple de réponse :

*Last Saturday evening, it was very cold and it was snowing. My parents were watching a film in the living room and my little brother was sleeping upstairs. I was reading a book in my bedroom. Suddenly, when the clock struck nine, all the lights went out! I heard a strange noise in the garden. I looked out of the window and I saw a big shadow near the trees...*

Points vérifiés :
- décor au past continuous : *it was snowing, my parents were watching, my brother was sleeping, I was reading* ;
- **was** avec I / he / it, **were** avec they ;
- événement soudain au prétérit simple : *the lights went out, I heard, I looked, I saw* ;
- connecteurs du récit : *Suddenly, when*.` },
      ],
    },
  ],
};
