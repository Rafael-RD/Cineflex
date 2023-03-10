import styled from "styled-components";

export default function Legenda() {

    return (
        <CaptionContainer>
            <CaptionItem>
                <SelecionadoCircle />
                Selecionado
            </CaptionItem>
            <CaptionItem>
                <DisponívelCircle />
                Disponível
            </CaptionItem>
            <CaptionItem>
                <IndisponívelCircle />
                Indisponível
            </CaptionItem>
        </CaptionContainer>
    );
}

const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const CaptionCircle = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`

const SelecionadoCircle=styled(CaptionCircle)`
    background: #1AAE9E;
    border: 1px solid #0E7D71;
`;

const DisponívelCircle=styled(CaptionCircle)`
    background: #C3CFD9;
    border: 1px solid #7B8B99;
`;

const IndisponívelCircle=styled(CaptionCircle)`
    background: #FBE192;
    border: 1px solid #F7C52B;
`;