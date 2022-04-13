import styled from 'styled-components'
import { colorPalette } from '../../css'

const Nav = styled.nav`
    display: flex;
    margin: 20px auto;
    height: 60px;
    align-items: center;
    background-color: ${colorPalette.secondary};
    border-bottom: solid 1px ${colorPalette.shadow};
`

const Ul = styled.ul`
    margin: 0; 
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`

export { Nav, Ul }