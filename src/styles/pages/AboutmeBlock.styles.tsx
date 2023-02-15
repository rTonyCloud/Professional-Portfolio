import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 50vh;
`

export const AboutText = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 450px;
`


export const Card = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 450px;
    border-radius: 6px;
    bottom: 300px;
    margin: 0 auto;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #4F4F4F;
    width: 450px;
    height: 137px;
    justify-content: center;
    position: relative;
    left: 75px;
    `

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
`

export const CardImage = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 24px;
    margin-left: 100px;
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
    text-align: left;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
`