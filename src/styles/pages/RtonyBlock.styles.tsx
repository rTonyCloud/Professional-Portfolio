import { profileCircleIcon } from '@/assets/icons'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-width: 1250px;
    height: 70vh;
`

export const HeaderWrapper = styled.div`
    display: flex;
`

export const FirstSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: -50px;
    left: 300px;
`

export const SecondSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 400px;
    left: 300px;
`

export const FirstSectionTitle = styled.div`
    display: flex;
    align-content: center;
    position: relative;
    top: 50px;
`

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

export const YearsOfExperience = styled.div`
    display: flex;
    gap: 10px;
    position: relative;
`

export const ProjectsCompleted = styled.div`
    display: flex;
    gap: 10px;
`

export const ProfileWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 300px;
    top: -200px;
`

export const ProfileImage = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
