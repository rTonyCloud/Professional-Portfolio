import {rtonycloudLogo } from '@/assets/icons'
import Image from 'next/image'
import * as styles from './header.styles'
import { Button } from '../UIComponents/'
import {
    navItems,
    mediaItems,
    buttonText,
} from '@/utils/portfolioTexts/header.texts'
import stylesGuide from '@/styles/components/components.styles'

const { HeaderbuttonStyles } = stylesGuide()

const Header: React.FC = (): JSX.Element => {
    return (
        <styles.headerWrapper>
            <styles.headerContent>
                {navItems.map((navItem, index) => (
                    <styles.navContent key={index}>{navItem}</styles.navContent>
                ))}
                <styles.SecondNav>
                    {mediaItems.map((mediaItem, index) => (
                        <styles.mediaItems key={index}>
                            {mediaItem.image}
                            {mediaItem.title}
                        </styles.mediaItems>
                    ))}
                    {buttonText.map((buttonText) => (
                        <Button
                            type="button"
                            sx={HeaderbuttonStyles}
                            key={buttonText.text}
                            onClick={() => console.log('click me')}
                        >
                            {buttonText.image}
                            {buttonText.text}
                        </Button>
                    ))}
                </styles.SecondNav>
            </styles.headerContent>
            <styles.logoWrapper>
                <Image src={rtonycloudLogo} alt="rtonycloud logo" width="200" />
            </styles.logoWrapper>
        </styles.headerWrapper>
    )
}

export default Header
