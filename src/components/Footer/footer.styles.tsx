import styled from 'styled-components'

export const footerContainer = styled.div`
    width: 100vw;
    min-width: 1250px;
    height: 200px;
    bottom: 0;
    position: absolute;
    background: linear-gradient(130.36deg, #000000 0%, #272727 44.03%, #494949 99.99%, #727272 100%);
`

export const line = styled.hr`
    position: absolute;
    width: 50%;
    left: 25%;
    top: 10px;
    background: #8383831A;
    border: 5px solid rgba(131, 131, 131, 0.1);
`

export const footerContent = styled.div`
    display: flex;
`;