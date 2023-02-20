import { rtonycloudLogo } from 'public/icons'
import Image from 'next/image'
import * as styles from './header.styles'
import stylesGuide from '@/styles/components/components.styles'
import { Button } from '../UIComponents/'
//@ts-ignore
import {
    navItems,
    mediaItems,
    buttonText,
} from '@/utils/portfolioTexts/Header.texts'
//@ts-ignore
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
                            <styles.MediaItemImage>
                                {mediaItem.image}
                            </styles.MediaItemImage>
                            <styles.MediaItemTitle>
                                {mediaItem.title}
                            </styles.MediaItemTitle>
                        </styles.mediaItems>
                    ))}
                    {buttonText.map((buttonText, index) => (
                        <Button
                            type="button"
                            key={index}
                            onClick={() => console.log('click me')}
                        >
                            {buttonText.image}
                            {buttonText.text}
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
