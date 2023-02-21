import styled from 'styled-components'
import { devices } from '../../theme'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
    background-color: #161616;
    position: relative;
`

export const SkillsSlider = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    /* border: 1px solid green; */
`
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1250px;
    height: 50vh;
    position: relative;
    /* border: 1px solid red; */
    @media (max-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`
export const Skills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    @media (min-width: 100px) {
        width: 200px;
        flex-direction: row;
        justify-content: center;
    }
    @media (min-width: 1200px) {
        width: 220px;
        flex-direction: row;
        justify-content: center;
    }
`

export const LeftArrow = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: translate(0, -50%);
    right: 10rem;
    top: 18em;
    color: white;
    background-color: white;
    z-index: 1;
    cursor: pointer;
    border: 1px solid #fff;
    background: rgba(0, 194, 255, 0.85);
    &:hover {
        background: linear-gradient(
            92.61deg,
            rgba(0, 194, 255, 0.85) 7.28%,
            rgba(255, 117, 244, 0.799) 91.4%
        );
    }
`

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(0, -50%);
    right: 32;
    font-size: 45px;
    color: white;
    z-index: 1;
    cursor: pointer;
    &:hover {
        background: linear-gradient(
            92.61deg,
            rgba(0, 194, 255, 0.85) 7.28%,
            rgba(255, 117, 244, 0.799) 91.4%
        );
    }
`

export const BottomLeftCircles = styled.div`
    width: 28.3px;
    height: 28.3px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    cursor: pointer;
    background-color: #00c2ff;
    @media ${devices.laptop}, ${devices.tablet}, ${devices.mobileL} {
    }
`
export const BottomRightCircles = styled.div`
    width: 28.3px;
    height: 28.3px;
    border-radius: 50%;
    border: 1px solid #ffffff;
    cursor: pointer;
    @media ${devices.laptop}, ${devices.tablet}, ${devices.mobileL} {
    }
`

export const ButtonsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    ${BottomLeftCircles}:hover,${BottomRightCircles}:hover {
        background: linear-gradient(
            92.61deg,
            rgba(0, 194, 255, 0.85) 7.28%,
            rgba(255, 117, 244, 0.799) 91.4%
        );
    }
`

export const AnimatedGradientText = styled.h1`
    display: flex;
    position: relative;
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
`
