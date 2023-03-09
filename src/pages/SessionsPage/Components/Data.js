import styled from "styled-components";
import Horario from "./Horario";

export default function Data({id, dia, sessoes}){

    return(
        <SessionContainer>
            {dia[0]+' - '+dia[1]}
            <ButtonsContainer>
                {sessoes.map(e=><Horario key={e.id} id={e.id} hora={e.name} />)}
            </ButtonsContainer>
        </SessionContainer>
    );
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`