import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Legenda from "./Components/Legenda";
import Seats from "./Components/Seats";

export default function SeatsPage({setSucesso}) {
    const [filme, setFilme]=useState(null);
    const [selecionados, setSelecionados]=useState([[],[]]);
    const {idSessao}=useParams();
    const [nome, setNome]=useState('');
    const [cpf, setCpf]=useState('');
    const navigate=useNavigate();
    


    
    useEffect(()=>{
        const url=`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
        const promessa=axios.get(url);
        promessa.then(resp=>{
            console.log(resp.data);
            setFilme(resp.data);
        })
    },[idSessao])
    
    
    function clickAssento(id, numero){
        if(selecionados[0].includes(id)){
            const ids=selecionados[0].filter(e=>e!==id);
            const numeros=selecionados[1].filter(e=>e!==numero);
            setSelecionados([ids, numeros]);
        }else setSelecionados([[...selecionados[0], id], [...selecionados[1], numero]]);
    }


    function enviar(e){
        e.preventDefault();
        const url='https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many';
        const data={ids: selecionados[0], name: nome, cpf: cpf};
        const promessa=axios.post(url, data);
        promessa.then((resp)=>{
            console.log('deu bom');
            console.log(resp.data);
            setSucesso({title: filme.movie.title, dia: filme.day.date, hora: filme.name, assentos: selecionados[1], nome: nome, cpf: cpf});
            navigate('/sucesso');
        })
        promessa.catch(resp=>{
            console.log('deu ruim');
            console.log(resp);
            alert('deu erro com o server cara');
        })
    }


    if(filme === null) return <div>Carregando</div>
    if(filme.length === 0) return <div>Deu Ruim</div>


    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {filme.seats.map(e=><Seats key={e.id} selected={selecionados[0].includes(e.id)} clickAssento={clickAssento} assento={e} />)}
            </SeatsContainer>

            <Legenda />

            <FormContainer onSubmit={enviar}>
                <label htmlFor="nome">Nome do Comprador:</label>
                <input id="nome" name="nome" value={nome} onChange={(e)=>setNome(e.target.value)} placeholder="Digite seu nome..." />

                <label htmlFor="cpf">CPF do Comprador:</label>
                <input id="cpf" name="cpf" value={cpf} onChange={(e)=>setCpf(e.target.value)} placeholder="Digite seu CPF..." />

                <button type="submit" >Reservar Assento(s)</button>
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
const FormContainer = styled.form`
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