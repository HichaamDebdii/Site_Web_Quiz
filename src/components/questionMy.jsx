const questionMy = [
    {
        question: "Qu'est-ce que MySQL ?",
        choices: [
            { text: "Un système d'exploitation", answer: false },
            { text: "Un serveur web", answer: false },
            { text: "Un système de gestion de base de données", answer: true },
            { text: "Un langage de programmation", answer: false },
        ],
    },
    {
        question: "Quelle commande SQL est utilisée pour sélectionner toutes les colonnes d'une table ?",
        choices: [
            { text: "SELECT *", answer: true },
            { text: "SELECT COLUMN", answer: false },
            { text: "  SELECT ALL", answer: false },
            { text: " SELECT FIELDS", answer: false },
        ],
    },
    {
        question: "Comment supprimer toutes les lignes d'une table sans supprimer la table elle-même ?",
        choices: [
            { text: "TRUNCATE TABLE table_name;", answer: true },
            { text: "DELETE FROM table_name;", answer: false },
            { text: "DROP TABLE table_name;", answer: false },
            { text: " REMOVE ALL FROM table_name;", answer: false },
        ],
    },
    {
        question: "Quelle fonction est utilisée pour obtenir le nombre total de lignes d'une table ?",
        choices: [
            { text: " COUNT()", answer: true },
            { text: "SUM()", answer: false },
            { text: " TOTAL()", answer: false },
            { text: "NUMROWS()", answer: false },
        ],
    },
    {
        question: "Comment trier les résultats d'une requête par ordre décroissant ?",
        choices: [
            { text: "DESC", answer: true },
            { text: " SORT DESC", answer: false },
            { text: "ORDER BY DESC", answer: false },
            { text: "SORT BY DESC", answer: false },
        ],
    },
    {
        question: " Quelle commande SQL est utilisée pour mettre à jour des données dans une table ?",
        choices: [
            { text: "MODIFY ", answer: false },
            { text: " CHANGE", answer: false },
            { text: "UPDATE", answer: true },
            { text: "SET", answer: false },
        ],
    },
    {
        question: "Comment sélectionner uniquement les lignes distinctes d'une table ?",
        choices: [
            { text: " SELECT UNIQUE", answer: false },
            { text: "SELECT DIFFERENT", answer: false },
            { text: "SELECT UNIQUE ROWS", answer: false },
            { text: "SELECT DISTINCT", answer: true },
        ],
    },
    {
        question: " Quelle fonction est utilisée pour trouver la valeur maximale dans une colonne ?",
        choices: [
            { text: "TOP()", answer: false },
            { text: "HIGHEST()", answer: false },
            { text: "  MAX()", answer: true },
            { text: "PEAK()", answer: false },
        ],
    },
    {
        question: "Quelle commande SQL est utilisée pour supprimer une table existante de la base de données ?",
        choices: [
            { text: " DELETE TABLE table_name;", answer: false },
            { text: "DROP TABLE table_name;", answer: true },
            { text: "REMOVE TABLE table_name;", answer: false },
            { text: "ERASE TABLE table_name;", answer: false },
        ],
    },
    {
        question: "Quelle fonction SQL est utilisée pour calculer la moyenne d'une colonne numérique ?",
        choices: [
            { text: "MEAN()", answer: false },
            { text: " AVG()", answer: true },
            { text: "AVERAGE()", answer: false },
            { text: " SUM()", answer: false },
        ]
    },
];

export default questionMy;