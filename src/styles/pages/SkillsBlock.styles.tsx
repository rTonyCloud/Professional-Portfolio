import styled from 'styled-components'
import { devices } from '@/theme'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 450px;
    background-color: #161616;
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid green;
`
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1250px;
    gap: 10px;
    border: 1px solid red;
    @media (max-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`
export const Skills = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid blue;
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
