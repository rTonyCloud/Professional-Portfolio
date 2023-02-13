import Image, { StaticImageData } from 'next/image'
import { Typography } from '../..'
import * as styles from './FooterCards.styles'

interface FooterCardsProps {
    image: StaticImageData | string
    width: number
    height: number
    alt: string
    title: string
    onClick?: () => void
    href?: string
}

const style = {
    textAlign: 'center',
    marginTop: '20px',
}

const IconCardLayout: React.FC<FooterCardsProps> = (props: FooterCardsProps): JSX.Element => {
    const { image, height, width, alt, title } = props

    return (
        <styles.Card>
            <styles.Image>
                <Image src={image} width={width} height={height} alt={alt} />
            </styles.Image>
            <styles.Wrapper>
                <styles.Title>
                    <Typography variant="body1">{title}</Typography>
                </styles.Title>
            </styles.Wrapper>
        </styles.Card>
    )
}

export default IconCardLayout
