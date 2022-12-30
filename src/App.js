import {useState, useReducer} from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";

let initialState = 'white'

const reducer = (state, action) => {
  switch(action) {
    case 'light' :
      return '#505050';
    case 'dark' :
      return 'white';
    default :
      return state;
  }
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  
  const [darkMode, dispatch] = useReducer(reducer, initialState);
  const [textColor, setTextColor] = useState('black');
  const [text, changeText] = useState('Dark')

  const toggle = () => {
    if(darkMode === '#505050') {
      dispatch('dark');
      setTextColor(color => color = 'black');
      changeText(text => text = 'Dark');
    }
    else {
      dispatch('light');
      setTextColor(color => color = 'white');
      changeText(text => text = 'Normal');
    }
  }

  const highlightOn = () => {
    document.getElementById('question').style.color = 'red'
  }

  const highlightOff = () => {
    if(darkMode === '#505050') {
      document.getElementById('question').style.color = 'white'
    }

    else {
      document.getElementById('question').style.color = 'black'
    }
  }

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='App' style={{backgroundColor : `${darkMode}`, color : `${textColor}`, transition : "none"}}>
			<QuestionBox showScore={showScore} score={score} questions={questions} currentQuestion={currentQuestion} handleAnswerOptionClick={handleAnswerOptionClick} toggle={toggle} darkMode={darkMode} textColor={textColor} text={text} highlightOn={highlightOn} highlightOff={highlightOff} />
		</div>
	);
}

export default App;