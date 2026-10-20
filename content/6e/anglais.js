export default {
  chapitres: [
    {
      id: "be-et-have",
      titre: "Be et have got : se présenter",
      theme: "Grammaire",
      cours: `
>! Le programme de 6e vise le niveau **A1+** : les niveaux de langue vont de A1 (débutant) à C2 ; A1+ veut dire « A1 bien acquis, avec déjà un peu de A2 » : tu sais te présenter, parler de ton quotidien et poser des questions simples. Le niveau visé monte ensuite chaque année, jusqu'au B1 en fin de 3e. Dans ce cours, la mention **(A1+)** signale une notion un peu plus avancée, attendue en fin de 6e.

## Le verbe be (être)
**Be** est le verbe le plus important de l'anglais. Il change selon le sujet : **am**, **is** ou **are**.

| Forme pleine | Forme contractée | Négation |
|---|---|---|
| I am | I'm | I'm not |
| you are | you're | you aren't |
| he / she / it is | he's / she's / it's | he isn't / she isn't |
| we are | we're | we aren't |
| they are | they're | they aren't |

À l'oral et dans les messages, on utilise surtout les **formes contractées** : *I'm Léo. She's my friend.*

### À quoi sert be ?
- dire son nom : *I'm Emma.* / *My name is Emma.*
- dire sa nationalité et d'où l'on vient : *I'm French. I'm from Lille.*
- dire comment on va : *I'm fine. I'm happy.*

### Attention : be là où le français dit « avoir »
- **l'âge** : *I am eleven.* = J'ai onze ans. (on peut ajouter *years old* : *I'm eleven years old*)
- **les sensations** : *I'm hungry* (j'ai faim), *I'm thirsty* (j'ai soif), *I'm cold* (j'ai froid), *I'm hot* (j'ai chaud), *I'm scared* (j'ai peur).

### Poser une question avec be
On **inverse** le sujet et le verbe : *You are Irish.* → *Are you Irish?* ; *She is ten.* → *Is she ten?*

Réponses courtes : *Yes, I am. / No, I'm not.* — *Yes, she is. / No, she isn't.*

## Have got (avoir, posséder)
**Have got** sert à parler de ce que l'on possède, de sa famille, de ses animaux et de son apparence.

| Affirmation | Négation | Question |
|---|---|---|
| I / you / we / they **have got** (I've got) | I **haven't got** | **Have** you **got**...? |
| he / she / it **has got** (he's got) | he **hasn't got** | **Has** he **got**...? |

>! *I've got a brother and a sister. My cat has got green eyes. Have you got a pet? — Yes, I have. / No, I haven't.*

Les Américains disent souvent *I have a dog* et *Do you have a dog?* : c'est correct aussi.

### Erreurs fréquentes
- ✗ *I have eleven* → *I am eleven* (l'âge se dit avec be).
- ✗ *He have got* → *He **has** got* (avec he, she, it).
- ✗ *I'm agree* : on dit *I agree* (sans be).
- Dans une réponse courte affirmative, on ne contracte pas : *Yes, I am* (jamais *Yes, I'm*).

> **À retenir** : be = *am / is / are* ; have got = *have got*, mais **has got** avec he, she, it. L'âge et les sensations se disent avec **be** : *I'm eleven, I'm hungry*. Pour répondre court, on reprend le verbe : *Yes, I am. No, she hasn't.*
`,
      exercices: [
        { type: "qcm", question: "Complète : *I ___ eleven years old.*", choix: ["have", "am", "is", "has"], reponse: 1, explication: "L'âge se dit avec **be** en anglais, et avec I, be se conjugue **am** : *I am eleven* (ou *I'm eleven*). *I have eleven* est une erreur très fréquente chez les Français." },
        { type: "saisie", question: "Complète avec be : *We ___ from Scotland.* (écris seulement ce qui manque)", reponses: ["are"], explication: "Avec *we*, be se conjugue **are** : *We are from Scotland* (forme contractée : *We're from Scotland*)." },
        { type: "vf", question: "La phrase *She has got two brothers.* est correcte.", reponse: true, explication: "Oui : avec *she*, on emploie **has got**. On peut aussi dire *She's got two brothers.*" },
        { type: "saisie", question: "Mets à la forme négative : *I am hungry.*", reponses: ["I am not hungry", "I'm not hungry"], explication: "On ajoute **not** après be : *I am not hungry* ou *I'm not hungry*. Attention : *I amn't* n'existe pas." },
        { type: "qcm", question: "*Have you got a pet?* — *Yes, ___.*", choix: ["I am", "I got", "I've", "I have"], reponse: 3, explication: "La réponse courte reprend l'auxiliaire de la question (*have*) : **Yes, I have.** On ne contracte jamais une réponse courte affirmative, donc pas *Yes, I've*." },
        { type: "saisie", question: "Complète avec have got à la bonne forme : *My cat ___ green eyes.* (écris seulement ce qui manque)", reponses: ["has got", "'s got"], explication: "*My cat* = *it* → **has got** (ou *'s got*) : *My cat has got green eyes.*" },
        { type: "saisie", question: "Traduis : « J'ai froid. »", reponses: ["I am cold", "I'm cold"], explication: "Les sensations se disent avec **be** : *I am cold* / *I'm cold*. *I have cold* ne veut rien dire en anglais." },
        { type: "saisie", question: "Pose la question avec be : *he / Irish* (« Est-il irlandais ? »)", reponses: ["Is he Irish"], explication: "Pour poser une question avec be, on inverse : *He is Irish* → **Is he Irish?** Les nationalités prennent une majuscule." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Tom has got a sister.", "Tom have got a sister.", "Tom is got a sister.", "Tom has a got sister."], reponse: 0, explication: "*Tom* = *he* → **has got**, et *got* se place juste après *has* : *Tom has got a sister.*" },
        { type: "redaction", question: "Présente-toi en 6 phrases en anglais : ton nom, ton âge, ta nationalité, ta ville, ta famille et tes animaux (ou ce que tu n'as pas). Utilise **be** et **have got** au moins deux fois chacun.", corrige: `Exemple de réponse :

*Hello! My name is Inès and I'm eleven years old. I'm French and I'm from Nantes. I've got two brothers, Hugo and Sami. They are funny! I haven't got a sister. We've got a dog called Pepper and he is very cute.*

Points vérifiés :
- **be** pour le nom, l'âge, la nationalité, la ville : *I'm eleven*, *I'm French*, *I'm from Nantes* ;
- **have got** pour la famille et les animaux : *I've got two brothers*, *We've got a dog* ;
- une négation : *I haven't got a sister* ;
- majuscule à *French* (nationalité) et à *I*.` },
      ],
    },
    {
      id: "moi-et-les-autres",
      titre: "Se présenter, la famille et le portrait",
      theme: "Vocabulaire",
      cours: `
## Saluer et prendre congé
| Anglais | Quand l'utiliser ? |
|---|---|
| *Hello! / Hi!* | à tout moment (*Hi* est plus familier) |
| *Good morning!* | le matin, jusqu'à midi |
| *Good afternoon!* | l'après-midi |
| *Good evening!* | le soir, en arrivant |
| *Good night!* | le soir, en partant ou avant d'aller dormir |
| *Goodbye! / Bye! / See you!* | pour dire au revoir |

>! *— Hi, I'm Jack. What's your name? — I'm Zoé. Nice to meet you! — How are you? — I'm fine, thank you. And you?*

## Se présenter
*My name is... / I'm...* ; *I'm eleven.* ; *I live in Rennes.* ; *I'm from France. I'm French.*

### Pays et nationalités
| Pays | Nationalité |
|---|---|
| England | English |
| Scotland | Scottish |
| Wales | Welsh |
| Ireland | Irish |
| the United Kingdom (the UK) | British |
| the United States (the USA) | American |
| Canada | Canadian |
| Australia | Australian |
| South Africa | South African |
| India | Indian |
| France | French |

Les nationalités et les langues prennent **toujours une majuscule** : *She is Scottish. I speak French.*

## La famille (the family)
- *parents* (les parents), *mother / mum* (mère / maman), *father / dad* (père / papa)
- *brother* (frère), *sister* (sœur), *son* (fils), *daughter* (fille de quelqu'un)
- *grandmother / grandma*, *grandfather / grandpa*, *grandparents*
- *uncle* (oncle), *aunt* (tante), *cousin* (cousin ou cousine)
- *a child*, *two children* (un enfant, deux enfants) ; *a baby*

>! La famille Simpson : *Homer is Marge's husband. Bart is their son. Lisa and Maggie are their daughters. Bart is Lisa's brother.*

## Décrire quelqu'un
### L'apparence
- *tall* (grand), *short* (petit), *big*, *small*, *young* (jeune), *old* (vieux, âgé), *skinny* (très mince, maigre ; *slim* = mince, plus flatteur)
- les cheveux : *long / short hair*, *blond / brown / black hair*, *red hair* (= cheveux **roux**), *curly hair* (bouclés)
- les yeux : *blue / green / brown eyes* ; *He wears glasses.* (lunettes)

Attention : *hair* (les cheveux) est **singulier** : *Her hair is long.* On ne dit jamais ✗ *hairs* pour une coiffure.

### Le caractère
*funny* (drôle), *nice* / *kind* (gentil), *friendly* (sympathique), *smart* / *intelligent*, *sporty* (sportif), *shy* (timide), *adorable*.

### Le corps
*head* (tête), *face* (visage), *eyes*, *ears* (oreilles), *nose* (nez), *mouth* (bouche), *arms* (bras), *hands* (mains), *fingers* (doigts), *legs* (jambes), *a foot / two feet* (pied), *a tooth / two teeth* (dent).

### Les vêtements
*a T-shirt, a shirt* (chemise), *a pullover / a jumper* (pull), *jeans, trousers* (pantalon), *a skirt* (jupe), *a dress* (robe), *a coat* (manteau), *a jacket* (veste), *shoes, socks* (chaussettes), *a hat* (chapeau), *a cap* (casquette).

### Les émotions
*happy* (heureux), *sad* (triste), *tired* (fatigué), *angry* (en colère), *surprised*, *scared / afraid* (effrayé). Pour réagir : *Great! Wonderful! I'm glad!* (je suis content) ; *What a shame!* (dommage !)

>! Rappel : l'adjectif se place **avant le nom** et ne prend **jamais de -s** : *a funny boy, two funny boys ; green eyes*.

> **À retenir** : saluer selon le moment de la journée (*Good morning / afternoon / evening*, *Good night* pour partir). Nationalités et langues avec une majuscule. *Hair* est singulier, *red hair* = cheveux roux. L'adjectif va avant le nom et reste invariable.
`,
      exercices: [
        { type: "qcm", question: "Il est 15 h. Tu croises ta professeure d'anglais dans le couloir. Que lui dis-tu ?", choix: ["Good night!", "Good morning!", "Good afternoon!", "Good evening!"], reponse: 2, explication: "L'après-midi, on dit **Good afternoon!** *Good morning* s'emploie le matin, *Good evening* le soir et *Good night* seulement pour partir le soir ou aller se coucher." },
        { type: "saisie", question: "Donne la nationalité d'une personne qui vient du pays de Galles (*Wales*).", reponses: ["Welsh"], explication: "Une personne du pays de Galles est **Welsh** (gallois). Elle est aussi **British**, car le pays de Galles fait partie du Royaume-Uni." },
        { type: "saisie", question: "Complète : *My mother's brother is my ___.* (écris seulement ce qui manque)", reponses: ["uncle"], explication: "Le frère de ta mère est ton oncle : **uncle**. Sa femme est ta tante : *aunt*." },
        { type: "vf", question: "La phrase *She has got blond hairs.* est correcte pour décrire sa coiffure.", reponse: false, explication: "*Hair* (la chevelure) est **singulier** en anglais : *She has got blond hair.* De plus, l'adjectif ne prend jamais de -s." },
        { type: "qcm", question: "Lis : *Lucy is tall and skinny. She's got long red hair and green eyes.* Que sait-on de Lucy ?", choix: ["Elle est petite et ronde.", "Elle a les yeux bleus.", "Elle a les cheveux courts.", "Elle a les cheveux roux et les yeux verts."], reponse: 3, explication: "*Red hair* = cheveux **roux** et *green eyes* = yeux verts. Lucy est grande et mince (*tall and skinny*) et ses cheveux sont longs (*long*)." },
        { type: "saisie", question: "Quel est le pluriel de *foot* (pied) ?", reponses: ["feet"], explication: "*Foot* a un pluriel irrégulier : **feet**. De même : *tooth → teeth* (dent)." },
        { type: "qcm", question: "Complète : *Bart is Homer's son and Lisa is Homer's ___.*", choix: ["daughter", "sister", "mother", "aunt"], reponse: 0, explication: "La fille de quelqu'un se dit **daughter** (le fils : *son*). Lisa est la sœur (*sister*) de Bart, mais la fille (*daughter*) d'Homer." },
        { type: "qcm", question: "Tom vient de perdre son match de foot. Il dit : *I'm ___.*", choix: ["happy", "sad", "tall", "funny"], reponse: 1, explication: "Après une défaite, on est triste : **sad**. *Happy* = heureux ; *tall* (grand) et *funny* (drôle) ne sont pas des émotions." },
        { type: "saisie", question: "Traduis : « Il est timide mais très gentil. »", reponses: ["He is shy but very nice", "He's shy but very nice", "He is shy but very kind", "He's shy but very kind", "He is shy but very friendly", "He's shy but very friendly", "He is shy but he is very nice", "He's shy but he's very nice", "He is shy but he is very kind", "He's shy but he's very kind"], explication: "*Timide* = **shy**, *gentil* = **nice** ou **kind** ; *mais* = **but**, *très* = **very** : *He's shy but very nice.*" },
        { type: "redaction", question: "Fais le portrait d'un membre de ta famille ou d'un ami en 6 à 8 phrases : qui c'est, son âge, son apparence, ses vêtements préférés, son caractère.", corrige: `Exemple de réponse :

*This is my cousin Maël. He is thirteen and he lives in Brest. He is tall and skinny. He has got short brown hair and blue eyes, and he wears glasses. He always wears jeans, a black T-shirt and a red cap. He is very funny and sporty, but he is a bit shy at school. I like him a lot!*

Points vérifiés :
- présentation : *This is my cousin...* ;
- âge avec be : *He is thirteen* ;
- apparence avec be et have got : *He is tall*, *He has got short brown hair* (hair au singulier) ;
- adjectifs avant le nom, sans -s : *blue eyes*, *a red cap* ;
- caractère : *funny, sporty, shy* ;
- connecteurs simples : *and, but*.` },
      ],
    },
    {
      id: "alphabet-prononciation",
      titre: "L'alphabet et la prononciation",
      theme: "Phonologie",
      cours: `
## Comment lire les sons dans ce chapitre ?
Dans l'appli, il n'y a pas de son : les prononciations sont écrites de deux façons.
- entre barres obliques, avec l'**alphabet phonétique** de ton dictionnaire : /eɪ/ ;
- entre guillemets, avec une **approximation en français** : « eï ». Ce n'est qu'une aide : écoute ensuite le mot (dictionnaire en ligne, vidéo, ton professeur) pour bien l'imiter.

## L'alphabet anglais
| Lettre | Son | Lettre | Son |
|---|---|---|---|
| A | « eï » /eɪ/ | N | « ènn » /en/ |
| B | « bi » /biː/ | O | « eu-ou » /əʊ/ |
| C | « si » /siː/ | P | « pi » /piː/ |
| D | « di » /diː/ | Q | « kiou » /kjuː/ |
| E | « i » /iː/ | R | « âr » /ɑː/ |
| F | « èf » /ef/ | S | « èss » /es/ |
| G | « dji » /dʒiː/ | T | « ti » /tiː/ |
| H | « eïtch » /eɪtʃ/ | U | « iou » /juː/ |
| I | « aï » /aɪ/ | V | « vi » /viː/ |
| J | « djeï » /dʒeɪ/ | W | « deubeul-iou » /ˈdʌbəljuː/ |
| K | « keï » /keɪ/ | X | « èks » /eks/ |
| L | « èl » /el/ | Y | « waï » /waɪ/ |
| M | « èm » /em/ | Z | « zèd » /zed/ (« zi » aux États-Unis) |

Les pièges pour un Français : **E** se dit « i », **I** se dit « aï », **A** se dit « eï », **G** se dit « dji » et **J** « djeï ». Pour deux lettres identiques, on dit *double* : *Emma* = « i, double èm, eï ».

>! *How do you spell your name?* (Comment s'écrit ton nom ?) — *J-A-M-E-S* = « djeï, eï, èm, i, èss ».

## Le -s final : trois prononciations
Le -s du pluriel (*cats*), de la 3e personne (*he looks*) et du génitif (*Jack's bike*) se prononce de trois façons :
| Son | Quand ? | Exemples |
|---|---|---|
| /s/ « ss » | après les sons /p/, /t/, /k/, /f/ et /θ/ (th) | *cats, books, shops, looks, Jack's, months* |
| /z/ « z » | après une voyelle ou les autres consonnes | *dogs, girls, trees, goes, plays, Jane's* |
| /ɪz/ « iz » (une syllabe en plus) | après les sons s, z, ch, sh et « dj » (comme dans *orange*) | *buses, boxes, watches, witches, oranges* |

## L'accent de mot
Dans un mot de plusieurs syllabes, une syllabe est **plus forte** que les autres (on dit qu'elle est accentuée). En français, on n'a pas cette habitude : entraîne-toi à « taper » sur la bonne syllabe.
- 1re syllabe : *FA-vou-rite* /ˈfeɪvrɪt/, *BEAU-ti-ful* /ˈbjuːtɪfəl/, *TEA-cher*, *FA-mi-ly*, *CHO-co-late*
- 2e syllabe : *ba-NA-na*, *com-PU-ter*, *to-MA-to*, *ho-TEL*
- *four-TEEN* (14) mais *FOR-ty* (40) : l'accent aide à ne pas confondre *-teen* et *-ty*.

## Voyelles courtes et voyelles longues
- Une **consonne doublée** annonce une voyelle **courte** : *hopping* /ˈhɒpɪŋ/ (« ho »), *dinner* /ˈdɪnə/, *rabbit*, *happy*.
- Une seule consonne suivie d'une voyelle donne souvent une voyelle **longue**, qui « dit son nom » : *hoping* /ˈhəʊpɪŋ/ (« heu-ou »), *diner* /ˈdaɪnə/.
- Le **e muet** final allonge la voyelle : *hat / hate* (« hatt » / « heït »), *kit / kite*, *hop / hope*, *cut / cute*.

## Les lettres muettes
Certaines lettres s'écrivent mais **ne se prononcent pas** : *light* (gh), *knife, knee* (k), *write* (w), *autumn* (n), *Wednesday* (« ouènnzdeï » : le premier d et le e du milieu sont muets), *island* (s), *listen* (t), *half* (l), *hour* (h).

## Les diphtongues
Une diphtongue, c'est **deux sons de voyelle qui glissent l'un vers l'autre** :
- /eɪ/ « eï » : *day, name, great* — /aɪ/ « aï » : *my, time, light* — /ɔɪ/ « oï » : *boy, toy*
- /əʊ/ « eu-ou » : *go, home, show* — /aʊ/ « aou » : *now, house, brown*
- /ɪə/ « ieu » : *here, ear* — /eə/ « èeu » : *hair, where, bear* — /ʊə/ « oueu » : *tour, pure* (beaucoup d'Anglais disent aujourd'hui *sure* avec un simple /ɔː/)

## Deux sons qui n'existent pas en français
- **th** : la langue entre les dents ! Sans voix /θ/ : *three, think, birthday* ; avec la voix /ð/ : *this, the, mother*.
- **h** : il se prononce, comme un souffle : *hat* ≠ *at*, *hair* ≠ *air*.

## L'intonation
- Question fermée (réponse *yes / no*) : la voix **monte** à la fin : *Are you ready?* ↗
- Question avec un mot en Wh- et phrase affirmative : la voix **descend** à la fin : *Where do you live?* ↘ *I live in Paris.* ↘

> **À retenir** : E = « i », I = « aï », A = « eï », G = « dji », J = « djeï ». Le -s final se dit /s/, /z/ ou /ɪz/. Une syllabe est accentuée dans chaque mot. Consonne doublée = voyelle courte. Certaines lettres sont muettes (*knife, light, Wednesday*). La voix monte à la fin d'une question fermée.
`,
      exercices: [
        { type: "qcm", question: "Comment se prononce la lettre **E** en anglais ?", choix: ["comme « i » /iː/", "comme « eu »", "comme « aï »", "comme « eï »"], reponse: 0, explication: "En anglais, la lettre **E** se dit « i » /iː/. C'est la lettre **I** qui se dit « aï » et la lettre **A** qui se dit « eï »." },
        { type: "qcm", question: "Ton correspondant épelle son prénom : « djeï – eï – èm – i – èss ». Quel est son prénom ?", choix: ["GAMES", "JAMES", "JAMIS", "GEMAS"], reponse: 1, explication: "« djeï » = **J**, « eï » = **A**, « èm » = **M**, « i » = **E**, « èss » = **S** : **JAMES**. Le G se dirait « dji »." },
        { type: "qcm", question: "Dans quel mot le -s final se prononce-t-il /ɪz/ (« iz ») ?", choix: ["watches", "cats", "dogs", "plays"], reponse: 0, explication: "Après le son « tch » (*watch*), le -s se prononce /ɪz/ et ajoute une syllabe : *wat-ches*. *Cats* : /s/ ; *dogs* et *plays* : /z/." },
        { type: "qcm", question: "Dans *he looks*, le -s se prononce...", choix: ["/z/", "/ɪz/", "/s/"], reponse: 2, explication: "*Look* se termine par le son /k/ : le -s se prononce donc **/s/** : /lʊks/." },
        { type: "vf", question: "Dans *Wednesday* (mercredi), on prononce toutes les lettres.", reponse: false, explication: "*Wednesday* se prononce /ˈwenzdeɪ/ (« ouènnzdeï ») : le premier **d** et le **e** du milieu (*Wed-nes-*) ne se prononcent pas." },
        { type: "saisie", question: "Quelle lettre est muette dans *knife* (couteau) ?", reponses: ["k"], explication: "Devant un n, le **k** est muet : *knife* /naɪf/, *knee* /niː/ (genou), *know* /nəʊ/." },
        { type: "qcm", question: "Quelle syllabe est accentuée (la plus forte) dans *banana* ?", choix: ["BA-na-na", "ba-NA-na", "ba-na-NA"], reponse: 1, explication: "On dit **ba-NA-na** /bəˈnɑːnə/. Attention : en français, on insiste plutôt sur la fin du mot, en anglais non." },
        { type: "qcm", question: "Quel mot contient le même son /aʊ/ (« aou ») que *house* ?", choix: ["horse", "show", "hose", "brown"], reponse: 3, explication: "*Brown* /braʊn/ contient la diphtongue **/aʊ/**, comme *house* et *now*. *Show* et *hose* contiennent /əʊ/ ; *horse* contient /ɔː/." },
        { type: "vf", question: "Dans la question *Are you ready?*, la voix monte à la fin.", reponse: true, explication: "C'est une question fermée (on répond *yes* ou *no*) : la voix **monte** à la fin. Dans *Where do you live?*, elle descend." },
        { type: "redaction", question: "Classe ces mots selon la prononciation de leur -s final (/s/, /z/ ou /ɪz/) et explique ta méthode : *books, girls, boxes, shops, trees, oranges*.", corrige: `Classement :
- **/s/** : *books, shops* ;
- **/z/** : *girls, trees* ;
- **/ɪz/** : *boxes, oranges*.

Méthode : on écoute le **dernier son** du mot avant le -s.
- *book* finit par /k/ et *shop* par /p/ : ce sont des sons « soufflés » sans vibration de la gorge, le -s se dit **/s/** ;
- *girl* finit par /l/ et *tree* par une voyelle : la gorge vibre, le -s se dit **/z/** ;
- *box* finit par le son « ks » et *orange* par le son « dj » : on ne peut pas coller un s directement, on ajoute une syllabe **/ɪz/** : *bo-xes*, *o-ran-ges*.` },
      ],
    },
    {
      id: "groupe-nominal",
      titre: "Le groupe nominal : a / an, the, l'adjectif, le pluriel, this / that, there is",
      theme: "Grammaire",
      cours: `
## Les articles a / an et the
- **a** devant un mot qui commence par un **son** de consonne : *a cat, a dog, a uniform* (« iou »), *a house*.
- **an** devant un mot qui commence par un **son** de voyelle : *an apple, an elephant, an orange, an hour* (le h de *hour* est muet).
- **the** = le, la, les : *the cat, the cats.* Il ne change jamais.

### Pas d'article (Ø) : quand on parle en général
- *I like cats.* (J'aime **les** chats, en général.) *Chocolate is good.*
- devant les noms de pays : *France, Scotland, Kenya* (mais *the UK, the USA*, qui sont des « unions »).
- devant les repas, les sports, les matières, les jours : *have breakfast, play football, I like English, on Monday*.

## L'adjectif : avant le nom, et invariable
- L'adjectif se place **toujours avant le nom** : *a black cat* (un chat noir).
- Il ne prend **jamais de -s** : *two black cats*.

## Le pluriel des noms
| Règle | Exemples |
|---|---|
| cas général : + s | *a book → books, a boy → boys* |
| après s, sh, ch, x : + es | *a bus → buses, a box → boxes, a witch → witches* |
| consonne + y → ies | *a baby → babies, a family → families* (mais *a boy → boys*) |
| f / fe → ves | *a knife → knives, a wolf → wolves* |
| pluriels irréguliers | *a child → children, a man → men, a woman → women, a foot → feet, a tooth → teeth, a mouse → mice, a person → people* |
| pluriel identique | *a sheep → sheep, a fish → fish* |

## This / these, that / those
| | Près de moi | Loin de moi |
|---|---|---|
| Singulier | **this** book (ce livre-ci) | **that** book (ce livre-là) |
| Pluriel | **these** books | **those** books |

>! *This is my pencil case.* (je le tiens) — *Look at those birds in the sky!* (loin, plusieurs)

## There is / there are (il y a)
- **There is** + singulier : *There is a cat in the garden.* (contraction : *There's*)
- **There are** + pluriel : *There are two cats in the garden.*
- Négation : *There isn't a bike. There aren't any trees.*
- Question : *Is there a park? — Yes, there is.* / *Are there any shops? — No, there aren't.*
- Combien ? *How many students are there in your class? — There are 26 students.*

### Erreurs fréquentes
- ✗ *an uniform* → *a uniform* (ça commence par le son « iou ») ; ✗ *a hour* → *an hour*.
- ✗ *two blacks cats* → *two black cats*.
- ✗ *There is three bedrooms* → *There are three bedrooms*.
- ✗ *I love the chocolate* (en général) → *I love chocolate*.

> **À retenir** : *a* devant un son de consonne, *an* devant un son de voyelle. L'adjectif va devant le nom et ne s'accorde pas. Pluriels à connaître : *children, men, women, feet, teeth, mice, people*. *This / these* = près, *that / those* = loin. *There is* + singulier, *there are* + pluriel.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *a* ou *an* : *___ elephant* (écris seulement ce qui manque)", reponses: ["an"], explication: "*Elephant* commence par un son de voyelle : **an elephant**." },
        { type: "qcm", question: "Quel groupe est correct ?", choix: ["an uniform", "a orange", "a apple", "an hour"], reponse: 3, explication: "Le h de *hour* ne se prononce pas : le mot commence par un son de voyelle, donc **an hour**. On dit *a uniform* (son « iou »), *an orange*, *an apple*." },
        { type: "saisie", question: "Donne le pluriel de *child* (enfant).", reponses: ["children"], explication: "*Child* a un pluriel irrégulier : **children**." },
        { type: "saisie", question: "Donne le pluriel de *box* (boîte).", reponses: ["boxes"], explication: "Après x (comme après s, sh, ch), on ajoute **-es** : *boxes*, qui se prononce avec une syllabe en plus." },
        { type: "qcm", question: "Traduis : « deux chats noirs »", choix: ["two black cats", "two blacks cats", "two cats blacks", "two cats black"], reponse: 0, explication: "L'adjectif se place **avant** le nom et reste **invariable** : *two black cats*." },
        { type: "saisie", question: "Complète avec *this*, *that*, *these* ou *those* : *Look at ___ birds, up there in the sky!* (écris seulement ce qui manque)", reponses: ["those"], explication: "Les oiseaux sont **loin** (*up there in the sky*) et ils sont **plusieurs** : **those** birds." },
        { type: "qcm", question: "*There ___ three bedrooms in my house.*", choix: ["is", "are", "have", "has"], reponse: 1, explication: "*Three bedrooms* est au pluriel : **There are**. *Il y a* ne se traduit jamais par *have* ou *has*." },
        { type: "vf", question: "Pour dire « J'adore le chocolat » (en général), on écrit *I love the chocolate.*", reponse: false, explication: "Quand on parle **en général**, on ne met pas d'article : *I love chocolate.* *The chocolate* désignerait un chocolat précis (*the chocolate on the table*)." },
        { type: "saisie", question: "Traduis : « Combien d'élèves y a-t-il dans ta classe ? » (élève = *student*)", reponses: ["How many students are there in your class", "How many pupils are there in your class"], explication: "*Combien de* + pluriel = **How many** ; *y a-t-il* = **are there** (question, donc on inverse) : *How many students are there in your class?*" },
        { type: "redaction", question: "*What's in your school bag?* Décris le contenu de ton cartable et de ta trousse en 6 à 8 phrases, avec *there is / there are*, *a / an*, des adjectifs de couleur et au moins deux pluriels.", corrige: `Exemple de réponse :

*In my school bag, there are four exercise books and two textbooks. There is a green pencil case. In my pencil case, there are three pencils, a blue pen, a red pen and an eraser. There is a ruler too, but there isn't a pair of scissors. There is an apple for break time! This bag is very heavy.*

Points vérifiés :
- *there is* + singulier, *there are* + pluriel ; une négation *there isn't* ;
- *a* / *an* : *a ruler*, *an eraser*, *an apple* (son de voyelle) ;
- adjectifs avant le nom, sans -s : *a green pencil case*, *a red pen* ;
- pluriels : *exercise books, pencils*.` },
      ],
    },
    {
      id: "nombres-heure-dates",
      titre: "Compter, dire l'heure et la date",
      theme: "Vocabulaire",
      cours: `
## Les nombres jusqu'à 100
| | | | |
|---|---|---|---|
| 1 one | 6 six | 11 eleven | 16 sixteen |
| 2 two | 7 seven | 12 twelve | 17 seventeen |
| 3 three | 8 eight | 13 thirteen | 18 eighteen |
| 4 four | 9 nine | 14 fourteen | 19 nineteen |
| 5 five | 10 ten | 15 fifteen | 20 twenty |

Les dizaines : *30 thirty, 40 forty* (sans u !), *50 fifty, 60 sixty, 70 seventy, 80 eighty, 90 ninety, 100 one hundred / a hundred*.

Entre les dizaines, on met un **trait d'union** : *21 twenty-one, 47 forty-seven, 99 ninety-nine*.

>! Ne confonds pas *thirteen* (13, accent sur « -TEEN ») et *thirty* (30, accent sur « THIR- »).

## Les nombres ordinaux (premier, deuxième...)
| | | |
|---|---|---|
| 1st first | 5th fifth | 9th ninth |
| 2nd second | 6th sixth | 10th tenth |
| 3rd third | 7th seventh | 12th twelfth |
| 4th fourth | 8th eighth | 20th twentieth |

Ensuite : *21st twenty-first, 22nd twenty-second, 23rd twenty-third, 31st thirty-first*. Les deux dernières lettres de l'abréviation (st, nd, rd, th) sont les deux dernières lettres du mot.

## Les jours, les mois et les saisons
- Jours : *Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday*.
- Mois : *January, February, March, April, May, June, July, August, September, October, November, December*.
- Jours et mois prennent **toujours une majuscule** en anglais.
- Saisons (sans majuscule) : *spring* (printemps), *summer* (été), *autumn* (automne ; *fall* aux États-Unis), *winter* (hiver).

## Dire la date
- On écrit : *Monday 4th May* ou *4 May* (Royaume-Uni), *May 4th* ou *May 4* (États-Unis).
- On dit : *the fourth of May* ou *May the fourth* (Royaume-Uni), *May fourth* (États-Unis).
- *What's the date today? — It's Tuesday, the twentieth of October.*
- Les années : *1989* = *nineteen eighty-nine* ; *2024* = *twenty twenty-four* ; *2008* = *two thousand and eight*.

## Les prépositions de temps
- **on** + jour ou date : *on Monday, on 4th May, on my birthday*
- **in** + mois, année, saison, partie de la journée : *in May, in 2026, in summer, in the morning, in the afternoon, in the evening*
- **at** + heure et quelques expressions : *at eight o'clock, at night, at the weekend* (Royaume-Uni)

## Dire l'heure
*What time is it?* (Quelle heure est-il ?)
| Heure | En anglais |
|---|---|
| 7 h 00 | *It's seven o'clock.* |
| 7 h 15 | *It's quarter past seven.* (7 heures et quart) |
| 7 h 30 | *It's half past seven.* (7 heures et demie) |
| 7 h 45 | *It's quarter to eight.* (8 heures moins le quart) |

En anglais, on compte souvent sur 12 heures : *a.m.* le matin, *p.m.* l'après-midi et le soir (*3 p.m.* = 15 h). On peut aussi dire l'heure « comme sur une montre » : *seven fifteen, seven thirty*. Pour les autres minutes : *five past one* (1 h 05), *twenty to three* (2 h 40).

> **À retenir** : trait d'union entre dizaine et unité (*forty-seven*). Ordinaux : *first, second, third*, puis -th (*fourth, fifth, twelfth*). Majuscule aux jours et aux mois. *on* + jour, *in* + mois ou année, *at* + heure. *half past seven* = 7 h 30 ; *quarter to eight* = 7 h 45.
`,
      exercices: [
        { type: "saisie", question: "Écris en lettres : 47", reponses: ["forty-seven"], explication: "**forty-seven** : attention, *forty* s'écrit sans u (alors que *four* en a un), et on met un trait d'union entre la dizaine et l'unité." },
        { type: "qcm", question: "Quel nombre est *fifteen* ?", choix: ["50", "5", "15", "55"], reponse: 2, explication: "La terminaison **-teen** indique les nombres de 13 à 19 : *fifteen* = **15**. *Fifty* = 50." },
        { type: "saisie", question: "Écris en lettres le nombre ordinal qui correspond à 3 (exemple : 1 → *first*).", reponses: ["third"], explication: "3e = **third** (3rd). Les trois premiers sont irréguliers : *first, second, third* ; ensuite on ajoute -th : *fourth, fifth...*" },
        { type: "saisie", question: "Il est 7 h 30. Complète : *It's ___.* (écris seulement ce qui manque)", reponses: ["half past seven", "seven thirty", "It is half past seven", "It is seven thirty"], explication: "7 h 30 = **half past seven** (la moitié après sept heures). On peut aussi dire *seven thirty*." },
        { type: "qcm", question: "Comment dit-on 8 h 45 ?", choix: ["quarter past eight", "half past eight", "quarter to nine", "quarter to eight"], reponse: 2, explication: "8 h 45 = 9 heures moins le quart = **quarter to nine**. *Quarter past eight* serait 8 h 15." },
        { type: "vf", question: "En anglais, les jours et les mois prennent une majuscule : *Monday, July*.", reponse: true, explication: "Oui, toujours : *on Monday*, *in July*. C'est une différence avec le français (lundi, juillet)." },
        { type: "qcm", question: "Complète : *My birthday is ___ June.*", choix: ["on", "at", "in", "the"], reponse: 2, explication: "Devant un **mois** seul, on met **in** : *in June*. Avec une date précise, on dirait *on 12th June*." },
        { type: "saisie", question: "Comment dit-on l'année 2026 à l'oral ? Écris-la en lettres.", reponses: ["twenty twenty-six", "two thousand and twenty-six", "two thousand twenty-six"], explication: "On dit le plus souvent **twenty twenty-six** (comme *twenty twenty-four* pour 2024). *Two thousand and twenty-six* est correct aussi." },
        { type: "saisie", question: "Écris en lettres, comme on la dit en anglais britannique, la date du 1er mai.", reponses: ["the first of May", "first of May", "May the first"], explication: "Au Royaume-Uni, on dit **the first of May** ou *May the first*. L'ordinal *first* est obligatoire (pas *one*)." },
        { type: "redaction", question: "Présente en 6 phrases les anniversaires de ta famille : pour chaque personne, son âge et la date de son anniversaire écrite en lettres (exemple : *My mum is forty-two. Her birthday is on the ninth of March.*).", corrige: `Exemple de réponse :

*My name is Lina and I'm eleven. My birthday is on the twenty-first of November. My brother Adam is fourteen: his birthday is on the third of July, in summer. My mum is forty-two and her birthday is on the ninth of March. My dad is forty-five. His birthday is on the twelfth of December, just before Christmas!*

Points vérifiés :
- âges avec be, en lettres et avec trait d'union : *forty-two, forty-five* ;
- dates avec **on** et des ordinaux : *on the twenty-first of November*, *on the twelfth of December* (attention à l'orthographe de *twelfth*) ;
- majuscules aux mois : *November, July, March, December* ;
- possessifs *his / her* bien choisis.` },
      ],
    },
    {
      id: "pronoms-possessifs-genitif",
      titre: "Pronoms, possessifs et génitif ('s)",
      theme: "Grammaire",
      cours: `
## Pronoms sujets, pronoms compléments et possessifs
| Sujet | Complément | Déterminant possessif | Pronom possessif (A1+) |
|---|---|---|---|
| I | me | my | mine |
| you | you | your | yours |
| he | him | his | his |
| she | her | her | hers |
| it | it | its | — |
| we | us | our | ours |
| they | them | their | theirs |

- Le **pronom sujet** fait l'action : *She plays tennis.*
- Le **pronom complément** se place après le verbe ou une préposition : *I like him. Look at me! Come with us.*
- Le **déterminant possessif** se place devant le nom : *my bike, our house*.
- Le **pronom possessif** remplace le nom : *This bike is mine.* (C'est le mien.)

## His ou her ? On regarde le POSSESSEUR
En français, « sa » s'accorde avec l'objet (*sa mère*). En anglais, on regarde **à qui** est l'objet :
- *Tom and **his** mother* (la mère de Tom → his) ;
- *Emma and **her** father* (le père d'Emma → her) ;
- *The dog is eating **its** dinner.* (une chose ou un animal → its).

Attention à ne pas confondre :
- *its* (son, à un animal / une chose) et *it's* (= it is) ;
- *their* (leur), *there* (là, *there is*) et *they're* (= they are) ;
- *your* (ton, votre) et *you're* (= you are).

## Le génitif ('s) : le possesseur d'abord
Pour dire « le vélo de Jack », on met le **possesseur en premier**, suivi de **'s** : *Jack's bike*.
- *Harry's wand* (la baguette de Harry), *Greg's friend*, *my sister's room*, *William's children*.
- Après un pluriel en -s, on ajoute seulement l'apostrophe : *my parents' car* (la voiture de mes parents).
- Après un pluriel irrégulier, on ajoute 's : *the children's toys*.

## Présenter quelqu'un
- *This is my friend Tom.* (Voici mon ami Tom.) — *These are my parents.*
- *And that is my teacher, Mr Smith.*
- *Who's that? — That's Lisa's brother.*

> **À retenir** : *his* si le possesseur est un garçon ou un homme, *her* si c'est une fille ou une femme, *its* pour un animal ou une chose. Génitif : possesseur + 's + objet (*Jack's bike*), *parents'* au pluriel. Après un verbe : *me, him, her, us, them*.
`,
      exercices: [
        { type: "qcm", question: "Complète : *Paul and ___ sister.* (sa sœur, à lui)", choix: ["her", "its", "his", "their"], reponse: 2, explication: "Le possesseur est Paul, un garçon : **his** sister. En anglais, on ne regarde pas l'objet possédé (la sœur) mais le possesseur." },
        { type: "qcm", question: "Complète : *Emma loves ___ dog.* (son chien, à elle)", choix: ["her", "his", "its", "hers"], reponse: 0, explication: "Le possesseur est Emma : **her** dog. *Hers* est un pronom (*The dog is hers*), il ne se place pas devant un nom." },
        { type: "saisie", question: "Remplace *Tom* par un pronom complément : *I like Tom.*", reponses: ["I like him", "him"], explication: "Après le verbe, *Tom* devient le pronom complément **him** : *I like him.*" },
        { type: "saisie", question: "Traduis avec le génitif : « la baguette de Harry »", reponses: ["Harry's wand"], explication: "Possesseur + **'s** + objet : *Harry's wand*." },
        { type: "saisie", question: "Traduis avec le génitif : « la chambre de mes parents »", reponses: ["my parents' bedroom", "my parents' room"], explication: "*Parents* est un pluriel en -s : on ajoute **seulement l'apostrophe** : *my parents' bedroom*." },
        { type: "vf", question: "La phrase *The dog is eating it's dinner.* est correcte.", reponse: false, explication: "*It's* veut dire *it is*. Pour « son repas » (celui du chien), il faut le possessif **its**, sans apostrophe : *The dog is eating its dinner.*" },
        { type: "saisie", question: "Complète avec un déterminant possessif : *We love ___ new house.* (écris seulement ce qui manque)", reponses: ["our"], explication: "Le possesseur est *we* : **our** new house (notre nouvelle maison)." },
        { type: "qcm", question: "*These are my cousins. ___ names are Jack and Amy.*", choix: ["There", "They're", "Them", "Their"], reponse: 3, explication: "On veut dire « **leurs** noms » : **Their**. *There* = là, *they're* = they are, *them* = eux (complément)." },
        { type: "saisie", question: "Complète avec un pronom possessif : *This pen isn't mine, it's ___.* (le tien ; écris seulement ce qui manque)", reponses: ["yours"], explication: "« Le tien » = **yours**. Le pronom possessif remplace *your pen*." },
        { type: "redaction", question: "Tu montres une photo de famille à ton correspondant. Écris 6 phrases pour présenter les personnes avec *This is / These are*, *his / her / their* et au moins deux génitifs ('s).", corrige: `Exemple de réponse :

*This is my family at my grandma's house. These are my parents, Karim and Julie. Their car is behind them: it's a red car. This is my sister Nour with her cat, Moka. And this is my uncle Paul and his son Léo. Léo is my cousin. Léo's favourite toy is a big dinosaur!*

Points vérifiés :
- *This is* + une personne, *These are* + plusieurs ;
- possessifs choisis selon le possesseur : *her cat* (Nour), *his son* (Paul), *their car* (les parents) ;
- génitifs : *my grandma's house*, *Léo's favourite toy* ;
- pronom complément après une préposition : *behind them*.` },
      ],
    },
    {
      id: "present-simple",
      titre: "Le présent simple et le -s de la 3e personne",
      theme: "Grammaire",
      cours: `
## À quoi sert le présent simple ?
Il sert à parler de ce qui est **habituel**, de ce qu'on **aime** et de ce qui est **toujours vrai** :
- *I go to school by bus.* (habitude)
- *I like pizza.* (goût)
- *Cows eat grass.* (vérité générale)

Mots indices : *every day, every week, on Saturdays, at the weekend, after school, in the morning, always, often, sometimes, never*.

## La conjugaison
| Sujet | Affirmation | Négation |
|---|---|---|
| I / you / we / they | I **play** | I **don't** play (do not) |
| he / she / it | she **plays** | she **doesn't** play (does not) |

C'est simple : le verbe ne change qu'à la **3e personne du singulier** (he, she, it, ou un nom comme *my brother, Tom, the dog*), où il prend un **-s**.

## L'orthographe du -s
- cas général : + s : *he sleeps, she rides her bike, it looks*.
- après s, sh, ch, x, o : + **es** : *she brushes, he watches, he goes, she does*.
- consonne + y : **-ies** : *he tidies, she studies, it flies* (mais voyelle + y : *he plays*).
- un verbe irrégulier : *have → has*.

## La négation : don't / doesn't
- *I don't like fish.* — *Tom doesn't like fish.*
- Avec *doesn't*, le verbe perd son -s : ✗ *she doesn't lives* → *she doesn't **live***. C'est *does* qui porte la marque de la 3e personne.

## La question : do / does (A1+)
- *Do you like football? — Yes, I do. / No, I don't.*
- *Does she live in London? — Yes, she does. / No, she doesn't.*
- *Where do you live? What does he eat for breakfast?*

## Dire ce qu'on aime
*I like / love / hate* + nom ou verbe en -ing : *I love chocolate. I like reading. She hates getting up early.*

Les petits mots de fréquence se placent **avant le verbe** : *I often play tennis. He never eats meat.* Mais ils se placent **après be** : *I'm always happy on Saturdays. She is often late.*

> **À retenir** : au présent simple, **-s** avec he, she, it : *he plays, she watches, he tidies, she has*. Négation : *don't* / *doesn't* + verbe sans -s. Question : *Do* / *Does* + sujet + verbe sans -s.
`,
      exercices: [
        { type: "saisie", question: "Complète au présent simple : *She ___ (ride) her bike to school.* (écris seulement ce qui manque)", reponses: ["rides"], explication: "*She* → on ajoute **-s** : *she rides her bike*." },
        { type: "saisie", question: "Complète au présent simple : *My dad ___ (watch) TV in the evening.* (écris seulement ce qui manque)", reponses: ["watches"], explication: "*My dad* = he ; après **ch**, on ajoute **-es** : *watches*." },
        { type: "saisie", question: "Complète au présent simple : *Tom ___ (tidy) his bedroom on Saturdays.* (écris seulement ce qui manque)", reponses: ["tidies"], explication: "Consonne + y → **-ies** : *tidy → tidies*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["He gos to school.", "He goes to school.", "He go to school.", "He goings to school."], reponse: 1, explication: "Après o, on ajoute **-es** : *go → goes*. Même chose pour *do → does*." },
        { type: "saisie", question: "Mets à la forme négative : *She lives in London.*", reponses: ["She doesn't live in London", "She does not live in London"], explication: "Avec *she*, la négation est **doesn't** (does not) + verbe **sans -s** : *She doesn't live in London.*" },
        { type: "vf", question: "La phrase *He doesn't likes pizza.* est correcte.", reponse: false, explication: "Après *doesn't*, le verbe reste à la base, sans -s : **He doesn't like pizza.** Le -s est déjà dans *does*." },
        { type: "saisie", question: "Pose la question : *you / like / football* (« Est-ce que tu aimes le foot ? »)", reponses: ["Do you like football", "Do you like soccer"], explication: "Question au présent simple : **Do** + sujet + verbe : *Do you like football?*" },
        { type: "qcm", question: "*Does your sister play the piano?* — *Yes, she ___.*", choix: ["plays", "is", "do", "does"], reponse: 3, explication: "La réponse courte reprend l'auxiliaire de la question : **Yes, she does.** (négation : *No, she doesn't.*)" },
        { type: "qcm", question: "*My friends ___ to the swimming pool every Wednesday.*", choix: ["goes", "go", "going", "is going"], reponse: 1, explication: "*My friends* = they (pluriel) : pas de -s : **go**. *Every Wednesday* indique une habitude, donc présent simple." },
        { type: "redaction", question: "Décris en 6 à 8 phrases la journée habituelle d'un(e) camarade ou d'un membre de ta famille (utilise *he* ou *she*). Mets au moins une négation.", corrige: `Exemple de réponse :

*My sister Jade gets up at seven o'clock every day. She has a shower and she has breakfast with my mum. She goes to school by bus. She has lunch at the school canteen, but she doesn't like the food! After school, she does her homework and she watches cartoons. In the evening, she plays with our cat. She goes to bed at nine o'clock.*

Points vérifiés :
- le **-s** à chaque verbe : *gets up, has, goes, does, watches, plays* (attention aux orthographes : *goes, does, watches*) ;
- la négation : *she doesn't like* (verbe sans -s) ;
- des repères de temps : *every day, after school, in the evening, at nine o'clock* ;
- des connecteurs : *and, but*.` },
      ],
    },
    {
      id: "vie-quotidienne",
      titre: "La maison, la journée, les repas, les loisirs et les animaux",
      theme: "Vocabulaire",
      cours: `
## La maison (the house)
*a house* (maison), *a flat* (appartement ; *an apartment* aux États-Unis). Les pièces : *a bedroom* (chambre), *a living room* (salon), *a kitchen* (cuisine), *a bathroom* (salle de bains). Et aussi : *a garden* (jardin), *a door* (porte), *a window* (fenêtre), *a wall* (mur).

## Situer un objet : les prépositions de lieu
*in* (dans), *on* (sur), *under* (sous), *above / over* (au-dessus de), *next to* (à côté de), *between* (entre), *in front of* (devant), *behind* (derrière).

>! *Where's my phone? — It's on your desk, next to your pencil case. The cat is under the bed, between the two chairs.*

## La journée (daily routine)
*to wake up* (se réveiller), *to get up* (se lever), *to have a shower* (se doucher), *to brush one's teeth* (se brosser les dents), *to go to school*, *to do one's homework* (faire ses devoirs), *to go to bed* (se coucher).

## Les repas (meals)
- **have** + repas, sans article : *have breakfast* (petit-déjeuner), *have lunch* (déjeuner), *have dinner* (dîner).
- *I'm hungry* (j'ai faim), *I'm thirsty* (j'ai soif) ; *meat, fish, bread, cheese, cake, sugar*.
- *vegetables* (légumes) : *a tomato, a cucumber, a carrot* ; *fruit* : *an apple, a pear* (poire), *an apricot* (abricot), *a pineapple* (ananas).

## Les loisirs, les sports et les jeux
- lieux : *the cinema, the swimming pool* (piscine), *the stadium, the gym, the skating rink* (patinoire), *the library* (bibliothèque).
- **play** + sport, **sans article** : *I play football.* — **play the** + instrument : *I play the piano / the guitar.* — **go** + -ing : *I go swimming.*
- jeux : *a board game* (jeu de société), *cards, dice* (dés), *a player*, *It's your turn!* (c'est ton tour !), *to win* (gagner), *to lose* (perdre).

## Les animaux et les métiers
- *a dog, a cat, a rabbit* (lapin), *a guinea pig* (cochon d'Inde), *a horse, a mouse / two mice* ; à la ferme : *a cow, a pig, a sheep / two sheep, a hen* (poule) ; sauvages : *a fox* (renard), *an owl* (hibou), *a snake, a spider* (araignée).
- *a teacher, a doctor* (médecin), *a dentist, a vet* (vétérinaire), *a pilot, a driver, an engineer, a farmer* (agriculteur), *a police officer, an actor / an actress*.

Attention : devant un métier, l'anglais met **a / an** : *She's a doctor.* (Elle est médecin.)

> **À retenir** : prépositions de lieu *in, on, under, next to, between, in front of, behind*. *have breakfast / lunch / dinner*. *play football* (sport, sans article) mais *play the piano* (instrument). Devant un métier : *a / an* (*He's an engineer*).
`,
      exercices: [
        { type: "qcm", question: "Dans quelle pièce prépare-t-on les repas ?", choix: ["the kitchen", "the bathroom", "the bedroom", "the garden"], reponse: 0, explication: "La cuisine se dit **the kitchen**. *Bathroom* = salle de bains, *bedroom* = chambre, *garden* = jardin." },
        { type: "saisie", question: "Traduis : « Le chat est sous le lit. »", reponses: ["The cat is under the bed", "The cat's under the bed"], explication: "*Sous* = **under** : *The cat is under the bed.*" },
        { type: "qcm", question: "La lampe est entre le lit et la fenêtre : *The lamp is ___ the bed and the window.*", choix: ["between", "under", "in", "behind"], reponse: 0, explication: "*Entre* = **between** (entre deux choses). *Under* = sous, *behind* = derrière." },
        { type: "saisie", question: "Comment dit-on « prendre le petit-déjeuner » ?", reponses: ["have breakfast", "to have breakfast", "eat breakfast", "to eat breakfast", "have my breakfast"], explication: "On dit **have breakfast**, sans article : *I have breakfast at 7.* De même : *have lunch, have dinner*." },
        { type: "vf", question: "On dit *I play the guitar* mais *I play football* (sans *the*).", reponse: true, explication: "Oui : **play the** + instrument (*the guitar, the piano*), mais **play** + sport sans article (*football, tennis*)." },
        { type: "saisie", question: "Traduis : « Elle est médecin. »", reponses: ["She is a doctor", "She's a doctor"], explication: "Devant un métier, l'anglais met l'article **a** : *She's a doctor.* Le français, lui, n'en met pas." },
        { type: "qcm", question: "Quel animal est un *guinea pig* ?", choix: ["un cochon d'Inde", "un cochon", "une pintade", "un hamster"], reponse: 0, explication: "Un *guinea pig* est un **cochon d'Inde** (cobaye), même si le mot *pig* veut dire cochon." },
        { type: "qcm", question: "Pendant un jeu de société, ton ami te dit *It's your turn!* Que veut-il dire ?", choix: ["Tu as gagné !", "Tourne à droite !", "Tu as perdu !", "C'est ton tour !"], reponse: 3, explication: "*It's your turn!* = **C'est ton tour !** (à toi de jouer). *To win* = gagner, *to lose* = perdre." },
        { type: "saisie", question: "Complète : *I'm ___! Can I have a glass of water, please?* (j'ai soif ; écris seulement ce qui manque)", reponses: ["thirsty"], explication: "*Avoir soif* = **to be thirsty** : *I'm thirsty.* Avoir faim : *to be hungry*." },
        { type: "redaction", question: "Décris ta maison ou ton appartement en 6 à 8 phrases : les pièces, puis ta chambre et la place des objets (au moins quatre prépositions de lieu).", corrige: `Exemple de réponse :

*I live in a flat in Toulouse. There are five rooms: a living room, a kitchen, a bathroom and two bedrooms. My bedroom is small but cosy. My bed is next to the window. There is a desk in front of the bed, and my computer is on the desk. My cat sleeps under my bed! There are posters of football players above my desk.*

Points vérifiés :
- vocabulaire de la maison : *flat, living room, kitchen, bathroom, bedroom* ;
- *there is / there are* bien accordés ;
- prépositions de lieu : *next to, in front of, on, under, above* ;
- adjectifs avant le nom ou après be : *My bedroom is small*.` },
      ],
    },
    {
      id: "questions-mots-wh",
      titre: "Poser des questions : yes / no et mots en Wh-",
      theme: "Grammaire",
      cours: `
## Les questions fermées (réponse yes / no)
On les forme avec un **auxiliaire placé avant le sujet** :
| Verbe de la phrase | Question | Réponses courtes |
|---|---|---|
| be | *Are you Scottish?* | *Yes, I am. / No, I'm not.* |
| have got | *Has she got a pet?* | *Yes, she has. / No, she hasn't.* |
| can | *Can you swim?* | *Yes, I can. / No, I can't.* |
| autre verbe (A1+) | *Do you like pizza? Does he play rugby?* | *Yes, I do. / No, he doesn't.* |

Dans la réponse courte, on reprend l'**auxiliaire** de la question, jamais le verbe : *Do you like cats? — Yes, I do* (pas ✗ *Yes, I like*).

## Les mots interrogatifs en Wh- (et How)
| Mot | Sens | Exemple |
|---|---|---|
| *What* | que, quoi, quel | *What's your name? What colour is your bag?* |
| *Who* | qui | *Who is your best friend?* |
| *Where* | où | *Where do you live? Where is Edinburgh?* |
| *When* | quand | *When is your birthday?* |
| *What time* | à quelle heure | *What time is it?* |
| *Why* (A1+) | pourquoi | *Why are you sad? — Because I'm tired.* |
| *How* (A1+) | comment | *How are you?* |
| *How old* | quel âge | *How old are you? — I'm eleven.* |
| *How many* | combien (+ pluriel) | *How many brothers have you got?* |

À *Why?* on répond avec **because** (parce que).

## L'ordre des mots
**Mot interrogatif + auxiliaire + sujet + reste de la phrase** :
- *Where* + *do* + *you* + *live?*
- *What* + *is* + *your favourite colour?*
- *How many pets* + *have* + *you* + *got?*

>! Pour trouver la question à partir d'une réponse : *I live in Glasgow.* → l'information est un **lieu** → *Where do you live?*

### Erreurs fréquentes
- ✗ *Where you live?* → *Where **do** you live?*
- ✗ *How many years have you?* → *How old are you?*
- ✗ *What is your favourite colour is?* → un seul verbe : *What is your favourite colour?*

> **À retenir** : question fermée = auxiliaire + sujet (*Are you...? Can you...? Do you...?*), réponse courte avec l'auxiliaire. *What* (quoi), *who* (qui), *where* (où), *when* (quand), *why* (pourquoi → *because*), *how* (comment), *how old* (quel âge), *how many* (combien).
`,
      exercices: [
        { type: "qcm", question: "Quel mot interrogatif sert à demander un lieu ?", choix: ["When", "Who", "Where", "Why"], reponse: 2, explication: "**Where** = où. *When* = quand, *who* = qui, *why* = pourquoi." },
        { type: "saisie", question: "Traduis : « Quel âge as-tu ? »", reponses: ["How old are you"], explication: "En anglais, on demande « combien vieux es-tu » : **How old are you?** (avec be, comme pour dire son âge)." },
        { type: "qcm", question: "*___ is your birthday?* — *It's on 2nd March.*", choix: ["Where", "Who", "Why", "When"], reponse: 3, explication: "La réponse est une date : on demande **quand** → **When** is your birthday?" },
        { type: "saisie", question: "Trouve la question : *— My name is Oliver.*", reponses: ["What's your name", "What is your name"], explication: "On demande le nom : **What's your name?** (What is your name?)" },
        { type: "saisie", question: "Trouve la question (« Où habites-tu ? ») : *— I live in Glasgow.*", reponses: ["Where do you live"], explication: "Le verbe *live* n'est pas un auxiliaire : il faut **do** : *Where do you live?*" },
        { type: "qcm", question: "*Why are you sad?* — ...", choix: ["Yes, I am.", "Because my cat is ill.", "In London.", "At eight o'clock."], reponse: 1, explication: "À *Why?* (pourquoi), on répond par **because** (parce que) : *Because my cat is ill.*" },
        { type: "vf", question: "*Where you live?* est une question correcte.", reponse: false, explication: "Il manque l'auxiliaire **do** : *Where do you live?* L'ordre est : mot interrogatif + auxiliaire + sujet + verbe." },
        { type: "saisie", question: "Pose la question avec can : *your sister / swim* (« Est-ce que ta sœur sait nager ? »)", reponses: ["Can your sister swim"], explication: "Avec *can*, on inverse simplement : **Can your sister swim?** Pas de *do* avec *can*." },
        { type: "qcm", question: "*Who* sert à demander...", choix: ["une personne", "une chose", "un moment", "une raison"], reponse: 0, explication: "**Who** = qui : on demande une personne. *What* = quoi (une chose), *when* = quand, *why* = pourquoi." },
        { type: "redaction", question: "Tu vas interviewer un(e) élève anglais(e) qui arrive dans ta classe. Écris 6 questions variées (au moins quatre mots interrogatifs différents et une question fermée), puis invente ses réponses.", corrige: `Exemple de réponse :

1. *What's your name?* — *My name is Harry.*
2. *How old are you?* — *I'm twelve.*
3. *Where do you live?* — *I live in Brighton, in the south of England.*
4. *When is your birthday?* — *It's on the fifth of June.*
5. *Have you got any brothers or sisters?* — *Yes, I have. I've got a little sister.*
6. *Why do you like French?* — *Because I love French cheese and French films!*

Points vérifiés :
- mots interrogatifs variés : *what, how old, where, when, why* ;
- ordre mot interrogatif + auxiliaire + sujet : *Where do you live?* ;
- question fermée avec réponse courte : *Have you got...? — Yes, I have.* ;
- réponse à *why* avec *because*.` },
      ],
    },
    {
      id: "can-must-imperatif",
      titre: "Can, must et l'impératif : consignes et règles du jeu",
      theme: "Grammaire",
      cours: `
## L'impératif : donner une consigne
L'impératif sert à donner un ordre ou une consigne. On prend le **verbe seul, sans sujet** :
- en classe : *Listen! Look! Open your books. Come to the board. Sit down. Stand up. Read the text.*
- dans un jeu : *Roll the dice.* (Lance le dé.) *Move your pawn.* (Avance ton pion.)

À la **forme négative** : **Don't** + verbe : *Don't forget your textbook! Don't walk on the grass! Don't run!*

Pour proposer : **Let's** + verbe (allons, faisons) : *Let's play! Let's go!*

>! Sur les panneaux, l'interdiction s'écrit souvent avec **No** + verbe en -ing : *No running! No cheating!* Dans le métro de Londres, on entend *Mind the gap!* (Attention à l'espace entre le train et le quai.)

## Can : savoir faire, pouvoir
**Can** exprime :
- une **capacité** : *I can swim.* (Je sais nager.) *She can play the piano.*
- une **permission** : *Can I go to the toilet, please?* (Est-ce que je peux... ?)
- une **possibilité** : *We can play in the garden.*

Règles de *can* :
- il est **le même à toutes les personnes** : *he can* (jamais ✗ *he cans*) ;
- il est suivi du **verbe seul**, sans *to* : *I can swim* (pas ✗ *I can to swim*) ;
- négation : **can't** (cannot) : *I can't swim.* ;
- question : on inverse : *Can you swim? — Yes, I can. / No, I can't.*

## Must / mustn't : l'obligation et l'interdiction (A1+)
- **must** = il faut, devoir : *You must wear a uniform. Players must wait their turn.*
- **mustn't** (must not) = il ne faut pas, interdit : *You mustn't cheat. You mustn't run in the corridor.*
- Comme *can*, *must* ne change jamais et se construit avec le verbe seul : *She must go.*

## Les règles d'un jeu
>! *Roll the dice and move your pawn. If you land on a ladder, you can go up. If you land on a snake, you must go down. You mustn't cheat! The first player at square 100 wins.* (le jeu *Snakes and Ladders*, très populaire au Royaume-Uni)

> **À retenir** : impératif = verbe seul (*Listen!*), négatif = *Don't* + verbe (*Don't run!*). *Can* = savoir, pouvoir ; *can't* = ne pas pouvoir. *Must* = obligation, *mustn't* = interdiction. *Can* et *must* ne prennent jamais de -s ni de *to*.
`,
      exercices: [
        { type: "qcm", question: "Que veut dire la consigne *Stand up!* ?", choix: ["Lève-toi !", "Assieds-toi !", "Écoute !", "Range tes affaires !"], reponse: 0, explication: "*Stand up!* = **Lève-toi !** Le contraire est *Sit down!* (Assieds-toi !)." },
        { type: "saisie", question: "Mets à l'impératif négatif : *Run in the corridor.*", reponses: ["Don't run in the corridor", "Do not run in the corridor"], explication: "À la forme négative : **Don't** + verbe : *Don't run in the corridor!*" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["She cans swim.", "She can swims.", "She can to swim.", "She can swim."], reponse: 3, explication: "*Can* ne prend jamais de -s, et le verbe qui suit reste seul, sans -s ni *to* : **She can swim.**" },
        { type: "saisie", question: "Traduis : « Je ne sais pas nager. »", reponses: ["I can't swim", "I cannot swim"], explication: "*Savoir nager* = *can swim* ; à la négation : **I can't swim** (ou *I cannot swim*)." },
        { type: "vf", question: "Dans le métro de Londres, *Mind the gap!* signifie « Attention à l'espace entre le train et le quai ! ».", reponse: true, explication: "Oui : *mind* = faire attention à, *the gap* = l'espace, le trou. C'est une annonce célèbre du métro londonien (*the Tube*)." },
        { type: "qcm", question: "Sur un panneau, tu lis : *No cheating!* Que veut-il dire ?", choix: ["Interdit de tricher !", "Pas de bruit !", "Pas de chat !", "Ne pas courir !"], reponse: 0, explication: "*To cheat* = tricher. *No* + verbe en -ing exprime une interdiction : **Interdit de tricher !** (*No running!* = Ne pas courir !)" },
        { type: "saisie", question: "Complète avec *must* ou *mustn't* : *You ___ cheat: it's against the rules!* (écris seulement ce qui manque)", reponses: ["mustn't", "must not"], explication: "Tricher est contre les règles : c'est **interdit** → **mustn't** (must not)." },
        { type: "saisie", question: "Demande poliment en anglais : « Est-ce que je peux ouvrir la fenêtre, s'il vous plaît ? »", reponses: ["Can I open the window please", "Can I open the window", "Please can I open the window", "May I open the window please", "May I open the window", "Could I open the window please", "Could I open the window"], explication: "Pour demander la permission : **Can I** + verbe : *Can I open the window, please?*" },
        { type: "qcm", question: "*Can you play chess?* — *No, ___.*", choix: ["I can", "I can't", "I don't", "I'm not"], reponse: 1, explication: "La réponse courte reprend **can** : *No, I can't.* (*Yes, I can* à l'affirmative.)" },
        { type: "redaction", question: "Écris en 6 à 8 phrases les règles de ta cour de récréation ou d'un jeu que tu connais. Utilise l'impératif (positif et négatif), *can*, *must* et *mustn't*.", corrige: `Exemple de réponse (le jeu *Musical chairs*, les chaises musicales) :

*Put the chairs in a circle. For ten players, you need nine chairs. Listen to the music and walk around the chairs. Don't sit down when the music is on! When the music stops, you must sit on a chair. You can't push the other players and you mustn't cheat. The player without a chair is out. The last player on a chair wins!*

Points vérifiés :
- impératif positif (*Put, Listen, walk*) et négatif (*Don't sit down*) ;
- *must* pour l'obligation, *mustn't* pour l'interdiction ;
- *can't* pour ce qui n'est pas permis ;
- verbes toujours sans *to* après *can* et *must*.` },
      ],
    },
    {
      id: "decouverte-be-ing-preterit",
      titre: "Pour aller plus loin : be + -ing, was / were et le prétérit",
      theme: "Grammaire",
      cours: `
> En 6e, le programme demande surtout de **reconnaître** ces formes dans les textes. Tu les étudieras en détail en 5e.

## Be + -ing : ce qui se passe en ce moment
Pour décrire une action **en train de se dérouler**, on utilise **be + verbe en -ing** :
- *Look! He is wearing a kilt.* (Il porte un kilt, en ce moment.)
- *They are making a blueberry pie.* (Ils sont en train de faire une tarte aux myrtilles.)
- *I'm not watching TV, I'm reading.*

Orthographe : *make → making* (le e tombe), *swim → swimming, run → running* (la consonne double), *play → playing*.

Mots indices : *now, at the moment, Look!, Listen!*

### Un projet prévu
Be + -ing sert aussi à parler d'un **projet déjà organisé** : *I'm visiting my family this weekend. He is going to the basketball game tonight.*

## Was / were : le passé de be
| Présent | Passé |
|---|---|
| I am / he, she, it is | I **was** / he, she, it **was** |
| you, we, they are | you, we, they **were** |

*I was in London last summer. We were very happy. It was great!*

## Le prétérit : raconter ce qui est fini
Pour raconter un événement **terminé**, on utilise le **prétérit** :
- verbes **réguliers** : verbe + **-ed** : *play → played, visit → visited, watch → watched, like → liked*.
- verbes **irréguliers** (à apprendre) : *go → went, see → saw, do → did, have → had, eat → ate, make → made*.
- La forme est la même à toutes les personnes : *I went, she went, they went*.

>! *Last weekend, I visited my grandparents. We went to the beach and I saw a seal! In the evening, I did my homework. It was a great weekend.*

Mots indices : *yesterday* (hier), *last weekend, last summer, last year, two days ago* (il y a deux jours).

## Dire ce qu'on veut faire
- *I want to* + verbe : *I want to be a vet.* (Je veux être vétérinaire.)
- *I would like to* / *I'd like to* + verbe (plus poli) : *I'd like to visit New York.* (J'aimerais visiter New York.)
- *I'd like* + nom : *I'd like a sandwich, please.*

> **À retenir** : *be + -ing* = action en cours (*Look! She's dancing*) ou projet (*I'm visiting...this weekend*). Passé de be : *was* (I, he, she, it), *were* (you, we, they). Prétérit : *-ed* pour les verbes réguliers ; *went, saw, did, had* pour les irréguliers. *I want to / I'd like to* + verbe.
`,
      exercices: [
        { type: "qcm", question: "Complète : *Look! The baby ___.*", choix: ["sleeps", "sleep", "is sleeping", "are sleeping"], reponse: 2, explication: "*Look!* montre que l'action se passe **maintenant** : be + -ing. *The baby* = he / she → **is sleeping**." },
        { type: "saisie", question: "Complète avec be + -ing : *We ___ (make) a cake now.* (écris seulement ce qui manque)", reponses: ["are making", "'re making"], explication: "*We* → **are** + *making* (le e de *make* tombe devant -ing)." },
        { type: "qcm", question: "Quel est le prétérit du verbe *go* ?", choix: ["went", "goed", "gone", "goes"], reponse: 0, explication: "*Go* est irrégulier : son prétérit est **went** : *I went to the cinema.* *Goed* n'existe pas." },
        { type: "saisie", question: "Complète avec *was* ou *were* : *Yesterday, I ___ at my grandma's house.* (écris seulement ce qui manque)", reponses: ["was"], explication: "Avec *I*, le passé de be est **was**." },
        { type: "saisie", question: "Complète avec *was* ou *were* : *My friends ___ very happy last weekend.* (écris seulement ce qui manque)", reponses: ["were"], explication: "*My friends* = they : le passé de be est **were**." },
        { type: "vf", question: "*I'm visiting my cousins next Saturday.* parle d'un projet prévu dans l'avenir.", reponse: true, explication: "Oui : avec un repère futur (*next Saturday*), be + -ing exprime un **projet organisé** : « Je vais rendre visite à mes cousins samedi prochain »." },
        { type: "saisie", question: "Traduis : « J'aimerais visiter Londres. »", reponses: ["I would like to visit London", "I'd like to visit London"], explication: "*J'aimerais* = **I would like to** (ou *I'd like to*) + verbe : *I'd like to visit London.*" },
        { type: "qcm", question: "*Last summer, I ___ the Statue of Liberty.*", choix: ["see", "am seeing", "seeing", "saw"], reponse: 3, explication: "*Last summer* = passé terminé → prétérit. *See* est irrégulier : **saw**." },
        { type: "saisie", question: "Mets au prétérit : *I play rugby.* → *Yesterday, I ___ rugby.* (écris seulement ce qui manque)", reponses: ["played"], explication: "*Play* est un verbe régulier : on ajoute **-ed** : *played*." },
        { type: "redaction", question: "Raconte ton dernier week-end en 5 phrases (utilise *was / were* et au moins trois verbes au prétérit), puis écris 2 phrases sur ce que tu veux faire le week-end prochain avec *I want to* ou *I'd like to*.", corrige: `Exemple de réponse :

*Last weekend was great! On Saturday, I played football with my friends in the park. Then we went to the cinema and we saw a funny film. On Sunday, I visited my grandparents and I had lunch with them. We were very happy.*

*Next weekend, I want to go to the swimming pool. I'd like to watch a basketball game too.*

Points vérifiés :
- *was / were* : *Last weekend was great*, *We were very happy* ;
- prétérits réguliers (*played, visited*) et irréguliers (*went, saw, had*) ;
- repères de temps : *Last weekend, On Saturday, Then* ;
- projets avec *I want to / I'd like to* + verbe.` },
      ],
    },
    {
      id: "personnages-quotidien",
      titre: "Axes 1 et 2 : personnages et quotidien des jeunes anglophones",
      theme: "Culture",
      cours: `
> Ce chapitre couvre les **axes 1 (Personnes et personnages)** et **2 (Le quotidien : vivre, jouer, apprendre)** du programme de 6e.

## Axe 1 : des personnages célèbres
- **Paddington** : un ourson créé par le Britannique **Michael Bond** en **1958**. Venu du **Pérou** (*darkest Peru*), il est trouvé par la famille **Brown** à la **gare de Paddington**, à Londres, avec une étiquette : *Please look after this bear. Thank you.* Il adore les sandwichs à la marmelade d'orange.
- **Diary of a Wimpy Kid** (*Journal d'un dégonflé*, **Jeff Kinney**, 2007) : Greg Heffley raconte sa vie de collégien dans son journal… en répétant que ce n'est pas un *diary* (journal intime) mais un *journal* !
- **The Jungle Book** (**Rudyard Kipling**, 1894) : Mowgli, élevé par des loups en Inde ; l'ours **Baloo** lui apprend la loi de la jungle, la panthère **Bagheera** le protège, le tigre **Shere Khan** veut le tuer.
- **Charlotte's Web** (**E. B. White**, 1952) : l'araignée **Charlotte** sauve le cochon **Wilbur** en écrivant des mots dans sa toile (*SOME PIG*).
- Costumes : à **Halloween** (31 octobre), on se déguise (*dress up*) ; en Écosse, on porte le **kilt** en tartan pour les fêtes.

## Axe 2 : l'école au Royaume-Uni et aux États-Unis
| | Royaume-Uni | États-Unis |
|---|---|---|
| la 6e | **Year 7**, 1re année de *secondary school* | **sixth grade**, souvent 1re année de *middle school* |
| à l'école | un **uniforme** (*blazer, jumper, shirt, tie*) | le **bus scolaire jaune**, des **casiers** (*lockers*) |
| le midi | un **packed lunch** (repas froid dans une *lunch box*) ou un *school dinner* | la cafétéria |
| les vacances d'été | environ six semaines | environ **deux mois et demi** (juin à fin août), souvent un **summer camp** |

Au Royaume-Uni, la journée va souvent de 8 h 45 à 15 h 15 - 15 h 30 ; beaucoup d'écoles sont divisées en **houses** qui gagnent des points, comme à Poudlard.

## Les maisons et les sports
- Au Royaume-Uni : des *terraced houses* (maisons collées en rangée) et des *semi-detached houses* (maisons jumelées) ; aux États-Unis, des maisons avec un *yard* (jardin) dans les *suburbs* (banlieues).
- Royaume-Uni : *football, rugby, cricket* (avec une batte) — États-Unis : *baseball* (avec une batte), *basketball*, *American football*, *soccer* (= notre football) — Irlande : *Gaelic football, hurling* — Canada : *ice hockey*.

> **À retenir** : Paddington (Michael Bond, 1958) vient du Pérou ; Mowgli, Baloo et Bagheera viennent du *Jungle Book* de Kipling. 6e = **Year 7** en Angleterre, **sixth grade** aux États-Unis. Uniforme et *packed lunch* au Royaume-Uni ; bus jaune, *lockers* et longues vacances aux États-Unis. *Soccer* = football en anglais américain.
`,
      exercices: [
        { type: "qcm", question: "D'où vient l'ours Paddington ?", choix: ["du Canada", "d'Écosse", "du Pérou", "d'Australie"], reponse: 2, explication: "Paddington arrive du **Pérou** (*darkest Peru*). La famille Brown le trouve à la gare de Paddington, à Londres." },
        { type: "saisie", question: "En Angleterre, comment s'appelle la classe qui correspond à la 6e française ? (*Year* + nombre)", reponses: ["Year 7", "Year seven"], explication: "La 6e correspond à **Year 7**, la première année de *secondary school*. Aux États-Unis, c'est *sixth grade*." },
        { type: "vf", question: "Dans la plupart des écoles britanniques, les élèves portent un uniforme.", reponse: true, explication: "Oui : blazer ou pull, chemise, cravate, souvent aux couleurs de l'école. C'est une grande différence avec la France." },
        { type: "qcm", question: "Quel sport très populaire aux États-Unis se joue avec une batte et une balle ?", choix: ["baseball", "basketball", "American football", "ice hockey"], reponse: 0, explication: "Le **baseball** se joue avec une batte (*a bat*) et une balle. Au Royaume-Uni, le *cricket* utilise aussi une batte, mais il est bien moins joué aux États-Unis." },
        { type: "qcm", question: "Dans *Charlotte's Web*, qui est Charlotte ?", choix: ["une petite fille", "une vache", "une sorcière", "une araignée"], reponse: 3, explication: "Charlotte est une **araignée** (*a spider*) : elle sauve le cochon Wilbur en écrivant des mots dans sa toile (*web*)." },
        { type: "saisie", question: "Comment dit-on « le football » en anglais américain ?", reponses: ["soccer"], explication: "Aux États-Unis, le football se dit **soccer**, car *football* désigne le football américain." },
        { type: "qcm", question: "Dans *The Jungle Book*, qui est Baloo ?", choix: ["un tigre", "un ours", "une panthère", "un loup"], reponse: 1, explication: "Baloo est un **ours** (*a bear*) qui apprend à Mowgli la loi de la jungle. Bagheera est la panthère, Shere Khan le tigre." },
        { type: "vf", question: "Aux États-Unis, les grandes vacances d'été durent en général moins d'un mois.", reponse: false, explication: "C'est l'inverse : la *summer vacation* dure environ **deux mois et demi**, souvent de juin à fin août." },
        { type: "qcm", question: "Lis ce texte d'entraînement : *Hi! I'm Ella and I'm in Year 7 at a school in Manchester. I wear a uniform: a blue jumper, a white shirt and a tie. School starts at 8.45 and finishes at 3.15. I have a packed lunch with sandwiches and an apple.* Quelle affirmation est vraie ?", choix: ["Ella mange à la cantine.", "Ella porte un pull rouge.", "Les cours finissent à 15 h 15.", "Ella vit à Londres."], reponse: 2, explication: "*School finishes at 3.15* : les cours finissent à **15 h 15**. Ella apporte un *packed lunch* (elle ne mange pas à la cantine), son pull est bleu (*blue jumper*) et elle vit à Manchester." },
        { type: "redaction", question: "Écris un e-mail de 60 mots environ à ton correspondant anglais : présente ton collège en France (horaires, cantine, tenue, matières) et compare avec son école (uniforme, *packed lunch*...).", corrige: `Exemple de réponse :

*Hi Oliver,*

*I'm in 6e at a school in Lyon: it's like Year 7 in England. My school starts at 8 o'clock and finishes at 5 o'clock on Mondays! I have lunch at the school canteen, I don't have a packed lunch. We don't wear a uniform: I wear jeans and a sweatshirt. My favourite subject is English. Do you like your uniform?*

*Bye,*
*Chloé*

Points vérifiés :
- formules d'e-mail : *Hi Oliver*, *Bye* ;
- comparaison avec le Royaume-Uni : *it's like Year 7*, *We don't wear a uniform*, *I don't have a packed lunch* ;
- présent simple et négations avec *don't* ;
- une question pour le correspondant.` },
      ],
    },
    {
      id: "pays-paysages",
      titre: "Axe 3 : Pays et paysages",
      theme: "Culture",
      cours: `
## Le monde anglophone
L'anglais est parlé sur **tous les continents** : c'est la langue officielle ou principale de nombreux pays.
| Pays | Capitale | Nationalité | Un symbole |
|---|---|---|---|
| the United Kingdom | London | British | l'*Union Jack* (drapeau) |
| Ireland | Dublin | Irish | le trèfle (*shamrock*) |
| the USA | Washington, D.C. | American | le pygargue à tête blanche (*bald eagle*), un grand aigle |
| Canada | Ottawa | Canadian | la feuille d'érable (*maple leaf*) |
| Australia | Canberra | Australian | le kangourou |
| New Zealand | Wellington | New Zealander | le kiwi (un oiseau) |
| Kenya | Nairobi | Kenyan | les animaux de la savane |
| India | New Delhi | Indian | le tigre du Bengale |

Attention : la capitale de l'Australie n'est **pas Sydney**, mais **Canberra** ; celle du Canada est **Ottawa**, pas Toronto.

## Le vocabulaire des paysages
*a country* (pays), *a state* (État), *a continent*, *an island / an isle* (île), *an ocean, a sea* (mer), *a lake* (lac), *a river* (fleuve, rivière), *a coast* (côte), *a beach* (plage), *a forest*, *mountains*, *a desert*, *a landscape* (paysage). Adjectifs : *beautiful, colourful* (coloré), *vast* (immense).

## Le Mississippi, le grand fleuve américain
- Le **Mississippi** est l'un des plus longs fleuves d'Amérique du Nord : environ **3 700 km**.
- Il prend sa source au **lac Itasca** (Minnesota), au nord, et se jette dans le **golfe du Mexique**, au sud, près de **La Nouvelle-Orléans** (*New Orleans*), la ville où est né le **jazz**.
- Son nom vient d'une langue amérindienne (l'ojibwé) et signifie « grand fleuve ».
- Autrefois, de grands **bateaux à vapeur** à roue (*steamboats*) le remontaient. L'écrivain **Mark Twain**, qui a grandi au bord du fleuve, y a placé les aventures de **Tom Sawyer** et de **Huckleberry Finn**.

## Les Highlands, en Écosse
- Les **Highlands** (Hautes-Terres) sont la région montagneuse du nord de l'Écosse : montagnes, vallées (*glens*) et lacs, appelés **lochs**.
- Le **Ben Nevis** (1 345 m) est la plus haute montagne du Royaume-Uni.
- Le **Loch Ness** est célèbre pour son monstre imaginaire, **Nessie**.
- Animaux : la **vache Highland** aux longs poils roux (*Highland cow*), le cerf (*red deer*), l'aigle royal (*golden eagle*).

## Les parcs nationaux du Kenya
- Le **Kenya** est un pays d'Afrique de l'Est. Ses langues officielles sont l'**anglais** et le **swahili** ; sa capitale est **Nairobi**.
- Ses parcs et réserves (le **Maasai Mara**, **Amboseli**, le parc national de Nairobi...) protègent les animaux de la savane. Les touristes y font des **safaris** : en swahili, *safari* veut dire « voyage ».
- Les **Big Five** : le lion, le léopard, l'éléphant, le rhinocéros et le buffle (*lion, leopard, elephant, rhino, buffalo*).
- Chaque année, de juillet à octobre environ, des centaines de milliers de **gnous** et de **zèbres** traversent la rivière Mara : c'est la **grande migration**.

## Mers et océans
- Les océans : *the Atlantic Ocean, the Pacific Ocean, the Indian Ocean, the Arctic Ocean, the Southern Ocean*.
- L'**Australie** est une île-continent entourée par les océans Indien, Pacifique et Austral. Elle se trouve dans l'**hémisphère Sud** : les saisons sont inversées, **Noël tombe en été** et beaucoup d'Australiens le fêtent à la plage !
- Elle abrite la **Grande Barrière de corail** (*the Great Barrier Reef*), le plus grand ensemble de récifs coralliens du monde.
- Les côtes britanniques : les **falaises blanches de Douvres** (*the White Cliffs of Dover*), la **Chaussée des Géants** (Irlande du Nord).

> **À retenir** : capitales : Canberra (Australie), Ottawa (Canada), Wellington (Nouvelle-Zélande), Nairobi (Kenya), Dublin (Irlande). Le Mississippi va du lac Itasca au golfe du Mexique. Les Highlands : lochs, Ben Nevis, Nessie. Le Kenya : anglais et swahili, safaris, *Big Five*. En Australie, Noël est en été.
`,
      exercices: [
        { type: "qcm", question: "Quelle est la capitale de l'Australie ?", choix: ["Sydney", "Melbourne", "Wellington", "Canberra"], reponse: 3, explication: "La capitale de l'Australie est **Canberra**. Sydney est la plus grande ville ; Wellington est la capitale de la Nouvelle-Zélande." },
        { type: "saisie", question: "Comment dit-on « une île » en anglais ?", reponses: ["an island", "island", "an isle", "isle"], explication: "Une île = **an island** (le s ne se prononce pas : « aïlannd »). *An isle* existe aussi, surtout dans les noms : *the Isle of Wight*." },
        { type: "qcm", question: "Où se jette le Mississippi ?", choix: ["dans le golfe du Mexique", "dans l'océan Pacifique", "dans les Grands Lacs", "dans la baie d'Hudson"], reponse: 0, explication: "Le Mississippi coule du nord au sud et se jette dans le **golfe du Mexique**, près de La Nouvelle-Orléans. (Depuis 2025, le gouvernement des États-Unis l'appelle officiellement *Gulf of America*.)" },
        { type: "vf", question: "Le Ben Nevis, dans les Highlands, est la plus haute montagne du Royaume-Uni.", reponse: true, explication: "Oui : avec ses **1 345 m**, le Ben Nevis, en Écosse, est le point culminant du Royaume-Uni." },
        { type: "qcm", question: "Quelles sont les deux langues officielles du Kenya ?", choix: ["l'anglais et le français", "le swahili et l'arabe", "l'anglais et le swahili", "l'anglais et le zoulou"], reponse: 2, explication: "Au Kenya, les langues officielles sont l'**anglais** et le **swahili**. Le mot *safari* vient du swahili et veut dire « voyage »." },
        { type: "saisie", question: "En Australie, en quelle saison fête-t-on Noël ? (réponds en anglais)", reponses: ["summer", "in summer"], explication: "L'Australie est dans l'hémisphère Sud : en décembre, c'est l'**été** (*summer*). Beaucoup d'Australiens fêtent Noël à la plage." },
        { type: "qcm", question: "Lequel de ces animaux ne fait PAS partie des *Big Five* ?", choix: ["the lion", "the leopard", "the zebra", "the elephant"], reponse: 2, explication: "Les *Big Five* sont le lion, le léopard, l'éléphant, le rhinocéros et le buffle. Le **zèbre** (*zebra*) vit aussi dans la savane, mais il n'en fait pas partie." },
        { type: "saisie", question: "En Écosse, comment appelle-t-on un lac, comme celui où vivrait le monstre Nessie ?", reponses: ["loch", "a loch", "lochs"], explication: "En Écosse, un lac se dit **loch** : *Loch Ness, Loch Lomond*." },
        { type: "qcm", question: "Lis ce texte d'entraînement : *The Mississippi is a very long river in the USA. It starts at Lake Itasca, in the north, and it ends in the south, near New Orleans. In the past, big steamboats travelled on the river.* Où se termine le fleuve ?", choix: ["au nord, au lac Itasca", "au sud, près de La Nouvelle-Orléans", "au Canada", "à New York"], reponse: 1, explication: "*It ends in the south, near New Orleans* : le fleuve se termine **au sud, près de La Nouvelle-Orléans**. Il *commence* (*starts*) au lac Itasca." },
        { type: "redaction", question: "Tu voyages dans un pays anglophone étudié dans ce chapitre (Écosse, Kenya, Australie ou États-Unis). Écris une carte postale de 50 à 60 mots : où tu es, le paysage, les animaux, ce que tu aimes.", corrige: `Exemple de réponse :

*Hi Grandma!*

*Greetings from Scotland! I'm in the Highlands with Mum and Dad. The landscape is beautiful: there are big mountains, green glens and lots of lochs. Yesterday, I saw Loch Ness, but I didn't see Nessie! I love the Highland cows: they've got long red hair. It's cold and windy, but it's great!*

*Love,*
*Tom*

Points vérifiés :
- formules de carte postale : *Greetings from...*, *Love* ;
- vocabulaire du paysage : *landscape, mountains, glens, lochs* ;
- informations culturelles exactes (Loch Ness, Highland cows) ;
- *there are* + pluriel, adjectifs avant le nom (*big mountains*).` },
      ],
    },
    {
      id: "contes-legendes",
      titre: "Axe 4 : Imaginaire, contes et légendes",
      theme: "Culture",
      cours: `
## Raconter une histoire
- Pour commencer : **Once upon a time...** (Il était une fois...), *A long time ago, far away...* (Il y a longtemps, très loin...)
- Pour situer : *The story takes place in a haunted castle.* (L'histoire se passe dans un château hanté.) *In the dark of night...* (Au cœur de la nuit...)
- Pour finir : *...and they lived happily ever after.* (Ils vécurent heureux pour toujours.) *The end.*

Vocabulaire : *a fairy tale* (un conte de fées), *a story, a legend*, *a witch* (une sorcière), *a wizard* (un sorcier), *a magician* (un magicien), *magic*, *a wand* (une baguette), *a spell* (un sort), *a dragon*, *a giant* (un géant), *a dwarf* (un nain), *a fairy* (une fée), *a ghost* (un fantôme), *a knight* (un chevalier), *a king, a queen, a prince, a princess*.

>! Former des mots : *magic → magician* (magicien), *music → musician* (musicien), *sing → singer* (chanteur), *act → actor / actress*.

## L'image du dragon
- Le **drapeau du pays de Galles** montre un **dragon rouge** (*Y Ddraig Goch* en gallois) sur un fond vert et blanc.
- Selon la légende, **saint George**, patron de l'Angleterre, a tué un dragon. On le fête le **23 avril** (*St George's Day*).
- Dans *The Hobbit* (1937), de **J. R. R. Tolkien**, le dragon **Smaug** garde un trésor dans une montagne.

## L'Irlande, terre de mythes et de légendes
- Le **leprechaun** est un petit personnage farceur du folklore irlandais, souvent représenté habillé de vert. Il cache un **pot d'or au pied de l'arc-en-ciel** (*a pot of gold at the end of the rainbow*).
- La **banshee** est un esprit féminin dont le cri, la nuit, annonce un malheur.
- Selon la légende, le géant irlandais **Finn McCool** a construit la **Chaussée des Géants** (*the Giant's Causeway*), en Irlande du Nord, pour traverser la mer et aller combattre un géant écossais. En réalité, ses 40 000 colonnes de pierre (basalte) sont nées d'une éruption volcanique, il y a environ 60 millions d'années.

## It's a kind of magic : sorciers et magiciens
- **Merlin** est le magicien des légendes du **roi Arthur**, avec l'épée **Excalibur** et les chevaliers de la **Table ronde** (*the Knights of the Round Table*).
- **Harry Potter**, de la Britannique **J. K. Rowling** (premier tome en 1997 : *Harry Potter and the Philosopher's Stone*), étudie à l'école de sorcellerie **Hogwarts** (Poudlard), avec sa baguette (*wand*) et sa chouette Hedwig. Les quatre maisons : Gryffindor, Hufflepuff, Ravenclaw et Slytherin.
- **The Wonderful Wizard of Oz** (1900), de l'Américain **L. Frank Baum** : Dorothy, une petite fille du Kansas, et son chien Toto suivent la route de briques jaunes (*the yellow brick road*) jusqu'à la Cité d'émeraude.
- Attention : *a witch* = une sorcière ; *a wizard* = un sorcier.

## L'univers farfelu du Dr. Seuss
**Dr. Seuss** est le nom de plume de l'Américain **Theodor Seuss Geisel** (1904-1991). Ses albums sont pleins de **rimes**, de **répétitions**, de **mots inventés** et de créatures étranges.
- *The Cat in the Hat* (1957) : un chat farceur avec un grand chapeau rayé.
- *How the Grinch Stole Christmas!* (1957) : le Grinch, une créature verte qui déteste Noël.
- *Green Eggs and Ham* (1960) : un livre écrit avec **seulement 50 mots différents**, à la suite d'un pari avec son éditeur. On y lit : *I do not like green eggs and ham. I do not like them, Sam-I-am.*

> **À retenir** : *Once upon a time...* / *...happily ever after*. *Witch* = sorcière, *wizard* = sorcier, *magician* = magicien. Dragon rouge sur le drapeau gallois, saint George et le dragon (23 avril). Irlande : leprechaun et son pot d'or, Finn McCool et la Chaussée des Géants. Dr. Seuss : rimes, répétitions et mots inventés.
`,
      exercices: [
        { type: "qcm", question: "Comment commencent souvent les contes en anglais ?", choix: ["Happily ever after...", "The end.", "Once upon a time...", "See you soon..."], reponse: 2, explication: "*Once upon a time...* = **Il était une fois...** *Happily ever after* et *The end* servent à finir l'histoire." },
        { type: "saisie", question: "Complète la fin du conte : *...and they lived happily ever ___.* (écris seulement ce qui manque)", reponses: ["after"], explication: "La formule finale est *...and they lived happily ever **after*** (et ils vécurent heureux pour toujours)." },
        { type: "qcm", question: "Quel animal figure sur le drapeau du pays de Galles ?", choix: ["un dragon rouge", "un lion", "une licorne", "un aigle"], reponse: 0, explication: "Le drapeau gallois montre un **dragon rouge** (*Y Ddraig Goch*) sur un fond vert et blanc. La licorne est un symbole de l'Écosse." },
        { type: "vf", question: "Le *leprechaun* est un petit personnage du folklore irlandais qui cache un pot d'or au pied de l'arc-en-ciel.", reponse: true, explication: "Oui : selon la légende, si tu attrapes un leprechaun, il doit te révéler où est caché son **pot d'or** (*pot of gold*)." },
        { type: "saisie", question: "Forme le nom de la personne à partir de *magic* (comme *music → musician*).", reponses: ["magician", "a magician"], explication: "*Magic* → **magician** (magicien), comme *music* → *musician*." },
        { type: "qcm", question: "Comment s'appelle l'école de sorcellerie de Harry Potter, en anglais ?", choix: ["Camelot", "Hogwarts", "Narnia", "Oz"], reponse: 1, explication: "L'école de Harry Potter est **Hogwarts** (Poudlard en français). Camelot est le château du roi Arthur, Narnia et Oz sont des pays imaginaires d'autres livres." },
        { type: "qcm", question: "Selon la légende, qui a construit la Chaussée des Géants ?", choix: ["le roi Arthur", "Merlin", "saint George", "le géant Finn McCool"], reponse: 3, explication: "La légende raconte que le géant irlandais **Finn McCool** l'a construite pour traverser la mer jusqu'en Écosse. En réalité, ses colonnes de basalte viennent d'une éruption volcanique." },
        { type: "saisie", question: "Comment dit-on « une sorcière » en anglais ? Indice : on en voit beaucoup à Halloween, avec un chapeau pointu et un balai.", reponses: ["a witch", "witch"], explication: "Une sorcière = **a witch** (pluriel *witches*). Un sorcier = *a wizard*." },
        { type: "qcm", question: "Lis cet extrait de Dr. Seuss : *I do not like green eggs and ham. I do not like them, Sam-I-am.* Qu'est-ce qui le rend musical ?", choix: ["Des mots très longs et savants.", "Des verbes au prétérit.", "Des rimes et des répétitions.", "Des nombres."], reponse: 2, explication: "*ham* rime avec *Sam-I-am*, et *I do not like* est répété : les **rimes** et les **répétitions** donnent un rythme qui se lit comme une chanson." },
        { type: "redaction", question: "Écris le début d'un conte en 6 à 8 phrases : commence par *Once upon a time*, présente un personnage magique (sorcière, dragon, leprechaun...), dis où se passe l'histoire et quel est le problème.", corrige: `Exemple de réponse :

*Once upon a time, in a small village in Ireland, there was a little leprechaun called Paddy. He was very old and very funny. He had a green hat and a big pot of gold. Paddy lived in a forest, at the end of the rainbow. One day, a bad wizard came to the forest. He wanted the pot of gold! Paddy was very scared...*

Points vérifiés :
- formule d'ouverture : *Once upon a time* ;
- lieu (*a small village in Ireland, a forest*) et personnage magique décrit (*old, funny, a green hat*) ;
- *there was* pour présenter un personnage ;
- un problème qui lance l'histoire : *a bad wizard... wanted the pot of gold* ;
- verbes au passé reconnus en 6e : *was, had, lived, came, wanted*.` },
      ],
    },
    {
      id: "arts-fetes-musique",
      titre: "Axe 5 : Arts et expression des sentiments",
      theme: "Culture",
      cours: `
## Dire ce que l'on ressent devant une œuvre
- *In this picture, I can see a boy and a dog.* (Sur cette image, je vois...)
- *I like it / I love it / I don't like it because it's...* : *beautiful, colourful* (coloré), *funny, sad, scary* (qui fait peur), *strange* (bizarre), *wonderful, boring* (ennuyeux)
- *It makes me happy / sad.* (Ça me rend heureux / triste.)

Ne confonds pas *scary* (qui fait peur : *a scary film*) et *scared* (qui a peur : *I'm scared*).

## Des artistes et des musiciens
- **Banksy** : un artiste de rue (*street artist*) britannique **anonyme**, qui peint au pochoir (*Girl with Balloon*).
- **Andy Warhol** (États-Unis, années 1960) : le **pop art**, des boîtes de soupe et des portraits colorés répétés.
- Les **Beatles**, groupe de **Liverpool**, célèbres dans le monde entier dans les années 1960 (*Yellow Submarine*, *Hey Jude*).
- Instruments : *play the piano / the guitar / the drums* (batterie) */ the violin / the bagpipes* (cornemuse).

## Les fêtes de fin d'année
| Fête | Date | Traditions |
|---|---|---|
| Thanksgiving (USA) | 4e jeudi de novembre | dinde (*turkey*), tarte à la citrouille, repas en famille |
| Christmas Eve | 24 décembre | les enfants suspendent des chaussettes (*stockings*) pour Father Christmas / Santa Claus et ses rennes (*reindeer*) |
| Christmas Day | 25 décembre | cadeaux (*presents*), *Christmas pudding*, *crackers*, chants (*Christmas carols*) |
| Boxing Day (UK) | 26 décembre | jour férié : matchs de football, soldes |
| New Year's Eve / Hogmanay (Écosse) | 31 décembre | à minuit, on chante *Auld Lang Syne*, un poème de **Robert Burns** |

- Un **Christmas cracker** est un tube de carton que deux personnes tirent chacune d'un côté : il fait « pop » et libère une **couronne en papier**, une **blague** et un **petit cadeau**.
- Depuis 1947, la ville d'**Oslo** (Norvège) offre chaque année le grand **sapin de Trafalgar Square**, à Londres, pour remercier les Britanniques de leur aide pendant la Seconde Guerre mondiale.
- Au printemps, **St Patrick's Day** (17 mars) est la fête de l'Irlande : on s'habille en vert.

## La musique des mots
- *Supercalifragilisticexpialidocious*, mot inventé de **34 lettres**, vient d'une chanson du film **Mary Poppins** (Disney, 1964) : il veut dire « super-génial ».
- Les **virelangues** (*tongue twisters*) : *She sells seashells by the seashore.*

> **À retenir** : pour parler d'une œuvre : *In this picture, I can see... I like it because it's... It makes me happy.* Banksy (art de rue, anonyme), Warhol (pop art), les Beatles (Liverpool). Fêtes : Thanksgiving, Christmas Eve et Christmas Day, Boxing Day (26/12), Hogmanay (31/12 en Écosse), St Patrick's Day (17/03).
`,
      exercices: [
        { type: "qcm", question: "*This painting makes me happy.* Que veut dire cette phrase ?", choix: ["Ce tableau me rend triste.", "Je fais ce tableau.", "Ce tableau me rend heureux.", "Ce tableau a été fait par moi."], reponse: 2, explication: "*It makes me happy* = **ça me rend heureux**. *Painting* = tableau (peinture)." },
        { type: "saisie", question: "Comment dit-on « qui fait peur » (pour un film ou un tableau) ?", reponses: ["scary", "frightening", "terrifying"], explication: "*Qui fait peur* = **scary** (ou *frightening*). Ne confonds pas avec *scared* = qui a peur : *The film is scary, I'm scared!*" },
        { type: "qcm", question: "Que trouve-t-on dans un *Christmas cracker* ?", choix: ["une couronne en papier, une blague et un petit cadeau", "du chocolat chaud", "des pétards pour le 4 juillet", "une carte de vœux"], reponse: 0, explication: "Quand on tire le *cracker*, il fait « pop » et libère une **couronne en papier**, une **blague** et un **petit cadeau**. Les Britanniques portent la couronne pendant le repas de Noël." },
        { type: "vf", question: "Le grand sapin de Trafalgar Square, à Londres, est offert chaque année par la Norvège.", reponse: true, explication: "Oui : depuis 1947, la ville d'**Oslo** l'offre pour remercier les Britanniques de leur aide pendant la Seconde Guerre mondiale." },
        { type: "saisie", question: "Combien de lettres compte le mot *supercalifragilisticexpialidocious* ? (en chiffres)", reponses: ["34", "34 letters", "thirty-four"], explication: "Il compte **34 lettres**. Il vient d'une chanson du film *Mary Poppins* (1964)." },
        { type: "qcm", question: "Comment s'appelle le 26 décembre au Royaume-Uni ?", choix: ["Thanksgiving", "Christmas Eve", "Hogmanay", "Boxing Day"], reponse: 3, explication: "Le 26 décembre est **Boxing Day**, un jour férié. *Christmas Eve* = 24 décembre, *Hogmanay* = 31 décembre en Écosse, *Thanksgiving* = fin novembre aux États-Unis." },
        { type: "saisie", question: "Complète : *I can ___ the guitar.* (jouer ; écris seulement ce qui manque)", reponses: ["play"], explication: "Jouer d'un instrument : **play the** + instrument : *I can play the guitar.*" },
        { type: "qcm", question: "De quelle ville viennent les Beatles ?", choix: ["London", "Liverpool", "Glasgow", "Dublin"], reponse: 1, explication: "Les Beatles viennent de **Liverpool**, un grand port du nord-ouest de l'Angleterre." },
        { type: "qcm", question: "Comment appelle-t-on le réveillon du Nouvel An en Écosse ?", choix: ["Boxing Day", "Hogmanay", "Halloween", "St Patrick's Day"], reponse: 1, explication: "En Écosse, le 31 décembre s'appelle **Hogmanay**. À minuit, on chante *Auld Lang Syne*, un poème de Robert Burns." },
        { type: "redaction", question: "Choisis une œuvre que tu aimes (un tableau, une chanson, un film ou une carte de Noël) et décris-la en 6 à 8 phrases : ce que tu vois ou entends, les couleurs ou la musique, et ce que tu ressens.", corrige: `Exemple de réponse (une carte de Noël) :

*In this picture, I can see a snowy village at night. There is a big Christmas tree in the middle, with red and gold decorations. Father Christmas is flying in the sky with his reindeer. The houses are small and colourful, and there are lights in the windows. Some children are singing Christmas carols. I love this card because it's beautiful and magical. It makes me happy!*

Points vérifiés :
- *In this picture, I can see...* pour décrire ;
- *there is / there are* et adjectifs avant le nom (*a snowy village, red and gold decorations*) ;
- vocabulaire de Noël : *Christmas tree, Father Christmas, reindeer, Christmas carols* ;
- expression des sentiments justifiée : *I love this card because... It makes me happy.*` },
      ],
    },
    {
      id: "lire-et-ecrire",
      titre: "Méthodes : comprendre un texte et écrire en anglais",
      theme: "Méthodologie",
      cours: `
## Comprendre les consignes
| Consigne | Sens |
|---|---|
| *Read the text.* | Lis le texte. |
| *Tick the right answer.* | Coche la bonne réponse. |
| *True or false? Justify.* | Vrai ou faux ? Justifie (en recopiant les mots du texte). |
| *Match.* | Relie. |
| *Fill in the blanks.* | Complète les trous. |
| *Answer the questions.* | Réponds aux questions. |
| *Underline / Circle.* | Souligne / Entoure. |

## Comprendre un texte : la méthode
1. **Avant de lire** : regarde le titre, les images, la forme du texte (e-mail, affiche, histoire, dialogue) : tu devines déjà le sujet.
2. **Première lecture** : cherche les réponses à *Who? What? Where? When?* (qui ? quoi ? où ? quand ?).
3. Appuie-toi sur les **mots transparents**, qui ressemblent au français : *family, animal, chocolate, museum, important, music, favourite*.
4. Repère les **mots connus** et les **noms propres** (prénoms, villes, pays) ; ne bloque pas sur un mot inconnu : le contexte t'aide.
5. Attention aux **faux amis** : *library* = bibliothèque (une librairie = *a bookshop*), *a cave* = une grotte, *a college* n'est pas notre collège, c'est une école pour les plus de 16 ans ou une université (notre collège = *a secondary school* au Royaume-Uni, *a middle school* aux États-Unis).
6. Repère les petits mots qui relient les idées : *and* (et), *but* (mais), *or* (ou), *first* (d'abord), *then* (ensuite), *so* (donc), *because* (parce que).

>! Pour un *True or false*, recopie la phrase du texte qui prouve ta réponse : *False: « Sam loves it ».*

## Écrire un petit texte : la méthode
1. **Lis la consigne** : quel type de texte (e-mail, carte postale, portrait, description) ? Pour qui ? Combien de mots ?
2. **Note tes idées** en anglais avec les mots que tu connais (n'écris pas en français pour traduire ensuite).
3. **Écris des phrases simples et justes** : sujet + verbe + complément. Relie-les avec *and, but, because, then*.
4. **Relis-toi** avec cette liste :
- *I* toujours en majuscule ; majuscules aux jours, mois, nationalités, langues et pays (*Monday, May, French, England*) ;
- l'âge avec be : *I'm eleven* ;
- le -s de la 3e personne : *she likes* ;
- *a* / *an* et l'adjectif avant le nom : *an orange cat* ;
- *has got* avec he, she, it.

### Les formules utiles
| Type de texte | Début | Fin |
|---|---|---|
| e-mail ou lettre à un ami | *Hi Tom, / Hello Tom, / Dear Tom,* | *Bye! / See you soon! / Write soon! / Love,* |
| carte postale | *Greetings from Edinburgh!* | *See you soon, / Love,* |

> **À retenir** : pour comprendre, observe le titre et les images, cherche *who, what, where, when*, utilise les mots transparents et méfie-toi des faux amis. Pour écrire, respecte la consigne, fais des phrases simples reliées par *and, but, because*, puis relis-toi (majuscules, *I'm eleven*, -s, *a / an*).
`,
      textes: {
        amy: `**An email from Amy**

*Hello! My name is Amy and I'm eleven. I live in York, in the north of England, with my mum, my dad and my little brother, Sam. Sam is seven and he's very funny. We've got a dog called Biscuit. I'm in Year 7. My favourite subject is art because I love drawing. After school, I play the piano. At the weekend, I go swimming with my friend Chloe. I don't like football, but Sam loves it!*

*Write soon!*
*Amy*`,
      },
      exercices: [
        { type: "qcm", question: "Que veut dire la consigne *Tick the right answer* ?", choix: ["Relie les réponses.", "Écris ta réponse.", "Coche la bonne réponse.", "Souligne le titre."], reponse: 2, explication: "*To tick* = **cocher** ; *the right answer* = la bonne réponse. *Match* = relier, *underline* = souligner." },
        { type: "vf", question: "En anglais, *library* signifie « librairie ».", reponse: false, explication: "C'est un faux ami : *library* = **bibliothèque**. Une librairie, c'est *a bookshop*." },
        { type: "qcm", question: "Dans quel cas met-on une majuscule en anglais, alors qu'on n'en met pas en français ?", choix: ["aux noms de couleurs", "après une virgule", "aux noms d'animaux", "aux jours, aux mois et aux nationalités"], reponse: 3, explication: "En anglais, on écrit avec une majuscule les **jours** (*Monday*), les **mois** (*May*), les **nationalités** et les **langues** (*French*), et toujours *I*." },
        { type: "saisie", question: "Corrige l'erreur : *My sister have got a cat.*", reponses: ["My sister has got a cat", "My sister's got a cat", "My sister has a cat"], explication: "*My sister* = she : avec he, she, it, on emploie **has got** : *My sister has got a cat.*" },
        { type: "qcm", texte: "amy", question: "Lis l'e-mail d'Amy. Où habite Amy ?", choix: ["à Londres", "à York, dans le nord de l'Angleterre", "à Édimbourg, en Écosse", "en Irlande"], reponse: 1, explication: "Le texte dit : *I live in York, in the north of England* : Amy habite **à York, dans le nord de l'Angleterre**." },
        { type: "saisie", texte: "amy", question: "Comment s'appelle le chien d'Amy ?", reponses: ["Biscuit", "The dog is called Biscuit", "It's called Biscuit", "Its name is Biscuit", "His name is Biscuit", "He is called Biscuit", "He's called Biscuit", "It is called Biscuit", "The dog's name is Biscuit", "Its name's Biscuit"], explication: "*We've got a dog called Biscuit* : le chien s'appelle **Biscuit**." },
        { type: "vf", texte: "amy", question: "D'après l'e-mail, Sam n'aime pas le football.", reponse: false, explication: "Faux : c'est Amy qui n'aime pas le football. Le texte dit : *I don't like football, but Sam loves it!* (Sam adore ça)." },
        { type: "saisie", texte: "amy", question: "Pourquoi Amy aime-t-elle les arts plastiques (*art*) ? Recopie les mots du texte qui suivent *because*.", reponses: ["I love drawing", "because I love drawing"], explication: "*My favourite subject is art because **I love drawing*** : elle adore dessiner." },
        { type: "qcm", texte: "amy", question: "Que fait Amy le week-end ?", choix: ["Elle joue du piano.", "Elle joue au football.", "Elle promène son chien.", "Elle va nager avec Chloe."], reponse: 3, explication: "*At the weekend, I go swimming with my friend Chloe* : le week-end, elle **va nager avec Chloe**. Le piano, c'est *after school* (après l'école)." },
        { type: "redaction", texte: "amy", question: "Consigne de contrôle : réponds à l'e-mail d'Amy (60 à 80 mots). Présente-toi (nom, âge, ville), parle de ta famille, de ta matière préférée (avec *because*) et de tes loisirs, puis pose-lui deux questions.", corrige: `Exemple de réponse :

*Hi Amy,*

*Thank you for your email! My name is Noah and I'm eleven too. I live in Bordeaux, in the south-west of France. I've got a big sister, Léna. She's fifteen and she is very nice. We haven't got a dog, but we've got two rabbits. My favourite subject is history because the stories are interesting. After school, I play basketball and at the weekend I go to the cinema with my friends. What's your favourite film? Have you got a cat?*

*Write soon!*
*Noah*

Points vérifiés (barème indicatif sur 10) :
- formules d'e-mail au début et à la fin (1 point) ;
- toutes les parties de la consigne traitées : présentation, famille, matière + *because*, loisirs (4 points) ;
- deux questions correctes : *What's your favourite film? Have you got a cat?* (2 points) ;
- correction de la langue : *I'm eleven*, *she is*, *we've got*, majuscules (*French, I*) (2 points) ;
- longueur respectée, phrases reliées par *and, but, because* (1 point).` },
      ],
    },
    {
      id: "communiquer-en-classe",
      titre: "Communiquer : demander de l'aide, réagir, transmettre une information",
      theme: "Communication",
      cours: `
>! Le programme de 6e donne une grande place à l'**interaction** (parler avec quelqu'un) et à la **médiation** (aider quelqu'un à comprendre, transmettre une information). Ce chapitre réunit les phrases toutes faites qui te servent tous les jours en classe et avec un correspondant.

## Demander de l'aide, en anglais !
Quand tu ne comprends pas, ne reste pas bloqué : demande, **en anglais**.
| Pour... | On dit... |
|---|---|
| faire répéter | *Can you repeat, please?* / *Sorry, what did you say?* |
| dire qu'on ne comprend pas | *Sorry, I don't understand.* |
| faire parler plus lentement | *Can you speak more slowly, please?* (on entend aussi *slower*) |
| faire parler plus fort | *Can you speak louder, please?* |
| demander un mot | *How do you say « trousse » in English?* / *What's « pencil case » in French?* |
| demander l'orthographe | *How do you spell it?* |
| demander la permission | *Can I go to the toilet, please?* / *Can I open the window?* |

## Saluer, demander des nouvelles, s'excuser
- *How are you?* — *I'm good / I'm fine, thank you. How about you?* — *So so.* (comme ci, comme ça) — *I'm not well.* (je ne vais pas bien)
- *Sorry I'm late.* (Désolé d'être en retard.) — *Thank you! / Thanks!* — *You're welcome.* (De rien.)
- À l'écrit : on commence par *Dear Tom,* et on finit par *With love,* (à un proche) ou *Best regards,* (plus poli, à un adulte).

## Réagir : accord, désaccord
- accepter : *Okay! Sure! Of course! Good idea! No problem! With pleasure!*
- refuser poliment : *Sorry, I can't.* / *No, thank you.*
- **Me too** (moi aussi) répond à une phrase **affirmative** : *I love pizza! — Me too!*
- **Me neither** (moi non plus) répond à une phrase **négative** : *I don't like spinach. — Me neither!*

## Prévenir, alerter, dire ses besoins
- *Watch out!* / *Be careful!* (Attention !) — *A moment, please.* / *Please wait.*
- pour toi : *I'm cold. It's too hot. I'm tired. I'm thirsty. I need a pen.* (j'ai besoin d'un stylo)
- pour quelqu'un d'autre : *He needs help.* (Il a besoin d'aide.) *She can't see. He's not well.*

## Situer une information sur un document
*Here! In the picture* (sur l'image), *on the left / on the right* (à gauche / à droite), *at the top / at the bottom* (en haut / en bas), *on page 12, line 4* (page 12, ligne 4).

## Donner son avis et faire des hypothèses
- avis : *I think the penguin looks sad.* (Je pense que...) — *In my opinion, ...* (À mon avis...)
- hypothèse : *Maybe* / *Perhaps the gift is a penguin.* (Peut-être que...) — *It's probably a penguin.* (sans doute) — *It's certainly a penguin.* (sûrement)
- intensité : *very* (très), *too* (trop) : *It's very good. It's too hot!*

## Transmettre une information (médiation)
Parfois, tu dois expliquer **en français** à quelqu'un ce que dit un document en anglais. Tu ne traduis pas mot à mot : tu donnes **l'essentiel**, en répondant à **quoi ? où ? quand ? combien ?**

>! *The carnival starts at 2 pm outside the city hall. Entry costs 5 euros, but it's free for children.* → « Le carnaval commence à 14 h devant la mairie. L'entrée coûte 5 euros, mais c'est gratuit pour les enfants. »

Mots utiles des affiches et des invitations : *starts / finishes* (commence / finit), *from 10 am to 4 pm* (de 10 h à 16 h), *entry* (entrée), *a ticket* (billet), *free* (gratuit), *price* (prix), *under 12* (moins de 12 ans), *if it rains* (s'il pleut), *bring* (apporte).

> **À retenir** : pour te faire aider : *Can you repeat, please? Sorry, I don't understand. How do you say... in English? How do you spell it?* Pour réagir : *Me too* (après une phrase affirmative), *Me neither* (après une phrase négative). Pour alerter : *Watch out! Be careful!* Pour une hypothèse : *maybe, perhaps, probably, I think*. Pour transmettre une information : l'essentiel (quoi, où, quand, combien), pas du mot à mot.
`,
      textes: {
        fete: `**Greenwood School Summer Fair**

*Saturday 14th June, from 10 am to 4 pm*

*Where? In the school playground (in the sports hall if it rains)*

*Games, face painting, a cake stall and a dog show!*

*Entry: £2 for adults, free for children under 12*

*Lunch: hot dogs and sandwiches, £3*

*Don't forget: bring your old books and toys for our second-hand stall!*`,
      },
      exercices: [
        { type: "qcm", question: "Ta professeure parle trop vite pour toi. Que lui dis-tu ?", choix: ["Can you speak more slowly, please?", "Can you speak English, please?", "How are you?", "Can I open the window, please?"], reponse: 0, explication: "Pour faire parler plus lentement : **Can you speak more slowly, please?** (on entend aussi *slower*). *Can you speak English?* demande si la personne parle anglais." },
        { type: "saisie", question: "Demande à ton correspondant comment s'écrit son nom de famille (« Comment ça s'écrit ? »).", reponses: ["How do you spell it", "How do you spell your surname", "How do you spell your last name", "How do you spell your family name", "How do you spell your name", "Can you spell it please", "Can you spell it", "Can you spell your name please", "Can you spell your surname please"], explication: "« Comment ça s'écrit ? » = **How do you spell it?** Ton correspondant répond en épelant les lettres : *S-M-I-T-H*." },
        { type: "qcm", question: "Ton ami dit : *I don't like spinach!* Toi non plus, tu n'aimes pas les épinards. Que réponds-tu ?", choix: ["Me too!", "Of course!", "Me neither!", "Yes, I do!"], reponse: 2, explication: "La phrase de ton ami est **négative** (*I don't like*) : « moi non plus » se dit **Me neither!** *Me too!* répond à une phrase affirmative (*I love pizza! — Me too!*)." },
        { type: "saisie", question: "Ton camarade est tombé dans la cour. Dis à la surveillante, en anglais : « Il a besoin d'aide. »", reponses: ["He needs help", "He needs some help", "He needs help please"], explication: "*Avoir besoin de* = **need** ; avec *he*, on ajoute le -s du présent simple : **He needs help.**" },
        { type: "qcm", question: "Sur une publicité de Noël, tu vois un pingouin seul. Quelle phrase exprime une **hypothèse** ?", choix: ["The penguin is sad.", "Maybe the penguin is sad.", "The penguin isn't sad.", "Is the penguin sad? Yes, it is."], reponse: 1, explication: "**Maybe** (peut-être) montre que tu n'es pas sûr : c'est une hypothèse. On peut aussi dire *Perhaps the penguin is sad* ou *I think the penguin looks sad*." },
        { type: "qcm", texte: "fete", question: "Lis l'affiche. Quand a lieu la fête de l'école ?", choix: ["le dimanche 14 juin, de 10 h à 16 h", "le samedi 14 juin, de 10 h à 14 h", "tous les samedis de juin", "le samedi 14 juin, de 10 h à 16 h"], reponse: 3, explication: "*Saturday 14th June, from 10 am to 4 pm* : le **samedi 14 juin, de 10 h à 16 h** (*4 pm* = 4 heures de l'après-midi = 16 h)." },
        { type: "vf", texte: "fete", question: "D'après l'affiche, s'il pleut, la fête est annulée.", reponse: false, explication: "Faux : *in the sports hall if it rains* : s'il pleut, la fête a lieu **dans le gymnase** (*sports hall*) au lieu de la cour (*playground*)." },
        { type: "qcm", texte: "fete", question: "Tu vas à la fête avec tes deux parents et ta petite sœur de 8 ans. Tu as 11 ans. Combien coûte l'entrée pour vous quatre ?", choix: ["8 livres (£8)", "2 livres (£2)", "4 livres (£4)", "rien du tout"], reponse: 2, explication: "*£2 for adults, free for children under 12* : tes deux parents paient 2 × £2 = **£4** ; toi (11 ans) et ta sœur (8 ans) avez moins de 12 ans : c'est gratuit (*free*)." },
        { type: "redaction", question: "Écris un petit dialogue de 6 répliques en classe d'anglais. Tu arrives en retard et tu t'excuses ; la professeure te répond ; tu ne comprends pas la consigne et tu demandes de répéter ; tu demandes comment on dit un mot en anglais ; tu remercies.", corrige: `Exemple de réponse :

- **Me** : *Sorry I'm late!*
- **Teacher** : *That's okay. Sit down, please. Open your book on page 24.*
- **Me** : *Sorry, I don't understand. Can you repeat, please?*
- **Teacher** : *Open your book on page 24 and read the text.*
- **Me** : *How do you say « trousse » in English?*
- **Teacher** : *It's a pencil case.* — **Me** : *Thank you!*

Points vérifiés :
- formules d'excuse et de politesse : *Sorry I'm late, Thank you* ;
- demander de répéter : *Sorry, I don't understand. Can you repeat, please?* ;
- demander un mot : *How do you say... in English?* ;
- consignes de la professeure à l'impératif : *Sit down, Open your book*.` },
        { type: "redaction", texte: "fete", question: "Médiation : ton grand-père ne parle pas anglais et voudrait t'accompagner à la fête. Explique-lui **en français**, en 4 ou 5 phrases, l'essentiel de l'affiche : quoi, quand, où, combien, et ce qu'il faut apporter.", corrige: `Exemple de réponse (en français, sans traduire mot à mot) :

« Papi, c'est la fête de l'école Greenwood, le samedi 14 juin, de 10 h à 16 h. Elle a lieu dans la cour, ou dans le gymnase s'il pleut. Il y a des jeux, du maquillage, un stand de gâteaux et un concours de chiens ! L'entrée coûte 2 livres pour toi, et c'est gratuit pour moi parce que j'ai moins de 12 ans. On peut manger des hot-dogs ou des sandwichs pour 3 livres, et il faut apporter nos vieux livres et jouets pour le stand d'occasion. »

Points vérifiés :
- les informations essentielles sont toutes là : quoi (*Summer Fair*), quand (*Saturday 14th June, 10 am to 4 pm*), où (*playground / sports hall*), combien (*£2, free under 12, lunch £3*), quoi apporter (*old books and toys*) ;
- les heures sont bien converties : *4 pm* = 16 h ;
- on reformule simplement pour la personne (« pour toi », « pour moi ») au lieu de traduire chaque mot.` },
      ],
    },
    {
      id: "former-des-mots",
      titre: "Former des mots : suffixes, préfixe un- et mots composés",
      theme: "Vocabulaire",
      cours: `
## Un mot connu en donne d'autres
Avec un mot que tu connais, tu peux en **comprendre** et en **fabriquer** d'autres :
- on ajoute un **suffixe** à la fin : *cloud → cloudy* ;
- on ajoute un **préfixe** au début : *happy → unhappy* ;
- on colle deux mots : *snow + man → snowman*.

## Nom → adjectif : -y et -ful
| Nom | Adjectif |
|---|---|
| *cloud* (nuage) | *cloudy* (nuageux) |
| *rain* (pluie) | *rainy* (pluvieux) |
| *sport* | *sporty* (sportif) |
| *sun* (soleil) | *sunny* (ensoleillé : le n est doublé) |
| *fun* (amusement) | *funny* (drôle : le n est doublé) |
| *colour* (couleur) | *colourful* (coloré) |
| *wonder* (merveille) | *wonderful* (merveilleux) |
| *beauty* (beauté) | *beautiful* (beau : le y devient i) |

Le suffixe **-ful** veut dire « plein de » et s'écrit avec **un seul l**.

## Verbe → personne : -er, -or, -ess
- **-er** = celui qui fait l'action : *sing → singer* (chanteur), *play → player* (joueur), *teach → teacher*, *bake → baker* (boulanger), *write → writer* (écrivain), *drive → driver* (conducteur).
- Si le verbe finit par un e, on ajoute seulement -r : *write → writer, bake → baker*. Si le verbe finit par **une** voyelle courte + **une** consonne, la consonne double : *swim → swimmer, run → runner*.
- *act → actor* (acteur) ; **-ess** marque parfois le féminin : *actress* (actrice).

## Nom → personne : -ian et -ist
- *magic → magician* (magicien), *music → musician* (musicien). Attention à l'accent : *MU-sic* mais *mu-SI-cian*.
- *art → artist*, *piano → pianist*, *guitar → guitarist*.

## Adjectif → adverbe : -ly
L'adverbe dit **comment** on fait quelque chose : *slow → slowly* (lentement), *sad → sadly* (tristement), *happy → happily* (joyeusement : le y devient i), *fortunate → fortunately* (heureusement).

>! *The children are playing happily in the garden.* — *Fortunately, it's sunny today!*

## Le préfixe un- : le contraire
*happy → unhappy* (malheureux), *kind → unkind* (pas gentil), *lucky → unlucky* (malchanceux), *tidy → untidy* (en désordre), *fortunately → unfortunately* (malheureusement).

## Les mots composés : le mot principal est à la fin
En anglais, le mot **principal** (celui qui dit ce que c'est) est **le dernier** ; le premier mot le précise :
- *bed + room → bedroom* : une pièce (*room*) pour le lit : la chambre ;
- *snow + man → snowman* : un bonhomme de neige ; *police + man → policeman* ; *boy + friend → boyfriend* ;
- *lunch box* (boîte à déjeuner), *school bag* (cartable), *birthday*, *football*.

C'est l'ordre **inverse du français** : *an apple pie* = une tarte (*pie*) aux pommes (*apple*).

>! Exemple résolu : que veut dire *a toothbrush* ? Le dernier mot est *brush* (une brosse) : c'est une brosse, et *tooth* (dent) précise à quoi elle sert : **une brosse à dents**.

Au pluriel, seul le **dernier mot** change : *two bedrooms, three apple pies, two snowmen* (*man → men*).

### Erreurs fréquentes
- ✗ *suny, funy* → *sunny, funny* (n doublé) ; ✗ *colourfull* → *colourful* ; ✗ *beautyful* → *beautiful*.
- ✗ *happyly* → *happily*.
- ✗ *a pie apple* → *an apple pie* (le mot principal à la fin).
- ✗ *two snowsmen* → *two snowmen*.

> **À retenir** : **-y** et **-ful** forment des adjectifs (*cloudy, sunny, colourful*) ; **-er / -or** et **-ian / -ist** forment des noms de personnes (*singer, actor, musician, artist*) ; **-ly** forme des adverbes (*happily, fortunately*) ; **un-** donne le contraire (*unhappy*). Dans un mot composé, le mot principal est **à la fin** : *a bedroom, an apple pie*.
`,
      exercices: [
        { type: "qcm", question: "Quel adjectif est formé à partir du nom *cloud* (nuage) ?", choix: ["cloudful", "cloudy", "clouder", "cloudly"], reponse: 1, explication: "Avec **-y**, le nom devient un adjectif : *cloud → **cloudy*** (nuageux), comme *rain → rainy*. *Cloudful*, *clouder* et *cloudly* n'existent pas." },
        { type: "saisie", question: "Forme l'adjectif à partir de *sun* (soleil) : *It's a ___ day!* (une journée ensoleillée ; écris seulement ce qui manque)", reponses: ["sunny"], explication: "*Sun* + **-y** → **sunny**. Après une voyelle courte, la consonne finale est doublée : *sun → sunny*, comme *fun → funny*." },
        { type: "saisie", question: "Forme le nom de la personne à partir du verbe *write* (écrire) : celui qui écrit des livres est *a ___.* (écris seulement ce qui manque)", reponses: ["writer"], explication: "Verbe + **-er** = celui qui fait l'action. *Write* finit par un e : on ajoute seulement **-r** : *a writer* (un écrivain), comme *bake → baker*." },
        { type: "qcm", question: "Comment appelle-t-on une personne qui fait de la musique (*music*) ?", choix: ["a musicer", "a musicist", "a musicful", "a musician"], reponse: 3, explication: "*Music → **musician***, comme *magic → magician*. Attention à la prononciation : l'accent passe sur la 2e syllabe (*mu-SI-cian*)." },
        { type: "vf", question: "Dans le mot composé *bedroom*, le mot principal est *room* : une *bedroom* est une pièce.", reponse: true, explication: "Oui : dans un mot composé, le mot **principal est à la fin**. Une *bedroom* est une pièce (*room*) pour le lit (*bed*) : une chambre." },
        { type: "qcm", question: "Que veut dire *an apple pie* ?", choix: ["une tarte aux pommes", "une pomme en forme de tarte", "un pommier", "une compote de pommes"], reponse: 0, explication: "Le mot principal est à la fin : *pie* (une tarte) ; *apple* précise de quoi elle est faite : **une tarte aux pommes**. L'ordre est l'inverse du français." },
        { type: "saisie", question: "Forme l'adverbe à partir de *happy* : *The children are playing ___ in the garden.* (joyeusement ; écris seulement ce qui manque)", reponses: ["happily"], explication: "Adjectif + **-ly** = adverbe. Le y devient i : *happy → **happily***. Attention : *happyly* n'existe pas." },
        { type: "saisie", question: "Forme le contraire de *lucky* (chanceux) avec un préfixe.", reponses: ["unlucky"], explication: "Le préfixe **un-** donne le contraire : *lucky → **unlucky*** (malchanceux), comme *happy → unhappy*." },
        { type: "qcm", question: "Quel est le pluriel de *snowman* (bonhomme de neige) ?", choix: ["snowmans", "snowsman", "snowsmen", "snowmen"], reponse: 3, explication: "Au pluriel, seul le **dernier mot** change, et *man* a un pluriel irrégulier : **snowmen** (comme *policeman → policemen*)." },
        { type: "redaction", question: "Écris 6 phrases sur une journée d'hiver avec ta famille. Utilise au moins deux adjectifs en *-y* ou *-ful*, un nom de personne en *-er* ou *-ian*, un adverbe en *-ly*, un mot avec *un-* et deux mots composés.", corrige: `Exemple de réponse :

*It's a cold and cloudy day, but the garden is beautiful under the snow. My little brother and I make a big snowman. My dad is a baker, so he brings a wonderful apple pie for lunch. Unfortunately, my sister is ill and she stays in her bedroom. She is unhappy, so we play cards with her. In the evening, we listen to a famous Irish musician and we sing happily.*

Points vérifiés :
- adjectifs en **-y** et **-ful** : *cloudy, beautiful, wonderful* ;
- noms de personnes : *a baker* (-er), *a musician* (-ian) ;
- adverbes en **-ly** : *happily, unfortunately* ; préfixe **un-** : *unhappy, unfortunately* ;
- mots composés avec le mot principal à la fin : *snowman, apple pie, bedroom*.` },
      ],
    },
    {
      id: "lexique-a1-plus",
      titre: "Enrichir son vocabulaire (A1+) : de nouveaux mots pour chaque thème",
      theme: "Vocabulaire",
      cours: `
>! En fin de 6e, le programme attend le niveau **A1+** : tu connais les mots de base de chaque thème (A1), et tu commences à en utiliser de plus précis. Ce chapitre rassemble ces mots « en plus ». Apprends-les par petits groupes, en faisant une phrase avec chacun.

## Les personnes
| Thème | Mots A1+ |
|---|---|
| la famille | *a baby, a birth* (naissance), *a wedding* (mariage), *to spend time with* (passer du temps avec), *to take care of* (s'occuper de), *to visit* |
| l'apparence | *curly* (bouclés), *wavy* (ondulés), *straight* (raides), *bald* (chauve), *freckles* (taches de rousseur), *good-looking* (beau), *enormous, gigantic* |
| le caractère | *outgoing* (sociable), *selfish* (égoïste), *clumsy* (maladroit), *fashionable* (à la mode) |
| les vêtements | *boots* (bottes), *trainers* (baskets, au Royaume-Uni) = *sneakers* (aux États-Unis), *dungarees* (salopette) |
| le corps | *cheeks* (joues), *lips* (lèvres), *tongue* (langue), *shoulder* (épaule), *stomach* (ventre), *wrist* (poignet), *knees* (genoux), *ankles* (chevilles), *toes* (orteils) |
| les métiers | *a baker* (boulanger), *a butcher* (boucher), *a cook* (cuisinier), *a mechanic* (mécanicien), *a plumber* (plombier), *a writer* (écrivain), *a banker* (banquier) |
| les émotions | *disappointed* (déçu), *tense* (tendu), *cross* (fâché) ; *luckily / fortunately* (heureusement), *sadly / unfortunately* (malheureusement) |
| les nationalités | *European, Asian, Nigerian, Kenyan, New Zealander, Californian* |

## La vie de tous les jours
- à la maison : *to wash one's hands* (se laver les mains), *to help at home* (aider à la maison), *to walk the dog* (promener le chien), *to relax* (se détendre), *to chat on social media* (discuter sur les réseaux sociaux) ;
- le logement : *a neighbour* (voisin), *the neighbourhood* (le quartier), *the house next door* (la maison d'à côté), *furniture* (les meubles), *comfortable, cosy* (douillet) ;
- les repas : *dinner time, a lunch box, baked beans* (haricots à la sauce tomate, souvent servis au petit-déjeuner anglais), *apple pie*, *maple taffy* (tire d'érable, au Canada) ;
- les loisirs : *a sports hall* (gymnase), *an aqua park* (parc aquatique), *indoor / outdoor* (en salle / en plein air), *water sports*, *collecting* (faire une collection), *acting* (faire du théâtre), *to have fun* (s'amuser), *to enjoy* (aimer, apprécier) ;
- la fréquence : *once a week* (une fois par semaine), *twice a week* (deux fois), *two hours a week*, *during my free time* (pendant mon temps libre) ;
- les jeux : *the rules* (les règles), *a pawn* (pion), *to cheat* (tricher), *fair play*.

## Les paysages, les contes, les fêtes
- paysages : *a tree, a flower, a field* (champ), *a meadow* (prairie), *a hill* (colline), *a valley* (vallée), *a cliff* (falaise), *a canyon, a rock, a bush* (buisson) ;
- contes : *a sorcerer* (sorcier), *poison* ; *to meet* (rencontrer), *to help, to discover* (découvrir), *to frighten* (effrayer), *to fall in love* (tomber amoureux) ;
- fêtes : *a tradition, a celebration* ; *Easter* (Pâques) et ses *Easter eggs* ; *a Bank Holiday* (jour férié au Royaume-Uni) ; *Independence Day* (4 juillet, fête nationale des États-Unis) ; *Diwali* (la fête des lumières, venue d'Inde) ;
- les siècles : *the 21st century* = *the twenty-first century* (le XXIe siècle).

## Préciser ce que l'on dit
- *very* (très), *too* (trop) : *She has got very long hair. It's too hot!*
- *maybe / perhaps* (peut-être) : *Maybe he's disappointed.*

>! Exemple : enrichir une phrase A1 → A1+. *My brother is tall. He has got short hair.* → *My brother is very tall and good-looking. He has got short curly hair and freckles. He's outgoing, but a bit clumsy!*

### Pièges
- *pants* = un slip au Royaume-Uni, mais un pantalon aux États-Unis : au Royaume-Uni, dis *trousers* !
- *a cook* = un cuisinier (la personne) ; *a cooker* = une cuisinière (l'appareil).
- *furniture* (les meubles) ne prend jamais de -s : *a lot of furniture*.
- le **b** de *plumber* et de *thumb* (pouce) ne se prononce pas.

> **À retenir** : pour passer de A1 à A1+, précise tes phrases : cheveux *curly / straight*, caractère *outgoing / clumsy*, émotions *disappointed*, fréquence *once a week*, paysages *hill, cliff, valley*. Attention aux pièges : *pants* (slip en Grande-Bretagne), *a cook* (cuisinier) ≠ *a cooker* (appareil), *furniture* sans -s.
`,
      exercices: [
        { type: "qcm", question: "Ta correspondante t'envoie une photo : elle a les cheveux bouclés. Comment le dit-elle ?", choix: ["I've got straight hair.", "I've got curly hair.", "I'm bald.", "I've got freckles."], reponse: 1, explication: "Cheveux bouclés = **curly hair**. *Straight* = raides, *bald* = chauve, *freckles* = taches de rousseur." },
        { type: "saisie", question: "Traduis : « mon voisin »", reponses: ["my neighbour", "my neighbor"], explication: "Un voisin = **a neighbour** (orthographe britannique ; *neighbor* aux États-Unis). Le quartier = *the neighbourhood*." },
        { type: "vf", question: "En anglais britannique, le mot *pants* veut dire « pantalon ».", reponse: false, explication: "Piège ! Au Royaume-Uni, *pants* désigne un **slip** (sous-vêtement) ; le pantalon se dit **trousers**. Aux États-Unis, en revanche, *pants* = pantalon." },
        { type: "qcm", question: "Dans un restaurant, *the cook* est...", choix: ["la cuisinière (l'appareil)", "la recette", "la personne qui fait la cuisine", "un petit gâteau"], reponse: 2, explication: "*A cook* = **un cuisinier**, la personne. L'appareil se dit *a cooker* ; un petit gâteau, *a cookie* aux États-Unis." },
        { type: "saisie", question: "Complète : *I play basketball ___ a week, every Wednesday.* (une fois ; écris seulement ce qui manque)", reponses: ["once"], explication: "Une fois par semaine = **once a week**. Deux fois = *twice a week* ; trois fois = *three times a week*." },
        { type: "qcm", question: "Les célèbres *White Cliffs of Dover* sont...", choix: ["des collines vertes", "des prairies", "des vallées profondes", "des falaises blanches"], reponse: 3, explication: "*A cliff* = **une falaise** : *the White Cliffs of Dover* sont les falaises blanches de Douvres. *A hill* = colline, *a meadow* = prairie, *a valley* = vallée." },
        { type: "saisie", question: "Complète avec un adverbe : *It's raining, but ___ we have got our umbrellas!* (heureusement ; écris seulement ce qui manque)", reponses: ["luckily", "fortunately"], explication: "*Heureusement* = **luckily** ou **fortunately**. Le contraire : *unfortunately* ou *sadly* (malheureusement)." },
        { type: "qcm", question: "Ton équipe vient de perdre la finale. Tu dis : *I'm really ___.*", choix: ["outgoing", "fashionable", "disappointed", "clumsy"], reponse: 2, explication: "Après une défaite, on est déçu : **disappointed**. *Outgoing* = sociable, *fashionable* = à la mode, *clumsy* = maladroit." },
        { type: "saisie", question: "Comment dit-on « le XXIe siècle » en anglais ? (écris le nombre en lettres)", reponses: ["the twenty-first century", "twenty-first century"], explication: "On utilise un **ordinal** : **the twenty-first century** (en abrégé : *the 21st century*)." },
        { type: "redaction", question: "Enrichis ce portrait de niveau A1 pour en faire un portrait A1+ (6 à 8 phrases) : *My cousin is Jack. He is tall. He has got hair. He is nice. He plays football. He likes animals.* Ajoute au moins six mots de ce chapitre (apparence, caractère, vêtements, fréquence, métier, émotions…).", corrige: `Exemple de réponse :

*My cousin is Jack. He is very tall and good-looking. He has got short curly hair and freckles. He is outgoing and friendly, but a bit clumsy: he often drops his glass at dinner time! He always wears trainers and a blue cap. He plays football twice a week in the sports hall. He loves animals: he walks the dog every day and he wants to be a vet. Sadly, he lives in Scotland, so I only see him once a year.*

Points vérifiés :
- apparence précise : *very tall, good-looking, curly hair, freckles* ;
- caractère : *outgoing, clumsy* ; vêtements : *trainers* ;
- fréquence : *twice a week, once a year* ; quotidien : *walks the dog* ;
- émotion ou commentaire : *Sadly* ;
- les phrases simples de départ sont gardées et précisées avec *very*, *but*, *so*.` },
      ],
    },
    {
      id: "lire-textes-axes",
      titre: "Lire en anglais : un géant irlandais, un parc au Kenya, le journal de Greg",
      theme: "Culture",
      cours: `
> Trois textes d'entraînement, liés à trois axes du programme : une **légende** (axe 4, l'imaginaire), un **blog** (axe 3, pays et paysages) et un **journal** de collégien (axe 1, personnages). Chaque type de texte se lit avec une méthode un peu différente.

## Lire une légende
- Repère **les personnages** (*a giant, a poet, a wife*) et **les lieux** (*Ireland, Scotland, the sea*).
- Suis **les étapes** grâce aux mots de temps : *Long ago* (il y a longtemps), *One day* (un jour), *Then* (ensuite), *Suddenly* (soudain), *Later* (plus tard), *In the end* (à la fin).
- Une légende se raconte au passé ou, comme ici, **au présent** : c'est plus vivant.
- Mots utiles : *a salmon* (saumon), *knowledge* (le savoir), *a thumb* (pouce), *clever* (malin), *to fight* (combattre), *to build* (construire), *stones* (pierres), *to run away* (s'enfuir).

## Lire un blog ou un texte informatif
- Cherche les **informations précises** : chiffres, lieux, noms d'animaux.
- Appuie-toi sur les **mots transparents** : *national park, capital, giraffes, protect, danger*.
- Mots utiles : *the city centre* (le centre-ville), *skyscrapers* (gratte-ciel), *wild* (sauvage), *in danger* (menacé), *a horn* (corne), *a ranger* (garde du parc).

## Lire un journal (diary)
- Le narrateur dit **I** : c'est lui qui raconte, avec **ses** opinions. Il peut **exagérer** pour être drôle !
- Repère les personnes et ce qu'il pense d'elles : *annoying* (agaçant), *childish* (puéril, qui fait bébé), *the worst* (le pire), *to get in trouble* (se faire gronder).

>! Exemple résolu : *Why does Finn run home?* 1) Repère les mots-clés *runs home* dans le texte ; 2) lis la phrase d'avant : *But Benandonner is enormous!* ; 3) réponds avec tes mots : Finn a peur, car Benandonner est énorme, bien plus grand que lui.

### Erreurs fréquentes
- Répondre avec ce que tu **sais déjà** au lieu de ce que dit **le texte**.
- Confondre **qui fait quoi** : regarde à qui renvoient *he, she, his, her*.
- Pour un vrai / faux, ne pas **justifier** avec les mots du texte.

> **À retenir** : légende = personnages, lieux et étapes (*One day, Then, Later, In the end*) ; texte informatif = informations précises et mots transparents ; journal = un narrateur qui dit *I* et donne son avis, parfois en exagérant. Toujours : chercher la phrase du texte qui prouve ta réponse.
`,
      textes: {
        finn: `**Finn McCool, the Irish giant** (texte d'entraînement, d'après la légende irlandaise)

*Long ago, in Ireland, there lives a young giant called Finn McCool. He works for an old poet, Finnegas. One day, Finnegas catches a magic fish: the Salmon of Knowledge. "Cook it for me, but don't eat it!" he says. Finn cooks the salmon, but he burns his thumb, so he puts it in his mouth. Suddenly, he knows everything!*

*Later, Finn wants to fight Benandonner, a Scottish giant. So he builds a road of stones across the sea: the Giant's Causeway. But Benandonner is enormous! Finn runs home. His clever wife, Oonagh, dresses him as a baby and puts him in a cradle. When Benandonner sees the "baby", he is very scared: "If the baby is so big, his father is gigantic!" He runs back to Scotland and he breaks the road. In the end, only the two ends of the road stay: one in Northern Ireland and one in Scotland.*`,
        nairobi: `**My city has got lions!** — by Wanjiru, 11 (texte d'entraînement : Wanjiru est un personnage inventé)

*Jambo! That means "hello" in Swahili. My name is Wanjiru and I live in Nairobi, the capital city of Kenya. Nairobi is a big city with tall buildings, but next to it, there is a national park! Nairobi National Park is only about seven kilometres from the city centre. In the park, you can see lions, zebras, giraffes and buffaloes, and behind them, the skyscrapers of the city!*

*My favourite animal is the black rhino. Black rhinos are in danger because some people kill them for their horns. In the park, rangers protect them day and night.*

*Once a month, I go to the park with my family. We can't walk in the park: we must stay in the car, because the animals are wild. My dream is to be a ranger: I want to take care of the animals!*`,
        greg: `**A page from Greg's journal** (texte d'entraînement inspiré de *Diary of a Wimpy Kid*, de Jeff Kinney)

*Monday*

*First of all, this is NOT a diary. It's a journal! My mom bought this book, and I only write in it because one day I'm going to be famous.*

*My name is Greg Heffley and I'm in middle school. Middle school is the worst idea ever: some kids in my class are tiny, and some are giants with moustaches!*

*I've got two brothers. Rodrick is in high school and he plays the drums in a band. He's really annoying. Manny is three and he's the baby of the family: he never gets in trouble! My best friend is Rowley. He's nice, but he's a bit childish.*

*Today, Mom says I must play outside. I don't want to: I want to play video games!*`,
      },
      exercices: [
        { type: "qcm", texte: "finn", question: "Lis la légende. Qui attrape le saumon de la connaissance (*the Salmon of Knowledge*) ?", choix: ["Finn McCool", "le vieux poète Finnegas", "Oonagh", "Benandonner"], reponse: 1, explication: "*One day, Finnegas catches a magic fish* : c'est **le vieux poète Finnegas** qui l'attrape. Finn, lui, le fait cuire (*Finn cooks the salmon*)." },
        { type: "vf", texte: "finn", question: "Finn sait tout parce qu'il mange tout le saumon.", reponse: false, explication: "Faux : *he burns his thumb, so he puts it in his mouth. Suddenly, he knows everything!* Il se brûle le **pouce**, le met dans sa bouche, et c'est ainsi qu'il reçoit le savoir. Il ne mange pas le saumon." },
        { type: "saisie", texte: "finn", question: "Comment s'appelle la route de pierres que Finn construit au-dessus de la mer ? (recopie le nom anglais du texte)", reponses: ["the Giant's Causeway", "Giant's Causeway"], explication: "*He builds a road of stones across the sea: **the Giant's Causeway*** (la Chaussée des Géants). Le site existe vraiment, en Irlande du Nord, mais ses colonnes sont d'origine volcanique." },
        { type: "qcm", texte: "finn", question: "Pourquoi Benandonner s'enfuit-il en Écosse ?", choix: ["Finn est plus grand que lui.", "Oonagh le chasse avec un bâton.", "Il a peur de la mer.", "Il croit que le père du « bébé » est encore plus grand."], reponse: 3, explication: "*If the baby is so big, his father is gigantic!* : Benandonner pense que si le « bébé » est si grand, son père doit être **gigantesque**. Il a peur (*he is very scared*) et s'enfuit. C'était la ruse d'Oonagh (*his clever wife*)." },
        { type: "qcm", texte: "nairobi", question: "Lis le blog de Wanjiru. Qu'est-ce qui est surprenant dans le parc national de Nairobi ?", choix: ["Il est tout près de la ville : on voit les gratte-ciel derrière les animaux.", "Il n'y a pas d'animaux sauvages.", "Il est au bord de la mer.", "On peut s'y promener à pied avec les lions."], reponse: 0, explication: "*Only about seven kilometres from the city centre... and behind them, the skyscrapers of the city!* : le parc est **tout près de la ville**, et on voit les **gratte-ciel** (*skyscrapers*) derrière les animaux." },
        { type: "saisie", texte: "nairobi", question: "D'après le texte, que veut dire le mot swahili *Jambo* ? (réponds en anglais, avec le mot du texte)", reponses: ["hello"], explication: "*Jambo! That means \"hello\" in Swahili* : *Jambo* veut dire **hello** (bonjour). Le swahili est, avec l'anglais, une langue officielle du Kenya." },
        { type: "vf", texte: "nairobi", question: "D'après Wanjiru, les visiteurs peuvent marcher dans le parc au milieu des animaux.", reponse: false, explication: "Faux : *We can't walk in the park: we must stay in the car, because the animals are wild.* Il faut **rester dans la voiture**, car les animaux sont sauvages." },
        { type: "qcm", texte: "greg", question: "Lis la page du journal. Selon Greg, son livre est...", choix: ["un cahier de devoirs", "un journal intime (*a diary*)", "un *journal*, surtout pas un *diary*", "un livre écrit par sa mère"], reponse: 2, explication: "*This is NOT a diary. It's a journal!* Greg insiste : pour lui, c'est un **journal**, pas un *diary* (journal intime), un mot qu'il trouve trop enfantin. Sa mère a seulement acheté le livre (*My mom bought this book*)." },
        { type: "saisie", texte: "greg", question: "Comment s'appelle le meilleur ami de Greg ?", reponses: ["Rowley", "His best friend is Rowley", "His best friend's name is Rowley", "It's Rowley", "It is Rowley", "Rowley is his best friend", "His name is Rowley", "His best friend is called Rowley", "Greg's best friend is Rowley", "He is Rowley", "He's Rowley", "He is called Rowley", "He's called Rowley", "Greg's best friend's name is Rowley"], explication: "*My best friend is Rowley* : le meilleur ami de Greg est **Rowley**. Rodrick et Manny sont ses frères." },
        { type: "redaction", texte: "finn", question: "Raconte la légende de Finn McCool à un camarade anglais en 5 ou 6 phrases simples, **en anglais et avec tes mots** (sans recopier tout le texte). Utilise *One day, Then, Later* et *In the end*.", corrige: `Exemple de réponse :

*Finn McCool is a young Irish giant. One day, he cooks the Salmon of Knowledge for an old poet. He burns his thumb and he puts it in his mouth: then he knows everything! Later, he builds a road across the sea to fight a Scottish giant, Benandonner. But Benandonner is enormous, so Finn's wife dresses Finn as a baby. In the end, Benandonner is scared and he runs back to Scotland.*

Points vérifiés :
- les personnages (Finn, le poète, Benandonner, la femme de Finn) et les lieux (Ireland, Scotland) ;
- les étapes dans l'ordre, avec *One day, then, Later, In the end* ;
- des phrases courtes au présent, avec le -s de la 3e personne : *he cooks, he burns, he builds, he runs* ;
- des connecteurs *and, but, so* ; on reformule au lieu de recopier.` },
      ],
    },
  ],
};
