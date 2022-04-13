import React from 'react';
import { NavBar } from '@components/NavBar';
import { Container, Footer, Paragraph } from './styles';

function Layout({children}:iProps){
    return(
        <>
            <NavBar/>
            <Container>
                {children}
            </Container>
            <Footer>
                <Paragraph>
                    {'Jose Morales <jmg24a@gmail.com>'}
                </Paragraph>
            </Footer>
        </>
    )
}

interface iProps{
    children: React.ReactNode
}


export { Layout }