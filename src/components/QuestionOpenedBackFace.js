import styled from "styled-components";

export default function QuestionOpenedBackFace({answer}) {
    
    return (
        <>
            <BackFace>
                <p>{answer}</p>
                <ButtonsContainer>
                    <Button color = {'#FF3030'}>Não Lembrei</Button>
                    <Button color = {'#FF922E'}>Quase não lembrei</Button>
                    <Button color = {'#2FBE34'}>ZAP!</Button>
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
`