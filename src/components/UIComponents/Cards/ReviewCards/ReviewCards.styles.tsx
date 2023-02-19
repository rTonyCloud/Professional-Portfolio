import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: calc(40% - 20px);
    height: calc(100% - 20px);
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    width: calc(100% - 20px);
    border-radius: 10px;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    width: 50%;
    height: 100px;
    position: relative;
`

export const Title = styled.div`
    display: flex;
    position: absolute;
    left: 70px;
    z-index: 1;
`

export const Company = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    left: 70px;
    z-index: 1;
`

export const Description = styled.div`
    display: flex;
    position: relative;
    width: 20em;
    text-align: left;
    
`
export const Image = styled.div``

export const Stars = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
`
