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
}

const AboutMeCard: React.FC<AboutMeProps> = (
    props: AboutMeProps
): JSX.Element => {
    const { title, link, image, width, height, alt, variant } = props
    return (
        <styles.Card>
            <styles.CardWrapper>
                <styles.CardText>
                    <Typography
                        variant="h5"
                        sx={{ color: 'white', marginTop: '10px' }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{ color: 'white', marginTop: '-10px' }}
                    >
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
