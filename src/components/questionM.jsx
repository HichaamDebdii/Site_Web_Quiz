const questionM = [
    {
        question: " Quelle est la signification de MongoDB  ?",
        choices: [
            { text: "Moderne Data Base", answer: false },
            { text: "Mongo Database", answer: false },
            { text: "NoSQL Database", answer: true },
            { text: "MightyDB", answer: false },
        ],
    },
    {
        question: "Quel langage est utilisé pour interagir avec MongoDB ?",
        choices: [
            { text: "SQL", answer: true },
            { text: "MongoDB Query Language (MQL)", answer: false },
            { text: " JavaScript", answer: false },
            { text: "Python", answer: false },
        ],
    },
    {
        question: "Qu'est-ce qu'une collection dans MongoDB ?",
        choices: [
            { text: "Un groupe de documents", answer: true },
            { text: "Une table", answer: false },
            { text: " Un champ", answer: false },
            { text: " Une base de données", answer: false },
        ],
    },
    {
        question: "Quelle commande est utilisée pour insérer un document dans une collection ?",
        choices: [
            { text: " add()", answer: false },
            { text: "push()", answer: false },
            { text: "insert()", answer: true },
            { text: "create()", answer: false },
        ],
    },
    {
        question: "Comment supprimer tous les documents d'une collection dans MongoDB ?",
        choices: [
            { text: "deleteAll()", answer: true },
            { text: "  remove()", answer: false },
            { text: " deleteMany()", answer: false },
            { text: "erase()", answer: false },
        ],
    },
    {
        question: " Quelle méthode est utilisée pour mettre à jour un document dans MongoDB ?",
        choices: [
            { text: "  modify()", answer: false },
            { text: " change()", answer: false },
            { text: "updateOne()", answer: true },
            { text: "set()", answer: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour trier les résultats d'une requête dans MongoDB ?",
        choices: [
            { text: " order()", answer: false },
            { text: "arrange()", answer: false },
            { text: "organize()", answer: false },
            { text: "sort()", answer: true },
        ],
    },
    {
        question: " Quel est le rôle de la commande db.createCollection() dans MongoDB ?",
        choices: [
            { text: "Créer une nouvelle base de données", answer: false },
            { text: "Créer un nouvel utilisateur", answer: false },
            { text: " Créer une nouvelle collection dans une base de données", answer: true },
            { text: "Créer un nouvel index", answer: false },
        ],
    },
    {
        question: "Comment s'appelle le processus de duplication d'une collection dans MongoDB ?",
        choices: [
            { text: "clone()", answer: false },
            { text: "duplicate()", answer: true },
            { text: "copy()", answer: false },
            { text: "replicate()", answer: false },
        ],
    },
    {
        question: "Quelle méthode est utilisée pour renommer une collection dans MongoDB ?",
        choices: [
            { text: "changeCollectionName()", answer: false },
            { text: "renameCollection()", answer: true },
            { text: "alterCollection()", answer: false },
            { text: "modifyCollectionName()", answer: false },
        ]
    },
];

export default questionM;