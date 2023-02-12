import { Typography } from '../..'
import * as styles from './FooterCards.styles'

interface FooterCardsProps {
    image: React.ReactNode
    title: string
}

const style = {
    textAlign: 'center',
    marginTop: '20px',
}

const IconCardLayout: React.FC<FooterCardsProps> = (props: FooterCardsProps): JSX.Element => {
    const { image, title } = props

    return (
        <styles.Card>
            <styles.Image>{image}</styles.Image>
            <styles.Wrapper>
                <styles.Title>
                    <Typography variant="body1">
                        {title}
                    </Typography>
                </styles.Title>
            </styles.Wrapper>
        </styles.Card>
    )
}

export default IconCardLayout
