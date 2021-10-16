import styled from "styled-components";

export const SigningContainer = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;
    background: rgb(26,26,26);
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    position: relative;
    top: 12vh;
    height: 65vh;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(60% - 20px);
    }
`;

export const SigningHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.8em;
    letter-spacing: 0.07em;
    margin-bottom: 6vh;
    position: relative;
    top: 1vh;
    text-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 2.1em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.6em;
    }
`;

export const SigningInput = styled.input`
    width: calc(90% - 22px);
    padding: 10px;
    border: 1px solid #222;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #111;
    text-indent: 0.3em;
    font-size: 1.3em;
    font-family: "Gemunu Libre", sans-serif;
    color: white;
    background: rgba(33,33,33,.3);
    transition: all 0.4s;
    cursor: pointer;
    margin-bottom: 2vh;

    &:hover{
        filter: brightness(70%);
    }

    &:hover{
        outline: none;
        background: rgba(33,33,33,.9);
    }

    @media screen and (min-width: 375px){
        width: calc(80% - 22px);
        text-indent: 1em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.6em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.1em;
        text-indent: 1em;
        width: calc(70% - 22px);
    }
`;

export const SigninSubmitBtn = styled.div`
    width: fit-content;
    padding: 10px 40px;
    font-size: 1.7em;
    font-family: "Gemunu Libre", sans-serif;
    letter-spacing: 0.09em;
    border-radius: 10px;
    background: rgba(33,33,33,.6);
    color: white;
    transition: all 0.4s;
    cursor: pointer;
    position: relative;
    top: 5vh;
    box-shadow: 3px 3px 4px #000;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.3em;
    }
`;