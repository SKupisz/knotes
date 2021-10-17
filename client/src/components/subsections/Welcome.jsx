import React from "react";

import { SectionContainer } from "../../styled/general.jsx";
import { WelcomeIntroSection, WelcomeIntroWrapper, WelcomeDesc } from "../../styled/welcome.jsx";

import WelcomeHeaderWrapper from "../support/welcome/Header.jsx";
import CreateComponent from "../support/welcome/CreateComponent.jsx";

const Welcome = ({background, createImg}) => {
    return <SectionContainer>
        <WelcomeIntroSection backgroundsrc={background}>
            <WelcomeIntroWrapper>
                <WelcomeHeaderWrapper/>
                <WelcomeDesc className="block-center">
                    Edytowanie notatek w czasie rzeczywistym
                </WelcomeDesc>
                <CreateComponent background={createImg}/>
            </WelcomeIntroWrapper>
        </WelcomeIntroSection>
    </SectionContainer>;
};

export default Welcome;