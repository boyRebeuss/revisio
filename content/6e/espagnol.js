export default {
  chapitres: [
    {
      id: "sonidos-letras",
      titre: "Les sons et les lettres de l'espagnol",
      theme: "Les bases de la langue",
      cours: `
>! **Ton objectif cette année** : en classe bilangue, tu commences l'espagnol en même temps que l'anglais. Le programme de 6e vise le niveau **A1** (le premier niveau du Cadre européen des langues, qui va de A1 à C2) : en fin d'année, tu sais te présenter, parler de toi, de ta famille, de tes goûts et de ton quotidien avec des phrases simples, comprendre un texte court et poser des questions simples.

## Une bonne nouvelle : l'espagnol se lit comme il s'écrit
En espagnol, presque toutes les lettres se prononcent, et toujours de la même façon. Si tu connais les règles de cette page, tu peux lire à voix haute n'importe quel mot, même un mot que tu ne connais pas.

## Les voyelles : toujours prononcées
| Lettre | Se dit | Exemple |
|---|---|---|
| a | « a » | *gato* (chat) |
| e | « é » (jamais muet) | *leche* → « létché » (lait) |
| i | « i » | *isla* (île) |
| o | « o » | *oso* (ours) |
| u | « ou » | *uno* → « ouno », *mundo* → « moundo » |

Le **e** final se prononce toujours : *noche* (nuit) se dit « notché », *grande* se dit « grandé ».

## Les consonnes qui changent du français
- **h** : toujours **muet**. *hola* se dit « ola », *helado* (glace) se dit « élado ».
- **j** : un son raclé au fond de la gorge, un peu comme quand on se racle doucement la gorge (comme le « ch » de l'allemand *Bach*) : *jirafa*, *ojo* (œil), *Juan*.
- **g** devant **e** ou **i** : le même son raclé que le **j** : *gente* (les gens), *girasol* (tournesol). Devant **a, o, u** : **g** dur comme dans « gare » : *gato*, *goma*.
- **ll** : se dit comme un « y » : *llama* (le lama), *pollo* (poulet), *calle* (rue).
- **ñ** : se dit « gn » comme dans « montagne » : *niño* (enfant), *año* (année), *España*.
- **ch** : se dit « tch » : *chocolate*, *coche* (voiture).
- **r** entre deux voyelles : un seul petit battement de langue ; **rr** (et **r** au début d'un mot) : roulé fort. *pero* (mais) ≠ *perro* (chien), *caro* (cher) ≠ *carro* (chariot).
- **z**, et **c** devant **e** ou **i** : en Espagne, la langue entre les dents, comme le « th » anglais de *thank you* : *zorro* (renard), *cielo* (ciel). En Amérique latine et aux Canaries, on dit simplement « s ».
- **qu** devant **e, i** : « k » (le *u* ne se dit pas) : *queso* (fromage), *mosquito*.
- **b** et **v** : même son, un « b » doux : *vaca* (vache) se dit presque « baca ».
- **s** : toujours « ss », jamais « z » : *casa* se dit « cassa ».

## L'alphabet
L'alphabet espagnol a **27 lettres** : les 26 lettres du français et le **ñ** (*eñe*). Pour épeler ton prénom, retiens le nom de quelques lettres : *a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, ye, zeta*.

## L'accent tonique et l'accent écrit
Dans chaque mot espagnol, une syllabe se prononce **plus fort** que les autres.
1. Le mot finit par une **voyelle**, un **n** ou un **s** → on appuie sur l'**avant-dernière** syllabe : *ca*-**mi**-sa, **ca**-sa, **jo**-ven.
2. Le mot finit par une **autre consonne** → on appuie sur la **dernière** syllabe : pa-**red**, ver-**dad**, ha-**blar**.
3. Si le mot ne suit pas la règle, on l'indique avec un **accent écrit** (*la tilde*), toujours dans le même sens (´) : *ratón*, *sofá*, *lápiz*, *árbol*, *plátano*.

>! **Exemple résolu** : *ratón* (souris) finit par **n** ; d'après la règle 1, on devrait appuyer sur *ra*. Or on dit ra-**tón** : la règle n'est pas suivie, donc on écrit l'accent sur le **ó**.

## Les signes à l'envers
Une question s'ouvre avec **¿** et une exclamation avec **¡** : *¿Qué es?* (Qu'est-ce que c'est ?) ; *¡Qué bonito!* (Comme c'est joli !).

>! **Erreurs fréquentes**
- prononcer le **h** (*hola*) ou faire un **e** muet (*grande*) ;
- lire le **u** « u » à la française (*mundo* se dit « moundo ») ;
- oublier le **¿** ou le **¡** du début.

>! **Sur ton clavier** : dans l'appli, les accents et le **ñ** comptent (*años* ≠ *anos*). Sous chaque réponse à taper, des boutons ajoutent ces lettres (á, ñ, ¿, ¡…) ; sur téléphone ou tablette, tu peux aussi faire un appui long sur la lettre (**n** → **ñ**, **o** → **ó**) ou sur **!** et **?** (→ **¡** et **¿**).

>! **Entraîne ton oreille** : cette appli ne fait pas travailler l'oral. Écoute de l'espagnol plusieurs fois par semaine (les audios de ton manuel, des chansons, des dessins animés en espagnol) et répète les mots du cours à voix haute.

> **À retenir** : toutes les voyelles se prononcent (u = « ou ») ; h muet ; j = son raclé ; ll = « y » ; ñ = « gn » ; ch = « tch » ; rr roulé fort ; 27 lettres ; accent écrit quand la règle de l'accent tonique n'est pas suivie ; ¿ et ¡ au début.
`,
      exercices: [
        { type: "vf", question: "Dans *helado* (glace), on ne prononce pas le h.", reponse: true, explication: "Le **h** est toujours muet en espagnol : *helado* se dit « élado »." },
        { type: "qcm", question: "Comment se prononce *mundo* (le monde) ?", choix: ["« mundo » comme dans « mûr »", "« moundo »", "« mondo »", "« meundo »"], reponse: 1, explication: "Le **u** espagnol se prononce toujours « ou » : « moundo »." },
        { type: "qcm", question: "Quelle lettre de l'alphabet espagnol n'existe pas en français ?", choix: ["le w", "le ç", "le ñ", "le k"], reponse: 2, explication: "Le **ñ** (*eñe*) est la 27e lettre de l'alphabet espagnol. Le ç n'existe pas en espagnol." },
        { type: "qcm", question: "Dans quel mot entends-tu le son raclé de la *jota* ?", choix: ["*gato*", "*goma*", "*girasol*", "*guapo*"], reponse: 2, explication: "Devant **e** et **i**, le **g** se prononce comme la jota : *girasol*. Devant a, o, u, il est dur : *gato*, *goma*, *guapo*." },
        { type: "vf", question: "*pero* et *perro* se prononcent exactement de la même façon.", reponse: false, explication: "*pero* (mais) a un **r** simple, à peine roulé ; *perro* (chien) a un **rr** roulé fort. Le sens change !" },
        { type: "qcm", question: "Comment se prononce le *ll* de *pollo* (poulet) ?", choix: ["comme « l »", "comme « ch »", "comme « gn »", "comme « y »"], reponse: 3, explication: "**ll** se dit « y » : « poyo »." },
        { type: "saisie", question: "Écris le signe qui ouvre une exclamation en espagnol (comme dans « ...Qué bonito! »). Utilise le bouton sous la réponse, ou, sur téléphone ou tablette, un appui long sur la touche « ! ».", reponses: ["¡"], explication: "L'exclamation s'ouvre avec **¡** et se ferme avec **!** : *¡Qué bonito!*" },
        { type: "qcm", question: "Lequel de ces mots porte un accent écrit parce qu'il ne suit pas la règle de l'accent tonique ?", choix: ["*casa*", "*pared*", "*joven*", "*ratón*"], reponse: 3, explication: "*ratón* finit par **n** : on devrait appuyer sur l'avant-dernière syllabe (*ra*). On dit ra-**tón**, donc on écrit l'accent. *casa* et *joven* (voyelle ou n → avant-dernière) et *pared* (consonne → dernière) suivent la règle." },
        { type: "saisie", question: "Écris le mot *nino* (enfant) avec la bonne lettre espagnole (il se prononce « nigno »).", reponses: ["niño"], explication: "Le son « gn » s'écrit **ñ** : *niño*." },
        { type: "redaction", question: "Pour chacun de ces mots, écris comment il se prononce « à la française » et dis sur quelle syllabe on appuie : *hola*, *leche*, *jirafa*, *lápiz*.", corrige: "- *hola* → « **o**-la » : h muet ; finit par une voyelle → on appuie sur l'avant-dernière syllabe (*ho*).\n- *leche* → « **lé**-tché » : ch = « tch », le e final se prononce ; finit par une voyelle → avant-dernière syllabe (*le*).\n- *jirafa* → « hhi-**ra**-fa » (son raclé au début) ; finit par une voyelle → avant-dernière syllabe (*ra*).\n- *lápiz* → « **la**-piss » ; finit par **z** (une consonne) : on devrait appuyer sur la dernière syllabe, mais on appuie sur *la* → c'est pour cela qu'on écrit l'accent sur le **á**." }
      ]
    },
    {
      id: "en-clase",
      titre: "En classe : les consignes, le matériel et les couleurs",
      theme: "Communiquer",
      cours: `
## Comprendre les consignes du professeur
Ton professeur te parle souvent en espagnol. Voici les consignes les plus fréquentes (à un élève, on emploie la forme de **tú**) :

| Consigne | Sens |
|---|---|
| ¡Escucha! | Écoute ! |
| ¡Mira! | Regarde ! |
| ¡Lee! | Lis ! |
| ¡Escribe! | Écris ! |
| ¡Repite! | Répète ! |
| ¡Abre el libro! / ¡Cierra el libro! | Ouvre le livre ! / Ferme le livre ! |
| ¡Levanta la mano! | Lève la main ! |
| ¡Silencio, por favor! | Silence, s'il vous plaît ! |

Quand il s'adresse à toute la classe, le professeur dit souvent : *¡Escuchad!*, *¡Mirad!*, *¡Abrid el libro!* (c'est la forme de **vosotros**, « vous » pluriel).

## Demander de l'aide (en espagnol !)
| Espagnol | Français |
|---|---|
| ¿Cómo se dice « trousse » en español? | Comment dit-on « trousse » en espagnol ? |
| ¿Qué significa « mochila »? | Que signifie « mochila » ? |
| No entiendo. | Je ne comprends pas. |
| ¿Puede repetir, por favor? | Pouvez-vous répéter, s'il vous plaît ? |
| Más despacio, por favor. | Plus lentement, s'il vous plaît. |
| ¿Cómo se escribe? | Comment ça s'écrit ? |
| No sé. | Je ne sais pas. |
| ¿Puedo ir al baño? | Est-ce que je peux aller aux toilettes ? |
| Perdón. / Lo siento. | Pardon. / Je suis désolé(e). |
| Gracias. — De nada. | Merci. — De rien. |

Au professeur, on dit **¿Puede...?** (vouvoiement) ; à un camarade, **¿Puedes...?** (tutoiement).

## Le matériel scolaire
| Espagnol | Français |
|---|---|
| la mochila | le sac à dos, le cartable |
| el estuche | la trousse |
| el lápiz (los lápices) | le crayon (les crayons) |
| el bolígrafo (el boli) | le stylo |
| la goma | la gomme |
| la regla | la règle |
| el sacapuntas | le taille-crayon |
| las tijeras | les ciseaux |
| el cuaderno | le cahier |
| el libro | le livre |
| la pizarra | le tableau |
| la mesa / la silla | la table / la chaise |

>! **Pour dire ce que tu as** : *En mi estuche **hay** un lápiz, dos bolígrafos y una goma.* (Dans ma trousse, il y a...) — **hay** = il y a, toujours invariable. *¿Qué hay en tu mochila?* = Qu'est-ce qu'il y a dans ton sac ?

## Les couleurs
*rojo* (rouge), *azul* (bleu), *verde* (vert), *amarillo* (jaune), *negro* (noir), *blanco* (blanc), *gris* (gris), *rosa* (rose), *naranja* (orange), *marrón* (marron), *morado* (violet).

- La couleur se place **après** le nom : *un cuaderno rojo*.
- Les couleurs en **-o** s'accordent : *un lápiz negr**o***, *una goma negr**a***, *dos lápices negr**os***.
- Les autres ont la même forme au masculin et au féminin, et prennent juste **-s** ou **-es** au pluriel : *una regla azul*, *dos reglas azul**es***, *un estuche verde*, *dos estuches verde**s***.
- *¿De qué color es?* = De quelle couleur est-ce ? → *Es amarillo.*

>! **Erreurs fréquentes** : ✗ *una mochila rojo* → ✓ *una mochila roja* ; ✗ *un rojo cuaderno* → ✓ *un cuaderno rojo* ; ✗ *Hay el libro* → ✓ *Hay un libro*.

> **À retenir** : escucha, mira, lee, escribe, repite ; No entiendo / ¿Cómo se dice...? / ¿Puede repetir? ; hay = il y a ; la couleur se place après le nom et s'accorde si elle finit par -o.
`,
      exercices: [
        { type: "qcm", question: "Le professeur dit : « ¡Abrid el libro! ». Que dois-tu faire ?", choix: ["Fermer le livre", "Ouvrir le livre", "Lire le livre à voix haute", "Ranger le livre dans ton sac"], reponse: 1, explication: "*abrir* = ouvrir. *¡Abrid!* s'adresse à toute la classe (vosotros). Fermer = *cerrar* (*¡Cierra!*)." },
        { type: "saisie", question: "Tu ne comprends pas ce que dit le professeur. Écris en espagnol : « Je ne comprends pas. »", reponses: ["No entiendo", "No lo entiendo", "Yo no entiendo"], explication: "**No entiendo.** Tu peux ajouter : *¿Puede repetir, por favor?*" },
        { type: "qcm", question: "Tu veux savoir comment on dit « taille-crayon » en espagnol. Tu demandes :", choix: ["¿Cómo se dice « taille-crayon » en español?", "¿Cómo se escribe « taille-crayon »?", "¿Qué significa « taille-crayon »?", "¿Puedo ir al taille-crayon?"], reponse: 0, explication: "**¿Cómo se dice ... en español?** = comment dit-on ... en espagnol ? (*¿Qué significa...?* sert à demander le sens d'un mot espagnol.) Réponse : *el sacapuntas*." },
        { type: "saisie", question: "Traduis : « la trousse » (avec l'article)", reponses: ["el estuche"], explication: "**el estuche** (masculin en espagnol)." },
        { type: "saisie", question: "Accorde la couleur : « una mochila (rojo) »", reponses: ["roja"], explication: "*mochila* est féminin, et *rojo* finit par -o : il s'accorde → *una mochila **roja***." },
        { type: "saisie", question: "Mets au pluriel : « una regla azul » → « dos reglas ... »", reponses: ["azules"], explication: "*azul* finit par une consonne : on ajoute **-es** → *dos reglas azules*." },
        { type: "vf", question: "« Hay un lápiz en la mesa » signifie « Il y a un crayon sur la table ».", reponse: true, explication: "**hay** = il y a ; *en la mesa* = sur la table (*en* veut dire « dans » ou « sur »)." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Tengo un amarillo cuaderno.", "Tengo un cuaderno amarilla.", "Tengo un cuaderno amarillo.", "Tengo una cuaderno amarillo."], reponse: 2, explication: "La couleur se place **après** le nom et s'accorde avec lui : *un cuaderno* (masculin) **amarillo**." },
        { type: "qcm", question: "Un camarade parle trop vite. Que lui dis-tu poliment ?", choix: ["¡Silencio!", "¡Levanta la mano!", "De nada.", "Más despacio, por favor."], reponse: 3, explication: "**Más despacio, por favor** = plus lentement, s'il te plaît." },
        { type: "redaction", question: "Décris en espagnol le contenu de ta trousse et de ton sac en 4 phrases (avec *hay*, des nombres simples et des couleurs accordées).", corrige: "Modèle :\n\n*Mi mochila es azul. En mi mochila hay dos cuadernos, un libro de español y un estuche. Mi estuche es verde. En mi estuche hay un lápiz negro, tres bolígrafos, una goma blanca y unas tijeras rojas.*\n\nVérifie :\n- **hay** (invariable) + *un / una / unos / unas* ou un nombre ;\n- la couleur **après** le nom, accordée : *una goma blanca*, *unas tijeras rojas* ;\n- *azul*, *verde* ne changent pas au féminin." },
        { type: "saisie", question: "Tu demandes poliment au professeur de répéter. Écris en espagnol : « Pouvez-vous répéter, s'il vous plaît ? »", reponses: ["¿Puede repetir, por favor?", "Puede repetir por favor", "¿Puede usted repetir, por favor?", "Puede usted repetir por favor"], explication: "Au professeur, on vouvoie : **¿Puede repetir, por favor?** (à un camarade : *¿Puedes repetir?*)." }
      ]
    },
    {
      id: "presentarse",
      titre: "Me présenter : mon nom, mon âge, mon pays",
      theme: "Axe 1 : Personnes et personnages",
      cours: `
## Saluer
- **¡Hola!** = Salut ! / Bonjour ! (à tout moment de la journée)
- **Buenos días** (le matin), **buenas tardes** (l'après-midi, jusqu'au soir), **buenas noches** (le soir et la nuit).
- **¿Qué tal?** = Ça va ? → *Muy bien* (très bien), *bien* (bien), *regular* (bof), *mal* (mal).
- **Adiós** (au revoir), **hasta luego** (à plus tard), **hasta mañana** (à demain), **¡Chao!** (salut !, très familier).

## Se présenter en quatre questions
| Question | Réponse |
|---|---|
| ¿Cómo te llamas? (Comment t'appelles-tu ?) | **Me llamo** Hugo. |
| ¿Cuántos años tienes? (Quel âge as-tu ?) | **Tengo** once años. |
| ¿De dónde eres? (D'où es-tu ?) | **Soy** francés / francesa. **Soy de** Rennes. |
| ¿Dónde vives? (Où habites-tu ?) | **Vivo en** Rennes, en Bretaña. |

>! **Attention à l'âge** : comme en français, on dit l'âge avec le verbe **avoir** : *tener*. *Tengo once años* = J'ai onze ans. Le mot *años* (ans) a un **ñ** : sans tilde, *anos* est un tout autre mot !

## Parler des langues
- *¿Qué idiomas hablas?* = Quelles langues parles-tu ?
- *Hablo francés, un poco de inglés y un poco de español.* (Je parle français, un peu d'anglais et un peu d'espagnol.)
- *Estudio español y inglés en el colegio.* (J'étudie l'espagnol et l'anglais au collège.)
- Les noms de langues et de nationalités s'écrivent **sans majuscule** : *español*, *francés*, *inglés*.

## Les nationalités
| Pays | Garçon | Fille |
|---|---|---|
| Francia | francés | francesa |
| España | español | española |
| Inglaterra | inglés | inglesa |
| Alemania | alemán | alemana |
| Italia | italiano | italiana |
| Portugal | portugués | portuguesa |
| Bélgica | belga | belga |
| Marruecos | marroquí | marroquí |

Au féminin, on ajoute **-a** quand le mot finit par une consonne (et l'accent écrit disparaît : *francés* → *francesa*), on change **-o** en **-a**, et les mots en **-a** ou **-í** ne changent pas.

## Présenter quelqu'un
- *Este es mi amigo Leo.* (Voici mon ami Leo.) — *Esta es mi amiga Sara.*
- *Se llama Sara.* (Elle s'appelle Sara.) — *Tiene doce años.* — *Es española.* — *Vive en Valencia.*
- *Encantado* (si tu es un garçon) / *Encantada* (si tu es une fille) = Enchanté(e).

>! **Erreurs fréquentes** : ✗ *Soy once años* → ✓ *Tengo once años* ; ✗ *Me llamo es Hugo* → ✓ *Me llamo Hugo* ; ✗ *Francés* avec une majuscule → ✓ *francés*.

> **À retenir** : me llamo... ; tengo ... años ; soy de... / soy francés(a) ; vivo en... ; hablo... ; se llama, tiene, es, vive pour présenter quelqu'un d'autre.
`,
      exercices: [
        { type: "qcm", question: "Il est 9 heures du matin. Tu arrives en cours d'espagnol. Tu dis :", choix: ["Buenas noches", "Buenas tardes", "Hasta mañana", "Buenos días"], reponse: 3, explication: "Le matin : **Buenos días**. L'après-midi : *buenas tardes* ; le soir : *buenas noches*." },
        { type: "saisie", question: "Réponds en espagnol par une phrase : « ¿Cómo te llamas? » (tu t'appelles Inès)", reponses: ["Me llamo Inès", "Me llamo Inés", "Yo me llamo Inès", "Yo me llamo Inés"], explication: "**Me llamo Inès.** (En Espagne, ce prénom s'écrit *Inés*, avec l'accent aigu.)" },
        { type: "saisie", question: "Traduis : « J'ai onze ans. »", reponses: ["Tengo once años", "Tengo 11 años", "Yo tengo once años", "Yo tengo 11 años"], explication: "L'âge se dit avec **tener** : *Tengo once años*. N'oublie pas le **ñ** de *años*." },
        { type: "vf", question: "« Soy de Lyon » signifie « Je suis de Lyon ».", reponse: true, explication: "*Soy de* + ville = je suis de / je viens de... : on donne son origine avec **ser**." },
        { type: "saisie", question: "Écris la nationalité au féminin : *Clara es de Francia, es ...*", reponses: ["francesa"], explication: "*francés* → **francesa** : on ajoute -a et l'accent écrit disparaît." },
        { type: "saisie", question: "Écris la nationalité au féminin : *Greta es de Alemania, es ...*", reponses: ["alemana"], explication: "*alemán* → **alemana**." },
        { type: "qcm", question: "Ta correspondante te demande : « ¿Dónde vives? ». Tu réponds :", choix: ["Vivo en Nantes.", "Tengo doce años.", "Me llamo Tom.", "Hablo inglés."], reponse: 0, explication: "*¿Dónde vives?* = Où habites-tu ? → **Vivo en** + ville." },
        { type: "qcm", question: "Comment présentes-tu ton amie Lola ?", choix: ["Este es mi amigo Lola.", "Me llamo Lola.", "Esta es mi amiga Lola.", "Esta es mi amigo Lola."], reponse: 2, explication: "Pour une fille : **Esta es mi amiga** Lola. (*Este es mi amigo* pour un garçon.)" },
        { type: "saisie", question: "Complète : « Mi amigo Pablo ... doce años. » (Mon ami Pablo a douze ans.)", reponses: ["tiene"], explication: "*tener* à la 3e personne (él) : **tiene**. *Tiene doce años.*" },
        { type: "redaction", question: "Tu participes à un échange avec un collège de Salamanque. Écris un message de présentation de 5 à 6 phrases : salutation, nom, âge, origine, ville, langues parlées, formule pour finir.", corrige: "Modèle :\n\n*¡Hola! Me llamo Hugo. Tengo once años. Soy francés y vivo en Rennes, en el oeste de Francia. Hablo francés, un poco de inglés y un poco de español: estudio español en el colegio. ¿Y tú? ¿Cómo te llamas? ¡Hasta pronto!*\n\nVérifie :\n- **me llamo** + prénom ; **tengo** + âge + **años** (avec ñ) ;\n- **soy** + nationalité (accordée : *francés / francesa*), **vivo en** + ville ;\n- les langues sans majuscule ;\n- **¿** et **¡** au début des questions et des exclamations." }
      ]
    },
    {
      id: "numeros-calendario",
      titre: "Compter jusqu'à 100, les jours, les mois et mon anniversaire",
      theme: "Communiquer",
      cours: `
## De 0 à 15 : à apprendre par cœur
*cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.*

## De 16 à 29 : un seul mot
- 16 à 19 : **dieci** + chiffre : *dieciséis, diecisiete, dieciocho, diecinueve*.
- 20 : *veinte* ; 21 à 29 : **veinti** + chiffre : *veintiuno, veintidós, veintitrés, veinticuatro, veinticinco, veintiséis, veintisiete, veintiocho, veintinueve*.
- Attention aux accents écrits : *dieciséis*, *veintidós*, *veintitrés*, *veintiséis*.

## Les dizaines, puis « y »
| | | |
|---|---|---|
| 30 treinta | 40 cuarenta | 50 cincuenta |
| 60 sesenta | 70 setenta | 80 ochenta |
| 90 noventa | 100 cien | |

À partir de 31, on écrit trois mots reliés par **y** : 31 = *treinta y uno*, 45 = *cuarenta y cinco*, 99 = *noventa y nueve*.

>! **Méthode** : pour écrire 74 → dizaine (*setenta*) + **y** + unité (*cuatro*) = *setenta y cuatro*. Pour 26 → un seul mot : *veintiséis*.

Attention aux pièges : 70 = *setenta* (pas « soixante-dix »), 80 = *ochenta*, 90 = *noventa* ; on ne compte jamais comme en français (« quatre-vingts »).

## Les jours de la semaine
*lunes, martes, miércoles, jueves, viernes, sábado, domingo* — sans majuscule, et masculins.
- *Hoy es martes.* = Aujourd'hui, c'est mardi.
- *El sábado juego al fútbol.* = Samedi (ce samedi-là), je joue au foot.
- *Los sábados juego al fútbol.* = Le samedi (tous les samedis), je joue au foot.
- *el fin de semana* = le week-end.

## Les mois et les saisons
*enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre* — sans majuscule.

Les saisons : *la primavera* (le printemps), *el verano* (l'été), *el otoño* (l'automne), *el invierno* (l'hiver).

## La date et l'anniversaire
- *¿Qué día es hoy?* → *Hoy es lunes, doce de octubre.*
- *¿Cuándo es tu cumpleaños?* (Quand est ton anniversaire ?) → *Mi cumpleaños es **el** veinticinco **de** mayo.*
- Le 1er : *el uno* (ou *el primero*) *de enero*.
- *¡Feliz cumpleaños!* = Joyeux anniversaire !

## Demander un prix ou un numéro
- *¿Cuánto cuesta?* → *Cuesta tres euros.* (Ça coûte trois euros.)
- *¿Cuál es tu número de teléfono?* → on lit souvent les chiffres deux par deux : *seis, cuarenta y dos, quince...*

>! **Erreurs fréquentes** : ✗ *dieci y seis* → ✓ *dieciséis* ; ✗ *treintayuno* → ✓ *treinta y uno* ; ✗ *Mi cumpleaños es el 25 mayo* → ✓ *el 25 **de** mayo*.

> **À retenir** : 16 à 29 en un seul mot (dieci-, veinti-) ; à partir de 31, dizaine + y + unité ; 100 = cien ; jours et mois sans majuscule ; el + jour + de + mois.
`,
      exercices: [
        { type: "saisie", question: "Écris en lettres : 14", reponses: ["catorce"], explication: "14 = **catorce**." },
        { type: "saisie", question: "Écris en lettres : 22", reponses: ["veintidós"], explication: "De 21 à 29, un seul mot : **veintidós** (avec un accent écrit sur le ó)." },
        { type: "saisie", question: "Écris en lettres : 17", reponses: ["diecisiete"], explication: "16 à 19 : *dieci* + chiffre → **diecisiete**." },
        { type: "saisie", question: "Écris en lettres : 73", reponses: ["setenta y tres"], explication: "Dizaine + **y** + unité : **setenta y tres**. (Rien à voir avec « soixante-treize » !)" },
        { type: "qcm", question: "Quel nombre est *noventa y uno* ?", choix: ["71", "81", "19", "91"], reponse: 3, explication: "*noventa* = 90, *y uno* = + 1 → **91**." },
        { type: "saisie", question: "Quel jour vient après *jueves* ?", reponses: ["viernes"], explication: "lunes, martes, miércoles, jueves, **viernes**, sábado, domingo." },
        { type: "qcm", question: "Quel mois est *agosto* ?", choix: ["avril", "août", "octobre", "juin"], reponse: 1, explication: "*agosto* = **août**. Avril = *abril*, octobre = *octubre*, juin = *junio*." },
        { type: "vf", question: "« Los domingos como con mis abuelos » signifie « Le dimanche (tous les dimanches), je mange avec mes grands-parents ».", reponse: true, explication: "**los** + jour au pluriel = chaque semaine, ce jour-là." },
        { type: "saisie", question: "Traduis : « Mon anniversaire est le 2 mars. »", reponses: ["Mi cumpleaños es el dos de marzo", "Mi cumpleaños es el 2 de marzo"], explication: "**el** + jour + **de** + mois (sans majuscule) : *Mi cumpleaños es el dos de marzo*." },
        { type: "redaction", question: "Écris en espagnol, en toutes lettres : 1) la date de ton anniversaire ; 2) la phrase « Le samedi, je vais à la piscine » ; 3) le prix « Le livre coûte 15 euros » ; 4) les nombres 38 et 64.", corrige: "Exemple de réponse :\n1. *Mi cumpleaños es el veintiséis de abril.* (el + jour + de + mois)\n2. *Los sábados voy a la piscina.* (los + jour au pluriel = chaque semaine)\n3. *El libro cuesta quince euros.*\n4. 38 = *treinta y ocho* ; 64 = *sesenta y cuatro*." }
      ]
    },
    {
      id: "familia-mascotas",
      titre: "Ma famille et mes animaux de compagnie",
      theme: "Axe 1 : Personnes et personnages",
      cours: `
## Les membres de la famille
| Espagnol | Français |
|---|---|
| el padre / la madre | le père / la mère |
| papá / mamá | papa / maman |
| los padres | les parents (le père et la mère) |
| el hermano / la hermana | le frère / la sœur |
| el abuelo / la abuela | le grand-père / la grand-mère |
| el tío / la tía | l'oncle / la tante |
| el primo / la prima | le cousin / la cousine |
| el hijo / la hija | le fils / la fille |

- Au pluriel masculin, le mot désigne tout le groupe : *los hermanos* = les frères, ou les frères et sœurs ; *los abuelos* = les grands-parents ; *los padres* = les parents (le père et la mère).
- **Faux ami** : *los parientes* = les membres de la famille (oncles, cousins...), et non « les parents ».
- *el hermano mayor* = le grand frère ; *la hermana menor* (ou *pequeña*) = la petite sœur.
- *Soy hijo único* / *Soy hija única* = Je suis fils unique / fille unique.
- *los gemelos* = les jumeaux.

>! **Exemple** : *Tengo dos hermanos: un hermano mayor, Tom, y una hermana menor, Lisa.* = J'ai deux frères et sœurs : un grand frère, Tom, et une petite sœur, Lisa.

## Les animaux de compagnie (las mascotas)
| Espagnol | Français |
|---|---|
| el perro | le chien |
| el gato | le chat |
| el conejo | le lapin |
| el hámster | le hamster |
| el pájaro | l'oiseau |
| el pez (los peces) | le poisson (les poissons) |
| la tortuga | la tortue |
| la cobaya | le cochon d'Inde |
| el caballo | le cheval |

- *¿Tienes mascota?* = As-tu un animal de compagnie ? → *Sí, tengo un gato.* / *No, no tengo mascota.*
- Pour parler d'un poisson vivant, on dit *el pez* ; *el pescado*, c'est le poisson qu'on mange !

## Les possessifs : mi, tu, su
| Un seul objet | Plusieurs objets | Sens |
|---|---|---|
| **mi** padre, **mi** madre | **mis** padres, **mis** gatos | mon, ma / mes |
| **tu** perro, **tu** tía | **tus** perros, **tus** tías | ton, ta / tes |
| **su** hermano, **su** hermana | **sus** hermanos | son, sa / ses (et leur, leurs) |

Le possessif s'accorde avec ce qui est possédé, et **pas** avec le possesseur : *mi* reste *mi* devant un mot masculin ou féminin ; il prend **-s** au pluriel.

## Compter avec tener
*tener* (avoir) : **tengo** (j'ai), **tienes** (tu as), **tiene** (il, elle a).
- *¿Cuántos hermanos tienes?* (Combien de frères et sœurs as-tu ?) → *Tengo un hermano.* / *No tengo hermanos.*
- *Mi prima tiene tres gatos.*
- *¿Cómo se llama tu perro?* → *Mi perro se llama Rayo.*

>! **Erreurs fréquentes** : ✗ *mi hermanos* → ✓ *mis hermanos* ; ✗ *Tengo un pescado en casa* → ✓ *Tengo un pez* ; ✗ *mis parientes* pour dire « mon père et ma mère » → ✓ *mis padres*.

> **À retenir** : los padres = les parents ; los hermanos = les frères et sœurs ; mi/mis, tu/tus, su/sus ; tengo, tienes, tiene ; el pez (vivant) ≠ el pescado (dans l'assiette).
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la grand-mère » (avec l'article)", reponses: ["la abuela"], explication: "**la abuela** (le grand-père : *el abuelo* ; les grands-parents : *los abuelos*)." },
        { type: "qcm", question: "« Mis padres » signifie :", choix: ["mes parents (père et mère)", "mes pères", "ma famille au sens large", "mes grands-parents"], reponse: 0, explication: "*los padres* = **le père et la mère**. Les grands-parents : *los abuelos*." },
        { type: "vf", question: "« Tengo dos hermanos » peut vouloir dire « J'ai un frère et une sœur ».", reponse: true, explication: "Le masculin pluriel désigne tout le groupe : *hermanos* = frères, ou frères et sœurs." },
        { type: "saisie", question: "Complète avec le bon possessif : « ... gatos se llaman Coco y Luna. » (Mes chats...)", reponses: ["mis"], explication: "*gatos* est au pluriel → **mis**." },
        { type: "saisie", question: "Complète avec le bon possessif : « ¿Cómo se llama ... hermana? » (ta sœur)", reponses: ["tu"], explication: "Un seul objet possédé, à toi → **tu** (sans accent : *tú* avec accent veut dire « toi »)." },
        { type: "qcm", question: "Tu as un poisson rouge dans un bocal. Comment le dis-tu ?", choix: ["Tengo un pescado rojo.", "Tengo un peces rojo.", "Tengo una pez roja.", "Tengo un pez rojo."], reponse: 3, explication: "Le poisson vivant : **el pez** (masculin). *El pescado*, c'est le poisson qu'on mange." },
        { type: "saisie", question: "Écris le pluriel de *el pez*.", reponses: ["los peces", "peces"], explication: "**z → ces** au pluriel : *el pez* → *los peces* (comme *el lápiz* → *los lápices*)." },
        { type: "qcm", question: "Ta correspondante te demande « ¿Tienes mascota? ». Tu n'as pas d'animal. Tu réponds :", choix: ["No, no tengo mascota.", "No, no tiene mascota.", "Sí, tengo un perro.", "No, tengo un conejo."], reponse: 0, explication: "**No, no tengo mascota** : le premier *no* répond à la question, le second rend le verbe négatif." },
        { type: "saisie", question: "Traduis : « Je suis fille unique. »", reponses: ["Soy hija única", "Yo soy hija única"], explication: "**Soy hija única** (fils unique : *hijo único*)." },
        { type: "redaction", question: "Présente ta famille (réelle ou imaginaire) et tes animaux en 6 phrases : nombre de frères et sœurs, leurs prénoms et leur âge, un animal et son nom.", corrige: "Modèle :\n\n*En mi familia somos cinco: mi padre, mi madre, mis dos hermanos y yo. Mi hermano mayor se llama Théo y tiene catorce años. Mi hermana menor se llama Jade y tiene siete años. Mis abuelos viven en Toulouse. Tenemos una mascota: un perro marrón. Mi perro se llama Rayo y es muy simpático.*\n\nVérifie :\n- **mi / mis** accordés avec ce qui est possédé ;\n- **tiene** + âge + **años** ;\n- *se llama* pour le nom de quelqu'un d'autre." }
      ]
    },
    {
      id: "retratos",
      titre: "Décrire une personne ou un personnage",
      theme: "Axe 1 : Personnes et personnages",
      cours: `
## Le physique : ser, tener, llevar
| Verbe | Pour dire | Exemples |
|---|---|---|
| **ser** (es) | la taille, la silhouette | *Es alto / alta* (grand), *bajo / baja* (petit), *delgado / delgada* (mince) |
| **tener** (tiene) | les cheveux, les yeux | *Tiene el pelo largo / corto* (longs / courts), *rizado / liso* (frisés / raides) ; *Tiene los ojos azules / verdes / marrones / negros* |
| **llevar** (lleva) | ce qu'on porte | *Lleva gafas* (des lunettes), *lleva barba* (une barbe), *lleva una gorra* (une casquette) |

- La couleur des cheveux : *Es rubio / rubia* (blond), *moreno / morena* (brun), *pelirrojo / pelirroja* (roux). On peut aussi dire *Tiene el pelo castaño* (châtain).
- *el pelo* (les cheveux) est **singulier** en espagnol : *Tiene el pelo largo*.

## Le caractère : ser
*simpático* (sympathique), *divertido* (drôle), *tímido* (timide), *valiente* (courageux), *generoso* (généreux), *curioso* (curieux), *inteligente*, *trabajador* (travailleur), *perezoso* (paresseux), *serio* (sérieux), *antipático*.

- L'adjectif **s'accorde** : *Mi tío es divertido. Mi tía es divertida. Mis primos son divertidos.*
- Les adjectifs en **-e** ne changent pas au féminin : *valiente*, *inteligente*.
- *trabajador* → *trabajadora* au féminin.
- Pour nuancer : *muy* (très), *bastante* (assez), *un poco* (un peu, plutôt pour un défaut), *no es nada...* (il n'est pas du tout...).

## Deux personnages célèbres
**Mafalda** est une petite fille de bande dessinée, créée en 1964 par le dessinateur argentin **Quino**. Elle a les cheveux noirs, courts et très volumineux, avec un nœud dans les cheveux. Elle est très curieuse et elle pose beaucoup de questions sur le monde. Elle déteste la soupe ! Ses amis s'appellent Felipe, Manolito, Susanita et Miguelito.

**Don Quijote et Sancho Panza** sont les héros du roman *Don Quijote de la Mancha*, de **Miguel de Cervantes** (première partie publiée en 1605), un des livres les plus célèbres du monde. Don Quichotte est **alto y muy delgado**, il porte une vieille armure et il est un peu fou : il se croit chevalier. Son écuyer, Sancho Panza, est **bajo y gordo** ; il est simple, gourmand et plein de bon sens. Le cheval de don Quichotte s'appelle **Rocinante**.

>! **Méthode : faire un portrait en 5 phrases**
1. Qui est-ce ? *Se llama Mafalda. Es argentina.*
2. Son âge : *Tiene seis años.* (si on le sait)
3. Le physique : *Es baja. Tiene el pelo negro y corto.*
4. Le caractère : *Es muy curiosa e inteligente.* (*y* devient *e* devant un mot qui commence par le son « i »)
5. Ce qu'il aime ou déteste : *No le gusta la sopa.*

>! **Erreurs fréquentes** : ✗ *Tiene los pelos largos* → ✓ *Tiene el pelo largo* ; ✗ *Es los ojos azules* → ✓ *Tiene los ojos azules* ; ✗ *Mi madre es divertido* → ✓ *Mi madre es divertida*.

> **À retenir** : ser + taille, silhouette, caractère ; tener + el pelo..., los ojos... ; llevar + gafas, barba ; l'adjectif s'accorde ; Mafalda (Quino, Argentine) ; don Quijote et Sancho Panza (Cervantes).
`,
      exercices: [
        { type: "qcm", question: "Comment dit-on « Il a les yeux verts » ?", choix: ["Es los ojos verdes.", "Tiene los ojos verdes.", "Lleva los ojos verdes.", "Tiene los ojos verde."], reponse: 1, explication: "Les yeux et les cheveux se décrivent avec **tener**, et la couleur s'accorde au pluriel : *Tiene los ojos verdes*." },
        { type: "saisie", question: "Traduis : « Elle porte des lunettes. »", reponses: ["Lleva gafas", "Ella lleva gafas", "Lleva unas gafas", "Ella lleva unas gafas"], explication: "**llevar** = porter (des vêtements, des lunettes) : *Lleva gafas*." },
        { type: "saisie", question: "Accorde l'adjectif : « Mi hermana es (divertido). »", reponses: ["divertida"], explication: "*hermana* est féminin → **divertida**." },
        { type: "saisie", question: "Accorde l'adjectif : « Mis primas son (valiente). »", reponses: ["valientes"], explication: "*valiente* finit par -e : pas de changement au féminin, mais **-s** au pluriel → *valientes*." },
        { type: "vf", question: "En espagnol, « les cheveux » se dit au singulier : *el pelo*.", reponse: true, explication: "*Tiene el pelo largo* = il a les cheveux longs." },
        { type: "qcm", question: "Qui a créé le personnage de Mafalda ?", choix: ["Cervantes, un écrivain espagnol", "Picasso, un peintre espagnol", "Quino, un dessinateur argentin", "Frida Kahlo, une peintre mexicaine"], reponse: 2, explication: "Mafalda est une héroïne de bande dessinée créée en 1964 par l'Argentin **Quino**." },
        { type: "qcm", question: "Lequel de ces mots décrit le mieux don Quichotte ?", choix: ["bajo y gordo", "pelirrojo y perezoso", "rubio y tímido", "alto y delgado"], reponse: 3, explication: "Don Quichotte est **alto y delgado** (grand et maigre). C'est son écuyer Sancho Panza qui est *bajo y gordo*." },
        { type: "saisie", question: "Comment s'appelle le cheval de don Quichotte ?", reponses: ["Rocinante"], explication: "**Rocinante**, un vieux cheval maigre, comme son maître." },
        { type: "qcm", question: "Quel est le contraire de *trabajador* ?", choix: ["perezoso", "generoso", "serio", "curioso"], reponse: 0, explication: "*trabajador* (travailleur) ≠ **perezoso** (paresseux)." },
        { type: "redaction", question: "Fais le portrait en espagnol (5 à 6 phrases) d'un personnage que tu aimes (héros de BD, de film, de livre) : nom, physique (ser, tener, llevar), caractère avec des nuances (muy, bastante, un poco), et pourquoi tu l'aimes.", corrige: "Modèle :\n\n*Mi personaje favorito es Mafalda. Es una niña argentina. Es baja y tiene el pelo negro, corto y con mucho volumen. Lleva un lazo en el pelo. Es muy curiosa, inteligente y bastante divertida, pero no le gusta nada la sopa. Me gusta porque hace preguntas sobre todo.*\n\nVérifie :\n- **ser** pour la taille et le caractère, **tener** pour les cheveux et les yeux, **llevar** pour ce qu'il porte ;\n- l'accord des adjectifs (*curiosa, divertida*) ;\n- *me gusta porque...* pour justifier." }
      ]
    },
    {
      id: "nombre-articulos",
      titre: "Le nom : masculin, féminin, singulier, pluriel",
      theme: "Grammaire",
      cours: `
## Les articles
| | Masculin | Féminin |
|---|---|---|
| **le, la** | **el** perro | **la** casa |
| **les** | **los** perros | **las** casas |
| **un, une** | **un** libro | **una** silla |
| **des** | **unos** libros | **unas** sillas |

>! **Ne confonds pas** : *el* (le, sans accent) et *él* (il, lui, avec un accent).

## Masculin ou féminin ?
- La plupart des noms en **-o** sont masculins : *el gato, el libro*.
- La plupart des noms en **-a** sont féminins : *la mesa, la casa*.
- Les noms en **-ción** et **-dad** sont féminins : *la canción* (la chanson), *la ciudad* (la ville).
- Quelques exceptions à connaître : *el día* (le jour), *el mapa* (la carte), *el planeta* ; *la mano* (la main), *la foto*, *la moto*.
- Attention, le genre change parfois par rapport au français : *la leche* (le lait), *el coche* (la voiture), *la nariz* (le nez), *la sal* (le sel), *el equipo* (l'équipe).

## Former le pluriel
1. Le nom finit par une **voyelle** → **-s** : *el gato* → *los gatos* ; *la calle* → *las calles*.
2. Le nom finit par une **consonne** → **-es** : *el animal* → *los animales* ; *la flor* → *las flores* ; *el ratón* → *los ratones*.
3. Le nom finit par **z** → **-ces** : *el lápiz* → *los lápices* ; *el pez* → *los peces*.

Au pluriel, l'accent écrit peut disparaître : *el ratón* → *los ratones* (on appuie toujours sur *to*, la règle est respectée).

## Pas d'article partitif
En espagnol, « du, de la, des » ne se traduisent pas devant une quantité qu'on ne compte pas : *Bebo agua.* (Je bois de l'eau.) ; *Como pan.* (Je mange du pain.) ; *Hay leche.* (Il y a du lait.)

## Pas d'article devant les noms de pays
On ne met pas d'article devant la plupart des noms de pays, de continents et de régions : *España es bonita.* (L'Espagne est belle.) ; *Vivo en Francia.* ; *Andalucía está en el sur.* ; *Europa*, *África*.

## L'adjectif s'accorde
| | Singulier | Pluriel |
|---|---|---|
| Masculin | un gato negr**o** | unos gatos negr**os** |
| Féminin | una gata negr**a** | unas gatas negr**as** |

L'adjectif se place en général **après** le nom : *un perro pequeño*, *una casa grande*.

>! **Exemple résolu** — mets au pluriel « el ratón gris » : *ratón* finit par n → *ratones* ; *gris* finit par s (consonne) → *grises* ; *el* → *los*. Résultat : **los ratones grises**.

> **À retenir** : el, la, los, las / un, una, unos, unas ; -o masculin, -a féminin (sauf el día, el mapa, la mano...) ; pluriel : voyelle + s, consonne + es, z → ces ; pas de partitif (bebo agua).
`,
      exercices: [
        { type: "saisie", question: "Mets l'article défini (le, la) : « ... canción »", reponses: ["la"], explication: "Les noms en **-ción** sont féminins : *la canción*." },
        { type: "saisie", question: "Mets l'article défini : « ... día »", reponses: ["el"], explication: "*día* finit par -a mais il est masculin : **el día** (*Buenos días*)." },
        { type: "saisie", question: "Mets l'article défini : « ... mano »", reponses: ["la"], explication: "*mano* finit par -o mais il est féminin : **la mano**." },
        { type: "saisie", question: "Écris le pluriel de *la flor*.", reponses: ["las flores", "flores"], explication: "*flor* finit par une consonne → **-es** : *las flores*." },
        { type: "saisie", question: "Écris le pluriel de *el lápiz*.", reponses: ["los lápices", "lápices"], explication: "**z → ces** : *los lápices*." },
        { type: "qcm", question: "Quel nom est féminin en espagnol alors qu'il est masculin en français ?", choix: ["el coche", "el árbol", "la leche", "el mapa"], reponse: 2, explication: "*la leche* = **le lait** : féminin en espagnol. *El coche* (la voiture) fait l'inverse. *El árbol* est masculin dans les deux langues, et *el mapa* (la carte) est masculin en espagnol." },
        { type: "vf", question: "« Je mange du pain » se traduit *Como del pan*.", reponse: false, explication: "Il n'y a pas d'article partitif en espagnol : **Como pan**." },
        { type: "qcm", question: "Quel est le pluriel de *el animal salvaje* (l'animal sauvage) ?", choix: ["los animals salvajes", "los animales salvajes", "las animales salvaje", "los animales salvaje"], reponse: 1, explication: "*animal* finit par une consonne → *animales* ; *salvaje* finit par une voyelle → *salvajes* ; *el* → *los*." },
        { type: "saisie", question: "Accorde : « unas casas (blanco) »", reponses: ["blancas"], explication: "Féminin pluriel : **blancas**." },
        { type: "redaction", question: "Mets ces groupes de mots au pluriel et explique à chaque fois la règle : *el ratón gris*, *la ciudad bonita*, *un pez azul*.", corrige: "- *el ratón gris* → **los ratones grises** : *ratón* et *gris* finissent par une consonne → -es ; l'accent de *ratón* disparaît (on appuie toujours sur *to*, la règle est respectée).\n- *la ciudad bonita* → **las ciudades bonitas** : *ciudad* finit par une consonne → -es ; *bonita* finit par une voyelle → -s.\n- *un pez azul* → **unos peces azules** : z → ces ; *azul* finit par une consonne → -es ; *un* → *unos*." }
      ]
    },
    {
      id: "ser-tener-estar-ir",
      titre: "Quatre verbes indispensables : ser, tener, estar et ir",
      theme: "Grammaire",
      cours: `
## Les pronoms sujets
*yo* (je), *tú* (tu), *él / ella* (il / elle), *nosotros / nosotras* (nous), *vosotros / vosotras* (vous, quand on tutoie plusieurs personnes), *ellos / ellas* (ils / elles).

En espagnol, on **n'écrit presque jamais le pronom sujet** : la terminaison du verbe suffit à savoir qui parle. *Soy francés* = je suis français. On l'ajoute seulement pour insister : *Yo soy francés, ¿y tú?*

## Les quatre verbes au présent
| | ser (être) | tener (avoir) | estar (être) | ir (aller) |
|---|---|---|---|---|
| yo | soy | tengo | estoy | voy |
| tú | eres | tienes | estás | vas |
| él, ella | es | tiene | está | va |
| nosotros/as | somos | tenemos | estamos | vamos |
| vosotros/as | sois | tenéis | estáis | vais |
| ellos, ellas | son | tienen | están | van |

## Deux verbes pour dire « être »
- **ser** sert à dire **qui** ou **comment** est quelqu'un ou quelque chose, de façon durable : le nom, la nationalité, l'origine, le caractère, le physique, la profession. *Soy Lina. Es mexicano. Somos de Lille. Eres muy simpático. Mi madre es profesora.*
- **estar** sert à dire **où** on est et **comment on va** en ce moment. *Madrid está en el centro de España. Estoy en clase. ¿Cómo estás? — Estoy bien. Estoy cansado* (fatigué).

>! **Astuce** : « où ? » → *estar* ; « ça va ? » → *estar* ; presque tout le reste en 6e → *ser*.

## Tener
- avoir, posséder : *Tengo una bici.*
- l'âge : *Tienes once años.*
- des sensations : *tengo hambre* (j'ai faim), *tengo sed* (soif), *tengo frío* (froid), *tengo calor* (chaud), *tengo miedo* (peur), *tengo sueño* (sommeil).

## Ir (aller) + a
- *Voy **a** la playa.* (Je vais à la plage.) — *Vamos **a** Madrid.*
- **a + el = al** : *Voy **al** colegio.* (Je vais au collège.) — *Van **al** cine.*
- *¿Adónde vas?* = Où vas-tu ?

>! **Erreurs fréquentes** : ✗ *Soy cansado* → ✓ *Estoy cansado* ; ✗ *Madrid es en España* → ✓ *Madrid está en España* ; ✗ *Voy a el cine* → ✓ *Voy al cine* ; ✗ *Soy frío* → ✓ *Tengo frío*.

> **À retenir** : soy, eres, es, somos, sois, son ; tengo, tienes, tiene... ; estoy, estás, está... ; voy, vas, va, vamos, vais, van ; ser = qui, comment (durable) ; estar = où, comment ça va ; a + el = al.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *ser* : « Nosotros ... de Marsella. »", reponses: ["somos"], explication: "*ser* : soy, eres, es, **somos**, sois, son." },
        { type: "saisie", question: "Conjugue *ir* : « Yo ... al colegio en bici. »", reponses: ["voy"], explication: "*ir* : **voy**, vas, va, vamos, vais, van." },
        { type: "saisie", question: "Conjugue *tener* : « Mis primos ... un perro. »", reponses: ["tienen"], explication: "*mis primos* = ellos → **tienen**." },
        { type: "saisie", question: "Conjugue *estar* : « ¿Cómo ... tú? »", reponses: ["estás"], explication: "Pour demander comment on va : **estar** → *¿Cómo estás?* (avec l'accent sur le á)." },
        { type: "qcm", question: "« Sevilla ... en Andalucía. »", choix: ["es", "va", "tiene", "está"], reponse: 3, explication: "Pour dire **où** se trouve une ville : **estar** → *Sevilla está en Andalucía*." },
        { type: "qcm", question: "« Mi abuelo ... muy generoso. »", choix: ["es", "está", "tiene", "va"], reponse: 0, explication: "Le caractère (durable) : **ser** → *Mi abuelo es muy generoso*." },
        { type: "qcm", question: "Comment dit-on « J'ai soif » ?", choix: ["Tengo sed.", "Estoy sed.", "Soy sed.", "Voy sed."], reponse: 0, explication: "Les sensations se disent avec **tener** : *tengo sed*, *tengo hambre*, *tengo frío*." },
        { type: "saisie", question: "Complète : « Los sábados voy ... cine con mi padre. » (au)", reponses: ["al"], explication: "**a + el = al** : *voy al cine*." },
        { type: "vf", question: "« Estoy cansada » peut être dit par une fille fatiguée après le sport.", reponse: true, explication: "Un état passager (fatigue) se dit avec **estar**, et l'adjectif s'accorde : *cansada* pour une fille." },
        { type: "redaction", question: "Écris 5 phrases sur toi aujourd'hui en utilisant **ser**, **estar**, **tener** et **ir** au moins une fois chacun (qui tu es, où tu es, comment tu vas, ce que tu as, où tu vas après).", corrige: "Modèle :\n\n*Me llamo Nolan y soy francés. Hoy es lunes y estoy en el colegio. Estoy un poco cansado y tengo hambre. Tengo clase de español a las diez. Después de clase, voy al parque con mis amigos.*\n\nVérifie :\n- **ser** : nationalité, identité ;\n- **estar** : lieu (*en el colegio*) et état (*cansado*) ;\n- **tener** : sensation (*hambre*), possession ;\n- **ir a** / **al** + lieu." }
      ]
    },
    {
      id: "presente-tres-grupos",
      titre: "Le présent des verbes en -ar, -er et -ir",
      theme: "Grammaire",
      cours: `
## Trois familles de verbes
À l'infinitif, les verbes espagnols se terminent par **-ar** (*cantar*, chanter), **-er** (*comer*, manger) ou **-ir** (*vivir*, vivre, habiter).

Pour conjuguer au présent : on enlève **-ar, -er, -ir** et on ajoute la terminaison de la personne.

| | cantar | comer | vivir |
|---|---|---|---|
| yo | cant**o** | com**o** | viv**o** |
| tú | cant**as** | com**es** | viv**es** |
| él, ella | cant**a** | com**e** | viv**e** |
| nosotros/as | cant**amos** | com**emos** | viv**imos** |
| vosotros/as | cant**áis** | com**éis** | viv**ís** |
| ellos, ellas | cant**an** | com**en** | viv**en** |

>! **Remarque** : avec **yo**, c'est toujours **-o** dans les trois familles. Les verbes en -er et en -ir ne se distinguent qu'avec *nosotros* et *vosotros*.

## Des verbes réguliers pour parler de toi
- en **-ar** : *bailar* (danser), *nadar* (nager), *dibujar* (dessiner), *escuchar* (écouter), *mirar* (regarder), *hablar* (parler), *estudiar* (étudier), *trabajar* (travailler), *desayunar* (prendre le petit-déjeuner), *cenar* (dîner), *llegar* (arriver).
- en **-er** : *beber* (boire), *leer* (lire), *aprender* (apprendre), *correr* (courir), *comprender* (comprendre).
- en **-ir** : *escribir* (écrire), *abrir* (ouvrir), *vivir* (vivre, habiter), *compartir* (partager), *subir* (monter).

## La négation : no
On place **no** juste **avant** le verbe : *No bailo.* (Je ne danse pas.) — *Mi hermano no lee cómics.* — Il n'y a pas de deuxième mot comme le « pas » français.

## La question
L'ordre des mots ne change pas : seuls les signes **¿ ?** (et l'intonation à l'oral) montrent que c'est une question. *¿Hablas inglés?* = Est-ce que tu parles anglais ? / Parles-tu anglais ? — Le « est-ce que » ne se traduit pas.

>! **Méthode en 3 étapes** — conjuguer *escribir* avec *nosotros* :
1. famille : -ir ;
2. radical : *escrib-* ;
3. terminaison de *nosotros* en -ir : **-imos** → *escribimos*.

>! **Erreurs fréquentes** : ✗ *yo canta* → ✓ *yo canto* ; ✗ *nosotros vivemos* → ✓ *vivimos* ; ✗ *No canto pas* → ✓ *No canto*.

> **À retenir** : -ar : o, as, a, amos, áis, an ; -er : o, es, e, emos, éis, en ; -ir : o, es, e, imos, ís, en ; no avant le verbe ; ¿ ? suffisent pour poser une question.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *bailar* : « Yo ... flamenco. »", reponses: ["bailo"], explication: "-ar, yo → **-o** : *bailo*." },
        { type: "saisie", question: "Conjugue *dibujar* : « Tú ... muy bien. »", reponses: ["dibujas"], explication: "-ar, tú → **-as** : *dibujas*." },
        { type: "saisie", question: "Conjugue *beber* : « Mi hermana ... leche. »", reponses: ["bebe"], explication: "-er, él/ella → **-e** : *bebe*." },
        { type: "saisie", question: "Conjugue *vivir* : « Nosotros ... en Burdeos. »", reponses: ["vivimos"], explication: "-ir, nosotros → **-imos** : *vivimos*." },
        { type: "saisie", question: "Conjugue *nadar* : « Mis amigos ... en el mar. »", reponses: ["nadan"], explication: "*mis amigos* = ellos ; -ar → **-an** : *nadan*." },
        { type: "qcm", question: "Quelle forme correspond à « vous lisez » (vosotros) ?", choix: ["leéis", "lees", "leen", "leís"], reponse: 0, explication: "*leer* est en -er : vosotros → **-éis** : *leéis*." },
        { type: "qcm", question: "Comment dit-on « Je ne regarde pas la télé » ?", choix: ["Miro no la tele.", "No miro la tele.", "No miro pas la tele.", "Yo miro no la tele."], reponse: 1, explication: "**no** juste avant le verbe, et rien d'autre : *No miro la tele*." },
        { type: "saisie", question: "Traduis : « Est-ce que tu parles espagnol ? »", reponses: ["¿Hablas español?", "Hablas español", "¿Tú hablas español?", "Tú hablas español", "¿Hablas tú español?", "Hablas tú español"], explication: "« Est-ce que » ne se traduit pas : **¿Hablas español?**" },
        { type: "vf", question: "*Escribo* et *como* se terminent par -o parce que c'est toujours la terminaison de *yo* au présent des verbes réguliers.", reponse: true, explication: "Avec **yo**, la terminaison est **-o** dans les trois familles : *canto, como, vivo, escribo*." },
        { type: "redaction", question: "Écris 6 phrases sur ce que tu fais (et ne fais pas) dans la semaine, avec au moins un verbe en -ar, un en -er, un en -ir, une négation et une question à un ami.", corrige: "Modèle :\n\n*Vivo en Lille con mi familia. Los lunes estudio inglés y español. Por la tarde, escucho música y dibujo. Leo muchos cómics, pero no leo novelas. Mi hermano no baila: prefiere nadar en la piscina. Y tú, ¿bailas o nadas?*\n\nVérifie :\n- terminaison **-o** avec *yo*, **-a / -e** avec *él* ;\n- **no** juste avant le verbe ;\n- **¿ ?** pour la question, sans « est-ce que »." }
      ]
    },
    {
      id: "preguntar",
      titre: "Poser des questions : qué, quién, dónde, cuándo, cuántos...",
      theme: "Grammaire",
      cours: `
## Les mots interrogatifs
| Espagnol | Français | Exemple |
|---|---|---|
| ¿Qué...? | Que ? Quoi ? Quel ? | *¿Qué haces?* (Que fais-tu ?) |
| ¿Quién...? / ¿Quiénes...? | Qui ? | *¿Quién es?* (Qui est-ce ?) |
| ¿Dónde...? | Où ? | *¿Dónde está el gato?* |
| ¿De dónde...? | D'où ? | *¿De dónde eres?* |
| ¿Adónde...? | Où (avec mouvement) ? | *¿Adónde vas?* |
| ¿Cuándo...? | Quand ? | *¿Cuándo es la fiesta?* |
| ¿Cómo...? | Comment ? | *¿Cómo te llamas?* |
| ¿Cuánto / cuánta...? | Combien ? | *¿Cuánto cuesta?* |
| ¿Cuántos / cuántas...? | Combien de... ? | *¿Cuántos hermanos tienes? ¿Cuántas clases tienes?* |
| ¿Por qué...? | Pourquoi ? | *¿Por qué estudias español?* |
| ¿Cuál...? / ¿Cuáles...? | Lequel ? Quel ? | *¿Cuál es tu color favorito?* |

## Trois règles d'or
1. Les mots interrogatifs portent **toujours un accent écrit** : *qué, quién, dónde, cuándo, cómo, cuánto, cuál*.
2. La question s'ouvre avec **¿** et se ferme avec **?**.
3. *Cuántos* s'accorde avec le nom qui suit : *¿Cuántos perros...?* (masculin) / *¿Cuántas hermanas...?* (féminin).

## Pourquoi ? Parce que !
- **¿Por qué?** (deux mots, accent) = pourquoi ?
- **porque** (un seul mot, sans accent) = parce que.
- *¿Por qué estudias español? — **Porque** me gusta mucho y quiero ir a México.*

## Qué ou cuál ?
- *¿Qué...?* + nom : *¿Qué deporte practicas?* (Quel sport pratiques-tu ?)
- *¿Cuál es...?* devant le verbe *ser* : *¿Cuál es tu número de teléfono?* (Quel est ton numéro ?)

>! **Méthode pour trouver la question** : regarde la réponse et cherche l'information demandée.
- *Vivo en Lyon.* → un lieu → *¿Dónde vives?*
- *Tengo dos gatos.* → un nombre → *¿Cuántos gatos tienes?*
- *Es mi tía.* → une personne → *¿Quién es?*

>! **Erreurs fréquentes** : ✗ *¿Donde vives?* (sans accent) → ✓ *¿Dónde vives?* ; ✗ *¿Porque?* → ✓ *¿Por qué?* ; ✗ *¿Cuántos hermanas?* → ✓ *¿Cuántas hermanas?*

> **À retenir** : qué, quién, dónde, cuándo, cómo, cuánto(s), cuál toujours avec un accent ; ¿por qué? = pourquoi ? / porque = parce que ; cuántos / cuántas s'accorde.
`,
      exercices: [
        { type: "saisie", question: "Complète avec le mot interrogatif : « ¿... vives? — Vivo en Toulouse. »", reponses: ["Dónde"], explication: "La réponse est un lieu → **¿Dónde vives?** (avec l'accent sur le ó)." },
        { type: "saisie", question: "Complète : « ¿... es tu cumpleaños? — El tres de mayo. »", reponses: ["Cuándo"], explication: "La réponse est une date → **¿Cuándo?**" },
        { type: "saisie", question: "Complète : « ¿... hermanas tienes? — Tengo dos hermanas. »", reponses: ["Cuántas"], explication: "Un nombre, et *hermanas* est féminin pluriel → **¿Cuántas?**" },
        { type: "qcm", question: "« ¿Quién es? » signifie :", choix: ["Qu'est-ce que c'est ?", "Où est-il ?", "Qui est-ce ?", "Comment est-il ?"], reponse: 2, explication: "**quién** = qui. *Qu'est-ce que c'est ?* = *¿Qué es?*" },
        { type: "qcm", question: "Quelle est la bonne réponse à « ¿Por qué estudias español? » ?", choix: ["Porque me gusta mucho.", "Por qué me gusta mucho.", "Sí, estudio español.", "Estudio en el colegio."], reponse: 0, explication: "« Parce que » = **porque**, en un seul mot et sans accent." },
        { type: "vf", question: "Dans une question, *donde* s'écrit sans accent : *¿Donde está?*", reponse: false, explication: "Les mots interrogatifs portent toujours un accent écrit : **¿Dónde está?**" },
        { type: "qcm", question: "Quelle question correspond à la réponse « Me llamo Paula » ?", choix: ["¿Quién te llamas?", "¿Cuál te llamas?", "¿Qué te llamas?", "¿Cómo te llamas?"], reponse: 3, explication: "On demande le prénom avec **¿Cómo te llamas?** (littéralement : comment t'appelles-tu ?)." },
        { type: "saisie", question: "Complète : « ¿... es tu color favorito? — El azul. »", reponses: ["Cuál"], explication: "Devant *es* (verbe ser) pour choisir : **¿Cuál es...?**" },
        { type: "saisie", question: "Traduis : « Combien ça coûte ? »", reponses: ["¿Cuánto cuesta?", "Cuánto cuesta"], explication: "**¿Cuánto cuesta?** — *Cuesta dos euros.*" },
        { type: "redaction", question: "Tu vas interviewer une nouvelle élève espagnole, Carmen. Écris 6 questions différentes en espagnol (avec 6 mots interrogatifs différents), puis invente ses réponses.", corrige: "Modèle :\n\n1. *¿Cómo te llamas?* — *Me llamo Carmen.*\n2. *¿Cuántos años tienes?* — *Tengo once años.*\n3. *¿De dónde eres?* — *Soy de Granada, en Andalucía.*\n4. *¿Cuándo es tu cumpleaños?* — *Es el ocho de julio.*\n5. *¿Qué deporte practicas?* — *Practico el baloncesto.*\n6. *¿Por qué vives en Francia?* — *Porque mi madre trabaja aquí.*\n\nVérifie : **¿ ?** ; accent sur chaque mot interrogatif ; *porque* sans accent dans la réponse." }
      ]
    },
    {
      id: "aficiones-gustos",
      titre: "Mes loisirs et mes goûts : me gusta, me encanta",
      theme: "Axe 2 : Le quotidien : vivre, jouer, apprendre",
      cours: `
## Les loisirs (el tiempo libre)
| Espagnol | Français |
|---|---|
| jugar al fútbol / al baloncesto / al tenis | jouer au foot / au basket / au tennis |
| jugar a los videojuegos | jouer aux jeux vidéo |
| tocar la guitarra / el piano | jouer de la guitare / du piano |
| montar en bici / a caballo | faire du vélo / du cheval |
| nadar, bailar, dibujar, cantar | nager, danser, dessiner, chanter |
| leer cómics / libros | lire des BD / des livres |
| ver la tele / series | regarder la télé / des séries |
| escuchar música | écouter de la musique |
| salir con mis amigos | sortir avec mes amis |
| hacer deporte | faire du sport |

>! **Deux verbes pour « jouer »** : **jugar** pour un sport ou un jeu (*juego al fútbol*), **tocar** pour un instrument (*toco la guitarra*). *jugar* change de voyelle : *juego, juegas, juega, jugamos, jugáis, juegan*. Et on dit *jugar **al*** (a + el) : *juego al tenis*.

## Dire ce qu'on aime
Pour dire « j'aime », on dit littéralement « ça me plaît » :
- **me gusta** + un nom au singulier ou un verbe à l'infinitif : *Me gusta el fútbol. Me gusta nadar.*
- **me gustan** + un nom au pluriel : *Me gustan los cómics. Me gustan los animales.*
- **te gusta(n)** = tu aimes ; **le gusta(n)** = il / elle aime : *¿Te gusta bailar? A mi hermano le gustan los videojuegos.*

## Nuancer
| Plus ou moins | Exemple |
|---|---|
| me encanta(n) (j'adore) | *Me encanta dibujar.* |
| me gusta(n) mucho | *Me gustan mucho los perros.* |
| me gusta(n) | *Me gusta leer.* |
| no me gusta(n) mucho | *No me gusta mucho el tenis.* |
| no me gusta(n) nada (je déteste) | *No me gustan nada las arañas.* (les araignées) |

- **Prefiero** + nom ou infinitif = je préfère : *Prefiero el baloncesto.*
- **mi deporte favorito** / **mi actividad favorita** = mon sport préféré / mon activité préférée.

## Réagir
- *¡A mí también!* = Moi aussi ! (après une phrase positive : *Me gusta nadar.* — *¡A mí también!*)
- *¡A mí tampoco!* = Moi non plus ! (après une phrase négative : *No me gusta el tenis.* — *¡A mí tampoco!*)
- Pour justifier : **porque** : *Me encanta el baloncesto porque es divertido.*

>! **Erreurs fréquentes** : ✗ *Yo gusto el fútbol* → ✓ *Me gusta el fútbol* ; ✗ *Me gusta los cómics* → ✓ *Me gustan los cómics* ; ✗ *Juego la guitarra* → ✓ *Toco la guitarra*.

> **À retenir** : me gusta + singulier ou infinitif ; me gustan + pluriel ; me encanta = j'adore ; no me gusta nada = je déteste ; jugar al (sport) / tocar (instrument) ; a mí también / a mí tampoco.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *gusta* ou *gustan* : « Me ... los perros. »", reponses: ["gustan"], explication: "*los perros* est au pluriel → **gustan**." },
        { type: "saisie", question: "Complète avec *gusta* ou *gustan* : « Me ... dibujar. »", reponses: ["gusta"], explication: "Devant un infinitif → **gusta**." },
        { type: "qcm", question: "Comment dit-on « Je joue de la guitare » ?", choix: ["Juego la guitarra.", "Toco la guitarra.", "Juego a la guitarra.", "Hago la guitarra."], reponse: 1, explication: "Pour un instrument, on emploie **tocar** : *Toco la guitarra*. *Jugar* est réservé aux sports et aux jeux." },
        { type: "saisie", question: "Complète : « Los miércoles juego ... baloncesto. » (au)", reponses: ["al"], explication: "*jugar a* + *el baloncesto* → **al** baloncesto." },
        { type: "saisie", question: "Conjugue *jugar* : « Mi hermano ... a los videojuegos. »", reponses: ["juega"], explication: "*jugar* change de voyelle : juego, juegas, **juega**..." },
        { type: "qcm", question: "« No me gustan nada las arañas. » Que ressent la personne pour les araignées ?", choix: ["Elle les adore.", "Elle les aime un peu.", "Elle les déteste.", "Elle n'en a jamais vu."], reponse: 2, explication: "**no me gusta(n) nada** = je n'aime pas du tout → je déteste." },
        { type: "qcm", question: "Ton ami dit : « No me gusta el fútbol. » Toi non plus. Tu réponds :", choix: ["¡A mí también!", "¡A mí sí!", "¡Me encanta!", "¡A mí tampoco!"], reponse: 3, explication: "Après une phrase négative, « moi non plus » = **¡A mí tampoco!**" },
        { type: "saisie", question: "Traduis : « J'adore nager. »", reponses: ["Me encanta nadar", "A mí me encanta nadar"], explication: "**Me encanta** + infinitif : *Me encanta nadar*." },
        { type: "vf", question: "« A mi madre le gusta leer » signifie « Ma mère aime lire ».", reponse: true, explication: "**le gusta** = il / elle aime. *A mi madre* précise de qui on parle." },
        { type: "redaction", question: "Réponds à ce message d'un correspondant mexicain (6 phrases) : « ¿Qué haces en tu tiempo libre? ¿Qué te gusta? ¿Qué no te gusta? » Utilise me encanta, me gusta(n), no me gusta(n) nada, prefiero et porque.", corrige: "Modèle :\n\n*¡Hola, Diego! En mi tiempo libre, juego al baloncesto con mis amigos y toco el piano. Me encanta el baloncesto porque es muy divertido. También me gustan los cómics y los videojuegos. No me gusta nada ver la tele: prefiero salir con mis amigos. ¿Y a ti? ¿Qué te gusta?*\n\nVérifie :\n- **gusta** + singulier ou infinitif, **gustan** + pluriel ;\n- **jugar al** pour un sport, **tocar** pour un instrument ;\n- **porque** pour justifier." }
      ]
    },
    {
      id: "dia-colegio-espana",
      titre: "Ma journée et l'école en Espagne : l'heure, les matières, les repas",
      theme: "Axe 2 : Le quotidien : vivre, jouer, apprendre",
      cours: `
## Dire l'heure
- *¿Qué hora es?* = Quelle heure est-il ?
- 1 h : **Es la una.** — À partir de 2 h : **Son las** dos, las tres, las diez...
- *y cuarto* (et quart), *y media* (et demie), *menos cuarto* (moins le quart) : *Son las ocho y media* (8 h 30), *Son las cinco menos cuarto* (4 h 45).
- *¿A qué hora...?* = À quelle heure... ? → *A las ocho.*
- *por la mañana* (le matin), *por la tarde* (l'après-midi), *por la noche* (le soir).

## Ma journée
*Me levanto a las siete* (je me lève). *Desayuno* (je prends le petit-déjeuner). *Voy al colegio a las ocho.* *Como en el comedor* (je déjeune à la cantine). *Vuelvo a casa a las cinco* (je rentre). *Hago los deberes* (je fais mes devoirs). *Ceno* (je dîne). *Me acuesto a las nueve y media* (je me couche).

*Me levanto* et *me acuesto* sont des verbes avec **me** (comme « je **me** lève » en français).

## Les matières (las asignaturas)
*las matemáticas, el francés, el inglés, el español, la historia, la geografía, las ciencias, la música, la educación física* (le sport), *la tecnología, el dibujo / la plástica* (les arts plastiques).

- *Mi asignatura favorita es la música.* — *Me gustan las matemáticas.* (pluriel → *gustan*)
- *el horario* = l'emploi du temps ; *el recreo* = la récréation ; *el examen* = le contrôle ; *los deberes* = les devoirs.

## L'école en Espagne
- À 11 ans, un enfant espagnol est encore à l'école primaire : il est en **6.º de Primaria** (*sexto de Primaria*). Il entre au collège (**la ESO**, *Educación Secundaria Obligatoria*) à 12 ans, en *1.º de ESO*, dans un établissement appelé **el instituto**. En classe d'espagnol, on emploie souvent *el colegio* pour parler de ton collège : les deux se comprennent.
- Les notes vont de **0 à 10** ; il faut **5** pour avoir la moyenne (*aprobado*).
- Les grandes vacances d'été sont longues : environ de la fin juin à la mi-septembre (les dates changent selon les régions).

## Les repas en Espagne : plus tard qu'en France !
| Repas | Heure habituelle | Exemple |
|---|---|---|
| el desayuno | vers 7 h 30 – 8 h | *tostadas* (tartines grillées), *un vaso de leche*, *un zumo* (jus) |
| el almuerzo / el bocadillo | vers 11 h, à la récréation | un *bocadillo* (sandwich) ; dans certaines régions et en Amérique latine, *el almuerzo* désigne le déjeuner |
| la comida | vers **14 h – 15 h** | le repas principal |
| la merienda | vers 18 h | le goûter |
| la cena | vers **21 h – 22 h** | le dîner |

>! **Attention** : *la comida* = la nourriture, mais aussi le **déjeuner** ; *comer* = manger, et aussi « déjeuner ». *¿A qué hora comes?* = À quelle heure déjeunes-tu ?

>! **Erreurs fréquentes** : ✗ *Son la una* → ✓ *Es la una* ; ✗ *Es las tres* → ✓ *Son las tres* ; ✗ *Me gusta las ciencias* → ✓ *Me gustan las ciencias*.

> **À retenir** : es la una / son las dos ; y cuarto, y media, menos cuarto ; me levanto, voy al colegio, como, vuelvo, ceno, me acuesto ; en Espagne : notes sur 10, comida vers 14 h, cena vers 21 h.
`,
      exercices: [
        { type: "qcm", question: "Comment dit-on « Il est 1 h » ?", choix: ["Son las una.", "Es la una.", "Es el uno.", "Son la una."], reponse: 1, explication: "1 h est au singulier : **Es la una**. À partir de 2 h : *Son las dos*." },
        { type: "qcm", question: "« Son las cuatro y media » signifie :", choix: ["4 h 15", "4 h 45", "3 h 30", "4 h 30"], reponse: 3, explication: "*y media* = et demie → **4 h 30**." },
        { type: "saisie", question: "Écris l'heure en espagnol : 10 h 15 (une phrase commençant par *Son las*).", reponses: ["Son las diez y cuarto", "Son las 10 y cuarto"], explication: "*y cuarto* = et quart → **Son las diez y cuarto**." },
        { type: "saisie", question: "Traduis : « Je me lève à sept heures. »", reponses: ["Me levanto a las siete", "Yo me levanto a las siete", "Me levanto a las 7"], explication: "*levantarse* : **me levanto** ; l'heure : **a las** siete." },
        { type: "saisie", question: "Complète avec *gusta* ou *gustan* : « Me ... las matemáticas. »", reponses: ["gustan"], explication: "*las matemáticas* est au pluriel → **gustan**." },
        { type: "qcm", question: "En Espagne, à quelle heure prend-on souvent le repas de midi (*la comida*) ?", choix: ["vers 11 h", "vers 12 h", "vers 17 h", "vers 14 h"], reponse: 3, explication: "*La comida* se prend souvent vers **14 h**, et *la cena* (le dîner) vers 21 h : plus tard qu'en France." },
        { type: "vf", question: "En Espagne, les notes vont de 0 à 20, comme en France.", reponse: false, explication: "En Espagne, les notes vont de **0 à 10** ; avec 5, on a la moyenne (*aprobado*)." },
        { type: "qcm", question: "Que mange un élève espagnol au *recreo* de 11 h ?", choix: ["la cena", "un bocadillo", "la merienda", "el desayuno"], reponse: 1, explication: "À la récréation, beaucoup d'élèves mangent un **bocadillo** (un sandwich dans du pain). *La merienda* est le goûter de 18 h." },
        { type: "vf", question: "Un enfant espagnol de 11 ans est en général encore à l'école primaire.", reponse: true, explication: "Il est en **6.º de Primaria** ; il entre à la ESO (le collège) à 12 ans." },
        { type: "redaction", question: "Raconte ta journée d'école en 6 phrases avec des heures (lever, collège, une matière que tu aimes et pourquoi, déjeuner, retour, coucher), puis écris une phrase pour comparer avec les horaires de repas en Espagne.", corrige: "Modèle :\n\n*Me levanto a las siete y desayuno tostadas. Voy al colegio a las ocho menos cuarto. Mi asignatura favorita es la música porque me encanta cantar. Como en el comedor a las doce. Vuelvo a casa a las cinco y hago los deberes. Ceno a las siete y media y me acuesto a las nueve.*\n\n*En España, la comida es a las dos y la cena a las nueve o a las diez: ¡muy tarde!*\n\nVérifie :\n- **a las** + heure ; *es la una* / *son las...* ;\n- *me levanto*, *me acuesto* avec **me** ;\n- **porque** pour justifier." },
        { type: "saisie", question: "Traduis : « Je déjeune à la cantine. »", reponses: ["Como en el comedor", "Yo como en el comedor"], explication: "*comer* = manger, et aussi **déjeuner** ; la cantine = *el comedor* : **Como en el comedor**." }
      ]
    },
    {
      id: "paisajes-tiempo",
      titre: "La nature, les animaux et la météo",
      theme: "Axe 3 : Pays et paysages",
      cours: `
## Les paysages : le vocabulaire
| Espagnol | Français |
|---|---|
| la montaña / la cordillera | la montagne / la chaîne de montagnes |
| el volcán | le volcan |
| el río | le fleuve, la rivière |
| el lago | le lac |
| el mar / la playa | la mer / la plage |
| la isla | l'île |
| el desierto | le désert |
| la selva | la forêt tropicale |
| el bosque | la forêt, le bois |
| el glaciar | le glacier |
| la catarata | la chute d'eau |
| el pueblo / la ciudad | le village / la ville |

## Se situer : les points cardinaux
*el norte, el sur, el este, el oeste* ; *el centro*.
- On situe avec **estar** : *Bilbao **está en el norte de** España. Sevilla está en el sur.*
- On dit ce qu'il y a avec **hay** : *En Chile **hay** volcanes y un desierto.*
- On décrit avec **ser** : *El desierto de Atacama **es** muy seco.*

## Voyage en Espagne
- Au nord, la **Galice** et les **Asturies** : un paysage vert, il pleut souvent. Les **Pyrénées** (*los Pirineos*) forment la frontière avec la France.
- Au centre, *la Meseta* : un grand plateau, avec Madrid ; il fait très chaud en été et froid en hiver.
- Au sud, l'**Andalousie** : il fait chaud et sec ; Sierra Nevada est enneigée en hiver.
- Dans l'Atlantique, les **îles Canaries** : sur l'île de Tenerife se dresse le volcan **Teide** (3 715 m), le plus haut sommet d'Espagne.

## Voyage en Amérique latine
- **Les Andes** (*los Andes*) : une immense chaîne de montagnes qui longe l'ouest de l'Amérique du Sud. Le plus haut sommet, l'**Aconcagua** (Argentine), dépasse 6 900 m. On y voit des **lamas**, des **alpagas** et le **condor**, un des plus grands oiseaux volants du monde.
- **Le désert d'Atacama** (Chili) : un des déserts les plus secs du monde.
- **La forêt amazonienne** (*la selva amazónica*) : elle s'étend notamment au Pérou, en Colombie, en Équateur et en Bolivie (et surtout au Brésil, où l'on parle portugais). On y trouve des jaguars, des toucans, des singes (*los monos*).
- **Les chutes d'Iguazú** (*las cataratas del Iguazú*), à la frontière entre l'Argentine et le Brésil.
- **Les îles Galápagos** (Équateur) : célèbres pour leurs tortues géantes.
- Le **quetzal**, un oiseau aux longues plumes vertes, est le symbole du **Guatemala** (la monnaie du pays s'appelle aussi le quetzal).

## La météo : ¿Qué tiempo hace?
| Espagnol | Français |
|---|---|
| Hace sol. | Il fait soleil. |
| Hace calor. / Hace frío. | Il fait chaud. / Il fait froid. |
| Hace viento. | Il y a du vent. |
| Hace buen tiempo. / Hace mal tiempo. | Il fait beau. / Il fait mauvais. |
| Llueve. | Il pleut. |
| Nieva. | Il neige. |
| Está nublado. | C'est nuageux. |

>! **Le monde à l'envers** : l'Argentine, le Chili et l'Uruguay sont dans l'hémisphère **sud** : les saisons sont inversées ! En décembre, c'est l'été : à Buenos Aires, *en diciembre hace calor* et on fête Noël en tee-shirt.

>! **Erreurs fréquentes** : ✗ *Hace chaud* → ✓ *Hace calor* ; ✗ *Es frío* (pour la météo) → ✓ *Hace frío* ; ✗ *Bilbao es en el norte* → ✓ *Bilbao está en el norte*.

> **À retenir** : el norte, el sur, el este, el oeste ; estar en (situer), hay (il y a), ser (décrire) ; hace sol, calor, frío, viento ; llueve, nieva ; le Teide (Canaries), les Andes, l'Atacama, l'Amazonie ; saisons inversées dans l'hémisphère sud.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la montagne » (avec l'article)", reponses: ["la montaña"], explication: "**la montaña** (avec ñ)." },
        { type: "qcm", question: "Que veut dire « la selva » ?", choix: ["le désert", "la plage", "le lac", "la forêt tropicale"], reponse: 3, explication: "*la selva* = **la forêt tropicale** (la jungle), comme l'Amazonie. Un bois ou une forêt d'Europe : *el bosque*." },
        { type: "saisie", question: "Complète : « Sevilla está en el ... de España. » (au sud)", reponses: ["sur"], explication: "le sud = **el sur** : *Sevilla está en el sur de España*." },
        { type: "qcm", question: "Quel est le plus haut sommet d'Espagne ?", choix: ["le Mont-Blanc", "l'Aconcagua", "le Teide", "le Popocatépetl"], reponse: 2, explication: "Le **Teide** (3 715 m), un volcan de l'île de Tenerife, aux Canaries. L'Aconcagua est en Argentine, le Popocatépetl au Mexique, le Mont-Blanc entre la France et l'Italie." },
        { type: "qcm", question: "Dans quel pays se trouve le désert d'Atacama ?", choix: ["au Chili", "au Mexique", "en Espagne", "à Cuba"], reponse: 0, explication: "Le désert d'**Atacama**, au nord du **Chili**, est un des plus secs du monde." },
        { type: "saisie", question: "Traduis : « Il fait froid. »", reponses: ["Hace frío", "Hace mucho frío"], explication: "La météo se dit avec **hace** : *Hace frío*." },
        { type: "saisie", question: "Traduis : « Il pleut. »", reponses: ["Llueve"], explication: "**Llueve** (verbe *llover*). Il neige : *Nieva*." },
        { type: "vf", question: "En décembre, à Buenos Aires (Argentine), c'est l'hiver.", reponse: false, explication: "L'Argentine est dans l'hémisphère **sud** : les saisons sont inversées. En décembre, c'est l'**été** et il fait chaud." },
        { type: "qcm", question: "« En los Andes hay llamas y cóndores. » Que signifie cette phrase ?", choix: ["Dans les Andes, il y a des lamas et des condors.", "Les lamas et les condors sont dans les Alpes.", "Dans les Andes, il fait chaud.", "Les Andes s'appellent les lamas."], reponse: 0, explication: "**hay** = il y a. Les lamas, les alpagas et le condor vivent dans la cordillère des Andes." },
        { type: "redaction", question: "Tu es en voyage dans un pays hispanophone (réel). Écris une carte postale de 6 phrases à ta classe : où tu es (estar en), ce qu'il y a (hay), comment est le paysage (ser), le temps qu'il fait (hace, llueve...), et ce que tu aimes.", corrige: "Modèle :\n\n*¡Hola, chicos! Estoy en Tenerife, una isla de las Canarias. En la isla hay playas de arena negra y un volcán enorme: el Teide. Es la montaña más alta de España. Hace sol y hace calor, pero en el Teide hace frío. Me encanta nadar en el mar. ¡Hasta pronto! Un abrazo, Lucas.*\n\nVérifie :\n- **estar en** pour dire où tu es ;\n- **hay** + un / una / des noms sans article ;\n- **hace** + sol, calor, frío ;\n- une formule pour commencer et pour finir (*Un abrazo* = je t'embrasse / amitiés)." }
      ]
    },
    {
      id: "cuentos-leyendas",
      titre: "Contes et légendes du monde hispanophone",
      theme: "Axe 4 : Imaginaire, contes et légendes",
      cours: `
## Les personnages des contes
| Espagnol | Français |
|---|---|
| el rey / la reina | le roi / la reine |
| el príncipe / la princesa | le prince / la princesse |
| el caballero | le chevalier |
| la bruja | la sorcière |
| el hada (las hadas) | la fée (les fées) |
| el dragón | le dragon |
| el gigante | le géant |
| el lobo | le loup |
| el castillo | le château |
| el bosque | la forêt |
| el tesoro | le trésor |
| la varita mágica | la baguette magique |

>! **El hada** est un mot **féminin**, mais au singulier on dit *el* quand le mot commence par un **a** tonique (le son sur lequel on appuie : **ha**-da), pour que ce soit plus facile à prononcer (comme *el agua*). Au pluriel, on revient à *las* : *las hadas*. Et l'adjectif reste au féminin : *el hada buena*.

## Des contes que tu connais déjà
*Caperucita Roja* (le Petit Chaperon rouge), *Blancanieves* (Blanche-Neige), *la Cenicienta* (Cendrillon), *los tres cerditos* (les trois petits cochons), *la Bella Durmiente* (la Belle au bois dormant), *el Gato con Botas* (le Chat botté).

## Les formules des contes
- Pour commencer : **Érase una vez...** ou **Había una vez...** = Il était une fois...
- Pour finir : *... y fueron felices y comieron perdices* (« et ils furent heureux et mangèrent des perdrix », l'équivalent de « ils vécurent heureux... ») ou *Colorín colorado, este cuento se ha acabado* (« et voilà, ce conte est terminé »).

## Trois légendes du monde hispanophone
- **El Ratoncito Pérez** (Espagne et Amérique latine) : quand un enfant perd une dent de lait, il la met sous son oreiller. La nuit, une petite souris, *el Ratoncito Pérez*, l'emporte et laisse une pièce ou un petit cadeau. C'est l'équivalent de notre petite souris ! Son histoire a été écrite vers 1894 par l'écrivain Luis Coloma pour le jeune roi Alphonse XIII, qui avait 8 ans et venait de perdre une dent.
- **San Jorge y el dragón** (Sant Jordi, en Catalogne) : selon la légende, un dragon terrorisait un village : pour le calmer, on lui donnait des habitants tirés au sort, et un jour le sort est tombé sur la princesse. Le chevalier Jordi (Georges) a tué le dragon et, de son sang, est né un rosier. Chaque **23 avril**, en Catalogne, on offre des **roses et des livres** : c'est aussi la Journée mondiale du livre.
- **El Dorado** (Colombie) : les Muiscas, un peuple qui vivait près de l'actuelle Bogotá, avaient une cérémonie : leur nouveau chef, couvert de poudre d'or, montait sur un radeau au milieu du **lac de Guatavita** et jetait des objets en or dans l'eau. Les conquistadors espagnols ont imaginé une ville entièrement en or, *El Dorado*, et l'ont cherchée pendant des années... sans jamais la trouver.

## Raconter au présent
En 6e, tu peux raconter une histoire **au présent** : *Un caballero llega al pueblo. Mira al dragón. El dragón tiene mucho miedo.* Les verbes *Érase* et *Había* (« il était », « il y avait ») sont des temps du passé que tu sauras conjuguer plus tard : pour l'instant, apprends-les comme des formules.

>! **Erreurs fréquentes** : ✗ *la hada* → ✓ *el hada* ; ✗ *Había un vez* → ✓ *Había **una** vez* ; ✗ *la Ceniciente* → ✓ *la Cenicienta*.

> **À retenir** : érase una vez / había una vez ; el rey, la reina, la bruja, el hada, el lobo, el dragón, el castillo, el bosque ; el Ratoncito Pérez (la petite souris), Sant Jordi (23 avril, roses et livres), El Dorado (Colombie, lac de Guatavita).
`,
      textes: {
        perez: `**El Ratoncito Pérez** (texte d'entraînement, d'après la tradition)

Érase una vez un niño que se llama Pablo. Tiene seis años y está muy contento: ¡tiene un diente en la mano! Por la noche, pone el diente debajo de la almohada y se duerme.

A medianoche, un ratón pequeño entra en la habitación. Lleva un sombrero rojo y unas gafas. Es el Ratoncito Pérez. Toma el diente y deja una moneda de oro. Después, sale por la ventana.

Por la mañana, Pablo busca su diente. No hay diente... ¡pero hay una moneda! Pablo corre a la cocina: «¡Mamá, mamá! ¡El Ratoncito Pérez existe!»`,
      },
      exercices: [
        { type: "saisie", question: "Traduis : « la sorcière » (avec l'article)", reponses: ["la bruja"], explication: "**la bruja**. La fée : *el hada*." },
        { type: "qcm", question: "Quel article met-on devant *hada* (fée) au singulier ?", choix: ["la", "el", "lo", "las"], reponse: 1, explication: "*hada* est féminin, mais commence par un **a** tonique (on appuie sur *ha*) : on dit **el hada** au singulier (comme *el agua*), et *las hadas* au pluriel." },
        { type: "saisie", question: "Comment s'appelle Cendrillon en espagnol ?", reponses: ["la Cenicienta", "Cenicienta"], explication: "**la Cenicienta** (de *ceniza*, la cendre)." },
        { type: "qcm", question: "Quelle formule ouvre un conte en espagnol ?", choix: ["Colorín colorado", "Hasta luego", "Comieron perdices", "Érase una vez"], reponse: 3, explication: "**Érase una vez** (ou *Había una vez*) = Il était une fois. *Colorín colorado...* sert à finir." },
        { type: "vf", question: "Le 23 avril, en Catalogne, on offre des roses et des livres en souvenir de la légende de Sant Jordi.", reponse: true, explication: "C'est la fête de **Sant Jordi** : la rose rappelle le rosier né du sang du dragon, et le livre, la Journée mondiale du livre." },
        { type: "qcm", question: "Où est née la légende d'El Dorado ?", choix: ["en Espagne, à Madrid", "au Mexique, chez les Aztèques", "en Colombie, au lac de Guatavita", "en Argentine, dans la Patagonie"], reponse: 2, explication: "La légende vient d'une cérémonie des **Muiscas**, au **lac de Guatavita** (Colombie), où le chef couvert d'or jetait des offrandes dans l'eau." },
        { type: "qcm", texte: "perez", question: "Pourquoi Pablo est-il content au début de l'histoire ?", choix: ["Il a une pièce d'or.", "Il a perdu une dent.", "C'est son anniversaire.", "Il a vu une souris."], reponse: 1, explication: "*¡tiene un diente en la mano!* : il a une dent dans la main → il vient de **perdre une dent**." },
        { type: "vf", texte: "perez", question: "Le Ratoncito Pérez porte un chapeau rouge et des lunettes.", reponse: true, explication: "*Lleva un sombrero rojo y unas gafas.* : **llevar** = porter." },
        { type: "saisie", texte: "perez", question: "Qu'est-ce que le Ratoncito Pérez laisse sous l'oreiller ? Recopie le groupe de mots espagnol du texte.", reponses: ["una moneda de oro", "moneda de oro"], explication: "*Toma el diente y deja **una moneda de oro*** : il prend la dent et laisse une pièce d'or." },
        { type: "redaction", question: "Invente un petit conte en 6 à 8 phrases au présent : commence par *Érase una vez*, présente un personnage (nom, portrait), un problème (un dragon, une sorcière, un loup...), la solution, et termine par une formule de fin.", corrige: "Modèle :\n\n*Érase una vez una princesa que se llama Alba. Es valiente y muy curiosa. Vive en un castillo, cerca de un bosque. En el bosque hay un dragón verde y enorme. El dragón tiene hambre y está muy triste porque no tiene amigos. Alba va al bosque con pan y chocolate. El dragón come y ahora está contento: ¡Alba es su amiga! Y colorín colorado, este cuento se ha acabado.*\n\nVérifie :\n- formule de début et de fin ;\n- verbes au présent bien conjugués (*vive, va, come*) ;\n- **ser** pour le caractère, **estar** pour l'état (*triste, contento*), **tener** pour *hambre*, **hay** pour ce qu'il y a." }
      ]
    },
    {
      id: "arte-emociones",
      titre: "Les sentiments et les artistes",
      theme: "Axe 5 : Arts et expression des sentiments",
      cours: `
## Dire ce que l'on ressent
Pour dire comment on se sent **en ce moment**, on emploie **estar** + adjectif (accordé) :

| Espagnol | Français |
|---|---|
| Estoy contento / contenta. | Je suis content(e). |
| Estoy triste. | Je suis triste. |
| Estoy enfadado / enfadada. | Je suis en colère. |
| Estoy nervioso / nerviosa. | Je suis nerveux, stressé(e). |
| Estoy cansado / cansada. | Je suis fatigué(e). |
| Estoy aburrido / aburrida. | Je m'ennuie. |
| Estoy sorprendido / sorprendida. | Je suis surpris(e). |

Et avec **tener** : *Tengo miedo* (j'ai peur).

- Pour demander : *¿Qué te pasa?* (Qu'est-ce qui t'arrive ?) — *¿Cómo estás?*
- Pour expliquer : *Estoy triste **porque** mi perro está enfermo.*
- Pour s'exclamer : **¡Qué** + adjectif ou nom **!** : *¡Qué bonito!* (Que c'est beau !), *¡Qué miedo!* (Quelle peur !), *¡Qué divertido!* (Que c'est drôle !), *¡Qué pena!* (Quel dommage !).

## Décrire un tableau
| Espagnol | Français |
|---|---|
| el cuadro | le tableau |
| el pintor / la pintora | le peintre / la peintre |
| el retrato / el autorretrato | le portrait / l'autoportrait |
| en el centro | au centre |
| a la izquierda / a la derecha | à gauche / à droite |
| al fondo | au fond |
| en primer plano | au premier plan |

>! **Méthode en 4 étapes**
1. Présenter : *Es un cuadro de Velázquez. Se llama* Las Meninas.
2. Décrire avec **hay** et les mots de position : *En el centro hay una niña. A la derecha hay un perro.*
3. Imaginer les sentiments avec **estar** : *La niña está tranquila.*
4. Donner ton avis : *Me gusta porque los colores son bonitos.* / *Me da un poco de miedo.*

## Quatre artistes du monde hispanophone
- **Diego Velázquez** (Espagne, XVIIe siècle) a peint ***Las Meninas*** en 1656 (musée du Prado, Madrid). Au centre, la petite infante (princesse) Marguerite, entourée de ses demoiselles d'honneur (*las meninas*) ; à gauche, Velázquez s'est peint lui-même devant une grande toile ; au premier plan, un gros chien est couché.
- **Frida Kahlo** (Mexique, 1907-1954) a peint de nombreux **autorretratos** : on la reconnaît à ses sourcils qui se rejoignent, aux fleurs dans ses cheveux, et souvent à des animaux (singes, perroquets). Ses tableaux expriment sa douleur, mais aussi sa force. Sa maison, *la Casa Azul*, est à Mexico.
- **Pablo Picasso** (né à Málaga en 1881) a peint ***Guernica*** en 1937, après le bombardement de la ville basque de Guernica pendant la guerre civile espagnole. Le tableau, en noir, blanc et gris, montre la souffrance et la peur. Il est au musée Reina Sofía, à Madrid.
- **Antoni Gaudí** (architecte, Barcelone) a consacré une grande partie de sa vie à la ***Sagrada Familia***, une immense basilique commencée en 1882 (il en prend la direction en 1883) et toujours en construction aujourd'hui.

## La musique et la danse : le flamenco
Le **flamenco** vient d'**Andalousie** (sud de l'Espagne). Il réunit le chant (*el cante*), la guitare (*el toque*) et la danse (*el baile*), avec les claquements de mains (*las palmas*). Il exprime des sentiments forts : la joie, la tristesse, l'amour. Il est inscrit au patrimoine culturel immatériel de l'UNESCO depuis 2010.

>! **Erreurs fréquentes** : ✗ *Soy triste hoy* → ✓ *Estoy triste hoy* ; ✗ *Estoy miedo* → ✓ *Tengo miedo* ; ✗ *Mi hermana está enfadado* → ✓ *está enfadada*.

> **À retenir** : estar + contento, triste, enfadado, nervioso, cansado ; tener miedo ; ¡Qué bonito! ; en el centro, a la izquierda, a la derecha, al fondo ; Las Meninas (Velázquez), Frida Kahlo, Guernica (Picasso), la Sagrada Familia (Gaudí), le flamenco (Andalousie).
`,
      exercices: [
        { type: "saisie", question: "Traduis : « Je suis triste. »", reponses: ["Estoy triste", "Yo estoy triste"], explication: "Un sentiment du moment se dit avec **estar** : *Estoy triste*." },
        { type: "qcm", question: "Ta sœur est en colère. Tu dis :", choix: ["Mi hermana está enfadada.", "Mi hermana está enfadado.", "Mi hermana es enfadada.", "Mi hermana tiene enfadada."], reponse: 0, explication: "**estar** pour un sentiment passager, et l'adjectif s'accorde au féminin : *está enfadada*." },
        { type: "qcm", question: "Comment dit-on « J'ai peur » ?", choix: ["Estoy miedo.", "Soy miedo.", "Tengo miedo.", "Hago miedo."], reponse: 2, explication: "**Tengo miedo**, comme *tengo hambre*, *tengo frío*." },
        { type: "saisie", question: "Complète l'exclamation : « ¡... bonito! » (Que c'est beau !)", reponses: ["Qué"], explication: "**¡Qué** + adjectif **!** : *¡Qué bonito!* (avec un accent sur *qué*)." },
        { type: "saisie", question: "Traduis : « à gauche »", reponses: ["a la izquierda"], explication: "**a la izquierda** ; à droite : *a la derecha*." },
        { type: "qcm", question: "Qui a peint *Las Meninas* ?", choix: ["Frida Kahlo", "Pablo Picasso", "Diego Velázquez", "Antoni Gaudí"], reponse: 2, explication: "**Velázquez**, en 1656 ; le tableau est au musée du Prado, à Madrid." },
        { type: "vf", question: "Frida Kahlo est une peintre mexicaine connue pour ses autoportraits.", reponse: true, explication: "**Frida Kahlo** (1907-1954) a peint beaucoup d'*autorretratos*, avec des fleurs dans les cheveux et des animaux." },
        { type: "qcm", question: "Pourquoi le tableau *Guernica* de Picasso est-il en noir, blanc et gris ?", choix: ["Picasso n'avait plus de peinture de couleur.", "Pour imiter une photo de vacances.", "Parce que c'est un tableau de nuit de Noël.", "Pour exprimer la douleur et la peur après le bombardement d'une ville."], reponse: 3, explication: "*Guernica* (1937) montre la **souffrance** après le bombardement de la ville basque de Guernica : les couleurs sombres renforcent l'émotion." },
        { type: "qcm", question: "De quelle région d'Espagne vient le flamenco ?", choix: ["la Galice", "la Catalogne", "les Canaries", "l'Andalousie"], reponse: 3, explication: "Le flamenco vient d'**Andalousie**, dans le sud de l'Espagne." },
        { type: "redaction", question: "Choisis un tableau que tu connais (par exemple un autoportrait de Frida Kahlo ou *Las Meninas*) et décris-le en espagnol en 5 à 6 phrases : qui l'a peint, ce qu'il y a et où (hay, en el centro, a la izquierda...), les sentiments des personnages (estar), ton avis avec porque.", corrige: "Modèle (*Las Meninas*) :\n\n*Es un cuadro de Diego Velázquez. Se llama* Las Meninas *y está en el museo del Prado, en Madrid. En el centro hay una niña rubia: es una princesa. A la izquierda está el pintor, Velázquez. En primer plano, a la derecha, hay un perro grande. La princesa está tranquila, pero creo que el perro está aburrido. Me gusta mucho este cuadro porque es muy misterioso.*\n\nVérifie :\n- **hay** pour ce qu'il y a, **estar** pour situer une personne précise (*está el pintor*) ;\n- les mots de position ;\n- **estar** + adjectif accordé pour les sentiments ;\n- **porque** pour justifier ton avis." }
      ]
    },
    {
      id: "leer-escribir",
      titre: "Comprendre un texte et écrire un message",
      theme: "Méthodologie",
      cours: `
## Comprendre un texte en espagnol : 5 réflexes
1. **Regarde d'abord autour du texte** : le titre, l'image, la forme (un message, une affiche, un conte...). Qui écrit ? À qui ?
2. **Repère ce que tu comprends sans dictionnaire** : les noms propres (*Chile*, *Valentina*), les nombres, les dates, et les **mots transparents**, qui ressemblent au français : *la familia*, *el animal*, *la música*, *el museo*, *el chocolate*, *la playa*... (attention, quelques faux amis : *la carta* = la lettre ; *el vaso* = le verre ; *largo* = long).
3. **Cherche les réponses aux questions qui ? où ? quand ? quoi ?**
4. **Ne bloque pas sur un mot** : devine son sens grâce aux mots autour.
5. **Réponds en français** quand la question est en français, avec tes propres mots.

## Écrire un message à un correspondant
| Partie | Exemples |
|---|---|
| Début | *¡Hola, Marta!* ; *Querida Marta:* (Chère Marta) ; *Querido Pablo:* |
| Remercier, réagir | *Gracias por tu mensaje.* ; *¡Qué bien!* |
| Te présenter, raconter | *Me llamo... Vivo en... Me gusta...* |
| Poser des questions | *¿Y tú? ¿Qué te gusta hacer?* |
| Fin | *Un abrazo* (je t'embrasse / amitiés), *Besos* (bisous), *¡Hasta pronto!* (à bientôt), *Escríbeme pronto* (écris-moi vite) |

>! **Attention** : après *Querida Marta*, on met **deux-points** en espagnol, et pas une virgule.

## Transmettre une information (médiation)
Parfois, il faut **expliquer en français** à quelqu'un ce que dit un document espagnol (par exemple à un parent qui ne parle pas espagnol). Ne traduis pas mot à mot : dis l'**essentiel** (qui, quoi, où, quand, combien) avec des phrases simples.

>! **Exemple** : sur une affiche, *Taller de cerámica – sábado 14, a las 11 – gratis* → « Il y a un atelier de céramique samedi 14 à 11 h, c'est gratuit. »

>! **Pour vérifier ton message** : majuscule au début des phrases, **¿ ?** et **¡ !**, accents des mots interrogatifs, accord des adjectifs, *me gusta / me gustan*.

> **À retenir** : titre, image, noms propres, nombres et mots transparents d'abord ; deviner un mot avec le contexte ; message : Querido/a ...: → présentation → questions → Un abrazo / ¡Hasta pronto! ; médiation = l'essentiel en français.
`,
      textes: {
        valentina: `**De:** Valentina **Para:** Clara **Asunto:** ¡Hola desde Chile!

¡Hola, Clara!

Me llamo Valentina y soy tu nueva amiga chilena. Tengo once años y vivo en Valparaíso, una ciudad con un puerto muy grande. Las casas son de muchos colores y están en los cerros (las colinas).

En mi familia somos cuatro: mi padre, mi madre, mi hermano Tomás y yo. Tomás tiene ocho años y es muy divertido. También tenemos una perra que se llama Luna.

Me encanta dibujar y nadar. No me gustan nada las matemáticas, pero me gusta mucho el inglés. Ahora es diciembre: ¡hace mucho calor y estoy de vacaciones!

¿Y tú? ¿Cómo es tu ciudad? ¿Tienes mascota? Escríbeme pronto.

Un abrazo,
Valentina`,
        cartel: `**BIBLIOTECA MUNICIPAL DE TOLEDO**

**¡Gran concurso de cuentos!**

Para niños y niñas de 10 a 13 años.

Escribe un cuento de dragones, brujas o princesas (máximo 2 páginas).

Fecha límite: viernes 23 de abril.

Premio: una bici y diez libros.

¡Participa! Es gratis.`,
      },
      exercices: [
        { type: "qcm", texte: "valentina", question: "D'où écrit Valentina ?", choix: ["de Valence, en Espagne", "de Valparaíso, au Chili", "de Santiago, au Chili", "de Buenos Aires, en Argentine"], reponse: 1, explication: "*vivo en Valparaíso* et *¡Hola desde Chile!* : elle habite **Valparaíso, au Chili**." },
        { type: "vf", texte: "valentina", question: "Valentina a un frère plus âgé qu'elle.", reponse: false, explication: "*Tomás tiene ocho años* et Valentina a onze ans : son frère est **plus jeune**." },
        { type: "saisie", texte: "valentina", question: "Comment s'appelle l'animal de Valentina ? (un mot)", reponses: ["Luna"], explication: "*una perra que se llama **Luna*** : c'est une chienne (*una perra*)." },
        { type: "qcm", texte: "valentina", question: "Quelle matière Valentina n'aime-t-elle pas du tout ?", choix: ["l'anglais", "le dessin", "la natation", "les mathématiques"], reponse: 3, explication: "*No me gustan nada las matemáticas* : elle déteste **les maths**, mais elle aime beaucoup l'anglais." },
        { type: "redaction", texte: "valentina", question: "Explique en français, en 2 phrases, pourquoi Valentina est en vacances et a chaud en décembre.", corrige: "Valentina habite au **Chili**, dans l'**hémisphère sud** : les saisons sont inversées par rapport à la France. En décembre, c'est donc l'**été** là-bas : il fait chaud et ce sont les grandes vacances scolaires." },
        { type: "qcm", texte: "cartel", question: "Qu'est-ce que cette affiche annonce ?", choix: ["un concours d'écriture de contes", "un spectacle de dragons", "une vente de vélos", "la fermeture de la bibliothèque"], reponse: 0, explication: "*¡Gran concurso de cuentos!* : un grand **concours de contes**, organisé par la bibliothèque municipale de Tolède." },
        { type: "saisie", texte: "cartel", question: "Quel est le dernier jour pour participer ? Écris le jour et la date (en chiffres ou en lettres, en français).", reponses: ["vendredi 23 avril", "le vendredi 23 avril", "23 avril", "vendredi vingt-trois avril", "23/04", "vendredi 23/04"], explication: "*Fecha límite: viernes 23 de abril* = date limite : **vendredi 23 avril** (le jour de Sant Jordi, fête du livre !)." },
        { type: "vf", texte: "cartel", question: "Un élève de 6e de 11 ans peut participer au concours.", reponse: true, explication: "*Para niños y niñas de 10 a 13 años* : 11 ans, c'est entre 10 et 13 ans." },
        { type: "redaction", texte: "cartel", question: "**Médiation** — Ton petit cousin de 11 ans ne parle pas espagnol. Explique-lui en français, en 3 ou 4 phrases, ce que dit l'affiche (quoi, pour qui, comment participer, jusqu'à quand, ce qu'on gagne, combien ça coûte).", corrige: "« La bibliothèque de Tolède organise un grand concours de contes pour les enfants de 10 à 13 ans. Il faut écrire un conte de 2 pages maximum, avec des dragons, des sorcières ou des princesses. Tu as jusqu'au vendredi 23 avril pour l'envoyer. Le gagnant reçoit un vélo et dix livres, et c'est gratuit. »\n\nOn n'a pas traduit mot à mot : on a gardé l'essentiel (qui, quoi, quand, combien)." },
        { type: "redaction", texte: "valentina", question: "Réponds au message de Valentina en espagnol (60 à 80 mots) : formule de début, présentation, ta famille, ton animal (ou pas), ce que tu aimes et n'aimes pas, la météo chez toi en décembre, réponse à ses questions, une question pour elle, formule de fin.", corrige: "Modèle :\n\n*Querida Valentina:*\n\n*Gracias por tu mensaje. Me llamo Clara, tengo once años y vivo en Grenoble, en los Alpes. Mi ciudad es bonita y hay muchas montañas. En mi familia somos tres: mi madre, mi hermana y yo. No tengo mascota, pero me gustan mucho los perros. Me encanta leer y esquiar, pero no me gusta nada la natación. Aquí, en diciembre, hace mucho frío y nieva. ¿Qué haces en Navidad?*\n\n*Un abrazo,*\n*Clara*\n\nVérifie : deux-points après *Querida Valentina* ; réponse aux deux questions de Valentina (*¿Cómo es tu ciudad?*, *¿Tienes mascota?*) ; *me gusta / me gustan* ; *hace frío* ; une question avec **¿ ?** ; formule de fin." }
      ]
    },
    {
      id: "verbos-que-cambian",
      titre: "Les verbes qui changent (querer, poder, volver, repetir) et le futur proche",
      theme: "Grammaire",
      cours: `
## Des verbes qui changent de voyelle
Certains verbes très courants changent la voyelle de leur radical avec **yo, tú, él / ella** et **ellos / ellas**. Avec **nosotros** et **vosotros**, ils restent réguliers. Astuce : dans le tableau, les formes qui changent dessinent une « botte ».

| | querer (vouloir) : e → ie | poder (pouvoir) : o → ue | repetir (répéter) : e → i |
|---|---|---|---|
| yo | qu**ie**ro | p**ue**do | rep**i**to |
| tú | qu**ie**res | p**ue**des | rep**i**tes |
| él, ella | qu**ie**re | p**ue**de | rep**i**te |
| nosotros/as | queremos | podemos | repetimos |
| vosotros/as | queréis | podéis | repetís |
| ellos, ellas | qu**ie**ren | p**ue**den | rep**i**ten |

Les terminaisons, elles, sont celles que tu connais déjà (-ar, -er, -ir).

## Les verbes à connaître
- **e → ie** : *querer* (vouloir), *empezar* (commencer), *entender* (comprendre), *preferir* (préférer), *pensar* (penser), *cerrar* (fermer).
- **o → ue** : *poder* (pouvoir), *volver* (revenir, rentrer), *dormir* (dormir), *contar* (compter, raconter), *costar* (coûter). Et *jugar* fait **u → ue** : *juego*.
- **e → i** : *repetir* (répéter), *pedir* (demander, commander), *decir* (dire). Attention : *decir* est aussi irrégulier avec yo : **digo**, dices, dice, decimos, decís, dicen.

Tu en connais déjà beaucoup : *No entiendo. ¿Puede repetir? Prefiero el baloncesto. Vuelvo a casa a las cinco. Juego al fútbol. ¿Cuánto cuesta?*

>! **Méthode en 3 étapes** — conjuguer *volver* avec *ellos* :
1. famille : -er → terminaison de *ellos* : **-en** ;
2. *ellos* est dans la « botte » → le **o** devient **ue** ;
3. résultat : **vuelven**. (Avec *nosotros* : pas de changement → *volvemos*.)

## Querer et poder + infinitif
- *Quiero ir al cine.* (Je veux aller au cinéma.)
- *¿Puedes jugar conmigo?* (Tu peux jouer avec moi ?) — *No puedo, tengo clase.*

## Le futur proche : ir a + infinitif
Pour dire ce que tu **vas faire** : **ir** conjugué + **a** + infinitif.
- *Voy a estudiar.* (Je vais étudier.) — *Mañana vamos a jugar al fútbol.*
- *¿Qué vas a hacer el sábado?* (Qu'est-ce que tu vas faire samedi ?) — *Voy a visitar a mis abuelos.*
- Mots utiles : *mañana* (demain), *esta tarde* (cet après-midi), *este fin de semana* (ce week-end), *el sábado* (samedi).

>! **Erreurs fréquentes** : ✗ *quieremos* → ✓ *queremos* (pas de changement avec nosotros) ; ✗ *yo podo* → ✓ *yo puedo* ; ✗ *yo dico* → ✓ *yo digo* ; ✗ *Voy jugar* → ✓ *Voy **a** jugar*.

> **À retenir** : e → ie (quiero, empiezo, entiendo, prefiero), o → ue (puedo, vuelvo, duermo, cuesta), e → i (repito, pido, digo), sauf avec nosotros et vosotros ; futur proche : voy / vas / va / vamos / vais / van + a + infinitif.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *poder* : « Yo no ... ir al parque hoy. »", reponses: ["puedo"], explication: "*poder* : o → ue avec yo → **puedo**." },
        { type: "saisie", question: "Conjugue *querer* : « ¿Tú ... un helado? »", reponses: ["quieres"], explication: "*querer* : e → ie avec tú → **quieres**." },
        { type: "saisie", question: "Conjugue *volver* : « Mis padres ... a casa a las seis. »", reponses: ["vuelven"], explication: "*mis padres* = ellos, dans la « botte » : o → ue, terminaison -en → **vuelven**." },
        { type: "qcm", question: "Quelle est la forme de *empezar* avec *nosotros* ?", choix: ["empiezamos", "empiezan", "empezamos", "empiezáis"], reponse: 2, explication: "Avec **nosotros**, le radical ne change pas : **empezamos**. (*empiezo, empiezas, empieza... empiezan* avec les autres personnes.)" },
        { type: "saisie", question: "Conjugue *repetir* : « Yo ... la frase en voz alta. »", reponses: ["repito"], explication: "*repetir* : e → i avec yo → **repito**." },
        { type: "vf", question: "Avec *nosotros*, *dormir* garde son **o** : *dormimos*.", reponse: true, explication: "Nosotros et vosotros sont hors de la « botte » : **dormimos**, *dormís*. Mais : *duermo, duermes, duerme, duermen*." },
        { type: "saisie", question: "Conjugue *decir* : « Yo siempre ... la verdad. » (je dis)", reponses: ["digo"], explication: "*decir* est irrégulier avec yo : **digo** (puis *dices, dice, decimos, decís, dicen*)." },
        { type: "saisie", question: "Traduis : « Je vais jouer au foot. »", reponses: ["Voy a jugar al fútbol", "Yo voy a jugar al fútbol"], explication: "Futur proche : **voy a** + infinitif ; jouer à un sport : *jugar **al** fútbol*." },
        { type: "qcm", question: "Ton ami te demande : « ¿Qué vas a hacer este fin de semana? ». Quelle réponse est correcte ?", choix: ["Voy visitar a mis abuelos.", "Voy a visitar a mis abuelos.", "Va a visitar a mis abuelos.", "Vas a visitar a mis abuelos."], reponse: 1, explication: "Tu parles de toi : **voy** (yo), puis **a** + infinitif : *Voy a visitar a mis abuelos*. Sans *a*, la phrase est fausse ; *va* et *vas* ne sont pas la forme de yo." },
        { type: "redaction", question: "Ta correspondante te propose de faire quelque chose samedi. Réponds-lui en 5 phrases : ce que tu veux faire (quiero), ce que tu ne peux pas faire et pourquoi (no puedo... porque), et ton programme du week-end avec le futur proche (voy a / vamos a + infinitif).", corrige: "Modèle :\n\n*¡Hola, Marta! El sábado por la mañana no puedo salir porque tengo clase de música. Pero por la tarde quiero ir al cine contigo. Después, vamos a comer en casa de mis abuelos. El domingo voy a jugar al baloncesto y voy a hacer los deberes. ¿Y tú, qué vas a hacer?*\n\nVérifie :\n- **quiero / puedo** (o → ue, e → ie) + infinitif ;\n- **ir a** + infinitif, sans oublier le **a** ;\n- **porque** pour expliquer ;\n- **¿ ?** pour la question finale." }
      ]
    },
    {
      id: "casa-ropa-cuerpo",
      titre: "Ma maison, mes vêtements et mon corps",
      theme: "Axe 2 : Le quotidien : vivre, jouer, apprendre",
      cours: `
## Ma maison
*Vivo en una casa* (une maison) / *en un piso* (un appartement).

| Espagnol | Français |
|---|---|
| la cocina | la cuisine |
| el salón | le salon |
| el comedor | la salle à manger (et la cantine) |
| el baño | la salle de bains, les toilettes |
| mi habitación (mi cuarto) | ma chambre |
| el jardín / el patio | le jardin / la cour |
| la puerta / la ventana | la porte / la fenêtre |
| la cama / el armario | le lit / l'armoire |

## Situer : ¿dónde está?
On situe avec **estar** et un mot de position :

| Espagnol | Français |
|---|---|
| encima de | sur |
| debajo de | sous |
| al lado de | à côté de |
| delante de / detrás de | devant / derrière |
| entre | entre |
| aquí / allí | ici / là-bas |

- *El gato está debajo de la cama.* — *¿Dónde están mis gafas? — Están encima de la mesa.*
- **de + el = del** : *al lado **del** armario*.
- **hay** ou **estar** ? *Hay* présente quelque chose de nouveau (avec *un, una*, un nombre ou rien) : *En mi habitación **hay** una cama.* ; *estar* situe quelque chose de connu (avec *el, la*, un prénom) : ***La** cama **está** al lado de la ventana.*

## Les vêtements (la ropa)
*los pantalones* (le pantalon), *los vaqueros* (le jean), *la camiseta* (le tee-shirt), *la camisa* (la chemise), *el jersey* (le pull), *el chándal* (le survêtement), *la falda* (la jupe), *el vestido* (la robe), *las zapatillas* (les baskets), *los zapatos* (les chaussures), *el bañador* (le maillot de bain), *el abrigo* (le manteau), *la gorra* (la casquette).

- Pour dire ce que tu portes : **llevar** : *Hoy llevo una camiseta roja y unos vaqueros azules.*
- La couleur se place après le nom et s'accorde.

## Le corps (el cuerpo)
*la cabeza* (la tête), *los ojos* (les yeux), *la nariz* (le nez), *la boca* (la bouche), *las orejas* (les oreilles), *los brazos* (les bras), *las manos* (les mains), *las piernas* (les jambes), *los pies* (les pieds), *la espalda* (le dos).

>! **J'ai mal** : *doler* fonctionne comme *gustar*. **Me duele** + un nom singulier : *Me duele la cabeza.* (J'ai mal à la tête.) — **Me duelen** + un nom pluriel : *Me duelen los pies.* (J'ai mal aux pieds.)

>! **Erreurs fréquentes** : ✗ *El gato hay debajo de la cama* → ✓ *El gato está debajo de la cama* ; ✗ *al lado de el armario* → ✓ *al lado del armario* ; ✗ *una camiseta rojo* → ✓ *una camiseta roja* ; ✗ *Me duele los pies* → ✓ *Me duelen los pies*.

> **À retenir** : la cocina, el salón, el baño, mi habitación ; estar + encima de, debajo de, al lado de, delante de, detrás de ; hay (quelque chose de nouveau) / estar (quelque chose de connu) ; llevar + vêtement ; me duele (singulier) / me duelen (pluriel).
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la cuisine » (avec l'article)", reponses: ["la cocina"], explication: "**la cocina**. Attention : *cocinar* = faire la cuisine." },
        { type: "qcm", question: "« El perro está debajo de la mesa. » Où est le chien ?", choix: ["sur la table", "à côté de la table", "sous la table", "derrière la table"], reponse: 2, explication: "**debajo de** = sous. Sur = *encima de* ; à côté de = *al lado de* ; derrière = *detrás de*." },
        { type: "saisie", question: "Complète : « Mis zapatillas están al lado ... armario. » (de + el)", reponses: ["del"], explication: "**de + el = del** : *al lado del armario*." },
        { type: "qcm", question: "Complète : « En el salón ... un sofá grande. »", choix: ["está", "es", "tiene", "hay"], reponse: 3, explication: "On présente quelque chose de nouveau (*un sofá*) : **hay**. On dirait *El sofá **está** en el salón* pour situer un sofa déjà connu." },
        { type: "saisie", question: "Accorde la couleur : « Hoy llevo una camiseta (blanco). »", reponses: ["blanca"], explication: "*camiseta* est féminin → **blanca**." },
        { type: "vf", question: "« Llevo unos vaqueros » signifie « Je porte un jean ».", reponse: true, explication: "**llevar** = porter ; *los vaqueros* = le jean (pluriel en espagnol, comme *los pantalones*)." },
        { type: "qcm", question: "« ¿Dónde están mis gafas? » Quelle réponse est correcte ?", choix: ["Están encima de la cama.", "Hay encima de la cama.", "Son encima de la cama.", "Está encima de la cama."], reponse: 0, explication: "On situe des objets connus (*mis gafas*) avec **estar**, au pluriel : **están**." },
        { type: "saisie", question: "Traduis : « J'ai mal à la tête. »", reponses: ["Me duele la cabeza", "A mí me duele la cabeza"], explication: "*doler* fonctionne comme *gustar* : **Me duele la cabeza**." },
        { type: "saisie", question: "Complète avec *duele* ou *duelen* : « Me ... las piernas. »", reponses: ["duelen"], explication: "*las piernas* est au pluriel → **me duelen**, comme *me gustan*." },
        { type: "redaction", question: "Décris ta chambre en 5 phrases (ce qu'il y a avec *hay*, où sont les objets avec *estar* et des mots de position, les couleurs), puis dis en une phrase ce que tu portes aujourd'hui.", corrige: "Modèle :\n\n*Mi habitación es pequeña pero bonita. Hay una cama, un armario, una mesa y una silla. La cama está al lado de la ventana. Mi mochila está debajo de la mesa y mis libros están encima. Las paredes son azules y la puerta es blanca. Hoy llevo unos vaqueros, una camiseta verde y unas zapatillas negras.*\n\nVérifie :\n- **hay** + un / una / des noms sans article ; **estar** pour situer *la cama, mi mochila* ;\n- **del** (de + el) si besoin ;\n- **llevar** + vêtements, couleurs accordées (*una camiseta verde, unas zapatillas negras*)." }
      ]
    },
    {
      id: "comparar-mucho-poco",
      titre: "Comparer (más... que, menos... que) et dire la quantité (mucho, poco)",
      theme: "Grammaire",
      cours: `
## Comparer deux personnes ou deux choses
| Espagnol | Français | Exemple |
|---|---|---|
| **más** + adjectif + **que** | plus... que | *Pablo es **más** alto **que** Lucía.* |
| **menos** + adjectif + **que** | moins... que | *El gato es **menos** grande **que** el perro.* |
| **tan** + adjectif + **como** | aussi... que | *Lucía es **tan** simpática **como** Pablo.* |

- L'adjectif s'accorde avec le **premier** nom : *Mi hermana es más alt**a** que yo.* — *Mis primos son más divertid**os** que tú.*
- On peut aussi comparer des quantités : *Tengo **más** libros **que** mi hermano.* (J'ai plus de livres que mon frère.)
- Quatre formes à part : **mejor** (meilleur, mieux), **peor** (pire), **mayor** (plus âgé), **menor** (plus jeune). *Mi hermano es **mayor que** yo.* (Mon frère est plus âgé que moi.) — *Este helado es **mejor que** el otro.*

## Mucho, poco : dire la quantité
Devant un **nom**, *mucho* et *poco* s'accordent comme des adjectifs :

| | masculin | féminin |
|---|---|---|
| singulier | **mucho** tiempo, **poco** pan | **mucha** agua, **poca** leche |
| pluriel | **muchos** amigos, **pocos** libros | **muchas** cosas, **pocas** fotos |

- *Tengo **muchos** amigos y **muchas** amigas.* — *Hay **poca** gente en la calle.* (Il y a peu de monde.)
- *el agua* est **féminin** (on dit *el* seulement pour la prononciation) : ***mucha** agua, **poca** agua, el agua fría*.
- Pas de « de » comme en français : « beaucoup **d'**amis » = ***muchos** amigos* (✗ *mucho de amigos*).
- Après un **verbe**, *mucho* et *poco* ne changent pas : *Estudio **mucho**.* — *Mi gato come **poco**.* — *Me gusta **mucho** el fútbol.*

>! **Exemple** : *Madrid es más grande que Sevilla, pero en Sevilla hace más calor. En verano, en Sevilla hay muchos turistas y pocas nubes.*

> **À retenir** : *más / menos* + adjectif + ***que*** ; *tan* + adjectif + ***como*** ; *mejor, peor, mayor, menor*. Devant un nom : *mucho, mucha, muchos, muchas* / *poco, poca, pocos, pocas* (accord, sans « de »). Après un verbe : *mucho, poco* invariables.

### Erreurs fréquentes
- ✗ *más alto como Lucía* → ✓ *más alto **que** Lucía* (*como* va seulement avec *tan*).
- ✗ *mucho personas* → ✓ ***muchas** personas* (*personas* est féminin pluriel).
- ✗ *mucho de chicos* → ✓ ***muchos** chicos*.
- ✗ *más bueno que* → ✓ ***mejor** que*.
`,
      exercices: [
        { type: "qcm", question: "« Ana es más alta que Pedro. » Que veut dire cette phrase ?", choix: ["Ana est aussi grande que Pedro.", "Ana est plus grande que Pedro.", "Ana est moins grande que Pedro.", "Ana est très grande."], reponse: 1, explication: "**más** + adjectif + **que** = plus... que. *Moins* = *menos*, *aussi* = *tan... como*." },
        { type: "saisie", question: "Complète : « El perro es más rápido ... la tortuga. » (un mot)", reponses: ["que"], explication: "**más** rápido **que** : après *más* ou *menos*, on emploie toujours **que**." },
        { type: "qcm", question: "Complète : « Tengo ... amigas en el colegio. »", choix: ["mucho", "mucha", "muchos", "muchas"], reponse: 3, explication: "*amigas* est **féminin pluriel** → ***muchas** amigas*. *Mucho* s'accorde avec le nom qui suit." },
        { type: "saisie", question: "Accorde *poco* : « En el desierto hay (poco) agua. »", reponses: ["poca"], explication: "*el agua* est un nom **féminin** (on dit *el* devant un *a* accentué, mais le mot reste féminin) → ***poca** agua*, *el agua fría*." },
        { type: "vf", question: "Dans « Mi hermano estudia mucho », *mucho* doit s'accorder avec *hermano*.", reponse: false, explication: "Ici, *mucho* suit le **verbe** *estudia* : il est invariable. Il s'accorde seulement devant un nom : *muchos deberes*." },
        { type: "qcm", question: "« Mi abuela tiene 70 años y mi abuelo 75. » Quelle phrase est juste ?", choix: ["Mi abuelo es menor que mi abuela.", "Mi abuela es mayor que mi abuelo.", "Mi abuelo es mayor que mi abuela.", "Mi abuela es tan mayor como mi abuelo."], reponse: 2, explication: "75 ans > 70 ans : le grand-père est plus âgé, ***mayor que*** la grand-mère. *menor* = plus jeune." },
        { type: "saisie", question: "Traduis : « Lucía est moins timide que Marta. »", reponses: ["Lucía es menos tímida que Marta"], explication: "***Lucía es menos tímida que Marta.*** *menos* + adjectif accordé au féminin (*tímida*, avec l'accent sur le *í*) + *que*." },
        { type: "qcm", question: "Complète : « Este libro es ... que la película. » (meilleur)", choix: ["más bueno", "mejor", "mayor", "más mejor"], reponse: 1, explication: "« meilleur » = **mejor** : *Este libro es mejor que la película.* ✗ *más bueno*, ✗ *más mejor*. *mayor* = plus âgé." },
        { type: "saisie", question: "Traduis : « J'ai beaucoup d'amis. »", reponses: ["Tengo muchos amigos", "Yo tengo muchos amigos"], explication: "***Tengo muchos amigos.*** Pas de « de » : *muchos* s'accorde avec *amigos* (masculin pluriel)." },
        { type: "redaction", question: "Compare-toi en 5 phrases à une personne de ta famille ou à un ami : la taille, l'âge (*mayor / menor*), le caractère, et ce que vous avez (*más... que*, *mucho / poco* accordés).", corrige: "Modèle :\n\n*Mi hermano Hugo tiene catorce años: es mayor que yo. Es más alto que yo, pero yo soy más deportista. Él es menos hablador que yo. Hugo tiene muchos videojuegos y pocos libros. Yo leo mucho y tengo muchas novelas.*\n\nVérifie :\n- ***más / menos*** + adjectif + ***que*** (jamais *como*) ;\n- *mayor / menor* pour l'âge, *mejor / peor* pour bon / mauvais ;\n- *mucho / poco* **accordés** devant un nom (*muchas novelas, pocos libros*), invariables après un verbe (*leo mucho*)." },
      ],
    },
    {
      id: "que-estas-haciendo",
      titre: "¿Qué estás haciendo? Estar + gérondif : l'action en cours",
      theme: "Grammaire",
      cours: `
## Dire ce qu'on est en train de faire
Pour une action **en cours**, au moment où l'on parle, l'espagnol emploie **estar + gérondif** : « être en train de ».
- *¿Qué **estás haciendo**? — **Estoy comiendo**.* (Qu'est-ce que tu es en train de faire ? — Je suis en train de manger.)
- *Mi padre **está cocinando** y mis hermanos **están jugando** en el jardín.*

## Former le gérondif
| Verbe | Terminaison | Gérondif |
|---|---|---|
| -ar : habl**ar** | **-ando** | habl**ando** |
| -er : com**er** | **-iendo** | com**iendo** |
| -ir : escrib**ir** | **-iendo** | escrib**iendo** |

- Le gérondif ne change **jamais** : seul *estar* se conjugue (*estoy, estás, está, estamos, estáis, están*).
- À retenir à part : *leer → **leyendo***, *dormir → **durmiendo***, *hacer → **haciendo*** (régulier), *ver → **viendo***.

>! **Présent ou estar + gérondif ?** *Juego al fútbol los sábados.* (une habitude : présent simple) — *Ahora **estoy jugando** al fútbol.* (en ce moment précis). Les mots *ahora* (maintenant) et *en este momento* annoncent souvent *estar + gérondif*.

>! **Exemple** : un message à 17 h : *¡Hola, abuela! Ahora estoy en casa. Estoy haciendo los deberes y mi hermana está leyendo un cómic. Papá está durmiendo en el sofá.*

> **À retenir** : ***estar*** conjugué + gérondif en **-ando** (-ar) ou **-iendo** (-er, -ir) = être en train de. *leyendo, durmiendo*. *¿Qué estás haciendo?*

### Erreurs fréquentes
- ✗ *Soy comiendo* → ✓ ***Estoy** comiendo* (toujours *estar*).
- ✗ *Estoy comando* → ✓ *Estoy com**iendo*** (verbe en -er).
- ✗ *Está leiendo* → ✓ *Está **leyendo***.
- ✗ *Estamos jugandos* → ✓ *Estamos **jugando*** (le gérondif est invariable).
`,
      exercices: [
        { type: "qcm", question: "Que veut dire « Estoy bailando » ?", choix: ["Je danse tous les jours.", "Je suis en train de danser.", "J'ai dansé.", "Je vais danser."], reponse: 1, explication: "***estar* + gérondif** = être en train de : *Estoy bailando* = je suis en train de danser. « Je vais danser » = *Voy a bailar*." },
        { type: "saisie", question: "Donne le gérondif de *cantar*.", reponses: ["cantando"], explication: "Verbe en **-ar** → **-ando** : ***cantando***." },
        { type: "saisie", question: "Donne le gérondif de *escribir*.", reponses: ["escribiendo"], explication: "Verbe en **-ir** → **-iendo** : ***escribiendo***. Même terminaison pour les verbes en -er : *comiendo, bebiendo*." },
        { type: "qcm", question: "Complète : « Mis padres ... viendo la tele. »", choix: ["son", "están", "estamos", "tienen"], reponse: 1, explication: "On emploie **estar**, conjugué avec le sujet *mis padres* (ellos) : ***están** viendo la tele*." },
        { type: "vf", question: "Le gérondif de *leer* est *leiendo*.", reponse: false, explication: "On écrit ***leyendo*** (le *i* entre deux voyelles devient *y*). Même chose : *oír → oyendo*." },
        { type: "saisie", question: "Traduis : « Mon frère est en train de dormir. »", reponses: ["Mi hermano está durmiendo"], explication: "***Mi hermano está durmiendo.*** *dormir* → **durmiendo** (le *o* devient *u*)." },
        { type: "qcm", question: "Quelle phrase décrit une **habitude** (et non une action en cours) ?", choix: ["Ahora estoy comiendo.", "Los lunes como en el comedor.", "Estamos jugando en el patio.", "¿Qué estás haciendo?"], reponse: 1, explication: "*Los lunes como en el comedor* (le lundi, je mange à la cantine) : une habitude, donc le **présent simple**. Les trois autres décrivent ce qui se passe maintenant." },
        { type: "saisie", question: "Réponds à la question « ¿Qué estás haciendo? » : tu es en train d'étudier. (2 mots)", reponses: ["Estoy estudiando"], explication: "***Estoy estudiando.*** *estudiar* (-ar) → *estudiando*." },
        { type: "redaction", question: "Il est 18 h chez toi. Écris un message de 5 phrases à un ami espagnol pour dire ce que chaque personne de ta famille est en train de faire (*estar* + gérondif), et ce que toi, tu fais.", corrige: "Modèle :\n\n*¡Hola, Álvaro! Son las seis de la tarde. Mi madre está trabajando en el ordenador. Mi padre está cocinando una tortilla. Mi hermana pequeña está durmiendo. Y yo estoy escribiendo este mensaje y escuchando música. ¿Y tú, qué estás haciendo?*\n\nVérifie :\n- ***estar*** bien conjugué (*está, están, estoy*) ;\n- **-ando** pour les verbes en -ar, **-iendo** pour -er et -ir ;\n- formes à part : *durmiendo, leyendo* ;\n- le gérondif ne s'accorde pas." },
      ],
    },
    {
      id: "comida-profesiones",
      titre: "Les aliments et les métiers",
      theme: "Axe 2 : Le quotidien : vivre, jouer, apprendre",
      cours: `
## Los alimentos : les aliments
| Espagnol | Français |
|---|---|
| el pan / la leche / el queso | le pain / le lait / le fromage |
| el huevo / la carne / el pollo | l'œuf / la viande / le poulet |
| el pescado / el arroz / la pasta | le poisson / le riz / les pâtes |
| la fruta / la manzana / la naranja | le fruit / la pomme / l'orange |
| el plátano / la fresa | la banane / la fraise |
| las verduras / el tomate / la patata | les légumes / la tomate / la pomme de terre |
| el agua / el zumo | l'eau / le jus de fruits |
| el helado / el chocolate | la glace / le chocolat |

- Deux mots pour « poisson » : ***el pescado*** = le poisson qu'on **mange** ; *el pez* = le poisson **vivant**, dans l'eau.
- En Amérique latine, on dit souvent *el jugo* (le jus) et *la papa* (la pomme de terre).
- Pas d'article partitif : « je mange **du** pain » = *como pan* ; « je bois **de l'**eau » = *bebo agua*.
- Trois plats espagnols : la ***tortilla de patatas*** (omelette aux pommes de terre), la ***paella*** (riz cuit avec des légumes, du poulet ou des fruits de mer, de la région de Valence) et le ***gazpacho*** (soupe froide de tomates, d'Andalousie).

## Las profesiones : les métiers
| Masculin | Féminin | Français |
|---|---|---|
| el médico | la médica | le médecin |
| el profesor | la profesora | le professeur |
| el enfermero | la enfermera | l'infirmier / l'infirmière |
| el cocinero | la cocinera | le cuisinier / la cuisinière |
| el camarero | la camarera | le serveur / la serveuse |
| el panadero | la panadera | le boulanger / la boulangère |
| el veterinario | la veterinaria | le vétérinaire |
| el bombero | la bombera | le pompier |
| el / la policía | | le policier / la policière |
| el / la periodista | | le / la journaliste |

- Les métiers en **-ista** et *policía* ont **une seule forme** : seul l'article change (*el periodista / la periodista*).
- **Pas d'article** devant le métier après *ser* : *Mi madre **es** enfermera.* (✗ *es una enfermera*)
- Où ? ***trabajar en*** : *Trabaja **en un** hospital / **en un** restaurante / **en una** panadería.*
- Rêver d'un métier : *Quiero **ser** veterinaria.* (Je veux être vétérinaire.)

> **À retenir** : *el pan, la leche, el queso, el huevo, la carne, el pescado, el pollo, el arroz, la fruta, las verduras, el agua*. Pas d'article partitif : *como pan*. Métiers : masculin **-o** / féminin **-a** (*médico, médica*) ; **-ista** invariable. *Es médico* (sans article) ; *trabaja en un hospital* ; *quiero ser...*

### Erreurs fréquentes
- ✗ *Como el pan* (pour « du pain ») → ✓ *Como pan*.
- ✗ *el pez con patatas* (dans l'assiette) → ✓ *el **pescado** con patatas*.
- ✗ *Mi padre es un cocinero* → ✓ *Mi padre es cocinero*.
- ✗ *la periodisto* → ✓ *la periodista*.
`,
      textes: {
        mercado: `**El sábado en el mercado**

Me llamo Nerea y vivo en Valencia. Mi madre es médica y trabaja en un hospital. Mi padre es panadero: se levanta a las cuatro de la mañana para hacer el pan. El sábado vamos juntos al mercado. Compramos fruta (naranjas y fresas), verduras, pollo y arroz. ¡El domingo mi padre cocina una paella para toda la familia! Yo no como mucha carne, pero me encanta la paella de mi padre. De mayor (plus tard), quiero ser veterinaria porque me encantan los animales.

(texte d'entraînement)`,
      },
      exercices: [
        { type: "qcm", question: "Que veut dire *el queso* ?", choix: ["le lait", "le fromage", "l'œuf", "la viande"], reponse: 1, explication: "***el queso*** = le fromage. Le lait = *la leche*, l'œuf = *el huevo*, la viande = *la carne*." },
        { type: "saisie", question: "Traduis : « la pomme » (avec l'article)", reponses: ["la manzana"], explication: "***la manzana***. L'orange = *la naranja*, la banane = *el plátano*." },
        { type: "qcm", question: "Au restaurant, tu veux manger du poisson. Tu dis :", choix: ["Quiero el pez.", "Quiero pescado.", "Quiero un pez.", "Quiero el pescador."], reponse: 1, explication: "Le poisson qu'on mange = ***el pescado*** ; *el pez* est le poisson vivant ; *el pescador* est le pêcheur. Pas d'article partitif : *quiero pescado*." },
        { type: "saisie", question: "Écris le féminin de *el enfermero* (avec l'article).", reponses: ["la enfermera"], explication: "Masculin en **-o** → féminin en **-a** : ***la enfermera***." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Mi tía es una periodista.", "Mi tía es periodista.", "Mi tía es periodisto.", "Mi tía está periodista."], reponse: 1, explication: "***Mi tía es periodista.*** Pas d'article devant le métier ; *periodista* est le même au masculin et au féminin ; le métier se dit avec *ser*." },
        { type: "saisie", question: "Traduis : « Mon père est cuisinier. »", reponses: ["Mi padre es cocinero"], explication: "***Mi padre es cocinero.*** Avec *ser*, sans article." },
        { type: "qcm", texte: "mercado", question: "Quel est le métier du père de Nerea ?", choix: ["médecin", "cuisinier", "boulanger", "vétérinaire"], reponse: 2, explication: "*Mi padre es **panadero**: se levanta a las cuatro de la mañana para hacer el pan.* C'est sa mère qui est médecin ; Nerea veut être vétérinaire." },
        { type: "vf", texte: "mercado", question: "Nerea mange beaucoup de viande.", reponse: false, explication: "*Yo **no como mucha carne*** : elle ne mange pas beaucoup de viande (mais elle adore la paella de son père)." },
        { type: "saisie", texte: "mercado", question: "Quel plat le père de Nerea cuisine-t-il le dimanche ? Réponds avec le mot espagnol du texte.", reponses: ["paella", "una paella"], explication: "*¡El domingo mi padre cocina **una paella** para toda la familia!* La paella est un plat de riz de la région de Valence, où vit Nerea." },
        { type: "redaction", question: "Présente en 5 à 6 phrases deux personnes de ton entourage : leur métier, où elles travaillent (*trabajar en*), ce qu'elles aiment manger ; puis dis quel métier tu veux faire et pourquoi.", corrige: "Modèle :\n\n*Mi madre es profesora y trabaja en un colegio. Le encantan las verduras y el pescado. Mi tío es bombero. Come mucha pasta y mucho pan. De mayor, quiero ser cocinero porque me encanta preparar tortillas.*\n\nVérifie :\n- *ser* + métier **sans article** ; féminin accordé (*profesora*) ;\n- *trabajar en un / una* + lieu ;\n- pas d'article partitif (*come pasta*), mais l'article après *gustar / encantar* (*le encantan las verduras*) ;\n- *mucho / mucha* accordé devant le nom." },
      ],
    },
    {
      id: "fiestas-calendario",
      titre: "Les fêtes du calendrier : Navidad, los Reyes, el Día de Muertos, Semana Santa, Inti Raymi",
      theme: "Axe 2 : Le quotidien : vivre, jouer, apprendre",
      cours: `
## Noël et le Nouvel An en Espagne
- **La Nochebuena** (le 24 décembre au soir) : un grand dîner en famille. **La Navidad** (le 25 décembre). On se souhaite : ***¡Feliz Navidad!***
- **La Nochevieja** (le 31 décembre) : à minuit, on mange **douze grains de raisin** (*las doce uvas*), un à chaque coup de l'horloge, pour avoir de la chance pendant les douze mois de l'année. À Madrid, on regarde l'horloge de la **Puerta del Sol**. Puis : ***¡Feliz Año Nuevo!***

## Los Reyes Magos : les Rois mages
En Espagne, ce sont surtout les **Rois mages** (Melchor, Gaspar et Baltasar) qui apportent les cadeaux, dans la nuit du **5 au 6 janvier**.
- Le **5 janvier**, il y a un grand défilé dans les rues : ***la cabalgata de Reyes***. Les rois lancent des bonbons aux enfants.
- Le **6 janvier** au matin, les enfants trouvent leurs cadeaux. On mange le ***roscón de Reyes***, une couronne briochée avec une petite figurine cachée (comme la galette des rois en France).

## El Día de Muertos (Mexique)
Le **1er et le 2 novembre**, les Mexicains fêtent leurs morts, dans la **joie** et non dans la tristesse : on pense que les défunts reviennent rendre visite à leur famille.
- On prépare un **autel** (*el altar*, *la ofrenda*) avec des photos, des bougies (*las velas*), des fleurs orange (*el cempasúchil*), le *pan de muerto* et des **têtes de mort en sucre** (*las calaveras de azúcar*).
- Cette fête est inscrite au patrimoine culturel immatériel de l'UNESCO.

## La Semana Santa (Espagne)
La **semaine sainte** est la semaine qui précède **Pâques** (en mars ou en avril). Dans beaucoup de villes, surtout en Andalousie (Séville, Málaga), il y a des **processions** (*las procesiones*) : des confréries portent dans les rues de grandes statues sur des estrades décorées (*los pasos*), au son des tambours.

## El Inti Raymi (Pérou)
***Inti Raymi*** signifie « fête du Soleil » en quechua, la langue des Incas. Elle a lieu le **24 juin** à **Cuzco**, l'ancienne capitale des Incas, au Pérou. Dans l'hémisphère sud, c'est le moment du **solstice d'hiver** : on remercie le Soleil (*Inti*) et on lui demande de revenir. Des centaines d'acteurs en costumes rejouent la cérémonie inca, notamment sur le site de Sacsayhuamán.

>! **Pour parler d'une fête** : *En Navidad, comemos con la familia.* — *El seis de enero, los niños reciben regalos.* — *Me gusta mucho la cabalgata.* Les noms de fêtes prennent une majuscule ; les mois, non (*enero, junio*).

> **À retenir** : *Nochebuena* (24/12), *Navidad* (25/12), *Nochevieja* (31/12, les douze raisins) ; *los Reyes Magos* (6/01, *cabalgata* et *roscón*) ; *el Día de Muertos* (Mexique, 1er-2 novembre, *ofrenda*, *calaveras*) ; *la Semana Santa* (avant Pâques, processions) ; *el Inti Raymi* (Pérou, Cuzco, 24 juin, fête du Soleil). *¡Feliz Navidad! ¡Feliz Año Nuevo!*

### Erreurs fréquentes
- Confondre *Nochebuena* (24 décembre) et *Nochevieja* (31 décembre).
- Croire que le *Día de Muertos* est une fête triste : c'est une fête **joyeuse** et colorée.
- ✗ *el seis de Enero* → ✓ *el seis de **enero*** (pas de majuscule au mois).
`,
      exercices: [
        { type: "qcm", question: "Que fait-on en Espagne à minuit, le 31 décembre ?", choix: ["On mange douze grains de raisin.", "On ouvre les cadeaux.", "On allume des bougies sur un autel.", "On suit une procession."], reponse: 0, explication: "Pour la ***Nochevieja***, on mange **douze grains de raisin** (*las doce uvas*), un à chaque coup de minuit." },
        { type: "qcm", question: "En Espagne, quel jour les enfants reçoivent-ils surtout leurs cadeaux des Rois mages ?", choix: ["le 24 décembre", "le 25 décembre", "le 1er janvier", "le 6 janvier"], reponse: 3, explication: "Les ***Reyes Magos*** passent dans la nuit du 5 au 6 janvier : les cadeaux sont là le **6 janvier** au matin, après la *cabalgata* du 5." },
        { type: "saisie", question: "Comment souhaite-t-on « Joyeux Noël » en espagnol ?", reponses: ["¡Feliz Navidad!", "Feliz Navidad"], explication: "***¡Feliz Navidad!*** Pour le 1er janvier : *¡Feliz Año Nuevo!*" },
        { type: "vf", question: "Le Día de Muertos est une fête triste, où l'on reste en silence.", reponse: false, explication: "C'est une fête **joyeuse** et colorée : on accueille les défunts avec une *ofrenda*, des fleurs orange, des *calaveras de azúcar* et le *pan de muerto*." },
        { type: "qcm", question: "Dans quel pays et dans quelle ville a lieu l'Inti Raymi ?", choix: ["au Mexique, à Mexico", "au Pérou, à Cuzco", "en Espagne, à Séville", "en Argentine, à Buenos Aires"], reponse: 1, explication: "L'***Inti Raymi*** (fête du Soleil des Incas) a lieu le 24 juin à **Cuzco**, au **Pérou**." },
        { type: "qcm", question: "Qu'est-ce que la *Semana Santa* ?", choix: ["la semaine des vacances d'été", "la semaine avant Pâques, avec des processions", "la semaine de Noël", "la fête nationale espagnole"], reponse: 1, explication: "La ***Semana Santa*** (semaine sainte) précède Pâques. En Andalousie surtout, des confréries portent les *pasos* dans les rues." },
        { type: "saisie", question: "Comment s'appelle la soirée du 24 décembre en Espagne ? (en espagnol)", reponses: ["la Nochebuena", "Nochebuena"], explication: "***la Nochebuena*** (« la bonne nuit »). Le 31 décembre, c'est *la Nochevieja* (« la vieille nuit »)." },
        { type: "vf", question: "*Inti* veut dire « soleil » en quechua, la langue des Incas.", reponse: true, explication: "*Inti* = le Soleil, dieu principal des Incas ; *Inti Raymi* = la fête du Soleil." },
        { type: "saisie", question: "Comment s'appellent les têtes de mort en sucre du Día de Muertos ? (avec l'article, au pluriel)", reponses: ["las calaveras de azúcar", "las calaveras"], explication: "***las calaveras de azúcar*** : on écrit souvent dessus le prénom d'un défunt… ou d'un vivant, pour rire !" },
        { type: "redaction", question: "Choisis une des fêtes du chapitre et présente-la en espagnol en 5 phrases : où (pays, ville), quand (date), ce qu'on fait, ce qu'on mange ou ce qu'on voit, et si elle te plaît (*me gusta... porque...*).", corrige: "Modèle (los Reyes) :\n\n*En España, el cinco de enero hay una cabalgata en las calles. Los Reyes Magos tiran caramelos a los niños. El seis de enero, los niños abren sus regalos. Comemos el roscón de Reyes con la familia. Me gusta mucho esta fiesta porque es muy alegre.*\n\nVérifie :\n- la date en espagnol (*el cinco de enero*, sans majuscule au mois) ;\n- les verbes au présent, accordés (*hay, tiran, abren, comemos*) ;\n- le vocabulaire de la fête (*cabalgata, roscón, regalos* ; ou *ofrenda, calaveras* ; ou *procesiones* ; ou *el Sol, Cuzco*) ;\n- *me gusta... porque...* pour donner ton avis." },
      ],
    },
    {
      id: "vale-cuidado-hay-que",
      titre: "Réagir et prévenir : ¡Vale!, De acuerdo, ¡Cuidado!, ¡Espera!, No puedo, hay que",
      theme: "Communiquer",
      cours: `
## Accepter, refuser
| Espagnol | Français |
|---|---|
| ¡Vale! | D'accord ! OK ! (en Espagne, à l'oral) |
| De acuerdo. | D'accord. (partout) |
| ¡Claro! | Bien sûr ! |
| ¡Genial! / ¡Qué bien! | Génial ! / Super ! |
| No puedo. | Je ne peux pas. |
| Lo siento. | Je suis désolé(e). |

- *¿Vamos al parque? — **¡Vale!*** / ***Lo siento, no puedo**: tengo que estudiar.* (Je dois étudier.)
- ***No puedo*** + infinitif : *No puedo ir.* (Je ne peux pas y aller.) — *No puedo salir hoy.* (*poder* : *puedo, puedes, puede...*)
- ***tengo que*** + infinitif = je dois : *Tengo que hacer los deberes.*

## Avertir, faire attendre
| Espagnol | Français |
|---|---|
| ¡Cuidado! | Attention ! |
| ¡Espera! / ¡Esperad! | Attends ! / Attendez ! |
| ¡Un momento! | Un instant ! |
| ¡Para! | Arrête ! |
| ¡Rápido! / ¡Venga! | Vite ! / Allez ! |

- *¡Cuidado! ¡El suelo está mojado!* (Attention, le sol est mouillé !)
- *¡Espera! Voy contigo.* (Attends ! Je viens avec toi.)
- N'oublie pas le **point d'exclamation à l'envers** au début : ***¡**Cuidado**!***

## Hay que + infinitif : il faut
***Hay que*** + infinitif dit ce qu'**il faut** faire, en général, pour tout le monde :
- *En clase, **hay que** levantar la mano.* (En classe, il faut lever la main.)
- *Para cruzar la calle, **hay que** mirar a la derecha y a la izquierda.*
- *No **hay que** correr en los pasillos.* (Il ne faut pas courir dans les couloirs.)

>! **Hay que ou tengo que ?** *Hay que estudiar* = il faut étudier (tout le monde, règle générale). ***Tengo que** estudiar* = **je** dois étudier (moi). *hay que* ne change jamais.

> **À retenir** : accepter : *¡Vale! De acuerdo. ¡Claro!* ; refuser : *Lo siento, no puedo* (+ infinitif). Avertir : *¡Cuidado! ¡Espera! ¡Para!* ***Hay que*** + infinitif = il faut (règle générale) ; *tengo que* + infinitif = je dois.

### Erreurs fréquentes
- ✗ *No puedo de ir* → ✓ *No puedo **ir*** (infinitif directement).
- ✗ *Hay de estudiar* → ✓ *Hay **que** estudiar*.
- ✗ *Cuidado!* sans ¡ → ✓ ***¡**Cuidado!*
- ✗ *Tengo estudiar* → ✓ *Tengo **que** estudiar*.
`,
      exercices: [
        { type: "qcm", question: "Ton ami propose : « ¿Jugamos al fútbol? » Tu acceptes. Tu dis :", choix: ["¡Cuidado!", "¡Vale!", "Lo siento.", "¡Espera!"], reponse: 1, explication: "***¡Vale!*** = d'accord, OK (en Espagne). *¡Cuidado!* = attention ; *Lo siento* = je suis désolé ; *¡Espera!* = attends." },
        { type: "qcm", question: "Un camarade va marcher sur ta trousse. Tu cries :", choix: ["¡Claro!", "¡De acuerdo!", "¡Cuidado!", "¡Genial!"], reponse: 2, explication: "***¡Cuidado!*** = Attention ! On l'entend aussi sur les panneaux : *¡Cuidado con el perro!* (Attention au chien !)" },
        { type: "saisie", question: "Traduis : « Je ne peux pas. » (2 mots)", reponses: ["No puedo", "Yo no puedo"], explication: "***No puedo.*** *poder* change de voyelle : *puedo, puedes, puede*. Plus poli : *Lo siento, no puedo.*" },
        { type: "vf", question: "*De acuerdo* veut dire « D'accord ».", reponse: true, explication: "***De acuerdo*** = d'accord ; on le comprend partout dans le monde hispanophone. *¡Vale!* s'emploie surtout en Espagne." },
        { type: "saisie", question: "Traduis : « Attends ! » (tu parles à un seul copain)", reponses: ["¡Espera!", "Espera"], explication: "***¡Espera!*** (de *esperar*, attendre). À plusieurs : *¡Esperad!* N'oublie pas le ¡ au début à l'écrit." },
        { type: "qcm", question: "Complète : « Para entrar en la piscina, ... ducharse. » (il faut)", choix: ["hay que", "tengo", "hay de", "hay"], reponse: 0, explication: "***hay que*** + infinitif = il faut (règle pour tout le monde) : *hay que ducharse*. ✗ *hay de*." },
        { type: "saisie", question: "Traduis : « Il faut écouter le professeur. »", reponses: ["Hay que escuchar al profesor"], explication: "***Hay que escuchar al profesor.*** *hay que* + infinitif ; **al** (a + el) devant une personne : *escuchar **al** profesor*." },
        { type: "qcm", question: "Quelle phrase veut dire « Je dois faire mes devoirs » ?", choix: ["Hay que hacer los deberes.", "Tengo que hacer los deberes.", "Puedo hacer los deberes.", "Tengo hacer los deberes."], reponse: 1, explication: "***Tengo que*** + infinitif = **je** dois. *Hay que* = il faut (en général) ; *puedo* = je peux ; ✗ *tengo hacer* (il manque *que*)." },
        { type: "redaction", question: "Écris un petit dialogue de 6 répliques entre toi et un ami espagnol : il te propose une sortie, tu refuses poliment (*Lo siento, no puedo... tengo que...*), il en propose une autre, tu acceptes. Pendant la sortie, l'un de vous avertit l'autre d'un danger (*¡Cuidado!*).", corrige: "Modèle :\n\n— *¿Vamos al cine esta tarde?*\n— *Lo siento, no puedo: tengo que estudiar.*\n— *¿Y mañana? ¿Vamos a la playa?*\n— *¡Vale! De acuerdo.*\n— *(À la plage) ¡Cuidado! ¡Hay muchas medusas!*\n— *¡Espera! Salgo del agua.*\n\nVérifie :\n- *no puedo* + infinitif ; *tengo **que*** + infinitif ;\n- *¡Vale! / De acuerdo* pour accepter ;\n- les **¡** et **¿** au début des phrases ;\n- (*las medusas* = les méduses)." },
      ],
    },
    {
      id: "aqui-antes-luego",
      titre: "Situer et enchaîner : aquí / allí, antes de / después de, entonces, luego ; a devant une personne",
      theme: "Grammaire",
      cours: `
## Aquí, allí : ici, là-bas
- ***aquí*** = ici, près de moi : *Aquí está mi colegio.* (Voici mon collège.)
- ***allí*** = là-bas, loin : *Allí vive mi abuela.* (Là-bas vit ma grand-mère.)
- Les deux portent un **accent** sur le *í*.

## Antes de, después de : avant, après
| Espagnol | Français | Exemple |
|---|---|---|
| antes de + nom | avant + nom | *antes de la cena* (avant le dîner) |
| antes de + infinitif | avant de + infinitif | *antes de dormir* (avant de dormir) |
| después de + nom | après + nom | *después de clase* (après les cours) |
| después de + infinitif | après + infinitif | *después de comer* (après avoir mangé) |

- Devant ***el***, *de* se contracte : *después **del** partido* (après le match).
- Le verbe reste à l'**infinitif** : *Antes de salir, me lavo los dientes.* (✗ *antes de salgo*)

## Enchaîner un récit : primero, luego, después, entonces, al final
- ***primero*** (d'abord) → ***luego*** / ***después*** (ensuite, puis) → ***al final*** (à la fin).
- ***entonces*** = alors (à ce moment-là, ou par conséquent) : *Llueve. **Entonces** llevo el paraguas.* — *Sale el sol. **Entonces** vamos a la playa.*
- *Primero desayuno, luego me visto y después voy al colegio.*

## A devant un COD de personne
En espagnol, quand le complément d'objet direct est une **personne** (ou un animal qu'on aime), on met ***a*** devant :
- *Veo **a** mi abuela.* (Je vois ma grand-mère.) — *Busco **a** Pablo.* — *Quiero mucho **a** mi perro.*
- *a + el = **al*** : *Escucho **al** profesor.*
- Mais **pas de *a*** devant une chose : *Veo **la** casa.* — *Busco **mi** mochila.* Ni après *tener* : *Tengo dos hermanos.*

>! **Exemple de récit (conte)** : *Primero, Caperucita camina por el bosque. Luego ve **al** lobo. El lobo pregunta: «¿Adónde vas?». Entonces, Caperucita contesta: «Allí, a casa de mi abuela». Después de la conversación, el lobo corre a la casa.*

> **À retenir** : *aquí* (ici) / *allí* (là-bas) ; *antes de / después de* + nom ou **infinitif** ; *primero, luego, después, entonces, al final*. ***a*** devant une **personne** COD : *veo a mi abuela, escucho al profesor* ; pas de *a* devant une chose ni après *tener*.

### Erreurs fréquentes
- ✗ *Veo mi madre* → ✓ *Veo **a** mi madre*.
- ✗ *Tengo a dos hermanos* → ✓ *Tengo dos hermanos*.
- ✗ *después de el partido* → ✓ *después **del** partido*.
- ✗ *antes de como* → ✓ *antes de **comer*** (infinitif).
- ✗ *aqui, alli* → ✓ *aquí, allí* (accents).
`,
      exercices: [
        { type: "qcm", question: "Que veut dire « Allí está la playa » ?", choix: ["Ici, c'est la plage.", "Là-bas, il y a la plage.", "La plage est fermée.", "La plage est près d'ici."], reponse: 1, explication: "***allí*** = là-bas (loin). Ici = *aquí*." },
        { type: "saisie", question: "Traduis : « ici » (un mot)", reponses: ["aquí"], explication: "***aquí***, avec un accent sur le *í*. Là-bas = *allí*." },
        { type: "qcm", question: "Complète : « ... comer, me lavo las manos. » (avant de)", choix: ["Antes de", "Después de", "Entonces", "Luego"], reponse: 0, explication: "***Antes de*** + infinitif = avant de : *Antes de comer, me lavo las manos.* *Después de comer* = après avoir mangé." },
        { type: "saisie", question: "Complète avec *de* + *el* contractés : « Después ... partido, cenamos. »", reponses: ["del"], explication: "**de + el = del** : *después **del** partido*." },
        { type: "vf", question: "« Entonces » veut dire « alors ».", reponse: true, explication: "***entonces*** = alors : *Llueve. Entonces llevo el paraguas.* Ensuite = *luego* ou *después*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Veo mi abuela en el parque.", "Veo a mi abuela en el parque.", "Veo al mi abuela en el parque.", "Veo de mi abuela en el parque."], reponse: 1, explication: "*mi abuela* est une **personne** complément d'objet direct : on met ***a*** : *Veo **a** mi abuela.*" },
        { type: "qcm", question: "Dans quelle phrase **ne faut-il pas** ajouter *a* ?", choix: ["Busco ... Pablo.", "Escucho ... mi madre.", "Busco ... mi mochila.", "Quiero mucho ... mi hermana."], reponse: 2, explication: "*mi mochila* est une **chose** : *Busco mi mochila.* Devant les personnes (*Pablo, mi madre, mi hermana*), on met *a*." },
        { type: "saisie", question: "Traduis : « Je regarde le professeur. » (verbe *mirar*)", reponses: ["Miro al profesor"], explication: "***Miro al profesor.*** Personne COD → *a* ; *a + el* = **al**." },
        { type: "redaction", question: "Raconte en 5 à 6 phrases ton samedi (vrai ou imaginaire) dans l'ordre, avec *primero, luego, después, entonces, al final*, au moins un *antes de* ou *después de* + infinitif, et une personne que tu vois ou que tu appelles (*a*).", corrige: "Modèle :\n\n*Primero desayuno con mi familia. Luego voy al mercado con mi padre. Después de comer, llamo a mi amiga Inés. Hace sol: entonces vamos al parque. Allí vemos a nuestros amigos. Al final, antes de dormir, leo un poco.*\n\nVérifie :\n- l'ordre du récit : *primero → luego / después → al final* ;\n- *antes de / después de* + **infinitif** (*comer, dormir*) ;\n- ***a*** devant une personne : *llamo a mi amiga, vemos a nuestros amigos* ;\n- les accents : *allí, aquí, después*." },
      ],
    }
  ]
};
