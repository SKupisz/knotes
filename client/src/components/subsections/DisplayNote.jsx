import React, {useState, useEffect} from "react";
import axios from "axios";

import { SectionContainer } from "../../styled/general.jsx";
import { DisplayNoteContainer, DisplayNoteWrapper,
    DisplayNoteHeader, DisplayNoteTextarea } from "../../styled/displayNote.jsx";

import { NotSignedInHeader } from "../../styled/allnotes.jsx";

const DisplayNote = ({API_URL, username_cookies, currentData}) => {

    const [id, setId] = useState("");
    const [error, setError] = useState("");
    const [title, setTitle] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        const parts = window.location.pathname.split("/");
        if(parts.length !== 4){
            setError("Nieprawidłowy adres. Spróbuj ponownie");
        }
        else{
            axios.get(`${API_URL}/notes/${parts[3]}`)
            .then((response) => {
                const data = response["data"];
                const newContent = data["content"];
                setTitle(data["title"]);
                setNoteContent(newContent);
                setId(parts[3]);
            })
            .catch((error) => {
                if(error.response !== undefined && Object.keys(error.response).indexOf("status") !== -1){
                    switch(error.response.status){
                        case 401:
                            setError("Nieprawidłowe dane. Spróbuj ponownie");
                            break;
                        case 500:
                            setError("Problemy z połączeniem. Spróbuj ponownie");
                            break;
                        default:
                            setError("Coś poszło nie tak. Spróbuj ponownie");
                            break;
                    }
                }
                else{
                    setError(error);
                }});
        }
    }, []);

    const changeTheNote = (e) => {
        const content = e.target.value;
        setNoteContent(content);
    }

    const updateThisCrapness = (noteId) => {
        axios.patch(`${API_URL}/notes/updateNote/${noteId}`,{
            email: username_cookies["username"] === undefined ? currentData["email"] : username_cookies["username"]["email"],
            token: username_cookies["username"] === undefined ? currentData["token"] : username_cookies["username"]["token"],
            content: noteContent,
        })
        .then((response) => { 
            //setTimeout(() => updateThisCrapness(noteId), 5000);
        })
        .catch((error) => {
            if(error.response !== undefined && Object.keys(error.response).indexOf("status") !== -1){
                switch(error.response.status){
                    case 401:
                        setError("Nieprawidłowe dane. Spróbuj ponownie");
                        break;
                    case 500:
                        setError("Problemy z połączeniem. Spróbuj ponownie");
                        break;
                    default:
                        setError("Coś poszło nie tak. Spróbuj ponownie");
                        break;
                }
            }
            else{
                setError(error);
            }});
    }

    useEffect(() => {
        if((counter + 1) % 50 === 0){
            setCounter(0);
            updateThisCrapness(id);
        }
        setCounter(counter+1);
    }, [noteContent]);

    return <SectionContainer>
        <DisplayNoteContainer className="block-center">
            <DisplayNoteWrapper className="block-center">
            {error.length > 0 ? <NotSignedInHeader className="block-center">
                    {error}
                </NotSignedInHeader> : <>
                <DisplayNoteHeader className="block-center">
                    {title}
                </DisplayNoteHeader>
                <DisplayNoteTextarea className="block-center"
                value={noteContent} placeholder="Treść notatki..."
                onChange={(e) => {changeTheNote(e)}}/></>}
            </DisplayNoteWrapper>
        </DisplayNoteContainer>
    </SectionContainer>;
};

export default DisplayNote;