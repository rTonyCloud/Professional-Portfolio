import styled from 'styled-components'

export const footerContainer = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 250px;
    bottom: 0;
    position: relative;
    background: #161616;
`

export const line = styled.hr`
    position: absolute;
    width: 50%;
    left: 25%;
    top: 10px;
    background: #8383831A;
    border: 5px solid rgba(131, 131, 131, 0.1);
    position: relative;
`

export const footerContent = styled.a`
    display: flex;
    justify-content: center;
    position: relative;
    top: 50px;
    gap: 50px;
`;


export const footerCopyRight = styled.div`
    display: flex;
    justify-content: center;
    top: 100px;
    position: relative;
    color: white;
`