import styled from "styled-components";
import seta_play from "../assets/imgs/seta_play.png"

export default function QuestionClosed({questionNumber, setOpenedQuestion}) {
    return (
        <>
        <QuestionCardClosed>
            <p>Pergunta {questionNumber+1}</p>
            <img src = {seta_play} alt="ícone para abrir card" onClick={() => setOpenedQuestion(questionNumber)}/>
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

    > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }

    img:hover {
        cursor: pointer;
    }
`
