import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { FooterContainer, NaviContainer, ContainerView, HeaderContainer, BodyContainer } from '../Costum-Styled/global-styled';
import Iframe from 'react-iframe';

export interface IAfmeldProps {}
const Afmeld: React.FunctionComponent<IAfmeldProps> = (props: any) => {
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
                    <Iframe
                        url="https://docs.google.com/forms/d/e/1FAIpQLScHTiXzeaNR8UCgBjT_dtSSo34fHW5J58vtDyzLaHtI43eLQQ/viewform?embedded=true"
                        width="640px"
                        height="439px"
                        display="block"
                        position="relative"
                    />
                    <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
                </BodyContainer>
                <FooterContainer>
                    <p>2022 © By Arjan Huibert Looren de Jong</p>
                </FooterContainer>
            </ContainerView>
        </div>
    );
};

export default Afmeld;
