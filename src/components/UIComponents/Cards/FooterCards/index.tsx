import Image, { StaticImageData } from 'next/image'
import { Typography } from '../..'
import * as styles from './FooterCards.styles'
import { Variant } from '../../Typography'

interface FooterCardsProps {
    src: StaticImageData
    alt: string
    title: string
    onClick?: () => void
    variant?: Variant | undefined
    href?: string
}

const style = {
    textAlign: 'center',
    marginTop: '20px',
}

const IconCardLayout: React.FC<FooterCardsProps> = (
    props: FooterCardsProps
): JSX.Element => {
    const { src, title, alt, variant, onClick } = props

    return (
        <styles.Card onClick={onClick}>
            <styles.Image>
                <Image
                    src={src}
                    alt={alt}
                    width='50'
                    height='50'
                />
            </styles.Image>
            <styles.Wrapper>
                <styles.Title>
                    <Typography variant={variant}>{title}</Typography>
                </styles.Title>
            </styles.Wrapper>
        </styles.Card>
    )
}

export default IconCardLayout
