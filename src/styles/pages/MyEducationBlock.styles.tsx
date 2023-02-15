import styled from 'styled-components'

export const Section = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Container = styled.div`
color: white;
`


export const AnimatedGradientText = styled.h1`
    color: #00C2FF;
    background-image: linear-gradient(93.11deg, #00C2FF 15.03%, #FF75F4 83.95%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Montserrat', 'Roboto';
    font-feature-settings: 'kern';
    font-size: 49px;
    font-weight: 700;
    overflow-wrap: break-word;
    text-align: center;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
`