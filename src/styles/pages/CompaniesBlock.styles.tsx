import styled from 'styled-components'

export const Section = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
    background-color: #161616;
    @media (max-width: 1600px) {
        height: 100%;
    }
`
export const BlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
`

export const Circle = styled.div`
    display: flex;
    flex-direction: column;
    width: 20px;
    height: 25px;
    border-radius: 100%;
    z-index: 1;
    border: 4px solid #00c2ff;
`

export const Line = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 20px;
    border: 2px solid #00c2ff;
`

export const LineContainer = styled.div`
    position: relative;
    display: flex;
    height: 180vh;
    gap: 39.6vh;
    right: 8rem;
    align-items: center;
    align-self: center;
    flex-direction: column;
    &:hover > div {
        border-image: linear-gradient(93.11deg, #00c2ff 15.03%, #ff75f4 83.95%)
            1;
        border-radius: 100% !important;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const AnimatedGradientText = styled.h1`
    color: #00c2ff;
    background-image: linear-gradient(93.11deg, #00c2ff 15.03%, #ff75f4 83.95%);
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
