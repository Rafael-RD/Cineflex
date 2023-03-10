import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Legenda from "./Components/Legenda";
import Seats from "./Components/Seats";

export default function SeatsPage() {
    const [filme, setFilme]=useState(null);
    const [selecionados, setSelecionados]=useState([]);
    const {idSessao}=useParams();


    
    useEffect(()=>{
        const url=`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promessa=axios.get(url);
        promessa.then(resp=>{
            console.log(resp.data);
            setFilme(resp.data);
        })
    },[idSessao])
    
    
    function clickAssento(id){
        if(selecionados.includes(id)){
            setSelecionados(selecionados.filter(e=>e!==id));
        }else setSelecionados([...selecionados, id]);
    }


    if(filme === null) return <div>Carregando</div>
    if(filme.length === 0) return <div>Deu Ruim</div>


    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {filme.seats.map(e=><Seats key={e.id} selected={selecionados.includes(e.id)} clickAssento={clickAssento} assento={e} />)}
            </SeatsContainer>

            <Legenda />

            <FormContainer>
                Nome do Comprador:
                <input placeholder="Digite seu nome..." />

                CPF do Comprador:
                <input placeholder="Digite seu CPF..." />

                <button>Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer>
                <div>
                    <img src={filme.movie.posterURL} alt={filme.movie.title} />
                </div>
                <div>
                    <p>{filme.movie.title}</p>
                    <p>{filme.day.weekday} - {filme.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`