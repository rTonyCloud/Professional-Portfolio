import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: calc(32.5rem - 5px);
    height: calc(42.69rem - 5px);
    cursor: pointer;
    border-radius: 20px;
    z-index: auto;
    overflow: hidden;
    box-shadow: 0px 0 15px 0 rgba(248, 248, 248, 1);
    transition: all 0.3s ease-in-out;
    border: 1px solid #ffffff;
    &:hover {
        box-shadow: 0px 0 15px 0 rgba(0, 194, 255, 1);
        transform: scale(1.05);
    }
`

export const CardImage = styled.div`
    display: flex;
    position: relative;
    & .image {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
        border-radius: 20px 20px 0 0;
    }
    z-index: 1;
`

export const CardBody = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background: #00c2ff;
    flex-direction: column;
    border-radius: 0 0 20px 20px;
    
`

export const CardBodyContent = styled.div`
    display: flex;
    border-radius: 20px;
    width: 100%;
    height: auto;
    z-index: 1;
    
    @media (max-width: 870px) {

    }
`
export const CardBodyRightWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 100%;
    @media (max-width: 870px) {
        width: 100%;
    }
`

export const Button = styled.button`
    display: flex;
    background: #00c2ff;
    cursor: pointer;
    width: 100%;
    border-radius: 20px;
    height: auto;
    align-items: center;
    justify-content: center;
    z-index: -1;
`
