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