"use client";

import { quiz } from "@/data/quiz";
import { useState } from "react";

export default function PageQuiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  // Desestruturação
  const { questions,subject,totalQuestions } = quiz;
  const { id, question, answers, correctAnswer} = questions[activeQuestion];

  function onAnswerSelected(answer:any ,idx:any ) {
    setSelectedAnswerIndex(idx);
    if(answer === correctAnswer){
      setSelectedAnswer(true);
      console.log("Você sabo de algo");
    }else {
      setSelectedAnswer(false);
      console.log("Ele não sabo de algo")
    }
  }

  function nextQuestionHandler () {
    setSelectedAnswerIndex(null);
    setResult((prev) => selectedAnswer ? {
      ...prev,
      score: prev.score + 25,
      correctAnswers: prev.correctAnswers + 1,
    } : {
      ...prev,
      wrongAnswers: prev.wrongAnswers + 1,
    });

    if(activeQuestion  !== questions.length - 1){
      setActiveQuestion(prev=> prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    setChecked(false);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col ">
        <h2>Assunto: {subject}</h2>
        <h2>Questão:{activeQuestion + 1 }/{totalQuestions}</h2>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-100">
        {!showResult ? (
          <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-black">{question}</div>
          <div className="text-gray-700 text-base flex flex-col gap-1">
            {answers.map((answer, idx) => (
              <button
                key={idx}
                className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${selectedAnswerIndex === idx ? "bg-blue-500 text-white" : ""} `}
                onClick={() => onAnswerSelected(answer,idx)}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
        ) : (
          <div className="px-6 py-4 text-black">
            <h1 className="font-bold text-lg text-blue-600">Resultados</h1>
            <h3>Porcentagem de acerto: {(result.score / 25) * 100}%</h3>
            <h3>Total de Questões: <span>{questions.length}</span></h3>
            <h3>Total de Pontos: <span>{result}</span></h3>
            <h3>Respostas Certas:</h3>
            <h3>Respostas erradas:</h3>
          </div>
        )}
        
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <button disabled={!checked} className={`bg-gray-400 font-bold py-2 px-4 rounded-full select-none ${checked ? "hover:bg-gray-600" : "bg-gray-100 cursor-not-allowed"}
          
          `}
          onClick={() => nextQuestionHandler}>
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
