import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of India?',
      answerOptions: [
        { answerText: 'Mumbai', isCorrect: false },
        { answerText: 'Uttar Pradesh', isCorrect: false },
        { answerText: 'New Delhi', isCorrect: true },
        { answerText: 'Gujrat', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is the Prime Minister of India?',
      answerOptions: [
        { answerText: 'Rahul Gandhi(pappu)', isCorrect: false },
        { answerText: 'Narendra Modi', isCorrect: true },
        { answerText: 'Arvind Kejriwal', isCorrect: false },
        { answerText: 'Uddhav Thackeray', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is know as netaji?',
      answerOptions: [
        { answerText: 'Mahatma Gandhi', isCorrect: false },
        { answerText: 'Sardar Patel', isCorrect: false },
        { answerText: 'Subhas Chandra Bose', isCorrect: true },
        { answerText: 'Jawaharlal Nehru', isCorrect: false },
      ],
    },
    {
      questionText: "Who is known as 'Missile Man' of India?",
      answerOptions: [
        { answerText: 'Kalpana Chawla', isCorrect: false },
        { answerText: 'Vikram Sarabhai ', isCorrect: false },
        { answerText: 'Srinivasa Ramanujan', isCorrect: false },
        { answerText: 'APJ Abdul Kalam', isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizEnd, setQuizEnd] = useState(false)
  const [score, setScore] = useState(0)

  const buttonClickHandler = (isCorrect) => {
    if (currentQuestion + 1 !== questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setQuizEnd(true)
    }
    if (isCorrect) {
      setScore(score + 1)
    }
  }

  return (
    <div className="App">
      <div className="quiz-container">

        {!quizEnd && <div className="quiz-content">
          <div className='left-container'>
            <span className='question-num'>Question {currentQuestion + 1}/<span>{questions.length}</span></span>
            <h1 className='question'>{questions[currentQuestion].questionText}</h1>
          </div>
          <div className='right-container'>
            {questions[currentQuestion].answerOptions.map((val) => {
              return <button key={val.answerText} onClick={() => buttonClickHandler(val.isCorrect)}>{val.answerText}</button>;
            })}
          </div>
        </div>}
        {quizEnd && <div className='quiz-results'>
          <p>Your Score is {score} out of {questions.length}</p>
        </div>}
      </div>
    </div>
  );
}

export default App;
