import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import { FooterContainer, NaviContainer, ContainerView, HeaderContainer, BodyContainer } from '../Costum-Styled/global-styled';
export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    const auth = getAuth();
    return (
        <div>
            <ContainerView>
                <HeaderContainer>
                    <NaviContainer>
                        <div>
                            <h1>Dierenambulance Agenda</h1>
                            <div>
                                <button>
                                    <Link to={'/aanmeld'}>Aanmeld</Link>
                                </button>
                                <button>
                                    <Link to={'/afmeld'}>Afmeld</Link>
                                </button>
                                <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
                            </div>
                        </div>
                    </NaviContainer>
                </HeaderContainer>
                <BodyContainer>
                    <Iframe url="https://docs.google.com/spreadsheets/d/1UFzCuBSBzQdjTpzsshrh2BtXnJhmNcQCczyK5KW3VSs" width="1280px" height="920px" display="block" position="relative" />
                </BodyContainer>
                <FooterContainer>
                    <p>2022 © By Arjan Huibert Looren de Jong</p>
                </FooterContainer>
            </ContainerView>
        </div>
    );
};

export default HomePage;
