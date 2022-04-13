import Image from 'next/image';
import React from 'react';
import { Li } from './Link';
import { Nav, Ul } from './styles';
import logo from '../../img/avocado.jpg'


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