import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

export default function App() {
    const [sucesso, setSucesso] = useState({});

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/sessoes/:idFilme" element={<SessionsPage />} />
                <Route exact path="/assentos/:idSessao" element={<SeatsPage setSucesso={setSucesso} />} />
                <Route exact path="/sucesso" element={<SuccessPage sucesso={sucesso} />} />
            </Routes>
        </BrowserRouter>
    )
}
