import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
    const [sucesso, setSucesso]=useState({});

    return (
        <BrowserRouter>
           <NavContainer>CINEFLEX</NavContainer>
            <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/sessoes/:idFilme" element={<SessionsPage />} />
            <Route exact path="/assentos/:idSessao" element={<SeatsPage setSucesso={setSucesso} />} />
            <Route exact path="/sucesso" element={<SuccessPage sucesso={sucesso} />} />
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`