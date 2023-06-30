import styled from "styled-components";

export default function QuestionOpenedBackFace({answer, questionNumber, correctAnswer, setCorrectAnswer, almostAnswer, setAlmostAnswer,wrongAnswer, setWrongAnswer, answered, setAnswered, setOpenedQuestion}) {
    
    function verifyAnswer(buttonClicked) {
        if (buttonClicked === 1) {
            const newNumbers = [...correctAnswer,questionNumber]
            setCorrectAnswer(newNumbers)
        }
        
        if (buttonClicked === 2) {
            const newNumbers = [...almostAnswer,questionNumber]
            setAlmostAnswer(newNumbers)
        }

        if (buttonClicked === 3) {
            const newNumbers = [...wrongAnswer,questionNumber]
            setWrongAnswer(newNumbers)
        }

        const answeredQuestions = [...answered, questionNumber];
        setAnswered(answeredQuestions)
        setOpenedQuestion(-1)

    }
    
    return (
        <>
            <BackFace>
                <p>{answer}</p>
                <ButtonsContainer>
                    <Button color = {'#FF3030'} onClick={() => verifyAnswer(3)}>Não Lembrei</Button>
                    <Button color = {'#FF922E'} onClick={() => verifyAnswer(2)}>Quase não lembrei</Button>
                    <Button color = {'#2FBE34'} onClick={() => verifyAnswer(1)}>ZAP!</Button>
                </ButtonsContainer>
            </BackFace>
        </>
    )
}

const BackFace = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
const Button = styled.button`
        width: 90px;
        height: 45px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: ${props => props.color};
        border-radius: 5px;
        border: 1px solid ${props => props.color};
        padding: 5px;

        :hover {
            cursor: pointer;
        }
`