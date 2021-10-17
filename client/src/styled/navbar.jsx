import styled from "styled-components";
import {animated as a} from "react-spring";

export const NavbarContainer = styled(a.nav)`
    width: calc(100% - 20px);
    padding: 0px 10px;
    height: ${(props) => 
        props.isopened ? "100vh" : "12vh"};
    background: #111111;
    box-shadow: 0px 4px 5px #000;
    position: fixed;
    top: 0px;
    left: 0px;
    overflow-y: hidden;
    transition: height 0.3s;
    z-index: 10;

    a{
        text-decoration: none;
        color: white;
    }

    @media screen and (min-width: 960px){
        height: 12vh;
    }
`;

export const LeftPart = styled.div`
    @media screen and (min-width: 960px){
        float: left;
    }
`;

export const RightPart = styled.div`
    @media screen and (min-width: 960px){
        float: right;
    }
`;

export const NavbarElem = styled.div`
    height: calc(12vh - 20px);
    line-height: calc(12vh - 20px);
    width: calc(70% - 20px);
    padding: 10px;
    color: white;
    font-size: 1em;
    letter-spacing: 0.08em;
    display: block;
    margin: 0px auto 3vh;
    cursor: pointer;
    transition: all 0.4s;
    text-align: center;
    background: inherit;
    font-family: 'Gemunu Libre', sans-serif;
    text-shadow: 3px 3px 4px #000;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 320px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        font-size: 2em;
    }

    @media screen and (min-width: 960px){
        width: fit-content;
        display: inline-block;
        vertical-align: top;
        margin: 0px 10px;
        font-size: 1.2em;
    }

    @media screen and (min-width: 1100px){
        font-size: 1.4em;
    }
`;

export const ResponsiveOpen = styled.div`
    position: absolute;
    top: 2vh;
    right: 10px;
    color: #7000AB;
    z-index: 3;
    @media screen and (min-width: 960px){
        display: none;
    }
`;