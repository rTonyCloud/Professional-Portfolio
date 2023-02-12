import styled from 'styled-components'
import { devices } from '@/theme'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 450px;
    background-color: #161616;
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid green;
    

`
export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 1250px;
    gap: 10px;
    border: 1px solid red;
    @media  (max-width: 1200px) {
        flex-direction: row;
        justify-content: center;
    }
`
export const Skills = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid blue;
    @media  (min-width: 100px) {
        width: 200px;
        flex-direction: row;
        justify-content: center;
        
    }
    @media  (min-width: 1200px) {
        width: 220px;
        flex-direction: row;
        justify-content: center;
        
    }
`
