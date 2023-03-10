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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    color: white;
`
export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    gap: 15px;
    flex-wrap: wrap;
    @media (max-width: 1600px) {
        flex-wrap: wrap;
        margin: 15px 0px;
    }
    @media (max-width: 960px) {
        flex-wrap: wrap;
        width: 80%;

    }
`

export const AnimatedGradientText = styled.h1`
    display: flex;
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
