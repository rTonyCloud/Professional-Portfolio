import styled from 'styled-components'

export const headerWrapper = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 20vh;
`

export const headerContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    color: white;
    height: 150px;
    gap: 35px;
    font-size: 2em;
`

export const navContent = styled.div`
    display: flex;
    position: relative;
    top: 1.6em;
    flex-direction: row;
    align-items: center;
    height: 50px;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(
            93.11deg,
            #00c2ff 15.03%,
            #ff75f4 83.95%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Montserrat',
        text-rendering: optimizelegibility;
        -moz-osx-font-smoothing: grayscale;
    }
    &:active {
        transform: scale(1.1);
    }
`

export const SecondNav = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    left: 5em;
    gap: 10px;
    align-items: center;
    & > div {
        padding: 0.2em;
        align-items: center;
    }
`

export const MediaItemImage = styled.div`
    &image:hover {
        color: #00c2ff;
    }
`

export const MediaItemTitle = styled.div``

export const mediaItems = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(
            93.11deg,
            #00c2ff 15.03%,
            #ff75f4 83.95%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Montserrat',
        text-rendering: optimizelegibility;
        -moz-osx-font-smoothing: grayscale;
    }
    &:active {
        transform: scale(1.1);
    }
`

export const logoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -110px;
`
export const Button = styled.button`
    display: flex;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(
            93.11deg,
            #00c2ff 15.03%,
            #ff75f4 83.95%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
