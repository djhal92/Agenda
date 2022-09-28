import styled from 'styled-components';

const ContainerView = styled.main`
    display: grid;
    grid-template-columns: 640px 640px 640px;
    grid-template-rows: 241px 361px 361px 198px;
    justify-content: center;
    background-color: #b6b6b6;
`;

const HeaderContainer = styled.div`
    display: grid;
    grid-column: 1/3;
    grid-row: 1/2;
`;

const BodyContainer = styled.div`
    display: grid;
    grid-column: 1/3;
    grid-row: 2/3;
    justify-content: center;
`;

const FooterContainer = styled.div`
    display: grid;
    grid-column: 1/3;
    grid-row: 3/4;
    justify-content: center;
    margin-bottom: 1px;
`;

const NaviContainer = styled.div`
    display: flex;
    position: static;
    top: 0;
    margin-top: 0px;
    height: 125px;
    justify-content: center;
    align-items: center;
    background-color: #1e5e1e;
    color: #d48d08;
`;

export { FooterContainer, NaviContainer, ContainerView, HeaderContainer, BodyContainer };
