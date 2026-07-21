/*
  Fichier de données local pour Portail Lycée.
  Ce fichier est chargé directement en JavaScript (pas en fetch JSON) pour
  fonctionner même en ouvrant la page en local, sans connexion internet.

  Chaque thème contient un champ "cours" : un vrai texte de synthèse
  rédigé (plusieurs paragraphes), pensé pour se suffire à lui-même sans
  dépendre d'une source en ligne.

  Pour enrichir le contenu : ajoute simplement de nouveaux objets dans
  "themes" pour une matière existante, ou une nouvelle matière dans le
  tableau LYCEE_DATA.matieres, en suivant la même structure.
*/

const LYCEE_DATA = {
  matieres: [
    {
      nom: "Français",
      icone: "book",
      themes: [
        {
          titre: "Le roman et ses personnages",
          niveaux: "Seconde, Première",
          resume: "Étude du roman comme genre littéraire à travers l'analyse des personnages, de leur construction et de leur évolution. Ce thème couvre les principaux mouvements narratifs (réalisme, naturalisme, roman du XXe siècle) et les techniques de caractérisation.",
          cours: "Le roman s'impose au XIXe siècle comme le genre littéraire dominant, capable de représenter la société dans toute sa complexité. Le personnage de roman n'est jamais un simple protagoniste : il est construit par l'auteur à travers un ensemble de procédés (portrait physique et moral, actions, paroles rapportées, regard des autres personnages) qui permettent au lecteur de se forger une image cohérente, tout en laissant une part d'interprétation.\n\nLe réalisme, porté par des auteurs comme Balzac ou Flaubert, cherche à donner l'illusion du vrai en ancrant les personnages dans un contexte social précis et documenté. Le naturalisme, avec Zola, pousse cette logique plus loin en s'inspirant des sciences pour expliquer les comportements humains par l'hérédité et le milieu social. Au XXe siècle, le roman évolue vers une remise en question de ces certitudes : le personnage devient plus fragmenté, plus intérieur, notamment sous l'influence du courant existentialiste (Camus, Sartre).\n\nLe choix du point de vue narratif (interne, externe, omniscient) conditionne fortement la manière dont le lecteur perçoit un personnage. Pour l'épreuve, il est essentiel de savoir repérer les indices de caractérisation d'un personnage dans un extrait, d'identifier le point de vue adopté, et de mettre ces choix en relation avec l'intention de l'auteur.",
          notionsCles: ["Narrateur et point de vue", "Personnage principal et secondaire", "Portrait physique et moral", "Registre réaliste", "Roman d'apprentissage"],
          objectifs: ["Analyser la construction d'un personnage", "Distinguer les points de vue narratifs", "Situer une œuvre dans son contexte littéraire"],
          exemples: "Œuvres de référence : Madame Bovary (Flaubert), Le Rouge et le Noir (Stendhal), L'Étranger (Camus)."
        },
        {
          titre: "La poésie du XIXe au XXIe siècle",
          niveaux: "Première",
          resume: "Parcours des grands mouvements poétiques (romantisme, symbolisme, surréalisme, poésie contemporaine), avec une attention portée aux formes fixes et à la versification, ainsi qu'à l'évolution vers le vers libre.",
          cours: "La poésie du XIXe siècle s'ouvre avec le romantisme, qui place l'expression des sentiments personnels et de la nature au centre de l'écriture (Lamartine, Hugo), en restant fidèle aux formes classiques (alexandrins, rimes régulières).\n\nAvec Baudelaire puis les symbolistes (Verlaine, Mallarmé), la poésie ne cherche plus seulement à décrire ou exprimer, mais à suggérer, à faire naître des correspondances entre les sensations. Rimbaud pousse la rupture plus loin en expérimentant le vers libre et le poème en prose, ouvrant la voie au XXe siècle. Le surréalisme (Breton, Éluard) explore l'écriture automatique pour libérer l'inconscient, tandis qu'Apollinaire joue avec la disposition typographique (calligrammes).\n\nPour analyser un poème, il faut identifier sa forme (fixe ou libre), ses figures de style dominantes, et relier ces choix formels au sens et à l'émotion que le poète cherche à transmettre. La poésie engagée (Éluard pendant la Résistance) montre que la forme poétique peut devenir un instrument politique.",
          notionsCles: ["Vers, rime, strophe", "Figures de style", "Symbolisme", "Vers libre", "Poésie engagée"],
          objectifs: ["Identifier les procédés poétiques", "Analyser le rapport entre forme et sens", "Comprendre l'évolution des formes poétiques"],
          exemples: "Auteurs de référence : Baudelaire, Rimbaud, Apollinaire, Éluard."
        },
        {
          titre: "Théâtre et représentation",
          niveaux: "Seconde, Première",
          resume: "Étude du texte théâtral dans sa double dimension : texte à lire et texte à jouer. Analyse des genres (tragédie, comédie, drame) et des enjeux de mise en scène.",
          cours: "Le texte théâtral a la particularité d'être écrit pour être joué : il ne prend son sens complet que représenté sur scène. Les didascalies donnent des informations sur le jeu et le ton, mais laissent toujours une large place à l'interprétation du metteur en scène.\n\nLa tragédie classique (Racine, Corneille) obéit à des règles strictes héritées de l'Antiquité (unité de temps, de lieu, d'action), avec des personnages nobles confrontés à un destin qui les dépasse. La comédie met en scène des travers humains dans un cadre plus quotidien, souvent pour faire rire tout en critiquant la société, comme chez Molière.\n\nLe théâtre du XXe siècle bouscule ces catégories : le théâtre de l'absurde (Ionesco, Beckett) déconstruit le langage et la logique du dialogue pour donner à voir l'absurdité de la condition humaine, mélangeant tragique et comique. À l'examen, il faut savoir analyser un extrait en tenant compte à la fois du texte et de sa dimension spectaculaire potentielle.",
          notionsCles: ["Didascalies", "Quiproquo", "Tragique et comique", "Unités classiques", "Mise en scène"],
          objectifs: ["Analyser un texte théâtral en tenant compte de sa représentation", "Distinguer les registres tragique et comique"],
          exemples: "Œuvres de référence : Le Malade imaginaire (Molière), Rhinocéros (Ionesco)."
        },
        {
          titre: "L'argumentation et l'essai",
          niveaux: "Première, Terminale",
          resume: "Étude des textes argumentatifs et de l'essai comme genre permettant de défendre une thèse. Travail sur les stratégies argumentatives directes et indirectes (fable, dialogue philosophique, conte).",
          cours: "L'argumentation vise à convaincre ou persuader un destinataire d'adopter un point de vue. On distingue l'argumentation directe, où l'auteur expose lui-même sa thèse (l'essai, chez Montaigne), de l'argumentation indirecte, qui passe par la fiction pour faire réfléchir le lecteur sans jamais énoncer explicitement une conclusion (la fable, le conte philosophique).\n\nMontaigne, dans les Essais, mêle réflexion personnelle et culture générale sans imposer une vérité unique. Voltaire, dans Candide, utilise le conte philosophique pour ridiculiser une thèse à travers les mésaventures absurdes de son héros — un exemple typique d'argumentation indirecte utilisant l'ironie. Les Lettres persanes de Montesquieu jouent sur un regard extérieur pour critiquer la société française sans attaque frontale.\n\nPour réussir un commentaire sur ce thème, il faut repérer la thèse défendue, la distinguer des arguments et exemples, et être attentif aux effets de style qui servent souvent la stratégie argumentative plus efficacement qu'une affirmation directe.",
          notionsCles: ["Thèse, argument, exemple", "Argumentation directe/indirecte", "Ironie", "Rhétorique"],
          objectifs: ["Identifier une thèse et sa structure argumentative", "Rédiger un texte argumentatif structuré"],
          exemples: "Œuvres de référence : Essais (Montaigne), Candide (Voltaire), Lettres persanes (Montesquieu)."
        }
      ]
    },
    {
      nom: "Mathématiques",
      icone: "math",
      themes: [
        {
          titre: "Fonctions et étude de fonctions",
          niveaux: "Seconde, Première, Terminale",
          resume: "Étude des fonctions usuelles (affines, polynômes, exponentielle, logarithme), de leurs variations, et introduction progressive du calcul différentiel (dérivation) pour étudier leur comportement.",
          cours: "Une fonction associe à chaque nombre d'un ensemble de départ un unique nombre d'arrivée. L'étude d'une fonction commence par son ensemble de définition, puis ses variations : croissante si elle conserve l'ordre des nombres, décroissante si elle l'inverse.\n\nLa dérivée d'une fonction en un point mesure la pente de la tangente à sa courbe en ce point. Le signe de la dérivée permet de déterminer les variations : positive pour une fonction croissante, négative pour une décroissante, nulle en général à un extremum.\n\nLa fonction exponentielle a la particularité d'être sa propre dérivée ; elle modélise les phénomènes de croissance ou décroissance proportionnelle à la quantité présente. Sa réciproque, le logarithme népérien, transforme les produits en sommes, un outil précieux pour résoudre des équations exponentielles.\n\nEn terminale, l'étude se prolonge vers le calcul intégral (calculer une aire sous une courbe) et l'étude de limites, essentielle pour comprendre le comportement d'une fonction aux bornes de son ensemble de définition.",
          notionsCles: ["Fonction affine et polynôme", "Dérivée et tangente", "Fonction exponentielle", "Fonction logarithme", "Étude de variations"],
          objectifs: ["Étudier les variations d'une fonction", "Utiliser la dérivation pour optimiser", "Résoudre des équations et inéquations"],
          exemples: "Applications en physique (cinématique), en économie (coûts, bénéfices)."
        },
        {
          titre: "Probabilités et statistiques",
          niveaux: "Seconde, Première, Terminale",
          resume: "Introduction aux probabilités (expériences aléatoires, variables aléatoires, lois de probabilité) et aux statistiques descriptives et inférentielles, avec un aboutissement vers la loi binomiale et la loi normale en terminale.",
          cours: "Une expérience aléatoire est une expérience dont on ne peut pas prévoir le résultat avec certitude, mais dont on connaît l'ensemble des issues possibles. Une variable aléatoire associe un nombre à chaque issue, ce qui permet de calculer l'espérance (la moyenne théorique attendue) et la variance (la dispersion autour de cette moyenne).\n\nLa loi binomiale modélise une répétition d'expériences identiques et indépendantes à deux issues (succès ou échec), comme le nombre de piles obtenus en lançant une pièce plusieurs fois. Lorsque le nombre de répétitions devient très grand, elle peut être approchée par la loi normale, une loi continue en forme de cloche.\n\nLa loi normale permet de construire des intervalles de confiance : des fourchettes de valeurs dans lesquelles on estime qu'une proportion inconnue a de fortes chances de se trouver, à partir d'un échantillon. Ces outils sont au cœur des sondages : on interroge un échantillon pour estimer une proportion dans la population entière, avec une marge d'erreur quantifiable.",
          notionsCles: ["Variable aléatoire", "Espérance et variance", "Loi binomiale", "Loi normale", "Échantillonnage"],
          objectifs: ["Modéliser une expérience aléatoire", "Calculer une espérance ou une probabilité", "Interpréter un intervalle de confiance"],
          exemples: "Applications : sondages, contrôle qualité, jeux de hasard."
        },
        {
          titre: "Géométrie dans le plan et l'espace",
          niveaux: "Seconde, Première",
          resume: "Étude de la géométrie repérée (vecteurs, produit scalaire, équations de droites et de cercles) puis extension à la géométrie dans l'espace en première.",
          cours: "Un vecteur est défini par une direction, un sens et une longueur (sa norme) ; il décrit un déplacement dans le plan indépendamment du point de départ. L'addition de vecteurs et la colinéarité permettent de démontrer des propriétés géométriques (alignement, parallélisme) sans recourir à des figures.\n\nLe produit scalaire de deux vecteurs combine leurs normes et l'angle qu'ils forment ; il est nul lorsque les deux vecteurs sont orthogonaux, un outil puissant pour démontrer des perpendicularités ou calculer des angles et longueurs.\n\nDans un repère, toute droite peut être caractérisée par une équation cartésienne, et tout cercle par une équation reliant les coordonnées de ses points à son centre et son rayon — une approche algébrique pour résoudre des problèmes de géométrie par le calcul. En première, cette approche s'étend à l'espace à trois dimensions.",
          notionsCles: ["Vecteurs", "Produit scalaire", "Équation de droite/cercle", "Géométrie dans l'espace", "Configurations classiques"],
          objectifs: ["Utiliser les vecteurs pour démontrer", "Déterminer une équation de droite ou de cercle"],
          exemples: "Applications en physique (forces, déplacements) et en informatique (graphisme)."
        },
        {
          titre: "Suites numériques",
          niveaux: "Première, Terminale",
          resume: "Étude des suites arithmétiques et géométriques, de leur comportement (convergence, limite), avec des applications aux problèmes de croissance et de modélisation.",
          cours: "Une suite numérique est une liste ordonnée de nombres, indexée par des entiers naturels. Une suite arithmétique évolue en ajoutant systématiquement une même quantité (la raison) d'un terme à l'autre ; une suite géométrique évolue en multipliant systématiquement par une même quantité, produisant une évolution exponentielle.\n\nLe raisonnement par récurrence permet de démontrer qu'une propriété est vraie pour tous les termes d'une suite : on montre qu'elle est vraie au premier rang, puis que si elle est vraie à un rang donné, elle l'est aussi au rang suivant.\n\nL'étude de la limite d'une suite consiste à déterminer son comportement lorsque l'indice devient très grand : convergence vers une valeur finie, divergence vers l'infini, ou absence de limite. Ces outils s'appliquent concrètement : le calcul d'intérêts composés suit une suite géométrique, tandis que l'évolution d'une population avec un taux de croissance constant peut être modélisée de la même manière.",
          notionsCles: ["Suite arithmétique", "Suite géométrique", "Raisonnement par récurrence", "Limite d'une suite"],
          objectifs: ["Déterminer la nature d'une suite", "Calculer une somme de termes", "Étudier la convergence d'une suite"],
          exemples: "Applications : intérêts composés, croissance de populations."
        }
      ]
    },
    {
      nom: "Histoire-Géographie",
      icone: "history",
      themes: [
        {
          titre: "La Première Guerre mondiale",
          niveaux: "Première",
          resume: "Étude des causes, du déroulement et des conséquences du premier conflit mondial (1914-1918), avec un accent sur la guerre totale, l'expérience combattante et les bouleversements géopolitiques qui en découlent.",
          cours: "La Première Guerre mondiale éclate en 1914 sur fond de rivalités impérialistes et d'un système d'alliances complexe entre grandes puissances européennes. L'attentat de Sarajevo sert de déclencheur à un engrenage d'alliances qui transforme un conflit régional en guerre mondiale.\n\nLe conflit se caractérise par la notion de guerre totale : l'ensemble des sociétés est mobilisé pour l'effort de guerre. Sur le front, la guerre de tranchées impose des conditions extrêmes, illustrées par des batailles comme celle de Verdun en 1916. Le conflit s'accompagne aussi de violences extrêmes contre les civils, notamment le génocide arménien à partir de 1915.\n\nL'armistice de 1918 met fin aux combats, mais c'est le traité de Versailles en 1919 qui redessine la carte de l'Europe et impose de lourdes réparations à l'Allemagne — des conséquences économiques et un ressentiment qui nourriront la montée des totalitarismes deux décennies plus tard.",
          notionsCles: ["Guerre totale", "Tranchées", "Traité de Versailles", "Mobilisation industrielle", "Génocide arménien"],
          objectifs: ["Expliquer les causes du conflit", "Analyser les conséquences politiques et territoriales", "Comprendre la notion de guerre totale"],
          exemples: "Dates clés : attentat de Sarajevo (1914), bataille de Verdun (1916), armistice (1918)."
        },
        {
          titre: "La Seconde Guerre mondiale et la Shoah",
          niveaux: "Première, Terminale",
          resume: "Étude du second conflit mondial, de ses causes (montée des totalitarismes), de son déroulement et de la Shoah, ainsi que de ses conséquences géopolitiques (Guerre froide, ONU).",
          cours: "La Seconde Guerre mondiale trouve ses racines dans la crise économique des années 1930 et la montée des régimes totalitaires, en particulier le nazisme, qui repose sur une idéologie raciste et expansionniste. L'invasion de la Pologne en septembre 1939 déclenche le conflit, qui s'étend rapidement à l'échelle mondiale.\n\nLe régime nazi met en œuvre à partir de 1941-1942 un projet d'extermination systématique des Juifs d'Europe, la Shoah, qui cause la mort d'environ six millions de personnes. Dans les pays occupés, les populations sont confrontées au choix entre collaboration et résistance.\n\nLe tournant militaire s'opère avec des batailles décisives (Stalingrad, débarquement de Normandie en 1944), menant aux capitulations de 1945. La fin du conflit s'accompagne de la création de l'ONU, mais aussi de l'émergence de deux blocs rivaux dont l'opposition structurera la Guerre froide.",
          notionsCles: ["Totalitarisme", "Shoah", "Collaboration et Résistance", "Débarquement", "Conférences de paix"],
          objectifs: ["Analyser la montée des totalitarismes", "Expliquer le processus génocidaire", "Comprendre les origines de la Guerre froide"],
          exemples: "Dates clés : 1939 (invasion de la Pologne), 1944 (Débarquement), 1945 (capitulations)."
        },
        {
          titre: "La mondialisation et ses territoires",
          niveaux: "Seconde, Terminale",
          resume: "Étude des flux mondiaux (marchandises, capitaux, populations), des acteurs de la mondialisation (firmes transnationales, États, organisations internationales) et de ses effets contrastés sur les territoires.",
          cours: "La mondialisation désigne l'intensification des échanges à l'échelle planétaire, portée par la baisse des coûts de transport et de communication, et par la libéralisation des échanges depuis la seconde moitié du XXe siècle.\n\nLes firmes transnationales organisent leur production à l'échelle mondiale, créant des chaînes de valeur qui redessinent la géographie économique. Les États et organisations internationales (OMC, FMI) encadrent ces échanges. Certains territoires concentrent les effets positifs de la mondialisation : grandes métropoles et façades maritimes deviennent des points névralgiques de l'économie mondiale.\n\nMais la mondialisation produit aussi des inégalités territoriales marquées : certains espaces restent en marge de ces flux, tandis que d'autres, hyperconnectés, concentrent richesse et pouvoir de décision, nourrissant des débats sur la répartition de ses bénéfices.",
          notionsCles: ["Firme transnationale", "Flux et réseaux", "Métropolisation", "Inégalités territoriales", "Façade maritime"],
          objectifs: ["Caractériser les flux de la mondialisation", "Identifier les acteurs et leur rôle", "Analyser les inégalités territoriales"],
          exemples: "Exemples d'étude : Shanghai, la Silicon Valley, les façades maritimes mondiales."
        },
        {
          titre: "Les enjeux du monde contemporain",
          niveaux: "Terminale",
          resume: "Étude des grands enjeux géopolitiques actuels : gouvernance mondiale, environnement, puissances émergentes, tensions internationales et recompositions du monde depuis 1991.",
          cours: "Depuis la fin de la Guerre froide en 1991, le monde a connu une recomposition profonde des rapports de puissance, d'abord marquée par une hyperpuissance américaine, avant l'émergence de nouvelles puissances, en premier lieu la Chine, redessinant un monde de plus en plus multipolaire.\n\nLa gouvernance mondiale, portée par l'ONU, cherche à répondre à des défis dépassant le cadre des États-nations : maintien de la paix, régulation économique, mais aussi enjeux environnementaux globaux comme le changement climatique, nécessitant une coopération internationale complexe.\n\nLa notion de puissance évolue : elle intègre désormais le poids économique, technologique, culturel (soft power) et la capacité d'influence internationale, dans un contexte de tensions régionales persistantes qui témoignent de la difficulté à construire une gouvernance mondiale efficace.",
          notionsCles: ["Gouvernance mondiale", "Puissance", "Environnement et développement durable", "Multipolarité"],
          objectifs: ["Analyser les recompositions géopolitiques depuis 1991", "Comprendre les enjeux environnementaux globaux"],
          exemples: "Exemples d'étude : ONU et gouvernance climatique, émergence de la Chine."
        }
      ]
    },
    {
      nom: "Sciences de la Vie et de la Terre",
      icone: "science",
      themes: [
        {
          titre: "La cellule et l'unité du vivant",
          niveaux: "Seconde",
          resume: "Étude de la cellule comme unité structurale et fonctionnelle commune à tous les êtres vivants, incluant la structure de l'ADN et son rôle dans la transmission de l'information génétique.",
          cours: "Tous les êtres vivants sont constitués d'une ou plusieurs cellules. On distingue les cellules procaryotes (bactéries), dépourvues de noyau délimité, des cellules eucaryotes (végétales, animales), qui possèdent un noyau contenant le matériel génétique.\n\nÀ l'intérieur du noyau se trouve l'ADN, une molécule organisée en double hélice qui porte l'information génétique sous forme d'une séquence de quatre bases, organisée en gènes eux-mêmes regroupés sur des chromosomes.\n\nLa division cellulaire permet à une cellule de se reproduire en donnant deux cellules filles ; avant cette division, l'ADN est dupliqué intégralement, afin que chaque cellule fille reçoive une copie complète de l'information génétique. Cette unité cellulaire constitue l'un des arguments majeurs en faveur d'une origine commune à tous les organismes vivants.",
          notionsCles: ["Cellule eucaryote/procaryote", "ADN", "Chromosome", "Division cellulaire"],
          objectifs: ["Décrire la structure d'une cellule", "Expliquer le rôle de l'ADN dans l'hérédité"],
          exemples: "Observation microscopique de cellules végétales et animales."
        },
        {
          titre: "Évolution et biodiversité",
          niveaux: "Première",
          resume: "Étude des mécanismes de l'évolution (sélection naturelle, dérive génétique) et de leur rôle dans la diversification du vivant, à partir de preuves fossiles, moléculaires et anatomiques.",
          cours: "La théorie de l'évolution explique la diversité actuelle du vivant par une origine commune et une transformation progressive des espèces. Le mécanisme central identifié par Darwin est la sélection naturelle : les individus dont les caractéristiques sont les mieux adaptées à leur environnement ont statistiquement plus de chances de survivre et de se reproduire.\n\nLes mutations, modifications aléatoires de l'ADN, sont la source de la variation génétique sur laquelle agit la sélection naturelle. La dérive génétique désigne des variations aléatoires de fréquence des caractères, particulièrement marquées dans les petites populations.\n\nLorsque deux populations isolées accumulent suffisamment de différences génétiques, elles peuvent donner naissance à deux espèces distinctes : c'est la spéciation. Les preuves de l'évolution sont multiples : fossiles, comparaisons anatomiques, et comparaisons moléculaires d'ADN, qui permettent de construire des arbres phylogénétiques.",
          notionsCles: ["Sélection naturelle", "Mutation", "Spéciation", "Phylogénie"],
          objectifs: ["Expliquer les mécanismes de l'évolution", "Construire un arbre phylogénétique simple"],
          exemples: "Exemple classique : résistance des bactéries aux antibiotiques."
        },
        {
          titre: "Le fonctionnement du corps humain",
          niveaux: "Première, Terminale",
          resume: "Étude des grands systèmes du corps humain (nerveux, immunitaire, hormonal) et de leur rôle dans le maintien de l'homéostasie et la réponse aux agressions extérieures.",
          cours: "Le corps humain fonctionne comme un ensemble de systèmes coordonnés visant à maintenir un équilibre interne stable malgré les variations extérieures : l'homéostasie.\n\nLe système nerveux assure une communication rapide entre les parties de l'organisme grâce à des signaux électriques transmis par les neurones. Le réflexe illustre le fonctionnement le plus élémentaire de ce système, sans intervention consciente.\n\nLe système immunitaire protège l'organisme contre les agressions extérieures, grâce à une immunité innée rapide mais peu spécifique, et une immunité adaptative plus lente mais capable de mémoriser un agent pathogène déjà rencontré — le principe de la vaccination. Le système hormonal régule des processus sur le long terme grâce à des messagers chimiques transportés par le sang.",
          notionsCles: ["Système nerveux", "Système immunitaire", "Homéostasie", "Réflexe"],
          objectifs: ["Expliquer le fonctionnement d'un système physiologique", "Relier structure et fonction d'un organe"],
          exemples: "Application médicale : fonctionnement de la vaccination."
        },
        {
          titre: "La Terre, un système complexe",
          niveaux: "Seconde, Terminale",
          resume: "Étude des grands cycles de la Terre (climatique, géologique) et de l'impact des activités humaines sur ces systèmes, notamment le changement climatique.",
          cours: "La surface terrestre est découpée en plaques rigides qui se déplacent lentement, un phénomène appelé tectonique des plaques, à l'origine de la formation des montagnes, des séismes et du volcanisme.\n\nLe climat terrestre résulte d'un équilibre entre l'énergie solaire reçue et l'énergie renvoyée vers l'espace. L'effet de serre, naturel et indispensable à la vie, est dû à certains gaz atmosphériques qui piègent une partie du rayonnement infrarouge.\n\nDepuis la révolution industrielle, les activités humaines ont considérablement augmenté la concentration de dioxyde de carbone dans l'atmosphère, renforçant l'effet de serre naturel et provoquant un réchauffement climatique global mesurable, aux conséquences multiples : élévation du niveau des mers, événements climatiques extrêmes, modification des écosystèmes.",
          notionsCles: ["Tectonique des plaques", "Effet de serre", "Cycle du carbone", "Changement climatique"],
          objectifs: ["Expliquer le fonctionnement de la tectonique des plaques", "Analyser les causes du changement climatique"],
          exemples: "Étude de cas : évolution du climat depuis l'ère préindustrielle."
        }
      ]
    },
    {
      nom: "Physique-Chimie",
      icone: "atom",
      themes: [
        {
          titre: "Mouvement et interactions",
          niveaux: "Seconde, Première",
          resume: "Étude des lois du mouvement (mécanique newtonienne), des forces et de leurs effets, avec des applications à la chute libre, aux mouvements circulaires et à la gravitation.",
          cours: "Le mouvement d'un objet se décrit par sa position, sa vitesse et son accélération, toujours par rapport à un référentiel choisi. Les lois de Newton relient les forces appliquées à un objet et son mouvement : sans force résultante, un objet reste au repos ou continue en ligne droite (principe d'inertie) ; soumis à une force résultante non nulle, il accélère proportionnellement à cette force.\n\nLa gravitation explique aussi bien la chute d'un objet que le mouvement des satellites en orbite. En chute libre, en négligeant les frottements, tous les objets accélèrent de la même manière indépendamment de leur masse.\n\nL'énergie cinétique d'un objet dépend de sa masse et du carré de sa vitesse ; elle peut se transformer en énergie potentielle selon le principe de conservation de l'énergie mécanique.",
          notionsCles: ["Force", "Vitesse et accélération", "Lois de Newton", "Énergie cinétique"],
          objectifs: ["Appliquer les lois de Newton à un mouvement", "Calculer une énergie cinétique ou potentielle"],
          exemples: "Applications : chute libre, mouvement d'un satellite."
        },
        {
          titre: "Structure de la matière et transformations chimiques",
          niveaux: "Seconde, Première",
          resume: "Étude de la structure atomique et moléculaire de la matière, ainsi que des réactions chimiques (acide-base, oxydoréduction) et de leur modélisation par des équations bilan.",
          cours: "Toute matière est constituée d'atomes, composés d'un noyau entouré d'électrons. Les atomes s'assemblent pour former des molécules en partageant ou échangeant des électrons.\n\nUne réaction chimique correspond à une transformation où des réactifs disparaissent tandis que des produits se forment, dans le respect de la conservation des atomes (équation bilan). Les réactions acide-base impliquent un transfert de protons, tandis que les réactions d'oxydoréduction impliquent un transfert d'électrons.\n\nCes réactions d'oxydoréduction sont à la base du fonctionnement des piles électrochimiques. Les techniques de dosage permettent de déterminer la concentration inconnue d'une espèce chimique en la faisant réagir avec une solution de concentration connue.",
          notionsCles: ["Atome et molécule", "Réaction acide-base", "Oxydoréduction", "Équation bilan"],
          objectifs: ["Écrire et équilibrer une équation de réaction", "Identifier le type de transformation chimique"],
          exemples: "Applications : piles électrochimiques, dosages."
        },
        {
          titre: "Ondes et signaux",
          niveaux: "Première, Terminale",
          resume: "Étude des phénomènes ondulatoires (lumière, son) et de leurs propriétés (fréquence, longueur d'onde, propagation), avec des applications aux technologies de communication.",
          cours: "Une onde correspond à la propagation d'une perturbation, sans transport de matière mais avec transport d'énergie. Elle se caractérise par sa fréquence et sa longueur d'onde.\n\nLe son est une onde mécanique nécessitant un support matériel, contrairement à la lumière, une onde électromagnétique qui se propage aussi dans le vide. La lumière visible n'est qu'une petite partie du spectre électromagnétique, des ondes radio aux rayons gamma.\n\nLa fibre optique transmet de l'information sous forme de signaux lumineux codés en signal numérique. L'imagerie médicale utilise différents types d'ondes selon les besoins : rayons X, ultrasons, chacun exploitant des propriétés physiques spécifiques.",
          notionsCles: ["Onde mécanique", "Fréquence et longueur d'onde", "Spectre lumineux", "Signal numérique"],
          objectifs: ["Caractériser une onde par ses grandeurs physiques", "Expliquer un phénomène de propagation"],
          exemples: "Applications : fibre optique, imagerie médicale."
        },
        {
          titre: "Énergie : conversions et transferts",
          niveaux: "Terminale",
          resume: "Étude des différentes formes d'énergie, de leurs conversions (mécanique, thermique, électrique) et des enjeux liés à la transition énergétique.",
          cours: "L'énergie existe sous de multiples formes et peut se convertir d'une forme à une autre, mais jamais se créer ni disparaître. Toute conversion s'accompagne cependant de pertes, le plus souvent sous forme de chaleur, ce qui limite le rendement de toute chaîne de conversion.\n\nUn moteur thermique convertit l'énergie chimique d'un carburant en énergie mécanique avec un rendement limité. Les panneaux solaires convertissent directement l'énergie lumineuse en énergie électrique.\n\nLa transition énergétique, qui vise à réduire la part des énergies fossiles au profit des énergies renouvelables, pose des questions techniques (stockage, intermittence) autant que des questions de société.",
          notionsCles: ["Conservation de l'énergie", "Rendement énergétique", "Énergies renouvelables", "Transfert thermique"],
          objectifs: ["Analyser une chaîne de conversion énergétique", "Calculer un rendement"],
          exemples: "Applications : panneaux solaires, moteurs thermiques."
        }
      ]
    },
    {
      nom: "Anglais",
      icone: "language",
      themes: [
        {
          titre: "Identités et échanges",
          niveaux: "Seconde, Première",
          resume: "Exploration de la construction de l'identité individuelle et collective à travers des supports variés (littérature, presse, cinéma anglophone), avec un travail sur l'expression de soi et des cultures.",
          cours: "L'identité se construit dans le rapport à soi-même mais aussi aux autres et à une culture partagée. Le monde anglophone regroupe des sociétés très diverses (Royaume-Uni, États-Unis, Canada, Australie, Inde) partageant une langue commune mais des histoires très différentes.\n\nL'étude s'appuie sur des supports variés : extraits littéraires, discours sur la diversité, articles de presse. La notion de patrimoine culturel permet d'aborder la transmission d'une histoire et d'une langue, tandis que la diversité invite à réfléchir sur la coexistence de multiples identités.\n\nL'objectif est de pouvoir s'exprimer sur sa propre identité, comparer des expériences culturelles différentes, et argumenter sur des questions liées à l'appartenance.",
          notionsCles: ["Identity", "Diversity", "Cultural heritage", "Self-expression"],
          objectifs: ["S'exprimer sur des questions d'identité", "Comparer des cultures anglophones"],
          exemples: "Supports : extraits de discours, articles de presse britannique/américaine."
        },
        {
          titre: "Espace et échanges",
          niveaux: "Première",
          resume: "Étude des mobilités (migration, tourisme, échanges commerciaux) dans le monde anglophone, avec une réflexion sur les frontières physiques et symboliques.",
          cours: "Ce thème étudie les différentes formes de mobilité dans le monde anglophone : migrations, tourisme, échanges commerciaux. Ces mobilités interrogent la frontière, à la fois limite physique et limite symbolique entre cultures.\n\nLe Commonwealth illustre la manière dont des liens historiques et culturels perdurent entre pays éloignés, tout en posant des questions sur les héritages coloniaux. La frontière américano-mexicaine cristallise des débats sur la migration économique et les inégalités de développement.\n\nCe thème invite à développer un regard critique sur la mondialisation des échanges, et à débattre des bénéfices et tensions que ces mobilités engendrent.",
          notionsCles: ["Borders", "Migration", "Globalization", "Mobility"],
          objectifs: ["Analyser un phénomène de mobilité", "Argumenter sur les enjeux des frontières"],
          exemples: "Étude de cas : le Commonwealth, les frontières américano-mexicaines."
        },
        {
          titre: "Le monde du travail et l'innovation",
          niveaux: "Terminale",
          resume: "Étude des mutations du monde du travail dans les pays anglophones (nouvelles technologies, télétravail, entrepreneuriat) et de leurs impacts sociaux.",
          cours: "Le monde du travail dans les pays anglophones a connu des transformations profondes, portées par l'innovation technologique. La Silicon Valley incarne cette dynamique en concentrant start-ups et grandes entreprises technologiques.\n\nL'automatisation et l'intelligence artificielle transforment de nombreux métiers, suscitant espoirs et inquiétudes sur l'emploi. Le télétravail a modifié l'organisation du travail et posé de nouvelles questions sur l'équilibre vie professionnelle/personnelle.\n\nL'entrepreneuriat, valorisé culturellement dans le monde anglo-saxon, s'appuie sur un discours de prise de risque individuelle, qui fait l'objet de débats sur les inégalités qu'il peut engendrer.",
          notionsCles: ["Innovation", "Workplace", "Entrepreneurship", "Automation"],
          objectifs: ["Débattre des enjeux de l'innovation technologique", "Présenter un projet à l'oral"],
          exemples: "Étude de cas : la Silicon Valley, le télétravail post-2020."
        }
      ]
    },
    {
      nom: "Philosophie",
      icone: "brain",
      themes: [
        {
          titre: "La conscience et le sujet",
          niveaux: "Terminale",
          resume: "Étude de la notion de conscience de soi, du rapport à autrui et de la question de l'inconscient, à partir des grands textes philosophiques (Descartes, Freud).",
          cours: "La conscience désigne la capacité d'un sujet à se représenter le monde et lui-même. Descartes, avec le cogito, fait de la conscience de soi le fondement indubitable de toute connaissance.\n\nCette conception est remise en question par Freud, qui introduit l'inconscient : une grande partie de notre vie psychique nous échappe, influençant nos pensées et nos actes sans que nous en ayons pleinement conscience.\n\nLa question du rapport à autrui complexifie la notion de conscience de soi : c'est souvent par le regard d'autrui que le sujet se construit une identité, ce qui interroge l'autonomie réelle de la conscience individuelle.",
          notionsCles: ["Conscience de soi", "Inconscient", "Autrui", "Identité personnelle"],
          objectifs: ["Analyser un texte philosophique", "Construire une argumentation sur la conscience"],
          exemples: "Auteurs de référence : Descartes, Freud, Sartre."
        },
        {
          titre: "La liberté et le déterminisme",
          niveaux: "Terminale",
          resume: "Étude de la question de la liberté humaine face aux déterminismes (biologiques, sociaux) et des différentes conceptions philosophiques de la responsabilité.",
          cours: "Cette question oppose les partisans du libre arbitre, selon lesquels l'être humain est capable de choix autonomes, aux partisans du déterminisme, qui soutiennent que tout événement est nécessairement causé par des facteurs antérieurs.\n\nSpinoza défend un déterminisme radical : la liberté n'est souvent que l'ignorance des causes qui nous déterminent. Kant distingue l'homme comme être naturel et comme être raisonnable, capable de se donner une loi morale. Sartre affirme la liberté avec « l'existence précède l'essence » : l'être humain se définit par ses choix.\n\nCette question a des implications concrètes sur la responsabilité morale et juridique : peut-on tenir quelqu'un pour responsable d'un acte entièrement déterminé ?",
          notionsCles: ["Libre arbitre", "Déterminisme", "Responsabilité morale", "Contrainte"],
          objectifs: ["Distinguer liberté et déterminisme", "Argumenter sur la responsabilité morale"],
          exemples: "Auteurs de référence : Spinoza, Kant, Sartre."
        },
        {
          titre: "La justice et le droit",
          niveaux: "Terminale",
          resume: "Étude des fondements de la justice, du droit naturel et du droit positif, et de la légitimité de l'État à travers les théories du contrat social.",
          cours: "On distingue le droit naturel, principes de justice universels antérieurs à toute loi, du droit positif, l'ensemble des lois effectivement établies dans une société donnée.\n\nLes théories du contrat social (Hobbes, Rousseau) expliquent l'origine de la légitimité de l'État : les individus renoncent à une partie de leur liberté naturelle en échange de la sécurité garantie par une autorité commune. Rawls propose une théorie de la justice fondée sur l'équité, à travers le « voile d'ignorance ».\n\nCe thème invite à distinguer légalité et légitimité, une distinction essentielle pour comprendre certains mouvements de contestation d'un ordre légal jugé injuste.",
          notionsCles: ["Justice", "Droit naturel", "Contrat social", "État"],
          objectifs: ["Distinguer légalité et légitimité", "Analyser une théorie du contrat social"],
          exemples: "Auteurs de référence : Rousseau, Hobbes, Rawls."
        }
      ]
    },
    {
      nom: "Sciences Économiques et Sociales",
      icone: "chart",
      themes: [
        {
          titre: "Le marché et la formation des prix",
          niveaux: "Seconde, Première",
          resume: "Étude du fonctionnement du marché concurrentiel, de la loi de l'offre et de la demande, et des situations de défaillance de marché (monopole, externalités).",
          cours: "Un marché est le lieu où se rencontrent une offre et une demande. Sur un marché concurrentiel, le prix se fixe au point où la quantité offerte égale la quantité demandée.\n\nLorsque le prix augmente, la demande tend à diminuer tandis que l'offre tend à augmenter : ce mécanisme d'ajustement permet de converger vers un prix d'équilibre. Ce modèle ne se vérifie pas toujours : un monopole peut fixer les prix sans contrainte concurrentielle, et des externalités (comme la pollution) imposent un coût à la société non répercuté dans le prix.\n\nCes défaillances de marché justifient souvent une intervention publique, sous forme de régulation, de taxation ou de subventions.",
          notionsCles: ["Offre et demande", "Équilibre de marché", "Concurrence", "Externalité"],
          objectifs: ["Représenter graphiquement l'offre et la demande", "Expliquer une défaillance de marché"],
          exemples: "Applications : marché du travail, marché des biens de consommation."
        },
        {
          titre: "La croissance économique",
          niveaux: "Première, Terminale",
          resume: "Étude des sources de la croissance économique (facteurs de production, progrès technique), de sa mesure (PIB) et de ses limites (soutenabilité environnementale).",
          cours: "La croissance économique se mesure par l'évolution du PIB, qui agrège la valeur des richesses produites sur un territoire. Elle repose sur le travail et le capital, mais une part importante s'explique par le progrès technique.\n\nLe PIB fait l'objet de critiques : il ne mesure pas les inégalités de répartition, ignore les activités non marchandes, et néglige les dégradations environnementales.\n\nCes limites nourrissent des débats sur la nécessité de repenser les indicateurs de richesse, et sur la compatibilité entre croissance et préservation de l'environnement, opposant croissance verte et décroissance.",
          notionsCles: ["PIB", "Facteurs de production", "Progrès technique", "Développement durable"],
          objectifs: ["Analyser les sources de la croissance", "Discuter des limites du PIB comme indicateur"],
          exemples: "Débats actuels : croissance verte, décroissance."
        },
        {
          titre: "La socialisation et les groupes sociaux",
          niveaux: "Seconde, Première",
          resume: "Étude des processus de socialisation (primaire, secondaire) et de la structuration de la société en groupes sociaux, avec une réflexion sur les inégalités et la mobilité sociale.",
          cours: "La socialisation est le processus par lequel un individu intériorise les normes et valeurs de sa société. On distingue la socialisation primaire (enfance, famille, école) de la socialisation secondaire (âge adulte, milieu professionnel).\n\nCette socialisation structure la société en groupes sociaux, définis par des caractéristiques partagées. La mobilité sociale désigne les changements de position sociale d'un individu, au cours de sa vie ou par rapport à ses parents.\n\nL'étude des inégalités s'intéresse à la répartition inégale des ressources entre groupes, et à la façon dont elles se transmettent ou s'atténuent d'une génération à l'autre.",
          notionsCles: ["Socialisation primaire/secondaire", "Groupe social", "Mobilité sociale", "Inégalités"],
          objectifs: ["Expliquer le processus de socialisation", "Analyser la mobilité sociale d'une société"],
          exemples: "Étude de cas : mobilité sociale en France depuis 1950."
        }
      ]
    },
    {
      nom: "Numérique et Sciences Informatiques",
      icone: "code",
      themes: [
        {
          titre: "Représentation des données",
          niveaux: "Première, Terminale",
          resume: "Étude des différents types de données (nombres, textes, images) et de leur représentation binaire, ainsi que des structures de données simples (listes, tableaux).",
          cours: "Un ordinateur ne manipule que des données binaires : des suites de 0 et de 1. Tout type d'information doit être encodé sous cette forme. Un caractère de texte est associé à un code numérique selon une table standardisée (Unicode).\n\nUne image numérique est décomposée en une grille de pixels, chacun caractérisé par une couleur codée numériquement. Plus l'image contient de pixels, plus le fichier est volumineux, d'où l'utilité d'algorithmes de compression.\n\nUne liste permet de stocker une collection ordonnée d'éléments modifiable, tandis qu'un tableau offre un accès direct à chaque élément par sa position.",
          notionsCles: ["Binaire", "Encodage", "Structure de données", "Pixel"],
          objectifs: ["Convertir un nombre en binaire", "Manipuler une structure de données simple"],
          exemples: "Applications : compression d'image, encodage de caractères (Unicode)."
        },
        {
          titre: "Algorithmique et programmation",
          niveaux: "Première, Terminale",
          resume: "Étude des concepts fondamentaux de l'algorithmique (boucles, conditions, fonctions) à travers la programmation en langage Python, avec une progression vers des algorithmes de tri et de recherche.",
          cours: "Un algorithme est une suite finie et non ambiguë d'instructions résolvant un problème. Trois structures fondamentales permettent de construire tout algorithme : la séquence, la condition et la boucle.\n\nUne fonction regroupe des instructions réutilisables sous un nom unique. La récursivité, où une fonction s'appelle elle-même, constitue une alternative élégante à certaines boucles pour des problèmes qui se prêtent à une décomposition naturelle.\n\nLes algorithmes de tri et de recherche sont des exemples classiques permettant d'introduire la notion de complexité algorithmique : certains algorithmes sont nettement plus efficaces que d'autres selon la taille des données traitées.",
          notionsCles: ["Boucle et condition", "Fonction", "Algorithme de tri", "Récursivité"],
          objectifs: ["Écrire un algorithme simple", "Analyser la complexité d'un algorithme"],
          exemples: "Applications : tri d'une liste, recherche dans un tableau."
        },
        {
          titre: "Réseaux et internet",
          niveaux: "Terminale",
          resume: "Étude du fonctionnement d'internet (protocoles, adressage) et des enjeux liés à la sécurité informatique et à la protection des données personnelles.",
          cours: "Internet est un réseau mondial de réseaux, où chaque appareil est identifié par une adresse IP unique. Les informations sont découpées en paquets de données, qui peuvent emprunter des chemins différents avant d'être réassemblés à destination.\n\nLe chiffrement permet de rendre une information illisible pour quiconque ne possède pas la clé de déchiffrement, protégeant les communications sensibles.\n\nLa protection des données personnelles, encadrée en Europe par le RGPD, impose aux organisations des obligations de transparence et de sécurisation.",
          notionsCles: ["Protocole", "Adresse IP", "Chiffrement", "Sécurité informatique"],
          objectifs: ["Expliquer le fonctionnement d'un réseau", "Identifier les enjeux de la cybersécurité"],
          exemples: "Applications : navigation web, protection des données personnelles (RGPD)."
        }
      ]
    },
    {
      nom: "Éducation Physique et Sportive",
      icone: "sport",
      themes: [
        {
          titre: "Développement des capacités physiques",
          niveaux: "Seconde à Terminale",
          resume: "Travail sur les capacités physiques générales (endurance, force, souplesse) à travers des activités variées, avec un objectif de suivi individualisé des progrès de l'élève.",
          cours: "Les capacités physiques générales se développent à travers un entraînement progressif. L'endurance se développe par des efforts modérés mais soutenus dans la durée (course, natation). La force musculaire se travaille par des exercices contre résistance, avec une attention portée à la technique.\n\nLa souplesse contribue à la performance et à la prévention des blessures. La charge d'entraînement décrit l'intensité et le volume d'un effort ; sa progression doit être maîtrisée pour permettre une adaptation sans surmenage.\n\nL'objectif en EPS est que chaque élève planifie un entraînement adapté à son propre niveau, et suive méthodiquement sa progression.",
          notionsCles: ["Endurance", "Force musculaire", "Souplesse", "Charge d'entraînement"],
          objectifs: ["Planifier un entraînement adapté", "Suivre sa progression physique"],
          exemples: "Activités : course de demi-fond, musculation, natation."
        },
        {
          titre: "Sports collectifs et coopération",
          niveaux: "Seconde à Terminale",
          resume: "Pratique de sports collectifs (handball, basketball, volleyball) permettant de développer des stratégies de jeu, l'esprit d'équipe et la gestion des rôles.",
          cours: "Les sports collectifs imposent une interaction constante entre coéquipiers et adversaires, développant une capacité d'analyse rapide du jeu. Une stratégie efficace repose sur la répartition des rôles, qui évoluent selon les phases de jeu.\n\nL'analyse du jeu permet de comprendre les schémas tactiques utilisés et d'ajuster son comportement. Le fair-play implique le respect des règles et des adversaires, même en compétition intense.\n\nChaque élève apprend à occuper différents rôles, à communiquer avec ses partenaires, et à ajuster une stratégie collective selon l'évolution du jeu.",
          notionsCles: ["Stratégie collective", "Rôle et responsabilité", "Fair-play", "Analyse du jeu"],
          objectifs: ["Élaborer une stratégie collective", "Analyser une situation de jeu"],
          exemples: "Activités : handball, basketball, ultimate."
        }
      ]
    },
    {
      nom: "Enseignement Moral et Civique",
      icone: "gavel",
      themes: [
        {
          titre: "La citoyenneté et la République",
          niveaux: "Seconde à Terminale",
          resume: "Étude des principes de la République française (liberté, égalité, fraternité, laïcité) et des droits et devoirs du citoyen dans une démocratie représentative.",
          cours: "La République repose sur la devise liberté, égalité, fraternité. La laïcité, principe central depuis 1905, garantit la séparation des institutions publiques et des religions.\n\nLa France est une démocratie représentative : les citoyens élisent des représentants chargés de gouverner en leur nom, selon un principe de séparation des pouvoirs qui vise à éviter la concentration excessive du pouvoir.\n\nLa citoyenneté implique des droits (vote, liberté d'expression) et des devoirs (respect des lois), dont les fondements remontent à la Déclaration des droits de l'homme et du citoyen de 1789.",
          notionsCles: ["Laïcité", "Citoyenneté", "Démocratie représentative", "Droits et devoirs"],
          objectifs: ["Expliquer les principes républicains", "Distinguer les formes de démocratie"],
          exemples: "Textes de référence : Déclaration des droits de l'homme et du citoyen (1789)."
        },
        {
          titre: "Les enjeux de la justice et du droit",
          niveaux: "Première, Terminale",
          resume: "Étude du fonctionnement de la justice française, de la hiérarchie des normes et des grands principes du droit (présomption d'innocence, égalité devant la loi).",
          cours: "Le système juridique français repose sur une hiérarchie des normes : la Constitution au sommet, suivie des traités internationaux, des lois, puis des règlements.\n\nLe principe de présomption d'innocence garantit qu'une personne accusée est considérée innocente tant que sa culpabilité n'a pas été prouvée. La séparation des pouvoirs distingue le législatif, l'exécutif et le judiciaire, afin d'éviter qu'un même organe concentre l'ensemble du pouvoir.\n\nLa justice des mineurs obéit à des règles spécifiques, privilégiant une visée éducative, tandis que le Conseil constitutionnel veille au respect de la Constitution par les lois votées.",
          notionsCles: ["Hiérarchie des normes", "Présomption d'innocence", "Séparation des pouvoirs", "Justice des mineurs"],
          objectifs: ["Expliquer le fonctionnement de la justice", "Analyser un cas pratique simple de droit"],
          exemples: "Étude de cas : fonctionnement d'un tribunal, rôle du Conseil constitutionnel."
        }
      ]
    }
  ]
};
