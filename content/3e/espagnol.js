export default {
  chapitres: [
    {
      id: "presente-repaso",
      titre: "Réviser le présent : irréguliers, diphtongues et verbes pronominaux",
      theme: "Grammaire",
      cours: `
## Pourquoi revoir le présent ?
Le présent sert de base à presque tout : le **subjonctif** se forme à partir de la 1re personne du présent, l'**impératif** à partir de la 2e personne. Si tu maîtrises le présent, le reste de l'année sera beaucoup plus facile.

## Les verbes réguliers (rappel)
| | hablar | comer | vivir |
|---|---|---|---|
| yo | hablo | como | vivo |
| tú | hablas | comes | vives |
| él/ella/usted | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| vosotros | habláis | coméis | vivís |
| ellos/ustedes | hablan | comen | viven |

## Les verbes à diphtongue et à affaiblissement
La voyelle du radical change quand elle porte l'accent tonique, donc **partout sauf à nosotros et vosotros** (le « verbe botte »).
- **e → ie** : *querer* → quiero, quieres, quiere, queremos, queréis, quieren. Aussi : *pensar, empezar, preferir, cerrar, entender*.
- **o → ue** : *poder* → puedo, puedes, puede, podemos, podéis, pueden. Aussi : *dormir, volver, contar, encontrar, costar*.
- **u → ue** : *jugar* → juego, juegas, juega, jugamos, jugáis, juegan (c'est le seul).
- **e → i** (verbes en -ir) : *pedir* → pido, pides, pide, pedimos, pedís, piden. Aussi : *servir, repetir, seguir* (sigo), *vestirse*.

## Les irréguliers à la 1re personne
| Verbe | yo | Suite |
|---|---|---|
| hacer | hago | haces, hace... |
| poner | pongo | pones, pone... |
| salir | salgo | sales, sale... |
| traer | traigo | traes, trae... |
| conocer | conozco | conoces, conoce... |
| saber | sé | sabes, sabe... |
| dar | doy | das, da... |
| ver | veo | ves, ve... |

Et des verbes qui cumulent : *tener* → tengo, tienes, tiene, tenemos, tenéis, tienen ; *venir* → vengo, vienes, viene, venimos, venís, vienen ; *decir* → digo, dices, dice, decimos, decís, dicen ; *ir* → voy, vas, va, vamos, vais, van.

## Les verbes pronominaux
Le pronom réfléchi change avec la personne : **me, te, se, nos, os, se**.
- *levantarse* → **me** levanto, **te** levantas, **se** levanta, **nos** levantamos, **os** levantáis, **se** levantan.
- *Me ducho, me visto* (vestirse : e → i), *me acuesto* (acostarse : o → ue).

>! **Exemple : ta journée** : *Me despierto a las siete, me levanto, me ducho y desayuno. Salgo de casa a las ocho menos cuarto. Vuelvo a las cinco, hago los deberes y me acuesto a las diez.*

>! **Erreurs fréquentes**
- ✗ *puedemos* → ✓ *podemos* (pas de diphtongue à nosotros).
- ✗ *yo hace* → ✓ *yo hago* ; ✗ *yo conoce* → ✓ *yo conozco*.
- ✗ *Levanto a las siete* (= je lève quelqu'un) → ✓ *Me levanto a las siete*.

> **À retenir** : diphtongue (e → ie, o → ue) et affaiblissement (e → i) partout sauf nosotros/vosotros ; 1re personne irrégulière : hago, pongo, salgo, traigo, conozco, sé, doy ; verbes pronominaux : me, te, se, nos, os, se devant le verbe.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *querer* au présent : « Mis padres ... ir a Sevilla. »", reponses: ["quieren"], explication: "*querer* diphtongue (e → ie) à la 3e personne du pluriel : **quieren**." },
        { type: "saisie", question: "Conjugue *poder* au présent : « Nosotros no ... salir esta noche. »", reponses: ["podemos"], explication: "Pas de diphtongue à **nosotros** : *podemos* (et non *puedemos*)." },
        { type: "qcm", question: "Quelle forme est correcte pour « je sors » ?", choix: ["salo", "salgo", "sallo", "sale"], reponse: 1, explication: "*salir* est irrégulier à la 1re personne : **salgo**, puis *sales, sale...* (*sale* = il sort)." },
        { type: "saisie", question: "Conjugue *pedir* au présent : « Siempre (yo) ... una pizza. »", reponses: ["pido"], explication: "*pedir* : affaiblissement **e → i** : *pido, pides, pide, pedimos, pedís, piden*." },
        { type: "vf", question: "*Conozco* est la 1re personne du singulier du présent de *conocer*.", reponse: true, explication: "Les verbes en **-ocer** et **-ucir** prennent un **z** à la 1re personne : *conozco*, *traduzco*." },
        { type: "saisie", question: "Conjugue *acostarse* au présent : « Mi hermano ... a las once. »", reponses: ["se acuesta"], explication: "Verbe pronominal et diphtongue o → ue : **se acuesta**." },
        { type: "qcm", question: "« Nous jouons au foot le samedi. »", choix: ["Juegamos al fútbol los sábados.", "Jugamos al fútbol el sábados.", "Jugamos al fútbol los sábados.", "Jugemos al fútbol los sábados."], reponse: 2, explication: "*jugar* diphtongue (u → ue) sauf à nosotros : **jugamos**. « Le samedi » (habitude) = **los sábados**." },
        { type: "saisie", question: "Traduis : « Je fais mes devoirs. »", reponses: ["Hago mis deberes", "Hago los deberes", "Yo hago mis deberes", "Yo hago los deberes", "Hago mis tareas", "Hago las tareas"], explication: "*hacer* → **hago** à la 1re personne. « Les devoirs » = *los deberes*." },
        { type: "vf", question: "« Je me lève à sept heures » se traduit *Levanto a las siete*.", reponse: false, explication: "Il faut le pronom réfléchi : *Me levanto a las siete*. *Levanto* seul veut dire « je soulève » (quelque chose ou quelqu'un)." },
        { type: "redaction", question: "Décris en 6 à 8 phrases une journée ordinaire de ta semaine (du réveil au coucher). Utilise au moins trois verbes pronominaux et trois verbes irréguliers au présent.", corrige: "Modèle :\n\n*Los lunes me despierto a las seis y media. Me levanto enseguida, me ducho y me visto. Desayuno un chocolate con tostadas. Salgo de casa a las siete y media y voy al colegio en autobús. Las clases empiezan a las ocho y terminan a las cinco. Por la tarde, hago los deberes y juego a los videojuegos con mi hermano. Cenamos a las ocho y me acuesto a las diez.*\n\nPoints vérifiés :\n- pronominaux : *me despierto, me levanto, me ducho, me visto, me acuesto* ;\n- irréguliers : *salgo, voy, hago* ; diphtongues : *despierto, empiezan, juego, acuesto* ;\n- *nosotros* sans diphtongue : *cenamos* ;\n- l'heure : *a las seis y media, a las diez*." }
      ]
    },
    {
      id: "ser-estar-usos",
      titre: "Ser et estar : tous les emplois",
      theme: "Grammaire",
      cours: `
## Le principe
- **Ser** dit **ce qu'est** une chose ou une personne : son identité, sa nature, sa définition.
- **Estar** dit **où** elle est, **dans quel état** elle se trouve, ou **le résultat** d'une action.

## Les emplois de ser
- identité, profession, nationalité, origine : *Es Carmen. Es enfermera. Es de Bogotá.*
- caractère et description : *Mi abuelo es generoso. La casa es grande.*
- l'heure, la date, le jour : *Son las cinco. Hoy es martes. Es el 12 de octubre.*
- la matière, la possession : *El reloj es de oro. Este libro es de Ana.*
- **le lieu d'un événement** (*avoir lieu*) : *El concierto es en el estadio.*
- les jugements avec un adjectif : *Es importante estudiar. Es necesario reciclar.*
- la **voix passive** (*ser* + participe accordé) : *El cuadro fue pintado por Velázquez.*

## Les emplois de estar
- la localisation d'une personne ou d'une chose : *Estoy en casa. Lima está en Perú.*
- l'état passager (humeur, santé, situation) : *Estamos cansados. Mi madre está enferma.*
- l'action en cours (*estar* + gérondif) : *Está lloviendo. Estoy leyendo.*
- le **résultat** d'une action (*estar* + participe accordé) : *La tienda está cerrada. Los deberes están hechos.*
- une impression ponctuelle : *¡Qué guapa estás hoy! La sopa está rica.*

## Les adjectifs qui changent de sens
| Adjectif | avec ser | avec estar |
|---|---|---|
| listo | intelligent, malin | prêt |
| malo | méchant, mauvais | malade |
| aburrido | ennuyeux | qui s'ennuie |
| rico | riche | délicieux |
| verde | vert (couleur) | pas mûr |
| despierto | éveillé, vif d'esprit | réveillé |

>! **Comparer** : *La fiesta **es** en casa de Lola* (elle a lieu chez Lola) / *Lola **está** en la fiesta* (elle s'y trouve). *La puerta **fue** cerrada por el guardia* (action) / *La puerta **está** cerrada* (résultat).

>! **Erreurs fréquentes**
- ✗ *Madrid es en el centro de España* → ✓ *Madrid **está** en el centro de España*.
- ✗ *Estoy profesor* → ✓ *Soy profesor* (profession).
- ✗ *Es muerto* → ✓ *Está muerto* (résultat, en espagnol on utilise estar).

> **À retenir** : ser = identité, caractère, heure, matière, lieu d'un événement, passif ; estar = localisation, état, action en cours (+ gérondif), résultat (+ participe). Attention aux adjectifs qui changent de sens : listo, malo, aburrido, rico.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *ser* ou *estar* au présent : « Buenos Aires ... en Argentina. »", reponses: ["está"], explication: "Localisation → **estar** : *Buenos Aires está en Argentina*." },
        { type: "saisie", question: "Complète avec *ser* ou *estar* au présent : « El partido ... en el estadio municipal. »", reponses: ["es"], explication: "Un **événement** qui a lieu quelque part → **ser** : *El partido es en el estadio*." },
        { type: "qcm", question: "Que veut dire « *Estoy listo* » ?", choix: ["Je suis intelligent.", "Je suis prêt.", "Je suis lent.", "Je suis libre."], reponse: 1, explication: "*Estar listo* = être **prêt**. *Ser listo* = être intelligent, malin." },
        { type: "vf", question: "« *Esta película es aburrida* » signifie « Ce film est ennuyeux ».", reponse: true, explication: "*Ser aburrido* = être ennuyeux (caractéristique du film). *Estar aburrido* = s'ennuyer." },
        { type: "saisie", question: "Complète avec *ser* ou *estar* au présent : « Las ventanas ... abiertas. » (résultat)", reponses: ["están"], explication: "Résultat d'une action → **estar** + participe accordé : *Las ventanas están abiertas*." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Mi tío está médico en un hospital.", "Mi tío es en el hospital.", "Mi tío es médico y está en el hospital.", "Mi tío está médico y es en el hospital."], reponse: 2, explication: "Profession → **ser** (*es médico*) ; localisation → **estar** (*está en el hospital*)." },
        { type: "saisie", question: "Complète avec *ser* ou *estar* au présent : « ¡Qué rica ... esta paella! »", reponses: ["está"], explication: "Impression ponctuelle sur un plat → **estar rico** = être délicieux." },
        { type: "qcm", question: "« *Mi abuela está mala* » signifie :", choix: ["Ma grand-mère est méchante.", "Ma grand-mère est mauvaise cuisinière.", "Ma grand-mère est pauvre.", "Ma grand-mère est malade."], reponse: 3, explication: "*Estar malo/a* = être **malade** (état). *Ser malo/a* = être méchant ou mauvais." },
        { type: "saisie", question: "Mets à la voix passive au présent : « Miles de turistas visitan el museo cada año. » → « El museo ... visitado por miles de turistas cada año. »", reponses: ["es"], explication: "Voix passive = **ser** + participe passé accordé : *El museo es visitado por miles de turistas*. Au passé : *El cuadro fue pintado por Velázquez*." },
        { type: "redaction", question: "Décris en 6 à 8 phrases une personne de ta famille : qui elle est, d'où elle vient, son métier, son caractère, où elle est et comment elle se sent en ce moment. Utilise au moins trois fois *ser* et trois fois *estar*.", corrige: "Modèle :\n\n*Te presento a mi tía Inés. Es la hermana de mi madre. Es de Toulouse, pero ahora vive en Barcelona. Es arquitecta y trabaja mucho. Es muy simpática, divertida y un poco despistada. Ahora mismo está en Madrid por su trabajo: está visitando un edificio nuevo. Hoy está cansada, pero está contenta porque mañana es su cumpleaños.*\n\nPoints vérifiés :\n- **ser** : identité (*es la hermana*), origine (*es de Toulouse*), profession (*es arquitecta*), caractère (*es simpática*), date (*mañana es su cumpleaños*) ;\n- **estar** : localisation (*está en Madrid*), action en cours (*está visitando*), état (*está cansada, está contenta*)." }
      ]
    },
    {
      id: "gustar-pronombres",
      titre: "Gustar, doler, encantar et les pronoms compléments",
      theme: "Grammaire",
      cours: `
## Les verbes comme gustar
Avec *gustar*, la chose aimée est le **sujet** : le verbe s'accorde avec elle.
- *Me gust**a** el cine.* / *Me gust**an** las películas de terror.* / *Me gust**a** bailar.* (infinitif → singulier)
- Pronoms : **me, te, le, nos, os, les**. Pour insister ou préciser : *A mí me gusta... A ella le gusta... A mis padres les gusta...*

D'autres verbes fonctionnent de la même façon :
| Verbe | Sens | Exemple |
|---|---|---|
| encantar | adorer | *Me encantan los cómics.* |
| interesar | intéresser | *¿Te interesa la historia?* |
| doler | faire mal | *Me duele la cabeza. Me duelen los pies.* |
| parecer | sembler, paraître | *Me parece interesante.* |
| molestar | déranger, gêner | *Le molesta el ruido.* |
| apetecer | avoir envie | *¿Te apetece un helado?* |
| quedar | rester (il me reste) | *Me quedan dos euros.* |

>! **Pour dire « moi aussi / moi non plus »** : *—Me gusta el rap. —**A mí también.*** / *—No me gusta el rap. —**A mí tampoco.*** / *—Me gusta. —**A mí no.***

## Les pronoms compléments
| | COD | COI |
|---|---|---|
| yo | me | me |
| tú | te | te |
| él, ella, usted | **lo / la** | **le** |
| nosotros | nos | nos |
| vosotros | os | os |
| ellos, ustedes | **los / las** | **les** |

- COD : *¿Ves a Marta? — Sí, **la** veo.* *¿Compras el pan? — Sí, **lo** compro.*
- COI : *Escribo a mi abuela → **Le** escribo.*
- En Espagne, on entend souvent **le** au lieu de *lo* pour un COD masculin de **personne** : *¿Ves a Pablo? — Sí, le veo* (= *lo veo*). C'est admis (le « leísmo »), mais *lo veo* est correct partout.
- Avec deux pronoms : le COI vient **avant** le COD, et **le / les** devient **se** devant lo, la, los, las : *Le doy el libro → **Se lo** doy.*

## Où placer le pronom ?
- **Devant** un verbe conjugué : *Lo compro.*
- **Collé derrière** (enclise) un infinitif, un gérondif ou un impératif affirmatif : *Voy a comprarlo. Estoy leyéndolo. ¡Cómpralo!*
- Avec un infinitif ou un gérondif, les deux places sont possibles : *Lo voy a comprar = Voy a comprarlo.*
- Avec l'enclise, on ajoute souvent un **accent écrit** pour garder l'accent tonique : *leyendo → leyéndolo*, *compra → cómpralo*.

>! **Erreurs fréquentes**
- ✗ *Me gusta los videojuegos* → ✓ *Me gust**an** los videojuegos*.
- ✗ *Yo gusto el chocolate* → ✓ *Me gusta el chocolate*.
- ✗ *Le lo doy* → ✓ *Se lo doy*.

> **À retenir** : gustar, encantar, doler... s'accordent avec la chose (gusta / gustan) ; pronoms me, te, le, nos, os, les ; COD lo, la, los, las ; le + lo = se lo ; pronom devant le verbe conjugué, collé derrière l'infinitif, le gérondif et l'impératif affirmatif.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *duele* ou *duelen* : « Después del partido me ... las piernas. »", reponses: ["duelen"], explication: "*las piernas* est au pluriel → **duelen** : *Me duelen las piernas*." },
        { type: "qcm", question: "« Mes parents adorent voyager. »", choix: ["Mis padres encantan viajar.", "A mis padres les encanta viajar.", "A mis padres les encantan viajar.", "A mis padres le encanta viajar."], reponse: 1, explication: "*encantar* + infinitif → singulier (**encanta**) ; *a mis padres* → pronom pluriel **les**." },
        { type: "saisie", question: "Réponds pour dire « moi non plus » : « —No me gustan las espinacas. —A mí ... . »", reponses: ["tampoco", "A mí tampoco"], explication: "Accord avec une phrase **négative** : *A mí tampoco* (moi non plus)." },
        { type: "saisie", question: "Remplace le complément par un pronom : « Compro **las entradas**. » → « ... compro. »", reponses: ["las"], explication: "*las entradas* est un COD féminin pluriel → **las** : *Las compro*." },
        { type: "saisie", question: "Remplace par deux pronoms : « Doy **el regalo** **a mi hermana**. » → « ... doy. »", reponses: ["se lo"], explication: "COI *le* + COD *lo* → **se lo** : *Se lo doy* (le devient se devant lo)." },
        { type: "vf", question: "« *Voy a llamarte* » et « *Te voy a llamar* » sont deux phrases correctes.", reponse: true, explication: "Avec un infinitif, le pronom peut se placer **devant** le verbe conjugué ou être **collé** à l'infinitif." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Estoy lo leyendo.", "Estoy leyendolo.", "Lo estoy leyéndolo.", "Estoy leyéndolo."], reponse: 3, explication: "Pronom collé au gérondif avec un accent écrit pour garder l'accent tonique : **leyéndolo**. On peut aussi dire *Lo estoy leyendo*, mais jamais le pronom deux fois." },
        { type: "saisie", question: "Traduis : « Ce livre me semble intéressant. »", reponses: ["Este libro me parece interesante", "Ese libro me parece interesante", "Me parece interesante este libro", "Este libro me resulta interesante"], explication: "*parecer* se construit comme *gustar* : **Este libro me parece interesante**." },
        { type: "qcm", question: "« *¿Te apetece ir a la playa?* » signifie :", choix: ["Tu as envie d'aller à la plage ?", "Tu as peur d'aller à la plage ?", "Tu peux aller à la plage ?", "Tu es allé à la plage ?"], reponse: 0, explication: "*apetecer* = **avoir envie** ; il se construit comme *gustar* : *me apetece, te apetece...*" },
        { type: "redaction", question: "Tu écris à ton correspondant mexicain pour lui parler de tes goûts (8 phrases environ) : ce que tu adores, ce qui t'intéresse, ce qui ne te plaît pas, ce qui te dérange au collège, et pose-lui deux questions. Utilise au moins quatre verbes différents de type *gustar*.", corrige: "Modèle :\n\n*¡Hola, Diego! Te cuento mis gustos. Me encanta la música: escucho reguetón y rock todo el día. También me interesan mucho las ciencias, sobre todo la astronomía. Me gusta jugar al baloncesto con mis amigos los miércoles. En cambio, no me gustan nada las verduras. En el colegio me molesta el ruido en el comedor y me parece que las clases empiezan muy temprano. ¿Y a ti? ¿Qué te gusta hacer los fines de semana? ¿Te interesa el fútbol mexicano? Un abrazo, Hugo.*\n\nPoints vérifiés :\n- accord : *me encanta la música / me interesan las ciencias / no me gustan las verduras* ;\n- verbe à l'infinitif → singulier : *me gusta jugar* ;\n- verbes de type *gustar* (au moins quatre) : *encantar, interesar, gustar, molestar, parecer* ;\n- questions avec *¿...?* et pronom *te*." }
      ]
    },
    {
      id: "indefinido-regulares",
      titre: "Raconter au passé : le pretérito indefinido (verbes réguliers)",
      theme: "Grammaire",
      cours: `
## À quoi sert le pretérito indefinido ?
C'est le temps du **récit** : il exprime une action **terminée**, située à un moment **précis et révolu** du passé. Il correspond au passé simple et, le plus souvent, au **passé composé** du français oral.
- *Ayer **visité** el museo.* = Hier, j'ai visité le musée.
- *En 1492, Colón **llegó** a América.* = En 1492, Colomb arriva (est arrivé) en Amérique.

Les marqueurs qui l'accompagnent souvent : **ayer** (hier), **anteayer** (avant-hier), **anoche** (hier soir), **el año pasado**, **la semana pasada**, **el lunes pasado**, **en 2010**, **hace dos años** (il y a deux ans), **un día**, **de repente** (soudain).

## La conjugaison
| | visitar | comer | vivir |
|---|---|---|---|
| yo | visit**é** | com**í** | viv**í** |
| tú | visit**aste** | com**iste** | viv**iste** |
| él/ella/usted | visit**ó** | com**ió** | viv**ió** |
| nosotros | visit**amos** | com**imos** | viv**imos** |
| vosotros | visit**asteis** | com**isteis** | viv**isteis** |
| ellos/ustedes | visit**aron** | com**ieron** | viv**ieron** |

- Les verbes en **-er** et **-ir** ont les **mêmes terminaisons**.
- **L'accent écrit compte** : *hablo* (je parle) ≠ *habló* (il a parlé). *Visite* sans accent n'est pas un indefinido.
- À **nosotros**, la forme est la même qu'au présent pour -ar et -ir (*visitamos, vivimos*) : c'est le contexte qui indique le temps.

## Les changements d'orthographe
Pour garder le même son, la 1re personne change d'orthographe :
- **-car → -qué** : *buscar* → busqué ; *tocar* → toqué ; *sacar* → saqué.
- **-gar → -gué** : *llegar* → llegué ; *jugar* → jugué ; *pagar* → pagué.
- **-zar → -cé** : *empezar* → empecé ; *cruzar* → crucé.
- Entre deux voyelles, le **i devient y** : *leer* → leyó, leyeron ; *oír* → oyó, oyeron ; *caer* → cayó.

>! **Exemple résolu** : « Hier soir, nous avons dîné au restaurant et mon père a payé. » → *Anoche **cenamos** en un restaurante y mi padre **pagó**.* Et à la 1re personne : *Yo **pagué**.*

>! **Erreurs fréquentes**
- ✗ *Ayer he visitado el museo* → en Espagne, avec *ayer*, on utilise l'indefinido : ✓ *Ayer visité el museo*.
- ✗ *Él hablo* → ✓ *Él habló* (sans accent, c'est « je parle »).
- ✗ *Yo llegé* → ✓ *Yo llegué* ; ✗ *leió* → ✓ *leyó*.

> **À retenir** : -é, -aste, -ó, -amos, -asteis, -aron (verbes en -ar) ; -í, -iste, -ió, -imos, -isteis, -ieron (verbes en -er et -ir) ; accents obligatoires à yo et él ; busqué, llegué, empecé ; leyó, oyó.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *visitar* au pretérito indefinido : « El año pasado (yo) ... Granada. »", reponses: ["visité"], explication: "1re personne des verbes en -ar : **-é** avec accent : *visité*." },
        { type: "saisie", question: "Conjugue *comer* au pretérito indefinido : « Ayer mis primos ... en casa de mi abuela. »", reponses: ["comieron"], explication: "3e personne du pluriel des verbes en -er : **-ieron** : *comieron*." },
        { type: "qcm", question: "Dans quelle phrase *habló* est-il correctement employé ?", choix: ["Yo habló con mi profesor ayer.", "Ayer Lucía habló con su profesor.", "Nosotros habló mucho.", "Habló tú con ella."], reponse: 1, explication: "*habló* est la **3e personne du singulier** (él, ella, usted) : *Lucía habló*. Pour *yo* : *hablé* ; *nosotros* : *hablamos* ; *tú* : *hablaste*." },
        { type: "saisie", question: "Conjugue *llegar* au pretérito indefinido : « (Yo) ... tarde al colegio. »", reponses: ["llegué"], explication: "**-gar → -gué** à la 1re personne pour garder le son « g » : *llegué*." },
        { type: "saisie", question: "Conjugue *empezar* au pretérito indefinido : « (Yo) ... a estudiar español hace tres años. »", reponses: ["empecé"], explication: "**-zar → -cé** : *empecé*. Remarque : pas de diphtongue à l'indefinido." },
        { type: "vf", question: "*Leió* est la bonne forme de *leer* à la 3e personne du singulier.", reponse: false, explication: "Entre deux voyelles, le *i* devient **y** : *leyó* (et *leyeron*)." },
        { type: "saisie", question: "Conjugue *vivir* au pretérito indefinido : « ¿Cuántos años (tú) ... en Chile? »", reponses: ["viviste"], explication: "2e personne du singulier des verbes en -ir : **-iste** : *viviste*." },
        { type: "qcm", question: "Quel marqueur temporel appelle normalement le pretérito indefinido ?", choix: ["siempre", "todos los días", "ahora", "anteayer"], reponse: 3, explication: "*anteayer* (avant-hier) situe l'action à un moment **précis et terminé** du passé. Les autres expressions indiquent une habitude ou le moment présent." },
        { type: "saisie", question: "Traduis : « Hier soir, j'ai joué au tennis avec mon frère. »", reponses: ["Anoche jugué al tenis con mi hermano", "Anoche yo jugué al tenis con mi hermano", "Ayer por la noche jugué al tenis con mi hermano", "Anoche jugué al tenis con mi hermano mayor", "Anoche jugué al tenis con mi hermano pequeño"], explication: "*anoche* = hier soir ; *jugar* → **jugué** (-gar → -gué) ; *jugar **al** tenis*." },
        { type: "redaction", question: "Raconte en 8 à 10 phrases ton dernier week-end (samedi et dimanche). Utilise au moins huit verbes réguliers différents au pretérito indefinido, dont deux avec changement d'orthographe (busqué, llegué, empecé...), et des marqueurs temporels.", corrige: "Modèle :\n\n*El fin de semana pasado fue muy agradable. El sábado por la mañana me levanté tarde y desayuné con mi familia. Luego busqué a mi amiga Chloé y caminamos hasta el centro. Compramos un regalo para mi madre y comimos un bocadillo en el parque. Por la tarde, jugué al baloncesto y llegué a casa a las siete. El domingo visitamos a mis abuelos. Mi abuela preparó una paella riquísima. Por la noche, leí un cómic y vi una serie con mi hermano. ¡Me acosté muy tarde!*\n\nPoints vérifiés :\n- verbes réguliers : *me levanté, desayuné, caminamos, compramos, comimos, visitamos, preparó, leí, me acosté* ;\n- changements d'orthographe : *busqué, jugué, llegué* ;\n- accents à *yo* et *él* ;\n- marqueurs : *el fin de semana pasado, el sábado por la mañana, luego, por la tarde, el domingo*.\n\n(*fue* et *vi* sont des irréguliers, vus au chapitre suivant.)" }
      ]
    },
    {
      id: "indefinido-irregulares",
      titre: "Le pretérito indefinido des verbes irréguliers",
      theme: "Grammaire",
      cours: `
## Ser et ir : les mêmes formes !
| ser / ir |
|---|
| fui, fuiste, fue, fuimos, fuisteis, fueron |

C'est le contexte qui donne le sens : *Fui a Madrid* (je suis allé à Madrid) / *Fue un viaje genial* (ce fut un voyage génial).

## Les passés « forts »
Beaucoup de verbes très courants changent de radical et prennent des terminaisons spéciales **sans accent écrit** : **-e, -iste, -o, -imos, -isteis, -ieron**.

| Infinitif | Radical | yo | él | ellos |
|---|---|---|---|---|
| tener | tuv- | tuve | tuvo | tuvieron |
| estar | estuv- | estuve | estuvo | estuvieron |
| andar | anduv- | anduve | anduvo | anduvieron |
| poder | pud- | pude | pudo | pudieron |
| poner | pus- | puse | puso | pusieron |
| saber | sup- | supe | supo | supieron |
| hacer | hic- | hice | **hizo** | hicieron |
| querer | quis- | quise | quiso | quisieron |
| venir | vin- | vine | vino | vinieron |
| decir | dij- | dije | dijo | **dijeron** |
| traer | traj- | traje | trajo | **trajeron** |
| conducir | conduj- | conduje | condujo | **condujeron** |

- *hacer* : le c devient **z** devant o : *hizo*.
- Après un **j**, la 3e personne du pluriel est en **-eron** (et non -ieron) : *dijeron, trajeron, condujeron*.
- *hay* → **hubo** (il y eut) : *Hubo un accidente.*

## Dar et ver
- *dar* : di, diste, dio, dimos, disteis, dieron.
- *ver* : vi, viste, vio, vimos, visteis, vieron.
- Pas d'accent écrit : *dio, vio, fue, fui* (une seule syllabe).

## Les verbes en -ir qui changent de voyelle
À la **3e personne** (singulier et pluriel) seulement :
- **e → i** : *pedir* → pidió, pidieron ; *preferir* → prefirió ; *sentir* → sintió ; *seguir* → siguió ; *repetir* → repitió.
- **o → u** : *dormir* → durmió, durmieron ; *morir* → murió, murieron.

>! **Exemple résolu** : « L'été dernier, nous sommes allés au Pérou. Nous avons eu de la chance : il a fait beau et nous avons vu le Machu Picchu. » → *El verano pasado **fuimos** a Perú. **Tuvimos** suerte: **hizo** buen tiempo y **vimos** el Machu Picchu.*

>! **Erreurs fréquentes**
- ✗ *tenió* → ✓ *tuvo* ; ✗ *hació* → ✓ *hizo* ; ✗ *estuvó* → ✓ *estuvo* (pas d'accent).
- ✗ *dijieron* → ✓ *dijeron*.
- ✗ *él pedió* → ✓ *él pidió* ; ✗ *dormió* → ✓ *durmió*.

> **À retenir** : fui (ser et ir) ; passés forts sans accent : tuve, estuve, pude, puse, supe, hice/hizo, quise, vine, dije, traje ; dijeron, trajeron ; di, vi ; hubo ; pidió, durmió.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *tener* au pretérito indefinido : « Ayer (yo) ... un examen de matemáticas. »", reponses: ["tuve"], explication: "*tener* a un passé fort : **tuve**, tuviste, tuvo, tuvimos, tuvisteis, tuvieron." },
        { type: "qcm", question: "Dans « *Fuimos a la playa y fue un día estupendo* », les deux *fu-* viennent de :", choix: ["ir, puis ser", "ser, puis ir", "ir les deux fois", "ser les deux fois"], reponse: 0, explication: "*Fuimos a la playa* = nous **sommes allés** (*ir*) ; *fue un día estupendo* = ce **fut** une journée formidable (*ser*). *Ser* et *ir* ont les mêmes formes à l'indefinido." },
        { type: "saisie", question: "Conjugue *hacer* au pretérito indefinido : « ¿Qué ... tu hermano el sábado? »", reponses: ["hizo"], explication: "3e personne de *hacer* : **hizo** (c → z devant o, sans accent)." },
        { type: "saisie", question: "Conjugue *decir* au pretérito indefinido : « Mis amigos me ... la verdad. »", reponses: ["dijeron"], explication: "Après **j**, la terminaison est **-eron** : *dijeron* (et non *dijieron*)." },
        { type: "vf", question: "*Estuvó* porte un accent écrit, comme *habló*.", reponse: false, explication: "Les passés forts n'ont **pas d'accent écrit** : *estuvo, tuvo, pudo, hizo*. Seuls les verbes réguliers ont *-ó* accentué." },
        { type: "saisie", question: "Conjugue *pedir* au pretérito indefinido : « En el restaurante, Carlos ... una ensalada. »", reponses: ["pidió"], explication: "Verbe en -ir avec **e → i** à la 3e personne : *pidió*." },
        { type: "qcm", question: "Choisis la bonne forme : « Anoche los niños ... diez horas. » (*dormir*)", choix: ["dormieron", "duermieron", "durmieron", "dormió"], reponse: 2, explication: "*dormir* : **o → u** à la 3e personne de l'indefinido : *durmió, durmieron*. *Dormió* est mal formé (il faut *durmió*) et ne s'accorde pas avec *los niños* (pluriel)." },
        { type: "saisie", question: "Conjugue *venir* au pretérito indefinido : « Mis tíos ... a vernos en Navidad. »", reponses: ["vinieron"], explication: "*venir* : vine, viniste, vino, vinimos, vinisteis, **vinieron**." },
        { type: "saisie", question: "Traduis : « Je n'ai pas pu venir. » (pretérito indefinido)", reponses: ["No pude venir", "Yo no pude venir"], explication: "*poder* → **pude** (passé fort, sans accent) : *No pude venir*." },
        { type: "redaction", question: "Raconte en 8 à 10 phrases un voyage que tu as fait (réel ou imaginé) : où tu es allé, avec qui, comment, ce que tu as fait et vu, et une anecdote. Utilise au moins six verbes irréguliers différents au pretérito indefinido.", corrige: "Modèle :\n\n*El verano pasado fui a Andalucía con mis padres y mi hermana. Fuimos en tren hasta Madrid y después mi padre condujo hasta Granada. Estuvimos cinco días allí. El primer día vimos la Alhambra: fue increíble. Mi hermana hizo muchas fotos de los jardines. Por la tarde, tuvimos mucho calor y no pudimos andar mucho. Un día, mi madre pidió unas tapas y el camarero nos trajo un plato enorme. ¡Fue muy divertido! Al final, quise quedarme más tiempo, pero tuvimos que volver.*\n\nPoints vérifiés :\n- irréguliers : *fui, fuimos, condujo, estuvimos, vimos, fue, hizo, tuvimos, pudimos, pidió, trajo, quise* ;\n- aucun accent sur les passés forts ;\n- marqueurs : *el verano pasado, el primer día, por la tarde, un día, al final*." }
      ]
    },
    {
      id: "imperfecto-relato",
      titre: "L'imparfait et le récit au passé",
      theme: "Grammaire",
      cours: `
## La formation de l'imparfait (pretérito imperfecto)
| | hablar | comer | vivir |
|---|---|---|---|
| yo | habl**aba** | com**ía** | viv**ía** |
| tú | habl**abas** | com**ías** | viv**ías** |
| él/ella/usted | habl**aba** | com**ía** | viv**ía** |
| nosotros | habl**ábamos** | com**íamos** | viv**íamos** |
| vosotros | habl**abais** | com**íais** | viv**íais** |
| ellos/ustedes | habl**aban** | com**ían** | viv**ían** |

- Accent écrit : **-ábamos** (verbes en -ar) et **-í-** dans toutes les formes des verbes en -er et -ir.
- **Seulement trois irréguliers** :
  - *ser* : era, eras, era, éramos, erais, eran ;
  - *ir* : iba, ibas, iba, íbamos, ibais, iban ;
  - *ver* : veía, veías, veía, veíamos, veíais, veían.
- *hay* → **había** (il y avait).

## Imparfait ou indefinido ?
| Imparfait | Indefinido |
|---|---|
| le **décor**, la description | l'**action** principale, l'événement |
| l'**habitude** dans le passé | une action **unique** et terminée |
| une action **en cours** (interrompue) | l'action qui **interrompt** |
| *siempre, todos los días, de pequeño, antes, mientras* | *ayer, un día, de repente, en 1992, hace tres años* |

>! **Exemple résolu** : *Era un domingo de verano. Hacía calor y mis amigos y yo jugábamos en la plaza. De repente, empezó a llover y todos volvimos corriendo a casa.*
- *Era, hacía, jugábamos* : le décor et l'action en cours → imparfait.
- *empezó, volvimos* : les événements → indefinido.

>! **Raconter son enfance** : *Cuando era pequeño, vivía en Lille. Todos los veranos iba a la playa con mis abuelos. Me encantaban los helados de fresa.* (habitudes → imparfait)

## Les marqueurs pour organiser un récit
*Al principio* (au début), *primero*, *luego / después* (ensuite), *mientras* (pendant que), *de repente* (soudain), *entonces* (alors), *al final / por fin* (finalement), *aquel día* (ce jour-là), *unos días después* (quelques jours plus tard).

>! **Erreurs fréquentes**
- ✗ *De pequeño fui al parque todos los días* → ✓ *De pequeño **iba** al parque todos los días* (habitude).
- ✗ *Hablabamos* → ✓ *Hablábamos* (accent) ; ✗ *comia* → ✓ *comía*.
- ✗ *Habían muchas personas* → ✓ *Había muchas personas* (*había* est invariable).

> **À retenir** : -aba / -ía ; trois irréguliers : era, iba, veía ; había invariable. Imparfait = décor, description, habitude, action en cours ; indefinido = action principale, ponctuelle, terminée.
`,
      exercices: [
        { type: "saisie", question: "Conjugue *vivir* à l'imparfait : « Cuando era pequeña, (yo) ... en Bilbao. »", reponses: ["vivía"], explication: "Imparfait des verbes en -ir : **-ía** avec accent : *vivía*." },
        { type: "saisie", question: "Conjugue *ir* à l'imparfait : « Todos los domingos (nosotros) ... al mercado. »", reponses: ["íbamos"], explication: "*ir* est irrégulier : iba, ibas, iba, **íbamos**, ibais, iban (accent sur le premier i)." },
        { type: "qcm", question: "Complète : « Antes mi abuelo ... en una fábrica. » (habitude passée)", choix: ["trabajó", "trabaja", "trabajaba", "trabajará"], reponse: 2, explication: "*Antes* + habitude dans le passé → **imparfait** : *trabajaba*." },
        { type: "vf", question: "« *Habían muchos turistas en la playa* » est correct.", reponse: false, explication: "*Había* (il y avait) est **invariable** : *Había muchos turistas*." },
        { type: "qcm", question: "Complète : « Yo ... la tele cuando, de repente, ... el teléfono. »", choix: ["veía / sonó", "vi / sonaba", "veía / sonaba", "vi / sonó"], reponse: 0, explication: "Action **en cours** (*veía*, imparfait) interrompue par un **événement** ponctuel et soudain (*de repente... sonó*, indefinido)." },
        { type: "saisie", question: "Conjugue *ser* à l'imparfait : « Mis padres ... muy jóvenes en esta foto. »", reponses: ["eran"], explication: "*ser* à l'imparfait : era, eras, era, éramos, erais, **eran**." },
        { type: "saisie", question: "Conjugue *hablar* à l'imparfait : « Mi hermana y yo ... mucho por teléfono. »", reponses: ["hablábamos"], explication: "*nosotros* : **-ábamos** avec accent écrit : *hablábamos*." },
        { type: "qcm", question: "Quelle phrase mélange correctement imparfait et indefinido ?", choix: ["Fue de noche y llovió cuando llegaba a casa.", "Era de noche y llovía cuando llegué a casa.", "Era de noche y llovió mientras llegaba siempre.", "Fue de noche y llovía cuando llegaba a casa."], reponse: 1, explication: "Le décor (*era de noche, llovía*) est à l'imparfait ; l'événement (*llegué*) est à l'indefinido." },
        { type: "saisie", question: "Mets le verbe au bon temps : « Un día, mientras paseaba por el bosque, (yo, *ver*) ... un zorro. »", reponses: ["vi"], explication: "*Un día* + action ponctuelle qui survient pendant la promenade → indefinido : **vi** (sans accent)." },
        { type: "redaction", question: "**Sujet de contrôle** (80 à 100 mots) — Écris le début d'une histoire qui commence par : « *Era un sábado por la noche...* ». Décris le décor (temps, lieu, personnages) puis raconte un événement inattendu. Utilise l'imparfait pour le décor et l'indefinido pour les actions.", corrige: "Modèle :\n\n*Era un sábado por la noche. Hacía frío y llovía mucho. Mis padres estaban en el cine y yo estaba solo en casa con mi perro, Toby. Leía un libro de misterio en el sofá y Toby dormía tranquilamente. De repente, oí un ruido en el jardín. Toby se despertó y empezó a ladrar. Me levanté, cogí una linterna y abrí la puerta despacio. Entonces vi una sombra detrás del árbol... ¡Era mi vecina! Buscaba a su gato, que estaba perdido. Al final, encontramos al gato juntos y volvimos a casa muy contentos.*\n\nPoints vérifiés :\n- imparfait pour le décor et les actions en cours : *era, hacía, llovía, estaban, estaba, leía, dormía, buscaba, estaba perdido* ;\n- indefinido pour les événements : *oí, se despertó, empezó, me levanté, cogí, abrí, vi, encontramos, volvimos* ;\n- connecteurs : *de repente, entonces, al final* ;\n- accents : *leía, dormía, oí*." }
      ]
    },
    {
      id: "preterito-perfecto",
      titre: "Le passé composé (pretérito perfecto)",
      theme: "Grammaire",
      cours: `
## La formation
**haber** au présent + **participe passé** (invariable).

| haber | + participe |
|---|---|
| he | visitado |
| has | comido |
| ha | vivido |
| hemos | ... |
| habéis | ... |
| han | ... |

- Participe régulier : **-ar → -ado** (*hablado*), **-er / -ir → -ido** (*comido, vivido*).
- Avec *haber*, le participe **ne s'accorde jamais** : *Las chicas han llegado.*
- On ne sépare pas *haber* du participe, et les pronoms se placent **devant** : *Ya lo he hecho. Me he levantado.*
- Accent : *leer → leído*, *oír → oído*, *traer → traído*, *caer → caído*.

## Les participes irréguliers
| Infinitif | Participe | Infinitif | Participe |
|---|---|---|---|
| hacer | hecho | abrir | abierto |
| decir | dicho | escribir | escrito |
| ver | visto | romper | roto |
| poner | puesto | morir | muerto |
| volver | vuelto | descubrir | descubierto |
| resolver | resuelto | freír | frito |

Attention : *ser* → **sido** et *ir* → **ido** sont réguliers ; *Ha sido un día genial. Hemos ido al cine.*

## Quand l'employer ?
En **Espagne**, le pretérito perfecto exprime une action passée **dans une période qui n'est pas terminée** ou très proche du présent :
- *hoy, esta mañana, esta semana, este año, este verano* : *Esta mañana **he desayunado** tarde.*
- une expérience de la vie, sans date : *¿**Has estado** alguna vez en México? — No, **nunca he estado**.*
- avec **ya** (déjà) et **todavía no / aún no** (pas encore) : *¿Ya **has terminado**? — Todavía no.*

Comparer : *Hoy **he visto** a Lucía* (aujourd'hui, journée en cours) / *Ayer **vi** a Lucía* (hier, période terminée → indefinido).

>! **En Amérique latine** : on utilise beaucoup plus l'indefinido, même pour aujourd'hui : *Hoy vi a Lucía. ¿Ya terminaste?* Ces deux usages sont corrects ; dans tes rédactions, choisis l'usage d'Espagne et reste cohérent.

>! **Erreurs fréquentes**
- ✗ *He hacido* → ✓ *He hecho* ; ✗ *He escribido* → ✓ *He escrito*.
- ✗ *Ellas han llegadas* → ✓ *Ellas han llegado* (invariable).
- ✗ *He lo visto* → ✓ *Lo he visto*.
- ✗ *Ayer he ido al cine* → ✓ *Ayer fui al cine* (en Espagne).

> **À retenir** : he, has, ha, hemos, habéis, han + participe invariable ; hecho, dicho, visto, puesto, vuelto, abierto, escrito, roto, muerto ; emploi avec hoy, esta semana, este año, ya, todavía no, nunca, alguna vez.
`,
      exercices: [
        { type: "saisie", question: "Conjugue au pretérito perfecto : « Esta mañana (yo, *desayunar*) ... churros. »", reponses: ["he desayunado"], explication: "*Esta mañana* → période pas terminée → **he desayunado** (*haber* + participe en -ado)." },
        { type: "saisie", question: "Donne le participe passé de *escribir*.", reponses: ["escrito"], explication: "Participe irrégulier : *escribir* → **escrito**." },
        { type: "saisie", question: "Donne le participe passé de *volver*.", reponses: ["vuelto"], explication: "Participe irrégulier : *volver* → **vuelto** (de même *devolver* → *devuelto*)." },
        { type: "qcm", question: "« *¿Has estado alguna vez en Cuba?* » signifie :", choix: ["Tu es déjà allé à Cuba ?", "Tu étais à Cuba la semaine dernière ?", "Tu iras à Cuba un jour ?", "Tu es à Cuba en ce moment ?"], reponse: 0, explication: "*alguna vez* (déjà, une fois dans ta vie) + pretérito perfecto = une **expérience**." },
        { type: "vf", question: "« *Mis hermanas han salidas* » est correct.", reponse: false, explication: "Avec *haber*, le participe est **invariable** : *Mis hermanas han salido*." },
        { type: "qcm", question: "En Espagne, quelle phrase est correcte ?", choix: ["Ayer he comido paella.", "Este año he viajado mucho.", "En 2020 he vivido en Lima.", "El lunes pasado he ido al médico."], reponse: 1, explication: "*Este año* : période **pas encore terminée** → pretérito perfecto. Avec *ayer, en 2020, el lunes pasado* (périodes terminées), on emploie l'indefinido." },
        { type: "saisie", question: "Conjugue au pretérito perfecto : « Todavía no (nosotros, *hacer*) ... los deberes. »", reponses: ["hemos hecho"], explication: "*hacer* → participe irrégulier **hecho** : *hemos hecho*." },
        { type: "saisie", question: "Remets dans l'ordre : *visto / lo / he / ya* → « ... »", reponses: ["Ya lo he visto", "Lo he visto ya"], explication: "Le pronom se place **devant** *haber* et on ne sépare pas *he* de *visto* : *Ya lo he visto*." },
        { type: "qcm", question: "Quel participe est mal formé ?", choix: ["roto", "abierto", "leído", "decido"], reponse: 3, explication: "Le participe de *decir* est **dicho**. *roto* (romper), *abierto* (abrir) et *leído* (leer, avec accent) sont corrects." },
        { type: "redaction", question: "C'est la fin du premier trimestre. Écris un message (70 à 90 mots) à ton correspondant pour faire le bilan : ce que tu as fait cette année, ce que tu n'as pas encore fait, une expérience nouvelle. Utilise au moins six verbes au pretérito perfecto, dont trois participes irréguliers, et *ya*, *todavía no*, *nunca*.", corrige: "Modèle :\n\n*¡Hola, Marina! ¿Qué tal? Este trimestre ha sido muy intenso. He trabajado mucho en clase y he sacado buenas notas en español. Con mi clase hemos visto una obra de teatro y hemos hecho un proyecto sobre el reciclaje. Ya he escrito la mitad de mi informe de prácticas, pero todavía no he decidido qué quiero hacer el año que viene. Además, he descubierto un deporte nuevo: el pádel. ¡Nunca he probado un deporte tan divertido! ¿Y tú? ¿Qué has hecho este trimestre? Besos, Inès.*\n\nPoints vérifiés :\n- *haber* au présent + participe invariable : *ha sido, he trabajado, he sacado, hemos visto, hemos hecho, he escrito, he decidido, he descubierto, he probado* ;\n- participes irréguliers : *visto, hecho, escrito, descubierto* ;\n- *ya, todavía no, nunca* ;\n- période non terminée : *este trimestre*." }
      ]
    },
    {
      id: "futuro-condicional",
      titre: "Le futur et le conditionnel",
      theme: "Grammaire",
      cours: `
## Le futur simple
On part de l'**infinitif entier** et on ajoute les terminaisons (les mêmes pour -ar, -er, -ir) :
| | hablar |
|---|---|
| yo | hablar**é** |
| tú | hablar**ás** |
| él/ella/usted | hablar**á** |
| nosotros | hablar**emos** |
| vosotros | hablar**éis** |
| ellos/ustedes | hablar**án** |

## Le conditionnel présent
Même base, terminaisons de l'imparfait des verbes en -er : **-ía, -ías, -ía, -íamos, -íais, -ían**.
- *hablaría, comerías, viviríamos*.
- *Me gustaría* (j'aimerais), *¿Podrías ayudarme?* (pourrais-tu m'aider ?), *Deberías descansar* (tu devrais te reposer).

## Les radicaux irréguliers (communs au futur et au conditionnel)
| Infinitif | Radical | Futur | Conditionnel |
|---|---|---|---|
| tener | tendr- | tendré | tendría |
| poner | pondr- | pondré | pondría |
| salir | saldr- | saldré | saldría |
| venir | vendr- | vendré | vendría |
| poder | podr- | podré | podría |
| saber | sabr- | sabré | sabría |
| querer | querr- | querré | querría |
| haber | habr- | habrá (il y aura) | habría |
| hacer | har- | haré | haría |
| decir | dir- | diré | diría |

## Les emplois
- **Futur** : une action à venir, une prévision : *El año que viene **iré** al instituto. Mañana **lloverá** en el norte.*
- **Futur proche** (rappel) : *ir a* + infinitif : *Voy a estudiar.*
- **Conditionnel** : la politesse, le souhait, le conseil, l'hypothèse : *Me **gustaría** ser veterinario. Yo, en tu lugar, **hablaría** con él.*

## L'hypothèse avec si
- **Si + présent → futur** (hypothèse réalisable) : *Si **tengo** tiempo, **iré** a la piscina.*
- Comme en français, jamais de futur après *si* : ✗ *Si tendré tiempo...*
- (Pour « si j'avais..., je ferais... », l'espagnol utilise le subjonctif imparfait, que tu étudieras au lycée : *Si tuviera dinero, viajaría.*)

>! **Projets d'avenir** : *Cuando sea mayor* (quand je serai grand) — attention, après *cuando*, l'espagnol emploie le **subjonctif** et non le futur (voir le chapitre sur le subjonctif) : *Cuando **sea** mayor, **seré** periodista.*

>! **Erreurs fréquentes**
- ✗ *teneré* → ✓ *tendré* ; ✗ *hazé* → ✓ *haré* ; ✗ *saliré* → ✓ *saldré*.
- ✗ *hablare* → ✓ *hablaré* (accent obligatoire, sauf à nosotros : *hablaremos*).
- ✗ *Si lloverá, no saldré* → ✓ *Si llueve, no saldré*.

> **À retenir** : futur = infinitif + é, ás, á, emos, éis, án ; conditionnel = infinitif + ía, ías, ía, íamos, íais, ían ; radicaux irréguliers : tendr-, pondr-, saldr-, vendr-, podr-, sabr-, querr-, habr-, har-, dir- ; si + présent → futur.
`,
      exercices: [
        { type: "saisie", question: "Conjugue au futur : « El verano que viene (nosotros, *viajar*) ... a Colombia. »", reponses: ["viajaremos"], explication: "Infinitif + **-emos** : *viajaremos* (pas d'accent écrit à nosotros)." },
        { type: "saisie", question: "Conjugue au futur : « Mañana (yo, *tener*) ... un examen. »", reponses: ["tendré"], explication: "Radical irrégulier **tendr-** : *tendré*." },
        { type: "saisie", question: "Conjugue au futur : « ¿Qué (tú, *hacer*) ... después del colegio? »", reponses: ["harás"], explication: "*hacer* → radical **har-** : *harás*." },
        { type: "qcm", question: "« J'aimerais visiter Buenos Aires. »", choix: ["Me gustará visitar Buenos Aires.", "Me gustaba visitar Buenos Aires.", "Me gustaría visitar Buenos Aires.", "Me gusté visitar Buenos Aires."], reponse: 2, explication: "Souhait poli → **conditionnel** : *Me gustaría*." },
        { type: "saisie", question: "Conjugue au conditionnel : « (Tú, *deber*) ... dormir más. » (conseil)", reponses: ["deberías"], explication: "Conseil → conditionnel : *deber* + **-ías** : *deberías* (tu devrais)." },
        { type: "vf", question: "« *Si hará buen tiempo, iremos a la playa* » est correct.", reponse: false, explication: "Jamais de futur après *si* : **Si hace buen tiempo, iremos a la playa** (si + présent → futur)." },
        { type: "saisie", question: "Conjugue au futur : « Este fin de semana mis amigos (*salir*) ... de excursión. »", reponses: ["saldrán"], explication: "*salir* → radical **saldr-** : *saldrán*." },
        { type: "qcm", question: "Quelle forme est le conditionnel de *decir* à la 1re personne ?", choix: ["diría", "deciría", "diré", "dicería"], reponse: 0, explication: "Radical irrégulier **dir-** + *-ía* : *diría*. *diré* est le futur." },
        { type: "saisie", question: "Conjugue au futur : « Según el pronóstico, mañana (*haber*) ... tormentas en el sur. »", reponses: ["habrá"], explication: "*hay* au futur → **habrá** (il y aura), toujours au singulier." },
        { type: "redaction", question: "**Sujet de contrôle** (80 à 100 mots) — Tu imagines ta vie dans quinze ans : ton métier, ton lieu de vie, ta famille, tes loisirs. Ajoute une hypothèse avec *si* et un souhait au conditionnel. Utilise au moins six verbes au futur, dont quatre irréguliers.", corrige: "Modèle :\n\n*Dentro de quince años, tendré veintinueve años. Seré bióloga marina y trabajaré en un centro de investigación en las islas Canarias. Viviré en una casa cerca del mar con mi pareja y, tal vez, tendremos un perro. Por la mañana saldré en barco para estudiar las ballenas y los delfines. Los fines de semana haré submarinismo y podré ver peces de todos los colores. Si gano bastante dinero, haré un viaje a las islas Galápagos. Me gustaría mucho ver las tortugas gigantes. ¡Será una vida fantástica!*\n\nPoints vérifiés :\n- futurs réguliers : *seré, trabajaré, viviré, será* ;\n- futurs irréguliers : *tendré, tendremos, saldré, haré, podré* ;\n- hypothèse : *si gano* (présent) → *haré* (futur) ;\n- souhait : *me gustaría* ;\n- marqueurs : *dentro de quince años, por la mañana, los fines de semana*." }
      ]
    },
    {
      id: "perifrasis-obligacion",
      titre: "L'obligation, la durée et les périphrases verbales",
      theme: "Grammaire",
      cours: `
## Exprimer l'obligation
| Tournure | Sens | Exemple |
|---|---|---|
| **tener que** + infinitif | devoir (obligation personnelle) | *Tengo que estudiar.* |
| **hay que** + infinitif | il faut (obligation générale, impersonnelle) | *Hay que reciclar.* |
| **deber** + infinitif | devoir (obligation morale, conseil) | *Debes respetar a los demás.* |
| **es necesario / es importante** + infinitif | il est nécessaire / important de | *Es necesario ahorrar agua.* |

- *Hay que* est **invariable** et n'a pas de sujet : ✗ *Hay que tú estudias* → ✓ *Tienes que estudiar*.
- **No hace falta** + infinitif = ce n'est pas la peine de : *No hace falta gritar.*

## Les périphrases verbales
| Périphrase | Sens | Exemple |
|---|---|---|
| **ir a** + infinitif | aller faire (futur proche) | *Voy a salir.* |
| **acabar de** + infinitif | venir de | *Acabo de llegar.* (je viens d'arriver) |
| **volver a** + infinitif | refaire, faire de nouveau | *Vuelvo a leer el texto.* (je relis) |
| **empezar a / ponerse a** + infinitif | commencer à, se mettre à | *Empezó a llover.* |
| **dejar de** + infinitif | arrêter de | *Mi padre dejó de fumar.* |
| **estar** + gérondif | être en train de | *Estamos comiendo.* |
| **seguir** + gérondif | continuer à | *Sigue lloviendo.* (il continue à pleuvoir) |
| **llevar** + durée + gérondif | faire quelque chose depuis | *Llevo tres años estudiando español.* |

## Le gérondif
- **-ar → -ando** : *hablando* ; **-er / -ir → -iendo** : *comiendo, viviendo*.
- Irréguliers : *leer → leyendo, oír → oyendo, ir → yendo, traer → trayendo* ; *pedir → pidiendo, decir → diciendo, dormir → durmiendo, venir → viniendo*.

## Exprimer la durée
- **hace** + durée = il y a : *Llegué **hace** dos semanas.*
- **desde hace** + durée = depuis : *Vivo aquí **desde hace** cinco años.* = *Llevo cinco años viviendo aquí.*
- **desde** + date = depuis : *Estudio español desde 2024.*
- **dentro de** + durée = dans (futur) : *Volveré dentro de un mes.*

>! **Exemple résolu** : « Je fais de la guitare depuis deux ans et je viens de m'inscrire à un concours. Je dois m'entraîner tous les jours. » → *Llevo dos años tocando la guitarra y acabo de inscribirme en un concurso. Tengo que practicar todos los días.*

>! **Erreurs fréquentes**
- ✗ *Vengo de llegar* (calque du français) → ✓ *Acabo de llegar*.
- ✗ *Tengo de estudiar* → ✓ *Tengo que estudiar*.
- ✗ *Continúo de leer* → ✓ *Sigo leyendo*.

> **À retenir** : tener que (personnel), hay que (général), deber (moral) ; acabar de = venir de ; volver a = re- ; dejar de = arrêter de ; seguir + gérondif = continuer à ; llevar + durée + gérondif = depuis ; hace = il y a ; dentro de = dans.
`,
      exercices: [
        { type: "saisie", question: "Traduis : « Je viens de finir mes devoirs. »", reponses: ["Acabo de terminar los deberes", "Acabo de terminar mis deberes", "Acabo de hacer los deberes", "Acabo de hacer mis deberes"], explication: "« Venir de » + infinitif = **acabar de** + infinitif : *Acabo de terminar los deberes*." },
        { type: "qcm", question: "« Il faut protéger les océans. » (obligation générale)", choix: ["Tiene que proteger los océanos.", "Hay que proteger los océanos.", "Hay proteger los océanos.", "Es que proteger los océanos."], reponse: 1, explication: "Obligation **générale et impersonnelle** → **hay que** + infinitif." },
        { type: "saisie", question: "Complète : « (Yo) ... tres años estudiando español. » (= j'étudie l'espagnol depuis trois ans)", reponses: ["llevo"], explication: "**llevar** + durée + gérondif = faire quelque chose depuis : *Llevo tres años estudiando español*." },
        { type: "saisie", question: "Donne le gérondif de *leer*.", reponses: ["leyendo"], explication: "Entre deux voyelles, le i devient **y** : *leyendo*." },
        { type: "vf", question: "« *Sigue lloviendo* » signifie « Il continue à pleuvoir ».", reponse: true, explication: "**seguir** + gérondif = continuer à : *Sigue lloviendo*." },
        { type: "qcm", question: "« *Mi abuelo dejó de trabajar a los 62 años.* » signifie :", choix: ["Il a laissé travailler...", "Il a recommencé à travailler...", "Il a arrêté de travailler...", "Il a continué à travailler..."], reponse: 2, explication: "**dejar de** + infinitif = **arrêter de**." },
        { type: "saisie", question: "Complète avec *hace* ou *dentro de* : « Mi prima se fue a Argentina ... dos años. »", reponses: ["hace"], explication: "Action passée → **hace** + durée = il y a : *se fue hace dos años*." },
        { type: "saisie", question: "Traduis avec *volver a* : « Je relis le texte. »", reponses: ["Vuelvo a leer el texto", "Yo vuelvo a leer el texto"], explication: "**volver a** + infinitif exprime la répétition : *Vuelvo a leer el texto*." },
        { type: "qcm", question: "Quelle phrase contient une erreur ?", choix: ["Tengo que salir temprano.", "Debemos cuidar el planeta.", "Acabamos de llegar.", "Tengo de estudiar esta tarde."], reponse: 3, explication: "*Tener* + infinitif se construit avec **que** : *Tengo que estudiar esta tarde*. Les trois autres phrases sont correctes : *tener que* (obligation), *deber* (obligation morale), *acabar de* (venir de)." },
        { type: "redaction", question: "Le collège organise une semaine écologique. Rédige 6 à 8 règles et conseils pour l'affiche (en espagnol) avec *hay que*, *tener que*, *deber*, *no hace falta* et *dejar de*, puis une phrase qui dit depuis quand le collège agit (*llevar* + gérondif ou *desde hace*).", corrige: "Modèle :\n\n*¡Semana verde en el colegio!*\n- *Hay que apagar la luz al salir de clase.*\n- *Tenemos que separar la basura: el papel en el contenedor azul y los envases en el amarillo.*\n- *Debemos venir a pie o en bici cuando sea posible.*\n- *Hay que cerrar el grifo mientras nos lavamos las manos.*\n- *No hace falta imprimir todos los documentos.*\n- *Tenemos que dejar de usar botellas de plástico: ¡trae tu cantimplora!*\n- *Debemos cuidar las plantas del patio.*\n\n*Nuestro colegio lleva tres años organizando esta semana. / Organizamos esta semana desde hace tres años.*\n\nPoints vérifiés :\n- *hay que* + infinitif (général) ; *tener que* conjugué (*tenemos que*) ; *deber* (*debemos*) ;\n- *no hace falta* + infinitif ; *dejar de* + infinitif ;\n- *llevar* + durée + gérondif ou *desde hace* + durée." }
      ]
    },
    {
      id: "subjuntivo-iniciacion",
      titre: "Initiation au subjonctif présent",
      theme: "Grammaire",
      cours: `
## Pourquoi le subjonctif ?
L'espagnol emploie le **subjonctif** beaucoup plus souvent que le français, en particulier pour parler d'une action **souhaitée**, **voulue** ou **pas encore réalisée**. En 3e, tu dois savoir le **former** et l'employer dans quelques tournures très courantes.

## La formation
On part de la **1re personne du présent de l'indicatif** (*yo*), on enlève le **-o** et on ajoute les terminaisons « croisées » :
- verbes en **-ar** → terminaisons en **-e** : *hablo* → habl**e**, habl**es**, habl**e**, habl**emos**, habl**éis**, habl**en** ;
- verbes en **-er / -ir** → terminaisons en **-a** : *como* → com**a**, com**as**, com**a**, com**amos**, com**áis**, com**an** ; *vivo* → viv**a**...

Les irrégularités de la 1re personne se retrouvent donc partout :
- *tengo* → **tenga** ; *hago* → **haga** ; *digo* → **diga** ; *salgo* → **salga** ; *pongo* → **ponga** ; *vengo* → **venga** ; *conozco* → **conozca**.

Les diphtongues restent, sauf à nosotros et vosotros :
- *quiero* → quiera, quieras, quiera, **queramos**, **queráis**, quieran ; *puedo* → pueda... **podamos**.
- Les verbes en -ir comme *pedir* gardent le i partout : *pida, pidamos* ; *dormir* → *duerma, durmamos*.

Changements d'orthographe : *buscar* → **busque** ; *llegar* → **llegue** ; *empezar* → **empiece** ; *coger* → **coja**.

## Six irréguliers à connaître
| ser | ir | estar | dar | saber | haber |
|---|---|---|---|---|---|
| sea | vaya | esté | dé | sepa | haya |
| seas | vayas | estés | des | sepas | hayas |
| sea | vaya | esté | dé | sepa | haya |
| seamos | vayamos | estemos | demos | sepamos | hayamos |
| seáis | vayáis | estéis | deis | sepáis | hayáis |
| sean | vayan | estén | den | sepan | hayan |

## Les emplois à connaître en 3e
1. **Querer que / esperar que / pedir que** + subjonctif (quand les deux sujets sont différents) : *Quiero que **vengas** a mi fiesta. Espero que **estés** bien. Mis padres me piden que **ordene** mi cuarto.*
   - Même sujet → infinitif : *Quiero venir.*
2. **Ojalá** (pourvu que, j'espère que) + subjonctif : *¡Ojalá **haga** buen tiempo mañana!*
3. **Para que** (pour que) + subjonctif : *Te lo explico para que lo **entiendas**.*
4. **Cuando** + subjonctif pour une action **future** : *Cuando **sea** mayor, seré médico. Cuando **llegues**, llámame.*
   - Mais pour une habitude, indicatif : *Cuando llego a casa, meriendo.*
5. **Es importante que / es necesario que** + subjonctif : *Es importante que **reciclemos**.*
6. La **défense** (*no* + subjonctif) : *¡No **hables**! ¡No **comáis** en clase!* (voir le chapitre sur l'impératif).
7. Les vœux : *¡Que **tengas** un buen día! ¡Que te **mejores**!* (Bon rétablissement !)

>! **Exemple résolu** : « Mes parents veulent que j'aie de bonnes notes et que je fasse du sport. » → *Mis padres quieren que **tenga** buenas notas y que **haga** deporte.*

>! **Erreurs fréquentes**
- ✗ *Quiero que vienes* → ✓ *Quiero que vengas*.
- ✗ *Cuando seré mayor* → ✓ *Cuando sea mayor*.
- ✗ *Ojalá hace sol* → ✓ *Ojalá haga sol*.
- ✗ *Quiero que yo vaya* → ✓ *Quiero ir* (même sujet → infinitif).

> **À retenir** : subjonctif = 1re personne du présent sans -o + terminaisons croisées (-ar → -e ; -er/-ir → -a) ; tenga, haga, diga, salga ; sea, vaya, esté, dé, sepa, haya. Après querer que, esperar que, ojalá, para que, cuando (futur), es importante que, et pour la défense.
`,
      exercices: [
        { type: "saisie", question: "Donne le subjonctif présent de *hablar* à la 2e personne du singulier (tú).", reponses: ["hables"], explication: "Verbe en -ar → terminaisons en **-e** : *hables*." },
        { type: "saisie", question: "Conjugue au subjonctif : « Quiero que (tú, *venir*) ... a mi cumpleaños. »", reponses: ["vengas"], explication: "*venir* → *vengo* → **venga, vengas**... *Querer que* + subjonctif quand les sujets sont différents." },
        { type: "qcm", question: "« Pourvu qu'il fasse beau demain ! »", choix: ["¡Ojalá hace buen tiempo mañana!", "¡Ojalá hará buen tiempo mañana!", "¡Ojalá haga buen tiempo mañana!", "¡Ojalá hizo buen tiempo mañana!"], reponse: 2, explication: "**Ojalá** + subjonctif : *haga* (de *hago*)." },
        { type: "saisie", question: "Conjugue au subjonctif : « Cuando (yo, *ser*) ... mayor, viviré en Madrid. »", reponses: ["sea"], explication: "*cuando* + action future → **subjonctif** : *sea* (et non *seré*)." },
        { type: "vf", question: "« *Quiero que voy al cine* » est correct.", reponse: false, explication: "Deux corrections possibles selon le sens : avec le même sujet, on dit **Quiero ir al cine** ; avec deux sujets différents, il faut le subjonctif : *Quiero que vayas al cine*." },
        { type: "saisie", question: "Conjugue au subjonctif : « Es importante que (nosotros, *ahorrar*) ... agua. »", reponses: ["ahorremos"], explication: "*Es importante que* + subjonctif ; *ahorrar* (-ar) → **ahorremos**." },
        { type: "qcm", question: "Complète : « El profesor repite la explicación para que los alumnos la ... »", choix: ["entiendan", "entienden", "entenderán", "entendieron"], reponse: 0, explication: "**Para que** + subjonctif : *entiendan* (diphtongue conservée à la 3e personne du pluriel)." },
        { type: "saisie", question: "Conjugue au subjonctif : « Espero que (vosotros, *estar*) ... bien. »", reponses: ["estéis"], explication: "*estar* au subjonctif : esté, estés, esté, estemos, **estéis**, estén." },
        { type: "qcm", question: "Dans quelle phrase *cuando* est-il suivi de l'indicatif à juste titre ?", choix: ["Cuando llegue a casa, te llamaré.", "Cuando llego a casa, siempre meriendo.", "Cuando tenga dieciocho años, conduciré.", "Cuando vayas a Lima, visita el centro."], reponse: 1, explication: "*Siempre* indique une **habitude** → indicatif : *cuando llego*. Dans les autres phrases, l'action est **future** → subjonctif." },
        { type: "redaction", question: "Tu écris un message à un ami qui part vivre un an au Chili (6 à 8 phrases). Exprime tes souhaits et tes conseils avec *ojalá*, *espero que*, *quiero que*, *cuando* + subjonctif et une formule de vœu avec *que*.", corrige: "Modèle :\n\n*Querido Tom:*\n*Mañana te vas a Santiago de Chile. ¡Qué suerte! Espero que tengas un buen viaje y que encuentres amigos muy rápido. Ojalá puedas visitar el desierto de Atacama y la Patagonia. Quiero que me escribas a menudo y que me mandes fotos. Cuando llegues, llámame, por favor. Y cuando vuelvas, me contarás todo. ¡Que lo pases muy bien!*\n*Un abrazo muy fuerte,*\n*Léo*\n\nPoints vérifiés :\n- *espero que* + subjonctif : *tengas, encuentres* ;\n- *ojalá* + subjonctif : *puedas* ;\n- *quiero que* + subjonctif : *escribas, mandes* ;\n- *cuando* + subjonctif (futur) : *llegues, vuelvas* ;\n- vœu : *¡Que lo pases muy bien!*" }
      ]
    },
    {
      id: "imperativo-defensa",
      titre: "L'impératif, la défense et l'enclise",
      theme: "Grammaire",
      cours: `
## L'impératif affirmatif
| Personne | -ar (hablar) | -er (comer) | -ir (escribir) |
|---|---|---|---|
| tú | habl**a** | com**e** | escrib**e** |
| vosotros | habl**ad** | com**ed** | escrib**id** |
| usted | habl**e** | com**a** | escrib**a** |
| nosotros (allons !) | habl**emos** | com**amos** | escrib**amos** |
| ustedes | habl**en** | com**an** | escrib**an** |

- **tú** = 3e personne du singulier du présent : *habla, come, escribe, cierra, vuelve, pide*.
- **vosotros** = infinitif dont le **-r** devient **-d** : *hablad, comed, escribid*.
- **usted, ustedes, nosotros** = formes du **subjonctif présent** : *hable, coman, escribamos*.

## Huit impératifs irréguliers à tú
| decir | hacer | ir | poner | salir | ser | tener | venir |
|---|---|---|---|---|---|---|---|
| di | haz | ve | pon | sal | sé | ten | ven |

## La défense (impératif négatif)
On emploie **no + subjonctif présent** à toutes les personnes :
| | hablar | comer | hacer | ir |
|---|---|---|---|---|
| tú | no hables | no comas | no hagas | no vayas |
| vosotros | no habléis | no comáis | no hagáis | no vayáis |
| usted | no hable | no coma | no haga | no vaya |

## L'enclise (les pronoms collés)
- À l'impératif **affirmatif**, les pronoms se collent **derrière** le verbe, et on ajoute souvent un accent écrit : *Dime* (dis-moi), *Cómpralo* (achète-le), *Siéntate* (assieds-toi), *Dámelo* (donne-le-moi).
- À la **défense**, les pronoms restent **devant** : *No me digas. No lo compres. No te sientes.*
- Verbes pronominaux à vosotros : le -d disparaît : *levantad + os → **levantaos***, *sentaos*. À nosotros, le -s disparaît : *levantemos + nos → **levantémonos***.

>! **Exemple résolu : une recette** : *Pela las patatas y córtalas en rodajas. Fríelas en aceite. Bate los huevos, añade sal y mézclalo todo. No pongas el fuego muy fuerte.*

>! **Erreurs fréquentes**
- ✗ *¡No habla!* → ✓ *¡No hables!*
- ✗ *¡No dímelo!* → ✓ *¡No me lo digas!*
- ✗ *¡Hace los deberes!* → ✓ *¡Haz los deberes!*
- ✗ *Levantados* → ✓ *Levantaos*.

> **À retenir** : tú = 3e personne du présent (habla) ; vosotros = infinitif en -d (hablad) ; usted, ustedes, nosotros = subjonctif ; di, haz, ve, pon, sal, sé, ten, ven ; défense = no + subjonctif ; pronoms collés à l'impératif affirmatif (dímelo), devant à la défense (no me lo digas).
`,
      exercices: [
        { type: "saisie", question: "Mets à l'impératif (tú) : « (*Cerrar*) ... la ventana, por favor. »", reponses: ["cierra"], explication: "Impératif à *tú* = 3e personne du présent : **cierra** (diphtongue e → ie)." },
        { type: "saisie", question: "Mets à l'impératif (tú) : « (*Hacer*) ... tus deberes ahora. »", reponses: ["haz"], explication: "*hacer* fait partie des huit irréguliers : **haz**." },
        { type: "saisie", question: "Mets à la forme négative : « ¡Habla! » → « ¡No ...! »", reponses: ["hables"], explication: "Défense = **no + subjonctif** : *¡No hables!*" },
        { type: "qcm", question: "Ton professeur dit à toute la classe (vosotros) : « Écrivez la date. »", choix: ["Escribid la fecha.", "Escribís la fecha.", "Escriban la fecha.", "Escribed la fecha."], reponse: 0, explication: "*vosotros* : infinitif *escribir* → **escribid**. (*Escriban* s'adresse à *ustedes* : vouvoiement pluriel en Espagne, et forme normale pour toute la classe en Amérique latine, où *vosotros* n'est pas employé.)" },
        { type: "saisie", question: "Mets à l'impératif (tú) avec enclise : « (*Sentarse*) ... aquí. »", reponses: ["siéntate"], explication: "*sienta* + *te* → **siéntate** : pronom collé et accent écrit pour garder l'accent tonique." },
        { type: "vf", question: "« *¡No lo compres!* » est la défense correcte de « *¡Cómpralo!* ».", reponse: true, explication: "À la défense, le pronom passe **devant** le verbe, qui est au subjonctif : *¡No lo compres!*" },
        { type: "qcm", question: "Tu vouvoies une dame : « Entrez, s'il vous plaît. »", choix: ["Entra, por favor.", "Entre, por favor.", "Entrad, por favor.", "Entras, por favor."], reponse: 1, explication: "*usted* → forme du **subjonctif** : *entre*." },
        { type: "saisie", question: "Mets à la forme négative (tú) : « ¡Ve al parque! » → « ¡No ... al parque! »", reponses: ["vayas"], explication: "*ir* au subjonctif : *vaya, vayas* → **¡No vayas!**" },
        { type: "saisie", question: "Traduis à l'impératif (tú) : « Dis-le-moi. »", reponses: ["Dímelo"], explication: "*di* + *me* + *lo* → **dímelo** (COI avant COD, accent écrit)." },
        { type: "redaction", question: "Tu accueilles un correspondant espagnol chez toi. Écris-lui une liste de 8 consignes et conseils (tú) pour la semaine : 5 à l'impératif affirmatif (dont deux irréguliers et une avec enclise) et 3 défenses.", corrige: "Modèle :\n\n*Bienvenido a casa, Pablo. Aquí tienes algunos consejos:*\n1. *Ven a desayunar a las siete y media.*\n2. *Pon tu ropa sucia en la cesta del baño.*\n3. *Llama a tus padres esta noche.*\n4. *Dime si necesitas algo.*\n5. *Prueba los quesos franceses: ¡están muy ricos!*\n6. *No hagas ruido después de las diez.*\n7. *No salgas solo por la noche.*\n8. *No te olvides de las llaves.*\n\nPoints vérifiés :\n- impératifs irréguliers : *ven, pon, di* ;\n- réguliers : *llama, prueba* (diphtongue) ;\n- enclise : *dime* ;\n- défenses = *no* + subjonctif : *no hagas, no salgas, no te olvides* (pronom devant)." }
      ]
    },
    {
      id: "arte-hispano",
      titre: "Langages : l'art hispanique, de Velázquez à Frida Kahlo",
      theme: "Langages",
      cours: `
## Quatre tableaux espagnols célèbres
| Œuvre | Peintre | Date | Musée |
|---|---|---|---|
| *Las Meninas* | Diego Velázquez | 1656 | Museo del Prado (Madrid) |
| *El tres de mayo de 1808* | Francisco de Goya | 1814 | Museo del Prado (Madrid) |
| *Guernica* | Pablo Picasso | 1937 | Museo Reina Sofía (Madrid) |
| *La persistencia de la memoria* | Salvador Dalí | 1931 | MoMA (New York) |

- **Las Meninas** : au centre, la petite **infante Marguerite** entourée de ses dames de compagnie (*las meninas*), de deux nains et d'un chien. À gauche, **Velázquez s'est peint lui-même** devant une immense toile. Au fond, dans un **miroir**, on aperçoit le roi Philippe IV et la reine : c'est peut-être eux que le peintre est en train de représenter.
- **El tres de mayo de 1808** : Goya peint l'exécution de civils madrilènes par les soldats de Napoléon, après le soulèvement du 2 mai 1808. Au centre, un homme en chemise blanche lève les bras devant les fusils.
- **Guernica** : le **26 avril 1937**, pendant la **guerre civile espagnole** (1936-1939), la ville basque de Guernica est bombardée par l'aviation allemande (la Légion Condor) et italienne, alliées du général Franco. Picasso peint une immense toile en noir, blanc et gris pour le pavillon de la République espagnole à l'Exposition internationale de Paris. On y voit un taureau, un cheval blessé, une mère qui crie avec son enfant mort dans les bras, une lampe. C'est devenu un **symbole contre la guerre**. Le tableau n'est arrivé en Espagne qu'en **1981**, après la fin de la dictature, comme Picasso l'avait souhaité.
- **La persistencia de la memoria** : des **montres molles** dans un paysage de la côte catalane. Dalí est le grand peintre **surréaliste** espagnol : il peint des rêves.

## Le muralisme mexicain et Frida Kahlo
- Après la **Révolution mexicaine** (1910-1920), des peintres couvrent les murs des bâtiments publics de grandes fresques : c'est le **muralisme**. **Diego Rivera**, **David Alfaro Siqueiros** et **José Clemente Orozco** veulent raconter l'histoire du Mexique au peuple, même à ceux qui ne savent pas lire. Les fresques de Rivera au **Palacio Nacional** de Mexico montrent l'histoire du pays, des Aztèques à la Révolution.
- **Frida Kahlo** (1907-1954) est née et morte à **Coyoacán**, à Mexico, dans *la Casa Azul*, aujourd'hui un musée. À 18 ans, elle est gravement blessée dans un accident de bus et doit rester alitée longtemps : elle commence alors à peindre, avec un miroir au-dessus de son lit. Elle a peint de nombreux **autoportraits**, avec des fleurs, des singes, des perroquets, des vêtements traditionnels mexicains. Elle a épousé Diego Rivera.

## La musique et la bande dessinée
- **Le flamenco** (Andalousie) : chant (*el cante*), guitare (*el toque*), danse (*el baile*) et palmas. Patrimoine culturel immatériel de l'UNESCO en **2010**.
- **Le tango** : né à **Buenos Aires** et à **Montevideo** ; patrimoine immatériel de l'UNESCO en **2009**.
- La salsa (Caraïbes), la cumbia (Colombie), le reggaetón (Porto Rico, Panama).
- **Mafalda** : une petite fille argentine qui déteste la soupe et se pose des questions sur le monde. Créée par le dessinateur **Quino** (1964-1973).

## Méthode : décrire une image ou un tableau
| Espagnol | Français |
|---|---|
| en el centro / en primer plano | au centre / au premier plan |
| en segundo plano / al fondo | au second plan / au fond |
| a la izquierda / a la derecha | à gauche / à droite |
| arriba / abajo | en haut / en bas |
| el cuadro representa / muestra | le tableau représente / montre |
| parece que... / da la impresión de que... | on dirait que... / cela donne l'impression que... |
| los colores son vivos / oscuros | les couleurs sont vives / sombres |
| me hace pensar en... | cela me fait penser à... |
| me impresiona porque... | cela m'impressionne parce que... |

Plan en quatre étapes : 1. présenter (titre, peintre, date) ; 2. décrire du général au détail, avec *hay* et *estar* ; 3. interpréter (*parece que, quizás, representa*) ; 4. donner ton avis justifié.

>! **Erreurs fréquentes**
- ✗ *En la izquierda* → ✓ *A la izquierda*.
- ✗ *Hay el caballo en el centro* → ✓ *En el centro hay un caballo* / *El caballo está en el centro*.
- ✗ *Picasso pintó Guernica en 1981* → il l'a peint en **1937** ; il est arrivé en Espagne en 1981.

> **À retenir** : Las Meninas (Velázquez, 1656), El tres de mayo (Goya), Guernica (Picasso, 1937, bombardement pendant la guerre civile), Dalí et le surréalisme ; muralisme mexicain (Rivera) et Frida Kahlo (autoportraits, Coyoacán) ; flamenco et tango ; décrire : en el centro, en primer plano, al fondo, a la izquierda, parece que...
`,
      exercices: [
        { type: "qcm", question: "Quel événement Picasso dénonce-t-il dans *Guernica* ?", choix: ["l'invasion napoléonienne", "la conquête du Mexique", "le bombardement d'une ville basque pendant la guerre civile", "la Révolution mexicaine"], reponse: 2, explication: "Le **26 avril 1937**, Guernica fut bombardée par l'aviation allemande et italienne, alliées de Franco. L'invasion napoléonienne est le sujet du *Tres de mayo* de Goya." },
        { type: "saisie", question: "Quel peintre s'est représenté lui-même, pinceau à la main, dans *Las Meninas* ?", reponses: ["Velázquez", "Diego Velázquez", "Diego de Velázquez", "Diego Rodríguez de Silva y Velázquez"], explication: "**Diego Velázquez** s'est peint à gauche du tableau, devant une immense toile (1656)." },
        { type: "vf", question: "Frida Kahlo est une peintre espagnole qui a vécu à Madrid.", reponse: false, explication: "Frida Kahlo est **mexicaine** : elle est née et morte à **Coyoacán** (Mexico), dans la *Casa Azul*." },
        { type: "qcm", question: "Qu'est-ce que le *muralismo* ?", choix: ["un style de danse andalouse", "un mouvement de peinture murale né au Mexique après la Révolution", "une technique de sculpture inca", "la construction des murailles médiévales"], reponse: 1, explication: "Le **muralisme** mexicain (Rivera, Siqueiros, Orozco) couvre les bâtiments publics de fresques racontant l'histoire du pays au peuple." },
        { type: "saisie", question: "Traduis : « au premier plan »", reponses: ["en primer plano"], explication: "**en primer plano** ; au second plan = *en segundo plano* ; au fond = *al fondo*." },
        { type: "saisie", question: "Complète : « ... la izquierda del cuadro hay un caballo herido. »", reponses: ["a"], explication: "On dit **a la izquierda** / **a la derecha** (et non *en*)." },
        { type: "qcm", question: "De quelles villes le tango est-il originaire ?", choix: ["Madrid et Séville", "Mexico et Guadalajara", "La Havane et Saint-Domingue", "Buenos Aires et Montevideo"], reponse: 3, explication: "Le tango est né sur les rives du Río de la Plata, à **Buenos Aires** (Argentine) et **Montevideo** (Uruguay)." },
        { type: "qcm", question: "Dans un tableau, tu veux dire « on dirait que l'homme a peur ». Tu écris :", choix: ["Parece que el hombre tiene miedo.", "Parece que el hombre es miedo.", "Pare que el hombre tiene miedo.", "Parece el hombre que tiene miedo."], reponse: 0, explication: "**Parece que** + indicatif = on dirait que ; avoir peur = *tener miedo*." },
        { type: "redaction", question: "**Compréhension** — Lis ce texte (texte d'entraînement), puis réponds en français.\n\n« *Me llamo Valeria y vivo en Coyoacán, en la Ciudad de México. Ayer visité con mi clase la Casa Azul, el museo de Frida Kahlo. La casa es de un azul muy intenso y tiene un jardín lleno de plantas. Dentro vimos su cama, con un espejo encima: Frida pintaba allí cuando estaba enferma. También vimos sus vestidos de tehuana, muy coloridos. Lo que más me impresionó fue un autorretrato con un mono. Frida parece seria, pero sus ojos hablan. Mi profesora nos explicó que Frida pintaba su dolor, pero también su amor por México. Quiero volver con mis padres.* »\n\n1. Où Valeria est-elle allée, quand et avec qui ?\n2. Décris la maison en deux éléments.\n3. Pourquoi y a-t-il un miroir au-dessus du lit ?\n4. Quelle œuvre l'a le plus impressionnée et pourquoi ?\n5. Que peint Frida selon la professeure ? Relève un verbe à l'indefinido et un à l'imparfait.", corrige: "1. Valeria est allée **hier** à la **Casa Azul**, le musée de Frida Kahlo à Coyoacán, **avec sa classe**.\n2. La maison est d'un **bleu très intense** et a un **jardin plein de plantes**.\n3. Frida **peignait couchée quand elle était malade** : le miroir lui permettait de se voir pour faire ses autoportraits.\n4. Un **autoportrait avec un singe** : Frida a l'air sérieuse, mais « ses yeux parlent ».\n5. Elle peignait **sa douleur**, mais aussi **son amour pour le Mexique**.\n   Indefinido : *visité, vimos, impresionó, explicó*. Imparfait : *pintaba, estaba*.\n\nMéthode : repère les mots transparents (*museo, plantas, autorretrato, intenso*), les marqueurs de temps (*ayer*) et réponds avec tes propres mots." },
        { type: "redaction", question: "**Expression écrite** (80 à 100 mots) — Choisis *Guernica* ou un autoportrait de Frida Kahlo que tu connais. Présente l'œuvre (peintre, date, contexte), décris-la avec au moins quatre expressions de lieu, interprète-la (*parece que*) et donne ton avis justifié.", corrige: "Modèle (Guernica) :\n\n*Te presento Guernica, un cuadro de Pablo Picasso. Lo pintó en 1937, durante la guerra civil española, después del bombardeo de la ciudad vasca de Guernica. Es un cuadro enorme en blanco, negro y gris. A la izquierda hay un toro y, debajo, una madre que grita con su hijo muerto en los brazos. En el centro hay un caballo herido. Arriba hay una lámpara y a la derecha una mujer levanta los brazos. Parece que todos sufren y tienen miedo. Me impresiona mucho porque muestra el horror de la guerra sin colores. Hoy es un símbolo contra la guerra.*\n\nPoints vérifiés :\n- présentation : peintre, date, contexte historique exact ;\n- lieu : *a la izquierda, debajo, en el centro, arriba, a la derecha* ;\n- *hay* + nom sans article défini ;\n- interprétation : *parece que* ; avis justifié : *me impresiona porque...* ;\n- indefinido pour les faits passés : *pintó*." }
      ]
    },
    {
      id: "colegio-medio-ambiente",
      titre: "École et société : le collège en pays hispanophones et l'environnement",
      theme: "École et société",
      cours: `
## L'école en Espagne
| Âge | Étape | Équivalent en France |
|---|---|---|
| 6 à 12 ans | *Educación Primaria* (6 cursos) | CP à 6e |
| 12 à 16 ans | *ESO* (*Educación Secundaria Obligatoria*, 4 cursos) | 5e à 2de |
| 16 à 18 ans | *Bachillerato* (2 cursos) ou *Formación Profesional* | 1re et terminale, voie professionnelle |

- Ta classe de 3e correspond à **3.º de ESO** (*tercero de ESO*), dans un **instituto**.
- **Les notes** vont de **0 à 10** : on « réussit » (*aprobar*) à partir de 5 ; en dessous, on « échoue » (*suspender*). *Sacar un diez* = avoir 10/10, la meilleure note. Mentions : *insuficiente* (moins de 5), *suficiente* (5), *bien* (6), *notable* (7-8), *sobresaliente* (9-10).
- **Les horaires** : beaucoup d'*institutos* pratiquent la **jornada continua** : les cours ont lieu le matin, environ de 8 h 30 à 14 h 30, avec une pause (*el recreo*), puis on déjeune vers 14 h 30 ou 15 h à la maison.
- Les grandes vacances commencent souvent fin juin et durent jusqu'à début ou mi-septembre.

## En Amérique latine
- Dans les pays de l'**hémisphère Sud** (Argentine, Chili, Uruguay...), l'année scolaire va de **mars à décembre** : les grandes vacances sont en janvier et février, c'est-à-dire l'été là-bas.
- L'**uniforme** (*el uniforme*) est très répandu dans les écoles ; en Argentine, beaucoup d'élèves du primaire portent une blouse blanche, *el guardapolvo*.
- Au Mexique ou en Argentine, beaucoup d'écoles fonctionnent avec deux groupes d'élèves : ceux du matin (*turno matutino* / *turno mañana*) et ceux de l'après-midi.

| Vocabulaire du collège | |
|---|---|
| la asignatura / la materia | la matière |
| el horario | l'emploi du temps |
| aprobar / suspender | réussir / échouer (un examen) |
| sacar buenas notas | avoir de bonnes notes |
| el boletín de notas | le bulletin |
| el / la tutor/a | le / la professeur principal(e) |
| el acoso escolar | le harcèlement scolaire |
| la convivencia | le vivre-ensemble |

## L'environnement au quotidien
| Espagnol | Français |
|---|---|
| el medio ambiente | l'environnement |
| reciclar / la basura | recycler / les déchets |
| el contenedor | la poubelle (de tri), le conteneur |
| ahorrar agua / energía | économiser l'eau / l'énergie |
| la contaminación | la pollution |
| el cambio climático | le changement climatique |
| la sequía / el incendio | la sécheresse / l'incendie |
| las energías renovables | les énergies renouvelables |
| el transporte público | les transports en commun |
| consumir de forma responsable | consommer de façon responsable |

En Espagne, les conteneurs de tri ont des couleurs : **amarillo** pour les emballages (plastique, canettes, briques), **azul** pour le papier et le carton, **verde** pour le verre, **marrón** pour les déchets organiques, **gris** pour le reste.

>! **Donner son avis sur l'école ou l'écologie** : *Creo que / Pienso que* + indicatif ; *No creo que* + subjonctif ; *(No) estoy de acuerdo con...* ; *Es importante que* + subjonctif : *Es importante que todos reciclemos.*

>! **Erreurs fréquentes**
- ✗ *Tengo una buena nota de 15* → en Espagne, la note est sur 10 : *He sacado un ocho.*
- ✗ *El colegio de 3e* → ✓ *Estoy en tercero de ESO / en 3.º de ESO*.
- ✗ *aprobar un examen* veut dire « réussir », pas « approuver » !

> **À retenir** : Primaria, ESO (12-16 ans), Bachillerato ; 3e = 3.º de ESO ; notes sur 10 (aprobar à partir de 5) ; jornada continua ; année de mars à décembre dans le Cône Sud ; vocabulaire de l'environnement : reciclar, ahorrar, contaminación, cambio climático, sequía.
`,
      exercices: [
        { type: "qcm", question: "À quelle classe espagnole correspond ta classe de 3e ?", choix: ["6.º de Primaria", "1.º de ESO", "3.º de ESO", "1.º de Bachillerato"], reponse: 2, explication: "La 3e correspond à **3.º de ESO** (14-15 ans). L'ESO dure 4 ans, de 12 à 16 ans." },
        { type: "vf", question: "En Espagne, un élève qui a 5 sur 10 a réussi (*ha aprobado*).", reponse: true, explication: "Les notes vont de 0 à 10 et on **aprueba** à partir de **5** (*suficiente*)." },
        { type: "saisie", question: "Traduis le verbe : « échouer, rater (un examen) » (infinitif).", reponses: ["suspender", "reprobar"], explication: "En Espagne, *suspender* = échouer ; *aprobar* = réussir. *He suspendido el examen* = j'ai raté l'examen. Au Mexique et dans une partie de l'Amérique latine, on dit aussi *reprobar*." },
        { type: "qcm", question: "Pourquoi les grandes vacances d'un élève chilien tombent-elles en janvier et février ?", choix: ["parce qu'il fait trop froid", "parce que c'est l'été dans l'hémisphère Sud", "parce que les écoles ferment pour Noël", "parce que c'est la saison des pluies"], reponse: 1, explication: "Le Chili est dans l'**hémisphère Sud** : janvier et février sont les mois d'été. L'année scolaire va de mars à décembre." },
        { type: "saisie", question: "En Espagne, de quelle couleur est le conteneur pour le verre ? (en espagnol)", reponses: ["verde", "el verde", "el contenedor verde"], explication: "Le verre va dans le conteneur **verde** ; les emballages dans l'*amarillo*, le papier dans l'*azul*." },
        { type: "saisie", question: "Traduis : « le changement climatique »", reponses: ["el cambio climático", "cambio climático"], explication: "**el cambio climático**. Aussi : *el calentamiento global* (le réchauffement climatique)." },
        { type: "qcm", question: "Complète : « No creo que el uniforme ... una buena idea. »", choix: ["es", "sea", "será", "fue"], reponse: 1, explication: "*No creo que* (doute, opinion négative) + **subjonctif** : *sea*. Mais *Creo que es una buena idea* (indicatif)." },
        { type: "saisie", question: "Traduis : « Il faut économiser l'eau. »", reponses: ["Hay que ahorrar agua", "Hay que ahorrar el agua", "Es necesario ahorrar agua", "Es necesario ahorrar el agua", "Tenemos que ahorrar agua", "Tenemos que ahorrar el agua"], explication: "**Hay que ahorrar agua** (obligation générale ; *ahorrar* = économiser)." },
        { type: "redaction", question: "**Compréhension** — Lis ce texte (texte d'entraînement), puis réponds en français.\n\n« *Soy Martina, tengo catorce años y estudio tercero de ESO en un instituto de Sevilla. Mis clases empiezan a las ocho y media y terminan a las tres menos cuarto. No llevamos uniforme. Este año, con mi tutora, hemos creado un club verde: cada martes, en el recreo, recogemos los envases y los ponemos en el contenedor amarillo. En Andalucía hace mucho calor y a veces hay sequía, por eso también hemos instalado un sistema para recoger el agua de la lluvia y regar el huerto del instituto. Algunos compañeros piensan que es aburrido, pero yo creo que es importante que cuidemos el planeta.* »\n\n1. Présente Martina (âge, classe, ville).\n2. Quels sont ses horaires et que dit-elle de l'uniforme ?\n3. Qu'a créé sa classe et que font les élèves le mardi ?\n4. Pourquoi récupèrent-ils l'eau de pluie ?\n5. Quelle est l'opinion de Martina ? Relève la tournure qui l'exprime et explique le mode du verbe.", corrige: "1. Martina a **14 ans**, elle est en **3.º de ESO** (l'équivalent de la 3e) dans un lycée-collège (*instituto*) de **Séville**.\n2. Ses cours commencent à **8 h 30** et finissent à **14 h 45** ; ils **ne portent pas d'uniforme**.\n3. Avec leur professeure principale, ils ont créé un **« club vert »** : chaque mardi, à la récréation, ils **ramassent les emballages** et les mettent dans le **conteneur jaune**.\n4. En Andalousie, il fait très chaud et il y a parfois des **sécheresses** : ils récupèrent l'eau de pluie pour **arroser le potager** du collège.\n5. Certains camarades trouvent cela ennuyeux, mais Martina pense qu'il est **important de prendre soin de la planète** : *es importante que cuidemos el planeta*. Après *es importante que*, on emploie le **subjonctif** (*cuidemos*).\n\nMéthode : relis les questions avant le texte, repère les chiffres et les heures (*a las tres menos cuarto* = 14 h 45), et réponds avec des phrases complètes en français." },
        { type: "redaction", question: "**Expression écrite** (80 à 100 mots) — Tu réponds à Martina : compare ton collège au sien (horaires, cantine, uniforme, notes) et présente une action écologique que ton collège a faite ou devrait faire. Donne ton opinion avec *creo que* ou *no creo que*.", corrige: "Modèle :\n\n*¡Hola, Martina! Yo también estoy en tercero, pero en Francia se dice « troisième ». Mis clases empiezan a las ocho y terminan a las cinco, porque comemos en el comedor del colegio a mediodía. Como tú, no llevamos uniforme. Nuestras notas son sobre veinte: ¡aquí un diez es solo la media! En mi colegio no hay club verde, pero este año hemos empezado a separar el papel en las clases. Creo que deberíamos tener un huerto como el vuestro. No creo que sea difícil y es importante que todos ahorremos agua. Un abrazo, Nathan.*\n\nPoints vérifiés :\n- comparaison précise (horaires, cantine, uniforme, notes sur 20 / sur 10) ;\n- *pretérito perfecto* avec *este año* : *hemos empezado* ;\n- conditionnel de conseil : *deberíamos* ;\n- *creo que* + indicatif ; *no creo que* + subjonctif (*sea*) ; *es importante que* + subjonctif (*ahorremos*) ;\n- formules de la lettre : *¡Hola...! / Un abrazo*." }
      ]
    },
    {
      id: "viajes-migraciones",
      titre: "Voyages et migrations : voyager, partir, s'exiler",
      theme: "Voyages et migrations",
      cours: `
## Voyager autrement
- L'Espagne est l'un des pays les plus visités au monde : environ **94 millions** de touristes étrangers en **2024** (source : INE, l'institut de statistique espagnol). Ce **tourisme de masse** pose des problèmes : logements trop chers pour les habitants, manque d'eau, plages et centres-villes saturés. En 2024, des habitants des Canaries, de Majorque ou de Barcelone ont manifesté pour demander un tourisme plus raisonnable.
- **Le tourisme responsable** (*el turismo sostenible*) : voyager en train plutôt qu'en avion, rester plus longtemps, respecter les habitants, consommer local.
- **El Camino de Santiago** : un pèlerinage vers **Saint-Jacques-de-Compostelle** (Galice) qui existe depuis le Moyen Âge. On le fait à pied ou à vélo, en dormant dans des *albergues*. Pour obtenir *la Compostela* (le certificat), il faut avoir parcouru au moins les **100 derniers kilomètres à pied** (200 à vélo). Les chemins de Saint-Jacques en Espagne sont inscrits au patrimoine mondial de l'UNESCO.

| Vocabulaire du voyage | |
|---|---|
| el billete / el pasaporte | le billet / le passeport |
| la estación / el aeropuerto | la gare / l'aéroport |
| hacer la maleta | faire sa valise |
| alojarse en un albergue / un hotel | loger dans une auberge / un hôtel |
| la mochila | le sac à dos |
| la huella de carbono | l'empreinte carbone |

## Partir : les migrations hispaniques
- **Vers l'Amérique** : entre la fin du XIXe siècle et les années 1930, des **millions d'Espagnols** ont émigré vers l'Argentine, Cuba, l'Uruguay ou le Brésil pour fuir la pauvreté.
- **L'exil républicain (1939)** : à la fin de la guerre civile, en janvier-février 1939, près d'un demi-million d'Espagnols ont fui vers la France à pied, à travers les Pyrénées : c'est **la Retirada**. Beaucoup ont été enfermés dans des camps, sur les plages d'Argelès-sur-Mer ou de Saint-Cyprien. Le poète **Antonio Machado** est mort à **Collioure** le 22 février 1939, quelques semaines après avoir passé la frontière. Le **Mexique** du président Lázaro Cárdenas a accueilli des milliers de réfugiés espagnols.
- **Vers l'Europe (années 1960)** : sous la dictature de Franco, des centaines de milliers d'Espagnols sont partis travailler en France, en Allemagne ou en Suisse.
- **Aujourd'hui** : beaucoup de Latino-Américains (Colombiens, Vénézuéliens, Péruviens...) vivent en Espagne. Aux **États-Unis**, il y a plus de **62 millions** d'Hispaniques (recensement de 2020), dont une majorité d'origine mexicaine. Certains passent d'une langue à l'autre dans la même phrase : c'est le **Spanglish**.

| Vocabulaire de la migration | |
|---|---|
| emigrar / el emigrante | émigrer / l'émigré (celui qui part) |
| inmigrar / el inmigrante | immigrer / l'immigré (celui qui arrive) |
| el exilio / el refugiado | l'exil / le réfugié |
| la frontera | la frontière |
| huir (huyó, huyeron) | fuir |
| echar de menos / extrañar | regretter, manquer (*Echo de menos a mi familia* = ma famille me manque) |
| la nostalgia / el sueño | la nostalgie / le rêve |
| integrarse / adaptarse | s'intégrer / s'adapter |

## L'imaginaire : le réalisme magique
Les écrivains latino-américains mêlent la réalité et le merveilleux : c'est le **réalisme magique**. Dans *Cien años de soledad* (1967) du Colombien **Gabriel García Márquez** (prix Nobel de littérature 1982), il pleut pendant quatre ans et une jeune fille monte au ciel avec des draps... dans le village imaginaire de **Macondo**.

>! **Raconter un départ** : *Mi abuelo **salió** de Galicia en 1955. **Tenía** veinte años y no **hablaba** francés. **Trabajó** en una fábrica de coches. Al principio **echaba de menos** su tierra, pero poco a poco **se integró**.* (indefinido pour les actions, imparfait pour la description et les sentiments durables)

>! **Erreurs fréquentes**
- ✗ *emigrante* pour quelqu'un qui arrive → ✓ *inmigrante* (qui arrive), *emigrante* (qui part).
- ✗ *Mi familia me falta* (calque) → ✓ *Echo de menos a mi familia* / *Extraño a mi familia*.
- ✗ *huió* → ✓ *huyó* (i → y entre deux voyelles).

> **À retenir** : tourisme de masse et tourisme durable ; Camino de Santiago (100 km à pied) ; émigration espagnole vers l'Amérique puis vers l'Europe ; la Retirada (1939), Antonio Machado mort à Collioure ; les Hispaniques aux États-Unis et le Spanglish ; réalisme magique (García Márquez, Macondo) ; echar de menos, huir, la frontera.
`,
      exercices: [
        { type: "qcm", question: "Qu'est-ce que *la Retirada* ?", choix: ["le départ des Espagnols vers l'Argentine vers 1900", "la fuite de centaines de milliers de républicains espagnols vers la France en 1939", "le retour des émigrés espagnols après 1975", "la fin du pèlerinage de Saint-Jacques"], reponse: 1, explication: "En janvier-février 1939, à la fin de la guerre civile, près d'un demi-million de républicains espagnols ont fui vers la France : **la Retirada**." },
        { type: "saisie", question: "Dans quelle ville française le poète Antonio Machado est-il mort en 1939 ?", reponses: ["Collioure"], explication: "Antonio Machado est mort à **Collioure** (Pyrénées-Orientales) le 22 février 1939 ; il y est enterré." },
        { type: "vf", question: "Pour obtenir *la Compostela*, il faut avoir marché au moins les 100 derniers kilomètres du Camino.", reponse: true, explication: "Il faut avoir parcouru au moins **100 km à pied** (ou 200 km à vélo) jusqu'à Saint-Jacques-de-Compostelle." },
        { type: "qcm", question: "Une personne qui **arrive** dans un pays pour y vivre est :", choix: ["un emigrante", "un turista", "un peregrino", "un inmigrante"], reponse: 3, explication: "**inmigrante** = celui qui arrive ; **emigrante** = celui qui part de son pays. *Peregrino* = pèlerin." },
        { type: "saisie", question: "Traduis : « Mes amis me manquent. » (avec *echar de menos*)", reponses: ["Echo de menos a mis amigos", "Yo echo de menos a mis amigos", "Echo de menos a mis amigas"], explication: "**echar de menos** + *a* + personne : *Echo de menos a mis amigos*. On peut aussi dire *Extraño a mis amigos*." },
        { type: "saisie", question: "Conjugue *huir* au pretérito indefinido : « En 1939 muchos republicanos ... a Francia. »", reponses: ["huyeron"], explication: "*huir* : le i devient **y** entre deux voyelles : *huyó, huyeron*." },
        { type: "qcm", question: "Dans quel village imaginaire se passe *Cien años de soledad* de García Márquez ?", choix: ["Macondo", "Comala", "Coyoacán", "Collioure"], reponse: 0, explication: "**Macondo**, village colombien imaginaire du roman (1967). Comala est le village du roman *Pedro Páramo* du Mexicain Juan Rulfo." },
        { type: "qcm", question: "Quelle pratique correspond au tourisme durable ?", choix: ["prendre l'avion pour un week-end à l'autre bout du monde", "loger dans des appartements touristiques qui font monter les loyers", "voyager en train et consommer des produits locaux", "visiter le plus de pays possible en une semaine"], reponse: 2, explication: "Le **turismo sostenible** limite l'empreinte carbone (*la huella de carbono*) et respecte les habitants : train, séjours plus longs, produits locaux." },
        { type: "redaction", question: "**Compréhension** — Lis ce texte (texte d'entraînement), puis réponds en français.\n\n« *Mi bisabuelo Manuel nació en un pueblo de Asturias. En 1920, cuando tenía diecisiete años, cogió un barco en el puerto de Gijón y viajó tres semanas hasta Buenos Aires. Allí no conocía a nadie. Al principio trabajó en el puerto y dormía en una habitación pequeña con otros cuatro asturianos. Echaba mucho de menos a su madre y le escribía una carta cada mes. Diez años después, abrió una panadería en el barrio de San Telmo y se casó con Rosa, una chica italiana. Nunca volvió a España, pero siempre decía: \"Tengo dos patrias\".* »\n\n1. D'où vient Manuel et quand est-il parti ? Quel âge avait-il ?\n2. Comment a-t-il voyagé ?\n3. Décris ses débuts à Buenos Aires (travail, logement, sentiments).\n4. Comment sa vie a-t-elle changé dix ans plus tard ?\n5. Explique la phrase « *Tengo dos patrias* ».", corrige: "1. Manuel vient d'un village des **Asturies** (nord de l'Espagne). Il est parti en **1920**, à **17 ans**.\n2. Il a pris **un bateau** au port de Gijón et le voyage jusqu'à **Buenos Aires** a duré **trois semaines**.\n3. Il ne connaissait **personne** ; il a d'abord **travaillé au port** et dormait dans une **petite chambre avec quatre autres Asturiens**. Sa **mère lui manquait** beaucoup : il lui écrivait une lettre par mois.\n4. Dix ans plus tard, il a **ouvert une boulangerie** dans le quartier de San Telmo et s'est **marié avec Rosa**, une Italienne.\n5. Il n'est jamais revenu en Espagne, mais il se sentait **à la fois espagnol et argentin** : il avait deux pays dans le cœur, celui de sa naissance et celui de sa nouvelle vie.\n\nGrammaire : *nació, cogió, viajó, trabajó, abrió, se casó, volvió* (indefinido : les événements) ; *tenía, conocía, dormía, echaba de menos, escribía, decía* (imparfait : description et habitudes)." },
        { type: "redaction", question: "**Expression écrite** (80 à 100 mots) — Tu es un jeune Espagnol qui vient d'arriver en France pour vivre avec ta famille. Écris à un ami resté en Espagne : raconte ton arrivée (indefinido), décris ta nouvelle vie (présent), dis ce qui te manque (*echar de menos*) et ce que tu espères (*espero que* + subjonctif).", corrige: "Modèle :\n\n*Querido Álex:*\n*Llegamos a Lyon hace dos semanas. Hicimos el viaje en tren: fue largo pero bonito. El primer día fui al colegio y no entendí casi nada, pero una chica, Camille, me ayudó mucho. Ahora vivimos en un piso pequeño cerca del río. Aquí cenan muy temprano, ¡a las siete y media! Echo de menos a mis amigos, el sol de Málaga y las croquetas de mi abuela. Espero que vengas a verme en verano y que no me olvides. Escríbeme pronto.*\n*Un abrazo,*\n*Daniel*\n\nPoints vérifiés :\n- indefinido pour l'arrivée : *llegamos, hicimos, fue, fui, entendí, ayudó* ;\n- présent pour la vie actuelle : *vivimos, cenan* ;\n- *echo de menos a* + personnes ;\n- *espero que* + subjonctif : *vengas, olvides* ;\n- impératif avec enclise : *escríbeme* ;\n- formules de la lettre." }
      ]
    },
    {
      id: "patrimonio-historia",
      titre: "Rencontres avec d'autres cultures : patrimoine, nature et repères historiques",
      theme: "Rencontres avec d'autres cultures",
      cours: `
## Des sites du patrimoine mondial
| Site | Pays | Ce qu'il faut savoir |
|---|---|---|
| **La Alhambra** | Espagne (Grenade) | palais et forteresse des rois musulmans **nasrides** (XIIIe-XVe siècle), célèbre pour ses arcs, ses fontaines et ses jardins |
| **La Mezquita** | Espagne (Cordoue) | grande mosquée d'al-Andalus, transformée en cathédrale après la Reconquête |
| **La Sagrada Familia** | Espagne (Barcelone) | basilique de l'architecte **Antoni Gaudí**, commencée en 1882 et toujours en construction |
| **Machu Picchu** | Pérou | cité **inca** du XVe siècle, perchée à environ 2 400 m dans les Andes |
| **Las islas Galápagos** | Équateur | archipel du Pacifique aux animaux uniques (tortues géantes, iguanes marins) ; Darwin y est passé en 1835 |
| **Chichén Itzá** | Mexique | cité **maya** du Yucatán et sa pyramide de Kukulcán |

## Une nature extrême
- **Les Andes**, la plus longue chaîne de montagnes du monde, longent tout l'ouest de l'Amérique du Sud.
- **Le désert d'Atacama** (Chili), l'un des plus secs du monde ; **le Salar de Uyuni** (Bolivie), un immense désert de sel de plus de 10 000 km².
- **La Patagonie** (Argentine, Chili) et le glacier **Perito Moreno** ; **l'Amazonie** (Pérou, Colombie, Équateur, Bolivie, Venezuela... et surtout le Brésil).
- En Espagne : **le Teide** (Canaries), plus haut sommet du pays (plus de 3 700 m), et le parc national de **Doñana** (Andalousie), une zone humide où vivent des flamants roses et le lynx ibérique.
- **Le Costa Rica** est l'un des pays les plus riches en biodiversité de la planète ; un quart environ de son territoire est protégé, et presque toute son électricité vient de sources renouvelables (barrages, géothermie des volcans, vent).
- En **Espagne**, plus de la moitié de l'électricité a été produite par les énergies renouvelables (vent, soleil, eau) en 2024 (source : Red Eléctrica).

## Repères historiques
| Date | Événement |
|---|---|
| **711** | des troupes musulmanes venues d'Afrique du Nord entrent dans la péninsule : début d'**al-Andalus** |
| **1492** | les **Rois catholiques** (Isabelle et Ferdinand) prennent **Grenade** (fin de la Reconquête) ; le **12 octobre**, **Christophe Colomb** arrive en Amérique |
| **1521** | **Hernán Cortés** prend **Tenochtitlan**, la capitale aztèque |
| **1532-1533** | **Francisco Pizarro** conquiert l'Empire **inca** |
| **1810-1825** | **indépendances** de l'Amérique espagnole (Simón Bolívar, José de San Martín) |
| **1936-1939** | **guerre civile** espagnole |
| **1939-1975** | **dictature** du général **Franco** |
| **1978** | **Constitution** démocratique (approuvée par référendum le 6 décembre) |
| **1986** | l'Espagne entre dans la Communauté européenne |

- Le **12 octobre** est la fête nationale espagnole (*Fiesta Nacional* ou *Día de la Hispanidad*). En Amérique latine, cette date est vue de manières différentes : beaucoup de pays parlent du « jour de la diversité culturelle » ou de la « résistance indigène », pour rappeler la violence de la conquête.
- **Les peuples indigènes** : des millions de personnes parlent encore le **quechua** (Andes), l'**aymara**, le **náhuatl** (Mexique) ou le **guarani**. Au **Paraguay**, le guarani est langue officielle avec l'espagnol, et une grande partie de la population le parle.

>! **Présenter un site** : *Machu Picchu **está** en Perú, en los Andes. **Es** una ciudad inca **construida** en el siglo XV. En 1911, el explorador Hiram Bingham **la dio a conocer** al mundo. **Hay** templos, terrazas y casas de piedra. **Me gustaría** visitarlo porque...*

>! **Erreurs fréquentes**
- ✗ *Colón descubrió América en 1942* → ✓ *en 1492*.
- ✗ *El siglo quince* écrit *siglo 15* → ✓ *el siglo XV* (chiffres romains, comme en français).
- ✗ *Machu Picchu es en Perú* → ✓ *está en Perú*.

> **À retenir** : Alhambra (Grenade), Mezquita (Cordoue), Sagrada Familia (Gaudí), Machu Picchu (Incas), Galápagos ; Andes, Atacama, Uyuni, Patagonie ; 711, 1492, 1521, indépendances (Bolívar), guerre civile 1936-1939, Franco jusqu'en 1975, Constitution de 1978 ; quechua, náhuatl, guarani.
`,
      exercices: [
        { type: "qcm", question: "Quel monument a été construit par les rois musulmans nasrides de Grenade ?", choix: ["la Sagrada Familia", "la Alhambra", "le Machu Picchu", "le Palacio Nacional"], reponse: 1, explication: "**La Alhambra**, palais et forteresse des Nasrides (XIIIe-XVe siècle), à Grenade. La Sagrada Familia est l'œuvre de Gaudí à Barcelone." },
        { type: "saisie", question: "En quelle année Christophe Colomb arrive-t-il en Amérique ?", reponses: ["1492", "en 1492"], explication: "Le **12 octobre 1492**, la même année que la prise de Grenade par les Rois catholiques." },
        { type: "saisie", question: "Dans quel pays se trouve le Machu Picchu ? (en espagnol)", reponses: ["Perú", "el Perú", "en Perú"], explication: "Machu Picchu est au **Perú**, dans les Andes, près de Cuzco, l'ancienne capitale des Incas." },
        { type: "vf", question: "La dictature du général Franco a duré de 1939 à 1975.", reponse: true, explication: "Après sa victoire dans la guerre civile (1936-1939), Franco dirige l'Espagne jusqu'à sa mort, en **1975**. La Constitution démocratique est adoptée en **1978**." },
        { type: "qcm", question: "Quel conquistador a pris Tenochtitlan, la capitale aztèque, en 1521 ?", choix: ["Francisco Pizarro", "Simón Bolívar", "Cristóbal Colón", "Hernán Cortés"], reponse: 3, explication: "**Hernán Cortés** (Mexique, 1521). Pizarro a conquis l'Empire inca ; Bolívar est un héros des indépendances." },
        { type: "qcm", question: "Dans quel pays le guarani est-il langue officielle avec l'espagnol ?", choix: ["le Paraguay", "le Mexique", "l'Espagne", "le Chili"], reponse: 0, explication: "Au **Paraguay**, le guarani et l'espagnol sont les deux langues officielles ; une grande partie de la population parle guarani." },
        { type: "saisie", question: "Complète avec *ser* ou *estar* au présent : « Las islas Galápagos ... en el océano Pacífico. »", reponses: ["están"], explication: "Localisation → **estar** : *Las islas Galápagos están en el océano Pacífico* (elles appartiennent à l'Équateur)." },
        { type: "saisie", question: "Mets à la voix passive au passé : « Gaudí diseñó la Sagrada Familia. » → « La Sagrada Familia ... diseñada por Gaudí. »", reponses: ["fue"], explication: "Voix passive au passé = **ser** à l'indefinido + participe accordé : *fue diseñada* (féminin, accordé avec *la Sagrada Familia*)." },
        { type: "qcm", question: "Qu'est-ce que le Salar de Uyuni ?", choix: ["un volcan du Chili", "une cité maya", "un immense désert de sel en Bolivie", "un glacier de Patagonie"], reponse: 2, explication: "Le **Salar de Uyuni** (Bolivie), à plus de 3 600 m d'altitude, est le plus grand désert de sel du monde (plus de 10 000 km²)." },
        { type: "redaction", question: "**Expression écrite** (80 à 100 mots) — Tu prépares un exposé pour ta classe : présente en espagnol un site du patrimoine ou un espace naturel du monde hispanique (où il est, ce que c'est, son histoire ou ses particularités, ce qu'on peut y voir) et explique pourquoi tu aimerais y aller. Utilise *estar*, *ser*, *hay*, un verbe au passé et *me gustaría*.", corrige: "Modèle :\n\n*Hoy os presento las islas Galápagos. Están en el océano Pacífico, a unos mil kilómetros de la costa de Ecuador. Son unas islas volcánicas con animales únicos en el mundo: allí hay tortugas gigantes, iguanas marinas y pingüinos. En 1835, el científico Charles Darwin visitó las islas y observó los pájaros: eso le ayudó a crear su teoría de la evolución. Hoy es un parque nacional muy protegido y los turistas tienen que respetar reglas estrictas. Me gustaría mucho ir allí porque me encantan los animales y quiero ser bióloga. ¡Ojalá pueda hacer este viaje algún día!*\n\nPoints vérifiés :\n- *estar* pour situer (*están en el océano Pacífico*) ; *ser* pour définir (*son unas islas volcánicas*) ;\n- *hay* + noms sans article défini ;\n- passé : *visitó, observó, ayudó* (indefinido, date précise) ;\n- *me gustaría* + justification ; *ojalá* + subjonctif ;\n- faits exacts (Darwin, 1835 ; parc national)." }
      ]
    },
    {
      id: "metodologia-escrito",
      titre: "Méthode : donner son avis, relier ses idées, comprendre et rédiger",
      theme: "Méthodologie",
      cours: `
## Donner son avis
| Espagnol | Français |
|---|---|
| Creo que / Pienso que / Me parece que + indicatif | Je crois que / Je pense que / Il me semble que |
| No creo que / No pienso que + **subjonctif** | Je ne crois pas que |
| En mi opinión / Para mí / A mi parecer | À mon avis / Pour moi |
| (No) estoy de acuerdo con... | Je (ne) suis (pas) d'accord avec... |
| Tienes razón / No tienes razón | Tu as raison / Tu as tort |
| Lo bueno es que... / Lo malo es que... | Ce qui est bien, c'est que... / Le problème, c'est que... |
| Es verdad que... / Es una pena que + subjonctif | C'est vrai que... / C'est dommage que... |

## Relier ses idées : les connecteurs
| Pour... | Connecteurs |
|---|---|
| ajouter | **y** (*e* devant i-/hi-), **también**, **además** (de plus) |
| opposer | **pero**, **sin embargo** (cependant), **en cambio** (en revanche), **aunque** (bien que, même si) |
| expliquer la cause | **porque** (parce que), **como** (comme, en tête de phrase), **ya que** (puisque) |
| donner la conséquence | **por eso** (c'est pourquoi), **así que** (donc), **entonces** (alors) |
| organiser | **primero**, **luego / después**, **por un lado... por otro lado...**, **por último / al final** |
| conclure | **en conclusión**, **en resumen**, **para terminar** |
| donner un exemple | **por ejemplo**, **como** |

- *y* devient **e** devant un mot qui commence par le son « i » : *padres **e** hijos*, *español **e** inglés*.
- *o* devient **u** devant le son « o » : *siete **u** ocho*.
- **Porque** (parce que) s'écrit en un mot ; **¿Por qué...?** (pourquoi ?) en deux mots avec accent.

## Comprendre un texte écrit : la méthode
1. **Avant de lire** : observe le titre, la source, la date, l'image ; lis les questions.
2. **Première lecture** : repère qui parle, où, quand, de quoi ; souligne les **mots transparents** (*problema, importante, turista*), les noms propres, les chiffres.
3. **Deuxième lecture** : cherche les **verbes** (temps et personne : *viajó* = il / elle a voyagé) et les **connecteurs** (*pero, por eso, sin embargo*) qui montrent le raisonnement.
4. **Devine** le sens d'un mot inconnu grâce au contexte ou à sa famille : *panadería* → *pan* (pain) → boulangerie.
5. **Réponds** en français (si on te le demande), avec des phrases complètes et en justifiant par le texte.

>! **Les faux amis à connaître** : *la carta* (la lettre, le menu), *contestar* (répondre), *constipado* (enrhumé), *embarazada* (enceinte), *molestar* (déranger, gêner), *largo* (long), *la firma* (la signature), *el éxito* (le succès), *quitar* (enlever), *la ropa* (les vêtements), *subir* (monter), *el vaso* (le verre à boire).

## Rédiger : la méthode
1. **Lis bien la consigne** : qui écrit, à qui, quel type de texte (lettre, mail, récit, article, dialogue), combien de mots, quels temps.
2. **Prépare** une liste d'idées en espagnol, avec le vocabulaire et les verbes dont tu as besoin.
3. **Organise** : introduction, deux ou trois idées reliées par des connecteurs, conclusion.
4. **Respecte les formules** :
   - lettre amicale : *Querido / Querida...*, *¡Hola...!* ; fin : *Un abrazo*, *Besos*, *Hasta pronto* ;
   - lettre formelle : *Estimado señor / Estimada señora:* ; fin : *Atentamente* ; vouvoiement avec *usted*.
5. **Relis-toi** avec une liste de contrôle : accords (*las casas blancas*), *ser / estar*, *gusta / gustan*, terminaisons et accents des verbes (*habló, comía*), signes **¿ ¡**, connecteurs variés.

>! **Erreurs fréquentes**
- ✗ *Porque no vienes?* → ✓ *¿Por qué no vienes?*
- ✗ *Pienso que sea verdad* → ✓ *Pienso que es verdad* / *No pienso que sea verdad*.
- ✗ *español y inglés* → ✓ *español e inglés*.
- Traduire mot à mot depuis le français : pense en espagnol avec des phrases simples que tu maîtrises.

> **À retenir** : creo que + indicatif, no creo que + subjonctif ; connecteurs : además, sin embargo, en cambio, aunque, porque, por eso, así que, en conclusión ; y → e devant i-, o → u devant o- ; comprendre : mots transparents, verbes, connecteurs, contexte ; rédiger : consigne, plan, formules, relecture.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *y* ou *e* : « Hablo francés ... inglés. »", reponses: ["e"], explication: "*y* devient **e** devant un mot qui commence par le son « i » : *francés e inglés*." },
        { type: "qcm", question: "Quel connecteur exprime la **conséquence** ?", choix: ["sin embargo", "aunque", "por eso", "además"], reponse: 2, explication: "**por eso** = c'est pourquoi. *Sin embargo* et *aunque* opposent ; *además* ajoute." },
        { type: "saisie", question: "Complète avec le mot qui veut dire « pourquoi » : « ¿... no vienes a la fiesta? — Porque tengo que estudiar. »", reponses: ["por qué"], explication: "**¿Por qué...?** (pourquoi, en deux mots avec accent) — **Porque...** (parce que, en un mot, sans accent)." },
        { type: "qcm", question: "Complète : « No creo que los videojuegos ... peligrosos. »", choix: ["son", "serán", "fueron", "sean"], reponse: 3, explication: "*No creo que* + **subjonctif** : *sean*. Mais *Creo que son peligrosos* (indicatif)." },
        { type: "vf", question: "*Contestar* signifie « contester ».", reponse: false, explication: "Faux ami : *contestar* = **répondre**. « Contester » se dit *protestar* ou *discutir*." },
        { type: "qcm", question: "Dans un texte, tu lis : « *Mi tía es panadera.* » Sans dictionnaire, tu peux deviner que sa tante est :", choix: ["boulangère, grâce au mot *pan*", "pâtissière, grâce au mot *pastel*", "paysanne, grâce au mot *país*", "fleuriste, grâce au mot *planta*"], reponse: 0, explication: "On retrouve **pan** (pain) dans *panadera* : elle est **boulangère** (*la panadería* = la boulangerie)." },
        { type: "saisie", question: "Traduis : « Cependant, je ne suis pas d'accord avec toi. »", reponses: ["Sin embargo, no estoy de acuerdo contigo", "Sin embargo no estoy de acuerdo contigo", "Sin embargo, yo no estoy de acuerdo contigo"], explication: "*Sin embargo* = cependant ; *estar de acuerdo con* ; « avec toi » = **contigo**." },
        { type: "qcm", question: "Tu écris au directeur d'une auberge de jeunesse espagnole. Quelle formule de fin choisis-tu ?", choix: ["Besos y hasta pronto", "Un abrazo muy fuerte", "Atentamente", "¡Chao, guapo!"], reponse: 2, explication: "Lettre **formelle** → **Atentamente** (veuillez agréer...). Les autres formules sont familières." },
        { type: "redaction", question: "**Sujet de contrôle — Expression écrite** (100 à 120 mots). Sur un forum espagnol, des jeunes répondent à la question : « *¿Hay que prohibir los móviles en el colegio?* ». Écris ta contribution : donne ton opinion, deux arguments avec des exemples, une concession (*aunque*, *sin embargo*) et une conclusion. Utilise au moins six connecteurs différents.", corrige: "Modèle :\n\n*Hola a todos. En mi opinión, sí, hay que prohibir los móviles en el colegio, pero no en todas las situaciones.*\n*Primero, creo que el móvil nos distrae mucho: por ejemplo, en el recreo muchos alumnos miran la pantalla y no hablan con sus amigos. Además, en las redes sociales a veces hay acoso escolar, por eso es mejor dejar el móvil en la mochila.*\n*Sin embargo, es verdad que el móvil puede ser útil: algunos profesores lo usan para buscar información o hacer un cuestionario. Aunque estoy de acuerdo con la prohibición, pienso que los profesores deberían poder usarlo en clase de vez en cuando.*\n*En conclusión, no creo que el móvil sea malo, pero tenemos que aprender a usarlo bien.*\n\nPoints vérifiés :\n- opinion : *en mi opinión, creo que, pienso que, no creo que* + subjonctif (*sea*) ;\n- connecteurs : *primero, por ejemplo, además, por eso, sin embargo, aunque, en conclusión, pero* ;\n- deux arguments avec exemples, une concession, une conclusion ;\n- *hay que* / *tenemos que* / *deberían* : obligation et conseil." },
        { type: "redaction", question: "**Sujet de contrôle — Compréhension et expression** (texte d'entraînement).\n\n« *Querido Hugo: Te escribo desde Cuzco, en Perú. Llegué hace una semana con mi grupo de voluntarios. Trabajamos en una escuela de un pueblo de los Andes, a 3 800 metros de altura. Al principio me dolía la cabeza por la altitud, pero ahora estoy bien. Los niños hablan quechua y español, y me están enseñando palabras en quechua: \"allillanchu\" significa \"hola, ¿qué tal?\". Ayer subimos a Machu Picchu: fue el día más bonito de mi vida. Lo malo es que aquí hace mucho frío por la noche. Cuando vuelva a Francia, te enseñaré las fotos. ¿Y tú, qué tal en el instituto? Escríbeme pronto. Un abrazo, Clara.* »\n\n1. Où est Clara, depuis quand et pourquoi ?\n2. Quel problème a-t-elle eu au début et pourquoi ?\n3. Quelles langues parlent les enfants ? Que lui apprennent-ils ?\n4. Qu'a-t-elle fait hier et qu'en a-t-elle pensé ? Qu'est-ce qui est difficile ?\n5. **Expression** (60 à 80 mots) : réponds à Clara en espagnol : réagis à son voyage, raconte un événement récent de ta vie au collège et pose-lui deux questions.", corrige: "**Compréhension**\n1. Clara est à **Cuzco, au Pérou**, depuis **une semaine** (*hace una semana*). Elle est venue avec un **groupe de bénévoles** pour travailler dans une **école d'un village des Andes**.\n2. Au début, elle avait **mal à la tête** à cause de **l'altitude** (3 800 m) ; maintenant elle va bien.\n3. Les enfants parlent **quechua et espagnol** ; ils lui apprennent des mots en quechua, par exemple *allillanchu* (« bonjour, ça va ? »).\n4. Hier, elle est **montée au Machu Picchu** : c'était **le plus beau jour de sa vie**. Le point négatif : il fait **très froid la nuit**.\n\n**Expression (modèle)**\n*¡Hola, Clara! ¡Qué suerte tienes! Tu viaje parece increíble y me encanta la palabra \"allillanchu\". Yo estoy bien. La semana pasada hicimos una excursión con el colegio a un museo de arte moderno y vimos un cuadro de Dalí: ¡me encantó! Además, ayer saqué un 17 en el examen de español. ¿Cuántos niños hay en tu escuela? ¿Qué comida peruana te gusta más? Espero que no tengas mucho frío. Un abrazo, Hugo.*\n\nPoints vérifiés : réponses précises justifiées par le texte ; indefinido pour l'événement passé (*hicimos, vimos, me encantó, saqué*) ; questions avec ¿ ? ; *espero que* + subjonctif ; formules de la lettre." },
        { type: "saisie", question: "Complète avec le mot qui veut dire « parce que » : « ¿Por qué estudias español? — ... me encanta viajar. »", reponses: ["porque"], explication: "**Porque** (parce que) s'écrit en **un seul mot, sans accent**. À ne pas confondre avec **¿Por qué?** (pourquoi ?), en deux mots avec accent." }
      ]
    },
    {
      id: "comparar-superlativos",
      titre: "Comparer : comparatifs, superlatifs, -ísimo, muy et mucho",
      theme: "Grammaire",
      cours: `
## Le comparatif
| Comparaison | Construction | Exemple |
|---|---|---|
| supériorité (plus... que) | **más** + adjectif, adverbe ou nom + **que** | *Madrid es más grande que Sevilla.* |
| infériorité (moins... que) | **menos** + adjectif, adverbe ou nom + **que** | *Mi pueblo es menos turístico que Barcelona.* |
| égalité avec un adjectif ou un adverbe (aussi... que) | **tan** + adjectif ou adverbe + **como** | *Lola es tan alta como su hermano.* |
| égalité avec un nom (autant de... que) | **tanto, tanta, tantos, tantas** + nom + **como** | *Tengo tantos libros como tú. Hay tanta gente como ayer.* |
| égalité avec un verbe (autant que) | verbe + **tanto como** | *Estudio tanto como tú.* |

- Après *que* et *como*, on emploie **yo, tú** : *Eres más alto que **yo**. Corro tan rápido como **tú**.*
- Devant un **nombre**, « plus de / moins de » = **más de / menos de** : *Hay más de veinte alumnos en mi clase.*

## Les comparatifs irréguliers
| Adjectif | Comparatif | Exemple |
|---|---|---|
| bueno (bon) | **mejor(es)** (meilleur) | *Esta película es mejor que la primera.* |
| malo (mauvais) | **peor(es)** (pire, plus mauvais) | *Mis notas son peores que el año pasado.* |
| grande (âgé) | **mayor(es)** (plus âgé, aîné) | *Mi hermano es mayor que yo.* |
| pequeño (jeune) | **menor(es)** (plus jeune, cadet) | *Mi prima es menor que yo.* |

- *bien* → **mejor**, *mal* → **peor** : *Hoy juego mejor que ayer.*
- Pour la **taille**, on dit *más alto, más grande* : *Mi hermano es más alto que yo.* Pour l'**âge**, *mayor / menor*.

## Le superlatif relatif (le plus..., le moins...)
**el / la / los / las** (+ nom) + **más / menos** + adjectif + **de** :
- *Madrid es la ciudad más poblada **de** España.*
- *El Aconcagua es la montaña más alta **de** América.*
- *Es el mejor jugador **del** equipo* (de + el = **del**).

On ne répète pas l'article : ✗ *la ciudad la más grande* → ✓ *la ciudad más grande*. Et on dit **de**, pas *en*.

## Le superlatif absolu : -ísimo (très, extrêmement)
On enlève la voyelle finale de l'adjectif et on ajoute **-ísimo, -ísima, -ísimos, -ísimas** (toujours un accent sur le í) :
- *guapo* → **guapísimo** ; *grande* → **grandísimo** ; *fácil* → **facilísimo** ; *mucho* → **muchísimo**.
- Changements d'orthographe pour garder le son : *rico* → **riquísimo** ; *largo* → **larguísimo** ; *feliz* → **felicísimo**.
- *La paella está **riquísima*** = elle est très, très bonne.

## Muy ou mucho ?
- **muy** (très) + adjectif ou adverbe, **invariable** : *Estoy muy cansado. Vivo muy lejos.*
- **mucho** (beaucoup) + **nom**, et alors il **s'accorde** : *Hace mucho calor. Tengo muchas ganas. Hay muchos turistas.*
- **mucho** après un verbe, invariable : *Trabajo mucho.*

>! **Exemple résolu** : « Ma sœur est plus jeune que moi, mais elle est aussi grande que moi et elle a autant d'amis que moi. » → *Mi hermana es **menor que** yo, pero es **tan alta como** yo y tiene **tantos amigos como** yo.*

>! **Erreurs fréquentes**
- ✗ *más bueno que* → ✓ *mejor que* (pour une qualité).
- ✗ *tan libros como* → ✓ *tantos libros como* (devant un nom, *tanto* s'accorde).
- ✗ *más que veinte personas* → ✓ *más de veinte personas*.
- ✗ *la ciudad más grande en España* → ✓ *la ciudad más grande de España*.
- ✗ *mucho cansado* → ✓ *muy cansado* ; ✗ *muy calor* → ✓ *mucho calor*.

> **À retenir** : más / menos... que ; tan + adjectif + como ; tanto(s), tanta(s) + nom + como ; mejor, peor, mayor, menor ; más de + nombre ; el / la más... de ; -ísimo (riquísimo) ; muy + adjectif, mucho + nom (accordé).
`,
      exercices: [
        { type: "saisie", question: "Complète (égalité) : « Mi hermana es ... alta como mi padre. »", reponses: ["tan"], explication: "Égalité avec un **adjectif** : **tan** + adjectif + **como** : *tan alta como mi padre*." },
        { type: "saisie", question: "Complète avec le comparatif de *bueno* : « Esta película es ... que la primera. »", reponses: ["mejor"], explication: "*bueno* a un comparatif irrégulier : **mejor** (et non *más bueno*)." },
        { type: "qcm", question: "« J'ai autant d'amis que toi. »", choix: ["Tengo tan amigos como tú.", "Tengo tantos amigos como tú.", "Tengo tantos amigos que tú.", "Tengo tanto amigos como tú."], reponse: 1, explication: "Devant un **nom**, *tanto* s'accorde (*amigos* : masculin pluriel → **tantos**) et l'égalité se construit avec **como**." },
        { type: "vf", question: "« *Hay más que treinta alumnos en mi clase.* » est correct.", reponse: false, explication: "Devant un **nombre**, on dit **más de** : *Hay más de treinta alumnos en mi clase*." },
        { type: "saisie", question: "Remplace *muy rica* par un superlatif en -ísimo : « La paella está ... »", reponses: ["riquísima"], explication: "*rico* → **riquísimo** : le c devient **qu** pour garder le son [k], et l'adjectif s'accorde avec *la paella* (féminin) : *riquísima*." },
        { type: "qcm", question: "« L'Aconcagua est la montagne la plus haute d'Amérique. »", choix: ["El Aconcagua es la montaña más alta en América.", "El Aconcagua es la más montaña alta de América.", "El Aconcagua es la montaña más alta de América.", "El Aconcagua es la montaña la más alta de América."], reponse: 2, explication: "Superlatif relatif : **la montaña más alta de América**, sans répéter l'article et avec **de** (pas *en*). L'Aconcagua (Argentine) culmine à près de 7 000 m." },
        { type: "saisie", question: "Complète avec *muy* ou *mucho* : « En Sevilla, en julio, hace ... calor. »", reponses: ["mucho"], explication: "*calor* est un **nom** → **mucho** : *hace mucho calor*. Mais *está muy caliente* (adjectif)." },
        { type: "saisie", question: "Complète avec *mayor* ou *menor* : « Tengo catorce años y mi hermano tiene diecisiete: él es ... que yo. »", reponses: ["mayor"], explication: "Pour l'**âge**, plus âgé = **mayor** : *Mi hermano es mayor que yo*." },
        { type: "saisie", question: "Traduis : « Mon frère est plus grand que moi. » (la taille)", reponses: ["Mi hermano es más alto que yo", "Mi hermano es más grande que yo"], explication: "Pour la taille : **más alto que** ; après *que*, on emploie **yo** (et non *mí*) : *Mi hermano es más alto que yo*." },
        { type: "redaction", question: "**Expression écrite** (80 à 100 mots) — Tu as passé une semaine dans une ville d'Espagne ou d'Amérique latine. Compare-la avec ta ville : climat, taille, monuments, habitudes (repas, horaires), et donne ton avis. Utilise au moins un comparatif de supériorité, un d'infériorité, un d'égalité, un comparatif irrégulier, un superlatif et un adjectif en -ísimo.", corrige: "Modèle :\n\n*Vivo en Nantes, una ciudad del oeste de Francia. Este verano pasé una semana en Sevilla con mi familia. Sevilla es más calurosa que Nantes: ¡un día hizo cuarenta grados! En Nantes llueve más, pero el Loira es tan bonito como el Guadalquivir. Nantes tiene menos monumentos que Sevilla: allí visité la catedral, una de las más grandes del mundo. La gente cena más tarde que en Francia, a las diez de la noche. Para mí, las tapas son mejores que la comida de mi comedor. En conclusión, Sevilla es una ciudad bellísima y me gustaría volver.*\n\nPoints vérifiés :\n- supériorité : *más calurosa que, más tarde que* ; infériorité : *menos monumentos que* ;\n- égalité : *tan bonito como* ;\n- irrégulier : *mejores que* ;\n- superlatif : *una de las más grandes del mundo* ; absolu : *bellísima* ;\n- indefinido pour le séjour (*pasé, hizo, visité*) et opinion (*para mí, me gustaría*)." }
      ]
    },
    {
      id: "por-para",
      titre: "Por et para",
      theme: "Grammaire",
      cours: `
## Une seule traduction en français, deux mots en espagnol
« Pour » et « par » se traduisent par **por** ou **para** selon le sens. Pose-toi la question :
- **para** regarde **vers l'avant** : le **but**, la **destination**, le **destinataire** ;
- **por** regarde **en arrière ou à travers** : la **cause**, le **passage**, le **moyen**, l'**échange**.

## Para
| Emploi | Exemple |
|---|---|
| le **but** (pour + infinitif) | *Estudio para aprobar.* (pour réussir) |
| le **destinataire** | *Este regalo es para ti.* |
| la **destination** | *Mañana salgo para Madrid. El tren para Sevilla.* |
| la **date limite** | *Los deberes son para el lunes.* |
| l'**opinion** | *Para mí, el español es fácil.* (pour moi, à mon avis) |

## Por
| Emploi | Exemple |
|---|---|
| la **cause** (à cause de, pour) | *Gracias por tu ayuda. Lo castigaron por llegar tarde.* |
| le **lieu de passage**, un lieu vague | *Paseo por el parque. Viajamos por España.* |
| le **moment de la journée** | *por la mañana, por la tarde, por la noche* |
| le **moyen** | *por teléfono, por internet, por correo* |
| l'**échange**, le prix | *Compré la camiseta por diez euros.* |
| la **fréquence** (par) | *dos veces por semana, diez euros por persona* |
| le **complément d'agent** du passif | *El cuadro Las Meninas fue pintado por Velázquez.* |

Expressions toutes faites : *por favor, por eso, por fin, por ejemplo, por supuesto* (bien sûr), *por primera vez*.

>! **Comparer** : *Salgo **para** Madrid* (destination : je pars pour Madrid) / *Paso **por** Madrid* (passage : je passe par Madrid). *Trabajo **para** ganar dinero* (but) / *Me felicitaron **por** mi trabajo* (cause).

>! **Erreurs fréquentes**
- ✗ *Gracias para tu ayuda* → ✓ *Gracias por tu ayuda* (cause).
- ✗ *Estudio por aprobar* → ✓ *Estudio para aprobar* (but).
- ✗ *Te llamo para teléfono* → ✓ *Te llamo por teléfono* (moyen).
- ✗ *dos veces para semana* → ✓ *dos veces por semana*.

> **À retenir** : para = but (+ infinitif), destinataire, destination, date limite, opinion (para mí) ; por = cause (gracias por), passage (por el parque), moment (por la mañana), moyen (por teléfono), prix, fréquence (por semana), agent du passif (por Velázquez).
`,
      exercices: [
        { type: "saisie", question: "Complète avec *por* ou *para* : « Gracias ... el regalo. »", reponses: ["por"], explication: "On remercie **pour une cause** : **gracias por**." },
        { type: "saisie", question: "Complète avec *por* ou *para* : « Estudio mucho ... aprobar el examen. »", reponses: ["para"], explication: "Le **but** (pour + infinitif) : **para** aprobar." },
        { type: "saisie", question: "Complète avec *por* ou *para* : « Mañana salimos ... Barcelona. » (destination)", reponses: ["para"], explication: "La **destination** : *salir para* + lieu. (*Pasar por Barcelona* = passer par Barcelone.)" },
        { type: "saisie", question: "Complète avec *por* ou *para* : « Me gusta pasear ... la playa. »", reponses: ["por"], explication: "Le **lieu où l'on passe**, où l'on se promène : **por** la playa." },
        { type: "qcm", question: "« Je t'appelle ce soir par téléphone. »", choix: ["Te llamo esta noche para teléfono.", "Te llamo esta noche por teléfono.", "Te llamo esta noche en teléfono.", "Te llamo para la noche por teléfono."], reponse: 1, explication: "Le **moyen** → **por** teléfono. « Ce soir » = *esta noche*." },
        { type: "vf", question: "« *Para mí, el fútbol es aburrido.* » signifie « À mon avis, le foot est ennuyeux ».", reponse: true, explication: "**Para mí** sert à donner son **opinion** (pour moi, à mon avis)." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Los deberes son por el lunes.", "Compré la camiseta para quince euros.", "Voy al gimnasio dos veces por semana.", "Viajamos para toda España."], reponse: 2, explication: "La **fréquence** se dit avec **por** : *dos veces por semana*. Les autres : *son para el lunes* (date limite), *por quince euros* (prix), *viajamos por toda España* (lieu parcouru)." },
        { type: "saisie", question: "Complète : « *Don Quijote* fue escrito ... Cervantes. »", reponses: ["por"], explication: "À la voix passive, le complément d'agent est introduit par **por** : *fue escrito por Cervantes*." },
        { type: "qcm", question: "Dans « *Trabajo los sábados para ahorrar dinero* », pourquoi emploie-t-on *para* ?", choix: ["parce qu'il exprime le but", "parce qu'il exprime la cause", "parce qu'il exprime le moyen", "parce qu'il indique un prix"], reponse: 0, explication: "*Para ahorrar dinero* = **pour** économiser de l'argent : c'est le **but** du travail." },
        { type: "redaction", question: "**Expression écrite** (70 à 90 mots) — Écris un message à ton correspondant pour lui présenter ton voyage de l'été prochain : ta destination, les endroits par où tu passeras, le but du voyage, ce que tu feras le matin ou l'après-midi, comment tu as réservé et comment tu donneras des nouvelles. Utilise au moins trois emplois de *para* et quatre emplois de *por*.", corrige: "Modèle :\n\n*¡Hola, Pablo! El verano que viene salgo para Galicia con mis padres. Viajaremos en coche y pasaremos por Burdeos y por el País Vasco. Vamos allí para hacer los últimos cien kilómetros del Camino de Santiago. Caminaremos por la mañana, porque por la tarde hace calor. Mi madre ya ha reservado los albergues por internet: cuestan unos quince euros por persona. Para mí, será una experiencia genial. Te mandaré fotos por WhatsApp. ¡Gracias por tus consejos! Un abrazo, Lucas.*\n\nPoints vérifiés :\n- **para** : destination (*salgo para Galicia*), but (*para hacer*), opinion (*para mí*) ;\n- **por** : passage (*por Burdeos, por el País Vasco*), moment (*por la mañana, por la tarde*), moyen (*por internet, por WhatsApp*), prix et répartition (*por persona*), cause (*gracias por*) ;\n- futur (*viajaremos, caminaremos, será, mandaré*) et pretérito perfecto (*ha reservado*)." }
      ]
    },
    {
      id: "negacion-indefinidos",
      titre: "La négation et les indéfinis : nada, nadie, nunca, ningún...",
      theme: "Grammaire",
      cours: `
## La négation simple
Pour dire « ne... pas », on met simplement **no devant le verbe**. Il n'y a pas de deuxième mot comme « pas ».
- *No hablo alemán.* (je ne parle pas allemand) ; *Mis padres no trabajan el sábado.*
- Les pronoms restent entre *no* et le verbe : *No **lo** sé. No **me** gusta. No **se** levanta temprano.*
- Pour répondre : *—¿Vienes al cine? —**No, no** puedo.* Le premier *no* veut dire « non », le second « ne... pas ».

## Les mots négatifs et leurs contraires
| Mot affirmatif | Mot négatif |
|---|---|
| **algo** (quelque chose) | **nada** (rien) |
| **alguien** (quelqu'un) | **nadie** (personne) |
| **alguno, alguna, algunos, algunas** (un, quelque, certains) | **ninguno, ninguna** (aucun, aucune) |
| **siempre** (toujours) | **nunca** / **jamás** (jamais) |
| **también** (aussi) | **tampoco** (non plus) |
| **o... o** (ou... ou) | **ni... ni** (ni... ni) |
| **ya** (déjà) | **todavía no** / **aún no** (pas encore) |
| **todavía** / **aún** (encore) | **ya no** (ne... plus) |

## La règle de place : avant ou après le verbe ?
- Si le mot négatif est **avant** le verbe, on **ne met pas** *no* : *Nadie viene. Nunca como carne. Tampoco lo sé. Ninguno de mis amigos habla ruso.*
- Si le mot négatif est **après** le verbe, *no* est **obligatoire** devant le verbe : *No viene nadie. No como carne nunca. No lo sé tampoco. No tengo ningún problema.*
- Cette « double négation » est normale en espagnol, comme « ne... personne » ou « ne... rien » en français.
- On peut accumuler les mots négatifs : *No digo nada a nadie* (je ne dis rien à personne). *Nunca hago nada los domingos.*
- Avec le pretérito perfecto, le mot négatif ne se glisse jamais entre *haber* et le participe : *Nunca he estado en México* ou *No he estado nunca en México*.

## Algún, ningún : l'apocope
- Devant un **nom masculin singulier**, *alguno* et *ninguno* perdent le **-o** : *algún día, ningún problema* (accent écrit sur le ú). Au féminin, rien ne change : *alguna idea, ninguna chica*.
- Employés seuls (pronoms), ils gardent le -o : *—¿Tienes algún libro de Quino? —No, no tengo ninguno.*
- Après une négation, on emploie **ningún / ninguna au singulier** : *No tengo ningún amigo aquí* (et non ✗ *ningunos amigos*). Au pluriel, on dit simplement *No tengo amigos aquí*.
- *Algunos / algunas* au pluriel sont courants : *Algunos alumnos llevan uniforme.*

## Nadie, alguien et la préposition a
Quand *nadie* ou *alguien* est **complément d'objet** (une personne), on met **a** devant, comme devant tout COD de personne : *No veo **a** nadie. ¿Conoces **a** alguien en Lima?* Mais en sujet, pas de *a* : *Alguien llama a la puerta.*

## Expressions utiles
- *nada más* (rien d'autre, seulement), *de nada* (de rien), *nunca más* (plus jamais), *ni siquiera* (même pas) ;
- *en ningún sitio / en ninguna parte* (nulle part), *¡Ni idea!* (aucune idée !), *¡Ni hablar!* (pas question !) ;
- *—No me gusta el frío. —A mí tampoco.* (moi non plus).

## Trois autres indéfinis : otro, cada, todo
- **otro, otra** s'emploie **sans** *un / una* : *Quiero otro helado* (je veux une autre glace) ; *otra vez* (encore une fois).
- **cada** est invariable et suivi du singulier : *cada día, cada alumno, cada semana*.
- **todo** + article : *todo el día* (toute la journée), *toda la clase*, *todos los días* (tous les jours).

>! **Exemple résolu** : mets à la forme négative « *Siempre hay alguien en casa y siempre hacemos algo juntos. Yo también salgo.* »
- *siempre* → *nunca*, *alguien* → *nadie*, *algo* → *nada*, *también* → *tampoco*.
- Résultat : *Nunca hay nadie en casa y nunca hacemos nada juntos. Yo tampoco salgo.*
- Autre version avec les mots négatifs après le verbe : *No hay nunca nadie en casa y no hacemos nunca nada juntos.*

>! **Erreurs fréquentes**
- ✗ *Nadie no viene* → ✓ *Nadie viene* / *No viene nadie*.
- ✗ *Veo nadie* → ✓ *No veo a nadie* (*no* obligatoire, et *a* devant la personne).
- ✗ *No hay algo* → ✓ *No hay nada*.
- ✗ *No tengo ninguno amigo* / *ningunos amigos* → ✓ *No tengo ningún amigo*.
- ✗ *He nunca visto* → ✓ *Nunca he visto*.
- ✗ *un otro libro* → ✓ *otro libro*.
- ✗ *Todavía no juego* pour dire « je ne joue plus » → ✓ *Ya no juego* (*todavía no* = pas encore).

> **À retenir** : no + verbe ; algo/nada, alguien/nadie, alguno/ninguno, siempre/nunca, también/tampoco, o/ni, ya no, todavía no ; mot négatif avant le verbe → pas de no (Nadie viene) ; après le verbe → no obligatoire (No viene nadie) ; algún, ningún devant un nom masculin singulier ; a devant nadie / alguien complément ; otro sans un.
`,
      exercices: [
        { type: "saisie", question: "Donne le contraire : « Siempre desayuno en casa. » → « ... desayuno en casa. »", reponses: ["Nunca", "Jamás", "Nunca desayuno en casa", "Jamás desayuno en casa"], explication: "Le contraire de *siempre* est **nunca** (ou *jamás*). Placé avant le verbe, il n'a pas besoin de *no* : *Nunca desayuno en casa* (= *No desayuno nunca en casa*)." },
        { type: "saisie", question: "Mets à la forme négative : « Quiero algo. » → « No quiero ... »", reponses: ["nada", "No quiero nada"], explication: "Le contraire de *algo* est **nada** : *No quiero nada*. Le mot négatif étant après le verbe, *no* est obligatoire devant." },
        { type: "qcm", question: "« Je n'ai aucun ami ici. »", choix: ["No tengo ninguno amigo aquí.", "No tengo ningunos amigos aquí.", "No tengo ningún amigo aquí.", "Tengo ningún amigo aquí."], reponse: 2, explication: "Devant un nom masculin singulier, *ninguno* devient **ningún** ; après la négation, on reste au **singulier** ; et comme *ningún* est après le verbe, il faut **no** devant : *No tengo ningún amigo aquí*." },
        { type: "vf", question: "« *Nadie no viene a la fiesta.* » est correct.", reponse: false, explication: "Quand le mot négatif est **avant** le verbe, on ne met pas *no* : **Nadie viene a la fiesta**. Autre version correcte : *No viene nadie a la fiesta*." },
        { type: "saisie", question: "Traduis : « Je ne connais personne dans cette ville. »", reponses: ["No conozco a nadie en esta ciudad", "En esta ciudad no conozco a nadie", "No conozco a nadie en esa ciudad", "En esa ciudad no conozco a nadie"], explication: "*no* devant le verbe + *nadie* après ; *nadie* est complément d'objet (une personne), donc **a nadie** : *No conozco a nadie en esta ciudad*. *conocer* → *conozco* à la 1re personne." },
        { type: "saisie", question: "Traduis : « Je ne bois ni café ni thé. »", reponses: ["No bebo ni café ni té", "No tomo ni café ni té", "No bebo café ni té", "No tomo café ni té"], explication: "« ni... ni » se dit **ni... ni**, avec *no* devant le verbe : *No bebo ni café ni té*. (On dit aussi *No bebo café ni té*.) Attention à l'accent de **té** (le thé), qui le distingue de *te* (pronom)." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["He nunca estado en México.", "No nunca he estado en México.", "Nunca no he estado en México.", "Nunca he estado en México."], reponse: 3, explication: "On ne sépare jamais *haber* du participe, et *nunca* placé avant le verbe s'emploie sans *no* : **Nunca he estado en México** (ou *No he estado nunca en México*)." },
        { type: "saisie", question: "Complète avec la bonne forme de *alguno* : « ¿Conoces ... libro de Gabriel García Márquez? »", reponses: ["algún", "algún libro"], explication: "Devant un nom **masculin singulier** (*libro*), *alguno* perd son -o : **algún** libro (avec accent écrit). Au féminin : *alguna novela*." },
        { type: "saisie", question: "Traduis : « Je ne joue plus au foot. »", reponses: ["Ya no juego al fútbol", "Ya no juego al futbol", "Ya no juego a fútbol", "Ya no juego fútbol", "Ya no juego futbol", "No juego más al fútbol", "No juego más al futbol"], explication: "« ne... plus » = **ya no** devant le verbe : *Ya no juego al fútbol*. Le contraire est *todavía juego* (je joue encore). On entend aussi *No juego más al fútbol*, surtout en Amérique latine, mais *ya no* est la forme à retenir. En Amérique latine, on écrit aussi *futbol* et on dit souvent *jugar fútbol* sans *al*." },
        { type: "redaction", question: "Tu passes le week-end chez tes grands-parents dans un tout petit village. Écris à un ami un message de 8 à 10 phrases : plains-toi avec humour (il n'y a rien à faire, personne...) puis raconte un bon moment. Utilise au moins sept de ces mots : *nada, nadie, nunca, ningún / ninguna, tampoco, ni... ni, ya no, algo, alguien*.", corrige: "Modèle :\n\n*¡Hola, Marcos! Te escribo desde el pueblo de mis abuelos y me aburro muchísimo. Aquí no hay nada que hacer: no hay ningún cine ni ninguna tienda. Por la calle no veo a nadie, solo gatos. Mi móvil no funciona y el ordenador de mis abuelos tampoco. Mi abuelo nunca ve la tele y mi abuela ya no conduce, así que no podemos ir a la ciudad. No tengo ni wifi ni amigos aquí. Sin embargo, esta mañana he hecho algo genial: he montado a caballo con un vecino. ¡Por fin he conocido a alguien simpático! Un abrazo, Tom.*\n\nPoints vérifiés :\n- mots négatifs après le verbe avec *no* : *no hay nada, no hay ningún cine, no veo a nadie, no tengo ni... ni* ;\n- mot négatif avant le verbe sans *no* : *nunca ve* ;\n- *tampoco* (le portable ne marche pas, l'ordinateur non plus) ; *ya no conduce* (ne... plus) ;\n- *ningún cine* (masculin) / *ninguna tienda* (féminin) ;\n- *a* devant *nadie* et *alguien* compléments ;\n- contraste avec *sin embargo* et les affirmatifs *algo, alguien*." }
      ]
    },
    {
      id: "comprension-escrita",
      titre: "Comprendre un texte écrit : entraînement autocorrigé",
      theme: "Méthodologie",
      cours: `
## Ce qu'on te demande
En compréhension de l'écrit, tu dois montrer que tu as compris un document (blog, article, lettre, récit), sans forcément comprendre chaque mot. Les consignes sont souvent en espagnol :
| Consigne | Ce qu'il faut faire |
|---|---|
| *Lee el texto.* | Lis le texte. |
| *Contesta en francés / en español.* | Réponds en français / en espagnol. |
| *Verdadero o falso. Justifica con una frase del texto.* | Vrai ou faux ; recopie la phrase qui le prouve. |
| *Elige la respuesta correcta.* | Choisis la bonne réponse. |
| *Busca en el texto / Apunta / Copia...* | Cherche dans le texte / note / recopie... |
| *Relaciona.* | Relie. |
| *¿Quién? ¿Dónde? ¿Cuándo? ¿Cómo? ¿Por qué? ¿Cuántos?* | Qui ? Où ? Quand ? Comment ? Pourquoi ? Combien ? |

## La méthode
1. **Observe le document** : le titre, l'auteur, le type de texte (un blog à la 1re personne, un article avec des chiffres, une lettre).
2. **Lis les questions avant le texte** : elles te disent quoi chercher, et elles suivent en général l'ordre du texte.
3. **Repère** les noms propres, les chiffres, les dates, les mots transparents (*música, figuras, internet*).
4. **Localise** la réponse : pour chaque question, retrouve la ou les phrases du texte qui en parlent, puis relis-les lentement.
5. **Vérifie** : ta réponse doit venir du texte, pas de ce que tu imagines.

## Les pièges qui inversent le sens
- **La négation** : *no, nunca, nadie, nada, ningún, ni... ni, tampoco, ya no* (voir le chapitre sur la négation). *Nunca juega* = il ne joue jamais.
- **Les connecteurs d'opposition** : *pero, en cambio, sin embargo, aunque*. Ce qui vient après contredit souvent ce qui précède.
- **La personne du verbe** : *ayudé* (moi, j'ai aidé) ≠ *ayudó* (il / elle a aidé) ; *trabajamos* (nous).
- **Le temps du verbe** : *vivía* (avant, habitude) ≠ *vive* (maintenant) ≠ *vivirá* (plus tard).
- **Le vrai / faux** : une affirmation à moitié vraie est **fausse**. Justifie toujours avec une citation courte.

## Lire les nombres
| Écrit | Se lit |
|---|---|
| 150 | ciento cincuenta |
| 900 | novecientos |
| 1 200 | mil doscientos |
| 2016 | dos mil dieciséis |
| a las dos de la tarde | à 14 heures |

>! **Exemple résolu** : « *Mi primo Diego vive en Quito. Le gusta mucho el fútbol, pero nunca juega en un equipo: prefiere ver los partidos en la tele.* »
Affirmation : « Diego joue dans une équipe de foot. » → **Faux** : « *nunca juega en un equipo* ».
Le piège : *le gusta mucho el fútbol* fait penser qu'il joue, mais *pero* annonce une opposition et *nunca* une négation.

>! **Erreurs fréquentes**
- Répondre avec ses connaissances ou son imagination au lieu de s'appuyer sur le texte.
- Ne pas voir un *no* ou un *nunca*, et comprendre l'inverse.
- Confondre les personnes (*ayudé* / *ayudó*) et attribuer une action au mauvais personnage.
- Recopier tout un paragraphe pour justifier : une phrase courte et précise suffit.

> **À retenir** : observe le document, lis les questions d'abord, repère noms propres, chiffres et mots transparents, localise la réponse ; attention à la négation, aux connecteurs d'opposition, à la personne et au temps des verbes ; vrai / faux : une phrase à moitié vraie est fausse, justifie avec le texte.
`,
      textes: {
        fallas: `**Mi semana fallera** — el blog de Lucía, 14 años (texto de entrenamiento)

¡Hola a todos! Me llamo Lucía, vivo en Valencia y hoy os cuento la semana más loca del año: las Fallas. Cada mes de marzo, del 15 al 19, la ciudad se llena de música, de petardos y de enormes monumentos de cartón y madera, las fallas, llenos de figuras llamadas *ninots*. Algunas fallas miden más de veinte metros y muchas se burlan de los políticos o de los famosos.

Este año, mi barrio ha construido una falla sobre el cambio climático: un oso polar muy triste sobre un trozo de hielo. Mi hermano mayor, Jorge, trabaja con los artistas desde octubre. Yo no sé dibujar, pero ayudé a pintar las olas.

Lo que más me gusta es la *mascletà*: a las dos de la tarde, en la plaza del Ayuntamiento, miles de petardos explotan durante unos minutos. ¡El suelo tiembla! Mi abuela, en cambio, prefiere la Ofrenda: los falleros y las falleras llevan flores a la Virgen y con ellas forman un manto gigante.

La última noche, la del 19, se queman las fallas: es la *cremà*. Siempre lloro un poco cuando veo arder nuestro oso, pero sé que el año que viene habrá otro. Solo se salva del fuego un *ninot*, el *ninot indultat*, que elige el público con sus votos (y otro en las fallas infantiles). Las Fallas son Patrimonio Cultural Inmaterial de la Humanidad desde 2016.

*Vocabulario* : los petardos = les pétards ; burlarse de = se moquer de ; el oso = l'ours ; un trozo de hielo = un morceau de glace ; las olas = les vagues ; temblar = trembler ; arder = brûler.`,
        villarroble: `**Villarroble busca familias** — artículo (texto de entrenamiento: pueblo y cifras ficticios)

Villarroble, un pueblo de la provincia de Soria, tenía 1 200 habitantes en 1960. Hoy solo viven allí 140 personas y la mitad tiene más de 65 años. Como muchos pueblos de la llamada *España vaciada*, Villarroble perdió a sus jóvenes: se fueron a Madrid, a Zaragoza o a Barcelona para estudiar y trabajar, y casi nunca volvieron.

Hace dos años, la escuela estuvo a punto de cerrar: solo quedaban tres alumnos. Entonces la alcaldesa, Marisa Gómez, tuvo una idea. El ayuntamiento renovó cinco casas vacías y las ofreció en alquiler por 150 euros al mes a familias con niños. A cambio, las familias tienen que quedarse por lo menos cuatro años.

Hoy la escuela tiene once alumnos. Una de las familias nuevas es la de Andrés y Paula, que llegaron de Valencia con sus dos hijas. «En la ciudad pagábamos 900 euros por un piso pequeño y no veíamos a nuestras hijas», explica Paula, que trabaja por internet como diseñadora. «Aquí la vida es más tranquila, aunque no hay ningún cine ni ningún hospital cerca: el más próximo está a cuarenta kilómetros.»

Nada es fácil: en invierno hace mucho frío y la conexión a internet a veces falla. Pero la alcaldesa es optimista: «Un pueblo sin niños es un pueblo sin futuro. Ahora, por fin, se oyen otra vez risas en la plaza.»

*Vocabulario* : vaciada = vidée ; estar a punto de = être sur le point de ; la alcaldesa = la maire ; el alquiler = la location, le loyer ; a cambio = en échange ; quedarse = rester ; las risas = les rires.`,
        muertos: `**Nuestro Día de Muertos** — correo de Ximena, 15 años, Oaxaca (México) (texto de entrenamiento)

Querida Chloé:

¿Qué tal? En tu último correo me preguntaste qué es el Día de Muertos. Te lo explico, porque es mi fiesta favorita.

Cada año, el 1 y el 2 de noviembre, en México recordamos a nuestros familiares muertos. Pero no es una fiesta triste: creemos que esos días las almas de los muertos vuelven a visitarnos, y las recibimos con alegría.

Una semana antes, mi madre y yo preparamos la ofrenda en el salón: una mesa con fotos de mis abuelos, velas, calaveras de azúcar y flores de cempasúchil, que son de color naranja. También ponemos la comida que más les gustaba: mi abuelo Rafael adoraba el mole y el chocolate caliente. Y nunca falta el pan de muerto, un pan dulce que solo se come en esta época del año.

La noche del 1 al 2, vamos al cementerio con mis tíos y mis primos. Limpiamos las tumbas, las decoramos con flores y velas y nos quedamos allí hasta muy tarde: comemos, cantamos y contamos anécdotas de los abuelos. Mi hermano pequeño, en cambio, siempre se duerme antes de medianoche.

¿Y ustedes, en Francia, también tienen una fiesta así?

Un abrazo,
Ximena

*Vocabulario* : las almas = les âmes ; la ofrenda = l'autel des offrandes ; las velas = les bougies ; las calaveras de azúcar = les têtes de mort en sucre ; el cempasúchil = la rose d'Inde (fleur orange) ; limpiar = nettoyer ; las tumbas = les tombes ; dormirse = s'endormir ; ustedes = vous (en Amérique latine, on ne dit pas *vosotros*).`,
      },
      exercices: [
        { type: "qcm", texte: "fallas", question: "De quoi parle principalement Lucía dans son blog ?", choix: ["de ses vacances d'été à la plage", "d'un concours de dessin dans son collège", "d'une grande fête traditionnelle de sa ville", "d'un incendie qui a détruit son quartier"], reponse: 2, explication: "Lucía présente **les Fallas**, la fête de Valence (« *la semana más loca del año* »), du 15 au 19 mars. Le feu de la fin (*la cremà*) est volontaire : ce n'est pas un incendie accidentel." },
        { type: "vf", texte: "fallas", question: "Lucía a dessiné la falla de son quartier.", reponse: false, explication: "Faux : « *Yo no sé dibujar, pero ayudé a pintar las olas* ». Elle a seulement aidé à peindre les vagues ; c'est son frère Jorge qui travaille avec les artistes. Attention à la négation *no sé* et à *pero*." },
        { type: "qcm", texte: "fallas", question: "¿Qué prefiere la abuela de Lucía?", choix: ["la *mascletà*", "la Ofrenda de flores", "la *cremà*", "el oso polar del barrio"], reponse: 1, explication: "« *Mi abuela, en cambio, prefiere la Ofrenda* » : *en cambio* (en revanche) oppose son goût à celui de Lucía, qui préfère la *mascletà*." },
        { type: "saisie", texte: "fallas", question: "Relève dans le paragraphe qui commence par « *Este año* » le mot espagnol qui signifie « quartier ».", reponses: ["barrio"], explication: "« *Este año, mi **barrio** ha construido una falla* » : *el barrio* = le quartier. Indice : chaque quartier de Valence construit sa propre falla." },
        { type: "vf", texte: "fallas", question: "Le dernier soir, toutes les figures (*ninots*) sont brûlées, sans aucune exception.", reponse: false, explication: "Faux : « *Solo se salva del fuego un ninot, el ninot indultat, que elige el público con sus votos* ». Une figure choisie par le public (et une autre chez les fallas des enfants) échappe au feu : elle rejoint le musée des Fallas. *Solo* (seulement) signale l'exception." },
        { type: "qcm", texte: "villarroble", question: "Pourquoi les jeunes ont-ils quitté Villarroble ?", choix: ["parce que l'école du village avait fermé", "pour étudier et travailler dans de grandes villes", "parce que les loyers étaient trop chers", "pour fuir le froid de l'hiver"], reponse: 1, explication: "« *se fueron a Madrid, a Zaragoza o a Barcelona para estudiar y trabajar* ». L'école n'a pas fermé (elle a « failli fermer » : *estuvo a punto de cerrar*), et les loyers chers concernent la ville de Valence, pas le village." },
        { type: "saisie", texte: "villarroble", question: "Combien de personnes vivent aujourd'hui à Villarroble ? (en chiffres)", reponses: ["140", "140 personas", "140 habitantes", "140 personnes", "140 habitants"], explication: "« *Hoy solo viven allí 140 personas* » (ciento cuarenta). En 1960, il y en avait 1 200 : le village a perdu 1 060 habitants. Ne confonds pas *hoy* (aujourd'hui) et *en 1960*." },
        { type: "vf", texte: "villarroble", question: "Les familles qui louent une maison rénovée doivent rester au moins quatre ans au village.", reponse: true, explication: "Vrai : « *A cambio, las familias tienen que quedarse por lo menos cuatro años* ». *Tener que* = devoir ; *por lo menos* = au moins." },
        { type: "qcm", texte: "villarroble", question: "Según Paula, ¿qué inconveniente tiene la vida en el pueblo?", choix: ["El alquiler es muy caro.", "No ve a sus hijas.", "No puede trabajar.", "No hay ningún cine ni ningún hospital cerca."], reponse: 3, explication: "« *aunque no hay ningún cine ni ningún hospital cerca* » : *aunque* introduit l'inconvénient. Le loyer cher et le manque de temps avec ses filles, c'était **en ville** (*pagábamos, no veíamos* : imparfait, avant) ; elle travaille par internet." },
        { type: "redaction", texte: "villarroble", question: "1. Explique en français l'idée de la maire : ce que propose la mairie, ce qu'elle demande en échange, et le résultat.\n2. Recopie deux phrases ou expressions négatives du texte et traduis-les.\n3. **Expression** (60 à 80 mots) : *¿Te gustaría vivir en Villarroble?* Réponds en espagnol avec deux avantages, deux inconvénients et ton avis.", corrige: "1. La mairie a **rénové cinq maisons vides** et les **loue 150 € par mois** à des **familles avec enfants**. En échange, les familles doivent **rester au moins quatre ans**. Résultat : l'école, qui n'avait plus que 3 élèves et allait fermer, en compte maintenant **11**, et l'on entend de nouveau des rires d'enfants sur la place.\n\n2. Au choix :\n- « *casi nunca volvieron* » : ils ne sont presque jamais revenus ;\n- « *no veíamos a nuestras hijas* » : nous ne voyions pas nos filles ;\n- « *no hay ningún cine ni ningún hospital cerca* » : il n'y a ni cinéma ni hôpital à proximité ;\n- « *Nada es fácil* » : rien n'est facile.\n\n3. Modèle :\n*A mí me gustaría vivir en Villarroble, pero solo unos años. Lo bueno es que la vida es tranquila y el alquiler es barato: 150 euros al mes no es nada. Además, en una escuela con once alumnos, los profesores tienen tiempo para todos. Lo malo es que no hay ningún cine y el hospital está a cuarenta kilómetros. Tampoco me gusta el frío. En conclusión, creo que es una buena idea para las familias, pero yo echaría de menos a mis amigos.*\n\nPoints vérifiés : informations exactes tirées du texte ; avantages et inconvénients introduits par *lo bueno es que / lo malo es que* ; négations (*no hay ningún, tampoco*) ; connecteurs (*además, pero, en conclusión*) ; conditionnel (*me gustaría, echaría de menos*)." },
        { type: "qcm", texte: "muertos", question: "Pourquoi Ximena écrit-elle à Chloé ?", choix: ["pour lui expliquer une fête de son pays", "pour l'inviter à passer les vacances à Oaxaca", "pour lui annoncer la mort de son grand-père", "pour lui demander une recette de cuisine"], reponse: 0, explication: "« *me preguntaste qué es el Día de Muertos. Te lo explico* » : Chloé a posé une question, Ximena y répond. Le grand-père Rafael est cité parce qu'on l'honore pendant la fête, pas parce qu'il vient de mourir (*adoraba* : imparfait, souvenir)." },
        { type: "vf", texte: "muertos", question: "Pour Ximena, le Día de Muertos est une fête triste.", reponse: false, explication: "Faux : « *Pero no es una fiesta triste* » ; on reçoit les âmes des morts « *con alegría* » (avec joie), et c'est même sa fête préférée (« *es mi fiesta favorita* »). Attention : le mot *triste* est bien dans le texte, mais après une **négation**." },
        { type: "saisie", texte: "muertos", question: "Relève dans le texte le nom de la fleur orange qu'on met sur l'*ofrenda* (recopie-le avec son accent écrit).", reponses: ["cempasúchil", "flores de cempasúchil", "flor de cempasúchil", "las flores de cempasúchil"], explication: "« *flores de **cempasúchil**, que son de color naranja* ». C'est un mot d'origine nahuatl (la langue des Aztèques) ; en français, on appelle cette fleur la rose d'Inde. Recopie-le avec son accent écrit." },
        { type: "qcm", texte: "muertos", question: "Que fait la famille de Ximena la nuit du 1er au 2 novembre ?", choix: ["Elle reste à la maison devant l'*ofrenda*.", "Elle va au cimetière, mais rentre avant minuit pour coucher le petit frère.", "Elle prépare le pan de muerto pour toute la semaine.", "Elle va au cimetière, nettoie et décore les tombes, et y reste tard."], reponse: 3, explication: "« *vamos al cementerio [...] Limpiamos las tumbas, las decoramos con flores y velas y nos quedamos allí hasta muy tarde* ». Le petit frère s'endort avant minuit (*se duerme*), mais la famille ne rentre pas pour autant : *en cambio* oppose seulement son attitude à celle des autres. L'*ofrenda* se prépare une semaine avant, à la maison." },
        { type: "redaction", texte: "muertos", question: "1. Explique en français ce qu'est l'*ofrenda* et cite au moins cinq éléments qu'on y trouve.\n2. Relève deux phrases qui montrent que ce n'est pas une fête triste.\n3. **Expression** (60 à 80 mots) : réponds à la question de Ximena (*¿Y ustedes, en Francia, también tienen una fiesta así?*) en présentant la Toussaint en France, puis dis ce qui te plaît dans le Día de Muertos.", corrige: "1. L'*ofrenda* est une **table installée dans le salon** une semaine avant la fête pour accueillir les âmes des morts de la famille. On y trouve : des **photos** des grands-parents, des **bougies**, des **têtes de mort en sucre**, des **fleurs orange de cempasúchil**, les **plats préférés** des défunts (le mole et le chocolat chaud du grand-père Rafael) et le **pan de muerto**, un pain sucré.\n\n2. Au choix :\n- « *Pero no es una fiesta triste* » ;\n- « *las recibimos con alegría* » ;\n- « *comemos, cantamos y contamos anécdotas de los abuelos* » ;\n- « *es mi fiesta favorita* ».\n\n3. Modèle :\n*Querida Ximena: ¡Gracias por tu correo! En Francia tenemos el Día de Todos los Santos, el 1 de noviembre. Muchas familias van al cementerio y ponen flores, sobre todo crisantemos, en las tumbas. Pero es un día más serio y más triste que en México: no cantamos y no hacemos ofrendas. Lo que más me gusta del Día de Muertos es la alegría: recordar a los abuelos con fotos, música y su comida favorita. ¡Me encantaría verlo un día! Un abrazo, Chloé*\n\nPoints vérifiés : informations exactes tirées du texte ; comparaison (*más serio que*) ; négation (*no cantamos*) ; *lo que más me gusta* ; *me encantaría* (conditionnel) ; *ustedes* respecté dans la question, formule de lettre (*Querida... Un abrazo*)." }
      ]
    },
    {
      id: "relativos-interrogativos",
      titre: "Relatifs et interrogatifs : que, donde, lo que, ¿qué?, ¿cuál?...",
      theme: "Grammaire",
      cours: `
## Les pronoms relatifs : relier deux phrases
Un relatif évite de répéter un nom : *Tengo una amiga. Mi amiga vive en Lima.* → *Tengo una amiga **que** vive en Lima.*

### Que : à la fois « qui » et « que »
En espagnol, **que** traduit « qui » (sujet) **et** « que » (complément), pour les personnes comme pour les choses :
- *El chico **que** habla es mi primo.* (le garçon qui parle)
- *La película **que** vimos era genial.* (le film que nous avons vu)
- Sans préposition, on ne traduit pas « qui » relatif par *quien* : ✗ *el chico quien habla* (on ne rencontre *quien* sans préposition qu'entre virgules, dans un style soutenu : *mi tío, quien vive en Lima,...*).

### Après une préposition (con, en, de, para...)
| Pour... | On emploie | Exemple |
|---|---|---|
| une personne | **quien, quienes** ou **el que, la que, los que, las que** | *la chica **con quien** hablo* = *la chica **con la que** hablo* |
| une chose | **el que, la que, los que, las que** (parfois *que* seul après *en*) | *el bolígrafo **con el que** escribo* ; *la casa **en la que** vivo* |

- « dont » se dit le plus souvent **del que, de la que, de quien** : *el libro **del que** te hablé* (le livre dont je t'ai parlé).
- Pour la possession, tu peux rencontrer **cuyo, cuya, cuyos, cuyas**, qui s'accorde avec ce qui est possédé : *una escritora **cuyas** novelas leo* (une écrivaine dont je lis les romans).

### Donde : où (un lieu)
- *La ciudad **donde** nací* = *la ciudad **en la que** nací*. Pas d'accent écrit : ce n'est pas une question.
- Pour le temps, pas de *donde* : « le jour où tu es arrivé » = *el día **en que** llegaste* (ou *el día que llegaste*).

### Lo que : ce que, ce qui
- *No entiendo **lo que** dices.* (je ne comprends pas ce que tu dis)
- ***Lo que** me molesta es el ruido.* (ce qui me gêne, c'est le bruit)
- ***Lo que** más me gusta es...* (ce que je préfère, c'est...) : très utile pour donner son avis.

### El que, la que, los que : celui qui, ceux qui
- *Este móvil es más caro que **el que** tengo.* (que celui que j'ai)
- ***Los que** llegan tarde no pueden entrar.* (ceux qui arrivent en retard)

## Les interrogatifs : toujours un accent écrit
| Espagnol | Français |
|---|---|
| ¿qué? | que ? quoi ? quel ? |
| ¿quién? ¿quiénes? | qui ? |
| ¿cuál? ¿cuáles? | lequel ? quel ? |
| ¿dónde? ¿adónde? ¿de dónde? | où ? où (avec mouvement) ? d'où ? |
| ¿cuándo? | quand ? |
| ¿cómo? | comment ? |
| ¿cuánto? ¿cuánta? ¿cuántos? ¿cuántas? | combien ? (s'accorde avec le nom) |
| ¿por qué? ¿para qué? | pourquoi ? dans quel but ? |

- L'accent reste dans les **questions indirectes**, après *no sé, me pregunto, dime, explícame...* : *No sé **dónde** vive. Dime **qué** quieres. Me pregunto **por qué** no viene.*
- Il reste aussi dans les **exclamations** : *¡**Qué** bonito! ¡**Cuánta** gente! ¡**Cómo** llueve!*
- Sans accent, le même mot est un relatif ou une conjonction : *Vivo **donde** vivía mi abuela* / *¿**Dónde** vives?* ; *Creo **que** viene* / *¿**Qué** dices?*

### ¿Qué? ou ¿cuál?
- **¿Qué?** devant un nom : *¿**Qué** libro lees?* ; et pour demander une définition : *¿**Qué** es el mole?*
- **¿Cuál?** devant le verbe *ser*, pour une information précise ou un choix : *¿**Cuál** es tu número de teléfono? ¿**Cuál** es la capital de Chile? ¿**Cuál** prefieres, el rojo o el azul?*

>! **Exemple résolu** : relie les deux phrases, puis pose la question correspondante.
- *Esta es la playa. Pasé mis vacaciones en esta playa.* → *Esta es la playa **donde** (= en la que) pasé mis vacaciones.*
- Question : *¿**Dónde** pasaste tus vacaciones?* (accent écrit : c'est une question).
- Question indirecte : *Mi amigo me pregunta **dónde** pasé mis vacaciones* (l'accent reste).

>! **Erreurs fréquentes**
- ✗ *El chico quien habla* → ✓ *El chico que habla*.
- ✗ *Esto es que pienso* → ✓ *Esto es **lo que** pienso* (ce que je pense).
- ✗ *No sé que hacer* → ✓ *No sé **qué** hacer* (question indirecte : accent).
- ✗ *¿Qué es tu dirección?* → ✓ *¿**Cuál** es tu dirección?*
- ✗ *¿Cuantos años tienes?* → ✓ *¿**Cuántos** años tienes?*

> **À retenir** : relatif **que** = qui et que ; après une préposition : **quien** (personne) ou **el que, la que** ; **donde** = où (lieu) ; **lo que** = ce que, ce qui ; interrogatifs et exclamatifs avec accent écrit, même dans une question indirecte (*No sé dónde vive*) ; **¿cuál es...?** pour demander une information précise.
`,
      exercices: [
        { type: "vf", question: "« La fille qui habite à côté est colombienne » se traduit : « *La chica quien vive al lado es colombiana.* »", reponse: false, explication: "« qui » relatif sujet se dit **que** : *La chica que vive al lado es colombiana*. Dans une phrase comme celle-ci, on n'emploie *quien* qu'après une préposition (*con quien, para quien*)." },
        { type: "qcm", question: "« Le livre que je lis est passionnant. »", choix: ["El libro quien leo es apasionante.", "El libro lo que leo es apasionante.", "El libro que leo es apasionante.", "El libro cual leo es apasionante."], reponse: 2, explication: "« que » relatif complément se dit **que** : *El libro que leo*. *Quien* ne s'emploie pas ici (pas de préposition, et il s'agit d'une chose) ; *lo que* veut dire « ce que », sans nom devant." },
        { type: "saisie", question: "Complète : « No entiendo ... dices. » (je ne comprends pas **ce que** tu dis)", reponses: ["lo que"], explication: "« ce que » = **lo que** : *No entiendo lo que dices*. *Que* seul ne suffit pas : il faut *lo* devant, puisqu'il n'y a pas de nom à reprendre." },
        { type: "qcm", question: "Complète la question : « *¿... es tu dirección?* » (Quelle est ton adresse ?)", choix: ["Cuál", "Qué", "Cuánto", "Quién"], reponse: 0, explication: "Pour demander une information précise avec *ser*, on emploie **¿Cuál es...?** : *¿Cuál es tu dirección? ¿Cuál es tu número?* *¿Qué es...?* demande une définition (*¿Qué es el mole?*)." },
        { type: "vf", question: "La phrase « *No sé donde vive Pablo.* » est correctement écrite.", reponse: false, explication: "C'est une **question indirecte** (je ne sais pas où il habite) : l'interrogatif garde son accent écrit. Il faut écrire *No sé **dónde** vive Pablo*. Sans accent, *donde* est un relatif : *la ciudad donde vive Pablo*." },
        { type: "saisie", question: "Complète avec l'interrogatif qui convient (attention à l'accent écrit) : « ¿... hermanos tienes? —Tengo dos. »", reponses: ["Cuántos"], explication: "« combien de » = **¿Cuántos?**, accordé avec *hermanos* (masculin pluriel), avec un accent écrit : *¿Cuántos hermanos tienes?* Au féminin : *¿Cuántas hermanas tienes?*" },
        { type: "qcm", question: "« La ville où je suis né »", choix: ["La ciudad que nací", "La ciudad dónde nací", "La ciudad cuando nací", "La ciudad donde nací"], reponse: 3, explication: "« où » relatif (un lieu) = **donde**, sans accent : *la ciudad donde nací* (ou *la ciudad en la que nací*). *Dónde* avec accent est réservé aux questions ; *que* seul ne suffit pas pour un lieu." },
        { type: "qcm", question: "« La fille avec qui je parle est ma voisine. »", choix: ["La chica que hablo es mi vecina.", "La chica con quien hablo es mi vecina.", "La chica con quién hablo es mi vecina.", "La chica quien hablo con es mi vecina."], reponse: 1, explication: "Après une préposition, pour une personne : **con quien** (ou *con la que*) : *La chica con quien hablo*. Pas d'accent : ce n'est pas une question. La préposition se place toujours devant le relatif, jamais à la fin." },
        { type: "saisie", question: "Traduis : « Je ne sais pas quoi faire. » (attention aux accents écrits)", reponses: ["No sé qué hacer", "Yo no sé qué hacer"], explication: "**No sé qué hacer** : *qué* garde son accent dans cette question indirecte, et *sé* (je sais) prend un accent pour se distinguer du pronom *se*." },
        { type: "redaction", question: "Tu présentes ta ville ou ton village à un correspondant mexicain (5 à 6 phrases). Emploie au moins une fois *que*, *donde* et *lo que*. Puis pose-lui quatre questions avec quatre interrogatifs différents.", corrige: "Modèle :\n\n*Vivo en Rennes, una ciudad que está en el oeste de Francia. Es la ciudad donde nací y donde viven mis abuelos. Tiene un mercado muy grande que se hace todos los sábados por la mañana. Lo que más me gusta es el centro histórico, con sus casas antiguas de madera. Lo que no me gusta es la lluvia: ¡aquí llueve mucho! Mi colegio está en un barrio tranquilo donde hay muchos parques.*\n\n*Y tú, ¿dónde vives exactamente? ¿Cómo vas al colegio? ¿Cuántos alumnos hay en tu clase? ¿Cuál es tu plato mexicano favorito? ¿Qué haces los fines de semana?*\n\nPoints vérifiés :\n- relatifs : *que* (sujet : *una ciudad que está*), *donde* (lieu : *la ciudad donde nací*), *lo que* (*lo que más me gusta*) ;\n- interrogatifs avec accent écrit : *dónde, cómo, cuántos, cuál, qué* ;\n- *¿cuál es...?* pour l'information précise ; *cuántos* accordé avec *alumnos* ;\n- points d'interrogation **¿ ?** au début et à la fin." }
      ]
    },
    {
      id: "acentuacion-pronunciacion",
      titre: "Prononciation et accent écrit : où mettre la tilde ?",
      theme: "Phonologie",
      cours: `
## Les sons de l'espagnol
| Lettre | Se prononce | Exemples |
|---|---|---|
| **u** | « ou » | *luna, mucho* |
| **e** | « é », jamais muet | *grande* (« grandé »), *noche* |
| **j**, et **g** devant e, i | son raclé au fond de la gorge (la *jota*) | *joven, gente, girar* |
| **gue, gui** | g dur, le u ne se prononce pas | *guerra, guitarra* |
| **güe, güi** | le u se prononce (tréma) | *pingüino, bilingüe* |
| **ll** et **y** | à peu près « y » (dans la plupart des pays) | *llamar, playa, yo* |
| **ñ** | « gn » | *España, niño* |
| **ch** | « tch » | *chico, mucho* |
| **h** | ne se prononce jamais | *hablar, hoy* |
| **b** et **v** | le même son | *bien, vino* |
| **r** | roulé, un seul battement | *pero, caro* |
| **rr**, et **r** en début de mot ou après n, l, s | fortement roulé | *perro, rojo, Enrique* |
| **z**, et **c** devant e, i | en Espagne, comme le *th* anglais ; en Amérique latine (et dans une partie de l'Andalousie), « s » | *zapato, cine* |
| **s** | toujours « ss », jamais « z » | *casa, rosa* |
| **qu** | « k » | *queso, aquí* |

Attention aux paires : *pero* (mais) / *perro* (chien) ; *caro* (cher) / *carro* (chariot ; voiture en Amérique latine).

## L'accent tonique
Dans chaque mot de plusieurs syllabes, une syllabe est prononcée plus fort : c'est l'**accent tonique**. Il peut changer le sens :
- *papa* (pomme de terre, accent sur PA-) / *papá* (papa, accent sur -PÁ) ;
- *hablo* (je parle) / *habló* (il a parlé) ;
- *esta* (cette) / *está* (il est).

## Les trois règles de l'accent écrit (la *tilde*)
1. Le mot finit par une **voyelle, -n ou -s** → l'accent tonique tombe naturellement sur l'**avant-dernière** syllabe : *ca-sa, jo-ven, e-xa-men, ha-blan, li-bros*. Pas d'accent écrit.
2. Le mot finit par une **autre consonne** (l, r, d, z, j...) → l'accent tonique tombe naturellement sur la **dernière** syllabe : *ha-blar, ciu-dad, es-pa-ñol, re-loj*. Pas d'accent écrit.
3. **Sinon**, on écrit l'accent sur la voyelle tonique.

Cas de la règle 3 :
- dernière syllabe d'un mot terminé par voyelle, n ou s : *ca-fé, can-ción, in-glés, es-tán* ;
- avant-dernière syllabe d'un mot terminé par une autre consonne : *ár-bol, fá-cil, lá-piz, Pé-rez* ;
- **avant-avant-dernière** syllabe : **toujours** un accent écrit : *mú-si-ca, sá-ba-do, te-lé-fo-no, A-mé-ri-ca*.

## Cas particuliers
- Un **i** ou un **u** tonique à côté d'une autre voyelle prend un accent pour se détacher : *dí-a, pa-ís, tí-o, frí-o, Ra-úl*.
- **Le pluriel** ajoute une syllabe : l'accent écrit peut apparaître ou disparaître. *joven → jóvenes, examen → exámenes* ; *canción → canciones, inglés → ingleses, alemán → alemanes*.
- **L'enclise** (pronom collé au verbe) : *compra → cómpralo, dando → dándole, sienta → siéntate*.
- Les mots d'**une syllabe** n'ont pas d'accent (*fue, fui, dio, vio, pie, ti*), sauf pour distinguer deux mots :

| Sans accent | Avec accent |
|---|---|
| el (le) | él (il, lui) |
| tu (ton, ta) | tú (tu, toi) |
| mi (mon, ma) | mí (moi, après une préposition) |
| te (te, pronom) | té (le thé) |
| se (se, pronom) | sé (je sais) |
| si (si) | sí (oui) |
| de (de) | dé (« que je donne, qu'il donne » : subjonctif de *dar*, vu au lycée) |
| mas (mais, rare) | más (plus) |

- Les interrogatifs et exclamatifs prennent toujours un accent : *qué, quién, dónde, cómo, cuándo, cuánto, cuál* (voir le chapitre sur les relatifs et interrogatifs).

>! **Exemple résolu** : faut-il un accent écrit à *lapiz* (crayon), *ordenador* et *musica* ?
- *lapiz* se prononce LA-piz et finit par **z** : naturellement, l'accent tomberait sur la dernière syllabe. Il faut donc l'écrire : **lápiz**.
- *ordenador* se prononce or-de-na-DOR et finit par **r** : l'accent tombe naturellement sur la dernière syllabe. Pas d'accent écrit.
- *musica* se prononce MU-si-ca : avant-avant-dernière syllabe, donc toujours un accent : **música**.

>! **Erreurs fréquentes**
- ✗ *examén*, ✗ *jóven* → ✓ *examen, joven* (ils finissent par n : accent naturel sur l'avant-dernière) ; mais ✓ *exámenes, jóvenes* au pluriel.
- ✗ *canciónes* → ✓ *canciones*.
- ✗ *para tí* → ✓ *para ti*.
- ✗ *Ayer Ana hablo con Pablo* → ✓ *Ayer Ana habló con Pablo* (*hablo* sans accent = je parle).
- Prononcer à la française le *h* ou un *e* muet : *hombre* se dit « ombré ».

> **À retenir** : u = « ou », e jamais muet, j = jota, h muet, b = v, rr roulé ; mot terminé par voyelle, n, s → accent naturel sur l'avant-dernière syllabe ; autre consonne → sur la dernière ; sinon accent écrit, et toujours sur l'avant-avant-dernière (*música*) ; accent qui distingue : él, tú, mí, té, sé, sí, más ; jamais sur *ti* ni sur *fue*.
`,
      exercices: [
        { type: "qcm", question: "Dans quel mot l'accent tonique tombe-t-il sur la **dernière** syllabe ?", choix: ["joven", "casa", "ciudad", "examen"], reponse: 2, explication: "*ciudad* finit par **d** (une consonne autre que n ou s) : l'accent tombe naturellement sur la dernière syllabe, ciu-DAD. *joven, casa, examen* finissent par une voyelle ou par n : accent sur l'avant-dernière (JO-ven, CA-sa, e-XA-men)." },
        { type: "saisie", question: "Le mot *musica* se prononce MU-si-ca. Écris-le avec son accent écrit.", reponses: ["música"], explication: "L'accent tonique tombe sur l'**avant-avant-dernière** syllabe : il faut toujours l'écrire. **música**, comme *sábado, teléfono, América*." },
        { type: "qcm", question: "Quel mot est correctement écrit ?", choix: ["examén", "jóven", "canciónes", "inglés"], reponse: 3, explication: "*inglés* : accent tonique sur la dernière syllabe d'un mot terminé par **s** → accent écrit. *examen* et *joven* (terminés par n, accent naturel sur l'avant-dernière) n'en prennent pas ; *canciones* non plus (pluriel : l'accent tombe naturellement sur -CIO-)." },
        { type: "saisie", question: "Écris le pluriel de *joven* (avec l'accent écrit s'il en faut un).", reponses: ["jóvenes"], explication: "*jóvenes* se prononce JO-ve-nes : l'accent tonique est maintenant sur l'avant-avant-dernière syllabe, donc il faut l'écrire. De même : *examen → exámenes*." },
        { type: "saisie", question: "Complète avec *el* ou *él* : « ¿Este regalo es para tu hermano? —Sí, es para ... »", reponses: ["él"], explication: "Ici, c'est le pronom « lui » : **él**, avec accent. Sans accent, *el* est l'article « le » (*el regalo*)." },
        { type: "qcm", question: "« Ce cadeau est pour toi. »", choix: ["Este regalo es para tí.", "Este regalo es para ti.", "Este regalo es para tu.", "Este regalo es para té."], reponse: 1, explication: "Après une préposition, « toi » se dit **ti**, sans accent (un mot d'une syllabe qui n'a pas de double à distinguer). Attention : *mí* (moi) en prend un, pour le distinguer de *mi* (mon). *Tu* = ton ; *té* = le thé." },
        { type: "qcm", question: "« Hier, Pablo a parlé avec son professeur. »", choix: ["Ayer Pablo hablo con su profesor.", "Ayer Pablo hábló con su profesor.", "Ayer Pablo habló con su profesor.", "Ayer Pablo hablé con su profesor."], reponse: 2, explication: "Indefinido, 3e personne : **habló**, accent sur la dernière syllabe. *hablo* sans accent = je parle (présent) ; *hablé* = j'ai parlé ; un mot ne porte jamais deux accents écrits." },
        { type: "qcm", question: "Dans quel mot la lettre *g* se prononce-t-elle comme la *jota* ?", choix: ["gato", "guitarra", "pingüino", "gente"], reponse: 3, explication: "Devant **e** et **i**, le *g* se prononce comme la *jota* : **gente**, *girar*. Devant a, o, u (*gato*) et dans *gue, gui* (*guitarra*), *güe, güi* (*pingüino*), il reste dur, comme dans « gâteau »." },
        { type: "vf", question: "En Amérique latine, *cine* et *zapato* se prononcent avec le son « s ».", reponse: true, explication: "Vrai : c'est le *seseo*. En Amérique latine (et dans une partie de l'Andalousie), *z* et *c* devant e, i se prononcent « s ». Dans le reste de l'Espagne, ils se prononcent comme le *th* anglais. Les deux prononciations sont correctes." },
        { type: "redaction", question: "Recopie ce texte en ajoutant les **8 accents écrits** qui manquent, puis explique la règle pour trois d'entre eux.\n\n*El sabado pasado, mi hermano y yo fuimos a un concierto de musica latina. ¿Donde? En el estadio de la ciudad. Habia mucha gente joven. Mi hermano me pregunto: «¿Te gusta?». Le conteste que si. ¡Fue fantastico!*", corrige: "Texte corrigé :\n\n*El **sábado** pasado, mi hermano y yo fuimos a un concierto de **música** latina. ¿**Dónde**? En el estadio de la ciudad. **Había** mucha gente joven. Mi hermano me **preguntó**: «¿Te gusta?». Le **contesté** que **sí**. ¡Fue **fantástico**!*\n\nLes règles :\n- *sábado, música, fantástico* : accent tonique sur l'avant-avant-dernière syllabe → toujours un accent écrit ;\n- *preguntó, contesté* : indefinido, accent tonique sur la dernière syllabe d'un mot terminé par une voyelle → accent écrit (*pregunto* sans accent = je demande) ;\n- *había* : le **i** tonique à côté d'une voyelle prend un accent (comme *día*) ;\n- *dónde* : interrogatif → toujours un accent ;\n- *sí* (oui) : accent pour le distinguer de *si* (si).\n\nSans accent écrit et c'est normal : *joven, ciudad, concierto, estadio, fuimos, fue* (mot d'une syllabe)." }
      ]
    },
    {
      id: "comprension-oral",
      titre: "Comprendre l'oral : méthode et entraînement sur transcriptions",
      theme: "Méthodologie",
      cours: `
## Ce qu'on te demande
En compréhension de l'oral, tu écoutes un document court (annonce, message vocal, dialogue, interview, extrait de reportage) deux ou trois fois, puis tu dis ce que tu as compris, le plus souvent en français. On ne te demande pas de tout comprendre, mais de repérer **l'essentiel** et quelques **informations précises**.

>! **Dans l'appli** : les documents de ce chapitre sont des **transcriptions** (le texte écrit de ce qu'on entend). Pour t'entraîner vraiment, demande à quelqu'un de te les lire à voix haute, à vitesse normale, sans les regarder ; ou lis-les toi-même une fois à voix haute, puis réponds en regardant le texte le moins possible.

## La méthode en trois temps
1. **Avant d'écouter** : lis la consigne et les questions ; devine la situation (une gare ? un message d'ami ? une émission de radio ?) et les mots que tu vas sans doute entendre.
2. **Pendant l'écoute** : à la 1re écoute, l'essentiel (qui parle ? à qui ? où ? de quoi ? sur quel ton : joyeux, inquiet, en colère ?) ; à la 2e écoute, les détails (chiffres, heures, lieux, noms propres). Note des mots-clés, pas des phrases entières.
3. **Après l'écoute** : relie tes notes, vérifie que ta réponse est logique, puis rédige.

## Les indices propres à l'oral
- **L'intonation** : la voix monte à la fin d'une question (*¿Vienes?*) ; une exclamation (*¡Qué rollo!* = quelle barbe !) exprime un sentiment.
- **Les petits mots de la conversation** organisent la parole mais ne portent pas l'information :

| Mot | Sens |
|---|---|
| *oye, mira* | dis donc, écoute |
| *bueno, pues* | bon, eh bien |
| *vale* (Espagne), *dale* (Argentine) | d'accord |
| *o sea* | c'est-à-dire |
| *¿sabes?, ¿no?, ¿eh?* | tu sais ?, n'est-ce pas ? |
| *¡venga!* | allez ! |
| *¡qué va!* | pas du tout ! |
| *¿de verdad?* | vraiment ? |
| *es que...* | c'est que... (annonce une excuse, une cause) |

- **Les enchaînements** : les mots se collent les uns aux autres : *los otros* s'entend « losotros ». Ne cherche pas de blanc entre les mots.
- **Les variantes régionales** : en Amérique latine, on dit *ustedes* (jamais *vosotros*) et *z*, *ce*, *ci* se prononcent « s » ; en Argentine, on dit *vos* au lieu de *tú* (*vos tenés* = *tú tienes*), et *ll*, *y* se prononcent comme le « j » français (*yo* ≈ « jo »), ou comme « ch » chez beaucoup de jeunes (*yo* ≈ « cho »).

## Les nombres qui se ressemblent
| On entend | Ne confonds pas avec |
|---|---|
| *dos* (2) | *doce* (12) |
| *tres* (3) | *trece* (13) |
| *sesenta* (60) | *setenta* (70) |
| *quince* (15) | *cincuenta* (50) |
| *quinientos* (500) | *cincuenta* (50) |
| *setecientos* (700) | *setenta* (70) |

Les heures : *a las doce y cuarto* (12 h 15), *a las diez y media* (10 h 30), *a las cinco menos cuarto* (4 h 45 ou 16 h 45), *de la tarde* (de l'après-midi).

>! **Exemple résolu** : on entend « *Bueno, pues nada, que al final no puedo ir, ¿vale? Es que tengo que cuidar a mi hermano.* »
- *Bueno, pues nada... ¿vale?* : des mots de conversation, sans information.
- L'information : *no puedo ir* (la personne ne viendra pas) ; la cause, annoncée par *es que* : *tengo que cuidar a mi hermano*.
- Réponse : « Elle ne pourra pas venir, car elle doit garder son frère. »

>! **Erreurs fréquentes**
- Vouloir tout comprendre et bloquer sur un mot : passe, et concentre-toi sur la suite.
- Confondre *dos* et *doce*, *sesenta* et *setenta*.
- Ne pas entendre le *no* en début de phrase : *No vamos al cine* = on ne va pas au cinéma.
- Prendre *pues, bueno, vale* pour des informations importantes.

> **À retenir** : avant l'écoute, lis les questions et devine la situation ; 1re écoute pour l'essentiel (qui, où, quoi, ton), 2e pour les détails (chiffres, heures, noms) ; note des mots-clés ; repère la négation et les connecteurs ; ne te laisse pas piéger par les petits mots de l'oral (*bueno, pues, vale, o sea*) ni par les nombres proches (*dos / doce, sesenta / setenta*).
`,
      textes: {
        anuncio: `**Anuncio en la estación** (transcripción ; texto de entrenamiento, horarios ficticios)

«Atención, por favor. El tren con destino a Sevilla, con salida prevista a las doce y cuarto, saldrá con un retraso de veinte minutos. Los señores viajeros pueden subir al tren por la vía catorce, y no por la vía cuatro, como estaba previsto. Les recordamos que está prohibido fumar en toda la estación. Disculpen las molestias.»

*Vocabulario* : la salida = le départ ; el retraso = le retard ; la vía = la voie ; disculpen las molestias = veuillez nous excuser pour la gêne occasionnée.`,
        mensaje: `**Mensaje de voz de Daniela** (transcripción ; texto de entrenamiento)

«Oye, Hugo, soy Daniela. Bueno, te llamo por lo del sábado. Al final no vamos al cine, porque Marta está mala, la pobre... Pues nada, he pensado que podemos ir a la piscina municipal por la mañana y luego comer en mi casa. Mi madre hace tortilla, ¿vale? Quedamos a las diez y media delante de la piscina. Ah, y no te olvides de la toalla, ¿eh? Y si no puedes venir, mándame un mensaje antes del viernes. ¡Venga, un beso!»

*Vocabulario* : por lo del sábado = au sujet de samedi ; quedar = se donner rendez-vous ; olvidarse de = oublier ; la toalla = la serviette (de bain).`,
        radio: `**En la radio: «Jóvenes con ideas»** (transcripción ; texto de entrenamiento, personas ficticias)

— **Locutora**: Buenas tardes. Hoy hablamos con Tomás, un chico de quince años de Rosario, en Argentina. Hola, Tomás.

— **Tomás**: Hola, ¿qué tal?

— **Locutora**: Tomás, tú has creado una aplicación, ¿no?

— **Tomás**: Sí, bueno, con dos compañeros de clase. Se llama «Reciclá» y sirve para saber en qué contenedor hay que tirar cada cosa. Sacás una foto del objeto y la aplicación te dice si va al contenedor del plástico, del papel... o a ninguno.

— **Locutora**: ¡Qué buena idea! ¿Y cuántas personas la usan?

— **Tomás**: Empezamos en marzo y ahora tenemos unos tres mil usuarios, sobre todo en nuestra ciudad. No es mucho, pero estamos muy contentos.

— **Locutora**: ¿Y cuál es el próximo paso?

— **Tomás**: Queremos traducirla al portugués para los chicos de Brasil. Ah, y lo más difícil no fue programar: fue convencer a mi abuela de que separe la basura. (*risas*)

*Vocabulario* : el contenedor = la poubelle de tri ; tirar = jeter ; sacás (Argentine, avec *vos*) = sacas (tu prends) ; el próximo paso = la prochaine étape ; la basura = les déchets.`,
      },
      exercices: [
        { type: "qcm", question: "Tu entends : « *Mi abuela tiene sesenta y dos años.* » Quel âge a-t-elle ?", choix: ["72 ans", "62 ans", "52 ans", "26 ans"], reponse: 1, explication: "*sesenta* = 60, donc *sesenta y dos* = **62**. Ne confonds pas avec *setenta* (70) ni *cincuenta* (50). À l'oral, écoute bien le début du mot : **ses**-enta / **set**-enta." },
        { type: "saisie", texte: "anuncio", question: "Sur quelle voie faut-il monter dans le train ? (en chiffres)", reponses: ["14", "vía 14", "voie 14", "catorce", "vía catorce", "voie quatorze", "voie n° 14"], explication: "« *pueden subir al tren por la vía **catorce**, y no por la vía cuatro, como estaba previsto* » : voie **14**. Le piège : *cuatro* (4) est cité, mais avec *no*, c'est la voie prévue au départ. Ne confonds pas *catorce* (14) et *cuatro* (4)." },
        { type: "qcm", texte: "anuncio", question: "À quelle heure le train va-t-il partir ?", choix: ["12 h 15", "12 h 20", "12 h 35", "14 h 15"], reponse: 2, explication: "Départ prévu « *a las doce y cuarto* » (12 h 15) + « *un retraso de veinte minutos* » (20 minutes de retard) = **12 h 35**. Il fallait combiner deux informations." },
        { type: "vf", texte: "mensaje", question: "Daniela propose à Hugo d'aller au cinéma samedi.", reponse: false, explication: "Faux : « *Al final no vamos al cine* » (finalement, on ne va pas au cinéma). Elle propose la **piscine** le matin, puis un repas chez elle. Le mot *cine* est bien prononcé, mais après **no**." },
        { type: "qcm", texte: "mensaje", question: "Pourquoi le programme du samedi a-t-il changé ?", choix: ["La piscine est fermée.", "Hugo doit travailler.", "Marta est malade.", "Marta est méchante."], reponse: 2, explication: "« *porque Marta está mala, la pobre* » : *estar malo/a* = être **malade** (état). *Ser malo/a* voudrait dire « être méchant » : c'est ici *estar*, et *la pobre* (la pauvre) montre de la compassion." },
        { type: "saisie", texte: "mensaje", question: "Qu'est-ce que Hugo ne doit pas oublier d'apporter ? (réponds en français)", reponses: ["une serviette", "serviette", "sa serviette", "une serviette de bain", "serviette de bain", "sa serviette de bain", "toalla", "une serviette de plage", "serviette de plage", "sa serviette de plage"], explication: "« *no te olvides de la **toalla*** » : sa **serviette** (de bain), logique pour aller à la piscine." },
        { type: "qcm", texte: "mensaje", question: "Dans le message, que veut dire « *Mi madre hace tortilla, ¿vale?* » ?", choix: ["Ma mère fait une tortilla, d'accord ?", "Ma mère fait une tortilla, ça coûte combien ?", "Ma mère vend des tortillas.", "Ma mère fait une tortilla, tu viens ?"], reponse: 0, explication: "**¿vale?** = « d'accord ? » : un petit mot de la conversation, très fréquent en Espagne, qui demande l'accord de l'autre. Il n'a rien à voir ici avec le prix (*¿cuánto vale?* = combien ça coûte ?)." },
        { type: "qcm", texte: "radio", question: "À quoi sert l'application créée par Tomás ?", choix: ["à savoir dans quelle poubelle jeter chaque objet", "à apprendre le portugais", "à vendre des objets d'occasion", "à prendre de belles photos"], reponse: 0, explication: "« *sirve para saber en qué contenedor hay que tirar cada cosa* » : elle dit dans quelle poubelle de tri jeter un objet, à partir d'une photo. La photo n'est qu'un moyen ; le portugais est un projet (traduire l'application)." },
        { type: "saisie", texte: "radio", question: "Combien d'utilisateurs l'application a-t-elle environ ? (en chiffres, à la française : sans point ni virgule)", reponses: ["3000", "3 000", "tres mil", "trois mille"], explication: "« *ahora tenemos unos **tres mil** usuarios* » : environ **3 000**. *unos* devant un nombre = environ. Ne confonds pas *tres mil* (3 000) et *trescientos* (300). En Espagne, on écrit *3.000* avec un point ; en français, on écrit 3 000 (et 3,000 voudrait dire 3)." },
        { type: "redaction", texte: "radio", question: "1. Présente Tomás et son application en français : qui il est, d'où il vient, avec qui il a créé l'application, à quoi elle sert, depuis quand elle existe, combien de personnes l'utilisent, et son projet.\n2. Qu'est-ce qui a été le plus difficile pour lui ? Pourquoi est-ce drôle ?\n3. **Expression** (50 à 70 mots) : laisse un message vocal en espagnol à Tomás pour le féliciter et pose-lui deux questions.", corrige: "1. Tomás est un garçon de **15 ans** qui vit à **Rosario, en Argentine**. Avec **deux camarades de classe**, il a créé une application, « Reciclá », qui sert à **savoir dans quelle poubelle de tri jeter chaque objet** : on prend une photo, et l'application indique la bonne poubelle (plastique, papier...) ou aucune. Elle existe **depuis mars** et compte **environ 3 000 utilisateurs**, surtout dans sa ville. Son projet : **la traduire en portugais** pour les jeunes du Brésil.\n\n2. Le plus difficile n'a pas été de programmer, mais de **convaincre sa grand-mère de trier ses déchets**. C'est drôle parce qu'on s'attendait à une difficulté technique, et que c'est finalement un problème de famille (on entend des rires).\n\n3. Modèle :\n*¡Hola, Tomás! Soy Léa, una chica francesa. Te escuché en la radio y me encantó tu idea: ¡felicidades a ti y a tus compañeros! En mi colegio también reciclamos, pero muchos alumnos no saben qué contenedor usar. ¿Cuándo va a estar la aplicación en francés? ¿Y cómo convenciste por fin a tu abuela? ¡Un abrazo desde Francia!*\n\nPoints vérifiés : informations exactes et complètes ; interrogatifs avec accent et **¿ ?** (*¿Cuándo...? ¿Cómo...?*) ; indefinido (*escuché, encantó, convenciste*) ; futur proche (*va a estar*) ; formules d'un message oral (*¡Hola! Soy... Un abrazo*)." }
      ]
    }
  ]
};
