import { colorPalette } from '@styles/index'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    background-color: ${colorPalette.secondary};
    height: 200px;
    cursor: pointer;
    box-shadow: 6px 5px 6px #80808073;
`

const CardDescription = styled.div`
    width: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: 2fr 50%;
    background-color: ${colorPalette.primary_soft};
    position: absolute;
    bottom: 0px;
`

const Price = styled.p`
    grid-column: 1/2;
    color: white;
    font-size: 0.8rem;
`

const Sku = styled.p`
    grid-column: 2/3;
    color: white;
    font-size: 0.8rem;
`


const Grid = styled.div`
    display: grid;
    width: 100%;
    margin: 0 auto;
    gap: 20px;

`


export { Container, Grid, CardDescription, Price, Sku}