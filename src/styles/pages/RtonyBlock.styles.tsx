import { profileCircleIcon } from '../../../public/icons'
import styled, { keyframes } from 'styled-components'

// animation for the gradient text
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`
//page layout
export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100vh;
    @media (max-width: 1600px) {
        height: 100%;
        padding-top: 100px;
    }
`

export const HeaderWrapper = styled.div`
    display: flex;

`

export const FirstSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -50px;
    left: 300px;
    @media (max-width: 1600px) {
        top: -120px;

    }
`

export const SecondSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 400px;
    left: 300px;
    @media (max-width: 1600px) {
        top: 50rem;
        align-items: center;
        justify-content: center;
    }
`

export const FirstSectionTitle = styled.div`
    display: flex;
    align-content: center;
    position: relative;
    top: 50px;
`



export const YearsOfExperience = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const ProjectsCompleted = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`


export const DescriptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    @media (max-width: 1600px) {
        border: 1px solid red;
        display: flex;
        align-items: center;
        flex-direction: row;
        width: 32em;
        
    }
`

// profile wrapper
export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 300px;
    top: -200px;
    @media (max-width: 1600px) {
        right: 350px;
    }
`

export const ProfileCircle = styled.div`
    display: flex;
    position: absolute;
`

export const ProfileImage = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
`

export const ProfileIcons = styled.div`
    display: flex;
    position: relative;
`

export const NodejsIcon = styled.div`
    display: flex;
    position: absolute;
    top: 350px;
    right: 400px;
`

export const ReactIcon = styled.div`
    display: flex;
    position: absolute;
    top: 100px;
    right: 100px;
`

export const TypescriptIcon = styled.div`
    display: flex;
    position: absolute;
    top: 350px;
    right: 100px;
`

// gradient text
export const AnimatedGradientText = styled.h1`
    color: #00c2ff;
    background-image: linear-gradient(
        92.61deg,
        rgba(0, 194, 255, 0.85) 7.28%,
        rgba(255, 117, 244, 0.799) 91.4%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 15s infinite linear;
    font-family: 'Montserrat', 'Roboto';
    font-feature-settings: 'kern';
    font-size: 78px;
    font-weight: 700;
    overflow-wrap: break-word;
    text-align: center;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
    @media (max-width: 1600px) {
        margin-top: -40px;
    }
`