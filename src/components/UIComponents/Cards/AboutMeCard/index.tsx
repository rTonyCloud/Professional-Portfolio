import Image, { StaticImageData } from 'next/image'
import { Typography } from '../..'
import { Variant } from '../../Typography'
import * as styles from './AboutMeCards.styles'

interface AboutMeProps {
    title: string
    link: string
    image: StaticImageData
    width?: number | undefined
    height?: number | undefined
    alt: string
    variant?: Variant | undefined
    sx?: React.CSSProperties | undefined
}

const AboutMeCard: React.FC<AboutMeProps> = (
    props: AboutMeProps
): JSX.Element => {
    const { title, link, image, width, height, alt, variant, sx } = props
    return (
        <styles.Card>
            <styles.CardWrapper>
                <styles.CardText>
                    <Typography variant={variant} sx={sx}>
                        {title}
                    </Typography>
                    <Typography variant={variant} sx={sx}>
                        {link}
                    </Typography>
                </styles.CardText>
                <styles.CardImage>
                    <Image
                        src={image}
                        width={width}
                        height={height}
                        alt={alt}
                    />
                </styles.CardImage>
            </styles.CardWrapper>
        </styles.Card>
    )
}
export default AboutMeCard
