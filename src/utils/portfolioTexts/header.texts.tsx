import Image from 'next/image'
import {
    githubIcon,
    linkedinIcon,
    heartIcon,
} from '@/assets/icons'

export const navItems = ['About', 'Skills', 'Projects']

export const mediaItems = [
    {
        image: <Image src={githubIcon} alt="github" width="30" />,
        title: 'Github',
        url: 'www.github.com/rtonycloud',
    },
    {
        image: <Image src={linkedinIcon} alt="Linkedin" width="30" />,
        title: 'LinkedIn',
        url: 'www.linkedin.com/in/tony-rivera-full-stack-engineer',
    },
]

export const buttonText = [
    {
        image: <Image src={heartIcon} alt="hello" width="20" />,
        text: 'Download Resume',
    },
]
