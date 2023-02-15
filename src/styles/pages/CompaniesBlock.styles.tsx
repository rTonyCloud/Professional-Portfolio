import styled from 'styled-components'

export const Block = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 200vh;
    background-color: #161616;
    border: 0px solid green;
`
export const BlockWrapper = styled.div`
display: flex;
flex-direction: row;
position: relative;
border: 0px solid red;
`

export const LineContainer = styled.div`
    position: relative;
    display: flex;
    height: 150vh;
    gap: 20vh;
    align-items: center;
    align-self: center;
    border: 0px solid red;
    flex-direction: column;
  `
export const Line = styled.div `
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 5px;
    background: #00C2FF;
    `

   
  
    export const Circle = styled.div`
        display: flex;
        flex-direction: column;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid #00C2FF;
        @media (min-width: 1920px) {

        }
    `
 export const CardWrapper = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
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