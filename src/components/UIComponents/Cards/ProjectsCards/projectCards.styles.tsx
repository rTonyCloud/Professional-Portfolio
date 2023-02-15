import styled from 'styled-components'

export const ProjectCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    height: calc(42vh - 50px);
    width: calc(27vw - 45px);
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 10px 5px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        border-image: linear-gradient(
                90.17deg,
                #00c2ff 14.29%,
                rgba(255, 117, 244, 0.63) 89.66%
            )1;
        border-radius: 14px !important;
    }
`

export const ProjectImage = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    z-index: 1;
    top: 3px;
    left: 0.9px;
`

export const ProjectBody = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 100%;
    background: rgba(76, 76, 76, 0.66);
    border-radius: 0px 0px 1px 1px;
    z-index: 2;
`

export const BodyTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`
