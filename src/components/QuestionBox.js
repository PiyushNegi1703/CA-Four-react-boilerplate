export default function QuestionBox(props) {
  return(
    <div style={{height : "70vh", width : "70%", backgroundColor : `${props.darkMode}`, padding : "5vh", display : "flex", flexDirection : "column", justifyContent : "space-evenly", alignItems : "center", boxShadow: "0 0 35px black"}}>

        <div style={{backgroundColor : "rgb(105,105,105)", color : "white", padding : "5px 15px", borderRadius : "50px", position : "relative", top : "-7vh", right : "-45%", fontSize : "1.2em", cursor : "pointer"}} id = "darkMode" onClick={() => props.toggle()}>{props.text}</div>

        {props.showScore ? (
          <div style={{height : "40vh", width : "100%", display : "flex", flexDirection : "column", alignItems : "center", backgroundColor : `${props.darkMode}`}}>

              <h1 style={{color : "green", margin : "3vh 0"}}>Result</h1>

              <div id="score" style={{height : "20vh", width : "45%", display : "flex", flexDirection : "column", justifyContent : "space-around", alignItems : "center"}}>
                  <h3>You scored {props.score} out of {props.questions.length} - ({(props.score / 5) * 100}%)</h3>
              </div>

              <div>
                  <button style={{border : "1px solid blue", padding : "5px", color : "blue", boxShadow : "0 2px 2px black"}}>Play Again</button>
              </div>
          </div>
			    ) : (
				<>
					<div className='question-container'>
            <h3 style={{textAlign : "center"}}>Question {props.currentQuestion + 1}/{props.questions.length}</h3>
						<h1 style={{textAlign : "center"}} id="question">{props.questions[props.currentQuestion].text}</h1>
					</div>

					<div className='option-container'>
						{props.questions[props.currentQuestion].options.map((answerOption) => (
							<div onClick={() => props.handleAnswerOptionClick(answerOption.isCorrect)} style={{color : `${props.textColor}`}}>{answerOption.text}</div>
						))}
					</div>

          <div className="control-container">
              <div style={{backgroundColor : "red", color : "white", borderRadius : "10px"}} onClick={() => props.highlightOn()}>Highlight</div>

              <div style={{backgroundColor : "red", color : "white", borderRadius : "10px"}} onClick={() => props.highlightOff()}>Remove Highlight</div>
          </div>
				</>
			)}
    </div>
  )
}
