import styled from 'styled-components'

export const ModalOverlay = styled.div`
    z-index: 9999;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContent = styled.div`
    display: block;
    width: 43.8%;
    height: 70%;
    padding: 1rem;
    border-radius: 1rem;
    
`
