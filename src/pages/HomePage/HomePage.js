import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Filme from "./Components/Filme"

export default function HomePage() {
    const [listaFilmes, setListaFilmes]=useState(null);

    useEffect(()=>{
        const url='https://mock-api.driven.com.br/api/v8/cineflex/movies'
        const promessa=axios.get(url)
        promessa.then((resp)=>{
            console.log(resp.data);
            setListaFilmes(resp.data);
        });
        promessa.catch(resp=>{
            console.log(resp)
        })
    },[])

    if(listaFilmes===null){
        return <div>Carregando...</div>
    }else if(listaFilmes.length===0){
        return <div>Deu ruim aqui</div>
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {listaFilmes.map((e)=><Filme key={e.id} id={e.id} url={e.posterURL} nome={e.title} />)}
            </ListContainer>

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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`