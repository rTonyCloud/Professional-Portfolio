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

export const ProfileCircle = styled.div`
    display: flex;
    position: absolute;
`

export const ProfileImage = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 20px;
`

export const ProfileIcons = styled.div`
    display: flex;
    position: relative;
`

export const NodejsIcon = styled.div`
    display: flex;
    position: absolute;
    top: 350px;
    right: 400px;
`

export const ReactIcon = styled.div`
    display: flex;
    position: absolute;
    top: 100px;
    right: 100px;

`

export const TypescriptIcon = styled.div`
    display: flex;
    position: absolute;
    top: 350px;
    right: 100px;
`
