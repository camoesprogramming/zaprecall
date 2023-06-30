import styled from "styled-components"
import LogoContainer from "./LogoContainer"
import QuestionsContainer from "./QuestionsContainer"
import Footer from "./Footer"
import {useState} from "react"


export default function ScreenContainer() {
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [almostAnswer, setAlmostAnswer] = useState([])
    const [wrongAnswer, setWrongAnswer] = useState([])
    const [answered, setAnswered] = useState([])

    return (
        <Screen>
            <LogoContainer />
            <QuestionsContainer
            correctAnswer = {correctAnswer}
            setCorrectAnswer = {setCorrectAnswer}
            almostAnswer = {almostAnswer}
            setAlmostAnswer = {setAlmostAnswer}
            wrongAnswer = {wrongAnswer}
            setWrongAnswer = {setWrongAnswer}
            answered = {answered}
            setAnswered = {setAnswered}
            />
            <Footer
             correctAnswer = {correctAnswer}
             almostAnswer = {almostAnswer}
             wrongAnswer = {wrongAnswer}
             answered = {answered}
             />
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
  `