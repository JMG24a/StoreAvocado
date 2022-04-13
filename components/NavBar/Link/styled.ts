import styled from 'styled-components'
import { colorPalette } from '@styles/index'

const Anchor = styled.a`
    padding: 10px;
    &[aria-current] {
        padding: 10px;
        color: black;
        border-bottom: 1px solid black; 
    }
    :focus{
        padding: 10px;
        background-color: ${colorPalette.primary_soft};
        border-radius: 10px;
        color: #fff;
        outline: none;
        box-shadow: 5px 5   px 1px ${colorPalette.shadow};
    }
    :hover{
        padding: 10px;
        background-color: ${colorPalette.primary_soft};
        border-radius: 10px;
        color: #fff;
    }   
`

export { Anchor }