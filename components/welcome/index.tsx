import React from 'react';
import { Container, Title, Paragraph } from './styled'

function Welcome(){
    return(
        <Container>
            <Title>Avocado Fruits</Title>
            <div>
                <Paragraph>You need an avocado today?</Paragraph>
            </div>
        </Container>
    )  
}

export { Welcome }