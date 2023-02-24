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
    variantHeader?: Variant | undefined
    variantText?: Variant | undefined
    sxHeader?: React.CSSProperties | undefined
    sxBody?: React.CSSProperties | undefined
    onClick?: () => void
}

const AboutMeCard: React.FC<AboutMeProps> = (
    props: AboutMeProps
): JSX.Element => {
    const { title, link, image, width, height, alt, variantHeader, variantText, sxHeader, sxBody, onClick } = props
    return (
        <styles.Card onClick={onClick}>
            <styles.CardWrapper>
                <styles.CardText>
                    <Typography variant={variantHeader} sx={sxHeader}>
                        {title}
                    </Typography>
                    <Typography variant={variantText} sx={sxBody}>
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
