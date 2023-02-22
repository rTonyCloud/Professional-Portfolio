import { rtonycloudLogo } from 'public/icons'
import Image from 'next/image'
import * as styles from './header.styles'
import { Button } from '../UIComponents/'
import HeaderTexts from '@/utils/portfolioTexts/Header.texts'

const { NavItems, MediaItems, ButtonText } = HeaderTexts()

const downloadHandler = () => {
    const URL =
        'https://storage.googleapis.com/rtonycloud/TonyRivera-web2-cv.docx'
    if (typeof window !== 'undefined') {
        window.location.href = URL
    }
}

const Header: React.FC = (): JSX.Element => {
    return (
        <styles.HeaderWrapper>
            <styles.HeaderContent>
                {NavItems.map((NavItems, index) => (
                    <styles.NavContent key={index} href={NavItems.url}>
                        {NavItems.title}
                    </styles.NavContent>
                ))}
                <styles.SecondNav>
                    {MediaItems.map((MediaItems, index) => (
                        <styles.MediaItems
                            key={index}
                            target="_blank"
                            href={MediaItems.url}
                        >
                            <styles.MediaItemImage>
                                {MediaItems.image}
                            </styles.MediaItemImage>
                            <styles.MediaItemTitle>
                                {MediaItems.title}
                            </styles.MediaItemTitle>
                        </styles.MediaItems>
                    ))}
                    {ButtonText.map((ButtonText, index) => (
                        <Button
                            type="button"
                            key={index}
                            onClick={() => downloadHandler()}
                        >
                            {ButtonText.image}
                            {ButtonText.text}
                        </Button>
                    ))}
                </styles.SecondNav>
            </styles.HeaderContent>
            <styles.LogoWrapper>
                <Image src={rtonycloudLogo} alt="rtonycloud-logo" width="200" />
            </styles.LogoWrapper>
        </styles.HeaderWrapper>
    )
}

export default Header
