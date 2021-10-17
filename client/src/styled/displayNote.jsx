import styled from "styled-components";

export const DisplayNoteContainer = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 5vh;
`;

export const DisplayNoteWrapper = styled.section`
    width: calc(95% - 20px);
    padding: 10px;
    min-height: 65vh;
    height: fit-content;
    text-align: center;
    font-size: 1em;
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 1.1em;
    }

    @media screen and (min-width: 768px){
        width: calc(70% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
    }
`;

export const DisplayNoteHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.07em;
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 6vh;
    position: relative;
    top: 1vh;

    @media screen and (min-width: 425px){
        width: calc(90% - 10px);
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.7em;
    }
`;

export const DisplayNoteTextarea = styled.textarea`
    min-width: calc(90% - 20px);
    max-width: calc(90% - 20px);
    min-height: 40vh;
    max-height: calc(45vh - 20px);
    line-height: 1.1em;
    font-size: 0.9em;
    letter-spacing: 0.07em;
    text-shadow: 3px 3px 4px #000;
    border-radius: 5px;
    box-shadow: 3px 3px 4px #000;
    border: none;
    background: rgba(22,22,22,.6);
    color: white;
    padding: 10px;
    font-family: "Gemunu Libre", sans-serif;

    @media screen and (min-width: 425px){
        font-size: 1em;
        line-height: 1.2em;
    }

    @media screen and (min-width: 768px){
        min-width: calc(80% - 20px);
        max-width: calc(80% - 20px);
        font-size: 1.3em;
    }
`;