import { Link } from "react-router-dom"
import styled from "styled-components"
import Comprador from "./Components/Comprador"

export default function SuccessPage({sucesso}) {

    if(Object.keys(sucesso).length===0) return <PageContainer><Link data-test="go-home-btn" to={'/'}><button>Voltar para Home</button></Link></PageContainer>

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info" >
                <strong><p>Filme e sessão</p></strong>
                {<p>{sucesso.title}</p>}
                <p>{sucesso.dia} - {sucesso.hora}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {sucesso.assentos.sort((a, b)=>a-b).map(e=><p>Assento {e}</p>)}
            </TextContainer>

            <TextContainer data-test="client-info">
                <Comprador nome={sucesso.nome} cpf={sucesso.cpf} />
            </TextContainer>

            <Link data-test="go-home-btn" to={'/'}><button>Voltar para Home</button></Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`