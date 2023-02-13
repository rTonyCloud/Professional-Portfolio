import styled from 'styled-components'

export const LineContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 80vh;
    width: 5vw;
    border: 20px solid red;
  `
  
export const Line = styled.div `
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 5px;
    background: #00C2FF;
    flex-direction: column;
  `
  
    export const Circle = styled.div`
        display: flex;
        position: relative;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid #00C2FF;
        @media (min-width: 1920px) {

        }
    `

    export const Wrapper = styled.div`
        gap: 150px;
        display: flex;
        top: 0;
        bottom: 0;
        left: 49.4%;
        flex-direction: column;
        position: relative;
    `