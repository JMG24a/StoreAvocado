import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
`

const Title = styled.h1`
    margin: 0 auto;
    font-size: 2.0rem;
    @media (min-width: 764px) {
        font-size: 2.6rem;
    }
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 0.8rem;
    @media (min-width: 764px) {
        font-size: 1.2rem;
    }
`

export { Container, Title, Paragraph }