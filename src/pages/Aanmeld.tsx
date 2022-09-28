import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { FooterContainer, NaviContainer, ContainerView, HeaderContainer, BodyContainer } from '../Costum-Styled/global-styled';
import Iframe from 'react-iframe';
export interface IAanmeldProps {}
const Aanmeld: React.FunctionComponent<IAanmeldProps> = (props: any) => {
    const auth = getAuth();

    return (
        <div>
            <ContainerView>
                <HeaderContainer>
                    <NaviContainer>
                        <div>
                            <h1>Dierenambulance Agenda</h1>
                        </div>
                    </NaviContainer>
                </HeaderContainer>
                <BodyContainer>
                    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSfRG34kN4UJ9wsEMnON8wfNjuLURxcOr31scX0VmORWKfTm9g/viewform?embedded=true" width="640px" height="755px" />
                    <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
                </BodyContainer>
                <FooterContainer>
                    <p>2022 © By Arjan Huibert Looren de Jong</p>
                </FooterContainer>
            </ContainerView>
        </div>
    );
};

export default Aanmeld;
