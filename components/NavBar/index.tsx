import React from 'react';
import { Li } from './Link';
import { Nav, Ul } from './styles';


function NavBar(){
    return(
        <Nav>
            <Ul>
                <Li
                    href='/'
                    name='StoreAvocado'
                />
                <Li
                    href='/products'
                    name='basket'
                />
            </Ul>
        </Nav>
    )
}

export { NavBar }

{/* <Link href="/about"  prefetch={ false } > <a> About </a> </Link> */}