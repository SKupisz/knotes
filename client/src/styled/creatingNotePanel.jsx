import styled from "styled-components";

export const CreateNoteContainer = styled.section`
    width: 100%;
    text-align: center;
    position: relative;
    top: 3vh;
    font-family: "Gemunu Libre", sans-serif;
    color: white;
`;

export const CreateNoteHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.09em;
    margin-bottom: 9vh;
    text-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 375px){
        font-size: 1.7em;
    }

    @media screen and (min-width: 425px){
        width: calc(95% - 20px);
        font-size: 2.1em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.9em;
        width: calc(80% - 20px);
    }
`;

export const CreateNotePanelWrapper = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    border-radius: 5px;
    box-shadow: 3px 3px 4px #000;
    height: 45vh;
    text-align: center;
    color: white;

    @media screen and (min-width: 425px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(50% - 20px);
    }
`;

export const CreateNoteInput = styled.input`
    width: calc(90% - 20px);
    padding: 10px;
    text-indent: 0.7em;
    font-size: 1.4em;
    font-family: "Gemunu Libre", sans-serif;
    color: white;
    letter-spacing: 0.07em;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 4px #000;
    margin-bottom: 7vh;
    position: relative;
    top: 7vh;
    background: rgba(33,33,33,.5);

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
        font-size: 1.6em;
        text-indent: 0.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 2.3em;
    }
`;

export const CreateNoteSubmitBtn = styled.div`
    width: calc(80% - 20px);
    padding: 20px 10px;
    font-size: 1.2em;
    letter-spacing: 0.07em;
    background: rgba(22,22,22,.7);
    text-shadow: 3px 3px 4px #000;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 10px;
    position: relative;
    top: 9vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
        font-size: 1.7em;
    }

    @media screen and (min-width: 1024px){
        width: calc(50% - 20px);
    }
`;