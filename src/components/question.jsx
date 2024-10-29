import {  useState } from "react";
import Option from "./option";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentQuestionState, quizDataState, scoreState } from "../State/quizState";
import "./question.css"

export default function Question(){
    const [currentQuestion,setCurrentQuestion] = useRecoilState(currentQuestionState);
    const [score,setScore] = useRecoilState(scoreState);
    const quizData = useRecoilValue(quizDataState);
    const [selectedOption,setSelectedOption] = useState(null);
    const [feedback,setFeedback] = useState("");

    const questionData = quizData[currentQuestion];
    if (!questionData) return <p>Loading question...</p>;
    
    const progressPercentage = ((currentQuestion+1)/quizData.length)*100;

    const handleOptionClick = (option)=>{
        if(selectedOption!==null) return;
        setSelectedOption(option);
        if(option===questionData.answer){
            setScore((prevScore)=>prevScore+1);
            setFeedback("Correct Answer!");
        }
        else{
            setScore((prevScore)=>prevScore-1);
            setFeedback("Incorrect. The correct Answer is: " + questionData.answer);
        }
    }

    const handleNextOption = ()=>{
        if(currentQuestion<quizData.length-1){
            setCurrentQuestion((prev)=>prev+1)
            setSelectedOption(null);
            setFeedback("");
        }
        else{
            setCurrentQuestion(0);
            setScore(0);
            setSelectedOption(null)
            setFeedback("");
        }
    }    

    return (
        <div className="question-container">
            <h2>Question {currentQuestion+1}/{quizData.length}</h2>
            <div className="progress-bar"
                style={{
                    "--progress-width": `${progressPercentage}%`,
                }}
            >
                <div className="progress-display"></div>
            </div>
            <p>Score: {score}</p>
            <p>{questionData.question}</p>
            <div className="option-container">
                {questionData.options.map((option,index)=>(
                    <Option key={index} 
                            OptionText={option}
                            onClick={()=>handleOptionClick(option)}
                            isSelected={selectedOption === option}
                            disabled={selectedOption !== null}
                    />
                ))}
            </div>
            {feedback && <p className="feedback">{feedback}</p>}
            <button onClick={handleNextOption}>
                {currentQuestion < quizData.length - 1 ? "Next Question" : "Restart Quiz"}
            </button>
        </div>
    )
}