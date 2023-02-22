import Link from 'next/link'
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 100%;
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    color: white;
    height: 150px;
    gap: 35px;
    font-size: 2em;
`

export const NavContent = styled(Link)`
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: white;
    top: 1.6em;
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
`

export const MediaItemImage = styled.div`
    display: flex;
    position: relative;
    top: 0.1em;
    align-items: center;
    &image:hover {
        color: #00c2ff;
    }
`

export const MediaItemTitle = styled.div``

export const MediaItems = styled.a`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    text-decoration: none;
    color: white;
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

export const LogoWrapper = styled.div`
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
