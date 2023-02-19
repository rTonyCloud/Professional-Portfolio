import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 450px;
    border-radius: 6px;
    bottom: 300px;
    margin: 0 auto;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #4f4f4f;
    border: 2px solid #4f4f4f;
    justify-content: center;
    position: relative;
    cursor: pointer;
    width: 450px;
    height: 137px;
    left: 75px;
    &:hover{
        border-image: linear-gradient(
                90.17deg,
                #00c2ff 14.29%,
                rgba(255, 117, 244, 0.63) 89.66%
            )
            1;
        border-radius: 1px !important
    }
    &:active {
        transform: scale(1.05);
    }
`

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
`

export const CardImage = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 24px;
    margin-left: 100px;
`
