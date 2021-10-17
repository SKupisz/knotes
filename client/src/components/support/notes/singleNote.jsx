import React from "react";
import { Link } from "react-router-dom";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import axios from "axios";

import { NoteWrapper, NoteTitle, NoteOptions, NoteOptionWrapper } from "../../../styled/allnotes.jsx";

const SingleNoteRow = ({data, API_URL, launchAgainCallback}) => {

    const deleteTheNote = (id) => {
        axios.delete(`${API_URL}/notes/${id}`).then((response) => {
            console.log(response);
            launchAgainCallback();
        }).catch(error => console.log(error));
    };

        return <NoteWrapper className="block-center">
            <NoteTitle>{data["header"]}</NoteTitle>
            <NoteOptions>
                <NoteOptionWrapper>
                    <Link to = {"/note/read/"+data["id"]}>
                        <LaptopChromebookIcon style={{color: "white", fontSize: "2.3em"}} 
                        className="all-notes-icons"/>
                    </Link>
                </NoteOptionWrapper>
                <NoteOptionWrapper>
                    <DeleteForeverIcon style={{color: "red", fontSize: "2.3em"}} 
                    className="all-notes-icons"
                    onClick = {() => deleteTheNote(data["id"])}/>
                </NoteOptionWrapper>
            </NoteOptions>
        </NoteWrapper>;
};

export default SingleNoteRow;