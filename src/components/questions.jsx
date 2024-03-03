const questions = [
    {
        question: " Quelle est la syntaxe correcte pour importer un composant depuis React ?",
        choices: [
            { text: "import Component from 'react'", answer: false },
            { text: "import {Component} from 'react'", answer: true },
            { text: "import React.Component from 'react'", answer: false },
            { text: "import [Component] from 'react'", answer: false },
        ],
    },
    {
        question: "ReactJS couvre la_________",
        choices: [
            { text: "Couche d’interface utilisateur (UI) dans une application", answer: true },
            { text: "Couche de données dans une application", answer: false },
            { text: " Tous les reponses sont vrais.", answer: false },
            { text: "Aucune de ces réponses n’est vraie.", answer: false },
        ],
    },
    {
        question: "Quel est le port hôte local par défaut utilisé par un serveur de développement React ?",
        choices: [
            { text: "3000", answer: true },
            { text: "3500", answer: false },
            { text: " 5000", answer: false },
            { text: " 8080", answer: false },
        ],
    },
    {
        question: "React est basé sur _______",
        choices: [
            { text: "Les modules", answer: false },
            { text: "Les services", answer: false },
            { text: "Les composants", answer: true },
            { text: "Les microservices", answer: false },
        ],
    },
    {
        question: "Dans quel répertoire les composants de React JS sont-ils enregistré?",
        choices: [
            { text: "Dans js/components/", answer: true },
            { text: " Dans vendor/components/", answer: false },
            { text: " Dans external/components/", answer: false },
            { text: "Dans vendor/", answer: false },
        ],
    },
    {
        question: " Combien d’éléments un composant React renvoie-t-il?",
        choices: [
            { text: " 1 élément", answer: false },
            { text: "2 éléments", answer: false },
            { text: "Plusieurs éléments", answer: true },
            { text: "Aucune de ces réponses n’est vraie.", answer: false },
        ],
    },
    {
        question: "Quelle est la bonne commande pour créer un nouveau projet React ?",
        choices: [
            { text: "npx create -react-app", answer: false },
            { text: "npm create-react-app", answer: false },
            { text: "npm create-react-app myReactApp", answer: false },
            { text: "npx create-react-app myReactApp", answer: true },
        ],
    },
    {
        question: " Comment accéder à l’état d’un composant à l’intérieur d’une fonction membre?",
        choices: [
            { text: "this.getState()", answer: false },
            { text: "this.prototype.stateValue", answer: false },
            { text: " this.state", answer: true },
            { text: "this.values", answer: false },
        ],
    },
    {
        question: "Les Props sont __________ dans d’autres composants",
        choices: [
            { text: "Injecté", answer: false },
            { text: "des méthodes", answer: true },
            { text: "Composant.", answer: false },
            { text: "Aucune de ces réponses n’est vraie.", answer: false },
        ],
    },
    {
        question: "State dans react est ________",
        choices: [
            { text: "Un stockage permanent", answer: false },
            { text: "Un stockage interne du composant", answer: true },
            { text: "Tous reponse sont vrais", answer: false },
            { text: "Un stockage externe d composant", answer: false },
        ]
    },
];

export default questions;