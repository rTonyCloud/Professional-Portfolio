import {
    movebutlers,
    zap,
    rtonycloud,
    moarKett,
    qtumHalvening,
    spinnerNetwork,
} from 'public/images'
import Image from 'next/image'
import { CSSProperties } from 'react'
import { Variant } from '@/components/UIComponents/Typography'

export const ProjectHeader = '<My Projects />'

const togglehandler = () => {
    console.log('clicked')
}

const ProjectCardStyles: CSSProperties = {
    color: 'white',
}

const H5: Variant = 'h5'

export const Projects = [
    {
        id: 1,
        image: rtonycloud,
        title: 'RtonyCloud',
        width: 0,
        height: 349,
        alt: 'Movebutlers',
        sx: ProjectCardStyles,
        variant: H5,
        modal: togglehandler,
    },
    {
        id: 2,
        image: movebutlers,
        title: 'MoveButlers',
        width: 0,
        height: 349,
        alt: 'Movebutlers',
        sx: ProjectCardStyles,
        variant: H5,
        modal: togglehandler,
    },
    {
        id: 3,
        image: qtumHalvening,
        title: 'Qtum Halvening',
        width: 0,
        height: 349,
        alt: 'Qtum-Halvening',
        sx: ProjectCardStyles,
        variant: H5,
        modal: togglehandler,
    },
    {
        id: 4,
        image: zap,
        title: 'Zap Protocol',
        width: 0,
        height: 349,
        alt: 'Zap-Protocol',
        sx: ProjectCardStyles,
        variant: H5,
        modal: togglehandler,
    },
    {
        id: 5,
        image: spinnerNetwork,
        title: 'Spinner Network',
        width: 0,
        height: 349,
        alt: 'Spinner-Network',
        sx: ProjectCardStyles,
        variant: H5,
        modal: togglehandler,
    },
    {
        id: 6,
        image: moarKett,
        title: 'Moar Kett',
        width: 0,
        height: 349,
        alt: 'Moar-Kett',
        sx: ProjectCardStyles,
        variant: H5,
        modal: togglehandler,
    },
]
