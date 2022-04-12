import Link from 'next/link';
import React from 'react';

function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>
                        <a>
                            home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        <a>
                            About
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href={'/products'} >
                        <a>
                            products
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export { NavBar }

{/* <Link href="/about"  prefetch={ false } > <a> About </a> </Link> */}