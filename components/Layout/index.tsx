import React from 'react';
import { NavBar } from '@components/NavBar';
import { Container } from './styles';


function Layout({children}:iProps){
    return(
        <>
            <NavBar/>
            <Container>
                {children}
            </Container>
            <footer><p>{'Jose Morales <jmg24a@gmail.com>'}</p></footer>
        </>
    )
}

interface iProps{
    children: React.ReactNode
}


export { Layout }