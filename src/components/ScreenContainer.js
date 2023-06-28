import styled from "styled-components"
import LogoContainer from "./LogoContainer"
import QuestionsContainer from "./QuestionsContainer"
import Footer from "./Footer"

export default function ScreenContainer() {
    return (
        <Screen>
            <LogoContainer />
            <QuestionsContainer />
            <Footer />
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