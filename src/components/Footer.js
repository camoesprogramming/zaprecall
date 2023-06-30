import styled from "styled-components";
import icone_certo from "../assets/imgs/icone_certo.png"
import icone_erro from "../assets/imgs/icone_erro.png"
import icone_quase from "../assets/imgs/icone_quase.png"
import CARDS from "../assets/CARDS"

export default function Footer({correctAnswer, almostAnswer, wrongAnswer, answered}) {
    const iconsArray = [];
    for (let i = 0; i < answered.length; i++) {
      if (correctAnswer.includes(answered[i])) {
        iconsArray.push(icone_certo)
      } 
      if (almostAnswer.includes(answered[i])) {
        iconsArray.push(icone_quase)
      } 
      if (wrongAnswer.includes(answered[i])) {
        iconsArray.push(icone_erro)
      } 
    }
  
  
    return (
        <>
        <ContainerFooter>
            <p>{answered.length}/{CARDS.length} concluidos</p>
            <ContainerIcones>
            {iconsArray.map((icon) => <Icons src = {icon}/>)}
            </ContainerIcones>
        </ContainerFooter>
        </>
    )
}

const ContainerFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`

const Icons = styled.img`
    src: ${props=>props.src} ;
`
const ContainerIcones = styled.div`
  display: flex;
  width: 20%;
  align-items:center;
  justify-content:space-evenly;
  margin: 20px;
  
`