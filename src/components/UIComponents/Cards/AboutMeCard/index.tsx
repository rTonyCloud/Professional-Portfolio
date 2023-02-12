import { Typography } from '../..'
import * as styles from './AboutMeCards.styles'

interface AboutMeProps {
    title: string
    link: string
    image: React.ReactNode
}

const AboutMeCard: React.FC<AboutMeProps> = (
    props: AboutMeProps
): JSX.Element => {
    const { title, link, image } = props

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
                <styles.CardImage>{image}</styles.CardImage>
            </styles.CardWrapper>
        </styles.Card>
    )
}

export default AboutMeCard
