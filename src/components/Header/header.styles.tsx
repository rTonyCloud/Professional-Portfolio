import styled from 'styled-components'

export const headerWrapper = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 20vh;
    border: 1px solid red;
`

export const headerContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    color: white;
    height: 150px;
    gap: 35px;
    border: 1px solid white;
    font-size: 2em;
`

export const navContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid blue;
    cursor: pointer;
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

export const mediaItems = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
`

export const logoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -110px;
`
export const Button = styled.button`
    display: flex;
    cursor: pointer;
`
