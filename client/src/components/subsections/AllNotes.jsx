import React from "react";
import { Link } from "react-router-dom";

import { SectionContainer } from "../../styled/general.jsx";
import { AllNotesContainer, AllNotesHeader, AllNotesWrapper,
    NotSignedInContainer, NotSignedInHeader, NotSignedInLink } from "../../styled/allnotes.jsx";

import SingleNoteRow from "../support/notes/singleNote.jsx";

const AllNotes = () => {

    const isSignedIn = false;

    return <SectionContainer>
        {isSignedIn === true ? <AllNotesContainer className="block-center">
            <AllNotesHeader className="block-center">
                Twoje notatki
            </AllNotesHeader>
            <AllNotesWrapper className="block-center">
                <SingleNoteRow data={{header: "Tytuł notatki"}}/>
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