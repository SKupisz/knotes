import React from "react";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { NoteWrapper, NoteTitle, NoteOptions, NoteOptionWrapper } from "../../../styled/allnotes.jsx";

const SingleNoteRow = ({data}) => {
        return <NoteWrapper className="block-center">
            <NoteTitle>{data["header"]}</NoteTitle>
            <NoteOptions>
                <NoteOptionWrapper>
                    <LaptopChromebookIcon style={{color: "white", fontSize: "2.3em"}} className="all-notes-icons"/>
                </NoteOptionWrapper>
                <NoteOptionWrapper>
                    <DeleteForeverIcon style={{color: "red", fontSize: "2.3em"}} className="all-notes-icons"/>
                </NoteOptionWrapper>
            </NoteOptions>
        </NoteWrapper>;
};

export default SingleNoteRow;