import styled from 'styled-components'

export const footerContainer = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 50vh;
    bottom: 0;
    position: relative;
    background: #161616;
    display: flex;
    flex-direction: column;
`

export const line = styled.hr`
    display: flex;
    justify-content: center;
    position: relative;
    width: 75vw;
    top: 10px;
    background: #8383831a;
    border: 5px solid rgba(131, 131, 131, 0.1);
`

export const footerContent = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50px;
    gap: 50px;
`

export const footerCopyRight = styled.div`
    display: flex;
    justify-content: center;
    top: 100px;
    position: relative;
    color: white;
`
