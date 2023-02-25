import styled from 'styled-components'
import { VideoSelector } from '../../../../styles/pages/AboutMeBlock.styles'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 20px 0 rgb(254, 254, 254);
    transition: all 1s ease-in-out;
    :hover{
    box-shadow: 0 0 20px 0  #00c2ff !important;
    }
`