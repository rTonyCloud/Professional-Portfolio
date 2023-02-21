import Image from 'next/image'
import { githubIcon, linkedinIcon, heartIcon } from 'public/icons'

const HeaderTexts = () => {

const NavItems = [
    { title: 'About', url: "#about"  },
    { title: 'Skills', url: "#skills" },
    { title: 'Projects', url: "#projects" },
]

const MediaItems = [
    {
        image: (
            <Image src={githubIcon} alt="github" width="30" className="image" />
        ),
        title: 'Github',
        url: 'https://www.github.com/rtonycloud',
    },
    {
        image: <Image src={linkedinIcon} alt="Linkedin" width="30" />,
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/tony-rivera-full-stack-engineer/',
    },
]

const ButtonText = [
    {
        image: <Image src={heartIcon} alt="hello" width="20" />,
        text: 'Download Resume',
    },
]
 return {NavItems, MediaItems, ButtonText}
}

export default HeaderTexts