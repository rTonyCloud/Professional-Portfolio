import Image from 'next/image'
import {
    footerGithubIcon,
    footerGmailIcon,
    footerLinkedinIcon,
} from '@/assets/icons'

const footerCopyRight =
    'All rights reserved © 2023 - SOFTWARE DEVELOPER - by rTONYCLOUD'

const footerLinks = [
    {
        image: <Image src={footerGmailIcon} alt="Gmail" width="50" />,
        title: 'Gmail',
        url: 'mailto:',
    },
    {
        image: <Image src={footerLinkedinIcon} alt="Linkedin" width="50" />,
        title: 'Linkedin',
        url: 'www.linkedin.com/in/tony-rivera-full-stack-engineer',
    },
    {
        image: <Image src={footerGithubIcon} alt="Github" width="50" />,
        title: 'Github',
        url: 'www.github.com/rtonycloud',
    },
]

export { footerCopyRight, footerLinks }