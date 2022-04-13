import React, { KeyboardEvent, useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Anchor } from './styled'

function Li({href, name}:IProps){

    const router = useRouter()
    const { asPath } = router

    const [current, setCurrent] = useState<boolean|undefined>(undefined)

    useEffect(()=>{
        if(asPath === href){
            setCurrent(true)
        }else{
            setCurrent(undefined)
        }
    },[asPath])

    const handleClick = (e:KeyboardEvent) => {
        if(e.code === 'Enter'){
            router.push(`${href}`)
        }
    }

    return(
        <li>
            <Link href={href}>
                <Anchor
                    tabIndex={1}
                    onKeyDown={e => handleClick(e)}
                    aria-current={current}
                >
                    {name}
                </Anchor>
            </Link>
        </li>
    )
}

interface IProps{
    href: string,
    name: string
}

export { Li }