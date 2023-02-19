import styled, { keyframes } from 'styled-components'

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`

export const AnimatedGradientText = styled.h6`
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
    font-size: 16px;
    font-weight: 700;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
`
