import styled from "styled-components";
import icone_certo from "../assets/imgs/icone_certo.png"
import icone_erro from "../assets/imgs/icone_erro.png"

export default function Footer() {
    return (
        <>
        <ContainerFooter>
            <p>4/4 concluidos</p>
            <ContainerIcones>
            <Icons src = {icone_certo}></Icons>
            <Icons src = {icone_certo}></Icons>
            <Icons src = {icone_certo}></Icons>
            <Icons src = {icone_certo}></Icons>
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