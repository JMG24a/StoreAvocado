import styled from "styled-components";
import { colorPalette } from "..";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 1.4rem;
`

const Button = styled.button`
    width: 20%;
    height: 30px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: ${colorPalette.primary};
    border: none;
    box-shadow: 1px 1px 1px black;
    color: white;
`

export {Section, Paragraph, Button}