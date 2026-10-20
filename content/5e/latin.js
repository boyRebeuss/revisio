export default {
  chapitres: [
    {
      id: "alphabet-prononciation",
      titre: "L'alphabet latin et la prononciation",
      theme: "Langue latine",
      cours: `
## Pourquoi apprendre le latin ?
Le latin est la langue des **Romains**. Il est né dans une petite région d'Italie, le **Latium** (d'où son nom), autour de Rome. Avec les conquêtes romaines, il s'est répandu autour de toute la Méditerranée. Il a ensuite donné naissance aux **langues romanes** : le français, l'italien, l'espagnol, le portugais, le roumain, le catalan... La **grande majorité** des mots français viennent du latin (directement, ou du grec en passant par le latin). Apprendre le latin, c'est donc mieux comprendre ton propre français.

En 5e, le latin est un **enseignement de complément** (Langues et cultures de l'Antiquité, LCA). Tu y étudies à la fois la **langue** et la **civilisation** romaine.

## L'alphabet latin
Notre alphabet est l'alphabet latin ! Les Romains l'ont reçu des **Étrusques**, qui l'avaient eux-mêmes emprunté aux **Grecs**. L'alphabet latin classique compte **23 lettres** :

A B C D E F G H I K L M N O P Q R S T V X Y Z

- Il n'y a **pas de J, pas de U, pas de W**. Le **I** sert à la fois de voyelle (i) et de consonne (comme le « y » de « yaourt »). Le **V** sert à la fois de voyelle (ou) et de consonne (ou, comme dans « watt »).
- Le **K** est très rare (Kalendae, les calendes).
- Le **Y** et le **Z** ont été ajoutés pour écrire des mots empruntés au grec.
- Les Romains écrivaient surtout en **capitales** (nos majuscules), comme sur les inscriptions gravées : SENATVS POPVLVSQVE ROMANVS. Nos minuscules actuelles ne sont apparues que bien plus tard, au Moyen Âge.

Aujourd'hui, dans les livres de classe, on écrit souvent le latin en minuscules et on distingue **u** (voyelle) et **v** (consonne) : *servus*, l'esclave.

## La prononciation restituée
On ne connaît pas d'enregistrement des Romains, évidemment ! Mais les savants ont **reconstitué** leur prononciation grâce aux grammairiens antiques, aux fautes d'orthographe sur les murs de Pompéi et aux mots latins passés dans d'autres langues. C'est la **prononciation restituée**. Ses règles sont simples : **toutes les lettres se prononcent**, et chaque lettre garde toujours le même son.

| Écriture | Prononciation | Exemple |
|---|---|---|
| **c** | toujours « k » | *Cicero* se dit « Kikéro » |
| **g** | toujours « g » dur (comme dans « gare ») | *gens* se dit « guènns » |
| **u** | « ou » | *murus* se dit « mourouss » |
| **v** (consonne) | « ou » (comme dans « watt ») | *vinum* se dit « ouinoum » |
| **i** (consonne, devant voyelle en début de mot) | « y » | *Iulius* se dit « Youlious » |
| **e** | « é » ou « è », jamais muet | *rege* se dit « régué » |
| **s** | toujours « s », jamais « z » | *rosa* se dit « rossa » |
| **qu** | « kou » rapide (comme dans « quoi ») | *aqua* se dit « akoua » |
| **ae** | « aï » | *Caesar* se dit « Kaïssar » |
| **oe** | « oï » | *poena* se dit « poïna » |
| **au** | « aou » | *aurum* se dit « aouroum » |
| **ch, ph, th** | k, p, t suivis d'un souffle (on dit souvent simplement k, f, t) | *philosophia* |
| **um, am, in...** | on prononce la voyelle **et** la consonne (pas de son nasal comme en français) | *templum* se dit « tèmmploum » |

- Les **consonnes doubles** se prononcent deux fois : *puella* = « pouèl-la ».
- Le **h** est un souffle léger.

## Voyelles longues et brèves
En latin, une voyelle peut être **longue** ou **brève** : on la prononce plus ou moins longtemps. Dans les dictionnaires, une voyelle longue porte parfois un petit trait, le **macron** : *rosā*. Dans cette appli, **tu n'as jamais besoin de taper les macrons**.

## L'accent tonique
En latin, une syllabe de chaque mot est prononcée plus fort :
- dans un mot de **deux syllabes**, l'accent est sur la **première** : *RO-sa*, *MA-ter* ;
- dans un mot plus long, l'accent est sur l'**avant-dernière** syllabe si elle est **longue** (*a-MI-cus*, car le i de *amīcus* est long), sinon sur la syllabe d'avant (*DO-mi-nus*, car le i de *dominus* est bref).
- **jamais** sur la dernière syllabe.

En 5e, tu n'as pas à deviner si une syllabe est longue : l'exercice ou le dictionnaire (avec son macron) te le dira.

>! **Pour aller plus loin** : une syllabe est longue si sa voyelle est longue (*a-MĪ-cus*) **ou** si sa voyelle est suivie de deux consonnes (*pu-EL-la* : le e est suivi de ll). Tu apprendras ces règles peu à peu.

Le français a gardé une trace de cet accent : la syllabe accentuée a souvent survécu, les autres ont parfois disparu. *TA-bu-la* a donné « table ».

>! **Exemple résolu** : comment lire *Caesar*, en prononciation restituée ?
>! c = « k » ; ae = « aï » ; s = « s » (jamais « z ») ; a = « a » ; r roulé. On lit donc « Kaïssar ». C'est ce son qui a donné en allemand le mot *Kaiser* (empereur).

> **À retenir** : l'alphabet latin classique a 23 lettres (pas de J, U, W) ; c = k, g = gu, u et v = ou, s = s, ae = aï, oe = oï, au = aou ; toutes les lettres se prononcent ; l'accent tonique est sur l'avant-dernière syllabe ou sur celle d'avant (l'antépénultième), jamais sur la dernière.

## Erreurs fréquentes
- Prononcer *Cicero* « Sissero » : c'est la prononciation française, pas la prononciation restituée.
- Prononcer *rosa* « roza » : le s latin ne se prononce jamais « z ».
- Prononcer *templum* comme « temple » en français : en latin, on entend le **m** final.
`,
      exercices: [
        {
          type: "qcm",
          question: "En prononciation restituée, comment se prononce la lettre **c** de *Cicero* ?",
          choix: ["Toujours « k »", "« s » devant e et i", "« ch »", "« tch » comme en italien"],
          reponse: 0,
          explication: "En latin classique, c se prononce toujours « k » : *Cicero* se dit « Kikéro ». Les prononciations « s » ou « tch » sont apparues plus tard, en français et en italien.",
        },
        {
          type: "vf",
          question: "En latin, la lettre **v** (consonne) se prononce « ou », comme dans le mot « watt ».",
          reponse: true,
          explication: "Vrai : *vinum* (le vin) se dit « ouinoum », *Venus* se dit « Ouénouss ».",
        },
        {
          type: "qcm",
          question: "Comment se prononce la diphtongue **ae** de *Caesar* ?",
          choix: ["« é »", "« è »", "« aï »", "« a » puis « é » séparés"],
          reponse: 2,
          explication: "ae se prononce « aï » : *Caesar* = « Kaïssar ». Le « é » de « César » est une prononciation française plus tardive.",
        },
        {
          type: "saisie",
          question: "Combien de lettres compte l'alphabet latin classique ?",
          reponses: ["23", "vingt-trois"],
          explication: "23 lettres : A B C D E F G H I K L M N O P Q R S T V X Y Z. Il manque J, U et W, qui ont été ajoutés bien plus tard.",
        },
        {
          type: "qcm",
          question: "Laquelle de ces lettres **n'existait pas** dans l'alphabet latin classique ?",
          choix: ["K", "X", "Y", "J"],
          reponse: 3,
          explication: "Le J n'existait pas : le I servait aussi de consonne (*Iulius*, « Youlious »). K, X et Y existaient (Y pour les mots grecs).",
        },
        {
          type: "vf",
          question: "Le **s** de *rosa* se prononce « z », comme dans le mot français « rose ».",
          reponse: false,
          explication: "Faux : le s latin se prononce toujours « s ». *Rosa* se dit « rossa ».",
        },
        {
          type: "qcm",
          question: "Sur quelle syllabe porte l'accent tonique de *dominus* (le maître), sachant que le i est bref ?",
          choix: ["DO", "MI", "NUS", "Il n'y a pas d'accent en latin"],
          reponse: 0,
          explication: "Le mot a trois syllabes. L'avant-dernière (mi) est brève, donc l'accent remonte sur la syllabe d'avant : *DO-mi-nus*. L'accent n'est jamais sur la dernière syllabe.",
        },
        {
          type: "vf",
          question: "Dans le mot latin *templum*, on prononce le **m** final.",
          reponse: true,
          explication: "Vrai : en latin, toutes les lettres se prononcent. On dit « tèmmploum », sans son nasal comme en français.",
        },
        {
          type: "qcm",
          question: "Comment se prononce *aqua* (l'eau) en prononciation restituée ?",
          choix: ["« aka »", "« akoua »", "« aqua » comme « aquarium » en français", "« acha »"],
          reponse: 1,
          explication: "qu se prononce « kou » rapide : « akoua ». En français, « aquarium » se prononce d'ailleurs « akwarjom », ce qui est assez proche.",
        },
        {
          type: "redaction",
          question: "Explique comment on prononce, en prononciation restituée, les mots suivants, en justifiant à chaque fois par une règle : *Caesar*, *Cicero*, *vinum*, *gens*, *puella*.",
          corrige: `
- **Caesar** → « Kaïssar » : c = k ; ae = aï ; s = s sourd (jamais z).
- **Cicero** → « Kikéro » : c se prononce toujours k, même devant i et e ; e = é.
- **vinum** → « ouinoum » : v consonne = ou ; u = ou ; on prononce le m final.
- **gens** → « guènns » : g est toujours dur ; on prononce le n et le s, sans son nasal.
- **puella** → « pouèl-la » : u = ou ; la consonne double ll se prononce deux fois.

>! Méthode : avance lettre par lettre. Toutes les lettres se prononcent et chacune garde toujours le même son.
`,
        },
      ],
    },
    {
      id: "cas-fonctions",
      titre: "Une langue à déclinaisons : les cas et leurs fonctions",
      theme: "Langue latine",
      cours: `
## En français, l'ordre des mots compte
Compare : « Le chien mord le loup » et « Le loup mord le chien ». Les mots sont les mêmes, mais le sens change : en français, c'est surtout la **place** du mot qui indique sa **fonction** (sujet avant le verbe, COD après).

## En latin, c'est la terminaison qui compte
En latin, un nom change de **terminaison** selon sa fonction dans la phrase. Le mot se compose d'un **radical** (qui porte le sens) et d'une **désinence** (la terminaison, qui indique la fonction).

>! *Puella rosam amat* = La jeune fille aime la rose.
>! *Rosam puella amat* = La jeune fille aime la rose (même sens !).
>! *puell-a* : désinence -a = sujet ; *ros-am* : désinence -am = COD.

Comme la fonction se lit dans la terminaison, l'**ordre des mots est libre** en latin. Le verbe est souvent placé **à la fin** de la phrase.

## Les six cas
Chaque forme d'un nom s'appelle un **cas**. Le latin a **six cas**. L'ensemble des formes d'un nom (au singulier et au pluriel) s'appelle sa **déclinaison**. Décliner un nom, c'est réciter toutes ses formes.

| Cas | Fonction principale | Exemple en français |
|---|---|---|
| **Nominatif** | sujet, attribut du sujet | *La rose* est belle. |
| **Vocatif** | apostrophe (on appelle quelqu'un) | *Marcus*, viens ! |
| **Accusatif** | complément d'objet direct (COD) ; après certaines prépositions | J'aime *la rose*. |
| **Génitif** | complément du nom | Le parfum *de la rose*. |
| **Datif** | complément d'objet second ou indirect (à qui ? pour qui ?) | Je donne une rose *à la reine*. |
| **Ablatif** | complément circonstanciel (moyen, manière, lieu, temps...) ; après certaines prépositions | Elle orne l'autel *avec des roses*. |

Pour retenir l'ordre des cas, tu peux réciter : **No-Vo-Ac-Gé-Da-Ab** (nominatif, vocatif, accusatif, génitif, datif, ablatif).

## Genre et nombre
Comme en français, un nom latin a un **nombre** (singulier ou pluriel) et un **genre**. Mais il y a **trois genres** : le **masculin**, le **féminin** et le **neutre** (ni l'un ni l'autre ; *neuter* veut dire « aucun des deux »). Par exemple, *templum* (le temple) est neutre.

## Il n'y a pas d'article
Le latin n'a **pas d'article**. *Rosa* veut dire « la rose », « une rose » ou « rose » : c'est toi qui choisis l'article en traduisant, selon le sens.

## Comment trouver un mot dans le dictionnaire
Un nom est toujours donné avec son **nominatif** et son **génitif singulier**, puis son genre : *rosa, ae, f.* (la rose) ; *dominus, i, m.* (le maître). Le génitif indique la **déclinaison** à laquelle le nom appartient.

>! **Exemple résolu** : quelle est la fonction de *reginae* dans *Puella reginae rosam dat* (La jeune fille donne une rose à la reine) ?
>! On donne la rose **à qui ?** à la reine : c'est un complément d'objet second, donc *reginae* est au **datif**.

> **À retenir** : en latin, la **désinence** indique la fonction. Six cas : nominatif (sujet, attribut), vocatif (apostrophe), accusatif (COD), génitif (complément du nom), datif (COS, attribution), ablatif (compléments circonstanciels). Trois genres : masculin, féminin, neutre. Pas d'article.

## Erreurs fréquentes
- Traduire les mots dans l'ordre où ils viennent : en latin, le sujet n'est pas forcément en premier !
- Confondre « cas » et « fonction » : le cas est une **forme** du mot (nominatif...), la fonction est son **rôle** dans la phrase (sujet...).
`,
      exercices: [
        {
          type: "qcm",
          question: "En latin, qu'est-ce qui indique la fonction d'un nom dans la phrase ?",
          choix: ["Sa place dans la phrase", "Sa terminaison (désinence)", "L'article placé devant lui", "Sa majuscule"],
          reponse: 1,
          explication: "C'est la désinence (terminaison) qui indique la fonction. L'ordre des mots est libre, et le latin n'a pas d'article.",
        },
        {
          type: "saisie",
          question: "Combien de cas compte la déclinaison latine ?",
          reponses: ["6", "six", "six cas"],
          explication: "Six cas : nominatif, vocatif, accusatif, génitif, datif, ablatif.",
        },
        {
          type: "qcm",
          question: "Quel cas sert principalement à exprimer le **sujet** du verbe ?",
          choix: ["L'accusatif", "Le génitif", "Le datif", "Le nominatif"],
          reponse: 3,
          explication: "Le nominatif est le cas du sujet (et de l'attribut du sujet). L'accusatif sert au COD, le génitif au complément du nom, le datif au COS.",
        },
        {
          type: "qcm",
          question: "Dans « le parfum **de la rose** », à quel cas serait le groupe en gras en latin ?",
          choix: ["Au datif", "Au génitif", "À l'ablatif", "Au vocatif"],
          reponse: 1,
          explication: "« De la rose » complète le nom « parfum » : c'est un complément du nom, donc le génitif.",
        },
        {
          type: "vf",
          question: "*Puella rosam amat* et *Rosam amat puella* ont le même sens.",
          reponse: true,
          explication: "Vrai : les terminaisons ne changent pas (*puella* sujet, *rosam* COD), donc le sens reste « la jeune fille aime la rose ». L'ordre des mots est libre en latin.",
        },
        {
          type: "saisie",
          question: "Quel cas emploie-t-on pour **appeler** quelqu'un (l'apostrophe) ?",
          reponses: ["vocatif", "le vocatif"],
          explication: "Le vocatif (de *vocare*, appeler) sert à l'apostrophe : « *Marce*, veni ! » = « Marcus, viens ! ».",
        },
        {
          type: "qcm",
          question: "Le latin a trois genres. Lesquels ?",
          choix: ["Masculin, féminin, neutre", "Masculin, féminin, pluriel", "Singulier, pluriel, neutre", "Masculin, féminin, animé"],
          reponse: 0,
          explication: "Masculin, féminin et neutre. Singulier et pluriel, eux, sont des nombres, pas des genres.",
        },
        {
          type: "vf",
          question: "En latin, *rosa* peut se traduire par « la rose » ou par « une rose ».",
          reponse: true,
          explication: "Vrai : le latin n'a pas d'article. C'est le sens de la phrase qui te fait choisir l'article en français.",
        },
        {
          type: "qcm",
          question: "Dans « Elle orne l'autel **avec des roses** », quel cas emploierait le latin pour le groupe en gras ?",
          choix: ["Le nominatif", "L'accusatif", "L'ablatif", "Le génitif"],
          reponse: 2,
          explication: "« Avec des roses » est un complément circonstanciel de moyen : en latin, il se met à l'ablatif (*rosis*).",
        },
        {
          type: "redaction",
          question: "Dans la phrase française « Les enfants du maître donnent des fleurs à leur mère », donne la fonction de chaque groupe nominal, puis indique à quel cas il serait en latin.",
          corrige: `
- **Les enfants** : sujet de « donnent » → **nominatif**.
- **du maître** : complément du nom « enfants » → **génitif**.
- **des fleurs** : complément d'objet direct (ils donnent quoi ?) → **accusatif**.
- **à leur mère** : complément d'objet second (à qui ?) → **datif**.

>! Méthode : pose les questions « qui fait l'action ? » (sujet, nominatif), « quoi ? » (COD, accusatif), « à qui ? » (COS, datif), « de qui, de quoi ? » après un nom (complément du nom, génitif).
`,
        },
      ],
    },
    {
      id: "premiere-declinaison",
      titre: "La première déclinaison : rosa, rosae",
      theme: "Langue latine",
      cours: `
## Reconnaître un nom de la 1re déclinaison
Les noms de la 1re déclinaison ont un nominatif singulier en **-a** et un génitif singulier en **-ae**. Dans le dictionnaire : *rosa, ae, f.* (la rose). La plupart sont **féminins**.

## Le modèle : rosa, la rose

| Cas | Singulier | Pluriel |
|---|---|---|
| Nominatif | ros**a** | ros**ae** |
| Vocatif | ros**a** | ros**ae** |
| Accusatif | ros**am** | ros**as** |
| Génitif | ros**ae** | ros**arum** |
| Datif | ros**ae** | ros**is** |
| Ablatif | ros**a** | ros**is** |

Le radical est **ros-** : on lui ajoute les désinences. Pour décliner *puella* (la jeune fille), *dea* (la déesse) ou *insula* (l'île), tu fais exactement pareil : *puellam, puellae, puellarum*...

## Attention aux formes qui se ressemblent
Une même forme peut correspondre à plusieurs cas. C'est le **sens de la phrase** qui te permet de choisir.
- **rosa** : nominatif, vocatif ou ablatif singulier ;
- **rosae** : génitif ou datif singulier, nominatif ou vocatif pluriel ;
- **rosis** : datif ou ablatif pluriel.

>! **Exemple résolu** : analyse *puellae* dans *Puellae cantant* (cantant = elles chantent).
>! Le verbe est au pluriel : il faut un sujet pluriel au nominatif. *Puellae* est donc au **nominatif pluriel** : « Les jeunes filles chantent ».

## Des noms masculins
Quelques noms de la 1re déclinaison désignent des hommes : ils sont **masculins**, mais se déclinent comme *rosa* : *nauta, ae, m.* (le marin), *agricola, ae, m.* (l'agriculteur, le paysan), *poeta, ae, m.* (le poète).

## Vocabulaire à connaître
| Latin | Français | Mot français dérivé |
|---|---|---|
| puella, ae, f. | la jeune fille | puéril (même famille que *puer*) |
| dea, ae, f. | la déesse | déesse |
| insula, ae, f. | l'île | insulaire, péninsule |
| aqua, ae, f. | l'eau | aquatique, aquarium |
| terra, ae, f. | la terre | terrestre, territoire |
| silva, ae, f. | la forêt | sylvestre |
| via, ae, f. | la route | viaduc |
| villa, ae, f. | la ferme, la maison de campagne | villa, village |
| filia, ae, f. | la fille (enfant) | filial |
| regina, ae, f. | la reine | régner |
| nauta, ae, m. | le marin | nautique |
| agricola, ae, m. | l'agriculteur | agriculture |

> **À retenir** : 1re déclinaison = nominatif en **-a**, génitif en **-ae**. Désinences : singulier -a, -a, -am, -ae, -ae, -a ; pluriel -ae, -ae, -as, -arum, -is, -is. Une forme peut avoir plusieurs cas : on choisit d'après le sens.

## Erreurs fréquentes
- Croire que *rosae* est toujours un pluriel : c'est aussi le génitif et le datif singulier.
- Oublier que *nauta* et *agricola* sont masculins.
`,
      exercices: [
        {
          type: "saisie",
          question: "Donne l'**accusatif singulier** de *rosa* (la rose).",
          reponses: ["rosam"],
          explication: "Accusatif singulier en -am : *rosam*. C'est la forme du COD : *Puella rosam amat*.",
        },
        {
          type: "saisie",
          question: "Donne le **génitif pluriel** de *puella* (la jeune fille).",
          reponses: ["puellarum"],
          explication: "Génitif pluriel en -arum : *puellarum*, « des jeunes filles ».",
        },
        {
          type: "qcm",
          question: "À quel(s) cas peut être la forme *rosis* ?",
          choix: ["Nominatif ou vocatif pluriel", "Génitif singulier", "Datif ou ablatif pluriel", "Accusatif pluriel"],
          reponse: 2,
          explication: "La désinence -is sert au datif et à l'ablatif pluriel. L'accusatif pluriel est *rosas*, le nominatif pluriel *rosae*.",
        },
        {
          type: "vf",
          question: "*Nauta* (le marin) est un nom féminin, puisqu'il se termine en -a.",
          reponse: false,
          explication: "Faux : *nauta* désigne un homme, il est masculin, même s'il se décline comme *rosa*. De même *agricola* et *poeta*.",
        },
        {
          type: "qcm",
          question: "Dans *Filiae reginae rosas amant* (amant = aiment), quelle est la fonction de *reginae* ?",
          choix: ["Sujet au nominatif pluriel", "Complément du nom au génitif singulier", "COD à l'accusatif", "Apostrophe au vocatif"],
          reponse: 1,
          explication: "Le sujet du verbe pluriel est *filiae* (les filles) ; *rosas* est le COD. *Reginae* complète *filiae* : « les filles **de la reine** aiment les roses ». C'est un génitif singulier. Pourquoi pas un datif ? *Reginae* pourrait l'être dans une autre phrase (« donner à la reine »), mais « aimer » n'a pas de complément « à qui ? » : le sens impose le génitif.",
        },
        {
          type: "saisie",
          question: "Donne le **datif singulier** de *dea* (la déesse).",
          reponses: ["deae"],
          explication: "Datif singulier en -ae : *deae*, « à la déesse ». Exemple : *Puella deae rosas dat*, « la jeune fille donne des roses à la déesse ».",
        },
        {
          type: "saisie",
          question: "Traduis le nom latin *insula*.",
          reponses: ["l'île", "île", "une île"],
          explication: "*Insula* = l'île. D'où « insulaire », « péninsule » (*paene insula*, presque une île) et « isoler ».",
        },
        {
          type: "qcm",
          question: "Quelle forme est l'**accusatif pluriel** de *silva* (la forêt) ?",
          choix: ["silvae", "silvas", "silvis", "silvam"],
          reponse: 1,
          explication: "Accusatif pluriel en -as : *silvas*. *Silvam* est l'accusatif singulier, *silvae* le nominatif pluriel (ou génitif/datif singulier), *silvis* le datif/ablatif pluriel.",
        },
        {
          type: "vf",
          question: "*Rosa* peut être un ablatif singulier.",
          reponse: true,
          explication: "Vrai : *rosa* est la forme du nominatif, du vocatif et de l'ablatif singulier (dans les dictionnaires, l'ablatif s'écrit *rosā*, avec un a long).",
        },
        {
          type: "redaction",
          question: "Décline entièrement *puella, ae, f.* (la jeune fille), puis traduis la phrase : *Puellae nautis aquam dant* (dant = elles donnent).",
          corrige: `
| Cas | Singulier | Pluriel |
|---|---|---|
| Nominatif | puella | puellae |
| Vocatif | puella | puellae |
| Accusatif | puellam | puellas |
| Génitif | puellae | puellarum |
| Datif | puellae | puellis |
| Ablatif | puella | puellis |

**Traduction** : *Puellae* (nominatif pluriel, sujet de *dant*) *nautis* (datif pluriel, à qui ?) *aquam* (accusatif singulier, COD) *dant*.
→ « Les jeunes filles donnent de l'eau aux marins. »

>! Méthode : commence par le verbe (*dant*, pluriel), cherche son sujet au nominatif pluriel (*puellae*), puis le COD à l'accusatif et le COS au datif. *Nautis* est masculin mais se décline comme *rosa*.
`,
        },
      ],
    },
    {
      id: "sum-present-imparfait",
      titre: "Le verbe esse (être) : présent et imparfait",
      theme: "Langue latine",
      cours: `
## Un verbe indispensable
Le verbe **esse** (être) est le verbe le plus fréquent en latin. Il est **irrégulier** : il faut apprendre ses formes par cœur. Dans le dictionnaire : *sum, es, esse, fui*.

## Les pronoms sujets ne sont pas obligatoires
En latin, la **désinence du verbe** suffit à indiquer la personne. *Sum* veut dire « je suis » : pas besoin de pronom ! Retiens ces **désinences personnelles**, qui serviront pour tous les verbes :

| Personne | Désinence |
|---|---|
| 1re du singulier (je) | **-o** (au présent : *amo*) ou **-m** (dans *sum*, et à l'imparfait : *eram*, *amabam*) |
| 2e du singulier (tu) | **-s** |
| 3e du singulier (il, elle) | **-t** |
| 1re du pluriel (nous) | **-mus** |
| 2e du pluriel (vous) | **-tis** |
| 3e du pluriel (ils, elles) | **-nt** |

## Présent et imparfait de esse

| Personne | Présent | Traduction | Imparfait | Traduction |
|---|---|---|---|---|
| 1re sg | **sum** | je suis | **eram** | j'étais |
| 2e sg | **es** | tu es | **eras** | tu étais |
| 3e sg | **est** | il / elle est | **erat** | il / elle était |
| 1re pl | **sumus** | nous sommes | **eramus** | nous étions |
| 2e pl | **estis** | vous êtes | **eratis** | vous étiez |
| 3e pl | **sunt** | ils / elles sont | **erant** | ils / elles étaient |

L'imparfait est très régulier : radical **era-** + désinences personnelles.

## Esse et l'attribut du sujet
Avec *esse*, l'attribut du sujet est au **même cas que le sujet** : le **nominatif**.

>! *Puella nauta non est.* Puella (nominatif, sujet), nauta (nominatif, attribut) : « La jeune fille n'est pas marin ».
>! *Diana dea est* = Diane est une déesse.

**non** placé devant le verbe signifie « ne... pas ».

## Esse peut aussi signifier « il y a », « exister »
Placé en tête de phrase, *est* ou *sunt* se traduit souvent par « il y a » : *Sunt in silva lupi* = Il y a des loups dans la forêt (*lupi* = des loups, nominatif pluriel de *lupus*, que tu verras au chapitre sur la 2e déclinaison ; *in silva* = dans la forêt, voir le chapitre sur les prépositions).

>! **Exemple résolu** : traduis *Erant poetae*.
>! *erant* = 3e personne du pluriel de l'imparfait de *esse* ; *poetae* = nominatif pluriel (sujet ou attribut). Comme le sujet est contenu dans le verbe, on peut traduire « Ils étaient poètes ». Et puisque *erant* est en tête de phrase, on peut aussi comprendre « Il y avait des poètes ».

> **À retenir** : présent sum, es, est, sumus, estis, sunt ; imparfait eram, eras, erat, eramus, eratis, erant. Désinences : -o ou -m (je), -s, -t, -mus, -tis, -nt. Avec *esse*, l'attribut est au nominatif. *Non* = ne... pas.

## Erreurs fréquentes
- Confondre *es* (tu es) et *est* (il est).
- Mettre l'attribut à l'accusatif : avec *esse*, sujet et attribut sont tous deux au **nominatif**.
`,
      exercices: [
        {
          type: "saisie",
          question: "Donne la forme latine de « nous sommes ».",
          reponses: ["sumus"],
          explication: "1re personne du pluriel du présent de *esse* : *sumus*.",
        },
        {
          type: "saisie",
          question: "Traduis en français : *eras*.",
          reponses: ["tu étais"],
          explication: "*Era-* (radical de l'imparfait) + *-s* (2e personne du singulier) : « tu étais ».",
        },
        {
          type: "qcm",
          question: "Que signifie *sunt* ?",
          choix: ["Nous sommes", "Vous êtes", "Ils sont", "Il est"],
          reponse: 2,
          explication: "La désinence -nt indique la 3e personne du pluriel : *sunt* = ils / elles sont.",
        },
        {
          type: "saisie",
          question: "Donne la forme latine de « ils étaient » (imparfait de *esse*).",
          reponses: ["erant"],
          explication: "Radical *era-* + désinence *-nt* : *erant*.",
        },
        {
          type: "vf",
          question: "En latin, il faut toujours écrire un pronom sujet devant le verbe, comme en français.",
          reponse: false,
          explication: "Faux : la désinence indique la personne. *Sum* suffit pour dire « je suis ».",
        },
        {
          type: "qcm",
          question: "Dans *Diana dea est*, à quel cas est *dea* ?",
          choix: ["Accusatif, car c'est un COD", "Nominatif, car c'est l'attribut du sujet", "Génitif, car c'est un complément du nom", "Datif"],
          reponse: 1,
          explication: "Avec *esse*, l'attribut du sujet est au nominatif, comme le sujet : « Diane est une déesse ».",
        },
        {
          type: "saisie",
          question: "Traduis : *Agricola non eram.*",
          reponses: ["je n'étais pas agriculteur", "je n'étais pas un agriculteur", "je n'étais pas paysan", "je n'étais pas un paysan", "je n'étais pas fermier", "je n'étais pas un fermier"],
          explication: "*Eram* = j'étais ; *non* = ne... pas ; *agricola* = attribut au nominatif. « Je n'étais pas agriculteur. »",
        },
        {
          type: "qcm",
          question: "Quelle est la terminaison de la 2e personne du pluriel (vous) ?",
          choix: ["-mus", "-nt", "-s", "-tis"],
          reponse: 3,
          explication: "-tis : *estis* (vous êtes), *eratis* (vous étiez). -mus = nous, -nt = ils, -s = tu.",
        },
        {
          type: "vf",
          question: "*Sunt in silva lupi* (lupi = des loups ; in silva = dans la forêt) peut se traduire par « Il y a des loups dans la forêt ».",
          reponse: true,
          explication: "Vrai : en tête de phrase, *est* et *sunt* se traduisent souvent par « il y a ».",
        },
        {
          type: "redaction",
          question: "Conjugue *esse* au présent et à l'imparfait, avec la traduction. Puis traduis : *Nautae eramus ; nunc agricolae sumus* (nunc = maintenant).",
          corrige: `
| Présent | Imparfait |
|---|---|
| sum, je suis | eram, j'étais |
| es, tu es | eras, tu étais |
| est, il est | erat, il était |
| sumus, nous sommes | eramus, nous étions |
| estis, vous êtes | eratis, vous étiez |
| sunt, ils sont | erant, ils étaient |

**Traduction** : « Nous étions marins ; maintenant, nous sommes agriculteurs. »
- *eramus* : 1re personne du pluriel de l'imparfait ; *nautae* : attribut au nominatif pluriel.
- *sumus* : 1re personne du pluriel du présent ; *agricolae* : attribut au nominatif pluriel.

>! Remarque : l'imparfait (*eramus*) s'oppose au présent (*sumus*) : avant / maintenant.
`,
        },
      ],
    },
    {
      id: "deuxieme-declinaison",
      titre: "La deuxième déclinaison : dominus, puer, templum",
      theme: "Langue latine",
      cours: `
## Reconnaître un nom de la 2e déclinaison
Les noms de la 2e déclinaison ont un **génitif singulier en -i**. Leur nominatif se termine le plus souvent en **-us** (masculins) ou en **-um** (neutres). Quelques masculins se terminent en **-er**. Dans le dictionnaire : *dominus, i, m.* (le maître) ; *templum, i, n.* (le temple) ; *puer, i, m.* (l'enfant, le garçon).

## Le modèle masculin : dominus, le maître

| Cas | Singulier | Pluriel |
|---|---|---|
| Nominatif | domin**us** | domin**i** |
| Vocatif | domin**e** | domin**i** |
| Accusatif | domin**um** | domin**os** |
| Génitif | domin**i** | domin**orum** |
| Datif | domin**o** | domin**is** |
| Ablatif | domin**o** | domin**is** |

Le vocatif singulier en **-e** est propre aux noms en -us : *Marce* ! (Marcus !). Les noms en **-ius** font leur vocatif en **-i** : *fili* ! (mon fils !).

## Les noms en -er : puer et ager
Commence par bien connaître *dominus* (ci-dessus) et *templum* (ci-dessous) : ce sont les modèles essentiels. Les noms en -er se déclinent **avec les mêmes terminaisons** ; la seule question est de savoir s'ils gardent leur e.
- **puer, pueri** (l'enfant) **garde le e** partout : puer, puer, puerum, pueri, puero, puero ; pueri, pueri, pueros, puerorum, pueris, pueris.
- **ager, agri** (le champ) **perd le e** à partir de l'accusatif : ager, ager, agrum, agri, agro, agro ; agri, agri, agros, agrorum, agris, agris.

C'est le **génitif** donné par le dictionnaire qui te dit si le e reste (*pueri*) ou disparaît (*agri*). Le radical se trouve en enlevant la désinence du génitif : *puer-i* → radical *puer-* ; *agr-i* → radical *agr-*.

## Le modèle neutre : templum, le temple

| Cas | Singulier | Pluriel |
|---|---|---|
| Nominatif | templ**um** | templ**a** |
| Vocatif | templ**um** | templ**a** |
| Accusatif | templ**um** | templ**a** |
| Génitif | templ**i** | templ**orum** |
| Datif | templ**o** | templ**is** |
| Ablatif | templ**o** | templ**is** |

> **Règle d'or des neutres** : au neutre, le **nominatif, le vocatif et l'accusatif sont toujours identiques**, et au pluriel ils se terminent toujours en **-a**.

Attention : *templa* (des temples) se termine en -a mais n'est **pas** un mot de la 1re déclinaison !

>! **Exemple résolu** : traduis *Dominus servis cibum dat* (dat = il donne ; cibus, i, m. = la nourriture ; servus, i, m. = l'esclave).
>! *dominus* : nominatif singulier, sujet ; *servis* : datif pluriel (à qui ?) ; *cibum* : accusatif singulier, COD.
>! → « Le maître donne de la nourriture aux esclaves. »

## Vocabulaire à connaître
| Latin | Français | Mot français dérivé |
|---|---|---|
| dominus, i, m. | le maître | domination |
| servus, i, m. | l'esclave | servir, servile |
| amicus, i, m. | l'ami | amical |
| filius, ii, m. | le fils | filial |
| equus, i, m. | le cheval | équitation |
| lupus, i, m. | le loup | louve |
| deus, i, m. | le dieu | divin |
| puer, pueri, m. | l'enfant, le garçon | puéril |
| ager, agri, m. | le champ | agriculture |
| liber, libri, m. | le livre | librairie |
| templum, i, n. | le temple | temple |
| bellum, i, n. | la guerre | belliqueux |
| oppidum, i, n. | la ville fortifiée | (pas de dérivé courant) |
| donum, i, n. | le cadeau | don |

> **À retenir** : 2e déclinaison = génitif en **-i**. Masculins en -us : -us, -e, -um, -i, -o, -o ; -i, -i, -os, -orum, -is, -is. Neutres en -um : -um, -um, -um, -i, -o, -o ; -a, -a, -a, -orum, -is, -is. *Puer* garde son e, *ager* le perd.

## Erreurs fréquentes
- Prendre *domini* pour un seul cas : c'est le génitif singulier **ou** le nominatif / vocatif pluriel.
- Prendre *templa* pour un féminin singulier de la 1re déclinaison.
- Confondre *liber, libri* (le livre) et *liber, libera, liberum* (libre).
`,
      exercices: [
        {
          type: "saisie",
          question: "Donne l'**accusatif pluriel** de *dominus* (le maître).",
          reponses: ["dominos"],
          explication: "Accusatif pluriel en -os : *dominos*.",
        },
        {
          type: "saisie",
          question: "Donne le **vocatif singulier** de *Marcus*.",
          reponses: ["Marce"],
          explication: "Les noms en -us font leur vocatif singulier en -e : *Marce* !",
        },
        {
          type: "qcm",
          question: "Quel est le **génitif singulier** de *ager* (le champ) ?",
          choix: ["ageri", "agri", "agrum", "agro"],
          reponse: 1,
          explication: "*Ager* perd son e : *agri*. Le dictionnaire l'indique : *ager, agri, m.* *Agrum* est l'accusatif, *agro* le datif ou l'ablatif.",
        },
        {
          type: "qcm",
          question: "À quel cas et à quel nombre peut être la forme *templa* ?",
          choix: ["Nominatif singulier féminin", "Ablatif singulier", "Nominatif, vocatif ou accusatif pluriel neutre", "Génitif pluriel"],
          reponse: 2,
          explication: "*Templum* est neutre : au pluriel, nominatif, vocatif et accusatif sont en -a. Ce n'est pas un nom de la 1re déclinaison.",
        },
        {
          type: "vf",
          question: "Au neutre, le nominatif et l'accusatif ont toujours la même forme.",
          reponse: true,
          explication: "Vrai, c'est la règle d'or des neutres : *templum* / *templum*, *templa* / *templa*. C'est le sens de la phrase qui te dit s'il est sujet ou COD.",
        },
        {
          type: "saisie",
          question: "Donne le **datif pluriel** de *puer* (l'enfant).",
          reponses: ["pueris"],
          explication: "*Puer, pueri* garde son e : datif pluriel *pueris*, « aux enfants ».",
        },
        {
          type: "qcm",
          question: "Que signifie *dona deorum* ?",
          choix: ["Les cadeaux des dieux", "Le cadeau au dieu", "Les dieux du cadeau", "Les dieux donnent"],
          reponse: 0,
          explication: "*Dona* : nominatif (ou accusatif) pluriel neutre de *donum* ; *deorum* : génitif pluriel de *deus*, complément du nom. « Les cadeaux des dieux ».",
        },
        {
          type: "saisie",
          question: "Traduis : *Servus equum domini amat.*",
          reponses: ["l'esclave aime le cheval du maître", "un esclave aime le cheval du maître", "l'esclave aime le cheval de son maître"],
          explication: "*Servus* (nominatif, sujet) *equum* (accusatif, COD) *domini* (génitif, complément du nom) *amat* (il aime). « L'esclave aime le cheval du maître. »",
        },
        {
          type: "vf",
          question: "*Liber, libri, m.* signifie « libre ».",
          reponse: false,
          explication: "Faux : *liber, libri, m.* est le **livre** (d'où « librairie »). « Libre » se dit *liber, libera, liberum*, un adjectif.",
        },
        {
          type: "redaction",
          question: "Décline *amicus, i, m.* (l'ami) et *bellum, i, n.* (la guerre). Puis traduis : *Amici pueris libros dant* (dant = ils donnent).",
          corrige: `
| Cas | amicus sg | amicus pl | bellum sg | bellum pl |
|---|---|---|---|---|
| Nominatif | amicus | amici | bellum | bella |
| Vocatif | amice | amici | bellum | bella |
| Accusatif | amicum | amicos | bellum | bella |
| Génitif | amici | amicorum | belli | bellorum |
| Datif | amico | amicis | bello | bellis |
| Ablatif | amico | amicis | bello | bellis |

**Traduction** : *Amici* (nominatif pluriel, sujet de *dant*) *pueris* (datif pluriel, à qui ?) *libros* (accusatif pluriel de *liber, libri*, COD) *dant*.
→ « Les amis donnent des livres aux enfants. »

>! Piège : *amici* pourrait aussi être un génitif singulier, mais il faut un sujet pluriel pour *dant* : c'est donc le nominatif pluriel.
`,
        },
      ],
    },
    {
      id: "present-conjugaisons",
      titre: "Le présent des verbes : les cinq conjugaisons",
      theme: "Langue latine",
      cours: `
## Les cinq conjugaisons
Les verbes latins se répartissent en **quatre conjugaisons**, plus une cinquième, la **3e mixte**, qui mélange la 3e et la 4e.

>! **Conseil** : ne cherche pas à tout apprendre d'un coup. Apprends d'abord très bien **amare** (1re) et **legere** (3e), puis **monere** (2e) et **audire** (4e). La 3e mixte (*capere*) est **pour aller plus loin** : il suffit de savoir la reconnaître.

On reconnaît la conjugaison d'un verbe grâce aux premières formes données par le dictionnaire : la 1re personne du singulier, la 2e personne du singulier et l'**infinitif**.

| Conjugaison | Modèle | Infinitif | Sens |
|---|---|---|---|
| 1re | amo, amas | am**are** | aimer |
| 2e | moneo, mones | mon**ere** (e long) | avertir |
| 3e | lego, legis | leg**ere** (e bref) | lire |
| 4e | audio, audis | aud**ire** | entendre |
| 3e mixte (pour aller plus loin) | capio, capis | cap**ere** (e bref) | prendre |

## Le présent de l'indicatif
On part du radical et on ajoute les **désinences personnelles** : -o, -s, -t, -mus, -tis, -nt (le -m de *sum* est une exception).

| Personne | amare | monere | legere | audire | capere |
|---|---|---|---|---|---|
| je | am**o** | mone**o** | leg**o** | audi**o** | capi**o** |
| tu | ama**s** | mone**s** | leg**is** | audi**s** | cap**is** |
| il, elle | ama**t** | mone**t** | leg**it** | audi**t** | cap**it** |
| nous | ama**mus** | mone**mus** | leg**imus** | audi**mus** | cap**imus** |
| vous | ama**tis** | mone**tis** | leg**itis** | audi**tis** | cap**itis** |
| ils, elles | ama**nt** | mone**nt** | leg**unt** | audi**unt** | capi**unt** |

- 1re conjugaison : voyelle **a** (*amas, amat*), sauf à la 1re personne (*amo*).
- 2e conjugaison : voyelle **e** partout (*moneo, mones*).
- 3e conjugaison : voyelle de liaison **i**, mais **u** à la 3e personne du pluriel (*legunt*).
- 4e conjugaison : voyelle **i** partout, et **-iunt** au pluriel (*audiunt*).
- **Pour aller plus loin** — 3e mixte : comme *legere*, mais avec un **i** à la 1re personne du singulier et à la 3e du pluriel (*capio, capiunt*).

## Trouver la personne et traduire
Comme pour *esse*, le pronom sujet n'est pas écrit : c'est la **désinence** qui indique la personne. Si un nom au nominatif est présent, c'est lui le sujet.

>! **Exemple résolu** : traduis *Pueri fabulas legunt* (fabula, ae = l'histoire).
>! *legunt* : 3e personne du pluriel du présent de *legere* (lire). Sujet au nominatif pluriel : *pueri*. COD à l'accusatif : *fabulas*.
>! → « Les enfants lisent des histoires. »

## Verbes à connaître
| 1re conj. | 2e conj. | 3e conj. | 4e conj. | 3e mixte |
|---|---|---|---|---|
| amo, aimer | habeo, avoir | lego, lire | audio, entendre | capio, prendre |
| laboro, travailler | video, voir | dico, dire | venio, venir | facio, faire |
| porto, porter | timeo, craindre | mitto, envoyer | dormio, dormir | fugio, fuir |
| pugno, combattre | moneo, avertir | scribo, écrire | | |
| habito, habiter | | duco, conduire | | |

## L'impératif présent (pour donner un ordre)
Au singulier, on prend le radical avec sa voyelle : *ama !* (aime !), *mone !*, *lege !*, *audi !*, *cape !* Au pluriel, on ajoute **-te** : *amate !* (aimez !), *audite !*, et pour la 3e conjugaison *legite !*, *capite !*.

> **À retenir** : désinences du présent -o, -s, -t, -mus, -tis, -nt. Le dictionnaire donne l'infinitif, qui permet de trouver la conjugaison : -are (1re), -ēre (2e), -ĕre (3e et mixte), -ire (4e). 3e pers. du pluriel : amant, monent, legunt, audiunt, capiunt.

## Erreurs fréquentes
- Écrire *legent* ou *legint* : la 3e personne du pluriel de *legere* est **legunt**.
- Traduire *amat* par « j'aime » : la désinence -t désigne la 3e personne (il, elle).
`,
      exercices: [
        {
          type: "saisie",
          question: "Conjugue *amare* (aimer) à la **1re personne du pluriel** du présent.",
          reponses: ["amamus"],
          explication: "Radical *ama-* + *-mus* : *amamus*, nous aimons.",
        },
        {
          type: "qcm",
          question: "À quelle conjugaison appartient *audio, audis, audire* (entendre) ?",
          choix: ["1re", "2e", "3e", "4e"],
          reponse: 3,
          explication: "L'infinitif en -ire et la voyelle i partout (*audis, audit*) indiquent la 4e conjugaison.",
        },
        {
          type: "saisie",
          question: "Donne la 3e personne du pluriel du présent de *legere* (lire).",
          reponses: ["legunt"],
          explication: "À la 3e conjugaison, la voyelle de liaison devient u à la 3e personne du pluriel : *legunt*, ils lisent.",
        },
        {
          type: "saisie",
          question: "Traduis la forme verbale *videtis* (videre, voir).",
          reponses: ["vous voyez"],
          explication: "*Vide-* (2e conjugaison) + *-tis* (2e personne du pluriel) : « vous voyez ».",
        },
        {
          type: "qcm",
          question: "Quelle forme signifie « ils viennent » (venire, 4e conjugaison) ?",
          choix: ["venunt", "veniunt", "venint", "venent"],
          reponse: 1,
          explication: "À la 4e conjugaison, la 3e personne du pluriel est en -iunt : *veniunt*, comme *audiunt*.",
        },
        {
          type: "vf",
          question: "*Capio, capis, capere* (prendre) fait *capiunt* à la 3e personne du pluriel.",
          reponse: true,
          explication: "Vrai : c'est un verbe de la 3e conjugaison mixte, avec un i à la 1re personne du singulier (*capio*) et à la 3e du pluriel (*capiunt*).",
        },
        {
          type: "saisie",
          question: "Traduis : *Agricolae in agris laborant* (in agris = dans les champs).",
          reponses: ["les agriculteurs travaillent dans les champs", "les paysans travaillent dans les champs", "des agriculteurs travaillent dans les champs", "des paysans travaillent dans les champs", "les fermiers travaillent dans les champs", "les agriculteurs travaillent aux champs", "les paysans travaillent aux champs"],
          explication: "*Agricolae* : nominatif pluriel, sujet ; *laborant* : 3e personne du pluriel de *laborare*. « Les agriculteurs travaillent dans les champs. »",
        },
        {
          type: "qcm",
          question: "Comment dit-on « écoutez ! » (impératif pluriel de *audire*) ?",
          choix: ["audi", "auditis", "audite", "audiunt"],
          reponse: 2,
          explication: "Impératif pluriel = radical + -te : *audite !* *Audi* est l'impératif singulier, *auditis* signifie « vous entendez ».",
        },
        {
          type: "saisie",
          question: "Traduis en latin : « tu crains » (timere, 2e conjugaison).",
          reponses: ["times"],
          explication: "Radical *time-* + *-s* : *times*.",
        },
        {
          type: "redaction",
          question: "Conjugue *portare* (porter) et *dicere* (dire) au présent. Puis traduis : *Servi aquam portant ; dominus fabulam dicit.*",
          corrige: `
| Personne | portare | dicere |
|---|---|---|
| je | porto | dico |
| tu | portas | dicis |
| il, elle | portat | dicit |
| nous | portamus | dicimus |
| vous | portatis | dicitis |
| ils, elles | portant | dicunt |

**Traduction** : « Les esclaves portent de l'eau ; le maître raconte une histoire. »
- *servi* : nominatif pluriel, sujet de *portant* ; *aquam* : accusatif, COD.
- *dominus* : nominatif singulier, sujet de *dicit* ; *fabulam* : accusatif, COD.

>! *Dicere* signifie « dire » ; avec *fabulam*, on traduit plus joliment par « raconter une histoire ».
`,
        },
      ],
    },
    {
      id: "imparfait-conjugaisons",
      titre: "L'imparfait des verbes",
      theme: "Langue latine",
      cours: `
## Un temps du passé
Comme en français, l'**imparfait** latin exprime une action passée **qui dure** ou **qui se répète**, ou une **description** dans le passé : « Les Romains habitaient... », « Chaque jour, il travaillait... ».

## La formation : le suffixe -ba-
On reconnaît l'imparfait à son suffixe **-ba-**, placé entre le radical et la désinence. À la 1re personne du singulier, la désinence est **-m** (et non -o) :

| Personne | amare | monere | legere | audire | capere |
|---|---|---|---|---|---|
| je | ama**bam** | mone**bam** | leg**ebam** | audi**ebam** | capi**ebam** |
| tu | ama**bas** | mone**bas** | leg**ebas** | audi**ebas** | capi**ebas** |
| il, elle | ama**bat** | mone**bat** | leg**ebat** | audi**ebat** | capi**ebat** |
| nous | ama**bamus** | mone**bamus** | leg**ebamus** | audi**ebamus** | capi**ebamus** |
| vous | ama**batis** | mone**batis** | leg**ebatis** | audi**ebatis** | capi**ebatis** |
| ils, elles | ama**bant** | mone**bant** | leg**ebant** | audi**ebant** | capi**ebant** |

- 1re et 2e conjugaisons : radical avec sa voyelle + **-ba-** : *ama-ba-t*, *mone-ba-t*.
- 3e conjugaison : radical + **-eba-** : *leg-eba-t*.
- 4e conjugaison (et 3e mixte, pour aller plus loin) : radical + **-ieba-** : *aud-ieba-t*, *cap-ieba-t*.

## Rappel : l'imparfait de esse
*Esse* n'a pas de -ba- : **eram, eras, erat, eramus, eratis, erant**.

## Présent ou imparfait ?
Pour reconnaître le temps d'un verbe, cherche le **-ba-** juste avant la désinence.

>! **Exemple résolu** : analyse *habitabant*.
>! *habita-* (radical de *habitare*, 1re conj.) + *-ba-* (imparfait) + *-nt* (3e personne du pluriel) → « ils habitaient ».

>! **Exemple résolu** : traduis *Romani in oppidis habitabant ; agricolae in villis laborabant.* (in oppidis = dans des villes fortifiées ; in villis = dans des fermes)
>! *Romani* (les Romains, nominatif pluriel) ; *habitabant* (ils habitaient) ; *agricolae* (nominatif pluriel) ; *laborabant* (ils travaillaient).
>! → « Les Romains habitaient dans des villes fortifiées ; les agriculteurs travaillaient dans des fermes. »

> **À retenir** : imparfait = radical + **-ba-** (1re et 2e conj.), **-eba-** (3e), **-ieba-** (4e et mixte) + désinences **-m, -s, -t, -mus, -tis, -nt**. Imparfait de *esse* : eram, eras, erat, eramus, eratis, erant.

## Erreurs fréquentes
- Écrire *amabo* pour « j'aimais » : l'imparfait est *amabam* (*amabo* est une forme du futur, que tu verras plus tard).
- Oublier le e de la 3e conjugaison : on écrit *legebat*, pas *legbat*.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel suffixe permet de reconnaître l'imparfait des verbes (sauf *esse*) ?",
          choix: ["-ba-", "-ra-", "-bi-", "-nt-"],
          reponse: 0,
          explication: "Le suffixe -ba- (ou -eba-, -ieba-) caractérise l'imparfait : *amabat*, *legebat*, *audiebat*.",
        },
        {
          type: "saisie",
          question: "Conjugue *amare* à la 1re personne du singulier de l'imparfait (« j'aimais »).",
          reponses: ["amabam"],
          explication: "*Ama-* + *-ba-* + *-m* : *amabam*. À l'imparfait, la 1re personne est en -m, pas en -o.",
        },
        {
          type: "saisie",
          question: "Traduis la forme *legebant*.",
          reponses: ["ils lisaient", "elles lisaient", "ils/elles lisaient"],
          explication: "*Leg-* + *-eba-* (imparfait de la 3e conj.) + *-nt* (3e pers. du pluriel) : « ils lisaient ».",
        },
        {
          type: "qcm",
          question: "Quelle forme signifie « nous entendions » ?",
          choix: ["audimus", "audiebamus", "audebamus", "audiebatis"],
          reponse: 1,
          explication: "4e conjugaison : *aud-* + *-ieba-* + *-mus* : *audiebamus*. *Audimus* est au présent ; *audiebatis* = vous entendiez.",
        },
        {
          type: "vf",
          question: "*Habebat* est une forme de l'imparfait.",
          reponse: true,
          explication: "Vrai : *habe-* + *-ba-* + *-t* = « il avait » (habere, 2e conjugaison).",
        },
        {
          type: "saisie",
          question: "Donne la 3e personne du singulier de l'imparfait de *esse* (« il était »).",
          reponses: ["erat"],
          explication: "*Esse* est irrégulier, sans -ba- : eram, eras, **erat**...",
        },
        {
          type: "vf",
          question: "*Pugnant* est à l'imparfait.",
          reponse: false,
          explication: "Faux : il n'y a pas de -ba-. *Pugnant* est au présent (« ils combattent ») ; l'imparfait serait *pugnabant*.",
        },
        {
          type: "saisie",
          question: "Traduis en latin : « vous voyiez » (videre, 2e conjugaison).",
          reponses: ["videbatis"],
          explication: "*Vide-* + *-ba-* + *-tis* : *videbatis*.",
        },
        {
          type: "qcm",
          question: "Traduis : *Pueri in silva ludebant* (ludere, 3e conj. = jouer ; in silva = dans la forêt).",
          choix: ["Les enfants jouent dans la forêt.", "L'enfant jouait dans la forêt.", "Les enfants jouaient dans la forêt.", "Les enfants joueront dans la forêt."],
          reponse: 2,
          explication: "*Ludebant* : imparfait (-eba-), 3e personne du pluriel ; sujet *pueri* (nominatif pluriel). « Les enfants jouaient dans la forêt. »",
        },
        {
          type: "redaction",
          question: "Mets les verbes de ces phrases à l'imparfait, puis traduis les phrases obtenues : *Agricola in agro laborat. Puellae fabulas audiunt. Servi aquam portant.* (in agro = dans le champ)",
          corrige: `
- *Agricola in agro laborat* → *Agricola in agro **laborabat*** : « L'agriculteur travaillait dans le champ. » (1re conj. : *labora-ba-t*)
- *Puellae fabulas audiunt* → *Puellae fabulas **audiebant*** : « Les jeunes filles écoutaient des histoires. » (4e conj. : *aud-ieba-nt*)
- *Servi aquam portant* → *Servi aquam **portabant*** : « Les esclaves portaient de l'eau. » (1re conj. : *porta-ba-nt*)

>! Méthode : garde la personne (même désinence -t ou -nt), ajoute le suffixe de l'imparfait selon la conjugaison.
`,
        },
      ],
    },
    {
      id: "adjectifs-premiere-classe",
      titre: "Les adjectifs de la 1re classe : bonus, bona, bonum",
      theme: "Langue latine",
      cours: `
## Un adjectif qui change selon le nom
En latin comme en français, l'adjectif **s'accorde** avec le nom qu'il qualifie. Mais en latin, il s'accorde en **genre**, en **nombre** et aussi en **cas**.

## Les adjectifs de la 1re classe
Ils se déclinent sur les modèles que tu connais déjà :
- au **masculin**, comme *dominus* (2e déclinaison) ;
- au **féminin**, comme *rosa* (1re déclinaison) ;
- au **neutre**, comme *templum* (2e déclinaison).

Le dictionnaire les donne aux trois genres : *bonus, a, um* (bon).

| Singulier | Masculin | Féminin | Neutre |
|---|---|---|---|
| Nominatif | bon**us** | bon**a** | bon**um** |
| Vocatif | bon**e** | bon**a** | bon**um** |
| Accusatif | bon**um** | bon**am** | bon**um** |
| Génitif | bon**i** | bon**ae** | bon**i** |
| Datif | bon**o** | bon**ae** | bon**o** |
| Ablatif | bon**o** | bon**a** | bon**o** |

| Pluriel | Masculin | Féminin | Neutre |
|---|---|---|---|
| Nominatif | bon**i** | bon**ae** | bon**a** |
| Vocatif | bon**i** | bon**ae** | bon**a** |
| Accusatif | bon**os** | bon**as** | bon**a** |
| Génitif | bon**orum** | bon**arum** | bon**orum** |
| Datif | bon**is** | bon**is** | bon**is** |
| Ablatif | bon**is** | bon**is** | bon**is** |

**Pour aller plus loin** : quelques adjectifs sont en **-er** au masculin, comme *puer* et *ager*. *Liber, libera, liberum* (libre) et *miser, misera, miserum* (malheureux) gardent le e ; *pulcher, pulchra, pulchrum* (beau) le perd. Le féminin donné par le dictionnaire (*libera*, *pulchra*) te le dit.

## L'adjectif épithète
L'adjectif épithète se met au même genre, nombre et cas que son nom. Il est souvent placé **après** le nom.

>! *Puella bona* (la bonne jeune fille, nominatif) ; *puellam bonam* (accusatif) ; *puellarum bonarum* (génitif pluriel).

Attention : l'adjectif s'accorde **avec le genre du nom**, pas avec sa déclinaison. *Nauta* est masculin : « le bon marin » se dit **nauta bonus**. Les terminaisons sont alors différentes !

## L'adjectif attribut
Avec *esse*, l'adjectif attribut se met au **nominatif**, accordé avec le sujet : *Rosae pulchrae sunt* = Les roses sont belles. *Templum magnum est* = Le temple est grand.

>! **Exemple résolu** : traduis *Dominus bonus servos miseros liberat* (liberare = libérer).
>! *dominus bonus* : nominatif masculin singulier, sujet ; *servos miseros* : accusatif masculin pluriel, COD ; *liberat* : il libère.
>! → « Le bon maître libère les malheureux esclaves. »

## Vocabulaire à connaître
| Latin | Français | Mot français dérivé |
|---|---|---|
| bonus, a, um | bon | bonté |
| malus, a, um | mauvais, méchant | malice |
| magnus, a, um | grand | magnifique |
| parvus, a, um | petit | (pas de dérivé courant) |
| multus, a, um | nombreux (au pluriel) | multitude |
| longus, a, um | long | longueur |
| novus, a, um | nouveau | novice, rénover |
| altus, a, um | haut, profond | altitude |
| laetus, a, um | joyeux | liesse |
| pulcher, pulchra, pulchrum | beau | (pas de dérivé courant) |
| liber, libera, liberum | libre | liberté |
| Romanus, a, um | romain | romain |

> **À retenir** : adjectifs de la 1re classe *bonus, a, um* : masculin comme *dominus*, féminin comme *rosa*, neutre comme *templum*. L'adjectif s'accorde en genre, nombre et cas avec le nom. Attribut avec *esse* : au nominatif.

## Erreurs fréquentes
- Écrire *nauta bona* : *nauta* est masculin, il faut *nauta bonus*.
- Oublier d'accorder le cas : « je vois la grande île » = *insulam magnam video* (les deux à l'accusatif).
`,
      exercices: [
        {
          type: "saisie",
          question: "Accorde *magnus, a, um* avec *insulam* (accusatif féminin singulier) : *insulam ...*",
          reponses: ["magnam", "insulam magnam"],
          explication: "Accusatif féminin singulier : *magnam*, comme *rosam*. *Insulam magnam* = la grande île (COD).",
        },
        {
          type: "qcm",
          question: "Comment dit-on « le bon marin » (nominatif) ?",
          choix: ["nauta bona", "nauta bonum", "nautus bonus", "nauta bonus"],
          reponse: 3,
          explication: "*Nauta* est masculin : l'adjectif prend la forme masculine *bonus*, même si les terminaisons ne se ressemblent pas.",
        },
        {
          type: "saisie",
          question: "Donne le nominatif neutre pluriel de *bonus, a, um*.",
          reponses: ["bona"],
          explication: "Au neutre pluriel, nominatif, vocatif et accusatif sont en -a : *bona* (comme *templa*).",
        },
        {
          type: "vf",
          question: "En latin, l'adjectif s'accorde avec le nom en genre, en nombre et en cas.",
          reponse: true,
          explication: "Vrai : *puellarum bonarum* (génitif féminin pluriel), *domino bono* (datif masculin singulier).",
        },
        {
          type: "qcm",
          question: "Quelle est la traduction de *templa alta* ?",
          choix: ["Le temple haut", "Les hauts temples", "La haute colline", "Du haut temple"],
          reponse: 1,
          explication: "*Templa* : neutre pluriel ; *alta* : neutre pluriel accordé. « Les hauts temples ». Ne confonds pas avec un féminin singulier en -a !",
        },
        {
          type: "saisie",
          question: "Traduis : *Rosae pulchrae sunt.*",
          reponses: ["les roses sont belles", "des roses sont belles", "les roses sont jolies"],
          explication: "*Rosae* : nominatif pluriel, sujet ; *sunt* : ils/elles sont ; *pulchrae* : adjectif attribut au nominatif féminin pluriel.",
        },
        {
          type: "qcm",
          question: "Quelle forme de *pulcher, pulchra, pulchrum* faut-il pour accompagner *puerum* (accusatif masculin singulier) ?",
          choix: ["pulcherum", "pulchram", "pulchrum", "pulchro"],
          reponse: 2,
          explication: "*Pulcher* perd son e : accusatif masculin *pulchrum*. *Pulchram* est féminin, *pulchro* est un datif ou ablatif.",
        },
        {
          type: "vf",
          question: "Dans *Servi laeti cantant*, l'adjectif *laeti* est au nominatif masculin pluriel.",
          reponse: true,
          explication: "Vrai : il s'accorde avec *servi*, sujet (nominatif masculin pluriel). « Les esclaves joyeux chantent » ou « Les esclaves chantent joyeusement ».",
        },
        {
          type: "saisie",
          question: "Traduis : *Agricola parvus equum magnum habet.*",
          reponses: ["le petit agriculteur a un grand cheval", "le petit paysan a un grand cheval", "un petit agriculteur a un grand cheval", "un petit paysan a un grand cheval", "le petit agriculteur possède un grand cheval", "le petit paysan possède un grand cheval"],
          explication: "*Agricola parvus* : nominatif masculin (agricola est masculin), sujet ; *equum magnum* : accusatif, COD ; *habet* : il a.",
        },
        {
          type: "redaction",
          question: "Décline au singulier *dea bona* (la bonne déesse) et *bellum longum* (la longue guerre). Puis traduis : *Romani multa et longa bella gerebant* (gerere bellum = faire la guerre ; et = et).",
          corrige: `
| Cas | dea bona | bellum longum |
|---|---|---|
| Nominatif | dea bona | bellum longum |
| Vocatif | dea bona | bellum longum |
| Accusatif | deam bonam | bellum longum |
| Génitif | deae bonae | belli longi |
| Datif | deae bonae | bello longo |
| Ablatif | dea bona | bello longo |

**Traduction** : « Les Romains faisaient des guerres nombreuses et longues. » (ou : « de nombreuses et longues guerres »)
- *Romani* : nominatif masculin pluriel, sujet ;
- *bella* : accusatif neutre pluriel, COD ; *multa* et *longa* s'accordent avec lui (neutre pluriel) ;
- *gerebant* : imparfait (-eba-), 3e personne du pluriel.

>! Piège : *multa*, *longa* et *bella* se terminent en -a mais sont des neutres pluriels, pas des féminins singuliers.
`,
        },
      ],
    },
    {
      id: "prepositions-traduction",
      titre: "Les prépositions et la méthode pour traduire une phrase",
      theme: "Lire, comprendre, traduire",
      cours: `
## Les prépositions
Comme en français, une **préposition** introduit un complément. En latin, chaque préposition est suivie d'un **cas précis** : l'**accusatif** ou l'**ablatif**.

Les **prépositions essentielles**, à savoir par cœur :

| + accusatif | Sens | + ablatif | Sens |
|---|---|---|---|
| **ad** | vers, à (mouvement) | **in** | dans, sur (sans mouvement) |
| **in** | dans, vers (avec mouvement) | **cum** | avec |
| **per** | à travers, par | **ex** (ou **e**) | hors de, de (en sortant) |
| **post** | après, derrière | **sine** | sans |

**Pour aller plus loin** (tu les retrouveras peu à peu dans les textes, elles sont souvent données) :

| + accusatif | Sens | + ablatif | Sens |
|---|---|---|---|
| **ante** | devant, avant | **a** (ou **ab**) | de, loin de, par |
| **prope** | près de | **de** | du haut de, au sujet de |
| **circum** | autour de | **pro** | devant, pour |
| **trans** | au-delà de | | |
| **contra** | contre | | |

>! **Astuce** : beaucoup de ces prépositions vivent encore en français : *post* (post-scriptum), *trans* (transporter), *circum* (circonférence), *contra* (contre), *ante* (antérieur), *sine* (sinécure : sans souci).

## Les questions de lieu
Pour bien choisir le cas, pose-toi la question : **y a-t-il un mouvement ?**

| Question | Sens | Construction | Exemple |
|---|---|---|---|
| **Ubi ?** | où est-on ? | in + ablatif | *in silva* : dans la forêt |
| **Quo ?** | où va-t-on ? | in ou ad + accusatif | *in silvam* : dans la forêt (on y entre) |
| **Unde ?** | d'où vient-on ? | ex ou a + ablatif | *ex silva* : (en sortant) de la forêt |
| **Qua ?** | par où passe-t-on ? | per + accusatif | *per silvam* : à travers la forêt |

>! *Puer in villa est* = L'enfant est dans la ferme (il y est déjà : ablatif).
>! *Puer in villam venit* = L'enfant vient dans la ferme (il y entre : accusatif).

## Traduire une phrase latine : la méthode
1. **Lis toute la phrase** et repère les mots que tu connais.
2. **Trouve le verbe** conjugué (souvent à la fin) : sa désinence donne la personne et le nombre ; son suffixe donne le temps (-ba- = imparfait).
3. **Cherche le sujet** : un nom au **nominatif** qui s'accorde avec le verbe (singulier ou pluriel). S'il n'y en a pas, le sujet est le pronom contenu dans le verbe.
4. **Cherche le COD** à l'**accusatif**, puis les autres compléments : génitif (complément du nom), datif (à qui ?), groupes prépositionnels.
5. **Accorde les adjectifs** avec leur nom (même genre, nombre, cas).
6. **Écris une traduction en bon français**, en ajoutant les articles.

>! **Exemple résolu** : *Post cenam, Marcus cum amicis per vias Romae ambulabat.*
>! (cena, ae = le dîner ; ambulare = se promener ; Roma, ae = Rome)
>! - Verbe : *ambulabat* = imparfait, 3e pers. du sing. : « il se promenait ».
>! - Sujet au nominatif : *Marcus*.
>! - *post cenam* : post + accusatif = après le dîner.
>! - *cum amicis* : cum + ablatif pluriel = avec ses amis.
>! - *per vias Romae* : per + accusatif = à travers les rues ; *Romae* = génitif, complément du nom : de Rome.
>! → « Après le dîner, Marcus se promenait avec ses amis à travers les rues de Rome. »

> **À retenir** : prépositions essentielles + accusatif : ad, in (avec mouvement), per, post ; + ablatif : in (sans mouvement), cum, ex/e, sine. Ubi ? in + abl. ; Quo ? in/ad + acc. ; Unde ? ex/a + abl. ; Qua ? per + acc. Pour traduire : verbe, sujet, COD, compléments, accords, bon français.

## Erreurs fréquentes
- Traduire mot à mot dans l'ordre latin : « Marcus avec amis à travers rues de Rome se promenait » n'est pas du français !
- Oublier que *in* change de sens selon le cas : *in silva* (dans la forêt, on y est) / *in silvam* (dans la forêt, on y va).
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel cas suit la préposition **cum** (avec) ?",
          choix: ["Le nominatif", "L'accusatif", "Le génitif", "L'ablatif"],
          reponse: 3,
          explication: "*Cum* se construit avec l'ablatif : *cum amicis*, avec des amis.",
        },
        {
          type: "qcm",
          question: "Quelle est la traduction de *in silvam* ?",
          choix: ["Dans la forêt (on y est déjà)", "Dans la forêt (on y entre)", "Hors de la forêt", "Autour de la forêt"],
          reponse: 1,
          explication: "*In* + accusatif exprime un mouvement : on va dans la forêt. *In silva* (ablatif) voudrait dire qu'on y est déjà.",
        },
        {
          type: "vf",
          question: "La préposition **per** (à travers) est suivie de l'accusatif.",
          reponse: true,
          explication: "Vrai : *per vias*, à travers les rues ; *per silvam*, à travers la forêt.",
        },
        {
          type: "saisie",
          question: "Complète avec la bonne forme de *villa* : « Les esclaves sortent de la ferme » = *Servi ex ... exeunt.*",
          reponses: ["villa", "ex villa"],
          explication: "*Ex* + ablatif : *ex villa*. C'est la question *unde ?* (d'où vient-on ?).",
        },
        {
          type: "qcm",
          question: "Quelle question latine correspond au lieu **où l'on va** ?",
          choix: ["Ubi ?", "Quo ?", "Unde ?", "Qua ?"],
          reponse: 1,
          explication: "*Quo ?* = où va-t-on ? (in ou ad + accusatif). *Ubi ?* = où est-on ? ; *unde ?* = d'où ? ; *qua ?* = par où ?",
        },
        {
          type: "saisie",
          question: "Traduis : *sine aqua*.",
          reponses: ["sans eau", "sans l'eau"],
          explication: "*Sine* + ablatif = sans : « sans eau ».",
        },
        {
          type: "vf",
          question: "Pour traduire une phrase latine, il faut commencer par le premier mot et traduire dans l'ordre.",
          reponse: false,
          explication: "Faux : l'ordre des mots est libre en latin. Il vaut mieux commencer par repérer le **verbe**, puis le sujet au nominatif, puis les compléments.",
        },
        {
          type: "saisie",
          question: "Traduis : *Puellae in templo sunt.*",
          reponses: ["les jeunes filles sont dans le temple", "des jeunes filles sont dans le temple", "les filles sont dans le temple", "les jeunes filles sont au temple"],
          explication: "*Puellae* : nominatif pluriel, sujet ; *sunt* : elles sont ; *in templo* : in + ablatif, lieu où l'on est.",
        },
        {
          type: "qcm",
          question: "Traduis : *Nautae ad insulam navigabant* (navigare = naviguer).",
          choix: ["Les marins naviguaient vers l'île.", "Le marin naviguait près de l'île.", "Les marins naviguent autour de l'île.", "Les marins naviguaient loin de l'île."],
          reponse: 0,
          explication: "*Navigabant* : imparfait, 3e pers. du pluriel ; *nautae* : sujet ; *ad insulam* : ad + accusatif = vers l'île.",
        },
        {
          type: "redaction",
          question: "Traduis ce texte d'entraînement en suivant la méthode (verbe, sujet, compléments) : *Marcus et Iulia in villa habitabant. Cotidie cum servis in agros veniebant. Post cenam, pueri fabulas avi audiebant.* (et = et ; cotidie = chaque jour ; avus, i = le grand-père ; cena, ae = le dîner)",
          corrige: `
**Traduction** : « Marcus et Julia habitaient dans une ferme. Chaque jour, ils venaient dans les champs avec les esclaves. Après le dîner, les enfants écoutaient les histoires de leur grand-père. »

**Analyse** :
- *habitabant* : imparfait de *habitare*, 3e pers. du pluriel ; sujet *Marcus et Iulia* ; *in villa* : in + ablatif (lieu où l'on est).
- *veniebant* : imparfait de *venire* (4e conj., -ieba-), 3e pers. du pluriel ; le sujet est contenu dans le verbe (« ils ») ; *cum servis* : cum + ablatif ; *in agros* : in + accusatif (mouvement : ils vont dans les champs).
- *audiebant* : imparfait de *audire*, 3e pers. du pluriel ; sujet *pueri* ; *fabulas* : accusatif pluriel, COD ; *avi* : génitif singulier, complément du nom *fabulas* ; *post cenam* : post + accusatif.

>! *Pueri* désigne ici les enfants (garçons et filles). En français, on ajoute « leur » devant « grand-père » pour une traduction naturelle.
`,
        },
      ],
    },
    {
      id: "lexique-etymologie",
      titre: "Du latin au français : lexique et étymologie",
      theme: "Lexique et étymologie",
      cours: `
## Le français, une langue fille du latin
Le français vient du **latin parlé** par les soldats, les marchands et les colons installés en Gaule après la conquête romaine (le sud de la Gaule est romain dès la fin du IIe siècle av. J.-C. ; Jules César conquiert le reste en 58-51 av. J.-C.). Pendant des siècles, ce latin s'est transformé peu à peu jusqu'à devenir le français. L'**étymologie** est l'étude de l'origine des mots (du grec *etymos*, vrai, et *logos*, discours).

## Mots populaires et mots savants
Un même mot latin a parfois donné **deux mots français** : on les appelle des **doublets**.
- Le **mot populaire** est passé par la bouche du peuple pendant des siècles : il s'est beaucoup **usé** et transformé.
- Le **mot savant** a été repris plus tard (souvent à partir du XIVe siècle) par des savants qui lisaient le latin dans les livres : il est resté **proche du latin**.

| Mot latin | Mot populaire | Mot savant |
|---|---|---|
| fragilis | frêle | fragile |
| hospitale | hôtel | hôpital |
| potio | poison | potion |
| directus | droit | direct |
| auscultare | écouter | ausculter |
| fabrica | forge | fabrique |
| liberare | livrer | libérer |

## Les familles de mots
À partir d'un mot latin, le français a formé des **familles de mots**. Le mot populaire est parfois très différent du latin, mais les mots savants de la même famille gardent le radical latin :

| Latin | Sens | Mots français |
|---|---|---|
| mater, matris | la mère | mère, maternel, maternité |
| pater, patris | le père | père, paternel, patrie |
| frater, fratris | le frère | frère, fraternel, fraternité |
| aqua | l'eau | aquatique, aquarium, aqueduc |
| mare, maris | la mer | mer, marin, maritime |
| terra | la terre | terre, terrestre, territoire |
| oculus | l'œil | œil, oculaire, oculiste |
| manus | la main | main, manuel, manuscrit |
| caput, capitis | la tête | chef, capitale, capitaine |
| corpus, corporis | le corps | corps, corporel, incorporer |

>! **Exemple résolu** : pourquoi l'adjectif de « œil » est-il « oculaire » ?
>! « Œil » est le mot **populaire** issu de *oculus* : il s'est beaucoup transformé. L'adjectif « oculaire » est un mot **savant**, formé plus tard directement sur le latin *oculus* : il garde le radical *ocul-*.

## Préfixes latins
| Préfixe | Sens | Exemple |
|---|---|---|
| ex- / é- | hors de | exporter, émigrer |
| in- / im- | dans | importer, inclure |
| in- / im- | ne... pas (négation) | impossible, inutile |
| re- | de nouveau, en arrière | refaire, revenir |
| sub- / sous- | sous | subaquatique, souterrain |
| trans- | au-delà, à travers | transporter, transatlantique |
| inter- | entre | international |
| post- | après | postérieur, post-scriptum |
| pre- (prae) | avant, devant | prévoir, préhistoire |

## Expressions latines encore employées
| Expression | Sens littéral | Emploi en français |
|---|---|---|
| et cetera (etc.) | et les autres choses | et ainsi de suite |
| alibi | ailleurs | preuve qu'on était ailleurs |
| ex aequo | à égalité | à la même place dans un classement |
| in extremis | dans les derniers moments | au dernier moment |
| post-scriptum (P.-S.) | écrit après | ajout à la fin d'une lettre |
| agenda | choses qui doivent être faites | carnet où l'on note ce qu'on a à faire |
| mea culpa | par ma faute | reconnaître son erreur |
| vice versa | l'ordre étant inversé | inversement |
| curriculum vitae | le déroulement de la vie | CV, résumé du parcours |
| a priori | à partir de ce qui est avant | au premier abord, sans vérifier |

> **À retenir** : le français vient du latin. Un même mot latin peut donner un **mot populaire** (très transformé : frêle) et un **mot savant** (proche du latin : fragile) : ce sont des **doublets**. Les mots savants gardent le radical latin (*oculus* → oculaire, *mater* → maternel).

## Erreurs fréquentes
- Croire que tous les mots savants sont rares : « fragile », « hôpital », « direct » sont très courants.
- Confondre le préfixe *in-* « dans » (inclure) et le préfixe *in-* « ne... pas » (inutile).
`,
      exercices: [
        {
          type: "qcm",
          question: "Le mot latin *hospitale* a donné deux mots français. Lesquels ?",
          choix: ["Hôtel et hôpital", "Hôte et hostile", "Hospice et hostie", "Hôtel et otage"],
          reponse: 0,
          explication: "*Hospitale* a donné le mot populaire « hôtel » (très transformé) et le mot savant « hôpital » (plus proche du latin). Ce sont des doublets.",
        },
        {
          type: "saisie",
          question: "Le mot latin *fragilis* a donné le mot savant « fragile ». Quel est le mot **populaire** correspondant (5 lettres) ?",
          reponses: ["frêle"],
          explication: "« Frêle » est le mot populaire, usé par des siècles de prononciation ; « fragile » est le mot savant. Les deux sont des doublets.",
        },
        {
          type: "qcm",
          question: "Quel mot français vient du latin *mare* (la mer) ?",
          choix: ["Marier", "Maritime", "Marcher", "Marteau"],
          reponse: 1,
          explication: "« Maritime » (qui concerne la mer) vient de *mare, maris*. Les autres mots n'ont pas d'origine commune avec *mare*.",
        },
        {
          type: "vf",
          question: "Un mot savant est généralement plus proche du mot latin qu'un mot populaire.",
          reponse: true,
          explication: "Vrai : le mot savant a été emprunté directement aux livres latins, alors que le mot populaire s'est transformé dans la bouche des gens pendant des siècles.",
        },
        {
          type: "saisie",
          question: "Quel adjectif français, formé sur le latin *pater, patris* (le père), signifie « qui concerne le père » ?",
          reponses: ["paternel", "paternelle"],
          explication: "« Paternel » garde le radical latin *pater-*. Le mot populaire, lui, est « père ».",
        },
        {
          type: "qcm",
          question: "Que signifie l'expression latine *ex aequo* ?",
          choix: ["Par ma faute", "Au dernier moment", "À égalité", "Ailleurs"],
          reponse: 2,
          explication: "*Ex aequo* = à égalité : deux élèves sont classés *ex aequo* quand ils ont la même note. « Par ma faute » = *mea culpa*, « ailleurs » = *alibi*, « au dernier moment » = *in extremis*.",
        },
        {
          type: "qcm",
          question: "Le mot « manuscrit » est formé sur deux mots latins. Lesquels ?",
          choix: ["*manus* (la main) et *scriptus* (écrit)", "*mane* (le matin) et *scribere* (écrire)", "*magnus* (grand) et *scriba* (le scribe)", "*mater* (la mère) et *scriptum* (l'écrit)"],
          reponse: 0,
          explication: "Un manuscrit est un texte « écrit à la main » : *manu scriptus*. On retrouve *manus* dans « manuel », « manier ».",
        },
        {
          type: "saisie",
          question: "Quel mot latin signifiant « l'eau » se cache dans « aquarium », « aquatique » et « aqueduc » ?",
          reponses: ["aqua"],
          explication: "*Aqua, ae, f.* = l'eau. Un aqueduc est un ouvrage qui « conduit l'eau » (*aquae ductus*).",
        },
        {
          type: "vf",
          question: "L'expression *alibi* signifie en latin « ailleurs ».",
          reponse: true,
          explication: "Vrai : avoir un alibi, c'est pouvoir prouver qu'on était ailleurs au moment des faits.",
        },
        {
          type: "redaction",
          question: "Pour chacun de ces mots latins, donne au moins deux mots français de la même famille et explique leur sens : *frater* (le frère), *terra* (la terre), *caput, capitis* (la tête). Pour l'un d'eux, montre la différence entre un mot populaire et un mot savant.",
          corrige: `
- **frater** : « frère » (mot populaire), « fraternel » (qui concerne les frères, qui est comme entre frères), « fraternité » (lien entre frères ; une des valeurs de la devise de la République).
- **terra** : « terre », « terrestre » (qui vit sur la terre, qui concerne la Terre), « territoire » (étendue de terre appartenant à un groupe), « enterrer » (mettre en terre).
- **caput, capitis** : « chef » (celui qui est à la tête : mot populaire très transformé), « capitale » (la ville qui est à la tête d'un pays), « capitaine » (le chef d'une troupe ou d'un navire).

**Populaire / savant** : *caput* a donné le mot populaire « chef », qui ne ressemble plus guère au latin, et des mots savants comme « capital » ou « capitale », qui gardent le radical *capit-*. De même, *frater* a donné le populaire « frère » et le savant « fraternel ».

>! Méthode : cherche le radical latin (*frat-*, *terr-*, *capit-*) dans le mot français, puis vérifie que le sens est bien lié.
`,
        },
      ],
    },
    {
      id: "origines-rome",
      titre: "Les origines de Rome : de la légende à l'histoire",
      theme: "De la légende à l'histoire",
      cours: `
## Énée, l'ancêtre des Romains
Selon la légende, racontée par le poète **Virgile** dans l'**Énéide** (Ier siècle av. J.-C.), les Romains descendent d'un héros troyen : **Énée** (*Aeneas*), fils de la déesse **Vénus** et du mortel Anchise. Quand les Grecs détruisent **Troie**, Énée s'enfuit en portant son vieux père sur ses épaules et en tenant son fils **Ascagne** (aussi appelé **Iule**) par la main. Après un long voyage en Méditerranée et un séjour à **Carthage** auprès de la reine **Didon**, il arrive dans le **Latium**, en Italie. Son fils Ascagne fonde la ville d'**Albe-la-Longue**. La famille de Jules César (*gens Iulia*) prétendait descendre d'Iule, et donc de Vénus !

## Romulus et Rémus
Des siècles plus tard, à Albe-la-Longue, le roi **Numitor** est chassé par son frère **Amulius**. Pour qu'elle n'ait pas d'enfants, Amulius fait de sa nièce **Rhéa Silvia** une **vestale** (prêtresse qui ne doit pas se marier). Mais le dieu **Mars** lui donne des jumeaux : **Romulus et Rémus**. Amulius fait jeter les bébés dans le **Tibre**. Le panier qui les porte s'échoue au pied du mont Palatin : une **louve** vient les allaiter. Le berger **Faustulus** les recueille et les élève avec sa femme.

Devenus adultes, les jumeaux rendent le trône à leur grand-père Numitor, puis décident de fonder une ville. Ils se disputent pour savoir qui lui donnera son nom. Selon le récit le plus connu, celui de l'historien **Tite-Live**, Romulus trace l'enceinte sur le **Palatin** ; Rémus saute par moquerie par-dessus le petit mur et Romulus le tue. La ville porte le nom de **Roma**. Date traditionnelle de la fondation : le **21 avril 753 av. J.-C.**

## Les sept rois
Selon la tradition, Rome est d'abord gouvernée par **sept rois** :
1. **Romulus**, le fondateur : pour peupler sa ville, il organise l'**enlèvement des Sabines**.
2. **Numa Pompilius**, roi pieux qui organise la religion.
3. **Tullus Hostilius**, roi guerrier.
4. **Ancus Marcius**.
5. **Tarquin l'Ancien**, d'origine étrusque.
6. **Servius Tullius**.
7. **Tarquin le Superbe**, un tyran.

En **509 av. J.-C.**, les Romains chassent Tarquin le Superbe et fondent la **République** (*res publica*, « la chose publique ») : le pouvoir est confié à deux **consuls** élus pour un an, conseillés par le **Sénat**. Le sigle **SPQR** (*Senatus Populusque Romanus*, « le Sénat et le peuple romain ») devient le symbole de Rome.

## Des héros exemplaires
Les Romains racontaient les exploits de héros de la jeune République, modèles de courage et de dévouement :
- **Horatius Coclès** défend seul un pont sur le Tibre contre l'armée étrusque, le temps que les Romains le détruisent ;
- **Mucius Scaevola**, capturé, met sa main droite dans le feu pour montrer qu'il ne craint pas la douleur ;
- **Cincinnatus** quitte sa charrue pour sauver Rome, puis retourne à son champ dès la victoire, sans chercher le pouvoir.

## Légende ou histoire ?
Ces récits sont des **légendes**, écrites des siècles après les faits supposés. Mais l'**archéologie** confirme qu'un village de cabanes existait sur le Palatin vers le **VIIIe siècle av. J.-C.**, et que des rois, en partie étrusques, ont gouverné Rome. La légende mélange donc l'imaginaire et des souvenirs historiques.

>! **Exemple** : la louve. La statue de bronze de la *Lupa Capitolina*, conservée à Rome, est le symbole de la ville. Les jumeaux placés sous elle ont été ajoutés à la Renaissance ; et des analyses récentes laissent penser que la louve elle-même a été fondue au Moyen Âge, et non dans l'Antiquité.

> **À retenir** : Énée, fils de Vénus, fuit Troie et arrive dans le Latium ; Romulus et Rémus, fils de Mars et de Rhéa Silvia, sont allaités par une louve ; Rome est fondée en **753 av. J.-C.** (date légendaire) ; sept rois, puis la République en **509 av. J.-C.** ; SPQR = le Sénat et le peuple romain.

## Erreurs fréquentes
- Croire que la date de 753 av. J.-C. est prouvée : c'est une date **traditionnelle**, calculée par les Romains eux-mêmes.
- Confondre Énée (le Troyen, ancêtre lointain) et Romulus (le fondateur de Rome).
`,
      exercices: [
        {
          type: "saisie",
          question: "En quelle année les Romains plaçaient-ils la fondation de Rome (av. J.-C.) ?",
          reponses: ["753", "753 av. J.-C.", "-753", "753 avant J.-C.", "753 av JC", "753 av J.-C.", "753 avant JC", "753 avant Jésus-Christ"],
          explication: "753 av. J.-C. (le 21 avril), selon la tradition. C'est une date légendaire, calculée plus tard par les Romains.",
        },
        {
          type: "qcm",
          question: "Qui sont les parents de Romulus et Rémus selon la légende ?",
          choix: ["Jupiter et Junon", "Énée et Didon", "Mars et Rhéa Silvia", "Numitor et Vénus"],
          reponse: 2,
          explication: "Le dieu Mars et la vestale Rhéa Silvia, fille de Numitor. Énée est un ancêtre lointain, venu de Troie.",
        },
        {
          type: "qcm",
          question: "Quel animal a allaité les jumeaux Romulus et Rémus ?",
          choix: ["Une louve", "Une chèvre", "Une ourse", "Une biche"],
          reponse: 0,
          explication: "Une louve (*lupa*), devenue le symbole de Rome.",
        },
        {
          type: "vf",
          question: "Énée est un héros grec qui a combattu contre Troie.",
          reponse: false,
          explication: "Faux : Énée est un **Troyen**, fils de Vénus. Il fuit Troie détruite par les Grecs et arrive en Italie.",
        },
        {
          type: "saisie",
          question: "Quel poète latin a raconté le voyage d'Énée dans l'*Énéide* ?",
          reponses: ["Virgile", "Vergilius", "Publius Vergilius Maro"],
          explication: "Virgile (*Publius Vergilius Maro*), au Ier siècle av. J.-C., à l'époque de l'empereur Auguste.",
        },
        {
          type: "saisie",
          question: "Que signifie le sigle **SPQR** ? Donne la traduction française.",
          reponses: ["le Sénat et le peuple romain", "Sénat et peuple romain", "le sénat et le peuple de Rome"],
          explication: "*Senatus Populusque Romanus* : « le Sénat et le peuple romain ». Le suffixe *-que* signifie « et ».",
        },
        {
          type: "qcm",
          question: "Quel régime politique les Romains fondent-ils en 509 av. J.-C., après avoir chassé Tarquin le Superbe ?",
          choix: ["L'Empire", "La République", "La démocratie athénienne", "La monarchie"],
          reponse: 1,
          explication: "La République (*res publica*), dirigée par deux consuls élus pour un an et conseillés par le Sénat. L'Empire ne commence qu'avec Auguste en 27 av. J.-C.",
        },
        {
          type: "vf",
          question: "L'archéologie a montré qu'un village existait sur le Palatin vers le VIIIe siècle av. J.-C.",
          reponse: true,
          explication: "Vrai : on a retrouvé des traces de cabanes de cette époque sur le Palatin. La légende garde donc un fond de vérité.",
        },
        {
          type: "qcm",
          question: "Quel héros de la jeune République défend seul un pont contre les Étrusques ?",
          choix: ["Cincinnatus", "Mucius Scaevola", "Horatius Coclès", "Tarquin"],
          reponse: 2,
          explication: "Horatius Coclès tient le pont pendant que les Romains le détruisent derrière lui. Mucius Scaevola met sa main dans le feu ; Cincinnatus quitte sa charrue pour sauver Rome.",
        },
        {
          type: "redaction",
          question: "Raconte en une dizaine de lignes la légende de la fondation de Rome, de la naissance de Romulus et Rémus jusqu'à la fondation de la ville. Termine en expliquant ce que l'histoire et l'archéologie permettent de dire de cette légende.",
          corrige: `
**Récit** : À Albe-la-Longue, Amulius chasse son frère, le roi Numitor, et oblige sa nièce Rhéa Silvia à devenir vestale pour qu'elle n'ait pas d'enfants. Pourtant, le dieu Mars lui donne des jumeaux, Romulus et Rémus. Amulius fait jeter les nouveau-nés dans le Tibre, mais leur panier s'échoue au pied du Palatin. Une louve les allaite, puis le berger Faustulus les recueille et les élève. Devenus adultes, les jumeaux rendent le trône à Numitor et décident de fonder une ville. Ils se disputent : Romulus trace l'enceinte sur le Palatin, Rémus saute par-dessus le mur pour se moquer de lui, et Romulus le tue. La ville prend le nom de Rome ; la tradition date sa fondation du 21 avril 753 av. J.-C.

**Légende et histoire** : ce récit a été écrit des siècles plus tard (par Tite-Live notamment) et contient du merveilleux (un dieu père, une louve nourricière). Mais l'archéologie a retrouvé les traces d'un village de cabanes sur le Palatin vers le VIIIe siècle av. J.-C. La légende donne donc aux Romains une origine glorieuse (fils de Mars, descendants d'Énée et de Vénus), tout en gardant un souvenir des débuts réels de la ville.

>! Critères : étapes dans l'ordre, noms propres justes, date, distinction claire entre ce qui est légendaire et ce qui est prouvé.
`,
        },
      ],
    },
    {
      id: "dieux-heros",
      titre: "Les dieux et les héros des Romains",
      theme: "De la légende à l'histoire",
      cours: `
## Une religion à plusieurs dieux
Les Romains sont **polythéistes** : ils honorent de nombreux dieux. Beaucoup d'entre eux ont été rapprochés des dieux **grecs**, dont ils ont repris les légendes.

| Dieu romain | Dieu grec | Domaine | Attribut |
|---|---|---|---|
| **Jupiter** | Zeus | roi des dieux, ciel | la foudre, l'aigle |
| **Junon** | Héra | épouse de Jupiter, mariage | le paon |
| **Neptune** | Poséidon | la mer | le trident |
| **Pluton** | Hadès | les Enfers | le chien Cerbère |
| **Minerve** | Athéna | sagesse, artisans, guerre | la chouette, le casque |
| **Mars** | Arès | la guerre | les armes |
| **Vénus** | Aphrodite | amour, beauté | la colombe, la rose |
| **Apollon** | Apollon | lumière, arts, médecine | la lyre, l'arc |
| **Diane** | Artémis | chasse, lune | l'arc, la biche |
| **Mercure** | Hermès | messager, commerce, voyageurs | sandales et chapeau ailés |
| **Vulcain** | Héphaïstos | feu, forge | le marteau |
| **Cérès** | Déméter | moissons, blé | les épis |
| **Vesta** | Hestia | le foyer | le feu sacré |
| **Bacchus** | Dionysos | vin, fête | la vigne |

Certains dieux sont **purement romains** : **Janus**, le dieu aux deux visages, dieu des portes et des commencements (il a donné son nom à **janvier**).

Les trois grands dieux de la cité sont **Jupiter, Junon et Minerve** : c'est la **triade capitoline**, honorée dans le grand temple du **Capitole**.

## La religion de tous les jours
- À la maison, chaque famille honore les **Lares** (protecteurs de la maison) et les **Pénates** (protecteurs des provisions) dans un petit autel, le **laraire**.
- Dans la cité, on offre des **sacrifices** (animaux, gâteaux, vin, encens) sur un autel placé **devant** le temple. Le temple est la maison du dieu : sa statue y est abritée.
- Les **vestales**, six prêtresses, entretiennent le **feu sacré** de Vesta, qui ne doit jamais s'éteindre.
- La religion romaine est un **échange** : on fait une offrande au dieu pour obtenir sa protection (*do ut des*, « je donne pour que tu donnes »).

## Les dieux dans notre calendrier
| Jour ou mois | Origine latine |
|---|---|
| lundi | *Lunae dies*, le jour de la Lune |
| mardi | *Martis dies*, le jour de Mars |
| mercredi | *Mercurii dies*, le jour de Mercure |
| jeudi | *Iovis dies*, le jour de Jupiter |
| vendredi | *Veneris dies*, le jour de Vénus |
| janvier | mois de Janus |
| mars | mois de Mars |

## Hercule, le héros aux douze travaux
**Hercule** (en grec Héraclès) est le fils de Jupiter et d'une mortelle, Alcmène. Junon, jalouse, le poursuit de sa haine. Pour se purifier d'un crime commis dans un accès de folie envoyé par Junon, il doit accomplir **douze travaux**, parmi lesquels : étouffer le **lion de Némée** (il porte ensuite sa peau), tuer l'**hydre de Lerne** (serpent dont les têtes repoussent), nettoyer les **écuries d'Augias** en détournant deux fleuves, ramener **Cerbère**, le chien à trois têtes des Enfers. Après sa mort, il devient un dieu. Les Romains l'honoraient beaucoup.

>! **Exemple** : l'expression « un travail d'Hercule » désigne une tâche immense ; « nettoyer les écuries d'Augias », c'est remettre de l'ordre dans une situation très sale ou corrompue.

> **À retenir** : religion **polythéiste** ; dieux romains rapprochés des dieux grecs (Jupiter = Zeus, Junon = Héra, Minerve = Athéna, Mars = Arès, Vénus = Aphrodite, Neptune = Poséidon...) ; Janus est purement romain ; triade capitoline : Jupiter, Junon, Minerve ; Lares et Pénates à la maison ; Hercule et ses douze travaux.

## Erreurs fréquentes
- Croire que les dieux romains sont des copies exactes des dieux grecs : les Romains avaient leurs propres dieux, rapprochés ensuite des dieux grecs.
- Croire que le sacrifice se fait à l'intérieur du temple : l'autel est **devant** le temple.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel est le nom grec de Jupiter ?",
          choix: ["Arès", "Hermès", "Poséidon", "Zeus"],
          reponse: 3,
          explication: "Jupiter, roi des dieux et maître de la foudre, correspond au Grec Zeus. Arès = Mars, Hermès = Mercure, Poséidon = Neptune.",
        },
        {
          type: "saisie",
          question: "Quel dieu romain de la mer tient un trident ?",
          reponses: ["Neptune", "Neptunus"],
          explication: "Neptune (*Neptunus*), le Poséidon des Grecs.",
        },
        {
          type: "qcm",
          question: "Quel dieu aux deux visages a donné son nom au mois de janvier ?",
          choix: ["Jupiter", "Janus", "Junon", "Mars"],
          reponse: 1,
          explication: "Janus, dieu des portes et des commencements, regarde à la fois vers le passé et vers l'avenir : c'est lui qui ouvre l'année.",
        },
        {
          type: "vf",
          question: "Le mot « vendredi » vient du latin *Veneris dies*, le jour de Vénus.",
          reponse: true,
          explication: "Vrai. De même : lundi = jour de la Lune, mardi = de Mars, mercredi = de Mercure, jeudi = de Jupiter (*Iovis dies*).",
        },
        {
          type: "qcm",
          question: "Quelles divinités forment la triade capitoline ?",
          choix: ["Mars, Vénus et Vulcain", "Jupiter, Junon et Minerve", "Apollon, Diane et Latone", "Cérès, Vesta et Bacchus"],
          reponse: 1,
          explication: "Jupiter, Junon et Minerve sont honorés ensemble dans le grand temple du Capitole.",
        },
        {
          type: "saisie",
          question: "Comment s'appelle le petit autel de la maison romaine où l'on honore les dieux protecteurs du foyer ?",
          reponses: ["laraire", "le laraire", "lararium"],
          explication: "Le laraire (*lararium*), où l'on honore les Lares, protecteurs de la maison.",
        },
        {
          type: "vf",
          question: "Chez les Romains, les sacrifices se faisaient à l'intérieur du temple, devant la statue du dieu.",
          reponse: false,
          explication: "Faux : l'autel des sacrifices est placé **devant** le temple, en plein air. Le temple abrite la statue du dieu.",
        },
        {
          type: "qcm",
          question: "Quelle déesse romaine correspond à Athéna, déesse de la sagesse ?",
          choix: ["Diane", "Vénus", "Cérès", "Minerve"],
          reponse: 3,
          explication: "Minerve (*Minerva*), déesse de la sagesse et des artisans, dont l'animal est la chouette. Diane = Artémis, Vénus = Aphrodite, Cérès = Déméter.",
        },
        {
          type: "saisie",
          question: "Combien de travaux Hercule a-t-il dû accomplir ?",
          reponses: ["12", "douze", "douze travaux"],
          explication: "Douze travaux, dont le lion de Némée, l'hydre de Lerne, les écuries d'Augias et la capture de Cerbère.",
        },
        {
          type: "redaction",
          question: "Présente en quelques lignes la religion romaine : les principaux dieux (avec leur équivalent grec), le culte à la maison et dans la cité, et ce qui en reste dans notre langue.",
          corrige: `
- **Les dieux** : les Romains sont polythéistes. Le roi des dieux est **Jupiter** (Zeus), époux de **Junon** (Héra) ; **Minerve** (Athéna) est la déesse de la sagesse ; **Mars** (Arès) le dieu de la guerre, **Vénus** (Aphrodite) la déesse de l'amour, **Neptune** (Poséidon) le dieu de la mer. Certains dieux sont purement romains, comme **Janus** aux deux visages.
- **À la maison** : chaque famille honore les **Lares** et les **Pénates** au **laraire**, par de petites offrandes (encens, nourriture).
- **Dans la cité** : on offre des **sacrifices** sur l'autel placé devant le temple ; Jupiter, Junon et Minerve (la triade capitoline) sont honorés au Capitole ; les **vestales** gardent le feu sacré de Vesta. La religion est un échange : *do ut des*, « je donne pour que tu donnes ».
- **Dans notre langue** : les jours de la semaine (lundi, mardi, mercredi, jeudi, vendredi) et des mois (janvier pour Janus, mars pour Mars) ; des mots comme « martial » (Mars), « vulcanologie » (Vulcain), « céréale » (Cérès) ; des expressions comme « un travail d'Hercule ».
`,
        },
      ],
    },
    {
      id: "famille-romaine",
      titre: "La famille romaine",
      theme: "Vie privée et vie publique",
      cours: `
## La familia : bien plus qu'une famille
Le mot latin **familia** ne désigne pas seulement les parents et les enfants. Il désigne **toutes les personnes placées sous l'autorité du chef de famille** : sa femme, ses enfants, les épouses de ses fils, ses petits-enfants... et aussi ses **esclaves** (*servi*).

## Le pater familias, chef tout-puissant
Le **pater familias** (le père de famille) est l'homme le plus âgé de la famille. Il a sur tous les siens la **patria potestas**, la puissance paternelle : il décide des mariages, gère tous les biens (ses fils adultes ne possèdent rien en propre tant qu'il vit !) et, selon la loi ancienne, il a même le **droit de vie et de mort** sur ses enfants. Dans la réalité, ce droit extrême n'était presque jamais appliqué.

## La matrona, la mère de famille
L'épouse, la **matrona**, dirige la maison : elle surveille les esclaves, l'éducation des jeunes enfants, le travail de la laine. Contrairement aux femmes de la Grèce classique, elle peut **sortir**, aller aux spectacles, aux thermes, recevoir des invités et dîner avec son mari. Mais elle ne vote pas et n'exerce pas de fonction politique.

## Les tria nomina : le nom du citoyen
Un citoyen romain porte **trois noms** (*tria nomina*). Exemple : **Marcus Tullius Cicero** (Cicéron).

| Nom | Rôle | Exemple |
|---|---|---|
| **praenomen** | prénom, choisi parmi une petite liste (Marcus, Gaius, Lucius, Publius...) | Marcus |
| **nomen** | nom de la *gens* (le grand clan familial) | Tullius |
| **cognomen** | surnom de la branche familiale, souvent tiré d'un trait physique | Cicero (« pois chiche ») |

Les **filles** portent en général seulement la forme féminine du nom de leur *gens* : la fille de Cicéron s'appelle **Tullia** ; les filles de la *gens Iulia* s'appellent toutes **Iulia**. Pour les distinguer, on ajoute *Maior* (l'aînée), *Minor* (la cadette), *Tertia* (la troisième)...

## Naître et grandir à Rome
- À la naissance, selon la tradition, le père **soulève l'enfant** posé à ses pieds : il le reconnaît ainsi comme le sien.
- Quelques jours après (le 8e jour pour une fille, le 9e pour un garçon), l'enfant reçoit son **nom**. Le garçon reçoit une **bulla**, un pendentif protecteur.
- Les enfants libres portent la **toge prétexte**, bordée d'une bande pourpre.
- Vers 16 ans, le garçon dépose sa bulla au laraire et revêt la **toge virile**, toute blanche : il devient un citoyen adulte.
- Les filles se marient jeunes (dès 12 ans, l'âge légal), souvent avec un homme plus âgé choisi par leur père.

## L'école
L'école n'est pas obligatoire et elle est **payante** : seuls les enfants de familles aisées vont loin dans les études.
1. **Vers 7 ans**, chez le *ludi magister* (le maître d'école) : lire, écrire, compter. On écrit avec un **stylet** (*stilus*) sur une **tablette de cire** (*tabula*), on compte avec des cailloux (*calculi*, d'où « calcul ») ou un boulier.
2. **Vers 11-12 ans**, chez le *grammaticus* : étude des grands auteurs latins et grecs (Homère, Virgile).
3. **Vers 15-16 ans**, chez le *rhetor* : l'art de bien parler en public, indispensable pour faire carrière.

Un esclave, le **paedagogus**, accompagne l'enfant à l'école (d'où notre mot « pédagogue »). Les maîtres sont sévères et frappent souvent les élèves.

## Les esclaves et les affranchis
Les **esclaves** (*servi*) sont des prisonniers de guerre, des enfants d'esclaves, des enfants abandonnés... Ils appartiennent à leur maître comme des objets. Un maître peut **affranchir** (libérer) son esclave : celui-ci devient un **affranchi** (*libertus*) et prend le prénom et le nom de son ancien maître.

>! **Exemple** : Tiron, l'esclave secrétaire de Cicéron, affranchi par lui, s'appela ensuite **Marcus Tullius Tiro**.

> **À retenir** : la *familia* regroupe tous ceux qui dépendent du **pater familias** (y compris les esclaves) ; il a la *patria potestas*. Le citoyen porte trois noms : **praenomen, nomen, cognomen** (Marcus Tullius Cicero). Les filles portent le nom de la *gens* au féminin (Tullia, Iulia). École : *ludi magister*, *grammaticus*, *rhetor*. Toge virile vers 16 ans.

## Erreurs fréquentes
- Croire que *familia* = « famille » au sens moderne : les esclaves en font partie.
- Croire que *Tullius* est un prénom : c'est le **nomen**, le nom de la *gens*.
`,
      exercices: [
        {
          type: "qcm",
          question: "Que désigne le mot latin **familia** ?",
          choix: ["Seulement les parents et leurs enfants", "Tous ceux qui dépendent du chef de famille, y compris les esclaves", "Les grands-parents uniquement", "Tous les habitants d'un quartier"],
          reponse: 1,
          explication: "La *familia* regroupe toutes les personnes soumises à l'autorité du *pater familias* : épouse, enfants, petits-enfants et esclaves.",
        },
        {
          type: "saisie",
          question: "Comment s'appelle, en latin, le chef de la famille romaine ?",
          reponses: ["pater familias", "paterfamilias", "le pater familias", "pater familiae"],
          explication: "Le *pater familias*, qui exerce la *patria potestas* (la puissance paternelle).",
        },
        {
          type: "qcm",
          question: "Dans le nom **Gaius Iulius Caesar**, quel est le *nomen* (nom de la gens) ?",
          choix: ["Gaius", "Caesar", "Iulius", "Aucun des trois"],
          reponse: 2,
          explication: "*Gaius* est le praenomen (prénom), *Iulius* le nomen (il appartient à la *gens Iulia*), *Caesar* le cognomen.",
        },
        {
          type: "saisie",
          question: "La fille de Marcus Tullius Cicero s'appelle de la forme féminine du nomen de son père. Quel est son nom ?",
          reponses: ["Tullia"],
          explication: "*Tullia* : forme féminine du nomen *Tullius*.",
        },
        {
          type: "vf",
          question: "À Rome, la mère de famille (matrona) pouvait sortir, aller aux spectacles et dîner avec les invités de son mari.",
          reponse: true,
          explication: "Vrai : la *matrona* romaine était plus libre que la femme grecque de l'époque classique. Mais elle ne votait pas.",
        },
        {
          type: "qcm",
          question: "Quel objet le jeune garçon dépose-t-il au laraire lorsqu'il revêt la toge virile ?",
          choix: ["Sa bulla", "Son stylet", "Sa tablette de cire", "Son anneau"],
          reponse: 0,
          explication: "La *bulla*, pendentif protecteur porté depuis l'enfance, est offerte aux Lares quand le garçon devient adulte (vers 16 ans).",
        },
        {
          type: "qcm",
          question: "Chez quel maître l'élève apprend-il l'art de bien parler en public ?",
          choix: ["Le ludi magister", "Le grammaticus", "Le paedagogus", "Le rhetor"],
          reponse: 3,
          explication: "Le *rhetor* enseigne la rhétorique (l'art de l'éloquence). Le *ludi magister* apprend à lire et à compter, le *grammaticus* fait étudier les auteurs, le *paedagogus* est l'esclave qui accompagne l'enfant.",
        },
        {
          type: "vf",
          question: "À Rome, l'école était gratuite et obligatoire pour tous les enfants.",
          reponse: false,
          explication: "Faux : l'école était payante et non obligatoire. Beaucoup d'enfants pauvres ou esclaves n'y allaient pas, ou peu.",
        },
        {
          type: "saisie",
          question: "Comment appelle-t-on un esclave libéré par son maître ?",
          reponses: ["un affranchi", "affranchi", "libertus", "un esclave affranchi", "esclave affranchi"],
          explication: "Un affranchi (*libertus*). Il prend le prénom et le nom de son ancien maître : Tiron, affranchi de Cicéron, devient Marcus Tullius Tiro.",
        },
        {
          type: "redaction",
          question: "Tu es Marcus, un garçon romain de 10 ans, d'une famille aisée. Décris en une dizaine de lignes ta famille et ta journée d'écolier, en employant au moins cinq mots latins du cours (que tu expliqueras).",
          corrige: `
**Exemple de réponse** :

Je m'appelle Marcus Cornelius Rufus. Mon père, le *pater familias*, décide de tout dans notre *familia*, qui compte aussi ma mère, ma sœur Cornelia et une dizaine d'esclaves (*servi*). Ma mère, une *matrona* respectée, dirige la maison et surveille le travail des servantes.

Chaque matin, avant le lever du soleil, mon *paedagogus*, un vieil esclave grec, m'accompagne chez le *ludi magister*. J'y apprends à écrire avec mon *stilus* sur ma *tabula* de cire et à compter avec des *calculi*. Le maître est sévère : quand je me trompe, il me frappe avec sa baguette ! Autour du cou, je porte ma *bulla*, qui me protège. Dans deux ans, j'irai chez le *grammaticus* pour lire Homère et Virgile, puis chez le *rhetor*. Vers 16 ans, je revêtirai la toge virile et je deviendrai citoyen.

>! Critères : au moins cinq mots latins justes et expliqués ; des faits exacts (familia, pater familias, école payante, étapes de l'éducation, bulla, toge virile) ; un récit cohérent à la 1re personne.
`,
        },
      ],
    },
    {
      id: "domus-vie-quotidienne",
      titre: "La maison et la vie quotidienne",
      theme: "Vie privée et vie publique",
      cours: `
## Trois façons de se loger
- La **domus** : maison des familles riches, en ville, le plus souvent sur un seul niveau, tournée vers l'intérieur.
- L'**insula** : immeuble de plusieurs étages où vivent la plupart des habitants de Rome, en location. Les étages supérieurs, les moins chers, sont étroits, sans eau courante, et les **incendies** et les **effondrements** sont fréquents. L'empereur Auguste a limité leur hauteur à environ 20 mètres.
- La **villa** : grande maison à la campagne, souvent au centre d'un domaine agricole.

## Le plan de la domus
La domus a peu de fenêtres sur la rue. Côté rue, il y a souvent des **boutiques** (*tabernae*) louées à des commerçants.

| Pièce | Rôle |
|---|---|
| **vestibulum** | l'entrée, devant la porte |
| **atrium** | grande pièce centrale où le maître reçoit ; le toit est ouvert (**compluvium**) au-dessus d'un bassin (**impluvium**) qui recueille l'eau de pluie |
| **lararium** | le petit autel des dieux de la maison |
| **tablinum** | le bureau du maître, où sont gardées les archives |
| **cubiculum** | la chambre (petite et peu meublée) |
| **triclinium** | la salle à manger, avec trois lits disposés autour d'une table |
| **culina** | la cuisine |
| **peristylium** | le jardin intérieur entouré de colonnes |

## Une journée à Rome
- Le jour romain va du lever au coucher du soleil, divisé en **douze heures** (plus longues l'été que l'hiver).
- **Le matin** : les **clients** (des hommes moins riches qui dépendent d'un homme puissant) viennent saluer leur protecteur, le *patronus* (c'est la *salutatio*) ; puis chacun va à ses affaires, au forum ou au travail.
- **Les repas** : le **ientaculum** (le matin, léger : pain, fromage), le **prandium** (vers midi, rapide), et la **cena** (en fin d'après-midi), le repas principal.
- Pour la cena, les riches mangent **allongés** sur des lits, appuyés sur le coude gauche, dans le triclinium. Les plats : pain, légumes, œufs, olives, viandes, poissons, fruits, assaisonnés avec le **garum** (une sauce de poisson fermenté). Le vin est mélangé à de l'eau.

## Les thermes
L'après-midi, on se rend aux **thermes**, bains publics très bon marché. On s'y lave, on fait du sport, on bavarde, on fait des affaires.

| Salle | Rôle |
|---|---|
| **apodyterium** | le vestiaire |
| **palaestra** | la cour pour l'exercice physique |
| **tepidarium** | la salle tiède |
| **caldarium** | la salle chaude, avec un bassin d'eau chaude |
| **frigidarium** | la salle froide, avec une piscine d'eau froide |

Le sol et les murs sont chauffés par de l'air chaud circulant sous le plancher : c'est l'**hypocauste**.

## Les vêtements
- La **tunique** (*tunica*) : vêtement de base, pour tous.
- La **toge** (*toga*) : grande pièce de laine blanche drapée, réservée aux **citoyens**. Lourde et compliquée à mettre, elle est portée pour les occasions officielles.
- La **stola** : longue robe des femmes mariées, avec la **palla** (manteau) par-dessus.

>! **Exemple** : à Pompéi, ville ensevelie par l'éruption du Vésuve en **79 ap. J.-C.**, on peut encore visiter des domus avec leur atrium, leur impluvium et leurs fresques, ainsi que des thermes et des boulangeries.

> **À retenir** : domus (maison des riches), insula (immeuble), villa (maison de campagne). Pièces : atrium avec impluvium, tablinum, triclinium, cubiculum, peristylium. Repas : ientaculum, prandium, **cena**. Thermes : apodyterium, tepidarium, caldarium, frigidarium. Vêtements : tunique, toge (citoyens), stola (matrones).

## Erreurs fréquentes
- Croire que tous les Romains vivaient dans de belles domus : la plupart vivaient dans des **insulae**.
- Confondre *compluvium* (l'ouverture du toit) et *impluvium* (le bassin au sol).
`,
      exercices: [
        {
          type: "qcm",
          question: "Comment s'appelle l'immeuble de plusieurs étages où vivaient la plupart des habitants de Rome ?",
          choix: ["La domus", "La villa", "L'insula", "Le forum"],
          reponse: 2,
          explication: "L'*insula* (littéralement « l'île », car l'immeuble occupe tout un pâté de maisons). La domus est la maison des riches, la villa est à la campagne.",
        },
        {
          type: "saisie",
          question: "Comment s'appelle le bassin de l'atrium qui recueille l'eau de pluie ?",
          reponses: ["impluvium", "l'impluvium"],
          explication: "L'*impluvium* est le bassin au sol ; l'ouverture du toit au-dessus s'appelle le *compluvium*.",
        },
        {
          type: "qcm",
          question: "Dans quelle pièce les Romains prenaient-ils leurs repas, allongés sur des lits ?",
          choix: ["Le triclinium", "Le tablinum", "Le cubiculum", "L'atrium"],
          reponse: 0,
          explication: "Le *triclinium*, avec trois lits autour d'une table. Le *tablinum* est le bureau, le *cubiculum* la chambre.",
        },
        {
          type: "saisie",
          question: "Quel est le nom latin du repas principal des Romains, pris en fin d'après-midi ?",
          reponses: ["cena", "la cena", "coena"],
          explication: "La *cena*. Le *ientaculum* est le repas du matin et le *prandium* celui de midi.",
        },
        {
          type: "vf",
          question: "Aux thermes, le caldarium est la salle froide.",
          reponse: false,
          explication: "Faux : le *caldarium* est la salle **chaude** (*calidus* = chaud, d'où « calorie »). La salle froide est le *frigidarium* (d'où « frigo »).",
        },
        {
          type: "qcm",
          question: "Quel vêtement était réservé aux citoyens romains ?",
          choix: ["La tunique", "La stola", "La palla", "La toge"],
          reponse: 3,
          explication: "La toge, en laine blanche, est le vêtement officiel du citoyen. La tunique est portée par tous, la stola et la palla par les femmes mariées.",
        },
        {
          type: "vf",
          question: "Les étages supérieurs des insulae étaient les plus chers et les plus confortables.",
          reponse: false,
          explication: "Faux : c'était l'inverse. Les étages du haut étaient les moins chers, sans eau, et les plus dangereux en cas d'incendie.",
        },
        {
          type: "saisie",
          question: "Quel volcan a enseveli Pompéi en 79 ap. J.-C. ?",
          reponses: ["le Vésuve", "Vésuve", "Vesuvius"],
          explication: "Le Vésuve. Les cendres ont conservé la ville, ce qui nous permet de connaître la vie quotidienne des Romains.",
        },
        {
          type: "qcm",
          question: "Qu'est-ce que le garum ?",
          choix: ["Un vin sucré", "Une sauce de poisson fermenté", "Une bouillie de blé", "Un fromage de chèvre"],
          reponse: 1,
          explication: "Le *garum* est une sauce à base de poisson fermenté, très appréciée pour assaisonner les plats.",
        },
        {
          type: "redaction",
          question: "Tu fais visiter la domus de ta famille à un ami gaulois. Décris-lui le parcours, de l'entrée jusqu'au jardin, en nommant au moins six pièces en latin et en expliquant leur rôle.",
          corrige: `
**Exemple de réponse** :

« Bienvenue ! Nous passons d'abord par le **vestibulum**, l'entrée, devant la porte. Voici l'**atrium**, la grande pièce où mon père reçoit ses clients le matin. Regarde en haut : le toit est ouvert, c'est le **compluvium** ; l'eau de pluie tombe dans ce bassin, l'**impluvium**. Dans ce coin, le **lararium** : c'est là que nous honorons les Lares, qui protègent la maison. Au fond, le **tablinum** est le bureau de mon père, où il garde ses archives. Ces petites pièces sont les **cubicula**, nos chambres. Ce soir, nous dînerons allongés dans le **triclinium**, la salle à manger aux trois lits ; les esclaves préparent le repas dans la **culina**. Enfin, voici le **peristylium**, le jardin entouré de colonnes, avec ses fleurs et sa fontaine. »

>! Critères : au moins six pièces nommées en latin, avec leur rôle exact, dans un ordre de visite logique (entrée → atrium → pièces autour → jardin).
`,
        },
      ],
    },
    {
      id: "urbs-rome",
      titre: "L'Urbs : la ville de Rome",
      theme: "Vie privée et vie publique",
      cours: `
## L'Urbs, la Ville par excellence
Pour les Romains, Rome est **l'Urbs**, « la Ville » tout court. Elle est construite sur les bords du **Tibre**, autour de **sept collines** : le **Palatin**, le **Capitole**, l'**Aventin**, le **Quirinal**, le **Viminal**, l'**Esquilin** et le **Caelius**. Sous l'empereur Auguste, elle compte peut-être **un million d'habitants** : c'est la plus grande ville du monde méditerranéen. Le mot *urbs* a donné « urbain », « urbanisme ».

## Le forum, cœur de la vie publique
Le **Forum Romanum** est une grande place au pied du Capitole et du Palatin. On y trouve :
- la **Curie**, où se réunit le **Sénat** ;
- les **Rostres**, tribune d'où les orateurs parlent au peuple (elle est décorée de proues de navires, en latin *rostra*) ;
- des **temples** (de Saturne, de Vesta, de Castor et Pollux) ;
- des **basiliques** : grandes salles couvertes où l'on rend la justice et où l'on fait des affaires ;
- la **Via Sacra** (la Voie sacrée), empruntée par les généraux vainqueurs lors du **triomphe**.

Sur le **Capitole** se dresse le grand temple de Jupiter, Junon et Minerve. Sur le **Palatin**, les empereurs construisent leurs palais : le mot « palais » vient d'ailleurs de *Palatium* !

## Les spectacles : du pain et des jeux
Le poète **Juvénal** se moque du peuple de Rome qui ne réclame plus que deux choses : *panem et circenses*, « du pain et des jeux du cirque ». Les spectacles sont **gratuits**, offerts par les magistrats et les empereurs.
- **Le Colisée** (amphithéâtre flavien), inauguré par l'empereur **Titus** en **80 ap. J.-C.**, peut accueillir environ **50 000 spectateurs**. On y regarde des combats de **gladiateurs** (souvent des esclaves ou des prisonniers, entraînés dans des écoles) et des chasses d'animaux sauvages. Il y a plusieurs types de gladiateurs : le **rétiaire** (avec un filet et un trident), le **mirmillon** (avec un casque, un bouclier et un glaive)...
- **Le Circus Maximus** accueille les **courses de chars**, le spectacle le plus populaire : plus de **150 000 spectateurs** encouragent les quatre équipes (les Verts, les Bleus, les Rouges et les Blancs).
- **Les théâtres** présentent des comédies et des tragédies.

## Une ville équipée
- Des **aqueducs** apportent l'eau des montagnes jusqu'aux fontaines, aux thermes et aux maisons riches. Le premier, l'*Aqua Appia*, date de **312 av. J.-C.**
- Un grand égout, la **Cloaca Maxima**, évacue les eaux usées vers le Tibre.
- Des **routes** pavées partent de Rome vers toute l'Italie, comme la **Via Appia** (312 av. J.-C.) : d'où l'expression « tous les chemins mènent à Rome ».

## Une ville qui se transforme
L'empereur **Auguste** embellit la ville. D'après l'historien Suétone, il se vantait d'avoir « trouvé une ville de briques et laissé une ville de marbre ». En **64 ap. J.-C.**, sous **Néron**, un terrible incendie détruit une grande partie de Rome. Le **Panthéon**, temple de tous les dieux reconstruit sous l'empereur **Hadrien**, possède encore aujourd'hui sa coupole intacte.

>! **Exemple** : le mot « forum » désigne aujourd'hui un lieu ou un site où l'on débat : c'est un souvenir du rôle du forum romain, où les citoyens se réunissaient et discutaient.

> **À retenir** : Rome = l'**Urbs**, au bord du **Tibre**, sur **sept collines** (Palatin, Capitole...). Le **forum** : Curie (Sénat), Rostres, temples, basiliques, Via Sacra. Spectacles gratuits : **Colisée** (gladiateurs, 80 ap. J.-C.), **Circus Maximus** (courses de chars), théâtres. Aqueducs, égouts, routes (Via Appia).

## Erreurs fréquentes
- Croire que le Colisée accueillait les courses de chars : celles-ci avaient lieu au **Circus Maximus**.
- Croire que les spectacles étaient payants : ils étaient **offerts** au peuple.
`,
      exercices: [
        {
          type: "saisie",
          question: "Quel fleuve traverse Rome ?",
          reponses: ["le Tibre", "Tibre", "Tiberis"],
          explication: "Le Tibre (*Tiberis*). Selon la légende, c'est sur ses bords que le panier de Romulus et Rémus s'est échoué.",
        },
        {
          type: "saisie",
          question: "Sur combien de collines Rome est-elle construite selon la tradition ?",
          reponses: ["7", "sept", "sept collines"],
          explication: "Sept collines : Palatin, Capitole, Aventin, Quirinal, Viminal, Esquilin et Caelius.",
        },
        {
          type: "qcm",
          question: "Dans quel bâtiment du forum se réunit le Sénat ?",
          choix: ["La basilique", "La Curie", "Le Panthéon", "Les Rostres"],
          reponse: 1,
          explication: "La Curie (*Curia*). Les Rostres sont la tribune des orateurs, les basiliques servent à la justice et aux affaires.",
        },
        {
          type: "qcm",
          question: "Où les Romains assistaient-ils aux courses de chars ?",
          choix: ["Au Colisée", "Au théâtre", "Au Circus Maximus", "Aux thermes"],
          reponse: 2,
          explication: "Au Circus Maximus, immense piste entre le Palatin et l'Aventin. Le Colisée accueillait les gladiateurs.",
        },
        {
          type: "vf",
          question: "Le Colisée a été inauguré par l'empereur Titus en 80 ap. J.-C.",
          reponse: true,
          explication: "Vrai : commencé sous Vespasien, l'amphithéâtre flavien est inauguré par son fils Titus en 80 ap. J.-C., avec cent jours de jeux.",
        },
        {
          type: "qcm",
          question: "Que signifie l'expression de Juvénal *panem et circenses* ?",
          choix: ["Du pain et des jeux du cirque", "La paix et la guerre", "Le pain et le vin", "Le Sénat et le peuple"],
          reponse: 0,
          explication: "« Du pain et des jeux du cirque » : Juvénal se moque d'un peuple qui ne demande plus qu'à être nourri et diverti.",
        },
        {
          type: "saisie",
          question: "Quel type de gladiateur combat avec un filet et un trident ?",
          reponses: ["le rétiaire", "rétiaire", "retiarius"],
          explication: "Le rétiaire (*retiarius*, de *rete*, le filet).",
        },
        {
          type: "vf",
          question: "Les Romains devaient payer cher leur place pour assister aux jeux du Colisée.",
          reponse: false,
          explication: "Faux : les spectacles étaient gratuits, offerts par les magistrats ou par l'empereur pour gagner la faveur du peuple.",
        },
        {
          type: "qcm",
          question: "De quelle colline de Rome vient le mot français « palais » ?",
          choix: ["Le Capitole", "L'Aventin", "Le Quirinal", "Le Palatin"],
          reponse: 3,
          explication: "Les empereurs avaient leur résidence sur le Palatin (*Palatium*) : le mot a fini par désigner toute demeure princière.",
        },
        {
          type: "redaction",
          question: "Un touriste visite Rome au temps de l'empereur Titus. Décris-lui en une dizaine de lignes ce qu'il peut voir et faire dans l'Urbs : le forum et ses monuments, les spectacles, les équipements de la ville.",
          corrige: `
**Exemple de réponse** :

Bienvenue dans l'**Urbs**, la plus grande ville du monde, bâtie sur sept collines au bord du **Tibre** ! Commence par le **forum** : tu y verras la **Curie**, où siège le Sénat, les **Rostres**, d'où les orateurs parlent au peuple, les temples de Saturne et de Vesta et les grandes **basiliques**, où l'on juge les procès. Suis la **Via Sacra** jusqu'au **Capitole**, où se dresse le temple de Jupiter, Junon et Minerve. Si tu aimes le spectacle, va au **Colisée**, tout neuf : l'empereur Titus l'a inauguré en 80 et 50 000 spectateurs y regardent gratuitement les combats de **gladiateurs**, rétiaires et mirmillons. Préfères-tu les courses de chars ? Rends-toi au **Circus Maximus** et choisis ton équipe : les Verts ou les Bleus ! Admire enfin les **aqueducs** qui apportent l'eau aux fontaines et aux thermes, et la **Via Appia**, par où tu es peut-être arrivé.

>! Critères : vocabulaire précis (forum, Curie, Rostres, basiliques, Colisée, Circus Maximus, aqueducs) ; faits exacts et cohérents avec l'époque de Titus (Ier siècle ap. J.-C.).
`,
        },
      ],
    },
    {
      id: "mare-nostrum",
      titre: "Mare nostrum : Rome et le monde méditerranéen",
      theme: "Le monde méditerranéen antique",
      cours: `
## Mare nostrum, « notre mer »
Les Romains appelaient la Méditerranée **mare nostrum**, « notre mer ». À partir de la conquête de l'Égypte (**30 av. J.-C.**), Rome contrôle en effet **toutes ses rives**, directement ou par des rois alliés, et cela pendant plus de quatre siècles : c'est la seule fois dans l'histoire qu'un seul État a dominé tout le pourtour de la Méditerranée.

## Les étapes de la conquête
| Date | Événement |
|---|---|
| IIIe s. av. J.-C. | Rome domine toute l'Italie péninsulaire |
| 264-146 av. J.-C. | **Guerres puniques** contre **Carthage** (en Afrique du Nord) |
| 218 av. J.-C. | Le général carthaginois **Hannibal** franchit les **Alpes** avec ses éléphants |
| 146 av. J.-C. | **Destruction de Carthage** et de Corinthe : le territoire de Carthage devient la province romaine d'Afrique, et Rome domine la Grèce |
| 58-51 av. J.-C. | **Jules César** conquiert la Gaule ; victoire d'**Alésia** sur **Vercingétorix** en 52 av. J.-C. |
| 30 av. J.-C. | L'Égypte de Cléopâtre devient romaine |
| 27 av. J.-C. | **Auguste**, premier empereur |
| 117 ap. J.-C. | L'Empire atteint sa plus grande étendue, sous l'empereur Trajan |

## Rome contre Carthage
**Carthage**, ville fondée par des Phéniciens, est la grande puissance maritime et commerçante de la Méditerranée occidentale. Les Romains appellent ses habitants *Punici* (les Puniques), d'où le nom de **guerres puniques**. Pendant la deuxième guerre, Hannibal envahit l'Italie et écrase les Romains à **Cannes** (*Cannae*, dans le sud de l'Italie, à ne pas confondre avec Cannes en France) en 216 av. J.-C. Mais **Scipion l'Africain** le bat à **Zama**, en Afrique, en 202 av. J.-C. Selon la tradition, le sénateur **Caton** terminait tous ses discours en répétant que Carthage devait être détruite. Elle l'est en **146 av. J.-C.**

## La Grèce, conquise mais conquérante
Rome conquiert la Grèce, mais elle est **fascinée** par sa culture : les Romains riches apprennent le grec, copient les statues grecques, imitent la littérature grecque. Le poète **Horace** l'a résumé ainsi : *Graecia capta ferum victorem cepit*, « la Grèce conquise a conquis son farouche vainqueur ».

## La paix romaine et les échanges
Sous l'Empire, la **pax Romana** (paix romaine) permet aux marchandises de circuler sur toute la Méditerranée :
- des **navires** transportent du **blé** d'Égypte et d'Afrique, du vin, de l'**huile d'olive** et du **garum** dans des **amphores** ;
- **Ostie**, à l'embouchure du Tibre, est le port de Rome ;
- un réseau de **routes** relie les provinces ; des **bornes milliaires** indiquent les distances en milles romains (*mille passus*, mille pas, d'où notre mot « mille »).

## La Gaule romaine
Après la conquête, la Gaule se romanise : on y construit des villes à la romaine avec forum, temples, thermes, amphithéâtres. **Lugdunum** (Lyon) devient la capitale des Gaules. À **Nîmes** (*Nemausus*), on peut encore voir la **Maison carrée** (un temple) et les arènes ; le **pont du Gard** est un aqueduc qui amenait l'eau à Nîmes. **Marseille** (*Massalia*), elle, avait été fondée bien avant, vers 600 av. J.-C., par des Grecs de Phocée. Les Gaulois adoptent peu à peu le **latin**, qui deviendra le **français**.

>! **Exemple** : pourquoi parle-t-on aujourd'hui des langues latines en Espagne, au Portugal, en Italie, en France et en Roumanie ? Parce que ces régions faisaient partie de l'Empire romain : leurs habitants ont adopté le latin, qui s'est transformé différemment dans chaque région.

> **À retenir** : *mare nostrum* = la Méditerranée, entièrement contrôlée par Rome à partir de 30 av. J.-C. Guerres puniques contre Carthage (264-146 av. J.-C.) ; Hannibal franchit les Alpes (218) ; Carthage détruite (146). César conquiert la Gaule (58-51 av. J.-C., Alésia en 52). *Pax Romana* : commerce, routes, amphores. Le latin donne les langues romanes.

## Erreurs fréquentes
- Croire qu'Hannibal était un général romain : il était **carthaginois**, l'ennemi de Rome.
- Croire que Marseille a été fondée par les Romains : elle a été fondée par des **Grecs** de Phocée.
`,
      exercices: [
        {
          type: "saisie",
          question: "Que signifie l'expression latine *mare nostrum* ?",
          reponses: ["notre mer", "la Méditerranée", "Méditerranée", "la mer Méditerranée"],
          explication: "*Mare nostrum* = « notre mer » : c'est ainsi que les Romains désignaient la Méditerranée.",
        },
        {
          type: "qcm",
          question: "Contre quelle cité Rome a-t-elle mené les guerres puniques ?",
          choix: ["Athènes", "Carthage", "Alexandrie", "Troie"],
          reponse: 1,
          explication: "Carthage, en Afrique du Nord, fondée par des Phéniciens (les Romains les appelaient *Punici*).",
        },
        {
          type: "qcm",
          question: "Quel général carthaginois a franchi les Alpes avec des éléphants ?",
          choix: ["Scipion", "Vercingétorix", "Hannibal", "Caton"],
          reponse: 2,
          explication: "Hannibal, en 218 av. J.-C., pendant la deuxième guerre punique. Scipion l'Africain est le Romain qui l'a vaincu à Zama.",
        },
        {
          type: "saisie",
          question: "En quelle année av. J.-C. Carthage a-t-elle été détruite ?",
          reponses: ["146", "146 av. J.-C.", "-146", "146 av JC", "146 av J.-C.", "146 avant J.-C.", "146 avant Jésus-Christ"],
          explication: "En 146 av. J.-C., à la fin de la troisième guerre punique (la même année que Corinthe, en Grèce).",
        },
        {
          type: "vf",
          question: "La ville de Marseille a été fondée par les Romains.",
          reponse: false,
          explication: "Faux : *Massalia* a été fondée vers 600 av. J.-C. par des Grecs venus de Phocée, bien avant l'arrivée des Romains.",
        },
        {
          type: "qcm",
          question: "Quelle bataille marque la victoire de Jules César sur Vercingétorix en 52 av. J.-C. ?",
          choix: ["Alésia", "Zama", "Cannes", "Gergovie"],
          reponse: 0,
          explication: "Alésia, en 52 av. J.-C. À Gergovie, la même année, Vercingétorix avait au contraire résisté à César. Zama et Cannes sont des batailles des guerres puniques.",
        },
        {
          type: "vf",
          question: "Le pont du Gard est un aqueduc romain qui amenait l'eau à Nîmes.",
          reponse: true,
          explication: "Vrai : ce pont-aqueduc, construit au Ier siècle ap. J.-C., faisait passer le canal au-dessus de la rivière du Gardon.",
        },
        {
          type: "qcm",
          question: "Que veut dire Horace avec *Graecia capta ferum victorem cepit* ?",
          choix: ["Rome a détruit toute la culture grecque.", "La Grèce, vaincue militairement, a conquis les Romains par sa culture.", "La Grèce a vaincu Rome à la guerre.", "Les Grecs ont fondé Rome."],
          reponse: 1,
          explication: "« La Grèce conquise a conquis son farouche vainqueur » : Rome a vaincu la Grèce par les armes, mais a adopté sa culture, ses arts et sa littérature.",
        },
        {
          type: "saisie",
          question: "Comment s'appelait le port de Rome, à l'embouchure du Tibre ?",
          reponses: ["Ostie", "Ostia"],
          explication: "Ostie (*Ostia*, de *os, oris*, la bouche : l'embouchure). Les navires y déchargeaient le blé, le vin et l'huile.",
        },
        {
          type: "redaction",
          question: "Explique en une quinzaine de lignes comment Rome est devenue maîtresse de la Méditerranée et ce que cette domination a changé pour les peuples conquis, en prenant l'exemple de la Gaule.",
          corrige: `
**Introduction** : Partie d'une petite ville du Latium, Rome finit par contrôler toutes les rives de la Méditerranée, qu'elle appelle *mare nostrum*.

**La conquête** : après avoir soumis l'Italie au IIIe siècle av. J.-C., Rome affronte Carthage lors des **guerres puniques** (264-146 av. J.-C.). Malgré l'invasion d'Hannibal, qui franchit les Alpes en 218 av. J.-C., Rome l'emporte : Scipion bat Hannibal à Zama (202) et Carthage est détruite en 146 av. J.-C., comme Corinthe en Grèce. Rome s'étend ensuite vers l'est (la Grèce, puis l'Égypte en 30 av. J.-C.) et vers l'ouest : Jules César conquiert la Gaule entre 58 et 51 av. J.-C. (victoire d'Alésia sur Vercingétorix en 52).

**Les conséquences** : sous l'Empire, la *pax Romana* favorise le commerce (blé, vin, huile transportés dans des amphores) et la circulation sur les routes. En Gaule, des villes à la romaine apparaissent, avec forum, temples, thermes et amphithéâtres : Lugdunum (Lyon), capitale des Gaules ; Nîmes, avec sa Maison carrée et l'aqueduc du pont du Gard. Les Gaulois adoptent le mode de vie romain et la langue latine, qui deviendra le français.

**Conclusion** : la conquête a été violente, mais elle a aussi créé un vaste monde d'échanges, dont nous avons hérité notre langue et de nombreux monuments.

>! Critères : dates clés exactes (guerres puniques, 146, Alésia 52), exemple précis de la Gaule, distinction entre conquête militaire et romanisation.
`,
        },
      ],
    },
    {
      id: "textes-authentiques",
      titre: "Premiers textes authentiques : vers, formules et inscriptions",
      theme: "Lire, comprendre, traduire",
      cours: `
## Qu'est-ce qu'un texte authentique ?
Jusqu'ici, tu as surtout lu des phrases **fabriquées** pour t'entraîner. Un texte **authentique** a été écrit (ou gravé) par les Romains eux-mêmes : vers de poètes, formules célèbres, inscriptions sur les monuments. Avec ce que tu sais déjà (1re et 2e déclinaisons, *esse*, présent, imparfait, impératif) et l'aide d'un petit **lexique**, tu peux déjà en comprendre beaucoup.

>! Dans un vrai texte, tu rencontreras des mots que tu n'as pas encore appris (d'autres déclinaisons, d'autres temps). Pas de panique : ils sont **donnés en note**, comme dans un manuel. Ton travail, c'est de reconnaître ce que tu sais et de construire le sens.

## La méthode de lecture-compréhension
1. **Lis le texte à voix haute**, en prononciation restituée : c'est déjà un premier pas vers le sens.
2. **Repère les mots connus** et les mots « transparents » (qui ressemblent au français : *Amor*, *Fortuna*).
3. **Lis les notes** (le lexique donné).
4. **Trouve le verbe**, puis son **sujet** au nominatif, puis le **COD** à l'accusatif et les autres compléments.
5. **Traduis**, puis **compare** avec une traduction publiée : il y a souvent plusieurs bonnes traductions.

## Six textes célèbres

**1. Martial, *Épigrammes*, I, 32** (Ier siècle ap. J.-C.)
*Non amo te, Sabidi, nec possum dicere quare.*
(te = toi, te ; nec = et ne... pas ; possum = je peux ; dicere = dire ; quare = pourquoi)
- *amo* : présent de *amare*, 1re personne du singulier ; *non* = ne... pas.
- *Sabidi* : **vocatif** de *Sabidius* (les noms en -ius ont un vocatif en -i, comme *fili* !). Le poète s'adresse à lui.
→ « Je ne t'aime pas, Sabidius, et je ne peux pas dire pourquoi. »

**2. Virgile, *Énéide*, I, 1** (Ier siècle av. J.-C.) : le premier vers de l'épopée
*Arma virumque cano...*
(arma, orum, n. pl. = les armes ; vir, viri, m. = l'homme, le héros ; -que = et ; cano = je chante)
- *cano* : présent, 1re personne du singulier : c'est le poète qui parle.
- *arma* : accusatif neutre pluriel ; *virum* : accusatif singulier : ce sont les deux **COD**.
- *-que*, collé à la fin du mot, signifie « et » (comme dans SPQR).
→ « Je chante les armes et le héros... » Ce héros, c'est **Énée**.

**3. Virgile, *Énéide*, I, 33**
*Tantae molis erat Romanam condere gentem.*
(tantae molis = d'un si grand effort ; condere = fonder ; gentem = le peuple, accusatif)
- *erat* : imparfait de *esse*, 3e personne du singulier.
- *Romanam* : adjectif de la 1re classe, accusatif féminin singulier, accordé avec *gentem*.
→ « Il fallait un si grand effort pour fonder le peuple romain ! »

**4. Virgile, *Bucoliques*, X, 69**
*Omnia vincit Amor.*
(omnia = toutes choses, tout ; vincere, 3e conj. = vaincre)
- *vincit* : présent, 3e personne du singulier. Le sujet est *Amor*, au **nominatif**, placé **après** le verbe : en latin, l'ordre des mots est libre.
→ « L'Amour triomphe de tout. »

**5. Horace, *Odes*, I, 11** (Ier siècle av. J.-C.)
*Carpe diem.*
(carpere, 3e conj. = cueillir ; diem = le jour, accusatif)
- *carpe* : **impératif** présent, 2e personne du singulier, comme *lege !*
→ « Cueille le jour » : profite du jour présent.

**6. L'inscription du Panthéon, à Rome**
M·AGRIPPA·L·F·COS·TERTIVM·FECIT
- Les Romains abrégeaient beaucoup : **M** = *Marcus* (un praenomen), **L·F** = *Luci filius* (fils de Lucius), **COS** = *consul*, *tertium* = pour la troisième fois, *fecit* = a fait (un temps du passé que tu verras plus tard).
→ « Marcus Agrippa, fils de Lucius, consul pour la troisième fois, a fait (ce monument). » Agrippa, le gendre d'Auguste, avait fait construire le premier Panthéon ; l'empereur Hadrien, en le reconstruisant, a gardé son inscription.

>! **Exemple résolu** : comprends *Audentes Fortuna iuvat* (Virgile, *Énéide*, X, 284 ; audentes = ceux qui osent, accusatif pluriel ; iuvare, 1re conj. = aider).
>! Verbe : *iuvat*, présent, 3e personne du singulier. Sujet au nominatif singulier : *Fortuna* (1re déclinaison), la déesse de la chance. COD à l'accusatif : *audentes*.
>! → « La Fortune aide ceux qui osent », c'est-à-dire : la chance sourit aux audacieux.

> **À retenir** : un texte authentique est écrit par les Romains eux-mêmes. Méthode : lire à voix haute, repérer les mots connus, lire les notes, trouver le verbe, le sujet (nominatif), le COD (accusatif), puis traduire et comparer. Les Romains abrègent beaucoup dans les inscriptions (M = Marcus, COS = consul).

## Erreurs fréquentes
- Vouloir tout comprendre mot à mot avant de commencer : commence par ce que tu connais et sers-toi des notes.
- Prendre le premier nom pour le sujet : dans *Omnia vincit Amor*, le sujet est *Amor*, au bout de la phrase.
`,
      exercices: [
        {
          type: "qcm",
          question: "Dans *Omnia vincit Amor* (Virgile ; omnia = toutes choses ; vincere = vaincre), quel mot est le sujet de *vincit* ?",
          choix: ["*Omnia*, car il est placé en premier", "*Amor*, au nominatif singulier", "Il n'y a pas de sujet", "*Omnia*, au nominatif pluriel"],
          reponse: 1,
          explication: "*Vincit* est au singulier : son sujet est *Amor*, nominatif singulier. *Omnia* est le COD (neutre pluriel, ici à l'accusatif). « L'Amour triomphe de tout. » La place du mot ne compte pas : seule la terminaison et l'accord avec le verbe permettent de trouver le sujet.",
        },
        {
          type: "saisie",
          question: "Traduis le début de l'épigramme de Martial : *Non amo te* (te = toi, te).",
          reponses: ["je ne t'aime pas"],
          explication: "*Amo* : présent de *amare*, 1re personne du singulier ; *non* = ne... pas ; *te* = te. « Je ne t'aime pas. »",
        },
        {
          type: "qcm",
          question: "Dans *Non amo te, Sabidi*, à quel cas est *Sabidi* (de *Sabidius*) ?",
          choix: ["Au génitif, complément du nom", "Au nominatif, sujet", "Au vocatif, car le poète s'adresse à Sabidius", "Au datif, à qui ?"],
          reponse: 2,
          explication: "Le poète interpelle Sabidius : c'est une apostrophe, donc le vocatif. Les noms en -ius font leur vocatif en -i (*fili*, *Sabidi*). Le sujet de *amo* est « je », contenu dans le verbe.",
        },
        {
          type: "vf",
          question: "Dans le vers de Virgile *Tantae molis erat Romanam condere gentem*, la forme *erat* est l'imparfait du verbe *esse*.",
          reponse: true,
          explication: "Vrai : *erat* = « il était » (eram, eras, **erat**...). Le vers signifie : « Il fallait un si grand effort pour fonder le peuple romain ! »",
        },
        {
          type: "qcm",
          question: "Dans *Arma virumque cano* (Virgile), à quelle personne est le verbe *cano* (canere, chanter) ?",
          choix: ["3e personne du singulier : il chante", "1re personne du pluriel : nous chantons", "2e personne du singulier : tu chantes", "1re personne du singulier : je chante"],
          reponse: 3,
          explication: "La désinence -o marque la 1re personne du singulier : *cano* = « je chante ». C'est le poète qui parle : « Je chante les armes et le héros. »",
        },
        {
          type: "saisie",
          question: "Dans *Arma virumque cano*, que signifie *-que*, collé à la fin de *virum* ? (un seul mot)",
          reponses: ["et"],
          explication: "*-que* signifie « et » : *arma virumque* = « les armes et le héros ». On le retrouve dans SPQR, *Senatus Populusque Romanus*.",
        },
        {
          type: "qcm",
          question: "Dans l'expression de Térence *Lupus in fabula* (« le loup dans l'histoire », c'est-à-dire « quand on parle du loup... »), à quel cas est *fabula* ?",
          choix: ["À l'ablatif singulier, car *in* exprime ici le lieu où l'on est", "À l'accusatif singulier, car *in* exprime un mouvement", "Au nominatif singulier, sujet", "Au génitif singulier"],
          reponse: 0,
          explication: "Sans mouvement, *in* se construit avec l'ablatif : *in fabula* (ablatif singulier de la 1re déclinaison). Avec mouvement, on aurait l'accusatif *in fabulam*.",
        },
        {
          type: "vf",
          question: "Dans *Carpe diem* (Horace ; carpere, 3e conj. = cueillir), *carpe* est un impératif présent à la 2e personne du singulier.",
          reponse: true,
          explication: "Vrai : comme *lege !* (lis !), *carpe !* est l'impératif singulier d'un verbe de la 3e conjugaison : « Cueille le jour ! »",
        },
        {
          type: "saisie",
          question: "Sur le Panthéon de Rome, on lit : M·AGRIPPA·L·F·COS·TERTIVM·FECIT. Quel praenomen abrège la lettre M ?",
          reponses: ["Marcus"],
          explication: "M = *Marcus*. Les praenomina étaient peu nombreux et toujours abrégés : M = Marcus, L = Lucius, C = Gaius, P = Publius. L·F = *Luci filius*, « fils de Lucius ».",
        },
        {
          type: "redaction",
          question: "Voici l'épigramme complète de Martial (I, 32) : *Non amo te, Sabidi, nec possum dicere quare : hoc tantum possum dicere : non amo te.* (nec = et ne... pas ; possum = je peux ; dicere = dire ; quare = pourquoi ; hoc = ceci ; tantum = seulement). 1) Indique comment se prononcent *dicere* et *quare*. 2) Analyse *amo* et *Sabidi*. 3) Traduis. 4) Explique en deux ou trois phrases ce qui rend ce petit poème amusant.",
          corrige: `
1. **Prononciation** : *dicere* se dit « dikéré » (c = k, toutes les lettres se prononcent) ; *quare* se dit « kouaré » (qu = « kou » rapide).

2. **Analyse** :
- *amo* : présent de l'indicatif de *amare* (1re conjugaison), 1re personne du singulier ; *non* = ne... pas.
- *Sabidi* : vocatif de *Sabidius* (nom en -ius, vocatif en -i) : le poète s'adresse directement à lui.

3. **Traduction** : « Je ne t'aime pas, Sabidius, et je ne peux pas dire pourquoi ; je peux seulement dire ceci : je ne t'aime pas. »

4. **Interprétation** : le poème commence et se termine par les mêmes mots, *non amo te* : la répétition enferme Sabidius dans ce refus. Le poète annonce qu'il va peut-être expliquer, mais il ne donne aucune raison : la chute est drôle parce qu'elle tourne en rond. Le poème a été imité en français au XVIIe siècle par Bussy-Rabutin : « Je ne vous aime pas, Hylas ; je n'en saurais dire la cause... »

>! Critères : prononciation justifiée par les règles ; analyse exacte (personne, temps, cas) ; traduction complète en bon français ; remarque sur la répétition et la chute.
`,
        },
      ],
    },
  ],
};
