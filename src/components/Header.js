import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const navigate=useNavigate();


    const useHideBack = () => {
        if (useLocation().pathname === '/') return true;
        else return false;
    };



    return (
        <NavContainer hideBack={useHideBack()} >
            <Link data-test="go-home-header-btn" onClick={()=>navigate(-1)}>{'< Back'}</Link>
            CINEFLEX
        </NavContainer>
    );
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
        position: absolute;
        left: 2vw;
        text-decoration: none;
        color: #E8833A;
        display: ${({hideBack})=>hideBack?'none':'flex'};
    }
`