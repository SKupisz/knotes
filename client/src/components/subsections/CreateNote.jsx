import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { SectionContainer } from "../../styled/general.jsx";
import { CreateNoteContainer, CreateNoteHeader, CreateNotePanelWrapper,
    CreateNoteInput, CreateNoteSubmitBtn } from "../../styled/creatingNotePanel.jsx";
import {NotSignedInContainer, NotSignedInHeader, NotSignedInLink } from "../../styled/allnotes.jsx";

const CreateNotePanel = ({username_cookies, currentData, API_URL}) => {

    const [title, setTitle] = useState("");
    const [isSignedIn, toggleIsSignedIn] = useState(null);

    const history = useHistory();

    useEffect(() => {
        if(username_cookies["username"] !== undefined){
            if(username_cookies["username"]["email"] !== undefined && username_cookies["username"]["token"] !== undefined){
                toggleIsSignedIn(true);
            }
            else toggleIsSignedIn(false);
        }
        else if(currentData !== null){
            if(currentData["email"] !== undefined && currentData["email"].length > 0 
            && currentData["token"] !== undefined && currentData["token"].length > 0) toggleIsSignedIn(true);
            else toggleIsSignedIn(false);
        }
        else{
            toggleIsSignedIn(false);
        }
    }, [username_cookies, currentData]);

    const CreateTheNote = () => {
        if(title.length > 0){
            const data = {
                title: title,
                token: username_cookies["username"] === undefined ? currentData["token"] : username_cookies["username"]["token"]
            };

            axios.post(`${API_URL}/notes/createNote`, data)
            .then((response) => {
                console.log(response);
                history.push("/note/read/"+response["data"]["createdNote"]["_id"]);
            })
            .catch((error) => console.log(error));
        }
    };

    return <SectionContainer>
        {isSignedIn === null ? null : isSignedIn === true ?        
        <CreateNoteContainer>
            <CreateNoteHeader className="block-center">
                Stwórz notatkę real-time
            </CreateNoteHeader>
            <CreateNotePanelWrapper className="block-center">
                <CreateNoteInput type="text" placeholder="Tytuł notatki..." className="block-center" 
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
                <CreateNoteSubmitBtn className="block-center" onClick = {() => CreateTheNote()}>
                    Stwórz notatkę
                </CreateNoteSubmitBtn>
            </CreateNotePanelWrapper>
        </CreateNoteContainer> :         
        <NotSignedInContainer className="block-center">
                <NotSignedInHeader className="block-center">
                    Nie jesteś zalogowany
                </NotSignedInHeader>
                <Link to = "/signin">
                    <NotSignedInLink className="block-center">
                        Zaloguj się
                    </NotSignedInLink>
                </Link>
            </NotSignedInContainer>}

    </SectionContainer>;
};

export default CreateNotePanel;