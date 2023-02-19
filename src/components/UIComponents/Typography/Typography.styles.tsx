import styled, { css } from 'styled-components'

export const baseStyles = css`
    font-family: Montserrat | Roboto;
    font-weight: 400;
    color: white;
`

export const H1 = styled.h1`
    ${baseStyles};
    font-size: 78px;
    font-weight: 500;
`

export const H2 = styled.h2`
    ${baseStyles};
    font-size: 57px;
    font-weight: 500;
`

export const H3 = styled.h3`
    ${baseStyles};
    font-size: 47px;
    font-weight: 500;
`

export const H4 = styled.h4`
    ${baseStyles};
    font-size: 39px;
    font-weight: 500;
`

export const H5 = styled.h5`
    ${baseStyles};
    font-size: 33px;
    font-weight: 500;
`

export const H6 = styled.h6`
    ${baseStyles};
    font-size: 25px;
    font-weight: 500;
`

export const P1 = styled.p`
    ${baseStyles};
    font-size: 20px;
`

export const P2 = styled.p`
    ${baseStyles};
    font-size: 18px;
`
