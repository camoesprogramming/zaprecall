import QuestionClosed from "./QuestionClosed";
import { useState } from "react";
import QuestionOpenedFrontFace from "./QuestionOpenedFrontFace";
import QuestionOpenedBackFace from "./QuestionOpenedBackFace";
import CARDS from "../assets/CARDS"


export default function QuestionsContainer() {
    const [openedQuestion, setOpenedQuestion] = useState(-1)
    const [showedAnswer, setShowedAnswer] = useState(-1)
    
    function returnQuestion(questionNumber, question, answer) {
        if (openedQuestion === questionNumber) {
            
            if (showedAnswer === questionNumber) {
                return (
                    <QuestionOpenedBackFace key = {questionNumber} answer = {answer}></QuestionOpenedBackFace>
                )
            }

            return (
                <QuestionOpenedFrontFace key = {questionNumber} question = {question} setShowedAnswer = {setShowedAnswer} questionNumber = {questionNumber}></QuestionOpenedFrontFace>
            )

        }
        return(
            <QuestionClosed key = {questionNumber} questionNumber = {questionNumber} setOpenedQuestion={setOpenedQuestion}></QuestionClosed>
        )
    }
    
    return (
        <>
            {CARDS.map((question, index) =>(returnQuestion(index, question.question, question.answer)))}
        </>
    )
}






