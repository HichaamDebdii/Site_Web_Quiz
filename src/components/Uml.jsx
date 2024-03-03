import React, { useState, useEffect } from "react";
import questionU from "./questionU";
import "./styles.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import Swal from 'sweetalert2';
import Header from "./Header";
import video6 from '../components/video6.mp4'
import video8 from '../components/video8.mp4'

function shuffle(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

export default function Uml({ fullName, gmail }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [questionText, setQuestionText] = useState("");
    const [choices, setChoices] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showNextButton, setShowNextButton] = useState(false);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [testCompleted, setTestCompleted] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [testFinished, setTestFinished] = useState(false);

    useEffect(() => {
        // Utilisez le nom et le prénom dans votre composant Quiz
        console.log('Nom complet:', fullName);
        console.log('Gmail:', gmail);
    }, []);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowNextButton(false);
        setSecondsElapsed(0);
        setQuizCompleted(false);
        setTotalTime(0);
        setTestCompleted(false);
        showQuestion(0);
    };
    const handleReessayer = () => {
        startQuiz();
    }


    const showQuestion = (index) => {
        resetState();
        let currentQuestion = questionU[index];
        let questionNumber = index + 1;
        setQuestionText(`${questionNumber}- ${currentQuestion.question}`);
        const shuffledChoices = shuffle(currentQuestion.choices);
        setChoices(shuffledChoices);
        setCorrectAnswer(currentQuestion.choices.findIndex((choice) => choice.answer === true));
    };

    const resetState = () => {
        setChoices([]);
        setCorrectAnswer(null);
        setSelectedAnswer(null);
    };

    const selectChoice = (isCorrect, index) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        setSelectedAnswer(index);
        setShowNextButton(true);
    };

    const handleNextButton = () => {
        setShowNextButton(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

        if (currentQuestionIndex < questionU.length - 1) {
            showQuestion(currentQuestionIndex + 1);
        } else {

            completeQuiz();
        }
    };

    const completeQuiz = () => {
        setQuizCompleted(true);
        setTotalTime(secondsElapsed);
    };

    const showScore = () => {
        resetState();
        setQuestionText(`Votre score est : ${score} sur ${questionU.length} questions!`);
        setChoices([]);
        setCorrectAnswer(null);
        setSelectedAnswer(null);
        setShowNextButton(false);
        setTestCompleted(true);
        setTestFinished(true);
    };

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (!testCompleted) {
                setSeconds((prevSeconds) => prevSeconds + 1);
                setSecondsElapsed((prevSecondsElapsed) => prevSecondsElapsed + 1);
            }
        }, 1000);


        return () => clearInterval(timerInterval);
    }, [testCompleted]);


    useEffect(() => {
        if (!testCompleted && seconds === 60) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            setSeconds(0);
        }
    }, [seconds, testCompleted]);

    useEffect(() => {
        const testCompletionTimeout = setTimeout(() => {
            setTestCompleted(true);
        }, 5 * 60 * 1000); // 5 minutes


        return () => clearTimeout(testCompletionTimeout);
    }, []);

    useEffect(() => {

        if (quizCompleted) {
            showScore();
        }
    }, [quizCompleted]);

    useEffect(() => {

        startQuiz();
    }, []);
    // ...
    useEffect(() => {

        if (quizCompleted) {
            showScore();
            Swal.fire({
                icon: 'success',
                title: 'Test Terminé!',
                confirmButtonText: 'OK',
            });
            setTestFinished(true);
        }

    }, [quizCompleted]);

    return (
        <div className={`quiz-container ${testFinished ? 'finished' : ''}`}>
       <div className="video-container">
         {testFinished ? (
           <video src={video6} playsInline autoPlay loop muted className="videoquiz fullscreen-video" />
         ) : (
           <video src={video8} playsInline autoPlay loop muted className="videoquiz" />
         )}
       </div>
       <Header />
       <div className="app">
 
         <div className="quiz">
           <h2 id="question">{questionText}</h2>
           
           <div id="answer-buttons">
             {choices.map((choice, index) => (
               <button
                 key={index}
                 className={`btn ${selectedAnswer === index ? (choice.answer ? "correct" : "incorrect") : ""}`}
                 onClick={() => selectChoice(choice.answer, index)}
                 aria-label={choice.text}
                 disabled={selectedAnswer !== null}
               >
                 {choice.text}
                 {selectedAnswer !== null && (
                   <>
                     {choice.answer ? (
                       <FaRegCheckCircle className="icon-correct" />
                     ) : (
                       <FaRegTimesCircle className="icon-incorrect" />
                     )}
                   </>
                 )}
               </button>
             ))}
           </div>
           <div >
             {quizCompleted ? (
               <div className="final">
                   <p className="tt">Temps total : {minutes}:{seconds} </p>
                   <button onClick={handleReessayer} className="ressayer">Ressayer</button>
               </div>
             ) : (
               <p className="temps">
                 {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
               </p>
             )}
             {showNextButton && (
               <button id="next-button" onClick={handleNextButton} >Suite</button>
             )}
           </div>
         </div>
       </div>
     </div>
   );
}


