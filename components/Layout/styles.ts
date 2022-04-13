import { colorPalette } from '@styles/index';
import styled from 'styled-components';

const Container = styled.main`
    padding: 20px 20px;
    margin: 20px 20px;
`

const Footer = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0px;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${colorPalette.secondary};
`

const Paragraph = styled.p`
    font-size: 0.8rem;
`

export { Container, Footer, Paragraph }