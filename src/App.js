import { Routes, Route, Link } from "react-router-dom" 

import GlobalStyle from "./components/GlobalStyle/GlobalStyle"
import Heading from "./components/Header/Header"
import Main from "./components/Main/Main"


function App() {
    return (
        <GlobalStyle>
            <Heading />
            <Main />
        </GlobalStyle>
    )
}

export default App