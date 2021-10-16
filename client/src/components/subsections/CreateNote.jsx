import React, {useState} from "react";

import { SectionContainer } from "../../styled/general.jsx";
import { CreateNoteContainer, CreateNoteHeader, CreateNotePanelWrapper,
    CreateNoteInput, CreateNoteSubmitBtn } from "../../styled/creatingNotePanel.jsx";

const CreateNotePanel = () => {

    const [title, setTitle] = useState("");

    return <SectionContainer>
        <CreateNoteContainer>
            <CreateNoteHeader className="block-center">
                Stwórz notatkę real-time
            </CreateNoteHeader>
            <CreateNotePanelWrapper className="block-center">
                <CreateNoteInput type="text" placeholder="Tytuł notatki..." className="block-center" 
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
                <CreateNoteSubmitBtn className="block-center">
                    Stwórz notatkę
                </CreateNoteSubmitBtn>
            </CreateNotePanelWrapper>
        </CreateNoteContainer>
    </SectionContainer>;
};

export default CreateNotePanel;