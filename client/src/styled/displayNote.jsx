import styled from "styled-components";

export const DisplayNoteContainer = styled.section`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 5vh
`;

export const DisplayNoteWrapper = styled.section`
    width: calc(50% - 20px);
    padding: 10px;
    min-height: 65vh;
    height: fit-content;
    text-align: center;
    font-size: 1.1em;
    color: white;
    font-family: "Gemunu Libre", sans-serif;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #000;
`;

export const DisplayNoteHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.7em;
    letter-spacing: 0.07em;
    text-shadow: 3px 3px 4px #000;
    margin-bottom: 6vh;
    position: relative;
    top: 1vh;
`;

export const DisplayNoteTextarea = styled.textarea`
    min-width: calc(80% - 20px);
    max-width: calc(80% - 20px);
    min-height: 40vh;
    max-height: calc(45vh - 20px);
    line-height: 1.2em;
    font-size: 1.3em;
    letter-spacing: 0.07em;
    text-shadow: 3px 3px 4px #000;
    border-radius: 5px;
    box-shadow: 3px 3px 4px #000;
    border: none;
    background: rgba(22,22,22,.6);
    color: white;
    padding: 10px;
    font-family: "Gemunu Libre", sans-serif;
`;