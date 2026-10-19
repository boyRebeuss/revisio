export default {
  chapitres: [
    {
      id: "alphabet-prononciation",
      titre: "L'alphabet, la prononciation et la translittération",
      theme: "Langue : lire et écrire le grec",
      cours: `
## L'alphabet grec
L'alphabet grec compte **24 lettres**. Les Grecs l'ont adapté de l'alphabet phénicien (vers le VIIIe siècle av. J.-C.) en y ajoutant des **voyelles**. Le mot « alphabet » vient lui-même des deux premières lettres : *alpha* et *bêta*.

| Majuscule | Minuscule | Nom | Translittération | Prononciation restituée |
|---|---|---|---|---|
| Α | α | alpha | a | a |
| Β | β | bêta | b | b |
| Γ | γ | gamma | g | g dur (n devant γ, κ, ξ, χ) |
| Δ | δ | delta | d | d |
| Ε | ε | epsilon | e | é bref |
| Ζ | ζ | zêta | z | zd |
| Η | η | êta | ē (ê) | è long et ouvert |
| Θ | θ | thêta | th | t aspiré |
| Ι | ι | iota | i | i |
| Κ | κ | kappa | k (c en français) | k |
| Λ | λ | lambda | l | l |
| Μ | μ | mu | m | m |
| Ν | ν | nu | n | n |
| Ξ | ξ | xi | x | ks |
| Ο | ο | omicron | o | o bref fermé |
| Π | π | pi | p | p |
| Ρ | ρ | rhô | r (rh à l'initiale) | r roulé |
| Σ | σ, ς | sigma | s | s toujours sourd, jamais z |
| Τ | τ | tau | t | t |
| Υ | υ | upsilon | y (u dans les diphtongues) | u français |
| Φ | φ | phi | ph | p aspiré |
| Χ | χ | khi | kh (ch en français) | k aspiré |
| Ψ | ψ | psi | ps | ps |
| Ω | ω | ôméga | ō (ô) | o long et ouvert |

- Le sigma s'écrit **ς** en fin de mot et **σ** ailleurs : σοφός.
- **γγ** se lit « ng » : ἄγγελος se lit *angelos* (d'où « ange »).
- Les **diphtongues** : αι (aï), ει (é long), οι (oï), υι (ui), αυ (aou), ευ (éou), ου (ou).
- Le **iota souscrit** (ᾳ, ῃ, ῳ) est le second élément d'anciennes diphtongues longues (ᾱι, ηι, ωι) ; il a cessé de se prononcer après l'époque classique et les copistes byzantins l'ont écrit sous la voyelle longue. On ne le prononce pas, mais il fait partie de l'orthographe (τῷ λόγῳ).

## Les esprits
Tout mot qui commence par une **voyelle** ou une **diphtongue** porte un **esprit** :
- l'**esprit doux** (ἀ) ne se prononce pas : ἀνήρ (*anēr*, homme) ;
- l'**esprit rude** (ἁ) se prononce comme un **h** aspiré : ὁδός (*hodos*, route), ἵππος (*hippos*, cheval).

Le ρ initial et le υ initial portent toujours l'esprit rude : ῥήτωρ (*rhētōr*), ὕδωρ (*hydōr*). Sur une diphtongue, l'esprit se place sur la **seconde voyelle** : οἶκος, αἱ. Sur une majuscule, il se place devant : Ὅμηρος (*Homēros*).

## Les accents
L'accent grec est un **accent de hauteur** (la voix monte). Il y a trois signes :
- l'**aigu** (ά) : syllabe prononcée plus haut ;
- le **grave** (ὰ) : remplace l'aigu de la dernière syllabe quand un autre mot suit (ὁ στρατηγὸς λέγει) ;
- le **circonflexe** (ᾶ) : montée puis descente, seulement sur une voyelle longue ou une diphtongue.

> **Loi de limitation** : l'accent ne remonte jamais au-delà de l'**antépénultième** (3e syllabe en partant de la fin) ; le circonflexe ne remonte pas au-delà de la **pénultième** ; si la dernière syllabe est longue, l'aigu ne remonte pas au-delà de la pénultième (ἄνθρωπος mais ἀνθρώπου).

Les accents et les esprits font partie de l'orthographe, mais pour les exercices à réponse courte de cette appli, une réponse sans accents ni esprits est acceptée.

## Ponctuation
- **·** (point en haut) équivaut à notre point-virgule ou à nos deux-points.
- **;** est le **point d'interrogation** grec : τί λέγεις; = que dis-tu ?
- La virgule et le point s'emploient comme en français.

## La translittération
Translittérer, c'est écrire un mot grec avec l'alphabet latin, lettre par lettre : λόγος → *logos* ; φιλοσοφία → *philosophia* ; ψυχή → *psychē* ; Ἡρόδοτος → *Hērodotos*. L'esprit rude devient **h**, η et ω reçoivent un trait (ē, ō) ou un circonflexe (ê, ô).

>! **Exemple résolu** : translittère θέατρον.
>! θ → th, ε → e, α → a, τ → t, ρ → r, ο → o, ν → n : *theatron*. Le mot vient de θεάομαι, « regarder » : le théâtre est le lieu d'où l'on regarde.

> **À retenir** : 24 lettres ; ς en fin de mot ; esprit rude = h ; trois accents (aigu, grave, circonflexe) ; « ; » = point d'interrogation ; θ = th, φ = ph, χ = kh/ch, ψ = ps, η = ē, ω = ō.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelle lettre grecque se translittère **ph** ?",
          choix: ["φ", "θ", "ψ", "χ"],
          reponse: 0,
          explication: "φ (phi) se translittère *ph* : φίλος → *philos*. θ donne *th*, ψ donne *ps*, χ donne *kh* (ou *ch*).",
        },
        {
          type: "saisie",
          question: "Translittère en lettres latines : **λόγος**",
          reponses: ["logos"],
          explication: "λ → l, ό → o, γ → g, ο → o, ς → s : *logos* (parole, discours, raison).",
        },
        {
          type: "saisie",
          question: "Translittère en lettres latines : **ψυχή** (l'âme, le souffle)",
          reponses: ["psychē", "psychê", "psyche", "psukhe", "psykhe", "psuche"],
          explication: "ψ → ps, υ → y (ou u), χ → ch (ou kh), ή → ē : *psychē*. D'où « psychologie », « psychiatre ».",
        },
        {
          type: "vf",
          question: "L'esprit rude se prononce comme un *h* aspiré.",
          reponse: true,
          explication: "Oui : ὁδός se lit *hodos*, ἵππος *hippos*. L'esprit doux, lui, ne se prononce pas.",
        },
        {
          type: "qcm",
          question: "Lequel de ces mots commence par un esprit **rude** ?",
          choix: ["ἀνήρ", "ὁδός", "οἶκος", "ἔργον"],
          reponse: 1,
          explication: "ὁδός (*hodos*, la route) porte l'esprit rude (ὁ). ἀνήρ, οἶκος (esprit sur le second élément de la diphtongue) et ἔργον portent l'esprit doux.",
        },
        {
          type: "saisie",
          question: "Translittère le nom de l'historien **Ἡρόδοτος**.",
          reponses: ["Hērodotos", "Hêrodotos", "Herodotos"],
          explication: "L'esprit rude sur Η donne *h* ; η → ē : *Hērodotos*, en français Hérodote.",
        },
        {
          type: "qcm",
          question: "Dans un texte grec, que signifie le signe **;** placé en fin de phrase ?",
          choix: ["Un point-virgule", "Deux-points", "Un point d'interrogation", "Un point d'exclamation"],
          reponse: 2,
          explication: "Le « ; » grec est un point d'interrogation : τί λέγεις; = « que dis-tu ? ». C'est le point en haut (·) qui vaut un point-virgule ou deux-points.",
        },
        {
          type: "vf",
          question: "Le circonflexe peut se placer sur l'antépénultième syllabe d'un mot.",
          reponse: false,
          explication: "Faux : le circonflexe ne remonte jamais au-delà de la pénultième (avant-dernière syllabe), par exemple δῶρον. Seul l'aigu peut aller jusqu'à l'antépénultième (ἄνθρωπος).",
        },
        {
          type: "saisie",
          question: "Écris en lettres grecques le mot translittéré *kosmos* (l'ordre, le monde).",
          reponses: ["κόσμος", "κοσμος"],
          explication: "k → κ, o → ο, s → σ (au milieu du mot), m → μ, o → ο, s → ς (en fin de mot) : κόσμος. D'où « cosmos », « cosmétique » (ce qui met en ordre, qui pare).",
        },
        {
          type: "redaction",
          question: "Translittère les mots suivants, explique un point de lecture pour chacun, puis donne un mot français qui en dérive : **Ἀθῆναι**, **φιλοσοφία**, **ἄγγελος**, **ῥήτωρ**.",
          corrige: `
- **Ἀθῆναι** → *Athēnai* (Athènes). Esprit doux sur Ἀ (pas de h) ; θ = t aspiré (th) ; la diphtongue finale αι se lit « aï ». Dérivé : « Athénien ».
- **φιλοσοφία** → *philosophia*. φ = ph (p aspiré), le σ se prononce toujours « s » sourd, jamais « z ». Formé de φίλος (ami) + σοφία (sagesse) : « philosophie », l'amour de la sagesse.
- **ἄγγελος** → *angelos*. Le groupe γγ se lit « ng ». Sens : le messager. Dérivé : « ange », « évangile » (la bonne nouvelle).
- **ῥήτωρ** → *rhētōr*. Le ρ initial porte toujours l'esprit rude : on translittère *rh*. η = ē, ω = ō. Sens : l'orateur. Dérivé : « rhétorique ».

>! Méthode : avance lettre par lettre, traite d'abord l'esprit (h ou rien), puis les groupes particuliers (γγ, diphtongues, θ φ χ ψ), et termine par les voyelles longues η et ω.
`,
        },
      ],
    },
    {
      id: "article-deuxieme-declinaison",
      titre: "Les cas, l'article et la 2e déclinaison",
      theme: "Langue : le nom et l'adjectif",
      cours: `
## Une langue à cas
Comme le latin, le grec est une langue **à flexion** : la terminaison du nom change selon sa **fonction** dans la phrase. Le grec a **cinq cas** (pas d'ablatif).

| Cas | Fonction principale | Exemple de traduction |
|---|---|---|
| Nominatif | sujet, attribut du sujet | le discours (sujet) |
| Vocatif | apostrophe (on appelle quelqu'un) | ô homme ! |
| Accusatif | complément d'objet direct | (je dis) le discours |
| Génitif | complément du nom, après certaines prépositions | du discours |
| Datif | complément d'attribution, moyen, lieu | au discours, par le discours |

L'ordre traditionnel français est : **nominatif, vocatif, accusatif, génitif, datif**.

## L'article défini
Le grec n'a qu'un article **défini** (« le, la, les ») ; il n'a pas d'article indéfini : ἄνθρωπος = « un homme ». L'article est précieux : il indique le **genre**, le **nombre** et le **cas** du nom.

| | Masculin | Féminin | Neutre |
|---|---|---|---|
| N. sg. | ὁ | ἡ | τό |
| A. sg. | τόν | τήν | τό |
| G. sg. | τοῦ | τῆς | τοῦ |
| D. sg. | τῷ | τῇ | τῷ |
| N. pl. | οἱ | αἱ | τά |
| A. pl. | τούς | τάς | τά |
| G. pl. | τῶν | τῶν | τῶν |
| D. pl. | τοῖς | ταῖς | τοῖς |

Au vocatif, on emploie souvent l'interjection **ὦ** : ὦ ἄνθρωπε, « ô homme ».

## La 2e déclinaison
Elle comprend surtout des **masculins en -ος** et des **neutres en -ον**.

| Cas | ὁ λόγος (le discours) | τὸ δῶρον (le cadeau) |
|---|---|---|
| N. sg. | ὁ λόγος | τὸ δῶρον |
| V. sg. | ὦ λόγε | ὦ δῶρον |
| A. sg. | τὸν λόγον | τὸ δῶρον |
| G. sg. | τοῦ λόγου | τοῦ δώρου |
| D. sg. | τῷ λόγῳ | τῷ δώρῳ |
| N. pl. | οἱ λόγοι | τὰ δῶρα |
| V. pl. | ὦ λόγοι | ὦ δῶρα |
| A. pl. | τοὺς λόγους | τὰ δῶρα |
| G. pl. | τῶν λόγων | τῶν δώρων |
| D. pl. | τοῖς λόγοις | τοῖς δώροις |

- **Règle du neutre** : au neutre, nominatif, vocatif et accusatif sont **identiques**, et le pluriel se termine en **-α**.
- Quelques noms en -ος sont **féminins** : ἡ ὁδός (la route), ἡ νῆσος (l'île). L'article permet de le voir : τῇ ὁδῷ, « à la route ».
- L'accent reste en principe sur la même syllabe qu'au nominatif, sauf si la loi de limitation l'en empêche : ἄνθρωπος, ἀνθρώπου.

## Vocabulaire de base
ὁ ἄνθρωπος : l'homme, l'être humain · ὁ θεός : le dieu · ὁ δοῦλος : l'esclave · ὁ ἵππος : le cheval · ὁ ἀγρός : le champ · ὁ νόμος : la loi · ὁ πόλεμος : la guerre · ὁ ποταμός : le fleuve · ὁ ἥλιος : le soleil · τὸ ἔργον : l'œuvre, le travail · τὸ βιβλίον : le livre · τὸ ζῷον : l'animal, l'être vivant · ἡ ὁδός : la route · ἡ νῆσος : l'île.

>! **Exemple résolu** (phrase d'entraînement) : ὁ δοῦλος τὸν ἵππον λύει.
>! ὁ δοῦλος : nominatif masculin singulier, sujet. τὸν ἵππον : accusatif masculin singulier, COD. λύει : verbe, 3e personne du singulier du présent (« il délie, il détache »).
>! Traduction : **L'esclave détache le cheval.**

> **À retenir** : cinq cas (N, V, A, G, D) ; l'article indique genre, nombre et cas ; 2e déclinaison : -ος, -ε, -ον, -ου, -ῳ / -οι, -οι, -ους, -ων, -οις ; au neutre N = V = A, pluriel en -α.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel cas exprime en général le **complément d'objet direct** ?",
          choix: ["Le nominatif", "Le génitif", "L'accusatif", "Le datif"],
          reponse: 2,
          explication: "Le COD se met à l'accusatif : λύω τὸν ἵππον, « je détache le cheval ». Le nominatif marque le sujet, le génitif le complément du nom, le datif l'attribution ou le moyen.",
        },
        {
          type: "saisie",
          question: "Donne le **génitif singulier** de ὁ λόγος, avec l'article.",
          reponses: ["τοῦ λόγου", "του λογου"],
          explication: "Génitif singulier de la 2e déclinaison : -ου ; article τοῦ. **τοῦ λόγου**, « du discours ».",
        },
        {
          type: "saisie",
          question: "Donne le **datif pluriel** de τὸ δῶρον, avec l'article.",
          reponses: ["τοῖς δώροις", "τοις δωροις"],
          explication: "Datif pluriel : article τοῖς, terminaison -οις. L'accent passe à l'aigu sur la pénultième car la dernière syllabe est longue : **τοῖς δώροις**.",
        },
        {
          type: "qcm",
          question: "À quel cas est la forme **ἀνθρώπους** ?",
          choix: ["Nominatif pluriel", "Génitif pluriel", "Accusatif pluriel", "Datif singulier"],
          reponse: 2,
          explication: "La terminaison -ους est celle de l'accusatif pluriel de la 2e déclinaison (τοὺς ἀνθρώπους). Le nominatif pluriel serait ἄνθρωποι, le génitif ἀνθρώπων, le datif singulier ἀνθρώπῳ.",
        },
        {
          type: "vf",
          question: "ἡ ὁδός (la route) est un nom **féminin**, bien qu'il appartienne à la 2e déclinaison.",
          reponse: true,
          explication: "Oui : quelques noms en -ος sont féminins (ἡ ὁδός, ἡ νῆσος). Ils se déclinent comme λόγος, mais l'article et les adjectifs sont au féminin : ἡ μακρὰ ὁδός.",
        },
        {
          type: "saisie",
          question: "Donne l'**accusatif singulier** de ὁ θεός, avec l'article.",
          reponses: ["τὸν θεόν", "τον θεον"],
          explication: "Accusatif singulier : article τόν, terminaison -ον. Le premier mot prend le grave car un autre mot suit : **τὸν θεόν**.",
        },
        {
          type: "qcm",
          question: "Quelle forme de l'article s'accorde avec **ὁδῷ** (de ἡ ὁδός) ?",
          choix: ["τῇ", "τῷ", "τῆς", "τοῖς"],
          reponse: 0,
          explication: "ὁδῷ est un datif singulier, et ὁδός est féminin : l'article est donc τῇ (datif féminin singulier). τῷ serait masculin ou neutre.",
        },
        {
          type: "saisie",
          question: "Traduis en français : **τὰ δῶρα**",
          reponses: ["les cadeaux", "les dons", "les présents", "cadeaux", "dons", "présents"],
          explication: "τά est l'article neutre pluriel (nominatif ou accusatif) ; δῶρα est le pluriel neutre de δῶρον. **Les cadeaux** (ou les dons, les présents).",
        },
        {
          type: "redaction",
          question: "Analyse puis traduis ces phrases d'entraînement : 1) **ὁ δοῦλος τὸν ἵππον λύει.** 2) **οἱ ἄνθρωποι τοῖς θεοῖς δῶρα φέρουσιν.** (φέρουσιν : « ils apportent »)",
          corrige: `
**1) ὁ δοῦλος τὸν ἵππον λύει.**
- λύει : verbe conjugué, 3e personne du singulier du présent.
- ὁ δοῦλος : nominatif masculin singulier, sujet.
- τὸν ἵππον : accusatif masculin singulier, COD.
- Traduction : **L'esclave détache le cheval.**

**2) οἱ ἄνθρωποι τοῖς θεοῖς δῶρα φέρουσιν.**
- φέρουσιν : 3e personne du pluriel du présent, « ils apportent ».
- οἱ ἄνθρωποι : nominatif masculin pluriel, sujet (accord avec le verbe au pluriel).
- τοῖς θεοῖς : datif masculin pluriel, complément d'attribution (« aux dieux »).
- δῶρα : accusatif neutre pluriel, COD ; sans article, donc indéfini (« des présents »).
- Traduction : **Les hommes apportent des présents aux dieux.**

>! Méthode : repère d'abord le verbe conjugué, puis cherche le nominatif qui s'accorde avec lui (sujet), enfin les autres cas (accusatif = COD, datif = attribution). L'absence d'article se traduit par l'indéfini « un, des ».
`,
        },
      ],
    },
    {
      id: "premiere-declinaison-adjectifs",
      titre: "La 1re déclinaison et les adjectifs de 1re classe",
      theme: "Langue : le nom et l'adjectif",
      cours: `
## La 1re déclinaison : les féminins
Elle comprend surtout des noms **féminins en -α ou -η**. On distingue trois types au singulier ; le pluriel est le même pour tous.

| Cas | ἡ χώρα (le pays) | ἡ τιμή (l'honneur) | ἡ θάλαττα (la mer) |
|---|---|---|---|
| N. sg. | ἡ χώρα | ἡ τιμή | ἡ θάλαττα |
| V. sg. | ὦ χώρα | ὦ τιμή | ὦ θάλαττα |
| A. sg. | τὴν χώραν | τὴν τιμήν | τὴν θάλατταν |
| G. sg. | τῆς χώρας | τῆς τιμῆς | τῆς θαλάττης |
| D. sg. | τῇ χώρᾳ | τῇ τιμῇ | τῇ θαλάττῃ |
| N. pl. | αἱ χῶραι | αἱ τιμαί | αἱ θάλατται |
| A. pl. | τὰς χώρας | τὰς τιμάς | τὰς θαλάττας |
| G. pl. | τῶν χωρῶν | τῶν τιμῶν | τῶν θαλαττῶν |
| D. pl. | ταῖς χώραις | ταῖς τιμαῖς | ταῖς θαλάτταις |

- **α pur** : après ε, ι ou ρ, le α se garde à tous les cas du singulier (χώρα, οἰκία, ἡμέρα).
- **α impur** : après une autre lettre, le α (bref) devient η au génitif et au datif singulier (θάλαττα, θαλάττης ; γλῶττα, γλώττης ; μοῦσα, μούσης).
- Les noms en **-η** gardent η à tout le singulier.
- Au **génitif pluriel**, les noms de la 1re déclinaison sont **toujours** accentués **-ῶν**.

## La 1re déclinaison : les masculins
Quelques masculins en **-ης** ou **-ας** : ὁ πολίτης (le citoyen), ὁ στρατιώτης (le soldat), ὁ ποιητής (le poète), ὁ νεανίας (le jeune homme). Leur génitif singulier est en **-ου**, comme à la 2e déclinaison.

| Cas | ὁ πολίτης | ὁ νεανίας |
|---|---|---|
| N. sg. | ὁ πολίτης | ὁ νεανίας |
| V. sg. | ὦ πολῖτα | ὦ νεανία |
| A. sg. | τὸν πολίτην | τὸν νεανίαν |
| G. sg. | τοῦ πολίτου | τοῦ νεανίου |
| D. sg. | τῷ πολίτῃ | τῷ νεανίᾳ |
| N. pl. | οἱ πολῖται | οἱ νεανίαι |
| A. pl. | τοὺς πολίτας | τοὺς νεανίας |
| G. pl. | τῶν πολιτῶν | τῶν νεανιῶν |
| D. pl. | τοῖς πολίταις | τοῖς νεανίαις |

## Les adjectifs de 1re classe
Ils se déclinent sur la **2e déclinaison** au masculin et au neutre, sur la **1re** au féminin. On les cite par leurs trois nominatifs : **ἀγαθός, ἀγαθή, ἀγαθόν** (bon) ; **δίκαιος, δικαία, δίκαιον** (juste, avec α pur après ι).

| Cas | Masculin | Féminin | Neutre |
|---|---|---|---|
| N. sg. | ἀγαθός | ἀγαθή | ἀγαθόν |
| A. sg. | ἀγαθόν | ἀγαθήν | ἀγαθόν |
| G. sg. | ἀγαθοῦ | ἀγαθῆς | ἀγαθοῦ |
| D. sg. | ἀγαθῷ | ἀγαθῇ | ἀγαθῷ |
| N. pl. | ἀγαθοί | ἀγαθαί | ἀγαθά |
| A. pl. | ἀγαθούς | ἀγαθάς | ἀγαθά |
| G. pl. | ἀγαθῶν | ἀγαθῶν | ἀγαθῶν |
| D. pl. | ἀγαθοῖς | ἀγαθαῖς | ἀγαθοῖς |

Au vocatif masculin singulier : ἀγαθέ. Pour δίκαιος, le féminin fait δικαία, δικαίαν, δικαίας, δικαίᾳ ; pluriel δίκαιαι, δικαίας, δικαίων, δικαίαις (le génitif pluriel féminin de l'adjectif garde l'accent du masculin).

Certains adjectifs, surtout composés, n'ont que **deux terminaisons** : ἄδικος (m. et f.), ἄδικον (n.), « injuste ».

## Position attributive et position prédicative
C'est une notion essentielle pour traduire :
- **position attributive** (adjectif entre l'article et le nom, ou après un article répété) : ὁ ἀγαθὸς ποιητής ou ὁ ποιητὴς ὁ ἀγαθός = **le bon poète** ;
- **position prédicative** (adjectif hors du groupe article + nom) : ὁ ποιητὴς ἀγαθός ou ἀγαθὸς ὁ ποιητής = **le poète est bon** (le verbe « être » est sous-entendu).

## Vocabulaire
ἡ ψυχή : l'âme · ἡ νίκη : la victoire · ἡ ἀρετή : la valeur, la vertu · ἡ οἰκία : la maison · ἡ ἡμέρα : le jour · ἡ θεά : la déesse · ἡ γλῶττα : la langue · ἡ Μοῦσα : la Muse · καλός, -ή, -όν : beau · σοφός, -ή, -όν : savant, sage · μικρός, -ά, -όν : petit · ἄξιος, -α, -ον : digne.

>! **Exemple résolu** (phrase d'entraînement) : ἡ θεὰ τοῖς πολίταις τὴν νίκην φέρει.
>! φέρει : 3e sg. du présent, « elle apporte ». ἡ θεά : nominatif, sujet. τοῖς πολίταις : datif pluriel de ὁ πολίτης, attribution. τὴν νίκην : accusatif, COD.
>! Traduction : **La déesse apporte la victoire aux citoyens.**

> **À retenir** : χώρα (α pur), τιμή (η), θάλαττα (α impur : -ης, -ῃ au génitif et au datif) ; masculins πολίτης, νεανίας avec génitif en -ου ; adjectifs ἀγαθός, -ή, -όν ; position attributive = épithète, position prédicative = attribut.
`,
      exercices: [
        {
          type: "qcm",
          question: "Pourquoi ἡ χώρα garde-t-il α au génitif singulier (τῆς χώρας) ?",
          choix: ["Parce que le α suit un ρ (α pur)", "Parce que c'est un α impur", "Parce que le nom est masculin", "Parce que le nom est neutre"],
          reponse: 0,
          explication: "Après ε, ι ou ρ, le α est dit « pur » et se maintient à tout le singulier : χώρα, χώρας, χώρᾳ. Le α impur (θάλαττα) devient η au génitif et au datif.",
        },
        {
          type: "saisie",
          question: "Donne le **génitif singulier** de ἡ τιμή, avec l'article.",
          reponses: ["τῆς τιμῆς", "της τιμης"],
          explication: "Nom en -η : le η se garde partout au singulier. Génitif : **τῆς τιμῆς** (circonflexe car le mot est accentué sur la finale au nominatif).",
        },
        {
          type: "saisie",
          question: "Donne l'**accusatif pluriel** de ἡ χώρα, avec l'article.",
          reponses: ["τὰς χώρας", "τας χωρας"],
          explication: "Accusatif pluriel de la 1re déclinaison : -ας ; article τάς, qui prend le grave devant un autre mot : **τὰς χώρας**. Attention, χώρας est aussi le génitif singulier : seul l'article (τῆς ou τάς) tranche.",
        },
        {
          type: "saisie",
          question: "Donne le **génitif singulier** de ὁ πολίτης, avec l'article.",
          reponses: ["τοῦ πολίτου", "του πολιτου"],
          explication: "Les masculins de la 1re déclinaison ont un génitif singulier en -ου, emprunté à la 2e déclinaison : **τοῦ πολίτου**, « du citoyen ».",
        },
        {
          type: "vf",
          question: "Le génitif pluriel des **noms** de la 1re déclinaison est toujours accentué en -ῶν.",
          reponse: true,
          explication: "Oui : τῶν χωρῶν, τῶν τιμῶν, τῶν θαλαττῶν, τῶν πολιτῶν. (Les adjectifs comme δίκαιος, eux, font δικαίων au féminin, sur le modèle du masculin.)",
        },
        {
          type: "qcm",
          question: "Quelle forme de ἀγαθός s'accorde avec **ταῖς ψυχαῖς** ?",
          choix: ["ἀγαθοῖς", "ἀγαθαῖς", "ἀγαθάς", "ἀγαθῶν"],
          reponse: 1,
          explication: "ταῖς ψυχαῖς est un datif féminin pluriel : l'adjectif doit être au datif féminin pluriel, ἀγαθαῖς. ἀγαθοῖς est masculin ou neutre, ἀγαθάς est un accusatif, ἀγαθῶν un génitif.",
        },
        {
          type: "qcm",
          question: "Que signifie **ὁ ποιητὴς σοφός** ?",
          choix: ["Le poète savant", "Ô poète savant", "Du poète savant", "Le poète est savant"],
          reponse: 3,
          explication: "L'adjectif σοφός est hors du groupe article + nom : il est en **position prédicative**, c'est un attribut et le verbe « être » est sous-entendu. « Le poète savant » se dirait ὁ σοφὸς ποιητής.",
        },
        {
          type: "saisie",
          question: "Donne le **nominatif pluriel féminin** de l'adjectif δίκαιος, δικαία, δίκαιον.",
          reponses: ["δίκαιαι", "δικαιαι"],
          explication: "Le féminin se décline sur la 1re déclinaison : nominatif pluriel en -αι, **δίκαιαι** (accent sur l'antépénultième, car la finale -αι compte comme brève pour l'accent).",
        },
        {
          type: "redaction",
          question: "Analyse puis traduis ces phrases d'entraînement : 1) **ἡ θεὰ τοῖς πολίταις τὴν νίκην φέρει.** 2) **ὁ ἀγαθὸς στρατιώτης τὴν χώραν φυλάττει.** 3) **ἡ οἰκία μικρά.** (φυλάττει : « il garde »)",
          corrige: `
**1)** φέρει, 3e personne du singulier du présent ; sujet ἡ θεά (nominatif féminin singulier) ; τοῖς πολίταις, datif pluriel de ὁ πολίτης (1re déclinaison masculine), complément d'attribution ; τὴν νίκην, accusatif singulier, COD.
Traduction : **La déesse apporte la victoire aux citoyens.**

**2)** φυλάττει, 3e personne du singulier ; sujet ὁ στρατιώτης ; ἀγαθός est entre l'article et le nom : **position attributive**, c'est une épithète. τὴν χώραν : accusatif, COD.
Traduction : **Le bon soldat garde le pays.**

**3)** Pas de verbe conjugué : l'adjectif μικρά est en dehors du groupe ἡ οἰκία, donc en **position prédicative** ; on sous-entend « est ».
Traduction : **La maison est petite.** (« La petite maison » se dirait ἡ μικρὰ οἰκία.)

>! Retiens le réflexe : adjectif « encadré » par l'article = épithète ; adjectif « à l'extérieur » = attribut avec « être » sous-entendu.
`,
        },
      ],
    },
    {
      id: "troisieme-declinaison",
      titre: "La 3e déclinaison et les adjectifs de 2e classe",
      theme: "Langue : le nom et l'adjectif",
      cours: `
## Principe : le radical se lit au génitif
À la 3e déclinaison, le nominatif est souvent transformé : pour trouver le **radical**, on part du **génitif singulier** en retirant -ος. C'est pourquoi le dictionnaire donne toujours les deux formes : ὁ φύλαξ, φύλακος (radical φυλακ-) ; τὸ σῶμα, σώματος (radical σωματ-).

| Cas | Masc. / fém. | Neutre |
|---|---|---|
| N. sg. | -ς ou rien | rien |
| A. sg. | -α (ou -ν) | rien (= N.) |
| G. sg. | -ος | -ος |
| D. sg. | -ι | -ι |
| N. pl. | -ες | -α |
| A. pl. | -ας | -α |
| G. pl. | -ων | -ων |
| D. pl. | -σι(ν) | -σι(ν) |

## Thèmes en consonne usuels

| Cas | ὁ φύλαξ (le gardien) | ὁ ῥήτωρ (l'orateur) | τὸ σῶμα (le corps) |
|---|---|---|---|
| N. sg. | φύλαξ | ῥήτωρ | σῶμα |
| V. sg. | φύλαξ | ῥῆτορ | σῶμα |
| A. sg. | φύλακα | ῥήτορα | σῶμα |
| G. sg. | φύλακος | ῥήτορος | σώματος |
| D. sg. | φύλακι | ῥήτορι | σώματι |
| N. pl. | φύλακες | ῥήτορες | σώματα |
| A. pl. | φύλακας | ῥήτορας | σώματα |
| G. pl. | φυλάκων | ῥητόρων | σωμάτων |
| D. pl. | φύλαξι(ν) | ῥήτορσι(ν) | σώμασι(ν) |

**Phonétique** devant le σ du nominatif et du datif pluriel :
- gutturale (κ, γ, χ) + σ → **ξ** : φυλακ-ς → φύλαξ ; φυλακ-σι → φύλαξι ;
- labiale (π, β, φ) + σ → **ψ** : ὁ Ἄραψ, Ἄραβος (l'Arabe) ;
- dentale (τ, δ, θ) + σ → **σ** : ἡ ἐλπίς, ἐλπίδος (l'espoir), datif pluriel ἐλπίσι ; σωματ-σι → σώμασι ;
- ντ + σ → σ, avec allongement : ὁ γέρων, γέροντος (le vieillard), datif pluriel γέρουσι.

## Le thème en sigma : τὸ γένος, γένους
Le σ final du radical (γενεσ-) tombe entre deux voyelles, et les voyelles se contractent : d'où des formes particulières.

| Cas | Singulier | Pluriel |
|---|---|---|
| N. V. A. | γένος | γένη |
| G. | γένους | γενῶν |
| D. | γένει | γένεσι(ν) |

Même modèle : τὸ ξίφος, ξίφους (l'épée), τὸ ἔθνος, ἔθνους (le peuple), τὸ ὄρος, ὄρους (la montagne).

## Noms usuels à connaître
ὁ ἀνήρ, ἀνδρός : l'homme (le mâle) · ἡ γυνή, γυναικός : la femme · ὁ / ἡ παῖς, παιδός : l'enfant · ὁ πατήρ, πατρός : le père · ἡ μήτηρ, μητρός : la mère · ὁ Ἕλλην, Ἕλληνος : le Grec · ἡ νύξ, νυκτός : la nuit · τὸ ὄνομα, ὀνόματος : le nom · τὸ πρᾶγμα, πράγματος : la chose, l'affaire · ὁ δαίμων, δαίμονος : la divinité.

Le mot ἡ πόλις (la cité) appartient aussi à la 3e déclinaison, mais à un thème en voyelle : πόλις, πόλιν, πόλεως, πόλει ; pluriel πόλεις, πόλεων, πόλεσι(ν). Apprends-le tel quel, il est partout.

## Les adjectifs de 2e classe
Ils se déclinent sur la **3e déclinaison** et n'ont que **deux formes** : une pour le masculin et le féminin, une pour le neutre.

| Cas | εὐδαίμων (m. f.) | εὔδαιμον (n.) | ἀληθής (m. f.) | ἀληθές (n.) |
|---|---|---|---|---|
| N. sg. | εὐδαίμων | εὔδαιμον | ἀληθής | ἀληθές |
| A. sg. | εὐδαίμονα | εὔδαιμον | ἀληθῆ | ἀληθές |
| G. sg. | εὐδαίμονος | εὐδαίμονος | ἀληθοῦς | ἀληθοῦς |
| D. sg. | εὐδαίμονι | εὐδαίμονι | ἀληθεῖ | ἀληθεῖ |
| N. pl. | εὐδαίμονες | εὐδαίμονα | ἀληθεῖς | ἀληθῆ |
| A. pl. | εὐδαίμονας | εὐδαίμονα | ἀληθεῖς | ἀληθῆ |
| G. pl. | εὐδαιμόνων | εὐδαιμόνων | ἀληθῶν | ἀληθῶν |
| D. pl. | εὐδαίμοσι(ν) | εὐδαίμοσι(ν) | ἀληθέσι(ν) | ἀληθέσι(ν) |

εὐδαίμων signifie « heureux » (littéralement « qui a un bon δαίμων ») ; ἀληθής signifie « vrai ». Le neutre pluriel substantivé τὰ ἀληθῆ veut dire « la vérité, les choses vraies ».

>! **Exemple résolu** : à quel cas est ῥήτορσι ?
>! Le radical est ῥητορ- (génitif ῥήτορος) ; la terminaison -σι est celle du **datif pluriel** : τοῖς ῥήτορσι, « aux orateurs ».

> **À retenir** : radical = génitif moins -ος ; terminaisons -α, -ος, -ι / -ες, -ας, -ων, -σι ; κ + σ = ξ, π + σ = ψ, dentale + σ = σ ; γένος, γένους, pluriel γένη ; adjectifs à deux formes εὐδαίμων, εὔδαιμον et ἀληθής, ἀληθές.
`,
      exercices: [
        {
          type: "qcm",
          question: "Pour trouver le radical d'un nom de la 3e déclinaison, à partir de quelle forme faut-il travailler ?",
          choix: ["Le nominatif singulier", "Le génitif singulier", "L'accusatif pluriel", "Le vocatif singulier"],
          reponse: 1,
          explication: "Le nominatif est souvent altéré (φύλαξ, σῶμα). Le génitif singulier montre le radical intact : φύλακ-ος, σώματ-ος.",
        },
        {
          type: "saisie",
          question: "Donne le **génitif singulier** de ὁ φύλαξ, avec l'article.",
          reponses: ["τοῦ φύλακος", "του φυλακος"],
          explication: "Radical φυλακ- + -ος : **τοῦ φύλακος**, « du gardien ».",
        },
        {
          type: "saisie",
          question: "Donne le **datif pluriel** de τὸ σῶμα, avec l'article.",
          reponses: ["τοῖς σώμασι", "τοῖς σώμασιν", "τοις σωμασι", "τοις σωμασιν"],
          explication: "Radical σωματ- + -σι : la dentale τ tombe devant σ, d'où **τοῖς σώμασι(ν)**. Le ν final (dit « éphelcystique ») s'ajoute souvent devant une voyelle ou une pause.",
        },
        {
          type: "qcm",
          question: "Quel est le **nominatif pluriel** de τὸ γένος, γένους ?",
          choix: ["γένοι", "γένους", "γένη", "γένεσι"],
          reponse: 2,
          explication: "γενεσ-α : le σ tombe entre voyelles, puis ε + α se contractent en η : **γένη**. γένους est le génitif singulier, γένεσι le datif pluriel ; γένοι n'existe pas.",
        },
        {
          type: "vf",
          question: "Dans φύλαξ, la lettre ξ résulte de la rencontre de κ et de σ.",
          reponse: true,
          explication: "Oui : radical φυλακ- + σ du nominatif → φύλαξ. De même au datif pluriel : φύλαξι.",
        },
        {
          type: "saisie",
          question: "Donne l'**accusatif singulier** de ὁ ῥήτωρ, avec l'article.",
          reponses: ["τὸν ῥήτορα", "τον ρητορα"],
          explication: "Radical ῥητορ- + -α : **τὸν ῥήτορα**. Attention, le ω du nominatif devient ο dans le reste de la déclinaison.",
        },
        {
          type: "qcm",
          question: "Laquelle de ces formes est un **génitif pluriel** ?",
          choix: ["ῥήτορες", "ῥητόρων", "ῥήτορσι", "ῥήτορα"],
          reponse: 1,
          explication: "-ων est la terminaison du génitif pluriel : ῥητόρων, « des orateurs ». ῥήτορες = nominatif pluriel, ῥήτορσι = datif pluriel, ῥήτορα = accusatif singulier.",
        },
        {
          type: "saisie",
          question: "Donne le **nominatif neutre singulier** de l'adjectif ἀληθής (vrai).",
          reponses: ["ἀληθές", "αληθες"],
          explication: "Adjectif de 2e classe : ἀληθής (masculin et féminin), **ἀληθές** (neutre).",
        },
        {
          type: "vf",
          question: "L'adjectif εὐδαίμων a la même forme au masculin et au féminin.",
          reponse: true,
          explication: "Oui, c'est le propre des adjectifs de 2e classe : ὁ εὐδαίμων ἀνήρ, ἡ εὐδαίμων γυνή ; seul le neutre diffère (τὸ εὔδαιμον).",
        },
        {
          type: "redaction",
          question: "Analyse puis traduis ces phrases d'entraînement : 1) **οἱ φύλακες τοὺς Ἕλληνας σῴζουσιν.** 2) **ὁ ῥήτωρ τοῖς πολίταις τὰ ἀληθῆ λέγει.** (σῴζω : sauver ; λέγω : dire)",
          corrige: `
**1) οἱ φύλακες τοὺς Ἕλληνας σῴζουσιν.**
- σῴζουσιν : 3e personne du pluriel du présent, « ils sauvent ».
- οἱ φύλακες : nominatif pluriel de ὁ φύλαξ, φύλακος, sujet.
- τοὺς Ἕλληνας : accusatif pluriel de ὁ Ἕλλην, Ἕλληνος, COD.
- Traduction : **Les gardiens sauvent les Grecs.**

**2) ὁ ῥήτωρ τοῖς πολίταις τὰ ἀληθῆ λέγει.**
- λέγει : 3e personne du singulier du présent, « il dit ».
- ὁ ῥήτωρ : nominatif singulier, sujet.
- τοῖς πολίταις : datif pluriel de ὁ πολίτης (1re déclinaison), complément d'attribution.
- τὰ ἀληθῆ : accusatif neutre pluriel de l'adjectif ἀληθής, employé comme nom avec l'article (« les choses vraies »), COD.
- Traduction : **L'orateur dit la vérité aux citoyens.**

>! Méthode : pour chaque nom de 3e déclinaison, rattache la forme au couple nominatif-génitif du dictionnaire (φύλακες → φύλαξ, φύλακος), puis identifie la terminaison (-ες = nominatif pluriel). Un neutre pluriel substantivé se traduit souvent par un nom abstrait.
`,
        },
      ],
    },
    {
      id: "pronoms",
      titre: "Les pronoms : personnels, démonstratifs, relatif",
      theme: "Langue : le nom et l'adjectif",
      cours: `
## Les pronoms personnels
| Cas | ἐγώ (je) | σύ (tu) | ἡμεῖς (nous) | ὑμεῖς (vous) |
|---|---|---|---|---|
| N. | ἐγώ | σύ | ἡμεῖς | ὑμεῖς |
| A. | ἐμέ, με | σέ, σε | ἡμᾶς | ὑμᾶς |
| G. | ἐμοῦ, μου | σοῦ, σου | ἡμῶν | ὑμῶν |
| D. | ἐμοί, μοι | σοί, σοι | ἡμῖν | ὑμῖν |

- Les formes courtes (με, μου, μοι, σε, σου, σοι) sont **enclitiques** (sans accent propre) ; les formes longues sont **toniques** (insistance, après préposition).
- Le pronom sujet n'est exprimé que pour **insister** : la terminaison du verbe suffit (λέγω = je dis ; ἐγὼ λέγω = moi, je dis).

## αὐτός, αὐτή, αὐτό
Il se décline comme ἀγαθός (sauf le neutre singulier αὐτό). Il a trois emplois :
- aux cas autres que le nominatif, seul, c'est le **pronom de 3e personne** : ὁρῶ αὐτόν, « je le vois » ; τὸ βιβλίον αὐτοῦ, « son livre » ;
- en **position attributive** (après l'article), il signifie « **le même** » : ὁ αὐτὸς ἀνήρ, « le même homme » ;
- en **position prédicative**, il signifie « **lui-même** » : αὐτὸς ὁ ἀνήρ, « l'homme lui-même ».

Le réfléchi « soi-même » se dit ἐμαυτόν (moi-même), σεαυτόν (toi-même), ἑαυτόν (soi-même) : Γνῶθι σεαυτόν, « Connais-toi toi-même ».

## Les démonstratifs
| Cas | Masculin | Féminin | Neutre |
|---|---|---|---|
| N. sg. | οὗτος | αὕτη | τοῦτο |
| A. sg. | τοῦτον | ταύτην | τοῦτο |
| G. sg. | τούτου | ταύτης | τούτου |
| D. sg. | τούτῳ | ταύτῃ | τούτῳ |
| N. pl. | οὗτοι | αὗται | ταῦτα |
| A. pl. | τούτους | ταύτας | ταῦτα |
| G. pl. | τούτων | τούτων | τούτων |
| D. pl. | τούτοις | ταύταις | τούτοις |

- **οὗτος, αὕτη, τοῦτο** : « celui-ci, ce… » (souvent ce dont on vient de parler).
- **ὅδε, ἥδε, τόδε** (article + -δε) : « celui-ci, que voici » (souvent ce qui va suivre).
- **ἐκεῖνος, ἐκείνη, ἐκεῖνο** : « celui-là, ce… là ».

> Avec un nom, le démonstratif se met en **position prédicative** et le nom **garde l'article** : οὗτος ὁ ἀνήρ ou ὁ ἀνὴρ οὗτος = « cet homme ».

## Le pronom relatif ὅς, ἥ, ὅ (qui, que, dont…)
| Cas | Masculin | Féminin | Neutre |
|---|---|---|---|
| N. sg. | ὅς | ἥ | ὅ |
| A. sg. | ὅν | ἥν | ὅ |
| G. sg. | οὗ | ἧς | οὗ |
| D. sg. | ᾧ | ᾗ | ᾧ |
| N. pl. | οἵ | αἵ | ἅ |
| A. pl. | οὕς | ἅς | ἅ |
| G. pl. | ὧν | ὧν | ὧν |
| D. pl. | οἷς | αἷς | οἷς |

Ses formes ressemblent à celles de l'article, mais avec un **esprit rude et un accent partout** (ὅς, ἥ, ὅ). Règle d'accord : le relatif prend le **genre et le nombre de son antécédent**, mais son **cas dépend de sa fonction dans la relative**.

>! **Exemple résolu** (phrase d'entraînement) : ὁ ἀνήρ, ὃν ὁρᾷς, σοφός ἐστιν.
>! Antécédent : ὁ ἀνήρ (masculin singulier). Dans la relative ὃν ὁρᾷς (« que tu vois »), le relatif est COD de ὁρᾷς : accusatif masculin singulier ὅν.
>! Traduction : **L'homme que tu vois est savant.**

> **À retenir** : ἐγώ, σύ, ἡμεῖς, ὑμεῖς ; αὐτόν = le, lui ; ὁ αὐτός = le même ; αὐτὸς ὁ… = … lui-même ; οὗτος ὁ ἀνήρ = cet homme ; relatif ὅς, ἥ, ὅ : genre et nombre de l'antécédent, cas de la fonction.
`,
      exercices: [
        {
          type: "qcm",
          question: "Que signifie le pronom **ἡμεῖς** ?",
          choix: ["je", "tu", "nous", "vous"],
          reponse: 2,
          explication: "ἡμεῖς = nous ; ὑμεῖς = vous (attention à l'esprit et à la voyelle initiale : ἡ / ὑ). ἐγώ = je, σύ = tu.",
        },
        {
          type: "saisie",
          question: "Donne la forme **tonique** du datif de σύ (« à toi »).",
          reponses: ["σοί", "σοι"],
          explication: "Datif de σύ : forme tonique **σοί**, forme enclitique σοι.",
        },
        {
          type: "qcm",
          question: "Que signifie **ὁ αὐτὸς ποιητής** ?",
          choix: ["Le poète lui-même", "Le même poète", "Ce poète", "Son poète"],
          reponse: 1,
          explication: "αὐτός est entre l'article et le nom (position attributive) : il signifie « le même ». « Le poète lui-même » se dirait αὐτὸς ὁ ποιητής (position prédicative).",
        },
        {
          type: "saisie",
          question: "Donne l'**accusatif masculin singulier** du démonstratif οὗτος.",
          reponses: ["τοῦτον", "τουτον"],
          explication: "οὗτος, αὕτη, τοῦτο ; accusatif masculin : **τοῦτον** (« celui-ci, ce… » COD).",
        },
        {
          type: "vf",
          question: "Quand un démonstratif accompagne un nom, ce nom garde son article.",
          reponse: true,
          explication: "Oui : οὗτος ὁ ἀνήρ (ou ὁ ἀνὴρ οὗτος) = « cet homme ». Le démonstratif est en position prédicative, mais on traduit simplement par « ce, cet, cette ».",
        },
        {
          type: "saisie",
          question: "Donne le **nominatif-accusatif neutre pluriel** de οὗτος (« ces choses-ci »).",
          reponses: ["ταῦτα", "ταυτα"],
          explication: "Neutre pluriel : **ταῦτα**, très fréquent au sens de « cela, ces choses ».",
        },
        {
          type: "qcm",
          question: "Dans la phrase d'entraînement **ὁ ἀνήρ, ὃν ὁρᾷς, σοφός ἐστιν**, comment s'analyse ὅν ?",
          choix: ["Nominatif masculin singulier, sujet", "Génitif masculin singulier", "Accusatif masculin singulier, COD de ὁρᾷς", "Accusatif neutre singulier"],
          reponse: 2,
          explication: "ὅν est l'accusatif masculin singulier du relatif : masculin singulier comme son antécédent ὁ ἀνήρ, accusatif car il est COD de ὁρᾷς (« que tu vois »).",
        },
        {
          type: "qcm",
          question: "Quelle est la forme du pronom relatif au **datif féminin singulier** ?",
          choix: ["ἥ", "ἧς", "ᾗ", "ᾧ"],
          reponse: 2,
          explication: "Datif féminin singulier : **ᾗ** (esprit rude, circonflexe, iota souscrit), comme l'article τῇ mais sans τ. ἥ est le nominatif féminin, ἧς le génitif féminin, ᾧ le datif masculin ou neutre.",
        },
        {
          type: "redaction",
          question: "Analyse puis traduis ces phrases d'entraînement : 1) **οὗτος ὁ ἀνὴρ τὴν πόλιν σῴζει.** 2) **ὁ διδάσκαλος αὐτὸν παιδεύει.** 3) **ὁ ποιητής, οὗ τὰ βιβλία ἀναγιγνώσκεις, σοφός ἐστιν.** (σῴζω : sauver ; ὁ διδάσκαλος : le maître ; παιδεύω : éduquer ; ἀναγιγνώσκω : lire)",
          corrige: `
**1)** σῴζει, 3e sg. du présent ; sujet οὗτος ὁ ἀνήρ (démonstratif + article + nom) ; τὴν πόλιν, accusatif de ἡ πόλις, COD.
Traduction : **Cet homme sauve la cité.**

**2)** παιδεύει, 3e sg. ; sujet ὁ διδάσκαλος ; αὐτόν, accusatif masculin singulier de αὐτός employé seul : pronom de 3e personne, COD.
Traduction : **Le maître l'éduque.**

**3)** Verbe principal : ἐστιν (« est »), sujet ὁ ποιητής, attribut σοφός. Relative : οὗ τὰ βιβλία ἀναγιγνώσκεις. Le relatif οὗ est masculin singulier comme ὁ ποιητής, et au génitif car il est complément du nom τὰ βιβλία (« les livres de qui » = « dont »).
Traduction : **Le poète dont tu lis les livres est savant.**

>! Pour un relatif, procède en deux temps : genre et nombre → antécédent ; cas → fonction dans la relative. Un génitif complément du nom se traduit par « dont ».
`,
        },
      ],
    },
    {
      id: "present-imparfait-eimi",
      titre: "Le présent, l'imparfait et le verbe εἰμί",
      theme: "Langue : le verbe",
      cours: `
## Comment se forme un verbe grec
Une forme verbale se décompose en : (augment) + **radical** + (voyelle thématique) + **désinence**. Le verbe modèle est **λύω** (délier, détacher, libérer). Le dictionnaire donne la 1re personne du singulier du présent : λύω = « je délie ».

## Le présent de l'indicatif actif
| Personne | Forme | Traduction |
|---|---|---|
| 1re sg. | λύω | je délie |
| 2e sg. | λύεις | tu délies |
| 3e sg. | λύει | il / elle délie |
| 1re pl. | λύομεν | nous délions |
| 2e pl. | λύετε | vous déliez |
| 3e pl. | λύουσι(ν) | ils / elles délient |

**Infinitif présent** : λύειν, « délier ».

## L'imparfait de l'indicatif actif
L'imparfait se forme sur le **radical du présent**, avec un **augment** devant et des désinences secondaires.

| Personne | Forme | Traduction |
|---|---|---|
| 1re sg. | ἔλυον | je déliais |
| 2e sg. | ἔλυες | tu déliais |
| 3e sg. | ἔλυε(ν) | il déliait |
| 1re pl. | ἐλύομεν | nous déliions |
| 2e pl. | ἐλύετε | vous déliiez |
| 3e pl. | ἔλυον | ils déliaient |

Attention : **ἔλυον** est à la fois 1re personne du singulier et 3e personne du pluriel ; le contexte (le sujet) tranche.

## L'augment
L'augment est la marque du **passé** à l'indicatif (imparfait, aoriste).
- **Augment syllabique** : devant consonne, on ajoute ἐ- : παιδεύω → ἐπαίδευον ; γράφω → ἔγραφον.
- **Augment temporel** : devant voyelle, on **allonge** la voyelle initiale :

| Initiale | Devient | Exemple |
|---|---|---|
| α, ε | η | ἄγω → ἦγον ; ἐθέλω → ἤθελον |
| ο | ω | ὀνομάζω → ὠνόμαζον |
| ι, υ | ῑ, ῡ (long) | ἱκετεύω → ἱκέτευον |
| αι, οι | ῃ, ῳ | αἰτέω → ᾔτουν ; οἰκέω → ᾤκουν |
| αυ | ηυ | αὐξάνω → ηὔξανον |

- **Verbes composés** : l'augment se place **entre le préverbe et le verbe** : ἀποπέμπω → ἀπέπεμπον (le ο de ἀπό s'élide) ; εἰσφέρω → εἰσέφερον.
- Irrégulier fréquent : ἔχω → **εἶχον** (j'avais).

## Le verbe εἰμί (être)
| Personne | Présent | Imparfait |
|---|---|---|
| 1re sg. | εἰμί (je suis) | ἦ ou ἦν (j'étais) |
| 2e sg. | εἶ | ἦσθα |
| 3e sg. | ἐστί(ν) | ἦν |
| 1re pl. | ἐσμέν | ἦμεν |
| 2e pl. | ἐστέ | ἦτε |
| 3e pl. | εἰσί(ν) | ἦσαν |

**Infinitif** : εἶναι. Les formes du présent (sauf εἶ) sont **enclitiques** : elles s'appuient sur le mot précédent. En tête de phrase, ἔστι signifie souvent « il y a, il existe ».

## Deux règles de syntaxe utiles
- **Neutre pluriel sujet → verbe au singulier** : τὰ ζῷα τρέχει, « les animaux courent ».
- Le verbe être est souvent **sous-entendu** : ὁ βίος βραχύς, « la vie est brève ».

## Valeurs de l'imparfait
L'imparfait exprime une action **passée envisagée dans sa durée** : action en cours, habitude, répétition, ou tentative (« il essayait de… »).

## Vocabulaire
ἄγω : conduire · γράφω : écrire · λέγω : dire · φέρω : porter, apporter · ἔχω : avoir · πέμπω : envoyer · παιδεύω : éduquer · κελεύω : ordonner · φυλάττω : garder · βλέπω : regarder · θύω : sacrifier · πιστεύω : croire, avoir confiance.

>! **Exemple résolu** : ἐπαίδευον. Augment ἐ- + radical παιδευ- + -ον : imparfait, 1re sg. ou 3e pl. Avec le sujet οἱ διδάσκαλοι : « les maîtres éduquaient ».

> **À retenir** : λύω, λύεις, λύει, λύομεν, λύετε, λύουσι ; ἔλυον, ἔλυες, ἔλυε, ἐλύομεν, ἐλύετε, ἔλυον ; augment ἐ- ou allongement, placé après le préverbe ; εἰμί, εἶ, ἐστί, ἐσμέν, ἐστέ, εἰσί ; ἦ (ἦν), ἦσθα, ἦν, ἦμεν, ἦτε, ἦσαν ; neutre pluriel + verbe au singulier.
`,
      exercices: [
        {
          type: "saisie",
          question: "Conjugue λύω à la **3e personne du pluriel** du présent de l'indicatif actif.",
          reponses: ["λύουσι", "λύουσιν", "λυουσι", "λυουσιν"],
          explication: "**λύουσι(ν)**, « ils délient ». Le ν final peut s'ajouter devant voyelle ou en fin de phrase.",
        },
        {
          type: "qcm",
          question: "Identifie la forme **ἐλύομεν**.",
          choix: ["Présent, 1re pers. du pluriel", "Imparfait, 1re pers. du pluriel", "Aoriste, 1re pers. du pluriel", "Futur, 1re pers. du pluriel"],
          reponse: 1,
          explication: "Augment ἐ- + radical du présent λυ- + -ομεν : imparfait, « nous déliions ». Le présent serait λύομεν (sans augment), l'aoriste ἐλύσαμεν, le futur λύσομεν.",
        },
        {
          type: "saisie",
          question: "Donne la **1re personne du singulier** de l'imparfait de ἄγω (conduire).",
          reponses: ["ἦγον", "ηγον"],
          explication: "Le verbe commence par une voyelle : augment temporel, α → η. **ἦγον**, « je conduisais ».",
        },
        {
          type: "saisie",
          question: "Donne la **3e personne du singulier** du présent de εἰμί.",
          reponses: ["ἐστί", "ἐστίν", "ἐστι", "ἐστιν", "εστι", "εστιν"],
          explication: "**ἐστί(ν)**, « il est ». C'est une forme enclitique : dans une phrase, elle perd souvent son accent (σοφός ἐστιν).",
        },
        {
          type: "vf",
          question: "La forme ἔλυον peut être une 1re personne du singulier ou une 3e personne du pluriel.",
          reponse: true,
          explication: "Oui, à l'imparfait (comme à l'aoriste thématique), la 1re sg. et la 3e pl. sont identiques : ἔλυον = « je déliais » ou « ils déliaient ». Le sujet exprimé permet de trancher.",
        },
        {
          type: "qcm",
          question: "Quel est l'**infinitif présent actif** de γράφω ?",
          choix: ["γράφειν", "γράφει", "γράφων", "ἔγραφεν"],
          reponse: 0,
          explication: "L'infinitif présent actif se termine en -ειν : γράφειν, « écrire ». γράφει = « il écrit », γράφων = participe, ἔγραφεν = imparfait 3e sg.",
        },
        {
          type: "saisie",
          question: "Donne la **3e personne du pluriel** de l'imparfait de εἰμί.",
          reponses: ["ἦσαν", "ησαν"],
          explication: "**ἦσαν**, « ils étaient ».",
        },
        {
          type: "qcm",
          question: "Quelle est la 3e personne du singulier de l'imparfait de ἀποπέμπω (renvoyer) ?",
          choix: ["ἐαποπέμπε", "ἀπέπεμπε", "ἀποπέμπε", "ἀποπέμψει"],
          reponse: 1,
          explication: "Dans un verbe composé, l'augment se place entre le préverbe et le verbe ; le ο de ἀπό s'élide devant l'augment ε : ἀπ-έ-πεμπε(ν), « il renvoyait ».",
        },
        {
          type: "redaction",
          question: "Conjugue **φέρω** (porter) au présent et à l'imparfait de l'indicatif actif, avec la traduction de chaque forme.",
          corrige: `
| Personne | Présent | Imparfait |
|---|---|---|
| 1re sg. | φέρω (je porte) | ἔφερον (je portais) |
| 2e sg. | φέρεις (tu portes) | ἔφερες (tu portais) |
| 3e sg. | φέρει (il porte) | ἔφερε(ν) (il portait) |
| 1re pl. | φέρομεν (nous portons) | ἐφέρομεν (nous portions) |
| 2e pl. | φέρετε (vous portez) | ἐφέρετε (vous portiez) |
| 3e pl. | φέρουσι(ν) (ils portent) | ἔφερον (ils portaient) |

Infinitif présent : φέρειν.

>! Points de contrôle : augment syllabique ἐ- car le verbe commence par une consonne ; l'accent remonte le plus haut possible (ἔφερον, mais ἐφέρομεν car il ne peut dépasser l'antépénultième) ; 1re sg. et 3e pl. de l'imparfait identiques.
`,
        },
        {
          type: "redaction",
          question: "Traduis et analyse les verbes : 1) **τὰ ζῷα ἐν τῷ ἀγρῷ ἐστιν.** (phrase d'entraînement) 2) **Ἐν ἀρχῇ ἦν ὁ λόγος.** (début de l'Évangile de Jean, en grec de la koinè ; ἡ ἀρχή : le commencement) 3) **ὁ διδάσκαλος τοὺς παῖδας ἐπαίδευεν.** (phrase d'entraînement)",
          corrige: `
**1)** ἐστιν : 3e sg. du présent de εἰμί. Le sujet τὰ ζῷα est un **neutre pluriel**, d'où le verbe au singulier. ἐν τῷ ἀγρῷ : ἐν + datif, lieu où l'on est.
Traduction : **Les animaux sont dans le champ.**

**2)** ἦν : 3e sg. de l'imparfait de εἰμί. Sujet : ὁ λόγος (nominatif). ἐν ἀρχῇ : ἐν + datif de ἡ ἀρχή.
Traduction : **Au commencement était le Verbe** (λόγος : la Parole, le Verbe).

**3)** ἐπαίδευεν : augment ἐ- + radical παιδευ- + -ε(ν) : imparfait, 3e sg. Sujet ὁ διδάσκαλος ; COD τοὺς παῖδας (accusatif pluriel de ὁ παῖς, παιδός).
Traduction : **Le maître éduquait les enfants.** L'imparfait souligne la durée ou l'habitude.
`,
        },
      ],
    },
    {
      id: "futur-aoriste",
      titre: "Le futur et l'aoriste de l'indicatif",
      theme: "Langue : le verbe",
      cours: `
## Le futur sigmatique
Le futur se forme en ajoutant **-σ-** au radical, avec les désinences du présent.

| Personne | Futur de λύω | Traduction |
|---|---|---|
| 1re sg. | λύσω | je délierai |
| 2e sg. | λύσεις | tu délieras |
| 3e sg. | λύσει | il déliera |
| 1re pl. | λύσομεν | nous délierons |
| 2e pl. | λύσετε | vous délierez |
| 3e pl. | λύσουσι(ν) | ils délieront |

**Infinitif futur** : λύσειν.

**Rencontres de consonnes** avec le σ :
- labiale (π, β, φ) + σ → **ψ** : πέμπω → πέμψω ; γράφω → γράψω ; βλέπω → βλέψω ;
- gutturale (κ, γ, χ) + σ → **ξ** : ἄγω → ἄξω ; ἄρχω → ἄρξω ; διώκω → διώξω ; πράττω → πράξω ; φυλάττω → φυλάξω ;
- dentale (τ, δ, θ) + σ → **σ** : πείθω → πείσω ; σῴζω → σώσω.

Le futur de **εἰμί** a des formes moyennes : ἔσομαι, ἔσῃ (ou ἔσει), **ἔσται**, ἐσόμεθα, ἔσεσθε, ἔσονται ; infinitif ἔσεσθαι.

## L'aoriste sigmatique (aoriste 1er)
Augment + radical + **-σα-** + désinences.

| Personne | Aoriste de λύω | Traduction |
|---|---|---|
| 1re sg. | ἔλυσα | je déliai, j'ai délié |
| 2e sg. | ἔλυσας | tu délias |
| 3e sg. | ἔλυσε(ν) | il délia |
| 1re pl. | ἐλύσαμεν | nous déliâmes |
| 2e pl. | ἐλύσατε | vous déliâtes |
| 3e pl. | ἔλυσαν | ils délièrent |

**Infinitif aoriste** : **λῦσαι** (sans augment : l'augment n'existe qu'à l'indicatif).

Les mêmes rencontres de consonnes s'appliquent : ἔγραψα, ἔπεμψα, ἐδίωξα, ἔπραξα, ἐφύλαξα, ἔπεισα, ἔσωσα.

## L'aoriste thématique (aoriste 2nd)
Certains verbes très courants ont un aoriste sans σ, formé sur un **radical différent** du présent, avec les désinences de l'imparfait.

| Présent | Aoriste | Infinitif aoriste |
|---|---|---|
| λείπω (laisser) | ἔλιπον | λιπεῖν |
| βάλλω (lancer) | ἔβαλον | βαλεῖν |
| λαμβάνω (prendre) | ἔλαβον | λαβεῖν |
| φεύγω (fuir) | ἔφυγον | φυγεῖν |
| μανθάνω (apprendre) | ἔμαθον | μαθεῖν |
| ἄγω (conduire) | ἤγαγον | ἀγαγεῖν |
| λέγω (dire) | εἶπον | εἰπεῖν |
| ὁράω (voir) | εἶδον | ἰδεῖν |
| ἔρχομαι (aller) | ἦλθον | ἐλθεῖν |
| ἔχω (avoir) | ἔσχον | σχεῖν |

L'imparfait ἔλειπον (radical λειπ-) et l'aoriste ἔλιπον (radical λιπ-) ne diffèrent que par le radical : regarde-le bien.

## L'aspect : une notion clé
Le grec distingue moins le temps que l'**aspect**, c'est-à-dire la manière d'envisager l'action :
- le **thème du présent** (présent, imparfait) envisage l'action **en cours, dans sa durée** ;
- le **thème de l'aoriste** envisage l'action **globalement, comme un fait ponctuel**.

À l'**indicatif**, l'aoriste exprime un **fait passé** : on le traduit par le **passé simple** ou le **passé composé**. Aux autres modes (infinitif, participe), l'aoriste n'a **pas de valeur de passé** : il indique seulement l'aspect. βούλομαι λῦσαι = « je veux délier » (une fois).

>! **Exemple résolu** (authentique) : la première phrase de Thucydide.
>! Θουκυδίδης Ἀθηναῖος ξυνέγραψε τὸν πόλεμον τῶν Πελοποννησίων καὶ Ἀθηναίων.
>! ξυνέγραψε : aoriste de ξυγγράφω (forme attique ancienne de συγγράφω, « mettre par écrit ») ; l'augment est placé après le préverbe ξυν-, et φ + σ = ψ.
>! Traduction : **Thucydide d'Athènes a mis par écrit (raconté) la guerre des Péloponnésiens et des Athéniens.**

> **À retenir** : futur λύσω (-σ- + désinences du présent) ; aoriste ἔλυσα, ἔλυσας, ἔλυσε, ἐλύσαμεν, ἐλύσατε, ἔλυσαν ; infinitifs λύειν, λύσειν, λῦσαι ; π/β/φ + σ = ψ, κ/γ/χ + σ = ξ ; aoriste thématique ἔλιπον ; aoriste de l'indicatif = passé simple ou passé composé ; ailleurs, simple aspect.
`,
      exercices: [
        {
          type: "saisie",
          question: "Donne la **1re personne du singulier du futur** de γράφω (écrire).",
          reponses: ["γράψω", "γραψω"],
          explication: "φ (labiale) + σ = ψ : **γράψω**, « j'écrirai ».",
        },
        {
          type: "saisie",
          question: "Donne la **3e personne du singulier de l'aoriste** de λύω.",
          reponses: ["ἔλυσε", "ἔλυσεν", "ελυσε", "ελυσεν"],
          explication: "Augment ἐ- + λυ- + -σε(ν) : **ἔλυσε(ν)**, « il délia, il a délié ».",
        },
        {
          type: "qcm",
          question: "Identifie la forme **ἐπέμψαμεν** (de πέμπω, envoyer).",
          choix: ["Imparfait, 1re pl.", "Futur, 1re pl.", "Présent, 1re pl.", "Aoriste, 1re pl."],
          reponse: 3,
          explication: "Augment ἐ- + πεμπ- + σ (π + σ = ψ) + -αμεν : aoriste sigmatique, « nous envoyâmes ». L'imparfait serait ἐπέμπομεν, le futur πέμψομεν.",
        },
        {
          type: "qcm",
          question: "Quel est le **futur** de ἄγω (conduire) ?",
          choix: ["ἄσω", "ἄξω", "ἄψω", "ἤγαγον"],
          reponse: 1,
          explication: "γ (gutturale) + σ = ξ : ἄξω, « je conduirai ». ἤγαγον est l'aoriste thématique de ἄγω.",
        },
        {
          type: "vf",
          question: "L'infinitif aoriste exprime toujours une action passée.",
          reponse: false,
          explication: "Faux : hors de l'indicatif, l'aoriste n'a pas de valeur temporelle, seulement une valeur d'aspect (action vue globalement). βούλομαι λῦσαι = « je veux délier ».",
        },
        {
          type: "saisie",
          question: "Donne l'**infinitif aoriste actif** de λύω.",
          reponses: ["λῦσαι", "λυσαι"],
          explication: "**λῦσαι** : pas d'augment hors de l'indicatif ; circonflexe sur le υ long, car la finale -αι compte comme brève pour l'accent.",
        },
        {
          type: "qcm",
          question: "ἔλιπον est l'aoriste thématique de quel verbe ?",
          choix: ["λύω", "λαμβάνω", "λέγω", "λείπω"],
          reponse: 3,
          explication: "λείπω (laisser) : radical du présent λειπ-, radical de l'aoriste λιπ-. L'aoriste de λαμβάνω est ἔλαβον, celui de λέγω est εἶπον.",
        },
        {
          type: "saisie",
          question: "Donne la **3e personne du singulier du futur** de εἰμί.",
          reponses: ["ἔσται", "εσται"],
          explication: "Le futur de εἰμί a des désinences moyennes : ἔσομαι, ἔσῃ, **ἔσται** (« il sera »).",
        },
        {
          type: "saisie",
          question: "Traduis en français la forme **ἔγραψα** (une traduction suffit).",
          reponses: ["j'écrivis", "j'ai écrit", "j ai ecrit"],
          explication: "Augment + γραφ- + σα (φ + σ = ψ) : aoriste de l'indicatif, 1re sg. On traduit par le passé simple (« j'écrivis ») ou le passé composé (« j'ai écrit »).",
        },
        {
          type: "redaction",
          question: "Analyse les verbes puis traduis : 1) **ὁ στρατηγὸς ἐπιστολὴν ἔγραψεν.** 2) **οἱ πολῖται τὸν νόμον φυλάξουσιν.** 3) **οἱ πολέμιοι τὴν πόλιν ἔλιπον.** (phrases d'entraînement ; ἡ ἐπιστολή : la lettre ; οἱ πολέμιοι : les ennemis)",
          corrige: `
**1)** ἔγραψεν : augment ἐ- + γραφ- + σε(ν), φ + σ = ψ : **aoriste**, 3e sg. de γράφω. Sujet ὁ στρατηγός, COD ἐπιστολήν (sans article : « une lettre »).
Traduction : **Le général écrivit (a écrit) une lettre.**

**2)** φυλάξουσιν : pas d'augment, radical φυλακ- + σ (κ + σ = ξ) + -ουσιν : **futur**, 3e pl. de φυλάττω. Sujet οἱ πολῖται, COD τὸν νόμον.
Traduction : **Les citoyens garderont (respecteront) la loi.**

**3)** ἔλιπον : augment + radical λιπ- + -ον : **aoriste thématique** de λείπω. Avec le sujet pluriel οἱ πολέμιοι, c'est la 3e pl. (et non la 1re sg.). COD τὴν πόλιν.
Traduction : **Les ennemis quittèrent (ont abandonné) la cité.**

>! Méthode d'identification : augment ? (→ passé de l'indicatif) ; σ ou ψ / ξ après le radical ? (→ futur sans augment, aoriste avec augment et -σα-) ; radical différent du présent ? (→ aoriste thématique).
`,
        },
      ],
    },
    {
      id: "voix-moyenne-participe-infinitif",
      titre: "La voix moyenne, l'infinitif et le participe",
      theme: "Langue : le verbe",
      cours: `
## La voix moyenne : une initiation
Le grec a trois voix : **active**, **moyenne** et passive. Au moyen, le sujet est **impliqué dans l'action** : il agit pour lui-même, dans son intérêt, ou sur lui-même.
- λύω τὸν ἵππον : je détache le cheval ;
- λύομαι τὸν υἱόν : je délie mon fils **pour moi**, c'est-à-dire **je rachète mon fils** (en payant une rançon) ;
- παύω : je fais cesser ; παύομαι : je cesse (je m'arrête).

Au présent et à l'imparfait, les formes moyennes servent aussi de **passif** : λύεται ὑπὸ τοῦ δούλου, « il est délié par l'esclave ».

| Personne | Présent moyen | Imparfait moyen |
|---|---|---|
| 1re sg. | λύομαι | ἐλυόμην |
| 2e sg. | λύῃ (ou λύει) | ἐλύου |
| 3e sg. | λύεται | ἐλύετο |
| 1re pl. | λυόμεθα | ἐλυόμεθα |
| 2e pl. | λύεσθε | ἐλύεσθε |
| 3e pl. | λύονται | ἐλύοντο |

L'aoriste moyen se forme sur -σα- : ἐλυσάμην (je rachetai). Le futur moyen : λύσομαι.

**Verbes déponents** : certains verbes n'existent qu'à la forme moyenne mais ont un sens actif : βούλομαι (vouloir), γίγνομαι (devenir, naître), ἔρχομαι (aller, venir), μάχομαι (combattre), δέχομαι (recevoir), ἀποκρίνομαι (répondre).

## L'infinitif
| | Actif | Moyen |
|---|---|---|
| Présent | λύειν | λύεσθαι |
| Futur | λύσειν | λύσεσθαι |
| Aoriste | λῦσαι | λύσασθαι |
| εἰμί | εἶναι (présent), ἔσεσθαι (futur) | |

Emplois principaux :
- **complément** d'un verbe : βούλομαι γράφειν, « je veux écrire » ; κελεύει τοὺς στρατιώτας μάχεσθαι, « il ordonne aux soldats de combattre » ;
- **substantivé** avec l'article neutre : τὸ φιλοσοφεῖν, « le fait de philosopher » ;
- **proposition infinitive** après un verbe de déclaration ou d'opinion, avec un **sujet à l'accusatif** : λέγει τὸν Σωκράτη σοφὸν εἶναι, « il dit que Socrate est savant ».

## Le participe : une initiation
Le participe est un **adjectif verbal** : il se décline et s'accorde, mais il a un temps (aspect) et une voix.

| | Masculin | Féminin | Neutre |
|---|---|---|---|
| Présent actif | λύων, λύοντος | λύουσα, λυούσης | λῦον, λύοντος |
| Présent de εἰμί | ὤν, ὄντος | οὖσα, οὔσης | ὄν, ὄντος |
| Aoriste actif | λύσας, λύσαντος | λύσασα, λυσάσης | λῦσαν, λύσαντος |
| Présent moyen | λυόμενος | λυομένη | λυόμενον |

Le masculin et le neutre se déclinent sur la 3e déclinaison (λύων, λύοντα, λύοντος, λύοντι ; pluriel λύοντες, λύοντας, λυόντων, λύουσι), le féminin sur la 1re (λύουσα, λύουσαν, λυούσης, λυούσῃ). Le moyen se décline comme ἀγαθός.

Emplois :
- **substantivé** avec l'article : οἱ φεύγοντες, « ceux qui fuient, les fuyards » ; τὰ ὄντα, « les choses qui sont, la réalité » ;
- **apposé** (valeur circonstancielle : temps, cause, manière, but…) : οἱ παῖδες γράφοντες μανθάνουσιν, « les enfants apprennent en écrivant » ;
- tu rencontreras aussi le **génitif absolu** (participe et nom au génitif, formant une subordonnée de temps ou de cause), à traduire souvent par « alors que… ».

>! **Exemple authentique** (Iliade, chant I, v. 13) : le prêtre Chrysès vient au camp des Grecs λυσόμενός τε θύγατρα φέρων τ’ ἀπερείσι’ ἄποινα.
>! λυσόμενος : participe **futur moyen** de λύω, valeur de **but** (« pour racheter ») ; φέρων : participe présent actif de φέρω (« apportant »).
>! Traduction : **pour racheter sa fille et apportant une rançon immense.**

> **À retenir** : moyen = le sujet agit pour lui-même ; λύομαι, λύῃ, λύεται, λυόμεθα, λύεσθε, λύονται ; infinitifs λύειν, λύεσθαι, λῦσαι, εἶναι ; proposition infinitive = sujet à l'accusatif ; participes λύων, λύουσα, λῦον et ὤν, οὖσα, ὄν ; οἱ + participe = « ceux qui ».
`,
      exercices: [
        {
          type: "vf",
          question: "À la voix moyenne, λύομαι τὸν υἱόν peut signifier « je rachète mon fils ».",
          reponse: true,
          explication: "Oui : le moyen exprime l'intérêt du sujet. « Délier pour soi » un prisonnier, c'est le racheter en payant une rançon, comme Priam rachetant le corps d'Hector.",
        },
        {
          type: "saisie",
          question: "Donne la **3e personne du singulier du présent moyen** de λύω.",
          reponses: ["λύεται", "λυεται"],
          explication: "Désinence moyenne -ται : **λύεται**, « il délie pour lui » ou, au passif, « il est délié ».",
        },
        {
          type: "qcm",
          question: "Quel est l'**infinitif présent moyen** de λύω ?",
          choix: ["λύειν", "λῦσαι", "λυόμενος", "λύεσθαι"],
          reponse: 3,
          explication: "L'infinitif présent moyen se termine en -εσθαι : λύεσθαι. λύειν est l'infinitif présent actif, λῦσαι l'infinitif aoriste actif, λυόμενος le participe présent moyen.",
        },
        {
          type: "saisie",
          question: "Conjugue le déponent βούλομαι (vouloir) à la **3e personne du pluriel** du présent.",
          reponses: ["βούλονται", "βουλονται"],
          explication: "Sur le modèle de λύονται : **βούλονται**, « ils veulent ». Forme moyenne, sens actif.",
        },
        {
          type: "qcm",
          question: "Que représente la forme **λύουσα** ?",
          choix: ["Le participe présent actif, féminin nominatif singulier", "L'indicatif présent, 3e pers. du pluriel", "L'infinitif présent actif", "Le participe présent actif, masculin"],
          reponse: 0,
          explication: "λύουσα est le féminin du participe présent actif (λύων, λύουσα, λῦον). Ne la confonds pas avec λύουσι(ν), 3e pl. de l'indicatif (« ils délient »).",
        },
        {
          type: "saisie",
          question: "Donne le **génitif masculin singulier** du participe présent de εἰμί.",
          reponses: ["ὄντος", "οντος"],
          explication: "ὤν, οὖσα, ὄν ; génitif **ὄντος**. On retrouve ce radical ὀντ- dans « ontologie » (la science de l'être).",
        },
        {
          type: "qcm",
          question: "Traduis la phrase d'entraînement : **ὁ στρατηγὸς κελεύει τοὺς στρατιώτας μάχεσθαι.**",
          choix: ["Les soldats ordonnent au général de combattre.", "Le général combat avec les soldats.", "Le général ordonne aux soldats de combattre.", "Le général ordonnait aux soldats de combattre."],
          reponse: 2,
          explication: "κελεύει (présent, 3e sg.) a pour sujet ὁ στρατηγός ; τοὺς στρατιώτας (accusatif) désigne ceux qui reçoivent l'ordre ; μάχεσθαι est l'infinitif du déponent μάχομαι. Le verbe est au présent, pas à l'imparfait.",
        },
        {
          type: "saisie",
          question: "Traduis en français : **οἱ φεύγοντες**",
          reponses: ["ceux qui fuient", "les fuyards", "ceux qui s'enfuient"],
          explication: "Article + participe présent de φεύγω : participe substantivé, « **ceux qui fuient** », « les fuyards ».",
        },
        {
          type: "redaction",
          question: "Analyse puis traduis : 1) **ὁ γέρων τὸν υἱὸν λύεσθαι βούλεται.** 2) **οἱ παῖδες γράφοντες μανθάνουσιν.** 3) **λέγει τὸν Σωκράτη σοφὸν εἶναι.** (phrases d'entraînement ; ὁ γέρων : le vieillard ; ὁ υἱός : le fils ; μανθάνω : apprendre)",
          corrige: `
**1)** βούλεται : présent du déponent βούλομαι, 3e sg. ; sujet ὁ γέρων (3e déclinaison, γέροντος). λύεσθαι : infinitif présent **moyen**, complément de βούλεται ; τὸν υἱόν est son COD. Le moyen indique que le vieillard agit dans son intérêt : il veut **racheter** son fils.
Traduction : **Le vieillard veut racheter son fils.**

**2)** μανθάνουσιν : 3e pl. du présent ; sujet οἱ παῖδες. γράφοντες : participe présent actif, nominatif masculin pluriel, accordé au sujet ; il est apposé et exprime la **manière** (ou le moyen).
Traduction : **Les enfants apprennent en écrivant.**

**3)** λέγει : verbe de déclaration ; il introduit une **proposition infinitive** : sujet à l'accusatif τὸν Σωκράτη, verbe à l'infinitif εἶναι, attribut à l'accusatif σοφόν.
Traduction : **Il dit que Socrate est savant.**

>! Une proposition infinitive se traduit par une complétive en « que » : le sujet à l'accusatif devient sujet du verbe conjugué français.
`,
        },
      ],
    },
    {
      id: "syntaxe-cas-prepositions-negations",
      titre: "Syntaxe des cas, prépositions et négations",
      theme: "Langue : la phrase",
      cours: `
## Les emplois des cas
| Cas | Emplois principaux | Exemple |
|---|---|---|
| Nominatif | sujet ; attribut du sujet | ὁ ἀνὴρ σοφός (l'homme est savant) |
| Vocatif | apostrophe | ὦ φίλε (ô mon ami) |
| Accusatif | COD ; durée et étendue ; relation (« quant à ») | τρεῖς ἡμέρας (pendant trois jours) |
| Génitif | complément du nom ; partitif ; comparaison ; avec prépositions | ὁ τοῦ στρατηγοῦ ἵππος (le cheval du général) |
| Datif | attribution ; moyen et instrument ; possession avec εἰμί ; lieu et temps | τῷ ξίφει μάχεται (il combat avec son épée) |

- **Génitif de comparaison** : σοφώτερος τοῦ ἀδελφοῦ, « plus savant que son frère ».
- **Datif de possession** : ἔστι μοι βιβλίον, « j'ai un livre » (mot à mot : « il y a à moi un livre »).
- **Complément du nom** : il se place souvent entre l'article et le nom (position attributive) : ὁ τοῦ στρατηγοῦ ἵππος.
- L'article grec se traduit souvent par un **possessif** quand le possesseur est évident : τῷ ξίφει, « avec son épée ».

## Les prépositions courantes
Le sens d'une préposition dépend souvent du **cas** qui la suit.

| Préposition | + Accusatif | + Génitif | + Datif |
|---|---|---|---|
| ἐν | | | dans, en (sans mouvement) |
| εἰς (ἐς) | vers, dans (avec mouvement) | | |
| ἐκ (ἐξ) | | hors de, de | |
| ἀπό | | loin de, à partir de | |
| σύν (ξύν) | | | avec |
| πρό | | devant, avant | |
| ἀντί | | à la place de | |
| διά | à cause de | à travers, par | |
| μετά | après | avec | |
| περί | autour de | au sujet de | |
| ὑπό | sous (avec mouvement) | par (agent du passif) | sous (sans mouvement) |
| παρά | vers (une personne), le long de | de la part de | auprès de |
| ἐπί | vers, contre | sur | sur, auprès de |
| πρός | vers, contre | du côté de, de la part de | auprès de, en plus de |
| κατά | selon, le long de | du haut de, contre | |
| ὑπέρ | au-delà de | au-dessus de, pour | |

ἐξ s'emploie devant une voyelle : ἐξ ἀρχῆς, « depuis le début ».

## Les négations οὐ et μή
- **οὐ** est la négation des **faits** (ce qui est ou n'est pas), employée surtout à l'indicatif. Elle devient **οὐκ** devant une voyelle à esprit doux et **οὐχ** devant un esprit rude : οὐ λέγω, οὐκ ἔχω, οὐχ ὁρῶ.
- **μή** est la négation de la **volonté**, de l'hypothèse et de la défense : avec l'**impératif** (μὴ φεῦγε, « ne fuis pas »), en général avec l'infinitif, dans les conditions (« si… ne… pas ») et avec un participe à valeur conditionnelle.
- Composés : οὐδείς, οὐδεμία, οὐδέν (personne, rien) et μηδείς ; οὐδέ / μηδέ (et ne… pas, pas même) ; οὔτε… οὔτε (ni… ni).
- Une négation composée qui **suit** une négation simple la **renforce** : οὐκ ἔλεγεν οὐδέν, « il ne disait rien ».

>! **Formule célèbre** (transmise par des commentateurs du VIe siècle ap. J.-C., donc d'authenticité douteuse) : selon cette tradition, l'entrée de l'Académie de Platon portait ἀγεωμέτρητος μηδεὶς εἰσίτω, « que nul n'entre s'il n'est géomètre ». μηδείς et non οὐδείς : la phrase est un ordre (εἰσίτω est un impératif de 3e personne).

> **À retenir** : ἐν + datif (sans mouvement) / εἰς + accusatif (avec mouvement) / ἐκ + génitif (origine) ; ὑπό + génitif = complément d'agent ; génitif de comparaison ; datif de moyen ; οὐ (οὐκ, οὐχ) = fait ; μή = volonté, défense, condition.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel cas suit la préposition **ἐν** ?",
          choix: ["L'accusatif", "Le génitif", "Le datif", "Le nominatif"],
          reponse: 2,
          explication: "ἐν se construit toujours avec le datif et marque le lieu où l'on est : ἐν τῇ πόλει, « dans la cité ».",
        },
        {
          type: "qcm",
          question: "Que signifie **εἰς τὴν πόλιν** ?",
          choix: ["Dans la cité (sans mouvement)", "Vers la cité, dans la cité (avec mouvement)", "Hors de la cité", "Autour de la cité"],
          reponse: 1,
          explication: "εἰς + accusatif exprime le mouvement vers un lieu ou l'entrée dans un lieu : ἔρχεται εἰς τὴν πόλιν, « il va à la cité ». Le lieu où l'on est se dit ἐν τῇ πόλει.",
        },
        {
          type: "saisie",
          question: "Quel cas suit la préposition **ἐκ** (hors de) ?",
          reponses: ["génitif", "le génitif"],
          explication: "ἐκ (ἐξ devant voyelle) se construit avec le **génitif** et exprime l'origine : ἐκ τῆς οἰκίας, « hors de la maison ».",
        },
        {
          type: "vf",
          question: "ὑπό suivi du génitif peut introduire le complément d'agent d'un verbe passif.",
          reponse: true,
          explication: "Oui : ὁ ἵππος λύεται ὑπὸ τοῦ δούλου, « le cheval est détaché par l'esclave ».",
        },
        {
          type: "qcm",
          question: "Quelle forme est correcte pour dire « je n'ai pas » (ἔχω) ?",
          choix: ["οὐ ἔχω", "οὐκ ἔχω", "οὐχ ἔχω", "μὴ ἔχω"],
          reponse: 1,
          explication: "ἔχω commence par une voyelle à esprit doux : on emploie οὐκ. οὐχ s'emploie devant un esprit rude (οὐχ ὁρῶ). C'est un fait énoncé à l'indicatif, donc οὐ et non μή.",
        },
        {
          type: "vf",
          question: "Avec un impératif, la négation est μή.",
          reponse: true,
          explication: "Oui, μή est la négation de la volonté et de la défense : μὴ φεῦγε, « ne fuis pas ».",
        },
        {
          type: "saisie",
          question: "Traduis en français : **μετὰ τὴν μάχην** (ἡ μάχη : le combat, la bataille)",
          reponses: ["après la bataille", "après le combat"],
          explication: "μετά + accusatif = « après » (μετά + génitif = « avec ») : **après la bataille**.",
        },
        {
          type: "qcm",
          question: "Dans **τῷ ξίφει μάχεται** (« il combat avec son épée »), quelle est la valeur du datif ?",
          choix: ["Attribution", "Possession", "Lieu", "Moyen ou instrument"],
          reponse: 3,
          explication: "Le datif τῷ ξίφει (de τὸ ξίφος, ξίφους) indique l'instrument avec lequel on agit. L'article se traduit ici par un possessif.",
        },
        {
          type: "saisie",
          question: "Traduis : **σοφώτερος τοῦ ἀδελφοῦ** (σοφώτερος : comparatif de σοφός ; ὁ ἀδελφός : le frère)",
          reponses: ["plus savant que son frère", "plus savant que le frère", "plus sage que son frère", "plus sage que le frère"],
          explication: "Le génitif τοῦ ἀδελφοῦ est un **génitif de comparaison** : il remplace notre « que ». « **Plus savant que son frère** ».",
        },
        {
          type: "redaction",
          question: "Analyse les cas et les prépositions, puis traduis ces phrases d'entraînement : 1) **οἱ Ἕλληνες ἐκ τῆς Ἀσίας εἰς τὴν Ἑλλάδα διὰ τῆς θαλάττης ἔπλευσαν.** 2) **μὴ φεῦγε, ὦ φίλε.** 3) **ὁ δοῦλος οὐκ ἔλεγεν οὐδέν.** (ἔπλευσαν : aoriste de πλέω, naviguer ; ἡ Ἑλλάς, Ἑλλάδος : la Grèce)",
          corrige: `
**1)** ἔπλευσαν : aoriste, 3e pl. ; sujet οἱ Ἕλληνες (nominatif pluriel, 3e déclinaison).
- ἐκ τῆς Ἀσίας : ἐκ + génitif, point de départ ;
- εἰς τὴν Ἑλλάδα : εἰς + accusatif, direction ;
- διὰ τῆς θαλάττης : διά + génitif, « à travers, par ».
Traduction : **Les Grecs naviguèrent d'Asie jusqu'en Grèce à travers la mer.**

**2)** φεῦγε : impératif présent, 2e sg. de φεύγω ; la défense est niée par **μή**. ὦ φίλε : vocatif de ὁ φίλος.
Traduction : **Ne fuis pas, mon ami.**

**3)** ἔλεγεν : imparfait, 3e sg. de λέγω ; οὐκ devant une voyelle à esprit doux. La négation composée οὐδέν, placée après la négation simple, la **renforce** au lieu de l'annuler.
Traduction : **L'esclave ne disait rien.**
`,
        },
      ],
    },
    {
      id: "methode-traduction",
      titre: "Méthode de traduction : de la phrase au petit texte",
      theme: "Langue : la phrase",
      cours: `
## Les étapes de la traduction
1. **Lis tout le texte** et le titre ou le chapeau introductif : ils donnent le contexte (qui parle ? de quoi ?).
2. **Repère la ponctuation** (. · ; ,) et découpe les phrases.
3. Dans chaque phrase, **repère les verbes conjugués** : chacun correspond à une proposition. Identifie temps, mode, personne.
4. Cherche le **sujet** (nominatif accordé avec le verbe), puis les **compléments** (accusatif, génitif, datif, prépositions).
5. Repère les **mots de liaison** (particules, relatifs, conjonctions) qui organisent la phrase.
6. Fais une **traduction littérale**, puis **reformule** en bon français, sans rien ajouter ni oublier.

## Les pièges classiques
- **L'ordre des mots est libre** : le sujet n'est pas forcément en tête ; c'est la terminaison qui compte.
- **L'article** permet de reconnaître le cas d'un nom de 3e déclinaison ambigu et signale les groupes (ὁ τοῦ στρατηγοῦ ἵππος : tout ce qui est entre ὁ et ἵππος s'y rattache).
- **Position attributive / prédicative** : ὁ σοφὸς ἀνήρ (l'homme savant) ≠ ὁ ἀνὴρ σοφός (l'homme est savant).
- **Neutre pluriel sujet** avec un verbe au singulier.
- **Verbe être sous-entendu** dans les phrases nominales.
- **Article seul + particule** : ὁ μὲν… ὁ δὲ… = « l'un… l'autre » ; οἱ δέ = « et eux, mais eux ».

## Les particules de liaison
| Particule | Sens | Place |
|---|---|---|
| καί | et ; aussi, même | en tête du mot lié |
| τε… καί | et… et, à la fois… et | τε après le premier mot |
| ἀλλά | mais | en tête |
| δέ | et, mais (léger) | en 2e position |
| μέν… δέ | d'une part… d'autre part | en 2e position |
| γάρ | car, en effet | en 2e position |
| οὖν | donc | en 2e position |
| ἤ | ou ; que (après un comparatif) | |

Les particules δέ, γάρ, οὖν, μέν ne se placent jamais en tête : on les traduit **au début** de la proposition française. μέν n'est souvent pas traduit.

>! **Exemple résolu** : texte d'entraînement (rédigé pour l'exercice, inspiré de l'Odyssée).
>! Ὁ Ὀδυσσεὺς μετὰ τὸν πόλεμον εἰς τὴν πατρίδα ἐπανέρχεσθαι βούλεται. Ἀλλ’ ὁ Ποσειδῶν, ὁ τῆς θαλάττης θεός, ὀργίζεται· τὰ γὰρ πλοῖα τοῖς ἀνέμοις διώκει. Ἡ δὲ Ἀθηνᾶ τὸν ἥρωα σῴζει.
>! Verbes conjugués : βούλεται, ὀργίζεται, διώκει, σῴζει (quatre propositions). ἐπανέρχεσθαι : infinitif complément de βούλεται.
>! Traduction : **Après la guerre, Ulysse veut revenir dans sa patrie. Mais Poséidon, le dieu de la mer, est en colère : en effet, il poursuit ses navires avec les vents. Athéna, elle, sauve le héros.**

> **À retenir** : verbes d'abord, puis sujet au nominatif, puis compléments ; la terminaison compte, pas l'ordre des mots ; les particules en 2e position (δέ, γάρ, οὖν) se traduisent en tête ; traduis fidèlement puis reformule.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quelle est la première étape efficace pour traduire une phrase grecque ?",
          choix: ["Chercher chaque mot dans le dictionnaire dans l'ordre du texte", "Repérer la ponctuation et les verbes conjugués", "Traduire le premier mot comme sujet", "Deviner le sens à partir des mots qui ressemblent au français"],
          reponse: 1,
          explication: "La ponctuation découpe les phrases et chaque verbe conjugué signale une proposition : c'est l'ossature. L'ordre des mots grecs étant libre, le premier mot n'est pas forcément le sujet.",
        },
        {
          type: "vf",
          question: "La phrase **τὰ ζῷα τρέχει** (« les animaux courent ») est grammaticalement correcte malgré le verbe au singulier.",
          reponse: true,
          explication: "Oui : en grec attique, un sujet au neutre pluriel s'accorde avec un verbe au singulier.",
        },
        {
          type: "qcm",
          question: "Que signifie la particule **γάρ** ?",
          choix: ["mais", "donc", "car, en effet", "et"],
          reponse: 2,
          explication: "γάρ introduit une explication : « car, en effet ». Elle se place en 2e position mais se traduit en tête de proposition. ἀλλά = mais, οὖν = donc, καί = et.",
        },
        {
          type: "qcm",
          question: "Comment se traduit souvent **ὁ μὲν… ὁ δὲ…** ?",
          choix: ["le… la…", "celui-ci aussi…", "ni… ni…", "l'un… l'autre…"],
          reponse: 3,
          explication: "L'article employé seul avec μέν et δέ a une valeur de pronom : « l'un… l'autre… » (au pluriel οἱ μὲν… οἱ δὲ… : « les uns… les autres… »).",
        },
        {
          type: "saisie",
          question: "Dans la phrase d'entraînement **τὸν δοῦλον ὁ ἵππος φέρει**, quel groupe est le sujet ? (écris-le en grec)",
          reponses: ["ὁ ἵππος", "ο ιππος", "ἵππος", "ιππος"],
          explication: "Le sujet est au nominatif : **ὁ ἵππος**. τὸν δοῦλον, à l'accusatif, est le COD, même s'il est placé en tête. Traduction : « Le cheval porte l'esclave. »",
        },
        {
          type: "qcm",
          question: "Que signifie **ὁ τοῦ στρατηγοῦ ἵππος** ?",
          choix: ["Le général du cheval", "Le général a un cheval", "Le cheval est au général", "Le cheval du général"],
          reponse: 3,
          explication: "Le génitif τοῦ στρατηγοῦ est placé entre l'article ὁ et le nom ἵππος : il est complément du nom ἵππος. « Le cheval du général ».",
        },
        {
          type: "saisie",
          question: "Traduis la célèbre inscription du temple d'Apollon à Delphes : **Γνῶθι σεαυτόν**",
          reponses: ["connais-toi toi-même", "connais-toi toi même"],
          explication: "Γνῶθι est l'impératif aoriste de γιγνώσκω (connaître) ; σεαυτόν est le réfléchi de 2e personne à l'accusatif. « **Connais-toi toi-même** », maxime reprise par Socrate.",
        },
        {
          type: "redaction",
          question: "Traduis le texte d'entraînement suivant (inspiré de l'Odyssée), en détaillant ta démarche : **Ὁ Ὀδυσσεὺς μετὰ τὸν πόλεμον εἰς τὴν πατρίδα ἐπανέρχεσθαι βούλεται. Ἀλλ’ ὁ Ποσειδῶν, ὁ τῆς θαλάττης θεός, ὀργίζεται· τὰ γὰρ πλοῖα τοῖς ἀνέμοις διώκει. Ἡ δὲ Ἀθηνᾶ τὸν ἥρωα σῴζει.** (ἡ πατρίς, -ίδος : la patrie ; ἐπανέρχομαι : revenir ; ὀργίζομαι : se mettre en colère ; τὸ πλοῖον : le navire ; ὁ ἄνεμος : le vent ; διώκω : poursuivre ; ὁ ἥρως, -ωος : le héros)",
          corrige: `
**Étape 1 : découpage.** Trois phrases (points), la deuxième coupée par un point en haut (·). Quatre verbes conjugués : βούλεται, ὀργίζεται, διώκει, σῴζει.

**Phrase 1.** βούλεται : présent du déponent βούλομαι, 3e sg. ; sujet ὁ Ὀδυσσεύς. ἐπανέρχεσθαι : infinitif présent, complément de βούλεται. μετὰ τὸν πόλεμον : μετά + accusatif = après. εἰς τὴν πατρίδα : εἰς + accusatif, direction.
→ **Après la guerre, Ulysse veut revenir dans sa patrie.**

**Phrase 2.** Ἀλλ’ = ἀλλά élidé, « mais ». Sujet ὁ Ποσειδῶν ; ὁ τῆς θαλάττης θεός est une **apposition** (au nominatif aussi), avec le complément du nom τῆς θαλάττης placé entre l'article et le nom. ὀργίζεται : présent moyen, « il se met en colère, il est irrité ».
Après le point en haut : γάρ (en 2e position) se traduit en tête, « en effet ». διώκει : 3e sg., même sujet (Poséidon). τὰ πλοῖα : accusatif neutre pluriel, COD (ce n'est pas le sujet, car Poséidon reste le sujet logique et le sens l'impose). τοῖς ἀνέμοις : datif de moyen.
→ **Mais Poséidon, le dieu de la mer, est irrité : en effet, il poursuit ses navires avec les vents.**

**Phrase 3.** δέ (2e position) : « et, mais », ici opposition à Poséidon. Sujet Ἡ Ἀθηνᾶ ; COD τὸν ἥρωα (accusatif de ὁ ἥρως).
→ **Athéna, elle, sauve le héros.**

**Traduction finale :** Après la guerre, Ulysse veut revenir dans sa patrie. Mais Poséidon, le dieu de la mer, est irrité contre lui : il poursuit en effet ses navires avec les vents. Athéna, au contraire, sauve le héros.

>! Remarque : τὰ πλοῖα pourrait formellement être un nominatif (neutre pluriel + verbe au singulier !). C'est le sens et la construction (« les navires poursuivent avec les vents » n'aurait pas de COD) qui tranchent : vérifie toujours la cohérence de ta traduction.
`,
        },
        {
          type: "redaction",
          question: "Traduis et commente grammaticalement ce vers de Sophocle (*Antigone*, v. 332-333, premier stasimon, chant du chœur) : **Πολλὰ τὰ δεινὰ κοὐδὲν ἀνθρώπου δεινότερον πέλει.** (δεινός : redoutable, étonnant, prodigieux ; κοὐδέν = καὶ οὐδέν, crase ; δεινότερον : comparatif neutre ; πέλει : forme poétique pour ἐστί)",
          corrige: `
**Analyse.**
- Première proposition : **Πολλὰ τὰ δεινά**. Pas de verbe : il faut sous-entendre ἐστί (neutre pluriel + verbe au singulier). πολλά est hors du groupe τὰ δεινά : **position prédicative**, c'est l'attribut. Mot à mot : « les choses prodigieuses sont nombreuses ».
- **κοὐδέν** : crase de καὶ οὐδέν (« et rien »), sujet de πέλει.
- **ἀνθρώπου** : génitif singulier de ἄνθρωπος, **génitif de comparaison** après le comparatif δεινότερον (« que l'homme »).
- **δεινότερον** : comparatif de δεινός, au neutre pour s'accorder avec οὐδέν ; attribut.
- **πέλει** : « est » (poétique).

**Traduction.** « Nombreuses sont les merveilles (du monde), et rien n'est plus prodigieux que l'homme. »

**Commentaire.** L'adjectif δεινός est ambigu : il signifie à la fois « admirable » et « redoutable ». Le chœur célèbre l'ingéniosité humaine (navigation, agriculture, chasse, langage, cités), mais suggère aussi son danger : l'homme peut se tourner vers le bien ou vers le mal, ce que la pièce illustre avec Créon et Antigone. Une bonne traduction peut garder cette ambiguïté (« merveilles », « prodiges »).
`,
        },
        {
          type: "redaction",
          question: "**Entraînement à l'évaluation (traduction et commentaire, sur 20).** Traduis puis réponds aux questions sur ce début de l'*Anabase* de Xénophon (I, 1, 1), texte authentique : **Δαρείου καὶ Παρυσάτιδος γίγνονται παῖδες δύο, πρεσβύτερος μὲν Ἀρταξέρξης, νεώτερος δὲ Κῦρος· ἐπεὶ δὲ ἠσθένει Δαρεῖος καὶ ὑπώπτευε τελευτὴν τοῦ βίου, ἐβούλετο τὼ παῖδε ἀμφοτέρω παρεῖναι.** (Δαρεῖος : Darius II, roi des Perses ; ἡ Παρύσατις, -ιδος : Parysatis, son épouse ; γίγνομαι : naître ; πρεσβύτερος : plus âgé, aîné ; νεώτερος : plus jeune, cadet ; ἐπεί : quand, comme ; ἀσθενέω : être malade ; ὑποπτεύω : soupçonner, pressentir ; ἡ τελευτή : la fin ; τὼ παῖδε ἀμφοτέρω : « les deux enfants », accusatif **duel** ; πάρειμι : être présent, être auprès). Questions : 1) Traduis le texte (12 points). 2) Analyse ἠσθένει et ἐβούλετο, puis la construction de παρεῖναι (4 points). 3) Commentaire : que nous apprend ce début sur le sujet du récit et sur la manière de Xénophon ? (4 points)",
          corrige: `
**1) Traduction (12 points).**
« De Darius et de Parysatis naissent deux enfants, l'aîné Artaxerxès, le cadet Cyrus. Comme Darius était malade et pressentait la fin de sa vie, il voulait que ses deux enfants fussent auprès de lui. »
(On accepte : « Darius et Parysatis eurent deux fils » ; « soupçonnait que sa vie touchait à sa fin » ; « il voulait avoir ses deux fils auprès de lui ».)

Barème indicatif de la traduction :
- Première phrase (4 points) : génitif d'origine Δαρείου καὶ Παρυσάτιδος (1), présent de narration γίγνονται, rendu par un présent ou un passé simple (1), opposition μέν… δέ entre l'aîné et le cadet (2).
- Subordonnée en ἐπεί (4 points) : valeur de cause ou de temps (1), deux imparfaits ἠσθένει et ὑπώπτευε coordonnés par καί (2), τελευτὴν τοῦ βίου, COD avec son complément du nom (1).
- Principale (4 points) : ἐβούλετο à l'imparfait (1), proposition infinitive τὼ παῖδε ἀμφοτέρω παρεῖναι correctement rendue (2), français correct et fluide (1).
- Pénalités : contresens sur le sujet d'un verbe (−2), oubli d'un mot (−0,5), faute de français (−0,5).

**2) Analyse (4 points).**
- **ἠσθένει** : imparfait de ἀσθενέω, 3e sg. : augment temporel α → η, puis contraction ε + ε → ει (ἠσθένε-ε → ἠσθένει) (1,5 point).
- **ἐβούλετο** : imparfait du déponent βούλομαι, 3e sg., forme moyenne à sens actif (1 point).
- **παρεῖναι** : infinitif présent de πάρειμι (παρά + εἰμί), noyau d'une **proposition infinitive** complément de ἐβούλετο, dont le sujet à l'accusatif est τὼ παῖδε ἀμφοτέρω (1,5 point). Le **duel** (-ω, -ε) désigne une paire : les deux fils.

**3) Commentaire (4 points).**
- **Un début de récit historique** (2 points) : en une phrase, Xénophon pose les personnages et le ressort du drame. L'opposition πρεσβύτερος μέν / νεώτερος δέ annonce la rivalité des deux frères : à la mort de Darius, l'aîné Artaxerxès devient roi, et le cadet Cyrus lèvera une armée pour lui prendre le trône (401 av. J.-C.). L'*Anabase* (« la montée » de la côte vers l'intérieur de l'Asie) raconte cette expédition, la mort de Cyrus à Counaxa et la retraite des Dix Mille mercenaires grecs jusqu'à la mer Noire.
- **La manière de Xénophon** (2 points) : style simple et clair, phrases courtes, présent de narration qui rend le récit vivant. Xénophon, Athénien et disciple de Socrate, a lui-même participé à l'expédition : il est à la fois témoin, acteur et historien. Le texte montre les liens étroits entre Grecs et Perses dans le monde méditerranéen (des Grecs servent un prince perse).

>! Méthode pour l'épreuve : lis tout le texte et le vocabulaire donné ; repère les verbes conjugués (γίγνονται, ἠσθένει, ὑπώπτευε, ἐβούλετο) et les mots de liaison (μέν… δέ, ἐπεί, καί) ; traduis proposition par proposition ; relis ta traduction en français. Dans le commentaire, appuie chaque idée sur un mot grec cité.
`,
        },
      ],
    },
    {
      id: "lexique-etymologie",
      titre: "Lexique et étymologie : le grec dans le français",
      theme: "Lexique et étymologie",
      cours: `
## Pourquoi le grec est partout
Le français a reçu le grec de deux façons : par l'intermédiaire du **latin** (église, école, poème) et par des **créations savantes**, surtout à partir du XVIe siècle, pour nommer des réalités nouvelles en médecine, en sciences et en techniques (téléphone, biologie, dinosaure). Connaître quelques dizaines de racines permet de comprendre des milliers de mots.

## Racines placées surtout en fin de mot
| Racine française | Mot grec | Sens | Exemples |
|---|---|---|---|
| -logie, -logue | ὁ λόγος | parole, discours, science | biologie, archéologue |
| -phile, philo- | φίλος | ami, qui aime | bibliophile, philosophie |
| -phobe, -phobie | ὁ φόβος | peur | claustrophobie, xénophobe |
| -graphie, -graphe | γράφω | écrire, décrire | géographie, orthographe |
| -cratie | τὸ κράτος | pouvoir, force | démocratie, aristocratie |
| -archie, -arque | ἡ ἀρχή | commandement, pouvoir ; commencement | monarchie, archaïque |
| -nomie, -nome | ὁ νόμος | loi, règle | astronomie, autonome |
| -mètre, métro- | τὸ μέτρον | mesure | thermomètre, métronome |
| -scope | σκοπέω | observer | microscope, télescope |
| -phone, phono- | ἡ φωνή | voix, son | téléphone, symphonie |
| -pode | ὁ πούς, ποδός | pied | gastéropode |
| -iatre, -iatrie | ὁ ἰατρός | médecin | pédiatre, psychiatrie |
| -algie | τὸ ἄλγος | douleur | névralgie, nostalgie |
| -sophie | ἡ σοφία | sagesse, savoir | philosophie, théosophie |
| -gène, -genèse | γεν- (naître, produire) | qui produit, origine | oxygène, genèse |
| -drome | ὁ δρόμος | course | hippodrome, aérodrome |

## Racines placées surtout en début de mot
| Racine | Mot grec | Sens | Exemples |
|---|---|---|---|
| bio- | ὁ βίος | vie | biologie, biographie |
| zoo- | τὸ ζῷον | animal, être vivant | zoologie, zodiaque |
| chrono- | ὁ χρόνος | temps | chronologie, chronomètre |
| géo- | ἡ γῆ | terre | géographie, géométrie |
| hydr(o)- | τὸ ὕδωρ, ὕδατος | eau | hydravion, hydrogène |
| photo- | τὸ φῶς, φωτός | lumière | photographie, photon |
| psych(o)- | ἡ ψυχή | âme, esprit | psychologie |
| anthrop(o)- | ὁ ἄνθρωπος | être humain | anthropologie, philanthrope |
| théo- | ὁ θεός | dieu | théologie, athée |
| dém(o)- | ὁ δῆμος | peuple | démocratie, épidémie |
| poli- | ἡ πόλις | cité | politique, métropole |
| hipp(o)- | ὁ ἵππος | cheval | hippodrome, hippopotame |
| path(o)- | τὸ πάθος | souffrance, ce qu'on éprouve | pathologie, sympathie |
| auto- | αὐτός | soi-même | autographe, autonome |
| télé- | τῆλε | loin | télévision, téléphone |
| micro- | μικρός | petit | microbe, microscope |
| méga-, mégalo- | μέγας, μεγάλη | grand | mégaphone, mégalomane |
| poly- | πολύς | nombreux | polygone, polythéisme |
| mono- | μόνος | seul | monologue, monothéisme |
| ortho- | ὀρθός | droit, correct | orthographe, orthodontiste |
| néo- | νέος | nouveau | néologisme, néolithique |
| paléo- | παλαιός | ancien | paléontologie |
| archéo- | ἀρχαῖος | ancien | archéologie |
| ped-, pédo- | ὁ παῖς, παιδός | enfant | pédagogue, pédiatre |
| cardi(o)- | ἡ καρδία | cœur | cardiologue |
| hémo-, hémato- | τὸ αἷμα, αἵματος | sang | hémorragie, hématome |
| derm(at)o- | τὸ δέρμα | peau | dermatologue, épiderme |
| ophtalm(o)- | ὁ ὀφθαλμός | œil | ophtalmologiste |

## Préfixes et nombres
- **a- / an-** privatif (« sans, non ») : ἀ-θεός → athée ; ἀν-αρχία → anarchie ; ἀν-ώνυμος → anonyme.
- **syn- / sym-** (σύν, avec) : synthèse, sympathie, symphonie ; **épi-** (ἐπί, sur) : épiderme ; **hyper-** (ὑπέρ, au-dessus) ; **hypo-** (ὑπό, sous) : hypothèse ; **péri-** (περί, autour) : périmètre.
- Nombres : μόνος (seul) mono-, δύο (deux) di-, τρεῖς (trois) tri-, πέντε (cinq) penta-, δέκα (dix) déca-, ἑκατόν (cent) hecto-, χίλιοι (mille) kilo-.

## Les noms savants
Les sciences forgent leurs mots sur le grec : **dinosaure** (δεινός, terrible + σαῦρος, lézard, mot créé en 1842), **atome** (ἄτομος, qu'on ne peut couper), **électron** (ἤλεκτρον, l'ambre, qui s'électrise par frottement), **hippopotame** (ἵππος ὁ ποτάμιος, le cheval du fleuve), **nostalgie** (νόστος, le retour + ἄλγος, la douleur : la douleur du retour, mot savant formé au XVIIe siècle).

>! **Méthode** pour expliquer un mot : 1) découpe-le en éléments ; 2) donne pour chacun le mot grec et son sens ; 3) recompose le sens littéral ; 4) compare avec le sens actuel. Exemple : **pédiatre** = παῖς, παιδός (enfant) + ἰατρός (médecin) → « médecin des enfants ».

> **À retenir** : λόγος (-logie), φίλος (-phile), φόβος (-phobie), γράφω (-graphie), κράτος (-cratie), βίος (bio-), χρόνος (chrono-), γῆ (géo-), ὕδωρ (hydro-), φῶς (photo-), ἀ- privatif ; découper, traduire chaque élément, recomposer.
`,
      exercices: [
        {
          type: "qcm",
          question: "De quel mot grec vient l'élément **-logie** (biologie, théologie) ?",
          choix: ["ὁ λόγος (la parole, la science)", "λύω (délier)", "ὁ λίθος (la pierre)", "λευκός (blanc)"],
          reponse: 0,
          explication: "-logie vient de λόγος, « parole, discours, raison », d'où « science, étude de » : biologie = étude de la vie. λίθος a donné lithographie, λευκός leucocyte.",
        },
        {
          type: "saisie",
          question: "Quel mot grec signifiant « la vie » a donné le préfixe **bio-** ? (en grec ou translittéré)",
          reponses: ["βίος", "ὁ βίος", "bios"],
          explication: "**ὁ βίος**, « la vie » (le mode de vie, l'existence humaine) ; à ne pas confondre avec ζῷον, « l'être vivant, l'animal » (zoologie).",
        },
        {
          type: "qcm",
          question: "Que signifie littéralement **hippopotame** ?",
          choix: ["Le grand cheval", "Le cheval qui boit", "L'animal des marais", "Le cheval du fleuve"],
          reponse: 3,
          explication: "ἵππος (cheval) + ποταμός (fleuve) : le « cheval du fleuve », nom donné par les Grecs à l'animal du Nil.",
        },
        {
          type: "saisie",
          question: "Quel est le sens de l'élément **-phobie** (du grec φόβος) ?",
          reponses: ["peur", "la peur", "crainte", "la crainte", "effroi", "frayeur"],
          explication: "ὁ φόβος signifie « la **peur** », la fuite causée par la peur : claustrophobie, xénophobie (peur ou rejet de l'étranger, ξένος).",
        },
        {
          type: "vf",
          question: "Le mot « démocratie » est formé de δῆμος (le peuple) et de κράτος (le pouvoir).",
          reponse: true,
          explication: "Oui : δημοκρατία, le « pouvoir du peuple ». Sur le même modèle : aristocratie (ἄριστος, le meilleur), ploutocratie (πλοῦτος, la richesse).",
        },
        {
          type: "saisie",
          question: "Quel mot français, formé sur γῆ et γράφω, désigne la « description de la Terre » ?",
          reponses: ["géographie"],
          explication: "γῆ (la terre) + γράφω (écrire, décrire) : la **géographie**. Le mot grec γεωγραφία est employé par Ératosthène.",
        },
        {
          type: "qcm",
          question: "Quels mots grecs ont formé **chronomètre** ?",
          choix: ["χρόνος (temps) + μέτρον (mesure)", "χρυσός (or) + μέτρον (mesure)", "χρόνος (temps) + μήτηρ (mère)", "χρῶμα (couleur) + μέτρον (mesure)"],
          reponse: 0,
          explication: "χρόνος, « le temps », et μέτρον, « la mesure » : l'instrument qui mesure le temps. χρυσός a donné chrysanthème, χρῶμα chromatique.",
        },
        {
          type: "qcm",
          question: "Dans **anonyme**, **athée** et **anarchie**, que signifie le préfixe a- / an- ?",
          choix: ["« vers »", "« de nouveau »", "« avec »", "« sans, non » (privatif)"],
          reponse: 3,
          explication: "C'est l'**alpha privatif** (ἀν- devant voyelle) : ἀν-ώνυμος, sans nom (ὄνομα) ; ἄ-θεος, sans dieu ; ἀν-αρχία, absence de commandement (ἀρχή).",
        },
        {
          type: "saisie",
          question: "Donne le sens littéral de **philanthrope** (φίλος + ἄνθρωπος).",
          reponses: ["qui aime les hommes", "ami des hommes", "celui qui aime les hommes", "qui aime l'humanité", "ami du genre humain", "qui aime les êtres humains", "ami des humains", "qui aime les humains", "ami de l'humanité"],
          explication: "φίλος (ami, qui aime) + ἄνθρωπος (l'être humain) : « **qui aime les hommes** ». Son contraire est le misanthrope (μισέω, haïr).",
        },
        {
          type: "redaction",
          question: "Explique l'étymologie et le sens des mots suivants en suivant la méthode (découpage, mots grecs, sens littéral, sens actuel) : **théologie**, **orthographe**, **polygone**, **pédiatre**, **microscope**, **nostalgie**.",
          corrige: `
- **Théologie** : θεός (dieu) + λόγος (discours, science). Sens littéral : « discours sur les dieux ». Sens actuel : étude de Dieu et des questions religieuses.
- **Orthographe** : ὀρθός (droit, correct) + γράφω (écrire). Sens littéral : « écriture correcte ». Sens actuel : manière d'écrire les mots conforme à la norme.
- **Polygone** : πολύς (nombreux) + γωνία (angle). Sens littéral : « qui a beaucoup d'angles ». Sens actuel : figure plane fermée formée de segments.
- **Pédiatre** : παῖς, παιδός (enfant) + ἰατρός (médecin). Sens : « médecin des enfants », sens conservé.
- **Microscope** : μικρός (petit) + σκοπέω (observer). Sens : instrument pour « observer ce qui est petit ».
- **Nostalgie** : νόστος (le retour au pays, thème de l'Odyssée) + ἄλγος (la douleur). Sens littéral : « douleur du retour », c'est-à-dire le mal du pays (mot savant créé au XVIIe siècle). Sens actuel élargi : regret mélancolique du passé.

>! Pense à toujours citer la forme du génitif quand le radical change (παῖς, παιδός → péd-) et à distinguer le sens littéral du sens actuel.
`,
        },
      ],
    },
    {
      id: "homere-dieux-heros",
      titre: "Homère, les dieux et les héros",
      theme: "Culture et textes",
      cours: `
## Homère et l'épopée
Les Grecs attribuaient à **Homère** deux grandes épopées, l'**Iliade** et l'**Odyssée**, composées vers la **fin du VIIIe siècle av. J.-C.** en Ionie. On ne sait presque rien de lui : ces poèmes sont issus d'une longue **tradition orale** d'**aèdes**, poètes-chanteurs qui récitaient en s'accompagnant d'un instrument à cordes. La question de savoir qui les a composés, et comment, s'appelle la « question homérique ».

- Les deux poèmes sont en **hexamètres dactyliques** (vers de six pieds) et dans une langue artificielle, la **langue homérique**, surtout ionienne, avec des formes éoliennes.
- Le style est **formulaire** : des **épithètes homériques** reviennent sans cesse (πόδας ὠκὺς Ἀχιλλεύς, « Achille aux pieds rapides » ; γλαυκῶπις Ἀθήνη, « Athéna aux yeux brillants » ; ῥοδοδάκτυλος Ἠώς, « l'Aurore aux doigts de rose »).
- Les poèmes s'ouvrent par une **invocation à la Muse**.
- Ils ont été divisés plus tard en **24 chants** chacun. Pour les Grecs, Homère était l'éducateur de la Grèce : on apprenait à lire dans ses vers.

## L'Iliade
L'Iliade (de Ἴλιον, autre nom de Troie) raconte un épisode de la **dixième année** de la guerre de Troie : la **colère d'Achille**. Offensé par Agamemnon qui lui a pris sa captive Briséis, Achille se retire du combat. Les Troyens d'**Hector** prennent l'avantage ; Patrocle, l'ami d'Achille, est tué par Hector (chant XVI). Achille revient au combat pour le venger et tue Hector (chant XXII). Au chant XXIV, le vieux roi **Priam** vient seul racheter le corps de son fils : Achille, ému, le lui rend. Le poème se termine par les funérailles d'Hector. La prise de Troie et le cheval de bois ne sont pas racontés dans l'Iliade.

>! **Début de l'Iliade** (chant I, v. 1-2) :
>! Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος
>! οὐλομένην, ἣ μυρί’ Ἀχαιοῖς ἄλγε’ ἔθηκε…
>! « Chante, déesse, la colère d'Achille, fils de Pélée, colère funeste, qui causa aux Achéens des souffrances sans nombre… »

## L'Odyssée
L'Odyssée raconte le **retour** (νόστος) d'**Ulysse** (Ὀδυσσεύς) à Ithaque, dix ans après la chute de Troie. Les chants I à IV suivent son fils **Télémaque** parti à sa recherche. Retenu par la nymphe Calypso, Ulysse est libéré, fait naufrage chez les Phéaciens et y **raconte ses aventures** (chants IX à XII) : les Lotophages, le **Cyclope Polyphème**, la magicienne Circé, la descente chez les morts, les Sirènes, Charybde et Scylla. Revenu à Ithaque déguisé en mendiant, il massacre les **prétendants** qui assiégeaient son épouse **Pénélope** et se fait reconnaître d'elle grâce au secret de leur lit.

>! **Début de l'Odyssée** (chant I, v. 1-2) :
>! Ἄνδρα μοι ἔννεπε, Μοῦσα, πολύτροπον, ὃς μάλα πολλὰ
>! πλάγχθη, ἐπεὶ Τροίης ἱερὸν πτολίεθρον ἔπερσε…
>! « Dis-moi, Muse, l'homme aux mille tours, qui erra tant et tant, après avoir détruit la citadelle sacrée de Troie… »

Au chant IX, Ulysse dit au Cyclope : Οὖτις ἐμοί γ’ ὄνομα, « Mon nom est Personne ». Aveuglé, Polyphème crie que « Personne » le tue, et les autres Cyclopes ne viennent pas l'aider : c'est la **ruse** (μῆτις) d'Ulysse.

## Les valeurs du monde homérique
- **ἡ ἀρετή** : l'excellence, la valeur du guerrier ; **ἡ τιμή** : l'honneur, le rang reconnu ; **τὸ κλέος** : la gloire, ce qu'on dira de toi après ta mort. Achille préfère une vie brève et glorieuse à une vie longue et obscure.
- **ἡ ξενία** : l'**hospitalité**, devoir sacré protégé par Zeus (Ζεὺς ξένιος) : on accueille l'étranger, on le nourrit avant de lui demander son nom. Le Cyclope et les prétendants la violent.
- **ἡ μῆτις** : l'intelligence rusée d'Ulysse ; **ἡ ὕβρις** : la démesure, l'orgueil qui défie les dieux et appelle le châtiment.
- La condition humaine est fragile : « οἵη περ φύλλων γενεὴ τοίη δὲ καὶ ἀνδρῶν », « telle la génération des feuilles, telle aussi celle des hommes » (Iliade VI, 146).

## Les dieux de l'Olympe
| Dieu grec | Nom latin | Domaine | Attributs |
|---|---|---|---|
| Ζεύς | Jupiter | roi des dieux, ciel | foudre, aigle |
| Ἥρα | Junon | épouse de Zeus, mariage | paon |
| Ποσειδῶν | Neptune | mer, séismes | trident |
| Δημήτηρ | Cérès | blé, moissons | épis |
| Ἀθηνᾶ | Minerve | sagesse, guerre, artisanat | chouette, olivier, égide |
| Ἀπόλλων | Apollon | lumière, arts, divination | lyre, arc, laurier |
| Ἄρτεμις | Diane | chasse, nature sauvage | arc, biche |
| Ἄρης | Mars | guerre violente | armes |
| Ἀφροδίτη | Vénus | amour, beauté | colombe |
| Ἥφαιστος | Vulcain | feu, forge | marteau |
| Ἑρμῆς | Mercure | messager, commerce, voyageurs | caducée, sandales ailées |
| Διόνυσος | Bacchus | vigne, ivresse, théâtre | thyrse, vigne |

Hadès règne sur les Enfers et ne vit pas sur l'Olympe. Le poète **Hésiode** (vers 700 av. J.-C.) raconte dans la **Théogonie** la naissance des dieux : Chaos, Gaïa (la Terre), Ouranos (le Ciel), puis Cronos, détrôné par son fils Zeus.

## Les héros et la religion
- Les **héros** sont des demi-dieux ou des mortels exceptionnels : **Héraclès** (fils de Zeus et d'Alcmène, ses douze travaux), **Persée** (Méduse), **Thésée** (le Minotaure), **Jason** (la Toison d'or), **Œdipe** (le Sphinx). Le titan **Prométhée** vole le feu aux dieux pour le donner aux hommes.
- La religion grecque est **polythéiste** et **civique** : pas de dogme ni de livre sacré, mais des rites accomplis par la cité. Le rite central est le **sacrifice** (ἡ θυσία) sur l'autel, devant le temple, maison de la statue du dieu.
- On consulte des **oracles**, surtout celui d'**Apollon à Delphes**, où la Pythie rend les réponses du dieu.
- Les **concours** sont des fêtes religieuses : les **Jeux olympiques** en l'honneur de Zeus (traditionnellement depuis 776 av. J.-C.), les Panathénées à Athènes en l'honneur d'Athéna.

> **À retenir** : Homère, fin du VIIIe siècle, tradition orale, hexamètre, épithètes ; Iliade = colère d'Achille, 10e année de la guerre ; Odyssée = retour d'Ulysse ; valeurs : ἀρετή, τιμή, κλέος, ξενία, μῆτις, ὕβρις ; douze Olympiens ; religion civique : sacrifice, oracle de Delphes, concours.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel est le sujet de l'**Iliade** ?",
          choix: ["La colère d'Achille pendant la guerre de Troie", "Le retour d'Ulysse à Ithaque", "La prise de Troie grâce au cheval de bois", "L'expédition des Argonautes"],
          reponse: 0,
          explication: "L'Iliade raconte la colère d'Achille durant la dixième année de la guerre. Le retour d'Ulysse est le sujet de l'Odyssée ; le cheval de bois n'est pas raconté dans l'Iliade (il est évoqué dans l'Odyssée).",
        },
        {
          type: "vf",
          question: "L'Iliade et l'Odyssée sont composées en hexamètres dactyliques.",
          reponse: true,
          explication: "Oui : l'hexamètre dactylique, vers de six pieds, est le vers de l'épopée grecque (et plus tard latine).",
        },
        {
          type: "saisie",
          question: "Dans le premier vers de l'Odyssée, **Ἄνδρα μοι ἔννεπε, Μοῦσα**, à quel cas est le mot Μοῦσα ?",
          reponses: ["vocatif", "le vocatif"],
          explication: "Le poète s'adresse à la Muse : **vocatif** (identique ici au nominatif). Ἄνδρα est l'accusatif de ἀνήρ, COD de ἔννεπε (« dis »), et μοι le datif de ἐγώ.",
        },
        {
          type: "qcm",
          question: "Quel faux nom Ulysse donne-t-il au Cyclope Polyphème ?",
          choix: ["Μέντωρ (Mentor)", "Οὖτις (Personne)", "Τηλέμαχος (Télémaque)", "Αἴολος (Éole)"],
          reponse: 1,
          explication: "Οὖτις ἐμοί γ’ ὄνομα, « mon nom est Personne » (Odyssée IX). Quand Polyphème aveuglé appelle à l'aide en criant que « Personne » le tue, les autres Cyclopes ne viennent pas.",
        },
        {
          type: "qcm",
          question: "Quel dieu règne sur la mer et poursuit Ulysse de sa colère ?",
          choix: ["Ἀπόλλων", "Ἄρης", "Ἑρμῆς", "Ποσειδῶν"],
          reponse: 3,
          explication: "Poséidon (Neptune), dieu de la mer, est le père du Cyclope Polyphème : il se venge en empêchant le retour d'Ulysse.",
        },
        {
          type: "saisie",
          question: "Quel mot grec désigne le devoir sacré d'**hospitalité**, protégé par Zeus ? (en grec ou translittéré)",
          reponses: ["ξενία", "ἡ ξενία", "xenia"],
          explication: "**ἡ ξενία**, de ξένος (l'étranger, l'hôte). Dans l'Odyssée, on juge les peuples à la façon dont ils accueillent l'étranger.",
        },
        {
          type: "vf",
          question: "Héraclès est le fils de Zeus et de la mortelle Alcmène.",
          reponse: true,
          explication: "Oui : demi-dieu, persécuté par Héra, il accomplit les douze travaux (lion de Némée, hydre de Lerne…) et est divinisé après sa mort.",
        },
        {
          type: "qcm",
          question: "Où se trouvait le plus célèbre oracle d'Apollon, rendu par la Pythie ?",
          choix: ["Delphes", "Olympie", "Athènes", "Sparte"],
          reponse: 0,
          explication: "À Delphes, la Pythie rendait les oracles d'Apollon ; le temple portait l'inscription Γνῶθι σεαυτόν. Olympie était le sanctuaire de Zeus, où se tenaient les Jeux.",
        },
        {
          type: "saisie",
          question: "Traduis en français le premier mot de l'Iliade : **μῆνιν** (accusatif de ἡ μῆνις)",
          reponses: ["la colère", "colère"],
          explication: "ἡ μῆνις désigne la **colère**, une colère durable et terrible, presque divine : c'est le thème annoncé dès le premier mot du poème.",
        },
        {
          type: "redaction",
          question: "Traduis et commente le début de l'Iliade (chant I, v. 1-2) : **Μῆνιν ἄειδε θεὰ Πηληϊάδεω Ἀχιλῆος / οὐλομένην, ἣ μυρί’ Ἀχαιοῖς ἄλγε’ ἔθηκε.** (ἄειδε : impératif de ἀείδω, chanter ; Πηληϊάδεω : génitif homérique, « fils de Pélée » ; Ἀχιλῆος : génitif d'Ἀχιλλεύς ; οὐλόμενος : funeste ; μυρί’ = μυρία, innombrables ; ἄλγε’ = ἄλγεα, souffrances ; ἔθηκε : aoriste de τίθημι, causer)",
          corrige: `
**Analyse.** ἄειδε est un impératif (2e sg.) ; θεά est un vocatif (la Muse). Μῆνιν, COD, est placé en tête pour le mettre en valeur ; il est complété par le génitif Πηληϊάδεω Ἀχιλῆος et par l'adjectif apposé οὐλομένην (accusatif féminin, en rejet au vers 2). ἥ est un relatif féminin au nominatif (antécédent : μῆνιν), sujet de ἔθηκε ; Ἀχαιοῖς est un datif (« aux Achéens »), μυρία ἄλγεα le COD.

**Traduction.** « Chante, déesse, la colère d'Achille, fils de Pélée, colère funeste, qui causa aux Achéens des souffrances sans nombre. »

**Commentaire structuré.**
1. **Une ouverture codifiée** : l'invocation à la Muse (θεά) montre que l'aède se présente comme l'interprète d'un savoir divin. Le premier mot, μῆνιν, annonce le sujet précis du poème : non pas toute la guerre de Troie, mais un épisode, la colère d'Achille.
2. **Un héros défini par sa lignée** : Πηληϊάδεω (« le Péléide ») rappelle que l'identité du héros passe par son père ; Achille est fils du mortel Pélée et de la déesse Thétis.
3. **Une colère ambiguë** : le rejet de οὐλομένην, mis en valeur en tête du vers 2, souligne que cette colère est destructrice pour les Grecs eux-mêmes. L'épopée célèbre la valeur héroïque (ἀρετή, κλέος) tout en montrant le prix humain de l'honneur blessé (τιμή).

Conclusion : en deux vers, Homère fixe le sujet, le héros et la tonalité tragique de l'Iliade.
`,
        },
      ],
    },
    {
      id: "cite-democratie-histoire",
      titre: "La cité athénienne, la démocratie et l'histoire",
      theme: "Culture et textes",
      cours: `
## La cité (ἡ πόλις)
La **πόλις** est une communauté politique indépendante : une ville, son territoire (pour Athènes, l'**Attique**) et surtout ses **citoyens** (οἱ πολῖται). Elle a ses lois, ses dieux, son armée. Aristote définit l'homme comme un être fait pour vivre dans la cité : ὁ ἄνθρωπος φύσει πολιτικὸν ζῷον, « l'homme est par nature un animal politique » (*Politique*, I).

## Les étapes de la démocratie athénienne
| Date (av. J.-C.) | Événement |
|---|---|
| 594 | Réformes de **Solon** : abolition de l'esclavage pour dettes |
| 561-510 | Tyrannie de Pisistrate puis de ses fils |
| 508-507 | Réformes de **Clisthène** : 10 tribus, dèmes, Boulè des Cinq-Cents, isonomie |
| 490 et 480 | **Guerres médiques** contre les Perses : Marathon (490), Salamine (480) |
| 478-477 | Ligue de Délos, dominée par Athènes |
| vers 461-429 | Époque de **Périclès** : indemnité (μισθός) pour les juges, apogée d'Athènes, Parthénon |
| 431-404 | **Guerre du Péloponnèse** contre Sparte, défaite d'Athènes |

## Les institutions
| Institution | Composition | Rôle |
|---|---|---|
| Ἐκκλησία (Ecclésia) | tous les citoyens, réunis sur la Pnyx | vote les lois, la guerre et la paix, élit les stratèges |
| Βουλή (Boulè) | 500 citoyens tirés au sort (50 par tribu) | prépare les décrets soumis à l'Ecclésia |
| Ἡλιαία (Héliée) | jurés tirés au sort chaque année | tribunal populaire |
| Archontes | magistrats tirés au sort | fonctions religieuses et judiciaires |
| Stratèges | 10 magistrats **élus**, rééligibles | commandent l'armée et la flotte |

- Principes : **isonomie** (égalité devant la loi), **iségorie** (égal droit de parole à l'Assemblée), **tirage au sort** de la plupart des magistrats.
- **L'ostracisme** : chaque année, l'Assemblée peut voter pour exiler pendant dix ans un citoyen jugé dangereux, en écrivant son nom sur un tesson de poterie (τὸ ὄστρακον).
- **Limites** : seuls les **citoyens** (hommes adultes, nés de parents athéniens depuis une loi de Périclès en 451) participent. Les **femmes**, les **métèques** (étrangers résidents) et les **esclaves** sont exclus. C'est une démocratie **directe**, mais réservée à une minorité.

>! **Texte authentique** : Périclès, dans l'oraison funèbre rapportée par Thucydide (II, 37, 1). La phrase précédente annonce : « nous avons un régime politique (πολιτεία) qui n'imite pas les lois des voisins ».
>! καὶ ὄνομα μὲν διὰ τὸ μὴ ἐς ὀλίγους ἀλλ’ ἐς πλείονας οἰκεῖν δημοκρατία κέκληται.
>! « Quant au nom, comme les affaires dépendent non pas du petit nombre mais du plus grand nombre, il est appelé démocratie. »
>! L'expression ἐς πλείονας οἰκεῖν est discutée : « être administré par le plus grand nombre » ou « dans l'intérêt du plus grand nombre ». Les deux traductions sont admises.

## Les historiens
**Hérodote** d'Halicarnasse (Ve siècle av. J.-C.), que Cicéron appelle le « **père de l'histoire** », raconte les guerres médiques et leurs causes dans ses *Histoires*. Il voyage, interroge, compare les récits : ἱστορίη (en ionien) signifie d'abord « **enquête** ». Son œuvre commence par : Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε, « Voici l'exposé de l'enquête d'Hérodote d'Halicarnasse ». Il veut éviter que les grandes actions des Grecs et des Barbares ne tombent dans l'oubli.

**Thucydide** d'Athènes, stratège exilé après un échec militaire (424), écrit l'histoire de la **guerre du Péloponnèse**, dont il est contemporain. Il cherche les causes profondes (la crainte qu'inspirait à Sparte la puissance athénienne), critique ses sources et refuse le merveilleux. Il présente son œuvre comme κτῆμα ἐς αἰεί, « une acquisition pour toujours » (I, 22), et non comme un morceau d'apparat destiné à plaire sur le moment.

> **À retenir** : πόλις = cité-État ; Clisthène 508-507 ; Ecclésia, Boulè (tirage au sort), Héliée, stratèges élus ; ostracisme ; exclusion des femmes, des métèques et des esclaves ; Hérodote, l'enquête (guerres médiques) ; Thucydide, la guerre du Péloponnèse, κτῆμα ἐς αἰεί.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel réformateur établit, en 508-507 av. J.-C., les bases de la démocratie athénienne (10 tribus, Boulè des Cinq-Cents) ?",
          choix: ["Clisthène", "Solon", "Périclès", "Pisistrate"],
          reponse: 0,
          explication: "Clisthène réorganise les citoyens en dix tribus mêlant les régions de l'Attique et crée la Boulè des Cinq-Cents. Solon (594) l'a précédé ; Périclès domine la vie politique au milieu du Ve siècle ; Pisistrate était un tyran.",
        },
        {
          type: "vf",
          question: "Dans la démocratie athénienne, les femmes de citoyens votaient à l'Ecclésia.",
          reponse: false,
          explication: "Faux : les femmes, comme les métèques et les esclaves, sont exclues de la vie politique. Seuls les citoyens hommes adultes votent.",
        },
        {
          type: "saisie",
          question: "Comment s'appelle l'**assemblée de tous les citoyens** athéniens, qui se réunit sur la Pnyx ?",
          reponses: ["Ecclésia", "l'Ecclésia", "ἐκκλησία", "ἡ ἐκκλησία", "ekklesia", "ecclesia"],
          explication: "L'**Ecclésia** (ἡ ἐκκλησία, de ἐκκαλέω, « convoquer »). Le mot a ensuite désigné l'assemblée des chrétiens, d'où « église ».",
        },
        {
          type: "qcm",
          question: "Comment les dix stratèges étaient-ils désignés ?",
          choix: ["Par tirage au sort", "Par l'hérédité", "Par le roi", "Par élection, et ils étaient rééligibles"],
          reponse: 3,
          explication: "Les fonctions militaires exigeant de la compétence, les stratèges étaient élus chaque année et rééligibles (Périclès le fut de nombreuses fois). La plupart des autres magistrats étaient tirés au sort.",
        },
        {
          type: "saisie",
          question: "Comment s'appelle la procédure qui permettait d'exiler pour dix ans un citoyen jugé dangereux, en écrivant son nom sur un tesson ?",
          reponses: ["ostracisme", "l'ostracisme"],
          explication: "L'**ostracisme**, de τὸ ὄστρακον, le tesson de poterie servant de bulletin de vote.",
        },
        {
          type: "qcm",
          question: "De quelle cité Hérodote est-il originaire ?",
          choix: ["Athènes", "Halicarnasse", "Sparte", "Syracuse"],
          reponse: 1,
          explication: "Ἡροδότου Ἁλικαρνησσέος : Hérodote d'Halicarnasse, cité grecque d'Asie Mineure. Il écrit en dialecte ionien.",
        },
        {
          type: "vf",
          question: "Thucydide raconte la guerre du Péloponnèse, dont il est contemporain.",
          reponse: true,
          explication: "Oui : il commence à écrire dès le début de la guerre (431), qu'il juge la plus importante de toutes ; il a lui-même été stratège.",
        },
        {
          type: "saisie",
          question: "Donne le sens étymologique de **δημοκρατία**.",
          reponses: ["pouvoir du peuple", "le pouvoir du peuple", "gouvernement du peuple", "le gouvernement du peuple", "pouvoir au peuple", "force du peuple", "puissance du peuple", "souveraineté du peuple"],
          explication: "ὁ δῆμος (le peuple) + τὸ κράτος (le pouvoir, la force) : le **pouvoir du peuple**.",
        },
        {
          type: "redaction",
          question: "Traduis et commente cette phrase de l'oraison funèbre de Périclès (Thucydide, II, 37) : **καὶ ὄνομα μὲν διὰ τὸ μὴ ἐς ὀλίγους ἀλλ’ ἐς πλείονας οἰκεῖν δημοκρατία κέκληται.** (ἐς = εἰς ; ὀλίγοι : un petit nombre ; πλείονες : un plus grand nombre ; οἰκεῖν : administrer, gérer ; κέκληται : parfait passif de καλέω, « est appelé »)",
          corrige: `
**Analyse.** Le verbe principal est κέκληται (« est appelé ») ; le sujet sous-entendu est notre régime politique ; ὄνομα est un accusatif de relation (« quant au nom ») et δημοκρατία l'attribut. διὰ τό + infinitif (οἰκεῖν) : διά + accusatif exprime la **cause**, et l'article τό substantive l'infinitif (« du fait d'administrer »). La négation est μή, normale avec l'infinitif. ἐς ὀλίγους / ἐς πλείονας : « (remis) entre les mains de » ou « dans l'intérêt de » ; le sens exact est discuté. πλείονας est un comparatif (« plus nombreux ») : « le plus grand nombre ». Le sujet de κέκληται est le régime (ἡ πολιτεία) nommé dans la phrase précédente.

**Traduction.** « Et quant au nom, parce que les affaires dépendent non pas d'un petit nombre, mais du plus grand nombre, notre régime est appelé démocratie. » (On accepte aussi : « parce que la cité est administrée non dans l'intérêt d'un petit nombre, mais du plus grand nombre ».)

**Commentaire.**
1. **Le contexte** : en 431, à la fin de la première année de la guerre du Péloponnèse, Périclès prononce l'éloge des soldats morts. Thucydide réécrit ce discours : il fait l'éloge d'Athènes, modèle pour les autres cités.
2. **Une définition** : la démocratie se définit ici par le **plus grand nombre** (opposé à l'oligarchie, le pouvoir de quelques-uns). Le discours ajoute ensuite l'égalité devant la loi et l'accès aux charges selon le mérite.
3. **Une vision idéale** : ce « grand nombre » exclut les femmes, les métèques et les esclaves ; et Thucydide montre plus loin les dérives de la démocratie athénienne après Périclès (démagogie, expédition de Sicile). C'est donc un discours d'éloge, à lire avec un regard critique.
`,
        },
        {
          type: "redaction",
          question: "Compare la démarche d'Hérodote et celle de Thucydide en un paragraphe organisé, en t'appuyant sur les mots ἱστορίη et κτῆμα ἐς αἰεί.",
          corrige: `
**Points communs.** Hérodote et Thucydide fondent l'histoire comme genre : ils ne racontent plus les mythes mais les actions des hommes, et ils en cherchent les **causes**. Tous deux écrivent en prose et veulent sauver de l'oubli des événements majeurs (les guerres médiques, la guerre du Péloponnèse).

**Hérodote.** Son mot clé est ἱστορίη, l'**enquête** : il voyage (Égypte, Scythie, Asie), recueille des témoignages, rapporte parfois plusieurs versions sans trancher, et fait une place aux coutumes des peuples et aux interventions divines. Son but est que « les grandes actions ne perdent pas leur renom ».

**Thucydide.** Contemporain et acteur de la guerre qu'il raconte, il se veut plus **rigoureux** : il critique ses sources, rejette le merveilleux, distingue les prétextes des causes profondes (la peur qu'inspire la puissance athénienne). Son œuvre est un κτῆμα ἐς αἰεί, une **acquisition pour toujours**, utile pour comprendre les crises futures, car la nature humaine reste la même.

**Conclusion.** Hérodote est le « père de l'histoire » par sa curiosité ; Thucydide en est le premier théoricien critique.
`,
        },
      ],
    },
    {
      id: "theatre-philosophie-science",
      titre: "Le théâtre, la philosophie et la science grecs",
      theme: "Culture et textes",
      cours: `
## Le théâtre : une fête civique et religieuse
Le théâtre naît à Athènes au VIe siècle av. J.-C. dans le culte de **Dionysos**. Les pièces sont jouées lors de **concours** pendant les fêtes du dieu, surtout les **Grandes Dionysies** (au printemps).
- Chaque année, trois poètes tragiques présentent chacun **trois tragédies et un drame satyrique** ; un riche citoyen, le **chorège**, finance le chœur.
- Le théâtre (τὸ θέατρον, de θεάομαι, « regarder ») comprend les gradins (θέατρον), l'**orchestra** (ἡ ὀρχήστρα), espace circulaire où évolue le chœur, et la **skènè** (ἡ σκηνή), bâtiment de scène.
- Les acteurs sont **tous des hommes**, masqués ; en tragédie, trois acteurs au plus se partagent les rôles. Le **chœur** chante et danse.
- Une tragédie suit la structure : prologue, parodos (entrée du chœur), épisodes séparés par des chants du chœur (stasima), exodos.

## La tragédie
| Auteur | Dates (av. J.-C.) | Pièces célèbres |
|---|---|---|
| Eschyle | vers 525-456 | *Les Perses* (472), *L'Orestie* (458) |
| Sophocle | vers 496-406 | *Antigone*, *Œdipe roi* |
| Euripide | vers 480-406 | *Médée* (431), *Les Bacchantes* |

La tragédie met en scène des héros du mythe confrontés au destin, aux dieux et à leurs propres fautes. Dans *Antigone*, l'héroïne enterre son frère Polynice malgré l'édit du roi Créon : elle oppose les **lois non écrites des dieux** à la loi de la cité. Elle dit : οὔτοι συνέχθειν, ἀλλὰ συμφιλεῖν ἔφυν, « je ne suis pas née pour partager la haine, mais pour partager l'amour » (v. 523).

Pour Aristote (*Poétique*), la tragédie, en suscitant la **pitié** et la **crainte** (ἔλεος καὶ φόβος), opère une **catharsis** (ἡ κάθαρσις, « purification ») de ces émotions.

## La comédie
La comédie ancienne a pour grand auteur **Aristophane** (vers 445-385). Elle se moque des hommes politiques, des intellectuels et de la guerre : *Les Nuées* (423) caricaturent Socrate ; *Lysistrata* (411) montre des femmes qui font la grève pour imposer la paix ; *Les Grenouilles* (405) organisent un concours entre Eschyle et Euripide aux Enfers. Le chœur s'y adresse directement au public dans la **parabase**.

## La philosophie
- Les **présocratiques** cherchent le principe de toutes choses par la raison : **Thalès** de Milet (l'eau), **Héraclite** (le devenir, le feu), **Parménide** (l'être), **Démocrite** (les atomes, ἄτομος, « insécable »).
- Les **sophistes** enseignent l'art de parler contre de l'argent ; **Protagoras** affirme : πάντων χρημάτων μέτρον ἄνθρωπος, « l'homme est la mesure de toutes choses ».
- **Socrate** (469-399) n'a rien écrit ; on le connaît surtout par Platon. Il interroge ses concitoyens pour leur montrer qu'ils ne savent pas ce qu'ils croient savoir (**ironie**), puis les aide à « accoucher » de la vérité (**maïeutique**, l'art de la sage-femme). Accusé de ne pas reconnaître les dieux de la cité et de corrompre la jeunesse, il est condamné à mort en **399** et boit la ciguë. Dans l'*Apologie* (38a), Platon lui fait dire : ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ, « une vie sans examen ne vaut pas d'être vécue par un homme ».
- **Platon** (vers 428-348), son disciple, fonde l'**Académie** vers 387 et écrit des **dialogues** (*Apologie de Socrate*, *Phédon*, *Banquet*, *République*). Dans l'allégorie de la caverne (*République*, VII), les hommes enchaînés ne voient que des ombres : la philosophie est une conversion vers la lumière du vrai.
- **Aristote** (384-322), élève de Platon et précepteur d'Alexandre, fonde le **Lycée** et étudie tous les savoirs : logique, physique, biologie, politique, poétique. Sa *Métaphysique* commence par : Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει, « tous les hommes désirent naturellement savoir ».

## La science grecque
- **Mathématiques** : Thalès et Pythagore (VIe siècle, théorèmes qui portent leur nom), **Euclide** (*Éléments*, vers 300, à Alexandrie), **Archimède** de Syracuse (IIIe siècle : poussée des fluides, levier, approximation de π ; selon l'anecdote, il s'écrie « εὕρηκα », « j'ai trouvé »).
- **Astronomie et géographie** : **Ératosthène**, directeur de la Bibliothèque d'Alexandrie, mesure la circonférence de la Terre avec une précision remarquable ; **Aristarque** de Samos propose un modèle où la Terre tourne autour du Soleil.
- **Médecine** : **Hippocrate** de Cos (Ve siècle) fonde une médecine d'observation, sans recours aux dieux ; ses *Aphorismes* s'ouvrent sur : Ὁ βίος βραχύς, ἡ δὲ τέχνη μακρή, « la vie est brève, l'art (la médecine) est long ». Le serment d'Hippocrate inspire encore celui des médecins.
- **Alexandrie**, fondée par Alexandre en 331, devient avec son **Musée** et sa **Bibliothèque** la capitale du savoir à l'époque hellénistique.

> **À retenir** : théâtre = concours civiques en l'honneur de Dionysos ; Eschyle, Sophocle, Euripide (tragédie), Aristophane (comédie) ; catharsis ; Socrate (ironie, maïeutique, mort en 399), Platon (Académie, dialogues), Aristote (Lycée) ; Euclide, Archimède, Ératosthène, Hippocrate ; Alexandrie.
`,
      exercices: [
        {
          type: "qcm",
          question: "Lors de quelles fêtes les tragédies étaient-elles présentées en concours à Athènes ?",
          choix: ["Les Grandes Dionysies, en l'honneur de Dionysos", "Les Jeux olympiques, en l'honneur de Zeus", "Les Panathénées, en l'honneur d'Athéna", "Les Mystères d'Éleusis, en l'honneur de Déméter"],
          reponse: 0,
          explication: "Le théâtre est lié au culte de Dionysos : les concours tragiques avaient lieu surtout aux Grandes Dionysies, au printemps, dans le théâtre de Dionysos au pied de l'Acropole.",
        },
        {
          type: "vf",
          question: "Dans le théâtre grec, les rôles féminins étaient joués par des actrices.",
          reponse: false,
          explication: "Faux : tous les acteurs et choreutes étaient des hommes ; ils portaient des masques qui permettaient de jouer plusieurs rôles, masculins comme féminins.",
        },
        {
          type: "qcm",
          question: "Quel auteur a écrit la comédie *Les Nuées*, qui caricature Socrate ?",
          choix: ["Sophocle", "Euripide", "Eschyle", "Aristophane"],
          reponse: 3,
          explication: "Aristophane, maître de la comédie ancienne, représente en 423 un Socrate ridicule, suspendu dans un panier. Sophocle, Euripide et Eschyle sont des poètes tragiques.",
        },
        {
          type: "saisie",
          question: "Comment s'appelle l'espace circulaire du théâtre où évoluent le chœur et ses danses ?",
          reponses: ["orchestra", "l'orchestra", "ὀρχήστρα", "ἡ ὀρχήστρα", "orkhestra"],
          explication: "L'**orchestra** (ἡ ὀρχήστρα, de ὀρχέομαι, « danser »), entre les gradins et la skènè.",
        },
        {
          type: "qcm",
          question: "En quelle année Socrate est-il condamné à mort ?",
          choix: ["508 av. J.-C.", "399 av. J.-C.", "480 av. J.-C.", "323 av. J.-C."],
          reponse: 1,
          explication: "En 399, après la défaite d'Athènes et la chute des Trente, Socrate est accusé d'impiété et de corruption de la jeunesse, et condamné à boire la ciguë.",
        },
        {
          type: "saisie",
          question: "Quel philosophe, disciple de Socrate, fonde l'**Académie** à Athènes ?",
          reponses: ["Platon", "Πλάτων"],
          explication: "**Platon** fonde l'Académie vers 387 av. J.-C., dans un jardin consacré au héros Académos. Aristote y étudie avant de fonder le Lycée.",
        },
        {
          type: "qcm",
          question: "Quel savant d'Alexandrie a mesuré la circonférence de la Terre ?",
          choix: ["Euclide", "Hippocrate", "Ératosthène", "Thalès"],
          reponse: 2,
          explication: "Ératosthène compare l'ombre du Soleil à Syène et à Alexandrie le même jour et en déduit la circonférence de la Terre. Euclide est l'auteur des *Éléments*, Hippocrate un médecin.",
        },
        {
          type: "vf",
          question: "Hippocrate de Cos est considéré comme un fondateur de la médecine rationnelle.",
          reponse: true,
          explication: "Oui : la médecine hippocratique explique les maladies par des causes naturelles et l'observation des symptômes, et non par la colère des dieux.",
        },
        {
          type: "qcm",
          question: "Dans *Antigone* de Sophocle, quel conflit oppose Antigone à Créon ?",
          choix: ["L'édit du roi contre les lois non écrites des dieux", "Une rivalité amoureuse", "Une guerre contre Athènes", "La possession du trône d'Ithaque"],
          reponse: 0,
          explication: "Créon interdit d'enterrer Polynice, traître à Thèbes ; Antigone l'ensevelit au nom des lois non écrites des dieux, qui ordonnent d'honorer les morts.",
        },
        {
          type: "redaction",
          question: "Traduis puis commente ces deux phrases authentiques : 1) **ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ** (Platon, *Apologie de Socrate*, 38a ; ἀνεξέταστος : non examiné ; βιωτός : qui vaut d'être vécu) 2) **Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει** (Aristote, *Métaphysique*, début ; εἰδέναι : savoir ; ὀρέγομαι + génitif : désirer ; φύσει : par nature)",
          corrige: `
**1) Analyse.** Phrase nominale : ἐστί est sous-entendu. ὁ ἀνεξέταστος βίος : sujet, adjectif en position attributive (épithète). βιωτός : attribut, nié par οὐ (on énonce un fait, un jugement). ἀνθρώπῳ : datif, « pour un homme ». δέ relie la phrase au contexte.
**Traduction** : « Une vie sans examen n'est pas digne d'être vécue par un homme. »

**2) Analyse.** ὀρέγονται : présent moyen (déponent), 3e pl. ; sujet πάντες ἄνθρωποι. τοῦ εἰδέναι : infinitif substantivé au génitif, complément de ὀρέγονται. φύσει : datif de manière (« par nature »).
**Traduction** : « Tous les hommes désirent naturellement savoir. »

**Commentaire.**
1. **Socrate et l'examen** : au moment d'être condamné, Socrate refuse de renoncer à interroger ses concitoyens. Pour lui, vivre humainement, c'est examiner ses opinions par le dialogue ; la philosophie est un mode de vie, pas seulement un savoir.
2. **Aristote et le désir de savoir** : Aristote fait du savoir un désir naturel, présent en tout homme (il cite le plaisir que nous prenons à voir). La connaissance est recherchée pour elle-même.
3. **Une même conviction** : de Socrate à Aristote, la raison (λόγος) définit l'homme ; on retrouve ce principe dans la science grecque, d'Euclide à Hippocrate, qui cherche des causes naturelles et des démonstrations.
`,
        },
      ],
    },
    {
      id: "masculin-feminin",
      titre: "Masculin, féminin : hommes et femmes en Grèce",
      theme: "Culture et textes",
      cours: `
## Les mots pour le dire
| Mot grec | Sens | Déclinaison | Dérivés français |
|---|---|---|---|
| ὁ ἀνήρ, ἀνδρός | l'homme (le mâle), le mari | 3e décl. | androïde, polyandrie |
| ὁ ἄνθρωπος | l'être humain (homme ou femme) | 2e décl. | anthropologie, philanthrope |
| ἡ γυνή, γυναικός | la femme, l'épouse | 3e décl. | gynécologue, misogyne |
| ἡ παρθένος | la jeune fille non mariée | 2e décl. (féminin) | Parthénon |
| ὁ γάμος | le mariage | 2e décl. | monogame, polygamie |
| ὁ οἶκος | la maison, la maisonnée | 2e décl. | économie (οἰκονομία, gestion de la maison) |
| ἡ ἀνδρεία | le courage (« la qualité d'homme ») | 1re décl. | |

Ne confonds pas **ἀνήρ** (l'homme par opposition à la femme) et **ἄνθρωπος** (l'être humain, par opposition aux dieux et aux animaux).

| Cas | ὁ ἀνήρ | ἡ γυνή |
|---|---|---|
| N. sg. | ἀνήρ | γυνή |
| V. sg. | ἄνερ | γύναι |
| A. sg. | ἄνδρα | γυναῖκα |
| G. sg. | ἀνδρός | γυναικός |
| D. sg. | ἀνδρί | γυναικί |
| N. pl. | ἄνδρες | γυναῖκες |
| A. pl. | ἄνδρας | γυναῖκας |
| G. pl. | ἀνδρῶν | γυναικῶν |
| D. pl. | ἀνδράσι(ν) | γυναιξί(ν) |

Le Parthénon est le temple d'**Athéna Parthénos**, « Athéna la Vierge ». Le gynécée (γυναικεῖον) est la partie de la maison réservée aux femmes.

## À Athènes : deux mondes séparés
- **Les hommes** : le citoyen vit dans l'espace public (agora, Assemblée, tribunaux, gymnase) ; il est soldat (l'hoplite) et doit montrer son ἀνδρεία. Les garçons de citoyens sont éduqués par des maîtres (lecture, musique, gymnastique), puis font leur service d'éphèbe.
- **Les femmes de citoyens** n'ont **aucun droit politique**. Toute leur vie, elles sont placées sous l'autorité d'un tuteur, le **κύριος** (le père, puis le mari). Mariées très jeunes (vers 14-15 ans) à un homme plus âgé, choisi par leur père, elles dirigent l'**οἶκος** : les esclaves, les provisions, le tissage, l'éducation des petits enfants. Dans l'*Économique* de Xénophon, Ischomaque explique à sa jeune épouse ce rôle de maîtresse de maison.
- **La religion** est le grand domaine public des femmes : prêtresses (celle d'Athéna Polias à Athènes), jeunes filles tissant le péplos offert à Athéna lors des Panathénées, fête des **Thesmophories** réservée aux femmes en l'honneur de Déméter.
- **À Sparte**, les filles pratiquent la course et la lutte, et les femmes ont une réputation de plus grande liberté, ce qui choquait les autres Grecs.

## Figures de femmes dans les textes
- **Andromaque** : dans l'*Iliade* (chant VI), Hector la renvoie à ses travaux de femme (le métier à tisser, la quenouille) et conclut : πόλεμος δ’ ἄνδρεσσι μελήσει, « la guerre sera l'affaire des hommes » (v. 492 ; ἄνδρεσσι est un datif pluriel homérique de ἀνήρ).
- **Pénélope**, l'épouse fidèle de l'*Odyssée*, est aussi rusée qu'Ulysse : elle défait la nuit la toile qu'elle tisse le jour pour retarder son remariage.
- **Antigone** désobéit au roi Créon pour ensevelir son frère, au nom des lois divines.
- **Médée**, chez Euripide (431), dénonce la condition des femmes : elle préférerait se tenir trois fois dans la ligne de bataille, le bouclier au bras, plutôt qu'accoucher une seule fois (v. 250-251).
- **Lysistrata** (Aristophane, 411) imagine, pour rire, des femmes qui imposent la paix aux hommes par une grève.
- **Sappho** de Lesbos (vers 600 av. J.-C.), poétesse lyrique, chante l'amour : Platon l'aurait appelée « la dixième Muse ».
- Le mythe imagine aussi un monde inversé : les **Amazones**, peuple de femmes guerrières.

Un vers résume l'idéal masculin de la femme silencieuse : γύναι, γυναιξὶ κόσμον ἡ σιγὴ φέρει, « femme, aux femmes le silence est une parure » (Sophocle, *Ajax*, v. 293 : Tecmesse rapporte la phrase, « toujours répétée », par laquelle Ajax l'a fait taire). Mais le théâtre, écrit et joué par des hommes, donne la parole à des héroïnes qui contestent cet ordre.

> **À retenir** : ἀνήρ (le mâle, le mari) ≠ ἄνθρωπος (l'être humain) ; γυνή, γυναικός ; à Athènes, la femme de citoyen n'a pas de droits politiques et vit sous l'autorité d'un κύριος ; elle gère l'οἶκος et joue un rôle religieux important ; figures : Andromaque, Pénélope, Antigone, Médée, Lysistrata, Sappho.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quel mot grec désigne l'**être humain** en général, par opposition aux dieux et aux animaux ?",
          choix: ["ὁ ἀνήρ", "ὁ ἄνθρωπος", "ἡ γυνή", "ὁ γάμος"],
          reponse: 1,
          explication: "ὁ ἄνθρωπος est l'être humain (d'où anthropologie). ὁ ἀνήρ est l'homme par opposition à la femme, ou le mari ; ἡ γυνή la femme ; ὁ γάμος le mariage.",
        },
        {
          type: "saisie",
          question: "Donne le **datif pluriel** de ἡ γυνή, γυναικός, avec l'article.",
          reponses: ["ταῖς γυναιξί", "ταῖς γυναιξίν", "ταις γυναιξι", "ταις γυναιξιν"],
          explication: "Radical γυναικ- + -σι : κ + σ = ξ, d'où **ταῖς γυναιξί(ν)**, « aux femmes ». L'article est féminin, comme le nom.",
        },
        {
          type: "qcm",
          question: "D'où vient le nom du **Parthénon** ?",
          choix: ["De πάρθος, la Perse vaincue", "De πατήρ, le père des dieux", "De παρθένος, la jeune fille : temple d'Athéna Parthénos", "De πᾶς, tout : temple de tous les dieux"],
          reponse: 2,
          explication: "Le Parthénon est le temple d'Athéna **Parthénos**, « la Vierge », sur l'Acropole. Le temple de tous les dieux, c'est le Panthéon (πᾶς + θεός).",
        },
        {
          type: "vf",
          question: "À Athènes, les femmes de citoyens étaient exclues de la vie politique mais jouaient un rôle important dans la religion de la cité.",
          reponse: true,
          explication: "Oui : sans droit de vote ni accès aux magistratures, elles exercent des sacerdoces (prêtresse d'Athéna Polias), participent aux Panathénées (tissage du péplos) et célèbrent entre elles les Thesmophories.",
        },
        {
          type: "saisie",
          question: "Quel mot grec désigne la **maison**, la maisonnée (famille, esclaves, biens), et a donné « économie » ? (en grec ou translittéré)",
          reponses: ["οἶκος", "ὁ οἶκος", "oikos", "οἰκία", "ἡ οἰκία", "oikia"],
          explication: "**ὁ οἶκος** : la maisonnée, que dirige la maîtresse de maison. οἰκονομία (οἶκος + νόμος) est la « gestion de la maison », d'où « économie ». (ἡ οἰκία, la maison, est de la même famille.)",
        },
        {
          type: "qcm",
          question: "Que signifie **πόλεμος δ’ ἄνδρεσσι μελήσει** (Iliade VI, 492 ; μελήσει : futur de μέλει, « être l'affaire de, être le souci de » + datif) ?",
          choix: ["La guerre sera l'affaire des hommes.", "Les hommes ont fait la guerre.", "La guerre tue les hommes.", "Les hommes fuiront la guerre."],
          reponse: 0,
          explication: "πόλεμος est le sujet (nominatif), ἄνδρεσσι un datif pluriel homérique de ἀνήρ (attique ἀνδράσι), μελήσει un futur : « la guerre sera l'affaire des hommes ». Hector renvoie Andromaque à ses travaux de femme.",
        },
        {
          type: "saisie",
          question: "Donne le sens littéral de **misogyne** (μισέω, haïr + γυνή).",
          reponses: ["qui hait les femmes", "qui déteste les femmes", "celui qui hait les femmes", "haine des femmes", "qui a de la haine pour les femmes"],
          explication: "μισέω (haïr) + γυνή (la femme) : « **qui hait les femmes** ». Même premier élément dans misanthrope.",
        },
        {
          type: "qcm",
          question: "Dans quelle pièce d'Aristophane les femmes font-elles la grève pour obliger les hommes à faire la paix ?",
          choix: ["Les Nuées", "Les Grenouilles", "Médée", "Lysistrata"],
          reponse: 3,
          explication: "*Lysistrata* (411), en pleine guerre du Péloponnèse. *Les Nuées* caricaturent Socrate, *Les Grenouilles* mettent en scène Eschyle et Euripide ; *Médée* est une tragédie d'Euripide.",
        },
        {
          type: "redaction",
          question: "Traduis puis commente ces vers d'Euripide (*Médée*, v. 250-251), où Médée parle de la condition des femmes : **ὡς τρὶς ἂν παρ’ ἀσπίδα / στῆναι θέλοιμ’ ἂν μᾶλλον ἢ τεκεῖν ἅπαξ.** (ὡς : car ; τρίς : trois fois ; παρ’ ἀσπίδα στῆναι : se tenir près du bouclier, c'est-à-dire combattre en ligne ; θέλοιμ’ ἄν = θέλοιμι ἄν, « je voudrais » ; μᾶλλον ἤ : plutôt que ; τεκεῖν : infinitif aoriste de τίκτω, enfanter ; ἅπαξ : une fois)",
          corrige: `
**Analyse.** Verbe principal : θέλοιμ’ ἄν, optatif avec ἄν (« je voudrais, j'aimerais »), 1re sg. ; il commande deux infinitifs aoristes comparés par μᾶλλον ἤ : στῆναι (de ἵστημι, « se tenir ») et τεκεῖν (de τίκτω). L'aoriste n'a pas ici de valeur passée : il présente chaque action globalement. Le premier ἄν, placé tôt dans la phrase, annonce la nuance de possibilité ; il est repris par le second. Opposition des adverbes τρίς / ἅπαξ.

**Traduction.** « Car j'aimerais mieux me tenir trois fois en ligne, le bouclier au bras, que d'enfanter une seule fois. »

**Commentaire.**
1. **Une réponse aux hommes** : juste avant, Médée rapporte ce que disent les hommes : les femmes vivraient à l'abri dans la maison pendant qu'eux combattent. Elle renverse l'argument : l'accouchement, souvent mortel dans l'Antiquité, est plus dangereux que la bataille.
2. **Une comparaison provocante** : le combat d'hoplite (παρ’ ἀσπίδα) est le symbole de la valeur masculine (ἀνδρεία) et de la citoyenneté. Médée met la souffrance féminine à égalité avec lui, et même au-dessus (τρίς / ἅπαξ).
3. **La portée** : par la bouche d'une étrangère, d'une magicienne et bientôt d'une meurtrière, Euripide fait entendre à un public d'hommes une critique de la condition des femmes. Le théâtre est un lieu où la cité met en débat ses propres valeurs.
`,
        },
      ],
    },
    {
      id: "mediterranee-echanges",
      titre: "Méditerranée : conflits, influences et échanges",
      theme: "Culture et textes",
      cours: `
## Les Grecs autour de la mer
Les Grecs vivent, selon le mot de Platon, autour de la mer « comme des fourmis ou des grenouilles autour d'une mare » (*Phédon*, 109b). Ils ne forment jamais un État unique : des centaines de cités indépendantes, souvent rivales.

Ce qui les unit, selon Hérodote (VIII, 144), c'est τὸ Ἑλληνικόν, « le fait d'être grec » : le **même sang**, la **même langue**, des **sanctuaires et des sacrifices communs** et des **mœurs semblables**. Les autres sont des **βάρβαροι** : à l'origine, ceux qui ne parlent pas grec (leur langue fait « bar-bar » à l'oreille grecque), sans idée de sauvagerie au départ.

## La colonisation (VIIIe-VIe siècle av. J.-C.)
Pour trouver des terres ou des comptoirs, des cités (les **métropoles**, de μήτηρ, mère, et πόλις, cité) envoient des colons fonder une **ἀποικία** (« établissement loin de chez soi »), sous la conduite d'un **oikiste**, souvent après avoir consulté l'oracle de Delphes. La colonie est indépendante mais garde des liens religieux avec sa métropole.

| Colonie | Nom grec | Métropole | Date (av. J.-C.) |
|---|---|---|---|
| Syracuse (Sicile) | Συράκουσαι | Corinthe | vers 733 |
| Naples | Νεάπολις (« ville nouvelle ») | Cumes | Ve siècle |
| Byzance | Βυζάντιον | Mégare | vers 660 |
| Marseille | Μασσαλία | Phocée (Asie Mineure) | vers 600 |
| Nice, Antibes | Νίκαια, Ἀντίπολις | Marseille | plus tard |

Le sud de l'Italie et la Sicile forment la **Grande-Grèce**. Des Grecs s'installent aussi en mer Noire, en Libye (Cyrène) et en Égypte (le comptoir de Naucratis).

## Les conflits
- **Les guerres médiques** opposent les Grecs à l'Empire perse : Marathon (490), les Thermopyles (480) où meurent Léonidas et ses Spartiates, puis la victoire navale de **Salamine** (480), et Platées (479). Elles deviennent pour les Grecs le symbole de la liberté face au despotisme.
- Athènes construit ensuite une **thalassocratie** (θάλαττα + κράτος, la domination sur la mer) : la flotte de **trières** (ἡ τριήρης) et le port du **Pirée**.
- **La guerre du Péloponnèse** (431-404) oppose Athènes à Sparte et ruine la Grèce.

>! **Texte authentique** : l'épitaphe des Spartiates morts aux Thermopyles, citée par Hérodote (VII, 228) et attribuée par la tradition au poète Simonide :
>! Ὦ ξεῖν’, ἀγγέλλειν Λακεδαιμονίοις ὅτι τῇδε
>! κείμεθα, τοῖς κείνων ῥήμασι πειθόμενοι.
>! « Étranger, va dire aux Lacédémoniens qu'ici nous gisons, obéissant à leurs ordres. »

## Les échanges et les influences
- **Le commerce** : vin, huile d'olive et céramique peinte athénienne circulent dans toute la Méditerranée ; le blé vient de la mer Noire et d'Égypte. Le marchand se dit ὁ ἔμπορος, le comptoir τὸ ἐμπόριον (d'où Ampurias, en Catalogne).
- **La monnaie** (inventée en Lydie vers 600) : la **drachme** (ἡ δραχμή) d'Athènes, frappée de la chouette d'Athéna.
- **L'alphabet** : emprunté aux Phéniciens, l'alphabet grec est transmis aux Étrusques puis aux Romains, d'où notre alphabet latin.
- **Alexandre le Grand** (roi de Macédoine de 336 à 323) conquiert l'Empire perse jusqu'à l'Indus. Commence l'**époque hellénistique** (323-31 av. J.-C.) : le grec **commun**, ἡ κοινὴ διάλεκτος (la **koinè**), devient la langue de l'Orient méditerranéen ; c'est la langue de la traduction grecque de la Bible (la Septante) et du Nouveau Testament.
- **Rome** conquiert la Grèce (prise de Corinthe en 146) mais adopte sa culture, comme le dit le poète latin Horace : *Graecia capta ferum victorem cepit*, « la Grèce conquise a conquis son farouche vainqueur » (*Épîtres*, II, 1, 156).

## Vocabulaire
ἡ θάλαττα : la mer · ἡ ναῦς, νεώς : le navire (nautique, nausée) · ὁ ναύτης : le marin · ὁ ἔμπορος : le marchand · ὁ ξένος : l'étranger, l'hôte · ὁ βάρβαρος : le non-Grec · ἡ ἀποικία : la colonie · ὁ πόλεμος : la guerre (polémique) · ἡ εἰρήνη : la paix (Irène).

> **À retenir** : unité culturelle (langue, dieux, mœurs) sans unité politique ; βάρβαρος = qui ne parle pas grec ; colonisation (Syracuse, Marseille vers 600 par les Phocéens) ; guerres médiques (Marathon 490, Salamine 480) ; thalassocratie athénienne ; Alexandre, époque hellénistique, koinè ; Rome hellénisée.
`,
      exercices: [
        {
          type: "qcm",
          question: "Quels Grecs ont fondé **Marseille** (Μασσαλία) vers 600 av. J.-C. ?",
          choix: ["Les Athéniens", "Les Spartiates", "Les Phocéens", "Les Corinthiens"],
          reponse: 2,
          explication: "Marseille est fondée vers 600 par des colons de **Phocée**, cité grecque d'Asie Mineure (d'où le surnom de « cité phocéenne »). Corinthe a fondé Syracuse.",
        },
        {
          type: "saisie",
          question: "Donne le sens étymologique de **métropole** (μήτηρ + πόλις).",
          reponses: ["cité mère", "la cité mère", "ville mère", "la ville mère", "cité-mère", "ville-mère", "mère cité"],
          explication: "μήτηρ (la mère) + πόλις (la cité) : la « **cité mère** », celle qui fonde une colonie. Le mot désigne aujourd'hui une grande ville ou la France par opposition à l'outre-mer.",
        },
        {
          type: "vf",
          question: "Pour les Grecs, le mot βάρβαρος désignait d'abord celui qui ne parle pas grec.",
          reponse: true,
          explication: "Oui : le mot imite un langage incompréhensible (« bar-bar »). Il désigne d'abord l'étranger non grec, sans idée de cruauté ; le sens péjoratif de « sauvage » s'est développé ensuite.",
        },
        {
          type: "qcm",
          question: "Quelle bataille de 480 av. J.-C. est une victoire **navale** des Grecs sur les Perses ?",
          choix: ["Salamine", "Marathon", "Platées", "Les Thermopyles"],
          reponse: 0,
          explication: "À **Salamine** (480), la flotte grecque, surtout athénienne, bat la flotte perse. Marathon (490) et Platées (479) sont des batailles terrestres ; aux Thermopyles (480), Léonidas et ses Spartiates sont tués.",
        },
        {
          type: "saisie",
          question: "Quelle ville italienne actuelle porte le nom grec **Νεάπολις** (« la ville nouvelle ») ?",
          reponses: ["Naples", "Napoli"],
          explication: "Νεάπολις (*Neapolis*), « la ville nouvelle » (νέα + πόλις), est devenue **Naples**.",
        },
        {
          type: "qcm",
          question: "Qu'appelle-t-on la **koinè** ?",
          choix: ["Le dialecte de Sparte", "La langue d'Homère", "Le grec commun parlé dans tout l'Orient méditerranéen après Alexandre", "L'alphabet phénicien"],
          reponse: 2,
          explication: "ἡ κοινὴ διάλεκτος, la « langue commune », issue surtout de l'attique, se répand après les conquêtes d'Alexandre. C'est la langue du Nouveau Testament.",
        },
        {
          type: "saisie",
          question: "Dans l'épitaphe des Thermopyles, **Ὦ ξεῖν’, ἀγγέλλειν Λακεδαιμονίοις…**, quel est le mode de ἀγγέλλειν ? (un mot)",
          reponses: ["infinitif", "l'infinitif", "infinitif présent", "l'infinitif présent"],
          explication: "ἀγγέλλειν est un **infinitif** présent ; il a ici la valeur d'un impératif (« va annoncer »), emploi poétique et archaïque.",
        },
        {
          type: "qcm",
          question: "Que veut dire Horace avec *Graecia capta ferum victorem cepit* ?",
          choix: ["Rome a détruit la culture grecque.", "La Grèce, conquise par Rome, a imposé sa culture à son vainqueur.", "Les Grecs ont conquis Rome par les armes.", "Rome et la Grèce sont restées étrangères l'une à l'autre."],
          reponse: 1,
          explication: "« La Grèce conquise a conquis son farouche vainqueur » : vaincue militairement, la Grèce a soumis Rome à sa littérature, à ses arts et à sa philosophie.",
        },
        {
          type: "redaction",
          question: "Traduis et commente l'épitaphe des Spartiates morts aux Thermopyles (citée par Hérodote, VII, 228) : **Ὦ ξεῖν’, ἀγγέλλειν Λακεδαιμονίοις ὅτι τῇδε / κείμεθα, τοῖς κείνων ῥήμασι πειθόμενοι.** (ξεῖνε : forme ionienne de ξένε, vocatif de ξένος ; ἀγγέλλειν : infinitif à valeur d'impératif ; οἱ Λακεδαιμόνιοι : les Spartiates ; τῇδε : ici ; κεῖμαι : être étendu, gésir ; κείνων = ἐκείνων ; τὸ ῥῆμα : la parole ; πείθομαι + datif : obéir à)",
          corrige: `
**Analyse.** Ὦ ξεῖν’ (ξεῖνε élidé) : vocatif, apostrophe au passant. ἀγγέλλειν : infinitif employé comme un impératif. Λακεδαιμονίοις : datif, complément d'attribution (« aux Lacédémoniens »). ὅτι introduit une complétive : κείμεθα, 1re pl. du présent de κεῖμαι (forme moyenne). τῇδε : adverbe de lieu. πειθόμενοι : participe présent moyen, nominatif masculin pluriel, accordé au sujet « nous » ; il gouverne le datif τοῖς κείνων ῥήμασι (κείνων, génitif pluriel du démonstratif, désigne les Lacédémoniens).

**Traduction.** « Étranger, va dire aux Lacédémoniens qu'ici nous gisons, obéissant à leurs ordres. » (On accepte : « fidèles à leurs ordres », « pour avoir obéi à leurs lois ».)

**Commentaire.**
1. **Une inscription funéraire** : le distique élégiaque (un hexamètre et un pentamètre) est gravé, dit Hérodote, sur une stèle à l'endroit même où les morts sont ensevelis. Les morts eux-mêmes parlent (κείμεθα) et s'adressent au passant, chargé de porter le message : la mémoire du sacrifice passe par la parole des vivants.
2. **L'idéal spartiate** : la sobriété du texte (deux vers, aucune plainte) reflète la « laconie » des Spartiates. Mourir n'est pas présenté comme une défaite mais comme une **obéissance** à la loi de la cité (τοῖς κείνων ῥήμασι πειθόμενοι) : ne pas reculer.
3. **Un symbole méditerranéen** : dans les guerres médiques, ce sacrifice devient l'emblème de la liberté grecque face à l'Empire perse. Hérodote, en recopiant l'épitaphe, en fait un monument de son « enquête » contre l'oubli.
`,
        },
      ],
    },
    {
      id: "participes-genitif-absolu",
      titre: "Le participe et le génitif absolu",
      theme: "Langue : le verbe",
      cours: `
## Le participe, un adjectif verbal
Le participe est à la fois un **verbe** (il a un temps, une voix, il peut avoir des compléments) et un **adjectif** (il se décline et s'accorde en genre, en nombre et en cas avec le mot auquel il se rapporte). C'est l'une des formes les plus fréquentes des textes grecs : savoir le reconnaître et le traduire est indispensable.

## La formation
Le participe se forme sur le **thème** du temps, **sans augment** (l'augment n'existe qu'à l'indicatif).

| Temps et voix | Marque | Masculin | Féminin | Neutre |
|---|---|---|---|---|
| Présent actif | -οντ- | λύων (λύοντος) | λύουσα (λυούσης) | λῦον (λύοντος) |
| Futur actif | -σοντ- | λύσων | λύσουσα | λῦσον |
| Aoriste actif | -σαντ- | λύσας (λύσαντος) | λύσασα (λυσάσης) | λῦσαν (λύσαντος) |
| Présent moyen | -ομεν- | λυόμενος | λυομένη | λυόμενον |
| Futur moyen | -σομεν- | λυσόμενος | λυσομένη | λυσόμενον |
| Aoriste moyen | -σαμεν- | λυσάμενος | λυσαμένη | λυσάμενον |
| εἰμί (présent) | ὀντ- | ὤν (ὄντος) | οὖσα (οὔσης) | ὄν (ὄντος) |

- Le participe présent moyen sert aussi de **passif** : λυόμενος, « qui est délié ».
- Les participes en **-μενος, -μένη, -μενον** se déclinent comme ἀγαθός, ἀγαθή, ἀγαθόν.
- Les **aoristes thématiques** ont un participe accentué sur la finale : λιπών, λιποῦσα, λιπόν (de ἔλιπον) ; de même **εἰπών** (λέγω), **ἰδών** (ὁράω), **ἐλθών** (ἔρχομαι), **λαβών** (λαμβάνω) ; au moyen, l'accent est sur la pénultième : **γενόμενος** (γίγνομαι).
- Ne confonds pas λύσας (participe, sans augment) et ἔλυσας (indicatif aoriste, 2e sg., « tu délias »).

## La déclinaison de λύων, λύουσα, λῦον
Le masculin et le neutre suivent la **3e déclinaison** (thème λυοντ-), le féminin suit la **1re déclinaison**.

| Cas | Masculin | Féminin | Neutre |
|---|---|---|---|
| Nominatif sg. | λύων | λύουσα | λῦον |
| Accusatif sg. | λύοντα | λύουσαν | λῦον |
| Génitif sg. | λύοντος | λυούσης | λύοντος |
| Datif sg. | λύοντι | λυούσῃ | λύοντι |
| Nominatif pl. | λύοντες | λύουσαι | λύοντα |
| Accusatif pl. | λύοντας | λυούσας | λύοντα |
| Génitif pl. | λυόντων | λυουσῶν | λυόντων |
| Datif pl. | λύουσι(ν) | λυούσαις | λύουσι(ν) |

- Le participe de **εἰμί** se décline de la même façon : ὤν, ὄντα, ὄντος, ὄντι ; ὄντες, ὄντας, ὄντων, οὖσι(ν) ; féminin οὖσα, οὖσαν, οὔσης, οὔσῃ…
- L'aoriste λύσας se décline sur le thème λυσαντ- : λύσαντα, λύσαντος, λύσαντι ; λύσαντες, λύσαντας, λυσάντων, λύσασι(ν) ; féminin λύσασα, λυσάσης.
- Piège : le **datif pluriel** λύουσι(ν) a la même forme que la **3e pl. de l'indicatif présent** (« ils délient ») ; seul le contexte tranche.

## La valeur temporelle : un temps relatif
Le temps du participe situe l'action **par rapport au verbe principal** :
- **présent** → action **simultanée** : γράφων, « en écrivant, tandis qu'il écrit » ;
- **aoriste** → action en général **antérieure** : λύσας, « après avoir délié, ayant délié » ;
- **futur** → action **postérieure**, d'où la valeur de **but** : λύσων, « pour délier ».

## Les emplois du participe
### 1. Épithète ou substantivé : avec l'article
Précédé de l'article, le participe fonctionne comme un adjectif épithète ou comme un nom. On le traduit par une **relative** ou par un **nom**.
- ὁ λέγων ἀνήρ ou ὁ ἀνὴρ ὁ λέγων : l'homme **qui parle** ;
- **ὁ λέγων** : **celui qui parle**, l'orateur ;
- οἱ παρόντες (de πάρειμι, être présent) : ceux qui sont là, les personnes présentes ;
- τὰ ὄντα : les choses qui sont, la réalité.

### 2. Apposé : une valeur circonstancielle
Sans article, accordé à un nom ou à un pronom de la phrase (souvent le sujet), le participe équivaut à une **subordonnée circonstancielle**. Le contexte et parfois un **mot d'appui** indiquent la nuance.

| Valeur | Indice | Exemple (phrases d'entraînement) | Traduction |
|---|---|---|---|
| Temps | ordre des actions | ταῦτα εἰπὼν ἀπῆλθεν. | Après avoir dit cela, il s'en alla. |
| Cause | ἅτε (cause réelle), ὡς (cause alléguée) | ὁ παῖς, ἅτε νέος ὤν, οὐκ ἐθέλει μάχεσθαι. | L'enfant, parce qu'il est jeune, ne veut pas combattre. |
| Concession | καίπερ | καίπερ πλούσιος ὤν, οὐκ ἦν εὐδαίμων. | Bien qu'il fût riche, il n'était pas heureux. |
| Condition | négation μή | μὴ μανθάνων οὐκ ἔσῃ σοφός. | Si tu n'apprends pas, tu ne seras pas savant. |
| But | participe **futur** (souvent avec ὡς) | ὁ ἱερεὺς ἦλθε λυσόμενος τὴν θυγατέρα. | Le prêtre vint pour racheter sa fille. |
| Manière | sens du verbe | οἱ παῖδες γράφοντες μανθάνουσιν. | Les enfants apprennent en écrivant. |

### 3. Complétif : après les verbes de perception et de connaissance
Après **ὁρῶ** (je vois), **ἀκούω** (j'entends), **αἰσθάνομαι** (je perçois), **οἶδα** (je sais), **γιγνώσκω** (je reconnais), **ἀγγέλλω** (j'annonce), le participe remplace une proposition complétive. On le traduit par un **infinitif**, une **relative** ou une complétive en « que ».
- ὁρῶ τὸν ἵππον τρέχοντα : je vois le cheval **courir** (qui court) ;
- ἀκούω τοῦ Σωκράτους λέγοντος : j'entends Socrate **parler** (ἀκούω + génitif de la personne qu'on entend) ;
- ἀγγέλλει τοὺς πολεμίους φεύγοντας : il annonce **que les ennemis fuient** ;
- οἶδα θνητὸς ὤν : je sais **que je suis** mortel (le participe est au **nominatif** quand son sujet est celui du verbe principal).

## Le génitif absolu
Le **génitif absolu** est un groupe formé d'un **nom ou pronom au génitif** et d'un **participe au génitif** accordé avec lui. Ce nom est le sujet du participe ; le groupe ne dépend d'aucun autre mot de la phrase et désigne en principe un être **différent** du sujet du verbe principal. Il équivaut à une **subordonnée circonstancielle** (temps, cause, concession, condition).

>! **Comment le reconnaître ?**
>! 1. Tu trouves un participe au génitif accordé avec un nom au génitif.
>! 2. Ce génitif n'est ni complément du nom, ni complément d'un verbe ou d'une préposition.
>! 3. Le groupe est souvent en tête de phrase, isolé par une virgule.

Traduis-le par une **subordonnée** (quand, comme, alors que, parce que, bien que, si) ou par une tournure française équivalente :
- νυκτὸς γενομένης : **la nuit venue**, quand la nuit fut tombée (γενομένης : participe aoriste de γίγνομαι) ;
- Κύρου βασιλεύοντος : **sous le règne de Cyrus**, alors que Cyrus régnait ;
- τοῦ στρατηγοῦ κελεύοντος : **sur l'ordre du général**, parce que le général l'ordonnait.

>! **Exemple résolu** (phrase d'entraînement) : τῶν πολεμίων φευγόντων, ὁ στρατηγὸς τοὺς στρατιώτας ἐκέλευσε τὴν πόλιν φυλάττειν.
>! Verbe principal : ἐκέλευσε (aoriste de κελεύω), sujet ὁ στρατηγός. τῶν πολεμίων φευγόντων : nom + participe présent au génitif pluriel, qui ne dépendent de rien : **génitif absolu**, action simultanée.
>! Traduction : **Comme les ennemis fuyaient, le général ordonna aux soldats de garder la cité.**

>! **Exemple authentique** (Thucydide, I, 1) : Θουκυδίδης Ἀθηναῖος ξυνέγραψε τὸν πόλεμον…, ἀρξάμενος εὐθὺς καθισταμένου καὶ ἐλπίσας μέγαν τε ἔσεσθαι καὶ ἀξιολογώτατον τῶν προγεγενημένων.
>! ἀρξάμενος (aoriste moyen de ἄρχομαι, commencer) et ἐλπίσας (aoriste actif de ἐλπίζω, s'attendre à) sont **apposés** au sujet Θουκυδίδης ; καθισταμένου (participe présent moyen de καθίσταμαι, « s'établir, éclater ») s'analyse comme un **génitif absolu** dont le sujet, τοῦ πολέμου (ou αὐτοῦ), est sous-entendu.
>! Traduction : **Thucydide d'Athènes a raconté la guerre…, s'étant mis au travail dès qu'elle éclata, parce qu'il s'attendait à ce qu'elle soit importante et plus mémorable que toutes celles qui l'avaient précédée.**

## Méthode : traduire un participe
1. **Repère** le participe : -ων / -ουσα / -ον et le thème -οντ-, -σας / -σαντ-, -μενος ; pas d'augment.
2. **Identifie** son temps et sa voix, puis son **cas, genre et nombre**.
3. Cherche le mot avec lequel il **s'accorde** : sujet, complément… ou nom au génitif sans fonction (→ génitif absolu).
4. Regarde s'il a l'**article** (→ relative, « celui qui ») ou non (→ valeur circonstancielle ou complétive).
5. Choisis la **nuance** grâce au sens, aux mots d'appui (ἅτε, ὡς, καίπερ) et à la négation (μή → condition).
6. **Traduis** par une relative, une subordonnée, un gérondif (« en… »), « après avoir… », un infinitif ou un nom, en respectant le rapport de temps.

> **À retenir** : λύων, λύουσα, λῦον (λύοντος, λυούσης) ; λύσας, λύσασα, λῦσαν (λύσαντος) ; λυόμενος, λυσάμενος ; ὤν, οὖσα, ὄν (ὄντος) ; pas d'augment ; présent = simultané, aoriste = antérieur, futur = but ; ὁ λέγων = celui qui parle ; καίπερ = bien que, ἅτε = parce que ; après ὁρῶ, ἀκούω, οἶδα, le participe est complément ; génitif absolu = nom + participe au génitif sans fonction dans la phrase → subordonnée.
`,
      exercices: [
        {
          type: "qcm",
          question: "Identifie la forme **λύσαντος**.",
          choix: ["Participe présent actif, génitif masculin singulier", "Indicatif aoriste, 3e pers. du singulier", "Participe aoriste actif, génitif masculin ou neutre singulier", "Participe futur actif, nominatif masculin singulier"],
          reponse: 2,
          explication: "Thème λυ- + **-σαντ-** (aoriste) + désinence **-ος** du génitif de la 3e déclinaison : participe aoriste actif, génitif masculin ou neutre singulier. Le présent serait λύοντος, l'indicatif aoriste ἔλυσε(ν), le futur λύσων.",
        },
        {
          type: "saisie",
          question: "Donne le **nominatif féminin singulier** du participe présent actif de λύω.",
          reponses: ["λύουσα", "λυουσα"],
          explication: "λύων, **λύουσα**, λῦον. Le féminin se décline sur la 1re déclinaison : λύουσα, λύουσαν, λυούσης, λυούσῃ.",
        },
        {
          type: "vf",
          question: "Le participe aoriste actif de λύω porte l'augment : ἐλύσας.",
          reponse: false,
          explication: "Faux : l'augment n'existe qu'à l'**indicatif**. Le participe aoriste est **λύσας**, λύσασα, λῦσαν. La forme ἔλυσας est l'indicatif aoriste, 2e sg. (« tu délias »).",
        },
        {
          type: "saisie",
          question: "Donne le **génitif masculin pluriel** du participe présent actif de λύω.",
          reponses: ["λυόντων", "λυοντων"],
          explication: "Thème λυοντ- + désinence -ων : **λυόντων**. L'accent passe sur la pénultième parce que la finale -ων est longue.",
        },
        {
          type: "qcm",
          question: "Comment traduire le participe substantivé **ὁ λέγων** ?",
          choix: ["Il parle", "Le discours", "Dire", "Celui qui parle"],
          reponse: 3,
          explication: "Article + participe présent de λέγω : participe substantivé, « **celui qui parle** », l'orateur. « Il parle » serait λέγει, « dire » λέγειν, « le discours » ὁ λόγος.",
        },
        {
          type: "saisie",
          question: "Donne le **nominatif masculin pluriel** du participe présent de εἰμί.",
          reponses: ["ὄντες", "οντες"],
          explication: "ὤν, ὄντος ; pluriel **ὄντες**, ὄντας, ὄντων, οὖσι(ν). Ex. : σοφοὶ ὄντες, « étant savants, parce qu'ils sont savants ».",
        },
        {
          type: "qcm",
          question: "Dans **καίπερ πλούσιος ὤν, οὐκ ἦν εὐδαίμων** (phrase d'entraînement), quelle valeur prend le participe ὤν ?",
          choix: ["Le but", "La concession", "La condition", "La cause"],
          reponse: 1,
          explication: "**καίπερ** + participe exprime la **concession** : « bien qu'il fût riche, il n'était pas heureux ». La cause serait marquée par ἅτε ou ὡς, la condition par la négation μή, le but par un participe futur.",
        },
        {
          type: "saisie",
          question: "À quel **temps** est le participe qui exprime le **but** (souvent précédé de ὡς) ?",
          reponses: ["futur", "participe futur", "au futur"],
          explication: "Le participe **futur** exprime une action postérieure, donc souvent le but : ἦλθε λυσόμενος τὴν θυγατέρα, « il vint **pour racheter** sa fille ».",
        },
        {
          type: "qcm",
          question: "Traduis la phrase d'entraînement : **τοῦ βασιλέως κελεύοντος, οἱ στρατιῶται τὴν πόλιν ἐφύλαττον.**",
          choix: ["Sur l'ordre du roi, les soldats gardaient la cité.", "Les soldats du roi qui commandait gardaient la cité.", "Les soldats ordonnaient au roi de garder la cité.", "Le roi ordonnait de garder la cité des soldats."],
          reponse: 0,
          explication: "τοῦ βασιλέως κελεύοντος : nom + participe présent au génitif, sans fonction dans la phrase : **génitif absolu**, « le roi l'ordonnant », d'où « sur l'ordre du roi ». Sujet du verbe principal ἐφύλαττον (imparfait) : οἱ στρατιῶται ; COD : τὴν πόλιν. τοῦ βασιλέως n'est pas complément de οἱ στρατιῶται : le génitif absolu ne dépend d'aucun mot.",
        },
        {
          type: "redaction",
          question: "Analyse les participes puis traduis ces phrases d'entraînement : 1) **ὁ στρατηγὸς ταῦτα εἰπὼν ἀπῆλθεν.** 2) **νυκτὸς γενομένης, οἱ πολέμιοι ἔφυγον.** 3) **οἱ Ἀθηναῖοι πρέσβεις ἔπεμψαν τοὺς αἰχμαλώτους λυσομένους.** 4) **ὁρῶ τοὺς παῖδας ἐν τῷ ἀγρῷ τρέχοντας.** (ταῦτα : cela ; ἀπέρχομαι, aor. ἀπῆλθον : s'en aller ; ἡ νύξ, νυκτός : la nuit ; γίγνομαι, aor. ἐγενόμην : devenir, survenir ; οἱ πρέσβεις : les ambassadeurs ; ὁ αἰχμάλωτος : le prisonnier ; ὁρῶ : je vois ; τρέχω : courir)",
          corrige: `
**1)** εἰπών : participe **aoriste** actif de λέγω (aoriste thématique εἶπον), nominatif masculin singulier, **apposé** au sujet ὁ στρατηγός ; ταῦτα est son COD. L'aoriste marque l'**antériorité** : valeur temporelle. ἀπῆλθεν : aoriste de ἀπέρχομαι, 3e sg.
Traduction : **Après avoir dit cela, le général s'en alla** (ou : ayant dit cela, le général partit).

**2)** γενομένης : participe aoriste de γίγνομαι, génitif féminin singulier, accordé avec νυκτός (génitif de ἡ νύξ). Ce groupe ne dépend d'aucun mot de la phrase : c'est un **génitif absolu**, à valeur temporelle. Verbe principal : ἔφυγον (aoriste thématique de φεύγω), sujet οἱ πολέμιοι.
Traduction : **La nuit venue, les ennemis s'enfuirent** (ou : quand la nuit fut tombée, les ennemis prirent la fuite).

**3)** λυσομένους : participe **futur moyen** de λύω, accusatif masculin pluriel, accordé avec πρέσβεις (COD de ἔπεμψαν, aoriste de πέμπω). Le futur exprime le **but** ; le moyen, l'intérêt du sujet : « délier pour soi », c'est **racheter**. τοὺς αἰχμαλώτους est le COD du participe.
Traduction : **Les Athéniens envoyèrent des ambassadeurs pour racheter les prisonniers.**

**4)** τρέχοντας : participe présent actif de τρέχω, accusatif masculin pluriel, accordé avec τοὺς παῖδας. Après le verbe de perception ὁρῶ, c'est un participe **complétif** : on le traduit par un infinitif ou une relative.
Traduction : **Je vois les enfants courir dans le champ** (ou : je vois les enfants qui courent dans le champ).

>! Méthode : pour chaque participe, cherche le mot avec lequel il s'accorde. S'il s'accorde avec un sujet ou un complément, c'est un participe apposé ou complétif ; s'il forme avec un nom un groupe au génitif sans fonction, c'est un génitif absolu. Puis respecte le rapport de temps : présent = simultané, aoriste = antérieur, futur = but.
`,
        },
      ],
    },
    {
      id: "verbes-contractes",
      titre: "Les verbes contractes",
      theme: "Langue : le verbe",
      cours: `
## Le principe de la contraction
Beaucoup de verbes très courants ont un radical terminé par une voyelle **α**, **ε** ou **ο** : τιμά-ω (honorer), ποιέ-ω (faire), δηλό-ω (montrer). Au **thème du présent** (présent, imparfait, infinitif et participe présents), cette voyelle se **contracte** avec la voyelle de la désinence : τιμά-ω → **τιμῶ**, ποιέ-ει → **ποιεῖ**, δηλό-ομεν → **δηλοῦμεν**.

- Le dictionnaire donne la **forme non contractée** : tu cherches ποιεῖ à **ποιέω** (le Bailly écrit « ποιέω-ῶ »).
- La contraction ne concerne **que le thème du présent** : au futur et à l'aoriste, la voyelle s'allonge devant le σ (voir plus bas).
- **Accent** : si l'accent portait sur la première des deux voyelles, la contraction porte un **circonflexe** (τιμά-ω → τιμῶ) ; si aucune des deux n'était accentuée, la voyelle contractée n'a pas d'accent (ἐτίμα-ον → ἐτίμων).

## Les règles de contraction
### Verbes en -άω
| Rencontre | Résultat | Exemple |
|---|---|---|
| α + ε, α + η | ᾱ (long) | τιμά-ετε → τιμᾶτε |
| α + ει, α + ῃ | ᾳ | τιμά-εις → τιμᾷς ; τιμά-ει → τιμᾷ |
| α + ο, α + ω, α + ου | ω | τιμά-ομεν → τιμῶμεν ; τιμά-ουσι → τιμῶσι |
| α + οι | ῳ | (formes hors de l'indicatif) |

Retiens : α + un son **e** → α ; α + un son **o** → ω ; le iota d'une diphtongue se retrouve **souscrit**.

### Verbes en -έω
| Rencontre | Résultat | Exemple |
|---|---|---|
| ε + ε | ει | ποιέ-ετε → ποιεῖτε |
| ε + ο | ου | ποιέ-ομεν → ποιοῦμεν |
| ε + voyelle longue ou diphtongue | ε disparaît | ποιέ-ω → ποιῶ ; ποιέ-εις → ποιεῖς ; ποιέ-ουσι → ποιοῦσι |

### Verbes en -όω
| Rencontre | Résultat | Exemple |
|---|---|---|
| ο + ε, ο + ο, ο + ου | ου | δηλό-ετε → δηλοῦτε ; δηλό-ομεν → δηλοῦμεν ; δηλό-ουσι → δηλοῦσι |
| ο + ει, ο + οι, ο + ῃ | οι | δηλό-εις → δηλοῖς ; δηλό-ει → δηλοῖ |
| ο + η, ο + ω | ω | δηλό-ω → δηλῶ |

**Exception des infinitifs** : τιμᾶν, ποιεῖν, δηλοῦν (sans iota souscrit pour τιμᾶν, et οῦ et non οῖ pour δηλοῦν), car la désinence -ειν vient d'un ancien -εεν.

## Le présent de l'indicatif actif
| Personne | τιμάω (honorer) | ποιέω (faire) | δηλόω (montrer) |
|---|---|---|---|
| 1re sg. | τιμῶ | ποιῶ | δηλῶ |
| 2e sg. | τιμᾷς | ποιεῖς | δηλοῖς |
| 3e sg. | τιμᾷ | ποιεῖ | δηλοῖ |
| 1re pl. | τιμῶμεν | ποιοῦμεν | δηλοῦμεν |
| 2e pl. | τιμᾶτε | ποιεῖτε | δηλοῦτε |
| 3e pl. | τιμῶσι(ν) | ποιοῦσι(ν) | δηλοῦσι(ν) |
| Infinitif | τιμᾶν | ποιεῖν | δηλοῦν |
| Participe | τιμῶν, τιμῶσα, τιμῶν | ποιῶν, ποιοῦσα, ποιοῦν | δηλῶν, δηλοῦσα, δηλοῦν |

Les participes se déclinent comme λύων : génitif τιμῶντος, ποιοῦντος, δηλοῦντος.

## L'imparfait de l'indicatif actif
| Personne | τιμάω | ποιέω | δηλόω |
|---|---|---|---|
| 1re sg. | ἐτίμων | ἐποίουν | ἐδήλουν |
| 2e sg. | ἐτίμας | ἐποίεις | ἐδήλους |
| 3e sg. | ἐτίμα | ἐποίει | ἐδήλου |
| 1re pl. | ἐτιμῶμεν | ἐποιοῦμεν | ἐδηλοῦμεν |
| 2e pl. | ἐτιμᾶτε | ἐποιεῖτε | ἐδηλοῦτε |
| 3e pl. | ἐτίμων | ἐποίουν | ἐδήλουν |

Comme pour ἔλυον, la **1re sg.** et la **3e pl.** sont identiques (ἐτίμων, ἐποίουν, ἐδήλουν). Les règles de l'augment s'appliquent normalement : αἰτέω → **ᾔτουν** ; οἰκέω → **ᾤκουν** ; ἐρωτάω → **ἠρώτων**.

Au moyen, les mêmes règles valent : ποιέ-ομαι → ποιοῦμαι, ποιέ-εται → ποιεῖται, ποιέ-εσθαι → ποιεῖσθαι ; de même ἡγοῦμαι (je pense, je conduis), φοβοῦμαι (je crains), τιμᾶται (il est honoré).

## Des formes très fréquentes
| Forme | Analyse | Traduction |
|---|---|---|
| ὁρῶ, ὁρᾷς, ὁρᾷ | ὁράω, présent, 1re, 2e, 3e sg. | je vois, tu vois, il voit |
| ἑώρων | ὁράω, imparfait (double augment), 1re sg. ou 3e pl. | je voyais, ils voyaient |
| ποιεῖ, ποιοῦσι(ν) | ποιέω, présent, 3e sg., 3e pl. | il fait, ils font |
| ᾔτουν | αἰτέω, imparfait (αι → ῃ), 1re sg. ou 3e pl. | je demandais, ils demandaient |
| ἐνίκων | νικάω, imparfait, 1re sg. ou 3e pl. | je vainquais, ils étaient vainqueurs |
| φιλεῖ, καλεῖ | φιλέω, καλέω, présent, 3e sg. | il aime, il appelle |
| δοκεῖ | δοκέω, présent, 3e sg. | il semble ; il semble bon, on décide |

Cas particulier : **ζάω** (vivre) contracte α + ε en **η** : ζῶ, ζῇς, ζῇ, ζῶμεν, ζῆτε, ζῶσι(ν) ; infinitif **ζῆν**.

## Le futur et l'aoriste : l'allongement
Hors du thème du présent, il n'y a **pas de contraction** : la voyelle du radical **s'allonge** devant le σ.
- α → **η** (mais **ᾱ** après ε, ι, ρ : θεάομαι → θεάσομαι ; δράω → δράσω) ;
- ε → **η** ;
- ο → **ω**.

| Présent | Futur | Aoriste | Infinitif aoriste |
|---|---|---|---|
| τιμάω | τιμήσω | ἐτίμησα | τιμῆσαι |
| νικάω | νικήσω | ἐνίκησα | νικῆσαι |
| ποιέω | ποιήσω | ἐποίησα | ποιῆσαι |
| αἰτέω | αἰτήσω | ᾔτησα | αἰτῆσαι |
| δηλόω | δηλώσω | ἐδήλωσα | δηλῶσαι |
| ἐλευθερόω | ἐλευθερώσω | ἠλευθέρωσα | ἐλευθερῶσαι |

Ces formes se conjuguent ensuite exactement comme λύσω et ἔλυσα. Quelques verbes n'allongent pas : καλέω (aoriste ἐκάλεσα, futur attique καλῶ), τελέω (ἐτέλεσα).

## Repérer un verbe contracte et le chercher au dictionnaire
- **Indices** : un **circonflexe** sur la terminaison (ποιεῖ, τιμῶσι, δηλοῦμεν, à comparer avec λύει, λύουσι, λύομεν), des finales inhabituelles (-ᾷς, -οῖ, -οῦτε), un imparfait en -ων ou -ουν.
- **Retrouver l'entrée** : remplace la terminaison contractée par -άω, -έω ou -όω.

| Terminaison contractée | Verbe en |
|---|---|
| -ᾷς, -ᾷ, -ᾶτε, -ῶμεν, -ῶσι, -ᾶν ; imparfait -ων, -ας, -α | -άω |
| -εῖς, -εῖ, -εῖτε, -εῖν ; imparfait -εις, -ει | -έω |
| -οῖς, -οῖ, -οῦτε, infinitif -οῦν ; imparfait -ους, -ου | -όω |
| -οῦμεν, -οῦσι ; imparfait -ουν | -έω ou -όω : essaie les deux |
| -ῶ | -άω, -έω ou -όω : essaie les trois |
| futur ou aoriste en -ησ- / -ωσ- | -άω ou -έω / -όω |

>! **Exemple résolu** : ἐποιοῦμεν.
>! Augment ἐ- → passé ; terminaison -οῦμεν → verbe en -έω ou -όω. Le dictionnaire donne ποιέω (ποιόω n'existe pas). ποιέ-ομεν → ποιοῦμεν : **imparfait, 1re pl.**, « nous faisions ».

>! **Exemple résolu** : ἐνίκησαν.
>! Augment ἐ- + νικ- + η allongé + σα + ν : aoriste, 3e pl. ; η devant σ vient de α ou ε : on trouve **νικάω** (vaincre). « Ils vainquirent, ils ont remporté la victoire. »

## Vocabulaire
τιμάω : honorer · νικάω : vaincre · ὁράω : voir · ἐρωτάω : interroger · τολμάω : oser · ποιέω : faire · φιλέω : aimer · καλέω : appeler · οἰκέω : habiter · ζητέω : chercher · αἰτέω : demander · ἀδικέω : commettre une injustice · δηλόω : montrer · ἀξιόω : juger digne · ἐλευθερόω : libérer · δουλόω : asservir.

> **À retenir** : contraction au thème du présent seulement ; α + e → α, α + o → ω ; ε + ε → ει, ε + ο → ου ; ο + ε/ο → ου, ο + ει → οι ; τιμῶ, τιμᾷς, τιμᾷ, τιμῶμεν, τιμᾶτε, τιμῶσι ; ποιῶ, ποιεῖς, ποιεῖ, ποιοῦμεν, ποιεῖτε, ποιοῦσι ; δηλῶ, δηλοῖς, δηλοῖ, δηλοῦμεν, δηλοῦτε, δηλοῦσι ; infinitifs τιμᾶν, ποιεῖν, δηλοῦν ; futur et aoriste avec allongement : τιμήσω, ἐποίησα, ἐδήλωσα ; au dictionnaire, forme non contractée (ποιέω).
`,
      exercices: [
        {
          type: "qcm",
          question: "Dans un verbe en -άω, que donne la rencontre **α + ει** ?",
          choix: ["α", "ει", "ᾳ", "η"],
          reponse: 2,
          explication: "α + ει → **ᾳ** (le iota se retrouve souscrit) : τιμά-εις → τιμᾷς, τιμά-ει → τιμᾷ. Seul l'infinitif fait exception : τιμᾶν, sans iota.",
        },
        {
          type: "saisie",
          question: "Donne la **3e personne du singulier** du présent de l'indicatif actif de ποιέω.",
          reponses: ["ποιεῖ", "ποιει"],
          explication: "ποιέ-ει → **ποιεῖ**, « il fait » : ε + ει → ει, avec un circonflexe car l'accent portait sur le ε.",
        },
        {
          type: "saisie",
          question: "Donne la **2e personne du singulier** du présent de l'indicatif actif de ὁράω (voir).",
          reponses: ["ὁρᾷς", "ορας"],
          explication: "ὁρά-εις → **ὁρᾷς**, « tu vois » : α + ει → ᾳ. N'oublie pas le iota souscrit.",
        },
        {
          type: "vf",
          question: "Pour comprendre la forme ποιεῖ, on cherche dans le dictionnaire l'entrée ποιῶ.",
          reponse: false,
          explication: "Faux : le dictionnaire donne la **forme non contractée**, **ποιέω** (le Bailly écrit « ποιέω-ῶ » pour signaler la contraction).",
        },
        {
          type: "qcm",
          question: "Identifie la forme **ᾔτουν**.",
          choix: ["Présent de αἰτέω, 1re pers. du singulier", "Aoriste de αἰτέω, 3e pers. du pluriel", "Imparfait de ἀτιμάω, 3e pers. du pluriel", "Imparfait de αἰτέω, 1re pers. du sing. ou 3e pers. du pluriel"],
          reponse: 3,
          explication: "Augment temporel αι → ῃ, puis ε + ο → ου : ᾔτε-ον → **ᾔτουν**, imparfait de αἰτέω (demander), « je demandais » ou « ils demandaient ». Le présent est αἰτῶ, l'aoriste ᾔτησαν (avec allongement et σ).",
        },
        {
          type: "saisie",
          question: "Donne l'**infinitif présent actif** de τιμάω.",
          reponses: ["τιμᾶν", "τιμαν"],
          explication: "**τιμᾶν** : c'est l'exception des infinitifs. La désinence -ειν vient d'un ancien -εεν, d'où α + ε → ᾱ, **sans iota souscrit**.",
        },
        {
          type: "saisie",
          question: "Donne la **1re personne du singulier du futur** de ποιέω.",
          reponses: ["ποιήσω", "ποιησω"],
          explication: "Pas de contraction au futur : le ε s'allonge en η devant le σ : **ποιήσω**, « je ferai ». Aoriste : ἐποίησα.",
        },
        {
          type: "qcm",
          question: "Identifie la forme **ἐδήλου**.",
          choix: ["Imparfait de δηλόω, 3e pers. du singulier", "Présent de δηλόω, 3e pers. du singulier", "Imparfait de δηλόω, 1re pers. du singulier", "Aoriste de δηλόω, 3e pers. du singulier"],
          reponse: 0,
          explication: "Augment ἐ- + δηλο- + -ε : ο + ε → ου, donc **ἐδήλου**, « il montrait ». Le présent serait δηλοῖ, la 1re sg. de l'imparfait ἐδήλουν, l'aoriste ἐδήλωσε(ν).",
        },
        {
          type: "saisie",
          question: "Sous quelle forme cherches-tu **νικῶσι** dans le dictionnaire ?",
          reponses: ["νικάω", "νικαω"],
          explication: "La terminaison -ῶσι vient de α + ουσι (un verbe en -έω donnerait -οῦσι) : l'entrée est **νικάω**, « vaincre ». νικῶσι = « ils vainquent ».",
        },
        {
          type: "redaction",
          question: "Analyse les verbes puis traduis ces phrases d'entraînement : 1) **οἱ Ἀθηναῖοι τοὺς θεοὺς τιμῶσιν.** 2) **τί ποιεῖς, ὦ παῖ;** 3) **οἱ στρατιῶται τὸν στρατηγὸν χρήματα ᾔτουν.** 4) **ὁ ἄγγελος τὴν νίκην ἐδήλου.** 5) **οἱ Ἕλληνες τοὺς Πέρσας ἐνίκησαν.** (τί : quoi ? ; τὰ χρήματα : l'argent ; αἰτέω + deux accusatifs : demander quelque chose à quelqu'un ; ὁ ἄγγελος : le messager ; ἡ νίκη : la victoire ; οἱ Πέρσαι : les Perses)",
          corrige: `
**1)** τιμῶσιν : terminaison -ῶσι → verbe en -άω : **τιμάω**, présent, 3e pl. (τιμά-ουσι → τιμῶσι, α + ου → ω). Sujet οἱ Ἀθηναῖοι, COD τοὺς θεούς.
Traduction : **Les Athéniens honorent les dieux.**

**2)** ποιεῖς : terminaison -εῖς → verbe en -έω : **ποιέω**, présent, 2e sg. (ποιέ-εις → ποιεῖς). ὦ παῖ : vocatif de ὁ παῖς ; τί : pronom interrogatif, COD ; « ; » est le point d'interrogation grec.
Traduction : **Que fais-tu, enfant ?**

**3)** ᾔτουν : augment αι → ῃ, ε + ο → ου : imparfait de **αἰτέω**. Le sujet pluriel οἱ στρατιῶται impose la 3e pl. (et non la 1re sg.). Les deux accusatifs : τὸν στρατηγόν (la personne à qui l'on demande) et χρήματα (la chose demandée).
Traduction : **Les soldats demandaient de l'argent au général.**

**4)** ἐδήλου : augment ἐ-, ο + ε → ου : imparfait de **δηλόω**, 3e sg. Sujet ὁ ἄγγελος, COD τὴν νίκην.
Traduction : **Le messager annonçait (faisait connaître) la victoire.**

**5)** ἐνίκησαν : augment ἐ- + νικ- + **η** (α allongé devant σ) + -σαν : **aoriste** de νικάω, 3e pl. Pas de contraction hors du thème du présent. Sujet οἱ Ἕλληνες, COD τοὺς Πέρσας.
Traduction : **Les Grecs vainquirent (ont vaincu) les Perses.**

>! Méthode : un circonflexe ou une finale inhabituelle sur la terminaison signale un verbe contracte. Décontracte (ποιεῖς → ποιέ-εις), retrouve l'entrée du dictionnaire (ποιέω), puis analyse comme pour λύω. Au futur et à l'aoriste, cherche la voyelle longue (η, ω) devant le σ.
`,
        },
      ],
    },
  ],
};
