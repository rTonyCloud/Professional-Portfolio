import styled from 'styled-components'


export const Card = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: calc(50% - 20px);
    height: calc(30% - 30px);

`
export const Image = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    .image {
        width: 100%;
        object-fit: contain;
        background-size: contain;
    }
`

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 1;
    
`

export const Title = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 1;
    top: 200px;
`

export const Description = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    z-index: 1;
    top: 200px;
`

export const Button = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 200px;
`
