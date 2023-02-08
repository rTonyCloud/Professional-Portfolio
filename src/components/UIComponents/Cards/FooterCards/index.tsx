import { Typography } from '../..'
import * as styles from './FooterCard.styles'

interface props {
    image: React.ReactNode
    title: string
    href?: string
}

const style = {
    textAlign: 'center',
    marginTop: '20px',
}

const IconCardLayout: React.FC<props> = (props: props): JSX.Element => {
    const { image, title, href } = props

    return (
        <styles.Card>
            <styles.Image>{image}</styles.Image>
            <styles.Wrapper>
                <styles.Title>
                    <Typography variant="body1">
                        {href && title}
                    </Typography>
                </styles.Title>
            </styles.Wrapper>
        </styles.Card>
    )
}

export default IconCardLayout
