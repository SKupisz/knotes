import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { SectionContainer } from "../../styled/general.jsx";
import { AllNotesContainer, AllNotesHeader, AllNotesWrapper,
    NotSignedInContainer, NotSignedInHeader, NotSignedInLink } from "../../styled/allnotes.jsx";

import SingleNoteRow from "../support/notes/singleNote.jsx";

const AllNotes = ({API_URL, username_cookies, currentData}) => {

    const [isSignedIn, setIsSignedIn] = useState(null);
    const [notesList, setNotesList] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        if(username_cookies["username"] !== undefined){
            if(username_cookies["username"]["email"] !== undefined && username_cookies["username"]["token"] !== undefined){
                setIsSignedIn(true);
            }
            else{
                setIsSignedIn(false);
            }
        }
        else if(currentData !== null){
            if(currentData["email"] !== undefined && currentData["email"].length > 0 
            && currentData["token"] !== undefined && currentData["token"].length > 0) setIsSignedIn(true);
            else setIsSignedIn(false);
        }
        else setIsSignedIn(false);
    }, [username_cookies, currentData]);

    useEffect(() => {
        if(isSignedIn) loadTheData();
    }, [isSignedIn]);

    const loadTheData = () => {
        axios.post(`${API_URL}/notes/notes`, {
            email: username_cookies["username"] === undefined ? currentData["email"] : username_cookies["username"]["email"],
            token: username_cookies["username"] === undefined ? currentData["token"] : username_cookies["username"]["token"]
        }).then((response) => {
            const data = response["data"];
            setNotesList(data);
        })
        .catch((error) => {
            if(error.response !== undefined && Object.keys(error.response).indexOf("status") !== -1){
                switch(error.response.status){
                    case 401:
                        setError("Nieautoryzowane wejście. Spróbuj ponownie");
                        break;
                    case 404: 
                        setError("Brak notatek w bazie. Spróbuj ponownie");
                    default:
                        setError("Połączenie przerwane. Spróbuj ponownie");
                        break;
                }
            }
            else setError("Coś poszło nie tak. Spróbuj ponownie");
        });
    };

    return <SectionContainer>
        {isSignedIn === null ? null : isSignedIn === true ? <AllNotesContainer className="block-center">
            <AllNotesHeader className="block-center">
                Twoje notatki
            </AllNotesHeader>
            <AllNotesWrapper className="block-center">
                {error.length > 0 ? <NotSignedInHeader className="block-center">
                    {error}
                </NotSignedInHeader> : notesList.map((elem, ind) => 
                <SingleNoteRow key={"note"+ind} data={{header: elem["title"], id: elem["_id"]}} 
                API_URL={API_URL} launchAgainCallback = {() => loadTheData()}/>)}
            </AllNotesWrapper>
        </AllNotesContainer> : <NotSignedInContainer className="block-center">
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

export default AllNotes;