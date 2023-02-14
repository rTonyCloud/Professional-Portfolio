import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 520px;
    height: 683px
    cursor: pointer;
    border: 2px solid rgb(255, 11, 11);
`

export const CardImage = styled.div`
    display: flex;
    position: relative;
`

export const CardBody = styled.div`
    display: flex;
    height: 200px;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background: #00c2ff;
    flex-direction: column;
`

export const CardBodyBottomWrapper = styled.div`
    display: flex;
    border: 1px solid #eaff00;
    border-radius: 20px;
`
export const CardBodyRightWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
`

export const Button = styled.button`
    display: flex;
    background: #00c2ff;
    cursor: pointer;
    width: 232px;
    border-radius: 20px;
    &:hover{
        border-image: linear-gradient(
                90.17deg,
                #00c2ff 14.29%,
                rgba(255, 117, 244, 0.63) 89.66%
            )1;
        border-radius: 20px !important;
`
