const questionU= [
    {
        question:" On parle d 'héritage multiple quand ?",
        choices: [
            { text: " une classe mère a plusieurs sous-classes", answer: false },
            { text: "l'héritage est sur plusieurs générations", answer: false },
            { text: "la classe mère a plusieurs méthodes", answer: false },
            { text: "une sous-classe a plusieurs classes mères", answer: true },
        ],
    },
    {
        question: "La cardinalité du MCD Merise 1,N correspond en UML à  ",
        choices: [
            { text: "1 .. *", answer: true },
            { text: "0 .. *", answer: false },
            { text: "1 .. N", answer: false },
            { text: "0 .. N", answer: false },
        ],
    },
    {
        question: "L'encapsulation est utile pour__________",
        choices: [
            { text: "protéger l'intégrité des objets", answer: true },
            { text: "accélérer les traitements", answer: false },
            { text: " étiqueter des objets", answer: false },
            { text: " économiser la mémoire", answer: false },
        ],
    },
    {
        question: "Dans un paquetage, le signe moins - devant un élément signifie qu'il est______",
        choices: [
            { text: "abstrait", answer: false },
            { text: "protégé", answer: false },
            { text: "encapsulé", answer: true },
            { text: "privé", answer: false },
        ],
    },
    {
        question: "En UML, un lien pointillé représente _____",
        choices: [
            { text: "une implémentation", answer: true },
            { text: "une agrégation", answer: false },
            { text: "un héritage", answer: false },
            { text: "une abstraction", answer: false },
        ],
    },
    {
        question: " Sur le DCU (Diagramme des Cas d'Utilisation) figurent les____",
        choices: [
            { text: "classes", answer: false },
            { text: "méthodes", answer: false },
            { text: "acteurs", answer: true },
            { text: "hypothèses", answer: false },
        ],
    },
    {
        question: "Dans un diagramme de séquence, un message asynchrone à______",
        choices: [
            { text: "une flèche pleine", answer: false },
            { text: "un carré plein", answer: false },
            { text: "un carré vide", answer: false },
            { text: "une flèche ouverte", answer: true },
        ],
    },
    {
        question: "Les noms des classes et attributs par convention doivent être____",
        choices: [
            { text:" au pluriel", answer: false },
            { text: "accentués", answer: false },
            { text: "au singulier", answer: true },
            { text: "classes au singulier, attributs peu importe", answer: false },
        ],
    },
    {
        question: "Avec quel terme peut-on désigner une sous-classe ?",
        choices: [
            { text: "restriction", answer: false },
            { text:"spécialisation", answer: true },
            { text: "privatisation", answer: false },
            { text: "généralisation", answer: false },
        ],
    },
    {
        question: "On dit qu'une classe hérite de ses surclasses, mais de quoi hérite-t-elle exactement ?",
        choices: [
            { text: "des objets et des droits", answer: false },
            { text: "des attributs et méthodes", answer: true },
            { text: "des instances", answer: false },
            { text: "uniquement des attributs", answer: false },
        ]
    },
];

export default questionU;