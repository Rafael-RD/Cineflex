import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Seats({clickAssento, selected, assento}){
    const [cor,setCor]=useState(['#C3CFD9', '#808F9D']);


    useEffect(()=>{
        if(assento.isAvailable===false) setCor(['#FBE192', '#F7C52B']);
        else if(selected===true) setCor(['#1AAE9E', '#0E7D71']);
        else setCor(['#C3CFD9', '#808F9D']);
    },[selected, assento.isAvailable])

    return(
        <SeatItem cor={cor} onClick={assento.isAvailable?()=>clickAssento(assento.id, assento.name):()=>alert('Esse assento não está disponível')} >
            {Number(assento.name)<10?`0${assento.name}`:assento.name}
        </SeatItem>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props=>props.cor[1]};   
    background-color: ${props=>props.cor[0]};    
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    cursor: pointer;
`