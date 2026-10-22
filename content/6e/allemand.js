export default {
  chapitres: [
    {
      id: "sons-et-lettres",
      titre: "Les sons et les lettres de l'allemand",
      theme: "Outils de la langue",
      cours: `
## Deux langues cousines
Bonne nouvelle : tu apprends l'anglais et l'allemand en même temps, et ce sont deux langues **cousines**. Beaucoup de mots se ressemblent : on les appelle des **mots transparents**.

| Allemand | Anglais | Français |
|---|---|---|
| das Haus | the house | la maison |
| die Maus | the mouse | la souris |
| der Vater | the father | le père |
| die Nase | the nose | le nez |
| grün | green | vert |
| der Wind | the wind | le vent |

Attention : un mot transparent s'écrit pareil, mais il ne se **prononce** pas toujours pareil. Pour bien lire, il faut connaître les règles ci-dessous.

## Les voyelles
- **u** se dit « ou » : *gut* (bien), *Buch* (livre).
- **ie** se dit « i » long : *vier* (quatre), *spielen* (jouer).
- **ei** se dit « aï » : *drei* (trois), *weiß* (blanc).
- **au** se dit « aou » : *Haus*, *kaufen* (acheter).
- **eu** et **äu** se disent « oï » : *neu* (nouveau), *Häuser* (maisons).
- Le **e** final se prononce (un « e » léger) : *Klasse*, *Schule*.
- Le **-er** final se dit presque comme un « a » léger : *Mutter*, *Vater*.

## Les trois voyelles avec Umlaut : ä, ö, ü
Les deux petits points s'appellent l'**Umlaut**. Ils changent le son, et souvent le sens du mot !
- **ä** se dit « è » : *der Apfel* (la pomme) → *die Äpfel* (les pommes).
- **ö** se dit « eu » : *die Tochter* (la fille) → *die Töchter* (les filles).
- **ü** se dit « u » : *Schule* (école) → *Schüler* (élève).

## Voyelle longue ou courte ?
- Devant une **consonne double**, la voyelle est **courte** : *Sonne* (soleil), *nett* (gentil), *Tasse*.
- Devant un **h** muet ou quand la voyelle est **doublée**, elle est **longue** : *Sohn* (fils), *fahren*, *Tee*.

## Les consonnes
- **w** se dit « v » : *wie* (comment). **v** se dit « f » : *viel* (beaucoup), *Vater*.
- **z** se dit « ts » : *zehn* (dix), *Zeit* (temps), *Zug* (train).
- **j** se dit « y » : *ja* (oui).
- **s** devant une voyelle se dit « z » : *sieben* (sept), *Sonne*.
- **st** et **sp** au début d'un mot se disent « cht » et « chp » : *Stadt* (ville), *spielen*.
- **h** au début d'un mot est **aspiré** : on souffle comme sur une vitre pour faire de la buée : *Haus*, *heiß* (chaud). Compare avec *Eis* (glace), qui commence sans souffle.
- **ng** se dit comme dans l'anglais *sing* : on n'entend pas de « g » : *jung* (jeune), *singen* (chanter).
- **ß** se dit « ss » : *heißen* (s'appeler), *Fuß* (pied).

## Les trois « ch »
| Graphie | Son | Exemples |
|---|---|---|
| **ch** après a, o, u, au | raclé au fond de la gorge (*Ach-Laut*) | *Buch*, *machen*, *auch* |
| **ch** après e, i, ä, ö, ü, ei, eu ou une consonne | doux, comme un chat qui souffle (*Ich-Laut*) | *ich*, *nicht*, *Kirche* (église) |
| **sch** | comme le « ch » de *chat* | *Kirsche* (cerise), *Deutsch* |

>! **Écoute la différence** : *Kirche* (église, son doux) et *Kirsche* (cerise, « ch » français). Une seule lettre change, et le sens aussi !

## L'accent et la mélodie
- On appuie en général sur la **première syllabe** : *Va*ter, *Schu*le, *Fen*ster.
- Question à laquelle on répond par **oui ou non** : la voix **monte** à la fin (*Hast du einen Hund?* ↗).
- Question avec un **mot interrogatif** (*wie, wo, was…*) : la voix **descend** à la fin (*Wo wohnst du?* ↘).

> **À retenir** : u = « ou », ie = « i », ei = « aï », eu/äu = « oï », w = « v », v = « f », z = « ts », st/sp = « cht/chp ». ä = « è », ö = « eu », ü = « u ». Consonne double → voyelle courte ; h muet → voyelle longue. *ich* (son doux) ≠ *Buch* (son raclé) ≠ *Deutsch* (« ch » français).

### Erreurs fréquentes
- Lire *wie* « oui » : on dit « vi ».
- Lire *Stadt* « stat » : on dit « chtatt ».
- Prononcer le **g** de *singen* : on dit « zing-en », avec le son « ng » de l'anglais *singing* (ou du français *parking*), sans « g » dur.
`,
      exercices: [
        { type: "qcm", question: "Quel mot allemand ressemble à l'anglais *house* (la maison) ?", choix: ["die Hose", "der Hase", "das Haus", "der Hals"], reponse: 2, explication: "**das Haus** = *the house* = la maison : c'est un mot transparent. Attention aux faux amis : *die Hose* = le pantalon, *der Hase* = le lièvre, *der Hals* = le cou." },
        { type: "qcm", question: "Dans quel mot entends-tu le « ch » français, comme dans *chat* ?", choix: ["*ich*", "*Kirsche*", "*nicht*", "*Kirche*"], reponse: 1, explication: "Le « ch » français s'écrit **sch** en allemand : *Kir**sch**e* (cerise). Dans *ich*, *nicht* et *Kirche* (église), on entend le son doux du *Ich-Laut*." },
        { type: "vf", question: "Dans *Buch* (livre), le **ch** se prononce au fond de la gorge, avec un son raclé.", reponse: true, explication: "Après **a, o, u, au**, le ch est raclé (*Ach-Laut*) : *Buch*, *machen*, *auch*." },
        { type: "qcm", question: "Quel mot contient le son « oï » ?", choix: ["*nein*", "*nie*", "*nun*", "*neu*"], reponse: 3, explication: "**eu** se dit « oï » : *neu* (nouveau) se dit « noï ». *nein* (non) se dit « naïn », *nie* (jamais) « ni », *nun* (maintenant) « noun »." },
        { type: "saisie", question: "*der Schüler* veut dire « l'élève ». Enlève l'Umlaut et le *r* final : quel mot obtiens-tu ? Il veut dire « l'école ». (écris seulement le nom, sans article)", reponses: ["Schule"], explication: "*die **Schule*** (l'école) se dit « chou-le » ; *der **Schüler*** (l'élève) se dit « chu-leur ». L'Umlaut change le son : u = « ou », ü = « u »." },
        { type: "qcm", question: "Dans quel mot le **o** est-il **long** ?", choix: ["*Sohn*", "*Sonne*", "*kommen*", "*voll*"], reponse: 0, explication: "Dans *Sohn* (fils), le **h** muet rend le o **long**. Dans *Sonne*, *kommen* et *voll* (plein), la consonne double rend le o **court**." },
        { type: "vf", question: "Dans *singen* (chanter), on entend un « g » dur, comme dans le français *gare*.", reponse: false, explication: "**ng** se prononce comme dans l'anglais *sing* : la langue se colle au fond du palais, mais on n'entend pas de « g » dur. Même chose dans *jung* (jeune) et *lang* (long)." },
        { type: "qcm", question: "Comment se prononce le début de *Stadt* (la ville) ?", choix: ["« st », comme dans *stop*", "« ts »", "« cht »", "« sst »"], reponse: 2, explication: "Au début d'un mot, **st** se dit « cht » : *Stadt* → « chtatt ». De même **sp** se dit « chp » : *spielen* → « chpi-len »." },
        { type: "qcm", question: "Tu demandes à ton correspondant : *Hast du einen Hund?* (As-tu un chien ?). Que fait ta voix à la fin de la question ?", choix: ["Elle descend, comme pour une question avec *wo* ou *wie*.", "Elle monte, car on répond par oui ou par non.", "Elle reste toujours au même niveau.", "Elle s'arrête au milieu de la phrase."], reponse: 1, explication: "Une question fermée (réponse *ja* ou *nein*) se dit avec une voix qui **monte** à la fin. Avec un mot interrogatif (*Wo wohnst du?*), la voix **descend**." },
        { type: "redaction", question: "Explique en français comment on prononce ces quatre mots, lettre par lettre ou son par son : *Zeit* (le temps), *Häuser* (les maisons), *wie viel* (combien), *Mädchen* (la fille). Indique aussi sur quelle syllabe on appuie dans *Häuser* et *Mädchen*.", corrige: "- *Zeit* : **z** = « ts », **ei** = « aï » → « tsaït ».\n- *Häuser* : **h** aspiré (on souffle), **äu** = « oï », **s** devant voyelle = « z », **-er** final = « a » léger → « hoï-za ». On appuie sur ***Häu***.\n- *wie viel* : **w** = « v », **ie** = « i » long, **v** = « f » → « vi fil ».\n- *Mädchen* : **ä** = « è », **ch** après une consonne = son doux (*Ich-Laut*), **e** prononcé → « mèt-chyen » (le « ch » est très doux). On appuie sur ***Mäd***.\n\nPoints à vérifier : tu n'as pas confondu **w** (« v ») et **v** (« f ») ; tu as bien fait souffler le **h** ; tu as mis l'accent sur la **première** syllabe." },
      ],
    },
    {
      id: "communiquer-en-classe",
      titre: "Saluer et se débrouiller en classe",
      theme: "Communiquer",
      cours: `
## Saluer et dire au revoir
| Allemand | Français | Quand ? |
|---|---|---|
| Hallo! | Salut ! | avec les copains |
| Guten Morgen! | Bonjour ! | le matin |
| Guten Tag! | Bonjour ! | dans la journée |
| Guten Abend! | Bonsoir ! | le soir |
| Tschüss! | Salut ! (au revoir) | avec les copains |
| Auf Wiedersehen! | Au revoir ! | poli |
| Bis morgen! | À demain ! | |

En Autriche et en Bavière, on entend **Servus!** (salut) ; en Suisse, **Grüezi!** (bonjour).

## Comment ça va ?
- *Wie geht's?* ou *Wie geht's dir?* → Comment ça va ?
- *Prima, danke!* (super, merci) – *Danke, gut!* – *So lala.* (couci-couça) – *Nicht so gut.* (pas très bien)
- *Mir geht's gut.* → Je vais bien. – *Und dir?* → Et toi ?

## Être poli
- *Bitte!* → S'il te plaît / s'il vous plaît.
- *Danke!* → Merci ! – *Bitte schön!* → De rien !
- *Tut mir leid!* → Je suis désolé(e) ! – *Entschuldigung!* → Pardon / excusez-moi !

## Ce que dit le professeur
| Consigne | Sens |
|---|---|
| Setzt euch! | Asseyez-vous ! |
| Hört zu! | Écoutez ! |
| Guck mal! / Seht mal! | Regarde ! / Regardez ! |
| Schlagt eure Bücher auf! | Ouvrez vos livres ! |
| Auf Seite 15. | À la page 15. |
| Macht mit! | Participez ! |
| Ruhe, bitte! | Silence, s'il vous plaît ! |

## Ce que tu peux dire, toi
- *Kannst du bitte wiederholen?* → Tu peux répéter, s'il te plaît ? (à un camarade)
- *Können Sie bitte wiederholen?* → Vous pouvez répéter, s'il vous plaît ? (au professeur : on le **vouvoie** avec **Sie**)
- *Was heißt „crayon“ auf Deutsch?* → Comment dit-on « crayon » en allemand ?
- *Wie schreibt man das?* → Comment ça s'écrit ?
- *Ich habe verstanden.* / *Ich habe nicht verstanden.* → J'ai compris. / Je n'ai pas compris.
- *Das weiß ich nicht.* → Je ne sais pas.
- *Darf ich trinken?* → Est-ce que je peux boire ? (demander la permission)
- Pour être d'accord : *Okay!* – *Gute Idee!* – *Ja, gern!* – *Klasse!* – *Ich auch!*
- Pour prévenir : *Moment!* – *Warte mal!* (attends !) – *Vorsicht!* (attention !)

## Épeler un mot
*Ich buchstabiere:* … (J'épelle : …). Les lettres pièges : **e** se dit « é », **i** « i », **u** « ou », **j** « yott », **v** « faou », **w** « vé », **y** « upsilonn », **z** « tsètt ». **ä** se dit « a Umlaut » et **ß** se dit « èss-tsètt ».

## Le matériel scolaire
| Allemand | Français |
|---|---|
| der Kuli / der Bleistift | le stylo à bille / le crayon à papier |
| der Radiergummi | la gomme |
| das Heft / das Buch | le cahier / le livre |
| das Lineal / die Schere | la règle / les ciseaux |
| das Mäppchen | la trousse |
| die Tafel | le tableau |

> **À retenir** : *Guten Morgen!* (matin), *Tschüss!* (au revoir). *Wie geht's dir? – Prima, danke! Und dir?* Pour ne jamais rester bloqué : *Können Sie bitte wiederholen?* – *Was heißt … auf Deutsch?* – *Wie schreibt man das?* – *Ich habe nicht verstanden.*

### Erreurs fréquentes
- Dire *Tschüss!* en arrivant : c'est pour **partir** !
- Tutoyer le professeur : on dit *Können **Sie**…?*, pas *Kannst du…?*
- Dire *Ich bin gut* pour « je vais bien » : on dit *Mir geht's gut!*
`,
      exercices: [
        { type: "qcm", question: "Il est 8 heures du matin, tu entres en cours d'allemand. Que dis-tu au professeur ?", choix: ["Gute Nacht!", "Guten Abend!", "Tschüss!", "Guten Morgen!"], reponse: 3, explication: "Le matin, on dit **Guten Morgen!** *Guten Abend* = bonsoir, *Gute Nacht* = bonne nuit, *Tschüss* = salut, au revoir." },
        { type: "saisie", question: "Ton professeur parle trop vite. Demande-lui poliment de répéter, en le vouvoyant (4 mots).", reponses: ["Können Sie bitte wiederholen?", "Können Sie das bitte wiederholen?", "Wiederholen Sie bitte!", "Bitte wiederholen Sie!", "Können Sie bitte noch einmal wiederholen?"], explication: "**Können Sie bitte wiederholen?** On vouvoie le professeur avec **Sie** (majuscule). À un camarade, on dit : *Kannst du bitte wiederholen?*" },
        { type: "qcm", question: "Tu cherches le mot « gomme ». Quelle question poses-tu ?", choix: ["Wie schreibt man Radiergummi?", "Was heißt „gomme“ auf Deutsch?", "Wie geht's dir?", "Darf ich trinken?"], reponse: 1, explication: "**Was heißt „gomme“ auf Deutsch?** = Comment dit-on « gomme » en allemand ? (Réponse : *der Radiergummi*.) *Wie schreibt man…?* sert à demander l'orthographe d'un mot que tu connais déjà." },
        { type: "vf", question: "On dit *Tschüss!* pour saluer quelqu'un quand on arrive.", reponse: false, explication: "*Tschüss!* sert à dire **au revoir** (entre copains). Pour saluer en arrivant : *Hallo!*, *Guten Morgen!*, *Guten Tag!*" },
        { type: "qcm", question: "Ton camarade te demande : *Wie geht's dir?* Quelle réponse convient ?", choix: ["Ich heiße Tom.", "Ich bin elf.", "Prima, danke! Und dir?", "Auf Seite 15."], reponse: 2, explication: "*Wie geht's dir?* = Comment ça va ? → **Prima, danke! Und dir?** (Super, merci ! Et toi ?)" },
        { type: "saisie", question: "Le professeur te pose une question difficile. Traduis en allemand : « Je ne sais pas. »", reponses: ["Das weiß ich nicht.", "Ich weiß das nicht.", "Ich weiß es nicht.", "Ich weiß nicht."], explication: "**Das weiß ich nicht.** (ou *Ich weiß es nicht.*) C'est une formule à apprendre telle quelle, avec le verbe *wissen* (savoir) : *ich weiß*. Pour dire « je n'ai pas compris » : *Ich habe nicht verstanden.*" },
        { type: "qcm", question: "La professeure dit : *Schlagt eure Bücher auf! Auf Seite 20.* Que devez-vous faire ?", choix: ["Fermer vos livres", "Ouvrir vos livres à la page 20", "Lire la page 20 à voix haute", "Ranger vos cahiers"], reponse: 1, explication: "*Schlagt eure Bücher auf!* = Ouvrez vos livres ! *Auf Seite 20* = à la page 20. (*das Buch*, pluriel *die Bücher*.)" },
        { type: "vf", question: "Pour demander « Est-ce que je peux boire ? », on dit : *Darf ich trinken?*", reponse: true, explication: "Oui : **Darf ich…?** sert à demander la permission. *Darf ich trinken?* = Est-ce que je peux (ai-je le droit de) boire ?" },
        { type: "saisie", question: "Comment dit-on « le cahier » en allemand ? (avec l'article)", reponses: ["das Heft"], explication: "**das Heft** (pluriel : *die Hefte*). À ne pas confondre avec *das Buch* (le livre)." },
        { type: "redaction", question: "Tu arrives en retard au cours d'allemand. Écris un petit dialogue de 6 répliques avec la professeure, *Frau Weber*. Tu dois : saluer, t'excuser, demander la page, demander de répéter, demander comment on dit un mot en allemand, remercier.", corrige: "**Modèle :**\n\n- *Schüler : Guten Morgen, Frau Weber! Entschuldigung, es tut mir leid!*\n- *Frau Weber : Guten Morgen, Hugo! Kein Problem. Setz dich!*\n- *Schüler : Auf welcher Seite sind wir, bitte?*\n- *Frau Weber : Auf Seite 12. Lies die Übung 3!*\n- *Schüler : Können Sie bitte wiederholen? Ich habe nicht verstanden.*\n- *Frau Weber : Auf Seite 12, Übung 3.*\n- *Schüler : Danke! Was heißt „exercice“ auf Deutsch?*\n- *Frau Weber : Die Übung!*\n\nPoints à vérifier :\n- **Guten Morgen** pour saluer le matin ;\n- **Entschuldigung** ou **Tut mir leid** pour s'excuser ;\n- on vouvoie la professeure : *Können **Sie**…?* ;\n- *Was heißt … auf Deutsch?* pour demander un mot ;\n- *Danke!* pour remercier." },
      ],
    },
    {
      id: "se-presenter",
      titre: "Se présenter : das bin ich !",
      theme: "Personnes et personnages",
      cours: `
## Les questions et les réponses
| Question | Réponse |
|---|---|
| Wie heißt du? (Comment t'appelles-tu ?) | Ich heiße Inès. / Mein Name ist Inès. |
| Wie alt bist du? (Quel âge as-tu ?) | Ich bin elf (Jahre alt). |
| Wo wohnst du? (Où habites-tu ?) | Ich wohne in Nantes. |
| Woher kommst du? (D'où viens-tu ?) | Ich komme aus Frankreich. |
| Welche Sprachen sprichst du? | Ich spreche Französisch, Englisch und ein bisschen Deutsch. |

>! **Attention** : pour l'âge, l'allemand utilise le verbe **sein** (être), comme l'anglais : *Ich **bin** elf* = *I **am** eleven*. Jamais « Ich habe elf Jahre » !

Les nombres de l'âge : *zehn* (10), *elf* (11), *zwölf* (12), *dreizehn* (13).

## Les pays et les nationalités
| Pays | Un garçon… | Une fille… |
|---|---|---|
| Frankreich (la France) | Ich bin Franzose. | Ich bin Französin. |
| Deutschland (l'Allemagne) | Ich bin Deutscher. | Ich bin Deutsche. |
| Österreich (l'Autriche) | Ich bin Österreicher. | Ich bin Österreicherin. |
| die Schweiz (la Suisse) | Ich bin Schweizer. | Ich bin Schweizerin. |

- Pas d'article devant la plupart des pays : *Ich komme aus Deutschland, aus Österreich*.
- Mais **die Schweiz** a un article : *Ich komme aus **der** Schweiz.* *Ich wohne in **der** Schweiz.*
- Deux grandes régions d'Allemagne : *Bayern* (la Bavière, capitale München) et *Baden-Württemberg* (capitale Stuttgart).

## Le verbe sein (être)
| Personne | sein |
|---|---|
| ich (je) | bin |
| du (tu) | bist |
| er / sie / es (il / elle / « il » neutre) | ist |
| wir (nous) | sind |
| ihr (vous, plusieurs copains) | seid |
| sie (ils, elles) / Sie (vous de politesse) | sind |

**du** = tu (copains, famille) ; **Sie** avec une majuscule = vous de politesse (adultes, professeurs).

## Présenter quelqu'un
- *Das ist Mia.* → Voici Mia. / C'est Mia. – *Das sind Tom und Ben.* → Voici Tom et Ben.
- *Sie heißt Mia, sie ist zwölf.* → Elle s'appelle Mia, elle a douze ans.
- *Er kommt aus Wien.* → Il vient de Vienne.
- Et pour finir en beauté : ***Das bin ich!*** → C'est moi !

> **À retenir** : *Ich heiße… – Ich bin … (Jahre alt) – Ich wohne in… – Ich komme aus…* Pour l'âge : **sein**. Nationalités : *Deutscher* (garçon) / *Deutsche* (fille), *Franzose / Französin*. *aus **der** Schweiz*. Le verbe **sein** : bin, bist, ist, sind, seid, sind.

### Erreurs fréquentes
- *Ich habe elf Jahre* → **Ich bin elf (Jahre alt).**
- *Ich bin ein Franzose* : pas d'article devant la nationalité → **Ich bin Franzose.**
- *Ich wohne à Paris* → **Ich wohne in Paris.**
`,
      textes: {
        deniz: `**Ein Video für die Klasse 6c**

*Hallo! Ich heiße Deniz Yılmaz und ich bin elf Jahre alt. Ich wohne in Fulda, das ist eine Stadt in Hessen. Meine Eltern kommen aus der Türkei, aber ich bin Deutscher. Ich spreche Deutsch, Türkisch und ein bisschen Englisch. Und das ist meine Freundin Mia. Sie ist zwölf und kommt aus Österreich, aus Graz. Jetzt wohnt sie auch in Fulda. Und wer bist du?*

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "On te demande : *Wie alt bist du?* Que veut-on savoir ?", choix: ["ton âge", "ton nom", "ta ville", "ta nationalité"], reponse: 0, explication: "*Wie alt bist du?* = Quel âge as-tu ? (*alt* = vieux, âgé). Réponse : *Ich bin elf.* Ton nom : *Wie heißt du?* ; ta ville : *Wo wohnst du?*" },
        { type: "saisie", question: "Complète avec le verbe *sein* : *Ich ___ elf Jahre alt.* (écris seulement le mot qui manque)", reponses: ["bin"], explication: "*Ich **bin** elf Jahre alt.* Pour l'âge, on emploie **sein** (être), comme en anglais : *I am eleven*." },
        { type: "qcm", question: "Lena est une fille allemande. Elle dit : *Ich bin ___.*", choix: ["Deutscher", "Deutschland", "Deutsche", "Deutsch"], reponse: 2, explication: "Une fille dit **Ich bin Deutsche** ; un garçon dit *Ich bin Deutscher*. *Deutschland* = l'Allemagne (le pays) ; *Deutsch* = la langue allemande." },
        { type: "saisie", question: "Traduis en allemand : « Je viens de Suisse. »", reponses: ["Ich komme aus der Schweiz."], explication: "**Ich komme aus der Schweiz.** La Suisse a un article : *die Schweiz* → *aus **der** Schweiz*. Les autres pays n'en ont pas en général : *aus Frankreich*, *aus Österreich*." },
        { type: "vf", question: "Pour dire « J'ai douze ans », on dit : *Ich habe zwölf Jahre.*", reponse: false, explication: "On dit **Ich bin zwölf (Jahre alt).** avec le verbe *sein* (être), jamais avec *haben* (avoir)." },
        { type: "qcm", texte: "deniz", question: "Où Deniz habite-t-il ?", choix: ["en Turquie", "à Graz, en Autriche", "à Fulda, en Hesse", "à Berlin"], reponse: 2, explication: "*Ich wohne in Fulda, das ist eine Stadt in Hessen.* Ce sont ses **parents** qui viennent de Turquie ; Graz est la ville d'origine de Mia." },
        { type: "vf", texte: "deniz", question: "Mia a onze ans, comme Deniz.", reponse: false, explication: "*Sie ist **zwölf***. Mia a douze ans ; c'est Deniz qui a onze ans (*elf*)." },
        { type: "saisie", texte: "deniz", question: "Quelle langue Deniz parle-t-il seulement un peu ? Réponds par le mot allemand du texte.", reponses: ["Englisch", "ein bisschen Englisch"], explication: "*Ich spreche Deutsch, Türkisch und **ein bisschen Englisch**.* *ein bisschen* = un peu. Les noms de langues prennent une majuscule : *Deutsch, Englisch, Französisch*." },
        { type: "saisie", question: "Complète avec le verbe *sein* : *Ihr ___ in der Klasse 6b.* (écris seulement le mot qui manque)", reponses: ["seid"], explication: "*ihr* (vous, plusieurs copains) → **seid**. Ne confonds pas avec *sie sind* (ils sont)." },
        { type: "redaction", question: "Enregistre (ou écris) une petite vidéo de présentation, comme Deniz : 7 à 8 phrases en allemand. Présente-toi (nom, âge, ville, pays, langues), puis présente un ou une camarade (nom, âge, ville). Termine par une question.", corrige: "**Modèle :**\n\n*Hallo! Ich heiße Hugo und ich bin elf Jahre alt. Ich wohne in Lyon, in Frankreich. Ich bin Franzose. Ich spreche Französisch, Englisch und ein bisschen Deutsch. Das ist mein Freund Samuel. Er ist zwölf und wohnt auch in Lyon. Und wie heißt du?*\n\nPoints à vérifier :\n- *Ich heiße… / Ich bin … Jahre alt / Ich wohne in…* ;\n- âge avec **sein** ;\n- nationalité sans article : *Ich bin Franzose / Französin* ;\n- 3e personne : *er / sie **ist**, er / sie **wohnt*** ;\n- majuscules aux noms et aux langues (*Englisch, Deutsch*) ;\n- question finale : mot interrogatif + verbe (*Wie heißt du?*)." },
      ],
    },
    {
      id: "noms-et-articles",
      titre: "Der, die, das : le nom, l'article et le pluriel",
      theme: "Outils de la langue",
      cours: `
## Une majuscule à tous les noms
En allemand, **tous les noms** prennent une majuscule, même au milieu de la phrase : *Das ist mein **Buch**.* C'est très pratique : tu repères les noms tout de suite dans un texte !

## Trois genres : der, die, das
L'allemand a **trois** genres : le **masculin** (*der*), le **féminin** (*die*) et le **neutre** (*das*). Le genre allemand ne correspond pas toujours au français :
- *der Mond* (la lune), *die Sonne* (le soleil), *das Mädchen* (la fille) ;
- *der Tisch* (la table), *die Tür* (la porte), *das Fenster* (la fenêtre).

>! **Méthode** : apprends toujours un nom **avec son article**, comme un seul mot : « derHund, dieKatze, dasPferd ». Beaucoup d'élèves utilisent trois couleurs : bleu pour *der*, rouge pour *die*, vert pour *das*.

Quelques indices :
- les noms en **-chen** sont neutres : *das Mädchen*, *das Brötchen* (le petit pain) ;
- les noms de femmes en **-in** sont féminins : *die Lehrerin* ;
- beaucoup de noms en **-e** sont féminins : *die Schule*, *die Katze*, *die Lampe*.

## L'article indéfini : ein, eine
| | masculin | féminin | neutre |
|---|---|---|---|
| défini (le, la) | der Hund | die Katze | das Pferd |
| indéfini (un, une) | ein Hund | eine Katze | ein Pferd |
| négatif (pas de) | kein Hund | keine Katze | kein Pferd |

Après *Ich habe…* (j'ai), le masculin change : ***einen** Hund*, ***keinen** Hund*, ***den** Hund*. Le féminin et le neutre ne bougent pas : *Ich habe eine Katze und ein Pferd.*

## Le pluriel
Au pluriel, l'article défini est **toujours *die*** : *die Hunde, die Katzen, die Pferde*. Au pluriel, il n'y a pas d'article indéfini : *Ich habe Katzen* (comme en anglais : *I have cats*).
Les pluriels les plus fréquents :
| Singulier | Pluriel | Marque |
|---|---|---|
| der Hund | die Hunde | -e |
| die Katze | die Katzen | -n / -en |
| das Buch | die Bücher | Umlaut + -er |
| das Auto | die Autos | -s |
| der Lehrer | die Lehrer | rien ne change |
| der Apfel | die Äpfel | seulement l'Umlaut |

## Les métiers au féminin : -in
| Masculin | Féminin | Sens |
|---|---|---|
| der Lehrer | die Lehrerin | le professeur / la professeure |
| der Arzt | die Ärztin | le médecin |
| der Polizist | die Polizistin | le policier / la policière |
| der Verkäufer | die Verkäuferin | le vendeur / la vendeuse |
| der Koch | die Köchin | le cuisinier / la cuisinière |
| der Bäcker | die Bäckerin | le boulanger / la boulangère |

Exemple : *Meine Deutschlehrerin heißt Frau Lang.*

## Les mots composés
L'allemand colle les mots ensemble. Le **dernier mot** donne le **genre** et le sens principal ; le premier précise, comme en anglais :
- *der Schnee* (la neige) + *der Mann* (l'homme) = ***der** Schneemann* (*snowman*, le bonhomme de neige) ;
- *das Haus* + *die Tür* = ***die** Haustür* (la porte de la maison) ;
- *der Apfel* + *der Saft* (le jus) = ***der** Apfelsaft*.

> **À retenir** : majuscule à tous les noms. *der* (masc.), *die* (fém.), *das* (neutre), *die* au pluriel. *ein / eine*, *kein / keine*. Après *Ich habe* : *einen*, *keinen* au masculin. Métier au féminin : **-in**. Mot composé : le genre est celui du **dernier** mot.

### Erreurs fréquentes
- Écrire *mein hund* : il faut une majuscule → *mein **H**und*.
- *die Mädchen* pour « la fille » : c'est ***das** Mädchen* (neutre, en *-chen*) ; *die Mädchen* = les filles.
- *eine Hund* : *Hund* est masculin → *ein Hund*.
`,
      exercices: [
        { type: "qcm", question: "Quel est l'article de *Brötchen* (le petit pain) ?", choix: ["der", "die", "das", "den"], reponse: 2, explication: "***das** Brötchen* : tous les noms en **-chen** sont neutres. C'est vrai même quand le mot désigne une fille : ***das** Mädchen*." },
        { type: "saisie", question: "Quel est l'article défini de *Lehrerin* (la professeure) ? (écris seulement l'article)", reponses: ["die"], explication: "***die** Lehrerin* : les noms de femmes en **-in** sont féminins. Le masculin est *der Lehrer*." },
        { type: "vf", question: "*Pferd* (le cheval) est neutre : *das Pferd*. Pourtant, on dit *die Pferde* au pluriel.", reponse: true, explication: "Oui : au pluriel, l'article défini est **toujours *die***, quel que soit le genre : *der Hund → die Hunde*, *die Katze → die Katzen*, *das Pferd → die Pferde*." },
        { type: "qcm", question: "Quelle phrase est écrite correctement ?", choix: ["Das ist mein buch.", "das Ist mein Buch.", "Das ist Mein buch.", "Das ist mein Buch."], reponse: 3, explication: "**Das ist mein Buch.** Majuscule au début de la phrase et au **nom** *Buch* ; pas de majuscule au verbe *ist* ni au possessif *mein*." },
        { type: "saisie", question: "Écris le pluriel de *das Buch*, avec l'article.", reponses: ["die Bücher"], explication: "*das Buch* → ***die Bücher*** : Umlaut sur le u et terminaison **-er**. Article *die* au pluriel." },
        { type: "qcm", question: "Pourquoi dit-on ***der** Schneemann* (le bonhomme de neige) ?", choix: ["Parce que les noms composés sont tous masculins", "Parce que le dernier mot, *der Mann*, est masculin", "Parce que *Schnee* est féminin", "Parce que le mot est long"], reponse: 1, explication: "Dans un mot composé, le genre est celui du **dernier mot** : *der Mann* → ***der** Schneemann*. Compare : *die Tür* → ***die** Haustür*." },
        { type: "saisie", question: "Le médecin se dit *der Arzt*. Comment dit-on « la femme médecin » ? (avec l'article)", reponses: ["die Ärztin"], explication: "*der Arzt* → ***die Ärztin*** : on ajoute **-in**, et ici on ajoute aussi un Umlaut (*a → ä*)." },
        { type: "qcm", question: "Comment dit-on « Je n'ai pas de chat » ? (*die Katze*)", choix: ["Ich habe nicht Katze.", "Ich habe kein Katze.", "Ich habe keine Katze.", "Ich habe nicht eine Katze."], reponse: 2, explication: "Devant un nom, on nie avec **kein** : *keine* pour un nom féminin (*die Katze*). → ***Ich habe keine Katze.***" },
        { type: "saisie", question: "Complète avec *ein* ou *eine* : *Das ist ___ Lampe.* (*die Lampe*) (écris seulement le mot qui manque)", reponses: ["eine"], explication: "*Lampe* est féminin (*die Lampe*) → ***eine** Lampe*. On met *ein* devant un nom masculin ou neutre." },
        { type: "redaction", question: "Fais l'inventaire de ta trousse et de ton bureau en 6 phrases en allemand. Utilise *Das ist ein / eine…*, *Ich habe einen / eine / ein…* et *Ich habe kein / keine / keinen…*. Écris au moins un pluriel.", corrige: "**Modèle :**\n\n*Das ist mein Mäppchen. Ich habe einen Kuli und einen Bleistift. Ich habe eine Schere und ein Lineal. Ich habe keinen Radiergummi! Auf meinem Tisch sind zwei Bücher und drei Hefte. Das ist eine Lampe.*\n\nPoints à vérifier :\n- majuscule à tous les noms ;\n- *der Kuli, der Bleistift, der Radiergummi* → après *Ich habe* : ***einen**, **keinen*** ;\n- *die Schere, die Lampe* → *eine* ; *das Lineal, das Heft* → *ein* ;\n- pluriels : *das Buch → die Bücher*, *das Heft → die Hefte*." },
      ],
    },
    {
      id: "ma-famille",
      titre: "Ma famille et mes animaux : haben et les possessifs",
      theme: "Personnes et personnages",
      cours: `
## La famille
| Allemand | Français |
|---|---|
| der Vater / die Mutter | le père / la mère |
| die Eltern | les parents |
| der Bruder / die Schwester | le frère / la sœur |
| die Geschwister | les frères et sœurs |
| der Sohn / die Tochter | le fils / la fille (de quelqu'un) |
| der Opa / die Oma | le papi / la mamie |
| der Onkel / die Tante | l'oncle / la tante |
| der Cousin / die Cousine | le cousin / la cousine |
| der Stiefvater / die Stiefmutter | le beau-père / la belle-mère |
| der Halbbruder / die Halbschwester | le demi-frère / la demi-sœur |

Pense à l'anglais : *Vater / father*, *Mutter / mother*, *Bruder / brother*, *Tochter / daughter*.
- *Ich habe keine Geschwister, ich bin Einzelkind.* → Je n'ai pas de frères et sœurs, je suis enfant unique.
- *Ich wohne mit meiner Mutter und meinem Opa.* → J'habite avec ma mère et mon papi. (Retiens la phrase telle quelle.)

## Le verbe haben (avoir)
| Personne | haben |
|---|---|
| ich | habe |
| du | hast |
| er / sie / es | hat |
| wir | haben |
| ihr | habt |
| sie / Sie | haben |

*Ich habe **einen** Bruder* (der Bruder) – *Ich habe **eine** Schwester* (die Schwester) – *Ich habe **ein** Pferd* (das Pferd) – *Ich habe **keinen** Hund.*

## Les possessifs : mein, dein, sein, ihr
| | devant un nom masc. ou neutre | devant un nom fém. ou un pluriel |
|---|---|---|
| mon, ma, mes | mein Bruder | meine Schwester, meine Eltern |
| ton, ta, tes | dein Bruder | deine Schwester |
| son, sa, ses (à **lui**) | sein Bruder | seine Schwester |
| son, sa, ses (à **elle**) | ihr Bruder | ihre Schwester |

>! **Comme en anglais** : *sein* = *his*, *ihr* = *her*. *Paul und **sein** Hund* (*Paul and his dog*) ; *Anna und **ihr** Hund* (*Anna and her dog*). En français, on dit « son chien » dans les deux cas !

## « Le frère d'Alma » : Almas Bruder
On peut mettre le **prénom + s** devant le nom, comme en anglais, mais **sans apostrophe** : *Almas Bruder* (*Alma's brother*) = le frère d'Alma ; *Pauls Katze* = le chat de Paul.

## Les animaux
| Allemand | Français | Il fait… |
|---|---|---|
| der Hund | le chien | wau wau |
| die Katze | le chat | miau |
| die Maus | la souris | piep |
| das Pferd | le cheval | |
| der Esel | l'âne | iah |
| der Hahn | le coq | kikeriki |
| der Hamster | le hamster | |
| das Kaninchen | le lapin | |
| der Vogel / der Fisch | l'oiseau / le poisson | |

Un animal de compagnie se dit **das Haustier**. *Hast du ein Haustier? – Ja, ich habe einen Hamster. Er heißt Krümel.*

## Décrire une photo de famille
*Links* (à gauche), *rechts* (à droite), *vorn* (devant), *hinten* (derrière), *in der Mitte* (au milieu) : *Vorn sitzt meine Schwester, hinten steht mein Vater.*

> **À retenir** : *haben* : habe, hast, hat, haben, habt, haben. *Ich habe **einen** Bruder / **eine** Schwester / **keine** Geschwister.* Possessifs : *mein, dein, sein* (à lui), *ihr* (à elle) + **-e** devant un nom féminin ou pluriel. *Almas Bruder* = le frère d'Alma (sans apostrophe).

### Erreurs fréquentes
- *Ich habe ein Bruder* → *Ich habe **einen** Bruder* (masculin après *haben*).
- *Anna und sein Hund* → *Anna und **ihr** Hund* (le chien est à **elle**).
- *Alma's Bruder* : en allemand, pas d'apostrophe → *Almas Bruder*.
`,
      textes: {
        foto: `**Das Familienfoto**

*Das ist ein Foto von meiner Familie. Ich heiße Jonas und bin elf. Vorn sitzen meine Schwester Lina und unser Hund Bello. Lina ist sieben. Hinten stehen meine Eltern. Mein Vater heißt Tobias, er ist Koch. Meine Mutter heißt Sarah, sie ist Lehrerin. Rechts steht meine Oma. Sie hat zwei Katzen. Ich habe keinen Bruder, aber ich habe einen Cousin: Ben. Bens Hamster heißt Krümel.*

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Que veut dire *die Eltern* ?", choix: ["les grands-parents", "les frères et sœurs", "les cousins", "les parents"], reponse: 3, explication: "**die Eltern** = les parents (le père et la mère). Les frères et sœurs = *die Geschwister* ; les grands-parents = *die Großeltern*." },
        { type: "saisie", question: "Complète avec le verbe *haben* : *Du ___ eine Katze.* (écris seulement le mot qui manque)", reponses: ["hast"], explication: "*du* → **hast** : *Du hast eine Katze.* Attention, ce n'est pas *habst* !" },
        { type: "qcm", question: "Anna a un chien. Comment dis-tu « C'est son chien » (à Anna) ?", choix: ["Das ist sein Hund.", "Das ist ihre Hund.", "Das ist seine Hund.", "Das ist ihr Hund."], reponse: 3, explication: "Le chien est à une **fille** → **ihr** (comme *her* en anglais). *Hund* est masculin → pas de *-e* : ***ihr** Hund*. Pour un garçon : *sein Hund*." },
        { type: "vf", question: "*Pauls Bruder* veut dire « le frère de Paul ».", reponse: true, explication: "Oui : prénom + **s**, sans apostrophe : *Pauls Bruder* = *Paul's brother* = le frère de Paul." },
        { type: "saisie", question: "Traduis en allemand : « J'ai un frère. »", reponses: ["Ich habe einen Bruder."], explication: "***Ich habe einen Bruder.*** *der Bruder* est masculin : après *haben*, *ein* devient **einen**." },
        { type: "qcm", texte: "foto", question: "Quel est le métier de la mère de Jonas ?", choix: ["Elle est professeure.", "Elle est cuisinière.", "Elle est médecin.", "Elle est vendeuse."], reponse: 0, explication: "*Meine Mutter heißt Sarah, sie ist **Lehrerin**.* *die Lehrerin* = la professeure. C'est le père, Tobias, qui est cuisinier (*Koch*)." },
        { type: "vf", texte: "foto", question: "Jonas a un frère et une sœur.", reponse: false, explication: "*Ich habe **keinen** Bruder* : Jonas n'a pas de frère. Il a une sœur, Lina, et un cousin, Ben." },
        { type: "saisie", texte: "foto", question: "Comment s'appelle le hamster de Ben ?", reponses: ["Krümel"], explication: "*Bens Hamster heißt **Krümel**.* *Bens Hamster* = le hamster de Ben (prénom + s, sans apostrophe)." },
        { type: "qcm", question: "En Allemagne, quel animal fait « kikeriki » ?", choix: ["le chien", "le chat", "l'âne", "le coq"], reponse: 3, explication: "Le coq allemand (*der Hahn*) chante **kikeriki** (en France : cocorico). Le chien fait *wau wau*, le chat *miau*, l'âne *iah*." },
        { type: "redaction", question: "Décris en allemand une photo de ta famille (vraie ou imaginaire) en 7 à 8 phrases : qui est sur la photo, où chacun se trouve (*vorn, hinten, links, rechts*), l'âge ou le métier de deux personnes, et les animaux.", corrige: "**Modèle :**\n\n*Das ist meine Familie. Links steht mein Vater, er heißt Karim. Er ist Polizist. Rechts steht meine Mutter, sie ist Verkäuferin. In der Mitte sitzt meine Schwester Nour. Sie ist neun. Vorn sitzt unsere Katze Mimi. Ich habe keinen Bruder, aber ich habe zwei Cousinen. Das bin ich, hinten!*\n\nPoints à vérifier :\n- *mein* (masc.) / *meine* (fém.) ;\n- *er ist / sie ist* + métier **sans article** (*Er ist Polizist*) ;\n- *haben* + **einen / keinen** au masculin ;\n- verbe en 2e position : *Links **steht** mein Vater* ;\n- majuscule à tous les noms." },
      ],
    },
    {
      id: "nombres-heure-date",
      titre: "Compter, dire l'heure et la date",
      theme: "Outils de la langue",
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

Attention : 16 = *sech**zehn*** (le *s* de *sechs* disparaît) et 17 = *sieb**zehn*** (on enlève *-en*).

## Les dizaines et les nombres jusqu'à 100
*zwanzig* (20), *dreißig* (30, avec **ß** !), *vierzig* (40), *fünfzig* (50), *sechzig* (60), *siebzig* (70), *achtzig* (80), *neunzig* (90), *hundert* (100).

>! **Le nombre à l'envers** : de 21 à 99, on dit d'abord l'**unité**, puis ***und***, puis la **dizaine**, et on écrit tout en **un seul mot** :
>! 21 = *einundzwanzig* (un-et-vingt) – 34 = *vierunddreißig* – 58 = *achtundfünfzig* – 99 = *neunundneunzig*.
>! Attention : *eins* perd son *s* : ***ein**undzwanzig*.

Au téléphone, on donne les chiffres un par un ou deux par deux : *null – sechs – zwölf – vierunddreißig…* Les prix : *Das kostet 3 Euro.* (3 €) – *zwei Euro fünfzig* (2,50 €).

## L'heure
- *Wie spät ist es?* ou *Wie viel Uhr ist es?* → Quelle heure est-il ?
- **L'heure officielle** (horaires, gares) : *Es ist 13:15 Uhr* → « dreizehn Uhr fünfzehn ».
- **L'heure de tous les jours** :
| Heure | On dit |
|---|---|
| 3 h 00 | Es ist drei (Uhr). |
| 3 h 15 | Es ist Viertel nach drei. |
| 3 h 30 | Es ist **halb vier**. |
| 3 h 45 | Es ist Viertel vor vier. |

>! **Le piège de *halb*** : *halb vier* veut dire « la moitié **vers** quatre heures », donc **3 h 30** ! On pense toujours à l'heure **qui arrive**.

Pour un rendez-vous : *Um wie viel Uhr?* → ***Um** acht Uhr.* (À huit heures.)

## Les jours et les mois
- Jours : *Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag*. *Am Mittwoch spiele ich Handball.* (mercredi)
- Mois : *Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember*.
- Tous les jours et tous les mois sont **masculins** : *der Montag, der Mai*.

## La date
Pour la date, on emploie les nombres **ordinaux** (premier, deuxième…) : *der erste* (1er), *der zweite* (2e), *der dritte* (3e), *der vierte*, … *der siebte* (7e), *der achte* (8e), … *der zwanzigste* (20e).
- À l'écrit, un **point** après le nombre : *der 3. Mai* (lu : « der dritte Mai »).
- *Heute ist der 3. Mai.* → Aujourd'hui, c'est le 3 mai.
- *Ich habe am 8. März Geburtstag.* (lu : « am achten März ») → Mon anniversaire est le 8 mars.
- *Alles Gute zum Geburtstag!* → Joyeux anniversaire !
- Les années : *1989* = « neunzehnhundertneunundachtzig » ; *2026* = « zweitausendsechsundzwanzig ».

> **À retenir** : de 21 à 99, l'**unité d'abord** : *einundzwanzig*. *dreißig* avec ß. *halb vier* = **3 h 30**. *Viertel nach* (et quart), *Viertel vor* (moins le quart). Date : *der 3. Mai* (« der dritte »), *am 8. März*.

### Erreurs fréquentes
- *zwanzigeins* pour 21 → ***einundzwanzig***.
- Croire que *halb acht* = 8 h 30 : c'est **7 h 30**.
- *sechszehn* → ***sechzehn***.
`,
      exercices: [
        { type: "saisie", question: "Écris en lettres, en allemand : **16**.", reponses: ["sechzehn"], explication: "16 = ***sechzehn*** : le *s* de *sechs* disparaît. Même piège avec 17 = *siebzehn*." },
        { type: "qcm", question: "Comment dit-on **37** en allemand ?", choix: ["dreißigsieben", "siebenunddreißig", "siebendreißig", "dreiundsiebzig"], reponse: 1, explication: "On dit l'unité d'abord, puis *und*, puis la dizaine : ***siebenunddreißig*** (sept-et-trente). *dreiundsiebzig* = 73." },
        { type: "qcm", question: "*Es ist halb acht.* Quelle heure est-il ?", choix: ["8 h 30", "8 h 15", "7 h 30", "7 h 45"], reponse: 2, explication: "*halb acht* = la moitié vers huit heures = **7 h 30**. On pense à l'heure qui arrive." },
        { type: "vf", question: "*Viertel nach zehn* veut dire 10 h 15.", reponse: true, explication: "*Viertel nach zehn* = le quart après dix heures = **10 h 15**. *Viertel vor zehn* = 9 h 45." },
        { type: "saisie", question: "Écris en lettres, en allemand : **21**.", reponses: ["einundzwanzig"], explication: "21 = ***einundzwanzig*** : un seul mot, et *eins* perd son *s*." },
        { type: "qcm", question: "*Am Mittwoch spiele ich Handball.* Quel jour Max joue-t-il au handball ?", choix: ["lundi", "mardi", "jeudi", "mercredi"], reponse: 3, explication: "***Mittwoch*** = mercredi (le « milieu de la semaine »). Lundi = *Montag*, mardi = *Dienstag*, jeudi = *Donnerstag*." },
        { type: "saisie", question: "Il est 9 h 45. Complète la réponse familière : *Es ist Viertel vor ___.* (écris l'heure en lettres)", reponses: ["zehn"], explication: "9 h 45 = dix heures moins le quart = *Viertel vor **zehn***." },
        { type: "qcm", question: "Comment lit-on la date *der 3. Oktober* ?", choix: ["der drei Oktober", "der dritte Oktober", "der dreite Oktober", "der dreißig Oktober"], reponse: 1, explication: "Le point indique un **ordinal** : *der 3.* = ***der dritte*** (le troisième). Attention : 1er = *der erste*, 3e = *der dritte*, 7e = *der siebte* sont irréguliers." },
        { type: "saisie", question: "Traduis en allemand : « Mon anniversaire est le 8 mars. » (Commence par *Ich habe…* ou par *Mein Geburtstag…*)", reponses: ["Ich habe am 8. März Geburtstag.", "Ich habe am achten März Geburtstag.", "Mein Geburtstag ist am 8. März.", "Mein Geburtstag ist am achten März."], explication: "***Ich habe am 8. März Geburtstag.*** (on lit « am achten März ») ou *Mein Geburtstag ist am 8. März.* N'oublie pas le **point** après 8 : il montre que c'est un ordinal." },
        { type: "redaction", question: "Écris un message à ton correspondant (6 phrases en allemand) : donne ton numéro de téléphone (chiffres en lettres), la date de ton anniversaire, et l'heure de trois activités de ta semaine (avec *um* et un jour).", corrige: "**Modèle :**\n\n*Hallo Felix! Meine Telefonnummer ist: null – sechs – zwölf – vierunddreißig – sechsundfünfzig – achtundsiebzig. Ich habe am 14. Juli Geburtstag. Am Montag gehe ich um halb acht in die Schule. Am Mittwoch spiele ich um zwei Uhr Fußball. Am Samstag gehe ich um Viertel nach drei ins Schwimmbad. Tschüss!*\n\nPoints à vérifier :\n- nombres de 21 à 99 **à l'envers** et en un seul mot ;\n- date avec **am** + ordinal (*am 14.* = « am vierzehnten ») ;\n- heure avec **um** ; *halb acht* = 7 h 30 ;\n- après *Am Montag*, le verbe vient **avant** le sujet : *Am Montag **gehe ich**…*" },
      ],
    },
    {
      id: "conjugaison-present",
      titre: "Conjuguer au présent",
      theme: "Outils de la langue",
      cours: `
## Les verbes réguliers
L'infinitif finit presque toujours par **-en** : *spielen* (jouer), *wohnen* (habiter), *machen* (faire), *kommen* (venir). On enlève **-en** pour trouver le **radical** (*spiel-*), puis on ajoute les terminaisons :
| Personne | Terminaison | spielen |
|---|---|---|
| ich | -e | spiele |
| du | -st | spielst |
| er / sie / es / man | -t | spielt |
| wir | -en | spielen |
| ihr | -t | spielt |
| sie / Sie | -en | spielen |

>! **Comme en anglais** : à la 3e personne, il y a une marque : *he play**s*** / *er spiel**t***. Mais l'allemand a une terminaison à **chaque** personne !

## Deux petites règles
- Radical en **-t** ou **-d** : on ajoute un **e** pour pouvoir prononcer : *arbeiten* (travailler) → *du arbeit**e**st*, *er arbeit**e**t*.
- Radical en **-s, -ß, -z** : à *du*, on ajoute seulement **-t** : *heißen* → *du heißt* ; *tanzen* → *du tanzt*.

## Les deux verbes les plus importants
| | sein (être) | haben (avoir) |
|---|---|---|
| ich | bin | habe |
| du | bist | hast |
| er / sie / es | ist | hat |
| wir | sind | haben |
| ihr | seid | habt |
| sie / Sie | sind | haben |

## Les verbes forts : la voyelle change
Certains verbes changent de voyelle, mais **seulement avec du et er / sie / es** :
| Changement | Infinitif | du | er / sie / es |
|---|---|---|---|
| a → ä | fahren (aller en véhicule) | fährst | fährt |
| a → ä | schlafen (dormir) | schläfst | schläft |
| e → i | essen (manger) | isst | isst |
| e → i | sprechen (parler) | sprichst | spricht |
| e → i | nehmen (prendre) | nimmst | nimmt |
| e → ie | sehen (voir) | siehst | sieht |
| e → ie | lesen (lire) | liest | liest |

Les autres personnes restent régulières : *ich fahre, wir fahren, ihr fahrt*.

## Le pronom man
**man** = « on ». Le verbe se conjugue comme avec *er* : *Hier **spricht man** Deutsch.* (Ici, on parle allemand.)

## Le présent pour parler du futur
Avec un mot de temps, le présent suffit pour dire ce qu'on va faire : *Morgen **fahre** ich nach Bremen.* (Demain, je vais à Brême.) – *Um vier **gehe** ich ins Kino.*

> **À retenir** : terminaisons **-e, -st, -t, -en, -t, -en**. *du arbeitest*, *du heißt*. Verbes forts : la voyelle change **seulement** à *du* et *er/sie/es* : *fährt, schläft, isst, spricht, nimmt, sieht, liest*. *man* + verbe en **-t**.

### Erreurs fréquentes
- *er spielen* → ***er spielt***.
- *er fahrt* → ***er fährt*** ; *er seht* → ***er sieht***.
- *ich fähre* → ***ich fahre*** (pas de changement à *ich*).
`,
      exercices: [
        { type: "saisie", question: "Conjugue *wohnen* (habiter) : *Wo ___ du?* (écris seulement le verbe)", reponses: ["wohnst"], explication: "*du* → terminaison **-st** : *Wo **wohnst** du?* (Où habites-tu ?)" },
        { type: "qcm", question: "Complète : *Er ___ mit dem Bus.* (*fahren*)", choix: ["fahrt", "fährt", "fahren", "fährst"], reponse: 1, explication: "*fahren* est un verbe fort : **a → ä** à *du* et à *er* : *er **fährt***. *du fährst* ; *ihr fahrt* (sans Umlaut)." },
        { type: "saisie", question: "Conjugue *spielen* : *Ihr ___ Karten.* (écris seulement le verbe)", reponses: ["spielt"], explication: "*ihr* → **-t** : *Ihr **spielt** Karten.* (Vous jouez aux cartes.)" },
        { type: "vf", question: "Le verbe *sehen* (voir) fait *er seht* au présent.", reponse: false, explication: "*sehen* est un verbe fort : **e → ie** → ***er sieht***, *du siehst*." },
        { type: "qcm", question: "Complète : *Du ___ viel.* (*arbeiten*, travailler)", choix: ["arbeitst", "arbeitet", "arbeitest", "arbeiten"], reponse: 2, explication: "Le radical finit par **-t** (*arbeit-*) : on ajoute un **e** → *du **arbeitest***, *er arbeitet*." },
        { type: "saisie", question: "Conjugue *essen* (manger) : *Lisa ___ einen Apfel.* (écris seulement le verbe)", reponses: ["isst"], explication: "*essen* : **e → i** → *sie **isst*** (avec deux *s*). *du isst* aussi." },
        { type: "qcm", question: "Complète : *Was ___ du?* (*lesen*, lire)", choix: ["lest", "liest", "lesst", "lesen"], reponse: 1, explication: "*lesen* : **e → ie** → *du **liest***, *er liest*." },
        { type: "saisie", question: "Traduis en allemand : « Nous jouons au foot. »", reponses: ["Wir spielen Fußball."], explication: "***Wir spielen Fußball.*** *wir* → **-en**. Pas d'article devant le sport : *Fußball spielen*." },
        { type: "qcm", question: "Que veut dire *Hier spricht man Deutsch.* ?", choix: ["Ici, on parle allemand.", "Ici, l'homme parle allemand.", "Ici, nous parlons allemand.", "Ici, je parle allemand."], reponse: 0, explication: "**man** = « on » (ne le confonds pas avec *der Mann*, l'homme). Le verbe est à la 3e personne : *man **spricht***." },
        { type: "redaction", question: "Le samedi chez toi : écris 6 phrases en allemand pour dire ce que fait chaque personne de ta famille (ou d'une famille imaginaire). Utilise au moins **trois** verbes forts différents (*fahren, schlafen, essen, lesen, sehen, sprechen*) et des sujets variés (*ich, du, er, sie, wir*).", corrige: "**Modèle :**\n\n*Am Samstag schläft mein Bruder lange. Meine Mutter liest ein Buch. Mein Vater fährt Rad. Ich spiele mit meinem Hund. Am Abend essen wir eine Pizza. Und du, was machst du am Samstag?*\n\nPoints à vérifier :\n- verbes forts à la 3e personne : *schläft* (a → ä), *liest* (e → ie), *fährt* (a → ä) ;\n- terminaisons : *ich spiel**e***, *wir ess**en***, *du mach**st*** ;\n- après *Am Samstag* ou *Am Abend*, le verbe passe **avant** le sujet." },
      ],
    },
    {
      id: "ordre-des-mots",
      titre: "La phrase : le verbe en 2e position, les questions et la négation",
      theme: "Outils de la langue",
      cours: `
## La règle d'or : le verbe en 2e position
Dans une phrase affirmative, le verbe conjugué est **toujours la 2e information** de la phrase (le 2e « bloc »).
- *Ich | **spiele** | heute Fußball.* (Je joue au foot aujourd'hui.)
- *Heute | **spiele** | ich Fußball.* (Aujourd'hui, je joue au foot.)

Si la phrase commence par autre chose que le sujet (un mot de temps, un lieu…), le **sujet passe après le verbe** : c'est l'**inversion**.

>! **Différence avec le français et l'anglais** : *Today **I play** football* / *Aujourd'hui **je joue***, mais en allemand : *Heute **spiele ich** Fußball.*

## Les questions fermées (réponse oui / non)
Le verbe se met en **1re position** : ***Spielst** du Tennis?* – *Ja!* / *Nein.* – ***Hast** du einen Hund?* – ***Ist** das deine Katze?*

## Les questions avec un mot interrogatif
Mot interrogatif + **verbe** + sujet :
| Mot | Sens | Exemple |
|---|---|---|
| wer | qui | Wer ist das? |
| was | quoi, que | Was machst du? |
| wo | où | Wo wohnst du? |
| woher | d'où | Woher kommst du? |
| wann | quand | Wann gehst du in die Schule? |
| wie | comment | Wie heißt du? |
| wie viel | combien | Wie viel kostet das? |
| warum | pourquoi | Warum hast du kein Haustier? |

>! **Piège** : *wer* = **qui** (et pas « où ») ; *wo* = **où**.

## La négation : nicht ou kein ?
- **kein / keine** remplace *ein / eine* ou nie un nom sans article : *Ich habe **keinen** Bruder.* – *Ich esse **kein** Fleisch.*
- **nicht** nie tout le reste (un verbe, un adjectif, un nom avec *der / die / das*…) : *Er ist **nicht** da.* – *Das ist **nicht** schön.* – *Ich spiele **nicht** gern.*

## Relier les idées
- ***und*** (et), ***oder*** (ou), ***aber*** (mais), ***denn*** (car) ne comptent **pas** comme un bloc : l'ordre ne change pas. *Ich spiele Fußball, **aber** mein Bruder **spielt** Tennis.* – *Ich bleibe zu Hause, **denn** ich **bin** krank.*
- ***dann*** (ensuite), *heute*, *morgen*, *vielleicht* (peut-être), *leider* (malheureusement), *zum Glück* (heureusement) comptent comme un bloc : ***Dann** essen **wir**.* – ***Leider** habe **ich** keine Zeit.*

> **À retenir** : phrase affirmative = verbe en **2e** position (*Heute spiele ich…*). Question oui/non = verbe en **1re** position. Question avec *wer, was, wo, woher, wann, wie, warum* + verbe. **kein** devant un nom sans article ou avec *ein* ; **nicht** pour le reste. *und, aber, oder, denn* ne changent pas l'ordre.

### Erreurs fréquentes
- *Heute ich spiele Fußball* → ***Heute spiele ich** Fußball.*
- *Wer wohnst du?* → ***Wo** wohnst du?*
- *Ich habe nicht einen Hund* → *Ich habe **keinen** Hund.*
`,
      exercices: [
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Am Samstag ich spiele Tennis.", "Am Samstag spiele ich Tennis.", "Am Samstag spiele Tennis ich.", "Ich am Samstag spiele Tennis."], reponse: 1, explication: "Le verbe est toujours en **2e position**. *Am Samstag* occupe la 1re place, donc le sujet *ich* passe **après** le verbe : *Am Samstag **spiele ich** Tennis.*" },
        { type: "saisie", question: "Trouve le mot interrogatif : *___ wohnst du? – In Lille.* (écris seulement le mot qui manque)", reponses: ["Wo"], explication: "La réponse est un lieu → ***Wo** wohnst du?* (Où habites-tu ?). Attention, *wer* veut dire « qui »." },
        { type: "qcm", question: "Comment demandes-tu à un camarade s'il a un chat ?", choix: ["Du hast eine Katze?", "Hast du eine Katze?", "Wer hast du eine Katze?", "Eine Katze du hast?"], reponse: 1, explication: "Question fermée (réponse *ja / nein*) : le **verbe en 1re position** : ***Hast du** eine Katze?*" },
        { type: "vf", question: "Après *aber* (mais), le verbe passe devant le sujet : *…, aber spielt mein Bruder Tennis.*", reponse: false, explication: "*und, aber, oder, denn* ne comptent pas comme un bloc : l'ordre ne change pas → *…, **aber mein Bruder spielt** Tennis.*" },
        { type: "saisie", question: "Mets à la forme négative : *Ich habe einen Bruder.*", reponses: ["Ich habe keinen Bruder."], explication: "*einen* devient ***keinen*** : *Ich habe keinen Bruder.* On n'écrit pas *nicht einen*." },
        { type: "qcm", question: "Complète : *Das Wetter ist ___ schön.* (Le temps n'est pas beau.)", choix: ["kein", "keine", "nicht", "nein"], reponse: 2, explication: "On nie un **adjectif** (*schön*) avec ***nicht***. *kein* s'emploie devant un nom ; *nein* veut dire « non » (réponse)." },
        { type: "saisie", question: "Voici la réponse : *Ich komme aus Wien.* Écris la question, en tutoyant (3 mots).", reponses: ["Woher kommst du?"], explication: "La réponse donne l'origine (*aus Wien*) → ***Woher kommst du?*** (D'où viens-tu ?)" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Dann wir essen.", "Dann essen wir.", "Wir dann essen.", "Dann wir essen zusammen."], reponse: 1, explication: "*dann* (ensuite) compte comme un bloc : verbe en 2e position, puis le sujet → ***Dann essen wir.***" },
        { type: "qcm", question: "Que veut dire *Wann gehst du ins Bett?* ?", choix: ["Où vas-tu au lit ?", "Pourquoi vas-tu au lit ?", "Qui va au lit ?", "Quand vas-tu au lit ?"], reponse: 3, explication: "***wann*** = **quand**. *wo* = où, *warum* = pourquoi, *wer* = qui. *ins Bett gehen* = aller au lit." },
        { type: "redaction", question: "Tu prépares une interview de ton nouveau correspondant. Écris **6 questions** en allemand (au moins 4 avec un mot interrogatif différent et 2 questions oui / non), puis invente ses réponses. Une des réponses doit contenir *nicht* et une autre *kein*.", corrige: "**Modèle :**\n\n1. *Wie heißt du? – Ich heiße Lukas.*\n2. *Wie alt bist du? – Ich bin zwölf.*\n3. *Wo wohnst du? – Ich wohne in Köln.*\n4. *Wann gehst du in die Schule? – Um halb acht.*\n5. *Hast du Geschwister? – Nein, ich habe keine Geschwister.*\n6. *Spielst du gern Fußball? – Nein, ich spiele nicht gern Fußball, aber ich schwimme gern.*\n\nPoints à vérifier :\n- mot interrogatif + **verbe** + sujet (*Wo wohnst du?*) ;\n- question oui / non : **verbe en 1re position** (*Hast du…?*) ;\n- *keine Geschwister* (nom) / *nicht gern* (le reste) ;\n- *aber* ne change pas l'ordre des mots." },
      ],
    },
    {
      id: "decrire-personnages",
      titre: "Décrire quelqu'un : de l'Ampelmann à Max und Moritz",
      theme: "Personnes et personnages",
      cours: `
## L'apparence
| Allemand | Français |
|---|---|
| groß / klein | grand / petit |
| jung / alt | jeune / vieux |
| mittelgroß | de taille moyenne |
| Er hat kurze / lange Haare. | Il a les cheveux courts / longs. |
| Sie hat blonde / braune / schwarze Haare. | Elle a les cheveux blonds / bruns / noirs. |
| Er hat blaue / grüne Augen. | Il a les yeux bleus / verts. |

Le corps : *der Kopf* (la tête), *das Gesicht* (le visage), *die Nase* (le nez), *die Augen* (les yeux), *der Arm*, *das Bein* (la jambe), *der Fuß* (le pied).

## Le caractère
*nett* (gentil), *lustig* (drôle), *frech* (insolent, effronté), *brav* (sage), *böse* (méchant), *schüchtern* (timide), *kreativ*, *sportlich*, *hilfsbereit* (serviable).
Pour nuancer : *sehr* (très), *total* et *echt* (vraiment, à l'oral), *ein bisschen* (un peu), *zu* (trop) : *Er ist **echt** lustig!* – *Sie ist **ein bisschen** schüchtern.*

## Les vêtements : tragen (porter)
*Ich trage, du trägst, er / sie trägt* (verbe fort : a → ä).
| der… (→ einen) | die… (→ eine) | das… (→ ein) | pluriel |
|---|---|---|---|
| der Hut (le chapeau) | die Hose (le pantalon) | das T-Shirt | die Socken (les chaussettes) |
| der Pulli (le pull) | die Jacke (la veste) | das Kleid (la robe) | die Shorts (le short) |
| der Mantel (le manteau) | die Kappe (la casquette) | das Hemd (la chemise) | |

*Er trägt **einen** Hut und **eine** Jacke.* (Après *tragen*, comme après *haben* : *einen* au masculin.)

## Comparer
- *Tom ist **größer als** Lea.* → Tom est **plus** grand **que** Lea. (*groß → größer*)
- *Lea ist **so** groß **wie** Mia.* → Lea est **aussi** grande **que** Mia.
- On ajoute **-er** à l'adjectif : *klein → kleiner*, *lustig → lustiger*, *alt → älter*.

## Des personnages que tous les Allemands connaissent
- **Das Ampelmännchen** : le petit bonhomme des feux pour piétons de l'ancienne Allemagne de l'Est (la RDA). Il a été dessiné en **1961** par Karl Peglau. Il porte un **chapeau** ; au rouge, il écarte les bras, au vert, il marche. Aujourd'hui, c'est un symbole de **Berlin**.
- **Playmobil** : ces petites figurines ont été créées en **1974** par une entreprise de **Bavière**, à Zirndorf, près de Nuremberg. Elles ont toujours un grand sourire !
- **Max und Moritz** : deux garçons très ***frech*** (effrontés) inventés en **1865** par **Wilhelm Busch**. Ils font sept mauvais tours (*sieben Streiche*) aux habitants de leur village. C'est l'un des ancêtres de la bande dessinée.
- **Der Struwwelpeter** : un garçon qui ne veut jamais se laisser couper les cheveux ni les ongles, dans un livre d'**Heinrich Hoffmann** (**1845**, Francfort).
- **Die Maus** : la souris **orange** de l'émission pour enfants *Die Sendung mit der Maus*, à la télévision allemande depuis **1971**.

> **À retenir** : *Er ist groß / klein / nett / lustig. Sie hat lange, blonde Haare.* Nuancer : *sehr, echt, ein bisschen, zu*. *tragen* : *er trägt einen Hut*. Comparer : *größer als* (plus… que), *so … wie* (aussi… que).

### Erreurs fréquentes
- *Er ist plus groß als…* → *Er ist **größer** als…*
- *Er trägt ein Hut* → *Er trägt **einen** Hut* (*der Hut*).
- *Sie hat lang Haare* → *Sie hat **lange** Haare* (devant le nom, l'adjectif prend une terminaison : retiens les exemples).
`,
      textes: {
        ampel: `**Steckbrief: das Ampelmännchen**

*Name: Ampelmännchen (oder Ampelmann)*
*Wohnort: Berlin und viele Städte im Osten von Deutschland*
*Alter: über 60 Jahre – er ist von 1961!*
*Aussehen: Er ist klein und ein bisschen dick. Er trägt einen Hut. Er ist rot oder grün.*
*Charakter: Er ist nett und hilfsbereit. Er hilft den Kindern über die Straße. Rot heißt: Stopp, warte! Grün heißt: Geh!*
*Hobby: Er geht gern spazieren – aber nur, wenn er grün ist!*

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Que veut dire *Sie hat lange, blonde Haare.* ?", choix: ["Elle a les cheveux courts et bruns.", "Elle a les cheveux longs et blonds.", "Elle a les yeux bleus.", "Elle est grande et blonde."], reponse: 1, explication: "*lange* = longs, *blonde* = blonds, *die Haare* = les cheveux. Le verbe est *haben* (*sie **hat***), comme en français." },
        { type: "saisie", question: "Donne le contraire de *groß*. (un seul mot)", reponses: ["klein"], explication: "*groß* (grand) ≠ ***klein*** (petit). Autres paires : *jung ≠ alt*, *lang ≠ kurz*, *nett ≠ böse*." },
        { type: "qcm", question: "Tom mesure 1,50 m, Lea 1,40 m. Complète : *Tom ist ___ Lea.*", choix: ["größer als", "so groß wie", "groß als", "mehr groß als"], reponse: 0, explication: "Tom est **plus grand que** Lea : ***größer als***. On ajoute **-er** à l'adjectif (et ici un Umlaut : *groß → größer*). *so groß wie* = aussi grand que." },
        { type: "vf", question: "Max et Moritz sont deux enfants très sages inventés par Wilhelm Busch.", reponse: false, explication: "Max et Moritz sont au contraire très ***frech*** (insolents) : ils font sept mauvais tours (*sieben Streiche*). Wilhelm Busch les a inventés en 1865." },
        { type: "saisie", question: "Traduis en allemand : « Il porte un chapeau. » (*der Hut*)", reponses: ["Er trägt einen Hut."], explication: "***Er trägt einen Hut.*** *tragen* est un verbe fort (*er trägt*), et *der Hut* devient *einen Hut* après le verbe." },
        { type: "qcm", texte: "ampel", question: "De quand date l'Ampelmännchen ?", choix: ["de 1961", "de 1989", "de 1865", "de 1974"], reponse: 0, explication: "*Alter: über 60 Jahre – er ist **von 1961**!* Il a été dessiné en 1961 en Allemagne de l'Est. (1865 : Max und Moritz ; 1974 : Playmobil.)" },
        { type: "vf", texte: "ampel", question: "D'après la fiche, l'Ampelmännchen est grand et mince.", reponse: false, explication: "*Er ist **klein** und **ein bisschen dick**.* Il est petit et un peu gros." },
        { type: "qcm", texte: "ampel", question: "Que signifie le bonhomme **rouge** ?", choix: ["Va !", "Dépêche-toi !", "Stop, attends !", "Promène-toi !"], reponse: 2, explication: "*Rot heißt: **Stopp, warte!*** (*warten* = attendre). Le vert veut dire *Geh!* (Va !)." },
        { type: "qcm", question: "Que veut dire *die Nase* ?", choix: ["la bouche", "l'oreille", "le nez", "l'œil"], reponse: 2, explication: "***die Nase*** = le nez (en anglais : *the nose*). L'œil = *das Auge*, les yeux = *die Augen*." },
        { type: "redaction", question: "Écris la fiche d'identité (*Steckbrief*) d'un personnage de ton choix, réel ou imaginaire (héros de livre, de dessin animé, ou toi-même !), puis un petit texte de 5 phrases : apparence, vêtements, caractère, et une comparaison avec un autre personnage.", corrige: "**Modèle :**\n\n*Steckbrief – Name: Moritz. Alter: zehn. Wohnort: ein Dorf in Deutschland.*\n\n*Moritz ist klein und frech. Er hat kurze Haare. Er trägt eine Hose, ein Hemd und eine Jacke. Er ist echt lustig, aber nicht brav! Er ist kleiner als Max, aber er ist so frech wie Max.*\n\nPoints à vérifier :\n- *Er / Sie ist* + adjectif (sans terminaison) ; *Er hat kurze Haare* ;\n- *tragen* : *er **trägt*** + *einen* (masc.), *eine* (fém.), *ein* (neutre) ;\n- nuance avec *echt, sehr, ein bisschen* ;\n- comparaison : ***kleiner als***, ***so … wie***." },
      ],
    },
    {
      id: "journee-et-ecole",
      titre: "Ma journée et l'école en Allemagne",
      theme: "Le quotidien : vivre, jouer, apprendre",
      cours: `
## Ma journée
| Allemand | Français |
|---|---|
| aufstehen | se lever |
| duschen | se doucher |
| frühstücken | prendre le petit-déjeuner |
| sich die Zähne putzen | se brosser les dents |
| in die Schule gehen | aller à l'école |
| Hausaufgaben machen | faire ses devoirs |
| fernsehen | regarder la télévision |
| den Hund ausführen | sortir le chien |
| ins Bett gehen / schlafen | aller au lit / dormir |

Les moments de la journée : *morgens* (le matin), *mittags* (à midi), *nachmittags* (l'après-midi), *abends* (le soir).
Pour raconter dans l'ordre : *zuerst* (d'abord), *dann* (ensuite), *später* (plus tard), *am Ende* (à la fin).

## Les verbes à particule séparable
Certains verbes ont une petite **particule** devant : ***auf**stehen, **fern**sehen, **aus**führen, **ein**kaufen*. Dans la phrase, la particule part **à la fin** : le verbe et sa particule forment une **pince**.
- *Ich **stehe** um sieben Uhr **auf**.* (Je me lève à sept heures.)
- *Am Abend **sehe** ich **fern**.* (Le soir, je regarde la télé.)
- À l'oral, on appuie sur la particule : ***auf**stehen*, ***fern**sehen*.

## Le verbe müssen (devoir)
*ich muss, du musst, er / sie muss, wir müssen, ihr müsst, sie müssen.* Le deuxième verbe va **à la fin**, à l'infinitif : *Ich **muss** jetzt ins Bett **gehen**.* – *Du **musst** Hausaufgaben **machen**.*

## Les matières
*Deutsch, Englisch, Französisch, Mathe, Bio, Erdkunde* (géographie), *Geschichte* (histoire), *Kunst* (arts plastiques), *Musik, Sport*. *Mein Lieblingsfach ist Kunst.* (Ma matière préférée est…)

## L'école en Allemagne
- Les enfants entrent à l'école primaire (*die Grundschule*) vers **6 ans**. Le premier jour, chaque enfant reçoit une **Schultüte** : un grand cornet en carton rempli de bonbons et de fournitures scolaires.
- Après la *Grundschule* (en général **4 ans**), les élèves vont par exemple au *Gymnasium*.
- Les cours commencent souvent tôt, **vers 8 heures**, et beaucoup d'élèves finissent au début de l'après-midi. De plus en plus d'écoles sont des *Ganztagsschulen* (école toute la journée).
- Pour la récréation, on apporte son **Pausenbrot** (une tartine ou un sandwich) dans une boîte, *die Brotdose*.
- Les notes vont de **1** (*sehr gut*, la meilleure) à **6** (*ungenügend*, la plus mauvaise) !

> **À retenir** : *Ich stehe um 7 Uhr **auf**.* (la particule à la fin). *müssen* : *ich muss* + infinitif à la fin. *zuerst, dann, später, am Ende*. En Allemagne : *Schultüte*, *Pausenbrot*, notes de 1 (la meilleure) à 6.

### Erreurs fréquentes
- *Ich aufstehe um 7 Uhr* → *Ich **stehe** um 7 Uhr **auf**.*
- *Ich muss gehe* → *Ich muss **gehen*** (infinitif à la fin).
- Croire qu'un 6 est une bonne note en Allemagne : c'est la **pire** !
`,
      textes: {
        lea: `**Leas Tag**

*Hallo! Ich bin Lea, ich bin elf und gehe in die Klasse 6a in Leipzig. Ich stehe jeden Tag um Viertel nach sechs auf. Ich dusche und frühstücke: Brot mit Honig und ein Glas Milch. Die Schule beginnt um 7:45 Uhr. In der Pause esse ich mein Pausenbrot. Mein Lieblingsfach ist Kunst, denn ich male gern. Um 13:30 Uhr ist die Schule aus. Am Nachmittag mache ich Hausaufgaben, dann führe ich meinen Hund aus. Um halb neun gehe ich ins Bett.*

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Que veut dire *aufstehen* ?", choix: ["se coucher", "se lever", "se doucher", "se dépêcher"], reponse: 1, explication: "***aufstehen*** = se lever. *ins Bett gehen* = aller se coucher, *duschen* = se doucher." },
        { type: "saisie", question: "Traduis en allemand : « Je me lève à 7 heures. » (écris l'heure en chiffres ou en lettres)", reponses: ["Ich stehe um 7 Uhr auf.", "Ich stehe um sieben Uhr auf.", "Um 7 Uhr stehe ich auf.", "Um sieben Uhr stehe ich auf.", "Ich stehe um sieben auf.", "Um sieben stehe ich auf."], explication: "***Ich stehe um 7 Uhr auf.*** *aufstehen* est un verbe séparable : la particule ***auf*** va **à la fin** de la phrase." },
        { type: "vf", question: "En Allemagne, la note 1 est la meilleure note.", reponse: true, explication: "Oui : les notes vont de **1** (*sehr gut*) à **6** (*ungenügend*). Un 6 est donc une très mauvaise note !" },
        { type: "qcm", question: "Qu'est-ce qu'une *Schultüte* ?", choix: ["un cartable pour le collège", "un cornet de bonbons et de fournitures offert le premier jour d'école", "le goûter de la récréation", "un bulletin de notes"], reponse: 1, explication: "La ***Schultüte*** est un grand cornet en carton offert aux enfants pour leur **premier jour** d'école primaire. Le goûter de la récré, c'est le *Pausenbrot*." },
        { type: "saisie", question: "Complète avec *müssen* : *Du ___ jetzt ins Bett gehen.* (écris seulement le verbe)", reponses: ["musst"], explication: "*du* → ***musst*** : *Du musst jetzt ins Bett gehen.* L'infinitif *gehen* est à la fin." },
        { type: "qcm", question: "*Mein Lieblingsfach ist Erdkunde.* Quelle est la matière préférée de cet élève ?", choix: ["l'histoire", "la géographie", "les SVT", "les arts plastiques"], reponse: 1, explication: "***Erdkunde*** = la géographie (*die Erde* = la Terre). L'histoire = *Geschichte*, les arts plastiques = *Kunst*." },
        { type: "qcm", texte: "lea", question: "À quelle heure Lea se lève-t-elle ?", choix: ["à 6 h 15", "à 5 h 45", "à 6 h 30", "à 7 h 45"], reponse: 0, explication: "*Ich stehe jeden Tag um **Viertel nach sechs** auf* = 6 h 15. À 7 h 45, c'est le début des cours." },
        { type: "vf", texte: "lea", question: "Les cours de Lea se terminent à 13 h 30.", reponse: true, explication: "*Um 13:30 Uhr ist die Schule aus.* (*aus sein* = être terminé.) L'après-midi, Lea fait ses devoirs." },
        { type: "saisie", texte: "lea", question: "Pourquoi Lea aime-t-elle les arts plastiques ? Recopie les trois mots qui suivent *denn*.", reponses: ["ich male gern"], explication: "*Mein Lieblingsfach ist Kunst, denn **ich male gern**.* (car j'aime peindre). Après *denn*, l'ordre des mots ne change pas : sujet + verbe." },
        { type: "redaction", question: "Raconte ta journée d'école en 8 phrases en allemand, comme Lea. Utilise au moins deux heures, deux verbes séparables (*aufstehen, fernsehen, ausführen…*), *müssen* une fois, ta matière préférée, et les mots *zuerst, dann, später*.", corrige: "**Modèle :**\n\n*Ich stehe um sieben Uhr auf. Zuerst dusche ich, dann frühstücke ich. Um halb acht gehe ich in die Schule. Die Schule beginnt um acht Uhr. Mein Lieblingsfach ist Englisch, denn die Lehrerin ist nett. Um fünf Uhr muss ich Hausaufgaben machen. Später sehe ich ein bisschen fern. Um neun Uhr gehe ich ins Bett.*\n\nPoints à vérifier :\n- particule à la fin : *Ich stehe … **auf*** ; *Später sehe ich … **fern*** ;\n- inversion après *Zuerst, Dann, Später, Um … Uhr* ;\n- *Ich muss … machen* (infinitif à la fin) ;\n- *halb acht* = 7 h 30." },
      ],
    },
    {
      id: "cuisine-allemande",
      titre: "Es geht um die Wurst ! Manger et boire",
      theme: "Le quotidien : vivre, jouer, apprendre",
      cours: `
## Les repas
- **das Frühstück** : le petit-déjeuner, souvent avec des petits pains (*Brötchen*), du beurre, de la confiture (*die Marmelade*), du miel (*der Honig*), du fromage, de la charcuterie.
- **das Mittagessen** : le déjeuner.
- **das Abendbrot** (ou *das Abendessen*) : le dîner. Mot à mot, « le pain du soir » : dans beaucoup de familles, on mange le soir un repas froid avec du pain.
- **das Pausenbrot** : la tartine qu'on emporte pour la récréation.

## Le pays du pain
Les boulangers allemands disent qu'il existe **plus de 3 000 sortes de pain** en Allemagne ! Le pain est souvent foncé et nourrissant : *das Roggenbrot* (pain de seigle), *das Schwarzbrot* (pain noir), *das Vollkornbrot* (pain complet). Et aussi : *die Brezel* (le bretzel), *das Brötchen* (le petit pain), qu'on appelle *Semmel* en Bavière et en Autriche, et *Schrippe* à Berlin.

## Les aliments
| Groupe | Exemples |
|---|---|
| das Obst (les fruits) | der Apfel, die Banane, die Erdbeere (la fraise) |
| das Gemüse (les légumes) | die Kartoffel, die Karotte, die Tomate |
| das Fleisch (la viande) | die Wurst (la saucisse), das Hähnchen (le poulet) |
| der Fisch | |
| les produits laitiers | die Milch, der Käse, der Joghurt, die Butter |
| les boissons | das Wasser, der Apfelsaft, der Kakao, der Tee |

Quelques spécialités : *die Currywurst* (saucisse coupée en rondelles avec une sauce tomate au curry, inventée à **Berlin** en 1949), *die Weißwurst* (saucisse blanche de Munich), *der Kartoffelsalat*, *das Wiener Schnitzel* (escalope panée, spécialité de Vienne, en Autriche), *der Streuselkuchen*.

>! **Une expression** : ***Es geht um die Wurst!*** Mot à mot : « Il s'agit de la saucisse ! » Elle veut dire : « C'est le moment décisif ! » (avant un match, un contrôle…).

## Dire ce qu'on aime
- *Ich esse **gern** Brot mit Honig.* (J'aime manger…) – *Ich trinke **nicht gern** Milch.*
- Le verbe **mögen** (aimer) : *ich mag, du magst, er / sie mag, wir mögen*. *Ich mag Käse.* – *Fisch mag ich nicht.*
- *Lecker!* / *Es schmeckt gut!* (C'est bon !) – *Igitt!* (Beurk !)
- *Ich habe Hunger / Durst.* (J'ai faim / soif.)
- Pas d'article pour dire « du, de la » : *Ich esse **Brot**.* (Je mange **du** pain.) – *Ich trinke **Wasser**.* Comme en anglais : *I eat bread*.

## À la boulangerie (die Bäckerei)
- *Was möchtest du?* / *Was möchten Sie?* → Qu'est-ce que tu veux / vous voulez ?
- *Ich **möchte** zwei Brötchen, bitte.* → Je voudrais deux petits pains, s'il vous plaît.
- *Ich **hätte gern** eine Brezel.* → J'aimerais un bretzel. (encore plus poli)
- *Was kostet das?* – *Das kostet zwei Euro fünfzig.* (2,50 €)
- *möchte* : *ich möchte, du möchtest, er / sie möchte, wir möchten.*

> **À retenir** : *das Frühstück, das Mittagessen, das Abendbrot*. *Ich esse gern… / Ich mag… / Ich möchte…, bitte.* *Ich habe Hunger / Durst.* Pas d'article pour « du, de la » : *Ich esse Brot.* *Es geht um die Wurst!* = c'est le moment décisif.

### Erreurs fréquentes
- *Ich bin Hunger* → *Ich **habe** Hunger.*
- *Ich esse das Brot* pour « je mange du pain » → *Ich esse **Brot**.*
- *du magt* → ***du magst***.
`,
      exercices: [
        { type: "qcm", question: "Que veut dire *das Abendbrot* ?", choix: ["le petit-déjeuner", "le dîner (repas du soir)", "le goûter de la récréation", "le pain du matin"], reponse: 1, explication: "***das Abendbrot*** (mot à mot « le pain du soir ») = le dîner, souvent un repas froid avec du pain. Le petit-déjeuner = *das Frühstück* ; la tartine de la récré = *das Pausenbrot*." },
        { type: "saisie", question: "Traduis en allemand : « J'ai faim. »", reponses: ["Ich habe Hunger."], explication: "***Ich habe Hunger.*** Comme en français, on utilise *haben* (avoir). « J'ai soif » = *Ich habe Durst.*" },
        { type: "qcm", question: "Avant un match, ton entraîneur dit : *Es geht um die Wurst!* Que veut-il dire ?", choix: ["« On mangera des saucisses après le match. »", "« C'est le moment décisif ! »", "« Vous jouez mal ! »", "« J'ai faim ! »"], reponse: 1, explication: "***Es geht um die Wurst!*** est une expression : « C'est le moment décisif, tout se joue maintenant ! »" },
        { type: "vf", question: "À Berlin, on appelle souvent le petit pain *Schrippe*.", reponse: true, explication: "Oui : *das Brötchen* s'appelle *Schrippe* à Berlin et *Semmel* en Bavière et en Autriche." },
        { type: "saisie", question: "Conjugue *mögen* : *___ du Käse?* (écris seulement le verbe)", reponses: ["Magst"], explication: "*du* → ***magst*** : *Magst du Käse?* (Tu aimes le fromage ?). *ich mag, du magst, er mag.*" },
        { type: "qcm", question: "Tu es à la boulangerie. Quelle phrase est la plus polie pour demander un bretzel ?", choix: ["Brezel!", "Ich will Brezel.", "Gib mir eine Brezel!", "Ich hätte gern eine Brezel, bitte."], reponse: 3, explication: "***Ich hätte gern eine Brezel, bitte.*** est très poli. *Ich möchte eine Brezel, bitte.* est aussi correct. *Gib mir…!* est un ordre, et *Ich will…* est trop direct." },
        { type: "saisie", question: "Traduis en allemand : « Je mange du pain. »", reponses: ["Ich esse Brot."], explication: "***Ich esse Brot.*** Pas d'article pour dire « du, de la » en allemand (comme en anglais : *I eat bread*)." },
        { type: "qcm", question: "Dans quelle ville la *Currywurst* a-t-elle été inventée ?", choix: ["Berlin", "Munich", "Vienne", "Hambourg"], reponse: 0, explication: "La **Currywurst** a été inventée à **Berlin** en 1949. La *Weißwurst* est une spécialité de Munich, le *Wiener Schnitzel* de Vienne." },
        { type: "qcm", question: "La boulangère dit : *Das kostet drei Euro zwanzig.* Combien dois-tu payer ?", choix: ["3,02 €", "23 €", "3,20 €", "20,30 €"], reponse: 2, explication: "*drei Euro zwanzig* = **3,20 €** : d'abord les euros, puis les centimes." },
        { type: "redaction", question: "Écris le dialogue d'un achat à la boulangerie (8 répliques) entre toi et le boulanger. Tu salues, tu commandes deux choses avec *Ich möchte…* et *Ich hätte gern…*, tu demandes le prix, tu paies, tu dis au revoir. Ajoute à la fin deux phrases pour dire ce que tu aimes ou n'aimes pas manger.", corrige: "**Modèle :**\n\n- *Bäcker : Guten Tag! Was möchtest du?*\n- *Ich : Guten Tag! Ich möchte zwei Brötchen, bitte.*\n- *Bäcker : Gern. Noch etwas?*\n- *Ich : Ja, ich hätte gern eine Brezel.*\n- *Bäcker : Bitte schön!*\n- *Ich : Was kostet das?*\n- *Bäcker : Das kostet zwei Euro zehn.*\n- *Ich : Hier, bitte. Danke! Auf Wiedersehen!*\n\n*Ich esse gern Brot mit Käse. Fisch mag ich nicht, igitt!*\n\nPoints à vérifier :\n- *Ich möchte…, bitte* / *Ich hätte gern…* ;\n- *eine Brezel* (féminin), *zwei Brötchen* (pluriel = singulier) ;\n- *Was kostet das?* ; prix : euros puis centimes ;\n- *gern* pour dire ce qu'on aime ; *mögen* : *ich mag*." },
      ],
    },
    {
      id: "loisirs-et-jeux",
      titre: "Loisirs et jeux : Mensch, ärgere dich nicht !",
      theme: "Le quotidien : vivre, jouer, apprendre",
      cours: `
## Mes loisirs
| Allemand | Français |
|---|---|
| Fußball / Klavier / Videospiele spielen | jouer au foot / du piano / aux jeux vidéo |
| lesen / Musik hören | lire / écouter de la musique |
| tanzen / singen | danser / chanter |
| schwimmen / reiten / turnen | nager / faire du cheval / faire de la gym |
| Rad fahren | faire du vélo |
| Judo machen / Sport treiben | faire du judo / faire du sport |
| zeichnen / malen / basteln | dessiner / peindre / bricoler |

- *In meiner Freizeit lese ich gern.* (Pendant mon temps libre, j'aime lire.)
- *Am Wochenende spiele ich Fußball.* – *Ich schwimme dreimal die Woche.* (trois fois par semaine)
- **gern** (aimer faire), **lieber** (préférer), **nicht gern** : *Ich lese gern, aber ich spiele lieber Fußball.*

## Les lieux
*das Kino* (le cinéma), *das Schwimmbad* (la piscine), *das Freibad* (la piscine en plein air), *die Eisdiele* (le glacier), *der Spielplatz* (l'aire de jeux), *der Verein* (le club). En Allemagne, beaucoup d'enfants font leur sport dans un **Verein** : *Ich bin in einem Fußballverein.*

## Pouvoir et vouloir : können, wollen
| | können (pouvoir, savoir faire) | wollen (vouloir) |
|---|---|---|
| ich | kann | will |
| du | kannst | willst |
| er / sie | kann | will |
| wir | können | wollen |

Comme avec *müssen*, le deuxième verbe va **à la fin** : *Ich **kann** gut **schwimmen**.* – *Sie **will** Fußball **spielen**.* – *Ich habe Lust, Karten zu spielen.* (J'ai envie de jouer aux cartes.)

## Proposer, accepter, refuser
- *Wollen wir Karten spielen?* (On joue aux cartes ?) – *Kommst du mit ins Kino?*
- Accepter : *Ja, gern!* – *Gute Idee!* – *Super!* – *Einverstanden!*
- Refuser : *Leider nicht.* – *Ich kann nicht.* – *Tut mir leid, ich habe keine Zeit.*

## Jouer à un jeu de société : das Brettspiel
**Mensch, ärgere dich nicht!** (« Ne t'énerve pas ! ») est le jeu de société le plus célèbre d'Allemagne. Il ressemble aux **petits chevaux** : on lance le dé et on fait avancer ses pions jusqu'à la maison. Il a été inventé à Munich vers 1907-1908 par Josef Friedrich Schmidt.
| Allemand | Français |
|---|---|
| der Würfel / würfeln | le dé / lancer le dé |
| die Spielfigur | le pion |
| das Feld | la case |
| Du bist dran! / Ich bin dran! | C'est ton tour ! / C'est mon tour ! |
| Noch einmal! | Encore une fois ! |
| Du darfst noch einmal würfeln. | Tu as le droit de relancer le dé. |
| Wir haben gewonnen! | Nous avons gagné ! |

>! **Les consignes de jeu** sont souvent à l'impératif : *Würfle!* (Lance le dé !) – *Komm!* (Viens !) – *Pass auf!* (Fais attention !) – *Warte!* (Attends !)

> **À retenir** : *Ich spiele gern Fußball / Ich lese lieber.* *können / wollen* + infinitif **à la fin** : *Ich kann gut schwimmen.* Proposer : *Wollen wir…?* – *Ja, gern! / Leider nicht.* Le jeu : *würfeln, Du bist dran!, Noch einmal!, Wir haben gewonnen!*

### Erreurs fréquentes
- *Ich kann schwimme* → *Ich kann **schwimmen*** (infinitif).
- *Ich spiele der Fußball* → *Ich spiele **Fußball*** (pas d'article).
- *Ich gern lese* → *Ich **lese gern*** (le verbe en 2e position).
`,
      textes: {
        flyer: `**Großer Spielenachmittag!**

*Wo? Im Jugendzentrum „Insel“, Hauptstraße 12*
*Wann? Am Samstag, 14. März, von 14 bis 18 Uhr*
*Für wen? Für Kinder von 10 bis 14 Jahren*
*Was? Brettspiele, Kartenspiele und ein großes Turnier: Mensch, ärgere dich nicht!*
*Preis: 2 Euro (mit Kuchen und Apfelsaft)*
*Bitte bringt eure Lieblingsspiele mit!*

(document d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Pendant un jeu, ton ami te dit : *Du bist dran!* Que veut-il dire ?", choix: ["« Tu as perdu ! »", "« C'est ton tour ! »", "« Tu triches ! »", "« Tu as gagné ! »"], reponse: 1, explication: "***Du bist dran!*** = C'est ton tour ! *Ich bin dran!* = C'est mon tour !" },
        { type: "saisie", question: "Traduis en allemand : « Je fais du vélo. »", reponses: ["Ich fahre Rad.", "Ich fahre Fahrrad."], explication: "***Ich fahre Rad.*** (*Rad fahren* = faire du vélo ; *das Rad* = la roue, le vélo.) *fahren* est fort : *du fährst Rad, er fährt Rad*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Ich kann gut schwimmen.", "Ich kann gut schwimme.", "Ich kann schwimmen gut.", "Ich schwimmen kann gut."], reponse: 0, explication: "Avec *können*, le deuxième verbe est **à l'infinitif** et **à la fin** : *Ich **kann** gut **schwimmen**.*" },
        { type: "vf", question: "*Mensch, ärgere dich nicht!* est un jeu de société qui ressemble aux petits chevaux.", reponse: true, explication: "Oui : on lance le dé (*würfeln*) et on fait avancer ses pions jusqu'à la maison. Son nom veut dire « Ne t'énerve pas ! »" },
        { type: "saisie", question: "Complète avec *wollen* : *Er ___ ins Kino gehen.* (écris seulement le verbe)", reponses: ["will"], explication: "*er* → ***will*** : *Er will ins Kino gehen.* Attention : *er will* veut dire « il veut », pas « il va »." },
        { type: "qcm", question: "Que trouve-t-on dans une *Eisdiele* ?", choix: ["des livres", "des glaces", "des jeux vidéo", "des vélos"], reponse: 1, explication: "*die **Eisdiele*** = le glacier (*das Eis* = la glace). Le cinéma = *das Kino*, la piscine = *das Schwimmbad*." },
        { type: "qcm", texte: "flyer", question: "Combien coûte l'après-midi jeux ?", choix: ["14 euros", "2 euros, avec un gâteau et du jus de pomme", "c'est gratuit", "12 euros"], reponse: 1, explication: "*Preis: 2 Euro (mit Kuchen und Apfelsaft)*. Le 14, c'est la date (14 mars) et l'heure de début (14 h) ; le 12, c'est le numéro de la rue." },
        { type: "vf", texte: "flyer", question: "Ton petit frère de 8 ans peut participer.", reponse: false, explication: "*Für Kinder **von 10 bis 14 Jahren*** : il faut avoir entre 10 et 14 ans." },
        { type: "qcm", texte: "flyer", question: "Ta copine française ne parle pas allemand. Que lui dis-tu pour résumer le document ?", choix: ["« C'est un concours de cuisine le dimanche matin. »", "« C'est un tournoi de foot pour les 10-14 ans. »", "« C'est un après-midi jeux le samedi 14 mars de 14 h à 18 h, pour les 10-14 ans ; il faut apporter ses jeux préférés. »", "« C'est une fête au cinéma, il faut apporter un gâteau. »"], reponse: 2, explication: "*Spielenachmittag* = après-midi jeux ; *Am Samstag, 14. März, von 14 bis 18 Uhr* ; *Bitte bringt eure Lieblingsspiele mit!* = Apportez vos jeux préférés ! Le gâteau est compris dans le prix." },
        { type: "redaction", question: "Écris un message (6 à 8 phrases) à un copain ou une copine pour l'inviter au *Spielenachmittag* du document : propose-lui de venir, donne le jour, l'heure, le lieu et le prix, dis à quel jeu tu veux jouer et ce que tu sais bien faire. Puis écris sa réponse (il ou elle refuse poliment).", corrige: "**Modèle :**\n\n*Hallo Paul! Am Samstag gibt es einen Spielenachmittag im Jugendzentrum „Insel“. Er ist von 14 bis 18 Uhr und kostet nur 2 Euro. Kommst du mit? Ich will „Mensch, ärgere dich nicht!“ spielen, denn ich kann gut würfeln! Bring dein Lieblingsspiel mit! Bis bald, Emma*\n\n*Hallo Emma! Gute Idee, aber leider kann ich nicht: Am Samstag habe ich ein Fußballspiel. Tut mir leid! Viel Spaß! Paul*\n\nPoints à vérifier :\n- infos essentielles : jour, heure, lieu, prix ;\n- *Kommst du mit?* (verbe en 1re position) ;\n- *Ich will … spielen* / *Ich kann gut …* : infinitif à la fin ;\n- refus poli : *Leider kann ich nicht. Tut mir leid!*" },
      ],
    },
    {
      id: "pays-et-paysages",
      titre: "Pays et paysages : de la mer aux Alpes",
      theme: "Pays et paysages",
      cours: `
## Les mots du paysage
Beaucoup de mots ressemblent à l'anglais : *das Land* (*land*), *der Wind* (*wind*), *die Landschaft* (*landscape*, le paysage).
| À la mer | À la montagne et à la campagne |
|---|---|
| das Meer (la mer) | der Berg (la montagne) |
| die Küste (la côte) | der Gipfel (le sommet) |
| der Strand (la plage) | das Tal (la vallée) |
| die Insel (l'île) | der See (le lac) |
| die Welle (la vague) | der Fluss (le fleuve, la rivière) |
| die Möwe (la mouette) | der Wald (la forêt) |
| der Leuchtturm (le phare) | die Wiese (la prairie), die Blume (la fleur) |

>! **Piège** : ***der** See* = le **lac**, mais ***die** See* = la **mer** (comme dans *die Nordsee*, *die Ostsee*). Seul l'article permet de les distinguer !

## Où ? am, an der, im, in den
On retient ces groupes comme des blocs :
- *am Meer* (au bord de la mer), *am Strand* (sur la plage), *am See* (au bord du lac) ;
- *an der Küste* (sur la côte), *an der Nordsee*, *an der Ostsee* ;
- *im Wald* (dans la forêt), *im Tal*, *in den Bergen*, *in den Alpen* (à la montagne, dans les Alpes).
- Le verbe **liegen** (être situé) : *Rügen **liegt** in der Ostsee.* – *Die Zugspitze **liegt** in Bayern.*
- **Es gibt** + *einen / eine / ein* = il y a : *In Bayern **gibt es** viele Berge.* – *Hier gibt es einen See.*

## Nordsee oder Ostsee ?
L'Allemagne a **deux mers** :
- **die Nordsee** (la mer du Nord) : ses côtes ont de grandes marées. À marée basse (*die Ebbe*), la mer se retire très loin et on peut marcher sur le fond, dans le **Wattenmeer** (la mer des Wadden). À marée haute : *die Flut*.
- **die Ostsee** (la mer **Baltique**, et pas « mer de l'Est » !) : presque pas de marées, de longues plages de sable. *Rügen*, la plus grande île d'Allemagne, est dans la Baltique.
- Sur les plages, on loue un **Strandkorb** : un grand fauteuil-panier en osier avec un toit, pour se protéger du vent. Le premier a été fabriqué à **Rostock**, au bord de la Baltique, en **1882**.

## Le Rhin, un fleuve vivant
**Der Rhein** (environ 1 230 km) prend sa source dans les **Alpes suisses**, traverse le **lac de Constance** (*der Bodensee*), passe à **Bâle** (*Basel*), sépare l'**Alsace** de l'Allemagne, puis traverse l'Allemagne (Cologne, Düsseldorf) et les **Pays-Bas** avant de se jeter dans la **mer du Nord**. En été, à Bâle, beaucoup de gens **se baignent dans le Rhin** et se laissent porter par le courant !

## Deux pays alpins : la Suisse et l'Autriche
- **Die Schweiz** : le **Matterhorn** (le mont Cervin, 4 478 m), au-dessus du village de **Zermatt**, est la montagne la plus célèbre de Suisse. On y trouve aussi beaucoup de lacs.
- **Österreich** : la plus haute montagne est le **Großglockner** (3 798 m). On y fait du ski en hiver et de la randonnée en été.
- Pour comparer : *Das Matterhorn ist **höher als** die Zugspitze.* (*hoch* → ***höher*** : attention, le *c* disparaît !) En allemand, le Cervin est neutre : ***das** Matterhorn* (*das Horn* = la corne).

## Décrire une photo de paysage
- *Im Vordergrund* (au premier plan), *im Hintergrund* (à l'arrière-plan), *links, rechts, in der Mitte, oben* (en haut), *unten* (en bas).
- Admirer : *Das ist wunderschön!* – *Es ist total schön hier!* – *malerisch* (pittoresque).
- Ce que tu as envie de faire : *Ich möchte in die Alpen fahren und im Wald **wandern*** (faire de la randonnée).
- Le temps qu'il fait et ce que tu ressens : *Die Sonne scheint.* – *Es ist windig.* – ***Mir ist kalt!*** (J'ai froid !) – *Mir ist zu warm.*
- Les panneaux : *Baden verboten!* (Baignade interdite !) – *Hier **darf** man nicht baden.* (On n'a pas le droit de se baigner ici.)

## Raconter ses vacances : war et hatte
Pour parler des vacances passées, deux formes suffisent : ***war*** (passé de *sein*) et ***hatte*** (passé de *haben*).
- *Wo **warst** du in den Ferien? – Ich **war** an der Ostsee.* (Où étais-tu pendant les vacances ? – J'étais au bord de la Baltique.)
- *Wir **hatten** schönes Wetter!* (Nous avons eu beau temps !) – *Es **war** super!*
- *ich war, du warst, er / sie war, wir waren* ; *ich hatte, du hattest, er / sie hatte, wir hatten*.

> **À retenir** : *das Meer, der Strand, die Insel, der Berg, der See (lac) ≠ die See (mer), der Fluss, der Wald*. *am Meer, an der Küste, im Wald, in den Bergen*. *Nordsee* (marées, Wattenmeer) / *Ostsee* (= Baltique). *Der Rhein* : des Alpes suisses à la mer du Nord. *hoch → höher*. *Mir ist kalt.* Vacances : *Ich war…, wir hatten schönes Wetter.*

### Erreurs fréquentes
- Traduire *Ostsee* par « mer de l'Est » : c'est la **mer Baltique**.
- *Ich bin kalt* pour « j'ai froid » → ***Mir ist kalt.***
- *hocher als* → ***höher als***.
`,
      textes: {
        karte: `**Eine Postkarte aus Basel**

*Liebe Clara,*
*viele Grüße aus Basel! Ich bin mit meinen Eltern hier, in der Schweiz. Basel liegt am Rhein, an der Grenze zu Frankreich und Deutschland. Heute ist es sehr heiß: 32 Grad! Am Nachmittag sind wir im Rhein geschwommen – das war toll! Man legt seine Sachen in einen wasserdichten Sack, den „Wickelfisch“, und schwimmt mit dem Fluss. Morgen fahren wir in die Berge, nach Zermatt. Dort wollen wir wandern, und im Hintergrund steht das Matterhorn!*
*Bis bald!*
*Deine Emma*

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Comment dit-on « la mer Baltique » en allemand ?", choix: ["die Ostsee", "die Nordsee", "das Mittelmeer", "der Bodensee"], reponse: 0, explication: "La mer Baltique se dit ***die Ostsee*** (mot à mot « mer de l'Est »). La mer du Nord = *die Nordsee* ; le lac de Constance = *der Bodensee*." },
        { type: "saisie", question: "Comment dit-on « la plage » en allemand ? (avec l'article)", reponses: ["der Strand"], explication: "***der Strand*** (pluriel : *die Strände*). Sur la plage = *am Strand*." },
        { type: "vf", question: "*Der See* et *die See* veulent dire la même chose.", reponse: false, explication: "***der** See* = le **lac** (*der Bodensee*), ***die** See* = la **mer** (*die Nordsee*). Seul l'article change… et le sens aussi !" },
        { type: "qcm", question: "Où le Rhin prend-il sa source ?", choix: ["dans la Forêt-Noire", "aux Pays-Bas", "en Bavière", "dans les Alpes suisses"], reponse: 3, explication: "Le **Rhin** naît dans les **Alpes suisses**, traverse le lac de Constance, passe à Bâle, longe l'Alsace, traverse l'Allemagne et les Pays-Bas et se jette dans la **mer du Nord**." },
        { type: "saisie", question: "Complète avec le comparatif de *hoch* : *Das Matterhorn ist ___ als die Zugspitze.* (écris seulement le mot qui manque)", reponses: ["höher"], explication: "*hoch* → ***höher*** : on ajoute un Umlaut, et le *c* disparaît. Le Matterhorn (4 478 m) est plus haut que la Zugspitze (2 962 m)." },
        { type: "qcm", question: "Tu sors de l'eau en grelottant. Que dis-tu ?", choix: ["Mir ist kalt!", "Ich bin kalt!", "Ich habe kalt!", "Es ist mir warm!"], reponse: 0, explication: "On dit ***Mir ist kalt!*** (mot à mot : « à moi, il est froid »). *Ich bin kalt* voudrait dire « je suis froid » (comme un glaçon !)." },
        { type: "qcm", texte: "karte", question: "Où se trouve Emma quand elle écrit ?", choix: ["à Zermatt, au pied du Matterhorn", "à Bâle, au bord du Rhin", "au bord de la mer du Nord", "en France, près de Strasbourg"], reponse: 1, explication: "*Viele Grüße aus **Basel**!* … *Basel liegt **am Rhein**.* Zermatt, c'est pour **demain** : *Morgen fahren wir in die Berge, nach Zermatt.*" },
        { type: "vf", texte: "karte", question: "Le *Wickelfisch* est un sac étanche dans lequel on met ses affaires pour nager dans le Rhin.", reponse: true, explication: "*Man legt seine Sachen in einen **wasserdichten Sack**, den „Wickelfisch“* (*wasserdicht* = étanche). On nage ensuite avec le courant : *mit dem Fluss*." },
        { type: "qcm", texte: "karte", question: "Que veulent faire Emma et ses parents à Zermatt ?", choix: ["se baigner dans le lac", "faire du ski", "faire de la randonnée", "visiter un musée"], reponse: 2, explication: "*Dort wollen wir **wandern*** : *wandern* = faire de la randonnée, marcher dans la nature." },
        { type: "redaction", question: "Tu rentres de vacances (vraies ou imaginaires) au bord de la mer du Nord, de la Baltique ou dans les Alpes. Écris une carte postale de 6 à 8 phrases à ton correspondant : où tu étais (*Ich war…*), le paysage (au moins 4 mots du paysage), le temps (*Wir hatten…*), ce que tu as aimé, et décris ta plus belle photo (*im Vordergrund, im Hintergrund*). Commence par *Lieber… / Liebe…* et termine par *Viele Grüße*.", corrige: "**Modèle :**\n\n*Lieber Jonas,*\n\n*ich war eine Woche an der Ostsee, auf der Insel Rügen. Wir hatten schönes Wetter, aber es war windig. Der Strand ist lang und weiß, und es gibt einen großen Wald. Ich war jeden Tag im Meer – das Wasser war kalt! Auf meinem Lieblingsfoto sitzt meine Schwester im Vordergrund in einem Strandkorb. Im Hintergrund sieht man einen Leuchtturm. Es war wunderschön!*\n\n*Viele Grüße*\n*Lucas*\n\nPoints à vérifier :\n- *Lieber* (garçon) / *Liebe* (fille) au début, *Viele Grüße* à la fin ;\n- le passé avec **war** et **hatte** : *ich war, wir hatten* ;\n- lieux en blocs : *an der Ostsee, im Meer, am Strand* ;\n- *es gibt* + *einen* au masculin (*einen Wald*) ;\n- verbe en 2e position après *Im Hintergrund* : *Im Hintergrund **sieht man**…*" },
      ],
    },
    {
      id: "contes-et-legendes",
      titre: "Es war einmal… Contes, légendes et monstres",
      theme: "Imaginaire, contes et légendes",
      cours: `
## Märchen ou Sage ?
- **das Märchen** (le conte) : une histoire merveilleuse, qui se passe on ne sait où ni quand. Il commence par ***Es war einmal…*** (Il était une fois…). Les plus célèbres ont été recueillis par les **frères Grimm**.
- **die Sage** (la légende) : une histoire extraordinaire liée à un **vrai lieu** : une ville, une montagne, un fleuve.

## Les personnages
| Allemand | Français |
|---|---|
| die Hexe | la sorcière |
| der Zauberer | le magicien |
| die Prinzessin / der Prinz | la princesse / le prince |
| der König / die Königin | le roi / la reine |
| der Zwerg | le nain |
| der Drache | le dragon |
| der Riese | le géant |
| das Gespenst | le fantôme |
| der Wolf | le loup |

Mots utiles : *der Wald* (la forêt), *das Schloss* (le château), *das Gift* (le poison), *böse* (méchant), *arm* (pauvre), *mutig* (courageux), *helfen* (aider : *er hilft*), *treffen* (rencontrer : *er trifft*), *sich verlieben in* (tomber amoureux de).

## Raconter une histoire
- Le début : *Es **war** einmal ein König. Er **hatte** eine Tochter.* (*war* et *hatte* : les passés de *sein* et *haben*, que tu connais déjà).
- Ensuite, on peut raconter au **présent** : *Die Geschichte spielt in Köln.* (L'histoire se passe à Cologne.) – *Eines Tages kommt ein Mann in die Stadt.* (Un jour, un homme arrive en ville.)
- Les mots de temps qui font avancer l'histoire : *eines Tages* (un jour), *plötzlich* (soudain), *nachts* (la nuit), *dann*, *später*, *am Ende* (à la fin).
- Rappel : après ces mots, le verbe reste en **2e position** : ***Plötzlich kommt** der Wolf.*

## Trois histoires à connaître
**Die Heinzelmännchen von Köln** (les petits lutins de Cologne) : *Die Heinzelmännchen sind kleine Zwerge. Sie sind nett und helfen gern. Nachts schlafen die Menschen, und die Heinzelmännchen arbeiten für sie. Aber niemand darf sie sehen!* Un jour, la femme du tailleur, trop curieuse, répand des petits pois dans l'escalier pour les faire tomber et les voir… Les lutins, vexés, partent pour toujours. Depuis, les habitants de Cologne doivent faire leur travail eux-mêmes ! (Poème d'**August Kopisch**, 1836.)

**Der Rattenfänger von Hameln** (le joueur de flûte de Hamelin) : une légende de la ville de **Hameln**, en Basse-Saxe. La ville est envahie par les **rats**. Un homme promet de les chasser contre de l'argent : il joue de la flûte, les rats le suivent et se noient dans la rivière, la **Weser**. Mais les habitants ne le paient pas ! Alors il revient, joue de nouveau… et ce sont les **enfants** qui le suivent et disparaissent. La légende date l'histoire de **1284**. Les Anglais la connaissent aussi : *The Pied Piper of Hamelin*.

**Die Bremer Stadtmusikanten** (les musiciens de Brême, conte des frères Grimm) : un **âne**, un **chien**, un **chat** et un **coq** sont trop vieux, et leurs maîtres veulent se débarrasser d'eux. Ils partent ensemble pour devenir musiciens à **Brême**. Dans la forêt, ils font fuir des voleurs en montant les uns sur les autres et en criant tous ensemble. Devant l'hôtel de ville de Brême, une statue les représente : on dit que toucher les pattes de l'âne porte bonheur.

## Livres et fantasy : vivre dans un monde imaginaire
- ***Die kleine Hexe*** (la petite sorcière) d'**Otfried Preußler** (1957) : elle n'a **que** 127 ans, elle est donc trop jeune pour danser avec les grandes sorcières ! Son ami est le corbeau Abraxas.
- ***Die unendliche Geschichte*** (L'Histoire sans fin) de **Michael Ende** (1979) : Bastian lit un livre… et entre dans le pays imaginaire de **Fantasia** (*Phantásien*).

## Faire des hypothèses
Face à une image mystérieuse : *Das ist **vielleicht** eine Hexe.* (C'est peut-être une sorcière.) – ***Vielleicht** ist das eine Hexe.* (verbe en 2e position !) – *Das ist **sicher** ein Zwerg.* (C'est sûrement un nain.) – ***Ich glaube**, das ist ein Drache.*

> **À retenir** : *das Märchen* (conte, *Es war einmal…*) / *die Sage* (légende liée à un lieu). *die Hexe, der Zauberer, der Zwerg, der Drache, der Riese*. Raconter : *eines Tages, plötzlich, nachts, dann, am Ende* + verbe en 2e position. Hypothèse : *vielleicht, sicher, ich glaube*. Heinzelmännchen (Köln), Rattenfänger (Hameln, 1284), Bremer Stadtmusikanten (Grimm).

### Erreurs fréquentes
- *Es ist einmal…* → ***Es war einmal…***
- *Vielleicht das ist eine Hexe* → ***Vielleicht ist das** eine Hexe.*
- *der Märchen* → ***das** Märchen* (nom en *-chen*, donc neutre).
`,
      textes: {
        musikanten: `**Die Bremer Stadtmusikanten** (version simplifiée)

*Es war einmal ein Esel. Er war alt und müde, und sein Herr wollte ihn nicht mehr. Da sagt der Esel: „Ich gehe nach Bremen. Dort werde ich Musiker!“ Auf dem Weg trifft er einen Hund, eine Katze und einen Hahn. Sie sind auch alt und traurig. „Kommt mit!“, sagt der Esel. Nachts sind die vier Tiere im Wald. Plötzlich sehen sie ein Haus mit Licht. Im Haus essen Räuber* (des voleurs). *Der Hund steigt auf den Esel, die Katze auf den Hund, und der Hahn auf die Katze. Dann machen alle zusammen Musik: „I-ah! Wau wau! Miau! Kikeriki!“ Die Räuber haben Angst und laufen weg. Am Ende bleiben die vier Freunde in dem Haus. Und nach Bremen? Da gehen sie nie!*

(texte d'entraînement, d'après le conte des frères Grimm)`,
      },
      exercices: [
        { type: "qcm", question: "Par quelle formule commence un conte allemand ?", choix: ["Es war einmal…", "Es gibt einmal…", "Es ist einmal…", "Eines Tages war…"], reponse: 0, explication: "***Es war einmal…*** = Il était une fois… (*war* est le passé de *sein*)." },
        { type: "saisie", question: "Comment dit-on « la sorcière » en allemand ? (avec l'article)", reponses: ["die Hexe"], explication: "***die Hexe*** (pluriel : *die Hexen*). *Die kleine Hexe* est aussi un livre célèbre d'Otfried Preußler." },
        { type: "qcm", question: "Dans quelle ville se passe la légende du joueur de flûte (*der Rattenfänger*) ?", choix: ["Brême", "Cologne", "Munich", "Hamelin (Hameln)"], reponse: 3, explication: "***Der Rattenfänger von Hameln*** : la ville de Hameln (Basse-Saxe) est envahie par les rats. Les Heinzelmännchen sont à Cologne, les musiciens partent pour Brême." },
        { type: "vf", question: "Les Heinzelmännchen de Cologne travaillent la nuit pendant que les habitants dorment, mais personne n'a le droit de les voir.", reponse: true, explication: "*Nachts schlafen die Menschen, und die Heinzelmännchen arbeiten für sie. Aber niemand darf sie sehen!* Quand la femme du tailleur veut les voir, ils partent pour toujours." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Vielleicht das ist ein Zwerg.", "Vielleicht ist das ein Zwerg.", "Das vielleicht ist ein Zwerg.", "Vielleicht ein Zwerg das ist."], reponse: 1, explication: "*vielleicht* (peut-être) occupe la 1re place : le verbe vient juste après → ***Vielleicht ist das** ein Zwerg.* On peut aussi dire : *Das ist vielleicht ein Zwerg.*" },
        { type: "saisie", question: "Complète avec le verbe *treffen* (rencontrer) : *Der Esel ___ einen Hund.* (écris seulement le verbe)", reponses: ["trifft"], explication: "*treffen* est un verbe fort : **e → i** à *du* et à *er* → *er **trifft*** (avec deux *f*), *du triffst*." },
        { type: "qcm", texte: "musikanten", question: "Pourquoi l'âne part-il pour Brême ?", choix: ["Il veut devenir musicien.", "Il veut chasser des voleurs.", "Il veut retrouver son maître.", "Il veut voir la mer."], reponse: 0, explication: "*„Ich gehe nach Bremen. Dort werde ich **Musiker**!“* Son maître ne veut plus de lui car il est vieux (*alt und müde*)." },
        { type: "vf", texte: "musikanten", question: "À la fin de l'histoire, les quatre animaux arrivent à Brême.", reponse: false, explication: "*Am Ende bleiben die vier Freunde in dem Haus. Und nach Bremen? Da gehen sie **nie**!* (*nie* = jamais). Ils restent dans la maison des voleurs." },
        { type: "qcm", texte: "musikanten", question: "Comment les animaux font-ils fuir les voleurs ?", choix: ["Ils leur jouent un concert de flûte.", "Le chien les mord.", "Ils montent les uns sur les autres et crient tous ensemble.", "Ils mettent le feu à la maison."], reponse: 2, explication: "*Der Hund steigt auf den Esel, die Katze auf den Hund, und der Hahn auf die Katze. Dann machen alle zusammen Musik.* Les voleurs ont peur : *Die Räuber haben Angst und laufen weg.*" },
        { type: "redaction", question: "Invente un petit conte de 8 phrases au présent (sauf la première). Commence par *Es war einmal…*, présente un personnage gentil et un personnage méchant (*Hexe, Zauberer, Drache, Riese…*), utilise *eines Tages*, *plötzlich* et *am Ende*, et une phrase avec *vielleicht*. Fais attention au verbe en 2e position.", corrige: "**Modèle :**\n\n*Es war einmal eine Prinzessin, Lina. Sie war sehr mutig. Eines Tages geht sie in den Wald. Plötzlich sieht sie ein kleines Haus. Vor dem Haus steht ein Mann mit einem langen Hut. „Ist das vielleicht ein Zauberer?“, denkt Lina. Der Mann ist böse: Er hat Gift und will die Tiere töten. Aber Lina hilft den Tieren, und der Zauberer läuft weg. Am Ende feiern Lina und die Tiere zusammen.*\n\nPoints à vérifier :\n- *Es war einmal…* au début, puis le **présent** ;\n- après *Eines Tages, Plötzlich, Am Ende*, le verbe vient **avant** le sujet : *Eines Tages **geht sie**…* ;\n- *vielleicht* pour l'hypothèse ;\n- verbes forts : *er sieht, er hilft, er läuft* ;\n- majuscule à tous les noms (*Prinzessin, Wald, Haus*)." },
      ],
    },
    {
      id: "kunst-und-gefuehle",
      titre: "Wie geht's ? Les sentiments, les goûts et les artistes",
      theme: "Arts et expression des sentiments",
      cours: `
## Dire comment on va
- ***Wie geht's?*** ou ***Wie geht es dir?*** = Comment ça va ?
- Réponses, de la meilleure à la moins bonne : ***Sehr gut!*** (très bien) – ***Gut, danke.*** (bien, merci) – ***Es geht.*** (ça va, sans plus) – ***Nicht so gut.*** (pas très bien) – ***Schlecht.*** (mal).
- Pour retourner la question : ***Und dir?*** (Et toi ?)

## Dire ce qu'on ressent
On utilise **ich bin** + un adjectif :

| Allemand | Français |
|---|---|
| Ich bin froh. / Ich bin glücklich. | Je suis content(e). / Je suis heureux (heureuse). |
| Ich bin traurig. | Je suis triste. |
| Ich bin müde. | Je suis fatigué(e). |
| Ich bin wütend. | Je suis en colère. |
| Ich bin nervös. | Je suis stressé(e). |

>! **Attention** : la peur se dit avec **haben** : ***Ich habe Angst.*** (J'ai peur.) *Angst* est un nom, il prend une majuscule.

Pour donner la raison, ajoute ***denn*** (car) : *Ich bin froh, **denn** heute ist Samstag.* (Je suis content, car aujourd'hui c'est samedi.)

Des petits mots pour réagir : ***Toll!*** (génial !) – ***Freut mich!*** (ça me fait plaisir ! enchanté !) – ***Wie schade!*** (quel dommage !) – ***Igitt!*** (beurk !). Et pour la surprise : *Ich bin **erstaunt**.* (Je suis étonné(e).)

## Farbe ist Leben ! Les couleurs
| Allemand | Français | Allemand | Français |
|---|---|---|---|
| rot | rouge | gelb | jaune |
| blau | bleu | grün | vert |
| schwarz | noir | weiß | blanc |
| braun | marron | grau | gris |
| orange | orange | rosa | rose |

- Après *ist*, la couleur ne change pas : *Das Pferd ist **blau**.* *Die Sonne ist **gelb**.*
- Comme en anglais, beaucoup de couleurs se ressemblent : *rot / red*, *blau / blue*, *grün / green*, *braun / brown*, *weiß / white*.
- Pour demander : *Welche Farbe hat das Pferd?* (De quelle couleur est le cheval ?) – *Es ist blau.*

## Dire ce qu'on aime
- **verbe + gern** : *Ich male **gern**.* (J'aime peindre.) *Ich singe **gern**.* (J'aime chanter.) *Gern* se place **après le verbe**.
- **Lieblings-** + nom = … préféré(e), en **un seul mot** : *mein **Lieblingslied*** (ma chanson préférée), *meine **Lieblingsfarbe*** (ma couleur préférée), *mein **Lieblingsmaler*** (mon peintre préféré).
- Donner son avis : ***Wie findest du das Bild?*** (Comment trouves-tu le tableau ?) – ***Ich finde es schön / toll / lustig / komisch / langweilig.*** (Je le trouve beau / super / drôle / bizarre / ennuyeux.)
- Décrire une image : ***Auf dem Bild ist ein Pferd. Das Pferd ist blau.*** (Sur le tableau, il y a un cheval. Le cheval est bleu.)

## Quelques artistes des pays germanophones
| Artiste | Qui ? | À retenir |
|---|---|---|
| **Albrecht Dürer** | peintre allemand de la Renaissance | *Der Feldhase* (Le Lièvre), 1502 : un lièvre peint poil par poil |
| **Wolfgang Amadeus Mozart** | compositeur né en 1756 à **Salzbourg** (Autriche) | il compose dès l'âge de 5 ans |
| **Ludwig van Beethoven** | compositeur né en 1770 à **Bonn** (Allemagne) | il continue à composer en devenant sourd |
| **Franz Marc** | peintre allemand (1880-1916) | des animaux aux couleurs vives, comme ses **chevaux bleus** (*Blaues Pferd*, 1911) |
| **Paul Klee** | peintre né en 1879 en Suisse | des tableaux pleins de couleurs et de formes simples |

## Exemple résolu
*Wie findest du das Bild „Blaues Pferd“?* → ***Ich finde es toll! Das Pferd ist blau. Blau ist meine Lieblingsfarbe. Ich bin froh, denn ich male auch gern.***

> **À retenir** : *Wie geht's? – Gut, danke. Und dir?* Sentiments : *Ich bin froh / traurig / müde / wütend / nervös*, mais ***Ich habe Angst***. Réagir : *Toll! Wie schade! Igitt!* Couleurs : *rot, blau, grün, gelb, schwarz, weiß*. Goûts : verbe + ***gern*** ; ***Lieblings-*** + nom en un seul mot ; ***Ich finde es schön.*** Artistes : Dürer (*Der Feldhase*), Mozart (Salzbourg), Beethoven (Bonn), Franz Marc (*Blaues Pferd*), Paul Klee.

### Erreurs fréquentes
- *Ich bin Angst.* → ***Ich habe Angst.***
- *Ich gern male.* → ***Ich male gern.*** (le verbe conjugué reste en 2e position)
- *meine Lieblings Farbe* → ***meine Lieblingsfarbe*** (un seul mot, et le nom garde sa majuscule au début : *Lieblings…*)
- *Ich finde schön.* → ***Ich finde es schön.*** (il faut dire ce qu'on trouve beau : *es*, *das Bild*…)
`,
      exercices: [
        { type: "qcm", question: "Ton correspondant te demande : *Wie geht's?* Que veut-il savoir ?", choix: ["Quel âge tu as.", "Où tu habites.", "Comment tu t'appelles.", "Comment tu vas."], reponse: 3, explication: "*Wie geht's?* (ou *Wie geht es dir?*) = Comment ça va ? On répond par exemple *Gut, danke. Und dir?*" },
        { type: "saisie", question: "Traduis en allemand : « Je suis triste. »", reponses: ["Ich bin traurig."], explication: "**Ich bin traurig.** Les sentiments se disent avec *ich bin* + adjectif (sans majuscule)." },
        { type: "qcm", question: "Léa vient d'avoir 20/20. Que dit-elle ?", choix: ["Ich bin müde.", "Ich bin traurig.", "Ich bin froh!", "Ich habe Angst."], reponse: 2, explication: "*Ich bin froh!* = Je suis contente ! *müde* = fatiguée, *traurig* = triste, *Ich habe Angst* = j'ai peur." },
        { type: "vf", question: "« J'ai peur » se dit *Ich bin Angst*.", reponse: false, explication: "En allemand, on « a » peur, comme en français : ***Ich habe Angst.*** *Angst* est un nom (majuscule)." },
        { type: "saisie", question: "Complète avec un seul mot : « Meine ___ ist Blau. » (Ma couleur préférée est le bleu.)", reponses: ["Lieblingsfarbe"], explication: "***Lieblingsfarbe*** = *Lieblings-* (préféré) + *Farbe* (couleur), en un seul mot avec une majuscule. Ici, *Blau* (le bleu) est le **nom** de la couleur, d'où sa majuscule ; dans *Das Pferd ist blau*, *blau* est un adjectif, sans majuscule." },
        { type: "qcm", question: "Quel peintre allemand est célèbre pour ses chevaux bleus ?", choix: ["Albrecht Dürer", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Franz Marc"], reponse: 3, explication: "**Franz Marc** (1880-1916) a peint *Blaues Pferd* (1911). Dürer est le peintre du *Lièvre* ; Mozart et Beethoven sont des compositeurs." },
        { type: "vf", question: "Mozart est né à Salzbourg, en Autriche.", reponse: true, explication: "Oui : Mozart est né en 1756 à **Salzbourg** (*Salzburg*), en Autriche. Beethoven, lui, est né à Bonn, en Allemagne." },
        { type: "saisie", question: "Traduis en allemand : « Je trouve le tableau beau. » (le tableau = *das Bild*)", reponses: ["Ich finde das Bild schön.", "Das Bild finde ich schön."], explication: "***Ich finde das Bild schön.*** Le verbe *finde* est en 2e position, l'adjectif *schön* à la fin." },
        { type: "qcm", question: "Quelle phrase veut dire « J'aime dessiner » ?", choix: ["Ich zeichne gern.", "Ich gern zeichne.", "Ich zeichnen gern.", "Gern ich zeichne."], reponse: 0, explication: "***Ich zeichne gern.*** Le verbe conjugué (*zeichne*) est en 2e position et *gern* vient après. *zeichnen* est l'infinitif : il ne va pas avec *ich*." },
        { type: "redaction", question: "Écris 6 à 8 phrases en allemand pour présenter ton artiste, ton tableau ou ta chanson préférée : dis ce que c'est (*Mein Lieblings…*), comment tu le trouves (*Ich finde es…*), ce qu'on voit ou ce qu'on entend, ce que tu aimes faire (*… gern*) et comment tu te sens (*Ich bin froh, denn…*).", corrige: "**Modèle :**\n\n*Mein Lieblingsmaler ist Franz Marc. Mein Lieblingsbild ist „Blaues Pferd“. Auf dem Bild ist ein Pferd. Das Pferd ist blau und sehr groß. Ich finde es toll! Blau ist meine Lieblingsfarbe. Ich male auch gern. Ich bin froh, denn das Bild ist so schön.*\n\nPoints à vérifier :\n- *Lieblings-* + nom en un seul mot ;\n- *Ich finde es* + adjectif ;\n- verbe conjugué en 2e position, *gern* après le verbe ;\n- un sentiment avec *ich bin* (ou *ich habe Angst*) et une raison avec *denn* ;\n- majuscules aux noms (*Pferd, Bild, Farbe*)." },
        { type: "qcm", question: "Ton correspondant goûte un plat qu'il trouve dégoûtant. Que dit-il ?", choix: ["Toll!", "Igitt!", "Freut mich!", "Prima!"], reponse: 1, explication: "***Igitt!*** = Beurk ! *Toll!* et *Prima!* veulent dire « génial, super ! » ; *Freut mich!* = « ça me fait plaisir ! »." },
        { type: "qcm", question: "Ta copine ne peut pas venir à ta fête. Que lui réponds-tu ?", choix: ["Wie schade!", "Igitt!", "Toll!", "Guten Appetit!"], reponse: 0, explication: "***Wie schade!*** = Quel dommage ! On l'emploie pour une mauvaise nouvelle qui n'est pas grave. *Toll!* serait vexant ici !" },
        { type: "saisie", question: "Comment dit-on « jaune » en allemand ?", reponses: ["gelb"], explication: "***gelb*** = jaune : *Die Sonne ist gelb.* Les autres couleurs de base : *rot, blau, grün, schwarz, weiß*." },
        { type: "saisie", question: "Traduis en allemand : « Le cheval est bleu. » (le cheval = *das Pferd*)", reponses: ["Das Pferd ist blau."], explication: "***Das Pferd ist blau.*** Après *ist*, la couleur ne prend pas de terminaison et pas de majuscule. Devant le nom, elle prend une terminaison : c'est le titre du tableau de Franz Marc, *Blaues Pferd* (« Cheval bleu », 1911)." },
        { type: "vf", question: "Le peintre Albrecht Dürer a peint un lièvre très réaliste, *Der Feldhase*, en 1502.", reponse: true, explication: "Oui : *Der Feldhase* (1502), peint poil par poil à l'aquarelle et à la gouache, est l'une des œuvres les plus célèbres de **Dürer**, peintre de la Renaissance allemande (Nuremberg)." },
      ],
    },
    {
      id: "advent-advent",
      titre: "Advent, Advent ! Le temps de Noël",
      theme: "Le quotidien : vivre, jouer, apprendre",
      cours: `
## Les mots de Noël
| Allemand | Français |
|---|---|
| Weihnachten / zu Weihnachten | Noël / à Noël |
| der Advent | l'Avent (les quatre semaines avant Noël) |
| der Adventskranz | la couronne de l'Avent |
| die Kerze | la bougie |
| der Weihnachtsbaum (*der Christbaum* dans le sud) | le sapin de Noël |
| das Geschenk, die Geschenke | le cadeau, les cadeaux |
| der Weihnachtsmarkt | le marché de Noël |
| feiern | fêter |

*Frohe Weihnachten!* = Joyeux Noël ! – *Wir feiern Weihnachten mit der Familie.*

## La couronne de l'Avent
Sur la table, il y a une couronne de branches de sapin avec **quatre bougies**. Chaque **dimanche de l'Avent**, on allume une bougie de plus. Les enfants récitent une petite comptine :
*Advent, Advent, ein Lichtlein brennt. Erst eins, dann zwei, dann drei, dann vier, dann steht das Christkind vor der Tür.*
(Avent, Avent, une petite lumière brûle. D'abord une, puis deux, puis trois, puis quatre, puis l'Enfant Jésus est devant la porte.)
L'idée de la couronne vient d'un pasteur de **Hambourg**, Johann Hinrich Wichern, en **1839**.

>! **Écoute les nombres** : *erst eins, dann zwei, dann drei, dann vier*. Avec *dann* (ensuite), tu peux raconter dans l'ordre !

## Les gâteaux de Noël
Chaque région a sa spécialité :
- *der Lebkuchen* : le pain d'épices, spécialité de **Nuremberg** ;
- *die Aachener Printen* : des biscuits durs au miel, d'**Aix-la-Chapelle** (*Aachen*) ;
- *der Christstollen* (ou *Stollen*) : un gros gâteau aux fruits secs couvert de sucre glace, spécialité de **Dresde** ;
- *die Plätzchen* : les petits biscuits qu'on fait **en famille** pendant l'Avent.

## Une recette : les phrases à l'infinitif
Dans une recette, le verbe est à l'**infinitif**, **à la fin** : *Den Teig **ausrollen**.* (Étaler la pâte.) – *Plätzchen **ausstechen**.* (Découper les biscuits à l'emporte-pièce.) – *Zehn Minuten **backen**.* (Faire cuire dix minutes.) C'est comme en français : « Étaler la pâte. »

## Inviter : une pince verbale
*einladen* (inviter) est un verbe séparable : ***Ich lade** dich zu meiner Weihnachtsfeier **ein**.* (Je t'invite à ma fête de Noël.) La particule *ein* va **à la fin**.

## Sur le marché de Noël
Les marchés de Noël (*Weihnachtsmärkte*) sont une tradition des pays germanophones : celui de Nuremberg s'appelle le *Christkindlesmarkt* ; celui de Dresde, le *Striezelmarkt*, est l'un des plus anciens d'Allemagne. On y trouve des décorations, des jouets en bois, des *Lebkuchen*, des marrons grillés…
- *Was kostet der Lebkuchen? – Drei Euro.*
- *Ich möchte ein Geschenk für meine Oma kaufen.*

> **À retenir** : *Weihnachten, der Advent, der Adventskranz, die Kerze, der Weihnachtsbaum (Christbaum), das Geschenk, der Weihnachtsmarkt, feiern*. Spécialités : *Lebkuchen* (Nuremberg), *Printen* (Aix-la-Chapelle), *Stollen* (Dresde). Recette : infinitif à la fin (*den Teig ausrollen*). Invitation : *Ich lade dich … ein.* *Frohe Weihnachten!*

### Erreurs fréquentes
- *Ich einlade dich* → ***Ich lade** dich **ein**.* (la particule va à la fin)
- *der Geschenk* → ***das** Geschenk* (pluriel : *die Geschenke*).
- Confondre *die Kerze* (la bougie) et *die Kirsche* (la cerise) !
`,
      textes: {
        plaetzchen: `**Rezept: Butterplätzchen**

*Zutaten: 250 g Mehl, 125 g Butter, 100 g Zucker, 1 Ei*
*1. Mehl, Butter, Zucker und Ei mischen.*
*2. Den Teig eine Stunde in den Kühlschrank legen.*
*3. Den Teig ausrollen und Plätzchen ausstechen: Sterne, Herzen, Tannenbäume…*
*4. Zehn Minuten bei 180 Grad backen.*
*5. Mit bunten Streuseln dekorieren. Guten Appetit!*

(document d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Combien de bougies y a-t-il sur un *Adventskranz* ?", choix: ["deux", "quatre", "sept", "vingt-quatre"], reponse: 1, explication: "La couronne de l'Avent porte **quatre** bougies : une pour chaque dimanche de l'Avent. (Le calendrier de l'Avent, lui, a 24 cases.)" },
        { type: "saisie", question: "Comment dit-on « la bougie » en allemand ? (avec l'article)", reponses: ["die Kerze"], explication: "***die Kerze*** (pluriel : *die Kerzen*). Ne la confonds pas avec *die Kirsche* (la cerise) ni avec *die Kirche* (l'église) !" },
        { type: "qcm", question: "De quelle ville viennent les *Printen*, des biscuits de Noël au miel ?", choix: ["Aix-la-Chapelle (Aachen)", "Hambourg", "Vienne", "Berlin"], reponse: 0, explication: "Ce sont les ***Aachener** Printen*, d'Aix-la-Chapelle. Le *Lebkuchen* est la spécialité de Nuremberg, le *Stollen* celle de Dresde." },
        { type: "vf", question: "Dans le sud de l'Allemagne, on dit souvent *der Christbaum* pour le sapin de Noël.", reponse: true, explication: "Oui : *der Weihnachtsbaum* (partout) se dit aussi ***der Christbaum*** dans le sud de l'Allemagne et en Autriche." },
        { type: "saisie", question: "Complète la comptine : *Advent, Advent, ein Lichtlein brennt. Erst eins, dann zwei, dann drei, dann ___…* (écris le nombre en lettres)", reponses: ["vier"], explication: "*Erst eins, dann zwei, dann drei, dann **vier**, dann steht das Christkind vor der Tür.* On allume une bougie de plus chaque dimanche : quatre dimanches, quatre bougies." },
        { type: "qcm", question: "Comment dit-on « Je t'invite à ma fête de Noël » ?", choix: ["Ich einlade dich zu meiner Weihnachtsfeier.", "Ich lade dich zu meiner Weihnachtsfeier ein.", "Ich lade ein dich zu meiner Weihnachtsfeier.", "Ich dich einlade zu meiner Weihnachtsfeier."], reponse: 1, explication: "*einladen* est un verbe séparable : le verbe *lade* en 2e position, la particule ***ein*** à la fin → *Ich **lade** dich zu meiner Weihnachtsfeier **ein**.*" },
        { type: "qcm", texte: "plaetzchen", question: "Combien de temps les biscuits cuisent-ils au four ?", choix: ["une heure", "dix minutes", "cent quatre-vingts minutes", "deux heures"], reponse: 1, explication: "*Zehn Minuten bei 180 Grad backen.* = Faire cuire dix minutes à 180 degrés. *Eine Stunde*, c'est le temps de repos de la pâte au réfrigérateur." },
        { type: "vf", texte: "plaetzchen", question: "Dans cette recette, il faut un œuf.", reponse: true, explication: "*Zutaten: … 1 **Ei*** : *das Ei* = l'œuf (pluriel : *die Eier*). *das Mehl* = la farine, *der Zucker* = le sucre." },
        { type: "qcm", texte: "plaetzchen", question: "Quelles formes de biscuits la recette propose-t-elle ?", choix: ["des lapins, des œufs et des fleurs", "des étoiles, des cœurs et des sapins", "des lunes, des soleils et des nuages", "des chats, des chiens et des chevaux"], reponse: 1, explication: "*Sterne, Herzen, Tannenbäume* = des étoiles (*der Stern*), des cœurs (*das Herz*) et des sapins (*der Tannenbaum*)." },
        { type: "redaction", question: "Écris une carte d'invitation (6 phrases en allemand) pour un après-midi de Noël chez toi : invite ton correspondant (*Ich lade dich … ein*), donne la date et l'heure, dis ce que vous allez faire (faire des *Plätzchen*, décorer le sapin…) et ce qu'il y aura à manger. Termine par une formule de Noël.", corrige: "**Modèle :**\n\n*Lieber Felix,*\n\n*ich lade dich zu meiner Weihnachtsfeier ein! Sie ist am Samstag, 19. Dezember, um drei Uhr. Zuerst backen wir Plätzchen: Sterne und Herzen. Dann schmücken wir den Weihnachtsbaum. Es gibt Lebkuchen, Stollen und Kakao. Kommst du?*\n\n*Frohe Weihnachten!*\n*Inès*\n\nPoints à vérifier :\n- *Lieber* (garçon) / *Liebe* (fille) ;\n- pince verbale : *Ich **lade** dich … **ein*** ;\n- date et heure : *am 19. Dezember, um drei Uhr* ;\n- après *Zuerst* et *Dann*, le verbe avant le sujet : *Zuerst **backen wir*** ;\n- *Es gibt* + aliments ; *Frohe Weihnachten!*" },
      ],
    },
    {
      id: "bei-mir-zu-hause",
      titre: "Bei mir zu Hause : la maison et l'appartement",
      theme: "Le quotidien : vivre, jouer, apprendre",
      cours: `
## Où habites-tu ?
- *Ich wohne in einem **Haus**.* (J'habite dans une maison.) – *Ich wohne in einer **Wohnung**.* (J'habite dans un appartement.) Retiens ces deux phrases telles quelles.
- *Ich bin **zu Hause**.* (Je suis à la maison, chez moi.)
- *Wie viele Zimmer hat die Wohnung? – Sie hat drei Zimmer.* En Allemagne, on compte les pièces **sans** la cuisine et la salle de bains.

## Les pièces et les parties de la maison
| Allemand | Français |
|---|---|
| das Haus / die Wohnung | la maison / l'appartement |
| das Zimmer | la pièce, la chambre |
| das Wohnzimmer | le salon, la salle de séjour |
| das Schlafzimmer | la chambre (à coucher) |
| die Küche | la cuisine |
| das Bad | la salle de bains |
| die Toilette (*das Klo*, familier) | les toilettes |
| der Keller / das Dach | la cave / le toit |
| die Treppe | l'escalier |
| die Tür / das Fenster | la porte / la fenêtre |

- Pense à l'anglais : *das Haus / house*, *die Küche / kitchen*, *das Bad / bath*.
- Ce sont des **mots composés** : *schlafen* (dormir) + *das Zimmer* = ***das** Schlafzimmer* ; *wohnen* (habiter) + *das Zimmer* = ***das** Wohnzimmer*. Le genre est celui du **dernier** mot : *das Zimmer*.

## Qui fait quoi, et où ?
On retient les lieux comme des blocs : ***im** Wohnzimmer, **im** Bad, **im** Keller, **in der** Küche*.
- *In der Küche **kocht** mein Vater.* – *Im Bad **dusche** ich.* – *Im Wohnzimmer **sehen** wir **fern**.*
- Après le lieu, le verbe reste en **2e position** : *Im Bad **dusche ich**.*

## Ma chambre
*das Bett* (le lit), *der Tisch* (la table, le bureau), *der Stuhl* (la chaise), *der Schrank* (l'armoire).
- *Mein Zimmer ist klein, aber schön.*
- *In meinem Zimmer **gibt es** ein Bett, einen Tisch und einen Schrank.* (*es gibt* + *einen* au masculin)
- *Links steht mein Bett, rechts ist das Fenster.* (*links, rechts, oben, unten, in der Mitte*)

## Et en Allemagne ?
- Plus d'un ménage sur deux est **locataire** (*Mieter*) : beaucoup de familles vivent dans un appartement, même hors des grandes villes.
- Beaucoup de maisons et d'immeubles ont une **cave** (*der Keller*), où l'on range les vélos et les provisions.
- Dans les vieilles villes, on voit de belles **maisons à colombages** (*das Fachwerkhaus*), avec des poutres en bois sur la façade.

> **À retenir** : *Ich wohne in einem Haus / in einer Wohnung. Ich bin zu Hause.* *das Zimmer, das Wohnzimmer, das Schlafzimmer, die Küche, das Bad, die Toilette, der Keller, die Treppe, das Dach*. Mot composé : genre du **dernier** mot. *In meinem Zimmer gibt es ein Bett und einen Tisch.*

### Erreurs fréquentes
- *der Schlafzimmer* → ***das** Schlafzimmer* (comme *das Zimmer*).
- *Im Bad ich dusche* → *Im Bad **dusche ich**.*
- Croire que *das Bad* a un rapport avec l'anglais *bad* (mauvais) : pense plutôt à *bath* (le bain) !
`,
      textes: {
        paul: `**Pauls Wohnung**

*Hallo! Ich heiße Paul, ich bin elf und wohne in Hamburg. Wir haben kein Haus, wir wohnen in einer Wohnung. Die Wohnung hat drei Zimmer: das Wohnzimmer, das Schlafzimmer von Mama und mein Zimmer. Es gibt auch eine Küche und ein Bad. Mein Zimmer ist klein, und ich teile es mit meiner Schwester Hanna* (teilen = partager). *Links steht mein Bett, rechts steht Hannas Bett. In der Mitte gibt es einen Tisch. Am Abend essen wir in der Küche, dann sehen wir im Wohnzimmer fern. Mein Lieblingsort? Das ist der Balkon!* (der Balkon = le balcon)

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Que veut dire *die Küche* ?", choix: ["la cuisine", "la chambre", "la cave", "le salon"], reponse: 0, explication: "***die Küche*** = la cuisine (en anglais : *the kitchen*). La chambre = *das Schlafzimmer*, la cave = *der Keller*, le salon = *das Wohnzimmer*." },
        { type: "saisie", question: "Comment dit-on « l'appartement » en allemand ? (avec l'article)", reponses: ["die Wohnung"], explication: "***die Wohnung*** (pluriel : *die Wohnungen*), de *wohnen* (habiter). La maison = *das Haus*." },
        { type: "qcm", question: "Quel est l'article de *Schlafzimmer* (la chambre à coucher) ?", choix: ["der", "die", "das", "den"], reponse: 2, explication: "***das** Schlafzimmer* : dans un mot composé, le genre est celui du **dernier** mot, *das Zimmer*. De même : *das Wohnzimmer*." },
        { type: "vf", question: "*das Bad* veut dire « le mauvais », comme l'anglais *bad*.", reponse: false, explication: "***das Bad*** = la salle de bains (pense à l'anglais *bath*, le bain). C'est un faux ami avec l'anglais *bad* !" },
        { type: "qcm", question: "Dans quelle pièce se trouve la douche ?", choix: ["im Wohnzimmer", "im Bad", "im Keller", "in der Küche"], reponse: 1, explication: "La douche est dans la salle de bains : ***im Bad***. *Im Bad dusche ich.* (Dans la salle de bains, je me douche.)" },
        { type: "saisie", question: "Traduis en allemand : « J'habite dans un appartement. »", reponses: ["Ich wohne in einer Wohnung."], explication: "***Ich wohne in einer Wohnung.*** Retiens le bloc *in einer Wohnung* (et *in einem Haus* pour une maison)." },
        { type: "qcm", texte: "paul", question: "Où Paul habite-t-il ?", choix: ["dans une maison, à Hambourg", "dans un appartement, à Hambourg", "dans une maison, à Berlin", "dans un appartement, à Munich"], reponse: 1, explication: "*Ich wohne in **Hamburg**. Wir haben **kein Haus**, wir wohnen in einer **Wohnung**.*" },
        { type: "vf", texte: "paul", question: "Paul a une chambre pour lui tout seul.", reponse: false, explication: "*Mein Zimmer ist klein, und ich **teile** es mit meiner Schwester Hanna* : il partage sa chambre avec sa sœur. *Hannas Bett* = le lit de Hanna." },
        { type: "saisie", texte: "paul", question: "Où la famille mange-t-elle le soir ? Recopie les trois mots allemands du texte.", reponses: ["in der Küche"], explication: "*Am Abend essen wir **in der Küche***. Ensuite, ils regardent la télévision au salon : *im Wohnzimmer*." },
        { type: "redaction", question: "Décris ton logement (vrai ou imaginaire) en 6 à 8 phrases en allemand : maison ou appartement, la ville, les pièces, ce que vous faites dans deux pièces, ta chambre (avec *es gibt*, *links*, *rechts*) et ton endroit préféré.", corrige: "**Modèle :**\n\n*Ich wohne mit meinen Eltern in einem Haus in Rennes. Das Haus hat vier Zimmer. Es gibt auch eine Küche, ein Bad und einen Keller. In der Küche kocht mein Vater. Im Wohnzimmer spielen wir Karten. Mein Zimmer ist klein, aber schön. Links steht mein Bett, rechts ist das Fenster. In meinem Zimmer gibt es auch einen Tisch und einen Schrank. Mein Lieblingsort ist mein Zimmer!*\n\nPoints à vérifier :\n- *in einem Haus / in einer Wohnung* ;\n- *das Zimmer, das Wohnzimmer, die Küche, das Bad* : article juste et majuscule ;\n- verbe en 2e position après le lieu : *In der Küche **kocht** mein Vater* ;\n- *es gibt* + ***einen*** au masculin (*einen Tisch, einen Keller*)." },
      ],
    },
  ],
};
