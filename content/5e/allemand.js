export default {
  chapitres: [
    {
      id: "alphabet-prononciation",
      titre: "L'alphabet et la prononciation",
      theme: "Les bases de la langue",
      cours: `
## L'alphabet allemand
L'allemand utilise les **26 lettres** du français, plus trois voyelles avec *Umlaut* (le tréma allemand) : **ä, ö, ü**, et une consonne spéciale : **ß** (*Eszett* ou *scharfes S*), qui se prononce « ss ».

| Lettre | Se dit | Lettre | Se dit |
|---|---|---|---|
| A | « a » | N | « èn » |
| B | « bé » | O | « o » |
| C | « tsé » | P | « pé » |
| D | « dé » | Q | « kou » |
| E | « é » | R | « èr » |
| F | « èf » | S | « ès » |
| G | « gué » | T | « té » |
| H | « ha » | U | « ou » |
| I | « i » | V | « faou » |
| J | « yott » | W | « vé » |
| K | « ka » | X | « iks » |
| L | « èl » | Y | « upsilonn » |
| M | « èm » | Z | « tsètt » |

Pour épeler ton prénom : *Ich heiße Léa : L – E – A.* Question utile : *Wie schreibt man das?* (Comment ça s'écrit ?)

## Les voyelles
- **u** se dit « ou » : *gut* (bien), *Buch* (livre).
- **ä** se dit « è » : *Mädchen* (fille), *Käse* (fromage).
- **ö** se dit « eu » : *schön* (beau), *Österreich* (Autriche).
- **ü** se dit « u » : *für* (pour), *fünf* (cinq).
- **ei** se dit « aï » : *drei* (trois), *heißen* (s'appeler), *Eis* (glace).
- **ie** se dit « i » long : *vier* (quatre), *spielen* (jouer), *Bier*.
- **eu** et **äu** se disent « oï » : *neun* (neuf), *Deutsch*, *Häuser* (maisons).
- **au** se dit « aou » : *Haus* (maison), *Frau* (femme).
- Le **e** final se prononce toujours (un « e » léger) : *Name*, *bitte*, *Schule*.

>! **Astuce ei / ie** : on prononce la **deuxième lettre** « à l'anglaise » : *ie* → « i » (*Liebe*, *vier*) ; *ei* → comme le *i* anglais de *like*, « aï » (*Wein*, *drei*). Pense à *Einstein* : « aïn-chtaïn ».

## Les consonnes
- **w** se dit « v » : *Wasser* (eau), *wie* (comment).
- **v** se dit le plus souvent « f » : *Vater* (père), *vier*. (Dans des mots étrangers : « v » : *Video*.)
- **z** se dit « ts » : *zehn* (dix), *Zimmer* (chambre). De même **tz** : *Katze* (chat).
- **j** se dit « y » : *ja* (oui), *Januar*.
- **s** devant une voyelle se dit « z » : *Sonne* (soleil), *Hase* (lièvre).
- **sch** se dit « ch » : *Schule* (école), *schwimmen* (nager).
- **sp** et **st** en début de mot se disent « chp » et « cht » : *Sport*, *Straße* (rue), *Stadt* (ville).
- **h** en début de mot est **aspiré** (on souffle) : *Haus*, *Hund*. Après une voyelle, il est muet et rend la voyelle **longue** : *gehen*, *Sohn*.
- **ch** a deux prononciations :
  - après **a, o, u, au** : son raclé au fond de la gorge (« ach-Laut ») : *Bach*, *Buch*, *auch* ;
  - après **e, i, ä, ö, ü, ei, eu** ou une consonne : son doux, comme un chuintement léger (« ich-Laut ») : *ich*, *Milch*, *Bücher*.
- **chs** se dit « ks » : *sechs* (six).
- **-ig** en fin de mot se dit « ich » : *zwanzig* (vingt), *lustig* (drôle).
- **ß** se dit « ss » : *heißen*, *Fuß* (pied). En Suisse, on écrit toujours **ss** : *Strasse*.

## L'accent de mot
En allemand, on appuie fortement sur une syllabe, en général la **première** : *Va*ter, *Mut*ter, *Schu*le, *Ham*burg.
- Exceptions : les préfixes **be-, ge-, ver-** ne sont pas accentués (*besuchen* se dit be-*su*-chen) ;
- beaucoup de mots d'origine étrangère sont accentués à la fin : Mu*sik*, Biolo*gie*, Ho*tel*, Ka*kao*.

## L'écriture
- **Tous les noms** prennent une **majuscule** : *der Hund*, *die Schule*, *das Haus*.
- Le pronom de politesse **Sie** (vous) prend aussi une majuscule ; *ich* (je) n'en prend pas.
- Si ton clavier n'a pas d'Umlaut, tu peux écrire **ae, oe, ue** (*Maedchen*) et **ss** pour ß (*Strasse*).

> **À retenir** : u = « ou » ; ei = « aï » ; ie = « i » ; eu = « oï » ; w = « v » ; v = « f » ; z = « ts » ; sch = « ch » ; st/sp au début = « cht/chp ». L'accent est en général sur la première syllabe. Tous les noms ont une majuscule.

### Erreurs fréquentes
- Lire *wie* « oui » : non, on dit « vi ».
- Lire *vier* (4) « vièr » : on dit « fir » (v = « f », ie = « i » long).
- Oublier la majuscule des noms : on écrit *ich habe einen Hund*, pas *hund*.
`,
      exercices: [
        { type: "qcm", question: "Comment se prononce le **w** de *Wasser* ?", choix: ["« v »", "« ou »", "« w » anglais", "« f »"], reponse: 0, explication: "En allemand, **w** se prononce toujours « v » : *Wasser* se dit « vasseur », *wie* se dit « vi »." },
        { type: "qcm", question: "Quel mot contient le son « aï » ?", choix: ["*vier*", "*spielen*", "*Liebe*", "*drei*"], reponse: 3, explication: "**ei** se dit « aï » : *drei* (trois). Dans *vier*, *spielen* et *Liebe*, on a **ie**, qui se dit « i » long." },
        { type: "vf", question: "Dans *zehn* (dix), le **z** se prononce « ts ».", reponse: true, explication: "Le **z** allemand se dit toujours « ts » : *zehn* → « tséén », *Zimmer* → « tsimmeur »." },
        { type: "qcm", question: "Dans quel mot le **ch** est-il raclé au fond de la gorge (comme dans *Bach*) ?", choix: ["*ich*", "*Buch*", "*Bücher*", "*Milch*"], reponse: 1, explication: "Le **ch** est raclé après **a, o, u, au** : *Buch* (u). Après *i*, *ü* ou une consonne (*ich*, *Bücher*, *Milch*), c'est le son doux, le « ich-Laut »." },
        { type: "vf", question: "En allemand, on n'écrit une majuscule qu'aux noms propres, comme en français.", reponse: false, explication: "En allemand, **tous les noms communs** prennent une majuscule : *der Hund*, *die Schule*, *das Buch*." },
        { type: "saisie", question: "Écris le mot allemand qui signifie « la rue » (sans l'article). Attention à la lettre spéciale !", reponses: ["Straße", "Strasse", "die Straße", "die Strasse"], explication: "*die **Straße*** s'écrit avec un **ß** (« ss »). En Suisse et si tu n'as pas la touche, on écrit *Strasse*. Le **st** du début se prononce « cht »." },
        { type: "qcm", question: "Sur quelle syllabe porte l'accent dans le mot *Mutter* (mère) ?", choix: ["Aucune syllabe n'est accentuée", "Sur la dernière : mut-*ter*", "Sur la première : *Mut*-ter", "Sur le r final"], reponse: 2, explication: "En allemand, l'accent est en général sur la **première syllabe** : *Mut*ter, *Va*ter, *Schu*le." },
        { type: "qcm", question: "Quel mot est accentué sur la **dernière** syllabe ?", choix: ["*Musik*", "*Schule*", "*Vater*", "*Hamburg*"], reponse: 0, explication: "*Musik* est un mot d'origine étrangère : on dit Mu-*sik*. Les autres suivent la règle générale (accent sur la première syllabe)." },
        { type: "saisie", question: "Comment demande-t-on en allemand « Comment ça s'écrit ? » (4 mots)", reponses: ["Wie schreibt man das?", "Wie schreibt man das", "Wie schreibt man das ?", "Wie buchstabiert man das?", "Wie buchstabiert man das"], explication: "*Wie schreibt man das?* : *wie* = comment, *schreibt* = écrit, *man* = on, *das* = cela. Le verbe est en 2e position après le mot interrogatif." },
        { type: "redaction", question: "Épelle ton prénom et ta ville en allemand (en écrivant comment se prononce chaque lettre), puis explique en français comment se prononcent les mots *Schule*, *zwei* et *vier*.", corrige: "Exemple pour **Léa** qui habite à **Lyon** :\n\n- *Ich heiße Léa. L (« èl ») – E (« é ») – A (« a »).*\n- *Ich wohne in Lyon. L (« èl ») – Y (« upsilonn ») – O (« o ») – N (« èn »).*\n\nPrononciation :\n- *Schule* : **sch** = « ch », **u** = « ou », **e** final prononcé → « chou-le », accent sur la 1re syllabe.\n- *zwei* : **z** = « ts », **w** = « v », **ei** = « aï » → « tsvaï ».\n- *vier* : **v** = « f », **ie** = « i » long → « fir ».\n\nPoints vérifiés : J se dit « yott », V « faou », W « vé », Y « upsilonn », Z « tsètt »." },
      ],
    },
    {
      id: "saluer-se-presenter",
      titre: "Saluer et se présenter",
      theme: "Communiquer au quotidien",
      cours: `
## Saluer et prendre congé
| Allemand | Français | Quand ? |
|---|---|---|
| Hallo! | Salut ! | entre jeunes, avec des amis |
| Guten Morgen! | Bonjour ! | le matin |
| Guten Tag! | Bonjour ! | dans la journée |
| Guten Abend! | Bonsoir ! | le soir |
| Gute Nacht! | Bonne nuit ! | au coucher |
| Tschüs! / Tschüss! | Salut ! (au revoir) | entre amis |
| Auf Wiedersehen! | Au revoir ! | poli |
| Bis morgen! / Bis bald! | À demain ! / À bientôt ! | |

En Autriche et en Bavière, on dit souvent **Grüß Gott!** (bonjour) et **Servus!** (salut) ; en Suisse alémanique, **Grüezi!** (bonjour).

## Demander des nouvelles
- *Wie geht's?* / *Wie geht es dir?* → Comment ça va ? (à un ami)
- *Wie geht es Ihnen?* → Comment allez-vous ? (poli)
- Réponses : *Gut, danke!* (Bien, merci !) – *Sehr gut!* (Très bien !) – *Es geht.* (Ça va, bof.) – *Nicht so gut.* (Pas très bien.) – *Schlecht.* (Mal.)
- Pour renvoyer la question : *Und dir?* (Et toi ?) – *Und Ihnen?* (Et vous ?)

## Tutoyer ou vouvoyer : du / Sie
- **du** = tu : avec les copains, la famille, les enfants.
- **Sie** (avec majuscule) = vous de politesse : avec les adultes que tu ne connais pas, les professeurs. Le verbe se conjugue comme avec *sie* (ils) : *Wie heißen Sie?*
- **ihr** = vous (pluriel), quand tu tutoies plusieurs personnes : *Wie heißt ihr?*

## Se présenter
| Question | Réponse |
|---|---|
| Wie heißt du? (Comment t'appelles-tu ?) | Ich heiße Paul. / Mein Name ist Paul. |
| Wie alt bist du? (Quel âge as-tu ?) | Ich bin zwölf (Jahre alt). |
| Woher kommst du? (D'où viens-tu ?) | Ich komme aus Frankreich. |
| Wo wohnst du? (Où habites-tu ?) | Ich wohne in Lyon. |
| Welche Sprachen sprichst du? | Ich spreche Französisch und Englisch. |

>! **Attention** : en allemand, on dit **Ich bin zwölf** (je *suis* douze ans) avec le verbe **sein** (être), pas avec *haben* (avoir) !

## Présenter quelqu'un
- *Das ist Anna.* (C'est Anna. / Voici Anna.)
- *Sie heißt Anna, sie ist dreizehn.* (Elle s'appelle Anna, elle a treize ans.)
- *Er heißt Tom und wohnt in Berlin.* (Il s'appelle Tom et habite à Berlin.)

## Formules de politesse
- *Bitte* : s'il te plaît / s'il vous plaît, et aussi « je t'en prie ».
- *Danke (schön)!* : Merci (beaucoup) ! – *Bitte (schön)!* : De rien !
- *Entschuldigung!* : Excuse-moi / Pardon !
- *Herr Müller* (Monsieur Müller), *Frau Schmidt* (Madame Schmidt).

> **À retenir** : *Ich heiße…* (je m'appelle) ; *Ich bin … Jahre alt* (j'ai … ans) ; *Ich komme aus…* ; *Ich wohne in…*. **du** pour les amis, **Sie** pour les adultes. *Wie geht's?* → *Gut, danke! Und dir?*

### Erreurs fréquentes
- *Ich habe zwölf Jahre* : faux ! On dit **Ich bin zwölf (Jahre alt)**.
- Écrire *sie* (elle/ils) au lieu de **Sie** (vous) : la majuscule change le sens.
- Dire *Gute Nacht* pour « bonsoir » : c'est **Guten Abend** ; *Gute Nacht* = bonne nuit.
`,
      exercices: [
        { type: "qcm", question: "Il est 8 h du matin, tu arrives au collège et tu salues ton professeur. Que dis-tu ?", choix: ["Gute Nacht!", "Tschüs!", "Guten Abend!", "Guten Morgen!"], reponse: 3, explication: "Le matin, on dit **Guten Morgen!** *Gute Nacht* = bonne nuit, *Tschüs* = salut (au revoir), *Guten Abend* = bonsoir." },
        { type: "saisie", question: "Complète : « Wie ___ du? » – « Ich heiße Max. »", reponses: ["heißt", "heisst"], explication: "Le verbe **heißen** à la 2e personne : *du heißt* (le *s* de la terminaison *-st* disparaît après ß). *Wie heißt du?* = Comment t'appelles-tu ?" },
        { type: "qcm", question: "Comment dit-on « J'ai douze ans » ?", choix: ["Ich habe zwölf Jahre.", "Ich bin zwölf Jahre alt.", "Ich heiße zwölf.", "Ich habe zwölf alt."], reponse: 1, explication: "En allemand, on exprime l'âge avec **sein** (être) : *Ich bin zwölf (Jahre alt)*. *Ich habe zwölf Jahre* est un calque fautif du français." },
        { type: "vf", question: "Pour parler poliment à un adulte inconnu, on utilise *du*.", reponse: false, explication: "Avec un adulte inconnu, on vouvoie avec **Sie** (majuscule) : *Wie heißen Sie?* *du* est réservé aux amis, à la famille et aux jeunes." },
        { type: "saisie", question: "Traduis : « D'où viens-tu ? »", reponses: ["Woher kommst du?", "Woher kommst du", "Woher kommst du ?", "Wo kommst du her?", "Wo kommst du her"], explication: "*Woher* = d'où ; *kommst* = viens (verbe *kommen*, 2e personne) ; le verbe est en 2e position, puis le sujet *du*. À l'oral, on entend aussi *Wo kommst du her?* Réponse : *Ich komme aus Frankreich.*" },
        { type: "qcm", question: "Ton copain te demande *Wie geht's?* Tu vas moyennement bien. Que réponds-tu ?", choix: ["Gute Nacht!", "Sehr gut!", "Es geht.", "Ich heiße gut."], reponse: 2, explication: "**Es geht** = ça va, bof, comme ci comme ça. *Sehr gut* = très bien." },
        { type: "saisie", question: "Complète avec la préposition qui convient : « Ich wohne ___ Marseille. »", reponses: ["in"], explication: "On habite **in** + ville : *Ich wohne in Marseille.* Pour l'origine, on utilise **aus** : *Ich komme aus Frankreich.*" },
        { type: "qcm", question: "Quelle salutation entend-on surtout en Suisse alémanique ?", choix: ["Grüezi!", "Servus!", "Moin!", "Grüß Gott!"], reponse: 0, explication: "**Grüezi!** est le « bonjour » suisse alémanique. *Grüß Gott* et *Servus* sont typiques de l'Autriche et de la Bavière ; *Moin* du nord de l'Allemagne." },
        { type: "saisie", question: "Traduis poliment : « Comment allez-vous ? »", reponses: ["Wie geht es Ihnen?", "Wie geht es Ihnen", "Wie geht's Ihnen?", "Wie geht's Ihnen"], explication: "**Wie geht es Ihnen?** est la forme polie (*Ihnen* = à vous, avec majuscule). À un ami : *Wie geht es dir?* ou *Wie geht's?*" },
        { type: "redaction", question: "Écris un petit texte de présentation (5 à 6 phrases) pour ton correspondant allemand : salue-le, donne ton nom, ton âge, ton pays, ta ville, les langues que tu parles, puis demande-lui comment il s'appelle et quel âge il a.", corrige: "**Modèle :**\n\n*Hallo! Ich heiße Inès. Ich bin zwölf Jahre alt. Ich komme aus Frankreich und ich wohne in Toulouse. Ich spreche Französisch, Englisch und ein bisschen Deutsch. Und du? Wie heißt du und wie alt bist du? Tschüs!*\n\nPoints à vérifier :\n- **Ich heiße** + prénom ; **Ich bin** + âge (pas *ich habe*) ;\n- **aus** + pays (*aus Frankreich*), **in** + ville (*in Toulouse*) ;\n- les noms de langues ont une majuscule (*Französisch*, *Deutsch*) ;\n- les questions commencent par le mot interrogatif suivi du verbe : *Wie heißt du?* *Wie alt bist du?*" },
        { type: "qcm", question: "**Compréhension.** Lis le texte : « *Hallo! Ich heiße Jonas. Ich bin dreizehn Jahre alt. Ich komme aus Österreich, aber ich wohne jetzt in München. Ich spreche Deutsch, Englisch und ein bisschen Französisch.* » Quelle affirmation est vraie ?", choix: ["Jonas a 30 ans et vient d'Allemagne.", "Jonas a 13 ans et habite à Munich.", "Jonas habite en Autriche et parle très bien français.", "Jonas a 12 ans et vient de Munich."], reponse: 1, explication: "*dreizehn* = 13 (et non *dreißig*, 30) ; *Ich komme aus Österreich* = il **vient** d'Autriche, *ich wohne jetzt in München* = il **habite** maintenant à Munich ; *ein bisschen Französisch* = **un peu** de français." },
      ],
    },
    {
      id: "nombres-date-heure",
      titre: "Les nombres, la date et l'heure",
      theme: "Communiquer au quotidien",
      cours: `
## Les nombres de 0 à 20
| | | | |
|---|---|---|---|
| 0 null | 1 eins | 2 zwei | 3 drei |
| 4 vier | 5 fünf | 6 sechs | 7 sieben |
| 8 acht | 9 neun | 10 zehn | 11 elf |
| 12 zwölf | 13 dreizehn | 14 vierzehn | 15 fünfzehn |
| 16 sechzehn | 17 siebzehn | 18 achtzehn | 19 neunzehn |
| 20 zwanzig | | | |

Attention : 16 = **sech**zehn (on perd le *s*) et 17 = **sieb**zehn (on perd *en*).

## Les dizaines et au-delà
30 dreißig – 40 vierzig – 50 fünfzig – 60 sechzig – 70 siebzig – 80 achtzig – 90 neunzig – 100 (ein)hundert – 1000 (ein)tausend.

>! **Méthode** : de 21 à 99, on dit **l'unité d'abord**, puis *und*, puis la dizaine, le tout en un seul mot.
>! 21 = *ein***und***zwanzig* (un-et-vingt) ; 35 = *fünfunddreißig* ; 67 = *siebenundsechzig* ; 99 = *neunundneunzig*.
>! 245 = *zweihundertfünfundvierzig*.

## Les jours de la semaine (der Tag, die Woche)
*Montag* (lundi), *Dienstag* (mardi), *Mittwoch* (mercredi), *Donnerstag* (jeudi), *Freitag* (vendredi), *Samstag* (samedi, aussi *Sonnabend* dans le nord), *Sonntag* (dimanche). Tous sont masculins : *der Montag*. « Le lundi / lundi » : **am Montag**. « Le week-end » : *das Wochenende*, *am Wochenende*.

## Les mois et les saisons
*Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember* (en Autriche, janvier se dit *Jänner*). « En mai » : **im Mai**.
Les saisons (masculines) : *der Frühling* (printemps), *der Sommer* (été), *der Herbst* (automne), *der Winter* (hiver) → *im Sommer* (en été).

## La date
- *Welcher Tag ist heute?* → *Heute ist Montag.*
- *Der Wievielte ist heute?* → *Heute ist der dritte Mai* (le 3 mai), écrit *der 3. Mai* : le point après le chiffre indique un nombre ordinal.
- Ordinaux : 1. erste, 2. zweite, 3. dritte, 4. vierte, 7. siebte, 8. achte ; jusqu'à 19 : nombre + **-te** ; à partir de 20 : nombre + **-ste** (*zwanzigste*, *einunddreißigste*).
- *Wann hast du Geburtstag?* (Quand est ton anniversaire ?) → *Ich habe **am** zwölften März Geburtstag* (*am 12. März*). Après *am*, l'ordinal se termine en **-en**.
- *Herzlichen Glückwunsch zum Geburtstag!* = Joyeux anniversaire !

## L'heure
- *Wie spät ist es?* / *Wie viel Uhr ist es?* → *Es ist acht Uhr.*
| Heure | Langage courant | Horaire officiel |
|---|---|---|
| 8:00 | acht Uhr | acht Uhr |
| 8:10 | zehn nach acht | acht Uhr zehn |
| 8:15 | Viertel nach acht | acht Uhr fünfzehn |
| 8:30 | **halb neun** | acht Uhr dreißig |
| 8:45 | Viertel vor neun | acht Uhr fünfundvierzig |
| 8:50 | zehn vor neun | acht Uhr fünfzig |

>! **Piège de « halb »** : *halb neun* = la moitié du chemin **vers** neuf heures, donc **8 h 30**, et non 9 h 30 !

- « À quelle heure ? » : *Um wie viel Uhr?* → **um** sieben Uhr (à sept heures).
- *Mittag* (midi), *Mitternacht* (minuit) ; *morgens* (le matin), *nachmittags* (l'après-midi), *abends* (le soir).

> **À retenir** : 21 = einundzwanzig (unité + und + dizaine) ; **am** + jour/date, **im** + mois/saison, **um** + heure ; *halb neun* = 8 h 30 ; *Ich bin zwölf*, *Ich habe am 5. Mai Geburtstag*.

### Erreurs fréquentes
- Écrire *zwanzigeins* pour 21 : c'est **einundzwanzig**.
- Traduire *halb sieben* par 7 h 30 : c'est **6 h 30**.
- Oublier la majuscule : *der Montag*, *der Mai* sont des noms.
`,
      exercices: [
        { type: "saisie", question: "Écris en lettres le nombre **17**.", reponses: ["siebzehn"], explication: "17 = **siebzehn** (et non *siebenzehn*) : *sieben* perd sa fin *-en*. De même, 16 = *sechzehn*." },
        { type: "saisie", question: "Écris en lettres le nombre **34**.", reponses: ["vierunddreißig", "vierunddreissig"], explication: "On dit l'unité d'abord : **vier** + **und** + **dreißig** = *vierunddreißig*, en un seul mot." },
        { type: "saisie", question: "Écris en chiffres : *achtundfünfzig*.", reponses: ["58"], explication: "*acht* (8) **und** *fünfzig* (50) = **58**. On lit l'unité avant la dizaine." },
        { type: "qcm", question: "Quelle heure est-il quand on dit *Es ist halb sieben* ?", choix: ["7 h 30", "6 h 45", "7 h 15", "6 h 30"], reponse: 3, explication: "*halb sieben* = la moitié avant sept heures, donc **6 h 30**. C'est le piège classique !" },
        { type: "qcm", question: "Comment dit-on 10 h 45 en langage courant ?", choix: ["Viertel nach elf", "Viertel vor elf", "halb elf", "Viertel vor zehn"], reponse: 1, explication: "10 h 45 = un quart avant onze heures : **Viertel vor elf**. *Viertel nach elf* = 11 h 15 ; *halb elf* = 10 h 30." },
        { type: "saisie", question: "Quel jour vient après *Mittwoch* ?", reponses: ["Donnerstag", "der Donnerstag"], explication: "Montag, Dienstag, Mittwoch, **Donnerstag** (jeudi), Freitag, Samstag, Sonntag." },
        { type: "qcm", question: "Complète : « Ich habe ___ 4. Juli Geburtstag. »", choix: ["im", "um", "am", "in"], reponse: 2, explication: "Devant une date ou un jour, on utilise **am** : *am 4. Juli* (am vierten Juli), *am Montag*. **im** sert pour les mois et saisons (*im Juli*), **um** pour l'heure." },
        { type: "vf", question: "*im Winter* signifie « en hiver ».", reponse: true, explication: "Avec les saisons et les mois, on emploie **im** : *im Winter*, *im Sommer*, *im Mai*." },
        { type: "saisie", question: "Traduis la question : « Quelle heure est-il ? » (commence par *Wie spät*)", reponses: ["Wie spät ist es?", "Wie spät ist es", "Wie spaet ist es"], explication: "**Wie spät ist es?** (mot à mot : à quel point est-il tard ?). Autre forme : *Wie viel Uhr ist es?*" },
        { type: "redaction", question: "Écris 5 phrases en allemand : la date d'aujourd'hui (ex. lundi 14 octobre), la date de ton anniversaire, l'heure à laquelle tu te lèves (avec *um*), l'heure de début des cours, et ta saison préférée.", corrige: "**Modèle :**\n\n- *Heute ist Montag, der 14. Oktober.*\n- *Ich habe am 23. März Geburtstag.* (am dreiundzwanzigsten März)\n- *Ich stehe um sieben Uhr auf.* (ou plus simple : *Um sieben Uhr frühstücke ich.*)\n- *Die Schule beginnt um acht Uhr.*\n- *Meine Lieblingsjahreszeit ist der Sommer.*\n\nPoints à vérifier : le point après le chiffre de la date (*der 14.*), **am** + date, **um** + heure, **im** + saison, majuscule aux noms de jours et de mois." },
      ],
    },
    {
      id: "famille-animaux",
      titre: "La famille et les animaux",
      theme: "Moi et les autres",
      cours: `
## La famille (die Familie)
| Masculin (der) | Féminin (die) | Pluriel (die) |
|---|---|---|
| der Vater (père) | die Mutter (mère) | die Eltern (parents) |
| der Bruder (frère) | die Schwester (sœur) | die Geschwister (frères et sœurs) |
| der Sohn (fils) | die Tochter (fille) | die Kinder (enfants) |
| der Großvater / der Opa | die Großmutter / die Oma | die Großeltern |
| der Onkel (oncle) | die Tante (tante) | |
| der Cousin (cousin) | die Cousine (cousine) | |
| der Mann (homme, mari) | die Frau (femme, épouse) | |

Familier : *Papa*, *Mama*. Familles modernes : *der Stiefvater* (beau-père), *die Stiefmutter*, *der Halbbruder*. Si tu n'as ni frère ni sœur : *Ich bin Einzelkind* (enfant unique).

## Parler de sa famille
- *Hast du Geschwister?* (As-tu des frères et sœurs ?)
- *Ja, ich habe **einen** Bruder und **eine** Schwester.* (Après *haben*, *ein* devient **einen** au masculin : c'est l'accusatif.)
- *Nein, ich habe **keine** Geschwister.*
- *Mein Bruder heißt Lukas. Er ist fünfzehn.* – *Meine Schwester heißt Lena. Sie ist acht.*
- *Meine Eltern heißen Marc und Sophie.*

>! **mein / meine** : *mein* devant un nom masculin ou neutre (*mein Vater*, *mein Pferd*), *meine* devant un féminin ou un pluriel (*meine Mutter*, *meine Eltern*).

## Les animaux (die Tiere)
| Animal | Pluriel |
|---|---|
| der Hund (chien) | die Hunde |
| die Katze (chat) | die Katzen |
| das Pferd (cheval) | die Pferde |
| das Kaninchen (lapin) | die Kaninchen |
| das Meerschweinchen (cochon d'Inde) | die Meerschweinchen |
| der Hamster | die Hamster |
| der Vogel (oiseau) | die Vögel |
| der Fisch (poisson) | die Fische |
| die Maus (souris) | die Mäuse |
| die Schildkröte (tortue) | die Schildkröten |

- *Hast du ein Haustier?* (As-tu un animal domestique ?)
- *Ja, ich habe einen Hund. Er heißt Rex.* – *Ich habe eine Katze. Sie ist schwarz.*
- *Nein, ich habe kein Haustier.*
- *Mein Lieblingstier ist das Pferd.* (Mon animal préféré est le cheval.)

>! **Le pronom suit le genre du nom**, pas le sexe : *der Hund* → **er** ; *die Katze* → **sie** (même si c'est un matou) ; *das Pferd* → **es**. Et *das Mädchen* (la fille) → **es** !

> **À retenir** : *der Vater, die Mutter, die Eltern, der Bruder, die Schwester, die Geschwister*. *Ich habe einen Bruder / eine Schwester / ein Pferd / keine Geschwister*. *mein* (masc./neutre), *meine* (fém./pluriel).

### Erreurs fréquentes
- *die Eltern* n'a pas de singulier pour dire « parent » : on dit *mein Vater* ou *meine Mutter*.
- *Ich habe ein Bruder* : faux, il faut l'accusatif **einen Bruder**.
- *Geschwister* ≠ « sœurs » seulement : c'est « frères et sœurs ».
`,
      exercices: [
        { type: "saisie", question: "Traduis « la sœur » (avec l'article).", reponses: ["die Schwester"], explication: "**die Schwester** (féminin). Pluriel : *die Schwestern*. Le frère : *der Bruder*." },
        { type: "qcm", question: "Que signifie *die Geschwister* ?", choix: ["les frères et sœurs", "les sœurs uniquement", "les cousins", "les grands-parents"], reponse: 0, explication: "*die Geschwister* désigne l'ensemble des **frères et sœurs**. Les grands-parents : *die Großeltern*." },
        { type: "saisie", question: "Écris le mot allemand pour « les parents » (sans l'article).", reponses: ["Eltern", "die Eltern"], explication: "**die Eltern** : toujours au pluriel. Avec le possessif : *meine Eltern*." },
        { type: "qcm", question: "Complète : « Ich habe ___ Hund. »", choix: ["ein", "eine", "einer", "einen"], reponse: 3, explication: "*der Hund* est masculin ; après *haben*, on est à l'accusatif : *ein* → **einen**. *Ich habe einen Hund.*" },
        { type: "qcm", question: "*Das ist meine Katze. ___ ist sehr süß.* Quel pronom ?", choix: ["Er", "Sie", "Es", "Ihr"], reponse: 1, explication: "*die Katze* est féminin → pronom **sie** (*Sie* en début de phrase). Le pronom suit le genre grammatical du nom." },
        { type: "saisie", question: "Écris le pluriel de *der Vogel* (l'oiseau), sans l'article.", reponses: ["Vögel", "die Vögel", "Voegel"], explication: "*der Vogel* → **die Vögel** : le pluriel prend un Umlaut (o → ö), sans terminaison." },
        { type: "vf", question: "*mein* s'emploie devant *Mutter* : « mein Mutter ».", reponse: false, explication: "*die Mutter* est féminin : on dit **meine Mutter**. *mein* s'emploie devant un nom masculin ou neutre (*mein Vater*, *mein Pferd*)." },
        { type: "saisie", question: "Traduis : « Je suis enfant unique. »", reponses: ["Ich bin Einzelkind.", "Ich bin Einzelkind", "Ich bin ein Einzelkind", "Ich bin ein Einzelkind."], explication: "**Ich bin Einzelkind** (on peut aussi dire *ein Einzelkind*). *das Einzelkind* = l'enfant unique." },
        { type: "qcm", question: "Quel est l'article de *Pferd* (cheval) ?", choix: ["der", "die", "das", "den"], reponse: 2, explication: "**das Pferd** est neutre ; pronom : *es*. Pluriel : *die Pferde*." },
        { type: "redaction", question: "Présente ta famille en 6 phrases (réelle ou imaginaire) : combien de frères et sœurs, leurs prénoms et âges, le prénom de tes parents, et ton animal (ou celui que tu aimerais).", corrige: "**Modèle :**\n\n*Ich heiße Hugo. In meiner Familie sind wir fünf. Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Tom, er ist sechzehn Jahre alt. Meine Schwester heißt Jade, sie ist neun. Meine Eltern heißen Paul und Claire. Wir haben eine Katze. Sie heißt Mimi und sie ist grau. Mein Lieblingstier ist aber das Pferd.*\n\nPoints à vérifier :\n- **einen Bruder**, **eine Schwester**, **ein Pferd** après *haben* ;\n- **mein** Bruder / **meine** Schwester / **meine** Eltern ;\n- les pronoms : *Bruder* → **er**, *Schwester* / *Katze* → **sie** ;\n- l'âge avec **sein** : *er ist sechzehn*." },
        { type: "saisie", question: "**Compréhension.** Lis le texte : « *Das ist Mia. Sie ist zwölf. Sie hat einen Bruder, Leon, und zwei Schwestern, Emma und Lina. Ihre Eltern heißen Jan und Sara. Die Familie hat einen Hund und zwei Katzen.* » Combien Mia a-t-elle de frères et sœurs ? (écris le nombre en chiffres)", reponses: ["3", "drei"], explication: "*einen Bruder* (1 frère) + *zwei Schwestern* (2 sœurs) = **3** frères et sœurs (*Geschwister*). *Jan* et *Sara* sont ses parents (*Ihre Eltern*), et la famille a 1 chien et 2 chats." },
      ],
    },
    {
      id: "genre-articles-pluriel",
      titre: "Le genre des noms, les articles et le pluriel",
      theme: "Grammaire",
      cours: `
## Trois genres
En allemand, chaque nom a un **genre** : masculin, féminin ou **neutre**. Il ne correspond pas toujours au français : *der Tisch* (la table, masculin), *die Sonne* (le soleil, féminin), *das Mädchen* (la fille, neutre).

| | Masculin | Féminin | Neutre | Pluriel |
|---|---|---|---|---|
| Article défini (le, la, les) | **der** Hund | **die** Katze | **das** Pferd | **die** Hunde |
| Article indéfini (un, une) | **ein** Hund | **eine** Katze | **ein** Pferd | — (Hunde) |
| Article négatif (pas de) | **kein** Hund | **keine** Katze | **kein** Pferd | **keine** Hunde |

>! **Méthode** : apprends **toujours** un nom avec son article et son pluriel, par exemple : *der Hund, die Hunde*. Tu peux utiliser des couleurs dans ton cahier : bleu pour *der*, rouge pour *die*, vert pour *das*.

## Quelques indices pour deviner le genre
- Sont **masculins** : les jours, mois et saisons (*der Montag, der Mai, der Winter*), la plupart des hommes et animaux mâles (*der Vater, der Lehrer*).
- Sont **féminins** : la plupart des noms en **-e** (*die Schule, die Lampe*), en **-ung, -heit, -keit** (*die Wohnung*) et les femmes (*die Mutter*, *die Lehrerin* : le suffixe **-in** forme le féminin).
- Sont **neutres** : les noms en **-chen** et **-lein** (petits mots, « diminutifs » : *das Mädchen, das Brötchen*), les verbes employés comme nom (*das Essen*).
- Dans un **mot composé**, c'est le **dernier mot** qui donne le genre : *das Haus* + *die Tür* → **die** *Haustür* ; *die Schule* + *das Buch* → **das** *Schulbuch*.

## Le pluriel
Il n'y a pas une seule règle, mais quelques grands modèles. L'article pluriel est **toujours die**.
| Modèle | Exemples |
|---|---|
| **-e** (souvent avec Umlaut) | der Hund → die Hund**e** ; der Stuhl → die St**ü**hl**e** |
| **-(e)n** (la plupart des féminins) | die Katze → die Katze**n** ; die Frau → die Frau**en** |
| **-er** (souvent avec Umlaut) | das Kind → die Kind**er** ; das Buch → die B**ü**ch**er** |
| **-s** (mots étrangers) | das Auto → die Auto**s** ; das Sofa → die Sofa**s** |
| **pas de terminaison** (noms en -er, -el, -chen) | der Lehrer → die Lehrer ; das Mädchen → die Mädchen ; der Vogel → die V**ö**gel |

## Les pronoms remplacent le nom selon son genre
*der* → **er** ; *die* → **sie** ; *das* → **es** ; pluriel → **sie**.
*Wo ist der Kuli? – **Er** ist hier.* (Où est le stylo ? – Il est là.)
*Das Buch ist toll. **Es** ist spannend.*

## « C'est… / Ce sont… »
*Das ist ein Hund.* (C'est un chien.) – *Das ist eine Lampe.* – *Das sind Bücher.* (Ce sont des livres.) – Au pluriel, pas d'article indéfini.

> **À retenir** : **der** (masc.), **die** (fém.), **das** (neutre), **die** (pluriel) ; **ein / eine / ein** ; **kein / keine / kein / keine**. Apprends chaque nom avec article + pluriel. -chen → neutre ; -e → souvent féminin ; mot composé → genre du dernier mot.

### Erreurs fréquentes
- Traduire mot à mot le genre français : *le soleil* → **die** Sonne, *la lune* → **der** Mond.
- Mettre *ein* au pluriel : *ein Bücher* est faux → *Bücher* (sans article) ou *keine Bücher*.
- *das Mädchen* est neutre : on dit *Das Mädchen ist nett. **Es** heißt Mia.*
`,
      exercices: [
        { type: "qcm", question: "Quel est l'article de *Schule* (école) ?", choix: ["die", "der", "das", "den"], reponse: 0, explication: "**die Schule** : la plupart des noms en **-e** sont féminins." },
        { type: "qcm", question: "Quel est l'article de *Mädchen* (fille) ?", choix: ["die, car c'est une fille", "der", "Il n'a pas d'article", "das, car le mot finit en -chen"], reponse: 3, explication: "Les noms en **-chen** sont toujours **neutres** : *das Mädchen*, *das Brötchen*, *das Kaninchen*." },
        { type: "saisie", question: "Donne l'article défini de *Schulbuch* (livre scolaire) : der, die ou das ?", reponses: ["das"], explication: "Dans un mot composé, c'est le **dernier mot** qui commande : *die Schule* + *das Buch* → **das** *Schulbuch*." },
        { type: "saisie", question: "Écris le pluriel de *das Kind* (avec l'article).", reponses: ["die Kinder"], explication: "*das Kind* → **die Kinder** (pluriel en **-er**). L'article pluriel est toujours *die*." },
        { type: "saisie", question: "Écris le pluriel de *die Katze* (avec l'article).", reponses: ["die Katzen"], explication: "La plupart des féminins forment leur pluriel en **-(e)n** : *die Katze* → **die Katzen**." },
        { type: "vf", question: "Au pluriel, l'article défini est toujours *die*, quel que soit le genre du nom.", reponse: true, explication: "Oui : *der Hund → die Hunde*, *das Kind → die Kinder*, *die Katze → die Katzen*." },
        { type: "qcm", question: "Complète : « Das ist ___ Lampe. » (C'est une lampe.)", choix: ["ein", "eine", "einen", "kein"], reponse: 1, explication: "*die Lampe* est féminin → article indéfini **eine**." },
        { type: "qcm", question: "« Wo ist das Heft? – ___ ist im Rucksack. » Quel pronom ?", choix: ["Er", "Sie", "Es", "Das"], reponse: 2, explication: "*das Heft* est neutre → **es**. *Es ist im Rucksack.*" },
        { type: "saisie", question: "Forme le féminin de *der Lehrer* (le professeur) avec l'article.", reponses: ["die Lehrerin"], explication: "Le suffixe **-in** forme le féminin des personnes : *der Lehrer* → **die Lehrerin** (pluriel : *die Lehrerinnen*)." },
        { type: "redaction", question: "Range dans un tableau (der / die / das) les noms suivants avec leur pluriel : *Hund, Katze, Buch, Stuhl, Lampe, Mädchen, Auto, Frau*. Puis écris 3 phrases du type « Das ist… » et « Das sind… ».", corrige: "**Tableau :**\n\n| der | die | das |\n|---|---|---|\n| der Hund – die Hunde | die Katze – die Katzen | das Buch – die Bücher |\n| der Stuhl – die Stühle | die Lampe – die Lampen | das Mädchen – die Mädchen |\n| | die Frau – die Frauen | das Auto – die Autos |\n\n**Phrases :**\n- *Das ist ein Hund.*\n- *Das ist eine Lampe.*\n- *Das sind Bücher.* (pas d'article indéfini au pluriel)\n\nRappels : -e → souvent féminin ; -chen → neutre ; *Auto* (mot étranger) → pluriel en -s." },
      ],
    },
    {
      id: "present-des-verbes",
      titre: "Les pronoms personnels et le présent des verbes",
      theme: "Grammaire",
      cours: `
## Les pronoms personnels sujets
| Singulier | Pluriel |
|---|---|
| **ich** (je) | **wir** (nous) |
| **du** (tu) | **ihr** (vous, plusieurs personnes tutoyées) |
| **er** (il), **sie** (elle), **es** (neutre), **man** (on) | **sie** (ils, elles) |
| | **Sie** (vous de politesse, singulier ou pluriel) |

## Les verbes réguliers
On enlève **-en** de l'infinitif pour trouver le **radical**, puis on ajoute les terminaisons.
| wohnen (habiter) | spielen (jouer) | Terminaison |
|---|---|---|
| ich wohn**e** | ich spiel**e** | -e |
| du wohn**st** | du spiel**st** | -st |
| er/sie/es wohn**t** | er/sie/es spiel**t** | -t |
| wir wohn**en** | wir spiel**en** | -en |
| ihr wohn**t** | ihr spiel**t** | -t |
| sie/Sie wohn**en** | sie/Sie spiel**en** | -en |

Autres verbes réguliers au présent : *kommen* (venir), *machen* (faire), *hören* (écouter), *lernen* (apprendre), *trinken* (boire), *schwimmen* (nager), *tanzen* (danser), *kochen* (cuisiner), *gehen* (aller à pied).

>! **Cas particuliers** :
>! - radical en **-t** ou **-d** : on ajoute un **e** pour pouvoir prononcer : *arbeiten* → du arbeit**est**, er arbeit**et**, ihr arbeit**et** ; *finden* → du find**est**, er find**et**.
>! - radical en **-s, -ß, -z** : à la 2e personne, seulement **-t** : *heißen* → du hei**ßt** ; *tanzen* → du tan**zt**.

## sein (être) et haben (avoir) : à savoir par cœur
| sein | haben |
|---|---|
| ich **bin** | ich **habe** |
| du **bist** | du **hast** |
| er/sie/es **ist** | er/sie/es **hat** |
| wir **sind** | wir **haben** |
| ihr **seid** | ihr **habt** |
| sie/Sie **sind** | sie/Sie **haben** |

## Les verbes forts fréquents
Certains verbes changent de **voyelle** aux 2e et 3e personnes du **singulier** seulement (*du* et *er/sie/es*). Les autres personnes sont régulières.
| Infinitif | ich | du | er/sie/es | wir |
|---|---|---|---|---|
| fahren (aller en véhicule) a → ä | fahre | **fährst** | **fährt** | fahren |
| schlafen (dormir) a → ä | schlafe | **schläfst** | **schläft** | schlafen |
| lesen (lire) e → ie | lese | **liest** | **liest** | lesen |
| sehen (voir) e → ie | sehe | **siehst** | **sieht** | sehen |
| essen (manger) e → i | esse | **isst** | **isst** | essen |
| sprechen (parler) e → i | spreche | **sprichst** | **spricht** | sprechen |
| nehmen (prendre) | nehme | **nimmst** | **nimmt** | nehmen |
| mögen (aimer) | **mag** | **magst** | **mag** | mögen |

*mögen* est particulier : *ich mag*, *er mag* sans terminaison (comme les verbes de modalité), puis *wir mögen, ihr mögt, sie mögen*.

> **À retenir** : terminaisons **-e, -st, -t, -en, -t, -en**. *sein* : bin, bist, ist, sind, seid, sind. *haben* : habe, hast, hat, haben, habt, haben. Verbes forts : changement de voyelle seulement avec **du** et **er/sie/es** (*du fährst, er liest, sie isst, er spricht*).

### Erreurs fréquentes
- *du bist* / *er ist* : ne pas confondre avec *du hast* / *er hat*.
- *ich fähre* : faux, le changement de voyelle ne touche pas *ich* → **ich fahre**.
- *er hat* : pas de *-t* en plus (*er hatt*).
- Oublier que *sie* + verbe en *-t* = elle (*sie spielt*), *sie* + verbe en *-en* = ils/elles (*sie spielen*).
`,
      exercices: [
        { type: "saisie", question: "Conjugue *wohnen* : « du ___ in Paris ».", reponses: ["wohnst", "du wohnst"], explication: "Radical *wohn-* + terminaison **-st** : *du wohnst*." },
        { type: "saisie", question: "Conjugue *sein* : « ihr ___ nett ».", reponses: ["seid", "ihr seid"], explication: "*sein* : ich bin, du bist, er ist, wir sind, **ihr seid**, sie sind. Attention : *seid* (verbe) s'écrit avec un **d**." },
        { type: "saisie", question: "Conjugue *haben* : « er ___ eine Schwester ».", reponses: ["hat", "er hat"], explication: "*haben* : ich habe, du hast, **er hat**, wir haben, ihr habt, sie haben." },
        { type: "saisie", question: "Conjugue *fahren* : « Paul ___ nach Berlin ».", reponses: ["fährt", "faehrt"], explication: "*fahren* est un verbe fort (a → ä) à la 3e personne du singulier : **er fährt** (Paul = er)." },
        { type: "saisie", question: "Conjugue *lesen* : « du ___ ein Buch ».", reponses: ["liest", "du liest"], explication: "*lesen* : e → ie avec *du* et *er* : **du liest**, er liest (le *s* du radical absorbe celui de *-st*)." },
        { type: "saisie", question: "Conjugue *sprechen* : « sie (elle) ___ Deutsch ».", reponses: ["spricht", "sie spricht"], explication: "*sprechen* : e → i : du sprichst, **sie spricht**." },
        { type: "qcm", question: "Quelle forme est correcte ?", choix: ["er isst", "du esst", "ich ese", "wir issen"], reponse: 0, explication: "*essen* : ich esse, du isst, **er isst**, wir essen, ihr esst, sie essen. Le changement e → i ne concerne que *du* et *er/sie/es*." },
        { type: "qcm", question: "Complète : « Er ___ in einer Bank. » (*arbeiten*)", choix: ["arbeitt", "arbeitest", "arbeiten", "arbeitet"], reponse: 3, explication: "Radical en **-t** : on ajoute un *e* : *er arbeit**et***. (*du arbeitest*, *ihr arbeitet*.)" },
        { type: "vf", question: "Dans *Sie spielen Tennis*, *Sie* peut signifier « vous » (politesse) ou, en début de phrase, « ils / elles ».", reponse: true, explication: "En début de phrase, la majuscule ne permet pas de distinguer : *Sie spielen* = vous jouez **ou** ils/elles jouent. Le contexte décide. *sie spielt* (en -t) = elle joue." },
        { type: "saisie", question: "Conjugue *mögen* : « ich ___ Schokolade ».", reponses: ["mag", "ich mag"], explication: "*mögen* : **ich mag**, du magst, er mag, wir mögen, ihr mögt, sie mögen. Pas de *-e* à la 1re personne." },
        { type: "redaction", question: "Écris 6 phrases sur toi et ta famille en utilisant au moins une fois chacun des verbes : *sein, haben, wohnen, sprechen, lesen, fahren*. Varie les personnes (ich, du, er/sie, wir).", corrige: "**Modèle :**\n\n1. *Ich bin zwölf Jahre alt.*\n2. *Wir wohnen in Nantes.*\n3. *Meine Mutter spricht Englisch und Spanisch.*\n4. *Mein Bruder liest gern Comics.*\n5. *Mein Vater fährt jeden Tag mit dem Auto zur Arbeit.*\n6. *Du hast einen Hund, oder?*\n\nPoints à vérifier : *sie spricht*, *er liest*, *er fährt* (changement de voyelle à la 3e personne) ; *wir wohnen* (-en) ; *du hast* (et non *du habst*)." },
      ],
    },
    {
      id: "phrase-questions-negation",
      titre: "La phrase : place du verbe, questions et négation",
      theme: "Grammaire",
      cours: `
## Le verbe en 2e position
Dans une phrase déclarative, le **verbe conjugué** est toujours le **2e élément** (pas forcément le 2e mot !).
- *Ich **spiele** heute Fußball.*
- *Heute **spiele** ich Fußball.*
- *Am Samstag **spiele** ich Fußball.*

>! **L'inversion** : si la phrase commence par autre chose que le sujet (un complément de temps, de lieu…), le **sujet passe juste après le verbe**.
>! *Morgen fahre ich nach Köln.* (et non *Morgen ich fahre*).
>! Schéma : **[1. élément] [2. verbe] [3. sujet] [reste]**.

Les mots *und* (et), *aber* (mais), *oder* (ou) ne comptent pas comme un élément : *Ich lese **und** du spielst.*

## Les questions avec mot interrogatif (W-Fragen)
Mot interrogatif + **verbe** + sujet + … ?
| Mot | Sens | Exemple |
|---|---|---|
| wer | qui | *Wer ist das?* |
| was | quoi, que | *Was machst du?* |
| wo | où (lieu où l'on est) | *Wo wohnst du?* |
| woher | d'où | *Woher kommst du?* |
| wohin | où (destination) | *Wohin fährst du?* |
| wann | quand | *Wann hast du Geburtstag?* |
| wie | comment | *Wie heißt du?* |
| wie alt | quel âge | *Wie alt bist du?* |
| wie viel(e) | combien | *Wie viele Geschwister hast du?* |
| warum | pourquoi | *Warum lernst du Deutsch?* |
| welcher / welche / welches | quel / quelle | *Welche Farbe magst du?* |

## Les questions fermées (oui / non)
Le **verbe** se place en **1re position** : *Wohnst du in Berlin?* *Hast du einen Hund?* *Ist das dein Buch?*
- Réponse : **Ja** (oui) ou **Nein** (non).
- Si la question est négative et que tu réponds « si » : **Doch!** *Hast du keinen Hund? – Doch, ich habe einen Hund.*

## La négation : nicht ou kein ?
- **kein** nie un **nom** précédé de *ein* ou sans article. Il se décline comme *ein* : *kein / keine / kein / keine* (accusatif masculin **keinen**).
  - *Das ist ein Hund.* → *Das ist **kein** Hund.*
  - *Ich habe einen Bruder.* → *Ich habe **keinen** Bruder.*
  - *Ich trinke Milch.* → *Ich trinke **keine** Milch.*
- **nicht** nie le **verbe**, un **adjectif**, un nom avec article défini ou possessif.
  - *Ich schwimme **nicht**.* – *Das ist **nicht** schön.* – *Das ist **nicht** mein Heft.* – *Ich komme heute **nicht**.*
  - *nicht* se place souvent **en fin de phrase** ou **devant** l'élément nié : *Ich spiele **nicht gern** Tennis.*

> **À retenir** : verbe conjugué en **2e position** (inversion du sujet si la phrase commence par un complément) ; question W : **W-mot + verbe + sujet** ; question oui/non : **verbe en 1er** ; **kein** + nom (à la place de *ein* ou sans article), **nicht** pour le reste ; *Doch!* = si !

### Erreurs fréquentes
- *Heute ich gehe ins Kino* : faux → *Heute **gehe ich** ins Kino.*
- *Ich habe nicht einen Hund* : on dit *Ich habe **keinen** Hund*.
- Confondre *wo* (où l'on est) et *wohin* (où l'on va) : *Wohin fährst du? – Nach Wien.*
- Confondre *wer* (qui) et *wo* (où).
`,
      exercices: [
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Heute ich spiele Tennis.", "Heute spiele ich Tennis.", "Heute spiele Tennis ich.", "Spiele heute ich Tennis."], reponse: 1, explication: "Le verbe est en **2e position** : *Heute* (1) **spiele** (2) *ich* (3)… Le sujet passe après le verbe : c'est l'inversion." },
        { type: "saisie", question: "Commence la phrase par *Am Montag* : « Ich habe Mathe am Montag. » → « Am Montag … »", reponses: ["Am Montag habe ich Mathe.", "Am Montag habe ich Mathe"], explication: "*Am Montag* occupe la 1re place, le verbe **habe** la 2e, puis le sujet **ich** : *Am Montag habe ich Mathe.*" },
        { type: "saisie", question: "Quel mot interrogatif signifie « quand » ?", reponses: ["wann"], explication: "**wann** = quand : *Wann hast du Geburtstag?* Attention : *wer* = qui, *wo* = où, *was* = quoi." },
        { type: "qcm", question: "Complète : « ___ fährst du in den Ferien? – Nach Österreich. »", choix: ["Wo", "Woher", "Wohin", "Wer"], reponse: 2, explication: "Pour une **destination** (où l'on va), on utilise **wohin**. *wo* = lieu où l'on se trouve, *woher* = d'où." },
        { type: "saisie", question: "Transforme en question fermée : « Du hast einen Hund. »", reponses: ["Hast du einen Hund?", "Hast du einen Hund"], explication: "Dans une question oui/non, le **verbe** passe en **1re position** : **Hast** du einen Hund?" },
        { type: "qcm", question: "Mets à la forme négative : « Ich habe eine Katze. »", choix: ["Ich habe keine Katze.", "Ich habe nicht eine Katze.", "Ich nicht habe eine Katze.", "Ich habe keinen Katze."], reponse: 0, explication: "Devant un nom précédé de *eine*, on utilise **keine** : *Ich habe keine Katze.* (*keinen* = masculin accusatif, et *die Katze* est féminin.)" },
        { type: "qcm", question: "Mets à la forme négative : « Das ist mein Kuli. »", choix: ["Das ist kein mein Kuli.", "Das ist keinen Kuli.", "Das nicht ist mein Kuli.", "Das ist nicht mein Kuli."], reponse: 3, explication: "Devant un nom avec **possessif** (*mein*), on nie avec **nicht** : *Das ist nicht mein Kuli.*" },
        { type: "vf", question: "« Spielst du nicht Gitarre? – Doch! » signifie : « Si, je joue de la guitare. »", reponse: true, explication: "**Doch** répond « si » à une question négative. *Ja* serait maladroit ici, *Nein* voudrait dire « non, je ne joue pas »." },
        { type: "saisie", question: "Traduis : « Pourquoi apprends-tu l'allemand ? »", reponses: ["Warum lernst du Deutsch?", "Warum lernst du Deutsch", "Wieso lernst du Deutsch?", "Wieso lernst du Deutsch"], explication: "**Warum** (pourquoi) + verbe **lernst** + sujet **du** + *Deutsch* (sans article)." },
        { type: "redaction", question: "Prépare une interview de ton correspondant : écris 6 questions variées (au moins 4 avec un mot interrogatif différent et 2 questions fermées). Puis invente ses réponses, dont une réponse négative avec *kein* et une avec *nicht*.", corrige: "**Modèle :**\n\n1. *Wie heißt du?* – *Ich heiße Jonas.*\n2. *Wo wohnst du?* – *Ich wohne in Hamburg.*\n3. *Wann hast du Geburtstag?* – *Am 8. Juni.*\n4. *Was machst du gern?* – *Ich spiele gern Handball.*\n5. *Hast du ein Haustier?* – *Nein, ich habe **kein** Haustier.*\n6. *Spielst du gern Tennis?* – *Nein, ich spiele **nicht** gern Tennis.*\n\nPoints à vérifier : mot interrogatif + verbe + sujet ; dans les questions fermées, le verbe est en 1re position ; **kein** devant le nom (*kein Haustier*), **nicht** devant *gern*." },
      ],
    },
    {
      id: "ecole",
      titre: "L'école et l'emploi du temps",
      theme: "L'école",
      cours: `
## Les matières (die Schulfächer)
| Allemand | Français |
|---|---|
| Deutsch | allemand |
| Englisch | anglais |
| Französisch | français |
| Mathe (Mathematik) | maths |
| Erdkunde (Geografie) | géographie |
| Geschichte | histoire |
| Biologie (Bio) | SVT, biologie |
| Physik / Chemie | physique / chimie |
| Kunst | arts plastiques |
| Musik | musique |
| Sport | EPS |
| Informatik | informatique |
| Technik | technologie |

Les noms de matières s'emploient **sans article** : *Ich habe Mathe.* *Ich mag Deutsch.*
- *Was ist dein Lieblingsfach?* → *Mein Lieblingsfach ist Sport.*
- *Ich finde Mathe toll / super / interessant / langweilig (ennuyeux) / schwer (difficile) / leicht (facile).*

## Les affaires scolaires (die Schulsachen)
*der Kuli* (stylo à bille), *der Bleistift* (crayon), *der Füller* (stylo plume), *der Radiergummi* (gomme), *der Spitzer* (taille-crayon), *das Lineal* (règle), *die Schere* (ciseaux), *das Heft* (cahier), *das Buch* (livre), *das Mäppchen* (trousse), *die Schultasche* / *der Rucksack* (cartable, sac à dos), *der Taschenrechner* (calculatrice).
- *Hast du einen Kuli? – Ja, hier bitte! / Nein, ich habe keinen Kuli.*

## L'emploi du temps (der Stundenplan)
- *die Stunde* = l'heure de cours ; *die Pause* = la récréation ; *die Hausaufgaben* = les devoirs.
- *Am Montag habe ich in der ersten Stunde Deutsch.* (lundi, en 1re heure, j'ai allemand)
- *Die Schule beginnt um acht Uhr und endet um dreizehn Uhr.*
- *Wann hast du Englisch? – Am Dienstag und am Freitag.*
- *Wie viele Stunden Deutsch hast du pro Woche? – Drei.*

>! **N'oublie pas l'inversion** : *Am Mittwoch **habe ich** Sport.* – *In der Pause **spielen wir** Fußball.*

## Les personnes à l'école
*der Lehrer / die Lehrerin* (professeur), *der Schüler / die Schülerin* (élève), *der Direktor / die Direktorin* ou *der Schulleiter / die Schulleiterin* (principal), *der Freund / die Freundin* (ami·e), *die Klasse* (la classe). *Ich bin in der siebten Klasse.* (= en 5e en France)

## L'école en Allemagne
- Les enfants vont 4 ans (6 à Berlin et dans le Brandebourg) à la **Grundschule** (école primaire), puis au **Gymnasium**, à la **Realschule** ou à la **Gesamtschule**, selon le Land.
- Les cours commencent souvent vers **8 heures** et finissent souvent en début d'après-midi ; de plus en plus d'écoles proposent l'après-midi (*Ganztagsschule*).
- Les notes vont de **1** (*sehr gut*, très bien) à **6** (*ungenügend*, insuffisant) : 1 est la meilleure note !
- Pour son premier jour d'école, l'enfant reçoit une **Schultüte**, un grand cornet rempli de bonbons et de fournitures.
- S'il fait très chaud, les élèves ont parfois *hitzefrei* (congé pour cause de chaleur).

> **À retenir** : matières sans article (*Ich habe Mathe*) ; *Mein Lieblingsfach ist…* ; *Ich finde … toll / langweilig* ; *am Montag*, *in der ersten Stunde*, *um acht Uhr* ; en Allemagne, la note 1 est la meilleure.

### Erreurs fréquentes
- *Ich habe die Mathe* : on dit *Ich habe Mathe*.
- Croire qu'un 6 est une bonne note en Allemagne : c'est la plus mauvaise.
- *die Hausaufgaben* (devoirs) s'emploie presque toujours au pluriel.
`,
      exercices: [
        { type: "saisie", question: "Comment dit-on « histoire » (la matière) en allemand ?", reponses: ["Geschichte", "die Geschichte"], explication: "**Geschichte** = histoire. La géographie se dit *Erdkunde* (ou *Geografie*)." },
        { type: "saisie", question: "Comment dit-on « l'emploi du temps » (avec l'article) ?", reponses: ["der Stundenplan"], explication: "**der Stundenplan** (*die Stunde* + *der Plan* : le dernier mot donne le genre masculin)." },
        { type: "qcm", question: "Que veut dire *Ich finde Mathe langweilig* ?", choix: ["Je trouve les maths faciles.", "Je trouve les maths ennuyeuses.", "Je trouve les maths géniales.", "Je trouve les maths longues."], reponse: 1, explication: "**langweilig** = ennuyeux. *leicht* = facile, *toll* = génial, *schwer* = difficile." },
        { type: "qcm", question: "En Allemagne, quelle est la meilleure note ?", choix: ["20", "6", "1", "10"], reponse: 2, explication: "Les notes vont de **1** (*sehr gut*) à 6 (*ungenügend*). Un 1 est donc la meilleure note." },
        { type: "saisie", question: "Traduis « le stylo à bille » (avec l'article).", reponses: ["der Kuli", "der Kugelschreiber"], explication: "**der Kuli** (abréviation de *der Kugelschreiber*). Pluriel : *die Kulis*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Am Freitag ich habe Kunst.", "Ich am Freitag habe Kunst.", "Am Freitag habe ich Kunst.", "Am Freitag habe ich die Kunst."], reponse: 2, explication: "Inversion : *Am Freitag* (1) **habe** (2) **ich** (3) *Kunst*. Les matières n'ont pas d'article." },
        { type: "vf", question: "*die Schultüte* est un grand cornet rempli de surprises offert à l'enfant pour son premier jour d'école.", reponse: true, explication: "C'est une tradition allemande : pour l'entrée en *Grundschule*, chaque enfant reçoit une **Schultüte**." },
        { type: "saisie", question: "Complète : « Mein ___ ist Musik. » (Ma matière préférée est la musique.)", reponses: ["Lieblingsfach"], explication: "**das Lieblingsfach** = la matière préférée (*Liebling* = préféré + *das Fach* = la matière)." },
        { type: "saisie", question: "Traduis « la récréation » (avec l'article).", reponses: ["die Pause"], explication: "**die Pause** = la récréation (ou la pause). *In der Pause spielen wir Fußball.*" },
        { type: "redaction", question: "Décris ta journée du mardi au collège en 6 phrases : heure de début et de fin, les matières dans l'ordre (*in der ersten / zweiten Stunde…*), ce que tu fais à la récréation, et ton avis sur deux matières.", corrige: "**Modèle :**\n\n*Am Dienstag beginnt die Schule um acht Uhr. In der ersten Stunde habe ich Französisch und in der zweiten Stunde habe ich Mathe. Dann ist Pause. Ich spiele mit meinen Freunden. Danach habe ich zwei Stunden Sport. Ich finde Sport super, aber Mathe finde ich schwer. Am Nachmittag habe ich Deutsch und Geschichte, und die Schule endet um siebzehn Uhr.*\n\nPoints à vérifier :\n- l'inversion après *Am Dienstag*, *In der ersten Stunde*, *Dann*, *Danach* (verbe en 2e position) ;\n- les matières sans article ;\n- *um* + heure ;\n- *Ich finde … super / schwer*." },
        { type: "vf", question: "**Compréhension.** Lis le dialogue : « *Lena: Wann hast du Mathe? – Tim: Am Montag und am Donnerstag. Mathe finde ich toll! – Lena: Und Deutsch? – Tim: Deutsch habe ich am Dienstag. Das finde ich langweilig.* » Vrai ou faux : Tim aime l'allemand.", reponse: false, explication: "Tim trouve l'allemand **langweilig** (ennuyeux). Ce qu'il trouve génial (*toll*), ce sont les maths, qu'il a le lundi et le jeudi ; l'allemand, il l'a le mardi (*am Dienstag*)." },
      ],
    },
    {
      id: "loisirs-gouts",
      titre: "Les loisirs et les goûts",
      theme: "Moi et les autres",
      cours: `
## Les loisirs (die Hobbys / die Freizeit)
| Activité | Exemple |
|---|---|
| Fußball / Basketball / Tennis spielen | *Ich spiele Fußball.* |
| Gitarre / Klavier spielen (guitare, piano) | *Sie spielt Klavier.* |
| Computerspiele / Videospiele spielen | *Wir spielen Computerspiele.* |
| schwimmen (nager) | *Ich schwimme.* |
| tanzen (danser) | *Er tanzt.* |
| lesen (lire) | *Sie liest Comics.* |
| Musik hören (écouter de la musique) | *Ich höre Musik.* |
| Rad fahren (faire du vélo) | *Ich fahre Rad.* |
| reiten (faire du cheval) | *Lena reitet.* |
| zeichnen / malen (dessiner / peindre) | *Ich zeichne.* |
| singen (chanter) | *Wir singen.* |
| ins Kino gehen (aller au cinéma) | *Wir gehen ins Kino.* |
| Freunde treffen (voir des amis) | *Ich treffe Freunde.* |

- *Was machst du in deiner Freizeit?* (Que fais-tu pendant ton temps libre ?)
- *Was ist dein Hobby?* → *Mein Hobby ist Reiten.* (l'activité devient un nom neutre, avec majuscule)

## Exprimer ses goûts avec gern, lieber, am liebsten
On ajoute **gern** (volontiers) **après le verbe** pour dire qu'on aime faire quelque chose.
| Degré | Exemple | Sens |
|---|---|---|
| **gern** | *Ich spiele **gern** Tennis.* | J'aime jouer au tennis. |
| **lieber** | *Ich spiele **lieber** Fußball.* | Je préfère jouer au foot. |
| **am liebsten** | *Ich spiele **am liebsten** Basketball.* | Ce que j'aime le plus, c'est le basket. |
| **nicht gern** | *Ich schwimme **nicht gern**.* | Je n'aime pas nager. |

>! **Attention** : *gern* accompagne un **verbe** (une activité). *Am liebsten* peut aussi se placer en tête : ***Am liebsten** lese ich.* (inversion !)

## Aimer quelque chose ou quelqu'un : mögen
**mögen** + nom (à l'accusatif) : *Ich mag Pizza.* *Magst du Hunde?* *Ich mag meinen Lehrer.*
| mögen |
|---|
| ich mag – du magst – er/sie/es mag |
| wir mögen – ihr mögt – sie/Sie mögen |

Négation : *Ich mag **keine** Tomaten.* (devant un nom sans article) – *Ich mag ihn **nicht**.*

## Donner son avis
- *Ich finde Fußball toll / super / cool / interessant / spannend (palpitant).*
- *Ich finde Tanzen doof (nul) / langweilig.*
- *Das macht Spaß!* (C'est amusant !) – *Das macht keinen Spaß.*
- Fréquence : *immer* (toujours), *oft* (souvent), *manchmal* (parfois), *nie* (jamais), *jeden Tag* (tous les jours), *am Wochenende* (le week-end).

> **À retenir** : verbe + **gern** / **lieber** / **am liebsten** pour les activités ; **mögen** + nom pour les choses et les personnes (*ich mag, du magst, er mag*) ; *Ich finde … toll* ; *Das macht Spaß!*

### Erreurs fréquentes
- *Ich mag spielen Fußball* : pour une activité, dis plutôt **Ich spiele gern Fußball**.
- Placer *gern* avant le verbe : *Ich gern spiele* est faux → *Ich spiele gern*.
- *Ich mag nicht Tomaten* → *Ich mag **keine** Tomaten*.
`,
      exercices: [
        { type: "qcm", question: "Comment dit-on « J'aime nager » ?", choix: ["Ich schwimme gern.", "Ich gern schwimme.", "Ich mag gern schwimme.", "Gern ich schwimme."], reponse: 0, explication: "**gern** se place après le verbe conjugué : *Ich schwimme gern.*" },
        { type: "saisie", question: "Complète : « Ich spiele gern Tennis, aber ich spiele ___ Fußball. » (je préfère)", reponses: ["lieber"], explication: "**lieber** = plus volontiers, « je préfère ». Gradation : gern → lieber → am liebsten." },
        { type: "saisie", question: "Complète pour dire que c'est ce que tu préfères par-dessus tout : « Ich lese ___. » (2 mots)", reponses: ["am liebsten"], explication: "**am liebsten** = le plus volontiers. *Ich lese am liebsten* ou *Am liebsten lese ich* (avec inversion)." },
        { type: "saisie", question: "Conjugue *mögen* : « du ___ Katzen ».", reponses: ["magst", "du magst"], explication: "*mögen* : ich mag, **du magst**, er mag, wir mögen, ihr mögt, sie mögen." },
        { type: "qcm", question: "Quelle phrase est correcte pour « Je n'aime pas les tomates » ?", choix: ["Ich mag nicht Tomaten.", "Ich mag kein Tomaten.", "Ich nicht mag Tomaten.", "Ich mag keine Tomaten."], reponse: 3, explication: "Devant un nom pluriel sans article, la négation est **keine** : *Ich mag keine Tomaten.*" },
        { type: "saisie", question: "Traduis : « Que fais-tu pendant ton temps libre ? » (commence par *Was machst du…*)", reponses: ["Was machst du in deiner Freizeit?", "Was machst du in deiner Freizeit", "Was machst du in der Freizeit?", "Was machst du in der Freizeit"], explication: "*Was machst du in deiner Freizeit?* : *was* = quoi, *machst* = fais, *die Freizeit* = le temps libre." },
        { type: "vf", question: "*Das macht Spaß!* signifie « C'est amusant ! ».", reponse: true, explication: "*der Spaß* = l'amusement ; *Das macht Spaß* = ça fait plaisir, c'est amusant." },
        { type: "qcm", question: "Quelle phrase utilise correctement l'inversion ?", choix: ["Am liebsten ich spiele Gitarre.", "Am liebsten spiele ich Gitarre.", "Am liebsten spiele Gitarre ich.", "Ich am liebsten spiele Gitarre."], reponse: 1, explication: "*Am liebsten* (1) **spiele** (2) **ich** (3) *Gitarre* : verbe en 2e position, sujet juste après." },
        { type: "saisie", question: "Traduis « faire du vélo » (2 mots, verbe à l'infinitif).", reponses: ["Rad fahren", "Fahrrad fahren"], explication: "**Rad fahren** (ou *Fahrrad fahren*) : *Ich fahre gern Rad.* *fahren* : du fährst, er fährt." },
        { type: "redaction", question: "Parle de tes loisirs en 6 à 7 phrases : ce que tu aimes faire (*gern*), ce que tu préfères (*lieber*), ton activité favorite (*am liebsten*), ce que tu n'aimes pas faire, une chose que tu aimes avec *mögen*, et ton avis (*Ich finde…*). Ajoute une fréquence (*oft, manchmal…*).", corrige: "**Modèle :**\n\n*In meiner Freizeit spiele ich gern Basketball. Ich höre auch gern Musik. Aber ich lese lieber Mangas. Am liebsten tanze ich. Ich tanze dreimal pro Woche. Ich schwimme nicht gern, das finde ich langweilig. Ich mag Hip-Hop und ich finde Tanzen super, das macht Spaß! Am Wochenende treffe ich oft meine Freunde.*\n\nPoints à vérifier :\n- **gern / lieber / am liebsten** après le verbe (ou *Am liebsten* en tête avec inversion : *Am liebsten tanze ich*) ;\n- **nicht gern** pour ce qu'on n'aime pas ;\n- **mögen** + nom (*Ich mag Hip-Hop*) ;\n- inversion après *In meiner Freizeit*, *Am Wochenende*." },
        { type: "qcm", question: "**Compréhension.** Lis le texte : « *Ich heiße Paula. In meiner Freizeit spiele ich gern Tennis, aber ich schwimme lieber. Am liebsten reite ich: ich habe ein Pferd! Ich lese nicht gern.* » Quelle est l'activité **préférée** de Paula ?", choix: ["le tennis", "la natation", "l'équitation", "la lecture"], reponse: 2, explication: "**Am liebsten reite ich** = ce qu'elle aime le plus, c'est monter à cheval. Gradation : *gern* (tennis) → *lieber* (natation) → **am liebsten** (équitation). Elle n'aime pas lire (*nicht gern*)." },
      ],
    },
    {
      id: "decrire-quelqu-un",
      titre: "Décrire quelqu'un et les possessifs",
      theme: "Moi et les autres",
      cours: `
## L'apparence physique : Wie sieht er/sie aus ?
On décrit avec **sein** + adjectif (l'adjectif attribut ne s'accorde **pas**) :
- *Er ist groß* (grand) / *klein* (petit) / *schlank* (mince) / *jung* (jeune) / *alt* (vieux).
- *Sie ist hübsch* (jolie) / *sportlich* (sportive).

On décrit les cheveux et les yeux avec **haben** + adjectif + nom pluriel (adjectif en **-e**) :
- *Er hat **kurze** Haare.* (cheveux courts) – *Sie hat **lange, blonde** Haare.*
- *Ich habe **braune** Augen.* (yeux marron) – *Er hat **blaue** Augen.*
- Couleurs utiles : *blond, braun, schwarz, rot (roux), grau* ; *blau, grün*. Il porte des lunettes : *Er trägt eine Brille.*

## Le caractère
| Qualités | Défauts |
|---|---|
| nett (gentil), freundlich (aimable) | gemein (méchant) |
| lustig (drôle) | langweilig (ennuyeux) |
| fleißig (travailleur) | faul (paresseux) |
| ruhig (calme) | laut (bruyant) |
| mutig (courageux) | frech (insolent) |
| intelligent, klug (intelligent) | schüchtern (timide) |

Nuancer : *sehr* (très), *ziemlich* (assez), *ein bisschen* (un peu), *nicht* (pas), *zu* (trop) : *Mein Bruder ist ein bisschen faul.*

## Les déterminants possessifs
| Personne | Masculin / Neutre | Féminin / Pluriel |
|---|---|---|
| ich → mon, ma | **mein** Vater, **mein** Buch | **meine** Mutter, **meine** Eltern |
| du → ton, ta | **dein** Bruder | **deine** Schwester |
| er (il) → son, sa | **sein** Hund | **seine** Katze |
| sie (elle) → son, sa | **ihr** Hund | **ihre** Katze |
| es → son, sa | **sein** Ball | **seine** Puppe |

>! **Le piège de « son / sa »** : en allemand, on choisit d'abord selon le **possesseur** : à lui → **sein**, à elle → **ihr**. Puis on regarde le genre de l'objet possédé pour la terminaison.
>! *Tom und **sein** Hund* (Tom et son chien) – *Lisa und **ihr** Hund* (Lisa et son chien) – *Lisa und **ihre** Mutter*.

À l'**accusatif masculin**, comme *ein* → *einen*, le possessif prend **-en** : *Ich mag **meinen** Bruder.* *Kennst du **seinen** Vater?*

## Les questions utiles
- *Wie sieht dein Freund aus?* (À quoi ressemble ton ami ?) – *Er ist groß und hat kurze, braune Haare.*
- *Wie ist deine Freundin?* (Comment est ton amie, son caractère ?) – *Sie ist nett und lustig.*

> **À retenir** : *sein* + adjectif invariable (*Sie ist groß*) ; *haben* + adjectif en -e + Haare/Augen (*Er hat blaue Augen*). Possessifs : **mein, dein, sein (à lui), ihr (à elle)** ; + **e** au féminin et au pluriel ; + **en** à l'accusatif masculin.

### Erreurs fréquentes
- *Sie ist große* : l'attribut ne s'accorde pas → *Sie ist groß*.
- *Marie und sein Bruder* : le possesseur est une fille → *Marie und **ihr** Bruder*.
- *die Haare* est pluriel : *Ihre Haare **sind** lang.*
`,
      exercices: [
        { type: "qcm", question: "Comment dit-on « Elle a les yeux bleus » ?", choix: ["Sie ist blaue Augen.", "Sie hat blau Auge.", "Sie hat blaue Augen.", "Sie hat Augen blau."], reponse: 2, explication: "On utilise **haben** + adjectif en **-e** + *Augen* (pluriel) : *Sie hat blaue Augen.*" },
        { type: "saisie", question: "Traduis l'adjectif « timide ».", reponses: ["schüchtern", "schuechtern"], explication: "**schüchtern** = timide. Son contraire : *mutig* (courageux) ou *selbstbewusst* (sûr de soi)." },
        { type: "saisie", question: "Donne le contraire de *fleißig* (travailleur).", reponses: ["faul"], explication: "**faul** = paresseux, contraire de *fleißig*." },
        { type: "qcm", question: "Lisa parle de son frère. Complète : « Lisa und ___ Bruder spielen Tennis. »", choix: ["ihr", "seine", "sein", "ihre"], reponse: 0, explication: "Le possesseur est **Lisa** (une fille) → *ihr* ; *der Bruder* est masculin → pas de terminaison : **ihr Bruder**." },
        { type: "qcm", question: "Tom parle de sa sœur. Complète : « Tom und ___ Schwester wohnen in Bonn. »", choix: ["sein", "ihr", "ihre", "seine"], reponse: 3, explication: "Possesseur masculin (Tom) → *sein* ; *die Schwester* est féminin → **seine Schwester**." },
        { type: "saisie", question: "Complète avec le possessif de *du* : « Wie heißt ___ Mutter? »", reponses: ["deine"], explication: "*du* → *dein* ; *die Mutter* est féminin → **deine** Mutter." },
        { type: "vf", question: "*Meine Schwester ist kleine.* est une phrase correcte.", reponse: false, explication: "L'adjectif attribut (après *sein*) reste **invariable** : *Meine Schwester ist **klein**.*" },
        { type: "saisie", question: "Complète à l'accusatif : « Ich mag ___ Opa. » (mon)", reponses: ["meinen"], explication: "*der Opa* est masculin et complément de *mögen* (accusatif) → **meinen** Opa." },
        { type: "saisie", question: "Traduis : « Il a les cheveux courts et noirs. » (commence par *Er hat…*)", reponses: ["Er hat kurze, schwarze Haare.", "Er hat kurze schwarze Haare.", "Er hat kurze und schwarze Haare.", "Er hat schwarze, kurze Haare.", "Er hat schwarze kurze Haare.", "Er hat kurze, schwarze Haare", "Er hat kurze schwarze Haare", "Er hat kurze und schwarze Haare"], explication: "*Er hat kurze, schwarze Haare* : les adjectifs devant *Haare* (pluriel, sans article) prennent **-e**." },
        { type: "redaction", question: "Décris ton meilleur ami ou ta meilleure amie (réel ou imaginaire) en 6 phrases : nom, âge, apparence (taille, cheveux, yeux), caractère (au moins 3 adjectifs), et un détail sur sa famille avec un possessif (*sein / ihr*).", corrige: "**Modèle (une amie) :**\n\n*Meine beste Freundin heißt Chloé. Sie ist zwölf Jahre alt. Sie ist ziemlich groß und schlank. Sie hat lange, braune Haare und grüne Augen. Sie ist sehr nett, lustig und ein bisschen schüchtern. Ihr Bruder heißt Noah und ihre Katze heißt Luna.*\n\n**Variante (un ami) :** *Mein bester Freund heißt Adam. Er ist klein und hat kurze, schwarze Haare … Sein Vater ist Koch.*\n\nPoints à vérifier :\n- *sein* + adjectif invariable (*Sie ist groß*) ;\n- *haben* + adjectif en **-e** + *Haare / Augen* ;\n- possessif selon le possesseur : fille → **ihr / ihre**, garçon → **sein / seine** ;\n- *meine beste Freundin* / *mein bester Freund*." },
      ],
    },
    {
      id: "maison-accusatif",
      titre: "La maison et l'accusatif",
      theme: "Mon quotidien",
      cours: `
## Le logement
*das Haus* (maison), *die Wohnung* (appartement), *das Zimmer* (pièce, chambre), *der Garten* (jardin), *der Balkon*, *die Garage*, *der Keller* (cave), *die Treppe* (escalier), *der Stock* (étage) : *Wir wohnen im dritten Stock.*

## Les pièces
| Pièce | Traduction |
|---|---|
| das Wohnzimmer | le salon, le séjour |
| die Küche | la cuisine |
| das Schlafzimmer | la chambre (à coucher) |
| das Kinderzimmer | la chambre d'enfant |
| das Badezimmer / das Bad | la salle de bains |
| die Toilette / das WC | les toilettes |
| das Esszimmer | la salle à manger |

## Les meubles et objets
*der Tisch* (table), *der Stuhl* (chaise), *das Bett* (lit), *der Schrank* (armoire), *der Schreibtisch* (bureau), *das Sofa* (canapé), *die Lampe*, *das Regal* (étagère), *der Teppich* (tapis), *der Fernseher* (télévision), *der Computer*, *das Poster*, *das Fenster* (fenêtre), *die Tür* (porte).

## L'accusatif (complément d'objet direct)
Le complément d'objet direct se met à l'**accusatif**. Seul le **masculin** change !
| | Masculin | Féminin | Neutre | Pluriel |
|---|---|---|---|---|
| Nominatif (sujet) | der / ein / kein | die / eine / keine | das / ein / kein | die / – / keine |
| **Accusatif** (COD) | **den / einen / keinen** | die / eine / keine | das / ein / kein | die / – / keine |

- *Der Tisch ist groß.* (sujet) → *Ich kaufe **den** Tisch.* (COD)
- *Ich habe **einen** Schreibtisch, **eine** Lampe und **ein** Bett.*
- *Wir haben **keinen** Garten.*
- Avec les possessifs : *Ich mag **meinen** Garten.*

>! **Méthode** : repère le verbe, puis demande-toi « qui fait l'action ? » (sujet = nominatif) et « quoi ? / qui ? » après le verbe (COD = accusatif). Si le COD est masculin, mets **-en** : *den, einen, keinen, meinen*.
>! Verbes suivis de l'accusatif : *haben, es gibt, mögen, sehen, kaufen, brauchen (avoir besoin de), suchen (chercher), essen, trinken, finden*…

## « Il y a » : es gibt + accusatif
*In meinem Zimmer **gibt es** einen Schrank, ein Bett und zwei Poster.* – *Es gibt **keinen** Fernseher.*
*In meinem Zimmer* (dans ma chambre) est une expression à apprendre telle quelle : après *in*, pour dire où l'on est, *mein* devient *meinem* (masc./neutre) ou *meiner* (fém.) : *in meiner Wohnung*.

## Les pronoms personnels à l'accusatif
| Nominatif | ich | du | er | sie | es | wir | ihr | sie / Sie |
|---|---|---|---|---|---|---|---|---|
| **Accusatif** | **mich** | **dich** | **ihn** | sie | es | **uns** | **euch** | sie / Sie |

*Wie findest du den Schrank? – Ich finde **ihn** schön.* – *Ich liebe **dich**.* – *Besuchst du **uns**?*

> **À retenir** : à l'accusatif, seul le masculin change : **der → den, ein → einen, kein → keinen, mein → meinen** ; **er → ihn**. *es gibt* + accusatif. Pronoms : mich, dich, ihn, sie, es, uns, euch, sie/Sie.

### Erreurs fréquentes
- *Ich habe ein Schreibtisch* → *Ich habe **einen** Schreibtisch*.
- *Es gibt ein Garten* → *Es gibt **einen** Garten*.
- Mettre l'accusatif au féminin : *Ich habe einen Lampe* est faux → *eine Lampe*.
- *Ich finde er toll* → *Ich finde **ihn** toll*.
`,
      exercices: [
        { type: "saisie", question: "Traduis « la cuisine » (avec l'article).", reponses: ["die Küche", "die Kueche"], explication: "**die Küche**. Attention à ne pas confondre avec *der Kuchen* (le gâteau)." },
        { type: "saisie", question: "Traduis « le salon » (avec l'article).", reponses: ["das Wohnzimmer"], explication: "**das Wohnzimmer** : *wohnen* (habiter) + *das Zimmer* → neutre." },
        { type: "qcm", question: "Complète : « In meinem Zimmer gibt es ___ Schreibtisch. »", choix: ["ein", "einen", "eine", "der"], reponse: 1, explication: "*es gibt* est suivi de l'**accusatif** ; *der Schreibtisch* est masculin → **einen** Schreibtisch." },
        { type: "qcm", question: "Complète : « Ich habe ___ Lampe. »", choix: ["einen", "ein", "eine", "einer"], reponse: 2, explication: "*die Lampe* est féminin : à l'accusatif, le féminin **ne change pas** → *eine Lampe*." },
        { type: "saisie", question: "Mets à la forme négative : « Wir haben einen Garten. » → « Wir haben ___ Garten. »", reponses: ["keinen"], explication: "*der Garten* est masculin, COD → accusatif : **keinen** Garten." },
        { type: "saisie", question: "Remplace le nom par un pronom : « Ich finde den Schrank schön. » → « Ich finde ___ schön. »", reponses: ["ihn"], explication: "*den Schrank* = masculin accusatif → pronom **ihn**." },
        { type: "qcm", question: "Quelle forme est le pronom accusatif de *du* ?", choix: ["dich", "dein", "dir", "du"], reponse: 0, explication: "*du* → **dich** à l'accusatif : *Ich sehe dich.* (*dir* est le datif, *dein* un possessif.)" },
        { type: "vf", question: "À l'accusatif, l'article neutre *das* devient *den*.", reponse: false, explication: "Seul le **masculin** change à l'accusatif. Le neutre reste **das / ein / kein** : *Ich habe ein Bett.*" },
        { type: "saisie", question: "Complète : « Ich mag ___ Garten. » (mon)", reponses: ["meinen"], explication: "*der Garten* est masculin, COD de *mögen* → **meinen** Garten." },
        { type: "redaction", question: "Décris ta chambre en 6 phrases : où elle est dans la maison ou l'appartement, ce qu'il y a dedans (*Es gibt…* avec au moins un nom masculin), ce qu'il n'y a pas (*kein…*), et ce que tu penses d'un objet (*Ich finde ihn / sie / es…*).", corrige: "**Modèle :**\n\n*Ich wohne in einer Wohnung im zweiten Stock. Mein Zimmer ist klein, aber schön. In meinem Zimmer gibt es ein Bett, einen Schreibtisch, einen Schrank und eine Lampe. An der Wand habe ich zwei Poster. Es gibt keinen Fernseher, aber ich habe einen Computer. Mein Bett ist neu. Ich finde es sehr bequem.*\n\nPoints à vérifier :\n- **es gibt** / **haben** + accusatif : *einen* Schreibtisch, *einen* Schrank (masc.), *eine* Lampe, *ein* Bett ;\n- **keinen** Fernseher (masc.) ;\n- le pronom reprend le genre : *das Bett* → **es** ; *der Schrank* → **ihn** ; *die Lampe* → **sie**." },
      ],
    },
    {
      id: "nourriture-verbes-modaux",
      titre: "La nourriture et les verbes de modalité",
      theme: "Mon quotidien",
      cours: `
## Les repas
*das Frühstück* (petit-déjeuner), *das Mittagessen* (déjeuner), *das Abendessen* / *das Abendbrot* (dîner). *frühstücken* = prendre le petit-déjeuner.
- *Was isst du zum Frühstück?* → *Zum Frühstück esse ich ein Brötchen mit Marmelade und ich trinke Kakao.*
- *Guten Appetit!* (Bon appétit !) – *Lecker!* (Délicieux !) – *Ich habe Hunger / Durst.* (J'ai faim / soif.)

## Les aliments et les boissons
| Masculin (der) | Féminin (die) | Neutre (das) |
|---|---|---|
| der Käse (fromage) | die Milch (lait) | das Brot (pain) |
| der Apfel (pomme) | die Butter (beurre) | das Brötchen (petit pain) |
| der Fisch (poisson) | die Wurst (saucisse) | das Ei (œuf) |
| der Saft (jus) | die Banane | das Fleisch (viande) |
| der Kuchen (gâteau) | die Kartoffel (pomme de terre) | das Gemüse (légumes) |
| der Reis (riz) | die Schokolade | das Obst (fruits) |
| der Tee (thé) | die Marmelade (confiture) | das Wasser (eau) |
| der Salat (salade) | die Tomate | das Eis (glace) |
| der Kakao (chocolat chaud) | die Brezel (bretzel) | das Hähnchen (poulet) |

Pluriels utiles : *die Nudeln* (pâtes), *die Pommes* (frites), *die Äpfel*, *die Eier*, *die Kartoffeln*.
Plats typiques : *die Bratwurst*, *das Sauerkraut* (choucroute), *die Brezel*, *der Apfelstrudel* (Autriche), *das Wiener Schnitzel*, *das Müsli* (Suisse), *die Schwarzwälder Kirschtorte*.

## Manger, boire, commander
- *essen* : ich esse, du **isst**, er **isst** ; *trinken* (régulier au présent) : ich trinke, du trinkst.
- *Ich esse gern Nudeln. Ich trinke lieber Apfelsaft.*
- Au café : *Was möchtest du? / Was möchten Sie?* → *Ich möchte ein Eis, bitte.* – *Ich nehme einen Orangensaft.* (accusatif !)
- *Was kostet das? – Das kostet zwei Euro fünfzig.* (2,50 €)

## Les verbes de modalité
**möchte** (je voudrais, poli), **können** (pouvoir, savoir faire), **wollen** (vouloir), **müssen** (devoir).
| | möchte | können | wollen | müssen |
|---|---|---|---|---|
| ich | möchte | **kann** | **will** | **muss** |
| du | möchtest | **kannst** | **willst** | **musst** |
| er/sie/es | möchte | **kann** | **will** | **muss** |
| wir | möchten | können | wollen | müssen |
| ihr | möchtet | könnt | wollt | müsst |
| sie/Sie | möchten | können | wollen | müssen |

>! **La règle de la « parenthèse »** : le verbe de modalité conjugué est en **2e position** et l'**infinitif** va **à la fin** de la phrase.
>! *Ich **kann** gut **kochen**.* (Je sais bien cuisiner.)
>! *Heute **muss** ich Hausaufgaben **machen**.*
>! *Wir **wollen** eine Pizza **essen**.*
>! *Ich **möchte** ein Eis.* (*möchte* peut aussi s'employer sans infinitif.)

Remarque : *ich kann*, *er kann* : pas de terminaison à *ich* et *er* (comme *ich mag*).

> **À retenir** : *das Frühstück, das Mittagessen, das Abendessen* ; *Ich habe Hunger* ; *Ich möchte…, bitte* ; *Was kostet das?* ; modal en 2e position + **infinitif à la fin** ; *kann, will, muss* sans terminaison à *ich / er*.

### Erreurs fréquentes
- *Ich kann kochen gut* → *Ich kann gut **kochen*** (infinitif en dernier).
- *ich kanne*, *er muss* écrit *er musst* : → **ich kann**, **er muss**.
- *Ich will* ne veut pas dire « je veux bien » mais « je veux » (assez direct) : pour commander, dis **Ich möchte…**.
- *Ich bin faim* → *Ich **habe** Hunger*.
`,
      exercices: [
        { type: "saisie", question: "Traduis « le petit-déjeuner » (avec l'article).", reponses: ["das Frühstück", "das Fruehstueck"], explication: "**das Frühstück** ; verbe : *frühstücken*. Le déjeuner : *das Mittagessen* ; le dîner : *das Abendessen*." },
        { type: "saisie", question: "Traduis « le fromage » (avec l'article).", reponses: ["der Käse", "der Kaese"], explication: "**der Käse** (masculin). Le **ä** se prononce « è »." },
        { type: "qcm", question: "Comment dit-on « J'ai faim » ?", choix: ["Ich bin Hunger.", "Ich esse Hunger.", "Ich habe Durst.", "Ich habe Hunger."], reponse: 3, explication: "On dit **Ich habe Hunger** (avec *haben*). *Ich habe Durst* = j'ai soif." },
        { type: "qcm", question: "Au café, quelle phrase est la plus polie pour commander ?", choix: ["Ich will einen Kakao!", "Ich möchte einen Kakao, bitte.", "Ich muss einen Kakao.", "Ein Kakao, ich!"], reponse: 1, explication: "**Ich möchte …, bitte** est la formule polie. *Ich will* est très direct, voire impoli." },
        { type: "saisie", question: "Conjugue *können* : « du ___ gut schwimmen ».", reponses: ["kannst", "du kannst"], explication: "*können* : ich kann, **du kannst**, er kann, wir können, ihr könnt, sie können." },
        { type: "saisie", question: "Conjugue *müssen* : « er ___ Hausaufgaben machen ».", reponses: ["muss", "er muss"], explication: "*müssen* : ich muss, du musst, **er muss** (pas de *-t* !), wir müssen, ihr müsst, sie müssen." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Ich will spielen Fußball heute.", "Ich will heute spielen Fußball.", "Ich will heute Fußball spielen.", "Ich spielen will heute Fußball."], reponse: 2, explication: "Le modal **will** est en 2e position et l'**infinitif** *spielen* à la **fin** : *Ich will heute Fußball spielen.*" },
        { type: "saisie", question: "Remets dans l'ordre : *kochen / kann / meine Mutter / gut*", reponses: ["Meine Mutter kann gut kochen.", "Meine Mutter kann gut kochen"], explication: "Sujet + modal conjugué (*kann*) + compléments + infinitif à la fin : **Meine Mutter kann gut kochen.**" },
        { type: "vf", question: "« Das kostet drei Euro zwanzig » signifie que le prix est de 3,20 €.", reponse: true, explication: "*drei Euro zwanzig* = 3 euros et 20 centimes, soit **3,20 €**." },
        { type: "redaction", question: "Tu es dans un café à Vienne avec un ami. Écris un petit dialogue (8 répliques) avec le serveur : saluer, commander à manger et à boire avec *möchte*, demander le prix, payer et dire au revoir. Ajoute une phrase avec *können* ou *müssen*.", corrige: "**Modèle :**\n\n- *Kellner : Grüß Gott! Was möchten Sie?*\n- *Ich : Ich möchte einen Apfelstrudel und einen Kakao, bitte.*\n- *Mein Freund : Und ich möchte ein Eis und einen Orangensaft.*\n- *Kellner : Gern. … Bitte schön! Guten Appetit!*\n- *Ich : Danke! Hm, der Apfelstrudel ist lecker!*\n- *Ich : Entschuldigung, was kostet das?*\n- *Kellner : Das kostet zusammen vierzehn Euro fünfzig.*\n- *Ich : Hier, bitte. Wir müssen jetzt gehen. Auf Wiedersehen!*\n\nPoints à vérifier : **möchte** pour commander poliment ; accusatif masculin (*einen Kakao*, *einen Orangensaft*) ; *Was kostet das?* ; modal + infinitif à la fin (*Wir müssen jetzt gehen*) ; vouvoiement du serveur (*Sie*)." },
      ],
    },
    {
      id: "ville-orientation-imperatif",
      titre: "La ville, l'orientation et l'impératif",
      theme: "Mon quotidien",
      cours: `
## Les lieux de la ville (die Stadt)
| Lieu | Traduction | Lieu | Traduction |
|---|---|---|---|
| der Bahnhof | la gare | die Kirche | l'église |
| der Supermarkt | le supermarché | die Bäckerei | la boulangerie |
| der Park | le parc | die Post | la poste |
| der Marktplatz | la place du marché | die Bank | la banque |
| das Rathaus | la mairie | die Apotheke | la pharmacie |
| das Kino | le cinéma | die Bibliothek | la bibliothèque |
| das Museum | le musée | die Schule | l'école |
| das Krankenhaus | l'hôpital | die Straße | la rue |
| das Schwimmbad | la piscine | die Haltestelle | l'arrêt (bus, tram) |

Autres mots : *die Ampel* (le feu), *die Kreuzung* (le carrefour), *die Brücke* (le pont), *das Stadtzentrum* (le centre-ville).

## Demander son chemin
- *Entschuldigung, wo ist der Bahnhof?* (Excusez-moi, où est la gare ?)
- *Wie komme ich **zum** Bahnhof / **zum** Kino / **zur** Post?* (Comment aller à… ?)
  - **zum** devant un nom masculin ou neutre (*der Bahnhof, das Kino*) ;
  - **zur** devant un nom féminin (*die Post, die Schule*).
- *Gibt es hier eine Apotheke?* (Y a-t-il une pharmacie par ici ?)

## Indiquer le chemin
*geradeaus* (tout droit), *(nach) links* (à gauche), *(nach) rechts* (à droite), *die erste / zweite Straße links* (la 1re / 2e rue à gauche), *an der Ampel* (au feu), *hier* (ici), *dort* (là-bas), *in der Nähe* (près d'ici), *weit* (loin).
- *Gehen Sie geradeaus und dann die zweite Straße rechts. Der Bahnhof ist auf der linken Seite.*

## Les moyens de transport
*zu Fuß gehen* (aller à pied) ; *fahren* + **mit dem** Bus / Zug (train) / Auto / Fahrrad (Rad) ; **mit der** U-Bahn (métro) / Straßenbahn (tram).
*Ich fahre mit dem Bus zur Schule.* – *Er fährt mit dem Rad.* – *Wir gehen zu Fuß.*

## L'impératif : donner un ordre, un conseil
| Personne | Formation | Exemples |
|---|---|---|
| **du** | radical du verbe, **sans** *du* et sans *-st* | *Komm!* (kommen) – *Geh geradeaus!* – *Mach das!* – *Hör zu!* |
| **ihr** | forme du présent **sans** *ihr* | *Kommt!* – *Geht nach links!* – *Hört zu!* |
| **Sie** | verbe en 1re position + **Sie** | *Kommen Sie!* – *Gehen Sie geradeaus!* |

>! **Verbes forts** : les verbes en **e → i / ie** gardent ce changement à l'impératif *du* : *sprechen* → **Sprich!** ; *lesen* → **Lies!** ; *nehmen* → **Nimm!** ; *essen* → **Iss!** ; *sehen* → **Sieh!**
>! Mais les verbes en **a → ä** ne prennent **pas** d'Umlaut : *fahren* → **Fahr!** ; *schlafen* → **Schlaf!**
>! *sein* est irrégulier : **Sei** leise! (du) – **Seid** leise! (ihr) – **Seien Sie** leise! (Sie)

Ajoute *bitte* pour être poli : *Komm bitte!* *Öffnen Sie bitte das Fenster!* Consignes de classe : *Hör zu!* (écoute), *Pass auf!* (fais attention), *Lies den Text!*, *Schreib!*, *Mach das Buch auf / zu!* (ouvre / ferme ton livre).

> **À retenir** : *Wie komme ich zum (masc./neutre) / zur (fém.)…?* ; *geradeaus, links, rechts* ; *mit dem Bus, zu Fuß*. Impératif : *Komm!* (du), *Kommt!* (ihr), *Kommen Sie!* ; *Lies! Sprich! Nimm!* mais *Fahr!* ; *Sei!*

### Erreurs fréquentes
- *Kommst!* ou *Komm du!* → **Komm!** (pas de *-st*, pas de pronom).
- *Fähr!* → **Fahr!** (pas d'Umlaut à l'impératif).
- *Lese!* → **Lies!**
- *zum Post* → **zur Post** (*die Post* est féminin).
`,
      exercices: [
        { type: "saisie", question: "Traduis « la gare » (avec l'article).", reponses: ["der Bahnhof"], explication: "**der Bahnhof** (masculin) : *Wie komme ich zum Bahnhof?*" },
        { type: "saisie", question: "Traduis « tout droit ».", reponses: ["geradeaus"], explication: "**geradeaus** = tout droit. *links* = à gauche, *rechts* = à droite." },
        { type: "qcm", question: "Complète : « Wie komme ich ___ Post? »", choix: ["zur", "zum", "zu die", "nach"], reponse: 0, explication: "*die Post* est féminin → **zur** Post. *zum* s'emploie devant un nom masculin ou neutre (*zum Bahnhof*, *zum Kino*)." },
        { type: "qcm", question: "Complète : « Ich fahre ___ Bus zur Schule. »", choix: ["im", "mit", "zu", "mit dem"], reponse: 3, explication: "Le moyen de transport s'exprime avec **mit dem** (masc./neutre) : *mit dem Bus*, *mit dem Rad* ; *mit der U-Bahn* au féminin." },
        { type: "saisie", question: "Mets à l'impératif (*du*) : « kommen » → « ___ bitte! »", reponses: ["Komm", "Komm bitte"], explication: "Impératif *du* = radical sans *-st* et sans pronom : **Komm!**" },
        { type: "saisie", question: "Mets à l'impératif (*du*) : « lesen » → « ___ den Text! »", reponses: ["Lies", "Lies den Text", "Lies den Text!"], explication: "*lesen* change e → ie avec *du* (*du liest*), et garde ce changement à l'impératif : **Lies!**" },
        { type: "saisie", question: "Mets à l'impératif (*du*) : « fahren » → « ___ langsam! »", reponses: ["Fahr", "Fahre", "Fahr langsam", "Fahre langsam"], explication: "Les verbes en a → ä **ne prennent pas** d'Umlaut à l'impératif : **Fahr!** (ou *Fahre!*, plus soutenu). *Fähr!* est faux." },
        { type: "qcm", question: "Comment dis-tu poliment à un adulte « Allez tout droit » ?", choix: ["Geh geradeaus!", "Gehen Sie geradeaus!", "Geht geradeaus!", "Sie gehen geradeaus!"], reponse: 1, explication: "Impératif de politesse : **verbe + Sie** : *Gehen Sie geradeaus!* (*Geh!* = du, *Geht!* = ihr.)" },
        { type: "vf", question: "« Sei leise! » est l'impératif de *sein* à la 2e personne du singulier.", reponse: true, explication: "*sein* est irrégulier : **Sei!** (du), **Seid!** (ihr), **Seien Sie!** (Sie). *Sei leise!* = Sois silencieux !" },
        { type: "redaction", question: "Un touriste te demande, devant ton collège : « Entschuldigung, wie komme ich zum Bahnhof? ». Écris le dialogue (6 à 8 répliques) : il demande, tu indiques le chemin en le vouvoyant (impératif avec *Sie* : tout droit, au feu à droite, 2e rue à gauche…), tu précises que ce n'est pas loin et qu'il peut prendre le bus.", corrige: "**Modèle :**\n\n- *Tourist : Entschuldigung, wie komme ich zum Bahnhof?*\n- *Ich : Gehen Sie hier geradeaus bis zur Ampel.*\n- *Ich : An der Ampel gehen Sie nach rechts.*\n- *Ich : Nehmen Sie dann die zweite Straße links.*\n- *Ich : Der Bahnhof ist auf der rechten Seite, gegenüber vom Park.*\n- *Tourist : Ist das weit?*\n- *Ich : Nein, das ist nicht weit, nur zehn Minuten zu Fuß. Sie können auch mit dem Bus fahren, die Haltestelle ist dort.*\n- *Tourist : Vielen Dank! – Ich : Bitte schön! Auf Wiedersehen!*\n\nPoints à vérifier : impératif de politesse **verbe + Sie** (*Gehen Sie*, *Nehmen Sie*) ; *zum Bahnhof* (masc.) ; *geradeaus, rechts, links* ; *mit dem Bus* ; modal + infinitif (*Sie können … fahren*)." },
        { type: "qcm", question: "**Compréhension.** Une passante t'explique : « *Gehen Sie geradeaus bis zur Ampel. An der Ampel gehen Sie nach links. Dann nehmen Sie die erste Straße rechts. Das Kino ist auf der linken Seite.* » Quel est le bon trajet ?", choix: ["À gauche jusqu'au feu, puis tout droit ; le cinéma est à droite.", "Tout droit jusqu'au feu, à gauche au feu, puis la 1re rue à droite ; le cinéma est à gauche.", "Tout droit jusqu'au feu, à droite au feu, puis la 1re rue à gauche ; le cinéma est à gauche.", "Tout droit jusqu'au pont, à gauche, puis la 2e rue à droite ; le cinéma est à droite."], reponse: 1, explication: "*geradeaus bis zur Ampel* = tout droit jusqu'au feu ; *nach links* = à gauche ; *die erste Straße rechts* = la 1re rue à droite ; *auf der linken Seite* = sur le côté gauche. Attention à ne pas inverser *links* et *rechts*." },
      ],
    },
    {
      id: "pays-germanophones-fetes",
      titre: "Les pays germanophones et leurs fêtes",
      theme: "Culture des pays germanophones",
      cours: `
## Où parle-t-on allemand ?
L'allemand est la **langue maternelle la plus parlée de l'Union européenne** (environ 90 millions de locuteurs natifs dans l'UE, près de 100 millions dans le monde). C'est la langue officielle de l'**Allemagne**, de l'**Autriche** et du **Liechtenstein**, et l'une des langues officielles de la **Suisse**, du **Luxembourg** et de la **Belgique** (communauté germanophone).

| Pays (allemand) | Capitale | Habitants (environ) | Divisions |
|---|---|---|---|
| Deutschland (l'Allemagne) | Berlin | 84 millions | 16 **Bundesländer** (Länder) |
| Österreich (l'Autriche) | Wien (Vienne) | 9 millions | 9 Bundesländer |
| die Schweiz (la Suisse) | Bern (Berne, « ville fédérale ») | 9 millions | 26 **Kantone** |
| Liechtenstein | Vaduz | 40 000 | |

La Suisse a **4 langues nationales** : l'allemand (la majorité), le français, l'italien et le romanche. Le suisse allemand (*Schwyzerdütsch*) est très différent de l'allemand standard à l'oral.

## L'Allemagne : les Länder et les grandes villes
L'Allemagne est un **État fédéral** : chaque *Land* a son gouvernement, et l'école dépend du Land. Trois Länder sont des villes : **Berlin, Hamburg, Bremen** (*Stadtstaaten*).
Quelques Länder et leur capitale : *Bayern* (Bavière, München), *Baden-Württemberg* (Stuttgart), *Nordrhein-Westfalen* (Düsseldorf), *Hessen* (Wiesbaden), *Niedersachsen* (Hannover), *Sachsen* (Dresden), *Rheinland-Pfalz* (Mainz), *das Saarland* (Saarbrücken).
Grandes villes : **Berlin**, **Hamburg** (grand port), **München** (Munich), **Köln** (Cologne, sa cathédrale, *der Kölner Dom*), **Frankfurt am Main** (banques, aéroport). Fleuves : *der Rhein* (Rhin), *die Donau* (Danube), *die Elbe*.
- Histoire : le **mur de Berlin** a séparé la ville de 1961 à 1989 ; il est tombé le **9 novembre 1989**. Le **3 octobre** est la fête nationale (*Tag der Deutschen Einheit*, réunification de 1990).
- Amitié franco-allemande : le **traité de l'Élysée** a été signé le **22 janvier 1963** ; le 22 janvier est la Journée franco-allemande.

## L'Autriche et la Suisse
- **Wien** : châteaux (*Schloss Schönbrunn*), cafés viennois, *Sachertorte*. **Salzburg** est la ville natale de **Mozart** (1756). Les Alpes couvrent une grande partie du pays.
- **Suisse** : *Zürich* est la plus grande ville ; *Genf* (Genève) et *Lausanne* sont francophones. Spécialités : chocolat, fromage, montres. En Suisse, on écrit **ss** au lieu de ß.

## Les fêtes
**Weihnachten (Noël)**
- *der Advent* (l'Avent) : les quatre semaines avant Noël, qui commencent le 4e dimanche avant Noël. On allume une bougie de plus chaque dimanche sur la couronne de l'Avent (*der Adventskranz*) ; on ouvre une case du calendrier de l'Avent (*der Adventskalender*) chaque jour.
- *der Nikolaustag* (**6 décembre**) : la veille, les enfants posent leurs bottes devant la porte ; saint Nicolas y met des friandises.
- *der Weihnachtsmarkt* : marché de Noël (Nuremberg, Dresde…) avec *Glühwein*, *Lebkuchen* (pain d'épices), *Plätzchen* (petits gâteaux).
- *Heiligabend* (**24 décembre au soir**) : on décore le sapin (*der Weihnachtsbaum* / *der Tannenbaum*) et on ouvre les cadeaux, apportés par *das Christkind* ou *der Weihnachtsmann*. *Frohe Weihnachten!*

**Ostern (Pâques)**
- Le lièvre de Pâques (*der Osterhase*) cache des œufs colorés (*die Ostereier*) dans le jardin ; on décore des branches d'œufs peints. *Frohe Ostern!*

**Karneval / Fasching / Fasnacht**
- On se déguise avant le carême, en février (parfois début mars, selon la date de Pâques). On dit **Karneval** en Rhénanie (Cologne, Düsseldorf, Mayence), **Fasching** en Bavière et en Autriche, **Fasnacht** dans le sud-ouest et en Suisse (*Basler Fasnacht*).
- Le temps fort est le **Rosenmontag** (lundi gras) avec de grands défilés. Cris : *Kölle Alaaf!* (Cologne), *Helau!* (Düsseldorf, Mayence). La saison s'ouvre symboliquement le **11.11. à 11 h 11**.

**Autres fêtes** : l'**Oktoberfest** à Munich (fin septembre – début octobre), *Silvester* (la Saint-Sylvestre, 31 décembre), *Sankt Martin* (11 novembre, défilé de lanternes des enfants).

> **À retenir** : Allemagne (Berlin, 16 Länder), Autriche (Wien, 9 Länder), Suisse (Bern, 26 cantons, 4 langues). Fêtes : *Weihnachten* (Advent, 6.12. Nikolaus, 24.12. Heiligabend), *Ostern* (Osterhase, Ostereier), *Karneval / Fasching / Fasnacht* (Rosenmontag). 3 octobre : fête nationale allemande.

### Erreurs fréquentes
- Croire que la Suisse ne parle qu'allemand : elle a 4 langues nationales.
- Confondre *Fasching* (Bavière, Autriche) et *Oktoberfest* (fête de la bière de Munich, en automne).
- En Allemagne, les cadeaux de Noël s'ouvrent souvent le **24 décembre au soir**, pas le 25 au matin.
`,
      exercices: [
        { type: "saisie", question: "Quelle est la capitale de l'Autriche ? (écris le nom allemand)", reponses: ["Wien"], explication: "La capitale de l'Autriche (*Österreich*) est **Wien** (Vienne)." },
        { type: "qcm", question: "Combien l'Allemagne compte-t-elle de Länder ?", choix: ["9", "12", "16", "26"], reponse: 2, explication: "L'Allemagne a **16 Länder**. L'Autriche en a 9 ; la Suisse compte 26 cantons." },
        { type: "saisie", question: "Comment dit-on « Noël » en allemand ?", reponses: ["Weihnachten"], explication: "**Weihnachten** = Noël. *Frohe Weihnachten!* = Joyeux Noël !" },
        { type: "saisie", question: "Comment dit-on « Pâques » en allemand ?", reponses: ["Ostern"], explication: "**Ostern** = Pâques ; *der Osterhase* (le lièvre de Pâques) apporte les *Ostereier*." },
        { type: "qcm", question: "Quel jour fête-t-on *der Nikolaustag* ?", choix: ["le 11 novembre", "le 24 décembre", "le 6 décembre", "le 3 octobre"], reponse: 2, explication: "Le **6 décembre** : saint Nicolas remplit de friandises les bottes des enfants. Le 24 décembre = *Heiligabend* ; le 11 novembre = *Sankt Martin* ; le 3 octobre = fête nationale." },
        { type: "vf", question: "La Suisse a quatre langues nationales : l'allemand, le français, l'italien et le romanche.", reponse: true, explication: "Oui : l'allemand est majoritaire, mais le français (Genève, Lausanne), l'italien (Tessin) et le romanche sont aussi langues nationales." },
        { type: "qcm", question: "Comment appelle-t-on le carnaval en Bavière et en Autriche ?", choix: ["Fasching", "Oktoberfest", "Advent", "Silvester"], reponse: 0, explication: "On dit **Fasching** en Bavière et en Autriche, **Karneval** en Rhénanie, **Fasnacht** en Suisse et dans le sud-ouest." },
        { type: "saisie", question: "Dans quelle ville a lieu l'Oktoberfest ? (nom allemand)", reponses: ["München", "Muenchen", "in München"], explication: "L'Oktoberfest a lieu à **München** (Munich), capitale de la Bavière, de fin septembre à début octobre." },
        { type: "qcm", question: "Que fête-t-on en Allemagne le 3 octobre ?", choix: ["La chute du mur de Berlin", "Le traité de l'Élysée", "Le début du carnaval", "La réunification (Tag der Deutschen Einheit)"], reponse: 3, explication: "Le **3 octobre** est la fête nationale : la réunification de l'Allemagne en 1990. Le mur est tombé le 9 novembre 1989." },
        { type: "redaction", question: "Écris une carte (6 phrases, en allemand) à ton correspondant allemand pour lui raconter comment on fête Noël chez toi et lui poser 2 questions sur Noël en Allemagne (le calendrier de l'Avent, le 24 décembre, le marché de Noël…).", corrige: "**Modèle :**\n\n*Lieber Felix,*\n\n*bei uns in Frankreich feiern wir Weihnachten am 24. und am 25. Dezember. Wir haben einen Weihnachtsbaum im Wohnzimmer. Am 25. Dezember morgens öffnen wir die Geschenke. Wir essen mit der Familie, und zum Nachtisch gibt es einen Kuchen, die « bûche de Noël ». Hast du auch einen Adventskalender? Wann öffnet ihr die Geschenke? Am 24. Dezember abends?*\n\n*Frohe Weihnachten und viele Grüße!*\n*Emma*\n\nPoints à vérifier :\n- formule d'appel *Lieber* (garçon) / *Liebe* (fille) + virgule, puis minuscule au début du texte ;\n- vocabulaire : *Weihnachten, der Weihnachtsbaum, die Geschenke, der Adventskalender* ;\n- accusatif : *einen Weihnachtsbaum*, *einen Adventskalender* ;\n- inversion : *Am 25. Dezember öffnen wir…* ;\n- questions : verbe en 1re position (*Hast du…?*) ou mot interrogatif + verbe (*Wann öffnet ihr…?*)." },
      ],
    },
    {
      id: "journee-verbes-separables",
      titre: "Ma journée et les verbes à particule séparable",
      theme: "Mon quotidien",
      cours: `
## Les verbes à particule séparable
Beaucoup de verbes allemands commencent par une petite **particule** (*auf, an, ein, aus, mit, zu, fern…*). Au présent, cette particule se **détache** du verbe et va **à la fin** de la phrase.

| Infinitif | Sens | Exemple |
|---|---|---|
| **auf**stehen | se lever | *Ich stehe um sieben Uhr **auf**.* |
| **an**rufen | téléphoner, appeler | *Ich rufe meine Oma **an**.* |
| **ein**kaufen | faire les courses | *Wir kaufen am Samstag **ein**.* |
| **fern**sehen | regarder la télé | *Er sieht abends **fern**.* |
| **auf**räumen | ranger | *Ich räume mein Zimmer **auf**.* |
| **mit**kommen | venir (avec) | *Kommst du **mit**?* |
| **zu**hören | écouter | *Hör gut **zu**!* |
| **aus**gehen | sortir | *Am Freitag gehen wir **aus**.* |

>! **Méthode** : conjugue le verbe sans la particule (*stehen* → *ich stehe*), mets-le en **2e position**, et place la particule **tout à la fin**.
>! *auf|stehen* → *Ich **stehe** jeden Tag um sieben Uhr **auf**.*
>! Avec inversion : *Um sieben Uhr **stehe** ich **auf**.*
>! Question fermée : ***Siehst** du heute **fern**?*

- Le changement de voyelle des verbes forts reste : *fernsehen* → *du **siehst** fern, er **sieht** fern*.
- Avec un verbe de modalité, le verbe reste **entier** à l'infinitif, à la fin : *Ich muss früh **aufstehen**.*
- À l'impératif aussi, la particule va à la fin : *Steh auf!* *Räum dein Zimmer auf!* *Pass auf!*

## Ma journée (mein Tag)
- *Ich wache um halb sieben auf.* (je me réveille) – *Ich stehe um sieben Uhr auf.*
- *Ich frühstücke.* (*frühstücken* n'est **pas** séparable : *ich frühstücke*.)
- *Ich putze mir die Zähne.* (je me brosse les dents) – *Ich ziehe mich an.* (je m'habille)
- *Um acht Uhr beginnt die Schule.* – *Ich esse in der Kantine.* (à la cantine)
- *Am Nachmittag mache ich meine Hausaufgaben.* – *Dann sehe ich fern oder ich spiele.*
- *Um neun Uhr gehe ich ins Bett.* (je vais me coucher)
- Mots de liaison pour raconter dans l'ordre : *zuerst* (d'abord), *dann* (puis), *danach* (ensuite), *später* (plus tard), *zum Schluss* (pour finir). Ils comptent comme **1er élément** → inversion : *Dann **gehe ich** zur Schule.*

> **À retenir** : verbe conjugué en **2e position**, particule **à la fin** : *Ich stehe um 7 Uhr auf.* Avec un modal : *Ich muss aufstehen* (infinitif entier à la fin). *zuerst, dann, danach* + inversion.

### Erreurs fréquentes
- *Ich aufstehe um sieben Uhr* → *Ich **stehe** um sieben Uhr **auf***.
- *Ich muss stehe auf* → *Ich muss **aufstehen***.
- Oublier l'inversion après *dann* : *Dann ich gehe* → *Dann **gehe ich***.
- Rendre *frühstücken* séparable : *ich stücke früh* n'existe pas → *ich frühstücke*.
`,
      exercices: [
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr.", "Ich stehe um sieben Uhr auf.", "Ich stehe um sieben auf Uhr."], reponse: 2, explication: "Le verbe conjugué *stehe* est en 2e position et la particule **auf** va **tout à la fin** : *Ich stehe um sieben Uhr auf.*" },
        { type: "saisie", question: "Complète avec la particule : « Ich rufe meine Oma ___. » (*anrufen*)", reponses: ["an"], explication: "*an|rufen* : la particule **an** se place à la fin : *Ich rufe meine Oma an.*" },
        { type: "qcm", question: "Que signifie *Wir kaufen am Samstag ein* ?", choix: ["Nous faisons les courses samedi.", "Nous sortons samedi.", "Nous rangeons samedi.", "Nous achetons un samedi."], reponse: 0, explication: "*ein|kaufen* = faire les courses. *ausgehen* = sortir, *aufräumen* = ranger." },
        { type: "saisie", question: "Conjugue *fernsehen* : « Mein Bruder ___ jeden Abend ___. » Écris les deux mots manquants séparés par une espace.", reponses: ["sieht fern"], explication: "*fernsehen* est un verbe fort (e → ie) **et** séparable : *er **sieht** … **fern***. *Mein Bruder sieht jeden Abend fern.*" },
        { type: "vf", question: "Avec un verbe de modalité, on écrit : « Ich muss früh aufstehen. »", reponse: true, explication: "Le modal *muss* est en 2e position et le verbe séparable reste **entier** à l'infinitif, à la fin : *aufstehen*." },
        { type: "saisie", question: "Commence la phrase par *Um sieben Uhr* : « Ich stehe um sieben Uhr auf. » → « Um sieben Uhr … »", reponses: ["Um sieben Uhr stehe ich auf.", "Um sieben Uhr stehe ich auf", "Um 7 Uhr stehe ich auf"], explication: "*Um sieben Uhr* (1) **stehe** (2) **ich** (3) … **auf** (fin) : inversion du sujet, et la particule reste à la fin." },
        { type: "qcm", question: "Mets à l'impératif (*du*) : *aufräumen* + *dein Zimmer*.", choix: ["Aufräum dein Zimmer!", "Räum dein Zimmer auf!", "Räumst dein Zimmer auf!", "Du räumst auf dein Zimmer!"], reponse: 1, explication: "Impératif *du* : radical sans *-st* en 1re position, particule à la fin : **Räum dein Zimmer auf!**" },
        { type: "saisie", question: "Transforme en question fermée : « Du kommst mit. »", reponses: ["Kommst du mit?", "Kommst du mit"], explication: "Question oui/non : le verbe conjugué en 1re position, la particule toujours à la fin : **Kommst du mit?**" },
        { type: "redaction", question: "Raconte ta journée d'école en 7 phrases, dans l'ordre, avec les heures. Utilise au moins 3 verbes à particule séparable (*aufstehen, fernsehen, aufräumen, anrufen…*) et les mots *zuerst, dann, danach*.", corrige: "**Modèle :**\n\n*Ich stehe um sieben Uhr auf. Zuerst frühstücke ich: ich esse ein Brötchen und trinke Kakao. Dann gehe ich zu Fuß zur Schule. Die Schule beginnt um acht Uhr. Mittags esse ich in der Kantine. Danach mache ich meine Hausaufgaben und ich räume mein Zimmer auf. Am Abend sehe ich ein bisschen fern und um neun Uhr gehe ich ins Bett.*\n\nPoints à vérifier :\n- verbe conjugué en 2e position, **particule à la fin** (*stehe … auf*, *räume … auf*, *sehe … fern*) ;\n- **inversion** après *Zuerst, Dann, Danach, Mittags, Am Abend* ;\n- *frühstücken* n'est pas séparable ;\n- **um** + heure." },
        { type: "qcm", question: "**Compréhension.** Lis le texte : « *Ich heiße Max. Ich stehe um halb sieben auf. Zuerst frühstücke ich, dann gehe ich zu Fuß zur Schule. Die Schule beginnt um acht Uhr. Am Nachmittag mache ich meine Hausaufgaben und am Abend sehe ich fern. Um neun Uhr gehe ich ins Bett.* » À quelle heure Max se lève-t-il ?", choix: ["à 7 h 30", "à 6 h", "à 8 h", "à 6 h 30"], reponse: 3, explication: "*Ich stehe um **halb sieben** auf* : *halb sieben* = la moitié du chemin vers 7 heures, donc **6 h 30** (piège : pas 7 h 30). 8 h est l'heure du début des cours." },
        { type: "vf", question: "**Compréhension** (même texte) : « *… Am Nachmittag mache ich meine Hausaufgaben und am Abend sehe ich fern. Um neun Uhr gehe ich ins Bett.* » Vrai ou faux : Max regarde la télévision l'après-midi.", reponse: false, explication: "L'après-midi (*am Nachmittag*), Max fait ses **devoirs** ; il regarde la télé (*sehe … fern*, verbe *fernsehen*) **le soir** (*am Abend*), avant de se coucher à 21 h." },
      ],
    },
    {
      id: "vetements-couleurs-meteo",
      titre: "Les vêtements, les couleurs et la météo",
      theme: "Mon quotidien",
      cours: `
## Les couleurs (die Farben)
| Allemand | Français | Allemand | Français |
|---|---|---|---|
| rot | rouge | weiß | blanc |
| blau | bleu | braun | marron, brun |
| grün | vert | grau | gris |
| gelb | jaune | rosa | rose |
| schwarz | noir | lila | violet |
| orange | orange | bunt | multicolore |

- **hell-** (clair) et **dunkel-** (foncé) se collent devant la couleur, en un seul mot : *hellblau* (bleu clair), *dunkelgrün* (vert foncé), *hellgrau*, *dunkelrot*.
- *Welche Farbe hat dein Rucksack?* (De quelle couleur est ton sac à dos ?) → *Er ist schwarz.*
- Employée comme **nom**, la couleur est neutre et prend une **majuscule** : *Meine Lieblingsfarbe ist Grün.* – *Haben Sie die Jacke auch in Rot?*

## Les vêtements (die Kleidung)
Comme toujours, apprends chaque nom avec son **article** et son **pluriel**.
| Masculin (der) | Féminin (die) | Neutre (das) |
|---|---|---|
| der Pullover / der Pulli – die Pullover / die Pullis (pull) | die Hose – die Hosen (pantalon) | das T-Shirt – die T-Shirts |
| der Rock – die Röcke (jupe) | die Jeans – die Jeans (jean) | das Kleid – die Kleider (robe) |
| der Mantel – die Mäntel (manteau) | die Jacke – die Jacken (veste, blouson) | das Hemd – die Hemden (chemise) |
| der Schal – die Schals (écharpe) | die Bluse – die Blusen (chemisier) | |
| der Schuh – die Schuhe (chaussure) | die Mütze – die Mützen (bonnet) | |
| der Turnschuh – die Turnschuhe (basket) | die Socke – die Socken (chaussette) | |
| der Stiefel – die Stiefel (botte) | | |
| der Handschuh – die Handschuhe (gant) | | |

Rappel : *die Brille* (les lunettes) est un **singulier** en allemand : *Er trägt eine Brille.* À l'inverse, *die Shorts* (le short) s'emploie le plus souvent au **pluriel** : *Die Shorts sind grau.*

## Porter et mettre : tragen, anziehen
- **tragen** (porter) est un **verbe fort** (a → ä), comme *fahren* : ich trage, du **trägst**, er/sie/es **trägt**, wir tragen, ihr tragt, sie/Sie tragen.
- **anziehen** (mettre un vêtement) est **séparable** : *Ich **ziehe** meinen Mantel **an**.* – *Es ist kalt, **zieh** deine Mütze **an**!* Son contraire : **ausziehen** (enlever) : *Ich ziehe die Schuhe aus.*
- Le vêtement est un COD : il se met à l'**accusatif** (seul le masculin change) : *Ich trage **einen** Rock, **eine** Bluse und **ein** T-Shirt.*

>! **Was trägst du heute?** (Qu'est-ce que tu portes aujourd'hui ?)
>! *Heute trage ich eine Jeans, einen Pullover und Turnschuhe. Die Jeans ist dunkelblau, der Pullover ist grün und die Turnschuhe sind weiß.*
>! Pour reprendre le vêtement, le pronom suit son genre : *der Pullover* → **er**, *die Hose* → **sie**, *das Kleid* → **es**, *die Schuhe* → **sie**.

## La couleur après sein : l'adjectif reste invariable
Comme pour décrire quelqu'un (*Sie ist groß*), l'adjectif **attribut** (après *sein*) ne s'accorde **jamais** :
- *Die Hose ist blau.* – *Der Mantel ist schwarz.* – *Das Kleid ist rosa.* – *Die Schuhe sind braun.*
- Seul le verbe change au pluriel : *ist* → **sind**.

>! **Pour aller plus loin** : placé **devant** le nom, l'adjectif prend une terminaison (*ein roter Pullover, eine blaue Hose, ein grünes T-Shirt*). Ce n'est pas au programme de cette année : utilise plutôt la construction avec *sein* : *Ich trage einen Pullover. Er ist rot.* (Tu connais déjà le cas simple *Er hat blaue Augen*.) Les couleurs *rosa*, *lila* et *orange* ne prennent jamais de terminaison.

## Dire qu'un vêtement plaît : gefallen
*gefallen* (plaire) se construit **comme en français** : la chose qui plaît est le **sujet**, et la personne est *mir* (à moi), *dir* (à toi), *Ihnen* (à vous, poli).
- *Die Jacke **gefällt** mir.* (La veste me plaît.) – *Der Rock gefällt mir nicht.*
- Au pluriel : *Die Schuhe **gefallen** mir.* (Les chaussures me plaisent.)
- *Gefällt dir das Kleid?* – *Ja, es gefällt mir sehr!* / *Nein, es gefällt mir nicht.*

C'est un verbe fort (a → ä) : *es gefällt*, mais *sie gefallen*.

## La météo (das Wetter)
- *Wie ist das Wetter heute?* (Quel temps fait-il aujourd'hui ?)
| Allemand | Français |
|---|---|
| Die Sonne scheint. / Es ist sonnig. | Le soleil brille. / Il fait beau. |
| Es regnet. (der Regen) | Il pleut. (la pluie) |
| Es schneit. (der Schnee) | Il neige. (la neige) |
| Es ist windig. (der Wind) | Il y a du vent. |
| Es ist bewölkt. (die Wolke, die Wolken) | C'est nuageux. |
| Es ist neblig. (der Nebel) | Il y a du brouillard. |
| Es gibt ein Gewitter. | Il y a un orage. |
| Es ist kalt / kühl / warm / heiß. | Il fait froid / frais / chaud / très chaud. |
| Das Wetter ist schön / schlecht. | Il fait beau / mauvais. |

- La température : *Es ist zwanzig Grad.* ou *Es sind zwanzig Grad.* (20 °C) – *Es ist minus fünf Grad.* (−5 °C) – *null Grad* (0 °C). Question : *Wie warm ist es?*
- *es* reste le sujet : avec l'inversion, il passe après le verbe : ***Heute regnet es.*** – *Im Winter **schneit es** oft.* – *Morgen **ist es** warm.*
- *der Regenschirm* = le parapluie : *Es regnet, nimm deinen Regenschirm!*

## Les saisons et les mois
Tu les as vus dans le chapitre « Les nombres, la date et l'heure » : *der Frühling, der Sommer, der Herbst, der Winter* ; **im** + saison ou mois.
- *Im Sommer ist es heiß. Ich trage ein T-Shirt und Shorts.*
- *Im Winter ist es kalt und es schneit. Ich ziehe einen Mantel, eine Mütze und Handschuhe an.*
- *Im April regnet es oft.* – *Im Herbst ist es windig.*

## Dans un magasin de vêtements (im Geschäft)
- *Verkäuferin : Guten Tag! Kann ich Ihnen helfen?* (Je peux vous aider ?)
- *Kunde : Ja, ich suche einen Pullover.* (Je cherche un pull.)
- *Verkäuferin : Welche Größe? Und welche Farbe?* (Quelle taille ? Et quelle couleur ?)
- *Kunde : Größe M, bitte. Haben Sie den Pullover in Blau?*
- *Verkäuferin : Ja, hier bitte.*
- *Kunde : Kann ich ihn anprobieren?* (Je peux l'essayer ?)
- *Kunde : Er gefällt mir. Was kostet er?*
- *Verkäuferin : Er kostet neunundzwanzig Euro.* (29 €)
- *Kunde : Das ist nicht teuer. Ich nehme ihn.* (Je le prends.)

Au pluriel : *Was **kosten** die Schuhe? – Sie **kosten** sechzig Euro.* Avis sur le prix : *teuer* (cher), *zu teuer* (trop cher), *billig* (bon marché). Tu réutilises ici *Was kostet das?*, le modal + infinitif à la fin (*Kann ich ihn anprobieren?*) et l'accusatif (*einen Pullover*, *ihn*).

> **À retenir** : couleurs *rot, blau, grün, gelb, schwarz, weiß, braun, grau, rosa, lila, orange* ; *hellblau, dunkelgrün*. Vêtements avec article et pluriel (*der Rock – die Röcke*). *tragen* : du **trägst**, er **trägt** ; *anziehen* séparable : *Ich ziehe die Jacke an.* Attribut invariable : *Die Hose ist blau.* *Die Jacke gefällt mir / Die Schuhe gefallen mir.* Météo : *Es regnet, es schneit, die Sonne scheint, es ist kalt, es sind 20 Grad.* *Was kostet…? – Das kostet 20 Euro.*

### Erreurs fréquentes
- *Die Hose ist blaue* → *Die Hose ist **blau*** (attribut invariable).
- *er tragt* → *er **trägt*** (verbe fort).
- *Ich anziehe meine Jacke* → *Ich **ziehe** meine Jacke **an***.
- *Ich gefalle die Jacke* → *Die Jacke **gefällt mir*** (la chose est le sujet).
- *Heute es regnet* → *Heute **regnet es***.
- *Ich trage ein Pullover* → *Ich trage **einen** Pullover* (accusatif masculin).
`,
      exercices: [
        { type: "qcm", question: "Que signifie la couleur *gelb* ?", choix: ["vert", "gris", "jaune", "bleu"], reponse: 2, explication: "**gelb** = jaune. Vert = *grün*, gris = *grau*, bleu = *blau*." },
        { type: "saisie", question: "Écris le pluriel de *der Rock* (la jupe), avec l'article.", reponses: ["die Röcke", "die Roecke"], explication: "*der Rock* → **die Röcke** : pluriel en **-e** avec Umlaut (o → ö), comme *der Stuhl → die Stühle*. L'article pluriel est toujours *die*." },
        { type: "qcm", question: "Complète : « Mein Vater ___ heute einen Mantel. » (*tragen*)", choix: ["tragt", "trägt", "trägst", "tragen"], reponse: 1, explication: "*tragen* est un verbe fort (a → ä) avec *du* et *er/sie/es* : **er trägt** (*Mein Vater* = er). *du trägst*, *ihr tragt*, *sie tragen*." },
        { type: "vf", question: "*Die Hose ist blaue.* est une phrase correcte.", reponse: false, explication: "Après *sein*, l'adjectif attribut est **invariable** : *Die Hose ist **blau**.* Au pluriel aussi : *Die Schuhe sind blau.*" },
        { type: "saisie", question: "Complète avec la particule : « Es ist kalt. Ich ziehe meinen Mantel ___. » (*anziehen*)", reponses: ["an"], explication: "*an|ziehen* est séparable : le verbe conjugué *ziehe* est en 2e position et la particule **an** va à la fin : *Ich ziehe meinen Mantel an.*" },
        { type: "qcm", question: "Complète : « Die Schuhe ___ mir. » (Les chaussures me plaisent.)", choix: ["gefallen", "gefällt", "gefällst", "gefalle"], reponse: 0, explication: "Avec *gefallen*, la chose qui plaît est le **sujet** : *die Schuhe* est pluriel → **gefallen**. Au singulier : *Die Jacke gefällt mir.*" },
        { type: "qcm", question: "Il fait −5 °C et des flocons tombent. Quelle phrase décrit le temps ?", choix: ["Es ist heiß und die Sonne scheint.", "Es regnet und es ist warm.", "Es ist windig und es ist warm.", "Es schneit und es ist kalt."], reponse: 3, explication: "**Es schneit** = il neige, **es ist kalt** = il fait froid. *heiß* = très chaud, *es regnet* = il pleut, *windig* = venteux." },
        { type: "saisie", question: "Traduis : « Aujourd'hui, il pleut. » (commence par *Heute*)", reponses: ["Heute regnet es.", "Heute regnet es"], explication: "*Heute* (1) **regnet** (2) **es** (3) : après *Heute*, le sujet *es* passe derrière le verbe (inversion). *Heute es regnet* est faux." },
        { type: "saisie", question: "Dans un magasin, demande : « Combien coûte le pantalon ? »", reponses: ["Was kostet die Hose?", "Was kostet die Hose", "Wie viel kostet die Hose?", "Wie viel kostet die Hose"], explication: "**Was kostet die Hose?** (*die Hose* est féminin et singulier). Réponse : *Sie kostet 35 Euro.* Au pluriel : *Was kosten die Schuhe?*" },
        { type: "redaction", question: "Écris un message de 7 à 8 phrases à ton correspondant : dis quel temps il fait chez toi aujourd'hui (avec la température) et quelle est la saison, décris ce que tu portes (au moins 3 vêtements, avec *tragen* et la couleur après *sein*), dis ce que tu mets quand il fait froid (*anziehen*), parle d'un vêtement qui te plaît (*gefallen*), puis pose-lui la question *Was trägst du heute?*", corrige: "**Modèle :**\n\n*Hallo Jonas!*\n\n*Hier in Lille ist das Wetter heute schlecht: es regnet und es ist windig. Es sind nur acht Grad. Es ist Herbst, und im November regnet es oft. Heute trage ich eine Jeans, einen Pullover und Turnschuhe. Der Pullover ist dunkelgrün und die Turnschuhe sind weiß. Morgen ist es kalt, dann ziehe ich meinen Mantel und meine Mütze an. Meine Jacke gefällt mir sehr: sie ist rot und warm. Und du? Wie ist das Wetter bei dir? Was trägst du heute?*\n\n*Viele Grüße!*\n*Léa*\n\nPoints à vérifier :\n- météo avec **es** : *es regnet, es ist windig, es sind acht Grad* ; inversion : *Heute ist…*, *im November regnet es* ;\n- **tragen** + accusatif : *einen Pullover* (masc.), *eine Jeans*, *Turnschuhe* (pluriel sans article) ;\n- couleur **invariable** après *sein* : *Der Pullover ist dunkelgrün*, *die Turnschuhe sind weiß* ;\n- **anziehen** séparable : *ich ziehe … an* (particule à la fin) ;\n- **gefallen** : *Meine Jacke gefällt mir* (la chose est le sujet)." },
        { type: "qcm", question: "**Compréhension.** Lis le message : « *Hallo Tom! Hier in Hamburg ist das Wetter heute schlecht: es regnet und es ist kalt, nur fünf Grad. Ich trage einen Mantel, eine Mütze und Stiefel. Meine Mütze ist rot und meine Stiefel sind schwarz. Morgen scheint die Sonne. Viele Grüße, Anna* » Quel temps fait-il aujourd'hui à Hambourg ?", choix: ["Il fait beau et chaud.", "Il neige et il fait −5 °C.", "Il pleut et il fait froid : 5 °C.", "Il y a du vent et du soleil."], reponse: 2, explication: "*es regnet* = il pleut, *es ist kalt* = il fait froid, *nur fünf Grad* = seulement 5 °C. Le soleil (*die Sonne scheint*), c'est pour **demain** (*morgen*)." },
        { type: "saisie", question: "**Compréhension** (même message) : « *Ich trage einen Mantel, eine Mütze und Stiefel. Meine Mütze ist rot und meine Stiefel sind schwarz.* » De quelle couleur est le bonnet d'Anna ? Réponds en allemand, en un mot.", reponses: ["rot"], explication: "*die Mütze* = le bonnet ; *Meine Mütze ist **rot*** = rouge. Après *sein*, la couleur reste invariable (pas *rote*). Les bottes (*die Stiefel*) sont noires (*schwarz*)." },
      ],
    },
  ],
};
