import styled from "styled-components";
import seta_virar from "../assets/imgs/seta_virar.png"

export default function QuestionOpenedFrontFace() {
    return (
        <>
        <FrontFace>
            <p>O que é JSX?</p>
            <img  src={seta_virar} alt="turning arrow"/>
        </FrontFace>
        </>
    )
}

const FrontFace = styled.div`
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
  
  > img{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`