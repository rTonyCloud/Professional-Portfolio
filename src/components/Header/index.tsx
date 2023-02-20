import { rtonycloudLogo } from 'public/icons'
import Image from 'next/image'
import * as styles from './header.styles'
import stylesGuide from '@/styles/components/components.styles'
import { Button } from '../UIComponents/'
import { githubIcon, linkedinIcon, heartIcon } from 'public/icons'

const { HeaderbuttonStyles } = stylesGuide()

const NavItems = ['About', 'Skills', 'Projects']

const MediaItems = [
    {
        image: (
            <Image src={githubIcon} alt="github" width="30" className="image" />
        ),
        title: 'Github',
        url: 'www.github.com/rtonycloud',
    },
    {
        image: <Image src={linkedinIcon} alt="Linkedin" width="30" />,
        title: 'LinkedIn',
        url: 'www.linkedin.com/in/tony-rivera-full-stack-engineer',
    },
]

const ButtonText = [
    {
        image: <Image src={heartIcon} alt="hello" width="20" />,
        text: 'Download Resume',
    },
]

const Header: React.FC = (): JSX.Element => {
    return (
        <styles.headerWrapper>
            <styles.headerContent>
                {NavItems.map((NavItems, index) => (
                    <styles.navContent key={index}>
                        {NavItems}
                    </styles.navContent>
                ))}
                <styles.SecondNav>
                    {MediaItems.map((MediaItems, index) => (
                        <styles.mediaItems key={index}>
                            <styles.MediaItemImage>
                                {MediaItems.image}
                            </styles.MediaItemImage>
                            <styles.MediaItemTitle>
                                {MediaItems.title}
                            </styles.MediaItemTitle>
                        </styles.mediaItems>
                    ))}
                    {ButtonText.map((ButtonText, index) => (
                        <Button
                            type="button"
                            key={index}
                            onClick={() => console.log('click me')}
                        >
                            {ButtonText.image}
                            {ButtonText.text}
                        </Button>
                    ))}
                </styles.SecondNav>
            </styles.headerContent>
            <styles.logoWrapper>
                <Image src={rtonycloudLogo} alt="rtonycloud-logo" width="200" />
            </styles.logoWrapper>
        </styles.headerWrapper>
    )
}

export default Header
