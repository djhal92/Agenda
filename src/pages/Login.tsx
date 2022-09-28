import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FooterContainer, NaviContainer, ContainerView, HeaderContainer, BodyContainer } from '../Costum-Styled/global-styled';

const LoginButton = styled.button`
    width: 175px;
    height: 50px;
    color: white;
    background-color: black;
    border-radius: 7.5px;
`;

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    return (
        <>
            <ContainerView>
                <HeaderContainer>
                    <NaviContainer>
                        <div>
                            <h1>Dierenambulance Agenda</h1>
                        </div>
                    </NaviContainer>
                </HeaderContainer>
                <BodyContainer>
                    <LoginButton onClick={() => signInWithGoogle()} disabled={authing}>
                        Sign in with Google
                    </LoginButton>
                </BodyContainer>
                <FooterContainer>
                    <p>2022 © By Arjan Huibert Looren de Jong</p>
                </FooterContainer>
            </ContainerView>
        </>
    );
};

export default LoginPage;
