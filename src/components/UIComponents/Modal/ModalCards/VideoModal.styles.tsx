import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const VideoSelector = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
    margin-top: 1rem;
    border-radius: 1rem;
    width: 100%;
    height: 25vh;
    transform: scale(.5);
    transition: all 1s ease-in-out;
    :hover {
        transform: scale(1.1);
        border: 1px solid #00c2ff;
    }
    .Osc-image:active,
    .Osc.image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
    .Sm-image:active,
    .Sm.image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
    .Jci-image:active,
    .Jci.image:hover {
        transform: scale(0.9);
        cursor: pointer;
    }
`

export const VideoSelectorItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%
    height: 80%
    margin: 1rem;
    border: 1px solid white;
`
