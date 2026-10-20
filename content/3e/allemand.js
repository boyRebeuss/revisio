export default {
  chapitres: [
    {
      id: "parfait-verbes-forts-sein",
      titre: "Raconter au parfait : verbes forts, haben ou sein",
      theme: "Outils de la langue",
      cours: `
## Le parfait (das Perfekt) : le temps de la conversation
Quand un Allemand raconte à l'oral ou dans un message ce qu'il a fait, il utilise surtout le **parfait**. Il se forme en deux morceaux, comme le passé composé français :

**auxiliaire (haben ou sein) conjugué en 2e position + participe passé tout à la fin**

- *Ich **habe** gestern einen Film **gesehen**.* (J'ai vu un film hier.)
- *Wir **sind** am Samstag nach Köln **gefahren**.* (Nous sommes allés à Cologne samedi.)

C'est la **pince verbale** (la « parenthèse ») : tout le reste de la phrase se glisse entre l'auxiliaire et le participe.

## Fabriquer le participe passé
### Verbes faibles (réguliers) : ge- + radical + -t
*spielen* → **gespielt**, *machen* → **gemacht**, *kaufen* → **gekauft**, *arbeiten* → **gearbeitet** (on ajoute un *e* après *-t* ou *-d* pour pouvoir prononcer), *regnen* → **geregnet**.

### Verbes forts (irréguliers) : ge- + radical (souvent modifié) + -en
Il faut les **apprendre par cœur**, comme les verbes irréguliers anglais.

| Infinitif | Participe | Sens |
|---|---|---|
| sehen | gesehen | voir |
| lesen | gelesen | lire |
| essen | gegessen | manger |
| geben | gegeben | donner |
| schlafen | geschlafen | dormir |
| trinken | getrunken | boire |
| finden | gefunden | trouver |
| schreiben | geschrieben | écrire |
| nehmen | genommen | prendre |
| sprechen | gesprochen | parler |
| treffen | getroffen | rencontrer |
| helfen | geholfen | aider |

### Verbes mixtes : ge- + radical modifié + -t
*bringen* → **gebracht** (apporter), *denken* → **gedacht** (penser), *kennen* → **gekannt** (connaître), *wissen* → **gewusst** (savoir).

### Pas de ge- !
- Verbes en **-ieren** : *telefonieren* → **telefoniert**, *fotografieren* → **fotografiert**, *studieren* → **studiert**.
- Verbes à préfixe **inséparable** (**be-, ver-, er-, ent-, emp-, ge-, zer-**) : *besuchen* → **besucht**, *bekommen* → **bekommen** (recevoir), *verlieren* → **verloren** (perdre), *vergessen* → **vergessen** (oublier), *erzählen* → **erzählt** (raconter), *gewinnen* → **gewonnen** (gagner).

### Verbes à particule séparable : le ge- se glisse au milieu
*einkaufen* → ein**ge**kauft, *anrufen* → an**ge**rufen (téléphoner à), *fernsehen* → fern**ge**sehen, *aufstehen* → auf**ge**standen, *ankommen* → an**ge**kommen.

## haben ou sein ?
La plupart des verbes se conjuguent avec **haben**. On prend **sein** avec :
- les verbes de **déplacement** d'un lieu à un autre : *gehen* → ist **gegangen**, *fahren* → ist **gefahren**, *fliegen* → ist **geflogen**, *kommen* → ist **gekommen**, *laufen* → ist **gelaufen**, *ankommen* → ist **angekommen** ;
- les verbes de **changement d'état** : *aufstehen* → ist **aufgestanden**, *einschlafen* → ist **eingeschlafen**, *werden* → ist **geworden** (devenir), *sterben* → ist **gestorben** (mourir) ;
- et trois verbes à connaître : *sein* → ist **gewesen**, *bleiben* → ist **geblieben** (rester), *passieren* → ist **passiert** (se passer).

>! **Exemple résolu** : mets au parfait *Am Sonntag fahre ich zu Oma und esse Kuchen.*
>! 1. *fahren* = déplacement → **sein** ; participe fort **gefahren**.
>! 2. *essen* → **haben** ; participe **gegessen**.
>! 3. *Am Sonntag* est en tête → inversion : *Am Sonntag **bin** ich zu Oma **gefahren** und **habe** Kuchen **gegessen**.*

>! **Attention** : *fahren* prend *haben* s'il a un complément d'objet (on conduit quelque chose) : *Papa **hat** das Auto in die Garage **gefahren**.* Mais *Wir **sind** nach Berlin **gefahren**.*

## Le parfait dans une subordonnée
Dans une subordonnée (*weil, dass, wenn…*), l'**auxiliaire** passe tout à la fin, après le participe :
- *Ich bin müde, weil ich spät ins Bett **gegangen bin**.*
- *Er sagt, dass er den Film schon **gesehen hat**.*

> **À retenir** : parfait = **haben / sein en 2e position + participe à la fin**. Faibles : *ge-…-t* ; forts : *ge-…-en* (à apprendre) ; pas de *ge-* pour *-ieren* et *be-, ver-, er-…* ; séparables : *ein**ge**kauft*. **sein** pour les déplacements, les changements d'état, et *sein, bleiben, passieren*.

### Erreurs fréquentes
- *Ich habe nach Berlin gefahren* → *Ich **bin** nach Berlin gefahren* (déplacement).
- *gesehent, getrinkt* → **gesehen**, **getrunken** (verbes forts).
- *geaufstanden, gebesucht* → **aufgestanden**, **besucht**.
- *Ich habe gegessen eine Pizza* → *Ich habe eine Pizza **gegessen*** (participe à la fin).
`,
      exercices: [
        { type: "qcm", question: "Complète : « Letzten Sommer ___ wir nach Österreich gefahren. »", choix: ["haben", "seid", "hat", "sind"], reponse: 3, explication: "*fahren* exprime un **déplacement** : auxiliaire **sein**. Avec *wir* : **sind**. *seid* va avec *ihr* ; *haben/hat* ne conviennent pas pour un déplacement." },
        { type: "saisie", question: "Donne le participe passé de **trinken** (boire).", reponses: ["getrunken"], explication: "*trinken* est un verbe **fort** : **ge-** + radical modifié (*i* → *u*) + **-en** → **getrunken** : *Ich habe Wasser getrunken.*" },
        { type: "qcm", question: "Quel est le participe passé de **aufstehen** (se lever) ?", choix: ["geaufstanden", "aufgesteht", "aufgestanden", "aufstehen"], reponse: 2, explication: "*aufstehen* est un verbe à particule **séparable** : le *ge-* se place **entre** la particule et le verbe → auf**ge**standen (participe fort). Et l'auxiliaire est *sein* : *Ich bin um 7 Uhr aufgestanden.*" },
        { type: "vf", question: "Le participe passé de *besuchen* (rendre visite) est *gebesucht*.", reponse: false, explication: "*besuchen* a le préfixe **inséparable** *be-* : pas de *ge-*. On dit **besucht** : *Ich habe meine Tante besucht.*" },
        { type: "saisie", question: "Complète avec l'auxiliaire qui convient : « Wir ___ im Restaurant Pizza gegessen. »", reponses: ["haben", "wir haben"], explication: "*essen* (manger) n'est ni un déplacement ni un changement d'état : auxiliaire **haben** → *Wir **haben** Pizza gegessen.*" },
        { type: "saisie", question: "Mets au parfait : « Ich bleibe zu Hause. »", reponses: ["Ich bin zu Hause geblieben.", "Ich bin zuhause geblieben."], explication: "*bleiben* (rester) fait partie des verbes à connaître qui prennent **sein**, avec un participe fort : *Ich **bin** zu Hause **geblieben**.*" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Gestern ich bin ins Kino gegangen.", "Gestern habe ich ins Kino gegangen.", "Gestern bin ich gegangen ins Kino.", "Gestern bin ich ins Kino gegangen."], reponse: 3, explication: "*Gestern* en tête → **inversion** (verbe en 2e position, puis sujet) ; *gehen* = déplacement → **sein** ; le participe **gegangen** va **à la fin**." },
        { type: "saisie", question: "Donne le participe passé de **telefonieren** (téléphoner).", reponses: ["telefoniert"], explication: "Les verbes en **-ieren** ne prennent jamais *ge-* : **telefoniert** → *Ich habe mit meiner Freundin telefoniert.*" },
        { type: "qcm", question: "Complète la subordonnée : « Ich bin müde, weil ich gestern lange ___. »", choix: ["gespielt habe", "habe gespielt", "gespielt", "spielen habe"], reponse: 0, explication: "Dans une subordonnée avec *weil*, le **verbe conjugué** (ici l'auxiliaire *habe*) va tout à la fin, **après** le participe : *…, weil ich gestern lange **gespielt habe**.*" },
        { type: "qcm", question: "**Compréhension.** « *Am Wochenende bin ich mit meiner Klasse nach München gefahren. Wir haben das Deutsche Museum besucht und viele Fotos gemacht. Am Abend sind wir in eine Pizzeria gegangen. Leider habe ich mein Handy im Zug vergessen!* » Que s'est-il passé à la fin ?", choix: ["L'élève a raté le train.", "L'élève a oublié son portable dans le train.", "L'élève a perdu ses photos au musée.", "L'élève a mangé au musée."], reponse: 1, explication: "*Leider habe ich mein Handy im Zug **vergessen*** = Malheureusement, j'ai **oublié** mon portable dans le train. *vergessen* est à la fois l'infinitif et le participe (préfixe *ver-*, pas de *ge-*)." },
        { type: "redaction", question: "**Niveau fin de 3e.** Raconte ton dernier week-end ou une journée de vacances à ton correspondant (8 à 10 phrases, au parfait). Utilise au moins trois verbes avec *sein* et trois verbes forts, un verbe à particule et des mots pour organiser le récit (*zuerst, dann, danach, am Abend, zum Schluss*).", corrige: "**Modèle :**\n\n*Hallo Lukas,\nletztes Wochenende war super! Am Samstag bin ich früh aufgestanden, denn wir sind ans Meer gefahren. Zuerst sind wir am Strand spazieren gegangen. Dann habe ich ein Buch gelesen und meine Schwester hat Fotos gemacht. Mittags haben wir Fisch gegessen und Limonade getrunken. Danach sind wir ins Wasser gegangen, aber das Wasser war kalt! Am Abend haben wir unsere Großeltern besucht. Am Sonntag bin ich zu Hause geblieben und habe ferngesehen. Zum Schluss habe ich meine Hausaufgaben gemacht.\nUnd du? Was hast du gemacht?\nBis bald,\nInès*\n\nPoints à vérifier :\n- **sein** avec *aufstehen, fahren, gehen, bleiben* ; **haben** avec les autres ;\n- participes forts : *gefahren, gegangen, gelesen, gegessen, getrunken, geblieben, ferngesehen* ;\n- particules : *auf**ge**standen, fern**ge**sehen* ; pas de *ge-* pour *besucht* ;\n- inversion après *Am Samstag, Zuerst, Dann, Mittags, Danach, Am Abend, Zum Schluss* ;\n- participe toujours **à la fin** de la phrase." },
      ],
    },
    {
      id: "preterit-modaux-recit",
      titre: "Le prétérit : sein, haben, les modaux et le récit",
      theme: "Outils de la langue",
      cours: `
## À quoi sert le prétérit (das Präteritum) ?
L'allemand a deux temps principaux pour le passé :
- le **parfait** à l'oral et dans les messages : *Ich habe Fußball gespielt.* ;
- le **prétérit** à l'écrit, dans les **récits**, les contes, les articles, les biographies : *Es **war** einmal ein König…*

Mais même à l'oral, on emploie presque toujours le prétérit pour **sein**, **haben** et les **verbes de modalité** : on dit *Ich **war** krank* plutôt que *Ich bin krank gewesen*, et *Ich **musste** lernen* plutôt que *Ich habe lernen müssen*.

## sein, haben, werden
| | sein | haben | werden |
|---|---|---|---|
| ich | war | hatte | wurde |
| du | warst | hattest | wurdest |
| er / sie / es | war | hatte | wurde |
| wir | waren | hatten | wurden |
| ihr | wart | hattet | wurdet |
| sie / Sie | waren | hatten | wurden |

## Les verbes de modalité au prétérit
On prend le radical **sans Umlaut** et on ajoute **-te** :

| Infinitif | ich / er | wir / sie | Sens |
|---|---|---|---|
| können | konnte | konnten | pouvais, savais faire |
| müssen | musste | mussten | devais |
| dürfen | durfte | durften | avais le droit |
| wollen | wollte | wollten | voulais |
| sollen | sollte | sollten | étais censé |
| mögen | mochte | mochten | aimais |

Terminaisons : ich konnte, du konnte**st**, er konnte, wir konnte**n**, ihr konnte**t**, sie konnte**n**.

>! **Attention, sollte a deux sens** : c'est le prétérit de *sollen* (*Ich sollte um 8 Uhr zu Hause sein* = j'étais censé être à la maison à 8 h), mais c'est aussi la forme du **subjonctif II** (le conditionnel) : *Du **solltest** mehr schlafen.* = Tu **devrais** dormir plus. Pour donner un conseil, c'est ce second sens qu'on emploie : *Man sollte…* = on devrait…

>! **Attention** : *ich möchte* (je voudrais) n'a pas de prétérit à lui : pour dire « je voulais », on emploie **wollte** : *Als Kind wollte ich Astronautin werden.*

- *Gestern **konnte** ich nicht kommen, ich **musste** für die Klassenarbeit lernen.*
- *Als Kind **durfte** ich nicht allein in die Stadt gehen.*

## Les autres verbes au prétérit (pour lire et raconter)
### Verbes faibles : radical + -te
*spielen* → ich spiel**te**, du spiel**test**, er spiel**te**, wir spiel**ten**, ihr spiel**tet**, sie spiel**ten**.
Avec un radical en *-t* ou *-d* : *arbeiten* → er arbeit**ete**.

### Verbes forts : radical modifié, sans terminaison à ich et er
*gehen* → ich **ging**, du ging**st**, er **ging**, wir ging**en**, ihr ging**t**, sie ging**en**.

| Infinitif | Prétérit (er) | Infinitif | Prétérit (er) |
|---|---|---|---|
| gehen | ging | kommen | kam |
| sehen | sah | fahren | fuhr |
| geben (es gibt) | gab (es gab) | finden | fand |
| essen | aß | trinken | trank |
| schreiben | schrieb | lesen | las |
| sprechen | sprach | nehmen | nahm |
| laufen | lief | bleiben | blieb |
| sterben | starb | fressen (manger, pour un animal) | fraß |

Verbes mixtes : *denken* → **dachte**, *bringen* → **brachte**, *wissen* → **wusste**, *kennen* → **kannte**.

>! **Méthode pour lire un récit** : si tu ne reconnais pas un verbe au prétérit, cherche l'infinitif dans la liste des verbes forts (souvent la 3e colonne : *gehen – ging – gegangen*). Le sens est celui du passé simple ou de l'imparfait français : *Er ging nach Hause* = il rentra / il rentrait chez lui.

## Exemple : une biographie
*Albert Einstein **wurde** 1879 in Ulm geboren. Als Kind **war** er ruhig und **sprach** wenig. Später **studierte** er in Zürich. Für seine Arbeiten **bekam** er den Nobelpreis für Physik. 1933 **ging** er in die USA, wo er 1955 **starb**.*

> **À retenir** : à l'oral, prétérit pour **war, hatte** et les modaux (**konnte, musste, durfte, wollte, sollte, mochte** : pas d'Umlaut). À l'écrit (récits, biographies) : faibles en **-te**, forts à radical modifié (*ging, kam, sah, fuhr*). *ich* et *er* ont la **même forme**.

### Erreurs fréquentes
- *ich könnte* (je pourrais) au lieu de *ich **konnte*** (je pouvais) : l'Umlaut change le sens !
- *er gingte, er kommte* → *er **ging***, *er **kam*** (verbes forts : pas de *-te*).
- *ich möchtete* → *ich **wollte***.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *müssen* au prétérit : « Gestern ___ ich lange lernen. »", reponses: ["musste", "ich musste"], explication: "Prétérit des modaux : radical **sans Umlaut** + **-te** → *ich **musste***. *Gestern* en tête : inversion, le sujet *ich* vient après le verbe." },
        { type: "qcm", question: "Que signifie « *Ich konnte nicht schlafen* » ?", choix: ["Je ne pourrais pas dormir.", "Je ne voulais pas dormir.", "Je ne pouvais pas dormir.", "Je ne dois pas dormir."], reponse: 2, explication: "*konnte* (sans Umlaut) est le **prétérit** de *können* : « je ne pouvais pas / je n'ai pas pu ». *könnte* (avec Umlaut) voudrait dire « je pourrais »." },
        { type: "saisie", question: "Complète avec *sein* au prétérit : « Wo ___ ihr am Samstag? »", reponses: ["wart"], explication: "*sein* au prétérit avec *ihr* : **wart** (*ihr wart*). Ne confonds pas avec le présent *ihr seid*." },
        { type: "qcm", question: "Quel est le prétérit de *gehen* à la 3e personne (*er*) ?", choix: ["gehte", "ging", "gang", "gegangen"], reponse: 1, explication: "*gehen* est un verbe **fort** : *gehen – **ging** – gegangen*. *gegangen* est le participe passé (pour le parfait)." },
        { type: "vf", question: "Pour dire « je voulais » au passé, on dit *ich wollte*.", reponse: true, explication: "Oui : **wollte** est le prétérit de *wollen*. *möchte* n'a pas de prétérit propre ; « je voulais » se dit toujours *ich wollte*." },
        { type: "saisie", question: "Mets au prétérit : « Wir dürfen nicht ins Schwimmbad gehen. »", reponses: ["Wir durften nicht ins Schwimmbad gehen."], explication: "*dürfen* au prétérit : radical sans Umlaut + *-te* + terminaison *-n* pour *wir* → **durften**. L'infinitif *gehen* reste à la fin." },
        { type: "qcm", question: "Dans un conte, tu lis : « *Der Wolf fraß die Großmutter.* » *fraß* est le prétérit de quel verbe ?", choix: ["fragen (demander)", "finden (trouver)", "fahren (aller en véhicule)", "fressen (dévorer, pour un animal)"], reponse: 3, explication: "*fressen – fraß – gefressen* : c'est le verbe « manger » pour les animaux (dévorer). Comme *essen – aß – gegessen*." },
        { type: "saisie", question: "Complète avec *haben* au prétérit : « Als Kind ___ Lena einen Hund. »", reponses: ["hatte"], explication: "*haben* au prétérit : *ich hatte, du hattest, er/sie **hatte***. Après *Als Kind* (en tête), le verbe vient en 2e position." },
        { type: "qcm", question: "**Compréhension.** « *Mozart wurde 1756 in Salzburg geboren. Schon mit fünf Jahren konnte er Klavier spielen und komponierte kleine Stücke. Mit seinem Vater reiste er durch ganz Europa. Er starb 1791 in Wien.* » Quelle affirmation est vraie ?", choix: ["Mozart a appris le piano à l'âge adulte.", "Mozart est né à Vienne.", "Mozart a voyagé en Europe avec son père.", "Mozart est mort à Salzbourg."], reponse: 2, explication: "*Mit seinem Vater **reiste** er durch ganz Europa* = il voyagea avec son père à travers toute l'Europe. Il est né à Salzbourg (*in Salzburg geboren*), mort à Vienne (*starb in Wien*) et jouait du piano dès 5 ans (*mit fünf Jahren konnte er Klavier spielen*)." },
        { type: "redaction", question: "**Niveau fin de 3e.** « Quand j'étais petit(e)… » Écris 7 à 8 phrases sur ton enfance, au prétérit : ce que tu pouvais, devais, avais le droit ou voulais faire, ce que tu avais, comment tu étais. Commence par *Als ich klein war, …*", corrige: "**Modèle :**\n\n*Als ich klein war, wohnte ich in Nantes. Ich hatte einen kleinen Hund, er hieß Filou. Ich war oft im Garten und spielte mit ihm. Ich konnte schon mit vier Jahren Fahrrad fahren, aber ich konnte nicht schwimmen. Ich durfte nicht allein in den Park gehen und ich musste um acht Uhr ins Bett gehen. Das fand ich blöd! Ich wollte Tierärztin werden, denn ich mochte Tiere sehr.*\n\nPoints à vérifier :\n- *Als ich klein war,* : subordonnée (verbe *war* à la fin), puis **verbe + sujet** dans la principale (*wohnte ich*) ;\n- *war, hatte* ; modaux sans Umlaut : *konnte, durfte, musste, wollte, mochte* ;\n- l'infinitif à la fin après un modal (*…Fahrrad fahren*, *…ins Bett gehen*) ;\n- verbes faibles en *-te* (*wohnte, spielte*), forts sans *-te* (*hieß, fand*)." },
      ],
    },
    {
      id: "subordonnees-weil-dass-wenn",
      titre: "Les subordonnées : weil, dass, wenn, als, ob, obwohl",
      theme: "Outils de la langue",
      cours: `
## La règle d'or : le verbe conjugué à la fin
Dans une **subordonnée** (une proposition qui commence par une conjonction comme *weil*, *dass*, *wenn*), le **verbe conjugué** se place **tout à la fin**. Une **virgule** sépare toujours la subordonnée de la principale.

- Principale : *Ich bleibe zu Hause. Ich **bin** krank.*
- Avec *weil* : *Ich bleibe zu Hause, **weil** ich krank **bin**.*

## Les conjonctions à connaître
| Conjonction | Sens | Exemple |
|---|---|---|
| **weil** | parce que | *Ich lerne Deutsch, weil ich nach Berlin fahren möchte.* |
| **dass** | que | *Ich finde, dass Deutsch nicht so schwer ist.* |
| **wenn** | si (condition) ; quand (chaque fois, ou au futur) | *Wenn es regnet, bleibe ich zu Hause.* |
| **als** | quand (une seule fois dans le passé) | *Als ich zehn war, bin ich nach Lyon gezogen.* |
| **ob** | si (question indirecte) | *Ich weiß nicht, ob er kommt.* |
| **obwohl** | bien que, même si | *Ich gehe raus, obwohl es kalt ist.* |

Les mots interrogatifs (*wo, wann, warum, wie, was, wer…*) introduisent aussi des subordonnées (questions indirectes) : *Kannst du mir sagen, **wo** der Bahnhof **ist**?*

## Que devient le verbe ?
- Verbe simple : *…, weil ich müde **bin**.*
- Verbe de modalité : l'infinitif juste avant, le modal tout à la fin : *…, weil ich lernen **muss**.*
- Parfait : participe puis auxiliaire : *…, weil ich den Bus verpasst **habe**.*
- Verbe à particule : la particule se **recolle** au verbe ! *Ich stehe früh auf.* → *…, weil ich früh **aufstehe**.*

## Subordonnée en tête : verbe, virgule, verbe
Si la subordonnée est **en première position**, elle compte comme 1er élément : le verbe de la principale vient **juste après la virgule**, puis le sujet.

*Wenn ich Zeit **habe**, **spiele ich** Tennis.* → on entend « verbe, virgule, verbe ».

>! **Exemple résolu** : relie avec *weil* : *Ich gehe nicht ins Kino. Ich habe kein Geld.*
>! 1. *weil* introduit la cause : *weil ich kein Geld habe*.
>! 2. Le verbe *habe* passe à la fin.
>! 3. Résultat : *Ich gehe nicht ins Kino, **weil** ich kein Geld **habe**.* Et en tête : ***Weil** ich kein Geld **habe**, **gehe ich** nicht ins Kino.*

## weil ou denn ? wenn ou als ? wenn ou ob ?
- **weil** et **denn** veulent tous deux dire « parce que / car », mais après *denn*, l'ordre est **normal** (verbe en 2e position) : *…, **denn** ich **bin** krank.* / *…, **weil** ich krank **bin**.*
- **als** = une seule fois dans le passé (*Als ich in Berlin war, …*) ; **wenn** = chaque fois, ou au présent/futur (*Wenn ich in Berlin bin, …* ; *Immer wenn ich…*).
- **wenn** = si (condition : *Wenn du willst, …*) ; **ob** = si (dans une question indirecte, après *ich weiß nicht, er fragt…*) : *Er fragt, **ob** ich mitkomme.*

> **À retenir** : *weil, dass, wenn, als, ob, obwohl* + **verbe conjugué à la fin** ; virgule obligatoire. Particule recollée (*aufstehe*). Subordonnée en tête → **verbe, virgule, verbe** (*Wenn ich Zeit habe, spiele ich…*). *denn* : pas de verbe à la fin.

### Erreurs fréquentes
- *…, weil ich bin krank* → *…, weil ich krank **bin***.
- *Wenn ich Zeit habe, ich spiele Tennis* → *…, **spiele ich** Tennis*.
- *Als ich Zeit habe…* pour une habitude → *Wenn…* ; *Wenn ich klein war* → ***Als** ich klein war*.
- *…, weil ich früh auf stehe* → *…, weil ich früh **aufstehe***.
`,
      exercices: [
        { type: "qcm", question: "Complète : « Ich trinke Wasser, weil ich Durst ___. »", choix: ["habe", "bin", "haben", "hast"], reponse: 0, explication: "On dit *Durst **haben*** (avoir soif). Avec *ich* : **habe**, placé à la fin de la subordonnée avec *weil*." },
        { type: "saisie", question: "Relie avec *weil* : « Ich bin müde. Ich bin spät ins Bett gegangen. » (Écris la phrase entière.)", reponses: ["Ich bin müde, weil ich spät ins Bett gegangen bin.", "Weil ich spät ins Bett gegangen bin, bin ich müde."], explication: "Au parfait dans une subordonnée : participe puis **auxiliaire tout à la fin** → *…, weil ich spät ins Bett **gegangen bin**.* N'oublie pas la virgule devant *weil*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Wenn es regnet, ich bleibe zu Hause.", "Wenn es regnet, ich zu Hause bleibe.", "Wenn regnet es, bleibe ich zu Hause.", "Wenn es regnet, bleibe ich zu Hause."], reponse: 3, explication: "La subordonnée *Wenn es regnet* (verbe à la fin) est en tête : elle compte comme 1er élément, donc **verbe, virgule, verbe** : *…, **bleibe ich** zu Hause.*" },
        { type: "qcm", question: "Complète : « ___ ich sechs Jahre alt war, habe ich schwimmen gelernt. »", choix: ["Wenn", "Ob", "Dass", "Als"], reponse: 3, explication: "Une seule fois dans le passé → **als** : *Als ich sechs Jahre alt war, …* *wenn* s'emploie pour une habitude ou le présent/futur ; *ob* et *dass* n'ont pas ce sens." },
        { type: "saisie", question: "Complète avec *ob* ou *wenn* : « Ich weiß nicht, ___ Paul morgen kommt. »", reponses: ["ob"], explication: "Après *ich weiß nicht* (question indirecte), « si » se dit **ob** : *Ich weiß nicht, ob Paul morgen kommt.* *wenn* exprime une condition." },
        { type: "vf", question: "« *Ich lerne viel, denn ich will gute Noten haben* » est correct : après *denn*, le verbe ne va pas à la fin.", reponse: true, explication: "Oui : *denn* ne change pas l'ordre des mots (verbe en 2e position). Avec *weil*, on aurait : *…, weil ich gute Noten haben **will**.*" },
        { type: "saisie", question: "Transforme avec *dass* : « Ich finde: Der Film ist spannend. » → « Ich finde, dass … »", reponses: ["Ich finde, dass der Film spannend ist.", "dass der Film spannend ist", "der Film spannend ist"], explication: "Avec *dass*, le verbe *ist* passe à la fin : *Ich finde, dass der Film spannend **ist**.*" },
        { type: "saisie", question: "Relie avec *weil* (attention au verbe à particule) : « Ich bin müde. Ich stehe jeden Tag um sechs Uhr auf. »", reponses: ["Ich bin müde, weil ich jeden Tag um sechs Uhr aufstehe.", "Ich bin müde, weil ich jeden Tag um 6 Uhr aufstehe.", "Weil ich jeden Tag um sechs Uhr aufstehe, bin ich müde.", "Weil ich jeden Tag um 6 Uhr aufstehe, bin ich müde."], explication: "Dans la subordonnée, le verbe va à la fin et la particule se **recolle** : *…, weil ich jeden Tag um sechs Uhr **aufstehe**.*" },
        { type: "qcm", question: "Complète : « Ich gehe joggen, ___ es sehr kalt ist. » (Je vais courir bien qu'il fasse très froid.)", choix: ["weil", "obwohl", "denn", "ob"], reponse: 1, explication: "**obwohl** = bien que, même si (opposition) : *Ich gehe joggen, **obwohl** es sehr kalt **ist**.* *weil* et *denn* donneraient une cause illogique." },
        { type: "qcm", question: "**Compréhension.** « *Wenn ich nach der Schule nach Hause komme, mache ich zuerst meine Hausaufgaben. Meine Eltern sagen, dass das wichtig ist. Ich finde das langweilig, aber ich mache es, weil ich am Abend frei sein will.* » Pourquoi l'élève fait-il ses devoirs tout de suite ?", choix: ["Parce qu'il trouve ça amusant.", "Parce qu'il n'a pas d'école le soir.", "Parce que ses parents l'aident.", "Parce qu'il veut être libre le soir."], reponse: 3, explication: "*…, weil ich am Abend frei sein will* = parce que je veux être libre le soir. Il trouve les devoirs ennuyeux (*langweilig*) ; ses parents disent seulement que c'est important." },
        { type: "redaction", question: "**Niveau fin de 3e.** Ton correspondant te demande : *Warum lernst du Deutsch?* Réponds en 6 à 8 phrases. Utilise au moins une fois *weil*, *dass*, *wenn* et *obwohl*, et une subordonnée placée en tête de phrase.", corrige: "**Modèle :**\n\n*Ich lerne Deutsch, weil Deutschland unser Nachbarland ist. Ich finde, dass Deutsch eine schöne Sprache ist, obwohl die Grammatik manchmal schwer ist. Meine Mutter sagt, dass man mit Deutsch später leichter Arbeit findet. Wenn ich in den Ferien nach Berlin fahre, kann ich mit den Leuten sprechen. Weil ich Musik liebe, höre ich auch deutsche Lieder. Und du? Warum lernst du Französisch?*\n\nPoints à vérifier :\n- verbe conjugué **à la fin** de chaque subordonnée (*ist, findet, fahre, liebe*) ;\n- virgule avant *weil, dass, obwohl* et après une subordonnée en tête ;\n- **verbe, virgule, verbe** quand la subordonnée est en tête (*Wenn ich … fahre, **kann ich**…* ; *Weil ich … liebe, **höre ich**…*)." },
      ],
    },
    {
      id: "cas-accusatif-datif",
      titre: "Les cas : nominatif, accusatif, datif",
      theme: "Outils de la langue",
      cours: `
## Trois cas, trois rôles
En allemand, l'article (et le pronom) change selon le **rôle** du mot dans la phrase :
- **nominatif** = le **sujet** (question *wer?* qui ?) : ***Der** Lehrer erklärt die Regel.*
- **accusatif** = le **complément d'objet direct** (question *wen? was?* qui ? quoi ?) : *Ich sehe **den** Lehrer.*
- **datif** = le **complément d'attribution**, souvent la personne à qui l'on donne, montre, dit (question *wem?* à qui ?) : *Ich gebe **dem** Lehrer mein Heft.*

## Le tableau des articles
| | masculin | féminin | neutre | pluriel |
|---|---|---|---|---|
| nominatif | der / ein | die / eine | das / ein | die / – |
| accusatif | **den / einen** | die / eine | das / ein | die / – |
| datif | **dem / einem** | **der / einer** | **dem / einem** | **den** (+ **-n** au nom) |

*kein* et les possessifs (*mein, dein, sein, ihr, unser, euer…*) se déclinent comme *ein* (et ont aussi un pluriel : *meine, meinen*) : *Ich schreibe **meinem** Freund. Ich helfe **meiner** Schwester. Ich spiele mit **meinen** Freunde**n**.*

>! **Astuce** : seul le **masculin** change à l'accusatif (*der → den*). Au datif, retiens la série **-m, -r, -m, -n** : de**m**, de**r**, de**m**, de**n**.

## Les pronoms personnels
| nominatif | accusatif | datif |
|---|---|---|
| ich | mich | mir |
| du | dich | dir |
| er | ihn | ihm |
| sie | sie | ihr |
| es | es | ihm |
| wir | uns | uns |
| ihr | euch | euch |
| sie / Sie | sie / Sie | ihnen / Ihnen |

## Des verbes qui veulent le datif
Ces verbes ont un complément au **datif** alors qu'en français on dit souvent « aider quelqu'un » :
- **helfen** (aider) : *Ich helfe **dir**.* – *Er hilft **seiner** Mutter.*
- **danken** (remercier) : *Ich danke **Ihnen**.*
- **gefallen** (plaire) : *Der Film gefällt **mir**.* (Le film me plaît.)
- **gehören** (appartenir) : *Das Buch gehört **dem** Lehrer.*
- **schmecken** (avoir bon goût) : *Schmeckt **dir** die Suppe?*
- **passen** (aller, convenir) : *Die Hose passt **mir** nicht.*
- **gratulieren** (féliciter), **antworten** (répondre à) : *Ich gratuliere **dir** zum Geburtstag!*

Et des expressions : *Wie geht es **dir**?* – *Mir ist kalt.* (J'ai froid.) – *Es tut **mir** leid.* (Je suis désolé.)

## Deux compléments : datif + accusatif
Avec *geben, schenken* (offrir), *schicken* (envoyer), *zeigen* (montrer), *erklären* (expliquer), *kaufen* (acheter pour), il y a souvent une **personne au datif** et une **chose à l'accusatif** :
- *Ich schenke **meinem** Bruder **ein** Buch.* (datif avant accusatif quand ce sont deux noms)
- *Ich schenke **ihm** ein Buch.* (pronom avant le nom)
- *Ich schenke **es** **ihm**.* (deux pronoms : l'accusatif d'abord)

>! **Exemple résolu** : « Je montre la photo à mon amie. »
>! 1. Qui montre ? *ich* (nominatif). Quoi ? *das Foto* (neutre) → accusatif *das Foto*.
>! 2. À qui ? *meine Freundin* (féminin) → datif *meiner Freundin*.
>! 3. *Ich zeige **meiner Freundin** **das Foto**.* Avec un pronom : *Ich zeige **es ihr**.*

> **À retenir** : nominatif = sujet ; accusatif = COD (*den, einen*, *mich, dich, ihn*) ; datif = « à qui » (*dem, der, dem, den + -n* ; *mir, dir, ihm, ihr, uns, euch, ihnen*). Verbes + datif : *helfen, danken, gefallen, gehören, schmecken, passen, gratulieren, antworten*.

### Erreurs fréquentes
- *Ich helfe dich* → *Ich helfe **dir*** (*helfen* + datif).
- *Der Pulli gefällt ich* → *Der Pulli gefällt **mir***.
- *Ich spiele mit meinen Freunde* → *…mit meinen Freunde**n*** (datif pluriel : *-n*).
- *Ich habe einen Bruder* (accusatif) mais *Das ist **ein** Bruder* (nominatif, après *sein*).
`,
      exercices: [
        { type: "qcm", question: "Complète : « Ich sehe ___ Hund im Garten. » (*der Hund*)", choix: ["der", "dem", "den", "des"], reponse: 2, explication: "*Hund* est le **COD** de *sehen* → accusatif ; masculin → **den** : *Ich sehe den Hund.*" },
        { type: "saisie", question: "Complète avec un pronom : « Kannst du ___ helfen? » (m'aider)", reponses: ["mir"], explication: "*helfen* se construit avec le **datif** : *mir* (à moi). *Kannst du **mir** helfen?* « *mich* » serait l'accusatif, faux ici." },
        { type: "qcm", question: "Complète : « Ich schenke ___ Mutter Blumen. » (*die Mutter*)", choix: ["meiner", "meine", "meinen", "meinem"], reponse: 0, explication: "La mère reçoit les fleurs : c'est le **datif** (à qui ?). Féminin au datif → **meiner** : *Ich schenke meiner Mutter Blumen.*" },
        { type: "vf", question: "« *Der Pullover gefällt mir.* » signifie « Le pull me plaît. »", reponse: true, explication: "Oui : avec *gefallen*, la chose qui plaît est le **sujet** (*der Pullover*) et la personne est au **datif** (*mir*)." },
        { type: "saisie", question: "Complète : « Das Fahrrad gehört ___ Lehrer. » (au professeur ; *der Lehrer*)", reponses: ["dem"], explication: "*gehören* (appartenir) + **datif** ; masculin → **dem** : *Das Fahrrad gehört **dem** Lehrer.*" },
        { type: "qcm", question: "Complète : « Ich spiele oft mit ___ Freunden. »", choix: ["meine", "meinen", "meinem", "meiner"], reponse: 1, explication: "*mit* est suivi du datif ; au **pluriel**, le datif est **meinen** et le nom prend **-n** : *mit meinen Freunde**n***." },
        { type: "saisie", question: "Remplace *dem Kind* par un pronom : « Ich gebe dem Kind einen Apfel. » → « Ich gebe ___ einen Apfel. »", reponses: ["ihm"], explication: "*das Kind* est neutre ; au datif, le pronom neutre est **ihm** (comme le masculin) : *Ich gebe **ihm** einen Apfel.*" },
        { type: "saisie", question: "Traduis : « Je te remercie. » (verbe *danken*)", reponses: ["Ich danke dir."], explication: "*danken* + **datif** : *Ich danke **dir**.* Poliment : *Ich danke Ihnen.*" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Ich zeige ihm es.", "Ich zeige ihn es.", "Ich zeige er es.", "Ich zeige es ihm."], reponse: 3, explication: "Avec **deux pronoms**, l'**accusatif** (*es*) vient avant le **datif** (*ihm*) : *Ich zeige **es ihm**.* *er* est un nominatif, *ihn* un accusatif." },
        { type: "redaction", question: "**Niveau fin de 3e.** C'est bientôt Noël (ou un anniversaire). Écris 6 à 8 phrases : à qui offres-tu quoi, et pourquoi ? Utilise *schenken* avec un datif et un accusatif, au moins un pronom au datif, et les verbes *gefallen* et *helfen*.", corrige: "**Modèle :**\n\n*Bald ist Weihnachten. Meiner Mutter schenke ich ein Buch, denn sie liest gern. Meinem Vater schenke ich einen Schal. Mein kleiner Bruder liebt Fußball, also kaufe ich ihm einen Ball. Meiner Oma schreibe ich eine Karte. Ich hoffe, dass die Geschenke ihnen gefallen! Mein Freund Tom hilft mir, denn er hat gute Ideen. Ich danke ihm!*\n\nPoints à vérifier :\n- datif de la personne : *meiner Mutter, meinem Vater, ihm, ihnen, mir* ;\n- accusatif de la chose : *ein Buch, einen Schal, einen Ball, eine Karte* ;\n- inversion quand le datif est en tête (*Meiner Mutter **schenke ich**…*) ;\n- *gefallen, helfen, danken* + datif." },
      ],
    },
    {
      id: "prepositions-wo-wohin",
      titre: "Les prépositions : accusatif, datif, wo ? ou wohin ?",
      theme: "Outils de la langue",
      cours: `
## Chaque préposition commande un cas
En allemand, la préposition décide du **cas** du nom qui la suit. Il y a trois familles.

### Toujours + accusatif : durch, für, gegen, ohne, um
Moyen mnémotechnique : « **DOGFU** » (*durch, ohne, gegen, für, um*).
- *durch den Park* (à travers le parc) – *für meinen Bruder* (pour mon frère) – *gegen die Wand* (contre le mur) – *ohne dich* (sans toi) – *um den See* (autour du lac) ; *um 8 Uhr* (à 8 h).

### Toujours + datif : aus, bei, mit, nach, seit, von, zu
Retiens la petite chanson : *aus, bei, mit, nach, seit, von, zu*.
- *aus der Schweiz* (de Suisse, origine) – *bei meiner Oma* (chez ma grand-mère) – *mit dem Bus* (en bus) – *nach der Schule* (après l'école) – *seit einem Jahr* (depuis un an) – *von meinem Vater* (de la part de mon père) – *zu meinem Freund* (chez mon ami, avec déplacement).

Contractions fréquentes : *zu dem* → **zum**, *zu der* → **zur**, *bei dem* → **beim**, *von dem* → **vom**.

### Les prépositions mixtes : an, auf, hinter, in, neben, über, unter, vor, zwischen
Elles prennent :
- le **datif** pour un **lieu où l'on est** (question **wo?** où ?) : *Das Buch liegt **auf dem** Tisch.*
- l'**accusatif** pour un **déplacement vers** un lieu (question **wohin?** où, vers où ?) : *Ich lege das Buch **auf den** Tisch.*

| Sens | wo? (datif) | wohin? (accusatif) |
|---|---|---|
| in (dans) | *Ich bin **im** (in dem) Kino.* | *Ich gehe **ins** (in das) Kino.* |
| an (contre, au bord de) | *Das Bild hängt **an der** Wand.* | *Ich hänge das Bild **an die** Wand.* |
| auf (sur) | *Die Katze liegt **auf dem** Sofa.* | *Die Katze springt **auf das** Sofa.* |
| unter (sous) | *Der Ball ist **unter dem** Bett.* | *Der Ball rollt **unter das** Bett.* |
| neben (à côté de) | *Ich sitze **neben meiner** Freundin.* | *Ich setze mich **neben meine** Freundin.* |

Contractions : *in dem* → **im**, *in das* → **ins**, *an dem* → **am**, *an das* → **ans**.

>! **Les verbes de position vont par paires** :
>! - *liegen* (être posé à plat) / *legen* (poser à plat) ;
>! - *stehen* (être debout) / *stellen* (mettre debout) ;
>! - *sitzen* (être assis) / *sich setzen* (s'asseoir) ;
>! - *hängen* (être accroché / accrocher).
>! Le premier répond à *wo?* (datif), le second à *wohin?* (accusatif).

## Aller, être, venir : les lieux
| | aller (wohin?) | être (wo?) | venir de (woher?) |
|---|---|---|---|
| ville, pays sans article | **nach** Berlin, nach Spanien | **in** Berlin | **aus** Berlin |
| pays avec article | **in die** Schweiz, **in die** Türkei | **in der** Schweiz | **aus der** Schweiz |
| bâtiment, lieu | **in die** Stadt, **ins** Kino | **in der** Stadt, **im** Kino | **aus dem** Kino |
| personne, rendez-vous | **zu** Oma, **zum** Arzt | **bei** Oma, **beim** Arzt | **von** Oma, **vom** Arzt |
| la maison | **nach Hause** | **zu Hause** | **von zu Hause** |

> **À retenir** : + accusatif : *durch, für, gegen, ohne, um*. + datif : *aus, bei, mit, nach, seit, von, zu*. Mixtes (*an, auf, hinter, in, neben, über, unter, vor, zwischen*) : **wo? → datif**, **wohin? → accusatif**. *nach Hause* (aller) / *zu Hause* (être).

### Erreurs fréquentes
- *Ich gehe nach die Schule* → *Ich gehe **in die** Schule* ou *zur Schule* (*nach* seulement pour les villes, pays sans article et *nach Hause*).
- *Ich bin nach Hause* → *Ich bin **zu Hause***.
- *mit den Bus* → ***mit dem** Bus* (*mit* + datif).
- *Ich wohne seit drei Jahre hier* → *seit drei Jahre**n*** (datif pluriel).
`,
      exercices: [
        { type: "qcm", question: "Complète : « Ich fahre jeden Tag mit ___ Fahrrad zur Schule. » (*das Fahrrad*)", choix: ["das", "den", "der", "dem"], reponse: 3, explication: "*mit* est toujours suivi du **datif** ; neutre au datif → **dem** : *mit dem Fahrrad*." },
        { type: "saisie", question: "Complète : « Das Geschenk ist für ___ Schwester. » (pour ma sœur ; *die Schwester*)", reponses: ["meine"], explication: "*für* est toujours suivi de l'**accusatif** ; féminin à l'accusatif → **meine** (même forme qu'au nominatif) : *für meine Schwester*." },
        { type: "qcm", question: "Complète : « Heute Abend gehen wir ___ Kino. »", choix: ["im", "ins", "zum Hause", "nach"], reponse: 1, explication: "On **va** au cinéma : déplacement, question *wohin?* → **accusatif** : *in das* → **ins** Kino. *im Kino* = être au cinéma." },
        { type: "qcm", question: "Complète : « Die Katze schläft ___ Sofa. »", choix: ["auf dem", "auf den", "auf das", "aufs"], reponse: 0, explication: "Le chat **est** sur le canapé (pas de déplacement) : *wo?* → **datif** → *auf dem Sofa*." },
        { type: "saisie", question: "Complète : « Ich lege das Handy auf ___ Tisch. » (*der Tisch*)", reponses: ["den"], explication: "*legen* (poser) = déplacement vers → *wohin?* → **accusatif**, masculin → **den** : *auf den Tisch*. Ensuite : *Das Handy liegt auf **dem** Tisch.*" },
        { type: "vf", question: "Pour dire « Je rentre à la maison », on dit *Ich gehe zu Hause.*", reponse: false, explication: "Avec un déplacement vers la maison, on dit ***nach Hause*** : *Ich gehe nach Hause.* *zu Hause* veut dire « à la maison » sans mouvement : *Ich bin zu Hause.*" },
        { type: "saisie", question: "Complète avec *nach* ou *in die* : « In den Ferien fahren wir ___ Schweiz. »", reponses: ["in die", "in die Schweiz"], explication: "*die Schweiz* est un pays **avec article** : on dit ***in die** Schweiz* (accusatif, déplacement). *nach* s'emploie pour les pays sans article : *nach Österreich, nach Spanien*." },
        { type: "saisie", question: "Complète avec une contraction : « Ich habe Zahnschmerzen, ich muss ___ Zahnarzt gehen. »", reponses: ["zum"], explication: "Chez une personne (médecin, dentiste) avec déplacement → **zu** + datif ; *zu dem* → **zum** : *Ich muss zum Zahnarzt gehen.* Être chez le dentiste : *beim Zahnarzt*." },
        { type: "qcm", question: "Traduis « Je vis ici depuis deux ans. »", choix: ["Ich wohne hier für zwei Jahre.", "Ich wohne hier seit zwei Jahren.", "Ich wohne hier seit zwei Jahre.", "Ich habe hier seit zwei Jahren gewohnt."], reponse: 1, explication: "« depuis » = **seit** + **datif** ; au datif pluriel le nom prend **-n** : *seit zwei Jahre**n***. Et comme l'action continue, l'allemand emploie le **présent** (*ich wohne*), comme le français." },
        { type: "redaction", question: "**Niveau fin de 3e.** Décris ta chambre à ton correspondant (6 à 8 phrases), puis dis ce que tu changes : *Ich stelle… / Ich hänge… / Ich lege…*. Emploie au moins trois prépositions mixtes avec le datif (*wo?*) et deux avec l'accusatif (*wohin?*).", corrige: "**Modèle :**\n\n*Mein Zimmer ist klein, aber schön. Das Bett steht neben dem Fenster. Über dem Bett hängt ein Poster von meiner Lieblingsband. Mein Schreibtisch steht an der Wand, und auf dem Schreibtisch liegen meine Bücher. Unter dem Bett ist eine Kiste mit Spielen. Morgen räume ich auf: Ich stelle den Schreibtisch vor das Fenster, denn dort ist mehr Licht. Ich hänge das Poster an die Tür und ich lege einen Teppich vor das Bett.*\n\nPoints à vérifier :\n- *wo?* (verbes *stehen, hängen, liegen*, *sein*) → **datif** : *neben dem Fenster, über dem Bett, an der Wand, auf dem Schreibtisch, unter dem Bett* ;\n- *wohin?* (verbes *stellen, hängen, legen*) → **accusatif** : *vor das Fenster, an die Tür, vor das Bett* (*das Fenster, das Bett* sont neutres)." },
      ],
    },
    {
      id: "comparatif-superlatif",
      titre: "Comparer : comparatif et superlatif",
      theme: "Outils de la langue",
      cours: `
## Rappel : le comparatif
- Supériorité : adjectif + **-er** + **als** : *Berlin ist größ**er als** Hamburg.*
- Égalité : **so** + adjectif + **wie** : *Lena ist **so** alt **wie** Tom.*
- Infériorité : **nicht so** + adjectif + **wie** : *Der Bus ist **nicht so** schnell **wie** der Zug.*

Beaucoup d'adjectifs courts prennent un **Umlaut** : *alt → älter, jung → jünger, groß → größer, kalt → kälter, warm → wärmer, lang → länger, kurz → kürzer, stark → stärker, arm → ärmer*.

## Le superlatif
### Après le verbe : am + adjectif + -sten
*schnell* → *Der ICE fährt **am schnellsten**.* (C'est l'ICE qui roule le plus vite.)

Si l'adjectif se termine par **-d, -t, -s, -ß, -z, -sch**, on ajoute **-esten** pour pouvoir prononcer : *alt → **am ältesten**, weit (loin) → **am weitesten**, kurz → **am kürzesten**, heiß (très chaud) → heißer → **am heißesten**, interessant → **am interessantesten***. Exception : *groß → **am größten***.

### Devant un nom : der / die / das + adjectif + -ste
- *Die Zugspitze ist **der höchste** Berg Deutschlands.* (le plus haut sommet d'Allemagne, 2 962 m)
- *Berlin ist **die größte** Stadt Deutschlands.*
- *Das ist **das schönste** Geschenk!*
- Au pluriel : *Das sind **die besten** Freunde.*

## Les formes irrégulières à connaître
| Adjectif / adverbe | Comparatif | Superlatif |
|---|---|---|
| gut (bon, bien) | **besser** | **am besten** / der beste |
| viel (beaucoup) | **mehr** | **am meisten** / die meisten |
| gern (volontiers) | **lieber** | **am liebsten** |
| hoch (haut) | **höher** | **am höchsten** / der höchste |
| nah (proche) | **näher** | **am nächsten** / der nächste |

>! **Exprimer ses préférences avec gern, lieber, am liebsten** :
>! *Ich spiele **gern** Tennis, ich spiele **lieber** Fußball, aber **am liebsten** schwimme ich.*
>! (J'aime jouer au tennis, je préfère le foot, mais ce que j'aime le plus, c'est nager.)

## Autres tournures utiles
- **immer** + comparatif = de plus en plus : *Es wird **immer kälter**.* – *Immer mehr Jugendliche fahren Rad.*
- **viel** + comparatif = beaucoup plus : *Der Zug ist **viel schneller** als der Bus.*
- *einer der / eine der* + superlatif pluriel : *Köln ist **eine der ältesten** Städte Deutschlands.*

>! **Exemple résolu** : compare ces trois montagnes : Zugspitze (Allemagne) 2 962 m, Großglockner (Autriche) 3 798 m, Dufourspitze (Suisse) 4 634 m.
>! - *Der Großglockner ist **höher als** die Zugspitze.*
>! - *Die Zugspitze ist **nicht so hoch wie** der Großglockner.*
>! - *Die Dufourspitze ist **am höchsten**. Sie ist **der höchste** Berg der Schweiz.*

> **À retenir** : comparatif **-er als** (*älter, größer, besser*) ; superlatif **am …-sten** (*am schnellsten, am ältesten, am größten*) ou **der/die/das …-ste** devant un nom. Irréguliers : *gut – besser – am besten ; viel – mehr – am meisten ; gern – lieber – am liebsten ; hoch – höher – am höchsten*.

### Erreurs fréquentes
- *mehr schnell* → ***schneller*** (on ne dit pas « plus » + adjectif).
- *besser wie* → *besser **als*** ; mais *so gut **wie***.
- *am gutsten, am vielsten* → ***am besten**, **am meisten***.
- *Ich mag mehr Fußball* → *Ich spiele **lieber** Fußball*.
`,
      exercices: [
        { type: "saisie", question: "Donne le comparatif de **jung** (jeune).", reponses: ["jünger"], explication: "*jung* prend un **Umlaut** au comparatif : **jünger** → *Mein Bruder ist jünger als ich.*" },
        { type: "qcm", question: "Complète : « Mathe finde ich gut, aber Deutsch finde ich ___. »", choix: ["guter", "mehr gut", "besser", "am gutsten"], reponse: 2, explication: "*gut* est irrégulier : *gut – **besser** – am besten*. *guter* et *mehr gut* n'existent pas comme comparatifs." },
        { type: "saisie", question: "Complète avec le superlatif de *alt* : « Mein Opa ist ___ in unserer Familie. » (le plus âgé)", reponses: ["am ältesten"], explication: "*alt* → Umlaut et **-esten** (adjectif en *-t*) : **am ältesten**." },
        { type: "qcm", question: "Complète : « Ich esse gern Pizza, ich esse lieber Pasta, aber ___ esse ich Pfannkuchen. »", choix: ["am liebsten", "am gernsten", "mehr gern", "lieber"], reponse: 0, explication: "*gern – lieber – **am liebsten*** : c'est la forme irrégulière pour dire « ce que je préfère le plus ». *am liebsten* en tête entraîne l'inversion (*esse ich*)." },
        { type: "vf", question: "*Die Zugspitze ist der höchste Berg Deutschlands* signifie : « La Zugspitze est la plus haute montagne d'Allemagne. »", reponse: true, explication: "Oui : *hoch – höher – **der höchste*** (superlatif devant un nom). La Zugspitze, en Bavière, culmine à 2 962 m." },
        { type: "qcm", question: "Complète : « Ein ICE fährt viel ___ als ein Regionalzug. »", choix: ["schnell", "mehr schnell", "am schnellsten", "schneller"], reponse: 3, explication: "Comparaison de deux trains avec *als* → comparatif **schneller** ; *viel* renforce : *viel schneller* = beaucoup plus rapide." },
        { type: "saisie", question: "Complète avec le superlatif de *groß* devant un nom : « Berlin ist die ___ Stadt Deutschlands. »", reponses: ["größte"], explication: "Devant un nom : *die* + adjectif + **-ste** ; *groß* → **größte** (Umlaut, et pas de *-e-* ajouté : *größte*, pas *größeste*)." },
        { type: "saisie", question: "Traduis : « Il fait de plus en plus chaud. » (verbe *werden*)", reponses: ["Es wird immer wärmer.", "Es wird immer heißer."], explication: "« de plus en plus » = **immer** + comparatif : *Es wird **immer wärmer**.* (*warm → wärmer*) ; *heißer* (plus chaud, très chaud) est aussi possible." },
        { type: "qcm", question: "**Compréhension.** « *In meiner Klasse sind 25 Schüler. Die meisten fahren mit dem Bus zur Schule. Ich wohne am nächsten, deshalb gehe ich zu Fuß. Mein Freund Max wohnt am weitesten weg: Er braucht fast eine Stunde!* » Que comprends-tu ?", choix: ["La plupart des élèves viennent à pied.", "Max habite tout près de l'école.", "L'auteur habite le plus près de l'école.", "L'auteur met presque une heure."], reponse: 2, explication: "*Ich wohne **am nächsten*** = j'habite le plus près (*nah – näher – am nächsten*), donc il vient à pied. *Die meisten* (la plupart) prennent le bus ; c'est Max qui habite le plus loin (*am weitesten*) et met presque une heure." },
        { type: "redaction", question: "**Niveau fin de 3e.** Compare trois moyens de transport (*das Fahrrad, der Bus, das Auto, der Zug, das Flugzeug…*) en 6 à 8 phrases : vitesse, prix, écologie. Utilise au moins deux comparatifs, deux superlatifs (dont un devant un nom) et termine avec *gern, lieber, am liebsten*.", corrige: "**Modèle :**\n\n*Das Flugzeug ist am schnellsten, aber es ist auch am teuersten. Der Zug ist langsamer als das Flugzeug, aber er ist bequemer. Das Auto ist praktisch, aber es ist nicht so umweltfreundlich wie der Zug. Das Fahrrad ist das billigste Verkehrsmittel und es ist auch am besten für die Umwelt. Leider ist es nicht so schnell wie der Bus. Ich fahre gern Bus, ich fahre lieber Zug, aber am liebsten fahre ich Rad, denn das ist gesund!*\n\nPoints à vérifier :\n- comparatifs : *langsamer als, bequemer, nicht so … wie* ;\n- superlatifs : *am schnellsten, am teuersten, am besten* ; devant un nom : *das billigste Verkehrsmittel* ;\n- *gern – lieber – am liebsten* avec inversion après *am liebsten*." },
      ],
    },
    {
      id: "avenir-metiers-futur",
      titre: "Mon avenir : métiers, futur et souhaits",
      theme: "L'école et la société",
      cours: `
## Parler de l'avenir
### Le présent + un marqueur de temps (le plus courant)
*Morgen **fahre** ich nach Paris.* – *Nächstes Jahr **gehe** ich aufs Gymnasium / ins Lycée.*
Marqueurs : *morgen, übermorgen, nächste Woche, nächstes Jahr, in zwei Jahren, später, bald*.

### Le futur : werden + infinitif à la fin
| werden | |
|---|---|
| ich **werde** | wir **werden** |
| du **wirst** | ihr **werdet** |
| er / sie / es **wird** | sie / Sie **werden** |

- *Ich **werde** später in Deutschland **arbeiten**.*
- *Es **wird** morgen **regnen**.*
- Dans une subordonnée, *werden* va à la fin : *Ich glaube, dass ich Ingenieurin **werden werde**.* (on évite souvent cette lourdeur : *…, dass ich Ingenieurin werde.*)

>! **Attention aux deux sens de werden** : seul, *werden* veut dire **devenir** : *Ich **will** Arzt **werden**.* (Je veux devenir médecin.) Avec un autre infinitif, c'est le **futur** : *Ich **werde** viel **reisen**.* (Je voyagerai beaucoup.)

## Les métiers (die Berufe)
On forme souvent le féminin avec **-in** (parfois avec Umlaut) :

| Masculin | Féminin | Français |
|---|---|---|
| der Arzt | die Ärztin | médecin |
| der Tierarzt | die Tierärztin | vétérinaire |
| der Lehrer | die Lehrerin | professeur |
| der Koch | die Köchin | cuisinier, cuisinière |
| der Ingenieur | die Ingenieurin | ingénieur(e) |
| der Informatiker | die Informatikerin | informaticien(ne) |
| der Polizist | die Polizistin | policier, policière |
| der Krankenpfleger | die Krankenpflegerin | infirmier, infirmière |
| der Verkäufer | die Verkäuferin | vendeur, vendeuse |
| der Journalist | die Journalistin | journaliste |
| der Mechatroniker | die Mechatronikerin | mécatronicien(ne) |

>! **Pas d'article** devant le métier après *sein* et *werden* : *Mein Vater **ist Koch**.* – *Ich möchte **Journalistin werden**.*

Pour parler du travail : *Was bist du von Beruf? / Was macht deine Mutter beruflich?* – *Sie arbeitet in einem Krankenhaus / in einem Büro / in einer Firma.* – *Er verdient gut.* (il gagne bien sa vie) – *Ich arbeite gern mit Menschen / mit Tieren / mit dem Computer.*

## Le stage et l'orientation
- *ein Praktikum machen* : faire un stage – *Ich habe mein Praktikum in einer Bäckerei gemacht.*
- En Allemagne, beaucoup de jeunes font une **Ausbildung** (formation en alternance : entreprise + école professionnelle, la *Berufsschule*). D'autres passent l'**Abitur** (le baccalauréat) et vont à l'**Uni**.

## Rêver : le subjonctif II (würde, wäre, hätte)
Pour dire ce que tu **ferais**, tu emploies **würde** + infinitif à la fin (conditionnel français) :
- *Ich **würde** gern in Kanada **leben**.* (J'aimerais vivre au Canada.)
- *Was **würdest** du **machen**, wenn du reich **wärst**?*

| | würde | wäre (serait) | hätte (aurait) |
|---|---|---|---|
| ich | würde | wäre | hätte |
| du | würdest | wärst | hättest |
| er / sie | würde | wäre | hätte |
| wir / sie | würden | wären | hätten |

*Wenn ich Zeit **hätte**, **würde** ich mehr **lesen**.* (Si j'avais le temps, je lirais plus.) – *Das **wäre** super!*

> **À retenir** : futur = **werden** (*werde, wirst, wird…*) + infinitif à la fin ; *werden* seul = devenir. Métiers : féminin en **-in**, pas d'article (*Ich will Ärztin werden*). Rêves : **würde** + infinitif, **wäre**, **hätte** ; *Wenn ich … hätte/wäre, würde ich …*.

### Erreurs fréquentes
- *Ich will ein Arzt werden* → *Ich will **Arzt** werden* (pas d'article).
- *Ich werde Arzt* = je vais devenir médecin (pas « je suis médecin »).
- *Ich wurde gern reisen* → *Ich **würde** gern reisen* (*wurde* sans Umlaut = je devins, je devenais : c'est le prétérit).
- *du wirdst* → *du **wirst***.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *werden* : « Nächstes Jahr ___ du sicher viel lernen. »", reponses: ["wirst"], explication: "*werden* est irrégulier à la 2e personne : *du **wirst*** (et *er wird*). L'infinitif *lernen* va à la fin." },
        { type: "qcm", question: "Que signifie « *Ich will Tierärztin werden.* » ?", choix: ["Je serai vétérinaire demain.", "Je veux devenir vétérinaire.", "J'étais vétérinaire.", "Je voudrais un vétérinaire."], reponse: 1, explication: "*werden* seul (ici après le modal *will*) signifie **devenir** : « Je veux devenir vétérinaire ». *Tierärztin* est le féminin de *Tierarzt*." },
        { type: "saisie", question: "Donne le féminin de *der Koch* (le cuisinier).", reponses: ["die Köchin", "Köchin"], explication: "Féminin en **-in**, avec Umlaut : *der Koch* → ***die Köchin***. De même : *der Arzt → die Ärztin*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Meine Mutter ist eine Lehrerin.", "Meine Mutter ist Lehrerin.", "Meine Mutter ist die Lehrerin von Beruf.", "Meine Mutter Lehrerin ist."], reponse: 1, explication: "Après *sein* (ou *werden*), le métier s'emploie **sans article** : *Meine Mutter ist Lehrerin.* Tu peux aussi dire *Sie ist Lehrerin von Beruf.* L'article n'apparaît que si un adjectif accompagne le métier : *Sie ist eine gute Lehrerin.*" },
        { type: "vf", question: "« *Ich werde in Berlin studieren* » est une phrase au futur.", reponse: true, explication: "Oui : **werden** conjugué + **infinitif** à la fin (*studieren*) = futur : « J'étudierai à Berlin »." },
        { type: "qcm", question: "Complète : « Wenn ich viel Geld ___, würde ich um die Welt reisen. »", choix: ["habe", "hatte", "hätte", "würde"], reponse: 2, explication: "C'est une hypothèse (« si j'avais beaucoup d'argent ») : subjonctif II **hätte** (avec Umlaut). *hatte* (sans Umlaut) est le prétérit (j'avais réellement)." },
        { type: "saisie", question: "Traduis : « J'aimerais travailler en Allemagne. » (avec *würde*)", reponses: ["Ich würde gern in Deutschland arbeiten.", "Ich würde gerne in Deutschland arbeiten.", "Ich würde in Deutschland gern arbeiten.", "Ich würde in Deutschland gerne arbeiten."], explication: "*würde* + **gern** + infinitif à la fin : *Ich **würde gern** in Deutschland **arbeiten**.* On peut aussi dire *Ich möchte in Deutschland arbeiten.*" },
        { type: "qcm", question: "Qu'est-ce qu'une *Ausbildung* en Allemagne ?", choix: ["Une formation professionnelle en alternance, entre entreprise et école.", "Le baccalauréat allemand.", "Un voyage scolaire à l'étranger.", "Une université pour les médecins."], reponse: 0, explication: "L'**Ausbildung** est la formation professionnelle en alternance (système dual) : l'apprenti travaille dans une entreprise et suit des cours à la *Berufsschule*. Le baccalauréat s'appelle l'*Abitur*." },
        { type: "qcm", question: "**Compréhension.** « *Ich heiße Jana und ich mache gerade eine Ausbildung als Mechatronikerin bei einer Autofirma in Stuttgart. Drei Tage pro Woche arbeite ich in der Firma, zwei Tage gehe ich in die Berufsschule. Später werde ich vielleicht Ingenieurin, denn ich möchte Elektroautos bauen.* » Quelle affirmation est vraie ?", choix: ["Jana va à l'école professionnelle trois jours par semaine.", "Jana est déjà ingénieure.", "Jana travaille dans une banque.", "Jana veut peut-être devenir ingénieure plus tard."], reponse: 3, explication: "*Später werde ich **vielleicht** Ingenieurin* = plus tard, je deviendrai peut-être ingénieure. Elle travaille **trois** jours dans l'entreprise automobile et va **deux** jours à la *Berufsschule*." },
        { type: "redaction", question: "**Niveau fin de 3e.** Pour un forum de jeunes germanophones, présente ton projet d'avenir (8 à 10 phrases) : le métier que tu veux faire et pourquoi, ce que tu feras après la 3e, ton stage, et ce que tu ferais si tu pouvais choisir n'importe quoi (*Wenn ich … könnte/hätte, würde ich …*).", corrige: "**Modèle :**\n\n*Hallo! Ich bin Hugo, ich bin 14 und ich gehe in die 3e (das ist die neunte Klasse). Später möchte ich Koch werden, weil ich sehr gern koche und mit Menschen arbeite. Nächstes Jahr gehe ich auf ein Lycée professionnel. Im Dezember habe ich ein Praktikum in einem Restaurant gemacht. Das war anstrengend, aber sehr interessant! Ich werde vielleicht auch in Deutschland oder in der Schweiz arbeiten, denn ich spreche ein bisschen Deutsch. Wenn ich viel Geld hätte, würde ich ein eigenes Restaurant in Paris eröffnen. Das wäre mein Traum!*\n\nPoints à vérifier :\n- métier **sans article** après *werden* : *Koch werden* ;\n- futur : *Ich **werde** … **arbeiten*** ; présent + marqueur : *Nächstes Jahr gehe ich…* ;\n- parfait pour le stage : *habe … gemacht* ;\n- hypothèse : *Wenn ich … **hätte**, **würde** ich … **eröffnen*** ; *Das **wäre**…* ;\n- verbe à la fin après *weil*, inversion après *Später, Nächstes Jahr, Im Dezember*." },
      ],
    },
    {
      id: "environnement-engagement",
      titre: "Protéger l'environnement : s'engager au quotidien",
      theme: "L'école et la société",
      cours: `
## Le vocabulaire de l'environnement (die Umwelt)
| Allemand | Français |
|---|---|
| die Umwelt / der Umweltschutz | l'environnement / la protection de l'environnement |
| umweltfreundlich | écologique, bon pour l'environnement |
| das Klima / der Klimawandel | le climat / le changement climatique |
| der Müll / den Müll trennen | les déchets / trier les déchets |
| die Verpackung | l'emballage |
| das Plastik | le plastique |
| die Energie / Energie sparen | l'énergie / économiser l'énergie |
| das Licht ausmachen | éteindre la lumière |
| der Strom | l'électricité |
| wegwerfen (warf weg, weggeworfen) | jeter |
| recyceln | recycler |
| verschmutzen | polluer |
| die Luft / das Wasser | l'air / l'eau |

## Le tri à l'allemande
En Allemagne, le tri des déchets (*die Mülltrennung*) est très organisé :
- la **gelbe Tonne** ou le **gelbe Sack** (poubelle ou sac jaune) : les **emballages** en plastique et en métal ;
- la **blaue Tonne** (bleue) : le **papier** et le carton ;
- la **Biotonne** (souvent marron) : les déchets de cuisine et de jardin ;
- la **Restmülltonne** (grise ou noire) : le reste ;
- le **verre** va dans des conteneurs, trié par couleur (*Weißglas, Grünglas, Braunglas*).

Et il y a le **Pfand** (la consigne) : sur beaucoup de bouteilles et de canettes jetables, tu paies **25 centimes** de plus, que tu récupères quand tu rapportes la bouteille au magasin. *Ich bringe die Pfandflaschen in den Supermarkt zurück.*

Depuis 2018, beaucoup de jeunes manifestent pour le climat avec le mouvement **Fridays for Future**, lancé par la Suédoise Greta Thunberg, très suivi en Allemagne. Et l'Allemagne a arrêté ses dernières centrales nucléaires en avril 2023 dans le cadre de l'**Energiewende** (la transition énergétique).

## Donner des conseils et des règles
- **man muss** (il faut) / **man darf nicht** (il ne faut pas, c'est interdit) : *Man darf keinen Müll in den Wald werfen.*
- **man sollte** (on devrait) : *Man **sollte** mit dem Rad fahren.* (*sollte* = subjonctif II de *sollen*)
- **man kann** (on peut) : *Man kann Wasser sparen.*
- L'impératif : *Mach das Licht aus! Trennt euren Müll! Fahren Sie mit dem Bus!*

## Exprimer le but : um … zu + infinitif
**um … zu** + infinitif à la fin = **pour** + infinitif (quand le sujet est le même) :
- *Ich fahre mit dem Fahrrad, **um** Energie **zu sparen**.* (pour économiser de l'énergie)
- Avec un verbe à particule, *zu* se glisse au milieu : *…, **um** das Licht **auszumachen**.*
- On peut le mettre en tête : ***Um** die Umwelt **zu schützen**, **trenne ich** meinen Müll.*

>! **Exemple résolu** : relie avec *um … zu* : *Wir kaufen keine Plastikflaschen. Wir wollen weniger Müll produzieren.*
>! → *Wir kaufen keine Plastikflaschen, **um** weniger Müll **zu produzieren**.* (le modal *wollen* disparaît : *um … zu* exprime déjà le but)

## zu + infinitif sans um : après certaines expressions
Sans idée de but, on emploie **zu + infinitif à la fin** (sans *um*) après des expressions très fréquentes :
- *Es ist wichtig / gut / schwer, …* : *Es ist wichtig, den Müll **zu trennen**.* (Il est important de trier les déchets.)
- *Ich habe (keine) Lust, …* (j'ai envie / pas envie de) : *Ich habe keine Lust, mit dem Bus **zu fahren**.*
- *Ich habe (keine) Zeit, …* – *Ich versuche, …* (j'essaie de) – *Ich vergesse (oft), …* – *Vergiss nicht, …!* – *Ich fange an, …* (je commence à) : *Ich versuche, weniger Plastik **zu kaufen**.*
- Verbe à particule : *zu* au milieu, comme avec *um* : *Vergiss nicht, das Licht **auszumachen**!*

>! **Ne mélange pas** : après un **verbe de modalité** (*können, müssen, wollen, sollen, dürfen, möchten*), **jamais de zu** : *Ich muss den Müll trennen* (et non *zu trennen*). *um … zu* = **but** (« pour ») ; *zu* seul = complément d'une expression (« de, à »).

> **À retenir** : *die Umwelt schützen, Müll trennen, Energie sparen, mit dem Rad fahren*. Tri : jaune = emballages, bleu = papier, *Bio* = déchets organiques ; *Pfand* = consigne. Conseils : *man sollte, man muss, man darf nicht*. But : **um … zu** + infinitif (*um Wasser zu sparen*) ; après *Es ist wichtig, Ich habe Lust, Ich versuche…* : **zu** + infinitif sans *um* ; après un modal : pas de *zu*.

### Erreurs fréquentes
- *für Energie sparen* → ***um** Energie **zu sparen*** (« pour + verbe » = *um … zu*).
- *um zu sparen Energie* → *um Energie **zu sparen*** (infinitif à la fin).
- *um auszumachen das Licht* → *um das Licht **auszumachen***.
- *die Umwelt* est féminin : ***für die** Umwelt*, ***der** Umwelt helfen*.
- *Ich muss den Müll zu trennen* → *Ich muss den Müll **trennen*** (pas de *zu* après un modal).
- *Es ist wichtig, Wasser sparen* → *…, Wasser **zu sparen***.
`,
      exercices: [
        { type: "qcm", question: "Que signifie « *Ich trenne den Müll.* » ?", choix: ["Je jette mes déchets dans la rue.", "Je brûle les déchets.", "Je ramasse les déchets.", "Je trie les déchets."], reponse: 3, explication: "*trennen* = séparer, trier ; *der Müll* = les déchets. *die Mülltrennung* = le tri des déchets." },
        { type: "qcm", question: "En Allemagne, que met-on en général dans la *gelbe Tonne* (ou le *gelbe Sack*) ?", choix: ["Le papier et le carton.", "Les épluchures de légumes.", "Les emballages en plastique et en métal.", "Les bouteilles en verre."], reponse: 2, explication: "La poubelle **jaune** reçoit les **emballages** (*Verpackungen*) en plastique et en métal. Le papier va dans la *blaue Tonne*, les épluchures dans la *Biotonne*, le verre dans des conteneurs." },
        { type: "vf", question: "Le *Pfand* est une somme payée en plus pour une bouteille, qu'on récupère en la rapportant.", reponse: true, explication: "Oui, c'est la **consigne** : 25 centimes sur beaucoup de bouteilles et canettes jetables. On rapporte la bouteille au magasin et on récupère l'argent." },
        { type: "saisie", question: "Complète avec *um … zu* : « Ich fahre mit dem Rad, um die Umwelt ___. » (protéger : *schützen*)", reponses: ["zu schützen"], explication: "*um … zu* + infinitif à la fin : *…, um die Umwelt **zu schützen**.*" },
        { type: "saisie", question: "Complète avec *um … zu* (verbe à particule *ausmachen*) : « Ich gehe in mein Zimmer, um das Licht ___. »", reponses: ["auszumachen"], explication: "Avec un verbe à particule séparable, *zu* se place **entre** la particule et le verbe, en un seul mot : **auszumachen**." },
        { type: "qcm", question: "Quel conseil est correctement formulé ?", choix: ["Man sollte weniger Plastik kaufen.", "Man sollte kaufen weniger Plastik.", "Man soll weniger Plastik zu kaufen.", "Man sollten weniger Plastik kaufen."], reponse: 0, explication: "*man* se conjugue comme *er* : **man sollte** ; l'infinitif *kaufen* va à la fin, **sans** *zu* après un modal." },
        { type: "saisie", question: "Traduis : « Il ne faut pas jeter de déchets dans la forêt. » (commence par *Man darf*)", reponses: ["Man darf keinen Müll in den Wald werfen.", "Man darf keinen Müll in den Wald wegwerfen.", "Man darf keinen Müll im Wald wegwerfen.", "Man darf keinen Müll im Wald werfen.", "Man darf im Wald keinen Müll wegwerfen.", "Man darf im Wald keinen Müll werfen."], explication: "*man darf nicht / kein* = il ne faut pas, c'est interdit. *der Müll* → accusatif négatif **keinen Müll** ; *in den Wald* (vers la forêt, accusatif) ou *im Wald* (dans la forêt) ; l'infinitif à la fin." },
        { type: "qcm", question: "Relie avec *um … zu* : « Wir nehmen den Bus. Wir wollen Energie sparen. »", choix: ["Wir nehmen den Bus, um Energie sparen wollen.", "Wir nehmen den Bus, für Energie zu sparen.", "Wir nehmen den Bus, um zu sparen Energie.", "Wir nehmen den Bus, um Energie zu sparen."], reponse: 3, explication: "*um* + compléments + **zu** + infinitif à la fin. Le modal *wollen* disparaît, car *um … zu* exprime déjà le but. *für* ne s'emploie pas devant un verbe." },
        { type: "qcm", question: "**Compréhension.** « *An unserer Schule gibt es eine Umwelt-AG. Jeden Freitag sammeln wir Müll auf dem Schulhof. Wir haben auch durchgesetzt, dass es in der Kantine keine Plastikbecher mehr gibt. Nächsten Monat wollen wir Bäume pflanzen, um die Luft sauberer zu machen.* » Que prévoit le groupe le mois prochain ?", choix: ["Ramasser les déchets dans la cour.", "Supprimer les gobelets en plastique.", "Créer un nouveau club.", "Planter des arbres."], reponse: 3, explication: "*Nächsten Monat wollen wir Bäume pflanzen* = le mois prochain, nous voulons planter des arbres, *um die Luft sauberer zu machen* (pour rendre l'air plus propre). Le ramassage a lieu chaque vendredi ; les gobelets sont déjà supprimés." },
        { type: "redaction", question: "**Niveau fin de 3e.** Écris un article pour le journal de l'école d'un établissement partenaire en Allemagne (8 à 10 phrases) : *Was kann man im Alltag für die Umwelt tun?* Donne au moins quatre conseils (*man sollte, man kann, man darf nicht*, impératif), deux phrases avec *um … zu*, et dis ce que toi, tu fais déjà.", corrige: "**Modèle :**\n\n*Was kann man im Alltag für die Umwelt tun?\nJeder kann etwas tun! Erstens sollte man mit dem Fahrrad oder mit dem Bus zur Schule fahren, um weniger CO2 zu produzieren. Zweitens kann man Energie sparen: Mach das Licht aus, wenn du dein Zimmer verlässt! Man darf auch keinen Müll auf die Straße werfen. Man sollte den Müll trennen und Pfandflaschen in den Supermarkt zurückbringen. Kauft lieber Produkte ohne Verpackung! Ich persönlich dusche nur fünf Minuten, um Wasser zu sparen. Ich gehe auch oft zu Fuß. Das ist nicht schwer und es ist gut für die Gesundheit!*\n\nPoints à vérifier :\n- conseils : *man sollte / kann / darf nicht* + infinitif à la fin ; impératif *Mach … aus! Kauft …!* ;\n- but : *um weniger CO2 **zu produzieren**, um Wasser **zu sparen*** ;\n- *wenn du dein Zimmer verlässt* : verbe à la fin de la subordonnée ;\n- connecteurs *erstens, zweitens, auch* et inversion après *Erstens, Zweitens*." },
        { type: "saisie", question: "Complète avec *zu* + infinitif (*sparen*) : « Es ist wichtig, Energie ___. »", reponses: ["zu sparen"], explication: "Après *Es ist wichtig, …*, on emploie **zu + infinitif à la fin**, sans *um* (ce n'est pas un but) : *Es ist wichtig, Energie **zu sparen**.*" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Ich habe keine Lust, mit dem Bus fahren.", "Ich habe keine Lust, um mit dem Bus zu fahren.", "Ich habe keine Lust, zu fahren mit dem Bus.", "Ich habe keine Lust, mit dem Bus zu fahren."], reponse: 3, explication: "*Lust haben* (avoir envie de) est suivi de **zu + infinitif à la fin** : *…, mit dem Bus **zu fahren**.* Sans *zu*, la phrase est fausse ; *um … zu* exprimerait un but, ce qui n'a pas de sens ici." },
        { type: "saisie", question: "Complète avec *zu* + infinitif (*ausmachen*) : « Vergiss nicht, das Licht ___! »", reponses: ["auszumachen"], explication: "Verbe à particule séparable : *zu* se glisse entre la particule et le verbe, en un seul mot → **auszumachen** : *Vergiss nicht, das Licht auszumachen!*" },
        { type: "qcm", question: "Dans quelle phrase faut-il ajouter *zu* devant l'infinitif ?", choix: ["Wir müssen den Müll ___ trennen.", "Man sollte weniger Plastik ___ kaufen.", "Ich versuche, weniger Plastik ___ kaufen.", "Du kannst das Licht ___ ausmachen."], reponse: 2, explication: "Après *ich versuche* (j'essaie de), on emploie **zu + infinitif** : *Ich versuche, weniger Plastik **zu kaufen**.* Après les verbes de modalité (*müssen, sollte, kannst*), l'infinitif s'emploie **sans** *zu*." },
      ],
    },
    {
      id: "medias-numerique-opinion",
      titre: "Médias et écrans : donner son opinion",
      theme: "Les langages",
      cours: `
## Le vocabulaire du numérique
| Allemand | Français |
|---|---|
| das Handy (die Handys) | le portable |
| das Smartphone / das Tablet | le smartphone / la tablette |
| der Bildschirm | l'écran |
| das Internet / im Internet surfen | Internet / surfer sur Internet |
| die sozialen Netzwerke / die sozialen Medien | les réseaux sociaux |
| eine Nachricht schicken | envoyer un message |
| chatten / posten / teilen | chatter / publier / partager |
| ein Video anschauen / streamen | regarder / diffuser une vidéo |
| herunterladen (lud herunter, heruntergeladen) | télécharger |
| die App / das Passwort | l'appli / le mot de passe |
| online / offline | en ligne / hors ligne |
| die Zeitung / die Nachrichten | le journal / les informations |
| die Werbung | la publicité |
| süchtig sein | être accro, dépendant |

## Donner son avis
- *Ich finde, dass soziale Netzwerke praktisch sind.* (verbe à la fin après *dass*)
- *Ich glaube / Ich denke, dass…*
- ***Meiner Meinung nach** sind Handys im Unterricht störend.* (À mon avis… : **inversion**, car c'est le 1er élément)
- *Ich bin der Meinung, dass…* (Je suis d'avis que…)
- *Ich bin dafür / dagegen.* (Je suis pour / contre.) – *Ich bin dafür, dass…*
- *Das stimmt. / Das stimmt nicht.* (C'est vrai / faux.) – *Da hast du recht.* (Tu as raison.)

## Argumenter : avantages et inconvénients
- *Ein **Vorteil** ist, dass…* (un avantage) – *Ein **Nachteil** ist, dass…* (un inconvénient)
- ***Einerseits** kann man mit Freunden chatten, **andererseits** verliert man viel Zeit.* (d'un côté… de l'autre…)
- ***Deshalb** / **Deswegen*** (c'est pourquoi) → inversion : *Deshalb **lese ich** lieber Bücher.*
- ***Trotzdem*** (pourtant, malgré tout) → inversion : *Trotzdem **finde ich** mein Handy wichtig.*
- *aber, und, oder, denn* : pas d'inversion. *zum Beispiel* (par exemple), *außerdem* (en outre), *zum Schluss / Fazit* (pour conclure).

>! **Exemple résolu** : construis un petit paragraphe d'opinion.
>! *Meiner Meinung nach ist das Handy sehr praktisch, denn man kann schnell Informationen finden. Ein Nachteil ist aber, dass viele Jugendliche zu viel Zeit online verbringen. Deshalb sollte man nicht mehr als zwei Stunden pro Tag am Bildschirm sitzen.*
>! Vérifie : inversion après *Meiner Meinung nach* et *Deshalb* ; verbe à la fin après *dass* ; pas d'inversion après *denn*.

## Comprendre un sondage (chiffres fictifs)
*Laut einer Umfrage* (selon un sondage) *in unserer Schule benutzen **80 Prozent** der Schüler ihr Handy jeden Tag mehr als zwei Stunden. **Die Hälfte** (la moitié) liest keine Zeitung. **Ein Drittel** (un tiers) schaut lieber Videos im Internet als Fernsehen.*

> **À retenir** : *Ich finde / glaube, dass + verbe à la fin* ; *Meiner Meinung nach + verbe + sujet* ; *Ein Vorteil / Nachteil ist, dass…* ; *einerseits … andererseits* ; *deshalb, trotzdem* = inversion ; *denn, aber* = pas d'inversion.

### Erreurs fréquentes
- *Meiner Meinung nach ich finde* → *Meiner Meinung nach **ist** das…* (ne cumule pas deux expressions d'opinion, et pense à l'inversion).
- *Ich finde, dass das Handy ist praktisch* → *…, dass das Handy praktisch **ist***.
- *Deshalb ich bleibe offline* → *Deshalb **bleibe ich** offline*.
- *das Handy* (neutre) est un faux anglicisme : en anglais, on dit *mobile phone* ou *cell phone*.
`,
      exercices: [
        { type: "qcm", question: "Que signifie *eine Nachricht schicken* ?", choix: ["regarder les informations", "envoyer un message", "télécharger une appli", "écrire un journal"], reponse: 1, explication: "*die Nachricht* = le message (et au pluriel *die Nachrichten* = aussi les informations à la télé) ; *schicken* = envoyer." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Meiner Meinung nach soziale Netzwerke sind gefährlich.", "Meiner Meinung nach sind soziale Netzwerke gefährlich.", "Meiner Meinung nach sind gefährlich soziale Netzwerke.", "Meiner Meinung nach, dass soziale Netzwerke gefährlich sind."], reponse: 1, explication: "*Meiner Meinung nach* occupe la 1re place : le verbe vient ensuite, puis le sujet → ***sind** soziale Netzwerke* gefährlich (inversion)." },
        { type: "saisie", question: "Complète : « Ich finde, dass Videospiele lustig ___. »", reponses: ["sind"], explication: "Après *dass*, le verbe conjugué va à la fin ; sujet pluriel *Videospiele* → **sind**." },
        { type: "vf", question: "Après *deshalb* en tête de phrase, le sujet vient directement avant le verbe : *Deshalb ich lese viel.*", reponse: false, explication: "*deshalb* compte comme 1er élément : **inversion** obligatoire → *Deshalb **lese ich** viel.* Seuls *und, aber, oder, denn* n'entraînent pas d'inversion." },
        { type: "saisie", question: "Traduis : « Un inconvénient, c'est que… » (début de phrase, 3 mots : *Ein … ist*)", reponses: ["Ein Nachteil ist", "Ein Nachteil ist, dass"], explication: "*der Nachteil* = l'inconvénient ; *der Vorteil* = l'avantage. *Ein Nachteil ist, dass man viel Zeit verliert.*" },
        { type: "qcm", question: "Complète : « ___ kann man schnell Informationen finden, ___ gibt es auch viele falsche Informationen. »", choix: ["Deshalb … trotzdem", "Zum Beispiel … aber", "Weil … denn", "Einerseits … andererseits"], reponse: 3, explication: "**Einerseits … andererseits** = d'un côté … de l'autre : on oppose un avantage et un inconvénient. Les deux entraînent l'inversion (*kann man, gibt es*). *Deshalb* (c'est pourquoi) supposerait une cause déjà énoncée, et *Weil … denn* est impossible (deux mots de cause, et *weil* exige le verbe à la fin)." },
        { type: "saisie", question: "Que veut dire *herunterladen* ? (un verbe français à l'infinitif)", reponses: ["télécharger"], explication: "*herunterladen* = **télécharger** (littéralement « charger vers le bas »). Verbe à particule : *Ich lade die App herunter.* Parfait : *Ich habe die App heruntergeladen.*" },
        { type: "qcm", question: "« *Ich bin süchtig nach meinem Handy.* » Que dit cette personne ?", choix: ["Elle a perdu son portable.", "Elle déteste son portable.", "Elle est accro à son portable.", "Elle a acheté un nouveau portable."], reponse: 2, explication: "*süchtig sein (nach)* = être dépendant, accro (à). *die Sucht* = la dépendance, l'addiction." },
        { type: "qcm", question: "**Compréhension.** (Sondage fictif) « *In unserer Klasse haben alle Schüler ein Handy. Die Hälfte ist mehr als drei Stunden pro Tag online. Ein Drittel liest nie eine Zeitung, aber viele schauen die Nachrichten auf dem Handy. Nur zwei Schüler finden, dass das Handy in der Schule verboten sein sollte.* » Quelle affirmation est vraie ?", choix: ["La moitié des élèves passent plus de trois heures par jour en ligne.", "Un tiers des élèves n'a pas de portable.", "La plupart des élèves veulent interdire le portable à l'école.", "Personne ne regarde les informations."], reponse: 0, explication: "*Die Hälfte ist mehr als drei Stunden pro Tag online* = la moitié passe plus de trois heures par jour en ligne. Tous ont un portable (*alle*), seuls deux élèves veulent l'interdire, et beaucoup regardent les informations sur leur portable." },
        { type: "redaction", question: "**Niveau fin de 3e.** Sur un forum, on te demande : *Sollte man Handys in der Schule verbieten?* Donne ton avis argumenté en 8 à 10 phrases : au moins deux avantages et deux inconvénients du portable, avec *Meiner Meinung nach*, *Ich finde, dass*, *einerseits … andererseits*, *deshalb* et une conclusion.", corrige: "**Modèle :**\n\n*Sollte man Handys in der Schule verbieten? Das ist eine schwierige Frage. Einerseits ist das Handy sehr praktisch: Man kann schnell etwas im Internet suchen und die Eltern anrufen. Ein Vorteil ist auch, dass man im Unterricht Apps zum Lernen benutzen kann. Andererseits stört das Handy oft. Viele Schüler schreiben Nachrichten, statt zuzuhören. Ein anderer Nachteil ist, dass man in der Pause nicht mehr miteinander spricht. Meiner Meinung nach sollte man das Handy nicht ganz verbieten. Ich finde, dass man es nur in der Pause benutzen sollte. Deshalb bin ich für klare Regeln, aber gegen ein totales Verbot.*\n\nPoints à vérifier :\n- inversion après *Einerseits, Andererseits, Meiner Meinung nach, Deshalb* ;\n- verbe à la fin après *dass* (*benutzen kann, spricht, benutzen sollte*) ;\n- vocabulaire : *Vorteil, Nachteil, verbieten, Nachrichten schreiben, anrufen* ;\n- une vraie conclusion qui répond à la question." },
      ],
    },
    {
      id: "amitie-sentiments-pronominaux",
      titre: "Amitiés et sentiments : les verbes pronominaux",
      theme: "Rencontres avec d'autres cultures",
      cours: `
## Dire ce qu'on ressent
| Allemand | Français |
|---|---|
| froh / glücklich | content / heureux |
| traurig | triste |
| sauer / wütend | fâché / furieux |
| nervös / aufgeregt | nerveux / excité, impatient |
| enttäuscht | déçu |
| eifersüchtig | jaloux |
| stolz auf (+ acc.) | fier de |
| Angst haben vor (+ dat.) | avoir peur de |
| verliebt sein in (+ acc.) | être amoureux de |

*Wie fühlst du dich?* (Comment te sens-tu ?) – *Ich fühle mich wohl / nicht wohl.* (Je me sens bien / pas bien.)

## Les verbes pronominaux (reflexive Verben)
Comme en français « se lever, s'amuser », ces verbes ont un **pronom réfléchi** :

| sujet | pronom réfléchi | exemple : sich freuen (se réjouir) |
|---|---|---|
| ich | **mich** | ich freue mich |
| du | **dich** | du freust dich |
| er / sie / es / man | **sich** | er freut sich |
| wir | **uns** | wir freuen uns |
| ihr | **euch** | ihr freut euch |
| sie / Sie | **sich** | sie freuen sich |

Verbes utiles pour parler des relations :
- **sich treffen** (se retrouver) : *Wir treffen uns um 16 Uhr vor dem Kino.*
- **sich kennenlernen** (faire connaissance) : *Wir haben uns im Urlaub kennengelernt.*
- **sich verstehen** (s'entendre) : *Ich verstehe mich gut mit meiner Schwester.*
- **sich streiten** (se disputer) : *Meine Brüder streiten sich oft.*
- **sich entschuldigen** (s'excuser) : *Er hat sich bei mir entschuldigt.*
- **sich langweilen** (s'ennuyer) – **sich beeilen** (se dépêcher) – **sich fühlen** (se sentir).

## Verbes pronominaux + préposition
| Verbe | Sens | Exemple |
|---|---|---|
| sich freuen **auf** + acc. | attendre avec impatience (futur) | *Ich freue mich auf die Ferien.* |
| sich freuen **über** + acc. | être content de (ce qu'on a) | *Ich freue mich über dein Geschenk.* |
| sich interessieren **für** + acc. | s'intéresser à | *Er interessiert sich für Geschichte.* |
| sich ärgern **über** + acc. | s'énerver contre | *Ich ärgere mich über meine Note.* |
| sich verlieben **in** + acc. | tomber amoureux de | *Sie hat sich in Jonas verliebt.* |

>! **La place du pronom réfléchi** : il se met **juste après le verbe conjugué**, ou juste après le sujet en cas d'inversion :
>! - *Ich **freue mich** auf deinen Besuch.*
>! - *Morgen **treffen wir uns** in der Stadt.*
>! - Dans une subordonnée : *…, weil ich **mich** nicht gut **fühle**.*
>! - Au parfait, toujours avec **haben** : *Wir **haben uns** gestritten.*

>! **Pour terminer une lettre** à ton correspondant : *Ich freue mich auf deine Antwort!* (J'attends ta réponse avec impatience.) – *Ich freue mich schon auf deinen Besuch!*

> **À retenir** : pronoms réfléchis **mich, dich, sich, uns, euch, sich** ; placés après le verbe conjugué. *sich freuen **auf*** (à venir) / ***über*** (déjà là) ; *sich interessieren **für*** ; parfait avec **haben** (*ich habe mich gefreut*). *Wie fühlst du dich?*

### Erreurs fréquentes
- *Ich freue sich* → *Ich freue **mich*** (le pronom correspond au sujet).
- *Ich interessiere mich an Musik* → *…mich **für** Musik*.
- *Wir sind uns getroffen* → *Wir **haben** uns getroffen*.
- *Ich freue mich auf dein Geschenk* (que j'ai déjà reçu) → *…**über** dein Geschenk*.
`,
      exercices: [
        { type: "saisie", question: "Complète avec le pronom réfléchi : « Wir treffen ___ um 15 Uhr am Bahnhof. »", reponses: ["uns"], explication: "Sujet *wir* → pronom réfléchi **uns** : *Wir treffen uns…*" },
        { type: "qcm", question: "Complète : « Mein Bruder interessiert sich sehr ___ Fußball. »", choix: ["an", "für", "auf", "über"], reponse: 1, explication: "On dit **sich interessieren für** + accusatif : *Er interessiert sich für Fußball.*" },
        { type: "qcm", question: "Les vacances commencent dans une semaine. Que dis-tu ?", choix: ["Ich freue mich über die Ferien.", "Ich freue dich auf die Ferien.", "Ich freue mich auf die Ferien.", "Ich freue mich für die Ferien."], reponse: 2, explication: "Pour un événement **à venir**, on dit **sich freuen auf** : *Ich freue mich auf die Ferien.* *über* s'emploie pour quelque chose qu'on a déjà ou qui vient d'arriver." },
        { type: "vf", question: "Au parfait, les verbes pronominaux se conjuguent avec *haben* : *Ich habe mich gefreut.*", reponse: true, explication: "Oui, toujours **haben** (contrairement au français « je me suis réjoui ») : *Wir haben uns gestritten. Sie hat sich verliebt.*" },
        { type: "saisie", question: "Complète : « Wie fühlst du ___? » (Comment te sens-tu ?)", reponses: ["dich"], explication: "Sujet *du* → pronom réfléchi **dich** : *Wie fühlst du dich?* – *Ich fühle mich gut.*" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Gestern wir haben uns gestritten.", "Gestern haben wir uns gestritten.", "Gestern sind wir uns gestritten.", "Gestern haben uns wir gestritten."], reponse: 1, explication: "*Gestern* en tête → **inversion** (*haben wir*), pronom réfléchi juste après le sujet (*uns*), auxiliaire **haben**, participe à la fin." },
        { type: "saisie", question: "Traduis : « Je suis fier de toi. » (*stolz auf*)", reponses: ["Ich bin stolz auf dich."], explication: "*stolz sein auf* + **accusatif** : *auf dich*. *Ich bin stolz auf dich!*" },
        { type: "saisie", question: "Termine ta lettre poliment : « J'attends ta réponse avec impatience ! » (avec *sich freuen auf*)", reponses: ["Ich freue mich auf deine Antwort!", "Ich freue mich schon auf deine Antwort!", "Ich freue mich sehr auf deine Antwort!", "Ich freue mich schon sehr auf deine Antwort!", "Ich freu mich auf deine Antwort!", "Ich freu mich schon auf deine Antwort!", "Ich freu mich sehr auf deine Antwort!"], explication: "Formule classique de fin de lettre : ***Ich freue mich auf deine Antwort!*** (*die Antwort* : féminin → accusatif *deine*)." },
        { type: "qcm", question: "**Compréhension.** « *Liebe Clara, letzte Woche habe ich mich mit meiner besten Freundin Mia gestritten. Sie hat mein Geheimnis allen erzählt! Ich war sehr sauer und auch traurig. Aber gestern hat sie sich bei mir entschuldigt. Jetzt verstehen wir uns wieder gut. Deine Lisa* » Comment va l'amitié entre Lisa et Mia maintenant ?", choix: ["Elles ne se parlent plus.", "Lisa est encore fâchée.", "Elles s'entendent de nouveau bien.", "Mia est partie à l'étranger."], reponse: 2, explication: "*Jetzt verstehen wir uns wieder gut* = maintenant, nous nous entendons de nouveau bien. Mia s'est excusée (*hat sich entschuldigt*) après avoir raconté le secret de Lisa." },
        { type: "redaction", question: "**Niveau fin de 3e.** Écris une lettre (8 à 10 phrases) à ton correspondant allemand avant son arrivée en France pour l'échange : présente-toi rapidement, dis ce qui t'intéresse, ce que vous ferez ensemble, ce qui te rend nerveux ou impatient. Utilise au moins quatre verbes pronominaux, dont *sich freuen auf* et *sich interessieren für*.", corrige: "**Modèle :**\n\n*Lieber Felix,\nich heiße Malo und ich bin dein Austauschpartner! Ich bin 14 Jahre alt und wohne in Rennes. Ich interessiere mich für Sport und Musik, besonders für Basketball. Wenn du hier bist, treffen wir uns mit meinen Freunden im Park und wir gehen zusammen ins Kino. Ich verstehe mich gut mit meiner Familie, du wirst sie bestimmt mögen. Ich bin ein bisschen nervös, weil mein Deutsch nicht perfekt ist. Aber ich freue mich sehr auf deinen Besuch! Hoffentlich langweilst du dich nicht bei uns.\nIch freue mich auf deine Antwort!\nViele Grüße\nMalo*\n\nPoints à vérifier :\n- pronoms réfléchis accordés : *ich interessiere **mich**, wir treffen **uns**, du langweilst **dich*** ;\n- prépositions : *sich interessieren **für**, sich freuen **auf** + accusatif (*deinen Besuch*) ;\n- formules de lettre : *Lieber Felix, … Viele Grüße* ;\n- verbe à la fin après *wenn* et *weil*." },
      ],
    },
    {
      id: "voyager-vacances",
      titre: "Voyager : en train, à l'auberge, en vacances",
      theme: "Voyages et migrations",
      cours: `
## À la gare (am Bahnhof)
| Allemand | Français |
|---|---|
| der Bahnhof / der Hauptbahnhof (Hbf) | la gare / la gare centrale |
| der Zug / der ICE | le train / le TGV allemand |
| das Gleis | le quai, la voie |
| die Fahrkarte / das Ticket | le billet |
| einfach / hin und zurück | aller simple / aller-retour |
| die Abfahrt / die Ankunft | le départ / l'arrivée |
| abfahren / ankommen | partir / arriver |
| einsteigen / aussteigen | monter / descendre (du train, du bus) |
| umsteigen | changer (de train) |
| die Verspätung | le retard |
| der Fahrplan | les horaires |
| der Koffer / der Rucksack | la valise / le sac à dos |

Au guichet ou à la borne :
- *Eine Fahrkarte nach Hamburg, bitte. – Einfach oder hin und zurück?*
- *Wann fährt der nächste Zug nach München ab?* – *Um 14.32 Uhr von Gleis 7.*
- *Muss ich umsteigen?* – *Ja, in Frankfurt.*
- Annonce : *Der ICE nach Berlin hat zehn Minuten Verspätung.*

## Se loger
- *die Jugendherberge* (l'auberge de jeunesse), *das Hotel*, *der Campingplatz*, *das Zelt* (la tente), *die Ferienwohnung* (la location de vacances).
- *Ich möchte ein Zimmer für zwei Nächte reservieren.* – *Haben Sie ein Doppelzimmer / ein Einzelzimmer frei?*
- *Ist das Frühstück inklusive?* – *Wie viel kostet eine Übernachtung?*

## Raconter un voyage : parfait avec sein et prétérit
- *Wir **sind** mit dem Zug nach Wien **gefahren**. Die Reise **hat** acht Stunden **gedauert**.*
- *Wir **haben** in einer Jugendherberge **übernachtet**.* (Nous avons dormi dans une auberge de jeunesse.)
- *Das Wetter **war** schön und wir **hatten** viel Spaß.*
- *Wir **sind** auf einen Berg **gestiegen**, wir **sind** im See **geschwommen**.* (*schwimmen* se conjugue le plus souvent avec *sein* ; on entend aussi *haben*.)

## Écrire une carte postale
>! **Modèle** :
>! *Liebe Oma,*
>! *viele Grüße aus Salzburg! Wir sind seit drei Tagen hier. Die Stadt ist wunderschön. Gestern haben wir das Geburtshaus von Mozart besucht. Heute fahren wir in die Berge. Das Essen schmeckt sehr gut, besonders der Apfelstrudel!*
>! *Bis bald, deine Emma*
>! Structure : salutation (*Liebe… / Lieber…*), *Grüße aus* + lieu, depuis quand (*seit* + datif), ce que tu as fait (parfait), ce que tu feras, ton avis, formule finale.

> **À retenir** : *eine Fahrkarte nach…, einfach / hin und zurück* ; *Gleis, umsteigen, Verspätung, abfahren, ankommen* ; *ein Zimmer reservieren* ; récit au parfait avec **sein** pour les déplacements (*sind gefahren, sind geflogen, sind angekommen*) ; carte : *Liebe… / viele Grüße aus…*.

### Erreurs fréquentes
- *Ich bin mit dem Zug gegangen* → *Ich bin mit dem Zug **gefahren*** (*gehen* = à pied).
- *Wir haben in Wien angekommen* → *Wir **sind** in Wien angekommen*.
- *Lieber Oma* → ***Liebe** Oma* (féminin) ; ***Lieber** Opa* (masculin).
`,
      exercices: [
        { type: "qcm", question: "Que veut dire *hin und zurück* ?", choix: ["aller simple", "en retard", "première classe", "aller-retour"], reponse: 3, explication: "*hin und zurück* = **aller-retour** (*hin* = aller, *zurück* = retour). Aller simple se dit *einfach*." },
        { type: "saisie", question: "Comment dit-on « le retard » (d'un train) ? Donne le nom avec son article.", reponses: ["die Verspätung"], explication: "***die Verspätung*** : *Der Zug hat 20 Minuten Verspätung.* (Le train a 20 minutes de retard.)" },
        { type: "qcm", question: "Tu dois changer de train à Francfort. Que dit le contrôleur ?", choix: ["Sie müssen in Frankfurt aussteigen und nach Hause gehen.", "Sie müssen in Frankfurt einsteigen.", "Sie müssen in Frankfurt umsteigen.", "Sie müssen in Frankfurt abfahren."], reponse: 2, explication: "*umsteigen* = **changer** (de train, de bus). *einsteigen* = monter, *aussteigen* = descendre, *abfahren* = partir." },
        { type: "saisie", question: "Complète au parfait : « Wir ___ um 18 Uhr in Wien angekommen. »", reponses: ["sind"], explication: "*ankommen* (arriver) est un verbe de **déplacement** : auxiliaire **sein** → *Wir **sind** … angekommen.*" },
        { type: "vf", question: "Une *Jugendherberge* est une auberge de jeunesse.", reponse: true, explication: "Oui : *die Jugend* (la jeunesse) + *die Herberge* (l'auberge). L'Allemagne a un très grand réseau d'auberges de jeunesse, souvent utilisées par les voyages scolaires." },
        { type: "saisie", question: "Demande poliment à la réception : « Je voudrais réserver une chambre pour deux nuits. »", reponses: ["Ich möchte ein Zimmer für zwei Nächte reservieren.", "Ich möchte ein Zimmer für 2 Nächte reservieren.", "Ich würde gern ein Zimmer für zwei Nächte reservieren.", "Ich hätte gern ein Zimmer für zwei Nächte.", "Ich möchte bitte ein Zimmer für zwei Nächte reservieren.", "Ich möchte gern ein Zimmer für zwei Nächte reservieren.", "Ich möchte gerne ein Zimmer für zwei Nächte reservieren.", "Ich würde gerne ein Zimmer für zwei Nächte reservieren.", "Ich hätte gerne ein Zimmer für zwei Nächte.", "Ich möchte für zwei Nächte ein Zimmer reservieren."], explication: "*Ich möchte* + complément + **infinitif à la fin** : *Ich möchte ein Zimmer für zwei **Nächte** reservieren.* (*die Nacht* → pluriel *die Nächte*)." },
        { type: "qcm", question: "Complète la carte postale : « ___ Oma, viele Grüße aus Wien! »", choix: ["Lieber", "Lieben", "Liebe", "Liebes"], reponse: 2, explication: "*Oma* est féminin : ***Liebe** Oma*. Pour un homme : *Lieber Opa* ; pour plusieurs personnes : *Liebe Eltern*." },
        { type: "qcm", question: "Lis cette annonce entendue en gare : « *Der ICE nach Köln fährt heute von Gleis 4 ab, nicht von Gleis 9.* » Que se passe-t-il ?", choix: ["Le train pour Cologne part d'un autre quai que prévu.", "Le train pour Cologne est annulé.", "Le train arrive de Cologne au quai 9.", "Le train pour Cologne a quatre minutes de retard."], reponse: 0, explication: "*fährt … von Gleis 4 ab, nicht von Gleis 9* : le train **part du quai 4** et non du quai 9 (changement de quai). *abfahren* = partir." },
        { type: "qcm", question: "**Compréhension.** « *In den Sommerferien bin ich mit meiner Familie nach Österreich gefahren. Wir haben zwei Wochen auf einem Campingplatz am See gewohnt. Es hat oft geregnet, deshalb haben wir viele Museen besucht. Am letzten Tag sind wir auf einen Berg gestiegen: Der Blick war fantastisch!* » Pourquoi la famille a-t-elle visité beaucoup de musées ?", choix: ["Parce qu'il a souvent plu.", "Parce que le camping était fermé.", "Parce que le lac était trop froid.", "Parce qu'ils n'aiment pas la montagne."], reponse: 0, explication: "*Es hat oft geregnet, **deshalb** haben wir viele Museen besucht* = il a souvent plu, **c'est pourquoi** nous avons visité beaucoup de musées." },
        { type: "redaction", question: "**Niveau fin de 3e.** Tu es en voyage scolaire dans un pays germanophone. Écris une carte postale ou un message (8 à 10 phrases) à ta famille : où tu es depuis quand, comment s'est passé le trajet, où tu dors, ce que tu as fait (parfait, avec au moins trois verbes au parfait avec *sein*), ce que tu feras demain, ton avis.", corrige: "**Modèle :**\n\n*Liebe Mama, lieber Papa,\nviele Grüße aus Berlin! Ich bin seit Montag hier mit meiner Klasse. Wir sind mit dem Zug gefahren, die Reise hat neun Stunden gedauert und wir mussten in Köln umsteigen. Wir schlafen in einer Jugendherberge, das Zimmer ist klein, aber gemütlich. Gestern sind wir zum Brandenburger Tor gegangen und haben die East Side Gallery besucht. Am Abend sind wir mit dem Schiff auf der Spree gefahren. Morgen werden wir den Reichstag besichtigen. Das Essen ist nicht so gut wie zu Hause, aber die Stadt ist toll!\nBis Samstag, eure Chloé*\n\nPoints à vérifier :\n- *Liebe Mama, lieber Papa* ; *viele Grüße aus* ; *seit Montag* (présent en allemand) ;\n- parfait avec **sein** : *sind gefahren, sind gegangen* ; avec **haben** : *hat gedauert, haben besucht* ;\n- *mussten* (prétérit du modal) ; futur *werden … besichtigen* ;\n- formule finale *eure* (pour plusieurs personnes)." },
      ],
    },
    {
      id: "migrations-gastarbeiter",
      titre: "Partir et arriver : les migrations en Allemagne",
      theme: "Voyages et migrations",
      cours: `
## Le vocabulaire de la migration
| Allemand | Français |
|---|---|
| auswandern (ist ausgewandert) | émigrer (quitter son pays) |
| einwandern (ist eingewandert) | immigrer (arriver dans un pays) |
| der Auswanderer / der Einwanderer | l'émigrant / l'immigrant |
| die Heimat | le pays natal, le « chez-soi » |
| das Heimweh | le mal du pays |
| fremd / der Fremde | étranger, inconnu / l'étranger |
| fliehen (floh, ist geflohen) / der Flüchtling | fuir / le réfugié |
| die Arbeit suchen / finden | chercher / trouver du travail |
| die Sprache lernen | apprendre la langue |
| zweisprachig | bilingue |
| die Staatsangehörigkeit | la nationalité |

## Autrefois : des Allemands partent
Au **XIXe siècle**, des millions d'Allemands ont émigré, surtout vers les **États-Unis**, pour fuir la pauvreté ou chercher la liberté. Beaucoup sont partis du port de **Bremerhaven**, où un musée, le *Deutsches Auswandererhaus*, raconte leur histoire depuis 2005.

## Les « Gastarbeiter » : des travailleurs invités
Après la Seconde Guerre mondiale, l'économie de la RFA (Allemagne de l'Ouest) grandit très vite (*das Wirtschaftswunder*, le « miracle économique ») et il manque des ouvriers. L'Allemagne signe des **accords de recrutement** (*Anwerbeabkommen*) :

| Année | Pays |
|---|---|
| 1955 | Italie |
| 1960 | Espagne, Grèce |
| 1961 | Turquie |
| 1963 | Maroc |
| 1964 | Portugal |
| 1965 | Tunisie |
| 1968 | Yougoslavie |

On les appelait **Gastarbeiter** (« travailleurs invités ») car on pensait qu'ils repartiraient. Le 10 septembre 1964, à la gare de Cologne-Deutz, le **millionième** travailleur invité, le Portugais Armando Rodrigues de Sá, a été accueilli avec des fleurs et a reçu un cyclomoteur en cadeau. En **1973**, le recrutement s'arrête (*der Anwerbestopp*), mais beaucoup de travailleurs restent et font venir leur famille. De son côté, la RDA (Allemagne de l'Est) fait venir elle aussi des *Vertragsarbeiter* (« travailleurs sous contrat »), d'abord de Pologne et de Hongrie, puis surtout, dans les années 1980, du Vietnam et du Mozambique. La Suisse voisine a, elle aussi, fait venir des travailleurs, surtout italiens. En 1965, à leur propos, l'écrivain suisse **Max Frisch** a écrit une phrase restée célèbre, souvent citée aussi en Allemagne : *« Man hat Arbeitskräfte gerufen, und es kommen Menschen. »* (On a appelé de la main-d'œuvre, et ce sont des êtres humains qui arrivent.)

## Aujourd'hui : un pays d'immigration
- Environ **une personne sur quatre** vivant en Allemagne a une histoire d'immigration (*eine Einwanderungsgeschichte*) : elle-même ou ses deux parents sont venus d'un autre pays.
- La communauté **d'origine turque** est la plus nombreuse (environ trois millions de personnes).
- En **2015**, l'Allemagne a accueilli environ 890 000 demandeurs d'asile, venus surtout de Syrie, d'Afghanistan et d'Irak. La chancelière Angela Merkel a alors déclaré : *« Wir schaffen das! »* (Nous y arriverons !).
- Beaucoup d'auteurs, de footballeurs, de musiciens allemands ont des racines dans d'autres pays.

## Parler d'un parcours
- *Meine Großeltern **sind** 1970 aus der Türkei nach Deutschland **gekommen**.*
- *Sie **wohnen seit** fünfzig Jahren in Köln.* (présent avec *seit*, comme en français)
- *Als mein Opa ankam, **sprach** er kein Wort Deutsch.*
- *Am Anfang **hatte** er Heimweh, aber dann **fand** er Freunde.*
- *Ich bin zweisprachig: Zu Hause spreche ich Portugiesisch, in der Schule Deutsch.*

> **À retenir** : *auswandern* (partir) / *einwandern* (arriver), *die Heimat, das Heimweh, der Flüchtling*. Au XIXe siècle, émigration vers l'Amérique ; de **1955** à **1973**, accords de recrutement de *Gastarbeiter* (Italie, Turquie…) ; aujourd'hui, environ un habitant sur quatre a une histoire d'immigration. Parcours : *seit* + présent, *als* + prétérit.

### Erreurs fréquentes
- Confondre *auswandern* (**aus** = hors de : quitter) et *einwandern* (**ein** = dans : entrer).
- *Er hat ausgewandert* → *Er **ist** ausgewandert* (déplacement).
- *Er wohnt in Berlin seit 1990* est correct, mais pas *Er hat in Berlin seit 1990 gewohnt* s'il y habite encore.
`,
      exercices: [
        { type: "qcm", question: "Que signifie *einwandern* ?", choix: ["émigrer, quitter son pays", "immigrer, arriver dans un pays", "voyager en vacances", "revenir chez soi"], reponse: 1, explication: "**ein** = dans, vers l'intérieur : *einwandern* = **immigrer**, entrer dans un pays. *auswandern* (aus = hors de) = émigrer." },
        { type: "saisie", question: "Quel mot allemand désigne « le mal du pays » ? (avec l'article)", reponses: ["das Heimweh"], explication: "***das Heimweh*** : *die Heimat* (le pays natal) + *das Weh* (la douleur). *Am Anfang hatte er Heimweh.*" },
        { type: "qcm", question: "Pourquoi appelait-on les travailleurs étrangers des années 1950-1970 *Gastarbeiter* ?", choix: ["Parce qu'ils travaillaient dans des restaurants.", "Parce qu'ils étaient tous touristes.", "Parce qu'on pensait qu'ils ne resteraient pas : ils étaient « invités ».", "Parce qu'ils venaient seulement d'Autriche."], reponse: 2, explication: "*der Gast* = l'invité : on pensait que ces travailleurs repartiraient dans leur pays après quelques années. Beaucoup sont finalement restés et ont fait venir leur famille." },
        { type: "vf", question: "Le premier accord de recrutement de travailleurs (*Anwerbeabkommen*) a été signé avec l'Italie en 1955.", reponse: true, explication: "Oui : Italie (1955), puis Espagne et Grèce (1960), Turquie (1961), Maroc (1963), Portugal (1964), Tunisie (1965), Yougoslavie (1968). Le recrutement s'arrête en 1973." },
        { type: "saisie", question: "Complète au parfait : « Meine Großeltern ___ 1972 aus Italien nach Deutschland gekommen. »", reponses: ["sind"], explication: "*kommen* = déplacement → auxiliaire **sein** ; sujet pluriel → **sind**." },
        { type: "qcm", question: "Ta grand-mère est arrivée en Allemagne en 1975 et y vit toujours. Comment le dis-tu ?", choix: ["Sie hat seit 1975 in Deutschland gewohnt.", "Sie wohnt seit 1975 in Deutschland.", "Sie wohnte seit 1975 in Deutschland.", "Sie wohnt für 1975 in Deutschland."], reponse: 1, explication: "L'action dure encore : **présent + seit**, comme en français (« elle habite en Allemagne depuis 1975 »)." },
        { type: "saisie", question: "Traduis : « Il a fui son pays. » (verbe *fliehen*, parfait ; *aus seinem Land*)", reponses: ["Er ist aus seinem Land geflohen.", "Er ist aus seinem Land geflüchtet."], explication: "*fliehen – floh – **ist geflohen*** : verbe de déplacement → **sein**. *aus* + datif : *aus seinem Land*." },
        { type: "qcm", question: "Qui a écrit en 1965 : *« Man hat Arbeitskräfte gerufen, und es kommen Menschen »* ?", choix: ["Goethe", "Angela Merkel", "Mozart", "Max Frisch"], reponse: 3, explication: "C'est l'écrivain suisse **Max Frisch**, à propos des travailleurs italiens en Suisse. La phrase rappelle que ces « travailleurs » sont des êtres humains, avec une famille et une vie." },
        { type: "qcm", question: "**Compréhension.** (Texte d'entraînement) « *Ich heiße Deniz, ich bin 15 und wohne in Duisburg. Mein Opa kam 1969 aus der Türkei, um in einer Fabrik zu arbeiten. Er wollte nur zwei Jahre bleiben, aber dann hat er meine Oma geheiratet und ist geblieben. Ich bin in Deutschland geboren. Zu Hause sprechen wir Türkisch und Deutsch.* » Quelle affirmation est vraie ?", choix: ["Le grand-père de Deniz voulait d'abord rester seulement deux ans.", "Deniz est né en Turquie.", "Le grand-père est reparti en Turquie.", "La famille ne parle que l'allemand."], reponse: 0, explication: "*Er wollte nur zwei Jahre bleiben* = il voulait rester seulement deux ans ; puis il s'est marié et il est resté (*ist geblieben*). Deniz est né en Allemagne et la famille est bilingue." },
        { type: "redaction", question: "**Niveau fin de 3e.** Imagine que tu es un jeune qui arrive en Allemagne depuis un autre pays (ou raconte une histoire de migration que tu connais). Écris 8 à 10 phrases : d'où tu viens et pourquoi, le voyage, les premiers jours (difficultés, sentiments), aujourd'hui. Utilise le parfait et/ou le prétérit, *seit*, *als* et *weil*.", corrige: "**Modèle (texte d'imagination) :**\n\n*Ich heiße Lucía und komme aus Spanien. Vor zwei Jahren sind wir nach München gezogen, weil mein Vater dort eine Arbeit gefunden hat. Wir sind mit dem Auto gefahren, die Reise war sehr lang. Als ich in die neue Schule kam, konnte ich nur „Hallo“ und „Danke“ sagen. Ich war oft traurig und hatte Heimweh, denn meine Freunde waren in Madrid. Aber meine Klassenkameraden waren nett und haben mir geholfen. Ich habe jeden Tag Deutsch gelernt. Seit einem Jahr spiele ich in einer Basketballmannschaft und habe viele Freunde. Jetzt bin ich zweisprachig, und darauf bin ich stolz!*\n\nPoints à vérifier :\n- parfait avec **sein** pour les déplacements (*sind gezogen, sind gefahren*) ; prétérit de *sein, haben*, des modaux et récit (*war, hatte, konnte, kam*) ;\n- *als* + verbe à la fin (*Als ich … kam,*) puis **verbe, virgule, verbe** (*konnte ich*) ;\n- *seit* + datif + **présent** (*Seit einem Jahr spiele ich*) ;\n- *weil* + verbe à la fin (*gefunden hat*)." },
      ],
    },
    {
      id: "berlin-mur-reunification",
      titre: "Berlin, ville divisée : du Mur à la réunification",
      theme: "Voyages et migrations",
      cours: `
## Une ville coupée en deux
- **1945** : l'Allemagne vaincue est divisée en quatre zones d'occupation (américaine, britannique, française, soviétique). **Berlin**, située dans la zone soviétique, est elle aussi partagée en quatre secteurs.
- **1949** : naissance de deux États : la **BRD** (*Bundesrepublik Deutschland*, la RFA, à l'ouest, capitale Bonn) et la **DDR** (*Deutsche Demokratische Republik*, la RDA, à l'est, dictature communiste alliée à l'URSS).
- Entre 1949 et 1961, plus de deux millions et demi d'habitants de la RDA fuient vers l'Ouest, beaucoup en passant par Berlin.

## Le Mur (die Mauer), 1961-1989
- Dans la nuit du **13 août 1961**, la RDA commence à construire un mur autour de **Berlin-Ouest** : environ 155 km de béton, de barbelés, de miradors et un « couloir de la mort » surveillé.
- Des familles et des amis sont séparés du jour au lendemain. Au moins **140 personnes** sont mortes au Mur en essayant de passer.
- En 1963, le président américain John F. Kennedy vient à Berlin-Ouest et déclare : *« Ich bin ein Berliner. »*
- **Checkpoint Charlie** était un point de passage célèbre entre les secteurs américain et soviétique.

## La chute du Mur, le 9 novembre 1989
- En 1989, les habitants de la RDA manifestent pacifiquement, notamment à Leipzig lors des « manifestations du lundi » (*Montagsdemonstrationen*), en criant *« Wir sind das Volk! »* (Le peuple, c'est nous !).
- Le **9 novembre 1989** au soir, un dirigeant de la RDA, Günter Schabowski, annonce par erreur que les nouvelles règles de voyage s'appliquent *« sofort, unverzüglich »* (tout de suite, immédiatement). Des milliers de Berlinois de l'Est se pressent aux postes-frontières, qui finissent par s'ouvrir : c'est la fête, on danse sur le Mur.
- Le **3 octobre 1990**, l'Allemagne est **réunifiée** (*die Wiedervereinigung*) : c'est aujourd'hui la fête nationale, *der Tag der Deutschen Einheit*.

## Que voir aujourd'hui ?
- La **East Side Gallery** : le plus long morceau de Mur conservé (environ 1,3 km), peint par des artistes du monde entier en 1990.
- Le **mémorial du Mur** (*Gedenkstätte Berliner Mauer*), Bernauer Straße.
- La **porte de Brandebourg** (*das Brandenburger Tor*), symbole de la division puis de l'unité.
- Une double rangée de pavés marque l'ancien tracé du Mur dans le centre-ville.

## Pour lire un texte d'histoire : le passif
Dans les textes d'histoire, tu rencontreras souvent **wurde** + participe passé : c'est le **passif** (« a été / fut … »).
- *Die Mauer **wurde** 1961 **gebaut**.* (Le Mur a été construit en 1961.)
- *Die Grenze **wurde** am 9. November 1989 **geöffnet**.* (La frontière a été ouverte.)
- *Deutschland **wurde** 1990 **wiedervereinigt**.*

Et pour les dates : *im Jahr 1961* ou simplement *1961* (jamais *in 1961*) ; *am 9. November* (« am neunten November »). Le **point après le chiffre est obligatoire** : il montre que c'est un nombre ordinal (*9.* = *neunte*, « le neuvième »), comme le « e » de « 9e » en français. *am 9 November* sans point est une faute.

> **À retenir** : **13 août 1961** : construction du Mur ; **9 novembre 1989** : chute du Mur ; **3 octobre 1990** : réunification (*Tag der Deutschen Einheit*). BRD = RFA (Ouest), DDR = RDA (Est). Passif : *wurde + participe* (*wurde gebaut*). Dates : *1961* ou *im Jahr 1961*, *am 9. November*.

### Erreurs fréquentes
- Confondre le 9 novembre 1989 (chute du Mur) et le 3 octobre 1990 (réunification).
- *in 1989* → *1989* ou *im Jahr 1989*.
- Croire que le Mur entourait toute la RDA : il entourait **Berlin-Ouest** ; une autre frontière fortifiée séparait les deux Allemagnes.
`,
      exercices: [
        { type: "qcm", question: "Quand le Mur de Berlin a-t-il été construit ?", choix: ["Le 9 novembre 1989", "Le 3 octobre 1990", "Le 13 août 1961", "Le 8 mai 1945"], reponse: 2, explication: "La construction commence dans la nuit du **13 août 1961**. Il tombe le 9 novembre 1989 ; la réunification a lieu le 3 octobre 1990." },
        { type: "saisie", question: "En quelle année l'Allemagne a-t-elle été réunifiée ?", reponses: ["1990"], explication: "Le **3 octobre 1990** : c'est le *Tag der Deutschen Einheit*, la fête nationale allemande." },
        { type: "vf", question: "La DDR (RDA) était l'État situé à l'ouest de l'Allemagne.", reponse: false, explication: "La **DDR** (*Deutsche Demokratische Republik*, RDA) était à l'**est**, alliée à l'URSS. À l'ouest, c'était la **BRD** (*Bundesrepublik Deutschland*, RFA)." },
        { type: "qcm", question: "Que signifie « *Die Mauer wurde 1961 gebaut* » ?", choix: ["Le Mur a été construit en 1961.", "Le Mur deviendra célèbre en 1961.", "On construira le Mur en 1961.", "Le Mur est tombé en 1961."], reponse: 0, explication: "**wurde + participe passé** = passif au passé : « a été construit ». *bauen* = construire." },
        { type: "qcm", question: "Que criaient les manifestants de Leipzig en 1989 ?", choix: ["« Ich bin ein Berliner! »", "« Sofort, unverzüglich! »", "« Wir schaffen das! »", "« Wir sind das Volk! »"], reponse: 3, explication: "***Wir sind das Volk!*** (Le peuple, c'est nous !) : slogan des manifestations pacifiques du lundi. *Ich bin ein Berliner* est de Kennedy (1963) ; *sofort, unverzüglich* vient de Schabowski." },
        { type: "saisie", question: "Comment s'appelle en allemand la fête nationale du 3 octobre ? (*Tag der …*)", reponses: ["Tag der Deutschen Einheit", "der Tag der Deutschen Einheit", "Deutschen Einheit"], explication: "***der Tag der Deutschen Einheit*** (le jour de l'unité allemande), le 3 octobre, anniversaire de la réunification de 1990." },
        { type: "qcm", question: "Qu'est-ce que la *East Side Gallery* ?", choix: ["Un grand musée d'art moderne dans un ancien palais.", "La gare principale de Berlin.", "Le plus long morceau de Mur conservé, couvert de peintures.", "Un quartier commerçant de Berlin-Ouest."], reponse: 2, explication: "C'est un tronçon d'environ 1,3 km du Mur, peint en 1990 par des artistes du monde entier : un des lieux les plus visités de Berlin." },
        { type: "saisie", question: "Traduis : « La frontière a été ouverte le 9 novembre 1989. » (*die Grenze, öffnen*)", reponses: ["Die Grenze wurde am 9. November 1989 geöffnet.", "Die Grenze wurde am neunten November 1989 geöffnet.", "Am 9. November 1989 wurde die Grenze geöffnet.", "Am neunten November 1989 wurde die Grenze geöffnet.", "Die Grenze ist am 9. November 1989 geöffnet worden.", "Am 9. November 1989 ist die Grenze geöffnet worden."], explication: "Passif : ***wurde** + participe **geöffnet*** à la fin (on peut aussi dire *ist … geöffnet worden*, le passif au parfait). Date : ***am** 9. November 1989*. Si la date est en tête, inversion : *Am 9. November 1989 wurde die Grenze geöffnet.*" },
        { type: "qcm", question: "**Compréhension.** (Témoignage d'entraînement) « *Ich war 1989 sechzehn Jahre alt und wohnte in Ostberlin. Am 9. November habe ich im Fernsehen gehört, dass man in den Westen fahren darf. Mit meinem Bruder bin ich sofort zur Grenze gegangen. Um Mitternacht waren wir im Westen! Die Leute haben uns umarmt und Sekt getrunken.* » Quelle affirmation est vraie ?", choix: ["La personne habitait à Berlin-Ouest.", "La personne a appris la nouvelle à la radio le lendemain.", "Elle est restée chez elle le soir du 9 novembre.", "Vers minuit, elle était passée à l'Ouest avec son frère."], reponse: 3, explication: "*Um Mitternacht waren wir im Westen!* = à minuit, nous étions à l'Ouest. Elle habitait à Berlin-Est (*Ostberlin*), a entendu la nouvelle à la télévision (*im Fernsehen*) et est partie tout de suite (*sofort*)." },
        { type: "redaction", question: "**Niveau fin de 3e.** Tu prépares un exposé pour ta classe partenaire en Allemagne : *Die Berliner Mauer*. Écris 8 à 10 phrases en allemand : la division, la construction du Mur, la vie avec le Mur, la chute, la réunification, ce qu'on peut voir aujourd'hui. Utilise au moins deux fois le passif *wurde + participe*, des dates, et termine par ton avis.", corrige: "**Modèle :**\n\n*Nach dem Zweiten Weltkrieg wurde Deutschland geteilt. 1949 gab es zwei Staaten: die BRD im Westen und die DDR im Osten. Viele Menschen flohen aus der DDR in den Westen. Deshalb wurde am 13. August 1961 die Mauer gebaut. Sie war ungefähr 155 Kilometer lang und trennte Familien und Freunde. Mindestens 140 Menschen sind an der Mauer gestorben. 1989 haben die Menschen in der DDR demonstriert: „Wir sind das Volk!“ Am 9. November 1989 wurde die Grenze geöffnet und alle haben gefeiert. Am 3. Oktober 1990 wurde Deutschland wiedervereinigt. Heute kann man in Berlin die East Side Gallery besuchen. Ich finde, dass diese Geschichte sehr wichtig ist, weil sie zeigt, dass Menschen frei sein wollen.*\n\nPoints à vérifier :\n- passif : *wurde geteilt, wurde gebaut, wurde geöffnet, wurde wiedervereinigt* ;\n- dates : *1949* (sans *in*), *am 13. August 1961* ;\n- prétérit dans le récit (*gab, flohen, war, trennte*) ; parfait avec *sein* pour *sterben* ;\n- inversion après *Deshalb, Heute, Am 9. November…* ; verbe à la fin après *dass, weil*." },
      ],
    },
    {
      id: "amitie-franco-allemande",
      titre: "L'amitié franco-allemande et les échanges",
      theme: "Rencontres avec d'autres cultures",
      cours: `
## D'ennemis à partenaires
Entre 1870 et 1945, la France et l'Allemagne se sont affrontées dans **trois guerres** (1870-1871, 1914-1918, 1939-1945). Après 1945, les deux pays choisissent la **réconciliation** (*die Versöhnung*) :
- ils fondent ensemble avec d'autres pays la Communauté européenne du charbon et de l'acier (1951), puis la Communauté économique européenne (1957), ancêtres de l'Union européenne ;
- le **22 janvier 1963**, le président **Charles de Gaulle** et le chancelier **Konrad Adenauer** signent à Paris le **traité de l'Élysée** (*der Élysée-Vertrag*), traité d'amitié et de coopération ;
- la même année naît l'**OFAJ** (*Office franco-allemand pour la Jeunesse*, en allemand *das Deutsch-Französische Jugendwerk*, **DFJW**), qui a permis à des millions de jeunes de se rencontrer ;
- en **1984**, François Mitterrand et Helmut Kohl se tiennent la main à **Verdun**, en hommage aux morts des deux guerres ;
- le **22 janvier 2019**, Emmanuel Macron et Angela Merkel signent le **traité d'Aix-la-Chapelle** (*der Aachener Vertrag*).

Aujourd'hui, le **22 janvier** est la **Journée franco-allemande** dans les écoles. Il existe plus de 2 000 jumelages entre villes françaises et allemandes, une chaîne de télévision commune, **Arte** (depuis 1992, siège à Strasbourg), et des diplômes communs comme l'**Abibac** (Abitur + baccalauréat).

## Le vocabulaire de l'échange
| Allemand | Français |
|---|---|
| der Schüleraustausch | l'échange scolaire |
| der Austauschpartner / die Austauschpartnerin | le / la correspondant(e) d'échange |
| die Gastfamilie | la famille d'accueil |
| die Partnerstadt / die Partnerschule | la ville jumelle / l'établissement partenaire |
| die Freundschaft | l'amitié |
| der Nachbar / das Nachbarland | le voisin / le pays voisin |
| der Vertrag | le traité, le contrat |
| der Krieg / der Frieden | la guerre / la paix |
| die Gewohnheit | l'habitude |
| Unterschiede / Gemeinsamkeiten | des différences / des points communs |

Des programmes d'échange individuels existent pour les élèves, par exemple **Brigitte Sauzay** (environ 3 mois) et **Voltaire** (environ 6 mois).

## Le génitif : « de » (appartenance)
Dans les textes, tu rencontreras le **génitif**, qui indique l'appartenance (« de ») :
| | masculin / neutre | féminin / pluriel |
|---|---|---|
| article | **des** (+ **-s** ou **-es** au nom) | **der** |
| exemple | *der Name **des** Vertrag**s*** | *die Geschichte **der** Freundschaft* |

- Avec un nom de pays ou de personne : **-s** : *die Hauptstadt Deutschland**s***, *Annas Bruder* (sans apostrophe).
- À l'oral, on remplace souvent le génitif par **von** + datif : *der Bruder **von** Anna*, *die Hauptstadt **von** Deutschland*.

>! **Comparer les habitudes** (pour un échange) : *In Frankreich isst man später zu Abend **als** in Deutschland.* – *In Deutschland beginnt die Schule früher, aber sie endet auch früher.* – *Bei meiner Gastfamilie gibt es zum Abendessen oft Brot mit Käse oder Wurst (das Abendbrot).* – *Das ist **anders als** bei uns / genauso **wie** bei uns.*

> **À retenir** : **22 janvier 1963** : traité de l'Élysée (de Gaulle, Adenauer) ; **OFAJ / DFJW** (1963) ; 22 janvier = Journée franco-allemande ; **2019** : traité d'Aix-la-Chapelle. Échange : *der Austausch, die Gastfamilie, der Austauschpartner*. Génitif : ***des** … -s* (masc./neutre), ***der*** (fém./pluriel), *Deutschlands* ; à l'oral *von* + datif.

### Erreurs fréquentes
- *Anna's Bruder* → ***Annas** Bruder* (en allemand, le génitif s'écrit en général sans apostrophe).
- *die Hauptstadt der Deutschland* → *die Hauptstadt **Deutschlands*** / ***von** Deutschland*.
- Confondre *der Krieg* (la guerre) et *der Sieg* (la victoire).
`,
      exercices: [
        { type: "qcm", question: "Qui a signé le traité de l'Élysée en 1963 ?", choix: ["Mitterrand et Kohl", "Macron et Merkel", "De Gaulle et Adenauer", "Napoléon et Bismarck"], reponse: 2, explication: "Le **22 janvier 1963**, le président **Charles de Gaulle** et le chancelier **Konrad Adenauer** signent le traité de l'Élysée. Mitterrand et Kohl se sont tenu la main à Verdun en 1984 ; Macron et Merkel ont signé le traité d'Aix-la-Chapelle en 2019." },
        { type: "saisie", question: "Quel jour de l'année célèbre-t-on la Journée franco-allemande ? (jour et mois, en français)", reponses: ["le 22 janvier", "22 janvier", "22/01", "22.01.", "le vingt-deux janvier", "vingt-deux janvier"], explication: "Le **22 janvier**, date anniversaire de la signature du traité de l'Élysée (1963)." },
        { type: "vf", question: "L'OFAJ (*Deutsch-Französisches Jugendwerk*) organise des rencontres entre jeunes Français et Allemands depuis 1963.", reponse: true, explication: "Oui, l'Office franco-allemand pour la Jeunesse a été créé en 1963, dans la foulée du traité de l'Élysée. Il soutient les échanges scolaires, les séjours, les stages." },
        { type: "qcm", question: "Que signifie *die Gastfamilie* ?", choix: ["la famille d'accueil", "la famille d'un ami", "une famille de touristes", "le restaurant familial"], reponse: 0, explication: "*der Gast* = l'invité ; *die Gastfamilie* = la famille qui accueille un élève d'échange." },
        { type: "saisie", question: "Complète avec le génitif : « die Hauptstadt ___ » (de l'Allemagne)", reponses: ["Deutschlands", "von Deutschland"], explication: "Nom de pays au génitif : **-s** → *die Hauptstadt **Deutschlands*** (Berlin). À l'oral : *die Hauptstadt von Deutschland*." },
        { type: "qcm", question: "Complète au génitif : « Das ist das Auto ___ Lehrers. »", choix: ["der", "dem", "des", "den"], reponse: 2, explication: "Génitif masculin : **des** + nom en **-s** : *das Auto **des** Lehrer**s*** (la voiture du professeur). À l'oral : *das Auto vom Lehrer*." },
        { type: "saisie", question: "Comment s'appelle la chaîne de télévision franco-allemande créée en 1992, qui émet en français et en allemand ?", reponses: ["Arte"], explication: "**Arte**, dont le siège est à Strasbourg, diffuse ses programmes en français et en allemand." },
        { type: "qcm", question: "Ton correspondant écrit : « *In Deutschland essen wir um 18.30 Uhr zu Abend, meistens Brot mit Käse oder Wurst.* » Quelle phrase compare correctement avec la France ?", choix: ["In Frankreich essen wir später zu Abend als in Deutschland.", "In Frankreich essen wir mehr spät als in Deutschland.", "In Frankreich wir essen später zu Abend wie in Deutschland.", "In Frankreich essen wir so später wie in Deutschland."], reponse: 0, explication: "Comparatif **später als** (plus tard que) ; *In Frankreich* en tête → inversion (*essen wir*). *mehr spät* et *später wie* sont faux." },
        { type: "qcm", question: "**Compréhension.** « *Ich heiße Paula und komme aus Freiburg. Ich habe drei Monate mit dem Programm Brigitte Sauzay bei einer Familie in Lyon gewohnt. Am Anfang war es schwer, weil alle so schnell gesprochen haben. Aber nach drei Wochen habe ich fast alles verstanden. Meine Austauschpartnerin Lou ist jetzt meine beste Freundin!* » Qu'est-ce qui était difficile au début ?", choix: ["La nourriture française.", "Les gens parlaient très vite.", "La famille n'était pas gentille.", "Paula avait le mal du pays."], reponse: 1, explication: "*Am Anfang war es schwer, weil alle so schnell gesprochen haben* = au début c'était difficile parce que tout le monde parlait très vite. Après trois semaines, elle comprenait presque tout." },
        { type: "redaction", question: "**Niveau fin de 3e.** Pour la Journée franco-allemande, écris un texte de 8 à 10 phrases pour le blog de ton établissement partenaire : pourquoi l'amitié franco-allemande est importante (un peu d'histoire), et ce qu'un échange peut t'apporter. Utilise au moins une date, une comparaison, *weil* ou *dass*, et un génitif ou *von* + datif.", corrige: "**Modèle :**\n\n*Heute ist der 22. Januar, der Deutsch-Französische Tag! Früher waren Frankreich und Deutschland Feinde: Es gab drei Kriege zwischen 1870 und 1945. Am 22. Januar 1963 haben Charles de Gaulle und Konrad Adenauer den Élysée-Vertrag unterschrieben. Seitdem sind unsere Länder Freunde und Partner in Europa. Ich finde, dass das sehr wichtig ist, weil Frieden nicht selbstverständlich ist. Nächsten Monat mache ich einen Austausch mit unserer Partnerschule in Leipzig. Ich werde bei einer Gastfamilie wohnen. So kann ich die Sprache und die Kultur unseres Nachbarlandes besser kennenlernen. Vielleicht ist das Leben in Deutschland ganz anders als in Frankreich, vielleicht auch nicht. Ich freue mich darauf!*\n\nPoints à vérifier :\n- dates : *am 22. Januar 1963*, *zwischen 1870 und 1945* ;\n- parfait (*haben … unterschrieben*) ; futur (*werde … wohnen*) ;\n- génitif : *die Kultur unseres Nachbarland**es*** ; comparaison : *besser, anders als* ;\n- verbe à la fin après *dass* et *weil* ; inversion après *Früher, Seitdem, Nächsten Monat, So*." },
      ],
    },
    {
      id: "personnalites-relatives",
      titre: "Grandes figures germanophones et la proposition relative",
      theme: "Rencontres avec d'autres cultures",
      cours: `
## Quelques grandes figures
| Personne | Dates | Pourquoi elle est célèbre |
|---|---|---|
| Johannes Gutenberg | vers 1400 – 1468 | à Mayence (*Mainz*), il met au point l'imprimerie à caractères mobiles vers 1450 |
| Johann Wolfgang von Goethe | 1749 – 1832 | le plus grand écrivain allemand : *Faust*, *Les Souffrances du jeune Werther* |
| Wolfgang Amadeus Mozart | 1756 – 1791 | compositeur autrichien né à Salzbourg, enfant prodige |
| Ludwig van Beethoven | 1770 – 1827 | compositeur né à Bonn ; devenu sourd, il compose encore : sa 9e symphonie (*Ode an die Freude*) est l'hymne européen |
| Bertha Benz | 1849 – 1944 | en 1888, elle fait le premier long trajet en automobile (plus de 100 km) avec la voiture de son mari Carl Benz |
| Albert Einstein | 1879 – 1955 | physicien né à Ulm, théorie de la relativité, prix Nobel de physique |
| Sophie Scholl | 1921 – 1943 | étudiante à Munich, membre du groupe de résistance *Die Weiße Rose* (la Rose blanche) contre le nazisme ; exécutée en 1943 |
| Roger Federer | né en 1981 | joueur de tennis suisse, vainqueur de 20 tournois du Grand Chelem |

## La proposition relative (der Relativsatz)
Pour donner une précision sur un nom, on emploie une **relative**, comme « qui, que, à qui » en français :

*Beethoven ist ein Komponist, **der** in Bonn geboren **wurde**.* (… un compositeur **qui** est né à Bonn.)

Trois règles :
1. une **virgule** avant la relative ;
2. le **pronom relatif** a le **genre** et le **nombre** du nom qu'il remplace (*der Komponist → der*, *die Frau → die*) ;
3. le **verbe conjugué** va **à la fin**, comme dans toutes les subordonnées.

Le **cas** du pronom dépend de sa fonction **dans la relative** :

| | masculin | féminin | neutre | pluriel |
|---|---|---|---|---|
| nominatif (sujet : « qui ») | der | die | das | die |
| accusatif (COD : « que ») | **den** | die | das | die |
| datif (« à qui », après *mit, von…*) | **dem** | **der** | **dem** | **denen** |

- Nominatif : *Sophie Scholl ist eine Frau, **die** gegen die Nazis gekämpft **hat**.* (*die* est sujet de *hat gekämpft*)
- Accusatif : *Goethe ist ein Autor, **den** ich sehr **mag**.* (*ich* est le sujet ; *den* est le COD de *mag*)
- Datif : *Das ist der Freund, **mit dem** ich nach Wien **fahre**.* (la préposition se place **devant** le pronom)
- Pluriel : *Das sind die Schüler, **die** in Berlin **wohnen**.*

>! **Méthode en 3 étapes** : relie *Ich lese ein Buch. Das Buch ist sehr spannend.*
>! 1. Nom repris : *das Buch* → neutre singulier.
>! 2. Fonction dans la 2e phrase : *das Buch ist spannend* → **sujet** → nominatif → **das**.
>! 3. Verbe à la fin : *Ich lese ein Buch, **das** sehr spannend **ist**.*

## Présenter une personnalité
- *Er / Sie wurde **1749** in Frankfurt am Main **geboren**.* (Il / Elle est né(e)… — personnes du passé : *wurde geboren* ; personnes vivantes : *ist geboren*)
- *Er / Sie **ist** 1832 in Weimar **gestorben**.* / *Er starb 1832.*
- *Er / Sie ist berühmt **für** (+ acc.) / **wegen** (+ génitif ou datif)…* – *Er hat … geschrieben / komponiert / erfunden.*
- *Ich bewundere sie, weil sie mutig war.* (J'admire… parce que…)

> **À retenir** : relative = **virgule + pronom relatif + … + verbe à la fin**. Pronom = genre/nombre du nom, cas selon sa fonction : *der/die/das/die* (sujet), **den** (COD masculin), *dem/der/dem/denen* (datif). Préposition devant le pronom (*mit dem*). Personnalités : *wurde … geboren, ist … gestorben, hat … erfunden / komponiert*.

### Erreurs fréquentes
- *ein Mann, der wohnt in Wien* → *…, der in Wien **wohnt***.
- *der Film, der ich gesehen habe* → *…, **den** ich gesehen habe* (COD → accusatif).
- *die Leute, die ich mit spreche* → *die Leute, **mit denen** ich spreche*.
- Oublier la virgule devant la relative.
`,
      exercices: [
        { type: "qcm", question: "Complète : « Mozart ist ein Komponist, ___ in Salzburg geboren wurde. »", choix: ["die", "den", "das", "der"], reponse: 3, explication: "*der Komponist* : masculin ; le pronom est **sujet** de *geboren wurde* → nominatif → **der**." },
        { type: "saisie", question: "Complète : « Das ist das Buch, ___ ich gerade lese. »", reponses: ["das"], explication: "*das Buch* : neutre ; le pronom est COD de *lese* (le sujet est *ich*) → accusatif neutre → **das** (même forme qu'au nominatif)." },
        { type: "qcm", question: "Complète : « Goethe ist ein Schriftsteller, ___ viele Schüler in Deutschland lesen. »", choix: ["der", "den", "dem", "die"], reponse: 1, explication: "Le sujet de *lesen* est *viele Schüler* ; le pronom est donc **COD** → accusatif masculin → **den** : *…, den viele Schüler lesen.*" },
        { type: "vf", question: "Dans une proposition relative, le verbe conjugué se place à la fin.", reponse: true, explication: "Oui, comme dans toutes les subordonnées : *Sophie Scholl ist eine Frau, die sehr mutig **war**.*" },
        { type: "saisie", question: "Complète : « Das sind meine Freunde, ___ ich oft Fußball spiele. » (avec qui)", reponses: ["mit denen"], explication: "« avec qui » = **mit** + datif ; au pluriel, le pronom relatif au datif est **denen** : *…, mit denen ich oft Fußball spiele.*" },
        { type: "saisie", question: "Relie les deux phrases avec un pronom relatif : « Ich habe eine Freundin. Die Freundin wohnt in Wien. »", reponses: ["Ich habe eine Freundin, die in Wien wohnt."], explication: "*die Freundin* : féminin, sujet → **die** ; verbe à la fin : *Ich habe eine Freundin, die in Wien **wohnt**.*" },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Beethoven ist der Komponist, der hat die Neunte Sinfonie geschrieben.", "Beethoven ist der Komponist die Neunte Sinfonie geschrieben hat.", "Beethoven ist der Komponist, den die Neunte Sinfonie geschrieben hat.", "Beethoven ist der Komponist, der die Neunte Sinfonie geschrieben hat."], reponse: 3, explication: "Pronom sujet masculin **der**, verbe conjugué (*hat*) **à la fin** après le participe, et virgule devant la relative." },
        { type: "qcm", question: "Qui était Sophie Scholl ?", choix: ["Une étudiante résistante contre le nazisme, membre de la Rose blanche.", "Une impératrice d'Autriche.", "Une championne de tennis suisse.", "La première femme chancelière d'Allemagne."], reponse: 0, explication: "Sophie Scholl (1921-1943), étudiante à Munich, distribuait des tracts contre Hitler avec le groupe *Die Weiße Rose*. Elle a été arrêtée et exécutée en 1943." },
        { type: "qcm", question: "**Compréhension.** « *Bertha Benz war eine mutige Frau, die 1888 mit dem Auto ihres Mannes von Mannheim nach Pforzheim fuhr. Sie nahm ihre zwei Söhne mit. Unterwegs kaufte sie Benzin in einer Apotheke, denn Tankstellen gab es noch nicht.* » Pourquoi a-t-elle acheté de l'essence dans une pharmacie ?", choix: ["Parce que la pharmacie était moins chère.", "Parce que ses fils étaient malades.", "Parce que son mari travaillait dans une pharmacie.", "Parce qu'il n'existait pas encore de stations-service."], reponse: 3, explication: "*…, denn Tankstellen gab es noch nicht* = car il n'existait pas encore de stations-service. (À l'époque, l'essence se vendait en pharmacie comme produit de nettoyage.)" },
        { type: "redaction", question: "**Niveau fin de 3e.** Présente en 8 à 10 phrases une personnalité d'un pays germanophone que tu admires (artiste, scientifique, sportif…) : dates et lieux, ce qu'elle a fait, pourquoi tu l'admires. Utilise au moins trois propositions relatives (dont une à l'accusatif) et *wurde … geboren*.", corrige: "**Modèle :**\n\n*Ich möchte euch Ludwig van Beethoven vorstellen. Er wurde 1770 in Bonn geboren, einer Stadt, die am Rhein liegt. Schon als Kind spielte er sehr gut Klavier. Später zog er nach Wien, wo er bis zu seinem Tod lebte. Beethoven ist ein Komponist, den ich sehr bewundere, weil er auch taub weitermachte. Er hat neun Sinfonien komponiert. Die Neunte Sinfonie, die mit der „Ode an die Freude“ endet, ist heute die Europahymne. Das ist ein Stück, das man in der ganzen Welt kennt. Beethoven ist 1827 in Wien gestorben. Für mich ist er ein Mensch, der nie aufgegeben hat.*\n\nPoints à vérifier :\n- relatives : *die am Rhein liegt* (nominatif), *den ich bewundere* (accusatif masculin), *die … endet*, *das man … kennt*, *der nie aufgegeben hat* ;\n- verbe **à la fin** de chaque relative, virgules ;\n- *wurde … geboren, ist … gestorben* ; prétérit *spielte, zog, lebte*." },
      ],
    },
    {
      id: "methode-comprendre-ecrire",
      titre: "Méthode : comprendre un texte et écrire un message (niveau A2)",
      theme: "Les langages",
      cours: `
## Ce qu'on attend de toi en fin de 3e
À la fin du cycle 4, en deuxième langue (LV2), le niveau visé est **A2** du Cadre européen : tu dois pouvoir **comprendre** un texte court sur un sujet familier (message, article simple, récit) et **écrire** un texte simple et organisé (message, lettre, récit, avis) en reliant tes idées.

## Comprendre un texte : la méthode en 5 étapes
1. **Observe avant de lire** : titre, image, type de texte (mail, article, affiche, extrait de journal intime…), date, auteur.
2. **Repère les mots transparents** (proches du français ou de l'anglais) : *die Familie, die Musik, das Problem, die Information, das Hotel, der Sport, interessant, perfekt*.
3. **Découpe les mots composés** : le dernier mot donne le sens principal (et le genre) : *die Haus·tür* = la porte (*Tür*) de la maison (*Haus*) ; *das Schwimm·bad* = le bain pour nager → la piscine ; *der Fuß·ball·spieler* = le joueur de football.
4. **Cherche les réponses aux questions W** : *Wer?* (qui) – *Was?* (quoi) – *Wo?* (où) – *Wann?* (quand) – *Warum?* (pourquoi) – *Wie?* (comment).
5. **Fais attention aux petits mots qui changent tout** (voir la liste ci-dessous).

Les petits mots qui changent tout :
- la négation : *nicht, kein, nie* (jamais), *niemand* (personne), *nichts* (rien) ;
- les connecteurs : *aber* (mais), *trotzdem* (pourtant), *deshalb* (c'est pourquoi), *weil / denn* (parce que), *obwohl* (bien que) ;
- le temps : passé (*war, hatte, ist gefahren*) ou futur (*werde, morgen, nächstes Jahr*) ?

>! **Exemple** : « *Obwohl es geregnet hat, sind wir nicht zu Hause geblieben.* »
>! *obwohl* = bien que ; *nicht … geblieben* = pas restés → **Bien qu'il ait plu, nous ne sommes pas restés à la maison** (nous sommes sortis).

## Écrire un message : la méthode
1. **Lis bien la consigne** : à qui écris-tu (ami → *du* ; adulte inconnu → *Sie*) ? Combien de points dois-tu traiter ?
2. **Fais une liste de tes idées** en allemand simple, une idée = une phrase.
3. **Organise** : début, développement avec connecteurs (*zuerst, dann, außerdem, aber, deshalb*), fin.
4. **Relis-toi** avec la liste de contrôle ci-dessous.

### Les formules
| | Lettre ou mail à un ami | Lettre ou mail formel |
|---|---|---|
| début | *Liebe Anna, / Lieber Tom, / Hallo Ben,* | *Sehr geehrte Frau Weber, / Sehr geehrter Herr Klein, / Sehr geehrte Damen und Herren,* |
| 1re ligne | sans majuscule après la virgule : *wie geht's?* | *ich möchte mich über … informieren.* |
| fin | *Bis bald! / Liebe Grüße / Viele Grüße / Dein Lucas / Deine Léa* | *Mit freundlichen Grüßen* + prénom et nom |

### Liste de contrôle (relis-toi !)
- Verbe conjugué en **2e position** dans la principale ; **inversion** après un complément en tête (*Gestern bin ich…*).
- Verbe **à la fin** après *weil, dass, wenn, als, obwohl* et dans les relatives.
- Infinitif ou participe **à la fin** (*Ich möchte … besuchen. Ich habe … gemacht.*).
- **Majuscule** à tous les noms.
- Les **cas** après les prépositions (*mit dem, für den, in die / in der*).
- *haben* ou *sein* au parfait ; les participes forts.

> **À retenir** : pour lire : titre et image → mots transparents → mots composés (le dernier mot compte) → questions W → négations et connecteurs. Pour écrire : consigne, liste d'idées, plan, connecteurs, relecture (place du verbe, majuscules, cas). *Liebe… / Lieber…* ↔ *Sehr geehrte(r)…* ; *Liebe Grüße* ↔ *Mit freundlichen Grüßen*.

### Erreurs fréquentes
- Traduire mot à mot : *Ich habe 14 Jahre* → *Ich bin 14 (Jahre alt)*.
- Écrire *Sehr geehrte Herr Klein* → *Sehr geehrte**r** Herr Klein* (masculin).
- Confondre *bekommen* (recevoir) et « devenir » (*werden*) : *Ich bekomme ein Geschenk* = je reçois un cadeau !
- Confondre *also* (donc) et l'anglais *also* (aussi = *auch*).
`,
      textes: {
        ben: `**Hallo zusammen!** – Ben, 15, Graz (Österreich)

*Ich bin Ben, 15, aus Graz in Österreich. Seit einem Jahr spiele ich in einer Band Schlagzeug. Am Anfang waren meine Eltern nicht begeistert, weil es so laut ist. Deshalb üben wir jetzt im Keller von unserem Sänger. Nächsten Monat haben wir unser erstes Konzert im Jugendzentrum. Wer kommt mit?*`,
      },
      exercices: [
        { type: "qcm", question: "Que signifie le mot composé *der Bahnhof* ? (*die Bahn* = le train, le chemin de fer ; *der Hof* = la cour)", choix: ["la gare", "le jardin", "la ferme", "le quai"], reponse: 0, explication: "*der Bahn·hof* : la « cour du chemin de fer » → **la gare**. Le genre vient du dernier mot : *der Hof* → *der Bahnhof*." },
        { type: "saisie", question: "*das Kinderzimmer* : *das Kind* (l'enfant) + *das Zimmer* (la pièce). Que signifie ce mot ? (en français)", reponses: ["la chambre d'enfant", "chambre d'enfant", "la chambre des enfants", "chambre des enfants", "la chambre d'enfants", "chambre d'enfants", "la chambre de l'enfant", "chambre de l'enfant", "la chambre pour enfants", "chambre pour enfants", "la chambre pour les enfants", "chambre pour les enfants"], explication: "Le dernier mot donne le sens principal : *Zimmer* (la pièce, la chambre) ; le premier le précise : pour les enfants → **la chambre d'enfant**." },
        { type: "vf", question: "*bekommen* signifie « devenir ».", reponse: false, explication: "C'est un **faux ami** : *bekommen* = **recevoir** (*Ich bekomme einen Brief*). « Devenir » se dit *werden*." },
        { type: "qcm", question: "« *Obwohl Tim krank war, ist er zur Schule gegangen.* » Que comprends-tu ?", choix: ["Tim est resté à la maison parce qu'il était malade.", "Tim est allé à l'école bien qu'il soit malade.", "Tim est tombé malade à l'école.", "Tim n'est jamais malade."], reponse: 1, explication: "*obwohl* = **bien que** : il était malade (*krank war*), et pourtant il est allé à l'école (*ist zur Schule gegangen*)." },
        { type: "qcm", question: "Tu écris un mail à la directrice d'une auberge de jeunesse, Frau Becker. Comment commences-tu ?", choix: ["Liebe Frau Becker,", "Hallo Becker,", "Sehr geehrter Frau Becker,", "Sehr geehrte Frau Becker,"], reponse: 3, explication: "Lettre **formelle** à une femme : ***Sehr geehrte** Frau Becker,* (pour un homme : *Sehr geehrter Herr…*). *Liebe* ou *Hallo* sont réservés aux proches." },
        { type: "saisie", question: "Quelle formule termine une lettre formelle ? (3 mots)", reponses: ["Mit freundlichen Grüßen"], explication: "***Mit freundlichen Grüßen*** (avec mes salutations amicales/distinguées), puis ton prénom et ton nom. Pour un ami : *Liebe Grüße* ou *Viele Grüße*." },
        { type: "qcm", question: "« *Niemand hat mir geholfen.* » Que veut dire cette phrase ?", choix: ["Tout le monde m'a aidé.", "Quelqu'un m'a aidé.", "Personne ne m'a aidé.", "Je n'ai aidé personne."], reponse: 2, explication: "*niemand* = **personne** (sujet) ; *mir* = à moi (datif de *helfen*). Ne confonds pas avec *jemand* (quelqu'un)." },
        { type: "qcm", texte: "ben", question: "**Compréhension.** Lis le message de Ben. Où le groupe répète-t-il maintenant ?", choix: ["Dans la cave du chanteur.", "Chez Ben.", "Au centre de jeunes.", "À l'école de musique."], reponse: 0, explication: "*Deshalb üben wir jetzt im Keller von unserem Sänger* = c'est pourquoi nous répétons maintenant dans la cave de notre chanteur. Le centre de jeunes (*Jugendzentrum*) est le lieu du futur concert." },
        { type: "vf", texte: "ben", question: "D'après son message, les parents de Ben étaient enthousiastes dès le début.", reponse: false, explication: "*Am Anfang waren meine Eltern **nicht** begeistert, weil es so laut ist* : au début, ses parents n'étaient **pas** enthousiastes, parce que c'est trop bruyant. Attention à la négation !" },
        { type: "redaction", question: "**Niveau fin de 3e.** Tu veux passer une semaine en juillet avec deux amis dans une auberge de jeunesse à Hambourg. Écris un mail **formel** (8 à 10 phrases) à Monsieur Wagner, le responsable : présente-toi, dis ce que tu veux réserver (dates, nombre de personnes, type de chambre), pose trois questions (prix, petit-déjeuner, activités ou transports), remercie et termine correctement.", corrige: "**Modèle :**\n\n*Sehr geehrter Herr Wagner,\nich heiße Camille Martin, ich bin 15 Jahre alt und komme aus Frankreich. Ich möchte mit zwei Freunden eine Woche in Hamburg verbringen, weil wir die Stadt kennenlernen wollen. Wir möchten vom 6. bis zum 13. Juli ein Dreibettzimmer reservieren. Ist das möglich? Wie viel kostet eine Übernachtung pro Person? Ist das Frühstück inklusive? Außerdem möchte ich wissen, wie man vom Hauptbahnhof zur Jugendherberge kommt. Können Sie uns auch Aktivitäten für Jugendliche empfehlen?\nVielen Dank im Voraus für Ihre Antwort.\nMit freundlichen Grüßen\nCamille Martin*\n\nPoints à vérifier :\n- formules formelles : *Sehr geehrter Herr Wagner,* / *Mit freundlichen Grüßen* ; vouvoiement **Sie, Ihre** avec majuscule ;\n- après la virgule de l'en-tête, la 1re ligne commence par une **minuscule** (*ich heiße…*) ;\n- dates : *vom 6. bis zum 13. Juli* ;\n- questions : verbe en 1re position (*Ist das…?*) ou après le mot interrogatif (*Wie viel kostet…?*) ; question indirecte avec verbe à la fin (*wie man … kommt*) ;\n- *weil* + verbe à la fin ; infinitif à la fin après *möchten, wollen, können*." },
      ],
    },
    {
      id: "adjectif-epithete",
      titre: "Décrire : la déclinaison de l'adjectif épithète",
      theme: "Outils de la langue",
      cours: `
## Attribut ou épithète ?
- **Attribut** (après *sein, werden, bleiben*) : l'adjectif ne change **jamais** : *Der Pullover ist **rot**. Die Stadt ist **groß**.*
- **Épithète** (placé **devant le nom**) : l'adjectif prend une **terminaison** : *der **rote** Pullover, eine **große** Stadt*.

## Après der, die, das (et dieser, jeder) : -e ou -en
| | masculin | féminin | neutre | pluriel |
|---|---|---|---|---|
| nominatif | der rot**e** Pulli | die rot**e** Jacke | das rot**e** Kleid | die rot**en** Schuhe |
| accusatif | den rot**en** Pulli | die rot**e** Jacke | das rot**e** Kleid | die rot**en** Schuhe |
| datif | dem rot**en** Pulli | der rot**en** Jacke | dem rot**en** Kleid | den rot**en** Schuhe**n** |

>! **Astuce** : **-e** seulement aux trois nominatifs singuliers et à l'accusatif féminin et neutre (là où l'article ne change pas : *die → die, das → das*). **Partout ailleurs : -en.**

## Après ein, kein, mein, dein… : l'adjectif « montre » le genre
*ein* ne dit pas si le nom est masculin ou neutre : c'est l'**adjectif** qui prend la marque (-**er** comme d*er*, -**es** comme d*as*).

| | masculin | féminin | neutre | pluriel (kein, mein…) |
|---|---|---|---|---|
| nominatif | ein klein**er** Hund | eine klein**e** Katze | ein klein**es** Haus | meine klein**en** Brüder |
| accusatif | einen klein**en** Hund | eine klein**e** Katze | ein klein**es** Haus | meine klein**en** Brüder |
| datif | einem klein**en** Hund | einer klein**en** Katze | einem klein**en** Haus | meinen klein**en** Brüder**n** |

## Sans article : l'adjectif prend la marque de l'article
*Ich trinke kalt**es** Wasser* (*das*) – *Ich mag frisch**e** Milch* (*die*) – *Ich esse gern deutsch**en** Käse* (*den*, accusatif) – *Ich habe nett**e** Freunde* (pluriel).

>! **Exemple résolu** : complète *Ich habe ein___ neu___ Fahrrad gekauft.*
>! 1. *das Fahrrad* : neutre. 2. COD de *kaufen* : accusatif → *ein* (sans terminaison).
>! 3. *ein* ne montre pas le neutre → l'adjectif prend **-es** : *Ich habe ein **neues** Fahrrad gekauft.*

Quelques adjectifs pour décrire : *alt / neu, groß / klein, lang / kurz, schön / hässlich, teuer / billig, bequem* (confortable), *modern, bunt* (coloré), *gestreift* (rayé), *rot, blau, grün, gelb, schwarz, weiß, grau*.

> **À retenir** : adjectif **attribut** (après *sein*) = pas de terminaison. **Épithète** après *der/die/das* : **-e** au nominatif singulier et à l'accusatif féminin/neutre, **-en** partout ailleurs. Après *ein, kein, mein* : *ein klein**er** Hund, ein klein**es** Haus* ; sinon même chose qu'après *der*. Au datif et au pluriel : presque toujours **-en**.

### Erreurs fréquentes
- *Der Pulli ist rote* → *Der Pulli ist **rot*** (attribut : pas de terminaison).
- *ein klein Hund* → *ein klein**er** Hund*.
- *Ich habe einen kleiner Bruder* → *einen klein**en** Bruder* (accusatif masculin : *-en*).
- *mit meinem beste Freund* → *mit meinem best**en** Freund* (datif : *-en*).
`,
      exercices: [
        { type: "qcm", question: "Complète : « Heute trage ich den ___ Pullover. » (*rot* ; *der Pullover*)", choix: ["roten", "rote", "roter", "rotes"], reponse: 0, explication: "*den Pullover* : masculin à l'**accusatif** (COD de *tragen*). Après *den*, l'adjectif prend **-en** : *den **roten** Pullover*." },
        { type: "saisie", question: "Complète avec l'adjectif *neu* : « Das ist ein ___ Auto. » (*das Auto*)", reponses: ["neues"], explication: "*das Auto* : neutre, nominatif. *ein* ne montre pas le genre, donc l'adjectif prend la marque de *das* : **-es** → *ein **neues** Auto*." },
        { type: "vf", question: "Dans « *Mein Zimmer ist klein.* », l'adjectif *klein* ne prend pas de terminaison.", reponse: true, explication: "Oui : après *sein*, l'adjectif est **attribut** et reste invariable. Devant le nom, il se déclinerait : *mein **kleines** Zimmer*." },
        { type: "qcm", question: "Complète : « Ich habe einen ___ Bruder und eine große Schwester. » (*klein* ; *der Bruder*)", choix: ["kleiner", "kleine", "kleinen", "kleines"], reponse: 2, explication: "*einen Bruder* : masculin à l'**accusatif** (après *haben*) → **-en** : *einen **kleinen** Bruder*. *kleiner* serait le nominatif : *Das ist ein kleiner Bruder.*" },
        { type: "saisie", question: "Complète avec l'adjectif *schwarz* : « Die ___ Katze schläft auf dem Sofa. » (*die Katze*)", reponses: ["schwarze"], explication: "*die Katze* : féminin, **nominatif** (sujet). Après *die*, au nominatif singulier : **-e** → *die **schwarze** Katze*." },
        { type: "qcm", question: "Complète : « Am Samstag gehe ich mit meiner ___ Freundin ins Kino. » (*best-* ; *die Freundin*)", choix: ["beste", "besten", "bester", "bestes"], reponse: 1, explication: "*mit* + **datif** : *meiner Freundin*. Au datif, l'adjectif prend toujours **-en** : *mit meiner **besten** Freundin*." },
        { type: "saisie", question: "Complète avec l'adjectif *kalt* (pas d'article) : « Im Sommer trinke ich gern ___ Milch. » (*die Milch*)", reponses: ["kalte"], explication: "Sans article, l'adjectif prend la marque de l'article : *die Milch* → accusatif féminin *die* → **-e** : ***kalte** Milch*." },
        { type: "qcm", question: "Complète : « Das sind meine ___ Freunde aus Berlin. » (*neu*)", choix: ["neue", "neuer", "neues", "neuen"], reponse: 3, explication: "Au **pluriel**, après *meine* (ou *die, keine*), l'adjectif prend **-en** : *meine **neuen** Freunde*." },
        { type: "qcm", question: "**Compréhension.** Petite annonce : « *Verkaufe mein altes Fahrrad: ein blaues Mountainbike mit neuen Reifen und einer kleinen Lampe. Es ist drei Jahre alt, aber in gutem Zustand. Preis: 80 Euro.* » Qu'est-ce qui est neuf ?", choix: ["Le vélo.", "La lampe.", "Les pneus.", "Le cadenas."], reponse: 2, explication: "*mit **neuen** Reifen* = avec des pneus neufs (*der Reifen*, pluriel *die Reifen*). Le vélo est vieux (*mein **altes** Fahrrad*, trois ans), la lampe est petite (*einer **kleinen** Lampe*) et il n'y a pas de cadenas." },
        { type: "redaction", question: "**Niveau fin de 3e.** Tu pars en échange en Allemagne. Écris un message (6 à 8 phrases) à ton correspondant pour te décrire, afin qu'il te reconnaisse à la gare : ton physique, tes vêtements, ton sac. Emploie au moins six adjectifs épithètes, avec *der/die/das*, avec *ein/eine* et au datif (*mit…*).", corrige: "**Modèle :**\n\n*Hallo Jonas,\nich komme am Freitag um 16 Uhr mit dem Zug an. Damit du mich erkennst: Ich bin ziemlich groß und habe kurze, braune Haare. Ich trage eine blaue Jacke und eine schwarze Hose. Ich habe einen großen, grünen Rucksack und eine kleine Tasche. Auf dem Kopf habe ich eine rote Mütze. Ich warte mit meiner besten Freundin Inès am Gleis 5. Sie hat lange, blonde Haare und trägt ein gestreiftes Kleid.\nBis Freitag!\nNoah*\n\nPoints à vérifier :\n- sans article, pluriel (*die Haare*) : *kurze, braune Haare, lange, blonde Haare* ;\n- *eine blaue Jacke, eine schwarze Hose, eine kleine Tasche, eine rote Mütze* (féminin : -e) ;\n- *einen großen, grünen Rucksack* (accusatif masculin : -en) ; *ein gestreiftes Kleid* (neutre : -es) ;\n- datif : *mit meiner besten Freundin* (-en) ;\n- attribut sans terminaison : *Ich bin groß* ; *damit* (= pour que, afin que) est une conjonction de subordination : verbe à la fin (*damit du mich erkennst*)." },
      ],
    },
    {
      id: "da-wo-prepositions",
      titre: "Darauf ? Worauf ? Les verbes à préposition avec da- et wo-",
      theme: "Outils de la langue",
      cours: `
## Des verbes qui vont avec une préposition
Beaucoup de verbes allemands s'emploient avec une **préposition fixe**, qu'il faut apprendre avec le verbe (comme « penser **à** », « rêver **de** » en français). Tu en connais déjà : *sich freuen auf, sich interessieren für, stolz sein auf*.

| Verbe + préposition | Cas | Sens | Exemple |
|---|---|---|---|
| warten **auf** | acc. | attendre | *Ich warte auf den Bus.* |
| sich freuen **auf** / **über** | acc. | attendre avec impatience / être content de | *Ich freue mich auf die Ferien.* |
| denken **an** | acc. | penser à | *Ich denke oft an meine Oma.* |
| sich erinnern **an** | acc. | se souvenir de | *Ich erinnere mich an den Urlaub.* |
| sich interessieren **für** | acc. | s'intéresser à | *Er interessiert sich für Politik.* |
| sprechen **über** / **von** | acc. / dat. | parler de | *Wir sprechen über den Film.* |
| träumen **von** | dat. | rêver de | *Sie träumt von einer Reise.* |
| Angst haben **vor** | dat. | avoir peur de | *Ich habe Angst vor der Prüfung.* |
| sich kümmern **um** | acc. | s'occuper de | *Er kümmert sich um seinen Hund.* |
| teilnehmen **an** | dat. | participer à | *Wir nehmen an einem Wettbewerb teil.* |
| stolz sein **auf** | acc. | être fier de | *Ich bin stolz auf meine Note.* |
| zufrieden sein **mit** | dat. | être content de | *Bist du mit deinem Handy zufrieden?* |

## Remplacer une CHOSE : da- + préposition
Pour ne pas répéter une chose (ou une idée), on ne dit pas « auf es » : on colle **da-** devant la préposition.
- *Ich warte auf den Bus.* → *Ich warte **darauf**.* (Je l'attends.)
- *Interessierst du dich für Fußball? – Ja, ich interessiere mich **dafür**.*
- *Sie träumt von einer Reise. – Sie träumt **davon**.*

Si la préposition commence par une **voyelle**, on ajoute un **-r-** pour pouvoir prononcer : **dar**auf, **dar**an, **dar**über, **dar**um, **dar**in. Sinon : **da**für, **da**von, **da**mit, **da**vor, **da**bei, **da**nach, **da**zu.

Tu as déjà rencontré ces mots : *Ich bin **dafür** / **dagegen**.* (Je suis pour / contre.) – *Ich freue mich **darauf**!* – ***Darauf** bin ich stolz.*

## Remplacer une PERSONNE : préposition + pronom
Pour une **personne** (et souvent pour un animal), on garde la préposition et on met le **pronom personnel** au bon cas :
- *Ich warte auf **meinen Freund**.* → *Ich warte **auf ihn**.* (et non *darauf*)
- *Ich denke oft an **meine Oma**.* → *Ich denke oft **an sie**.*
- *Ich spreche mit **meinem Lehrer**.* → *Ich spreche **mit ihm**.*

## Poser la question : wo- + préposition
- Pour une **chose** : **wo-** (ou **wor-** devant une voyelle) + préposition : *Worauf wartest du? – Auf den Bus.* – *Wofür interessierst du dich?* – *Wovon träumst du?* – *Woran denkst du?* – *Worüber sprecht ihr?* – *Womit fährst du? – Mit dem Rad.*
- Pour une **personne** : **préposition + wen** (accusatif) ou **wem** (datif) : *Auf wen wartest du? – Auf Paul.* – *An wen denkst du?* – *Mit wem sprichst du? – Mit meiner Mutter.*

À l'oral, on entend parfois *Auf was wartest du?* : c'est familier. À l'écrit, emploie *Worauf…?*

>! **Méthode en 3 étapes** : réponds sans répéter le nom.
>! 1. Repère la préposition du verbe : *Hast du Angst **vor** der Prüfung?* → *Angst haben vor* (+ datif).
>! 2. Chose ou personne ? *die Prüfung* (l'examen) est une **chose** → **da-** ; *dein Lehrer* serait une personne.
>! 3. Chose → ***davor*** : *Ja, ich habe Angst davor.* Personne (*Hast du Angst vor deinem Lehrer?*) → préposition + pronom : *Nein, ich habe keine Angst **vor ihm**.*

## da- qui annonce la suite de la phrase
Souvent, *darauf, daran, davon…* annoncent une subordonnée (*dass…*) ou un infinitif avec *zu*, placés après une virgule :
- *Ich freue mich **darauf**, **dass** du kommst.* / *Ich freue mich **darauf**, dich bald **zu sehen**.*
- *Ich habe Angst **davor**, allein **zu reisen**.*
- *Denk **daran**, das Licht **auszumachen**!* (Pense à éteindre la lumière !)
- *Ich interessiere mich **dafür**, wie ein Motor funktioniert.*

>! **Attention à damit** : *damit* peut être « avec ça » (*Ich schreibe **damit**.* = J'écris avec ça) ; mais c'est aussi une **conjonction** « pour que », avec le verbe à la fin : *Ich spreche langsam, **damit** du mich **verstehst**.*

> **À retenir** : verbe + préposition fixe (*warten auf, denken an, träumen von, Angst haben vor…*) à apprendre ensemble. **Chose** : *da(r)-* + préposition (*darauf, daran, dafür, davon, davor, darüber*) ; question *wo(r)-* + préposition (*worauf, woran, wofür, wovon*). **Personne** : préposition + pronom (*auf ihn, an sie, mit ihm*) ; question préposition + *wen / wem* (*auf wen, mit wem*). Un **-r-** devant une voyelle.

### Erreurs fréquentes
- *Ich warte auf es* → *Ich warte **darauf***.
- *Ich denke daran* pour parler de ta grand-mère → *Ich denke **an sie***.
- *daauf, woüber* → **darauf**, **worüber** (le *-r-* devant une voyelle).
- *dafur* → **dafür** : n'oublie pas le tréma (au clavier, tu peux écrire *dafuer*).
- *Wo wartest du auf?* → ***Worauf** wartest du?* (on ne sépare pas *wo* et la préposition).
- *Für was interessierst du dich?* (familier) → ***Wofür** interessierst du dich?*
`,
      exercices: [
        { type: "qcm", question: "Remplace le groupe souligné sans le répéter : « Ich warte auf **den Bus**. »", choix: ["Ich warte auf es.", "Ich warte darauf.", "Ich warte daauf.", "Ich warte worauf."], reponse: 1, explication: "*der Bus* est une **chose** : on remplace *auf + nom* par **da(r)- + préposition**. *auf* commence par une voyelle → on ajoute **-r-** : ***darauf***. *worauf* sert à poser la question (*Worauf wartest du?*)." },
        { type: "saisie", question: "Complète en un mot : « Interessierst du dich für Politik? – Nein, ich interessiere mich nicht ___. »", reponses: ["dafür"], explication: "*sich interessieren **für*** ; *Politik* est une chose → **da** + *für* = ***dafür*** (pas de *-r-* : *für* commence par une consonne)." },
        { type: "qcm", question: "Quelle question correspond à la réponse « *Ich denke an die Ferien.* » ?", choix: ["An wen denkst du?", "Woan denkst du?", "Woran denkst du?", "Was denkst du an?"], reponse: 2, explication: "*denken **an*** ; *die Ferien* sont une chose → **wo(r)-** + préposition : *an* commence par une voyelle → ***Woran** denkst du?* *An wen…?* serait pour une personne (*An wen denkst du? – An meine Oma.*)." },
        { type: "vf", question: "Pour remplacer une personne, on emploie aussi *da-* + préposition : *Ich warte auf Paul.* → *Ich warte darauf.*", reponse: false, explication: "Pour une **personne**, on garde la préposition et on met un **pronom** : *Ich warte **auf ihn**.* *darauf* ne remplace qu'une chose ou une idée (*Ich warte auf den Bus → darauf*)." },
        { type: "saisie", question: "Remplace le groupe en gras par un pronom : « Ich bin stolz auf **meinen Bruder**. » → « Ich bin stolz ___. »", reponses: ["auf ihn", "stolz auf ihn", "Ich bin stolz auf ihn."], explication: "*mein Bruder* est une **personne** : préposition + pronom. *stolz sein auf* + **accusatif** ; masculin → ***auf ihn***. Pour une chose (*auf meine Note*), on dirait *darauf*." },
        { type: "saisie", question: "Complète la question (deux mots) : « ___ sprichst du? – Mit meiner Mutter. »", reponses: ["Mit wem", "Mit wem sprichst du?"], explication: "La réponse est une **personne** : on pose la question avec la **préposition + wem** (*mit* + datif) : ***Mit wem** sprichst du?* Pour une chose : *Womit schreibst du? – Mit einem Bleistift.*" },
        { type: "qcm", question: "Complète : « Ich habe Angst ___, allein mit dem Zug zu reisen. »", choix: ["davor", "vor", "darvor", "wovor"], reponse: 0, explication: "*Angst haben **vor*** ; ce qui fait peur est une idée (*allein … zu reisen*), annoncée par ***davor*** : *Ich habe Angst davor, allein … zu reisen.* *vor* commence par une consonne : pas de *-r-*. *wovor* sert à poser une question." },
        { type: "saisie", question: "Complète avec le mot interrogatif (un seul mot) : « ___ träumst du? – Von einer Reise nach Kanada. »", reponses: ["Wovon", "Wovon träumst du?"], explication: "*träumen **von*** ; la réponse est une chose (*eine Reise*) → **wo** + *von* = ***Wovon** träumst du?* *Von was…?* est familier." },
        { type: "qcm", question: "**Compréhension.** « *– Hast du an das Geschenk für Mama gedacht? – Oh nein, daran habe ich nicht gedacht! – Kein Problem, ich kümmere mich darum.* » Que comprends-tu ?", choix: ["Les deux ont déjà acheté le cadeau ensemble.", "Maman a oublié le cadeau.", "Personne ne va s'occuper du cadeau.", "La deuxième personne avait oublié le cadeau ; la première va s'en occuper."], reponse: 3, explication: "***daran** habe ich nicht gedacht* = je n'y ai pas pensé (*denken an* → *daran* = au cadeau). ***ich kümmere mich darum*** = je m'en occupe (*sich kümmern um* → *darum*)." },
        { type: "redaction", question: "**Niveau fin de 3e.** Ton correspondant t'écrit : *Wofür interessierst du dich? Wovon träumst du? Worauf freust du dich? Wovor hast du Angst?* Réponds-lui en 7 à 9 phrases. Emploie au moins quatre verbes à préposition, deux mots en *da(r)-* (dont un qui annonce *zu* + infinitif) et une préposition + pronom pour parler d'une personne.", corrige: "**Modèle :**\n\n*Lieber Jonas,\ndu fragst mich, wofür ich mich interessiere. Ich interessiere mich vor allem für Musik und Fotografie. Mein Bruder Lucas spielt Gitarre in einer Band, und ich bin sehr stolz auf ihn. Ich träume davon, einmal nach Berlin zu fahren und dort ein Konzert zu sehen. Jetzt freue ich mich auf die Sommerferien, denn wir fahren ans Meer. Ich freue mich auch darauf, dich im Mai zu sehen! Nur vor einer Sache habe ich Angst: vor der Prüfung im Juni. Aber ich denke lieber nicht daran! Und du, wovon träumst du?\nViele Grüße\nLéa*\n\nPoints à vérifier :\n- verbes à préposition : *sich interessieren für, stolz sein auf, träumen von, sich freuen auf, Angst haben vor, denken an* ;\n- *da(r)-* pour une chose ou une idée : *davon, darauf, daran* ; *davon / darauf* annoncent **zu + infinitif** à la fin (*…, einmal nach Berlin zu fahren*) ;\n- personne : *stolz auf **ihn*** (pas *darauf*) ;\n- question indirecte avec le verbe à la fin : *wofür ich mich interessiere* ; question directe *Wovon träumst du?*" },
      ],
    },
    {
      id: "comprehension-textes-longs",
      titre: "Comprendre un texte long : lire, répondre, justifier",
      theme: "Les langages",
      cours: `
## Un texte long ne demande pas de tout comprendre
En fin de 3e, on te donne parfois un texte de 200 à 350 mots (blog, récit, article). Tu ne connaîtras pas tous les mots, et ce n'est pas grave : on te demande de comprendre **l'essentiel** et de trouver des **informations précises**, puis de **prouver** ce que tu dis avec le texte.

## Avant de lire
1. **Observe** le titre, l'auteur, la forme : un blog à la 1re personne (*ich*), un récit à la 3e personne au prétérit (*sie fuhr, er sagte*), un article ?
2. **Lis les questions d'abord** : elles te disent quoi chercher, et elles suivent en général l'ordre du texte.

## Pendant la lecture
3. **Première lecture rapide** : réponds aux questions W (*Wer? Wo? Wann? Was?*). Qui sont les personnages ? Où, quand se passe l'histoire ?
4. **Paragraphe par paragraphe** : chaque paragraphe a souvent **une idée**. Note-la en français dans la marge, en quelques mots.
5. **Un mot inconnu ? Ne bloque pas.** Aide-toi du contexte, des mots transparents (*das Experiment, nervös, die Information*), des mots composés (*die Stadt·bibliothek* = la bibliothèque de la ville) et des familles de mots (*fahren → die Fahrt, der Fahrer*).

Les mots qui structurent un récit t'aident à suivre l'histoire :

| Mot | Sens | Mot | Sens |
|---|---|---|---|
| am Anfang | au début | plötzlich | soudain |
| zuerst | d'abord | zum Glück | heureusement |
| dann / danach | ensuite / après | leider | malheureusement |
| später | plus tard | am Ende / schließlich | à la fin / finalement |

## Répondre aux questions
6. **Explicite ou implicite ?** Certaines réponses sont écrites telles quelles dans le texte. D'autres sont à **déduire** : un sentiment, une intention, une plaisanterie (*Wie im letzten Jahrhundert!*).
7. **Justifie** : cite **les quelques mots allemands précis** qui prouvent ta réponse, entre guillemets, puis explique-les en français. Ne recopie pas tout un paragraphe.
8. **Méfie-toi des pièges** :
- les négations : *nicht, kein, nie* (jamais), ***nicht mehr*** (ne… plus), ***noch nicht*** (pas encore) ;
- le temps : est-ce passé (*war, hat gemacht*), présent ou futur (*werde, nächste Woche*) ?
- qui parle : l'avis d'un personnage n'est pas forcément celui de l'auteur ;
- les nombres et les dates.

>! **Exemple résolu** : « *Am Anfang fand Tom das Internat schrecklich. Er vermisste seine Eltern und konnte nachts nicht schlafen. Heute möchte er nicht mehr nach Hause.* »
>! Question : Tom est-il toujours malheureux à l'internat ? Justifie.
>! 1. Repère l'opposition de temps : *Am Anfang* (au début) ↔ *Heute* (aujourd'hui).
>! 2. Attention à ***nicht mehr*** : *Heute möchte er nicht mehr nach Hause* = aujourd'hui, il ne veut **plus** rentrer chez lui.
>! 3. Réponse : **Non.** Au début, il trouvait l'internat « *schrecklich* » (horrible) et il ne dormait pas, mais aujourd'hui « *möchte er nicht mehr nach Hause* » : il s'y sent bien.

> **À retenir** : lis les questions avant le texte ; une idée par paragraphe ; ne bloque pas sur un mot inconnu (contexte, mots transparents, composés). Distingue ce qui est **écrit** et ce qui est **à déduire**. Toujours **justifier** avec une courte citation allemande expliquée en français. Pièges : *nicht mehr, noch nicht, nie*, les temps, qui parle.

### Erreurs fréquentes
- Vouloir traduire tout le texte mot à mot : tu perds du temps.
- Répondre sans preuve, ou recopier tout un paragraphe au lieu de la phrase utile.
- Confondre *nicht mehr* (ne… plus) et *noch nicht* (pas encore).
- Prendre une phrase dite par un personnage (*Aylin hat gesagt, dass…*) pour une vérité de l'histoire.
`,
      textes: {
        lea: `**Vier Wochen ohne Handy – ein Experiment**
Blog von Lea, 15, Hamburg (texte d'entraînement)

*Im März hat unsere Klassenlehrerin Frau Yilmaz uns eine verrückte Frage gestellt: „Wer schafft es, vier Wochen ohne Smartphone zu leben?“ Zuerst haben alle gelacht. Am Ende haben acht von 26 Schülern mitgemacht, und ich war dabei.*

*Die erste Woche war furchtbar. Morgens habe ich automatisch nach meinem Handy gesucht, obwohl es in einer Schublade bei meinen Eltern lag. Ich hatte Angst, dass ich wichtige Nachrichten verpasse. Und ohne mein Handy wusste ich nicht einmal, wann der Bus kommt! Deshalb habe ich mir einen Wecker und eine Armbanduhr gekauft.*

*In der zweiten Woche wurde es besser. Plötzlich hatte ich viel mehr Zeit. Ich habe zwei Romane gelesen, was ich seit Jahren nicht mehr gemacht hatte, und ich bin wieder zum Schwimmtraining gegangen. Meine Freundin Aylin hat am Anfang gesagt, dass ich langweilig geworden bin. Aber dann haben wir uns einfach öfter im Park getroffen, statt stundenlang zu chatten.*

*Natürlich gab es auch Probleme. Für ein Referat musste ich Informationen suchen, also bin ich in die Stadtbibliothek gegangen. Und als ich meine Großeltern in Kiel besucht habe, konnte ich meinen Eltern nicht schnell schreiben, dass ich gut angekommen bin. Ich musste von Omas Telefon aus anrufen – wie im letzten Jahrhundert!*

*Nach vier Wochen habe ich mein Handy zurückbekommen. Ich benutze es immer noch, aber anders: Ich habe viele Apps gelöscht, und abends lege ich es um 21 Uhr in die Küche. Ich schlafe besser und bin weniger nervös. Würde ich das Experiment wiederholen? Vielleicht nicht vier Wochen, aber ein handyfreies Wochenende pro Monat – warum nicht?*

Mots utiles : *die Schublade* = le tiroir ; *verpassen* = rater ; *der Wecker* = le réveil ; *das Referat* = l'exposé.`,
        emma: `**Allein in Dresden**
Récit (texte d'entraînement)

*Es war Emmas zweite Woche in Leipzig. Die 15-jährige Französin wohnte bei der Familie ihrer Austauschpartnerin Hanna. An einem Samstag fuhren die beiden Mädchen mit dem Zug nach Dresden, um die Frauenkirche zu besichtigen. Die Stadt gefiel Emma sehr, besonders die Altstadt an der Elbe.*

*Am Nachmittag wollte Hanna noch ein Geschenk für ihre Mutter kaufen, die am nächsten Tag Geburtstag hatte. Emma wartete vor dem Kaufhaus, aber in der Menschenmenge verloren sich die beiden Mädchen aus den Augen. Der Akku ihres Handys war leer, deshalb konnte Emma Hanna nicht anrufen. Sie bekam Angst: Sie kannte die Stadt nicht, und es wurde langsam dunkel.*

*Zum Glück dachte sie an den Rat ihrer Gastmutter: „Wenn ihr euch verliert, geht zum Bahnhof und wartet dort.“ Emma fragte eine ältere Frau nach dem Weg. Die Frau sprach langsam und zeigte ihr auf einem Stadtplan, wo der Hauptbahnhof war. „Das sind nur zehn Minuten zu Fuß, immer geradeaus“, sagte sie freundlich.*

*Als Emma am Bahnhof ankam, stand Hanna schon am Gleis. Sie weinte fast. „Ich habe dich überall gesucht!“, rief sie. Die beiden umarmten sich. Im Zug lachten sie über ihr Abenteuer, aber Emma dachte auch: „Heute habe ich mehr Deutsch gesprochen als in drei Jahren Unterricht.“*

*Zu Hause in Leipzig erzählte Hanna ihrer Mutter alles. Die Mutter lächelte und sagte: „Siehst du, Emma, jetzt brauchst du keine Austauschpartnerin mehr. Du kommst schon allein zurecht.“*

Mots utiles : *die Menschenmenge* = la foule ; *sich aus den Augen verlieren* = se perdre de vue ; *der Rat* = le conseil ; *die Gastmutter* = la mère d'accueil.`,
      },
      exercices: [
        { type: "qcm", texte: "lea", question: "Combien d'élèves ont participé à l'expérience ?", choix: ["Toute la classe, soit 26 élèves.", "Huit élèves sur vingt-six.", "Seulement Lea et son amie Aylin.", "Aucun : tout le monde a ri."], reponse: 1, explication: "*Am Ende haben **acht von 26** Schülern mitgemacht* = finalement, huit élèves sur 26 ont participé. Tout le monde a ri **d'abord** (*Zuerst haben alle gelacht*), mais huit ont accepté." },
        { type: "vf", texte: "lea", question: "Pendant l'expérience, le portable de Lea était rangé dans sa chambre.", reponse: false, explication: "*…, obwohl es in einer **Schublade bei meinen Eltern** lag* = bien qu'il soit dans un tiroir **chez ses parents**. Elle le cherchait quand même chaque matin, par habitude (*automatisch*)." },
        { type: "saisie", texte: "lea", question: "Depuis l'expérience, à quelle heure Lea pose-t-elle son portable dans la cuisine, le soir ? (en chiffres)", reponses: ["21 Uhr", "21 h", "21", "um 21 Uhr", "21:00", "21.00 Uhr", "um 21.00 Uhr", "21 h 00", "à 21 h 00", "21h00", "à 21h00", "à 21 h", "à 21h", "à 21 heures", "21 Uhr abends", "um 21 Uhr abends", "à 21 heures le soir", "21 heures le soir"], explication: "*abends lege ich es **um 21 Uhr** in die Küche* = le soir, je le pose à 21 heures dans la cuisine. C'est une de ses nouvelles habitudes, avec la suppression de nombreuses applis." },
        { type: "qcm", texte: "lea", question: "Comment la relation entre Lea et son amie Aylin a-t-elle évolué ?", choix: ["Elles se sont disputées et ne se parlent plus.", "Aylin a fait l'expérience avec elle.", "Elles se voient plus souvent au parc au lieu de chatter pendant des heures.", "Aylin lui a prêté son portable."], reponse: 2, explication: "*Aber dann haben wir uns einfach **öfter im Park getroffen**, statt stundenlang zu chatten* = mais ensuite, nous nous sommes simplement retrouvées plus souvent au parc, au lieu de chatter des heures. Au début, Aylin la trouvait ennuyeuse (*langweilig*) : c'est l'avis d'Aylin, pas la fin de l'histoire." },
        { type: "redaction", texte: "lea", question: "**Justifier.** Après l'expérience, Lea utilise-t-elle son portable de la même façon qu'avant ? Réponds en français en 3 ou 4 phrases et cite **au moins deux** courts passages du texte comme preuves.", corrige: "**Réponse modèle :**\n\nNon, Lea utilise toujours son portable, mais autrement. Elle le dit elle-même : « *Ich benutze es immer noch, aber anders* » (je l'utilise toujours, mais différemment). Elle a supprimé beaucoup d'applications (« *Ich habe viele Apps gelöscht* ») et, le soir, elle le laisse dans la cuisine à 21 heures (« *abends lege ich es um 21 Uhr in die Küche* »). Elle en voit les effets : « *Ich schlafe besser und bin weniger nervös* ». Elle n'arrête pas complètement, mais elle imagine un week-end sans portable par mois (« *ein handyfreies Wochenende pro Monat* »).\n\nPoints à vérifier :\n- une réponse claire à la question dès la 1re phrase (*non… mais*) ;\n- des citations **courtes et précises**, entre guillemets, expliquées en français ;\n- ne pas confondre ce qu'elle a fait **pendant** l'expérience (bibliothèque, téléphone de sa grand-mère) et ce qu'elle fait **après**." },
        { type: "qcm", texte: "emma", question: "Pourquoi Emma ne peut-elle pas appeler Hanna ?", choix: ["Parce que la batterie de son portable est vide.", "Parce qu'elle n'a pas le numéro de Hanna.", "Parce que Hanna a éteint son portable.", "Parce que le magasin est trop bruyant."], reponse: 0, explication: "*Der **Akku** ihres Handys war **leer*** = la batterie de son portable était vide ; *deshalb* (c'est pourquoi) elle ne peut pas appeler. *ihres Handys* est un génitif (« de son portable »)." },
        { type: "vf", texte: "emma", question: "Hanna voulait acheter un cadeau pour sa mère, dont l'anniversaire était le jour même.", reponse: false, explication: "*…, die **am nächsten Tag** Geburtstag hatte* = qui avait son anniversaire **le lendemain**. La relative (*die … hatte*, verbe à la fin) précise *ihre Mutter*." },
        { type: "saisie", texte: "emma", question: "D'après le conseil de la mère d'accueil, où faut-il aller si l'on se perd ? (en français, ou avec le mot allemand du texte)", reponses: ["à la gare", "la gare", "gare", "à la gare centrale", "la gare centrale", "gare centrale", "à la gare principale", "la gare principale", "zum Bahnhof", "der Bahnhof", "Bahnhof", "zum Hauptbahnhof", "der Hauptbahnhof", "Hauptbahnhof", "aller à la gare", "aller à la gare et attendre", "à la gare et attendre", "aller à la gare et y attendre", "aller à la gare centrale", "il faut aller à la gare", "aller à la gare et attendre là-bas", "à la gare et attendre là-bas", "zum Bahnhof gehen", "zum Bahnhof gehen und dort warten"], explication: "*„Wenn ihr euch verliert, geht **zum Bahnhof** und wartet dort.“* = si vous vous perdez, allez à la gare et attendez là-bas. Emma suit ce conseil et retrouve Hanna sur le quai (*am Gleis*) de la gare centrale (*Hauptbahnhof*)." },
        { type: "qcm", texte: "emma", question: "À la fin, la mère de Hanna dit en souriant : « *Du kommst schon allein zurecht.* » Que veut-elle dire ?", choix: ["Qu'Emma doit rentrer seule en France.", "Qu'Emma ne doit plus sortir sans Hanna.", "Que Hanna ne veut plus être sa correspondante.", "Qu'Emma sait maintenant se débrouiller seule : c'est un compliment."], reponse: 3, explication: "*zurechtkommen* = se débrouiller ; *allein* = seule. Emma a demandé son chemin et a retrouvé la gare **en parlant allemand** : la mère la félicite, avec humour (*jetzt brauchst du keine Austauschpartnerin mehr* = tu n'as plus besoin de correspondante). Ce sens est **implicite** : il faut le déduire de l'histoire et du sourire (*lächelte*)." },
        { type: "redaction", texte: "emma", question: "**Niveau fin de 3e.** Tu es Hanna. Le soir, tu écris un message à ta meilleure amie Mia pour lui raconter la journée à Dresde (8 à 10 phrases, au parfait) : ce que vous avez visité, comment vous vous êtes perdues, ce que tu as ressenti, comment vous vous êtes retrouvées, et ce que tu penses d'Emma maintenant.", corrige: "**Modèle :**\n\n*Hallo Mia,\nheute war ein verrückter Tag! Emma und ich sind mit dem Zug nach Dresden gefahren. Zuerst haben wir die Frauenkirche besichtigt, und dann sind wir durch die Altstadt gelaufen. Am Nachmittag wollte ich noch ein Geschenk für Mama kaufen, weil sie morgen Geburtstag hat. Plötzlich war Emma weg! Ich habe sie überall gesucht, aber ich habe sie nicht gefunden. Ich hatte große Angst, denn sie kennt die Stadt nicht. Dann bin ich zum Bahnhof gegangen. Zum Glück ist sie bald auch dort angekommen: Eine nette Frau hat ihr den Weg gezeigt. Ich bin wirklich stolz auf Emma, sie hat ganz allein Deutsch gesprochen!\nBis morgen\nHanna*\n\nPoints à vérifier :\n- parfait avec **sein** pour les déplacements (*sind gefahren, sind gelaufen, bin gegangen, ist angekommen*), avec **haben** pour les autres (*haben besichtigt, habe gesucht, hat gezeigt*) ;\n- prétérit pour *war, hatte, wollte* ;\n- inversion après *Zuerst, Am Nachmittag, Plötzlich, Dann, Zum Glück* ; verbe à la fin après *weil* ;\n- l'histoire est racontée du point de vue de **Hanna** (*ich* = Hanna) et reste fidèle au texte." },
      ],
    },
  ],
};
