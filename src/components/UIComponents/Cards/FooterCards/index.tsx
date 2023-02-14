import Image, { StaticImageData } from 'next/image'
import { Typography } from '../..'
import * as styles from './FooterCards.styles'
import { Variant } from '../../Typography'

interface FooterCardsProps {
    image: StaticImageData | string
    width: number
    height: number
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

const IconCardLayout: React.FC<FooterCardsProps> = (props: FooterCardsProps): JSX.Element => {
    const { image, height, width, alt, title, variant, onClick } = props

    return (
        <styles.Card onClick={onClick}>
            <styles.Image>
                <Image src={image} width={width} height={height} alt={alt} />
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
