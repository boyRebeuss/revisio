export default {
  chapitres: [
    {
      id: "alphabet-prononciation",
      titre: "L'alphabet et la prononciation",
      theme: "Les bases de la langue",
      cours: `
## L'alphabet espagnol
L'alphabet espagnol compte **27 lettres** : les 26 lettres du français plus la lettre **ñ** (eñe), comme dans *España*, *niño*, *mañana*.

| Lettre | Nom | Exemple |
|---|---|---|
| a | a | *casa* |
| b | be | *bueno* |
| c | ce | *casa*, *cine* |
| g | ge | *gato*, *gente* |
| h | hache | *hola* (muette) |
| j | jota | *jamón* |
| ll | elle (digramme) | *llamar* |
| ñ | eñe | *niño* |
| r | erre | *pero*, *perro* |
| v | uve | *vaso* |
| z | zeta | *zapato* |

## Les sons à connaître
- Presque toutes les lettres se prononcent (sauf le **h** et le *u* de *que, qui, gue, gui*) : *e* ne se tait jamais (*noche* se dit « notché »).
- **u** se prononce « ou » : *luna* → « louna ».
- **h** est toujours muette : *hola* → « ola ».
- **j** (toujours) et **g** devant *e, i* : son raclé de la gorge (comme le « ch » allemand) : *jamón*, *jefe*, *gente*, *jirafa*. Devant *a, o, u*, le **g** est dur : *gato*.
- **c** devant *e, i* et **z** : son proche du « th » anglais en Espagne : *cine*, *zapato*. En Amérique latine, on prononce « s » (c'est le *seseo*).
- **ch** se dit « tch » : *chico*.
- **ll** et **y** : son « y » : *llamo*, *yo*.
- **ñ** se dit « gn » : *España*.
- **qu** devant *e, i* : son « k », le *u* ne se prononce pas : *queso*, *quince*.
- **gu** devant *e, i* : son « g » dur : *guitarra*. Avec un tréma (*ü*), on prononce le *u* : *pingüino*.
- **r** simple est roulé légèrement ; **rr** (et *r* en début de mot) est fortement roulé : *pero* (mais) ≠ *perro* (chien).
- **b** et **v** se prononcent de la même façon.

## L'accent tonique
Dans chaque mot, une syllabe est prononcée plus fort.
1. Mot terminé par une **voyelle, n ou s** → accent sur l'**avant-dernière** syllabe : *ca*sa, *ha*blan, *li*bros.
2. Mot terminé par une **autre consonne** → accent sur la **dernière** syllabe : ha*blar*, espa*ñol*, ciu*dad*.
3. Si le mot ne suit pas ces règles, on écrit un **accent écrit** (tilde) : *café*, *canción*, *árbol*, *música*.

## La ponctuation
Les questions et les exclamations s'ouvrent avec un signe à l'envers : **¿** ... **?** et **¡** ... **!**
- *¿Cómo te llamas?*
- *¡Hola, amigos!*

>! **Entraîne ton oreille** : cette appli ne fait pas travailler la compréhension de l'oral ni la prononciation. Écoute de l'espagnol chaque semaine (les audios de ton manuel, des chansons, des dessins animés ou des vidéos courtes en espagnol avec sous-titres espagnols) et répète à voix haute les mots du cours.

> **À retenir** : 27 lettres (avec le ñ) ; h muette ; u = « ou » ; j = son raclé ; ll = « y » ; ñ = « gn » ; on ouvre les questions par ¿ et les exclamations par ¡.
`,
      exercices: [
        { type: "qcm", question: "Combien de lettres compte l'alphabet espagnol ?", choix: ["26", "27", "28", "30"], reponse: 1, explication: "L'alphabet espagnol a 27 lettres : les 26 lettres du français plus le **ñ**." },
        { type: "vf", question: "Dans le mot *hola*, on prononce le h.", reponse: false, explication: "Le **h** est toujours muet en espagnol : *hola* se dit « ola »." },
        { type: "qcm", question: "Comment se prononce le *u* de *luna* ?", choix: ["« ou »", "« u » comme en français", "Il ne se prononce pas", "« eu »"], reponse: 0, explication: "En espagnol, le **u** se prononce toujours « ou » : « louna »." },
        { type: "saisie", question: "Écris le signe qui ouvre une question en espagnol.", reponses: ["¿"], explication: "Une question commence par **¿** et se termine par **?** : *¿Qué tal?*" },
        { type: "qcm", question: "Quelle paire de mots montre l'opposition entre r simple et rr ?", choix: ["*casa* / *cosa*", "*hola* / *ola*", "*vaso* / *baso*", "*pero* / *perro*"], reponse: 3, explication: "*pero* (mais) a un r simple, *perro* (chien) un r fortement roulé. Le sens change !" },
        { type: "vf", question: "Le mot *canción* porte un accent écrit parce qu'il se termine par n mais est accentué sur la dernière syllabe.", reponse: true, explication: "Un mot terminé par **n** devrait être accentué sur l'avant-dernière syllabe. *Canción* est accentué sur la dernière, donc on écrit le tilde." },
        { type: "qcm", question: "Dans *queso*, comment se prononce *qu* ?", choix: ["« kou »", "« k »", "« kw »", "« tch »"], reponse: 1, explication: "Devant e et i, **qu** se prononce « k » et le u est muet : « késo »." },
        { type: "saisie", question: "Ajoute la ponctuation espagnole manquante au début : « ...Hola, amigos! » (écris seulement le signe)", reponses: ["¡"], explication: "Une exclamation s'ouvre par **¡** : *¡Hola, amigos!*" },
        { type: "redaction", question: "Explique, pour chacun de ces mots, où tombe l'accent tonique et pourquoi : *hablan*, *hablar*, *música*.", corrige: "- *hablan* : se termine par **n** → accent sur l'avant-dernière syllabe : **ha**-blan. Pas de tilde car la règle est respectée.\n- *hablar* : se termine par la consonne **r** → accent sur la dernière syllabe : ha-**blar**. Pas de tilde.\n- *música* : se termine par une voyelle, il devrait être accentué sur l'avant-dernière (si), mais on dit **mú**-si-ca : la règle n'est pas respectée, donc on écrit un **accent écrit** sur le ú." }
      ]
    },
    {
      id: "saludos-presentarse",
      titre: "Saluer et se présenter (tú et usted)",
      theme: "Communiquer",
      cours: `
## Saluer et prendre congé
| Espagnol | Français |
|---|---|
| ¡Hola! | Salut ! Bonjour ! |
| Buenos días | Bonjour (le matin) |
| Buenas tardes | Bonjour (l'après-midi) |
| Buenas noches | Bonsoir / Bonne nuit |
| ¿Qué tal? | Ça va ? |
| Bien, gracias. ¿Y tú? | Bien, merci. Et toi ? |
| Adiós / Hasta luego | Au revoir / À plus tard |
| Hasta mañana | À demain |

## Se présenter
- *¿Cómo te llamas?* → **Me llamo** Lucía. (Je m'appelle Lucía.)
- *¿Cuántos años tienes?* → **Tengo** doce años. (J'ai douze ans : en espagnol, l'âge se dit avec *tener*.)
- *¿De dónde eres?* → **Soy** francés / francesa. **Soy de** Lyon.
- *¿Dónde vives?* → **Vivo en** París.

## Tú et usted
- **tú** = tutoiement (amis, famille, camarades) : *¿Cómo te llamas?*
- **usted** = vouvoiement de politesse (adulte inconnu, professeur, personne âgée). Le verbe se conjugue à la **3e personne du singulier** : *¿Cómo se llama usted?*, *¿De dónde es usted?*
- **ustedes** = vouvoiement pluriel, verbe à la **3e personne du pluriel**. En Amérique latine, *ustedes* remplace aussi *vosotros*.
- Abréviations : *Ud.* et *Uds.*

>! **Exemple** : au professeur : *Buenos días, señora. ¿Cómo está usted?* — à un camarade : *¡Hola! ¿Cómo estás?*

## Les pronoms sujets
| Singulier | Pluriel |
|---|---|
| yo (je) | nosotros/as (nous) |
| tú (tu) | vosotros/as (vous, tutoiement pluriel) |
| él, ella, usted (il, elle, vous) | ellos, ellas, ustedes (ils, elles, vous) |

En espagnol, on **omet généralement le pronom sujet** : la terminaison du verbe suffit. *Hablo español* = je parle espagnol.

> **À retenir** : me llamo / tengo ... años / soy de / vivo en. Usted et ustedes se conjuguent à la 3e personne. On n'utilise le pronom sujet que pour insister.
`,
      exercices: [
        { type: "qcm", question: "Il est 16 h, tu salues ta voisine. Tu dis :", choix: ["Buenos días", "Buenas noches", "Buenas tardes", "Hasta mañana"], reponse: 2, explication: "*Buenas tardes* s'utilise l'après-midi (et jusqu'au début de la soirée)." },
        { type: "saisie", question: "Complète : « ¿Cómo te ...? » (Comment t'appelles-tu ?)", reponses: ["llamas"], explication: "*¿Cómo te llamas?* — réponse : *Me llamo...*" },
        { type: "saisie", question: "Traduis : « J'ai treize ans. »", reponses: ["Tengo trece años", "Yo tengo trece años", "Tengo 13 años"], explication: "L'âge se dit avec **tener** : *Tengo trece años*." },
        { type: "vf", question: "Avec *usted*, on conjugue le verbe à la 2e personne du singulier.", reponse: false, explication: "*Usted* se conjugue à la **3e personne du singulier** : *¿Cómo está usted?*" },
        { type: "qcm", question: "Tu demandes poliment à un monsieur âgé d'où il vient :", choix: ["¿De dónde es usted?", "¿De dónde eres?", "¿De dónde sois?", "¿Dónde vives tú?"], reponse: 0, explication: "Vouvoiement : *usted* + 3e personne : *¿De dónde es usted?*" },
        { type: "saisie", question: "Complète : « Soy ... Marsella. » (Je suis de Marseille.)", reponses: ["de"], explication: "*Ser de* + ville ou pays indique l'origine : *Soy de Marsella*." },
        { type: "qcm", question: "Quelle est la bonne réponse à « ¿Qué tal? » ?", choix: ["Me llamo Pablo.", "Vivo en Madrid.", "Tengo doce años.", "Muy bien, gracias. ¿Y tú?"], reponse: 3, explication: "*¿Qué tal?* = Ça va ? → *Muy bien, gracias. ¿Y tú?*" },
        { type: "saisie", question: "Traduis : « J'habite à Toulouse. »", reponses: ["Vivo en Toulouse", "Yo vivo en Toulouse"], explication: "*vivir en* + lieu : *Vivo en Toulouse*." },
        { type: "redaction", question: "Présente-toi en 5 phrases à un correspondant espagnol (nom, âge, nationalité, ville, salutation finale).", corrige: "Modèle :\n\n*¡Hola! Me llamo Léa. Tengo doce años. Soy francesa y vivo en Nantes, en el oeste de Francia. ¿Y tú? ¿Cómo te llamas? ¡Hasta pronto!*\n\nPoints vérifiés :\n- *me llamo* + prénom ;\n- *tengo* + âge + *años* ;\n- *soy* + nationalité accordée (*francés / francesa*) ;\n- *vivo en* + ville ;\n- ponctuation ¿ ? et ¡ !." }
      ]
    },
    {
      id: "articulos-genero-numero",
      titre: "Articles, genre et nombre",
      theme: "Grammaire",
      cours: `
## Les articles
| | Masculin | Féminin |
|---|---|---|
| Défini singulier | **el** chico | **la** chica |
| Défini pluriel | **los** chicos | **las** chicas |
| Indéfini singulier | **un** libro | **una** mesa |
| Indéfini pluriel | **unos** libros | **unas** mesas |

- Contractions : **a + el = al** (*Voy al colegio*), **de + el = del** (*la casa del profesor*).
- Il n'y a **pas d'article partitif** : *Como pan* = je mange du pain.
- Les noms féminins commençant par un **a tonique** prennent *el* au singulier : *el agua*, *el águila* (mais *las aguas*).

## Le genre
- En général, **-o** = masculin (*el libro*), **-a** = féminin (*la casa*).
- Exceptions courantes : *el día*, *el mapa*, *el problema*, *el idioma* (masculins) ; *la mano*, *la foto*, *la radio* (féminins).
- Les mots en **-ción, -dad, -tad** sont féminins : *la canción*, *la ciudad*, *la amistad*.
- Attention aux faux amis de genre : *la leche* (le lait), *el coche* (la voiture), *la nariz* (le nez), *la sal* (le sel), *el color* (la couleur).

## Le pluriel
- Mot terminé par une **voyelle** → **+s** : *casa* → *casas*.
- Mot terminé par une **consonne** → **+es** : *ciudad* → *ciudades*, *profesor* → *profesores*.
- **z → ces** : *lápiz* → *lápices*, *vez* → *veces*.
- Mots terminés par **-s** non accentués sur la dernière syllabe : invariables : *el lunes* → *los lunes*, *la crisis* → *las crisis* (mais *el autobús* → *los autobuses*).
- Attention aux accents : *canción* → *canciones* (le tilde disparaît), *joven* → *jóvenes* (il apparaît).

## L'accord de l'adjectif
- *alto* → *alta*, *altos*, *altas*.
- Adjectifs en **-e** ou consonne : même forme au masculin et au féminin : *un chico inteligente*, *una chica inteligente* ; *fácil* → *fáciles*.
- Nationalité : *francés* → *francesa* ; *español* → *española*.

> **À retenir** : el/la/los/las, un/una/unos/unas ; al et del ; pas de partitif ; pluriel en -s après voyelle, -es après consonne ; z devient c au pluriel.
`,
      exercices: [
        { type: "saisie", question: "Mets l'article défini : « ... ciudad »", reponses: ["la"], explication: "Les mots en **-dad** sont féminins : *la ciudad*." },
        { type: "saisie", question: "Mets l'article défini : « ... problema »", reponses: ["el"], explication: "*Problema* est masculin malgré son -a : *el problema*." },
        { type: "saisie", question: "Écris le pluriel de *lápiz*.", reponses: ["lápices"], explication: "**z → ces** : *lápiz* → *lápices*." },
        { type: "saisie", question: "Écris le pluriel de *canción*.", reponses: ["canciones"], explication: "On ajoute **-es** et l'accent écrit disparaît : *canciones* (accent tonique sur *cio*, conforme à la règle)." },
        { type: "qcm", question: "Traduis « Je vais au collège ».", choix: ["Voy a el colegio", "Voy en el colegio", "Voy al colegio", "Voy del colegio"], reponse: 2, explication: "**a + el = al** : *Voy al colegio*." },
        { type: "vf", question: "« Je bois de l'eau » se traduit *Bebo del agua*.", reponse: false, explication: "Pas d'article partitif en espagnol : *Bebo agua*." },
        { type: "qcm", question: "Quel nom est féminin ?", choix: ["coche", "día", "leche", "mapa"], reponse: 2, explication: "*la leche* (le lait) est féminin ; *el coche*, *el día*, *el mapa* sont masculins." },
        { type: "saisie", question: "Accorde l'adjectif : « unas chicas (simpático) »", reponses: ["simpáticas"], explication: "Féminin pluriel : *simpáticas*." },
        { type: "redaction", question: "Mets ces groupes nominaux au pluriel et explique la règle à chaque fois : *el profesor español*, *la mano*, *una actriz famosa*.", corrige: "- *el profesor español* → **los profesores españoles** : consonne finale → +es pour le nom et l'adjectif.\n- *la mano* → **las manos** : voyelle finale → +s ; *mano* est féminin malgré le -o.\n- *una actriz famosa* → **unas actrices famosas** : z → ces ; l'adjectif en -a prend -s." }
      ]
    },
    {
      id: "ser-estar-tener-hay",
      titre: "Ser, estar, tener et hay",
      theme: "Grammaire",
      cours: `
## Les conjugaisons au présent
| | ser | estar | tener |
|---|---|---|---|
| yo | soy | estoy | tengo |
| tú | eres | estás | tienes |
| él/ella/usted | es | está | tiene |
| nosotros | somos | estamos | tenemos |
| vosotros | sois | estáis | tenéis |
| ellos/ustedes | son | están | tienen |

## Ser ou estar ? (« être »)
**Ser** sert à définir, à donner une caractéristique essentielle :
- identité, nationalité, origine : *Soy Lucas. Soy de Bélgica.*
- profession : *Mi madre es médica.*
- caractère, description permanente : *Es alto y simpático.*
- l'heure et la date : *Son las tres. Hoy es lunes.*
- la matière, la possession : *La mesa es de madera. Es mi libro.*

**Estar** sert à situer et à exprimer un état :
- localisation : *Madrid está en el centro de España.*
- état passager, humeur, santé : *Estoy cansado. Estamos contentos.*
- *estar* + gérondif (action en cours) : *Estoy comiendo.*

>! **Comparer** : *Pablo es nervioso* (de caractère) / *Pablo está nervioso* (aujourd'hui, à cause de l'examen).

## Tener
- la possession : *Tengo un perro.*
- l'âge : *Tengo doce años.*
- des expressions : *tener hambre* (avoir faim), *tener sed* (soif), *tener frío / calor*, *tener miedo* (peur), *tener sueño* (sommeil).
- l'obligation : **tener que + infinitif** : *Tengo que estudiar.*

## Hay (il y a)
**Hay** est invariable et s'emploie avec un article indéfini, un nombre ou sans article : *Hay un parque. Hay tres alumnos. Hay árboles.*
Avec un article défini, on utilise **estar** : *El parque está cerca.*

> **À retenir** : ser = ce que l'on est (identité, caractère, heure) ; estar = où l'on est et comment on va ; tener = avoir et l'âge ; hay = il y a (invariable, jamais avec el/la).
`,
      exercices: [
        { type: "saisie", question: "Conjugue *ser* : « Nosotros ... franceses. »", reponses: ["somos"], explication: "*ser* : soy, eres, es, **somos**, sois, son." },
        { type: "saisie", question: "Conjugue *estar* : « Tú ... cansado. »", reponses: ["estás"], explication: "*estar* : estoy, **estás**, está... État passager → estar." },
        { type: "saisie", question: "Conjugue *tener* : « Ellos ... un gato. »", reponses: ["tienen"], explication: "*tener* : tengo, tienes, tiene, tenemos, tenéis, **tienen**." },
        { type: "qcm", question: "« Barcelona ... en Cataluña. »", choix: ["es", "está", "hay", "tiene"], reponse: 1, explication: "Localisation → **estar** : *Barcelona está en Cataluña*." },
        { type: "qcm", question: "« Mi padre ... profesor. »", choix: ["está", "hay", "es", "tiene"], reponse: 2, explication: "La profession s'exprime avec **ser**." },
        { type: "qcm", question: "« En mi calle ... dos panaderías. »", choix: ["están", "son", "hay", "tienen"], reponse: 2, explication: "**hay** = il y a, invariable, avec un nombre." },
        { type: "vf", question: "« Son las cinco » est correct pour dire l'heure.", reponse: true, explication: "L'heure se dit avec **ser** : *Es la una*, *Son las cinco*." },
        { type: "saisie", question: "Traduis : « J'ai faim. »", reponses: ["Tengo hambre", "Yo tengo hambre"], explication: "*avoir faim* = **tener hambre**." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Hay el museo en la plaza.", "El museo hay en la plaza.", "El museo es en la plaza.", "El museo está en la plaza."], reponse: 3, explication: "Avec un article défini (*el museo*), on situe avec **estar**." },
        { type: "redaction", question: "Décris ta meilleure amie ou ton meilleur ami en 5 phrases en utilisant ser, estar, tener et hay au moins une fois chacun.", corrige: "Modèle :\n\n*Mi mejor amiga se llama Inés. Es española y es muy simpática. Tiene doce años y tiene un hermano. Hoy está un poco triste porque está enferma. En su habitación hay muchos libros.*\n\n- **ser** : nationalité, caractère ;\n- **tener** : âge, possession ;\n- **estar** : état passager (triste, enferma) ;\n- **hay** : existence (muchos libros)." }
      ]
    },
    {
      id: "presente-regulares",
      titre: "Le présent des verbes réguliers",
      theme: "Grammaire",
      cours: `
## Trois groupes de verbes
Les verbes espagnols se terminent par **-ar**, **-er** ou **-ir**. Au présent, on enlève la terminaison et on ajoute :

| | hablar (parler) | comer (manger) | vivir (vivre) |
|---|---|---|---|
| yo | habl**o** | com**o** | viv**o** |
| tú | habl**as** | com**es** | viv**es** |
| él/ella/usted | habl**a** | com**e** | viv**e** |
| nosotros/as | habl**amos** | com**emos** | viv**imos** |
| vosotros/as | habl**áis** | com**éis** | viv**ís** |
| ellos/ellas/ustedes | habl**an** | com**en** | viv**en** |

## Verbes réguliers utiles
- en -ar : *estudiar, trabajar, escuchar, mirar, bailar, cantar, nadar, tomar, llegar, visitar, desayunar, cenar*
- en -er : *beber, leer, aprender, comprender, correr, vender*
- en -ir : *escribir, abrir, recibir, compartir, subir*

## Les verbes pronominaux
Le pronom réfléchi se place **avant** le verbe conjugué : *me, te, se, nos, os, se*.
- *levantarse* : **me** levanto, **te** levantas, **se** levanta, **nos** levantamos, **os** levantáis, **se** levantan.
- Autres : *llamarse, ducharse, lavarse, acostarse* (irrégulier : me acuesto).

## La négation et la question
- Négation : **no** avant le verbe : *No hablo alemán.*
- Question : même ordre, seule l'intonation et les signes ¿ ? changent : *¿Hablas inglés?*

>! **Méthode** : 1) repère le groupe (-ar, -er, -ir) ; 2) enlève la terminaison ; 3) ajoute la terminaison de la personne. *escribir, nosotros* → escrib- → **escribimos**.

> **À retenir** : -ar : o, as, a, amos, áis, an ; -er : o, es, e, emos, éis, en ; -ir : o, es, e, imos, ís, en.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *hablar* : « Yo ... español. »", reponses: ["hablo"], explication: "-ar, yo → **-o** : *hablo*." },
        { type: "saisie", question: "Conjugue *comer* : « Nosotros ... en la cantina. »", reponses: ["comemos"], explication: "-er, nosotros → **-emos** : *comemos*." },
        { type: "saisie", question: "Conjugue *vivir* : « Vosotros ... en Sevilla. »", reponses: ["vivís"], explication: "-ir, vosotros → **-ís** : *vivís*." },
        { type: "saisie", question: "Conjugue *escuchar* : « Ellas ... música. »", reponses: ["escuchan"], explication: "-ar, ellas → **-an** : *escuchan*." },
        { type: "saisie", question: "Conjugue *leer* : « Tú ... un libro. »", reponses: ["lees"], explication: "-er, tú → **-es** : *lees*." },
        { type: "qcm", question: "Quelle forme correspond à « nous écrivons » ?", choix: ["escribemos", "escribimos", "escribamos", "escribís"], reponse: 1, explication: "Les verbes en -ir font **-imos** : *escribimos*." },
        { type: "saisie", question: "Conjugue *levantarse* : « Yo ... a las siete. »", reponses: ["me levanto"], explication: "Pronom réfléchi avant le verbe : *me levanto*." },
        { type: "vf", question: "« No bebo café » signifie « Je ne bois pas de café ».", reponse: true, explication: "**no** + verbe suffit pour la négation, et pas d'article partitif." },
        { type: "saisie", question: "Traduis : « Est-ce que tu étudies l'anglais ? »", reponses: ["¿Estudias inglés?", "Estudias inglés", "¿Tú estudias inglés?", "Tú estudias inglés", "¿Estudias el inglés?"], explication: "Pas de « est-ce que » : *¿Estudias inglés?*" },
        { type: "redaction", question: "Raconte ta journée habituelle en 6 phrases au présent (verbes réguliers et pronominaux).", corrige: "Modèle :\n\n*Me levanto a las siete. Desayuno con mi hermana: tomo un chocolate. Llego al colegio a las ocho. Estudio matemáticas, francés y español. Por la tarde, escucho música y leo. Ceno con mi familia a las ocho y media.*\n\nVérifie : terminaisons de *yo* en **-o**, pronom *me* avant *levanto*, *a las* + heure." }
      ]
    },
    {
      id: "presente-irregulares",
      titre: "Le présent des verbes irréguliers",
      theme: "Grammaire",
      cours: `
## Les diphtongues (verbes à changement de voyelle)
Quand la voyelle du radical est accentuée, elle change. Cela touche **yo, tú, él, ellos** mais **pas nosotros ni vosotros** (on parle de « verbes en botte »).

| | e → ie : querer | o → ue : poder | e → i : pedir |
|---|---|---|---|
| yo | qu**ie**ro | p**ue**do | p**i**do |
| tú | qu**ie**res | p**ue**des | p**i**des |
| él | qu**ie**re | p**ue**de | p**i**de |
| nosotros | queremos | podemos | pedimos |
| vosotros | queréis | podéis | pedís |
| ellos | qu**ie**ren | p**ue**den | p**i**den |

- e → ie : *pensar, empezar, cerrar, preferir, entender, despertarse*
- o → ue : *dormir, volver, contar, encontrar, acostarse, costar* ; **jugar** fait **u → ue** : *juego, juegas...*
- e → i : *servir, repetir, vestirse*

## Les verbes en -go (1re personne irrégulière)
| Infinitif | yo | suite |
|---|---|---|
| hacer (faire) | ha**go** | haces, hace... |
| poner (mettre) | pon**go** | pones... |
| salir (sortir) | sal**go** | sales... |
| tener | ten**go** | tienes, tiene... (+ diphtongue) |
| venir | ven**go** | vienes, viene... |
| decir | di**go** | dices, dice... |
| traer | trai**go** | traes... |

Autres 1res personnes irrégulières : *conocer* → **conozco**, *saber* → **sé**, *dar* → **doy**, *ver* → **veo**.

## Les grands irréguliers
- **ir** (aller) : voy, vas, va, vamos, vais, van.
- **ser** : soy, eres, es, somos, sois, son ; **estar** : estoy, estás...

> **À retenir** : la diphtongue ne touche jamais nosotros et vosotros ; hacer → hago, salir → salgo, poner → pongo ; ir → voy, vas, va, vamos, vais, van.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *querer* : « Yo ... un helado. »", reponses: ["quiero"], explication: "e → ie : *quiero*." },
        { type: "saisie", question: "Conjugue *poder* : « Nosotros ... salir. »", reponses: ["podemos"], explication: "Pas de diphtongue avec nosotros : *podemos*." },
        { type: "saisie", question: "Conjugue *dormir* : « Mi hermano ... mucho. »", reponses: ["duerme"], explication: "o → ue : *duerme*." },
        { type: "saisie", question: "Conjugue *jugar* : « Tú ... al fútbol. »", reponses: ["juegas"], explication: "*jugar* : u → ue : *juegas*." },
        { type: "saisie", question: "Conjugue *hacer* : « Yo ... los deberes. »", reponses: ["hago"], explication: "Verbe en -go : *hago*." },
        { type: "saisie", question: "Conjugue *ir* : « Ellos ... a la playa. »", reponses: ["van"], explication: "*ir* : voy, vas, va, vamos, vais, **van**." },
        { type: "qcm", question: "Quelle forme est correcte pour *pedir*, ellos ?", choix: ["peden", "pieden", "piden", "pedimos"], reponse: 2, explication: "e → i : *piden*." },
        { type: "qcm", question: "« Je sors avec mes amis » :", choix: ["Salgo con mis amigos", "Salo con mis amigos", "Sale con mis amigos", "Salgo con mi amigos"], reponse: 0, explication: "*salir* → **salgo**, et *mis* au pluriel." },
        { type: "vf", question: "*Empezar* donne *empiezamos* à la 1re personne du pluriel.", reponse: false, explication: "Nosotros ne diphtongue pas : *empezamos*." },
        { type: "redaction", question: "Écris 5 phrases sur ton week-end avec au moins 5 verbes irréguliers différents (diphtongue, -go, ir).", corrige: "Modèle :\n\n*El sábado me despierto tarde. Hago los deberes por la mañana. Por la tarde, juego al baloncesto con mis amigos y después salgo con ellos. El domingo voy a casa de mis abuelos y vuelvo a las siete. No puedo acostarme tarde porque el lunes empiezo las clases a las ocho.*\n\nVerbes : despertarse (e → ie), hacer (hago), jugar (juego), salir (salgo), ir (voy), volver (vuelvo), poder (puedo), empezar (empiezo)." }
      ]
    },
    {
      id: "gustar",
      titre: "Gustar et les goûts",
      theme: "Grammaire",
      cours: `
## La construction de gustar
*Gustar* fonctionne « à l'envers » : ce qui plaît est le **sujet**, la personne est un **pronom complément**.
*Me gusta el chocolate* = le chocolat me plaît → j'aime le chocolat.

| Pronom | singulier / infinitif | pluriel |
|---|---|---|
| (a mí) me | gusta | gustan |
| (a ti) te | gusta | gustan |
| (a él, ella, usted) le | gusta | gustan |
| (a nosotros) nos | gusta | gustan |
| (a vosotros) os | gusta | gustan |
| (a ellos, ustedes) les | gusta | gustan |

- **gusta** + nom singulier ou infinitif : *Me gusta la música. Me gusta bailar.*
- **gustan** + nom pluriel : *Me gustan los videojuegos.*
- Pour insister ou préciser : *A mí me gusta... A Pedro le gusta...*
- Négation : *No me gusta el pescado.*

## Exprimer accord et désaccord
- *A mí también* (moi aussi) après une phrase affirmative.
- *A mí tampoco* (moi non plus) après une phrase négative.
- *A mí sí* / *A mí no* pour marquer le contraste.

## Les verbes qui fonctionnent comme gustar
- **encantar** (adorer) : *Me encanta el cine.* (jamais avec *mucho*)
- **interesar** : *Nos interesa la historia.*
- **doler** (avoir mal) : *Me duele la cabeza. Me duelen los pies.*
- **apetecer** (avoir envie) : *¿Te apetece un zumo?*

## Graduer
*Me gusta mucho* / *me gusta bastante* / *no me gusta nada* ; préférer : *prefiero* (verbe normal).

> **À retenir** : me/te/le/nos/os/les + gusta (singulier, infinitif) ou gustan (pluriel). Moi aussi = a mí también ; moi non plus = a mí tampoco.
`,
      exercices: [
        { type: "saisie", question: "Complète : « Me ... los gatos. »", reponses: ["gustan"], explication: "*los gatos* est pluriel → **gustan**." },
        { type: "saisie", question: "Complète : « ¿Te ... leer? »", reponses: ["gusta"], explication: "Infinitif → **gusta**." },
        { type: "saisie", question: "Complète avec le pronom : « A mis padres ... gusta viajar. »", reponses: ["les"], explication: "*a mis padres* = a ellos → **les**." },
        { type: "qcm", question: "« Nous aimons le football » :", choix: ["Nos gustan el fútbol", "Les gusta el fútbol", "Nosotros gustamos el fútbol", "Nos gusta el fútbol"], reponse: 3, explication: "*Nos gusta* + nom singulier." },
        { type: "qcm", question: "— No me gustan las matemáticas. — Moi non plus.", choix: ["A mí también", "A mí sí", "A mí tampoco", "Yo no"], reponse: 2, explication: "Après une phrase négative : **a mí tampoco**." },
        { type: "vf", question: "Pour dire « j'adore le cinéma », la formulation recommandée est « Me encanta mucho el cine ».", reponse: false, explication: "*Encantar* exprime déjà un goût très fort : *mucho* est redondant (on l'entend parfois, mais on l'évite à l'écrit et en contrôle). On dit simplement **Me encanta el cine**." },
        { type: "saisie", question: "Traduis : « J'ai mal aux dents. »", reponses: ["Me duelen los dientes", "Me duelen las muelas"], explication: "*doler* fonctionne comme gustar : *los dientes* pluriel → **me duelen**." },
        { type: "saisie", question: "Complète : « A Ana ... encanta bailar. »", reponses: ["le"], explication: "*a Ana* = a ella → **le**." },
        { type: "redaction", question: "Écris 6 phrases sur tes goûts et ceux de ta famille (gustar, encantar, no gustar nada, también/tampoco).", corrige: "Modèle :\n\n*Me encanta el baloncesto y me gustan mucho los cómics. No me gusta nada la verdura. A mi hermano le gustan los videojuegos; a mí también. A mis padres les gusta viajar por España. A mi madre no le gusta el frío, y a mí tampoco.*\n\nVérifie l'accord : gusta + singulier/infinitif, gustan + pluriel, et le bon pronom (le / les)." }
      ]
    },
    {
      id: "numeros-fecha-hora",
      titre: "Les nombres, la date et l'heure",
      theme: "Communiquer",
      cours: `
## Les nombres
| | | |
|---|---|---|
| 0 cero | 10 diez | 20 veinte |
| 1 uno | 11 once | 21 veintiuno |
| 2 dos | 12 doce | 22 veintidós |
| 3 tres | 13 trece | 30 treinta |
| 4 cuatro | 14 catorce | 31 treinta y uno |
| 5 cinco | 15 quince | 40 cuarenta |
| 6 seis | 16 dieciséis | 50 cincuenta |
| 7 siete | 17 diecisiete | 60 sesenta |
| 8 ocho | 18 dieciocho | 70 setenta |
| 9 nueve | 19 diecinueve | 80 ochenta, 90 noventa |

- 16 à 29 s'écrivent en un mot : *dieciséis, veintitrés*.
- À partir de 31, on relie avec **y** : *cuarenta y cinco*.
- 100 = **cien** (exactement) ; 101 = *ciento uno* ; 200 = *doscientos* ; 500 = *quinientos* ; 1000 = *mil* ; 2026 = *dos mil veintiséis*.
- *uno* devient **un** devant un nom masculin : *un libro*, *veintiún años*.

## La date
- Jours (masculins, sans majuscule) : *lunes, martes, miércoles, jueves, viernes, sábado, domingo*. *El lunes* = lundi (ce lundi-là) ; *los lunes* = le lundi (chaque lundi).
- Mois (sans majuscule) : *enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre*.
- *Hoy es lunes, 12 de octubre de 2026.* ; *Mi cumpleaños es el 3 de mayo.*
- Saisons : *la primavera, el verano, el otoño, el invierno*.

## L'heure
- *¿Qué hora es?* → **Es la una.** / **Son las dos, las tres...**
- *y cuarto* (et quart), *y media* (et demie), *menos cuarto* (moins le quart) : *Son las cuatro menos cuarto* = 3 h 45.
- *¿A qué hora...?* → *A las ocho.*
- *de la mañana / de la tarde / de la noche* ; *al mediodía*, *a medianoche*.

> **À retenir** : 16-29 en un seul mot ; 31 et plus avec « y » ; cien pour 100 tout rond ; Es la una / Son las dos ; jours et mois sans majuscule.
`,
      exercices: [
        { type: "saisie", question: "Écris en lettres : 15", reponses: ["quince"], explication: "15 = **quince**." },
        { type: "saisie", question: "Écris en lettres : 27", reponses: ["veintisiete"], explication: "De 21 à 29, en un seul mot : **veintisiete**." },
        { type: "saisie", question: "Écris en lettres : 48", reponses: ["cuarenta y ocho"], explication: "Au-delà de 30, on relie par *y* : **cuarenta y ocho**." },
        { type: "saisie", question: "Écris en lettres : 100", reponses: ["cien"], explication: "100 tout rond = **cien**." },
        { type: "qcm", question: "Comment dit-on « Il est 1 h » ?", choix: ["Es la una", "Son la una", "Es las una", "Son las uno"], reponse: 0, explication: "1 h est singulier : **Es la una**." },
        { type: "qcm", question: "« Son las seis menos cuarto » signifie :", choix: ["6 h 15", "5 h 45", "6 h 45", "5 h 15"], reponse: 1, explication: "*menos cuarto* = moins le quart : 6 h − 15 min = **5 h 45**." },
        { type: "saisie", question: "Quel jour vient après *miércoles* ?", reponses: ["jueves"], explication: "lunes, martes, miércoles, **jueves**, viernes..." },
        { type: "vf", question: "En espagnol, les mois prennent une majuscule : *Enero*.", reponse: false, explication: "Comme en français, jours et mois s'écrivent sans majuscule : *enero*." },
        { type: "saisie", question: "Traduis : « Mon anniversaire est le 14 juillet. »", reponses: ["Mi cumpleaños es el catorce de julio", "Mi cumpleaños es el 14 de julio"], explication: "*el* + jour + *de* + mois : *el 14 de julio*." },
        { type: "redaction", question: "Écris en toutes lettres la date d'aujourd'hui (lundi 19 octobre 2026) et l'heure 8 h 30 du matin, puis 21 h 15.", corrige: "- *Hoy es lunes, diecinueve de octubre de dos mil veintiséis.*\n- *Son las ocho y media de la mañana.*\n- *Son las nueve y cuarto de la noche.*\n\nRemarques : *diecinueve* en un mot ; *dos mil veintiséis* (veintiséis avec accent) ; en conversation, on dit plutôt « las nueve » que « las veintiuna »." }
      ]
    },
    {
      id: "familia-descripcion",
      titre: "La famille, le physique, le caractère et les possessifs",
      theme: "Vocabulaire",
      cours: `
## La famille
| Espagnol | Français |
|---|---|
| el padre / la madre | le père / la mère |
| los padres | les parents |
| el hermano / la hermana | le frère / la sœur |
| el abuelo / la abuela | le grand-père / la grand-mère |
| el tío / la tía | l'oncle / la tante |
| el primo / la prima | le cousin / la cousine |
| el hijo / la hija | le fils / la fille |
| hijo único / hija única | enfant unique |

Le masculin pluriel désigne un groupe mixte : *mis hermanos* = mes frères et sœurs.

## Les possessifs (devant le nom)
| | un objet | plusieurs objets |
|---|---|---|
| yo | mi | mis |
| tú | tu | tus |
| él, ella, usted | su | sus |
| nosotros | nuestro / nuestra | nuestros / nuestras |
| vosotros | vuestro / vuestra | vuestros / vuestras |
| ellos, ustedes | su | sus |

*mi* (mon, ma) n'a pas d'accent écrit ; *mí* avec accent est un pronom (*a mí*). *su* peut vouloir dire son, sa, leur, votre.

## La description physique (ser, tener, llevar)
- **ser** + adjectif : *alto/bajo, delgado/gordito, guapo, moreno/rubio/pelirrojo, joven/mayor*.
- **tener** + nom : *tengo el pelo corto / largo / rizado / liso*, *tiene los ojos azules / verdes / marrones*.
- **llevar** (porter) : *lleva gafas, barba, una camiseta*.

## Le caractère
*simpático/antipático, alegre, serio, tímido, trabajador/perezoso, divertido, generoso, inteligente, tranquilo, hablador*.
Nuancer : *muy, bastante, un poco* (devant un défaut) : *Es un poco perezoso.*

>! **Exemple** : *Mi prima Carmen es alta y morena. Tiene el pelo largo y los ojos negros. Lleva gafas. Es muy divertida pero un poco habladora.*

> **À retenir** : ser + adjectif, tener + el pelo / los ojos, llevar + vêtements, lunettes. Possessifs : mi(s), tu(s), su(s), nuestro/a(s), vuestro/a(s).
`,
      exercices: [
        { type: "saisie", question: "Traduis : « mes grands-parents »", reponses: ["mis abuelos"], explication: "*mis* (pluriel) + *abuelos* (groupe mixte au masculin pluriel)." },
        { type: "saisie", question: "Le frère de ma mère est mon ...", reponses: ["tío"], explication: "L'oncle = **el tío**." },
        { type: "saisie", question: "Complète avec le possessif de *nosotros* : « ... casa es grande. »", reponses: ["nuestra"], explication: "*casa* est féminin singulier → **nuestra**." },
        { type: "qcm", question: "« Il a les yeux bleus » :", choix: ["Es los ojos azules", "Lleva los ojos azules", "Tiene los ojos azules", "Tiene ojos azul"], reponse: 2, explication: "On utilise **tener** + *los ojos* + adjectif accordé." },
        { type: "qcm", question: "« Elle porte des lunettes » :", choix: ["Tiene gafas", "Es gafas", "Lleva gafas", "Está gafas"], reponse: 2, explication: "*llevar* = porter (vêtements, lunettes, barbe)." },
        { type: "vf", question: "*Su libro* peut signifier « leur livre ».", reponse: true, explication: "*su* = son, sa, leur, votre (usted)." },
        { type: "saisie", question: "Donne le contraire de *trabajador*.", reponses: ["perezoso", "vago", "holgazán"], explication: "*trabajador* (travailleur) ≠ **perezoso** (paresseux)." },
        { type: "saisie", question: "Accorde : « Mis hermanas son muy (alegre) »", reponses: ["alegres"], explication: "Adjectif en -e : même forme masc./fém., +s au pluriel." },
        { type: "redaction", question: "Présente ta famille en 6 à 8 phrases (membres, âge, physique, caractère) en utilisant des possessifs.", corrige: "Modèle :\n\n*En mi familia somos cuatro: mi padre, mi madre, mi hermano y yo. Mi padre se llama Marc; es alto y tiene el pelo corto y gris. Lleva gafas. Es muy trabajador. Mi madre es morena y tiene los ojos verdes; es alegre y divertida. Mi hermano Tom tiene nueve años: es rubio y un poco travieso. Nuestros abuelos viven en Bretaña. ¿Y tu familia?*\n\nVérifie : ser + adjectif, tener + pelo/ojos, llevar + gafas, possessifs mi/mis/nuestros accordés." }
      ]
    },
    {
      id: "colegio-horario",
      titre: "Le collège et l'emploi du temps",
      theme: "Vocabulaire",
      cours: `
## Les matières (las asignaturas)
| Espagnol | Français |
|---|---|
| las matemáticas | les maths |
| la lengua (francesa) | le français |
| el inglés, el español | l'anglais, l'espagnol |
| la historia y la geografía | l'histoire-géo |
| las ciencias naturales / la biología | les SVT |
| la física y química | la physique-chimie |
| la tecnología | la technologie |
| la educación física | l'EPS |
| la música, el dibujo / la plástica | la musique, les arts plastiques |

## Le matériel et les lieux
- *el cuaderno, el libro, el lápiz, el bolígrafo (el boli), la goma, la regla, las tijeras, la mochila, el estuche*.
- *el aula / la clase, el patio, el comedor (la cantina), la biblioteca, el gimnasio, el laboratorio*.
- Les personnes : *el profesor / la profesora, el alumno / la alumna, el compañero, el director*.

## Parler de son emploi du temps (el horario)
- *Los lunes tengo matemáticas a las ocho.*
- *Las clases empiezan a las ocho y terminan a las cinco.*
- *El recreo es a las diez.*
- *Mi asignatura favorita es la historia porque es interesante.*
- Donner son avis : *Me gusta / No me gusta... porque es fácil / difícil / aburrido / divertido.*

## Le collège en Espagne
En Espagne, l'école secondaire s'appelle la **ESO** (*Educación Secundaria Obligatoria*), de 12 à 16 ans. Les cours finissent souvent vers 14 h 30 ; beaucoup d'élèves mangent ensuite à la maison. Les vacances d'été durent près de trois mois (fin juin à mi-septembre).

## Les expressions utiles en classe
*¿Puedo ir al baño? ¿Cómo se dice ... en español? No entiendo. ¿Puede repetir, por favor?* (vouvoiement du professeur avec *usted*).

> **À retenir** : tener + matière ; empezar (empiezan) et terminar ; « porque » pour justifier ; en Espagne, la ESO et des journées qui finissent tôt.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la cour de récréation »", reponses: ["el patio", "patio"], explication: "*el patio* = la cour ; *el recreo* = la récréation (le moment)." },
        { type: "saisie", question: "Traduis : « la gomme »", reponses: ["la goma", "goma"], explication: "**la goma**." },
        { type: "qcm", question: "« La educación física » correspond à :", choix: ["la physique", "l'éducation civique", "la SVT", "l'EPS"], reponse: 3, explication: "*educación física* = éducation physique et sportive." },
        { type: "saisie", question: "Conjugue *empezar* : « Las clases ... a las ocho. »", reponses: ["empiezan"], explication: "Diphtongue e → ie : *empiezan*." },
        { type: "vf", question: "En Espagne, le collège correspond à la ESO.", reponse: true, explication: "ESO = Educación Secundaria Obligatoria (12-16 ans)." },
        { type: "qcm", question: "Tu veux demander au professeur de répéter. Tu dis :", choix: ["¿Repites, por favor?", "¿Puede repetir, por favor?", "¡Repite!", "¿Puedes repetir, tío?"], reponse: 1, explication: "On vouvoie le professeur : *usted* → *¿Puede repetir?* (Remarque culturelle : en Espagne, beaucoup d'élèves tutoient leurs professeurs, mais en classe en France on attend le vouvoiement, plus poli.)" },
        { type: "saisie", question: "Traduis : « Je n'aime pas les maths parce que c'est difficile. »", reponses: ["No me gustan las matemáticas porque son difíciles", "No me gustan las matemáticas porque es difícil", "No me gustan las mates porque son difíciles", "No me gustan las mates porque es difícil"], explication: "*las matemáticas* est pluriel → *gustan* ; *porque* = parce que." },
        { type: "saisie", question: "Traduis : « la cantine »", reponses: ["el comedor", "la cantina", "comedor", "cantina"], explication: "En Espagne on dit surtout **el comedor**." },
        { type: "redaction", question: "Décris ta journée du mardi au collège (heures, matières, avis justifiés) en 6 phrases.", corrige: "Modèle :\n\n*Los martes las clases empiezan a las ocho y media. Primero tengo inglés y después matemáticas. El recreo es a las diez y veinte. A las once tengo español: es mi asignatura favorita porque la profesora es muy simpática. Como en el comedor a las doce y media. Por la tarde tengo educación física y termino a las cuatro y media. No me gusta la tecnología porque es un poco aburrida.*" }
      ]
    },
    {
      id: "casa-demostrativos",
      titre: "La maison et les démonstratifs",
      theme: "Vocabulaire",
      cours: `
## Les pièces et le logement
| Espagnol | Français |
|---|---|
| la casa / el piso | la maison / l'appartement |
| la cocina | la cuisine |
| el salón | le salon |
| el comedor | la salle à manger |
| el dormitorio / la habitación | la chambre |
| el cuarto de baño | la salle de bains |
| el jardín, la terraza | le jardin, la terrasse |
| la escalera | l'escalier |

Les meubles : *la cama, la mesa, la silla, el armario, la estantería, el sofá, la lámpara, el escritorio*.

## Situer (estar + prépositions)
*encima de* (sur), *debajo de* (sous), *delante de* (devant), *detrás de* (derrière), *al lado de* (à côté de), *entre* (entre), *enfrente de* (en face de), *cerca de / lejos de* (près / loin de), *a la derecha / a la izquierda de*.
*La lámpara está encima del escritorio.* (de + el = del)

## Les démonstratifs (trois degrés d'éloignement)
| Proximité | masc. sing. | fém. sing. | masc. pl. | fém. pl. | adverbe |
|---|---|---|---|---|---|
| près de moi | este | esta | estos | estas | aquí |
| près de toi | ese | esa | esos | esas | ahí |
| loin des deux | aquel | aquella | aquellos | aquellas | allí |

- *Este libro es mío.* (le livre que je tiens)
- *¿Esa mochila es tuya?* (celle près de toi)
- *Aquella casa es muy antigua.* (là-bas)
- Formes neutres : *esto, eso, aquello* : *¿Qué es esto?*

>! **Exemple** : *Mi habitación es pequeña pero bonita. Hay una cama, un escritorio y una estantería. La cama está al lado de la ventana.*

> **À retenir** : hay pour dire ce qu'il y a, estar pour situer ; este / ese / aquel selon la distance ; aquí, ahí, allí.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la chambre »", reponses: ["el dormitorio", "la habitación", "dormitorio", "habitación", "el cuarto", "cuarto"], explication: "**el dormitorio** ou **la habitación**." },
        { type: "saisie", question: "Traduis : « la cuisine »", reponses: ["la cocina", "cocina"], explication: "**la cocina** (*cocinar* = cuisiner)." },
        { type: "qcm", question: "« Le chat est sous la table » :", choix: ["El gato está encima de la mesa", "El gato es debajo de la mesa", "El gato está debajo de la mesa", "Hay el gato debajo de la mesa"], reponse: 2, explication: "*debajo de* = sous ; on situe avec **estar**." },
        { type: "saisie", question: "Complète avec un démonstratif (objet près de moi) : « ... silla es cómoda. »", reponses: ["esta"], explication: "Près de moi, féminin singulier : **esta**." },
        { type: "saisie", question: "Complète avec un démonstratif (objets loin, masculin pluriel) : « ... árboles son altos. »", reponses: ["aquellos"], explication: "Loin des deux interlocuteurs : **aquellos**." },
        { type: "qcm", question: "« Ese » désigne un objet :", choix: ["près de celui à qui l'on parle", "près de celui qui parle", "très loin", "invisible"], reponse: 0, explication: "*ese* = près de toi (correspond à l'adverbe *ahí*)." },
        { type: "vf", question: "« La lámpara está encima de el escritorio » est correct.", reponse: false, explication: "On contracte **de + el = del** : *encima del escritorio*." },
        { type: "saisie", question: "Traduis : « Qu'est-ce que c'est que ça ? » (objet dans ta main)", reponses: ["¿Qué es esto?", "Qué es esto"], explication: "Forme neutre **esto** pour un objet non identifié près de soi." },
        { type: "redaction", question: "Décris ta chambre en 6 phrases (meubles, place des objets, avis) avec hay, estar et au moins un démonstratif.", corrige: "Modèle :\n\n*Mi habitación está en el primer piso. Es pequeña pero muy luminosa. Hay una cama, un escritorio, una silla y un armario. La cama está debajo de la ventana y el escritorio está al lado del armario. Encima del escritorio hay un ordenador. Este póster de Rosalía es mi favorito.*" }
      ]
    },
    {
      id: "comida",
      titre: "La nourriture et les repas",
      theme: "Vocabulaire",
      cours: `
## Les aliments
| Espagnol | Français |
|---|---|
| el pan, el queso, el jamón | le pain, le fromage, le jambon |
| la carne, el pollo, el pescado | la viande, le poulet, le poisson |
| las verduras, la ensalada | les légumes, la salade |
| la fruta: la manzana, la naranja, el plátano, las fresas | les fruits : pomme, orange, banane, fraises |
| los huevos, el arroz, las patatas | les œufs, le riz, les pommes de terre |
| la leche, el agua, el zumo | le lait, l'eau, le jus |
| el pastel, el helado | le gâteau, la glace |

## Les repas en Espagne
- **el desayuno** (petit-déjeuner, vers 8 h) : *tostadas, churros con chocolate, café con leche*.
- **la comida** (déjeuner, entre 14 h et 15 h) : le repas principal. En Espagne, **el almuerzo** désigne souvent l'en-cas du milieu de matinée ; en Amérique latine, *el almuerzo* est le déjeuner.
- **la merienda** (goûter, vers 18 h).
- **la cena** (dîner, tard : 21 h-22 h).
- Verbes : *desayunar, comer, merendar (meriendo), cenar*.

## Plats typiques
*la tortilla de patatas* (omelette aux pommes de terre), *la paella* (Valence), *el gazpacho* (soupe froide andalouse), *las tapas*, *el turrón* (Noël) ; au Mexique : *los tacos, el guacamole* ; en Argentine : *el asado, las empanadas*.

## Au restaurant ou au marché
- *¿Qué vas a tomar?* — *Para mí, una tortilla, por favor.*
- *De primero... de segundo... de postre...*
- *La cuenta, por favor.*
- *¿Cuánto cuesta?* — *Cuesta dos euros.* / *¿Cuánto cuestan las fresas?*
- Quantités : *un kilo de, medio kilo de, una botella de, un poco de, mucho/a/os/as*.

>! *mucho* s'accorde devant un nom : *mucha agua, muchos tomates*. Devant un verbe il est invariable : *como mucho*.

> **À retenir** : desayuno, comida, merienda, cena ; les Espagnols mangent tard ; ¿Cuánto cuesta(n)? ; pas d'article partitif : *quiero pan*.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « le poisson » (aliment)", reponses: ["el pescado", "pescado"], explication: "**el pescado** (aliment) ; *el pez* = poisson vivant." },
        { type: "saisie", question: "Comment s'appelle le goûter en Espagne ?", reponses: ["la merienda", "merienda"], explication: "**la merienda**, vers 18 h." },
        { type: "qcm", question: "Le *gazpacho* est :", choix: ["un dessert de Noël", "un plat de riz valencien", "une omelette", "une soupe froide andalouse"], reponse: 3, explication: "Le gazpacho est une soupe froide à base de tomates, typique d'Andalousie." },
        { type: "vf", question: "En Espagne, on dîne souvent vers 21 h ou 22 h.", reponse: true, explication: "Les horaires des repas sont plus tardifs qu'en France." },
        { type: "saisie", question: "Complète : « ¿Cuánto ... los plátanos? »", reponses: ["cuestan"], explication: "*costar* (o → ue), pluriel : **cuestan**." },
        { type: "saisie", question: "Traduis : « Je veux du pain, s'il te plaît. »", reponses: ["Quiero pan, por favor"], explication: "Pas de partitif : *Quiero pan*." },
        { type: "qcm", question: "« Beaucoup d'eau » :", choix: ["mucho agua", "muchas aguas", "mucha agua", "muy agua"], reponse: 2, explication: "*agua* est féminin (malgré *el agua*) → **mucha agua**." },
        { type: "saisie", question: "Conjugue *merendar* : « Yo ... un bocadillo. »", reponses: ["meriendo"], explication: "e → ie : **meriendo**." },
        { type: "redaction", question: "Tu es au restaurant à Madrid. Écris le dialogue avec le serveur (6 répliques) : commande d'une entrée, d'un plat, d'un dessert, d'une boisson, et l'addition.", corrige: "Modèle :\n\n- *Camarero: Buenas tardes, ¿qué va a tomar?*\n- *Cliente: De primero, quiero un gazpacho, por favor.*\n- *Camarero: ¿Y de segundo?*\n- *Cliente: Una tortilla de patatas con ensalada. Y de postre, un flan.*\n- *Camarero: ¿Y para beber?*\n- *Cliente: Un zumo de naranja. ... La cuenta, por favor. ¿Cuánto es?*\n- *Camarero: Son quince euros.*\n\nLe serveur vouvoie le client (*usted*, *va a tomar*)." }
      ]
    },
    {
      id: "ocio-ir-a",
      titre: "Les loisirs et le futur proche (ir a + infinitif)",
      theme: "Communiquer",
      cours: `
## Les loisirs
| Espagnol | Français |
|---|---|
| jugar al fútbol / al baloncesto / al tenis | jouer au foot / basket / tennis |
| jugar a los videojuegos | jouer aux jeux vidéo |
| tocar la guitarra / el piano | jouer de la guitare / du piano |
| nadar, montar en bici, patinar | nager, faire du vélo, du roller |
| ir al cine, ir de compras | aller au cinéma, faire les magasins |
| leer, dibujar, bailar, cantar | lire, dessiner, danser, chanter |
| salir con los amigos | sortir avec les amis |
| ver la tele, ver una serie | regarder la télé, une série |

Attention : *jugar a* (sport, jeu) ≠ *tocar* (instrument).

## La fréquence
*siempre* (toujours), *a menudo* (souvent), *a veces* (parfois), *nunca* (jamais), *todos los días*, *los fines de semana*, *dos veces por semana*.
*Nunca* placé avant le verbe suffit : *Nunca veo la tele.* Placé après, il faut *no* : *No veo nunca la tele.*

## Le futur proche : ir a + infinitif
**ir** conjugué + **a** + infinitif.
| | |
|---|---|
| voy a | jugar |
| vas a | salir |
| va a | comer |
| vamos a | bailar |
| vais a | ver |
| van a | estudiar |

- *Mañana voy a jugar al fútbol.*
- *Este verano vamos a viajar a México.*
- *¿Qué vas a hacer el sábado?*
- Indicateurs : *mañana, esta tarde, el fin de semana que viene, el próximo verano*.

## Proposer, accepter, refuser
*¿Quieres ir al cine conmigo?* — *¡Vale! / ¡Claro! / ¡Qué buena idea!* — *Lo siento, no puedo, tengo que estudiar.*
*conmigo* = avec moi, *contigo* = avec toi.

> **À retenir** : jugar a + sport, tocar + instrument ; ir a + infinitif pour un projet ; n'oublie jamais le « a ».
`,
      exercices: [
        { type: "qcm", question: "« Je joue de la guitare » :", choix: ["Toco la guitarra", "Juego a la guitarra", "Hago la guitarra", "Juego la guitarra"], reponse: 0, explication: "Pour un instrument : **tocar**." },
        { type: "saisie", question: "Complète : « Mis primos juegan ... baloncesto. »", reponses: ["al"], explication: "*jugar a + el* = **al** baloncesto." },
        { type: "saisie", question: "Futur proche : « Mañana (yo, ver) una película. » Écris le groupe verbal.", reponses: ["voy a ver"], explication: "*ir* conjugué + *a* + infinitif : **voy a ver**." },
        { type: "saisie", question: "Futur proche : « Este verano (nosotros, viajar) a Perú. »", reponses: ["vamos a viajar"], explication: "**vamos a viajar**." },
        { type: "qcm", question: "« ¿Qué vas a hacer el sábado? » signifie :", choix: ["Qu'as-tu fait samedi ?", "Que vas-tu faire samedi ?", "Que fais-tu le samedi ?", "Où vas-tu samedi ?"], reponse: 1, explication: "*ir a* + infinitif = futur proche." },
        { type: "vf", question: "« Nunca veo la tele » est correct.", reponse: true, explication: "*nunca* avant le verbe suffit ; après, il faudrait *no* : *No veo nunca la tele*." },
        { type: "saisie", question: "Traduis : « Tu veux venir avec moi ? »", reponses: ["¿Quieres venir conmigo?", "Quieres venir conmigo"], explication: "avec moi = **conmigo**." },
        { type: "qcm", question: "Quelle réponse est un refus poli ?", choix: ["¡Vale!", "¡Claro que sí!", "Lo siento, no puedo.", "¡Qué buena idea!"], reponse: 2, explication: "*Lo siento, no puedo* = désolé, je ne peux pas." },
        { type: "redaction", question: "Écris un message à un ami : dis ce que tu fais d'habitude le week-end (présent + fréquence), puis ce que tu vas faire ce week-end (ir a + infinitif), et propose-lui une sortie.", corrige: "Modèle :\n\n*¡Hola, Diego! Normalmente, los fines de semana juego al tenis y a veces voy de compras con mi madre. Nunca me levanto temprano. Pero este fin de semana va a ser diferente: el sábado voy a visitar a mis abuelos y el domingo vamos a ir a la playa. ¿Quieres venir conmigo al cine el domingo por la tarde? ¡Hasta pronto!*" }
      ]
    },
    {
      id: "mundo-hispano",
      titre: "Le monde hispanophone : pays, villes et fêtes",
      theme: "Culture",
      cours: `
## Où parle-t-on espagnol ?
L'espagnol est parlé par environ **500 millions** de personnes comme langue maternelle. Il est langue officielle dans **20 pays et à Porto Rico**, soit **21 pays et territoires** : l'Espagne, la Guinée équatoriale (en Afrique) et 19 pays et territoires d'Amérique (Mexique, Cuba, République dominicaine, Porto Rico (État libre associé aux États-Unis), Guatemala, Honduras, Salvador, Nicaragua, Costa Rica, Panama, Colombie, Venezuela, Équateur, Pérou, Bolivie, Chili, Argentine, Uruguay, Paraguay). Il est aussi très parlé aux États-Unis. Le **Mexique** est le pays qui compte le plus d'hispanophones (plus de 120 millions).

| Pays | Capitale | Nationalité |
|---|---|---|
| España | Madrid | español/a |
| México | Ciudad de México | mexicano/a |
| Argentina | Buenos Aires | argentino/a |
| Colombia | Bogotá | colombiano/a |
| Perú | Lima | peruano/a |
| Chile | Santiago | chileno/a |
| Cuba | La Habana | cubano/a |

## La géographie de l'Espagne
- Capitale **Madrid**, au centre ; 17 communautés autonomes (Andalucía, Cataluña, Galicia, País Vasco...).
- Autres langues officielles : le **catalan**, le **galicien**, le **basque** (euskera) ; l'espagnol s'appelle aussi **castellano**.
- Grandes villes : Barcelona, Valencia, Sevilla, Bilbao, Granada (l'Alhambra), Toledo.
- Îles : les **Baléares** (Méditerranée) et les **Canaries** (Atlantique).
- Fleuves : el Ebro, el Tajo, el Guadalquivir. Montagnes : los Pirineos, Sierra Nevada.

## L'Amérique latine
- La cordillère des **Andes**, la forêt amazonienne, le lac Titicaca (Pérou/Bolivie).
- Civilisations précolombiennes : les **Aztèques** et les **Mayas** (Mexique, Amérique centrale), les **Incas** (Pérou, Machu Picchu).

## Fêtes et traditions
- **las Fallas** (Valence, mars) : on brûle d'immenses statues.
- **la Semana Santa** (semaine sainte) : processions, surtout à Séville.
- **la Tomatina** (Buñol, août) : bataille de tomates.
- **los Sanfermines** (Pampelune, juillet) : lâcher de taureaux.
- **el Día de Muertos** (Mexique, 1er et 2 novembre) : on honore les défunts avec des autels, des calaveras (crânes en sucre) et des fleurs.
- **Nochevieja** (31 décembre) : on mange **12 grains de raisin** aux 12 coups de minuit.
- **los Reyes Magos** (6 janvier) : les Rois mages apportent les cadeaux aux enfants.

> **À retenir** : 21 pays et territoires hispanophones (20 pays + Porto Rico), le Mexique en tête ; Madrid au centre de l'Espagne, pays aux plusieurs langues ; Aztèques, Mayas, Incas ; Día de Muertos, Reyes Magos, 12 uvas.
`,
      exercices: [
        { type: "saisie", question: "Quelle est la capitale de l'Argentine ?", reponses: ["Buenos Aires"], explication: "**Buenos Aires**." },
        { type: "saisie", question: "Écris la nationalité au féminin : une fille du Mexique est ...", reponses: ["mexicana"], explication: "*mexicano* → **mexicana**." },
        { type: "qcm", question: "Dans quel pays se trouve le Machu Picchu ?", choix: ["Mexique", "Chili", "Pérou", "Bolivie"], reponse: 2, explication: "Le Machu Picchu, cité inca, est au **Pérou**." },
        { type: "qcm", question: "Que mange-t-on le soir du 31 décembre en Espagne ?", choix: ["des churros", "des tomates", "un turrón géant", "12 grains de raisin"], reponse: 3, explication: "On mange **12 uvas**, une à chaque coup de minuit." },
        { type: "vf", question: "Le Día de Muertos est une fête triste où il est interdit de faire la fête.", reponse: false, explication: "C'est une fête colorée et joyeuse : on accueille le souvenir des défunts avec des autels, des fleurs, de la musique et des crânes en sucre." },
        { type: "qcm", question: "Quelle langue n'est PAS officielle en Espagne ?", choix: ["le catalan", "le basque", "le portugais", "le galicien"], reponse: 2, explication: "Le **portugais** est la langue du Portugal et du Brésil." },
        { type: "saisie", question: "Dans quelle ville a lieu la fête de las Fallas ?", reponses: ["Valencia", "Valence"], explication: "Las Fallas ont lieu à **Valencia** en mars." },
        { type: "vf", question: "En Espagne, ce sont les Rois mages qui apportent les cadeaux, le 6 janvier.", reponse: true, explication: "*los Reyes Magos* passent dans la nuit du 5 au 6 janvier (Épiphanie) ; le 5 au soir, il y a la *cabalgata* (défilé des Rois mages) dans les rues." },
        { type: "redaction", question: "Présente en espagnol (5-6 phrases) une fête du monde hispanique de ton choix : où, quand, ce que l'on fait, ton avis.", corrige: "Modèle :\n\n*El Día de Muertos es una fiesta muy importante en México. Se celebra el uno y el dos de noviembre. Las familias preparan altares con fotos, flores de color naranja, velas y comida para recordar a sus muertos. También comen pan de muerto y calaveras de azúcar. No es una fiesta triste: hay música y mucha alegría. Me encanta esta tradición porque es muy original y colorida.*" }
      ]
    },
    {
      id: "tiempo-ropa-comparar",
      titre: "La météo, les vêtements et la comparaison",
      theme: "Vocabulaire",
      cours: `
## Le temps qu'il fait (el tiempo)
- *¿Qué tiempo hace?* → **Hace** + nom : *hace sol* (il y a du soleil), *hace calor* (il fait chaud), *hace frío* (il fait froid), *hace viento* (il y a du vent), *hace buen / mal tiempo*.
- Verbes de météo : *llueve* (il pleut, de *llover*, o → ue), *nieva* (il neige, de *nevar*, e → ie).
- **Está** + adjectif : *está nublado* (c'est nuageux).
- **Hay** + nom : *hay niebla* (il y a du brouillard), *hay tormenta* (il y a de l'orage).
- Les températures : *Estamos a veinte grados* / *Hace veinte grados*.

>! **Attention** : on dit *hace mucho calor* (nom → **mucho**) et non « muy calor ». *Muy* se met devant un adjectif : *está muy nublado*.

## Les vêtements (la ropa)
| Espagnol | Français |
|---|---|
| la camiseta, la camisa | le tee-shirt, la chemise |
| el jersey, la sudadera | le pull, le sweat |
| los pantalones, los vaqueros | le pantalon, le jean |
| la falda, el vestido | la jupe, la robe |
| el abrigo, la chaqueta | le manteau, la veste |
| los zapatos, las zapatillas (de deporte) | les chaussures, les baskets |
| la gorra, el gorro, la bufanda | la casquette, le bonnet, l'écharpe |

- Porter = **llevar** : *Hoy llevo unos vaqueros y una sudadera.*
- Mettre = **ponerse** : *Me pongo el abrigo porque hace frío.*
- En Amérique latine : *la remera* (Argentine) ou *la playera* (Mexique) = le tee-shirt ; *los jeans* = le jean.

## Les couleurs
*rojo, amarillo, azul, verde, blanco, negro, gris, marrón, naranja, rosa, morado*.
Elles s'accordent comme des adjectifs : *una camiseta roja*, *unos zapatos negros*, *unas faldas azules* ; *naranja* et *rosa* restent souvent invariables : *unas camisetas naranja*.

## Comparer
| Comparatif | Formule | Exemple |
|---|---|---|
| supériorité | **más** + adj. + **que** | *Madrid es más grande que Toledo.* |
| infériorité | **menos** + adj. + **que** | *El abrigo es menos caro que la chaqueta.* |
| égalité | **tan** + adj. + **como** | *Mi hermano es tan alto como yo.* |
| égalité (nom) | **tanto/a/os/as** + nom + **como** | *Tengo tantos libros como tú.* |

Comparatifs irréguliers : **mejor** (meilleur, mieux), **peor** (pire), **mayor** (plus âgé), **menor** (plus jeune) : *Esta sudadera es mejor que la otra.*

> **À retenir** : hace calor / frío / sol / viento, llueve, nieva, está nublado ; llevar = porter, ponerse = mettre ; les couleurs s'accordent ; más / menos ... que, tan ... como, mejor, peor.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « Il fait froid. »", reponses: ["Hace frío"], explication: "Météo avec un nom → **hace** : *hace frío*." },
        { type: "qcm", question: "« Il pleut » se dit :", choix: ["Hace lluvia", "Hace llover", "Llueve", "Es lluvia"], reponse: 2, explication: "*llover* (o → ue) : **llueve**. On peut aussi dire *está lloviendo* (en ce moment)." },
        { type: "qcm", question: "Complète : « Hoy hace ... calor. »", choix: ["mucho", "muy", "muchos", "tan"], reponse: 0, explication: "*calor* est un nom → **mucho** : *hace mucho calor*. *Muy* s'emploie devant un adjectif." },
        { type: "saisie", question: "Accorde la couleur : « unas camisetas (blanco) »", reponses: ["blancas"], explication: "Féminin pluriel : **blancas**." },
        { type: "saisie", question: "Conjugue *llevar* : « Hoy (yo) ... una falda verde. »", reponses: ["llevo"], explication: "*llevar* = porter un vêtement : **llevo**." },
        { type: "vf", question: "« Mi hermana es tan alta que yo » est correct.", reponse: false, explication: "Égalité : **tan** + adjectif + **como** : *Mi hermana es tan alta como yo*." },
        { type: "saisie", question: "Traduis : « Le jean est plus cher que le pull. »", reponses: ["Los vaqueros son más caros que el jersey", "El vaquero es más caro que el jersey", "Los vaqueros son más caros que la sudadera", "Los pantalones vaqueros son más caros que el jersey", "Los jeans son más caros que el jersey"], explication: "**más** + adjectif + **que** ; *los vaqueros* est pluriel en espagnol, d'où *son más caros*." },
        { type: "qcm", question: "« Ce sweat est meilleur que l'autre » :", choix: ["Esta sudadera es más buena que la otra", "Esta sudadera es tan mejor que la otra", "Esta sudadera es mejor como la otra", "Esta sudadera es mejor que la otra"], reponse: 3, explication: "Comparatif irrégulier de *bueno* : **mejor** ... *que*." },
        { type: "redaction", question: "Tu pars une semaine à Burgos en hiver. Écris 6 phrases : le temps qu'il fait là-bas, les vêtements que tu emportes et une comparaison avec le temps chez toi.", corrige: "Modèle :\n\n*En invierno, en Burgos hace mucho frío y a veces nieva. Por la mañana, estamos a cero grados y está nublado. Por eso voy a llevar un abrigo negro, una bufanda roja y un gorro. También me pongo unas zapatillas cómodas para caminar. En mi ciudad, en Marsella, hace más calor y hace más sol que en Burgos. ¡Burgos es tan bonito como Marsella, pero menos caluroso!*\n\nVérifie : *hace* + nom (*frío, sol*), *mucho* devant un nom, couleurs accordées (*negro, roja*), *más ... que*, *tan ... como*." }
      ]
    },
    {
      id: "ciudad-orientarse",
      titre: "La ville et s'orienter",
      theme: "Communiquer",
      cours: `
## Les lieux de la ville
| Espagnol | Français |
|---|---|
| la calle, la avenida, la plaza | la rue, l'avenue, la place |
| el ayuntamiento | la mairie |
| la estación (de tren), la parada de autobús | la gare, l'arrêt de bus |
| el hospital, la farmacia | l'hôpital, la pharmacie |
| el supermercado, la tienda, el mercado | le supermarché, le magasin, le marché |
| la panadería, la librería | la boulangerie, la librairie |
| el museo, el cine, el parque, la piscina | le musée, le cinéma, le parc, la piscine |
| la iglesia, el puente, el semáforo | l'église, le pont, le feu (tricolore) |

Attention aux faux amis : *la librería* = la librairie (*la biblioteca* = la bibliothèque) ; *la carta* = la lettre, mais *el mapa* / *el plano* = la carte / le plan.

## Demander son chemin
- *Perdone, ¿dónde está la estación?* (avec un article défini → **estar**)
- *¿Hay una farmacia por aquí?* (avec un article indéfini → **hay**)
- *¿Para ir al museo, por favor?* / *¿Cómo puedo ir al centro?*
- *¿Está lejos? — No, está cerca, a cinco minutos (a pie).*

On vouvoie un inconnu : *Perdone* (usted) ; à un jeune de ton âge : *Perdona* (tú).

## Indiquer le chemin
| Espagnol | Français |
|---|---|
| sigue todo recto | continue tout droit |
| gira / tuerce a la derecha | tourne à droite |
| gira a la izquierda | tourne à gauche |
| toma la primera calle | prends la première rue |
| cruza la plaza | traverse la place |
| al final de la calle | au bout de la rue |
| en la esquina | au coin de la rue |

- Ces formes (*sigue, gira, toma, cruza*) sont l'**impératif** à *tú* : pour les verbes réguliers, c'est la même forme que la 3e personne du présent (*él toma* → *¡toma!*).
- On peut aussi utiliser le présent : *Sigues todo recto y giras a la derecha.*
- Avec *usted*, on dit : *siga, gire, tome, cruce* (tu les étudieras plus tard).

## Les ordinaux
*primero, segundo, tercero, cuarto, quinto*. Devant un nom masculin singulier, **primero → primer** et **tercero → tercer** : *el primer piso*, *la tercera calle*.

## Les moyens de transport
**en** + véhicule : *en autobús, en metro, en tren, en coche, en bici* ; mais **a pie** (à pied) et *a caballo*.

>! **Exemple** : *— Perdone, ¿dónde está el museo? — Está bastante cerca. Sigue todo recto, toma la segunda calle a la izquierda y cruza la plaza. El museo está al lado del ayuntamiento.*

> **À retenir** : ¿Dónde está + el/la...? mais ¿Hay un/una...? ; sigue todo recto, gira a la derecha / a la izquierda, toma la primera calle, cruza ; primer, tercer devant un nom masculin ; en autobús mais a pie.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « la mairie »", reponses: ["el ayuntamiento", "ayuntamiento", "la alcaldía", "alcaldía"], explication: "**el ayuntamiento** (on dit aussi *la alcaldía* en Amérique latine)." },
        { type: "qcm", question: "« La *librería* » désigne :", choix: ["la librairie", "la bibliothèque", "la papeterie", "la liberté"], reponse: 0, explication: "Faux ami : *la librería* = la librairie, où l'on achète des livres. La bibliothèque se dit *la biblioteca*." },
        { type: "qcm", question: "Complète : « Perdone, ¿... una farmacia por aquí? »", choix: ["está", "es", "hay", "tiene"], reponse: 2, explication: "Avec un article indéfini (*una farmacia*), on demande si le lieu existe → **hay**." },
        { type: "saisie", question: "Complète : « Perdone, ¿dónde ... la estación? »", reponses: ["está"], explication: "Avec un article défini (*la estación*), on situe → **está**." },
        { type: "saisie", question: "Traduis : « Tourne à droite. » (tú)", reponses: ["Gira a la derecha", "Tuerce a la derecha", "Giras a la derecha", "Dobla a la derecha"], explication: "**Gira a la derecha** (ou *tuerce a la derecha* ; en Amérique latine, *dobla a la derecha*). *La derecha* = la droite, *la izquierda* = la gauche." },
        { type: "qcm", question: "« Continue tout droit » se dit :", choix: ["Gira todo recto", "Sigue a la derecha", "Toma la izquierda", "Sigue todo recto"], reponse: 3, explication: "*todo recto* = tout droit ; *seguir* = continuer → **Sigue todo recto**." },
        { type: "saisie", question: "Complète avec l'ordinal : « Vivo en el ... piso. » (1er étage)", reponses: ["primer"], explication: "Devant un nom masculin singulier, *primero* devient **primer** : *el primer piso*." },
        { type: "vf", question: "« Voy al colegio en pie » est correct.", reponse: false, explication: "On dit **a pie** (à pied). *En* s'emploie avec un véhicule : *en autobús, en metro, en bici*." },
        { type: "qcm", question: "Tu demandes ton chemin à une dame âgée. Tu dis :", choix: ["Oye, ¿dónde está la plaza?", "Perdone, ¿dónde está la plaza?", "Perdona, ¿dónde estás la plaza?", "Perdone, ¿dónde hay la plaza?"], reponse: 1, explication: "On vouvoie une personne inconnue et âgée : **Perdone** (usted). *Oye* est familier, *estás* ne convient pas (c'est la plaza qui est située), et *hay* ne s'emploie pas avec *la*." },
        { type: "redaction", question: "Un touriste espagnol est devant ton collège et te demande le chemin de la gare. Écris le dialogue (5 ou 6 répliques) : salutation, question, indications (au moins trois), distance, remerciements.", corrige: "Modèle :\n\n- *Turista: ¡Hola! Perdona, ¿dónde está la estación de tren?*\n- *Yo: ¡Hola! Está un poco lejos, a quince minutos a pie.*\n- *Turista: ¿Cómo puedo ir?*\n- *Yo: Sigue todo recto hasta el semáforo. Luego gira a la izquierda y toma la primera calle a la derecha. Cruza la plaza: la estación está enfrente del supermercado. También puedes ir en autobús: la parada está en la esquina.*\n- *Turista: ¡Muchas gracias!*\n- *Yo: De nada. ¡Adiós!*\n\nPoints vérifiés : *¿dónde está la...?* ; impératifs à *tú* (*sigue, gira, toma, cruza*) ; prépositions de lieu (*enfrente de, en la esquina*) ; *a pie* / *en autobús* ; politesse (*perdona, gracias, de nada*)." }
      ]
    },
    {
      id: "mexico-descubrir",
      titre: "Axe 6 : Le Mexique : partons à la découverte de ce pays fascinant !",
      theme: "Culture",
      cours: `
## México en pocas palabras
Le **Mexique** (*México*) est le pays qui compte le plus d'hispanophones au monde : plus de 120 millions d'habitants (126 millions au recensement de 2020 de l'INEGI, l'institut de statistique mexicain).
- **Capitale** : *Ciudad de México* (CDMX). Elle est construite à l'emplacement de **Tenochtitlan**, la capitale des Aztèques, fondée sur une île au milieu d'un lac (en 1325 selon la tradition).
- **Le drapeau** : vert, blanc, rouge, avec un **aigle** posé sur un cactus (*el nopal*) qui dévore un serpent : selon la légende, les Aztèques devaient fonder leur ville là où ils verraient cet aigle.
- **La monnaie** : *el peso mexicano*.
- **Les langues** : l'espagnol et 68 langues indigènes reconnues comme langues nationales (68 « groupes linguistiques » selon l'INALI, l'institut des langues indigènes, qui compte 364 variantes) ; la plus parlée est le **náhuatl**, la langue des Aztèques.
- **Prononciation** : dans *México* et *mexicano*, le **x** se prononce comme la **jota** : « Méjico ».

## La naturaleza: volcanes, selva y playas
| Espagnol | Français |
|---|---|
| el volcán / los volcanes | le volcan / les volcans |
| la montaña, la sierra | la montagne, la chaîne de montagnes |
| la selva | la forêt tropicale |
| el desierto, el cactus | le désert, le cactus |
| la playa, el mar Caribe | la plage, la mer des Caraïbes |
| la península | la péninsule |
| el cenote | le cénote (puits naturel d'eau douce) |
| la mariposa | le papillon |

- **Les volcans** : le Mexique en compte beaucoup. Près de Mexico se dressent le **Popocatépetl** (« el Popo », un volcan actif ; en náhuatl, son nom signifie « la montagne qui fume ») et l'**Iztaccíhuatl** (« la femme blanche »). Le **Pico de Orizaba** (*Citlaltépetl*) est le plus haut sommet du pays. Le **Paricutín** est né en 1943 au milieu d'un champ de maïs, dans l'État du Michoacán.
- **Le Yucatán** : une grande péninsule plate au sud-est, couverte de *selva*, avec les plages de la mer des Caraïbes (Cancún) et des milliers de **cenotes** : des puits naturels d'eau douce, sacrés pour les Mayas. **Mérida**, la capitale de l'État du Yucatán, est surnommée *la Ciudad Blanca*.
- Au nord, le désert de **Sonora** et ses cactus géants ; en hiver, des millions de **papillons monarques** arrivent du Canada et des États-Unis dans les forêts du Michoacán.

>! **Pour décrire un paysage** : *En México **hay** muchos volcanes. El Popocatépetl **está** cerca de la Ciudad de México. **Es** un volcán activo. Mérida **está** en la península de Yucatán.*

## El patrimonio: las pirámides
- **Teotihuacán** (à environ 50 km au nord-est de Mexico) : une immense cité, bien plus ancienne que les Aztèques. Quand ils l'ont découverte, elle était déjà en ruines ; ils lui ont donné son nom, que l'on traduit souvent par « la cité des dieux ». On y voit la **pyramide du Soleil** (*la Pirámide del Sol*, la plus grande), la **pyramide de la Lune** et la grande avenue appelée *la Calzada de los Muertos*.
- **Chichén Itzá** (Yucatán) : une grande cité **maya**. Sa pyramide, *El Castillo*, est dédiée à **Kukulcán**, le serpent à plumes. Elle a 4 escaliers de 91 marches ; avec la plateforme du sommet, cela fait 4 × 91 + 1 = **365**, comme les jours de l'année. Aux équinoxes (mars et septembre), l'ombre du soleil dessine un serpent qui semble descendre l'escalier. On y trouve aussi un grand terrain de jeu de balle (*el juego de pelota*).
- Ces deux sites sont inscrits au **patrimoine mondial de l'UNESCO** (Teotihuacán en 1987, Chichén Itzá en 1988).

>! **Reconnaître l'imparfait** (tu n'as pas à le conjuguer cette année) : dans les textes sur le passé, tu verras *era* (c'était, il/elle était), *había* (il y avait), *vivían* (ils vivaient). *Teotihuacán **era** una ciudad enorme. **Había** muchos templos.* = Teotihuacán était une ville énorme. Il y avait beaucoup de temples.

## Los sabores de México
- **El maíz** est la base de la cuisine mexicaine depuis des milliers d'années. Avec sa farine, on fait la **tortilla de maíz** : une fine galette ronde. Attention, **faux ami** : en Espagne, *la tortilla de patatas* est une omelette aux pommes de terre !
- **Los tacos** : une tortilla pliée et garnie (viande, oignon, coriandre, *salsa*). Les *tacos al pastor* sont parmi les plus célèbres.
- **El mole** : une sauce épaisse et brune, préparée avec des piments (*chiles*), des épices et... du **chocolat**. Le plus connu est le *mole poblano* (de la ville de Puebla), servi avec du poulet ou de la dinde.
- **El chocolate** : les Mayas et les Aztèques cultivaient le **cacao** ; ils le buvaient amer, avec du piment, et les fèves de cacao servaient même de monnaie chez les Aztèques. Les Espagnols l'ont rapporté en Europe au XVIe siècle.
- Aussi : *el guacamole* (avocat écrasé), *los frijoles* (haricots rouges ou noirs), *el chile* (piment).
- Beaucoup de mots espagnols (et français !) viennent du **náhuatl** : *chocolate, tomate, aguacate* (avocat), *chile*, *cacahuate* (cacahuète).
- La cuisine traditionnelle mexicaine est inscrite au **patrimoine culturel immatériel de l'UNESCO** (2010).

>! **Donner son avis sur un plat** : *Me gusta el guacamole. Me gustan los tacos. No me gusta el chile: **pica** mucho* (ça pique). *¡El mole **está** muy **rico**!* (délicieux). *En el mole **hay** chocolate.*

## El Día de Muertos
- Il a lieu les **1er et 2 novembre**. Les familles croient que, ces jours-là, les âmes des défunts reviennent leur rendre visite.
- On prépare chez soi **un autel**, *la ofrenda* (*el altar*), avec la photo de la personne disparue, des bougies (*las velas*), des fleurs orange de **cempasúchil**, du *papel picado* (papier découpé de couleur), des **calaveras de azúcar** (crânes en sucre où l'on écrit un prénom), le *pan de muerto* et les plats préférés du défunt.
- On va aussi au cimetière (*el panteón*) décorer les tombes, manger et écouter de la musique.
- **La Catrina** : une élégante dame squelette au grand chapeau, imaginée par le graveur José Guadalupe Posada au début du XXe siècle, devenue un symbole de la fête.
- Ce n'est **ni une fête triste, ni Halloween** : c'est une fête joyeuse et colorée pour se souvenir. Elle est inscrite au patrimoine culturel immatériel de l'UNESCO (2008).

## Méthode : présenter une ville ou un plat (6 à 8 phrases)
1. **Nommer** : *Te presento Mérida. / Mi plato favorito es el mole.*
2. **Situer** avec **estar** : *Mérida está en el sureste de México, en Yucatán.*
3. **Décrire** avec **ser** : *Es una ciudad blanca y tranquila. / Es una salsa con chocolate.*
4. **Énumérer** avec **hay** : *Hay una catedral, mercados y cenotes cerca. / En el mole hay chiles y especias.*
5. **Donner ton avis** avec **gustar** et **porque** : *Me gusta mucho porque es original.*
6. **Conclure** : *¡Es un lugar fascinante! / ¡Tienes que probarlo!* (tu dois le goûter !)

>! **Erreurs fréquentes**
- ✗ *Hay la pirámide* → ✓ *Hay una pirámide* ; avec *la / el*, on situe avec **estar** : *La pirámide está en Teotihuacán.*
- ✗ *Me gusta los tacos* → ✓ *Me gust**an** los tacos* (nom pluriel).
- ✗ *Chichén Itzá es en Yucatán* → ✓ *Chichén Itzá **está** en Yucatán* (localisation).
- ✗ *Mexico* sans accent → ✓ *México* ; l'adjectif s'écrit sans majuscule : *la comida mexicana*.

> **À retenir** : le Mexique, premier pays hispanophone (capitale Ciudad de México, ancienne Tenochtitlan) ; volcans (Popocatépetl), péninsule du Yucatán et cenotes ; Teotihuacán (pyramides du Soleil et de la Lune) et Chichén Itzá (pyramide maya de Kukulcán, 365 marches) ; maïs, tortilla de maíz, tacos, mole et chocolat (mots venus du náhuatl) ; Día de Muertos les 1er et 2 novembre (ofrenda, cempasúchil, calaveras, Catrina). Pour présenter : está en, es, hay, me gusta(n) porque...
`,
      exercices: [
        { type: "vf", question: "Au Mexique, une *tortilla* est une omelette aux pommes de terre.", reponse: false, explication: "Au Mexique, la **tortilla de maíz** est une fine galette de maïs (on s'en sert pour les tacos). L'omelette aux pommes de terre, *la tortilla de patatas*, est un plat **espagnol** : c'est un faux ami entre les deux pays." },
        { type: "qcm", question: "Sur quel site se trouvent la pyramide du Soleil et la pyramide de la Lune ?", choix: ["Chichén Itzá", "Teotihuacán", "Mérida", "Cancún"], reponse: 1, explication: "Les pyramides du Soleil et de la Lune sont à **Teotihuacán**, près de Mexico, le long de la *Calzada de los Muertos*. Chichén Itzá est une cité maya du Yucatán ; Mérida et Cancún sont des villes modernes." },
        { type: "saisie", question: "À Chichén Itzá, la grande pyramide (*El Castillo*) est dédiée au serpent à plumes. Comment s'appelle ce dieu maya ?", reponses: ["Kukulcán", "Kukulcan", "Kukulkán", "Kukulkan"], explication: "**Kukulcán**, le serpent à plumes (les Aztèques l'appelaient Quetzalcóatl). Aux équinoxes, l'ombre dessine un serpent sur l'escalier de sa pyramide." },
        { type: "qcm", question: "Dans le Yucatán, qu'est-ce qu'un *cenote* ?", choix: ["un volcan éteint", "une pyramide maya", "un puits naturel d'eau douce", "un plat à base de maïs"], reponse: 2, explication: "Un **cenote** est un puits naturel rempli d'eau douce, creusé dans la roche. Il y en a des milliers dans la péninsule ; ils étaient sacrés pour les Mayas et aujourd'hui on peut s'y baigner." },
        { type: "saisie", question: "Complète avec *hay*, *es* ou *está* : « En el mole ... chocolate. »", reponses: ["hay"], explication: "On indique ce qu'il y a (sans article défini) avec **hay** : *En el mole hay chocolate* (et aussi des chiles et des épices)." },
        { type: "saisie", question: "Complète avec *gusta* ou *gustan* : « A mi hermano le ... los tacos al pastor. »", reponses: ["gustan"], explication: "*los tacos* est au pluriel → **gustan** : *A mi hermano le gustan los tacos al pastor*." },
        { type: "saisie", question: "Complète avec *hay*, *es* ou *está* : « Chichén Itzá ... en la península de Yucatán. »", reponses: ["está"], explication: "Pour **situer** un lieu précis (un nom propre ou un nom avec *el / la*), on emploie **estar** : *Chichén Itzá está en Yucatán*." },
        { type: "qcm", question: "Pour le Día de Muertos, quelles fleurs orange décorent les autels (*ofrendas*) ?", choix: ["les tulipes", "les roses", "les tournesols", "les cempasúchiles"], reponse: 3, explication: "Les fleurs orange de **cempasúchil** (un tagète, cousin de l'œillet d'Inde) ont une couleur vive et un parfum fort : selon la tradition, elles guident les âmes jusqu'à la *ofrenda*." },
        { type: "qcm", question: "Lis la phrase : « Hace mucho tiempo, Tenochtitlan **era** una ciudad sobre un lago. » Que signifie *era* ?", choix: ["était", "est", "sera", "a été construite"], reponse: 0, explication: "*era* est l'imparfait de *ser* : **était**. La phrase signifie : « Il y a longtemps, Tenochtitlan était une ville sur un lac. » Tu dois savoir reconnaître *era, había, vivían*, sans les conjuguer." },
        { type: "redaction", question: "**Compréhension** — Lis ce texte (texte d'entraînement), puis réponds en français aux questions.\n\n« *Me llamo Ximena y vivo en Mérida, en Yucatán. Mi ciudad es blanca y muy bonita. Cerca de Mérida hay cenotes: son piscinas naturales de agua dulce. Los fines de semana nado en un cenote con mi hermano. ¡Me encanta! A dos horas de mi casa está Chichén Itzá, una antigua ciudad maya. Hace mucho tiempo, era una ciudad muy importante. Mi comida favorita es la cochinita pibil: es carne de cerdo con naranja. ¡Está muy rica! En noviembre, para el Día de Muertos, mi familia prepara un altar para mi abuelo. Hay flores naranjas, velas y su foto. ¡Mi abuelo era muy divertido!* »\n\n1. Qui parle et où habite-t-elle ?\n2. Qu'est-ce qu'un cenote et que fait Ximena le week-end ?\n3. Qu'est-ce que Chichén Itzá ?\n4. Quel est son plat préféré ? Qu'en pense-t-elle ?\n5. Que fait sa famille en novembre ? Relève deux mots à l'imparfait.", corrige: "1. C'est **Ximena**, une jeune Mexicaine qui habite à **Mérida**, dans le Yucatán. Sa ville est blanche et très jolie.\n2. Un **cenote** est une piscine naturelle d'eau douce. Le week-end, Ximena **nage dans un cenote avec son frère** et elle adore ça (*¡Me encanta!*).\n3. **Chichén Itzá** est une ancienne cité **maya**, à deux heures de chez elle ; il y a longtemps, c'était une ville très importante.\n4. Son plat préféré est la **cochinita pibil**, de la viande de porc à l'orange ; elle la trouve **délicieuse** (*¡Está muy rica!*).\n5. Pour le **Día de Muertos**, sa famille prépare **un autel pour son grand-père**, avec des fleurs orange, des bougies et sa photo.\n   Imparfait : *era* (« c'était une ville très importante », « mon grand-père était très drôle »). Le mot *era* apparaît deux fois.\n\nMéthode : repère d'abord les mots transparents (*cenotes, piscinas naturales, maya, altar, foto*), les noms propres et les verbes ; réponds avec tes propres phrases en français, sans inventer." },
        { type: "redaction", question: "**Expression écrite** (60 à 80 mots) — Présente en espagnol **une ville** ou **un plat** du Mexique à ta classe : où (ou avec quoi), comment c'est, ce qu'il y a, ton avis justifié avec *porque*. Utilise au moins une fois *está en*, *es*, *hay* et *gustar*.", corrige: "**Modèle 1 : une ville**\n\n*Te presento Mérida. Mérida está en el sureste de México, en la península de Yucatán. Es una ciudad blanca, tranquila y muy bonita. En el centro hay una catedral grande, una plaza y muchos mercados. Cerca de la ciudad hay cenotes y pirámides mayas, como Chichén Itzá. Me gusta mucho Mérida porque hay naturaleza y mucha historia. ¡Es un lugar fascinante!*\n\n**Modèle 2 : un plato**\n\n*Mi plato mexicano favorito es el mole poblano. Es una salsa marrón de la ciudad de Puebla. En el mole hay chiles, especias y chocolate. Normalmente, los mexicanos lo comen con pollo y tortillas de maíz. Me gusta mucho porque es dulce y pica un poco. ¡Está muy rico! ¡Tienes que probarlo!*\n\nPoints vérifiés :\n- **estar en** pour situer (*está en el sureste*) ;\n- **ser** pour décrire (*es blanca, es una salsa*) ;\n- **hay** + nom sans article défini (*hay una catedral, hay chiles*) ;\n- **gustar** bien accordé et justification avec **porque** ;\n- accents (*México, Mérida, Yucatán, maíz*) et ponctuation ¡ !." }
      ]
    }
  ]
};
