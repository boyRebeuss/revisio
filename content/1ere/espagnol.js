export default {
  chapitres: [
    {
      id: "indefinido-imperfecto",
      titre: "Raconter au passé : pretérito indefinido et imperfecto",
      theme: "Grammaire",
      cours: `
## Le pretérito indefinido (passé simple)
Il exprime une action **achevée, ponctuelle, située dans un passé révolu** (souvent avec *ayer, el año pasado, en 1936, aquel día*). C'est le temps du récit.

| | hablar | comer | vivir |
|---|---|---|---|
| yo | hablé | comí | viví |
| tú | hablaste | comiste | viviste |
| él/usted | habló | comió | vivió |
| nosotros | hablamos | comimos | vivimos |
| vosotros | hablasteis | comisteis | vivisteis |
| ellos/ustedes | hablaron | comieron | vivieron |

### Irréguliers forts (sans accent écrit aux 1re et 3e personnes)
| Infinitif | yo | él | ellos |
|---|---|---|---|
| tener | tuve | tuvo | tuvieron |
| estar | estuve | estuvo | estuvieron |
| hacer | hice | hizo | hicieron |
| poder | pude | pudo | pudieron |
| poner | puse | puso | pusieron |
| saber | supe | supo | supieron |
| querer | quise | quiso | quisieron |
| venir | vine | vino | vinieron |
| decir | dije | dijo | dijeron |
| traer | traje | trajo | trajeron |

- **ser** et **ir** ont la même forme : fui, fuiste, fue, fuimos, fuisteis, fueron.
- **dar** : di, diste, dio... ; **ver** : vi, viste, vio...
- Verbes en -ir à changement de voyelle (3e personnes) : *pedir* → pidió, pidieron ; *dormir* → durmió, durmieron ; *sentir* → sintió.
- *leer* → leyó, leyeron ; *construir* → construyó.
- Modifications orthographiques à la 1re personne : *llegar* → llegué, *buscar* → busqué, *empezar* → empecé.

## Le pretérito imperfecto (imparfait)
Il exprime la **description**, le **décor**, l'**habitude** ou une action **en cours** dans le passé.

| | hablar | comer / vivir |
|---|---|---|
| yo | hablaba | comía |
| tú | hablabas | comías |
| él | hablaba | comía |
| nosotros | hablábamos | comíamos |
| vosotros | hablabais | comíais |
| ellos | hablaban | comían |

Seulement trois irréguliers : **ser** (era, eras, era, éramos, erais, eran), **ir** (iba, ibas...), **ver** (veía, veías...).

## Combiner les deux
>! *Cuando Franco **murió** en 1975, España **era** un país aislado y muchos jóvenes **soñaban** con la democracia.* — l'événement (indefinido) surgit dans un décor (imperfecto).

> **À retenir** : indefinido = action terminée et datée, premier plan du récit ; imperfecto = description, habitude, arrière-plan. Ser et ir partagent les formes fui, fue, fueron.
`,
      exercices: [
        { type: "saisie", question: "Indefinido de *hablar*, ellos.", reponses: ["hablaron"], explication: "-ar, 3e pluriel : **hablaron**." },
        { type: "saisie", question: "Indefinido de *tener*, yo.", reponses: ["tuve"], explication: "Irrégulier fort : **tuve** (sans accent)." },
        { type: "saisie", question: "Indefinido de *hacer*, él.", reponses: ["hizo"], explication: "*hacer* → hice, hiciste, **hizo** (c → z devant o)." },
        { type: "saisie", question: "Indefinido de *decir*, ellos.", reponses: ["dijeron"], explication: "Radical en j : on écrit **dijeron** (et non dijieron)." },
        { type: "saisie", question: "Indefinido de *pedir*, ella.", reponses: ["pidió"], explication: "Verbe en -ir, e → i aux 3es personnes : **pidió**." },
        { type: "saisie", question: "Imperfecto de *ser*, nosotros.", reponses: ["éramos"], explication: "*ser* : era, eras, era, **éramos**, erais, eran." },
        { type: "saisie", question: "Imperfecto de *vivir*, ellos.", reponses: ["vivían"], explication: "-er/-ir : **vivían**." },
        { type: "qcm", question: "« De niño, (yo) ... al pueblo cada verano. »", choix: ["fui", "he ido", "iba", "iré"], reponse: 2, explication: "Habitude dans le passé → imperfecto : **iba**." },
        { type: "qcm", question: "« El 18 de julio de 1936, una parte del ejército ... contra la República. »", choix: ["se sublevó", "se sublevaba", "se ha sublevado", "se sublevará"], reponse: 0, explication: "Action ponctuelle et datée → indefinido : **se sublevó**." },
        { type: "redaction", question: "Mets ce récit au passé (indefinido ou imperfecto) et justifie deux choix : « Es de noche. Llueve. Mi abuelo sale de casa porque tiene miedo. Cruza la frontera y llega a Francia. »", corrige: "*Era de noche. Llovía. Mi abuelo salió de casa porque tenía miedo. Cruzó la frontera y llegó a Francia.*\n\n- *era, llovía, tenía* : **imperfecto**, car ce sont le décor et un état (description, arrière-plan).\n- *salió, cruzó, llegó* : **indefinido**, car ce sont des actions ponctuelles, achevées, qui font avancer le récit (premier plan).\n\nCe récit évoque l'exil républicain de 1939 (la Retirada)." }
      ]
    },
    {
      id: "perfecto-pluscuamperfecto",
      titre: "Le passé composé et le plus-que-parfait",
      theme: "Grammaire",
      cours: `
## Formation
**haber** + participe passé (invariable).

| | pretérito perfecto | pluscuamperfecto |
|---|---|---|
| yo | he hablado | había hablado |
| tú | has comido | habías comido |
| él | ha vivido | había vivido |
| nosotros | hemos visto | habíamos visto |
| vosotros | habéis hecho | habíais hecho |
| ellos | han dicho | habían dicho |

- Participes réguliers : -ar → **-ado**, -er/-ir → **-ido**.
- Participes irréguliers : *hacer* → hecho, *decir* → dicho, *escribir* → escrito, *ver* → visto, *poner* → puesto, *volver* → vuelto, *abrir* → abierto, *romper* → roto, *morir* → muerto, *descubrir* → descubierto, *resolver* → resuelto, *cubrir* → cubierto.
- On ne sépare jamais *haber* du participe, et les pronoms se placent avant : *Lo he visto.* *Nunca lo he visto.*
- L'auxiliaire est **toujours haber**, même pour les verbes de mouvement : *He ido* (je suis allé), *Se ha levantado*.

## Emplois du pretérito perfecto
Action passée dans une **période qui n'est pas terminée** ou qui a un **lien avec le présent** : *hoy, esta mañana, este año, últimamente, todavía no, ya, nunca, alguna vez*.
- *Este año he leído tres novelas.*
- *¿Has estado alguna vez en Cuba?*
- *Todavía no ha llegado.*

>! **Comparer** : *Esta mañana he visto a Ana* (la matinée fait partie d'aujourd'hui) / *Ayer vi a Ana* (période révolue → indefinido). Dans une grande partie de l'Amérique latine, aux Canaries et dans le nord-ouest de l'Espagne (Galice, Asturies), on utilise beaucoup plus l'indefinido.

## Le pluscuamperfecto
Action **antérieure** à une autre action passée :
*Cuando llegué al cine, la película ya había empezado.*

> **À retenir** : haber + participe invariable ; participes irréguliers à connaître par cœur ; perfecto = passé lié au présent ; pluscuamperfecto = passé du passé.
`,
      exercices: [
        { type: "saisie", question: "Participe passé de *escribir*.", reponses: ["escrito"], explication: "Irrégulier : **escrito**." },
        { type: "saisie", question: "Participe passé de *volver*.", reponses: ["vuelto"], explication: "Irrégulier : **vuelto**." },
        { type: "saisie", question: "Pretérito perfecto de *hacer*, nosotros.", reponses: ["hemos hecho"], explication: "**hemos hecho**." },
        { type: "saisie", question: "Pretérito perfecto de *ir*, ella (elle est allée).", reponses: ["ha ido"], explication: "Toujours l'auxiliaire *haber* : **ha ido**." },
        { type: "saisie", question: "Pluscuamperfecto de *decir*, ellos.", reponses: ["habían dicho"], explication: "*había* conjugué + *dicho* : **habían dicho**." },
        { type: "qcm", question: "« Esta semana ... a Cuba por primera vez. »", choix: ["haya ido", "había ido", "iba", "he ido"], reponse: 3, explication: "*Esta semana* : période non révolue qui inclut le moment où l'on parle → **he ido** (pretérito perfecto, usage d'Espagne). *Iba* (imparfait) ne convient pas à une action ponctuelle, *había ido* suppose un repère passé, *haya ido* est un subjonctif, impossible ici dans une proposition indépendante." },
        { type: "qcm", question: "« Cuando los bomberos llegaron, el edificio ya ... »", choix: ["se quemó", "se ha quemado", "se había quemado", "se quemaba"], reponse: 2, explication: "Action antérieure à *llegaron* → pluscuamperfecto : **se había quemado**." },
        { type: "vf", question: "« Lo he no visto » est correct.", reponse: false, explication: "On ne sépare pas *haber* du participe : *No lo he visto*." },
        { type: "redaction", question: "Écris 5 phrases sur ce que tu as fait cette année en espagnol (pretérito perfecto), dont une avec *todavía no* et une avec *nunca*, puis une phrase avec un pluscuamperfecto.", corrige: "Modèle :\n\n*Este año he estudiado mucho la historia de España. He leído un cuento de Gabriel García Márquez y he visto la película «Las trece rosas». Todavía no he viajado a Latinoamérica. Nunca he probado el mate. Antes de empezar el curso, ya había visitado el Museo del Prado con mis padres.*\n\nVérifie : *haber* + participe invariable, pronoms et négations placés devant *haber*." }
      ]
    },
    {
      id: "futuro-condicional",
      titre: "Le futur et le conditionnel",
      theme: "Grammaire",
      cours: `
## Formation
On ajoute les terminaisons à l'**infinitif entier**.

| | futur | conditionnel |
|---|---|---|
| yo | hablaré | hablaría |
| tú | hablarás | hablarías |
| él | hablará | hablaría |
| nosotros | hablaremos | hablaríamos |
| vosotros | hablaréis | hablaríais |
| ellos | hablarán | hablarían |

Mêmes terminaisons pour -er et -ir (*comeré, viviría*).

### Radicaux irréguliers (communs aux deux temps)
| Infinitif | radical | futur / conditionnel |
|---|---|---|
| tener | tendr- | tendré / tendría |
| poner | pondr- | pondré / pondría |
| salir | saldr- | saldré / saldría |
| venir | vendr- | vendré / vendría |
| poder | podr- | podré / podría |
| saber | sabr- | sabré / sabría |
| haber | habr- | habrá / habría |
| querer | querr- | querré / querría |
| hacer | har- | haré / haría |
| decir | dir- | diré / diría |

## Emplois du futur
- Action à venir : *En 2050, habrá más coches eléctricos.*
- **Hypothèse sur le présent** : *¿Dónde está Pablo? — Estará en casa.* (Il doit être chez lui.)
- Attention : après **cuando** (sens futur), on n'emploie **pas** le futur mais le **subjonctif présent** : *Cuando sea mayor, seré médica.*

## Emplois du conditionnel
- Politesse, souhait : *¿Podrías ayudarme? Me gustaría viajar.*
- Conseil : *Deberías dormir más. Yo que tú, estudiaría.*
- Hypothèse avec **si + subjonctif imparfait** : *Si tuviera tiempo, leería más.*
- Futur dans le passé : *Dijo que vendría.*
- Hypothèse sur le passé : *Serían las diez cuando llegó.* (Il devait être 10 h.)

> **À retenir** : infinitif + é, ás, á, emos, éis, án (futur) / ía, ías, ía, íamos, íais, ían (conditionnel) ; mêmes radicaux irréguliers ; jamais de futur ni de conditionnel après le « si » de condition (mais *No sé si vendrá* est correct : « si » interrogatif = « est-ce que ») ; cuando + subjonctif pour le futur.
`,
      exercices: [
        { type: "saisie", question: "Futur de *tener*, nosotros.", reponses: ["tendremos"], explication: "Radical *tendr-* : **tendremos**." },
        { type: "saisie", question: "Futur de *hacer*, yo.", reponses: ["haré"], explication: "Radical *har-* : **haré**." },
        { type: "saisie", question: "Futur de *haber* (il y aura).", reponses: ["habrá"], explication: "**habrá** = il y aura." },
        { type: "saisie", question: "Conditionnel de *decir*, ellos.", reponses: ["dirían"], explication: "Radical *dir-* : **dirían**." },
        { type: "saisie", question: "Conditionnel de *poder*, tú.", reponses: ["podrías"], explication: "Radical *podr-* : **podrías**." },
        { type: "qcm", question: "« Il doit être fatigué » (hypothèse sur le présent) :", choix: ["Debe ser cansado", "Estaría cansado", "Estará cansado", "Estuvo cansado"], reponse: 2, explication: "Le futur exprime une **supposition sur le présent** : *Estará cansado*." },
        { type: "qcm", question: "« Quand j'aurai 18 ans, je voterai. »", choix: ["Cuando tenga 18 años, votaré.", "Cuando tendré 18 años, votaré.", "Cuando tengo 18 años, votaría.", "Cuando tuviera 18 años, voto."], reponse: 0, explication: "*cuando* + sens futur → **subjonctif présent** : *Cuando tenga*." },
        { type: "vf", question: "« Si tendría dinero, viajaría » est correct.", reponse: false, explication: "Jamais de conditionnel après *si* : *Si tuviera dinero, viajaría*." },
        { type: "saisie", question: "Traduis : « Tu devrais lire ce roman. »", reponses: ["Deberías leer esta novela", "Deberías leer esa novela"], explication: "Conseil → conditionnel de *deber* : **deberías**." },
        { type: "redaction", question: "Imagine en 6 phrases la société de 2060 dans un pays hispanique (futur), puis donne deux conseils aux dirigeants actuels (conditionnel).", corrige: "Modèle :\n\n*En 2060, Madrid será una ciudad sin coches de gasolina. Habrá más zonas verdes y la gente podrá ir a trabajar en bicicleta. Muchos trabajos los harán robots. Hará más calor y faltará agua en el sur de España. Los jóvenes tendrán que adaptarse a un clima más seco.*\n\n*Conseils : Los gobiernos deberían invertir más en energía solar. Yo que ellos, protegería los ríos y ahorraría agua.*\n\nPoints vérifiés : radicaux irréguliers (*habrá, podrá, harán, hará, tendrán*), conditionnel de conseil (*deberían, protegería*)." }
      ]
    },
    {
      id: "subjuntivo-presente",
      titre: "Le subjonctif présent : formation et emplois",
      theme: "Grammaire",
      cours: `
## Formation
On part de la **1re personne du présent de l'indicatif**, on enlève le *-o* et on « inverse » la voyelle : **-ar → e**, **-er / -ir → a**.

| | hablar (hablo) | comer (como) | tener (tengo) |
|---|---|---|---|
| yo | hable | coma | tenga |
| tú | hables | comas | tengas |
| él | hable | coma | tenga |
| nosotros | hablemos | comamos | tengamos |
| vosotros | habléis | comáis | tengáis |
| ellos | hablen | coman | tengan |

- Les verbes en **-go** gardent le *g* partout : *hacer* → haga, *salir* → salga, *decir* → diga, *poner* → ponga.
- Diphtongues (sauf nosotros, vosotros) : *querer* → quiera, queramos ; *poder* → pueda, podamos.
- Verbes en -ir : *pedir* → pida, pidamos ; *dormir* → duerma, **durmamos** ; *sentir* → sienta, sintamos.
- Irréguliers : **ser** → sea, **ir** → vaya, **estar** → esté, **dar** → dé, **saber** → sepa, **haber** → haya, *conocer* → conozca.
- Orthographe : *llegar* → llegue, *buscar* → busque, *empezar* → empiece.

## Emplois principaux
1. **Volonté, ordre, souhait, demande** avec deux sujets différents : *Quiero que vengas. Te pido que te calles.*
2. **Ojalá** (pourvu que, j'espère que) : *¡Ojalá llueva!*
3. **Sentiments** : *Me alegra que estés aquí. Me molesta que hablen tan alto.*
4. **Jugements impersonnels** : *Es importante que todos voten. Es necesario que...*
5. **Doute, opinion négative** : *No creo que sea verdad.* (mais *Creo que es verdad* + indicatif)
6. **But** : *para que* : *Lo explico para que lo entiendas.*
7. **Cuando + action future** (et *en cuanto, hasta que, mientras*) : *Cuando llegues, llámame.*
8. **Défense** (no + subjonctif) : *No grites.*
9. **Relative à antécédent hypothétique** : *Busco un piso que tenga terraza.*

>! **Attention** : même sujet → infinitif : *Quiero viajar* ; deux sujets → *que* + subjonctif : *Quiero que viajes*.

> **À retenir** : radical de la 1re personne du présent + voyelle inversée ; sea, vaya, esté, dé, sepa, haya ; cuando + futur = cuando + subjonctif présent.
`,
      exercices: [
        { type: "saisie", question: "Subjonctif présent de *hablar*, nosotros.", reponses: ["hablemos"], explication: "-ar → e : **hablemos**." },
        { type: "saisie", question: "Subjonctif présent de *hacer*, tú.", reponses: ["hagas"], explication: "*hago* → **hagas**." },
        { type: "saisie", question: "Subjonctif présent de *ser*, ellos.", reponses: ["sean"], explication: "*ser* → sea... **sean**." },
        { type: "saisie", question: "Subjonctif présent de *ir*, yo.", reponses: ["vaya"], explication: "*ir* → **vaya**." },
        { type: "saisie", question: "Subjonctif présent de *dormir*, nosotros.", reponses: ["durmamos"], explication: "Verbe en -ir : o → u à nosotros : **durmamos**." },
        { type: "saisie", question: "Complète : « Mis padres quieren que yo (estudiar) medicina. »", reponses: ["estudie"], explication: "Volonté + deux sujets → subjonctif : **estudie**." },
        { type: "saisie", question: "Complète : « Cuando (tú, llegar) a Madrid, llámame. »", reponses: ["llegues"], explication: "*cuando* + futur → subjonctif présent ; *g → gu* devant e : **llegues**." },
        { type: "qcm", question: "« No creo que ... razón. »", choix: ["tienes", "tuviste", "tendrás", "tengas"], reponse: 3, explication: "Opinion niée → subjonctif : **tengas**." },
        { type: "qcm", question: "Quelle phrase est correcte ?", choix: ["Creo que sea importante.", "Quiero que voy contigo.", "Es importante que participes.", "Ojalá vienes mañana."], reponse: 2, explication: "Jugement impersonnel → subjonctif : *es importante que participes*. Les autres : *creo que es*, *quiero ir contigo*, *ojalá vengas*." },
        { type: "redaction", question: "Tu écris à un élu de ta ville. Formule 6 demandes ou souhaits pour améliorer la vie des jeunes en utilisant le subjonctif (quiero que, es necesario que, ojalá, para que, pido que, cuando).", corrige: "Modèle :\n\n*Señor alcalde:*\n*Le escribo porque quiero que la ciudad sea más agradable para los jóvenes. Es necesario que haya más carriles bici y que los autobuses pasen más a menudo. Le pido que abra la biblioteca los domingos para que podamos estudiar. Ojalá construyan un espacio cultural en el centro. Cuando abran el nuevo centro juvenil, participaré en sus actividades.*\n*Atentamente,*\n\nSubjonctifs : *sea, haya, pasen, abra, podamos, construyan, abran* (cuando + futur → subjonctif présent, puis futur dans la principale : *participaré*). On vouvoie l'élu (*le escribo, le pido*, 3e personne)." }
      ]
    },
    {
      id: "subjuntivo-imperfecto",
      titre: "Le subjonctif imparfait et la concordance des temps",
      theme: "Grammaire",
      cours: `
## Formation
On part de la **3e personne du pluriel du pretérito indefinido**, on enlève **-ron** et on ajoute **-ra** (ou **-se**).

| | hablar (hablaron) | tener (tuvieron) | ser / ir (fueron) |
|---|---|---|---|
| yo | hablara | tuviera | fuera |
| tú | hablaras | tuvieras | fueras |
| él | hablara | tuviera | fuera |
| nosotros | habláramos | tuviéramos | fuéramos |
| vosotros | hablarais | tuvierais | fuerais |
| ellos | hablaran | tuvieran | fueran |

- Forme en -se : *hablase, tuviese, fuese* (même sens).
- Accent écrit à **nosotros** : *habláramos, comiéramos*.
- Tous les irréguliers de l'indefinido se retrouvent : *hacer* → hicieron → hiciera ; *decir* → dijeron → dijera ; *poder* → pudiera ; *pedir* → pidiera ; *dormir* → durmiera ; *estar* → estuviera ; *leer* → leyera.

## La concordance des temps
Si le verbe principal est au **passé** (indefinido, imperfecto, pluscuamperfecto) ou au **conditionnel**, le subjonctif de la subordonnée est à l'**imparfait**. L'espagnol respecte cette règle, contrairement au français parlé.

Attention : après un **pretérito perfecto** (passé lié au présent), on emploie en général le **subjonctif présent** : *Me ha pedido que venga mañana.*

| Principale | Subordonnée |
|---|---|
| Quiero que | vengas |
| Quería / Quise / Querría que | vinieras |
| Le pido que | se calle |
| Le pedí que | se callara |

>! *El dictador prohibió que los periódicos publicaran la noticia.* (le français dit « publient », l'espagnol exige l'imparfait du subjonctif).

## Autres emplois
- **Hypothèse irréelle** : **si + subjonctif imparfait, conditionnel** : *Si fuera presidente, cambiaría la ley.*
- **Como si** + subjonctif imparfait : *Habla como si lo supiera todo.*
- **Souhait irréalisable** : *¡Ojalá tuviera alas!*
- **Politesse** : *Quisiera un café.*

> **À retenir** : 3e pluriel de l'indefinido sans -ron + ra ; verbe principal au passé → subjonctif imparfait ; si + subj. imparfait + conditionnel.
`,
      exercices: [
        { type: "saisie", question: "Subjonctif imparfait de *tener*, yo (forme en -ra).", reponses: ["tuviera", "tuviese"], explication: "*tuvieron* → **tuviera** (ou *tuviese*)." },
        { type: "saisie", question: "Subjonctif imparfait de *hacer*, ellos.", reponses: ["hicieran", "hiciesen"], explication: "*hicieron* → **hicieran**." },
        { type: "saisie", question: "Subjonctif imparfait de *hablar*, nosotros.", reponses: ["habláramos", "hablásemos"], explication: "Accent écrit à nosotros : **habláramos**." },
        { type: "saisie", question: "Subjonctif imparfait de *ser*, tú.", reponses: ["fueras", "fueses"], explication: "*fueron* → **fueras**." },
        { type: "saisie", question: "Subjonctif imparfait de *decir*, él.", reponses: ["dijera", "dijese"], explication: "*dijeron* → **dijera**." },
        { type: "saisie", question: "Concordance : « El profesor nos pidió que (leer) el texto. »", reponses: ["leyéramos", "leyésemos"], explication: "Principale au passé (*pidió*) → subj. imparfait : *leyeron* → **leyéramos**." },
        { type: "qcm", question: "« Si ... más tiempo, aprendería a tocar la guitarra. »", choix: ["tengo", "tendría", "tuviera", "tenga"], reponse: 2, explication: "Hypothèse irréelle : **si + subjonctif imparfait** + conditionnel." },
        { type: "qcm", question: "« Franco prohibió que se ... el catalán en la escuela. »", choix: ["enseña", "enseñe", "enseñara", "enseñaría"], reponse: 2, explication: "Interdiction (subjonctif) + principale au passé → **enseñara**." },
        { type: "vf", question: "« Me gustaría que vengas » respecte la concordance des temps.", reponse: false, explication: "Après un conditionnel, il faut le subjonctif imparfait : *Me gustaría que vinieras*. (On entend *que vengas* dans une partie de l'Amérique latine, mais la norme, attendue au bac, est *vinieras*.)" },
        { type: "redaction", question: "Écris 5 phrases commençant par « Si yo fuera... » ou « Si viviera en... » pour imaginer ta vie dans un pays hispanique, puis une phrase avec « como si ».", corrige: "Modèle :\n\n*Si viviera en Buenos Aires, iría todos los domingos al barrio de San Telmo. Si fuera argentina, tomaría mate con mis amigos. Si tuviera dinero, viajaría por la Patagonia. Si hablara mejor español, podría estudiar en la universidad. Si pudiera, iría a la Plaza de Mayo un jueves para escuchar la historia de las Madres y las Abuelas.*\n\n*Mi hermano habla de Argentina como si hubiera nacido allí.* (*como si* + subjonctif plus-que-parfait pour un passé : forme *hubiera* + participe)." }
      ]
    },
    {
      id: "imperativo-enclisis",
      titre: "L'impératif, la défense et l'enclise",
      theme: "Grammaire",
      cours: `
## L'impératif affirmatif
| | hablar | comer | escribir |
|---|---|---|---|
| tú | habla | come | escribe |
| usted | hable | coma | escriba |
| nosotros | hablemos | comamos | escribamos |
| vosotros | hablad | comed | escribid |
| ustedes | hablen | coman | escriban |

- **tú** = 3e personne du singulier du présent : *habla, piensa, duerme*.
- **vosotros** = infinitif avec **-d** au lieu de -r : *hablad, venid*.
- **usted, nosotros, ustedes** = subjonctif présent.
- Irréguliers à la 2e personne du singulier : **ten** (tener), **ven** (venir), **pon** (poner), **sal** (salir), **haz** (hacer), **di** (decir), **ve** (ir), **sé** (ser).

## La défense (impératif négatif)
**no + subjonctif présent** à toutes les personnes : *no hables, no hable, no hablemos, no habléis, no hablen*. *¡No tengas miedo! ¡No vayáis!*

## L'enclise
Les pronoms compléments et réfléchis se **soudent à la fin** :
- de l'**impératif affirmatif** : *dime, siéntate, cómelo, dámelo* ;
- de l'**infinitif** : *Quiero decírtelo* (ou *Te lo quiero decir*) ;
- du **gérondif** : *Está explicándolo* (ou *Lo está explicando*).

Règles :
- Ordre : **indirect avant direct** : *dímelo* (dis-le-moi). *le / les* devant *lo, la* deviennent **se** : *dáselo* (donne-le-lui).
- On ajoute un **accent écrit** pour garder l'accent tonique : *explica* → *explícame*, *dar* → *dárselo*.
- À **vosotros**, on supprime le **-d** devant *os* : *levantad + os* → **levantaos** (exception : *idos*).
- À **nosotros**, on supprime le **-s** devant *nos* et *se* : *sentemos + nos* → **sentémonos** ; *digamos + se + lo* → *digámoselo*.
- À la défense, **pas d'enclise** : *¡No te sientes! ¡No me lo digas!*

> **À retenir** : impératif tú = 3e pers. du présent (sauf ten, ven, pon, sal, haz, di, ve, sé) ; défense = no + subjonctif ; enclise à l'impératif affirmatif, à l'infinitif et au gérondif, jamais à la défense.
`,
      exercices: [
        { type: "saisie", question: "Impératif de *hacer*, tú.", reponses: ["haz"], explication: "Irrégulier : **haz**." },
        { type: "saisie", question: "Impératif de *venir*, vosotros.", reponses: ["venid"], explication: "Infinitif, -r → -d : **venid**." },
        { type: "saisie", question: "Impératif de *escuchar*, ustedes.", reponses: ["escuchen"], explication: "Ustedes → subjonctif : **escuchen**." },
        { type: "saisie", question: "Défense de *salir*, tú (ne sors pas).", reponses: ["no salgas"], explication: "no + subjonctif : **no salgas**." },
        { type: "saisie", question: "Écris avec enclise : *sentarse*, tú (assieds-toi).", reponses: ["siéntate"], explication: "*sienta* + *te* → **siéntate** (accent écrit ajouté)." },
        { type: "saisie", question: "Écris avec enclise : *levantarse*, vosotros (levez-vous).", reponses: ["levantaos"], explication: "*levantad* + *os* → le d tombe : **levantaos**." },
        { type: "saisie", question: "Écris avec enclise : *decir*, tú + me + lo (dis-le-moi).", reponses: ["dímelo"], explication: "*di* + *me* + *lo* → **dímelo**." },
        { type: "qcm", question: "« Ne me le dis pas » :", choix: ["No dímelo", "No me lo dices", "No me lo digas", "No lo me digas"], reponse: 2, explication: "Défense : pas d'enclise, pronoms devant le subjonctif : **No me lo digas**." },
        { type: "qcm", question: "« Donne-le-lui » (le livre, à Ana) :", choix: ["Dáselo", "Dáleló", "Dálelo", "Lo le da"], reponse: 0, explication: "*le + lo* → **se lo** : *dáselo*." },
        { type: "redaction", question: "Rédige une affiche de 6 consignes pour un usage responsable des réseaux sociaux, en alternant impératif affirmatif (tú) avec enclise et défense.", corrige: "Modèle :\n\n**Redes sociales: ¡úsalas bien!**\n1. *Piensa antes de publicar.*\n2. *No compartas fotos de tus amigos sin su permiso.*\n3. *Protege tu contraseña: no la compartas y cámbiala a menudo.*\n4. *No creas todo lo que lees: compruébalo en otras fuentes.*\n5. *Si sufres ciberacoso, no te calles: cuéntaselo a un adulto.*\n6. *Desconéctate un rato cada día.*\n\nPoints vérifiés : enclise avec accent (*úsalas, compruébalo, cuéntaselo, desconéctate*), défense sans enclise (*no te calles, no compartas, no creas*)." }
      ]
    },
    {
      id: "ser-estar-por-para",
      titre: "Ser et estar approfondis ; por et para",
      theme: "Grammaire",
      cours: `
## Ser et estar : révision approfondie
| ser | estar |
|---|---|
| identité, nature, origine, profession | localisation d'une personne ou d'un objet |
| caractéristique essentielle | état, résultat, circonstance |
| heure, date, prix global | estar + gérondif (action en cours) |
| **lieu d'un événement** : *La manifestación es en la plaza.* | *El ayuntamiento está en la plaza.* |
| **voix passive** : *El Guernica fue pintado por Picasso.* | **résultat d'une action** : *La puerta está cerrada.* |
| *Es necesario / Es importante que...* | *Estar de acuerdo, estar de pie, estar de vacaciones* |

### Adjectifs qui changent de sens
| | ser | estar |
|---|---|---|
| listo | intelligent | prêt |
| rico | riche | délicieux |
| malo | méchant, mauvais | malade |
| aburrido | ennuyeux | qui s'ennuie |
| despierto | éveillé, vif d'esprit | réveillé |
| atento | prévenant | attentif |
| verde | vert (couleur) | pas mûr |

On dit toujours **estar muerto**, **estar vivo** ; on dit **estar casado** (on entend aussi *ser casado / soltero* pour l'état civil).

## Por et para
**Para** regarde vers un **but, une destination** :
- but : *Estudio para ser periodista. Para que...*
- destination : *Salgo para Lima.*
- destinataire : *Este regalo es para ti.*
- échéance : *para el lunes*.
- point de vue : *Para mí, es injusto.*

**Por** exprime la **cause, le moyen, le passage** :
- cause : *Lo hizo por amor. Gracias por tu ayuda.*
- complément d'agent : *escrito por Lorca*.
- lieu de passage, lieu vague : *Paseo por el parque. Vive por aquí.*
- moyen : *por teléfono, por correo*.
- durée, moment vague : *por la mañana, por unos días*.
- échange, prix : *Lo compré por diez euros.*
- en faveur de : *luchar por la libertad*.
- distribution : *dos veces por semana, el 20 por ciento*.

>! *Luchó por sus hijos* (à cause d'eux, en leur faveur) / *Trabaja para sus hijos* (à leur intention, but).

> **À retenir** : ser pour définir, estar pour situer et décrire un état ; passif = ser + participe, résultat = estar + participe ; para = but, destination ; por = cause, moyen, passage.
`,
      exercices: [
        { type: "qcm", question: "« El concierto ... en el estadio. »", choix: ["está", "queda", "hay", "es"], reponse: 3, explication: "Lieu d'un **événement** → *ser* : *El concierto es en el estadio*." },
        { type: "qcm", question: "« Las cartas ... escritas por un prisionero en 1940. » (voix passive)", choix: ["estuvieron", "fueron", "hubieron", "habían"], reponse: 1, explication: "Voix passive (action datée, avec complément d'agent) → **ser** + participe accordé : *fueron escritas*. *Haber* ne forme pas de passif et son participe resterait invariable (*habían escrito*) ; *estuvieron escritas* ne convient pas à une action ponctuelle." },
        { type: "saisie", question: "Complète avec ser ou estar conjugué : « Esta paella ... muy rica. » (délicieuse)", reponses: ["está"], explication: "*estar rico* = être délicieux ; *ser rico* = être riche." },
        { type: "saisie", question: "Complète avec ser ou estar : « Mi abuelo ya ... muerto. » (il est mort, état actuel)", reponses: ["está"], explication: "*Estar muerto* (état résultant). Attention : avec une date, on emploie le passé simple : *Mi abuelo murió en 2010*." },
        { type: "saisie", question: "Por ou para ? « Gracias ... tu ayuda. »", reponses: ["por"], explication: "Cause → **por**." },
        { type: "saisie", question: "Por ou para ? « Ahorro dinero ... viajar a México. »", reponses: ["para"], explication: "But → **para**." },
        { type: "saisie", question: "Por ou para ? « Los desaparecidos fueron buscados ... sus madres. »", reponses: ["por"], explication: "Complément d'agent → **por**." },
        { type: "saisie", question: "Por ou para ? « ... mí, la memoria es esencial. »", reponses: ["para"], explication: "Point de vue → **para mí**." },
        { type: "vf", question: "« Estoy listo » signifie « Je suis intelligent ».", reponse: false, explication: "*estar listo* = être prêt ; *ser listo* = être intelligent." },
        { type: "redaction", question: "Traduis et justifie l'emploi de ser/estar et por/para : « Le tableau Guernica a été peint par Picasso pour l'Exposition universelle de 1937. Aujourd'hui, il est à Madrid ; pour beaucoup, c'est un symbole de paix. »", corrige: "*El cuadro Guernica fue pintado por Picasso para la Exposición Universal de 1937. Hoy está en Madrid (en el Museo Reina Sofía); para muchos, es un símbolo de paz.*\n\n- *fue pintado* : voix passive → **ser** + participe accordé.\n- *por Picasso* : complément d'agent → **por**.\n- *para la Exposición* : destination, but → **para**.\n- *está en Madrid* : localisation d'un objet → **estar**.\n- *para muchos* : point de vue → **para**.\n- *es un símbolo* : définition, identité → **ser**." }
      ]
    },
    {
      id: "tournures-obligation",
      titre: "Tournures affectives et expression de l'obligation",
      theme: "Grammaire",
      cours: `
## Les tournures affectives
Comme *gustar*, de nombreux verbes ont pour sujet la chose qui provoque le sentiment, la personne étant un pronom complément (*me, te, le, nos, os, les*).

| Verbe / tournure | Sens |
|---|---|
| gustar, encantar | aimer, adorer |
| interesar | intéresser |
| molestar | déranger, gêner |
| preocupar | inquiéter |
| sorprender | surprendre |
| doler | faire mal |
| quedar (bien / mal) | aller (bien / mal), rester |
| apetecer | avoir envie |
| dar miedo / pena / vergüenza / igual | faire peur / de la peine / honte / être égal |
| hacer gracia | amuser |
| costar (trabajo) | avoir du mal à |

- Accord : *Me preocupa el cambio climático. Me preocupan las guerras.*
- Avec infinitif ou *que* + **subjonctif** : *Me da miedo que no vuelva. Me molesta que mientan.*
- Insistance : *A mí me da igual. A los jóvenes les interesan las redes.*
- Au passé : *Le encantó la película. Nos dieron miedo sus palabras.*

## L'obligation
| Tournure | Valeur | Exemple |
|---|---|---|
| **hay que** + infinitif | impersonnelle, générale | *Hay que respetar a los demás.* |
| **tener que** + infinitif | personnelle | *Tengo que estudiar.* |
| **deber** + infinitif | morale | *Debemos proteger el planeta.* |
| **es necesario / es preciso** + inf. ou *que* + subj. | impersonnelle | *Es necesario que actuemos.* |
| **hace falta** + inf. / nom / *que* + subj. | besoin | *Hace falta más diálogo.* |
| **necesitar** | avoir besoin | *Necesito ayuda.* |

- *Hay que* est invariable et ne prend jamais de sujet : « nous devons partir » = *tenemos que irnos* (ou, au sens général, *hay que irse*).
- *deber de* + infinitif exprime plutôt la probabilité : *Debe de ser tarde.*
- Au passé : *Tuve que irme. Había que trabajar mucho.*

>! Absence d'obligation : *No hace falta que vengas. No tienes que hacerlo.* Interdiction : *No se puede fumar. Está prohibido fumar.*

> **À retenir** : verbes affectifs = pronom + verbe accordé avec la chose ; hay que (général) ≠ tener que (personnel) ; es necesario que / hace falta que + subjonctif.
`,
      exercices: [
        { type: "saisie", question: "Complète : « A los jóvenes les ... (preocupar) los problemas del planeta. »", reponses: ["preocupan"], explication: "Sujet pluriel (*los problemas*) → **preocupan**." },
        { type: "saisie", question: "Complète avec le pronom : « A mi abuela ... dan miedo los aviones. »", reponses: ["le"], explication: "*a mi abuela* = a ella → **le**." },
        { type: "saisie", question: "Traduis : « Ça m'est égal. »", reponses: ["Me da igual", "Me es igual", "Me da lo mismo", "A mí me da igual", "A mí me da lo mismo"], explication: "*dar igual* : **me da igual**." },
        { type: "saisie", question: "Complète : « Me molesta que la gente no (respetar) las normas. »", reponses: ["respete"], explication: "Tournure affective + *que* → subjonctif : **respete**." },
        { type: "qcm", question: "« Il faut lutter contre les inégalités » (en général) :", choix: ["Tiene que luchar contra las desigualdades", "Hay que lucha contra las desigualdades", "Hay que luchar contra las desigualdades", "Es que luchar contra las desigualdades"], reponse: 2, explication: "Obligation impersonnelle : **hay que** + infinitif." },
        { type: "qcm", question: "« Je dois rentrer avant minuit » (obligation personnelle) :", choix: ["Tengo que volver antes de medianoche", "Hay que volver antes de medianoche", "Hace falta volver yo antes de medianoche", "Tengo de volver antes de medianoche"], reponse: 0, explication: "Obligation personnelle : **tener que** + infinitif." },
        { type: "saisie", question: "Complète : « Es necesario que todos (participar). »", reponses: ["participen"], explication: "*es necesario que* + subjonctif : **participen**." },
        { type: "vf", question: "« No hace falta que vengas » signifie « Il ne faut surtout pas que tu viennes ».", reponse: false, explication: "Cela signifie « **ce n'est pas la peine** que tu viennes » (absence d'obligation)." },
        { type: "redaction", question: "En 6 phrases, exprime ce qui t'inquiète, te dérange et te fait plaisir dans le monde actuel, puis propose deux solutions avec deux tournures d'obligation différentes.", corrige: "Modèle :\n\n*Me preocupa mucho el cambio climático y me dan miedo los incendios que hay cada verano en España. Me molesta que algunos políticos no escuchen a los científicos. También me da pena que tantos migrantes mueran en el mar. En cambio, me encanta que los jóvenes se movilicen. Me sorprenden las nuevas energías limpias.*\n\n*Soluciones : Hay que consumir menos y reciclar más. Es necesario que los gobiernos inviertan en transporte público.*" }
      ]
    },
    {
      id: "traduire-on-devenir-hace",
      titre: "Traduire « on », « devenir » et « il y a » (temps)",
      theme: "Grammaire",
      cours: `
## Traduire « on »
| Tournure | Quand l'employer | Exemple |
|---|---|---|
| **se** + verbe à la 3e personne (accordé avec le nom) | « on » général, impersonnel | *Se habla español. Se venden pisos.* |
| 3e personne du pluriel | « on » qui exclut le locuteur (les gens, eux) | *Dicen que va a llover. Me han robado el móvil.* |
| **uno / una** + 3e pers. sing. | obligatoire avec un verbe pronominal ; on = n'importe qui, souvent moi | *Uno se acostumbra a todo.* |
| **nosotros** | on = nous | *Mañana vamos al cine.* |
| **tú** (2e pers.) | généralisation familière | *Cuando eres joven, no piensas en eso.* |

Attention : avec *se*, le verbe s'accorde avec le nom : *Se vende piso / Se venden pisos*. Devant une personne précédée de *a*, le verbe reste au singulier : *Se detuvo a los manifestantes.*

## Traduire « devenir »
| Verbe | Nuance | Exemple |
|---|---|---|
| **ponerse** + adjectif | changement passager, physique ou d'humeur | *Se puso roja. Se puso nervioso.* |
| **volverse** + adjectif | changement profond, durable, souvent négatif et involontaire | *Se volvió loco. Se ha vuelto egoísta.* |
| **hacerse** + nom/adj. | évolution volontaire ou progressive (profession, idéologie, richesse) | *Se hizo médico. Se hizo rico.* |
| **llegar a ser** | aboutissement d'un long effort | *Llegó a ser presidenta.* |
| **convertirse en** + nom | transformation radicale | *Se convirtió en un símbolo.* |
| **quedarse** + adj. | résultat d'un événement, souvent une perte | *Se quedó ciego. Se quedó sorprendido.* |

## Traduire « il y a » temporel, « depuis », « ça fait... que »
- **hace** + durée = il y a (dans le passé) : *Llegó hace dos años.*
- **desde hace** + durée = depuis (avec le présent) : *Vivo aquí desde hace tres años.*
- **hace** + durée + **que** + présent : *Hace tres años que vivo aquí.*
- **llevar** + durée + **gérondif** : *Llevo tres años viviendo aquí.* (ça fait trois ans que...)
- **desde** + date / moment : *desde 1975, desde el lunes*.
- Au passé : *hacía* + durée + *que* + imparfait : *Hacía un año que vivía allí cuando estalló la guerra.*
- Durée jusqu'à maintenant au négatif : *Hace un mes que no lo veo.*

> **À retenir** : on = se + verbe accordé, 3e pluriel, uno (verbe pronominal) ; devenir = ponerse (passager), volverse (profond), hacerse (volontaire), llegar a ser (effort), convertirse en (+ nom), quedarse (résultat) ; il y a = hace, depuis = desde hace, ça fait... que = llevar + gérondif.
`,
      exercices: [
        { type: "saisie", question: "Traduis avec *se* : « On vend des maisons. »", reponses: ["Se venden casas"], explication: "*se* + verbe accordé avec le nom pluriel : **Se venden casas**." },
        { type: "qcm", question: "« On s'habitue à tout » :", choix: ["Se se acostumbra a todo", "Acostumbra a todo", "Se acostumbran a todo", "Uno se acostumbra a todo"], reponse: 3, explication: "Verbe pronominal → **uno** : *Uno se acostumbra a todo*." },
        { type: "saisie", question: "Traduis : « Il est devenu tout rouge. » (passager)", reponses: ["Se puso rojo", "Se puso muy rojo", "Se puso todo rojo", "Se puso colorado", "Se puso todo colorado", "Se puso muy colorado"], explication: "Changement passager → **ponerse** : *Se puso rojo*." },
        { type: "saisie", question: "Complète : « Frida Kahlo ... en un icono mundial. »", reponses: ["se convirtió", "se ha convertido"], explication: "*devenir* + nom, transformation → **convertirse en**." },
        { type: "qcm", question: "« Après des années d'efforts, elle est devenue ministre » :", choix: ["Se puso ministra", "Se volvió ministra", "Llegó a ser ministra", "Se quedó ministra"], reponse: 2, explication: "Aboutissement d'un effort → **llegar a ser**." },
        { type: "qcm", question: "« Il est devenu aveugle après l'accident » :", choix: ["Se quedó ciego", "Se puso ciego", "Se hizo ciego", "Llegó a ser ciego"], reponse: 0, explication: "Résultat d'un événement, perte → **quedarse**." },
        { type: "saisie", question: "Traduis : « Il y a cinquante ans » (temporel)", reponses: ["hace cincuenta años", "Hace 50 años"], explication: "il y a + durée = **hace** + durée." },
        { type: "saisie", question: "Complète avec *llevar* : « (Yo) ... dos años estudiando español. »", reponses: ["llevo"], explication: "*llevar* + durée + gérondif : **llevo**." },
        { type: "vf", question: "« Vivo en Sevilla desde hace 2015 » est correct.", reponse: false, explication: "*desde hace* + **durée** ; avec une date : *desde 2015*." },
        { type: "redaction", question: "Traduis et commente tes choix : « On dit qu'il y a quarante ans, ce quartier était pauvre. Depuis, beaucoup d'habitants sont devenus riches et le quartier est devenu à la mode. On y vit bien. »", corrige: "*Dicen que hace cuarenta años este barrio era pobre. Desde entonces, muchos vecinos se han hecho ricos y el barrio se ha puesto de moda. Aquí se vive bien.*\n\n- *Dicen que* : « on » qui exclut le locuteur → 3e personne du pluriel.\n- *hace cuarenta años* : « il y a » temporel → **hace**.\n- *se han hecho ricos* : évolution progressive → **hacerse**.\n- *se ha puesto de moda* : expression figée *ponerse de moda* (on pourrait dire *se ha convertido en un barrio de moda*).\n- *se vive bien* : « on » impersonnel → *se* + 3e personne du singulier." }
      ]
    },
    {
      id: "identites-diversite",
      titre: "Identités et échanges ; Diversité et inclusion",
      theme: "Axes culturels",
      cours: `
## Axe « Identités et échanges » : les migrations
Le monde hispanique est marqué par des **mouvements de population** dans les deux sens.
- **L'exil républicain** : en 1939, à la fin de la guerre civile, près de 450 000 Espagnols franchissent les Pyrénées vers la France (*la Retirada*) ; beaucoup sont internés dans des camps (Argelès, Saint-Cyprien). D'autres partent au Mexique, accueillis par le président Lázaro Cárdenas.
- **L'émigration économique** des années 1960 : des centaines de milliers d'Espagnols partent travailler en France, en Allemagne, en Suisse.
- **L'Espagne terre d'immigration** depuis les années 1990 : Latino-Américains (Équateur, Colombie, Venezuela...), Marocains, Roumains. Les migrants qui traversent le détroit de Gibraltar ou rejoignent les Canaries en **patera** ou en **cayuco** risquent leur vie ; les clôtures (**vallas**) de Ceuta et Melilla symbolisent la frontière entre l'Europe et l'Afrique.
- **La frontière Mexique - États-Unis** : environ 3 000 km, un mur sur une partie du tracé ; les migrants centraméricains voyagent parfois sur le train de marchandises surnommé **la Bestia**. Aux États-Unis vivent plus de 60 millions d'Hispaniques ; les **Chicanos** (Mexicains-Américains) revendiquent une double culture ; le **spanglish** mélange espagnol et anglais.
- Les **balseros** cubains ont tenté de rejoindre la Floride sur des radeaux (crise de 1994).

## Axe « Diversité et inclusion »
- **Les peuples autochtones** : en Amérique latine, des dizaines de millions de personnes parlent des langues amérindiennes : le **quechua** (Andes), l'**aymara** (Bolivie, Pérou), le **guaraní** (langue officielle au Paraguay avec l'espagnol), le **náhuatl** (Mexique), les langues **mayas** (Guatemala, Mexique). Les **Mapuches** du Chili et d'Argentine luttent pour leurs terres.
- Figures : **Rigoberta Menchú** (Guatemala), prix Nobel de la paix en 1992 pour la défense des droits des peuples indigènes ; **Evo Morales**, premier président d'origine indigène de Bolivie (2006).
- **L'Espagne plurielle** : catalan, basque, galicien ; débats sur l'indépendance de la Catalogne (référendum de 2017).
- **Égalité femmes-hommes** : le mouvement **#NiUnaMenos** (Argentine, 2015) contre les féminicides ; l'Espagne a adopté une loi contre les violences de genre en 2004.
- Droits LGBT : l'Espagne a légalisé le mariage homosexuel en **2005**, l'Argentine en 2010.
- Handicap : l'organisation espagnole **ONCE** (aveugles) est un modèle d'inclusion.

## Vocabulaire utile
| Espagnol | Français |
|---|---|
| emigrar / inmigrar | émigrer / immigrer |
| el exilio, exiliarse | l'exil, s'exiler |
| la frontera, cruzar la frontera | la frontière, la traverser |
| los papeles, los sin papeles | les papiers, les sans-papiers |
| el desarraigo | le déracinement |
| la acogida, acoger | l'accueil, accueillir |
| la integración, la discriminación | l'intégration, la discrimination |
| el mestizaje | le métissage |
| los pueblos originarios / indígenas | les peuples autochtones |

> **À retenir** : exil de 1939 (la Retirada), émigration des années 1960, immigration actuelle (pateras, vallas de Ceuta y Melilla), frontière Mexique - États-Unis et Chicanos ; diversité linguistique (quechua, guaraní, náhuatl...) ; Rigoberta Menchú, #NiUnaMenos.
`,
      exercices: [
        { type: "qcm", question: "Comment appelle-t-on l'exode des républicains espagnols vers la France en 1939 ?", choix: ["la Reconquista", "la Retirada", "la Movida", "la Transición"], reponse: 1, explication: "**La Retirada** : environ 450 000 personnes passent la frontière en quelques semaines." },
        { type: "saisie", question: "Comment appelle-t-on les petites embarcations utilisées par les migrants pour traverser le détroit de Gibraltar ?", reponses: ["pateras", "patera", "las pateras", "cayucos", "cayuco"], explication: "**las pateras** (et les *cayucos*, plus grands, vers les Canaries)." },
        { type: "saisie", question: "Comment appelle-t-on les Mexicains-Américains qui revendiquent leur double culture ?", reponses: ["chicanos", "los chicanos"], explication: "Les **Chicanos**, notamment en Californie et au Texas." },
        { type: "qcm", question: "Dans quel pays le guaraní est-il langue officielle ?", choix: ["Pérou", "Mexique", "Paraguay", "Chili"], reponse: 2, explication: "Au **Paraguay**, le guaraní est co-officiel avec l'espagnol et parlé par une grande majorité de la population." },
        { type: "vf", question: "Rigoberta Menchú a reçu le prix Nobel de la paix pour son engagement en faveur des peuples indigènes.", reponse: true, explication: "En **1992**, l'année du 500e anniversaire de l'arrivée de Colomb en Amérique." },
        { type: "saisie", question: "Traduis : « le déracinement »", reponses: ["el desarraigo", "desarraigo"], explication: "**el desarraigo**, sentiment central chez les exilés." },
        { type: "qcm", question: "Le mouvement #NiUnaMenos, né en Argentine en 2015, lutte contre :", choix: ["les féminicides", "la déforestation", "la corruption", "la dictature"], reponse: 0, explication: "« Pas une de moins » : mouvement contre les violences faites aux femmes." },
        { type: "saisie", question: "Traduis : « Ils ont traversé la frontière il y a dix ans. »", reponses: ["Cruzaron la frontera hace diez años", "Cruzaron la frontera hace 10 años", "Hace diez años cruzaron la frontera", "Hace 10 años cruzaron la frontera", "Hace diez años que cruzaron la frontera"], explication: "Action passée datée → indefinido ; « il y a » temporel → **hace**." },
        { type: "redaction", question: "Expression écrite (120-150 mots) : un jeune migrant latino-américain arrivé en Espagne écrit à sa famille restée au pays. Il raconte son voyage, ses difficultés et ses espoirs.", corrige: "Modèle :\n\n*Querida mamá:*\n*Hace ya tres meses que llegué a Madrid. El viaje fue muy largo y tuve mucho miedo, pero ahora estoy bien. Vivo con mi primo en un piso pequeño en el barrio de Usera. Al principio, nadie me entendía cuando hablaba con mi acento y me sentía muy solo. Echo de menos tus comidas y las calles de Quito. Todavía no tengo papeles, por eso es difícil encontrar trabajo, pero trabajo los fines de semana en un restaurante. Ojalá pueda estudiar el año que viene. Quiero que estés orgullosa de mí. Cuando tenga dinero suficiente, te enviaré una parte y, algún día, volveré para verte.*\n*Un abrazo muy fuerte,*\n*Andrés*\n\nCritères : temps du passé variés (*llegué, fue, tuve, entendía*), *hace* + durée, subjonctif (*ojalá pueda, quiero que estés, cuando tenga*), vocabulaire de l'exil (*echar de menos, papeles*)." }
      ]
    },
    {
      id: "territoire-memoire-espace",
      titre: "Territoire et mémoire ; Espace privé et espace public",
      theme: "Axes culturels",
      cours: `
>! **Programme** : dans le programme en vigueur (rentrée 2026), « Territoire et mémoire » et « Espace privé et espace public » sont des axes de **terminale**. Ce chapitre est donc **pour aller plus loin** en 1re ; ses repères historiques restent très utiles pour l'axe « Art et pouvoir » (Guernica, censure, chanson engagée) et pour comprendre de nombreux documents.

## La guerre civile espagnole (1936-1939)
- La **IIe République** est proclamée en **1931**. En février 1936, le Frente Popular (gauche) gagne les élections.
- Les **17 et 18 juillet 1936**, une partie de l'armée se soulève (*golpe de Estado*) : le coup d'État est préparé par le général Mola ; le général **Francisco Franco**, qui prend la tête de l'armée d'Afrique, devient en octobre 1936 le chef du camp nationaliste. L'Espagne se divise entre **républicains** et **nationalistes** (*sublevados*).
- Le **26 avril 1937**, la ville basque de **Guernica** est bombardée par la Légion Condor allemande, avec l'appui de l'aviation italienne, alliées de Franco. Picasso peint *Guernica* la même année.
- Le poète **Federico García Lorca** est assassiné en 1936 près de Grenade.
- La guerre se termine le **1er avril 1939** par la victoire de Franco.

## Le franquisme (1939-1975)
Dictature militaire, catholique et nationaliste : répression, prisonniers politiques, censure, interdiction des partis et des syndicats, langues régionales réprimées. Le **Valle de los Caídos** (aujourd'hui **Valle de Cuelgamuros**) est construit en partie par des prisonniers républicains. La femme est cantonnée au foyer (la *Sección Femenina*).

## La Transition démocratique
- **Franco meurt le 20 novembre 1975** ; **Juan Carlos I** devient roi.
- 1977 : premières élections libres ; **loi d'amnistie** ; **Constitution de 1978** (monarchie parlementaire, autonomies).
- **23 février 1981** (*el 23-F*) : tentative de coup d'État au Congrès, qui échoue.
- La *Movida* madrilène (années 1980) symbolise la liberté retrouvée (Pedro Almodóvar).
- Mémoire : le **pacte de l'oubli** est remis en cause par la **Ley de Memoria Histórica** (2007) puis la **Ley de Memoria Democrática** (2022) : exhumation des fosses communes, retrait des symboles franquistes ; les restes de Franco ont été exhumés du Valle en 2019.

## Les dictatures en Amérique latine
- **Chili** : le **11 septembre 1973**, le général **Augusto Pinochet** renverse le président socialiste **Salvador Allende**, qui meurt dans le palais de la Moneda. Dictature jusqu'en 1990.
- **Argentine** : dictature militaire de **1976 à 1983** ; des dizaines de milliers de **desaparecidos** (les organisations de droits humains en comptent 30 000). Depuis 1977, les **Madres de Plaza de Mayo** tournent chaque jeudi devant la Casa Rosada, un foulard blanc sur la tête ; les **Abuelas** recherchent les bébés volés.
- **Uruguay** (1973-1985), **Paraguay** (Stroessner, 1954-1989).

## Espace privé et espace public
- **La plaza** et **la calle** sont des lieux de vie, de fête et de contestation : la Plaza de Mayo, la Puerta del Sol (mouvement des **Indignados**, le 15-M, en 2011), les *cacerolazos* (concerts de casseroles).
- Sous les dictatures, l'espace public est surveillé ; la mémoire se réfugie dans l'espace privé (la famille, les secrets).
- En littérature : *La casa de Bernarda Alba* (Lorca, 1936) montre l'enfermement des femmes dans la maison et la pression du « qu'en-dira-t-on ».

> **À retenir** : 1931 République, 1936-1939 guerre civile, 1939-1975 franquisme, 1975-1982 Transition (Constitution de 1978) ; Chili 1973 (Pinochet), Argentine 1976-1983 (desaparecidos, Madres de Plaza de Mayo) ; la place publique comme lieu de mémoire et de revendication.
`,
      exercices: [
        { type: "saisie", question: "En quelle année commence la guerre civile espagnole ?", reponses: ["1936"], explication: "Le soulèvement militaire a lieu le **18 juillet 1936**." },
        { type: "saisie", question: "En quelle année meurt Franco ?", reponses: ["1975"], explication: "Le **20 novembre 1975** ; s'ouvre alors la Transition." },
        { type: "qcm", question: "Que se passe-t-il le 23 février 1981 en Espagne ?", choix: ["la mort de Franco", "le vote de la Constitution", "une tentative de coup d'État au Congrès", "le bombardement de Guernica"], reponse: 2, explication: "Le **23-F** : le lieutenant-colonel Tejero prend le Congrès en otage ; le coup d'État échoue." },
        { type: "qcm", question: "Qui renverse Salvador Allende au Chili en 1973 ?", choix: ["Fidel Castro", "Augusto Pinochet", "Jorge Videla", "Alfredo Stroessner"], reponse: 1, explication: "Le général **Augusto Pinochet**, le 11 septembre 1973." },
        { type: "vf", question: "Les Madres de Plaza de Mayo réclament la vérité sur leurs enfants disparus pendant la dictature argentine.", reponse: true, explication: "Depuis 1977, elles marchent chaque jeudi sur la Plaza de Mayo, à Buenos Aires." },
        { type: "saisie", question: "Comment appelle-t-on en espagnol les victimes enlevées et jamais retrouvées des dictatures ?", reponses: ["desaparecidos", "los desaparecidos"], explication: "**los desaparecidos** (les disparus)." },
        { type: "qcm", question: "Quelle loi espagnole de 2007 reconnaît les victimes de la guerre civile et du franquisme ?", choix: ["la Ley de Amnistía", "la Constitución", "la Ley de Memoria Histórica", "la Ley de Extranjería"], reponse: 2, explication: "**Ley de Memoria Histórica** (2007), complétée par la *Ley de Memoria Democrática* (2022)." },
        { type: "saisie", question: "Traduis : « une fosse commune »", reponses: ["una fosa común", "fosa común"], explication: "**una fosa común** ; on parle d'*exhumaciones*." },
        { type: "redaction", question: "Expression écrite (150 mots) : « ¿Es necesario recordar el pasado para construir el futuro? » Réponds en t'appuyant sur des exemples espagnols et latino-américains.", corrige: "Modèle :\n\n*Hoy en día, muchas sociedades hispánicas se preguntan qué hacer con su pasado doloroso. En mi opinión, es necesario recordar para construir un futuro democrático.*\n\n*En primer lugar, la memoria es una cuestión de justicia. En España, miles de víctimas del franquismo siguen en fosas comunes; sus nietos quieren que se les entierre con dignidad. Por eso se aprobaron la Ley de Memoria Histórica en 2007 y la Ley de Memoria Democrática en 2022.*\n\n*Además, recordar permite que no se repitan los errores. En Argentina, las Madres de Plaza de Mayo lucharon durante décadas para que los responsables de la dictadura fueran juzgados.*\n\n*Sin embargo, algunos piensan que hay que mirar hacia delante y no abrir viejas heridas, como durante la Transición con el «pacto del olvido».*\n\n*En conclusión, creo que no se puede construir el futuro sin conocer la verdad.*\n\nCritères : plan (introduction, arguments, nuance, conclusion), connecteurs, exemples précis, subjonctif (*quieren que se les entierre, para que fueran juzgados*)." }
      ]
    },
    {
      id: "arte-poder-ficciones",
      titre: "Art et pouvoir ; Fictions et réalités",
      theme: "Axes culturels",
      cours: `
## Axe « Art et pouvoir »
### L'art au service du pouvoir
- **Diego Velázquez** (1599-1660), peintre de la cour de Philippe IV : *Las Meninas* (1656) met en scène la famille royale... et le peintre lui-même.
- Sous Franco, un art officiel exalte la nation et la religion ; la censure contrôle livres, films et chansons.

### L'art qui dénonce le pouvoir
- **Francisco de Goya** (1746-1828), peintre de la cour de Charles IV (*La familia de Carlos IV*, 1800), est aussi un critique de son temps : *Los Caprichos* (*El sueño de la razón produce monstruos*), *El 3 de mayo de 1808* (peint en 1814 : l'exécution de civils madrilènes par les soldats napoléoniens), *Los desastres de la guerra*, les *Pinturas negras*.
- **Pablo Picasso**, *Guernica* (1937) : en noir et blanc, il montre l'horreur du bombardement (la mère et l'enfant mort, le cheval, le taureau, l'ampoule). Le tableau n'est arrivé en Espagne qu'en 1981, après le retour de la démocratie ; il est au **musée Reina Sofía** à Madrid.
- La **chanson engagée** : Víctor Jara (Chili, assassiné en 1973), Mercedes Sosa (Argentine), Violeta Parra (*Gracias a la vida*).

### Le muralisme mexicain
Après la **Révolution mexicaine** (1910-1920), le ministre de l'Éducation **José Vasconcelos** commande des fresques sur les murs des bâtiments publics. Objectif : un art **public, éducatif et politique**, accessible à un peuple largement analphabète, qui exalte les Indiens, les paysans et l'histoire nationale. Les trois grands : **Diego Rivera**, **José Clemente Orozco**, **David Alfaro Siqueiros**. Rivera peint au Palais national l'histoire du Mexique, de la conquête à la Révolution.

### Frida Kahlo (1907-1954)
Peintre mexicaine, épouse de Diego Rivera. Victime d'un grave accident de bus en 1925, elle peint de nombreux **autoportraits** (*Las dos Fridas*, 1939 ; *La columna rota*, 1944) où se mêlent douleur, identité mexicaine (vêtements tehuanas) et engagement politique. Sa maison, la **Casa Azul** à Coyoacán, est devenue un musée. Elle est aujourd'hui une icône du féminisme.

## Pour aller plus loin : « Fictions et réalités » (axe de terminale)
- **Don Quijote** (Cervantes, 1605 et 1615) : un hidalgo qui confond les romans de chevalerie avec la réalité (les moulins à vent pris pour des géants). Premier roman moderne.
- **Le réalisme magique** : l'extraordinaire est raconté comme s'il était naturel. **Gabriel García Márquez** (Colombie), *Cien años de soledad* (1967), le village imaginaire de **Macondo**, prix Nobel 1982 ; **Juan Rulfo**, *Pedro Páramo* (1955) ; **Isabel Allende**, *La casa de los espíritus* (1982). Alejo Carpentier parle de « lo real maravilloso americano ».
- **Jorge Luis Borges** (Argentine) : labyrinthes, miroirs, frontière entre rêve et réalité.
- Cinéma : *El laberinto del fauno* (Guillermo del Toro, 2006) mêle conte et réalité de l'après-guerre civile.

> **À retenir** : Goya et Picasso dénoncent la violence ; le muralisme (Rivera, Orozco, Siqueiros) est un art public né de la Révolution ; Frida Kahlo, autoportraits de la douleur et de l'identité ; Don Quijote et le réalisme magique (García Márquez, Macondo) jouent avec la frontière entre fiction et réalité.
`,
      exercices: [
        { type: "qcm", question: "Quel événement Goya représente-t-il dans *El 3 de mayo de 1808* ?", choix: ["l'exécution de civils par les soldats de Napoléon", "le bombardement de Guernica", "la mort de Philippe IV", "la Révolution mexicaine"], reponse: 0, explication: "Les fusillades de Madrilènes par les troupes napoléoniennes après le soulèvement du 2 mai 1808." },
        { type: "saisie", question: "Dans quel musée madrilène se trouve *Guernica* ?", reponses: ["Reina Sofía", "el Reina Sofía", "Museo Reina Sofía", "el Museo Reina Sofía", "Museo Nacional Centro de Arte Reina Sofía"], explication: "Au **Museo Reina Sofía** (depuis 1992 ; de 1981 à 1992, il était exposé au Casón del Buen Retiro, annexe du Prado)." },
        { type: "qcm", question: "Lequel de ces artistes n'est PAS un muraliste mexicain ?", choix: ["Diego Rivera", "José Clemente Orozco", "David Alfaro Siqueiros", "Pablo Picasso"], reponse: 3, explication: "Picasso est un peintre espagnol ; les trois autres sont les grands muralistes mexicains." },
        { type: "vf", question: "Le muralisme mexicain voulait rendre l'art accessible à tout le peuple, même à ceux qui ne savaient pas lire.", reponse: true, explication: "Des fresques sur les murs publics pour éduquer et exalter l'histoire nationale." },
        { type: "saisie", question: "Comment s'appelle la maison-musée de Frida Kahlo à Coyoacán ?", reponses: ["la Casa Azul", "Casa Azul"], explication: "**La Casa Azul** (la maison bleue)." },
        { type: "saisie", question: "Comment s'appelle le village imaginaire de *Cien años de soledad* ?", reponses: ["Macondo"], explication: "**Macondo**, créé par Gabriel García Márquez." },
        { type: "qcm", question: "Le réalisme magique consiste à :", choix: ["peindre des paysages réalistes", "écrire des romans policiers", "raconter l'extraordinaire comme s'il était naturel", "refuser toute fiction"], reponse: 2, explication: "Dans le réalisme magique, le surnaturel s'intègre au quotidien sans étonner les personnages." },
        { type: "saisie", question: "Traduis : « un autoportrait »", reponses: ["un autorretrato", "autorretrato"], explication: "**un autorretrato** (rr, car le r est en début de mot dans *retrato*)." },
        { type: "redaction", question: "Expression écrite (150 mots) : « ¿Puede el arte cambiar la sociedad? » Appuie-toi sur au moins deux œuvres étudiées.", corrige: "Modèle :\n\n*El arte no es solo belleza: a menudo es también un arma contra el poder.*\n\n*Por una parte, algunos artistas denuncian la violencia. Goya, en «El 3 de mayo de 1808», muestra a civiles inocentes fusilados por los soldados franceses. Más de un siglo después, Picasso pintó «Guernica» para que el mundo entero conociera el horror del bombardeo de 1937. Este cuadro se convirtió en un símbolo universal de la paz.*\n\n*Por otra parte, el arte puede educar al pueblo. En México, los muralistas como Diego Rivera pintaron la historia nacional en los muros públicos para que todos, incluso los analfabetos, pudieran entenderla.*\n\n*Sin embargo, un cuadro no detiene una guerra: Guernica no impidió la victoria de Franco.*\n\n*En conclusión, creo que el arte no cambia la sociedad de inmediato, pero transforma nuestra mirada y conserva la memoria.*\n\nCritères : exemples précis, connecteurs (*por una parte, por otra parte, sin embargo, en conclusión*), subjonctif imparfait après un passé (*para que conociera, pudieran*)." }
      ]
    },
    {
      id: "citoyennete-innovations",
      titre: "Citoyenneté et mondes virtuels ; Innovations scientifiques et responsabilité",
      theme: "Axes culturels",
      cours: `
## Pour aller plus loin : « Citoyenneté et mondes virtuels » (axe de terminale)
- **Les réseaux sociaux et la mobilisation** : le mouvement du **15-M** (15 mai 2011), ou mouvement des **Indignados**, occupe la Puerta del Sol à Madrid et s'organise sur Internet contre la crise, le chômage des jeunes et la corruption (« No nos representan »).
- Au Chili, l'**estallido social** (2019) et les grandes manifestations ont été amplifiés par les réseaux, et ont mené à un processus constituant.
- Les dangers : les **bulos** (fausses nouvelles), le **ciberacoso** (cyberharcèlement), l'addiction aux écrans, la protection des **datos personales**.
- La **brecha digital** (fracture numérique) : entre villes et campagnes, entre générations, entre pays riches et pauvres. Dans l'« España vaciada » (Espagne rurale dépeuplée), l'accès à Internet est un enjeu.
- Les **influencers** et les youtubers hispanophones touchent des millions de jeunes.

## Axe « Innovations scientifiques et responsabilité »
### Grandes figures scientifiques
- **Santiago Ramón y Cajal**, prix Nobel de médecine en **1906**, père des neurosciences (la théorie du neurone).
- **Severo Ochoa**, Nobel de médecine en 1959 (synthèse de l'ARN).
- **Isaac Peral** conçoit l'un des premiers sous-marins électriques (1888).
- **Margarita Salas**, biochimiste espagnole, travaux sur l'ADN.

### Progrès et responsabilité
- **Énergies renouvelables** : l'Espagne est un leader de l'énergie solaire et éolienne (Plataforma Solar de Almería).
- **Le « mar de plástico »** d'Almería : des dizaines de milliers d'hectares de serres produisent fruits et légumes pour l'Europe, au prix d'une surexploitation de l'eau et de conditions de travail difficiles pour les ouvriers migrants.
- **La sécheresse** (*la sequía*) menace le sud de l'Espagne et les Andes (fonte des glaciers).
- **Le lithium** : le « triangle du lithium » (Argentine, Bolivie, Chili) concentre une grande partie des réserves mondiales, indispensable aux batteries ; son extraction consomme beaucoup d'eau dans le désert d'**Atacama** et touche les communautés indigènes.
- **La déforestation de l'Amazonie** (Pérou, Colombie, Bolivie...).
- **Atacama** accueille aussi de grands télescopes (ALMA) grâce à son ciel très pur.
- Bioéthique et intelligence artificielle (*la inteligencia artificial*) : jusqu'où aller ?

## Vocabulaire
| Espagnol | Français |
|---|---|
| la red, las redes sociales | le réseau, les réseaux sociaux |
| el bulo, la noticia falsa | la fake news |
| el ciberacoso | le cyberharcèlement |
| la brecha digital | la fracture numérique |
| el invernadero | la serre |
| la sequía | la sécheresse |
| el desarrollo sostenible | le développement durable |
| el avance, el descubrimiento | le progrès, la découverte |

> **À retenir** : le 15-M et les Indignados, bulos et ciberacoso, brecha digital ; Ramón y Cajal (Nobel 1906) ; le progrès a un coût : mar de plástico, lithium d'Atacama, sécheresse, déforestation.
`,
      exercices: [
        { type: "qcm", question: "Le mouvement du 15-M (2011) a occupé :", choix: ["la Puerta del Sol", "la Plaza de Mayo", "la Plaza Mayor de Salamanca", "le Zócalo de Mexico"], reponse: 0, explication: "La **Puerta del Sol**, à Madrid : naissance du mouvement des *Indignados*." },
        { type: "saisie", question: "Traduis : « la fracture numérique »", reponses: ["la brecha digital", "brecha digital"], explication: "**la brecha digital**." },
        { type: "saisie", question: "Traduis : « le cyberharcèlement »", reponses: ["el ciberacoso", "ciberacoso"], explication: "**el ciberacoso** (*acosar* = harceler)." },
        { type: "qcm", question: "Santiago Ramón y Cajal a reçu le prix Nobel en 1906 pour ses travaux sur :", choix: ["le sous-marin", "les neurones", "la pénicilline", "l'ARN"], reponse: 1, explication: "Il a montré que le système nerveux est formé de cellules individuelles : les **neurones**." },
        { type: "vf", question: "Le « mar de plástico » désigne les serres d'Almería.", reponse: true, explication: "Une immense surface de serres, visible depuis l'espace, avec de forts enjeux sur l'eau et le travail." },
        { type: "qcm", question: "Quels pays forment le « triangle du lithium » ?", choix: ["Mexique, Cuba, Guatemala", "Espagne, Portugal, Maroc", "Argentine, Bolivie, Chili", "Pérou, Colombie, Équateur"], reponse: 2, explication: "**Argentine, Bolivie, Chili** : salars des Andes riches en lithium." },
        { type: "saisie", question: "Traduis : « la sécheresse »", reponses: ["la sequía", "sequía"], explication: "**la sequía**." },
        { type: "saisie", question: "Traduis : « Il faut vérifier les informations avant de les partager. » (hay que + enclise)", reponses: ["Hay que comprobar las informaciones antes de compartirlas", "Hay que verificar las informaciones antes de compartirlas", "Hay que comprobar la información antes de compartirla", "Hay que verificar la información antes de compartirla", "Hay que comprobar las noticias antes de compartirlas", "Hay que verificar las noticias antes de compartirlas"], explication: "Obligation générale **hay que** ; enclise sur l'infinitif : *compartirlas*." },
        { type: "redaction", question: "Expression écrite (150 mots) : « Las redes sociales, ¿una amenaza o una oportunidad para la democracia? »", corrige: "Modèle :\n\n*Hoy en día, casi todos los jóvenes hispanohablantes usan las redes sociales. ¿Son un peligro o una ventaja para la democracia?*\n\n*Por un lado, las redes permiten que los ciudadanos se expresen y se organicen. En 2011, el movimiento del 15-M llenó la Puerta del Sol gracias a internet. Del mismo modo, en Chile, en 2019, las redes difundieron las protestas en todo el país.*\n\n*Por otro lado, las redes también son peligrosas: los bulos se difunden muy rápido y pueden manipular a los votantes. Además, el ciberacoso hace sufrir a muchos adolescentes.*\n\n*En mi opinión, las redes no son buenas ni malas en sí mismas: todo depende de cómo las utilicemos. Hay que educar a los jóvenes para que aprendan a comprobar la información.*\n\n*En conclusión, son una oportunidad, siempre que seamos ciudadanos responsables.*\n\nCritères : problématique, arguments pour et contre avec exemples, opinion nuancée, subjonctif (*permiten que se expresen, cómo las utilicemos, para que aprendan, siempre que seamos*)." }
      ]
    },
    {
      id: "metodologia-evaluaciones",
      titre: "Méthodologie : compréhension et expression écrite",
      theme: "Méthode",
      cours: `
## Les évaluations en LVB (niveau visé : B1 en fin de 1re et en fin de terminale)
Le programme d'espagnol en vigueur en 1re depuis la rentrée 2026 (BO n° 22 du 29 mai 2025) compte six axes : *Identités et échanges* ; *Diversité et inclusion* ; *Art et pouvoir* ; *Innovations scientifiques et responsabilité* ; *L'être humain et la nature* ; *L'espace andin, la colonne vertébrale de l'Amérique du Sud*. Cinq sont étudiés dans l'année, dont **obligatoirement l'axe 6** (l'espace andin).

- **Contrôle continu** : il n'y a pas d'épreuve finale de LVB. Ta note au baccalauréat est calculée à partir des **moyennes de tes bulletins** de 1re et de terminale : chaque devoir compte.
- En fin de terminale, une évaluation organisée par tes professeurs permet de délivrer l'**attestation de langues vivantes**, qui indique ton niveau du CECRL dans chaque activité.
- Les évaluations portent sur la **compréhension de l'écrit**, la **compréhension de l'oral**, l'**expression écrite** et l'**expression orale** (en continu et en interaction) ; le programme insiste aussi sur la **médiation** (reformuler, expliquer à quelqu'un le contenu d'un document). Les documents sont liés à un **axe culturel** du programme.

## La compréhension (écrit ou oral)
1. **Lire le paratexte** : titre, source, date, auteur, image. Il donne le thème et le contexte.
2. **Repérer les éléments essentiels** : *¿Quién? ¿Qué? ¿Dónde? ¿Cuándo? ¿Por qué? ¿Cómo?*
3. **Identifier le type de document** : article de presse, extrait de roman, interview, témoignage, publicité...
4. **Repérer la structure** : les étapes du récit ou de l'argumentation, grâce aux connecteurs.
5. **Rédiger le compte rendu en français** (souvent demandé) : phrases complètes, sans traduire mot à mot, en allant du général au particulier. Ne pas inventer : seulement ce qui est dans le document.
6. À l'oral : en évaluation, le document est en général écouté trois fois ; à la 1re écoute, la situation générale ; ensuite, les détails (noms, chiffres, opinions).

>! **Important** : cette appli entraîne la compréhension de l'écrit et l'expression écrite, mais **pas la compréhension de l'oral** ni l'expression orale, qui comptent pourtant dans ta note. Écoute régulièrement des documents authentiques courts (journaux radio ou télévisés espagnols, podcasts, bandes-annonces, chansons), d'abord sans texte, puis note en français qui / quoi / où / quand / pourquoi, et entraîne-toi à parler deux minutes à voix haute sur chaque axe du programme.

>! **Astuce** : appuie-toi sur les mots transparents (*la democracia, el conflicto, la memoria*), les noms propres, les chiffres et les indices de temps.

## L'expression écrite
Deux grands types de sujets : **récit / lettre / dialogue** (imaginer, continuer un texte) ou **argumentation** (donner son avis).

### Méthode
1. Analyse le sujet : type de texte, destinataire, nombre de mots, temps à employer.
2. Fais un plan au brouillon : introduction, 2 ou 3 idées avec exemples, conclusion.
3. Rédige des phrases simples et correctes plutôt que des phrases traduites du français.
4. Relis-toi : accents, accords, ser/estar, subjonctif, concordance des temps, ¿ ¡.

### Connecteurs utiles
| Fonction | Connecteurs |
|---|---|
| Introduire | *Hoy en día, En la actualidad, Este texto trata de...* |
| Énumérer | *En primer lugar, Luego, Por último* |
| Ajouter | *Además, También, Asimismo* |
| Opposer | *Sin embargo, Pero, En cambio, Aunque* |
| Cause | *Porque, Ya que, Puesto que, Como* (en tête de phrase) |
| Conséquence | *Por eso, Por lo tanto, Así que* |
| Exemple | *Por ejemplo, Como* |
| Conclure | *En conclusión, Para terminar, En resumen* |

### Donner son opinion
- *Creo que / Pienso que / Me parece que* + **indicatif** : *Creo que es injusto.*
- *No creo que / No pienso que* + **subjonctif** : *No creo que sea justo.*
- *En mi opinión, A mi parecer, Desde mi punto de vista, Para mí*.
- *Estoy de acuerdo con... / No estoy de acuerdo con...*

> **À retenir** : compréhension = paratexte, quién/qué/dónde/cuándo/por qué, compte rendu fidèle en français ; expression = plan, connecteurs, exemples culturels précis, relecture ciblée ; creo que + indicatif, no creo que + subjonctif.
`,
      exercices: [
        { type: "qcm", question: "Que faut-il lire en premier pour comprendre un document ?", choix: ["le paratexte (titre, source, date)", "la dernière ligne", "seulement les verbes", "le vocabulaire inconnu"], reponse: 0, explication: "Le **paratexte** donne le thème et le contexte avant même la lecture." },
        { type: "vf", question: "Dans un compte rendu de compréhension, on peut ajouter ses propres connaissances pour compléter le document.", reponse: false, explication: "Le compte rendu doit être **fidèle** au document : on n'invente rien et on n'ajoute rien." },
        { type: "saisie", question: "Complète : « No creo que la guerra (ser) la solución. »", reponses: ["sea"], explication: "*No creo que* + **subjonctif** : *sea*." },
        { type: "saisie", question: "Complète : « Creo que la memoria (ser) importante. »", reponses: ["es"], explication: "*Creo que* (affirmatif) + **indicatif** : *es*." },
        { type: "qcm", question: "Quel connecteur exprime l'opposition ?", choix: ["Además", "Por lo tanto", "Sin embargo", "En primer lugar"], reponse: 2, explication: "**Sin embargo** = cependant. *Además* ajoute, *por lo tanto* conclut, *en primer lugar* énumère." },
        { type: "saisie", question: "Traduis le connecteur : « c'est pourquoi »", reponses: ["por eso", "por lo tanto", "por esa razón"], explication: "**por eso** (ou *por lo tanto*)." },
        { type: "qcm", question: "Quelles questions aident à repérer l'essentiel d'un document ?", choix: ["¿Quién? ¿Qué? ¿Dónde? ¿Cuándo? ¿Por qué?", "¿Cuánto cuesta?", "¿Qué hora es?", "¿Cómo te llamas?"], reponse: 0, explication: "Les questions **qui, quoi, où, quand, pourquoi** (et comment) structurent la compréhension." },
        { type: "redaction", question: "Compréhension : lis ce texte et rends-en compte en français (5 lignes). « Cada jueves, desde 1977, un grupo de mujeres con pañuelos blancos camina en silencio alrededor de la pirámide de la Plaza de Mayo, en Buenos Aires. Sus hijos desaparecieron durante la última dictadura militar (1976-1983). Al principio, la policía las llamaba «las locas». Hoy, muchas tienen más de noventa años, pero siguen pidiendo verdad y justicia. Gracias a las Abuelas, más de cien nietos robados han recuperado su identidad. »", corrige: "**Compte rendu modèle** :\n\nLe texte évoque les **Mères de la place de Mai** à Buenos Aires. Depuis 1977, chaque jeudi, des femmes coiffées d'un foulard blanc marchent en silence autour de la pyramide de la place. Leurs enfants ont disparu pendant la dernière dictature militaire argentine (1976-1983). Au début, la police les surnommait « les folles ». Aujourd'hui, beaucoup ont plus de 90 ans mais continuent de réclamer vérité et justice. Grâce aux Grands-mères, plus de cent petits-enfants volés ont retrouvé leur identité.\n\nMéthode : qui (les mères), quoi (marche silencieuse), où (Plaza de Mayo), quand (chaque jeudi depuis 1977), pourquoi (enfants disparus) ; rien d'ajouté au document." },
        { type: "redaction", question: "Expression écrite (120 mots) : écris l'introduction et le plan détaillé (en espagnol) d'une réponse au sujet « ¿Hay que olvidar el pasado para vivir en paz? ».", corrige: "**Introduction** :\n*En España, tras la muerte de Franco en 1975, los políticos decidieron no hablar del pasado para evitar nuevos conflictos: fue el llamado «pacto del olvido». Pero hoy muchos nietos de las víctimas quieren saber la verdad. ¿Hay que olvidar el pasado para vivir en paz?*\n\n**Plan** :\n1. *En primer lugar, el olvido permitió una Transición pacífica* (ley de amnistía de 1977, Constitución de 1978).\n2. *Sin embargo, el olvido deja heridas abiertas* (fosas comunes, familias sin respuesta ; Madres de Plaza de Mayo en Argentina).\n3. *Por eso, recordar es una forma de justicia y de prevención* (Ley de Memoria Democrática de 2022, museos de la memoria en Chile y Argentina).\n\n**Conclusion** : *En conclusión, no creo que el olvido traiga la paz verdadera: hay que recordar sin odio.*\n\nCritères : problématique posée, plan logique, connecteurs, exemples précis tirés des axes « Territoire et mémoire »." }
      ]
    },
    {
      id: "gerundio-perifrasis",
      titre: "Le gérondif et les périphrases verbales",
      theme: "Grammaire",
      cours: `
## Former le gérondif
- -ar → **-ando** : *hablar* → *hablando* ;
- -er / -ir → **-iendo** : *comer* → *comiendo*, *vivir* → *viviendo*.
- Voyelle + *-iendo* → **-yendo** : *leer* → *leyendo*, *construir* → *construyendo*, *ir* → *yendo*, *oír* → *oyendo*.
- Verbes en -ir à changement de voyelle : **e → i**, **o → u** : *pedir* → *pidiendo*, *decir* → *diciendo*, *sentir* → *sintiendo*, *dormir* → *durmiendo*, *morir* → *muriendo*.
- Le gérondif est **invariable** ; les pronoms s'y soudent (enclise, avec accent écrit) : *Está explicándolo* = *Lo está explicando*.

## Les périphrases avec le gérondif
| Périphrase | Sens | Exemple |
|---|---|---|
| **estar** + gérondif | action en cours | *Están manifestándose en la plaza.* |
| **seguir** + gérondif | continuer à, toujours | *Las Madres siguen buscando a sus hijos.* |
| **llevar** + durée + gérondif | ça fait ... que | *Llevo dos años estudiando español.* |
| **ir** + gérondif | progression lente | *La situación va mejorando poco a poco.* |
| **acabar** + gérondif | finir par | *Acabó aceptando la propuesta.* |

>! **Attention** : « continuer à » se dit *seguir* + **gérondif** (jamais « seguir a » + infinitif) : *Sigue lloviendo.* Au négatif : *seguir sin* + infinitif : *Sigue sin llamar* (il n'a toujours pas appelé).

## Les périphrases avec l'infinitif
| Périphrase | Sens | Exemple |
|---|---|---|
| **acabar de** + inf. | venir de | *Acabo de llegar.* |
| **volver a** + inf. | re-, de nouveau | *Volvió a escribir.* (il écrivit de nouveau) |
| **dejar de** + inf. | arrêter de | *Dejé de fumar.* |
| **empezar a / ponerse a** + inf. | commencer à, se mettre à | *Se puso a llorar.* |
| **soler** + inf. | avoir l'habitude de | *Suelo leer por la noche.* |
| **estar a punto de** + inf. | être sur le point de | *Estaba a punto de salir.* |
| **ir a** + inf. | futur proche | *Voy a votar.* |

- *soler* s'emploie surtout au présent et à l'imparfait : *De niño, solía jugar en la calle.*
- « en » + participe présent se traduit par le **gérondif seul**, sans préposition : « en marchant » = *andando* ; « Il est parti en courant » = *Se fue corriendo*.

> **À retenir** : -ando / -iendo (-yendo après voyelle) ; estar (en cours), seguir (continuer), llevar + durée (depuis), ir (progression) + gérondif ; acabar de (venir de), volver a (de nouveau), dejar de (arrêter), soler (habitude) + infinitif.
`,
      exercices: [
        { type: "saisie", question: "Gérondif de *leer*.", reponses: ["leyendo"], explication: "Radical terminé par une voyelle → **-yendo** : *leyendo*." },
        { type: "saisie", question: "Gérondif de *dormir*.", reponses: ["durmiendo"], explication: "Verbe en -ir, o → u : **durmiendo**." },
        { type: "saisie", question: "Gérondif de *decir*.", reponses: ["diciendo"], explication: "e → i : **diciendo**." },
        { type: "qcm", question: "« Les jeunes continuent à manifester » :", choix: ["Los jóvenes siguen a manifestarse", "Los jóvenes continúan a manifestarse", "Los jóvenes siguen manifestándose", "Los jóvenes siguen manifestado"], reponse: 2, explication: "*seguir* (ou *continuar*) + **gérondif** : *siguen manifestándose* (enclise avec accent écrit)." },
        { type: "saisie", question: "Traduis la périphrase : « Je viens d'arriver. »", reponses: ["Acabo de llegar", "Yo acabo de llegar"], explication: "venir de + infinitif = **acabar de** + infinitif." },
        { type: "saisie", question: "Complète : « Mi abuelo dejó ... fumar hace diez años. »", reponses: ["de"], explication: "arrêter de = **dejar de** + infinitif." },
        { type: "qcm", question: "« Il a écrit à nouveau à sa famille » :", choix: ["Volvió a escribir a su familia", "Volvió escribiendo a su familia", "Acabó de escribir a su familia", "Dejó de escribir a su familia"], reponse: 0, explication: "Répétition : **volver a** + infinitif. *Acabó de escribir* = il a fini d'écrire (et *acababa de escribir* = il venait d'écrire) ; *dejó de* = il a arrêté." },
        { type: "vf", question: "« Se fue corriendo » signifie « Il est parti en courant ».", reponse: true, explication: "Le « en + participe présent » français se traduit par le **gérondif** seul : *corriendo*." },
        { type: "saisie", question: "Traduis avec *llevar* : « Ça fait trois mois qu'ils vivent à Madrid. »", reponses: ["Llevan tres meses viviendo en Madrid", "Llevan 3 meses viviendo en Madrid"], explication: "**llevar** conjugué + durée + gérondif : *Llevan tres meses viviendo en Madrid*." },
        { type: "redaction", question: "Un migrant arrivé en Espagne il y a deux ans raconte sa situation actuelle (6 phrases) en utilisant au moins cinq périphrases différentes (llevar, seguir, acabar de, volver a, dejar de, soler, ir + gérondif).", corrige: "Modèle :\n\n*Llevo dos años viviendo en Valencia. Al principio, no hablaba bien español, pero mi nivel va mejorando poco a poco. Suelo trabajar por la mañana en un mercado y por la tarde estudio. Acabo de conseguir mis papeles: ¡por fin! Sin embargo, sigo echando de menos a mi familia y todavía no he vuelto a verla. Nunca voy a dejar de luchar por mi futuro.*\n\nPériphrases : *llevo ... viviendo* (durée), *va mejorando* (progression), *suelo trabajar* (habitude), *acabo de conseguir* (passé récent), *sigo echando de menos* (continuité), *no he vuelto a verla* (répétition), *dejar de luchar* (arrêt)." }
      ]
    },
    {
      id: "relativos-estilo-indirecto",
      titre: "Les relatifs et le discours indirect au passé",
      theme: "Grammaire",
      cours: `
## Les pronoms relatifs
| Relatif | Emploi | Exemple |
|---|---|---|
| **que** | le plus courant : sujet ou COD, personne ou chose | *El libro que leo es de Lorca. La chica que habla es mi prima.* |
| **quien / quienes** | personne seulement, surtout après une préposition | *El hombre con quien hablé era periodista.* |
| **el que, la que, los que, las que** | après une préposition ; « celui qui, ceux qui » | *La casa en la que vivo. Los que luchan nunca olvidan.* |
| **el cual, la cual...** | registre soutenu, après une préposition | *La razón por la cual se fue.* |
| **lo que** | « ce qui, ce que » (idée neutre) | *Lo que dices es verdad. No entiendo lo que pasa.* |
| **cuyo, cuya, cuyos, cuyas** | « dont » de possession ; s'accorde avec ce qui est **possédé** | *Un escritor cuyas novelas son famosas.* |
| **donde** | lieu | *El pueblo donde nací.* |

## Traduire « dont »
- Possession (« dont le / la / les + nom ») → **cuyo** accordé avec le nom qui suit, **sans article** : *la mujer dont le fils a disparu* = *la mujer cuyo hijo desapareció*.
- Complément d'un verbe construit avec *de* → **del que / de la que / de quien** : *el libro dont je parle* = *el libro del que hablo* ; *la persona dont je me souviens* = *la persona de la que (de quien) me acuerdo*.
- « ce dont » → **lo que** ou **de lo que** selon le verbe : *Es lo que necesito* (ce dont j'ai besoin) ; *Es de lo que te hablé* (ce dont je t'ai parlé).

## La mise en relief : « c'est ... qui / que »
On emploie **ser** au même temps que le verbe et le relatif adapté :
- personne → **quien** (ou *el que*) : *Fue Picasso quien pintó el Guernica.*
- temps → **cuando** : *Fue en 1975 cuando murió Franco.*
- lieu → **donde** : *Es en Madrid donde vivo.*
- manière → **como** : *Es así como se hace.*

>! **Erreur fréquente** : *C'est en 1939 que la guerre s'est terminée* ne se dit pas « Es en 1939 que... » mais **Fue en 1939 cuando terminó la guerra** (ser au passé, *cuando* pour le temps).

## Le discours indirect au passé
Quand le verbe introducteur est au passé (*dijo que, explicó que, contó que, preguntó si*), les temps reculent d'un cran :

| Discours direct | Discours indirect (verbe introducteur au passé) |
|---|---|
| présent : *«Tengo miedo»* | imparfait : *Dijo que tenía miedo.* |
| pretérito perfecto ou indefinido : *«He perdido / Perdí mi casa»* | plus-que-parfait : *Dijo que había perdido su casa.* |
| futur : *«Volveré»* | conditionnel : *Dijo que volvería.* |
| impératif : *«¡Cállate!»* | **que + subjonctif imparfait** : *Le ordenó que se callara.* |
| subjonctif présent : *«Quiero que vengas»* | subjonctif imparfait : *Dijo que quería que viniera.* |
| imparfait, plus-que-parfait, conditionnel | inchangés |

- Avec l'indefinido, on peut aussi le garder s'il y a une date : *Dijo que nació en 1950.*
- Les **pronoms et possessifs** changent : *«Mi hijo»* → *su hijo* ; *«Te llamo»* → *Me dijo que me llamaba*.
- Les **repères de temps et de lieu** changent :

| Direct | Indirect |
|---|---|
| hoy | aquel día |
| ayer | el día anterior |
| mañana | al día siguiente |
| ahora | entonces |
| aquí | allí |
| este | aquel |

### Les questions et les ordres
- Question fermée → **si** : *«¿Tienes hambre?»* → *Me preguntó si tenía hambre.*
- Question ouverte → le mot interrogatif **garde son accent** : *«¿Dónde vives?»* → *Me preguntó dónde vivía.*
- Ordre, demande → *pedir / ordenar / decir* **que + subjonctif** (imparfait après un passé) : *Les dijo que se fueran.*

> **À retenir** : que (général), quien (personne), lo que (ce que), cuyo accordé avec le possédé (dont + possession), donde (lieu) ; « c'est ... que » = ser + quien / cuando / donde ; discours indirect au passé : présent → imparfait, passé → plus-que-parfait, futur → conditionnel, impératif → que + subjonctif imparfait ; hoy → aquel día, mañana → al día siguiente.
`,
      exercices: [
        { type: "saisie", question: "Complète avec *cuyo* accordé : « Es un pintor ... cuadros están en el Prado. »", reponses: ["cuyos"], explication: "*cuyo* s'accorde avec ce qui est possédé : *cuadros* (masculin pluriel) → **cuyos**." },
        { type: "saisie", question: "Complète avec *cuyo* accordé : « Las Abuelas buscan a los niños ... madres desaparecieron. »", reponses: ["cuyas"], explication: "Accord avec *madres* (féminin pluriel) → **cuyas**, même si l'antécédent *niños* est masculin." },
        { type: "qcm", question: "« Je ne comprends pas ce que tu dis » :", choix: ["No entiendo el que dices", "No entiendo lo que dices", "No entiendo que dices", "No entiendo cual dices"], reponse: 1, explication: "« ce que » (idée neutre) = **lo que** : *No entiendo lo que dices*." },
        { type: "qcm", question: "« C'est en 1975 que Franco est mort » :", choix: ["Es en 1975 que murió Franco", "Fue en 1975 que murió Franco", "Fue en 1975 cuando murió Franco", "Era en 1975 donde murió Franco"], reponse: 2, explication: "Mise en relief : *ser* au passé (comme *murió*) + **cuando** pour une date : *Fue en 1975 cuando murió Franco*." },
        { type: "saisie", question: "Traduis : « le livre dont je parle »", reponses: ["el libro del que hablo", "el libro del cual hablo", "libro del que hablo", "libro del cual hablo"], explication: "*hablar de* → **del que** (ou *del cual*). *Cuyo* ne s'emploie que pour la possession." },
        { type: "saisie", question: "Discours indirect : « Estoy cansado. » → « Dijo que ... cansado. »", reponses: ["estaba"], explication: "Présent → **imparfait** après un verbe introducteur au passé : *Dijo que estaba cansado*." },
        { type: "saisie", question: "Discours indirect : « Volveré pronto. » → « Prometió que ... pronto. »", reponses: ["volvería"], explication: "Futur → **conditionnel** : *Prometió que volvería pronto*." },
        { type: "saisie", question: "Discours indirect : « He perdido mis papeles. » → « Explicó que ... sus papeles. »", reponses: ["había perdido"], explication: "Pretérito perfecto → **plus-que-parfait** : *había perdido* ; *mis* devient *sus*." },
        { type: "qcm", question: "« ¡Salid de aquí! », gritó el policía. → El policía les gritó que ...", choix: ["salieran de allí", "salían de aquí", "salgan de allí", "saldrían de aquí"], reponse: 0, explication: "Impératif → **que + subjonctif imparfait** après un passé (*salieran*) ; *aquí* devient **allí**." },
        { type: "vf", question: "« ¿Dónde vives? » → « Me preguntó donde vivía. » est correctement écrit.", reponse: false, explication: "Dans une interrogation indirecte, le mot interrogatif **garde son accent** : *Me preguntó dónde vivía*." },
        { type: "redaction", question: "Transpose ce témoignage au discours indirect en commençant par « La abuela contó que... » : « Me llamo Rosa. En 1939 crucé la frontera con mi madre. Hoy vivo en Toulouse y nunca olvidaré aquel viaje. Escuchad bien mi historia. »", corrige: "*La abuela contó que se llamaba Rosa. Explicó que en 1939 había cruzado (ou cruzó) la frontera con su madre. Dijo que entonces (en aquel momento) vivía en Toulouse y que nunca olvidaría aquel viaje. Nos pidió que escucháramos bien su historia.*\n\nTransformations :\n- *me llamo* → *se llamaba* : présent → imparfait, 1re → 3e personne ;\n- *crucé* → *había cruzado* : passé → plus-que-parfait (l'indefinido *cruzó* est accepté car l'action est datée) ;\n- *hoy vivo* → *entonces vivía* ou *en aquel momento vivía* : repère temporel et présent → imparfait ;\n- *olvidaré* → *olvidaría* : futur → conditionnel ;\n- *escuchad* → *nos pidió que escucháramos* : impératif → que + subjonctif imparfait ;\n- *mi madre, mi historia* → *su madre, su historia*.\n\nCe témoignage renvoie à l'axe « Territoire et mémoire » (la Retirada)." }
      ]
    }
  ]
};
