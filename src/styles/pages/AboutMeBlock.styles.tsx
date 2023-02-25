import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
    @media (max-width: 1600px) {
        max-width: 100%;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 100%;
    @media (max-width: 1600px) {
        position: relative;
        top: 5rem;
        justify-content: center;
        height: 200vh;
    }
`

export const AboutText = styled.div`
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: pre-line;
    margin-left: 60px;
    @media (max-width: 1600px) {
        position: relative;
    }
`

export const Card = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    border-radius: 6px;
    @media (max-width: 1600px) {
       
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 24px;
    top: 20rem;
    @media (max-width: 1600px) {
        position: relative;
        top: 40rem;
        right: 5rem;

    }
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
    color: #00c2ff;
    background-image: linear-gradient(93.11deg, #00c2ff 15.03%, #ff75f4 83.95%);
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
    margin: auto;
`

export const VideoSelector = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
    margin-top: 1rem;
    border-radius: 1rem;
    width: 100%;
    height: 25vh;
    transform: scale(.5);
    transition: all 1s ease-in-out;
    :hover {
        transform: scale(1.1);
        border: 1px solid #00c2ff;
    }
    .Osc-image:active,
    .Osc.image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
    .Sm-image:active,
    .Sm.image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
    .Jci-image:active,
    .Jci.image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
`

export const VideoSelectorItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%
    height: 80%
    margin: 1rem;
    border: 1px solid white;
`