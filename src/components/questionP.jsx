const questionP = [
    {
        question: "Quelle est la syntaxe correcte pour importer un module en Python ?",
        choices: [
            {text: "import module_name", answer: true},
            {text: "require module_name", answer: false},
            {text: "include module_name", answer: false},
            {text: "from module_name import *", answer: false},
        ],
    },
    {
        question: "Quel est le résultat de l'expression 3 + 4 * 2 en Python ?",
        choices: [
            {text: "14", answer: false},
            {text: "11", answer: true},
            {text: "18", answer: false},
            {text: "7", answer: false},
        ],
    },
    {
        question: "Comment définir une fonction en Python?",
        choices: [
            {text: "function my_function():", answer: false},
            {text: "def my_function():", answer: true},
            {text: "define my_function():", answer: false},
            {text: "func my_function():", answer: false},
        ],
    },
    {
        question: "Quelle est la méthode utilisée pour obtenir la longueur d'une liste en Python?",
        choices: [
            {text: "len()", answer: true},
            {text: "length()", answer: false},
            {text: "size()", answer: false},
            {text: "count()", answer: false},
        ],
    },
    {
        question: "Quelle est la sortie de print('Hello' + 'World') en Python ?",
        choices: [
            {text: "HelloWorld", answer: true},
            {text: "Hello World", answer: false},
            {text: "Hello+World", answer: false},
            {text: "Error", answer: false},
        ],
    },
    {
        question: "Quel est le résultat de 2 ** 3 en Python?",
        choices: [
            {text: "8", answer: true},
            {text: "6", answer: false},
            {text: "5", answer: false},
            {text: "16", answer: false},
        ],
    },
    {
        question: "Comment vérifier si une clé existe dans un dictionnaire en Python?",
        choices: [
            {text: "key in dictionary", answer: true},
            {text: "hasKey(dictionary, key)", answer: false},
            {text: "checkKey(dictionary, key)", answer: false},
            {text: "existKey(dictionary, key)", answer: false},
        ],
    },
    {
        question: "Quelle est la méthode pour ouvrir un fichier en mode lecture en Python?",
        choices: [
            {text: "open('file.txt', 'r')", answer: true},
            {text: "readFile('file.txt')", answer: false},
            {text: "read('file.txt')", answer: false},
            {text: "file.open('file.txt', 'read')", answer: false},
        ],
    },
    {
        question: "Quel est le résultat de [x for x in range(5) if x % 2 == 0] en Python?",
        choices: [
            {text: "[0, 2, 4]", answer: true},
            {text: "[1, 3]", answer: false},
            {text: "[0, 1, 2, 3, 4]", answer: false},
            {text: "[2, 4]", answer: false},
        ],
    },
    {
        question: "Quelle est la méthode utilisée pour supprimer un élément d'une liste en Python?",
        choices: [
            {text: "remove()", answer: false},
            {text: "delete()", answer: false},
            {text: "pop()", answer: true},
            {text: "erase()", answer: false},
        ],
    },
]
export default questionP;