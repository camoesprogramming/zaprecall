import styled from "styled-components";
import seta_play from "../assets/imgs/seta_play.png"
import icone_certo from "../assets/imgs/icone_certo.png"
import icone_erro from "../assets/imgs/icone_erro.png"
import icone_quase from "../assets/imgs/icone_quase.png"

export default function QuestionClosed({questionNumber, setOpenedQuestion, correctAnswer, almostAnswer, wrongAnswer, answered, buttonCollor}) {
    let buttonColor = "#333333"
    let decoration = ""
    let image = seta_play
    if (correctAnswer.includes(questionNumber)) {
        buttonColor = "#2FBE34"
        image = icone_certo
    }

    if (almostAnswer.includes(questionNumber)) {
        buttonColor = "#FF922E"
        image = icone_quase
    }

    if (wrongAnswer.includes(questionNumber)) {
        buttonColor = "#FF3030"
        image = icone_erro
    }

    if (answered.includes(questionNumber)) {
        decoration = "line-through"
    }
    
    
    
    return (
        <>
        <QuestionCardClosed >
            <Question color = {buttonColor} decoration = {decoration} >Pergunta {questionNumber+1}</Question>
            <img src = {image} alt="ícone para abrir card" onClick={() => setOpenedQuestion(questionNumber)}/>
        </QuestionCardClosed>
        </>
    )
}   

const QuestionCardClosed = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img:hover {
        cursor: pointer;
    }
`

const Question = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.color};
    text-decoration: ${props => props.decoration};
`
