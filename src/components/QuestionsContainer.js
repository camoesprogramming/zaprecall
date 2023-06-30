import QuestionClosed from "./QuestionClosed";
import { useState } from "react";
import QuestionOpenedFrontFace from "./QuestionOpenedFrontFace";
import QuestionOpenedBackFace from "./QuestionOpenedBackFace";
import CARDS from "../assets/CARDS"


export default function QuestionsContainer({ correctAnswer, setCorrectAnswer, almostAnswer, setAlmostAnswer, wrongAnswer, setWrongAnswer, answered, setAnswered }) {
    const [openedQuestion, setOpenedQuestion] = useState(-1)
    const [showedAnswer, setShowedAnswer] = useState(-1)


    function returnQuestion(questionNumber, question, answer) {
        if (openedQuestion === questionNumber) {

            if (showedAnswer === questionNumber) {
                return (
                    <QuestionOpenedBackFace
                        key={questionNumber}
                        answer={answer}
                        questionNumber={questionNumber}
                        correctAnswer={correctAnswer}
                        setCorrectAnswer={setCorrectAnswer}
                        almostAnswer={almostAnswer}
                        setAlmostAnswer={setAlmostAnswer}
                        wrongAnswer={wrongAnswer}
                        setWrongAnswer={setWrongAnswer}
                        answered={answered}
                        setAnswered={setAnswered}
                        setOpenedQuestion={setOpenedQuestion}
                    ></QuestionOpenedBackFace>
                )
            }

            return (
                <QuestionOpenedFrontFace
                    key={questionNumber}
                    question={question}
                    setShowedAnswer={setShowedAnswer}
                    questionNumber={questionNumber}
                ></QuestionOpenedFrontFace>
            )

        }
        return (
            <QuestionClosed
                key={questionNumber}
                questionNumber={questionNumber}
                setOpenedQuestion={setOpenedQuestion}
                correctAnswer={correctAnswer}
                almostAnswer={almostAnswer}
                wrongAnswer={wrongAnswer}
                answered={answered}
            ></QuestionClosed>
        )
    }

    return (
        <>
            {CARDS.map((question, index) => (returnQuestion(index, question.question, question.answer)))}
        </>
    )
}